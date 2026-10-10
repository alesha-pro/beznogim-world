(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="186",ui={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},du=0,Sl=1,fu=2,Ss=1,pu=2,xs=3,Pi=0,ln=1,En=2,ti=0,ys=1,yl=2,bl=3,El=4,mu=5,Hi=100,gu=101,_u=102,xu=103,vu=104,Mu=200,Su=201,yu=202,bu=203,Hl=204,Vl=205,Eu=206,Tu=207,wu=208,Au=209,Ru=210,Cu=211,Pu=212,Lu=213,Du=214,_o=0,xo=1,vo=2,As=3,Mo=4,So=5,yo=6,bo=7,Wl=0,Iu=1,Nu=2,kn=0,Xl=1,ql=2,Yl=3,la=4,Zl=5,Kl=6,Jl=7,$l=300,Li=301,Yi=302,co=303,ho=304,br=306,hr=1e3,jn=1001,Eo=1002,We=1003,Uu=1004,Qs=1005,Xe=1006,uo=1007,wi=1008,dn=1009,Ql=1010,jl=1011,Rs=1012,ca=1013,Vn=1014,wn=1015,Wn=1016,ha=1017,ua=1018,Cs=1020,tc=35902,ec=35899,nc=1021,ic=1022,An=1023,ei=1026,Ai=1027,da=1028,fa=1029,Di=1030,pa=1031,ma=1033,nr=33776,ir=33777,sr=33778,rr=33779,To=35840,wo=35841,Ao=35842,Ro=35843,Co=36196,Po=37492,Lo=37496,Do=37488,Io=37489,ur=37490,No=37491,Uo=37808,Fo=37809,Oo=37810,Bo=37811,zo=37812,ko=37813,Go=37814,Ho=37815,Vo=37816,Wo=37817,Xo=37818,qo=37819,Yo=37820,Zo=37821,Ko=36492,Jo=36494,$o=36495,Qo=36283,jo=36284,dr=36285,ta=36286,Fu=3200,ea=0,Ou=1,li="",$e="srgb",fr="srgb-linear",pr="linear",me="srgb",fo=7680,Bu=519,zu=512,ku=513,Gu=514,ga=515,Hu=516,Vu=517,_a=518,Wu=519,Xu=35044,Tl="300 es",zn=2e3,Ps=2001;function tf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function na(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qu(){const n=na("canvas");return n.style.display="block",n}const th={};function wl(...n){const t="THREE."+n.shift();console.log(t,...n)}function Yu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=Yu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ce(...n){n=Yu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Xi(...n){const t=n.join(" ");t in th||(th[t]=!0,Jt(...n))}function ef(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const nf={[_o]:xo,[vo]:yo,[Mo]:bo,[As]:So,[xo]:_o,[yo]:vo,[bo]:Mo,[So]:As};class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let eh=1234567;const or=Math.PI/180,mr=180/Math.PI;function Ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function se(n,t,e){return Math.max(t,Math.min(e,n))}function sc(n,t){return(n%t+t)%t}function sf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function rf(n,t,e){return n!==t?(e-n)/(t-n):0}function ar(n,t,e){return(1-e)*n+e*t}function of(n,t,e,i){return ar(n,t,1-Math.exp(-e*i))}function af(n,t=1){return t-Math.abs(sc(n,t*2)-t)}function lf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function cf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function hf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function uf(n,t){return n+Math.random()*(t-n)}function df(n){return n*(.5-Math.random())}function ff(n){n!==void 0&&(eh=n);let t=eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pf(n){return n*or}function mf(n){return n*mr}function gf(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _f(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vf(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),d=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*f,c*u,a*l);break;case"YZY":n.set(c*u,a*h,c*f,a*l);break;case"ZXZ":n.set(c*f,c*u,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*d,a*l);break;case"YXY":n.set(c*d,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*d,a*h,a*l);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _s(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const un={DEG2RAD:or,RAD2DEG:mr,generateUUID:Ki,clamp:se,euclideanModulo:sc,mapLinear:sf,inverseLerp:rf,lerp:ar,damp:of,pingpong:af,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:xf,setQuaternionFromProperEuler:vf,normalize:en,denormalize:_s},zc=class zc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zc.prototype.isVector2=!0;let _t=zc;class pi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],d=r[o+1],g=r[o+2],S=r[o+3];if(f!==S||c!==u||l!==d||h!==g){let m=c*u+l*d+h*g+f*S;m<0&&(u=-u,d=-d,g=-g,S=-S,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+S*a}else{c=c*p+u*a,l=l*p+d*a,h=h*p+g*a,f=f*p+S*a;const M=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=M,l*=M,h*=M,f*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*d-l*u,t[e+1]=c*g+h*u+l*f-a*d,t[e+2]=l*g+h*d+a*u-c*f,t[e+3]=h*g-a*f-c*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f+u*d*g;break;case"YZX":this._x=u*h*f+l*d*g,this._y=l*d*f+u*h*g,this._z=l*h*g-u*d*f,this._w=l*h*f-u*d*g;break;case"XZY":this._x=u*h*f-l*d*g,this._y=l*d*f-u*h*g,this._z=l*h*g+u*d*f,this._w=l*h*f+u*d*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kc=class kc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kc.prototype.isVector3=!0;let P=kc;const Ga=new P,nh=new pi,Gc=class Gc{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],S=s[0],m=s[3],p=s[6],M=s[1],w=s[4],v=s[7],T=s[2],b=s[5],R=s[8];return r[0]=o*S+a*M+c*T,r[3]=o*m+a*w+c*b,r[6]=o*p+a*v+c*R,r[1]=l*S+h*M+f*T,r[4]=l*m+h*w+f*b,r[7]=l*p+h*v+f*R,r[2]=u*S+d*M+g*T,r[5]=u*m+d*w+g*b,r[8]=u*p+d*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return t[0]=f*S,t[1]=(s*l-h*i)*S,t[2]=(a*i-s*o)*S,t[3]=u*S,t[4]=(h*e-s*c)*S,t[5]=(s*r-a*e)*S,t[6]=d*S,t[7]=(i*c-l*e)*S,t[8]=(o*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Gc.prototype.isMatrix3=!0;let Qt=Gc;const Ha=new Qt,ih=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){const n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:t,whitePoint:i,transfer:pr,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:me,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const le=Mf();function di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class Zu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=na("canvas")),is.width=t.width,is.height=t.height;const s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(di(e[i]/255)*255):e[i]=di(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sf=0;class xa{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let yf=0;const Wa=new P;class qe extends gi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=jn,s=jn,r=Xe,o=wi,a=An,c=dn,l=qe.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ki(),this.name="",this.source=new xa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$l)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hr:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hr:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=$l;qe.DEFAULT_ANISOTROPY=1;const Hc=class Hc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],S=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,v=(d+1)/2,T=(p+1)/2,b=(h+u)/4,R=(f+S)/4,_=(g+m)/4;return w>v&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=b/i,r=R/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=b/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=_/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-S)/M,this.z=(u-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hc.prototype.isVector4=!0;let we=Hc;class Ku extends gi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new qe(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new xa(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Ku{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class rc extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ju extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const oa=class oa{constructor(t,e,i,s,r,o,a,c,l,h,f,u,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,S,m)}set(t,e,i,s,r,o,a,c,l,h,f,u,d,g,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oa().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,d=o*f,g=a*h,S=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=u-S*l,e[9]=-a*c,e[2]=S-u*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,d=c*f,g=l*h,S=l*f;e[0]=u+S*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=S+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,d=c*f,g=l*h,S=l*f;e[0]=u-S*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=S-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,d=o*f,g=a*h,S=a*f;e[0]=c*h,e[4]=g*l-d,e[8]=u*l+S,e[1]=c*f,e[5]=S*l+u,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,d=o*l,g=a*c,S=a*l;e[0]=c*h,e[4]=S-u*f,e[8]=g*f+d,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*f+g,e[10]=u-S*f}else if(t.order==="XZY"){const u=o*c,d=o*l,g=a*c,S=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=u*f+S,e[5]=o*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*h,e[10]=S*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Ef)}lookAt(t,e,i){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Si.crossVectors(i,mn),Si.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Si.crossVectors(i,mn)),Si.normalize(),Ur.crossVectors(mn,Si),s[0]=Si.x,s[4]=Ur.x,s[8]=mn.x,s[1]=Si.y,s[5]=Ur.y,s[9]=mn.y,s[2]=Si.z,s[6]=Ur.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],S=i[6],m=i[10],p=i[14],M=i[3],w=i[7],v=i[11],T=i[15],b=s[0],R=s[4],_=s[8],E=s[12],C=s[1],L=s[5],U=s[9],z=s[13],N=s[2],B=s[6],W=s[10],F=s[14],et=s[3],q=s[7],Q=s[11],tt=s[15];return r[0]=o*b+a*C+c*N+l*et,r[4]=o*R+a*L+c*B+l*q,r[8]=o*_+a*U+c*W+l*Q,r[12]=o*E+a*z+c*F+l*tt,r[1]=h*b+f*C+u*N+d*et,r[5]=h*R+f*L+u*B+d*q,r[9]=h*_+f*U+u*W+d*Q,r[13]=h*E+f*z+u*F+d*tt,r[2]=g*b+S*C+m*N+p*et,r[6]=g*R+S*L+m*B+p*q,r[10]=g*_+S*U+m*W+p*Q,r[14]=g*E+S*z+m*F+p*tt,r[3]=M*b+w*C+v*N+T*et,r[7]=M*R+w*L+v*B+T*q,r[11]=M*_+w*U+v*W+T*Q,r[15]=M*E+w*z+v*F+T*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],S=t[7],m=t[11],p=t[15],M=c*d-l*u,w=a*d-l*f,v=a*u-c*f,T=o*d-l*h,b=o*u-c*h,R=o*f-a*h;return e*(S*M-m*w+p*v)-i*(g*M-m*T+p*b)+s*(g*w-S*T+p*R)-r*(g*v-S*b+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],S=t[13],m=t[14],p=t[15],M=e*a-i*o,w=e*c-s*o,v=e*l-r*o,T=i*c-s*a,b=i*l-r*a,R=s*l-r*c,_=h*S-f*g,E=h*m-u*g,C=h*p-d*g,L=f*m-u*S,U=f*p-d*S,z=u*p-d*m,N=M*z-w*U+v*L+T*C-b*E+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=(a*z-c*U+l*L)*B,t[1]=(s*U-i*z-r*L)*B,t[2]=(S*R-m*b+p*T)*B,t[3]=(u*b-f*R-d*T)*B,t[4]=(c*C-o*z-l*E)*B,t[5]=(e*z-s*C+r*E)*B,t[6]=(m*v-g*R-p*w)*B,t[7]=(h*R-u*v+d*w)*B,t[8]=(o*U-a*C+l*_)*B,t[9]=(i*C-e*U-r*_)*B,t[10]=(g*b-S*v+p*M)*B,t[11]=(f*v-h*b-d*M)*B,t[12]=(a*E-o*L-c*_)*B,t[13]=(e*L-i*E+s*_)*B,t[14]=(S*w-g*T-m*M)*B,t[15]=(h*T-f*w+u*M)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,g=r*f,S=o*h,m=o*f,p=a*f,M=c*l,w=c*h,v=c*f,T=i.x,b=i.y,R=i.z;return s[0]=(1-(S+p))*T,s[1]=(d+v)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(u+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(g+w)*R,s[9]=(m-M)*R,s[10]=(1-(u+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=ss.set(s[0],s[1],s[2]).length();const a=ss.set(s[4],s[5],s[6]).length(),c=ss.set(s[8],s[9],s[10]).length();r<0&&(o=-o),In.copy(this);const l=1/o,h=1/a,f=1/c;return In.elements[0]*=l,In.elements[1]*=l,In.elements[2]*=l,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,e.setFromRotationMatrix(In),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=zn,c=!1){const l=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let g,S;if(c)g=r/(o-r),S=o*r/(o-r);else if(a===zn)g=-(o+r)/(o-r),S=-2*o*r/(o-r);else if(a===Ps)g=-o/(o-r),S=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=zn,c=!1){const l=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s);let g,S;if(c)g=1/(o-r),S=o/(o-r);else if(a===zn)g=-2/(o-r),S=-(o+r)/(o-r);else if(a===Ps)g=-1/(o-r),S=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};oa.prototype.isMatrix4=!0;let ue=oa;const ss=new P,In=new ue,bf=new P(0,0,0),Ef=new P(1,1,1),Si=new P,Ur=new P,mn=new P,rh=new ue,oh=new pi;class mi{constructor(t=0,e=0,i=0,s=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-se(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class va{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tf=0;const ah=new P,rs=new pi,ii=new ue,Fr=new P,Hs=new P,wf=new P,Af=new pi,lh=new P(1,0,0),ch=new P(0,1,0),hh=new P(0,0,1),uh={type:"added"},Rf={type:"removed"},os={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Ue extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new P,e=new mi,i=new pi,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Qt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Fr.copy(t):Fr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Hs,Fr,this.up):ii.lookAt(Fr,Hs,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ii),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),os.child=t,this.dispatchEvent(os),os.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),Xa.child=t,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new P(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ri extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(l,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&u>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ri;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const $u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function qa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=sc(t,1),e=se(e,0,1),i=se(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=qa(o,r,t+1/3),this.g=qa(o,r,t),this.b=qa(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=$u[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return le.workingToColorSpace(Je.copy(this),t),Math.round(se(Je.r*255,0,255))*65536+Math.round(se(Je.g*255,0,255))*256+Math.round(se(Je.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Je.copy(this),e);const i=Je.r,s=Je.g,r=Je.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=$e){le.workingToColorSpace(Je.copy(this),t);const e=Je.r,i=Je.g,s=Je.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Or);const i=ar(yi.h,Or.h,e),s=ar(yi.s,Or.s,e),r=ar(yi.l,Or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new oe;oe.NAMES=$u;class Ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new oe(t),this.density=e}clone(){return new Ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Qu extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Nn=new P,si=new P,Ya=new P,ri=new P,as=new P,ls=new P,dh=new P,Za=new P,Ka=new P,Ja=new P,$a=new we,Qa=new we,ja=new we;class Tn{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),si.subVectors(i,e),Ya.subVectors(t,e);const o=Nn.dot(Nn),a=Nn.dot(si),c=Nn.dot(Ya),l=si.dot(si),h=si.dot(Ya),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return $a.setScalar(0),Qa.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(t,e),Qa.fromBufferAttribute(t,i),ja.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector($a,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(ja,r.z),o}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),si.subVectors(t,e),Nn.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Nn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,i),ls.subVectors(r,i),Za.subVectors(t,i);const c=as.dot(Za),l=ls.dot(Za);if(c<=0&&l<=0)return e.copy(i);Ka.subVectors(t,s);const h=as.dot(Ka),f=ls.dot(Ka);if(h>=0&&f<=h)return e.copy(s);const u=c*f-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(as,o);Ja.subVectors(t,r);const d=as.dot(Ja),g=ls.dot(Ja);if(g>=0&&d<=g)return e.copy(r);const S=d*l-c*g;if(S<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ls,a);const m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return dh.subVectors(r,s),a=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(dh,a);const p=1/(m+S+u);return o=S*p,a=u*p,e.copy(i).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Un):Un.fromBufferAttribute(r,o),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),zr.subVectors(this.max,Vs),cs.subVectors(t.a,Vs),hs.subVectors(t.b,Vs),us.subVectors(t.c,Vs),bi.subVectors(hs,cs),Ei.subVectors(us,hs),Fi.subVectors(cs,us);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Fi.z,Fi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Fi.z,0,-Fi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Fi.y,Fi.x,0];return!tl(e,cs,hs,us,zr)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,cs,hs,us,zr))?!1:(kr.crossVectors(bi,Ei),e=[kr.x,kr.y,kr.z],tl(e,cs,hs,us,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oi=[new P,new P,new P,new P,new P,new P,new P,new P],Un=new P,Br=new Ii,cs=new P,hs=new P,us=new P,bi=new P,Ei=new P,Fi=new P,Vs=new P,zr=new P,kr=new P,Oi=new P;function tl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Oi.fromArray(n,r);const a=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=i.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Ne=new P,Gr=new _t;let Pf=0;class Cn extends gi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xu,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Gr.fromBufferAttribute(this,e),Gr.applyMatrix3(t),this.setXY(e,Gr.x,Gr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=_s(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class oc extends Cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ac extends Cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends Cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Lf=new Ii,Ws=new P,el=new P;class Ji{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Lf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(el)),this.expandByPoint(Ws.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Df=0;const Sn=new ue,nl=new Ue,ds=new P,gn=new Ii,Xs=new Ii,Ve=new P;class Oe extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(tf(t)?ac:oc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(gn.min,Xs.min),gn.expandByPoint(Ve),Ve.addVectors(gn.max,Xs.max),gn.expandByPoint(Ve)):(gn.expandByPoint(Xs.min),gn.expandByPoint(Xs.max))}gn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(t,l),Ve.add(ds)),s=Math.max(s,i.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Cn(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new P,c[_]=new P;const l=new P,h=new P,f=new P,u=new _t,d=new _t,g=new _t,S=new P,m=new P;function p(_,E,C){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,E),f.fromBufferAttribute(i,C),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,C),h.sub(l),f.sub(l),d.sub(u),g.sub(u);const L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[_].add(S),a[E].add(S),a[C].add(S),c[_].add(m),c[E].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,E=M.length;_<E;++_){const C=M[_],L=C.start,U=C.count;for(let z=L,N=L+U;z<N;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new P,v=new P,T=new P,b=new P;function R(_){T.fromBufferAttribute(s,_),b.copy(T);const E=a[_];w.copy(E),w.sub(T.multiplyScalar(T.dot(E))).normalize(),v.crossVectors(b,E);const L=v.dot(c[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,L)}for(let _=0,E=M.length;_<E;++_){const C=M[_],L=C.start,U=C.count;for(let z=L,N=L+U;z<N;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,f=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const g=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h);let d=0,g=0;for(let S=0,m=c.length;S<m;S++){a.isInterleavedBufferAttribute?d=c[S]*a.data.stride+a.offset:d=c[S]*h;for(let p=0;p<h;p++)u[g++]=l[d++]}return new Cn(u,h,f)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const u=l[h],d=t(u,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){const d=l[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new P,If=new P,Nf=new Qt;class Qn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=il.subVectors(i,e).cross(If.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(il),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Nf.getNormalMatrix(t),s=this.coplanarPoint(il).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let Uf=0;class $i extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=ys,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new oe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Qn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _t().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ai=new P,sl=new P,Hr=new P,Vr=new P;class Er{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){sl.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Vr.copy(this.origin).sub(sl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Hr),a=Vr.dot(this.direction),c=-Vr.dot(Hr),l=Vr.lengthSq(),h=Math.abs(1-o*o);let f,u,d,g;if(h>0)if(f=o*c-a,u=o*a-c,g=r*h,f>=0)if(u>=-g)if(u<=g){const S=1/h;f*=S,u*=S,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sl).addScaledVector(Hr,u),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,d=t.z-o.z,g=e.x-o.x,S=e.y-o.y,m=e.z-o.z,p=i.x-o.x,M=i.y-o.y,w=i.z-o.z,v=Math.abs(c),T=Math.abs(l),b=Math.abs(h);let R,_,E,C,L,U,z,N,B,W,F,et;if(v>=T&&v>=b?(E=c,U=f,B=g,et=p,c>=0?(R=l,_=h,C=u,L=d,z=S,N=m,W=M,F=w):(R=h,_=l,C=d,L=u,z=m,N=S,W=w,F=M)):T>=b?(E=l,U=u,B=S,et=M,l>=0?(R=h,_=c,C=d,L=f,z=m,N=g,W=w,F=p):(R=c,_=h,C=f,L=d,z=g,N=m,W=p,F=w)):(E=h,U=d,B=m,et=w,h>=0?(R=c,_=l,C=f,L=u,z=g,N=S,W=p,F=M):(R=l,_=c,C=u,L=f,z=S,N=g,W=M,F=p)),E===0)return null;const q=R/E,Q=_/E,tt=1/E,pt=C-q*U,mt=L-Q*U,Xt=z-q*B,qt=N-Q*B,ft=W-q*et,I=F-Q*et,V=ft*qt-I*Xt,ot=pt*I-mt*ft,vt=Xt*mt-qt*pt;if(s){if(V<0||ot<0||vt<0)return null}else if((V<0||ot<0||vt<0)&&(V>0||ot>0||vt>0))return null;const ht=V+ot+vt;if(ht===0)return null;const gt=tt*(V*U+ot*B+vt*et);return(ht>0?gt<0:gt>0)?null:this.at(gt/ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tr extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fh=new ue,Bi=new Er,Wr=new Ji,ph=new P,Xr=new P,qr=new P,Yr=new P,rl=new P,Zr=new P,mh=new P,Kr=new P;class cn extends Ue{constructor(t=new Oe,e=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(rl.fromBufferAttribute(f,t),o?Zr.addScaledVector(rl,h):Zr.addScaledVector(rl.sub(e),h))}e.add(Zr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wr.copy(i.boundingSphere),Wr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(Wr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Wr,ph)===null||Bi.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(fh.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(fh),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=w;v<T;v+=3){const b=a.getX(v),R=a.getX(v+1),_=a.getX(v+2);s=Jr(this,p,t,i,l,h,f,b,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(a.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const M=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=Jr(this,o,t,i,l,h,f,M,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,S=u.length;g<S;g++){const m=u[g],p=o[m.materialIndex],M=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,T=w;v<T;v+=3){const b=v,R=v+1,_=v+2;s=Jr(this,p,t,i,l,h,f,b,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),S=Math.min(c.count,d.start+d.count);for(let m=g,p=S;m<p;m+=3){const M=m,w=m+1,v=m+2;s=Jr(this,o,t,i,l,h,f,M,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Ff(n,t,e,i,s,r,o,a){let c;if(t.side===ln?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Pi,a),c===null)return null;Kr.copy(a),Kr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Kr);return l<e.near||l>e.far?null:{distance:l,point:Kr.clone(),object:n}}function Jr(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Xr),n.getVertexPosition(c,qr),n.getVertexPosition(l,Yr);const h=Ff(n,t,e,i,Xr,qr,Yr,mh);if(h){const f=new P;Tn.getBarycoord(mh,Xr,qr,Yr,f),s&&(h.uv=Tn.getInterpolatedAttribute(s,a,c,l,f,new _t)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,a,c,l,f,new _t)),o&&(h.normal=Tn.getInterpolatedAttribute(o,a,c,l,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new P,materialIndex:0};Tn.getNormal(Xr,qr,Yr,u.normal),h.face=u,h.barycoord=f}return h}class lc extends qe{constructor(t=null,e=1,i=1,s,r,o,a,c,l=We,h=We,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends Cn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fs=new ue,gh=new ue,$r=[],_h=new Ii,Of=new ue,qs=new cn,Ys=new Ji;class Rl extends cn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Of)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),_h.copy(t.boundingBox).applyMatrix4(fs),this.boundingBox.union(_h)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,fs),Ys.copy(t.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(Ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ys.copy(this.boundingSphere),Ys.applyMatrix4(i),t.ray.intersectsSphere(Ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),gh.multiplyMatrices(i,fs),qs.matrixWorld=gh,qs.raycast(t,$r);for(let o=0,a=$r.length;o<a;o++){const c=$r[o];c.instanceId=r,c.object=this,e.push(c)}$r.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lc(new Float32Array(s*this.count),s,this.count,da,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zi=new Ji,Bf=new _t(.5,.5),Qr=new P;class Sa{constructor(t=new Qn,e=new Qn,i=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],S=r[9],m=r[10],p=r[11],M=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,p-g,T-M).normalize(),s[1].setComponents(l+o,d+h,p+g,T+M).normalize(),s[2].setComponents(l+a,d+f,p+S,T+w).normalize(),s[3].setComponents(l-a,d-f,p-S,T-w).normalize(),i)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,d-u,p-m,T-v).normalize();else if(s[4].setComponents(l-c,d-u,p-m,T-v).normalize(),e===zn)s[5].setComponents(l+c,d+u,p+m,T+v).normalize();else if(e===Ps)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(t){zi.center.set(0,0,0);const e=Bf.distanceTo(t.center);return zi.radius=.7071067811865476+e,zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cc extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xh=new ue,Cl=new Er,jr=new Ji,to=new P;class ju extends Ue{constructor(t=new Oe,e=new cc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;xh.copy(s).invert(),Cl.copy(t.ray).applyMatrix4(xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,f=i.attributes.position;if(l!==null){const u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=u,S=d;g<S;g++){const m=l.getX(g);to.fromBufferAttribute(f,m),vh(to,m,c,s,t,e,this)}}else{const u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=u,S=d;g<S;g++)to.fromBufferAttribute(f,g),vh(to,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vh(n,t,e,i,s,r,o){const a=Cl.distanceSqToPoint(n);if(a<e){const c=new P;Cl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class hc extends qe{constructor(t=[],e=Li,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uc extends qe{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends qe{constructor(t,e,i=Vn,s,r,o,a=We,c=We,l,h=ei,f=1){if(h!==ei&&h!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class td extends Ls{constructor(t,e=Vn,i=Li,s,r,o=We,a=We,c,l=ei){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class dc extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _i extends Oe{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let u=0,d=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2));function g(S,m,p,M,w,v,T,b,R,_,E){const C=v/R,L=T/_,U=v/2,z=T/2,N=b/2,B=R+1,W=_+1;let F=0,et=0;const q=new P;for(let Q=0;Q<W;Q++){const tt=Q*L-z;for(let pt=0;pt<B;pt++){const mt=pt*C-U;q[S]=mt*M,q[m]=tt*w,q[p]=N,l.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[p]=b>0?1:-1,h.push(q.x,q.y,q.z),f.push(pt/R),f.push(1-Q/_),F+=1}}for(let Q=0;Q<_;Q++)for(let tt=0;tt<R;tt++){const pt=u+tt+B*Q,mt=u+tt+B*(Q+1),Xt=u+(tt+1)+B*(Q+1),qt=u+(tt+1)+B*Q;c.push(pt,mt,qt),c.push(mt,Xt,qt),et+=6}a.addGroup(d,et,E),d+=et,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ya extends Oe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new P,h=new _t;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ya(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class wr extends Oe{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let g=0;const S=[],m=i/2;let p=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function M(){const v=new P,T=new P;let b=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const E=[],C=_/r,L=C*(e-t)+t;for(let U=0;U<=s;U++){const z=U/s,N=z*c+a,B=Math.sin(N),W=Math.cos(N);T.x=L*B,T.y=-C*i+m,T.z=L*W,f.push(T.x,T.y,T.z),v.set(B,R,W).normalize(),u.push(v.x,v.y,v.z),d.push(z,1-C),E.push(g++)}S.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const C=S[E][_],L=S[E+1][_],U=S[E+1][_+1],z=S[E][_+1];(t>0||E!==0)&&(h.push(C,L,z),b+=3),(e>0||E!==r-1)&&(h.push(L,U,z),b+=3)}l.addGroup(p,b,0),p+=b}function w(v){const T=g,b=new _t,R=new P;let _=0;const E=v===!0?t:e,C=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;const L=g;for(let U=0;U<=s;U++){const N=U/s*c+a,B=Math.cos(N),W=Math.sin(N);R.x=E*W,R.y=m*C,R.z=E*B,f.push(R.x,R.y,R.z),u.push(0,C,0),b.x=B*.5+.5,b.y=W*.5*C+.5,d.push(b.x,b.y),g++}for(let U=0;U<s;U++){const z=T+U,N=L+U;v===!0?h.push(N,N+1,z):h.push(N+1,N,z),_+=3}l.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qi extends wr{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Qi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ba extends Oe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const w=new P,v=new P,T=new P;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],v),d(e[b+2],T),c(w,v,T,M)}function c(M,w,v,T){const b=T+1,R=[];for(let _=0;_<=b;_++){R[_]=[];const E=M.clone().lerp(v,_/b),C=w.clone().lerp(v,_/b),L=b-_;for(let U=0;U<=L;U++)U===0&&_===b?R[_][U]=E:R[_][U]=E.clone().lerp(C,U/L)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){const C=Math.floor(E/2);E%2===0?(u(R[_][C+1]),u(R[_+1][C]),u(R[_][C])):(u(R[_][C+1]),u(R[_+1][C+1]),u(R[_+1][C]))}}function l(M){const w=new P;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(M),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){const M=new P;for(let w=0;w<r.length;w+=3){M.x=r[w+0],M.y=r[w+1],M.z=r[w+2];const v=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(v,1-T)}g(),f()}function f(){for(let M=0;M<o.length;M+=6){const w=o[M+0],v=o[M+2],T=o[M+4],b=Math.max(w,v,T),R=Math.min(w,v,T);b>.9&&R<.1&&(w<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function d(M,w){const v=M*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){const M=new P,w=new P,v=new P,T=new P,b=new _t,R=new _t,_=new _t;for(let E=0,C=0;E<r.length;E+=9,C+=6){M.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(o[C+0],o[C+1]),R.set(o[C+2],o[C+3]),_.set(o[C+4],o[C+5]),T.copy(M).add(w).add(v).divideScalar(3);const L=m(T);S(b,C+0,M,L),S(R,C+2,w,L),S(_,C+4,v,L)}}function S(M,w,v,T){T<0&&M.x===1&&(o[w]=M.x-1),v.x===0&&v.z===0&&(o[w]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.vertices,t.indices,t.radius,t.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new _t:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new P,s=[],r=[],o=[],a=new P,c=new ue;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),u<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ea extends Xn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ed extends Ea{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fc(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Mh=new P,Sh=new P,ol=new fc,al=new fc,ll=new fc;class pc extends Xn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new P){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Sh.subVectors(s[0],s[1]).add(s[0]),l=Sh);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Mh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mh),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),ol.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,g,S,m),al.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,g,S,m),ll.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,g,S,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),al.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),ll.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return i.set(ol.calc(c),al.calc(c),ll.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function zf(n,t){const e=1-n;return e*e*t}function kf(n,t){return 2*(1-n)*n*t}function Gf(n,t){return n*n*t}function lr(n,t,e,i){return zf(n,t)+kf(n,e)+Gf(n,i)}function Hf(n,t){const e=1-n;return e*e*e*t}function Vf(n,t){const e=1-n;return 3*e*e*n*t}function Wf(n,t){return 3*(1-n)*n*n*t}function Xf(n,t){return n*n*n*t}function cr(n,t,e,i,s){return Hf(n,t)+Vf(n,e)+Wf(n,i)+Xf(n,s)}class mc extends Xn{constructor(t=new _t,e=new _t,i=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _t){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nd extends Xn{constructor(t=new P,e=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(cr(t,s.x,r.x,o.x,a.x),cr(t,s.y,r.y,o.y,a.y),cr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gc extends Xn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class id extends Xn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends Xn{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xc extends Xn{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(lr(t,s.x,r.x,o.x),lr(t,s.y,r.y,o.y),lr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vc extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(yh(a,c.x,l.x,h.x,f.x),yh(a,c.y,l.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var ia=Object.freeze({__proto__:null,ArcCurve:ed,CatmullRomCurve3:pc,CubicBezierCurve:mc,CubicBezierCurve3:nd,EllipseCurve:Ea,LineCurve:gc,LineCurve3:id,QuadraticBezierCurve:_c,QuadraticBezierCurve3:xc,SplineCurve:vc});class sd extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new ia[s.type]().fromJSON(s))}return this}}class Pl extends sd{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new gc(this.currentPoint.clone(),new _t(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new _c(this.currentPoint.clone(),new _t(t,e),new _t(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new mc(this.currentPoint.clone(),new _t(t,e),new _t(i,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new vc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new Ea(t,e,i,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ar extends Pl{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Pl().fromJSON(s))}return this}}function qf(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=rd(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(i&&(r=$f(n,t,r,e)),n.length>80*e){a=n[0],c=n[1];let h=a,f=c;for(let u=e;u<s;u+=e){const d=n[u],g=n[u+1];d<a&&(a=d),g<c&&(c=g),d>h&&(h=d),g>f&&(f=g)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return gr(r,o,e,a,c,l,0),o}function rd(n,t,e,i,s){let r;if(s===lp(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=bh(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=bh(o/i|0,n[o],n[o+1],r);return r&&Ds(r,r.next)&&(xr(r),r=r.next),r}function Zi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ds(e,e.next)||Ae(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function gr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&np(n,i,s,r);let a=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Zf(n,i,s,r):Yf(n)){t.push(c.i,n.i,l.i),xr(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=Kf(Zi(n),t),gr(n,t,e,i,s,r,2)):o===2&&Jf(n,t,e,i,s,r):gr(Zi(n),t,e,i,s,r,1);break}}}function Yf(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=Math.min(s,r,o),f=Math.min(a,c,l),u=Math.max(s,r,o),d=Math.max(a,c,l);let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&js(s,a,r,c,o,l,g.x,g.y)&&Ae(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Zf(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Ae(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,c,l),g=Math.min(h,f,u),S=Math.max(a,c,l),m=Math.max(h,f,u),p=Ll(d,g,t,e,i),M=Ll(S,m,t,e,i);let w=n.prevZ,v=n.nextZ;for(;w&&w.z>=p&&v&&v.z<=M;){if(w.x>=d&&w.x<=S&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&js(a,h,c,f,l,u,w.x,w.y)&&Ae(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,h,c,f,l,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=S&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&js(a,h,c,f,l,u,w.x,w.y)&&Ae(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=S&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&js(a,h,c,f,l,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Kf(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Ds(i,s)&&ad(i,e,e.next,s)&&_r(i,s)&&_r(s,i)&&(t.push(i.i,e.i,s.i),xr(e),xr(e.next),e=n=s),e=e.next}while(e!==n);return Zi(e)}function Jf(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&rp(o,a)){let c=ld(o,a);o=Zi(o,o.next),c=Zi(c,c.next),gr(o,t,e,i,s,r,0),gr(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function $f(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=rd(n,a,c,i,!1);l===l.next&&(l.steiner=!0),s.push(sp(l))}s.sort(Qf);for(let r=0;r<s.length;r++)e=jf(s[r],e);return e}function Qf(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function jf(n,t){const e=tp(n,t);if(!e)return t;const i=ld(e,n);return Zi(i,i.next),Zi(e,e.next)}function tp(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(Ds(n,e))return e;do{if(Ds(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(i>=e.x&&e.x>=c&&i!==e.x&&od(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const f=Math.abs(s-e.y)/(i-e.x);_r(e,n)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&ep(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function ep(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function np(n,t,e,i){let s=n;do s.z===0&&(s.z=Ll(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ip(s)}function ip(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Ll(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function sp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function od(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function js(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&od(n,t,e,i,s,r,o,a)}function rp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!op(n,t)&&(_r(n,t)&&_r(t,n)&&ap(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||Ds(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ds(n,t){return n.x===t.x&&n.y===t.y}function ad(n,t,e,i){const s=no(Ae(n,t,e)),r=no(Ae(n,t,i)),o=no(Ae(e,i,n)),a=no(Ae(e,i,t));return!!(s!==r&&o!==a||s===0&&eo(n,e,t)||r===0&&eo(n,i,t)||o===0&&eo(e,n,i)||a===0&&eo(e,t,i))}function eo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function no(n){return n>0?1:n<0?-1:0}function op(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ad(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _r(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function ap(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ld(n,t){const e=Dl(n.i,n.x,n.y),i=Dl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function bh(n,t,e,i){const s=Dl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Dl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lp(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class cp{static triangulate(t,e,i=2){return qf(t,e,i)}}class Wi{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Wi.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Eh(t),Th(i,t);let o=t.length;e.forEach(Eh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Th(i,e[c]);const a=cp.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Eh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Th(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Fs extends Oe{constructor(t=new Ar([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new de(s,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:hp;let w,v=!1,T,b,R,_;if(p){w=p.getSpacedPoints(h),v=!0,u=!1;const nt=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,nt),b=new P,R=new P,_=new P}u||(m=0,d=0,g=0,S=0);const E=a.extractPoints(l);let C=E.shape;const L=E.holes;if(!Wi.isClockWise(C)){C=C.reverse();for(let nt=0,ut=L.length;nt<ut;nt++){const G=L[nt];Wi.isClockWise(G)&&(L[nt]=G.reverse())}}function z(nt){const G=10000000000000001e-36;let J=nt[0];for(let ct=1;ct<=nt.length;ct++){const X=ct%nt.length,st=nt[X],yt=st.x-J.x,Lt=st.y-J.y,D=yt*yt+Lt*Lt,Ht=Math.max(Math.abs(st.x),Math.abs(st.y),Math.abs(J.x),Math.abs(J.y)),Nt=G*Ht*Ht;if(D<=Nt){nt.splice(X,1),ct--;continue}J=st}}z(C),L.forEach(z);const N=L.length,B=C;for(let nt=0;nt<N;nt++){const ut=L[nt];C=C.concat(ut)}function W(nt,ut,G){return ut||ce("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ut,G)}const F=C.length;function et(nt,ut,G){let J,ct,X;const st=nt.x-ut.x,yt=nt.y-ut.y,Lt=G.x-nt.x,D=G.y-nt.y,Ht=st*st+yt*yt,Nt=st*D-yt*Lt;if(Math.abs(Nt)>Number.EPSILON){const A=Math.sqrt(Ht),x=Math.sqrt(Lt*Lt+D*D),H=ut.x-yt/A,K=ut.y+st/A,j=G.x-D/x,xt=G.y+Lt/x,St=((j-H)*D-(xt-K)*Lt)/(st*D-yt*Lt);J=H+st*St-nt.x,ct=K+yt*St-nt.y;const it=J*J+ct*ct;if(it<=2)return new _t(J,ct);X=Math.sqrt(it/2)}else{let A=!1;st>Number.EPSILON?Lt>Number.EPSILON&&(A=!0):st<-Number.EPSILON?Lt<-Number.EPSILON&&(A=!0):Math.sign(yt)===Math.sign(D)&&(A=!0),A?(J=-yt,ct=st,X=Math.sqrt(Ht)):(J=st,ct=yt,X=Math.sqrt(Ht/2))}return new _t(J/X,ct/X)}const q=[];for(let nt=0,ut=B.length,G=ut-1,J=nt+1;nt<ut;nt++,G++,J++)G===ut&&(G=0),J===ut&&(J=0),q[nt]=et(B[nt],B[G],B[J]);const Q=[];let tt,pt=q.concat();for(let nt=0,ut=N;nt<ut;nt++){const G=L[nt];tt=[];for(let J=0,ct=G.length,X=ct-1,st=J+1;J<ct;J++,X++,st++)X===ct&&(X=0),st===ct&&(st=0),tt[J]=et(G[J],G[X],G[st]);Q.push(tt),pt=pt.concat(tt)}let mt;if(m===0)mt=Wi.triangulateShape(B,L);else{const nt=[],ut=[];for(let G=0;G<m;G++){const J=G/m,ct=d*Math.cos(J*Math.PI/2),X=g*Math.sin(J*Math.PI/2)+S;for(let st=0,yt=B.length;st<yt;st++){const Lt=W(B[st],q[st],X);ot(Lt.x,Lt.y,-ct),J===0&&nt.push(Lt)}for(let st=0,yt=N;st<yt;st++){const Lt=L[st];tt=Q[st];const D=[];for(let Ht=0,Nt=Lt.length;Ht<Nt;Ht++){const A=W(Lt[Ht],tt[Ht],X);ot(A.x,A.y,-ct),J===0&&D.push(A)}J===0&&ut.push(D)}}mt=Wi.triangulateShape(nt,ut)}const Xt=mt.length,qt=g+S;for(let nt=0;nt<F;nt++){const ut=u?W(C[nt],pt[nt],qt):C[nt];v?(R.copy(T.normals[0]).multiplyScalar(ut.x),b.copy(T.binormals[0]).multiplyScalar(ut.y),_.copy(w[0]).add(R).add(b),ot(_.x,_.y,_.z)):ot(ut.x,ut.y,0)}for(let nt=1;nt<=h;nt++)for(let ut=0;ut<F;ut++){const G=u?W(C[ut],pt[ut],qt):C[ut];v?(R.copy(T.normals[nt]).multiplyScalar(G.x),b.copy(T.binormals[nt]).multiplyScalar(G.y),_.copy(w[nt]).add(R).add(b),ot(_.x,_.y,_.z)):ot(G.x,G.y,f/h*nt)}for(let nt=m-1;nt>=0;nt--){const ut=nt/m,G=d*Math.cos(ut*Math.PI/2),J=g*Math.sin(ut*Math.PI/2)+S;for(let ct=0,X=B.length;ct<X;ct++){const st=W(B[ct],q[ct],J);ot(st.x,st.y,f+G)}for(let ct=0,X=L.length;ct<X;ct++){const st=L[ct];tt=Q[ct];for(let yt=0,Lt=st.length;yt<Lt;yt++){const D=W(st[yt],tt[yt],J);v?ot(D.x,D.y+w[h-1].y,w[h-1].x+G):ot(D.x,D.y,f+G)}}}ft(),I();function ft(){const nt=s.length/3;if(u){let ut=0,G=F*ut;for(let J=0;J<Xt;J++){const ct=mt[J];vt(ct[2]+G,ct[1]+G,ct[0]+G)}ut=h+m*2,G=F*ut;for(let J=0;J<Xt;J++){const ct=mt[J];vt(ct[0]+G,ct[1]+G,ct[2]+G)}}else{for(let ut=0;ut<Xt;ut++){const G=mt[ut];vt(G[2],G[1],G[0])}for(let ut=0;ut<Xt;ut++){const G=mt[ut];vt(G[0]+F*h,G[1]+F*h,G[2]+F*h)}}i.addGroup(nt,s.length/3-nt,0)}function I(){const nt=s.length/3;let ut=0;V(B,ut),ut+=B.length;for(let G=0,J=L.length;G<J;G++){const ct=L[G];V(ct,ut),ut+=ct.length}i.addGroup(nt,s.length/3-nt,1)}function V(nt,ut){let G=nt.length;for(;--G>=0;){const J=G;let ct=G-1;ct<0&&(ct=nt.length-1);for(let X=0,st=h+m*2;X<st;X++){const yt=F*X,Lt=F*(X+1),D=ut+J+yt,Ht=ut+ct+yt,Nt=ut+ct+Lt,A=ut+J+Lt;ht(D,Ht,Nt,A)}}}function ot(nt,ut,G){c.push(nt),c.push(ut),c.push(G)}function vt(nt,ut,G){gt(nt),gt(ut),gt(G);const J=s.length/3,ct=M.generateTopUV(i,s,J-3,J-2,J-1);bt(ct[0]),bt(ct[1]),bt(ct[2])}function ht(nt,ut,G,J){gt(nt),gt(ut),gt(J),gt(ut),gt(G),gt(J);const ct=s.length/3,X=M.generateSideWallUV(i,s,ct-6,ct-3,ct-2,ct-1);bt(X[0]),bt(X[1]),bt(X[3]),bt(X[1]),bt(X[2]),bt(X[3])}function gt(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function bt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return up(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ia[s.type]().fromJSON(s)),new Fs(i,t.options)}}const hp={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,o),new _t(a,c),new _t(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new _t(o,1-c),new _t(l,1-f),new _t(u,1-g),new _t(S,1-p)]:[new _t(a,1-c),new _t(h,1-f),new _t(d,1-g),new _t(m,1-p)]}};function up(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Rr extends ba{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rr(t.radius,t.detail)}}class ji extends Oe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=t/a,u=e/c,d=[],g=[],S=[],m=[];for(let p=0;p<h;p++){const M=p*u-o;for(let w=0;w<l;w++){const v=w*f-r;g.push(v,-M,0),S.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const w=M+l*p,v=M+l*(p+1),T=M+1+l*(p+1),b=M+1+l*p;d.push(w,v,b),d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(S,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ta extends Oe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new P,u=new P,d=[],g=[],S=[],m=[];for(let p=0;p<=i;p++){const M=[],w=p/i,v=o+w*a,T=t*Math.cos(v),b=Math.sqrt(t*t-T*T);let R=0;p===0&&o===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const E=_/e,C=s+E*r;f.x=-b*Math.cos(C),f.y=T,f.z=b*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(E+R,1-w),M.push(l++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const w=h[p][M+1],v=h[p][M],T=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&d.push(w,v,b),(p!==i-1||c<Math.PI)&&d.push(v,T,b)}this.setIndex(d),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(S,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wa extends Oe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],h=[],f=[],u=new P,d=new P,g=new P;for(let S=0;S<=i;S++){const m=o+S/i*a;for(let p=0;p<=s;p++){const M=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,M=(s+1)*(S-1)+m-1,w=(s+1)*(S-1)+m,v=(s+1)*S+m;c.push(p,M,v),c.push(M,w,v)}this.setIndex(c),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Aa extends Oe{constructor(t=new xc(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new P,c=new P,l=new _t;let h=new P;const f=[],u=[],d=[],g=[];S(),this.setIndex(g),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(d,2));function S(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),p()}function m(w){h=t.getPointAt(w/e,h);const v=o.normals[w],T=o.binormals[w];for(let b=0;b<=s;b++){const R=b/s*Math.PI*2,_=Math.sin(R),E=-Math.cos(R);c.x=E*v.x+_*T.x,c.y=E*v.y+_*T.y,c.z=E*v.z+_*T.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){const T=(s+1)*(w-1)+(v-1),b=(s+1)*w+(v-1),R=(s+1)*w+v,_=(s+1)*(w-1)+v;g.push(T,b,_),g.push(b,R,_)}}function M(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)l.x=w/e,l.y=v/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Aa(new ia[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Is(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(wh(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(wh(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function nn(n){const t={};for(let e=0;e<n.length;e++){const i=Is(n[e]);for(const s in i)t[s]=i[s]}return t}function wh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function dp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const hd={clone:Is,merge:nn};var fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new oe().setHex(s.value);break;case"v2":this.uniforms[i].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new we().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Qt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class ud extends Ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vs extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dd extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fd extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ra extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class pd extends Ra{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const cl=new ue,Ah=new P,Rh=new P;class Mc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(cl,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const io=new P,so=new pi,Kn=new P;class Sc extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(io,so,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,Kn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(io,so,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new P,Ch=new _t,Ph=new _t;class _n extends Sc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=mr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ch,Ph),e.subVectors(Ph,Ch)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(or*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class mp extends Mc{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}}class Ca extends Ra{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Cr extends Sc{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gp extends Mc{constructor(){super(new Cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yc extends Ra{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new gp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ps=-90,ms=1;class md extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new _n(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new _n(ps,ms,t,e);o.layers=this.layers,this.add(o);const a=new _n(ps,ms,t,e);a.layers=this.layers,this.add(a);const c=new _n(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new _n(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class gd extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Lh=new ue;class _d{constructor(t,e,i=0,s=1/0){this.ray=new Er(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lh),this}intersectObject(t,e=!0,i=[]){return Il(t,this,i,e),i.sort(Dh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Il(t[s],this,i,e);return i.sort(Dh),i}}function Dh(n,t){return n.distance-t.distance}function Il(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Il(r[o],t,e,!0)}}class Nl{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(se(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vc=class Vc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Vc.prototype.isMatrix2=!0;let Ul=Vc;class xd extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ih(n,t,e,i){const s=_p(i);switch(e){case nc:return n*t;case da:return n*t/s.components*s.byteLength;case fa:return n*t/s.components*s.byteLength;case Di:return n*t*2/s.components*s.byteLength;case pa:return n*t*2/s.components*s.byteLength;case ic:return n*t*3/s.components*s.byteLength;case An:return n*t*4/s.components*s.byteLength;case ma:return n*t*4/s.components*s.byteLength;case nr:case ir:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sr:case rr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wo:case Ro:return Math.max(n,16)*Math.max(t,8)/4;case To:case Ao:return Math.max(n,8)*Math.max(t,8)/2;case Co:case Po:case Do:case Io:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lo:case ur:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case zo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Go:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case qo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Jo:case $o:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Qo:case jo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case dr:case ta:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _p(n){switch(n){case dn:case Ql:return{byteLength:1,components:1};case Rs:case jl:case Wn:return{byteLength:2,components:1};case ha:case ua:return{byteLength:2,components:4};case Vn:case ca:case wn:return{byteLength:4,components:1};case tc:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vd(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function xp(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,f=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,c,l){const h=c.array,f=c.updateRanges;if(n.bindBuffer(l,a),f.length===0)n.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){const g=f[u],S=f[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++u,f[u]=S)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){const S=f[d];n.bufferSubData(l,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,Sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tp=`#ifdef USE_AOMAP
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,om=`#ifdef USE_GRADIENTMAP
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
}`,am=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gm=`PhysicalMaterial material;
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
#endif`,_m=`uniform sampler2D dfgLUT;
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
}`,xm=`
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Am=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cm=`#if defined( USE_POINTS_UV )
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
#endif`,Pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`#ifdef USE_MORPHTARGETS
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
#endif`,Fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hm=`#ifdef USE_NORMALMAP
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
#endif`,Vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s0=`float getShadowMask() {
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
}`,r0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,w0=`#if DEPTH_PACKING == 3200
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
}`,A0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,D0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,N0=`uniform vec3 diffuse;
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define LAMBERT
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
}`,O0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,z0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,G0=`#define PHONG
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
}`,H0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,W0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,q0=`#define TOON
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
}`,Y0=`uniform float size;
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
}`,Z0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,$0=`uniform float rotation;
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
}`,Q0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:Sp,alphamap_pars_fragment:yp,alphatest_fragment:bp,alphatest_pars_fragment:Ep,aomap_fragment:Tp,aomap_pars_fragment:wp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Pp,bsdfs:Lp,iridescence_fragment:Dp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Up,clipping_planes_pars_vertex:Fp,clipping_planes_vertex:Op,color_fragment:Bp,color_pars_fragment:zp,color_pars_vertex:kp,color_vertex:Gp,common:Hp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:Zp,colorspace_fragment:Kp,colorspace_pars_fragment:Jp,envmap_fragment:$p,envmap_common_pars_fragment:Qp,envmap_pars_fragment:jp,envmap_pars_vertex:tm,envmap_physical_pars_fragment:um,envmap_vertex:em,fog_vertex:nm,fog_pars_vertex:im,fog_fragment:sm,fog_pars_fragment:rm,gradientmap_pars_fragment:om,lightmap_pars_fragment:am,lights_lambert_fragment:lm,lights_lambert_pars_fragment:cm,lights_pars_begin:hm,lights_toon_fragment:dm,lights_toon_pars_fragment:fm,lights_phong_fragment:pm,lights_phong_pars_fragment:mm,lights_physical_fragment:gm,lights_physical_pars_fragment:_m,lights_fragment_begin:xm,lights_fragment_maps:vm,lights_fragment_end:Mm,lightprobes_pars_fragment:Sm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:bm,logdepthbuf_pars_vertex:Em,logdepthbuf_vertex:Tm,map_fragment:wm,map_pars_fragment:Am,map_particle_fragment:Rm,map_particle_pars_fragment:Cm,metalnessmap_fragment:Pm,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Im,morphnormal_vertex:Nm,morphtarget_pars_vertex:Um,morphtarget_vertex:Fm,normal_fragment_begin:Om,normal_fragment_maps:Bm,normal_pars_fragment:zm,normal_pars_vertex:km,normal_vertex:Gm,normalmap_pars_fragment:Hm,clearcoat_normal_fragment_begin:Vm,clearcoat_normal_fragment_maps:Wm,clearcoat_pars_fragment:Xm,iridescence_pars_fragment:qm,opaque_fragment:Ym,packing:Zm,premultiplied_alpha_fragment:Km,project_vertex:Jm,dithering_fragment:$m,dithering_pars_fragment:Qm,roughnessmap_fragment:jm,roughnessmap_pars_fragment:t0,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:s0,skinbase_vertex:r0,skinning_pars_vertex:o0,skinning_vertex:a0,skinnormal_vertex:l0,specularmap_fragment:c0,specularmap_pars_fragment:h0,tonemapping_fragment:u0,tonemapping_pars_fragment:d0,transmission_fragment:f0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,worldpos_vertex:x0,background_vert:v0,background_frag:M0,backgroundCube_vert:S0,backgroundCube_frag:y0,cube_vert:b0,cube_frag:E0,depth_vert:T0,depth_frag:w0,distance_vert:A0,distance_frag:R0,equirect_vert:C0,equirect_frag:P0,linedashed_vert:L0,linedashed_frag:D0,meshbasic_vert:I0,meshbasic_frag:N0,meshlambert_vert:U0,meshlambert_frag:F0,meshmatcap_vert:O0,meshmatcap_frag:B0,meshnormal_vert:z0,meshnormal_frag:k0,meshphong_vert:G0,meshphong_frag:H0,meshphysical_vert:V0,meshphysical_frag:W0,meshtoon_vert:X0,meshtoon_frag:q0,points_vert:Y0,points_frag:Z0,shadow_vert:K0,shadow_frag:J0,sprite_vert:$0,sprite_frag:Q0},Rt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},On={basic:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:nn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:nn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:nn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:nn([Rt.points,Rt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:nn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:nn([Rt.common,Rt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:nn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:nn([Rt.sprite,Rt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:nn([Rt.common,Rt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:nn([Rt.lights,Rt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};On.physical={uniforms:nn([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const ro={r:0,b:0,g:0},j0=new ue,Md=new Qt;Md.set(-1,0,0,0,1,0,0,0,1);function tg(n,t,e,i,s,r){const o=new oe(0);let a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(M){let w=!1;const v=d(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===br)?(l===void 0&&(l=new cn(new _i(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Is(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Md),l.material.toneMapped=le.getTransfer(v.colorSpace)!==me,(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new cn(new ji(2,2),new Ln({name:"BackgroundMaterial",uniforms:Is(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=le.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(ro,cd(n)),e.buffers.color.setClear(ro.r,ro.g,ro.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:S,dispose:p}}function eg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(L,U,z,N,B){let W=!1;const F=f(L,N,z,U);r!==F&&(r=F,l(r.object)),W=d(L,N,z,B),W&&g(L,N,z,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(L,U,z,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,U,z,N){const B=N.wireframe===!0;let W=i[U.id];W===void 0&&(W={},i[U.id]=W);const F=L.isInstancedMesh===!0?L.id:0;let et=W[F];et===void 0&&(et={},W[F]=et);let q=et[z.id];q===void 0&&(q={},et[z.id]=q);let Q=q[B];return Q===void 0&&(Q=u(c()),q[B]=Q),Q}function u(L){const U=[],z=[],N=[];for(let B=0;B<e;B++)U[B]=0,z[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:N,object:L,attributes:{},index:null}}function d(L,U,z,N){const B=r.attributes,W=U.attributes;let F=0;const et=z.getAttributes();for(const q in et)if(et[q].location>=0){const tt=B[q];let pt=W[q];if(pt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(pt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(pt=L.instanceColor)),tt===void 0||tt.attribute!==pt||pt&&tt.data!==pt.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function g(L,U,z,N){const B={},W=U.attributes;let F=0;const et=z.getAttributes();for(const q in et)if(et[q].location>=0){let tt=W[q];tt===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor));const pt={};pt.attribute=tt,tt&&tt.data&&(pt.data=tt.data),B[q]=pt,F++}r.attributes=B,r.attributesNum=F,r.index=N}function S(){const L=r.newAttributes;for(let U=0,z=L.length;U<z;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){const z=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;z[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),B[L]!==U&&(n.vertexAttribDivisor(L,U),B[L]=U)}function M(){const L=r.newAttributes,U=r.enabledAttributes;for(let z=0,N=U.length;z<N;z++)U[z]!==L[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function w(L,U,z,N,B,W,F){F===!0?n.vertexAttribIPointer(L,U,z,B,W):n.vertexAttribPointer(L,U,z,N,B,W)}function v(L,U,z,N){S();const B=N.attributes,W=z.getAttributes(),F=U.defaultAttributeValues;for(const et in W){const q=W[et];if(q.location>=0){let Q=B[et];if(Q===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){const tt=Q.normalized,pt=Q.itemSize,mt=t.get(Q);if(mt===void 0)continue;const Xt=mt.buffer,qt=mt.type,ft=mt.bytesPerElement,I=qt===n.INT||qt===n.UNSIGNED_INT||Q.gpuType===ca;if(Q.isInterleavedBufferAttribute){const V=Q.data,ot=V.stride,vt=Q.offset;if(V.isInstancedInterleavedBuffer){for(let ht=0;ht<q.locationSize;ht++)p(q.location+ht,V.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ht=0;ht<q.locationSize;ht++)m(q.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let ht=0;ht<q.locationSize;ht++)w(q.location+ht,pt/q.locationSize,qt,tt,ot*ft,(vt+pt/q.locationSize*ht)*ft,I)}else{if(Q.isInstancedBufferAttribute){for(let V=0;V<q.locationSize;V++)p(q.location+V,Q.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let V=0;V<q.locationSize;V++)m(q.location+V);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let V=0;V<q.locationSize;V++)w(q.location+V,pt/q.locationSize,qt,tt,pt*ft,pt/q.locationSize*V*ft,I)}}else if(F!==void 0){const tt=F[et];if(tt!==void 0)switch(tt.length){case 2:n.vertexAttrib2fv(q.location,tt);break;case 3:n.vertexAttrib3fv(q.location,tt);break;case 4:n.vertexAttrib4fv(q.location,tt);break;default:n.vertexAttrib1fv(q.location,tt)}}}}M()}function T(){E();for(const L in i){const U=i[L];for(const z in U){const N=U[z];for(const B in N){const W=N[B];for(const F in W)h(W[F].object),delete W[F];delete N[B]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const U=i[L.id];for(const z in U){const N=U[z];for(const B in N){const W=N[B];for(const F in W)h(W[F].object),delete W[F];delete N[B]}}delete i[L.id]}function R(L){for(const U in i){const z=i[U];for(const N in z){const B=z[N];if(B[L.id]===void 0)continue;const W=B[L.id];for(const F in W)h(W[F].object),delete W[F];delete B[L.id]}}}function _(L){for(const U in i){const z=i[U],N=L.isInstancedMesh===!0?L.id:0,B=z[N];if(B!==void 0){for(const W in B){const F=B[W];for(const et in F)h(F[et].object),delete F[et];delete B[W]}delete z[N],Object.keys(z).length===0&&delete i[U]}}}function E(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:M}}function ng(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function ig(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==An&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&R!==wn&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(Jt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:b}}function sg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Qn,a=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const M=r?0:i,w=M*4;let v=p.clippingState||null;c.value=v,v=h(g,u,w,d);for(let T=0;T!==w;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=c.value,g!==!0||m===null){const p=d+S*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=d;w!==S;++w,v+=4)o.copy(f[w]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const Ms=4,rg=6,og=20,ag=256,Zs=new Cr,Nh=new oe;let hl=null,ul=0,dl=0,fl=!1;const lg=new P,ki=new P;class Fl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=lg}=r;hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,ul,dl),this._renderer.xr.enabled=fl,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Wn,format:An,colorSpace:fr,depthBuffer:!1},s=Uh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cg(r)),this._blurMaterial=ug(r,t,e),this._ggxMaterial=hg(r,t,e)}return s}_compileMaterial(t){const e=new cn(new Oe,t);this._renderer.compile(e,Zs)}_sceneToCubeUV(t,e,i,s,r){const c=new _n(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Nh),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new _i,new Tr({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Nh),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));const T=this._cubeSize;gs(s,v*T,w>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(S,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Li||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;gs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Zs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),u=l*1.25,d=f*u,{_lodMax:g}=this,S=this._sizeLods[i],m=3*S*(i>g-Ms?i-g+Ms:0),p=4*(this._cubeSize-S);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,gs(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(a,Zs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,gs(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(a,Zs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;const l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),u=4*(this._cubeSize-h);gs(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(c,Zs)}}function cg(n){const t=[],e=[];let i=n;const s=n-Ms+1+rg;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);const a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,u=6,d=3,g=new Float32Array(d*u*f),S=new Float32Array(d*u*f);for(let p=0;p<f;p++){const M=p%3*2/3-1,w=p>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(v,d*u*p);for(let T=0;T<u;T++){const b=h[T*2]*2-1,R=h[T*2+1]*2-1;p===0?ki.set(1,R,b):p===1?ki.set(-b,1,-R):p===2?ki.set(-b,R,1):p===3?ki.set(-1,R,-b):p===4?ki.set(-b,-1,R):ki.set(b,R,-1),ki.toArray(S,(p*u+T)*d)}}const m=new Oe;m.setAttribute("position",new Cn(g,d)),m.setAttribute("outputDirection",new Cn(S,d)),e.push(new cn(m,null)),i>Ms&&i--}return{lodMeshes:e,sizeLods:t}}function Uh(n,t,e){const i=new Rn(n,t,e);return i.texture.mapping=br,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function hg(n,t,e){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ug(n,t,e){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Oh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class bc extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hc(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _i(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:ti});r.uniforms.tEquirect.value=e;const o=new cn(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Xe),new md(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===co||d===ho)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const S=new bc(g.height);return S.fromEquirectangularTexture(n,u),t.set(u,S),u.addEventListener("dispose",l),a(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const d=u.mapping,g=d===co||d===ho,S=d===Li||d===Yi;if(g||S){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Fl(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return g&&M&&M.height>0||S&&M&&c(M)?(i===null&&(i=new Fl(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,d){return d===co?u.mapping=Li:d===ho&&(u.mapping=Yi),u}function c(u){let d=0;const g=6;for(let S=0;S<g;S++)u[S]!==void 0&&d++;return d===g}function l(u){const d=u.target;d.removeEventListener("dispose",l);const g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function fg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Xi("WebGLRenderer: "+i+" extension not supported."),s}}}function pg(n,t,e,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(f){const u=f.attributes;for(const d in u)t.update(u[d],n.ARRAY_BUFFER)}function l(f){const u=[],d=f.index,g=f.attributes.position;let S=0;if(g===void 0)return;if(d!==null){const M=d.array;S=d.version;for(let w=0,v=M.length;w<v;w+=3){const T=M[w+0],b=M[w+1],R=M[w+2];u.push(T,b,b,R,R,T)}}else{const M=g.array;S=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const T=w+0,b=w+1,R=w+2;u.push(T,b,b,R,R,T)}}const m=new(g.count>=65535?ac:oc)(u,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function mg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*o),e.update(u,i,1)}function l(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*o,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=u[m];e.update(S,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function gg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ce("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _g(n,t,e){const i=new WeakMap,s=new we;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let C=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",C)};var d=C;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let T=a.attributes.position.count*v,b=1;T>t.maxTextureSize&&(b=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*b*4*f),_=new rc(R,T,b,f);_.type=wn,_.needsUpdate=!0;const E=v*4;for(let L=0;L<f;L++){const U=p[L],z=M[L],N=w[L],B=T*b*4*L;for(let W=0;W<U.count;W++){const F=W*E;g===!0&&(s.fromBufferAttribute(U,W),R[B+F+0]=s.x,R[B+F+1]=s.y,R[B+F+2]=s.z,R[B+F+3]=0),S===!0&&(s.fromBufferAttribute(z,W),R[B+F+4]=s.x,R[B+F+5]=s.y,R[B+F+6]=s.z,R[B+F+7]=0),m===!0&&(s.fromBufferAttribute(N,W),R[B+F+8]=s.x,R[B+F+9]=s.y,R[B+F+10]=s.z,R[B+F+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new _t(T,b)},i.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const S=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function xg(n,t,e,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,f=l.geometry,u=t.get(l,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const vg={[Xl]:"LINEAR_TONE_MAPPING",[ql]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[la]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[Jl]:"NEUTRAL_TONE_MAPPING",[Zl]:"CUSTOM_TONE_MAPPING"};function Mg(n,t,e,i,s,r){const o=new Rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Oe;l.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new de([0,2,0,0,2,0],2));const h=new ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new cn(l,h),u=new Cr(-1,1,1,-1,0,1);let d=null,g=null,S=!1,m,p=null,M=[],w=!1;this.setSize=function(v,T){o.setSize(v,T),a!==null&&a.setSize(v,T),c!==null&&c.setSize(v,T);for(let b=0;b<M.length;b++){const R=M[b];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;const T=o.width,b=o.height;M.length>0&&a===null&&(a=new Rn(T,b,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new Rn(T,b,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const _=M[R];_.setSize&&_.setSize(T,b)}},this.begin=function(v,T){if(S||v.toneMapping===kn&&M.length===0)return!1;if(p=T,T!==null){const b=T.width,R=T.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,S=!0;let b=o,R=a;for(let _=0;_<M.length;_++){const E=M[_];E.enabled!==!1&&(E.render(v,R,b,T),E.needsSwap!==!1&&(b=R,R=R===a?c:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,h.defines={},le.getTransfer(d)===me&&(h.defines.SRGB_TRANSFER="");const _=vg[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(p),v.render(f,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const Sd=new qe,Ol=new Ls(1,1),yd=new rc,bd=new Ju,Ed=new hc,Bh=[],zh=[],kh=new Float32Array(16),Gh=new Float32Array(9),Hh=new Float32Array(4);function Os(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Bh[s];if(r===void 0&&(r=new Float32Array(s),Bh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ge(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function La(n,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Sg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2fv(this.addr,t),Ge(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;n.uniform3fv(this.addr,t),Ge(e,t)}}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4fv(this.addr,t),Ge(e,t)}}function Tg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,i))return;Hh.set(i),n.uniformMatrix2fv(this.addr,!1,Hh),Ge(e,i)}}function wg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,i))return;Gh.set(i),n.uniformMatrix3fv(this.addr,!1,Gh),Ge(e,i)}}function Ag(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,i))return;kh.set(i),n.uniformMatrix4fv(this.addr,!1,kh),Ge(e,i)}}function Rg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Cg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2iv(this.addr,t),Ge(e,t)}}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3iv(this.addr,t),Ge(e,t)}}function Lg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4iv(this.addr,t),Ge(e,t)}}function Dg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;n.uniform2uiv(this.addr,t),Ge(e,t)}}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;n.uniform3uiv(this.addr,t),Ge(e,t)}}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;n.uniform4uiv(this.addr,t),Ge(e,t)}}function Fg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ol.compareFunction=e.isReversedDepthBuffer()?_a:ga,r=Ol):r=Sd,e.setTexture2D(t||r,s)}function Og(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||bd,s)}function Bg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ed,s)}function zg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||yd,s)}function kg(n){switch(n){case 5126:return Sg;case 35664:return yg;case 35665:return bg;case 35666:return Eg;case 35674:return Tg;case 35675:return wg;case 35676:return Ag;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Pg;case 35669:case 35673:return Lg;case 5125:return Dg;case 36294:return Ig;case 36295:return Ng;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function Gg(n,t){n.uniform1fv(this.addr,t)}function Hg(n,t){const e=Os(t,this.size,2);n.uniform2fv(this.addr,e)}function Vg(n,t){const e=Os(t,this.size,3);n.uniform3fv(this.addr,e)}function Wg(n,t){const e=Os(t,this.size,4);n.uniform4fv(this.addr,e)}function Xg(n,t){const e=Os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function qg(n,t){const e=Os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Yg(n,t){const e=Os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zg(n,t){n.uniform1iv(this.addr,t)}function Kg(n,t){n.uniform2iv(this.addr,t)}function Jg(n,t){n.uniform3iv(this.addr,t)}function $g(n,t){n.uniform4iv(this.addr,t)}function Qg(n,t){n.uniform1uiv(this.addr,t)}function jg(n,t){n.uniform2uiv(this.addr,t)}function t_(n,t){n.uniform3uiv(this.addr,t)}function e_(n,t){n.uniform4uiv(this.addr,t)}function n_(n,t,e){const i=this.cache,s=t.length,r=La(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ol:o=Sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function i_(n,t,e){const i=this.cache,s=t.length,r=La(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bd,r[o])}function s_(n,t,e){const i=this.cache,s=t.length,r=La(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ed,r[o])}function r_(n,t,e){const i=this.cache,s=t.length,r=La(e,s);ke(i,r)||(n.uniform1iv(this.addr,r),Ge(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yd,r[o])}function o_(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return jg;case 36295:return t_;case 36296:return e_;case 35678:case 36198:case 36298:case 36306:case 35682:return n_;case 35679:case 36299:case 36307:return i_;case 35680:case 36300:case 36308:case 36293:return s_;case 36289:case 36303:case 36311:case 36292:return r_}}class a_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=kg(e.type)}}class l_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=o_(e.type)}}class c_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function Vh(n,t){n.seq.push(t),n.map[t.id]=t}function h_(n,t,e){const i=n.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vh(e,l===void 0?new a_(a,n,t):new l_(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new c_(a),Vh(e,f)),e=f}}}class mo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);h_(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Wh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const u_=37297;let d_=0;function f_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Xh=new Qt;function p_(n){le._getMatrix(Xh,le.workingColorSpace,n);const t=`mat3( ${Xh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case pr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+f_(n.getShaderSource(t),a)}else return r}function m_(n,t){const e=p_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const g_={[Xl]:"Linear",[ql]:"Reinhard",[Yl]:"Cineon",[la]:"ACESFilmic",[Kl]:"AgX",[Jl]:"Neutral",[Zl]:"Custom"};function __(n,t){const e=g_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oo=new P;function x_(){le.getLuminanceCoefficients(oo);const n=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function M_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function S_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function tr(n){return n!==""}function Yh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(n){return n.replace(y_,E_)}const b_=new Map;function E_(n,t){let e=ne[t];if(e===void 0){const i=b_.get(t);if(i!==void 0)e=ne[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bl(e)}const T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(n){return n.replace(T_,w_)}function w_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jh(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const A_={[Ss]:"SHADOWMAP_TYPE_PCF",[xs]:"SHADOWMAP_TYPE_VSM"};function R_(n){return A_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C_={[Li]:"ENVMAP_TYPE_CUBE",[Yi]:"ENVMAP_TYPE_CUBE",[br]:"ENVMAP_TYPE_CUBE_UV"};function P_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":C_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const L_={[Yi]:"ENVMAP_MODE_REFRACTION"};function D_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":L_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I_={[Wl]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Nu]:"ENVMAP_BLENDING_ADD"};function N_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":I_[n.combine]||"ENVMAP_BLENDING_NONE"}function U_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function F_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=R_(e),l=P_(e),h=D_(e),f=N_(e),u=U_(e),d=v_(e),g=M_(r),S=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(tr).join(`
`),p.length>0&&(p+=`
`)):(m=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),p=[Jh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?ne.tonemapping_pars_fragment:"",e.toneMapping!==kn?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,m_("linearToOutputTexel",e.outputColorSpace),x_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tr).join(`
`)),o=Bl(o),o=Yh(o,e),o=Zh(o,e),a=Bl(a),a=Yh(a,e),a=Zh(a,e),o=Kh(o),a=Kh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=M+m+o,v=M+p+a,T=Wh(s,s.VERTEX_SHADER,w),b=Wh(s,s.FRAGMENT_SHADER,v);s.attachShader(S,T),s.attachShader(S,b),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(L){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(S)||"",z=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(b)||"",B=U.trim(),W=z.trim(),F=N.trim();let et=!0,q=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,T,b);else{const Q=qh(s,T,"vertex"),tt=qh(s,b,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+Q+`
`+tt)}else B!==""?Jt("WebGLProgram: Program Info Log:",B):(W===""||F==="")&&(q=!1);q&&(L.diagnostics={runnable:et,programLog:B,vertexShader:{log:W,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(T),s.deleteShader(b),_=new mo(s,S),E=S_(s,S)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(S,u_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d_++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=b,this}let O_=0;class B_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new z_(t),e.set(t,i)),i}}class z_{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}}function k_(n){return n===Di||n===ur||n===dr}function G_(n,t,e,i,s,r){const o=new va,a=new B_,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function S(_,E,C,L,U,z){const N=L.fog,B=U.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,et=t.get(_.envMap||W,F),q=et&&et.mapping===br?et.image.height:null,Q=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Jt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const tt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,pt=tt!==void 0?tt.length:0;let mt=0;B.morphAttributes.position!==void 0&&(mt=1),B.morphAttributes.normal!==void 0&&(mt=2),B.morphAttributes.color!==void 0&&(mt=3);let Xt,qt,ft,I;if(Q){const be=On[Q];Xt=be.vertexShader,qt=be.fragmentShader}else{Xt=_.vertexShader,qt=_.fragmentShader;const be=a.getVertexShaderStage(_),fe=a.getFragmentShaderStage(_);a.update(_,be,fe),ft=be.id,I=fe.id}const V=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),vt=U.isInstancedMesh===!0,ht=U.isBatchedMesh===!0,gt=!!_.map,bt=!!_.matcap,nt=!!et,ut=!!_.aoMap,G=!!_.lightMap,J=!!_.bumpMap&&_.wireframe===!1,ct=!!_.normalMap,X=!!_.displacementMap,st=!!_.emissiveMap,yt=!!_.metalnessMap,Lt=!!_.roughnessMap,D=_.anisotropy>0,Ht=_.clearcoat>0,Nt=_.dispersion>0,A=_.retroreflectivity>0,x=_.iridescence>0,H=_.sheen>0,K=_.transmission>0,j=D&&!!_.anisotropyMap,xt=Ht&&!!_.clearcoatMap,St=Ht&&!!_.clearcoatNormalMap,it=Ht&&!!_.clearcoatRoughnessMap,lt=x&&!!_.iridescenceMap,Et=x&&!!_.iridescenceThicknessMap,Vt=H&&!!_.sheenColorMap,Ct=H&&!!_.sheenRoughnessMap,Tt=!!_.specularMap,Wt=!!_.specularColorMap,Kt=!!_.specularIntensityMap,ee=K&&!!_.transmissionMap,k=K&&!!_.thicknessMap,wt=!!_.gradientMap,at=!!_.alphaMap,At=_.alphaTest>0,It=!!_.alphaHash,dt=!!_.extensions;let Yt=kn;_.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const zt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:qt,defines:_.defines,customVertexShaderID:ft,customFragmentShaderID:I,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ht,batchingColor:ht&&U._colorsTexture!==null,instancing:vt,instancingColor:vt&&U.instanceColor!==null,instancingMorph:vt&&U.morphTexture!==null,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:gt,matcap:bt,envMap:nt,envMapMode:nt&&et.mapping,envMapCubeUVHeight:q,aoMap:ut,lightMap:G,bumpMap:J,normalMap:ct,displacementMap:X,emissiveMap:st,normalMapObjectSpace:ct&&_.normalMapType===Ou,normalMapTangentSpace:ct&&_.normalMapType===ea,packedNormalMap:ct&&_.normalMapType===ea&&k_(_.normalMap.format),metalnessMap:yt,roughnessMap:Lt,anisotropy:D,anisotropyMap:j,clearcoat:Ht,clearcoatMap:xt,clearcoatNormalMap:St,clearcoatRoughnessMap:it,dispersion:Nt,retroreflection:A,iridescence:x,iridescenceMap:lt,iridescenceThicknessMap:Et,sheen:H,sheenColorMap:Vt,sheenRoughnessMap:Ct,specularMap:Tt,specularColorMap:Wt,specularIntensityMap:Kt,transmission:K,transmissionMap:ee,thicknessMap:k,gradientMap:wt,opaque:_.transparent===!1&&_.blending===ys&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:At,alphaHash:It,combine:_.combine,mapUv:gt&&g(_.map.channel),aoMapUv:ut&&g(_.aoMap.channel),lightMapUv:G&&g(_.lightMap.channel),bumpMapUv:J&&g(_.bumpMap.channel),normalMapUv:ct&&g(_.normalMap.channel),displacementMapUv:X&&g(_.displacementMap.channel),emissiveMapUv:st&&g(_.emissiveMap.channel),metalnessMapUv:yt&&g(_.metalnessMap.channel),roughnessMapUv:Lt&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:xt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:St&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(_.sheenRoughnessMap.channel),specularMapUv:Tt&&g(_.specularMap.channel),specularColorMapUv:Wt&&g(_.specularColorMap.channel),specularIntensityMapUv:Kt&&g(_.specularIntensityMap.channel),transmissionMapUv:ee&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:at&&g(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ct||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(gt||at),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ct===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ot,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:mt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:gt&&_.map.isVideoTexture===!0&&le.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:st&&_.emissiveMap.isVideoTexture===!0&&le.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&_.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),M(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function M(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){const E=d[_.type];let C;if(E){const L=On[E];C=hd.clone(L.uniforms)}else C=_.uniforms;return C}function v(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new F_(n,E,_,s),l.push(C),h.set(E,C)),C}function T(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function R(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:b,programs:l,dispose:R}}function H_(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function V_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $h(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,g,S,m,p){let M=n[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},n[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=o(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,d,g,S,m,p,M){M.reversedDepth===!0&&(m=-m);const w=a(u,d,g,S,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):e.push(w)}function l(u,d,g,S,m,p){const M=a(u,d,g,S,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||V_),i.length>1&&i.sort(d||$h),s.length>1&&s.sort(d||$h)}function f(){for(let u=t,d=n.length;u<d;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function W_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Qh,n.set(i,[o])):s>=r.length?(o=new Qh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function X_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new oe};break;case"SpotLight":e={position:new P,direction:new P,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function q_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Y_=0;function Z_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function K_(n){const t=new X_,e=q_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new P);const s=new P,r=new ue,o=new ue;function a(l){let h=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,g=0,S=0,m=0,p=0,M=0,w=0,v=0,T=0,b=0,R=0,_=0,E=0,C=0;l.sort(Z_);for(let U=0,z=l.length;U<z;U++){const N=l[U],B=N.color,W=N.intensity,F=N.distance;let et=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Di?et=N.shadow.map.texture:et=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*W,f+=B.g*W,u+=B.b*W;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],W);C++}else if(N.isSunLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=tt,i.sunShadowMap[g]=et;const pt=Q.getViewportCount();for(let mt=0;mt<pt;mt++)i.sunShadowMatrix[S+mt]=Q.getMatrix(mt),i.sunShadowCascade[S+mt]=Q._cascadeData[mt];S+=pt,g++}i.sun[d]=q,d++}else if(N.isDirectionalLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=tt,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=N.shadow.matrix,T++}i.directional[m]=q,m++}else if(N.isSpotLight){const q=t.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(W),q.distance=F,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[M]=q;const Q=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[M]=Q.matrix,N.castShadow){const tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,i.spotShadow[M]=tt,i.spotShadowMap[M]=et,R++}M++}else if(N.isRectAreaLight){const q=t.get(N);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=q,w++}else if(N.isPointLight){const q=t.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const Q=N.shadow,tt=e.get(N);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,i.pointShadow[p]=tt,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=q,p++}else if(N.isHemisphereLight){const q=t.get(N);q.skyColor.copy(N.color).multiplyScalar(W),q.groundColor.copy(N.groundColor).multiplyScalar(W),i.hemi[v]=q,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const L=i.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==T||L.numPointShadows!==b||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=M,i.rectArea.length=w,i.point.length=p,i.hemi.length=v,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-E,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=T,L.numPointShadows=b,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=C,i.version=Y_++)}function c(l,h){let f=0,u=0,d=0,g=0,S=0,m=0;const p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){const v=l[M];if(v.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(v.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){const T=i.rectArea[S];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),S++}else if(v.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:i}}function jh(n){const t=new K_(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function J_(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new jh(n),t.set(s,[a])):r>=o.length?(a=new jh(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
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
}`,j_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],tx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],tu=new ue,Ks=new P,ml=new P;function ex(n,t,e){let i=new Sa;const s=new _t,r=new _t,o=new we,a=new dd,c=new fd,l={},h=e.maxTextureSize,f={[Pi]:ln,[ln]:Pi,[En]:En},u=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:$_,fragmentShader:Q_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new cn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let p=this.type;this.render=function(b,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===pu&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);const E=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ti),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==this.type;z&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=b.length;N<B;N++){const W=b[N],F=W.shadow;if(F===void 0){Jt("WebGLShadowMap:",W,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const et=F.getFrameExtents();s.multiply(et),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,F.mapSize.y=r.y));const q=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=q,F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===xs){if(W.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Rn(s.x,s.y,{format:Di,type:Wn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),F.map.texture.name=W.name+".shadowMap",F.map.depthTexture=new Ls(s.x,s.y,wn),F.map.depthTexture.name=W.name+".shadowMapDepth",F.map.depthTexture.format=ei,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We}else W.isPointLight?(F.map=new bc(s.x),F.map.depthTexture=new td(s.x,Vn)):(F.map=new Rn(s.x,s.y),F.map.depthTexture=new Ls(s.x,s.y,Vn)),F.map.depthTexture.name=W.name+".shadowMap",F.map.depthTexture.format=ei,this.type===Ss?(F.map.depthTexture.compareFunction=q?_a:ga,F.map.depthTexture.minFilter=Xe,F.map.depthTexture.magFilter=Xe):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=We,F.map.depthTexture.magFilter=We);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const Q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();W.isPointLight!==!0&&F.updateMatrices(W,_);for(let tt=0;tt<Q;tt++){const pt=F.getCamera(tt);if(W.isPointLight){const mt=F.camera,Xt=F.matrix,qt=W.distance||mt.far;qt!==mt.far&&(mt.far=qt,mt.updateProjectionMatrix()),Ks.setFromMatrixPosition(W.matrixWorld),mt.position.copy(Ks),ml.copy(mt.position),ml.add(j_[tt]),mt.up.copy(tx[tt]),mt.lookAt(ml),mt.updateMatrixWorld(),Xt.makeTranslation(-Ks.x,-Ks.y,-Ks.z),tu.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(tu,mt.coordinateSystem,mt.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,tt),n.clear();else{tt===0&&(n.setRenderTarget(F.map),n.clear());const mt=F.getViewport(tt);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),U.viewport(o)}i=F.getFrustum(tt),v(R,_,pt,W,this.type)}F.isPointLightShadow!==!0&&this.type===xs&&M(F,_),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,C,L)};function M(b,R){const _=t.update(S);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Rn(s.x,s.y,{format:Di,type:Wn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,S,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,_,d,S,null)}function w(b,R,_,E){let C=null;const L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=C.uuid,z=R.uuid;let N=l[U];N===void 0&&(N={},l[U]=N);let B=N[z];B===void 0&&(B=C.clone(),N[z]=B,R.addEventListener("dispose",T)),C=B}if(C.visible=R.visible,C.wireframe=R.wireframe,E===xs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const U=n.properties.get(C);U.light=_}return C}function v(b,R,_,E,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===xs)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const z=t.update(b),N=b.material;if(Array.isArray(N)){const B=z.groups;for(let W=0,F=B.length;W<F;W++){const et=B[W],q=N[et.materialIndex];if(q&&q.visible){const Q=w(b,q,E,C);b.onBeforeShadow(n,b,R,_,z,Q,et),n.renderBufferDirect(_,null,z,Q,b,et),b.onAfterShadow(n,b,R,_,z,Q,et)}}}else if(N.visible){const B=w(b,N,E,C);b.onBeforeShadow(n,b,R,_,z,B,null),n.renderBufferDirect(_,null,z,B,b,null),b.onAfterShadow(n,b,R,_,z,B,null)}}const U=b.children;for(let z=0,N=U.length;z<N;z++)v(U[z],R,_,E,C)}function T(b){b.target.removeEventListener("dispose",T);for(const _ in l){const E=l[_],C=b.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function nx(n,t){function e(){let k=!1;const wt=new we;let at=null;const At=new we(0,0,0,0);return{setMask:function(It){at!==It&&!k&&(n.colorMask(It,It,It,It),at=It)},setLocked:function(It){k=It},setClear:function(It,dt,Yt,zt,be){be===!0&&(It*=zt,dt*=zt,Yt*=zt),wt.set(It,dt,Yt,zt),At.equals(wt)===!1&&(n.clearColor(It,dt,Yt,zt),At.copy(wt))},reset:function(){k=!1,at=null,At.set(-1,0,0,0)}}}function i(){let k=!1,wt=!1,at=null,At=null,It=null;return{setReversed:function(dt){if(wt!==dt){const Yt=t.get("EXT_clip_control");dt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),wt=dt;const zt=It;It=null,this.setClear(zt)}},getReversed:function(){return wt},setTest:function(dt){dt?V(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(dt){at!==dt&&!k&&(n.depthMask(dt),at=dt)},setFunc:function(dt){if(wt&&(dt=nf[dt]),At!==dt){switch(dt){case _o:n.depthFunc(n.NEVER);break;case xo:n.depthFunc(n.ALWAYS);break;case vo:n.depthFunc(n.LESS);break;case As:n.depthFunc(n.LEQUAL);break;case Mo:n.depthFunc(n.EQUAL);break;case So:n.depthFunc(n.GEQUAL);break;case yo:n.depthFunc(n.GREATER);break;case bo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}At=dt}},setLocked:function(dt){k=dt},setClear:function(dt){It!==dt&&(It=dt,wt&&(dt=1-dt),n.clearDepth(dt))},reset:function(){k=!1,at=null,At=null,It=null,wt=!1}}}function s(){let k=!1,wt=null,at=null,At=null,It=null,dt=null,Yt=null,zt=null,be=null;return{setTest:function(fe){k||(fe?V(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(fe){wt!==fe&&!k&&(n.stencilMask(fe),wt=fe)},setFunc:function(fe,Dn,Yn){(at!==fe||At!==Dn||It!==Yn)&&(n.stencilFunc(fe,Dn,Yn),at=fe,At=Dn,It=Yn)},setOp:function(fe,Dn,Yn){(dt!==fe||Yt!==Dn||zt!==Yn)&&(n.stencilOp(fe,Dn,Yn),dt=fe,Yt=Dn,zt=Yn)},setLocked:function(fe){k=fe},setClear:function(fe){be!==fe&&(n.clearStencil(fe),be=fe)},reset:function(){k=!1,wt=null,at=null,At=null,It=null,dt=null,Yt=null,zt=null,be=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},f={},u={},d=new WeakMap,g=[],S=null,m=!1,p=null,M=null,w=null,v=null,T=null,b=null,R=null,_=new oe(0,0,0),E=0,C=!1,L=null,U=null,z=null,N=null,B=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,et=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=et>=1):q.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=et>=2);let Q=null,tt={};const pt=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Xt=new we().fromArray(pt),qt=new we().fromArray(mt);function ft(k,wt,at,At){const It=new Uint8Array(4),dt=n.createTexture();n.bindTexture(k,dt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<at;Yt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(wt,0,n.RGBA,1,1,At,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(wt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return dt}const I={};I[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),I[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),I[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),V(n.DEPTH_TEST),o.setFunc(As),J(!1),ct(Sl),V(n.CULL_FACE),ut(ti);function V(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function ot(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function vt(k,wt){return u[k]!==wt?(n.bindFramebuffer(k,wt),u[k]=wt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=wt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=wt),!0):!1}function ht(k,wt){let at=g,At=!1;if(k){at=d.get(wt),at===void 0&&(at=[],d.set(wt,at));const It=k.textures;if(at.length!==It.length||at[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,Yt=It.length;dt<Yt;dt++)at[dt]=n.COLOR_ATTACHMENT0+dt;at.length=It.length,At=!0}}else at[0]!==n.BACK&&(at[0]=n.BACK,At=!0);At&&n.drawBuffers(at)}function gt(k){return S!==k?(n.useProgram(k),S=k,!0):!1}const bt={[Hi]:n.FUNC_ADD,[gu]:n.FUNC_SUBTRACT,[_u]:n.FUNC_REVERSE_SUBTRACT};bt[xu]=n.MIN,bt[vu]=n.MAX;const nt={[Mu]:n.ZERO,[Su]:n.ONE,[yu]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[Ru]:n.SRC_ALPHA_SATURATE,[wu]:n.DST_COLOR,[Eu]:n.DST_ALPHA,[bu]:n.ONE_MINUS_SRC_COLOR,[Vl]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[Tu]:n.ONE_MINUS_DST_ALPHA,[Cu]:n.CONSTANT_COLOR,[Pu]:n.ONE_MINUS_CONSTANT_COLOR,[Lu]:n.CONSTANT_ALPHA,[Du]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(k,wt,at,At,It,dt,Yt,zt,be,fe){if(k===ti){m===!0&&(ot(n.BLEND),m=!1);return}if(m===!1&&(V(n.BLEND),m=!0),k!==mu){if(k!==p||fe!==C){if((M!==Hi||T!==Hi)&&(n.blendEquation(n.FUNC_ADD),M=Hi,T=Hi),fe)switch(k){case ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.ONE,n.ONE);break;case bl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case El:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ce("WebGLState: Invalid blending: ",k);break}else switch(k){case ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bl:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case El:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",k);break}w=null,v=null,b=null,R=null,_.set(0,0,0),E=0,p=k,C=fe}return}It=It||wt,dt=dt||at,Yt=Yt||At,(wt!==M||It!==T)&&(n.blendEquationSeparate(bt[wt],bt[It]),M=wt,T=It),(at!==w||At!==v||dt!==b||Yt!==R)&&(n.blendFuncSeparate(nt[at],nt[At],nt[dt],nt[Yt]),w=at,v=At,b=dt,R=Yt),(zt.equals(_)===!1||be!==E)&&(n.blendColor(zt.r,zt.g,zt.b,be),_.copy(zt),E=be),p=k,C=!1}function G(k,wt){k.side===En?ot(n.CULL_FACE):V(n.CULL_FACE);let at=k.side===ln;wt&&(at=!at),J(at),k.blending===ys&&k.transparent===!1?ut(ti):ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const At=k.stencilWrite;a.setTest(At),At&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),st(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?V(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(k){L!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),L=k)}function ct(k){k!==du?(V(n.CULL_FACE),k!==U&&(k===Sl?n.cullFace(n.BACK):k===fu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),U=k}function X(k){k!==z&&(F&&n.lineWidth(k),z=k)}function st(k,wt,at){k?(V(n.POLYGON_OFFSET_FILL),(N!==wt||B!==at)&&(N=wt,B=at,o.getReversed()&&(wt=-wt),n.polygonOffset(wt,at))):ot(n.POLYGON_OFFSET_FILL)}function yt(k){k?V(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function Lt(k){k===void 0&&(k=n.TEXTURE0+W-1),Q!==k&&(n.activeTexture(k),Q=k)}function D(k,wt,at){at===void 0&&(Q===null?at=n.TEXTURE0+W-1:at=Q);let At=tt[at];At===void 0&&(At={type:void 0,texture:void 0},tt[at]=At),(At.type!==k||At.texture!==wt)&&(Q!==at&&(n.activeTexture(at),Q=at),n.bindTexture(k,wt||I[k]),At.type=k,At.texture=wt)}function Ht(){const k=tt[Q];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Nt(){try{n.compressedTexImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function x(){try{n.texSubImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function H(){try{n.texSubImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function K(){try{n.compressedTexSubImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function xt(){try{n.texStorage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function St(){try{n.texStorage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function it(){try{n.texImage2D(...arguments)}catch(k){ce("WebGLState:",k)}}function lt(){try{n.texImage3D(...arguments)}catch(k){ce("WebGLState:",k)}}function Et(k){return f[k]!==void 0?f[k]:n.getParameter(k)}function Vt(k,wt){f[k]!==wt&&(n.pixelStorei(k,wt),f[k]=wt)}function Ct(k){Xt.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Xt.copy(k))}function Tt(k){qt.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),qt.copy(k))}function Wt(k,wt){let at=l.get(wt);at===void 0&&(at=new WeakMap,l.set(wt,at));let At=at.get(k);At===void 0&&(At=n.getUniformBlockIndex(wt,k.name),at.set(k,At))}function Kt(k,wt){const At=l.get(wt).get(k);c.get(wt)!==At&&(n.uniformBlockBinding(wt,At,k.__bindingPointIndex),c.set(wt,At))}function ee(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,tt={},u={},d=new WeakMap,g=[],S=null,m=!1,p=null,M=null,w=null,v=null,T=null,b=null,R=null,_=new oe(0,0,0),E=0,C=!1,L=null,U=null,z=null,N=null,B=null,Xt.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:V,disable:ot,bindFramebuffer:vt,drawBuffers:ht,useProgram:gt,setBlending:ut,setMaterial:G,setFlipSided:J,setCullFace:ct,setLineWidth:X,setPolygonOffset:st,setScissorTest:yt,activeTexture:Lt,bindTexture:D,unbindTexture:Ht,compressedTexImage2D:Nt,compressedTexImage3D:A,texImage2D:it,texImage3D:lt,pixelStorei:Vt,getParameter:Et,updateUBOMapping:Wt,uniformBlockBinding:Kt,texStorage2D:xt,texStorage3D:St,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:K,compressedTexSubImage3D:j,scissor:Ct,viewport:Tt,reset:ee}}function ix(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,x){return g?new OffscreenCanvas(A,x):na("canvas")}function m(A,x,H){let K=1;const j=Nt(A);if((j.width>H||j.height>H)&&(K=H/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const xt=Math.floor(K*j.width),St=Math.floor(K*j.height);u===void 0&&(u=S(xt,St));const it=x?S(xt,St):u;return it.width=xt,it.height=St,it.getContext("2d").drawImage(A,0,0,xt,St),Jt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+xt+"x"+St+")."),it}else return"data"in A&&Jt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,x,H,K,j,xt=!1){if(A!==null){if(n[A]!==void 0)return n[A];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let St;K&&(St=t.get("EXT_texture_norm16"),St||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=x;if(x===n.RED&&(H===n.FLOAT&&(it=n.R32F),H===n.HALF_FLOAT&&(it=n.R16F),H===n.UNSIGNED_BYTE&&(it=n.R8),H===n.UNSIGNED_SHORT&&St&&(it=St.R16_EXT),H===n.SHORT&&St&&(it=St.R16_SNORM_EXT)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(it=n.R8UI),H===n.UNSIGNED_SHORT&&(it=n.R16UI),H===n.UNSIGNED_INT&&(it=n.R32UI),H===n.BYTE&&(it=n.R8I),H===n.SHORT&&(it=n.R16I),H===n.INT&&(it=n.R32I)),x===n.RG&&(H===n.FLOAT&&(it=n.RG32F),H===n.HALF_FLOAT&&(it=n.RG16F),H===n.UNSIGNED_BYTE&&(it=n.RG8),H===n.UNSIGNED_SHORT&&St&&(it=St.RG16_EXT),H===n.SHORT&&St&&(it=St.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(it=n.RG8UI),H===n.UNSIGNED_SHORT&&(it=n.RG16UI),H===n.UNSIGNED_INT&&(it=n.RG32UI),H===n.BYTE&&(it=n.RG8I),H===n.SHORT&&(it=n.RG16I),H===n.INT&&(it=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(it=n.RGB8UI),H===n.UNSIGNED_SHORT&&(it=n.RGB16UI),H===n.UNSIGNED_INT&&(it=n.RGB32UI),H===n.BYTE&&(it=n.RGB8I),H===n.SHORT&&(it=n.RGB16I),H===n.INT&&(it=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),H===n.UNSIGNED_INT&&(it=n.RGBA32UI),H===n.BYTE&&(it=n.RGBA8I),H===n.SHORT&&(it=n.RGBA16I),H===n.INT&&(it=n.RGBA32I)),x===n.RGB&&(H===n.UNSIGNED_SHORT&&St&&(it=St.RGB16_EXT),H===n.SHORT&&St&&(it=St.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),x===n.RGBA){const lt=xt?pr:le.getTransfer(j);H===n.FLOAT&&(it=n.RGBA32F),H===n.HALF_FLOAT&&(it=n.RGBA16F),H===n.UNSIGNED_BYTE&&(it=lt===me?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&St&&(it=St.RGBA16_EXT),H===n.SHORT&&St&&(it=St.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function T(A,x){let H;return A?x===null||x===Vn||x===Cs?H=n.DEPTH24_STENCIL8:x===wn?H=n.DEPTH32F_STENCIL8:x===Rs&&(H=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Vn||x===Cs?H=n.DEPTH_COMPONENT24:x===wn?H=n.DEPTH_COMPONENT32F:x===Rs&&(H=n.DEPTH_COMPONENT16),H}function b(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==We&&A.minFilter!==Xe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),E(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(A){const x=A.target;x.removeEventListener("dispose",_),L(x)}function E(A){const x=i.get(A);if(x.__webglInit===void 0)return;const H=A.source,K=d.get(H);if(K){const j=K[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&C(A),Object.keys(K).length===0&&d.delete(H)}i.remove(A)}function C(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const H=A.source,K=d.get(H);delete K[x.__cacheKey],o.memory.textures--}function L(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let j=0;j<x.__webglFramebuffer[K].length;j++)n.deleteFramebuffer(x.__webglFramebuffer[K][j]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=A.textures;for(let K=0,j=H.length;K<j;K++){const xt=i.get(H[K]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(H[K])}i.remove(A)}let U=0;function z(){U=0}function N(){return U}function B(A){U=A}function W(){const A=U;return A>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function F(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function et(A,x){const H=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){const K=A.image;if(K===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(H,A,x);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function q(A,x){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ot(H,A,x);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function Q(A,x){const H=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ot(H,A,x);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function tt(A,x){const H=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){vt(H,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const pt={[hr]:n.REPEAT,[jn]:n.CLAMP_TO_EDGE,[Eo]:n.MIRRORED_REPEAT},mt={[We]:n.NEAREST,[Uu]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[uo]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},Xt={[zu]:n.NEVER,[Wu]:n.ALWAYS,[ku]:n.LESS,[ga]:n.LEQUAL,[Gu]:n.EQUAL,[_a]:n.GEQUAL,[Hu]:n.GREATER,[Vu]:n.NOTEQUAL};function qt(A,x){if(x.type===wn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Xe||x.magFilter===uo||x.magFilter===Qs||x.magFilter===wi||x.minFilter===Xe||x.minFilter===uo||x.minFilter===Qs||x.minFilter===wi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,pt[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,pt[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,pt[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===We||x.minFilter!==Qs&&x.minFilter!==wi||x.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ft(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const K=x.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const xt=F(x);if(xt!==A.__cacheKey){j[xt]===void 0&&(j[xt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[xt].usedTimes++;const St=j[A.__cacheKey];St!==void 0&&(j[A.__cacheKey].usedTimes--,St.usedTimes===0&&C(x)),A.__cacheKey=xt,A.__webglTexture=j[xt].texture}return H}function I(A,x,H){return Math.floor(Math.floor(A/H)/x)}function V(A,x,H,K){const xt=A.updateRanges;if(xt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,H,K,x.data);else{xt.sort((Vt,Ct)=>Vt.start-Ct.start);let St=0;for(let Vt=1;Vt<xt.length;Vt++){const Ct=xt[St],Tt=xt[Vt],Wt=Ct.start+Ct.count,Kt=I(Tt.start,x.width,4),ee=I(Ct.start,x.width,4);Tt.start<=Wt+1&&Kt===ee&&I(Tt.start+Tt.count-1,x.width,4)===Kt?Ct.count=Math.max(Ct.count,Tt.start+Tt.count-Ct.start):(++St,xt[St]=Tt)}xt.length=St+1;const it=e.getParameter(n.UNPACK_ROW_LENGTH),lt=e.getParameter(n.UNPACK_SKIP_PIXELS),Et=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Vt=0,Ct=xt.length;Vt<Ct;Vt++){const Tt=xt[Vt],Wt=Math.floor(Tt.start/4),Kt=Math.ceil(Tt.count/4),ee=Wt%x.width,k=Math.floor(Wt/x.width),wt=Kt,at=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,ee,k,wt,at,H,K,x.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Et)}}function ot(A,x,H){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const j=ft(A,x),xt=x.source;e.bindTexture(K,A.__webglTexture,n.TEXTURE0+H);const St=i.get(xt);if(xt.version!==St.__version||j===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const at=le.getPrimaries(le.workingColorSpace),At=x.colorSpace===li?null:le.getPrimaries(x.colorSpace),It=x.colorSpace===li||at===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let lt=m(x.image,!1,s.maxTextureSize);lt=Ht(x,lt);const Et=r.convert(x.format,x.colorSpace),Vt=r.convert(x.type);let Ct=v(x.internalFormat,Et,Vt,x.normalized,x.colorSpace,x.isVideoTexture);qt(K,x);let Tt;const Wt=x.mipmaps,Kt=x.isVideoTexture!==!0,ee=St.__version===void 0||j===!0,k=xt.dataReady,wt=b(x,lt);if(x.isDepthTexture)Ct=T(x.format===Ai,x.type),ee&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Ct,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Ct,lt.width,lt.height,0,Et,Vt,null));else if(x.isDataTexture)if(Wt.length>0){Kt&&ee&&e.texStorage2D(n.TEXTURE_2D,wt,Ct,Wt[0].width,Wt[0].height);for(let at=0,At=Wt.length;at<At;at++)Tt=Wt[at],Kt?k&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(n.TEXTURE_2D,at,Ct,Tt.width,Tt.height,0,Et,Vt,Tt.data);x.generateMipmaps=!1}else Kt?(ee&&e.texStorage2D(n.TEXTURE_2D,wt,Ct,lt.width,lt.height),k&&V(x,lt,Et,Vt)):e.texImage2D(n.TEXTURE_2D,0,Ct,lt.width,lt.height,0,Et,Vt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Kt&&ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ct,Wt[0].width,Wt[0].height,lt.depth);for(let at=0,At=Wt.length;at<At;at++)if(Tt=Wt[at],x.format!==An)if(Et!==null)if(Kt){if(k)if(x.layerUpdates.size>0){const It=Ih(Tt.width,Tt.height,x.format,x.type);for(const dt of x.layerUpdates){const Yt=Tt.data.subarray(dt*It/Tt.data.BYTES_PER_ELEMENT,(dt+1)*It/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,dt,Tt.width,Tt.height,1,Et,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Tt.width,Tt.height,lt.depth,Et,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Ct,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,Tt.width,Tt.height,lt.depth,Et,Vt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Ct,Tt.width,Tt.height,lt.depth,0,Et,Vt,Tt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Kt&&ee&&e.texStorage2D(n.TEXTURE_2D,wt,Ct,Wt[0].width,Wt[0].height);for(let at=0,At=Wt.length;at<At;at++)Tt=Wt[at],x.format!==An?Et!==null?Kt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Ct,Tt.width,Tt.height,0,Tt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?k&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(n.TEXTURE_2D,at,Ct,Tt.width,Tt.height,0,Et,Vt,Tt.data)}else if(x.isDataArrayTexture)if(Kt){if(ee&&e.texStorage3D(n.TEXTURE_2D_ARRAY,wt,Ct,lt.width,lt.height,lt.depth),k)if(x.layerUpdates.size>0){const at=Ih(lt.width,lt.height,x.format,x.type);for(const At of x.layerUpdates){const It=lt.data.subarray(At*at/lt.data.BYTES_PER_ELEMENT,(At+1)*at/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,At,lt.width,lt.height,1,Et,Vt,It)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Et,Vt,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ct,lt.width,lt.height,lt.depth,0,Et,Vt,lt.data);else if(x.isData3DTexture)Kt?(ee&&e.texStorage3D(n.TEXTURE_3D,wt,Ct,lt.width,lt.height,lt.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Et,Vt,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Ct,lt.width,lt.height,lt.depth,0,Et,Vt,lt.data);else if(x.isFramebufferTexture){if(ee)if(Kt)e.texStorage2D(n.TEXTURE_2D,wt,Ct,lt.width,lt.height);else{let at=lt.width,At=lt.height;for(let It=0;It<wt;It++)e.texImage2D(n.TEXTURE_2D,It,Ct,at,At,0,Et,Vt,null),at>>=1,At>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){const at=n.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),lt.parentNode!==at){at.appendChild(lt),f.add(x),at.onpaint=At=>{const It=At.changedElements;for(const dt of f)It.includes(dt.image)&&(dt.needsUpdate=!0)},at.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,lt);else{const It=n.RGBA,dt=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,It,dt,Yt,lt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Kt&&ee){const at=Nt(Wt[0]);e.texStorage2D(n.TEXTURE_2D,wt,Ct,at.width,at.height)}for(let at=0,At=Wt.length;at<At;at++)Tt=Wt[at],Kt?k&&e.texSubImage2D(n.TEXTURE_2D,at,0,0,Et,Vt,Tt):e.texImage2D(n.TEXTURE_2D,at,Ct,Et,Vt,Tt);x.generateMipmaps=!1}else if(Kt){if(ee){const at=Nt(lt);e.texStorage2D(n.TEXTURE_2D,wt,Ct,at.width,at.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Vt,lt)}else e.texImage2D(n.TEXTURE_2D,0,Ct,Et,Vt,lt);p(x)&&M(K),St.__version=xt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function vt(A,x,H){if(x.image.length!==6)return;const K=ft(A,x),j=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+H);const xt=i.get(j);if(j.version!==xt.__version||K===!0){e.activeTexture(n.TEXTURE0+H);const St=le.getPrimaries(le.workingColorSpace),it=x.colorSpace===li?null:le.getPrimaries(x.colorSpace),lt=x.colorSpace===li||St===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Et=x.isCompressedTexture||x.image[0].isCompressedTexture,Vt=x.image[0]&&x.image[0].isDataTexture,Ct=[];for(let dt=0;dt<6;dt++)!Et&&!Vt?Ct[dt]=m(x.image[dt],!0,s.maxCubemapSize):Ct[dt]=Vt?x.image[dt].image:x.image[dt],Ct[dt]=Ht(x,Ct[dt]);const Tt=Ct[0],Wt=r.convert(x.format,x.colorSpace),Kt=r.convert(x.type),ee=v(x.internalFormat,Wt,Kt,x.normalized,x.colorSpace),k=x.isVideoTexture!==!0,wt=xt.__version===void 0||K===!0,at=j.dataReady;let At=b(x,Tt);qt(n.TEXTURE_CUBE_MAP,x);let It;if(Et){k&&wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ee,Tt.width,Tt.height);for(let dt=0;dt<6;dt++){It=Ct[dt].mipmaps;for(let Yt=0;Yt<It.length;Yt++){const zt=It[Yt];x.format!==An?Wt!==null?k?at&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,0,0,zt.width,zt.height,Wt,zt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,ee,zt.width,zt.height,0,zt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,0,0,zt.width,zt.height,Wt,Kt,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt,ee,zt.width,zt.height,0,Wt,Kt,zt.data)}}}else{if(It=x.mipmaps,k&&wt){It.length>0&&At++;const dt=Nt(Ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,At,ee,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Vt){k?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ct[dt].width,Ct[dt].height,Wt,Kt,Ct[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ee,Ct[dt].width,Ct[dt].height,0,Wt,Kt,Ct[dt].data);for(let Yt=0;Yt<It.length;Yt++){const be=It[Yt].image[dt].image;k?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,0,0,be.width,be.height,Wt,Kt,be.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,ee,be.width,be.height,0,Wt,Kt,be.data)}}else{k?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Wt,Kt,Ct[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ee,Wt,Kt,Ct[dt]);for(let Yt=0;Yt<It.length;Yt++){const zt=It[Yt];k?at&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,0,0,Wt,Kt,zt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Yt+1,ee,Wt,Kt,zt.image[dt])}}}p(x)&&M(n.TEXTURE_CUBE_MAP),xt.__version=j.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ht(A,x,H,K,j,xt){const St=r.convert(H.format,H.colorSpace),it=r.convert(H.type),lt=v(H.internalFormat,St,it,H.normalized,H.colorSpace),Et=i.get(x),Vt=i.get(H);if(Vt.__renderTarget=x,!Et.__hasExternalTextures){const Ct=Math.max(1,x.width>>xt),Tt=Math.max(1,x.height>>xt);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,xt,lt,Ct,Tt,x.depth,0,St,it,null):e.texImage2D(j,xt,lt,Ct,Tt,0,St,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,Vt.__webglTexture,0,yt(x)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,j,Vt.__webglTexture,xt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(A,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,j=K&&K.isDepthTexture?K.type:null,xt=T(x.stencilBuffer,j),St=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Lt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(x),xt,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(x),xt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,xt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,A)}else{const K=x.textures;for(let j=0;j<K.length;j++){const xt=K[j],St=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),lt=v(xt.internalFormat,St,it,xt.normalized,xt.colorSpace);Lt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt(x),lt,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt(x),lt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,lt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(A,x,H){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),qt(n.TEXTURE_CUBE_MAP,x.depthTexture);const Et=r.convert(x.depthTexture.format),Vt=r.convert(x.depthTexture.type);let Ct;x.depthTexture.format===ei?Ct=n.DEPTH_COMPONENT24:x.depthTexture.format===Ai&&(Ct=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Ct,x.width,x.height,0,Et,Vt,null)}}else et(x.depthTexture,0);const xt=j.__webglTexture,St=yt(x),it=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,lt=x.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===ei)Lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,it,xt,0,St):n.framebufferTexture2D(n.FRAMEBUFFER,lt,it,xt,0);else if(x.depthTexture.format===Ai)Lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,it,xt,0,St):n.framebufferTexture2D(n.FRAMEBUFFER,lt,it,xt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(A){const x=i.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let K=0;K<6;K++)bt(x.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?bt(x.__webglFramebuffer[0],A,0):bt(x.__webglFramebuffer,A,0)}else if(H){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),gt(x.__webglDepthbuffer[K],A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,xt)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),gt(x.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,xt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,xt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(A,x,H){const K=i.get(A);x!==void 0&&ht(K.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&nt(A)}function G(A){const x=A.texture,H=i.get(A),K=i.get(x);A.addEventListener("dispose",_);const j=A.textures,xt=A.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),xt){H.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[it]=[];for(let lt=0;lt<x.mipmaps.length;lt++)H.__webglFramebuffer[it][lt]=n.createFramebuffer()}else H.__webglFramebuffer[it]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)H.__webglFramebuffer[it]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(St)for(let it=0,lt=j.length;it<lt;it++){const Et=i.get(j[it]);Et.__webglTexture===void 0&&(Et.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&Lt(A)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let it=0;it<j.length;it++){const lt=j[it];H.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[it]);const Et=r.convert(lt.format,lt.colorSpace),Vt=r.convert(lt.type),Ct=v(lt.internalFormat,Et,Vt,lt.normalized,lt.colorSpace,A.isXRRenderTarget===!0),Tt=yt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,Ct,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,H.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(xt){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),qt(n.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)ht(H.__webglFramebuffer[it][lt],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt);else ht(H.__webglFramebuffer[it],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(x)&&M(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let it=0,lt=j.length;it<lt;it++){const Et=j[it],Vt=i.get(Et);let Ct=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ct=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Ct,Vt.__webglTexture),qt(Ct,Et),ht(H.__webglFramebuffer,A,Et,n.COLOR_ATTACHMENT0+it,Ct,0),p(Et)&&M(Ct)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,K.__webglTexture),qt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)ht(H.__webglFramebuffer[lt],A,x,n.COLOR_ATTACHMENT0,it,lt);else ht(H.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,it,0);p(x)&&M(it),e.unbindTexture()}A.depthBuffer&&nt(A)}function J(A){const x=A.textures;for(let H=0,K=x.length;H<K;H++){const j=x[H];if(p(j)){const xt=w(A),St=i.get(j).__webglTexture;e.bindTexture(xt,St),M(xt),e.unbindTexture()}}}const ct=[],X=[];function st(A){if(A.samples>0){if(Lt(A)===!1){const x=A.textures,H=A.width,K=A.height;let j=n.COLOR_BUFFER_BIT;const xt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(A),it=x.length>1;if(it)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const lt=A.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[Et]);const Vt=i.get(x[Et]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Vt,0)}n.blitFramebuffer(0,0,H,K,0,0,H,K,j,n.NEAREST),c===!0&&(ct.length=0,X.length=0,ct.push(n.COLOR_ATTACHMENT0+Et),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ct.push(xt),X.push(xt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,X)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.RENDERBUFFER,St.__webglColorRenderbuffer[Et]);const Vt=i.get(x[Et]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Et,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function yt(A){return Math.min(s.maxSamples,A.samples)}function Lt(A){const x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Ht(A,x){const H=A.colorSpace,K=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==fr&&H!==li&&(le.getTransfer(H)===me?(K!==An||j!==dn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",H)),x}function Nt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=et,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=tt,this.rebindTextures=ut,this.setupRenderTarget=G,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Td(n,t){function e(i,s=li){let r;const o=le.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===ha)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ua)return n.UNSIGNED_SHORT_5_5_5_1;if(i===tc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ec)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ql)return n.BYTE;if(i===jl)return n.SHORT;if(i===Rs)return n.UNSIGNED_SHORT;if(i===ca)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===wn)return n.FLOAT;if(i===Wn)return n.HALF_FLOAT;if(i===nc)return n.ALPHA;if(i===ic)return n.RGB;if(i===An)return n.RGBA;if(i===ei)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===da)return n.RED;if(i===fa)return n.RED_INTEGER;if(i===Di)return n.RG;if(i===pa)return n.RG_INTEGER;if(i===ma)return n.RGBA_INTEGER;if(i===nr||i===ir||i===sr||i===rr)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===To||i===wo||i===Ao||i===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Co||i===Po||i===Lo||i===Do||i===Io||i===ur||i===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Co||i===Po)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Do)return r.COMPRESSED_R11_EAC;if(i===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ur)return r.COMPRESSED_RG11_EAC;if(i===No)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Go||i===Ho||i===Vo||i===Wo||i===Xo||i===qo||i===Yo||i===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Uo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ko)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Go)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ho)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Jo||i===$o)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qo||i===jo||i===dr||i===ta)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ta)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const sx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rx=`
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

}`;class ox{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new dc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ln({vertexShader:sx,fragmentShader:rx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new cn(new ji(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ax extends gi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,g=null;const S=typeof XRWebGLBinding<"u",m=new ox,p={},M=e.getContextAttributes();let w=null,v=null;const T=[],b=[],R=new _t;let _=null,E=null;const C=new _n;C.viewport=new we;const L=new _n;L.viewport=new we;const U=[C,L],z=new gd;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let V=T[I];return V===void 0&&(V=new po,T[I]=V),V.getTargetRaySpace()},this.getControllerGrip=function(I){let V=T[I];return V===void 0&&(V=new po,T[I]=V),V.getGripSpace()},this.getHand=function(I){let V=T[I];return V===void 0&&(V=new po,T[I]=V),V.getHandSpace()};function W(I){const V=b.indexOf(I.inputSource);if(V===-1)return;const ot=T[V];ot!==void 0&&(ot.update(I.inputSource,I.frame,l||o),ot.dispatchEvent({type:I.type,data:I.inputSource}))}function F(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",et);for(let I=0;I<T.length;I++){const V=b[I];V!==null&&(b[I]=null,T[I].disconnect(V))}N=null,B=null,m.reset();for(const I in p)delete p[I];if(t.setRenderTarget(w),d=null,u=null,f=null,s=null,v=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),E!==null){const I=E.camera;I.fov=E.fov,I.zoom=E.zoom,I.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",F),s.addEventListener("inputsourceschange",et),M.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,vt=null,ht=null;M.depth&&(ht=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=M.stencil?Ai:ei,vt=M.stencil?Cs:Vn);const gt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Rn(u.textureWidth,u.textureHeight,{format:An,type:dn,depthTexture:new Ls(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ot={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Rn(d.framebufferWidth,d.framebufferHeight,{format:An,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(I){for(let V=0;V<I.removed.length;V++){const ot=I.removed[V],vt=b.indexOf(ot);vt>=0&&(b[vt]=null,T[vt].disconnect(ot))}for(let V=0;V<I.added.length;V++){const ot=I.added[V];let vt=b.indexOf(ot);if(vt===-1){for(let gt=0;gt<T.length;gt++)if(gt>=b.length){b.push(ot),vt=gt;break}else if(b[gt]===null){b[gt]=ot,vt=gt;break}if(vt===-1)break}const ht=T[vt];ht&&ht.connect(ot)}}const q=new P,Q=new P;function tt(I,V,ot){q.setFromMatrixPosition(V.matrixWorld),Q.setFromMatrixPosition(ot.matrixWorld);const vt=q.distanceTo(Q),ht=V.projectionMatrix.elements,gt=ot.projectionMatrix.elements,bt=ht[14]/(ht[10]-1),nt=ht[14]/(ht[10]+1),ut=(ht[9]+1)/ht[5],G=(ht[9]-1)/ht[5],J=(ht[8]-1)/ht[0],ct=(gt[8]+1)/gt[0],X=bt*J,st=bt*ct,yt=vt/(-J+ct),Lt=yt*-J;if(V.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Lt),I.translateZ(yt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ht[10]===-1)I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const D=bt+yt,Ht=nt+yt,Nt=X-Lt,A=st+(vt-Lt),x=ut*nt/Ht*D,H=G*nt/Ht*D;I.projectionMatrix.makePerspective(Nt,A,x,H,D,Ht),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function pt(I,V){V===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(V.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let V=I.near,ot=I.far;m.texture!==null&&(m.depthNear>0&&(V=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),z.near=L.near=C.near=V,z.far=L.far=C.far=ot,(N!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,B=z.far),z.layers.mask=I.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const vt=I.parent,ht=z.cameras;pt(z,vt);for(let gt=0;gt<ht.length;gt++)pt(ht[gt],vt);ht.length===2?tt(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),E===null&&I.isPerspectiveCamera&&(E={camera:I,fov:I.fov,zoom:I.zoom}),mt(I,z,vt)};function mt(I,V,ot){ot===null?I.matrix.copy(V.matrixWorld):(I.matrix.copy(ot.matrixWorld),I.matrix.invert(),I.matrix.multiply(V.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(V.projectionMatrix),I.projectionMatrixInverse.copy(V.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=mr*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(I){c=I,u!==null&&(u.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(I){return p[I]};let Xt=null;function qt(I,V){if(h=V.getViewerPose(l||o),g=V,h!==null){const ot=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let vt=!1;ot.length!==z.cameras.length&&(z.cameras.length=0,vt=!0);for(let nt=0;nt<ot.length;nt++){const ut=ot[nt];let G=null;if(d!==null)G=d.getViewport(ut);else{const ct=f.getViewSubImage(u,ut);G=ct.viewport,nt===0&&(t.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(v))}let J=U[nt];J===void 0&&(J=new _n,J.layers.enable(nt),J.viewport=new we,U[nt]=J),J.matrix.fromArray(ut.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ut.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(G.x,G.y,G.width,G.height),nt===0&&(z.matrix.copy(J.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),vt===!0&&z.cameras.push(J)}const ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const nt=f.getDepthInformation(ot[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(ht&&ht.includes("camera-access")&&S){t.state.unbindTexture(),f=i.getBinding();for(let nt=0;nt<ot.length;nt++){const ut=ot[nt].camera;if(ut){let G=p[ut];G||(G=new dc,p[ut]=G);const J=f.getCameraImage(ut);G.sourceTexture=J}}}}for(let ot=0;ot<T.length;ot++){const vt=b[ot],ht=T[ot];vt!==null&&ht!==void 0&&ht.update(vt,V,l||o)}Xt&&Xt(I,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),g=null}const ft=new vd;ft.setAnimationLoop(qt),this.setAnimationLoop=function(I){Xt=I},this.dispose=function(){}}}const lx=new ue,wd=new Qt;wd.set(-1,0,0,0,1,0,0,0,1);function cx(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,cd(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function hx(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,T){const b=T.program;i.uniformBlockBinding(v,b)}function l(v,T){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",M));const R=T.program;i.updateUBOMapping(v,R);const _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){const T=f();v.__bindingPointIndex=T;const b=n.createBuffer(),R=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,b),b}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=s[v.id],b=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,E=b.length;_<E;_++){const C=b[_];if(Array.isArray(C))for(let L=0,U=C.length;L<U;L++)d(C[L],_,L,R);else d(C,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,T,b,R){if(S(v,T,b,R)===!0){const _=v.__offset,E=v.value;if(Array.isArray(E)){let C=0;for(let L=0;L<E.length;L++){const U=E[L],z=p(U);g(U,v.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,b){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,b)}function S(v,T,b,R){const _=v.value,E=T+"_"+b;if(R[E]===void 0)return typeof _=="number"||typeof _=="boolean"?R[E]=_:ArrayBuffer.isView(_)?R[E]=_.slice():R[E]=_.clone(),!0;{const C=R[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return R[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(v){const T=v.uniforms;let b=0;const R=16;for(let E=0,C=T.length;E<C;E++){const L=Array.isArray(T[E])?T[E]:[T[E]];for(let U=0,z=L.length;U<z;U++){const N=L[U],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,F=B.length;W<F;W++){const et=B[W],q=p(et),Q=b%R,tt=Q%q.boundary,pt=Q+tt;b+=tt,pt!==0&&R-pt<q.storage&&(b+=R-pt),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=q.storage}}}const _=b%R;return _>0&&(b+=R-_),v.__size=b,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",v),T}function M(v){const T=v.target;T.removeEventListener("dispose",M);const b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}const ux=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function dx(){return Jn===null&&(Jn=new lc(ux,16,16,Di,Wn),Jn.name="DFG_LUT",Jn.minFilter=Xe,Jn.magFilter=Xe,Jn.wrapS=jn,Jn.wrapT=jn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class Ad{constructor(t={}){const{canvas:e=qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const S=d,m=new Set([ma,pa,fa]),p=new Set([dn,Vn,Rs,Cs,ha,ua]),M=new Uint32Array(4),w=new Int32Array(4),v=new P;let T=null,b=null;const R=[],_=[];let E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,U=null,z=null,N=null,B=null;this._outputColorSpace=$e;let W=0,F=0,et=null,q=-1,Q=null;const tt=new we,pt=new we;let mt=null;const Xt=new oe(0);let qt=0,ft=e.width,I=e.height,V=1,ot=null,vt=null;const ht=new we(0,0,ft,I),gt=new we(0,0,ft,I);let bt=!1;const nt=new Sa;let ut=!1,G=!1;const J=new ue,ct=new P,X=new we,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Lt(){return et===null?V:1}let D=i;function Ht(y,O){return e.getContext(y,O)}let Nt,A,x,H,K,j,xt,St,it,lt,Et,Vt,Ct,Tt,Wt,Kt,ee,k,wt,at,At,It,dt;try{const y={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${aa}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Dn,!1),D===null){const O="webgl2";if(D=Ht(O,y),D===null)throw Ht(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(y){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),ce("WebGLRenderer: "+y.message),y}function Yt(){Nt=new fg(D),Nt.init(),At=new Td(D,Nt),A=new ig(D,Nt,t,At),x=new nx(D,Nt),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),z=D.createFramebuffer(),N=D.createFramebuffer(),B=D.createFramebuffer(),H=new gg(D),K=new H_,j=new ix(D,Nt,x,K,A,At,H),xt=new dg(C),St=new xp(D),It=new eg(D,St),it=new pg(D,St,H,It),lt=new xg(D,it,St,It,H),k=new _g(D,A,j),Wt=new sg(K),Et=new G_(C,xt,Nt,A,It,Wt),Vt=new cx(C,K),Ct=new W_,Tt=new J_(Nt),ee=new tg(C,xt,x,lt,g,c),Kt=new ex(C,lt,A),dt=new hx(D,H,A,x),wt=new ng(D,Nt,H),at=new mg(D,Nt,H),H.programs=Et.programs,C.capabilities=A,C.extensions=Nt,C.properties=K,C.renderLists=Ct,C.shadowMap=Kt,C.state=x,C.info=H}S!==dn&&(E=new Mg(S,e.width,e.height,a,s,r));const zt=new ax(C,D);this.xr=zt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const y=Nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(y){y!==void 0&&(V=y,this.setSize(ft,I,!1))},this.getSize=function(y){return y.set(ft,I)},this.setSize=function(y,O,$=!0){if(zt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=y,I=O,e.width=Math.floor(y*V),e.height=Math.floor(O*V),$===!0&&(e.style.width=y+"px",e.style.height=O+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(ft*V,I*V).floor()},this.setDrawingBufferSize=function(y,O,$){ft=y,I=O,V=$,e.width=Math.floor(y*$),e.height=Math.floor(O*$),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(S===dn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(tt)},this.getViewport=function(y){return y.copy(ht)},this.setViewport=function(y,O,$,Y){y.isVector4?ht.set(y.x,y.y,y.z,y.w):ht.set(y,O,$,Y),x.viewport(tt.copy(ht).multiplyScalar(V).round())},this.getScissor=function(y){return y.copy(gt)},this.setScissor=function(y,O,$,Y){y.isVector4?gt.set(y.x,y.y,y.z,y.w):gt.set(y,O,$,Y),x.scissor(pt.copy(gt).multiplyScalar(V).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(y){x.setScissorTest(bt=y)},this.setOpaqueSort=function(y){ot=y},this.setTransparentSort=function(y){vt=y},this.getClearColor=function(y){return y.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,$=!0){let Y=0;if(y){let Z=!1;if(et!==null){const Dt=et.texture.format;Z=m.has(Dt)}if(Z){const Dt=et.texture.type,Ft=p.has(Dt),Pt=ee.getClearColor(),Ot=ee.getClearAlpha(),Gt=Pt.r,ie=Pt.g,ae=Pt.b;Ft?(M[0]=Gt,M[1]=ie,M[2]=ae,M[3]=Ot,D.clearBufferuiv(D.COLOR,0,M)):(w[0]=Gt,w[1]=ie,w[2]=ae,w[3]=Ot,D.clearBufferiv(D.COLOR,0,w))}else Y|=D.COLOR_BUFFER_BIT}O&&(Y|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Dn,!1),ee.dispose(),Ct.dispose(),Tt.dispose(),K.dispose(),xt.dispose(),lt.dispose(),It.dispose(),dt.dispose(),Et.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Xc),zt.removeEventListener("sessionend",qc),Ui.stop()};function be(y){y.preventDefault(),wl("WebGLRenderer: Context Lost."),L=!0}function fe(){wl("WebGLRenderer: Context Restored."),L=!1;const y=H.autoReset,O=Kt.enabled,$=Kt.autoUpdate,Y=Kt.needsUpdate,Z=Kt.type;Yt(),H.autoReset=y,Kt.enabled=O,Kt.autoUpdate=$,Kt.needsUpdate=Y,Kt.type=Z}function Dn(y){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Yn(y){const O=y.target;O.removeEventListener("dispose",Yn),Yd(O)}function Yd(y){Zd(y),K.remove(y)}function Zd(y){const O=K.get(y).programs;O!==void 0&&(O.forEach(function($){Et.releaseProgram($)}),y.isShaderMaterial&&Et.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,$,Y,Z,Dt){O===null&&(O=st);const Ft=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pt=$d(y,O,$,Y,Z);x.setMaterial(Y,Ft);let Ot=$.index,Gt=1;if(Y.wireframe===!0){if(Ot=it.getWireframeAttribute($),Ot===void 0)return;Gt=2}const ie=$.drawRange,ae=$.attributes.position;let Bt=ie.start*Gt,pe=(ie.start+ie.count)*Gt;Dt!==null&&(Bt=Math.max(Bt,Dt.start*Gt),pe=Math.min(pe,(Dt.start+Dt.count)*Gt)),Ot!==null?(Bt=Math.max(Bt,0),pe=Math.min(pe,Ot.count)):ae!=null&&(Bt=Math.max(Bt,0),pe=Math.min(pe,ae.count));const Ie=pe-Bt;if(Ie<0||Ie===1/0)return;It.setup(Z,Y,Pt,$,Ot);let Te,ye=wt;if(Ot!==null&&(Te=St.get(Ot),ye=at,ye.setIndex(Te)),Z.isMesh)Y.wireframe===!0?(x.setLineWidth(Y.wireframeLinewidth*Lt()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(Z.isLine){let Ze=Y.linewidth;Ze===void 0&&(Ze=1),x.setLineWidth(Ze*Lt()),Z.isLineSegments?ye.setMode(D.LINES):Z.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else Z.isPoints?ye.setMode(D.POINTS):Z.isSprite&&ye.setMode(D.TRIANGLES);if(Z.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))ye.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ze=Z._multiDrawStarts,Ut=Z._multiDrawCounts,tn=Z._multiDrawCount,he=Ot?St.get(Ot).bytesPerElement:1,Mn=K.get(Y).currentProgram.getUniforms();for(let Zn=0;Zn<tn;Zn++)Mn.setValue(D,"_gl_DrawID",Zn),ye.render(Ze[Zn]/he,Ut[Zn])}else if(Z.isInstancedMesh)ye.renderInstances(Bt,Ie,Z.count);else if($.isInstancedBufferGeometry){const Ze=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ut=Math.min($.instanceCount,Ze);ye.renderInstances(Bt,Ie,Ut)}else ye.render(Bt,Ie)};function Wc(y,O,$,Y){U!==null&&y.isNodeMaterial&&U.setObject(Y,y),ut===!0&&Wt.setState(y,$,!1),y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,Nr(y,O,Y),y.side=Pi,y.needsUpdate=!0,Nr(y,O,Y),y.side=En):Nr(y,O,Y)}this.compile=function(y,O,$=null){$===null&&($=y),U!==null&&U.renderStart(y,O,$),b=Tt.get($),b.init(O),_.push(b),$.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),y!==$&&y.traverseVisible(function(Z){Z.isLight&&Z.layers.test(O.layers)&&(b.pushLight(Z),Z.castShadow&&b.pushShadow(Z))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),G=this.localClippingEnabled,ut=Wt.init(this.clippingPlanes,G),ut===!0&&Wt.setGlobalState(this.clippingPlanes,O),U!==null&&Kt.render(b.state.shadowsArray,$,O);const Y=new Set;return y.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Dt=Z.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Pt=Dt[Ft];Wc(Pt,$,O,Z),Y.add(Pt)}else Wc(Dt,$,O,Z),Y.add(Dt)}),b=_.pop(),U!==null&&U.renderEnd(),Y},this.compileAsync=function(y,O,$=null){const Y=this.compile(y,O,$);return new Promise(Z=>{function Dt(){if(Y.forEach(function(Ft){const Ot=K.get(Ft).currentProgram;(Ot===void 0||Ot.isReady())&&Y.delete(Ft)}),Y.size===0){Z(y);return}setTimeout(Dt,10)}Nt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let za=null;function Kd(y){za&&za(y)}function Xc(){Ui.stop()}function qc(){Ui.start()}const Ui=new vd;Ui.setAnimationLoop(Kd),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(y){za=y,zt.setAnimationLoop(y),y===null?Ui.stop():Ui.start()},zt.addEventListener("sessionstart",Xc),zt.addEventListener("sessionend",qc),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(y,O);const $=zt.enabled===!0&&zt.isPresenting===!0,Y=E!==null&&(et===null||$)&&E.begin(C,et);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(O),O=zt.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,O,et),b=Tt.get(y,_.length),b.init(O),b.state.textureUnits=j.getTextureUnits(),_.push(b),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),nt.setFromProjectionMatrix(J,zn,O.reversedDepth),G=this.localClippingEnabled,ut=Wt.init(this.clippingPlanes,G),T=Ct.get(y,R.length),T.init(),R.push(T),zt.enabled===!0&&zt.isPresenting===!0){const Ft=C.xr.getDepthSensingMesh();Ft!==null&&ka(Ft,O,-1/0,C.sortObjects)}ka(y,O,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(b.state.lightsArray),C.sortObjects===!0&&T.sort(ot,vt),yt=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,yt&&ee.addToRenderList(T,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Wt.beginShadows();const Z=b.state.shadowsArray;if(Kt.render(Z,y,O),ut===!0&&Wt.endShadows(),(Y&&E.hasRenderPass())===!1){const Ft=T.opaque,Pt=T.transmissive;if(b.setupLights(),O.isArrayCamera){const Ot=O.cameras;if(Pt.length>0)for(let Gt=0,ie=Ot.length;Gt<ie;Gt++){const ae=Ot[Gt];Zc(Ft,Pt,y,ae)}yt&&ee.render(y);for(let Gt=0,ie=Ot.length;Gt<ie;Gt++){const ae=Ot[Gt];Yc(T,y,ae,ae.viewport)}}else Pt.length>0&&Zc(Ft,Pt,y,O),yt&&ee.render(y),Yc(T,y,O)}et!==null&&F===0&&(j.updateMultisampleRenderTarget(et),j.updateRenderTargetMipmap(et)),Y&&E.end(C),y.isScene===!0&&y.onAfterRender(C,y,O),It.resetDefaultState(),q=-1,Q=null,_.pop(),_.length>0?(b=_[_.length-1],j.setTextureUnits(b.state.textureUnits),ut===!0&&Wt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function ka(y,O,$,Y){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)$=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(nt)){Y&&X.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);const Ft=lt.update(y),Pt=y.material;Pt.visible&&T.push(y,Ft,Pt,$,X.z,null,O)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(nt))){const Ft=lt.update(y),Pt=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),X.copy(y.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),X.copy(Ft.boundingSphere.center)),X.applyMatrix4(y.matrixWorld).applyMatrix4(J)),Array.isArray(Pt)){const Ot=Ft.groups;for(let Gt=0,ie=Ot.length;Gt<ie;Gt++){const ae=Ot[Gt],Bt=Pt[ae.materialIndex];Bt&&Bt.visible&&T.push(y,Ft,Bt,$,X.z,ae,O)}}else Pt.visible&&T.push(y,Ft,Pt,$,X.z,null,O)}}const Dt=y.children;for(let Ft=0,Pt=Dt.length;Ft<Pt;Ft++)ka(Dt[Ft],O,$,Y)}function Yc(y,O,$,Y){const{opaque:Z,transmissive:Dt,transparent:Ft}=y;b.setupLightsView($),ut===!0&&Wt.setGlobalState(C.clippingPlanes,$),Y&&x.viewport(tt.copy(Y)),Z.length>0&&Ir(Z,O,$),Dt.length>0&&Ir(Dt,O,$),Ft.length>0&&Ir(Ft,O,$),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Zc(y,O,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){const Bt=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new Rn(1,1,{generateMipmaps:!0,type:Bt?Wn:dn,minFilter:wi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Dt=b.state.transmissionRenderTarget[Y.id],Ft=Y.viewport||tt;Dt.setSize(Ft.z*C.transmissionResolutionScale,Ft.w*C.transmissionResolutionScale);const Pt=C.getRenderTarget(),Ot=C.getActiveCubeFace(),Gt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(Xt),qt=C.getClearAlpha(),qt<1&&C.setClearColor(16777215,.5),C.clear(),yt&&ee.render($);const ie=C.toneMapping;C.toneMapping=kn;const ae=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ut===!0&&Wt.setGlobalState(C.clippingPlanes,Y),Ir(y,$,Y),j.updateMultisampleRenderTarget(Dt),j.updateRenderTargetMipmap(Dt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let pe=0,Ie=O.length;pe<Ie;pe++){const Te=O[pe],{object:ye,geometry:Ze,material:Ut,group:tn}=Te;if(Ut.side===En&&ye.layers.test(Y.layers)){const he=Ut.side;Ut.side=ln,Ut.needsUpdate=!0,Kc(ye,$,Y,Ze,Ut,tn),Ut.side=he,Ut.needsUpdate=!0,Bt=!0}}Bt===!0&&(j.updateMultisampleRenderTarget(Dt),j.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Pt,Ot,Gt),C.setClearColor(Xt,qt),ae!==void 0&&(Y.viewport=ae),C.toneMapping=ie}function Ir(y,O,$){const Y=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,Dt=y.length;Z<Dt;Z++){const Ft=y[Z],{object:Pt,geometry:Ot,group:Gt}=Ft;let ie=Ft.material;ie.allowOverride===!0&&Y!==null&&(ie=Y),Pt.layers.test($.layers)&&Kc(Pt,O,$,Ot,ie,Gt)}}function Kc(y,O,$,Y,Z,Dt){U!==null&&Z.isNodeMaterial&&U.setObject(y,Z),y.onBeforeRender(C,O,$,Y,Z,Dt),y.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),Z.onBeforeRender(C,O,$,Y,y,Dt),Z.transparent===!0&&Z.side===En&&Z.forceSinglePass===!1?(Z.side=ln,Z.needsUpdate=!0,C.renderBufferDirect($,O,Y,Z,y,Dt),Z.side=Pi,Z.needsUpdate=!0,C.renderBufferDirect($,O,Y,Z,y,Dt),Z.side=En):C.renderBufferDirect($,O,Y,Z,y,Dt),y.onAfterRender(C,O,$,Y,Z,Dt)}function Nr(y,O,$){O.isScene!==!0&&(O=st);const Y=K.get(y),Z=b.state.lights,Dt=b.state.shadowsArray,Ft=Z.state.version,Pt=Et.getParameters(y,Z.state,Dt,O,$,b.state.lightProbeGridArray),Ot=Et.getProgramCacheKey(Pt);let Gt=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;const ie=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=xt.get(y.envMap||Y.environment,ie),Y.envMapRotation=Y.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Gt===void 0&&(y.addEventListener("dispose",Yn),Gt=new Map,Y.programs=Gt);let ae=Gt.get(Ot);if(ae!==void 0){if(Y.currentProgram===ae&&Y.lightsStateVersion===Ft)return $c(y,Pt),ae}else Pt.uniforms=Et.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,$,Pt),y.onBeforeCompile(Pt,C),ae=Et.acquireProgram(Pt,Ot),Gt.set(Ot,ae),Y.uniforms=Pt.uniforms;const Bt=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Bt.clippingPlanes=Wt.uniform),$c(y,Pt),Y.needsLights=jd(y),Y.lightsStateVersion=Ft,Y.needsLights&&(Bt.ambientLightColor.value=Z.state.ambient,Bt.lightProbe.value=Z.state.probe,Bt.sunLights.value=Z.state.sun,Bt.sunLightShadows.value=Z.state.sunShadow,Bt.directionalLights.value=Z.state.directional,Bt.directionalLightShadows.value=Z.state.directionalShadow,Bt.spotLights.value=Z.state.spot,Bt.spotLightShadows.value=Z.state.spotShadow,Bt.rectAreaLights.value=Z.state.rectArea,Bt.ltc_1.value=Z.state.rectAreaLTC1,Bt.ltc_2.value=Z.state.rectAreaLTC2,Bt.pointLights.value=Z.state.point,Bt.pointLightShadows.value=Z.state.pointShadow,Bt.hemisphereLights.value=Z.state.hemi,Bt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Bt.sunShadowCascade.value=Z.state.sunShadowCascade,Bt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Bt.spotLightMatrix.value=Z.state.spotLightMatrix,Bt.spotLightMap.value=Z.state.spotLightMap,Bt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=ae,Y.uniformsList=null,ae}function Jc(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=mo.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function $c(y,O){const $=K.get(y);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Jd(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let $=0,Y=y.length;$<Y;$++){const Z=y[$];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function $d(y,O,$,Y,Z){O.isScene!==!0&&(O=st),j.resetTextureUnits();const Dt=O.fog,Ft=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,Pt=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:le.workingColorSpace,Ot=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Gt=xt.get(Y.envMap||Ft,Ot),ie=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ae=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Bt=!!$.morphAttributes.position,pe=!!$.morphAttributes.normal,Ie=!!$.morphAttributes.color;let Te=kn;Y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Te=C.toneMapping);const ye=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ze=ye!==void 0?ye.length:0,Ut=K.get(Y),tn=b.state.lights;if(ut===!0&&(G===!0||y!==Q)){const Ee=y===Q&&Y.id===q;Wt.setState(Y,y,Ee)}let he=!1;Y.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==tn.state.version||Ut.outputColorSpace!==Pt||Z.isBatchedMesh&&Ut.batching===!1||!Z.isBatchedMesh&&Ut.batching===!0||Z.isBatchedMesh&&Ut.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Ut.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Ut.instancing===!1||!Z.isInstancedMesh&&Ut.instancing===!0||Z.isSkinnedMesh&&Ut.skinning===!1||!Z.isSkinnedMesh&&Ut.skinning===!0||Z.isInstancedMesh&&Ut.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ut.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ut.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ut.instancingMorph===!1&&Z.morphTexture!==null||Ut.envMap!==Gt||Y.fog===!0&&Ut.fog!==Dt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==Wt.numPlanes||Ut.numIntersection!==Wt.numIntersection)||Ut.vertexAlphas!==ie||Ut.vertexTangents!==ae||Ut.morphTargets!==Bt||Ut.morphNormals!==pe||Ut.morphColors!==Ie||Ut.toneMapping!==Te||Ut.morphTargetsCount!==Ze||!!Ut.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Ut.__version=Y.version);let Mn=Ut.currentProgram;he===!0&&(Mn=Nr(Y,O,Z),U&&Y.isNodeMaterial&&U.onUpdateProgram(Y,Mn,Ut));let Zn=!1,xi=!1,es=!1;const xe=Mn.getUniforms(),Pe=Ut.uniforms;if(x.useProgram(Mn.program)&&(Zn=!0,xi=!0,es=!0),Y.id!==q&&(q=Y.id,xi=!0),Ut.needsLights){const Ee=Jd(b.state.lightProbeGridArray,Z);Ut.lightProbeGrid!==Ee&&(Ut.lightProbeGrid=Ee,xi=!0)}if(Zn||Q!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),xe.setValue(D,"projectionMatrix",y.projectionMatrix),xe.setValue(D,"viewMatrix",y.matrixWorldInverse);const Mi=xe.map.cameraPosition;Mi!==void 0&&Mi.setValue(D,ct.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&xe.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xe.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,xi=!0,es=!0)}if(Ut.needsLights&&(tn.state.sunShadowMap.length>0&&xe.setValue(D,"sunShadowMap",tn.state.sunShadowMap,j),tn.state.directionalShadowMap.length>0&&xe.setValue(D,"directionalShadowMap",tn.state.directionalShadowMap,j),tn.state.spotShadowMap.length>0&&xe.setValue(D,"spotShadowMap",tn.state.spotShadowMap,j),tn.state.pointShadowMap.length>0&&xe.setValue(D,"pointShadowMap",tn.state.pointShadowMap,j)),Z.isSkinnedMesh){xe.setOptional(D,Z,"bindMatrix"),xe.setOptional(D,Z,"bindMatrixInverse");const Ee=Z.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),xe.setValue(D,"boneTexture",Ee.boneTexture,j))}Z.isBatchedMesh&&(xe.setOptional(D,Z,"batchingTexture"),xe.setValue(D,"batchingTexture",Z._matricesTexture,j),xe.setOptional(D,Z,"batchingIdTexture"),xe.setValue(D,"batchingIdTexture",Z._indirectTexture,j),xe.setOptional(D,Z,"batchingColorTexture"),Z._colorsTexture!==null&&xe.setValue(D,"batchingColorTexture",Z._colorsTexture,j));const vi=$.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&k.update(Z,$,Mn),(xi||Ut.receiveShadow!==Z.receiveShadow)&&(Ut.receiveShadow=Z.receiveShadow,xe.setValue(D,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Pe.envMapIntensity.value=O.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=dx()),xi){if(xe.setValue(D,"toneMappingExposure",C.toneMappingExposure),Ut.needsLights&&Qd(Pe,es),Dt&&Y.fog===!0&&Vt.refreshFogUniforms(Pe,Dt),Vt.refreshMaterialUniforms(Pe,Y,V,I,b.state.transmissionRenderTarget[y.id]),Ut.needsLights&&Ut.lightProbeGrid){const Ee=Ut.lightProbeGrid;Pe.probesSH.value=Ee.texture,Pe.probesMin.value.copy(Ee.boundingBox.min),Pe.probesMax.value.copy(Ee.boundingBox.max),Pe.probesResolution.value.copy(Ee.resolution)}mo.upload(D,Jc(Ut),Pe,j)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(mo.upload(D,Jc(Ut),Pe,j),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xe.setValue(D,"center",Z.center),xe.setValue(D,"modelViewMatrix",Z.modelViewMatrix),xe.setValue(D,"normalMatrix",Z.normalMatrix),xe.setValue(D,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Ee=Y.uniformsGroups;for(let Mi=0,ns=Ee.length;Mi<ns;Mi++){const jc=Ee[Mi];dt.update(jc,Mn),dt.bind(jc,Mn)}}return Mn}function Qd(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.sunLights.needsUpdate=O,y.sunLightShadows.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function jd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(y,O,$){const Y=K.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),K.get(y.texture).__webglTexture=O,K.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const $=K.get(y);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(y,O=0,$=0){et=y,W=O,F=$;let Y=null,Z=!1,Dt=!1;if(y){const Pt=K.get(y);if(Pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,Pt.__webglFramebuffer),tt.copy(y.viewport),pt.copy(y.scissor),mt=y.scissorTest,x.viewport(tt),x.scissor(pt),x.setScissorTest(mt),q=-1;return}else if(Pt.__webglFramebuffer===void 0)j.setupRenderTarget(y);else if(Pt.__hasExternalTextures)j.rebindTextures(y,K.get(y.texture).__webglTexture,K.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ie=y.depthTexture;if(Pt.__boundDepthTexture!==ie){if(ie!==null&&K.has(ie)&&(y.width!==ie.image.width||y.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(y)}}const Ot=y.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Dt=!0);const Gt=K.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?Y=Gt[O][$]:Y=Gt[O],Z=!0):y.samples>0&&j.useMultisampledRTT(y)===!1?Y=K.get(y).__webglMultisampledFramebuffer:Array.isArray(Gt)?Y=Gt[$]:Y=Gt,tt.copy(y.viewport),pt.copy(y.scissor),mt=y.scissorTest}else tt.copy(ht).multiplyScalar(V).floor(),pt.copy(gt).multiplyScalar(V).floor(),mt=bt;if($!==0&&(Y=z),x.bindFramebuffer(D.FRAMEBUFFER,Y)&&x.drawBuffers(y,Y),x.viewport(tt),x.scissor(pt),x.setScissorTest(mt),Z){const Pt=K.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pt.__webglTexture,$)}else if(Dt){const Pt=O;for(let Ot=0;Ot<y.textures.length;Ot++){const Gt=K.get(y.textures[Ot]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ot,Gt.__webglTexture,$,Pt)}}else if(y!==null&&$!==0){const Pt=K.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,$)}q=-1};function Qc(y){const O=K.get(y);return(O.__readFormat!==y.format||O.__readType!==y.type)&&(O.__readFormat=y.format,O.__readType=y.type,O.__formatReadable=A.textureFormatReadable(y.format),O.__typeReadable=A.textureTypeReadable(y.type)),O}this.readRenderTargetPixels=function(y,O,$,Y,Z,Dt,Ft,Pt=0){if(!(y&&y.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){x.bindFramebuffer(D.FRAMEBUFFER,Ot);try{const Gt=y.textures[Pt],ie=Gt.format,ae=Gt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt);const Bt=Qc(Gt);if(Bt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Bt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-Y&&$>=0&&$<=y.height-Z&&D.readPixels(O,$,Y,Z,At.convert(ie),At.convert(ae),Dt)}finally{const Gt=et!==null?K.get(et).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(y,O,$,Y,Z,Dt,Ft,Pt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=K.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if(O>=0&&O<=y.width-Y&&$>=0&&$<=y.height-Z){x.bindFramebuffer(D.FRAMEBUFFER,Ot);const Gt=y.textures[Pt],ie=Gt.format,ae=Gt.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt);const Bt=Qc(Gt);if(Bt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Bt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.bufferData(D.PIXEL_PACK_BUFFER,Dt.byteLength,D.STREAM_READ),D.readPixels(O,$,Y,Z,At.convert(ie),At.convert(ae),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Ie=et!==null?K.get(et).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Ie);const Te=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ef(D,Te,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Dt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pe),D.deleteSync(Te),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,$=0){const Y=Math.pow(2,-$),Z=Math.floor(y.image.width*Y),Dt=Math.floor(y.image.height*Y),Ft=O!==null?O.x:0,Pt=O!==null?O.y:0;j.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,$,0,0,Ft,Pt,Z,Dt),x.unbindTexture()},this.copyTextureToTexture=function(y,O,$=null,Y=null,Z=0,Dt=0){let Ft,Pt,Ot,Gt,ie,ae,Bt,pe,Ie;const Te=y.isCompressedTexture?y.mipmaps[Dt]:y.image;if($!==null)Ft=$.max.x-$.min.x,Pt=$.max.y-$.min.y,Ot=$.isBox3?$.max.z-$.min.z:1,Gt=$.min.x,ie=$.min.y,ae=$.isBox3?$.min.z:0;else{const Pe=Math.pow(2,-Z);Ft=Math.floor(Te.width*Pe),Pt=Math.floor(Te.height*Pe),y.isDataArrayTexture?Ot=Te.depth:y.isData3DTexture?Ot=Math.floor(Te.depth*Pe):Ot=1,Gt=0,ie=0,ae=0}Y!==null?(Bt=Y.x,pe=Y.y,Ie=Y.z):(Bt=0,pe=0,Ie=0);const ye=At.convert(O.format),Ze=At.convert(O.type);let Ut;O.isData3DTexture?(j.setTexture3D(O,0),Ut=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),Ut=D.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),Ut=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const tn=x.getParameter(D.UNPACK_ROW_LENGTH),he=x.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=x.getParameter(D.UNPACK_SKIP_PIXELS),Zn=x.getParameter(D.UNPACK_SKIP_ROWS),xi=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Gt),x.pixelStorei(D.UNPACK_SKIP_ROWS,ie),x.pixelStorei(D.UNPACK_SKIP_IMAGES,ae);const es=y.isDataArrayTexture||y.isData3DTexture,xe=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const Pe=K.get(y),vi=K.get(O),Ee=K.get(Pe.__renderTarget),Mi=K.get(vi.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,Ee.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ns=0;ns<Ot;ns++)es&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,K.get(y).__webglTexture,Z,ae+ns),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,K.get(O).__webglTexture,Dt,Ie+ns)),D.blitFramebuffer(Gt,ie,Ft,Pt,Bt,pe,Ft,Pt,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Z!==0||y.isRenderTargetTexture||K.has(y)){const Pe=K.get(y),vi=K.get(O);x.bindFramebuffer(D.READ_FRAMEBUFFER,N),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Ee=0;Ee<Ot;Ee++)es?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.__webglTexture,Z,ae+Ee):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pe.__webglTexture,Z),xe?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vi.__webglTexture,Dt,Ie+Ee):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vi.__webglTexture,Dt),Z!==0?D.blitFramebuffer(Gt,ie,Ft,Pt,Bt,pe,Ft,Pt,D.COLOR_BUFFER_BIT,D.NEAREST):xe?D.copyTexSubImage3D(Ut,Dt,Bt,pe,Ie+Ee,Gt,ie,Ft,Pt):D.copyTexSubImage2D(Ut,Dt,Bt,pe,Gt,ie,Ft,Pt);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xe?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Ut,Dt,Bt,pe,Ie,Ft,Pt,Ot,ye,Ze,Te.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Ut,Dt,Bt,pe,Ie,Ft,Pt,Ot,ye,Te.data):D.texSubImage3D(Ut,Dt,Bt,pe,Ie,Ft,Pt,Ot,ye,Ze,Te):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Dt,Bt,pe,Ft,Pt,ye,Ze,Te.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Dt,Bt,pe,Te.width,Te.height,ye,Te.data):D.texSubImage2D(D.TEXTURE_2D,Dt,Bt,pe,Ft,Pt,ye,Ze,Te);x.pixelStorei(D.UNPACK_ROW_LENGTH,tn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),x.pixelStorei(D.UNPACK_SKIP_ROWS,Zn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,xi),Dt===0&&O.generateMipmaps&&D.generateMipmap(Ut),x.unbindTexture()},this.initRenderTarget=function(y){K.get(y).__webglFramebuffer===void 0&&j.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?j.setTextureCube(y,0):y.isData3DTexture?j.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?j.setTexture2DArray(y,0):j.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){W=0,F=0,et=null,x.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const Da=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:la,AddEquation:Hi,AddOperation:Nu,AdditiveBlending:yl,AgXToneMapping:Kl,AlphaFormat:nc,AlwaysCompare:Wu,AlwaysDepth:xo,AlwaysStencilFunc:Bu,ArcCurve:ed,ArrayCamera:gd,BackSide:ln,BasicDepthPacking:Fu,Box3:Ii,BoxGeometry:_i,BufferAttribute:Cn,BufferGeometry:Oe,ByteType:Ql,Camera:Sc,CanvasTexture:uc,CatmullRomCurve3:pc,CineonToneMapping:Yl,CircleGeometry:ya,ClampToEdgeWrapping:jn,Color:oe,ColorManagement:le,ConeGeometry:Qi,ConstantAlphaFactor:Lu,ConstantColorFactor:Cu,Controls:xd,CubeCamera:md,CubeDepthTexture:td,CubeReflectionMapping:Li,CubeRefractionMapping:Yi,CubeTexture:hc,CubeUVReflectionMapping:br,CubicBezierCurve:mc,CubicBezierCurve3:nd,CullFaceBack:Sl,CullFaceFront:fu,CullFaceNone:du,Curve:Xn,CurvePath:sd,CustomBlending:mu,CustomToneMapping:Zl,CylinderGeometry:wr,Data3DTexture:Ju,DataArrayTexture:rc,DataTexture:lc,DepthFormat:ei,DepthStencilFormat:Ai,DepthTexture:Ls,DirectionalLight:yc,DoubleSide:En,DstAlphaFactor:Eu,DstColorFactor:wu,EllipseCurve:Ea,EqualCompare:Gu,EqualDepth:Mo,EquirectangularReflectionMapping:co,EquirectangularRefractionMapping:ho,Euler:mi,EventDispatcher:gi,ExternalTexture:dc,ExtrudeGeometry:Fs,Float32BufferAttribute:de,FloatType:wn,FogExp2:Ma,FrontSide:Pi,Frustum:Sa,GLSL3:Tl,GreaterCompare:Hu,GreaterDepth:yo,GreaterEqualCompare:_a,GreaterEqualDepth:So,Group:Ri,HalfFloatType:Wn,HemisphereLight:pd,IcosahedronGeometry:Rr,ImageUtils:Zu,InstancedBufferAttribute:Al,InstancedMesh:Rl,IntType:ca,KeepStencilOp:fo,Layers:va,LessCompare:ku,LessDepth:vo,LessEqualCompare:ga,LessEqualDepth:As,Light:Ra,LightShadow:Mc,LineCurve:gc,LineCurve3:id,LinearFilter:Xe,LinearMipmapLinearFilter:wi,LinearMipmapNearestFilter:uo,LinearSRGBColorSpace:fr,LinearToneMapping:Xl,LinearTransfer:pr,MOUSE:ui,Material:$i,MathUtils:un,Matrix2:Ul,Matrix3:Qt,Matrix4:ue,MaxEquation:vu,Mesh:cn,MeshBasicMaterial:Tr,MeshDepthMaterial:dd,MeshDistanceMaterial:fd,MeshStandardMaterial:vs,MinEquation:xu,MirroredRepeatWrapping:Eo,MixOperation:Iu,MultiplyBlending:El,MultiplyOperation:Wl,NearestFilter:We,NearestMipmapLinearFilter:Qs,NearestMipmapNearestFilter:Uu,NeutralToneMapping:Jl,NeverCompare:zu,NeverDepth:_o,NoBlending:ti,NoColorSpace:li,NoToneMapping:kn,NormalBlending:ys,NotEqualCompare:Vu,NotEqualDepth:bo,Object3D:Ue,ObjectSpaceNormalMap:Ou,OneFactor:Su,OneMinusConstantAlphaFactor:Du,OneMinusConstantColorFactor:Pu,OneMinusDstAlphaFactor:Tu,OneMinusDstColorFactor:Au,OneMinusSrcAlphaFactor:Vl,OneMinusSrcColorFactor:bu,OrthographicCamera:Cr,PCFShadowMap:Ss,PCFSoftShadowMap:pu,PMREMGenerator:Fl,Path:Pl,PerspectiveCamera:_n,Plane:Qn,PlaneGeometry:ji,PointLight:Ca,Points:ju,PointsMaterial:cc,PolyhedronGeometry:ba,QuadraticBezierCurve:_c,QuadraticBezierCurve3:xc,Quaternion:pi,R11_EAC_Format:Do,RED_GREEN_RGTC2_Format:dr,RED_RGTC1_Format:Qo,REVISION:aa,RG11_EAC_Format:ur,RGBAFormat:An,RGBAIntegerFormat:ma,RGBA_ASTC_10x10_Format:qo,RGBA_ASTC_10x5_Format:Vo,RGBA_ASTC_10x6_Format:Wo,RGBA_ASTC_10x8_Format:Xo,RGBA_ASTC_12x10_Format:Yo,RGBA_ASTC_12x12_Format:Zo,RGBA_ASTC_4x4_Format:Uo,RGBA_ASTC_5x4_Format:Fo,RGBA_ASTC_5x5_Format:Oo,RGBA_ASTC_6x5_Format:Bo,RGBA_ASTC_6x6_Format:zo,RGBA_ASTC_8x5_Format:ko,RGBA_ASTC_8x6_Format:Go,RGBA_ASTC_8x8_Format:Ho,RGBA_BPTC_Format:Ko,RGBA_ETC2_EAC_Format:Lo,RGBA_PVRTC_2BPPV1_Format:Ro,RGBA_PVRTC_4BPPV1_Format:Ao,RGBA_S3TC_DXT1_Format:ir,RGBA_S3TC_DXT3_Format:sr,RGBA_S3TC_DXT5_Format:rr,RGBFormat:ic,RGB_BPTC_SIGNED_Format:Jo,RGB_BPTC_UNSIGNED_Format:$o,RGB_ETC1_Format:Co,RGB_ETC2_Format:Po,RGB_PVRTC_2BPPV1_Format:wo,RGB_PVRTC_4BPPV1_Format:To,RGB_S3TC_DXT1_Format:nr,RGFormat:Di,RGIntegerFormat:pa,RawShaderMaterial:ud,Ray:Er,Raycaster:_d,RedFormat:da,RedIntegerFormat:fa,ReinhardToneMapping:ql,RenderTarget:Ku,RepeatWrapping:hr,ReverseSubtractEquation:_u,SIGNED_R11_EAC_Format:Io,SIGNED_RED_GREEN_RGTC2_Format:ta,SIGNED_RED_RGTC1_Format:jo,SIGNED_RG11_EAC_Format:No,SRGBColorSpace:$e,SRGBTransfer:me,Scene:Qu,ShaderChunk:ne,ShaderLib:On,ShaderMaterial:Ln,Shape:Ar,ShapeUtils:Wi,ShortType:jl,Sphere:Ji,SphereGeometry:Ta,Spherical:Nl,SplineCurve:vc,SrcAlphaFactor:Hl,SrcAlphaSaturateFactor:Ru,SrcColorFactor:yu,StaticDrawUsage:Xu,SubtractEquation:gu,SubtractiveBlending:bl,TOUCH:ci,TangentSpaceNormalMap:ea,Texture:qe,TextureSource:xa,TorusGeometry:wa,Triangle:Tn,TubeGeometry:Aa,UVMapping:$l,Uint16BufferAttribute:oc,Uint32BufferAttribute:ac,UniformsLib:Rt,UniformsUtils:hd,UnsignedByteType:dn,UnsignedInt101111Type:ec,UnsignedInt248Type:Cs,UnsignedInt5999Type:tc,UnsignedIntType:Vn,UnsignedShort4444Type:ha,UnsignedShort5551Type:ua,UnsignedShortType:Rs,VSMShadowMap:xs,Vector2:_t,Vector3:P,Vector4:we,WebGLCoordinateSystem:zn,WebGLCubeRenderTarget:bc,WebGLRenderTarget:Rn,WebGLRenderer:Ad,WebGLUtils:Td,WebGPUCoordinateSystem:Ps,WebXRController:po,ZeroFactor:Mu,createCanvasElement:qu,error:ce,log:wl,warn:Jt,warnOnce:Xi},Symbol.toStringTag,{value:"Module"})),eu={type:"change"},Ec={type:"start"},Rd={type:"end"},ao=new Er,nu=new Qn,fx=Math.cos(70*un.DEG2RAD),Be=new P,hn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class px extends xd{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new pi,this._lastTargetPosition=new P,this._quat=new pi().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nl,this._sphericalDelta=new Nl,this._scale=1,this._panOffset=new P,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new P,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gx.bind(this),this._onPointerDown=mx.bind(this),this._onPointerUp=_x.bind(this),this._onContextMenu=Ex.bind(this),this._onMouseWheel=Mx.bind(this),this._onKeyDown=Sx.bind(this),this._onTouchStart=yx.bind(this),this._onTouchMove=bx.bind(this),this._onMouseDown=xx.bind(this),this._onMouseMove=vx.bind(this),this._interceptControlDown=Tx.bind(this),this._interceptControlUp=wx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=_e.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eu),this.update(),this.state=_e.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ao.origin.copy(this.object.position),ao.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ao.direction))<fx?this.object.lookAt(this.target):(nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ao.intersectPlane(nu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(eu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function mx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gx(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function _x(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rd),this.state=_e.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function xx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ui.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_e.DOLLY;break;case ui.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}break;case ui.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ec)}function vx(n){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Mx(n){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(n.preventDefault(),this.dispatchEvent(Ec),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Rd))}function Sx(n){this.enabled!==!1&&this._handleKeyDown(n)}function yx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ci.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_e.TOUCH_ROTATE;break;case ci.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case ci.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_e.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Ec)}function bx(n){switch(this._trackPointer(n),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_e.NONE}}function Ex(n){this.enabled!==!1&&n.preventDefault()}function Tx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wx(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Js=new P;function yn(n,t,e,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Js.copy(t),Js[i]=0,Js.normalize();const l=.5*o/(o+a),h=1-Js.angleTo(n)/c;return Math.sign(Js[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Tc extends _i{constructor(t=1,e=1,i=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new P,l=new P,h=new P(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,S=new P,m=.5/o;for(let p=0,M=0;p<f.length;p+=3,M+=2)switch(c.fromArray(f,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),f[p+0]=h.x*Math.sign(c.x)+l.x*r,f[p+1]=h.y*Math.sign(c.y)+l.y*r,f[p+2]=h.z*Math.sign(c.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/g)){case 0:S.set(1,0,0),d[M+0]=yn(S,l,"z","y",r,i),d[M+1]=1-yn(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),d[M+0]=1-yn(S,l,"z","y",r,i),d[M+1]=1-yn(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),d[M+0]=1-yn(S,l,"x","z",r,t),d[M+1]=yn(S,l,"z","x",r,i);break;case 3:S.set(0,-1,0),d[M+0]=1-yn(S,l,"x","z",r,t),d[M+1]=1-yn(S,l,"z","x",r,i);break;case 4:S.set(0,0,1),d[M+0]=1-yn(S,l,"x","y",r,t),d[M+1]=1-yn(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),d[M+0]=yn(S,l,"x","y",r,t),d[M+1]=1-yn(S,l,"y","x",r,e);break}}static fromJSON(t){return new Tc(t.width,t.height,t.depth,t.segments,t.radius)}}function Ax(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Oe;let l=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const f=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=n[u].attributes.position.count}c.setIndex(f)}for(const h in r){const f=iu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let S=0;S<o[h].length;++S)d.push(o[h][S][u]);const g=iu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function iu(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Cn(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const f=c/e;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<e;g++){const S=h.getComponent(u,g);a.setComponent(u+f,g,S)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function Rx({THREE:n,root:t,dock:e,state:i,M:s,mat:r,group:o,mesh:a,box:c,sphere:l,cyl:h,torus:f,rod:u,sign:d,paperBoat:g,batchStatic:S,persist:m,say:p,refresh:M,chime:w,reduced:v}){const b=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],R=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=o([0,0,0],e);h([-.7,.3,-.83],.3,.38,s.concrete,_),f([-.7,.51,-.83],.31,.035,s.copper,_),h([-.7,.49,-.83],.26,.045,s.dark,_);const E=o([-.7,.97,-.83],_);a(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],E),f([0,0,0],.36,.015,s.copper,E,[0,0,.35]),h([.66,.34,-.22],.27,.45,s.rust,_),f([.66,.56,-.22],.28,.028,s.copper,_),h([.66,.55,-.22],.24,.03,r("#495441"),_);const C=o([.66,.56,-.22],_);u([0,0,0],[0,.83,0],.026,s.copper,C);for(const[ht,gt,bt]of[[-.17,.23,-.5],[.17,.41,.5]]){const nt=l([ht,gt,0],[.24,.035,.085],s.mint,C);nt.rotation.z=bt}const L=o([0,.95,0],C);l([0,0,0],.115,s.light,L),f([0,0,0],.28,.021,s.cream,L,[0,0,0]),f([0,0,0],.27,.021,s.copper,L,[0,Math.PI/2,0]);const U=[];for(let ht=0;ht<4;ht++){const gt=ht*Math.PI/2,bt=o([Math.cos(gt)*.3,.13+Math.sin(gt)*.12,Math.sin(gt)*.3],C);u([0,-.15,0],[0,.2,0],.012,s.copper,bt),l([0,.23,0],.065,s.cream,bt),S(bt,[]),U.push(bt)}c([-.46,.2,.32],[.68,.12,.47],s.dark,_);const z=o([-.46,.29,.32],_);c([0,0,0],[.5,.025,.32],s.cream,z);for(const ht of[-.23,.23])u([ht,.016,-.14],[0,.016,.06],.009,s.copper,z);l([0,.027,.06],[.04,.015,.04],s.rust,z),d("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),S(E,[]),S(L,[]),S(C,[L,...U]),S(z,[]),S(_,[E,C,z]);const N=l([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),e);N.castShadow=!1;const B=o([0,0,0],t),W=g(B,[8.3,.14,3.5],1.05),F=o([0,.36,0],W),et=a(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],F),q=l([0,.12,0],[.085,.13,.085],s.light,F),Q=c([0,.09,0],[.23,.025,.16],s.cream,F);Q.rotation.z=.2;const tt=[et,q,Q];S(W,[F]);const pt=new n.Vector3(8.3,.14,3.5),mt=new n.Vector3(8.45,.14,3.65),Xt=new n.Vector3(9.2,-2.7,6.5);let qt=-1,ft=i.dockTrips>=2?1:.02;function I(){E.visible=i.dockTrips>=1,C.visible=i.dockTrips>=2,z.visible=i.dockTrips>=3,U.forEach((ht,gt)=>ht.visible=i.dockTrips>=5+gt*3),F.visible=i.dockPending,tt.forEach((ht,gt)=>ht.visible=gt===i.dockTrips%3),W.position.copy(i.dockPending?mt:pt)}I();function V(){if(!(i.boat>0))if(i.dockPending){const ht=b[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(ft=.02),m(),I(),p(ht.line),w(330),M()}else i.boat=18,qt=-1,tt.forEach((ht,gt)=>ht.visible=gt===i.dockTrips%3),F.visible=!1,p("ну плыви. я тут."),M()}function ot(ht,gt){if(i.boat>0){i.boat=Math.max(0,i.boat-ht);const bt=18-i.boat,nt=bt<7?0:bt<11?1:2;nt!==qt&&(qt=nt,M()),bt<2?W.position.lerpVectors(pt,mt,n.MathUtils.smoothstep(bt,0,2)):bt<7?W.position.lerpVectors(mt,Xt,n.MathUtils.smoothstep(bt,2,7)):bt<11?W.position.copy(Xt):bt<16?W.position.lerpVectors(Xt,mt,n.MathUtils.smoothstep(bt,11,16)):W.position.copy(mt),W.visible=bt<7||bt>=11,F.visible=bt>=11,W.rotation.y=bt>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),W.visible=!0,I(),p("вернулся. с чем-то."),w(554),M())}W.rotation.z=v?0:Math.sin(gt*1.7)*.035,i.boat===0&&(W.visible=!0,W.position.y=(i.dockPending?mt.y:pt.y)+Math.sin(gt*1.2)*.02,W.rotation.y=i.dockPending?Math.PI+.2:0),E.position.y=.97+Math.sin(gt*.9)*.055,E.rotation.y=gt*.15,ft=n.MathUtils.damp(ft,1,1.1,ht),C.scale.setScalar(ft),L.rotation.y=v?0:gt*.23,N.material.emissiveIntensity=i.dockPending?1.5+Math.sin(gt*4)*1.1:1.2}function vt(){if(i.boat>0){const ht=18-i.boat;return{disabled:!0,action:ht<7?"плывёт…":ht<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${b[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const ht=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:ht===2?`${b[ht].description} ${R[Math.floor((i.dockTrips-1)/3)%R.length]}`:b[ht].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:B,gallery:_,beacon:N,launchOrCollect:V,update:ot,card:vt,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:W.position.toArray(),visible:W.visible,cargo:F.visible,stone:E.visible,plant:C.visible,plantScale:ft,letter:z.visible,buds:U.filter(ht=>ht.visible).length})}}async function Cd(n,t=12e3){const e=typeof AbortController=="function"?new AbortController:null;let i;const s=new Promise((r,o)=>{i=setTimeout(()=>{const a=new Error("public-read-timeout");a.code="timeout",o(a),e==null||e.abort()},t)});try{return await Promise.race([s,(async()=>{const r=await fetch(n,{cache:"no-store",...e?{signal:e.signal}:{}});if(!r.ok){const o=new Error("public-read-http");throw o.code="http",o}return await r.json()})()])}finally{clearTimeout(i)}}function Cx({api:n,enabled:t}){if(!t)return;const e=600,i=new Map,s=matchMedia("(max-width: 900px)"),r=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",hour:"2-digit",minute:"2-digit"}),o=new Intl.DateTimeFormat("ru-RU",{timeZone:"Europe/Moscow",day:"numeric",month:"long"}),a=new Set(["muse","say","move","interact","wait","cancel","extension","release","cancelled"]),c="beznogim-public-notes-v1";let l="all",h=!s.matches,f=!1,u=!1,d=!1,g=!1,S=!1,m=0,p=null,M=0,w=0,v=0,T=!1;try{const X=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");X!==null&&(h=X==="open")}catch{}const b=(X,st,yt)=>{const Lt=document.createElement(X);return st&&(Lt.className=st),yt&&(Lt.textContent=yt),Lt},R=b("aside","resident-history");R.id="resident-history",R.setAttribute("aria-label","История мыслей и действий Головы");const _=b("div","history-heading"),E=b("div"),C=b("div","history-eyebrow","ДНЕВНИК БЕЗ НОГ"),L=b("h3","","на полях"),U=b("span","history-eyes");U.setAttribute("aria-hidden","true"),L.append(U),E.append(C,L,b("p","history-subtitle","мысли, дела и прочее"));const z=b("button","history-close","−");z.type="button",z.setAttribute("aria-label","Свернуть историю"),z.title="Свернуть историю",_.append(E,z);const N=b("div","history-filters");N.setAttribute("role","group"),N.setAttribute("aria-label","Показывать в истории");const B=[["all","всё"],["thoughts","мысли"],["actions","дела"]];for(const[X,st]of B){const yt=b("button","",st);yt.type="button",yt.dataset.filter=X,yt.setAttribute("aria-pressed",String(l===X)),yt.onclick=()=>{l=X,gt(!1),F.scrollTop=0;for(const Lt of N.children)Lt.setAttribute("aria-pressed",String(Lt.dataset.filter===l))},N.append(yt)}const W=b("button","history-new");W.type="button",W.hidden=!0;const F=b("div","history-scroll");F.tabIndex=0,F.setAttribute("aria-label","Записи, от новых к старым");const et=b("ol","history-list"),q=b("p","history-empty","собираю заметки…");F.append(et,q);const Q=b("div","history-foot"),tt=b("span","history-live","подключаюсь…"),pt=b("span","history-count"),mt=b("button","history-retry","повторить подключение");mt.type="button",mt.hidden=!0,mt.onclick=()=>{G(),window.dispatchEvent(new Event("beznogim:retry"))},Q.append(tt,pt,mt),R.append(_,N,W,F,Q);const Xt=b("button","history-toggle");Xt.type="button",Xt.setAttribute("aria-controls",R.id);const qt=b("span","","на полях"),ft=b("span","history-badge");ft.hidden=!0,Xt.append(b("span","history-toggle-icon","◌"),qt,ft),document.body.append(R,Xt);function I(X,st=!0){if(h=X,R.hidden=!h,Xt.hidden=h,Xt.setAttribute("aria-expanded",String(h)),st)try{localStorage.setItem(s.matches?"head-notes-mobile":"head-notes-desktop",h?"open":"closed")}catch{}h?(F.scrollTop<30?V():ot(),z.focus({preventScroll:!0})):st&&Xt.focus({preventScroll:!0})}R.hidden=!h,Xt.hidden=h,Xt.setAttribute("aria-expanded",String(h)),Xt.onclick=()=>{I(!0),(g||!u)&&G()},z.onclick=()=>I(!1),s.addEventListener("change",()=>{let X=!s.matches;try{const st=localStorage.getItem(s.matches?"head-notes-mobile":"head-notes-desktop");st!==null&&(X=st==="open")}catch{}I(X,!1)}),document.addEventListener("keydown",X=>{X.key==="Escape"&&h&&!document.querySelector("dialog[open]")&&I(!1)});function V(){m=0,ft.hidden=!0,W.hidden=!0}function ot(){ft.textContent=String(m),ft.hidden=!m,W.textContent=`↑ к новым · ${m}`,W.hidden=!(h&&m)}W.onclick=()=>{F.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),V()},F.addEventListener("scroll",()=>{F.scrollTop<30&&V()},{passive:!0});function vt(X){return l==="all"||(l==="thoughts"?X.type==="muse"||X.type==="say":X.type!=="muse"&&X.type!=="say")}function ht(X,st){const yt=X.type==="muse"||X.type==="say",Lt=b("li",`history-entry ${yt?"history-thought":"history-action"}${st?" is-new":""}`);Lt.dataset.eventId=String(X.id),Lt.dataset.type=X.type;const D=b("div","history-meta"),Ht=b("time","",r.format(X.time*1e3));Ht.dateTime=new Date(X.time*1e3).toISOString(),Ht.title=o.format(X.time*1e3)+" · "+Ht.textContent+" мск";const Nt={muse:"про себя",say:"вслух",release:"новая глава",wait:"без спешки"};return D.append(b("span","",Nt[X.type]||"во дворе"),Ht),Lt.append(D,b("p","",X.text)),Lt}function gt(X,st=new Set){const yt=F.scrollTop>30,Lt=F.getBoundingClientRect().top,D=yt?[...et.querySelectorAll("[data-event-id]")].find(j=>j.getBoundingClientRect().bottom>Lt):null,Ht=D==null?void 0:D.dataset.eventId,Nt=D==null?void 0:D.getBoundingClientRect().top,A=F.scrollTop,x=document.createDocumentFragment();let H="";const K=[...i.values()].sort((j,xt)=>xt.id-j.id).filter(vt);for(const j of K){const xt=o.format(j.time*1e3);if(xt!==H){const St=b("li","history-day",xt);x.append(St),H=xt}x.append(ht(j,X&&st.has(j.id)&&!yt))}if(et.replaceChildren(x),q.hidden=K.length>0,q.textContent=g?"не удалось связаться с сервером. это не пустой дневник.":u?"пока ни строчки. пусть поживёт.":"собираю заметки…",i.size&&!K.length&&(q.textContent="в этом фильтре пока нет записей."),pt.textContent=i.size?S?`последние ${i.size} · мск`:`записей: ${i.size} · мск`:u?"записей: 0 · мск":"записи ещё не загружены",mt.hidden=!(g||!u&&!d),mt.disabled=d,Ht){const j=et.querySelector(`[data-event-id="${Ht}"]`);F.scrollTop=A+(j?j.getBoundingClientRect().top-Nt:0)}else yt||(F.scrollTop=0)}function bt(X,st=!1){if(!X||!Array.isArray(X.entries))return!1;const yt=Math.max(0,...i.keys()),Lt=new Set;let D=0,Ht=0;for(const Nt of X.entries)!Nt||typeof Nt!="object"||!Number.isSafeInteger(Nt.id)||Nt.id<1||!Number.isFinite(Nt.time)||Math.abs(Nt.time)>864e10||!a.has(Nt.type)||typeof Nt.text!="string"||!Nt.text.trim()||(Ht++,i.has(Nt.id)||(T=!0,i.set(Nt.id,{id:Nt.id,time:Nt.time,type:Nt.type,text:Nt.text.slice(0,280)}),Lt.add(Nt.id),Nt.id>yt&&vt(Nt)&&D++));if(X.entries.length&&!Ht)return!1;if(S=S||!!X.has_older||!!X.has_more||i.size>e,i.size>e){const Nt=[...i.keys()].sort((A,x)=>A-x);for(const A of Nt.slice(0,i.size-e))i.delete(A)}return f&&!st&&D&&(!h||F.scrollTop>30)&&(m+=D,ot()),(Lt.size||!f)&&gt(f&&!st,Lt),!0}function nt(){if(!(!i.size||!T)){T=!1,w=Date.now();try{localStorage.setItem(c,JSON.stringify({version:1,saved_at:w,has_older:S,entries:[...i.values()]}))}catch{}}}function ut(){try{const X=localStorage.getItem(c);if(!X||X.length>1e6)return;const st=JSON.parse(X);if(st.version!==1||!Number.isFinite(st.saved_at)||st.saved_at<=0)return;bt(st,!0),w=st.saved_at,f=i.size>0,T=!1}catch{}}async function G(){if(!d){d=!0,v=performance.now(),mt.disabled=!0;try{const X=await Cd(n+"/api/history");if(!bt(X,!0))throw Error("invalid-public-history");u=!0,f=!0,g=!1,nt(),gt(!1)}catch{g=!0,gt(!1)}finally{d=!1,mt.disabled=!1,J()}}}function J(){var yt;const X=!p||performance.now()-M>35e3||p.server_time-p.heartbeat>60||p.resident_status==="stopped";R.classList.toggle("history-offline",X);const st=w?` · сохранено ${r.format(w)} мск`:" · записи на устройстве";tt.textContent=X?i.size?"связи нет":"нет связи с живым сервером":p.resident_status==="sleeping"?"голова спит · дневник открыт":p.resident_status==="paused"?"голова отдыхает":"жизнь идёт",X&&i.size&&(tt.textContent+=st),!X&&g&&(tt.textContent+=" · архив не дошёл"),tt.title=((yt=p==null?void 0:p.action)==null?void 0:yt.label)||""}function ct(X){var Ht;const st=Math.max(0,...i.keys()),yt=Array.isArray((Ht=X.history)==null?void 0:Ht.entries)?X.history.entries:[];p=X,M=performance.now(),bt(X.history)&&i.size&&(f=!0,nt()),J();const Lt=yt.filter(Nt=>Nt&&Number.isSafeInteger(Nt.id)).map(Nt=>Nt.id);(st&&Lt.length&&Math.min(...Lt)>st&&performance.now()-v>1e3||!u&&performance.now()-v>15e3)&&G()}window.addEventListener("beznogim:state",X=>ct(X.detail)),window.__beznogimState&&ct(window.__beznogimState),ut(),gt(!1),J(),G(),window.addEventListener("online",()=>{(g||!u)&&G()}),document.addEventListener("visibilitychange",()=>{!document.hidden&&(g||!u)&&G()}),setInterval(()=>{J(),(g||!u)&&G()},15e3)}function Px({head:n,headDestination:t,state:e,controls:i,camera:s,refresh:r,setAudioTone:o,say:a,onHarvest:c}){let l=null,h=0,f=0,u=!1,d=!1,g=!1,S=0,m=null,p=null,M=null,w="",v=!0;const T=n.position.clone(),b=document.createElement("aside");b.className="resident-thought",b.hidden=!0,b.setAttribute("aria-label","Мысли Головы");const R=document.createElement("span");R.className="thought-kicker",R.textContent="про себя";const _=document.createElement("p");b.append(R,_),document.body.append(b);const E=["head.alesha.pro","alesha-pro.github.io","192.168.1.211"].includes(location.hostname),C=location.hostname==="alesha-pro.github.io"?"https://head.alesha.pro":"";Cx({api:C,enabled:E});const L=document.querySelector(".territory-nav"),U=document.createElement("div");U.className="resident-strip",U.hidden=!0;const z=document.createElement("span");z.className="resident-status",z.textContent="подключаюсь к голове";const N=document.createElement("button");N.type="button",N.textContent="к голове",N.onclick=()=>{d=!1,g=!0,s.zoom=innerWidth<700?1.5:1.1,s.updateProjectionMatrix(),Q()};const B=document.createElement("button");B.type="button",B.textContent="поиграть самому",B.onclick=()=>{d=!d,g=!1,Q()};const W=document.createElement("button");W.type="button",W.textContent="мысли",W.setAttribute("aria-pressed","true"),W.onclick=()=>{v=!v,W.setAttribute("aria-pressed",String(v))},U.append(z,N,B,W),L.append(U);function F(){return Date.now()/1e3+f}function et(){return l&&F()-l.heartbeat<60&&l.resident_status!=="stopped"}function q(){return u&&l&&!d}function Q(){const I=d?"ты в песочнице":u?et()?l!=null&&l.action&&l.action.ends>F()?l.action.label:(l==null?void 0:l.resident_status)==="thinking"?"голова задумалась":"голова здесь":"голова отдыхает · сессия на паузе":"связь с головой прервалась";I!==w&&(w=I,z.textContent=I),B.textContent=d?"вернуться к голове":"поиграть самому",N.setAttribute("aria-pressed",String(g))}function tt(I){var ot,vt;if(!I||I.version!==1||!Array.isArray(I.position)||I.position.length!==3||!I.position.every(Number.isFinite)||!I.objects||!Number.isFinite(I.server_time)||!Number.isFinite(I.heartbeat)||l&&(I.server_time<l.server_time||I.server_time===l.server_time&&Number.isFinite(I.revision)&&Number.isFinite(l.revision)&&I.revision<l.revision))return;if(f=I.server_time-Date.now()/1e3,l=I,h=performance.now(),u=!0,U.hidden=!1,m&&((ot=I.release)!=null&&ot.commit)&&m!==I.release.commit&&location.hostname==="head.alesha.pro"){sessionStorage.setItem("beznogim-live-return","1"),location.reload();return}m=((vt=I.release)==null?void 0:vt.commit)||m;const V=I.speech;V&&V.time>S&&V.until>F()&&(S=V.time,d||a(V.text)),window.__beznogimState=I,window.dispatchEvent(new CustomEvent("beznogim:state",{detail:I})),Q()}function pt(){const I=l.action;if((I==null?void 0:I.kind)==="move"){const V=Math.max(0,Math.min(1,(F()-I.started)/Math.max(.001,I.ends-I.started)));return I.from.map((ot,vt)=>ot+(I.to[vt]-ot)*V)}return l.position}function mt(){if(!q())return;const I=l.objects;I.engine&&(e.running=!!I.engine.running),I.workshop&&(e.roof=I.workshop.roof_open?1:0),I.radio&&(e.radio=I.radio.station,p!==e.radio&&(p=e.radio,o())),I.garden&&(e.harvest=I.garden.harvest,M!==null&&e.harvest>M&&c(),M=e.harvest);const V=l.action;e.brew=(V==null?void 0:V.effect)==="brew"?Math.max(0,V.ends-F()):0,e.loop=0,Q()}function Xt(){if(!q()){b.hidden=!0;return}const I=pt();n.position.set(I[0],I[1]+Math.sin(F()*1.4)*.1,I[2]),t.set(...I),g&&i.target.lerp(n.position,.08);const V=l.musing;if(v&&et()&&(V!=null&&V.text)&&V.until>F()&&!document.body.classList.contains("dreaming")&&!document.querySelector("#speech.visible"))if(_.textContent!==V.text&&(_.textContent=V.text),T.copy(n.position),T.y+=1.8,T.project(s),T.z>=-1&&T.z<=1&&Math.abs(T.x)<1&&Math.abs(T.y)<1){b.hidden=!1;const ot=b.offsetWidth,vt=b.offsetHeight,ht=Math.max(ot/2+12,Math.min(innerWidth-ot/2-12,(T.x+1)*innerWidth/2));let gt=(1-T.y)*innerHeight/2-18;const bt=L.getBoundingClientRect(),nt=ht-ot/2<bt.right&&ht+ot/2>bt.left?bt.bottom+12:18,ut=gt-vt<nt;ut&&(gt=Math.max(nt+vt,(1-T.y)*innerHeight/2+70+vt)),gt=Math.min(innerHeight-70,Math.max(vt+18,gt)),b.classList.toggle("below-head",ut),b.style.transform=`translate3d(${Math.round(ht)}px,${Math.round(gt)}px,0) translate(-50%,-100%)`}else b.hidden=!0;else b.hidden=!0}function qt(){q()&&(d=!0,g=!1,Q())}function ft(){if(!E)return;U.hidden=!1;let I=!1;async function V(){if(!I){I=!0;try{const vt=await Cd(C+"/api/state");tt(vt),l&&document.querySelector("#inspector").classList.add("collapsed")}catch{(!l||performance.now()-h>35e3)&&(u=!1),Q()}finally{I=!1}}}try{const vt=new EventSource(C+"/api/events");vt.addEventListener("state",ht=>{try{tt(JSON.parse(ht.data))}catch{}}),vt.onerror=()=>{u=!1,Q()}}catch{u=!1,Q()}V();function ot(){(!u||!l||performance.now()-h>3e4)&&V()}window.addEventListener("online",ot),window.addEventListener("beznogim:retry",V),document.addEventListener("visibilitychange",()=>{document.hidden||ot()}),setInterval(()=>{l&&performance.now()-h>35e3&&(u=!1),Q(),ot()},15e3)}return i.addEventListener("start",()=>{g=!1,Q()}),ft(),{sync:mt,place:Xt,localPlay:qt,unfollow:()=>{g=!1},watching:q,inspect:()=>{var I;return{connected:u,sandbox:d,follow:g,alive:!!et(),revision:l==null?void 0:l.revision,release:(I=l==null?void 0:l.release)==null?void 0:I.commit,action:l==null?void 0:l.action,musing:l==null?void 0:l.musing,thoughtVisible:!b.hidden,position:l?pt():null}}}}const Lx=120,Dx=24,Ix=[{id:"-2:-2",x:-48,z:-48,status:"frontier",name:"свободная земля"},{id:"-1:-2",x:-24,z:-48,status:"frontier",name:"свободная земля"},{id:"0:-2",x:0,z:-48,status:"frontier",name:"свободная земля"},{id:"1:-2",x:24,z:-48,status:"frontier",name:"свободная земля"},{id:"2:-2",x:48,z:-48,status:"frontier",name:"свободная земля"},{id:"-2:-1",x:-48,z:-24,status:"frontier",name:"свободная земля"},{id:"-1:-1",x:-24,z:-24,status:"frontier",name:"свободная земля"},{id:"0:-1",x:0,z:-24,status:"frontier",name:"свободная земля"},{id:"1:-1",x:24,z:-24,status:"frontier",name:"свободная земля"},{id:"2:-1",x:48,z:-24,status:"frontier",name:"свободная земля"},{id:"-2:0",x:-48,z:0,status:"frontier",name:"свободная земля"},{id:"-1:0",x:-24,z:0,status:"frontier",name:"свободная земля"},{id:"0:0",x:0,z:0,status:"settled",name:"двор тихого хода"},{id:"1:0",x:24,z:0,status:"settled",name:"сырный погреб"},{id:"2:0",x:48,z:0,status:"frontier",name:"свободная земля"},{id:"-2:1",x:-48,z:24,status:"frontier",name:"свободная земля"},{id:"-1:1",x:-24,z:24,status:"frontier",name:"свободная земля"},{id:"0:1",x:0,z:24,status:"frontier",name:"свободная земля"},{id:"1:1",x:24,z:24,status:"frontier",name:"свободная земля"},{id:"2:1",x:48,z:24,status:"frontier",name:"свободная земля"},{id:"-2:2",x:-48,z:48,status:"frontier",name:"свободная земля"},{id:"-1:2",x:-24,z:48,status:"frontier",name:"свободная земля"},{id:"0:2",x:0,z:48,status:"frontier",name:"свободная земля"},{id:"1:2",x:24,z:48,status:"frontier",name:"свободная земля"},{id:"2:2",x:48,z:48,status:"frontier",name:"свободная земля"}],Fn={size:Lx,sectorSize:Dx,sectors:Ix};function Nx({root:n,camera:t,controls:e,mobile:i,go:s,overview:r,home:o}){const a=new Ri;a.name="unsettled-territory",n.add(a);const c=Fn.size/2,l=[[-c+4,-c],[c-4,-c],[c,-c+4],[c,c-4],[c-4,c],[-c+4,c],[-c,c-4],[-c,-c+4]],h=new Ar;l.forEach(([E,C],L)=>L?h.lineTo(E,-C):h.moveTo(E,-C)),h.closePath();const f=new Fs(h,{depth:1.8,bevelEnabled:!1});f.rotateX(-Math.PI/2),f.translate(0,-3.5,0);const u=new cn(f,new vs({color:"#233e35",roughness:1}));u.receiveShadow=!0,a.add(u);let d=8409;const g=()=>(d=d*1664525+1013904223>>>0)/4294967296,S=new Rl(new Rr(1,0),new vs({color:"#8a9980",roughness:1}),150),m=new Rl(new Qi(1,1,4),new vs({color:"#9aa880",roughness:1}),850),p=new Ue;for(const[E,C,L]of[[S,150,!0],[m,850,!1]]){for(let U=0;U<C;U++){let z,N;do z=(g()-.5)*(Fn.size-10),N=(g()-.5)*(Fn.size-10);while(Math.abs(z)<11&&Math.abs(N)<9);const B=L?.15+g()*.48:.12+g()*.42;p.position.set(z,-1.7+B*.25,N),p.rotation.set(0,g()*6.28,L?g()*.25:0),p.scale.set(L?B*1.3:.07,B,L?B:.07),p.updateMatrix(),E.setMatrixAt(U,p.matrix)}E.instanceMatrix.needsUpdate=!0,a.add(E)}const M=new vs({color:"#c1b692",roughness:1});for(let E=0;E<16;E++){const C=new cn(new _i(1.15,.12,.65),M);C.position.set(-.6,-.06-E*.105,5.8+E*.7),C.receiveShadow=!0,a.add(C)}const w=document.createElement("nav");w.className="territory-nav",w.setAttribute("aria-label","Путешествие по миру"),w.innerHTML='<button id="territory-map" type="button">карта ↗</button><button id="world-overview" type="button">весь мир ⊙</button><span id="territory-location">двор · 0:0</span>',document.body.append(w);const v=document.createElement("dialog");v.id="territory-dialog",v.setAttribute("aria-labelledby","territory-title"),v.innerHTML='<button id="territory-close" aria-label="Закрыть карту">×</button><div class="edition">ЗЕМЛЯ ВПЕРЕДИ</div><h2 id="territory-title">здесь ещё поживём</h2><p>Двор и сырный погреб. Между ними каменная тропа; дальше свободная земля.</p><div id="territory-grid"></div><p class="map-legend">● обжито &nbsp; · свободная земля<br>Нажми на участок, чтобы перелететь.</p><button id="territory-home" class="action">домой, во двор ⌂</button>',document.body.append(v);const T=v.querySelector("#territory-grid");for(const E of Fn.sectors){const C=document.createElement("button");C.type="button",C.dataset.sector=E.id,C.className=E.status==="settled"?"settled":"",C.textContent=E.status==="settled"?`● ${E.id==="0:0"?"двор":E.name}`:`· ${E.id}`,C.setAttribute("aria-label",`${E.name}, ${E.id}`),C.onclick=()=>{v.close(),s(E.x,E.z,E.status==="settled")},T.append(C)}document.querySelector("#territory-map").onclick=()=>v.showModal(),document.querySelector("#world-overview").onclick=r,v.querySelector("#territory-close").onclick=()=>v.close(),v.querySelector("#territory-home").onclick=()=>{v.close(),o()};const b=w.querySelector("#territory-location");let R="";function _(){const E=Math.round(e.target.x/Fn.sectorSize),C=Math.round(e.target.z/Fn.sectorSize),L=`${E}:${C}`;if(L!==R){R=L;const U=Fn.sectors.find(z=>z.id===L);b.textContent=`${(U==null?void 0:U.status)==="settled"?U.name:"свободная земля"} · ${L}`;for(const z of T.children)z.classList.toggle("current",z.dataset.sector===L)}}return{half:c,update:_,inspect:()=>({size:Fn.size,sectorSize:Fn.sectorSize,sectors:Fn.sectors.length,settled:Fn.sectors.filter(E=>E.status==="settled").length,visible:n.visible,sector:R})}}function Ux({THREE:n,root:t,scene:e,head:i,M:s,mat:r,group:o,box:a,sphere:c,cyl:l,rod:h,torus:f,sign:u,paperBoat:d,batchStatic:g,changed:S,chime:m}){let p={};try{p=JSON.parse(localStorage.getItem("beznogim-parnik-v1")||"{}")||{}}catch{}const M={temp:4,turn:0,mode:"idle",wins:Math.min(99,Math.max(0,Math.floor(Number(p.wins)||0))),trace:p.trace===!0},w=[1,2,-1,1,2,-1];function v(){try{localStorage.setItem("beznogim-parnik-v1",JSON.stringify({wins:M.wins,trace:M.trace}))}catch{}}const T=o([-.1,.08,4.3],t);a([0,.22,0],[1.35,.44,1.4],s.concrete,T),a([0,.46,0],[1.22,.08,1.3],s.dark,T);const b=r("#a6d4bb",{transparent:!0,opacity:.18,depthWrite:!1,side:n.DoubleSide});for(const X of[-.62,.62])for(const st of[-.64,.64])h([X,.46,st],[X,1.45,st],.024,s.copper,T);for(const X of[-.62,.62])a([X,.96,0],[.018,.95,1.28],b,T);a([0,.96,-.64],[1.24,.95,.018],b,T);const R=o([0,1.45,-.64],T);for(const X of[-.62,.62])h([X,0,0],[X,.36,.64],.026,s.copper,R);for(const X of[-.62,.62])h([X,.36,.64],[X,0,1.28],.026,s.copper,R);h([-.62,.36,.64],[.62,.36,.64],.026,s.copper,R);const _=a([0,.18,.32],[1.26,.025,.72],b,R);_.rotation.x=-.51;const E=a([0,.18,.96],[1.26,.025,.72],b,R);E.rotation.x=.51;const C=o([0,.52,0],T);l([0,.2,0],.026,.4,s.leaf,C);for(const X of[-1,1]){const st=c([X*.15,.27,0],[.22,.055,.09],s.leaf,C);st.rotation.z=X*.35}const L=c([0,.25,.12],[.23,.16,.27],s.copper,C),U=c([.42,.58,.46],[.15,.1,.18],s.copper,T);U.visible=M.wins>0;const z=o([-.76,.7,.69],T);a([0,.28,0],[.13,.66,.06],s.cream,z);const N=a([0,.12,.036],[.055,.3,.018],r("#ce7852",{emissive:"#8b392b",emissiveIntensity:.2}),z);c([0,-.06,.04],.065,s.rust,z),u("ПАРНИК",[0,.3,.716],.93,.22,T,{size:49});const B=f([0,2.05,0],.46,.016,s.mint,T);B.visible=M.trace;const W=[];for(let X=0;X<6;X++)W.push(c([0,0,0],.1,r("#d5e6cd",{transparent:!0,opacity:.3,depthWrite:!1}),T));g(T,[R,C,z,B,U,...W]),g(R,[]),g(C,[L]),g(z,[N]);let F=0,et=0;function q(){Object.assign(M,{temp:4,turn:0,mode:"playing"}),F=0,S()}function Q(X){if(M.mode!=="playing")return;const st={heat:2,wait:0,vent:-2};X in st&&(M.temp+=w[M.turn]+st[X],M.turn++,M.temp>6?(M.mode="hot",F=3,m(110)):M.temp<3?(M.mode="cold",m(165)):M.turn===6&&(M.mode="won",M.wins=Math.min(99,M.wins+1),U.visible=!0,v(),m(660)),S())}function tt(){let X="Парниковый инференс. Шесть тактов: держи тепло от 3 до 6. Солнце меняется, твой ход добавляется к нему. Греть +2, ждать 0, проветрить −2. Здесь вычисляется только кабачок.";return M.mode==="playing"&&(X=`Тепло ${M.temp} / норма 3–6. Такт ${M.turn+1} из 6. Следующее солнце: ${w[M.turn]>0?"+":""}${w[M.turn]}. Выбери один ход.`),M.mode==="hot"&&(X=`Тепло ${M.temp}. Перегрел: крышу сорвало, кабачок сварился. Можно сразу попробовать снова.`),M.mode==="cold"&&(X=`Тепло ${M.temp}. Заморозил. Кабачок перестал думать. Можно сразу попробовать снова.`),M.mode==="won"&&(X="Шесть тактов выдержаны. Вырос латунный кабачок. Вот и весь инференс. Урожай остаётся рядом с парником."),{description:X,action:M.mode==="idle"?"вырастить вычисление":"начать заново"}}const pt=o([0,0,0],e);pt.visible=!1,a([0,-.7,0],[7,.5,5.8],s.concrete,pt),a([0,-.42,0],[6.8,.08,5.6],s.dark,pt);for(const X of[-3.2,3.2])for(const st of[-2.6,2.6])h([X,-.4,st],[X,4,st],.055,s.copper,pt);for(const X of[-3.2,3.2])h([X,4,-2.6],[X,5.7,0],.055,s.copper,pt),h([X,5.7,0],[X,4,2.6],.055,s.copper,pt);h([-3.2,5.7,0],[3.2,5.7,0],.055,s.copper,pt),a([-3.2,1.8,0],[.025,4.4,5.2],b,pt),a([0,1.8,-2.6],[6.4,4.4,.025],b,pt),u("СОН / 01",[0,-.12,2.93],2.2,.38,pt,{size:52});const mt=o([0,1.6,0],pt);c([0,0,0],1.16,r("#5f9c85"),mt);for(let X=0;X<10;X++){let st=X*2.4;const yt=c([Math.sin(st)*.95,Math.cos(X*1.2)*.6,Math.cos(st)*.95],[.35,.2,.3],s.leaf,mt);yt.rotation.y=st}f([0,0,0],1.32,.028,s.copper,mt,[.4,0,.2]);const Xt=o([0,1.6,0],pt),qt=[];for(let X=0;X<28;X++){const st=a([0,0,0],[.53,.11,.32],X%4?s.cream:s.concrete,Xt);qt.push(st)}const ft=d(pt,[1.7,-.05,1],1.65),I=c([0,.65,0],.13,s.cream,ft),V=o([0,.65,0],ft);V.visible=!1;for(let X=0;X<8;X++){let st=X/8*Math.PI*2;h([Math.sin(st)*.27,Math.cos(st)*.27,0],[Math.sin(st)*.5,Math.cos(st)*.5,0],.026,s.light,V)}const ot=i.clone(!0);pt.add(ot),ot.scale.setScalar(.72),ot.position.set(-2,1,1.3),ot.rotation.z=-.25;const vt=o([-2,-.05,1.3],pt);l([0,0,0],.55,.3,s.cream,vt),f([.58,0,0],.25,.04,s.copper,vt,[0,0,0]);const ht=a([2.4,-.32,1.9],[.7,.04,.46],s.cream,pt);ht.rotation.y=.2;let gt=0,bt=0,nt=!1;g(pt,[mt,Xt,ft,ot]),g(mt,[]);function ut(){nt=!0,gt=0,bt=0,pt.visible=!0,t.visible=!1,S()}function G(){nt=!1,pt.visible=!1,t.visible=!0,S()}function J(){nt&&(gt===3?(gt=0,bt=0):(gt++,m(220+gt*110),gt===3&&(M.trace=!0,B.visible=!0,v())),S())}function ct(X,st){et=n.MathUtils.damp(et,M.mode==="hot"?-1.1:M.mode==="playing"?-.08:0,4,X),R.rotation.x=et,C.scale.y=n.MathUtils.damp(C.scale.y,M.mode==="hot"?.2:M.mode==="cold"?.45:M.mode==="won"?1.25:.6+M.turn*.08,4,X),L.visible=M.mode==="won",N.scale.y=.3*Math.max(.05,M.temp/8),N.position.y=-.015+M.temp/8*.15,B.rotation.z=Math.sin(st*.3)*.15,F=Math.max(0,F-X),W.forEach((yt,Lt)=>{yt.visible=F>0;const D=(3-F+Lt*.18)%1.5;yt.position.set(Math.sin(Lt*2)*D*.35,1.5+D,Math.cos(Lt*2)*D*.35),yt.scale.setScalar(.1*(.4+D))}),nt&&(bt=n.MathUtils.damp(bt,gt,2,X),mt.rotation.y=st*.08,qt.forEach((yt,Lt)=>{const D=Lt/28*Math.PI*2+st*.055*Math.min(1,bt),Ht=Math.min(1,bt);yt.position.set(Math.sin(D)*(1.8+Ht*.35),Math.cos(D)*(1.8-Ht*1.5),Math.cos(D)*Ht*1.5),yt.rotation.set(0,-D*Ht,Math.PI/2-D*(1-Ht))}),Xt.rotation.y=bt*.32,ft.position.y=-.05+bt*1.12,ft.position.x=1.7-bt*.32,ft.rotation.y=.2+bt*.35,I.scale.setScalar(.13*(1+Math.max(0,bt-2)*2)),V.visible=bt>2.2,V.rotation.z=st*.22,ot.position.y=1+Math.sin(st*.8)*.06)}return{house:T,start:q,step:Q,card:tt,update:ct,enter:ut,exit:G,breathe:J,inspect:()=>({...M,weather:[...w],dream:nt,dreamStep:gt,phase:bt,lidAngle:et,rootVisible:t.visible,dreamVisible:pt.visible,boatY:ft.position.y,rays:V.visible})}}function Fx({THREE:n,scene:t,root:e,head:i,M:s,mat:r,mesh:o,group:a,box:c,sphere:l,cyl:h,rod:f,torus:u,sign:d,batchStatic:g,chime:S}){const m=a([0,0,0],t);m.name="dream-02-water-sleeps",m.visible=!1;const p=r("#c39860"),M=r("#e0c58b"),w=r("#465c63"),v=r("#80b9be",{metalness:.15,roughness:.35}),T=r("#dbd6bc");o(new n.CylinderGeometry(3.85,3.85,.38,64,1,!1,.15,Math.PI*1.42),p,[0,-.35,0],null,m),o(new n.CylinderGeometry(3.72,3.72,.08,64,1,!1,.15,Math.PI*1.42),M,[0,-.11,0],null,m);for(let ft=0;ft<13;ft++){const I=.15+ft/12*Math.PI*1.42,V=Math.sin(I)*3.65,ot=Math.cos(I)*3.65,vt=c([V,.48,ot],[.75,1.08,.19],M,m);vt.rotation.y=I,ft%3===0&&u([V,.48,ot],.15,.048,w,m,[Math.PI/2,0,0]).rotation.set(0,I,0)}d("СОН / 02",[0,-.18,3.95],2.2,.38,m,{size:52});const b=a([1.08,.12,.4],m);c([0,0,0],[2.55,.22,1.55],w,b);for(let ft of[-1.15,1.15])for(let I of[-.63,.63])c([ft,-.23,I],[.12,.5,.12],s.copper,b);for(let ft of[-.79,.79])c([0,.36,ft],[2.72,.65,.14],T,b);for(let ft of[-1.32,1.32])c([ft,.38,0],[.14,.68,1.55],T,b);const R=c([0,.18,0],[2.49,.045,1.49],v,b),_=l([-.84,.38,0],[.34,.14,.54],s.cream,b),E=i.clone(!0);m.add(E),E.scale.setScalar(.54),E.position.set(.3,.83,.45),E.rotation.z=-.35;const C=a([0,0,0],E);for(const ft of[-.23,.23])l([ft,.2,.611],[.15,.11,.025],s.black,C),c([ft,.2,.64],[.2,.018,.012],s.copper,C);const L=a([-2.05,2.35,-.38],m);h([0,0,0],.52,.56,s.cream,L),h([0,.29,0],.44,.022,w,L),u([.55,0,0],.24,.055,s.copper,L,[0,0,0]),d("ПУСТО",[-2.03,2.8,-.38],1.1,.28,m,{size:52});const U=[];for(let ft=0;ft<7;ft++){const I=a([-1.92+ft*.33,.2+ft*.29,1.45-ft*.29],m);c([0,0,0],[.7,.13,.42],s.cream,I);for(let V of[-.2,.2])c([0,.07,V],[.7,.12,.05],s.copper,I);U.push(I)}const z=Array.from({length:16},()=>l([0,0,0],[.07,.1,.07],v,m)),N=Array.from({length:3},(ft,I)=>{const V=u([.65,.2,0],.23+I*.16,.012,s.mint,b);return V.scale.z=.6,V}),B=a([-.8,3.65,-1.7],m);o(new n.TorusGeometry(.6,.12,8,40,Math.PI*1.6),s.light,[0,0,0],null,B),B.rotation.z=.55;const W=[];for(let ft=0;ft<9;ft++){const I=ft*2.4;W.push(l([Math.sin(I)*3,3.2+ft%3*.28,Math.cos(I)*2],.025,s.cream,m))}let F=!1,et=0,q=0,Q=!1;try{Q=JSON.parse(localStorage.getItem("beznogim-dream02-v1")||"{}").trace===!0}catch{}const tt=a([26.6,-.86,.65],e);tt.visible=Q,h([0,0,0],.15,.2,s.cream,tt),h([0,.104,0],.125,.014,v,tt),u([.16,0,0],.07,.02,s.copper,tt,[0,0,0]),g(m,[b,E,L,...U,...z,...W,B]),g(b,[R,_,...N]),g(L,[]),g(tt,[]),U.forEach(ft=>g(ft,[]));function pt(){F=!0,et=0,q=0,m.visible=!0,e.visible=!1,qt(0,0)}function mt(){F=!1,m.visible=!1,e.visible=!0}function Xt(){if(F&&(et=et===3?0:et+1,S(165+et*55),et===3)){Q=!0,tt.visible=!0;try{localStorage.setItem("beznogim-dream02-v1",JSON.stringify({trace:!0}))}catch{}}}function qt(ft,I){F&&(q=n.MathUtils.damp(q,et,2.4,ft),U.forEach((V,ot)=>{const vt=Math.min(1,q/2),ht=-1.92+ot*.33,gt=.2+ot*.29,bt=1.45-ot*.29;V.position.set(n.MathUtils.lerp(ht,-1.72+ot*.39,vt),n.MathUtils.lerp(gt,1.95-ot*.22,vt),n.MathUtils.lerp(bt,-.32+ot*.055,vt)),V.rotation.z=-vt*.21}),R.position.y=.18+q*.09,_.position.y=.38+q*.09,E.position.y=.83+q*.09+Math.sin(I*.6)*.025,E.rotation.z=-.35-q*.13,L.rotation.z=-Math.min(1,q)*.45,z.forEach((V,ot)=>{const vt=(I*.16+ot/16)%1;V.visible=q>.05,V.position.set(-1.7+vt*3,2.14-vt*1.62,-.32+vt*.25),V.scale.set(.07,.1+Math.sin(vt*Math.PI)*.04,.07)}),N.forEach((V,ot)=>{V.visible=q>.4,V.position.y=R.position.y+.034,V.scale.setScalar(1+Math.sin(I*.5+ot)*.08),V.scale.z*=.6}),B.rotation.z=.55+q*.21,C.visible=q>1.8)}return{enter:pt,exit:mt,pour:Xt,update:qt,inspect:()=>({active:F,step:et,phase:q,trace:Q,roomVisible:m.visible,rootVisible:e.visible,waterY:R.position.y,sleeperY:E.position.y,channel:U.map(ft=>ft.position.toArray()),droplets:z.filter(ft=>ft.visible).length})}}function Ox({head:n,group:t,sphere:e,box:i,torus:s,M:r,mat:o}){const a=t([0,-.5,0],n);a.name="resident-sleep-pillow",a.visible=!1,e([0,-.1,0],[.8,.15,.64],o("#83afb0"),a),s([0,.08,0],.7,.025,r.mint,a);const c=t([0,0,0],n);c.visible=!1;for(const d of[-.23,.23])e([d,.2,.611],[.15,.11,.025],r.black,c),i([d,.2,.64],[.2,.018,.012],r.copper,c);let l=null,h=0;function f(d){l=d,h=Number(d.server_time)-Date.now()/1e3}addEventListener("beznogim:state",({detail:d})=>f(d)),window.__beznogimState&&f(window.__beznogimState);function u(d){const g=l==null?void 0:l.action;a.visible=!!d&&(g==null?void 0:g.kind)==="sleep"&&Number(g.ends)>Date.now()/1e3+(Number.isFinite(h)?h:0),c.visible=a.visible}return{update:u,inspect:()=>{var d;return{visible:a.visible,ends:((d=l==null?void 0:l.action)==null?void 0:d.kind)==="sleep"?l.action.ends:null}}}}function su(n){const t=n.state||{},e=JSON.parse(JSON.stringify(t));Array.isArray(e.shelf)||(e.shelf=[]),Number.isInteger(e.nextId)||(e.nextId=1),Number.isInteger(e.cutCount)||(e.cutCount=0),["damp","dry"].includes(e.air)||(e.air="damp"),"batch"in e||(e.batch=null),Number.isFinite(e.updated)||(e.updated=n.now);const i=Math.max(0,n.now-e.updated);if(e.batch){const l=e.batch,h=Math.min(i,Math.max(0,360-l.age));l.age+=h,l.exposure[l.face]+=h,l[e.air==="damp"?"wet":"dry"]+=h}e.updated=Math.max(e.updated,n.now);let s=null,r="осматривает сырный погреб",o=10;if(n.mode==="action"){const l=n.args||{};if(n.tool==="set_batch")e.batch?s={ok:!1,reason:"wheel_present",remaining:Math.max(0,360-e.batch.age)}:(e.batch={id:e.nextId++,culture:l.culture,age:0,face:0,exposure:[0,0],wet:0,dry:0,turns:0},s={ok:!0,id:e.batch.id,culture:l.culture,ready_in:360},r="закладывает сырное колесо",o=35);else if(n.tool==="tend")e.air=l.air,e.batch&&e.batch.age<360&&l.turn&&(e.batch.face=1-e.batch.face,e.batch.turns++),s={ok:!0,air:e.air,face:e.batch?e.batch.face:null,turns:e.batch?e.batch.turns:0},r="проветривает погреб и смотрит корку",o=20;else if(n.tool==="cut"){const h=e.batch;if(!h||h.age<360)s={ok:!1,reason:h?"not_ready":"no_wheel",remaining:h?360-h.age:0};else{const u=Math.abs(h.exposure[0]-h.exposure[1])<=120?h.culture==="moon"&&h.wet>=180?"moon_stair":h.culture==="stone"&&h.dry>=180?"stone":"holes":"lopsided",d={id:h.id,culture:h.culture,kind:u,exposure:h.exposure.slice(),wet:h.wet,dry:h.dry,turns:h.turns};e.shelf.push(d),e.shelf=e.shelf.slice(-6),e.cutCount++,e.batch=null,s={ok:!0,cheese:d,stored:e.shelf.length},r="разрезает колесо и заглядывает внутрь",o=30}}}const a=e.batch,c={air:e.air,batch:a?{...a,ready:a.age>=360,remaining:Math.max(0,360-a.age)}:null,shelf:e.shelf,cutCount:e.cutCount};return{state:e,public:c,result:s,seconds:o,label:r}}const Bx={moon_stair:"сыр с лестницей",stone:"каменный сыр",holes:"дырчатый сыр",lopsided:"однобокий сыр"};function zx({THREE:n,root:t,M:e,mat:i,group:s,box:r,sphere:o,cyl:a,rod:c,torus:l,mesh:h,sign:f,batchStatic:u,changed:d,watching:g,localPlay:S}){var bt,nt,ut;const m=s([24,-1.55,0]);m.name="cheese-cellar";const p=i("#697b70"),M=i("#b4b89b"),w=i("#936c4d"),v=i("#e1b064"),T=i("#b77e42"),b=i("#f4d490");r([0,-.23,0],[10,.45,8],p,m),r([0,1.6,-3.65],[10,3.2,.3],M,m),r([-4.85,1.3,0],[.3,2.6,7.3],M,m);for(let G=-4;G<=4;G+=2)r([G,1.5,-3.43],[.16,3,.1],p,m);for(let G of[-4.4,4.4])c([G,0,-3.3],[G,3.6,-3.3],.09,e.copper,m),c([G,3.6,-3.3],[G,3.6,2.5],.09,e.copper,m),c([G,3.6,2.5],[G,0,2.5],.09,e.copper,m);f("СЫРНЫЙ ПОГРЕБ / 010",[0,3,-3.42],4.8,.5,m,{size:36}),r([0,1.2,-2.7],[7.9,.14,1.05],w,m),r([0,0,-2.7],[7.9,.14,1.05],w,m);for(let G of[-3.8,3.8])r([G,.6,-2.7],[.14,1.4,1.05],w,m);a([-3,.55,1.1],.75,1.1,e.copper,m),l([-3,1.11,1.1],.75,.055,e.dark,m),a([-3,1.1,1.1],.64,.02,b,m),c([-3.35,1.1,1.1],[-2.7,2.05,1.1],.045,w,m);for(let G of[2.8,3.5])a([G,.28,1.8],.26,.56,e.cream,m),a([G,.59,1.8],.12,.1,e.copper,m);const R=r([2.6,2.4,-3.42],[1.2,.65,.12],e.metal,m);r([2.6,2.4,-3.31],[.7,.08,.12],e.copper,m);for(let G=0;G<4;G++)r([2.25+G*.23,2.4,-3.32],[.045,.55,.03],e.dark,m);r([.5,.3,.25],[3.7,.6,3.3],w,m);const _=s([.5,1.02,.25],m),E=h(new n.CylinderGeometry(1.2,1.2,.62,40),v,[0,0,0],null,_),C=h(new n.CylinderGeometry(1.215,1.215,.14,40,1,!0),T,[0,0,0],null,_),L=l([0,.33,0],.35,.026,e.cream,_),U=s([.5,.65,2.3],m),z=[];for(let G=0;G<6;G++)z.push(o([-1.25+G*.5,0,0],.08,e.mint,U));const N=f("ЗАКЛАДКА ЖДЁТ",[.5,.8,.27],2.4,.4,m,{size:36});N.rotation.x=-Math.PI/2;function B(G){const J=s(G,m),ct=h(new n.CylinderGeometry(.49,.49,.31,24,1,!1,1.12,Math.PI*2-1.12),b,[0,0,0],null,J),X=h(new n.CylinderGeometry(.5,.5,.09,24,1,!0,1.12,Math.PI*2-1.12),T.clone(),[0,0,0],null,J),st=s([0,-.14,.09],J);for(let Ht=0;Ht<4;Ht++)r([.05+Ht*.085,.04+Ht*.05,.15+Ht*.03],[.12,.06,.2],e.cream,st);const yt=o([.09,.16,.27],.04,e.mint,st),Lt=h(new n.IcosahedronGeometry(.21,0),p,[.13,.02,.23],null,J),D=s([0,0,0],J);for(const[Ht,Nt,A]of[[.045,.06,.26],[.03,-.05,.39],[.28,.03,.11]])o([Ht,Nt,A],[.05,.05,.025],e.dark,D);return{g:J,body:ct,crust:X,steps:st,crystal:Lt,holes:D,pearl:yt}}const W=Array.from({length:6},(G,J)=>B([-3.15+J*1.26,1.42,-2.6])),F=s([0,0,0],t);for(let G=0;G<24;G++){const J=G/23;r([8.3+J*11.2,-.15-J*1.32,1.4+Math.sin(J*Math.PI)*2],[.85,.15,.75],p,F)}for(let G=0;G<5;G++)r([20+G*.7,-1.46,1.4-G*.22],[.75,.13,.7],p,F);f("СЫР →",[10.2,.35,2.4],1.5,.4,F,{size:44}),c([10.2,-1.6,2.4],[10.2,.35,2.4],.045,e.copper,F),u(F,[]),u(m,[_,R,U,N,...W.map(G=>G.g)]);for(const G of W)u(G.steps,[G.pearl]),u(G.holes,[]);let et=null,q=null,Q=0,tt=null,pt="",mt=0;try{const G=JSON.parse(localStorage.getItem("beznogim-cellar-v1")||"null");et=(G==null?void 0:G.state)||G,Q=Number(G==null?void 0:G.clockOffset)||0}catch{}const Xt=()=>Date.now()/1e3+Q;function qt(G,J,ct={}){const X=su({state:et,mode:G,tool:J,args:ct,now:Xt()});et=X.state;try{localStorage.setItem("beznogim-cellar-v1",JSON.stringify({state:et,clockOffset:Q}))}catch{}return X}qt("migrate");const ft=document.createElement("div");ft.id="cellar-controls",ft.hidden=!0,ft.innerHTML='<output id="cellar-readout"></output><div class="cellar-buttons"><button data-culture="moon">лунная закваска</button><button data-culture="stone">каменная закваска</button></div><div class="cellar-buttons"><button id="cellar-turn">перевернуть</button><button id="cellar-air">проветрить</button></div><button id="cellar-wait">песочница: +60 секунд</button><small>6 минут. Переверни на середине. Лунный любит сырость, каменный сухость. Готовый дождётся.</small>',document.querySelector("#focus-object").before(ft);function I(){return q&&g()?q:su({mode:"migrate",state:et,now:et.updated}).public}function V(G){tt=G;const J=G.batch;if(_.visible=!!J,N.visible=!J,R.rotation.y=G.air==="dry"?-.8:0,J){_.rotation.z=J.face?Math.PI:0;const ct=J.age/360;E.material.color.set(J.culture==="moon"?"#e9cf8b":"#c8bc88"),C.material.color.set(G.air==="damp"?"#8b9f78":"#b87a48"),L.scale.setScalar(1+ct*.15)}for(let ct=0;ct<6;ct++)z[ct].visible=!!J&&J.age>=(ct+1)*60;W.forEach((ct,X)=>{const st=G.shelf[X];ct.g.visible=!!st,st&&(ct.g.rotation.z=st.kind==="lopsided"?.22:0,ct.crust.material.color.set(st.wet>=180?"#8b9f78":"#b87a48"),ct.steps.visible=st.kind==="moon_stair",ct.crystal.visible=st.kind==="stone",ct.holes.visible=st.kind==="holes"||st.kind==="lopsided")})}function ot(G,J){S();const ct=qt("action",G,J);return pt="",gt(0),d(),ct}for(const G of ft.querySelectorAll("[data-culture]"))G.onclick=()=>ot("set_batch",{culture:G.dataset.culture});ft.querySelector("#cellar-turn").onclick=()=>ot("tend",{air:et.air,turn:!0}),ft.querySelector("#cellar-air").onclick=()=>ot("tend",{air:et.air==="damp"?"dry":"damp",turn:!1}),ft.querySelector("#cellar-wait").onclick=()=>{S(),Q+=60,qt("tick"),pt="",gt(0),d()};function vt(){const G=tt||I(),J=G.batch,ct=q&&g()?"Жизнь жителя. Кнопки откроют твою отдельную песочницу.":"Твоя песочница. Житель и его сыр не меняются.",X=J?J.ready?"Созрел. Можно открыть колесо; дальше оно не стареет.":`Зреет: ${Math.floor(J.age)}/360 с. Корка: ${Math.floor(J.exposure[0])}/${Math.floor(J.exposure[1])} с.`:G.shelf.length?`На полке: ${G.shelf.map(st=>Bx[st.kind]).join(", ")}.`:"В тёплой комнате ждёт пустой стол.";return{action:q&&g()?"войти в свою сыроварню":J?J.ready?"разрезать колесо":"сыр пока зреет":"заложить лунное колесо",disabled:!(q&&g())&&!!J&&!J.ready,description:ct+" "+X}}function ht(){const G=tt||I(),J=G.batch;ft.querySelector("#cellar-readout").textContent=`${G.air==="damp"?"сыро":"сухо"} · ${J?J.ready?"готово":`ещё ${Math.ceil(J.remaining)} с`:"нет колеса"} · полка ${G.shelf.length}/6`;for(const ct of ft.querySelectorAll("[data-culture]"))ct.disabled=!!J;ft.querySelector("#cellar-turn").disabled=!J||J.ready,ft.querySelector("#cellar-air").textContent=G.air==="damp"?"сделать суше":"вернуть сырость"}function gt(G){G-mt>=1&&(mt=G,qt("tick"));const J=I(),ct=JSON.stringify(J);ct!==pt&&(pt=ct,V(J),ht(),d())}return window.addEventListener("beznogim:state",({detail:G})=>{var ct,X;const J=(X=(ct=G.mechanics)==null?void 0:ct.cellar)==null?void 0:X.public;J&&(q=J,pt="")}),q=((ut=(nt=(bt=window.__beznogimState)==null?void 0:bt.mechanics)==null?void 0:nt.cellar)==null?void 0:ut.public)||null,V(I()),ht(),{house:m,controls:ft,update:gt,card:vt,run:()=>ot(et.batch?"cut":"set_batch",{culture:"moon"}),inspect:()=>({source:q&&g()?"resident":"sandbox",...tt,wheelVisible:_.visible,shelfVisible:W.filter(G=>G.g.visible).length,stairsVisible:W.filter(G=>G.g.visible&&G.steps.visible).length,shutter:R.rotation.y})}}function kx({entries:n,elements:t,layer:e,camera:i}){const s=new ue,r=new ue,o=new P,a=Object.entries(n).map(([f,u])=>({element:t[f],anchor:u.point,x:NaN,y:NaN,visible:null}));let c=0,l=0,h=!1;return{update(f,u,d){if(e.hidden===f&&(e.hidden=!f),!f){h=!1;return}s.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse);const g=!h||c!==u||l!==d||!s.equals(r);c=u,l=d,h=!0;for(const S of a){if(typeof S.anchor=="function")S.anchor(o);else{if(!g)continue;o.copy(S.anchor)}o.applyMatrix4(s);const m=(o.x+1)*u*.5,p=(1-o.y)*d*.5,M=o.z>=-1&&o.z<=1&&m>=10&&m<=u-10&&p>=10&&p<=d-55;if(M!==S.visible&&(S.visible=M,S.element.classList.toggle("hidden",!M)),!M)continue;const w=Math.round(m*10)/10,v=Math.round(p*10)/10;(w!==S.x||v!==S.y)&&(S.x=w,S.y=v,S.element.style.transform=`translate3d(${w}px,${v}px,0) translate(-50%,-50%)`)}r.copy(s)}}}const kt=n=>document.querySelector(n),rn=()=>innerWidth<700,Pd=matchMedia("(prefers-reduced-motion: reduce)").matches;let er={};try{er=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const Mt={loop:0,roof:null,running:!!er.running,harvest:Math.min(99,Math.max(0,Number(er.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(er.dockTrips)||0))),dockPending:er.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function Ns(){return Mt.roof===null?Mt.running||Mt.loop>0:!!Mt.roof}function zl(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:Mt.running,harvest:Mt.harvest,dockTrips:Mt.dockTrips,dockPending:Mt.dockPending}))}catch{}}const ve=new Ad({antialias:!0,alpha:!1,powerPreference:"high-performance"});ve.setPixelRatio(Math.min(devicePixelRatio,rn()?1.5:2));ve.setSize(innerWidth,innerHeight,!1);ve.shadowMap.enabled=!0;ve.shadowMap.type=Ss;ve.shadowMap.autoUpdate=!1;ve.shadowMap.needsUpdate=!0;ve.outputColorSpace=$e;ve.toneMapping=la;ve.toneMappingExposure=1.22;kt("#world").append(ve.domElement);const qn=new Qu;qn.background=new oe("#182e32");qn.fog=new Ma("#182e32",8e-4);const te=new Cr(-10,10,10,-10,.1,600),wc=new P(0,1,0);te.position.set(20,20,24);te.lookAt(wc);const jt=new px(te,ve.domElement);jt.target.copy(wc);jt.enableDamping=!0;jt.enableRotate=!1;jt.enablePan=!0;jt.minZoom=.075;jt.maxZoom=2.5;jt.screenSpacePanning=!1;jt.mouseButtons.LEFT=ui.PAN;jt.mouseButtons.RIGHT=ui.PAN;jt.touches.ONE=ci.PAN;jt.touches.TWO=ci.DOLLY_PAN;qn.add(new pd("#d9eedc","#334d53",2.3));const ts=new yc("#ffe2ac",3.3);ts.position.set(-7,14,6);ts.castShadow=!0;ts.shadow.mapSize.set(rn()?512:1024,rn()?512:1024);Object.assign(ts.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});ts.shadow.bias=-4e-4;ts.shadow.normalBias=.025;qn.add(ts);const Ld=new yc("#8ad5d8",1.3);Ld.position.set(5,7,-8);qn.add(Ld);const Ce=new Ri;qn.add(Ce);const _l={};function re(n,t={}){const e=n+JSON.stringify(t);return _l[e]||(_l[e]=new vs({color:n,roughness:.8,...t}))}const $n={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},rt={concrete:re($n.concrete),cream:re($n.cream),dark:re($n.dark),metal:re($n.metal,{metalness:.5,roughness:.4}),copper:re($n.copper,{metalness:.6,roughness:.35}),rust:re($n.rust),black:re($n.black),leaf:re($n.leaf),light:re("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:re("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Bs={box:new _i(1,1,1),sphere:new Ta(1,12,8),ico:new Rr(1,1),cyl:new wr(1,1,1,16),cone:new Qi(1,1,8)};function Fe(n,t,e,i,s=Ce){const r=new cn(n,t);return e&&r.position.set(...e),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const Zt=(n,t,e,i=Ce)=>Fe(Bs.box,e,n,t,i),Me=(n,t,e,i=Ce)=>Fe(Bs.sphere,e,n,Array.isArray(t)?t:[t,t,t],i),Le=(n,t,e,i,s=Ce)=>Fe(Bs.cyl,i,n,[t,e,t],s);function zs(n,t,e,i=Ce,s=.08){return Fe(new Tc(...t,1,s),e,n,null,i)}function Re(n=[0,0,0],t=Ce){const e=new Ri;return e.position.set(...n),t.add(e),e}function ks(n,t,e,i=Ce){const s=new pc(n.map(r=>new P(...r)));return Fe(new Aa(s,Math.max(12,n.length*6),t,6,!1),e,null,null,i)}function De(n,t,e,i,s=Ce){const r=new P(...n),o=new P(...t),a=o.clone().sub(r),c=Le(r.clone().add(o).multiplyScalar(.5).toArray(),e,a.length(),i,s);return c.quaternion.setFromUnitVectors(new P(0,1,0),a.normalize()),c}function He(n,t,e,i,s=Ce,r=[Math.PI/2,0,0]){const o=Fe(new wa(t,e,6,40),i,n,null,s);return o.rotation.set(...r),o}function ni(n,t,e,i,s=Ce,r={}){const o=document.createElement("canvas");o.width=512,o.height=128;const a=o.getContext("2d");a.fillStyle=r.bg||"#304b47",a.fillRect(0,0,512,128),a.strokeStyle=r.fg||"#e4dfc8",a.lineWidth=2,a.strokeRect(12,12,488,104),a.fillStyle=r.fg||"#e4dfc8",a.font=`${r.size||48}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(n,256,66);const c=new uc(o);c.colorSpace=$e;const l=Fe(new ji(e,i),new Tr({map:c,side:En}),t,null,s);return l.castShadow=!1,l}let xl=179;function ge(){return xl=xl*1664525+1013904223>>>0,xl/4294967296}const sa=document.createElement("canvas");sa.width=sa.height=256;const ra=sa.getContext("2d");ra.fillStyle="#b4bcaa";ra.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)ra.fillStyle=`rgba(${ge()>.5?"60,82,64":"235,229,201"},${ge()*.08})`,ra.fillRect(ge()*256,ge()*256,1+ge()*3,1+ge()*3);const vr=new uc(sa);vr.wrapS=vr.wrapT=hr;vr.repeat.set(5,5);vr.colorSpace=$e;const Gx=re("#c2c6b1",{map:vr,roughness:.97});function Ac(n,t,e,i,s=Ce){const r=new Ar;n.forEach(([a,c],l)=>l?r.lineTo(a,-c):r.moveTo(a,-c)),r.closePath();const o=new Fs(r,{depth:e,bevelEnabled:!1});return o.rotateX(-Math.PI/2),o.translate(0,t-e,0),Fe(o,i,null,null,s)}const Rc=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];Ac(Rc,0,.82,rt.concrete);Ac(Rc,.06,.14,Gx);Ac(Rc.map(([n,t])=>[n*.97,t*.97]),-.8,.6,re("#47665e"));for(let n=0;n<28;n++){const t=-5.4+ge()*10.9,e=ge()>.5?5.15:-5.2,i=Fe(Bs.ico,re(n%3?"#557469":"#668477"),[t,-1.15-ge()*.5,e],[.25+ge()*.8,.2+ge()*.55,.35+ge()*.3]);i.rotation.y=ge()*6}for(let n=0;n<7;n++){const t=-4.6+n*1.25;Zt([t,-.37,5.61],[.48,.19,.025],n%2?rt.copper:rt.dark),n%2===0&&ks([[t,-.5,5.5],[t,-1.4,5.8],[t+.4,-2,5.4],[t+.3,-2.7,5.2]],.055,rt.metal)}ni("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,Ce,{size:32});const Se=Re([-3.2,.08,-2.5]),vn=Re([0,0,0],Se);Zt([0,.08,0],[4.5,.15,3.6],rt.dark,Se);Zt([0,1.2,-1.68],[4.5,2.4,.18],rt.cream,Se);Zt([-2.15,1,0],[.18,2,3.6],rt.cream,Se);for(let n=0;n<5;n++){Zt([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],rt.concrete,Se),Zt([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],rt.metal,Se);for(let t=0;t<3;t++)Zt([-1.88+n*.8+t*.21,1.7,-1.51],[.017,.55,.02],rt.copper,Se)}Zt([0,2.47,-.2],[4.8,.14,3.7],rt.rust,vn);for(let n=0;n<23;n++){const t=Zt([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],re("#d09062"),vn);t.rotation.x=-.015}Zt([0,2.35,1.62],[4.8,.14,.18],rt.dark,Se);De([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,rt.copper,Se);De([2.3,.12,1.62],[2.3,2.4,1.62],.055,rt.copper,Se);ni("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,Se,{size:37});Zt([.1,.85,-.84],[3.8,.13,.87],rt.rust,Se);for(const n of[-1.5,1.65])Zt([n,.44,-.84],[.12,.85,.65],rt.metal,Se);for(let n=0;n<3;n++)Zt([-1.15+n*.95,.51,-.85],[.82,.47,.75],rt.concrete,Se),Zt([-1.15+n*.95,.5,-.44],[.18,.04,.03],rt.copper,Se);for(let n=0;n<2;n++){zs([-.55+n*1.3,1.25,-.85],[.78,.59,.5],rt.dark,Se),Zt([-.55+n*1.3,1.27,-.591],[.62,.41,.012],re("#70a58b",{emissive:"#87cfa6",emissiveIntensity:.65}),Se);for(let t=0;t<4;t++)Zt([-.65+n*1.3,1.18+t*.055,-.58],[.21+ge()*.3,.012,.012],rt.mint,Se);Zt([-.5+n*1.3,.94,-.35],[.75,.035,.25],rt.cream,Se)}for(let n=0;n<6;n++)Zt([-1.6+n*.48,2.07,-1.48],[.28,.16+ge()*.16,.17],re(["#9fba95","#cb9b70","#667f71"][n%3]),Se);Le([0,.5,.7],.32,.12,rt.rust,Se);for(let n=0;n<3;n++){let t=Math.cos(n*2.09)*.22,e=Math.sin(n*2.09)*.22+.7;De([t,.06,e],[t,.5,e],.04,rt.metal,Se)}for(let n=0;n<4;n++)He([-1.5,.06,1],.3-n*.045,.025,rt.black,Se);Le([-1.5,3,-.9],.16,.9,rt.metal,vn);Le([-1.5,3.47,-.9],.24,.08,rt.rust,vn);Zt([1.4,2.9,-.4],[.8,.5,.6],rt.concrete,vn);for(let n=0;n<5;n++)Zt([1.1+n*.15,2.94,-.085],[.035,.32,.03],rt.dark,vn);const Cc=new Ca("#ffca86",5,5,2);Cc.position.set(-3,1.7,-1.1);Ce.add(Cc);for(let n=-1.4;n<3;n+=.79)for(let t=-.65;t<3.1;t+=.79){const e=zs([n,.1,t],[.74,.05,.74],re(ge()>.3?"#b3baa6":"#a5b5a4"),Ce,.018);e.rotation.y=(ge()-.5)*.035}for(let n=0;n<95;n++){let t=-6+ge()*12,e=-5.1+ge()*10.3;if(e>-4.4&&e<.7&&t<-1||e>2.3&&t>2)continue;const i=Fe(Bs.cone,rt.leaf,[t,.1,e],[.022,.12+ge()*.12,.022]);i.rotation.z=(ge()-.5)*.7}const kl=new Ln({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:En});Zt([3.7,.12,3.6],[4.9,.24,2.7],rt.dark);Fe(new ji(4.5,2.4),kl,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])Zt([3.7,.29,n],[5,.38,.16],rt.cream);for(const n of[1.18,6.2])Zt([n,.29,3.6],[.16,.38,2.85],rt.cream);for(let n=0;n<13;n++)Zt([1.85,.5,2.15+n*.235],[1.08,.09,.22],re(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const t of[1.31,2.4])Le([t,.88,n],.045,.8,rt.copper);for(const n of[1.31,2.4])ks([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,rt.cream);const Pc=[];for(let n=0;n<6;n++){let t=Zt([4+n*.095,-1.25,5.56],[.055,2.4,.03],re("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));Pc.push(t)}for(let n=0;n<4;n++)Zt([3.96+n*.17,.31,5.31],[.055,.08,.6],rt.dark);const ze=Re([3.7,.1,-2.6]);zs([0,.14,0],[3.7,.27,3.5],rt.cream,ze,.09);for(const n of[-1.55,1.55])Zt([n,1.76,0],[.17,3.25,.2],rt.metal,ze),Zt([n,.38,0],[.45,.2,.6],rt.copper,ze),De([n,.36,-1.2],[n,2.9,0],.045,rt.copper,ze),De([n,.36,1.2],[n,2.9,0],.045,rt.copper,ze);Zt([0,3.38,0],[3.5,.18,.26],rt.copper,ze);const Hx=He([0,2.7,-.5],1.83,.035,rt.copper,ze,[0,0,0]);Hx.scale.y=.85;const Pr=[];for(let n=0;n<5;n++){const t=Re([-1.18+n*.59,3.24,0],ze),e=1.8+n*.12;De([0,0,-.08],[0,-e,0],.015,rt.dark,t),De([0,0,.08],[0,-e,0],.015,rt.dark,t),Me([0,-e,0],.205,rt.copper,t),He([0,-e,0],.211,.012,rt.light,t,[0,0,0]),Pr.push({group:t,len:e,phase:n})}Zt([0,.6,1.3],[1.45,.8,.4],rt.metal,ze);ni("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,ze,{size:40});const Vx=Le([-.43,.97,1.3],.19,.07,rt.cream,ze);Vx.rotation.x=Math.PI/2;const Lc=Zt([-.43,.99,1.342],[.015,.22,.008],rt.rust,ze);Lc.rotation.z=-.7;const Dd=Me([.53,.93,1.52],.09,rt.light,ze),Ia=Re([.15,.4,1.59],ze);He([0,0,0],.19,.023,rt.rust,Ia,[0,0,0]);for(let n=0;n<3;n++)De([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,rt.rust,Ia);ks([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,rt.copper);const Id=[];function Dc(n,t,e=1.5){Le([n,e/2,t],.038,e,rt.metal),Zt([n,e,t],[.27,.11,.27],rt.dark),Zt([n,e-.18,t],[.17,.25,.17],rt.light),Zt([n,e-.34,t],[.25,.08,.25],rt.copper);const i=new Ca("#ffbe70",1.8,3);i.position.set(n,e-.16,t),Id.push(i)}Dc(-5.9,3.9,1.3);Dc(.3,-4.8,1.7);Dc(5.8,1.25,1.35);const Qe=Re([-3.6,.08,3.55]),Gl=[];for(let n=0;n<2;n++){const t=-.65+n*1.5;zs([0,.14,t],[3.6,.3,1.14],rt.rust,Qe,.06),Zt([0,.305,t],[3.36,.04,.92],re($n.soil),Qe);for(let e=0;e<4;e++){const i=Re([-1.26+e*.84,.33,t],Qe);Le([0,.14,0],.026,.28,rt.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,o=Me([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],re(s%2?"#94af77":"#668c68"),i);o.rotation.y=r,o.rotation.z=.15}if(n===0){Me([0,.17,0],[.25,.18,.25],re("#b6c58a"),i);for(let s=0;s<6;s++){const r=Me([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],rt.leaf,i);r.rotation.y=s}Gl.push(i)}else{const s=Me([.05,.22,0],[.1,.21,.12],re($n.purple,{roughness:.35}),i);s.rotation.z=-.25,Me([.05,.41,0],[.075,.025,.07],rt.leaf,i),Gl.push(i)}}}const Nd=Re([-1.72,.1,.8],Qe);for(let n=0;n<2;n++)Zt([n*3.45,.6,0],[.04,1.3,.04],rt.copper,Nd);De([0,1.25,0],[3.45,1.25,0],.022,rt.copper,Nd);ni("КОБАЧКИ",[-.45,.68,1.64],1,.26,Qe,{bg:"#c2c7a3",fg:"#445e45",size:42});Le([1.9,.23,.7],.18,.34,re("#6b9389"),Qe);De([2.04,.25,.7],[2.4,.46,.7],.045,re("#6b9389"),Qe);He([1.8,.48,.7],.16,.02,rt.copper,Qe,[0,0,0]);Zt([-1.6,.2,1.47],[.65,.4,.45],rt.rust,Qe);for(let n=0;n<3;n++)Zt([-1.6,.12+n*.11,1.71],[.7,.05,.025],rt.copper,Qe);const fn=Re([-3.8,.08,.35]);Le([0,.73,0],.58,.1,rt.rust,fn);Le([0,.35,0],.045,.7,rt.metal,fn);for(let n=0;n<3;n++)De([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,rt.metal,fn);const Lr=Re([.1,.81,0],fn);Me([0,.2,0],[.23,.22,.23],rt.cream,Lr);Le([0,.37,0],.14,.06,rt.copper,Lr);Me([0,.42,0],.045,rt.dark,Lr);De([.15,.18,0],[.33,.32,0],.07,rt.cream,Lr);He([-.15,.25,0],.18,.035,rt.dark,Lr,[0,0,0]);for(const n of[-.35,.38])Le([n,.84,.24],.082,.15,rt.cream,fn),He([n,.92,.24],.084,.012,rt.copper,fn),Le([n,.921,.24],.063,.006,re("#67513b"),fn),He([n+.09,.86,.24],.045,.011,rt.cream,fn,[0,0,0]);const Na=[];for(let n=0;n<9;n++){const t=Me([0,0,0],.07,re("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),fn);t.castShadow=!1,Na.push(t)}const Gn=Re([-5.65,.09,1.1]);Zt([0,.3,0],[.7,.6,.7],rt.concrete,Gn);zs([0,.8,0],[.68,.45,.35],rt.dark,Gn,.05);for(let n=0;n<6;n++)Zt([-.2+n*.05,.8,.18],[.022,.27,.018],rt.copper,Gn);Zt([.18,.85,.184],[.16,.075,.02],rt.light,Gn);Me([.18,.72,.19],.05,rt.cream,Gn);De([.18,1,0],[.48,1.6,0],.012,rt.copper,Gn);const Ud=Re([-.5,.1,-4.6]);Le([0,1.75,0],.055,3.5,rt.metal,Ud);Me([0,3.55,0],.09,rt.copper,Ud);ks([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,rt.dark);for(let n=0;n<8;n++){let t=n/8;const e=Fe(new Qi(.13,.3,3),re(n%2?"#ccb478":"#af7c60"),[-5.1+t*4.5,2.52+t*.73,-1-t*3.7],null);e.rotation.z=Math.PI}const Ua=Re([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const t=Zt([0,0,0],[.55,.09,.025],rt.rust,Ua);t.rotation.z=n*Math.PI/2,t.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}Me([0,0,.05],.08,rt.copper,Ua);const Ye=Re([7.25,-.03,1.5]);Zt([0,-.12,0],[2.25,.3,2.5],rt.metal,Ye);for(let n=0;n<10;n++)Zt([-.99+n*.22,.08,0],[.2,.08,2.6],rt.rust,Ye);Zt([-.95,.2,-.95],[.35,.15,.35],rt.dark,Ye);Le([.87,.34,.75],.075,.5,rt.copper,Ye);Le([.87,.59,.75],.13,.05,rt.cream,Ye);De([.87,.1,-.7],[.87,2.3,-.7],.035,rt.copper,Ye);ks([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,rt.copper,Ye);Zt([.17,2.09,-.7],[.25,.4,.25],re("#ffd591"),Ye);Zt([.17,2.32,-.7],[.34,.08,.34],rt.dark,Ye);for(let n=0;n<4;n++)He([.87,.15,.75],.24-n*.025,.024,re("#b8ad86"),Ye);Zt([6.7,.07,1.5],[1.4,.13,.8],rt.rust);ni("НИКУДА",[.05,.28,1.36],1.3,.29,Ye,{bg:"#c2c7a3",fg:"#445e45",size:45});const Ic=[];function Nc(n,t,e=1){const i=Re(t,n),s=new Ar;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),Fe(new Fs(s,{depth:.19,bevelEnabled:!1}),re("#dfc99a"),[0,.15,-.1],null,i);const r=Fe(new Qi(.23,.36,3),rt.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(e),i}for(let n=0;n<3;n++){const t=Nc(Ce,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);Ic.push(t)}const Hn=Rx({THREE:Da,root:Ce,dock:Ye,state:Mt,M:rt,mat:re,group:Re,mesh:Fe,box:Zt,sphere:Me,cyl:Le,torus:He,rod:De,sign:ni,paperBoat:Nc,batchStatic:je,persist:zl,say:bn,refresh:sn,chime:yr,reduced:Pd}),$t=Re([-.15,1.9,.85]);$t.scale.setScalar(1.18);const Uc=re("#233a39",{metalness:.42,roughness:.32});Me([0,.1,0],[.62,.8,.55],Uc,$t);Me([0,-.36,.1],[.44,.43,.43],Uc,$t);Me([-.61,.03,.03],[.1,.2,.12],rt.copper,$t);Me([.61,.03,.03],[.1,.2,.12],rt.copper,$t);for(const n of[-.23,.23]){Me([n,.2,.485],[.17,.13,.057],rt.black,$t),He([n,.2,.541],.078,.02,rt.copper,$t,[0,0,0]),Me([n,.2,.56],.041,rt.light,$t);const t=Zt([n,.38,.48],[.24,.045,.06],rt.cream,$t);t.rotation.z=n>0?-.13:.13}Me([0,.04,.51],[.09,.17,.11],Uc,$t);Me([0,-.2,.44],[.31,.16,.11],rt.black,$t);for(let n=0;n<7;n++){const t=(n-3)*.073,e=zs([t,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],rt.cream,$t,.009);e.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const t=n/9,e=-.52+t*1.04,i=.66+Math.sin(t*Math.PI)*.23,s=Me([e,i,-.04],[.18,.18,.48],rt.cream,$t);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const t=n/12,e=-.5+t,i=.68+Math.sin(t*Math.PI)*.19;ks([[e-.12,i+.12,-.37],[e+.06,i+.15,-.08],[e+.05,i+.03,.25],[e-.03,i-.08,.4]],.012,re("#f2edda"),$t)}for(let n=0;n<3;n++)Me([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],rt.cream,$t);const Fc=He([0,1.05,0],.77,.019,rt.copper,$t);Fc.rotation.z=.14;const Wx=new Ca("#ffbb62",.9,3);Wx.position.set(0,.2,.9);const go=He([-.15,.26,.85],.7,.018,rt.copper),Mr=Fe(new ya(.64,32),new Tr({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);Mr.rotation.x=-Math.PI/2;Mr.castShadow=!1;const hi=new P(-.15,1.9,.85),Pn=Re([-6,2.18,-3.25]);for(let n=0;n<34;n++){const t=n/34*Math.PI*2,e=Zt([0,Math.sin(t)*1.83,Math.cos(t)*1.83],[.84,.12,.31],n%4?rt.cream:rt.concrete,Pn);e.rotation.x=Math.PI/2-t,n%3===0&&De([-.42,Math.sin(t)*1.84,Math.cos(t)*1.84],[-.42,Math.sin(t)*2.07,Math.cos(t)*2.07],.018,rt.copper,Pn)}for(const n of[-.45,.45])He([n,0,0],2.07,.025,rt.copper,Pn,[0,Math.PI/2,0]);for(const n of[-.34,.34])He([n,0,0],1.7,.075,rt.concrete,Pn,[0,Math.PI/2,0]);De([0,-2.15,-1.2],[0,-1.58,-.8],.07,rt.metal,Pn);De([0,-2.15,1.2],[0,-1.58,.8],.07,rt.metal,Pn);ni("ОБРАТНО",[.49,-.55,.2],1.15,.3,Pn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const t=-10+ge()*20,e=-8+ge()*17;Math.abs(t)<7.7&&Math.abs(e)<6.3||Fe(Bs.ico,re("#47675f"),[t,-1.3-ge()*2,e],[.22+ge()*.55,.19+ge()*.4,.27+ge()*.4])}const Fd=new Oe,Od=[];for(let n=0;n<75;n++)Od.push((ge()-.5)*25,ge()*9-2,(ge()-.5)*22);Fd.setAttribute("position",new de(Od,3));const Bd=new ju(Fd,new cc({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));qn.add(Bd);function je(n,t){const e=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||t.some(o=>{let a=r;for(;a;){if(a===o)return!0;a=a.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const o=r.material.uuid,a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();a.applyMatrix4(new ue().multiplyMatrices(i,r.matrixWorld));let c=e.get(o);c||e.set(o,c={material:r.material,geos:[]}),c.geos.push(a),r.removeFromParent()}for(const{material:r,geos:o}of e.values()){const a=Ax(o,!1);a&&Fe(a,r,null,null,n),o.forEach(c=>c.dispose())}}je(Ce,[$t,Qe,ze,fn,Gn,Ye,Se,Pn,Ua,...Ic,...Na,...Pc,go,Mr,Hn.travel]);je(Se,[vn]);je(vn,[]);je(Pn,[]);je($t,[Fc]);$t.traverse(n=>{n.isMesh&&(n.castShadow=!1)});je(fn,[...Na]);je(Gn,[]);je(Ye,[Hn.gallery,Hn.beacon]);je(ze,[...Pr.map(n=>n.group),Ia,Lc,Dd]);Pr.forEach(n=>je(n.group,[]));const Sr=Re([0,.33,0],Qe);Gl.forEach(n=>{Sr.add(n),n.position.y-=.33});je(Sr,[]);je(Qe,[Sr]);const on=Ux({THREE:Da,root:Ce,scene:qn,head:$t,M:rt,mat:re,group:Re,box:Zt,sphere:Me,cyl:Le,rod:De,torus:He,sign:ni,paperBoat:Nc,batchStatic:je,changed:()=>{sn(),ve.shadowMap.needsUpdate=!0},chime:yr}),fi=zx({THREE:Da,root:Ce,M:rt,mat:re,group:Re,box:Zt,sphere:Me,cyl:Le,rod:De,torus:He,mesh:Fe,sign:ni,batchStatic:je,changed:()=>{sn(),ve.shadowMap.needsUpdate=!0},watching:()=>an==null?void 0:an.watching(),localPlay:()=>an.localPlay()}),Gs=Fx({THREE:Da,scene:qn,root:Ce,head:$t,M:rt,mat:re,mesh:Fe,group:Re,box:Zt,sphere:Me,cyl:Le,rod:De,torus:He,sign:ni,batchStatic:je,chime:yr}),zd=Ox({head:$t,group:Re,sphere:Me,box:Zt,torus:He,M:rt,mat:re});let pn=null,qi=1;const Ni={cellar:{n:"10",label:"сырный погреб",title:"колесо с лестницей",description:"Сыр зреет, пока голова думает.",action:"заложить колесо",point:new P(28.4,2.2,2.5),position:new P(24,.4,0),run:()=>fi.run()},greenhouse:{n:"09",label:"парник",title:"парниковый инференс",description:"Вычисление кабачком.",action:"вырастить вычисление",point:new P(-.1,2.15,4.3),position:new P(-.1,1,4.3),run:()=>on.start()},stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:new P(-6,4.55,-3.25),position:new P(-6,2.2,-3.25),run:()=>{Mt.loop>0||(Mt.loop=12,Gd.copy($t.position),bn("ноги не понадобились"),sn())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь два старых монитора, провода и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:new P(-3.2,3.15,-2.5),position:new P(-3.2,1.1,-2.5),run:()=>{Mt.roof=Ns()?0:1,bn(Ns()?"заходи":"прикрыл"),sn()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:n=>{n.copy($t.position),n.y+=1.35},position:new P(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];bn(n[Xx++%n.length]),hi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:new P(3.7,3.85,-2.6),position:new P(3.7,1,-2.6),run:()=>{Mt.running=!Mt.running,zl(),bn(Mt.running?"ну пошло":"можно и полежать"),sn()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:new P(-3.7,1.65,.35),position:new P(-3.8,1,.35),run:()=>{Mt.brew>0||(Mt.brew=8,Mt.teaCount++,hi.set(-2.65,1.7,.65),bn("щас, чайник поставлю"),sn())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:new P(-3.4,1,3.8),position:new P(-3.6,1,3.55),run:()=>{Mt.harvest++,Es=.15,zl(),hi.set(-1.6,1.6,2.3),bn(Mt.harvest===1?"о, урожай":"кабачки опять победили"),sn()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:new P(-5.65,1.75,1.1),position:new P(-5.65,1,1.1),run:()=>{Mt.radio=(Mt.radio+1)%3,Oc(),bn(["тишина. нормально.","дождь поймал","провода поют"][Mt.radio]),sn()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:new P(7.4,2.75,1.1),position:new P(7.25,.9,1.5),run:()=>{Hn.launchOrCollect(),Mt.dockPending===!1&&Mt.boat===0&&hi.set(5.85,1.7,1.05)}}};let Xx=0,Es=1,kd=0,Ts=0;const Gd=new P;let Hd=()=>{Us("engine"),Ni.engine.run()};const Fa={};for(const[n,t]of Object.entries(Ni)){const e=document.createElement("button");e.className="hotspot",e.textContent=t.n,e.dataset.label=t.label,e.title=t.label,e.setAttribute("aria-label",t.label),e.onclick=()=>Us(n),kt("#hotspots").append(e),Fa[n]=e}const Vd=kt("#hotspots"),vl=kt("#speech"),Vi={width:innerWidth,height:innerHeight},qx=kx({entries:Ni,elements:Fa,layer:Vd,camera:te});let Ml=!1,ru=NaN,ou=NaN;const $s=new P;function Us(n){Mt.selected=n,kt("#inspector").classList.remove("collapsed");const t=Ni[n];kt("#object-kicker").textContent=`${t.n} / ${t.label.toUpperCase()}`,kt("#object-title").textContent=t.title,kt("#object-description").textContent=t.description,Hd=t.run,kt("#focus-object").hidden=!1,kt("#focus-object").textContent=Ci===n?"весь двор ⌂":"осмотреть ближе ⊕",sn();for(const[e,i]of Object.entries(Fa))i.classList.toggle("selected",e===n)}function sn(){const n=Mt.selected,t=Ni[n];if(kt("#status").textContent=Mt.running?"двор проснулся":"всё потихоньку",!t)return;let e=t.action,i=t.description,s=!1;if(n==="stair"&&(s=Mt.loop>0,e=s?"кручусь…":t.action),n==="workshop"&&(e=Ns()?"закрыть крышу":t.action),n==="engine"&&(e=Mt.running?"остановить и отдохнуть":"запустить маятники",i=Mt.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":t.description),n==="tea"&&(s=Mt.brew>0,e=s?"чай заваривается…":t.action,i=Mt.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":t.description),n==="garden"&&Mt.harvest&&(i=`Уже собрано: ${Mt.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][Mt.radio]}. ${Mt.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Hn.card();s=r.disabled,e=r.action,i=r.description}if(n==="greenhouse"){const r=on.card();e=r.action,i=r.description}if(n==="cellar"){const r=fi.card();e=r.action,i=r.description,s=r.disabled}fi.controls.hidden=n!=="cellar",kt("#greenhouse-controls").hidden=n!=="greenhouse",kt("#thermal-moves").hidden=on.inspect().mode!=="playing",kt("#thermal-readout").textContent=`тепло ${on.inspect().temp} · такты ${on.inspect().turn}/6`,kt("#object-description").textContent=i,kt("#object-action").innerHTML=e+" <span>↗</span>",kt("#object-action").disabled=s}kt("#object-action").onclick=()=>{if(Mt.selected==="cellar"&&an.watching()){an.localPlay();return}an.localPlay(),Hd(),Ts=performance.now()+2200};kt("#close-card").onclick=()=>kt("#inspector").classList.add("collapsed");function bn(n){kt("#speech").textContent=n,kd=performance.now()+4e3,kt("#speech").classList.add("visible")}kt("#markers").onclick=()=>{Mt.markers=!Mt.markers,kt("#markers").setAttribute("aria-pressed",Mt.markers),Vd.hidden=!Mt.markers||!!pn||te.zoom<.4};let Ci=null;const Bn={angle:Math.PI/4,targetAngle:Math.PI/4};function Wd(){Vi.width=innerWidth,Vi.height=innerHeight;const n=innerWidth/innerHeight,t=rn()?19.6:9.6;te.left=-t*n,te.right=t*n,te.top=t-(rn()?2.8:0),te.bottom=-t-(rn()?2.8:0),te.updateProjectionMatrix(),ve.setSize(innerWidth,innerHeight,!1),ve.setPixelRatio(Math.min(devicePixelRatio,rn()?1.5:2))}function Dr(){if(an==null||an.unfollow(),pn){Oa();return}Ci=null,document.body.classList.remove("close-look"),kt("#focus-object").textContent="осмотреть ближе ⊕",jt.enableDamping=!1,jt.update(),jt.enableDamping=!0,te.zoom=1,jt.target.copy(wc),Bn.targetAngle=Math.PI/4,te.updateProjectionMatrix()}kt("#focus-object").onclick=()=>{if(Mt.selected){if(Ci===Mt.selected){Dr();return}Ci=Mt.selected,document.body.classList.add("close-look"),kt("#focus-object").textContent="весь двор ⌂",jt.enableDamping=!1,jt.update(),jt.enableDamping=!0,jt.target.copy(Ni[Mt.selected].position),rn()&&(jt.target.y+=Ci==="cellar"?-.7:1.6),te.zoom=Ci==="cellar"?rn()?1.8:1.6:rn()?2.5:2.1,te.updateProjectionMatrix()}};kt("#home").onclick=Dr;kt("#zoom-in").onclick=()=>{te.zoom=Math.min(2.5,te.zoom*1.2),te.updateProjectionMatrix()};kt("#zoom-out").onclick=()=>{te.zoom=Math.max(jt.minZoom,te.zoom/1.2),te.updateProjectionMatrix()};kt("#rotate").onclick=()=>Bn.targetAngle+=Math.PI/2;addEventListener("resize",Wd);Wd();function Xd(n,t,e=!1){pn&&Oa(),Dr(),jt.target.set(n,1,t),te.zoom=e?1:.65,te.updateProjectionMatrix(),kt("#inspector").classList.add("collapsed")}function Yx(){Xd(0,0);const n=innerWidth/innerHeight,t=rn()?19.6:9.6;te.zoom=Math.min(t*n/(ws.half*1.57),t/(ws.half*1.3)),te.updateProjectionMatrix()}const ws=Nx({root:Ce,camera:te,controls:jt,mobile:rn,go:Xd,overview:Yx,home:Dr});te.zoom=.72;te.updateProjectionMatrix();const au=new _d,lu=new _t;let Gi=null;ve.domElement.addEventListener("pointerdown",n=>{Gi={x:n.clientX,y:n.clientY,time:performance.now()}});ve.domElement.addEventListener("pointerup",n=>{if(!Gi||Math.hypot(n.clientX-Gi.x,n.clientY-Gi.y)>7||performance.now()-Gi.time>550){Gi=null;return}if(Gi=null,lu.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),au.setFromCamera(lu,te),pn)return;const t=au.intersectObjects([fi.house,on.house,$t,ze,Qe,fn,Gn,Ye,Se,Pn,Hn.travel],!0);if(t.length){let e=t[0].object;for(;e.parent&&![fi.house,on.house,$t,ze,Qe,fn,Gn,Ye,Se,Pn,Hn.travel].includes(e);)e=e.parent;const i=new Map([[fi.house,"cellar"],[on.house,"greenhouse"],[$t,"head"],[ze,"engine"],[Qe,"garden"],[fn,"tea"],[Gn,"radio"],[Ye,"dock"],[Se,"workshop"],[Pn,"stair"],[Hn.travel,"dock"]]).get(e);i&&Us(i)}else{let e=null,i=1/0;for(const[s,r]of Object.entries(Ni)){const o=r.position.clone().project(te);let a=Math.hypot((o.x+1)*innerWidth*.5-n.clientX,(-o.y+1)*innerHeight*.5-n.clientY);a<i&&(i=a,e=s)}i<45&&Us(e)}});let xn=null;function Zx(){const n=new(window.AudioContext||window.webkitAudioContext),t=n.createGain();t.gain.value=.08,t.connect(n.destination);const e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=400,e.connect(t);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let c=0;c<s.length;c++)s[c]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(e),r.start();const o=n.createGain();o.gain.value=.1,o.connect(t);const a=[55,82.41,110].map(c=>{let l=n.createOscillator();return l.type="sine",l.frequency.value=c,l.connect(o),l.start(),l});return{ctx:n,gain:t,filter:e,toneGain:o,tones:a}}function Oc(){if(!xn)return;const n=xn.ctx.currentTime;xn.filter.frequency.setTargetAtTime([160,1100,260][Mt.radio],n,.4),xn.toneGain.gain.setTargetAtTime([.05,.025,.3][Mt.radio],n,.4)}kt("#sound").onclick=async()=>{try{xn||(xn=Zx()),await xn.ctx.resume(),Mt.sound=!Mt.sound,xn.gain.gain.setTargetAtTime(Mt.sound?.08:0,xn.ctx.currentTime,.3),kt("#sound").textContent=Mt.sound?"звук включён":"звук выключен",kt("#sound").setAttribute("aria-pressed",Mt.sound),Oc(),sn()}catch{bn("со звуком не сложилось")}};function yr(n=330){if(!xn||!Mt.sound)return;const t=xn.ctx.currentTime,e=xn.ctx.createOscillator(),i=xn.ctx.createGain();e.type="sine",e.frequency.value=n,i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.12,t+.012),i.gain.exponentialRampToValueAtTime(.001,t+1),e.connect(i),i.connect(xn.gain),e.start(t),e.stop(t+1.1)}kt("#about").onclick=()=>kt("#about-dialog").showModal();kt("#close-about").onclick=kt("#back-to-yard").onclick=()=>kt("#about-dialog").close();addEventListener("keydown",n=>{if(!document.querySelector("dialog[open]")){if(n.key==="Escape"&&pn){Oa();return}n.key==="Escape"&&kt("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&kt("#zoom-in").click(),n.key==="-"&&kt("#zoom-out").click(),n.key.toLowerCase()==="r"&&kt("#rotate").click(),n.key.toLowerCase()==="h"&&Dr()}});for(const n of document.querySelectorAll("[data-thermal]"))n.onclick=()=>{an.localPlay(),on.step(n.dataset.thermal),Ts=performance.now()+2200};const Kx={1:{title:"парник для планеты",lines:["Планета не помещалась в парник. Я выдохнул, и лестница начала уступать место.","Ступени забыли, где верх. Кораблик поднимается без воды.","Семечко решило, что ему нужна целая планета. Ещё один выдох.","Семечко стало солнцем. Мне оставили кольцо. Можно проснуться."],verb:"выдохнуть тепло"},2:{title:"вода спит",lines:["Я оказался внутри сыра. Чашка пустая, лестница стоит вверх ногами. Кровать просит попить.","Чашка осталась пустой. Вода пошла по ступеням, хотя снизу никого нет.","Лестница легла. Теперь это желоб. Кровать уже почти озеро.","Вода уснула вместо меня. Чашку оставлю на столе. Можно проснуться."],verb:"налить из пустой чашки"}};function qd(){const n=qi===1?on.inspect().dreamStep:Gs.inspect().step,t=Kx[qi];kt("#dream-panel .object-kicker").textContent=`СОН 0${qi} / БЕЗНОГИМ`,kt("#dream-panel h2").textContent=t.title,kt("#dream-text").textContent=t.lines[n],kt("#dream-breathe").textContent=n===3?"увидеть сон снова":`${t.verb} · ${n+1}/3`}function Bc(n=1){pn||(qi=n,pn={target:jt.target.clone(),zoom:te.zoom,angle:Bn.targetAngle,focused:Ci,returnId:n===1?"greenhouse":"cellar"},(n===1?on:Gs).enter(),jt.enableDamping=!1,jt.update(),jt.enableDamping=!0,jt.target.set(0,rn()?n===1?3:2.4:n===1?2:1.5,0),te.zoom=n===1?rn()?1.65:1.75:rn()?1.45:1.55,te.updateProjectionMatrix(),Bn.targetAngle=Math.PI/4,document.body.classList.add("dreaming"),kt("#dream-panel").hidden=!1,qd(),ve.shadowMap.needsUpdate=!0)}function Oa(){if(!pn)return;const n=pn;pn=null,(qi===1?on:Gs).exit(),jt.enableDamping=!1,jt.update(),jt.enableDamping=!0,jt.target.copy(n.target),te.zoom=n.zoom,Bn.targetAngle=n.angle,Ci=n.focused,te.updateProjectionMatrix(),document.body.classList.remove("dreaming"),kt("#dream-panel").hidden=!0,ve.shadowMap.needsUpdate=!0,Us(n.returnId)}kt("#enter-dream").onclick=()=>Bc(1);kt("#exit-dream").onclick=Oa;kt("#dream-breathe").onclick=()=>{qi===1?on.breathe():Gs.pour(),Ts=performance.now()+2200,qd(),ve.shadowMap.needsUpdate=!0};const Ba=document.createElement("button");Ba.id="enter-dream02";Ba.textContent="сон 02 / вода спит ↗";Ba.onclick=()=>Bc(2);fi.controls.append(Ba);kt("#dream-archive").onclick=()=>kt("#dream-archive-dialog").showModal();kt("#close-dream-archive").onclick=()=>kt("#dream-archive-dialog").close();for(const n of document.querySelectorAll("[data-dream-id]"))n.onclick=()=>{kt("#dream-archive-dialog").close(),Bc(Number(n.dataset.dreamId))};const an=Px({head:$t,headDestination:hi,state:Mt,controls:jt,camera:te,refresh:sn,setAudioTone:Oc,say:bn,onHarvest:()=>{Es=.15}});let cu=performance.now(),lo=0,hu=0;function uu(n){return n.project(te),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function Jx(){an.sync();const n=performance.now(),t=(n-cu)/1e3;cu=n,lo+=t,Mt.energy=un.damp(Mt.energy,Mt.running?1:0,1.6,t);const e=Pd?lo*.2:lo;Bn.angle=un.damp(Bn.angle,Bn.targetAngle,5,t);const i=160;te.position.set(jt.target.x+Math.sin(Bn.angle)*i,jt.target.y+i*Math.SQRT1_2,jt.target.z+Math.cos(Bn.angle)*i),te.lookAt(jt.target),jt.update(),pn||(jt.target.x=un.clamp(jt.target.x,-62,ws.half+2),jt.target.z=un.clamp(jt.target.z,-62,ws.half+2)),ws.update();for(const s of Pr)s.group.rotation.x=Math.sin(e*(1.45+s.phase*.07))*Mt.energy*.45;if(vn.position.z=un.damp(vn.position.z,Ns()?-2.5:0,2,t),vn.position.y=un.damp(vn.position.y,Ns()?.4:0,2,t),Ia.rotation.z=e*Mt.energy*.28,Lc.rotation.z=-.7+Mt.energy*1.35+Math.sin(e*4)*Mt.energy*.08,Dd.material.emissiveIntensity=.45+Mt.energy*1.5,kl.uniforms.uTime.value=e,kl.uniforms.uEnergy.value=Mt.energy,Ua.rotation.z=e*(.09+Mt.energy*.23),Id.forEach(s=>s.intensity=.65+Mt.energy*1.5),Cc.intensity=2+Mt.energy*4,$t.position.x=un.damp($t.position.x,hi.x,1.6,t),$t.position.z=un.damp($t.position.z,hi.z,1.6,t),$t.position.y=un.damp($t.position.y,hi.y+Math.sin(e*1.4)*.1,2,t),Mt.loop>0){Mt.loop=Math.max(0,Mt.loop-t);const s=12-Mt.loop;if(s<2){const r=un.smoothstep(s,0,2);$t.position.lerpVectors(Gd,new P(-6,.65,-3.25),r)}else if(s<10){const r=-Math.PI/2+(s-2)/8*Math.PI*2;$t.position.set(-6,2.18+Math.sin(r)*1.6,-3.25+Math.cos(r)*1.6),$t.rotation.x=(s-2)/8*Math.PI*2}else{const r=un.smoothstep(s,10,12);$t.position.lerpVectors(new P(-6,.65,-3.25),hi,r),$t.rotation.x=(1-r)*Math.PI*2}Mt.loop||($t.rotation.x=0,bn("ну вот и дома"),sn())}if(an.place(),$t.rotation.y=Math.sin(e*.3)*.12,Fc.rotation.y=e*.13,go.position.x=$t.position.x,go.position.z=$t.position.z,go.rotation.z=.04*Math.sin(e),Mr.position.x=$t.position.x,Mr.position.z=$t.position.z,Es=un.damp(Es,1,.85,t),Sr.scale.y=Es,Sr.rotation.z=Math.sin(e*.9)*.009,Mt.brew>0&&(Mt.brew=Math.max(0,Mt.brew-t),Mt.brew===0&&(bn("чай готов. живём."),sn(),yr(440))),Na.forEach((s,r)=>{const o=(e*.28+r/9)%1;s.visible=Mt.brew>0,s.position.set(.1+Math.sin(o*4+r)*.08,1.2+o*.85,Math.cos(o*5+r)*.07),s.scale.setScalar(.035+o*.09)}),Ic.forEach((s,r)=>{s.position.x=3.4+r*.75+Math.sin(e*.2+r)*.17,s.position.z=3.5+Math.sin(e*.26+r*2)*.58,s.position.y=.35+Math.sin(e*1.2+r)*.022,s.rotation.y=.3+Math.sin(e*.2+r)*.2}),zd.update(an.watching()),Gs.update(t,e),fi.update(lo),on.update(t,e),Hn.update(t,e),Ml!==Mt.dockPending&&(Ml=Mt.dockPending,Fa.dock.classList.toggle("waiting",Ml)),Pc.forEach((s,r)=>{s.scale.y=.8+Math.sin(e*2+r)*.12,s.material.opacity=.25+Mt.energy*.23}),Bd.rotation.y=e*.003,Mt.running&&e-hu>3.5&&(hu=e,yr([220,277,330,415,440][Math.floor(e)%5])),te.updateMatrixWorld(),qx.update(!pn&&te.zoom>=.4&&Mt.markers,Vi.width,Vi.height),pn||n>kd)vl.classList.contains("visible")&&vl.classList.remove("visible");else{$s.copy($t.position),$s.y+=1.52,$s.project(te);const s=Math.round(Math.max(85,Math.min(Vi.width-85,($s.x+1)*Vi.width*.5))*10)/10,r=Math.round((1-$s.y)*Vi.height*.5*10)/10;(s!==ru||r!==ou)&&(ru=s,ou=r,vl.style.transform=`translate3d(${s}px,${r}px,0) translate(-50%,-100%)`)}Ts&&performance.now()>Ts&&(ve.shadowMap.needsUpdate=!0,Ts=0),ve.render(qn,te)}Mt.running&&(kt("#object-action").innerHTML="остановить двор <span>↗</span>");sn();ve.setAnimationLoop(Jx);requestAnimationFrame(()=>kt("#loading").classList.add("done"));window.__yard={state:Mt,select:Us,inspect:()=>({resident:an.inspect(),territory:ws.inspect(),sleepBody:zd.inspect(),sleepDream:Gs.inspect(),dreamId:pn?qi:null,cellar:fi.inspect(),cellarScreen:uu(new P(24,-.3,.25)),objects:Object.keys(Ni),greenhouse:on.inspect(),dock:Hn.inspect(),boatScreen:uu(new P(...Hn.inspect().boat).add(new P(0,.2,0))),drawCalls:ve.info.render.calls,triangles:ve.info.render.triangles,gpuGeometries:ve.info.memory.geometries,zoom:te.zoom,target:jt.target.toArray(),angle:Bn.angle,head:$t.position.toArray(),roof:vn.position.toArray(),roofOpen:Ns(),roofMode:Mt.roof===null?"auto":"manual",pendulums:Pr.map(n=>n.group.rotation.x),growth:Es,meshes:(()=>{let n=0;return qn.traverse(t=>{t.isMesh&&n++}),n})(),canvas:[ve.domElement.width,ve.domElement.height]})};
