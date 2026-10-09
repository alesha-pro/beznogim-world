(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="186",ii={ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uh=0,$o=1,Nh=2,ls=1,Fh=2,as=3,Si=0,en=1,xn=2,qn=0,cs=1,Qo=2,jo=3,tl=4,Oh=5,Ii=100,Bh=101,zh=102,kh=103,Gh=104,Hh=200,Vh=201,Wh=202,Xh=203,xl=204,vl=205,Yh=206,qh=207,Zh=208,Kh=209,Jh=210,$h=211,Qh=212,jh=213,tu=214,Zr=0,Kr=1,Jr=2,us=3,$r=4,Qr=5,jr=6,ta=7,Ml=0,eu=1,nu=2,Dn=0,Sl=1,yl=2,El=3,Ga=4,bl=5,Tl=6,Al=7,wl=300,yi=301,Oi=302,kr=303,Gr=304,ir=306,Ws=1e3,Yn=1001,ea=1002,ze=1003,iu=1004,Ls=1005,We=1006,Hr=1007,xi=1008,rn=1009,Rl=1010,Cl=1011,fs=1012,Ha=1013,Fn=1014,Pn=1015,On=1016,Va=1017,Wa=1018,ds=1020,Pl=35902,Ll=35899,Dl=1021,Il=1022,Mn=1023,Zn=1026,vi=1027,Ul=1028,Xa=1029,Ei=1030,Ya=1031,qa=1033,Ns=33776,Fs=33777,Os=33778,Bs=33779,na=35840,ia=35841,sa=35842,ra=35843,aa=36196,oa=37492,la=37496,ca=37488,ha=37489,Xs=37490,ua=37491,fa=37808,da=37809,pa=37810,ma=37811,ga=37812,_a=37813,xa=37814,va=37815,Ma=37816,Sa=37817,ya=37818,Ea=37819,ba=37820,Ta=37821,Aa=36492,wa=36494,Ra=36495,Ca=36283,Pa=36284,Ys=36285,La=36286,su=3200,Da=0,ru=1,ti="",Je="srgb",qs="srgb-linear",Zs="linear",fe="srgb",Vr=7680,au=519,ou=512,lu=513,cu=514,Za=515,hu=516,uu=517,Ka=518,fu=519,du=35044,el="300 es",Ln=2e3,ps=2001;function yf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pu(){const n=Ia("canvas");return n.style.display="block",n}const Rc={};function nl(...n){const t="THREE."+n.shift();console.log(t,...n)}function mu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ht(...n){n=mu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function re(...n){n=mu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fi(...n){const t=n.join(" ");t in Rc||(Rc[t]=!0,Ht(...n))}function Ef(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const bf={[Zr]:Kr,[Jr]:jr,[$r]:ta,[us]:Qr,[Kr]:Zr,[jr]:Jr,[ta]:$r,[Qr]:us};class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const zs=Math.PI/180,Ks=180/Math.PI;function zi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function Qt(n,t,e){return Math.max(t,Math.min(e,n))}function Nl(n,t){return(n%t+t)%t}function Tf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Af(n,t,e){return n!==t?(e-n)/(t-n):0}function ks(n,t,e){return(1-e)*n+e*t}function wf(n,t,e,i){return ks(n,t,1-Math.exp(-e*i))}function Rf(n,t=1){return t-Math.abs(Nl(n,t*2)-t)}function Cf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Pf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Lf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Df(n,t){return n+Math.random()*(t-n)}function If(n){return n*(.5-Math.random())}function Uf(n){n!==void 0&&(Cc=n);let t=Cc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(n){return n*zs}function Ff(n){return n*Ks}function Of(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Bf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kf(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),u=a((t-i)/2),d=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*x,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*x,o*c);break;case"ZYZ":n.set(l*x,l*d,o*h,o*c);break;default:Ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function rs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function je(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const gn={DEG2RAD:zs,RAD2DEG:Ks,generateUUID:zi,clamp:Qt,euclideanModulo:Nl,mapLinear:Tf,inverseLerp:Af,lerp:ks,damp:wf,pingpong:Rf,smoothstep:Cf,smootherstep:Pf,randInt:Lf,randFloat:Df,randFloatSpread:If,seededRandom:Uf,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:zf,setQuaternionFromProperEuler:kf,normalize:je,denormalize:rs},dc=class dc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};dc.prototype.isVector2=!0;let ot=dc;class ri{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],x=r[a+2],S=r[a+3];if(f!==S||l!==u||c!==d||h!==x){let m=l*u+c*d+h*x+f*S;m<0&&(u=-u,d=-d,x=-x,S=-S,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,l=l*p+u*o,c=c*p+d*o,h=h*p+x*o,f=f*p+S*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+x*o,f=f*p+S*o;const y=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=y,c*=y,h*=y,f*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*d-c*u,t[e+1]=l*x+h*u+c*f-o*d,t[e+2]=c*x+h*d+o*u-l*f,t[e+3]=h*x-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pc=class pc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pc.prototype.isVector3=!0;let C=pc;const xo=new C,Pc=new ri,mc=class mc{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],x=i[8],S=s[0],m=s[3],p=s[6],y=s[1],w=s[4],v=s[7],T=s[2],E=s[5],R=s[8];return r[0]=a*S+o*y+l*T,r[3]=a*m+o*w+l*E,r[6]=a*p+o*v+l*R,r[1]=c*S+h*y+f*T,r[4]=c*m+h*w+f*E,r[7]=c*p+h*v+f*R,r[2]=u*S+d*y+x*T,r[5]=u*m+d*w+x*E,r[8]=u*p+d*v+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=e*f+i*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=f*S,t[1]=(s*c-h*i)*S,t[2]=(o*i-s*a)*S,t[3]=u*S,t[4]=(h*e-s*l)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(i*l-c*e)*S,t[8]=(a*e-i*r)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vo.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vo.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mc.prototype.isMatrix3=!0;let Wt=mc;const vo=new Wt,Lc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){const n={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?Zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qs]:{primaries:t,whitePoint:i,transfer:Zs,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:fe,toXYZ:Lc,fromXYZ:Dc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}const ie=Gf();function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class gu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yi===void 0&&(Yi=Ia("canvas")),Yi.width=t.width,Yi.height=t.height;const s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ia("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(si(e[i]/255)*255):e[i]=si(e[i]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class Ja{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mo(s[a].image)):r.push(Mo(s[a]))}else r=Mo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Mo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}let Vf=0;const So=new C;class Xe extends oi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,i=Yn,s=Yn,r=We,a=xi,o=Mn,l=rn,c=Xe.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=zi(),this.name="",this.source=new Ja(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=wl;Xe.DEFAULT_ANISOTROPY=1;const gc=class gc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,v=(d+1)/2,T=(p+1)/2,E=(h+u)/4,R=(f+S)/4,_=(x+m)/4;return w>v&&w>T?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=E/i,r=R/i):v>T?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=_/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=_/r),this.set(i,s,r,e),this}let y=Math.sqrt((m-x)*(m-x)+(f-S)*(f-S)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(f-S)/y,this.z=(u-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gc.prototype.isVector4=!0;let be=gc;class _u extends oi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new Xe(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ja(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends _u{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fl extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xu extends Xe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const za=class za{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,x,S,m)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,x,S,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=x,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new za().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),r=1/qi.setFromMatrixColumn(t,1).length(),a=1/qi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=a*h,d=a*f,x=o*h,S=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+x*c,e[5]=u-S*c,e[9]=-o*l,e[2]=S-u*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,d=l*f,x=c*h,S=c*f;e[0]=u+S*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=S+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,d=l*f,x=c*h,S=c*f;e[0]=u-S*o,e[4]=-a*f,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=S-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,d=a*f,x=o*h,S=o*f;e[0]=l*h,e[4]=x*c-d,e[8]=u*c+S,e[1]=l*f,e[5]=S*c+u,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,d=a*c,x=o*l,S=o*c;e[0]=l*h,e[4]=S-u*f,e[8]=x*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+x,e[10]=u-S*f}else if(t.order==="XZY"){const u=a*l,d=a*c,x=o*l,S=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+S,e[5]=a*h,e[9]=d*f-x,e[2]=x*f-d,e[6]=o*h,e[10]=S*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wf,t,Xf)}lookAt(t,e,i){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),fi.crossVectors(i,on),fi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),fi.crossVectors(i,on)),fi.normalize(),pr.crossVectors(on,fi),s[0]=fi.x,s[4]=pr.x,s[8]=on.x,s[1]=fi.y,s[5]=pr.y,s[9]=on.y,s[2]=fi.z,s[6]=pr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],x=i[2],S=i[6],m=i[10],p=i[14],y=i[3],w=i[7],v=i[11],T=i[15],E=s[0],R=s[4],_=s[8],b=s[12],P=s[1],D=s[5],F=s[9],z=s[13],N=s[2],B=s[6],W=s[10],H=s[14],st=s[3],Y=s[7],Q=s[11],nt=s[15];return r[0]=a*E+o*P+l*N+c*st,r[4]=a*R+o*D+l*B+c*Y,r[8]=a*_+o*F+l*W+c*Q,r[12]=a*b+o*z+l*H+c*nt,r[1]=h*E+f*P+u*N+d*st,r[5]=h*R+f*D+u*B+d*Y,r[9]=h*_+f*F+u*W+d*Q,r[13]=h*b+f*z+u*H+d*nt,r[2]=x*E+S*P+m*N+p*st,r[6]=x*R+S*D+m*B+p*Y,r[10]=x*_+S*F+m*W+p*Q,r[14]=x*b+S*z+m*H+p*nt,r[3]=y*E+w*P+v*N+T*st,r[7]=y*R+w*D+v*B+T*Y,r[11]=y*_+w*F+v*W+T*Q,r[15]=y*b+w*z+v*H+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],x=t[3],S=t[7],m=t[11],p=t[15],y=l*d-c*u,w=o*d-c*f,v=o*u-l*f,T=a*d-c*h,E=a*u-l*h,R=a*f-o*h;return e*(S*y-m*w+p*v)-i*(x*y-m*T+p*E)+s*(x*w-S*T+p*R)-r*(x*v-S*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],x=t[12],S=t[13],m=t[14],p=t[15],y=e*o-i*a,w=e*l-s*a,v=e*c-r*a,T=i*l-s*o,E=i*c-r*o,R=s*c-r*l,_=h*S-f*x,b=h*m-u*x,P=h*p-d*x,D=f*m-u*S,F=f*p-d*S,z=u*p-d*m,N=y*z-w*F+v*D+T*P-E*b+R*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=(o*z-l*F+c*D)*B,t[1]=(s*F-i*z-r*D)*B,t[2]=(S*R-m*E+p*T)*B,t[3]=(u*E-f*R-d*T)*B,t[4]=(l*P-a*z-c*b)*B,t[5]=(e*z-s*P+r*b)*B,t[6]=(m*v-x*R-p*w)*B,t[7]=(h*R-u*v+d*w)*B,t[8]=(a*F-o*P+c*_)*B,t[9]=(i*P-e*F-r*_)*B,t[10]=(x*E-S*v+p*y)*B,t[11]=(f*v-h*E-d*y)*B,t[12]=(o*b-a*D-l*_)*B,t[13]=(e*D-i*b+s*_)*B,t[14]=(S*w-x*T-m*y)*B,t[15]=(h*T-f*w+u*y)*B,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,S=a*h,m=a*f,p=o*f,y=l*c,w=l*h,v=l*f,T=i.x,E=i.y,R=i.z;return s[0]=(1-(S+p))*T,s[1]=(d+v)*T,s[2]=(x-w)*T,s[3]=0,s[4]=(d-v)*E,s[5]=(1-(u+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(x+w)*R,s[9]=(m-y)*R,s[10]=(1-(u+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),l=qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);const c=1/a,h=1/o,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=h,Tn.elements[5]*=h,Tn.elements[6]*=h,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,e.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Ln,l=!1){const c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s);let x,S;if(l)x=r/(a-r),S=a*r/(a-r);else if(o===Ln)x=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===ps)x=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Ln,l=!1){const c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s);let x,S;if(l)x=1/(a-r),S=a/(a-r);else if(o===Ln)x=-2/(a-r),S=-(a+r)/(a-r);else if(o===ps)x=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};za.prototype.isMatrix4=!0;let xe=za;const qi=new C,Tn=new xe,Wf=new C(0,0,0),Xf=new C(1,1,1),fi=new C,pr=new C,on=new C,Ic=new xe,Uc=new ri;class ai{constructor(t=0,e=0,i=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ic.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ic,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class $a{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yf=0;const Nc=new C,Zi=new ri,Kn=new xe,mr=new C,bs=new C,qf=new C,Zf=new ri,Fc=new C(1,0,0),Oc=new C(0,1,0),Bc=new C(0,0,1),zc={type:"added"},Kf={type:"removed"},Ki={type:"childadded",child:null},yo={type:"childremoved",child:null};class Ue extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new C,e=new ai,i=new ri,s=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Wt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Fc,t)}rotateY(t){return this.rotateOnAxis(Oc,t)}rotateZ(t){return this.rotateOnAxis(Bc,t)}translateOnAxis(t,e){return Nc.copy(t).applyQuaternion(this.quaternion),this.position.add(Nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fc,t)}translateY(t){return this.translateOnAxis(Oc,t)}translateZ(t){return this.translateOnAxis(Bc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mr.copy(t):mr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(bs,mr,this.up):Kn.lookAt(mr,bs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Kn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kf),yo.child=t,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,qf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ue.DEFAULT_UP=new C(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ui extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jf={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,i),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ui;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const vu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Eo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class te{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Nl(t,1),e=Qt(e,0,1),i=Qt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Eo(a,r,t+1/3),this.g=Eo(a,r,t),this.b=Eo(a,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=vu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ie.workingToColorSpace(Ke.copy(this),t),Math.round(Qt(Ke.r*255,0,255))*65536+Math.round(Qt(Ke.g*255,0,255))*256+Math.round(Qt(Ke.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Je){ie.workingToColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(gr);const i=ks(di.h,gr.h,e),s=ks(di.s,gr.s,e),r=ks(di.l,gr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new te;te.NAMES=vu;class Qa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new Qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Mu extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const An=new C,Jn=new C,bo=new C,$n=new C,Ji=new C,$i=new C,kc=new C,To=new C,Ao=new C,wo=new C,Ro=new be,Co=new be,Po=new be;class vn{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){An.subVectors(s,e),Jn.subVectors(i,e),bo.subVectors(t,e);const a=An.dot(An),o=An.dot(Jn),l=An.dot(bo),c=Jn.dot(Jn),h=Jn.dot(bo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,i),Po.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(t,e,i,s){return An.subVectors(i,e),Jn.subVectors(t,e),An.cross(Jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),An.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Ji.subVectors(s,i),$i.subVectors(r,i),To.subVectors(t,i);const l=Ji.dot(To),c=$i.dot(To);if(l<=0&&c<=0)return e.copy(i);Ao.subVectors(t,s);const h=Ji.dot(Ao),f=$i.dot(Ao);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Ji,a);wo.subVectors(t,r);const d=Ji.dot(wo),x=$i.dot(wo);if(x>=0&&d<=x)return e.copy(r);const S=d*c-l*x;if(S<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector($i,o);const m=h*x-d*f;if(m<=0&&f-h>=0&&d-x>=0)return kc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),e.copy(s).addScaledVector(kc,o);const p=1/(m+S+u);return a=S*p,o=u*p,e.copy(i).addScaledVector(Ji,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class xs{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_r.copy(i.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),xr.subVectors(this.max,Ts),Qi.subVectors(t.a,Ts),ji.subVectors(t.b,Ts),ts.subVectors(t.c,Ts),pi.subVectors(ji,Qi),mi.subVectors(ts,ji),wi.subVectors(Qi,ts);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-wi.z,wi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,wi.z,0,-wi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-wi.y,wi.x,0];return!Lo(e,Qi,ji,ts,xr)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,Qi,ji,ts,xr))?!1:(vr.crossVectors(pi,mi),e=[vr.x,vr.y,vr.z],Lo(e,Qi,ji,ts,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qn=[new C,new C,new C,new C,new C,new C,new C,new C],wn=new C,_r=new xs,Qi=new C,ji=new C,ts=new C,pi=new C,mi=new C,wi=new C,Ts=new C,xr=new C,vr=new C,Ri=new C;function Lo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ri.fromArray(n,r);const o=s.x*Math.abs(Ri.x)+s.y*Math.abs(Ri.y)+s.z*Math.abs(Ri.z),l=t.dot(Ri),c=e.dot(Ri),h=i.dot(Ri);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Pe=new C,Mr=new ot;let $f=0;class In extends oi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$f++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=je(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=je(e,this.array),i=je(i,this.array),s=je(s,this.array),r=je(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ol extends In{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Bl extends In{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class le extends In{constructor(t,e,i){super(new Float32Array(t),e,i)}}const Qf=new xs,As=new C,Do=new C;class sr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Qf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);const e=As.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(Do)),this.expandByPoint(As.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let jf=0;const pn=new xe,Io=new Ue,es=new C,ln=new xs,ws=new xs,Be=new C;class Le extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yf(t)?Bl:Ol)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Wt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new le(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(ln.min,ws.min),ln.expandByPoint(Be),Be.addVectors(ln.max,ws.max),ln.expandByPoint(Be)):(ln.expandByPoint(ws.min),ln.expandByPoint(ws.max))}ln.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Be.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(t,c),Be.add(es)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new In(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new C,l[_]=new C;const c=new C,h=new C,f=new C,u=new ot,d=new ot,x=new ot,S=new C,m=new C;function p(_,b,P){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,P),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,b),x.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),x.sub(u);const D=1/(d.x*x.y-x.x*d.y);isFinite(D)&&(S.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(D),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(D),o[_].add(S),o[b].add(S),o[P].add(S),l[_].add(m),l[b].add(m),l[P].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,b=y.length;_<b;++_){const P=y[_],D=P.start,F=P.count;for(let z=D,N=D+F;z<N;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new C,v=new C,T=new C,E=new C;function R(_){T.fromBufferAttribute(s,_),E.copy(T);const b=o[_];w.copy(b),w.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,D)}for(let _=0,b=y.length;_<b;++_){const P=y[_],D=P.start,F=P.count;for(let z=D,N=D+F;z<N;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){const x=t.getX(u+0),S=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h);let d=0,x=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?d=l[S]*o.data.stride+o.offset:d=l[S]*h;for(let p=0;p<h;p++)u[x++]=c[d++]}return new In(u,h,f)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){const u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new C,td=new C,ed=new Wt;class Xn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Uo.subVectors(i,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Uo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ed.getNormalMatrix(t),s=this.coplanarPoint(Uo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let nd=0;class ki extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=cs,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Xn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ot().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const jn=new C,No=new C,Sr=new C,yr=new C;class rr{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){No.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),yr.copy(this.origin).sub(No);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Sr),o=yr.dot(this.direction),l=-yr.dot(Sr),c=yr.lengthSq(),h=Math.abs(1-a*a);let f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){const S=1/h;f*=S,u*=S,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(No).addScaledVector(Sr,u),d}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);const i=jn.dot(this.direction),s=jn.dot(jn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,x=e.x-a.x,S=e.y-a.y,m=e.z-a.z,p=i.x-a.x,y=i.y-a.y,w=i.z-a.z,v=Math.abs(l),T=Math.abs(c),E=Math.abs(h);let R,_,b,P,D,F,z,N,B,W,H,st;if(v>=T&&v>=E?(b=l,F=f,B=x,st=p,l>=0?(R=c,_=h,P=u,D=d,z=S,N=m,W=y,H=w):(R=h,_=c,P=d,D=u,z=m,N=S,W=w,H=y)):T>=E?(b=c,F=u,B=S,st=y,c>=0?(R=h,_=l,P=d,D=f,z=m,N=x,W=w,H=p):(R=l,_=h,P=f,D=d,z=x,N=m,W=p,H=w)):(b=h,F=d,B=m,st=w,h>=0?(R=l,_=c,P=f,D=u,z=x,N=S,W=p,H=y):(R=c,_=l,P=u,D=f,z=S,N=x,W=y,H=p)),b===0)return null;const Y=R/b,Q=_/b,nt=1/b,Rt=P-Y*F,Et=D-Q*F,se=z-Y*B,Kt=N-Q*B,jt=W-Y*st,q=H-Q*st,tt=jt*Kt-q*se,xt=Rt*q-Et*jt,Ot=se*Et-Kt*Rt;if(s){if(tt<0||xt<0||Ot<0)return null}else if((tt<0||xt<0||Ot<0)&&(tt>0||xt>0||Ot>0))return null;const at=tt+xt+Ot;if(at===0)return null;const Tt=nt*(tt*F+xt*B+Ot*st);return(at>0?Tt<0:Tt>0)?null:this.at(Tt/at,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ar extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Gc=new xe,Ci=new rr,Er=new sr,Hc=new C,br=new C,Tr=new C,Ar=new C,Fo=new C,wr=new C,Vc=new C,Rr=new C;class Bn extends Ue{constructor(t=new Le,e=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],f=r[l];h!==0&&(Fo.fromBufferAttribute(f,t),a?wr.addScaledVector(Fo,h):wr.addScaledVector(Fo.sub(e),h))}e.add(wr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(Er.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Er,Hc)===null||Ci.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(Gc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(Gc),!(i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const m=u[x],p=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,T=w;v<T;v+=3){const E=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=Cr(this,p,t,i,c,h,f,E,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=x,p=S;m<p;m+=3){const y=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);s=Cr(this,a,t,i,c,h,f,y,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,S=u.length;x<S;x++){const m=u[x],p=a[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,T=w;v<T;v+=3){const E=v,R=v+1,_=v+2;s=Cr(this,p,t,i,c,h,f,E,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,d.start),S=Math.min(l.count,d.start+d.count);for(let m=x,p=S;m<p;m+=3){const y=m,w=m+1,v=m+2;s=Cr(this,a,t,i,c,h,f,y,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function id(n,t,e,i,s,r,a,o){let l;if(t.side===en?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Si,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:n}}function Cr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,br),n.getVertexPosition(l,Tr),n.getVertexPosition(c,Ar);const h=id(n,t,e,i,br,Tr,Ar,Vc);if(h){const f=new C;vn.getBarycoord(Vc,br,Tr,Ar,f),s&&(h.uv=vn.getInterpolatedAttribute(s,o,l,c,f,new ot)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,f,new ot)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};vn.getNormal(br,Tr,Ar,u.normal),h.face=u,h.barycoord=f}return h}class Su extends Xe{constructor(t=null,e=1,i=1,s,r,a,o,l,c=ze,h=ze,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pi=new sr,sd=new ot(.5,.5),Pr=new C;class ja{constructor(t=new Xn,e=new Xn,i=new Xn,s=new Xn,r=new Xn,a=new Xn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ln,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],S=r[9],m=r[10],p=r[11],y=r[12],w=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,p-x,T-y).normalize(),s[1].setComponents(c+a,d+h,p+x,T+y).normalize(),s[2].setComponents(c+o,d+f,p+S,T+w).normalize(),s[3].setComponents(c-o,d-f,p-S,T-w).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,T-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,T-v).normalize(),e===Ln)s[5].setComponents(c+l,d+u,p+m,T+v).normalize();else if(e===ps)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=sd.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Pr.x=s.normal.x>0?t.max.x:t.min.x,Pr.y=s.normal.y>0?t.max.y:t.min.y,Pr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zl extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wc=new xe,il=new rr,Lr=new sr,Dr=new C;class yu extends Ue{constructor(t=new Le,e=new zl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),Lr.radius+=r,t.ray.intersectsSphere(Lr)===!1)return;Wc.copy(s).invert(),il.copy(t.ray).applyMatrix4(Wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let x=u,S=d;x<S;x++){const m=c.getX(x);Dr.fromBufferAttribute(f,m),Xc(Dr,m,l,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=u,S=d;x<S;x++)Dr.fromBufferAttribute(f,x),Xc(Dr,x,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Xc(n,t,e,i,s,r,a){const o=il.distanceSqToPoint(n);if(o<e){const l=new C;il.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class kl extends Xe{constructor(t=[],e=yi,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Gl extends Xe{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ms extends Xe{constructor(t,e,i=Fn,s,r,a,o=ze,l=ze,c,h=Zn,f=1){if(h!==Zn&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ja(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Eu extends ms{constructor(t,e=Fn,i=yi,s,r,a=ze,o=ze,l,c=Zn){const h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hl extends Xe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bi extends Le{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],f=[];let u=0,d=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2));function x(S,m,p,y,w,v,T,E,R,_,b){const P=v/R,D=T/_,F=v/2,z=T/2,N=E/2,B=R+1,W=_+1;let H=0,st=0;const Y=new C;for(let Q=0;Q<W;Q++){const nt=Q*D-z;for(let Rt=0;Rt<B;Rt++){const Et=Rt*P-F;Y[S]=Et*y,Y[m]=nt*w,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[S]=0,Y[m]=0,Y[p]=E>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Rt/R),f.push(1-Q/_),H+=1}}for(let Q=0;Q<_;Q++)for(let nt=0;nt<R;nt++){const Rt=u+nt+B*Q,Et=u+nt+B*(Q+1),se=u+(nt+1)+B*(Q+1),Kt=u+(nt+1)+B*Q;l.push(Rt,Et,Kt),l.push(Et,se,Kt),st+=6}o.addGroup(d,st,b),d+=st,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class to extends Le{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new C,h=new ot;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){const d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(o,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class or extends Le{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],d=[];let x=0;const S=[],m=i/2;let p=0;y(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function y(){const v=new C,T=new C;let E=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const b=[],P=_/r,D=P*(e-t)+t;for(let F=0;F<=s;F++){const z=F/s,N=z*l+o,B=Math.sin(N),W=Math.cos(N);T.x=D*B,T.y=-P*i+m,T.z=D*W,f.push(T.x,T.y,T.z),v.set(B,R,W).normalize(),u.push(v.x,v.y,v.z),d.push(z,1-P),b.push(x++)}S.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const P=S[b][_],D=S[b+1][_],F=S[b+1][_+1],z=S[b][_+1];(t>0||b!==0)&&(h.push(P,D,z),E+=3),(e>0||b!==r-1)&&(h.push(D,F,z),E+=3)}c.addGroup(p,E,0),p+=E}function w(v){const T=x,E=new ot,R=new C;let _=0;const b=v===!0?t:e,P=v===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),x++;const D=x;for(let F=0;F<=s;F++){const N=F/s*l+o,B=Math.cos(N),W=Math.sin(N);R.x=b*W,R.y=m*P,R.z=b*B,f.push(R.x,R.y,R.z),u.push(0,P,0),E.x=B*.5+.5,E.y=W*.5*P+.5,d.push(E.x,E.y),x++}for(let F=0;F<s;F++){const z=T+F,N=D+F;v===!0?h.push(N,N+1,z):h.push(N+1,N,z),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vs extends or{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new vs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends Le{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(r.slice(),3)),this.setAttribute("uv",new le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const w=new C,v=new C,T=new C;for(let E=0;E<e.length;E+=3)d(e[E+0],w),d(e[E+1],v),d(e[E+2],T),l(w,v,T,y)}function l(y,w,v,T){const E=T+1,R=[];for(let _=0;_<=E;_++){R[_]=[];const b=y.clone().lerp(v,_/E),P=w.clone().lerp(v,_/E),D=E-_;for(let F=0;F<=D;F++)F===0&&_===E?R[_][F]=b:R[_][F]=b.clone().lerp(P,F/D)}for(let _=0;_<E;_++)for(let b=0;b<2*(E-_)-1;b++){const P=Math.floor(b/2);b%2===0?(u(R[_][P+1]),u(R[_+1][P]),u(R[_][P])):(u(R[_][P+1]),u(R[_+1][P+1]),u(R[_+1][P]))}}function c(y){const w=new C;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(y),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){const y=new C;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];const v=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(v,1-T)}x(),f()}function f(){for(let y=0;y<a.length;y+=6){const w=a[y+0],v=a[y+2],T=a[y+4],E=Math.max(w,v,T),R=Math.min(w,v,T);E>.9&&R<.1&&(w<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,w){const v=y*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function x(){const y=new C,w=new C,v=new C,T=new C,E=new ot,R=new ot,_=new ot;for(let b=0,P=0;b<r.length;b+=9,P+=6){y.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),T.copy(y).add(w).add(v).divideScalar(3);const D=m(T);S(E,P+0,y,D),S(R,P+2,w,D),S(_,P+4,v,D)}}function S(y,w,v,T){T<0&&y.x===1&&(a[w]=y.x-1),v.x===0&&v.z===0&&(a[w]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.vertices,t.indices,t.radius,t.detail)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ht("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new C,s=[],r=[],a=[],o=new C,l=new xe;for(let d=0;d<=t;d++){const x=d/t;s[d]=this.getTangentAt(x,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Qt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class no extends zn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class bu extends no{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Vl(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Yc=new C,qc=new C,Oo=new Vl,Bo=new Vl,zo=new Vl;class Wl extends zn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new C){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qc.subVectors(s[0],s[1]).add(s[0]),c=qc);const f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Yc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),d),S=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);S<1e-4&&(S=1),x<1e-4&&(x=S),m<1e-4&&(m=S),Oo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,S,m),Bo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,S,m),zo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,S,m)}else this.curveType==="catmullrom"&&(Oo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Bo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),zo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Oo.calc(l),Bo.calc(l),zo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zc(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function rd(n,t){const e=1-n;return e*e*t}function ad(n,t){return 2*(1-n)*n*t}function od(n,t){return n*n*t}function Gs(n,t,e,i){return rd(n,t)+ad(n,e)+od(n,i)}function ld(n,t){const e=1-n;return e*e*e*t}function cd(n,t){const e=1-n;return 3*e*e*n*t}function hd(n,t){return 3*(1-n)*n*n*t}function ud(n,t){return n*n*n*t}function Hs(n,t,e,i,s){return ld(n,t)+cd(n,e)+hd(n,i)+ud(n,s)}class Xl extends zn{constructor(t=new ot,e=new ot,i=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tu extends zn{constructor(t=new C,e=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Hs(t,s.x,r.x,a.x,o.x),Hs(t,s.y,r.y,a.y,o.y),Hs(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yl extends zn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends zn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ql extends zn{constructor(t=new ot,e=new ot,i=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ot){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zl extends zn{constructor(t=new C,e=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new C){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Gs(t,s.x,r.x,a.x),Gs(t,s.y,r.y,a.y),Gs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kl extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Zc(o,l.x,c.x,h.x,f.x),Zc(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new ot().fromArray(s))}return this}}var Ua=Object.freeze({__proto__:null,ArcCurve:bu,CatmullRomCurve3:Wl,CubicBezierCurve:Xl,CubicBezierCurve3:Tu,EllipseCurve:no,LineCurve:Yl,LineCurve3:Au,QuadraticBezierCurve:ql,QuadraticBezierCurve3:Zl,SplineCurve:Kl});class wu extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ua[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Ua[s.type]().fromJSON(s))}return this}}class sl extends wu{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Yl(this.currentPoint.clone(),new ot(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new ql(this.currentPoint.clone(),new ot(t,e),new ot(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new Xl(this.currentPoint.clone(),new ot(t,e),new ot(i,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Kl(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new no(t,e,i,s,r,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class io extends sl{constructor(t){super(t),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new sl().fromJSON(s))}return this}}function fd(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Ru(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=_d(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,f=l;for(let u=e;u<s;u+=e){const d=n[u],x=n[u+1];d<o&&(o=d),x<l&&(l=x),d>h&&(h=d),x>f&&(f=x)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Js(r,a,e,o,l,c,0),a}function Ru(n,t,e,i,s){let r;if(s===Rd(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Kc(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Kc(a/i|0,n[a],n[a+1],r);return r&&gs(r,r.next)&&(Qs(r),r=r.next),r}function Bi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(gs(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Js(n,t,e,i,s,r,a){if(!n)return;!a&&r&&yd(n,i,s,r);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?pd(n,i,s,r):dd(n)){t.push(l.i,n.i,c.i),Qs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=md(Bi(n),t),Js(n,t,e,i,s,r,2)):a===2&&gd(n,t,e,i,s,r):Js(Bi(n),t,e,i,s,r,1);break}}}function dd(n){const t=n.prev,e=n,i=n.next;if(Ae(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c);let x=i.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&Ds(s,o,r,l,a,c,x.x,x.y)&&Ae(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function pd(n,t,e,i){const s=n.prev,r=n,a=n.next;if(Ae(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),x=Math.min(h,f,u),S=Math.max(o,l,c),m=Math.max(h,f,u),p=rl(d,x,t,e,i),y=rl(S,m,t,e,i);let w=n.prevZ,v=n.nextZ;for(;w&&w.z>=p&&v&&v.z<=y;){if(w.x>=d&&w.x<=S&&w.y>=x&&w.y<=m&&w!==s&&w!==a&&Ds(o,h,l,f,c,u,w.x,w.y)&&Ae(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=S&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,l,f,c,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=d&&w.x<=S&&w.y>=x&&w.y<=m&&w!==s&&w!==a&&Ds(o,h,l,f,c,u,w.x,w.y)&&Ae(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=S&&v.y>=x&&v.y<=m&&v!==s&&v!==a&&Ds(o,h,l,f,c,u,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function md(n,t){let e=n;do{const i=e.prev,s=e.next.next;!gs(i,s)&&Pu(i,e,e.next,s)&&$s(i,s)&&$s(s,i)&&(t.push(i.i,e.i,s.i),Qs(e),Qs(e.next),e=n=s),e=e.next}while(e!==n);return Bi(e)}function gd(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Td(a,o)){let l=Lu(a,o);a=Bi(a,a.next),l=Bi(l,l.next),Js(a,t,e,i,s,r,0),Js(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function _d(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Ru(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(bd(c))}s.sort(xd);for(let r=0;r<s.length;r++)e=vd(s[r],e);return e}function xd(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function vd(n,t){const e=Md(n,t);if(!e)return t;const i=Lu(e,n);return Bi(i,i.next),Bi(e,e.next)}function Md(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(gs(n,e))return e;do{if(gs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Cu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const f=Math.abs(s-e.y)/(i-e.x);$s(e,n)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Sd(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Sd(n,t){return Ae(n.prev,n,t.prev)<0&&Ae(t.next,n,n.next)<0}function yd(n,t,e,i){let s=n;do s.z===0&&(s.z=rl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Ed(s)}function Ed(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function rl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function bd(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Cu(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function Ds(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Cu(n,t,e,i,s,r,a,o)}function Td(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Ad(n,t)&&($s(n,t)&&$s(t,n)&&wd(n,t)&&(Ae(n.prev,n,t.prev)||Ae(n,t.prev,t))||gs(n,t)&&Ae(n.prev,n,n.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function gs(n,t){return n.x===t.x&&n.y===t.y}function Pu(n,t,e,i){const s=Ur(Ae(n,t,e)),r=Ur(Ae(n,t,i)),a=Ur(Ae(e,i,n)),o=Ur(Ae(e,i,t));return!!(s!==r&&a!==o||s===0&&Ir(n,e,t)||r===0&&Ir(n,i,t)||a===0&&Ir(e,n,i)||o===0&&Ir(e,t,i))}function Ir(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ur(n){return n>0?1:n<0?-1:0}function Ad(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Pu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function $s(n,t){return Ae(n.prev,n,n.next)<0?Ae(n,t,n.next)>=0&&Ae(n,n.prev,t)>=0:Ae(n,t,n.prev)<0||Ae(n,n.next,t)<0}function wd(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Lu(n,t){const e=al(n.i,n.x,n.y),i=al(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Kc(n,t,e,i){const s=al(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function al(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rd(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Cd{static triangulate(t,e,i=2){return fd(t,e,i)}}class Ni{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ni.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Jc(t),$c(i,t);let a=t.length;e.forEach(Jc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,$c(i,e[l]);const o=Cd.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Jc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function $c(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class lr extends Le{constructor(t=new io([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,S=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Pd;let w,v=!1,T,E,R,_;if(p){w=p.getSpacedPoints(h),v=!0,u=!1;const J=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,J),E=new C,R=new C,_=new C}u||(m=0,d=0,x=0,S=0);const b=o.extractPoints(c);let P=b.shape;const D=b.holes;if(!Ni.isClockWise(P)){P=P.reverse();for(let J=0,rt=D.length;J<rt;J++){const lt=D[J];Ni.isClockWise(lt)&&(D[J]=lt.reverse())}}function z(J){const lt=10000000000000001e-36;let ct=J[0];for(let dt=1;dt<=J.length;dt++){const Bt=dt%J.length,Ft=J[Bt],Vt=Ft.x-ct.x,Xt=Ft.y-ct.y,L=Vt*Vt+Xt*Xt,ce=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(ct.x),Math.abs(ct.y)),ee=lt*ce*ce;if(L<=ee){J.splice(Bt,1),dt--;continue}ct=Ft}}z(P),D.forEach(z);const N=D.length,B=P;for(let J=0;J<N;J++){const rt=D[J];P=P.concat(rt)}function W(J,rt,lt){return rt||re("ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(rt,lt)}const H=P.length;function st(J,rt,lt){let ct,dt,Bt;const Ft=J.x-rt.x,Vt=J.y-rt.y,Xt=lt.x-J.x,L=lt.y-J.y,ce=Ft*Ft+Vt*Vt,ee=Ft*L-Vt*Xt;if(Math.abs(ee)>Number.EPSILON){const A=Math.sqrt(ce),g=Math.sqrt(Xt*Xt+L*L),O=rt.x-Vt/A,V=rt.y+Ft/A,Z=lt.x-L/g,ht=lt.y+Xt/g,ft=((Z-O)*L-(ht-V)*Xt)/(Ft*L-Vt*Xt);ct=O+Ft*ft-J.x,dt=V+Vt*ft-J.y;const K=ct*ct+dt*dt;if(K<=2)return new ot(ct,dt);Bt=Math.sqrt(K/2)}else{let A=!1;Ft>Number.EPSILON?Xt>Number.EPSILON&&(A=!0):Ft<-Number.EPSILON?Xt<-Number.EPSILON&&(A=!0):Math.sign(Vt)===Math.sign(L)&&(A=!0),A?(ct=-Vt,dt=Ft,Bt=Math.sqrt(ce)):(ct=Ft,dt=Vt,Bt=Math.sqrt(ce/2))}return new ot(ct/Bt,dt/Bt)}const Y=[];for(let J=0,rt=B.length,lt=rt-1,ct=J+1;J<rt;J++,lt++,ct++)lt===rt&&(lt=0),ct===rt&&(ct=0),Y[J]=st(B[J],B[lt],B[ct]);const Q=[];let nt,Rt=Y.concat();for(let J=0,rt=N;J<rt;J++){const lt=D[J];nt=[];for(let ct=0,dt=lt.length,Bt=dt-1,Ft=ct+1;ct<dt;ct++,Bt++,Ft++)Bt===dt&&(Bt=0),Ft===dt&&(Ft=0),nt[ct]=st(lt[ct],lt[Bt],lt[Ft]);Q.push(nt),Rt=Rt.concat(nt)}let Et;if(m===0)Et=Ni.triangulateShape(B,D);else{const J=[],rt=[];for(let lt=0;lt<m;lt++){const ct=lt/m,dt=d*Math.cos(ct*Math.PI/2),Bt=x*Math.sin(ct*Math.PI/2)+S;for(let Ft=0,Vt=B.length;Ft<Vt;Ft++){const Xt=W(B[Ft],Y[Ft],Bt);xt(Xt.x,Xt.y,-dt),ct===0&&J.push(Xt)}for(let Ft=0,Vt=N;Ft<Vt;Ft++){const Xt=D[Ft];nt=Q[Ft];const L=[];for(let ce=0,ee=Xt.length;ce<ee;ce++){const A=W(Xt[ce],nt[ce],Bt);xt(A.x,A.y,-dt),ct===0&&L.push(A)}ct===0&&rt.push(L)}}Et=Ni.triangulateShape(J,rt)}const se=Et.length,Kt=x+S;for(let J=0;J<H;J++){const rt=u?W(P[J],Rt[J],Kt):P[J];v?(R.copy(T.normals[0]).multiplyScalar(rt.x),E.copy(T.binormals[0]).multiplyScalar(rt.y),_.copy(w[0]).add(R).add(E),xt(_.x,_.y,_.z)):xt(rt.x,rt.y,0)}for(let J=1;J<=h;J++)for(let rt=0;rt<H;rt++){const lt=u?W(P[rt],Rt[rt],Kt):P[rt];v?(R.copy(T.normals[J]).multiplyScalar(lt.x),E.copy(T.binormals[J]).multiplyScalar(lt.y),_.copy(w[J]).add(R).add(E),xt(_.x,_.y,_.z)):xt(lt.x,lt.y,f/h*J)}for(let J=m-1;J>=0;J--){const rt=J/m,lt=d*Math.cos(rt*Math.PI/2),ct=x*Math.sin(rt*Math.PI/2)+S;for(let dt=0,Bt=B.length;dt<Bt;dt++){const Ft=W(B[dt],Y[dt],ct);xt(Ft.x,Ft.y,f+lt)}for(let dt=0,Bt=D.length;dt<Bt;dt++){const Ft=D[dt];nt=Q[dt];for(let Vt=0,Xt=Ft.length;Vt<Xt;Vt++){const L=W(Ft[Vt],nt[Vt],ct);v?xt(L.x,L.y+w[h-1].y,w[h-1].x+lt):xt(L.x,L.y,f+lt)}}}jt(),q();function jt(){const J=s.length/3;if(u){let rt=0,lt=H*rt;for(let ct=0;ct<se;ct++){const dt=Et[ct];Ot(dt[2]+lt,dt[1]+lt,dt[0]+lt)}rt=h+m*2,lt=H*rt;for(let ct=0;ct<se;ct++){const dt=Et[ct];Ot(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let rt=0;rt<se;rt++){const lt=Et[rt];Ot(lt[2],lt[1],lt[0])}for(let rt=0;rt<se;rt++){const lt=Et[rt];Ot(lt[0]+H*h,lt[1]+H*h,lt[2]+H*h)}}i.addGroup(J,s.length/3-J,0)}function q(){const J=s.length/3;let rt=0;tt(B,rt),rt+=B.length;for(let lt=0,ct=D.length;lt<ct;lt++){const dt=D[lt];tt(dt,rt),rt+=dt.length}i.addGroup(J,s.length/3-J,1)}function tt(J,rt){let lt=J.length;for(;--lt>=0;){const ct=lt;let dt=lt-1;dt<0&&(dt=J.length-1);for(let Bt=0,Ft=h+m*2;Bt<Ft;Bt++){const Vt=H*Bt,Xt=H*(Bt+1),L=rt+ct+Vt,ce=rt+dt+Vt,ee=rt+dt+Xt,A=rt+ct+Xt;at(L,ce,ee,A)}}}function xt(J,rt,lt){l.push(J),l.push(rt),l.push(lt)}function Ot(J,rt,lt){Tt(J),Tt(rt),Tt(lt);const ct=s.length/3,dt=y.generateTopUV(i,s,ct-3,ct-2,ct-1);Gt(dt[0]),Gt(dt[1]),Gt(dt[2])}function at(J,rt,lt,ct){Tt(J),Tt(rt),Tt(ct),Tt(rt),Tt(lt),Tt(ct);const dt=s.length/3,Bt=y.generateSideWallUV(i,s,dt-6,dt-3,dt-2,dt-1);Gt(Bt[0]),Gt(Bt[1]),Gt(Bt[3]),Gt(Bt[1]),Gt(Bt[2]),Gt(Bt[3])}function Tt(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Gt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Ld(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ua[s.type]().fromJSON(s)),new lr(i,t.options)}}const Pd={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],x=t[s*3+2],S=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-f),new ot(u,1-x),new ot(S,1-p)]:[new ot(o,1-l),new ot(h,1-f),new ot(d,1-x),new ot(m,1-p)]}};function Ld(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class so extends eo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}class Gi extends Le{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],x=[],S=[],m=[];for(let p=0;p<h;p++){const y=p*u-a;for(let w=0;w<c;w++){const v=w*f-r;x.push(v,-y,0),S.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const w=y+c*p,v=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(w,v,E),d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new le(x,3)),this.setAttribute("normal",new le(S,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.width,t.height,t.widthSegments,t.heightSegments)}}class ro extends Le{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],f=new C,u=new C,d=[],x=[],S=[],m=[];for(let p=0;p<=i;p++){const y=[],w=p/i,v=a+w*o,T=t*Math.cos(v),E=Math.sqrt(t*t-T*T);let R=0;p===0&&a===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const b=_/e,P=s+b*r;f.x=-E*Math.cos(P),f.y=T,f.z=E*Math.sin(P),x.push(f.x,f.y,f.z),u.copy(f).normalize(),S.push(u.x,u.y,u.z),m.push(b+R,1-w),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<e;y++){const w=h[p][y+1],v=h[p][y],T=h[p+1][y],E=h[p+1][y+1];(p!==0||a>0)&&d.push(w,v,E),(p!==i-1||l<Math.PI)&&d.push(v,T,E)}this.setIndex(d),this.setAttribute("position",new le(x,3)),this.setAttribute("normal",new le(S,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ao extends Le{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],f=[],u=new C,d=new C,x=new C;for(let S=0;S<=i;S++){const m=a+S/i*o;for(let p=0;p<=s;p++){const y=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(y),u.y=t*Math.sin(y),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),f.push(p/s),f.push(S/i)}}for(let S=1;S<=i;S++)for(let m=1;m<=s;m++){const p=(s+1)*S+m-1,y=(s+1)*(S-1)+m-1,w=(s+1)*(S-1)+m,v=(s+1)*S+m;l.push(p,y,v),l.push(y,w,v)}this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ao(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class oo extends Le{constructor(t=new Zl(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,l=new C,c=new ot;let h=new C;const f=[],u=[],d=[],x=[];S(),this.setIndex(x),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(d,2));function S(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),y(),p()}function m(w){h=t.getPointAt(w/e,h);const v=a.normals[w],T=a.binormals[w];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,_=Math.sin(R),b=-Math.cos(R);l.x=b*v.x+_*T.x,l.y=b*v.y+_*T.y,l.z=b*v.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){const T=(s+1)*(w-1)+(v-1),E=(s+1)*w+(v-1),R=(s+1)*w+v,_=(s+1)*(w-1)+v;x.push(T,E,_),x.push(E,R,_)}}function y(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new oo(new Ua[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function _s(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Qc(s))s.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Qc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function tn(n){const t={};for(let e=0;e<n.length;e++){const i=_s(n[e]);for(const s in i)t[s]=i[s]}return t}function Qc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Dd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Du(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Iu={clone:_s,merge:tn};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class En extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new te().setHex(s.value);break;case"v2":this.uniforms[i].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[i].value=new C().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Uu extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nu extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fu extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ou extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class lo extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Bu extends lo{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ko=new xe,jc=new C,th=new C;class Jl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=rn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),th.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(th),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ko,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nr=new C,Fr=new ri,Hn=new C;class $l extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Nr,Fr,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Fr,Hn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Nr,Fr,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nr,Fr,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new C,eh=new ot,nh=new ot;class cn extends $l{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,eh,nh),e.subVectors(nh,eh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Nd extends Jl{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}}class co extends lo{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Nd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class cr extends $l{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Fd extends Jl{constructor(){super(new cr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ql extends lo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Fd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ns=-90,is=1;class zu extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(ns,is,t,e);s.layers=this.layers,this.add(s);const r=new cn(ns,is,t,e);r.layers=this.layers,this.add(r);const a=new cn(ns,is,t,e);a.layers=this.layers,this.add(a);const o=new cn(ns,is,t,e);o.layers=this.layers,this.add(o);const l=new cn(ns,is,t,e);l.layers=this.layers,this.add(l);const c=new cn(ns,is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ln)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ku extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ih=new xe;class Gu{constructor(t,e,i=0,s=1/0){this.ray=new rr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new $a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):re("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ih.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ih),this}intersectObject(t,e=!0,i=[]){return ol(t,this,i,e),i.sort(sh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)ol(t[s],this,i,e);return i.sort(sh),i}}function sh(n,t){return n.distance-t.distance}function ol(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)ol(r[a],t,e,!0)}}class ll{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const _c=class _c{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};_c.prototype.isMatrix2=!0;let cl=_c;class Hu extends oi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rh(n,t,e,i){const s=Od(i);switch(e){case Dl:return n*t;case Ul:return n*t/s.components*s.byteLength;case Xa:return n*t/s.components*s.byteLength;case Ei:return n*t*2/s.components*s.byteLength;case Ya:return n*t*2/s.components*s.byteLength;case Il:return n*t*3/s.components*s.byteLength;case Mn:return n*t*4/s.components*s.byteLength;case qa:return n*t*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ia:case ra:return Math.max(n,16)*Math.max(t,8)/4;case na:case sa:return Math.max(n,8)*Math.max(t,8)/2;case aa:case oa:case ca:case ha:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case Xs:case ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case pa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ma:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ga:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ea:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ba:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ta:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Aa:case wa:case Ra:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ca:case Pa:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ys:case La:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Od(n){switch(n){case rn:case Rl:return{byteLength:1,components:1};case fs:case Cl:case On:return{byteLength:2,components:1};case Va:case Wa:return{byteLength:2,components:4};case Fn:case Ha:case Pn:return{byteLength:4,components:1};case Pl:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Bd(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){const x=f[u],S=f[d];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,f[u]=S)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){const S=f[d];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,Yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qd=`#ifdef USE_BATCHING
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
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qd=`#ifdef USE_IRIDESCENCE
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
#endif`,jd=`#ifdef USE_BUMPMAP
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
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ap=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,op=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lp=`#define PI 3.141592653589793
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
} // validated`,cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hp=`vec3 transformedNormal = objectNormal;
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
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_p=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`uniform sampler2D dfgLUT;
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
}`,Bp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kp=`#if defined( USE_POINTS_UV )
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
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`#ifdef USE_MORPHTARGETS
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
#endif`,nm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
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
#endif`,cm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,um=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bm=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Cm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,qm=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,ag=`#define NORMAL
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
}`,og=`#define PHONG
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
}`,lg=`#define PHONG
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
}`,cg=`#define STANDARD
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
}`,hg=`#define STANDARD
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
}`,ug=`#define TOON
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
}`,fg=`#define TOON
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
}`,dg=`uniform float size;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 color;
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
}`,_g=`uniform float rotation;
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
}`,xg=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Gd,alphamap_pars_fragment:Hd,alphatest_fragment:Vd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:Yd,batching_pars_vertex:qd,batching_vertex:Zd,begin_vertex:Kd,beginnormal_vertex:Jd,bsdfs:$d,iridescence_fragment:Qd,bumpmap_pars_fragment:jd,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:sp,color_pars_fragment:rp,color_pars_vertex:ap,color_vertex:op,common:lp,cube_uv_reflection_fragment:cp,defaultnormal_vertex:hp,displacementmap_pars_vertex:up,displacementmap_vertex:fp,emissivemap_fragment:dp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:gp,envmap_fragment:_p,envmap_common_pars_fragment:xp,envmap_pars_fragment:vp,envmap_pars_vertex:Mp,envmap_physical_pars_fragment:Lp,envmap_vertex:Sp,fog_vertex:yp,fog_pars_vertex:Ep,fog_fragment:bp,fog_pars_fragment:Tp,gradientmap_pars_fragment:Ap,lightmap_pars_fragment:wp,lights_lambert_fragment:Rp,lights_lambert_pars_fragment:Cp,lights_pars_begin:Pp,lights_toon_fragment:Dp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Up,lights_phong_pars_fragment:Np,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:Bp,lights_fragment_maps:zp,lights_fragment_end:kp,lightprobes_pars_fragment:Gp,logdepthbuf_fragment:Hp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:Yp,map_pars_fragment:qp,map_particle_fragment:Zp,map_particle_pars_fragment:Kp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Qp,morphcolor_vertex:jp,morphnormal_vertex:tm,morphtarget_pars_vertex:em,morphtarget_vertex:nm,normal_fragment_begin:im,normal_fragment_maps:sm,normal_pars_fragment:rm,normal_pars_vertex:am,normal_vertex:om,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:cm,clearcoat_normal_fragment_maps:hm,clearcoat_pars_fragment:um,iridescence_pars_fragment:fm,opaque_fragment:dm,packing:pm,premultiplied_alpha_fragment:mm,project_vertex:gm,dithering_fragment:_m,dithering_pars_fragment:xm,roughnessmap_fragment:vm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:ym,shadowmap_vertex:Em,shadowmask_pars_fragment:bm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:wm,skinnormal_vertex:Rm,specularmap_fragment:Cm,specularmap_pars_fragment:Pm,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:Im,transmission_pars_fragment:Um,uv_pars_fragment:Nm,uv_pars_vertex:Fm,uv_vertex:Om,worldpos_vertex:Bm,background_vert:zm,background_frag:km,backgroundCube_vert:Gm,backgroundCube_frag:Hm,cube_vert:Vm,cube_frag:Wm,depth_vert:Xm,depth_frag:Ym,distance_vert:qm,distance_frag:Zm,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:$m,linedashed_frag:Qm,meshbasic_vert:jm,meshbasic_frag:tg,meshlambert_vert:eg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:sg,meshnormal_vert:rg,meshnormal_frag:ag,meshphong_vert:og,meshphong_frag:lg,meshphysical_vert:cg,meshphysical_frag:hg,meshtoon_vert:ug,meshtoon_frag:fg,points_vert:dg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:_g,sprite_frag:xg},vt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Cn={basic:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:tn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:tn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:tn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new te(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:tn([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:tn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:tn([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:tn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:tn([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:tn([vt.common,vt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:tn([vt.lights,vt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Cn.physical={uniforms:tn([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Or={r:0,b:0,g:0},vg=new xe,Wu=new Wt;Wu.set(-1,0,0,0,1,0,0,0,1);function Mg(n,t,e,i,s,r){const a=new te(0);let o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function x(y){let w=!1;const v=d(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(y,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===ir)?(c===void 0&&(c=new Bn(new bi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:_s(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(vg.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wu),c.material.toneMapped=ie.getTransfer(v.colorSpace)!==fe,(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Bn(new Gi(2,2),new En({name:"BackgroundMaterial",uniforms:_s(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Or,Du(n)),e.buffers.color.setClear(Or.r,Or.g,Or.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:x,addToRenderList:S,dispose:p}}function Sg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function o(D,F,z,N,B){let W=!1;const H=f(D,N,z,F);r!==H&&(r=H,c(r.object)),W=d(D,N,z,B),W&&x(D,N,z,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(D,F,z,N),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function f(D,F,z,N){const B=N.wireframe===!0;let W=i[F.id];W===void 0&&(W={},i[F.id]=W);const H=D.isInstancedMesh===!0?D.id:0;let st=W[H];st===void 0&&(st={},W[H]=st);let Y=st[z.id];Y===void 0&&(Y={},st[z.id]=Y);let Q=Y[B];return Q===void 0&&(Q=u(l()),Y[B]=Q),Q}function u(D){const F=[],z=[],N=[];for(let B=0;B<e;B++)F[B]=0,z[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:N,object:D,attributes:{},index:null}}function d(D,F,z,N){const B=r.attributes,W=F.attributes;let H=0;const st=z.getAttributes();for(const Y in st)if(st[Y].location>=0){const nt=B[Y];let Rt=W[Y];if(Rt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Rt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Rt=D.instanceColor)),nt===void 0||nt.attribute!==Rt||Rt&&nt.data!==Rt.data)return!0;H++}return r.attributesNum!==H||r.index!==N}function x(D,F,z,N){const B={},W=F.attributes;let H=0;const st=z.getAttributes();for(const Y in st)if(st[Y].location>=0){let nt=W[Y];nt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));const Rt={};Rt.attribute=nt,nt&&nt.data&&(Rt.data=nt.data),B[Y]=Rt,H++}r.attributes=B,r.attributesNum=H,r.index=N}function S(){const D=r.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function m(D){p(D,0)}function p(D,F){const z=r.newAttributes,N=r.enabledAttributes,B=r.attributeDivisors;z[D]=1,N[D]===0&&(n.enableVertexAttribArray(D),N[D]=1),B[D]!==F&&(n.vertexAttribDivisor(D,F),B[D]=F)}function y(){const D=r.newAttributes,F=r.enabledAttributes;for(let z=0,N=F.length;z<N;z++)F[z]!==D[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function w(D,F,z,N,B,W,H){H===!0?n.vertexAttribIPointer(D,F,z,B,W):n.vertexAttribPointer(D,F,z,N,B,W)}function v(D,F,z,N){S();const B=N.attributes,W=z.getAttributes(),H=F.defaultAttributeValues;for(const st in W){const Y=W[st];if(Y.location>=0){let Q=B[st];if(Q===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const nt=Q.normalized,Rt=Q.itemSize,Et=t.get(Q);if(Et===void 0)continue;const se=Et.buffer,Kt=Et.type,jt=Et.bytesPerElement,q=Kt===n.INT||Kt===n.UNSIGNED_INT||Q.gpuType===Ha;if(Q.isInterleavedBufferAttribute){const tt=Q.data,xt=tt.stride,Ot=Q.offset;if(tt.isInstancedInterleavedBuffer){for(let at=0;at<Y.locationSize;at++)p(Y.location+at,tt.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<Y.locationSize;at++)m(Y.location+at);n.bindBuffer(n.ARRAY_BUFFER,se);for(let at=0;at<Y.locationSize;at++)w(Y.location+at,Rt/Y.locationSize,Kt,nt,xt*jt,(Ot+Rt/Y.locationSize*at)*jt,q)}else{if(Q.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt,Q.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt);n.bindBuffer(n.ARRAY_BUFFER,se);for(let tt=0;tt<Y.locationSize;tt++)w(Y.location+tt,Rt/Y.locationSize,Kt,nt,Rt*jt,Rt/Y.locationSize*tt*jt,q)}}else if(H!==void 0){const nt=H[st];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Y.location,nt);break;case 3:n.vertexAttrib3fv(Y.location,nt);break;case 4:n.vertexAttrib4fv(Y.location,nt);break;default:n.vertexAttrib1fv(Y.location,nt)}}}}y()}function T(){b();for(const D in i){const F=i[D];for(const z in F){const N=F[z];for(const B in N){const W=N[B];for(const H in W)h(W[H].object),delete W[H];delete N[B]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const z in F){const N=F[z];for(const B in N){const W=N[B];for(const H in W)h(W[H].object),delete W[H];delete N[B]}}delete i[D.id]}function R(D){for(const F in i){const z=i[F];for(const N in z){const B=z[N];if(B[D.id]===void 0)continue;const W=B[D.id];for(const H in W)h(W[H].object),delete W[H];delete B[D.id]}}}function _(D){for(const F in i){const z=i[F],N=D.isInstancedMesh===!0?D.id:0,B=z[N];if(B!==void 0){for(const W in B){const H=B[W];for(const st in H)h(H[st].object),delete H[st];delete B[W]}delete z[N],Object.keys(z).length===0&&delete i[F]}}}function b(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:y}}function yg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Eg(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Mn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const _=R===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==rn&&R!==Pn&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:T,samples:E}}function bg(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new Xn,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){const x=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,w=y*4;let v=p.clippingState||null;l.value=v,v=h(x,u,w,d);for(let T=0;T!==w;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,x){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const p=d+S*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=d;w!==S;++w,v+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const os=4,Tg=6,Ag=20,wg=256,Rs=new cr,ah=new te;let Go=null,Ho=0,Vo=0,Wo=!1;const Rg=new C,Li=new C;class hl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=Rg}=r;Go=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Go,Ho,Vo),this._renderer.xr.enabled=Wo,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Go=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:On,format:Mn,colorSpace:qs,depthBuffer:!1},s=oh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cg(r)),this._blurMaterial=Lg(r,t,e),this._ggxMaterial=Pg(r,t,e)}return s}_compileMaterial(t){const e=new Bn(new Le,t);this._renderer.compile(e,Rs)}_sceneToCubeUV(t,e,i,s,r){const l=new cn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(ah),f.toneMapping=Dn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new bi,new ar({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(ah),p=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const T=this._cubeSize;ss(s,v*T,w>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(S,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=y}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===yi||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ss(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Rs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:x}=this,S=this._sizeLods[i],m=3*S*(i>x-os?i-x+os:0),p=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=x-e,ss(r,m,p,3*S,2*S),s.setRenderTarget(r),s.render(o,Rs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=x-i,ss(t,m,p,3*S,2*S),s.setRenderTarget(t),s.render(o,Rs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[s],f=3*h*(s>this._lodMax-os?s-this._lodMax+os:0),u=4*(this._cubeSize-h);ss(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Rs)}}function Cg(n){const t=[],e=[];let i=n;const s=n-os+1+Tg;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,x=new Float32Array(d*u*f),S=new Float32Array(d*u*f);for(let p=0;p<f;p++){const y=p%3*2/3-1,w=p>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];x.set(v,d*u*p);for(let T=0;T<u;T++){const E=h[T*2]*2-1,R=h[T*2+1]*2-1;p===0?Li.set(1,R,E):p===1?Li.set(-E,1,-R):p===2?Li.set(-E,R,1):p===3?Li.set(-1,R,-E):p===4?Li.set(-E,-1,R):Li.set(E,R,-1),Li.toArray(S,(p*u+T)*d)}}const m=new Le;m.setAttribute("position",new In(x,d)),m.setAttribute("outputDirection",new In(S,d)),e.push(new Bn(m,null)),i>os&&i--}return{lodMeshes:e,sizeLods:t}}function oh(n,t,e){const i=new Sn(n,t,e);return i.texture.mapping=ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Pg(n,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Lg(n,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:Ag,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function lh(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ch(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class jl extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new kl(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bi(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:_s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:qn});r.uniforms.tEquirect.value=e;const a=new Bn(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=We),new zu(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function Dg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===kr||d===Gr)if(t.has(u)){const x=t.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const S=new jl(x.height);return S.fromEquirectangularTexture(n,u),t.set(u,S),u.addEventListener("dispose",c),o(S.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){const d=u.mapping,x=d===kr||d===Gr,S=d===yi||d===Oi;if(x||S){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new hl(n)),m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return x&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new hl(n)),m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===kr?u.mapping=yi:d===Gr&&(u.mapping=Oi),u}function l(u){let d=0;const x=6;for(let S=0;S<x;S++)u[S]!==void 0&&d++;return d===x}function c(u){const d=u.target;d.removeEventListener("dispose",c);const x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function h(u){const d=u.target;d.removeEventListener("dispose",h);const x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Ig(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Fi("WebGLRenderer: "+i+" extension not supported."),s}}}function Ug(n,t,e,i){const s={},r=new WeakMap;function a(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const d in u)t.update(u[d],n.ARRAY_BUFFER)}function c(f){const u=[],d=f.index,x=f.attributes.position;let S=0;if(x===void 0)return;if(d!==null){const y=d.array;S=d.version;for(let w=0,v=y.length;w<v;w+=3){const T=y[w+0],E=y[w+1],R=y[w+2];u.push(T,E,E,R,R,T)}}else{const y=x.array;S=x.version;for(let w=0,v=y.length/3-1;w<v;w+=3){const T=w+0,E=w+1,R=w+2;u.push(T,E,E,R,R,T)}}const m=new(x.count>=65535?Bl:Ol)(u,1);m.version=S;const p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){const u=r.get(f);if(u){const d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Ng(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let S=0;for(let m=0;m<d;m++)S+=u[m];e.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Fg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Og(n,t,e){const i=new WeakMap,s=new be;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var d=P;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;x===!0&&(v=1),S===!0&&(v=2),m===!0&&(v=3);let T=o.attributes.position.count*v,E=1;T>t.maxTextureSize&&(E=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*E*4*f),_=new Fl(R,T,E,f);_.type=Pn,_.needsUpdate=!0;const b=v*4;for(let D=0;D<f;D++){const F=p[D],z=y[D],N=w[D],B=T*E*4*D;for(let W=0;W<F.count;W++){const H=W*b;x===!0&&(s.fromBufferAttribute(F,W),R[B+H+0]=s.x,R[B+H+1]=s.y,R[B+H+2]=s.z,R[B+H+3]=0),S===!0&&(s.fromBufferAttribute(z,W),R[B+H+4]=s.x,R[B+H+5]=s.y,R[B+H+6]=s.z,R[B+H+7]=0),m===!0&&(s.fromBufferAttribute(N,W),R[B+H+8]=s.x,R[B+H+9]=s.y,R[B+H+10]=s.z,R[B+H+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new ot(T,E)},i.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const S=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Bg(n,t,e,i,s){let r=new WeakMap;function a(c){const h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}const zg={[Sl]:"LINEAR_TONE_MAPPING",[yl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[bl]:"CUSTOM_TONE_MAPPING"};function kg(n,t,e,i,s,r){const a=new Sn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Le;c.setAttribute("position",new le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new le([0,2,0,0,2,0],2));const h=new Uu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Bn(c,h),u=new cr(-1,1,1,-1,0,1);let d=null,x=null,S=!1,m,p=null,y=[],w=!1;this.setSize=function(v,T){a.setSize(v,T),o!==null&&o.setSize(v,T),l!==null&&l.setSize(v,T);for(let E=0;E<y.length;E++){const R=y[E];R.setSize&&R.setSize(v,T)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;const T=a.width,E=a.height;y.length>0&&o===null&&(o=new Sn(T,E,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(T,E,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<y.length;R++){const _=y[R];_.setSize&&_.setSize(T,E)}},this.begin=function(v,T){if(S||v.toneMapping===Dn&&y.length===0)return!1;if(p=T,T!==null){const E=T.width,R=T.height;(a.width!==E||a.height!==R)&&this.setSize(E,R)}return w===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Dn,!0},this.hasRenderPass=function(){return w},this.end=function(v,T){v.toneMapping=m,S=!0;let E=a,R=o;for(let _=0;_<y.length;_++){const b=y[_];b.enabled!==!1&&(b.render(v,R,E,T),b.needsSwap!==!1&&(E=R,R=R===o?l:o))}if(d!==v.outputColorSpace||x!==v.toneMapping){d=v.outputColorSpace,x=v.toneMapping,h.defines={},ie.getTransfer(d)===fe&&(h.defines.SRGB_TRANSFER="");const _=zg[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(p),v.render(f,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Xu=new Xe,ul=new ms(1,1),Yu=new Fl,qu=new xu,Zu=new kl,hh=[],uh=[],fh=new Float32Array(16),dh=new Float32Array(9),ph=new Float32Array(4);function Ms(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Fe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function uo(n,t){let e=uh[t];e===void 0&&(e=new Int32Array(t),uh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Hg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Fe(e,t)}}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Fe(e,t)}}function Wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Fe(e,t)}}function Xg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;ph.set(i),n.uniformMatrix2fv(this.addr,!1,ph),Fe(e,i)}}function Yg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;dh.set(i),n.uniformMatrix3fv(this.addr,!1,dh),Fe(e,i)}}function qg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,i))return;fh.set(i),n.uniformMatrix4fv(this.addr,!1,fh),Fe(e,i)}}function Zg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Fe(e,t)}}function Jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Fe(e,t)}}function $g(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Fe(e,t)}}function Qg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Fe(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Fe(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Fe(e,t)}}function n0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ul.compareFunction=e.isReversedDepthBuffer()?Ka:Za,r=ul):r=Xu,e.setTexture2D(t||r,s)}function i0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qu,s)}function s0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Zu,s)}function r0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yu,s)}function a0(n){switch(n){case 5126:return Gg;case 35664:return Hg;case 35665:return Vg;case 35666:return Wg;case 35674:return Xg;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return Zg;case 35667:case 35671:return Kg;case 35668:case 35672:return Jg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return jg;case 36295:return t0;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return r0}}function o0(n,t){n.uniform1fv(this.addr,t)}function l0(n,t){const e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function c0(n,t){const e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function h0(n,t){const e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function u0(n,t){const e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function f0(n,t){const e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function d0(n,t){const e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function p0(n,t){n.uniform1iv(this.addr,t)}function m0(n,t){n.uniform2iv(this.addr,t)}function g0(n,t){n.uniform3iv(this.addr,t)}function _0(n,t){n.uniform4iv(this.addr,t)}function x0(n,t){n.uniform1uiv(this.addr,t)}function v0(n,t){n.uniform2uiv(this.addr,t)}function M0(n,t){n.uniform3uiv(this.addr,t)}function S0(n,t){n.uniform4uiv(this.addr,t)}function y0(n,t,e){const i=this.cache,s=t.length,r=uo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ul:a=Xu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function E0(n,t,e){const i=this.cache,s=t.length,r=uo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qu,r[a])}function b0(n,t,e){const i=this.cache,s=t.length,r=uo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Zu,r[a])}function T0(n,t,e){const i=this.cache,s=t.length,r=uo(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Fe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yu,r[a])}function A0(n){switch(n){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return f0;case 35676:return d0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return v0;case 36295:return M0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return T0}}class w0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=a0(e.type)}}class R0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A0(e.type)}}class C0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function mh(n,t){n.seq.push(t),n.map[t.id]=t}function P0(n,t,e){const i=n.name,s=i.length;for(Xo.lastIndex=0;;){const r=Xo.exec(i),a=Xo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mh(e,c===void 0?new w0(o,n,t):new R0(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new C0(o),mh(e,f)),e=f}}}class Xr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);P0(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function gh(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const L0=37297;let D0=0;function I0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const _h=new Wt;function U0(n){ie._getMatrix(_h,ie.workingColorSpace,n);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Zs:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+I0(n.getShaderSource(t),o)}else return r}function N0(n,t){const e=U0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const F0={[Sl]:"Linear",[yl]:"Reinhard",[El]:"Cineon",[Ga]:"ACESFilmic",[Tl]:"AgX",[Al]:"Neutral",[bl]:"Custom"};function O0(n,t){const e=F0[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Br=new C;function B0(){ie.getLuminanceCoefficients(Br);const n=Br.x.toFixed(4),t=Br.y.toFixed(4),e=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function k0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function G0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Is(n){return n!==""}function vh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(n){return n.replace(H0,W0)}const V0=new Map;function W0(n,t){let e=Jt[t];if(e===void 0){const i=V0.get(t);if(i!==void 0)e=Jt[i],Ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fl(e)}const X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(n){return n.replace(X0,Y0)}function Y0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const q0={[ls]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function Z0(n){return q0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K0={[yi]:"ENVMAP_TYPE_CUBE",[Oi]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE_UV"};function J0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":K0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const $0={[Oi]:"ENVMAP_MODE_REFRACTION"};function Q0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":$0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const j0={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[eu]:"ENVMAP_BLENDING_MIX",[nu]:"ENVMAP_BLENDING_ADD"};function t_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":j0[n.combine]||"ENVMAP_BLENDING_NONE"}function e_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function n_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Z0(e),c=J0(e),h=Q0(e),f=t_(e),u=e_(e),d=z0(e),x=k0(r),S=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(m=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,N0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=fl(a),a=vh(a,e),a=Mh(a,e),o=fl(o),o=vh(o,e),o=Mh(o,e),a=Sh(a),o=Sh(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=y+m+a,v=y+p+o,T=gh(s,s.VERTEX_SHADER,w),E=gh(s,s.FRAGMENT_SHADER,v);s.attachShader(S,T),s.attachShader(S,E),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(D){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(S)||"",z=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(E)||"",B=F.trim(),W=z.trim(),H=N.trim();let st=!0,Y=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,S,T,E);else{const Q=xh(s,T,"vertex"),nt=xh(s,E,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+Q+`
`+nt)}else B!==""?Ht("WebGLProgram: Program Info Log:",B):(W===""||H==="")&&(Y=!1);Y&&(D.diagnostics={runnable:st,programLog:B,vertexShader:{log:W,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(E),_=new Xr(s,S),b=G0(s,S)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,L0)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}let i_=0;class s_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new r_(t),e.set(t,i)),i}}class r_{constructor(t){this.id=i_++,this.code=t,this.usedTimes=0}}function a_(n){return n===Ei||n===Xs||n===Ys}function o_(n,t,e,i,s,r){const a=new $a,o=new s_,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,b,P,D,F,z){const N=D.fog,B=F.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||W,H),Y=st&&st.mapping===ir?st.image.height:null,Q=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const nt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Rt=nt!==void 0?nt.length:0;let Et=0;B.morphAttributes.position!==void 0&&(Et=1),B.morphAttributes.normal!==void 0&&(Et=2),B.morphAttributes.color!==void 0&&(Et=3);let se,Kt,jt,q;if(Q){const ve=Cn[Q];se=ve.vertexShader,Kt=ve.fragmentShader}else{se=_.vertexShader,Kt=_.fragmentShader;const ve=o.getVertexShaderStage(_),he=o.getFragmentShaderStage(_);o.update(_,ve,he),jt=ve.id,q=he.id}const tt=n.getRenderTarget(),xt=n.state.buffers.depth.getReversed(),Ot=F.isInstancedMesh===!0,at=F.isBatchedMesh===!0,Tt=!!_.map,Gt=!!_.matcap,J=!!st,rt=!!_.aoMap,lt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Bt=!!_.displacementMap,Ft=!!_.emissiveMap,Vt=!!_.metalnessMap,Xt=!!_.roughnessMap,L=_.anisotropy>0,ce=_.clearcoat>0,ee=_.dispersion>0,A=_.retroreflectivity>0,g=_.iridescence>0,O=_.sheen>0,V=_.transmission>0,Z=L&&!!_.anisotropyMap,ht=ce&&!!_.clearcoatMap,ft=ce&&!!_.clearcoatNormalMap,K=ce&&!!_.clearcoatRoughnessMap,et=g&&!!_.iridescenceMap,pt=g&&!!_.iridescenceThicknessMap,It=O&&!!_.sheenColorMap,Mt=O&&!!_.sheenRoughnessMap,mt=!!_.specularMap,Ut=!!_.specularColorMap,zt=!!_.specularIntensityMap,Zt=V&&!!_.transmissionMap,U=V&&!!_.thicknessMap,gt=!!_.gradientMap,$=!!_.alphaMap,_t=_.alphaTest>0,bt=!!_.alphaHash,it=!!_.extensions;let Nt=Dn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Lt={shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:Kt,defines:_.defines,customVertexShaderID:jt,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:at,batchingColor:at&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,outputColorSpace:tt===null?n.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Tt,matcap:Gt,envMap:J,envMapMode:J&&st.mapping,envMapCubeUVHeight:Y,aoMap:rt,lightMap:lt,bumpMap:ct,normalMap:dt,displacementMap:Bt,emissiveMap:Ft,normalMapObjectSpace:dt&&_.normalMapType===ru,normalMapTangentSpace:dt&&_.normalMapType===Da,packedNormalMap:dt&&_.normalMapType===Da&&a_(_.normalMap.format),metalnessMap:Vt,roughnessMap:Xt,anisotropy:L,anisotropyMap:Z,clearcoat:ce,clearcoatMap:ht,clearcoatNormalMap:ft,clearcoatRoughnessMap:K,dispersion:ee,retroreflection:A,iridescence:g,iridescenceMap:et,iridescenceThicknessMap:pt,sheen:O,sheenColorMap:It,sheenRoughnessMap:Mt,specularMap:mt,specularColorMap:Ut,specularIntensityMap:zt,transmission:V,transmissionMap:Zt,thicknessMap:U,gradientMap:gt,opaque:_.transparent===!1&&_.blending===cs&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:_t,alphaHash:bt,combine:_.combine,mapUv:Tt&&x(_.map.channel),aoMapUv:rt&&x(_.aoMap.channel),lightMapUv:lt&&x(_.lightMap.channel),bumpMapUv:ct&&x(_.bumpMap.channel),normalMapUv:dt&&x(_.normalMap.channel),displacementMapUv:Bt&&x(_.displacementMap.channel),emissiveMapUv:Ft&&x(_.emissiveMap.channel),metalnessMapUv:Vt&&x(_.metalnessMap.channel),roughnessMapUv:Xt&&x(_.roughnessMap.channel),anisotropyMapUv:Z&&x(_.anisotropyMap.channel),clearcoatMapUv:ht&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:It&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(_.sheenRoughnessMap.channel),specularMapUv:mt&&x(_.specularMap.channel),specularColorMapUv:Ut&&x(_.specularColorMap.channel),specularIntensityMapUv:zt&&x(_.specularIntensityMap.channel),transmissionMapUv:Zt&&x(_.transmissionMap.channel),thicknessMapUv:U&&x(_.thicknessMap.channel),alphaMapUv:$&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||L),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!B.attributes.uv&&(Tt||$),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xt,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Et,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Tt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||at)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)b.push(P),b.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(b,_),y(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function y(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){const b=d[_.type];let P;if(b){const D=Cn[b];P=Iu.clone(D.uniforms)}else P=_.uniforms;return P}function v(_,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new n_(n,b,_,s),c.push(P),h.set(b,P)),P}function T(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function E(_){o.remove(_)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:T,releaseShaderCache:E,programs:c,dispose:R}}function l_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function c_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Eh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function bh(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,S,m,p){let y=n[t];return y===void 0?(y={id:u.id,object:u,geometry:d,material:x,materialVariant:a(u),groupOrder:S,renderOrder:u.renderOrder,z:m,group:p},n[t]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=x,y.materialVariant=a(u),y.groupOrder=S,y.renderOrder=u.renderOrder,y.z=m,y.group=p),t++,y}function l(u,d,x,S,m,p,y){y.reversedDepth===!0&&(m=-m);const w=o(u,d,x,S,m,p);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):e.push(w)}function c(u,d,x,S,m,p){const y=o(u,d,x,S,m,p);x.transmission>0?i.unshift(y):x.transparent===!0?s.unshift(y):e.unshift(y)}function h(u,d){e.length>1&&e.sort(u||c_),i.length>1&&i.sort(d||Eh),s.length>1&&s.sort(d||Eh)}function f(){for(let u=t,d=n.length;u<d;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function h_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new bh,n.set(i,[a])):s>=r.length?(a=new bh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function u_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new te};break;case"SpotLight":e={position:new C,direction:new C,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new C,halfWidth:new C,halfHeight:new C};break}return n[t.id]=e,e}}}function f_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let d_=0;function p_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function m_(n){const t=new u_,e=f_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const s=new C,r=new xe,a=new xe;function o(c){let h=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,x=0,S=0,m=0,p=0,y=0,w=0,v=0,T=0,E=0,R=0,_=0,b=0,P=0;c.sort(p_);for(let F=0,z=c.length;F<z;F++){const N=c[F],B=N.color,W=N.intensity,H=N.distance;let st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ei?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=B.r*W,f+=B.g*W,u+=B.b*W;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],W);P++}else if(N.isSunLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[x]=nt,i.sunShadowMap[x]=st;const Rt=Q.getViewportCount();for(let Et=0;Et<Rt;Et++)i.sunShadowMatrix[S+Et]=Q.getMatrix(Et),i.sunShadowCascade[S+Et]=Q._cascadeData[Et];S+=Rt,x++}i.sun[d]=Y,d++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const Q=N.shadow,nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=N.shadow.matrix,T++}i.directional[m]=Y,m++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(B).multiplyScalar(W),Y.distance=H,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[y]=Y;const Q=N.shadow;if(N.map&&(i.spotLightMap[_]=N.map,_++,Q.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[y]=Q.matrix,N.castShadow){const nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,i.spotShadow[y]=nt,i.spotShadowMap[y]=st,R++}y++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(B).multiplyScalar(W),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=Y,w++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const Q=N.shadow,nt=e.get(N);nt.shadowIntensity=Q.intensity,nt.shadowBias=Q.bias,nt.shadowNormalBias=Q.normalBias,nt.shadowRadius=Q.radius,nt.shadowMapSize=Q.mapSize,nt.shadowCameraNear=Q.camera.near,nt.shadowCameraFar=Q.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=st,i.pointShadowMatrix[p]=N.shadow.matrix,E++}i.point[p]=Y,p++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(W),Y.groundColor.copy(N.groundColor).multiplyScalar(W),i.hemi[v]=Y,v++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=vt.LTC_FLOAT_1,i.rectAreaLTC2=vt.LTC_FLOAT_2):(i.rectAreaLTC1=vt.LTC_HALF_1,i.rectAreaLTC2=vt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==y||D.rectAreaLength!==w||D.hemiLength!==v||D.numSunShadows!==x||D.numDirectionalShadows!==T||D.numPointShadows!==E||D.numSpotShadows!==R||D.numSpotMaps!==_||D.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=p,i.hemi.length=v,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-b,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=P,D.sunLength=d,D.directionalLength=m,D.pointLength=p,D.spotLength=y,D.rectAreaLength=w,D.hemiLength=v,D.numSunShadows=x,D.numDirectionalShadows=T,D.numPointShadows=E,D.numSpotShadows=R,D.numSpotMaps=_,D.numLightProbes=P,i.version=d_++)}function l(c,h){let f=0,u=0,d=0,x=0,S=0,m=0;const p=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const v=c[y];if(v.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),f++}else if(v.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),u++}else if(v.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),x++}else if(v.isRectAreaLight){const T=i.rectArea[S];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),S++}else if(v.isPointLight){const T=i.point[d];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Th(n){const t=new m_(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function g_(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Th(n),t.set(s,[o])):r>=a.length?(o=new Th(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const __=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`,v_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],M_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Ah=new xe,Cs=new C,Yo=new C;function S_(n,t,e){let i=new ja;const s=new ot,r=new ot,a=new be,o=new Fu,l=new Ou,c={},h=e.maxTextureSize,f={[Si]:en,[en]:Si,[xn]:xn},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:__,fragmentShader:x_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const x=new Le;x.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Bn(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let p=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Fh&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ls);const b=n.getRenderTarget(),P=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=p!==this.type;z&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=E.length;N<B;N++){const W=E[N],H=W.shadow;if(H===void 0){Ht("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y));const Y=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===as){if(W.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Sn(s.x,s.y,{format:Ei,type:On,minFilter:We,magFilter:We,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new ms(s.x,s.y,Pn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Zn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze}else W.isPointLight?(H.map=new jl(s.x),H.map.depthTexture=new Eu(s.x,Fn)):(H.map=new Sn(s.x,s.y),H.map.depthTexture=new ms(s.x,s.y,Fn)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Zn,this.type===ls?(H.map.depthTexture.compareFunction=Y?Ka:Za,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,_);for(let nt=0;nt<Q;nt++){const Rt=H.getCamera(nt);if(W.isPointLight){const Et=H.camera,se=H.matrix,Kt=W.distance||Et.far;Kt!==Et.far&&(Et.far=Kt,Et.updateProjectionMatrix()),Cs.setFromMatrixPosition(W.matrixWorld),Et.position.copy(Cs),Yo.copy(Et.position),Yo.add(v_[nt]),Et.up.copy(M_[nt]),Et.lookAt(Yo),Et.updateMatrixWorld(),se.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Ah.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Ah,Et.coordinateSystem,Et.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(H.map),n.clear());const Et=H.getViewport(nt);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),F.viewport(a)}i=H.getFrustum(nt),v(R,_,Rt,W,this.type)}H.isPointLightShadow!==!0&&this.type===as&&y(H,_),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,P,D)};function y(E,R){const _=t.update(S);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Sn(s.x,s.y,{format:Ei,type:On}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,S,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(R,null,_,d,S,null)}function w(E,R,_,b){let P=null;const D=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)P=D;else if(P=_.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const F=P.uuid,z=R.uuid;let N=c[F];N===void 0&&(N={},c[F]=N);let B=N[z];B===void 0&&(B=P.clone(),N[z]=B,R.addEventListener("dispose",T)),P=B}if(P.visible=R.visible,P.wireframe=R.wireframe,b===as?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=n.properties.get(P);F.light=_}return P}function v(E,R,_,b,P){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===as)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);const z=t.update(E),N=E.material;if(Array.isArray(N)){const B=z.groups;for(let W=0,H=B.length;W<H;W++){const st=B[W],Y=N[st.materialIndex];if(Y&&Y.visible){const Q=w(E,Y,b,P);E.onBeforeShadow(n,E,R,_,z,Q,st),n.renderBufferDirect(_,null,z,Q,E,st),E.onAfterShadow(n,E,R,_,z,Q,st)}}}else if(N.visible){const B=w(E,N,b,P);E.onBeforeShadow(n,E,R,_,z,B,null),n.renderBufferDirect(_,null,z,B,E,null),E.onAfterShadow(n,E,R,_,z,B,null)}}const F=E.children;for(let z=0,N=F.length;z<N;z++)v(F[z],R,_,b,P)}function T(E){E.target.removeEventListener("dispose",T);for(const _ in c){const b=c[_],P=E.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function y_(n,t){function e(){let U=!1;const gt=new be;let $=null;const _t=new be(0,0,0,0);return{setMask:function(bt){$!==bt&&!U&&(n.colorMask(bt,bt,bt,bt),$=bt)},setLocked:function(bt){U=bt},setClear:function(bt,it,Nt,Lt,ve){ve===!0&&(bt*=Lt,it*=Lt,Nt*=Lt),gt.set(bt,it,Nt,Lt),_t.equals(gt)===!1&&(n.clearColor(bt,it,Nt,Lt),_t.copy(gt))},reset:function(){U=!1,$=null,_t.set(-1,0,0,0)}}}function i(){let U=!1,gt=!1,$=null,_t=null,bt=null;return{setReversed:function(it){if(gt!==it){const Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),gt=it;const Lt=bt;bt=null,this.setClear(Lt)}},getReversed:function(){return gt},setTest:function(it){it?tt(n.DEPTH_TEST):xt(n.DEPTH_TEST)},setMask:function(it){$!==it&&!U&&(n.depthMask(it),$=it)},setFunc:function(it){if(gt&&(it=bf[it]),_t!==it){switch(it){case Zr:n.depthFunc(n.NEVER);break;case Kr:n.depthFunc(n.ALWAYS);break;case Jr:n.depthFunc(n.LESS);break;case us:n.depthFunc(n.LEQUAL);break;case $r:n.depthFunc(n.EQUAL);break;case Qr:n.depthFunc(n.GEQUAL);break;case jr:n.depthFunc(n.GREATER);break;case ta:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=it}},setLocked:function(it){U=it},setClear:function(it){bt!==it&&(bt=it,gt&&(it=1-it),n.clearDepth(it))},reset:function(){U=!1,$=null,_t=null,bt=null,gt=!1}}}function s(){let U=!1,gt=null,$=null,_t=null,bt=null,it=null,Nt=null,Lt=null,ve=null;return{setTest:function(he){U||(he?tt(n.STENCIL_TEST):xt(n.STENCIL_TEST))},setMask:function(he){gt!==he&&!U&&(n.stencilMask(he),gt=he)},setFunc:function(he,bn,kn){($!==he||_t!==bn||bt!==kn)&&(n.stencilFunc(he,bn,kn),$=he,_t=bn,bt=kn)},setOp:function(he,bn,kn){(it!==he||Nt!==bn||Lt!==kn)&&(n.stencilOp(he,bn,kn),it=he,Nt=bn,Lt=kn)},setLocked:function(he){U=he},setClear:function(he){ve!==he&&(n.clearStencil(he),ve=he)},reset:function(){U=!1,gt=null,$=null,_t=null,bt=null,it=null,Nt=null,Lt=null,ve=null}}}const r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u={},d=new WeakMap,x=[],S=null,m=!1,p=null,y=null,w=null,v=null,T=null,E=null,R=null,_=new te(0,0,0),b=0,P=!1,D=null,F=null,z=null,N=null,B=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,st=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=st>=2);let Q=null,nt={};const Rt=n.getParameter(n.SCISSOR_BOX),Et=n.getParameter(n.VIEWPORT),se=new be().fromArray(Rt),Kt=new be().fromArray(Et);function jt(U,gt,$,_t){const bt=new Uint8Array(4),it=n.createTexture();n.bindTexture(U,it),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Nt=0;Nt<$;Nt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,bt):n.texImage2D(gt+Nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,bt);return it}const q={};q[n.TEXTURE_2D]=jt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(n.DEPTH_TEST),a.setFunc(us),ct(!1),dt($o),tt(n.CULL_FACE),rt(qn);function tt(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function xt(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ot(U,gt){return u[U]!==gt?(n.bindFramebuffer(U,gt),u[U]=gt,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=gt),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function at(U,gt){let $=x,_t=!1;if(U){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));const bt=U.textures;if($.length!==bt.length||$[0]!==n.COLOR_ATTACHMENT0){for(let it=0,Nt=bt.length;it<Nt;it++)$[it]=n.COLOR_ATTACHMENT0+it;$.length=bt.length,_t=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,_t=!0);_t&&n.drawBuffers($)}function Tt(U){return S!==U?(n.useProgram(U),S=U,!0):!1}const Gt={[Ii]:n.FUNC_ADD,[Bh]:n.FUNC_SUBTRACT,[zh]:n.FUNC_REVERSE_SUBTRACT};Gt[kh]=n.MIN,Gt[Gh]=n.MAX;const J={[Hh]:n.ZERO,[Vh]:n.ONE,[Wh]:n.SRC_COLOR,[xl]:n.SRC_ALPHA,[Jh]:n.SRC_ALPHA_SATURATE,[Zh]:n.DST_COLOR,[Yh]:n.DST_ALPHA,[Xh]:n.ONE_MINUS_SRC_COLOR,[vl]:n.ONE_MINUS_SRC_ALPHA,[Kh]:n.ONE_MINUS_DST_COLOR,[qh]:n.ONE_MINUS_DST_ALPHA,[$h]:n.CONSTANT_COLOR,[Qh]:n.ONE_MINUS_CONSTANT_COLOR,[jh]:n.CONSTANT_ALPHA,[tu]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(U,gt,$,_t,bt,it,Nt,Lt,ve,he){if(U===qn){m===!0&&(xt(n.BLEND),m=!1);return}if(m===!1&&(tt(n.BLEND),m=!0),U!==Oh){if(U!==p||he!==P){if((y!==Ii||T!==Ii)&&(n.blendEquation(n.FUNC_ADD),y=Ii,T=Ii),he)switch(U){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFunc(n.ONE,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:re("WebGLState: Invalid blending: ",U);break}else switch(U){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jo:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",U);break}w=null,v=null,E=null,R=null,_.set(0,0,0),b=0,p=U,P=he}return}bt=bt||gt,it=it||$,Nt=Nt||_t,(gt!==y||bt!==T)&&(n.blendEquationSeparate(Gt[gt],Gt[bt]),y=gt,T=bt),($!==w||_t!==v||it!==E||Nt!==R)&&(n.blendFuncSeparate(J[$],J[_t],J[it],J[Nt]),w=$,v=_t,E=it,R=Nt),(Lt.equals(_)===!1||ve!==b)&&(n.blendColor(Lt.r,Lt.g,Lt.b,ve),_.copy(Lt),b=ve),p=U,P=!1}function lt(U,gt){U.side===xn?xt(n.CULL_FACE):tt(n.CULL_FACE);let $=U.side===en;gt&&($=!$),ct($),U.blending===cs&&U.transparent===!1?rt(qn):rt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const _t=U.stencilWrite;o.setTest(_t),_t&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ft(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(n.SAMPLE_ALPHA_TO_COVERAGE):xt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ct(U){D!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),D=U)}function dt(U){U!==Uh?(tt(n.CULL_FACE),U!==F&&(U===$o?n.cullFace(n.BACK):U===Nh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xt(n.CULL_FACE),F=U}function Bt(U){U!==z&&(H&&n.lineWidth(U),z=U)}function Ft(U,gt,$){U?(tt(n.POLYGON_OFFSET_FILL),(N!==gt||B!==$)&&(N=gt,B=$,a.getReversed()&&(gt=-gt),n.polygonOffset(gt,$))):xt(n.POLYGON_OFFSET_FILL)}function Vt(U){U?tt(n.SCISSOR_TEST):xt(n.SCISSOR_TEST)}function Xt(U){U===void 0&&(U=n.TEXTURE0+W-1),Q!==U&&(n.activeTexture(U),Q=U)}function L(U,gt,$){$===void 0&&(Q===null?$=n.TEXTURE0+W-1:$=Q);let _t=nt[$];_t===void 0&&(_t={type:void 0,texture:void 0},nt[$]=_t),(_t.type!==U||_t.texture!==gt)&&(Q!==$&&(n.activeTexture($),Q=$),n.bindTexture(U,gt||q[U]),_t.type=U,_t.texture=gt)}function ce(){const U=nt[Q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function g(){try{n.texSubImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function O(){try{n.texSubImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function ht(){try{n.texStorage2D(...arguments)}catch(U){re("WebGLState:",U)}}function ft(){try{n.texStorage3D(...arguments)}catch(U){re("WebGLState:",U)}}function K(){try{n.texImage2D(...arguments)}catch(U){re("WebGLState:",U)}}function et(){try{n.texImage3D(...arguments)}catch(U){re("WebGLState:",U)}}function pt(U){return f[U]!==void 0?f[U]:n.getParameter(U)}function It(U,gt){f[U]!==gt&&(n.pixelStorei(U,gt),f[U]=gt)}function Mt(U){se.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),se.copy(U))}function mt(U){Kt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Kt.copy(U))}function Ut(U,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let _t=$.get(U);_t===void 0&&(_t=n.getUniformBlockIndex(gt,U.name),$.set(U,_t))}function zt(U,gt){const _t=c.get(gt).get(U);l.get(gt)!==_t&&(n.uniformBlockBinding(gt,_t,U.__bindingPointIndex),l.set(gt,_t))}function Zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,nt={},u={},d=new WeakMap,x=[],S=null,m=!1,p=null,y=null,w=null,v=null,T=null,E=null,R=null,_=new te(0,0,0),b=0,P=!1,D=null,F=null,z=null,N=null,B=null,se.set(0,0,n.canvas.width,n.canvas.height),Kt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:xt,bindFramebuffer:Ot,drawBuffers:at,useProgram:Tt,setBlending:rt,setMaterial:lt,setFlipSided:ct,setCullFace:dt,setLineWidth:Bt,setPolygonOffset:Ft,setScissorTest:Vt,activeTexture:Xt,bindTexture:L,unbindTexture:ce,compressedTexImage2D:ee,compressedTexImage3D:A,texImage2D:K,texImage3D:et,pixelStorei:It,getParameter:pt,updateUBOMapping:Ut,uniformBlockBinding:zt,texStorage2D:ht,texStorage3D:ft,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:Mt,viewport:mt,reset:Zt}}function E_(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,h=new WeakMap,f=new Set;let u;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,g){return x?new OffscreenCanvas(A,g):Ia("canvas")}function m(A,g,O){let V=1;const Z=ee(A);if((Z.width>O||Z.height>O)&&(V=O/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ht=Math.floor(V*Z.width),ft=Math.floor(V*Z.height);u===void 0&&(u=S(ht,ft));const K=g?S(ht,ft):u;return K.width=ht,K.height=ft,K.getContext("2d").drawImage(A,0,0,ht,ft),Ht("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ht+"x"+ft+")."),K}else return"data"in A&&Ht("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,g,O,V,Z,ht=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft;V&&(ft=t.get("EXT_texture_norm16"),ft||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=g;if(g===n.RED&&(O===n.FLOAT&&(K=n.R32F),O===n.HALF_FLOAT&&(K=n.R16F),O===n.UNSIGNED_BYTE&&(K=n.R8),O===n.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),O===n.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.R8UI),O===n.UNSIGNED_SHORT&&(K=n.R16UI),O===n.UNSIGNED_INT&&(K=n.R32UI),O===n.BYTE&&(K=n.R8I),O===n.SHORT&&(K=n.R16I),O===n.INT&&(K=n.R32I)),g===n.RG&&(O===n.FLOAT&&(K=n.RG32F),O===n.HALF_FLOAT&&(K=n.RG16F),O===n.UNSIGNED_BYTE&&(K=n.RG8),O===n.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),O===n.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RG8UI),O===n.UNSIGNED_SHORT&&(K=n.RG16UI),O===n.UNSIGNED_INT&&(K=n.RG32UI),O===n.BYTE&&(K=n.RG8I),O===n.SHORT&&(K=n.RG16I),O===n.INT&&(K=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGB8UI),O===n.UNSIGNED_SHORT&&(K=n.RGB16UI),O===n.UNSIGNED_INT&&(K=n.RGB32UI),O===n.BYTE&&(K=n.RGB8I),O===n.SHORT&&(K=n.RGB16I),O===n.INT&&(K=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),O===n.UNSIGNED_INT&&(K=n.RGBA32UI),O===n.BYTE&&(K=n.RGBA8I),O===n.SHORT&&(K=n.RGBA16I),O===n.INT&&(K=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),O===n.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),g===n.RGBA){const et=ht?Zs:ie.getTransfer(Z);O===n.FLOAT&&(K=n.RGBA32F),O===n.HALF_FLOAT&&(K=n.RGBA16F),O===n.UNSIGNED_BYTE&&(K=et===fe?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),O===n.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function T(A,g){let O;return A?g===null||g===Fn||g===ds?O=n.DEPTH24_STENCIL8:g===Pn?O=n.DEPTH32F_STENCIL8:g===fs&&(O=n.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Fn||g===ds?O=n.DEPTH_COMPONENT24:g===Pn?O=n.DEPTH_COMPONENT32F:g===fs&&(O=n.DEPTH_COMPONENT16),O}function E(A,g){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ze&&A.minFilter!==We?Math.log2(Math.max(g.width,g.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?g.mipmaps.length:1}function R(A){const g=A.target;g.removeEventListener("dispose",R),b(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&f.delete(g)}function _(A){const g=A.target;g.removeEventListener("dispose",_),D(g)}function b(A){const g=i.get(A);if(g.__webglInit===void 0)return;const O=A.source,V=d.get(O);if(V){const Z=V[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(A),Object.keys(V).length===0&&d.delete(O)}i.remove(A)}function P(A){const g=i.get(A);n.deleteTexture(g.__webglTexture);const O=A.source,V=d.get(O);delete V[g.__cacheKey],a.memory.textures--}function D(A){const g=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let Z=0;Z<g.__webglFramebuffer[V].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[V][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=A.textures;for(let V=0,Z=O.length;V<Z;V++){const ht=i.get(O[V]);ht.__webglTexture&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),i.remove(O[V])}i.remove(A)}let F=0;function z(){F=0}function N(){return F}function B(A){F=A}function W(){const A=F;return A>=s.maxTextures&&Ht("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function H(A){const g=[];return g.push(A.wrapS),g.push(A.wrapT),g.push(A.wrapR||0),g.push(A.magFilter),g.push(A.minFilter),g.push(A.anisotropy),g.push(A.internalFormat),g.push(A.format),g.push(A.type),g.push(A.generateMipmaps),g.push(A.premultiplyAlpha),g.push(A.flipY),g.push(A.unpackAlignment),g.push(A.colorSpace),g.join()}function st(A,g){const O=i.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const V=A.image;if(V===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(O,A,g);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function Y(A,g){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){xt(O,A,g);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function Q(A,g){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){xt(O,A,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function nt(A,g){const O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){Ot(O,A,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const Rt={[Ws]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},Et={[ze]:n.NEAREST,[iu]:n.NEAREST_MIPMAP_NEAREST,[Ls]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[Hr]:n.LINEAR_MIPMAP_NEAREST,[xi]:n.LINEAR_MIPMAP_LINEAR},se={[ou]:n.NEVER,[fu]:n.ALWAYS,[lu]:n.LESS,[Za]:n.LEQUAL,[cu]:n.EQUAL,[Ka]:n.GEQUAL,[hu]:n.GREATER,[uu]:n.NOTEQUAL};function Kt(A,g){if(g.type===Pn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===We||g.magFilter===Hr||g.magFilter===Ls||g.magFilter===xi||g.minFilter===We||g.minFilter===Hr||g.minFilter===Ls||g.minFilter===xi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Rt[g.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Rt[g.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Rt[g.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Et[g.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Et[g.minFilter]),g.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,se[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===ze||g.minFilter!==Ls&&g.minFilter!==xi||g.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function jt(A,g){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,g.addEventListener("dispose",R));const V=g.source;let Z=d.get(V);Z===void 0&&(Z={},d.set(V,Z));const ht=H(g);if(ht!==A.__cacheKey){Z[ht]===void 0&&(Z[ht]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Z[ht].usedTimes++;const ft=Z[A.__cacheKey];ft!==void 0&&(Z[A.__cacheKey].usedTimes--,ft.usedTimes===0&&P(g)),A.__cacheKey=ht,A.__webglTexture=Z[ht].texture}return O}function q(A,g,O){return Math.floor(Math.floor(A/O)/g)}function tt(A,g,O,V){const ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,V,g.data);else{ht.sort((It,Mt)=>It.start-Mt.start);let ft=0;for(let It=1;It<ht.length;It++){const Mt=ht[ft],mt=ht[It],Ut=Mt.start+Mt.count,zt=q(mt.start,g.width,4),Zt=q(Mt.start,g.width,4);mt.start<=Ut+1&&zt===Zt&&q(mt.start+mt.count-1,g.width,4)===zt?Mt.count=Math.max(Mt.count,mt.start+mt.count-Mt.start):(++ft,ht[ft]=mt)}ht.length=ft+1;const K=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),pt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let It=0,Mt=ht.length;It<Mt;It++){const mt=ht[It],Ut=Math.floor(mt.start/4),zt=Math.ceil(mt.count/4),Zt=Ut%g.width,U=Math.floor(Ut/g.width),gt=zt,$=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Zt),e.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Zt,U,gt,$,O,V,g.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function xt(A,g,O){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const Z=jt(A,g),ht=g.source;e.bindTexture(V,A.__webglTexture,n.TEXTURE0+O);const ft=i.get(ht);if(ht.version!==ft.__version||Z===!0){if(e.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const $=ie.getPrimaries(ie.workingColorSpace),_t=g.colorSpace===ti?null:ie.getPrimaries(g.colorSpace),bt=g.colorSpace===ti||$===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let et=m(g.image,!1,s.maxTextureSize);et=ce(g,et);const pt=r.convert(g.format,g.colorSpace),It=r.convert(g.type);let Mt=v(g.internalFormat,pt,It,g.normalized,g.colorSpace,g.isVideoTexture);Kt(V,g);let mt;const Ut=g.mipmaps,zt=g.isVideoTexture!==!0,Zt=ft.__version===void 0||Z===!0,U=ht.dataReady,gt=E(g,et);if(g.isDepthTexture)Mt=T(g.format===vi,g.type),Zt&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Mt,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,Mt,et.width,et.height,0,pt,It,null));else if(g.isDataTexture)if(Ut.length>0){zt&&Zt&&e.texStorage2D(n.TEXTURE_2D,gt,Mt,Ut[0].width,Ut[0].height);for(let $=0,_t=Ut.length;$<_t;$++)mt=Ut[$],zt?U&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(n.TEXTURE_2D,$,Mt,mt.width,mt.height,0,pt,It,mt.data);g.generateMipmaps=!1}else zt?(Zt&&e.texStorage2D(n.TEXTURE_2D,gt,Mt,et.width,et.height),U&&tt(g,et,pt,It)):e.texImage2D(n.TEXTURE_2D,0,Mt,et.width,et.height,0,pt,It,et.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){zt&&Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Mt,Ut[0].width,Ut[0].height,et.depth);for(let $=0,_t=Ut.length;$<_t;$++)if(mt=Ut[$],g.format!==Mn)if(pt!==null)if(zt){if(U)if(g.layerUpdates.size>0){const bt=rh(mt.width,mt.height,g.format,g.type);for(const it of g.layerUpdates){const Nt=mt.data.subarray(it*bt/mt.data.BYTES_PER_ELEMENT,(it+1)*bt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,it,mt.width,mt.height,1,pt,Nt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,et.depth,pt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Mt,mt.width,mt.height,et.depth,0,mt.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?U&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,et.depth,pt,It,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Mt,mt.width,mt.height,et.depth,0,pt,It,mt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{zt&&Zt&&e.texStorage2D(n.TEXTURE_2D,gt,Mt,Ut[0].width,Ut[0].height);for(let $=0,_t=Ut.length;$<_t;$++)mt=Ut[$],g.format!==Mn?pt!==null?zt?U&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Mt,mt.width,mt.height,0,mt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?U&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,mt.width,mt.height,pt,It,mt.data):e.texImage2D(n.TEXTURE_2D,$,Mt,mt.width,mt.height,0,pt,It,mt.data)}else if(g.isDataArrayTexture)if(zt){if(Zt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Mt,et.width,et.height,et.depth),U)if(g.layerUpdates.size>0){const $=rh(et.width,et.height,g.format,g.type);for(const _t of g.layerUpdates){const bt=et.data.subarray(_t*$/et.data.BYTES_PER_ELEMENT,(_t+1)*$/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,et.width,et.height,1,pt,It,bt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,It,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,et.width,et.height,et.depth,0,pt,It,et.data);else if(g.isData3DTexture)zt?(Zt&&e.texStorage3D(n.TEXTURE_3D,gt,Mt,et.width,et.height,et.depth),U&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,It,et.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,et.width,et.height,et.depth,0,pt,It,et.data);else if(g.isFramebufferTexture){if(Zt)if(zt)e.texStorage2D(n.TEXTURE_2D,gt,Mt,et.width,et.height);else{let $=et.width,_t=et.height;for(let bt=0;bt<gt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Mt,$,_t,0,pt,It,null),$>>=1,_t>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const $=n.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),et.parentNode!==$){$.appendChild(et),f.add(g),$.onpaint=_t=>{const bt=_t.changedElements;for(const it of f)bt.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{const bt=n.RGBA,it=n.RGBA,Nt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,bt,it,Nt,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(zt&&Zt){const $=ee(Ut[0]);e.texStorage2D(n.TEXTURE_2D,gt,Mt,$.width,$.height)}for(let $=0,_t=Ut.length;$<_t;$++)mt=Ut[$],zt?U&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,pt,It,mt):e.texImage2D(n.TEXTURE_2D,$,Mt,pt,It,mt);g.generateMipmaps=!1}else if(zt){if(Zt){const $=ee(et);e.texStorage2D(n.TEXTURE_2D,gt,Mt,$.width,$.height)}U&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt,It,et)}else e.texImage2D(n.TEXTURE_2D,0,Mt,pt,It,et);p(g)&&y(V),ft.__version=ht.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function Ot(A,g,O){if(g.image.length!==6)return;const V=jt(A,g),Z=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+O);const ht=i.get(Z);if(Z.version!==ht.__version||V===!0){e.activeTexture(n.TEXTURE0+O);const ft=ie.getPrimaries(ie.workingColorSpace),K=g.colorSpace===ti?null:ie.getPrimaries(g.colorSpace),et=g.colorSpace===ti||ft===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const pt=g.isCompressedTexture||g.image[0].isCompressedTexture,It=g.image[0]&&g.image[0].isDataTexture,Mt=[];for(let it=0;it<6;it++)!pt&&!It?Mt[it]=m(g.image[it],!0,s.maxCubemapSize):Mt[it]=It?g.image[it].image:g.image[it],Mt[it]=ce(g,Mt[it]);const mt=Mt[0],Ut=r.convert(g.format,g.colorSpace),zt=r.convert(g.type),Zt=v(g.internalFormat,Ut,zt,g.normalized,g.colorSpace),U=g.isVideoTexture!==!0,gt=ht.__version===void 0||V===!0,$=Z.dataReady;let _t=E(g,mt);Kt(n.TEXTURE_CUBE_MAP,g);let bt;if(pt){U&&gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Zt,mt.width,mt.height);for(let it=0;it<6;it++){bt=Mt[it].mipmaps;for(let Nt=0;Nt<bt.length;Nt++){const Lt=bt[Nt];g.format!==Mn?Ut!==null?U?$&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Lt.width,Lt.height,Ut,Lt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,Zt,Lt.width,Lt.height,0,Lt.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,Lt.width,Lt.height,Ut,zt,Lt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,Zt,Lt.width,Lt.height,0,Ut,zt,Lt.data)}}}else{if(bt=g.mipmaps,U&&gt){bt.length>0&&_t++;const it=ee(Mt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Zt,it.width,it.height)}for(let it=0;it<6;it++)if(It){U?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt[it].width,Mt[it].height,Ut,zt,Mt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,Mt[it].width,Mt[it].height,0,Ut,zt,Mt[it].data);for(let Nt=0;Nt<bt.length;Nt++){const ve=bt[Nt].image[it].image;U?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,ve.width,ve.height,Ut,zt,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,Zt,ve.width,ve.height,0,Ut,zt,ve.data)}}else{U?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ut,zt,Mt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Zt,Ut,zt,Mt[it]);for(let Nt=0;Nt<bt.length;Nt++){const Lt=bt[Nt];U?$&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,Ut,zt,Lt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,Zt,Ut,zt,Lt.image[it])}}}p(g)&&y(n.TEXTURE_CUBE_MAP),ht.__version=Z.version,g.onUpdate&&g.onUpdate(g)}A.__version=g.version}function at(A,g,O,V,Z,ht){const ft=r.convert(O.format,O.colorSpace),K=r.convert(O.type),et=v(O.internalFormat,ft,K,O.normalized,O.colorSpace),pt=i.get(g),It=i.get(O);if(It.__renderTarget=g,!pt.__hasExternalTextures){const Mt=Math.max(1,g.width>>ht),mt=Math.max(1,g.height>>ht);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,ht,et,Mt,mt,g.depth,0,ft,K,null):e.texImage2D(Z,ht,et,Mt,mt,0,ft,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,Z,It.__webglTexture,0,Vt(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,Z,It.__webglTexture,ht),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(A,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,A),g.depthBuffer){const V=g.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ht=T(g.stencilBuffer,Z),ft=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(g),ht,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(g),ht,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ht,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,A)}else{const V=g.textures;for(let Z=0;Z<V.length;Z++){const ht=V[Z],ft=r.convert(ht.format,ht.colorSpace),K=r.convert(ht.type),et=v(ht.internalFormat,ft,K,ht.normalized,ht.colorSpace);Xt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt(g),et,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt(g),et,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,et,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Gt(A,g,O){const V=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,g.depthTexture);const pt=r.convert(g.depthTexture.format),It=r.convert(g.depthTexture.type);let Mt;g.depthTexture.format===Zn?Mt=n.DEPTH_COMPONENT24:g.depthTexture.format===vi&&(Mt=n.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Mt,g.width,g.height,0,pt,It,null)}}else st(g.depthTexture,0);const ht=Z.__webglTexture,ft=Vt(g),K=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,et=g.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zn)Xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,K,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,et,K,ht,0);else if(g.depthTexture.format===vi)Xt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,K,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,et,K,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function J(A){const g=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==A.depthTexture){const V=A.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=V}if(A.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Gt(g.__webglFramebuffer[V],A,V);else{const V=A.texture.mipmaps;V&&V.length>0?Gt(g.__webglFramebuffer[0],A,0):Gt(g.__webglFramebuffer,A,0)}else if(O){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),Tt(g.__webglDepthbuffer[V],A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ht)}}else{const V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Tt(g.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ht)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(A,g,O){const V=i.get(A);g!==void 0&&at(V.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&J(A)}function lt(A){const g=A.texture,O=i.get(A),V=i.get(g);A.addEventListener("dispose",_);const Z=A.textures,ht=A.isWebGLCubeRenderTarget===!0,ft=Z.length>1;if(ft||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,a.memory.textures++),ht){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let et=0;et<g.mipmaps.length;et++)O.__webglFramebuffer[K][et]=n.createFramebuffer()}else O.__webglFramebuffer[K]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<g.mipmaps.length;K++)O.__webglFramebuffer[K]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ft)for(let K=0,et=Z.length;K<et;K++){const pt=i.get(Z[K]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Xt(A)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){const et=Z[K];O.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const pt=r.convert(et.format,et.colorSpace),It=r.convert(et.type),Mt=v(et.internalFormat,pt,It,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),mt=Vt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Mt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,O.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ht){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Kt(n.TEXTURE_CUBE_MAP,g);for(let K=0;K<6;K++)if(g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)at(O.__webglFramebuffer[K][et],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else at(O.__webglFramebuffer[K],A,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(g)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let K=0,et=Z.length;K<et;K++){const pt=Z[K],It=i.get(pt);let Mt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Mt,It.__webglTexture),Kt(Mt,pt),at(O.__webglFramebuffer,A,pt,n.COLOR_ATTACHMENT0+K,Mt,0),p(pt)&&y(Mt)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,V.__webglTexture),Kt(K,g),g.mipmaps&&g.mipmaps.length>0)for(let et=0;et<g.mipmaps.length;et++)at(O.__webglFramebuffer[et],A,g,n.COLOR_ATTACHMENT0,K,et);else at(O.__webglFramebuffer,A,g,n.COLOR_ATTACHMENT0,K,0);p(g)&&y(K),e.unbindTexture()}A.depthBuffer&&J(A)}function ct(A){const g=A.textures;for(let O=0,V=g.length;O<V;O++){const Z=g[O];if(p(Z)){const ht=w(A),ft=i.get(Z).__webglTexture;e.bindTexture(ht,ft),y(ht),e.unbindTexture()}}}const dt=[],Bt=[];function Ft(A){if(A.samples>0){if(Xt(A)===!1){const g=A.textures,O=A.width,V=A.height;let Z=n.COLOR_BUFFER_BIT;const ht=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(A),K=g.length>1;if(K)for(let pt=0;pt<g.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);const et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let pt=0;pt<g.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);const It=i.get(g[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,O,V,0,0,O,V,Z,n.NEAREST),l===!0&&(dt.length=0,Bt.length=0,dt.push(n.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(dt.push(ht),Bt.push(ht),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let pt=0;pt<g.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[pt]);const It=i.get(g[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){const g=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Vt(A){return Math.min(s.maxSamples,A.samples)}function Xt(A){const g=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function L(A){const g=a.render.frame;h.get(A)!==g&&(h.set(A,g),A.update())}function ce(A,g){const O=A.colorSpace,V=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==qs&&O!==ti&&(ie.getTransfer(O)===fe?(V!==Mn||Z!==rn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",O)),g}function ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=nt,this.rebindTextures=rt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ku(n,t){function e(i,s=ti){let r;const a=ie.getTransfer(s);if(i===rn)return n.UNSIGNED_BYTE;if(i===Va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ll)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rl)return n.BYTE;if(i===Cl)return n.SHORT;if(i===fs)return n.UNSIGNED_SHORT;if(i===Ha)return n.INT;if(i===Fn)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===On)return n.HALF_FLOAT;if(i===Dl)return n.ALPHA;if(i===Il)return n.RGB;if(i===Mn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===Ya)return n.RG_INTEGER;if(i===qa)return n.RGBA_INTEGER;if(i===Ns||i===Fs||i===Os||i===Bs)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===na||i===ia||i===sa||i===ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===na)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ia)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===aa||i===oa||i===la||i===ca||i===ha||i===Xs||i===ua)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===aa||i===oa)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===la)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ca)return r.COMPRESSED_R11_EAC;if(i===ha)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Xs)return r.COMPRESSED_RG11_EAC;if(i===ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===fa||i===da||i===pa||i===ma||i===ga||i===_a||i===xa||i===va||i===Ma||i===Sa||i===ya||i===Ea||i===ba||i===Ta)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===fa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===da)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===pa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ma)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ga)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_a)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===va)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ma)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ya)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ea)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ba)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ta)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Aa||i===wa||i===Ra)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Aa)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ca||i===Pa||i===Ys||i===La)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ca)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ys)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===La)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ds?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const b_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T_=`
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

}`;class A_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Hl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new En({vertexShader:b_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new Gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w_ extends oi{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null;const S=typeof XRWebGLBinding<"u",m=new A_,p={},y=e.getContextAttributes();let w=null,v=null;const T=[],E=[],R=new ot;let _=null,b=null;const P=new cn;P.viewport=new be;const D=new cn;D.viewport=new be;const F=[P,D],z=new ku;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=T[q];return tt===void 0&&(tt=new Wr,T[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=T[q];return tt===void 0&&(tt=new Wr,T[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=T[q];return tt===void 0&&(tt=new Wr,T[q]=tt),tt.getHandSpace()};function W(q){const tt=E.indexOf(q.inputSource);if(tt===-1)return;const xt=T[tt];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||a),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",st);for(let q=0;q<T.length;q++){const tt=E[q];tt!==null&&(E[q]=null,T[q].disconnect(tt))}N=null,B=null,m.reset();for(const q in p)delete p[q];if(t.setRenderTarget(w),d=null,u=null,f=null,s=null,v=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),b!==null){const q=b.camera;q.fov=b.fov,q.zoom=b.zoom,q.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&S&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",st),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ot=null,at=null;y.depth&&(at=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=y.stencil?vi:Zn,Ot=y.stencil?ds:Fn);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Tt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Sn(u.textureWidth,u.textureHeight,{format:Mn,type:rn,depthTexture:new ms(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const xt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Sn(d.framebufferWidth,d.framebufferHeight,{format:Mn,type:rn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(q){for(let tt=0;tt<q.removed.length;tt++){const xt=q.removed[tt],Ot=E.indexOf(xt);Ot>=0&&(E[Ot]=null,T[Ot].disconnect(xt))}for(let tt=0;tt<q.added.length;tt++){const xt=q.added[tt];let Ot=E.indexOf(xt);if(Ot===-1){for(let Tt=0;Tt<T.length;Tt++)if(Tt>=E.length){E.push(xt),Ot=Tt;break}else if(E[Tt]===null){E[Tt]=xt,Ot=Tt;break}if(Ot===-1)break}const at=T[Ot];at&&at.connect(xt)}}const Y=new C,Q=new C;function nt(q,tt,xt){Y.setFromMatrixPosition(tt.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);const Ot=Y.distanceTo(Q),at=tt.projectionMatrix.elements,Tt=xt.projectionMatrix.elements,Gt=at[14]/(at[10]-1),J=at[14]/(at[10]+1),rt=(at[9]+1)/at[5],lt=(at[9]-1)/at[5],ct=(at[8]-1)/at[0],dt=(Tt[8]+1)/Tt[0],Bt=Gt*ct,Ft=Gt*dt,Vt=Ot/(-ct+dt),Xt=Vt*-ct;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Xt),q.translateZ(Vt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),at[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const L=Gt+Vt,ce=J+Vt,ee=Bt-Xt,A=Ft+(Ot-Xt),g=rt*J/ce*L,O=lt*J/ce*L;q.projectionMatrix.makePerspective(ee,A,g,O,L,ce),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Rt(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let tt=q.near,xt=q.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),z.near=D.near=P.near=tt,z.far=D.far=P.far=xt,(N!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,B=z.far),z.layers.mask=q.layers.mask|6,P.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;const Ot=q.parent,at=z.cameras;Rt(z,Ot);for(let Tt=0;Tt<at.length;Tt++)Rt(at[Tt],Ot);at.length===2?nt(z,P,D):z.projectionMatrix.copy(P.projectionMatrix),b===null&&q.isPerspectiveCamera&&(b={camera:q,fov:q.fov,zoom:q.zoom}),Et(q,z,Ot)};function Et(q,tt,xt){xt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ks*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return p[q]};let se=null;function Kt(q,tt){if(h=tt.getViewerPose(c||a),x=tt,h!==null){const xt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ot=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,Ot=!0);for(let J=0;J<xt.length;J++){const rt=xt[J];let lt=null;if(d!==null)lt=d.getViewport(rt);else{const dt=f.getViewSubImage(u,rt);lt=dt.viewport,J===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let ct=F[J];ct===void 0&&(ct=new cn,ct.layers.enable(J),ct.viewport=new be,F[J]=ct),ct.matrix.fromArray(rt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(rt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),J===0&&(z.matrix.copy(ct.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ot===!0&&z.cameras.push(ct)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){f=i.getBinding();const J=f.getDepthInformation(xt[0]);J&&J.isValid&&J.texture&&m.init(J,s.renderState)}if(at&&at.includes("camera-access")&&S){t.state.unbindTexture(),f=i.getBinding();for(let J=0;J<xt.length;J++){const rt=xt[J].camera;if(rt){let lt=p[rt];lt||(lt=new Hl,p[rt]=lt);const ct=f.getCameraImage(rt);lt.sourceTexture=ct}}}}for(let xt=0;xt<T.length;xt++){const Ot=E[xt],at=T[xt];Ot!==null&&at!==void 0&&at.update(Ot,tt,c||a)}se&&se(q,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),x=null}const jt=new Vu;jt.setAnimationLoop(Kt),this.setAnimationLoop=function(q){se=q},this.dispose=function(){}}}const R_=new xe,Ju=new Wt;Ju.set(-1,0,0,0,1,0,0,0,1);function C_(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Du(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(R_.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ju),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P_(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){const E=T.program;i.uniformBlockBinding(v,E)}function c(v,T){let E=s[v.id];E===void 0&&(m(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",y));const R=T.program;i.updateUBOMapping(v,R);const _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){const T=f();v.__bindingPointIndex=T;const E=n.createBuffer(),R=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const T=s[v.id],E=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let _=0,b=E.length;_<b;_++){const P=E[_];if(Array.isArray(P))for(let D=0,F=P.length;D<F;D++)d(P[D],_,D,R);else d(P,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,T,E,R){if(S(v,T,E,R)===!0){const _=v.__offset,b=v.value;if(Array.isArray(b)){let P=0;for(let D=0;D<b.length;D++){const F=b[D],z=p(F);x(F,v.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,v.__data)}}function x(v,T,E){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,E)}function S(v,T,E,R){const _=v.value,b=T+"_"+E;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const P=R[b];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(v){const T=v.uniforms;let E=0;const R=16;for(let b=0,P=T.length;b<P;b++){const D=Array.isArray(T[b])?T[b]:[T[b]];for(let F=0,z=D.length;F<z;F++){const N=D[F],B=Array.isArray(N.value)?N.value:[N.value];for(let W=0,H=B.length;W<H;W++){const st=B[W],Y=p(st),Q=E%R,nt=Q%Y.boundary,Rt=Q+nt;E+=nt,Rt!==0&&R-Rt<Y.storage&&(E+=R-Rt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=Y.storage}}}const _=E%R;return _>0&&(E+=R-_),v.__size=E,v.__cache={},this}function p(v){const T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",v),T}function y(v){const T=v.target;T.removeEventListener("dispose",y);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function w(){for(const v in s)n.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}const L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function D_(){return Vn===null&&(Vn=new Su(L_,16,16,Ei,On),Vn.name="DFG_LUT",Vn.minFilter=We,Vn.magFilter=We,Vn.wrapS=Yn,Vn.wrapT=Yn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class $u{constructor(t={}){const{canvas:e=pu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=rn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const S=d,m=new Set([qa,Ya,Xa]),p=new Set([rn,Fn,fs,ds,Va,Wa]),y=new Uint32Array(4),w=new Int32Array(4),v=new C;let T=null,E=null;const R=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let D=!1,F=null,z=null,N=null,B=null;this._outputColorSpace=Je;let W=0,H=0,st=null,Y=-1,Q=null;const nt=new be,Rt=new be;let Et=null;const se=new te(0);let Kt=0,jt=e.width,q=e.height,tt=1,xt=null,Ot=null;const at=new be(0,0,jt,q),Tt=new be(0,0,jt,q);let Gt=!1;const J=new ja;let rt=!1,lt=!1;const ct=new xe,dt=new C,Bt=new be,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return st===null?tt:1}let L=i;function ce(M,I){return e.getContext(M,I)}let ee,A,g,O,V,Z,ht,ft,K,et,pt,It,Mt,mt,Ut,zt,Zt,U,gt,$,_t,bt,it;try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",bn,!1),L===null){const I="webgl2";if(L=ce(I,M),L===null)throw ce(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(M){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),re("WebGLRenderer: "+M.message),M}function Nt(){ee=new Ig(L),ee.init(),_t=new Ku(L,ee),A=new Eg(L,ee,t,_t),g=new y_(L,ee),A.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),z=L.createFramebuffer(),N=L.createFramebuffer(),B=L.createFramebuffer(),O=new Fg(L),V=new l_,Z=new E_(L,ee,g,V,A,_t,O),ht=new Dg(P),ft=new Bd(L),bt=new Sg(L,ft),K=new Ug(L,ft,O,bt),et=new Bg(L,K,ft,bt,O),U=new Og(L,A,Z),Ut=new bg(V),pt=new o_(P,ht,ee,A,bt,Ut),It=new C_(P,V),Mt=new h_,mt=new g_(ee),Zt=new Mg(P,ht,g,et,x,l),zt=new S_(P,et,A),it=new P_(L,O,A,g),gt=new yg(L,ee,O),$=new Ng(L,ee,O),O.programs=pt.programs,P.capabilities=A,P.extensions=ee,P.properties=V,P.renderLists=Mt,P.shadowMap=zt,P.state=g,P.info=O}S!==rn&&(b=new kg(S,e.width,e.height,o,s,r));const Lt=new w_(P,L);this.xr=Lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const M=ee.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ee.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(jt,q,!1))},this.getSize=function(M){return M.set(jt,q)},this.setSize=function(M,I,X=!0){if(Lt.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=M,q=I,e.width=Math.floor(M*tt),e.height=Math.floor(I*tt),X===!0&&(e.style.width=M+"px",e.style.height=I+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(jt*tt,q*tt).floor()},this.setDrawingBufferSize=function(M,I,X){jt=M,q=I,tt=X,e.width=Math.floor(M*X),e.height=Math.floor(I*X),this.setViewport(0,0,M,I)},this.setEffects=function(M){if(S===rn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let I=0;I<M.length;I++)if(M[I].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(nt)},this.getViewport=function(M){return M.copy(at)},this.setViewport=function(M,I,X,k){M.isVector4?at.set(M.x,M.y,M.z,M.w):at.set(M,I,X,k),g.viewport(nt.copy(at).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Tt)},this.setScissor=function(M,I,X,k){M.isVector4?Tt.set(M.x,M.y,M.z,M.w):Tt.set(M,I,X,k),g.scissor(Rt.copy(Tt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(M){g.setScissorTest(Gt=M)},this.setOpaqueSort=function(M){xt=M},this.setTransparentSort=function(M){Ot=M},this.getClearColor=function(M){return M.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(M=!0,I=!0,X=!0){let k=0;if(M){let G=!1;if(st!==null){const yt=st.texture.format;G=m.has(yt)}if(G){const yt=st.texture.type,wt=p.has(yt),St=Zt.getClearColor(),Ct=Zt.getClearAlpha(),Dt=St.r,$t=St.g,ne=St.b;wt?(y[0]=Dt,y[1]=$t,y[2]=ne,y[3]=Ct,L.clearBufferuiv(L.COLOR,0,y)):(w[0]=Dt,w[1]=$t,w[2]=ne,w[3]=Ct,L.clearBufferiv(L.COLOR,0,w))}else k|=L.COLOR_BUFFER_BIT}I&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Zt.dispose(),Mt.dispose(),mt.dispose(),V.dispose(),ht.dispose(),et.dispose(),bt.dispose(),it.dispose(),pt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",vc),Lt.removeEventListener("sessionend",Mc),Ai.stop()};function ve(M){M.preventDefault(),nl("WebGLRenderer: Context Lost."),D=!0}function he(){nl("WebGLRenderer: Context Restored."),D=!1;const M=O.autoReset,I=zt.enabled,X=zt.autoUpdate,k=zt.needsUpdate,G=zt.type;Nt(),O.autoReset=M,zt.enabled=I,zt.autoUpdate=X,zt.needsUpdate=k,zt.type=G}function bn(M){re("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kn(M){const I=M.target;I.removeEventListener("dispose",kn),mf(I)}function mf(M){gf(M),V.remove(M)}function gf(M){const I=V.get(M).programs;I!==void 0&&(I.forEach(function(X){pt.releaseProgram(X)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,X,k,G,yt){I===null&&(I=Ft);const wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,St=vf(M,I,X,k,G);g.setMaterial(k,wt);let Ct=X.index,Dt=1;if(k.wireframe===!0){if(Ct=K.getWireframeAttribute(X),Ct===void 0)return;Dt=2}const $t=X.drawRange,ne=X.attributes.position;let Pt=$t.start*Dt,ue=($t.start+$t.count)*Dt;yt!==null&&(Pt=Math.max(Pt,yt.start*Dt),ue=Math.min(ue,(yt.start+yt.count)*Dt)),Ct!==null?(Pt=Math.max(Pt,0),ue=Math.min(ue,Ct.count)):ne!=null&&(Pt=Math.max(Pt,0),ue=Math.min(ue,ne.count));const Ce=ue-Pt;if(Ce<0||Ce===1/0)return;bt.setup(G,k,St,X,Ct);let ye,_e=gt;if(Ct!==null&&(ye=ft.get(Ct),_e=$,_e.setIndex(ye)),G.isMesh)k.wireframe===!0?(g.setLineWidth(k.wireframeLinewidth*Xt()),_e.setMode(L.LINES)):_e.setMode(L.TRIANGLES);else if(G.isLine){let qe=k.linewidth;qe===void 0&&(qe=1),g.setLineWidth(qe*Xt()),G.isLineSegments?_e.setMode(L.LINES):G.isLineLoop?_e.setMode(L.LINE_LOOP):_e.setMode(L.LINE_STRIP)}else G.isPoints?_e.setMode(L.POINTS):G.isSprite&&_e.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))_e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,At=G._multiDrawCounts,Qe=G._multiDrawCount,oe=Ct?ft.get(Ct).bytesPerElement:1,dn=V.get(k).currentProgram.getUniforms();for(let Gn=0;Gn<Qe;Gn++)dn.setValue(L,"_gl_DrawID",Gn),_e.render(qe[Gn]/oe,At[Gn])}else if(G.isInstancedMesh)_e.renderInstances(Pt,Ce,G.count);else if(X.isInstancedBufferGeometry){const qe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,At=Math.min(X.instanceCount,qe);_e.renderInstances(Pt,Ce,At)}else _e.render(Pt,Ce)};function xc(M,I,X,k){F!==null&&M.isNodeMaterial&&F.setObject(k,M),rt===!0&&Ut.setState(M,X,!1),M.transparent===!0&&M.side===xn&&M.forceSinglePass===!1?(M.side=en,M.needsUpdate=!0,dr(M,I,k),M.side=Si,M.needsUpdate=!0,dr(M,I,k),M.side=xn):dr(M,I,k)}this.compile=function(M,I,X=null){X===null&&(X=M),F!==null&&F.renderStart(M,I,X),E=mt.get(X),E.init(I),_.push(E),X.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),M!==X&&M.traverseVisible(function(G){G.isLight&&G.layers.test(I.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),lt=this.localClippingEnabled,rt=Ut.init(this.clippingPlanes,lt),rt===!0&&Ut.setGlobalState(this.clippingPlanes,I),F!==null&&zt.render(E.state.shadowsArray,X,I);const k=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const yt=G.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){const St=yt[wt];xc(St,X,I,G),k.add(St)}else xc(yt,X,I,G),k.add(yt)}),E=_.pop(),F!==null&&F.renderEnd(),k},this.compileAsync=function(M,I,X=null){const k=this.compile(M,I,X);return new Promise(G=>{function yt(){if(k.forEach(function(wt){const Ct=V.get(wt).currentProgram;(Ct===void 0||Ct.isReady())&&k.delete(wt)}),k.size===0){G(M);return}setTimeout(yt,10)}ee.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let go=null;function _f(M){go&&go(M)}function vc(){Ai.stop()}function Mc(){Ai.start()}const Ai=new Vu;Ai.setAnimationLoop(_f),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(M){go=M,Lt.setAnimationLoop(M),M===null?Ai.stop():Ai.start()},Lt.addEventListener("sessionstart",vc),Lt.addEventListener("sessionend",Mc),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(M,I);const X=Lt.enabled===!0&&Lt.isPresenting===!0,k=b!==null&&(st===null||X)&&b.begin(P,st);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(I),I=Lt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,I,st),E=mt.get(M,_.length),E.init(I),E.state.textureUnits=Z.getTextureUnits(),_.push(E),ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),J.setFromProjectionMatrix(ct,Ln,I.reversedDepth),lt=this.localClippingEnabled,rt=Ut.init(this.clippingPlanes,lt),T=Mt.get(M,R.length),T.init(),R.push(T),Lt.enabled===!0&&Lt.isPresenting===!0){const wt=P.xr.getDepthSensingMesh();wt!==null&&_o(wt,I,-1/0,P.sortObjects)}_o(M,I,0,P.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),P.sortObjects===!0&&T.sort(xt,Ot),Vt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Vt&&Zt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Ut.beginShadows();const G=E.state.shadowsArray;if(zt.render(G,M,I),rt===!0&&Ut.endShadows(),(k&&b.hasRenderPass())===!1){const wt=T.opaque,St=T.transmissive;if(E.setupLights(),I.isArrayCamera){const Ct=I.cameras;if(St.length>0)for(let Dt=0,$t=Ct.length;Dt<$t;Dt++){const ne=Ct[Dt];yc(wt,St,M,ne)}Vt&&Zt.render(M);for(let Dt=0,$t=Ct.length;Dt<$t;Dt++){const ne=Ct[Dt];Sc(T,M,ne,ne.viewport)}}else St.length>0&&yc(wt,St,M,I),Vt&&Zt.render(M),Sc(T,M,I)}st!==null&&H===0&&(Z.updateMultisampleRenderTarget(st),Z.updateRenderTargetMipmap(st)),k&&b.end(P),M.isScene===!0&&M.onAfterRender(P,M,I),bt.resetDefaultState(),Y=-1,Q=null,_.pop(),_.length>0?(E=_[_.length-1],Z.setTextureUnits(E.state.textureUnits),rt===!0&&Ut.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,F!==null&&F.renderEnd()};function _o(M,I,X,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLightProbeGrid)E.pushLightProbeGrid(M);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(J)){k&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);const wt=et.update(M),St=M.material;St.visible&&T.push(M,wt,St,X,Bt.z,null,I)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(J))){const wt=et.update(M),St=M.material;if(k&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Bt.copy(wt.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)),Array.isArray(St)){const Ct=wt.groups;for(let Dt=0,$t=Ct.length;Dt<$t;Dt++){const ne=Ct[Dt],Pt=St[ne.materialIndex];Pt&&Pt.visible&&T.push(M,wt,Pt,X,Bt.z,ne,I)}}else St.visible&&T.push(M,wt,St,X,Bt.z,null,I)}}const yt=M.children;for(let wt=0,St=yt.length;wt<St;wt++)_o(yt[wt],I,X,k)}function Sc(M,I,X,k){const{opaque:G,transmissive:yt,transparent:wt}=M;E.setupLightsView(X),rt===!0&&Ut.setGlobalState(P.clippingPlanes,X),k&&g.viewport(nt.copy(k)),G.length>0&&fr(G,I,X),yt.length>0&&fr(yt,I,X),wt.length>0&&fr(wt,I,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function yc(M,I,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){const Pt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new Sn(1,1,{generateMipmaps:!0,type:Pt?On:rn,minFilter:xi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}const yt=E.state.transmissionRenderTarget[k.id],wt=k.viewport||nt;yt.setSize(wt.z*P.transmissionResolutionScale,wt.w*P.transmissionResolutionScale);const St=P.getRenderTarget(),Ct=P.getActiveCubeFace(),Dt=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(se),Kt=P.getClearAlpha(),Kt<1&&P.setClearColor(16777215,.5),P.clear(),Vt&&Zt.render(X);const $t=P.toneMapping;P.toneMapping=Dn;const ne=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),rt===!0&&Ut.setGlobalState(P.clippingPlanes,k),fr(M,X,k),Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ue=0,Ce=I.length;ue<Ce;ue++){const ye=I[ue],{object:_e,geometry:qe,material:At,group:Qe}=ye;if(At.side===xn&&_e.layers.test(k.layers)){const oe=At.side;At.side=en,At.needsUpdate=!0,Ec(_e,X,k,qe,At,Qe),At.side=oe,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(Z.updateMultisampleRenderTarget(yt),Z.updateRenderTargetMipmap(yt))}P.setRenderTarget(St,Ct,Dt),P.setClearColor(se,Kt),ne!==void 0&&(k.viewport=ne),P.toneMapping=$t}function fr(M,I,X){const k=I.isScene===!0?I.overrideMaterial:null;for(let G=0,yt=M.length;G<yt;G++){const wt=M[G],{object:St,geometry:Ct,group:Dt}=wt;let $t=wt.material;$t.allowOverride===!0&&k!==null&&($t=k),St.layers.test(X.layers)&&Ec(St,I,X,Ct,$t,Dt)}}function Ec(M,I,X,k,G,yt){F!==null&&G.isNodeMaterial&&F.setObject(M,G),M.onBeforeRender(P,I,X,k,G,yt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(P,I,X,k,M,yt),G.transparent===!0&&G.side===xn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,P.renderBufferDirect(X,I,k,G,M,yt),G.side=Si,G.needsUpdate=!0,P.renderBufferDirect(X,I,k,G,M,yt),G.side=xn):P.renderBufferDirect(X,I,k,G,M,yt),M.onAfterRender(P,I,X,k,G,yt)}function dr(M,I,X){I.isScene!==!0&&(I=Ft);const k=V.get(M),G=E.state.lights,yt=E.state.shadowsArray,wt=G.state.version,St=pt.getParameters(M,G.state,yt,I,X,E.state.lightProbeGridArray),Ct=pt.getProgramCacheKey(St);let Dt=k.programs;k.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?I.environment:null,k.fog=I.fog;const $t=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;k.envMap=ht.get(M.envMap||k.environment,$t),k.envMapRotation=k.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Dt===void 0&&(M.addEventListener("dispose",kn),Dt=new Map,k.programs=Dt);let ne=Dt.get(Ct);if(ne!==void 0){if(k.currentProgram===ne&&k.lightsStateVersion===wt)return Tc(M,St),ne}else St.uniforms=pt.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,X,St),M.onBeforeCompile(St,P),ne=pt.acquireProgram(St,Ct),Dt.set(Ct,ne),k.uniforms=St.uniforms;const Pt=k.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=Ut.uniform),Tc(M,St),k.needsLights=Sf(M),k.lightsStateVersion=wt,k.needsLights&&(Pt.ambientLightColor.value=G.state.ambient,Pt.lightProbe.value=G.state.probe,Pt.sunLights.value=G.state.sun,Pt.sunLightShadows.value=G.state.sunShadow,Pt.directionalLights.value=G.state.directional,Pt.directionalLightShadows.value=G.state.directionalShadow,Pt.spotLights.value=G.state.spot,Pt.spotLightShadows.value=G.state.spotShadow,Pt.rectAreaLights.value=G.state.rectArea,Pt.ltc_1.value=G.state.rectAreaLTC1,Pt.ltc_2.value=G.state.rectAreaLTC2,Pt.pointLights.value=G.state.point,Pt.pointLightShadows.value=G.state.pointShadow,Pt.hemisphereLights.value=G.state.hemi,Pt.sunShadowMatrix.value=G.state.sunShadowMatrix,Pt.sunShadowCascade.value=G.state.sunShadowCascade,Pt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Pt.spotLightMatrix.value=G.state.spotLightMatrix,Pt.spotLightMap.value=G.state.spotLightMap,Pt.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=E.state.lightProbeGridArray.length>0,k.currentProgram=ne,k.uniformsList=null,ne}function bc(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Xr.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function Tc(M,I){const X=V.get(M);X.outputColorSpace=I.outputColorSpace,X.batching=I.batching,X.batchingColor=I.batchingColor,X.instancing=I.instancing,X.instancingColor=I.instancingColor,X.instancingMorph=I.instancingMorph,X.skinning=I.skinning,X.morphTargets=I.morphTargets,X.morphNormals=I.morphNormals,X.morphColors=I.morphColors,X.morphTargetsCount=I.morphTargetsCount,X.numClippingPlanes=I.numClippingPlanes,X.numIntersection=I.numClipIntersection,X.vertexAlphas=I.vertexAlphas,X.vertexTangents=I.vertexTangents,X.toneMapping=I.toneMapping}function xf(M,I){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(I.matrixWorld);for(let X=0,k=M.length;X<k;X++){const G=M[X];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function vf(M,I,X,k,G){I.isScene!==!0&&(I=Ft),Z.resetTextureUnits();const yt=I.fog,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?I.environment:null,St=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ie.workingColorSpace,Ct=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=ht.get(k.envMap||wt,Ct),$t=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ne=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Pt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color;let ye=Dn;k.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ye=P.toneMapping);const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qe=_e!==void 0?_e.length:0,At=V.get(k),Qe=E.state.lights;if(rt===!0&&(lt===!0||M!==Q)){const Me=M===Q&&k.id===Y;Ut.setState(k,M,Me)}let oe=!1;k.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Qe.state.version||At.outputColorSpace!==St||G.isBatchedMesh&&At.batching===!1||!G.isBatchedMesh&&At.batching===!0||G.isBatchedMesh&&At.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&At.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&At.instancing===!1||!G.isInstancedMesh&&At.instancing===!0||G.isSkinnedMesh&&At.skinning===!1||!G.isSkinnedMesh&&At.skinning===!0||G.isInstancedMesh&&At.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&At.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&At.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&At.instancingMorph===!1&&G.morphTexture!==null||At.envMap!==Dt||k.fog===!0&&At.fog!==yt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ut.numPlanes||At.numIntersection!==Ut.numIntersection)||At.vertexAlphas!==$t||At.vertexTangents!==ne||At.morphTargets!==Pt||At.morphNormals!==ue||At.morphColors!==Ce||At.toneMapping!==ye||At.morphTargetsCount!==qe||!!At.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,At.__version=k.version);let dn=At.currentProgram;oe===!0&&(dn=dr(k,I,G),F&&k.isNodeMaterial&&F.onUpdateProgram(k,dn,At));let Gn=!1,ci=!1,Wi=!1;const me=dn.getUniforms(),Re=At.uniforms;if(g.useProgram(dn.program)&&(Gn=!0,ci=!0,Wi=!0),k.id!==Y&&(Y=k.id,ci=!0),At.needsLights){const Me=xf(E.state.lightProbeGridArray,G);At.lightProbeGrid!==Me&&(At.lightProbeGrid=Me,ci=!0)}if(Gn||Q!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),me.setValue(L,"projectionMatrix",M.projectionMatrix),me.setValue(L,"viewMatrix",M.matrixWorldInverse);const ui=me.map.cameraPosition;ui!==void 0&&ui.setValue(L,dt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&me.setValue(L,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(L,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,ci=!0,Wi=!0)}if(At.needsLights&&(Qe.state.sunShadowMap.length>0&&me.setValue(L,"sunShadowMap",Qe.state.sunShadowMap,Z),Qe.state.directionalShadowMap.length>0&&me.setValue(L,"directionalShadowMap",Qe.state.directionalShadowMap,Z),Qe.state.spotShadowMap.length>0&&me.setValue(L,"spotShadowMap",Qe.state.spotShadowMap,Z),Qe.state.pointShadowMap.length>0&&me.setValue(L,"pointShadowMap",Qe.state.pointShadowMap,Z)),G.isSkinnedMesh){me.setOptional(L,G,"bindMatrix"),me.setOptional(L,G,"bindMatrixInverse");const Me=G.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),me.setValue(L,"boneTexture",Me.boneTexture,Z))}G.isBatchedMesh&&(me.setOptional(L,G,"batchingTexture"),me.setValue(L,"batchingTexture",G._matricesTexture,Z),me.setOptional(L,G,"batchingIdTexture"),me.setValue(L,"batchingIdTexture",G._indirectTexture,Z),me.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&me.setValue(L,"batchingColorTexture",G._colorsTexture,Z));const hi=X.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&U.update(G,X,dn),(ci||At.receiveShadow!==G.receiveShadow)&&(At.receiveShadow=G.receiveShadow,me.setValue(L,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&I.environment!==null&&(Re.envMapIntensity.value=I.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=D_()),ci){if(me.setValue(L,"toneMappingExposure",P.toneMappingExposure),At.needsLights&&Mf(Re,Wi),yt&&k.fog===!0&&It.refreshFogUniforms(Re,yt),It.refreshMaterialUniforms(Re,k,tt,q,E.state.transmissionRenderTarget[M.id]),At.needsLights&&At.lightProbeGrid){const Me=At.lightProbeGrid;Re.probesSH.value=Me.texture,Re.probesMin.value.copy(Me.boundingBox.min),Re.probesMax.value.copy(Me.boundingBox.max),Re.probesResolution.value.copy(Me.resolution)}Xr.upload(L,bc(At),Re,Z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xr.upload(L,bc(At),Re,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(L,"center",G.center),me.setValue(L,"modelViewMatrix",G.modelViewMatrix),me.setValue(L,"normalMatrix",G.normalMatrix),me.setValue(L,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){const Me=k.uniformsGroups;for(let ui=0,Xi=Me.length;ui<Xi;ui++){const wc=Me[ui];it.update(wc,dn),it.bind(wc,dn)}}return dn}function Mf(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.sunLights.needsUpdate=I,M.sunLightShadows.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Sf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(M,I,X){const k=V.get(M);k.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=I,V.get(M.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,I){const X=V.get(M);X.__webglFramebuffer=I,X.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,X=0){st=M,W=I,H=X;let k=null,G=!1,yt=!1;if(M){const St=V.get(M);if(St.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(L.FRAMEBUFFER,St.__webglFramebuffer),nt.copy(M.viewport),Rt.copy(M.scissor),Et=M.scissorTest,g.viewport(nt),g.scissor(Rt),g.setScissorTest(Et),Y=-1;return}else if(St.__webglFramebuffer===void 0)Z.setupRenderTarget(M);else if(St.__hasExternalTextures)Z.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const $t=M.depthTexture;if(St.__boundDepthTexture!==$t){if($t!==null&&V.has($t)&&(M.width!==$t.image.width||M.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(M)}}const Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(yt=!0);const Dt=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Dt[I])?k=Dt[I][X]:k=Dt[I],G=!0):M.samples>0&&Z.useMultisampledRTT(M)===!1?k=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[X]:k=Dt,nt.copy(M.viewport),Rt.copy(M.scissor),Et=M.scissorTest}else nt.copy(at).multiplyScalar(tt).floor(),Rt.copy(Tt).multiplyScalar(tt).floor(),Et=Gt;if(X!==0&&(k=z),g.bindFramebuffer(L.FRAMEBUFFER,k)&&g.drawBuffers(M,k),g.viewport(nt),g.scissor(Rt),g.setScissorTest(Et),G){const St=V.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,St.__webglTexture,X)}else if(yt){const St=I;for(let Ct=0;Ct<M.textures.length;Ct++){const Dt=V.get(M.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,X,St)}}else if(M!==null&&X!==0){const St=V.get(M.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,St.__webglTexture,X)}Y=-1};function Ac(M){const I=V.get(M);return(I.__readFormat!==M.format||I.__readType!==M.type)&&(I.__readFormat=M.format,I.__readType=M.type,I.__formatReadable=A.textureFormatReadable(M.format),I.__typeReadable=A.textureTypeReadable(M.type)),I}this.readRenderTargetPixels=function(M,I,X,k,G,yt,wt,St=0){if(!(M&&M.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){g.bindFramebuffer(L.FRAMEBUFFER,Ct);try{const Dt=M.textures[St],$t=Dt.format,ne=Dt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+St);const Pt=Ac(Dt);if(Pt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&X>=0&&X<=M.height-G&&L.readPixels(I,X,k,G,_t.convert($t),_t.convert(ne),yt)}finally{const Dt=st!==null?V.get(st).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(M,I,X,k,G,yt,wt,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(I>=0&&I<=M.width-k&&X>=0&&X<=M.height-G){g.bindFramebuffer(L.FRAMEBUFFER,Ct);const Dt=M.textures[St],$t=Dt.format,ne=Dt.type;M.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+St);const Pt=Ac(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ue),L.bufferData(L.PIXEL_PACK_BUFFER,yt.byteLength,L.STREAM_READ),L.readPixels(I,X,k,G,_t.convert($t),_t.convert(ne),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);const Ce=st!==null?V.get(st).__webglFramebuffer:null;g.bindFramebuffer(L.FRAMEBUFFER,Ce);const ye=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ef(L,ye,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,yt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ue),L.deleteSync(ye),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,I=null,X=0){const k=Math.pow(2,-X),G=Math.floor(M.image.width*k),yt=Math.floor(M.image.height*k),wt=I!==null?I.x:0,St=I!==null?I.y:0;Z.setTexture2D(M,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,wt,St,G,yt),g.unbindTexture()},this.copyTextureToTexture=function(M,I,X=null,k=null,G=0,yt=0){let wt,St,Ct,Dt,$t,ne,Pt,ue,Ce;const ye=M.isCompressedTexture?M.mipmaps[yt]:M.image;if(X!==null)wt=X.max.x-X.min.x,St=X.max.y-X.min.y,Ct=X.isBox3?X.max.z-X.min.z:1,Dt=X.min.x,$t=X.min.y,ne=X.isBox3?X.min.z:0;else{const Re=Math.pow(2,-G);wt=Math.floor(ye.width*Re),St=Math.floor(ye.height*Re),M.isDataArrayTexture?Ct=ye.depth:M.isData3DTexture?Ct=Math.floor(ye.depth*Re):Ct=1,Dt=0,$t=0,ne=0}k!==null?(Pt=k.x,ue=k.y,Ce=k.z):(Pt=0,ue=0,Ce=0);const _e=_t.convert(I.format),qe=_t.convert(I.type);let At;I.isData3DTexture?(Z.setTexture3D(I,0),At=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Z.setTexture2DArray(I,0),At=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(I,0),At=L.TEXTURE_2D),g.activeTexture(L.TEXTURE0),g.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),g.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),g.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Qe=g.getParameter(L.UNPACK_ROW_LENGTH),oe=g.getParameter(L.UNPACK_IMAGE_HEIGHT),dn=g.getParameter(L.UNPACK_SKIP_PIXELS),Gn=g.getParameter(L.UNPACK_SKIP_ROWS),ci=g.getParameter(L.UNPACK_SKIP_IMAGES);g.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),g.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),g.pixelStorei(L.UNPACK_SKIP_ROWS,$t),g.pixelStorei(L.UNPACK_SKIP_IMAGES,ne);const Wi=M.isDataArrayTexture||M.isData3DTexture,me=I.isDataArrayTexture||I.isData3DTexture;if(M.isDepthTexture){const Re=V.get(M),hi=V.get(I),Me=V.get(Re.__renderTarget),ui=V.get(hi.__renderTarget);g.bindFramebuffer(L.READ_FRAMEBUFFER,Me.__webglFramebuffer),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Xi=0;Xi<Ct;Xi++)Wi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(M).__webglTexture,G,ne+Xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(I).__webglTexture,yt,Ce+Xi)),L.blitFramebuffer(Dt,$t,wt,St,Pt,ue,wt,St,L.DEPTH_BUFFER_BIT,L.NEAREST);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||V.has(M)){const Re=V.get(M),hi=V.get(I);g.bindFramebuffer(L.READ_FRAMEBUFFER,N),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let Me=0;Me<Ct;Me++)Wi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.__webglTexture,G,ne+Me):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Re.__webglTexture,G),me?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hi.__webglTexture,yt,Ce+Me):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hi.__webglTexture,yt),G!==0?L.blitFramebuffer(Dt,$t,wt,St,Pt,ue,wt,St,L.COLOR_BUFFER_BIT,L.NEAREST):me?L.copyTexSubImage3D(At,yt,Pt,ue,Ce+Me,Dt,$t,wt,St):L.copyTexSubImage2D(At,yt,Pt,ue,Dt,$t,wt,St);g.bindFramebuffer(L.READ_FRAMEBUFFER,null),g.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else me?M.isDataTexture||M.isData3DTexture?L.texSubImage3D(At,yt,Pt,ue,Ce,wt,St,Ct,_e,qe,ye.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(At,yt,Pt,ue,Ce,wt,St,Ct,_e,ye.data):L.texSubImage3D(At,yt,Pt,ue,Ce,wt,St,Ct,_e,qe,ye):M.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,yt,Pt,ue,wt,St,_e,qe,ye.data):M.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,yt,Pt,ue,ye.width,ye.height,_e,ye.data):L.texSubImage2D(L.TEXTURE_2D,yt,Pt,ue,wt,St,_e,qe,ye);g.pixelStorei(L.UNPACK_ROW_LENGTH,Qe),g.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),g.pixelStorei(L.UNPACK_SKIP_PIXELS,dn),g.pixelStorei(L.UNPACK_SKIP_ROWS,Gn),g.pixelStorei(L.UNPACK_SKIP_IMAGES,ci),yt===0&&I.generateMipmaps&&L.generateMipmap(At),g.unbindTexture()},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&Z.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Z.setTextureCube(M,0):M.isData3DTexture?Z.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Z.setTexture2DArray(M,0):Z.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){W=0,H=0,st=null,g.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const I_=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ga,AddEquation:Ii,AddOperation:nu,AdditiveBlending:Qo,AgXToneMapping:Tl,AlphaFormat:Dl,AlwaysCompare:fu,AlwaysDepth:Kr,AlwaysStencilFunc:au,ArcCurve:bu,ArrayCamera:ku,BackSide:en,BasicDepthPacking:su,Box3:xs,BoxGeometry:bi,BufferAttribute:In,BufferGeometry:Le,ByteType:Rl,Camera:$l,CanvasTexture:Gl,CatmullRomCurve3:Wl,CineonToneMapping:El,CircleGeometry:to,ClampToEdgeWrapping:Yn,Color:te,ColorManagement:ie,ConeGeometry:vs,ConstantAlphaFactor:jh,ConstantColorFactor:$h,Controls:Hu,CubeCamera:zu,CubeDepthTexture:Eu,CubeReflectionMapping:yi,CubeRefractionMapping:Oi,CubeTexture:kl,CubeUVReflectionMapping:ir,CubicBezierCurve:Xl,CubicBezierCurve3:Tu,CullFaceBack:$o,CullFaceFront:Nh,CullFaceNone:Uh,Curve:zn,CurvePath:wu,CustomBlending:Oh,CustomToneMapping:bl,CylinderGeometry:or,Data3DTexture:xu,DataArrayTexture:Fl,DataTexture:Su,DepthFormat:Zn,DepthStencilFormat:vi,DepthTexture:ms,DirectionalLight:Ql,DoubleSide:xn,DstAlphaFactor:Yh,DstColorFactor:Zh,EllipseCurve:no,EqualCompare:cu,EqualDepth:$r,EquirectangularReflectionMapping:kr,EquirectangularRefractionMapping:Gr,Euler:ai,EventDispatcher:oi,ExternalTexture:Hl,ExtrudeGeometry:lr,Float32BufferAttribute:le,FloatType:Pn,FogExp2:Qa,FrontSide:Si,Frustum:ja,GLSL3:el,GreaterCompare:hu,GreaterDepth:jr,GreaterEqualCompare:Ka,GreaterEqualDepth:Qr,Group:Ui,HalfFloatType:On,HemisphereLight:Bu,IcosahedronGeometry:so,ImageUtils:gu,IntType:Ha,KeepStencilOp:Vr,Layers:$a,LessCompare:lu,LessDepth:Jr,LessEqualCompare:Za,LessEqualDepth:us,Light:lo,LightShadow:Jl,LineCurve:Yl,LineCurve3:Au,LinearFilter:We,LinearMipmapLinearFilter:xi,LinearMipmapNearestFilter:Hr,LinearSRGBColorSpace:qs,LinearToneMapping:Sl,LinearTransfer:Zs,MOUSE:ii,Material:ki,MathUtils:gn,Matrix2:cl,Matrix3:Wt,Matrix4:xe,MaxEquation:Gh,Mesh:Bn,MeshBasicMaterial:ar,MeshDepthMaterial:Fu,MeshDistanceMaterial:Ou,MeshStandardMaterial:Nu,MinEquation:kh,MirroredRepeatWrapping:ea,MixOperation:eu,MultiplyBlending:tl,MultiplyOperation:Ml,NearestFilter:ze,NearestMipmapLinearFilter:Ls,NearestMipmapNearestFilter:iu,NeutralToneMapping:Al,NeverCompare:ou,NeverDepth:Zr,NoBlending:qn,NoColorSpace:ti,NoToneMapping:Dn,NormalBlending:cs,NotEqualCompare:uu,NotEqualDepth:ta,Object3D:Ue,ObjectSpaceNormalMap:ru,OneFactor:Vh,OneMinusConstantAlphaFactor:tu,OneMinusConstantColorFactor:Qh,OneMinusDstAlphaFactor:qh,OneMinusDstColorFactor:Kh,OneMinusSrcAlphaFactor:vl,OneMinusSrcColorFactor:Xh,OrthographicCamera:cr,PCFShadowMap:ls,PCFSoftShadowMap:Fh,PMREMGenerator:hl,Path:sl,PerspectiveCamera:cn,Plane:Xn,PlaneGeometry:Gi,PointLight:co,Points:yu,PointsMaterial:zl,PolyhedronGeometry:eo,QuadraticBezierCurve:ql,QuadraticBezierCurve3:Zl,Quaternion:ri,R11_EAC_Format:ca,RED_GREEN_RGTC2_Format:Ys,RED_RGTC1_Format:Ca,REVISION:ka,RG11_EAC_Format:Xs,RGBAFormat:Mn,RGBAIntegerFormat:qa,RGBA_ASTC_10x10_Format:Ea,RGBA_ASTC_10x5_Format:Ma,RGBA_ASTC_10x6_Format:Sa,RGBA_ASTC_10x8_Format:ya,RGBA_ASTC_12x10_Format:ba,RGBA_ASTC_12x12_Format:Ta,RGBA_ASTC_4x4_Format:fa,RGBA_ASTC_5x4_Format:da,RGBA_ASTC_5x5_Format:pa,RGBA_ASTC_6x5_Format:ma,RGBA_ASTC_6x6_Format:ga,RGBA_ASTC_8x5_Format:_a,RGBA_ASTC_8x6_Format:xa,RGBA_ASTC_8x8_Format:va,RGBA_BPTC_Format:Aa,RGBA_ETC2_EAC_Format:la,RGBA_PVRTC_2BPPV1_Format:ra,RGBA_PVRTC_4BPPV1_Format:sa,RGBA_S3TC_DXT1_Format:Fs,RGBA_S3TC_DXT3_Format:Os,RGBA_S3TC_DXT5_Format:Bs,RGBFormat:Il,RGB_BPTC_SIGNED_Format:wa,RGB_BPTC_UNSIGNED_Format:Ra,RGB_ETC1_Format:aa,RGB_ETC2_Format:oa,RGB_PVRTC_2BPPV1_Format:ia,RGB_PVRTC_4BPPV1_Format:na,RGB_S3TC_DXT1_Format:Ns,RGFormat:Ei,RGIntegerFormat:Ya,RawShaderMaterial:Uu,Ray:rr,Raycaster:Gu,RedFormat:Ul,RedIntegerFormat:Xa,ReinhardToneMapping:yl,RenderTarget:_u,RepeatWrapping:Ws,ReverseSubtractEquation:zh,SIGNED_R11_EAC_Format:ha,SIGNED_RED_GREEN_RGTC2_Format:La,SIGNED_RED_RGTC1_Format:Pa,SIGNED_RG11_EAC_Format:ua,SRGBColorSpace:Je,SRGBTransfer:fe,Scene:Mu,ShaderChunk:Jt,ShaderLib:Cn,ShaderMaterial:En,Shape:io,ShapeUtils:Ni,ShortType:Cl,Sphere:sr,SphereGeometry:ro,Spherical:ll,SplineCurve:Kl,SrcAlphaFactor:xl,SrcAlphaSaturateFactor:Jh,SrcColorFactor:Wh,StaticDrawUsage:du,SubtractEquation:Bh,SubtractiveBlending:jo,TOUCH:ei,TangentSpaceNormalMap:Da,Texture:Xe,TextureSource:Ja,TorusGeometry:ao,Triangle:vn,TubeGeometry:oo,UVMapping:wl,Uint16BufferAttribute:Ol,Uint32BufferAttribute:Bl,UniformsLib:vt,UniformsUtils:Iu,UnsignedByteType:rn,UnsignedInt101111Type:Ll,UnsignedInt248Type:ds,UnsignedInt5999Type:Pl,UnsignedIntType:Fn,UnsignedShort4444Type:Va,UnsignedShort5551Type:Wa,UnsignedShortType:fs,VSMShadowMap:as,Vector2:ot,Vector3:C,Vector4:be,WebGLCoordinateSystem:Ln,WebGLCubeRenderTarget:jl,WebGLRenderTarget:Sn,WebGLRenderer:$u,WebGLUtils:Ku,WebGPUCoordinateSystem:ps,WebXRController:Wr,ZeroFactor:Hh,createCanvasElement:pu,error:re,log:nl,warn:Ht,warnOnce:Fi},Symbol.toStringTag,{value:"Module"})),wh={type:"change"},tc={type:"start"},Qu={type:"end"},zr=new rr,Rh=new Xn,U_=Math.cos(70*gn.DEG2RAD),De=new C,sn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qo=1e-6;class N_ extends Hu{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new ri,this._lastTargetPosition=new C,this._quat=new ri().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ll,this._sphericalDelta=new ll,this._scale=1,this._panOffset=new C,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new C,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=O_.bind(this),this._onPointerDown=F_.bind(this),this._onPointerUp=B_.bind(this),this._onContextMenu=X_.bind(this),this._onMouseWheel=G_.bind(this),this._onKeyDown=H_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=W_.bind(this),this._onMouseDown=z_.bind(this),this._onMouseMove=k_.bind(this),this._interceptControlDown=Y_.bind(this),this._interceptControlUp=q_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=pe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wh),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=De.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zr.origin.copy(this.object.position),zr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zr.direction))<U_?this.object.lookAt(this.target):(Rh.setFromNormalAndCoplanarPoint(this.object.up,this.target),zr.intersectPlane(Rh,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>qo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qo||this._lastTargetPosition.distanceToSquared(this.target)>qo?(this.dispatchEvent(wh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function F_(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function O_(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function B_(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qu),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function z_(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=pe.DOLLY;break;case ii.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}break;case ii.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(tc)}function k_(n){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function G_(n){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(n.preventDefault(),this.dispatchEvent(tc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qu))}function H_(n){this.enabled!==!1&&this._handleKeyDown(n)}function V_(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=pe.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=pe.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(tc)}function W_(n){switch(this._trackPointer(n),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=pe.NONE}}function X_(n){this.enabled!==!1&&n.preventDefault()}function Y_(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q_(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ps=new C;function mn(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Ps.copy(t),Ps[i]=0,Ps.normalize();const c=.5*a/(a+o),h=1-Ps.angleTo(n)/l;return Math.sign(Ps[e])===1?h*c:o/(a+o)+c+c*(1-h)}class ec extends bi{constructor(t=1,e=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new C,c=new C,h=new C(t,e,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,x=f.length/6,S=new C,m=.5/a;for(let p=0,y=0;p<f.length;p+=3,y+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/x)){case 0:S.set(1,0,0),d[y+0]=mn(S,c,"z","y",r,i),d[y+1]=1-mn(S,c,"y","z",r,e);break;case 1:S.set(-1,0,0),d[y+0]=1-mn(S,c,"z","y",r,i),d[y+1]=1-mn(S,c,"y","z",r,e);break;case 2:S.set(0,1,0),d[y+0]=1-mn(S,c,"x","z",r,t),d[y+1]=mn(S,c,"z","x",r,i);break;case 3:S.set(0,-1,0),d[y+0]=1-mn(S,c,"x","z",r,t),d[y+1]=1-mn(S,c,"z","x",r,i);break;case 4:S.set(0,0,1),d[y+0]=1-mn(S,c,"x","y",r,t),d[y+1]=1-mn(S,c,"y","x",r,e);break;case 5:S.set(0,0,-1),d[y+0]=mn(S,c,"x","y",r,t),d[y+1]=1-mn(S,c,"y","x",r,e);break}}static fromJSON(t){return new ec(t.width,t.height,t.depth,t.segments,t.radius)}}function Z_(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Le;let c=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const f=[];for(let u=0;u<n.length;++u){const d=n[u].index;for(let x=0;x<d.count;++x)f.push(d.getX(x)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=Ch(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in a){const f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const d=[];for(let S=0;S<a[h].length;++S)d.push(a[h][S][u]);const x=Ch(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}}return l}function Ch(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new In(a,e,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const f=l/e;for(let u=0,d=h.count;u<d;u++)for(let x=0;x<e;x++){const S=h.getComponent(u,x);o.setComponent(u+f,x,S)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}function K_({THREE:n,root:t,dock:e,state:i,M:s,mat:r,group:a,mesh:o,box:l,sphere:c,cyl:h,torus:f,rod:u,sign:d,paperBoat:x,batchStatic:S,persist:m,say:p,refresh:y,chime:w,reduced:v}){const E=[{name:"камень, который не тонет",line:"камень приплыл. сам.",description:"Камень отказался лежать и остался висеть над латунной чашкой. Ладно, пусть."},{name:"белое семечко",line:"посадил. уже светится.",description:"Из белого семечка вырос цветок с кольцами вместо лепестков. Поливать пока не просит."},{name:"письмо от меня",line:"почерк мой. странно.",description:"В конверте записка от головы. Адреса нет, бумага сухая."}],R=["«чайник выключил. можешь не возвращаться быстро. - я»","«здесь тоже нет ног. зато тихо. - я»","«камень не выбрасывай. он дорогу знает. - я»"],_=a([0,0,0],e);h([-.7,.3,-.83],.3,.38,s.concrete,_),f([-.7,.51,-.83],.31,.035,s.copper,_),h([-.7,.49,-.83],.26,.045,s.dark,_);const b=a([-.7,.97,-.83],_);o(new n.IcosahedronGeometry(.25,1),r("#83ada4",{roughness:.38,metalness:.2}),[0,0,0],[1,1.35,.85],b),f([0,0,0],.36,.015,s.copper,b,[0,0,.35]),h([.66,.34,-.22],.27,.45,s.rust,_),f([.66,.56,-.22],.28,.028,s.copper,_),h([.66,.55,-.22],.24,.03,r("#495441"),_);const P=a([.66,.56,-.22],_);u([0,0,0],[0,.83,0],.026,s.copper,P);for(const[at,Tt,Gt]of[[-.17,.23,-.5],[.17,.41,.5]]){const J=c([at,Tt,0],[.24,.035,.085],s.mint,P);J.rotation.z=Gt}const D=a([0,.95,0],P);c([0,0,0],.115,s.light,D),f([0,0,0],.28,.021,s.cream,D,[0,0,0]),f([0,0,0],.27,.021,s.copper,D,[0,Math.PI/2,0]);const F=[];for(let at=0;at<4;at++){const Tt=at*Math.PI/2,Gt=a([Math.cos(Tt)*.3,.13+Math.sin(Tt)*.12,Math.sin(Tt)*.3],P);u([0,-.15,0],[0,.2,0],.012,s.copper,Gt),c([0,.23,0],.065,s.cream,Gt),S(Gt,[]),F.push(Gt)}l([-.46,.2,.32],[.68,.12,.47],s.dark,_);const z=a([-.46,.29,.32],_);l([0,0,0],[.5,.025,.32],s.cream,z);for(const at of[-.23,.23])u([at,.016,-.14],[0,.016,.06],.009,s.copper,z);c([0,.027,.06],[.04,.015,.04],s.rust,z),d("ОБРАТНО",[0,.51,1.365],1.1,.2,_,{bg:"#c2c7a3",fg:"#445e45",size:42}),S(b,[]),S(D,[]),S(P,[D,...F]),S(z,[]),S(_,[b,P,z]);const N=c([.17,2.1,-.7],.1,r("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.2}),e);N.castShadow=!1;const B=a([0,0,0],t),W=x(B,[8.3,.14,3.5],1.05),H=a([0,.36,0],W),st=o(new n.IcosahedronGeometry(.15,0),r("#83ada4"),[0,.14,0],[1,1.25,.85],H),Y=c([0,.12,0],[.085,.13,.085],s.light,H),Q=l([0,.09,0],[.23,.025,.16],s.cream,H);Q.rotation.z=.2;const nt=[st,Y,Q];S(W,[H]);const Rt=new n.Vector3(8.3,.14,3.5),Et=new n.Vector3(8.45,.14,3.65),se=new n.Vector3(9.2,-2.7,6.5);let Kt=-1,jt=i.dockTrips>=2?1:.02;function q(){b.visible=i.dockTrips>=1,P.visible=i.dockTrips>=2,z.visible=i.dockTrips>=3,F.forEach((at,Tt)=>at.visible=i.dockTrips>=5+Tt*3),H.visible=i.dockPending,nt.forEach((at,Tt)=>at.visible=Tt===i.dockTrips%3),W.position.copy(i.dockPending?Et:Rt)}q();function tt(){if(!(i.boat>0))if(i.dockPending){const at=E[i.dockTrips%3];i.dockTrips++,i.dockPending=!1,i.dockTrips===2&&(jt=.02),m(),q(),p(at.line),w(330),y()}else i.boat=18,Kt=-1,nt.forEach((at,Tt)=>at.visible=Tt===i.dockTrips%3),H.visible=!1,p("ну плыви. я тут."),y()}function xt(at,Tt){if(i.boat>0){i.boat=Math.max(0,i.boat-at);const Gt=18-i.boat,J=Gt<7?0:Gt<11?1:2;J!==Kt&&(Kt=J,y()),Gt<2?W.position.lerpVectors(Rt,Et,n.MathUtils.smoothstep(Gt,0,2)):Gt<7?W.position.lerpVectors(Et,se,n.MathUtils.smoothstep(Gt,2,7)):Gt<11?W.position.copy(se):Gt<16?W.position.lerpVectors(se,Et,n.MathUtils.smoothstep(Gt,11,16)):W.position.copy(Et),W.visible=Gt<7||Gt>=11,H.visible=Gt>=11,W.rotation.y=Gt>=11?Math.PI+.2:.2,i.boat===0&&(i.dockPending=!0,m(),W.visible=!0,q(),p("вернулся. с чем-то."),w(554),y())}W.rotation.z=v?0:Math.sin(Tt*1.7)*.035,i.boat===0&&(W.visible=!0,W.position.y=(i.dockPending?Et.y:Rt.y)+Math.sin(Tt*1.2)*.02,W.rotation.y=i.dockPending?Math.PI+.2:0),b.position.y=.97+Math.sin(Tt*.9)*.055,b.rotation.y=Tt*.15,jt=n.MathUtils.damp(jt,1,1.1,at),P.scale.setScalar(jt),D.rotation.y=v?0:Tt*.23,N.material.emissiveIntensity=i.dockPending?1.5+Math.sin(Tt*4)*1.1:1.2}function Ot(){if(i.boat>0){const at=18-i.boat;return{disabled:!0,action:at<7?"плывёт…":at<11?"где-то в никуда…":"возвращается…",description:"Дорога занимает 18 секунд. Кораблик уходит под край двора и возвращается той же дорогой. Подождём."}}if(i.dockPending)return{disabled:!1,action:"забрать находку",description:`Вернулся. На борту: ${E[i.dockTrips%3].name}. Лампа мигает, пока не заберёшь.`};if(i.dockTrips){const at=(i.dockTrips-1)%3;return{disabled:!1,action:"отпустить ещё раз",description:at===2?`${E[at].description} ${R[Math.floor((i.dockTrips-1)/3)%R.length]}`:E[at].description}}return{disabled:!1,action:"отпустить и дождаться",description:"Причал всё ещё ведёт в никуда. Но теперь кораблик возвращается: с камнем, семечком или письмом. Для находок уже приготовил место."}}return{travel:B,gallery:_,beacon:N,launchOrCollect:tt,update:xt,card:Ot,inspect:()=>({trips:i.dockTrips,pending:i.dockPending,boat:W.position.toArray(),visible:W.visible,cargo:H.visible,stone:b.visible,plant:P.visible,plantScale:jt,letter:z.visible,buds:F.filter(at=>at.visible).length})}}const Yt=n=>document.querySelector(n),ni=()=>innerWidth<700,ju=matchMedia("(prefers-reduced-motion: reduce)").matches;let Us={};try{Us=JSON.parse(localStorage.getItem("beznogim-yard-v1")||"{}")||{}}catch{}const ut={loop:0,roof:0,running:!!Us.running,harvest:Math.min(99,Math.max(0,Number(Us.harvest)||0)),energy:0,brew:0,teaCount:0,boat:0,dockTrips:Math.min(999,Math.max(0,Math.floor(Number(Us.dockTrips)||0))),dockPending:Us.dockPending===!0,radio:0,markers:!0,selected:null,sound:!1};function dl(){try{localStorage.setItem("beznogim-yard-v1",JSON.stringify({running:ut.running,harvest:ut.harvest,dockTrips:ut.dockTrips,dockPending:ut.dockPending}))}catch{}}const we=new $u({antialias:!0,alpha:!1,powerPreference:"high-performance"});we.setPixelRatio(Math.min(devicePixelRatio,ni()?1.5:2));we.setSize(innerWidth,innerHeight);we.shadowMap.enabled=!0;we.shadowMap.type=ls;we.shadowMap.autoUpdate=!1;we.shadowMap.needsUpdate=!0;we.outputColorSpace=Je;we.toneMapping=Ga;we.toneMappingExposure=1.22;Yt("#world").append(we.domElement);const li=new Mu;li.background=new te("#182e32");li.fog=new Qa("#182e32",.003);const Ee=new cr(-10,10,10,-10,.1,150),nc=new C(0,1,0);Ee.position.set(20,20,24);Ee.lookAt(nc);const Se=new N_(Ee,we.domElement);Se.target.copy(nc);Se.enableDamping=!0;Se.enableRotate=!1;Se.enablePan=!0;Se.minZoom=.65;Se.maxZoom=2.5;Se.screenSpacePanning=!0;Se.mouseButtons.LEFT=ii.PAN;Se.mouseButtons.RIGHT=ii.PAN;Se.touches.ONE=ei.PAN;Se.touches.TWO=ei.DOLLY_PAN;li.add(new Bu("#d9eedc","#334d53",2.3));const Hi=new Ql("#ffe2ac",3.3);Hi.position.set(-7,14,6);Hi.castShadow=!0;Hi.shadow.mapSize.set(ni()?512:1024,ni()?512:1024);Object.assign(Hi.shadow.camera,{left:-12,right:12,top:12,bottom:-12,near:1,far:40});Hi.shadow.bias=-4e-4;Hi.shadow.normalBias=.025;li.add(Hi);const tf=new Ql("#8ad5d8",1.3);tf.position.set(5,7,-8);li.add(tf);const Ve=new Ui;li.add(Ve);const Zo={};function ae(n,t={}){const e=n+JSON.stringify(t);return Zo[e]||(Zo[e]=new Nu({color:n,roughness:.8,...t}))}const Wn={cream:"#d2d1b7",concrete:"#95aaa0",dark:"#263b3c",metal:"#345555",rust:"#bb714f",copper:"#cd9a5e",soil:"#495441",leaf:"#709574",black:"#162f32",purple:"#79649a"},j={concrete:ae(Wn.concrete),cream:ae(Wn.cream),dark:ae(Wn.dark),metal:ae(Wn.metal,{metalness:.5,roughness:.4}),copper:ae(Wn.copper,{metalness:.6,roughness:.35}),rust:ae(Wn.rust),black:ae(Wn.black),leaf:ae(Wn.leaf),light:ae("#ffd591",{emissive:"#ffb85a",emissiveIntensity:1.6}),mint:ae("#b8e3bd",{emissive:"#82c8a7",emissiveIntensity:.5})},Ss={box:new bi(1,1,1),sphere:new ro(1,12,8),ico:new so(1,1),cyl:new or(1,1,1,16),cone:new vs(1,1,8)};function ke(n,t,e,i,s=Ve){const r=new Bn(n,t);return e&&r.position.set(...e),i&&r.scale.set(...i),r.castShadow=!0,r.receiveShadow=!0,s.add(r),r}const kt=(n,t,e,i=Ve)=>ke(Ss.box,e,n,t,i),Te=(n,t,e,i=Ve)=>ke(Ss.sphere,e,n,Array.isArray(t)?t:[t,t,t],i),Ge=(n,t,e,i,s=Ve)=>ke(Ss.cyl,i,n,[t,e,t],s);function ys(n,t,e,i=Ve,s=.08){return ke(new ec(...t,1,s),e,n,null,i)}function Oe(n=[0,0,0],t=Ve){const e=new Ui;return e.position.set(...n),t.add(e),e}function Es(n,t,e,i=Ve){const s=new Wl(n.map(r=>new C(...r)));return ke(new oo(s,Math.max(12,n.length*6),t,6,!1),e,null,null,i)}function He(n,t,e,i,s=Ve){const r=new C(...n),a=new C(...t),o=a.clone().sub(r),l=Ge(r.clone().add(a).multiplyScalar(.5).toArray(),e,o.length(),i,s);return l.quaternion.setFromUnitVectors(new C(0,1,0),o.normalize()),l}function nn(n,t,e,i,s=Ve,r=[Math.PI/2,0,0]){const a=ke(new ao(t,e,6,40),i,n,null,s);return a.rotation.set(...r),a}function Vi(n,t,e,i,s=Ve,r={}){const a=document.createElement("canvas");a.width=512,a.height=128;const o=a.getContext("2d");o.fillStyle=r.bg||"#304b47",o.fillRect(0,0,512,128),o.strokeStyle=r.fg||"#e4dfc8",o.lineWidth=2,o.strokeRect(12,12,488,104),o.fillStyle=r.fg||"#e4dfc8",o.font=`${r.size||48}px monospace`,o.textAlign="center",o.textBaseline="middle",o.fillText(n,256,66);const l=new Gl(a);l.colorSpace=Je;const c=ke(new Gi(e,i),new ar({map:l,side:xn}),t,null,s);return c.castShadow=!1,c}let Ko=179;function de(){return Ko=Ko*1664525+1013904223>>>0,Ko/4294967296}const Na=document.createElement("canvas");Na.width=Na.height=256;const Fa=Na.getContext("2d");Fa.fillStyle="#b4bcaa";Fa.fillRect(0,0,256,256);for(let n=0;n<5e3;n++)Fa.fillStyle=`rgba(${de()>.5?"60,82,64":"235,229,201"},${de()*.08})`,Fa.fillRect(de()*256,de()*256,1+de()*3,1+de()*3);const js=new Gl(Na);js.wrapS=js.wrapT=Ws;js.repeat.set(5,5);js.colorSpace=Je;const J_=ae("#c2c6b1",{map:js,roughness:.97});function ic(n,t,e,i,s=Ve){const r=new io;n.forEach(([o,l],c)=>c?r.lineTo(o,-l):r.moveTo(o,-l)),r.closePath();const a=new lr(r,{depth:e,bevelEnabled:!1});return a.rotateX(-Math.PI/2),a.translate(0,t-e,0),ke(a,i,null,null,s)}const sc=[[-6.7,-4.7],[-5.7,-5.7],[5.1,-5.7],[6.6,-4.2],[6.6,3.9],[4.9,5.6],[-5.4,5.6],[-6.7,4.3]];ic(sc,0,.82,j.concrete);ic(sc,.06,.14,J_);ic(sc.map(([n,t])=>[n*.97,t*.97]),-.8,.6,ae("#47665e"));for(let n=0;n<28;n++){const t=-5.4+de()*10.9,e=de()>.5?5.15:-5.2,i=ke(Ss.ico,ae(n%3?"#557469":"#668477"),[t,-1.15-de()*.5,e],[.25+de()*.8,.2+de()*.55,.35+de()*.3]);i.rotation.y=de()*6}for(let n=0;n<7;n++){const t=-4.6+n*1.25;kt([t,-.37,5.61],[.48,.19,.025],n%2?j.copper:j.dark),n%2===0&&Es([[t,-.5,5.5],[t,-1.4,5.8],[t+.4,-2,5.4],[t+.3,-2.7,5.2]],.055,j.metal)}Vi("ТИХИЙ ХОД / 001",[1,-.34,5.64],2.8,.35,Ve,{size:32});const ge=Oe([-3.2,.08,-2.5]),un=Oe([0,0,0],ge);kt([0,.08,0],[4.5,.15,3.6],j.dark,ge);kt([0,1.2,-1.68],[4.5,2.4,.18],j.cream,ge);kt([-2.15,1,0],[.18,2,3.6],j.cream,ge);for(let n=0;n<5;n++){kt([-1.65+n*.8,1.15,-1.55],[.035,2.2,.02],j.concrete,ge),kt([-1.65+n*.8,1.7,-1.55],[.65,.6,.04],j.metal,ge);for(let t=0;t<3;t++)kt([-1.88+n*.8+t*.21,1.7,-1.51],[.017,.55,.02],j.copper,ge)}kt([0,2.47,-.2],[4.8,.14,3.7],j.rust,un);for(let n=0;n<23;n++){const t=kt([-2.28+n*.2,2.56,-.2],[.035,.045,3.7],ae("#d09062"),un);t.rotation.x=-.015}kt([0,2.35,1.62],[4.8,.14,.18],j.dark,ge);He([-2.3,.12,1.62],[-2.3,2.4,1.62],.055,j.copper,ge);He([2.3,.12,1.62],[2.3,2.4,1.62],.055,j.copper,ge);Vi("МАСТЕРСКАЯ",[0,2.34,1.74],2.15,.34,ge,{size:37});kt([.1,.85,-.84],[3.8,.13,.87],j.rust,ge);for(const n of[-1.5,1.65])kt([n,.44,-.84],[.12,.85,.65],j.metal,ge);for(let n=0;n<3;n++)kt([-1.15+n*.95,.51,-.85],[.82,.47,.75],j.concrete,ge),kt([-1.15+n*.95,.5,-.44],[.18,.04,.03],j.copper,ge);for(let n=0;n<2;n++){ys([-.55+n*1.3,1.25,-.85],[.78,.59,.5],j.dark,ge),kt([-.55+n*1.3,1.27,-.591],[.62,.41,.012],ae("#70a58b",{emissive:"#87cfa6",emissiveIntensity:.65}),ge);for(let t=0;t<4;t++)kt([-.65+n*1.3,1.18+t*.055,-.58],[.21+de()*.3,.012,.012],j.mint,ge);kt([-.5+n*1.3,.94,-.35],[.75,.035,.25],j.cream,ge)}for(let n=0;n<6;n++)kt([-1.6+n*.48,2.07,-1.48],[.28,.16+de()*.16,.17],ae(["#9fba95","#cb9b70","#667f71"][n%3]),ge);Ge([0,.5,.7],.32,.12,j.rust,ge);for(let n=0;n<3;n++){let t=Math.cos(n*2.09)*.22,e=Math.sin(n*2.09)*.22+.7;He([t,.06,e],[t,.5,e],.04,j.metal,ge)}for(let n=0;n<4;n++)nn([-1.5,.06,1],.3-n*.045,.025,j.black,ge);Ge([-1.5,3,-.9],.16,.9,j.metal,un);Ge([-1.5,3.47,-.9],.24,.08,j.rust,un);kt([1.4,2.9,-.4],[.8,.5,.6],j.concrete,un);for(let n=0;n<5;n++)kt([1.1+n*.15,2.94,-.085],[.035,.32,.03],j.dark,un);const rc=new co("#ffca86",5,5,2);rc.position.set(-3,1.7,-1.1);Ve.add(rc);for(let n=-1.4;n<3;n+=.79)for(let t=-.65;t<3.1;t+=.79){const e=ys([n,.1,t],[.74,.05,.74],ae(de()>.3?"#b3baa6":"#a5b5a4"),Ve,.018);e.rotation.y=(de()-.5)*.035}for(let n=0;n<95;n++){let t=-6+de()*12,e=-5.1+de()*10.3;if(e>-4.4&&e<.7&&t<-1||e>2.3&&t>2)continue;const i=ke(Ss.cone,j.leaf,[t,.1,e],[.022,.12+de()*.12,.022]);i.rotation.z=(de()-.5)*.7}const pl=new En({uniforms:{uTime:{value:0},uEnergy:{value:0}},vertexShader:"varying vec3 vP;void main(){vP=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform float uTime;uniform float uEnergy;void main(){float w=sin(vP.x*9.+uTime*.6+sin(vP.z*5.))*sin(vP.z*15.-uTime*.9);float stripe=pow(max(0.,sin(vP.z*27.+vP.x*2.+uTime*.5)),18.);vec3 c=mix(vec3(.045,.26,.26),vec3(.18,.48,.42),w*.5+.5);c+=stripe*.08+uEnergy*.05;gl_FragColor=vec4(c,1.);}",side:xn});kt([3.7,.12,3.6],[4.9,.24,2.7],j.dark);ke(new Gi(4.5,2.4),pl,[3.7,.255,3.6],null).rotation.x=-Math.PI/2;for(const n of[2.24,4.96])kt([3.7,.29,n],[5,.38,.16],j.cream);for(const n of[1.18,6.2])kt([n,.29,3.6],[.16,.38,2.85],j.cream);for(let n=0;n<13;n++)kt([1.85,.5,2.15+n*.235],[1.08,.09,.22],ae(n%2?"#ae9770":"#bea67d"));for(const n of[2.12,3.45,4.98])for(const t of[1.31,2.4])Ge([t,.88,n],.045,.8,j.copper);for(const n of[1.31,2.4])Es([[n,1.24,2.12],[n,1.1,2.8],[n,1.24,3.45],[n,1.1,4.2],[n,1.24,4.98]],.026,j.cream);const ac=[];for(let n=0;n<6;n++){let t=kt([4+n*.095,-1.25,5.56],[.055,2.4,.03],ae("#74b8a7",{transparent:!0,opacity:.4,emissive:"#468678",emissiveIntensity:.2}));ac.push(t)}for(let n=0;n<4;n++)kt([3.96+n*.17,.31,5.31],[.055,.08,.6],j.dark);const Ie=Oe([3.7,.1,-2.6]);ys([0,.14,0],[3.7,.27,3.5],j.cream,Ie,.09);for(const n of[-1.55,1.55])kt([n,1.76,0],[.17,3.25,.2],j.metal,Ie),kt([n,.38,0],[.45,.2,.6],j.copper,Ie),He([n,.36,-1.2],[n,2.9,0],.045,j.copper,Ie),He([n,.36,1.2],[n,2.9,0],.045,j.copper,Ie);kt([0,3.38,0],[3.5,.18,.26],j.copper,Ie);const $_=nn([0,2.7,-.5],1.83,.035,j.copper,Ie,[0,0,0]);$_.scale.y=.85;const hr=[];for(let n=0;n<5;n++){const t=Oe([-1.18+n*.59,3.24,0],Ie),e=1.8+n*.12;He([0,0,-.08],[0,-e,0],.015,j.dark,t),He([0,0,.08],[0,-e,0],.015,j.dark,t),Te([0,-e,0],.205,j.copper,t),nn([0,-e,0],.211,.012,j.light,t,[0,0,0]),hr.push({group:t,len:e,phase:n})}kt([0,.6,1.3],[1.45,.8,.4],j.metal,Ie);Vi("КАЧАЕТСЯ",[0,.69,1.513],1.2,.24,Ie,{size:40});const Q_=Ge([-.43,.97,1.3],.19,.07,j.cream,Ie);Q_.rotation.x=Math.PI/2;const oc=kt([-.43,.99,1.342],[.015,.22,.008],j.rust,Ie);oc.rotation.z=-.7;const ef=Te([.53,.93,1.52],.09,j.light,Ie),fo=Oe([.15,.4,1.59],Ie);nn([0,0,0],.19,.023,j.rust,fo,[0,0,0]);for(let n=0;n<3;n++)He([0,0,0],[Math.sin(n*2.09)*.18,Math.cos(n*2.09)*.18,0],.014,j.rust,fo);Es([[2.1,.19,-1],[1.7,.17,-.5],[1.3,.17,-.3],[.7,.17,-.9],[-.5,.17,-1]],.03,j.copper);const nf=[];function lc(n,t,e=1.5){Ge([n,e/2,t],.038,e,j.metal),kt([n,e,t],[.27,.11,.27],j.dark),kt([n,e-.18,t],[.17,.25,.17],j.light),kt([n,e-.34,t],[.25,.08,.25],j.copper);const i=new co("#ffbe70",1.8,3);i.position.set(n,e-.16,t),nf.push(i)}lc(-5.9,3.9,1.3);lc(.3,-4.8,1.7);lc(5.8,1.25,1.35);const $e=Oe([-3.6,.08,3.55]),ml=[];for(let n=0;n<2;n++){const t=-.65+n*1.5;ys([0,.14,t],[3.6,.3,1.14],j.rust,$e,.06),kt([0,.305,t],[3.36,.04,.92],ae(Wn.soil),$e);for(let e=0;e<4;e++){const i=Oe([-1.26+e*.84,.33,t],$e);Ge([0,.14,0],.026,.28,j.leaf,i);for(let s=0;s<5;s++){const r=s*Math.PI*.4,a=Te([Math.sin(r)*.17,.17,Math.cos(r)*.17],[.09,.04,.24],ae(s%2?"#94af77":"#668c68"),i);a.rotation.y=r,a.rotation.z=.15}if(n===0){Te([0,.17,0],[.25,.18,.25],ae("#b6c58a"),i);for(let s=0;s<6;s++){const r=Te([Math.sin(s)*.16,.17,Math.cos(s)*.16],[.08,.15,.17],j.leaf,i);r.rotation.y=s}ml.push(i)}else{const s=Te([.05,.22,0],[.1,.21,.12],ae(Wn.purple,{roughness:.35}),i);s.rotation.z=-.25,Te([.05,.41,0],[.075,.025,.07],j.leaf,i),ml.push(i)}}}const sf=Oe([-1.72,.1,.8],$e);for(let n=0;n<2;n++)kt([n*3.45,.6,0],[.04,1.3,.04],j.copper,sf);He([0,1.25,0],[3.45,1.25,0],.022,j.copper,sf);Vi("КОБАЧКИ",[-.45,.68,1.64],1,.26,$e,{bg:"#c2c7a3",fg:"#445e45",size:42});Ge([1.9,.23,.7],.18,.34,ae("#6b9389"),$e);He([2.04,.25,.7],[2.4,.46,.7],.045,ae("#6b9389"),$e);nn([1.8,.48,.7],.16,.02,j.copper,$e,[0,0,0]);kt([-1.6,.2,1.47],[.65,.4,.45],j.rust,$e);for(let n=0;n<3;n++)kt([-1.6,.12+n*.11,1.71],[.7,.05,.025],j.copper,$e);const an=Oe([-3.8,.08,.35]);Ge([0,.73,0],.58,.1,j.rust,an);Ge([0,.35,0],.045,.7,j.metal,an);for(let n=0;n<3;n++)He([0,.1,0],[Math.sin(n*2.09)*.4,.03,Math.cos(n*2.09)*.4],.033,j.metal,an);const ur=Oe([.1,.81,0],an);Te([0,.2,0],[.23,.22,.23],j.cream,ur);Ge([0,.37,0],.14,.06,j.copper,ur);Te([0,.42,0],.045,j.dark,ur);He([.15,.18,0],[.33,.32,0],.07,j.cream,ur);nn([-.15,.25,0],.18,.035,j.dark,ur,[0,0,0]);for(const n of[-.35,.38])Ge([n,.84,.24],.082,.15,j.cream,an),nn([n,.92,.24],.084,.012,j.copper,an),Ge([n,.921,.24],.063,.006,ae("#67513b"),an),nn([n+.09,.86,.24],.045,.011,j.cream,an,[0,0,0]);const po=[];for(let n=0;n<9;n++){const t=Te([0,0,0],.07,ae("#eee7c8",{transparent:!0,opacity:.15,depthWrite:!1}),an);t.castShadow=!1,po.push(t)}const Un=Oe([-5.65,.09,1.1]);kt([0,.3,0],[.7,.6,.7],j.concrete,Un);ys([0,.8,0],[.68,.45,.35],j.dark,Un,.05);for(let n=0;n<6;n++)kt([-.2+n*.05,.8,.18],[.022,.27,.018],j.copper,Un);kt([.18,.85,.184],[.16,.075,.02],j.light,Un);Te([.18,.72,.19],.05,j.cream,Un);He([.18,1,0],[.48,1.6,0],.012,j.copper,Un);const rf=Oe([-.5,.1,-4.6]);Ge([0,1.75,0],.055,3.5,j.metal,rf);Te([0,3.55,0],.09,j.copper,rf);Es([[-5.5,2.5,-.8],[-2.6,2.7,-2.5],[-.5,3.3,-4.6]],.017,j.dark);for(let n=0;n<8;n++){let t=n/8;const e=ke(new vs(.13,.3,3),ae(n%2?"#ccb478":"#af7c60"),[-5.1+t*4.5,2.52+t*.73,-1-t*3.7],null);e.rotation.z=Math.PI}const mo=Oe([-.5,3.4,-4.6]);for(let n=0;n<4;n++){const t=kt([0,0,0],[.55,.09,.025],j.rust,mo);t.rotation.z=n*Math.PI/2,t.position.set(Math.cos(n*Math.PI/2)*.3,Math.sin(n*Math.PI/2)*.3,0)}Te([0,0,.05],.08,j.copper,mo);const Ye=Oe([7.25,-.03,1.5]);kt([0,-.12,0],[2.25,.3,2.5],j.metal,Ye);for(let n=0;n<10;n++)kt([-.99+n*.22,.08,0],[.2,.08,2.6],j.rust,Ye);kt([-.95,.2,-.95],[.35,.15,.35],j.dark,Ye);Ge([.87,.34,.75],.075,.5,j.copper,Ye);Ge([.87,.59,.75],.13,.05,j.cream,Ye);He([.87,.1,-.7],[.87,2.3,-.7],.035,j.copper,Ye);Es([[.87,2.3,-.7],[.4,2.5,-.7],[.17,2.3,-.7]],.035,j.copper,Ye);kt([.17,2.09,-.7],[.25,.4,.25],ae("#ffd591"),Ye);kt([.17,2.32,-.7],[.34,.08,.34],j.dark,Ye);for(let n=0;n<4;n++)nn([.87,.15,.75],.24-n*.025,.024,ae("#b8ad86"),Ye);kt([6.7,.07,1.5],[1.4,.13,.8],j.rust);Vi("НИКУДА",[.05,.28,1.36],1.3,.29,Ye,{bg:"#c2c7a3",fg:"#445e45",size:45});const cc=[];function af(n,t,e=1){const i=Oe(t,n),s=new io;s.moveTo(-.36,0),s.lineTo(.36,0),s.lineTo(.22,-.16),s.lineTo(-.22,-.16),s.closePath(),ke(new lr(s,{depth:.19,bevelEnabled:!1}),ae("#dfc99a"),[0,.15,-.1],null,i);const r=ke(new vs(.23,.36,3),j.cream,[0,.27,0],[1,1,.38],i);return r.rotation.y=Math.PI/2,i.scale.setScalar(e),i}for(let n=0;n<3;n++){const t=af(Ve,[3.3+n*.72,.35,3.6+Math.sin(n)*.4],.75);cc.push(t)}const Nn=K_({THREE:I_,root:Ve,dock:Ye,state:ut,M:j,mat:ae,group:Oe,mesh:ke,box:kt,sphere:Te,cyl:Ge,torus:nn,rod:He,sign:Vi,paperBoat:af,batchStatic:fn,persist:dl,say:Rn,refresh:_n,chime:gl,reduced:ju}),qt=Oe([-.15,1.9,.85]);qt.scale.setScalar(1.18);const hc=ae("#233a39",{metalness:.42,roughness:.32});Te([0,.1,0],[.62,.8,.55],hc,qt);Te([0,-.36,.1],[.44,.43,.43],hc,qt);Te([-.61,.03,.03],[.1,.2,.12],j.copper,qt);Te([.61,.03,.03],[.1,.2,.12],j.copper,qt);for(const n of[-.23,.23]){Te([n,.2,.485],[.17,.13,.057],j.black,qt),nn([n,.2,.541],.078,.02,j.copper,qt,[0,0,0]),Te([n,.2,.56],.041,j.light,qt);const t=kt([n,.38,.48],[.24,.045,.06],j.cream,qt);t.rotation.z=n>0?-.13:.13}Te([0,.04,.51],[.09,.17,.11],hc,qt);Te([0,-.2,.44],[.31,.16,.11],j.black,qt);for(let n=0;n<7;n++){const t=(n-3)*.073,e=ys([t,-.19-Math.abs(n-3)*.012,.544-Math.abs(n-3)*.013],[.053,.075,.025],j.cream,qt,.009);e.rotation.z=(n-3)*.07}for(let n=0;n<10;n++){const t=n/9,e=-.52+t*1.04,i=.66+Math.sin(t*Math.PI)*.23,s=Te([e,i,-.04],[.18,.18,.48],j.cream,qt);s.rotation.z=-.32,s.rotation.x=-.16}for(let n=0;n<13;n++){const t=n/12,e=-.5+t,i=.68+Math.sin(t*Math.PI)*.19;Es([[e-.12,i+.12,-.37],[e+.06,i+.15,-.08],[e+.05,i+.03,.25],[e-.03,i-.08,.4]],.012,ae("#f2edda"),qt)}for(let n=0;n<3;n++)Te([-.5+n*.04,.52-n*.1,.29],[.12,.16,.15],j.cream,qt);const uc=nn([0,1.05,0],.77,.019,j.copper,qt);uc.rotation.z=.14;const j_=new co("#ffbb62",.9,3);j_.position.set(0,.2,.9);const Yr=nn([-.15,.26,.85],.7,.018,j.copper),tr=ke(new to(.64,32),new ar({color:"#304b3d",transparent:!0,opacity:.17,depthWrite:!1}),[-.15,.162,.85],null);tr.rotation.x=-Math.PI/2;tr.castShadow=!1;const Mi=new C(-.15,1.9,.85),yn=Oe([-6,2.18,-3.25]);for(let n=0;n<34;n++){const t=n/34*Math.PI*2,e=kt([0,Math.sin(t)*1.83,Math.cos(t)*1.83],[.84,.12,.31],n%4?j.cream:j.concrete,yn);e.rotation.x=Math.PI/2-t,n%3===0&&He([-.42,Math.sin(t)*1.84,Math.cos(t)*1.84],[-.42,Math.sin(t)*2.07,Math.cos(t)*2.07],.018,j.copper,yn)}for(const n of[-.45,.45])nn([n,0,0],2.07,.025,j.copper,yn,[0,Math.PI/2,0]);for(const n of[-.34,.34])nn([n,0,0],1.7,.075,j.concrete,yn,[0,Math.PI/2,0]);He([0,-2.15,-1.2],[0,-1.58,-.8],.07,j.metal,yn);He([0,-2.15,1.2],[0,-1.58,.8],.07,j.metal,yn);Vi("ОБРАТНО",[.49,-.55,.2],1.15,.3,yn,{size:42}).rotation.y=Math.PI/2;for(let n=0;n<6;n++){const t=-10+de()*20,e=-8+de()*17;Math.abs(t)<7.7&&Math.abs(e)<6.3||ke(Ss.ico,ae("#47675f"),[t,-1.3-de()*2,e],[.22+de()*.55,.19+de()*.4,.27+de()*.4])}const of=new Le,lf=[];for(let n=0;n<75;n++)lf.push((de()-.5)*25,de()*9-2,(de()-.5)*22);of.setAttribute("position",new le(lf,3));const cf=new yu(of,new zl({color:"#b6c9a6",size:.027,transparent:!0,opacity:.45,depthWrite:!1}));li.add(cf);function fn(n,t){const e=new Map;n.updateMatrixWorld(!0);const i=n.matrixWorld.clone().invert(),s=[];n.traverse(r=>{!r.isMesh||t.some(a=>{let o=r;for(;o;){if(o===a)return!0;o=o.parent}return!1})||r.material.transparent||r.material.isShaderMaterial||r.material.map&&!r.material.isMeshStandardMaterial||s.push(r)});for(const r of s){const a=r.material.uuid,o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();o.applyMatrix4(new xe().multiplyMatrices(i,r.matrixWorld));let l=e.get(a);l||e.set(a,l={material:r.material,geos:[]}),l.geos.push(o),r.removeFromParent()}for(const{material:r,geos:a}of e.values()){const o=Z_(a,!1);o&&ke(o,r,null,null,n),a.forEach(l=>l.dispose())}}fn(Ve,[qt,$e,Ie,an,Un,Ye,ge,yn,mo,...cc,...po,...ac,Yr,tr,Nn.travel]);fn(ge,[un]);fn(un,[]);fn(yn,[]);fn(qt,[uc]);qt.traverse(n=>{n.isMesh&&(n.castShadow=!1)});fn(an,[...po]);fn(Un,[]);fn(Ye,[Nn.gallery,Nn.beacon]);fn(Ie,[...hr.map(n=>n.group),fo,oc,ef]);hr.forEach(n=>fn(n.group,[]));const er=Oe([0,.33,0],$e);ml.forEach(n=>{er.add(n),n.position.y-=.33});fn(er,[]);fn($e,[er]);const Ti={stair:{n:"08",label:"петля",title:"лестница обратно",description:"Ног нет, а лестницу всё равно построил. Здесь своя гравитация. Выход там же, где вход.",action:"прокатиться головой",point:()=>new C(-6,4.55,-3.25),position:new C(-6,2.2,-3.25),run:()=>{ut.loop>0||(ut.loop=12,uf.copy(qt.position),Rn("ноги не понадобились"),_n())}},workshop:{n:"07",label:"мастерская",title:"дома без фильтров",description:"Здесь два старых монитора, провода и никакого дедлайна. Крышу можно отодвинуть.",action:"отодвинуть крышу",point:()=>new C(-3.2,3.15,-2.5),position:new C(-3.2,1.1,-2.5),run:()=>{ut.roof=ut.roof?0:1,Rn(ut.roof?"заходи":"прикрыл"),_n()}},head:{n:"01",label:"голова",title:"это я. безногим.",description:"Парю, слежу за чайником. К маятникам близко не подлетаю: уже зависал.",action:"позвать голову",point:()=>qt.position.clone().add(new C(0,1.35,0)),position:new C(-.15,1.9,.85),run:()=>{const n=["чё как","ног нет, чай есть","я тут поживу","не, на маятнике завис","ну запусти, чё"];Rn(n[tx++%n.length]),Mi.set(-.15,1.9,.85)}},engine:{n:"02",label:"маятники",title:"машина тихого хода",description:"Пять маятников думают каждый о своём. Запусти их: загорится мастерская и проснётся вода.",action:"запустить маятники",point:()=>new C(3.7,3.85,-2.6),position:new C(3.7,1,-2.6),run:()=>{ut.running=!ut.running,dl(),Rn(ut.running?"ну пошло":"можно и полежать"),_n()}},tea:{n:"03",label:"чайник",title:"ног нет, чай есть",description:"Чайник работает без подписки. Поставь чай, я подлечу.",action:"поставить чай",point:()=>new C(-3.7,1.65,.35),position:new C(-3.8,1,.35),run:()=>{ut.brew>0||(ut.brew=8,ut.teaCount++,Mi.set(-2.65,1.7,.65),Rn("щас, чайник поставлю"),_n())}},garden:{n:"04",label:"огород",title:"королевские кобачки",description:"Кабачки и баклажаны живут рядом. Очень спокойная форма интеллекта.",action:"собрать и вырастить снова",point:()=>new C(-3.4,1,3.8),position:new C(-3.6,1,3.55),run:()=>{ut.harvest++,Vs=.15,dl(),Mi.set(-1.6,1.6,2.3),Rn(ut.harvest===1?"о, урожай":"кабачки опять победили"),_n()}},radio:{n:"05",label:"радио",title:"никто не вещает",description:"Три станции: дождь, провода, тишина. Музыку здесь делает само электричество.",action:"покрутить ручку",point:()=>new C(-5.65,1.75,1.1),position:new C(-5.65,1,1.1),run:()=>{ut.radio=(ut.radio+1)%3,pf(),Rn(["тишина. нормально.","дождь поймал","провода поют"][ut.radio]),_n()}},dock:{n:"06",label:"причал",title:"из никуда обратно",description:"Бумажный кораблик научился возвращаться. Иногда с чем-то на борту.",action:"отпустить и дождаться",point:()=>new C(7.4,2.75,1.1),position:new C(7.25,.9,1.5),run:()=>{Nn.launchOrCollect(),ut.dockPending===!1&&ut.boat===0&&Mi.set(5.85,1.7,1.05)}}};let tx=0,Vs=1,hf=0,qr=0;const uf=new C;let ff=()=>{nr("engine"),Ti.engine.run()};const Oa={};for(const[n,t]of Object.entries(Ti)){const e=document.createElement("button");e.className="hotspot",e.textContent=t.n,e.dataset.label=t.label,e.title=t.label,e.setAttribute("aria-label",t.label),e.onclick=()=>nr(n),Yt("#hotspots").append(e),Oa[n]=e}function nr(n){ut.selected=n,Yt("#inspector").classList.remove("collapsed");const t=Ti[n];Yt("#object-kicker").textContent=`${t.n} / ${t.label.toUpperCase()}`,Yt("#object-title").textContent=t.title,Yt("#object-description").textContent=t.description,ff=t.run,Yt("#focus-object").hidden=!1,Yt("#focus-object").textContent=Ba===n?"весь двор ⌂":"осмотреть ближе ⊕",_n();for(const[e,i]of Object.entries(Oa))i.classList.toggle("selected",e===n)}function _n(){const n=ut.selected,t=Ti[n];if(Yt("#status").textContent=ut.running?"двор проснулся":"всё потихоньку",!t)return;let e=t.action,i=t.description,s=!1;if(n==="stair"&&(s=ut.loop>0,e=s?"кручусь…":t.action),n==="workshop"&&(e=ut.roof?"закрыть крышу":t.action),n==="engine"&&(e=ut.running?"остановить и отдохнуть":"запустить маятники",i=ut.running?"Качаются. Свет горит, вода идёт. Можно ничего больше не делать.":t.description),n==="tea"&&(s=ut.brew>0,e=s?"чай заваривается…":t.action,i=ut.teaCount?"Чай поставлен. Подлетел, посидел. Хорошо.":t.description),n==="garden"&&ut.harvest&&(i=`Уже собрано: ${ut.harvest}. Растут обратно, пока никто не смотрит.`),n==="radio"&&(i=`Сейчас: ${["тишина","дождь","провода"][ut.radio]}. ${ut.sound?"Звук включён.":"Чтобы услышать, включи звук внизу."}`),n==="dock"){const r=Nn.card();s=r.disabled,e=r.action,i=r.description}Yt("#object-description").textContent=i,Yt("#object-action").innerHTML=e+" <span>↗</span>",Yt("#object-action").disabled=s}Yt("#object-action").onclick=()=>{ff(),qr=performance.now()+2200};Yt("#close-card").onclick=()=>Yt("#inspector").classList.add("collapsed");function Rn(n){Yt("#speech").textContent=n,hf=performance.now()+4e3,Yt("#speech").classList.add("visible")}Yt("#markers").onclick=()=>{ut.markers=!ut.markers,Yt("#markers").setAttribute("aria-pressed",ut.markers)};let Ba=null;const _i={angle:Math.PI/4,targetAngle:Math.PI/4};function df(){const n=innerWidth/innerHeight,t=ni()?19.6:9.6;Ee.left=-t*n,Ee.right=t*n,Ee.top=t-(ni()?2.8:0),Ee.bottom=-t-(ni()?2.8:0),Ee.updateProjectionMatrix(),we.setSize(innerWidth,innerHeight),we.setPixelRatio(Math.min(devicePixelRatio,ni()?1.5:2))}function fc(){Ba=null,document.body.classList.remove("close-look"),Yt("#focus-object").textContent="осмотреть ближе ⊕",Se.enableDamping=!1,Se.update(),Se.enableDamping=!0,Ee.zoom=1,Se.target.copy(nc),_i.targetAngle=Math.PI/4,Ee.updateProjectionMatrix()}Yt("#focus-object").onclick=()=>{if(ut.selected){if(Ba===ut.selected){fc();return}Ba=ut.selected,document.body.classList.add("close-look"),Yt("#focus-object").textContent="весь двор ⌂",Se.enableDamping=!1,Se.update(),Se.enableDamping=!0,Se.target.copy(Ti[ut.selected].position),ni()&&(Se.target.y+=1.6),Ee.zoom=ni()?2.5:2.1,Ee.updateProjectionMatrix()}};Yt("#home").onclick=fc;Yt("#zoom-in").onclick=()=>{Ee.zoom=Math.min(2.5,Ee.zoom*1.2),Ee.updateProjectionMatrix()};Yt("#zoom-out").onclick=()=>{Ee.zoom=Math.max(.65,Ee.zoom/1.2),Ee.updateProjectionMatrix()};Yt("#rotate").onclick=()=>_i.targetAngle+=Math.PI/2;addEventListener("resize",df);df();const Ph=new Gu,Lh=new ot;let Di=null;we.domElement.addEventListener("pointerdown",n=>{Di={x:n.clientX,y:n.clientY,time:performance.now()}});we.domElement.addEventListener("pointerup",n=>{if(!Di||Math.hypot(n.clientX-Di.x,n.clientY-Di.y)>7||performance.now()-Di.time>550){Di=null;return}Di=null,Lh.set(n.clientX/innerWidth*2-1,-n.clientY/innerHeight*2+1),Ph.setFromCamera(Lh,Ee);const t=Ph.intersectObjects([qt,Ie,$e,an,Un,Ye,ge,yn,Nn.travel],!0);if(t.length){let e=t[0].object;for(;e.parent&&![qt,Ie,$e,an,Un,Ye,ge,yn,Nn.travel].includes(e);)e=e.parent;const i=new Map([[qt,"head"],[Ie,"engine"],[$e,"garden"],[an,"tea"],[Un,"radio"],[Ye,"dock"],[ge,"workshop"],[yn,"stair"],[Nn.travel,"dock"]]).get(e);i&&nr(i)}else{let e=null,i=1/0;for(const[s,r]of Object.entries(Ti)){const a=r.position.clone().project(Ee);let o=Math.hypot((a.x+1)*innerWidth*.5-n.clientX,(-a.y+1)*innerHeight*.5-n.clientY);o<i&&(i=o,e=s)}i<45&&nr(e)}});let hn=null;function ex(){const n=new(window.AudioContext||window.webkitAudioContext),t=n.createGain();t.gain.value=.08,t.connect(n.destination);const e=n.createBiquadFilter();e.type="lowpass",e.frequency.value=400,e.connect(t);const i=n.createBuffer(1,n.sampleRate*3,n.sampleRate),s=i.getChannelData(0);for(let l=0;l<s.length;l++)s[l]=Math.random()*2-1;const r=n.createBufferSource();r.buffer=i,r.loop=!0,r.connect(e),r.start();const a=n.createGain();a.gain.value=.1,a.connect(t);const o=[55,82.41,110].map(l=>{let c=n.createOscillator();return c.type="sine",c.frequency.value=l,c.connect(a),c.start(),c});return{ctx:n,gain:t,filter:e,toneGain:a,tones:o}}function pf(){if(!hn)return;const n=hn.ctx.currentTime;hn.filter.frequency.setTargetAtTime([160,1100,260][ut.radio],n,.4),hn.toneGain.gain.setTargetAtTime([.05,.025,.3][ut.radio],n,.4)}Yt("#sound").onclick=async()=>{try{hn||(hn=ex()),await hn.ctx.resume(),ut.sound=!ut.sound,hn.gain.gain.setTargetAtTime(ut.sound?.08:0,hn.ctx.currentTime,.3),Yt("#sound").textContent=ut.sound?"звук включён":"звук выключен",Yt("#sound").setAttribute("aria-pressed",ut.sound),pf(),_n()}catch{Rn("со звуком не сложилось")}};function gl(n=330){if(!hn||!ut.sound)return;const t=hn.ctx.currentTime,e=hn.ctx.createOscillator(),i=hn.ctx.createGain();e.type="sine",e.frequency.value=n,i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.12,t+.012),i.gain.exponentialRampToValueAtTime(.001,t+1),e.connect(i),i.connect(hn.gain),e.start(t),e.stop(t+1.1)}Yt("#about").onclick=()=>Yt("#about-dialog").showModal();Yt("#close-about").onclick=Yt("#back-to-yard").onclick=()=>Yt("#about-dialog").close();addEventListener("keydown",n=>{Yt("#about-dialog").open||(n.key==="Escape"&&Yt("#inspector").classList.add("collapsed"),(n.key==="+"||n.key==="=")&&Yt("#zoom-in").click(),n.key==="-"&&Yt("#zoom-out").click(),n.key.toLowerCase()==="r"&&Yt("#rotate").click(),n.key.toLowerCase()==="h"&&fc())});let Dh=performance.now(),Jo=0,Ih=0;function _l(n){return n.project(Ee),{x:(n.x+1)*innerWidth/2,y:(1-n.y)*innerHeight/2,z:n.z}}function nx(){const n=performance.now(),t=(n-Dh)/1e3;Dh=n,Jo+=t,ut.energy=gn.damp(ut.energy,ut.running?1:0,1.6,t);const e=ju?Jo*.2:Jo;_i.angle=gn.damp(_i.angle,_i.targetAngle,5,t);const i=34;Ee.position.set(Se.target.x+Math.sin(_i.angle)*i,Se.target.y+i*Math.SQRT1_2,Se.target.z+Math.cos(_i.angle)*i),Ee.lookAt(Se.target),Se.update();for(const r of hr)r.group.rotation.x=Math.sin(e*(1.45+r.phase*.07))*ut.energy*.45;if(un.position.z=gn.damp(un.position.z,ut.roof||ut.running||ut.loop>0?-2.5:0,2,t),un.position.y=gn.damp(un.position.y,ut.roof||ut.running||ut.loop>0?.4:0,2,t),fo.rotation.z=e*ut.energy*.28,oc.rotation.z=-.7+ut.energy*1.35+Math.sin(e*4)*ut.energy*.08,ef.material.emissiveIntensity=.45+ut.energy*1.5,pl.uniforms.uTime.value=e,pl.uniforms.uEnergy.value=ut.energy,mo.rotation.z=e*(.09+ut.energy*.23),nf.forEach(r=>r.intensity=.65+ut.energy*1.5),rc.intensity=2+ut.energy*4,qt.position.x=gn.damp(qt.position.x,Mi.x,1.6,t),qt.position.z=gn.damp(qt.position.z,Mi.z,1.6,t),qt.position.y=gn.damp(qt.position.y,Mi.y+Math.sin(e*1.4)*.1,2,t),ut.loop>0){ut.loop=Math.max(0,ut.loop-t);const r=12-ut.loop;if(r<2){const a=gn.smoothstep(r,0,2);qt.position.lerpVectors(uf,new C(-6,.65,-3.25),a)}else if(r<10){const a=-Math.PI/2+(r-2)/8*Math.PI*2;qt.position.set(-6,2.18+Math.sin(a)*1.6,-3.25+Math.cos(a)*1.6),qt.rotation.x=(r-2)/8*Math.PI*2}else{const a=gn.smoothstep(r,10,12);qt.position.lerpVectors(new C(-6,.65,-3.25),Mi,a),qt.rotation.x=(1-a)*Math.PI*2}ut.loop||(qt.rotation.x=0,Rn("ну вот и дома"),_n())}qt.rotation.y=Math.sin(e*.3)*.12,uc.rotation.y=e*.13,Yr.position.x=qt.position.x,Yr.position.z=qt.position.z,Yr.rotation.z=.04*Math.sin(e),tr.position.x=qt.position.x,tr.position.z=qt.position.z,Vs=gn.damp(Vs,1,.85,t),er.scale.y=Vs,er.rotation.z=Math.sin(e*.9)*.009,ut.brew>0&&(ut.brew=Math.max(0,ut.brew-t),ut.brew===0&&(Rn("чай готов. живём."),_n(),gl(440))),po.forEach((r,a)=>{const o=(e*.28+a/9)%1;r.visible=ut.brew>0,r.position.set(.1+Math.sin(o*4+a)*.08,1.2+o*.85,Math.cos(o*5+a)*.07),r.scale.setScalar(.035+o*.09)}),cc.forEach((r,a)=>{r.position.x=3.4+a*.75+Math.sin(e*.2+a)*.17,r.position.z=3.5+Math.sin(e*.26+a*2)*.58,r.position.y=.35+Math.sin(e*1.2+a)*.022,r.rotation.y=.3+Math.sin(e*.2+a)*.2}),Nn.update(t,e),Oa.dock.classList.toggle("waiting",ut.dockPending),ac.forEach((r,a)=>{r.scale.y=.8+Math.sin(e*2+a)*.12,r.material.opacity=.25+ut.energy*.23}),cf.rotation.y=e*.003,ut.running&&e-Ih>3.5&&(Ih=e,gl([220,277,330,415,440][Math.floor(e)%5]));for(const[r,a]of Object.entries(Ti)){const o=_l(a.point()),l=Oa[r];l.style.left=o.x+"px",l.style.top=o.y+"px",l.classList.toggle("hidden",!ut.markers||o.z>1||o.x<10||o.x>innerWidth-10||o.y<10||o.y>innerHeight-55)}const s=_l(qt.position.clone().add(new C(0,1.52,0)));Yt("#speech").style.left=Math.max(85,Math.min(innerWidth-85,s.x))+"px",Yt("#speech").style.top=s.y+"px",performance.now()>hf&&Yt("#speech").classList.remove("visible"),qr&&performance.now()>qr&&(we.shadowMap.needsUpdate=!0,qr=0),we.render(li,Ee)}ut.running&&(Yt("#object-action").innerHTML="остановить двор <span>↗</span>");_n();we.setAnimationLoop(nx);requestAnimationFrame(()=>Yt("#loading").classList.add("done"));window.__yard={state:ut,select:nr,inspect:()=>({objects:Object.keys(Ti),dock:Nn.inspect(),boatScreen:_l(new C(...Nn.inspect().boat).add(new C(0,.2,0))),drawCalls:we.info.render.calls,triangles:we.info.render.triangles,gpuGeometries:we.info.memory.geometries,zoom:Ee.zoom,target:Se.target.toArray(),angle:_i.angle,head:qt.position.toArray(),roof:un.position.toArray(),pendulums:hr.map(n=>n.group.rotation.x),growth:Vs,meshes:(()=>{let n=0;return li.traverse(t=>{t.isMesh&&n++}),n})(),canvas:[we.domElement.width,we.domElement.height]})};
