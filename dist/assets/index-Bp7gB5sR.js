var S_=Object.defineProperty;var v_=(r,A,e)=>A in r?S_(r,A,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[A]=e;var a=(r,A,e)=>(v_(r,typeof A!="symbol"?A+"":A,e),e);(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kf(r,A){const e=new Set(r.split(","));return A?t=>e.has(t.toLowerCase()):t=>e.has(t)}const ve={},Bo=[],br=()=>{},w_=()=>!1,Gc=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&(r.charCodeAt(2)>122||r.charCodeAt(2)<97),zf=r=>r.startsWith("onUpdate:"),st=Object.assign,Gf=(r,A)=>{const e=r.indexOf(A);e>-1&&r.splice(e,1)},b_=Object.prototype.hasOwnProperty,Ae=(r,A)=>b_.call(r,A),RA=Array.isArray,To=r=>pu(r)==="[object Map]",Vc=r=>pu(r)==="[object Set]",Sp=r=>pu(r)==="[object Date]",kA=r=>typeof r=="function",Ve=r=>typeof r=="string",kn=r=>typeof r=="symbol",ye=r=>r!==null&&typeof r=="object",jm=r=>(ye(r)||kA(r))&&kA(r.then)&&kA(r.catch),Wm=Object.prototype.toString,pu=r=>Wm.call(r),I_=r=>pu(r).slice(8,-1),Ym=r=>pu(r)==="[object Object]",Vf=r=>Ve(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,dl=kf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qc=r=>{const A=Object.create(null);return e=>A[e]||(A[e]=r(e))},B_=/-(\w)/g,vi=Qc(r=>r.replace(B_,(A,e)=>e?e.toUpperCase():"")),T_=/\B([A-Z])/g,Ks=Qc(r=>r.replace(T_,"-$1").toLowerCase()),Hc=Qc(r=>r.charAt(0).toUpperCase()+r.slice(1)),lh=Qc(r=>r?`on${Hc(r)}`:""),zn=(r,A)=>!Object.is(r,A),fl=(r,A)=>{for(let e=0;e<r.length;e++)r[e](A)},Vl=(r,A,e)=>{Object.defineProperty(r,A,{configurable:!0,enumerable:!1,value:e})},Za=r=>{const A=parseFloat(r);return isNaN(A)?r:A},D_=r=>{const A=Ve(r)?Number(r):NaN;return isNaN(A)?r:A};let vp;const $m=()=>vp||(vp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gu(r){if(RA(r)){const A={};for(let e=0;e<r.length;e++){const t=r[e],i=Ve(t)?R_(t):gu(t);if(i)for(const n in i)A[n]=i[n]}return A}else if(Ve(r)||ye(r))return r}const x_=/;(?![^(]*\))/g,O_=/:([^]+)/,M_=/\/\*[^]*?\*\//g;function R_(r){const A={};return r.replace(M_,"").split(x_).forEach(e=>{if(e){const t=e.split(O_);t.length>1&&(A[t[0].trim()]=t[1].trim())}}),A}function Wo(r){let A="";if(Ve(r))A=r;else if(RA(r))for(let e=0;e<r.length;e++){const t=Wo(r[e]);t&&(A+=t+" ")}else if(ye(r))for(const e in r)r[e]&&(A+=e+" ");return A.trim()}const P_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F_=kf(P_);function Km(r){return!!r||r===""}function N_(r,A){if(r.length!==A.length)return!1;let e=!0;for(let t=0;e&&t<r.length;t++)e=Au(r[t],A[t]);return e}function Au(r,A){if(r===A)return!0;let e=Sp(r),t=Sp(A);if(e||t)return e&&t?r.getTime()===A.getTime():!1;if(e=kn(r),t=kn(A),e||t)return r===A;if(e=RA(r),t=RA(A),e||t)return e&&t?N_(r,A):!1;if(e=ye(r),t=ye(A),e||t){if(!e||!t)return!1;const i=Object.keys(r).length,n=Object.keys(A).length;if(i!==n)return!1;for(const s in r){const o=r.hasOwnProperty(s),u=A.hasOwnProperty(s);if(o&&!u||!o&&u||!Au(r[s],A[s]))return!1}}return String(r)===String(A)}function L_(r,A){return r.findIndex(e=>Au(e,A))}const wi=r=>Ve(r)?r:r==null?"":RA(r)||ye(r)&&(r.toString===Wm||!kA(r.toString))?JSON.stringify(r,qm,2):String(r),qm=(r,A)=>A&&A.__v_isRef?qm(r,A.value):To(A)?{[`Map(${A.size})`]:[...A.entries()].reduce((e,[t,i],n)=>(e[ch(t,n)+" =>"]=i,e),{})}:Vc(A)?{[`Set(${A.size})`]:[...A.values()].map(e=>ch(e))}:kn(A)?ch(A):ye(A)&&!RA(A)&&!Ym(A)?String(A):A,ch=(r,A="")=>{var e;return kn(r)?`Symbol(${(e=r.description)!=null?e:A})`:r};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zr;class U_{constructor(A=!1){this.detached=A,this._active=!0,this.effects=[],this.cleanups=[],this.parent=zr,!A&&zr&&(this.index=(zr.scopes||(zr.scopes=[])).push(this)-1)}get active(){return this._active}run(A){if(this._active){const e=zr;try{return zr=this,A()}finally{zr=e}}}on(){zr=this}off(){zr=this.parent}stop(A){if(this._active){let e,t;for(e=0,t=this.effects.length;e<t;e++)this.effects[e].stop();for(e=0,t=this.cleanups.length;e<t;e++)this.cleanups[e]();if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!A){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function k_(r,A=zr){A&&A.active&&A.effects.push(r)}function z_(){return zr}let Bs;class Qf{constructor(A,e,t,i){this.fn=A,this.trigger=e,this.scheduler=t,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,k_(this,i)}get dirty(){if(this._dirtyLevel===1){qs();for(let A=0;A<this._depsLength;A++){const e=this.deps[A];if(e.computed&&(G_(e.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Xs()}return this._dirtyLevel>=2}set dirty(A){this._dirtyLevel=A?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let A=Nn,e=Bs;try{return Nn=!0,Bs=this,this._runnings++,wp(this),this.fn()}finally{bp(this),this._runnings--,Bs=e,Nn=A}}stop(){var A;this.active&&(wp(this),bp(this),(A=this.onStop)==null||A.call(this),this.active=!1)}}function G_(r){return r.value}function wp(r){r._trackId++,r._depsLength=0}function bp(r){if(r.deps&&r.deps.length>r._depsLength){for(let A=r._depsLength;A<r.deps.length;A++)Xm(r.deps[A],r);r.deps.length=r._depsLength}}function Xm(r,A){const e=r.get(A);e!==void 0&&A._trackId!==e&&(r.delete(A),r.size===0&&r.cleanup())}let Nn=!0,xd=0;const Jm=[];function qs(){Jm.push(Nn),Nn=!1}function Xs(){const r=Jm.pop();Nn=r===void 0?!0:r}function Hf(){xd++}function jf(){for(xd--;!xd&&Od.length;)Od.shift()()}function Zm(r,A,e){if(A.get(r)!==r._trackId){A.set(r,r._trackId);const t=r.deps[r._depsLength];t!==A?(t&&Xm(t,r),r.deps[r._depsLength++]=A):r._depsLength++}}const Od=[];function A3(r,A,e){Hf();for(const t of r.keys())if(t._dirtyLevel<A&&r.get(t)===t._trackId){const i=t._dirtyLevel;t._dirtyLevel=A,i===0&&(t._shouldSchedule=!0,t.trigger())}e3(r),jf()}function e3(r){for(const A of r.keys())A.scheduler&&A._shouldSchedule&&(!A._runnings||A.allowRecurse)&&r.get(A)===A._trackId&&(A._shouldSchedule=!1,Od.push(A.scheduler))}const t3=(r,A)=>{const e=new Map;return e.cleanup=r,e.computed=A,e},Md=new WeakMap,Ts=Symbol(""),Rd=Symbol("");function qt(r,A,e){if(Nn&&Bs){let t=Md.get(r);t||Md.set(r,t=new Map);let i=t.get(e);i||t.set(e,i=t3(()=>t.delete(e))),Zm(Bs,i)}}function Ki(r,A,e,t,i,n){const s=Md.get(r);if(!s)return;let o=[];if(A==="clear")o=[...s.values()];else if(e==="length"&&RA(r)){const u=Number(t);s.forEach((l,c)=>{(c==="length"||!kn(c)&&c>=u)&&o.push(l)})}else switch(e!==void 0&&o.push(s.get(e)),A){case"add":RA(r)?Vf(e)&&o.push(s.get("length")):(o.push(s.get(Ts)),To(r)&&o.push(s.get(Rd)));break;case"delete":RA(r)||(o.push(s.get(Ts)),To(r)&&o.push(s.get(Rd)));break;case"set":To(r)&&o.push(s.get(Ts));break}Hf();for(const u of o)u&&A3(u,2);jf()}const V_=kf("__proto__,__v_isRef,__isVue"),r3=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(kn)),Ip=Q_();function Q_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(A=>{r[A]=function(...e){const t=re(this);for(let n=0,s=this.length;n<s;n++)qt(t,"get",n+"");const i=t[A](...e);return i===-1||i===!1?t[A](...e.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(A=>{r[A]=function(...e){qs(),Hf();const t=re(this)[A].apply(this,e);return jf(),Xs(),t}}),r}function H_(r){const A=re(this);return qt(A,"has",r),A.hasOwnProperty(r)}class i3{constructor(A=!1,e=!1){this._isReadonly=A,this._shallow=e}get(A,e,t){const i=this._isReadonly,n=this._shallow;if(e==="__v_isReactive")return!i;if(e==="__v_isReadonly")return i;if(e==="__v_isShallow")return n;if(e==="__v_raw")return t===(i?n?rS:a3:n?o3:s3).get(A)||Object.getPrototypeOf(A)===Object.getPrototypeOf(t)?A:void 0;const s=RA(A);if(!i){if(s&&Ae(Ip,e))return Reflect.get(Ip,e,t);if(e==="hasOwnProperty")return H_}const o=Reflect.get(A,e,t);return(kn(e)?r3.has(e):V_(e))||(i||qt(A,"get",e),n)?o:Xt(o)?s&&Vf(e)?o:o.value:ye(o)?i?u3(o):Wc(o):o}}class n3 extends i3{constructor(A=!1){super(!1,A)}set(A,e,t,i){let n=A[e];if(!this._shallow){const u=Yo(n);if(!Ql(t)&&!Yo(t)&&(n=re(n),t=re(t)),!RA(A)&&Xt(n)&&!Xt(t))return u?!1:(n.value=t,!0)}const s=RA(A)&&Vf(e)?Number(e)<A.length:Ae(A,e),o=Reflect.set(A,e,t,i);return A===re(i)&&(s?zn(t,n)&&Ki(A,"set",e,t):Ki(A,"add",e,t)),o}deleteProperty(A,e){const t=Ae(A,e);A[e];const i=Reflect.deleteProperty(A,e);return i&&t&&Ki(A,"delete",e,void 0),i}has(A,e){const t=Reflect.has(A,e);return(!kn(e)||!r3.has(e))&&qt(A,"has",e),t}ownKeys(A){return qt(A,"iterate",RA(A)?"length":Ts),Reflect.ownKeys(A)}}class j_ extends i3{constructor(A=!1){super(!0,A)}set(A,e){return!0}deleteProperty(A,e){return!0}}const W_=new n3,Y_=new j_,$_=new n3(!0),Wf=r=>r,jc=r=>Reflect.getPrototypeOf(r);function Qu(r,A,e=!1,t=!1){r=r.__v_raw;const i=re(r),n=re(A);e||(zn(A,n)&&qt(i,"get",A),qt(i,"get",n));const{has:s}=jc(i),o=t?Wf:e?Kf:eu;if(s.call(i,A))return o(r.get(A));if(s.call(i,n))return o(r.get(n));r!==i&&r.get(A)}function Hu(r,A=!1){const e=this.__v_raw,t=re(e),i=re(r);return A||(zn(r,i)&&qt(t,"has",r),qt(t,"has",i)),r===i?e.has(r):e.has(r)||e.has(i)}function ju(r,A=!1){return r=r.__v_raw,!A&&qt(re(r),"iterate",Ts),Reflect.get(r,"size",r)}function Bp(r){r=re(r);const A=re(this);return jc(A).has.call(A,r)||(A.add(r),Ki(A,"add",r,r)),this}function Tp(r,A){A=re(A);const e=re(this),{has:t,get:i}=jc(e);let n=t.call(e,r);n||(r=re(r),n=t.call(e,r));const s=i.call(e,r);return e.set(r,A),n?zn(A,s)&&Ki(e,"set",r,A):Ki(e,"add",r,A),this}function Dp(r){const A=re(this),{has:e,get:t}=jc(A);let i=e.call(A,r);i||(r=re(r),i=e.call(A,r)),t&&t.call(A,r);const n=A.delete(r);return i&&Ki(A,"delete",r,void 0),n}function xp(){const r=re(this),A=r.size!==0,e=r.clear();return A&&Ki(r,"clear",void 0,void 0),e}function Wu(r,A){return function(t,i){const n=this,s=n.__v_raw,o=re(s),u=A?Wf:r?Kf:eu;return!r&&qt(o,"iterate",Ts),s.forEach((l,c)=>t.call(i,u(l),u(c),n))}}function Yu(r,A,e){return function(...t){const i=this.__v_raw,n=re(i),s=To(n),o=r==="entries"||r===Symbol.iterator&&s,u=r==="keys"&&s,l=i[r](...t),c=e?Wf:A?Kf:eu;return!A&&qt(n,"iterate",u?Rd:Ts),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:o?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function hn(r){return function(...A){return r==="delete"?!1:r==="clear"?void 0:this}}function K_(){const r={get(n){return Qu(this,n)},get size(){return ju(this)},has:Hu,add:Bp,set:Tp,delete:Dp,clear:xp,forEach:Wu(!1,!1)},A={get(n){return Qu(this,n,!1,!0)},get size(){return ju(this)},has:Hu,add:Bp,set:Tp,delete:Dp,clear:xp,forEach:Wu(!1,!0)},e={get(n){return Qu(this,n,!0)},get size(){return ju(this,!0)},has(n){return Hu.call(this,n,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Wu(!0,!1)},t={get(n){return Qu(this,n,!0,!0)},get size(){return ju(this,!0)},has(n){return Hu.call(this,n,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Wu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(n=>{r[n]=Yu(n,!1,!1),e[n]=Yu(n,!0,!1),A[n]=Yu(n,!1,!0),t[n]=Yu(n,!0,!0)}),[r,e,A,t]}const[q_,X_,J_,Z_]=K_();function Yf(r,A){const e=A?r?Z_:J_:r?X_:q_;return(t,i,n)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?t:Reflect.get(Ae(e,i)&&i in t?e:t,i,n)}const AS={get:Yf(!1,!1)},eS={get:Yf(!1,!0)},tS={get:Yf(!0,!1)},s3=new WeakMap,o3=new WeakMap,a3=new WeakMap,rS=new WeakMap;function iS(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nS(r){return r.__v_skip||!Object.isExtensible(r)?0:iS(I_(r))}function Wc(r){return Yo(r)?r:$f(r,!1,W_,AS,s3)}function sS(r){return $f(r,!1,$_,eS,o3)}function u3(r){return $f(r,!0,Y_,tS,a3)}function $f(r,A,e,t,i){if(!ye(r)||r.__v_raw&&!(A&&r.__v_isReactive))return r;const n=i.get(r);if(n)return n;const s=nS(r);if(s===0)return r;const o=new Proxy(r,s===2?t:e);return i.set(r,o),o}function Do(r){return Yo(r)?Do(r.__v_raw):!!(r&&r.__v_isReactive)}function Yo(r){return!!(r&&r.__v_isReadonly)}function Ql(r){return!!(r&&r.__v_isShallow)}function l3(r){return Do(r)||Yo(r)}function re(r){const A=r&&r.__v_raw;return A?re(A):r}function c3(r){return Vl(r,"__v_skip",!0),r}const eu=r=>ye(r)?Wc(r):r,Kf=r=>ye(r)?u3(r):r;class h3{constructor(A,e,t,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qf(()=>A(this._value),()=>pl(this,1),()=>this.dep&&e3(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=t}get value(){const A=re(this);return(!A._cacheable||A.effect.dirty)&&zn(A._value,A._value=A.effect.run())&&pl(A,2),d3(A),A.effect._dirtyLevel>=1&&pl(A,1),A._value}set value(A){this._setter(A)}get _dirty(){return this.effect.dirty}set _dirty(A){this.effect.dirty=A}}function oS(r,A,e=!1){let t,i;const n=kA(r);return n?(t=r,i=br):(t=r.get,i=r.set),new h3(t,i,n||!i,e)}function d3(r){Nn&&Bs&&(r=re(r),Zm(Bs,r.dep||(r.dep=t3(()=>r.dep=void 0,r instanceof h3?r:void 0))))}function pl(r,A=2,e){r=re(r);const t=r.dep;t&&A3(t,A)}function Xt(r){return!!(r&&r.__v_isRef===!0)}function aS(r){return uS(r,!1)}function uS(r,A){return Xt(r)?r:new lS(r,A)}class lS{constructor(A,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?A:re(A),this._value=e?A:eu(A)}get value(){return d3(this),this._value}set value(A){const e=this.__v_isShallow||Ql(A)||Yo(A);A=e?A:re(A),zn(A,this._rawValue)&&(this._rawValue=A,this._value=e?A:eu(A),pl(this,2))}}function fr(r){return Xt(r)?r.value:r}const cS={get:(r,A,e)=>fr(Reflect.get(r,A,e)),set:(r,A,e,t)=>{const i=r[A];return Xt(i)&&!Xt(e)?(i.value=e,!0):Reflect.set(r,A,e,t)}};function f3(r){return Do(r)?r:new Proxy(r,cS)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(r,A,e,t){let i;try{i=t?r(...t):r()}catch(n){Yc(n,A,e)}return i}function Dr(r,A,e,t){if(kA(r)){const n=Ln(r,A,e,t);return n&&jm(n)&&n.catch(s=>{Yc(s,A,e)}),n}const i=[];for(let n=0;n<r.length;n++)i.push(Dr(r[n],A,e,t));return i}function Yc(r,A,e,t=!0){const i=A?A.vnode:null;if(A){let n=A.parent;const s=A.proxy,o=`https://vuejs.org/error-reference/#runtime-${e}`;for(;n;){const l=n.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](r,s,o)===!1)return}n=n.parent}const u=A.appContext.config.errorHandler;if(u){Ln(u,null,10,[r,s,o]);return}}hS(r,e,i,t)}function hS(r,A,e,t=!0){console.error(r)}let tu=!1,Pd=!1;const bt=[];let gi=0;const xo=[];let mn=null,hs=0;const p3=Promise.resolve();let qf=null;function g3(r){const A=qf||p3;return r?A.then(this?r.bind(this):r):A}function dS(r){let A=gi+1,e=bt.length;for(;A<e;){const t=A+e>>>1,i=bt[t],n=ru(i);n<r||n===r&&i.pre?A=t+1:e=t}return A}function Xf(r){(!bt.length||!bt.includes(r,tu&&r.allowRecurse?gi+1:gi))&&(r.id==null?bt.push(r):bt.splice(dS(r.id),0,r),m3())}function m3(){!tu&&!Pd&&(Pd=!0,qf=p3.then(E3))}function fS(r){const A=bt.indexOf(r);A>gi&&bt.splice(A,1)}function pS(r){RA(r)?xo.push(...r):(!mn||!mn.includes(r,r.allowRecurse?hs+1:hs))&&xo.push(r),m3()}function Op(r,A,e=tu?gi+1:0){for(;e<bt.length;e++){const t=bt[e];if(t&&t.pre){if(r&&t.id!==r.uid)continue;bt.splice(e,1),e--,t()}}}function y3(r){if(xo.length){const A=[...new Set(xo)].sort((e,t)=>ru(e)-ru(t));if(xo.length=0,mn){mn.push(...A);return}for(mn=A,hs=0;hs<mn.length;hs++)mn[hs]();mn=null,hs=0}}const ru=r=>r.id==null?1/0:r.id,gS=(r,A)=>{const e=ru(r)-ru(A);if(e===0){if(r.pre&&!A.pre)return-1;if(A.pre&&!r.pre)return 1}return e};function E3(r){Pd=!1,tu=!0,bt.sort(gS);try{for(gi=0;gi<bt.length;gi++){const A=bt[gi];A&&A.active!==!1&&Ln(A,null,14)}}finally{gi=0,bt.length=0,y3(),tu=!1,qf=null,(bt.length||xo.length)&&E3()}}function mS(r,A,...e){if(r.isUnmounted)return;const t=r.vnode.props||ve;let i=e;const n=A.startsWith("update:"),s=n&&A.slice(7);if(s&&s in t){const c=`${s==="modelValue"?"model":s}Modifiers`,{number:h,trim:d}=t[c]||ve;d&&(i=e.map(f=>Ve(f)?f.trim():f)),h&&(i=e.map(Za))}let o,u=t[o=lh(A)]||t[o=lh(vi(A))];!u&&n&&(u=t[o=lh(Ks(A))]),u&&Dr(u,r,6,i);const l=t[o+"Once"];if(l){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,Dr(l,r,6,i)}}function C3(r,A,e=!1){const t=A.emitsCache,i=t.get(r);if(i!==void 0)return i;const n=r.emits;let s={},o=!1;if(!kA(r)){const u=l=>{const c=C3(l,A,!0);c&&(o=!0,st(s,c))};!e&&A.mixins.length&&A.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}return!n&&!o?(ye(r)&&t.set(r,null),null):(RA(n)?n.forEach(u=>s[u]=null):st(s,n),ye(r)&&t.set(r,s),s)}function $c(r,A){return!r||!Gc(A)?!1:(A=A.slice(2).replace(/Once$/,""),Ae(r,A[0].toLowerCase()+A.slice(1))||Ae(r,Ks(A))||Ae(r,A))}let zt=null,Kc=null;function Hl(r){const A=zt;return zt=r,Kc=r&&r.type.__scopeId||null,A}function Js(r){Kc=r}function Zs(){Kc=null}function _3(r,A=zt,e){if(!A||r._n)return r;const t=(...i)=>{t._d&&Qp(-1);const n=Hl(A);let s;try{s=r(...i)}finally{Hl(n),t._d&&Qp(1)}return s};return t._n=!0,t._c=!0,t._d=!0,t}function hh(r){const{type:A,vnode:e,proxy:t,withProxy:i,props:n,propsOptions:[s],slots:o,attrs:u,emit:l,render:c,renderCache:h,data:d,setupState:f,ctx:p,inheritAttrs:y}=r;let _,g;const m=Hl(r);try{if(e.shapeFlag&4){const w=i||t,L=w;_=fi(c.call(L,w,h,n,f,d,p)),g=u}else{const w=A;_=fi(w.length>1?w(n,{attrs:u,slots:o,emit:l}):w(n,null)),g=A.props?u:yS(u)}}catch(w){Ga.length=0,Yc(w,r,1),_=pe(Zr)}let E=_;if(g&&y!==!1){const w=Object.keys(g),{shapeFlag:L}=E;w.length&&L&7&&(s&&w.some(zf)&&(g=ES(g,s)),E=Gn(E,g))}return e.dirs&&(E=Gn(E),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition&&(E.transition=e.transition),_=E,Hl(m),_}const yS=r=>{let A;for(const e in r)(e==="class"||e==="style"||Gc(e))&&((A||(A={}))[e]=r[e]);return A},ES=(r,A)=>{const e={};for(const t in r)(!zf(t)||!(t.slice(9)in A))&&(e[t]=r[t]);return e};function CS(r,A,e){const{props:t,children:i,component:n}=r,{props:s,children:o,patchFlag:u}=A,l=n.emitsOptions;if(A.dirs||A.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return t?Mp(t,s,l):!!s;if(u&8){const c=A.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(s[d]!==t[d]&&!$c(l,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:t===s?!1:t?s?Mp(t,s,l):!0:!!s;return!1}function Mp(r,A,e){const t=Object.keys(A);if(t.length!==Object.keys(r).length)return!0;for(let i=0;i<t.length;i++){const n=t[i];if(A[n]!==r[n]&&!$c(e,n))return!0}return!1}function _S({vnode:r,parent:A},e){for(;A;){const t=A.subTree;if(t.suspense&&t.suspense.activeBranch===r&&(t.el=r.el),t===r)(r=A.vnode).el=e,A=A.parent;else break}}const S3="components";function SS(r,A){return wS(S3,r,!0,A)||r}const vS=Symbol.for("v-ndc");function wS(r,A,e=!0,t=!1){const i=zt||dt;if(i){const n=i.type;if(r===S3){const o=_v(n,!1);if(o&&(o===A||o===vi(A)||o===Hc(vi(A))))return n}const s=Rp(i[r]||n[r],A)||Rp(i.appContext[r],A);return!s&&t?n:s}}function Rp(r,A){return r&&(r[A]||r[vi(A)]||r[Hc(vi(A))])}const bS=r=>r.__isSuspense;function IS(r,A){A&&A.pendingBranch?RA(r)?A.effects.push(...r):A.effects.push(r):pS(r)}const BS=Symbol.for("v-scx"),TS=()=>ml(BS),$u={};function dh(r,A,e){return v3(r,A,e)}function v3(r,A,{immediate:e,deep:t,flush:i,once:n,onTrack:s,onTrigger:o}=ve){if(A&&n){const T=A;A=(...R)=>{T(...R),L()}}const u=dt,l=T=>t===!0?T:Ss(T,t===!1?1:void 0);let c,h=!1,d=!1;if(Xt(r)?(c=()=>r.value,h=Ql(r)):Do(r)?(c=()=>l(r),h=!0):RA(r)?(d=!0,h=r.some(T=>Do(T)||Ql(T)),c=()=>r.map(T=>{if(Xt(T))return T.value;if(Do(T))return l(T);if(kA(T))return Ln(T,u,2)})):kA(r)?A?c=()=>Ln(r,u,2):c=()=>(f&&f(),Dr(r,u,3,[p])):c=br,A&&t){const T=c;c=()=>Ss(T())}let f,p=T=>{f=E.onStop=()=>{Ln(T,u,4),f=E.onStop=void 0}},y;if(e1)if(p=br,A?e&&Dr(A,u,3,[c(),d?[]:void 0,p]):c(),i==="sync"){const T=TS();y=T.__watcherHandles||(T.__watcherHandles=[])}else return br;let _=d?new Array(r.length).fill($u):$u;const g=()=>{if(!(!E.active||!E.dirty))if(A){const T=E.run();(t||h||(d?T.some((R,P)=>zn(R,_[P])):zn(T,_)))&&(f&&f(),Dr(A,u,3,[T,_===$u?void 0:d&&_[0]===$u?[]:_,p]),_=T)}else E.run()};g.allowRecurse=!!A;let m;i==="sync"?m=g:i==="post"?m=()=>Wt(g,u&&u.suspense):(g.pre=!0,u&&(g.id=u.uid),m=()=>Xf(g));const E=new Qf(c,br,m),w=z_(),L=()=>{E.stop(),w&&Gf(w.effects,E)};return A?e?g():_=E.run():i==="post"?Wt(E.run.bind(E),u&&u.suspense):E.run(),y&&y.push(L),L}function DS(r,A,e){const t=this.proxy,i=Ve(r)?r.includes(".")?w3(t,r):()=>t[r]:r.bind(t,t);let n;kA(A)?n=A:(n=A.handler,e=A);const s=mu(this),o=v3(i,n.bind(t),e);return s(),o}function w3(r,A){const e=A.split(".");return()=>{let t=r;for(let i=0;i<e.length&&t;i++)t=t[e[i]];return t}}function Ss(r,A,e=0,t){if(!ye(r)||r.__v_skip)return r;if(A&&A>0){if(e>=A)return r;e++}if(t=t||new Set,t.has(r))return r;if(t.add(r),Xt(r))Ss(r.value,A,e,t);else if(RA(r))for(let i=0;i<r.length;i++)Ss(r[i],A,e,t);else if(Vc(r)||To(r))r.forEach(i=>{Ss(i,A,e,t)});else if(Ym(r))for(const i in r)Ss(r[i],A,e,t);return r}function St(r,A){if(zt===null)return r;const e=t1(zt)||zt.proxy,t=r.dirs||(r.dirs=[]);for(let i=0;i<A.length;i++){let[n,s,o,u=ve]=A[i];n&&(kA(n)&&(n={mounted:n,updated:n}),n.deep&&Ss(s),t.push({dir:n,instance:e,value:s,oldValue:void 0,arg:o,modifiers:u}))}return r}function Jn(r,A,e,t){const i=r.dirs,n=A&&A.dirs;for(let s=0;s<i.length;s++){const o=i[s];n&&(o.oldValue=n[s].value);let u=o.dir[t];u&&(qs(),Dr(u,e,8,[r.el,o,r,A]),Xs())}}const yn=Symbol("_leaveCb"),Ku=Symbol("_enterCb");function xS(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jf(()=>{r.isMounted=!0}),D3(()=>{r.isUnmounting=!0}),r}const hr=[Function,Array],b3={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hr,onEnter:hr,onAfterEnter:hr,onEnterCancelled:hr,onBeforeLeave:hr,onLeave:hr,onAfterLeave:hr,onLeaveCancelled:hr,onBeforeAppear:hr,onAppear:hr,onAfterAppear:hr,onAppearCancelled:hr},OS={name:"BaseTransition",props:b3,setup(r,{slots:A}){const e=gv(),t=xS();let i;return()=>{const n=A.default&&B3(A.default(),!0);if(!n||!n.length)return;let s=n[0];if(n.length>1){for(const y of n)if(y.type!==Zr){s=y;break}}const o=re(r),{mode:u}=o;if(t.isLeaving)return fh(s);const l=Pp(s);if(!l)return fh(s);const c=Fd(l,o,t,e);Nd(l,c);const h=e.subTree,d=h&&Pp(h);let f=!1;const{getTransitionKey:p}=l.type;if(p){const y=p();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==Zr&&(!ds(l,d)||f)){const y=Fd(d,o,t,e);if(Nd(d,y),u==="out-in")return t.isLeaving=!0,y.afterLeave=()=>{t.isLeaving=!1,e.update.active!==!1&&(e.effect.dirty=!0,e.update())},fh(s);u==="in-out"&&l.type!==Zr&&(y.delayLeave=(_,g,m)=>{const E=I3(t,d);E[String(d.key)]=d,_[yn]=()=>{g(),_[yn]=void 0,delete c.delayedLeave},c.delayedLeave=m})}return s}}},MS=OS;function I3(r,A){const{leavingVNodes:e}=r;let t=e.get(A.type);return t||(t=Object.create(null),e.set(A.type,t)),t}function Fd(r,A,e,t){const{appear:i,mode:n,persisted:s=!1,onBeforeEnter:o,onEnter:u,onAfterEnter:l,onEnterCancelled:c,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:y,onAppear:_,onAfterAppear:g,onAppearCancelled:m}=A,E=String(r.key),w=I3(e,r),L=(P,F)=>{P&&Dr(P,t,9,F)},T=(P,F)=>{const H=F[1];L(P,F),RA(P)?P.every(M=>M.length<=1)&&H():P.length<=1&&H()},R={mode:n,persisted:s,beforeEnter(P){let F=o;if(!e.isMounted)if(i)F=y||o;else return;P[yn]&&P[yn](!0);const H=w[E];H&&ds(r,H)&&H.el[yn]&&H.el[yn](),L(F,[P])},enter(P){let F=u,H=l,M=c;if(!e.isMounted)if(i)F=_||u,H=g||l,M=m||c;else return;let b=!1;const v=P[Ku]=C=>{b||(b=!0,C?L(M,[P]):L(H,[P]),R.delayedLeave&&R.delayedLeave(),P[Ku]=void 0)};F?T(F,[P,v]):v()},leave(P,F){const H=String(r.key);if(P[Ku]&&P[Ku](!0),e.isUnmounting)return F();L(h,[P]);let M=!1;const b=P[yn]=v=>{M||(M=!0,F(),v?L(p,[P]):L(f,[P]),P[yn]=void 0,w[H]===r&&delete w[H])};w[H]=r,d?T(d,[P,b]):b()},clone(P){return Fd(P,A,e,t)}};return R}function fh(r){if(qc(r))return r=Gn(r),r.children=null,r}function Pp(r){return qc(r)?r.children?r.children[0]:void 0:r}function Nd(r,A){r.shapeFlag&6&&r.component?Nd(r.component.subTree,A):r.shapeFlag&128?(r.ssContent.transition=A.clone(r.ssContent),r.ssFallback.transition=A.clone(r.ssFallback)):r.transition=A}function B3(r,A=!1,e){let t=[],i=0;for(let n=0;n<r.length;n++){let s=r[n];const o=e==null?s.key:String(e)+String(s.key!=null?s.key:n);s.type===wt?(s.patchFlag&128&&i++,t=t.concat(B3(s.children,A,o))):(A||s.type!==Zr)&&t.push(o!=null?Gn(s,{key:o}):s)}if(i>1)for(let n=0;n<t.length;n++)t[n].patchFlag=-2;return t}const gl=r=>!!r.type.__asyncLoader,qc=r=>r.type.__isKeepAlive;function RS(r,A){T3(r,"a",A)}function PS(r,A){T3(r,"da",A)}function T3(r,A,e=dt){const t=r.__wdc||(r.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(Xc(A,t,e),e){let i=e.parent;for(;i&&i.parent;)qc(i.parent.vnode)&&FS(t,A,e,i),i=i.parent}}function FS(r,A,e,t){const i=Xc(A,r,t,!0);x3(()=>{Gf(t[A],i)},e)}function Xc(r,A,e=dt,t=!1){if(e){const i=e[r]||(e[r]=[]),n=A.__weh||(A.__weh=(...s)=>{if(e.isUnmounted)return;qs();const o=mu(e),u=Dr(A,e,r,s);return o(),Xs(),u});return t?i.unshift(n):i.push(n),n}}const on=r=>(A,e=dt)=>(!e1||r==="sp")&&Xc(r,(...t)=>A(...t),e),NS=on("bm"),Jf=on("m"),LS=on("bu"),US=on("u"),D3=on("bum"),x3=on("um"),kS=on("sp"),zS=on("rtg"),GS=on("rtc");function VS(r,A=dt){Xc("ec",r,A)}function Zf(r,A,e,t){let i;const n=e&&e[t];if(RA(r)||Ve(r)){i=new Array(r.length);for(let s=0,o=r.length;s<o;s++)i[s]=A(r[s],s,void 0,n&&n[s])}else if(typeof r=="number"){i=new Array(r);for(let s=0;s<r;s++)i[s]=A(s+1,s,void 0,n&&n[s])}else if(ye(r))if(r[Symbol.iterator])i=Array.from(r,(s,o)=>A(s,o,void 0,n&&n[o]));else{const s=Object.keys(r);i=new Array(s.length);for(let o=0,u=s.length;o<u;o++){const l=s[o];i[o]=A(r[l],l,o,n&&n[o])}}else i=[];return e&&(e[t]=i),i}const Ld=r=>r?V3(r)?t1(r)||r.proxy:Ld(r.parent):null,za=st(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Ld(r.parent),$root:r=>Ld(r.root),$emit:r=>r.emit,$options:r=>A0(r),$forceUpdate:r=>r.f||(r.f=()=>{r.effect.dirty=!0,Xf(r.update)}),$nextTick:r=>r.n||(r.n=g3.bind(r.proxy)),$watch:r=>DS.bind(r)}),ph=(r,A)=>r!==ve&&!r.__isScriptSetup&&Ae(r,A),QS={get({_:r},A){const{ctx:e,setupState:t,data:i,props:n,accessCache:s,type:o,appContext:u}=r;let l;if(A[0]!=="$"){const f=s[A];if(f!==void 0)switch(f){case 1:return t[A];case 2:return i[A];case 4:return e[A];case 3:return n[A]}else{if(ph(t,A))return s[A]=1,t[A];if(i!==ve&&Ae(i,A))return s[A]=2,i[A];if((l=r.propsOptions[0])&&Ae(l,A))return s[A]=3,n[A];if(e!==ve&&Ae(e,A))return s[A]=4,e[A];Ud&&(s[A]=0)}}const c=za[A];let h,d;if(c)return A==="$attrs"&&qt(r,"get",A),c(r);if((h=o.__cssModules)&&(h=h[A]))return h;if(e!==ve&&Ae(e,A))return s[A]=4,e[A];if(d=u.config.globalProperties,Ae(d,A))return d[A]},set({_:r},A,e){const{data:t,setupState:i,ctx:n}=r;return ph(i,A)?(i[A]=e,!0):t!==ve&&Ae(t,A)?(t[A]=e,!0):Ae(r.props,A)||A[0]==="$"&&A.slice(1)in r?!1:(n[A]=e,!0)},has({_:{data:r,setupState:A,accessCache:e,ctx:t,appContext:i,propsOptions:n}},s){let o;return!!e[s]||r!==ve&&Ae(r,s)||ph(A,s)||(o=n[0])&&Ae(o,s)||Ae(t,s)||Ae(za,s)||Ae(i.config.globalProperties,s)},defineProperty(r,A,e){return e.get!=null?r._.accessCache[A]=0:Ae(e,"value")&&this.set(r,A,e.value,null),Reflect.defineProperty(r,A,e)}};function Fp(r){return RA(r)?r.reduce((A,e)=>(A[e]=null,A),{}):r}let Ud=!0;function HS(r){const A=A0(r),e=r.proxy,t=r.ctx;Ud=!1,A.beforeCreate&&Np(A.beforeCreate,r,"bc");const{data:i,computed:n,methods:s,watch:o,provide:u,inject:l,created:c,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:y,deactivated:_,beforeDestroy:g,beforeUnmount:m,destroyed:E,unmounted:w,render:L,renderTracked:T,renderTriggered:R,errorCaptured:P,serverPrefetch:F,expose:H,inheritAttrs:M,components:b,directives:v,filters:C}=A;if(l&&jS(l,t,null),s)for(const B in s){const D=s[B];kA(D)&&(t[B]=D.bind(e))}if(i){const B=i.call(e,e);ye(B)&&(r.data=Wc(B))}if(Ud=!0,n)for(const B in n){const D=n[B],Q=kA(D)?D.bind(e,e):kA(D.get)?D.get.bind(e,e):br,Z=!kA(D)&&kA(D.set)?D.set.bind(e):br,AA=vv({get:Q,set:Z});Object.defineProperty(t,B,{enumerable:!0,configurable:!0,get:()=>AA.value,set:Y=>AA.value=Y})}if(o)for(const B in o)O3(o[B],t,e,B);if(u){const B=kA(u)?u.call(e):u;Reflect.ownKeys(B).forEach(D=>{XS(D,B[D])})}c&&Np(c,r,"c");function S(B,D){RA(D)?D.forEach(Q=>B(Q.bind(e))):D&&B(D.bind(e))}if(S(NS,h),S(Jf,d),S(LS,f),S(US,p),S(RS,y),S(PS,_),S(VS,P),S(GS,T),S(zS,R),S(D3,m),S(x3,w),S(kS,F),RA(H))if(H.length){const B=r.exposed||(r.exposed={});H.forEach(D=>{Object.defineProperty(B,D,{get:()=>e[D],set:Q=>e[D]=Q})})}else r.exposed||(r.exposed={});L&&r.render===br&&(r.render=L),M!=null&&(r.inheritAttrs=M),b&&(r.components=b),v&&(r.directives=v)}function jS(r,A,e=br){RA(r)&&(r=kd(r));for(const t in r){const i=r[t];let n;ye(i)?"default"in i?n=ml(i.from||t,i.default,!0):n=ml(i.from||t):n=ml(i),Xt(n)?Object.defineProperty(A,t,{enumerable:!0,configurable:!0,get:()=>n.value,set:s=>n.value=s}):A[t]=n}}function Np(r,A,e){Dr(RA(r)?r.map(t=>t.bind(A.proxy)):r.bind(A.proxy),A,e)}function O3(r,A,e,t){const i=t.includes(".")?w3(e,t):()=>e[t];if(Ve(r)){const n=A[r];kA(n)&&dh(i,n)}else if(kA(r))dh(i,r.bind(e));else if(ye(r))if(RA(r))r.forEach(n=>O3(n,A,e,t));else{const n=kA(r.handler)?r.handler.bind(e):A[r.handler];kA(n)&&dh(i,n,r)}}function A0(r){const A=r.type,{mixins:e,extends:t}=A,{mixins:i,optionsCache:n,config:{optionMergeStrategies:s}}=r.appContext,o=n.get(A);let u;return o?u=o:!i.length&&!e&&!t?u=A:(u={},i.length&&i.forEach(l=>jl(u,l,s,!0)),jl(u,A,s)),ye(A)&&n.set(A,u),u}function jl(r,A,e,t=!1){const{mixins:i,extends:n}=A;n&&jl(r,n,e,!0),i&&i.forEach(s=>jl(r,s,e,!0));for(const s in A)if(!(t&&s==="expose")){const o=WS[s]||e&&e[s];r[s]=o?o(r[s],A[s]):A[s]}return r}const WS={data:Lp,props:Up,emits:Up,methods:Ma,computed:Ma,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Ma,directives:Ma,watch:$S,provide:Lp,inject:YS};function Lp(r,A){return A?r?function(){return st(kA(r)?r.call(this,this):r,kA(A)?A.call(this,this):A)}:A:r}function YS(r,A){return Ma(kd(r),kd(A))}function kd(r){if(RA(r)){const A={};for(let e=0;e<r.length;e++)A[r[e]]=r[e];return A}return r}function Rt(r,A){return r?[...new Set([].concat(r,A))]:A}function Ma(r,A){return r?st(Object.create(null),r,A):A}function Up(r,A){return r?RA(r)&&RA(A)?[...new Set([...r,...A])]:st(Object.create(null),Fp(r),Fp(A??{})):A}function $S(r,A){if(!r)return A;if(!A)return r;const e=st(Object.create(null),r);for(const t in A)e[t]=Rt(r[t],A[t]);return e}function M3(){return{app:null,config:{isNativeTag:w_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let KS=0;function qS(r,A){return function(t,i=null){kA(t)||(t=st({},t)),i!=null&&!ye(i)&&(i=null);const n=M3(),s=new WeakSet;let o=!1;const u=n.app={_uid:KS++,_component:t,_props:i,_container:null,_context:n,_instance:null,version:bv,get config(){return n.config},set config(l){},use(l,...c){return s.has(l)||(l&&kA(l.install)?(s.add(l),l.install(u,...c)):kA(l)&&(s.add(l),l(u,...c))),u},mixin(l){return n.mixins.includes(l)||n.mixins.push(l),u},component(l,c){return c?(n.components[l]=c,u):n.components[l]},directive(l,c){return c?(n.directives[l]=c,u):n.directives[l]},mount(l,c,h){if(!o){const d=pe(t,i);return d.appContext=n,h===!0?h="svg":h===!1&&(h=void 0),c&&A?A(d,l):r(d,l,h),o=!0,u._container=l,l.__vue_app__=u,t1(d.component)||d.component.proxy}},unmount(){o&&(r(null,u._container),delete u._container.__vue_app__)},provide(l,c){return n.provides[l]=c,u},runWithContext(l){Wl=u;try{return l()}finally{Wl=null}}};return u}}let Wl=null;function XS(r,A){if(dt){let e=dt.provides;const t=dt.parent&&dt.parent.provides;t===e&&(e=dt.provides=Object.create(t)),e[r]=A}}function ml(r,A,e=!1){const t=dt||zt;if(t||Wl){const i=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:Wl._context.provides;if(i&&r in i)return i[r];if(arguments.length>1)return e&&kA(A)?A.call(t&&t.proxy):A}}function JS(r,A,e,t=!1){const i={},n={};Vl(n,A1,1),r.propsDefaults=Object.create(null),R3(r,A,i,n);for(const s in r.propsOptions[0])s in i||(i[s]=void 0);e?r.props=t?i:sS(i):r.type.props?r.props=i:r.props=n,r.attrs=n}function ZS(r,A,e,t){const{props:i,attrs:n,vnode:{patchFlag:s}}=r,o=re(i),[u]=r.propsOptions;let l=!1;if((t||s>0)&&!(s&16)){if(s&8){const c=r.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if($c(r.emitsOptions,d))continue;const f=A[d];if(u)if(Ae(n,d))f!==n[d]&&(n[d]=f,l=!0);else{const p=vi(d);i[p]=zd(u,o,p,f,r,!1)}else f!==n[d]&&(n[d]=f,l=!0)}}}else{R3(r,A,i,n)&&(l=!0);let c;for(const h in o)(!A||!Ae(A,h)&&((c=Ks(h))===h||!Ae(A,c)))&&(u?e&&(e[h]!==void 0||e[c]!==void 0)&&(i[h]=zd(u,o,h,void 0,r,!0)):delete i[h]);if(n!==o)for(const h in n)(!A||!Ae(A,h))&&(delete n[h],l=!0)}l&&Ki(r,"set","$attrs")}function R3(r,A,e,t){const[i,n]=r.propsOptions;let s=!1,o;if(A)for(let u in A){if(dl(u))continue;const l=A[u];let c;i&&Ae(i,c=vi(u))?!n||!n.includes(c)?e[c]=l:(o||(o={}))[c]=l:$c(r.emitsOptions,u)||(!(u in t)||l!==t[u])&&(t[u]=l,s=!0)}if(n){const u=re(e),l=o||ve;for(let c=0;c<n.length;c++){const h=n[c];e[h]=zd(i,u,h,l[h],r,!Ae(l,h))}}return s}function zd(r,A,e,t,i,n){const s=r[e];if(s!=null){const o=Ae(s,"default");if(o&&t===void 0){const u=s.default;if(s.type!==Function&&!s.skipFactory&&kA(u)){const{propsDefaults:l}=i;if(e in l)t=l[e];else{const c=mu(i);t=l[e]=u.call(null,A),c()}}else t=u}s[0]&&(n&&!o?t=!1:s[1]&&(t===""||t===Ks(e))&&(t=!0))}return t}function P3(r,A,e=!1){const t=A.propsCache,i=t.get(r);if(i)return i;const n=r.props,s={},o=[];let u=!1;if(!kA(r)){const c=h=>{u=!0;const[d,f]=P3(h,A,!0);st(s,d),f&&o.push(...f)};!e&&A.mixins.length&&A.mixins.forEach(c),r.extends&&c(r.extends),r.mixins&&r.mixins.forEach(c)}if(!n&&!u)return ye(r)&&t.set(r,Bo),Bo;if(RA(n))for(let c=0;c<n.length;c++){const h=vi(n[c]);kp(h)&&(s[h]=ve)}else if(n)for(const c in n){const h=vi(c);if(kp(h)){const d=n[c],f=s[h]=RA(d)||kA(d)?{type:d}:st({},d);if(f){const p=Vp(Boolean,f.type),y=Vp(String,f.type);f[0]=p>-1,f[1]=y<0||p<y,(p>-1||Ae(f,"default"))&&o.push(h)}}}const l=[s,o];return ye(r)&&t.set(r,l),l}function kp(r){return r[0]!=="$"}function zp(r){const A=r&&r.toString().match(/^\s*(function|class) (\w+)/);return A?A[2]:r===null?"null":""}function Gp(r,A){return zp(r)===zp(A)}function Vp(r,A){return RA(A)?A.findIndex(e=>Gp(e,r)):kA(A)&&Gp(A,r)?0:-1}const F3=r=>r[0]==="_"||r==="$stable",e0=r=>RA(r)?r.map(fi):[fi(r)],Av=(r,A,e)=>{if(A._n)return A;const t=_3((...i)=>e0(A(...i)),e);return t._c=!1,t},N3=(r,A,e)=>{const t=r._ctx;for(const i in r){if(F3(i))continue;const n=r[i];if(kA(n))A[i]=Av(i,n,t);else if(n!=null){const s=e0(n);A[i]=()=>s}}},L3=(r,A)=>{const e=e0(A);r.slots.default=()=>e},ev=(r,A)=>{if(r.vnode.shapeFlag&32){const e=A._;e?(r.slots=re(A),Vl(A,"_",e)):N3(A,r.slots={})}else r.slots={},A&&L3(r,A);Vl(r.slots,A1,1)},tv=(r,A,e)=>{const{vnode:t,slots:i}=r;let n=!0,s=ve;if(t.shapeFlag&32){const o=A._;o?e&&o===1?n=!1:(st(i,A),!e&&o===1&&delete i._):(n=!A.$stable,N3(A,i)),s=A}else A&&(L3(r,A),s={default:1});if(n)for(const o in i)!F3(o)&&s[o]==null&&delete i[o]};function Gd(r,A,e,t,i=!1){if(RA(r)){r.forEach((d,f)=>Gd(d,A&&(RA(A)?A[f]:A),e,t,i));return}if(gl(t)&&!i)return;const n=t.shapeFlag&4?t1(t.component)||t.component.proxy:t.el,s=i?null:n,{i:o,r:u}=r,l=A&&A.r,c=o.refs===ve?o.refs={}:o.refs,h=o.setupState;if(l!=null&&l!==u&&(Ve(l)?(c[l]=null,Ae(h,l)&&(h[l]=null)):Xt(l)&&(l.value=null)),kA(u))Ln(u,o,12,[s,c]);else{const d=Ve(u),f=Xt(u),p=r.f;if(d||f){const y=()=>{if(p){const _=d?Ae(h,u)?h[u]:c[u]:u.value;i?RA(_)&&Gf(_,n):RA(_)?_.includes(n)||_.push(n):d?(c[u]=[n],Ae(h,u)&&(h[u]=c[u])):(u.value=[n],r.k&&(c[r.k]=u.value))}else d?(c[u]=s,Ae(h,u)&&(h[u]=s)):f&&(u.value=s,r.k&&(c[r.k]=s))};i||p?y():(y.id=-1,Wt(y,e))}}}const Wt=IS;function rv(r){return iv(r)}function iv(r,A){const e=$m();e.__VUE__=!0;const{insert:t,remove:i,patchProp:n,createElement:s,createText:o,createComment:u,setText:l,setElementText:c,parentNode:h,nextSibling:d,setScopeId:f=br,insertStaticContent:p}=r,y=(k,j,eA,W=null,O=null,N=null,z=void 0,tA=null,aA=!!j.dynamicChildren)=>{if(k===j)return;k&&!ds(k,j)&&(W=vA(k),Y(k,O,N,!0),k=null),j.patchFlag===-2&&(aA=!1,j.dynamicChildren=null);const{type:uA,ref:gA,shapeFlag:DA}=j;switch(uA){case Jc:_(k,j,eA,W);break;case Zr:g(k,j,eA,W);break;case yl:k==null&&m(j,eA,W,z);break;case wt:b(k,j,eA,W,O,N,z,tA,aA);break;default:DA&1?L(k,j,eA,W,O,N,z,tA,aA):DA&6?v(k,j,eA,W,O,N,z,tA,aA):(DA&64||DA&128)&&uA.process(k,j,eA,W,O,N,z,tA,aA,xA)}gA!=null&&O&&Gd(gA,k&&k.ref,N,j||k,!j)},_=(k,j,eA,W)=>{if(k==null)t(j.el=o(j.children),eA,W);else{const O=j.el=k.el;j.children!==k.children&&l(O,j.children)}},g=(k,j,eA,W)=>{k==null?t(j.el=u(j.children||""),eA,W):j.el=k.el},m=(k,j,eA,W)=>{[k.el,k.anchor]=p(k.children,j,eA,W,k.el,k.anchor)},E=({el:k,anchor:j},eA,W)=>{let O;for(;k&&k!==j;)O=d(k),t(k,eA,W),k=O;t(j,eA,W)},w=({el:k,anchor:j})=>{let eA;for(;k&&k!==j;)eA=d(k),i(k),k=eA;i(j)},L=(k,j,eA,W,O,N,z,tA,aA)=>{j.type==="svg"?z="svg":j.type==="math"&&(z="mathml"),k==null?T(j,eA,W,O,N,z,tA,aA):F(k,j,O,N,z,tA,aA)},T=(k,j,eA,W,O,N,z,tA)=>{let aA,uA;const{props:gA,shapeFlag:DA,transition:wA,dirs:FA}=k;if(aA=k.el=s(k.type,N,gA&&gA.is,gA),DA&8?c(aA,k.children):DA&16&&P(k.children,aA,null,W,O,gh(k,N),z,tA),FA&&Jn(k,null,W,"created"),R(aA,k,k.scopeId,z,W),gA){for(const V in gA)V!=="value"&&!dl(V)&&n(aA,V,null,gA[V],N,k.children,W,O,lA);"value"in gA&&n(aA,"value",null,gA.value,N),(uA=gA.onVnodeBeforeMount)&&ai(uA,W,k)}FA&&Jn(k,null,W,"beforeMount");const VA=nv(O,wA);VA&&wA.beforeEnter(aA),t(aA,j,eA),((uA=gA&&gA.onVnodeMounted)||VA||FA)&&Wt(()=>{uA&&ai(uA,W,k),VA&&wA.enter(aA),FA&&Jn(k,null,W,"mounted")},O)},R=(k,j,eA,W,O)=>{if(eA&&f(k,eA),W)for(let N=0;N<W.length;N++)f(k,W[N]);if(O){let N=O.subTree;if(j===N){const z=O.vnode;R(k,z,z.scopeId,z.slotScopeIds,O.parent)}}},P=(k,j,eA,W,O,N,z,tA,aA=0)=>{for(let uA=aA;uA<k.length;uA++){const gA=k[uA]=tA?En(k[uA]):fi(k[uA]);y(null,gA,j,eA,W,O,N,z,tA)}},F=(k,j,eA,W,O,N,z)=>{const tA=j.el=k.el;let{patchFlag:aA,dynamicChildren:uA,dirs:gA}=j;aA|=k.patchFlag&16;const DA=k.props||ve,wA=j.props||ve;let FA;if(eA&&Zn(eA,!1),(FA=wA.onVnodeBeforeUpdate)&&ai(FA,eA,j,k),gA&&Jn(j,k,eA,"beforeUpdate"),eA&&Zn(eA,!0),uA?H(k.dynamicChildren,uA,tA,eA,W,gh(j,O),N):z||D(k,j,tA,null,eA,W,gh(j,O),N,!1),aA>0){if(aA&16)M(tA,j,DA,wA,eA,W,O);else if(aA&2&&DA.class!==wA.class&&n(tA,"class",null,wA.class,O),aA&4&&n(tA,"style",DA.style,wA.style,O),aA&8){const VA=j.dynamicProps;for(let V=0;V<VA.length;V++){const $=VA[V],rA=DA[$],SA=wA[$];(SA!==rA||$==="value")&&n(tA,$,rA,SA,O,k.children,eA,W,lA)}}aA&1&&k.children!==j.children&&c(tA,j.children)}else!z&&uA==null&&M(tA,j,DA,wA,eA,W,O);((FA=wA.onVnodeUpdated)||gA)&&Wt(()=>{FA&&ai(FA,eA,j,k),gA&&Jn(j,k,eA,"updated")},W)},H=(k,j,eA,W,O,N,z)=>{for(let tA=0;tA<j.length;tA++){const aA=k[tA],uA=j[tA],gA=aA.el&&(aA.type===wt||!ds(aA,uA)||aA.shapeFlag&70)?h(aA.el):eA;y(aA,uA,gA,null,W,O,N,z,!0)}},M=(k,j,eA,W,O,N,z)=>{if(eA!==W){if(eA!==ve)for(const tA in eA)!dl(tA)&&!(tA in W)&&n(k,tA,eA[tA],null,z,j.children,O,N,lA);for(const tA in W){if(dl(tA))continue;const aA=W[tA],uA=eA[tA];aA!==uA&&tA!=="value"&&n(k,tA,uA,aA,z,j.children,O,N,lA)}"value"in W&&n(k,"value",eA.value,W.value,z)}},b=(k,j,eA,W,O,N,z,tA,aA)=>{const uA=j.el=k?k.el:o(""),gA=j.anchor=k?k.anchor:o("");let{patchFlag:DA,dynamicChildren:wA,slotScopeIds:FA}=j;FA&&(tA=tA?tA.concat(FA):FA),k==null?(t(uA,eA,W),t(gA,eA,W),P(j.children||[],eA,gA,O,N,z,tA,aA)):DA>0&&DA&64&&wA&&k.dynamicChildren?(H(k.dynamicChildren,wA,eA,O,N,z,tA),(j.key!=null||O&&j===O.subTree)&&U3(k,j,!0)):D(k,j,eA,gA,O,N,z,tA,aA)},v=(k,j,eA,W,O,N,z,tA,aA)=>{j.slotScopeIds=tA,k==null?j.shapeFlag&512?O.ctx.activate(j,eA,W,z,aA):C(j,eA,W,O,N,z,aA):x(k,j,aA)},C=(k,j,eA,W,O,N,z)=>{const tA=k.component=pv(k,W,O);if(qc(k)&&(tA.ctx.renderer=xA),mv(tA),tA.asyncDep){if(O&&O.registerDep(tA,S),!k.el){const aA=tA.subTree=pe(Zr);g(null,aA,j,eA)}}else S(tA,k,j,eA,O,N,z)},x=(k,j,eA)=>{const W=j.component=k.component;if(CS(k,j,eA))if(W.asyncDep&&!W.asyncResolved){B(W,j,eA);return}else W.next=j,fS(W.update),W.effect.dirty=!0,W.update();else j.el=k.el,W.vnode=j},S=(k,j,eA,W,O,N,z)=>{const tA=()=>{if(k.isMounted){let{next:gA,bu:DA,u:wA,parent:FA,vnode:VA}=k;{const GA=k3(k);if(GA){gA&&(gA.el=VA.el,B(k,gA,z)),GA.asyncDep.then(()=>{k.isUnmounted||tA()});return}}let V=gA,$;Zn(k,!1),gA?(gA.el=VA.el,B(k,gA,z)):gA=VA,DA&&fl(DA),($=gA.props&&gA.props.onVnodeBeforeUpdate)&&ai($,FA,gA,VA),Zn(k,!0);const rA=hh(k),SA=k.subTree;k.subTree=rA,y(SA,rA,h(SA.el),vA(SA),k,O,N),gA.el=rA.el,V===null&&_S(k,rA.el),wA&&Wt(wA,O),($=gA.props&&gA.props.onVnodeUpdated)&&Wt(()=>ai($,FA,gA,VA),O)}else{let gA;const{el:DA,props:wA}=j,{bm:FA,m:VA,parent:V}=k,$=gl(j);if(Zn(k,!1),FA&&fl(FA),!$&&(gA=wA&&wA.onVnodeBeforeMount)&&ai(gA,V,j),Zn(k,!0),DA&&ie){const rA=()=>{k.subTree=hh(k),ie(DA,k.subTree,k,O,null)};$?j.type.__asyncLoader().then(()=>!k.isUnmounted&&rA()):rA()}else{const rA=k.subTree=hh(k);y(null,rA,eA,W,k,O,N),j.el=rA.el}if(VA&&Wt(VA,O),!$&&(gA=wA&&wA.onVnodeMounted)){const rA=j;Wt(()=>ai(gA,V,rA),O)}(j.shapeFlag&256||V&&gl(V.vnode)&&V.vnode.shapeFlag&256)&&k.a&&Wt(k.a,O),k.isMounted=!0,j=eA=W=null}},aA=k.effect=new Qf(tA,br,()=>Xf(uA),k.scope),uA=k.update=()=>{aA.dirty&&aA.run()};uA.id=k.uid,Zn(k,!0),uA()},B=(k,j,eA)=>{j.component=k;const W=k.vnode.props;k.vnode=j,k.next=null,ZS(k,j.props,W,eA),tv(k,j.children,eA),qs(),Op(k),Xs()},D=(k,j,eA,W,O,N,z,tA,aA=!1)=>{const uA=k&&k.children,gA=k?k.shapeFlag:0,DA=j.children,{patchFlag:wA,shapeFlag:FA}=j;if(wA>0){if(wA&128){Z(uA,DA,eA,W,O,N,z,tA,aA);return}else if(wA&256){Q(uA,DA,eA,W,O,N,z,tA,aA);return}}FA&8?(gA&16&&lA(uA,O,N),DA!==uA&&c(eA,DA)):gA&16?FA&16?Z(uA,DA,eA,W,O,N,z,tA,aA):lA(uA,O,N,!0):(gA&8&&c(eA,""),FA&16&&P(DA,eA,W,O,N,z,tA,aA))},Q=(k,j,eA,W,O,N,z,tA,aA)=>{k=k||Bo,j=j||Bo;const uA=k.length,gA=j.length,DA=Math.min(uA,gA);let wA;for(wA=0;wA<DA;wA++){const FA=j[wA]=aA?En(j[wA]):fi(j[wA]);y(k[wA],FA,eA,null,O,N,z,tA,aA)}uA>gA?lA(k,O,N,!0,!1,DA):P(j,eA,W,O,N,z,tA,aA,DA)},Z=(k,j,eA,W,O,N,z,tA,aA)=>{let uA=0;const gA=j.length;let DA=k.length-1,wA=gA-1;for(;uA<=DA&&uA<=wA;){const FA=k[uA],VA=j[uA]=aA?En(j[uA]):fi(j[uA]);if(ds(FA,VA))y(FA,VA,eA,null,O,N,z,tA,aA);else break;uA++}for(;uA<=DA&&uA<=wA;){const FA=k[DA],VA=j[wA]=aA?En(j[wA]):fi(j[wA]);if(ds(FA,VA))y(FA,VA,eA,null,O,N,z,tA,aA);else break;DA--,wA--}if(uA>DA){if(uA<=wA){const FA=wA+1,VA=FA<gA?j[FA].el:W;for(;uA<=wA;)y(null,j[uA]=aA?En(j[uA]):fi(j[uA]),eA,VA,O,N,z,tA,aA),uA++}}else if(uA>wA)for(;uA<=DA;)Y(k[uA],O,N,!0),uA++;else{const FA=uA,VA=uA,V=new Map;for(uA=VA;uA<=wA;uA++){const He=j[uA]=aA?En(j[uA]):fi(j[uA]);He.key!=null&&V.set(He.key,uA)}let $,rA=0;const SA=wA-VA+1;let GA=!1,xe=0;const ZA=new Array(SA);for(uA=0;uA<SA;uA++)ZA[uA]=0;for(uA=FA;uA<=DA;uA++){const He=k[uA];if(rA>=SA){Y(He,O,N,!0);continue}let Ar;if(He.key!=null)Ar=V.get(He.key);else for($=VA;$<=wA;$++)if(ZA[$-VA]===0&&ds(He,j[$])){Ar=$;break}Ar===void 0?Y(He,O,N,!0):(ZA[Ar-VA]=uA+1,Ar>=xe?xe=Ar:GA=!0,y(He,j[Ar],eA,null,O,N,z,tA,aA),rA++)}const Mt=GA?sv(ZA):Bo;for($=Mt.length-1,uA=SA-1;uA>=0;uA--){const He=VA+uA,Ar=j[He],_p=He+1<gA?j[He+1].el:W;ZA[uA]===0?y(null,Ar,eA,_p,O,N,z,tA,aA):GA&&($<0||uA!==Mt[$]?AA(Ar,eA,_p,2):$--)}}},AA=(k,j,eA,W,O=null)=>{const{el:N,type:z,transition:tA,children:aA,shapeFlag:uA}=k;if(uA&6){AA(k.component.subTree,j,eA,W);return}if(uA&128){k.suspense.move(j,eA,W);return}if(uA&64){z.move(k,j,eA,xA);return}if(z===wt){t(N,j,eA);for(let DA=0;DA<aA.length;DA++)AA(aA[DA],j,eA,W);t(k.anchor,j,eA);return}if(z===yl){E(k,j,eA);return}if(W!==2&&uA&1&&tA)if(W===0)tA.beforeEnter(N),t(N,j,eA),Wt(()=>tA.enter(N),O);else{const{leave:DA,delayLeave:wA,afterLeave:FA}=tA,VA=()=>t(N,j,eA),V=()=>{DA(N,()=>{VA(),FA&&FA()})};wA?wA(N,VA,V):V()}else t(N,j,eA)},Y=(k,j,eA,W=!1,O=!1)=>{const{type:N,props:z,ref:tA,children:aA,dynamicChildren:uA,shapeFlag:gA,patchFlag:DA,dirs:wA}=k;if(tA!=null&&Gd(tA,null,eA,k,!0),gA&256){j.ctx.deactivate(k);return}const FA=gA&1&&wA,VA=!gl(k);let V;if(VA&&(V=z&&z.onVnodeBeforeUnmount)&&ai(V,j,k),gA&6)nA(k.component,eA,W);else{if(gA&128){k.suspense.unmount(eA,W);return}FA&&Jn(k,null,j,"beforeUnmount"),gA&64?k.type.remove(k,j,eA,O,xA,W):uA&&(N!==wt||DA>0&&DA&64)?lA(uA,j,eA,!1,!0):(N===wt&&DA&384||!O&&gA&16)&&lA(aA,j,eA),W&&G(k)}(VA&&(V=z&&z.onVnodeUnmounted)||FA)&&Wt(()=>{V&&ai(V,j,k),FA&&Jn(k,null,j,"unmounted")},eA)},G=k=>{const{type:j,el:eA,anchor:W,transition:O}=k;if(j===wt){X(eA,W);return}if(j===yl){w(k);return}const N=()=>{i(eA),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(k.shapeFlag&1&&O&&!O.persisted){const{leave:z,delayLeave:tA}=O,aA=()=>z(eA,N);tA?tA(k.el,N,aA):aA()}else N()},X=(k,j)=>{let eA;for(;k!==j;)eA=d(k),i(k),k=eA;i(j)},nA=(k,j,eA)=>{const{bum:W,scope:O,update:N,subTree:z,um:tA}=k;W&&fl(W),O.stop(),N&&(N.active=!1,Y(z,k,j,eA)),tA&&Wt(tA,j),Wt(()=>{k.isUnmounted=!0},j),j&&j.pendingBranch&&!j.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===j.pendingId&&(j.deps--,j.deps===0&&j.resolve())},lA=(k,j,eA,W=!1,O=!1,N=0)=>{for(let z=N;z<k.length;z++)Y(k[z],j,eA,W,O)},vA=k=>k.shapeFlag&6?vA(k.component.subTree):k.shapeFlag&128?k.suspense.next():d(k.anchor||k.el);let BA=!1;const bA=(k,j,eA)=>{k==null?j._vnode&&Y(j._vnode,null,null,!0):y(j._vnode||null,k,j,null,null,null,eA),BA||(BA=!0,Op(),y3(),BA=!1),j._vnode=k},xA={p:y,um:Y,m:AA,r:G,mt:C,mc:P,pc:D,pbc:H,n:vA,o:r};let TA,ie;return A&&([TA,ie]=A(xA)),{render:bA,hydrate:TA,createApp:qS(bA,TA)}}function gh({type:r,props:A},e){return e==="svg"&&r==="foreignObject"||e==="mathml"&&r==="annotation-xml"&&A&&A.encoding&&A.encoding.includes("html")?void 0:e}function Zn({effect:r,update:A},e){r.allowRecurse=A.allowRecurse=e}function nv(r,A){return(!r||r&&!r.pendingBranch)&&A&&!A.persisted}function U3(r,A,e=!1){const t=r.children,i=A.children;if(RA(t)&&RA(i))for(let n=0;n<t.length;n++){const s=t[n];let o=i[n];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[n]=En(i[n]),o.el=s.el),e||U3(s,o)),o.type===Jc&&(o.el=s.el)}}function sv(r){const A=r.slice(),e=[0];let t,i,n,s,o;const u=r.length;for(t=0;t<u;t++){const l=r[t];if(l!==0){if(i=e[e.length-1],r[i]<l){A[t]=i,e.push(t);continue}for(n=0,s=e.length-1;n<s;)o=n+s>>1,r[e[o]]<l?n=o+1:s=o;l<r[e[n]]&&(n>0&&(A[t]=e[n-1]),e[n]=t)}}for(n=e.length,s=e[n-1];n-- >0;)e[n]=s,s=A[s];return e}function k3(r){const A=r.subTree.component;if(A)return A.asyncDep&&!A.asyncResolved?A:k3(A)}const ov=r=>r.__isTeleport,wt=Symbol.for("v-fgt"),Jc=Symbol.for("v-txt"),Zr=Symbol.for("v-cmt"),yl=Symbol.for("v-stc"),Ga=[];let $r=null;function qA(r=!1){Ga.push($r=r?null:[])}function av(){Ga.pop(),$r=Ga[Ga.length-1]||null}let iu=1;function Qp(r){iu+=r}function z3(r){return r.dynamicChildren=iu>0?$r||Bo:null,av(),iu>0&&$r&&$r.push(r),r}function ae(r,A,e,t,i,n){return z3(EA(r,A,e,t,i,n,!0))}function Zc(r,A,e,t,i){return z3(pe(r,A,e,t,i,!0))}function Vd(r){return r?r.__v_isVNode===!0:!1}function ds(r,A){return r.type===A.type&&r.key===A.key}const A1="__vInternal",G3=({key:r})=>r??null,El=({ref:r,ref_key:A,ref_for:e})=>(typeof r=="number"&&(r=""+r),r!=null?Ve(r)||Xt(r)||kA(r)?{i:zt,r,k:A,f:!!e}:r:null);function EA(r,A=null,e=null,t=0,i=null,n=r===wt?0:1,s=!1,o=!1){const u={__v_isVNode:!0,__v_skip:!0,type:r,props:A,key:A&&G3(A),ref:A&&El(A),scopeId:Kc,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:t,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:zt};return o?(t0(u,e),n&128&&r.normalize(u)):e&&(u.shapeFlag|=Ve(e)?8:16),iu>0&&!s&&$r&&(u.patchFlag>0||n&6)&&u.patchFlag!==32&&$r.push(u),u}const pe=uv;function uv(r,A=null,e=null,t=0,i=null,n=!1){if((!r||r===vS)&&(r=Zr),Vd(r)){const o=Gn(r,A,!0);return e&&t0(o,e),iu>0&&!n&&$r&&(o.shapeFlag&6?$r[$r.indexOf(r)]=o:$r.push(o)),o.patchFlag|=-2,o}if(Sv(r)&&(r=r.__vccOpts),A){A=lv(A);let{class:o,style:u}=A;o&&!Ve(o)&&(A.class=Wo(o)),ye(u)&&(l3(u)&&!RA(u)&&(u=st({},u)),A.style=gu(u))}const s=Ve(r)?1:bS(r)?128:ov(r)?64:ye(r)?4:kA(r)?2:0;return EA(r,A,e,t,i,s,n,!0)}function lv(r){return r?l3(r)||A1 in r?st({},r):r:null}function Gn(r,A,e=!1){const{props:t,ref:i,patchFlag:n,children:s}=r,o=A?hv(t||{},A):t;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&G3(o),ref:A&&A.ref?e&&i?RA(i)?i.concat(El(A)):[i,El(A)]:El(A):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:s,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:A&&r.type!==wt?n===-1?16:n|16:n,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Gn(r.ssContent),ssFallback:r.ssFallback&&Gn(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function Ao(r=" ",A=0){return pe(Jc,null,r,A)}function cv(r,A){const e=pe(yl,null,r);return e.staticCount=A,e}function $t(r="",A=!1){return A?(qA(),Zc(Zr,null,r)):pe(Zr,null,r)}function fi(r){return r==null||typeof r=="boolean"?pe(Zr):RA(r)?pe(wt,null,r.slice()):typeof r=="object"?En(r):pe(Jc,null,String(r))}function En(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Gn(r)}function t0(r,A){let e=0;const{shapeFlag:t}=r;if(A==null)A=null;else if(RA(A))e=16;else if(typeof A=="object")if(t&65){const i=A.default;i&&(i._c&&(i._d=!1),t0(r,i()),i._c&&(i._d=!0));return}else{e=32;const i=A._;!i&&!(A1 in A)?A._ctx=zt:i===3&&zt&&(zt.slots._===1?A._=1:(A._=2,r.patchFlag|=1024))}else kA(A)?(A={default:A,_ctx:zt},e=32):(A=String(A),t&64?(e=16,A=[Ao(A)]):e=8);r.children=A,r.shapeFlag|=e}function hv(...r){const A={};for(let e=0;e<r.length;e++){const t=r[e];for(const i in t)if(i==="class")A.class!==t.class&&(A.class=Wo([A.class,t.class]));else if(i==="style")A.style=gu([A.style,t.style]);else if(Gc(i)){const n=A[i],s=t[i];s&&n!==s&&!(RA(n)&&n.includes(s))&&(A[i]=n?[].concat(n,s):s)}else i!==""&&(A[i]=t[i])}return A}function ai(r,A,e,t=null){Dr(r,A,7,[e,t])}const dv=M3();let fv=0;function pv(r,A,e){const t=r.type,i=(A?A.appContext:r.appContext)||dv,n={uid:fv++,vnode:r,type:t,parent:A,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new U_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:A?A.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P3(t,i),emitsOptions:C3(t,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:t.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=A?A.root:n,n.emit=mS.bind(null,n),r.ce&&r.ce(n),n}let dt=null;const gv=()=>dt||zt;let Yl,Qd;{const r=$m(),A=(e,t)=>{let i;return(i=r[e])||(i=r[e]=[]),i.push(t),n=>{i.length>1?i.forEach(s=>s(n)):i[0](n)}};Yl=A("__VUE_INSTANCE_SETTERS__",e=>dt=e),Qd=A("__VUE_SSR_SETTERS__",e=>e1=e)}const mu=r=>{const A=dt;return Yl(r),r.scope.on(),()=>{r.scope.off(),Yl(A)}},Hp=()=>{dt&&dt.scope.off(),Yl(null)};function V3(r){return r.vnode.shapeFlag&4}let e1=!1;function mv(r,A=!1){A&&Qd(A);const{props:e,children:t}=r.vnode,i=V3(r);JS(r,e,i,A),ev(r,t);const n=i?yv(r,A):void 0;return A&&Qd(!1),n}function yv(r,A){const e=r.type;r.accessCache=Object.create(null),r.proxy=c3(new Proxy(r.ctx,QS));const{setup:t}=e;if(t){const i=r.setupContext=t.length>1?Cv(r):null,n=mu(r);qs();const s=Ln(t,r,0,[r.props,i]);if(Xs(),n(),jm(s)){if(s.then(Hp,Hp),A)return s.then(o=>{jp(r,o,A)}).catch(o=>{Yc(o,r,0)});r.asyncDep=s}else jp(r,s,A)}else Q3(r,A)}function jp(r,A,e){kA(A)?r.type.__ssrInlineRender?r.ssrRender=A:r.render=A:ye(A)&&(r.setupState=f3(A)),Q3(r,e)}let Wp;function Q3(r,A,e){const t=r.type;if(!r.render){if(!A&&Wp&&!t.render){const i=t.template||A0(r).template;if(i){const{isCustomElement:n,compilerOptions:s}=r.appContext.config,{delimiters:o,compilerOptions:u}=t,l=st(st({isCustomElement:n,delimiters:o},s),u);t.render=Wp(i,l)}}r.render=t.render||br}{const i=mu(r);qs();try{HS(r)}finally{Xs(),i()}}}function Ev(r){return r.attrsProxy||(r.attrsProxy=new Proxy(r.attrs,{get(A,e){return qt(r,"get","$attrs"),A[e]}}))}function Cv(r){const A=e=>{r.exposed=e||{}};return{get attrs(){return Ev(r)},slots:r.slots,emit:r.emit,expose:A}}function t1(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(f3(c3(r.exposed)),{get(A,e){if(e in A)return A[e];if(e in za)return za[e](r)},has(A,e){return e in A||e in za}}))}function _v(r,A=!0){return kA(r)?r.displayName||r.name:r.name||A&&r.__name}function Sv(r){return kA(r)&&"__vccOpts"in r}const vv=(r,A)=>oS(r,A,e1);function wv(r,A,e){const t=arguments.length;return t===2?ye(A)&&!RA(A)?Vd(A)?pe(r,null,[A]):pe(r,A):pe(r,null,A):(t>3?e=Array.prototype.slice.call(arguments,2):t===3&&Vd(e)&&(e=[e]),pe(r,A,e))}const bv="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Iv="http://www.w3.org/2000/svg",Bv="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Yp=Cn&&Cn.createElement("template"),Tv={insert:(r,A,e)=>{A.insertBefore(r,e||null)},remove:r=>{const A=r.parentNode;A&&A.removeChild(r)},createElement:(r,A,e,t)=>{const i=A==="svg"?Cn.createElementNS(Iv,r):A==="mathml"?Cn.createElementNS(Bv,r):Cn.createElement(r,e?{is:e}:void 0);return r==="select"&&t&&t.multiple!=null&&i.setAttribute("multiple",t.multiple),i},createText:r=>Cn.createTextNode(r),createComment:r=>Cn.createComment(r),setText:(r,A)=>{r.nodeValue=A},setElementText:(r,A)=>{r.textContent=A},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Cn.querySelector(r),setScopeId(r,A){r.setAttribute(A,"")},insertStaticContent(r,A,e,t,i,n){const s=e?e.previousSibling:A.lastChild;if(i&&(i===n||i.nextSibling))for(;A.insertBefore(i.cloneNode(!0),e),!(i===n||!(i=i.nextSibling)););else{Yp.innerHTML=t==="svg"?`<svg>${r}</svg>`:t==="mathml"?`<math>${r}</math>`:r;const o=Yp.content;if(t==="svg"||t==="mathml"){const u=o.firstChild;for(;u.firstChild;)o.appendChild(u.firstChild);o.removeChild(u)}A.insertBefore(o,e)}return[s?s.nextSibling:A.firstChild,e?e.previousSibling:A.lastChild]}},dn="transition",da="animation",nu=Symbol("_vtc"),r0=(r,{slots:A})=>wv(MS,Dv(r),A);r0.displayName="Transition";const H3={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};r0.props=st({},b3,H3);const As=(r,A=[])=>{RA(r)?r.forEach(e=>e(...A)):r&&r(...A)},$p=r=>r?RA(r)?r.some(A=>A.length>1):r.length>1:!1;function Dv(r){const A={};for(const b in r)b in H3||(A[b]=r[b]);if(r.css===!1)return A;const{name:e="v",type:t,duration:i,enterFromClass:n=`${e}-enter-from`,enterActiveClass:s=`${e}-enter-active`,enterToClass:o=`${e}-enter-to`,appearFromClass:u=n,appearActiveClass:l=s,appearToClass:c=o,leaveFromClass:h=`${e}-leave-from`,leaveActiveClass:d=`${e}-leave-active`,leaveToClass:f=`${e}-leave-to`}=r,p=xv(i),y=p&&p[0],_=p&&p[1],{onBeforeEnter:g,onEnter:m,onEnterCancelled:E,onLeave:w,onLeaveCancelled:L,onBeforeAppear:T=g,onAppear:R=m,onAppearCancelled:P=E}=A,F=(b,v,C)=>{es(b,v?c:o),es(b,v?l:s),C&&C()},H=(b,v)=>{b._isLeaving=!1,es(b,h),es(b,f),es(b,d),v&&v()},M=b=>(v,C)=>{const x=b?R:m,S=()=>F(v,b,C);As(x,[v,S]),Kp(()=>{es(v,b?u:n),fn(v,b?c:o),$p(x)||qp(v,t,y,S)})};return st(A,{onBeforeEnter(b){As(g,[b]),fn(b,n),fn(b,s)},onBeforeAppear(b){As(T,[b]),fn(b,u),fn(b,l)},onEnter:M(!1),onAppear:M(!0),onLeave(b,v){b._isLeaving=!0;const C=()=>H(b,v);fn(b,h),Rv(),fn(b,d),Kp(()=>{b._isLeaving&&(es(b,h),fn(b,f),$p(w)||qp(b,t,_,C))}),As(w,[b,C])},onEnterCancelled(b){F(b,!1),As(E,[b])},onAppearCancelled(b){F(b,!0),As(P,[b])},onLeaveCancelled(b){H(b),As(L,[b])}})}function xv(r){if(r==null)return null;if(ye(r))return[mh(r.enter),mh(r.leave)];{const A=mh(r);return[A,A]}}function mh(r){return D_(r)}function fn(r,A){A.split(/\s+/).forEach(e=>e&&r.classList.add(e)),(r[nu]||(r[nu]=new Set)).add(A)}function es(r,A){A.split(/\s+/).forEach(t=>t&&r.classList.remove(t));const e=r[nu];e&&(e.delete(A),e.size||(r[nu]=void 0))}function Kp(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let Ov=0;function qp(r,A,e,t){const i=r._endId=++Ov,n=()=>{i===r._endId&&t()};if(e)return setTimeout(n,e);const{type:s,timeout:o,propCount:u}=Mv(r,A);if(!s)return t();const l=s+"end";let c=0;const h=()=>{r.removeEventListener(l,d),n()},d=f=>{f.target===r&&++c>=u&&h()};setTimeout(()=>{c<u&&h()},o+1),r.addEventListener(l,d)}function Mv(r,A){const e=window.getComputedStyle(r),t=p=>(e[p]||"").split(", "),i=t(`${dn}Delay`),n=t(`${dn}Duration`),s=Xp(i,n),o=t(`${da}Delay`),u=t(`${da}Duration`),l=Xp(o,u);let c=null,h=0,d=0;A===dn?s>0&&(c=dn,h=s,d=n.length):A===da?l>0&&(c=da,h=l,d=u.length):(h=Math.max(s,l),c=h>0?s>l?dn:da:null,d=c?c===dn?n.length:u.length:0);const f=c===dn&&/\b(transform|all)(,|$)/.test(t(`${dn}Property`).toString());return{type:c,timeout:h,propCount:d,hasTransform:f}}function Xp(r,A){for(;r.length<A.length;)r=r.concat(r);return Math.max(...A.map((e,t)=>Jp(e)+Jp(r[t])))}function Jp(r){return r==="auto"?0:Number(r.slice(0,-1).replace(",","."))*1e3}function Rv(){return document.body.offsetHeight}function Pv(r,A,e){const t=r[nu];t&&(A=(A?[A,...t]:[...t]).join(" ")),A==null?r.removeAttribute("class"):e?r.setAttribute("class",A):r.className=A}const i0=Symbol("_vod"),yh={beforeMount(r,{value:A},{transition:e}){r[i0]=r.style.display==="none"?"":r.style.display,e&&A?e.beforeEnter(r):fa(r,A)},mounted(r,{value:A},{transition:e}){e&&A&&e.enter(r)},updated(r,{value:A,oldValue:e},{transition:t}){!A!=!e&&(t?A?(t.beforeEnter(r),fa(r,!0),t.enter(r)):t.leave(r,()=>{fa(r,!1)}):fa(r,A))},beforeUnmount(r,{value:A}){fa(r,A)}};function fa(r,A){r.style.display=A?r[i0]:"none"}const Fv=Symbol("");function Nv(r,A,e){const t=r.style,i=t.display,n=Ve(e);if(e&&!n){if(A&&!Ve(A))for(const s in A)e[s]==null&&Hd(t,s,"");for(const s in e)Hd(t,s,e[s])}else if(n){if(A!==e){const s=t[Fv];s&&(e+=";"+s),t.cssText=e}}else A&&r.removeAttribute("style");i0 in r&&(t.display=i)}const Zp=/\s*!important$/;function Hd(r,A,e){if(RA(e))e.forEach(t=>Hd(r,A,t));else if(e==null&&(e=""),A.startsWith("--"))r.setProperty(A,e);else{const t=Lv(r,A);Zp.test(e)?r.setProperty(Ks(t),e.replace(Zp,""),"important"):r[t]=e}}const Ag=["Webkit","Moz","ms"],Eh={};function Lv(r,A){const e=Eh[A];if(e)return e;let t=vi(A);if(t!=="filter"&&t in r)return Eh[A]=t;t=Hc(t);for(let i=0;i<Ag.length;i++){const n=Ag[i]+t;if(n in r)return Eh[A]=n}return A}const eg="http://www.w3.org/1999/xlink";function Uv(r,A,e,t,i){if(t&&A.startsWith("xlink:"))e==null?r.removeAttributeNS(eg,A.slice(6,A.length)):r.setAttributeNS(eg,A,e);else{const n=F_(A);e==null||n&&!Km(e)?r.removeAttribute(A):r.setAttribute(A,n?"":e)}}function kv(r,A,e,t,i,n,s){if(A==="innerHTML"||A==="textContent"){t&&s(t,i,n),r[A]=e??"";return}const o=r.tagName;if(A==="value"&&o!=="PROGRESS"&&!o.includes("-")){r._value=e;const l=o==="OPTION"?r.getAttribute("value"):r.value,c=e??"";l!==c&&(r.value=c),e==null&&r.removeAttribute(A);return}let u=!1;if(e===""||e==null){const l=typeof r[A];l==="boolean"?e=Km(e):e==null&&l==="string"?(e="",u=!0):l==="number"&&(e=0,u=!0)}try{r[A]=e}catch{}u&&r.removeAttribute(A)}function fs(r,A,e,t){r.addEventListener(A,e,t)}function zv(r,A,e,t){r.removeEventListener(A,e,t)}const tg=Symbol("_vei");function Gv(r,A,e,t,i=null){const n=r[tg]||(r[tg]={}),s=n[A];if(t&&s)s.value=t;else{const[o,u]=Vv(A);if(t){const l=n[A]=jv(t,i);fs(r,o,l,u)}else s&&(zv(r,o,s,u),n[A]=void 0)}}const rg=/(?:Once|Passive|Capture)$/;function Vv(r){let A;if(rg.test(r)){A={};let t;for(;t=r.match(rg);)r=r.slice(0,r.length-t[0].length),A[t[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Ks(r.slice(2)),A]}let Ch=0;const Qv=Promise.resolve(),Hv=()=>Ch||(Qv.then(()=>Ch=0),Ch=Date.now());function jv(r,A){const e=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=e.attached)return;Dr(Wv(t,e.value),A,5,[t])};return e.value=r,e.attached=Hv(),e}function Wv(r,A){if(RA(A)){const e=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{e.call(r),r._stopped=!0},A.map(t=>i=>!i._stopped&&t&&t(i))}else return A}const ig=r=>r.charCodeAt(0)===111&&r.charCodeAt(1)===110&&r.charCodeAt(2)>96&&r.charCodeAt(2)<123,Yv=(r,A,e,t,i,n,s,o,u)=>{const l=i==="svg";A==="class"?Pv(r,t,l):A==="style"?Nv(r,e,t):Gc(A)?zf(A)||Gv(r,A,e,t,s):(A[0]==="."?(A=A.slice(1),!0):A[0]==="^"?(A=A.slice(1),!1):$v(r,A,t,l))?kv(r,A,t,n,s,o,u):(A==="true-value"?r._trueValue=t:A==="false-value"&&(r._falseValue=t),Uv(r,A,t,l))};function $v(r,A,e,t){if(t)return!!(A==="innerHTML"||A==="textContent"||A in r&&ig(A)&&kA(e));if(A==="spellcheck"||A==="draggable"||A==="translate"||A==="form"||A==="list"&&r.tagName==="INPUT"||A==="type"&&r.tagName==="TEXTAREA")return!1;if(A==="width"||A==="height"){const i=r.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ig(A)&&Ve(e)?!1:A in r}const $l=r=>{const A=r.props["onUpdate:modelValue"]||!1;return RA(A)?e=>fl(A,e):A};function Kv(r){r.target.composing=!0}function ng(r){const A=r.target;A.composing&&(A.composing=!1,A.dispatchEvent(new Event("input")))}const Oo=Symbol("_assign"),Kr={created(r,{modifiers:{lazy:A,trim:e,number:t}},i){r[Oo]=$l(i);const n=t||i.props&&i.props.type==="number";fs(r,A?"change":"input",s=>{if(s.target.composing)return;let o=r.value;e&&(o=o.trim()),n&&(o=Za(o)),r[Oo](o)}),e&&fs(r,"change",()=>{r.value=r.value.trim()}),A||(fs(r,"compositionstart",Kv),fs(r,"compositionend",ng),fs(r,"change",ng))},mounted(r,{value:A}){r.value=A??""},beforeUpdate(r,{value:A,modifiers:{lazy:e,trim:t,number:i}},n){if(r[Oo]=$l(n),r.composing)return;const s=i||r.type==="number"?Za(r.value):r.value,o=A??"";s!==o&&(document.activeElement===r&&r.type!=="range"&&(e||t&&r.value.trim()===o)||(r.value=o))}},j3={deep:!0,created(r,{value:A,modifiers:{number:e}},t){const i=Vc(A);fs(r,"change",()=>{const n=Array.prototype.filter.call(r.options,s=>s.selected).map(s=>e?Za(Kl(s)):Kl(s));r[Oo](r.multiple?i?new Set(n):n:n[0]),r._assigning=!0,g3(()=>{r._assigning=!1})}),r[Oo]=$l(t)},mounted(r,{value:A,oldValue:e,modifiers:{number:t}}){sg(r,A,e,t)},beforeUpdate(r,A,e){r[Oo]=$l(e)},updated(r,{value:A,oldValue:e,modifiers:{number:t}}){r._assigning||sg(r,A,e,t)}};function sg(r,A,e,t){const i=r.multiple,n=RA(A);if(!(i&&!n&&!Vc(A))&&!(n&&Au(A,e))){for(let s=0,o=r.options.length;s<o;s++){const u=r.options[s],l=Kl(u);if(i)if(n){const c=typeof l;c==="string"||c==="number"?u.selected=A.includes(t?Za(l):l):u.selected=L_(A,l)>-1}else u.selected=A.has(l);else if(Au(Kl(u),A)){r.selectedIndex!==s&&(r.selectedIndex=s);return}}!i&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function Kl(r){return"_value"in r?r._value:r.value}const qv=["ctrl","shift","alt","meta"],Xv={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,A)=>qv.some(e=>r[`${e}Key`]&&!A.includes(e))},og=(r,A)=>{const e=r._withMods||(r._withMods={}),t=A.join(".");return e[t]||(e[t]=(i,...n)=>{for(let s=0;s<A.length;s++){const o=Xv[A[s]];if(o&&o(i,A))return}return r(i,...n)})},Jv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ds=(r,A)=>{const e=r._withKeys||(r._withKeys={}),t=A.join(".");return e[t]||(e[t]=i=>{if(!("key"in i))return;const n=Ks(i.key);if(A.some(s=>s===n||Jv[s]===n))return r(i)})},Zv=st({patchProp:Yv},Tv);let ag;function Aw(){return ag||(ag=rv(Zv))}const ew=(...r)=>{const A=Aw().createApp(...r),{mount:e}=A;return A.mount=t=>{const i=rw(t);if(!i)return;const n=A._component;!kA(n)&&!n.render&&!n.template&&(n.template=i.innerHTML),i.innerHTML="";const s=e(i,!1,tw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},A};function tw(r){if(r instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&r instanceof MathMLElement)return"mathml"}function rw(r){return Ve(r)?document.querySelector(r):r}const J=class J{constructor(A=1,e=1,t=1,i=1){a(this,"r",0);a(this,"g",0);a(this,"b",0);a(this,"a",0);this.setTo(A,e,t,i)}convertToHDRRGB(){return this.r=this.r*Math.pow(2.4,this.a),this.g=this.g*Math.pow(2.4,this.a),this.b=this.b*Math.pow(2.4,this.a),this}unSerialized(A){return this.r=A.r,this.g=A.g,this.b=A.b,this.a=A.a,this}hexToRGB(A){return this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,this}hexToRGBA(A){return this.a=(A>>24&255)/255,this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,this}static random(A=1){let e=new J;return e.a=A,e.r=A*Math.random(),e.g=A*Math.random(),e.b=A*Math.random(),e}static randomRGB(A=.5,e=.5,t=.5,i=.5,n=.5,s=.5){let o=new J;return o.a=1,o.r=i+A*Math.random(),o.g=n+e*Math.random(),o.b=s+t*Math.random(),o}static randomGray(A=.5,e=.5){let t=Math.random()*e+A,i=new J;return i.a=1,i.r=t,i.g=t,i.b=t,i}setTo(A,e,t,i){this.r=Math.max(A,0),this.g=Math.max(e,0),this.b=Math.max(t,0),this.a=Math.max(i,0)}setHex(A){if(typeof A!="string"||J.NON_HEX_CHARS.test(A)||!J.VALID_HEX_SIZE.test(A))throw new TypeError("Expected a valid hex string");A=A.replace(/^#/,"");let e=1;A.length===8&&(e=Number.parseInt(A.slice(6,8),16)/255,A=A.slice(0,6)),A.length===4&&(e=Number.parseInt(A.slice(3,4).repeat(2),16)/255,A=A.slice(0,3)),A.length===3&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]);const t=Number.parseInt(A,16),i=t>>16,n=t>>8&255,s=t&255,o=e;this.a=o,this.r=i/255,this.g=n/255,this.b=s/255}getHex(){let A=e=>{e*=255;let t=e.toString(16);return t.length===1&&(t="0"+t),t};return A(this.r)+A(this.g)+A(this.b)+A(this.a)}get rgb(){return[this.r*255>>>0,this.g*255>>>0,this.b*255>>>0]}set rgb(A){this.setTo(A[0]/255,A[1]/255,A[2]/255,this.a)}get rgba(){return[this.r*255>>>0,this.g*255>>>0,this.b*255>>>0,this.a*255>>>0]}set rgba(A){this.setTo(A[0]/255,A[1]/255,A[2]/255,A[3]/255)}clone(){return new J().copyFrom(this)}copyFrom(A){return this.r=A.r,this.g=A.g,this.b=A.b,this.a=A.a,this}copyFromArray(A,e=255){return this.r=A[0]/e,this.g=A[1]/e,this.b=A[2]/e,this.a=A[3]/e,this}copyFromVector(A){return this.r=A.x,this.g=A.y,this.b=A.z,this.a=A.w,this}static hexRGBColor(A,e=null){return e=e||new J,e.hexToRGB(A),e}static lerp(A,e,t,i){let n=i||new J;return n.r=(t.r-e.r)*A+e.r,n.g=(t.g-e.g)*A+e.g,n.b=(t.b-e.b)*A+e.b,n.a=(t.a-e.a)*A+e.a,i}};a(J,"COLOR_RED",new J(1,0,0,1)),a(J,"COLOR_GREEN",new J(0,1,0,1)),a(J,"COLOR_BLUE",new J(0,0,1,1)),a(J,"COLOR_WHITE",new J(1,1,1,1)),a(J,"COLOR_0",new J),a(J,"COLOR_1",new J),a(J,"COLOR_2",new J),a(J,"HEX_CHARACTERS","a-f\\d"),a(J,"MATCH_3OR4_HEX",`#?[${J.HEX_CHARACTERS}]{3}[${J.HEX_CHARACTERS}]?`),a(J,"MATCH_6OR8_HEX",`#?[${J.HEX_CHARACTERS}]{6}([${J.HEX_CHARACTERS}]{2})?`),a(J,"NON_HEX_CHARS",new RegExp(`[^#${J.HEX_CHARACTERS}]`,"gi")),a(J,"VALID_HEX_SIZE",new RegExp(`^${J.MATCH_3OR4_HEX}$|^${J.MATCH_6OR8_HEX}$`,"i")),a(J,"PRIMARY",4149685),a(J,"PRIMARYDARK",3162015),a(J,"ACCENT",16728193),a(J,"WHITE",16777215),a(J,"IVORY",16777200),a(J,"LIGHTYELLOW",16777184),a(J,"YELLOW",16776960),a(J,"SNOW",16775930),a(J,"FLORALWHITE",16775920),a(J,"LEMONCHIFFON",16775885),a(J,"CORNSILK",16775388),a(J,"SEASHELL",16774638),a(J,"LAVENDERBLUSH",16773365),a(J,"PAPAYAWHIP",16773077),a(J,"BLANCHEDALMOND",16772045),a(J,"MISTYROSE",16770273),a(J,"BISQUE",16770244),a(J,"MOCCASIN",16770229),a(J,"NAVAJOWHITE",16768685),a(J,"PEACHPUFF",16767673),a(J,"GOLD",16766720),a(J,"PINK",16761035),a(J,"LIGHTPINK",16758465),a(J,"ORANGE",16753920),a(J,"LIGHTSALMON",16752762),a(J,"DARKORANGE",16747520),a(J,"CORAL",16744272),a(J,"HOTPINK",16738740),a(J,"TOMATO",16737095),a(J,"ORANGERED",16729344),a(J,"DEEPPINK",16716947),a(J,"FUCHSIA",16711935),a(J,"MAGENTA",16711935),a(J,"RED",16711680),a(J,"OLDLACE",16643558),a(J,"LIGHTGOLDENRODYELLOW",16448210),a(J,"LINEN",16445670),a(J,"ANTIQUEWHITE",16444375),a(J,"SALMON",16416882),a(J,"GHOSTWHITE",16316671),a(J,"MINTCREAM",16121850),a(J,"WHITESMOKE",16119285),a(J,"BEIGE",16119260),a(J,"WHEAT",16113331),a(J,"SANDYBROWN",16032864),a(J,"AZURE",15794175),a(J,"HONEYDEW",15794160),a(J,"ALICEBLUE",15792383),a(J,"KHAKI",15787660),a(J,"LIGHTCORAL",15761536),a(J,"PALEGOLDENROD",15657130),a(J,"VIOLET",15631086),a(J,"DARKSALMON",15308410),a(J,"LAVENDER",15132410),a(J,"LIGHTCYAN",14745599),a(J,"BURLYWOOD",14596231),a(J,"PLUM",14524637),a(J,"GAINSBORO",14474460),a(J,"CRIMSON",14423100),a(J,"PALEVIOLETRED",14381203),a(J,"GOLDENROD",14329120),a(J,"ORCHID",14315734),a(J,"THISTLE",14204888),a(J,"LIGHTGREY",13882323),a(J,"TAN",13808780),a(J,"CHOCOLATE",13789470),a(J,"PERU",13468991),a(J,"INDIANRED",13458524),a(J,"MEDIUMVIOLETRED",13047173),a(J,"SILVER",12632256),a(J,"DARKKHAKI",12433259),a(J,"ROSYBROWN",12357519),a(J,"MEDIUMORCHID",12211667),a(J,"DARKGOLDENROD",12092939),a(J,"FIREBRICK",11674146),a(J,"POWDERBLUE",11591910),a(J,"LIGHTSTEELBLUE",11584734),a(J,"PALETURQUOISE",11529966),a(J,"GREENYELLOW",11403055),a(J,"LIGHTBLUE",11393254),a(J,"DARKGRAY",11119017),a(J,"BROWN",10824234),a(J,"SIENNA",10506797),a(J,"DARKORCHID",10040012),a(J,"PALEGREEN",10025880),a(J,"DARKVIOLET",9699539),a(J,"MEDIUMPURPLE",9662683),a(J,"LIGHTGREEN",9498256),a(J,"DARKSEAGREEN",9419919),a(J,"SADDLEBROWN",9127187),a(J,"DARKMAGENTA",9109643),a(J,"DARKRED",9109504),a(J,"BLUEVIOLET",9055202),a(J,"LIGHTSKYBLUE",8900346),a(J,"SKYBLUE",8900331),a(J,"GRAY",8421504),a(J,"OLIVE",8421376),a(J,"PURPLE",8388736),a(J,"MAROON",8388608),a(J,"AQUAMARINE",8388564),a(J,"CHARTREUSE",8388352),a(J,"LAWNGREEN",8190976),a(J,"MEDIUMSLATEBLUE",8087790),a(J,"LIGHTSLATEGRAY",7833753),a(J,"SLATEGRAY",7372944),a(J,"OLIVEDRAB",7048739),a(J,"SLATEBLUE",6970061),a(J,"DIMGRAY",6908265),a(J,"MEDIUMAQUAMARINE",6737322),a(J,"CORNFLOWERBLUE",6591981),a(J,"CADETBLUE",6266528),a(J,"DARKOLIVEGREEN",5597999),a(J,"INDIGO",4915330),a(J,"MEDIUMTURQUOISE",4772300),a(J,"DARKSLATEBLUE",4734347),a(J,"STEELBLUE",4620980),a(J,"ROYALBLUE",4286945),a(J,"TURQUOISE",4251856),a(J,"MEDIUMSEAGREEN",3978097),a(J,"LIMEGREEN",3329330),a(J,"DARKSLATEGRAY",3100495),a(J,"SEAGREEN",3050327),a(J,"FORESTGREEN",2263842),a(J,"LIGHTSEAGREEN",2142890),a(J,"DODGERBLUE",2003199),a(J,"MIDNIGHTBLUE",1644912),a(J,"AQUA",65535),a(J,"CYAN",65535),a(J,"SPRINGGREEN",65407),a(J,"LIME",65280),a(J,"MEDIUMSPRINGGREEN",64154),a(J,"DARKTURQUOISE",52945),a(J,"DEEPSKYBLUE",49151),a(J,"DARKCYAN",35723),a(J,"TEAL",32896),a(J,"GREEN",32768),a(J,"DARKGREEN",25600),a(J,"BLUE",255),a(J,"MEDIUMBLUE",205),a(J,"DARKBLUE",139),a(J,"NAVY",128),a(J,"BLACK",0);let fA=J;class be{static start(A){this._startTime=performance.now(),this._timeLabel=A}static end(){console.log(this._timeLabel,performance.now()-this._startTime)}}a(be,"time",0),a(be,"frame",0),a(be,"delta",0),a(be,"_startTime",0),a(be,"_timeLabel","");class qr{constructor(A=null,e=null){a(this,"target");a(this,"currentTarget");a(this,"type");a(this,"data");a(this,"param");a(this,"time",0);a(this,"delay",0);a(this,"mouseCode",0);a(this,"ctrlKey");a(this,"altKey");a(this,"shiftKey");a(this,"targetTouches");a(this,"changedTouches");a(this,"touches");a(this,"_stopImmediatePropagation",!1);a(this,"view");this.type=A,this.data=e}stopImmediatePropagation(){this._stopImmediatePropagation=!0}reset(){this._stopImmediatePropagation=!1}get isStopImmediatePropagation(){return this._stopImmediatePropagation}}class ql{constructor(A=null,e=null,t=null,i=null,n=0){a(this,"id",0);a(this,"current");this.type=A,this.thisObject=e,this.handler=t,this.param=i,this.priority=n}equalCurrentListener(A,e,t,i){return this.type==A&&this.thisObject==t&&this.handler==e&&this.param==i}dispose(){this.handler=null,this.thisObject=null,this.param=null,this.priority=0}}a(ql,"event_id_count",0);class oa{constructor(){a(this,"listeners",{});a(this,"data")}dispatchEvent(A){var e=this.listeners[A.type];if(e!=null){e=e.slice();for(var t=0;t<e.length;t++){var i=e[t];if(i.handler){try{A.param=i.param,A.currentTarget=i,i.thisObject,i.handler.call(i.thisObject,A)}catch{}if(A.isStopImmediatePropagation)break}}}}destroy(){for(var A in this.listeners)for(var e=this.listeners[A];e.length>0;){var t=e[0];t.handler=null,t.thisObject=null,e.splice(0,1)}}addEventListener(A,e,t,i=null,n=0){if(this.listeners[A]==null&&(this.listeners[A]=[]),!this.hasEventListener(A,e,t)){var s=new ql(A,t,e,i,n);return s.id=++ql.event_id_count,s.current=this,this.listeners[A].push(s),this.listeners[A].sort(function(o,u){return u.priority-o.priority}),s.id}for(let o=0;o<this.listeners[A].length;o++){let u=this.listeners[A][o];if(u.equalCurrentListener(A,e,t,i))return u.id}return 0}removeEventListener(A,e,t){if(this.hasEventListener(A,e,t))for(var i=0;i<this.listeners[A].length;i++){var n=this.listeners[A][i];if(n.equalCurrentListener(A,e,t,n.param)){n.handler=null,n.thisObject=null,this.listeners[A].splice(i,1);return}}}removeEventListenerAt(A){for(var e in this.listeners)for(var t=0;t<this.listeners[e].length;t++){var i=this.listeners[e][t];if(i.id==A)return i.handler=null,i.thisObject=null,this.listeners[e].splice(t,1),!0}return!1}removeAllEventListener(A=null){let e;if(A){if(this.listeners[A]){for(var t=0;t<this.listeners[A].length;t++)e=this.listeners[A][t],e.dispose(),this.listeners[A].splice(t,1);delete this.listeners[A]}}else for(let i in this.listeners){for(var t=0;t<this.listeners[i].length;t++)e=this.listeners[i][t],e.dispose(),this.listeners[i].splice(t,1);delete this.listeners[i]}}containEventListener(A){return this.listeners[A]==null?!1:this.listeners[A].length>0}hasEventListener(A,e=null,t=null){if(this.listeners[A]==null)return!1;if(t&&e)for(var i=0;i<this.listeners[A].length;i++){var n=this.listeners[A][i];if(n.equalCurrentListener(A,e,t,n.param))return!0}return!1}}class Va extends qr{constructor(){super(...arguments);a(this,"keyCode",0)}}a(Va,"KEY_DOWN","onKeyDown"),a(Va,"KEY_UP","onKeyUp");class mA extends qr{constructor(){super(...arguments);a(this,"pointerId");a(this,"pointerType");a(this,"isPrimary");a(this,"pressure");a(this,"mouseX");a(this,"mouseY");a(this,"movementX");a(this,"movementY");a(this,"deltaX");a(this,"deltaY");a(this,"deltaZ")}reset(){super.reset(),this.mouseX=0,this.mouseY=0,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,this.deltaZ=0}}a(mA,"PICK_OVER","onPickOver"),a(mA,"PICK_OVER_GUI","onPickOverGUI"),a(mA,"PICK_CLICK","onPickClick"),a(mA,"PICK_CLICK_GUI","onPickClickGUI"),a(mA,"PICK_OUT","onPickOut"),a(mA,"PICK_OUT_GUI","onPickOutGUI"),a(mA,"PICK_MOVE","onPickMove"),a(mA,"PICK_UP","onPickUp"),a(mA,"PICK_UP_GUI","onPickUpGUI"),a(mA,"PICK_DOWN","onPickDown"),a(mA,"PICK_DOWN_GUI","onPickDownGUI"),a(mA,"POINTER_RIGHT_CLICK","onPointerRightClick"),a(mA,"POINTER_MID_UP","onPointerMidUp"),a(mA,"POINTER_MID_DOWN","onPointerMidDown"),a(mA,"POINTER_CLICK","onPointerClick"),a(mA,"POINTER_MOVE","onPointerMove"),a(mA,"POINTER_DOWN","onPointerDown"),a(mA,"POINTER_UP","onPointerUp"),a(mA,"POINTER_OUT","onPointerOut"),a(mA,"POINTER_OVER","onPointerOver"),a(mA,"POINTER_WHEEL","onPointerWheel");const dA=class dA{constructor(A=0,e=0,t=0,i=0){a(this,"x",0);a(this,"y",0);a(this,"z",0);a(this,"w",1);a(this,"index",0);this.set(A,e,t,i),this.index=dA._index++}static get ZERO(){return new dA(0,0,0)}static get ONE(){return new dA(1,1,1)}static get LEFT(){return new dA(-1,0,0)}static get RIGHT(){return new dA(1,0,0)}static get UP(){return new dA(0,1,0)}static get DOWN(){return new dA(0,-1,0)}static get BACK(){return new dA(0,0,-1)}static get FORWARD(){return new dA(0,0,1)}set a(A){this.w=A}set r(A){this.x=A}set g(A){this.y=A}set b(A){this.z=A}get a(){return this.w}get r(){return this.x}get g(){return this.y}get b(){return this.z}get length(){return Math.sqrt(this.lengthSquared)}get lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}get position(){return this}static getTowPointbyDir(A,e,t,i,n){n==dA.Z_AXIS?(e.x=A.y,e.y=-A.x,t.x=-A.y,t.y=A.x,e.scaleBy(i*.5),t.scaleBy(i*.5)):n==dA.Y_AXIS&&(e.x=A.z,e.z=-A.x,t.x=-A.z,t.z=A.x,e.scaleBy(i*.5),t.scaleBy(i*.5))}static pointToLine(A,e,t){let i=0,n,s,o;if(n=dA.distance(A,e),s=dA.distance(A,t),o=dA.distance(e,t),o<=1e-6||s<=1e-6)return i=0,i;if(n<=1e-6||o*o>=n*n+s*s)return i=s,i;if(s*s>=n*n+o*o)return i=o,i;let u=(n+s+o)/2;return i=2*Math.sqrt(u*(u-n)*(u-s)*(u-o))/n,i}static dot(A,e){return A.x*e.x+A.y*e.y+A.z*e.z}static getPoints(A,e){let t=[];for(let i=0;i<A;i++){const n=new dA(Math.random()*e-e*.5,Math.random()*e-e*.5,Math.random()*e-e*.5);t.push(n)}return t}static getPointNumbers(A,e){let t=[];for(let i=0;i<A;i++)t.push(Math.random()*e-e*.5,Math.random()*e-e*.5,Math.random()*e-e*.5);return t}static getAngle(A,e){let t=A.dotProduct(e)/(A.length*e.length);return Math.acos(t)*180/Math.PI}static sqrMagnitude(A){return A.x*A.x+A.y*A.y+A.z*A.z}static getZYAngle(A,e){return this.calAngle(A.y,A.z,e.y,e.z)}static sub(A,e,t=null){return t=t||new dA,t.x=A.x-e.x,t.y=A.y-e.y,t.z=A.z-e.z,t}static add(A,e,t=null){return t=t||new dA,t.x=A.x+e.x,t.y=A.y+e.y,t.z=A.z+e.z,t}static smoothDamp(A,e,t,i,n,s){return null}static distance(A,e){var t=A.x-e.x,i=A.y-e.y,n=A.z-e.z;return Math.sqrt(t*t+i*i+n*n)}static squareDistance(A,e){var t=A.x-e.x,i=A.y-e.y,n=A.z-e.z;return t*t+i*i+n*n}static distanceXZ(A,e){var t=A.x-e.x,i=0,n=A.z-e.z;return Math.sqrt(t*t+i*i+n*n)}set(A,e,t,i=1){return this.x=A,this.y=e,this.z=t,this.w=i,this}add(A,e=null){e||(e=new dA);var t=this.x,i=this.y,n=this.z,s=this.w,o=A.x,u=A.y,l=A.z,c=A.w;return e.setTo(t+o,i+u,n+l,s+c),e}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}distanceToSquared(A){let e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}addXYZW(A,e,t,i,n=null){n||(n=new dA);var s=this.x,o=this.y,u=this.z,l=this.w,c=A,h=e,d=t,f=i;return n.setTo(s+c,o+h,u+d,l+f),n}clone(){return new dA(this.x,this.y,this.z,this.w)}copyFrom(A){var e=this;return e.x=A.x,e.y=A.y,e.z=A.z,e.w=A.w,e}decrementBy(A){this.x-=A.x,this.y-=A.y,this.z-=A.z}dotProduct(A){return this.x*A.x+this.y*A.y+this.z*A.z}equals(A,e=!1){return this.x==A.x&&this.y==A.y&&this.z==A.z&&(!e||this.w==A.w)}incrementBy(A){this.x+=A.x,this.y+=A.y,this.z+=A.z}divide(A){return A instanceof dA?new dA(this.x/A.x,this.y/A.y,this.z/A.z):(this.x=this.x/A,this.y=this.y/A,this.z=this.z/A,this)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}normalize(A=1){let e=this;if(this.length!=0){var t=A/this.length;return this.x*=t,this.y*=t,this.z*=t,e}return e}applyQuaternion(A){const e=this.x,t=this.y,i=this.z,n=A.x,s=A.y,o=A.z,u=A.w,l=u*e+s*i-o*t,c=u*t+o*e-n*i,h=u*i+n*t-s*e,d=-n*e-s*t-o*i;return this.x=l*u+d*-n+c*-o-h*-s,this.y=c*u+d*-s+h*-n-l*-o,this.z=h*u+d*-o+l*-s-c*-n,this}scaleBy(A){return this.x*=A,this.y*=A,this.z*=A,this}mul(A){let e=new dA;return e.x=this.x*A,e.y=this.y*A,e.z=this.z*A,e}scale(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}scaleToRef(A,e){return e||(e=new dA),e.x=this.x*A,e.y=this.y*A,e.z=this.z*A,e}setTo(A,e,t,i=1){this.x=A,this.y=e,this.z=t,this.w=i}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w,this}subtract(A,e=null){return e||(e=new dA),e.setTo(this.x-A.x,this.y-A.y,this.z-A.z),e}multiply(A,e=null){e||(e=new dA);var t=this.x,i=this.y,n=this.z,s=A.x,o=A.y,u=A.z;return e.setTo(t*s,i*o,n*u),e}divided(A,e=null){e||(e=new dA);var t=this.x,i=this.y,n=this.z,s=A.x,o=A.y,u=A.z;return e.setTo(t/s,i/o,n/u),e}div(A,e){e||(e=new dA);var t=this.x,i=this.y,n=this.z,s=this.w;return e.setTo(t/A,i/A,n/A,s/A),e}lerp(A,e,t){var i=A.x,n=A.y,s=A.z,o=A.w,u=e.x,l=e.y,c=e.z,h=e.w;this.x=(u-i)*t+i,this.y=(l-n)*t+n,this.z=(c-s)*t+s,this.w=(h-o)*t+o}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}toString(){return"<"+this.x+", "+this.y+", "+this.z+">"}normalizeToWay2D_XY(){let A=Math.abs(this.x),e=Math.abs(this.y);A>e?this.x>0?this.copyFrom(dA.RIGHT):this.copyFrom(dA.LEFT):this.y>0?this.copyFrom(dA.DOWN):this.copyFrom(dA.UP)}toArray(){return[this.x,this.y,this.z]}copyToBytes(A){A.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this.x,!0),A.setFloat32(1*Float32Array.BYTES_PER_ELEMENT,this.y,!0),A.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,this.z,!0)}crossProduct(A,e=null){return e=e||new dA,e.x=this.y*A.z-this.z*A.y,e.y=this.z*A.x-this.x*A.z,e.z=this.x*A.y-this.y*A.x,e.w=1,e}crossVectors(A,e){return A.crossProduct(e,this),this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}setFromArray(A,e=0){this.x=A[e],this.y=A[e+1],this.z=A[e+2]}divideScalar(A){return this.multiplyScalar(1/A)}clampLength(A,e){let t=this.length;return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}setScalar(A){return this.x=A,this.y=A,this.z=A,this}static calAngle(A,e,t,i){const n=o(t,i,A,e);let s=Math.acos(n)*180/Math.PI;return t<A&&(s=-s),s;function o(l,c,h,d){let f=[l-h,c-d];return u(f,[0,-1])}function u(l,c){let h=l[0]*c[0]+l[1]*c[1],d=Math.sqrt(l[0]*l[0]+l[1]*l[1])*Math.sqrt(c[0]*c[0]+c[1]*c[1]);return h/d}}static pointInsideTriangle(A,e,t,i){return dA.HELP_0.setTo(A.x,A.z,0),dA.HELP_1.setTo(e.x,e.z,0),dA.HELP_2.setTo(t.x,t.z,0),dA.HELP_3.setTo(i.x,i.z,0),dA.pointInsideTriangle2d()}static pointInsideTriangle2d(){return dA.productXY(dA.HELP_1,dA.HELP_2,dA.HELP_3)>=0?dA.productXY(dA.HELP_1,dA.HELP_2,dA.HELP_0)>=0&&dA.productXY(dA.HELP_2,dA.HELP_3,dA.HELP_0)>=0&&dA.productXY(dA.HELP_3,dA.HELP_1,dA.HELP_0)>=0:dA.productXY(dA.HELP_1,dA.HELP_2,dA.HELP_0)<=0&&dA.productXY(dA.HELP_2,dA.HELP_3,dA.HELP_0)<=0&&dA.productXY(dA.HELP_3,dA.HELP_1,dA.HELP_0)<=0}static productXY(A,e,t){var i=(A.x-t.x)*(e.y-t.y)-(A.y-t.y)*(e.x-t.x);return i>-1e-5&&i<1e-5&&(i=0),i}static serialize(A){return new dA(A.x,A.y,A.z,A.w)}};a(dA,"MAX",new dA(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)),a(dA,"MIN",new dA(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE)),a(dA,"SAFE_MAX",new dA(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),a(dA,"SAFE_MIN",new dA(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)),a(dA,"X_AXIS",new dA(1,0,0)),a(dA,"neg_X_AXIS",new dA(-1,0,0)),a(dA,"Y_AXIS",new dA(0,1,0)),a(dA,"Z_AXIS",new dA(0,0,1)),a(dA,"HELP_0",new dA),a(dA,"HELP_1",new dA),a(dA,"HELP_2",new dA),a(dA,"EPSILON",1e-5),a(dA,"HELP_3",new dA),a(dA,"HELP_4",new dA),a(dA,"HELP_5",new dA),a(dA,"HELP_6",new dA),a(dA,"_index",0);let I=dA;class iw{constructor(A){a(this,"canvasX");a(this,"canvasY");a(this,"identifier");a(this,"clientX");a(this,"clientY");a(this,"pageX");a(this,"pageY");a(this,"screenX");a(this,"screenY");this.canvasX=A.clientX,this.canvasY=A.clientY,this.identifier=A.identifier,this.clientX=A.clientX,this.clientY=A.clientY,this.pageX=A.pageX,this.pageY=A.pageY,this.screenX=A.screenX,this.screenY=A.screenY}}class nw extends oa{constructor(){super(...arguments);a(this,"canvasX",0);a(this,"canvasY",0);a(this,"isMouseDown",!1);a(this,"isRightMouseDown",!1);a(this,"canvas");a(this,"mouseX",0);a(this,"mouseY",0);a(this,"wheelDelta",0);a(this,"mouseOffsetX",0);a(this,"mouseOffsetY",0);a(this,"mouseLastX",0);a(this,"mouseLastY",0);a(this,"_time",0);a(this,"_keyStatus");a(this,"_mouseStatus");a(this,"_isTouchStart");a(this,"_keyEvent3d");a(this,"_pointerEvent3D");a(this,"_windowsEvent3d");a(this,"_gp",!1);a(this,"_oldPosition1",null);a(this,"_oldPosition2",null);a(this,"_downTime",0)}initCanvas(e){this.canvas=e,e.onpointerdown=i=>{i.button==0?this.mouseStart(i):i.button==1?this.middleDown(i):i.button==2&&this.mouseStart(i)},e.onpointerup=i=>{i.button==0?this.mouseEnd(i):i.button==1?this.middleUp(i):i.button==2&&this.mouseEnd(i)},e.onpointerenter=i=>{this.mouseOver(i)},e.onpointermove=i=>{this.mouseMove(i)},e.onpointercancel=i=>{this.mouseEnd(i)},e.onpointerleave=i=>{this.mouseEnd(i)},e.onpointerout=i=>{this.mouseEnd(i)},e.addEventListener("click",i=>{i.button==2?(this.isRightMouseDown=!1,this.rightClick(i)):i.button==0&&(this.isMouseDown=!1,this.mouseClick(i))},!0),e.addEventListener("wheel",i=>this.mouseWheel(i),{passive:!1}),window.addEventListener("keydown",i=>this.keyDown(i),!0),window.addEventListener("keyup",i=>this.keyUp(i),!0),e.oncontextmenu=function(){return!1};let t=this.canvas.getBoundingClientRect();this.canvasX=t.left,this.canvasY=t.top,this._keyStatus={},this._mouseStatus={},this._isTouchStart=!1,this._keyEvent3d=new Va,this._pointerEvent3D=new mA,this._windowsEvent3d=new qr}onPinch(e,t,i,n){this._oldPosition1=new I(e,t),this._oldPosition2=new I(i,n)}onSwipe(e,t){this.mouseX=e,this.mouseY=t,this._oldPosition1=null,this._oldPosition2=null,this._time=new Date().getTime()}GetTargetTouches(e){for(var t=new Array,i=0;i<e.length;i++){var n=new iw(e[i]);t.push(n)}return t}rightClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=mA.POINTER_RIGHT_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}middleDown(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=mA.POINTER_MID_DOWN,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}middleUp(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=mA.POINTER_MID_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}mouseClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=mA.POINTER_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}mouseEnd(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._mouseStatus[this._pointerEvent3D.mouseCode]=!1,this._pointerEvent3D.type=mA.POINTER_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseStart(e){this.isMouseDown=!0,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.type=mA.POINTER_DOWN,this.dispatchEvent(this._pointerEvent3D)}mouseMove(e){this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=mA.POINTER_MOVE,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.movementX=e.movementX,this._pointerEvent3D.movementY=e.movementY,this.dispatchEvent(this._pointerEvent3D)}mouseOver(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=mA.POINTER_OVER,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseWheel(e){e.preventDefault(),this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,"wheelDelta"in e?(this._pointerEvent3D.delay=e.wheelDelta,this.wheelDelta=e.wheelDelta):"delta"in e&&(this.wheelDelta=e.delta),this._pointerEvent3D.reset(),this._pointerEvent3D.type=mA.POINTER_WHEEL,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.deltaX=e.deltaX,this._pointerEvent3D.deltaY=e.deltaY,this._pointerEvent3D.deltaZ=e.deltaZ,this.dispatchEvent(this._pointerEvent3D)}keyDown(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyEvent3d.ctrlKey=e.ctrlKey,this._keyEvent3d.altKey=e.altKey,this._keyEvent3d.shiftKey=e.shiftKey,this._keyStatus[e.keyCode]||(this._keyStatus[e.keyCode]=!0,this._keyEvent3d.type=Va.KEY_DOWN,this.dispatchEvent(this._keyEvent3d))}keyUp(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyStatus[e.keyCode]=!1,this._keyEvent3d.type=Va.KEY_UP,this.dispatchEvent(this._keyEvent3d)}GetSlideAngle(e,t){return Math.atan2(t,e)*180/Math.PI}GetSlideDirection(e,t,i,n){var s=t-n,o=i-e,u=0;if(Math.abs(o)<2&&Math.abs(s)<2)return u;var l=this.GetSlideAngle(o,s);return l>=-45&&l<45?u=4:l>=45&&l<135?u=1:l>=-135&&l<-45?u=2:(l>=135&&l<=180||l>=-180&&l<-135)&&(u=3),u}}const sw="0.7.2";let xr={clamp_to_edge:"clamp-to-edge",repeat:"repeat",mirror_repeat:"mirror-repeat"},en={never:"never",less:"less",equal:"equal",less_equal:"less-equal",greater:"greater",not_equal:"not-equal",greater_equal:"greater-equal",always:"always"},ar={none:"none",front:"front",back:"back"},qi={nearest:"nearest",linear:"linear"},r1={point_list:"point-list",line_list:"line-list",line_strip:"line-strip",triangle_list:"triangle-list",triangle_strip:"triangle-strip"},MA={r8unorm:"r8unorm",r8snorm:"r8snorm",r8uint:"r8uint",r8sint:"r8sint",r16uint:"r16uint",r16sint:"r16sint",r16float:"r16float",rg8unorm:"rg8unorm",rg8snorm:"rg8snorm",rg8uint:"rg8uint",rg8sint:"rg8sint",r32uint:"r32uint",r32sint:"r32sint",r32float:"r32float",rg16uint:"rg16uint",rg16sint:"rg16sint",rg16float:"rg16float",rgba8unorm:"rgba8unorm",rgba8unorm_srgb:"rgba8unorm-srgb",rgba8snorm:"rgba8snorm",rgba8uint:"rgba8uint",rgba8sint:"rgba8sint",bgra8unorm:"bgra8unorm",bgra8unorm_srgb:"bgra8unorm-srgb",rgb9e5ufloat:"rgb9e5ufloat",rgb10a2unorm:"rgb10a2unorm",rg11b10ufloat:"rg11b10ufloat",rg32uint:"rg32uint",rg32sint:"rg32sint",rg32float:"rg32float",rgba16uint:"rgba16uint",rgba16sint:"rgba16sint",rgba16float:"rgba16float",rgba32uint:"rgba32uint",rgba32sint:"rgba32sint",rgba32float:"rgba32float",stencil8:"stencil8",depth16unorm:"depth16unorm",depth24plus:"depth24plus",depth24plus_stencil8:"depth24plus-stencil8",depth32float:"depth32float",bc1_rgba_unorm:"bc1-rgba-unorm",bc1_rgba_unorm_srgb:"bc1-rgba-unorm-srgb",bc2_rgba_unorm:"bc2-rgba-unorm",bc2_rgba_unorm_srgb:"bc2-rgba-unorm-srgb",bc3_rgba_unorm:"bc3-rgba-unorm",bc3_rgba_unorm_srgb:"bc3-rgba-unorm-srgb",bc4_r_unorm:"bc4-r-unorm",bc4_r_snorm:"bc4-r-snorm",bc5_rg_unorm:"bc5-rg-unorm",bc5_rg_snorm:"bc5-rg-snorm",bc6h_rgb_ufloat:"bc6h-rgb-ufloat",bc6h_rgb_float:"bc6h-rgb-float",bc7_rgba_unorm:"bc7-rgba-unorm",bc7_rgba_unorm_srgb:"bc7-rgba-unorm-srgb",depth24unorm_stencil8:"depth24unorm-stencil8",depth32float_stencil8:"depth32float-stencil8"},qu={uint8x2:"uint8x2",uint8x4:"uint8x4",sint8x2:"sint8x2",sint8x4:"sint8x4",unorm8x2:"unorm8x2",unorm8x4:"unorm8x4",snorm8x2:"snorm8x2",snorm8x4:"snorm8x4",uint16x2:"uint16x2",uint16x4:"uint16x4",sint16x2:"sint16x2",sint16x4:"sint16x4",unorm16x2:"unorm16x2",unorm16x4:"unorm16x4",snorm16x2:"snorm16x2",snorm16x4:"snorm16x4",float16x2:"float16x2",float16x4:"float16x4",float32:"float32",float32x2:"float32x2",float32x3:"float32x3",float32x4:"float32x4",uint32:"uint32",uint32x2:"uint32x2",uint32x3:"uint32x3",uint32x4:"uint32x4",sint32:"sint32",sint32x2:"sint32x2",sint32x3:"sint32x3",sint32x4:"sint32x4"};class Ls extends qr{}a(Ls,"RESIZE","resize");class ow extends oa{constructor(){super(...arguments);a(this,"adapter");a(this,"device");a(this,"context");a(this,"aspect");a(this,"presentationSize",[0,0]);a(this,"presentationFormat");a(this,"canvas");a(this,"windowWidth");a(this,"windowHeight");a(this,"canvasConfig");a(this,"super",1);a(this,"_pixelRatio",1);a(this,"_resizeEvent")}get pixelRatio(){return this._pixelRatio}async init(e){var t;if(this.canvasConfig=e,e&&e.canvas){if(this.canvas=e.canvas,this.canvas===null)throw new Error("no Canvas");const i=this.canvas.clientWidth,n=this.canvas.clientHeight;i!=this.canvas.clientWidth&&(this.canvas.style.width=i+"px"),n!=this.canvas.clientHeight&&(this.canvas.style.height=n+"px")}else this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0px",this.canvas.style.left="0px",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.zIndex=e!=null&&e.zIndex?e.zIndex.toString():"0",document.body.appendChild(this.canvas);if(e&&e.backgroundImage?(this.canvas.style.background=`url(${e.backgroundImage})`,this.canvas.style["background-size"]="cover",this.canvas.style["background-position"]="center"):this.canvas.style.background="transparent",this.canvas.style["touch-action"]="none",this.canvas.style["object-fit"]="cover",navigator.gpu===void 0)throw new Error("Your browser does not support WebGPU!");if(this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"}),this.adapter==null)throw new Error("Your browser does not support WebGPU!");if(this.device=await this.adapter.requestDevice({requiredFeatures:["bgra8unorm-storage","depth-clip-control","depth32float-stencil8","indirect-first-instance","rg11b10ufloat-renderable"],requiredLimits:{minUniformBufferOffsetAlignment:256,maxStorageBufferBindingSize:this.adapter.limits.maxStorageBufferBindingSize}}),this.device==null)throw new Error("Your browser does not support WebGPU!");return this._pixelRatio=((t=this.canvasConfig)==null?void 0:t.devicePixelRatio)||window.devicePixelRatio||1,this._pixelRatio=Math.min(this._pixelRatio,2),this.device.label="device",this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),this.context=this.canvas.getContext("webgpu"),this.context.configure({device:this.device,format:this.presentationFormat,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"premultiplied",colorSpace:"srgb"}),this._resizeEvent=new Ls(Ls.RESIZE,{width:this.windowWidth,height:this.windowHeight}),new ResizeObserver(()=>{this.updateSize(),Tt.destroyTexture()}).observe(this.canvas),this.updateSize(),!0}updateSize(){let e=Math.floor(this.canvas.clientWidth*this.pixelRatio*this.super),t=Math.floor(this.canvas.clientHeight*this.pixelRatio*this.super);(e!=this.windowWidth||t!=this.windowHeight)&&(this.canvas.width=this.windowWidth=e,this.canvas.height=this.windowHeight=t,this.presentationSize[0]=this.windowWidth,this.presentationSize[1]=this.windowHeight,this.aspect=this.windowWidth/this.windowHeight,this._resizeEvent.data.width=this.windowWidth,this._resizeEvent.data.height=this.windowHeight,this.dispatchEvent(this._resizeEvent))}}let iA=new ow;class Ye{}a(Ye,"colorBufferTex_NAME","colorBufferTex"),a(Ye,"positionBufferTex_NAME","positionBufferTex"),a(Ye,"normalBufferTex_NAME","normalBufferTex"),a(Ye,"materialBufferTex_NAME","materialBufferTex"),a(Ye,"zBufferTexture_NAME","zBufferTexture"),a(Ye,"zPreDepthTexture_NAME","zPreDepthTexture"),a(Ye,"outTex_NAME","outTex");var It=(r=>(r[r.Default=1]="Default",r[r.IgnoreDepthPass=2]="IgnoreDepthPass",r[r.Sky=6]="Sky",r[r.Particle=10]="Particle",r[r.SkinnedMesh=16]="SkinnedMesh",r[r.MorphTarget=32]="MorphTarget",r[r.Terrain=64]="Terrain",r[r.UI=128]="UI",r))(It||{});class Gi{static addMask(A,e){return A|e}static removeMask(A,e){return A&~e}static hasMask(A,e){return(A&e)==e}}function Xl(r,A){let e=r.__NonSerialize__;e||(e=r.__NonSerialize__={},e.__NonSerialize__=!0),e[A]=!0}function ug(r,A){let e;for(;r&&(r=r.__proto__,r&&(e=r.__NonSerialize__),!e););return e&&e[A]}function Hi(r,A,e,t,i){let n=r.__EditorInspector__;n||(n=r.__EditorInspector__=new Map);let s=n.get(r.constructor.name);s||(s=new Map,n.set(r.constructor.name,s)),s.set(A,{p1:e,p2:t,p3:i})}function ri(r,A,e,t,i){let n=window.__Component__;n||(n=window.__Component__={}),n[A]=r}function aw(r){let A=window.__Component__;return A[r]?A[r]:null}function $n(r,A,e,t,i){let n=window.__shader__;n||(n=window.__shader__={}),n[A]=r}function uw(r){let A=window.__shader__;return A[r]?A[r]:null}var lw=Object.defineProperty,cw=Object.getOwnPropertyDescriptor,lg=(r,A,e,t)=>{for(var i=t>1?void 0:t?cw(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&lw(A,e,i),i},$i;const jd=($i=class{constructor(){a(this,"__refection");a(this,"__size",0)}getValueType(){if(!this.__refection){let A=this;this.__refection=[];for(const e in A)if(!ug(this,e)){const t=A[e];let i={name:e,type:t.constructor.name};this.__refection.push(i)}}return this.__refection}static getValueSize(A){switch(A.constructor.name){case"Boolean":return 1*4;case"Number":return 1*4;case"f32":return 1*4;case"i32":return 1*4;case"u32":return 1*4;case"Float32Array":return A.byteLength;case"Vector2":return 2*4;case"Vector3":return 3*4;case"Vector4":return 4*4;case"Color":return 4*4;case"Array":let e=0;for(let t=0,i=A.length;t<i;t++)e+=$i.getValueSize(A[t]);return e}return 0}static Ref(A){return this.Get(A).getValueType()}static Get(A){let e=$i.__cacheStruct.get(A.prototype);return e||(e=new A,$i.__cacheStruct.set(A.prototype,e)),e}static GetSize(A){let e=this.Get(A);if(e.__size==0){for(const t in e)if(!ug(e,t)){const i=e[t];e.__size+=$i.getValueSize(i)}e.__size>4&&(e.__size=Math.ceil(e.__size/4)*4)}return e.__size}},a($i,"__cacheStruct",new Map),$i);lg([Xl],jd.prototype,"__refection",2),lg([Xl],jd.prototype,"__size",2);let Mo=jd;class hw{constructor(){a(this,"byteOffset");a(this,"byteSize");a(this,"offset",0);a(this,"dataBytes")}get x(){return this.dataBytes.getFloat32(0*Float32Array.BYTES_PER_ELEMENT,!0)}set x(A){this.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,A,!0)}get y(){return this.dataBytes.getFloat32(1*Float32Array.BYTES_PER_ELEMENT,!0)}set y(A){this.dataBytes.setFloat32(1*Float32Array.BYTES_PER_ELEMENT,A,!0)}get z(){return this.dataBytes.getFloat32(2*Float32Array.BYTES_PER_ELEMENT,!0)}set z(A){this.dataBytes.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,A,!0)}get w(){return this.dataBytes.getFloat32(3*Float32Array.BYTES_PER_ELEMENT,!0)}set w(A){this.dataBytes.setFloat32(3*Float32Array.BYTES_PER_ELEMENT,A,!0)}setX(A){this.x=A}setXY(A,e){this.x=A,this.y=e}setXYZ(A,e,t){this.x=A,this.y=e,this.z=t}setXYZW(A,e,t,i){this.x=A,this.y=e,this.z=t,this.w=i}setVector2Array(A){for(let e=0;e<A.length;e++){const t=A[e];this.dataBytes.setFloat32((e*2+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e*2+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0)}}setVector3Array(A){for(let e=0;e<A.length;e++){const t=A[e];this.dataBytes.setFloat32((e*3+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e*3+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e*3+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0)}}setVector4Array(A){for(let e=0;e<A.length;e++){const t=A[e];this.dataBytes.setFloat32((e*4+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e*4+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e*4+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0),this.dataBytes.setFloat32((e*4+3)*Float32Array.BYTES_PER_ELEMENT,t.w,!0)}}setColorArray(A){for(let e=0;e<A.length;e++){const t=A[e];this.dataBytes.setFloat32((e*4+0)*Float32Array.BYTES_PER_ELEMENT,t.r,!0),this.dataBytes.setFloat32((e*4+1)*Float32Array.BYTES_PER_ELEMENT,t.g,!0),this.dataBytes.setFloat32((e*4+2)*Float32Array.BYTES_PER_ELEMENT,t.b,!0),this.dataBytes.setFloat32((e*4+3)*Float32Array.BYTES_PER_ELEMENT,t.a,!0)}}setInt8(A,e=0){this.dataBytes.setInt8(e*Int8Array.BYTES_PER_ELEMENT,A)}getInt8(A=0){return this.dataBytes.getInt8(A*Int8Array.BYTES_PER_ELEMENT)}setInt16(A,e=0){this.dataBytes.setInt16(e*Int16Array.BYTES_PER_ELEMENT,A,!0)}getInt16(A=0){return this.dataBytes.getInt16(A*Int16Array.BYTES_PER_ELEMENT,!0)}setInt32(A,e=0){this.dataBytes.setInt32(e*Int32Array.BYTES_PER_ELEMENT,A,!0)}getInt32(A=0){return this.dataBytes.getInt32(A*Int32Array.BYTES_PER_ELEMENT,!0)}setFloat(A,e=0){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,A,!0)}getFloat(A=0){return this.dataBytes.getFloat32(A*Float32Array.BYTES_PER_ELEMENT,!0)}setUint8(A,e=0){this.dataBytes.setUint8(e*Uint8Array.BYTES_PER_ELEMENT,A)}getUint8(A=0){return this.dataBytes.getUint8(A*Uint8Array.BYTES_PER_ELEMENT)}setUint16(A,e=0){this.dataBytes.setUint16(e*Uint16Array.BYTES_PER_ELEMENT,A,!0)}getUint16(A=0){return this.dataBytes.getUint16(A*Uint16Array.BYTES_PER_ELEMENT,!0)}setUint32(A,e=0){this.dataBytes.setUint32(e*Uint32Array.BYTES_PER_ELEMENT,A,!0)}getUint32(A=0){return this.dataBytes.getUint32(A*Uint32Array.BYTES_PER_ELEMENT,!0)}setArray(A,e){for(let t=0;t<e.length;t++){const i=e[t];this.dataBytes.setFloat32((A+t)*Float32Array.BYTES_PER_ELEMENT,i,!0)}}setFloat32Array(A,e){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Float32Array.BYTES_PER_ELEMENT,e.length).set(e)}setArrayBuffer(A,e){e instanceof Uint8Array?this.setUint8Array(A,e):e instanceof Uint16Array?this.setUint16Array(A,e):e instanceof Uint32Array?this.setUint32Array(A,e):e instanceof Int8Array?this.setInt8Array(A,e):e instanceof Int16Array?this.setInt16Array(A,e):e instanceof Int32Array?this.setInt32Array(A,e):e instanceof Float32Array&&this.setFloat32Array(A,e)}setInt8Array(A,e){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Int8Array.BYTES_PER_ELEMENT).set(e)}setInt16Array(A,e){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Int16Array.BYTES_PER_ELEMENT).set(e)}setInt32Array(A,e){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Int32Array.BYTES_PER_ELEMENT).set(e)}setUint8Array(A,e){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Uint8Array.BYTES_PER_ELEMENT).set(e)}setUint16Array(A,e){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Uint16Array.BYTES_PER_ELEMENT).set(e)}setUint32Array(A,e){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+A*Uint32Array.BYTES_PER_ELEMENT).set(e)}setData(A,e){this.dataBytes.setFloat32(A*Float32Array.BYTES_PER_ELEMENT,e,!0)}setVector2(A,e){this.dataBytes.setFloat32(A*Float32Array.BYTES_PER_ELEMENT,e.x,!0),this.dataBytes.setFloat32((A+1)*Float32Array.BYTES_PER_ELEMENT,e.y,!0)}setVector3(A,e){this.dataBytes.setFloat32(A*Float32Array.BYTES_PER_ELEMENT,e.x,!0),this.dataBytes.setFloat32((A+1)*Float32Array.BYTES_PER_ELEMENT,e.y,!0),this.dataBytes.setFloat32((A+2)*Float32Array.BYTES_PER_ELEMENT,e.z,!0)}setVector4(A,e){this.dataBytes.setFloat32(A*Float32Array.BYTES_PER_ELEMENT,e.x,!0),this.dataBytes.setFloat32((A+1)*Float32Array.BYTES_PER_ELEMENT,e.y,!0),this.dataBytes.setFloat32((A+2)*Float32Array.BYTES_PER_ELEMENT,e.z,!0),this.dataBytes.setFloat32((A+3)*Float32Array.BYTES_PER_ELEMENT,e.w,!0)}setColor(A,e){this.dataBytes.setFloat32(A*Float32Array.BYTES_PER_ELEMENT,e.r,!0),this.dataBytes.setFloat32((A+1)*Float32Array.BYTES_PER_ELEMENT,e.g,!0),this.dataBytes.setFloat32((A+2)*Float32Array.BYTES_PER_ELEMENT,e.b,!0),this.dataBytes.setFloat32((A+3)*Float32Array.BYTES_PER_ELEMENT,e.a,!0)}getData(A){return this.dataBytes.getFloat32(A*Float32Array.BYTES_PER_ELEMENT,!0)}writeFloat(A){this.dataBytes.setFloat32(this.offset,A,!0),this.offset+=Float32Array.BYTES_PER_ELEMENT}writeInt8(A){this.dataBytes.setInt8(this.offset,A),this.offset+=Int8Array.BYTES_PER_ELEMENT}writeInt16(A){this.dataBytes.setInt16(this.offset,A,!0),this.offset+=Int16Array.BYTES_PER_ELEMENT}writeInt32(A){this.dataBytes.setInt32(this.offset,A,!0),this.offset+=Int32Array.BYTES_PER_ELEMENT}writeUint8(A){this.dataBytes.setUint8(this.offset,A),this.offset+=Uint8Array.BYTES_PER_ELEMENT}writeUint16(A){this.dataBytes.setUint16(this.offset,A,!0),this.offset+=Uint16Array.BYTES_PER_ELEMENT}writeUint32(A){this.dataBytes.setUint32(this.offset,A,!0),this.offset+=Uint32Array.BYTES_PER_ELEMENT}writeVector2(A){this.writeFloat(A.x),this.writeFloat(A.y)}writeVector3(A){this.writeFloat(A.x),this.writeFloat(A.y),this.writeFloat(A.z)}writeVector4(A){this.writeFloat(A.x),this.writeFloat(A.y),this.writeFloat(A.z),this.writeFloat(A.w)}writeRGBColor(A){this.writeFloat(A.r),this.writeFloat(A.g),this.writeFloat(A.b)}writeArray(A){for(let e=0;e<A.length;e++){const t=A[e];this.writeFloat(t)}}writeFloat32Array(A){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}writeInt8Array(A){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}writeInt16Array(A){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}writeInt32Array(A){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}writeUint8Array(A){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}writeUint16Array(A){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}writeUint32Array(A){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(A),this.offset+=A.byteLength}reset(){this.offset=0}destroy(){this.byteOffset=null,this.byteSize=null,this.offset=null,this.dataBytes=null}}class su{constructor(){a(this,"shareDataBuffer");a(this,"_byteOffset",0)}allocation(A){this.shareDataBuffer&&this.shareDataBuffer.byteLength<A?this._byteOffset=0:this.shareDataBuffer=new ArrayBuffer(A)}allocation_node(A){if(this._byteOffset+A>this.shareDataBuffer.byteLength)return console.error("memory not enough!",this._byteOffset,A,this.shareDataBuffer.byteLength),null;let e=new hw;return e.byteOffset=this._byteOffset,e.byteSize=A,e.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,e.byteSize),this._byteOffset+=e.byteSize,e}allocation_memory(A){return this._byteOffset+A.byteSize>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,A.byteSize,this.shareDataBuffer.byteLength),null):(A.byteOffset=this._byteOffset,A.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,A.byteSize),this._byteOffset+=A.byteSize,A)}reset(){this._byteOffset=0}destroy(A){this.shareDataBuffer=null,this._byteOffset=0}}class Kn{constructor(){a(this,"bufferType");a(this,"buffer");a(this,"memory");a(this,"memoryNodes");a(this,"seek");a(this,"outFloat32Array");a(this,"byteSize");a(this,"usage");a(this,"visibility",GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE);a(this,"mapAsyncBuffersOutstanding",0);a(this,"mapAsyncReady");a(this,"_readBuffer");a(this,"_dataView");a(this,"_readFlag",!1);this.mapAsyncReady=[]}debug(){}reset(A=!1,e=0,t){this.seek=0,this.memory.reset(),A&&this.createBuffer(this.usage,e,t)}setBoolean(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*4),this.memoryNodes.set(A,t)),t.setX(e?1:0)}setFloat(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*4),this.memoryNodes.set(A,t)),t.setX(e)}setInt8(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*1),this.memoryNodes.set(A,t)),t.setInt8(e)}setInt16(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*2),this.memoryNodes.set(A,t)),t.setInt16(e)}setInt32(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*4),this.memoryNodes.set(A,t)),t.setInt32(e)}setUint8(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*1),this.memoryNodes.set(A,t)),t.setUint8(e)}setUint16(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*2),this.memoryNodes.set(A,t)),t.setUint16(e)}setUint32(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(1*4),this.memoryNodes.set(A,t)),t.setUint32(e)}setVector2(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(2*4),this.memoryNodes.set(A,t)),t.setXY(e.x,e.y)}setVector3(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(3*4),this.memoryNodes.set(A,t)),t.setXYZ(e.x,e.y,e.z)}setVector4(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(4*4),this.memoryNodes.set(A,t)),t.setXYZW(e.x,e.y,e.z,e.w)}setVector4Array(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(4*4*e.length),this.memoryNodes.set(A,t)),t.setVector4Array(e)}setColor(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(4*4),this.memoryNodes.set(A,t)),t.setXYZW(e.r,e.g,e.b,e.a)}setColorArray(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(4*4*e.length),this.memoryNodes.set(A,t)),t.setColorArray(e)}setMatrix(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(16*4),this.memoryNodes.set(A,t)),t.setFloat32Array(0,e.rawData)}setMatrixArray(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(16*4*e.length),this.memoryNodes.set(A,t));for(let i=0;i<e.length;i++){const n=e[i];t.setFloat32Array(i*16,n.rawData)}}setArray(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(e.length*4),this.memoryNodes.set(A,t)),t.setArray(0,e)}setFloat32Array(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(e.length*4),this.memoryNodes.set(A,t)),t.setFloat32Array(0,e)}setInt32Array(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(e.length*4),this.memoryNodes.set(A,t)),t.setInt32Array(0,e)}setUint32Array(A,e){let t=this.memoryNodes.get(A);t||(t=this.memory.allocation_node(e.length*4),this.memoryNodes.set(A,t)),t.setUint32Array(0,e)}setStruct(A,e,t,i){let n=Mo.Ref(A);Mo.GetSize(A);let s=e,o=this.memoryNodes.get(s);o.reset();let u=t;i&&(u=u[i]);for(let l=0;l<n.length;l++){const c=n[l];let h=u[c.name];this.writeValue(o,c,h)}}writeValue(A,e,t){switch(e.type){case"Boolean":A.writeFloat(t);break;case"Number":A.writeFloat(t);break;case"Float32Array":A.writeFloat32Array(t);break;case"Vector2":A.writeVector2(t);break;case"Vector3":A.writeVector3(t);break;case"Vector4":A.writeVector4(t);break;case"Color":A.writeRGBColor(t);break;case"Array":A.writeArray(t);break}}setStructArray(A,e,t){let i=e.length;for(let n=0;n<i;n++){const s=e[n];this.setStruct(A,n,s,t)}}clean(){this._dataView.fill(0,0,this._dataView.length)}apply(){iA.device.queue.writeBuffer(this.buffer,0,this.memory.shareDataBuffer)}mapAsyncWrite(A,e){let t=iA.device;if(A.length>0){let i=null;for(;this.mapAsyncReady.length&&(i=this.mapAsyncReady.shift(),i.usedSize!=A.byteLength);)i.destroy(),this.mapAsyncBuffersOutstanding--,i=null;i||(i=t.createBuffer({size:A.byteLength,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE,mappedAtCreation:!0}),i.usedSize=A.byteLength,this.mapAsyncBuffersOutstanding++,this.mapAsyncBuffersOutstanding>10&&console.warn(` Warning: mapAsync requests from ${this.mapAsyncBuffersOutstanding} frames ago have not resolved yet.  MB of staging buffers allocated.`));let n=new Float32Array(A.buffer,A.byteOffset,e);new Float32Array(i.getMappedRange(0,e*4)).set(n),i.unmap();const s=t.createCommandEncoder();s.copyBufferToBuffer(i,0,this.buffer,0,e*4),t.queue.submit([s.finish()]),i.mapAsync(GPUMapMode.WRITE).then(()=>this.mapAsyncReady.push(i))}}destroy(A){this.memoryNodes&&this.memoryNodes.forEach(e=>{e.destroy()}),this.bufferType=null,this.seek=null,this.byteSize=null,this.usage=null,this.visibility=null,this.outFloat32Array=null,this.buffer&&this.buffer.destroy(),this.buffer=null,this.memory&&this.memory.destroy(),this.memory=null,this._readBuffer&&this._readBuffer.destroy()}createBuffer(A,e,t,i){let n=iA.device;this.buffer&&this.destroy(),this.byteSize=e*4,this.usage=A,this.buffer=n.createBuffer({label:i,size:this.byteSize,usage:A,mappedAtCreation:!1}),this.memory=new su,this.memoryNodes=new Map,this._dataView=new Float32Array(this.memory.shareDataBuffer),this.memory.allocation(this.byteSize),t&&(this.memory.allocation_node(t.length*4).setArrayBuffer(0,t),this.apply())}resizeBuffer(A,e){this.createBuffer(this.usage,A,e)}createNewBuffer(A,e){let t=iA.device,i=e*4,n=A;return this.buffer&&this.destroy(),t.createBuffer({size:i,usage:n,mappedAtCreation:!1})}createBufferByStruct(A,e,t){let i=Mo.GetSize(e),n=i*t,s=iA.device;this.buffer=s.createBuffer({label:"StructStorageGPUBuffer",size:n,usage:A,mappedAtCreation:!1}),this.memory=new su,this.memoryNodes=new Map,this._dataView=new Float32Array(this.memory.shareDataBuffer),this.memory.allocation(n);for(let o=0;o<t;o++){let u=o,l=this.memoryNodes.get(u);l||(l=this.memory.allocation_node(i),this.memoryNodes.set(u,l))}}readBuffer(){return this.outFloat32Array||(this.outFloat32Array=new Float32Array(this.memory.shareDataBuffer.byteLength/4)),this._readBuffer||(this._readBuffer=iA.device.createBuffer({size:this.memory.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1})),this._readFlag||this.read(),this.outFloat32Array}async read(){this._readFlag=!0;let A=iA.device.createCommandEncoder();A.copyBufferToBuffer(this.buffer,0,this._readBuffer,0,this.memory.shareDataBuffer.byteLength),iA.device.queue.submit([A.finish()]),await this._readBuffer.mapAsync(GPUMapMode.READ);const e=this._readBuffer.getMappedRange();this.outFloat32Array.set(new Float32Array(e),0),this._readBuffer.unmap(),this._readFlag=!1}}var xi=(r=>(r[r.IndicesGPUBuffer=0]="IndicesGPUBuffer",r[r.VertexGPUBuffer=1]="VertexGPUBuffer",r[r.UniformGPUBuffer=2]="UniformGPUBuffer",r[r.StorageGPUBuffer=3]="StorageGPUBuffer",r[r.ComputeGPUBuffer=4]="ComputeGPUBuffer",r[r.MaterialDataUniformGPUBuffer=5]="MaterialDataUniformGPUBuffer",r[r.StructStorageGPUBuffer=6]="StructStorageGPUBuffer",r))(xi||{});class Bt extends Kn{constructor(A,e=0,t){super(),this.bufferType=xi.StorageGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|e,A,t,"StorageGPUBuffer")}}class i1 extends Kn{constructor(A,e){super(),this.bufferType=xi.UniformGPUBuffer,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,A,e,"UniformGPUBuffer")}genUniformNodes(){}}class nr{static getMorphTargetShaderBinding(A,e){return`
            fn blendMorphTargetPosition(vertexID:i32, posIn:vec3<f32>) -> vec3<f32>{
                let offset:i32 = vertexID * 3;
                var pos = posIn * morphTargetConfig.morphBaseInfluence;
                pos += vec3<f32>(morphTargetOpPositions[offset], morphTargetOpPositions[offset + 1], morphTargetOpPositions[offset + 2]);
                return pos;
            }

            #if USE_MORPHNORMALS
                fn blendMorphTargetNormal(vertexID:i32, normalIn:vec3<f32>) -> vec3<f32>{
                    let offset:i32 = vertexID * 3;
                    var normal = normalIn * morphTargetConfig.morphBaseInfluence;
                    normal += vec3<f32>(morphTargetOpNormals[offset], morphTargetOpNormals[offset + 1], morphTargetOpNormals[offset + 2]);
                    return normal;
                }
            #endif

            struct MorphTargetConfigData {
                morphBaseInfluence:f32,
                morphTargetCount:f32,
                totalVertexCount:f32,
                computeWorkGroupXY:f32,
            };
            
            @group(${A}) @binding(${e})
            var<uniform> morphTargetConfig: MorphTargetConfigData;
            
            @group(${A}) @binding(${e+1})
            var<storage,read> morphTargetOpPositions: array<f32>;

            #if USE_MORPHNORMALS
                @group(${A}) @binding(${e+2})
                var<storage,read> morphTargetOpNormals: array<f32>;
            #endif
`}static getMorphTargetCalcVertex(){return`
            vertexPosition = blendMorphTargetPosition(i32(vertex.vIndex), vertexPosition);

            #if USE_MORPHNORMALS
                vertexNormal = blendMorphTargetNormal(i32(vertex.vIndex), vertexNormal);
            #endif
        `}}a(nr,"CsMain",`
        struct MorphTargetConfigData {
            morphBaseInfluence:f32,
            morphTargetCount:f32,
            totalVertexCount:f32,
            computeWorkGroupXY:f32,
        };

        @group(0) @binding(0) var<uniform> morphTargetConfig: MorphTargetConfigData;
        @group(0) @binding(1) var<storage, read> morphTargetInfluence : array<f32>;
        @group(0) @binding(2) var<storage, read> morphTargetPositions : array<f32>;
        @group(0) @binding(3) var<storage, read_write> morphTargetOpPositions : array<f32>;
        
        #if USE_MORPHNORMALS
            @group(0) @binding(4) var<storage, read> morphTargetNormals : array<f32>;
            @group(0) @binding(5) var<storage, read_write> morphTargetOpNormals : array<f32>;
        #endif
        
        @compute @workgroup_size( 8 , 8 , 1 )
        fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
        {
            let vertexIndex:i32 = i32(globalInvocation_id.y) * i32(morphTargetConfig.computeWorkGroupXY) + i32(globalInvocation_id.x);
        
            let morphTargetCount:i32 = i32(morphTargetConfig.morphTargetCount);
            let totalVertexCount:i32 = i32(morphTargetConfig.totalVertexCount);
            var vertexPosition:vec3<f32> = vec3<f32>(0.0);
            var vertexNormal:vec3<f32> = vec3<f32>(0.0);
            if(vertexIndex < totalVertexCount)
            {
                for(var i:i32 = 0; i < morphTargetCount; i ++){
                    let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                    let morphPosition = vec3<f32>(morphTargetPositions[offset], morphTargetPositions[offset + 1], morphTargetPositions[offset + 2]);
                    vertexPosition += morphTargetInfluence[i] * morphPosition;
                }

                var writeOffset = vertexIndex * 3;
                //op position
                morphTargetOpPositions[writeOffset] = vertexPosition.x;
                morphTargetOpPositions[writeOffset + 1] = vertexPosition.y;
                morphTargetOpPositions[writeOffset + 2] = vertexPosition.z;

                #if USE_MORPHNORMALS
                    for(var i:i32 = 0; i < morphTargetCount; i ++){
                        let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                        let morphNormal = vec3<f32>(morphTargetNormals[offset], morphTargetNormals[offset + 1], morphTargetNormals[offset + 2]);
                        vertexNormal += morphTargetInfluence[i] * morphNormal;
                    }

                    //op normal
                    morphTargetOpNormals[writeOffset] = vertexNormal.x;
                    morphTargetOpNormals[writeOffset + 1] = vertexNormal.y;
                    morphTargetOpNormals[writeOffset + 2] = vertexNormal.z;
                #endif
            }
        }
`);let ii=function(r=16,A=16){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),t=[],i;if(A=A||e.length,r)for(i=0;i<r;i++)t[i]=e[0|Math.random()*A];else{var n;for(t[8]=t[13]=t[18]=t[23]="-",t[14]="4",i=0;i<36;i++)t[i]||(n=0|Math.random()*16,t[i]=e[i==19?n&3|8:n])}return t.join("")},cg=1e6,W3=function(){return cg++,cg},dw=(...r)=>function(...A){r.forEach(e=>e.apply(this,A))};const ne=class ne{constructor(A=0,e=0){a(this,"x",0);a(this,"y",0);this.x=A,this.y=e}static getAngle(A,e){return Math.atan2(e.y-A.y,e.x-A.x)}static slerp(A,e,t){let i=new ne,n=A.dot(e);if(n<0&&(e.x=-e.x,e.y=-e.y,n=-n),n>.9995)return i.x=A.x+t*(e.x-A.x),i.y=A.y+t*(e.y-A.y),i;let s=Math.acos(n),o=Math.sin(s),u=Math.sin((1-t)*s)/o,l=Math.sin(t*s)/o;return i.x=u*A.x+l*e.x,i.y=u*A.y+l*e.y,i}static lerp(A,e,t){return ne.HELP_0.copyFrom(A),ne.HELP_1.copyFrom(e),ne.HELP_0.scale(t),ne.HELP_1.scale(1-t),new ne(ne.HELP_0.x+ne.HELP_1.x,ne.HELP_0.y+ne.HELP_1.y)}set(A=0,e=0){return this.x=A,this.y=e,this}distance(A){return Math.sqrt(Math.pow(this.x-A.x,2)+Math.pow(this.y-A.y,2))}add(A,e){return e=e||new ne,e.x=this.x+A.x,e.y=this.y+A.y,e}sub(A,e){return e=e||new ne,e.x=this.x-A.x,e.y=this.y-A.y,e}scale(A){return this.x=this.x*A,this.y=this.y*A,this}multiply(A,e){return e=e||new ne,e.x=this.x*A,e.y=this.y*A,e}multiplyScaler(A){return this.x*=A,this.y*=A,this}divide(A,e){return e=e||new ne,e.x=this.x/A,e.y=this.y/A,e}neg(A){return A||(A=new ne),A.x=-A.x,A.y=-A.y,A}abs(){return Math.sqrt(this.x*this.x+this.y*this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}getAngle(A){return Math.atan2(A.y-this.y,A.x-this.x)}unt(A){A=A||new ne;let e=this.abs();return A.x=this.x/e,A.y=this.y/e,A}angleTo(A){let e=A.x-this.x,t=A.y-this.y;return Math.atan2(t,e)}equals(A){return Math.abs(this.x-A.x)<1e-6&&Math.abs(this.y-A.y)<1e-6}pal(A){let e=this.unt(),t=A.unt();return e.equals(t)?1:e.equals(t.neg())?-1:0}clone(){return new ne(this.x,this.y)}copyFrom(A){return this.x=A.x,this.y=A.y,this}dot(A){return this.x*A.x+this.y*A.y}normalize(){let A=this.abs();return this.x=this.x/A,this.y=this.y/A,this}addInPlace(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}};a(ne,"HELP_0",new ne),a(ne,"HELP_1",new ne),a(ne,"HELP_2",new ne),a(ne,"ZERO",new ne(0,0)),a(ne,"SAFE_MAX",new ne(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),a(ne,"SAFE_MIN",new ne(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER));let Ge=ne;const UA=class UA{constructor(A=0,e=0,t=0,i=0){a(this,"x",0);a(this,"y",0);a(this,"z",0);a(this,"w",1);this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}get height(){return this.w}static crossVectors(A,e,t){t=t||new UA;var i=A.x,n=A.y,s=A.z,o=e.x,u=e.y,l=e.z;return t.x=n*l-s*u,t.y=s*o-i*l,t.z=i*u-n*o,t}static distance(A,e){let t=A.x-e.x,i=A.y-e.y,n=A.z-e.z,s=A.w-e.w;return Math.sqrt(t*t+i*i+n*n+s*s)}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}copyFrom(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w,this}clone(){return new UA(this.x,this.y,this.z,this.w)}};a(UA,"X_AXIS",new UA(1,0,0)),a(UA,"Y_AXIS",new UA(0,1,0)),a(UA,"Z_AXIS",new UA(0,0,1)),a(UA,"HELP_0",new UA),a(UA,"HELP_1",new UA),a(UA,"HELP_2",new UA),a(UA,"EPSILON",1e-5),a(UA,"HELP_3",new UA),a(UA,"HELP_4",new UA),a(UA,"HELP_5",new UA),a(UA,"HELP_6",new UA),a(UA,"ZERO",new UA),a(UA,"ONE",new UA(1,1,1,1)),a(UA,"LEFT",new UA(-1,0,0)),a(UA,"RIGHT",new UA(1,0,0)),a(UA,"UP",new UA(0,-1,0)),a(UA,"DOWN",new UA(0,1,0)),a(UA,"BACK",new UA(0,0,-1)),a(UA,"FORWARD",new UA(0,0,1));let XA=UA;var Pt=(r=>(r[r.Number=0]="Number",r[r.Vector2=1]="Vector2",r[r.Vector3=2]="Vector3",r[r.Vector4=3]="Vector4",r[r.Color=4]="Color",r[r.Float32Array=5]="Float32Array",r))(Pt||{});class ts{constructor(A){a(this,"size");a(this,"memoryInfo");a(this,"bindOnChange");a(this,"_data");a(this,"_type",Pt.Number);a(this,"_x",0);a(this,"_y",0);a(this,"_z",0);a(this,"_w",0);this.data=A}get data(){return this._data}set data(A){this._data=A,this._type=Pt.Number,A instanceof Ge?(this.size=2,this._x=A.x,this._y=A.y,this._type=Pt.Vector2):A instanceof I?(this.size=3,this._x=A.x,this._y=A.y,this._z=A.z,this._type=Pt.Vector3):A instanceof XA?(this.size=4,this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._type=Pt.Vector4):A instanceof fA?(this.size=4,this._x=A.r,this._y=A.g,this._z=A.b,this._w=A.a,this._type=Pt.Color):A instanceof Float32Array?(this.size=A.length,this._type=Pt.Float32Array):(this.size=1,this._x=A,this._data=A,this._type=Pt.Number)}getColor(A){return A?A.copyFrom(this._data):A=this._data,A}get color(){return new fA(this._data.r,this._data.g,this._data.b,this._data.a)}set color(A){(this._x!=A.r||this._y!=A.g||this._z!=A.b||this._w!=A.a)&&(this._data.r=A.r,this._data.g=A.g,this._data.b=A.b,this._data.a=A.a,this._x=A.r,this._y=A.g,this._z=A.b,this._w=A.a,this.onChange())}get value(){return this._x}set value(A){this._x!=A&&(this._data=A,this._x=A,this.onChange())}get vector2(){return this._data}set vector2(A){(this._x!=A.x||this._y!=A.y)&&(this._data.x=A.x,this._data.y=A.y,this._x=A.x,this._y=A.y,this.onChange())}get vector3(){return this._data}set vector3(A){(this._x!=A.x||this._y!=A.y||this._z!=A.z)&&(this._data.x=A.x,this._data.y=A.y,this._data.z=A.z,this._x=A.x,this._y=A.y,this._z=A.z,this.onChange())}get vector4(){return this._data}set vector4(A){(this._x!=A.x||this._y!=A.y||this._z!=A.z||this._w!=A.w)&&(this._data.x=A.x,this._data.y=A.y,this._data.z=A.z,this._data.w=A.w,this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this.onChange())}onChange(){this.bindOnChange&&this.bindOnChange()}float32Array(A){this._data.set(A),this.onChange()}update(){switch(this._type){case Pt.Number:this.memoryInfo.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this._data,!0);break;case Pt.Vector2:this.memoryInfo.setVector2(0,this._data);break;case Pt.Vector3:this.memoryInfo.setVector3(0,this._data);break;case Pt.Vector4:this.memoryInfo.setVector4(0,this._data);break;case Pt.Color:this.memoryInfo.setColor(0,this._data);break;case Pt.Float32Array:this.memoryInfo.setFloat32Array(0,this._data);break}}}class Y3{constructor(){a(this,"instanceID");a(this,"shaderVariant");a(this,"vsEntryPoint","main");a(this,"fsEntryPoint","main");a(this,"bindGroups");a(this,"shaderReflection");a(this,"defineValue");a(this,"constValues");a(this,"uniforms");a(this,"materialDataUniformBuffer");a(this,"_bufferDic");a(this,"_shaderChange",!0);a(this,"_valueChange",!1);this.instanceID=ii(),this.defineValue={},this.constValues={},this.uniforms={},this._bufferDic=new Map}noticeShaderChange(){this._shaderChange=!0}noticeValueChange(){this._valueChange=!0}setStorageBuffer(A,e){this._bufferDic.has(A)?this._bufferDic.set(A,e):(this._bufferDic.set(A,e),this.noticeBufferChange(A))}setStructStorageBuffer(A,e){this._bufferDic.has(A)?(this._bufferDic.set(A,e),this.noticeBufferChange(A)):this._bufferDic.set(A,e)}setUniformBuffer(A,e){this._bufferDic.has(A)?(this._bufferDic.set(A,e),this.noticeBufferChange(A)):this._bufferDic.set(A,e)}setDefine(A,e){(this.defineValue[A]==null||this.defineValue[A]!=e)&&(this.defineValue[A]=e,this.noticeValueChange(),this.noticeShaderChange()),this.defineValue[A]=e}hasDefine(A){return this.defineValue[A]!=null}deleteDefine(A){delete this.defineValue[A],this.noticeShaderChange()}setUniformFloat(A,e){this.uniforms[A]?this.uniforms[A].value=e:(this.uniforms[A]=new ts(e),this.noticeValueChange())}setUniformVector2(A,e){this.uniforms[A]?this.uniforms[A].vector2=e:(this.uniforms[A]=new ts(e),this.noticeValueChange())}setUniformVector3(A,e){this.uniforms[A]?this.uniforms[A].vector3=e:this.uniforms[A]=new ts(e)}setUniformVector4(A,e){this.uniforms[A]?this.uniforms[A].vector4=e:this.uniforms[A]=new ts(e)}setUniformColor(A,e){this.uniforms[A]?this.uniforms[A].color=e:this.uniforms[A]=new ts(e)}setUniformArray(A,e){this.uniforms[A]?this.uniforms[A].float32Array(e):this.uniforms[A]=new ts(e)}setUniform(A,e){this.uniforms[A]?this.uniforms[A].data=e:this.uniforms[A]=new ts(e)}getUniform(A){return this.uniforms[A].data}getUniformFloat(A){return this.uniforms[A].data}getUniformVector2(A){return this.uniforms[A].data}getUniformVector3(A){return this.uniforms[A].data}getUniformVector4(A){return this.uniforms[A].data}getUniformColor(A){return this.uniforms[A].color}getBuffer(A){return this._bufferDic[A].data}noticeBufferChange(A){}applyUniform(){this.materialDataUniformBuffer&&this._valueChange&&this.materialDataUniformBuffer.apply()}destroy(A){}}var xs=(r=>(r[r.u32=1]="u32",r[r.f32=1]="f32",r[r["vec2<f32>"]=2]="vec2<f32>",r[r["vec3<f32>"]=3]="vec3<f32>",r[r["vec4<f32>"]=4]="vec4<f32>",r[r.float32=1]="float32",r[r.float32x2=2]="float32x2",r[r.float32x3=3]="float32x3",r[r.float32x4=4]="float32x4",r))(xs||{});let fw=[null,qu.float32,qu.float32x2,qu.float32x3,qu.float32x4],pw=`
        var<private> colorSet : array<vec3<f32>, 9> = array<vec3<f32>, 9>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(1.0, 0.5, 0.0),
            vec3<f32>(0.5, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.5),
            vec3<f32>(0.0, 0.5, 1.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(0.5, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.5)
        );

        #if DEBUG_CLUSTER
        fn debugCluster(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              var tileID : u32 = getClusterId3().z;
              let clusterDebug = vec4<f32>(colorSet[tileID % 9u], 1.0);
              ORI_FragmentOutput.color = clusterDebug ;
            #endif
          }
      
          fn debugClusterBox(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              let clusterId3 : vec3<u32> = getClusterId3();
              let px = f32(clusterId3.x) / clustersUniform.clusterTileX ;
              let py = f32(clusterId3.y) / clustersUniform.clusterTileY ;
              let pz = f32(clusterId3.z) / clustersUniform.clusterTileZ ;
              ORI_FragmentOutput.color = vec4<f32>(px,py,pz, 1.0);

              var screenUV = ORI_VertexVarying.fragCoord.xy / vec2<f32>( globalUniform.windowWidth , globalUniform.windowHeight );
              ORI_FragmentOutput.color = vec4<f32>(screenUV.x,screenUV.y,0.0, 1.0);

              // let clusterId : u32 = getClusterIndex();
              // let cluster = clusterBuffer[clusterId];
        
              // let midPoint : vec3<f32> = (cluster.maxPoint.xyz - cluster.minPoint.xyz) * vec3<f32>(0.5);
              // let center : vec3<f32> = cluster.minPoint.xyz + midPoint;
              // let radius : f32 = length(midPoint) ;
        
              // let fragToBoundsCenter : vec3<f32> = ORI_VertexVarying.viewPosition.xyz - center;
              // let distToBoundsCenter : f32 = length(fragToBoundsCenter);
              // let normDist : f32 = distToBoundsCenter / radius;
              // ORI_FragmentOutput.color = vec4<f32>(normDist,normDist,normDist, 1.0);
            #endif
          }
      
          fn debugClusterLightCount(fragCoord:vec4<f32>){
            #if USE_LIGHT
            //LightIndex
              let cluster : LightIndex = getCluster();
              let lightCount : u32 = u32(cluster.count);
              let lightFactor : f32 = f32(lightCount) / f32(clustersUniform.maxNumLightsPerCluster);
              ORI_FragmentOutput.color =  mix(vec4<f32>(0.0, 0.0,0.0, 1.0), vec4<f32>(1.0, 1.0, 1.0, 1.0), vec4<f32>(lightFactor, lightFactor, lightFactor, lightFactor));
            #endif
          }
          #endif
    `;class Jl{}a(Jl,"sky_vs_frag_wgsl",`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
      @location(auto) fragUV: vec2<f32>,
      @location(auto) vWorldPos: vec4<f32>,
      @location(auto) vWorldNormal: vec3<f32>,
      @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    @vertex
    fn main( 
      @builtin(instance_index) index : u32,
      @location(auto) position: vec3<f32>,
      @location(auto) normal: vec3<f32>,
      @location(auto) uv: vec2<f32>
    ) -> VertexOutput {
      ORI_VertexOut.fragUV = uv;
      let modelMat = models.matrix[u32(index)];
      let vm = globalUniform.viewMat * modelMat;
      let normalMatrix = mat3x3<f32>(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	    ORI_VertexOut.vWorldNormal = normalize( normalMatrix * normal );
      ORI_VertexOut.vWorldPos = modelMat * vec4<f32>(position.xyz,1.0) ;

      var fixProjMat = globalUniform.projMat ;
      fixProjMat[2].z = 1.0 ;//99999.0 / (99999.0 - 1.0) ;
      fixProjMat[3].z = -1.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;

      var fixViewMat = globalUniform.viewMat ;
      fixViewMat[3].x = 0.0 ;
      fixViewMat[3].y = 0.0 ;
      fixViewMat[3].z = 0.0 ;

      var clipPos = fixProjMat * fixViewMat * ORI_VertexOut.vWorldPos;
      ORI_VertexOut.member = clipPos;
      return ORI_VertexOut;
    }
  `),a(Jl,"sky_fs_frag_wgsl",`
    #include "GlobalUniform"

    struct uniformData {
        exposure: f32,
        roughness: f32
    };

    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>,
        #if USE_WORLDPOS
          @location(auto) o_Position: vec4<f32>,
        #endif
        #if USEGBUFFER
          @location(auto) o_Normal: vec4<f32>,
          @location(auto) o_Material: vec4<f32>
        #endif
    };

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_cube<f32>;

    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
      var linRGB1 = max(linRGB, vec3<f32>(0.0));
      linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
      return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>, @location(auto) vWorldPos: vec4<f32>, @location(auto) vWorldNormal: vec3<f32>) -> FragmentOutput {
        let maxLevel: u32 = textureNumLevels(baseMap);
        var textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
        #if IS_HDR_SKY
        textureColor = LinearToGammaSpace(textureColor);
        #endif
        let o_Target: vec4<f32> =vec4<f32>(textureColor, 1.0) * globalUniform.skyExposure ;
        var normal_rgba8unorm = (vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));

        return FragmentOutput(
          o_Target,
          #if USE_WORLDPOS
              vWorldPos,
          #endif
          #if USEGBUFFER
              vec4<f32>(normal_rgba8unorm,0.0),
              vec4<f32>(0.0,1.0,0.0,0.0)
          #endif
        );
    }
    `);let gw=`
#include "BRDF_frag"
#include "ClusterLight"
#include "ShadowMapping_frag"

#if USE_IES_PROFILE
  #include "IESProfiles_frag"
#endif



const LUMEN = 10.764;



fn calcAttenuation( d : f32 ,  falloffStart : f32 ,  falloffEnd : f32)-> f32
{
    // Linear falloff.
    return saturate((falloffEnd-d) / (falloffEnd - falloffStart));
}

fn directLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , metallic:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    #if USE_LIGHT
      var L = -normalize(light.direction.xyz) ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var att = light.intensity / LUMEN ;
      if(light.castShadow>=0){
          #if USE_SHADOWMAPING
            for (var j: i32 = 0; j < 8; j += 1) {
                if(j == light.castShadow){
                  att *= shadowStrut.directShadowVisibility[j] ; 
                }
            }
          #endif
      }

      #if USE_LAMBERT
        color = vec3<f32>(1.0,1.0,1.0) ;
      #endif 
      
      #if USE_BRDF
        color = simpleBRDF(albedo,N,V,L,att,lightColor,roughness,metallic) ;
      #endif 
    #endif 
    return color;
}

fn directDulLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , metallic:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
  var color = vec3<f32>(0.0) ;
  #if USE_LIGHT
    var L = -normalize(light.direction.xyz) ;
    let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
    var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
    var att = light.intensity / LUMEN ;
    if(light.castShadow>=0){
        #if USE_SHADOWMAPING
          for (var j: i32 = 0; j < 8; j += 1) {
              if(j == light.castShadow){
                att *= shadowStrut.directShadowVisibility[j] ; 
              }
          }
        #endif
    }
    #if USE_LAMBERT
      color = vec3<f32>(1.0,1.0,1.0) ;
    #endif 
    
    #if USE_BRDF
      color = 0.85 * simpleBRDF(albedo,N,V,L,att,lightColor,0.85 * roughness,metallic) ;
      color += 0.15 * simpleBRDF(albedo,N,V,L,att,lightColor,0.15 * roughness,metallic) ;
    #endif 
  #endif 
  return color;
}

fn directHairLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , metallic:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
  var color = vec3<f32>(0.0) ;
  #if USE_LIGHT
    var L = -normalize(light.direction.xyz) ;
    let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
    var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
    var att = light.intensity / LUMEN ;
    if(light.castShadow>=0){
        #if USE_SHADOWMAPING
          for (var j: i32 = 0; j < 8; j += 1) {
              if(j == light.castShadow){
                att *= shadowStrut.directShadowVisibility[j] ; 
              }
          }
        #endif
    }
    #if USE_LAMBERT
      color = vec3<f32>(1.0,1.0,1.0) ;
    #endif 
    
    #if USE_BRDF
      color = 0.5 * simpleBRDF(albedo,N,V,L,att,lightColor,0.85 ,metallic) ;
      color += 0.5 * simpleBRDF(albedo,N,V,L,att,lightColor,0.15 ,metallic) ;
    #endif 
  #endif 
  return color;
}


fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , metallic:f32 ,light:LightData ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    let lightPos = light.position.xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir);
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    if( abs(dist) < light.range ){
        var L = dir ;
        var atten = 1.0 ;
        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.001) * light.intensity / LUMEN;
        if( light.castShadow >= 0 )
        {
            #if USE_SHADOWMAPING
              // atten *= shadowStrut.pointShadows[light.castShadow] ; 
              for (var j: i32 = 0; j < 8; j += 1) {
                  if(j == light.castShadow){
                    atten *= shadowStrut.pointShadows[j] ; 
                  }
              }
            #endif
        }

        #if USE_IES_PROFILE
          atten *= getLightIESProfileAtt(WP,light);
        #endif

        var lightColor = light.lightColor.rgb  ;
        lightColor = getHDRColor(lightColor , light.linear )  ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,1.0,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,roughness,metallic))  ;
        #endif 
    } 
    return color ;
}

fn getDistanceAtten(  light:LightData , dist : f32 ) -> f32 {
  return 1.0 - smoothstep(0.0,light.range,dist) ;
}

fn spotLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , metallic:f32 ,light:LightData ) -> vec3<f32> {
    let lightPos = light.position.xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir) ;
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    var color = vec3<f32>(0.0) ;
    if( abs(dist) < light.range * 2.0 ){
        var L = dir ;
        let theta = dot(-L, normalize(light.direction));
        let angle = acos(theta) ;
        var atten = 1.0 ;
        var lightColor = light.lightColor.rgb  ;

        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.1) * light.intensity / LUMEN;
        if(angle < light.outerCutOff){
          if(angle > light.innerCutOff){
            atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
          }
        }else{
            atten = 0.0 ;
        }

        if( light.castShadow >= 0 )
        {
            #if USE_SHADOWMAPING
            for (var j: i32 = 0; j < 8; j += 1) {
                if(j == light.castShadow){
                  atten *= shadowStrut.pointShadows[j] ; 
                }
            }
          #endif
        }

        #if USE_IES_PROFILE
            atten *= getLightIESProfileAtt(WP,light);
        #endif

        lightColor = getHDRColor(lightColor , light.linear ) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,roughness,metallic)) ;
        #endif 
    }
    return  color ;
}
`,mw=`


fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
  let x:f32 = position.x;
  let y:f32 = position.y;
  let z:f32 = position.z;

  let qx:f32 = q.x;
  let qy:f32 = q.y;
  let qz:f32 = q.z;
  let qw:f32 = q.w;

  let ix:f32 = qw * x + qy * z - qz * y;
  let iy:f32 = qw * y + qz * x - qx * z;
  let iz:f32 = qw * z + qx * y - qy * x;
  let iw:f32 = -qx * x - qy * y - qz * z;

  var ret: vec3<f32>;
  ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return ret;
}

fn inverse( m:mat3x3<f32>) -> mat3x3<f32>{
  var a00 = m[0][0];
  var a01 = m[0][1];
  var a02 = m[0][2];
  var a10 = m[1][0];
  var a11 = m[1][1];
  var a12 = m[1][2];
  var a20 = m[2][0];
  var a21 = m[2][1];
  var a22 = m[2][2];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  var det = a00 * b01 + a01 * b11 + a02 * b21 ;
  return mat3x3<f32>(
      vec3<f32>(b01/ det, (-a22 * a01 + a02 * a21)/ det, (a12 * a01 - a02 * a11)/ det),
      vec3<f32>(b11/ det, (a22 * a00 - a02 * a20)/ det, (-a12 * a00 + a02 * a10)/ det),
      vec3<f32>(b21/ det, (-a21 * a00 + a01 * a20)/ det, (a11 * a00 - a01 * a10)/ det)
  );
}

fn dir_to_faceId(pt:vec3<f32>) -> i32 {
    //**** nx px ny py nz pz
    var abs_x = abs(pt.x);
    var abs_y = abs(pt.y);
    var abs_z = abs(pt.z);
    var coord = max(max(abs_x, abs_y), abs_z);
    if(coord == -pt.x){  return 0;}
    if(coord == pt.x) { return 1;}

    if(coord == -pt.y){  return 2;}
    if(coord == pt.y) { return 3;}

    if(coord == -pt.z) { return 4;}
    return 5;
  }

  fn convert_xyz_to_cube_uv(x:f32, y:f32, z:f32 ) -> vec2<f32>
  {
    var dir = vec3<f32>(x, y, z);
    var absX = abs(dir.x);
    var absY = abs(dir.y);
    var absZ = abs(dir.z);

    var isXPositive = 0;
    if(dir.x > 0.0){isXPositive = 1;}
    var isYPositive = 0;
    if(dir.y > 0.0){isYPositive = 1;}
    var isZPositive = 0;
    if(dir.z > 0.0){isZPositive = 1;}

    var maxAxis:f32 = 0.0;
    var uc:f32 = 0.0;
    var vc:f32 = 0.0;

    // POSITIVE X
    if (isXPositive == 1 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from +z to -z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = -z;
      vc = y;
    }
    // NEGATIVE X
    if (isXPositive ==0 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from -z to +z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = z;
      vc = y;
    }
    // POSITIVE Y
    if (isYPositive==1 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from +z to -z
      maxAxis = absY;
      uc = x;
      vc = -z;
    }
    // NEGATIVE Y
    if (isYPositive ==0 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -z to +z
      maxAxis = absY;
      uc = x;
      vc = z;
    }
    // POSITIVE Z
    if (isZPositive == 1&& absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = x;
      vc = y;
    }
    // NEGATIVE Z
    if (isZPositive ==0 && absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from +x to -x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = -x;
      vc = y;
    }

    // Convert range from -1 to 1 to 0 to 1
    var u = 0.5f * (uc / maxAxis + 1.0f);
    var v = 0.5f * (vc / maxAxis + 1.0f);

    return vec2(u, v);
  }

    // Returns ±1
    fn signNotZero( v1:vec2<f32>) -> vec2<f32> {
        var v:vec2<f32> = v1;
        if(v.x >= 0.0){
            v.x = 1.0;
        }else{
            v.x = -1.0;
        }
        if(v.y >= 0.0){
            v.y = 1.0;
        }else{
            v.y= -1.0;
        }
        return v;
    }

    fn octEncode( v:vec3<f32> ) -> vec2<f32> {
        var l1norm = abs(v.x) + abs(v.y) + abs(v.z);
        var result = v.xy * (1.0 / l1norm);
        if (v.z < 0.0) {
            result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
        }
        return result;
    }

    // Returns a unit vector. Argument o is an octahedral vector packed via octEncode,on the [-1, +1] square*/
    fn octDecode( o:vec2<f32> ) -> vec3<f32> {
        var v = vec3<f32>(o.x, o.y, 1.0 - abs(o.x) - abs(o.y));
        if (v.z < 0.0) {
            var tmp = (1.0 - abs(v.yx)) * signNotZero(v.xy);
            v.x = tmp.x;
            v.y = tmp.y;
        }
        return normalize(v);
    }

    fn Linear01Depth(z:f32,near:f32,far:f32)-> f32{
        let ZBufferZ = (-1.0+(far/near)) / far;
        let ZBufferW = near /far ;
        return 1.0 / (ZBufferZ * z + ZBufferW) ;
    }

    
    fn LinearizeDepth( depth:f32 , nearPlane:f32 , farPlane:f32 )-> f32 {
      var z = depth * 2.0 - 1.0;
      return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - z * (farPlane - nearPlane));
    }

    fn logDepth(depth : f32, far:f32) -> f32 {
      return log2(depth + 1.0) * 2.0 / (log(far + 1.0) / 0.6931471805599453) * 0.5;
    }

    fn log2Depth(depth:f32, near:f32, far:f32) -> f32 {
      let Fcoef:f32 = 2.0 / log2(far + 1.0);
      var result:f32 = (log2(max(1e-6, 1.0 + depth)) * Fcoef - 1.0);
      result = (1.0 + result) / 2.0;
      return result * depth;
    }

    fn log2DepthFixPersp(depth:f32, near:f32, far:f32) -> f32 {
      let flogz:f32 = 1.0 + depth;
      let Fcoef_half:f32 = (2.0 / log2(far + 1.0)) * 0.5;
      var result:f32 = log2(flogz) * Fcoef_half;
      result = (1.0 + result) / 2.0;
      return result;
    }


    fn QuaternionToMatrix(q: vec4<f32>) -> mat4x4<f32> {
      // If q is guaranteed to be a unit quaternion, s will always
      // be 1.  In that case, this calculation can be optimized out.
      //float norm = GetNorm (q);
      //float s = (norm > 0.0) ? 2.0/norm : 0;

      var result: mat4x4<f32>;
  
      // Precalculate coordinate products
      let x = q.x * 2.0;
      let y = q.y * 2.0;
      let z = q.z * 2.0;
      let xx = q.x * x;
      let yy = q.y * y;
      let zz = q.z * z;
      let xy = q.x * y;
      let xz = q.x * z;
      let yz = q.y * z;
      let wx = q.w * x;
      let wy = q.w * y;
      let wz = q.w * z;
  
      // Calculate 3x3 matrix from orthonormal basis
      result[0][0] = 1.0 - (yy + zz);
      result[0][1] = xy + wz;
      result[0][2] = xz - wy;
      result[0][3] = 0.0;
  
      result[1][0] = xy - wz;
      result[1][1] = 1.0 - (xx + zz);
      result[1][2] = yz + wx;
      result[1][3] = 0.0;
  
      result[2][0] = xz + wy;
      result[2][1] = yz - wx;
      result[2][2] = 1.0 - (xx + yy);
      result[2][3] = 0.0;
  
      result[3][0] = 0.0;
      result[3][1] = 0.0;
      result[3][2] = 0.0;
      result[3][3] = 1.0;

      return result;
    }

    fn MakeScaleMatrix(scale: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          scale.x, 0.0, 0.0, 0.0,
          0.0, scale.y, 0.0, 0.0,
          0.0, 0.0, scale.z, 0.0,
          0.0, 0.0, 0.0, 1.0,
        );
    }

    fn MakeRotationMatrix(rotationQuaternion: vec4<f32>) -> mat4x4<f32> {
        return QuaternionToMatrix(rotationQuaternion);
    }

    fn MakeTranslationMatrix(translation: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          translation.x, translation.y, translation.z, 1.0,
        );
    }

    fn MakeMatrix4x4(scale: vec3<f32>, rotationQuaternion: vec4<f32>, translation: vec3<f32>) -> mat4x4<f32> {
        var scaleMat: mat4x4<f32> = MakeScaleMatrix(scale);
        var rotationMat: mat4x4<f32> = MakeRotationMatrix(rotationQuaternion);
        var translationMat: mat4x4<f32> = MakeTranslationMatrix(translation);
        return translationMat * scaleMat * rotationMat;
    }

    fn mixMatrix4x4(a: mat4x4<f32>, b: mat4x4<f32>, t:f32) -> mat4x4<f32> {
      return a * (1.0 - t) + b * t;
      // return mat4x4<f32>(
      //   mix(a[0], b[0], t),
      //   mix(a[1], b[1], t),
      //   mix(a[2], b[2], t),
      //   mix(a[3], b[3], t)
      // );
    }

    fn decodeDepth( color:vec4<f32> ) -> f32{
      var depth = 0.0 ;
      const bitShifts = vec4<f32>(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0); 
      depth = dot(color, bitShifts);
      return depth;
    }

    fn encodeDepth( depth:f32 ) -> vec4<f32>{
      const bitSh  = vec4<f32>(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
      const bitMsk = vec4<f32>(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
      var comp:vec4<f32>;
      comp  = depth * bitSh;
      comp  = fract(comp);
      comp -= comp.xxyz * bitMsk;
      return comp;
    }

    fn calculateBillboardMatrix2(eye:vec3f,pos:vec3f,up:vec3f) -> mat3x3<f32> {
      
      let zAxis: vec3f = -normalize(pos.xyz - eye);
      var xAxis: vec3f = cross(up,zAxis);
      xAxis = normalize(cross(zAxis,xAxis));
      let yAxis = normalize(cross(zAxis, xAxis));
      return mat3x3<f32>(xAxis, yAxis, zAxis);
    }

`,yw=`
          #if USE_CUSTOMUNIFORM
          #else
              struct MaterialUniform {
                  transformUV1:vec4<f32>,
                  transformUV2:vec4<f32>,

                  baseColor: vec4<f32>,
                  emissiveColor: vec4<f32>,
                  materialF0: vec4<f32>,
                  specularColor: vec4<f32>,
                  envIntensity: f32,
                  normalScale: f32,
                  roughness: f32,
                  metallic: f32,
                  ao: f32,

                  roughness_min: f32,
                  roughness_max: f32,
                  metallic_min: f32,
                  metallic_max: f32,
                  emissiveIntensity: f32,
                  alphaCutoff: f32,
                  ior: f32,
                  clearcoatColor: vec4<f32>,
                  clearcoatWeight: f32,
                  clearcoatFactor: f32,
                  clearcoatRoughnessFactor: f32,
              };
        #endif
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;
      `,Ew=`


#if USE_CUSTOMUNIFORM
#else
    struct MaterialUniform {
      transformUV1:vec4<f32>,
      transformUV2:vec4<f32>,
      baseColor: vec4<f32>,
      alphaCutoff: f32,
    };
#endif


@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,Cw=`
    #include "Common_frag"
    #include "GlobalUniform"

    fn UnLit(){
        let alpha = ORI_ShadingInput.BaseColor.a ;
        ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.BaseColor.rgb * alpha , alpha) ;

        #if USE_WORLDPOS
            ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
        #endif

        #if USEGBUFFER
            var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
            normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
            ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
            ORI_FragmentOutput.material = vec4<f32>(1.0,1.0,0.0,1.0);
        #endif
    }

    fn debugFragmentOut(){

    }
`;class ou{static groupBindingAndFunctions(A,e){return`
            struct JointsMatrix {
                matrix : array<mat4x4<f32>>
            };

            @group(${A}) @binding(${e})
            var<storage, read> jointsMatrixIndexTable: array<f32>;

            @group(${A}) @binding(${e+1})
            var<storage, read> jointsInverseMatrix: JointsMatrix;

            @group(${A}) @binding(${e+2})
            var<storage, read> jointsIndexMapingTable: array<f32>;

            const MAX_JOINT_NUM = 8;
            fn getSkeletonWorldMatrix(joints: array<f32, MAX_JOINT_NUM>, weights: array<f32, MAX_JOINT_NUM>, num: u32) -> mat4x4<f32> {
                var result: mat4x4<f32>;
                for(var i: u32 = 0; i < num; i = i + 1) {
                    let jointId = i32(joints[i]);
                    let jointIndex = u32(jointsIndexMapingTable[jointId]);
                    let jointMatrixIndex = u32(jointsMatrixIndexTable[jointIndex]);
                    let joint = models.matrix[jointMatrixIndex] * jointsInverseMatrix.matrix[jointId] * weights[i];
                    result += joint;
                }
                return result;
            }

            fn getSkeletonWorldMatrix_4(joints: vec4<f32>, weights: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints.x, joints.y, joints.z, joints.w,
                    0, 0, 0, 0,
                ), array<f32, MAX_JOINT_NUM>(
                    weights.x, weights.y, weights.z, weights.w,
                    0, 0, 0, 0,
                ), 4);
            }
    
            fn getSkeletonWorldMatrix_8(joints0: vec4<f32>, weights0: vec4<f32>, joints1: vec4<f32>, weights1: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints0.x, joints0.y, joints0.z, joints0.w,
                    joints1.x, joints1.y, joints1.z, joints1.w,
                ), array<f32, MAX_JOINT_NUM>(
                    weights0.x, weights0.y, weights0.z, weights0.w,
                    weights1.x, weights1.y, weights1.z, weights1.w,
                ), 8);
            }
        `}}let _w=`
    var<private> PI: f32 = 3.14159265359;
    #if USE_METAHUMAN
        ${nr.getMorphTargetShaderBinding(3,0)}
        ${ou.groupBindingAndFunctions(3,2)} 
    #else
        #if USE_MORPHTARGETS
            ${nr.getMorphTargetShaderBinding(3,0)}
        #endif

        #if USE_SKELETON
            ${ou.groupBindingAndFunctions(3,0)} 
        #endif
    #endif

    struct VertexAttributes{
        @builtin(instance_index) index : u32,
        @location(auto) position: vec3<f32>,
        @location(auto) normal: vec3<f32>,
        @location(auto) uv: vec2<f32>,
        @location(auto) TEXCOORD_1: vec2<f32>,

        #if USE_METAHUMAN
            #if USE_TANGENT
                @location(auto) TANGENT: vec4<f32>,
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                    @location(auto) vIndex: f32,
                #else
                    @location(auto) vIndex: f32,
                #endif
            #else
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                    @location(auto) vIndex: f32,
                #else
                    @location(auto) vIndex: f32,
                #endif
            #endif
        #else
            #if USE_TANGENT
                @location(auto) TANGENT: vec4<f32>,
            #endif

            #if USE_SKELETON
                #if USE_TANGENT
                    @location(auto) joints0: vec4<f32>,
                    @location(auto) weights0: vec4<f32>,
                    #if USE_JOINT_VEC8
                        @location(auto) joints1: vec4<f32>,
                        @location(auto) weights1: vec4<f32>,
                    #endif
                #else
                    @location(auto) joints0: vec4<f32>,
                    @location(auto) weights0: vec4<f32>,
                    #if USE_JOINT_VEC8
                        @location(auto) joints1: vec4<f32>,
                        @location(auto) weights1: vec4<f32>,
                    #endif
                #endif
            #endif

            #if USE_MORPHTARGETS
                #if USE_TANGENT
                    @location(auto) vIndex: f32,
                #else
                    @location(auto) vIndex: f32,
                #endif
            #endif

        #endif
    }

    struct VertexOutput {
    @location(auto) index: f32,
    @location(auto) varying_UV0: vec2<f32>,
    @location(auto) varying_UV1: vec2<f32>,
    @location(auto) varying_ViewPos: vec4<f32>,
    @location(auto) varying_Clip: vec4<f32>,
    @location(auto) varying_WPos: vec4<f32>,
    @location(auto) varying_WNormal: vec3<f32>,
    @location(auto) varying_Color: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(auto) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(auto) varying_Tangent: vec4<f32>,
    #endif
   

    @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    fn ORI_Vert(vertex:VertexAttributes){
    var vertexPosition = vertex.position;
    var vertexNormal = vertex.normal;

    #if USE_METAHUMAN
        ${nr.getMorphTargetCalcVertex()}    
        #if USE_JOINT_VEC8
            let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
            ORI_MATRIX_M *= skeletonNormal ;
        #else
            let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
            ORI_MATRIX_M *= skeletonNormal ;
        #endif
    #else 
        #if USE_MORPHTARGETS
            ${nr.getMorphTargetCalcVertex()}    
        #endif

        #if USE_SKELETON
            #if USE_JOINT_VEC8
                let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
                ORI_MATRIX_M *= skeletonNormal ;
            #else
                let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
                ORI_MATRIX_M *= skeletonNormal ;
            #endif
        #endif
    #endif
    
    ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));
   
    #if USE_TANGENT
        ORI_VertexOut.varying_Tangent = vec4f(normalize(ORI_NORMALMATRIX * vertex.TANGENT.xyz),vertex.TANGENT.w)  ;
    #endif

    var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
    var viewPosition = ORI_MATRIX_V * worldPos;
    var clipPosition = ORI_MATRIX_P * viewPosition ;

    #if USE_LOGDEPTH
        clipPosition.z = log2Depth(clipPosition.w, globalUniform.near, globalUniform.far);
    #endif

    ORI_CameraWorldDir = normalize(ORI_CAMERAMATRIX[3].xyz - worldPos.xyz) ;

    ORI_VertexOut.index = f32(vertex.index) ;

    ORI_VertexOut.varying_UV0 = vertex.uv.xy ;

    ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;

    ORI_VertexOut.varying_ViewPos = viewPosition ;
    ORI_VertexOut.varying_Clip = clipPosition ;
    ORI_VertexOut.varying_WPos = worldPos ;
    ORI_VertexOut.varying_WPos.w = f32(vertex.index);
    ORI_VertexOut.varying_WNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;

    ORI_VertexOut.member = clipPosition ;
    }
`,Sw=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  rectClip: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,vw=`
    struct IrradianceVolumeData {
        //0
        orientationIndex:f32,
            hysteresis:f32,
            OctRTSideSize:f32,
            OctRTMaxSize:f32,

            //1
            startX:f32,
            startY:f32,
            startZ:f32,
            ProbeSpace:f32,

            //2
            gridXCount:f32,
            gridYCount:f32,
            gridZCount:f32,
            maxDistance:f32,

            //3
            depthSharpness:f32,
            ProbeSourceTextureSize:f32,
            ProbeSize:f32,
            bounceIntensity:f32,

            //4
            probeRoughness:f32,
            normalBias:f32,
            irradianceChebyshevBias:f32,
            rayNumber:f32,

            //5
            irradianceDistanceBias:f32,
            indirectIntensity:f32,
            ddgiGamma:f32,
            lerpHysteresis:f32,
            //6

            debugX:f32,
            debugY:f32,
            debugZ:f32,
            slot0:f32,

            //..
            v7:vec4<f32>,
    }
`,ww=`
    #include "MathShader"
    #include "FastMathShader"
    #include "InstanceUniform"

    var<private> ORI_MATRIX_P: mat4x4<f32>;
    var<private> ORI_MATRIX_V: mat4x4<f32>;
    var<private> ORI_MATRIX_M: mat4x4<f32>;
    var<private> ORI_MATRIX_PV: mat4x4<f32>;
    var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
    var<private> ORI_MATRIX_World: mat4x4<f32>;
    var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
    var<private> ORI_NORMALMATRIX: mat3x3<f32>;
    var<private> ORI_CameraWorldDir: vec3<f32>;
    var<private> ORI_ViewDir: vec3<f32>;

    var<private> TIME: vec4<f32>;
    var<private> MOUSE: vec4<f32>;
    var<private> SCREEN: vec4<f32>;

    var<private> ProjectionParams: vec4<f32>;

    fn vertex_inline(vertex:VertexAttributes){
        TIME.x = globalUniform.frame;
        TIME.y = globalUniform.time;
        TIME.z = globalUniform.delta;

        MOUSE.x = globalUniform.mouseX;
        MOUSE.y = globalUniform.mouseY;

        SCREEN.x = globalUniform.windowWidth;
        SCREEN.y = globalUniform.windowHeight;

        ProjectionParams.x = globalUniform.near;
        ProjectionParams.y = globalUniform.far;
        ProjectionParams.z = 1.0 + 1.0 / globalUniform.far;

        ORI_MATRIX_P = globalUniform.projMat ;
        ORI_MATRIX_V = globalUniform.viewMat ;
        ORI_MATRIX_PV = ORI_MATRIX_P * ORI_MATRIX_V ;
        ORI_MATRIX_PVInv = globalUniform.pvMatrixInv ;
        ORI_CAMERAMATRIX = globalUniform.cameraWorldMatrix ;

        ORI_MATRIX_M = models.matrix[u32(vertex.index)];
            
        #if USE_INSTANCEDRAW
            let modelID = instanceDrawID.matrixIDs[vertex.index];
            ORI_MATRIX_M = models.matrix[modelID];
        #endif
    }
`,bw=`
  #include "GlobalUniform"
  #include "FragmentVarying"
  #include "ColorPassFragmentOutput"
  #include "ShadingInput"

  var<private> ORI_FragmentOutput: FragmentOutput;
  var<private> ORI_VertexVarying: FragmentVarying;
  var<private> ORI_ShadingInput: ShadingInput;
  var<private> viewDir:vec3<f32>;
  var<private> modelIndex:u32;
  @fragment
  fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
    modelIndex = u32(round(vertex_varying.index)) ; 

    ORI_VertexVarying = vertex_varying;
    ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
    viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz) ;
    #if USE_WORLDPOS
      ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
    #endif
    #if USEGBUFFER
      ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_ShadingInput.Normal.rgb ,1.0); 
      ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
    #endif
    frag();
    
    #if USE_DEBUG
      debugFragmentOut();
    #endif

    #if USE_OUTDEPTH
      #if USE_LOGDEPTH
        ORI_FragmentOutput.out_depth = log2DepthFixPersp(ORI_VertexVarying.fragPosition.w, globalUniform.near, globalUniform.far);
      #else
        ORI_FragmentOutput.out_depth = ORI_ShadingInput.FragDepth ;
      #endif
    #endif

    return ORI_FragmentOutput ;
  }


`,Iw=`
    #include "WorldMatrixUniform"
    #include "VertexAttributes_vert"
    #include "GlobalUniform"
    #include "Inline_vert"
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }
`,Bw=`
    @group(1) @binding(auto)
    var brdflutMapSampler: sampler;
    @group(1) @binding(auto)
    var brdflutMap: texture_2d<f32>;
`,Tw=`
    @group(1) @binding(auto)
    var prefilterMapSampler: sampler;
    @group(1) @binding(auto)
    var prefilterMap: texture_cube<f32>;
    @group(1) @binding(auto)
    var envMapSampler: sampler;
    @group(1) @binding(auto)
    var envMap: texture_cube<f32>;
`;class bi{}a(bi,"Cascades",4);let $3=`

  struct GlobalUniform {
    projMat: mat4x4<f32>,
    viewMat: mat4x4<f32>,
    cameraWorldMatrix: mat4x4<f32>,
    pvMatrixInv : mat4x4<f32>,
    shadowMatrix: array<mat4x4<f32>, 8u>,
    csmShadowBias: vec4<f32>,
    csmMatrix: array<mat4x4<f32>,${bi.Cascades}>,
    
    shadowLights:mat4x4<f32>,

    CameraPos: vec3<f32>,
    frame: f32,

    time: f32,
    delta: f32,
    shadowBias: f32,
    skyExposure: f32,

    renderPassState:f32,
    quadScale: f32,
    hdrExposure: f32,
    renderState_left: i32,

    renderState_right: i32,
    renderState_split: f32,
    mouseX: f32,
    mouseY: f32,

    windowWidth: f32,
    windowHeight: f32,
    near: f32,
    far: f32,

    pointShadowBias: f32,
    shadowMapSize: f32,
    shadowSoft: f32,
    enableCSM:f32,

    csmMargin:f32,
    nDirShadowStart: i32,
    nDirShadowEnd: i32,
    nPointShadowStart: i32,

    nPointShadowEnd: i32,
    empty1: i32,
    empty2: i32,
    empty3: i32,

    frustumPlanes: array<vec4f, 6u>,
  };

  @group(0) @binding(0)
  var<uniform> globalUniform: GlobalUniform;
`,Dw=`
    #if USE_INSTANCEDRAW
        struct InstanceUniform {
            matrixIDs : array<i32>
        };
        @group(2) @binding(7)
        var<storage, read> instanceDrawID : InstanceUniform;
    #endif
`,K3=`
    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;
`,xw=`
  fn pow2(  x : f32 ) -> f32
  {
      return x * x;
  }

  fn pow2v3(  x : vec3f ) -> vec3f
  {
      return x * x;
  }


  fn pow3(  x : f32 ) -> f32
  {
      var xx = x*x;
      return x * xx;
  }

  fn pow4(  x : f32 ) -> f32
  {
      var xx = x*x;
      return xx * xx;
  }

  fn pow5(x: f32) -> f32 {
      var x2 = x * x;
      return x2 * x2 * x;
  }

  fn rcp( x:f32 ) -> f32
  {
      return 1.0 / x;
  }

  fn rsqrt3( a : vec3<f32> ) -> vec3<f32>
  {
    return pow(a, vec3<f32>(-0.5));
  }

  fn rsqrt( a : f32 ) -> f32
  {
    return pow(a, -0.5);
  }

  fn squareF( a : f32 ) -> f32
  {
    return a * a;
  }

  fn squareV2( a : vec2f ) -> vec2f
  {
    return a * a;
  }

  fn squareV3( a : vec3f ) -> vec3f
  {
    return a * a;
  }

  fn sqrtFast(  x : f32  ) -> f32 
  {
    var i = i32(x);
    i = 0x1FBD1DF5 + (i / 2 );
    return f32(i);
  }

  fn lengthFast(  v :vec3<f32> ) -> f32
  {
    var LengthSqr = dot(v,v);
    return sqrtFast( LengthSqr );
  }

  fn asinFast( x:f32 )-> f32
  {
      return (0.5 * PI) - acosFast(x);
  }

  fn acosFast( inX: f32 ) -> f32
  {
      var x = abs(inX);
      var res = -0.156583 * x + (0.5 * PI);
      res *= sqrt(1.0 - x);

    if(inX >= 0.0){
      return res ;
    }else{
      return PI - res ;
    }
  }

  fn acosFast4( inX : f32 )-> f32
  {
    var x1 = abs(inX);
    var x2 = x1 * x1;
    var x3 = x2 * x1;
    var s = 0.0 ;

    s = -0.2121144 * x1 + 1.5707288;
    s = 0.0742610 * x2 + s;
    s = -0.0187293 * x3 + s;
    s = sqrt(1.0 - x1) * s;

    // acos function mirroring
    // check per platform if compiles to a selector - no branch neeeded
    if(inX >= 0.0){
      return s ;
    }else{
      return PI - s ;
    }
  }
`,Ow=`

    fn perturbNormal(  worldPos:vec3<f32>,  surf_norm:vec3<f32>,  mapN:vec3<f32> , normalScale:f32 , face:f32 ) -> vec3<f32> {
        var q0 = vec3<f32>( dpdx( worldPos.x ), dpdx( worldPos.y ), dpdx( worldPos.z ) );
        var q1 = vec3<f32>( dpdy( worldPos.x ), dpdy( worldPos.y ), dpdy( worldPos.z ) );
        var st0 = dpdx( ORI_VertexVarying.fragUV0.xy );
        var st1 = dpdy( ORI_VertexVarying.fragUV0.xy );
        var N = surf_norm;
        var q0perp = cross( N, q0 );
        var q1perp = cross( q1, N );

        // #if USE_TANGENT
        //     var T = ORI_VertexVarying.TANGENT.xyz ;
        // #else
            var T = q1perp * st0.x + q0perp * st1.x;
        // #endif
        
        var B = q1perp * st0.y + q0perp * st1.y;

        var det = max( dot( T, T ), dot( B, B ) );
        var scale = 1.0 ;
        if( det != 0.0 ){
            scale = inverseSqrt( det ) ;
        }

        // #if USE_TANGENT
        //     scale = scale * ORI_VertexVarying.TANGENT.w ;
        // #endif

        scale *= normalScale;
        return normalize( (T * ( -mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z ) * face ) ;
    }

    fn unpackNormalMap( normal : vec3<f32> ) -> vec3<f32>
    {
        var normalTex = vec3<f32>( normal.xyz * 2.0 - 1.0 ) ;
        return (normalTex);
    }

    fn unPackNormal(normal : vec3<f32> , height:f32 ) -> vec3<f32>{
        var face = 1.0 ;
        if(ORI_VertexVarying.face){
            face = 1.0 ;
        }else{
            face = -1.0 ;
        }

        #if USE_RGNORMAL
            return unPackRGNormal(normal,height,face);
        #else
            var n = normal ;
            #if USE_NORMALFILPY
            n.y = 1.0 - n.y ; 
            #endif
            
            var mapNormal: vec3<f32> = n ;//unpackNormalMap(n) ;
            return perturbNormal(ORI_VertexVarying.vWorldPos.xyz , ORI_VertexVarying.vWorldNormal.xyz , mapNormal , height , face  ) ;
        #endif
    }

    fn unPackRGNormal(normal : vec3<f32> , height:f32 , face:f32) -> vec3<f32> {
        var d = normal.rg * 2.0 - 1.0 ;
        var l = 1.0 - saturate(dot(d,d));
        var s = sqrt(l);
        var rg = d * height ; 
        var mapNormal = vec3<f32>(rg,s);
        var outN = perturbNormal(ORI_VertexVarying.vWorldPos.xyz,ORI_VertexVarying.vWorldNormal,mapNormal,1.0,face) ;
        return outN ;
    }
`,Mw=`
    struct FragmentVarying {
        @location(auto) index: f32,
        @location(auto) fragUV0: vec2<f32>,
        @location(auto) fragUV1: vec2<f32>,
        @location(auto) viewPosition: vec4<f32>,
        @location(auto) fragPosition: vec4<f32>,
        @location(auto) vWorldPos: vec4<f32>,
        @location(auto) vWorldNormal: vec3<f32>,
        @location(auto) vColor: vec4<f32>,

        #if USE_SHADOWMAPING
            @location(auto) vShadowPos: vec4<f32>,
        #endif

        #if USE_TANGENT
            @location(auto) TANGENT: vec4<f32>,
        #endif
        
        @builtin(front_facing) face: bool,
        @builtin(position) fragCoord : vec4<f32>
    };
`,q3=`
    struct FragmentOutput {
        @location(auto) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(auto) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(auto) worldNormal: vec4<f32>,
            @location(auto) material: vec4<f32>,
        #endif

        #if USE_OUTDEPTH
            @builtin(frag_depth) out_depth: f32
        #endif
    };
`,Rw=`
    struct ShadingInput{
        BaseColor:vec4<f32>,

        Roughness:f32,
        Metallic:f32,
        Specular:f32,

        EmissiveColor:vec4<f32>,
        SurfaceColor:vec4<f32>,

        Normal:vec3<f32>,
        HairNormal:vec3<f32>,
        Tangent:vec4<f32>,

        WorldPositionOffset:vec3<f32>,
        AmbientOcclusion:f32,

        PixelDepthOffset:f32,

        Opacity:f32,
        OpacityMask:f32,

        Refraction:f32,
        FragDepth:f32,

        SSS:vec3f,
    }
`,Pw=`
    #if USE_IES_PROFILE 
        @group(1) @binding(auto)
        var iesTextureArrayMapSampler : sampler;
        @group(1) @binding(auto)
        var iesTextureArrayMap: texture_2d_array<f32> ;
    #endif

    fn getLightIESProfileAtt( wPos : vec3<f32> , light:LightData ) -> f32
    {
        #if USE_IES_PROFILE 
            let tangent = vec3<f32>(1.0,0.0,0.0);
            let lightBitangent = normalize( cross( tangent, light.direction ) );
            let lightMatrix = mat4x4( vec4<f32>(light.direction.xyz, 0.0), vec4<f32>(lightBitangent.xyz, 0.0), vec4<f32>(tangent.xyz, 0.0), vec4<f32>(0.0, 0.0, 0.0, 1.0) );
            let lightMatrixInv = transpose(lightMatrix);
            let lightPos = light.position.xyz;
            let l = lightPos - wPos; 
            let toLight = normalize(l);
            let localToLight = (vec4<f32>(toLight.xyz, 0.0) * lightMatrixInv).xyz;
            let dotProd = dot(toLight, light.direction);
            let angle = asin(dotProd);
            let normAngle = (angle / PI) + 0.5 ;
            let tangentAngle = atan2( -localToLight.z, -localToLight.x ); 
            let normTangentAngle = tangentAngle / (PI * 2.0) + 0.5 ;
            if(light.ies >= 0.0){
                return textureSampleLevel(iesTextureArrayMap, iesTextureArrayMapSampler, vec2<f32>(normAngle , normTangentAngle) , i32(light.ies) , 0.0).r ;
            }else{
                return 1.0;
            }
        #else 
            return 1.0;
        #endif
    }

`,Fw=`
    @group(1) @binding(auto) var shadowMapSampler: sampler;
    @group(1) @binding(auto) var shadowMap: texture_depth_2d_array;
    @group(1) @binding(auto) var pointShadowMapSampler: sampler;
    @group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array;

    struct ShadowStruct{
      directShadowVisibility: array<f32, 8>,
      pointShadows: array<f32, 8>,
    }
    var<private> shadowStrut: ShadowStruct ;

    fn useShadow(){
        shadowStrut.directShadowVisibility = array<f32, 8>( 1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0) ;
        shadowStrut.pointShadows = array<f32, 8>( 1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0) ;
        #if USE_SHADOWMAPING
          directShadowMaping(globalUniform.shadowBias);
          pointShadowMapCompare(globalUniform.pointShadowBias);
        #endif
    }

    fn calcBasicBias(shadowWorldSize:f32, shadowDepthTexSize:f32, near:f32, far:f32) -> f32{
      var bias = shadowWorldSize / shadowDepthTexSize;
      bias = bias / (far - near);
      return bias * 2.0;
    }

    const dirCount:i32 = 8 ;
    const pointCount:i32 = 8 ;
    const csmCount:i32 = ${bi.Cascades} ;
    var<private> csmLevel:i32 = -1;
    fn directShadowMaping(shadowBias: f32)  {

        let enableCSM:bool = globalUniform.enableCSM > 0.5;
        for (var i: i32 = 0; i < dirCount ; i = i + 1) {
          if( i >= globalUniform.nDirShadowStart && i < globalUniform.nDirShadowEnd ){
            let ldx = globalUniform.shadowLights[u32(i) / 4u][u32(i) % 4u];
            let light = lightBuffer[u32(ldx)] ;
            var shadowIndex = i32(light.castShadow);
            var visibility = 1.0;
            var shadowMatrix:mat4x4<f32>;
            #if USE_CSM
              if(enableCSM && shadowIndex == 0){
                var totalWeight = 0.0;
                visibility = 0.0;
                var validCount = 0;
                for(var csm:i32 = 0; csm < csmCount; csm ++){
                  var csmShadowBias = globalUniform.csmShadowBias[csm];
                  shadowMatrix = globalUniform.csmMatrix[csm];
                  let csmShadowResult = directShadowMapingIndex(light, shadowMatrix, csm, csmShadowBias);
                  if(csmShadowResult.y < 0.5){
                    validCount ++;

                    var uv = 2.0 * csmShadowResult.zw - vec2<f32>(1.0);
                    uv = saturate(vec2<f32>(1.0) - abs(uv));
                    uv /= clamp(globalUniform.csmMargin, 0.01, 0.5);
                    var weight:f32 = min(uv.x, 1.0);
                    weight = min(weight, uv.y);

                    if(validCount == 1 && csm == csmCount - 1){
                      visibility = 1.0 - weight + csmShadowResult.x * weight;
                      totalWeight = 1.0;
                    }else{
                      weight *= 1.0 - totalWeight;
                      visibility += csmShadowResult.x * weight;
                      totalWeight += weight;
                    }
                    // if(weight < 1.0){
                    //   visibility += 0.1;
                    // }
                    if(validCount >= 2 || totalWeight >= 0.99){
                      csmLevel = csm;
                      break;
                    }
                  }
                }
                totalWeight += 0.0001;
                if(validCount == 0){
                  visibility = 1.0;
                }else{
                  visibility = visibility / totalWeight ;
                }
              }else{
                shadowMatrix = globalUniform.shadowMatrix[shadowIndex];
                if(enableCSM) {
                  shadowIndex += csmCount - 1;
                }
                visibility = directShadowMapingIndex(light, shadowMatrix, shadowIndex, shadowBias).x;
              }
            #else
              shadowMatrix = globalUniform.shadowMatrix[shadowIndex];
              visibility = directShadowMapingIndex(light, shadowMatrix, shadowIndex, shadowBias).x;
            #endif 
            shadowStrut.directShadowVisibility[i] = visibility;
          }
        }

    }

    fn directShadowMapingIndex(light:LightData, matrix:mat4x4<f32>, depthTexIndex:i32, shadowBias:f32) -> vec4<f32>
    {
      var visibility = 1.0;
      var isOutSideArea:f32 = 1.0;
      var varying_shadowUV:vec2<f32> = vec2<f32>(0.0);
      var shadowPosTmp = matrix * vec4<f32>(ORI_VertexVarying.vWorldPos.xyz, 1.0);
      var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
      varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
      if (varying_shadowUV.x <= 1.0
        && varying_shadowUV.x >= 0.0
        && varying_shadowUV.y <= 1.0
        && varying_shadowUV.y >= 0.0
        && shadowPosTmp.z <= 1.0
        && shadowPosTmp.z >= 0.0)
      {
        visibility = 0.0;
        isOutSideArea = 0.0;
        var uvOnePixel = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
        var totalWeight = 0.0;
        var NoL = (dot(normalize(ORI_VertexVarying.vWorldNormal), normalize(-light.direction)));
        let v = max(NoL, 0.0) ;
        var bias = shadowBias / v;
        for (var y = -1; y <= 1; y++) {
          for (var x = -1; x <= 1; x++) {
            var offset = vec2<f32>(f32(x), f32(y)) * uvOnePixel;
            
            // visibility += textureSampleCompare(shadowMap, shadowMapSampler, varying_shadowUV + offset, depthTexIndex, shadowPos.z - bias);
            var depth = textureSampleLevel(shadowMap, shadowMapSampler, varying_shadowUV + offset, depthTexIndex, 0);
            if ((shadowPos.z - bias ) < depth) {
              visibility += 1.0 ;
            }
            totalWeight += 1.0;
          }
        }
        visibility /= totalWeight;
        visibility += 0.001;
      }
      return vec4<f32>(visibility, isOutSideArea, varying_shadowUV);
    }

    fn pointShadowMapCompare(shadowBias: f32){
      let worldPos = ORI_VertexVarying.vWorldPos.xyz;
      let offset = 0.1;

      for (var i: i32 = 0; i < pointCount ; i = i + 1) {
        if( i >= globalUniform.nPointShadowStart && i < globalUniform.nPointShadowEnd ){
          let ldx = globalUniform.shadowLights[u32(i) / 4u][u32(i) % 4u];
          let light = lightBuffer[u32(ldx)] ;

          #if USE_SHADOWMAPING
              let lightPos = light.position.xyz;
              var shadow = 0.0;
              let frgToLight = worldPos - lightPos.xyz;
              var dir: vec3<f32> = normalize(frgToLight);
              var len = length(frgToLight);
              var bias = max(shadowBias * globalUniform.far * (1.0 - dot(ORI_ShadingInput.Normal, dir)), 0.005);
  
          #if USE_PCF_SHADOW
              let samples = 4.0;
              let sampleOffset = offset / (samples * 0.5);
              for (var x: f32 = -offset; x < offset; x += sampleOffset) {
                for (var y: f32 = -offset; y < offset; y += sampleOffset) {
                  for (var z: f32 = -offset; z < offset; z += sampleOffset) {
                    let offsetDir = normalize(dir.xyz + vec3<f32>(x, y, z));
                    var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
                    depth *= globalUniform.far;
                    if ((len - bias) > depth) {
                      shadow += 1.0 * dot(offsetDir, dir.xyz);
                    }
                  }
                }
                shadow = min(max(shadow / (samples * samples * samples), 0.0), 1.0);
            #endif
  
          #if USE_SOFT_SHADOW
              let vDis = length(globalUniform.CameraPos.xyz - worldPos.xyz);
              let sampleRadies = globalUniform.shadowSoft;
              let samples = 20;
              for (var j: i32 = 0; j < samples; j += 1) {
                let offsetDir = normalize(dir.xyz + sampleOffsetDir[j] * sampleRadies);
                var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
                depth *= globalUniform.far;
                if ((len - bias) > depth) {
                  shadow += 1.0 * dot(offsetDir, dir.xyz);
                }
              }
              shadow = min(max(shadow / f32(samples), 0.0), 1.0);
          #endif
  
          #if USE_HARD_SHADOW
              var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, dir.xyz, light.castShadow, 0);
              depth *= globalUniform.far;
              if ((len - bias) > depth) {
                shadow = 1.0;
              }
          #endif
              for (var j = 0; j < pointCount ; j+=1 ) {
                  if(i32(light.castShadow) == j){
                    shadowStrut.pointShadows[j] = 1.0 - shadow ;
                  }
              }
          #endif
        }
        }
    }

    #if USE_SOFT_SHADOW
      var<private>sampleOffsetDir : array<vec3<f32>, 20> = array<vec3<f32>, 20>(
        vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, -1.0, 1.0), vec3<f32>(-1.0, -1.0, 1.0), vec3<f32>(-1.0, 1.0, 1.0),
        vec3<f32>(1.0, 1.0, -1.0), vec3<f32>(1.0, -1.0, -1.0), vec3<f32>(-1.0, -1.0, -1.0), vec3<f32>(-1.0, 1.0, -1.0),
        vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, -1.0, 0.0), vec3<f32>(-1.0, -1.0, 0.0), vec3<f32>(-1.0, 1.0, 0.0),
        vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(-1.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, -1.0), vec3<f32>(-1.0, 0.0, -1.0),
        vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(0.0, -1.0, 1.0), vec3<f32>(0.0, -1.0, -1.0), vec3<f32>(0.0, 1.0, -1.0),
      );
    #endif
`,Nw=`
#include "IrradianceVolumeData_frag"
    struct IrradianceField {
        probeStartPosition: vec4<f32>,
        probeCounts:vec4<f32>,
        probeStep:f32,
        irradianceTextureWidth:f32,
        irradianceTextureHeight:f32,
        irradianceProbeSideLength:f32,
    };

    @group(1) @binding(auto)
    var irradianceMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceMap: texture_2d<f32>;
    @group(1) @binding(auto)
    var irradianceDepthMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceDepthMap: texture_2d<f32>;
    @group(2) @binding(7)
    var<uniform> irradianceData : IrradianceVolumeData ;

    var<private> irradianceFieldSurface: IrradianceField;
    var<private> energyPreservation: f32 = 0.85;
    var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

    fn getIrradianceFieldSurface() -> IrradianceField{
        let data = irradianceData ;
        irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
        irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
        irradianceFieldSurface.probeStep = data.ProbeSpace;
        irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
        return irradianceFieldSurface;
    }

    fn rotateDir(n:vec3<f32>) -> vec3<f32>{
       return normalize(applyQuaternion(-n, quaternion));
    }

    fn square1f(v:f32) -> f32 {
        return v * v ;
     }

   fn square(v:vec3<f32>) -> vec3<f32>{
      return v*v;
   }

    fn getIrradiance() -> vec4<f32>{
        var irradiance = sampleIrradianceField();
        var outerVolumeFactor:f32 = getOuterVolume(irradianceFieldSurface, ORI_VertexVarying.vWorldPos.xyz);
        irradiance *= outerVolumeFactor;
       return irradiance ;
    }
    
    fn debugProbe(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0);
        return probeIrradiance;
    }
    
    fn debugProbeDepth(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);
        
        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV ,0.0);
        probeIrradiance.x = probeIrradiance.x / irradianceData.maxDistance;
        probeIrradiance.y = 0.0;
        probeIrradiance.z = 0.0;
        probeIrradiance.w = 1.0;
        return probeIrradiance;
    }
    
    fn getOuterVolume(L:IrradianceField, position:vec3<f32>) -> f32{
        let halfWidth:vec3<f32> = 0.5 * (L.probeCounts.xyz - 1.0) * L.probeStep;
        let edgeWidth:vec3<f32> = halfWidth + L.probeStep;
        let centerPosition:vec3<f32> = halfWidth + L.probeStartPosition.xyz;
        let clampPos = min(edgeWidth, abs(position - centerPosition));
        
        let factorX = getOuterAxis(clampPos.x, edgeWidth.x, L.probeStep);
        let factorY = getOuterAxis(clampPos.y, edgeWidth.y, L.probeStep);
        let factorZ = getOuterAxis(clampPos.z, edgeWidth.z, L.probeStep);
        return factorX * factorY * factorZ;
    }
    
    fn getOuterAxis(current:f32, edge:f32, space:f32) -> f32{
        return clamp((edge - current) / space, 0.0, 1.0);
    }

    fn getBaseGridCoord(L:IrradianceField, X:vec3<f32>) -> vec3<i32> {
        var offsetIndex = (X - L.probeStartPosition.xyz) / irradianceFieldSurface.probeStep;
        return clamp(vec3<i32>(offsetIndex.xyz), vec3<i32>(0), vec3<i32>(L.probeCounts.xyz) - 1);
    }

    fn gridCoordToProbeIndex(L:IrradianceField, grid:vec3<i32>) -> i32
    {
        return grid.x + i32(L.probeCounts.x) * grid.z + grid.y * i32(L.probeCounts.z * L.probeCounts.x);
    }

    fn gridCoordToPosition(L:IrradianceField, grid:vec3<i32>) -> vec3<f32>
    {
        var pos:vec3<f32> = vec3<f32>(grid.xyz) * L.probeStep + L.probeStartPosition.xyz;
        return pos;
    }

    fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
    {
        var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
        uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
        uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
        return uv ;
    }

    fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
    {
        var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
        var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetZ = probeID / blockCount ;

        var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

        var blockOffset = vec2<f32>(0.0);
        blockOffset.x = f32(offsetX) * size;
        blockOffset.y = f32(offsetY) * size + f32(offsetZ) * irradianceFieldSurface.probeCounts.z * size;

        let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
        var probeCounts:vec3<f32> = irradianceFieldSurface.probeCounts.xyz;

        var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
        var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

        pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

        return pixelCoord + 1.0 ;
    }

    fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
    {
      var pixelCoord = pixelCoord0;
      let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
      let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
      let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
      let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
      let col:i32 = pixelCoord.y / pixelCountYMax;
      pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
      pixelCoord.y = pixelCoord.y % pixelCountYMax;
      return pixelCoord;
    }

    var<private> wpNormal:vec3<f32> ;
    fn sampleIrradianceField() -> vec4<f32>{
        wpNormal = ORI_ShadingInput.Normal.xyz ;
        var wo:vec3<f32> = ORI_CameraWorldDir ;
        var wsN:vec3<f32> = normalize(wpNormal);
        var direction:vec3<f32> = wpNormal;
        var worldPosition: vec3<f32> = ORI_VertexVarying.vWorldPos.xyz;
   
        getIrradianceFieldSurface();

        let surfaceBias = (wsN + 3.0 * wo) * irradianceData.normalBias ;

        var irradiance = vec3<f32>(0.0, 0.0, 0.0);
        var accumulatedWeights = 0.0;
        var biasedWorldPosition = (worldPosition + surfaceBias);

        var baseProbeCoords: vec3<i32> = getBaseGridCoord(irradianceFieldSurface, worldPosition);
        
        var baseProbeWorldPosition: vec3<f32> = gridCoordToPosition(irradianceFieldSurface, baseProbeCoords) ;
        
        var gridSpaceDistance = (biasedWorldPosition - baseProbeWorldPosition);

        // alpha is how far from the floor(currentVertex) position. on [0, 1] for each axis.
        var alpha: vec3<f32> = clamp(gridSpaceDistance / (irradianceFieldSurface.probeStep), vec3<f32>(0.0), vec3<f32>(1.0));
        // let irradianceDir = rotateDir(wsN.xyz);
        // Iterate over adjacent probe cage
        for (var i:i32 = 0; i < 8; i = i + 1) {
            var adjacentProbeOffset : vec3<i32> = vec3<i32>(i, i32(f32(i) * 0.5), i32(f32(i) * 0.25)) & vec3<i32>(1);
            var adjacentProbeCoords: vec3<i32> = clamp(baseProbeCoords + adjacentProbeOffset, vec3<i32>(0),  vec3<i32>(irradianceFieldSurface.probeCounts.xyz) - 1) ;
            
            var adjacentProbeIndex :i32 = gridCoordToProbeIndex(irradianceFieldSurface, adjacentProbeCoords);
            var adjacentProbeWorldPosition :vec3<f32> = gridCoordToPosition(irradianceFieldSurface, adjacentProbeCoords) ;//+ (wsN + 3.0 * w_o) * globalUniform.normalBias;
         
            var worldPosToAdjProbe = normalize(adjacentProbeWorldPosition - worldPosition);
            var biasedPosToAdjProbe = normalize(adjacentProbeWorldPosition - biasedWorldPosition);
            var biasedPosToAdjProbeDist = length(adjacentProbeWorldPosition - biasedWorldPosition);

            let trilinear = max(vec3<f32>(0.001), mix(1.0 - alpha, alpha, vec3<f32>(adjacentProbeOffset)));
            let trilinearWeight = (trilinear.x * trilinear.y * trilinear.z);
            var weight = 1.0;

            var wrapShading = (dot(worldPosToAdjProbe, direction) + 1.0) * 0.5;
            weight *= (wrapShading * wrapShading) + 0.2;

            var depthDir = -biasedPosToAdjProbe;//probe - world
            depthDir = applyQuaternion(depthDir, quaternion);
            var probeTextureUV : vec2<f32> = textureCoordFromDirection(depthDir.xyz,
                adjacentProbeIndex,
                irradianceFieldSurface.irradianceTextureWidth,
                irradianceFieldSurface.irradianceTextureHeight,
                irradianceFieldSurface.irradianceProbeSideLength);

            var filteredDistance : vec2<f32> = 2.0 * textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV,0.0).rg ;
           
            var variance = abs((filteredDistance.x * filteredDistance.x) - filteredDistance.y);

            var chebyshevWeight = 1.0;
            if(biasedPosToAdjProbeDist > filteredDistance.x ) // occluded
            {
                var v = biasedPosToAdjProbeDist - filteredDistance.x ;
                chebyshevWeight = variance / (variance + (v * v));
                // Increase the contrast in the weight
                chebyshevWeight = max((chebyshevWeight * chebyshevWeight * chebyshevWeight), 0.0);
            }

            weight *= max(0.05, chebyshevWeight);
            weight = max(0.000001, weight);

            let crushThreshold = 0.2;
            if (weight < crushThreshold)
            {
                weight *= (weight * weight) * (1.0 / (crushThreshold * crushThreshold));
            }

            weight *= trilinearWeight;
            
            //worldPosToAdjProbe
            let rotateDir = applyQuaternion(-direction, quaternion);
            probeTextureUV = textureCoordFromDirection((rotateDir),
            adjacentProbeIndex,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

            var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0).xyz;

            var exponent =  irradianceData.ddgiGamma * 0.5;
            probeIrradiance = pow(probeIrradiance, vec3<f32>(exponent));
            
            irradiance += (weight * probeIrradiance);
            accumulatedWeights += weight;
        }

        if(accumulatedWeights == 0.0){
            return vec4<f32>(0.0, 0.0, 0.0,1.0);
        }

        irradiance *= (1.0 / accumulatedWeights);   
        irradiance *= irradiance;                   

        irradiance *= 6.2831853071795864;
        irradiance *= irradianceData.indirectIntensity;
        return vec4<f32>(irradiance,1.0) ;
    }

`,Lw=`
#include "Clearcoat_frag"
    #include "EnvMap_frag"
    #include "BrdfLut_frag"
    #include "ColorUtil_frag"
    
    struct FragData {
        Ao: f32,
        Metallic: f32,
        Roughness: f32,

        Albedo: vec4<f32>,
        Emissive: vec3<f32>,
        Specular: vec3<f32>,

        N: vec3<f32>,
        V: vec3<f32>,
        R: vec3<f32>,
        T: vec3<f32>,

        F0: vec3<f32>,
        F: vec3<f32>,
        KS: vec3<f32>,
        KD: vec3<f32>,

        Alpha: f32,
        Shadow: f32,
        Indirect: f32,
        Reflectance: f32,

        NoV: f32,
        FaceDirection:f32,

        ClearcoatRoughness:f32,
        EnvColor: vec3<f32>,
        Irradiance: vec3<f32>,

        LightChannel: vec3<f32>
    };

    var<private> fragData: FragData;

    struct BxDFContext
    {
        NoV : f32 ,
        NoL : f32 ,
        VoL : f32 ,
        NoH : f32 ,
        HoL : f32 ,
        VoH : f32
    };

    fn getContext( N:vec3<f32>, V:vec3<f32>, H:vec3<f32>, L:vec3<f32> ) -> BxDFContext
    {
        var Context:BxDFContext ;
        Context.NoL = saturate(dot(N, L));
        Context.NoV = saturate(dot(N, V));
        Context.VoL = saturate(dot(V, L));
        Context.NoH = saturate(dot(N, H));
        Context.VoH = saturate(dot(V, H));
        Context.HoL = saturate(dot(H, L));
        return Context ;
    }

    // convert roughness to mipmapLevel
    fn roughnessToMipmapLevel( roughness: f32 , mipmapCount:i32 ) -> f32{
        let level = roughness * (1.7 - 0.7 * roughness );
        return level * f32(mipmapCount);
    }

    fn IORToF0(ior:f32)->f32{
        var dc = ior - 1.0 ;
        dc *= dc ;
        var dt = ior + 1.0 ;
        dt *= dt ;
        return dc / dt ;
    }

    fn Fd90( NoL:f32, roughness:f32) -> f32
    {
        return (2.0 * NoL * roughness) + 0.4;
    }

    fn KDisneyTerm( NoL:f32, NoV:f32 , roughness:f32) -> f32
    {
        return (1.0 + Fd90(NoL, roughness) * pow(1.0 - NoL, 5.0)) * (1.0 + Fd90(NoV, roughness) * pow(1.0 - NoV, 5.0));
    }

    fn FresnelSchlick( NoV:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(1.0 - NoV, 5.0);
    }

    fn FresnelTerm( cosA:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        let t = pow5( 1.0 - cosA );
        return F0 + (1.0 - F0) * t;
    }

    fn FresnelLerp( cosA:f32, F0:vec3<f32> , F90:vec3<f32>) -> vec3<f32>
    {
        let t = pow5( 1.0 - cosA );
        return mix( F0 ,F90,t ) ;
    }

    fn FresnelSchlickRoughness( NoV:f32,  F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(roughness), F0) - F0) * pow(1.0 - NoV, 5.0);
    }

    fn DistributionGGX( NdotH:f32 ,  roughness:f32 ) -> f32
    {
        let alpha = roughness * roughness;
        let alpha2 = roughness * roughness;

        let NdotH2 = NdotH * NdotH;

        let nom   = alpha2;
        var denom = (NdotH2 * (alpha2 - 1.0) + 1.0);
        denom = PI * denom * denom;

        return nom / denom;
    }

    // [Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"]
    fn Vis_SmithJoint( NoV : f32 ,  NoL : f32 ,  a2 : f32) -> f32
    {
        var Vis_SmithV = NoL * sqrt(NoV * (NoV - NoV * a2) + a2);
        var Vis_SmithL = NoV * sqrt(NoL * (NoL - NoL * a2) + a2);
        return 0.5 * rcp(Vis_SmithV + Vis_SmithL);
    }

    fn GeometrySchlickGGX( NdotV : f32 , roughness : f32 ) -> f32
    {
        //roughness compute ks
        let r = (roughness + 1.0);
        let k = (r*r) / 8.0;

        let nom   = NdotV;
        let denom = NdotV * (1.0 - k) + k;
        
        return nom / denom;
    }
    
    fn GeometrySmith( NdotV:f32 , NdotL:f32 , roughness : f32) -> f32
    {
        // let NdotV = max(dot(N, V), 0.0);
        // let NdotL = max(dot(N, L), 0.0);
        let ggx1 = GeometrySchlickGGX(NdotV, roughness);
        let ggx2 = GeometrySchlickGGX(NdotL, roughness);
        return ggx1 * ggx2;
    }

    fn GeometryAttenuationGGXSmith( NdotL:f32,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn colorLinear( colorVector:vec3<f32> ) -> vec3<f32>
    {
        var linearColor = pow(colorVector.rgb, vec3<f32>(2.2));
        return linearColor;
    }

    fn computeFresnelSchlick( NoV:f32 , F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - NoV,0.0,1.0), 5.0);
    }

    fn computeFresnelSchlickRoughness(NoV:f32 , F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - fragData.NoV,0.0,1.0), 5.0);
    }

    fn computeDistributionGGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32) -> f32
    {
        var alpha = roughness * roughness;
        var alpha2 = alpha * alpha; 

        var NdotH = saturate(dot(N, H));
        var NdotH2 = NdotH * NdotH;

        return (alpha2) / (PI * (NdotH2 * (alpha2 - 1.0) + 1.0) * (NdotH2 * (alpha2 - 1.0) + 1.0));
    }

    fn D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        var d = ( NoH * roughness - NoH ) * NoH + 1.0;	// 2 mad
        return roughness / ( PI*d*d );					// 4 mul, 1 rcp
    }

    fn computeGeometryAttenuationGGXSmith( NdotL:f32 ,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn Vis_Smith(  NoL:f32 ,  NoV:f32,  a2:f32 )-> f32
    {
        var Vis_SmithV = NoV + sqrt( NoV * (NoV - NoV * a2) + a2 );
        var Vis_SmithL = NoL + sqrt( NoL * (NoL - NoL * a2) + a2 );
        return rcp( Vis_SmithV * Vis_SmithL );
    }

    fn simpleBRDF( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,L:vec3<f32>,att:f32,lightColor:vec3<f32>,roughness:f32 ,metallic:f32)-> vec3<f32>{
        let H = normalize(V + L);
        let Context:BxDFContext = getContext(N,V,H,L);
        let alpha = roughness ;//pow(roughness,5.0) ;
        let F0 = mix(vec3<f32>(materialUniform.materialF0.rgb), albedo , metallic);
        let D = DistributionGGX( Context.NoH , alpha);
        let G = GeometrySmith(Context.NoV,Context.NoL, alpha );
        let F = FresnelSchlick(Context.VoH, vec3<f32>(F0));
        let specular = ( D * G * F ) / (4.0 * Context.NoV * Context.NoL + 0.001);
        
        // let kS = exp2( (-5.55473 * Context.HoL - 6.98316) * Context.HoL );
        let kS = F ;
        var kd = 1.0 - kS ;
        kd *= 1.0 - metallic ;

        #if USE_SRGB_ALBEDO
            var diffuse = kd ;
        #else 
            var diffuse = kd * (albedo.rgb / PI ) ;
        #endif

        let lightAtt = Context.NoL * lightColor * att ; 
        var diffuseColor = diffuse * lightAtt; 
        // diffuseColor = vec3f(0.0) ; 
        var specularColor = specular * lightAtt; 
        var col = (diffuseColor + specularColor ) ;
        return (col.rgb) ;
    }

    fn getSpecularDominantDir (  N : vec3<f32> , R : vec3<f32> , roughness : f32 ) -> vec3<f32>
    {
        var smoothness = saturate (1.0 - roughness );
        var lerpFactor = smoothness * ( sqrt ( smoothness ) + roughness );
        // The result is not normalized as we fetch in a cubemap
        return mix (N, R, lerpFactor );
    }

    fn approximateSpecularIBL( specularColor:vec3<f32> , roughness:f32 , R:vec3<f32> , NoV:f32 ) -> vec3<f32> {
       
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        fragData.EnvColor = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        // var prefilteredColor: vec3<f32> = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        fragData.EnvColor = globalUniform.skyExposure * (fragData.EnvColor);
        var envBRDF = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2<f32>(NoV, roughness) , 0.0 ) ;
        return fragData.EnvColor * (specularColor.rgb * envBRDF.x + saturate( 50.0 * specularColor.g ) * envBRDF.y) ;
    }

    fn fresnel_coat(n:vec3<f32>,v:vec3<f32>,ior:f32) -> f32 {
        var f0 = (1.0-ior)/(1.0+ior);
        f0 = f0 * f0  ;
        let fr = pow((f0 + (1.0 - f0)*(1.0 - abs( max(dot(n,v),0.0) ))) , 5.0 ) ;  
        return fr ;
    }

    fn reflectEnvMap(n:vec3<f32> , v:vec3<f32> , roughness:f32) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(envMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var prefilteredColor: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(envMap, envMapSampler, R , mip ).rgb);
        prefilteredColor = LinearToGammaSpace(prefilteredColor);
        return prefilteredColor ;
    }

    fn Specular_D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        let a2 = roughness * roughness ;
        let f = (NoH * a2 - NoH) * NoH + 1.0;
        return a2 / (PI * f * f) ;
    }

    fn V_Kelemen( LoH : f32 ) -> f32 {
        return 0.25 / (LoH * LoH);
    }

    fn F_Schlick( f0:vec3<f32> ,  f90 : f32 ,  VoH : f32 ) -> vec3<f32> {
        return f0 + (f90 - f0) * pow(1.0 - VoH,5.0);
    }

    fn F_Schlick2(  SpecularColor:vec3<f32>,  VoH :f32 )-> vec3<f32> {
        var Fc = pow5( 1.0 - VoH );
        let rt = clamp(50.0 * SpecularColor.g,0.0,1.0) ;
        return rt * Fc + (1.0 - Fc) * SpecularColor;
    }

    fn oneMinusReflectivity ( metallic : f32 , F0:f32 ) -> f32 {
        let range = 1.0 - F0;
        return range - metallic * range;
    }

    //https://google.github.io/filament/Filament.html materialsystem/clearcoatmodel/clearcoatparameterization
    fn CoatSpecular_brdf( f:vec3<f32>, s:vec3<f32>, n:vec3<f32> , v:vec3<f32> , l:vec3<f32> , att:f32 , layer :vec3<f32> , clearcoatRoughnessFactor:f32 ) -> vec3<f32> {
        let H = normalize(v + l); 
        let VdotNc = max(dot(v,n),0.0);
        let LdotNc = max(dot(l,n),0.0);
        let NoH = max(dot(n,H),0.0);
        let LoH = saturate(dot(l, H))  ;
        let NoL = max(dot(n,l),0.0);

        let Fd = f ; 
        let Fr = s ; 

        let factor = clamp(clearcoatRoughnessFactor,0.089,1.0);
        let clearCoatRoughness = factor * factor ;

        let Dc = D_GGX( NoH , factor ) ;
        let Vc = V_Kelemen( LoH ) * NoL ;
        let Fc = F_Schlick(vec3<f32>(0.04), 2.0 , LoH); 
        let Frc = (Dc * Vc) * Fc ;
        // return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) * ( 0.5 + NoL * 0.5 ) ;
        return vec3<f32>(Frc) ;
    }

    #if USE_CLEARCOAT
    fn approximate_coating(base:vec3<f32> , clearColor: vec3<f32>, n:vec3<f32> , v:vec3<f32> , light:LightData , clearcoatRoughnessFactor:f32 ) -> vec3<f32> {
        let factor = clamp(clearcoatRoughnessFactor,0.084,1.0);
        var clearcoatAlpha = factor * factor + fragData.ClearcoatRoughness;

        // var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
        var att = light.intensity / LUMEN ;
        let l = light.direction ;
   
        let NdotV = max(dot(n,v),0.0);
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        // let mip = roughnessToMipmapLevel(clearcoatAlpha,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var envIBL: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, R , MAX_REFLECTION_LOD * clearcoatRoughnessFactor ).rgb) ;
        // envIBL = LinearToGammaSpace(envIBL);

        let clearCoat = materialUniform.clearcoatFactor ;
        // let f = FresnelSchlickRoughness( max(dot(n,v),0.0) , vec3<f32>(0.0) , clearcoatAlpha ) ;
        let clearcoat_brdf =  CoatSpecular_brdf( vec3<f32>(0.04) , vec3<f32>( 0.04 ) , n , v , -l , att , vec3<f32>( 0.04 ) , factor ) ;

        // return clearcoat_brdf;+ fragData.ClearcoatRoughness 
        return mix(base, clearcoat_brdf,materialUniform.clearcoatWeight ) ;
    }
    #endif
   

    fn EnvBRDF( SpecularColor : vec3f , Roughness : f32 , NoV : f32) -> vec3f
    {
        // brdflutMap, brdflutMapSampler
        var AB = textureSampleLevel( brdflutMap, brdflutMapSampler, vec2f( NoV, Roughness ), 0.0 ).rg;
        var GF = SpecularColor * AB.x + saturate( 50.0 * SpecularColor.g ) * AB.y;
        return GF;
    }

    fn IBLEnv( V:vec3f , N:vec3f , Roughness : f32) -> vec3f 
    {
        let NdotV = max(dot(N,V),0.0);
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap));

        let mip = roughnessToMipmapLevel(Roughness,MAX_REFLECTION_LOD);

        let R = 2.0 * dot( V , N ) * N - V ;
        var envIBL: vec3<f32> = textureSampleLevel(prefilterMap, prefilterMapSampler, R , mip ).rgb ;
        return envIBL;
    }
`,Uw=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = clamp( pow(ORI_ShadingInput.AmbientOcclusion,materialUniform.ao) , 0.0 , 1.0 ) ; 
      fragData.Roughness = clamp((ORI_ShadingInput.Roughness),0.003,1.0) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      let viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz) ;
      fragData.V = viewDir ;

      #if USE_TANGENT
        fragData.T = ORI_VertexVarying.TANGENT.xyz * ORI_VertexVarying.TANGENT.w ;
      #endif
 
      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R ;//reflect( fragData.V , fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(materialUniform.specularColor.rgb), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.ClearcoatRoughness = materialUniform.clearcoatRoughnessFactor ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughness() * materialUniform.clearcoatRoughnessFactor;
      #endif
  }

  fn BxDFShading(){
      initFragData();

      var irradiance = vec3<f32>(0.0) ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
          irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif
      irradiance = LinearToGammaSpace(irradiance.rgb);
      fragData.Irradiance = irradiance.rgb ;


      //***********lighting-PBR part********* 
      var specColor = vec3<f32>(0.0) ;
      let lightIndex = getCluster();
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
          let light = getLight(i32(i));
          switch (light.lightType) {
            case PointLightType: {
              specColor += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic,light) ;
              break;
            }
            case DirectLightType: {
              specColor += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness ,fragData.Metallic, light , globalUniform.shadowBias) ;
              break;
            }
            case SpotLightType: {
              specColor += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic , light ) ;
              break;
            }
            default: {
              break;
            }
          }
      }

      fragData.LightChannel = specColor ;

      let sunLight = lightBuffer[0] ;
      //***********lighting-PBR part********* 
      var F = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness);
      var kS = F;
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      let envIBL =  materialUniform.envIntensity * approximateSpecularIBL( F , fragData.Roughness , fragData.R , fragData.NoV ) ;
      fragData.EnvColor = envIBL ;
      //***********indirect-specular part********* 
      
      var surfaceReduction = 1.0/(fragData.Roughness*fragData.Roughness+1.0);   
      var oneMinusReflectivity = oneMinusReflectivity(fragData.Metallic , materialUniform.materialF0.r );
      var grazingTerm = clamp((1.0 - fragData.Roughness ) + (1.0 - oneMinusReflectivity),0.0,1.0);
      var t = pow5(fragData.NoV);
      var fresnelLerp = FresnelLerp(fragData.NoV,fragData.F0.rgb,vec3<f32>(grazingTerm)) ;   
      var iblSpecularResult = surfaceReduction * fragData.EnvColor * fresnelLerp + envIBL;
      iblSpecularResult *= max(sunLight.quadratic,0.05) ;
      //***********indirect-specular part********* 
      
      //***********indirect-ambient part********* 
      var kdLast = (1.0 - 0.04) * (1.0 - fragData.Metallic);    
      //  Dim the edges, there should be more specular reflection at the edges
      var iblDiffuseResult = irradiance * vec3f(kdLast) * fragData.Albedo.rgb ;
      //irradiance
      //***********indirect-ambient part********* 
      var indirectResult = (iblSpecularResult + iblDiffuseResult) * fragData.Ao * max(sunLight.quadratic,0.05);
      // debugOut = vec4f(iblDiffuseResult,1.0);

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      // ORI_FragmentOutput.color = vec4<f32>(ORI_FragmentOutput.color.xyz,fragData.Albedo.a) ;
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
          // ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,1.0,1.0);
      #endif
      
      var color = specColor + indirectResult ;

      var clearCoatColor = vec3<f32>(0.0);
      #if USE_CLEARCOAT
        let clearCoatBaseColor = vec3<f32>(1.0) * materialUniform.baseColor.rgb ;
        let clearNormal = fragData.N ;
        let clearcoatRoughness = fragData.ClearcoatRoughness ;
        let att = sunLight.intensity / LUMEN ;
        let clearCoatLayer = ClearCoat_BRDF( color , materialUniform.clearcoatColor.rgb , materialUniform.ior , clearNormal , -sunLight.direction ,-fragData.V , materialUniform.clearcoatWeight , clearcoatRoughness , att );
        color = vec3<f32>(clearCoatLayer.rgb/fragData.Albedo.a) ; 
      #endif
      
      var retColor = (LinearToGammaSpace(color.rgb));
      retColor += fragData.Emissive.xyz ;
      ORI_FragmentOutput.color = vec4<f32>( retColor.rgb * fragData.Albedo.a ,fragData.Albedo.a) ;
  }

  `,kw=`
    #if USE_CLEARCOAT_ROUGHNESS
    @group(1) @binding(auto)
    var clearCoatRoughnessMapSampler: sampler;
    @group(1) @binding(auto)
    var clearCoatRoughnessMap: texture_2d<f32>;

    fn getClearcoatRoughness() -> f32{
        let clearcoatRoughness = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).r;
        return clearcoatRoughness;
    }
    #else
    fn getClearcoatRoughness() -> f32{
        return 1.0;
    }
    #endif

    #if USE_CLEARCOAT
    fn ClearCoat_BRDF( baseColor:vec3<f32>, clearCoatColor:vec3<f32> , ior:f32 ,N:vec3<f32>, L:vec3<f32> ,  V:vec3<f32> , clearCoatStrength:f32, clearCoatPerceptualRoughness:f32 , att:f32) -> vec3<f32> {
        var factor = clamp(clearCoatPerceptualRoughness, 0.0001, 1.0);
        var clearCoatRoughness = factor * factor;

        let H = normalize(-V + L);
        let R = 2.0 * dot( -V , N ) * N + V ;
        let LoH = dot(L,H);
        let NoV = max(dot(N,-V),0.0);
        let NoL = max(dot(N,L),0.0);
        let NoH = max(dot(N,H),0.00001);

        let Fr = FresnelSchlickRoughness( NoV , vec3<f32>(0.0) , clearCoatRoughness ) ;
        var Fd = clearCoatColor / 3.1415926 ;
        let F0 = IORToF0(ior) ;
        // clear coat BRDF
        var Dc = D_GGX(NoH,clearCoatRoughness);
        var Vc = V_Kelemen(LoH) * NoL;
        var Fc = F_Schlick( vec3<f32>(F0) , 1.0, NoV) * materialUniform.clearcoatFactor;
        var Frc = (Dc * Vc) * Fc;
        // base layer attenuation for energy compensation
        let oneMinusFc  = 1.0 - Fc;
        let brdfSpecular = ((Fd + Fr * oneMinusFc) * oneMinusFc + Frc)  * att ; 
        var iblSpecular = vec3<f32>(brdfSpecular);
        iblSpecular += approximateSpecularIBL(vec3<f32>(1.0),clearCoatRoughness,R, NoV) * Fc ;
        return vec3<f32>(mix(baseColor,iblSpecular,materialUniform.clearcoatWeight));
    }
    #endif
`,zw=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = materialUniform.roughness  ;
        ORI_ShadingInput.Metallic = materialUniform.metallic ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = 1.0 ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

        BxDFShading();
    }
`,Gw=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    // #if USE_ARMC
        // @group(1) @binding(auto)
        // var maskMapSampler: sampler;
        // @group(1) @binding(auto)
        // var maskMap: texture_2d<f32>;
    // #endif

    // #if USE_MR
        @group(1) @binding(auto)
        var maskMapSampler: sampler;
        @group(1) @binding(auto)
        var maskMap: texture_2d<f32>;
    // #endif

    #if USE_AOTEX
        @group(1) @binding(auto)
        var aoMapSampler: sampler;
        @group(1) @binding(auto)
        var aoMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    var<private> debugOut : vec4f = vec4f(0.0) ;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        #if USE_SRGB_ALBEDO
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = gammaToLiner(ORI_ShadingInput.BaseColor.rgb)  ;
            ORI_ShadingInput.BaseColor = vec4<f32>( ORI_ShadingInput.BaseColor * materialUniform.baseColor.rgb, ORI_ShadingInput.BaseColor.w * materialUniform.baseColor.a)  ;
        #else
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = vec4f(gammaToLiner(ORI_ShadingInput.BaseColor.rgb) * materialUniform.baseColor.rgb,ORI_ShadingInput.BaseColor.a)  ;
        #endif

        var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;
       
        #if USE_ALPHA_A
            ORI_ShadingInput.BaseColor.a =  ORI_ShadingInput.BaseColor.a * (maskTex.a) ;
        #endif

        #if USE_ALPHACUT 
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                
                #if USEGBUFFER
                    ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                #endif

                discard;
            }
        #endif

        useShadow();

        var roughnessChannel:f32 = 1.0 ;
        #if USE_ROUGHNESS_A
            roughnessChannel = maskTex.a ;
        #else if USE_ROUGHNESS_R
            roughnessChannel = maskTex.r ;
        #else if USE_ROUGHNESS_G
            roughnessChannel = maskTex.g ;
        #else if USE_ROUGHNESS_B
            roughnessChannel = maskTex.b ;
        #else if USE_ALBEDO_A
            roughnessChannel = ORI_ShadingInput.BaseColor.a ;
        #endif  

        #if USE_SMOOTH
            var roughness = ( 1.0 - roughnessChannel ) * materialUniform.roughness;
            ORI_ShadingInput.Roughness = clamp(roughness , 0.0001 , 1.0);
        #else
            ORI_ShadingInput.Roughness = clamp(roughnessChannel * materialUniform.roughness ,0.0001,1.0);
        #endif 

        var metallicChannel:f32 = 1.0 ;
        #if USE_METALLIC_A
            metallicChannel = maskTex.a ;
        #else if USE_METALLIC_R
            metallicChannel = maskTex.r ;
        #else if USE_METALLIC_G
            metallicChannel = maskTex.g ;
        #else if USE_METALLIC_B
            metallicChannel = maskTex.b ;
        #endif    

        ORI_ShadingInput.Metallic = metallicChannel * materialUniform.metallic ;
   
        var aoChannel:f32 = 1.0 ;
        #if USE_AOTEX
            var aoMap = textureSample(aoMap, aoMapSampler, uv );
            aoChannel = aoMap.g ;
        #else
            #if USE_AO_A
                aoChannel = maskTex.a ;
            #else if USE_AO_R
                aoChannel = maskTex.r ;
            #else if USE_AO_G
                aoChannel = maskTex.g ;
            #else if USE_AO_B
                aoChannel = maskTex.b ;
            #endif  
        #endif

        ORI_ShadingInput.AmbientOcclusion = aoChannel ;
        ORI_ShadingInput.Specular = 1.0 ;

        #if USE_EMISSIVEMAP
            var emissiveMapColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;
            let emissiveColor = materialUniform.emissiveColor.rgb * emissiveMapColor.rgb * materialUniform.emissiveIntensity ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(emissiveColor.rgb,1.0);
        #else
            let emissiveColor = materialUniform.emissiveColor.rgb * materialUniform.emissiveIntensity ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(emissiveColor,1.0);
        #endif


        var Normal = textureSample(normalMap,normalMapSampler,uv).rgb ;
        let normal = unPackRGNormal(Normal,1.0,1.0) ;  
        ORI_ShadingInput.Normal = normal ;

        BxDFShading();

        // ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(normal.rgb),1.0) ;
    }
`,Vw=`
#include "ClusterDebug_frag" 

        fn debugPosition(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,1.0);
        }

        fn debugMeshID(){
            let meshIDColor = u32(round(ORI_VertexVarying.vWorldPos.w) ) ;
            let color = colorSet[ meshIDColor % 9u] ;
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(color.rgb),1.0);
        }

        fn debugNormal(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.Normal.xyz,1.0);
        }

        fn debugUV(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.fragUV0.xy,0.0,1.0);
        }

        fn debugColor(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Albedo.rgb,1.0);
        }

        fn debugDiffuse(){
            ORI_FragmentOutput.color = vec4<f32>( fragData.LightChannel.rgb,1.0);
            // ORI_FragmentOutput.color = vec4<f32>(0.2,0.2,0.2,1.0);
        }

        fn debugAmbient(){
            ORI_FragmentOutput.color = vec4<f32>(vec3f(fragData.Alpha) ,1.0);
        }
        
        fn debugEmissive(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Emissive.rgb,1.0);
        }

        fn debugEnvment(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.EnvColor.rgb,1.0);
        }

        fn debugAo(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Ao),1.0);
        }

        fn debugRoughness(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Roughness),1.0);
        }

        fn debugMetallic(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Metallic),1.0);
        }

        fn debugIrradiance(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Irradiance),1.0);
        }

        fn debugTangent(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.T),1.0);
        }

        fn debugFragmentOut(){
            if(ORI_VertexVarying.fragCoord.x > globalUniform.renderState_split) {
                switch (globalUniform.renderState_right)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugTangent();
                  }
                  case 5: {
                    // debugTangent();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugMeshID();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              } else {
                switch (globalUniform.renderState_left)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugTangent();
                  }
                  case 5: {
                    // debugTangent();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugMeshID();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              }
        }
`,Qw=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
    x:f32,
    y:f32,
    width:f32,
    height:f32,
    };

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) position: vec4<f32>
    };

    @vertex
    fn main(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) index : u32 ) -> VertexOutput {
        const pos = array(
        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
        vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
        );
        const uv = array(
        vec2(1.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0), 
        vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, 0.0),
        );
        let id = u32(index) ;
        var output : VertexOutput;
        output.fragUV = uv[vertexIndex] ;
        output.position = vec4<f32>(pos[vertexIndex] , 0.0, 1.0) ;
        return output ;
    }
`,Hw=`
#include "WorldMatrixUniform"
      #include "GlobalUniform"
   
      struct MaterialUniform {
        x:f32,
        y:f32,
        width:f32,
        height:f32,
      };

      struct VertexOutput {
          @location(auto) fragUV: vec2<f32>,
          @builtin(position) member: vec4<f32>
      };

      @vertex
      fn main(@builtin(instance_index) index : u32,@location(auto) position: vec3<f32>, @location(auto) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        //   let id = u32(index) ;
        //   let worldMatrix = models.matrix[id];
        //   let windowSize = vec2<f32>(globalUniform.windowWidth,globalUniform.windowHeight) ;
        //   let pos = worldMatrix[3].xy ;
        //   let size = vec2<f32>(worldMatrix[0].x,worldMatrix[1].y) / windowSize ;
          let uv = vec2(((TEXCOORD_1.xy * 2.0) - vec2<f32>(1.0))) ;// / windowSize * size - offset ;
          return VertexOutput(TEXCOORD_1, vec4<f32>(uv, 0.0, 1.0));
      }
`,jw=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var color: vec4<f32> = textureSample(baseMap, baseMapSampler, uv );

        return FragmentOutput(color);
    }
`,Ww=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    }; 

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_2d ;

    fn Linear01Depth(  z : f32 ) -> f32
    {
        return 1.0 / (1.0 * z + 5000.0);
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var depth = textureSample(baseMap, baseMapSampler, uv , vec2<i32>(0) ) ;
        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,Yw=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_cube ;

    fn uvToXYZ( face : i32 ,  uv : vec2<f32> ) -> vec3<f32>
    {
        var out : vec3<f32> ;
        if(face == 0){
            out = vec3<f32>( 1.0, uv.y, -uv.x);
        }else if(face == 1){
            out = vec3<f32>( -1.0, uv.y, uv.x);
        }else if(face == 2){
            out = vec3<f32>( uv.x, -1.0, uv.y);
        }else if(face == 3){
            out = vec3<f32>( uv.x,  1.0, -uv.y);
        }else if(face == 4){
            out = vec3<f32>( uv.x, uv.y, 1.0);
        }else{	
            out = vec3<f32>( -uv.x, uv.y, -1.0);
        }
        return out ;
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var ii = 0.16 ;
        var ouv = vec3<f32>(0.0);
        if(uv.x < ii * 6.0){
            ouv = uvToXYZ(5,uv/ii);
        }
        if(uv.x < ii * 5.0){
            ouv = uvToXYZ(4,uv/ii);
        }
        if(uv.x < ii * 4.0){
            ouv = uvToXYZ(3,uv/ii);
        } 
        if(uv.x < ii * 3.0){
            ouv = uvToXYZ(2,uv/ii);
        }
        if(uv.x < ii * 2.0){
            ouv = uvToXYZ(1,uv/ii);
        }
        if(uv.x < ii * 1.0){
            ouv = uvToXYZ(0,uv/ii);
        }
        var depth = textureSample(baseMap, baseMapSampler, ouv ) ;
        depth = 1.0 - depth; 

        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,hg=`
    fn getHDRColor(color: vec3<f32>, exposure: f32) -> vec3 < f32 > {
        // var newColor = color * (  1.0 / 255.0 ) ;
        return color * pow(2.4, exposure) ;
    }

    fn lambda2rgb(lambda : f32) -> vec3 < f32 > {
        let ultraviolet = 400.0;
        let infrared = 700.0;

        var a = (lambda - ultraviolet) / (infrared - ultraviolet);
        let c = 10.0;
        var b = vec3<f32>(a) - vec3<f32>(0.75, 0.5, 0.25);
        return max((1.0 - c * b * b), vec3<f32>(0.0));
    }

    fn CEToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        return 1.0 - exp(-adapted_lum * color);
    }

    fn ACESToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        let A = 2.51;
        let B = 0.03;
        let C = 2.43;
        let D = 0.59;
        let E = 0.14;

        var color2 = color * adapted_lum;
        color2 = (color2 * (A * color2 + B)) / (color2 * (C * color2 + D) + E);
        return color2;
    }

    fn gammaToLiner(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 2.4;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma4(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 0.416666667;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma3(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 0.416666667;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3 < f32 > {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r, 0.416666667);
        linRGB.g = pow(linRGB.g, 0.416666667);
        linRGB.b = pow(linRGB.b, 0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    var<private>sRGB_2_LMS_MAT: mat3x3<f32> = mat3x3<f32>(
        17.8824, 43.5161, 4.1193,
        3.4557, 27.1554, 3.8671,
        0.02996, 0.18431, 1.4670,
    );

    var<private>LMS_2_sRGB_MAT: mat3x3<f32> = mat3x3<f32>(
        0.0809, -0.1305, 0.1167,
        -0.0102, 0.0540, -0.1136,
        -0.0003, -0.0041, 0.6935,
    );

    fn sRGB_2_LMS(RGB: vec3<f32>) -> vec3<f32>
    {
        return sRGB_2_LMS_MAT * RGB;
    }

    fn LMS_2_sRGB(LMS: vec3<f32>) -> vec3<f32>
    {
        return LMS_2_sRGB_MAT * LMS;
    }

    fn LinearToSrgbBranchless(lin: vec3<f32>) -> vec3<f32>
    {
        var lin2 = max(vec3<f32>(6.10352e-5), lin);
        return min(lin2 * 12.92, pow(max(lin2, vec3<f32>(0.00313067)), vec3<f32>(0.416666667)) * vec3<f32>(1.055) - vec3<f32>(0.055));
    }

    fn sRGBToLinear(color : vec3<f32>) -> vec3<f32>
    {
        let color2 = max(vec3<f32>(6.10352e-5), color);
        let c = 0.04045;
        if (color2.r > c && color2.g > c && color2.b > c) {
            return pow(color2 * (1.0 / 1.055) + 0.0521327, vec3<f32>(2.4));
        } else {
            return color2 * (1.0 / 12.92);
        }
    }

    fn BlendNormalRNM( n1:vec3f,  n2:vec3f) -> vec3f
	{
		let t = n1.xyz + vec3f(0.0, 0.0, 1.0);
		let u = n2.xyz * vec3f(-1.0, -1.0, 1.0);
		let r = (t / t.z) * dot(t, u) - u;
		return r;
	}

//     fn ReorientedBlendNormal(){
//         vec3 t = texture(baseMap,   uv).xyz * vec3( 2.0,  2.0, 2.0) + vec3(-1.0, -1.0,  0.0);
// vec3 u = texture(detailMap, uv).xyz * vec3(-2.0, -2.0, 2.0) + vec3( 1.0,  1.0, -1.0);
// vec3 r = normalize(t * dot(t, u) - u * t.z);
// return r;
//     }

//     fn UDNBlendNormal(){
    // vec3 t = texture(baseMap,   uv).xyz * 2.0 - 1.0;
    // vec3 u = texture(detailMap, uv).xyz * 2.0 - 1.0;
    // vec3 r = normalize(t.xy + u.xy, t.z);
    // return r;
//     }
`,$w=`
    fn madfrac(A:f32, B:f32)-> f32 {
        return A*B-floor(A*B) ;
    }

    fn sampleRandomDir(count:u32,SAMPLE_COUNT:u32) -> vec3<f32>{
    var ray_dir = sphericalFibonacci(f32((count)), f32(SAMPLE_COUNT) );
    return normalize(ray_dir) ;
    }

    fn sphericalFibonacci( i : f32 ,  n : f32 ) -> vec3<f32>{
        const PHI = sqrt(5.0) * 0.5 + 0.5;
        let phi = 2.0 * PI * madfrac(i, PHI - 1);
        let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);
        let sinTheta = sqrt(saturate(1.0 - cosTheta*cosTheta));

        return vec3<f32>(
            cos(phi) * sinTheta,
            sin(phi) * sinTheta,
            cosTheta);

    }
`,Kw=`
    #include "MathShader"

    fn buildMatrix3x3() -> mat3x3<f32>{
        var mat3 = mat3x3<f32>(
            1.0,0.0,0.0,
            0.0,1.0,0.0,
            0.0,0.0,1.0,
        );
        return mat3 ;
    }

    fn buildMatrix4x4() -> mat4x4<f32>{
        var mat4 = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            0.0,0.0,0.0,1.0,
        );
        return mat4 ;
    }

    fn buildRotateXMat3(rad:f32) -> mat3x3<f32>{
        var xrot = mat3x3<f32>(
            1.0,0.0,0.0,
            0.0,cos(rad),-sin(rad),
            0.0,sin(rad),cos(rad)
        );
        return xrot;
    }

    fn buildRotateXMat4(rad:f32,x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var xrot = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,cos(rad),-sin(rad),0.0,
            0.0,sin(rad),cos(rad),0.0,
            x,y,z,1.0,
        );
        return xrot;
    }

    fn buildYRotateXMat4(radY:f32,x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var yRot = mat4x4<f32>(
            cos(radY),0.0,sin(radY),0.0,
            0.0,1.0,0.0,0.0,
            -sin(radY),0.0,cos(radY),0.0,
            x,y,z,1.0,
        );
        return yRot;
    }

    fn buildRotateXYZMat4(radX:f32,radY:f32,radZ:f32,x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var xRot = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,cos(radX),-sin(radX),0.0,
            0.0,sin(radX),cos(radX),0.0,
            0.0,0.0,0.0,1.0,
        );
        var yRot = mat4x4<f32>(
            cos(radY),0.0,sin(radY),0.0,
            0.0,1.0,0.0,0.0,
            -sin(radY),0.0,cos(radY),0.0,
            0.0,0.0,0.0,1.0,
        );
        var zRot = mat4x4<f32>(
            cos(radZ),-sin(radZ),0.0,0.0,
            sin(radZ), cos(radZ),0.0,0.0,
            0.0,0.0,1.0,0.0,
            0.0,0.0,0.0,1.0,
        );
        var fMat = xRot * yRot * zRot ;
        fMat[3].x = x;
        fMat[3].y = y;
        fMat[3].z = z;
        return fMat;
    }

    fn buildRotateYMat3(rad:f32) -> mat3x3<f32>{
        var yrot = mat3x3<f32>(
            cos(rad),0.0,sin(rad),
            0.0,1.0,0.0,
            -sin(rad),0.0,cos(rad)
        );
        return yrot ;
    }

    fn buildRotateZ(rad:f32) -> mat3x3<f32>{
        var zrot = mat3x3<f32>(
            cos(rad),-sin(rad),0.0,
            sin(rad), cos(rad),0.0,
            0.0,0.0,1.0
        );
        return zrot;
    }

    // fn buildRotateXMat4(rad:f32) -> mat4x4<f32>{
    //     var xrot = mat4x4<f32>(
    //         1.0,0.0,0.0,0.0,
    //         0.0,cos(rad),-sin(rad),0.0,
    //         0.0,sin(rad),cos(rad),0.0,
    //         0.0,0.0,0.0,1.0);
    //     return xrot;
    // }

    fn bulidTranslateMat4(x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var trans = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            x,y,z,1.0);
        return trans;
    }

`,qw=`
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox {
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex {
            count:f32,
            start:f32,
            empty0:f32,
            empty1:f32,
    };

    struct ClustersUniform {
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform : ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable : array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer : array<ClusterBox>;
    #endif

    fn getLight( index:i32 ) -> LightData {
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData ;
    }

    fn linearTo01Depth(depth : f32) -> f32 {
        return (globalUniform.far ) * globalUniform.near / fma(depth, globalUniform.near-globalUniform.far, globalUniform.far);
    }

    fn getClusterId3() -> vec3<u32> {
        let z = linearTo01Depth(ORI_VertexVarying.fragCoord.z) ; 

        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(z) * sliceScale + sliceBias, 0.0));

        var screenUV = ORI_VertexVarying.fragCoord.xy / vec2<f32>( globalUniform.windowWidth , globalUniform.windowHeight );
        let i = u32(floor(screenUV.x * clustersUniform.clusterTileX)) ;
        let j = u32(floor(screenUV.y * clustersUniform.clusterTileY) );

        return vec3<u32>(i,j,zTile);
    }

    fn getCluster() -> LightIndex {
        let tile = getClusterId3();
        let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return assignTable[id];
    }

    fn getClusterIndex() -> u32 {
        let tile = getClusterId3();
        let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return id;
    }
`,Xw=`
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"

  struct FHairTransmittanceData{
    bUseBacklit:bool,
    bUseSeparableR:bool,
    bUseLegacyAbsorption:bool
  };
 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = clamp( pow(ORI_ShadingInput.AmbientOcclusion,materialUniform.ao) , 0.0 , 1.0 ) ; 
      fragData.Roughness = ORI_ShadingInput.Roughness ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.Specular = vec3f(materialUniform.specularColor.rgb) ; 
      fragData.N = ORI_ShadingInput.Normal;
      let viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz ) ;
      fragData.V = viewDir ;
      fragData.Ao = materialUniform.ao ;
      #if USE_TANGENT
        fragData.T = ORI_VertexVarying.TANGENT.xyz * ORI_VertexVarying.TANGENT.w ;
      #endif
 
      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R ;//reflect( fragData.V , fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(materialUniform.specularColor.rgb), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;
  }

  

  fn transformHairNormal(normal : vec3<f32>) -> vec3<f32>{
      var face = 1.0 ;
      if(ORI_VertexVarying.face){
          face = 1.0 ;
      }else{
          face = -1.0 ;
      }
      #if USE_TANGENT
        let T = ORI_VertexVarying.TANGENT.xyz;
        let N = ORI_VertexVarying.vWorldNormal ;
        let B = cross(T,N) * ORI_VertexVarying.TANGENT.w * face;
        let mat3 = mat3x3<f32>(T,B,N);
        let n = mat3 * normal;
        return n ;
      #else
        return normal ;
      #endif
  }


  fn Hair_g( B:f32 ,  Theta:f32 ) -> f32
  {
      return exp(-0.5 * pow2(Theta) / (B * B)) / (sqrt(2 * PI) * B);
  }

  fn Hair_F( CosTheta:f32 )-> f32
  {
      let n = 1.55;
      let F0 = pow2((1.0 - n) / (1.0 + n));
      return F0 + (1.0 - F0) * pow5(1.0 - CosTheta);
  }

  fn HairColorToAbsorption( C:vec3f ,  B:f32 ) -> vec3f
  {
      let b2 = B * B;
      let b3 = B * b2;
      let b4 = b2 * b2;
      let b5 = B * b4;
      let D = (5.969 - 0.215 * B + 2.532 * b2 - 10.73 * b3 + 5.574 * b4 + 0.245 * b5);
      return pow2v3(log(C) / D);
  }

  fn Luminance(  LinearColor : vec3f ) -> f32
  {
    return dot( LinearColor, vec3f( 0.3, 0.59, 0.11 ) );
  }

  fn KajiyaKayDiffuseAttenuation( L:vec3f,  V:vec3f,  N:vec3f,  Shadow:f32 ) -> vec3f
  {
    // Use soft Kajiya Kay diffuse attenuation
    var KajiyaDiffuse = 1.0 - abs(dot(N, L));

    var FakeNormal = normalize(V - N * dot(V, N));
    //N = normalize( DiffuseN + FakeNormal * 2 );
    let nN = FakeNormal;

    let BaseColor = fragData.Albedo.rgb / PI ;
    // Hack approximation for multiple scattering.
    var Wrap = 1.0;
    var NoL = saturate((dot(nN, L) + Wrap) / squareF(1.0 + Wrap));
    var DiffuseScatter = (1.0 / PI) * mix(NoL, KajiyaDiffuse, 0.33) * fragData.Metallic;
    var Luma = Luminance(BaseColor);
    var ScatterTint = pow(BaseColor / Luma, vec3f(1.0 - Shadow));
    return sqrt(BaseColor) * DiffuseScatter * ScatterTint;
  }

  fn HairNormal( ID : f32 ) -> vec4f {
      let tangentA = vec4f(0.0,0.0,0.3,1.0);
      let tangentB = vec4f(0.0,0.0,-0.3,1.0);

      let iTangent = mix(tangentA,tangentB,vec4f(ID));
      var tangent = vec4f(0.0);
      #if USE_FLOWER

      #else 
        let tt = vec4f(0.0,-1.0,0.0,1.0);
        tangent = tt + iTangent;
      #endif

      return normalize(tangent) ;
  }

  fn hairShading( light:LightData , sV:vec3f, N:vec3f, Shadow:f32 , HairTransmittance : FHairTransmittanceData ,  InBacklit:f32 ,  Area:f32 ,  Random:vec2f ) -> vec3f{
      var ClampedRoughness = clamp(fragData.Roughness, 1/255.0, 1.0);
      let Backlit	= min(InBacklit, materialUniform.backlit);
      let HairColor = fragData.Albedo.rgb ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var lightAtt = light.intensity  ;

      let V = normalize(sV) ;
      let L = normalize(-light.direction) ;
      let H = normalize(N+L) ;
      var S : vec3f= vec3f(0.0) ;

      var KajiyaKayDiffuseFactor = 1.0;

      let VoL       = dot(V,L);                                                      
      let SinThetaL = clamp(dot(N,L), -1.0, 1.0);
      let SinThetaV = clamp(dot(N,V), -1.0, 1.0);

      var CosThetaD = cos( 0.5 * abs( asinFast( SinThetaV ) - asinFast( SinThetaL ) ) );
      // var CosThetaD = cos( 0.5 * abs( asin( SinThetaV ) - asin( SinThetaL ) ) );
      
      var Lp = L - SinThetaL * N;
      var Vp = V - SinThetaV * N;
      var CosPhi = dot(Lp,Vp) * rsqrt( dot(Lp,Lp) * dot(Vp,Vp) + 1e-4 );
      var CosHalfPhi = sqrt( saturate( 0.5 + 0.5 * CosPhi ) );

      let n = 1.55;
      let n_prime = 1.19 / CosThetaD + 0.36 * CosThetaD;

      let Shift = 0.035;
      var Alpha:array<f32,3> = array<f32,3>(
        -Shift * 2.0,
        Shift,
        Shift * 4.0,
      );

      var B:array<f32,3> =array<f32,3>(
        Area + pow2(ClampedRoughness),
        (Area + pow2(ClampedRoughness) / 2.0),
        Area + pow2(ClampedRoughness) * 2.0,
      );
     
      //S SR
      let sa = sin(Alpha[0]);
      let ca = cos(Alpha[0]);
      var ShiftA = 2.0 * sa * (ca * CosHalfPhi * sqrt(1.0 - SinThetaV * SinThetaV) + sa * SinThetaV);
      var BScale = 1.0;
      if(HairTransmittance.bUseSeparableR){
          BScale = sqrt(2.0) * CosHalfPhi ;
      }
      var Mp_R = Hair_g(B[0] * BScale, SinThetaL + SinThetaV - ShiftA);
      var Np_R = 0.25 * CosHalfPhi;
      var Fp_R = Hair_F(sqrt(saturate(0.5 + 0.5 * (VoL))));
      S += vec3f(Mp_R* Np_R * Fp_R * (fragData.F0 * 2.0)) * mix(1.0, 0.0, saturate(-VoL));
      KajiyaKayDiffuseFactor -= Fp_R;

      //S ST
      var Mp_ST = Hair_g( B[1], SinThetaL + SinThetaV - Alpha[1] );
      var a_ST = 1.0 / n_prime;
      var h_ST = CosHalfPhi * ( 1.0 + a_ST * ( 0.6 - 0.8 * CosPhi ) );
      var f_ST = Hair_F( CosThetaD * sqrt( saturate( 1.0 - h_ST * h_ST ) ) );
      var Fp_ST = pow2(1.0 - f_ST);
      var Tp_ST : vec3f = vec3f( 0.0 );
      if (HairTransmittance.bUseLegacyAbsorption)
      {
        Tp_ST = pow(HairColor.rgb, vec3f(0.5 * sqrt(1.0 - pow2(h_ST * a_ST)) / CosThetaD));
      }
      else
      {
        let AbsorptionColor = HairColorToAbsorption(HairColor.rgb,0.3);
        Tp_ST = exp(-AbsorptionColor * 2.0 * abs(1.0 - pow2(h_ST * a_ST) / CosThetaD));
      }
     
      var Np_ST = exp( -3.65 * CosPhi - 3.98 );
      
      S += Mp_ST * Np_ST * Fp_ST * Tp_ST * Backlit;
      KajiyaKayDiffuseFactor -= Fp_ST;

      //S TRT
      var Mp_TRT = Hair_g( B[2], SinThetaL + SinThetaV - Alpha[2] );
      
      //float h = 0.75;
      var f_TRT = Hair_F( CosThetaD * 0.5 );
      var Fp_TRT = pow2(1.0 - f_TRT) * f_TRT;
      var Tp_TRT = pow( HairColor.rgb , vec3f(0.8 / CosThetaD) );
      var Np_TRT = exp( 17.0 * CosPhi - 16.78 );
      
      S += Mp_TRT * Np_TRT * Fp_TRT * Tp_TRT;
      KajiyaKayDiffuseFactor -= Fp_TRT;
      // S = vec3f((KajiyaKayDiffuseFactor));
     
      S += KajiyaKayDiffuseAttenuation(L,V,N,Shadow) ;//* saturate(KajiyaKayDiffuseFactor);
      // S = vec3f((KajiyaKayDiffuseFactor));
      S = -min(-S, vec3f(0.0));
      return 2.0 * PI *vec3f(S) * (lightAtt / LUMEN) ;
  }

  fn BSSSRDFShading(){
    initFragData();

    var irradiance = vec3<f32>(0.0) ;
    #if USEGI
        irradiance += getIrradiance().rgb ;
    #else
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
    #endif
    irradiance = ORI_ShadingInput.SSS + (irradiance.rgb);
    fragData.Irradiance = irradiance.rgb ;

    //***********lighting-PBR part********* 
    var specColor = vec3<f32>(0.0) ;
    let lightIndex = getCluster();
    let start = max(lightIndex.start, 0.0);
    let count = max(lightIndex.count, 0.0);
    let end = max(start + count , 0.0);
    for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
    {
        let light = getLight(i32(i));
        switch (light.lightType) {
          case PointLightType: {
            // specColor += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic,light) ;
          }
          case DirectLightType: {
              // specColor += directHairLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness ,fragData.Metallic, light , globalUniform.shadowBias) ;
              var fHairTransmittanceData : FHairTransmittanceData ;
              fHairTransmittanceData.bUseBacklit = true ;
              fHairTransmittanceData.bUseSeparableR = true ;
              fHairTransmittanceData.bUseLegacyAbsorption = false ;

              //use shadow visible backlit
              // var shadow = 0.0 ;
              // if(light.castShadow>=0){
              //     #if USE_SHADOWMAPING
              //       shadow = shadowStrut.directShadowVisibility[i32(light.castShadow)] ; 
              //     #endif
              // }

              specColor = hairShading(light,fragData.V, ORI_ShadingInput.HairNormal , 1.0 ,fHairTransmittanceData,1.0,materialUniform.area,vec2f(0.0));
          }
          case SpotLightType: {
            // specColor += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic , light ) ;
          }
          default: {
          }
        }
    }


    let sunLight = lightBuffer[0] ;
    //***********lighting-PBR part********* 
    var F = FresnelSchlickRoughness(fragData.NoV, fragData.F0.rgb , fragData.Roughness);
    var kS = F;
    // var kD = vec3(1.0) - kS;
    // kD = kD * (1.0 - fragData.Metallic);
    let envIBL =  materialUniform.envIntensity * IBLEnv(fragData.V ,fragData.N ,fragData.Roughness ) ;
    fragData.EnvColor = envIBL ;
    // fragData.Specular = envIBL ;
    //***********indirect-specular part********* 
    
    var iblSpecularResult = fragData.Metallic * fragData.EnvColor * materialUniform.specularColor.rgb ;
    //***********indirect-specular part********* 
    
    //***********indirect-ambient part********* 
    var kdLast = (1.0 - fragData.F0.r) * (1.0 - fragData.Metallic);    
    var iblDiffuseResult = irradiance * kdLast * fragData.Albedo.rgb * (vec3(1.0) - kS) ;
    //irradiance
    //***********indirect-ambient part********* 
    var indirectResult = (iblSpecularResult + iblDiffuseResult * max(sunLight.quadratic,0.05) ) * fragData.Ao ;
    fragData.LightChannel = specColor ;

    // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
    #if USEGBUFFER
        var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
        ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
        ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
    #endif
    
    #if USE_WORLDPOS
        ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
    #endif
  
    let finalColor =  LinearToGammaSpace(vec3f(specColor + indirectResult) ) ;
    ORI_FragmentOutput.color = vec4<f32>( finalColor ,fragData.Albedo.a) ;
    // ORI_FragmentOutput.color = vec4<f32>( vec3f(specColor) ,fragData.Albedo.a) ;
}

  `,Jw=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = clamp( pow(ORI_ShadingInput.AmbientOcclusion,materialUniform.ao) , 0.0 , 1.0 ) ; 
      fragData.Roughness = clamp((ORI_ShadingInput.Roughness),0.003,1.0) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      let viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz) ;
      fragData.V = viewDir ;
      #if USE_TANGENT
        fragData.T = ORI_VertexVarying.TANGENT.xyz ;
      #endif
 
      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R ;//reflect( fragData.V , fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(materialUniform.specularColor.rgb), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.ClearcoatRoughness = materialUniform.clearcoatRoughnessFactor ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughness() * materialUniform.clearcoatRoughnessFactor;
      #endif
  }

  fn BsDFShading(){
      initFragData();

      var irradiance = vec3<f32>(0.0) ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
          irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif
      irradiance = ORI_ShadingInput.SSS + LinearToGammaSpace(irradiance.rgb);
      fragData.Irradiance = irradiance.rgb ;

   

      //***********lighting-PBR part********* 
      var specColor = vec3<f32>(0.0) ;
      let lightIndex = getCluster();
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
          let light = getLight(i32(i));
          switch (light.lightType) {
            case PointLightType: {
              specColor += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic,light) ;
            }
            case DirectLightType: {
              specColor += directDulLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness ,fragData.Metallic, light , globalUniform.shadowBias) ;
            }
            case SpotLightType: {
              specColor += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic , light ) ;
            }
            default: {
            }
          }
      }


      fragData.LightChannel = specColor ;

      let sunLight = lightBuffer[0] ;
      //***********lighting-PBR part********* 
      var F = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness);
      var kS = F;
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      let envIBL =  materialUniform.envIntensity * approximateSpecularIBL( F , fragData.Roughness , fragData.R , fragData.NoV ) ;
      fragData.EnvColor = envIBL ;
      //***********indirect-specular part********* 
      
      var surfaceReduction = 1.0/(fragData.Roughness*fragData.Roughness+1.0);   
      var oneMinusReflectivity = oneMinusReflectivity(fragData.Metallic , materialUniform.materialF0.r );
      var grazingTerm = clamp((1.0 - fragData.Roughness ) + (1.0 - oneMinusReflectivity),0.0,1.0);
      var t = pow5(fragData.NoV);
      var fresnelLerp = FresnelLerp(fragData.NoV,fragData.F0.rgb,vec3<f32>(grazingTerm)) ;   
      var iblSpecularResult = surfaceReduction * fragData.EnvColor * fresnelLerp + envIBL;
      iblSpecularResult *= max(sunLight.quadratic,0.05) ;
      //***********indirect-specular part********* 
      
      //***********indirect-ambient part********* 
      var kdLast = (1.0 - fragData.F0.r) * (1.0 - fragData.Metallic);    
      //  Dim the edges, there should be more specular reflection at the edges
      var iblDiffuseResult = irradiance * 2.0 * kdLast * fragData.Albedo.rgb * (vec3(1.0) - kS) ;
      //irradiance
      //***********indirect-ambient part********* 
      var indirectResult = (iblSpecularResult + iblDiffuseResult) * fragData.Ao * max(sunLight.quadratic,0.05);
      // debugOut = vec4f(iblDiffuseResult,1.0);

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
      #endif
      
      var color = specColor + indirectResult ;
      color += fragData.Emissive.xyz ;

      var clearCoatColor = vec3<f32>(0.0);
      #if USE_CLEARCOAT
        let clearCoatBaseColor = vec3<f32>(1.0) * materialUniform.baseColor.rgb ;
        let clearNormal = fragData.N ;
        let clearcoatRoughness = fragData.ClearcoatRoughness ;
        let att = sunLight.intensity / LUMEN ;
        let clearCoatLayer = ClearCoat_BRDF( color , materialUniform.clearcoatColor.rgb , materialUniform.ior , clearNormal , -sunLight.direction ,-fragData.V , materialUniform.clearcoatWeight , clearcoatRoughness , att );
        color = vec3<f32>(clearCoatLayer.rgb/fragData.Albedo.a) ; 
      #endif
      
      let retColor = (LinearToGammaSpace(color.rgb));
      ORI_FragmentOutput.color = vec4<f32>( retColor ,fragData.Albedo.a) ;
  }

  `,Zw=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
            transformUV1:vec4<f32>,
            transformUV2:vec4<f32>,
            baseColor: vec4<f32>,
            alphaCutoff: f32,
        };
    #endif

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
        let color = textureSample(baseMap,baseMapSampler,uv) ;
        if(color.w < 0.5){
            discard ;
        }
        
        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        
        UnLit();

        // ORI_FragmentOutput.color = vec4<f32>( 1.0,0.0,0.0,1.0) ;
    }
`,A4=`
    #include "Common_vert"
    #include "Common_frag"
    #include "ClusterLight"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
        let baseColor = textureSample(baseMap,baseMapSampler,uv) ;
        if(baseColor.w < 0.5){
            discard ;
        }

        var lightColor = vec4<f32>(0.0);
        let lightIndex = getCluster();
        let start = max(lightIndex.start, 0.0);
        let count = max(lightIndex.count, 0.0);
        let end = max(start + count , 0.0);
        for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
        {
          let light = getLight(i32(i));
  
          switch (light.lightType) {
            case PointLightType: {
            }
            case DirectLightType: {
                var normal = ORI_VertexVarying.vWorldNormal ;
                let intensity = (light.intensity/10.0);
                let att = max(dot(normal,-light.direction),0.0) * intensity ;
                lightColor += baseColor * att * 0.5 + baseColor * 0.5 ; 
                // lightColor = baseColor * 0.5; 
            }
            case SpotLightType: {
            }
            default: {
            }
          }
        }
        
        ORI_ShadingInput.BaseColor = lightColor * materialUniform.baseColor ;
        ORI_ShadingInput.BaseColor.w = 1.0 ;
        UnLit();

        // let n = globalUniform.near ;
        // let f = globalUniform.far ;
        // let z = ORI_VertexVarying.fragCoord.z ;
        // ORI_FragmentOutput.out_depth = z * (n/(f-n)) ;
    }
`,e4=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main(@builtin(instance_index) index : u32, @location(auto) position: vec3<f32>, @location(auto) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let id = u32(index);
        let worldMatrix = models.matrix[id];

        let screenPos = vec2(((TEXCOORD_1 * 2.0) - vec2<f32>(1.0))) * 0.5 ; 
        return VertexOutput(TEXCOORD_1, vec4<f32>(screenPos, 0.0, 1.0));
    }
`,t4=`
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix;
    mat4 pvMatrixInv;
    float frame;
    float time;
    float delta;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;

};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;
layout(set = 3, binding = 0) uniform MaterialDataUniform {
    vec4 color;
};

void main() {
        vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
        vec4 colorTexture = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale) * color;
    o_Target = vec4(colorTexture.rgb, colorTexture.a);

    if (o_Target.r <= 0.5 && o_Target.g <= 0.5 && o_Target.b <= 0.5) {
        discard;
    }
    // float gamma     = 2.2;
    // float exposure  = 1.0;
    // float pureWhite = 1.0;

    // float luminance = dot(colorTexture.rgb, vec3(0.2126, 0.7152, 0.0722));
    // float mappedLuminance = (luminance * (1.0 + luminance/(pureWhite*pureWhite))) / (1.0 + luminance);

    // // Scale color by ratio of average luminances.
    // vec3 mappedColor = (mappedLuminance / luminance) * colorTexture.rgb;

    // // Gamma correction.
    // o_Target = vec4(pow(o_Target.rgb, vec3(1.0/gamma)), 1.0);
};
`,r4=`
#include "GlobalUniform"

struct uniformData {
    eyesPos: vec3<f32>,
    exposure: f32,
    roughness: f32,
};

struct FragmentOutput {
    @location(auto) o_Position: vec4<f32>,
    @location(auto) o_Normal: vec4<f32>,
    @location(auto) o_Color: vec4<f32>
};

@group(1) @binding(4)
var baseMapSampler: sampler;
@group(1) @binding(5)
var baseMap: texture_cube<f32>;

@group(2) @binding(0)
var<uniform> global: uniformData;

fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
    var linRGB1 = max(linRGB, vec3<f32>(0.0));
    linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
    return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
  }

@fragment
fn main(@location(auto) fragUV: vec2<f32>, @location(auto) vWorldPos: vec4<f32>, @location(auto) vWorldNormal: vec3<f32>) -> FragmentOutput {
    let maxLevel: u32 = textureNumLevels(baseMap);
    let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
    let o_Color = 0.618 * vec4<f32>(LinearToGammaSpace(textureColor) * globalUniform.skyExposure , 1.0);
    let o_Normal = vec4(vWorldNormal,1.0) ;
    let o_Position = vec4<f32>(vWorldPos.xyz,100000.0) ;
    return FragmentOutput(o_Position,o_Normal,o_Color);
}
`,dg=`
#include "Common_vert"
#include "FragmentVarying"
#include "GlobalUniform"

struct FragmentOutput {
    @location(auto) o_Position: vec4<f32>,
    @location(auto) o_Normal: vec4<f32>,
    @location(auto) o_Color: vec4<f32>
};

struct MaterialUniform {
    baseColor: vec4<f32>,
    emissiveColor: vec4<f32>,
    emissiveIntensity: f32,
    normalScale: f32,
    alphaCutoff: f32
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var normalMapSampler: sampler;
@group(1) @binding(auto)
var normalMap: texture_2d<f32>;

@group(1) @binding(auto)
var emissiveMapSampler: sampler;
@group(1) @binding(auto)
var emissiveMap: texture_2d<f32>;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

var<private> ORI_FragmentOutput: FragmentOutput;
var<private> ORI_VertexVarying: FragmentVarying;

@fragment
fn FragMain(vertex_varying:FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    var texColor = textureSample(baseMap, baseMapSampler, ORI_VertexVarying.fragUV0.xy );

    var emissive = textureSample(emissiveMap, emissiveMapSampler, ORI_VertexVarying.fragUV0.xy ).rgb ;
    let intensity = materialUniform.emissiveIntensity * materialUniform.emissiveColor.a ;
    emissive = emissive.rgb * materialUniform.emissiveColor.rgb ;
    emissive = convertToHDRRGB(emissive,intensity);

    if (materialUniform.alphaCutoff-texColor.w > 0.0) {
        discard ;
    }

    var o_Position = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,emissive.r) ;
    var o_Normal = vec4<f32>((ORI_VertexVarying.vWorldNormal.xyz * 0.5 + 0.5 ),emissive.g) ;
    var o_Color = vec4<f32>((texColor * materialUniform.baseColor).rgb , emissive.b )  ;
    return FragmentOutput(o_Position,o_Normal,vec4<f32>(o_Color));
}

fn convertToHDRRGB( color : vec3<f32> , ins:f32 ) -> vec3<f32> {
    var hdrColor = vec3<f32>(0.0,0.0,0.0);
    hdrColor.r = color.r * pow(2.4, ins);
    hdrColor.g = color.g * pow(2.4, ins);
    hdrColor.b = color.b * pow(2.4, ins);
    return hdrColor;
}
`,i4=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(auto) fragUV: vec2<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${nr.getMorphTargetShaderBinding(2,1)}
#endif

#if USE_SKELETON
    ${ou.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
    @builtin(instance_index) index : u32,
    @location(auto) position: vec3<f32>,
    @location(auto) normal: vec3<f32>,
    @location(auto) uv: vec2<f32>,
    @location(auto) TEXCOORD_1: vec2<f32>,

    #if USE_METAHUMAN
        #if USE_TANGENT
            @location(auto) TANGENT: vec4<f32>,
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
                @location(auto) vIndex: f32,
            #else
                @location(auto) vIndex: f32,
            #endif
        #else
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
                @location(auto) vIndex: f32,
            #else
                @location(auto) vIndex: f32,
            #endif
        #endif
    #else
        #if USE_TANGENT
            @location(auto) TANGENT: vec4<f32>,
        #endif

        #if USE_SKELETON
            #if USE_TANGENT
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                #endif
            #else
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                #endif
            #endif
        #endif

        #if USE_MORPHTARGETS
            #if USE_TANGENT
                @location(auto) vIndex: f32,
            #else
                @location(auto) vIndex: f32,
            #endif
        #endif

    #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;
    var vertexNormal = vertex.normal.xyz;

    #if USE_MORPHTARGETS
     ${nr.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;

    return VertexOutput(vertex.uv, vPos );  
}
`,n4=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(auto) fragUV: vec2<f32>,
    @location(auto) worldPos: vec3<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${nr.getMorphTargetShaderBinding(2,1)}
##endif
 
#if USE_SKELETON
    ${ou.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(auto) position: vec3<f32>,
  @location(auto) normal: vec3<f32>,
  @location(auto) uv: vec2<f32>,
  @location(auto) TEXCOORD_1: vec2<f32>,

  
  #if USE_METAHUMAN
    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,
        @location(auto) joints0: vec4<f32>,
        @location(auto) weights0: vec4<f32>,
        @location(auto) joints1: vec4<f32>,
        @location(auto) weights1: vec4<f32>,
        @location(auto) vIndex: f32,
    #else
        @location(auto) joints0: vec4<f32>,
        @location(auto) weights0: vec4<f32>,
        @location(auto) joints1: vec4<f32>,
        @location(auto) weights1: vec4<f32>,
        @location(auto) vIndex: f32,
    #endif
    #else
    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,
    #endif

    #if USE_SKELETON
        #if USE_TANGENT
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
            #endif
        #else
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
            #endif
        #endif
    #endif

    #if USE_MORPHTARGETS
        #if USE_TANGENT
            @location(auto) vIndex: f32,
        #else
            @location(auto) vIndex: f32,
        #endif
    #endif

    #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;

    #if USE_METAHUMAN
        ${nr.getMorphTargetCalcVertex()}
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    #if USE_MORPHTARGETS
        ${nr.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, worldPos.xyz , vPos ); 
}
`,s4=`
    #if USE_ALPHACUT
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
    #endif

    struct FragmentOutput {
      @location(auto) o_Target: vec4<f32>,
      @builtin(frag_depth) out_depth: f32
    };

    struct MaterialUniform {
      lightWorldPos: vec3<f32>,
      cameraFar: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32> , @location(auto) worldPos:vec3<f32> ) -> FragmentOutput {
        var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
        distance = distance / materialUniform.cameraFar ;
        var fragOut:FragmentOutput; 

      #if USE_ALPHACUT
        let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
        if(Albedo.w > 0.5){
          fragOut = FragmentOutput(vec4<f32>(0.0),distance);
        }
      #else
        fragOut = FragmentOutput(vec4<f32>(0.0),distance);
      #endif
      
        return fragOut ;
    }
`,o4=`
    #if USE_ALPHACUT
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
    #endif

    struct FragmentOutput {
      @location(auto) o_Target: vec4<f32>,
      @builtin(frag_depth) out_depth: f32
    };

    struct MaterialUniform {
      lightWorldPos: vec3<f32>,
      cameraFar: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32> , @location(auto) clipPos:vec3<f32> ) -> FragmentOutput {
        // var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
        // distance = distance / materialUniform.cameraFar ;
        var fragOut:FragmentOutput; 

      // #if USE_ALPHACUT
      //   let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
      //   if(Albedo.w > 0.5){
      //     fragOut = FragmentOutput(vec4<f32>(0.0),distance);
      //   }
      // #else
      //   fragOut = FragmentOutput(vec4<f32>(0.0),distance);
      // #endif
      
        return fragOut ;
    }
`,a4=`
    #include "GlobalUniform"
    #include "MathShader"
    struct VertexOutput {
        @location(auto) vID: f32 ,
        @location(auto) vPos: vec3<f32> ,
        @location(auto) vClipPos: vec4<f32> ,
        @builtin(position) member: vec4<f32>
    };

    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;

    var<private> worldMatrix: mat4x4<f32>;

    #if USE_MORPHTARGETS
        ${nr.getMorphTargetShaderBinding(1,0)}
    #endif

    #if USE_SKELETON
        ${ou.groupBindingAndFunctions(1,0)}
    #endif

    @vertex
    fn main(
        @builtin(instance_index) index : u32,
        @location(auto) position: vec3<f32>,
        @location(auto) normal: vec3<f32>,
        @location(auto) uv: vec2<f32>,
        @location(auto) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
            #endif
        #elseif USE_MORPHTARGETS
            @location(auto) vIndex: f32,
        #endif
    #elseif USE_SKELETON
        @location(auto) joints0: vec4<f32>,
        @location(auto) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
            @location(auto) joints1: vec4<f32>,
            @location(auto) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        @location(auto) vIndex: f32,
    #endif
    ) -> VertexOutput {
    worldMatrix = models.matrix[index];

    var vertexPosition = position;
    var vertexNormal = normal;
    #if USE_MORPHTARGETS
        ${nr.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(joints0, weights0, joints1, weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(joints0, weights0);
        #endif
    #endif

        
        let wPos = worldMatrix * vec4<f32>(vertexPosition.xyz, 1.0);
        var fixProjMat = globalUniform.projMat ;
        var rzMatrix : mat4x4<f32> ;
        rzMatrix[0] = vec4<f32>(1.0,0.0,0.0,0.0) ; 
        rzMatrix[1] = vec4<f32>(0.0,1.0,0.0,0.0) ; 
        rzMatrix[2] = vec4<f32>(0.0,0.0,1.0,0.0) ; 
        rzMatrix[3] = vec4<f32>(0.0,0.0,0.0,1.0) ; 
        var clipPos:vec4<f32> = fixProjMat * globalUniform.viewMat * (wPos) ;

        // let d = log2Depth(clipPos.z * (globalUniform.far - globalUniform.near),globalUniform.near,globalUniform.far) ;
        return VertexOutput(f32(index) , wPos.xyz,clipPos, clipPos);
    }

    fn depthToLinear01(depth:f32) -> f32 {
        let a = 1.0 / (globalUniform.near - globalUniform.far);
        return (globalUniform.near*globalUniform.far*a) / (depth + globalUniform.far * a) ;
    }
`,u4=`
    #include "GlobalUniform"
    #include "MathShader"
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>,
        @builtin(frag_depth) out_depth: f32
    };
   

    @fragment
    fn main(@location(auto) vID: f32, @location(auto) vPos:vec3<f32> ,  @location(auto) vClipPos: vec4<f32> ,  @builtin(position) fragCoord : vec4<f32>) -> FragmentOutput {
        var op = vec4<f32>( vPos, vID);
        let d = log2Depth(fragCoord.z+0.00001,globalUniform.near,globalUniform.far);
        return FragmentOutput(op,d);
    }
`;class CA{static init(){CA.register("MathShader",mw),CA.register("FastMathShader",xw),CA.register("MatrixShader",Kw),CA.register("GlobalUniform",$3),CA.register("WorldMatrixUniform",K3),CA.register("NormalMap_frag",Ow),CA.register("LightingFunction_frag",gw),CA.register("PhysicMaterialUniform_frag",yw),CA.register("UnLitMaterialUniform_frag",Ew),CA.register("VideoUniform_frag",Sw),CA.register("InstanceUniform",Dw),CA.register("Inline_vert",ww),CA.register("VertexAttributes_vert",_w),CA.register("Common_vert",Iw),CA.register("Common_frag",bw),CA.register("FragmentVarying",Mw),CA.register("ColorPassFragmentOutput",q3),CA.register("ClusterLight",qw),CA.register("ShadingInput",Rw),CA.register("IESProfiles_frag",Pw),CA.register("ShadowMapping_frag",Fw),CA.register("Irradiance_frag",Nw),CA.register("IrradianceVolumeData_frag",vw),CA.register("BrdfLut_frag",Bw),CA.register("EnvMap_frag",Tw),CA.register("ColorUtil_frag",hg),CA.register("ColorUtil",hg),CA.register("BRDF_frag",Lw),CA.register("Hair_frag",Xw),CA.register("BxDF_frag",Uw),CA.register("BsDF_frag",Jw),CA.register("UnLit_frag",Cw),CA.register("UnLit",Zw),CA.register("Clearcoat_frag",kw),CA.register("LitShader",zw),CA.register("PBRLItShader",Gw),CA.register("ClusterDebug_frag",pw),CA.register("BxdfDebug_frag",Vw),CA.register("GenerayRandomDir",$w),CA.register("Quad_vert_wgsl",Hw),CA.register("Quad_frag_wgsl",jw),CA.register("Quad_depth2d_frag_wgsl",Ww),CA.register("Quad_depthCube_frag_wgsl",Yw),CA.register("sky_vs_frag_wgsl",Jl.sky_vs_frag_wgsl),CA.register("sky_fs_frag_wgsl",Jl.sky_fs_frag_wgsl),CA.register("LambertShader",A4),CA.register("QuadGlsl_vs",e4),CA.register("QuadGlsl_fs",t4),CA.register("SkyGBuffer_fs",r4),CA.register("gbuffer_vs",dg),CA.register("gbuffer_fs",dg),CA.register("castPointShadowMap_vert",n4),CA.register("shadowCastMap_frag",s4),CA.register("shadowCastMap_vert",i4),CA.register("directionShadowCastMap_frag",o4),CA.register("ZPass_shader_vs",a4),CA.register("ZPass_shader_fs",u4)}static register(A,e){CA[A.toLowerCase()]||(CA[A.toLowerCase()]=e)}static getShader(A){return CA[A.toLowerCase()],CA[A.toLowerCase()]}}class ps{static parse(A,e){return A=this.filterComment(A),A=this.parsePreprocess(new fg,A,e),A=this.parseAutoBindingForAllGroup(A),A=this.parseAutoLocationBlock(A),A}static parseComputeShader(A,e){return A=this.filterComment(A),A=this.parsePreprocess(new fg,A,e),A=this.parseAutoBindingForAllGroup(A),A}static parsePreprocess(A,e,t){let i=e.indexOf("#");if(i==-1)return e;let n=e.substring(0,i),s=e.indexOf(`
`,e.lastIndexOf("#")),o=e.substring(i,s),u=e.substring(s);return n+this.parsePreprocessCommand(A,o,t)+u}static parseAutoBindingForAllGroup(A){let e=0,t="",i=new Map;for(;e<A.length;){let n=A.indexOf("@group(",e);if(n==-1){t+=A.substring(e);break}let s=A.indexOf(")",n),o=Number.parseInt(A.substring(n+7,s));n=A.indexOf("@binding(",s),s=A.indexOf(")",n);let u=A.substring(n+9,s);if(t+=A.substring(e,n),u.includes("auto"))if(i.has(o)){let l=i.get(o)+1;t+=`@binding(${l})`,i.set(o,l)}else t+="@binding(0)",i.set(o,0);else{let l=Number.parseInt(u);(!i.has(o)||i.get(o)<l)&&i.set(o,l),t+=`@binding(${u})`}e=s+1}return t}static parseAutoBindingForGroupX(A,e){let t=0,i="",n=new Map;for(;t<A.length;){let s=A.indexOf("@group(",t);if(s==-1){i+=A.substring(t);break}let o=A.indexOf(")",s),u=Number.parseInt(A.substring(s+7,o));if(s=A.indexOf("@binding(",o),o=A.indexOf(")",s),i+=A.substring(t,s),u==e)if(n.has(u)){let l=n.get(u)+1;i+=`@binding(${l})`,n.set(u,l)}else i+="@binding(0)",n.set(u,0);else i+=A.substring(s,o+1);t=o+1}return i}static parseAutoLocation(A){let e=0,t="",i=0;for(;e<A.length;){let n=A.indexOf("@location(",e);if(n==-1){t+=A.substring(e);break}let s=A.indexOf(")",n),o=A.substring(n+10,s);t+=A.substring(e,n),o==="auto"?(t+=`@location(${i})`,i++):t+=A.substring(n,s+1),e=s+1}return t}static parseAutoLocationBlock(A){let e=0,t="";for(;e<A.length;){let i=A.indexOf("@location(",e);if(i==-1){t+=A.substring(e);break}let n=A.indexOf("}",i),s=A.indexOf("->",i);s!=-1&&s<n&&(n=s);let o=A.substring(i,n+1);o=this.parseAutoLocation(o),t+=A.substring(e,i),t+=o,e=n+1}return t}static parsePreprocessCommand(A,e,t){let i="",n=e.split(`
`),s=[!1],o=[!1];for(let u=0;u<n.length;u++){let l=n[u],c=s[s.length-1];if(l.trim().indexOf("#")!=0){c||(i+=l+`
`);continue}let h=l.trim();if(h.indexOf("#if")!=-1){if(c&&s.length>1){s.push(c);continue}let d=h.substring(3).trim();c=!this.parseCondition(d,t),s.push(c),o.push(!c);continue}else if(h.indexOf("#elseif")!=-1||h.indexOf("#else")!=-1&&h.indexOf(" if")!=-1){if(o[o.length-1]){s.pop(),c=!0,s.push(c);continue}if(s.pop(),c=s[s.length-1],c&&s.length>1){s.push(c);continue}let d=h.substring(h.indexOf("if")+2).trim();d==""&&console.error(`preprocess command error, conditions missing: ${h}`),c=!this.parseCondition(d,t),s.push(c),o.push(!c);continue}else if(h.indexOf("#else")!=-1){s.pop(),c&&s.length>1&&s[s.length-1]?s.push(c):s.push(!c);continue}else if(h.indexOf("#endif")!=-1){s.pop(),o.pop();continue}else if(h.indexOf("#include")!=-1){let d="",f=h.charAt(h.length-1);if(f==">"?d=this.extract(h,"<",">"):d=this.extract(h,f,f),!A.includeMap.has(d)){A.includeMap.set(d,!0);let p=CA.getShader(d);if(!p)throw`${h} error: '${d}' not found`;p=this.filterComment(p),p=this.parsePreprocess(A,p,t),i+=p+`\r
`}continue}else if(h.indexOf("#define ")!=-1){let d=h.substring(h.indexOf("#define ")+8).trim(),f=d.indexOf(" "),p=d,y="";f!=-1&&(p=d.substring(0,f).trim(),y=d.substring(f+1).trim()),t[p]=y;continue}else throw"nonsupport: "+h}return i}static parseCondition(A,e){let t=e[A];return t==null?!1:t==!0||t!=0}static filterComment(A){let e="",t=!0,i=!0;for(let n=0;n<A.length;){let s=t?A.indexOf("//",n):-1,o=i?A.indexOf("/*",n):-1;if(s==-1&&o==-1){e+=A.substring(n);break}t=s!=-1,i=o!=-1,s!=-1&&o!=-1&&(s<o?o=-1:s=-1),s!=-1?(o=A.indexOf(`
`,s),e+=A.substring(n,s),n=o!=-1?o:A.length):o!=-1&&(s=A.indexOf("*/",o),e+=A.substring(n,o),n=s+2)}return e}static extract(A,e,t){let i=A.indexOf(e)+e.length,n=A.indexOf(t,i);return A.substring(i,n).trim()}}class fg{constructor(){a(this,"includeMap",new Map)}}const So=class So{constructor(){a(this,"attributes",[]);a(this,"vs_variables",[]);a(this,"fs_variables",[]);a(this,"cs_variables",[]);a(this,"groups",[]);a(this,"variables",{});a(this,"useSplit",!1)}static parser(A,e){e.shaderReflection||(e.shaderReflection=new So),A.indexOf("@vertex")!=-1?(e.shaderReflection.attributes=this.parserVertexOld(A),e.shaderReflection.vs_variables=this.parserVariables(A)):A.indexOf("@fragment")!=-1?e.shaderReflection.fs_variables=this.parserVariables(A):A.indexOf("@compute")!=-1&&(e.shaderReflection.cs_variables=this.parserVariables(A))}static parser2(A,e){e.shaderReflection||(e.shaderReflection=new So);let t=e.shaderReflection;A.indexOf("@vertex")!=-1?(t.attributes=this.parserVertex(e.vsEntryPoint,A),t.vs_variables=this.parserVariables(A)):A.indexOf("@fragment")!=-1?t.fs_variables=this.parserVariables(A):A.indexOf("@compute")!=-1&&(t.cs_variables=this.parserVariables(A)),A.indexOf("splitTexture")!=-1&&(t.useSplit=!0)}static combineShaderReflectionVarInfo(A,e){for(const t of e){A.groups[t.group]||(A.groups[t.group]=[]);let i=t;if(A.groups[t.group][t.binding]){let n=A.groups[t.group][t.binding],s=t;if(n.dataFields)for(let o=0;o<n.dataFields.length;o++)n.dataFields[o];if(s.dataFields)for(let o=0;o<s.dataFields.length;o++)s.dataFields[o]}A.groups[t.group][t.binding]=i,A.variables[t.varName]=i}}static final(A){let e=A.shaderReflection;this._shaderReflectionMap.set(A.shaderVariant,e),this.combineShaderReflectionVarInfo(e,e.vs_variables),this.combineShaderReflectionVarInfo(e,e.fs_variables)}static getShaderReflection2(A,e){let t=ps.parse(A,e.defineValue);So.parser2(t,e)}static poolGetReflection(A){return this._shaderReflectionMap.get(A)}static genShaderVar(A){let e=`${A.vs}${A.fs}${A.compute}`;e+="|";for(const t in A.uniforms)e+=t+":";e+="|";for(const t in A.constValues)e+=t+":",e+=A.constValues[t];e+="|";for(const t in A.defines)e+=t+":",e+=A.defines[t];e+="|";for(const t in A.shaderState)e+=t+":",e+=A.shaderState[t]+";";return e}static genShaderVariant(A){let e="";for(const t in A.uniforms)e+=t+":";e+="|";for(const t in A.constValues)e+=t+":",e+=A.constValues[t];e+="|";for(const t in A.defineValue)e+=t+":",e+=A.defineValue[t];return e}static genRenderShaderVariant(A){let e=`RenderShader(${A.vsName},${A.fsName})`;e+="|",e+=this.genShaderVariant(A),e+="|";for(const t in A.shaderState)e+=t+":",e+=A.shaderState[t]+";";return e}static genComputeShaderVariant(A){let e=`ComputeShader(${A.instanceID})`;return e+="|",e+=this.genShaderVariant(A),e}combine(A){let e=A.shaderReflection,t=A.defines,i={};for(let s=0;s<this.attributes.length;s++){let o=this.attributes[s];t[o.name]&&(i[o.name]=o)}let n=e.attributes.length;for(let s=0;s<n;s++){const o=e.attributes[s];if(!i[o.name])this.attributes.push(o);else{let u=i[o.name];u.location==o.location&&u.name!=o.name&&console.log("location must same!")}}}static parserVariables(A){let e=0,t=[];for(;e<A.length;){let i=A.indexOf("@group(",e);if(i<0)break;let n=A.indexOf(";",i);e=n;let s=A.substring(i,n),o=this.extract(s,"@group(",")"),u=this.extract(s,"@binding(",")"),l="",c="var";s.indexOf("var<")!=-1?(l=this.extract(s,">",":"),c=this.extract(s,"var<",">").replace(",","-").replaceAll(" ","")):l=this.extract(s,"var",":");let h=s.substring(s.lastIndexOf(":")+1).trim(),d={group:0,binding:0,varType:"",varName:"",dataType:"",dataIsBuiltinType:!0,dataFields:null};d.group=Number.parseInt(o),d.binding=Number.parseInt(u),d.varType=c,d.varName=l,d.dataType=h,d.dataIsBuiltinType=this.isBuiltinTypes(d.dataType),d.dataIsBuiltinType||(d.dataFields=this.parserStructFields(A,d.dataType)),t.push(d)}return t}static extract(A,e,t){let i=A.indexOf(e)+e.length,n=A.indexOf(t,i);return A.substring(i,n).trim()}static isBuiltinTypes(A){switch(A){case"i32":return!0;case"u32":return!0;case"f32":return!0;default:let e=A.indexOf("<");if(e!=-1)switch(A.substring(0,e)){case"vec2":return!0;case"vec3":return!0;case"vec4":return!0;case"mat3":return!0;case"mat4":return!0;case"array":return this.isBuiltinTypes(A.substring(e+1,A.lastIndexOf(">")))}break}return!1}static parserStructFields(A,e){let t=[],i=0;for(;i<A.length;){let n=A.indexOf("struct ",i);if(n<0)break;let s=A.indexOf("{",n);if(i=s,A.substring(n+6,s).trim()===e){n=A.indexOf("{",n),s=A.indexOf("}",n);let o=A.substring(n+1,s).split(",");for(let u of o){let l=u.indexOf(":");if(l!=-1){let c={name:u.substring(0,l).trim(),type:u.substring(l+1).trim()};t.push(c)}}break}}return t}static parserVertexOld(A){let e=[],t=A.split("fn main(")[1].split("->")[0],i=t.split("@");if(i&&i.length>1)for(let s=1;s<i.length;s++){let o=i[s].replace(/\s*$/g,"");o=o.replaceAll(",",""),o=o.replaceAll(`
`,""),o=o.replaceAll("  "," "),this.parserAttribute(o,e)}else{var n=t.split(":")[1];n=n.replaceAll("  ",""),n=n.replaceAll(" ",""),n=n.replaceAll(")",""),n=A.split(`struct ${n}`)[1];let s=n.indexOf("{"),o=n.indexOf("}");n=n.slice(s,o),i=n.split("@");for(let u=1;u<i.length;u++){let l=i[u].replace(/\s*$/g,"");l=l.replaceAll(`
`,""),l=l.split(",")[0],l=l.replaceAll("  "," "),this.parserAttribute(l,e)}}return e}static parserVertex(A,e){let t=[],i=e.split(`fn ${A}(`)[1].split("->")[0],n=i.split("@");if(n&&n.length>1)for(let o=1;o<n.length;o++){let u=n[o].replace(/\s*$/g,"");u=u.replaceAll(",",""),u=u.replaceAll(`
`,""),u=u.replaceAll("  "," "),this.parserAttribute(u,t)}else{var s=i.split(":")[1];s=s.replaceAll("  ",""),s=s.replaceAll(" ",""),s=s.replaceAll(")",""),s=e.split(`struct ${s}`)[1];let o=s.indexOf("{"),u=s.indexOf("}");s=s.slice(o,u),n=s.split("@");for(let l=1;l<n.length;l++){let c=n[l].replace(/\s*$/g,"");c=c.replaceAll(`
`,""),c=c.split(",")[0],c=c.replaceAll("  "," "),this.parserAttribute(c,t)}}return t}static parserAttribute(A,e){let t={name:"",group:0,location:0,type:"",valueType:"",value:0,size:0,format:"float32"};if(A.indexOf("builtin")!=-1){t.type="builtin";var i=A.match(/\((.+?)\)/g)[0];i=A.match(/\((.+?)\)/g)[0],i=i.replace("(",""),i=i.replaceAll(")",""),t.location=parseInt(i);let n=A.split(":");t.name=n[0].split(" ")[1],t.name=t.name.replaceAll("  "," "),t.name=t.name.replaceAll(" ",""),t.valueType=n[1],t.valueType=t.valueType.replaceAll("  "," "),t.valueType=t.valueType.replaceAll(" ",""),t.valueType=t.valueType.replaceAll("\r",""),t.valueType=t.valueType.replaceAll(")",""),t.valueType=t.valueType.replaceAll(")",""),t.size=xs[t.valueType],e.push(t)}else if(A.indexOf("location")!=-1){t.type="location";var i=A.match(/\((.+?)\)/g)[0];i=A.match(/\((.+?)\)/g)[0],i=i.replace("(",""),i=i.replaceAll(")",""),t.location=parseInt(i);let s=A.split(":");t.name=s[0].split(" ")[1],t.name=t.name.replaceAll("  "," "),t.name=t.name.replaceAll(" ",""),t.valueType=s[1],t.valueType=t.valueType.replaceAll("  "," "),t.valueType=t.valueType.replaceAll(" ",""),t.valueType=t.valueType.replaceAll("\r",""),t.valueType=t.valueType.replaceAll(")",""),t.valueType=t.valueType.replaceAll(")",""),t.size=xs[t.valueType],e.push(t)}t.format=fw[xs[t.valueType]]}};a(So,"_shaderReflectionMap",new Map);let tr=So;class Ii extends Y3{constructor(e){super();a(this,"entryPoint","CsMain");a(this,"workerSizeX",1);a(this,"workerSizeY",0);a(this,"workerSizeZ",0);a(this,"_computePipeline");a(this,"_csShaderModule");a(this,"_destCS");a(this,"_sourceCS");a(this,"_storageTextureDic");a(this,"_sampleTextureDic");a(this,"_groupsShaderReflectionVarInfos");a(this,"_groupCache",{});this._sourceCS=e,tr.getShaderReflection2(e,this),this._storageTextureDic=new Map,this._sampleTextureDic=new Map}setStorageTexture(e,t){this._storageTextureDic.has(e)||this._storageTextureDic.set(e,t)}setSamplerTexture(e,t){this._sampleTextureDic.set(e,t)}compute(e){this._computePipeline||this.genComputePipeline(),e.setPipeline(this._computePipeline);for(let t=0;t<this.bindGroups.length;++t)e.setBindGroup(t,this.bindGroups[t]);this.workerSizeX&&this.workerSizeY&&this.workerSizeZ?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY,this.workerSizeZ):this.workerSizeX&&this.workerSizeY?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY):e.dispatchWorkgroups(this.workerSizeX)}createBufferBindGroup(e,t,i,n){let s=this._bufferDic.get(t);if(s){let o={binding:i,resource:{buffer:s.buffer,offset:0,size:s.memory.shareDataBuffer.byteLength}};n.push(o)}else console.error(`ComputeShader(${this.instanceID})`,`buffer ${t} is missing!`)}noticeBufferChange(e){let t=this._groupCache[e];t&&this.genGroups(t.groupIndex,t.infos,!0)}genGroups(e,t,i=!1){if(!this.bindGroups[e]||i){const n=t[e];let s=[];for(let u=0;u<n.length;++u){const l=n[u];if(l)switch(l.varType){case"uniform":case"storage-read":case"storage-read_write":this.createBufferBindGroup(e,l.varName,l.binding,s),this._groupCache[l.varName]={groupIndex:e,infos:t};break;case"var":if(l.dataType=="sampler"){let c=l.varName.replace("Sampler",""),h=this._sampleTextureDic.get(c);if(h){let d={binding:l.binding,resource:h.gpuSampler};s.push(d)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `)}else if(l.dataType=="sampler_comparison"){let c=l.varName.replace("Sampler",""),h=this._sampleTextureDic.get(c);if(h){let d={binding:l.binding,resource:h.gpuSampler_comparison};s.push(d)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `)}else if(l.dataType.indexOf("texture_storage")!=-1){let c=this._storageTextureDic.get(l.varName);if(c){let h={binding:l.binding,resource:c.getGPUView()};s.push(h),te.getInstance().attached(c,this)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `)}else if(l.dataType.indexOf("texture")!=-1){let c=this._sampleTextureDic.get(l.varName);if(c){let h={binding:l.binding,resource:c.getGPUView()};s.push(h),te.getInstance().attached(c,this)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${l.varName} is missing! `)}break;default:console.error("unprocessed type:",l.varType);break}}let o=iA.device.createBindGroup({layout:this._computePipeline.getBindGroupLayout(e),entries:s});this.bindGroups[e]=o}}genComputePipeline(){this.preCompileShader(this._sourceCS),this.genReflection(),this._computePipeline=iA.device.createComputePipeline({layout:"auto",compute:{module:this.compileShader(),entryPoint:this.entryPoint}}),this._groupsShaderReflectionVarInfos=[];let e=this.shaderReflection;this.bindGroups=[];for(let t=0;t<e.groups.length;++t){let i=e.groups[t];this._groupsShaderReflectionVarInfos[t]=i,this.genGroups(t,this._groupsShaderReflectionVarInfos)}iA.addEventListener(Ls.RESIZE,t=>{for(let i=0;i<e.groups.length;++i){let n=e.groups[i];this._groupsShaderReflectionVarInfos[i]=n,this.genGroups(i,this._groupsShaderReflectionVarInfos,!0)}},this)}preCompileShader(e){for(const t in this.constValues)if(Object.prototype.hasOwnProperty.call(this.constValues,t)){const i=this.constValues[t];e=e.replaceAll(`&${t}`,i.toString())}this._destCS=ps.parseComputeShader(e,this.defineValue)}compileShader(){let e=iA.device.createShaderModule({label:`ComputeShader(${this.instanceID})`,code:this._destCS});return e.getCompilationInfo().then(t=>{t.messages.length>0&&console.log(this._destCS)}),this._csShaderModule=e,e}genReflection(){this.shaderVariant+=tr.genComputeShaderVariant(this);let e=tr.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(tr.getShaderReflection2(this._destCS,this),tr.combineShaderReflectionVarInfo(this.shaderReflection,this.shaderReflection.cs_variables))}}class Er{static start(A){let e=this.profilerLabelMap.get(A);e||(e={lable:A,start:0,end:0,total:0,count:0,child:new Map},this.profilerLabelMap.set(A,e)),e.start=performance.now(),e.end=performance.now(),e.count=0,e.child.clear()}static end(A){let e=this.profilerLabelMap.get(A);e&&(e.end=performance.now(),e.total=e.end-e.start)}static countStart(A,e=""){let t=this.profilerLabelMap.get(A);if(t&&(t.count++,e!="")){let i=t.child.get(e);i||(i={lable:e,start:0,end:0,total:0,count:0}),i.start=performance.now(),i.end=performance.now(),i.count=0,t.child.set(e,i)}}static countEnd(A,e){let t=this.profilerLabelMap.get(A);if(t&&e!=""){let i=t.child.get(e);i||(i={lable:e,start:0,end:0,total:0,count:0}),i.end=performance.now(),i.total=i.end-i.start,i.count++}}static print(A){let e=this.profilerLabelMap.get(A);e&&console.log("performance",A,e.total+" ms")}}a(Er,"profilerLabelMap",new Map);const l4=`var Module=typeof Module!="undefined"?Module:{};var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_NODE){var fs=require("fs");var nodePath=require("path");if(ENVIRONMENT_IS_WORKER){scriptDirectory=nodePath.dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=(filename,binary)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret};readAsync=(filename,onload,onerror,binary=true)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);fs.readFile(filename,binary?undefined:"utf8",((err,data)=>{if(err)onerror(err);else onload(binary?data.buffer:data)}))};if(!Module["thisProgram"]&&process.argv.length>1){thisProgram=process.argv[1].replace(/\\\\/g,"/")}arguments_=process.argv.slice(2);if(typeof module!="undefined"){module["exports"]=Module}process.on("uncaughtException",(ex=>{if(ex!=="unwind"&&!(ex instanceof ExitStatus)&&!(ex.context instanceof ExitStatus)){throw ex}}));quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow};Module["inspect"]=()=>"[Emscripten Module object]"}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="data:application/octet-stream;base64,AGFzbQEAAAABfBRgAX8Bf2ABfwBgA39/fwF/YAN/f38AYAAAYAV/f39/fwBgBH9/f38AYAZ/f39/f38AYAABf2ACf38Bf2AEf39/fwF/YAF8AX1gAnx/AXxgAn9/AGABfQF9YAN/f30AYAJ+fwF/YAZ/fH9/f38Bf2ACfX8Bf2ADf35/AX4CHwUBYQFhAAoBYQFiAAMBYQFjAAABYQFkAAQBYQFlAAMDSEcDBQsLAgEAEAEADAEDDQ4CAA4PBAQABAABAAYDCQAAAAkRAwAKDAACARINAQAAAQAAAAAHBwUFAQYGAgEBEwACCQ8BCAgICAQFAXABICAFBwEBgAKAgAIGCAF/AUHgtwQLBzUNAWYCAAFnABsBaAEAAWkAMAFqAEsBawBKAWwASQFtAEgBbgBHAW8ARgFwAEUBcQAxAXIANwklAQBBAQsfIh5BQDwzQ0RCJiINLS0/ODo+DTk7PQ01DTQNNh0yHQryvgFHFwAgAC0AAEEgcUUEQCABIAIgABAUGgsLbgEBfyMAQYACayIFJAACQCACIANMDQAgBEGAwARxDQAgBSABQf8BcSACIANrIgNBgAIgA0GAAkkiARsQESABRQRAA0AgACAFQYACEAUgA0GAAmsiA0H/AUsNAAsLIAAgBSADEAULIAVBgAJqJAALSwECfCAAIACiIgEgAKIiAiABIAGioiABRKdGO4yHzcY+okR058ri+QAqv6CiIAIgAUSy+26JEBGBP6JEd6zLVFVVxb+goiAAoKC2C08BAXwgACAAoiIAIAAgAKIiAaIgAERpUO7gQpP5PqJEJx4P6IfAVr+goiABREI6BeFTVaU/oiAARIFeDP3//9+/okQAAAAAAADwP6CgoLYLdAEBfyACRQRAIAAoAgQgASgCBEYPCyAAIAFGBEBBAQ8LIAEoAgQiAi0AACEBAkAgACgCBCIDLQAAIgBFDQAgACABRw0AA0AgAi0AASEBIAMtAAEiAEUNASACQQFqIQIgA0EBaiEDIAAgAUYNAAsLIAAgAUYL0gsBB38CQCAARQ0AIABBCGsiAiAAQQRrKAIAIgFBeHEiAGohBQJAIAFBAXENACABQQNxRQ0BIAIgAigCACIBayICQfgzKAIASQ0BIAAgAWohAAJAAkBB/DMoAgAgAkcEQCABQf8BTQRAIAFBA3YhBCACKAIMIgEgAigCCCIDRgRAQegzQegzKAIAQX4gBHdxNgIADAULIAMgATYCDCABIAM2AggMBAsgAigCGCEGIAIgAigCDCIBRwRAIAIoAggiAyABNgIMIAEgAzYCCAwDCyACQRRqIgQoAgAiA0UEQCACKAIQIgNFDQIgAkEQaiEECwNAIAQhByADIgFBFGoiBCgCACIDDQAgAUEQaiEEIAEoAhAiAw0ACyAHQQA2AgAMAgsgBSgCBCIBQQNxQQNHDQJB8DMgADYCACAFIAFBfnE2AgQgAiAAQQFyNgIEIAUgADYCAA8LQQAhAQsgBkUNAAJAIAIoAhwiA0ECdEGYNmoiBCgCACACRgRAIAQgATYCACABDQFB7DNB7DMoAgBBfiADd3E2AgAMAgsgBkEQQRQgBigCECACRhtqIAE2AgAgAUUNAQsgASAGNgIYIAIoAhAiAwRAIAEgAzYCECADIAE2AhgLIAIoAhQiA0UNACABIAM2AhQgAyABNgIYCyACIAVPDQAgBSgCBCIBQQFxRQ0AAkACQAJAAkAgAUECcUUEQEGANCgCACAFRgRAQYA0IAI2AgBB9DNB9DMoAgAgAGoiADYCACACIABBAXI2AgQgAkH8MygCAEcNBkHwM0EANgIAQfwzQQA2AgAPC0H8MygCACAFRgRAQfwzIAI2AgBB8DNB8DMoAgAgAGoiADYCACACIABBAXI2AgQgACACaiAANgIADwsgAUF4cSAAaiEAIAFB/wFNBEAgAUEDdiEEIAUoAgwiASAFKAIIIgNGBEBB6DNB6DMoAgBBfiAEd3E2AgAMBQsgAyABNgIMIAEgAzYCCAwECyAFKAIYIQYgBSAFKAIMIgFHBEBB+DMoAgAaIAUoAggiAyABNgIMIAEgAzYCCAwDCyAFQRRqIgQoAgAiA0UEQCAFKAIQIgNFDQIgBUEQaiEECwNAIAQhByADIgFBFGoiBCgCACIDDQAgAUEQaiEEIAEoAhAiAw0ACyAHQQA2AgAMAgsgBSABQX5xNgIEIAIgAEEBcjYCBCAAIAJqIAA2AgAMAwtBACEBCyAGRQ0AAkAgBSgCHCIDQQJ0QZg2aiIEKAIAIAVGBEAgBCABNgIAIAENAUHsM0HsMygCAEF+IAN3cTYCAAwCCyAGQRBBFCAGKAIQIAVGG2ogATYCACABRQ0BCyABIAY2AhggBSgCECIDBEAgASADNgIQIAMgATYCGAsgBSgCFCIDRQ0AIAEgAzYCFCADIAE2AhgLIAIgAEEBcjYCBCAAIAJqIAA2AgAgAkH8MygCAEcNAEHwMyAANgIADwsgAEH/AU0EQCAAQXhxQZA0aiEBAn9B6DMoAgAiA0EBIABBA3Z0IgBxRQRAQegzIAAgA3I2AgAgAQwBCyABKAIICyEAIAEgAjYCCCAAIAI2AgwgAiABNgIMIAIgADYCCA8LQR8hAyAAQf///wdNBEAgAEEmIABBCHZnIgFrdkEBcSABQQF0a0E+aiEDCyACIAM2AhwgAkIANwIQIANBAnRBmDZqIQECQAJAAkBB7DMoAgAiBEEBIAN0IgdxRQRAQewzIAQgB3I2AgAgASACNgIAIAIgATYCGAwBCyAAQRkgA0EBdmtBACADQR9HG3QhAyABKAIAIQEDQCABIgQoAgRBeHEgAEYNAiADQR12IQEgA0EBdCEDIAQgAUEEcWoiB0EQaigCACIBDQALIAcgAjYCECACIAQ2AhgLIAIgAjYCDCACIAI2AggMAQsgBCgCCCIAIAI2AgwgBCACNgIIIAJBADYCGCACIAQ2AgwgAiAANgIIC0GINEGINCgCAEEBayIAQX8gABs2AgALC08BAn9B2CkoAgAiASAAQQdqQXhxIgJqIQACQCACQQAgACABTRsNACAAPwBBEHRLBEAgABACRQ0BC0HYKSAANgIAIAEPC0GoMkEwNgIAQX8LgwECA38BfgJAIABCgICAgBBUBEAgACEFDAELA0AgAUEBayIBIAAgAEIKgCIFQgp+fadBMHI6AAAgAEL/////nwFWIQIgBSEAIAINAAsLIAWnIgIEQANAIAFBAWsiASACIAJBCm4iA0EKbGtBMHI6AAAgAkEJSyEEIAMhAiAEDQALCyABCwYAIAAQCgs1AQF/QQEgACAAQQFNGyEAAkADQCAAECQiAQ0BQdg3KAIAIgEEQCABEQQADAELCxADAAsgAQuoAQACQCABQYAITgRAIABEAAAAAAAA4H+iIQAgAUH/D0kEQCABQf8HayEBDAILIABEAAAAAAAA4H+iIQBB/RcgASABQf0XThtB/g9rIQEMAQsgAUGBeEoNACAARAAAAAAAAGADoiEAIAFBuHBLBEAgAUHJB2ohAQwBCyAARAAAAAAAAGADoiEAQfBoIAEgAUHwaEwbQZIPaiEBCyAAIAFB/wdqrUI0hr+iCwYAIAAQCgvwAgICfwF+AkAgAkUNACAAIAE6AAAgACACaiIDQQFrIAE6AAAgAkEDSQ0AIAAgAToAAiAAIAE6AAEgA0EDayABOgAAIANBAmsgAToAACACQQdJDQAgACABOgADIANBBGsgAToAACACQQlJDQAgAEEAIABrQQNxIgRqIgMgAUH/AXFBgYKECGwiADYCACADIAIgBGtBfHEiAmoiAUEEayAANgIAIAJBCUkNACADIAA2AgggAyAANgIEIAFBCGsgADYCACABQQxrIAA2AgAgAkEZSQ0AIAMgADYCGCADIAA2AhQgAyAANgIQIAMgADYCDCABQRBrIAA2AgAgAUEUayAANgIAIAFBGGsgADYCACABQRxrIAA2AgAgAiADQQRxQRhyIgFrIgJBIEkNACAArUKBgICAEH4hBSABIANqIQEDQCABIAU3AxggASAFNwMQIAEgBTcDCCABIAU3AwAgAUEgaiEBIAJBIGsiAkEfSw0ACwsLMgAgACABKgIAIAAqAgCSOAIAIAAgASoCBCAAKgIEkjgCBCAAIAEqAgggACoCCJI4AggL/gICA38BfCMAQRBrIgEkAAJAIAC8IgNB/////wdxIgJB2p+k+gNNBEAgAkGAgIDMA0kNASAAuxAHIQAMAQsgAkHRp+2DBE0EQCAAuyEEIAJB45fbgARNBEAgA0EASARAIAREGC1EVPsh+T+gEAiMIQAMAwsgBEQYLURU+yH5v6AQCCEADAILRBgtRFT7IQnARBgtRFT7IQlAIANBAE4bIASgmhAHIQAMAQsgAkHV44iHBE0EQCACQd/bv4UETQRAIAC7IQQgA0EASARAIARE0iEzf3zZEkCgEAghAAwDCyAERNIhM3982RLAoBAIjCEADAILRBgtRFT7IRlARBgtRFT7IRnAIANBAEgbIAC7oBAHIQAMAQsgAkGAgID8B08EQCAAIACTIQAMAQsCQAJAAkACQCAAIAFBCGoQLkEDcQ4DAAECAwsgASsDCBAHIQAMAwsgASsDCBAIIQAMAgsgASsDCJoQByEADAELIAErAwgQCIwhAAsgAUEQaiQAIAALwAEBA38CQCABIAIoAhAiAwR/IAMFIAIQFQ0BIAIoAhALIAIoAhQiBWtLBEAgAiAAIAEgAigCJBECAA8LAkAgAigCUEEASARAQQAhAwwBCyABIQQDQCAEIgNFBEBBACEDDAILIAAgA0EBayIEai0AAEEKRw0ACyACIAAgAyACKAIkEQIAIgQgA0kNASAAIANqIQAgASADayEBIAIoAhQhBQsgBSAAIAEQLBogAiACKAIUIAFqNgIUIAEgA2ohBAsgBAtZAQF/IAAgACgCSCIBQQFrIAFyNgJIIAAoAgAiAUEIcQRAIAAgAUEgcjYCAEF/DwsgAEIANwIEIAAgACgCLCIBNgIcIAAgATYCFCAAIAEgACgCMGo2AhBBAAvoAgIDfwF8IwBBEGsiASQAAn0gALwiA0H/////B3EiAkHan6T6A00EQEMAAIA/IAJBgICAzANJDQEaIAC7EAgMAQsgAkHRp+2DBE0EQCACQeSX24AETwRARBgtRFT7IQlARBgtRFT7IQnAIANBAEgbIAC7oBAIjAwCCyAAuyEEIANBAEgEQCAERBgtRFT7Ifk/oBAHDAILRBgtRFT7Ifk/IAShEAcMAQsgAkHV44iHBE0EQCACQeDbv4UETwRARBgtRFT7IRlARBgtRFT7IRnAIANBAEgbIAC7oBAIDAILIANBAEgEQETSITN/fNkSwCAAu6EQBwwCCyAAu0TSITN/fNkSwKAQBwwBCyAAIACTIAJBgICA/AdPDQAaAkACQAJAAkAgACABQQhqEC5BA3EOAwABAgMLIAErAwgQCAwDCyABKwMImhAHDAILIAErAwgQCIwMAQsgASsDCBAHCyEAIAFBEGokACAACzMBAn0gASoCACAClCEDIAEqAgQgApQhBCAAIAEqAgggApQ4AgggACAEOAIEIAAgAzgCAAsqAQF/QQQQIyIAQeQmNgIAIABBvCY2AgAgAEHQJjYCACAAQcAnQQEQAQALXwEDf0EIECMiAEHkJjYCACAAQdQnNgIAQZ0IECsiAUENahAOIgJBADYCCCACIAE2AgQgAiABNgIAIAAgAkEMakGdCCABQQFqECw2AgQgAEGEKDYCACAAQaQoQQIQAQALfwAgAP0MAAAAAAAAAAAAAAAAAAAAAP0LAiQgAP0MAAAAAAAAAAAAAAAAAAAAAP0LAhQgAP0MAAAAAAAAAAAAAAAAAAAAAP0LAgQgAEGAgID8AzYCPCAAQYCAgPwDNgIAIABCADcCNCAAQYCAgPwDNgIoIABBgICA/AM2AhQgAAtTAEHsKUEANgIAQeQpQgA3AgBB+ClBADYCAEHwKUIANwIAQYQqQQA2AgBB/ClCADcCAEGQKkEANgIAQYgqQgA3AgBBxDNBzDI2AgBB/DJBKjYCAAv8BwMIfw59EHsjAEFAaiICJABB5CkoAgAgAEEGdGohAUH8KSgCACAAQQR0aiIFKAIABEAgBSgCBCEDIwBBEGsiBiQAIABBJGwiBEHwKSgCAGoiAEEYaiEHIABBDGohCCADBEAgBkEEaiIDQYgqKAIAIARqIgRB4CkqAgAQFyAAIAMQEiADIARBDGpB4CkqAgAQFyAIIAMQEiADIARBGGpB4CkqAgAQFyAHIAMQEgsgACoCFCEJIAAqAhAhCiAAKgIAIRIgACoCBCETIAAqAgghECAIKgIAIQwgAUEANgIsIAFBADYCHCABQQA2AgwgDEM1+o48lEMAAAA/lCIMEBMhDiAKQzX6jjyUQwAAAD+UIgoQEyERIAlDNfqOPJRDAAAAP5QiDRATIQkgDBAWIQsgChAWIQ8gASAQIAsgEZQiFCANEBYiCpQgCSAOIA+UIg2UkiIMIAkgCyAPlCILlCAKIA4gEZQiD5STIhEgEZIiDpQiFSALIAqUIA8gCZSSIgsgDSAKlCAJIBSUkyIJIAmSIg+UIg2TlDgCJCABIBAgCSAOlCIUIAsgDCAMkiIKlCIWkpQ4AiAgASATIBUgDZKUOAIYIAEgEyAJIAqUIg0gCyAOlCILk5Q4AhAgASASIBQgFpOUOAIIIAEgEiANIAuSlDgCBCABIBBDAACAPyAJIA+UIgkgDCAKlCIQkpOUOAIoIAEgE0MAAIA/IAkgESAOlCIJkpOUOAIUIAEgEkMAAIA/IBAgCZKTlDgCACABIAcqAgA4AjAgASAAKgIcOAI0IAAqAiAhCSABQYCAgPwDNgI8IAEgCTgCOCAGQRBqJAAgBSgCCCIAQX9HBEAgABAcIQAgAhAaGiAB/QkCDCEbIAH9CQIIIRwgAf0JAgAhHSAB/QkCBCEeIAH9CQIcIR8gAf0JAhghICAB/QkCECEhIAH9CQIUISIgAf0JAiwhIyAB/QkCKCEkIAH9CQIgISUgAf0JAiQhJiACIAD9AAIwIhcgAf0JAjz95gEgAP0AAiAiGCAB/QkCOP3mASAA/QACACIZIAH9CQIw/eYBIAD9AAIQIhogAf0JAjT95gH95AH95AH95AH9CwIwIAIgFyAj/eYBIBggJP3mASAZICX95gEgGiAm/eYB/eQB/eQB/eQB/QsCICACIBcgH/3mASAYICD95gEgGSAh/eYBIBogIv3mAf3kAf3kAf3kAf0LAhAgAiAXIBv95gEgGCAc/eYBIBkgHf3mASAeIBr95gH95AH95AH95AH9CwIAIAEgAv0AAjD9CwIwIAEgAv0AAiD9CwIgIAEgAv0AAhD9CwIQIAEgAv0AAgD9CwIACyAFQQA2AgALIAJBQGskACABCwsAIAAQHhogABAKCzEBAn8gAEHUJzYCACAAKAIEQQxrIgEgASgCCEEBayICNgIIIAJBAEgEQCABEBALIAALmgEAIABBAToANQJAIAAoAgQgAkcNACAAQQE6ADQCQCAAKAIQIgJFBEAgAEEBNgIkIAAgAzYCGCAAIAE2AhAgA0EBRw0CIAAoAjBBAUYNAQwCCyABIAJGBEAgACgCGCICQQJGBEAgACADNgIYIAMhAgsgACgCMEEBRw0CIAJBAUYNAQwCCyAAIAAoAiRBAWo2AiQLIABBAToANgsLXQEBfyAAKAIQIgNFBEAgAEEBNgIkIAAgAjYCGCAAIAE2AhAPCwJAIAEgA0YEQCAAKAIYQQJHDQEgACACNgIYDwsgAEEBOgA2IABBAjYCGCAAIAAoAiRBAWo2AiQLC7kCAQN/IwBBQGoiAiQAIAAoAgAiA0EEaygCACEEIANBCGsoAgAhAyACQgA3AiAgAkIANwIoIAJCADcCMCACQgA3ADcgAkIANwIYIAJBADYCFCACQZQkNgIQIAIgADYCDCACIAE2AgggACADaiEAQQAhAwJAIAQgAUEAEAkEQCACQQE2AjggBCACQQhqIAAgAEEBQQAgBCgCACgCFBEHACAAQQAgAigCIEEBRhshAwwBCyAEIAJBCGogAEEBQQAgBCgCACgCGBEFAAJAAkAgAigCLA4CAAECCyACKAIcQQAgAigCKEEBRhtBACACKAIkQQFGG0EAIAIoAjBBAUYbIQMMAQsgAigCIEEBRwRAIAIoAjANASACKAIkQQFHDQEgAigCKEEBRw0BCyACKAIYIQMLIAJBQGskACADCwQAIAALDgAgAEHQAGoQJEHQAGoLnCgBC38jAEEQayILJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABB9AFNBEBB6DMoAgAiBkEQIABBC2pBeHEgAEELSRsiBUEDdiIAdiIBQQNxBEACQCABQX9zQQFxIABqIgJBA3QiAUGQNGoiACABQZg0aigCACIBKAIIIgRGBEBB6DMgBkF+IAJ3cTYCAAwBCyAEIAA2AgwgACAENgIICyABQQhqIQAgASACQQN0IgJBA3I2AgQgASACaiIBIAEoAgRBAXI2AgQMDwsgBUHwMygCACIHTQ0BIAEEQAJAQQIgAHQiAkEAIAJrciABIAB0cSIAQQAgAGtxaCIBQQN0IgBBkDRqIgIgAEGYNGooAgAiACgCCCIERgRAQegzIAZBfiABd3EiBjYCAAwBCyAEIAI2AgwgAiAENgIICyAAIAVBA3I2AgQgACAFaiIIIAFBA3QiASAFayIEQQFyNgIEIAAgAWogBDYCACAHBEAgB0F4cUGQNGohAUH8MygCACECAn8gBkEBIAdBA3Z0IgNxRQRAQegzIAMgBnI2AgAgAQwBCyABKAIICyEDIAEgAjYCCCADIAI2AgwgAiABNgIMIAIgAzYCCAsgAEEIaiEAQfwzIAg2AgBB8DMgBDYCAAwPC0HsMygCACIKRQ0BIApBACAKa3FoQQJ0QZg2aigCACICKAIEQXhxIAVrIQMgAiEBA0ACQCABKAIQIgBFBEAgASgCFCIARQ0BCyAAKAIEQXhxIAVrIgEgAyABIANJIgEbIQMgACACIAEbIQIgACEBDAELCyACKAIYIQkgAiACKAIMIgRHBEBB+DMoAgAaIAIoAggiACAENgIMIAQgADYCCAwOCyACQRRqIgEoAgAiAEUEQCACKAIQIgBFDQMgAkEQaiEBCwNAIAEhCCAAIgRBFGoiASgCACIADQAgBEEQaiEBIAQoAhAiAA0ACyAIQQA2AgAMDQtBfyEFIABBv39LDQAgAEELaiIAQXhxIQVB7DMoAgAiCEUNAEEAIAVrIQMCQAJAAkACf0EAIAVBgAJJDQAaQR8gBUH///8HSw0AGiAFQSYgAEEIdmciAGt2QQFxIABBAXRrQT5qCyIHQQJ0QZg2aigCACIBRQRAQQAhAAwBC0EAIQAgBUEZIAdBAXZrQQAgB0EfRxt0IQIDQAJAIAEoAgRBeHEgBWsiBiADTw0AIAEhBCAGIgMNAEEAIQMgASEADAMLIAAgASgCFCIGIAYgASACQR12QQRxaigCECIBRhsgACAGGyEAIAJBAXQhAiABDQALCyAAIARyRQRAQQAhBEECIAd0IgBBACAAa3IgCHEiAEUNAyAAQQAgAGtxaEECdEGYNmooAgAhAAsgAEUNAQsDQCAAKAIEQXhxIAVrIgIgA0khASACIAMgARshAyAAIAQgARshBCAAKAIQIgEEfyABBSAAKAIUCyIADQALCyAERQ0AIANB8DMoAgAgBWtPDQAgBCgCGCEHIAQgBCgCDCICRwRAQfgzKAIAGiAEKAIIIgAgAjYCDCACIAA2AggMDAsgBEEUaiIBKAIAIgBFBEAgBCgCECIARQ0DIARBEGohAQsDQCABIQYgACICQRRqIgEoAgAiAA0AIAJBEGohASACKAIQIgANAAsgBkEANgIADAsLIAVB8DMoAgAiBE0EQEH8MygCACEAAkAgBCAFayIBQRBPBEAgACAFaiICIAFBAXI2AgQgACAEaiABNgIAIAAgBUEDcjYCBAwBCyAAIARBA3I2AgQgACAEaiIBIAEoAgRBAXI2AgRBACECQQAhAQtB8DMgATYCAEH8MyACNgIAIABBCGohAAwNCyAFQfQzKAIAIgJJBEBB9DMgAiAFayIBNgIAQYA0QYA0KAIAIgAgBWoiAjYCACACIAFBAXI2AgQgACAFQQNyNgIEIABBCGohAAwNC0EAIQAgBUEvaiIDAn9BwDcoAgAEQEHINygCAAwBC0HMN0J/NwIAQcQ3QoCggICAgAQ3AgBBwDcgC0EMakFwcUHYqtWqBXM2AgBB1DdBADYCAEGkN0EANgIAQYAgCyIBaiIGQQAgAWsiCHEiASAFTQ0MQaA3KAIAIgQEQEGYNygCACIHIAFqIgkgB00NDSAEIAlJDQ0LAkBBpDctAABBBHFFBEACQAJAAkACQEGANCgCACIEBEBBqDchAANAIAQgACgCACIHTwRAIAcgACgCBGogBEsNAwsgACgCCCIADQALC0EAEAsiAkF/Rg0DIAEhBkHENygCACIAQQFrIgQgAnEEQCABIAJrIAIgBGpBACAAa3FqIQYLIAUgBk8NA0GgNygCACIABEBBmDcoAgAiBCAGaiIIIARNDQQgACAISQ0ECyAGEAsiACACRw0BDAULIAYgAmsgCHEiBhALIgIgACgCACAAKAIEakYNASACIQALIABBf0YNASAFQTBqIAZNBEAgACECDAQLQcg3KAIAIgIgAyAGa2pBACACa3EiAhALQX9GDQEgAiAGaiEGIAAhAgwDCyACQX9HDQILQaQ3QaQ3KAIAQQRyNgIACyABEAshAkEAEAshACACQX9GDQUgAEF/Rg0FIAAgAk0NBSAAIAJrIgYgBUEoak0NBQtBmDdBmDcoAgAgBmoiADYCAEGcNygCACAASQRAQZw3IAA2AgALAkBBgDQoAgAiAwRAQag3IQADQCACIAAoAgAiASAAKAIEIgRqRg0CIAAoAggiAA0ACwwEC0H4MygCACIAQQAgACACTRtFBEBB+DMgAjYCAAtBACEAQaw3IAY2AgBBqDcgAjYCAEGINEF/NgIAQYw0QcA3KAIANgIAQbQ3QQA2AgADQCAAQQN0IgFBmDRqIAFBkDRqIgQ2AgAgAUGcNGogBDYCACAAQQFqIgBBIEcNAAtB9DMgBkEoayIAQXggAmtBB3FBACACQQhqQQdxGyIBayIENgIAQYA0IAEgAmoiATYCACABIARBAXI2AgQgACACakEoNgIEQYQ0QdA3KAIANgIADAQLIAIgA00NAiABIANLDQIgACgCDEEIcQ0CIAAgBCAGajYCBEGANCADQXggA2tBB3FBACADQQhqQQdxGyIAaiIBNgIAQfQzQfQzKAIAIAZqIgIgAGsiADYCACABIABBAXI2AgQgAiADakEoNgIEQYQ0QdA3KAIANgIADAMLQQAhBAwKC0EAIQIMCAtB+DMoAgAgAksEQEH4MyACNgIACyACIAZqIQFBqDchAAJAAkACQANAIAEgACgCAEcEQCAAKAIIIgANAQwCCwsgAC0ADEEIcUUNAQtBqDchAANAIAMgACgCACIBTwRAIAEgACgCBGoiBCADSw0DCyAAKAIIIQAMAAsACyAAIAI2AgAgACAAKAIEIAZqNgIEIAJBeCACa0EHcUEAIAJBCGpBB3EbaiIHIAVBA3I2AgQgAUF4IAFrQQdxQQAgAUEIakEHcRtqIgYgBSAHaiIFayEAIAMgBkYEQEGANCAFNgIAQfQzQfQzKAIAIABqIgA2AgAgBSAAQQFyNgIEDAgLQfwzKAIAIAZGBEBB/DMgBTYCAEHwM0HwMygCACAAaiIANgIAIAUgAEEBcjYCBCAAIAVqIAA2AgAMCAsgBigCBCIDQQNxQQFHDQYgA0F4cSEJIANB/wFNBEAgBigCDCIBIAYoAggiAkYEQEHoM0HoMygCAEF+IANBA3Z3cTYCAAwHCyACIAE2AgwgASACNgIIDAYLIAYoAhghCCAGIAYoAgwiAkcEQCAGKAIIIgEgAjYCDCACIAE2AggMBQsgBkEUaiIBKAIAIgNFBEAgBigCECIDRQ0EIAZBEGohAQsDQCABIQQgAyICQRRqIgEoAgAiAw0AIAJBEGohASACKAIQIgMNAAsgBEEANgIADAQLQfQzIAZBKGsiAEF4IAJrQQdxQQAgAkEIakEHcRsiAWsiCDYCAEGANCABIAJqIgE2AgAgASAIQQFyNgIEIAAgAmpBKDYCBEGENEHQNygCADYCACADIARBJyAEa0EHcUEAIARBJ2tBB3EbakEvayIAIAAgA0EQakkbIgFBGzYCBCABQbA3KQIANwIQIAFBqDcpAgA3AghBsDcgAUEIajYCAEGsNyAGNgIAQag3IAI2AgBBtDdBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiECIABBBGohACACIARJDQALIAEgA0YNACABIAEoAgRBfnE2AgQgAyABIANrIgJBAXI2AgQgASACNgIAIAJB/wFNBEAgAkF4cUGQNGohAAJ/QegzKAIAIgFBASACQQN2dCICcUUEQEHoMyABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyEAIAJB////B00EQCACQSYgAkEIdmciAGt2QQFxIABBAXRrQT5qIQALIAMgADYCHCADQgA3AhAgAEECdEGYNmohAQJAAkBB7DMoAgAiBEEBIAB0IgZxRQRAQewzIAQgBnI2AgAgASADNgIADAELIAJBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhBANAIAQiASgCBEF4cSACRg0CIABBHXYhBCAAQQF0IQAgASAEQQRxaiIGKAIQIgQNAAsgBiADNgIQCyADIAE2AhggAyADNgIMIAMgAzYCCAwBCyABKAIIIgAgAzYCDCABIAM2AgggA0EANgIYIAMgATYCDCADIAA2AggLQfQzKAIAIgAgBU0NAEH0MyAAIAVrIgE2AgBBgDRBgDQoAgAiACAFaiICNgIAIAIgAUEBcjYCBCAAIAVBA3I2AgQgAEEIaiEADAgLQagyQTA2AgBBACEADAcLQQAhAgsgCEUNAAJAIAYoAhwiAUECdEGYNmoiBCgCACAGRgRAIAQgAjYCACACDQFB7DNB7DMoAgBBfiABd3E2AgAMAgsgCEEQQRQgCCgCECAGRhtqIAI2AgAgAkUNAQsgAiAINgIYIAYoAhAiAQRAIAIgATYCECABIAI2AhgLIAYoAhQiAUUNACACIAE2AhQgASACNgIYCyAAIAlqIQAgBiAJaiIGKAIEIQMLIAYgA0F+cTYCBCAFIABBAXI2AgQgACAFaiAANgIAIABB/wFNBEAgAEF4cUGQNGohAQJ/QegzKAIAIgJBASAAQQN2dCIAcUUEQEHoMyAAIAJyNgIAIAEMAQsgASgCCAshACABIAU2AgggACAFNgIMIAUgATYCDCAFIAA2AggMAQtBHyEDIABB////B00EQCAAQSYgAEEIdmciAWt2QQFxIAFBAXRrQT5qIQMLIAUgAzYCHCAFQgA3AhAgA0ECdEGYNmohAQJAAkBB7DMoAgAiAkEBIAN0IgRxRQRAQewzIAIgBHI2AgAgASAFNgIADAELIABBGSADQQF2a0EAIANBH0cbdCEDIAEoAgAhAgNAIAIiASgCBEF4cSAARg0CIANBHXYhAiADQQF0IQMgASACQQRxaiIEKAIQIgINAAsgBCAFNgIQCyAFIAE2AhggBSAFNgIMIAUgBTYCCAwBCyABKAIIIgAgBTYCDCABIAU2AgggBUEANgIYIAUgATYCDCAFIAA2AggLIAdBCGohAAwCCwJAIAdFDQACQCAEKAIcIgBBAnRBmDZqIgEoAgAgBEYEQCABIAI2AgAgAg0BQewzIAhBfiAAd3EiCDYCAAwCCyAHQRBBFCAHKAIQIARGG2ogAjYCACACRQ0BCyACIAc2AhggBCgCECIABEAgAiAANgIQIAAgAjYCGAsgBCgCFCIARQ0AIAIgADYCFCAAIAI2AhgLAkAgA0EPTQRAIAQgAyAFaiIAQQNyNgIEIAAgBGoiACAAKAIEQQFyNgIEDAELIAQgBUEDcjYCBCAEIAVqIgIgA0EBcjYCBCACIANqIAM2AgAgA0H/AU0EQCADQXhxQZA0aiEAAn9B6DMoAgAiAUEBIANBA3Z0IgNxRQRAQegzIAEgA3I2AgAgAAwBCyAAKAIICyEBIAAgAjYCCCABIAI2AgwgAiAANgIMIAIgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAiAANgIcIAJCADcCECAAQQJ0QZg2aiEBAkACQCAIQQEgAHQiBnFFBEBB7DMgBiAIcjYCACABIAI2AgAMAQsgA0EZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIANGDQIgAEEddiEGIABBAXQhACABIAZBBHFqIgYoAhAiBQ0ACyAGIAI2AhALIAIgATYCGCACIAI2AgwgAiACNgIIDAELIAEoAggiACACNgIMIAEgAjYCCCACQQA2AhggAiABNgIMIAIgADYCCAsgBEEIaiEADAELAkAgCUUNAAJAIAIoAhwiAEECdEGYNmoiASgCACACRgRAIAEgBDYCACAEDQFB7DMgCkF+IAB3cTYCAAwCCyAJQRBBFCAJKAIQIAJGG2ogBDYCACAERQ0BCyAEIAk2AhggAigCECIABEAgBCAANgIQIAAgBDYCGAsgAigCFCIARQ0AIAQgADYCFCAAIAQ2AhgLAkAgA0EPTQRAIAIgAyAFaiIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEDAELIAIgBUEDcjYCBCACIAVqIgQgA0EBcjYCBCADIARqIAM2AgAgBwRAIAdBeHFBkDRqIQBB/DMoAgAhAQJ/QQEgB0EDdnQiBSAGcUUEQEHoMyAFIAZyNgIAIAAMAQsgACgCCAshBiAAIAE2AgggBiABNgIMIAEgADYCDCABIAY2AggLQfwzIAQ2AgBB8DMgAzYCAAsgAkEIaiEACyALQRBqJAAgAAuXAgAgAEUEQEEADwsCfwJAIAAEfyABQf8ATQ0BAkBBxDMoAgAoAgBFBEAgAUGAf3FBgL8DRg0DDAELIAFB/w9NBEAgACABQT9xQYABcjoAASAAIAFBBnZBwAFyOgAAQQIMBAsgAUGAQHFBgMADRyABQYCwA09xRQRAIAAgAUE/cUGAAXI6AAIgACABQQx2QeABcjoAACAAIAFBBnZBP3FBgAFyOgABQQMMBAsgAUGAgARrQf//P00EQCAAIAFBP3FBgAFyOgADIAAgAUESdkHwAXI6AAAgACABQQZ2QT9xQYABcjoAAiAAIAFBDHZBP3FBgAFyOgABQQQMBAsLQagyQRk2AgBBfwVBAQsMAQsgACABOgAAQQELC5YYAxJ/AXwCfiMAQbAEayIMJAAgDEEANgIsAkAgAb0iGUIAUwRAQQEhEEGKCCETIAGaIgG9IRkMAQsgBEGAEHEEQEEBIRBBjQghEwwBC0GQCEGLCCAEQQFxIhAbIRMgEEUhFQsCQCAZQoCAgICAgID4/wCDQoCAgICAgID4/wBRBEAgAEEgIAIgEEEDaiIDIARB//97cRAGIAAgEyAQEAUgAEGzCEH2CCAFQSBxIgUbQcwIQfoIIAUbIAEgAWIbQQMQBSAAQSAgAiADIARBgMAAcxAGIAMgAiACIANIGyEJDAELIAxBEGohEQJAAn8CQCABIAxBLGoQKiIBIAGgIgFEAAAAAAAAAABiBEAgDCAMKAIsIgZBAWs2AiwgBUEgciIOQeEARw0BDAMLIAVBIHIiDkHhAEYNAiAMKAIsIQpBBiADIANBAEgbDAELIAwgBkEdayIKNgIsIAFEAAAAAAAAsEGiIQFBBiADIANBAEgbCyELIAxBMGpBoAJBACAKQQBOG2oiDSEHA0AgBwJ/IAFEAAAAAAAA8EFjIAFEAAAAAAAAAABmcQRAIAGrDAELQQALIgM2AgAgB0EEaiEHIAEgA7ihRAAAAABlzc1BoiIBRAAAAAAAAAAAYg0ACwJAIApBAEwEQCAKIQMgByEGIA0hCAwBCyANIQggCiEDA0BBHSADIANBHU4bIQMCQCAHQQRrIgYgCEkNACADrSEaQgAhGQNAIAYgGUL/////D4MgBjUCACAahnwiGSAZQoCU69wDgCIZQoCU69wDfn0+AgAgBkEEayIGIAhPDQALIBmnIgZFDQAgCEEEayIIIAY2AgALA0AgCCAHIgZJBEAgBkEEayIHKAIARQ0BCwsgDCAMKAIsIANrIgM2AiwgBiEHIANBAEoNAAsLIANBAEgEQCALQRlqQQluQQFqIQ8gDkHmAEYhEgNAQQlBACADayIDIANBCU4bIQkCQCAGIAhNBEAgCCgCACEHDAELQYCU69wDIAl2IRRBfyAJdEF/cyEWQQAhAyAIIQcDQCAHIAMgBygCACIXIAl2ajYCACAWIBdxIBRsIQMgB0EEaiIHIAZJDQALIAgoAgAhByADRQ0AIAYgAzYCACAGQQRqIQYLIAwgDCgCLCAJaiIDNgIsIA0gCCAHRUECdGoiCCASGyIHIA9BAnRqIAYgBiAHa0ECdSAPShshBiADQQBIDQALC0EAIQMCQCAGIAhNDQAgDSAIa0ECdUEJbCEDQQohByAIKAIAIglBCkkNAANAIANBAWohAyAJIAdBCmwiB08NAAsLIAsgA0EAIA5B5gBHG2sgDkHnAEYgC0EAR3FrIgcgBiANa0ECdUEJbEEJa0gEQEEEQaQCIApBAEgbIAxqIAdBgMgAaiIJQQltIg9BAnRqQdAfayEKQQohByAJIA9BCWxrIglBB0wEQANAIAdBCmwhByAJQQFqIglBCEcNAAsLAkAgCigCACISIBIgB24iDyAHbGsiCUUgCkEEaiIUIAZGcQ0AAkAgD0EBcUUEQEQAAAAAAABAQyEBIAdBgJTr3ANHDQEgCCAKTw0BIApBBGstAABBAXFFDQELRAEAAAAAAEBDIQELRAAAAAAAAOA/RAAAAAAAAPA/RAAAAAAAAPg/IAYgFEYbRAAAAAAAAPg/IAkgB0EBdiIURhsgCSAUSRshGAJAIBUNACATLQAAQS1HDQAgGJohGCABmiEBCyAKIBIgCWsiCTYCACABIBigIAFhDQAgCiAHIAlqIgM2AgAgA0GAlOvcA08EQANAIApBADYCACAIIApBBGsiCksEQCAIQQRrIghBADYCAAsgCiAKKAIAQQFqIgM2AgAgA0H/k+vcA0sNAAsLIA0gCGtBAnVBCWwhA0EKIQcgCCgCACIJQQpJDQADQCADQQFqIQMgCSAHQQpsIgdPDQALCyAKQQRqIgcgBiAGIAdLGyEGCwNAIAYiByAITSIJRQRAIAdBBGsiBigCAEUNAQsLAkAgDkHnAEcEQCAEQQhxIQoMAQsgA0F/c0F/IAtBASALGyIGIANKIANBe0pxIgobIAZqIQtBf0F+IAobIAVqIQUgBEEIcSIKDQBBdyEGAkAgCQ0AIAdBBGsoAgAiDkUNAEEKIQlBACEGIA5BCnANAANAIAYiCkEBaiEGIA4gCUEKbCIJcEUNAAsgCkF/cyEGCyAHIA1rQQJ1QQlsIQkgBUFfcUHGAEYEQEEAIQogCyAGIAlqQQlrIgZBACAGQQBKGyIGIAYgC0obIQsMAQtBACEKIAsgAyAJaiAGakEJayIGQQAgBkEAShsiBiAGIAtKGyELC0F/IQkgC0H9////B0H+////ByAKIAtyIhIbSg0BIAsgEkEAR2pBAWohDgJAIAVBX3EiFUHGAEYEQCADIA5B/////wdzSg0DIANBACADQQBKGyEGDAELIBEgAyADQR91IgZzIAZrrSAREAwiBmtBAUwEQANAIAZBAWsiBkEwOgAAIBEgBmtBAkgNAAsLIAZBAmsiDyAFOgAAIAZBAWtBLUErIANBAEgbOgAAIBEgD2siBiAOQf////8Hc0oNAgsgBiAOaiIDIBBB/////wdzSg0BIABBICACIAMgEGoiBSAEEAYgACATIBAQBSAAQTAgAiAFIARBgIAEcxAGAkACQAJAIBVBxgBGBEAgDEEQaiIGQQhyIQMgBkEJciEKIA0gCCAIIA1LGyIJIQgDQCAINQIAIAoQDCEGAkAgCCAJRwRAIAYgDEEQak0NAQNAIAZBAWsiBkEwOgAAIAYgDEEQaksNAAsMAQsgBiAKRw0AIAxBMDoAGCADIQYLIAAgBiAKIAZrEAUgCEEEaiIIIA1NDQALIBIEQCAAQf4IQQEQBQsgByAITQ0BIAtBAEwNAQNAIAg1AgAgChAMIgYgDEEQaksEQANAIAZBAWsiBkEwOgAAIAYgDEEQaksNAAsLIAAgBkEJIAsgC0EJThsQBSALQQlrIQYgCEEEaiIIIAdPDQMgC0EJSiEDIAYhCyADDQALDAILAkAgC0EASA0AIAcgCEEEaiAHIAhLGyEJIAxBEGoiBkEIciEDIAZBCXIhDSAIIQcDQCANIAc1AgAgDRAMIgZGBEAgDEEwOgAYIAMhBgsCQCAHIAhHBEAgBiAMQRBqTQ0BA0AgBkEBayIGQTA6AAAgBiAMQRBqSw0ACwwBCyAAIAZBARAFIAZBAWohBiAKIAtyRQ0AIABB/ghBARAFCyAAIAYgDSAGayIGIAsgBiALSBsQBSALIAZrIQsgB0EEaiIHIAlPDQEgC0EATg0ACwsgAEEwIAtBEmpBEkEAEAYgACAPIBEgD2sQBQwCCyALIQYLIABBMCAGQQlqQQlBABAGCyAAQSAgAiAFIARBgMAAcxAGIAUgAiACIAVIGyEJDAELIBMgBUEadEEfdUEJcWohCAJAIANBC0sNAEEMIANrIQZEAAAAAAAAMEAhGANAIBhEAAAAAAAAMECiIRggBkEBayIGDQALIAgtAABBLUYEQCAYIAGaIBihoJohAQwBCyABIBigIBihIQELIBEgDCgCLCIGIAZBH3UiBnMgBmutIBEQDCIGRgRAIAxBMDoADyAMQQ9qIQYLIBBBAnIhCyAFQSBxIQ0gDCgCLCEHIAZBAmsiCiAFQQ9qOgAAIAZBAWtBLUErIAdBAEgbOgAAIARBCHEhBiAMQRBqIQcDQCAHIgUCfyABmUQAAAAAAADgQWMEQCABqgwBC0GAgICAeAsiB0HgI2otAAAgDXI6AAAgASAHt6FEAAAAAAAAMECiIQECQCAFQQFqIgcgDEEQamtBAUcNAAJAIAYNACADQQBKDQAgAUQAAAAAAAAAAGENAQsgBUEuOgABIAVBAmohBwsgAUQAAAAAAAAAAGINAAtBfyEJQf3///8HIAsgESAKayIGaiINayADSA0AIABBICACIA0gA0ECaiAHIAxBEGoiB2siBSAFQQJrIANIGyAFIAMbIglqIgMgBBAGIAAgCCALEAUgAEEwIAIgAyAEQYCABHMQBiAAIAcgBRAFIABBMCAJIAVrQQBBABAGIAAgCiAGEAUgAEEgIAIgAyAEQYDAAHMQBiADIAIgAiADSBshCQsgDEGwBGokACAJC7QCAAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUEJaw4SAAgJCggJAQIDBAoJCgoICQUGBwsgAiACKAIAIgFBBGo2AgAgACABKAIANgIADwsgAiACKAIAIgFBBGo2AgAgACABMgEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMwEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMAAANwMADwsgAiACKAIAIgFBBGo2AgAgACABMQAANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsACw8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAAtyAQN/IAAoAgAsAABBMGtBCk8EQEEADwsDQCAAKAIAIQNBfyEBIAJBzJmz5gBNBEBBfyADLAAAQTBrIgEgAkEKbCICaiABIAJB/////wdzShshAQsgACADQQFqNgIAIAEhAiADLAABQTBrQQpJDQALIAILkRQCE38BfkGHCSELIwBB0ABrIgUkACAFQYcJNgJMIAVBN2ohFSAFQThqIRACQAJAAkACQANAIAshCiAEIAxB/////wdzSg0BIAQgDGohDAJAAkACQCAKIgQtAAAiBgRAA0ACQAJAIAZB/wFxIgtFBEAgBCELDAELIAtBJUcNASAEIQYDQCAGLQABQSVHBEAgBiELDAILIARBAWohBCAGLQACIQcgBkECaiILIQYgB0ElRg0ACwsgBCAKayIEIAxB/////wdzIhZKDQcgAARAIAAgCiAEEAULIAQNBiAFIAs2AkwgC0EBaiEEQX8hDQJAIAssAAFBMGtBCk8NACALLQACQSRHDQAgC0EDaiEEIAssAAFBMGshDUEBIRELIAUgBDYCTEEAIQgCQCAELAAAIgZBIGsiC0EfSwRAIAQhBwwBCyAEIQdBASALdCILQYnRBHFFDQADQCAFIARBAWoiBzYCTCAIIAtyIQggBCwAASIGQSBrIgtBIE8NASAHIQRBASALdCILQYnRBHENAAsLAkAgBkEqRgRAAn8CQCAHLAABQTBrQQpPDQAgBy0AAkEkRw0AIAcsAAFBAnQgA2pBwAFrQQo2AgAgB0EDaiEGQQEhESAHLAABQQN0IAJqQYADaygCAAwBCyARDQYgB0EBaiEGIABFBEAgBSAGNgJMQQAhEUEAIQ4MAwsgASABKAIAIgRBBGo2AgBBACERIAQoAgALIQ4gBSAGNgJMIA5BAE4NAUEAIA5rIQ4gCEGAwAByIQgMAQsgBUHMAGoQKCIOQQBIDQggBSgCTCEGC0EAIQRBfyEJAn8gBi0AAEEuRwRAIAYhC0EADAELIAYtAAFBKkYEQAJ/AkAgBiwAAkEwa0EKTw0AIAYtAANBJEcNACAGLAACQQJ0IANqQcABa0EKNgIAIAZBBGohCyAGLAACQQN0IAJqQYADaygCAAwBCyARDQYgBkECaiELQQAgAEUNABogASABKAIAIgdBBGo2AgAgBygCAAshCSAFIAs2AkwgCUF/c0EfdgwBCyAFIAZBAWo2AkwgBUHMAGoQKCEJIAUoAkwhC0EBCyESA0AgBCEPQRwhByALIhQsAAAiBEH7AGtBRkkNCSAUQQFqIQsgBCAPQTpsakHPH2otAAAiBEEBa0EISQ0ACyAFIAs2AkwCQAJAIARBG0cEQCAERQ0LIA1BAE4EQCADIA1BAnRqIAQ2AgAgBSACIA1BA3RqKQMANwNADAILIABFDQggBUFAayAEIAEQJwwCCyANQQBODQoLQQAhBCAARQ0HCyAIQf//e3EiBiAIIAhBgMAAcRshCEEAIQ1BgAghEyAQIQcCQAJAAkACfwJAAkACQAJAAn8CQAJAAkACQAJAAkACQCAULAAAIgRBX3EgBCAEQQ9xQQNGGyAEIA8bIgRB2ABrDiEEFBQUFBQUFBQOFA8GDg4OFAYUFBQUAgUDFBQJFAEUFAQACwJAIARBwQBrDgcOFAsUDg4OAAsgBEHTAEYNCQwTCyAFKQNAIRdBgAgMBQtBACEEAkACQAJAAkACQAJAAkAgD0H/AXEOCAABAgMEGgUGGgsgBSgCQCAMNgIADBkLIAUoAkAgDDYCAAwYCyAFKAJAIAysNwMADBcLIAUoAkAgDDsBAAwWCyAFKAJAIAw6AAAMFQsgBSgCQCAMNgIADBQLIAUoAkAgDKw3AwAMEwtBCCAJIAlBCE0bIQkgCEEIciEIQfgAIQQLIBAhCiAFKQNAIhdCAFIEQCAEQSBxIQYDQCAKQQFrIgogF6dBD3FB4CNqLQAAIAZyOgAAIBdCD1YhDyAXQgSIIRcgDw0ACwsgBSkDQFANAyAIQQhxRQ0DIARBBHZBgAhqIRNBAiENDAMLIBAhBCAFKQNAIhdCAFIEQANAIARBAWsiBCAXp0EHcUEwcjoAACAXQgdWIQogF0IDiCEXIAoNAAsLIAQhCiAIQQhxRQ0CIAkgECAKayIEQQFqIAQgCUgbIQkMAgsgBSkDQCIXQgBTBEAgBUIAIBd9Ihc3A0BBASENQYAIDAELIAhBgBBxBEBBASENQYEIDAELQYIIQYAIIAhBAXEiDRsLIRMgFyAQEAwhCgsgEkEAIAlBAEgbDQ4gCEH//3txIAggEhshCAJAIAUpA0AiF0IAUg0AIAkNACAQIQpBACEJDAwLIAkgF1AgECAKa2oiBCAEIAlIGyEJDAsLAn9B/////wcgCSAJQf////8HTxsiDyIHQQBHIQgCQAJAAkAgBSgCQCIEQYAJIAQbIgoiBEEDcUUNACAHRQ0AA0AgBC0AAEUNAiAHQQFrIgdBAEchCCAEQQFqIgRBA3FFDQEgBw0ACwsgCEUNAQJAIAQtAABFDQAgB0EESQ0AA0AgBCgCACIIQX9zIAhBgYKECGtxQYCBgoR4cQ0CIARBBGohBCAHQQRrIgdBA0sNAAsLIAdFDQELA0AgBCAELQAARQ0CGiAEQQFqIQQgB0EBayIHDQALC0EACyIEIAprIA8gBBsiBCAKaiEHIAlBAE4EQCAGIQggBCEJDAsLIAYhCCAEIQkgBy0AAA0NDAoLIAkEQCAFKAJADAILQQAhBCAAQSAgDkEAIAgQBgwCCyAFQQA2AgwgBSAFKQNAPgIIIAUgBUEIaiIENgJAQX8hCSAECyEGQQAhBAJAA0AgBigCACIKRQ0BAkAgBUEEaiAKECUiCkEASCIHDQAgCiAJIARrSw0AIAZBBGohBiAEIApqIgQgCUkNAQwCCwsgBw0NC0E9IQcgBEEASA0LIABBICAOIAQgCBAGIARFBEBBACEEDAELQQAhByAFKAJAIQYDQCAGKAIAIgpFDQEgBUEEaiAKECUiCiAHaiIHIARLDQEgACAFQQRqIAoQBSAGQQRqIQYgBCAHSw0ACwsgAEEgIA4gBCAIQYDAAHMQBiAOIAQgBCAOSBshBAwICyASQQAgCUEASBsNCEE9IQcgACAFKwNAIA4gCSAIIAQQJiIEQQBODQcMCQsgBSAFKQNAPAA3QQEhCSAVIQogBiEIDAQLIAQtAAEhBiAEQQFqIQQMAAsACyAADQcgEUUNAkEBIQQDQCADIARBAnRqKAIAIgAEQCACIARBA3RqIAAgARAnQQEhDCAEQQFqIgRBCkcNAQwJCwtBASEMIARBCk8NBwNAIAMgBEECdGooAgANASAEQQFqIgRBCkcNAAsMBwtBHCEHDAQLIAkgByAKayIPIAkgD0obIgkgDUH/////B3NKDQJBPSEHIA4gCSANaiIGIAYgDkgbIgQgFkoNAyAAQSAgBCAGIAgQBiAAIBMgDRAFIABBMCAEIAYgCEGAgARzEAYgAEEwIAkgD0EAEAYgACAKIA8QBSAAQSAgBCAGIAhBgMAAcxAGDAELC0EAIQwMAwtBPSEHC0GoMiAHNgIAC0F/IQwLIAVB0ABqJAAgDAt+AgF/AX4gAL0iA0I0iKdB/w9xIgJB/w9HBHwgAkUEQCABIABEAAAAAAAAAABhBH9BAAUgAEQAAAAAAADwQ6IgARAqIQAgASgCAEFAags2AgAgAA8LIAEgAkH+B2s2AgAgA0L/////////h4B/g0KAgICAgICA8D+EvwUgAAsLegEDfwJAAkAgACIBQQNxRQ0AIAAtAABFBEBBAA8LA0AgAUEBaiIBQQNxRQ0BIAEtAAANAAsMAQsDQCABIgJBBGohASACKAIAIgNBf3MgA0GBgoQIa3FBgIGChHhxRQ0ACwNAIAIiAUEBaiECIAEtAAANAAsLIAEgAGsLgAQBA38gAkGABE8EQCAAIAEgAhAEIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAEEDcUUEQCAAIQIMAQsgAkUEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgJBA3FFDQEgAiADSQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICACIAEoAiQ2AiQgAiABKAIoNgIoIAIgASgCLDYCLCACIAEoAjA2AjAgAiABKAI0NgI0IAIgASgCODYCOCACIAEoAjw2AjwgAUFAayEBIAJBQGsiAiAFTQ0ACwsgAiAETw0BA0AgAiABKAIANgIAIAFBBGohASACQQRqIgIgBEkNAAsMAQsgA0EESQRAIAAhAgwBCyAAIANBBGsiBEsEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLIAIgA0kEQANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANHDQALCyAACwMAAQv4DwIUfwN8IwBBEGsiCyQAAkAgALwiEUH/////B3EiA0Han6TuBE0EQCABIAC7IhcgF0SDyMltMF/kP6JEAAAAAAAAOEOgRAAAAAAAADjDoCIWRAAAAFD7Ifm/oqAgFkRjYhphtBBRvqKgIhg5AwAgGEQAAABg+yHpv2MhAgJ/IBaZRAAAAAAAAOBBYwRAIBaqDAELQYCAgIB4CyEDIAIEQCABIBcgFkQAAAAAAADwv6AiFkQAAABQ+yH5v6KgIBZEY2IaYbQQUb6ioDkDACADQQFrIQMMAgsgGEQAAABg+yHpP2RFDQEgASAXIBZEAAAAAAAA8D+gIhZEAAAAUPsh+b+ioCAWRGNiGmG0EFG+oqA5AwAgA0EBaiEDDAELIANBgICA/AdPBEAgASAAIACTuzkDAEEAIQMMAQsgCyADIANBF3ZBlgFrIgNBF3Rrvrs5AwggC0EIaiEOIwBBsARrIgUkACADIANBA2tBGG0iAkEAIAJBAEobIg1BaGxqIQZB8AkoAgAiB0EATgRAIAdBAWohAyANIQIDQCAFQcACaiAEQQN0aiACQQBIBHxEAAAAAAAAAAAFIAJBAnRBgApqKAIAtws5AwAgAkEBaiECIARBAWoiBCADRw0ACwsgBkEYayEIQQAhAyAHQQAgB0EAShshBANAQQAhAkQAAAAAAAAAACEWA0AgDiACQQN0aisDACAFQcACaiADIAJrQQN0aisDAKIgFqAhFiACQQFqIgJBAUcNAAsgBSADQQN0aiAWOQMAIAMgBEYhAiADQQFqIQMgAkUNAAtBLyAGayESQTAgBmshDyAGQRlrIRMgByEDAkADQCAFIANBA3RqKwMAIRZBACECIAMhBCADQQBMIglFBEADQCAFQeADaiACQQJ0agJ/An8gFkQAAAAAAABwPqIiF5lEAAAAAAAA4EFjBEAgF6oMAQtBgICAgHgLtyIXRAAAAAAAAHDBoiAWoCIWmUQAAAAAAADgQWMEQCAWqgwBC0GAgICAeAs2AgAgBSAEQQFrIgRBA3RqKwMAIBegIRYgAkEBaiICIANHDQALCwJ/IBYgCBAPIhYgFkQAAAAAAADAP6KcRAAAAAAAACDAoqAiFplEAAAAAAAA4EFjBEAgFqoMAQtBgICAgHgLIQogFiAKt6EhFgJAAkACQAJ/IAhBAEwiFEUEQCADQQJ0IAVqIgIgAigC3AMiAiACIA91IgIgD3RrIgQ2AtwDIAIgCmohCiAEIBJ1DAELIAgNASADQQJ0IAVqKALcA0EXdQsiDEEATA0CDAELQQIhDCAWRAAAAAAAAOA/Zg0AQQAhDAwBC0EAIQJBACEEIAlFBEADQCAFQeADaiACQQJ0aiIVKAIAIQlB////ByEQAn8CQCAEDQBBgICACCEQIAkNAEEADAELIBUgECAJazYCAEEBCyEEIAJBAWoiAiADRw0ACwsCQCAUDQBB////AyECAkACQCATDgIBAAILQf///wEhAgsgA0ECdCAFaiIJIAkoAtwDIAJxNgLcAwsgCkEBaiEKIAxBAkcNAEQAAAAAAADwPyAWoSEWQQIhDCAERQ0AIBZEAAAAAAAA8D8gCBAPoSEWCyAWRAAAAAAAAAAAYQRAQQAhBAJAIAcgAyICTg0AA0AgBUHgA2ogAkEBayICQQJ0aigCACAEciEEIAIgB0oNAAsgBEUNACAIIQYDQCAGQRhrIQYgBUHgA2ogA0EBayIDQQJ0aigCAEUNAAsMAwtBASECA0AgAiIEQQFqIQIgBUHgA2ogByAEa0ECdGooAgBFDQALIAMgBGohBANAIAVBwAJqIANBAWoiA0EDdGogAyANakECdEGACmooAgC3OQMAQQAhAkQAAAAAAAAAACEWA0AgDiACQQN0aisDACAFQcACaiADIAJrQQN0aisDAKIgFqAhFiACQQFqIgJBAUcNAAsgBSADQQN0aiAWOQMAIAMgBEgNAAsgBCEDDAELCwJAIBZBGCAGaxAPIhZEAAAAAAAAcEFmBEAgBUHgA2ogA0ECdGoCfwJ/IBZEAAAAAAAAcD6iIheZRAAAAAAAAOBBYwRAIBeqDAELQYCAgIB4CyICt0QAAAAAAABwwaIgFqAiFplEAAAAAAAA4EFjBEAgFqoMAQtBgICAgHgLNgIAIANBAWohAwwBCwJ/IBaZRAAAAAAAAOBBYwRAIBaqDAELQYCAgIB4CyECIAghBgsgBUHgA2ogA0ECdGogAjYCAAtEAAAAAAAA8D8gBhAPIRYCQCADQQBIDQAgAyECA0AgBSACIgRBA3RqIBYgBUHgA2ogAkECdGooAgC3ojkDACACQQFrIQIgFkQAAAAAAABwPqIhFiAEDQALIANBAEgNACADIQQDQEQAAAAAAAAAACEWQQAhAiAHIAMgBGsiBiAGIAdKGyIIQQBOBEADQCACQQN0QdAfaisDACAFIAIgBGpBA3RqKwMAoiAWoCEWIAIgCEchDSACQQFqIQIgDQ0ACwsgBUGgAWogBkEDdGogFjkDACAEQQBKIQIgBEEBayEEIAINAAsLRAAAAAAAAAAAIRYgA0EATgRAA0AgAyICQQFrIQMgFiAFQaABaiACQQN0aisDAKAhFiACDQALCyALIBaaIBYgDBs5AwAgBUGwBGokACAKQQdxIQMgCysDACEWIBFBAEgEQCABIBaaOQMAQQAgA2shAwwBCyABIBY5AwALIAtBEGokACADC/YEAQh/IAEgACgCCCIEIAAoAgQiAmtBJG1NBEAgACABBH8gAiABQSRsaiEAA0AgAv0MAAAAAAAAAAAAAAAAAAAAAP0LAgAgAkEANgIgIAL9DAAAAAAAAAAAAAAAAAAAAAD9CwIQIAJBADYCCCACQgA3AgAgAkEMaiIBQQA2AgggAUIANwIAIAJBGGoiAUEANgIIIAFCADcCACACQSRqIgIgAEcNAAsgAAUgAgs2AgQPCwJAIAIgACgCACICa0EkbSIGIAFqIgNByOPxOEkEQEHH4/E4IAQgAmtBJG0iAkEBdCIEIAMgAyAESRsgAkHj8bgcTxsiBARAIARByOPxOE8NAiAEQSRsEA4hBQsgBSAGQSRsaiIDIAFBJGxqIQYgAyECA0AgAv0MAAAAAAAAAAAAAAAAAAAAAP0LAgAgAkEANgIgIAL9DAAAAAAAAAAAAAAAAAAAAAD9CwIQIAJBADYCCCACQgA3AgAgAkEMaiIBQQA2AgggAUIANwIAIAJBGGoiAUEANgIIIAFCADcCACACQSRqIgIgBkcNAAsgBSAEQSRsaiEIAkAgACgCBCICIAAoAgAiCUYEQCADIQUMAQsDQCADQSRrIgUgAkEkayIBKgIAOAIAIAUgASoCBDgCBCAFIAEqAgg4AgggA0EYayIEIAJBGGsiByoCADgCACAEIAcqAgQ4AgQgBCAHKgIIOAIIIANBDGsiAyACQQxrIgIqAgA4AgAgAyACKgIEOAIEIAMgAioCCDgCCCAFIQMgASICIAlHDQALIAAoAgAhAgsgACAINgIIIAAgBjYCBCAAIAU2AgAgAgRAIAIQCgsPCxAZAAsQGAALrgoBCH8CQEHoKSgCAEHkKSgCACICa0EGdSIBIABJBEAgACABayIDQewpKAIAIgRB6CkoAgAiAWtBBnVNBEBB6CkgAwR/IAEgA0EGdGohAgNAIAEQGkFAayIBIAJHDQALIAIFIAELNgIADAILAkAgAUHkKSgCACICa0EGdSIGIANqIgVBgICAIEkEQEH///8fIAQgAmsiAUEFdSICIAUgAiAFSxsgAUHA////B08bIgcEfyAHQYCAgCBPDQIgB0EGdBAOBUEACyIEIAZBBnRqIgIgA0EGdGohBSACIQEDQCABEBpBQGsiASAFRw0AC0HoKSgCACIBQeQpKAIAIgZHBEADQCACQUBqIgMgAUFAaiIBIgL9AAIA/QsCACADIAL9AAIw/QsCMCADIAL9AAIg/QsCICADIAL9AAIQ/QsCECADIQIgASAGRw0AC0HkKSgCACEBC0HsKSAEIAdBBnRqNgIAQegpIAU2AgBB5CkgAjYCACABBEAgARAQCwwDCxAZAAsQGAALIAAgAU8NAEHoKSACIABBBnRqNgIACwJAQfQpKAIAQfApKAIAIgJrQSRtIgEgAEkEQEHwKSAAIAFrEC8MAQsgACABTw0AQfQpIAIgAEEkbGo2AgALAkBBgCooAgBB/CkoAgAiAmtBBHUiASAASQRAQQAhBEEAIQcgACABayIDQYQqKAIAIgZBgCooAgAiAmtBBHVNBEACQCADRQ0AIAIhASADQQdxIggEQANAIAFC/////w83AgggAUIANwIAIAFBEGohASAEQQFqIgQgCEcNAAsLIANBBHQgAmohAiADQQFrQf////8AcUEHSQ0AA0AgAUIANwJwIAFCADcCYCABQgA3AlAgAUIANwJAIAFCADcCMCABQgA3AiAgAUIANwIQIAFC/////w83AgggAUIANwIAIAFC/////w83AnggAUL/////DzcCaCABQv////8PNwJYIAFC/////w83AkggAUL/////DzcCOCABQv////8PNwIoIAFC/////w83AhggAUGAAWoiASACRw0ACwtBgCogAjYCAAwCCwJAIAJB/CkoAgAiAWtBBHUiBCADaiIFQYCAgIABSQRAQf////8AIAYgAWsiBkEDdSIBIAUgASAFSxsgBkHw////B08bIgUEQCAFQYCAgIABTw0CIAVBBHQQDiEHCyAHIARBBHRqIgQhASADQQdxIgYEQANAIAFC/////w83AgggAUIANwIAIAFBEGohASAIQQFqIgggBkcNAAsLIANBBHQgBGohCCADQQFrQf////8AcUEHTwRAA0AgAUIANwJwIAFCADcCYCABQgA3AlAgAUIANwJAIAFCADcCMCABQgA3AiAgAUIANwIQIAFC/////w83AgggAUIANwIAIAFC/////w83AnggAUL/////DzcCaCABQv////8PNwJYIAFC/////w83AkggAUL/////DzcCOCABQv////8PNwIoIAFC/////w83AhggAUGAAWoiASAIRw0ACwtB/CkoAgAiASACRwRAA0AgBEEQayIEIAJBEGsiAv0AAgD9CwIAIAEgAkcNAAtB/CkoAgAhAgtBhCogByAFQQR0ajYCAEGAKiAINgIAQfwpIAQ2AgAgAgRAIAIQEAsMAwsQGQALEBgACyAAIAFPDQBBgCogAiAAQQR0ajYCAAtBjCooAgBBiCooAgAiAmtBJG0iASAASQRAQYgqIAAgAWsQLw8LIAAgAUkEQEGMKiACIABBJGxqNgIACwsQACMAIABrQXBxIgAkACAACwcAIAAoAgQLGQBBiCooAgAiAARAQYwqIAA2AgAgABAKCwsFAEG3CAsFAEHnCAsFAEGkCAsVACAARQRAQQAPCyAAQaQlECFBAEcLGgAgACABKAIIIAUQCQRAIAEgAiADIAQQHwsLNwAgACABKAIIIAUQCQRAIAEgAiADIAQQHw8LIAAoAggiACABIAIgAyAEIAUgACgCACgCFBEHAAunAQAgACABKAIIIAQQCQRAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLDwsCQCAAIAEoAgAgBBAJRQ0AAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0BIAFBATYCIA8LIAEgAjYCFCABIAM2AiAgASABKAIoQQFqNgIoAkAgASgCJEEBRw0AIAEoAhhBAkcNACABQQE6ADYLIAFBBDYCLAsLiAIAIAAgASgCCCAEEAkEQAJAIAEoAgQgAkcNACABKAIcQQFGDQAgASADNgIcCw8LAkAgACABKAIAIAQQCQRAAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0CIAFBATYCIA8LIAEgAzYCIAJAIAEoAixBBEYNACABQQA7ATQgACgCCCIAIAEgAiACQQEgBCAAKAIAKAIUEQcAIAEtADUEQCABQQM2AiwgAS0ANEUNAQwDCyABQQQ2AiwLIAEgAjYCFCABIAEoAihBAWo2AiggASgCJEEBRw0BIAEoAhhBAkcNASABQQE6ADYPCyAAKAIIIgAgASACIAMgBCAAKAIAKAIYEQUACwsZAEH8KSgCACIABEBBgCogADYCACAAEAoLCzEAIAAgASgCCEEAEAkEQCABIAIgAxAgDwsgACgCCCIAIAEgAiADIAAoAgAoAhwRBgALGAAgACABKAIIQQAQCQRAIAEgAiADECALC5sBAQF/IwBBQGoiAyQAAn9BASAAIAFBABAJDQAaQQAgAUUNABpBACABQcQkECEiAUUNABogA0EMakEAQTQQESADQQE2AjggA0F/NgIUIAMgADYCECADIAE2AgggASADQQhqIAIoAgBBASABKAIAKAIcEQYAIAMoAiAiAEEBRgRAIAIgAygCGDYCAAsgAEEBRgshACADQUBrJAAgAAsZAEHwKSgCACIABEBB9CkgADYCACAAEAoLCxkAQeQpKAIAIgAEQEHoKSAANgIAIAAQCgsLBABCAAsEAEEAC/QCAQd/IwBBIGsiAyQAIAMgACgCHCIENgIQIAAoAhQhBSADIAI2AhwgAyABNgIYIAMgBSAEayIBNgIUIAEgAmohBUECIQcCfwJAAkACQCAAKAI8IANBEGoiAUECIANBDGoQACIEBH9BqDIgBDYCAEF/BUEACwRAIAEhBAwBCwNAIAUgAygCDCIGRg0CIAZBAEgEQCABIQQMBAsgASAGIAEoAgQiCEsiCUEDdGoiBCAGIAhBACAJG2siCCAEKAIAajYCACABQQxBBCAJG2oiASABKAIAIAhrNgIAIAUgBmshBSAAKAI8IAQiASAHIAlrIgcgA0EMahAAIgYEf0GoMiAGNgIAQX8FQQALRQ0ACwsgBUF/Rw0BCyAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQIAIMAQsgAEEANgIcIABCADcDECAAIAAoAgBBIHI2AgBBACAHQQJGDQAaIAIgBCgCBGsLIQAgA0EgaiQAIAALhwIAQZQpKAIAGgJAQX9BAAJ/QdAIECsiAAJ/QZQpKAIAQQBIBEBB0AggAEHIKBAUDAELQdAIIABByCgQFAsiASAARg0AGiABCyAARxtBAEgNAAJAQZgpKAIAQQpGDQBB3CgoAgAiAEHYKCgCAEYNAEHcKCAAQQFqNgIAIABBCjoAAAwBCyMAQRBrIgAkACAAQQo6AA8CQAJAQdgoKAIAIgEEfyABBUHIKBAVDQJB2CgoAgALQdwoKAIAIgFGDQBBmCkoAgBBCkYNAEHcKCABQQFqNgIAIAFBCjoAAAwBC0HIKCAAQQ9qQQFB7CgoAgARAgBBAUcNACAALQAPGgsgAEEQaiQAC0EACyYAQeApIAI4AgAgACABSARAA0AgABAcGiAAQQFqIgAgAUcNAAsLC+UEAgZ/D30jAEGAAWsiASQAQeQpKAIAIABBBnRqIgAqAgAhByAAKgIEIQggACoCCCEJIAAqAgwhCiAAKgIQIQsgACoCFCEMIAAqAhghDSAAKgIcIQ4gACoCICEPIAAqAiQhECAAKgIoIREgACoCLCESIAAqAjAhEyAAKgI0IRQgACoCOCEVIAEgACoCPLs5A3ggASAVuzkDcCABIBS7OQNoIAEgE7s5A2AgASASuzkDWCABIBG7OQNQIAEgELs5A0ggAUFAayAPuzkDACABIA67OQM4IAEgDbs5AzAgASAMuzkDKCABIAu7OQMgIAEgCrs5AxggASAJuzkDECABIAi7OQMIIAEgB7s5AwAjAEEQayIEJAAgBCABNgIMIwBB0AFrIgAkACAAIAE2AswBIABBoAFqIgJBAEEoEBEgACAAKALMATYCyAECQEEAIABByAFqIABB0ABqIAIQKUEASA0AQZQpKAIAQQBOIQVByCgoAgAhAkGQKSgCAEEATARAQcgoIAJBX3E2AgALAn8CQAJAQfgoKAIARQRAQfgoQdAANgIAQeQoQQA2AgBB2ChCADcDAEH0KCgCACEDQfQoIAA2AgAMAQtB2CgoAgANAQtBf0HIKBAVDQEaC0HIKCAAQcgBaiAAQdAAaiAAQaABahApCyEGIAMEf0HIKEEAQQBB7CgoAgARAgAaQfgoQQA2AgBB9CggAzYCAEHkKEEANgIAQdwoKAIAGkHYKEIANwMAQQAFIAYLGkHIKEHIKCgCACACQSBxcjYCACAFRQ0ACyAAQdABaiQAIARBEGokACABQYABaiQACwgAQYgqKAIACwgAQfwpKAIACwgAQfApKAIACwgAQeQpKAIACwvnHxQAQYAIC8cXLSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweAB2ZWN0b3IAc3RkOjpleGNlcHRpb24AbmFuAGJhZF9hcnJheV9uZXdfbGVuZ3RoAGluZgBlbXNjcmlwdGVuIGhhdmUgbG9hZGVkAHN0ZDo6YmFkX2FsbG9jAE5BTgBJTkYALgAobnVsbCkAWyUuMmYsICUuMmYsICUuMmYsICUuMmZdDQpbJS4yZiwgJS4yZiwgJS4yZiwgJS4yZl0NClslLjJmLCAlLjJmLCAlLjJmLCAlLjJmXQ0KWyUuMmYsICUuMmYsICUuMmYsICUuMmZdDQoAAwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGAAEHTHwt+QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNRkACgAZGRkAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAGQARChkZGQMKBwABAAkLGAAACQYLAAALAAYZAAAAGRkZAEHhIAshDgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAOAEGbIQsBDABBpyELFRMAAAAAEwAAAAAJDAAAAAAADAAADABB1SELARAAQeEhCxUPAAAABA8AAAAACRAAAAAAABAAABAAQY8iCwESAEGbIgseEQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoaAEHSIgsOGgAAABoaGgAAAAAAAAkAQYMjCwEUAEGPIwsVFwAAAAAXAAAAAAkUAAAAAAAUAAAUAEG9IwsBFgBBySML/QQVAAAAABUAAAAACRYAAAAAABYAABYAADAxMjM0NTY3ODlBQkNERUZOMTBfX2N4eGFiaXYxMTZfX3NoaW1fdHlwZV9pbmZvRQAAAADgEgAA8BEAAEAUAABOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAAADgEgAAIBIAABQSAABOMTBfX2N4eGFiaXYxMTdfX3BiYXNlX3R5cGVfaW5mb0UAAADgEgAAUBIAABQSAABOMTBfX2N4eGFiaXYxMTlfX3BvaW50ZXJfdHlwZV9pbmZvRQDgEgAAgBIAAHQSAAAAAAAARBIAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAAAAAACgTAAALAAAAEwAAAA0AAAAOAAAADwAAABQAAAAVAAAAFgAAAE4xMF9fY3h4YWJpdjEyMF9fc2lfY2xhc3NfdHlwZV9pbmZvRQAAAADgEgAAABMAAEQSAAAAAAAAmBMAAAEAAAAXAAAAGAAAAAAAAADAEwAAAQAAABkAAAAaAAAAAAAAAIATAAABAAAAGwAAABwAAABTdDlleGNlcHRpb24AAAAAuBIAAHATAABTdDliYWRfYWxsb2MAAAAA4BIAAIgTAACAEwAAU3QyMGJhZF9hcnJheV9uZXdfbGVuZ3RoAAAAAOASAACkEwAAmBMAAAAAAADwEwAAAgAAAB0AAAAeAAAAU3QxMWxvZ2ljX2Vycm9yAOASAADgEwAAgBMAAAAAAAAkFAAAAgAAAB8AAAAeAAAAU3QxMmxlbmd0aF9lcnJvcgAAAADgEgAAEBQAAPATAABTdDl0eXBlX2luZm8AAAAAuBIAADAUAEHIKAsBBQBB1CgLAQcAQewoCw4IAAAACQAAACgVAAAABABBhCkLAQEAQZQpCwX/////CgBB2CkLA+AbAQ==";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(binaryFile)){return fetch(binaryFile,{credentials:"same-origin"}).then((response=>{if(!response["ok"]){throw"failed to load wasm binary file at '"+binaryFile+"'"}return response["arrayBuffer"]()})).catch((()=>getBinarySync(binaryFile)))}else if(readAsync){return new Promise(((resolve,reject)=>{readAsync(binaryFile,(response=>resolve(new Uint8Array(response))),reject)}))}}return Promise.resolve().then((()=>getBinarySync(binaryFile)))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then((binary=>WebAssembly.instantiate(binary,imports))).then((instance=>instance)).then(receiver,(reason=>{err("failed to asynchronously prepare wasm: "+reason);abort(reason)}))}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then((response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,(function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)}))}))}return instantiateArrayBuffer(binaryFile,imports,callback)}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["f"];updateMemoryViews();wasmTable=Module["asm"]["h"];addOnInit(Module["asm"]["g"]);removeRunDependency("wasm-instantiate");return exports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult);return{}}function ExitStatus(status){this.name="ExitStatus";this.message=\`Program terminated with exit(\${status})\`;this.status=status}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24;this.set_type=function(type){HEAPU32[this.ptr+4>>2]=type};this.get_type=function(){return HEAPU32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAPU32[this.ptr+8>>2]=destructor};this.get_destructor=function(){return HEAPU32[this.ptr+8>>2]};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor)};this.set_adjusted_ptr=function(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr};this.get_adjusted_ptr=function(){return HEAPU32[this.ptr+16>>2]};this.get_exception_ptr=function(){var isPointer=___cxa_is_pointer_type(this.get_type());if(isPointer){return HEAPU32[this.excPtr>>2]}var adjusted=this.get_adjusted_ptr();if(adjusted!==0)return adjusted;return this.excPtr}}var exceptionLast=0;var uncaughtExceptionCount=0;function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw exceptionLast}var _abort=()=>{abort("")};var _emscripten_memcpy_big=(dest,src,num)=>HEAPU8.copyWithin(dest,src,src+num);var getHeapMax=()=>2147483648;var growMemory=size=>{var b=wasmMemory.buffer;var pages=size-b.byteLength+65535>>>16;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}var alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var printCharBuffers=[null,[],[]];var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;var UTF8ArrayToString=(heapOrArray,idx,maxBytesToRead)=>{var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var printChar=(stream,curr)=>{var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}};var UTF8ToString=(ptr,maxBytesToRead)=>ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):"";var SYSCALLS={varargs:undefined,get(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr(ptr){var ret=UTF8ToString(ptr);return ret}};var _fd_write=(fd,iov,iovcnt,pnum)=>{var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0};var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){if(Module["onExit"])Module["onExit"](code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx};var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var wasmImports={b:___cxa_throw,d:_abort,e:_emscripten_memcpy_big,c:_emscripten_resize_heap,a:_fd_write};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["g"]).apply(null,arguments)};var _allocation=Module["_allocation"]=function(){return(_allocation=Module["_allocation"]=Module["asm"]["i"]).apply(null,arguments)};var _getMatrixBufferPtr=Module["_getMatrixBufferPtr"]=function(){return(_getMatrixBufferPtr=Module["_getMatrixBufferPtr"]=Module["asm"]["j"]).apply(null,arguments)};var _getSRTPtr=Module["_getSRTPtr"]=function(){return(_getSRTPtr=Module["_getSRTPtr"]=Module["asm"]["k"]).apply(null,arguments)};var _getInfoPtr=Module["_getInfoPtr"]=function(){return(_getInfoPtr=Module["_getInfoPtr"]=Module["asm"]["l"]).apply(null,arguments)};var _getContinuedSRTPtr=Module["_getContinuedSRTPtr"]=function(){return(_getContinuedSRTPtr=Module["_getContinuedSRTPtr"]=Module["asm"]["m"]).apply(null,arguments)};var _printMatrix=Module["_printMatrix"]=function(){return(_printMatrix=Module["_printMatrix"]=Module["asm"]["n"]).apply(null,arguments)};var _updateAllMatrixContinueTransform=Module["_updateAllMatrixContinueTransform"]=function(){return(_updateAllMatrixContinueTransform=Module["_updateAllMatrixContinueTransform"]=Module["asm"]["o"]).apply(null,arguments)};var _main=Module["_main"]=function(){return(_main=Module["_main"]=Module["asm"]["p"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["q"]).apply(null,arguments)};var ___cxa_is_pointer_type=function(){return(___cxa_is_pointer_type=Module["asm"]["r"]).apply(null,arguments)};var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args=[]){var entryFunction=_main;args.unshift(thisProgram);var argc=args.length;var argv=stackAlloc((argc+1)*4);var argv_ptr=argv>>2;args.forEach((arg=>{HEAP32[argv_ptr++]=stringToUTF8OnStack(arg)}));HEAP32[argv_ptr]=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(args=arguments_){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;run();

if (!Module['ENVIRONMENT_IS_PTHREAD']) {
    // console.log("is main");
    window['wasmMatrix'] = Module;
}
        `,Xe=class Xe{static async init(A){await new Promise(e=>{const t=document.createElement("script");t.async=!0,t.type="text/javascript",t.src=URL.createObjectURL(new Blob([l4])),document.head.appendChild(t),t.onload=()=>{let i=()=>{this.wasm=window.wasmMatrix,this.wasm&&this.wasm.calledRun?e(!0):setTimeout(i,20)};i()}}),this.allocMatrix(A)}static allocMatrix(A){A>NA.maxCount&&console.error(`The maximum allocation size is exceeded! current:${A}, limit:${NA.maxCount}`),this.wasm._allocation(A),this.matrixBufferPtr=this.wasm._getMatrixBufferPtr(),this.matrixSRTBufferPtr=this.wasm._getSRTPtr(),this.matrixStateBufferPtr=this.wasm._getInfoPtr(),this.matrixContinuedSRTBufferPtr=this.wasm._getContinuedSRTPtr(),this.matrixBuffer=new Float32Array(this.wasm.HEAPF32.buffer,this.matrixBufferPtr,16*A),this.matrixSRTBuffer=new Float32Array(this.wasm.HEAPF32.buffer,this.matrixSRTBufferPtr,3*3*A),this.matrixContinuedSRTBuffer=new Float32Array(this.wasm.HEAPF32.buffer,this.matrixContinuedSRTBufferPtr,3*3*A),this.matrixStateBuffer=new Int32Array(this.wasm.HEAP32.buffer,this.matrixStateBufferPtr,Xe.stateStruct*A),NA.allocMatrix(A)}static updateAllContinueTransform(A,e,t){this.wasm._updateAllMatrixContinueTransform(A,e,t)}static setParent(A,e,t){this.matrixStateBuffer[A*Xe.stateStruct+2]=e>=0?e:-1,this.matrixStateBuffer[A*Xe.stateStruct+3]=t}static setTranslate(A,e,t,i){this.matrixSRTBuffer[A*9+6]=e,this.matrixSRTBuffer[A*9+7]=t,this.matrixSRTBuffer[A*9+8]=i}static setRotation(A,e,t,i){this.matrixSRTBuffer[A*9+3]=e%360,this.matrixSRTBuffer[A*9+4]=t%360,this.matrixSRTBuffer[A*9+5]=i%360}static setScale(A,e,t,i){this.matrixSRTBuffer[A*9+0]=e,this.matrixSRTBuffer[A*9+1]=t,this.matrixSRTBuffer[A*9+2]=i}static setContinueTranslate(A,e,t,i){(e!=0||t!=0||i!=0)&&(this.matrixContinuedSRTBuffer[A*9+6]=e,this.matrixContinuedSRTBuffer[A*9+7]=t,this.matrixContinuedSRTBuffer[A*9+8]=i,this.matrixStateBuffer[A*Xe.stateStruct+1]=1)}static setContinueRotation(A,e,t,i){(e!=0||t!=0||i!=0)&&(this.matrixContinuedSRTBuffer[A*9+3]=e,this.matrixContinuedSRTBuffer[A*9+4]=t,this.matrixContinuedSRTBuffer[A*9+5]=i,this.matrixStateBuffer[A*Xe.stateStruct+1]=1)}static setContinueScale(A,e,t,i){(e!=0||t!=0||i!=0)&&(this.matrixContinuedSRTBuffer[A*9+0]=e,this.matrixContinuedSRTBuffer[A*9+1]=t,this.matrixContinuedSRTBuffer[A*9+2]=i,this.matrixStateBuffer[A*Xe.stateStruct+1]=1)}};a(Xe,"matrixBuffer"),a(Xe,"matrixSRTBuffer"),a(Xe,"matrixContinuedSRTBuffer"),a(Xe,"matrixStateBuffer"),a(Xe,"matrixBufferPtr"),a(Xe,"matrixSRTBufferPtr"),a(Xe,"matrixContinuedSRTBufferPtr"),a(Xe,"matrixStateBufferPtr"),a(Xe,"wasm"),a(Xe,"stateStruct",4);let ce=Xe;class _i{}a(_i,"AXIS_ANGLE","axisAngle"),a(_i,"EULER_ANGLES","eulerAngles"),a(_i,"QUATERNION","quaternion");var Oe;let oe=(Oe=class{constructor(A=0,e=0,t=0,i=1){a(this,"x",0);a(this,"y",0);a(this,"z",0);a(this,"w",1);this.x=A,this.y=e,this.z=t,this.w=i}static identity(){return Oe._zero}static quaternionToMatrix(A,e){let t=A.x*2,i=A.y*2,n=A.z*2,s=A.x*t,o=A.y*i,u=A.z*n,l=A.x*i,c=A.x*n,h=A.y*n,d=A.w*t,f=A.w*i,p=A.w*n;e.rawData[0]=1-(o+u),e.rawData[1]=l+p,e.rawData[2]=c-f,e.rawData[3]=0,e.rawData[4]=l-p,e.rawData[5]=1-(s+u),e.rawData[6]=h+d,e.rawData[7]=0,e.rawData[8]=c+f,e.rawData[9]=h-d,e.rawData[10]=1-(s+o),e.rawData[11]=0,e.rawData[12]=0,e.rawData[13]=0,e.rawData[14]=0,e.rawData[15]=1}get magnitude(){return Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z)}set(A=0,e=0,t=0,i=1){this.x=A,this.y=e,this.z=t,this.w=i}divide(A){return A instanceof Oe?new Oe(this.x/A.x,this.y/A.y,this.z/A.z):(this.x=this.x/A,this.y=this.y/A,this.z=this.z/A,this)}setFromArray(A){return this.x=A[0],this.y=A[1],this.z=A[2],this.w=A[3],this}multiply(A,e){var t=A.w,i=A.x,n=A.y,s=A.z,o=e.w,u=e.x,l=e.y,c=e.z;this.w=t*o-i*u-n*l-s*c,this.x=t*u+i*o+n*c-s*l,this.y=t*l-i*c+n*o+s*u,this.z=t*c+i*l-n*u+s*o}multiplyVector(A,e=null){e||(e=new Oe);var t=A.x,i=A.y,n=A.z;return e.w=-this.x*t-this.y*i-this.z*n,e.x=this.w*t+this.y*n-this.z*i,e.y=this.w*i-this.x*n+this.z*t,e.z=this.w*n+this.x*i-this.y*t,e}fromAxisAngle(A,e){e*=Math.PI/180;var t=e*.5,i=Math.sin(t);this.w=Math.cos(t),this.x=A.x*i,this.y=A.y*i,this.z=A.z*i,this.normalize()}toAxisAngle(A){var e=this.x*this.x+this.y*this.y+this.z*this.z,t=0;return e>0?(t=2*Math.acos(this.w),e=1/Math.sqrt(e),A.x=this.x*e,A.y=this.y*e,A.z=this.z*e):(t=0,A.x=1,A.y=0,A.z=0),t}slerp(A,e,t){var i=A.w,n=A.x,s=A.y,o=A.z,u=e.w,l=e.x,c=e.y,h=e.z,d=i*u+n*l+s*c+o*h;if(d<0&&(d=-d,u=-u,l=-l,c=-c,h=-h),d<.95){var f=Math.acos(d),p=1/Math.sin(f),y=Math.sin(f*(1-t))*p,_=Math.sin(f*t)*p;this.w=i*y+u*_,this.x=n*y+l*_,this.y=s*y+c*_,this.z=o*y+h*_}else{this.w=i+t*(u-i),this.x=n+t*(l-n),this.y=s+t*(c-s),this.z=o+t*(h-o);var g=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z);this.w*=g,this.x*=g,this.y*=g,this.z*=g}}lerp(A,e,t){var i=A.w,n=A.x,s=A.y,o=A.z,u=e.w,l=e.x,c=e.y,h=e.z,d;i*u+n*l+s*c+o*h<0&&(u=-u,l=-l,c=-c,h=-h),this.w=i+t*(u-i),this.x=n+t*(l-n),this.y=s+t*(c-s),this.z=o+t*(h-o),d=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=d,this.x*=d,this.y*=d,this.z*=d}fromEulerAngles(A,e,t){A*=Ie,e*=Ie,t*=Ie;var i=A*.5,n=e*.5,s=t*.5,o=Math.cos(i),u=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);return this.w=o*l*h+u*c*d,this.x=u*l*h-o*c*d,this.y=o*c*h+u*l*d,this.z=o*l*d-u*c*h,this}setFromRotationMatrix(A){const e=A.rawData,t=e[0],i=e[4],n=e[8],s=e[1],o=e[5],u=e[9],l=e[2],c=e[6],h=e[10],d=t+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this.w=.25/f,this.x=(c-u)*f,this.y=(n-l)*f,this.z=(s-i)*f}else if(t>o&&t>h){const f=2*Math.sqrt(1+t-o-h);this.w=(c-u)/f,this.x=.25*f,this.y=(i+s)/f,this.z=(n+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-t-h);this.w=(n-l)/f,this.x=(i+s)/f,this.y=.25*f,this.z=(u+c)/f}else{const f=2*Math.sqrt(1+h-t-o);this.w=(s-i)/f,this.x=(n+l)/f,this.y=(u+c)/f,this.z=.25*f}return this}getEulerAngles(A){var e,t,i,n,s,o,u,l;return A||(A=new I),n=this.x,s=this.y,o=this.z,u=this.w,l=2*(u*s-n*o),l<=-.99999?(e=2*Math.atan2(n,u),t=-Math.PI/2,i=0):l>=.99999?(e=2*Math.atan2(n,u),t=Math.PI/2,i=0):(e=Math.atan2(2*(u*n+s*o),1-2*(n*n+s*s)),t=Math.asin(l),i=Math.atan2(2*(u*o+n*s),1-2*(s*s+o*o))),A.set(e,t,i).scaleBy(yu)}normalize(A=1){var e=A/Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);this.x*=e,this.y*=e,this.z*=e,this.w*=e}toString(){return"{x:"+this.x+" y:"+this.y+" z:"+this.z+" w:"+this.w+"}"}fromMatrix(A){var e=A.decompose(_i.QUATERNION)[1];this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w}inverse(A=null){A||(A=new Oe);var e=this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z;if(e>0){var t=1/e;A.w=this.w*t,A.x=-this.x*t,A.y=-this.y*t,A.z=-this.z*t}return A}clone(){return new Oe(this.x,this.y,this.z,this.w)}transformVector(A,e=null){var t,i,n,s,o=A.x,u=A.y,l=A.z;return e||(e=new I),s=-this.x*o-this.y*u-this.z*l,t=this.w*o+this.y*l-this.z*u,i=this.w*u-this.x*l+this.z*o,n=this.w*l+this.x*u-this.y*o,e.x=-s*this.x+t*this.w-i*this.z+n*this.y,e.y=-s*this.y+t*this.z+i*this.w-n*this.x,e.z=-s*this.z-t*this.y+i*this.x+n*this.w,e}copyFrom(A){var e=this;return e.x=A.x,e.y=A.y,e.z=A.z,e.w=A.w,this}mul(A,e,t){let i=t||new Oe;return i.x=A.w*e.x+A.x*e.w+A.y*e.z-A.z*e.y,i.y=A.w*e.y+A.y*e.w+A.z*e.x-A.x*e.z,i.z=A.w*e.z+A.z*e.w+A.x*e.y-A.y*e.x,i.w=A.w*e.w-A.x*e.x-A.y*e.y-A.z*e.z,i}clampf(A,e,t){if(e>t){var i=e;e=t,t=i}return A<e?e:A<t?A:t}static serialize(A){return new Oe(A.x,A.y,A.z,A.w)}},a(Oe,"HELP_0",new Oe(0,0,0,1)),a(Oe,"HELP_1",new Oe(0,0,0,1)),a(Oe,"HELP_2",new Oe(0,0,0,1)),a(Oe,"_zero",new Oe(0,0,0,1)),a(Oe,"CALCULATION_QUATERNION",new Oe),Oe),yu=180/Math.PI,Ie=Math.PI/180;function vt(r,A,e){return Math.max(A,Math.min(e,r))}class Cr{static gaussFunction(A,e,t,i){let n=Math.pow(A-t,2),s=2*Math.pow(i,2),o=-1*(n/s),u=Math.pow(Math.E,o);return Math.round(u*e)}static computeGaussian(A,e){return 1/Math.sqrt(2*Math.PI*e)*Math.exp(-(A*A)/(2*e*e))}static gaussCoef(A){A<.5&&(A=.5);let e=Math.exp(.726*.726)/A,t=Math.exp(-e),i=Math.exp(-2*e),n=(1-t)*(1-t)/(1+2*e*t-i),s=n,o=n*(e-1)*t,u=n*(e+1)*t,l=-n*i,c=2*t,h=-i,d=(s+o)/(1-c-h),f=(u+l)/(1-c-h);return new Float32Array([s,o,u,l,c,h,d,f])}static clampf(A,e,t){if(e>t){let i=e;e=t,t=i}return A<e?e:A<t?A:t}static normalizeAngle(A){for(;A>180;)A-=360;for(;A<-180;)A+=360;return A}static fract(A){return A-Math.floor(A)}static getRandDirXZ(A){let e=A*Math.random(),t=360*Math.random()*Ie,i=Math.cos(t)*e,n=Math.sin(t)*e;return{x:i,z:n}}static getRandDirXYZ(A){let e=A*Math.random(),t=360*Math.random()*Ie,i=Math.cos(t)*e,n=Math.tan(t)*e,s=Math.sin(t)*e;return new I(i,n,s)}static getCycleXYZ(A){let e=A*Math.random(),t=360*Math.random()*Ie,i=Math.cos(t)*e,n=A*Math.random()-A*.5,s=Math.sin(t)*e;return new I(i,n,s)}static angle(A,e){let t=Ge.HELP_0,i=Ge.HELP_1;return t.set(A.x,A.z),i.set(e.x,e.z),Math.acos((t.x*i.x+t.y*i.y)/(t.abs()*i.abs()))}static angle_360(A,e){let t=I.HELP_0;return A.crossProduct(e,t),t.z>0?Cr.angle(A,e):360-Cr.angle(A,e)}getRotationY(A){return Cr.normalizeAngle(Math.atan2(A.z,A.x)*yu)}static fromToRotation(A,e,t=null){t||(t=new oe);let i=NA.help_matrix_2;return NA.fromToRotation(A,e,i),t.fromMatrix(i),t}static getEularDir_yUp(A){let e=oe.HELP_0;return e.fromEulerAngles(0,A,0),e.transformVector(I.Z_AXIS,I.HELP_5),I.HELP_5}static transformVector(A,e,t=null){t||(t=new I);let i=A.rawData,n=i[0],s=i[1],o=i[2],u=i[3],l=i[4],c=i[5],h=i[6],d=i[7],f=i[8],p=i[9],y=i[10],_=i[11],g=i[12],m=i[13],E=i[14],w=i[15],L=e.x,T=e.y,R=e.z;return t.x=n*L+l*T+f*R+g,t.y=s*L+c*T+p*R+m,t.z=o*L+h*T+y*R+E,t.w=u*L+d*T+_*R+w,t}}let pg=function(r,A,e){let t=e-A;return Math.floor(r/t)%2==0?r%t+A:e-r%t+A},gg=function(r,A,e){let t=e-A;return r%t+A};function Wd(r,A){return r instanceof I&&A instanceof I||r instanceof oe&&A instanceof oe?r.x*A.x+r.y*A.y+r.z*A.z:r.x*A.x+r.y*A.y}function c4(r){return Wd(r,r)}function h4(r,A){return r-Math.floor(r/A)*A}const hA=class hA{constructor(A=!1){a(this,"index",0);a(this,"offset",0);a(this,"rawData");a(this,"_position");if(hA.useCount>=hA.allocCount){let e=hA.allocCount+hA.allocOnceCount;ce.allocMatrix(e)}this.index=hA.useCount,this.offset=hA.wasmMatrixPtr+this.index*hA.blockBytes,hA.dynamicGlobalMatrixRef[this.index]=this,hA.useCount++,this.rawData=new Float32Array(hA.dynamicMatrixBytes.buffer,this.offset,16),this._position=new I,this.identity()}static allocMatrix(A){this.allocCount=A,hA.dynamicMatrixBytes=ce.matrixBuffer,hA.buffer=hA.dynamicMatrixBytes.buffer,hA.wasmMatrixPtr=ce.matrixBufferPtr,this.dynamicGlobalMatrixRef||(this.dynamicGlobalMatrixRef=[]),this.dynamicGlobalMatrixRef.forEach(e=>{e.offset=hA.wasmMatrixPtr+e.index*hA.blockBytes,e.rawData=new Float32Array(hA.dynamicMatrixBytes.buffer,e.offset,16)}),hA.help_matrix_0||(hA.help_matrix_0=new hA),hA.help_matrix_1||(hA.help_matrix_1=new hA),hA.help_matrix_2||(hA.help_matrix_2=new hA),hA.helpMatrix||(hA.helpMatrix=new hA),hA.helpMatrix2||(hA.helpMatrix2=new hA),hA._getEulerMatrix||(hA._getEulerMatrix=new hA),hA._getEulerMatrix.identity()}static fromToRotation(A,e,t){return t||(t=new hA),t.transformDir(A,e),t}static getAxisRotation(A,e,t,i){let n=new hA,s=i*(Math.PI/180),o=Math.cos(s),u=Math.sin(s),l=1-o,c,h;return n.rawData[0]=o+A*A*l,n.rawData[5]=o+e*e*l,n.rawData[10]=o+t*t*l,c=A*e*l,h=t*u,n.rawData[1]=c+h,n.rawData[4]=c-h,c=A*t*l,h=e*u,n.rawData[8]=c+h,n.rawData[2]=c-h,c=e*t*l,h=A*u,n.rawData[9]=c-h,n.rawData[6]=c+h,n}static sanitizeEuler(A){hA.makePositive(A)}static makePositive(A){let e=-1e-4,t=Math.PI*2-1e-4;A.x<e?A.x+=2*Math.PI:A.x>t&&(A.x-=2*Math.PI),A.y<e?A.y+=2*Math.PI:A.y>t&&(A.y-=2*Math.PI),A.z<e?A.z+=2*Math.PI:A.z>t&&(A.z-=2*Math.PI)}static matrixToEuler(A,e){return A.get(1,2)<.999?A.get(1,2)>-.999?(e.x=Math.asin(-A.get(1,2)),e.y=Math.atan2(A.get(0,2),A.get(2,2)),e.z=Math.atan2(A.get(1,0),A.get(1,1)),hA.sanitizeEuler(e),!0):(e.x=Math.PI*.5,e.y=Math.atan2(A.get(0,1),A.get(0,0)),e.z=0,hA.sanitizeEuler(e),!1):(e.x=-Math.PI*.5,e.y=Math.atan2(-A.get(0,1),A.get(0,0)),e.z=0,hA.sanitizeEuler(e),!1)}static matrixMultiply(A,e,t){hA.wasm.Matrix_Multiply(A.index,e.index,t.index)}static matrixAppend(A,e,t){hA.wasm.Matrix_Append(A.index,e.index,t.index)}static matrixRotateY(A,e){hA.wasm.Matrix_Append(A,e.index)}static matrixRotate(A,e,t){hA.wasm.Matrix_Rotate(A,e,t.index)}lookAt(A,e,t=I.Y_AXIS){let i=this.rawData,n=e.subtract(A,I.HELP_0);n.length<1e-4&&(n.z=1),n.normalize();let s=t.crossProduct(n,I.HELP_1);s.length<1e-4&&(Math.abs(t.z)>.9999?n.x+=1e-4:n.z+=1e-4,n.normalize()),s=t.crossProduct(n,s).normalize();let o=n.crossProduct(s,I.HELP_2).normalize();i[0]=s.x,i[1]=o.x,i[2]=n.x,i[3]=0,i[4]=s.y,i[5]=o.y,i[6]=n.y,i[7]=0,i[8]=s.z,i[9]=o.z,i[10]=n.z,i[11]=0,i[12]=-s.dotProduct(A),i[13]=-o.dotProduct(A),i[14]=-n.dotProduct(A),i[15]=1}multiply(A){let e=this.rawData,t=A.rawData,i=hA.float32Array;i[0]=e[0]*t[0]+e[1]*t[4]+e[2]*t[8]+e[3]*t[12],i[1]=e[0]*t[1]+e[1]*t[5]+e[2]*t[9]+e[3]*t[13],i[2]=e[0]*t[2]+e[1]*t[6]+e[2]*t[10]+e[3]*t[14],i[3]=e[0]*t[3]+e[1]*t[7]+e[2]*t[11]+e[3]*t[15],i[4]=e[4]*t[0]+e[5]*t[4]+e[6]*t[8]+e[7]*t[12],i[5]=e[4]*t[1]+e[5]*t[5]+e[6]*t[9]+e[7]*t[13],i[6]=e[4]*t[2]+e[5]*t[6]+e[6]*t[10]+e[7]*t[14],i[7]=e[4]*t[3]+e[5]*t[7]+e[6]*t[11]+e[7]*t[15],i[8]=e[8]*t[0]+e[9]*t[4]+e[10]*t[8]+e[11]*t[12],i[9]=e[8]*t[1]+e[9]*t[5]+e[10]*t[9]+e[11]*t[13],i[10]=e[8]*t[2]+e[9]*t[6]+e[10]*t[10]+e[11]*t[14],i[11]=e[8]*t[3]+e[9]*t[7]+e[10]*t[11]+e[11]*t[15],i[12]=e[12]*t[0]+e[13]*t[4]+e[14]*t[8]+e[15]*t[12],i[13]=e[12]*t[1]+e[13]*t[5]+e[14]*t[9]+e[15]*t[13],i[14]=e[12]*t[2]+e[13]*t[6]+e[14]*t[10]+e[15]*t[14],i[15]=e[12]*t[3]+e[13]*t[7]+e[14]*t[11]+e[15]*t[15],e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15]}multiplyMatrices(A,e){const t=A.rawData,i=e.rawData,n=this.rawData,s=t[0],o=t[4],u=t[8],l=t[12],c=t[1],h=t[5],d=t[9],f=t[13],p=t[2],y=t[6],_=t[10],g=t[14],m=t[3],E=t[7],w=t[11],L=t[15],T=i[0],R=i[4],P=i[8],F=i[12],H=i[1],M=i[5],b=i[9],v=i[13],C=i[2],x=i[6],S=i[10],B=i[14],D=i[3],Q=i[7],Z=i[11],AA=i[15];return n[0]=s*T+o*H+u*C+l*D,n[4]=s*R+o*M+u*x+l*Q,n[8]=s*P+o*b+u*S+l*Z,n[12]=s*F+o*v+u*B+l*AA,n[1]=c*T+h*H+d*C+f*D,n[5]=c*R+h*M+d*x+f*Q,n[9]=c*P+h*b+d*S+f*Z,n[13]=c*F+h*v+d*B+f*AA,n[2]=p*T+y*H+_*C+g*D,n[6]=p*R+y*M+_*x+g*Q,n[10]=p*P+y*b+_*S+g*Z,n[14]=p*F+y*v+_*B+g*AA,n[3]=m*T+E*H+w*C+L*D,n[7]=m*R+E*M+w*x+L*Q,n[11]=m*P+E*b+w*S+L*Z,n[15]=m*F+E*v+w*B+L*AA,this}multiplyPoint3(A,e){e||(e=new I);let t=this.rawData;return e.x=t[0]*A.x+t[4]*A.y+t[8]*A.z+t[12],e.y=t[1]*A.x+t[5]*A.y+t[9]*A.z+t[13],e.z=t[2]*A.x+t[6]*A.y+t[10]*A.z+t[14],e}multiplyVector4(A,e){e||(e=new I);let t=this.rawData,i=A.x,n=A.y,s=A.z,o=t[3]*i+t[7]*n+t[11]*s+t[15];return o=o||1,e.x=(t[0]*i+t[4]*n+t[8]*s+t[12])/o,e.y=(t[1]*i+t[5]*n+t[9]*s+t[13])/o,e.z=(t[2]*i+t[6]*n+t[10]*s+t[14])/o,e.w=1,e}transformVector4(A,e){let t=this.rawData;e||(e=new I);let i=A.x,n=A.y,s=A.z,o=A.w;return e.x=i*t[0]+n*t[4]+s*t[8]+o*t[12],e.y=i*t[1]+n*t[5]+s*t[9]+o*t[13],e.z=i*t[2]+n*t[6]+s*t[10]+o*t[14],e.w=i*t[3]+n*t[7]+s*t[11]+o*t[15],e}perspectiveMultiplyPoint3(A,e){let t=I.HELP_2,i,n=this.rawData;if(t.x=n[0]*A.x+n[4]*A.y+n[8]*A.z+n[12],t.y=n[1]*A.x+n[5]*A.y+n[9]*A.z+n[13],t.z=n[2]*A.x+n[6]*A.y+n[10]*A.z+n[14],i=n[3]*A.x+n[7]*A.y+n[11]*A.z+n[15],Math.abs(i)>1e-7){let s=1/i;return e.x=t.x*s,e.y=t.y*s,e.z=t.z*s,!0}else return e.x=0,e.y=0,e.z=0,!1}perspective(A,e,t,i){let n=this.rawData,s=A*Ie/2,o=Math.cos(s)/Math.sin(s);n[0]=-o/e,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=o,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=i/(i-t),n[11]=1,n[12]=0,n[13]=0,n[14]=-t*i/(i-t),n[15]=0}perspective3(A,e,t,i){var n=Math.tan(A*Math.PI/360)*t,s=n*e;this.frustum(-s,s,-n,n,t,i)}frustum(A,e,t,i,n,s){var o=this.rawData;o[0]=-2*n/(e-A),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2*n/(i-t),o[6]=0,o[7]=0,o[8]=(e+A)/(e-A),o[9]=(i+t)/(i-t),o[10]=s/(s-n),o[11]=1,o[12]=0,o[13]=0,o[14]=-s*n/(s-n),o[15]=0}ortho(A,e,t,i){let n=this.rawData;return n[0]=2/A,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=2/e,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1/(i-t),n[11]=0,n[12]=0,n[13]=0,n[14]=t/(t-i),n[15]=1,this}orthoZO(A,e,t,i,n,s){let o=this.rawData,u=1/(A-e),l=1/(t-i),c=1/(n-s);return o[0]=-2*u,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*l,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=c,o[11]=0,o[12]=(A+e)*u,o[13]=(i+t)*l,o[14]=n*c,o[15]=1,this}orthoOffCenter(A,e,t,i,n,s){let o=this.rawData;o[0]=2/(e-A),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(i-t),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(s-n),o[11]=0,o[12]=(A+e)/(A-e),o[13]=(i+t)/(t-i),o[14]=n/(n-s),o[15]=1}transformDir(A,e){let t=this.rawData,i=1e-6,n=I.ZERO;e.crossProduct(A,n);let s=e.dotProduct(A);if(s>1-i)this.identity();else{let o,u,l,c,h,d=n.dotProduct(n),f=(1-s)/d;o=f*n.x,u=f*n.z,l=o*n.y,c=o*n.z,h=u*n.y,t[0]=s+o*n.x,t[1]=l-n.z,t[2]=c+n.y,t[4]=l+n.z,t[5]=s+f*n.y*n.y,t[6]=h-n.x,t[8]=c-n.y,t[9]=h+n.x,t[10]=s+u*n.z,t[3]=0,t[7]=0,t[11]=0,t[15]=1}}append(A){let e=this.rawData,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],u=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],y=e[3],_=e[7],g=e[11],m=e[15];e[0]=t*A.rawData[0]+o*A.rawData[4]+h*A.rawData[8]+y*A.rawData[12],e[1]=t*A.rawData[1]+o*A.rawData[5]+h*A.rawData[9]+y*A.rawData[13],e[2]=t*A.rawData[2]+o*A.rawData[6]+h*A.rawData[10]+y*A.rawData[14],e[3]=t*A.rawData[3]+o*A.rawData[7]+h*A.rawData[11]+y*A.rawData[15],e[4]=i*A.rawData[0]+u*A.rawData[4]+d*A.rawData[8]+_*A.rawData[12],e[5]=i*A.rawData[1]+u*A.rawData[5]+d*A.rawData[9]+_*A.rawData[13],e[6]=i*A.rawData[2]+u*A.rawData[6]+d*A.rawData[10]+_*A.rawData[14],e[7]=i*A.rawData[3]+u*A.rawData[7]+d*A.rawData[11]+_*A.rawData[15],e[8]=n*A.rawData[0]+l*A.rawData[4]+f*A.rawData[8]+g*A.rawData[12],e[9]=n*A.rawData[1]+l*A.rawData[5]+f*A.rawData[9]+g*A.rawData[13],e[10]=n*A.rawData[2]+l*A.rawData[6]+f*A.rawData[10]+g*A.rawData[14],e[11]=n*A.rawData[3]+l*A.rawData[7]+f*A.rawData[11]+g*A.rawData[15],e[12]=s*A.rawData[0]+c*A.rawData[4]+p*A.rawData[8]+m*A.rawData[12],e[13]=s*A.rawData[1]+c*A.rawData[5]+p*A.rawData[9]+m*A.rawData[13],e[14]=s*A.rawData[2]+c*A.rawData[6]+p*A.rawData[10]+m*A.rawData[14],e[15]=s*A.rawData[3]+c*A.rawData[7]+p*A.rawData[11]+m*A.rawData[15]}add(A){let e=this.rawData,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],u=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],y=e[3],_=e[7],g=e[11],m=e[15],E=A.rawData[0],w=A.rawData[4],L=A.rawData[8],T=A.rawData[12],R=A.rawData[1],P=A.rawData[5],F=A.rawData[9],H=A.rawData[13],M=A.rawData[2],b=A.rawData[6],v=A.rawData[10],C=A.rawData[14],x=A.rawData[3],S=A.rawData[7],B=A.rawData[11],D=A.rawData[15];return e[0]=t+E,e[1]=o+R,e[2]=h+M,e[3]=y+x,e[4]=i+w,e[5]=u+P,e[6]=d+b,e[7]=_+S,e[8]=n+L,e[9]=l+F,e[10]=f+v,e[11]=g+B,e[12]=s+T,e[13]=c+H,e[14]=p+C,e[15]=m+D,this}sub(A){let e=this.rawData,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],u=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],y=e[3],_=e[7],g=e[11],m=e[15],E=A.rawData[0],w=A.rawData[4],L=A.rawData[8],T=A.rawData[12],R=A.rawData[1],P=A.rawData[5],F=A.rawData[9],H=A.rawData[13],M=A.rawData[2],b=A.rawData[6],v=A.rawData[10],C=A.rawData[14],x=A.rawData[3],S=A.rawData[7],B=A.rawData[11],D=A.rawData[15];return e[0]=t-E,e[1]=o-R,e[2]=h-M,e[3]=y-x,e[4]=i-w,e[5]=u-P,e[6]=d-b,e[7]=_-S,e[8]=n-L,e[9]=l-F,e[10]=f-v,e[11]=g-B,e[12]=s-T,e[13]=c-H,e[14]=p-C,e[15]=m-D,this}mult(A){let e=this.rawData;return e[0]*=A,e[1]*=A,e[2]*=A,e[3]*=A,e[4]*=A,e[5]*=A,e[6]*=A,e[7]*=A,e[8]*=A,e[9]*=A,e[10]*=A,e[11]*=A,e[12]*=A,e[13]*=A,e[14]*=A,e[15]*=A,this}appendRotation(A,e){let t=hA.getAxisRotation(e.x,e.y,e.z,A);this.append(t)}createByRotation(A,e){let t=hA.helpMatrix,i,n,s=A*Ie;return i=Math.sin(s),n=Math.cos(s),e.x==1&&(t.rawData[0]=1,t.rawData[1]=0,t.rawData[2]=0,t.rawData[3]=0,t.rawData[4]=0,t.rawData[5]=n,t.rawData[6]=i,t.rawData[7]=0,t.rawData[8]=0,t.rawData[9]=-i,t.rawData[10]=n,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),e.y==1&&(t.rawData[0]=n,t.rawData[1]=0,t.rawData[2]=-i,t.rawData[3]=0,t.rawData[4]=0,t.rawData[5]=1,t.rawData[6]=0,t.rawData[7]=0,t.rawData[8]=i,t.rawData[9]=0,t.rawData[10]=n,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),e.z==1&&(t.rawData[0]=n,t.rawData[1]=i,t.rawData[2]=0,t.rawData[3]=0,t.rawData[4]=-i,t.rawData[5]=n,t.rawData[6]=0,t.rawData[7]=0,t.rawData[8]=0,t.rawData[9]=0,t.rawData[10]=1,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),this.append(t),this}appendScale(A,e,t){hA.helpMatrix.createByScale(A,e,t),this.append(hA.helpMatrix)}createByScale(A,e,t){let i=this.rawData;i[0]=A,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=t,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1}appendTranslation(A,e,t){let i=this.rawData;i[12]+=A,i[13]+=e,i[14]+=t}clone(){let A=new hA;return A.copyFrom(this),A}copyRowFrom(A,e){let t=this.rawData;switch(A){case 0:t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w;break;case 1:t[4]=e.x,t[5]=e.y,t[6]=e.z,t[7]=e.w;break;case 2:t[8]=e.x,t[9]=e.y,t[10]=e.z,t[11]=e.w;break;case 3:t[12]=e.x,t[13]=e.y,t[14]=e.z,t[15]=e.w;break}}copyRowTo(A,e){let t=this.rawData;switch(A){case 0:e.x=t[0],e.y=t[1],e.z=t[2],e.w=t[3];break;case 1:e.x=t[4],e.y=t[5],e.z=t[6],e.w=t[7];break;case 2:e.x=t[8],e.y=t[9],e.z=t[10],e.w=t[11];break;case 3:e.x=t[12],e.y=t[13],e.z=t[14],e.w=t[15];break}}copyFrom(A){let e=this.rawData;return e[0]=A.rawData[0],e[1]=A.rawData[1],e[2]=A.rawData[2],e[3]=A.rawData[3],e[4]=A.rawData[4],e[5]=A.rawData[5],e[6]=A.rawData[6],e[7]=A.rawData[7],e[8]=A.rawData[8],e[9]=A.rawData[9],e[10]=A.rawData[10],e[11]=A.rawData[11],e[12]=A.rawData[12],e[13]=A.rawData[13],e[14]=A.rawData[14],e[15]=A.rawData[15],this}copyRawDataTo(A,e=0,t=!1){let i=this.rawData;A[0+e]=i[0],A[1+e]=i[1],A[2+e]=i[2],A[3+e]=i[3],A[4+e]=i[4],A[5+e]=i[5],A[6+e]=i[6],A[7+e]=i[7],A[8+e]=i[8],A[9+e]=i[9],A[10+e]=i[10],A[11+e]=i[11],A[12+e]=i[12],A[13+e]=i[13],A[14+e]=i[14],A[15+e]=i[15]}copyColFrom(A,e){let t=this.rawData;switch(A){case 0:t[0]=e.x,t[4]=e.y,t[8]=e.z,t[12]=e.w;break;case 1:t[1]=e.x,t[5]=e.y,t[9]=e.z,t[13]=e.w;break;case 2:t[2]=e.x,t[6]=e.y,t[10]=e.z,t[14]=e.w;break;case 3:t[3]=e.x,t[7]=e.y,t[11]=e.z,t[15]=e.w;break}}copyColTo(A,e){let t=this.rawData;switch(A){case 0:e.x=t[0],e.y=t[4],e.z=t[8],e.w=t[12];break;case 1:e.x=t[1],e.y=t[5],e.z=t[9],e.w=t[13];break;case 2:e.x=t[2],e.y=t[6],e.z=t[10],e.w=t[14];break;case 3:e.x=t[3],e.y=t[7],e.z=t[11],e.w=t[15];break}}copyToMatrix3D(A){A.rawData=this.rawData.slice(0)}makeRotationFromQuaternion(A){return this.compose(hA._zero,A,hA._one),this}decompose(A="eulerAngles",e){let t=oe.CALCULATION_QUATERNION,i=e||hA._prs;this.copyRawDataTo(hA.decomposeRawData);let n=hA.decomposeRawData,s=i[0];s.x=n[12],s.y=n[13],s.z=n[14],n[12]=0,n[13]=0,n[14]=0;let o=i[2];o.x=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]),o.y=Math.sqrt(n[4]*n[4]+n[5]*n[5]+n[6]*n[6]),o.z=Math.sqrt(n[8]*n[8]+n[9]*n[9]+n[10]*n[10]),n[0]*(n[5]*n[10]-n[6]*n[9])-n[1]*(n[4]*n[10]-n[6]*n[8])+n[2]*(n[4]*n[9]-n[5]*n[8])<0&&(o.z=-o.z),n[0]/=o.x,n[1]/=o.x,n[2]/=o.x,n[4]/=o.y,n[5]/=o.y,n[6]/=o.y,n[8]/=o.z,n[9]/=o.z,n[10]/=o.z;let u=i[1],l;switch(A){case _i.AXIS_ANGLE:u.w=Math.acos((n[0]+n[5]+n[10]-1)/2);let c=Math.sqrt((n[6]-n[9])*(n[6]-n[9])+(n[8]-n[2])*(n[8]-n[2])+(n[1]-n[4])*(n[1]-n[4]));u.x=(n[6]-n[9])/c,u.y=(n[8]-n[2])/c,u.z=(n[1]-n[4])/c;break;case _i.QUATERNION:l=n[0]+n[5]+n[10],l>0?(u.w=Math.sqrt(1+l)/2,u.x=(n[6]-n[9])/(4*u.w),u.y=(n[8]-n[2])/(4*u.w),u.z=(n[1]-n[4])/(4*u.w)):n[0]>n[5]&&n[0]>n[10]?(u.x=Math.sqrt(1+n[0]-n[5]-n[10])/2,u.w=(n[6]-n[9])/(4*u.x),u.y=(n[1]+n[4])/(4*u.x),u.z=(n[8]+n[2])/(4*u.x)):n[5]>n[10]?(u.y=Math.sqrt(1+n[5]-n[0]-n[10])/2,u.x=(n[1]+n[4])/(4*u.y),u.w=(n[8]-n[2])/(4*u.y),u.z=(n[6]+n[9])/(4*u.y)):(u.z=Math.sqrt(1+n[10]-n[0]-n[5])/2,u.x=(n[8]+n[2])/(4*u.z),u.y=(n[6]+n[9])/(4*u.z),u.w=(n[1]-n[4])/(4*u.z));break;case _i.EULER_ANGLES:l=n[0]+n[5]+n[10],l>0?(t.w=Math.sqrt(1+l)/2,t.x=(n[6]-n[9])/(4*t.w),t.y=(n[8]-n[2])/(4*t.w),t.z=(n[1]-n[4])/(4*t.w)):n[0]>n[5]&&n[0]>n[10]?(t.x=Math.sqrt(1+n[0]-n[5]-n[10])/2,t.w=(n[6]-n[9])/(4*t.x),t.y=(n[1]+n[4])/(4*t.x),t.z=(n[8]+n[2])/(4*t.x)):n[5]>n[10]?(u.y=Math.sqrt(1+n[5]-n[0]-n[10])/2,t.x=(n[1]+n[4])/(4*t.y),t.w=(n[8]-n[2])/(4*t.y),t.z=(n[6]+n[9])/(4*t.y)):(t.z=Math.sqrt(1+n[10]-n[0]-n[5])/2,t.x=(n[8]+n[2])/(4*t.z),t.y=(n[6]+n[9])/(4*t.z),t.w=(n[1]-n[4])/(4*t.z)),t.getEulerAngles(u);break}return i[0]=s,i[1]=u,i[2]=o,i}static getEuler(A,e,t=!0,i){return A||(A=new I),hA._getEulerMatrix.makeRotationFromQuaternion(e).makeEuler(A,t,i),A}compose(A,e,t){const i=this.rawData,n=e.x,s=e.y,o=e.z,u=e.w,l=n+n,c=s+s,h=o+o,d=n*l,f=n*c,p=n*h,y=s*c,_=s*h,g=o*h,m=u*l,E=u*c,w=u*h,L=t.x,T=t.y,R=t.z;return i[0]=(1-(y+g))*L,i[1]=(f+w)*L,i[2]=(p-E)*L,i[3]=0,i[4]=(f-w)*T,i[5]=(1-(d+g))*T,i[6]=(_+m)*T,i[7]=0,i[8]=(p+E)*R,i[9]=(_-m)*R,i[10]=(1-(d+y))*R,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}deltaTransformVector(A,e){e||(e=new I);let t=this.rawData,i=A.x,n=A.y,s=A.z;return e.x=i*t[0]+n*t[4]+s*t[8],e.y=i*t[1]+n*t[5]+s*t[9],e.z=i*t[2]+n*t[6]+s*t[10],e.w=i*t[3]+n*t[7]+s*t[11],e}identity(){let A=this.rawData;return A[0]=1,A[1]=0,A[2]=0,A[3]=0,A[4]=0,A[5]=1,A[6]=0,A[7]=0,A[8]=0,A[9]=0,A[10]=1,A[11]=0,A[12]=0,A[13]=0,A[14]=0,A[15]=1,this}fill(A){let e=this.rawData;e[1]=A,e[2]=A,e[3]=A,e[4]=A,e[6]=A,e[7]=A,e[8]=A,e[9]=A,e[11]=A,e[12]=A,e[13]=A,e[14]=A,e[0]=A,e[5]=A,e[10]=A,e[15]=A}invers33(){let A=this.rawData,e=A[5]*A[10]-A[9]*A[6],t=A[8]*A[6]-A[4]*A[10],i=A[4]*A[9]-A[8]*A[5],n=A[9]*A[2]-A[1]*A[10],s=A[0]*A[10]-A[8]*A[2],o=A[8]*A[1]-A[0]*A[9],u=A[1]*A[6]-A[5]*A[2],l=A[4]*A[2]-A[0]*A[6],c=A[0]*A[5]-A[4]*A[1],h=A[0]*e+A[4]*n+A[8]*u;if(Math.abs(h)>1e-11){let d=1/h;A[0]=d*e,A[4]=d*t,A[8]=d*i,A[1]=d*n,A[5]=d*s,A[9]=d*o,A[2]=d*u,A[6]=d*l,A[10]=d*c}}invert(){let A=this.determinant,e=Math.abs(A)>1e-11,t=this.rawData;if(e){A=1/A;let i=t[0],n=t[4],s=t[8],o=t[12],u=t[1],l=t[5],c=t[9],h=t[13],d=t[2],f=t[6],p=t[10],y=t[14],_=t[3],g=t[7],m=t[11],E=t[15];t[0]=A*(l*(p*E-y*m)-c*(f*E-y*g)+h*(f*m-p*g)),t[1]=-A*(u*(p*E-y*m)-c*(d*E-y*_)+h*(d*m-p*_)),t[2]=A*(u*(f*E-y*g)-l*(d*E-y*_)+h*(d*g-f*_)),t[3]=-A*(u*(f*m-p*g)-l*(d*m-p*_)+c*(d*g-f*_)),t[4]=-A*(n*(p*E-y*m)-s*(f*E-y*g)+o*(f*m-p*g)),t[5]=A*(i*(p*E-y*m)-s*(d*E-y*_)+o*(d*m-p*_)),t[6]=-A*(i*(f*E-y*g)-n*(d*E-y*_)+o*(d*g-f*_)),t[7]=A*(i*(f*m-p*g)-n*(d*m-p*_)+s*(d*g-f*_)),t[8]=A*(n*(c*E-h*m)-s*(l*E-h*g)+o*(l*m-c*g)),t[9]=-A*(i*(c*E-h*m)-s*(u*E-h*_)+o*(u*m-c*_)),t[10]=A*(i*(l*E-h*g)-n*(u*E-h*_)+o*(u*g-l*_)),t[11]=-A*(i*(l*m-c*g)-n*(u*m-c*_)+s*(u*g-l*_)),t[12]=-A*(n*(c*y-h*p)-s*(l*y-h*f)+o*(l*p-c*f)),t[13]=A*(i*(c*y-h*p)-s*(u*y-h*d)+o*(u*p-c*d)),t[14]=-A*(i*(l*y-h*f)-n*(u*y-h*d)+o*(u*f-l*d)),t[15]=A*(i*(l*p-c*f)-n*(u*p-c*d)+s*(u*f-l*d))}return e}transformPoint(A,e){let t=this.rawData;e||(e=new I);let i=A.x,n=A.y,s=A.z;return e.x=i*t[0]+n*t[4]+s*t[8]+t[12],e.y=i*t[1]+n*t[5]+s*t[9]+t[13],e.z=i*t[2]+n*t[6]+s*t[10]+t[14],e}transformVector(A,e){let t=this.rawData;e||(e=new I);let i=A.x,n=A.y,s=A.z;return e.x=i*t[0]+n*t[4]+s*t[8],e.y=i*t[1]+n*t[5]+s*t[9],e.z=i*t[2]+n*t[6]+s*t[10],e}transpose(){let A=this.rawData;for(let e=0;e<hA.helpMatrix.rawData.length;e++)hA.helpMatrix.rawData[e]=A[e];A[1]=hA.helpMatrix.rawData[4],A[2]=hA.helpMatrix.rawData[8],A[3]=hA.helpMatrix.rawData[12],A[4]=hA.helpMatrix.rawData[1],A[6]=hA.helpMatrix.rawData[9],A[7]=hA.helpMatrix.rawData[13],A[8]=hA.helpMatrix.rawData[2],A[9]=hA.helpMatrix.rawData[6],A[11]=hA.helpMatrix.rawData[14],A[12]=hA.helpMatrix.rawData[3],A[13]=hA.helpMatrix.rawData[7],A[14]=hA.helpMatrix.rawData[11]}get determinant(){let A=this.rawData;return(A[0]*A[5]-A[4]*A[1])*(A[10]*A[15]-A[14]*A[11])-(A[0]*A[9]-A[8]*A[1])*(A[6]*A[15]-A[14]*A[7])+(A[0]*A[13]-A[12]*A[1])*(A[6]*A[11]-A[10]*A[7])+(A[4]*A[9]-A[8]*A[5])*(A[2]*A[15]-A[14]*A[3])-(A[4]*A[13]-A[12]*A[5])*(A[2]*A[11]-A[10]*A[3])+(A[8]*A[13]-A[12]*A[9])*(A[2]*A[7]-A[6]*A[3])}getPosition(A){A||(A=new I);let e=this.rawData;return A.x=e[12],A.y=e[13],A.z=e[14],A}get position(){return this._position.set(this.rawData[12],this.rawData[13],this.rawData[14]),this._position}set position(A){let e=this.rawData;e[12]=A.x,e[13]=A.y,e[14]=A.z}get scale(){let A=this.rawData;return new I(A[0],A[5],A[10])}set scale(A){let e=this.rawData;e[0]=A.x,e[5]=A.y,e[10]=A.z}toString(){let A=this.rawData;return"matrix3d("+Math.round(A[0]*1e3)/1e3+","+Math.round(A[1]*1e3)/1e3+","+Math.round(A[2]*1e3)/1e3+","+Math.round(A[3]*1e3)/1e3+","+Math.round(A[4]*1e3)/1e3+","+Math.round(A[5]*1e3)/1e3+","+Math.round(A[6]*1e3)/1e3+","+Math.round(A[7]*1e3)/1e3+","+Math.round(A[8]*1e3)/1e3+","+Math.round(A[9]*1e3)/1e3+","+Math.round(A[10]*1e3)/1e3+","+Math.round(A[11]*1e3)/1e3+","+Math.round(A[12]*1e3)/1e3+","+Math.round(A[13]*1e3)/1e3+","+Math.round(A[14]*1e3)/1e3+","+Math.round(A[15]*1e3)/1e3+")"}lerp(A,e,t){this.copyFrom(e).sub(A).mult(t).add(A)}get(A,e){return this.rawData[A+e*4]}set(A,e,t){this.rawData[A+e*4]=t}getMaxScaleOnAxis(){let A=this.rawData,e=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],t=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(e,t,i))}translate(A){let e=this.get(0,0)*A.x+this.get(0,1)*A.y+this.get(0,2)*A.z+this.get(0,3),t=this.get(1,0)*A.x+this.get(1,1)*A.y+this.get(1,2)*A.z+this.get(1,3),i=this.get(2,0)*A.x+this.get(2,1)*A.y+this.get(2,2)*A.z+this.get(2,3),n=this.get(3,0)*A.x+this.get(3,1)*A.y+this.get(3,2)*A.z+this.get(3,3);return this.set(0,3,e),this.set(1,3,t),this.set(2,3,i),this.set(3,3,n),this}setTRInverse(A,e){e=e.inverse(),oe.quaternionToMatrix(e,this),this.translate(new I(-A.x,-A.y,-A.z))}setScale(A){return this.set(0,0,A.x),this.set(0,1,0),this.set(0,2,0),this.set(0,3,0),this.set(1,0,0),this.set(1,1,A.y),this.set(1,2,0),this.set(1,3,0),this.set(2,0,0),this.set(2,1,0),this.set(2,2,A.z),this.set(2,3,0),this.set(3,0,0),this.set(3,1,0),this.set(3,2,0),this.set(3,3,1),this}makeBasis(A,e,t){return this.setElements(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}makeRotationAxis(A,e){const t=Math.cos(e),i=Math.sin(e),n=1-t,s=A.x,o=A.y,u=A.z,l=n*s,c=n*o;return this.setElements(l*s+t,l*o-i*u,l*u+i*o,0,l*o+i*u,c*o+t,c*u-i*s,0,l*u-i*o,c*u+i*s,n*u*u+t,0,0,0,0,1),this}static transpose(A,e){e||(e=new hA);let t=A.rawData,i=e.rawData;return i[0]=t[0],i[1]=t[4],i[2]=t[8],i[3]=t[12],i[4]=t[1],i[5]=t[5],i[6]=t[9],i[7]=t[13],i[8]=t[2],i[9]=t[6],i[10]=t[10],i[11]=t[14],i[12]=t[3],i[13]=t[7],i[14]=t[11],i[15]=t[15],e}static inverse(A,e){e||(e=new hA);let t=A.rawData,i=e.rawData;i[0]=t[5]*t[10]*t[15]-t[5]*t[14]*t[11]-t[6]*t[9]*t[15]+t[6]*t[13]*t[11]+t[7]*t[9]*t[14]-t[7]*t[13]*t[10],i[1]=-t[1]*t[10]*t[15]+t[1]*t[14]*t[11]+t[2]*t[9]*t[15]-t[2]*t[13]*t[11]-t[3]*t[9]*t[14]+t[3]*t[13]*t[10],i[2]=t[1]*t[6]*t[15]-t[1]*t[14]*t[7]-t[2]*t[5]*t[15]+t[2]*t[13]*t[7]+t[3]*t[5]*t[14]-t[3]*t[13]*t[6],i[3]=-t[1]*t[6]*t[11]+t[1]*t[10]*t[7]+t[2]*t[5]*t[11]-t[2]*t[9]*t[7]-t[3]*t[5]*t[10]+t[3]*t[9]*t[6],i[4]=-t[4]*t[10]*t[15]+t[4]*t[14]*t[11]+t[6]*t[8]*t[15]-t[6]*t[12]*t[11]-t[7]*t[8]*t[14]+t[7]*t[12]*t[10],i[5]=t[0]*t[10]*t[15]-t[0]*t[14]*t[11]-t[2]*t[8]*t[15]+t[2]*t[12]*t[11]+t[3]*t[8]*t[14]-t[3]*t[12]*t[10],i[6]=-t[0]*t[6]*t[15]+t[0]*t[14]*t[7]+t[2]*t[4]*t[15]-t[2]*t[12]*t[7]-t[3]*t[4]*t[14]+t[3]*t[12]*t[6],i[7]=t[0]*t[6]*t[11]-t[0]*t[10]*t[7]-t[2]*t[4]*t[11]+t[2]*t[8]*t[7]+t[3]*t[4]*t[10]-t[3]*t[8]*t[6],i[8]=t[4]*t[9]*t[15]-t[4]*t[13]*t[11]-t[5]*t[8]*t[15]+t[5]*t[12]*t[11]+t[7]*t[8]*t[13]-t[7]*t[12]*t[9],i[9]=-t[0]*t[9]*t[15]+t[0]*t[13]*t[11]+t[1]*t[8]*t[15]-t[1]*t[12]*t[11]-t[3]*t[8]*t[13]+t[3]*t[12]*t[9],i[10]=t[0]*t[5]*t[15]-t[0]*t[13]*t[7]-t[1]*t[4]*t[15]+t[1]*t[12]*t[7]+t[3]*t[4]*t[13]-t[3]*t[12]*t[5],i[11]=-t[0]*t[5]*t[11]+t[0]*t[9]*t[7]+t[1]*t[4]*t[11]-t[1]*t[8]*t[7]-t[3]*t[4]*t[9]+t[3]*t[8]*t[5],i[12]=-t[4]*t[9]*t[14]+t[4]*t[13]*t[10]+t[5]*t[8]*t[14]-t[5]*t[12]*t[10]-t[6]*t[8]*t[13]+t[6]*t[12]*t[9],i[13]=t[0]*t[9]*t[14]-t[0]*t[13]*t[10]-t[1]*t[8]*t[14]+t[1]*t[12]*t[10]+t[2]*t[8]*t[13]-t[2]*t[12]*t[9],i[14]=-t[0]*t[5]*t[14]+t[0]*t[13]*t[6]+t[1]*t[4]*t[14]-t[1]*t[12]*t[6]-t[2]*t[4]*t[13]+t[2]*t[12]*t[5],i[15]=t[0]*t[5]*t[10]-t[0]*t[9]*t[6]-t[1]*t[4]*t[10]+t[1]*t[8]*t[6]+t[2]*t[4]*t[9]-t[2]*t[8]*t[5];let n=t[0]*i[0]+t[1]*i[4]+t[2]*i[8]+t[3]*i[12];for(let s=0;s<16;s++)i[s]/=n;return e}makeEuler(A,e,t="XYZ"){const i=this.rawData,n=i[0],s=i[4],o=i[8],u=i[1],l=i[5],c=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":A.y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(A.x=Math.atan2(-c,f),A.z=Math.atan2(-s,n)):(A.x=Math.atan2(d,l),A.z=0);break;case"YXZ":A.x=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(A.y=Math.atan2(o,f),A.z=Math.atan2(u,l)):(A.y=Math.atan2(-h,n),A.z=0);break;case"ZXY":A.x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(A.y=Math.atan2(-h,f),A.z=Math.atan2(-s,l)):(A.y=0,A.z=Math.atan2(u,n));break;case"ZYX":A.y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(A.x=Math.atan2(d,f),A.z=Math.atan2(u,n)):(A.x=0,A.z=Math.atan2(-s,l));break;case"YZX":A.z=Math.asin(vt(u,-1,1)),Math.abs(u)<.9999999?(A.x=Math.atan2(-c,l),A.y=Math.atan2(-h,n)):(A.x=0,A.y=Math.atan2(o,f));break;case"XZY":A.z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(A.x=Math.atan2(d,l),A.y=Math.atan2(o,n)):(A.x=Math.atan2(-c,f),A.y=0);break}return e&&A.multiplyScalar(yu),A}setElements(A,e,t,i,n,s,o,u,l,c,h,d,f,p,y,_){const g=this.rawData;return g[0]=A,g[4]=e,g[8]=t,g[12]=i,g[1]=n,g[5]=s,g[9]=o,g[13]=u,g[2]=l,g[6]=c,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=y,g[15]=_,this}makeMatrix44ByQuaternion(A,e,t){this.identity(),oe.quaternionToMatrix(t,this),this.appendTranslation(A.x,A.y,A.z),this.appendScale(e.x,e.y,e.z)}};a(hA,"blockBytes",16*4),a(hA,"block",16),a(hA,"allocCount",1e3),a(hA,"allocOnceCount",1e3),a(hA,"maxCount",50*1e4),a(hA,"useCount",0),a(hA,"buffer"),a(hA,"wasmMatrixPtr",0),a(hA,"dynamicMatrixBytes"),a(hA,"dynamicGlobalMatrixRef"),a(hA,"wasm"),a(hA,"help_matrix_0"),a(hA,"help_matrix_1"),a(hA,"help_matrix_2"),a(hA,"helpMatrix"),a(hA,"helpMatrix2"),a(hA,"_getEulerMatrix"),a(hA,"_zero",new I(0,0,0)),a(hA,"_one",new I(1,1,1)),a(hA,"_prs",[new I,new I,new I]),a(hA,"float32Array",new Float32Array(16).fill(0)),a(hA,"decomposeRawData",new Float32Array(16).fill(0));let NA=hA;function d4(r,A,e){for(let t=0;t<4;t++)e.rawData[t]=r.rawData[t]*A.rawData[0]+r.rawData[t+4]*A.rawData[1]+r.rawData[t+8]*A.rawData[2]+r.rawData[t+12]*A.rawData[3],e.rawData[t+4]=r.rawData[t]*A.rawData[4]+r.rawData[t+4]*A.rawData[5]+r.rawData[t+8]*A.rawData[6]+r.rawData[t+12]*A.rawData[7],e.rawData[t+8]=r.rawData[t]*A.rawData[8]+r.rawData[t+4]*A.rawData[9]+r.rawData[t+8]*A.rawData[10]+r.rawData[t+12]*A.rawData[11],e.rawData[t+12]=r.rawData[t]*A.rawData[12]+r.rawData[t+4]*A.rawData[13]+r.rawData[t+8]*A.rawData[14]+r.rawData[t+12]*A.rawData[15]}function Yd(r,A,e,t){let i=t.rawData,n=r.x*Ie,s=r.y*Ie,o=r.z*Ie,u=0,l=n*.5,c=s*.5,h=o*.5,d=Math.cos(l),f=Math.sin(l),p=Math.cos(c),y=Math.sin(c),_=Math.cos(h),g=Math.sin(h);u=d*p*_+f*y*g,n=f*p*_-d*y*g,s=d*y*_+f*p*g,o=d*p*g-f*y*_;let m=n+n,E=s+s,w=o+o,L=n*m,T=n*E,R=n*w,P=s*E,F=s*w,H=o*w,M=u*m,b=u*E,v=u*w,C=e.x,x=e.y,S=e.z;i[0]=(1-(P+H))*C,i[1]=(T+v)*C,i[2]=(R-b)*C,i[3]=0,i[4]=(T-v)*x,i[5]=(1-(L+H))*x,i[6]=(F+M)*x,i[7]=0,i[8]=(R+b)*S,i[9]=(F-M)*S,i[10]=(1-(L+P))*S,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1}function f4(r,A,e){let t=r.rawData,i=e.rawData,n=t[0],s=t[4],o=t[8],u=t[12],l=t[1],c=t[5],h=t[9],d=t[13],f=t[2],p=t[6],y=t[10],_=t[14],g=t[3],m=t[7],E=t[11],w=t[15];i[0]=n*A.rawData[0]+l*A.rawData[4]+f*A.rawData[8]+g*A.rawData[12],i[1]=n*A.rawData[1]+l*A.rawData[5]+f*A.rawData[9]+g*A.rawData[13],i[2]=n*A.rawData[2]+l*A.rawData[6]+f*A.rawData[10]+g*A.rawData[14],i[3]=n*A.rawData[3]+l*A.rawData[7]+f*A.rawData[11]+g*A.rawData[15],i[4]=s*A.rawData[0]+c*A.rawData[4]+p*A.rawData[8]+m*A.rawData[12],i[5]=s*A.rawData[1]+c*A.rawData[5]+p*A.rawData[9]+m*A.rawData[13],i[6]=s*A.rawData[2]+c*A.rawData[6]+p*A.rawData[10]+m*A.rawData[14],i[7]=s*A.rawData[3]+c*A.rawData[7]+p*A.rawData[11]+m*A.rawData[15],i[8]=o*A.rawData[0]+h*A.rawData[4]+y*A.rawData[8]+E*A.rawData[12],i[9]=o*A.rawData[1]+h*A.rawData[5]+y*A.rawData[9]+E*A.rawData[13],i[10]=o*A.rawData[2]+h*A.rawData[6]+y*A.rawData[10]+E*A.rawData[14],i[11]=o*A.rawData[3]+h*A.rawData[7]+y*A.rawData[11]+E*A.rawData[15],i[12]=u*A.rawData[0]+d*A.rawData[4]+_*A.rawData[8]+w*A.rawData[12],i[13]=u*A.rawData[1]+d*A.rawData[5]+_*A.rawData[9]+w*A.rawData[13],i[14]=u*A.rawData[2]+d*A.rawData[6]+_*A.rawData[10]+w*A.rawData[14],i[15]=u*A.rawData[3]+d*A.rawData[7]+_*A.rawData[11]+w*A.rawData[15]}function mg(r,A,e){let t=r.rawData,i=t[0],n=t[1],s=t[2],o=t[3],u=t[4],l=t[5],c=t[6],h=t[7],d=t[8],f=t[9],p=t[10],y=t[11],_=t[12],g=t[13],m=t[14],E=t[15],w=A.rawData,L=e.rawData,T=w[0],R=w[1],P=w[2],F=w[3];return L[0]=T*i+R*u+P*d+F*_,L[1]=T*n+R*l+P*f+F*g,L[2]=T*s+R*c+P*p+F*m,L[3]=T*o+R*h+P*y+F*E,T=w[4],R=w[5],P=w[6],F=w[7],L[4]=T*i+R*u+P*d+F*_,L[5]=T*n+R*l+P*f+F*g,L[6]=T*s+R*c+P*p+F*m,L[7]=T*o+R*h+P*y+F*E,T=w[8],R=w[9],P=w[10],F=w[11],L[8]=T*i+R*u+P*d+F*_,L[9]=T*n+R*l+P*f+F*g,L[10]=T*s+R*c+P*p+F*m,L[11]=T*o+R*h+P*y+F*E,T=w[12],R=w[13],P=w[14],F=w[15],L[12]=T*i+R*u+P*d+F*_,L[13]=T*n+R*l+P*f+F*g,L[14]=T*s+R*c+P*p+F*m,L[15]=T*o+R*h+P*y+F*E,L}var At=(r=>(r[r.None=0]="None",r[r.PointLight=1]="PointLight",r[r.DirectionLight=2]="DirectionLight",r[r.SpotLight=3]="SpotLight",r[r.SkyLight=4]="SkyLight",r))(At||{});class Zl extends Mo{constructor(){super(...arguments);a(this,"index",-1);a(this,"lightType",-1);a(this,"radius",.5);a(this,"linear",1);a(this,"lightPosition",new I);a(this,"lightMatrixIndex",-1);a(this,"direction",new I);a(this,"quadratic",.032);a(this,"lightColor",new fA(1,1,1,1));a(this,"intensity",1);a(this,"innerAngle",0);a(this,"outerAngle",1);a(this,"range",100);a(this,"castShadowIndex",-1);a(this,"lightTangent",I.FORWARD);a(this,"iesIndex",-1)}}a(Zl,"lightSize",24);const Gr=class Gr{static init(){this._init||(this._init=!0,this.componentsUpdateList=new Map,this.componentsLateUpdateList=new Map,this.componentsBeforeUpdateList=new Map,this.componentsComputeList=new Map,this.componentsEnablePickerList=new Map,this.graphicComponent=new Map,this.waitStartComponent=new Map)}static bindUpdate(A,e,t){this.init();let i=this.componentsUpdateList.get(A);i||(i=new Map,this.componentsUpdateList.set(A,i)),i.set(e,t)}static unBindUpdate(A,e){this.init();let t=this.componentsUpdateList.get(A);t&&t.delete(e)}static bindLateUpdate(A,e,t){this.init();let i=this.componentsLateUpdateList.get(A);i||(i=new Map,this.componentsLateUpdateList.set(A,i)),i.set(e,t)}static unBindLateUpdate(A,e){this.init();let t=this.componentsLateUpdateList.get(A);t&&t.delete(e)}static bindBeforeUpdate(A,e,t){this.init();let i=this.componentsBeforeUpdateList.get(A);i||(i=new Map,this.componentsBeforeUpdateList.set(A,i)),i.set(e,t)}static unBindBeforeUpdate(A,e){this.init();let t=this.componentsBeforeUpdateList.get(A);t&&t.delete(e)}static bindCompute(A,e,t){this.init();let i=this.componentsComputeList.get(A);i||(i=new Map,this.componentsComputeList.set(A,i)),i.set(e,t)}static unBindCompute(A,e){this.init();let t=this.componentsComputeList.get(A);t&&t.delete(e)}static bindGraphic(A,e,t){this.init();let i=this.graphicComponent.get(A);i||(i=new Map,this.graphicComponent.set(A,i)),i.set(e,t)}static unBindGraphic(A,e){this.init();let t=this.graphicComponent.get(A);t&&t.delete(e)}static appendWaitStart(A){this.init();let e=this.waitStartComponent.get(A.object3D);e?e.indexOf(A)==-1&&e.push(A):this.waitStartComponent.set(A.object3D,[A])}static removeWaitStart(A,e){this.init();let t=Gr.waitStartComponent.get(A);if(t){let i=t.indexOf(e);i!=-1&&t.splice(i)}}static bindEnablePick(A,e,t){this.init();let i=this.componentsEnablePickerList.get(A);i||(i=new Map,this.componentsEnablePickerList.set(A,i)),i.set(e,t)}static unBindEnablePick(A,e){this.init();let t=this.componentsEnablePickerList.get(A);t&&t.delete(e)}};a(Gr,"componentsUpdateList"),a(Gr,"componentsLateUpdateList"),a(Gr,"componentsBeforeUpdateList"),a(Gr,"componentsComputeList"),a(Gr,"componentsEnablePickerList"),a(Gr,"graphicComponent"),a(Gr,"waitStartComponent"),a(Gr,"_init",!1);let Ee=Gr;class Jt{constructor(){a(this,"object3D",null);a(this,"_eventDispatcher");a(this,"_enable",!0);a(this,"__isStart",!1);a(this,"isDestroyed")}get eventDispatcher(){return this._eventDispatcher||(this._eventDispatcher=new oa),this._eventDispatcher}set eventDispatcher(A){console.error("The eventDispatcher should not be set externally!")}get isStart(){return this.__isStart}get transform(){return this.object3D.transform}set enable(A){var e,t;this._enable!=A&&(this._enable=A,this._enable?(e=this.onEnable)==null||e.call(this,this.transform.view3D):(t=this.onDisable)==null||t.call(this,this.transform.view3D))}get enable(){return this._enable}__init(A){this.init(A)}__start(){var A,e;this.transform&&this.transform.scene3D&&this._enable&&((A=this.onEnable)==null||A.call(this,this.transform.view3D)),this.transform&&this.transform.scene3D&&this.__isStart==!1&&((e=this.start)==null||e.call(this),this.__isStart=!0),this.onUpdate&&this._onUpdate(this.onUpdate.bind(this)),this.onLateUpdate&&this._onLateUpdate(this.onLateUpdate.bind(this)),this.onBeforeUpdate&&this._onBeforeUpdate(this.onBeforeUpdate.bind(this)),this.onCompute&&this._onCompute(this.onCompute.bind(this)),this.onGraphic&&this._onGraphic(this.onGraphic.bind(this))}__stop(){var A;this.transform&&this.transform.scene3D&&((A=this.onDisable)==null||A.call(this,this.transform.view3D)),this._onUpdate(null),this._onLateUpdate(null),this._onBeforeUpdate(null),this._onCompute(null),this._onGraphic(null)}init(A){}start(){}stop(){}cloneTo(A){}copyComponent(A){return this}_onUpdate(A){A!=null?Ee.bindUpdate(this.transform.view3D,this,A):Ee.unBindUpdate(this.transform.view3D,this)}_onLateUpdate(A){A!=null?Ee.bindLateUpdate(this.transform.view3D,this,A):Ee.unBindLateUpdate(this.transform.view3D,this)}_onBeforeUpdate(A){A!=null?Ee.bindBeforeUpdate(this.transform.view3D,this,A):Ee.unBindBeforeUpdate(this.transform.view3D,this)}_onCompute(A){A!=null?Ee.bindCompute(this.transform.view3D,this,A):Ee.unBindCompute(this.transform.view3D,this)}_onGraphic(A){A!=null?Ee.bindGraphic(this.transform.view3D,this,A):Ee.unBindGraphic(this.transform.view3D,this)}beforeDestroy(A){Ee.removeWaitStart(this.object3D,this)}destroy(A){this.isDestroyed||(this.isDestroyed=!0,this.enable=!1,this.stop(),this._onBeforeUpdate(null),this._onUpdate(null),this._onLateUpdate(null),this.onEnable=null,this.onDisable=null,this.onUpdate=null,this.onLateUpdate=null,this.onBeforeUpdate=null,this.onCompute=null,this.onGraphic=null)}}class _h{constructor(){a(this,"value",0);a(this,"inv_base",0)}static get(A,e){let t=0,i=1/e;for(;A>0;)t+=A%e*i,A/=e,i/=e;return t}getBase(A,e){let t=this.inv_base=1/e;for(;A>0;)this.value+=t*(A%e),A/=e,t*=this.inv_base}next(){let A=1-this.value-1e-7;if(this.inv_base<A)this.value+=this.inv_base;else{let e=this.inv_base,t;do t=e,e*=this.inv_base;while(e>=A);this.value+=t+e-1}}get(){return this.value}}const Ni=class Ni{constructor(A,e){a(this,"origin",new I);a(this,"length",Number.MAX_VALUE);a(this,"_vector",new I);a(this,"_dir",new I);a(this,"_v0",new I);a(this,"_v1",new I);a(this,"_v2",new I);a(this,"_E1",new I);a(this,"_E2",new I);a(this,"_P",new I);a(this,"_T",new I);a(this,"_Q",new I);this.origin.copyFrom(A||new I),this._dir.copyFrom(e||new I),this._dir.normalize()}get direction(){return this._dir}set direction(A){this._dir.copyFrom(A),this._dir.normalize()}clone(){return new Ni(this.origin,this.direction)}intersectBox(A,e){let t=this.direction,i=this.origin,n,s,o,u,l,c;const h=1/t.x,d=1/t.y,f=1/t.z,p=A.min,y=A.max;return n=((h>=0?p.x:y.x)-i.x)*h,s=((h>=0?y.x:p.x)-i.x)*h,o=((d>=0?p.y:y.y)-i.y)*d,u=((d>=0?y.y:p.y)-i.y)*d,n>u||o>s||(o>n&&(n=o),u<s&&(s=u),l=((f>=0?p.z:y.z)-i.z)*f,c=((f>=0?y.z:p.z)-i.z)*f,n>c||l>s)||(l>n&&(n=l),c<s&&(s=c),s<0)?null:(e||(e=new I),this.pointAt(n>=0?n:s,e))}pointAt(A,e){return e||(e=new I),e.copy(this.direction),e.multiplyScalar(A),e.add(this.origin,e),e}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this._dir.copy(A._dir),this.length=A.length,this}setApproxDirection(A){this._dir=A.normalize()}setOrigin(A){this.origin.copyFrom(A)}getOrigin(){return this.origin}getPoint(A){return this._dir.scaleBy(A),this.origin.add(this._dir)}sqrDistToPoint(A){let e=this._dir,t=A.subtract(this.origin),i=Wd(t,e),n=Wd(e,e),s=i/n,o=this.getPoint(s);return c4(A.subtract(o))}applyMatrix(A){this.origin=A.transformPoint(this.origin),this._dir=A.transformVector(this._dir)}pointInTriangle(A,e,t,i){let n=this._v0,s=this._v1,o=this._v2;i.subtract(e,n),t.subtract(e,s),A.subtract(e,o);let u=I.dot(n,n),l=I.dot(n,s),c=I.dot(n,o),h=I.dot(s,s),d=I.dot(s,o),f=1/(u*h-l*l),p=(h*c-l*d)*f,y=(u*d-l*c)*f;return p>=0&&y>=0&&p+y<1}intersectTriangle(A,e,t){let i=t.v1,n=t.v2,s=t.v3;n.subtract(i,this._E1),s.subtract(i,this._E2),e.crossProduct(this._E2,this._P);let o=this._E1.dotProduct(this._P);if(o>0?A.subtract(i,this._T):(i.subtract(A,this._T),o=-o),o<1e-4||(t.u=this._T.dotProduct(this._P),t.u<0||t.u>o)||(this._T.crossProduct(this._E1,this._Q),t.v=e.dotProduct(this._Q),t.v<0||t.u+t.v>o))return null;let u=new I;t.t0=t.t=this._E2.dotProduct(this._Q);let l=1/o;return t.t*=l,t.u*=l,t.v*=l,u.x=A.x+t.t*e.x,u.y=A.y+t.t*e.y,u.z=A.z+t.t*e.z,u}intersectSphere(A,e,t,i){let n=A.subtract(t),s=I.dot(e,e),o=2*I.dot(n,e),u=I.dot(n,n)-i*i,l=o*o-4*s*u,c=I.HELP_3;if(l<0)return null;{let h=(-o-Math.sqrt(l))/(s*2);return h<0?null:(c.x=A.x+h*e.x,c.y=A.y+h*e.y,c.z=A.z+h*e.z,c)}}intersectionSegment(A,e,t){const i=this.origin,n=I.HELP_0,s=I.HELP_1,o=I.HELP_2,u=I.HELP_3;e.subtract(A,n),this._dir.scaleToRef(Ni._rayl,o),i.add(o,s),A.subtract(i,u);var l=I.dot(n,n),c=I.dot(n,o),h=I.dot(o,o),d=I.dot(n,u),f=I.dot(o,u),p=l*h-c*c,y,_,g=p,m,E,w=p;p<Ni._smallnum?(_=0,g=1,E=f,w=h):(_=c*f-h*d,E=l*f-c*d,_<0?(_=0,E=f,w=h):_>g&&(_=g,E=f+c,w=h)),E<0?(E=0,-d<0?_=0:-d>l?_=g:(_=-d,g=l)):E>w&&(E=w,-d+c<0?_=0:-d+c>l?_=g:(_=-d+c,g=l)),y=Math.abs(_)<Ni._smallnum?0:_/g,m=Math.abs(E)<Ni._smallnum?0:E/w;const L=I.HELP_4;o.scaleToRef(m,L);const T=I.HELP_5;n.scaleToRef(y,T),T.add(u,T);const R=I.HELP_6;T.subtract(L,R);var P=m>0&&m<=this._dir.length&&R.lengthSquared<t*t;if(P){let F=new I;return F.copyFrom(e.subtract(A)),F.scaleBy(y),F.add(A,F),{out:F,length:T.length}}return{out:null,length:-1}}get_vec(A,e){let t=I.HELP_1;return t.x=A.x-e.x,t.y=A.y-e.y,t.z=A.z-e.z,t}};a(Ni,"_rayl",1e9),a(Ni,"_smallnum",1e-8);let $o=Ni;class Ac{constructor(A=0,e=0,t=0,i=0){a(this,"x");a(this,"y");a(this,"w");a(this,"h");this.x=A,this.y=e,this.w=t,this.h=i}get width(){return this.w}set width(A){this.w=A}get height(){return this.h}set height(A){this.h=A}static pointInRect(A,e,t,i,n,s){return!(A<t||A>n||e<i||e>s)}clone(){return new Ac(this.x,this.y,this.w,this.h)}copyFrom(A){this.x=A.x,this.y=A.y,this.w=A.w,this.h=A.h}copyTo(A){A.copyFrom(this)}inner(A,e){return!(A<this.x||A>this.x+this.width||e<this.y||e>this.y+this.height)}equal(A){return!(this.x!=A.x||this.y!=A.y||this.width!=A.width||this.height!=A.height)}equalArea(A,e,t,i){return!(this.x!=A||this.y!=e||this.width!=t||this.height!=i)}equalInnerArea(A){var e=this.x,t=this.y,i=this.x+this.width,n=this.y+this.height,s=A.x,o=A.y,u=A.x+A.width,l=A.y+A.height;return Math.max(e,s)<=Math.min(i,u)&&Math.max(t,o)<=Math.min(n,l)}innerArea(A,e){e=e||new Ac;var t=this.x,i=this.y,n=this.x+this.width,s=this.y+this.height,o=A.x,u=A.y,l=A.x+A.width,c=A.y+A.height,h=Math.max(i,u),d=Math.min(s,c),f=Math.max(t,o),p=Math.min(l,n);return h>=0&&d>=0&&d-h>=0&&p-f>0?(e.x=f,e.y=h,e.width=p-f,e.height=d-h):(e.x=0,e.y=0,e.width=0,e.height=0),e}setTo(A,e,t,i){this.x=A,this.y=e,this.width=t,this.height=i}}const wn=class wn{constructor(A,e){a(this,"center");a(this,"extents");a(this,"max");a(this,"min");a(this,"size");A||(A=I.ZERO.clone()),e||(e=I.ZERO.clone()),this.setFromCenterAndSize(A,e)}makeEmpty(){return this.setFromMinMax(wn.maxVector3,wn.minVector3),this}setFromMinMax(A,e){return this.init(),e.subtract(A,this.size),A.add(e,this.center).multiplyScalar(.5),this.extents.copyFrom(this.size).multiplyScalar(.5),this.min.copyFrom(A),this.max.copyFrom(e),this}init(){return this.min||(this.min=new I),this.max||(this.max=new I),this.size||(this.size=new I),this.center||(this.center=new I),this.extents||(this.extents=new I),this}setFromCenterAndSize(A,e){return this.size=e,this.center=A,this.init(),this.extents.copy(e).multiplyScalar(.5),this.center.subtract(this.extents,this.min),this.center.add(this.extents,this.max),this}inFrustum(A,e){return e.containsBox(A.bound)}merge(A){A.min.x<this.min.x&&(this.min.x=A.min.x),A.min.y<this.min.y&&(this.min.y=A.min.y),A.min.z<this.min.z&&(this.min.z=A.min.z),A.max.x>this.max.x&&(this.max.x=A.max.x),A.max.y>this.max.y&&(this.max.y=A.max.y),A.max.z>this.max.z&&(this.max.z=A.max.z),this.size.x=A.max.x-A.min.x,this.size.y=A.max.y-A.min.y,this.size.z=A.max.z-A.min.z,this.extents.x=this.size.x*.5,this.extents.y=this.size.y*.5,this.extents.z=this.size.z*.5,this.center.x=this.extents.x+A.min.x,this.center.y=this.extents.y+A.min.y,this.center.z=this.extents.z+A.min.z}intersects(A){return this.min.x<=A.max.x&&this.max.x>=A.min.x&&this.min.y<=A.max.y&&this.max.y>=A.min.y&&this.min.z<=A.max.z&&this.max.z>=A.min.z}intersectsSphere(A){return this.min.x<=A.max.x&&this.max.x>=A.min.x&&this.min.y<=A.max.y&&this.max.y>=A.min.y&&this.min.z<=A.max.z&&this.max.z>=A.min.z}intersectsBox(A){return this.min.x<=A.max.x&&this.max.x>=A.min.x&&this.min.y<=A.max.y&&this.max.y>=A.min.y&&this.min.z<=A.max.z&&this.max.z>=A.min.z}equals(A){return this.center.equals(A.center)&&this.extents.equals(A.extents)}expandByPoint(A){A.x<this.min.x&&(this.min.x=A.x),A.x>this.max.x&&(this.max.x=A.x),A.y<this.min.y&&(this.min.y=A.y),A.y>this.max.y&&(this.max.y=A.y),A.z<this.min.z&&(this.min.z=A.z),A.z>this.max.z&&(this.max.z=A.z)}static fromPoints(A){for(var e=new wn(new I,new I),t=0;t<A.length;t++)e.expandByPoint(A[t]);return e}calculateTransform(A){}clone(){var A=new wn(this.center.clone(),this.size.clone());return A}intersectsRay(A,e){throw new Error("Method not implemented.")}containsPoint(A){return this.min.x<=A.x&&this.max.x>=A.x&&this.min.y<=A.y&&this.max.y>=A.y&&this.min.z<=A.z&&this.max.z>=A.z}containsBox(A){let e=this.min,t=this.max;return e.x<=A.min.x&&e.y<=A.min.y&&e.z<=A.min.z&&t.x>=A.max.x&&t.y>=A.max.y&&t.z>=A.max.z}updateBound(){}destroy(A){this.center=null,this.extents=null,this.min=null,this.max=null,this.size=null}};a(wn,"maxVector3",new I(1,1,1).multiplyScalar(Number.MAX_VALUE*.1)),a(wn,"minVector3",new I(1,1,1).multiplyScalar(-Number.MAX_VALUE*.1));let Qe=wn;class p4{constructor(){a(this,"planes");a(this,"corners");a(this,"boundingBox",new Qe);this.planes=[],this.corners=[];for(var A=0;A<6;A++)this.planes[A]=new I;for(var A=0;A<2*2*2;A++)this.corners[A]=new I}updateBoundBox(A){this.boundingBox.makeEmpty();let e=this.boundingBox.min,t=this.boundingBox.max,i=0;for(let n=0;n<2;++n)for(let s=0;s<2;++s)for(let o=0;o<2;++o){let u=this.corners[i];i++,u.set(2*n-1,2*s-1,o,1),A.transformVector4(u,u),u.div(u.w,u),e.x=Math.min(u.x,e.x),e.y=Math.min(u.y,e.y),e.z=Math.min(u.z,e.z),t.x=Math.max(u.x,t.x),t.y=Math.max(u.y,t.y),t.z=Math.max(u.z,t.z)}return this.boundingBox.setFromMinMax(e,t),this}setFrustumCorners(A){let e=0;for(let t=0;t<2;++t)for(let i=0;i<2;++i)for(let n=0;n<2;++n){let s=this.corners[e];s.set(2*t-1,2*i-1,n,1),A.transformVector4(s,s),s.div(s.w,s),e++}}update(A){var e=A.rawData;this.planes[0].x=e[3]-e[0],this.planes[0].y=e[7]-e[4],this.planes[0].z=e[11]-e[8],this.planes[0].w=e[15]-e[12];var t=Math.sqrt(this.planes[0].x*this.planes[0].x+this.planes[0].y*this.planes[0].y+this.planes[0].z*this.planes[0].z);this.planes[0].x/=t,this.planes[0].y/=t,this.planes[0].z/=t,this.planes[0].w/=t,this.planes[1].x=e[3]+e[0],this.planes[1].y=e[7]+e[4],this.planes[1].z=e[11]+e[8],this.planes[1].w=e[15]+e[12],t=Math.sqrt(this.planes[1].x*this.planes[1].x+this.planes[1].y*this.planes[1].y+this.planes[1].z*this.planes[1].z),this.planes[1].x/=t,this.planes[1].y/=t,this.planes[1].z/=t,this.planes[1].w/=t,this.planes[2].x=e[3]+e[1],this.planes[2].y=e[7]+e[5],this.planes[2].z=e[11]+e[9],this.planes[2].w=e[15]+e[13],t=Math.sqrt(this.planes[2].x*this.planes[2].x+this.planes[2].y*this.planes[2].y+this.planes[2].z*this.planes[2].z),this.planes[2].x/=t,this.planes[2].y/=t,this.planes[2].z/=t,this.planes[2].w/=t,this.planes[3].x=e[3]-e[1],this.planes[3].y=e[7]-e[5],this.planes[3].z=e[11]-e[9],this.planes[3].w=e[15]-e[13],t=Math.sqrt(this.planes[3].x*this.planes[3].x+this.planes[3].y*this.planes[3].y+this.planes[3].z*this.planes[3].z),this.planes[3].x/=t,this.planes[3].y/=t,this.planes[3].z/=t,this.planes[3].w/=t,this.planes[4].x=e[3]-e[2],this.planes[4].y=e[7]-e[6],this.planes[4].z=e[11]-e[10],this.planes[4].w=e[15]-e[14],t=Math.sqrt(this.planes[4].x*this.planes[4].x+this.planes[4].y*this.planes[4].y+this.planes[4].z*this.planes[4].z),this.planes[4].x/=t,this.planes[4].y/=t,this.planes[4].z/=t,this.planes[4].w/=t,this.planes[5].x=e[3]+e[2],this.planes[5].y=e[7]+e[6],this.planes[5].z=e[11]+e[10],this.planes[5].w=e[15]+e[14],t=Math.sqrt(this.planes[5].x*this.planes[5].x+this.planes[5].y*this.planes[5].y+this.planes[5].z*this.planes[5].z),this.planes[5].x/=t,this.planes[5].y/=t,this.planes[5].z/=t,this.planes[5].w/=t}containsPoint(A){for(var e=0;e<6;e++)if(this.planes[e].x*A.x+this.planes[e].y*A.y+this.planes[e].z*A.z+this.planes[e].w<=0)return!1;return!0}containsSphere(A){let e=A.bound,t=0,i,n=A.transform.worldPosition,s=e.radius,o=e.center.x+n.x,u=e.center.y+n.y,l=e.center.z+n.z;for(let c of this.planes){if(i=c.x*o+c.y*u+c.z*l+c.w,i<=-s)return 0;i>s&&t++}return t===6?2:1}containsBox(A){let e=0,t,i=Math.max(A.size.x,A.size.y,A.size.z)*2,n=A.center.x,s=A.center.y,o=A.center.z;for(let u of this.planes){if(t=u.x*n+u.y*s+u.z*o+u.w,t<=-i)return 0;t>i&&e++}return e===6?2:1}containsBox2(A){let e=0,t,i=1.74*Math.max(A.extents.x,A.extents.y,A.extents.z);for(let n of this.planes){if(t=n.x*A.center.x+n.y*A.center.y+n.z*A.center.z+n.w,t<=-i)return 0;t>i&&e++}return e===6?2:1}}var Re=(r=>(r[r.ortho=0]="ortho",r[r.perspective=1]="perspective",r[r.shadow=2]="shadow",r))(Re||{});class g4{constructor(A){a(this,"corners");a(this,"index");this.index=A,this.corners=[];for(let e=0;e<4;e++)this.corners.push(new I)}}class m4{constructor(A,e,t){a(this,"bound");a(this,"twoSections");a(this,"name");a(this,"color");a(this,"shadowCamera");a(this,"index");this.bound=new Qe,this.shadowCamera=it.createCamera3DObject(null,"csmShadowCamera_"+t),this.shadowCamera.isShadowCamera=!0,this.shadowCamera.orthoOffCenter(100,-100,100,-100,1,1e4),this.twoSections=[A,e],this.index=t,t==0?this.color=new fA(1,0,0,1):t==1?this.color=new fA(0,1,0,1):t==2?this.color=new fA(0,0,1,1):t==3&&(this.color=new fA(0,1,1,1)),this.name="child_"+t}updateBound(){this.bound.makeEmpty();let A=this.bound.min,e=this.bound.max;for(let t of this.twoSections)for(let i of t.corners)A.x=Math.min(i.x,A.x),A.y=Math.min(i.y,A.y),A.z=Math.min(i.z,A.z),e.x=Math.max(i.x,e.x),e.y=Math.max(i.y,e.y),e.z=Math.max(i.z,e.z);return this.bound.setFromMinMax(A,e),this}}class y4{constructor(A){a(this,"sections");a(this,"children");a(this,"name");this.sections=[];let e=A+1;for(let t=0;t<e;t++)this.sections.push(new g4(t));this.children=[];for(let t=0;t<A;t++)this.children.push(new m4(this.sections[t],this.sections[t+1],t))}update(A,e,t,i,n){let s=this.sections.length-1;for(let o=0;o<=s;++o){let u=this.sections[o],l=0,c=this.logSplit(t,i,o,this.sections.length);{let d=(c-t)/i;d=d**n.csmScatteringExp,c=(i-t)*d+t}c*=n.csmAreaScale;let h=(A.rawData[10]*c+A.rawData[14])/c;for(let d=0;d<2;++d)for(let f=0;f<2;++f){let p=u.corners[l];l++,p.set(2*d-1,2*f-1,h,1),e.transformVector4(p,p),p.div(p.w,p)}}for(let o of this.children)o.updateBound();return this}squareSplit(A,e,t,i){return(t/(i-1))**4*(e-A)+A}uniformSplit(A,e,t,i){return t/(i-1)*(e-A)+A}logSplit(A,e,t,i){return A*(e/A)**(t/(i-1))}}class n0 extends Jt{constructor(){super();a(this,"fov",1);a(this,"name");a(this,"aspect",1);a(this,"near",1);a(this,"far",5e3);a(this,"viewPort",new Ac);a(this,"frustum");a(this,"isShadowCamera",!1);a(this,"_projectionMatrixInv",new NA);a(this,"_projectionMatrix",new NA);a(this,"_viewMatrix",new NA);a(this,"_unprojection",new NA);a(this,"_pvMatrixInv",new NA);a(this,"_pvMatrix",new NA);a(this,"_halfw");a(this,"_halfh");a(this,"_ray");a(this,"_enableCSM",!1);a(this,"lookTarget");a(this,"type",Re.perspective);a(this,"csm");a(this,"cubeShadowCameras",[]);a(this,"_haltonSeq");a(this,"_jitterOffsetList");a(this,"_useJitterProjection",!1);a(this,"_jitterFrameIndex",0);a(this,"_sampleIndex",0);a(this,"_jitterX",0);a(this,"_jitterY",0)}get projectionMatrix(){return this._projectionMatrix}get enableCSM(){return this._enableCSM}set enableCSM(e){e&&!this.csm&&(this.csm=new y4(bi.Cascades)),this._enableCSM=e}init(){super.init(),this._ray=new $o,this.frustum=new p4,this.viewPort.x=0,this.viewPort.y=0,this.viewPort.w=iA.presentationSize[0],this.viewPort.h=iA.presentationSize[1],this.lookTarget=new I(0,0,0)}getShadowBias(e){let t=2*this.getShadowWorldExtents()/e,i=this.far-this.near;return t/i-K.setting.shadow.shadowBias*.01}getShadowWorldExtents(){let e=K.setting.shadow.shadowBound;return e?e*=.5:e=Math.round(.05*this.frustum.boundingBox.extents.length),e}getCSMShadowBias(e,t){let i=2*this.getCSMShadowWorldExtents(e)/t,n=this.far-this.near;return i/n}getCSMShadowWorldExtents(e){return Math.round(this.csm.children[e].bound.extents.length)}perspective(e,t,i,n){this.fov=e,this.aspect=t,this.near=i,this.far=n,this._projectionMatrix.perspective(e,t,i,n),this.type=Re.perspective}resetPerspective(e){this.type==Re.perspective&&this._projectionMatrix.perspective(this.fov,e,this.near,this.far)}ortho(e,t,i,n){this.near=Math.max(i,.1),this.far=n,this._projectionMatrix.ortho(e,t,i,n),this.type=Re.ortho}orthoOffCenter(e,t,i,n,s,o){this.near=Math.max(s,.01),this.far=o,this._projectionMatrix.orthoOffCenter(e,t,i,n,s,o),this.type=Re.ortho}orthoZo(e,t,i,n,s,o){this.near=Math.max(s,.01),this.far=o,this._projectionMatrix.orthoZO(e,t,i,n,s,o),this.type=Re.ortho}get viewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.invert(),this._viewMatrix}get shadowViewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.appendScale(1,1,1),this._viewMatrix.invert(),this._viewMatrix}object3DToScreenRay(e,t=null){return t||(t=new I(0,0,0,1)),this._halfw=this.viewPort.width*.5,this._halfh=this.viewPort.height*.5,Cr.transformVector(this.viewMatrix,e,t),this.project(t,t),t.x=this._halfw+t.x*this._halfw,t.y=this.viewPort.height-(this._halfh-t.y*this._halfh),t}screenRayToObject3D(e,t=null){t||(t=new I),this._halfw=this.viewPort.width*.5,this._halfh=this.viewPort.height*.5;let i=e.x,n=e.y;return t.x=i/this.viewPort.width-.25,t.y=n/this.viewPort.height-.25,this.unProject(t.x,t.y,e.z,t),t}get pvMatrix(){return mg(this._projectionMatrix,this.viewMatrix,this._pvMatrix),this._pvMatrix}get pvMatrix2(){mg(this._projectionMatrix,this.transform.worldMatrix,this._pvMatrix);let e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get pvMatrixInv(){let e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get projectionMatrixInv(){return this._projectionMatrixInv.copyFrom(this._projectionMatrix),this._projectionMatrixInv.invert(),this._projectionMatrixInv}unProject(e,t,i,n){return n||(n=new I),n.x=e,n.y=-t,n.z=i,n.w=1,n.x*=i,n.y*=i,this._unprojection.copyFrom(this._projectionMatrix),this._unprojection.invert(),Cr.transformVector(this._unprojection,n,n),n.z=i,n}project(e,t){return this._projectionMatrix.perspectiveMultiplyPoint3(e,t),t.x=t.x/t.w,t.y=-t.y/t.w,t.z=e.z,t}screenPointToRay(e,t){let i=this._ray,n=it.UnProjection(e,t,.01,this),s=it.UnProjection(e,t,1,this);return s=s.subtract(n).normalize(),i.origin.copyFrom(n),i.direction=s,i}screenPointToWorld(e,t,i){return it.UnProjection(e,t,i,this)}worldToScreenPoint(e,t){return it.Projection(e,this,t)}lookAt(e,t,i=I.Y_AXIS){this.transform.lookAt(e,t,i),t&&this.lookTarget.copyFrom(t)}resetProjectMatrix(){this.perspective(this.fov,this.aspect,this.near,this.far)}onUpdate(){var t;this.type==Re.perspective&&(this.aspect=iA.aspect,this.resetProjectMatrix()),this._useJitterProjection&&this.getJitteredProjectionMatrix(),this.frustum.update(this.pvMatrix),this.frustum.updateBoundBox(this.pvMatrixInv);let e=K.setting.shadow;this.enableCSM&&((t=this.csm)==null||t.update(this._projectionMatrix,this._pvMatrixInv,this.near,this.far,e))}get jitterFrameIndex(){return this._jitterFrameIndex}get jitterX(){return this._jitterX}get jitterY(){return this._jitterY}enableJitterProjection(e){this._jitterFrameIndex=0,this._useJitterProjection=e,this._haltonSeq||(this._haltonSeq=new _h),this._jitterOffsetList=[];for(let t=0;t<8;t++){let i=this.generateRandomOffset();this._jitterOffsetList.push(i)}this._jitterOffsetList.reverse()}generateRandomOffset(){let e=new Ge(_h.get((this._sampleIndex&1023)+1,2)-.5,_h.get((this._sampleIndex&1023)+1,3)-.5);return++this._sampleIndex>=8&&(this._sampleIndex=0),e}getJitteredProjectionMatrix(){let e=K.setting.render.postProcessing.taa,t=this._projectionMatrix,i=e.temporalJitterScale,n=this._jitterFrameIndex%e.jitterSeedCount,s=this._jitterOffsetList[n].x*i,o=this._jitterOffsetList[n].y*i,u=t.get(0,2),l=t.get(1,2);this._jitterX=s/this.viewPort.width,this._jitterY=o/this.viewPort.height,u+=this._jitterX,l+=this._jitterY,t.set(0,2,u),t.set(1,2,l),this._jitterFrameIndex++}getWorldDirection(e){e||(e=new I);const t=this.transform._worldMatrix.rawData;return e.set(-t[8],-t[9],-t[10]).normalize()}}const mt=class mt extends Jt{constructor(){super();a(this,"eventPositionChange",new qr(mt.POSITION_ONCHANGE));a(this,"eventRotationChange",new qr(mt.ROTATION_ONCHANGE));a(this,"eventScaleChange",new qr(mt.SCALE_ONCHANGE));a(this,"eventLocalChange",new qr(mt.LOCAL_ONCHANGE));a(this,"onPositionChange");a(this,"onRotationChange");a(this,"onScaleChange");a(this,"_scene3d");a(this,"_parent");a(this,"_localPos");a(this,"_localRot");a(this,"_localRotQuat");a(this,"_localScale");a(this,"_localDetailPos");a(this,"_localDetailRot");a(this,"_localDetailScale");a(this,"index");a(this,"index2");a(this,"_forward",new I);a(this,"_back",new I);a(this,"_right",new I);a(this,"_left",new I);a(this,"_up",new I);a(this,"_down",new I);a(this,"_worldMatrix");a(this,"_targetPos");a(this,"static",!1);a(this,"depthOrder",0);this._worldMatrix=new NA(!0),this.index=this._worldMatrix.index,this.index2=this._worldMatrix.index*ce.stateStruct,this._localPos=new I,this._localRot=new I,this._localRotQuat=new oe,this._localScale=new I(1,1,1),ce.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),ce.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),ce.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z)}get localChange(){return ce.matrixStateBuffer[this.index2]!=0}set localChange(e){ce.matrixStateBuffer[this.index2]=e?1:0}get targetPos(){return this._targetPos}set targetPos(e){this._targetPos=e}get parent(){return this._parent}set parent(e){var i;let t=(i=this._parent)==null?void 0:i.object3D;if(this._parent=e,this.depthOrder=e?e.depthOrder+1:0,ce.setParent(this.index,e?e.worldMatrix.index:-1,this.depthOrder),this.localChange=!0,this.object3D){let n=e?e.scene3D:null;n?(this._scene3d=n,this.object3D.components.forEach(s=>{Ee.appendWaitStart(s)})):this.object3D.components.forEach(s=>{s.__stop()});for(let s of this.object3D.entityChildren)s.transform.parent=e?this:null;this.object3D.components.forEach(s=>{var o,u;(u=s.onParentChange)==null||u.call(s,t,(o=this._parent)==null?void 0:o.object3D)})}this.notifyLocalChange()}set enable(e){this.transform._scene3d&&e?super.enable=!0:super.enable=!1;for(let t of this.object3D.entityChildren)t.transform.enable=e}get enable(){return this._enable}get scene3D(){return this._scene3d}set scene3D(e){this._scene3d=e}get view3D(){return this._scene3d&&this._scene3d.view?this._scene3d.view:null}awake(){}start(){}stop(){}notifyLocalChange(){if(this.localChange=!0,this.object3D){let e=this.object3D.entityChildren,t=0,i=e.length;for(t=0;t<i;t++)e[t].transform.notifyLocalChange()}this.eventDispatcher.dispatchEvent(this.eventLocalChange)}get up(){return this.worldMatrix.transformVector(I.UP,this._up),this._up}set up(e){this._up.copyFrom(e),Cr.fromToRotation(I.UP,this._up,oe.HELP_0),this.transform.localRotQuat=oe.HELP_0}get down(){return this.worldMatrix.transformVector(I.DOWN,this._down),this._down}set down(e){var t;this._down.copyFrom(e),Cr.fromToRotation(I.DOWN,this._down,oe.HELP_0),this.transform.localRotQuat=oe.HELP_0,this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get forward(){return this.worldMatrix.transformVector(I.FORWARD,this._forward),this._forward}set forward(e){var t;this._forward.copyFrom(e),Cr.fromToRotation(I.FORWARD,this._forward,oe.HELP_0),this.transform.localRotQuat=oe.HELP_0,this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get back(){return this.worldMatrix.transformVector(I.BACK,this._back),this._back}set back(e){this._back.copyFrom(e),Cr.fromToRotation(I.BACK,this._back,oe.HELP_0),this.transform.localRotQuat=oe.HELP_0}get left(){return this.worldMatrix.transformVector(I.neg_X_AXIS,this._left),this._left}set left(e){this._left.copyFrom(e),Cr.fromToRotation(I.LEFT,this._left,oe.HELP_0),this.transform.localRotQuat=oe.HELP_0}get right(){return this.worldMatrix.transformVector(I.X_AXIS,this._right),this._right}set right(e){var t;this._right.copyFrom(e),Cr.fromToRotation(I.RIGHT,this._right,oe.HELP_0),this.transform.localRotQuat=oe.HELP_0,this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotQuat(){return this._localRotQuat}set localRotQuat(e){var t;(e.x!=this._localRotQuat.x||e.y!=this._localRotQuat.y||e.z!=this._localRotQuat.z||e.w!=this._localRotQuat.w)&&(this._localRotQuat.copyFrom(e),this._localRotQuat.getEulerAngles(this._localRot),ce.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}notifyChange(){var e,t,i;this.notifyLocalChange(),(e=this.onRotationChange)==null||e.call(this),(t=this.onScaleChange)==null||t.call(this),(i=this.onPositionChange)==null||i.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get worldMatrix(){return this.updateWorldMatrix(),this._worldMatrix}updateWorldMatrix(e=!1){(this.localChange||e)&&(this.parent?(Yd(this._localRot,this._localPos,this._localScale,this._worldMatrix),f4(this._worldMatrix,this.parent.worldMatrix,this._worldMatrix)):Yd(this._localRot,this._localPos,this._localScale,this._worldMatrix),this.localChange=!1)}updateChildTransform(){let e=this;if(e.localChange&&e.updateWorldMatrix(),e.object3D.numChildren>0)for(const t of e.object3D.entityChildren)t.transform.updateChildTransform()}lookTarget(e,t=I.UP){this.lookAt(this.transform.worldPosition,e,t)}lookAt(e,t,i=I.UP){this._targetPos||(this._targetPos=new I),this._targetPos.copyFrom(t),this.localPosition=e,NA.helpMatrix.lookAt(e,t,i),NA.helpMatrix.invert();var n=NA.helpMatrix.decompose(_i.QUATERNION);this.localRotQuat=oe.CALCULATION_QUATERNION.copyFrom(n[1])}decomposeFromMatrix(e,t="eulerAngles"){let i=e.decompose(t),n=this.transform;return n.localRotQuat.copyFrom(i[1]),n.localRotQuat=n.localRotQuat,n.localPosition.copyFrom(i[0]),n.localPosition=n.localPosition,n.localScale.copyFrom(i[2]),n.localScale=n.localScale,this}cloneTo(e){e.transform.localPosition=this.localPosition,e.transform.localRotation=this.localRotation,e.transform.localScale=this.localScale}set x(e){var t;this._localPos.x!=e&&(this._localPos.x=e,ce.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z),this.notifyLocalChange(),(t=this.onPositionChange)==null||t.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange))}get x(){return this._localPos.x}set y(e){var t;this._localPos.y!=e&&(this._localPos.y=e,ce.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z),this.notifyLocalChange(),(t=this.onPositionChange)==null||t.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange))}get y(){return this._localPos.y}set z(e){var t;this._localPos.z!=e&&(this._localPos.z=e,ce.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z),this.notifyLocalChange(),(t=this.onPositionChange)==null||t.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange))}get z(){return this._localPos.z}set scaleX(e){var t;this._localScale.x!=e&&(this._localScale.x=e,ce.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),this.notifyLocalChange(),(t=this.onScaleChange)==null||t.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange))}get scaleX(){return this._localScale.x}set scaleY(e){var t;this._localScale.y!=e&&(this._localScale.y=e,ce.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),this.notifyLocalChange(),(t=this.onScaleChange)==null||t.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange))}get scaleY(){return this._localScale.y}set scaleZ(e){var t;this._localScale.z!=e&&(this._localScale.z=e,ce.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),this.notifyLocalChange(),(t=this.onScaleChange)==null||t.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange))}get scaleZ(){return this._localScale.z}set rotationX(e){var t;this._localRot.x!=e&&(this._localRot.x=e,ce.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}get rotationX(){return this._localRot.x}set rotationY(e){var t;this._localRot.y!=e&&(this._localRot.y=e,ce.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}get rotationY(){return this._localRot.y}set rotationZ(e){var t;this._localRot.z!=e&&(this._localRot.z=e,ce.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}get rotationZ(){return this._localRot.z}get worldPosition(){return this.localChange&&this.updateWorldMatrix(),this._worldMatrix.position}set localPosition(e){var t;this._localPos.copyFrom(e),ce.setTranslate(this.index,e.x,e.y,e.z),this.notifyLocalChange(),(t=this.onPositionChange)==null||t.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get localPosition(){return this._localPos}set localRotation(e){var t;ce.setRotation(this.index,e.x,e.y,e.z),this._localRot.copyFrom(e),this.notifyLocalChange(),(t=this.onRotationChange)==null||t.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotation(){return this._localRot}set localScale(e){var t;ce.setScale(this.index,e.x,e.y,e.z),this._localScale.copyFrom(e),this.notifyLocalChange(),(t=this.onScaleChange)==null||t.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get localScale(){return this._localScale}get localDetailScale(){return this._localDetailScale}set localDetailScale(e){this._localDetailScale=e,ce.setContinueScale(this.index,e.x,e.y,e.z)}get localDetailRot(){return this._localDetailRot}set localDetailRot(e){this._localDetailRot=e,ce.setContinueRotation(this.index,e.x,e.y,e.z)}get localDetailPos(){return this._localDetailPos}set localDetailPos(e){this._localDetailPos=e,ce.setContinueTranslate(this.index,e.x,e.y,e.z)}beforeDestroy(e){this.parent&&this.parent.object3D&&this.parent.object3D.removeChild(this.object3D),super.beforeDestroy(e)}destroy(){super.destroy(),this.scene3D=null,this.eventPositionChange=null,this.eventRotationChange=null,this.eventScaleChange=null,this.onPositionChange=null,this.onRotationChange=null,this.onScaleChange=null,this._scene3d=null,this._parent=null,this._localPos=null,this._localRot=null,this._localRotQuat=null,this._localScale=null,this._forward=null,this._back=null,this._right=null,this._left=null,this._up=null,this._down=null,this.localChange=null,this._targetPos=null}};a(mt,"LIMIT",1),a(mt,"COMPONENT_NAME","UUTransform"),a(mt,"COMPONENT_TYPE","Transform"),a(mt,"POSITION_ONCHANGE","POSITION_ONCHANGE"),a(mt,"ROTATION_ONCHANGE","ROTATION_ONCHANGE"),a(mt,"SCALE_ONCHANGE","SCALE_ONCHANGE"),a(mt,"PARENT_ONCHANGE","PARENT_ONCHANGE"),a(mt,"CHILDREN_ONCHANGE","CHILDREN_ONCHANGE"),a(mt,"ADD_ONCHANGE","ADD_ONCHANGE"),a(mt,"LOCAL_ONCHANGE","LOCAL_ONCHANGE");let Si=mt;const bn=class bn{static genMeshBounds(A,e){let t=this.genMeshMinVector,i=this.genMeshMaxVector,n=this.genMeshVectorList8;e||(e=new Qe(I.ZERO,I.ZERO)),e.setFromMinMax(this.maxVector,this.minVector);let s=A.getComponents(he);for(const o of s)if(o&&o.geometry){let u=o.object3D.transform.worldMatrix;t.copy(o.geometry.bounds.min),i.copy(o.geometry.bounds.max),n[0].set(t.x,t.y,t.z),n[1].set(t.x,t.y,i.z),n[2].set(t.x,i.y,t.z),n[3].set(t.x,i.y,i.z),n[4].set(i.x,t.y,t.z),n[5].set(i.x,t.y,i.z),n[6].set(i.x,i.y,t.z),n[7].set(i.x,i.y,i.z);for(const l of n)u.transformPoint(l,l),e.expandByPoint(l)}return i.copyFrom(e.max),t.copyFrom(e.min),e.setFromMinMax(t,i),e}static transformBound(A,e,t){let i=this.genMeshMinVector.copyFrom(e.min),n=this.genMeshMaxVector.copyFrom(e.max),s=this.genMeshVectorList8;t||(t=new Qe(I.ZERO,I.ZERO)),t.setFromMinMax(this.maxVector,this.minVector),s[0].set(i.x,i.y,i.z),s[1].set(i.x,i.y,n.z),s[2].set(i.x,n.y,i.z),s[3].set(i.x,n.y,n.z),s[4].set(n.x,i.y,i.z),s[5].set(n.x,i.y,n.z),s[6].set(n.x,n.y,i.z),s[7].set(n.x,n.y,n.z);for(const o of s)A.transformPoint(o,o),t.expandByPoint(o);return n.copyFrom(t.max),i.copyFrom(t.min),t.setFromMinMax(i,n),t}};a(bn,"maxVector",new I(Number.MAX_VALUE*.1,Number.MAX_VALUE*.1,Number.MAX_VALUE*.1)),a(bn,"minVector",bn.maxVector.clone().multiplyScalar(-1)),a(bn,"genMeshMaxVector",I.ZERO.clone()),a(bn,"genMeshMinVector",I.ZERO.clone()),a(bn,"genMeshVectorList8",[new I,new I,new I,new I,new I,new I,new I,new I]);let ec=bn;class E4 extends oa{constructor(){super();a(this,"name","");a(this,"_instanceID","");a(this,"_numChildren");a(this,"transform");a(this,"renderNode");a(this,"entityChildren");a(this,"components");a(this,"waitDisposeComponents");a(this,"_bound");a(this,"_boundWorld");a(this,"_isBoundChange",!0);a(this,"_dispose",!1);this.entityChildren=[],this.components=new Map,this._instanceID=W3().toString(),this.waitDisposeComponents=[]}get instanceID(){return this._instanceID}getObjectByName(e){if(e.indexOf("/")>=0){let t=e.split("/"),i=this;for(;t.length>0&&i;){let n=t.shift();if(i=i.getChildByName(n,!1),!i)return null}return i}else return this.getChildByName(e,!1)}get numChildren(){return this._numChildren}addChild(e){if(e==null)throw new Error("child is null!");if(e===this)throw new Error("child is self!");return this.entityChildren.indexOf(e)==-1?(e.removeFromParent(),e.transform.parent=this.transform,this.entityChildren.push(e),this._numChildren=this.entityChildren.length,e):null}removeChild(e){if(e===null)return;if(e===this)throw new Error("add child is self!");let t=this.entityChildren.indexOf(e);t!=-1&&(this.entityChildren.splice(t,1),e.transform.parent=null,this._numChildren=this.entityChildren.length)}removeAllChild(){for(;this.numChildren>0;)this.removeChild(this.entityChildren[0])}removeSelf(){return this.removeFromParent()}removeChildByIndex(e){e>=0&&e<this.entityChildren.length?this.removeChild(this.entityChildren[e]):console.error("remove child by index , index out of range")}hasChild(e){return this.entityChildren.indexOf(e)!=-1}removeFromParent(){let e=this.transform.parent;return e&&e.object3D&&e.object3D.removeChild(this),this}getChildByIndex(e){let t=null;return e<this.entityChildren.length&&(t=this.entityChildren[e]),t}getChildByName(e,t=!0){let i=null;for(const n of this.entityChildren){if(n.name==e)return i=n,i;if(t&&(i=n.getChildByName(e,t),i))return i}return i}update(){}instantiate(){return null}onTransformLocalChange(e){this._isBoundChange=!0}get bound(){return(this._isBoundChange||!this._bound)&&this.updateBound(),this._boundWorld}set bound(e){this._bound=e,this._boundWorld=this._bound.clone(),this._isBoundChange=!0}updateBound(){return this._bound||(this._bound=new Qe,this._boundWorld=this._bound.clone(),this._isBoundChange=!0),this._isBoundChange&&(ec.transformBound(this.transform.worldMatrix,this._bound,this._boundWorld),this._isBoundChange=!1),this._boundWorld}waitUpdate(){this._dispose?(this.transform.parent&&this.transform.parent.object3D.removeChild(this),this.components.forEach((e,t)=>{e.enable=!1,e.beforeDestroy(),e.destroy()}),this.components.clear()):Ee.waitStartComponent.forEach((e,t)=>{for(;e.length>0;){const i=e.shift();i.__start(),Ee.waitStartComponent.delete(i.object3D)}})}destroy(e){this._dispose||(this.components.forEach(t=>{t.beforeDestroy(e)}),this.components.forEach(t=>{t.destroy(e)}),this.components.clear(),this.entityChildren.forEach(t=>{t.destroy(e)}),this.removeAllChild(),this.transform.parent=null,this._dispose=!0,super.destroy())}}var C4=Object.defineProperty,_4=Object.getOwnPropertyDescriptor,S4=(r,A,e,t)=>{for(var i=t>1?void 0:t?_4(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&C4(A,e,i),i};let de=class extends E4{constructor(){super();a(this,"_isScene3D");a(this,"prefabRef");a(this,"serializeTag");this.transform=this.addComponent(Si),this.transform.eventDispatcher.addEventListener(Si.LOCAL_ONCHANGE,this.onTransformLocalChange,this)}get isScene3D(){return this._isScene3D}forChild(A){this.entityChildren.forEach(e=>{A(e),e.forChild(A)})}addComponent(A,e){if(!this.components.has(A)){let t=new A;return t.object3D=this,this.components.set(A,t),t.__init(e),Ee.appendWaitStart(t),t}return null}getOrAddComponent(A){let e=this.components.get(A);return e||(e=this.addComponent(A)),e}removeComponent(A){if(this.components.has(A)){let e=this.components.get(A);Ee.removeWaitStart(this,e),this.components.delete(A),e.__stop(),e.beforeDestroy(),e.destroy()}}hasComponent(A){return this.components.has(A)}getComponent(A){return this.components.get(A)}getComponentFromParent(A){return this.parent?this.parent.object3D.getComponent(A)||this.parent.object3D.getComponentFromParent(A):null}getComponentsInChild(A){let e=[],t=this.components.get(A);t&&e.push(t);for(let i=0;i<this.entityChildren.length;i++){let n=this.entityChildren[i].getComponentsInChild(A);e.push(...n)}return e}getComponents(A,e,t){e||(e=[]);let i=this.getComponent(A);i&&(i.enable||t)&&e.push(i);for(let n=0,s=this.entityChildren.length;n<s;n++){let o=this.entityChildren[n];o&&o instanceof de&&o.getComponents(A,e,t)}return e}getComponentsExt(A,e,t){e||(e=[]);let i=this.components.get(A);if(i&&(i.enable||t))e.push(i);else for(const n of this.entityChildren)n instanceof de&&n.getComponentsExt(A,e,t);return e}getComponentsByProperty(A,e,t=!0,i,n){i||(i=[]);let s;for(const o of this.components.values())o&&(o.enable||n)&&o[A]===e&&(i.push(o),s=!0);if(!(s&&t))for(const o of this.entityChildren)o instanceof de&&o.getComponentsByProperty(A,e,t,i,n);return i}clone(){return this.instantiate()}instantiate(){let A=new de;return A.name=this.name,A.serializeTag=this.serializeTag,A.prefabRef=this.prefabRef,this.entityChildren.forEach((e,t)=>{let i=e.instantiate();A.addChild(i)}),this.components.forEach((e,t)=>{e.cloneTo(A)}),A}get localPosition(){return this.transform.localPosition}set localPosition(A){this.transform.localPosition=A}get localRotation(){return this.transform.localRotation}set localRotation(A){this.transform.localRotation=A}get localScale(){return this.transform.localScale}set localScale(A){this.transform.localScale=A}get localQuaternion(){return this.transform.localRotQuat}set localQuaternion(A){this.transform.localRotQuat=A}notifyChange(){this.transform.notifyChange()}get parent(){return this.transform.parent}get parentObject(){return this.transform.parent.object3D}set x(A){this.transform.x=A}get x(){return this.transform.x}set y(A){this.transform.y=A}get y(){return this.transform.y}set z(A){this.transform.z=A}get z(){return this.transform.z}set scaleX(A){this.transform.scaleX=A}get scaleX(){return this.transform.scaleX}set scaleY(A){this.transform.scaleY=A}get scaleY(){return this.transform.scaleY}set scaleZ(A){this.transform.scaleZ=A}get scaleZ(){return this.transform.scaleZ}set rotationX(A){this.transform.rotationX=A}get rotationX(){return this.transform.rotationX}set rotationY(A){this.transform.rotationY=A}get rotationY(){return this.transform.rotationY}set rotationZ(A){this.transform.rotationZ=A}get rotationZ(){return this.transform.rotationZ}fixedUpdate(){}lateUpdate(){}traverse(A){A(this);for(let e=0,t=this.entityChildren.length;e<t;e++){let i=this.entityChildren[e];i instanceof de&&i.traverse(A)}}destroy(A){this.transform.eventDispatcher.removeEventListener(Si.LOCAL_ONCHANGE,this.onTransformLocalChange,this),super.destroy(A)}};de=S4([v4],de);function v4(r,A){return class extends de{set active(e){this.transform.enable=e>0}get active(){return this.transform.enable?1:0}get materialColor(){var e,t;return(t=(e=this.getComponent(he))==null?void 0:e.material)==null?void 0:t.shader.getDefaultColorShader().baseColor}set materialColor(e){var i;let t=(i=this.getComponent(he))==null?void 0:i.material;t&&(t.shader.getDefaultColorShader().baseColor=e)}notifyMaterialColorChange(e,t){var i,n;(n=(i=this.getComponent(he).materials)==null?void 0:i[e])==null||n.shader.getDefaultColorShader().uniforms[t].onChange()}}}class it{static createCamera3DObject(A,e){return this.createCamera3D(null,A,e)}static createCamera3D(A,e,t){return A||(A=new de),e&&e.addChild(A),t&&(A.name=t),A.getOrAddComponent(n0)}static UnProjection(A,e,t=1,i){let n=new I(A,e,0),s=1,o=I.HELP_0,u=iA.canvas.offsetLeft,l=iA.canvas.offsetTop,c=iA.canvas.clientWidth,h=iA.canvas.clientHeight;o.x=((n.x-u)*s/c-.5)*2,o.y=-((n.y-l)*s/h-.5)*2,o.z=t;let d=new I(0,0,0),f=NA.helpMatrix2;f.copyFrom(i.projectionMatrix),f.invert();let p=NA.helpMatrix;return p.identity(),p.multiply(f),p.multiply(i.transform.worldMatrix),p.perspectiveMultiplyPoint3(o,d),d}static Projection(A,e,t){let i=t||new I(0,0,0),n=NA.helpMatrix;n.copyFrom(e.viewMatrix),n.multiply(e.projectionMatrix),n.perspectiveMultiplyPoint3(A,i);let s=iA.canvas.clientWidth/2,o=iA.canvas.clientHeight/2;return i.x=i.x*s+s,i.y=o-i.y*o,i}static UnProjection2(A,e,t,i,n){let s=n||new I(0,0,0),o=NA.helpMatrix;o.copyFrom(i.pvMatrixInv);let u=iA.canvas.clientWidth/2,l=iA.canvas.clientHeight/2;return s.x=(A-u)/u,s.y=(l-e)/l,s.z=t,o.perspectiveMultiplyPoint3(s,s),s}}const Li=class Li{static init(){this.directionLightList=new Map,this.pointLightList=new Map,this.shadowLights=new Map}static createBuffer(A){if(!this.shadowLights.has(A.scene)){let e=new Float32Array(16);this.shadowLights.set(A.scene,e)}}static getShadowLightList(A){if(!A.transform.view3D)return null;if(A.lightData.lightType==At.DirectionLight){let e=this.directionLightList.get(A.transform.view3D.scene);return e||(e=[],this.directionLightList.set(A.transform.view3D.scene,e)),e}else if(A.lightData.lightType==At.PointLight){let e=this.pointLightList.get(A.transform.view3D.scene);return e||(e=[],this.pointLightList.set(A.transform.view3D.scene,e)),e}else if(A.lightData.lightType==At.SpotLight){let e=this.pointLightList.get(A.transform.view3D.scene);return e||(e=[],this.pointLightList.set(A.transform.view3D.scene,e)),e}}static getShadowLightWhichScene(A,e){if(e==At.DirectionLight){let t=this.directionLightList.get(A);return t||(t=[],this.directionLightList.set(A,t)),t}else if(e==At.PointLight){let t=this.pointLightList.get(A);return t||(t=[],this.pointLightList.set(A,t)),t}}static getDirectShadowLightWhichScene(A){let e=this.directionLightList.get(A);return e||(e=[],this.directionLightList.set(A,e)),e}static getPointShadowLightWhichScene(A){let e=this.pointLightList.get(A);return e||(e=[],this.pointLightList.set(A,e)),e}static addShadowLight(A){if(!A.transform.view3D)return null;let e=A.transform.view3D.scene;if(A.lightData.lightType==At.DirectionLight){let t=this.directionLightList.get(e);if(t||(t=[],this.directionLightList.set(e,t)),!A.shadowCamera){A.shadowCamera=it.createCamera3DObject(null,"shadowCamera"),A.shadowCamera.isShadowCamera=!0;let i=-1e3;A.shadowCamera.orthoOffCenter(i,-i,i,-i,1,1e4)}return t.indexOf(A)==-1&&t.push(A),t}else if(A.lightData.lightType==At.PointLight||A.lightData.lightType==At.SpotLight){let t=this.pointLightList.get(e);return t&&t.length>=8||(t||(t=[],this.pointLightList.set(e,t)),t.indexOf(A)==-1&&t.push(A)),t}}static removeShadowLight(A){if(A.lightData.castShadowIndex=-1,!A.transform.view3D)return null;if(A.lightData.lightType==At.DirectionLight){let e=this.directionLightList.get(A.transform.view3D.scene);if(e){let t=e.indexOf(A);t!=-1&&e.splice(t,1)}return A.lightData.castShadowIndex=-1,e}else if(A.lightData.lightType==At.PointLight||A.lightData.lightType==At.SpotLight){let e=this.pointLightList.get(A.transform.view3D.scene);if(e){let t=e.indexOf(A);t!=-1&&e.splice(t,1)}return A.lightData.castShadowIndex=-1,e}}static update(A){let e=Le.getCameraGroup(A.camera),t=this.shadowLights.get(A.scene),i=Li.directionLightList.get(A.scene),n=Li.pointLightList.get(A.scene),s=0,o=0,u=0,l=0;if(t.fill(0),i){let c=0;for(let h=0;h<i.length;h++){const d=i[h];t[h]=d.lightData.index,d.lightData.castShadowIndex=c++}o=i.length}if(e.dirShadowStart=s,e.dirShadowEnd=o,n){u=o;let c=0;for(let h=u;h<n.length;h++){const d=n[h];t[h]=d.lightData.index,d.lightData.castShadowIndex=c++}l=u+n.length}e.pointShadowStart=u,e.pointShadowEnd=l,e.shadowLights=t}};a(Li,"maxNumDirectionShadow",8),a(Li,"maxNumPointShadow",8),a(Li,"directionLightList"),a(Li,"pointLightList"),a(Li,"shadowLights");let Ir=Li;class s0{static getGlobalDataBindGroupLayout(){if(this._globalDataBindGroupLayout)return this._globalDataBindGroupLayout;let A=[];return A.push({binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}),A.push({binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),this._globalDataBindGroupLayout=iA.device.createBindGroupLayout({entries:A}),this._globalDataBindGroupLayout}}a(s0,"_globalDataBindGroupLayout");class w4{constructor(A){a(this,"uuid");a(this,"usage");a(this,"globalBindGroup");a(this,"uniformGPUBuffer");a(this,"matrixBindGroup");a(this,"uniformByteLength");a(this,"matrixesByteLength");a(this,"shadowMatrixRaw",new Float32Array(8*16));a(this,"csmMatrixRaw",new Float32Array(bi.Cascades*16));a(this,"csmShadowBias",new Float32Array(4));a(this,"shadowLights",new Float32Array(16));a(this,"dirShadowStart",0);a(this,"dirShadowEnd",0);a(this,"pointShadowStart",0);a(this,"pointShadowEnd",0);this.uuid=ii(),this.usage=GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.uniformGPUBuffer=new i1(8192),this.uniformGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBindGroup=A,this.createBindGroup()}createBindGroup(){this.uniformByteLength=this.uniformGPUBuffer.memory.shareDataBuffer.byteLength,this.matrixesByteLength=NA.blockBytes*NA.maxCount,this.globalBindGroup=iA.device.createBindGroup({label:"global_bindGroupLayout",layout:s0.getGlobalDataBindGroupLayout(),entries:[{binding:0,resource:{buffer:this.uniformGPUBuffer.buffer,offset:0,size:this.uniformByteLength}},{binding:1,resource:{buffer:this.matrixBindGroup.matrixBufferDst.buffer,offset:0,size:this.matrixesByteLength}}]})}setCamera(A){this.uniformGPUBuffer.setMatrix("_projectionMatrix",A.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",A.viewMatrix),this.uniformGPUBuffer.setMatrix("_cameraWorldMatrix",A.transform.worldMatrix),this.uniformGPUBuffer.setMatrix("pvMatrixInv",A.projectionMatrixInv);let e=Ir.getDirectShadowLightWhichScene(A.transform.scene3D);this.csmShadowBias.fill(1e-4),this.shadowMatrixRaw.fill(0),this.csmMatrixRaw.fill(0);for(let s=0;s<8;s++)if(s<e.length){let o=e[s].shadowCamera;this.shadowMatrixRaw.set(o.pvMatrix.rawData,s*16)}else this.shadowMatrixRaw.set(A.transform.worldMatrix.rawData,s*16);this.uniformGPUBuffer.setFloat32Array("shadowMatrix",this.shadowMatrixRaw);let t=K.setting.shadow.shadowSize;if(A.enableCSM&&e[0])for(let s=0;s<bi.Cascades;s++){let o=A.csm.children[s].shadowCamera;this.csmMatrixRaw.set(o.pvMatrix.rawData,s*16),this.csmShadowBias[s]=A.getCSMShadowBias(s,t)}this.uniformGPUBuffer.setFloat32Array("csmShadowBias",this.csmShadowBias),this.uniformGPUBuffer.setFloat32Array("csmMatrix",this.csmMatrixRaw),this.uniformGPUBuffer.setFloat32Array("shadowLights",this.shadowLights),this.uniformGPUBuffer.setVector3("CameraPos",A.transform.worldPosition),this.uniformGPUBuffer.setFloat("frame",be.frame),this.uniformGPUBuffer.setFloat("time",be.frame),this.uniformGPUBuffer.setFloat("delta",be.delta),this.uniformGPUBuffer.setFloat("shadowBias",A.getShadowBias(t)),this.uniformGPUBuffer.setFloat("skyExposure",K.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("renderPassState",K.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("quadScale",K.setting.render.quadScale),this.uniformGPUBuffer.setFloat("hdrExposure",K.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",K.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",K.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",K.setting.render.renderState_split);let i=K.inputSystem.mouseX*iA.pixelRatio,n=K.inputSystem.mouseY*iA.pixelRatio;this.uniformGPUBuffer.setFloat("mouseX",i),this.uniformGPUBuffer.setFloat("mouseY",n),this.uniformGPUBuffer.setFloat("windowWidth",iA.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",iA.windowHeight),this.uniformGPUBuffer.setFloat("near",A.near),this.uniformGPUBuffer.setFloat("far",A.far),this.uniformGPUBuffer.setFloat("pointShadowBias",K.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",t),this.uniformGPUBuffer.setFloat("shadowSoft",K.setting.shadow.shadowSoft),this.uniformGPUBuffer.setFloat("enableCSM",A.enableCSM?1:0),this.uniformGPUBuffer.setFloat("csmMargin",K.setting.shadow.csmMargin),this.uniformGPUBuffer.setInt32("nDirShadowStart",this.dirShadowStart),this.uniformGPUBuffer.setInt32("nDirShadowEnd",this.dirShadowEnd),this.uniformGPUBuffer.setInt32("nPointShadowStart",this.pointShadowStart),this.uniformGPUBuffer.setInt32("nPointShadowEnd",this.pointShadowEnd),this.uniformGPUBuffer.setInt32("empty1",0),this.uniformGPUBuffer.setInt32("empty2",0),this.uniformGPUBuffer.setInt32("empty3",0),this.uniformGPUBuffer.setVector4Array("frustumPlanes",A.frustum.planes),this.uniformGPUBuffer.apply()}setShadowCamera(A){this.uniformGPUBuffer.setMatrix("_projectionMatrix",A.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",A.viewMatrix),this.uniformGPUBuffer.setMatrix("_pvMatrix",A.pvMatrix),this.uniformGPUBuffer.setMatrix("pvMatrixInv",A.projectionMatrixInv),this.csmShadowBias.fill(1e-4),this.shadowMatrixRaw.fill(0),this.csmMatrixRaw.fill(0),this.uniformGPUBuffer.setFloat32Array("shadowCamera",this.shadowMatrixRaw),this.uniformGPUBuffer.setFloat32Array("csmShadowBias",this.csmShadowBias),this.uniformGPUBuffer.setFloat32Array("csmMatrix",this.csmMatrixRaw),this.uniformGPUBuffer.setFloat32Array("shadowLights",this.shadowLights),this.uniformGPUBuffer.setVector3("CameraPos",A.transform.worldPosition),this.uniformGPUBuffer.setFloat("frame",be.frame),this.uniformGPUBuffer.setFloat("time",be.frame),this.uniformGPUBuffer.setFloat("delta",be.delta),this.uniformGPUBuffer.setFloat("shadowBias",K.setting.shadow.shadowBias),this.uniformGPUBuffer.setFloat("skyExposure",K.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("renderPassState",K.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("quadScale",K.setting.render.quadScale),this.uniformGPUBuffer.setFloat("hdrExposure",K.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",K.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",K.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",K.setting.render.renderState_split);let e=K.inputSystem.mouseX*iA.pixelRatio,t=K.inputSystem.mouseY*iA.pixelRatio;this.uniformGPUBuffer.setFloat("mouseX",e),this.uniformGPUBuffer.setFloat("mouseY",t),this.uniformGPUBuffer.setFloat("windowWidth",iA.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",iA.windowHeight),this.uniformGPUBuffer.setFloat("near",A.near),this.uniformGPUBuffer.setFloat("far",A.far),this.uniformGPUBuffer.setFloat("pointShadowBias",K.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",K.setting.shadow.shadowSize),this.uniformGPUBuffer.setFloat("shadowSoft",K.setting.shadow.shadowSoft),this.uniformGPUBuffer.setFloat("enableCSM",0),this.uniformGPUBuffer.setFloat("csmMargin",K.setting.shadow.csmMargin),this.uniformGPUBuffer.setInt32("nDirShadowStart",this.dirShadowStart),this.uniformGPUBuffer.setInt32("nDirShadowEnd",this.dirShadowEnd),this.uniformGPUBuffer.setInt32("nPointShadowStart",this.pointShadowStart),this.uniformGPUBuffer.setInt32("nPointShadowEnd",this.pointShadowEnd),this.uniformGPUBuffer.apply()}setShadowLight(){}}const Vr=class Vr{constructor(A,e=0,t=null,i=0){a(this,"entities");a(this,"box");a(this,"subTrees",[]);a(this,"parent");a(this,"level");a(this,"index");a(this,"uuid");a(this,"__rayCastTempVector",new I);this.parent=t,this.box=A.clone(),this.level=i,this.index=e,this.uuid=i+"_"+e,this.entities=new Map}tryInsertEntity(A){let e=A.renderer.object3D.bound;if(this.level==0||this.box.containsBox(e)){this.subTrees.length==0&&this.level<Vr.maxSplitLevel&&this.splitTree();let t;if(this.subTrees.length>0){for(let i of this.subTrees)if(i.tryInsertEntity(A)){t=!0;break}}return t||A.enterNode(this),!0}return!1}splitTree(){if(this.subTrees.length==0){const A=Vr._v1,e=this.box.extents.clone();let t=this.level+1,i=0;for(let n=0;n<2;n++)for(let s=0;s<2;s++)for(let o=0;o<2;o++){const u=new Qe;this.box.min.add(A.set(n,s,o).multiply(e),u.min),u.min.add(e,u.max),u.setFromMinMax(u.min,u.max);let l=new Vr(u,i++,this,t);this.subTrees.push(l)}}}rayCasts(A,e){if(this.level==0||A.intersectBox(this.box,this.__rayCastTempVector)){this.entities.size>0&&e.push(...this.entities.values());for(let t of this.subTrees)t.rayCasts(A,e);return!0}return!1}frustumCasts(A,e){if(this.level==0||A.containsBox2(this.box)>0){if(this.entities.size>0)for(const t of this.entities.values())(this.level>Vr.autoSplitLevel||A.containsBox2(t.renderer.object3D.bound)>0)&&e.push(t);for(let t of this.subTrees)t.frustumCasts(A,e);return!0}return!1}getRenderNode(A,e){if(this.level==0||A.containsBox2(this.box)>0){if(this.entities.size>0)for(const t of this.entities.values())(this.level>Vr.autoSplitLevel||A.containsBox2(t.renderer.object3D.bound)>0)&&(t.renderer.renderOrder<3e3?e.opaqueList.push(t.renderer):t.renderer.renderOrder>=3e3&&e.transparentList.push(t.renderer));for(let t of this.subTrees)t.getRenderNode(A,e);return!0}return!1}boxCasts(A,e){if(A.intersectsBox(this.box)){this.entities.size>0&&e.push(...this.entities.values());for(let t of this.subTrees)t.boxCasts(A,e);return!0}return!1}clean(){for(let A of this.entities.values())A.leaveNode();return this.entities.clear(),this}};a(Vr,"_v1",new I),a(Vr,"_v2",new I),a(Vr,"maxSplitLevel",6),a(Vr,"autoSplitLevel",3);let $d=Vr;class b4{constructor(){a(this,"_pool",[]);a(this,"_worldPosition",new I);a(this,"_viewPosition",new I);a(this,"_zSortList",[])}pop(){return this._pool.pop()||{}}recycle(){for(let A of this._zSortList)A.z=0,A.userData=null,A.obj3d=null,this._pool.push(A);this._zSortList.length=0}sort(A,e,t,i){this._zSortList=[];for(let n of e){let s=this.pop();s.userData=n,s.obj3d=t(n),s.z=this.worldToCameraDepth(s.obj3d,A),this._zSortList.push(s)}this._zSortList.sort((n,s)=>n.z-s.z>0?1:-1),i||(i=[]);for(let n of this._zSortList)i.push(n.userData);return this.recycle(),i}worldToCameraDepth(A,e){e||(e=A.transform.view3D.camera);let t=0;return e&&(this._worldPosition.copyFrom(A.transform.worldPosition),e.worldToScreenPoint(this._worldPosition,this._viewPosition),t=this._viewPosition.z),t}}let I4=new b4;var tc=(r=>(r[r.None=2]="None",r[r.StaticBatch=4]="StaticBatch",r[r.DynamicBatch=8]="DynamicBatch",r))(tc||{});class yg{static addMask(A,e){return A|e}static removeMask(A,e){return A&~e}static hasMask(A,e){return(A&e)!=0}}var QA=(r=>(r[r.COLOR=1]="COLOR",r[r.NORMAL=2]="NORMAL",r[r.POSITION=4]="POSITION",r[r.GRAPHIC=8]="GRAPHIC",r[r.GI=16]="GI",r[r.Cluster=32]="Cluster",r[r.SHADOW=64]="SHADOW",r[r.POINT_SHADOW=128]="POINT_SHADOW",r[r.POST=256]="POST",r[r.DEPTH=512]="DEPTH",r[r.REFLECTION=1024]="REFLECTION",r))(QA||{});class fe{}a(fe,"GLTF_NODE_INDEX_PROPERTY"),a(fe,"BASE_COLOR_UNIFORM","u_baseColorFactor"),a(fe,"BASE_COLOR_TEXTURE_UNIFORM","u_baseColorSampler"),a(fe,"METALROUGHNESS_UNIFORM","u_metallicRoughnessValues"),a(fe,"METALROUGHNESS_TEXTURE_UNIFORM","u_metallicRoughnessSampler"),a(fe,"NORMAL_TEXTURE_UNIFORM","u_normalSampler"),a(fe,"NORMAL_SCALE_UNIFORM","u_normalScale"),a(fe,"EMISSIVE_TEXTURE_UNIFORM","u_emissiveSampler"),a(fe,"EMISSIVE_FACTOR_UNIFORM","u_emissiveFactor"),a(fe,"OCCLUSION_TEXTURE_UNIFORM","u_occlusionSampler"),a(fe,"OCCLUSION_FACTOR_UNIFORM","u_occlusionFactor"),a(fe,"MAX_MORPH_TARGETS",8),a(fe,"MORPH_POSITION_PREFIX","a_morphPositions_"),a(fe,"MORPH_NORMAL_PREFIX","a_morphNormals_"),a(fe,"MORPH_TANGENT_PREFIX","a_morphTangents_"),a(fe,"MORPH_WEIGHT_UNIFORM","u_morphWeights"),a(fe,"SCENE_ROOT_SKELETON","SCENE_ROOT"),a(fe,"IDENTITY_INVERSE_BIND_MATRICES","IDENTITY_IBM"),a(fe,"JOINT_MATRICES_UNIFORM","u_jointMatrix"),a(fe,"ALPHA_CUTOFF_UNIFORM","u_alphaCutoff");var pA=(r=>(r.position="position",r.normal="normal",r.uv="uv",r.TANGENT="TANGENT",r.TEXCOORD_1="TEXCOORD_1",r.TEXCOORD_2="TEXCOORD_2",r.TEXCOORD_3="TEXCOORD_3",r.TEXCOORD_4="TEXCOORD_4",r.TEXCOORD_5="TEXCOORD_5",r.TEXCOORD_6="TEXCOORD_6",r.TEXCOORD_7="TEXCOORD_7",r.color="color",r.joints0="joints0",r.joints1="joints1",r.weights0="weights0",r.weights1="weights1",r.weight="weight",r.indices="indices",r.vIndex="vIndex",r.a_morphPositions_0="a_morphPositions_0",r.all="all",r))(pA||{}),ee=(r=>(r[r.NONE=0]="NONE",r[r.ABOVE=1]="ABOVE",r[r.ALPHA=2]="ALPHA",r[r.NORMAL=3]="NORMAL",r[r.ADD=4]="ADD",r[r.BELOW=5]="BELOW",r[r.ERASE=6]="ERASE",r[r.MUL=7]="MUL",r[r.SCREEN=8]="SCREEN",r[r.DIVD=9]="DIVD",r[r.SOFT_ADD=10]="SOFT_ADD",r))(ee||{}),B4=(r=>(r[r.src_a=0]="src_a",r[r.dest_a=1]="dest_a",r))(B4||{});class T4{static getBlend(A){let e={color:{srcFactor:"src-alpha",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}};switch(A){case 0:e.color.srcFactor="one",e.color.dstFactor="zero",e.color.operation="add";break;case 1:e.color.srcFactor="one-minus-src-alpha",e.color.dstFactor="dst-alpha",e.color.operation="add";break;case 4:e.color.srcFactor="one",e.color.dstFactor="one",e.color.operation="add",e.alpha.srcFactor="one",e.alpha.dstFactor="one",e.alpha.operation="add";break;case 2:e.color.srcFactor="src-alpha",e.color.dstFactor="one-minus-src-alpha";break;case 5:e.color.srcFactor="one-minus-src-alpha",e.color.dstFactor="one",e.color.operation="add";break;case 6:e.color.srcFactor="zero",e.color.dstFactor="one-minus-src-alpha",e.color.operation="add";break;case 7:e.color.srcFactor="dst",e.color.dstFactor="one-minus-src-alpha",e.color.operation="add";break;case 3:e.color.srcFactor="src-alpha",e.color.dstFactor="one-minus-src-alpha",e.color.operation="add";break;case 10:e.color.srcFactor="one",e.color.dstFactor="one",e.color.operation="max",e.alpha.srcFactor="one",e.alpha.dstFactor="one",e.alpha.operation="add";break;case 8:e.color.srcFactor="one",e.color.dstFactor="one-minus-src",e.color.operation="add";break}return e}}const yr=class yr{static getMipmapPipeline(A){let e=A.format,t=iA.device,i=yr.pipelineCache[A.format],n;if(!i){n=t.createShaderModule({code:yr.mipmapShader});let s=t.createBindGroupLayout({entries:[{binding:0,visibility:A.visibility,sampler:A.samplerBindingLayout},{binding:1,visibility:A.visibility,texture:A.textureBindingLayout}]}),o=iA.device.createPipelineLayout({bindGroupLayouts:[s]});i=sA.createPipeline({layout:o,vertex:{module:n,entryPoint:"vertexMain"},fragment:{module:n,entryPoint:"fragmentMain",targets:[{format:e}]}}),yr.pipelineCache[e]=i}return i}static getMipmapCount(A){let e=A.width,t=A.height,i=Math.max(e,t);return 1+Math.log2(i)|0}static webGPUGenerateMipmap(A){let e=iA.device,t=A.textureDescriptor;if(!yr.pipeline){const o=e.createShaderModule({code:`
        var<private> pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0));

        struct VertexOutput {
          @builtin(position) position : vec4<f32>,
          @location(0) texCoord : vec2<f32>
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
          var output : VertexOutput;
          output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
          output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
          return output;
        }

        @binding(0) @group(0) var imgSampler : sampler;
        @binding(1) @group(0) var img : texture_2d<f32>;

        @fragment
        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
          var outColor: vec4<f32> = textureSampleLevel(img, imgSampler, texCoord , 0.0 );
          return outColor;
        }
      `});yr.pipeline=e.createRenderPipeline({layout:"auto",vertex:{module:o,entryPoint:"vertexMain"},fragment:{module:o,entryPoint:"fragmentMain",targets:[{format:t.format}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"}})}let i;A.format=="rgba16float"?i=e.createSampler({minFilter:"nearest",magFilter:"linear"}):i=e.createSampler({minFilter:qi.linear,magFilter:qi.linear});let n=A.getGPUTexture().createView({baseMipLevel:0,mipLevelCount:1});const s=sA.beginCommandEncoder();for(let o=1;o<t.mipLevelCount;++o){const u=A.getGPUTexture().createView({baseMipLevel:o,mipLevelCount:1}),l=s.beginRenderPass({colorAttachments:[{view:u,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"}]}),c=e.createBindGroup({layout:yr.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:n}]});l.setPipeline(yr.pipeline),l.setBindGroup(0,c),l.draw(4),l.end(),n=u}sA.endCommandEncoder(s)}};a(yr,"mipmapShader",`
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
      struct VertexOutput {
        @builtin(position) position : vec4<f32>;
        @location(0) texCoord : vec2<f32>;
      };
      @vertex
      fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var output : VertexOutput;
        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        return output;
      }
      @binding(0) @group(0) var imgSampler : sampler;
      @binding(1) @group(0) var img : texture_2d<f32>;
      @fragment
      fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
        var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
        return outColor ;
      }`),a(yr,"pipelineCache",{}),a(yr,"pipeline");let Us=yr;class Tt{constructor(A=32,e=32,t=1){a(this,"name");a(this,"url");a(this,"gpuTexture");a(this,"pid");a(this,"view");a(this,"gpuSampler");a(this,"gpuSampler_comparison");a(this,"format");a(this,"usage");a(this,"width",4);a(this,"height",4);a(this,"depthOrArrayLayers",1);a(this,"numberLayer",1);a(this,"viewDescriptor");a(this,"textureDescriptor");a(this,"visibility",GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT);a(this,"textureBindingLayout",{viewDimension:"2d",multisampled:!1});a(this,"samplerBindingLayout",{type:"filtering"});a(this,"sampler_comparisonBindingLayout",{type:"comparison"});a(this,"flipY");a(this,"isVideoTexture");a(this,"isHDRTexture");a(this,"_useMipmap",!1);a(this,"_sourceImageData");a(this,"_addressModeU");a(this,"_addressModeV");a(this,"_addressModeW");a(this,"_magFilter");a(this,"_minFilter");a(this,"_mipmapFilter");a(this,"_lodMinClamp");a(this,"_lodMaxClamp");a(this,"_compare");a(this,"_maxAnisotropy");a(this,"mipmapCount",1);a(this,"_textureChange",!1);a(this,"_stateChangeRef",new Map);this.width=A,this.height=e,this.numberLayer=t,this.minFilter=qi.linear,this.magFilter=qi.linear,this.mipmapFilter=qi.linear,this.addressModeU=xr.repeat,this.addressModeV=xr.repeat}init(){let A=this;return A.internalCreateBindingLayoutDesc&&A.internalCreateBindingLayoutDesc(),A.internalCreateTexture&&A.internalCreateTexture(),A.internalCreateView&&A.internalCreateView(),A.internalCreateSampler&&A.internalCreateSampler(),this}createTextureDescriptor(A,e,t,i,n=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING,s=1,o=0){this.width=A,this.height=e,this.format=i,this.usage=n,this.textureDescriptor={size:[A,e,s],mipLevelCount:t,format:i,usage:n,label:`${this.name+this.width+this.height+this.format}`},o>0&&(this.textureDescriptor.sampleCount=o),s>1?this.viewDescriptor={dimension:"2d-array"}:this.viewDescriptor={dimension:this.textureBindingLayout.viewDimension,mipLevelCount:t,baseMipLevel:0}}generate(A){let e=32,t=32;"width"in A&&(e=A.width,t=A.height),(e<32||t<32)&&console.log(A.name+"Size must be greater than 32!"),this.width=e,this.height=t,this.createTexture(A)}createTexture(A){this._sourceImageData=A,this.updateTextureDescription(),this.updateGPUTexture();let e=iA.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),this.useMipmap&&Us.webGPUGenerateMipmap(this)}get useMipmap(){return this._useMipmap}set useMipmap(A){if(A){if(this.samplerBindingLayout.type="filtering",this._useMipmap==!1&&this._sourceImageData){this._useMipmap=!0,this.updateTextureDescription(),this.updateGPUTexture();let e=iA.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),Us.webGPUGenerateMipmap(this)}}else if(this.samplerBindingLayout.type="non-filtering",this._useMipmap==!0&&this._sourceImageData){this._useMipmap=!1,this.updateTextureDescription(),this.updateGPUTexture();let e=iA.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height])}this._textureChange=!0,this._useMipmap=A,this.noticeChange()}get sourceImageData(){return this._sourceImageData}getMipmapCount(){let A=this.width,e=this.height,t=Math.max(A,e);return 1+Math.log2(t)|0}updateTextureDescription(){this.mipmapCount=Math.floor(this.useMipmap?this.getMipmapCount():1),this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format)}updateGPUTexture(){this.gpuTexture&&this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this.gpuTexture=null,this.view=null,this.gpuTexture=this.getGPUTexture()}getGPUTexture(){return this.gpuTexture||(this.gpuTexture=iA.device.createTexture(this.textureDescriptor)),this.gpuTexture}getGPUView(A=0){return this.view||(this.gpuTexture=this.getGPUTexture(),this.gpuTexture instanceof GPUTexture&&(this.view=this.gpuTexture.createView(this.viewDescriptor),this.view.label=this.name)),this.view}bindStateChange(A,e){this._stateChangeRef.set(e,A)}unBindStateChange(A){this._stateChangeRef.delete(A)}noticeChange(){this.gpuSampler=iA.device.createSampler(this),this._stateChangeRef.forEach((A,e)=>{A()})}destroy(A){A&&this.gpuTexture instanceof GPUTexture&&(this.gpuSampler=null,this.gpuSampler_comparison=null,this.textureBindingLayout=null,this.textureDescriptor=null,this.gpuTexture.destroy(),this.gpuTexture=null),this._stateChangeRef.clear()}get addressModeU(){return this._addressModeU}set addressModeU(A){this._addressModeU!=A&&(this._addressModeU=A,this.noticeChange())}get addressModeV(){return this._addressModeV}set addressModeV(A){this._addressModeV!=A&&(this._addressModeV=A,this.noticeChange())}get addressModeW(){return this._addressModeW}set addressModeW(A){this._addressModeW!=A&&(this._addressModeW=A,this.noticeChange())}get magFilter(){return this._magFilter}set magFilter(A){this._magFilter!=A&&(this._magFilter=A,this.noticeChange())}get minFilter(){return this._minFilter}set minFilter(A){this._minFilter!=A&&(this._minFilter=A,this.noticeChange())}get mipmapFilter(){return this._mipmapFilter}set mipmapFilter(A){this._mipmapFilter!=A&&(this._mipmapFilter=A,this.noticeChange())}get lodMinClamp(){return this._lodMinClamp}set lodMinClamp(A){this._lodMinClamp!=A&&(this._lodMinClamp=A,this.noticeChange())}get lodMaxClamp(){return this._lodMaxClamp}set lodMaxClamp(A){this._lodMaxClamp!=A&&(this._lodMaxClamp=A,this.noticeChange())}get compare(){return this._compare}set compare(A){this._compare!=A&&(this._compare=A,this.noticeChange())}get maxAnisotropy(){return this._maxAnisotropy}set maxAnisotropy(A){this._maxAnisotropy!=A&&(this._maxAnisotropy=A,this.noticeChange())}static delayDestroyTexture(A){this._texs.includes(A)||this._texs.push(A)}static destroyTexture(){if(this._texs.length>0)for(;this._texs.length>0;)this._texs.shift().destroy()}}a(Tt,"_texs",[]);class D4 extends Tt{constructor(e,t,i){super(e,t,i);a(this,"_bitmapTextures");this.format=MA.rgba8unorm,this.mipmapCount=1,this._bitmapTextures=[],this.init()}setTextures(e){this._bitmapTextures.length=0;for(let t=0;t<e.length;t++){const i=e[t];this.addTexture(i)}}addTexture(e){(e.width!=this.width||e.height!=this.height)&&console.error("bitmap texture must match bitmapTextureArray size!"),e.pid=this._bitmapTextures.length,this._bitmapTextures.push(e),this.updateTexture()}removeTexture(e){let t=this._bitmapTextures.indexOf(e);if(t!=-1){this._bitmapTextures.splice(t,1);for(let i=0;i<this._bitmapTextures.length;i++){const n=this._bitmapTextures[i];n.pid=i}}}updateTexture(){let e=sA.beginCommandEncoder();for(let t=0;t<this._bitmapTextures.length;t++){let i=this._bitmapTextures[t];e.copyTextureToTexture({texture:i.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:t}},{width:this.width,height:this.height,depthOrArrayLayers:1})}sA.endCommandEncoder(e)}internalCreateBindingLayoutDesc(){this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.minFilter=qi.linear,this.magFilter=qi.linear}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=this.getGPUTexture()}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.getGPUView()}internalCreateSampler(){this.gpuSampler=iA.device.createSampler(this)}}const Qr=class Qr{constructor(){a(this,"_iesTexture");a(this,"index",0)}generateIES(A){}set IESTexture(A){this._iesTexture=A,A.addressModeU=xr.repeat,A.addressModeV=xr.repeat,A.addressModeW=xr.repeat,Qr.ies_list.indexOf(this)==-1&&(this.index=Qr.ies_list.length,Qr.ies_list.push(this),Qr.iesTexture||Qr.create(A.width,A.height),Qr.iesTexture.addTexture(A))}get IESTexture(){return this._iesTexture}static create(A,e){let t=48;this.iesTexture=new D4(A,e,t)}};a(Qr,"use",!1),a(Qr,"iesTexture"),a(Qr,"ies_list",[]);let au=Qr;class Xu{constructor(A=0,e="\0"){a(this,"Type",0);a(this,"Line",0);a(this,"Colume",0);a(this,"Literal","");this.Type=A,this.Literal=e}isTypeEqual(A){return this.Type==A}isLiteralEqual(A){return this.Literal==A}isBuiltinType(){return this.Type>33&&this.Type<101}isDataType(){return this.Type==1||this.isBuiltinType()}isOperation(){return this.Type>102&&this.Type<127}isAssignOperation(){return this.Type>128&&this.Type<133}get nOperationPriorityLevel(){switch(this.Type){case 26:return 1;case 27:return 1;case 125:return 2;case 110:return 3;case 114:return 3;case 105:return 4;case 106:return 4;case 103:return 5;case 104:return 5;case 115:return 6;case 116:return 6;case 119:return 7;case 120:return 7;case 122:return 7;case 123:return 7;case 121:return 8;case 124:return 8;case 111:return 9;case 113:return 10;case 112:return 11;case 107:return 12;case 109:return 13;case 108:return 14;case 24:return 15;case 126:return 16;case 129:return 16;case 130:return 16;case 131:return 16;case 132:return 16}return 99}}var U=(r=>(r[r.EOF=0]="EOF",r[r.IDENT=1]="IDENT",r[r.VOID=2]="VOID",r[r.CONST=3]="CONST",r[r.LAYOUT=4]="LAYOUT",r[r.PRECISION=5]="PRECISION",r[r.ATTRIBUTE=6]="ATTRIBUTE",r[r.UNIFORM=7]="UNIFORM",r[r.VARYING=8]="VARYING",r[r.INVARIANT=9]="INVARIANT",r[r.IN=10]="IN",r[r.OUT=11]="OUT",r[r.INOUT=12]="INOUT",r[r.IF=13]="IF",r[r.ELSE=14]="ELSE",r[r.FOR=15]="FOR",r[r.WHILE=16]="WHILE",r[r.DO=17]="DO",r[r.BREAK=18]="BREAK",r[r.RETURN=19]="RETURN",r[r.CONTINUE=20]="CONTINUE",r[r.STRUCT=21]="STRUCT",r[r.COMMA=22]="COMMA",r[r.COLON=23]="COLON",r[r.QUEMARK=24]="QUEMARK",r[r.SEMICOLON=25]="SEMICOLON",r[r.LEFTSAMLL=26]="LEFTSAMLL",r[r.RIGHTSAMLL=27]="RIGHTSAMLL",r[r.LEFTMEDI=28]="LEFTMEDI",r[r.RIGHTMEDI=29]="RIGHTMEDI",r[r.LEFTBIG=30]="LEFTBIG",r[r.RIGHTBIG=31]="RIGHTBIG",r[r.LITERAL=32]="LITERAL",r[r.BeginBuiltinType=33]="BeginBuiltinType",r[r.INT=34]="INT",r[r.INT_ARRAY=35]="INT_ARRAY",r[r.UINT=36]="UINT",r[r.UINT_ARRAY=37]="UINT_ARRAY",r[r.BOOL=38]="BOOL",r[r.BOOL_ARRAY=39]="BOOL_ARRAY",r[r.FLOAT=40]="FLOAT",r[r.FLOAT_ARRAY=41]="FLOAT_ARRAY",r[r.DOUBLE=42]="DOUBLE",r[r.DOUBLE_ARRAY=43]="DOUBLE_ARRAY",r[r.VEC2=44]="VEC2",r[r.VEC2_ARRAY=45]="VEC2_ARRAY",r[r.VEC3=46]="VEC3",r[r.VEC3_ARRAY=47]="VEC3_ARRAY",r[r.VEC4=48]="VEC4",r[r.VEC4_ARRAY=49]="VEC4_ARRAY",r[r.BVEC2=50]="BVEC2",r[r.BVEC2_ARRAY=51]="BVEC2_ARRAY",r[r.BVEC3=52]="BVEC3",r[r.BVEC3_ARRAY=53]="BVEC3_ARRAY",r[r.BVEC4=54]="BVEC4",r[r.BVEC4_ARRAY=55]="BVEC4_ARRAY",r[r.IVEC2=56]="IVEC2",r[r.IVEC2_ARRAY=57]="IVEC2_ARRAY",r[r.IVEC3=58]="IVEC3",r[r.IVEC3_ARRAY=59]="IVEC3_ARRAY",r[r.IVEC4=60]="IVEC4",r[r.IVEC4_ARRAY=61]="IVEC4_ARRAY",r[r.UVEC2=62]="UVEC2",r[r.UVEC2_ARRAY=63]="UVEC2_ARRAY",r[r.UVEC3=64]="UVEC3",r[r.UVEC3_ARRAY=65]="UVEC3_ARRAY",r[r.UVEC4=66]="UVEC4",r[r.UVEC4_ARRAY=67]="UVEC4_ARRAY",r[r.MAT2x2=68]="MAT2x2",r[r.MAT2x2_ARRAY=69]="MAT2x2_ARRAY",r[r.MAT2x3=70]="MAT2x3",r[r.MAT2x3_ARRAY=71]="MAT2x3_ARRAY",r[r.MAT2x4=72]="MAT2x4",r[r.MAT2x4_ARRAY=73]="MAT2x4_ARRAY",r[r.MAT3x2=74]="MAT3x2",r[r.MAT3x2_ARRAY=75]="MAT3x2_ARRAY",r[r.MAT3x3=76]="MAT3x3",r[r.MAT3x3_ARRAY=77]="MAT3x3_ARRAY",r[r.MAT3x4=78]="MAT3x4",r[r.MAT3x4_ARRAY=79]="MAT3x4_ARRAY",r[r.MAT4x2=80]="MAT4x2",r[r.MAT4x2_ARRAY=81]="MAT4x2_ARRAY",r[r.MAT4x3=82]="MAT4x3",r[r.MAT4x3_ARRAY=83]="MAT4x3_ARRAY",r[r.MAT4x4=84]="MAT4x4",r[r.MAT4x4_ARRAY=85]="MAT4x4_ARRAY",r[r.SAMPLER=86]="SAMPLER",r[r.SAMPLER_1D=87]="SAMPLER_1D",r[r.SAMPLER_2D=88]="SAMPLER_2D",r[r.SAMPLER_3D=89]="SAMPLER_3D",r[r.SAMPLER_CUBE=90]="SAMPLER_CUBE",r[r.SAMPLER_SHADOW=91]="SAMPLER_SHADOW",r[r.SAMPLER_1D_SHADOW=92]="SAMPLER_1D_SHADOW",r[r.SAMPLER_2D_SHADOW=93]="SAMPLER_2D_SHADOW",r[r.TEXTURE_1D=94]="TEXTURE_1D",r[r.TEXTURE_1D_ARRAY=95]="TEXTURE_1D_ARRAY",r[r.TEXTURE_2D=96]="TEXTURE_2D",r[r.TEXTURE_2D_ARRAY=97]="TEXTURE_2D_ARRAY",r[r.TEXTURE_3D=98]="TEXTURE_3D",r[r.TEXTURE_CUBE=99]="TEXTURE_CUBE",r[r.TEXTURE_CUBE_ARRAY=100]="TEXTURE_CUBE_ARRAY",r[r.EndBuiltinType=101]="EndBuiltinType",r[r.BeginOperation=102]="BeginOperation",r[r.ADD=103]="ADD",r[r.SUB=104]="SUB",r[r.MUL=105]="MUL",r[r.DIV=106]="DIV",r[r.AND=107]="AND",r[r.OR=108]="OR",r[r.XOR=109]="XOR",r[r.NOT=110]="NOT",r[r.BITAND=111]="BITAND",r[r.BITOR=112]="BITOR",r[r.BITXOR=113]="BITXOR",r[r.BITNOT=114]="BITNOT",r[r.BITSHIFT_L=115]="BITSHIFT_L",r[r.BITSHIFT_R=116]="BITSHIFT_R",r[r.INC=117]="INC",r[r.DEC=118]="DEC",r[r.GREATER=119]="GREATER",r[r.GREATEREQUAL=120]="GREATEREQUAL",r[r.EQUAL=121]="EQUAL",r[r.LESS=122]="LESS",r[r.LESSEQUAL=123]="LESSEQUAL",r[r.NOTEQUAL=124]="NOTEQUAL",r[r.DOT=125]="DOT",r[r.ASSIGN=126]="ASSIGN",r[r.EndOperation=127]="EndOperation",r[r.BeginAssignOperation=128]="BeginAssignOperation",r[r.ADDASSIGN=129]="ADDASSIGN",r[r.SUBASSIGN=130]="SUBASSIGN",r[r.MULASSIGN=131]="MULASSIGN",r[r.DIVASSIGN=132]="DIVASSIGN",r[r.EndAssignOperation=133]="EndAssignOperation",r))(U||{});class Qa{constructor(A){a(this,"_char");a(this,"_line");a(this,"_column");a(this,"_source");a(this,"_currPosition");a(this,"_nextPosition");this.reset(A)}reset(A){this._char="",this._line=0,this._column=0,this._source=A,this._currPosition=0,this._nextPosition=0}get source(){return this._source}getChar(){return this._char}get currPosition(){return this._currPosition}peekChar(){return this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition]}readChar(){this._char=this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition],this._char!==`
`?this._column++:(this._line++,this._column=0),this._currPosition=this._nextPosition,this._nextPosition++}readCharAndSkipWhitespace(){this.readChar(),this.skipWhitespace()}readIdentifier(){for(var A=this._currPosition;this.isIdentifier(this._char);)this.readChar();return this._source.substring(A,this._currPosition)}isIdentifier(A){var e=A.charCodeAt(0);return 97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57||e==95}skipWhitespace(){for(;this.IsWhitespace(this._char);)this.readChar()}IsWhitespace(A){return A===" "||A==="	"||A==="\r"||A===`
`}skipComment(){for(;this._char!==`
`&&this._char!=="\0";)this.readChar();this.skipWhitespace()}skipMultilineComment(){if(!(this._char!=="/"&&this.peekChar()!=="*")){this.readChar(),this.readChar();for(let A=1;A>0&&this._char!=="\0";)if(this.readChar(),this._char==="/"&&this.peekChar()==="*"){A++,this.readChar();continue}else if(this._char==="*"&&this.peekChar()==="/"){A--,this.readChar();continue}this.readChar(),this.readChar(),this.skipWhitespace()}}isDigit(A){var e=A.charCodeAt(0);return 48<=e&&e<=57}readNumber(){for(var A=this._currPosition;this.isDigit(this._char);)this.readChar();if(this._char===".")for(this.readChar();this.isDigit(this._char);)this.readChar();return this._source.substring(A,this._currPosition)}readValue(){return this.isDigit(this._char)?this.readNumber():this.readIdentifier()}readLine(){var A=this._currPosition,e=this._source.indexOf(`
`,this._currPosition);return e==-1&&(e=this._source.length),this._line++,this._column=0,this._currPosition=e,this._nextPosition=e+1,this._source.substring(A,e+1)}}class x4 extends Qa{constructor(e){super(e.source);a(this,"_tokenPosition",0);a(this,"_tokens",[]);this.parse()}skipToken(e){this._tokenPosition+=e}peekToken(e){return this._tokenPosition+e>=this._tokens.length?new Xu(U.EOF,"\0"):this._tokens[this._tokenPosition+e]}GetNextToken(){if(this._tokenPosition>=this._tokens.length)return new Xu(U.EOF,"\0");let e=this._tokens[this._tokenPosition];return this._tokenPosition++,e}get currTokenPosition(){return this._tokenPosition}parse(){this.readChar(),this._tokens=new Array;var e;do e=this.nextToken(),this._tokens.push(e);while(e.Type!=U.EOF)}nextToken(){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/")return this.skipComment(),this.nextToken();if(this.peekChar()==="*")return this.skipMultilineComment(),this.nextToken()}var e=new Xu;switch(e.Line=this._line,e.Colume=this._column,this._char){case"\0":e.Type=U.EOF,e.Literal="EOF";break;case".":e.Type=U.DOT,e.Literal=".";break;case",":e.Type=U.COMMA,e.Literal=",";break;case":":e.Type=U.COLON,e.Literal=":";break;case"?":e.Type=U.QUEMARK,e.Literal="?";break;case";":e.Type=U.SEMICOLON,e.Literal=";";break;case"(":e.Type=U.LEFTSAMLL,e.Literal="(";break;case")":e.Type=U.RIGHTSAMLL,e.Literal=")";break;case"[":e.Type=U.LEFTMEDI,e.Literal="[";break;case"]":e.Type=U.RIGHTMEDI,e.Literal="]";break;case"{":e.Type=U.LEFTBIG,e.Literal="{";break;case"}":e.Type=U.RIGHTBIG,e.Literal="}";break;case"+":if(this.peekChar()==="+"){this.readChar(),e.Type=U.INC,e.Literal="++";break}else if(this.peekChar()==="="){this.readChar(),e.Type=U.ADDASSIGN,e.Literal="+=";break}e.Type=U.ADD,e.Literal="+";break;case"-":if(this.peekChar()==="-"){this.readChar(),e.Type=U.DEC,e.Literal="--";break}else if(this.peekChar()==="="){this.readChar(),e.Type=U.SUBASSIGN,e.Literal="-=";break}e.Type=U.SUB,e.Literal="-";break;case"*":if(this.peekChar()==="="){this.readChar(),e.Type=U.MULASSIGN,e.Literal="*=";break}e.Type=U.MUL,e.Literal="*";break;case"/":if(this.peekChar()==="="){this.readChar(),e.Type=U.DIVASSIGN,e.Literal="/=";break}e.Type=U.DIV,e.Literal="/";break;case"&":if(this.peekChar()==="&"){this.readChar(),e.Type=U.AND,e.Literal="&&";break}e.Type=U.BITAND,e.Literal="&";break;case"|":if(this.peekChar()==="|"){this.readChar(),e.Type=U.OR,e.Literal="||";break}e.Type=U.BITOR,e.Literal="&";break;case"^":e.Type=U.BITXOR,e.Literal="^";break;case"!":if(this.peekChar()==="="){this.readChar(),e.Type=U.NOTEQUAL,e.Literal="!=";break}e.Type=U.NOT,e.Literal="!";break;case">":if(this.peekChar()==="="){this.readChar(),e.Type=U.GREATEREQUAL,e.Literal=">=";break}else if(this.peekChar()===">"){this.readChar(),e.Type=U.BITSHIFT_R,e.Literal=">>";break}e.Type=U.GREATER,e.Literal=">";break;case"=":if(this.peekChar()==="="){this.readChar(),e.Type=U.EQUAL,e.Literal="==";break}e.Type=U.ASSIGN,e.Literal="=";break;case"<":if(this.peekChar()==="="){this.readChar(),e.Type=U.LESSEQUAL,e.Literal="<=";break}else if(this.peekChar()==="<"){this.readChar(),e.Type=U.BITSHIFT_L,e.Literal="<<";break}e.Type=U.LESS,e.Literal="<";break;default:return this.isDigit(this._char)?this.readDecimal():(e.Literal=this.readIdentifier(),e.Type=this.lookupIdentifier(e.Literal),this.getChar()=="["&&this.peekChar()=="]"&&e.isBuiltinType()&&(e.Type++,e.Literal+="[]",this.readChar(),this.readChar()),e)}return this.readChar(),e}readDecimal(){var e=new Xu;e.Line=this._line,e.Colume=this._column,e.Type=U.LITERAL;var t=this.readNumber();return this._char==="e"?(e.Literal=t+this._char,this.readChar(),e.Literal+=this._char,this.readChar(),e.Literal+=this.readNumber(),e.Type=U.LITERAL,e):this._char==="u"?(this.readChar(),e.Type=U.LITERAL,e.Literal=t+"u",e):this._char==="f"?(this.readChar(),e.Type=U.LITERAL,e.Literal=t+"f",e):(e.Type=U.LITERAL,e.Literal=t,e)}lookupIdentifier(e){switch(e){case"void":return U.VOID;case"int":return U.INT;case"uint":return U.UINT;case"bool":return U.BOOL;case"true":return U.BOOL;case"false":return U.BOOL;case"float":return U.FLOAT;case"vec2":return U.VEC2;case"vec3":return U.VEC3;case"vec4":return U.VEC4;case"bvec2":return U.BVEC2;case"bvec3":return U.BVEC3;case"bvec4":return U.BVEC4;case"ivec2":return U.IVEC2;case"ivec3":return U.IVEC3;case"ivec4":return U.IVEC4;case"uvec2":return U.UVEC2;case"uvec3":return U.UVEC3;case"uvec4":return U.UVEC4;case"mat2":return U.MAT2x2;case"mat2x2":return U.MAT2x2;case"mat2x3":return U.MAT2x3;case"mat2x4":return U.MAT2x4;case"mat3":return U.MAT3x3;case"mat3x2":return U.MAT3x2;case"mat3x3":return U.MAT3x3;case"mat3x4":return U.MAT3x4;case"mat4":return U.MAT4x4;case"mat4x2":return U.MAT4x2;case"mat4x3":return U.MAT4x3;case"mat4x4":return U.MAT4x4;case"sampler":return U.SAMPLER;case"sampler1D":return U.SAMPLER_1D;case"sampler2D":return U.SAMPLER_2D;case"sampler3D":return U.SAMPLER_3D;case"samplerCube":return U.SAMPLER_CUBE;case"samplerShadow":return U.SAMPLER_SHADOW;case"sampler1DShadow":return U.SAMPLER_1D_SHADOW;case"sampler2DShadow":return U.SAMPLER_2D_SHADOW;case"texture1D":return U.TEXTURE_1D;case"texture2D":return U.TEXTURE_2D;case"texture3D":return U.TEXTURE_3D;case"textureCube":return U.TEXTURE_CUBE;case"texture1DArray":return U.TEXTURE_1D_ARRAY;case"texture2DArray":return U.TEXTURE_2D_ARRAY;case"textureCubeArray":return U.TEXTURE_CUBE_ARRAY;case"const":return U.CONST;case"layout":return U.LAYOUT;case"precision":return U.PRECISION;case"attribute":return U.ATTRIBUTE;case"uniform":return U.UNIFORM;case"varying":return U.VARYING;case"invariant":return U.INVARIANT;case"in":return U.IN;case"out":return U.OUT;case"inout":return U.INOUT;case"if":return U.IF;case"else":return U.ELSE;case"for":return U.FOR;case"while":return U.WHILE;case"do":return U.DO;case"break":return U.BREAK;case"return":return U.RETURN;case"continue":return U.CONTINUE;case"struct":return U.STRUCT}return U.IDENT}}class O4{constructor(){a(this,"name","");a(this,"value","");a(this,"args",[])}}class M4 extends Qa{constructor(e){super(e);a(this,"_result");a(this,"_skipLine");a(this,"_definitionTables");this._result="",this._skipLine=!1,this._definitionTables=new Map,this.parse()}parse(){for(this.readChar();this._char!=="\0";){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/"){this.skipComment();continue}if(this.peekChar()==="*"){this.skipMultilineComment();continue}}if(this._char==="#"){this.readCharAndSkipWhitespace();var e=this.readIdentifier();switch(e){case"version":this.readLine().trim();break;case"define":this.readCharAndSkipWhitespace();var t=this.readIdentifier();if(this.getChar()==="("){let u=new O4;if(this.readCharAndSkipWhitespace(),this.getChar()!==")")do{var i=this.readIdentifier();if(u.args.push(i),this.skipWhitespace(),this.getChar()===","){this.readCharAndSkipWhitespace();continue}}while(this.getChar()!==")");this.readCharAndSkipWhitespace(),u.name=t,u.value=this.readLine().trim(),this._definitionTables.set(t,u),this.readCharAndSkipWhitespace()}else{let u=this.readLine().trim();u[0]=="="&&(u=u.substring(1)),this._definitionTables.set(t,u)}break;case"if":let o=this.readLine().trim();if(o=="0"||o=="false"){this._skipLine=!0;break}if(this._definitionTables.has(o)&&(o=this._definitionTables.get(o),o=="0"||o=="false")){this._skipLine=!0;break}break;case"ifdef":this.readCharAndSkipWhitespace();var n=this.readIdentifier();this._skipLine=!this._definitionTables.has(n);break;case"else":this._skipLine=!this._skipLine;break;case"endif":this._skipLine=!1;break;default:throw"Unknown preprocessing command:"+e}}else{var s=this.readLine();if(!this._skipLine){for(let o of this._definitionTables.keys()){let u=s.indexOf(o);if(u!=-1){let l=this._definitionTables.get(o);if(typeof l=="string")s=s.replace(o,l);else{let c=l,h=new Qa(s.substring(u+o.length));if(h.readCharAndSkipWhitespace(),h.getChar()==="("){h.readCharAndSkipWhitespace();for(let y=1;h.getChar()!=="\0"&&y>0;){switch(h.getChar()){case"(":y++;break;case")":y--;break}h.readCharAndSkipWhitespace()}}let d=u,f=d+o.length+h.currPosition,p=s.substring(d,f).trim();if(c.args.length>0){let y=[],_=p.substring(p.indexOf("(")+1,p.lastIndexOf(")")).trim();_.length>0&&(y=this.parseArgs(_));let g=c.value.substring(c.value.indexOf("("));for(let m=0;m<c.args.length;m++)g=g.replace(c.args[m],y[m]);g=c.value.substring(0,c.value.indexOf("("))+g,s=s.replace(p,g)}else s=s.replace(p,c.value)}}}this._result+=s}this.readChar()}}}get source(){return this._result}parseArgs(e){let t=[],i=0,n=new Qa(e),s=n.currPosition;if(n.readCharAndSkipWhitespace(),n.getChar()!=="\0")for(n.readCharAndSkipWhitespace();n.getChar()!=="\0";){switch(n.getChar()){case"(":i++;break;case")":i--;break;case",":if(i==0){let o=e.substring(s,n.currPosition);t.push(o),s=n.currPosition+1}break}n.readCharAndSkipWhitespace()}if(s<n.currPosition){let o=e.substring(s,n.currPosition);t.push(o)}return t}}class R4{constructor(A){a(this,"result");a(this,"ASTRoot");a(this,"_syntax");this.result="",this._syntax=A,this.ASTRoot=A.ASTRoot}generateWGSL(){let A=new X3;var e=new L4;let t=[],i=[],n=[];for(let c of this.ASTRoot.nodes)if(c instanceof s1)if(c.scope=="in")if(c.nodes[0]instanceof Ne){A.layoutsIn.push(c);let h=new Cg;h.name=c.nodes[0].name,h.type=c.nodes[0].type,h.locationID=Number.parseInt(c.qualifier.get("location")),e.inputAttribute.push(h)}else if(c.qualifier.has("local_size_x"))A.workGroupSize=c;else throw"not impl";else if(c.scope=="out")if(A.layoutsOut.push(c),c.nodes[0]instanceof Ne){let h=new Cg;h.name=c.nodes[0].name,h.type=c.nodes[0].type,h.locationID=Number.parseInt(c.qualifier.get("location")),e.outputAttribute.push(h)}else throw"not impl";else if(c.scope=="uniform")if(i.push(c),c.nodes[0]instanceof Ne){let h=new Eg;h.name=c.nodes[0].name,h.type=c.nodes[0].type,h.setID=Number.parseInt(c.qualifier.get("set")),h.bindingID=Number.parseInt(c.qualifier.get("binding")),e.uniformInfo.push(h)}else if(c.nodes[0]instanceof Un){let h=new Eg;h.name="unif"+e.uniformInfo.length.toString(),h.type=c.nodes[0].name,h.setID=Number.parseInt(c.qualifier.get("set")),h.bindingID=Number.parseInt(c.qualifier.get("binding")),e.uniformInfo.push(h)}else throw"not impl";else c.scope=="buffer"&&t.push(c);else n.push(c);A.stage="fragment";let s=0,o=new Qa(""),u=this._syntax.lexer.source,l=new Map;for(;(s=u.indexOf("gl_",s))!=-1;){o.reset(u.substring(s,s+32)),o.readChar();let c=o.readIdentifier();if(s+=c.length,!l.has(c))switch(l.set(c,c),c){case"gl_InstanceID":A.stage="vertex",A.builtinIn.push("@builtin(instance_index) gl_InstanceID: u32");break;case"gl_Position":A.stage="vertex",A.builtinOut.push("@builtin(position) gl_Position: vec4<f32>"),A.addIdentifier("gl_Position","stout.gl_Position");break;case"gl_VertexIndex":A.stage="vertex",A.builtinIn.push("@builtin(vertex_index) gl_VertexIndex: u32");break;case"gl_FrontFacing":A.stage="fragment",A.builtinIn.push("@builtin(front_facing) gl_FrontFacing: bool");break;case"gl_FragDepth":A.stage="fragment",A.builtinOut.push("@builtin(frag_depth) gl_FragDepth: f32"),A.addIdentifier("gl_FragDepth","stout.gl_FragDepth");break;case"gl_WorkGroupID":A.stage="compute",A.builtinIn.push("@builtin(workgroup_id) gl_WorkGroupID: vec3<u32>");break;case"gl_NumWorkGroups":A.stage="compute",A.builtinIn.push("@builtin(num_workgroups) gl_NumWorkGroups: vec3<u32>");break;case"gl_LocalInvocationID":A.stage="compute",A.builtinIn.push("@builtin(local_invocation_id) gl_LocalInvocationID: vec3<u32>");break;case"gl_LocalInvocationIndex":A.stage="compute",A.builtinIn.push("@builtin(local_invocation_index) gl_LocalInvocationIndex: u32");break;case"gl_GlobalInvocationID":A.stage="compute",A.builtinIn.push("@builtin(global_invocation_id) gl_GlobalInvocationID: vec3<u32>");break;default:throw"Unprocessed built-in variables: "+c}}for(let c of i)c.nodes[0]instanceof Un&&(e.sourceCode+=c.nodes[0].formatToWGSL(A,0),e.sourceCode+=`\r
`);for(let c of i)e.sourceCode+=c.formatToWGSL(A,0);e.sourceCode+=`\r
`;for(let c of t)c.nodes[0]instanceof Un&&(e.sourceCode+=c.nodes[0].formatToWGSL(A,0),e.sourceCode+=`\r
`);for(let c of t)e.sourceCode+=c.formatToWGSL(A,0);e.sourceCode+=`\r
`;for(let c of n)e.sourceCode+=c.formatToWGSL(A,0),c instanceof Ne&&(e.sourceCode+=`;\r
`);return e}}class X3{constructor(A){a(this,"_stage","fragment");a(this,"_builtinIn",[]);a(this,"_builtinOut",[]);a(this,"_layoutsIn",[]);a(this,"_layoutsOut",[]);a(this,"_layoutUniformCount",0);a(this,"_workGroupSize");a(this,"_parentContext");a(this,"_identifierEnv",new Map);this._parentContext=A}get stage(){return this.parentContext!=null?this.parentContext.stage:this._stage}set stage(A){this.parentContext!=null&&(this.parentContext.stage=A),this._stage=A}get builtinIn(){return this.parentContext!=null?this.parentContext.builtinIn:this._builtinIn}get builtinOut(){return this.parentContext!=null?this.parentContext.builtinOut:this._builtinOut}get layoutsIn(){return this.parentContext!=null?this.parentContext.layoutsIn:this._layoutsIn}get layoutsOut(){return this.parentContext!=null?this.parentContext.layoutsOut:this._layoutsOut}get layoutUniformCount(){return this.parentContext!=null?this.parentContext.layoutUniformCount:this._layoutUniformCount}set layoutUniformCount(A){if(this.parentContext!=null){this.parentContext.layoutUniformCount=A;return}this._layoutUniformCount=A}get workGroupSize(){return this.parentContext!=null?this.parentContext.workGroupSize:this._workGroupSize}set workGroupSize(A){this.parentContext!=null&&(this.parentContext.workGroupSize=A),this._workGroupSize=A}get parentContext(){return this._parentContext}findIdentifier(A){return this._identifierEnv.has(A)?this._identifierEnv.get(A):this._parentContext!=null?this._parentContext.findIdentifier(A):A}addIdentifier(A,e){this._identifierEnv.set(A,e)}hasIdentifier(A){return this._identifierEnv.has(A)}}class Te{constructor(){a(this,"nodes",[])}addNode(A){this.nodes.push(A)}formatToWGSL(A,e){return""}}class Un extends Te{constructor(e){super();a(this,"name","");a(this,"fields",[]);this.name=e}static parse(e){if(e.peekToken(0).Type==U.IDENT&&e.peekToken(1).Type==U.LEFTBIG){let t=new Un(e.peekToken(0).Literal);for(e.skipToken(2);e.peekToken(0).Type!=U.RIGHTBIG;){let i=Ne.parse(e);t.fields.push(i)}return e.peekToken(0).Type==U.RIGHTBIG&&e.skipToken(1),e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1),t}throw"Error parsing structure: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);i+=n+"struct "+this.name+` {\r
`;for(let s of this.fields)s.arraySize.nodes.length<=0?i+=n+"  "+s.name+": "+Br(s.type)+`,\r
`:s.arraySize.nodes[0]instanceof Qn?i+=n+"  "+s.name+": array<"+Br(s.type)+", "+s.arraySize.nodes[0].value+`>,\r
`:i+=n+"  "+s.name+": array<"+Br(s.type)+", "+s.arraySize.nodes[0].formatToWGSL(e,0)+`>,\r
`;return i+=n+`};\r
`,i}}class o0 extends Te{constructor(e,t,i,n){super();a(this,"name");a(this,"args");a(this,"body");a(this,"returnType");this.name=e,this.args=t,this.body=i,this.returnType=n}static parse(e){if((e.peekToken(0).isBuiltinType()||e.peekToken(0).Type==U.VOID)&&e.peekToken(1).Type==U.IDENT&&e.peekToken(2).Type==U.LEFTSAMLL){let t=e.peekToken(0).Literal,i=e.peekToken(1).Literal;e.skipToken(2);let n=new Array;if(e.peekToken(0).Type!=U.LEFTSAMLL)throw"Error parsing function parameter list: Unexpected character";for(e.skipToken(1);e.peekToken(0).Type!=U.EOF;){if(e.peekToken(0).Type==U.RIGHTSAMLL){e.skipToken(1);break}(e.peekToken(0).Type==U.INOUT||e.peekToken(0).Type==U.IN||e.peekToken(0).Type==U.OUT)&&e.skipToken(1);let o=Ne.parse(e);n.push(o),e.peekToken(0).Type==U.COMMA&&e.skipToken(1)}let s=yi.parse(e);return new o0(i,n,s,t)}throw"Error parsing function: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t),s,o=e.layoutsOut.length>0||e.builtinOut.length>0;switch(e.stage){case"compute":s="ComputeOutput";break;case"vertex":s="VertexOutput";break;case"fragment":s="FragmentOutput";break;default:s="StructOutput";break}if(this.name=="main"&&o){i+="struct "+s+` {\r
`;for(let h of e.layoutsOut)if(h.nodes[0]instanceof Ne){let d=h.nodes[0];h.qualifier.size==1&&h.qualifier.has("location")&&(i+="  @location("+h.qualifier.get("location")+") "),i+=d.name+": "+Br(d.type)+`,\r
`,e.addIdentifier(d.name,"stout."+d.name)}let c=e.builtinOut;for(let h of c)i+="  "+h+`,\r
`;i+=`};\r
\r
`}let u="";if(this.name=="main"&&(e.workGroupSize!=null?u+="@"+e.stage+" "+e.workGroupSize.formatToWGSL(e,0)+` \r
`:u+="@"+e.stage+`\r
`),e=new X3(e),u+=n+"fn "+this.name+"(",this.name!="main"){for(let c=0;c<this.args.length;c++){let h=this.args[c];c>0&&(u+=", "),u+=h.name+": "+Br(h.type),e.addIdentifier(h.name,h.name)}u+=") -> "+Br(this.returnType)}else{let c=e.layoutsIn;for(let d=0;d<c.length;d++){let f=c[d];if(d>0?u+=`,\r
    `:u+=`\r
    `,f.nodes[0]instanceof Ne){let p=f.nodes[0];f.qualifier.size==1&&f.qualifier.has("location")&&(u+="@location("+f.qualifier.get("location")+") "),u+=p.name+": "+Br(p.type),e.addIdentifier(p.name,p.name)}}c.length>0&&(u+=`,\r
    `);let h=e.builtinIn;for(let d of h)u+=d+`,\r
    `;o?u+=") -> "+s:u+=") "}let l="";this.name=="main"&&o&&(l+="    var stout: "+s+` ;\r
`);for(let c of this.body.nodes)l+=c.formatToWGSL(e,t+1),!(c instanceof aa)&&!(c instanceof Xo)&&!(c instanceof qo)&&(l+=`;\r
`);return this.name=="main"&&o&&(l+=`    return stout;\r
`),i+=u+` {\r
`,i+=l,i+=n+`}\r
`,i+=`\r
`,i}}class a0 extends Te{constructor(){super();a(this,"args",[])}static parse(e){if(e.peekToken(0).Type==U.LEFTSAMLL){e.skipToken(1);let t=new a0;for(;e.peekToken(0).Type!=U.EOF;){if(e.peekToken(0).Type==U.RIGHTSAMLL){e.skipToken(1);break}let i=YA.parse(e);t.args.push(i),e.peekToken(0).Type==U.COMMA&&e.skipToken(1)}return t}throw"Error parsing function argument table: Unexpected character"}}class Ko extends Te{constructor(e,t){super();a(this,"name");a(this,"args");this.name=e,this.args=t}static parse(e){if(e.peekToken(0).isDataType()&&e.peekToken(1).Type==U.LEFTSAMLL){let t=e.peekToken(0).Literal;e.skipToken(1);let i=a0.parse(e);return new Ko(t,i)}throw"Error parsing function argument table: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);if(this.name=="texture"&&this.args.args[0].nodes[0]instanceof Ko){let s=this.args.args[0].nodes[0];if(s.name=="sampler2D"){i+=n+"textureSample(";for(let o=0;o<s.args.args.length;o++){let u=s.args.args[o];o>0&&(i+=", "),i+=u.formatToWGSL(e,0)}for(let o=1;o<this.args.args.length;o++){let u=this.args.args[o];o>0&&(i+=", "),i+=u.formatToWGSL(e,0)}return i+=")",i}}i+=n+Br(this.name)+"(";for(let s=0;s<this.args.args.length;s++){let o=this.args.args[s];s>0&&(i+=", "),i+=o.formatToWGSL(e,0)}return i+=")",i}}class Ne extends Te{constructor(e,t,i=new YA){super();a(this,"type");a(this,"name");a(this,"arraySize");a(this,"hasIn");a(this,"hasOut");a(this,"hasConst");this.type=e,this.name=t,this.hasIn=!1,this.hasOut=!1,this.hasConst=!1,this.arraySize=i}static parse(e){let t=new Ne("",""),i=e.peekToken(0);if(i.Type==U.CONST)e.skipToken(1),t.hasConst=!0;else if(i.Type==U.IN)e.skipToken(1),t.hasIn=!0;else if(i.Type==U.OUT)e.skipToken(1),t.hasOut=!0;else if(i.Type==U.INOUT)e.skipToken(1),t.hasIn=!0,t.hasOut=!0;else if(!i.isDataType())throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";if(i=e.peekToken(0),i.isDataType()&&e.peekToken(1).Type==U.LEFTMEDI){if(t.type=i.Literal,e.skipToken(2),t.arraySize=YA.parse(e),e.peekToken(0).Type==U.RIGHTMEDI&&e.skipToken(1),e.peekToken(0).Type!=U.IDENT)throw"Unexpected";t.name=e.peekToken(0).Literal,e.skipToken(1)}else if(i.isDataType()&&e.peekToken(1).Type==U.IDENT&&e.peekToken(2).Type==U.LEFTMEDI)t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(3),e.peekToken(0).Type==U.RIGHTMEDI?e.skipToken(1):(t.arraySize=YA.parse(e),e.peekToken(0).Type==U.RIGHTMEDI&&e.skipToken(1));else if(i.isDataType()&&e.peekToken(1).Type==U.IDENT)t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(2);else throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";if(i=e.peekToken(0),i.Type==U.SEMICOLON)return e.skipToken(1),t;if(i.Type==U.RIGHTSAMLL)return t;if(i.Type==U.ASSIGN){let n=e.peekToken(0);e.skipToken(1);let s=new Vn(t.name),o=YA.parse(e);return e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1),t.addNode(new Os(n,s,o)),t}else if(i.Type==U.COMMA){for(;e.peekToken(0).Type==U.COMMA&&e.peekToken(1).Type==U.IDENT;){let n=new Ne(t.type,e.peekToken(1).Literal);t.addNode(n),e.skipToken(2),e.peekToken(0).Type==U.ASSIGN&&(e.skipToken(-1),n.addNode(YA.parse(e)))}return t}throw"Error parsing declaration expression: Unexpected character("+e.peekToken(0).Literal+")"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);if(this.hasConst?i+=n+"let ":i+=n+"var ",e.addIdentifier(this.name,this.name),this.arraySize.nodes.length<=0?i+=this.name+": "+Br(this.type):this.arraySize.nodes[0]instanceof Qn?i+=this.name+": array<"+Br(this.type)+", "+this.arraySize.nodes[0].value+">":i+=this.name+": array<"+Br(this.type)+", "+this.arraySize.nodes[0].formatToWGSL(e,0)+">",this.nodes.length>0&&this.nodes[0]instanceof Os)i+=" = "+this.nodes[0].rightValue.formatToWGSL(e,0);else if(this.nodes.length>0&&this.nodes[0]instanceof YA&&this.nodes[0].nodes[0]instanceof Os)i+=" = "+this.nodes[0].nodes[0].rightValue.formatToWGSL(e,0);else if(this.nodes.length>0&&this.nodes[0]instanceof Ne){i+=`;\r
`;for(let s of this.nodes)i+=s.formatToWGSL(e,t)+`;\r
`}else i+=`;\r
`;return i}}class qo extends Te{constructor(e,t,i,n){super();a(this,"expression1");a(this,"condition");a(this,"expression2");a(this,"loopBody");this.expression1=e,this.condition=t,this.expression2=i,this.loopBody=n}static parse(e){if(e.peekToken(0).Type==U.FOR&&e.peekToken(1).Type==U.LEFTSAMLL){e.skipToken(2);let t;e.peekToken(0).Type==U.SEMICOLON?(e.skipToken(1),t=new YA):e.peekToken(0).isDataType()&&e.peekToken(1).Type==U.IDENT&&e.peekToken(2).Type==U.ASSIGN?(t=new Ne(e.peekToken(0).Literal,e.peekToken(1).Literal),e.skipToken(1),t.addNode(YA.parse(e)),e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1)):(t=YA.parse(e),e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1));let i;e.peekToken(0).Type==U.SEMICOLON?(e.skipToken(1),i=new YA):(i=YA.parse(e),e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1));let n;e.peekToken(0).Type==U.SEMICOLON?(e.skipToken(1),n=new YA):(n=YA.parse(e),e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1)),e.peekToken(0).Type==U.RIGHTSAMLL&&e.skipToken(1);let s;return e.peekToken(0).Type==U.LEFTBIG?s=yi.parse(e):s=new yi,new qo(t,i,n,s)}throw"Error parsing for loop: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);i+=n+"for (",i+=this.expression1.formatToWGSL(e,0)+"; ",i+=this.condition.formatToWGSL(e,0)+"; ",i+=this.expression2.formatToWGSL(e,0)+")",i+=` { \r
`;for(let s of this.loopBody.nodes)i+=s.formatToWGSL(e,t+1),!(s instanceof aa)&&!(s instanceof Xo)&&!(s instanceof qo)&&(i+=`;\r
`);return i+=n+`} \r
`,i}}class Xo extends Te{constructor(e,t){super();a(this,"conditionExpr");a(this,"loopBody");this.conditionExpr=e,this.loopBody=t}static parse(e){if(e.peekToken(0).Type==U.WHILE){e.skipToken(1),e.peekToken(0).Type==U.LEFTSAMLL&&e.skipToken(1);let t=YA.parse(e);e.peekToken(0).Type==U.RIGHTSAMLL&&e.skipToken(1);let i=yi.parse(e);return new Xo(t,i)}throw"Error parsing while loop: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);i+=n+`loop {\r
`,i+=n+"    if ("+this.conditionExpr.formatToWGSL(e,0)+`) { break; }\r
\r
`;for(let s of this.loopBody.nodes)i+=s.formatToWGSL(e,t+1),!(s instanceof aa)&&!(s instanceof Xo)&&!(s instanceof qo)&&(i+=`;\r
`);return i+=n+`}\r
`,i}}class aa extends Te{constructor(e,t,i){super();a(this,"conditionExpr");a(this,"trueBranch");a(this,"falseBranch");this.conditionExpr=e,this.trueBranch=t,this.falseBranch=i}static parse(e){if(e.peekToken(0).Type==U.IF){e.skipToken(1),e.peekToken(0).Type==U.LEFTSAMLL&&e.skipToken(1);let t=YA.parse(e),i,n=new yi;if(e.peekToken(0).Type==U.RIGHTSAMLL&&e.skipToken(1),e.peekToken(0).Type==U.LEFTBIG?i=yi.parse(e):(i=new yi,e.peekToken(0).Type==U.RETURN?i.addNode(n1.parse(e)):i.addNode(YA.parse(e))),e.peekToken(0).Type==U.ELSE)if(e.skipToken(1),e.peekToken(0).Type==U.LEFTBIG)n=yi.parse(e);else throw"not impl";return new aa(t,i,n)}throw"Error parsing IF branch statement: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);i+=n+"if ("+this.conditionExpr.formatToWGSL(e,0)+`) {\r
`;for(let s of this.trueBranch.nodes)i+=s.formatToWGSL(e,t+1)+`;\r
`;if(this.falseBranch.nodes.length>0){i+=n+`} else {\r
`;for(let s of this.falseBranch.nodes)i+=s.formatToWGSL(e,t+1)+`;\r
`}return i+=n+`}\r
`,i}}class YA extends Te{constructor(){super()}static parse(A){let e=new Array,t=new Array,i=0;for(;A.peekToken(0).Type!=U.EOF;){let n=A.peekToken(0);if(n.Type==U.SEMICOLON||n.Type==U.RIGHTMEDI||n.Type==U.COMMA||n.Type==U.COLON||n.Type==U.RIGHTBIG)break;if(n.isOperation()){if(n.isOperation()){if(n.Type==U.INC||n.Type==U.DEC){let s=n;A.skipToken(1);let o=YA.parse(A);t.push(new Ra(s,void 0,o));continue}else if(e.length>0){if(e[e.length-1].nOperationPriorityLevel<=n.nOperationPriorityLevel)YA.unionOperation(e,t);else if(e.length>0&&e[e.length-1].Literal=="-"){let s=e.pop(),o=t.pop();t.push(new Ra(s,void 0,o))}}e.push(n),A.skipToken(1)}}else if(n.Type==U.LITERAL){t.push(new Qn(n.Literal)),A.skipToken(1);continue}else if(n.Type==U.LEFTSAMLL){i++,e.push(n),A.skipToken(1);continue}else if(n.Type==U.RIGHTSAMLL){if(i<=0)break;for(i--;YA.unionOperation(e,t););if(e[e.length-1].Type==U.LEFTSAMLL){e.pop();let s=new P4;s.addNode(t.pop()),t.push(s)}A.skipToken(1);continue}else if(n.Type==U.IDENT){if(A.peekToken(1).Type==U.INC||A.peekToken(1).Type==U.DEC){let s=A.peekToken(1),o=new Vn(n.Literal);t.push(new Ra(s,o,void 0)),A.skipToken(2);continue}else if(A.peekToken(1).Type==U.LEFTSAMLL){t.push(Ko.parse(A));continue}else if(A.peekToken(1).Type==U.DOT){t.push(ic.parse(A));continue}else if(A.peekToken(1).Type==U.LEFTMEDI){t.push(Jo.parse(A));continue}t.push(new Vn(n.Literal)),A.skipToken(1);continue}else{if(n.isBuiltinType()&&A.peekToken(1).Type==U.LEFTSAMLL){t.push(Ko.parse(A));continue}if(n.isAssignOperation()){let s=n;A.skipToken(1);let o=t.pop(),u=YA.parse(A);t.push(new Os(s,o,u));continue}if(n.Type==U.LEFTBIG&&(A.peekToken(1).Type==U.LITERAL||A.peekToken(1).Type==U.SUB&&A.peekToken(2).Type==U.LITERAL)){t.push(rc.parse(A));continue}if(n.Type==U.QUEMARK){e.length>0&&e[e.length-1].nOperationPriorityLevel<=n.nOperationPriorityLevel&&YA.unionOperation(e,t),A.skipToken(1);let s=t.pop(),o=YA.parse(A);A.peekToken(0).Type==U.COLON&&A.skipToken(1);let u=YA.parse(A);if(t.push(new F4(s,o,u)),A.peekToken(-1).Type==U.SEMICOLON)break;continue}if(n.Type==U.LEFTMEDI){A.skipToken(1);let s=YA.parse(A);A.peekToken(0).Type==U.RIGHTMEDI&&A.skipToken(1);let o=t.pop();t.push(new Jo(o,s));continue}throw"An unexpected character"}}for(;e.length>0&&YA.unionOperation(e,t););if(e.length<=0&&t.length==1){let n=new YA;return n.addNode(t.pop()),n}throw"Error parsing expression: Unexpected character("+A.peekToken(0).Literal+")"}formatToWGSL(A,e){return this.nodes[0].formatToWGSL(A,e)}static unionOperation(A,e){if(A.length<0||e.length<2){if(A.length>0&&A[A.length-1].Literal=="-"){let t=A.pop(),i=e.pop();return e.push(new Ra(t,void 0,i)),!0}return!1}if(A[A.length-1].isOperation()){let t=e.pop(),i=A.pop(),n=e.pop();return i.Type==U.DOT?e.push(new ic(n,t)):e.push(new Os(i,n,t)),!0}return!1}}class P4 extends Te{constructor(){super()}formatToWGSL(A,e){return(e<=0?"":"    ".repeat(e))+"("+this.nodes[0].formatToWGSL(A,0)+")"}}class Vn extends Te{constructor(e){super();a(this,"name");this.name=e}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+e.findIdentifier(this.name)}}class Qn extends Te{constructor(e){super();a(this,"value");this.value=e}static parse(e){let t=e.peekToken(0);if(t.Type==U.SUB&&e.peekToken(1).Type==U.LITERAL){let i=new Qn("-"+e.peekToken(1).Literal);return e.skipToken(2),i}else if(t.Type==U.LITERAL){let i=new Qn(t.Literal);return e.skipToken(1),i}throw"Error parsing literal constants: Unexpected characters("+t.Literal+")"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.value}}class rc extends Qn{constructor(e){super("");a(this,"arrayValue");this.arrayValue=e}static parse(e){if(e.peekToken(0).Type==U.LEFTBIG&&e.peekToken(1).Type==U.LITERAL||e.peekToken(0).Type==U.LEFTBIG&&e.peekToken(1).Type==U.SUB&&e.peekToken(2).Type==U.LITERAL){e.skipToken(1);let t=[];for(;e.peekToken(0).Type!=U.RIGHTBIG;){if(e.peekToken(0).Type==U.LEFTSAMLL){t.push(rc.parse(e));continue}if(t.push(Qn.parse(e)),e.peekToken(0).Type==U.COMMA){e.skipToken(1);continue}else if(e.peekToken(0).Type==U.RIGHTBIG){e.skipToken(1);break}else throw"Error parsing array constants: Unexpected characters"}return new rc(t)}throw"Error parsing array constants: Unexpected characters"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);this.arrayValue[0].value.includes(".")?i+=n+"array<f32, "+this.arrayValue.length.toString()+">(":i+=n+"array<i32, "+this.arrayValue.length.toString()+">(";for(let s=0;s<this.arrayValue.length;s++)s>0&&(i+=", "),i+=this.arrayValue[s].formatToWGSL(e,0);return i+=")",i}}class u0 extends Te{constructor(){super()}static parse(A){if(A.peekToken(0).Type==U.CONTINUE&&A.peekToken(1).Type==U.SEMICOLON)return A.skipToken(2),new u0;throw"Error parsing continue: Unexpected character"}formatToWGSL(A,e){let t="",i=e<=0?"":"    ".repeat(e);return t+=i+"continue",t}}class n1 extends Te{constructor(e){super();a(this,"value");this.value=e}static parse(e){if(e.peekToken(0).Type==U.RETURN){e.skipToken(1);let t=YA.parse(e);return e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1),new n1(t)}throw"Error parsing return expression: Unexpected character"}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);return i+=n+"return "+this.value.formatToWGSL(e,0),i}}class Ra extends Te{constructor(e,t,i){super();a(this,"op");a(this,"leftValue");a(this,"rightValue");this.op=e,this.leftValue=t,this.rightValue=i}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);if(this.op.Literal=="++"||this.op.Literal=="--")if(this.leftValue!=null){let s=this.leftValue.formatToWGSL(e,0);i+=n+s+" = "+s+" "+this.op.Literal[0]+" 1"}else{let s=this.rightValue.formatToWGSL(e,0);i+=n+s+" = "+s+" "+this.op.Literal[0]+" 1"}else this.leftValue!=null?i+=n+this.leftValue.formatToWGSL(e,0)+this.op.Literal:i+=n+this.op.Literal+this.rightValue.formatToWGSL(e,0);return i}}class Os extends Te{constructor(e,t,i){super();a(this,"op");a(this,"leftValue");a(this,"rightValue");this.op=e,this.leftValue=t,this.rightValue=i}formatToWGSL(e,t){let i="",n=t<=0?"":"    ".repeat(t);return i+=n+this.leftValue.formatToWGSL(e,0)+" "+this.op.Literal+" "+this.rightValue.formatToWGSL(e,0),i}}class F4 extends Te{constructor(e,t,i){super();a(this,"condition");a(this,"expression1");a(this,"expression2");this.condition=e,this.expression1=t,this.expression2=i}static parse(e){throw"Error parsing ternary operation expression: Unexpected character"}formatToWGSL(e,t){return""}}class ic extends Te{constructor(e,t){super();a(this,"leftValue");a(this,"rightValue");this.leftValue=e,this.rightValue=t}static parse(e){if(e.peekToken(0).Type==U.IDENT&&e.peekToken(1).Type==U.DOT&&e.peekToken(2).Type==U.IDENT){let t=new Vn(e.peekToken(0).Literal),i=new Vn(e.peekToken(2).Literal);return e.skipToken(3),new ic(t,i)}throw"Error parsing selection expression: Unexpected character"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"."+this.rightValue.formatToWGSL(e,0)}}class Jo extends Te{constructor(e,t){super();a(this,"leftValue");a(this,"indexValue");this.leftValue=e,this.indexValue=t}static parse(e){if(e.peekToken(0).Type==U.IDENT&&e.peekToken(1).Type==U.LEFTMEDI){let t=new Vn(e.peekToken(0).Literal);e.skipToken(2);let i=YA.parse(e);e.peekToken(0).Type==U.RIGHTMEDI&&e.skipToken(1);let n=new Jo(t,i);for(;e.peekToken(0).Type==U.LEFTMEDI;)e.skipToken(1),i=YA.parse(e),e.peekToken(0).Type==U.RIGHTMEDI&&e.skipToken(1),n=new Jo(n,i);return n}throw"Error parsing index expression: Unexpected character"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"["+this.indexValue.formatToWGSL(e,0)+"]"}}class yi extends Te{constructor(){super()}static parse(A){if(A.peekToken(0).Type==U.LEFTBIG){A.skipToken(1);let e=new yi;for(let t=1;t>0&&A.peekToken(0).Type!=U.EOF;){let i=A.peekToken(0);if(i.Type==U.LEFTBIG){t++,A.skipToken(1);continue}if(i.Type==U.RIGHTBIG){t--,A.skipToken(1);continue}if(i.Type==U.SEMICOLON){A.skipToken(1);continue}if(i.isDataType()&&A.peekToken(1).Type==U.IDENT){e.addNode(Ne.parse(A));continue}if(i.Type==U.CONST&&A.peekToken(1).isDataType()&&A.peekToken(2).Type==U.IDENT){e.addNode(Ne.parse(A));continue}else if(i.Type==U.IDENT&&A.peekToken(1).Type==U.ASSIGN){e.addNode(YA.parse(A)),A.peekToken(0).Type==U.SEMICOLON&&A.skipToken(1);continue}else if(i.Type==U.IDENT&&A.peekToken(1).Type==U.LEFTMEDI){let n=Jo.parse(A);if(A.peekToken(0).Type==U.ASSIGN){let s=A.peekToken(0);A.skipToken(1);let o=YA.parse(A);A.peekToken(0).Type==U.RIGHTMEDI&&A.skipToken(1),e.addNode(new Os(s,n,o));continue}e.addNode(n);continue}else if(i.Type==U.IDENT&&A.peekToken(1).Type==U.DOT){let n=YA.parse(A);e.addNode(n);continue}else if(i.Type==U.IDENT&&A.peekToken(1).isAssignOperation()){let n=A.peekToken(1),s=new Vn(i.Literal);A.skipToken(2);let o=YA.parse(A);A.peekToken(0).Type==U.SEMICOLON&&A.skipToken(1),e.addNode(new Os(n,s,o));continue}else if(i.Type==U.IDENT&&(A.peekToken(1).Type==U.INC||A.peekToken(1).Type==U.DEC)&&A.peekToken(2).Type==U.SEMICOLON){let n=A.peekToken(1);e.addNode(new Ra(n,new Vn(i.Literal),void 0)),A.skipToken(3);continue}else if(i.Type==U.RETURN){e.addNode(n1.parse(A));continue}else if(i.Type==U.CONTINUE){e.addNode(u0.parse(A));continue}else if(i.Type==U.WHILE){e.addNode(Xo.parse(A));continue}else if(i.Type==U.FOR){e.addNode(qo.parse(A));continue}else if(i.Type==U.IF){e.addNode(aa.parse(A));continue}else if(i.Type==U.IDENT&&A.peekToken(1).Type==U.LEFTSAMLL){e.addNode(Ko.parse(A)),A.peekToken(0).Type==U.SEMICOLON&&A.skipToken(0);continue}throw"Error parsing block: Unexpected symbol("+i.Literal+")"}return e}throw"Error parsing block: Unexpected symbol"}}class l0 extends Te{constructor(e,t){super();a(this,"type");a(this,"qualifier");this.type=t,this.qualifier=e}static parse(e){if(e.peekToken(0).Type==U.PRECISION&&e.peekToken(1).Type==U.IDENT&&e.peekToken(2).isBuiltinType()){let t=new l0(e.peekToken(1).Literal,e.peekToken(2).Literal);return e.skipToken(3),e.peekToken(0).Type==U.SEMICOLON&&e.skipToken(1),t}throw"Error parsing precision qualifier: Unexpected character"}formatToWGSL(e,t){return""}}class s1 extends Te{constructor(){super();a(this,"scope","");a(this,"qualifier",new Map)}addQualifier(e,t=""){this.qualifier.set(e,t)}static parse(e){if(e.peekToken(0).Type==U.LAYOUT&&e.peekToken(1).Type==U.LEFTSAMLL){let t=new s1;e.skipToken(2);do if(e.peekToken(0).Type==U.IDENT){if(e.peekToken(1).Type==U.ASSIGN&&e.peekToken(2).Type==U.LITERAL){let i=e.peekToken(0).Literal,n=e.peekToken(2).Literal;if(t.addQualifier(i,n),e.skipToken(3),e.peekToken(0).Type==U.COMMA){e.skipToken(1);continue}let s=e.peekToken(0);s.Line=0}else if(e.peekToken(1).Type==U.RIGHTSAMLL){let i=e.peekToken(0).Literal;t.addQualifier(i,""),e.skipToken(1);break}else if(e.peekToken(1).Type==U.COMMA){let i=e.peekToken(0).Literal;t.addQualifier(i,""),e.skipToken(2);continue}}while(e.peekToken(0).Type!=U.RIGHTSAMLL);if(e.peekToken(0).Type==U.RIGHTSAMLL&&e.skipToken(1),t.scope=e.peekToken(0).Literal,e.skipToken(1),e.peekToken(0).Type==U.SEMICOLON)return e.skipToken(1),t;if(e.peekToken(0).isBuiltinType()&&e.peekToken(1).Type==U.IDENT&&e.peekToken(2).Type==U.SEMICOLON){let i=new Ne(e.peekToken(0).Literal,e.peekToken(1).Literal);return t.addNode(i),e.skipToken(3),t}else if(e.peekToken(0).Type==U.IDENT&&e.peekToken(1).Type==U.LEFTBIG){let i=Un.parse(e);return t.addNode(i),e.peekToken(0).Type==U.IDENT&&e.peekToken(1).Type==U.SEMICOLON&&(i.addNode(new Ne(i.name,e.peekToken(0).Literal)),e.skipToken(2)),t}else throw"Error parsing layout qualifier type: Unexpected symbol("+e.peekToken(0).Literal+")"}throw"Error parsing layout qualifier: Unexpected symbol"}formatToWGSL(e,t){let i="";if(this.qualifier.size==1&&this.qualifier.has("location"))i+="@location("+this.qualifier.get("location")+") ";else if(this.qualifier.size==2&&this.qualifier.has("set")&&this.qualifier.has("binding"))i+="@group("+this.qualifier.get("set")+") @binding("+this.qualifier.get("binding")+") ";else if(this.qualifier.size>=1&&this.qualifier.has("binding"))i+="@group(0) @binding("+this.qualifier.get("binding")+") ";else if(this.qualifier.size==1&&this.qualifier.has("push_constant"))i+="@push_constant ";else if(this.qualifier.size>=1&&this.qualifier.has("local_size_x"))i+="@workgroup_size(",i+=this.qualifier.get("local_size_x")+", ",i+=this.qualifier.has("local_size_y")?this.qualifier.get("local_size_y")+", ":"1, ",i+=this.qualifier.has("local_size_z")?this.qualifier.get("local_size_z")+"":"1",i+=")";else if(this.nodes.length<=0)return"";let n=this.nodes[0];if(n instanceof Ne){switch(n.type){case"sampler":case"texture2D":i+="var ";break;default:this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> ";break}e.addIdentifier(n.name,n.name),i+=n.name+": "+Br(n.type)+`;\r
`}else if(n instanceof Un){if(this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> ",n.nodes.length<=0){let s="unif"+e.layoutUniformCount.toString();for(;e.hasIdentifier(s);)e.layoutUniformCount++,s="unif"+e.layoutUniformCount.toString();for(let o of n.fields)e.addIdentifier(o.name,s+"."+o.name);i+=s+": "+n.name+`;\r
`,e.layoutUniformCount++}else{let s=n.nodes[0];i+=s.name+": "+s.type+`;\r
`}return i}return i}}function Br(r){switch(r){case"int":return"i32";case"int[]":return"array<i32>";case"uint":return"u32";case"uint[]":return"array<u32>";case"float":return"f32";case"float[]":return"array<f32>";case"vec2":return"vec2<f32>";case"vec3":return"vec3<f32>";case"vec4":return"vec4<f32>";case"vec2[]":return"array<vec2<f32>>";case"vec3[]":return"array<vec3<f32>>";case"vec4[]":return"array<vec4<f32>>";case"ivec2":return"vec2<i32>";case"ivec3":return"vec3<i32>";case"ivec4":return"vec4<i32>";case"ivec2[]":return"array<vec2<i32>>";case"ivec3[]":return"array<vec3<i32>>";case"ivec4[]":return"array<vec4<i32>>";case"mat2":return"mat2x2<f32>";case"mat2x2":return"mat2x2<f32>";case"mat2x3":return"mat2x3<f32>";case"mat2x4":return"mat2x4<f32>";case"mat2[]":return"array<mat2x2<f32>>";case"mat2x2[]":return"array<mat2x2<f32>>";case"mat2x3[]":return"array<mat2x3<f32>>";case"mat2x4[]":return"array<mat2x4<f32>>";case"mat3":return"mat3x3<f32>";case"mat3x2":return"mat3x2<f32>";case"mat3x3":return"mat3x3<f32>";case"mat3x4":return"mat3x4<f32>";case"mat3[]":return"array<mat3x3<f32>>";case"mat3x2[]":return"array<mat3x2<f32>>";case"mat3x3[]":return"array<mat3x3<f32>>";case"mat3x4[]":return"array<mat3x4<f32>>";case"mat4":return"mat4x4<f32>";case"mat4x2":return"mat4x2<f32>";case"mat4x3":return"mat4x3<f32>";case"mat4x4":return"mat4x4<f32>";case"mat4[]":return"array<mat4x4<f32>>";case"mat4x2[]":return"array<mat4x2<f32>>";case"mat4x3[]":return"array<mat4x3<f32>>";case"mat4x4[]":return"array<mat4x4<f32>>";case"texture2D":return"texture_2d<f32>"}return r}class N4{constructor(A){a(this,"_lexer");a(this,"_rootNode");this._lexer=A,this._rootNode=new Te,this.parse()}get lexer(){return this._lexer}parse(){for(;this.peekToken(0).Type!==U.EOF;){if(this.peekToken(0).Type==U.SEMICOLON){this.skipToken(1);continue}let A=this.parseStatement();A!==null&&this._rootNode.addNode(A)}}parseStatement(){let A=this.peekToken();if(A.Type==U.LAYOUT&&this.peekToken(1).Type==U.LEFTSAMLL)return s1.parse(this._lexer);if(A.Type==U.STRUCT)return this.skipToken(1),Un.parse(this._lexer);if((A.isBuiltinType()||A.Type==U.VOID)&&this.peekToken(1).Type==U.IDENT&&this.peekToken(2).Type==U.LEFTSAMLL)return o0.parse(this._lexer);if(A.Type==U.CONST&&this.peekToken(1).isDataType())return Ne.parse(this._lexer);if(A.isDataType()&&this.peekToken(1).Type==U.IDENT)return Ne.parse(this._lexer);if(A.Type==U.OUT&&this.peekToken(1).isDataType()&&this.peekToken(2).Type==U.IDENT)return Ne.parse(this._lexer);if(A.Type==U.PRECISION)return l0.parse(this._lexer);throw"Error parsing statement: Unexpected character"}skipToken(A){this._lexer.skipToken(A)}peekToken(A=0){return this._lexer.peekToken(A)}getNextToken(){return this._lexer.GetNextToken()}get ASTRoot(){return this._rootNode}}class Kd{static convertGLSL(A){var e=new M4(A),t=new x4(e),i=new N4(t),n=new R4(i);return n.generateWGSL()}}a(Kd,"VertexShader","VertexShader"),a(Kd,"FragmentShader","FragmentShader");class Eg{constructor(){a(this,"setID",0);a(this,"bindingID",0);a(this,"name","");a(this,"type","")}}class Cg{constructor(){a(this,"name","");a(this,"type","");a(this,"locationID",0);a(this,"builtinName","")}isBuiltinAttribute(){return this.builtinName!=""}}class L4{constructor(){a(this,"uniformInfo",[]);a(this,"inputAttribute",[]);a(this,"outputAttribute",[]);a(this,"sourceCode","")}}var li=(r=>(r[r.vertex=0]="vertex",r[r.fragment=1]="fragment",r[r.computer=2]="computer",r))(li||{});class U4{constructor(){a(this,"blendMode",ee.NONE);a(this,"depthCompare",en.less);a(this,"depthWriteEnabled",!0);a(this,"frontFace","ccw");a(this,"cullMode",ar.back);a(this,"topology",r1.triangle_list);a(this,"depthBias",10);a(this,"useLight",!1);a(this,"useProbe",!1);a(this,"acceptGI",!1);a(this,"acceptShadow",!1);a(this,"castShadow",!1);a(this,"castReflection",!1);a(this,"receiveEnv",!1);a(this,"renderLayer",1e3);a(this,"renderOrder",2e3);a(this,"unclippedDepth",!1);a(this,"transparent",!1);a(this,"multisample",0);a(this,"label");a(this,"useZ",!0);a(this,"splitTexture",!1);a(this,"alphaCutoff");a(this,"useFragDepth",!1);a(this,"writeMasks",[])}setFromMapValues(A){A.has("blendMode")&&(this.blendMode=this.convertBlendMode(A.get("blendMode"))),A.has("depthCompare")&&(this.depthCompare=A.get("depthCompare")),A.has("depthWriteEnabled")&&(this.depthWriteEnabled=A.get("depthWriteEnabled")),A.has("frontFace")&&(this.frontFace=A.get("frontFace")),A.has("cullMode")&&(this.cullMode=A.get("cullMode")),A.has("topology")&&(this.topology=A.get("topology")),A.has("depthBias")&&(this.depthBias=A.get("depthBias")),A.has("useLight")&&(this.useLight=A.get("useLight")),A.has("useProbe")&&(this.useProbe=A.get("useProbe")),A.has("acceptGI")&&(this.acceptGI=A.get("acceptGI")),A.has("acceptShadow")&&(this.acceptShadow=A.get("acceptShadow")),A.has("castShadow")&&(this.castShadow=A.get("castShadow")),A.has("receiveEnv")&&(this.receiveEnv=A.get("receiveEnv")),A.has("renderLayer")&&(this.renderLayer=A.get("renderLayer")),A.has("renderOrder")&&(this.renderOrder=A.get("renderOrder")),A.has("unclippedDepth")&&(this.unclippedDepth=A.get("unclippedDepth")),A.has("multisample")&&(this.multisample=A.get("multisample")),A.has("label")&&(this.label=A.get("label")),A.has("useZ")&&(this.useZ=A.get("useZ"))}convertBlendMode(A){switch(A){case"ABOVE":return ee.ABOVE;case"ALPHA":return ee.ALPHA;case"NORMAL":return ee.NORMAL;case"ADD":return ee.ADD;case"BELOW":return ee.BELOW;case"ERASE":return ee.ERASE;case"MUL":return ee.MUL;case"SCREEN":return ee.SCREEN;case"DIVD":return ee.DIVD;case"SOFT_ADD":return ee.SOFT_ADD}return ee.NONE}}class k4 extends Kn{constructor(){super();a(this,"uniformNodes",[]);a(this,"_onChange",!0);this.bufferType=xi.MaterialDataUniformGPUBuffer}initDataUniform(e){this.uniformNodes=e;let t=0;for(const i in e){const n=e[i];n||console.error(i,"is empty"),t+=n.size*4}t=Math.floor(t/256+1)*256,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,t/4,null,"MaterialDataUniformGPUBuffer");for(const i in e){const n=e[i];n||console.error(i,"is empty");let s=this.memory.allocation_node(n.size*4);n.memoryInfo=s,n.bindOnChange=()=>this.onChange()}}onChange(){this._onChange=!0}apply(){if(this.uniformNodes.length!=0&&this._onChange){for(const e in this.uniformNodes)this.uniformNodes[e].update();super.apply(),this._onChange=!1}}}class di{static init(){this.renderShaderModulePool=new Map,this.renderShader=new Map}}a(di,"renderShaderModulePool"),a(di,"renderShader");const Lc=class Lc{constructor(){a(this,"reference")}static getInstance(){return this._ins||(this._ins=new Lc),this._ins}attached(A,e){this.reference||(this.reference=new Map);let t=this.reference.get(A);t||(t=new Map),t.set(e,A),this.reference.set(A,t)}detached(A,e){let t=this.reference.get(A);t&&t.delete(e)}hasReference(A){let e=this.reference.get(A);return e?e.size>0:!1}getReferenceCount(A){let e=this.reference.get(A);return e?e.size:0}getReference(A){return this.reference.get(A)||null}};a(Lc,"_ins");let te=Lc;class qd{static getSharePipeline(A){return this.pipelineMap.get(A)||null}static setSharePipeline(A,e){this.pipelineMap.set(A,e)}}a(qd,"pipelineMap",new Map);class ot extends Y3{constructor(e,t){super();a(this,"passType",QA.COLOR);a(this,"useRz",!1);a(this,"vsName");a(this,"fsName");a(this,"shaderState");a(this,"textures");a(this,"pipeline");a(this,"bindGroupLayouts");a(this,"envMap");a(this,"prefilterMap");a(this,"_sourceVS");a(this,"_sourceFS");a(this,"_destVS");a(this,"_destFS");a(this,"_vsShaderModule");a(this,"_fsShaderModule");a(this,"_textureGroup",-1);a(this,"_textureChange",!1);a(this,"_groupsShaderReflectionVarInfos");a(this,"outBufferMask");a(this,"_cacheEntries");this.vsName=e.toLowerCase(),this.fsName=t.toLowerCase(),this.vsName in CA||console.error("Shader Not Register, Please Register Shader!",this.vsName),this.fsName in CA||console.error("Shader Not Register, Please Register Shader!",this.fsName),CA[this.vsName]&&(this._sourceVS=CA[this.vsName]),CA[this.fsName]&&(this._sourceFS=CA[this.fsName]),this.textures={},this.bindGroups=[],this.shaderState=new U4,this.materialDataUniformBuffer=new k4,this.materialDataUniformBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this._bufferDic.set("global",this.materialDataUniformBuffer),this._bufferDic.set("materialUniform",this.materialDataUniformBuffer)}get renderOrder(){return this.shaderState.renderOrder}set renderOrder(e){this.shaderState.renderOrder!=e&&(this._valueChange=!0),this.shaderState.renderOrder=e}get doubleSide(){return this.shaderState.cullMode==ar.none}set doubleSide(e){let t=e?ar.none:this.cullMode;this.shaderState.cullMode!=t&&(this._valueChange=!0),this.shaderState.cullMode=t}get depthWriteEnabled(){return this.shaderState.depthWriteEnabled}set depthWriteEnabled(e){this.shaderState.depthWriteEnabled!=e&&(this._valueChange=!0),this.shaderState.depthWriteEnabled=e}get cullMode(){return this.shaderState.cullMode}set cullMode(e){this.shaderState.cullMode!=e&&(this._valueChange=!0),this.shaderState.cullMode=e}get frontFace(){return this.shaderState.frontFace}set frontFace(e){this.shaderState.frontFace!=e&&(this._valueChange=!0),this.shaderState.frontFace=e}get depthBias(){return this.shaderState.depthBias}set depthBias(e){this.shaderState.depthBias!=e&&(this._valueChange=!0),this.shaderState.depthBias=e}get topology(){return this.shaderState.topology}set topology(e){this.shaderState.topology!=e&&(this._valueChange=!0),this.shaderState.topology=e}get blendMode(){return this.shaderState.blendMode}set blendMode(e){this.shaderState.blendMode!=e&&(this._valueChange=!0,e!=ee.NORMAL&&e!=ee.NONE&&(this.renderOrder=3e3)),this.shaderState.blendMode=e}get depthCompare(){return this.shaderState.depthCompare}set depthCompare(e){this.shaderState.depthCompare!=e&&(this._valueChange=!0),this.shaderState.depthCompare=e}setShaderEntry(e="",t=""){this.vsEntryPoint=e,this.fsEntryPoint=t}setUniform(e,t){super.setUniform(e,t),this.materialDataUniformBuffer.onChange()}setTexture(e,t){t&&this.textures[e]!=t&&(this.textures[e]&&this.textures[e].unBindStateChange(this),this._textureChange=!0,this.textures[e]=t,e=="envMap"?this.envMap=t:e=="prefilterMap"&&(this.prefilterMap=t),t.bindStateChange(()=>{this._textureChange=!0},this))}get baseColor(){return this.getUniform("baseColor")}set baseColor(e){this.setUniform("baseColor",e)}getTexture(e){return this.textures[e]}genRenderPipeline(e,t){let i=this.createGroupLayouts();this.createPipeline(e,t,i)}reBuild(e,t){this.compileShader(li.vertex,this._destVS,t),this.compileShader(li.fragment,this._destFS,t),this.genRenderPipeline(e,t)}apply(e,t,i){this.materialDataUniformBuffer.apply(),this._textureChange&&this._textureGroup!=-1&&(this._textureChange=!1,this.genGroups(this._textureGroup,this.shaderReflection.groups,!0)),this._valueChange&&(this._shaderChange&&(this.preCompile(e),this._shaderChange=!1),this.shaderVariant=tr.genRenderShaderVariant(this),this.reBuild(e,t),this._valueChange=!1,i&&i())}preCompile(e){this.preDefine(e),this.preCompileShader(li.vertex,this._sourceVS.concat()),this.preCompileShader(li.fragment,this._sourceFS.concat()),this.genReflection()}applyPostDefine(e,t){return t.renderTargetTextures.length>1?(this.defineValue.USE_WORLDPOS=!0,this.defineValue.USEGBUFFER=!0):(this.defineValue.USE_WORLDPOS=!1,this.defineValue.USEGBUFFER=!1),ps.parse(e,this.defineValue)}setBindGroup(e,t){this.bindGroups[e]=t}checkBuffer(e,t){}preCompileShader(e,t,i){let n=t;if(n.indexOf("version ")!=-1){var s=Kd.convertGLSL(n);n=s.sourceCode}for(const o in this.constValues)if(Object.prototype.hasOwnProperty.call(this.constValues,o)){const u=this.constValues[o];n=n.replaceAll(`&${o}`,u.toString())}switch(e){case li.vertex:this._destVS=n;break;case li.fragment:this._destFS=n;break}}compileShader(e,t,i){let n=t;n=this.applyPostDefine(n,i);let s=t;for(let u in this.defineValue)s+=`${u}=${this.defineValue[u]},`;let o=di.renderShaderModulePool.get(s);switch(o||(n=this.applyPostDefine(n,i),o=iA.device.createShaderModule({label:e==li.vertex?this.vsName:this.fsName,code:n}),o.getCompilationInfo().then(u=>{u.messages.length>0&&(console.log(n),console.log(u))}),di.renderShaderModulePool.set(s,o)),e){case li.vertex:this._vsShaderModule=o,this._destVS=n;break;case li.fragment:this._fsShaderModule=o,this._destFS=n;break}}getGroupLayout(e,t){let i=[];for(let n=0;n<t.length;n++){const s=t[n];if(s)if(s.varType=="uniform"){this._bufferDic.has(s.varName)||console.error(`not set ${s.varName} buffer`);let o=this._bufferDic.get(s.varName).visibility,u={binding:s.binding,visibility:o,buffer:{type:"uniform"}};i.push(u)}else if(s.varType=="storage-read"){this._bufferDic.has(s.varName)||console.error(`not set ${s.varName} buffer`);let o=this._bufferDic.get(s.varName).visibility,u={binding:s.binding,visibility:o,buffer:{type:"read-only-storage"}};i.push(u)}else if(s.varType=="var")switch(s.dataType){case"sampler":{let o=s.varName.replace("Sampler",""),u=this.textures[o]?this.textures[o]:K.res.redTexture,l={binding:s.binding,visibility:u.visibility,sampler:u.samplerBindingLayout};i.push(l),this._textureGroup=e}break;case"sampler_comparison":{let o=s.varName.replace("Sampler",""),u=this.textures[o]?this.textures[o]:K.res.redTexture,l={binding:s.binding,visibility:u.visibility,sampler:u.sampler_comparisonBindingLayout};i.push(l),this._textureGroup=e}break;case"texture_2d<f32>":case"texture_2d_array<f32>":case"texture_cube<f32>":case"texture_depth_2d":case"texture_depth_2d_array":case"texture_depth_cube":case"texture_depth_cube_array":{let o=this.textures[s.varName]?this.textures[s.varName]:K.res.redTexture,u={binding:s.binding,visibility:o.visibility,texture:o.textureBindingLayout};i.push(u),this._textureGroup=e,te.getInstance().attached(o,this)}break;case"texture_external":{let o=this.textures[s.varName]?this.textures[s.varName]:K.res.redTexture,u={binding:s.binding,visibility:o.visibility,externalTexture:{}};i.push(u),this._textureGroup=e,te.getInstance().attached(o,this)}break;default:{let o=this.textures[s.varName]?this.textures[s.varName]:K.res.redTexture,u={binding:s.binding,visibility:o.visibility,texture:o.textureBindingLayout};i.push(u),this._textureGroup=e,te.getInstance().attached(o,this)}break}else{debugger;console.error("bind group can't empty")}}return i}genGroups(e,t,i=!1){if(!this.bindGroups[e]||i){const n=t[e];let s=[];for(let u=0;u<n.length;u++){const l=n[u];if(l){if(l.varType=="uniform"){let c=this._bufferDic.get(l.varName);if(c){if(c.bufferType==xi.MaterialDataUniformGPUBuffer){let d=[];for(let f=0;f<l.dataFields.length;f++){const p=l.dataFields[f];this.uniforms[p.name]||console.error(`shader-${this.vsName}:${this.fsName} ${p.name}is empty`),d.push(this.uniforms[p.name])}this.materialDataUniformBuffer.initDataUniform(d)}let h={binding:l.binding,resource:{buffer:c.buffer,offset:0,size:c.memory.shareDataBuffer.byteLength}};s.push(h),this.checkBuffer(l.varName,c)}else console.error(`shader${this.vsName}-${this.fsName}`,`buffer ${l.varName} is missing!`)}else if(l.varType=="storage-read"){let c=this._bufferDic.get(l.varName);if(c){let h={binding:l.binding,resource:{buffer:c.buffer,offset:0,size:c.memory.shareDataBuffer.byteLength}};s.push(h),this.checkBuffer(l.varName,c)}else console.error(`buffer ${l.varName} is missing!`)}else if(l.varType=="var")if(l.dataType=="sampler"){let c=l.varName.replace("Sampler",""),h=this.textures[c];if(h||(h=K.res.blackTexture,this.setTexture(c,h)),h){let d={binding:l.binding,resource:h.gpuSampler};s.push(d)}else console.error(`shader${this.vsName}-${this.fsName}`,`texture ${l.varName} is missing! `)}else if(l.dataType=="sampler_comparison"){let c=l.varName.replace("Sampler",""),h=this.textures[c];if(h){let d={binding:l.binding,resource:h.gpuSampler_comparison};s.push(d)}else console.error(`shader${this.vsName}-${this.fsName}`,`texture ${l.varName} is missing! `)}else{let c=this.textures[l.varName];if(c||(c=K.res.whiteTexture,this.setTexture(l.varName,c)),c){let h={binding:l.binding,resource:c.getGPUView()};s.push(h)}else console.error(`shader${this.vsName}-${this.fsName}`,`texture ${l.varName} is missing! `)}}}let o=iA.device.createBindGroup({layout:this.bindGroupLayouts[e],entries:s});this.bindGroups[e]=o}}createPipeline(e,t,i){let n=e,s=this.shaderState,o=[];for(const c of t.renderTargetTextures)o.push({format:c.format});for(let c=0;c<o.length;c++){const h=o[c];s.writeMasks&&s.writeMasks.length>0&&(h.writeMask=s.writeMasks[c])}if(t.outColor!=-1){let c=o[t.outColor];s.blendMode!=ee.NONE?c.blend=T4.getBlend(s.blendMode):delete c.blend}let u={label:this.vsName+"|"+this.fsName,layout:i,primitive:{topology:s.topology,cullMode:s.cullMode,frontFace:s.frontFace},vertex:void 0};this.vsEntryPoint!=""&&(u.vertex={module:this._vsShaderModule,entryPoint:this.vsEntryPoint,buffers:n.vertexBuffer.vertexBufferLayouts}),this.fsEntryPoint!=""&&(u.fragment={module:this._fsShaderModule,entryPoint:this.fsEntryPoint,targets:o}),s.multisample>0&&(u.multisample={count:s.multisample}),(t.zPreTexture||t.depthTexture)&&(s.blendMode!=ee.NONE,K.setting.render.zPrePass&&t.zPreTexture&&s.useZ?u.depthStencil={depthWriteEnabled:!1,depthCompare:en.less,format:t.zPreTexture.format}:u.depthStencil={depthWriteEnabled:s.depthWriteEnabled,depthCompare:s.depthCompare,format:t.depthTexture.format});let l=qd.getSharePipeline(this.shaderVariant);l?this.pipeline=l:(this.pipeline=sA.createPipeline(u),qd.setSharePipeline(this.shaderVariant,this.pipeline))}createGroupLayouts(){this._groupsShaderReflectionVarInfos=[];let e=this.shaderReflection;this.bindGroupLayouts=[s0.getGlobalDataBindGroupLayout()];for(let i=1;i<e.groups.length;i++){let n=e.groups[i];if(n){let s=this.getGroupLayout(i,n);this._groupsShaderReflectionVarInfos[i]=n;let o=iA.device.createBindGroupLayout({entries:s,label:`vs${this.vsName} fs${this.fsName} ${n.length}`});this.bindGroupLayouts[i]=o}else console.error("can't set empty group!",i)}let t=iA.device.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts});return this._groupsShaderReflectionVarInfos[0],this._groupsShaderReflectionVarInfos[1]&&this.genGroups(1,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[2]&&this.genGroups(2,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[3]&&this.genGroups(3,this._groupsShaderReflectionVarInfos),t}preDefine(e){let t=e.hasAttribute(pA.TEXCOORD_1),i=e.hasAttribute(pA.joints0),n=e.hasAttribute(pA.a_morphPositions_0),s=e.hasAttribute(pA.TANGENT),o=e.hasAttribute(pA.color),u=this.shaderState.acceptGI,l=this.shaderState.useLight;t&&(this.defineValue.USE_SECONDUV=!0),i&&n?this.defineValue.USE_METAHUMAN=!0:(this.defineValue.USE_SKELETON=i,this.defineValue.USE_MORPHTARGETS=n),"USE_TANGENT"in this.defineValue||(this.defineValue.USE_TANGENT=s),this.defineValue.USE_GI=u,this.defineValue.USE_SHADOWMAPING=this.shaderState.acceptShadow,this.defineValue.USE_LIGHT=l,this.defineValue.USE_VERTXCOLOR=o,K.setting.pick.mode=="pixel"&&(this.defineValue.USE_WORLDPOS=!0),K.setting.gi.enable?this.defineValue.USEGI=!0:this.defineValue.USEGI=!1,K.setting.render.debug&&(this.defineValue.USE_DEBUG=!0,this.defineValue.DEBUG_CLUSTER=!0),this.shaderState.useLight?this.defineValue.USE_LIGHT=!0:this.defineValue.USE_LIGHT=!1,K.setting.render.useLogDepth?(this.defineValue.USE_LOGDEPTH=!0,this.shaderState.useFragDepth=!0):this.defineValue.USE_LOGDEPTH=!1,this.shaderState.useFragDepth?this.defineValue.USE_OUTDEPTH=!0:this.defineValue.USE_OUTDEPTH=!1,this.defineValue.USE_PCF_SHADOW=K.setting.shadow.type=="PCF",this.defineValue.USE_HARD_SHADOW=K.setting.shadow.type=="HARD",this.defineValue.USE_SOFT_SHADOW=K.setting.shadow.type=="SOFT",this.defineValue.USE_CSM=bi.Cascades>1,this.defineValue.USE_IES_PROFILE=au.use}genReflection(){this.shaderVariant=tr.genRenderShaderVariant(this);let e=tr.poolGetReflection(this.shaderVariant);if(e)this.shaderReflection=e;else{let t=ps.parse(this._destVS,this.defineValue);t=ps.parse(t,this.defineValue),tr.getShaderReflection2(t,this);let i=ps.parse(this._destFS,this.defineValue);i=ps.parse(i,this.defineValue),tr.getShaderReflection2(i,this),tr.final(this)}this.shaderState.splitTexture=this.shaderReflection.useSplit}destroy(e){for(const t in this.textures)if(Object.prototype.hasOwnProperty.call(this.textures,t)){const i=this.textures[t];if(te.getInstance().detached(i,this),e&&!te.getInstance().hasReference(i))i.destroy(e);else{i.destroy(!1);let n=te.getInstance().getReference(i);if(n){let s=[];n.forEach((o,u)=>{"name"in o?s.push(o.name):s.push("NaN")})}}}this.bindGroups.length=0,this.shaderState=null,this.textures=null,this.pipeline=null,this.bindGroupLayouts=null,this._sourceVS=null,this._sourceFS=null,this._destVS=null,this._destFS=null,this._vsShaderModule=null,this._fsShaderModule=null,this.materialDataUniformBuffer.destroy(e),this.materialDataUniformBuffer=null}static destroyShader(e){di.renderShader.has(e)&&(di.renderShader.get(e).destroy(),di.renderShader.delete(e))}static getShader(e){return di.renderShader.get(e)}static createShader(e,t){let i=new ot(e,t);return di.renderShader.set(i.instanceID,i),i.instanceID}}class z4 extends ot{constructor(){super("sky_vs_frag_wgsl","SkyGBuffer_fs"),this.passType=QA.GI,this.setUniformVector3("eyesPos",new I),this.setUniformFloat("exposure",1),this.setUniformFloat("roughness",0);let A=this.shaderState;A.frontFace="ccw",A.cullMode=ar.front,A.depthWriteEnabled=!1,A.depthCompare=en.less}}class G4 extends ot{constructor(){super("gbuffer_vs","gbuffer_fs");a(this,"transparency");this.setShaderEntry("VertMain","FragMain"),this.passType=QA.GI,this.setUniformColor("baseColor",new fA),this.setUniformColor("emissiveColor",new fA),this.setUniformFloat("emissiveIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("alphaCutoff",1),this.blendMode=ee.NONE,this.setTexture("normalMap",K.res.normalTexture)}}class V4 extends ot{constructor(){super("shadowCastMap_vert","directionShadowCastMap_frag"),this.passType=QA.SHADOW,this.setShaderEntry("main"),this.setUniformFloat("cameraFar",5e3),this.setUniformVector3("lightWorldPos",I.ZERO),this.shaderState.receiveEnv=!1,this.shaderState.castShadow=!1,this.shaderState.acceptShadow=!1,this.setDefine("USE_ALPHACUT",!0)}}class Q4 extends ot{constructor(){super("castPointShadowMap_vert","shadowCastMap_frag"),this.passType=QA.POINT_SHADOW,this.setShaderEntry("main","main"),this.setUniformFloat("cameraFar",5e3),this.setUniformVector3("lightWorldPos",I.ZERO),this.shaderState.receiveEnv=!1,this.shaderState.castShadow=!1,this.shaderState.acceptShadow=!1,this.setDefine("USE_ALPHACUT",!0)}}class H4 extends ot{constructor(){super("ZPass_shader_vs","ZPass_shader_vs"),this.passType=QA.DEPTH,this.setShaderEntry("main"),this.useRz=!1;let A=this.shaderState;A.receiveEnv=!1}}class Ju{static createGIPass(A,e){if(Gi.hasMask(A.rendererMask,It.Sky)){if(!e.passShader.get(QA.GI)){let t=e.getSubShaders(QA.COLOR)[0],i=new z4;i.setTexture("baseMap",t.getTexture("baseMap")),i.cullMode=t.cullMode,i.frontFace=t.frontFace,e.addRenderPass(i,0),i.preCompile(A.geometry)}}else this.castGBufferPass(A,e)}static castGBufferPass(A,e){let t=e.getDefaultShaders();for(let i=0;i<t.length;i++){const n=t[i];let s=e.getSubShaders(QA.GI);if(!s||s.length==0||s.length<i){let o=new G4;o.setTexture("baseMap",n.getTexture("baseMap")),o.setTexture("normalMap",n.getTexture("normalMap")),o.setTexture("emissiveMap",n.getTexture("emissiveMap")),o.setUniform("baseColor",n.getUniform("baseColor")),o.setUniform("envIntensity",n.getUniform("envIntensity")),o.setUniform("emissiveColor",n.getUniform("emissiveColor")),o.setUniform("emissiveIntensity",n.getUniform("emissiveIntensity")),o.setUniform("alphaCutoff",n.getUniform("alphaCutoff")),o.cullMode=n.cullMode,o.frontFace=n.frontFace,o.preCompile(A.geometry),e.addRenderPass(o)}}}static createShadowPass(A,e){let t=Gi.hasMask(A.rendererMask,It.SkinnedMesh),i=A.geometry.hasAttribute(pA.TANGENT),n=A.geometry.hasAttribute(fe.MORPH_POSITION_PREFIX+"0"),s=A.geometry.hasAttribute(fe.MORPH_NORMAL_PREFIX+"0"),o=e.getSubShaders(QA.COLOR);for(let u=0;u<o.length;u++){const l=o[u];let c=e.getSubShaders(QA.SHADOW);if(!c||c.length<u+1){let d=new V4;d.setTexture("baseMap",l.getTexture("baseMap")),d.setUniform("alphaCutoff",l.getUniform("alphaCutoff")),i&&d.setDefine("USE_TANGENT",i),t&&d.setDefine("USE_SKELETON",t),n&&d.setDefine("USE_MORPHTARGETS",n),s&&d.setDefine("USE_MORPHNORMALS",s),l.cullMode=="none"?d.shaderState.cullMode="none":l.cullMode=="back"?d.shaderState.cullMode="front":l.cullMode=="front"&&(d.shaderState.cullMode="back"),d.preCompile(A.geometry),e.addRenderPass(d)}let h=e.getSubShaders(QA.POINT_SHADOW);if(!h||h.length<u+1){let d=new Q4;d.setTexture("baseMap",l.getTexture("baseMap")),d.setUniform("alphaCutoff",l.getUniform("alphaCutoff")),d.setDefine("USE_ALPHACUT",1);for(let f=0;f<1;f++)i&&d.setDefine("USE_TANGENT",i),t&&d.setDefine("USE_SKELETON",t),n&&d.setDefine("USE_MORPHTARGETS",n),s&&d.setDefine("USE_MORPHNORMALS",s),d.shaderState.cullMode="front",d.preCompile(A.geometry);e.addRenderPass(d)}}}static createDepthPass(A,e){let t=e.getSubShaders(QA.COLOR),i=A.geometry.hasAttribute("TANGENT"),n=A.geometry.hasAttribute(fe.MORPH_POSITION_PREFIX+"0"),s=A.geometry.hasAttribute(fe.MORPH_NORMAL_PREFIX+"0"),o=Gi.hasMask(A.rendererMask,It.SkinnedMesh);for(let u=0;u<t.length;u++){const l=t[u];let c=e.getSubShaders(QA.DEPTH);if(!c&&l.shaderState.useZ&&(!c||c.length<u)){let h=new H4;h.setTexture("baseMap",l.getTexture("baseMap")),i||h.setDefine("USE_TANGENT",i),o&&h.setDefine("USE_SKELETON",o),n&&h.setDefine("USE_MORPHTARGETS",n),s&&h.setDefine("USE_MORPHNORMALS",s),h.cullMode=l.cullMode,h.frontFace=l.frontFace,h.preCompile(A.geometry),e.addRenderPass(h)}}}}class j4{constructor(A){a(this,"renderer");a(this,"owner");a(this,"uuid");this.renderer=A,this.uuid=A.object3D.instanceID}leaveNode(){this.owner&&(this.owner.entities.delete(this.uuid),this.owner=null)}enterNode(A){this.owner&&this.leaveNode(),this.owner=A,A.entities.set(this.uuid,this)}update(A){var e;return(e=this.owner)!=null&&e.tryInsertEntity(this)||(this.leaveNode(),A.tryInsertEntity(this)),this.owner}}var W4=Object.defineProperty,Y4=Object.getOwnPropertyDescriptor,pa=(r,A,e,t)=>{for(var i=t>1?void 0:t?Y4(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&W4(A,e,i),i};class gs extends Jt{constructor(){super(...arguments);a(this,"instanceCount",0);a(this,"lodLevel",0);a(this,"alwaysRender",!1);a(this,"instanceID");a(this,"drawType",0);a(this,"_geometry");a(this,"_materials",[]);a(this,"_castShadow",!0);a(this,"_castReflection",!1);a(this,"_castGI",!1);a(this,"_rendererMask",It.Default);a(this,"_inRenderer",!1);a(this,"_readyPipeline",!1);a(this,"_combineShaderRefection");a(this,"_ignoreEnvMap");a(this,"_ignorePrefilterMap");a(this,"__renderOrder",0);a(this,"_renderOrder",0);a(this,"isRenderOrderChange");a(this,"needSortOnCameraZ");a(this,"_octreeBinder");a(this,"preInit",!1);a(this,"_renderLayer",tc.None);a(this,"_computes")}init(e){this.renderOrder=0,this.rendererMask=It.Default,this.instanceID=W3().toString(),this._computes=[]}attachSceneOctree(e){this._octreeBinder={octree:e,entity:new j4(this)},this.transform.eventDispatcher.addEventListener(Si.LOCAL_ONCHANGE,this.updateOctreeEntity,this)}detachSceneOctree(){var e;this._octreeBinder&&((e=this._octreeBinder.entity)==null||e.leaveNode(),this.transform.eventDispatcher.removeEventListener(Si.LOCAL_ONCHANGE,this.updateOctreeEntity,this),this._octreeBinder=null)}updateOctreeEntity(e){var t,i;(i=(t=this._octreeBinder)==null?void 0:t.entity)==null||i.update(this._octreeBinder.octree)}copyComponent(e){return super.copyComponent(e),this.geometry=e._geometry,this.materials=e._materials.slice(),this.drawType=e.drawType,this.alwaysRender=e.alwaysRender,this.needSortOnCameraZ=e.needSortOnCameraZ,this.isRenderOrderChange=e.isRenderOrderChange,this.castShadow=e.castShadow,this.castGI=e.castGI,this.rendererMask=e.rendererMask,this}get renderLayer(){return this._renderLayer}set renderLayer(e){this._renderLayer=e}get geometry(){return this._geometry}set geometry(e){this._geometry!=e&&(this._geometry&&te.getInstance().detached(this._geometry,this),te.getInstance().attached(e,this)),this._geometry=e}addMask(e){this._rendererMask=Gi.addMask(this.rendererMask,e)}removeMask(e){this._rendererMask=Gi.removeMask(this.rendererMask,e)}hasMask(e){return Gi.hasMask(this.rendererMask,e)}get rendererMask(){return this._rendererMask}set rendererMask(e){this._rendererMask=e}get renderOrder(){return this._renderOrder}set renderOrder(e){e!=this._renderOrder&&(this.isRenderOrderChange=!0,this.__renderOrder=e),this._renderOrder=e}get materials(){return this._materials}set materials(e){this._readyPipeline=!1;for(let i=0;i<this._materials.length;i++){let n=this._materials[i];te.getInstance().detached(n,this),n.shader&&n.shader.computes&&this.removeComputes(n.shader.computes)}for(let i=0;i<e.length;i++){let n=e[i];te.getInstance().attached(n,this),n.shader&&n.shader.computes&&this.addComputes(n.shader.computes)}this._materials=e;let t=0;for(let i=0;i<e.length;i++){const n=e[i].getPass(QA.COLOR)[0];n.shaderState.transparent&&(t=t>n.renderOrder?t:n.renderOrder)}this.renderOrder=t,this._readyPipeline||this.initPipeline()}addComputes(e){this._computes.push(...e)}removeComputes(e){for(const t of e){let i=this._computes.indexOf(t);i!=-1&&this._computes.splice(i,1)}}addRendererMask(e){this._rendererMask=Gi.addMask(this._rendererMask,e)}removeRendererMask(e){this._rendererMask=Gi.removeMask(this._rendererMask,e)}onEnable(){this._readyPipeline||this.initPipeline(),IA.instance.addRenderNode(this.transform.scene3D,this),this.updateOctreeEntity()}onDisable(){var e;this._enable=!1,IA.instance.removeRenderNode(this.transform.scene3D,this),(e=super.onDisable)==null||e.call(this)}selfCloneMaterials(e){let t=[];for(let i=0,n=this.materials.length;i<n;i++){const s=this.materials[i].clone();t.push(s)}return this.materials=t,this._readyPipeline=!1,this.initPipeline(),this}initPipeline(){if(this._geometry&&this._materials.length>0){for(let t=0;t<this._materials.length;t++){let i=this._materials[t].getPass(QA.COLOR);for(let n=0;n<i.length;n++){const s=i[n];s.shaderReflection||s.preCompile(this._geometry),this._geometry.generate(s.shaderReflection)}this.object3D.bound=this._geometry.bounds.clone()}this._readyPipeline=!0;let e=0;for(let t=0;t<this.materials.length;t++){const i=this.materials[t].getPass(QA.COLOR)[0];i.renderOrder>=3e3?e=e>i.renderOrder?e:i.renderOrder:e=Math.max(e-3e3,0),this.castNeedPass()}this.renderOrder=e,this.enable&&this.transform&&this.transform.scene3D&&IA.instance.addRenderNode(this.transform.scene3D,this)}}castNeedPass(){if(this.castGI)for(let e=0;e<this.materials.length;e++){const t=this.materials[e];Ju.createGIPass(this,t.shader)}for(let e=0;e<this.materials.length;e++){const t=this.materials[e];t.castShadow&&Ju.createShadowPass(this,t.shader)}if(this.castReflection)for(let e=0;e<this.materials.length;e++){const t=this.materials[e];t.castShadow&&Ju.createShadowPass(this,t.shader)}if(!Gi.hasMask(this.rendererMask,It.IgnoreDepthPass)&&K.setting.render.zPrePass)for(let e=0;e<this.materials.length;e++){const t=this.materials[e];Ju.createDepthPass(this,t.shader)}else for(let e=0;e<this.materials.length;e++)this.materials[e].shader.removeShaderByIndex(QA.DEPTH,0)}get castShadow(){return this._castShadow}set castShadow(e){this._castShadow=e}get castGI(){return this._castGI}set castGI(e){this._castGI=e}get castReflection(){return this._castReflection}set castReflection(e){this._castReflection=e}renderPass(e,t,i){let n=this,s=n.transform._worldMatrix;for(let o=0;o<n.materials.length;o++){const u=n.materials[o];if(!u||!u.enable)continue;let l=u.getPass(t);if(!(!l||l.length==0)){sA.bindGeometryBuffer(i.encoder,n._geometry);for(let c=0;c<l.length;c++){if(!l||l.length==0)continue;const h=l[c];if(h.pipeline){h.shaderState.splitTexture&&(i.endRenderPass(),Gt.WriteSplitColorTexture(n.instanceID),i.beginOpaqueRenderPass(),sA.bindCamera(i.encoder,e.camera),sA.bindGeometryBuffer(i.encoder,n._geometry)),sA.bindPipeline(i.encoder,h);let d=n._geometry.subGeometries[o].lodLevels[n.lodLevel];n.instanceCount>0?sA.drawIndexed(i.encoder,d.indexCount,n.instanceCount,d.indexStart,0,0):sA.drawIndexed(i.encoder,d.indexCount,1,d.indexStart,0,s.index)}}}}}renderPass2(e,t,i,n,s,o=!1){if(!this.enable)return;let u=this,l=u.object3D.transform._worldMatrix;for(let c=0;c<this.materials.length;c++){const h=this.materials[c];if(!h.castShadow&&t==QA.SHADOW)continue;let d=h.getPass(t);if(!d||d.length==0)return;if(this.drawType==2)for(let f of d)f.pipeline&&(sA.bindPipeline(s,f),sA.draw(s,6,1,0,l.index));else{sA.bindGeometryBuffer(s,u._geometry);for(let f of d)if(f.pipeline){sA.bindPipeline(s,f);let p=u._geometry.subGeometries[c].lodLevels[u.lodLevel];sA.drawIndexed(s,p.indexCount,1,p.indexStart,0,l.index)}}}}recordRenderPass2(e,t,i,n,s,o=!1){if(!this.enable)return;let u=this;for(let l=0;l<this.materials.length;l++){let c=this.materials[l].getPass(t);if(!c||c.length==0)return;let h=u.object3D.transform._worldMatrix;for(let d=0;d<c.length;d++){const f=c[d];sA.bindPipeline(s,f);let p=u._geometry.subGeometries[l].lodLevels[u.lodLevel];sA.drawIndexed(s,p.indexCount,1,p.indexStart,0,h.index)}}}noticeShaderChange(){this.enable&&(this.onEnable(),this.preInit=!1)}nodeUpdate(e,t,i,n){this.preInit=!0;let s=this,o=e.scene.envMap;for(let u=0;u<s.materials.length;u++){let l=s.materials[u].getPass(t);if(l)for(let c=0;c<l.length;c++){const h=l[c];if(h.shaderState.splitTexture){let g=Gt.CreateSplitTexture(s.instanceID);h.setTexture("splitTexture_Map",g)}if(!s._ignoreEnvMap&&h.envMap!=o&&h.setTexture("envMap",o),h.setTexture("prefilterMap",o),h.pipeline){h.apply(s._geometry,i,()=>s.noticeShaderChange());continue}let d=K.res.getTexture("BRDFLUT");h.setTexture("brdflutMap",d);let f=K.getRenderJob(e).shadowMapPassRenderer;f&&f.depth2DArrayTexture&&h.setTexture("shadowMap",K.getRenderJob(e).shadowMapPassRenderer.depth2DArrayTexture);let p=K.getRenderJob(e).pointLightShadowRenderer;p&&p.cubeArrayTexture&&h.setTexture("pointShadowMap",p.cubeArrayTexture);let y=au.iesTexture;y&&h.setTexture("iesTextureArrayMap",y),i.irradianceBuffer&&i.irradianceBuffer.length>0&&(h.setTexture("irradianceMap",i.irradianceBuffer[0]),h.setTexture("irradianceDepthMap",i.irradianceBuffer[1]));let _=Le.getLightEntries(e.scene);_&&(h.setStorageBuffer("lightBuffer",_.storageGPUBuffer),_.irradianceVolume&&h.setUniformBuffer("irradianceData",_.irradianceVolume.irradianceVolumeBuffer)),n&&(h.setStorageBuffer("clustersUniform",n.clustersUniformBuffer),h.setStorageBuffer("lightAssignBuffer",n.lightAssignBuffer),h.setStorageBuffer("assignTable",n.assignTableBuffer),h.setStorageBuffer("clusterBuffer",n.clusterBuffer)),h.apply(s._geometry,i)}}}beforeDestroy(e){te.getInstance().detached(this._geometry,this),te.getInstance().hasReference(this._geometry)||this._geometry.destroy(e);for(let t=0;t<this._materials.length;t++){const i=this._materials[t];te.getInstance().detached(i,this),te.getInstance().hasReference(i)||i.destroy(e)}super.beforeDestroy(e)}destroy(e){super.destroy(e),this._geometry=null,this._materials=null,this._combineShaderRefection=null}}pa([Hi],gs.prototype,"materials",1),pa([Hi],gs.prototype,"castShadow",1),pa([Hi],gs.prototype,"castShadow",1),pa([Hi],gs.prototype,"castGI",1),pa([Hi],gs.prototype,"castGI",1);class _g{constructor(A){a(this,"uuid");a(this,"type");a(this,"color");a(this,"count",0);a(this,"pointData");a(this,"colorData");a(this,"dirtyData",!1);a(this,"memoryDataIndex",-1);a(this,"transformIndex");this.transformIndex=A}buildAxis(A=new I(0,0,0),e=10){this.buildLines([A,new I(A.x+e,A.y,A.z)],fA.hexRGBColor(fA.RED)),this.buildLines([A,new I(A.x,A.y+e,A.z)],fA.hexRGBColor(fA.GREEN)),this.buildLines([A,new I(A.x,A.y,A.z+e)],fA.hexRGBColor(fA.BLUE))}buildLines(A,e=fA.COLOR_WHITE){if(!(A.length<2)){if(A.length==2){this.fillShapeData(A,e);return}var t=new Array(A.length+A.length-2);for(let i=1,n=0;i<A.length;++i)t[n++]=A[i-1],t[n++]=A[i];this.fillShapeData(t,e)}}buildArcLine(A,e,t,i,n=16,s=I.Y_AXIS,o=fA.COLOR_WHITE){const u=(i-t)*Ie;t*=Ie;var l=[];for(let f=0;f<=n;++f){f>1&&l.push(l[l.length-1]);var c=u*(f/n)+t,h=e*Math.cos(c),d=e*Math.sin(c);switch(s){case I.X_AXIS:l.push(A.add(new I(0,h,d)));break;case I.Y_AXIS:l.push(A.add(new I(h,0,d)));break;case I.Z_AXIS:l.push(A.add(new I(h,d,0)));break;default:l.push(A.add(new I(h,d,0)));break}}this.fillShapeData(l,o)}buildCircle(A,e,t=32,i=I.Y_AXIS,n=fA.COLOR_WHITE){var s=[];for(let c=0;c<=t;++c){var o=2*Math.PI*c/t,u=e*Math.cos(o),l=e*Math.sin(o);switch(i){case I.X_AXIS:s.push(A.add(new I(0,u,l)));break;case I.Y_AXIS:s.push(A.add(new I(u,0,l)));break;case I.Z_AXIS:s.push(A.add(new I(u,l,0)));break;default:s.push(A.add(new I(u,l,0)));break}c>0&&s.push(s[s.length-1])}s.push(s[0]),this.fillShapeData(s,n)}fillShapeData(A,e,t=!1){if(!this.pointData)this.pointData=new Float32Array(4*A.length),this.colorData=new Float32Array(4*A.length);else if(this.count+4*A.length>=this.pointData.length){let i=new Float32Array(this.pointData.length+4*A.length);i.set(this.pointData),this.pointData=i,i=new Float32Array(this.colorData.length+4*A.length),i.set(this.colorData),this.colorData=i}if(t||this.dirtyData==!1){const i=this.pointData;let n=this.count;for(let o=0;o<A.length;++o){const u=A[o];i[this.count++]=u.x,i[this.count++]=u.y,i[this.count++]=u.z,i[this.count++]=this.transformIndex}const s=this.colorData;for(let o=0;o<A.length;++o)if(e instanceof fA)s[n++]=e.r,s[n++]=e.g,s[n++]=e.b,s[n++]=e.a;else{const u=e[o];s[n++]=u.r,s[n++]=u.g,s[n++]=u.b,s[n++]=u.a}}this.dirtyData=!0}reset(){this.count=0}}class c0 extends gs{constructor(e,t){super();a(this,"shapes");a(this,"mDirtyData",!1);a(this,"mBatchSize");a(this,"mMinIndexCount");a(this,"mGPUPrimitiveTopology");this.alwaysRender=!0,this.mMinIndexCount=e,this.mBatchSize=Math.trunc(65536/this.mMinIndexCount),this.mGPUPrimitiveTopology=t,this.shapes=new Map}init(){super.init(),this.castGI=!1,this.castShadow=!1,this.geometry=new ti;let e=new Uint16Array((Math.trunc(this.mMinIndexCount*this.mBatchSize/4)+1)*4);for(let t=0;t<e.length;t++)e[t]=t;this.geometry.setIndices(e),this.geometry.setAttribute(pA.position,new Float32Array(4*e.length)),this.geometry.setAttribute(pA.color,new Float32Array(4*e.length)),this.geometry.addSubGeometry({indexStart:0,indexCount:0,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0}),this.materials=[new BB(this.mGPUPrimitiveTopology)]}fillShapeData(e,t,i,n){this.mDirtyData=!0;var s;this.shapes.has(e)?(s=this.shapes.get(e),s.pointData.length<4*n.length&&(s.pointData=new Float32Array(4*n.length),s.colorData=new Float32Array(4*n.length))):(s=new _g(this.transform._worldMatrix.index),s.type=t,s.color=i,s.pointData=new Float32Array(4*n.length),s.colorData=new Float32Array(4*n.length));const o=s.pointData,u=s.colorData,l=this.transform._worldMatrix.index;for(let c=0,h=0;c<n.length;++c){const d=n[c];o[h]=d.x,u[h++]=i.r,o[h]=d.y,u[h++]=i.g,o[h]=d.z,u[h++]=i.b,o[h]=l,u[h++]=i.a}this.shapes.set(e,s)}removeShape(e){this.shapes.has(e)&&(this.mDirtyData=!0,this.shapes.delete(e))}nodeUpdate(e,t,i,n){if(this.mDirtyData){let s=0,o=this.geometry.getAttribute(pA.position),u=this.geometry.getAttribute(pA.color);this.shapes.forEach((c,h)=>{o.data.set(c.pointData,s),u.data.set(c.colorData,s),s+=c.pointData.length}),this.geometry.vertexBuffer.upload(pA.position,o),this.geometry.vertexBuffer.upload(pA.color,u);let l=s/4;this.geometry.subGeometries[0].lodLevels[0].indexCount=l,this.mDirtyData=!1}super.nodeUpdate(e,t,i,n)}allocGraphics3DShape(e,t){let i;return this.shapes.has(e)?(i=this.shapes.get(e),i.reset()):(i=new _g(t),i.uuid=e,i.type="line",i.color=fA.COLOR_WHITE,this.shapes.set(i.uuid,i)),this.mDirtyData=!0,i}}class $4{constructor(){a(this,"opaqueList",[]);a(this,"transparentList",[]);a(this,"sky")}clean(){this.opaqueList.length=0,this.transparentList.length=0}}class K4{constructor(){a(this,"renderGroup");this.renderGroup=new Map}collect_add(A){let e="",t="";e+=A.geometry.instanceID;for(let n=0;n<A.materials.length;n++){const s=A.materials[n];t+=s.shader.getDefaultColorShader().shaderVariant}let i=e+t;this.renderGroup.has(i)||this.renderGroup.set(i,{bundleMap:new Map,key:i,renderNodes:[]}),this.renderGroup.get(i).renderNodes.indexOf(A)==-1&&this.renderGroup.get(i).renderNodes.push(A)}}class q4{constructor(){a(this,"renderShaderUpdateList",new Map);a(this,"renderNodeList",new Map)}collect_add(A){let e=A.transform.view3D;e&&A.materials&&A.materials.forEach(t=>{let i=this.renderShaderUpdateList.get(e);i||(i=new Map,this.renderShaderUpdateList.set(e,i));let n=this.renderNodeList.get(e);n||(n=new Map,this.renderNodeList.set(e,n)),n.set(A.instanceID,A);let s=t.getAllPass();for(let o=0;o<s.length;o++){const u=s[o];let l=`${A.geometry.instanceID+u.instanceID}`,c=i.get(l);c||(c=new Map,i.set(l,c)),c.set(A.instanceID,A)}})}collect_remove(A){let e=A.transform.view3D;if(e&&A.materials){let t=this.renderShaderUpdateList.get(e);t&&A.materials.forEach(i=>{let n=i.getAllPass();for(let s=0;s<n.length;s++){const o=n[s];let u=`${A.geometry.instanceID+o.instanceID}`;t.delete(u)}})}}}const Uc=class Uc{constructor(){a(this,"_sceneLights");a(this,"_sceneGIProbes");a(this,"_op_RenderNodes");a(this,"_tr_RenderNodes");a(this,"_octreeRenderNodes");a(this,"_graphics");a(this,"_op_renderGroup");a(this,"_tr_renderGroup");a(this,"_renderShaderCollect");a(this,"state",{giLightingChange:!0});a(this,"sky");a(this,"_collectInfo");a(this,"rendererOctree");this._sceneLights=new Map,this._sceneGIProbes=new Map,this._op_RenderNodes=new Map,this._tr_RenderNodes=new Map,this._graphics=[],this._op_renderGroup=new Map,this._tr_renderGroup=new Map,this._collectInfo=new $4,this._renderShaderCollect=new q4,this._octreeRenderNodes=new Map}static get instance(){return this._instance||(this._instance=new Uc),this._instance}getPashList(A,e){if(e.renderOrder<3e3)return this._op_RenderNodes.get(A);if(e.renderOrder>=3e3)return this._tr_RenderNodes.get(A)}sortRenderNode(A,e){for(let t=A.length-1;t>0;t--)if(A[t].renderOrder<e.renderOrder){A.push(e);return}A.push(e)}addRenderNode(A,e){if(!A)return;let t=e.renderOrder>=3e3;if(e.hasMask(It.Sky))this.sky=e;else if(e instanceof c0)this._graphics.indexOf(e)==-1&&this._graphics.push(e);else if(yg.hasMask(e.renderLayer,tc.None)){this.removeRenderNode(A,e);let i=t?this._tr_RenderNodes:this._op_RenderNodes;i.has(A)||i.set(A,[]),i.get(A).push(e),K.setting.occlusionQuery.octree&&e.attachSceneOctree(this.getOctree(A));let n=this.getPashList(A,e);n.indexOf(e)==-1&&this.sortRenderNode(n,e)}else{this.removeRenderNode(A,e);let i=t?this._tr_renderGroup:this._op_renderGroup;i.has(A)||i.set(A,new K4),i.get(A).collect_add(e)}e.object3D.renderNode=e,this._renderShaderCollect.collect_add(e)}getOctree(A){let e,t=K.setting.occlusionQuery.octree;if(t&&(e=this._octreeRenderNodes.get(A),!e)){let i=new I(t.x,t.y,t.z),n=new I(t.width,t.height,t.depth),s=new Qe(i,n);e=new $d(s),this._octreeRenderNodes.set(A,e)}return e}removeRenderNode(A,e){if(e.detachSceneOctree(),e.hasMask(It.Sky))this.sky=null;else if(yg.hasMask(e.renderLayer,tc.None)){let t=this.getPashList(A,e);if(t){let i=t.indexOf(e);i!=-1&&t.splice(i,1)}}this._renderShaderCollect.collect_remove(e)}addLight(A,e){if(!this._sceneLights.has(A))this._sceneLights.set(A,[e]);else{let t=this._sceneLights.get(A);if(t.length>=K.setting.light.maxLight){console.warn("Alreay meet maxmium light number:",K.setting.light.maxLight);return}t.indexOf(e)!=-1||t.push(e)}}removeLight(A,e){if(this._sceneLights.has(A)){let t=this._sceneLights.get(A),i=t.indexOf(e);i!=-1&&t.splice(i,1)}}getLights(A){return this._sceneLights.get(A)||[]}addGIProbe(A,e){this._sceneGIProbes.has(A)?this._sceneGIProbes.get(A).push(e):this._sceneGIProbes.set(A,[e])}removeGIProbe(A,e){if(this._sceneGIProbes.has(A)){let t=this._sceneGIProbes.get(A),i=t.indexOf(e);i!=-1&&t.splice(i,1)}}getProbes(A){return this._sceneGIProbes.get(A)||[]}autoSortRenderNodes(A){let e=this._tr_RenderNodes.get(A);if(!e)return;let t=!1;for(const i of e)if(i.isRenderOrderChange||i.needSortOnCameraZ){t=!0;break}if(t){for(const i of e){let n=i.renderOrder;if(i.needSortOnCameraZ){let s=I4.worldToCameraDepth(i.object3D);s=1-Math.max(0,Math.min(1,s)),n+=s}i.__renderOrder=n,i.isRenderOrderChange=!1}e.sort((i,n)=>i.__renderOrder>n.__renderOrder?1:-1)}return this}getRenderNodes(A,e){if(this.autoSortRenderNodes(A),this._collectInfo.clean(),this._collectInfo.sky=this.sky,K.setting.occlusionQuery.octree)this.rendererOctree=this.getOctree(A),this.rendererOctree.getRenderNode(e.frustum,this._collectInfo);else{let t=this._op_RenderNodes.get(A);t&&(this._collectInfo.opaqueList=t.concat());let i=this._tr_RenderNodes.get(A);i&&(this._collectInfo.transparentList=i.concat())}return this._collectInfo}getOpRenderGroup(A){return this._op_renderGroup.get(A)}getTrRenderGroup(A){return this._tr_renderGroup.get(A)}getGraphicList(){return this._graphics}getRenderShaderCollect(A){return this._renderShaderCollect.renderShaderUpdateList.get(A)}};a(Uc,"_instance");let IA=Uc;class X4{constructor(){a(this,"setting");a(this,"probesBufferData");a(this,"probesBuffer");a(this,"isVolumeFrameChange",!0);a(this,"randomOrientation");a(this,"startPosition",new I);a(this,"isVolumeChange",!0);a(this,"irradianceVolumeBuffer");a(this,"directionDistance",20);a(this,"randomSeedCount",3);a(this,"useRandomIndex",0);a(this,"centerDirection",new I(0,0,this.directionDistance).normalize(1));a(this,"arroundPositions",[]);a(this,"debugX",0);a(this,"debugY",0);a(this,"debugZ",0)}updateOrientation(){return this.useRandomIndex++,this.useRandomIndex>=this.arroundPositions.length&&(this.useRandomIndex=0),NA.fromToRotation(this.centerDirection,this.arroundPositions[this.useRandomIndex],this.randomOrientation),this.randomOrientation}init(A){this.setting=A,this.randomOrientation=new NA(!1),this.randomOrientation.identity(),this.irradianceVolumeBuffer=new i1(80),this.createFramesBuffer(),this.arroundPositions.push(this.centerDirection.clone());for(let e=0;e<this.randomSeedCount;e++){let t=Math.PI*2*e/this.randomSeedCount,i=new I(Math.sin(t),Math.cos(t),this.directionDistance).normalize(1);this.arroundPositions.push(i)}}setVolumeDataChange(){this.isVolumeChange=!0}updateProbes(A){let e=this.probesBufferData;for(let t of A){let i=t.index*4;e[i+3]=t.drawCallFrame}}createFramesBuffer(){if(!this.probesBufferData){let A=this.setting.probeXCount*this.setting.probeYCount*this.setting.probeZCount;this.probesBufferData=new Float32Array(A*4),this.probesBufferData.fill(-1),this.probesBuffer=new Bt(A*4,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST)}}uploadBuffer(){this.isVolumeChange&&(this.fillIrradianceData(),this.isVolumeChange=!1,this.isVolumeFrameChange=!0),this.probesBuffer.setFloat32Array("uniformFramesBuffer",this.probesBufferData)}calcPosition(A,e,t,i){let n=this.setting,s=this.setting.probeSpace;return i=i||new I,i.x=A*s-s*(n.probeXCount-1)*.5+n.offsetX,i.y=e*s-s*(n.probeYCount-1)*.5+n.offsetY,i.z=t*s-s*(n.probeZCount-1)*.5+n.offsetZ,i}fillIrradianceData(){let A=this.setting,e=this.calcPosition(0,0,0,this.startPosition);this.irradianceVolumeBuffer.setFloat("orientationIndex",this.randomOrientation.index),this.irradianceVolumeBuffer.setFloat("hysteresis",A.hysteresis),this.irradianceVolumeBuffer.setFloat("OctRTSideSize",A.octRTSideSize),this.irradianceVolumeBuffer.setFloat("OctRTMaxSize",A.octRTMaxSize),this.irradianceVolumeBuffer.setFloat("startX",e.x),this.irradianceVolumeBuffer.setFloat("startY",e.y),this.irradianceVolumeBuffer.setFloat("startZ",e.z),this.irradianceVolumeBuffer.setFloat("ProbeSpace",A.probeSpace),this.irradianceVolumeBuffer.setFloat("probeXCount",A.probeXCount),this.irradianceVolumeBuffer.setFloat("probeYCount",A.probeYCount),this.irradianceVolumeBuffer.setFloat("probeZCount",A.probeZCount),this.irradianceVolumeBuffer.setFloat("maxDistance",A.probeSpace*1.732),this.irradianceVolumeBuffer.setFloat("depthSharpness",A.depthSharpness),this.irradianceVolumeBuffer.setFloat("ProbeSourceTextureSize",A.probeSourceTextureSize),this.irradianceVolumeBuffer.setFloat("ProbeSize",A.probeSize),this.irradianceVolumeBuffer.setFloat("bounceIntensity",A.bounceIntensity),this.irradianceVolumeBuffer.setFloat("probeRoughness",A.probeRoughness),this.irradianceVolumeBuffer.setFloat("normalBias",A.normalBias),this.irradianceVolumeBuffer.setFloat("irradianceChebyshevBias",A.irradianceChebyshevBias),this.irradianceVolumeBuffer.setFloat("rayNumber",A.rayNumber),this.irradianceVolumeBuffer.setFloat("irradianceDistanceBias",A.irradianceDistanceBias),this.irradianceVolumeBuffer.setFloat("indirectIntensity",A.indirectIntensity),this.irradianceVolumeBuffer.setFloat("ddgiGamma",A.ddgiGamma),this.irradianceVolumeBuffer.setFloat("lerpHysteresis",A.lerpHysteresis),this.irradianceVolumeBuffer.setFloat("debugX",this.debugX),this.irradianceVolumeBuffer.setFloat("debugY",this.debugY),this.irradianceVolumeBuffer.setFloat("debugZ",this.debugZ),this.irradianceVolumeBuffer.apply()}}class J4{constructor(){a(this,"storageGPUBuffer");a(this,"irradianceVolume");a(this,"_lightList",[]);this.storageGPUBuffer=new Bt(Zl.lightSize*K.setting.light.maxLight,GPUBufferUsage.COPY_SRC),this.irradianceVolume=new X4,this.irradianceVolume.init(K.setting.gi);for(let A=0;A<K.setting.light.maxLight;A++){let e=this.storageGPUBuffer.memory.allocation_node(Zl.lightSize*4);this._lightList.push(e)}this.storageGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(A){this.storageGPUBuffer.clean();let e=IA.instance.getLights(A.scene);for(let t=0;t<e.length;t++){const i=e[t].lightData;i.index=t,this.writeLightBytes(i,this._lightList[t])}this.storageGPUBuffer.apply()}writeLightBytes(A,e){e.offset=0,e.writeFloat(A.index),e.writeInt32(A.lightType),e.writeFloat(A.radius),e.writeFloat(A.linear),e.writeVector3(A.lightPosition),e.writeFloat(A.lightMatrixIndex),e.writeVector3(A.direction),e.writeFloat(A.quadratic),e.writeRGBColor(A.lightColor),e.writeFloat(A.intensity),e.writeFloat(A.innerAngle),e.writeFloat(A.outerAngle),e.writeFloat(A.range),e.writeInt32(A.castShadowIndex),e.writeVector3(A.lightTangent),e.writeFloat(A.iesIndex)}}class Z4{constructor(){a(this,"gpuBuffer");a(this,"probes");a(this,"memoryDo");a(this,"_probeInfoList")}initDataUniform(A){this.memoryDo=new su,this.probes=A,this._probeInfoList=[],this.memoryDo.destroy(),this.memoryDo.allocation(A.length*17*4);for(let t=0;t<A.length;t++){var e=17;let i=this.memoryDo.allocation_node(e*4);this._probeInfoList.push(i);let n=A[t].transform.worldPosition;i.setArray(0,[n.x,n.y,n.z])}this.gpuBuffer=iA.device.createBuffer({size:this.memoryDo.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"ProbeBuffer",mappedAtCreation:!1})}updateGPUBuffer(){const A=this.memoryDo.shareDataBuffer;let e=this.memoryDo.shareDataBuffer.byteLength,t=0;const i=5e3*64;for(;t<e;)iA.device.queue.writeBuffer(this.gpuBuffer,t,A,t,Math.floor(Math.min(i,e-t))),t+=i}}class Ab extends Kn{constructor(e,t=0,i){super();a(this,"size");this.bufferType=xi.StorageGPUBuffer,this.size=e,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|t,e,i,"MatrixGPUBuffer")}writeBufferByHeap(e,t){let i=iA.device;if(e.length>0){let n=null;for(;this.mapAsyncReady.length&&(n=this.mapAsyncReady.shift(),n.usedSize!=e.byteLength);)n.destroy(),this.mapAsyncBuffersOutstanding--,n=null;n||(n=i.createBuffer({size:e.byteLength,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE,mappedAtCreation:!0}),n.usedSize=e.byteLength,this.mapAsyncBuffersOutstanding++,this.mapAsyncBuffersOutstanding>10&&console.warn(` Warning: mapAsync requests from ${this.mapAsyncBuffersOutstanding} frames ago have not resolved yet.  MB of staging buffers allocated.`));let s=new Float32Array(e.buffer,e.byteOffset,t);new Float32Array(n.getMappedRange(0,t*4)).set(s),n.unmap();const o=i.createCommandEncoder();o.copyBufferToBuffer(n,0,this.buffer,0,t*4),i.queue.submit([o.finish()]),n.mapAsync(GPUMapMode.WRITE).then(()=>this.mapAsyncReady.push(n))}}}class eb{constructor(){a(this,"uuid");a(this,"index");a(this,"usage");a(this,"groupBufferSize");a(this,"matrixBufferDst");this.uuid=ii(),this.groupBufferSize=0,this.usage=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.cacheWorldMatrix()}cacheWorldMatrix(){this.groupBufferSize=NA.maxCount*NA.blockBytes,this.matrixBufferDst=new Ab(this.groupBufferSize/4),this.matrixBufferDst.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBufferDst.buffer.label=this.groupBufferSize.toString()}writeBuffer(A){const e=NA.dynamicMatrixBytes;this.matrixBufferDst.mapAsyncWrite(e,A)}}class Le{static init(){this.modelMatrixBindGroup=new eb,this._cameraBindGroups=new Map,this._lightEntriesMap=new Map}static getCameraGroup(A){let e=this._cameraBindGroups.get(A);return e||(e=new w4(this.modelMatrixBindGroup),this._cameraBindGroups.set(A,e)),A.isShadowCamera?e.setShadowCamera(A):e.setCamera(A),e}static getLightEntries(A){A||console.log("getLightEntries scene is null");let e=this._lightEntriesMap.get(A);return e||(e=new J4,this._lightEntriesMap.set(A,e)),this._lightEntriesMap.get(A)}static updateProbes(A){this._probeEntries||(this._probeEntries=new Z4,this._probeEntries.initDataUniform(A))}}a(Le,"_cameraBindGroups"),a(Le,"_lightEntriesMap"),a(Le,"_probeEntries"),a(Le,"modelMatrixBindGroup");const yt=class yt{static bindPipeline(A,e){if(yt.lastShader!=e)yt.lastShader=e;else return;yt.lastPipeline!=e.pipeline&&(yt.lastPipeline=e.pipeline,A.setPipeline(e.pipeline));for(let t=1;t<e.bindGroups.length;t++){const i=e.bindGroups[t];i&&A.setBindGroup(t,i)}}static bindCamera(A,e){let t=Le.getCameraGroup(e);A.setBindGroup(0,t.globalBindGroup)}static bindGeometryBuffer(A,e){if(this.lastGeometry!=e){this.lastGeometry=e,e.indicesBuffer&&A.setIndexBuffer(e.indicesBuffer.indicesGPUBuffer.buffer,e.indicesBuffer.indicesFormat);let t=e.vertexBuffer.vertexGPUBuffer,i=e.vertexBuffer.vertexBufferLayouts;for(let n=0;n<i.length;n++){const s=i[n];A.setVertexBuffer(n,t.buffer,s.offset,s.size)}}}static cleanCache(){this.lastGeometry=null,this.lastPipeline=null,this.lastShader=null}static createPipeline(A){return Er.countStart("GPUContext","pipeline"),iA.device.createRenderPipeline(A)}static beginCommandEncoder(){return Er.countStart("GPUContext","beginCommandEncoder"),this.LastCommand&&iA.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=iA.device.createCommandEncoder(),this.LastCommand}static endCommandEncoder(A){this.LastCommand==A&&(iA.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=null,Er.countStart("GPUContext","endCommandEncoder"))}static recordBundleEncoder(A){return iA.device.createRenderBundleEncoder(A)}static beginRenderPass(A,e){if(this.cleanCache(),this.renderPassCount++,this.lastRenderPassState=e,e.renderTargets&&e.renderTargets.length>0){for(let t=0;t<e.renderTargets.length;++t){const i=e.renderTargets[t];let n=e.renderPassDescriptor.colorAttachments[t];e.multisample>0&&e.renderTargets.length==1?(n.view=e.multiTexture.createView(),n.resolveTarget=i.getGPUView()):n.view=i.getGPUTexture().createView()}return A.beginRenderPass(e.renderPassDescriptor)}else{let t=e.renderPassDescriptor.colorAttachments[0];return t&&(e.multisample>0?(t.view=e.multiTexture.createView(),t.resolveTarget=iA.context.getCurrentTexture().createView()):t.view=iA.context.getCurrentTexture().createView()),A.beginRenderPass(e.renderPassDescriptor)}}static drawIndexed(A,e,t,i,n,s){A.drawIndexed(e,t,i,n,s),this.drawCount++}static draw(A,e,t,i,n){A.draw(e,t,i,n),this.drawCount++}static endPass(A){A.insertDebugMarker("end"),A.end()}static computeCommand(A,e){let t=A.beginComputePass();for(let i=0;i<e.length;i++)e[i].compute(t);t.end()}};a(yt,"lastGeometry"),a(yt,"lastPipeline"),a(yt,"lastShader"),a(yt,"drawCount",0),a(yt,"renderPassCount",0),a(yt,"geometryCount",0),a(yt,"pipelineCount",0),a(yt,"matrixCount",0),a(yt,"lastRenderPassState"),a(yt,"LastCommand");let sA=yt;class Sg{constructor(){a(this,"source");a(this,"input");a(this,"output")}reset(A){this.input&&this.input.destroy(),this.output&&this.output.destroy(),this.input=this.output=null,this.source=A}apply(A){if(this.source){if(!this.input){let e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this.input=new Bt(this.source.length,e,this.source),this.input.apply()}if(!this.output){let e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;this.output=new Bt(A*3,e),this.output.apply()}}}}class tb{constructor(){a(this,"enable");a(this,"morphTargetsRelative");a(this,"MaxMorphTargetCount",64);a(this,"_computeConfigArray");a(this,"_computeConfigBuffer");a(this,"_morphInfluenceArray");a(this,"_morphInfluenceBuffer");a(this,"_positionAttrDataGroup");a(this,"_normalAttrDataGroup");a(this,"_isInfluenceDirty");a(this,"_morphTargetCount");a(this,"_totalVertexCount");a(this,"_computeShader");a(this,"_computeShaders");a(this,"_computeWorkGroupXY",1);a(this,"_collectMorphTargetData");a(this,"_blendTarget");this._isInfluenceDirty=!0,this.generateGPUBuffer(),this._positionAttrDataGroup=new Sg,this._normalAttrDataGroup=new Sg}initMorphTarget(A){this._collectMorphTargetData=this.collectMorphTargetList(A),this._computeShader&&this._computeShader.destroy();let e=nr.CsMain;this._computeShader=new Ii(e),this._collectMorphTargetData.mergedNormal?this._computeShader.setDefine("USE_MORPHNORMALS",!0):this._computeShader.deleteDefine("USE_MORPHNORMALS"),this._computeShaders=[this._computeShader],this._isInfluenceDirty=!0,this._morphTargetCount=this._collectMorphTargetData.mtCount,this._totalVertexCount=this._collectMorphTargetData.vCount,this._morphInfluenceArray.fill(0),this._computeWorkGroupXY=this.calcWorkGroup(this._totalVertexCount),this._positionAttrDataGroup.reset(this._collectMorphTargetData.mergedPos),this._normalAttrDataGroup.reset(this._collectMorphTargetData.mergedNormal)}applyRenderShader(A){this.uploadMorphTargetBuffer(),this.uploadConfigGBuffer(),A.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),A.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&A.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)}computeMorphTarget(A){this.uploadConfigGBuffer(),this.uploadMorphTargetBuffer(),this._computeShader.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),this._computeShader.setStorageBuffer("morphTargetInfluence",this._morphInfluenceBuffer),this._computeShader.setStorageBuffer("morphTargetPositions",this._positionAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&(this._computeShader.setStorageBuffer("morphTargetNormals",this._normalAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)),this._computeShader.workerSizeX=this._computeWorkGroupXY,this._computeShader.workerSizeY=this._computeWorkGroupXY,this._computeShader.workerSizeZ=1,sA.computeCommand(A,this._computeShaders)}updateInfluence(A,e){this._isInfluenceDirty=!0,this._morphInfluenceArray[A]=e}get blendShape(){return this._blendTarget}collectMorphTargetList(A){let e=this.collectAttribute("a_morphPositions_",A),t=e.length,i=e[0].data.length/3;if(this._blendTarget={},A.blendShapeData)for(let u=0;u<A.blendShapeData.shapeIndexs.length;u++){let l=A.blendShapeData.shapeIndexs[u],c=A.blendShapeData.shapeNames[u].split("."),h=c[c.length-1];this._blendTarget[h]=d=>this.updateInfluence(l,d)}let n=new Float32Array(i*t*3);{let u=0;for(let l=0;l<t;l++){let c=e[l];n.set(c.data,u),u+=c.data.length}}let s=this.collectAttribute("a_morphNormals_",A),o;if(s&&s.length>0){let u=0;o=new Float32Array(i*t*3);for(let l=0;l<t;l++){let c=s[l];o.set(c.data,u),u+=c.data.length}}return{mtCount:t,vCount:i,mergedPos:n,mergedNormal:o}}collectAttribute(A,e){let t=[];for(let i=0;i<this.MaxMorphTargetCount;i++){let n=A+i,s=e.getAttribute(n);if(s)t[i]=s;else break}return t}uploadConfigGBuffer(){if(this._isInfluenceDirty){let A=0;for(let e=0;e<this._morphTargetCount;e++)A+=this._morphInfluenceArray[e];this._morphInfluenceBuffer.setFloat32Array("data",this._morphInfluenceArray),this._morphInfluenceBuffer.apply(),this._computeConfigArray[0]=this.morphTargetsRelative?1:1-A,this._computeConfigArray[1]=this._morphTargetCount,this._computeConfigArray[2]=this._totalVertexCount,this._computeConfigArray[3]=this._computeWorkGroupXY,this._computeConfigBuffer.setFloat32Array("data",this._computeConfigArray),this._computeConfigBuffer.apply(),this._isInfluenceDirty=!1}}calcWorkGroup(A){let e=Math.ceil(Math.sqrt(A)),t=Math.ceil(Math.log2(e));return e=Math.pow(2,t),e}uploadMorphTargetBuffer(){this._positionAttrDataGroup.output||this._positionAttrDataGroup.apply(this._totalVertexCount),this._normalAttrDataGroup.output||this._normalAttrDataGroup.apply(this._totalVertexCount)}generateGPUBuffer(){this._computeConfigArray=new Float32Array(4),this._computeConfigBuffer=new i1(4),this._morphInfluenceArray=new Float32Array(this.MaxMorphTargetCount);let A=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this._morphInfluenceBuffer=new Bt(this.MaxMorphTargetCount,A)}}var rb=Object.defineProperty,ib=Object.getOwnPropertyDescriptor,ga=(r,A,e,t)=>{for(var i=t>1?void 0:t?ib(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&rb(A,e,i),i};let he=class extends gs{constructor(){super();a(this,"receiveShadow");a(this,"morphData")}onEnable(){super.onEnable()}onDisable(){super.onDisable()}cloneTo(A){A.addComponent(he).copyComponent(this)}copyComponent(A){return super.copyComponent(A),this.receiveShadow=A.receiveShadow,this}get geometry(){return this._geometry}set geometry(A){super.geometry=A;let e=A.morphTargetDictionary!=null;e&&(this.morphData||(this.morphData=new tb),this.morphData.morphTargetsRelative=A.morphTargetsRelative,this.morphData.initMorphTarget(A)),this.morphData&&(this.morphData.enable=e),this.morphData&&this.morphData.enable?this.addRendererMask(It.MorphTarget):this.removeRendererMask(It.MorphTarget),this.object3D.bound=this._geometry.bounds.clone(),this._readyPipeline||(this.initPipeline(),this._computes&&this._computes&&(this.onCompute=dw(this.onCompute,()=>{for(let t=0;t<this._computes.length;t++)this._computes[t].onUpdate()})))}get material(){return this._materials[0]}set material(A){this.materials=[A]}setMorphInfluence(A,e){if(this.morphData&&this.morphData.enable){let t=this._geometry.morphTargetDictionary[A];t>=0&&this.morphData.updateInfluence(t,e)}}setMorphInfluenceIndex(A,e){this.morphData&&this.morphData.enable&&A>=0&&this.morphData.updateInfluence(A,e)}onCompute(A,e){this.morphData&&this.morphData.enable&&this.morphData.computeMorphTarget(e)}nodeUpdate(A,e,t,i){if(this.morphData&&this.morphData.enable)for(let n=0;n<this.materials.length;n++){let s=this.materials[n].getPass(e);if(s)for(let o=0;o<s.length;o++)this.morphData.applyRenderShader(s[o])}super.nodeUpdate(A,e,t,i)}destroy(A){super.destroy(A)}};ga([Hi],he.prototype,"geometry",1),ga([Hi],he.prototype,"geometry",1),ga([Hi],he.prototype,"material",1),ga([Hi],he.prototype,"material",1),he=ga([ri(he,"MeshRenderer")],he);class nb{constructor(){a(this,"label","");a(this,"customSize",!1);a(this,"zPreTexture",null);a(this,"depthTexture",null);a(this,"renderTargetTextures");a(this,"outColor",-1);a(this,"renderTargets");a(this,"rtTextureDescriptors");a(this,"irradianceBuffer");a(this,"multisample",0);a(this,"multiTexture");a(this,"depthViewIndex",0);a(this,"depthCleanValue",0);a(this,"isOutTarget",!0);a(this,"camera3D");a(this,"rtFrame");a(this,"renderPassDescriptor");a(this,"renderBundleEncoderDescriptor");a(this,"depthLoadOp")}getLastRenderTexture(){return this.renderTargets&&this.renderTargets.length>0?this.renderTargets[0]:K.res.redTexture}}const ci=class ci{static createRendererPassState(A,e=null){let t=new nb;if(t.label=A.label,t.customSize=A.customSize,t.rtFrame=A,t.zPreTexture=A.zPreTexture,t.depthTexture=A.depthTexture,t.depthViewIndex=A.depthViewIndex,t.isOutTarget=A.isOutTarget,t.depthCleanValue=A.depthCleanValue,t.depthLoadOp=A.depthLoadOp,A&&A.renderTargets.length>0){t.renderTargets=A.renderTargets,t.rtTextureDescriptors=A.rtDescriptors,t.renderPassDescriptor=ci.getRenderPassDescriptor(t),t.renderBundleEncoderDescriptor=ci.getRenderBundleDescriptor(t),t.renderTargetTextures=[];for(let i=0;i<A.renderTargets.length;i++){const n=A.renderTargets[i];t.renderTargetTextures[i]={format:n.format},n.name.indexOf(Ye.colorBufferTex_NAME)!=-1&&(t.outColor=i)}}else t.renderPassDescriptor=ci.getRenderPassDescriptor(t,e),t.renderBundleEncoderDescriptor=ci.getRenderBundleDescriptor(t),t.renderTargetTextures=[{format:iA.presentationFormat}],t.outColor=0;return t}static getRenderPassDescriptor(A,e=null){iA.device,iA.presentationSize;let t=[];if(A.renderTargets&&A.renderTargets.length>0){A.renderTargets[0].width,A.renderTargets[0].height;for(let n=0;n<A.renderTargets.length;n++){const s=A.renderTargets[n],o=A.rtTextureDescriptors[n];t.push({view:s.getGPUView(),resolveTarget:void 0,loadOp:o.loadOp,clearValue:o.clearValue,storeOp:o.storeOp})}}else if(!A.customSize){let n=iA.canvasConfig&&iA.canvasConfig.alpha?[1,1,1,0]:[0,0,0,1];A.isOutTarget==!0&&t.push({view:void 0,resolveTarget:void 0,loadOp:iA.canvasConfig&&iA.canvasConfig.alpha||e!=null?"load":"clear",clearValue:n,storeOp:"store"})}let i=null;return A.depthTexture||A.zPreTexture?(A.zPreTexture&&(A.depthTexture=A.zPreTexture),i={label:`${A.label} renderPassDescriptor zPreTexture${A.zPreTexture?"load":"clear"}`,colorAttachments:t,depthStencilAttachment:{view:A.depthTexture.getGPUView(),depthLoadOp:A.zPreTexture?"load":A.depthLoadOp,depthClearValue:A.zPreTexture?1:A.depthCleanValue,depthStoreOp:"store"}}):i={colorAttachments:t,label:"renderPassDescriptor not writeDepth"},this.renderPassDescriptorCount++,i}static getRenderBundleDescriptor(A){iA.presentationSize;let e=[];if(A.renderTargets&&A.renderTargets.length>0){A.renderTargets[0].width,A.renderTargets[0].height;for(let i=0;i<A.renderTargets.length;i++){const n=A.renderTargets[i];e.push(n.format)}}let t=null;return A.depthTexture?t={colorFormats:e,depthStencilFormat:A.depthTexture.format}:t={colorFormats:e},this.renderPassDescriptorCount++,t}};a(ci,"bindGroupDescriptorCount",0),a(ci,"bindTextureDescriptorCount",0),a(ci,"renderPassDescriptorCount",0),a(ci,"pipelineDescriptorCount",0);let Bi=ci;class Sh extends Kn{constructor(e){super();a(this,"node");this.bufferType=xi.VertexGPUBuffer,this.createVertexBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,e)}createVertexBuffer(e,t){let i=iA.device;this.byteSize=t*Float32Array.BYTES_PER_ELEMENT,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({label:"VertexGPUBuffer",size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory=new su,this.memoryNodes=new Map,this.memory.allocation(this.byteSize),this.node=this.memory.allocation_node(this.byteSize)}}var Ft=(r=>(r[r.split=0]="split",r[r.compose=1]="compose",r[r.compose_bin=2]="compose_bin",r))(Ft||{});class sb{constructor(){a(this,"vertexCount",0);a(this,"vertexGPUBuffer");a(this,"geometryType",Ft.compose);a(this,"_vertexBufferLayouts");a(this,"_attributeSlotLayouts");a(this,"_attributeLocation");this._vertexBufferLayouts=[],this._attributeLocation={},this._attributeSlotLayouts=[]}get vertexBufferLayouts(){return this._vertexBufferLayouts}createVertexBuffer(A,e){switch(this.geometryType){case Ft.split:this.createSplitVertexBuffer(A,e);break;case Ft.compose:this.createComposeVertexBuffer(A,e);break;case Ft.compose_bin:this.createComposBinVertexBuffer(A,e);break}}createSplitVertexBuffer(A,e){let t=0;for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i];if(n.name=="index")continue;this._attributeLocation[n.name]=n.location;let s={name:n.name,format:n.format,offset:0,shaderLocation:n.location,stride:xs[n.format]};this._attributeSlotLayouts[n.location]=[s];let o=A.get(n.name);o||(o={attribute:n.name,data:new Float32Array(n.size*this.vertexCount)},A.set(n.name,o));let u=o.data.length/s.stride;this.vertexCount!=0&&this.vertexCount!=u&&console.error(" vertex count not match attribute count"),this.vertexCount=u,this._vertexBufferLayouts[n.location]={name:n.name,arrayStride:n.size*4,stepMode:"vertex",attributes:this._attributeSlotLayouts[n.location],offset:t*4,size:this.vertexCount*n.size*4},t+=this.vertexCount*n.size}this.vertexGPUBuffer=new Sh(t)}createComposeVertexBuffer(A,e){this._attributeSlotLayouts[0]=[];let t=0;for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i];if(n.name=="index"||n.type=="builtin")continue;this._attributeLocation[n.name]=n.location;let s={name:n.name,format:n.format,offset:t*4,shaderLocation:n.location,stride:xs[n.format]};this._attributeSlotLayouts[0][n.location]=s;let o=A.get(n.name);if(o||(o={attribute:n.name,data:new Float32Array(n.size*this.vertexCount)},A.set(n.name,o)),o.data){let u=o.data.length/s.stride;this.vertexCount!=0&&this.vertexCount!=u&&console.error(" vertex count not match attribute count"),this.vertexCount=u}t+=n.size}this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:t*4,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*t*4},this.vertexGPUBuffer=new Sh(this.vertexCount*t)}createComposBinVertexBuffer(A,e){this._attributeSlotLayouts[0]=[];let t=0;for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n];if(s.name=="index"||s.type=="builtin")continue;this._attributeLocation[s.name]=s.location;let o={name:s.name,format:s.format,offset:t*4,shaderLocation:s.location,stride:xs[s.format]};this._attributeSlotLayouts[0][s.location]=o;let u=A.get(s.name);if(u||(u={attribute:s.name,data:new Float32Array(s.size*this.vertexCount)},A.set(s.name,u)),u.data){let l=u.data.length/o.stride;this.vertexCount!=0&&this.vertexCount!=l&&console.error(" vertex count not match attribute count"),this.vertexCount=l}t+=s.size}let i=A.get(pA.all).data.length/t;this.vertexCount=i,this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:t*4,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*t*4},this.vertexGPUBuffer=new Sh(this.vertexCount*t)}upload(A,e){var t;if(this.vertexGPUBuffer){switch(this.geometryType){case Ft.split:{let i=this._attributeLocation[A],n=this._vertexBufferLayouts[i];this.vertexGPUBuffer.node.setFloat32Array(n.offset/4,e.data)}break;case Ft.compose:for(let i=0;i<this.vertexCount;i++){const n=this._attributeSlotLayouts[0][this._attributeLocation[A]];for(let s=0;s<n.stride;s++){let o=e.data[i*n.stride+s],u=i*(this._vertexBufferLayouts[0].arrayStride/4)+n.offset/4+s;this.vertexGPUBuffer.node.setFloat(o,u)}}break;case Ft.compose_bin:this.vertexGPUBuffer.node.setFloat32Array(0,e.data);break}(t=this.vertexGPUBuffer)==null||t.apply()}}updateAttributes(A){switch(this.geometryType){case Ft.split:for(let e=0;e<this._vertexBufferLayouts.length;e++){const t=this._vertexBufferLayouts[e];let i=A.get(t.name);this.vertexGPUBuffer.node.setFloat32Array(t.offset/4,i.data)}break;case Ft.compose:for(let e=0;e<this.vertexCount;e++)this._attributeSlotLayouts.forEach(t=>{for(let i=0;i<t.length;i++){const n=t[i];let s=A.get(n.name);for(let o=0;o<n.stride;o++){let u=s.data[e*n.stride+o],l=e*(this._vertexBufferLayouts[0].arrayStride/4)+n.offset/4+o;this.vertexGPUBuffer.node.setFloat(u,l)}}});break;case Ft.compose_bin:{let e=A.get(pA.all);this.vertexGPUBuffer.node.setFloat32Array(0,e.data)}break}this.vertexGPUBuffer.apply()}compute(){}destroy(A){this.vertexCount=null,this.geometryType=null,this._vertexBufferLayouts=null,this._attributeSlotLayouts=null,this._attributeLocation=null,this.vertexGPUBuffer&&this.vertexGPUBuffer.destroy(A),this.vertexGPUBuffer=null}}class ob extends Kn{constructor(e){super();a(this,"indicesNode");this.bufferType=xi.IndicesGPUBuffer,this.createIndicesBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX|GPUBufferUsage.INDIRECT,e)}createIndicesBuffer(e,t){let i=iA.device;this.byteSize=t.length*4,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({label:"IndicesGPUBuffer",size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory=new su,this.memoryNodes=new Map,this.memory.allocation(this.byteSize),t&&(this.indicesNode=this.memory.allocation_node(t.length*4),this.indicesNode.setArrayBuffer(0,t),this.apply())}}class ab{constructor(){a(this,"uuid","");a(this,"name");a(this,"indicesGPUBuffer");a(this,"indicesFormat","uint16");a(this,"indicesCount",0)}createIndicesBuffer(A){A.data instanceof Uint16Array?this.indicesFormat="uint16":A.data instanceof Uint32Array&&(this.indicesFormat="uint32"),this.indicesCount=A.data.length,this.indicesGPUBuffer=new ob(A.data)}upload(A){this.indicesGPUBuffer.indicesNode.setArrayBuffer(0,A),this.indicesGPUBuffer.apply()}compute(){}destroy(){this.uuid=null,this.name=null,this.indicesFormat=null,this.indicesCount=null,this.indicesGPUBuffer.destroy(),this.indicesGPUBuffer=null}}class ub{constructor(){a(this,"lodLevels")}}const Ht=class Ht{constructor(){a(this,"instanceID");a(this,"name");a(this,"subGeometries",[]);a(this,"morphTargetsRelative");a(this,"morphTargetDictionary");a(this,"skinNames");a(this,"bindPose");a(this,"blendShapeData");a(this,"vertexDim");a(this,"_bounds");a(this,"_attributeMap");a(this,"_attributes");a(this,"_indicesBuffer");a(this,"_vertexBuffer");a(this,"_onChange",!0);a(this,"_wireframeLines");this.instanceID=ii(),this._attributeMap=new Map,this._attributes=[],this._vertexBuffer=new sb}get indicesBuffer(){return this._indicesBuffer}get vertexBuffer(){return this._vertexBuffer}get vertexAttributes(){return this._attributes}get vertexAttributeMap(){return this._attributeMap}get geometryType(){return this._vertexBuffer.geometryType}set geometryType(A){this._vertexBuffer.geometryType=A}get bounds(){if(!this._bounds){this._bounds=new Qe(new I,new I(1,1,1)),this._bounds.min.x=Number.MAX_VALUE,this._bounds.min.y=Number.MAX_VALUE,this._bounds.min.z=Number.MAX_VALUE,this._bounds.max.x=-Number.MAX_VALUE,this._bounds.max.y=-Number.MAX_VALUE,this._bounds.max.z=-Number.MAX_VALUE;let A=this.getAttribute(pA.position);if(A&&A.data)for(let e=0;e<A.data.length/3;e++){const t=A.data[e*3+0],i=A.data[e*3+1],n=A.data[e*3+2];this._bounds.min.x>t&&(this._bounds.min.x=t),this._bounds.min.y>i&&(this._bounds.min.y=i),this._bounds.min.z>n&&(this._bounds.min.z=n),this._bounds.max.x<t&&(this._bounds.max.x=t),this._bounds.max.y<i&&(this._bounds.max.y=i),this._bounds.max.z<n&&(this._bounds.max.z=n)}this._bounds.setFromMinMax(this._bounds.min,this._bounds.max)}return this._bounds}set bounds(A){this._bounds=A}addSubGeometry(...A){let e=new ub;return e.lodLevels=A,this.subGeometries.push(e),e}generate(A){this._onChange&&(this._onChange=!1,this._indicesBuffer.upload(this.getAttribute(pA.indices).data),this._vertexBuffer.createVertexBuffer(this._attributeMap,A),this._vertexBuffer.updateAttributes(this._attributeMap))}setIndices(A){if(!this._attributeMap.has(pA.indices)){let e={attribute:pA.indices,data:A};this._attributeMap.set(pA.indices,e),this._indicesBuffer=new ab,this._indicesBuffer.createIndicesBuffer(e)}}setAttribute(A,e){if(A==pA.indices)this.setIndices(e);else{let t={attribute:A,data:e};this._attributeMap.set(A,t),this._attributes.push(A)}}getAttribute(A){return this._attributeMap.get(A)}hasAttribute(A){return this._attributeMap.has(A)}genWireframe(){if(this._wireframeLines)return this._wireframeLines;if(this.geometryType==Ft.split||this.geometryType==Ft.compose){let A=this.getAttribute(pA.position),e=this.getAttribute(pA.indices);if(e&&A&&e.data.length>0){let t=A.data,i=[];for(let n=0;n<e.data.length/3;n++){const s=e.data[n*3+0],o=e.data[n*3+1],u=e.data[n*3+2];let l=new I(t[s*3+0],t[s*3+1],t[s*3+2]),c=new I(t[o*3+0],t[o*3+1],t[o*3+2]),h=new I(t[u*3+0],t[u*3+1],t[u*3+2]);i.push(l,c),i.push(c,h),i.push(h,l)}return this._wireframeLines=i,i}}else if(this.geometryType==Ft.compose_bin){let A=this.getAttribute(pA.all),e=this.vertexDim,t=this.getAttribute(pA.indices);if(t&&A&&t.data.length>0){let i=A.data,n=[];for(let s=0;s<t.data.length/3;s++){const o=t.data[s*3+0],u=t.data[s*3+1],l=t.data[s*3+2];let c=new I(i[o*e+0],i[o*e+1],i[o*e+2]),h=new I(i[u*e+0],i[u*e+1],i[u*e+2]),d=new I(i[l*e+0],i[l*e+1],i[l*e+2]);n.push(c,h),n.push(h,d),n.push(d,c)}return this._wireframeLines=n,n}}return null}compute(){this._indicesBuffer&&this._indicesBuffer.compute(),this._vertexBuffer&&this._vertexBuffer.compute()}computeNormals(){let A=this.getAttribute(pA.position),e=this.getAttribute(pA.normal),t=this.getAttribute(pA.indices);if(!A||!e||!t)return this;let i=t.data.length/3,n=Ht.point1,s=Ht.point2,o=Ht.point3,u=Ht.crossA,l=Ht.crossB,c=Ht.crossRet;for(let h=0;h<i;h++){let d=t.data[h*3],f=t.data[h*3+1],p=t.data[h*3+2];n.set(A.data[d*3],A.data[d*3+1],A.data[d*3+2]),s.set(A.data[f*3],A.data[f*3+1],A.data[f*3+2]),o.set(A.data[p*3],A.data[p*3+1],A.data[p*3+2]),I.sub(n,s,u).normalize(),I.sub(n,o,l).normalize();let y=u.crossProduct(l,c).normalize();e.data[d*3]=e.data[f*3]=e.data[p*3]=y.x,e.data[d*3+1]=e.data[f*3+1]=e.data[p*3+1]=y.y,e.data[d*3+2]=e.data[f*3+2]=e.data[p*3+2]=y.z}return this._vertexBuffer.upload(pA.normal,e),this}isPrimitive(){return!1}destroy(A){this.instanceID=null,this.name=null,this.subGeometries=null,this.morphTargetDictionary=null,this._bounds.destroy(),this._bounds=null,this._attributeMap=null,this._attributes=null,this._indicesBuffer.destroy(),this._vertexBuffer.destroy(),this._indicesBuffer=null,this._vertexBuffer=null}};a(Ht,"crossA",I.UP.clone()),a(Ht,"crossB",I.UP.clone()),a(Ht,"crossRet",I.UP.clone()),a(Ht,"point1",I.UP.clone()),a(Ht,"point2",I.UP.clone()),a(Ht,"point3",I.UP.clone());let ti=Ht;class lb extends ti{constructor(e,t,i=1,n=1,s=I.Y_AXIS){super();a(this,"width");a(this,"height");a(this,"segmentW");a(this,"segmentH");a(this,"up");this.width=e,this.height=t,this.segmentW=i,this.segmentH=n,this.up=s,this.buildGeometry(this.up)}buildGeometry(e){var t,i,n,s,o=this.segmentW+1;(this.segmentH+1)*o,this.bounds=new Qe(I.ZERO.clone(),new I(this.width,1,this.height)),n=this.segmentH*this.segmentW*6;let u=(this.segmentW+1)*(this.segmentH+1),l=new Float32Array(u*3),c=new Float32Array(u*3),h=new Float32Array(u*2),d;this.segmentW*this.segmentH*2*3>=Uint16Array.length?d=new Uint32Array(this.segmentW*this.segmentH*2*3):d=new Uint16Array(this.segmentW*this.segmentH*2*3),n=0;for(var f=0,p=0,y=0,_=0;_<=this.segmentH;++_)for(var g=0;g<=this.segmentW;++g){switch(t=(g/this.segmentW-.5)*this.width,i=(_/this.segmentH-.5)*this.height,e){case I.Y_AXIS:l[f++]=t,l[f++]=0,l[f++]=i,c[p++]=0,c[p++]=1,c[p++]=0;break;case I.Z_AXIS:l[f++]=t,l[f++]=-i,l[f++]=0,c[p++]=0,c[p++]=0,c[p++]=1;break;case I.X_AXIS:l[f++]=0,l[f++]=t,l[f++]=i,c[p++]=1,c[p++]=0,c[p++]=0;break;default:l[f++]=t,l[f++]=0,l[f++]=i,c[p++]=0,c[p++]=1,c[p++]=0;break}h[y++]=g/this.segmentW,h[y++]=_/this.segmentH,g!=this.segmentW&&_!=this.segmentH&&(s=g+_*o,d[n++]=s+1,d[n++]=s,d[n++]=s+o,d[n++]=s+1,d[n++]=s+o,d[n++]=s+o+1)}this.setIndices(d),this.setAttribute(pA.position,l),this.setAttribute(pA.normal,c),this.setAttribute(pA.uv,h),this.setAttribute(pA.TEXCOORD_1,h),this.addSubGeometry({indexStart:0,indexCount:d.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0})}}class an{constructor(){a(this,"instanceID");a(this,"name");a(this,"enable",!0);a(this,"_defaultSubShader");a(this,"_shader")}set shader(A){this._shader=A,this._defaultSubShader=A.getDefaultShaders()[0]}get shader(){return this._shader}get doubleSide(){return this._defaultSubShader.doubleSide}set doubleSide(A){this._defaultSubShader.doubleSide=A}get castShadow(){return this._defaultSubShader.shaderState.castShadow}set castShadow(A){let e=this._defaultSubShader.shaderState;A!=e.castShadow&&(e.castShadow=A)}get acceptShadow(){return this._defaultSubShader.shaderState.acceptShadow}set acceptShadow(A){let e=this._defaultSubShader.shaderState;e.acceptShadow!=A&&(e.acceptShadow=A,this._defaultSubShader.noticeShaderChange(),this._defaultSubShader.noticeValueChange())}get blendMode(){return this._defaultSubShader.blendMode}set blendMode(A){this._defaultSubShader.blendMode=A}get depthCompare(){return this._defaultSubShader.depthCompare}set depthCompare(A){this._defaultSubShader.depthCompare=A}get transparent(){return this._defaultSubShader.shaderState.transparent}set transparent(A){this._defaultSubShader.shaderState.transparent=A,A&&(this._defaultSubShader.renderOrder=3e3)}get cullMode(){return this._defaultSubShader.cullMode}set cullMode(A){if(this._defaultSubShader.cullMode!=A){for(let e of this._shader.passShader.values())for(let t of e)t.cullMode=A;this._defaultSubShader.cullMode=A}}get depthWriteEnabled(){return this._defaultSubShader.depthWriteEnabled}set depthWriteEnabled(A){this._defaultSubShader.depthWriteEnabled=A}set useBillboard(A){this._defaultSubShader.setDefine("USE_BILLBOARD",A)}getPass(A){return this._shader.getSubShaders(A)}getAllPass(){return this._shader.getSubShaders(QA.COLOR)}clone(){let A=new an;return A.shader=this.shader.clone(),A}destroy(A){this._shader.destroy(),this._shader=null}setDefine(A,e){this.shader.setDefine(A,e)}setTexture(A,e){this._shader.setTexture(A,e)}setStorageBuffer(A,e){this._shader.setStorageBuffer(A,e)}setUniformBuffer(A,e){this._shader.setStorageBuffer(A,e)}setUniformFloat(A,e){this._shader.setUniformFloat(A,e)}setUniformVector2(A,e){this._shader.setUniformVector2(A,e)}setUniformVector3(A,e){this._shader.setUniformVector3(A,e)}setUniformVector4(A,e){this._shader.setUniformVector4(A,e)}setUniformColor(A,e){this._shader.setUniformColor(A,e)}getUniformFloat(A){return this._shader.getUniform(A).data}getUniformV2(A){return this._shader.getUniformVector2(A)}getUniformV3(A){return this._shader.getUniformVector3(A)}getUniformV4(A){return this._shader.getUniformVector4(A)}getUniformColor(A){return this._shader.getUniformColor(A)}getTexture(A){return this._shader.getTexture(A)}getStorageBuffer(A){return this._shader.getStorageBuffer(A)}getStructStorageBuffer(A){return this._shader.getStructStorageBuffer(A)}getUniformBuffer(A){return this._shader.getUniformBuffer(A)}applyUniform(){this._shader.applyUniform()}}class Pr{constructor(){a(this,"computes");a(this,"passShader");this.computes=[],this.passShader=new Map}addRenderPass(A,e=-1){let t=this.passShader.get(A.passType)||[];e==-1?t.push(A):t.splice(e,-1,A),this.passShader.set(A.passType,t)}removeShader(A,e=-1){let t=this.passShader.get(A.passType);if(t)if(e==-1){let i=t.indexOf(A);i!=-1&&t.splice(i)}else t.splice(e,1)}removeShaderByIndex(A,e=-1){let t=this.passShader.get(A);t&&(e==-1?this.passShader.delete(A):t.splice(e,1))}getSubShaders(A){return this.passShader.get(A)||[]}hasSubShaders(A){return this.passShader.get(A).length>0}getDefaultShaders(){return this.passShader.get(QA.COLOR)}getDefaultColorShader(){return this.passShader.get(QA.COLOR)[0]}setDefine(A,e){for(const t of this.passShader)for(const i of t[1])i.setDefine(A,e)}deleteDefine(A){for(const e of this.passShader)for(const t of e[1])t.deleteDefine(A)}setUniform(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniform(A,e)}setUniformFloat(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniformFloat(A,e)}setUniformVector2(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniformVector2(A,e)}setUniformVector3(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniformVector3(A,e)}setUniformVector4(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniformVector4(A,e)}setUniformColor(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniformColor(A,e)}getUniform(A){return this.getDefaultColorShader().getUniform(A)}getUniformFloat(A){return this.getDefaultColorShader().getUniformFloat(A)}getUniformVector2(A){return this.getDefaultColorShader().getUniformVector2(A)}getUniformVector3(A){return this.getDefaultColorShader().getUniformVector3(A)}getUniformVector4(A){return this.getDefaultColorShader().getUniformVector4(A)}getUniformColor(A){return this.getDefaultColorShader().getUniformColor(A)}setTexture(A,e){for(const t of this.passShader)for(const i of t[1])i.setTexture(A,e);this.setDefine(`USE_${A.toLocaleUpperCase()}`,!0)}getTexture(A){return this.getDefaultColorShader().textures[A]}setUniformBuffer(A,e){for(const t of this.passShader)for(const i of t[1])i.setUniformBuffer(A,e)}getUniformBuffer(A){return this.getDefaultColorShader().getBuffer(A)}setStorageBuffer(A,e){for(const t of this.passShader)for(const i of t[1])i.setStorageBuffer(A,e)}getStorageBuffer(A){return this.getDefaultColorShader().getBuffer(A)}setStructStorageBuffer(A,e){for(const t of this.passShader)for(const i of t[1])i.setStructStorageBuffer(A,e)}getStructStorageBuffer(A){return this.getDefaultColorShader().getBuffer(A)}noticeValueChange(){for(const A of this.passShader)for(const e of A[1])e.noticeValueChange()}destroy(){this.getDefaultColorShader().destroy()}clone(){let A=new Pr,e=this.getDefaultShaders();for(const t of e)A.addRenderPass(t);return A}applyUniform(){for(const A of this.passShader)for(const e of A[1])e.applyUniform()}}var cb=Object.defineProperty,hb=Object.getOwnPropertyDescriptor,db=(r,A,e,t)=>{for(var i=t>1?void 0:t?hb(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&cb(A,e,i),i};let Xd=class extends Pr{constructor(r="QuadGlsl_vs",A="QuadGlsl_fs"){super();let e=new ot(r,A);this.addRenderPass(e);let t=e.shaderState;e.blendMode=ee.NONE,t.frontFace="cw",t.depthWriteEnabled=!1,t.depthCompare=en.always,t.multisample=0,this.setTexture("baseMap",K.res.blackTexture),this.setUniformFloat("x",0),this.setUniformFloat("y",0),this.setUniformFloat("width",100),this.setUniformFloat("height",100)}};Xd=db([$n],Xd);class h0 extends de{constructor(e="QuadGlsl_vs",t="QuadGlsl_fs",i,n=0,s=!1){super();a(this,"width",128);a(this,"height",128);a(this,"quadRenderer");a(this,"material");a(this,"rendererPassState");a(this,"quadShader");let o=i?i.renderTargets:[];this.material=new an,this.quadShader=new Xd(e,t),this.material.shader=this.quadShader,this.quadRenderer=this.addComponent(he),this.quadRenderer.material=this.material,this.quadRenderer.castGI=!1,this.quadRenderer.castShadow=!1,this.quadRenderer.drawType=s?2:0,this.quadRenderer.geometry=new lb(100,100,1,1),this.quadRenderer.material=this.material,this.quadRenderer.__start(),this.quadRenderer._enable=!0,this.quadRenderer.onEnable(),this.rendererPassState=Bi.createRendererPassState(i,"load"),n>0&&(this.rendererPassState.multisample=this.quadShader.getDefaultColorShader().shaderState.multisample,this.rendererPassState.multiTexture=iA.device.createTexture({size:{width:iA.presentationSize[0],height:iA.presentationSize[1]},sampleCount:n,format:o.length>0?o[0].format:iA.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT})),iA.addEventListener(Ls.RESIZE,u=>{this.rendererPassState=Bi.createRendererPassState(i,"load"),n>0&&(this.rendererPassState.multisample=this.quadShader.getDefaultColorShader().shaderState.multisample,this.rendererPassState.multiTexture=iA.device.createTexture({size:{width:iA.presentationSize[0],height:iA.presentationSize[1]},sampleCount:n,format:o.length>0?o[0].format:iA.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}))},this)}renderTarget(e,t,i){let n=e.camera,s=sA.beginRenderPass(i,t.rendererPassState);sA.bindCamera(s,n),t.quadRenderer.nodeUpdate(e,QA.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,QA.COLOR,t.rendererPassState,null,s),sA.endPass(s)}renderToViewQuad(e,t,i,n){let s=e.camera;t.quadShader.setTexture("baseMap",n);let o=sA.beginRenderPass(i,t.rendererPassState);sA.bindCamera(o,s),t.quadRenderer.nodeUpdate(e,QA.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,QA.COLOR,t.rendererPassState,null,o),sA.endPass(o)}}class rr{constructor(){a(this,"storeOp","store");a(this,"loadOp","clear");a(this,"clearValue",[0,0,0,0])}}class Oi{constructor(A,e,t,i,n=!0){a(this,"label");a(this,"customSize",!1);a(this,"renderTargets");a(this,"rtDescriptors");a(this,"zPreTexture");a(this,"depthTexture");a(this,"depthViewIndex",0);a(this,"depthCleanValue",1);a(this,"depthLoadOp","clear");a(this,"isOutTarget",!0);this.renderTargets=A,this.rtDescriptors=e,this.depthTexture=t,this.zPreTexture=i,this.isOutTarget=n}clone2Frame(A){A.renderTargets.push(...this.renderTargets.concat());for(let e=0;e<this.rtDescriptors.length;e++){const t=this.rtDescriptors[e];let i=new rr;i.loadOp=t.loadOp,i.storeOp=t.storeOp,i.clearValue=t.clearValue,A.rtDescriptors.push(i)}A.depthTexture=this.depthTexture,A.zPreTexture=this.zPreTexture,A.customSize=this.customSize}clone(){let A=new Oi([],[]);return this.clone2Frame(A),A}}class Kt extends Tt{constructor(e,t,i=MA.rgba8unorm,n=!1,s,o=1,u=0,l=!0,c=!0){super(e,t,o);a(this,"resolveTarget");a(this,"sampleCount");a(this,"autoResize");a(this,"clear");this.name=ii(),this.autoResize=c,this.useMipmap=n,this.sampleCount=u,this.format=i,this.numberLayer=o,this.clear=l,s!=null?this.usage=s:this.usage=s|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.resize(e,t),c&&iA.addEventListener(Ls.RESIZE,h=>{let{width:d,height:f}=h.data;this.resize(d,f),this._textureChange=!0},this)}resize(e,t){let i=iA.device;this.gpuTexture&&(Tt.delayDestroyTexture(this.gpuTexture),this.gpuTexture=null,this.view=null),this.width=e,this.height=t,this.createTextureDescriptor(e,t,1,this.format,this.usage,this.numberLayer,this.sampleCount),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this.format==MA.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=i.createSampler({})):this.format==MA.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=iA.device.createSampler({}),this.gpuSampler_comparison=iA.device.createSampler({compare:"less",label:"sampler_comparison"})):this.format==MA.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=iA.device.createSampler({}),this.gpuSampler_comparison=iA.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",this.sampleCount>0&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=xr.clamp_to_edge,this.addressModeV=xr.clamp_to_edge,this.gpuSampler=i.createSampler(this)),this._textureChange=!0}create(e,t,i=!0){let n=iA.device;const s=e*4;let o=new Float32Array(e*t*4);const u=n.createBuffer({size:o.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});n.queue.writeBuffer(u,0,o);const l=sA.beginCommandEncoder();l.copyBufferToTexture({buffer:u,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),sA.endCommandEncoder(l)}clone(){let e=new Kt(this.width,this.height,this.format,this.useMipmap,this.usage,this.numberLayer,this.sampleCount,this.clear,this.autoResize);return e.name="clone_"+e.name,e}readTextureToImage(){let e=iA.device,t=iA.windowWidth,i=iA.windowHeight,n=new Float32Array(t*i*4);const s=e.createBuffer({size:n.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return sA.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:s},[t,i]),s.getMappedRange(0,n.byteLength)}}const Es=class Es{static init(){this.rtTextureMap=new Map,this.rtViewQuad=new Map}static createRTTexture(A,e,t,i,n=!1,s=0){let o=this.rtTextureMap.get(A);return o||(A==Ye.colorBufferTex_NAME?o=new Kt(e,t,i,n,void 0,1,s,!1):o=new Kt(e,t,i,n,void 0,1,s,!0),o.name=A,Es.rtTextureMap.set(A,o)),o}static createRTTextureArray(A,e,t,i,n=1,s=!1,o=0){let u=this.rtTextureMap.get(A);return u||(u=new Kt(e,t,i,s,void 0,n,o),u.name=A,Es.rtTextureMap.set(A,u)),u}static createViewQuad(A,e,t,i,n=0){let s=new Oi([i],[new rr]),o=new h0(e,t,s,n);return Es.rtViewQuad.set(A,o),o}static getTexture(A){return this.rtTextureMap.get(A)}static CreateSplitTexture(A){let e=this.getTexture(Ye.colorBufferTex_NAME),t=this.getTexture(A+"_split");return t||(t=this.createRTTexture(A+"_split",e.width,e.height,e.format,!1)),t}static WriteSplitColorTexture(A){let e=this.getTexture(Ye.colorBufferTex_NAME),t=this.getTexture(A+"_split");const i=sA.beginCommandEncoder();i.copyTextureToTexture({texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{width:t.width,height:t.height,depthOrArrayLayers:1}),sA.endCommandEncoder(i)}};a(Es,"rtTextureMap"),a(Es,"rtViewQuad");let Gt=Es;class fb{constructor(A){a(this,"command");a(this,"encoder");a(this,"rendererPassStates");a(this,"rtFrame");this.rtFrame=A,this.rendererPassStates=[]}clean(){this.rendererPassStates.length=0,sA.cleanCache()}beginContinueRendererPassState(A="load",e="load"){if(this.rendererPassStates.length>0){let t=this.rtFrame.clone();for(const n of t.rtDescriptors)n.loadOp="load";t.depthLoadOp=e;let i=Bi.createRendererPassState(t,A);return this.rendererPassStates.push(i),i}else{this.rtFrame.depthLoadOp=e;let t=Bi.createRendererPassState(this.rtFrame,A);return this.rendererPassStates.push(t),t}}get rendererPassState(){return this.rendererPassStates[this.rendererPassStates.length-1]}beginOpaqueRenderPass(){this.beginContinueRendererPassState("clear","clear"),this.begineNewCommand(),this.beginNewEncoder()}beginTransparentRenderPass(){this.beginContinueRendererPassState("load","load"),this.begineNewCommand(),this.beginNewEncoder()}endRenderPass(){this.endEncoder(),this.endCommand()}begineNewCommand(){return this.command=sA.beginCommandEncoder(),this.command}endCommand(){sA.endCommandEncoder(this.command),this.command=null}beginNewEncoder(){return this.encoder=sA.beginRenderPass(this.command,this.rendererPassState),this.encoder}endEncoder(){sA.endPass(this.encoder),this.encoder=null}}class eo extends oa{constructor(){super();a(this,"rendererPassState");a(this,"splitRendererPassState");a(this,"useRenderBundle",!1);a(this,"debugViewQuads");a(this,"debugTextures");a(this,"renderContext");a(this,"_rendererType");a(this,"_rtFrame");this.debugTextures=[],this.debugViewQuads=[]}get passType(){return this._rendererType}set passType(e){this._rendererType=e}setRenderStates(e){if(this._rtFrame=e,e){this.rendererPassState=Bi.createRendererPassState(e);let t=e.clone();t.depthLoadOp="load";for(const i of t.rtDescriptors)i.loadOp="load";this.splitRendererPassState=Bi.createRendererPassState(t)}this.renderContext=new fb(e)}setIrradiance(e,t){this.rendererPassState.irradianceBuffer=[e,t]}compute(e,t){}render(e,t,i,n=!1){sA.cleanCache();let s=e.camera,o=e.scene;this.rendererPassState.camera3D=s;let u=IA.instance.getRenderNodes(o,s),l=this.renderBundleOp(e,u,t,i),c=n?[]:this.renderBundleTr(e,u,t,i);{let h=sA.beginCommandEncoder(),d=sA.beginRenderPass(h,this.rendererPassState);l.length>0&&d.executeBundles(l),!n&&IA.instance.sky&&(sA.bindCamera(d,s),IA.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,i,d)),this.drawRenderNodes(e,d,h,u.opaqueList,t),sA.endPass(d),sA.endCommandEncoder(h)}{let h=sA.beginCommandEncoder(),d=sA.beginRenderPass(h,this.rendererPassState);c.length>0&&d.executeBundles(c),n||(sA.bindCamera(d,s),this.drawRenderNodes(e,d,h,u.transparentList,t)),sA.endPass(d),sA.endCommandEncoder(h)}}nodeUpload(e,t,i){}occlusionRenderNodeTest(e,t,i){return i?i.occlusionRenderNodeTest(e)>0:!0}renderOp(e,t,i,n,s){}renderTr(e,t,i,n,s){}renderBundleOp(e,t,i,n){let s=IA.instance.getOpRenderGroup(e.scene);if(s){let o=[];return s.renderGroup.forEach(u=>{if(u.bundleMap.has(this._rendererType))o.push(u.bundleMap.get(this._rendererType));else{let l=sA.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor);this.recordRenderBundleNode(e,l,u.renderNodes,n);let c=l.finish();u.bundleMap.set(this._rendererType,c),o.push(c)}}),o}return[]}renderBundleTr(e,t,i,n){let s=IA.instance.getTrRenderGroup(e.scene);if(s){let o=[];return s.renderGroup.forEach(u=>{if(u.bundleMap.has(this._rendererType))o.push(u.bundleMap.get(this._rendererType));else{let l=sA.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor);this.recordRenderBundleNode(e,l,u.renderNodes,n);let c=l.finish();u.bundleMap.set(this._rendererType,c),o.push(c)}}),o}return[]}recordRenderBundleNode(e,t,i,n){sA.bindCamera(t,e.camera),sA.bindGeometryBuffer(t,i[0].geometry);for(let s=0;s<i.length;++s){let o=i[s];o.transform.worldMatrix.index,o.transform.enable&&o.recordRenderPass2(e,this._rendererType,this.rendererPassState,n,t)}}drawRenderNodes(e,t,i,n,s,o){sA.bindCamera(t,e.camera);for(let u=K.setting.render.drawOpMin;u<Math.min(n.length,K.setting.render.drawOpMax);++u){let l=n[u];l.transform.enable&&l.enable&&l.renderPass2(e,this._rendererType,this.rendererPassState,o,t)}}setDebugTexture(e){for(let t=0;t<e.length;t++){let i=e[t],n="Quad_vert_wgsl",s="Quad_frag_wgsl";switch(i.format){case MA.rgba8sint:case MA.rgba8uint:case MA.rgba8unorm:case MA.rgba16float:case MA.rgba32float:s="Quad_frag_wgsl";break;case MA.depth24plus:case MA.depth32float:s="Quad_depth2d_frag_wgsl",i.textureBindingLayout.viewDimension=="cube"&&(s="Quad_depthCube_frag_wgsl");break}let o=new h0(n,s,new Oi([],[]));this.debugTextures.push(e[t]),this.debugViewQuads.push(o)}}}class pb extends eo{constructor(){super(),this.passType=QA.COLOR}render(A,e,t,i=!1){this.renderContext.clean();let n=A.scene,s=A.camera;this.rendererPassState.camera3D=s;let o=IA.instance.getRenderNodes(n,s),u=this.renderBundleOp(A,o,e,t),l=i?[]:this.renderBundleTr(A,o,e,t);Er.start("colorPass Renderer");{Er.start("ColorPass Draw Opaque"),this.renderContext.beginOpaqueRenderPass(),this.renderContext.command;let c=this.renderContext.encoder;sA.bindCamera(c,s),u.length>0&&(IA.instance.getOpRenderGroup(n),c.executeBundles(u)),!i&&IA.instance.sky&&(sA.bindCamera(c,s),IA.instance.sky.preInit||IA.instance.sky.nodeUpdate(A,this._rendererType,this.rendererPassState,t),IA.instance.sky.renderPass2(A,this._rendererType,this.rendererPassState,t,c)),o.opaqueList&&(sA.bindCamera(c,s),this.drawNodes(A,this.renderContext,o.opaqueList,e,t),this.renderContext.endRenderPass(),Er.end("ColorPass Draw Opaque"))}{Er.start("ColorPass Draw Transparent"),this.renderContext.beginTransparentRenderPass(),this.renderContext.command;let c=this.renderContext.encoder;l.length>0&&c.executeBundles(l),!i&&o.transparentList&&(sA.bindCamera(c,s),this.drawNodes(A,this.renderContext,o.transparentList,e,t));let h=IA.instance.getGraphicList();for(let d=0;d<h.length;d++){const f=h[d];f.transform.worldMatrix.index,f.nodeUpdate(A,this._rendererType,this.splitRendererPassState,t),f.renderPass2(A,this._rendererType,this.splitRendererPassState,t,c)}this.renderContext.endRenderPass(),Er.end("ColorPass Draw Transparent")}Er.end("colorPass Renderer")}drawNodes(A,e,t,i,n){let s=IA.instance.getRenderShaderCollect(A);if(s){for(const o of s){let u=o[1];for(const l of u){let c=l[1];if(c.preInit){c.nodeUpdate(A,this._rendererType,this.rendererPassState,n);break}}}for(let o=K.setting.render.drawOpMin;o<Math.min(t.length,K.setting.render.drawOpMax);++o){let u=t[o];u.transform.enable&&u.enable&&(u.preInit||u.nodeUpdate(A,this._rendererType,this.rendererPassState,n),u.renderPass(A,this.passType,this.renderContext))}}}occlusionRenderNodeTest(A,e,t){return t.zDepthRenderNodeTest(e)>0}}const Hr=class Hr extends Oi{constructor(){super([],[])}crateGBuffer(A,e,t){let i=this.renderTargets,n=this.rtDescriptors,s=Gt.createRTTexture(A+Ye.colorBufferTex_NAME,e,t,MA.rgba16float,!1),o=Gt.createRTTexture(A+Ye.positionBufferTex_NAME,e,t,MA.rgba16float,!1),u=Gt.createRTTexture(A+Ye.normalBufferTex_NAME,e,t,MA.rgba8unorm,!1),l=Gt.createRTTexture(A+Ye.materialBufferTex_NAME,e,t,MA.rgba8unorm,!1);Hr.bufferTexture&&(i.push(s),i.push(o),i.push(u),i.push(l));let c=new rr;c.loadOp="clear";let h=new Kt(e,t,MA.depth24plus,!1);h.name="depthTexture";let d=new rr;d.loadOp="load",this.depthTexture=h,Hr.bufferTexture&&(n.push(c),n.push(new rr),n.push(new rr),n.push(new rr))}getColorMap(){return this.renderTargets[0]}getPositionMap(){return this.renderTargets[1]}getNormalMap(){return this.renderTargets[2]}getMaterialMap(){return this.renderTargets[3]}static getGBufferFrame(A){let e;if(Hr.gBufferMap.has(A))e=Hr.gBufferMap.get(A);else{e=new Hr;let t=iA.presentationSize;e.crateGBuffer(A,t[0],t[1]),Hr.gBufferMap.set(A,e)}return e}clone(){let A=new Hr;return this.clone2Frame(A),A}};a(Hr,"gBufferMap",new Map),a(Hr,"bufferTexture",!1);let Zo=Hr;class J3{constructor(){a(this,"frustumCullingList");a(this,"zVisibleList");a(this,"_renderList");this._renderList=new Map}occlusionRenderNodeTest(A){return K.setting.occlusionQuery.enable?this.frustumCullingList?this.frustumCullingList[A]:0:1}zDepthRenderNodeTest(A){return this.zVisibleList?this.zVisibleList[A]:0}update(A,e){}collect(A,e){}renderCommitTesting(A,e){return!0}}a(J3,"enable",!0);class Cl extends Kn{constructor(A,e){super(),this.bufferType=xi.ComputeGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,A,e,"ComputeGPUBuffer")}}class gb{constructor(A,e){a(this,"clusterBuffer");a(this,"lightAssignBuffer");a(this,"assignTableBuffer");a(this,"clustersUniformBuffer");this.clusterBuffer=new Cl(A*2*4),this.clustersUniformBuffer=new i1(10),this.clustersUniformBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.lightAssignBuffer=new Cl(A*e),this.lightAssignBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.assignTableBuffer=new Cl(A*4),this.assignTableBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(A,e,t,i,n,s,o,u,l,c){this.clustersUniformBuffer.setFloat("clusterTileX",i),this.clustersUniformBuffer.setFloat("clusterTileY",n),this.clustersUniformBuffer.setFloat("clusterTileZ",s),this.clustersUniformBuffer.setFloat("numLights",o),this.clustersUniformBuffer.setFloat("maxNumLightsPerCluster",u),this.clustersUniformBuffer.setFloat("near",l),this.clustersUniformBuffer.setFloat("far",c),this.clustersUniformBuffer.setFloat("screenWidth",A),this.clustersUniformBuffer.setFloat("screenHeight",e),this.clustersUniformBuffer.setFloat("clusterPix",t),this.clustersUniformBuffer.apply()}}class et{}a(et,"clusterTileX",16),a(et,"clusterTileY",16),a(et,"clusterTileZ",32);let mb=`
  #include "GlobalUniform"

        struct ClusterBox{
            minPoint:vec4<f32>,
            maxPoint:vec4<f32>
        }

        struct ClustersUniform{
            clusterTileX:f32,
            clusterTileY:f32,
            clusterTileZ:f32,
            numLights:f32,
            maxNumLightsPerCluster:f32,
            near:f32,
            far:f32,
            screenWidth:f32,
            screenHeight:f32,
            clusterPix:f32
        }
     
        @group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
        @group(0) @binding(2) var<storage,read_write> clusterBuffer : array<ClusterBox>;


        var<private> clusterTileX:f32 ;
        var<private> clusterTileY:f32 ;
        var<private> clusterTileZ:f32 ;
        fn convertNDCToView( v4:vec4<f32> ) -> vec4<f32> {
            var v = globalUniform.pvMatrixInv * v4 ;
            v = v / v.w ;
            return v ;
        }

        fn gridToIndex(i:vec3<u32>) -> u32{
            return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
        }

        fn ScreenToView(screen : vec4<f32>) -> vec4<f32> {
            let texCoord = screen.xy / vec2<f32>(clustersUniform.screenWidth, clustersUniform.screenHeight);
            let clip = vec4<f32>(vec2<f32>(texCoord.x, 1.0 - texCoord.y) * 2.0 - vec2<f32>(1.0, 1.0), screen.z, screen.w);
            return convertNDCToView(clip);
          }

        fn LineIntersectionToZPlane( eye:vec3<f32> , ndcPoint :vec3<f32> , z:f32) -> vec3<f32>
        {
            var normal = vec3<f32>(0.0, 0.0, 1.0);
            var dir = ndcPoint - eye;
            var t = (z - dot(normal, eye)) / dot(normal, dir);
            var result = eye + t * dir;
            return result;
        }

        @compute @workgroup_size(${et.clusterTileX},${et.clusterTileY},1)
        fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){

            let i = local_invocation_id.x ;
            let j = local_invocation_id.y ;
            let k = workgroup_id.x ;

            clusterTileX = clustersUniform.clusterTileX;
            clusterTileY = clustersUniform.clusterTileY;
            clusterTileZ = clustersUniform.clusterTileZ;

            let clusterGrid = vec3<u32>(i,j,k);
            let tileIndex = gridToIndex(clusterGrid);
            let eyePos = vec3<f32>(0.0, 0.0, 0.0);

            let tx = clusterTileX;
            let ty = clusterTileY;
            let tz = clusterTileZ ;
            let near = clustersUniform.near ;
            let far = clustersUniform.far ;

            let titleSize = vec2<f32>( globalUniform.windowWidth / tx , globalUniform.windowHeight / ty ) ;

            var maxPointSs = vec4<f32>(vec2<f32>(f32(i) + 1.0, f32(j) + 1.0) * titleSize, 0.0, 1.0);
	        var minPointSs = vec4<f32>(vec2<f32>(f32(i) , f32(j)) * titleSize, 0.0, 1.0);

            var maxPointVs = ScreenToView(maxPointSs).xyz;
	        var minPointVs = ScreenToView(minPointSs).xyz;
 
            var tileNear = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, f32(k) / clustersUniform.clusterTileZ);
	        var tileFar = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, (f32(k) + 1.0) / clustersUniform.clusterTileZ);

            var minPointNear = LineIntersectionToZPlane(eyePos, minPointVs, tileNear);
            var minPointFar = LineIntersectionToZPlane(eyePos, minPointVs, tileFar);
            var maxPointNear = LineIntersectionToZPlane(eyePos, maxPointVs, tileNear);
            var maxPointFar = LineIntersectionToZPlane(eyePos, maxPointVs, tileFar);

            var minPointAABB = min(min(minPointNear, minPointFar), min(maxPointNear, maxPointFar));
            var maxPointAABB = max(max(minPointNear, minPointFar), max(maxPointNear, maxPointFar));

            var clusterBox : ClusterBox ;
            clusterBox.minPoint = vec4<f32>(minPointAABB,f32(tileIndex)) ;
            clusterBox.maxPoint = vec4<f32>(maxPointAABB,f32(tileIndex)) ;
            clusterBuffer[tileIndex] = clusterBox;
        }
`,yb=`
#include "GlobalUniform"

struct ClusterBox{
    min:vec4<f32>,
    max:vec4<f32>
}

struct Light {
    index:f32,
    lightType:i32,
    radius:f32,
    linear:f32,

    position:vec3<f32>,
    lightMatrixIndex:f32,

    direction:vec3<f32>,
    quadratic:f32,

    lightColor:vec3<f32>,
    intensity:f32,

    innerCutOff :f32,
    outerCutOff:f32,
    range :f32,
    castShadow:f32,

    lightTangent:vec3<f32>,
    ies:f32,
};

struct LightIndex
{
    count:f32,
    start:f32,
    empty0:f32,
    empty1:f32,
};

struct ClustersUniform{
    clusterTileX:f32,
    clusterTileY:f32,
    clusterTileZ:f32,
    numLights:f32,
    maxNumLightsPerCluster:f32,
    near:f32,
    far:f32,
    screenWidth:f32,
    screenHeight:f32,
    clusterPix:f32, 
}

var<private> clusterTileX:f32 ;
var<private> clusterTileY:f32 ;
var<private> clusterTileZ:f32 ;

// @group(0) @binding(1) var<storage, read> models : Uniforms;
@group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
@group(0) @binding(2) var<storage,read> clusterBuffer : array<ClusterBox>;
@group(0) @binding(3) var<storage,read> lightBuffer : array<Light>; 
@group(0) @binding(4) var<storage,read_write> lightAssignBuffer : array<f32>;
@group(0) @binding(5) var<storage,read_write> assignTable : array<LightIndex>;

fn gridToIndex(i:vec3<u32>) -> u32{
    return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
}

fn GetSqdisPointAABB( pos:vec3<f32>,  cluster:ClusterBox  ) -> f32
{
    var sqDistance = 0.0;
    for (var i = 0u; i < 3u; i+=1u)
    {
        var v = pos[i];
        if (v < cluster.min[i])
        {
            let diff = cluster.min[i] - v;
            sqDistance += diff * diff;
        }

        if (v > cluster.max[i])
        {
            let diff =  v - cluster.max[i];
            sqDistance += diff * diff;
        }
    }
    return sqDistance;
}

fn TestSphereAABB( box:ClusterBox ,light:Light ) -> bool
{
    let lightPos = light.position.xyz;
    var radius = light.range * 2.0 ;
    var spherePos = globalUniform.viewMat * vec4<f32>(lightPos.xyz, 1.0) ;
    spherePos = spherePos / spherePos.w ;
    let sqDistance = GetSqdisPointAABB(spherePos.xyz , box);
    return sqDistance <= (radius*radius);
}

@compute @workgroup_size(${et.clusterTileX},${et.clusterTileY},1)
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
    // cluster ID 
    let i = local_invocation_id.x ;
    let j = local_invocation_id.y ;
    let k = workgroup_id.x ;

    clusterTileX = clustersUniform.clusterTileX;
    clusterTileY = clustersUniform.clusterTileY;
    clusterTileZ = clustersUniform.clusterTileZ;

    var clusterId_3D = vec3<u32>(i,j,k);
    var clusterId_1D = gridToIndex(clusterId_3D);

    var box:ClusterBox = clusterBuffer[clusterId_1D];

    var startIndex = i32(clusterId_1D) * i32(clustersUniform.maxNumLightsPerCluster) ;
    var endIndex = startIndex;

    for(var lightID = 0 ; lightID < i32(clustersUniform.numLights) ; lightID+=1)
    {
        let li:Light = lightBuffer[lightID];
        if(!TestSphereAABB(box, li)) {
            continue;
        }
        lightAssignBuffer[endIndex] = f32(lightID);
        endIndex++;
    }

    var idx: LightIndex;
    idx.count = f32(endIndex-startIndex);
    idx.start = f32(startIndex);
    idx.empty0 = f32(clusterId_1D);
    idx.empty1 = f32(clustersUniform.maxNumLightsPerCluster);
    assignTable[clusterId_1D] = idx;
}
`;class Eb extends eo{constructor(e){super();a(this,"maxNumLightsPerCluster",64);a(this,"clusterPix",1);a(this,"clusterLightingBuffer");a(this,"_currentLightCount",0);a(this,"_clusterGenerateCompute");a(this,"_clusterLightingCompute");a(this,"_useCamera");a(this,"resize",!1);this.passType=QA.Cluster,this.initCompute(e)}initCompute(e){this._clusterGenerateCompute=new Ii(mb),this._clusterLightingCompute=new Ii(yb);let t=iA.presentationSize,i=et.clusterTileX*et.clusterTileY*et.clusterTileZ,n=e.camera,s=n.near,o=n.far;this.clusterLightingBuffer=new gb(i,this.maxNumLightsPerCluster),this.clusterLightingBuffer.update(t[0],t[1],this.clusterPix,et.clusterTileX,et.clusterTileY,et.clusterTileZ,0,this.maxNumLightsPerCluster,s,o),this._clusterGenerateCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterGenerateCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer);let u=Le.getLightEntries(e.scene);this._clusterLightingCompute.setStorageBuffer("models",Le.modelMatrixBindGroup.matrixBufferDst),this._clusterLightingCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterLightingCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),this._clusterLightingCompute.setStorageBuffer("lightBuffer",u.storageGPUBuffer),this._clusterLightingCompute.setStorageBuffer("lightAssignBuffer",this.clusterLightingBuffer.lightAssignBuffer),this._clusterLightingCompute.setStorageBuffer("assignTable",this.clusterLightingBuffer.assignTableBuffer),this.resize=!0}render(e,t){let i=e.scene,n=IA.instance.getLights(i);if(this._useCamera!=e.camera){this._useCamera=e.camera;let u=Le.getCameraGroup(this._useCamera);this._clusterGenerateCompute.setUniformBuffer("globalUniform",u.uniformGPUBuffer),this._clusterLightingCompute.setUniformBuffer("globalUniform",u.uniformGPUBuffer)}this._currentLightCount!=n.length&&(this._currentLightCount=n.length,this.clusterLightingBuffer.clustersUniformBuffer.setFloat("numLights",n.length),this.clusterLightingBuffer.clustersUniformBuffer.apply(),this._clusterGenerateCompute.workerSizeX=et.clusterTileZ,this._clusterLightingCompute.workerSizeX=et.clusterTileZ);let s=iA.presentationSize;this.clusterLightingBuffer.update(s[0],s[1],this.clusterPix,et.clusterTileX,et.clusterTileY,et.clusterTileZ,n.length,this.maxNumLightsPerCluster,e.camera.near,e.camera.far),this.resize=!1;let o=sA.beginCommandEncoder();sA.computeCommand(o,[this._clusterGenerateCompute,this._clusterLightingCompute]),sA.endCommandEncoder(o)}}class tn extends Tt{constructor(e,t,i=MA.rgba8unorm,n=!1,s,o=1,u=0,l=!0){super(e,t,o);a(this,"resolveTarget");a(this,"sampleCount");iA.device,this.name=ii(),this.useMipmap=n,this.sampleCount=u,this.format=i,this.numberLayer=o,s!=null?this.usage=s:this.usage=s|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.resize(e,t)}clone(){let e=new tn(this.width,this.height,this.format,this.useMipmap,this.usage,this.numberLayer,this.sampleCount);return e.name="clone_"+e.name,e}resize(e,t){let i=iA.device;this.gpuTexture&&(Tt.delayDestroyTexture(this.gpuTexture),this.gpuTexture=null,this.view=null),this.width=e,this.height=t,this.createTextureDescriptor(e,t,1,this.format,this.usage,this.numberLayer,this.sampleCount),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this.format==MA.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=i.createSampler({})):this.format==MA.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=iA.device.createSampler({}),this.gpuSampler_comparison=iA.device.createSampler({compare:"less",label:"sampler_comparison"})):this.format==MA.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=iA.device.createSampler({}),this.gpuSampler_comparison=iA.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",this.sampleCount>0&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=xr.clamp_to_edge,this.addressModeV=xr.clamp_to_edge,this.gpuSampler=i.createSampler(this)),this._textureChange=!0}create(e,t,i=!0){let n=iA.device;const s=e*4;let o=new Float32Array(e*t*4);const u=n.createBuffer({size:o.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});n.queue.writeBuffer(u,0,o);const l=sA.beginCommandEncoder();l.copyBufferToTexture({buffer:u,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),sA.endCommandEncoder(l)}readTextureToImage(){let e=iA.device,t=iA.windowWidth,i=iA.windowHeight,n=new Float32Array(t*i*4);const s=e.createBuffer({size:n.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return sA.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:s},[t,i]),s.getMappedRange(0,n.byteLength)}}class Cb extends de{constructor(e=.001,t=1e4,i=90,n=!1){super();a(this,"up_camera");a(this,"down_camera");a(this,"left_camera");a(this,"right_camera");a(this,"front_camera");a(this,"back_camera");this.initCubeCamera(e,t,i,n)}set label(e){this.up_camera.name=e+"up",this.down_camera.name=e+"down",this.left_camera.name=e+"left",this.right_camera.name=e+"right",this.front_camera.name=e+"front",this.back_camera.name=e+"back"}initCubeCamera(e,t,i=90,n=!1){this.up_camera=it.createCamera3DObject(this,"up"),this.down_camera=it.createCamera3DObject(this,"down"),this.left_camera=it.createCamera3DObject(this,"left"),this.right_camera=it.createCamera3DObject(this,"right"),this.front_camera=it.createCamera3DObject(this,"front"),this.back_camera=it.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=n,this.down_camera.isShadowCamera=n,this.left_camera.isShadowCamera=n,this.right_camera.isShadowCamera=n,this.front_camera.isShadowCamera=n,this.back_camera.isShadowCamera=n;let s=1;this.up_camera.perspective(i,s,e,t),this.up_camera.lookAt(I.ZERO,I.UP,I.DOWN),this.up_camera.object3D.scaleX=-1,this.up_camera.object3D.rotationY=180,this.down_camera.perspective(i,s,e,t),this.down_camera.lookAt(I.ZERO,I.DOWN,I.DOWN),this.down_camera.object3D.scaleX=-1,this.down_camera.object3D.rotationY=180,this.left_camera.perspective(i,s,e,t),this.left_camera.lookAt(I.ZERO,I.LEFT),this.left_camera.object3D.scaleX=-1,this.right_camera.perspective(i,s,e,t),this.right_camera.lookAt(I.ZERO,I.RIGHT),this.right_camera.object3D.scaleX=-1,this.front_camera.perspective(i,s,e,t),this.front_camera.lookAt(I.ZERO,I.FORWARD),this.front_camera.object3D.scaleX=-1,this.back_camera.perspective(i,s,e,t),this.back_camera.lookAt(I.ZERO,I.BACK),this.back_camera.object3D.scaleX=-1,this.up_camera.type=Re.shadow,this.down_camera.type=Re.shadow,this.left_camera.type=Re.shadow,this.right_camera.type=Re.shadow,this.front_camera.type=Re.shadow,this.back_camera.type=Re.shadow}}class _b extends Tt{constructor(A,e,t){super(A,e,t),this.format=MA.depth32float,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="cube-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:6*this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=this.getGPUTexture()}internalCreateView(){this.viewDescriptor={dimension:"cube-array"},this.view=this.getGPUView()}internalCreateSampler(){this.gpuSampler=iA.device.createSampler({minFilter:qi.linear,magFilter:qi.linear}),this.gpuSampler_comparison=iA.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Sb extends eo{constructor(){super();a(this,"shadowPassCount");a(this,"_forceUpdate",!1);a(this,"_shadowCameraDic");a(this,"shadowCamera");a(this,"cubeArrayTexture");a(this,"colorTexture");a(this,"shadowSize",1024);this.passType=QA.POINT_SHADOW,this._shadowCameraDic=new Map,this.cubeArrayTexture=new _b(this.shadowSize,this.shadowSize,8),this.colorTexture=new tn(this.shadowSize,this.shadowSize,MA.bgra8unorm,!1),te.getInstance().attached(this.cubeArrayTexture,this)}getShadowCamera(e,t){var n;let i;if(this._shadowCameraDic.has(t))i=this._shadowCameraDic.get(t);else{let s=new Cb(e.camera.near,e.camera.far,90,!0);s.label=t.name;let o=[],u=[];for(let l=0;l<6;l++){let c=new tn(this.shadowSize,this.shadowSize,this.cubeArrayTexture.format,!1),h=new Oi([this.colorTexture],[new rr]);c.name="shadowDepthTexture_"+t.name+l+"_face",h.depthTexture=c,h.label="shadowRender",h.customSize=!0;let d=Bi.createRendererPassState(h);u[l]=d,o[l]=c,(n=K.getRenderJob(e).postRenderer)==null||n.setDebugTexture([c])}i={cubeCamera:s,depthTexture:o,rendererPassState:u},this._shadowCameraDic.set(t,i)}return i}render(e,t){if(!K.setting.shadow.enable)return;this.shadowPassCount=0,e.camera;let i=e.scene,n=Ir.getPointShadowLightWhichScene(i),s=n.length;for(let o=0;o<s;o++){let u=n[o];if(u.lightData.lightType!=At.DirectionLight&&u.lightData.castShadowIndex>-1&&(u.needUpdateShadow||this._forceUpdate||be.frame<5||u.realTimeShadow)){u.needUpdateShadow=!1;let l=this.getShadowCamera(e,u),c=u.transform.worldPosition;l.cubeCamera.x=c.x,l.cubeCamera.y=c.y,l.cubeCamera.z=c.z;let h;l.cubeCamera.transform.updateWorldMatrix(!0),t.update(l.cubeCamera.right_camera,i),h=IA.instance.getRenderNodes(i,l.cubeCamera.right_camera),this.renderSceneOnce(0,l,e,l.cubeCamera.right_camera,h,t),t.update(l.cubeCamera.left_camera,i),h=IA.instance.getRenderNodes(i,l.cubeCamera.left_camera),this.renderSceneOnce(1,l,e,l.cubeCamera.left_camera,h,t),t.update(l.cubeCamera.up_camera,i),h=IA.instance.getRenderNodes(i,l.cubeCamera.up_camera),this.renderSceneOnce(2,l,e,l.cubeCamera.up_camera,h,t),t.update(l.cubeCamera.down_camera,i),h=IA.instance.getRenderNodes(i,l.cubeCamera.down_camera),this.renderSceneOnce(3,l,e,l.cubeCamera.down_camera,h,t),t.update(l.cubeCamera.front_camera,i),h=IA.instance.getRenderNodes(i,l.cubeCamera.front_camera),this.renderSceneOnce(4,l,e,l.cubeCamera.front_camera,h,t),t.update(l.cubeCamera.back_camera,i),h=IA.instance.getRenderNodes(i,l.cubeCamera.back_camera),this.renderSceneOnce(5,l,e,l.cubeCamera.back_camera,h,t);let d=sA.beginCommandEncoder();for(let f=0;f<6;f++)d.copyTextureToTexture({texture:l.depthTexture[f].getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.cubeArrayTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:u.shadowIndex*6+f}},{width:this.shadowSize,height:this.shadowSize,depthOrArrayLayers:1});sA.endCommandEncoder(d)}}this._forceUpdate=!1}renderSceneOnce(e,t,i,n,s,o){this.rendererPassState=t.rendererPassState[e];let u=sA.beginCommandEncoder(),l=sA.beginRenderPass(u,this.rendererPassState);l.setViewport(0,0,this.shadowSize,this.shadowSize,0,1),l.setScissorRect(0,0,this.shadowSize,this.shadowSize),n.onUpdate(),n.transform.updateWorldMatrix(!0);let c=IA.instance.getRenderShaderCollect(i);for(const h of c){let d=h[1];for(const f of d){let p=f[1];if(p.preInit){p.nodeUpdate(i,this._rendererType,this.rendererPassState,null);break}}}this.drawShadowRenderNodes(i,n,l,s.opaqueList,o),this.drawShadowRenderNodes(i,n,l,s.transparentList,o),sA.endPass(l),sA.endCommandEncoder(u)}drawShadowRenderNodes(e,t,i,n,s){if(sA.bindCamera(i,t),n)for(let o=K.setting.render.drawOpMin;o<Math.min(n.length,K.setting.render.drawOpMax);++o){let u=n[o];if(u.transform.worldMatrix.index,!!u.transform.enable&&u.enable){u.preInit||u.nodeUpdate(e,this._rendererType,this.rendererPassState);for(let l of u.materials){let c=l.getPass(this._rendererType);if(!c||c.length==0)continue;sA.bindGeometryBuffer(i,u.geometry);let h=u.object3D.transform._worldMatrix;for(let d of c){const f=d;if(f.pipeline){f.setUniformFloat("cameraFar",t.far),f.setUniformVector3("lightWorldPos",t.transform.worldPosition),f.materialDataUniformBuffer.apply(),sA.bindPipeline(i,f);let p=u.geometry.subGeometries;for(const y of p){let _=y.lodLevels[u.lodLevel];sA.drawIndexed(i,_.indexCount,1,_.indexStart,0,h.index)}}}}}}}}class vb extends Tt{constructor(A,e,t=MA.depth32float,i=4){super(A,e,i),this.format=t,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=this.getGPUTexture()}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.getGPUView()}internalCreateSampler(){this.gpuSampler=iA.device.createSampler({}),this.gpuSampler_comparison=iA.device.createSampler({compare:"less",label:"sampler_comparison"})}}class wb extends eo{constructor(){super();a(this,"shadowPassCount");a(this,"depth2DArrayTexture");a(this,"rendererPassStates");a(this,"_forceUpdate",!1);a(this,"_shadowPos",new I);a(this,"_shadowCameraTarget",new I);this.setShadowMap(K.setting.shadow.shadowSize,bi.Cascades),this.passType=QA.SHADOW}setShadowMap(e,t){this.rendererPassStates=[],this.depth2DArrayTexture=new vb(e,e,MA.depth32float,8),te.getInstance().attached(this.depth2DArrayTexture,this);for(let i=0;i<8;i++){let n=new Oi([],[]);const s=new tn(e,e,MA.depth32float,!1);s.name=`shadowDepthTexture_${i}`,n.depthTexture=s,n.label="shadowRender",n.customSize=!0,n.depthCleanValue=1;let o=Bi.createRendererPassState(n);this.rendererPassStates[i]=o}}render(e,t){let i=K.setting.shadow;if(!i.enable)return;let n=e.camera,s=e.scene;if(this.shadowPassCount=0,!i.needUpdate||be.frame%i.updateFrameRate!=0)return;let o=Ir.getDirectShadowLightWhichScene(s),u=i.shadowSize;const l=bi.Cascades;for(let c of o){const h=c;let d=h.shadowIndex;this.rendererPassState=this.rendererPassStates[d],u=this.rendererPassState.depthTexture.width;let f=IA.instance.getRenderShaderCollect(e);for(const p of f){let y=p[1];for(const _ of y){let g=_[1];if(g.preInit){g.nodeUpdate(e,this._rendererType,this.rendererPassState,null);break}}}if(h.castShadow&&h.needUpdateShadow||this._forceUpdate||h.castShadow&&i.autoUpdate)if(h.needUpdateShadow=!1,n.enableCSM&&d==0)for(let p=0;p<l;p++){this.rendererPassState=this.rendererPassStates[p];let y=n.csm.children[p],_=n.getCSMShadowWorldExtents(p);this.poseShadowCamera(n,h.direction,y.shadowCamera,_,y.bound.center),this.renderShadow(e,y.shadowCamera,t,this.rendererPassState),this.copyDepthTexture(this.rendererPassState.depthTexture,this.depth2DArrayTexture,p,u)}else{n.enableCSM&&(d+=l-1);let p=n.getShadowWorldExtents();this.rendererPassState=this.rendererPassStates[d],this.poseShadowCamera(n,h.direction,h.shadowCamera,p,n.lookTarget),this.renderShadow(e,h.shadowCamera,t,this.rendererPassState),this.copyDepthTexture(this.rendererPassState.depthTexture,this.depth2DArrayTexture,d,u)}}this._forceUpdate=!1}copyDepthTexture(e,t,i,n){let s=sA.beginCommandEncoder();s.copyTextureToTexture({texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:i}},{width:n,height:n,depthOrArrayLayers:1}),sA.endCommandEncoder(s)}poseShadowCamera(e,t,i,n,s){this._shadowPos.copy(t).normalize(e.far),s.add(this._shadowPos,this._shadowCameraTarget),s.subtract(this._shadowPos,this._shadowPos),i.transform.lookAt(this._shadowPos,this._shadowCameraTarget),i.orthoOffCenter(-n,n,-n,n,e.near,e.far*2)}compute(){}renderShadow(e,t,i,n){let s=IA.instance.getRenderNodes(e.scene,t),o=sA.beginCommandEncoder(),u=sA.beginRenderPass(o,n);t.transform.updateWorldMatrix(),i.update(t,e.scene),i.collect(s,t),sA.bindCamera(u,t);let l=this.renderShadowBundleOp(e,t,n),c=this.renderShadowBundleTr(e,t,n);l.length>0&&u.executeBundles(l),this.drawShadowRenderNodes(e,t,u,s.opaqueList),c.length>0&&u.executeBundles(c),this.drawShadowRenderNodes(e,t,u,s.transparentList),sA.endPass(u),sA.endCommandEncoder(o)}renderShadowBundleOp(e,t,i){let n=IA.instance.getOpRenderGroup(e.scene);if(n){let s=[];return n.renderGroup.forEach(o=>{if(o.bundleMap.has(this._rendererType))s.push(o.bundleMap.get(this._rendererType));else{let u=sA.recordBundleEncoder(i.renderBundleEncoderDescriptor);this.recordShadowRenderBundleNode(e,t,u,o.renderNodes);let l=u.finish();o.bundleMap.set(this._rendererType,l),s.push(l)}}),s}return[]}renderShadowBundleTr(e,t,i){let n=IA.instance.getTrRenderGroup(e.scene);if(n){let s=[];return n.renderGroup.forEach(o=>{if(o.bundleMap.has(this._rendererType))s.push(o.bundleMap.get(this._rendererType));else{let u=sA.recordBundleEncoder(i.renderBundleEncoderDescriptor);this.recordShadowRenderBundleNode(e,t,u,o.renderNodes);let l=u.finish();o.bundleMap.set(this._rendererType,l),s.push(l)}}),s}return[]}recordShadowRenderBundleNode(e,t,i,n,s){if(sA.bindCamera(i,t),n){sA.bindGeometryBuffer(i,n[0].geometry);for(let o=0;o<n.length;++o){let u=n[o];u.transform.enable&&u.recordRenderPass2(e,this._rendererType,this.rendererPassState,s,i)}}}drawShadowRenderNodes(e,t,i,n,s){if(sA.bindCamera(i,t),n)for(let o=K.setting.render.drawOpMin;o<Math.min(n.length,K.setting.render.drawOpMax);++o){let u=n[o];u.transform.enable&&u.enable&&u.castShadow&&u.renderPass2(e,this._rendererType,this.rendererPassState,s,i)}}}class bb extends eo{constructor(){super();a(this,"zBufferTexture");a(this,"useRenderBundle",!1);a(this,"shadowPassCount");a(this,"zCullingCompute");this.passType=QA.DEPTH;let e=iA.presentationSize,t=1;this.zBufferTexture=Gt.createRTTexture(Ye.zBufferTexture_NAME,Math.floor(e[0]*t),Math.floor(e[1]*t),MA.rgba16float,!1);let i=new rr;i.clearValue=[0,0,0,0],i.loadOp="clear";let n=new Oi([],[],Gt.createRTTexture(Ye.zPreDepthTexture_NAME,Math.floor(e[0]),Math.floor(e[1]),MA.depth32float,!1),null,!1);this.setRenderStates(n)}render(e,t){let i=e.camera,n=e.scene;sA.cleanCache(),Er.start("DepthPass Renderer");let s=n;this.rendererPassState.camera3D=i;let o=IA.instance.getRenderNodes(s,i);this.compute(e,t);let u=this.renderBundleOp(e,o,t),l=[],c=sA.beginCommandEncoder(),h=sA.beginRenderPass(c,this.rendererPassState);u.length>0&&h.executeBundles(u);let d=IA.instance.getRenderShaderCollect(e);for(const f of d){let p=f[1];for(const y of p){let _=y[1];if(_.preInit){_.nodeUpdate(e,this._rendererType,this.rendererPassState,null);break}}}this.drawRenderNodes(e,h,c,o.opaqueList,t),l.length>0&&h.executeBundles(l),sA.endPass(h),sA.endCommandEncoder(c),Er.end("DepthPass Renderer")}drawRenderNodes(e,t,i,n,s,o){sA.bindCamera(t,e.camera);for(let u=K.setting.render.drawOpMin;u<Math.min(n.length,K.setting.render.drawOpMax);++u){let l=n[u];l.transform.enable&&l.enable&&(l.preInit||l.nodeUpdate(e,this._rendererType,this.rendererPassState),l.renderPass2(e,this._rendererType,this.rendererPassState,o,t))}}}class Ib{constructor(){a(this,"map");a(this,"passRendererList");this.map=new Map,this.passRendererList=[]}addRenderer(A){this.map.has(A.passType)?console.error("same renderer pass repeat!"):(this.map.set(A.passType,A),A.passType<=8&&this.addPassRenderer(A))}getRenderer(A){return this.map.get(A)}addPassRenderer(A){this.passRendererList.push(A)}getAllRenderer(){return this.map}getAllPassRenderer(){return this.passRendererList}}class Bb extends eo{constructor(){super();a(this,"finalQuadView");a(this,"postList");this._rendererType=QA.POST,this.postList=[],this.initRenderer()}initRenderer(){CA.register("FullQuad_vert_wgsl",Qw),this.finalQuadView=new h0("Quad_vert_wgsl","Quad_frag_wgsl",new Oi([],[]),0,!1)}attachPost(e,t){t.postRenderer=this,this.postList.indexOf(t)!=-1||(this.postList.push(t),t.onAttach(e))}detachPost(e,t){let i=this.postList.indexOf(t);return i>=0&&(this.postList.splice(i,1),t.onDetach(e),t.postRenderer=null),i>=0}render(e){let t=sA.beginCommandEncoder();for(let n=0;n<this.postList.length;n++){const s=this.postList[n];s.enable&&s.render(e,t)}let i=sA.lastRenderPassState.getLastRenderTexture();if(this.finalQuadView.renderToViewQuad(e,this.finalQuadView,t,i),this.debugViewQuads.length){let n=K.setting.render.debugQuad;n>=0&&this.debugViewQuads[n].renderToViewQuad(e,this.debugViewQuads[n],t,this.debugTextures[n])}sA.endCommandEncoder(t)}}class Jd{constructor(){a(this,"enable",!0);a(this,"postRenderer");a(this,"rtViewQuad");a(this,"virtualTexture");this.rtViewQuad=new Map,this.virtualTexture=new Map,iA.addEventListener(Ls.RESIZE,this.onResize,this)}createRTTexture(A,e,t,i,n=!1,s=0){let o=Gt.createRTTexture(A,e,t,i,n,s);return o.name=A,this.virtualTexture.set(A,o),te.getInstance().attached(o,this),o}createViewQuad(A,e,t,i=0){let n=Gt.createViewQuad(A,"Quad_vert_wgsl",e,t,i);return this.rtViewQuad.set(A,n),n}getOutTexture(){let A,e=sA.lastRenderPassState.renderTargets;return e.length>0?A=e[0]:A=Gt.getTexture(Ye.colorBufferTex_NAME),A}autoSetColorTexture(A,e){let t=this.getOutTexture();e.setSamplerTexture(A,t)}compute(A){}onAttach(A){}onDetach(A){}onResize(){}render(A,e){this.compute(A),this.rtViewQuad.forEach((t,i)=>{let n=sA.lastRenderPassState.getLastRenderTexture();t.renderToViewQuad(A,t,e,n)})}destroy(A){this.postRenderer=null;for(let e=0;e<this.rtViewQuad.size;e++)this.rtViewQuad.values[e].destroy(A);this.rtViewQuad.clear(),this.rtViewQuad=null;for(let e=0;e<this.virtualTexture.size;e++){const t=this.virtualTexture.values[e];te.getInstance().detached(t,this),t.destroy(A)}}}class Tb{constructor(A){a(this,"rendererMap");a(this,"shadowMapPassRenderer");a(this,"pointLightShadowRenderer");a(this,"ddgiProbeRenderer");a(this,"postRenderer");a(this,"clusterLightingRender");a(this,"occlusionSystem");a(this,"depthPassRenderer");a(this,"colorPassRenderer");a(this,"pauseRender",!1);a(this,"pickFire");a(this,"renderState",!1);a(this,"_view");this._view=A,this.rendererMap=new Ib,this.occlusionSystem=new J3,this.clusterLightingRender=this.addRenderer(Eb,A),K.setting.render.zPrePass&&(this.depthPassRenderer=this.addRenderer(bb)),this.shadowMapPassRenderer=new wb,this.pointLightShadowRenderer=new Sb}addRenderer(A,e){let t;return e?t=new A(e):t=new A,this.rendererMap.addRenderer(t),t}get view(){return this._view}set view(A){this._view=A}start(){this.renderState=!0}stop(){}pause(){this.pauseRender=!0}resume(){this.pauseRender=!1}enablePost(A){this.postRenderer=this.addRenderer(Bb),this.postRenderer.setRenderStates(A)}addPost(A){return this.postRenderer||(Zo.bufferTexture=!0,this.enablePost(Zo.getGBufferFrame("ColorPassGBuffer"))),A instanceof Jd&&this.postRenderer.attachPost(this.view,A),A}removePost(A){if(A instanceof Jd)this.postRenderer.detachPost(this.view,A);else for(let e=0;e<A.length;e++)this.postRenderer.detachPost(this.view,A[e])}renderFrame(){let A=this._view;Le.getLightEntries(A.scene).update(A),this.occlusionSystem.update(A.camera,A.scene),this.clusterLightingRender.render(A,this.occlusionSystem),this.shadowMapPassRenderer&&(Ir.update(A),this.shadowMapPassRenderer.render(A,this.occlusionSystem)),this.pointLightShadowRenderer&&this.pointLightShadowRenderer.render(A,this.occlusionSystem),this.depthPassRenderer&&(this.depthPassRenderer.compute(A,this.occlusionSystem),this.depthPassRenderer.render(A,this.occlusionSystem)),K.setting.gi.enable&&this.ddgiProbeRenderer&&(this.ddgiProbeRenderer.compute(A,this.occlusionSystem),this.ddgiProbeRenderer.render(A,this.occlusionSystem));let e=this.rendererMap.getAllPassRenderer();for(let t=0;t<e.length;t++){const i=e[t];i.compute(A,this.occlusionSystem),i.render(A,this.occlusionSystem,this.clusterLightingRender.clusterLightingBuffer)}this.postRenderer&&this.postRenderer.postList.length>0&&this.postRenderer.render(A)}debug(){}}class Db extends de{constructor(e=.001,t=1e4,i=90,n=!1){super();a(this,"up_camera");a(this,"down_camera");a(this,"left_camera");a(this,"right_camera");a(this,"front_camera");a(this,"back_camera");this.initCubeCamera(e,t,i,n)}initCubeCamera(e,t,i=90,n=!1){this.up_camera=it.createCamera3DObject(this,"up"),this.down_camera=it.createCamera3DObject(this,"down"),this.left_camera=it.createCamera3DObject(this,"left"),this.right_camera=it.createCamera3DObject(this,"right"),this.front_camera=it.createCamera3DObject(this,"front"),this.back_camera=it.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=n,this.down_camera.isShadowCamera=n,this.left_camera.isShadowCamera=n,this.right_camera.isShadowCamera=n,this.front_camera.isShadowCamera=n,this.back_camera.isShadowCamera=n;let s=1;this.up_camera.perspective(i,s,e,t),this.up_camera.lookAt(I.ZERO,I.UP,I.DOWN),this.down_camera.perspective(i,s,e,t),this.down_camera.lookAt(I.ZERO,I.DOWN,I.DOWN),this.left_camera.perspective(i,s,e,t),this.left_camera.lookAt(I.ZERO,I.LEFT),this.right_camera.perspective(i,s,e,t),this.right_camera.lookAt(I.ZERO,I.RIGHT),this.front_camera.perspective(i,s,e,t),this.front_camera.lookAt(I.ZERO,I.FORWARD),this.back_camera.perspective(i,s,e,t),this.back_camera.lookAt(I.ZERO,I.BACK),this.up_camera.type=Re.shadow,this.down_camera.type=Re.shadow,this.left_camera.type=Re.shadow,this.right_camera.type=Re.shadow,this.front_camera.type=Re.shadow,this.back_camera.type=Re.shadow}}class xb extends Oi{constructor(A,e,t=!0){super([],[]),this.crateGBuffer(A,e,t)}crateGBuffer(A,e,t){let i=this.renderTargets,n=this.rtDescriptors,s=new Kt(A,e,MA.rgba16float,!1,void 0,1,0,!0,t);s.name="positionMap";let o=new rr;o.loadOp="load";let u=new Kt(A,e,MA.rgba16float,!1,void 0,1,0,!0,t);u.name="normalMap";let l=new rr;l.loadOp="load";let c=new Kt(A,e,MA.rgba16float,!1,void 0,1,0,!0,t);c.name="colorMap";let h=new rr;h.loadOp="load";let d=new Kt(A,e,MA.depth24plus,!1,void 0,1,0,!0,t);d.name="depthTexture";let f=new rr;f.loadOp="load",i.push(s),i.push(u),i.push(c),n.push(o),n.push(l),n.push(h),this.depthTexture=d}}let Ob=`
#include "GenerayRandomDir"
#include "MathShader"
#include "IrradianceVolumeData_frag"
var<private> PI: f32 = 3.14159265359;

struct ProbeData{
  offsetX:f32,
  offsetY:f32,
  offsetZ:f32,
  frame:f32,
}

 struct Uniforms {
     matrix : array<mat4x4<f32>>
 };

struct RayProbeBuffer{
  WPosition: vec3<f32>,
  WNormal:vec3<f32>,
  WRadiance:vec4<f32>,
}

struct CacheHitData{
  color:vec4<f32>,
  depth:vec4<f32>,
}

//  struct RayInfo{
//   rays:array<vec4<f32>,4096>
//  }

@group(0) @binding(0) var<storage, read> probes : array<ProbeData>;
@group(0) @binding(1) var<storage, read_write> irradianceBuffer : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> depthBuffer : array<vec4<f32>>;
@group(0) @binding(3) var<uniform> uniformData : IrradianceVolumeData ;
@group(0) @binding(4) var probeIrradianceMap : texture_storage_2d<rgba16float, write>;
@group(0) @binding(5) var probeDepthMap : texture_storage_2d<rgba16float, write>;
@group(0) @binding(6) var<storage, read_write> depthRaysBuffer : array<vec4<f32>>;

@group(1) @binding(0) var positionMap : texture_2d<f32>;
@group(1) @binding(1) var normalMap : texture_2d<f32>;
@group(1) @binding(2) var colorMap : texture_2d<f32>;

@group(2) @binding(0)
var<storage, read> models : Uniforms;

var<private> probeID: u32 ;
var<private> workgroup_idx: u32 ;
var<private> workgroup_idy: u32 ;
var<private> hysteresis: f32 = 0.98 ;
var<private> epsilon: f32 = 1e-6 ;
var<private> probeLocation:vec3<f32> = vec3<f32>(0.0);
var<private> energyConservation: f32 = 0.85 ;
var<private> resultIrradiance: vec4<f32> ;
var<private> resultDepth: vec4<f32> ;
var<private> RAYS_PER_PROBE: f32 = 144.0 ;
var<private> OCT_RT_SIZE: u32;
var<private> PROBE_OCT_RT_SIZE: u32;
var<private> OCT_SIDE_SIZE_u32: u32;
var<private> OCT_SIDE_SIZE_f32: f32;
var<private> OCT_RT_SIZE_f32: f32;
var<private> PROBE_SOURCESIZE: f32;
var<private> PROBEMAP_SOURCESIZE: f32;
var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);
var<private> randomMatrix:mat4x4<f32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
   RAYS_PER_PROBE = f32(i32(uniformData.rayNumber));
   OCT_RT_SIZE = u32(uniformData.OctRTMaxSize);
   OCT_RT_SIZE_f32 = f32(uniformData.OctRTMaxSize);
   OCT_SIDE_SIZE_u32 = u32(uniformData.OctRTSideSize);
   OCT_SIDE_SIZE_f32 = f32(uniformData.OctRTSideSize);
   PROBE_SOURCESIZE = f32(uniformData.ProbeSize);
   PROBEMAP_SOURCESIZE = f32(uniformData.ProbeSourceTextureSize);
   hysteresis = uniformData.hysteresis;
    // probe index
    probeID = globalInvocation_id.z ;
    // pixel coord
    workgroup_idx = globalInvocation_id.x ;
    workgroup_idy = globalInvocation_id.y;

    probeLocation = calcProbePosition(probeID);

    resultIrradiance = vec4<f32>(0.0);
    resultDepth = vec4<f32>(0.0,0.0,0.0,0.0);

    var tdr = normalize(getCurrentDir());
    let orientationIndex = u32(uniformData.orientationIndex);
    randomMatrix = models.matrix[orientationIndex];

    var distancePprobeUV = getSampleProbeUV(tdr.xyz);
    var rayUv:vec2<i32> = vec2<i32>(distancePprobeUV.xy * f32(PROBEMAP_SOURCESIZE - 1.0));
    let rayHitPosition = textureLoad(positionMap, rayUv, 0).xyz ;
    
    for(var i:f32 = 0.0; i < RAYS_PER_PROBE ; i = i + 1.0 ){
      radianceProbeOnce(i, tdr);
    }

    if (resultIrradiance.w > epsilon) {
      var color = vec3<f32>(resultIrradiance.xyz/(2.0*resultIrradiance.w)) ;
      color = pow(color.rgb, vec3<f32>(1.0 / uniformData.ddgiGamma));
      resultIrradiance = vec4<f32>(color,1.0-hysteresis);
    }

    // if nonzero
    if (resultDepth.w > epsilon) {
      resultDepth = vec4<f32>(resultDepth.xyz/(2.0*resultDepth.w),1.0-hysteresis) ;
    }

   let pixelCoord = getWriteOctUVByID();

   var lerpDataResult:CacheHitData;

   lerpDataResult.color = resultIrradiance;

   lerpDataResult.depth = resultDepth;

   lerpDataResult = lerpHitData(lerpDataResult, pixelCoord);

   writeRayHitData(pixelCoord, lerpDataResult);

   storePixelAtCoord(probeIrradianceMap, pixelCoord , vec4<f32>(lerpDataResult.color.xyz, 1.0), true);

   storePixelAtCoord(probeDepthMap, pixelCoord , vec4<f32>(resultDepth.xy, 0.0, 1.0), false);
}

fn lerpHitData(data:CacheHitData, coord:vec2<i32>) -> CacheHitData{
   let frameIndex = probes[probeID].frame;
   var newData:CacheHitData = data;

   //if(frameIndex > 1.0){
      var oldData = readRayHitData(coord);
      newData.color = mix(oldData.color, newData.color, uniformData.lerpHysteresis);
      newData.depth = mix(oldData.depth, newData.depth, uniformData.lerpHysteresis);
   //}
   return newData;
}

fn square(v:vec3<f32>) -> vec3<f32>{
   var v3 = v;
   v3.x = v3.x * v3.x;
   v3.y = v3.y * v3.y;
   v3.z = v3.z * v3.z;
   return v3;
}

 fn testSample() ->vec4<f32>{
   var ux = f32(workgroup_idx) / OCT_SIDE_SIZE_f32;
   var uy = f32(workgroup_idy) / OCT_SIDE_SIZE_f32;
   var uv = vec2<f32>(ux,uy) * 2.0 - 1.0 ;
   var dir = octDecode(uv);
   var probeUV = getSampleProbeUV(dir.xyz);
   var rayProbeBuffer = getCurrentRayHitBuffer(probeUV);
   return rayProbeBuffer.WRadiance;
 }

 fn gridCoordToProbeIndex(grid:vec3<i32>) -> i32
 {
     return grid.x + grid.z * i32(uniformData.gridXCount) + grid.y * i32(uniformData.gridXCount * uniformData.gridZCount);
 }

fn storePixelAtCoord(texture:texture_storage_2d<rgba16float, write>, coord:vec2<i32>, color:vec4<f32>, isColor:bool){
   let sideCnt = i32(OCT_SIDE_SIZE_u32);
   let sideBorderCnt = sideCnt + 2;
   let indexXY = coord / sideCnt;
   let modeXY = coord % sideCnt;

   var newCoord = indexXY * sideBorderCnt + modeXY;
   textureStore(texture, newCoord + 1, color);

   var borderCoord = vec2<i32>(-1);
   //左右
   if(modeXY.x % (sideCnt - 1) == 0){
     borderCoord = modeXY;
     borderCoord.y = sideCnt - borderCoord.y;
     if(modeXY.x == sideCnt - 1){
       borderCoord.x = sideBorderCnt - 1;
     }
     borderCoord = indexXY * sideBorderCnt + borderCoord;
     textureStore(texture, borderCoord, color);
   }
   //上下
   if(modeXY.y % (sideCnt - 1) == 0){
     borderCoord = modeXY;
     borderCoord.x = sideCnt - borderCoord.x;
     if(modeXY.y == sideCnt - 1){
         borderCoord.y = sideBorderCnt - 1;
     }
     borderCoord = indexXY * sideBorderCnt + borderCoord;
     textureStore(texture, borderCoord, color);
   }
   //补角
   if(modeXY.x % (sideCnt - 1) == 0 && modeXY.y % (sideCnt - 1) == 0){
      var cornerCoord = modeXY;
      if(modeXY.x == 0){
         cornerCoord.x = sideBorderCnt - 1;
      }else{
         cornerCoord.x = 0;
      }
       if(modeXY.y == 0){
         cornerCoord.y = sideBorderCnt - 1;
      }else{
         cornerCoord.y = 0;
      }
      cornerCoord = indexXY * sideBorderCnt + cornerCoord;
      textureStore(texture, cornerCoord, color);
   }
}

fn calcProbePosition(id:u32) -> vec3<f32>{
   var probeLocation = vec3<f32>(0.0);
   var blockCount = u32(uniformData.gridXCount * uniformData.gridZCount) ;
   var grid = vec3<u32>(0u);
   grid.x = (id % blockCount) % u32(uniformData.gridXCount);
   grid.y = id / blockCount;
   grid.z = (id % blockCount) / u32(uniformData.gridXCount);
   probeLocation.x = f32(grid.x) * uniformData.ProbeSpace + uniformData.startX;
   probeLocation.y = f32(grid.y) * uniformData.ProbeSpace + uniformData.startY;
   probeLocation.z = f32(grid.z) * uniformData.ProbeSpace + uniformData.startZ;
   return probeLocation;
}

fn getWriteOctUVByID() -> vec2<i32>
{
   var blockCount = u32(uniformData.gridXCount * uniformData.gridZCount) ;
   var offsetX = (probeID % blockCount) % u32(uniformData.gridXCount) ;
   var offsetY = u32(uniformData.gridZCount - 1.0) - (probeID % blockCount) / u32(uniformData.gridXCount) ;
   var offsetZ = probeID / blockCount ;
   var pixelCoord = vec2<i32>(i32(workgroup_idx), i32(workgroup_idy));
   pixelCoord.x = pixelCoord.x + i32(offsetX * OCT_SIDE_SIZE_u32);
   pixelCoord.y = pixelCoord.y + i32(offsetY * OCT_SIDE_SIZE_u32 + offsetZ * u32(uniformData.gridZCount) * OCT_SIDE_SIZE_u32);

   pixelCoord = offsetByCol(pixelCoord, OCT_SIDE_SIZE_f32, OCT_RT_SIZE, vec3<f32>(uniformData.gridXCount, uniformData.gridYCount, uniformData.gridZCount));
   return pixelCoord;
}

fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
{
 var pixelCoord = pixelCoord0;
 let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
 let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
 let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
 let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
 let col:i32 = pixelCoord.y / pixelCountYMax;

 pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
 pixelCoord.y = pixelCoord.y % pixelCountYMax;

 return pixelCoord;
}

fn radianceProbeOnce(rayID:f32, tdr:vec3<f32>){
   var texelDirection = sphericalFibonacci(rayID, RAYS_PER_PROBE ) ;
   var rayDirection = normalize( vec3<f32>((randomMatrix * vec4<f32>(texelDirection, 1.0)).xyz));
   var probeUV = getSampleProbeUV(rayDirection.xyz);
   var rayWriteUV = getWriteRayInfoUV();

   var rayProbeBuffer = getCurrentRayHitBuffer(probeUV);
   var rayHitLocation = rayProbeBuffer.WPosition + normalize(rayProbeBuffer.WNormal) * 0.01;

   var rayProbeDistance = length(probeLocation - rayHitLocation) ;
   // rayProbeDistance = min(uniformData.ProbeSpace * 4.0, rayProbeDistance) ;

   // if (dot(rayProbeBuffer.WNormal, rayProbeBuffer.WNormal) < epsilon) {
   //   rayProbeDistance = epsilon ;
   // }

   let rid = i32(probeID) * i32(RAYS_PER_PROBE) + i32(rayID) ;
   depthRaysBuffer[rid] = vec4<f32>(rayDirection.xyz,rayProbeDistance) ;

   // Detect misses and force depth
   var i_weight = max(0.0, dot(tdr,rayDirection) );
   var d_weight = pow(i_weight, uniformData.depthSharpness);
   
   if (i_weight >= epsilon) {
     //  var weightColor = pow(weight, (2.0 - uniformData.probeRoughness) * 2.0);
      resultIrradiance += vec4(rayProbeBuffer.WRadiance.rgb, i_weight );
     
   }
   if(d_weight>= epsilon){
       resultDepth += vec4(rayProbeDistance * d_weight, rayProbeDistance * rayProbeDistance * d_weight, 0.0 , i_weight);
   }
}

fn getCurrentRayHitBuffer(probeUV:vec2<f32>) -> RayProbeBuffer {
  var rayProbeBuffer : RayProbeBuffer ;
  var uv:vec2<i32> = vec2<i32>(probeUV.xy * f32(PROBEMAP_SOURCESIZE - 1.0));
  rayProbeBuffer.WPosition = textureLoad(positionMap, uv, 0).xyz ;
  rayProbeBuffer.WNormal = normalize(textureLoad(normalMap, uv, 0).xyz * 2.0 - 1.0);
  rayProbeBuffer.WRadiance = textureLoad(colorMap, uv, 0).xyzw * energyConservation;
  return rayProbeBuffer ;
}

fn getSampleProbeUV(dir0:vec3<f32>) -> vec2<f32> {
   var dir = applyQuaternion(dir0, quaternion);
   let faceId = dir_to_faceId(dir);
   var targetUV:vec2<f32> = convert_xyz_to_cube_uv(dir.x, dir.y, dir.z);
   targetUV.x = 1.0 - targetUV.x;
   let threshould = 0.5 / PROBE_SOURCESIZE;
   targetUV = clamp(targetUV, vec2<f32>(threshould), vec2<f32>(1.0 - threshould));

   targetUV.x = f32(faceId) + targetUV.x;

   let aspect:f32 = PROBE_SOURCESIZE / PROBEMAP_SOURCESIZE;
   targetUV = targetUV * aspect ;

   var fullCol = u32(PROBEMAP_SOURCESIZE) / u32(PROBE_SOURCESIZE);
   var offsetSampleUv = vec2<f32>( f32(probeID / fullCol) * 6.0 , f32(probeID % fullCol)) * aspect;
   return targetUV + offsetSampleUv;
}

fn getWriteRayInfoUV() -> vec2<i32> {
  var writeUV = vec2<i32>(i32(workgroup_idy),i32(probeID)) ;
  return writeUV ;
}

fn writeRayHitData( uv:vec2<i32> , data:CacheHitData){
  let index = uv.y * i32(OCT_RT_SIZE) + uv.x ;
  irradianceBuffer[index] = data.color ;
  depthBuffer[index] = data.depth ;
}

fn readRayHitData( uv:vec2<i32> ) -> CacheHitData{
  var data:CacheHitData;
  let index = uv.y * i32(OCT_RT_SIZE) + uv.x ;
  data.color = irradianceBuffer[index] ;
  data.depth = depthBuffer[index] ;
  return data;
}

fn getCurrentDir() -> vec3<f32> {
  var ux = f32(workgroup_idx) / OCT_SIDE_SIZE_f32;
  var uy = f32(workgroup_idy) / OCT_SIDE_SIZE_f32;
  var uv = vec2<f32>(ux,uy) * 2.0 - 1.0 ;
  var dir = octDecode(uv) ;
  return normalize(dir) ;
}


`;class Mb{constructor(A){a(this,"irradianceBuffer");a(this,"depthBuffer");a(this,"probeIrradianceMap");a(this,"probeDepthMap");a(this,"volume");a(this,"computeShader");a(this,"depthRaysBuffer");this.volume=A,this.initPipeline()}initPipeline(){this.computeShader=new Ii(Ob);let A=K.setting.gi,e=A.octRTMaxSize*A.octRTMaxSize;this.irradianceBuffer=new Bt(e*4,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST),this.computeShader.setStorageBuffer("irradianceBuffer",this.irradianceBuffer),this.depthBuffer=new Bt(e*4,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST),this.computeShader.setStorageBuffer("depthBuffer",this.depthBuffer),this.depthRaysBuffer=new Bt(4096*4*2*2*2,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC),this.computeShader.setStorageBuffer("depthRaysBuffer",this.depthRaysBuffer),this.computeShader.setStorageBuffer("probes",this.volume.probesBuffer),this.computeShader.setUniformBuffer("uniformData",this.volume.irradianceVolumeBuffer),this.computeShader.setStorageBuffer("models",Le.modelMatrixBindGroup.matrixBufferDst)}setTextures(A,e,t){this.probeIrradianceMap=e,this.probeDepthMap=t;let i=A[0],n=A[1],s=A[2];this.computeShader.setStorageTexture("probeIrradianceMap",this.probeIrradianceMap),this.computeShader.setStorageTexture("probeDepthMap",this.probeDepthMap),this.computeShader.setSamplerTexture("positionMap",i),this.computeShader.setSamplerTexture("normalMap",n),this.computeShader.setSamplerTexture("colorMap",s)}readBuffer(){return this.depthRaysBuffer.readBuffer()}compute(A,e){let t=this.volume.setting,i=sA.beginCommandEncoder(),n=IA.instance.getProbes(A.scene);this.computeShader.workerSizeX=t.octRTSideSize/8,this.computeShader.workerSizeY=t.octRTSideSize/8,this.computeShader.workerSizeZ=n.length,sA.computeCommand(i,[this.computeShader])}}let Rb=`
  #include "MathShader"
  #include "IrradianceVolumeData_frag"

  struct IrradianceField {
      probeStartPosition: vec4<f32>,
      probeCounts:vec4<f32>,
      probeStep:f32,
      irradianceTextureWidth:f32,
      irradianceTextureHeight:f32,
      irradianceProbeSideLength:f32,
  };

  @group(0) @binding(0) var outputBuffer : texture_storage_2d<rgba16float, write>;
  @group(0) @binding(1) var<uniform> uniformData : IrradianceVolumeData ;

  @group(1) @binding(0) var normalMapSampler : sampler;
  @group(1) @binding(1) var normalMap : texture_2d<f32>;

  @group(1) @binding(2) var colorMapSampler : sampler;
  @group(1) @binding(3) var colorMap : texture_2d<f32>;

  @group(1) @binding(4) var litMapSampler : sampler;
  @group(1) @binding(5) var litMap : texture_2d<f32>;

  @group(1) @binding(6) var irradianceMapSampler : sampler;
  @group(1) @binding(7) var irradianceMap : texture_2d<f32>;

  var<private> wsn:vec3<f32>;
  var<private> ulitColor:vec4<f32>;
  var<private> litColor:vec4<f32>;
  var<private> irradianceFieldSurface : IrradianceField ;
  var<private> probeID:u32;

  var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

  fn getIrradianceFieldSurface() -> IrradianceField{
    let data = uniformData;
    irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
    irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
    irradianceFieldSurface.probeStep = data.ProbeSpace;
    irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
    return irradianceFieldSurface;
  }

  fn rotateDir(n:vec3<f32>) -> vec3<f32>{
     return normalize(applyQuaternion(-n, quaternion));
  }

  fn sampleLitColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(litMap, litMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(litMap, uv, 0);
      return oc;
  }

  fn sampleNormal(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(normalMap, normalMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(normalMap, uv, 0);
      return oc;
  }

  fn sampleColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(colorMap, uv, 0);
      return oc;
  }

  fn sampleProbe(fragCoord:vec2<u32>){
    var uv = vec2<i32>(i32(fragCoord.x), i32(fragCoord.y)) ;

    litColor = sampleLitColor(uv);

    var normalMap = sampleNormal(uv);
    wsn = normalMap.xyz * 2.0 - 1.0;

    ulitColor = sampleColor(uv);
  }

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    getIrradianceFieldSurface();
    var fragCoord = vec2<u32>( globalInvocation_id.x, globalInvocation_id.y);
    probeID = globalInvocation_id.z;
    fragCoord = fragCoord + getCoordOffset(probeID);

    sampleProbe(fragCoord);

    let irradiance = getIrradianceColor();
    let result = blendIrradianceColor(irradiance);
    textureStore(outputBuffer, vec2<i32>(fragCoord), result);
  }

  fn blendIrradianceColor(irradiance:vec4<f32>) -> vec4<f32>{
     var bounceColor = irradiance * ulitColor;
     let bounceIntensity = getBounceIntensity(uniformData.bounceIntensity);
     let conservation1 = 1.0 / sqrt((1.0 + bounceIntensity * 0.55));
     let conservation2 = 1.0 / sqrt((1.0 + bounceIntensity));
     var result = litColor * conservation2 + bounceColor * sqrt(bounceIntensity) * conservation1;
     return vec4<f32>(result.xyz, litColor.w);
  }

  fn getBounceIntensity(intensity:f32) -> f32 {
    var value = clamp(intensity, 0.0, 1.0) * 10.0;
    return value;
  }

  fn getCoordOffset(id:u32) -> vec2<u32>{
      var fullCol = u32(uniformData.ProbeSourceTextureSize / uniformData.ProbeSize);
      var offsetSampleUv = vec2<u32>( (id / fullCol) * 6u , id % fullCol) * u32(uniformData.ProbeSize);
      return offsetSampleUv;
  }

  fn getIrradianceColor() -> vec4<f32>{
     var probeIrradiance: vec4<f32> = vec4<f32>(0.0);
     if(length(wsn) > 0.01){
       probeIrradiance = getIrrdiaceIndex(i32(probeID), wsn);
     }
     return probeIrradiance;
  }

  fn getIrrdiaceIndex(index:i32, wsn:vec3<f32>) -> vec4<f32>{
    var wsN = rotateDir(wsn.xyz);
    var texCoord:vec2<f32> = textureCoordFromDirection(wsN,
      index,
      irradianceFieldSurface.irradianceTextureWidth,
      irradianceFieldSurface.irradianceTextureHeight,
      irradianceFieldSurface.irradianceProbeSideLength);

    var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, texCoord, 0.0).xyz;
    return vec4<f32>(probeIrradiance, 1.0);
  }

  fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
  {
      var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
      uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
      uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
      return uv ;
  }

  fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
  {
      var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
      var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetZ = probeID / blockCount ;

      var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

      var blockOffset = vec2<f32>(0.0);
      blockOffset.x = f32(offsetX) * size;
      blockOffset.y = f32(offsetY) * size + f32(offsetZ) * f32(irradianceFieldSurface.probeCounts.z) * size;

      let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
      var probeCounts:vec3<f32> = vec3<f32>(irradianceFieldSurface.probeCounts.xyz);

      var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
      var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

      pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

      return pixelCoord + 1.0 ;
  }

  fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
  {
    var pixelCoord = pixelCoord0;
    let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
    let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
    let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
    let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
    let col:i32 = pixelCoord.y / pixelCountYMax;

    pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
    pixelCoord.y = pixelCoord.y % pixelCountYMax;

    return pixelCoord;
  }
`;class Pb{constructor(A){a(this,"blendTexture");a(this,"volume");a(this,"computerShader");this.volume=A,this.initPipeline()}initPipeline(){let A=K.setting.gi;this.blendTexture=new Kt(A.probeSourceTextureSize,A.probeSourceTextureSize,MA.rgba16float,!1,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING),this.computerShader=new Ii(Rb),this.computerShader.setStorageTexture("outputBuffer",this.blendTexture),this.computerShader.setUniformBuffer("uniformData",this.volume.irradianceVolumeBuffer)}setInputs(A){let e=A[0],t=A[1],i=A[2],n=A[3];this.computerShader.setSamplerTexture("normalMap",e),this.computerShader.setSamplerTexture("colorMap",t),this.computerShader.setSamplerTexture("litMap",i),this.computerShader.setSamplerTexture("irradianceMap",n)}compute(A,e){let t=sA.beginCommandEncoder(),i=this.volume.setting,n=i.probeXCount*i.probeYCount*i.probeZCount,s=i.probeSize;this.computerShader.workerSizeX=s*6/8,this.computerShader.workerSizeY=s/8,this.computerShader.workerSizeZ=n,sA.computeCommand(t,[this.computerShader])}}let Fb=`
var<private> PI: f32 = 3.14159265359;

#include "GlobalUniform"
#include "MathShader"
#include "FastMathShader"
#include "ColorUtil"

struct ConstUniform{
   screenWidth:f32,
   screenHeight:f32
}

struct LightData {
     index:f32,
     lightType:i32,
     radius:f32,
     linear:f32,
     
     position:vec3<f32>,
     lightMatrixIndex:f32,

     direction:vec3<f32>,
     quadratic:f32,

     lightColor:vec3<f32>,
     intensity:f32,

     innerCutOff :f32,
     outerCutOff:f32,
     range :f32,
     castShadow:i32,

     lightTangent:vec3<f32>,
     ies:f32,
};

struct Uniforms {
     matrix : array<mat4x4<f32>>
 };

const PointLightType = 1;
const DirectLightType = 2;
const SpotLightType = 3;

@group(0) @binding(auto) var outputBuffer : texture_storage_2d<rgba16float, write>;
@group(0) @binding(auto) var prefilterMapSampler: sampler;
@group(0) @binding(auto) var prefilterMap: texture_cube<f32>;

@group(1) @binding(auto) var positionMapSampler : sampler;
@group(1) @binding(auto) var positionMap : texture_2d<f32>;

@group(1) @binding(auto) var normalMapSampler : sampler;
@group(1) @binding(auto) var normalMap : texture_2d<f32>;

@group(1) @binding(auto) var colorMapSampler : sampler;
@group(1) @binding(auto) var colorMap : texture_2d<f32>;

@group(1) @binding(auto) var shadowMapSampler : sampler_comparison;
@group(1) @binding(auto) var shadowMap : texture_depth_2d_array;
@group(1) @binding(auto) var pointShadowMapSampler: sampler;
@group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array ;

@group(2) @binding(0)
var<storage,read> lightBuffer: array<LightData>;

@group(2) @binding(1)
var<storage, read> models : Uniforms;

struct ShadowStruct{
 directShadowVisibility:f32,
 pointShadows:array<f32,8>,
}

var<private> shadowStrut: ShadowStruct ;
var<private> ulitColor:vec3<f32>;
var<private> wPosition:vec3<f32>;
var<private> wNormal:vec3<f32>;

const LUMEN = 10.764;

fn samplePosition(uv:vec2<f32>) -> vec4<f32>
{
   return textureSampleLevel(positionMap, positionMapSampler,uv, 0.0);
}

fn sampleNormal(uv:vec2<f32>) -> vec4<f32>
{
  return textureSampleLevel(normalMap, normalMapSampler, uv, 0.0);
}

fn sampleColor(uv:vec2<f32>) -> vec4<f32>
{
   var oc:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, uv, 0.0);
   ulitColor = vec3(oc.xyz);
   return oc;
}

const csmCount:i32 = ${bi.Cascades} ;
fn directShadowMaping(P:vec3<f32>, N:vec3<f32>, shadowBias: f32)  {
  let enableCSM:bool = globalUniform.enableCSM > 0.5;
  var light = lightBuffer[0];
  var visibility = 1.0;
    var shadowIndex = i32(light.castShadow);
    if (shadowIndex >= 0 ) {
      var shadowMatrix:mat4x4<f32>;
      if(enableCSM && csmCount > 1){
        for(var csm:i32 = 0; csm < csmCount; csm ++){
          var csmShadowBias = globalUniform.csmShadowBias[csm];
          shadowMatrix = globalUniform.csmMatrix[csm];
          let csmShadowResult = directShadowMapingIndex(light, shadowMatrix, P, N, csm, csmShadowBias);
          if(csmShadowResult.y < 0.5){
            visibility = csmShadowResult.x;
            break;
          }
        }
      }else{
        shadowMatrix = globalUniform.shadowMatrix[shadowIndex];
        visibility = directShadowMapingIndex(light, shadowMatrix, P, N, shadowIndex, shadowBias).x;
      }
    }
  shadowStrut.directShadowVisibility = visibility;
}

fn directShadowMapingIndex(light:LightData, matrix:mat4x4<f32>, P:vec3<f32>, N:vec3<f32>, depthTexIndex:i32, shadowBias:f32) -> vec2<f32>
{
  var visibility = 1.0;
  var isOutSideArea:f32 = 1.0;
  var shadowPosTmp = matrix * vec4<f32>(P.xyz, 1.0);
  var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
  var varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
  if (varying_shadowUV.x <= 1.0
    && varying_shadowUV.x >= 0.0
    && varying_shadowUV.y <= 1.0
    && varying_shadowUV.y >= 0.0
    && shadowPosTmp.z <= 1.0
    && shadowPosTmp.z >= 0.0)
  {
    isOutSideArea = 0.0;
    var uvOnePixel = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
    var NoL = abs(dot(N, normalize(light.direction)));
    var bias = shadowBias / max(NoL, 0.000001);
    visibility = textureSampleCompareLevel(shadowMap, shadowMapSampler, varying_shadowUV, depthTexIndex, shadowPos.z - bias);
    visibility += 0.001;
  }
  return vec2<f32>(visibility, isOutSideArea);
}

fn pointShadowMapCompare(shadowBias:f32){
   for(var i:i32 = i32(0) ; i < i32(8); i = i + 1 )
   { 
       var v = 1.0 ;
       let light = lightBuffer[i] ;
       if(light.castShadow < 0 ){
         shadowStrut.pointShadows[i] = v ;
         continue ;
       }

       let frgToLight = wPosition - light.position.xyz;
       var dir:vec3<f32> = normalize(frgToLight)  ;

       var len = length(frgToLight) ;
       var depth = textureSampleLevel(pointShadowMap,pointShadowMapSampler,dir.xyz,i,0); 
       depth *= globalUniform.far ;
       if((len - shadowBias) > depth){
          v = 0.0 ; 
       }
       shadowStrut.pointShadows[i] = v ;
   }
} 

fn directLighting( albedo:vec3<f32> , WP :vec3<f32>, N:vec3<f32> , V:vec3<f32> , light:LightData , shadowBias:f32  ) -> vec3<f32> {
 var L = -normalize(light.direction.xyz) ;
 var NoL = max(dot(N,L),0.0);
 let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
 var lightColor = getHDRColor( lightCC , light.linear ) ;
 var att = light.intensity / LUMEN ;
 if(light.castShadow>=0){
     lightColor *= shadowStrut.directShadowVisibility ;
 }
 let finalLight = (albedo / PI) * lightColor * NoL * att * 2.0 ;
 return finalLight ;
}

fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, light:LightData ) -> vec3<f32> {
 let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
 var dir = lightPos.xyz - WP ;
 let dist = length(dir);
 var color = vec3<f32>(0.0) ;

 if(dist != 0.0){
   dir *= 1.0 / dist ;
 }

 if( abs(dist) < light.range ){
     var L = dir ;
     var atten = 1.0 ;
     atten = 1.0 - smoothstep(0.0,light.range,dist) ;
     atten *= 1.0 / max(light.radius,0.0001) ;

     var lightColor = light.lightColor.rgb  ;
     lightColor = getHDRColor(lightColor , light.linear ) * light.intensity / LUMEN * 2.0;
     color = (albedo / PI) * lightColor.rgb * atten ;
 }

 return  color *0.0;
}

fn spotLight( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, light:LightData ) -> vec3<f32> {
 let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
 var dir = lightPos.xyz - WP ;
 let dist = length(dir) ;

 if(dist != 0.0){
   dir *= 1.0 / dist ;
 }

 var color = vec3<f32>(0.0) ;
 if( abs(dist) < light.range * 2.0 ){
     var L = dir ;
     let theta = dot(-L, normalize(light.direction));
     let angle = acos(theta) ;
     var atten = 1.0 ;
     atten = 1.0 - smoothstep(0.0,light.range,dist) ;
     atten *= 1.0 / max(light.radius,0.1) ;
     if(angle < light.outerCutOff){
       if(angle > light.innerCutOff){
         atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
       }
     }else{
       atten = 0.0 ;
     }
     var lightColor = light.lightColor.rgb  ;
     lightColor = getHDRColor(lightColor , light.linear ) * light.intensity / LUMEN * 2.0;
     color = (albedo / PI) * lightColor.rgb * atten ;
   }
 return  color ;
}

fn CalcUV_01(coord:vec2<i32>, texSize:vec2<u32>) -> vec2<f32>
{
  let u = (f32(coord.x) + 0.5) / f32(texSize.x);
  let v = (f32(coord.y) + 0.5) / f32(texSize.y);
  return vec2<f32>(u, v);
}

fn coordFun(fragCoord:vec2<i32>)-> vec4<f32>{
 let uv_01 = CalcUV_01(fragCoord, texSize);
 var pos = samplePosition(uv_01);

 var normalMap = sampleNormal(uv_01);
 var normal = normalize( normalMap.xyz * 2.0 - 1.0 );

 var color = sampleColor(uv_01);
 var emissive = vec4<f32>(pos.a,normalMap.a,color.a,0.0) * 1.0 ;
 if(pos.w + 1.0 > 10000.0){
   return vec4<f32>(color);
 }
 var V = normalize(pos.xyz - globalUniform.cameraWorldMatrix[3].xyz);
 var N = normal.xyz ;

 wPosition = pos.xyz;
 wNormal = N;

 directShadowMaping(wPosition, wNormal, globalUniform.shadowBias);
 pointShadowMapCompare(globalUniform.shadowBias);

 var lighting = vec3<f32>(0.0);
 let lightCount = 32 ;
 for(var i:i32 = 0 ; i < lightCount ; i = i + 1 )
 {
     let light = lightBuffer[i];
     switch (light.lightType) {
         case PointLightType: {
             lighting += pointLighting(color.rgb,pos.xyz,N,V,light);
         }
         case DirectLightType: {
             lighting += directLighting(color.rgb,pos.xyz,N,V,light,globalUniform.shadowBias);
         }
         case SpotLightType: {
             lighting += spotLight(color.rgb,pos.xyz,N,V,light);
         }
         default: {
         }
     }
 }

 // lighting = vec3<f32>(1.0) / (vec3<f32>(1.0) + lighting.rgb) * lighting.rgb;

 var skyLight: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, N.xyz, 8.0 ).rgb);
 // skyLight = LinearToGammaSpace(skyLight);
 // skyLight = (color.rgb / 3.1415926 ) * skyLight;
 // skyLight = vec3<f32>(1.0) / (vec3<f32>(1.0) + skyLight.rgb) * skyLight.rgb;

 lighting = lighting.rgb ;//+ skyLight.rgb ;

 return vec4<f32>(lighting.rgb,color.w)+emissive;
}

// fn vertexToCoord(vertexPosition:vec3<f32>) -> vec4<f32>{
//   var worldPos = vec4<f32>(vertexPosition.xyz, 1.0);
//   var fragPosition = globalUniform.viewMat * worldPos ;
//   // var position = globalUniform.projMat * fragPosition ;
//   return fragPosition;
// }

var<private> texSize: vec2<u32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
   var fragCoord = vec2<i32>(globalInvocation_id.xy);
   texSize = textureDimensions(colorMap).xy;
   var color = coordFun(fragCoord);
   // color = vec4(pow(color.rgb,vec3<f32>(1.0/2.4)),1.0);
   textureStore(outputBuffer, fragCoord, color);
}

`;class Nb{constructor(){a(this,"computeShader");a(this,"worldPosMap");a(this,"worldNormalMap");a(this,"colorMap");a(this,"shadowMap");a(this,"pointShadowMap");a(this,"lightingTexture");let A=K.setting.gi;this.lightingTexture=new Kt(A.probeSourceTextureSize,A.probeSourceTextureSize,MA.rgba16float,!1,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING)}create(A){let e=Le.getLightEntries(A.scene);this.computeShader=new Ii(Fb);let t=Le.getCameraGroup(A.camera);this.computeShader.setUniformBuffer("globalUniform",t.uniformGPUBuffer),this.computeShader.setStorageTexture("outputBuffer",this.lightingTexture),this.computeShader.setStorageBuffer("lightBuffer",e.storageGPUBuffer),this.computeShader.setStorageBuffer("models",Le.modelMatrixBindGroup.matrixBufferDst),this.computeShader.setSamplerTexture("positionMap",this.worldPosMap),this.computeShader.setSamplerTexture("normalMap",this.worldNormalMap),this.computeShader.setSamplerTexture("colorMap",this.colorMap),this.computeShader.setSamplerTexture("shadowMap",this.shadowMap),this.computeShader.setSamplerTexture("pointShadowMap",this.pointShadowMap),this.computeShader.setSamplerTexture("prefilterMap",K.res.defaultSky)}setInputs(A){this.worldPosMap=A[0],this.worldNormalMap=A[1],this.colorMap=A[2],this.shadowMap=A[3],this.pointShadowMap=A[4]}compute(A,e){this.computeShader||this.create(A);let t=sA.beginCommandEncoder(),i=K.setting.gi;this.computeShader.workerSizeX=i.probeSourceTextureSize/8,this.computeShader.workerSizeY=i.probeSourceTextureSize/8,this.computeShader.workerSizeZ=1,sA.computeCommand(t,[this.computeShader])}}let vg=new qr("GIRenderStartEvent"),Lb=new qr("GIRenderCompleteEvent");class Ub{constructor(){a(this,"count");a(this,"complete")}}class kb extends eo{constructor(e){super();a(this,"cubeCamera");a(this,"volume");a(this,"probeCountPerFrame",1);a(this,"nextProbeIndex",-1);a(this,"tempProbeList",[]);a(this,"isRenderCloudGI");a(this,"probeRenderResult");a(this,"renderStatus","none");a(this,"positionMap");a(this,"normalMap");a(this,"colorMap");a(this,"probeNext",128);a(this,"sizeW");a(this,"sizeH");a(this,"lightingPass");a(this,"bouncePass");a(this,"irradianceComputePass");a(this,"irradianceDepthMap");a(this,"irradianceColorMap");this.passType=QA.GI,this.volume=e;let t=e.setting;this.cubeCamera=new Db(.01,5e3),this.sizeW=t.probeSourceTextureSize,this.sizeH=t.probeSourceTextureSize,this.probeNext=t.probeSourceTextureSize/t.probeSize,this.initIrradianceMap(e),this.probeRenderResult=new Ub;let i=new xb(this.sizeW,this.sizeH,!1);this.positionMap=i.renderTargets[0],this.normalMap=i.renderTargets[1],this.colorMap=i.renderTargets[2],this.setRenderStates(i)}setInputTexture(e){this.lightingPass=new Nb,this.bouncePass=new Pb(this.volume),this.irradianceComputePass=new Mb(this.volume),this.lightingPass.setInputs([this.positionMap,this.normalMap,this.colorMap,e[0],e[1]]),this.bouncePass.setInputs([this.normalMap,this.colorMap,this.lightingPass.lightingTexture,this.irradianceColorMap]),this.irradianceComputePass.setTextures([this.positionMap,this.normalMap,this.bouncePass.blendTexture],this.irradianceColorMap,this.irradianceDepthMap)}setIrradianceData(e,t,i,n){if(i!=this.irradianceColorMap.width||n!=this.irradianceColorMap.height){console.error("irradiance image size not match !");return}this.writeToTexture(this.irradianceColorMap,e,i,n),this.writeToTexture(this.irradianceDepthMap,t,i,n)}updateProbe(e,t,i){let n=IA.instance.getLights(e.scene),s=this.volume.setting.probeSize;t.drawCallFrame+=1,this.cubeCamera.x=t.x,this.cubeCamera.y=t.y,this.cubeCamera.z=t.z,this.volume.setting.debugCamera?(this.cubeCamera.x=e.camera.transform.x,this.cubeCamera.y=e.camera.transform.y,this.cubeCamera.z=e.camera.transform.z,this.cubeCamera.rotationX=e.camera.transform.rotationX,this.cubeCamera.rotationY=e.camera.transform.rotationY,this.cubeCamera.rotationZ=e.camera.transform.rotationZ):(this.cubeCamera.rotationX=t.rotationX,this.cubeCamera.rotationY=t.rotationY,this.cubeCamera.rotationZ=t.rotationZ);let o=this.cubeCamera,u=Math.floor(t.index/this.probeNext)*(s*6),l=Math.floor(t.index%this.probeNext)*s;i.setViewport(0+u,l,s,s,0,1),this.renderSceneOnce(e,o.right_camera,i,n),i.setViewport(s+u,l,s,s,0,1),this.renderSceneOnce(e,o.left_camera,i,n),i.setViewport(s*2+u,l,s,s,0,1),this.renderSceneOnce(e,o.up_camera,i,n),i.setViewport(s*3+u,l,s,s,0,1),this.renderSceneOnce(e,o.down_camera,i,n),i.setViewport(s*4+u,l,s,s,0,1),this.renderSceneOnce(e,o.front_camera,i,n),i.setViewport(s*5+u,l,s,s,0,1),this.renderSceneOnce(e,o.back_camera,i,n)}renderSceneOnce(e,t,i,n){this.volume.uploadBuffer();let s=IA.instance.getRenderNodes(e.scene,t);sA.bindCamera(i,t);let o=Math.max(0,K.setting.render.drawOpMin),u=Math.min(K.setting.render.drawOpMax,s.opaqueList.length),l=IA.instance.getRenderShaderCollect(e);for(const c of l){let h=c[1];for(const d of h){let f=d[1];if(f.preInit){f.nodeUpdate(e,this.passType,this.rendererPassState,null);break}}}for(let c=o;c<u;++c){let h=s.opaqueList[c];h.enable&&h.transform.enable&&(h.preInit||h.nodeUpdate(e,this.passType,this.rendererPassState,null),h.renderPass2(e,this.passType,this.rendererPassState,null,i))}IA.instance.sky&&(IA.instance.sky.preInit||IA.instance.sky.nodeUpdate(e,this.passType,this.rendererPassState,null),IA.instance.sky.renderPass2(e,this.passType,this.rendererPassState,null,i)),o=Math.max(0,K.setting.render.drawTrMin),u=Math.min(K.setting.render.drawTrMax,s.transparentList.length);for(let c=o;c<u;++c){let h=s.transparentList[c];h.enable&&h.transform.enable&&(h.preInit||h.nodeUpdate(e,this.passType,this.rendererPassState,null),h.renderPass2(e,this.passType,this.rendererPassState,null,i))}}render(e,t){if(!K.setting.gi.enable)return;this.volume.updateOrientation(),this.volume.isVolumeFrameChange=!1,this.volume.uploadBuffer(),this.rendProbe(e);let i=this.probeRenderResult.count>0;(IA.instance.state.giLightingChange||i||K.setting.gi.realTimeGI)&&(IA.instance.state.giLightingChange=!1,this.lightingPass.compute(e,this.rendererPassState),this.bouncePass.compute(e,this.rendererPassState),this.irradianceComputePass.compute(e,this.rendererPassState)),this.probeRenderResult.complete&&this.dispatchEvent(Lb)}startRenderGI(e=0){this.nextProbeIndex==-1&&e==0&&this.dispatchEvent(vg),this.nextProbeIndex=e,this.renderStatus="rendering"}startRenderCloudGI(){this.dispatchEvent(vg),this.nextProbeIndex=0,this.renderStatus="rendering",this.isRenderCloudGI=!0}rendProbe(e){let t=K.setting.gi.autoRenderProbe,i=!1;if(t?(this.nextProbeIndex==-1&&this.startRenderGI(),i=!0):i=this.renderStatus=="rendering",this.probeRenderResult.count=0,this.probeRenderResult.complete=!1,i){let n=IA.instance.getProbes(e.scene);this.renderContext.clean(),this.renderContext.beginOpaqueRenderPass(),this.tempProbeList.length=0;let s=Math.min(this.probeCountPerFrame,n.length);for(this.probeRenderResult.count=s;s>0;){const u=n[this.nextProbeIndex];this.updateProbe(e,u,this.renderContext.encoder),s--,this.nextProbeIndex++,u.drawCallFrame<3&&this.tempProbeList.push(u)}this.tempProbeList.length>0&&this.volume.updateProbes(this.tempProbeList);let o=this.nextProbeIndex>=n.length;this.nextProbeIndex>=n.length&&this.isRenderCloudGI&&this.updateProbe(e,n[0],this.renderContext.encoder),this.renderContext.endRenderPass(),o&&(this.nextProbeIndex=-1,this.renderStatus="complete",this.probeRenderResult.complete=!0)}}initIrradianceMap(e){let t=e.setting,i=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST;this.irradianceDepthMap=new Kt(t.octRTMaxSize,t.octRTMaxSize,MA.rgba16float,!1,i),this.irradianceDepthMap.name="irradianceDepthMap",this.irradianceColorMap=new Kt(t.octRTMaxSize,t.octRTMaxSize,MA.rgba16float,!1,i),this.irradianceColorMap.name="irradianceColorMap"}writeToTexture(e,t,i,n){console.log(e.name);const s=iA.device.createBuffer({size:t.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});iA.device.queue.writeBuffer(s,0,t);const o=sA.beginCommandEncoder();o.copyBufferToTexture({buffer:s,bytesPerRow:i*16},{texture:e.getGPUTexture()},{width:i,height:n,depthOrArrayLayers:1}),sA.endCommandEncoder(o)}}class wg extends Tb{constructor(A){super(A)}start(){super.start();let A=Zo.getGBufferFrame("ColorPassGBuffer");{let e=[],t=new pb;K.setting.render.zPrePass&&(A.zPreTexture=this.depthPassRenderer.rendererPassState.depthTexture),t.setRenderStates(A);for(let i=0;i<A.renderTargets.length;i++){const n=A.renderTargets[i];e.push(n)}if(K.setting.gi.enable){let i=Le.getLightEntries(this.view.scene);this.ddgiProbeRenderer=new kb(i.irradianceVolume),this.ddgiProbeRenderer.setInputTexture([this.shadowMapPassRenderer.depth2DArrayTexture,this.pointLightShadowRenderer.cubeArrayTexture]),t.setIrradiance(this.ddgiProbeRenderer.irradianceColorMap,this.ddgiProbeRenderer.irradianceDepthMap),this.rendererMap.addRenderer(this.ddgiProbeRenderer),e.push(this.ddgiProbeRenderer.positionMap,this.ddgiProbeRenderer.normalMap,this.ddgiProbeRenderer.colorMap,this.ddgiProbeRenderer.lightingPass.lightingTexture,this.ddgiProbeRenderer.irradianceColorMap,this.ddgiProbeRenderer.irradianceDepthMap)}this.postRenderer&&this.postRenderer.setDebugTexture(e),this.rendererMap.addRenderer(t)}K.setting.render.debug&&this.debug()}debug(){}}class zb{constructor(){a(this,"_factor");a(this,"_doubleFactor");this._factor=1,this._doubleFactor=2}get accelerateInterpolator(){return this._factor}set accelerateInterpolator(A){this._factor=A,this._doubleFactor=2*this._factor}getInterpolation(A){return this._factor==1?A*A:Math.pow(A,this._doubleFactor)}}class Gb{constructor(){a(this,"_factor",1)}get decelerateInterpolator(){return this._factor}set decelerateInterpolator(A){this._factor=A}getInterpolation(A){let e;return this._factor==1?e=1-(1-A)*(1-A):e=1-Math.pow(1-A,2*this._factor),e}}class Vb{constructor(){a(this,"_factor",1)}getInterpolation(A){return Math.cos((A+1)*Math.PI)/2+.5}}class Qb{getInterpolation(A){return A}}class Hb{getInterpolation(A){return 4.9*A+4.9*A}}class mr{constructor(){}static bounce(A){return A*A*9.8}getInterpolation(A){return A*=1.1226,A<.3535?mr.bounce(A):A<.7408?mr.bounce(A-.54719)+.7:A<.9644?mr.bounce(A-.8526)+.9:mr.bounce(A-1.0435)+.95}getBounceInterpolation(A){return A<.5?mr.bounce(A):mr.bounce(A-1)}geJumpUp(A,e){return e<.5?(e=e/.5,A*e-mr.bounce(e)):e<.8?(e=(e-.5)/(.8-.5),(A*e-mr.bounce(e))*.3):e<1?(e=(e-.8)/(1-.8),(A*e-mr.bounce(e))*.15):A*e-mr.bounce(e)}}class jb{constructor(){a(this,"_tension");this._tension=2}get anticipateInterpolator(){return this._tension}set anticipateInterpolator(A){this._tension=A}getInterpolation(A){return A*A*((this._tension+1)*A-this._tension)}}class nc{constructor(){a(this,"_tension");this._tension=1*1.5}anticipateOvershootInterpolator(A){this._tension=A*1.5}anticipateOvershootInterpolator2(A,e){this._tension=A*e}getInterpolation(A){return A<.5?.5*nc.a(A*2,this._tension):.5*(nc.o(A*2-2,this._tension)+2)}static a(A,e){return A*A*((e+1)*A-e)}static o(A,e){return A*A*((e+1)*A+e)}}class Wb{constructor(A){a(this,"_cycles");this._cycles=A}getInterpolation(A){return Math.sin(2*this._cycles*Math.PI*A)}}class Yb{constructor(){a(this,"_tension");this._tension=2}getInterpolation(A){return A-=1,A*A*((this._tension+1)*A+this._tension)+1}}var Z3=(r=>(r[r.AccelerateInterpolator=0]="AccelerateInterpolator",r[r.DecelerateInterpolator=1]="DecelerateInterpolator",r[r.AccelerateDecelerateInterpolator=2]="AccelerateDecelerateInterpolator",r[r.LinearInterpolator=3]="LinearInterpolator",r[r.BounceInterpolator=4]="BounceInterpolator",r[r.AnticipateInterpolator=5]="AnticipateInterpolator",r[r.AnticipateOvershootInterpolator=6]="AnticipateOvershootInterpolator",r[r.CycleInterpolator=7]="CycleInterpolator",r[r.OvershootInterpolator=8]="OvershootInterpolator",r[r.JumperInterpolator=9]="JumperInterpolator",r))(Z3||{});const In=class In{constructor(){a(this,"complete",!1);a(this,"onComplete");a(this,"onProgress");a(this,"target");a(this,"property");a(this,"targetProperty");a(this,"durtion");a(this,"interpolatorEnum");a(this,"delayTime",0);a(this,"_interpolator");a(this,"_ct",0);a(this,"_p",0)}static to(A,e,t,i=0){var n=new In;return n.target=A,n.property=e,n.durtion=t,n.interpolatorEnum=i,n.start(),n.delayTime=e.delayTime?e.delayTime:0,e.onComplete&&(n.onComplete=e.onComplete),e.onProgress&&(n.onProgress=e.onProgress),this.interpolators.push(n),n}static tick(A){let e=In.interpolators;for(let t of e)t.complete?In.remove(t,!0):t.tick(A)}static remove(A,e){let t=In.interpolators,i=t.indexOf(A);i!=-1&&t.splice(i,1),e&&A.dispose()}static removeList(A,e){A.forEach(t=>{this.remove(t,e)})}start(){window.AccelerateInterpolator=zb,window.DecelerateInterpolator=Gb,window.AccelerateDecelerateInterpolator=Vb,window.LinearInterpolator=Qb,window.BounceInterpolator=mr,window.AnticipateInterpolator=jb,window.AnticipateOvershootInterpolator=nc,window.CycleInterpolator=Wb,window.OvershootInterpolator=Yb,window.JumperInterpolator=Hb,this._interpolator=new window[Z3[this.interpolatorEnum]],this.targetProperty={};for(let A in this.property)this.targetProperty[A]=this.target[A]}tick(A){if(this.delayTime<=0){this._p=Math.min(this._ct/this.durtion,1);let e=this._interpolator.getInterpolation(this._p),t=this.property,i=this.target,n=this.targetProperty,s,o;for(let u in t)o=t[u],s=n[u],i[u]=s+(o-s)*e;this.onProgress!=null&&this.onProgress(this._p),this._ct>=this.durtion&&(this.complete=!0,this.onComplete!=null&&this.onComplete(this.target)),this._ct+=A}else this.delayTime-=A}dispose(){this.onComplete=null,this.onProgress=null,this.target=null,this.property=null,this.targetProperty=null,this.interpolatorEnum=null,this._interpolator=null,In.remove(this)}};a(In,"interpolators",[]);let Zd=In;class Ut{static hasString(A,e){for(var t=0;t<A.length;++t)if(A[t]==e)return t;return-1}static getEllipsis(A,e=4){let t=A;return t.length>e&&(t=t.slice(0,e)+"..."),t}static getURLName(A){var e;e=A.split("/");let t=e[e.length-1];return t=t.split(".")[0],t}static getFileFormat(A){var e=A.lastIndexOf(".");e++;var t=A.length;A.indexOf("?",e)!==-1&&(t=A.indexOf("?",e));var i=A.substr(e,t-e);return i=i.toLowerCase(),i}static readLineProperty(A,e){A.trim().split(" ").forEach((t,i)=>{let n=t.split("=");if(n.length>1){let s=n[0],o=n[1];Object.prototype.hasOwnProperty.call(e,s)&&(o.indexOf('"')==-1?e[s]=parseFloat(n[1]):e[s]=o.replace('"',"").replace('"',""))}})}static getPath(A){var e=A.lastIndexOf("/");return e++,A.substring(0,e)}static normalizePath(A){var e=A.replaceAll("//","/");return e=e.replaceAll("\\","/"),e}static getStringList(A,e=";"){return A.split(e)}static formatTime(A){let e=A/1e3/60,t=Math.floor(e),i=Math.floor(e-t);return[t.toString(),i.toString()]}static trim(A){return A.replace(/^\s+/g,"").replace(/\s+$/g,"")}static isEmpty(A){return!A||typeof A>"u"||A==null||typeof A=="string"&&this.trim(A)===""||A==="null"}static strCut(A,e){if(A.length*2<=e)return A;for(var t=0,i="",n=0;n<A.length;n++)if(i=i+A.charAt(n),A.charCodeAt(n)>128){if(t=t+2,t>=e)return i.substring(0,i.length-1)+"..."}else if(t=t+1,t>=e)return i.substring(0,i.length-2)+"...";return i}static toQueryPair(A,e,t=!1){return A+"="+(t?encodeURIComponent(e):e)}static stringFormat(A,...e){if(arguments.length===0)throw new Error("please give arg at least one !");if(arguments.length===2&&typeof arguments[1]=="object")for(let t in arguments[1]){let i=new RegExp("({"+t+"})","g");A=A.replace(i,arguments[1][t])}else for(let t=0;t<e.length;t++){if(e[t]==null)return A;{let i=new RegExp("({["+t+"]})","g");A=A.replace(i,e[t])}}return A}static parseJson2String(A,e){let t=null,i="",n=0,s="    ";return e=e||{},e.newlineAfterColonIfBeforeBraceOrBracket=e.newlineAfterColonIfBeforeBraceOrBracket===!0,e.spaceAfterColon=e.spaceAfterColon!==!1,typeof A!="string"||(A=JSON.parse(A)),A=JSON.stringify(A),t=/([\{\}])/g,A=A.replace(t,`\r
$1\r
`),t=/([\[\]])/g,A=A.replace(t,`\r
$1\r
`),t=/(\,)/g,A=A.replace(t,`$1\r
`),t=/(\r\n\r\n)/g,A=A.replace(t,`\r
`),t=/\r\n\,/g,A=A.replace(t,","),e.newlineAfterColonIfBeforeBraceOrBracket||(t=/\:\r\n\{/g,A=A.replace(t,":{"),t=/\:\r\n\[/g,A=A.replace(t,":[")),e.spaceAfterColon&&(t=/\:/g,A=A.replace(t,":")),A.split(`\r
`).forEach(function(o,u){let l=0,c=0,h="";for(o.match(/\{$/)||o.match(/\[$/)?c=1:o.match(/\}/)||o.match(/\]/)?n!==0&&(n-=1):c=0,l=0;l<n;l++)h+=s;i+=h+o+`\r
`,n+=c}),i}static compareVersion(A,e){A=A.split("."),e=e.split(".");let t=Math.max(A.length,e.length);for(;A.length<t;)A.push("0");for(;e.length<t;)e.push("0");for(let i=0;i<t;i++){let n=parseInt(A[i]),s=parseInt(e[i]);if(n>s)return 1;if(n<s)return-1}return 0}static buildRandomCode(){let A="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",e=A.length,t="";for(let i=0;i<26;i++){let n=Math.floor(Math.random()*e);t+=A.charAt(n)}return`${new Date().getTime()}-${t}`}static UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(A){var e=Math.random()*16|0,t=A=="x"?e:e&3|8;return t.toString(16)})}static stringToHash(A){let e=0;if(A.length==0)return e;for(let t=0;t<A.length;t++){const i=A.charCodeAt(t);e=(e<<5)-e+i,e=e&e}return e}static parseUrl(A,e){return e.match(/^(blob|http|https):/)?e:A+e}}a(Ut,"_filterChar",[" ","  ",";",`
`,"\r","	",`
`,"\r","	"]);class Hn extends Tt{constructor(e=!0){super();a(this,"_source");a(this,"premultiplyAlpha","none");a(this,"imageData");this.useMipmap=e,this.lodMinClamp=0,this.lodMaxClamp=4}get source(){return this._source}set source(e){this._source=e,this._source instanceof HTMLImageElement?this._source.decode().then(async()=>{if(this._source instanceof HTMLImageElement){const t=await createImageBitmap(this._source,{imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"});this.generate(t)}}):(this._source instanceof HTMLCanvasElement||this._source instanceof ImageBitmap)&&this.generate(this._source)}async load(e,t){if(this.name=Ut.getURLName(e),e.indexOf(";base64")!=-1){const i=document.createElement("img");let n=e.indexOf("data:image"),s=e.substring(n,e.length);i.src=s,await i.decode(),i.width=Math.max(i.width,32),i.height=Math.max(i.height,32);const o=await createImageBitmap(i,{resizeWidth:i.width,resizeHeight:i.height,imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"});this.format=MA.rgba8unorm,this.generate(o)}else return new Promise((i,n)=>{fetch(e,{headers:Object.assign({Accept:"image/avif,image/webp,*/*"},t==null?void 0:t.headers)}).then(s=>{Ro.read(e,s,t).then(o=>{let u=new Blob([o],{type:"image/jpeg"});o=null,this.loadFromBlob(u).then(()=>{i(!0)})})})});return!0}async loadFromBlob(e){this.imageData=e;let t=await createImageBitmap(e,{imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"});if(t.width<32||t.height<32){let i=Math.max(t.width,32),n=Math.max(t.height,32);t=await createImageBitmap(t,{resizeWidth:i,resizeHeight:n,imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"})}return this.format=MA.rgba8unorm,this.generate(t),!0}}class Ro{constructor(){a(this,"baseUrl","");a(this,"initUrl");a(this,"_progress",0)}async loadBinData(A,e){return this.baseUrl=Ut.getPath(A),this.initUrl=A,new Promise(async(t,i)=>{fetch(A,{headers:e==null?void 0:e.headers}).then(async n=>{if(n.ok){let s=await Ro.read(A,n,e),o=s.buffer;s=null,t(o)}else throw Error("request rejected with status "+n.status)}).catch(n=>{e.onError&&e.onError(n),i(n)})})}async loadAsyncBitmapTexture(A,e){this.baseUrl=Ut.getPath(A),this.initUrl=A;let t=new Hn;return t.url=A,t.name=Ut.getURLName(A),await t.load(A,e),K.res.addTexture(A,t),t}async loadJson(A,e){return this.baseUrl=Ut.getPath(A),this.initUrl=A,new Promise(async(t,i)=>{fetch(A,{headers:e==null?void 0:e.headers}).then(async n=>{if(n.ok){let s=await Ro.read(A,n,e);const o=new TextDecoder("utf-8").decode(s);s=null,t(JSON.parse(o))}else throw Error("request rejected with status"+n.status)}).catch(n=>{e.onError&&e.onError(n),i(n)})})}async loadTxt(A,e){return this.baseUrl=Ut.getPath(A),new Promise(async(t,i)=>{fetch(A).then(async n=>{if(n.ok){let s=await Ro.read(A,n,e);const o=new TextDecoder("utf-8").decode(s);s=null,t({data:o})}else throw Error("request rejected with status"+n.status)}).catch(n=>{e.onError&&e.onError(n),i(n)})})}static async read(A,e,t){const i=e.body.getReader(),n=+e.headers.get("Content-Length");let s=0,o=[],u=[];for(;;){const{done:h,value:d}=await i.read();if(h){n>0&&t&&t.onComplete&&t.onComplete.call(this,A);break}o.push(d),s+=d.length,n>0?t&&t.onProgress&&t.onProgress.call(this,s,n,A):u.push(d.length)}if(u.length>0)for(let h=0;h<o.length;h++)console.log(u[h]),t&&t.onProgress&&t.onProgress.call(this,u[h],s,A),u[h]==s&&t&&t.onComplete&&t.onComplete.call(this,A);let l=new Uint8Array(s),c=0;for(let h of o)l.set(h,c),c+=h.length;return l}}var nt=(r=>(r[r.TEXT=0]="TEXT",r[r.BIN=1]="BIN",r[r.JSON=2]="JSON",r))(nt||{});class Yt extends Ro{async load(A,e,t,i){switch(e.format){case nt.BIN:return new Promise(async(n,s)=>{this.loadBinData(A,t).then(async o=>{let u=new e;if(u.userData=i,u.baseUrl=this.baseUrl,u.initUrl=A,await u.parseBuffer(o),u.verification())n(u);else throw new Error("parser error")}).catch(o=>{s(o)})});case nt.JSON:return new Promise((n,s)=>{this.loadJson(A,t).then(async o=>{let u=new e;u.userData=i,u.baseUrl=this.baseUrl,u.initUrl=A,u.loaderFunctions=t,await u.parseJson(o),n(u)}).catch(o=>{s(o)})});case nt.TEXT:return new Promise((n,s)=>{this.loadTxt(A,t).then(async o=>{let u=new e;u.userData=i,u.baseUrl=this.baseUrl,u.initUrl=A,u.loaderFunctions=t,o.data?(await u.parseString(o.data),n(u)):s("text load is empty!")}).catch(o=>{s(o)})})}}}class Qt{constructor(){a(this,"baseUrl");a(this,"initUrl");a(this,"loaderFunctions");a(this,"userData");a(this,"data")}parseString(A){}parseJson(A){}parseBuffer(A){}parseTexture(A){throw this.parserError("Method not implemented.",-1)}parse(A){}verification(A){throw this.parserError("Method not implemented.",-1)}parserError(A,e){console.error(`error id:${e} ${A}`)}}a(Qt,"format",nt.BIN);class Af{constructor(){a(this,"asset");a(this,"accessors");a(this,"buffers");a(this,"bufferViews");a(this,"materials");a(this,"meshes");a(this,"nodes");a(this,"scene",0);a(this,"scenes");a(this,"textures");a(this,"cameras");a(this,"skins");a(this,"resources");a(this,"images");a(this,"samplers");a(this,"animations");a(this,"extensions")}}const $b=5120,Kb=5121,qb=5122,Xb=5123,Jb=5124,Zb=5125,A6=5126,e6=32819,t6=32820,r6=33635,i6=5131,n6=33640,s6=35899,o6=35902,a6=36269,u6=34042,Ay={};{const r=Ay;r[$b]=Int8Array,r[Kb]=Uint8Array,r[qb]=Int16Array,r[Xb]=Uint16Array,r[Jb]=Int32Array,r[Zb]=Uint32Array,r[A6]=Float32Array,r[e6]=Uint16Array,r[t6]=Uint16Array,r[r6]=Uint16Array,r[i6]=Uint16Array,r[n6]=Uint32Array,r[s6]=Uint32Array,r[o6]=Uint32Array,r[a6]=Uint32Array,r[u6]=Uint32Array}function bg(r){const A=Ay[r];if(!A)throw new Error("unkonw gl type");return A}class sc{static async apply(A,e){if(!e.extensions)return;const t=e.extensions.KHR_draco_mesh_compression;if(!t)return;let i=this._workers.get(A.gltf);i||(i=new Worker(await this.initDecoder()),this._workers.set(A.gltf,i)),i.postMessage({type:"init",decoderConfig:{}});let n=A.parseBufferView(t.bufferView);if(!n.result){let s=await new Promise((o,u)=>{i.onmessage=l=>{const c=l.data;c.type=="decode"?o(c.result):c.type=="error"&&u(c.error)},i.postMessage({type:"decoder",buffer:n,attributes:t.attributes},[n])});n.result=s}return n.result}static unload(A){let e=this._workers.get(A);e&&(e.terminate(),this._workers.delete(A))}static async initDecoder(){if(!this._workerCode){let A=await new Yt().loadTxt("https://cdn.orillusion.com/draco_decoder_gltf.js");const e=new Blob([A.data,"",`(${l6})()`],{type:"application/javascript"});this._workerCode=URL.createObjectURL(e)}return this._workerCode}}a(sc,"_workerCode"),a(sc,"_workers",new Map);function l6(){let r,A;onmessage=e=>{const t=e.data;switch(t.type){case"init":r=t.decoderConfig,A=new Promise((s,o)=>{r.onModuleLoaded=u=>{s({draco:u})},DracoDecoderModule(r)});break;case"decoder":const i=t.buffer,n=t.attributes;A.then(s=>{const o=s.draco;let u=new o.Decoder,l=new o.DecoderBuffer;l.Init(new Int8Array(i),i.byteLength);let c,h;try{const d=u.GetEncodedGeometryType(l);d==o.TRIANGULAR_MESH?(h=new o.Mesh,c=u.DecodeBufferToMesh(l,h)):self.postMessage(new Error("INVALID_GEOMETRY_TYPE:"+d)),c.ok()||self.postMessage(new Error("DracoDecode:"+c.error_msg()));let f={};for(const p in n){let y=u.GetAttributeByUniqueId(h,n[p]);const _=y.num_components(),g=h.num_points()*_,m=g*Float32Array.BYTES_PER_ELEMENT,E=o.DT_FLOAT32,w=o._malloc(m);u.GetAttributeDataArrayForAllPoints(h,y,E,m,w);const L=new Float32Array(o.HEAPF32.buffer,w,g).slice();o._free(w),f[p]={data:L,numComponents:_,normalize:!1}}{const p=h.num_faces()*3,y=p*4,_=o._malloc(y);u.GetTrianglesUInt32Array(h,y,_);const g=new Uint32Array(o.HEAPF32.buffer,_,p).slice();o._free(_),f.indices={data:g,numComponents:1,normalize:!1}}self.postMessage({type:"decode",result:f})}catch(d){self.postMessage({type:"error",error:d.message})}finally{o.destroy(h),o.destroy(u),o.destroy(l)}});break}}}class c6{constructor(A){a(this,"gltf");this.gltf=A}parse(A){const e=this.gltf.cameras[A];if(!e)return this.errorMiss("camera",A);if(e.isParsed)return e.dcamera;e.isParsed=!0,e.dcamera=!1;const{name:t,type:i,perspective:n,orthographic:s}=e;if(i==="perspective"&&n){const{aspectRatio:o,yfov:u,zfar:l,znear:c}=n;e.dcamera=Object.assign({},{name:t,type:i,yfov:u,znear:c,aspectRatio:o,zfar:l})}else if(i==="orthographic"&&s){const{xmag:o,ymag:u,zfar:l,znear:c}=s;e.dcamera=Object.assign({},{name:t,type:i,xmag:o,ymag:u,zfar:l,znear:c})}return e.dcamera}errorMiss(A,e){throw new Error(A+e)}}const vo=class vo extends Qt{constructor(){super(...arguments);a(this,"_gltf")}async parseJson(e){this._gltf=new Af,this._gltf={...this._gltf,...e},this._gltf.resources={},await Promise.all([this.load_gltf_bin(),this.load_gltf_textures()]);let t=new tf,i=await t.parse(this.initUrl,this._gltf,this._gltf.scene);return t.destory(),t=null,i?(this.data=i.rootNode,i.rootNode):(this._gltf=null,null)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}static getMeshNameCounter(){return function(){return`GLTF_NO_NAME_PRIMITIVE_${vo._counter++}`}}static getModelNameCounter(){let e=0;return function(){return`GLTF_NO_NAME_MESH_${e++}`}}static getTexCoordDefine(e){return`UV_NUM ${e}`}static getVertexColorDefine(e){return`HAS_VERTEXCOLOR ${e}`}static getBaseColorTextureDefine(){return"HAS_BASECOLORMAP"}static getMetalRoughnessDefine(){return"HAS_METALROUGHNESSMAP"}static getNormalMapDefine(){return"HAS_NORMALMAP"}static getEmissiveMapDefine(){return"HAS_EMISSIVEMAP"}static getOcclusionMapDefine(){return"HAS_OCCLUSIONMAP"}static getMorphTargetsDefine(e){return`MORPH_TARGET_NUM ${e}`}static getMorphtargetPositionDefine(){return"HAS_MORPH_POSITION"}static getMorphtargetNormalDefine(){return"HAS_MORPH_NORMAL"}static getMorphtargetTangentDefine(){return"HAS_MORPH_TANGENT"}static getJointsNumDefine(e){return`JOINTS_NUM ${e}`}static getJointVec8Define(){return"JOINT_VEC8"}static getHasNormalDefine(){return"HAS_NORMAL"}static getHasTangentDefine(){return"HAS_TANGENT"}static getHasNormalMapDefine(){return"HAS_NORMAL_MAP"}static getAlphaMaskDefine(){return"ALPHA_MASK"}static getAlphaBlendDefine(){return"ALPHA_BLEND"}async load_gltf_bin(){var e;if(this._gltf.buffers&&this._gltf.buffers.length>0){let t=[];for(let i=0;i<this._gltf.buffers.length;i++){const n=this._gltf.buffers[i];if(n.uri.substring(0,5)!=="data:"){let s=Ut.parseUrl(this.baseUrl,n.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(s=await this.loaderFunctions.onUrl(s));let o=new Yt().loadBinData(s,this.loaderFunctions).then(u=>{this._gltf.resources[n.uri]=u});t.push(o)}}await Promise.all(t)}}async load_gltf_textures(){var e;if(this._gltf,this._gltf.images){let t=[];for(let i=0;i<this._gltf.images.length;i++){const n=this._gltf.images[i];if(n.uri){let s=Ut.parseUrl(this.baseUrl,n.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(s=await this.loaderFunctions.onUrl(s));let o=new Yt().loadAsyncBitmapTexture(s,this.loaderFunctions).then(u=>{u.name=Ut.getURLName(n.uri),this._gltf.resources[u.name]=u});t.push(o)}}await Promise.all(t)}}};a(vo,"format",nt.JSON),a(vo,"_counter",0),a(vo,"defaultMaterial",{name:"GLTF_DEFAULT_MATERIAL",alphaCutoff:.33,alphaMode:"MASK",pbrMetallicRoughness:{name:"GLTF_DEFAULT_MATERIAL",defines:[],doubleSided:!1,baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1,emissiveFactor:[0,0,0]}});let Nt=vo;class h6{constructor(A){a(this,"gltf");a(this,"subParser");this.gltf=A.gltf,this.subParser=A}async parse(A){const e=this.gltf.meshes[A];if(!e)return this.errorMiss("mesh",A);if(e.isParsed)return e.dprimitives;const t=e.primitives,i=e.extras,n=[];for(let s=0;s<t.length;s++){const o=t[s],{attributes:u,indices:l,material:c,mode:h,name:d,targets:f,morphTargetsRelative:p,extensions:y}=o;let _=e.name;for(let R in u)_+=R;_+=`indices:${l}`,_+=`material:${c}`;const g={attribArrays:{indices:[]},weights:[],defines:[],material:null,drawMode:null,meshName:null,modelName:null,morphTargetsRelative:!1,targetNames:i?i.targetNames:null};let m=!1,E=0,w=!1,L;y&&y.KHR_draco_mesh_compression&&(L=await sc.apply(this.subParser,o));for(const R in u){const P=L?L[R]:this.parseAccessor(u[R]);if(P){let F;switch(R){case"POSITION":F=pA.position;break;case"NORMAL":F=pA.normal,m=!0;break;case"TEXCOORD_0":F=pA.uv,E++;break;case"JOINTS_0":F=pA.joints0;break;case"JOINTS_1":F=pA.joints1,w=!0;break;case"WEIGHTS_0":F=pA.weights0;break;case"WEIGHTS_1":F=pA.weights1;break;default:F=R}g.attribArrays[F]=P}}if(m&&g.defines.push(Nt.getHasNormalDefine()),E&&g.defines.push(Nt.getTexCoordDefine(E)),w&&g.defines.push(Nt.getJointVec8Define()),l!==void 0){const R=L?L.indices:this.parseAccessor(l);R&&(g.attribArrays.indices=R)}const T=await this.parseMaterial(c);if(T&&(g.material=T,g.defines=g.defines.concat(T.defines)),g.drawMode=h===void 0?4:h,g.meshName=()=>_,g.modelName=e.name||Nt.getModelNameCounter(),f){g.defines.push(Nt.getMorphTargetsDefine(f.length)),g.morphTargetsRelative=!0;let R=!1,P=!1,F=!1;for(let H=0;H<f.length;H++){const M=f[H];Object.keys(M).forEach(b=>{const v=this.parseAccessor(M[b]);if(v){let C;switch(b){case"POSITION":C=fe.MORPH_POSITION_PREFIX+H,R=!0;break;case"NORMAL":C=fe.MORPH_NORMAL_PREFIX+H,P=!0;break;case"TANGENT":C=fe.MORPH_TANGENT_PREFIX+H,F=!0;break;default:C=!1}C?g.attribArrays[C]=v:console.error(`glTF has unsupported morph target attribute ${b}`)}})}R&&g.defines.push(Nt.getMorphtargetPositionDefine()),P&&g.defines.push(Nt.getMorphtargetNormalDefine()),F&&g.defines.push(Nt.getMorphtargetTangentDefine()),g.weights=e.weights||new Array(f.length).fill(0)}n.push(g)}return e.dprimitives=n,e.isParsed=!0,e.dprimitives}parseAccessor(A){return this.subParser.parseAccessor(A)}parseMaterial(A){return this.subParser.parseMaterial(A)}errorMiss(A,e){throw new Error(A+e)}}class d6{constructor(A){a(this,"gltf");a(this,"subParser");this.gltf=A.gltf,this.subParser=A}async parse(A){let e;if(A==null?e=Nt.defaultMaterial:e=this.gltf.materials[A],!e)return this.errorMiss("material",A);if(e.isParsed)return e.dmaterial;let{name:t,pbrMetallicRoughness:i,normalTexture:n,occlusionTexture:s,emissiveTexture:o,emissiveFactor:u,alphaMode:l,alphaCutoff:c,doubleSided:h,extensions:d}=e;const f={name:t,defines:[],doubleSided:!!h,baseColorFactor:[1,1,1,1],emissiveFactor:null,alphaCutoff:0,enableBlend:!1,baseColorTexture:null,metallicRoughnessTexture:null,normalTexture:null,occlusionTexture:null,emissiveTexture:null,transformUV1:null,transformUV2:null,extensions:null};if(i){const{baseColorFactor:p,metallicFactor:y,roughnessFactor:_,baseColorTexture:g,metallicRoughnessTexture:m}=i;if(Object.assign(f,{baseColorFactor:p||[1,1,1,1],metallicFactor:y===void 0?1:y,roughnessFactor:_===void 0?.5:_}),g){let E=g.extensions;if(E){let L=E.KHR_texture_transform;L&&(f.transformUV1=new XA(L.offset?L.offset[0]:0,L.offset?L.offset[1]:0,L.scale?L.scale[0]:1,L.scale?L.scale[1]:1))}const w=await this.parseTexture(g.index);w?f.baseColorTexture=w:f.baseColorTexture=K.res.redTexture}if(m){const E=await this.parseTexture(m.index);E?f.metallicRoughnessTexture=E:f.metallicRoughnessTexture=K.res.blackTexture}}else Object.assign(f,{baseColorFactor:[1,1,1,1],metallicFactor:0,roughnessFactor:.5});if(f.baseColorFactor&&f.baseColorFactor[3]<1&&(l=l==="MASK"?"MASK":"BLEND"),l&&l!=="OPAQUE"&&(l==="MASK"&&(f.defines.push(Nt.getAlphaMaskDefine()),f.alphaCutoff=c===void 0?.5:c),l==="BLEND"&&(f.defines.push(Nt.getAlphaBlendDefine()),f.enableBlend=!0)),n){const p=await this.parseTexture(n.index);p?f.normalTexture=p:f.normalTexture=K.res.normalTexture}if(s){const p=await this.parseTexture(s.index);p&&(f.occlusionTexture=p)}if(u&&(f.emissiveFactor=u),o){const p=await this.parseTexture(o.index);p?f.emissiveTexture=p:f.emissiveTexture=K.res.blackTexture}return d&&(f.extensions=d),e.isParsed=!0,e.dmaterial=f,f}async parseTexture(A){return this.subParser.parseTexture(A)}errorMiss(A,e){throw new Error(A+e)}}class f6{constructor(A){a(this,"gltf");a(this,"subParser");this.gltf=A.gltf,this.subParser=A}parse(A){const e=this.gltf.skins[A];if(!e)return this.errorMiss("skin",A);if(e.isParsed)return e.dskin;const{name:t,joints:i,inverseBindMatrices:n,skeleton:s}=e;if(!i)return this.errorMiss("skin.joints",A);e.isParsed=!0,e.dskin=!1;let o={name:t,skeleton:null,inverseBindMatrices:null,joints:i,defines:[Nt.getJointsNumDefine(i.length)]};if(s)o.skeleton=s;else{var u=-1;for(let l=0;l<this.gltf.nodes.length;l++)if(this.gltf.nodes[l].name=="root"){u=l;break}if(u==-1){let l=this.gltf.scenes[this.gltf.scene];u=l.nodes[l.nodes.length-1]}o.skeleton=u}if(o.inverseBindMatrices=fe.IDENTITY_INVERSE_BIND_MATRICES,n!==void 0){const l=this.parseAccessor(n);if(l){const c=l.data,h=[];for(let d=0;d<c.length;d+=16)h.push(c.slice(d,d+16));o.inverseBindMatrices=h}else o=null}return e.dskin=o,e.dskin}parseAccessor(A){return this.subParser.parseAccessor(A)}errorMiss(A,e){throw new Error(A+e)}}class p6{constructor(A=""){a(this,"name","");a(this,"index",0);a(this,"instanceID","");a(this,"parent",null);a(this,"scale",new I);a(this,"rotation",new oe);a(this,"translation",new I);this.name=A}}class g6{constructor(A=[]){a(this,"joints");this.joints=A}get numJoint(){return this.joints.length}addJoint(A){A.index=this.joints.push(A)-1}getJointName(A){return this.joints[A].name}getJointParentIndex(A){let e=this.joints[A];return e.parent?e.parent.index:-1}getJointByName(A){for(let e of this.joints)if(e.name==A)return e;return null}}class Ig{constructor(A,e=!1){a(this,"index");a(this,"worldMatrix");this.index=A,this.worldMatrix=new NA(!e)}}class oc{constructor(A,e=!1){a(this,"time");a(this,"_skeleton");a(this,"_jointsPose");a(this,"mJointMatrixIndexTable");this._skeleton=A,this._jointsPose=new Array(A.numJoint),this.mJointMatrixIndexTable=new Array(A.numJoint);for(let t=0;t<A.numJoint;t++){let i=new Ig(t,e);this._jointsPose[t]=i,this.mJointMatrixIndexTable[t]=i.worldMatrix.index}}buildSkeletonPose(A){let e=new I,t=new oe,i=new I,n=new Array(this._skeleton.numJoint);this.time=A[11]>0?A[11]:A[24];for(let s=0;s<this._skeleton.numJoint;s++){let o=12*s*4,u=new Float32Array(A.buffer,A.byteOffset+o,12),l=new NA;e.set(u[0],u[1],u[2]),t.set(u[4],u[5],u[6],u[7]),i.set(u[8],u[9],u[10]),Yd(t.getEulerAngles(),i,e,l),n[s]=l;let c=new Ig(s);const h=this._skeleton.getJointParentIndex(s);if(h<0)c.worldMatrix.copyFrom(l);else{let d=this._jointsPose[h];d4(d.worldMatrix,l,c.worldMatrix)}this._jointsPose[s]=c}}get numJoint(){return this._skeleton.numJoint}get joints(){return this._jointsPose}get jointMatrixIndexTable(){return this.mJointMatrixIndexTable}lerp(A,e,t){if(A&&e)for(let i=0;i<this._jointsPose.length;i++){let n=A._jointsPose[i],s=e._jointsPose[i];this._jointsPose[i].worldMatrix.lerp(n.worldMatrix,s.worldMatrix,t)}else for(let i=0;i<this._jointsPose.length;i++){let n=A._jointsPose[i];this._jointsPose[i].worldMatrix.copyFrom(n.worldMatrix)}}copyFrom(A){for(let e=0;e<this._jointsPose.length;e++)this._jointsPose[e].worldMatrix.copyFrom(A._jointsPose[e].worldMatrix)}reset(){for(let A=0;A<this._jointsPose.length;A++)this._jointsPose[A].worldMatrix.identity()}}class m6 extends qr{constructor(e,t){super();a(this,"skeletonAnimation");this.type=e,this.time=t}}class d0{constructor(A,e,t,i){a(this,"name","");a(this,"_skeleton");a(this,"_skeletonPoses");a(this,"_animationClipData");a(this,"_events");if(this.name=A,this._skeleton=e,this._animationClipData=i,t>0&&i){this._skeletonPoses=new Array(t);let n=12*e.numJoint;for(let s=0;s<t;s++){let o=n*s*4,u=new Float32Array(i.buffer,o,n),l=new oc(e);l.buildSkeletonPose(u),this._skeletonPoses[s]=l}}}get totalTime(){return this._skeletonPoses[this._skeletonPoses.length-1].time}get frameRate(){return this.totalTime/this._skeletonPoses.length}get skeleton(){return this._skeleton}get numFrame(){return this._skeletonPoses.length-1}get animationClipData(){return this._animationClipData}getSkeletonPose(A){return this._skeletonPoses[A]}getLerpSkeletonPose(A,e,t,i){let n=this.getSkeletonPose(A),s=this.getSkeletonPose(e);return i.lerp(n,s,t),i}createSubClip(A,e,t){var i=new d0(A,this._skeleton,0,null);const n=Math.max(Math.floor(e/this.frameRate),0),s=Math.min(Math.floor(t/this.frameRate),this._skeletonPoses.length-1);i._skeletonPoses=this._skeletonPoses.slice(n,s);const o=12*this._skeleton.numJoint*4;return this._animationClipData=new Float32Array(this._animationClipData,n*o,(s-n)*o),i}addEvent(A,e){this._events||(this._events=new Array),this._events.push(new m6(A,e))}removeEvent(A){this._events&&(this._events=this._events.filter(e=>e.type!=A))}getEvents(){return this._events}}class Bg{constructor(A){a(this,"gltf");a(this,"subParser");this.gltf=A.gltf,this.subParser=A}parse(A){let e=new g6;return this.buildSkeleton(e,void 0,A),e}parseSkeletonAnimation(A,e){let t=this.subParser.parseAccessor(e.samplers[0].input),i=t.data.length,n=t.data[1]-t.data[0];t.data[t.data.length-1];let s=12*A.numJoint,o=new Float32Array(s*i);for(var u=0;u<A.numJoint;u++)for(var l=0;l<i;l++){var c=s*l+12*u;o[c+0]=1,o[c+1]=1,o[c+2]=1,o[c+3]=1}for(let p of e.channels){let y=e.samplers[p.sampler];const _=this.subParser.parseAccessor(y.input),g=this.subParser.parseAccessor(y.output);let m=p.target.node,E=p.target.path,w=this.gltf.nodes[m];if(!w)continue;let L=A.getJointByName(w.name);if(L)switch(E){case"scale":if(i*g.numComponents==g.data.length)for(var l=0;l<i;l++){var h=l*g.numComponents,c=s*l+12*L.index;o[c+0]=g.data[h+0],o[c+1]=g.data[h+1],o[c+2]=g.data[h+2],o[c+3]=1}else if(_.data.length==2){let T=0;_.data[0];let R=_.data[1];var d=0*g.numComponents;I.HELP_0.set(g.data[d+0],g.data[d+1],g.data[d+2]);var f=1*g.numComponents;I.HELP_1.set(g.data[f+0],g.data[f+1],g.data[f+2]);for(var l=0;l<i;l++){let F=T/R;I.HELP_2.lerp(I.HELP_0,I.HELP_1,F);var c=s*l+12*L.index;o[c+0]=I.HELP_2.x,o[c+1]=I.HELP_2.y,o[c+2]=I.HELP_2.z,o[c+3]=1,T+=n}}else throw new Error("Unsupported animation sampler interpolation.");break;case"rotation":if(i*g.numComponents==g.data.length)for(var l=0;l<i;l++){var h=l*g.numComponents,c=s*l+12*L.index+4;o[c+0]=g.data[h+0],o[c+1]=g.data[h+1],o[c+2]=g.data[h+2],o[c+3]=g.data[h+3]}else if(_.data.length==2){let T=0;_.data[0];let R=_.data[1];var d=0*g.numComponents;I.HELP_0.set(g.data[d+0],g.data[d+1],g.data[d+2],g.data[d+3]);var f=1*g.numComponents;I.HELP_1.set(g.data[f+0],g.data[f+1],g.data[f+2],g.data[f+3]);for(var l=0;l<i;l++){let M=T/R;I.HELP_2.lerp(I.HELP_0,I.HELP_1,M);var c=s*l+12*L.index+4;o[c+0]=I.HELP_2.x,o[c+1]=I.HELP_2.y,o[c+2]=I.HELP_2.z,o[c+3]=I.HELP_2.w,T+=n}}else throw new Error("Unsupported animation sampler interpolation.");break;case"translation":if(i*g.numComponents==g.data.length)for(var l=0;l<i;l++){var h=l*g.numComponents,c=s*l+12*L.index+8;o[c+0]=g.data[h+0],o[c+1]=g.data[h+1],o[c+2]=g.data[h+2],o[c+3]=_.data[l*_.numComponents]}else if(_.data.length==2){let T=0;_.data[0];let R=_.data[1];var d=0*g.numComponents;I.HELP_0.set(g.data[d+0],g.data[d+1],g.data[d+2]);var f=1*g.numComponents;I.HELP_1.set(g.data[f+0],g.data[f+1],g.data[f+2]);for(var l=0;l<i;l++){let M=T/R;I.HELP_2.lerp(I.HELP_0,I.HELP_1,M);var c=s*l+12*L.index+8;o[c+0]=I.HELP_2.x,o[c+1]=I.HELP_2.y,o[c+2]=I.HELP_2.z,o[c+3]=T,T+=n}}else throw new Error("Unsupported animation sampler interpolation.");break}}return new d0(e.name,A,i,o)}buildSkeleton(A,e,t,i=0){let n=this.gltf.nodes[t];n.name||(n.name="Node_"+t);let s=new p6(n.name);if(s.parent=e,n.scale&&s.scale.set(n.scale[0],n.scale[1],n.scale[2]),n.rotation&&s.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2],n.rotation[3]),n.translation&&s.translation.set(n.translation[0],n.translation[1],n.translation[2]),A.addJoint(s),n.children)for(let o of n.children)this.buildSkeleton(A,s,o,i+1)}}class y6{constructor(A){a(this,"loop",!0);a(this,"speed",1);a(this,"t",0);a(this,"time",0);a(this,"weight",0);a(this,"currFrame",0);a(this,"lastFrame",-1);a(this,"nextFrame",0);a(this,"clip");a(this,"animation");a(this,"_isEnd",!1);a(this,"_currSkeletonPose");this.clip=A,this._currSkeletonPose=new oc(this.clip.skeleton)}reset(){this.time=0,this.weight=0,this._isEnd=!1}get name(){return this.clip.name}get currSkeletonPose(){return this._currSkeletonPose}update(A){this.time=(this.time+A*this.speed)%this.clip.totalTime;let e=this.time/this.clip.frameRate;if(this.currFrame=Math.trunc(e),this.t=e-this.currFrame,this.currFrame<0&&(this.currFrame=this.clip.numFrame+this.currFrame),this.time>=0?this.nextFrame=(this.currFrame+1)%this.clip.numFrame:(this.nextFrame=this.currFrame-1,this.nextFrame<0&&(this.nextFrame=this.clip.numFrame+this.nextFrame),this.t=1-this.t),this._isEnd)this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1;else if(this.currFrame!=this.lastFrame){let n=this.speed<0?0:this.clip.numFrame;this.currFrame==n&&(this.loop?(this.currFrame=0,this.nextFrame=1,this.time=this.t=0):(this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1,this._isEnd=!0));var t=this.clip.getEvents();if(t)for(let s of t){var i=Math.floor(s.time/this.clip.frameRate);if(i=Math.min(i,this.clip.numFrame),i=Math.max(i,0),i==this.currFrame){s.skeletonAnimation=this.animation,this.animation.eventDispatcher.dispatchEvent(s);break}}this.lastFrame=this.currFrame}this.clip.getLerpSkeletonPose(this.currFrame,this.nextFrame,this.t,this._currSkeletonPose)}}var E6=Object.defineProperty,C6=Object.getOwnPropertyDescriptor,_6=(r,A,e,t)=>{for(var i=t>1?void 0:t?C6(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&E6(A,e,i),i};let Xi=class extends Jt{constructor(){super();a(this,"isPlaying",!0);a(this,"timeScale",1);a(this,"_skeleton");a(this,"_clips",[]);a(this,"_clipStates",new Map);a(this,"_mixSkeletonPose");a(this,"_mixTempSkeletonPose");a(this,"_currentClipState");a(this,"_bindList",[]);a(this,"_jointMatrixIndexTableBuffer");a(this,"_crossFadeState")}start(){}get currName(){return this._currentClipState?this._currentClipState.name:""}set skeleton(A){this._skeleton=A,this._mixSkeletonPose=new oc(this._skeleton,!0),this._mixTempSkeletonPose=new oc(this._skeleton);const e=new Float32Array(this._mixSkeletonPose.jointMatrixIndexTable);this._jointMatrixIndexTableBuffer=new Bt(this._skeleton.numJoint*4,0,e)}get skeleton(){return this._skeleton}get finalSkeletonPose(){return this._mixSkeletonPose}get jointMatrixIndexTableBuffer(){return this._jointMatrixIndexTableBuffer}getJointIndexTable(A){let e=new Array;for(let t=0;t<A.length;t++){const i=A[t];let n=this._skeleton.getJointByName(i);e[t]=n?n.index:-1}return e}addAnimationClip(A){if(!this._clipStates.has(A.name)){this._clips.push(A);let e=new y6(A);e.animation=this,this._clipStates.set(A.name,e),this._currentClipState||this.setCurrentClipState(e)}}getAnimationClip(A){var e=this.getAnimationClipState(A);return e?e.clip:null}getAnimationClips(){return this._clips}getAnimationClipState(A){return this._clipStates.has(A)?this._clipStates.get(A):null}getAnimationClipStates(){return this._clipStates}pause(){this.isPlaying=!1}resume(){this.isPlaying=!0}play(A,e=1,t=!1){if(this._currentClipState&&this._currentClipState.name==A)return t&&this._currentClipState.reset(),!1;let i=this.getAnimationClipState(A);return i?(i.speed=e,i.reset(),this._clipStates.forEach((n,s)=>{n.weight=0}),this.setCurrentClipState(i),!0):!1}crossFade(A,e){if(e<.01){this.play(A);return}if(this._currentClipState.name==A)return;let t=this.getAnimationClipState(A);t&&(t.reset(),this._crossFadeState?(this._crossFadeState.inClip&&(this._crossFadeState.inClip.weight=0),this._crossFadeState.outClip&&(this._crossFadeState.outClip.weight=0),this._crossFadeState.reset(t,this._currentClipState,e)):this._crossFadeState=new S6(t,this._currentClipState,e),this._currentClipState=t)}setAnimIsLoop(A,e){this._clipStates.has(A)&&(this._clipStates.get(A).loop=e)}addJointBind(A,e){this._bindList.push({jointName:A,obj:e})}removeJointBind(A){for(let e=0;e<this._bindList.length;e++)if(this._bindList[e].obj==A){this._bindList.splice(e,1);break}}onUpdate(){if(!this.isPlaying)return;let A=be.delta*.001*this.timeScale;this._crossFadeState&&this._crossFadeState.update(A);var e=0,t=[];if(this._clipStates.forEach((n,s)=>{n.weight>0&&(n.update(A),e+=n.weight,t.push(n))}),t.length>0){this._mixSkeletonPose.copyFrom(t[0].currSkeletonPose);for(var i=1;i<t.length;++i){const n=t[i];this._mixTempSkeletonPose.lerp(this._mixSkeletonPose,n.currSkeletonPose,n.weight/e),this._mixSkeletonPose.copyFrom(this._mixTempSkeletonPose)}}}cloneTo(A){let e=A.addComponent(Xi);e.skeleton=this.skeleton;for(var t=0;t<this._clips.length;++t)e.addAnimationClip(this._clips[t])}setCurrentClipState(A){this._currentClipState!=A&&(this._currentClipState=A,this._currentClipState.weight=1)}};Xi=_6([ri(Xi,"SkeletonAnimationComponent")],Xi);class S6{constructor(A,e,t){a(this,"inClip");a(this,"outClip");a(this,"currentTime");a(this,"crossFadeTime");this.reset(A,e,t)}reset(A,e,t){this.inClip=A,this.outClip=e,this.currentTime=0,this.crossFadeTime=t}update(A){!this.inClip||!this.outClip||(this.currentTime+=A,this.inClip.weight=Math.min(Math.abs(this.currentTime%this.crossFadeTime)/this.crossFadeTime,1),this.outClip.weight=1-this.inClip.weight,Math.abs(this.currentTime)>=this.crossFadeTime&&(this.inClip.weight=1,this.outClip.weight=0,this.inClip=null,this.outClip=null))}}class ef{static add(A){this.list.indexOf(A)==-1&&this.list.push(A)}static remove(A){let e=this.list.indexOf(A);e!=-1&&this.list.splice(e,1)}}a(ef,"list",[]);class o1 extends Jt{constructor(){super();a(this,"name");a(this,"size",1);a(this,"lightData");a(this,"dirFix",1);a(this,"bindOnChange");a(this,"needUpdateShadow",!0);a(this,"realTimeShadow",!0);a(this,"_castGI",!1);a(this,"_castShadow",!1);a(this,"_iesProfiles")}init(){this.transform.object3D.bound=new Qe(new I,new I),this.lightData=new Zl,this.lightData.lightMatrixIndex=this.transform.worldMatrix.index}onChange(){this.bindOnChange&&this.bindOnChange(),this.transform.object3D.bound.setFromCenterAndSize(this.transform.worldPosition,new I(this.size,this.size,this.size)),this._castGI&&(IA.instance.state.giLightingChange=!0),this._castShadow?(this.needUpdateShadow=!0,Ir.addShadowLight(this)):Ir.removeShadowLight(this)}start(){this.transform.onPositionChange=()=>this.onPositionChange(),this.transform.onScaleChange=()=>this.onScaleChange(),this.transform.onRotationChange=()=>this.onRotChange(),this.onPositionChange(),this.onRotChange(),this.onScaleChange()}onPositionChange(){this.lightData.lightPosition.copyFrom(this.transform.worldPosition)}onRotChange(){this.dirFix==1?this.lightData.direction.copyFrom(this.transform.forward):this.lightData.direction.copyFrom(this.transform.back),this.lightData.lightTangent.copyFrom(this.transform.up),this.onChange()}onScaleChange(){this.onChange()}onEnable(){this.onChange(),IA.instance.addLight(this.transform.scene3D,this)}onDisable(){this.onChange(),IA.instance.removeLight(this.transform.scene3D,this),Ir.removeShadowLight(this)}set iesProfiles(e){this._iesProfiles=e,this.lightData.iesIndex=e.index,au.use=!0,this.onChange()}get iesProfile(){return this._iesProfiles}get r(){return this.lightData.lightColor.r}set r(e){this.lightData.lightColor.r=e,this.onChange()}get g(){return this.lightData.lightColor.g}set g(e){this.lightData.lightColor.g=e,this.onChange()}get b(){return this.lightData.lightColor.b}set b(e){this.lightData.lightColor.b=e,this.onChange()}get lightColor(){return this.lightData.lightColor}set lightColor(e){this.lightData.lightColor=e,this.onChange()}get color(){return this.lightData.lightColor}set color(e){this.lightData.lightColor=e,this.onChange()}get intensity(){return this.lightData.intensity}set intensity(e){this.lightData.intensity=e,this.onChange()}set castShadow(e){e!=this._castShadow&&(this._castShadow=e,this.onChange())}get castShadow(){return this._castShadow}get shadowIndex(){return this.lightData.castShadowIndex}get castGI(){return this._castGI}set castGI(e){e?ef.add(this):ef.remove(this),this._castGI=e,e&&this.onChange()}get direction(){return this.lightData.direction}destroy(e){this.bindOnChange=null,IA.instance.removeLight(this.transform.scene3D,this),Ir.removeShadowLight(this),this.transform.eventDispatcher.removeEventListener(Si.ROTATION_ONCHANGE,this.onRotChange,this),this.transform.eventDispatcher.removeEventListener(Si.SCALE_ONCHANGE,this.onScaleChange,this),super.destroy(e)}}var v6=Object.defineProperty,w6=Object.getOwnPropertyDescriptor,b6=(r,A,e,t)=>{for(var i=t>1?void 0:t?w6(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&v6(A,e,i),i};let _l=class extends o1{constructor(){super();a(this,"shadowCamera")}init(){super.init(),this.object3D.name==""&&(this.object3D.name="DirectionLight_"+ii()),this.radius=Number.MAX_SAFE_INTEGER,this.lightData.lightType=At.DirectionLight,this.lightData.linear=0,this.lightData.quadratic=.3}start(){super.start(),this.castGI=!0}get radius(){return this.lightData.range}set radius(A){this.lightData.range=A,this.onChange()}get indirect(){return this.lightData.quadratic}set indirect(A){this.lightData.quadratic=A,this.onChange()}debug(){}};_l=b6([ri(_l,"DirectLight")],_l);var I6=Object.defineProperty,B6=Object.getOwnPropertyDescriptor,T6=(r,A,e,t)=>{for(var i=t>1?void 0:t?B6(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&I6(A,e,i),i};let Sl=class extends o1{constructor(){super()}init(){super.init(),this.lightData.lightType=At.PointLight,this.object3D.name==""&&(this.object3D.name="PointLight"+ii())}get range(){return this.lightData.range}set range(r){this.lightData.range=r,this.onChange()}get at(){return this.lightData.linear}set at(r){this.lightData.linear=r,this.onChange()}get radius(){return this.lightData.radius}set radius(r){this.lightData.radius=r,this.onChange()}get quadratic(){return this.lightData.quadratic}set quadratic(r){this.lightData.quadratic=r,this.onChange()}start(){this.transform.rotationX=90,super.start()}onUpdate(){}onGraphic(r){}debug(){}debugDraw(r){}};Sl=T6([ri(Sl,"PointLight")],Sl);var D6=Object.defineProperty,x6=Object.getOwnPropertyDescriptor,O6=(r,A,e,t)=>{for(var i=t>1?void 0:t?x6(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&D6(A,e,i),i};let vl=class extends o1{constructor(){super()}init(){super.init(),this.lightData.lightType=At.SpotLight,this.object3D.name==""&&(this.object3D.name="SpotLight"+ii())}get innerAngle(){return this.lightData.innerAngle/this.lightData.outerAngle*100}set innerAngle(r){this.lightData.innerAngle=vt(r,0,100)/100*this.lightData.outerAngle,this.onChange()}get outerAngle(){return this.lightData.outerAngle*yu*2}set outerAngle(r){this.lightData.outerAngle=vt(r,1,179)*Ie*.5,this.onChange()}get radius(){return this.lightData.radius}set radius(r){this.lightData.radius=r,this.onChange()}get range(){return this.lightData.range}set range(r){this.lightData.range=r,this.onChange()}get at(){return this.lightData.linear}set at(r){this.lightData.linear=r,this.onChange()}start(){super.start(),this.lightData.lightType=At.SpotLight}onUpdate(){}onGraphic(r){}debug(){}debugDraw(r){}};vl=O6([ri(vl,"SpotLight")],vl);var M6=Object.defineProperty,R6=Object.getOwnPropertyDescriptor,P6=(r,A,e,t)=>{for(var i=t>1?void 0:t?R6(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&M6(A,e,i),i};let Ha=class extends he{constructor(){super();a(this,"skinJointsName");a(this,"mInverseBindMatrixData");a(this,"mInverseBindMatrixBuffer");a(this,"mSkeletonAnimation");a(this,"mJointIndexTableBuffer");this.addRendererMask(It.SkinnedMesh)}start(){if(super.start(),this.skeletonAnimation=this.object3D.getComponent(Xi),!this.skeletonAnimation){let A=this.object3D.parentObject.parentObject.getComponentsInChild(Xi);A.length>0&&(this.skeletonAnimation=A[0]);let e=this.object3D;for(;!this.skeletonAnimation&&e;)this.skeletonAnimation=e.getComponentFromParent(Xi),e.parent&&(e=e.parent.object3D)}}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(A){if(this.mSkeletonAnimation=A,!!A&&!this.mJointIndexTableBuffer){let e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName);this.mJointIndexTableBuffer=new Bt(e.length*4,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(A){this.mInverseBindMatrixData=A;var e=new Float32Array(A.length*16);for(let t=0;t<A.length;t++){let i=t*16,n=A[t];e.set(n,i)}this.mInverseBindMatrixBuffer=new Bt(e.byteLength,0,e),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(A){let e=A.addComponent(Ha);e.geometry=this.geometry,e.material=this.material.clone(),e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(A,e,t,i){for(let n=0;n<this.materials.length;n++){let s=this.materials[n].getPass(e);if(s)for(let o=0;o<s.length;o++){const u=s[o];!u.pipeline&&this.mSkeletonAnimation&&(u.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),u.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),u.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(A,e,t,i)}};Ha=P6([ri(Ha,"SkinnedMeshRenderer")],Ha);class F6{static apply(A,e,t){let i=e.extensions;if(i&&i.KHR_materials_clearcoat){t.shader.getDefaultColorShader().setDefine("USE_CLEARCOAT",!0);let n=i.KHR_materials_clearcoat;"clearcoatFactor"in n&&(e.clearcoatFactor=n.clearcoatFactor,t.clearcoatFactor=e.clearcoatFactor),"clearcoatRoughnessFactor"in n&&(e.clearcoatRoughnessFactor=n.clearcoatRoughnessFactor,t.clearcoatRoughnessFactor=e.clearcoatRoughnessFactor)}}}class N6{static apply(A,e,t){let i=e.extensions;i&&i.KHR_materials_emissive_strength?(t.emissiveIntensity=i.KHR_materials_emissive_strength.emissiveStrength*.5,t.emissiveMap==K.res.blackTexture&&(t.emissiveMap=K.res.whiteTexture)):t.emissiveIntensity=1}}class L6{static apply(A,e,t){let i=e.extensions;i&&i.KHR_materials_unlit?t.supportLight=!0:t.supportLight=!1}}class U6{constructor(A){a(this,"gltf");a(this,"subParser");a(this,"_testCount",8);a(this,"_hasCastShadow",!1);this.gltf=A.gltf,this.subParser=A}async convertNodeToObject3D(A,e){const t=new de;if(t.name=A.name,t[fe.GLTF_NODE_INDEX_PROPERTY]=A.nodeId,A.nodeObj=t,A.matrix&&(A.translation=[0,0,0],A.rotation=[0,0,0,1],A.scale=[1,1,1]),A.translation&&(t.transform.x=A.translation[0],t.transform.y=A.translation[1],t.transform.z=A.translation[2]),A.rotation){let i=new oe;i.setFromArray(A.rotation),t.transform.localRotQuat=i}if(A.scale&&(t.transform.scaleX=A.scale[0],t.transform.scaleY=A.scale[1],t.transform.scaleZ=A.scale[2]),e.addChild(t),A.light&&this.convertLight(A,t),A.primitives&&this.convertprimitives(A,t),A.skeleton){let i=t.addComponent(Xi);if(i){i.skeleton=this.subParser.parseSkeleton(A.skeleton.skeleton);for(let n=0;n<this.gltf.animations.length;n++){let s=this.gltf.animations[n];s.name||(s.name=n.toString());let o=this.subParser.parseSkeletonAnimation(i.skeleton,s);i.addAnimationClip(o)}}}return t}convertLight(A,e){switch(A.light.type){case"directional":let t=e.addComponent(_l);e.name=A.light.name,t.intensity=A.light.intensity*.1,t.radius=Number.MAX_SAFE_INTEGER,t.dirFix=-1,this._hasCastShadow||(this._hasCastShadow=!0,t.castShadow=this._hasCastShadow),t.lightColor=A.light.color?new fA(A.light.color[0],A.light.color[1],A.light.color[2]):new fA(1,1,1,1),t.debug();break;case"point":if(this._testCount>0){let n=e.addComponent(Sl);n.name=A.light.name,n.intensity=A.light.intensity?A.light.intensity*8*2:1,n.radius=8,n.at=2,n.range=A.light.range?A.light.range:8,n.lightColor=A.light.color?new fA(A.light.color[0],A.light.color[1],A.light.color[2]):new fA(1,1,1,1)}this._testCount--;break;case"spot":let i=e.addComponent(vl);i.name=A.light.name,i.intensity=A.light.intensity*5,i.radius=1,i.dirFix=-1,i.at=2,i.range=A.light.range?A.light.range:8,i.outerAngle=A.light.spot.outerConeAngle*yu,i.lightColor=A.light.color?new fA(A.light.color[0],A.light.color[1],A.light.color[2]):new fA(1,1,1,1);break}}convertprimitives(A,e){for(let t=0;t<A.primitives.length;t++){const i=A.primitives[t];i.modelName;let n=i.material;n.name==null&&(n.name=ii());let s,o=`matkey_${n.name}`;if(n&&this.gltf.resources[o])s=this.gltf.resources[o];else{let d=s=new ks;if(this.gltf.resources[o]=d,d.name=n.name,i.material){const{baseColorTexture:f,baseColorFactor:p,metallicFactor:y,roughnessFactor:_,doubleSided:g,metallicRoughnessTexture:m,normalTexture:E,occlusionTexture:w,emissiveTexture:L,emissiveFactor:T,enableBlend:R,alphaCutoff:P}=i.material;let F=d=this.applyMaterialExtensions(i.material,d);"enableBlend"in i.material&&(i.material.enableBlend?F.blendMode=ee.SOFT_ADD:F.blendMode=ee.NONE),"alphaCutoff"in i.material&&P>0&&P<1&&(F.setUniformFloat("alphaCutoff",P),F.blendMode=ee.NORMAL,F.transparent=!0),i.material.transformUV1&&F.setUniformVector4("uvTransform_1",i.material.transformUV1),i.material.transformUV2&&F.setUniformVector4("uvTransform_2",i.material.transformUV2),F.setUniformColor("baseColor",new fA(p[0],p[1],p[2],p[3])),F.setUniformFloat("roughness",_),F.setUniformFloat("metallic",y),F.setUniformFloat("ao",1),F.doubleSide=g,f&&F.setTexture("baseMap",f),E&&F.setTexture("normalMap",E),m&&F.setTexture("maskMap",m),w&&m!=w&&F.setTexture("aoMap",w),L&&F.setTexture("emissiveMap",L),T&&(T[0]>0||T[1]>0||T[2]>0)&&(F.shader.getTexture("emissiveMap")||F.shader.setTexture("emissiveMap",K.res.whiteTexture),F.setUniformColor("emissiveColor",new fA(T[0],T[1],T[2],T[3])))}}const{attribArrays:u,modelName:l,drawMode:c}=i;let h;if(!u.indices.data){let d=[],f=u.position.data.length/3/3;for(let p=0;p<f;p++){let y=p*3;d.push(y+2),d.push(y+0),d.push(y+1)}u.indices={data:new Uint8Array(d),normalize:!1,numComponents:1}}if(!u.normal){let d=[],f=u.position.data.length/3;for(let p=0;p<f;p++)d.push(0),d.push(0),d.push(0);u.normal={data:new Float32Array(d),normalize:!1,numComponents:3}}if(u.indices.data&&u.indices.data.length>3){let d=i.meshName();this.gltf.resources[d]?h=this.gltf.resources[d]:(h||(h=this.createGeometryBase(d,u,i)),this.gltf.resources[d]=h);const f=new de;if(f.name=l+t,this.gltf.animations&&u[pA.joints0]!=null){h||(h=this.createGeometryBase(l,u,i)),this.gltf.resources[d]=h;let p=this.gltf.nodes[A.skin.skeleton];if(p.dnode&&p.dnode.nodeObj){let _=p.dnode.nodeObj.addComponent(Xi);if(_){_.skeleton=this.subParser.parseSkeleton(A.skin.skeleton);for(let g=0;g<this.gltf.animations.length;g++){let m=this.gltf.animations[g];m.name||(m.name=g.toString());let E=this.subParser.parseSkeletonAnimation(_.skeleton,m);_.addAnimationClip(E)}}}else p.dnode.skeleton=A.skin;let y=f.addComponent(Ha);y.castShadow=!0,y.castGI=!0,y.geometry=h,y.material=s,y.skinJointsName=this.parseSkinJoints(A.skin),y.skinInverseBindMatrices=A.skin.inverseBindMatrices}else{h||(h=this.createGeometryBase(l,u,i)),this.gltf.resources[d]=h,h.hasAttribute(pA.joints0)&&h.vertexAttributeMap.delete(pA.joints0);let p=f.addComponent(he);p.castShadow=!0,p.castGI=!0,p.geometry=h,p.material=s}A.skin&&A.skin.defines,e.addChild(f)}}}createGeometryBase(A,e,t){let i=new ti;i.name=A,"indices"in e&&(e.indices.data.length>65535?e.indices.data=new Uint32Array(e.indices.data):e.indices.data=new Uint16Array(e.indices.data)),i.morphTargetsRelative=t.morphTargetsRelative;let n=t.targetNames;if(n&&n.length>0){let o=i.morphTargetDictionary={};for(let u=0;u<n.length;u++)o[n[u]]=u}if(i.morphTargetDictionary){let o=e.position.data.length/3,u=new Float32Array(o);for(let l=0;l<o;l++)u[l]=l;e.vIndex={data:u,normalize:!1,numComponents:1}}for(const o in e){let u=e[o];i.setAttribute(o,u.data)}let s=i.getAttribute(pA.indices);return i.addSubGeometry({indexStart:0,indexCount:s.data.length,vertexStart:0,index:0,vertexCount:0,firstStart:0,topology:0}),i}applyMaterialExtensions(A,e){return F6.apply(this.gltf,A,e),L6.apply(this.gltf,A,e),N6.apply(this.gltf,A,e),e}parseSkinJoints(A){let e=[];for(let t of A.joints){let i=this.gltf.nodes[t];e.push(i.name)}return e}}class tf{constructor(){a(this,"currentSceneName");a(this,"gltf");a(this,"initUrl");a(this,"_generator");a(this,"_version");a(this,"_BASE64_MARKER",";base64,");a(this,"_cameraParser",null);a(this,"_meshParser",null);a(this,"_materialParser",null);a(this,"_skinParser",null);a(this,"_skeletonParser",null);a(this,"_converter",null)}get version(){return this.version?this.version:this.gltf?this.gltf.asset?(this._version=this.gltf.asset.version,this.gltf.asset.minVersion&&(this._version+=`\r minVersion${this.gltf.asset.minVersion}`),this.version):this.errorMiss("asset"):(console.warn("glTF not loaded."),null)}async parse(A,e,t){this.gltf=e,this.initUrl=A;const{version:i,generator:n}=this.gltf.asset;if(this._generator=n,i!=="2.0")return console.error(`GLTFParser only support glTF 2.0 for now! Received glTF version: ${this.version}`),!1;const s={nodes:await this.parseScene(t),animations:this.parseAnimations(),name:this.currentSceneName};return await this.convertToNode(s)}destory(){sc.unload(this.gltf),this.gltf=null}async parseScene(A){const e=A||this.gltf.scene||0,t=this.gltf.scenes[e];if(typeof t>"u")return this.errorMiss("scene",e);this.currentSceneName=t.name||"GLTF_NO_NAME_SCENE";const i=[],n=t.nodes;for(let s=0;s<n.length;s++){const o=await this.parseNode(n[s]);o&&i.push(o)}return i}async parseNode(A){const e=this.gltf.nodes[A];if(!e)return this.errorMiss("node",A);if(e.isParsed)return e.dnode;const{name:t,matrix:i,translation:n,rotation:s,scale:o}=e,u={name:t,matrix:i,translation:n,rotation:s,scale:o,nodeId:A,camera:null,primitives:null,skin:null,children:null,light:null};if(e.camera!==void 0&&(u.camera=this.parseCamera(e.camera)),e.mesh!==void 0&&(u.primitives=await this.parseMesh(e.mesh)),e.extensions!==void 0&&this.applyNodeExtensions(e,u),e.skin!==void 0){const l=this.parseSkin(e.skin);l&&(u.skin=l)}if(u.children=[],e.children)for(let l=0;l<e.children.length;l++)u.children.push(await this.parseNode(e.children[l]));return e.dnode=u,e.isParsed=!0,e.dnode}errorMiss(A,e){throw new Error(A+e)}parseCamera(A){return this._cameraParser||(this._cameraParser=new c6(this.gltf)),this._cameraParser.parse(A)}async parseMesh(A){return this._meshParser||(this._meshParser=new h6(this)),this._meshParser.parse(A)}async parseTexture(A){let e=this.gltf.textures[A];if(e&&!e.dtexture){if(e&&e.source!=null){let t=this.gltf.images[e.source];if(t.uri){let i=t.uri;i=Ut.getURLName(i),e.dtexture=this.gltf.resources[i]}else if(t.bufferView){let i=this.parseBufferView(t.bufferView),n=new Hn,s=new Blob([i],{type:t.mimeType});await n.loadFromBlob(s),e.dtexture=n}else e.dtexture=this.gltf.resources[t.name]}else if(e.name){let t=Ut.getURLName(e.name);e.dtexture=this.gltf.resources[t]}}return e.dtexture||console.log("miss texture , please check texture!",A,e),e.dtexture}async parseMaterial(A){return this._materialParser||(this._materialParser=new d6(this)),this._materialParser.parse(A)}parseAnimations(){return[]}async parseObject3D(A,e){return this._converter||(this._converter=new U6(this)),this._converter.convertNodeToObject3D(A,e)}parseSkeleton(A){return this._skeletonParser||(this._skeletonParser=new Bg(this)),this._skeletonParser.parse(A)}parseSkeletonAnimation(A,e){return this._skeletonParser||(this._skeletonParser=new Bg(this)),this._skeletonParser.parseSkeletonAnimation(A,e)}async traverse(A,e){for(let t=0;t<e.length;t++){const i=await this.parseObject3D(e[t],A);await this.traverse(i,e[t].children)}}async convertToNode(A){const e=new de;e.name=A.name;const t=A.nodes;A.animations;const i=[],n=[];return await this.traverse(e,t),{rootNode:e,textures:i,animations:void 0,cameras:n}}parseSkin(A){return this._skinParser||(this._skinParser=new f6(this)),this._skinParser.parse(A)}parseAccessor(A){const e=this.gltf.accessors[A];if(!e)return this.errorMiss("accessor",A);if(e.isParsed)return e.daccessor;e.isParsed=!0,e.daccessor=!1;const t=!!e.normalized,i=this.gltf.bufferViews[e.bufferView],n=i&&i.byteStride,s=bg(e.componentType);let o=1;switch(e.type){case"SCALAR":o=1;break;case"VEC2":o=2;break;case"VEC3":o=3;break;case"VEC4":case"MAT2":o=4;break;case"MAT3":o=9;break;case"MAT4":o=16;break;default:o=0;break}if(o===0)return console.error(`glTF has unknown data type in accessor: ${e.type}`),!1;const u=o*s.BYTES_PER_ELEMENT;let l;if(i!==void 0){if(l=this.parseBufferView(e.bufferView),!l)return e.daccessor}else l=new Uint8Array(u*e.count).buffer;let c=this.getTypedArrayFromArrayBuffer(l,n,e.byteOffset||0,s,o,e.count);if(e.sparse){const{count:h,indices:d,values:f}=e.sparse;c=new s(c);const p=d.byteOffset||0,y=this.gltf.bufferViews[d.bufferView],_=bg(d.componentType),g=this.parseBufferView(d.bufferView),m=this.getTypedArrayFromArrayBuffer(g,y.byteStride,p,_,1,h),E=f.byteOffset||0,w=this.gltf.bufferViews[f.bufferView],L=this.parseBufferView(f.bufferView),T=this.getTypedArrayFromArrayBuffer(L,w.byteStride,E,s,o,h);for(let R=0;R<m.length;R++)c.set(T.slice(R*o,R*o+o),m[R]*o)}return e.computeResult={typedArray:c,arrayType:s,numComponents:o},e.daccessor={data:c,numComponents:o,normalize:t},e.daccessor}getTypedArrayFromArrayBuffer(A,e,t,i,n,s){let o;const u=n*i.BYTES_PER_ELEMENT;if(e&&u!==e){const l=n*s;o=new i(l);for(let c=0;c<s;c++){const h=new i(A,t+c*e,n);for(let d=0;d<n;d++)o[c*n+d]=h[d]}}else o=new i(A,t,s*n);return o}parseBufferView(A){const e=this.gltf.bufferViews[A];if(!e)return this.errorMiss("bufferView",A);if(e.isParsed)return e.dbufferView;e.isParsed=!0,e.dbufferView=!1;const t=this.parseBuffer(e.buffer);if(t){const{byteOffset:i,byteLength:n}=e,s=new Uint8Array(t,i||0,n);e.dbufferView=new Uint8Array(s).buffer}return e.dbufferView}parseBuffer(A){const e=this.gltf.buffers[A];if(!e)return this.errorMiss("buffer",A);if(e.isParsed)return e.dbuffer;if(e.isParsed=!0,e.dbuffer=!1,e.uri.substring(0,5)!=="data:"){const t=e.uri,i=this.gltf.resources[t];i?i.byteLength===e.byteLength?e.dbuffer=this.gltf.resources[t]:console.error(`load gltf resource "${t}" at buffers[${A} failed, ArrayBuffer.byteLength not equals buffer's byteLength]`):console.error(`load gltf resource "${t}" at buffers[${A}] failed`)}else{const t=e.uri.indexOf(this._BASE64_MARKER)+this._BASE64_MARKER.length,i=window.atob(e.uri.substring(t)),n=new Uint8Array(i.length);for(let s=0;s<i.length;s++)n[s]=i.charCodeAt(s);e.dbuffer=n.buffer}return e.dbuffer}getLight(A){return this.gltf.extensions.KHR_lights_punctual.lights[A]}applyNodeExtensions(A,e){let t=A.extensions;t.KHR_lights_punctual&&this.gltf.extensions.KHR_lights_punctual&&(e.light=this.getLight(t.KHR_lights_punctual.light))}}class k6{constructor(){a(this,"magic");a(this,"version");a(this,"length")}}class z6{constructor(){a(this,"chunkLength");a(this,"chunkType");a(this,"chunkData")}}class f0 extends Qt{constructor(){super(...arguments);a(this,"_gltf")}async parseBuffer(e){let t=new Uint8Array(e);t.pos=0;const i=this.parseHeader(t);if(i.magic!=1179937895)return console.error("invalid GLB file"),!1;if(i.version!==2)return console.error(`GLBParser only support glTF 2.0 for now! Received glTF version: ${i.version}`),!1;let n=[];for(;t.pos<t.length;){let h=this.parseChunk(t);n.push(h)}if(n[0].chunkType!=1313821514)return console.error("invalid GLBChunk"),!1;let s="",o=65535,u=n[0].chunkData;for(let h=0;h<u.length;h+=o){let d=u.length-h;d=Math.min(d,o);let f=u.subarray(h,h+d);s+=String.fromCharCode(...f)}let l=JSON.parse(s);this._gltf=new Af,this._gltf={...this._gltf,...l},this._gltf.resources={};for(let h=0;h<this._gltf.buffers.length;h++){let d=this._gltf.buffers[h];d.isParsed=!0,d.dbuffer=n[h+1].chunkData.buffer}if(this._gltf.images)for(let h=0;h<this._gltf.images.length;h++){let d=this._gltf.images[h];d.name=d.name||"bufferView_"+d.bufferView.toString();const f=this._gltf.bufferViews[d.bufferView],p=this._gltf.buffers[f.buffer];let y=new Uint8Array(p.dbuffer,f.byteOffset,f.byteLength),_=new Blob([y],{type:d.mimeType}),g=new Hn;await g.loadFromBlob(_),g.name=d.name,this._gltf.resources[d.name]=g}let c=await new tf().parse(this.initUrl,this._gltf,this._gltf.scene);return c?(this.data=c.rootNode,c.rootNode):null}async parseJsonAndBuffer(e,t){this._gltf=new Af,this._gltf={...this._gltf,...e},this._gltf.resources={};let i=this._gltf.buffers[0];if(i.isParsed=!0,i.dbuffer=t,this._gltf.images)for(let s=0;s<this._gltf.images.length;s++){let o=this._gltf.images[s];o.name=o.name||"bufferView_"+o.bufferView.toString();const u=this._gltf.bufferViews[o.bufferView],l=this._gltf.buffers[u.buffer];let c=new Uint8Array(l.dbuffer,u.byteOffset,u.byteLength),h=new Blob([c],{type:o.mimeType}),d=new Hn;await d.loadFromBlob(h),d.name=o.name,this._gltf.resources[o.name]=d}let n=await new tf().parse(this.initUrl,this._gltf,this._gltf.scene);return n?(this.data=n.rootNode,n.rootNode):null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}parseHeader(e){let t=e.pos,i=new k6,n=new Uint32Array(e.buffer,t,3);return e.pos+=n.byteLength,i.magic=n[0],i.version=n[1],i.length=n[2],i}parseChunk(e){let t=e.pos,i=new z6,n=new Uint32Array(e.buffer,t,2);t=e.pos+=n.byteLength,i.chunkLength=n[0],i.chunkType=n[1],i.chunkData=new Uint8Array(e.buffer,t,i.chunkLength);const s=new Uint8Array(i.chunkLength);for(let o=0;o<i.chunkLength;o++)s[o]=i.chunkData[o];return i.chunkData=s,e.pos+=i.chunkLength,i}}a(f0,"format",nt.BIN);var G6=Object.defineProperty,V6=Object.getOwnPropertyDescriptor,Q6=(r,A,e,t)=>{for(var i=t>1?void 0:t?V6(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&G6(A,e,i),i};let rf=class extends Pr{constructor(){super();let r=new ot("PBRLItShader","PBRLItShader");r.setShaderEntry("VertMain","FragMain"),r.passType=QA.COLOR,this.addRenderPass(r);let A=r.shaderState;A.acceptShadow=!0,A.castShadow=!0,A.receiveEnv=!0,A.acceptGI=!0,A.useLight=!0,this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefault()}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new XA(0,0,1,1)),this.setUniformVector4("transformUV2",new XA(0,0,1,1)),this.setUniformColor("baseColor",new fA(.75,.75,.75,1)),this.setUniformColor("emissiveColor",new fA(0,0,0)),this.setUniformVector4("materialF0",new XA(.04,.04,.04,1)),this.setUniformColor("specularColor",new fA(.04,.04,.04)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",1),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new fA(1,1,1)),this.setUniformFloat("clearcoatWeight",0),this.baseMap=K.res.whiteTexture,this.normalMap=K.res.normalTexture,this.maskMap=K.res.maskTexture}get baseMap(){return this.getDefaultColorShader().getTexture("baseMap")}set baseMap(r){this.getDefaultColorShader().setTexture("baseMap",r)}get baseColor(){return this.getDefaultColorShader().getUniform("baseColor")}set baseColor(r){this.getDefaultColorShader().setUniformColor("baseColor",r)}get normalMap(){return this.getDefaultColorShader().getTexture("normalMap")}set normalMap(r){this.getDefaultColorShader().setTexture("normalMap",r)}get doubleSide(){return this.getDefaultColorShader().doubleSide}set doubleSide(r){this.getDefaultColorShader().doubleSide=r}get alphaCutoff(){return this.getDefaultColorShader().shaderState.alphaCutoff}set alphaCutoff(r){this.getDefaultColorShader().setDefine("USE_ALPHACUT",!0),this.getDefaultColorShader().shaderState.alphaCutoff=r,this.getDefaultColorShader().setUniform("alphaCutoff",r)}get emissiveColor(){return this.getDefaultColorShader().getUniform("emissiveColor")}set emissiveColor(r){this.getDefaultColorShader().setUniform("emissiveColor",r)}get emissiveIntensity(){return this.getDefaultColorShader().getUniform("emissiveIntensity")}set emissiveIntensity(r){this.getDefaultColorShader().setUniform("emissiveIntensity",r)}get uvTransform_1(){return this.getDefaultColorShader().uniforms.transformUV1.vector4}set uvTransform_1(r){this.getDefaultColorShader().setUniform("transformUV1",r)}get uvTransform_2(){return this.getDefaultColorShader().uniforms.transformUV2.vector4}set uvTransform_2(r){this.getDefaultColorShader().setUniform("transformUV2",r)}get depthWriteEnabled(){return this.getDefaultColorShader().shaderState.depthWriteEnabled}set depthWriteEnabled(r){this.getDefaultColorShader().shaderState.depthWriteEnabled=r}get materialF0(){return this.getDefaultColorShader().uniforms.materialF0.vector4}set materialF0(r){this.getDefaultColorShader().setUniform("materialF0",r)}get specularColor(){return this.getDefaultColorShader().uniforms.specularColor.color}set specularColor(r){this.getDefaultColorShader().setUniform("specularColor",r)}get roughness(){return this.getDefaultColorShader().uniforms.roughness.value}set roughness(r){this.getDefaultColorShader().setUniform("roughness",r)}get metallic(){return this.getDefaultColorShader().uniforms.metallic.value}set metallic(r){this.getDefaultColorShader().setUniform("metallic",r)}get ao(){return this.getDefaultColorShader().uniforms.ao.value}set ao(r){this.getDefaultColorShader().setUniform("ao",r)}get metallic_min(){return this.getDefaultColorShader().uniforms.metallic_min.value}set metallic_min(r){this.getDefaultColorShader().setUniform("metallic_min",r)}get metallic_max(){return this.getDefaultColorShader().uniforms.metallic_max.value}set metallic_max(r){this.getDefaultColorShader().setUniform("metallic_max",r)}get roughness_min(){return this.getDefaultColorShader().uniforms.roughness_min.value}set roughness_min(r){this.getDefaultColorShader().setUniform("roughness_min",r)}get roughness_max(){return this.getDefaultColorShader().uniforms.roughness_max.value}set roughness_max(r){this.getDefaultColorShader().setUniform("roughness_max",r)}get normalScale(){return this.getDefaultColorShader().uniforms.normalScale.value}set normalScale(r){this.getDefaultColorShader().setUniform("normalScale",r)}get maskMap(){return this.getDefaultColorShader().textures.maskMap}set maskMap(r){this.getDefaultColorShader().setDefine("USE_MR",!0),this.getDefaultColorShader().setTexture("maskMap",r)}set aoMap(r){r&&(this.getDefaultColorShader().setTexture("aoMap",r),r!=K.res.whiteTexture&&this.getDefaultColorShader().setDefine("USE_AOTEX",!0))}get aoMap(){return this.getDefaultColorShader().textures.aoMap}set clearCoatRoughnessMap(r){r&&(console.log("USE_CLEARCOAT_ROUGHNESS"),this.getDefaultColorShader().setTexture("clearCoatRoughnessMap",r),this.getDefaultColorShader().setDefine("USE_CLEARCOAT_ROUGHNESS",!0))}get clearCoatRoughnessMap(){return this.getDefaultColorShader().textures.clearCoatRoughnessMap}get brdfLUT(){return this.getDefaultColorShader().textures.brdfLUT}set brdfLUT(r){this.getDefaultColorShader().setTexture("brdfLUT",r),this.getDefaultColorShader().setTexture("brdflutMap",r)}get emissiveMap(){return this.getDefaultColorShader().textures.emissiveMap}set emissiveMap(r){this.getDefaultColorShader().setTexture("emissiveMap",r)}set envIntensity(r){this.getDefaultColorShader().setUniformFloat("envIntensity",r)}get envIntensity(){return this.getDefaultColorShader().uniforms.envIntensity.value}set ior(r){this.getDefaultColorShader().setUniformFloat("ior",r)}get ior(){return this.getDefaultColorShader().uniforms.ior.value}useCleanCoat(){this.getDefaultColorShader().setDefine("USE_CLEARCOAT",!0)}set clearcoatFactor(r){this.getDefaultColorShader().setUniformFloat("clearcoatFactor",r),this.useCleanCoat()}get clearcoatFactor(){return this.getDefaultColorShader().uniforms.clearcoatFactor.value}set clearcoatRoughnessFactor(r){this.getDefaultColorShader().setUniformFloat("clearcoatRoughnessFactor",r),this.useCleanCoat()}get clearcoatRoughnessFactor(){return this.getDefaultColorShader().uniforms.clearcoatRoughnessFactor.value}set clearcoatWeight(r){this.getDefaultColorShader().setUniformFloat("clearcoatWeight",r),this.useCleanCoat()}get clearcoatWeight(){return this.getDefaultColorShader().uniforms.clearcoatWeight.value}set clearcoatColor(r){this.getDefaultColorShader().setUniformColor("clearcoatColor",r),this.useCleanCoat()}get clearcoatColor(){return this.getDefaultColorShader().uniforms.clearcoatColor.color}};rf=Q6([$n],rf);class ks extends an{constructor(){super();let A=new rf;this.shader=A}clone(){let A=new ks,e=A.shader.getDefaultColorShader(),t=this.shader.getDefaultColorShader();return e.defineValue={...t.defineValue},e.setUniform("shadowBias",t.getUniform("shadowBias")),e.setUniform("transformUV1",t.getUniform("transformUV1")),e.setUniform("transformUV2",t.getUniform("transformUV2")),e.setUniform("baseColor",t.getUniform("baseColor")),e.setUniform("specularColor",t.getUniform("specularColor")),e.setUniform("emissiveColor",t.getUniform("emissiveColor")),e.setUniform("materialF0",t.getUniform("materialF0")),e.setUniform("envIntensity",t.getUniform("envIntensity")),e.setUniform("normalScale",t.getUniform("normalScale")),e.setUniform("roughness",t.getUniform("roughness")),e.setUniform("metallic",t.getUniform("metallic")),e.setUniform("ao",t.getUniform("ao")),e.setUniform("roughness_min",t.getUniform("roughness_min")),e.setUniform("roughness_max",t.getUniform("roughness_max")),e.setUniform("metallic_min",t.getUniform("metallic_min")),e.setUniform("metallic_max",t.getUniform("metallic_max")),e.setUniform("emissiveIntensity",t.getUniform("emissiveIntensity")),e.setUniform("alphaCutoff",t.getUniform("alphaCutoff")),e.setUniform("ior",t.getUniform("ior")),e.setUniform("clearcoatFactor",t.getUniform("clearcoatFactor")),e.setUniform("clearcoatRoughnessFactor",t.getUniform("clearcoatRoughnessFactor")),e.setUniform("clearcoatColor",t.getUniform("clearcoatColor")),e.setUniform("clearcoatWeight",t.getUniform("clearcoatWeight")),e.setTexture("baseMap",t.getTexture("baseMap")),e.setTexture("normalMap",t.getTexture("normalMap")),e.setTexture("emissiveMap",t.getTexture("emissiveMap")),e.setTexture("aoMap",t.getTexture("aoMap")),e.setTexture("maskMap",t.getTexture("maskMap")),A}set baseMap(A){this.shader.setTexture("baseMap",A)}get baseMap(){return this.shader.getTexture("baseMap")}set maskMap(A){this.shader.setTexture("maskMap",A)}get maskMap(){return this.shader.getTexture("maskMap")}set normalMap(A){this.shader.setTexture("normalMap",A)}get normalMap(){return this.shader.getTexture("normalMap")}set emissiveMap(A){this.shader.setTexture("emissiveMap",A)}get emissiveMap(){return this.shader.getTexture("emissiveMap")}set aoMap(A){this.shader.setTexture("aoMap",A)}get aoMap(){return this.shader.getTexture("aoMap")}set clearCoatRoughnessMap(A){this.shader.setTexture("clearCoatRoughnessMap",A),this.shader.setDefine("USE_CLEARCOAT",!0),this.shader.setDefine("USE_CLEARCOAT_ROUGHNESS",!0)}get clearCoatRoughnessMap(){return this.shader.getTexture("clearCoatRoughnessMap")}set clearcoatColor(A){this.shader.setUniformColor("clearcoatColor",A),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatColor(){return this.shader.getUniformColor("clearcoatColor")}set clearcoatWeight(A){this.shader.setUniformFloat("clearcoatWeight",A),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatWeight(){return this.shader.getUniformFloat("clearcoatWeight")}set clearcoatFactor(A){this.shader.setUniformFloat("clearcoatFactor",A),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatFactor(){return this.shader.getUniformFloat("clearcoatFactor")}set clearcoatRoughnessFactor(A){this.shader.setUniformFloat("clearcoatRoughnessFactor",A),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatRoughnessFactor(){return this.shader.getUniformFloat("clearcoatRoughnessFactor")}set alphaCutoff(A){this.shader.setUniform("alphaCutoff",A)}get alphaCutoff(){return this.shader.getUniform("alphaCutoff")}set baseColor(A){this.shader.setUniformColor("baseColor",A)}get baseColor(){return this.shader.getUniformColor("baseColor")}get roughness(){return this.shader.getUniformFloat("roughness")}set roughness(A){this.shader.setUniformFloat("roughness",A)}get metallic(){return this.shader.getUniformFloat("metallic")}set metallic(A){this.shader.setUniformFloat("metallic",A)}get emissiveColor(){return this.shader.getUniformColor("emissiveColor")}set emissiveColor(A){this.shader.setUniformColor("emissiveColor",A)}get emissiveIntensity(){return this.shader.getUniformFloat("emissiveIntensity")}set emissiveIntensity(A){this.shader.setUniformFloat("emissiveIntensity",A)}get ao(){return this.shader.getUniform("ao")}set ao(A){this.shader.setUniform("ao",A)}}class ey extends Qt{constructor(){super(...arguments);a(this,"textData","");a(this,"source_vertices");a(this,"source_normals");a(this,"source_tangents");a(this,"source_textureCoords");a(this,"matLibs");a(this,"geometrys");a(this,"activeGeo");a(this,"facesMaterialsIndex");a(this,"mtl");a(this,"mtlUrl")}async parseString(e){return this.source_vertices=[],this.source_normals=[],this.source_tangents=[],this.source_textureCoords=[],this.matLibs={},this.geometrys={},this.textData=e,await Promise.all([this.parserOBJ(),this.loadMTL()]),this.parser_mesh(),"null"}applyVector2(e,t,i){t[e]&&t[e].length>0?(i.push(t[e][0]),i.push(t[e][1])):(i.push(0),i.push(0))}applyVector3(e,t,i){i.push(t[e][0]),i.push(t[e][1]),i.push(t[e][2])}applyVector4(e,t,i){i.push(t[e][0]),i.push(t[e][1]),i.push(t[e][2]),i.push(t[e][3])}async loadMTL(){let e=await new Yt().loadTxt(this.baseUrl+this.mtlUrl),t=e.data,i,n=t.split(`\r
`);for(let u=0;u<n.length;u++){let l=n[u];var s=l.indexOf("#");s!=-1&&(l=l.substring(0,s)),l=l.trim();var o=l.split(/\s+/);o[0]==="newmtl"?(i={name:o[1]},this.matLibs[o[1]]=i):o[0].indexOf("map_")!=-1?(i[o[0]]=o[1],i.textures||(i.textures=[o[o.length-1]]),i.textures.push(o[o.length-1])):o.length==2?i[o[0]]=Number(o[1]):o.length==3?i[o[0]]=[Number(o[1]),Number(o[2])]:o.length==4&&(i[o[0]]=[Number(o[1]),Number(o[2]),Number(o[3])])}for(const u in this.matLibs){const l=this.matLibs[u];if(l.textures&&l.textures.length>0)for(let c=0;c<l.textures.length;c++){const h=Ut.normalizePath(this.baseUrl+l.textures[c]);await K.res.loadTexture(h)}}return e=null,!0}async load_textures(){}parserLine(e){var t=e.indexOf("#");if(t!=-1){if(e.indexOf("# object")!=-1){var i=e.split(/\s+/);let f=i[1],p=i[2];this.activeGeo={type:f,name:p[1],source_mat:"",source_faces:[]},this.geometrys[p]=this.activeGeo}e=e.substring(0,t)}e=e.trim();var i=e.split(/\s+/);if(i[0]==="v"){var n=[Number(i[1]),Number(i[2]),Number(i[3]),i[4]?1:Number(i[4])];this.source_vertices.push(n)}else if(i[0]==="vt"){var s=[Number(i[1]),Number(i[2]),i[3]?1:Number(i[3])];this.source_textureCoords.push(s)}else if(i[0]==="vn"){var o=[Number(i[1]),Number(i[2]),Number(i[3])];this.source_normals.push(o)}else if(i[0]==="f"){for(var u={indices:[],texture:[],normal:[]},l=1;l<i.length;++l){var c=i[l].indexOf("//"),h=i[l].split(/\W+/);c>0?(u.indices.push(h[0]),u.normal.push(h[1])):h.length===1?u.indices.push(h[0]):h.length===2?(u.indices.push(h[0]),u.texture.push(h[1])):h.length===3&&(u.indices.push(h[0]),u.texture.push(h[1]),u.normal.push(h[2]))}this.activeGeo.source_faces.push(u)}else i[0]==="usemtl"?this.activeGeo.source_mat=i[1]:i[0]==="mtllib"&&(this.mtlUrl=i[1])}async parserOBJ(){let e=this.textData.split(`\r
`);for(let t=0;t<e.length;t++){const i=e[t];this.parserLine(i)}return this.textData="",!0}async parser_mesh(){for(const e in this.geometrys){const t=this.geometrys[e];t.vertex_arr=[],t.normal_arr=[],t.uv_arr=[],t.indeice_arr=[];let i=0;for(let s=0;s<t.source_faces.length;s++){const o=t.source_faces[s];let u=parseInt(o.indices[0])-1,l=parseInt(o.indices[1])-1,c=parseInt(o.indices[2])-1,h=parseInt(o.normal[0])-1,d=parseInt(o.normal[1])-1,f=parseInt(o.normal[2])-1,p=parseInt(o.texture[0])-1,y=parseInt(o.texture[1])-1,_=parseInt(o.texture[2])-1;if(this.applyVector3(u,this.source_vertices,t.vertex_arr),this.applyVector3(h,this.source_normals,t.normal_arr),this.applyVector2(p,this.source_textureCoords,t.uv_arr),t.indeice_arr[i]=i++,this.applyVector3(l,this.source_vertices,t.vertex_arr),this.applyVector3(d,this.source_normals,t.normal_arr),this.applyVector2(y,this.source_textureCoords,t.uv_arr),t.indeice_arr[i]=i++,this.applyVector3(c,this.source_vertices,t.vertex_arr),this.applyVector3(f,this.source_normals,t.normal_arr),this.applyVector2(_,this.source_textureCoords,t.uv_arr),t.indeice_arr[i]=i++,o.indices.length>3){let g=parseInt(o.indices[3])-1,m=parseInt(o.normal[3])-1,E=parseInt(o.texture[3])-1;this.applyVector3(u,this.source_vertices,t.vertex_arr),this.applyVector3(h,this.source_normals,t.normal_arr),this.applyVector2(p,this.source_textureCoords,t.uv_arr),t.indeice_arr[i]=i++,this.applyVector3(c,this.source_vertices,t.vertex_arr),this.applyVector3(f,this.source_normals,t.normal_arr),this.applyVector2(_,this.source_textureCoords,t.uv_arr),t.indeice_arr[i]=i++,this.applyVector3(g,this.source_vertices,t.vertex_arr),this.applyVector3(m,this.source_normals,t.normal_arr),this.applyVector2(E,this.source_textureCoords,t.uv_arr),t.indeice_arr[i]=i++}}let n=new de;for(const s in this.geometrys){const o=this.geometrys[s];let u=new ti;u.setIndices(new Uint32Array(o.indeice_arr)),u.setAttribute(pA.position,new Float32Array(o.vertex_arr)),u.setAttribute(pA.normal,new Float32Array(o.normal_arr)),u.setAttribute(pA.uv,new Float32Array(o.uv_arr)),u.setAttribute(pA.TEXCOORD_1,new Float32Array(o.uv_arr)),u.addSubGeometry({indexStart:0,indexCount:o.indeice_arr.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0});let l=new ks,c=this.matLibs[o.source_mat];l.baseMap=K.res.getTexture(Ut.normalizePath(this.baseUrl+c.map_Kd));let h=new de,d=h.addComponent(he);d.geometry=u,d.material=l,n.addChild(h)}this.data=n}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}a(ey,"format",nt.TEXT);let H6=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        var srcId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x * 2u), i32(GlobalInvocationID.y * 2u));
        textureStore(outputTexture, dstId, textureLoad(inputTexture, srcId, 0));
    }
`,j6=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    fn repeat_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = max + id;
        }
        if (id >= max) {
            ret = id - max;
        }
        return ret;
    }

    fn clamp_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = 0;
        }
        if (id >= max) {
            ret = max - 1;
        }
        return ret;
    }

    fn blur(idx: u32) -> vec4 < f32 > {
        var id: vec2<i32>;
        id.y = i32(idx) / size.srcWidth;
        id.x = i32(idx) - i32(id.y) * size.srcWidth;
        var _BlurSpread: i32 = 1;
        var result = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        let g: array < f32, 3u > = array<f32, 3u > (0.4026, 0.2442, 0.0545);
        var uv: vec2<i32>;
        for(var h: i32 = 0; h< 5; h = h + 1) {
        let offsetU: i32 = (h - 2) * _BlurSpread;
        uv.x = id.x + offsetU;
        uv.x = clamp_i32(uv.x, size.srcWidth);
        for (var v: i32 = 0; v < 5; v = v + 1) {
            let offsetV: i32 = (v - 2) * _BlurSpread;
            uv.y = id.y + offsetV;
            uv.y = clamp(uv.y, 0, size.srcHeight);
            let weightU: i32 = abs(h - 2);
            let weightV: i32 = abs(v - 2);
            let resultWeight: f32 = g[weightU] * g[weightV];
            var colorf32: vec4<f32> = textureLoad(inputTexture, uv, 0);
            let sampleColor: vec4<f32> = vec4<f32>(colorf32 * resultWeight);
            result = result + sampleColor;
        }
    }

    return result;
    }

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        let srcIdx = i32(uv.y) * size.srcWidth + i32(uv.x);
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        textureStore(outputTexture, dstId, blur(u32(srcIdx)));
    }
`;class W6{static blurImageFromTexture(A,e,t,i){const n=iA.device;let s=i?j6:H6;const o=n.createComputePipeline({layout:"auto",compute:{module:n.createShaderModule({code:s}),entryPoint:"main"}}),u=4*4,l=n.createBuffer({size:u,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});n.queue.writeBuffer(l,0,new Uint32Array([A.width,A.height,e,t]));const c=n.createTexture({size:[e,t,1],mipLevelCount:1,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,label:"blurImageFromTexture"});let h=[{binding:0,resource:{buffer:l,size:4*4}},{binding:1,resource:A.gpuTexture.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:c.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})}];const d=n.createBindGroup({layout:o.getBindGroupLayout(0),entries:h}),f=sA.beginCommandEncoder(),p=f.beginComputePass();return p.setPipeline(o),p.setBindGroup(0,d),p.dispatchWorkgroups(Math.floor(e/8),Math.floor(t/8)),p.end(),sA.endCommandEncoder(f),l.destroy(),c}}class p0 extends Tt{constructor(){super(4,4);a(this,"width",4);a(this,"height",4);a(this,"depthOrArrayLayers",6);a(this,"visibility",GPUShaderStage.FRAGMENT);a(this,"textureBindingLayout",{viewDimension:"cube",multisampled:!1});a(this,"samplerBindingLayout",{type:"filtering"});this.addressModeU=xr.clamp_to_edge,this.addressModeV=xr.clamp_to_edge,this.addressModeW=xr.clamp_to_edge,this.magFilter=this.minFilter="linear",this.mipmapFilter="linear",this.visibility=GPUShaderStage.FRAGMENT}createTextureDescriptor(e,t,i,n,s=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT,o=1){this.width=e,this.height=t,this.format=n,this.usage=s,this.textureDescriptor={size:{width:e,height:t,depthOrArrayLayers:6},mipLevelCount:i,format:n,usage:s,dimension:"2d"},o>1?this.viewDescriptor={dimension:"cube-array"}:this.viewDescriptor={dimension:this.textureBindingLayout.viewDimension}}}const Cs=class Cs{static createFace(A,e,t,i){const n=iA.device;this.pipeline==null&&(this.pipeline=n.createComputePipeline({layout:"auto",compute:{module:n.createShaderModule({code:Cs.createCube}),entryPoint:"main"}}));const s=this.pipeline,o=4*4;this.configBuffer||(this.configBuffer=n.createBuffer({size:o,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),n.queue.writeBuffer(this.configBuffer,0,new Uint32Array([A,0,0,0])),this.blurSettingBuffer||(this.blurSettingBuffer=n.createBuffer({size:o,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),n.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([0,0,0,0]));let u=[{binding:0,resource:{buffer:this.configBuffer,size:4*4}},{binding:1,resource:t.getGPUView()},{binding:2,resource:i.getGPUView()}];const l=n.createBindGroup({layout:s.getBindGroupLayout(0),entries:u}),c=sA.beginCommandEncoder(),h=c.beginComputePass();h.setPipeline(s),h.setBindGroup(0,l),h.dispatchWorkgroups(e/8,e/8),h.end(),sA.endCommandEncoder(c)}};a(Cs,"createCube",`

struct SettingUniform {
  faceIndex : i32,
  srcHeight : i32,
  dstWidth : i32,
  dstHeight : i32
};

@group(0) @binding(0) var<uniform> settingUniform : SettingUniform;
@group(0) @binding(1) var inputTex : texture_2d<f32>;
@group(0) @binding(2) var outTex : texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
  let coord = vec2<i32>(GlobalInvocationID.xy);
  
  let outTexSize = textureDimensions(outTex).xy;
  let outTexel = 1.0 / vec2<f32>(outTexSize - 1);
  
  let uv_0 = vec2<f32>(coord) * outTexel;
  var oc = samplePixel(settingUniform.faceIndex, uv_0);
  textureStore(outTex, coord, oc);
}

fn samplePixel(face:i32, uv01:vec2<f32>) -> vec4<f32> {
    let rectangle_v2_f32 = round(vec2<f32>(0.25, 0.33333) * vec2<f32>(textureDimensions(inputTex).xy));
    let rectangle = vec2<i32>(rectangle_v2_f32);
    
    var offsetIndex = vec2<i32>(0);
    if(face == 0){
        offsetIndex.x = 2;
        offsetIndex.y = 1;
    }else if(face == 1){
        offsetIndex.x = 0;
        offsetIndex.y = 1;
    }else if(face == 2){
        offsetIndex.x = 1;
        offsetIndex.y = 0;
    }else if(face == 3){
        offsetIndex.x = 1;
        offsetIndex.y = 2;
    }else if(face == 4){
        offsetIndex.x = 1;
        offsetIndex.y = 1;
    }else if(face == 5){
        offsetIndex.x = 3;
        offsetIndex.y = 1;
    }
    
    let coordOffset = rectangle * offsetIndex;
    let coordIndex = vec2<i32>(vec2<f32>(rectangle - 1) * uv01);
    var oc = textureLoad(inputTex, coordOffset + coordIndex, 0);
    return oc;
}
`),a(Cs,"configBuffer",null),a(Cs,"blurSettingBuffer",null),a(Cs,"pipeline");let nf=Cs;class Tg extends p0{constructor(){super();a(this,"_images");a(this,"_url");this.useMipmap=!0}generateImages(e){let t=iA.device;this.width=this.height=32,"width"in e[0]&&(this.width=this.height=e[0].width);let i=Math.min(this.width,this.height);for(this.mipmapCount=1;i>16;)i/=2,this.mipmapCount++;this.textureBindingLayout.viewDimension="cube",this.samplerBindingLayout.type="filtering",this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format),this.textureDescriptor.size={width:this.width,height:this.height,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuTexture=this.getGPUTexture();let n=[],s=n,o=this.width,u=this.height;if(e[0]instanceof Tt){for(let l=0;l<6;l++){let c=e[l];n[l]=c.getGPUTexture()}this.uploadMipmapGPUTexture(0,this.width,this.width,n)}else{this.uploadBaseImages(this.width,e);for(let l=0;l<6;l++){let c=new Hn(!1);c.format=this.format,c.source=e[l],n[l]=c.getGPUTexture()}}for(let l=1;l<this.mipmapCount;l++){s=n,n=[];let c={width:o,height:u,gpuTexture:null};o=o/2,u=u/2;for(let h=0;h<6;h++)c.gpuTexture=s[h],n[h]=W6.blurImageFromTexture(c,o,u,!1);this.uploadMipmapGPUTexture(l,o,u,n)}this.gpuSampler=t.createSampler(this)}uploadBaseImages(e,t){let i=iA.device;const n=sA.beginCommandEncoder();for(let s=0;s<6;s++)i.queue.copyExternalImageToTexture({source:t[s]},{texture:this.gpuTexture,mipLevel:0,origin:{x:0,y:0,z:s}},{width:e,height:e,depthOrArrayLayers:1});sA.endCommandEncoder(n)}uploadMipmapGPUTexture(e,t,i,n){const s=sA.beginCommandEncoder();for(let o=0;o<6;o++)s.copyTextureToTexture({texture:n[o],mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.gpuTexture,mipLevel:e,origin:{x:0,y:0,z:o}},{width:t,height:i,depthOrArrayLayers:1});sA.endCommandEncoder(s)}get images(){return this._images}set images(e){if(this._images=e,this._images[0]instanceof HTMLImageElement){let t=function(o,u){u.decode().then(async()=>{i[o]=await createImageBitmap(u),n--,n==0&&s.generateImages(i)})},i=[],n=6,s=this;for(let o=0;o<6;o++)t(o,this._images[o])}else(this._images instanceof HTMLCanvasElement||this._images instanceof ImageBitmap)&&this.generateImages(this._images)}async load(e){this._url=e;let t=6,i=[];this.format=MA.rgba8unorm;let n=this;async function s(o,u){const l=document.createElement("img");if(l.src=u,l.setAttribute("crossOrigin",""),await l.decode(),i[o]=await createImageBitmap(l),t--,t==0)return n.generateImages(i),!0}for(let o=0;o<6;o++)await s(o,e[o]);return!0}async loadStd(e){this._url=e,this.format=MA.rgba8unorm;const t=document.createElement("img");t.src=e,t.setAttribute("crossOrigin",""),await t.decode();let i=new Hn(!1);i.name=Ut.getURLName(e),i.format="rgba8unorm",i.source=await createImageBitmap(t);let n=Math.round(Math.log2(i.width/4));n=Math.pow(2,n),this.width=this.height=n;let s=[];for(let o=0;o<6;o++){let u=new tn(n,n,this.format,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING);u.name="face "+o,s.push(u),nf.createFace(o,this.width,i,u)}return this.generateImages(s),!0}}var Y6=(r=>(r[r.Left=0]="Left",r[r.Right=1]="Right",r[r.Bottom=2]="Bottom",r[r.Top=3]="Top",r[r.Back=4]="Back",r[r.Front=5]="Front",r))(Y6||{});class ty{static getRotationToFace(A){let e=oe.identity().clone(),t=new I,i=new NA().identity(),n=new I;switch(A){case 3:t.set(0,-1,0),n.set(0,0,-1);break;case 2:t.set(0,1,0),n.set(0,0,1);break;case 1:t.set(1,0,0),n.set(0,1,0);break;case 0:t.set(-1,0,0),n.set(0,1,0);break;case 4:t.set(0,0,-1),n.set(0,1,0);break;case 5:return oe.identity()}return i.lookAt(new I,t,n),e.setFromRotationMatrix(i),e}}let $6=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
  @group(0) @binding(2) var inputTexSampler : sampler;
  @group(0) @binding(3) var inputTex : texture_2d<f32>;

  @group(1) @binding(0) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;

  fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
      var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
      //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
      uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
      uv = uv + vec2<f32>(0.5);
      uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
      return uv;
  }


  fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
      let x:f32 = position.x;
      let y:f32 = position.y;
      let z:f32 = position.z;

      let qx:f32 = q.x;
      let qy:f32 = q.y;
      let qz:f32 = q.z;
      let qw:f32 = q.w;

      let ix:f32 = qw * x + qy * z - qz * y;
      let iy:f32 = qw * y + qz * x - qx * z;
      let iz:f32 = qw * z + qx * y - qy * x;
      let iw:f32 = -qx * x - qy * y - qz * z;

      var ret: vec3<f32>;
      ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

      return ret;
  }

  fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
      var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
      var halfSize:f32 = f32(size.dstWidth / 2) - 0.5;
      var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
      worldDirection = normalize(worldDirection);
      worldDirection = applyQuaternion(worldDirection, quaternion);
      return worldDirection;
  }

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let coord = vec2<i32>(GlobalInvocationID.xy);
    let quaternion = faceRotation[GlobalInvocationID.z];
    var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
    let uv_f32:vec2<f32> = SampleSphericalMap(worldDirection);
    let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
    textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
  }
`,K6=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage, read> tex_in: array<vec4<f32>>;
  @group(0) @binding(2) var outputBuffer : texture_storage_2d<rgba16float, write>;

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let fragCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
    var oc:vec4<f32> = tex_in[fragCoord.y * size.srcWidth + fragCoord.x] / 256.0;
    var e = pow(2.0, oc.w * 255.0 - 128.0);
    oc = oc * e;
    oc = scaleByThreshold(oc, 40.0);
    textureStore(outputBuffer, fragCoord , vec4<f32>(oc.xyz, 1.0) );
  }

  fn scaleByThreshold(color:vec4<f32>, threshold:f32) -> vec4<f32>{
    var oc = color;
    let brightness = length(vec3<f32>(oc.xyz));
    var scale = brightness / threshold;
    if(scale > 1.0){
        scale = 1.0 / pow(scale, 0.7);
        oc = oc * scale;
    }
    oc.a = 1.0;
    return oc;
  }
`;const Je=class Je{static convertRGBE2RGBA(A,e){const t=iA.device,i=t.createComputePipeline({layout:"auto",compute:{module:t.createShaderModule({code:K6}),entryPoint:"main"}}),n=t.createBuffer({size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});t.queue.writeBuffer(n,0,new Uint32Array([A.width,A.height,A.width,A.height]));const s=t.createBuffer({size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});t.queue.writeBuffer(s,0,e);let o=[{binding:0,resource:{buffer:n,size:4*4}},{binding:1,resource:{buffer:s,size:e.byteLength}},{binding:2,resource:A.getGPUView()}];const u=t.createBindGroup({layout:i.getBindGroupLayout(0),entries:o}),l=sA.beginCommandEncoder(),c=l.beginComputePass();c.setPipeline(i),c.setBindGroup(0,u),c.dispatchWorkgroups(Math.floor(A.width/8),Math.floor(A.height/8)),c.end(),sA.endCommandEncoder(l),n.destroy()}static makeTextureCube(A,e,t){const i=iA.device;Je.makeFaceTexturePipeline||(Je.makeFaceTexturePipeline=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:$6}),entryPoint:"main"}}));const n=Je.makeFaceTexturePipeline,s=4*4;Je.configBuffer||(Je.configBuffer=i.createBuffer({size:s,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),i.queue.writeBuffer(Je.configBuffer,0,new Uint32Array([A.width,A.height,e,e]));const o=4*6;if(!Je.quaternionBuffer){Je.quaternionBuffer=i.createBuffer({size:o*4*6,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let p=new Float32Array(4*6);for(let y=0;y<6;y++){let _=ty.getRotationToFace(y);p[y*4+0]=_.x,p[y*4+1]=_.y,p[y*4+2]=_.z,p[y*4+3]=_.w}i.queue.writeBuffer(Je.quaternionBuffer,0,p)}let u=[{binding:0,resource:{buffer:Je.configBuffer,size:4*4}},{binding:1,resource:{buffer:Je.quaternionBuffer,size:o*4}},{binding:2,resource:A.gpuSampler},{binding:3,resource:A.getGPUView()}],l=[{binding:0,resource:t}];const c=i.createBindGroup({layout:n.getBindGroupLayout(0),entries:u}),h=i.createBindGroup({layout:n.getBindGroupLayout(1),entries:l}),d=sA.beginCommandEncoder(),f=d.beginComputePass();f.setPipeline(n),f.setBindGroup(0,c),f.setBindGroup(1,h),f.dispatchWorkgroups(e/8,e/8,6),f.end(),sA.endCommandEncoder(d)}};a(Je,"makeFaceTexturePipeline"),a(Je,"configBuffer"),a(Je,"quaternionBuffer");let uu=Je;class ry extends Tt{constructor(){super(32,32,null),this.isHDRTexture=!0}create(A=32,e=32,t=null,i=!0){this.width=A,this.height=e;let n=iA.device;const s=A*4*2;let o=t;this.format=MA.rgba16float,this.useMipmap=i,this.updateTextureDescription(),this.updateGPUTexture();const u=n.createBuffer({size:o.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});n.queue.writeBuffer(u,0,o);const l=sA.beginCommandEncoder();return l.copyBufferToTexture({buffer:u,bytesPerRow:s},{texture:this.getGPUTexture()},{width:A,height:e,depthOrArrayLayers:1}),sA.endCommandEncoder(l),this.useMipmap||(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float"),this.gpuSampler=n.createSampler(this),this}async load(A,e){return(await new Yt().load(A,ny,e)).getHDRTexture()}}const iy=new Float32Array(1),q6=new Int32Array(iy.buffer);let Pa=function(r){iy[0]=r;const A=q6[0];let e=A>>16&32768,t=A>>12&2047;const i=A>>23&255;return i<103?e:i>142?(e|=31744,e|=(i==255?1:0)&&A&8388607,e):i<114?(t|=2048,e|=(t>>114-i)+(t>>113-i&1),e):(e|=i-112<<10|t>>1,e+=t&1,e)};var X6=(r=>(r[r.RGBE_RETURN_FAILURE=-1]="RGBE_RETURN_FAILURE",r[r.rgbe_read_error=1]="rgbe_read_error",r[r.rgbe_write_error=2]="rgbe_write_error",r[r.rgbe_format_error=3]="rgbe_format_error",r[r.rgbe_memory_error=4]="rgbe_memory_error",r))(X6||{});class Dg{constructor(){a(this,"valid");a(this,"string");a(this,"comments");a(this,"programtype");a(this,"format");a(this,"gamma");a(this,"exposure");a(this,"width");a(this,"height")}}class ny extends Qt{constructor(){super(...arguments);a(this,"_rgbeArray");a(this,"_width");a(this,"_height");a(this,"_RGBE_RETURN_FAILURE",-1);a(this,"_parserType",MA.rgba8uint)}parseBuffer(e){let t,i=new Uint8Array(e);i.pos=0;const n=this.paserHeader(i);if(n instanceof Dg){const s=this._width=n.width,o=this._height=n.height;let u=this.parserPixel(i.subarray(i.pos),s,o);if(u instanceof Uint8Array){switch(this._rgbeArray=u,this._parserType){}return this.data=t,t}}return null}verification(){if(this.data&&this.data instanceof Tt||this._rgbeArray)return!0;throw new Error("Method not implemented.")}getTexture(){return this.data}getCubeTexture(){let e=this._width/4;return new sf().createFromHDRData(e,{width:this._width,height:this._height,array:this._rgbeArray})}getHDRTexture(){return new ry().create(this._width,this._height,this._rgbeArray)}parseError(e,t){switch(e){case 1:console.error("Read Error: "+(t||""));break;case 2:console.error("Write Error: "+(t||""));break;case 3:console.error("Bad File Format: "+(t||""));break;default:case 4:console.error("Error: "+(t||""))}return-1}parserBlock(e,t,i){t=t||1024;let n=e.pos,s=-1,o=0,u="",l=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));const c=`
`;for(;0>(s=l.indexOf(c))&&o<t&&n<e.byteLength;)u+=l,o+=l.length,n+=128,l+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(n,n+128)));return-1<s?(i!==!1&&(e.pos+=o+s+1),u+l.slice(0,s)):!1}paserHeader(e){const t=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,n=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,s=/^\s*FORMAT=(\S+)\s*$/,o=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,u=new Dg;let l,c;if(e.pos>=e.byteLength||!(l=this.parserBlock(e)))return this.parseError(1,"no header found");if(!(c=l.match(t)))return this.parseError(3,"bad initial token");const h=1,d=2,f=4;for(u.valid|=h,u.programtype=c[1],u.string+=l+`
`;l=this.parserBlock(e),l!==!1;){if(u.string+=l+`
`,l.charAt(0)==="#"){u.comments+=l+`
`;continue}if((c=l.match(i))&&(u.gamma=Math.floor(parseFloat(c[1])*10)/10),(c=l.match(n))&&(u.exposure=Math.floor(parseFloat(c[1])*10)/10),(c=l.match(s))&&(u.valid|=d,u.format=c[1]),(c=l.match(o))&&(u.valid|=f,u.height=parseInt(c[1],10),u.width=parseInt(c[2],10)),u.valid&d&&u.valid&f)break}return u.valid&d?u.valid&f?u:(this.parseError(3,"missing image size specifier"),null):(this.parseError(3,"missing format specifier"),null)}parserPixel(e,t,i){const n=t;if(n<8||n>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);if(n!==(e[2]<<8|e[3]))return this.parseError(3,"wrong scanline width");const s=new Uint8Array(4*t*i);if(!s.length)return this.parseError(4,"unable to allocate buffer space");let o=0,u=0;const l=4*n,c=new Uint8Array(4),h=new Uint8Array(l);let d=i;for(;d>0&&u<e.byteLength;){if(u+4>e.byteLength)return this.parseError(1,"");if(c[0]=e[u++],c[1]=e[u++],c[2]=e[u++],c[3]=e[u++],c[0]!=2||c[1]!=2||(c[2]<<8|c[3])!=n)return this.parseError(3,"bad rgbe scanline format");let f=0,p;for(;f<l&&u<e.byteLength;){p=e[u++];const _=p>128;if(_&&(p-=128),p===0||f+p>l)return this.parseError(3,"bad scanline data");if(_){const g=e[u++];for(let m=0;m<p;m++)h[f++]=g}else h.set(e.subarray(u,u+p),f),f+=p,u+=p}const y=n;for(let _=0;_<y;_++){let g=0;s[o]=h[_+g],g+=n,s[o+1]=h[_+g],g+=n,s[o+2]=h[_+g],g+=n,s[o+3]=h[_+g],o+=4}d--}return s}rbgeToFloat(e,t,i,n){const s=e[t+3],o=Math.pow(2,s-128)/255;i[n+0]=e[t+0]*o,i[n+1]=e[t+1]*o,i[n+2]=e[t+2]*o,i[n+3]=1}rbgeToHalfFloat(e,t,i,n){const s=e[t+3],o=Math.pow(2,s-128)/255;i[n+0]=Pa(e[t+0]*o),i[n+1]=Pa(e[t+1]*o),i[n+2]=Pa(e[t+2]*o),i[n+3]=Pa(1)}}let J6=`
    struct ImageSize {
        srcWidth : i32,
        srcHeight : i32,
        dstWidth : i32,
        dstHeight : i32
    };
    
    @group(0) @binding(0) var<uniform> size : ImageSize;
    @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
    @group(0) @binding(2) var inputTexSampler : sampler;
    @group(0) @binding(3) var inputTex : texture_2d<f32>;
    
    @group(1) @binding(0) var<uniform> blurSetting : vec4<f32>;
    @group(1) @binding(1) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;
    
    var<private> PI: f32 = 3.14159265359;
    
    fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
        let x:f32 = position.x;
        let y:f32 = position.y;
        let z:f32 = position.z;
    
        let qx:f32 = q.x;
        let qy:f32 = q.y;
        let qz:f32 = q.z;
        let qw:f32 = q.w;
    
        let ix:f32 = qw * x + qy * z - qz * y;
        let iy:f32 = qw * y + qz * x - qx * z;
        let iz:f32 = qw * z + qx * y - qy * x;
        let iw:f32 = -qx * x - qy * y - qz * z;
    
        var ret: vec3<f32>;
        ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
        return ret;
    }
    
    fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
        var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
        var halfSize:f32 = f32(size.dstWidth / 2);
        var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
        worldDirection = normalize(worldDirection);
        worldDirection = applyQuaternion(worldDirection, quaternion);
        return worldDirection;
    }
    
    fn VanDerCorpus(n0:u32, base0:u32) -> f32
    {
        var n = n0;
        var base = base0;
        var invBase:f32 = 1.0 / f32(base);
        var denom:f32   = 1.0;
        var result:f32  = 0.0;
    
        for(var i:u32 = 0u; i < 32u; i = i + 1u)
        {
            if(n > 0u)
            {
                denom   = f32(n) % 2.0;
                result = result + denom * invBase;
                invBase = invBase / 2.0;
                n       = u32(f32(n) / 2.0);
            }
        }
    
        return result;
    }
    
    fn HammersleyNoBitOps(i:u32, N:u32) -> vec2<f32>
    {
        return vec2(f32(i)/f32(N), VanDerCorpus(i, 2u));
    }
    
    fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
    {
        // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
        var bits = (i << 16u) | (i >> 16u);
        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
        var rdi = f32(bits) * 2.3283064365386963e-10;
        return vec2<f32>(f32(i) /f32(N), rdi);
    }
    
    fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
    {
        var a = roughness*roughness;
    
        var phi = 2.0 * PI * Xi.x;
        var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
        var sinTheta = sqrt(1.0 - cosTheta*cosTheta);
    
        // from spherical coordinates to cartesian coordinates
        var H:vec3<f32>;
        H.x = cos(phi) * sinTheta;
        H.y = sin(phi) * sinTheta;
        H.z = cosTheta;
    
        // from tangent-space vector to world-space sample vector
        var up:vec3<f32>;
        if(abs(N.z) < 0.999)
        {
            up = vec3<f32>(0.0, 0.0, 1.0);
        }
        else
        {
            up = vec3<f32>(1.0, 0.0, 0.0);
        }
        var tangent:vec3<f32>  = normalize(cross(up, N));
        var bitangent:vec3<f32> = cross(N, tangent);
        var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
        return normalize(sampleVec);
    }
    
    fn multiSample(localPos:vec3<f32>, roughness:f32) -> vec4<f32>
    {
        var N: vec3<f32> = normalize(localPos);
        var R: vec3<f32> = N;
        var V: vec3<f32> = R;
    
        let SAMPLE_COUNT:u32 = 1024u;
        var totalWeight:f32 = 0.0;
        var prefilteredColor:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
        for(var i:u32 = 0u; i < SAMPLE_COUNT; i = i + 1u)
        {
            var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
            var H :vec3<f32> = ImportanceSampleGGX(Xi, N, roughness);
            var L :vec3<f32> = normalize(2.0 * dot(V, H) * H - V);
    
            var NdotL:f32 = max(dot(N, L), 0.0);
            if(NdotL > 0.0)
            {
                var att = 1.0 ;//( f32(SAMPLE_COUNT - i) / f32(SAMPLE_COUNT)) ;
    
                prefilteredColor = prefilteredColor + sampleColor(L).rgb * NdotL;
                prefilteredColor = prefilteredColor * att ;
                totalWeight      = totalWeight + NdotL;
            }
        }
        prefilteredColor = prefilteredColor / totalWeight;
    
        return vec4<f32>(prefilteredColor, 1.0);
    }
    
    fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
        var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
        //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
        uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
        uv = uv + vec2<f32>(0.5);
        uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
        return uv;
    }
    
    fn sampleColor(d:vec3<f32>) -> vec4<f32>
    {
        let uv_f32:vec2<f32> = SampleSphericalMap(d);
        let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
        //let dir = vec3<f32>(-d.x, -d.y, d.z);
        //var oc:vec4<f32> = textureSampleLevel(cubeMap, cubeMapSampler, dir, 0.0);
        return oc;
    }
    
    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let coord = vec2<i32>(GlobalInvocationID.xy);
        let quaternion = faceRotation[GlobalInvocationID.z];
        var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
        var oc:vec4<f32> = multiSample(worldDirection, blurSetting.x);
        textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
    }

`;class Fa{static importantSample(A,e,t,i){const n=iA.device;this.pipeline==null&&(this.pipeline=n.createComputePipeline({layout:"auto",compute:{module:n.createShaderModule({code:J6}),entryPoint:"main"}}));const s=this.pipeline,o=4*4;this.configBuffer||(this.configBuffer=n.createBuffer({size:o,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),n.queue.writeBuffer(this.configBuffer,0,new Uint32Array([A.width,A.height,e,e]));const u=4*6;if(!this.quaternionBuffer){this.quaternionBuffer=n.createBuffer({size:u*4*6,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let _=new Float32Array(4*6);for(let g=0;g<6;g++){let m=ty.getRotationToFace(g);_[g*4+0]=m.x,_[g*4+1]=m.y,_[g*4+2]=m.z,_[g*4+3]=m.w}n.queue.writeBuffer(this.quaternionBuffer,0,_)}this.blurSettingBuffer||(this.blurSettingBuffer=n.createBuffer({size:o,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),n.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([t,0,0,0]));const l=A.erpTexture;let c=[{binding:0,resource:{buffer:this.configBuffer,size:4*4}},{binding:1,resource:{buffer:this.quaternionBuffer,size:u*4}},{binding:2,resource:l.gpuSampler},{binding:3,resource:l.getGPUView()}],h=[{binding:0,resource:{buffer:this.blurSettingBuffer,size:4*4}},{binding:1,resource:i}];const d=n.createBindGroup({layout:s.getBindGroupLayout(0),entries:c}),f=n.createBindGroup({layout:s.getBindGroupLayout(1),entries:h}),p=sA.beginCommandEncoder(),y=p.beginComputePass();y.setPipeline(s),y.setBindGroup(0,d),y.setBindGroup(1,f),y.dispatchWorkgroups(e/8,e/8,6),y.end(),sA.endCommandEncoder(p)}}a(Fa,"configBuffer",null),a(Fa,"quaternionBuffer",null),a(Fa,"blurSettingBuffer",null),a(Fa,"pipeline");class sy{constructor(A){a(this,"faceTextureRef");a(this,"_texture");this._texture=A,this.faceTextureRef={}}uploadTexture(A,e){let t=this.getGpuSource(A);return uu.makeTextureCube(e,this._texture.width,t.v),this}uploadErpTexture(A){let e=this.getGpuSource(0);return uu.makeTextureCube(A,this._texture.width,e.v),this.generateMipmap(A),this}getGpuSource(A){let e=this.faceTextureRef[A];return e||(e={t:this._texture.getGPUTexture(),v:this._texture.getGPUTexture().createView({format:this._texture.format,dimension:"2d-array",baseMipLevel:A,mipLevelCount:1,arrayLayerCount:6})},this.faceTextureRef[A]=e),e}generateMipmap(A){let e=1;for(;e<this._texture.mipmapCount;)this.generateMipmapAtLevel(e,A),e++}generateMipmapAtLevel(A,e,t=3){let i=this._texture.width/Math.pow(2,A),n={width:i,height:i,erpTexture:e},s=(A+1)/this._texture.mipmapCount;s=Math.pow(s,t);let o=this.getGpuSource(A);Fa.importantSample(n,i,s,o.v)}}class sf extends p0{constructor(){super();a(this,"_url");a(this,"_faceData");this.useMipmap=!0,this.format=MA.rgba16float,this.isHDRTexture=!0,this._faceData=new sy(this)}createFromHDRData(e,t){let i=new tn(t.width,t.height,MA.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),n=new Float32Array(t.array);return uu.convertRGBE2RGBA(i,n),this.createFromTexture(e,i),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;i>16;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=iA.device.createSampler(this),this._faceData.uploadErpTexture(t),this}async load(e,t){return this._url=e,(await new Yt().load(e,ny,t)).getCubeTexture()}}function Z6(r){return new TextDecoder().decode(r)}class g0{constructor(A,e,t,i){a(this,"buffer");a(this,"binOffset");a(this,"binLength");a(this,"header");this.buffer=A,this.binOffset=e+t,this.binLength=i;let n=null;if(t!==0){const s=new Uint8Array(A,e,t);n=JSON.parse(Z6(s))}else n={};this.header=n}getKeys(){return Object.keys(this.header)}getData(A,e,t=null,i=null){const n=this.header;if(!(A in n))return null;const s=n[A];if(s instanceof Object){if(Array.isArray(s))return s;{const{buffer:o,binOffset:u,binLength:l}=this,c=s.byteOffset||0,h=s.type||i,d=s.componentType||t;if("type"in s&&i&&s.type!==i)throw new Error("FeatureTable: Specified type does not match expected type.");let f;switch(h){case"SCALAR":f=1;break;case"VEC2":f=2;break;case"VEC3":f=3;break;case"VEC4":f=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${A}".`)}let p;const y=u+c,_=e*f;switch(d){case"BYTE":p=new Int8Array(o,y,_);break;case"UNSIGNED_BYTE":p=new Uint8Array(o,y,_);break;case"SHORT":p=new Int16Array(o,y,_);break;case"UNSIGNED_SHORT":p=new Uint16Array(o,y,_);break;case"INT":p=new Int32Array(o,y,_);break;case"UNSIGNED_INT":p=new Uint32Array(o,y,_);break;case"FLOAT":p=new Float32Array(o,y,_);break;case"DOUBLE":p=new Float64Array(o,y,_);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${A}".`)}if(y+_*p.BYTES_PER_ELEMENT>u+l)throw new Error("FeatureTable: Feature data read outside binary body length.");return p}}else return s}}class oy extends g0{constructor(e,t,i,n,s){super(e,i,n,s);a(this,"batchSize");this.batchSize=t}getData(e,t=null,i=null){return super.getData(e,this.batchSize,t,i)}}function ay(r){let A;if(r instanceof DataView?A=r:A=new DataView(r),String.fromCharCode(A.getUint8(0))==="{")return null;let e="";for(let t=0;t<4;t++)e+=String.fromCharCode(A.getUint8(t));return e}class AI{async parse(A){const e=new DataView(A),t=ay(e);console.assert(t==="b3dm");const i=e.getUint32(4,!0);console.assert(i===1);const n=e.getUint32(8,!0);console.assert(n===A.byteLength);const s=e.getUint32(12,!0),o=e.getUint32(16,!0),u=e.getUint32(20,!0),l=e.getUint32(24,!0),c=28,h=new g0(A,c,s,o),d=c+s+o,f=new oy(A,h.getData("BATCH_LENGTH"),d,u,l),p=d+u+l,y=new Uint8Array(A,p,n-p);return{version:i,featureTable:h,batchTable:f,glbBytes:y}}}const _s=class _s extends AI{constructor(){super();a(this,"adjustmentTransform");a(this,"gltfBuffer");this.adjustmentTransform=new NA().identity(),_s.tempMatrix||(_s.tempMatrix=new NA().identity())}async parse(e){const t=await super.parse(e);this.gltfBuffer=t.glbBytes.slice().buffer;let i=await new cy().parseBinary(this.gltfBuffer),{batchTable:n,featureTable:s}=t;const o=s.getData("RTC_CENTER");o&&(i.x+=o[0],i.y+=o[1],i.z+=o[2]);let u=i.getComponent(Si);u.updateWorldMatrix();let l=_s.tempMatrix;l.compose(u.localPosition,u.localRotQuat,u.localScale),l.multiply(this.adjustmentTransform);let c=l.decompose(_i.QUATERNION);return u.localRotQuat.copyFrom(c[1]),u.localRotQuat=u.localRotQuat,u.localPosition.copyFrom(c[0]),u.localPosition=u.localPosition,u.localScale.copyFrom(c[2]),u.localScale=u.localScale,u.updateWorldMatrix(),i.batchTable=n,i.featureTable=s,i}static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}};a(_s,"tempMatrix");let zs=_s;class uy extends Qt{async parseBuffer(A){let e=new zs;e.adjustmentTransform=this.userData,this.data=await e.parse(A)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}a(uy,"format",nt.JSON);const ly="glTF",ma=12,xg={JSON:1313821514,BIN:5130562},of={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class eI{constructor(A){a(this,"name");a(this,"content");a(this,"body");a(this,"header");this.name=of.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(A,0,ma);if(this.header={magic:zs.decodeText(new Uint8Array(A.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ly)throw new Error("GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("GLTFLoader: Legacy binary file detected.");const t=this.header.length-ma,i=new DataView(A,ma);let n=0;for(;n<t;){const s=i.getUint32(n,!0);n+=4;const o=i.getUint32(n,!0);if(n+=4,o===xg.JSON){const u=new Uint8Array(A,ma+n,s);this.content=zs.decodeText(u)}else if(o===xg.BIN){const u=ma+n;this.body=A.slice(u,u+s)}n+=s}if(this.content===null)throw new Error("GLTFLoader: JSON content not found.")}}class cy{constructor(){a(this,"_binary")}async parseBinary(A){this._binary=A;const e=zs.decodeText(new Uint8Array(this._binary,0,4)),t={};let i,n;if(e===ly){try{n=t[of.KHR_BINARY_GLTF]=new eI(this._binary)}catch{return}i=t[of.KHR_BINARY_GLTF].content}else i=zs.decodeText(new Uint8Array(this._binary));const s=JSON.parse(i);return await this.parseGLB(s,n.body)}async parseGLB(A,e){return await new f0().parseJsonAndBuffer(A,e)}}class tI{async parse(A){const e=new DataView(A),t=ay(e);console.assert(t==="i3dm");const i=e.getUint32(4,!0);console.assert(i===1);const n=e.getUint32(8,!0);console.assert(n===A.byteLength);const s=e.getUint32(12,!0),o=e.getUint32(16,!0),u=e.getUint32(20,!0),l=e.getUint32(24,!0);e.getUint32(28,!0);const c=32,h=new g0(A,c,s,o),d=c+s+o,f=new oy(A,h.getData("INSTANCES_LENGTH"),d,u,l),p=d+u+l,y=new Uint8Array(A,p,n-p);return{version:i,featureTable:h,batchTable:f,glbBytes:y}}}class rI extends de{constructor(e,t,i){super();a(this,"_geometry");a(this,"_material");a(this,"_instanceList");this._geometry=e,this._material=t,this._instanceList=[];for(let n=0;n<i;n++){let s,o=new de;s=o.addComponent(he),s.geometry=this._geometry,s.material=this._material,this.addChild(o),this._instanceList.push(o)}}setMatrixAt(e,t){let i=this._instanceList[e],n=t.decompose(_i.QUATERNION),s=i.transform;return s.localRotQuat.copyFrom(n[1]),s.localRotQuat=s.localRotQuat,s.localPosition.copyFrom(n[0]),s.localPosition=s.localPosition,s.localScale.copyFrom(n[2]),s.localScale=s.localScale,this}}const se=class se extends tI{constructor(){super();a(this,"adjustmentTransform");a(this,"_gltfBuffer");se.tempFwd||(se.tempFwd=new I),se.tempUp||(se.tempUp=new I),se.tempRight||(se.tempRight=new I),se.tempPos||(se.tempPos=new I),se.tempQuat||(se.tempQuat=new oe),se.tempSca||(se.tempSca=new I),se.tempMat||(se.tempMat=new NA),this.adjustmentTransform=new NA().identity()}async parse(e){const t=await super.parse(e);this._gltfBuffer=t.glbBytes.slice().buffer;let i=await new cy().parseBinary(this._gltfBuffer),{batchTable:n,featureTable:s}=t;const o=this.adjustmentTransform,u=s.getData("INSTANCES_LENGTH"),l=s.getData("POSITION",u,"FLOAT","VEC3"),c=s.getData("NORMAL_UP",u,"FLOAT","VEC3"),h=s.getData("NORMAL_RIGHT",u,"FLOAT","VEC3"),d=s.getData("SCALE_NON_UNIFORM",u,"FLOAT","VEC3"),f=s.getData("SCALE",u,"FLOAT","SCALAR"),p=new Map,y=[];i.traverse(m=>{let E;if(E=m?m.getComponent(he):null,E){const{geometry:w,material:L}=E,T=new rI(w,L,u);T.localPosition=T.localPosition.copy(m.localPosition),T.localRotation=T.localRotation.copy(m.localRotation),T.localScale=T.localScale.copy(m.localScale),y.push(T),p.set(m,T)}});const _=new I;for(let m=0;m<u;m++)_.x+=l[m*3+0]/u,_.y+=l[m*3+1]/u,_.z+=l[m*3+2]/u;p.forEach((m,E)=>{const w=E.parent?E.parentObject:null;w&&(w.removeChild(E),w.addChild(m),m.transform.updateWorldMatrix(),m.transform.worldMatrix.transformVector4(_,m.localPosition))});const g=se;for(let m=0;m<u;m++){g.tempMat.identity(),g.tempPos.set(l[m*3+0]-_.x,l[m*3+1]-_.y,l[m*3+2]-_.z),c?(g.tempUp.set(c[m*3+0],c[m*3+1],c[m*3+2]),g.tempRight.set(h[m*3+0],h[m*3+1],h[m*3+2]),g.tempRight.crossProduct(g.tempUp,g.tempFwd).normalize(),g.tempMat.makeBasis(g.tempRight,g.tempUp,g.tempFwd),g.tempQuat.setFromRotationMatrix(g.tempMat)):g.tempQuat.set(0,0,0,1),f?g.tempSca.setScalar(f[m]):d?g.tempSca.set(d[m*3+0],d[m*3+1],d[m*3+2]):g.tempSca.set(1,1,1),g.tempMat.compose(g.tempPos,g.tempQuat,g.tempSca),g.tempMat.multiplyMatrices(g.tempMat,o);for(let E=0,w=y.length;E<w;E++)y[E].setMatrixAt(m,g.tempMat)}return i.batchTable=n,i.featureTable=s,i}};a(se,"tempFwd"),a(se,"tempUp"),a(se,"tempRight"),a(se,"tempPos"),a(se,"tempQuat"),a(se,"tempSca"),a(se,"tempMat");let af=se;class hy extends Qt{async parseBuffer(A){let e=new af;e.adjustmentTransform=this.userData,this.data=await e.parse(A)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}a(hy,"format",nt.BIN);class dy extends p0{constructor(){super();a(this,"_faceData");a(this,"_url");this.useMipmap=!0,this.format=MA.rgba16float,this._faceData=new sy(this)}get ldrImageUrl(){return this._url}async load(e,t){this._url=e;let i=new Hn(!1);return await i.load(e,t),this.createFromLDRTexture(i),this}createFromLDRTexture(e){let t=Math.log2(e.width/4);return t=Math.pow(2,Math.round(t)),this.createFromTexture(t,e),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;i>16;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=iA.device.createSampler(this),this._faceData.uploadErpTexture(t),this}}let iI=`
var<private>PI: f32 = 3.141592653589793;

// fn saturate( x : f32 ) -> f32 {
//     return clamp(x, 0.0, 1.0);
// }

fn hammersley(i : u32, N : u32) -> vec2<f32>
{
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) / f32(N), rdi);
}

fn G_Smith(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var k = (roughness * roughness) / 2.0;
    var GGXL = NoL / (NoL * (1.0 - k) + k);
    var GGXV = NoV / (NoV * (1.0 - k) + k);
    return GGXL * GGXV;
}

fn V_SmithGGXCorrelated(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var a2 = pow(roughness, 4.0);
    var GGXV = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
    var GGXL = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
    return 0.5 / (GGXV + GGXL);
}


// Based on Karis 2014
fn importanceSampleGGX(Xi: vec2<f32>, roughness: f32, N: vec3<f32>) -> vec3<f32>
{
    var a = roughness * roughness;
    // Sample in spherical coordinates
    var Phi = 2.0 * PI * Xi.x;
    var CosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a * a - 1.0) * Xi.y));
    var SinTheta = sqrt(1.0 - CosTheta * CosTheta);
    // Construct tangent space vector
    var H: vec3<f32>;
    H.x = SinTheta * cos(Phi);
    H.y = SinTheta * sin(Phi);
    H.z = CosTheta;

    // Tangent to world space
    var UpVector = vec3<f32>(1.0, 0.0, 0.0);
    if (abs(N.z) < 0.999) {
        UpVector = vec3<f32>(0.0, 0.0, 1.0);
    }
    var TangentX = normalize(cross(UpVector, N));
    var TangentY = cross(N, TangentX);
    return TangentX * H.x + TangentY * H.y + N * H.z;
}


// Karis 2014
fn integrateBRDF(roughness: f32, NoV: f32) -> vec2<f32>
{
    var V: vec3<f32>;
    V.x = sqrt(1.0 - NoV * NoV); // sin
    V.y = 0.0;
    V.z = NoV; // cos

    // N points straight upwards for this integration
    var N = vec3<f32>(0.0, 0.0, 1.0);

    var A = 0.0;
    var B = 0.0;
    var numSamples = 1024u;

    for (var i = 0u; i < numSamples; i += 1u) {
        var Xi = hammersley(i, numSamples);
        // Sample microfacet direction
        var H = importanceSampleGGX(Xi, roughness, N);

        // Get the light direction
        var L = 2.0 * dot(V, H) * H - V;

        var NoL = saturate(dot(N, L));
        var NoH = saturate(dot(N, H));
        var VoH = saturate(dot(V, H));

        if (NoL > 0.0) {
            var V_pdf = V_SmithGGXCorrelated(NoV, NoL, roughness) * VoH * NoL / NoH;
            var Fc = pow(1.0 - VoH, 5.0);
            A += (1.0 - Fc) * V_pdf;
            B += Fc * V_pdf;
        }
    }

    return 4.0 * vec2<f32>(A, B) / f32(numSamples);
}

@group(0) @binding(0) var brdflutTexture: texture_storage_2d<rgba8unorm, write>;
@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(0.0);
    // Output to screen
    var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    textureStore(brdflutTexture, vec2<i32>(fragCoord.xy), fragColor);
}
`;class nI{constructor(){a(this,"compute");this.compute=new Ii(iI)}generateBRDFLUTTexture(){let A=new tn(256,256,MA.rgba8unorm,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING);this.compute.setStorageTexture("brdflutTexture",A),this.compute.workerSizeX=256/8,this.compute.workerSizeY=256/8;let e=sA.beginCommandEncoder();return sA.computeCommand(e,[this.compute]),sA.endCommandEncoder(e),A}}class sI extends Tt{constructor(){super(...arguments);a(this,"_dataBuffer")}create(e,t,i,n=!1){let s=iA.device;const o=Math.ceil(e*4/256)*256;this.format=MA.rgba8unorm,this.mipmapCount=Math.floor(n?Math.log2(e):1),this.createTextureDescriptor(e,t,this.mipmapCount,this.format);const u=this._dataBuffer=s.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});s.queue.writeBuffer(u,0,i);const l=sA.beginCommandEncoder();return l.copyBufferToTexture({buffer:u,bytesPerRow:o},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),sA.endCommandEncoder(l),n&&Us.webGPUGenerateMipmap(this),this}updateTexture(e,t,i){let n=iA.device;const s=Math.ceil(e*4/256)*256;this.mipmapCount=Math.floor(Math.log2(e)),this._dataBuffer&&this._dataBuffer.destroy(),this._dataBuffer=null;const o=this._dataBuffer=n.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});n.queue.writeBuffer(o,0,i);const u=sA.beginCommandEncoder();u.copyBufferToTexture({buffer:o,bytesPerRow:s},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),sA.endCommandEncoder(u),this.gpuSampler=n.createSampler(this),this.mipmapCount>1&&Us.webGPUGenerateMipmap(this)}}class ac{constructor(A){a(this,"id");a(this,"guiTexture");a(this,"uvRec",new XA(0,0,1,1));a(this,"uvBorder",new XA(0,0,0,0));a(this,"offsetSize",new XA(0,0,4,4));a(this,"borderSize",new XA(0,0,0,0));a(this,"trimSize",new Ge);a(this,"isSliced",!1);a(this,"height",4);a(this,"width",4);a(this,"xadvance",0);a(this,"xoffset",0);a(this,"yoffset",0);this.guiTexture=A||K.res.defaultGUITexture}}const Xa=class Xa{constructor(A){a(this,"_staticId",-1);a(this,"dynamicId",-1);a(this,"texture");a(this,"width",1);a(this,"height",1);A||(A=K.res.whiteTexture),this.texture=A,Xa._maxUid++,this._staticId=Xa._maxUid,this.init()}get staticId(){return this._staticId}init(){this.dynamicId=-1,this.width=this.texture.width,this.height=this.texture.height}};a(Xa,"_maxUid",-1);let lu=Xa;class oI{constructor(){a(this,"fntCache",{});a(this,"fntData",{})}addFontData(A,e,t){this.fntData[`${A}${e}`]=t}getFontData(A,e){return this.fntData[`${A}${e}`]}addFnt(A,e,t,i){let n=`${A}${e}`;this.fntCache[n]||(this.fntCache[n]={}),this.fntCache[n][t]=i}getFnt(A,e,t){let i=`${A}${e}`,n=this.fntCache[i];return n?n[t]:this.fntCache[" "]}}let uf=new oI;class aI{constructor(){a(this,"face","");a(this,"size",0);a(this,"bold",!1);a(this,"italic",!1);a(this,"stretchH",0);a(this,"spacing","");a(this,"outline",0);a(this,"lineHeight",0);a(this,"base",0);a(this,"scaleW",0);a(this,"scaleH",0);a(this,"pages",0);a(this,"packed",0);a(this,"alphaChnl",0);a(this,"redChnl",0);a(this,"greenChnl",0);a(this,"blueChnl",0);a(this,"count",0);a(this,"fontPage",[]);a(this,"fontChar",{})}}class uI{constructor(){a(this,"id",0);a(this,"file","")}}class lI{constructor(){a(this,"id",-1);a(this,"x",0);a(this,"y",0);a(this,"width",0);a(this,"height",0);a(this,"xoffset",0);a(this,"yoffset",0);a(this,"xadvance",0);a(this,"page",0);a(this,"chnl",0)}}const Ui=class Ui extends Qt{static parseSprite(A,e){for(const t in e.fontChar)if(Object.prototype.hasOwnProperty.call(e.fontChar,t)){const i=e.fontChar[t];let n=new ac;n.id=i.id.toString(),n.offsetSize.set(0,0,i.width,i.height),n.trimSize.set(i.width,i.height),n.width=i.width,n.height=i.height,n.xadvance=i.xadvance,n.xoffset=i.xoffset,n.yoffset=i.yoffset,n.guiTexture=A[i.page],n.uvRec.set(i.x/e.scaleW,(e.scaleH-(i.y+i.height))/e.scaleH,i.width/e.scaleW,i.height/e.scaleH),uf.addFnt(e.face,e.size,n.id,n)}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}async parseString(A){let e=this.getNewLine(A),t=A,i=new aI;t.trim().split(e).forEach((n,s)=>{if(s<2)Ui.readLineProperty(n,i);else if(s<i.pages+2){let o=new uI;Ui.readLineProperty(n,o),i.fontPage.push(o)}else if(s<i.pages+3)Ui.readLineProperty(n,i);else if(i.count>0){let o=new lI;Ui.readLineProperty(n,o),i.fontChar[o.id]=o,i.count--}}),t="",this.data=i,await this.loadFontTextures()}getNewLine(A){return A.indexOf(`\r
`)!=-1?`\r
`:A.indexOf("\r")!=-1?"\r":`
`}async loadFontTextures(){let A=[],e=this.data;for(const t of e.fontPage){let i=this.baseUrl+t.file;await K.res.loadTexture(i,null,!0);let n=K.res.getTexture(i),s=new lu(n);A.push(s)}Ui.parseSprite(A,e),e.fontChar[" "]||Ui.insertSpaceChar(e,A[0])}static insertSpaceChar(A,e){let t=new ac,i=A.size*.5,n=A.lineHeight*.5;t.id=" ",t.offsetSize.set(0,0,A.size,A.size),t.trimSize.set(i,n),t.width=i,t.height=n,t.xadvance=0,t.xoffset=0,t.yoffset=0,t.guiTexture=e,t.uvRec.set(0,0,1e-6,1e-6),uf.addFnt(A.face,A.size,t.id,t)}static readLineProperty(A,e){A.trim().split(" ").forEach((t,i)=>{let n=t.split("=");if(n.length>1){let s=n[0],o=n[1];Object.prototype.hasOwnProperty.call(e,s)&&(o.indexOf('"')==-1?e[s]=parseFloat(n[1]):e[s]=o.replace('"',"").replace('"',""))}})}};a(Ui,"format",nt.TEXT);let lf=Ui;function cI(r,A,e){let t=new ac;t.guiTexture=r,t.id=A,t.uvRec.copyFrom(e.textureRect),t.trimSize.x=e.textureRect.z,t.trimSize.y=e.textureRect.w,t.offsetSize.x=e.textureRectOffset.x,t.offsetSize.y=e.textureRectOffset.y,t.offsetSize.z=e.size.x,t.offsetSize.w=e.size.y,t.width=e.size.x,t.height=e.size.y;let i=1/r.width,n=1/r.height;t.uvRec.set(t.uvRec.x*i,t.uvRec.y*n,t.uvRec.z*i,t.uvRec.w*n);let s=.1;return e.border.x<=s&&e.border.y<=s&&e.border.z<=s&&e.border.x<=s?t.isSliced=!1:(t.borderSize.copyFrom(e.border),t.uvBorder.copyFrom(e.border),t.uvBorder.x-=e.textureRectOffset.x,t.uvBorder.y-=e.textureRectOffset.y,t.uvBorder.z=e.border.z-(e.size.x-e.textureRect.z-e.textureRectOffset.x),t.uvBorder.w=e.border.w-(e.size.y-e.textureRect.w-e.textureRectOffset.y),t.uvBorder.x/=e.textureRect.z,t.uvBorder.z/=e.textureRect.z,t.uvBorder.y/=e.textureRect.w,t.uvBorder.w/=e.textureRect.w,t.isSliced=!0),t}class hI{constructor(A){a(this,"_spriteMap",new Map);a(this,"_spriteList",[]);a(this,"textureSize",new Ge);a(this,"name");this.textureSize.set(A.x,A.y)}setTexture(A,e,t){let i=cI(A,e,t);return this._spriteMap.set(i.id,i),this._spriteList.push(i),i}getSprite(A){return this._spriteMap.get(A)}get spriteList(){return this._spriteList}}class fy extends Qt{constructor(){super(...arguments);a(this,"_json");a(this,"_texture")}async parseString(e){this._json=JSON.parse(e);let t=this.userData.replace(".json",".png");this._texture=await K.res.loadTexture(t,null,!0),this.data={json:this._json,texture:this._texture},this.parseAtlas()}verification(){if(this.data)return!0;throw new Error("verify failed.")}parseAtlas(){let e=new hI(this._json.size),t=new lu(this._texture),i=this._json.atlas;for(const n in i)e.setTexture(t,n,i[n]);K.res.addAtlas(this.baseUrl,e),this.data=e}}a(fy,"format",nt.TEXT);class dI{constructor(){a(this,"_texturePool");a(this,"_materialPool");a(this,"_prefabPool");a(this,"_gltfPool");a(this,"_geometryPool");a(this,"_atlasList");a(this,"_obj");a(this,"normalTexture");a(this,"maskTexture");a(this,"whiteTexture");a(this,"blackTexture");a(this,"redTexture");a(this,"blueTexture");a(this,"greenTexture");a(this,"yellowTexture");a(this,"grayTexture");a(this,"defaultSky");a(this,"defaultGUITexture");a(this,"defaultGUISprite");a(this,"defaultMaterial");this._texturePool=new Map,this._materialPool=new Map,this._prefabPool=new Map,this._geometryPool=new Map,this._gltfPool=new Map,this._atlasList=new Map,this._obj=new Map}getGltf(A){return this._gltfPool.get(A)}addObj(A,e){this._obj.set(A,e)}getObj(A){return this._obj.get(A)}addTexture(A,e){this._texturePool.set(A,e)}getTexture(A){return this._texturePool.get(A)}addGeometry(A,e){this._geometryPool.set(A,e)}getGeometry(A){return this._geometryPool.get(A)}addMat(A,e){return this._materialPool.set(A,e)}getMat(A){return this._materialPool.get(A)}addPrefab(A,e){this._prefabPool.set(A,e)}getPrefab(A){return this._prefabPool.get(A).instantiate()}addAtlas(A,e){e.name=A,this._atlasList.set(A,e)}getAtlas(A){return this._atlasList.get(A)}getGUISprite(A){for(let e of this._atlasList.values()){let t=e.getSprite(A);if(t)return t}return null}async load(A,e,t){return(await new Yt().load(A,e,t)).data}async loadGltf(A,e){if(this._prefabPool.has(A))return this._prefabPool.get(A);let t,i=A.substring(A.lastIndexOf(".")).toLowerCase(),n=new Yt;i==".gltf"?t=await n.load(A,Nt,e):t=await n.load(A,f0,e);let s=t.data;return this._prefabPool.set(A,s),this._gltfPool.set(A,t.gltf),s}async loadObj(A,e){if(this._prefabPool.has(A))return this._prefabPool.get(A);let t,i=A.substring(A.lastIndexOf(".")).toLowerCase(),n=new Yt;i==".obj"&&(t=await n.load(A,ey,e));let s=t.data;return this._prefabPool.set(A,s),s}async loadB3DM(A,e,t){if(this._prefabPool.has(A))return this._prefabPool.get(A);let i=(await new Yt().load(A,uy,e,t)).data;return this._prefabPool.set(A,i),i}async loadI3DM(A,e,t){if(this._prefabPool.has(A))return this._prefabPool.get(A);let i=(await new Yt().load(A,hy,e,t)).data;return this._prefabPool.set(A,i),i}async loadTexture(A,e,t){if(this._texturePool.has(A))return this._texturePool.get(A);let i=new Hn;return i.flipY=t,await i.load(A,e),this._texturePool.set(A,i),i}async loadTextureCount(A,e,t,i){return new Promise(async(n,s)=>{let o=0,u=[];e==0&&n(u);for(let l=0;l<e;l++){const c=A.shift();this.loadTexture(c,t,i).then(h=>{u.push(h),o++,o==e&&n(u)})}})}async loadBitmapTextures(A,e=5,t,i){let n=[],s=Math.floor(A.length/e)+1,o=Math.floor(A.length%e);for(let u=0;u<s;u++){let l=await this.loadTextureCount(A,u==s-1?o:e,t,i);n.push(...l)}return n}async loadHDRTexture(A,e){if(this._texturePool.has(A))return this._texturePool.get(A);let t=new ry;return t=await t.load(A,e),this._texturePool.set(A,t),t}async loadHDRTextureCube(A,e){if(this._texturePool.has(A))return this._texturePool.get(A);let t=new sf;return t=await t.load(A,e),this._texturePool.set(A,t),t}async loadLDRTextureCube(A,e){if(this._texturePool.has(A))return this._texturePool.get(A);let t=new dy;return t=await t.load(A,e),this._texturePool.set(A,t),t}async loadTextureCubeMaps(A){let e=A[0];if(this._texturePool.has(e))return this._texturePool.get(e);let t=new Tg;return await t.load(A),this._texturePool.set(A[0],t),t}async loadTextureCubeStd(A,e){if(this._texturePool.has(A))return this._texturePool.get(A);let t=new Tg;return await t.loadStd(A),t}async loadJSON(A,e){return await new Yt().loadJson(A,e).then(async t=>t).catch(t=>{console.log(t)})}async loadFont(A,e,t){let i=await new Yt().load(A,lf,e,t),n=i.data;return uf.addFontData(n.face,n.size,n),i.data}async loadAtlas(A,e){return(await new Yt().load(A,fy,e,A)).data}createTexture(A,e,t,i,n,s,o){let u=32,l=32,c=new Uint8Array(u*l*4);this.fillColor(c,A,e,t,i,n,s);let h=new sI;return h.name=o,h.create(16,16,c,!0),o&&this.addTexture(o,h),h}fillColor(A,e,t,i,n,s,o){for(let u=0;u<e;u++)for(let l=0;l<t;l++){let c=l*e+u;A[c*4+0]=i,A[c*4+1]=n,A[c*4+2]=s,A[c*4+3]=o}}initDefault(){this.normalTexture=this.createTexture(32,32,255*.5,255*.5,255,255,"default-normalTexture"),this.maskTexture=this.createTexture(32,32,255,255*.5,255,255,"default-maskTexture"),this.whiteTexture=this.createTexture(32,32,255,255,255,255,"default-whiteTexture"),this.blackTexture=this.createTexture(32,32,0,0,0,255,"default-blackTexture"),this.redTexture=this.createTexture(32,32,255,0,0,255,"default-redTexture"),this.blueTexture=this.createTexture(32,32,0,0,255,255,"default-blueTexture"),this.greenTexture=this.createTexture(32,32,0,255,0,255,"default-greenTexture"),this.yellowTexture=this.createTexture(32,32,0,255,255,255,"default-yellowTexture"),this.grayTexture=this.createTexture(32,32,128,128,128,255,"default-grayTexture");let A=new nI().generateBRDFLUTTexture(),e=A.name="BRDFLUT";this.addTexture(e,A),this.defaultSky=new sf,this.defaultSky.createFromTexture(128,this.blackTexture),te.getInstance().attached(this.defaultSky,this),te.getInstance().attached(A,this),te.getInstance().attached(this.normalTexture,this),te.getInstance().attached(this.maskTexture,this),te.getInstance().attached(this.whiteTexture,this),te.getInstance().attached(this.blackTexture,this),te.getInstance().attached(this.redTexture,this),te.getInstance().attached(this.blueTexture,this),te.getInstance().attached(this.greenTexture,this),te.getInstance().attached(this.yellowTexture,this),te.getInstance().attached(this.grayTexture,this),this.defaultGUITexture=new lu(this.whiteTexture),this.defaultGUISprite=new ac(this.defaultGUITexture),this.defaultGUISprite.trimSize.set(4,4),this.defaultMaterial=new ks}}class go extends Jd{constructor(){super();let A=iA.presentationSize;CA.register("FXAA_Shader",vI);let e=this.createRTTexture("FXAAPost",A[0],A[1],MA.rgba16float),t=this.createViewQuad("fxaa","FXAA_Shader",e);t.quadShader.setUniform("u_texel",new Ge(1/A[0],1/A[1])),t.quadShader.setUniform("u_strength",4)}onAttach(A){K.setting.render.postProcessing.fxaa.enable=!0}onDetach(A){K.setting.render.postProcessing.fxaa.enable=!1}}class Og extends Jt{constructor(){super(...arguments);a(this,"_postList")}init(e){this._postList=new Map}start(){}stop(){}onEnable(){this.activePost()}onDisable(){this.unActivePost()}activePost(){let e=this.transform.view3D,t=K.getRenderJob(e);this._postList.forEach(i=>{t.addPost(i)})}unActivePost(){let e=this.transform.view3D,t=K.getRenderJob(e);this._postList.forEach(i=>{t.removePost(i)})}addPost(e){if(this._postList.has(e))return;if(!this._postList.has(go)){let i=new go;if(this._postList.set(go,i),this._enable&&this.activePost(),e===go)return i}let t=new e;return this._postList.set(e,t),this._enable&&this.activePost(),t}removePost(e){if(!this._postList.has(e))return;let t=this._postList.get(e);this._postList.delete(e);let i=this.transform.view3D;K.getRenderJob(i).removePost(t)}getPost(e){return this._postList.has(e)?this._postList.get(e):null}}var qe;let K=(qe=class{static get frameRate(){return this._frameRate}static set frameRate(A){this._frameRate=A,this._frameRateValue=1/A,A>=360&&(this._frameRateValue=0)}static get size(){return iA.presentationSize}static get aspect(){return iA.aspect}static get width(){return iA.windowWidth}static get height(){return iA.windowHeight}static async init(A={}){console.log("Engine Version",sw),this.setting={...this.setting,...A.engineSetting},await ce.init(NA.allocCount),await iA.init(A.canvasConfig),CA.init(),di.init(),Le.init(),Gt.init(),Ir.init(),this.res=new dI,this.res.initDefault(),this._beforeRender=A.beforeRender,this._renderLoop=A.renderLoop,this._lateRender=A.lateRender,this.inputSystem=new nw,this.inputSystem.initCanvas(iA.canvas)}static startRenderView(A){this.renderJobs||(this.renderJobs=new Map),this.views=[A];let e=new wg(A);return this.renderJobs.set(A,e),iA.presentationSize,this.setting.pick.mode=="pixel"&&A.scene.getOrAddComponent(Og).addPost(go),(this.setting.pick.mode=="pixel"||this.setting.pick.mode=="bound")&&(A.enablePick=!0),this.resume(),e}static startRenderViews(A){this.renderJobs||(this.renderJobs=new Map),this.views=A;for(let e=0;e<A.length;e++){const t=A[e];let i=new wg(t);this.renderJobs.set(t,i);let n=iA.presentationSize;this.setting.pick.mode=="pixel"?t.scene.addComponent(Og).addPost(go):Gt.createRTTexture(Ye.colorBufferTex_NAME,n[0],n[1],MA.rgba16float,!1),(this.setting.pick.mode=="pixel"||this.setting.pick.mode=="bound")&&(t.enablePick=!0)}this.resume()}static getRenderJob(A){return this.renderJobs.get(A)}static pause(){this._requestAnimationFrameID!=0&&(cancelAnimationFrame(this._requestAnimationFrameID),this._requestAnimationFrameID=0)}static resume(){this._requestAnimationFrameID=requestAnimationFrame(A=>this.render(A))}static render(A){this._deltaTime=A-this._time,this._time=A,this._frameRateValue>0?(this._frameTimeCount+=this._deltaTime*.001,this._frameTimeCount>=this._frameRateValue*.95&&(this._frameTimeCount=0,this.updateFrame(A))):this.updateFrame(A),this.resume()}static updateFrame(A){be.delta=A-be.time,be.time=A,be.frame+=1,Zd.tick(be.delta);let e=this.views,t=0;for(t=0;t<e.length;t++){const n=e[t];n.scene.waitUpdate(),n.camera.resetPerspective(iA.aspect)}this._beforeRender&&this._beforeRender();for(const n of Ee.componentsBeforeUpdateList){let s=n[0],o=n[1];for(const u of o){let l=u[0],c=u[1];l.enable&&c(s)}}let i=iA.device.createCommandEncoder();for(const n of Ee.componentsComputeList){let s=n[0],o=n[1];for(const u of o){let l=u[0],c=u[1];l.enable&&c(s,i)}}iA.device.queue.submit([i.finish()]);for(const n of Ee.componentsUpdateList){let s=n[0],o=n[1];for(const u of o){let l=u[0],c=u[1];l.enable&&c(s)}}for(const n of Ee.graphicComponent){let s=n[0],o=n[1];for(const u of o){let l=u[0],c=u[1];s&&l.enable&&c(s)}}this._renderLoop&&this._renderLoop(),ce.updateAllContinueTransform(0,NA.useCount,16),Le.modelMatrixBindGroup.writeBuffer(NA.useCount*16),this.renderJobs.forEach((n,s)=>{n.renderState||n.start(),n.renderFrame()});for(const n of Ee.componentsLateUpdateList){let s=n[0],o=n[1];for(const u of o){let l=u[0],c=u[1];l.enable&&c(s)}}this._lateRender&&this._lateRender()}},a(qe,"res"),a(qe,"inputSystem"),a(qe,"views"),a(qe,"_frameRateValue",0),a(qe,"_frameRate",360),a(qe,"_frameTimeCount",0),a(qe,"_deltaTime",0),a(qe,"_time",0),a(qe,"_beforeRender"),a(qe,"_renderLoop"),a(qe,"_lateRender"),a(qe,"_requestAnimationFrameID",0),a(qe,"Engine3D"),a(qe,"divB"),a(qe,"setting",{occlusionQuery:{enable:!0,debug:!1},pick:{enable:!0,mode:"bound",detail:"mesh"},render:{debug:!1,renderPassState:4,renderState_left:5,renderState_right:5,renderState_split:.5,quadScale:1,hdrExposure:1.5,debugQuad:-1,maxPointLight:1e3,maxDirectLight:4,maxSportLight:1e3,drawOpMin:0,drawOpMax:Number.MAX_SAFE_INTEGER,drawTrMin:0,drawTrMax:Number.MAX_SAFE_INTEGER,zPrePass:!1,useLogDepth:!1,gi:!1,postProcessing:{bloom:{downSampleStep:5,downSampleBlurSize:5,downSampleBlurSigma:1,upSampleBlurSize:5,upSampleBlurSigma:1,luminanceThreshole:1,bloomIntensity:1},globalFog:{debug:!1,enable:!1,fogType:0,fogHeightScale:.1,start:400,end:10,density:.02,ins:.5,skyFactor:.5,skyRoughness:.4,overrideSkyFactor:.8,fogColor:new fA(96/255,117/255,133/255,1),falloff:.7,rayLength:200,scatteringExponent:2.7,dirHeightLine:10},godRay:{blendColor:!0,rayMarchCount:16,scatteringExponent:5,intensity:.5},ssao:{enable:!1,radius:.15,bias:-.1,aoPower:2,debug:!0},outline:{enable:!1,strength:1,groupCount:4,outlinePixel:2,fadeOutlinePixel:4,textureScale:.7,useAddMode:!1,debug:!0},taa:{enable:!1,jitterSeedCount:8,blendFactor:.1,sharpFactor:.6,sharpPreBlurFactor:.5,temporalJitterScale:.13,debug:!0},gtao:{enable:!1,darkFactor:1,maxDistance:5,maxPixel:50,rayMarchSegment:6,multiBounce:!1,usePosFloat32:!0,blendColor:!0,debug:!0},ssr:{enable:!1,pixelRatio:1,fadeEdgeRatio:.2,rayMarchRatio:.5,fadeDistanceMin:600,fadeDistanceMax:2e3,roughnessThreshold:.5,powDotRN:.2,mixThreshold:.1,debug:!0},fxaa:{enable:!1},depthOfView:{enable:!1,iterationCount:3,pixelOffset:1,near:150,far:300}}},shadow:{enable:!0,type:"HARD",pointShadowBias:.002,shadowSize:1024,pointShadowSize:1024,shadowSoft:.005,shadowBias:1e-4,needUpdate:!0,autoUpdate:!0,updateFrameRate:2,csmMargin:.1,csmScatteringExp:.7,csmAreaScale:.4,debug:!1},gi:{enable:!1,offsetX:0,offsetY:0,offsetZ:0,probeSpace:64,probeXCount:4,probeYCount:2,probeZCount:4,probeSize:32,probeSourceTextureSize:2048,octRTMaxSize:2048,octRTSideSize:16,maxDistance:64*1.73,normalBias:.25,depthSharpness:1,hysteresis:.98,lerpHysteresis:.01,irradianceChebyshevBias:.01,rayNumber:144,irradianceDistanceBias:32,indirectIntensity:1,ddgiGamma:2.2,bounceIntensity:.025,probeRoughness:1,realTimeGI:!1,debug:!1,autoRenderProbe:!1},sky:{type:"HDRSKY",sky:null,skyExposure:1,defaultFar:65536,defaultNear:1},light:{maxLight:4096},material:{materialChannelDebug:!1,materialDebug:!1},loader:{numConcurrent:20}}),a(qe,"renderJobs"),qe),fI=`

    #include "GlobalUniform"

    struct PickResult{
        pick_meshID:f32,
        pick_meshID2:f32,
        pick_UV:vec2<f32>,
        pick_Position:vec4<f32>,
        pick_Normal:vec4<f32>,
        pick_Tangent:vec4<f32>,
    }

    //@group(0) @binding(0) var<uniform> globalUniform: GlobalUniform;
    @group(0) @binding(1) var<storage,read_write> outBuffer: PickResult;
    @group(0) @binding(2) var visibleMap : texture_2d<f32>;

    @compute @workgroup_size( 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
    var result:PickResult ;
    // result.pick_meshID
    let texSize = textureDimensions(visibleMap).xy;
    let screenPoint = vec2<f32>(globalUniform.mouseX/globalUniform.windowWidth,globalUniform.mouseY/globalUniform.windowHeight);

    let mouseUV = screenPoint * vec2<f32>(texSize.xy); 
    let info = textureLoad(visibleMap, vec2<i32>(mouseUV) , 0);

    outBuffer.pick_meshID = f32(info.w) ;
    outBuffer.pick_meshID2 = f32(info.w) ;
    outBuffer.pick_Tangent = vec4<f32>(2.0,2.0,2.0,2.0) ;
    outBuffer.pick_UV = vec2<f32>(globalUniform.mouseX,globalUniform.mouseY) ;
    outBuffer.pick_Position = vec4<f32>(info.xyzw) ;
    outBuffer.pick_Normal = vec4<f32>(info.xyzw) ;
    }
`,pI=`
var<private>PI: f32 = 3.141592653589793;

fn Scatter( r:f32) -> vec3f
{
    return Gaussian(0.0064 * 1.414, r) * vec3f(0.233, 0.455, 0.649)
           + Gaussian(0.0484 * 1.414, r) * vec3f(0.100, 0.336, 0.344)
           + Gaussian(0.1870 * 1.414, r) * vec3f(0.118, 0.198, 0.000)
           + Gaussian(0.5670 * 1.414, r) * vec3f(0.113, 0.007, 0.007)
           + Gaussian(1.9900 * 1.414, r) * vec3f(0.358, 0.004, 0.00001)
           + Gaussian(7.4100 * 1.414, r) * vec3f(0.078, 0.00001, 0.00001);
}

fn Gaussian( v:f32 , r:f32 ) -> f32
{
    return 1.0 / sqrt(2.0 * PI * v) * exp(-(r * r) / (2.0 * v));
}

fn Integrate( cosTheta : f32 ,  skinRadius: f32 ) -> vec3f
{
    var theta = acos(cosTheta);  // theta -> the angle from lighting direction
    var totalWeights = vec3f(0.0);
    var totalLight = vec3f(0.0);

    var a = -(PI / 2.0);
    let inc = 0.05;

    while ( a <= (PI / 2.0) ) {
        var sampleAngle = theta + a;
        var diffuse = clamp(cos(sampleAngle),0.0,1.0);

        // calc distance
        var sampleDist = abs(2.0 * skinRadius * sin(a * 0.5));

        // estimated by Gaussian pdf
        var weights = Scatter(sampleDist);

        totalWeights += weights;
        totalLight += diffuse * weights;
        a += inc;
    }

    var result = vec3f(totalLight.x / totalWeights.x, totalLight.y / totalWeights.y, totalLight.z / totalWeights.z);
    return result;
}

@group(0) @binding(0) var sssMap: texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(1.0,1.0,0.0,1.0);
    // // Output to screen
    // var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    // fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    var NDotL = mix(-1.0, 1.0, f32(fragCoord.x) / 256.0) ; 
    var oneOverR = 2.0 * 1.0 / (f32((fragCoord.y + 1u)) / 256.0);  

    //Integrate Diffuse Scattering
    var diff = Integrate(NDotL, oneOverR);
    // fragColor = vec4f(diff,1.0);
    fragColor = vec4f(vec3f(diff),1.0);
    textureStore(sssMap, vec2<i32>(fragCoord.xy), fragColor);
}
`,gI=`
    #include "WorldMatrixUniform"
    struct VertexAttributes{
        @builtin(instance_index) index : u32,

        @location(auto) position: vec3<f32>,
        @location(auto) normal: vec3<f32>,
        @location(auto) uv: vec2<f32>,
        @location(auto) TEXCOORD_1: vec2<f32>,
        @location(auto) vIndex: f32,
        @location(auto) index2: f32,
        
    }

    struct VertexOutput {
        @location(auto) index: f32,
        @location(auto) varying_UV0: vec2<f32>,
        @location(auto) varying_UV1: vec2<f32>,
        @location(auto) varying_ViewPos: vec4<f32>,
        @location(auto) varying_Clip: vec4<f32>,
        @location(auto) varying_WPos: vec4<f32>,
        @location(auto) varying_WNormal: vec3<f32>,
        @location(auto) varying_Color: vec4<f32>,
        #if USE_SHADOWMAPING
            @location(auto) varying_ShadowPos: vec4<f32>,
        #endif
        @builtin(position) member: vec4<f32>
    };

    struct TransformVertex{
        position:vec3<f32>,
        normal:vec3<f32>,
    }

    struct GraphicNodeStruct{
        matrixIndex:f32,
        texIndex:f32,
        tex2Index:f32,
        tex3Index:f32,

        fillRotation:f32,
        empty0:f32,
        empty1:f32,
        empty2:f32,

        baseColor:vec4f,
        lineColor:vec4f,
        emissiveColor:vec4f,
        uvRect:vec4f,
        uvRect2:vec4f,
        uvSpeed:vec4f,
    }

    var<private> ORI_VertexOut: VertexOutput ;
    var<private> worldMatrix: mat4x4<f32> ;
    var<private> graphicNode: GraphicNodeStruct ;

    fn ORI_Vert(vertex:VertexAttributes){
        var vertexPosition = vertex.position;
        var vertexNormal = vertex.normal;

        ORI_VertexOut.index = f32(vertex.vIndex) ;
        graphicNode = graphicBuffer[u32(round(vertex.vIndex))];
        let node_Matrix_M = models.matrix[u32(round(graphicNode.matrixIndex))];

        #if USE_TANGENT
            ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
        #endif

        ORI_MATRIX_M = node_Matrix_M * ORI_MATRIX_M ;

        #if USE_BILLBOARD
            let billboardMatrix: mat3x3<f32> = calculateBillboardMatrix2(globalUniform.CameraPos.xyz,ORI_MATRIX_M[3].xyz,globalUniform.cameraWorldMatrix[1].xyz);
            vertexPosition = billboardMatrix * vertexPosition.xyz;
        #endif

        worldMatrix = ORI_MATRIX_M ;

        let nMat = mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ;
        ORI_NORMALMATRIX = transpose(inverse( nMat ));

        var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));

        #if TRANSFORMVERTEX
            var transformVertex = transformVertex(worldPos.xyz,vertexNormal,vertex);
            worldPos = vec4<f32>(transformVertex.position ,worldPos.w);
            vertexNormal = transformVertex.normal ;
        #endif

        var viewPosition = ORI_MATRIX_V * worldPos;
        var clipPosition = ORI_MATRIX_P * viewPosition ;

        ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
        ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
        ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
        ORI_VertexOut.varying_Clip = clipPosition;
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_WNormal = normalize( vertexNormal.xyz);
        ORI_VertexOut.member = clipPosition ;
    }
`,mI=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexAttributes {
        @location(auto) position: vec4<f32>,
        @location(auto) color: vec4<f32>,
    }

    struct VertexOutput {
        @location(auto) varying_WPos: vec4<f32>,
        @location(auto) varying_Color: vec4<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        var worldMatrix = models.matrix[u32(vertex.position.w)];
        var worldPos = (worldMatrix * vec4<f32>(vertex.position.xyz, 1.0));
        var viewPosition = ((globalUniform.viewMat) * worldPos);
        var clipPosition = globalUniform.projMat * viewPosition;

        var ORI_VertexOut: VertexOutput; 
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_Color = vertex.color;
        ORI_VertexOut.member = clipPosition;
        return ORI_VertexOut;
    }

    struct FragmentOutput {
        @location(auto) color: vec4<f32>,
        // #if USE_WORLDPOS
            @location(auto) worldPos: vec4<f32>,
        // #endif
        // #if USEGBUFFER
            @location(auto) worldNormal: vec4<f32>,
            @location(auto) material: vec4<f32>,
        // #endif
        @builtin(frag_depth) out_depth: f32
    };

    @fragment
    fn FragMain(  
        @location(auto) vWorldPos: vec4<f32>,
        @location(auto) varying_Color: vec4<f32>,
    ) -> FragmentOutput {
        var result: FragmentOutput;

        // #if USE_WORLDPOS
            result.worldPos = vWorldPos;
        // #endif

        // #if USEGBUFFER
            // result.worldNormal = vec4<f32>(0.0, 0.0, 0.0, 1.0); 
            result.material = vec4<f32>(0.0, 1.0, 0.0, 0.0);
        // #endif

        result.color = varying_Color;

        // let n = globalUniform.near ;
        // let f = globalUniform.far ;
        // let z = ORI_VertexVarying.fragCoord.z ;
        // let pt = pow((f / n),z);
        // let ratio = n * pt / (f / n);
        // result.out_depth =  ratio ;
        return result;
    }
`,yI=r=>`
    #include "GlobalUniform"
    struct VertexInfo{
        position:vec3f,
        // px:f32,
        // py:f32,
        // pz:f32,
        nx:f32,
        ny:f32,
        nz:f32,
        uv_x:f32,
        uv_y:f32,
        uv2_x:f32,
        uv2_y:f32,
        index:f32,
        index2:f32
    }

    struct TrailInfo{
        index : f32 ,
        segment : f32 ,
        visible : f32 ,
        width: f32,

        uv: vec4f,

        uvSpeed: vec2f,
        smoothLine: f32,
        faceMode: f32,
        up: vec4f,
        ids:array<f32,${r}>
    }

    @group(0) @binding(1) var<storage, read_write> vertexBuffer : array<VertexInfo>;
    @group(0) @binding(2) var<storage, read> trailBuffer : array<TrailInfo>;
    @group(0) @binding(3) var<storage, read> models : array<mat4x4<f32>>;

    var<private> time:f32;
    var<private> viewDir:vec3f;

    @compute @workgroup_size(256)
    fn CsMain(@builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) global_invocation_id : vec3<u32>){
        let rID = workgroup_id.x ;
        let trailInfo = trailBuffer[rID];
        let vLen = u32(trailInfo.segment+1.0) ;
        let vID = global_invocation_id.x ;

        // if(vID < vLen ){
            time = globalUniform.time * 0.001;
            var right:vec3f ;
            
            switch (u32(trailInfo.faceMode)) {
                case 0u:{
                    right = getRightByMode(vID,vLen,viewDir,trailInfo) ;
                    break;
                }
                case 1u:{
                    right = vec3f(0.0,0.0,1.0) ;
                    break;
                }
                case 2u:{
                    right = getRightByMode(vID,vLen,trailInfo.up.xyz,trailInfo) ;
                    break;
                }
                default:{
                    break;
                }
            }
            writeTOBuffer(rID,vID,vLen,right,trailInfo);
        // }
    }

 

    fn writeTOBuffer(rID:u32, vID:u32 , vLen:u32, right:vec3f , trailInfo:TrailInfo ){
        let i0 = (vID + (vLen * rID)) * 2u ;
        let li = i0 + 0u ;
        let ri = i0 + 1u ;

        let worldPos = models[i32(trailInfo.ids[vID])][3].xyz ;
        let leftPos = worldPos - right.xyz * trailInfo.width ;
        let rightPos = worldPos + right.xyz * trailInfo.width ;

        vertexBuffer[li].position = leftPos ;
        vertexBuffer[ri].position = rightPos ;

        let uvS = time * trailInfo.uvSpeed ;

        vertexBuffer[li].uv_x = (trailInfo.uv.x) + uvS.x ;
        vertexBuffer[ri].uv_x = (trailInfo.uv.z + trailInfo.uv.x) + uvS.x ;

        // var ld = 0.0 ;
        // var rd = 0.0 ;
        // if(vID>0u){
        //     let vid0 = getVID(vID,vLen,rID);
        //     let vid1 = getVID(vID-1u,vLen,rID);
        
        //     ld = distance( vertexBuffer[li].position , vertexBuffer[vid1.x].position ) ;
        //     rd = distance( vertexBuffer[ri].position , vertexBuffer[vid1.y].position ) ;

        //     vertexBuffer[li].uv_y = vertexBuffer[vid1.x].uv_y + 1.0 / ld * 100.0 ;//+ uvS.y ;
        //     vertexBuffer[ri].uv_y = vertexBuffer[vid1.y].uv_y + 1.0 / rd * 100.0 ;//+ uvS.y ;
        // }else{
            let v = (1.0 - f32(vID) / trailInfo.segment) * trailInfo.uv.w + trailInfo.uv.y;
            vertexBuffer[li].uv_y = v + uvS.y ;
            vertexBuffer[ri].uv_y = v + uvS.y ;
        // }
    }

    fn getRight(p0:vec3f,p1:vec3f,p2:vec3f,up:vec3f) -> vec3f {
        let d0 = normalize(p1 - p0) ;
        let d1 = normalize(p2 - p1) ;
        // var a = dot(d0,d1) ;
        // var ep = 0.0 ;
        // if(a<0.0){
        //     a = -a ;
        //     ep = 1.0/sin(a*0.25) ;
        // }else if(a == 0.0){
        //     ep = 1.414 ;
        // }else{
        //     ep = 1.0 ;
        // }
        let forward = normalize((d0 + d1)+ vec3f(0.000001,0.000001,0.000001)) ;
        return normalize(cross(forward,up)) ;//* ep ;
    }

    fn getVID(vID:u32,vLen:u32,rID:u32) -> vec2<u32> {
        let i0 = (vID + (vLen * rID)) * 2u ;
        let li = i0 + 0u ;
        let ri = i0 + 1u ;
        return vec2<u32>(li,ri);
    }

    fn getRightByMode( vID:u32 , vLen:u32, up:vec3f, trailInfo:TrailInfo ) -> vec3f{
        var right:vec3f;
        if(vID==0u){
            // first
            let sp0 = models[i32(trailInfo.ids[ 0 ])][3].xyz ;
            let sp1 = models[i32(trailInfo.ids[ 1 ])][3].xyz ;
            let firstFront = normalize(sp1 - sp0) ;
            viewDir = -normalize(globalUniform.CameraPos.xyz - sp0) ;
            right = normalize(cross(firstFront,viewDir));
        }else if( vID < (vLen-1) ){
            // body
            let bp0 = models[i32(trailInfo.ids[vID-1])][3].xyz ;
            let bp1 = models[i32(trailInfo.ids[vID])][3].xyz ;
            let bp2 = models[i32(trailInfo.ids[vID+1])][3].xyz ;
            viewDir = -normalize(globalUniform.CameraPos.xyz - bp1) ;
            right = getRight(bp0,bp1,bp2,viewDir) ;
        }else{
            // last
            let ep0 = models[i32(trailInfo.ids[u32(trailInfo.segment)-1u])][3].xyz ;
            let ep1 = models[i32(trailInfo.ids[u32(trailInfo.segment)])][3].xyz ;
            let endFront = normalize(ep1 - ep0) ;
            viewDir = -normalize(globalUniform.CameraPos.xyz - ep1) ;
            right = normalize(cross(endFront,viewDir));
        }
        return normalize(right) ; 
    }
    `,EI=`
    #include "Common_vert"
    #include "Common_frag"
    #include "Hair_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var idMapSampler: sampler;
    @group(1) @binding(auto)
    var idMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var depthMapSampler: sampler;
    @group(1) @binding(auto)
    var depthMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var rootMapSampler: sampler;
    @group(1) @binding(auto)
    var rootMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var alphaMapSampler: sampler;
    @group(1) @binding(auto)
    var alphaMap: texture_2d<f32>;

    #if USE_CUSTOMUNIFORM
    struct MaterialUniform {
      transformUV1:vec4<f32>,
      transformUV2:vec4<f32>,

      baseColor0: vec4<f32>,
      baseColor1: vec4<f32>,
      emissiveColor: vec4<f32>,
      materialF0: vec4<f32>,
      specularColor: vec4<f32>,
      envIntensity: f32,
      normalScale: f32,
      roughness: f32,
      metallic: f32,

      ao: f32,
      roughness_min: f32,
      roughness_max: f32,
      metallic_min: f32,

      metallic_max: f32,
      emissiveIntensity: f32,
      alphaCutoff: f32,
      ior: f32,

      backlit: f32,
      area: f32,
    };
#endif
    
    var<private> debugOut : vec4f = vec4f(0.0) ;
    var<private> uv : vec2f = vec2f(0.0) ;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;
        uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        ORI_ShadingInput.Roughness = materialUniform.roughness;
        ORI_ShadingInput.Metallic = materialUniform.metallic;
        

        #if USE_HAIRCOLOR
            let root = textureSample(rootMap, rootMapSampler, uv ).r ;
            ORI_ShadingInput.BaseColor = mix(materialUniform.baseColor0,materialUniform.baseColor1,root)  ;
        #else
            #if USE_SRGB_ALBEDO
                ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            #else 
                ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            #endif
        #endif

        fragData.Alpha = 1.0 ;
        #if USE_ALPHA_A
        // fragData.Alpha =  textureSampleLevel(alphaMap, alphaMapSampler, uv , 0.0 ).r ;
            // let shake = (globalUniform.frame % 5.0) / 5.0 * 2.0 ;
            fragData.Alpha =  textureSample(alphaMap, alphaMapSampler, uv ).r ;
        #endif

        #if USE_ALPHACUT 
            if( (fragData.Alpha - materialUniform.alphaCutoff) < 0.0 ){
                #if USEGBUFFER
                    ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                #endif
                discard;
            }
        #endif

        useShadow();

        ORI_ShadingInput.Specular = 1.0 ;

        let idMap = textureSampleLevel(idMap, idMapSampler, uv , 0.0 );
        var hairNormal = HairNormal(idMap.r).rgb ;
        hairNormal = transformHairNormal( hairNormal) ;  
        ORI_ShadingInput.HairNormal = hairNormal ;

        ORI_ShadingInput.Normal = unPackRGNormal(vec3f(0.5,0.5,1.0),1.0,1.0) ;

        ORI_ShadingInput.BaseColor.a = fragData.Alpha;
        
        BSSSRDFShading();
    }
`,CI=`
#include "Common_vert"
#include "Common_frag"
#include "Hair_frag"

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var idMapSampler: sampler;
@group(1) @binding(auto)
var idMap: texture_2d<f32>;

@group(1) @binding(auto)
var depthMapSampler: sampler;
@group(1) @binding(auto)
var depthMap: texture_2d<f32>;

@group(1) @binding(auto)
var rootMapSampler: sampler;
@group(1) @binding(auto)
var rootMap: texture_2d<f32>;

@group(1) @binding(auto)
var alphaMapSampler: sampler;
@group(1) @binding(auto)
var alphaMap: texture_2d<f32>;

#if USE_CUSTOMUNIFORM
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,

  baseColor0: vec4<f32>,
  baseColor1: vec4<f32>,
  emissiveColor: vec4<f32>,
  materialF0: vec4<f32>,
  specularColor: vec4<f32>,
  envIntensity: f32,
  normalScale: f32,
  roughness: f32,
  metallic: f32,

  ao: f32,
  roughness_min: f32,
  roughness_max: f32,
  metallic_min: f32,

  metallic_max: f32,
  emissiveIntensity: f32,
  alphaCutoff: f32,
  ior: f32,

  backlit: f32,
  area: f32,
};
#endif

var<private> debugOut : vec4f = vec4f(0.0) ;
var<private> uv : vec2f = vec2f(0.0) ;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

fn frag(){
    var transformUV1 = materialUniform.transformUV1;
    var transformUV2 = materialUniform.transformUV2;
    uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

    ORI_ShadingInput.Roughness = materialUniform.roughness;
    ORI_ShadingInput.Metallic = materialUniform.metallic;

    #if USE_HAIRCOLOR
        let root = textureSample(rootMap, rootMapSampler, uv ).r ;
        ORI_ShadingInput.BaseColor = mix(materialUniform.baseColor0,materialUniform.baseColor1,root)  ;
    #else
        #if USE_SRGB_ALBEDO
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
        #else 
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
        #endif
    #endif

    fragData.Alpha = 1.0 ;
    #if USE_ALPHA_A
        fragData.Alpha =  textureSampleLevel(alphaMap, alphaMapSampler, uv , 0.0 ).r ;
    #endif

    #if USE_ALPHACUT 
        if( (((1.0 - fragData.Alpha) - (1.0 - materialUniform.alphaCutoff))) < 0.0 ){
            #if USEGBUFFER
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
            #endif
            discard;
        }
    #endif

    #if USE_SHADOWMAPING
        useShadow();
    #endif

    ORI_ShadingInput.Specular = 1.0 ;

    let idMap = textureSampleLevel(idMap, idMapSampler, uv , 0.0 );
    var hairNormal = HairNormal(idMap.r).rgb ;
    hairNormal = transformHairNormal( hairNormal) ;  
    ORI_ShadingInput.HairNormal = hairNormal ;

    ORI_ShadingInput.Normal = unPackRGNormal(vec3f(0.5,0.5,1.0),1.0,1.0) ;

    ORI_ShadingInput.BaseColor.a = fragData.Alpha;
    
    BSSSRDFShading();
}
`,_I=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BsDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
          transformUV1:vec4<f32>,
          transformUV2:vec4<f32>,

          baseColor: vec4<f32>,
          emissiveColor: vec4<f32>,
          materialF0: vec4<f32>,
          specularColor: vec4<f32>,
          envIntensity: f32,
          normalScale: f32,
          roughness: f32,
          metallic: f32,

          ao: f32,
          roughness_min: f32,
          roughness_max: f32,
          metallic_min: f32,

          metallic_max: f32,
          emissiveIntensity: f32,
          alphaCutoff: f32,
          ior: f32,

          clearcoatColor: vec4<f32>,

          clearcoatWeight: f32,
          clearcoatFactor: f32,
          clearcoatRoughnessFactor: f32,
          skinPower: f32,
          
          skinColor: vec4<f32>,
          skinColorIns: f32,
          curveFactor: f32,
        };
    #endif
    // #if USE_ARMC
        // @group(1) @binding(auto)
        // var maskMapSampler: sampler;
        // @group(1) @binding(auto)
        // var maskMap: texture_2d<f32>;
    // #endif

    // #if USE_MR
        @group(1) @binding(auto)
        var maskMapSampler: sampler;
        @group(1) @binding(auto)
        var maskMap: texture_2d<f32>;
    // #endif

    #if USE_AOTEX
        @group(1) @binding(auto)
        var aoMapSampler: sampler;
        @group(1) @binding(auto)
        var aoMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var sssMapSampler: sampler;
    @group(1) @binding(auto)
    var sssMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var lutMapSampler: sampler;
    @group(1) @binding(auto)
    var lutMap: texture_2d<f32>;

    var<private> debugOut : vec4f = vec4f(0.0) ;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        #if USE_SRGB_ALBEDO
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = vec4f(ORI_ShadingInput.BaseColor.rgb/ORI_ShadingInput.BaseColor.a,ORI_ShadingInput.BaseColor.a)  ;
            ORI_ShadingInput.BaseColor = vec4<f32>(gammaToLiner(ORI_ShadingInput.BaseColor.rgb) * materialUniform.baseColor.rgb, ORI_ShadingInput.BaseColor.w * materialUniform.baseColor.a)  ;
        #else
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = vec4f(ORI_ShadingInput.BaseColor.rgb/ORI_ShadingInput.BaseColor.a,ORI_ShadingInput.BaseColor.a)  ;
            ORI_ShadingInput.BaseColor = vec4<f32>(gammaToLiner(ORI_ShadingInput.BaseColor.rgb) * materialUniform.baseColor.rgb, ORI_ShadingInput.BaseColor.w * materialUniform.baseColor.a)  ;
        #endif

        var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;
       
        #if USE_ALPHA_A
            ORI_ShadingInput.BaseColor.a =  ORI_ShadingInput.BaseColor.a * (maskTex.a) ;
            ORI_ShadingInput.BaseColor =  vec4f(ORI_ShadingInput.BaseColor.rgb/ORI_ShadingInput.BaseColor.a,ORI_ShadingInput.BaseColor.a) ;
        #endif

        #if USE_ALPHACUT 
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                discard;
            }
        #endif

        useShadow();

        // maskTex =vec4f( gammaToLiner(maskTex.rgb), maskTex.a );

        var roughnessChannel:f32 = 1.0 ;
        #if USE_ROUGHNESS_A
            roughnessChannel = maskTex.a ;
        #else if USE_ROUGHNESS_R
            roughnessChannel = maskTex.r ;
        #else if USE_ROUGHNESS_G
            roughnessChannel = maskTex.g ;
        #else if USE_ROUGHNESS_B
            roughnessChannel = maskTex.b ;
        #else if USE_ALBEDO_A
            roughnessChannel = ORI_ShadingInput.BaseColor.a ;
        #endif  

        #if USE_SMOOTH
            var roughness = ( 1.0 - roughnessChannel ) * materialUniform.roughness;
            ORI_ShadingInput.Roughness = clamp(roughness , 0.0001 , 1.0);
        #else
            ORI_ShadingInput.Roughness = clamp(roughnessChannel * materialUniform.roughness ,0.0001,1.0);
        #endif 

        var metallicChannel:f32 = 1.0 ;
        #if USE_METALLIC_A
            metallicChannel = maskTex.a ;
        #else if USE_METALLIC_R
            metallicChannel = maskTex.r ;
        #else if USE_METALLIC_G
            metallicChannel = maskTex.g ;
        #else if USE_METALLIC_B
            metallicChannel = maskTex.b ;
        #endif    
        ORI_ShadingInput.Metallic = metallicChannel * metallicChannel * materialUniform.metallic ;
   
        var aoChannel:f32 = 1.0 ;
        #if USE_AOTEX
            var aoMap = textureSample(aoMap, aoMapSampler, uv );
            aoChannel = aoMap.g ;
        #else
            #if USE_AO_A
                aoChannel = maskTex.a ;
            #else if USE_AO_R
                aoChannel = maskTex.r ;
            #else if USE_AO_G
                aoChannel = maskTex.g ;
            #else if USE_AO_B
                aoChannel = maskTex.b ;
            #endif  
        #endif

        // ORI_ShadingInput.BaseColor.a = maskTex.a ;

        ORI_ShadingInput.AmbientOcclusion = aoChannel ;

        ORI_ShadingInput.Specular = 1.0 ;

        var emissiveColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;

        emissiveColor = vec4<f32>(gammaToLiner(emissiveColor.rgb),emissiveColor.w);

        ORI_ShadingInput.EmissiveColor = vec4<f32>(materialUniform.emissiveColor.rgb * emissiveColor.rgb * materialUniform.emissiveIntensity,1.0);

     

        var Normal = textureSample(normalMap,normalMapSampler,uv).rgb ;

        let normal = unPackRGNormal(Normal,1.0,1.0) ;  
        
        ORI_ShadingInput.Normal = normal ;

        var sssColor = vec3f(pow(textureSample(sssMap, sssMapSampler, uv ).r,materialUniform.skinPower)) * materialUniform.skinColor.rgb ;
        let sunLight = lightBuffer[0] ;
        let sunLightIntensity = (sunLight.intensity / LUMEN)  ;
        let ndl = 1.0 - clamp(dot(normalize(normal),-normalize(sunLight.direction)),0.0,1.0) * 0.5 + 0.5 ;//1.0 - saturate( dot(normalize(normal),normalize(sunLight.direction)) ) * 0.5 + 0.5 ;
        ORI_ShadingInput.SSS += 0.5 * vec3f(sssColor * sunLightIntensity * materialUniform.skinColorIns * ndl * sunLight.lightColor.rgb ) ;
     
        var curve = clamp(materialUniform.curveFactor * (length(fwidth(ORI_ShadingInput.Normal.xyz)) / length(fwidth(ORI_VertexVarying.vWorldPos.xyz*100.0))),0.0,1.0);
        var NDotL = dot(ORI_ShadingInput.Normal, -sunLight.direction );
        var sssColor2 = textureSample(lutMap, lutMapSampler ,vec2f(NDotL * 0.5 + 0.5, materialUniform.curveFactor * sssColor.r)).rgb * sunLight.lightColor.rgb * sunLightIntensity ;
        ORI_ShadingInput.SSS = sssColor2.rgb * ORI_ShadingInput.BaseColor.rgb ;
     
        BsDFShading();

        // ORI_FragmentOutput.color = vec4f(vec3f(0.5*ORI_ShadingInput.SSS),1.0)  ;
    }
`,SI=`
    // #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    #include "WorldMatrixUniform"
    #include "VertexAttributeIndexShader"
    #include "GlobalUniform"
    #include "Inline_vert"
    #include "EnvMap_frag"
    #include "ColorUtil_frag"

    const DEGREES_TO_RADIANS : f32 = 3.1415926 / 180.0 ;
    const PI : f32 = 3.1415926 ;

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
            transformUV1:vec4<f32>,
            transformUV2:vec4<f32>,
            baseColor: vec4<f32>,
            alphaCutoff: f32,
        };
    #endif

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d_array<f32>;

    @group(2) @binding(5)
    var<storage,read> graphicBuffer : array<GraphicNodeStruct>;
    
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        // var irradiance = vec3<f32>(0.0) ;
        // let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        // irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, ORI_VertexVarying.vWorldNormal.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);

        graphicNode = graphicBuffer[u32(round(ORI_VertexVarying.index))];
        
        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy;
        //The fragUV1.x is 1.0 when the vertex belongs to line.
        if(ORI_VertexVarying.fragUV1.x > 0.5){
            uv = graphicNode.uvRect2.zw * uv.xy + graphicNode.uvRect2.xy;
            uv += graphicNode.uvSpeed.zw * globalUniform.time;
        }else{
            uv = graphicNode.uvRect.zw * uv.xy + graphicNode.uvRect.xy;
            uv += graphicNode.uvSpeed.xy * globalUniform.time;
            let rad = graphicNode.fillRotation;
            if(rad != 0.0){
                let zrot = mat3x3<f32>(
                    cos(rad),-sin(rad),0.0,
                    sin(rad), cos(rad),0.0,
                    0.0,0.0,1.0
                );
                uv = (zrot * vec3f(uv, 0.0)).xy;
            }
        }
        var graphicTextureID = graphicNode.texIndex;
        var graphicNodeColor = graphicNode.baseColor;
        if(ORI_VertexVarying.fragUV1.x > 0.5){
            graphicTextureID = graphicNode.tex2Index;
            graphicNodeColor = graphicNode.lineColor;
        }
        var color = textureSample(baseMap,baseMapSampler,uv, u32(round(graphicTextureID)) ) * materialUniform.baseColor * graphicNodeColor ;
        // let color = textureSample(baseMap,baseMapSampler,uv, u32(round(ORI_VertexVarying.index)));

        // ORI_ViewDir = normalize( globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz);
        // let att = dot( ORI_ViewDir , ORI_VertexVarying.vWorldNormal.xyz );

        // irradiance = LinearToGammaSpace(irradiance.rgb) * color.rgb ;//* att ;

        color += graphicNode.emissiveColor ;
        if(color.w < 0.5){
            discard ;
        }

        // let outColor = vec4f( color.rgb * (att * 0.5 + 0.5 ) , 1.0 ) * materialUniform.baseColor ;
        let outColor = vec4f( color.rgb , 1.0 ) * materialUniform.baseColor ;
        
        // ORI_ShadingInput.BaseColor = color  ;
        ORI_ShadingInput.BaseColor = vec4f(outColor.xyz,1.0)  ;
        UnLit();
    }
`,vI=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> varying_uv: vec2<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    struct MaterialUniform{
        u_texel: vec2<f32>,
        u_strength: f32,
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;


    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3<f32> {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r,0.416666667);
        linRGB.g = pow(linRGB.g,0.416666667);
        linRGB.b = pow(linRGB.b,0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    fn texture2D( uv:vec2<f32> , offset:vec2<f32> ) -> vec4<f32> {
        return textureSample(baseMap, baseMapSampler, uv.xy + offset ).rgba ;
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var v_vTexcoord = fragUV ;
        // v_vTexcoord.x = 1.0 - v_vTexcoord.x ;
        v_vTexcoord.y = 1.0 - v_vTexcoord.y ;

        var reducemul = 1.0 / 8.0;
        var reducemin = 1.0 / 128.0;

        var basecol = texture2D(v_vTexcoord , vec2<f32>(0.0)).rgba;
        var baseNW = texture2D(v_vTexcoord , -materialUniform.u_texel).rgb;
        var baseNE = texture2D(v_vTexcoord , vec2<f32>(materialUniform.u_texel.x, -materialUniform.u_texel.y)).rgb;
        var baseSW = texture2D(v_vTexcoord , vec2<f32>(-materialUniform.u_texel.x, materialUniform.u_texel.y)).rgb;
        var baseSE = texture2D(v_vTexcoord , materialUniform.u_texel ).rgb;

        // var gray = vec3<f32>(0.299, 0.587, 0.114);
        var gray = vec3<f32>(0.213, 0.715, 0.072);
        var monocol = dot(basecol.rgb, gray);
        var monoNW = dot(baseNW, gray);
        var monoNE = dot(baseNE, gray);
        var monoSW = dot(baseSW, gray);
        var monoSE = dot(baseSE, gray);

        var monomin = min(monocol, min(min(monoNW, monoNE), min(monoSW, monoSE)));
        var monomax = max(monocol, max(max(monoNW, monoNE), max(monoSW, monoSE)));

        var dir = vec2<f32>(-((monoNW + monoNE) - (monoSW + monoSE)), ((monoNW + monoSW) - (monoNE + monoSE)));
        var dirreduce = max((monoNW + monoNE + monoSW + monoSE) * reducemul * 0.25, reducemin);
        var dirmin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirreduce);
        dir = min(vec2<f32>(materialUniform.u_strength), max(vec2<f32>(-materialUniform.u_strength), dir * dirmin)) * materialUniform.u_texel;

        var resultA = 0.5 * (texture2D(v_vTexcoord , dir * -0.166667).rgb  +
                            texture2D(v_vTexcoord , dir * 0.166667).rgb);
        var resultB = resultA * 0.5 + 0.25 * (texture2D( v_vTexcoord , dir * -0.5).rgb +
                                            texture2D( v_vTexcoord , dir * 0.5).rgb);
        var monoB = dot(resultB.rgb, gray);
        
        var color:vec3<f32> ;
        if(monoB < monomin || monoB > monomax) {
            color = resultA ;//* v_vColour;
        } else {
            color = resultB ;//* v_vColour;
        }
        return FragmentOutput(vec4<f32>(color.rgb,basecol.a));
    }
`;var wI=Object.defineProperty,bI=Object.getOwnPropertyDescriptor,II=(r,A,e,t)=>{for(var i=t>1?void 0:t?bI(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&wI(A,e,i),i};let cf=class extends Pr{constructor(){super();let r=new ot("sky_vs_frag_wgsl","sky_fs_frag_wgsl");this.addRenderPass(r),r.setUniformVector3("eyesPos",new I),r.setUniformFloat("exposure",1),r.setUniformFloat("roughness",0);let A=r.shaderState;A.frontFace="cw",A.cullMode=ar.back,A.depthWriteEnabled=!1,A.depthCompare=en.less}};cf=II([$n],cf);class BI extends an{constructor(){super(),this.shader=new cf,this.shader.setUniformVector3("eyesPos",new I),this.shader.setUniformFloat("exposure",1),this.shader.setUniformFloat("roughness",0)}set baseMap(A){this.setTexture("baseMap",A);const e="IS_HDR_SKY";this._shader.getDefaultShaders()[0].defineValue[e]!=(A==null?void 0:A.isHDRTexture)&&this._shader.setDefine(e,!!(A!=null&&A.isHDRTexture))}get baseMap(){return this._shader.getDefaultColorShader().getTexture("baseMap")}set envMap(A){}set shadowMap(A){}get exposure(){return K.setting.sky.skyExposure}set exposure(A){K.setting.sky.skyExposure=A}get roughness(){return this._shader.getDefaultColorShader().uniforms.roughness.value}set roughness(A){let e=this._shader.getDefaultColorShader();"roughness"in e.uniforms&&(e.uniforms.roughness.value=A)}}class TI extends ti{constructor(e,t,i,n,s,o,u){super();a(this,"shape_vertices",[]);a(this,"shape_indices",[]);a(this,"radius");a(this,"widthSegments");a(this,"heightSegments");a(this,"phiStart");a(this,"phiLength");a(this,"thetaStart");a(this,"thetaLength");this.radius=e,this.widthSegments=t,this.heightSegments=i,this.phiStart=n,this.phiLength=s,this.thetaStart=o,this.thetaLength=u,this.buildGeometry()}buildGeometry(){var e,t,i=0;let n=this.heightSegments,s=this.widthSegments,o=this.radius;var u=(n+1)*(s+1);let l=new Float32Array(u*3),c=new Float32Array(u*3),h=new Float32Array(u*2),d=new Uint16Array(s*n*2*3),f=0,p=0,y=0;for(t=0;t<=n;++t){var _=Math.PI*t/n,g=-o*Math.cos(_),m=o*Math.sin(_);for(e=0;e<=s;++e){var E=2*Math.PI*e/s,w=m*Math.cos(E),L=m*Math.sin(E),T=1/Math.sqrt(w*w+L*L+g*g);if(l[f++]=w,l[f++]=L,l[f++]=g,c[p++]=w*T,c[p++]=L*T,c[p++]=g*T,h[y++]=e/s,h[y++]=1-t/n,e>0&&t>0){var R=(s+1)*t+e,P=(s+1)*t+e-1,F=(s+1)*(t-1)+e-1,H=(s+1)*(t-1)+e;t==n?(d[i++]=R,d[i++]=F,d[i++]=H):t==1?(d[i++]=R,d[i++]=P,d[i++]=F):(d[i++]=R,d[i++]=P,d[i++]=F,d[i++]=R,d[i++]=F,d[i++]=H)}}}this.setIndices(d),this.setAttribute(pA.position,l),this.setAttribute(pA.normal,c),this.setAttribute(pA.uv,h),this.setAttribute(pA.TEXCOORD_1,h),this.addSubGeometry({indexStart:0,indexCount:d.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0}),this.bounds=new Qe(I.ZERO,new I(this.radius*2,this.radius*2,this.radius*2))}}class DI extends he{constructor(){super(...arguments);a(this,"skyMaterial")}init(){super.init(),this.castShadow=!1,this.castGI=!0,this.addRendererMask(It.Sky),this.alwaysRender=!0,this.object3D.bound=new Qe(I.ZERO.clone(),I.MAX),this.geometry=new TI(K.setting.sky.defaultFar,20,20),this.skyMaterial||(this.skyMaterial=new BI)}onEnable(){this._readyPipeline?(this.castNeedPass(),!this._inRenderer&&this.transform.scene3D&&(IA.instance.sky=this,this._inRenderer=!0)):this.initPipeline()}onDisable(){this._inRenderer&&this.transform.scene3D&&(this._inRenderer=!1,IA.instance.sky=null),super.onDisable()}renderPass2(e,t,i,n,s,o=!1){super.renderPass2(e,t,i,n,s,o)}set map(e){this.skyMaterial.baseMap=e,this.skyMaterial.name==null&&(this.skyMaterial.name="skyMaterial"),this.material=this.skyMaterial}get map(){return this.skyMaterial.baseMap}get exposure(){return this.skyMaterial.exposure}set exposure(e){this.skyMaterial&&(this.skyMaterial.exposure=e)}get roughness(){return this.skyMaterial.roughness}set roughness(e){this.skyMaterial&&(this.skyMaterial.roughness=e)}}class _r{}a(_r,"panelRatio",1),a(_r,"quadMaxCountForWorld",256),a(_r,"quadMaxCountForView",2048),a(_r,"SortOrderStartWorld",7e3),a(_r,"SortOrderStartView",8e3),a(_r,"SortOrderCanvasSpan",1e4);var mi=(r=>(r[r.View=0]="View",r[r.World=2]="World",r))(mi||{}),uc=(r=>(r[r.Simple=0]="Simple",r[r.Sliced=1]="Sliced",r[r.Tiled=2]="Tiled",r[r.Filled=3]="Filled",r))(uc||{}),vs=(r=>(r[r.None=0]="None",r[r.BillboardY=9]="BillboardY",r[r.BillboardXYZ=10]="BillboardXYZ",r))(vs||{});class lc extends Jt{constructor(){super();a(this,"type");a(this,"camera");a(this,"_cameraPosition");this._cameraPosition=new I}onUpdate(){this.enable&&this.transform.view3D.camera&&this.updateBillboardMatrix()}updateBillboardMatrix(){let e=this.transform.view3D.camera;this._cameraPosition.copyFrom(e.transform.back),this.type==vs.BillboardXYZ||this.type==vs.BillboardY&&(this._cameraPosition.y=0),this._cameraPosition.normalize(),this._cameraPosition.add(this.object3D.localPosition,this._cameraPosition),this.transform.lookAt(this.object3D.localPosition,this._cameraPosition,e.transform.up)}cloneTo(e){let t=e.addComponent(lc);t.type=this.type}}var py=(r=>(r[r.None=0]="None",r[r.Box=1]="Box",r[r.Capsule=2]="Capsule",r[r.Sphere=3]="Sphere",r[r.Mesh=4]="Mesh",r))(py||{});const jt=class jt{constructor(){a(this,"_center");a(this,"_size");a(this,"_halfSize");a(this,"_shapeType",0);jt.v3_help_0||(jt.v3_help_0=new I),jt.helpMatrix||(jt.helpMatrix=new NA),jt.helpRay||(jt.helpRay=new $o),this._center=new I,this._size=new I,this._halfSize=new I}get shapeType(){return this._shapeType}setFromCenterAndSize(A,e){return A&&this._center.copy(A),e&&this._size.copy(e),this}get center(){return this._center}set center(A){this._center.copy(A)}get size(){return this._size}set size(A){this._size.copy(A),this._halfSize.copy(A).multiplyScalar(.5)}get halfSize(){return this._halfSize}rayPick(A,e){return null}};a(jt,"v3_help_0"),a(jt,"helpMatrix"),a(jt,"helpRay");let ms=jt;class gy extends ms{constructor(){super();a(this,"_pickRet");a(this,"box");this._shapeType=py.Box,this.box=new Qe(new I,new I)}rayPick(e,t){this.box.setFromCenterAndSize(this.center,this.size);let i=ms.helpMatrix;i.copyFrom(t).invert();let n=ms.helpRay.copy(e);n.applyMatrix(i);let s=n.intersectBox(this.box,ms.v3_help_0);return s?(this._pickRet||(this._pickRet={intersectPoint:new I,distance:0}),this._pickRet.intersectPoint=s,this._pickRet.distance=I.distance(n.origin,ms.v3_help_0),this._pickRet):null}}class xI extends Jt{constructor(){super();a(this,"_shape");this._shape=new gy}start(){K.setting.pick.mode=="pixel"&&this.transform.scene3D.view.pickFire.mouseEnableMap.set(this.transform.worldMatrix.index,this)}onEnable(e){Ee.bindEnablePick(e,this,null)}onDisable(e){Ee.unBindEnablePick(e,this)}get shape(){return this._shape}set shape(e){this._shape=e}rayPick(e){return this._enable?this._shape.rayPick(e,this.transform.worldMatrix):null}beforeDestroy(e){K.setting.pick.mode=="pixel"&&this.transform.scene3D.view.pickFire.mouseEnableMap.delete(this.transform.worldMatrix.index),super.beforeDestroy(e)}}var OI=Object.defineProperty,MI=Object.getOwnPropertyDescriptor,RI=(r,A,e,t)=>{for(var i=t>1?void 0:t?MI(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&OI(A,e,i),i};let Ms=class extends Jt{constructor(){super(...arguments);a(this,"jointMatrixIndexTableBuffer");a(this,"playBlendShapeLoop",!1);a(this,"inverseBindMatrices");a(this,"_avatar");a(this,"_rendererList");a(this,"propertyCache");a(this,"_clips");a(this,"_clipsMap");a(this,"_currentSkeletonClip");a(this,"_currentBlendAnimClip");a(this,"_skeletonTime",0);a(this,"_blendShapeTime",0);a(this,"_skeletonSpeed",1);a(this,"_blendShapeSpeed",1);a(this,"_skeletonStart",!0);a(this,"_blendShapeStart",!0);a(this,"root");a(this,"_avatarName");a(this,"skeltonPoseObject3D",{});a(this,"skeltonTPoseObject3D",{})}init(A){this.propertyCache=new Map,this._clipsMap=new Map,this._clips=[]}start(){this._rendererList=this.object3D.getComponentsInChild(ja)}debug(){}playAnim(A,e=0,t=1){this._clipsMap.has(A)?(this._currentSkeletonClip=this._clipsMap.get(A),this._skeletonTime=e,this._skeletonSpeed=t,this._skeletonStart=!0):console.warn(`not has anim ${A}`)}playBlendShape(A,e=0,t=1){this._clipsMap.has(A)?(this._currentBlendAnimClip=this._clipsMap.get(A),this._blendShapeTime=e,this._blendShapeSpeed=t,this._blendShapeStart=!0):console.warn(`not has blendShape ${A}`)}set avatar(A){this._avatarName=A,this.inverseBindMatrices=[],this._avatar=K.res.getObj(A);let e=this.buildSkeletonPose();const t=new Float32Array(e);this.jointMatrixIndexTableBuffer=new Bt(this._avatar.count,0,t)}getJointIndexTable(A){let e=new Array;for(let t=0;t<A.length;t++){let i=this._avatar.boneMap.get(A[t]);e[t]=i?i.boneID:-1}return e}buildSkeletonPose(){let A=[];for(const e of this._avatar.boneData){let t=new de;NA.getEuler(I.HELP_6,e.q,!0,"ZYX"),t.localPosition=e.t.clone(),t.localRotation=I.HELP_6.clone(),t.localScale=I.ONE,e.s.clone(),this.skeltonPoseObject3D[e.boneName]=t,this.skeltonTPoseObject3D[e.bonePath]=t.clone(),e.parentBoneName&&e.parentBoneName!=""?this.skeltonPoseObject3D[e.parentBoneName].addChild(t):(this.object3D.transform.scene3D&&this.object3D.transform.scene3D.addChild(t),this.root=t),A.push(t.transform.worldMatrix.index);let i=new NA;i.copyFrom(t.transform.worldMatrix),i.invert(),this.inverseBindMatrices.push(i.rawData)}return A}set clips(A){this._clips=A;for(const e of A)this._clipsMap.set(e.clipName,e)}get clips(){return this._clips}cloneTo(A){let e=A.addComponent(Ms);e.avatar=this._avatarName,e.clips=this._clips}updateTime(){this._skeletonStart&&(this._skeletonTime+=be.delta*.001*this._skeletonSpeed,this._currentSkeletonClip&&this._currentSkeletonClip.loopTime&&(this._skeletonTime=this._skeletonTime%this._currentSkeletonClip.stopTime)),this._blendShapeStart&&(this._blendShapeTime+=be.delta*.001*this._blendShapeSpeed,this._currentBlendAnimClip&&(this._currentBlendAnimClip.loopTime&&this.playBlendShapeLoop?this._blendShapeTime=this._blendShapeTime%this._currentBlendAnimClip.stopTime:this._blendShapeTime=Math.min(this._blendShapeTime,this._currentBlendAnimClip.stopTime)-1e-4))}onUpdate(A){this.transform.worldMatrix,this.updateTime(),this.updateSkeletonAnim(),this.updateMorphAnim()}updateSkeletonAnim(){if(this._currentSkeletonClip){let A=this._avatar.boneData,e=0,t=A.length;for(e=0;e<t;e++){const i=A[e];let n=this.skeltonPoseObject3D[i.boneName];if(this._currentSkeletonClip.useSkeletonPos){let o=this.getPosition(i.bonePath,this._skeletonTime);n.transform.localPosition=o}let s=this.getRotation(i.bonePath,this._skeletonTime);if(n.transform.localRotation=s,this._currentSkeletonClip.useSkeletonScale){let o=this.getScale(i.bonePath,this._skeletonTime);n.transform.localScale=o}}}}updateMorphAnim(){if(this._currentBlendAnimClip&&this._currentBlendAnimClip.floatCurves&&this._currentBlendAnimClip.floatCurves.size>0&&this._rendererList)for(const A of this._currentBlendAnimClip.floatCurves){let e=A[0],t=A[1].propertys,i=this._currentBlendAnimClip.floatCurves.get(e).getValue(this._blendShapeTime)/100;for(const n of this._rendererList)if(n.blendShape){let s=this.propertyCache.get(n);if(s&&e in s)s[e](i);else{s=n;for(const o of t){if(!s[o])break;s=s[o]}if(!s||s==n)break;this.propertyCache.get(n)||this.propertyCache.set(n,{}),this.propertyCache.get(n)[e]=s,s(i)}}}}updateBlendShape(A,e,t){for(const i of this._rendererList)if(i.blendShape){let n=this.propertyCache.get(i);if(n&&e in n)n[e](t);else{n=i;for(const s of A){if(!n[s])break;n=n[s]}if(!n||n==i)break;this.propertyCache.get(i)||this.propertyCache.set(i,{}),this.propertyCache.get(i)[e]=n,n(t)}}}getPosition(A,e){return this._currentSkeletonClip.positionCurves.has(A)?this._currentSkeletonClip.positionCurves.get(A).getValue(e):this.skeltonTPoseObject3D[A].localPosition}getRotation(A,e){if(this._currentSkeletonClip.rotationCurves.has(A)){let t=this._currentSkeletonClip.rotationCurves.get(A).getValue(e);return oe.HELP_2.set(t.x,t.y,t.z,t.w),NA.getEuler(I.HELP_6,oe.HELP_2,!0,"ZYX"),I.HELP_6}return this.skeltonTPoseObject3D[A].localRotation}getScale(A,e){return this._currentSkeletonClip.scaleCurves.has(A)?this._currentSkeletonClip.scaleCurves.get(A).getValue(e):this.skeltonTPoseObject3D[A].localScale}getFloat(A,e){return this._currentSkeletonClip.floatCurves.get(A).getValue(e)}};Ms=RI([ri(Ms,"AnimatorComponent")],Ms);class PI{constructor(){a(this,"index");a(this,"time");a(this,"timeEnd");a(this,"coeff",[])}}var ls=(r=>(r[r.PingPong=0]="PingPong",r[r.Repeat=1]="Repeat",r[r.Clamp=2]="Clamp",r))(ls||{});class hf{constructor(A=0,e=0){a(this,"serializedVersion","2");a(this,"time");a(this,"value");a(this,"inSlope",0);a(this,"outSlope",0);a(this,"tangentMode",0);a(this,"weightedMode",0);a(this,"inWeight");a(this,"outWeight");this.time=A,this.value=e}unSerialized(A){this.serializedVersion=A.serializedVersion,this.time=A.time,this.value=A.value,this.tangentMode=A.tangentMode,this.inSlope=A.inSlope=="Infinity"?NaN:A.inSlope,this.outSlope=A.outSlope=="Infinity"?NaN:A.outSlope}unSerialized2(A){this.serializedVersion=A.serializedVersion,this.time=A.time,this.value=A.value,this.tangentMode=A.tangentMode,this.inSlope=A.inTangent=="Infinity"?NaN:A.inTangent,this.outSlope=A.outTangent=="Infinity"?NaN:A.outTangent}}class FI{constructor(A,e=ls.Repeat,t=ls.Repeat){a(this,"_totalTime",1);a(this,"_cache",new PI);a(this,"_cacheOut",{lhsIndex:0,rhsIndex:0});a(this,"_InvalidateCache",!1);a(this,"curve",[]);a(this,"serializedVersion");a(this,"preWarpMode");a(this,"postWarpMode");a(this,"rotationOrder");if(A)for(let i=0;i<A.length;i++){const n=A[i];this.addKeyFrame(n)}this.preWarpMode=e,this.postWarpMode=t}get totalTime(){return this._totalTime}get first(){return this.curve[0]}get last(){return this.curve[this.curve.length-1]}addKeyFrame(A){this.curve.indexOf(A)==-1&&this.curve.push(A),this.calcTotalTime()}removeKeyFrame(A){let e=this.curve.indexOf(A);e!=-1&&this.curve.splice(e,1),this.calcTotalTime()}calculateCacheData(A,e,t,i=0){let n=this.curve,s=n[e],o=n[t];A.index=e,A.time=s.time+i,A.timeEnd=o.time+i,A.index=e;let u,l,c,h,d,f,p;u=o.time-s.time,u=Math.max(u,1e-4),c=o.value-s.value,l=1/(u*u),h=s.outSlope,d=o.inSlope,f=h*u,p=d*u,A.coeff[0]=(f+p-c-c)*l/u,A.coeff[1]=(c+c+c-f-f-p)*l,A.coeff[2]=h,A.coeff[3]=s.value,this.setupStepped(A.coeff,s,o)}getValue(A){return A=this.wrapTime(A),this.findCurve(A,this._cacheOut),this.calculateCacheData(this._cache,this._cacheOut.lhsIndex,this._cacheOut.rhsIndex,0),this.evaluateCache(this._cache,A)}getKeyCount(){return this.curve.length}getKey(A){return this.curve[A]}unSerialized(A){this.preWarpMode=A.m_PreInfinity,this.postWarpMode=A.m_PostInfinity,this.rotationOrder=A.m_RotationOrder;let e=A.m_Curve.length;for(let t=0;t<e;t++)this.curve[t]=new hf,this.curve[t].unSerialized(A.m_Curve[t.toString()]);return this.calcTotalTime(),this}unSerialized2(A){this.preWarpMode=A.preWrapMode,this.postWarpMode=A.postWrapMode;let e=A.keyFrames||A.keys,t=e.length;for(let i=0;i<t;i++)this.curve[i]=new hf,this.curve[i].unSerialized2(e[i.toString()]);return this.calcTotalTime(),this}wrapTime(A){let e=this.curve,t=e[0].time,i=e[e.length-1].time;return A<t?this.preWarpMode==ls.Clamp?A=t:this.preWarpMode==ls.PingPong?A=pg(A,t,i):A=gg(A,t,i):A>i&&(this.postWarpMode==ls.Clamp?A=i:this.postWarpMode==ls.PingPong?A=pg(A,t,i):A=gg(A,t,i)),A}evaluateCache(A,e){let t=e-A.time;return t*(t*(t*A.coeff[0]+A.coeff[1])+A.coeff[2])+A.coeff[3]}findCurve(A,e){let t=this.curve;for(let i=1;i<t.length;i++){let n=t[i-1],s=t[i];n.time<=A&&s.time>A&&(e.lhsIndex=i-1,e.rhsIndex=i)}}setupStepped(A,e,t){(isNaN(e.outSlope)||isNaN(t.inSlope))&&(A[0]=0,A[1]=0,A[2]=0,A[3]=e.value)}invalidateCache(){this._InvalidateCache=!0}calcTotalTime(){let A=0;for(let e of this.curve)e?A=Math.max(A,e.time):console.error(e);this._totalTime=A}static scaleCurveValue(A,e){if(!A._InvalidateCache)for(let t=0;t<A.curve.length;t++){let i=A.curve[t];i.value*=e,i.inSlope*=e,i.outSlope*=e}A.invalidateCache()}}var NI=(r=>(r[r.Default=0]="Default",r[r.Clamp=1]="Clamp",r[r.Once=1]="Once",r[r.Loop=2]="Loop",r[r.PingPong=4]="PingPong",r[r.ClampForever=8]="ClampForever",r))(NI||{}),LI=Object.defineProperty,UI=Object.getOwnPropertyDescriptor,kI=(r,A,e,t)=>{for(var i=t>1?void 0:t?UI(A,e):A,n=r.length-1,s;n>=0;n--)(s=r[n])&&(i=(t?s(A,e,i):s(i))||i);return t&&i&&LI(A,e,i),i};let ja=class extends he{constructor(){super();a(this,"skinJointsName");a(this,"mInverseBindMatrixData");a(this,"mInverseBindMatrixBuffer");a(this,"mSkeletonAnimation");a(this,"mJointIndexTableBuffer");this.addRendererMask(It.SkinnedMesh)}get geometry(){return this._geometry}set geometry(A){this.skinJointsName=A.skinNames;let e=[];for(let t=0;t<A.bindPose.length;t++)e.push(A.bindPose[t].rawData.slice(0,16));this.skinInverseBindMatrices=e,super.geometry=A}start(){if(super.start(),this.skeletonAnimation=this.object3D.getComponent(Ms),!this.skeletonAnimation){let A=this.object3D.parentObject.parentObject.getComponentsInChild(Ms);A.length>0&&(this.skeletonAnimation=A[0]);let e=this.object3D;for(;!this.skeletonAnimation&&e;)this.skeletonAnimation=e.getComponentFromParent(Ms),e.parent&&(e=e.parent.object3D)}}get blendShape(){return this.morphData}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(A){if(this.mSkeletonAnimation=A,!!A&&!this.mJointIndexTableBuffer){let e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName);this.mJointIndexTableBuffer=new Bt(e.length,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(A){this.mInverseBindMatrixData=A;var e=new Float32Array(A.length*16);for(let t=0;t<A.length;t++){let i=t*16,n=A[t];e.set(n,i)}this.mInverseBindMatrixBuffer=new Bt(e.byteLength,0,e),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(A){let e=A.addComponent(ja),t=[];for(const i of this.materials)t.push(i.clone());e.materials=t,e.geometry=this.geometry,e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(A,e,t,i){for(let n=0;n<this.materials.length;n++){let s=this.materials[n].getPass(e);if(s)for(let o=0;o<s.length;o++){const u=s[o];!u.pipeline&&this.mSkeletonAnimation&&(u.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),u.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),u.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(A,e,t,i)}};ja=kI([ri(ja,"SkinnedMeshRenderer2")],ja);var zI=(r=>(r.mouthRollLower="mouthRollLower",r.browOuterUp_L="browOuterUpLeft",r.mouthSmile_L="mouthSmileLeft",r.jawRight="jawRight",r.eyeLookOut_L="eyeLookOutLeft",r.mouthFunnel="mouthFunnel",r.mouthUpperUp_R="mouthUpperUpRight",r.browDown_L="browDownLeft",r.jawLeft="jawLeft",r.mouthLowerDown_L="mouthLowerDownLeft",r.noseSneer_R="noseSneerRight",r.jawForward="jawForward",r.mouthLowerDown_R="mouthLowerDownRight",r.browInnerUp="browInnerUp",r.mouthRollUpper="mouthRollUpper",r.mouthStretch_R="mouthStretchRight",r.mouthPucker="mouthPucker",r.eyeBlink_L="eyeBlinkLeft",r.mouthUpperUp_L="mouthUpperUpLeft",r.mouthShrugUpper="mouthShrugUpper",r.eyeLookIn_R="eyeLookInRight",r.noseSneer_L="noseSneerLeft",r.mouthFrown_L="mouthFrownLeft",r.cheekSquint_L="cheekSquintLeft",r.eyeLookDown_L="eyeLookDownLeft",r.mouthDimple_L="mouthDimpleLeft",r.mouthFrown_R="mouthFrownRight",r.eyeLookIn_L="eyeLookInLeft",r.eyeLookOut_R="eyeLookOutRight",r.mouthLeft="mouthLeft",r.mouthStretch_L="mouthStretchLeft",r.mouthPress_L="mouthPressLeft",r.mouthDimple_R="mouthDimpleRight",r.eyeWide_R="eyeWideRight",r.browDown_R="browDownRight",r.eyeLookUp_R="eyeLookUpRight",r.eyeBlink_R="eyeBlinkRight",r.cheekSquint_R="cheekSquintRight",r.mouthRight="mouthDimpleRight",r.eyeLookDown_R="eyeLookDownRight",r.eyeLookUp_L="eyeLookUpLeft",r.eyeSquint_L="eyeSquintLeft",r.jawOpen="jawOpen",r.browOuterUp_R="browOuterUpRight",r.mouthClose="mouthClose",r.mouthShrugLower="mouthShrugLower",r.eyeWide_L="eyeWideLeft",r.tongueOut="tongueOut",r.eyeSquint_R="eyeSquintRight",r.cheekPuff="cheekPuff",r.mouthPress_R="mouthPressRight",r.mouthSmile_R="mouthSmileRight",r))(zI||{}),GI=(r=>(r[r.Key_BackSpace=8]="Key_BackSpace",r[r.Key_Tab=9]="Key_Tab",r[r.Key_Clear=12]="Key_Clear",r[r.Key_Enter=13]="Key_Enter",r[r.Key_Shift_L=16]="Key_Shift_L",r[r.Key_Control_L=17]="Key_Control_L",r[r.Key_Alt_L=18]="Key_Alt_L",r[r.Key_Pause=19]="Key_Pause",r[r.Key_CapsLock=20]="Key_CapsLock",r[r.Key_Escape=21]="Key_Escape",r[r.Key_Esc=27]="Key_Esc",r[r.Key_Space=32]="Key_Space",r[r.Key_Prior=33]="Key_Prior",r[r.Key_Next=34]="Key_Next",r[r.Key_End=35]="Key_End",r[r.Key_Home=36]="Key_Home",r[r.Key_Left=37]="Key_Left",r[r.Key_Up=38]="Key_Up",r[r.Key_Right=39]="Key_Right",r[r.Key_Down=40]="Key_Down",r[r.Key_Select=41]="Key_Select",r[r.Key_Print=42]="Key_Print",r[r.Key_Execute=43]="Key_Execute",r[r.Key_Insert=45]="Key_Insert",r[r.Key_Delete=46]="Key_Delete",r[r.Key_Help=47]="Key_Help",r[r.Key_0=48]="Key_0",r[r.Key_1=49]="Key_1",r[r.Key_2=50]="Key_2",r[r.Key_3=51]="Key_3",r[r.Key_4=52]="Key_4",r[r.Key_5=53]="Key_5",r[r.Key_6=54]="Key_6",r[r.Key_7=55]="Key_7",r[r.Key_8=56]="Key_8",r[r.Key_9=57]="Key_9",r[r.Key_A=65]="Key_A",r[r.Key_B=66]="Key_B",r[r.Key_C=67]="Key_C",r[r.Key_D=68]="Key_D",r[r.Key_E=69]="Key_E",r[r.Key_F=70]="Key_F",r[r.Key_G=71]="Key_G",r[r.Key_H=72]="Key_H",r[r.Key_I=73]="Key_I",r[r.Key_J=74]="Key_J",r[r.Key_K=75]="Key_K",r[r.Key_L=76]="Key_L",r[r.Key_M=77]="Key_M",r[r.Key_N=78]="Key_N",r[r.Key_O=79]="Key_O",r[r.Key_P=80]="Key_P",r[r.Key_Q=81]="Key_Q",r[r.Key_R=82]="Key_R",r[r.Key_S=83]="Key_S",r[r.Key_T=84]="Key_T",r[r.Key_U=85]="Key_U",r[r.Key_V=86]="Key_V",r[r.Key_W=87]="Key_W",r[r.Key_X=88]="Key_X",r[r.Key_Y=89]="Key_Y",r[r.Key_Z=90]="Key_Z",r[r.Key_KP_0=96]="Key_KP_0",r[r.Key_KP_1=97]="Key_KP_1",r[r.Key_KP_2=98]="Key_KP_2",r[r.Key_KP_3=99]="Key_KP_3",r[r.Key_KP_4=100]="Key_KP_4",r[r.Key_KP_5=101]="Key_KP_5",r[r.Key_KP_6=102]="Key_KP_6",r[r.Key_KP_7=103]="Key_KP_7",r[r.Key_KP_8=104]="Key_KP_8",r[r.Key_KP_9=105]="Key_KP_9",r[r.Key_Multiply=106]="Key_Multiply",r[r.Key_Add=107]="Key_Add",r[r.Key_Separator=108]="Key_Separator",r[r.Key_Subtract=109]="Key_Subtract",r[r.Key_Decimal=110]="Key_Decimal",r[r.Key_Divide=111]="Key_Divide",r[r.Key_F1=112]="Key_F1",r[r.Key_F2=113]="Key_F2",r[r.Key_F3=114]="Key_F3",r[r.Key_F4=115]="Key_F4",r[r.Key_F5=116]="Key_F5",r[r.Key_F6=117]="Key_F6",r[r.Key_F7=118]="Key_F7",r[r.Key_F8=119]="Key_F8",r[r.Key_F9=120]="Key_F9",r[r.Key_F10=121]="Key_F10",r[r.Key_F11=122]="Key_F11",r[r.Key_F12=123]="Key_F12",r[r.Key_F13=124]="Key_F13",r[r.Key_F14=125]="Key_F14",r[r.Key_F15=126]="Key_F15",r[r.Key_F16=127]="Key_F16",r[r.Key_F17=128]="Key_F17",r[r.Key_F18=129]="Key_F18",r[r.Key_F19=130]="Key_F19",r[r.Key_F20=131]="Key_F20",r[r.Key_F21=132]="Key_F21",r[r.Key_F22=133]="Key_F22",r[r.Key_F23=134]="Key_F23",r[r.Key_F24=135]="Key_F24",r[r.Key_Num_Lock=136]="Key_Num_Lock",r[r.Key_Scroll_Lock=137]="Key_Scroll_Lock",r))(GI||{});class Mg{static add(A,e,t){return t||(t=new I),t.x=A.x+e.x,t.y=A.y+e.y,t.z=A.z+e.z,t}static sub(A,e,t){return t||(t=new I),t.x=A.x-e.x,t.y=A.y-e.y,t.z=A.z-e.z,t}static mul(A,e,t){return t||(t=new I),t.x=A.x*e.x,t.y=A.y*e.y,t.z=A.z*e.z,t}static mulScale(A,e,t){return t||(t=new I),t.x=A.x*e,t.y=A.y*e,t.z=A.z*e,t}static div(A,e,t){return t||(t=new I),t.x=A.x/e.x,t.y=A.y/e.y,t.z=A.z/e.z,t}static normalize(A){return A.clone().normalize()}static dot(A,e){let t=I.HELP_0;return t.copyFrom(A),t.dotProduct(e)}static calculateVectorAngle_xz(A,e){return Math.acos((A.x*e.x+A.y*e.y)/Math.sqrt((A.x*A.x+A.y*A.y)*(e.x*e.x+e.y*e.y)))}static distance(A,e){return I.distance(A,e)}static getRandomXYZ(A=-100,e=100){return new I(Math.random()*(e-A)+A,Math.random()*(e-A)+A,Math.random()*(e-A)+A)}static getRandomV3(A=-100,e=100,t,i){return new I(Math.random()*e+A,Math.random()*i+t,Math.random()*e+A)}static sphere(A){let e=A*Math.random(),t=new I(Math.random()*1-.5,Math.random()*1-.5,Math.random()*1-.5);return t.normalize(),t.scaleBy(e),t}static sphereXYZ(A,e,t=1,i=1,n=1){let s=A+(e-A)*Math.random(),o=new I(Math.random()*t-t*.5,Math.random()*i-i*.5,Math.random()*n-n*.5);return o.normalize(),o.scaleBy(s),o}}class VI extends Jt{constructor(){super();a(this,"_camera");a(this,"autoRotate",!1);a(this,"autoRotateSpeed",.1);a(this,"rotateFactor",.5);a(this,"zoomFactor",.1);a(this,"panFactor",.25);a(this,"_smooth",5);a(this,"_minDistance",1);a(this,"_maxDistance",1e5);a(this,"_maxPolarAngle",90);a(this,"_minPolarAngle",-90);a(this,"_target",new I(0,0,0));a(this,"_cTarget",new I(0,0,0));a(this,"_position",new I(0,0,0));a(this,"_cPosition",new I(0,0,0));a(this,"_spherical",new QI);a(this,"_isMouseDown",!1);a(this,"_lastMouseX",-1);a(this,"_lastMouseY",-1);a(this,"_isPanning",!1)}get target(){return this._target}set target(e){this._target=e}get smooth(){return this._smooth}set smooth(e){this._smooth=Math.max(e,1)}get minDistance(){return this._minDistance}set minDistance(e){this._minDistance=vt(e,2e-6,this._maxDistance)}get maxDistance(){return this._maxDistance}set maxDistance(e){this._maxDistance=vt(e,this._minDistance,1/0)}get minPolarAngle(){return this._minPolarAngle}set minPolarAngle(e){this._minPolarAngle=vt(e,-90,this._maxPolarAngle)}get maxPolarAngle(){return this._maxPolarAngle}set maxPolarAngle(e){this._maxPolarAngle=vt(e,this._minPolarAngle,90)}start(){this._camera=this.object3D.getComponent(n0),this._position=this.object3D.transform.localPosition.clone(),this._cPosition=this._position.clone(),this._target=this._camera.lookTarget.clone(),this._cTarget=this._target.clone(),this._spherical.setCoords(this._position.x-this._target.x,this._position.y-this._target.y,this._position.z-this._target.z),this._camera.lookAt(this._cPosition,this._cTarget,I.UP),this.addEventListener()}onEnable(){this.addEventListener()}onDisable(){this.removeEventListener()}onUpdate(){let e=this._isPanning?1:this.smooth,t=!1;this._cPosition.equals(this.object3D.transform.localPosition)||(this._position.copyFrom(this.object3D.transform.localPosition),e=1,t=!0),this._cTarget.equals(this._target)||(this._cTarget.copyFrom(this._target),e=1,t=!0),t?this._spherical.setCoords(this._position.x-this._target.x,this._position.y-this._target.y,this._position.z-this._target.z):!this._isMouseDown&&this.autoRotate&&(this._spherical.theta-=this.autoRotateSpeed*Math.PI/180,this.updateCamera());let i=(this._position.x-this._cPosition.x)/e,n=(this._position.y-this._cPosition.y)/e,s=(this._position.z-this._cPosition.z)/e;this._cPosition.x=Math.abs(i)>1e-10?this._cPosition.x+i:this._position.x,this._cPosition.y=Math.abs(n)>1e-10?this._cPosition.y+n:this._position.y,this._cPosition.z=Math.abs(s)>1e-10?this._cPosition.z+s:this._position.z,this._camera.lookAt(this._cPosition,this._cTarget,I.UP)}onWheel(e){e.deltaY=vt(e.deltaY,-this._spherical.radius,this._spherical.radius),this._spherical.radius+=e.deltaY*this.zoomFactor,this._spherical.radius=vt(this._spherical.radius,this.minDistance,this.maxDistance),this.updateCamera()}onPointerDown(e){this._isMouseDown=!0,this._lastMouseX=e.mouseX,this._lastMouseY=e.mouseY,e.mouseCode===2&&(this._isPanning=!0)}onPointerMove(e){if(!this._isMouseDown||!this.enable)return;let t=e.mouseX,i=e.mouseY;if(e.mouseCode===0&&this._lastMouseX>0&&this._lastMouseY>0){const n=-(t-this._lastMouseX)*this.rotateFactor,s=(i-this._lastMouseY)*this.rotateFactor;this._spherical.theta+=n*Math.PI/180,this._spherical.phi-=s*Math.PI/180,this._spherical.phi=vt(this._spherical.phi,this.minPolarAngle,this.maxPolarAngle),this.updateCamera()}else e.mouseCode===2&&(Mg.mulScale(this.object3D.transform.up,e.movementY*this.panFactor*this._camera.aspect,I.HELP_1),this._target.y+=I.HELP_1.y,Mg.mulScale(this.object3D.transform.right,-e.movementX*this.panFactor,I.HELP_1),this._target.x-=I.HELP_1.x,this._target.z-=I.HELP_1.z,this._cTarget.copyFrom(this._target),this.updateCamera());this._lastMouseX=t,this._lastMouseY=i}onPointerUp(e){this._isMouseDown=!1,e.mouseCode===2&&(this._isPanning=!1)}onPointerLeave(){this._isMouseDown=!1,this._isPanning=!1}updateCamera(){this._spherical.makeSafe();let e=this._spherical.getCoords();this._position.set(e.x+this._target.x,e.y+this._target.y,e.z+this._target.z)}addEventListener(){K.inputSystem.addEventListener(mA.POINTER_WHEEL,this.onWheel,this),K.inputSystem.addEventListener(mA.POINTER_DOWN,this.onPointerDown,this),K.inputSystem.addEventListener(mA.POINTER_MOVE,this.onPointerMove,this),K.inputSystem.addEventListener(mA.POINTER_UP,this.onPointerUp,this),K.inputSystem.addEventListener(mA.POINTER_OUT,this.onPointerLeave,this)}removeEventListener(){K.inputSystem.removeEventListener(mA.POINTER_WHEEL,this.onWheel,this),K.inputSystem.removeEventListener(mA.POINTER_DOWN,this.onPointerDown,this),K.inputSystem.removeEventListener(mA.POINTER_MOVE,this.onPointerMove,this),K.inputSystem.removeEventListener(mA.POINTER_UP,this.onPointerUp,this),K.inputSystem.removeEventListener(mA.POINTER_OUT,this.onPointerLeave,this)}}class QI{constructor(A=1,e=0,t=0){a(this,"radius");a(this,"phi");a(this,"theta");a(this,"coords");return this.radius=A,this.phi=e,this.theta=t,this.coords=new I,this}set(A,e,t){return this.radius=A,this.phi=e,this.theta=t,this}makeSafe(){return this.phi=Math.max(2e-4,Math.min(Math.PI-2e-4,this.phi)),this}setFromVector3(A){return this.setCoords(A.x,A.y,A.z)}setCoords(A,e,t){return this.radius=Math.sqrt(A*A+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(A,t),this.phi=Math.acos(vt(e/this.radius,-1,1))),this}getCoords(){const A=Math.sin(this.phi)*this.radius;return this.coords.x=A*Math.sin(this.theta),this.coords.y=Math.cos(this.phi)*this.radius,this.coords.z=A*Math.cos(this.theta),this.coords}}var Na=(r=>(r[r.NORMAL=0]="NORMAL",r[r.DOWN=1]="DOWN",r[r.OVER=2]="OVER",r[r.DISABLE=3]="DISABLE",r))(Na||{});let HI=Math.PI,Rg=HI*2;class Po{constructor(A=1,e=0,t=0,i=1,n=0,s=0){a(this,"a");a(this,"b");a(this,"c");a(this,"d");a(this,"tx");a(this,"ty");this.a=A,this.b=e,this.c=t,this.d=i,this.tx=n,this.ty=s}clone(){return new Po(this.a,this.b,this.c,this.d,this.tx,this.ty)}concat(A){let e=this.a,t=this.c,i=this.tx;this.a=e*A.a+this.b*A.c,this.b=e*A.b+this.b*A.d,this.c=t*A.a+this.d*A.c,this.d=t*A.b+this.d*A.d,this.tx=i*A.a+this.ty*A.c+A.tx,this.ty=i*A.b+this.ty*A.d+A.ty}copyFrom(A){return this.a=A.a,this.b=A.b,this.c=A.c,this.d=A.d,this.tx=A.tx,this.ty=A.ty,this}identity(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this}invert(){this._invertInto(this)}rotate(A){if(A=+A,A!==0){A=A*Ie;let e=Math.cos(A),t=Math.sin(A),i=this.a,n=this.b,s=this.c,o=this.d,u=this.tx,l=this.ty;this.a=i*e-n*t,this.b=i*t+n*e,this.c=s*e-o*t,this.d=s*t+o*e,this.tx=u*e-l*t,this.ty=u*t+l*e}}scale(A,e){A!==1&&(this.a*=A,this.c*=A,this.tx*=A),e!==1&&(this.b*=e,this.d*=e,this.ty*=e)}setTo(A,e,t,i,n,s){return this.a=A,this.b=e,this.c=t,this.d=i,this.tx=n,this.ty=s,this}transformPoint(A,e,t){let i=this.a*A+this.c*e+this.tx,n=this.b*A+this.d*e+this.ty;return t?(t.setTo(i,n,0,1),t):new I(i,n,0,1)}setTranslate(A,e){this.tx=A,this.ty=e}translate(A,e){this.tx+=A,this.ty+=e}mul(A){let e=this,t=A,i=e.a,n=e.b,s=e.c,o=e.d,u=e.tx,l=e.ty,c=t.a,h=t.b,d=t.c,f=t.d,p=t.tx,y=t.ty;h!==0||d!==0?(this.a=i*c+n*d,this.b=i*h+n*f,this.c=s*c+o*d,this.d=s*h+o*f,this.tx=c*u+d*l+p,this.ty=h*u+f*l+y):(this.a=i*c,this.b=n*f,this.c=s*c,this.d=o*f,this.tx=c*u+p,this.ty=f*l+y)}equals(A){return this.a==A.a&&this.b==A.b&&this.c==A.c&&this.d==A.d&&this.tx==A.tx&&this.ty==A.ty}prepend(A,e,t,i,n,s){let o=this.tx;if(A!=1||e!=0||t!=0||i!=1){let u=this.a,l=this.c;this.a=u*A+this.b*t,this.b=u*e+this.b*i,this.c=l*A+this.d*t,this.d=l*e+this.d*i}return this.tx=o*A+this.ty*t+n,this.ty=o*e+this.ty*i+s,this}append(A){let e=this.a,t=this.b,i=this.c,n=this.d;return(A.a!=1||A.b!=0||A.c!=0||A.d!=1)&&(this.a=A.a*e+A.b*i,this.b=A.a*t+A.b*n,this.c=A.c*e+A.d*i,this.d=A.c*t+A.d*n),this.tx=A.tx*e+A.ty*i+this.tx,this.ty=A.tx*t+A.ty*n+this.ty,this}deltaTransformPoint(A){let e=this,t=e.a*A.x+e.c*A.y,i=e.b*A.x+e.d*A.y;return new I(t,i)}toString(){return"(a="+this.a+", b="+this.b+", c="+this.c+", d="+this.d+", tx="+this.tx+", ty="+this.ty+")"}createBox(A,e,t=0,i=0,n=0){let s=this;if(t!==0){t=t*Ie;let o=Math.cos(t),u=Math.sin(t);s.a=o*A,s.b=u*e,s.c=-u*A,s.d=o*e}else s.a=A,s.b=0,s.c=0,s.d=e;s.tx=i,s.ty=n}createGradientBox(A,e,t=0,i=0,n=0){this.createBox(A/1638.4,e/1638.4,t,i+A/2,n+e/2)}_invertInto(A){let e=this.a,t=this.b,i=this.c,n=this.d,s=this.tx,o=this.ty;if(t==0&&i==0){A.b=A.c=0,e==0||n==0?A.a=A.d=A.tx=A.ty=0:(e=A.a=1/e,n=A.d=1/n,A.tx=-e*s,A.ty=-n*o);return}let u=e*n-t*i;if(u==0){A.identity();return}u=1/u;let l=A.a=n*u;t=A.b=-t*u,i=A.c=-i*u,n=A.d=e*u,A.tx=-(l*s+i*o),A.ty=-(t*s+n*o)}getScaleX(){let A=this;if(A.a==1&&A.b==0)return 1;let e=Math.sqrt(A.a*A.a+A.b*A.b);return this.getDeterminant()<0?-e:e}getScaleY(){let A=this;if(A.c==0&&A.d==1)return 1;let e=Math.sqrt(A.c*A.c+A.d*A.d);return this.getDeterminant()<0?-e:e}getSkewX(){return Math.atan2(this.d,this.c)-Math.PI/2}getSkewY(){return Math.atan2(this.b,this.a)}updateScaleAndRotation(A,e,t,i){if((t==0||t==Rg)&&(i==0||i==Rg)){this.a=A,this.b=this.c=0,this.d=e;return}t=t*Ie,i=i*Ie;let n=Math.cos(t),s=Math.sin(t);t==i?(this.a=n*A,this.b=s*A):(this.a=Math.cos(i)*A,this.b=Math.sin(i)*A),this.c=-s*e,this.d=n*e}preMultiplyInto(A,e){let t=A.a*this.a,i=0,n=0,s=A.d*this.d,o=A.tx*this.a+this.tx,u=A.ty*this.d+this.ty;(A.b!==0||A.c!==0||this.b!==0||this.c!==0)&&(t+=A.b*this.c,s+=A.c*this.b,i+=A.a*this.b+A.b*this.d,n+=A.c*this.a+A.d*this.c,o+=A.ty*this.c,u+=A.tx*this.b),e.a=t,e.b=i,e.c=n,e.d=s,e.tx=o,e.ty=u}$transformBounds(A){let e=this.a,t=this.b,i=this.c,n=this.d,s=this.tx,o=this.ty,u=A.x,l=A.y,c=u+A.width,h=l+A.height,d=e*u+i*l+s,f=t*u+n*l+o,p=e*c+i*l+s,y=t*c+n*l+o,_=e*c+i*h+s,g=t*c+n*h+o,m=e*u+i*h+s,E=t*u+n*h+o,w=0;d>p&&(w=d,d=p,p=w),_>m&&(w=_,_=m,m=w),A.x=Math.floor(d<_?d:_),A.width=Math.ceil((p>m?p:m)-A.x),f>y&&(w=f,f=y,y=w),g>E&&(w=g,g=E,E=w),A.y=Math.floor(f<g?f:g),A.height=Math.ceil((y>E?y:E)-A.y)}getDeterminant(){return this.a*this.d-this.b*this.c}}class a1 extends Jt{constructor(){super(...arguments);a(this,"isGUICanvas",!0);a(this,"index",0)}addChild(e){return this.object3D.addChild(e),this}removeChild(e){return this.object3D.removeChild(e),this}cloneTo(e){e.getOrAddComponent(a1).copyComponent(this)}copyComponent(e){return e.index=e.index,this}}var je=(r=>(r[r.NONE=0]="NONE",r[r.POSITION=1]="POSITION",r[r.SPRITE=2]="SPRITE",r[r.COLOR=4]="COLOR",r[r.MAX=7]="MAX",r))(je||{});class vh{constructor(A){a(this,"array");a(this,"buffer");this.buffer=new Bt(A,0),this.array=new Float32Array(this.buffer.memory.shareDataBuffer)}}class jI extends ti{constructor(e){super();a(this,"_attributeUV");a(this,"_attributeVIndex");a(this,"_faceIndexes");a(this,"_uvSize",2);a(this,"_vIndexSize",1);a(this,"_posAttribute");a(this,"_spriteAttribute");a(this,"_colorAttribute");a(this,"_onPositionChange",!0);a(this,"_onSpriteChange",!0);a(this,"_onColorChange",!0);a(this,"maxQuadCount");this.maxQuadCount=e}updateSubGeometry(e,t,i){let n=this.subGeometries[e];if(n){let s=n.lodLevels[0];s.indexStart=t,s.indexCount=i,s.index=e}else n=this.addSubGeometry({indexStart:t,indexCount:i,vertexStart:0,vertexCount:0,firstStart:0,index:e,topology:0});return n}resetSubGeometries(){for(let e of this.subGeometries){let t=e.lodLevels[0];t.indexStart=0,t.indexCount=0,t.index=0}}updateBounds(e,t){let i=Number.MAX_VALUE*.1;return e=new I(-i,-i,-i),t=new I(i,i,i),this.bounds.setFromMinMax(e,t),this}getPositionBuffer(){return this._onPositionChange&&(this._posAttribute.buffer.apply(),this._onPositionChange=!1),this._posAttribute.buffer}getSpriteBuffer(){return this._onSpriteChange&&(this._spriteAttribute.buffer.apply(),this._onSpriteChange=!1),this._spriteAttribute.buffer}getColorBuffer(){return this._onColorChange&&(this._colorAttribute.buffer.apply(),this._onColorChange=!1),this._colorAttribute.buffer}create(){this.createBuffer(),this.updateBounds();let e=this.maxQuadCount,t=[],i=[];for(let s=0;s<e;s++)t.push(...Vi.attUV);for(let s=0,o=this.maxQuadCount*Vi.vertexCount;s<o;s++)i[s]=s;this._attributeUV=new Float32Array(Vi.vertexCount*e*this._uvSize),this._attributeVIndex=new Float32Array(Vi.vertexCount*e*this._vIndexSize),this._attributeUV.set(t,0),this._attributeVIndex.set(i,0);let n=[];for(let s=0;s<e;s++)for(let o=0;o<Vi.indecies.length;o++){const u=Vi.indecies[o]+s*4;n.push(u)}return this._faceIndexes=new Uint32Array(e*6),this._faceIndexes.set(n,0),this.setIndices(this._faceIndexes),this.setAttribute(pA.uv,this._attributeUV),this.setAttribute(pA.vIndex,this._attributeVIndex),this.updateSubGeometry(0,0,this._faceIndexes.length),this}createBuffer(){let e=this.maxQuadCount;this._posAttribute=new vh(e*4),this._spriteAttribute=new vh(e*12),this._colorAttribute=new vh(e*4)}fillQuad(e,t){e.dirtyAttributes&je.POSITION&&this.fillQuadPosition(e,t),e.dirtyAttributes&je.COLOR&&this.fillQuadColor(e,t),e.dirtyAttributes&je.SPRITE&&this.fillQuadSprite(e,t)}fillQuadPosition(e,t){Pg.setXYZW(this._posAttribute.array,e.z,e.left,e.bottom,e.right,e.top),this._onPositionChange=!0}fillQuadColor(e,t){let i=e.color,n=this._colorAttribute.array;Pg.setXYZW(n,e.z,i.r,i.g,i.b,i.a),this._onColorChange=!0}fillQuadSprite(e,t){let i=e.sprite,n=0,s=0;i.isSliced&&e.imageType==uc.Sliced&&(n=i.trimSize.x,n=(t.width-(i.offsetSize.z-i.trimSize.x))/n,s=i.trimSize.y,s=(t.height-(i.offsetSize.w-i.trimSize.y))/s);let o=i.guiTexture.dynamicId,u=i.uvRec,l=i.uvBorder,c=this._spriteAttribute.array,h=12*e.z;c[h+0]=u.x,c[h+1]=u.y,c[h+2]=u.z,c[h+3]=u.w,c[h+4]=l.x,c[h+5]=l.y,c[h+6]=l.z,c[h+7]=l.w,c[h+8]=n,c[h+9]=s,c[h+10]=o,c[h+11]=e.visible?1:0,this._onSpriteChange=!0}}class WI{static set(A,e,t,i,...n){let s=e*i+t;for(let o=0,u=n.length;o<u;o++)A[s+o]=n[o]}}class Pg extends WI{static setXYZW(A,e,t,i,n,s){this.set(A,e,0,4,t,i,n,s)}static setXYZ(A,e,t,i,n){this.set(A,e,0,4,t,i,n)}static setZ(A,e,t){this.set(A,e,3,4,t)}}class Vi{}a(Vi,"vertexCount",4),a(Vi,"attUV",[0,0,1,0,1,1,0,1]),a(Vi,"indecies",[0,1,2,0,2,3]);class YI{constructor(){a(this,"_textureMap",new Map);a(this,"_textureList",[])}build(A,e,t){let i=e._geometry;i.resetSubGeometries();let n=-1,s=0,o=0,u=0,l=0,c=this._textureList,h=this._textureMap;function d(){u>0&&(e.updateDrawCallSegment(l,o,u),e._uiRenderer.materials[l].setTextures(c),h.clear(),c.length=0,l++,o+=u,u=0,s=0)}h.clear(),c.length=0;let f=[],p=e.quadMaxCount-1;for(let y of A){let _=y.needUpdateQuads;f.length=0;const g=this.collectQuads(y.object3D,f);for(let m of g){let E=m.sprite.guiTexture;if(h.has(E.staticId)||(s==7&&d(),h.set(E.staticId,E),E.dynamicId=s,c[s]=E.texture,s+=1),m.z=++n,u+=6,m.cacheTextureId!=E.dynamicId&&(m.dirtyAttributes=je.MAX,m.cacheTextureId=E.dynamicId),(_||t)&&(m.dirtyAttributes=je.MAX),m.dirtyAttributes&je.POSITION&&m.applyTransform(y),m.dirtyAttributes&&m.writeToGeometry(i,y),n==p)return d(),!0}}return d(),!1}collectQuads(A,e){e||(e=[]);let t=A.components.values();for(let i of t){let n=i;if(n.isUIShadow||!n.mainQuads)continue;let s=n.getShadowRender();s&&this.push(s.mainQuads,e),this.push(n.mainQuads,e)}return e}push(A,e){A&&A.length>0&&e.push(...A)}}const Ze=class Ze{static bindTextureArray(){let A="";for(let e=0;e<7;e++)A+=`
        @group(1) @binding(auto)
        var tex_${e}Sampler: sampler;
        @group(1) @binding(auto)
#if VideoTexture${e}
        var tex_${e}: texture_external;
#else
        var tex_${e}: texture_2d<f32>;
#endif
`;return A}static sampleTexture(A){return`
#if VideoTexture${A}
            let size = textureDimensions(tex_${A}).xy - 1;
            uv.y = 1.0 - uv.y;
            let iuv = vec2<i32>(uv * vec2<f32>(size));
            color = textureLoad(tex_${A}, iuv) ;
#else
            color = textureSampleLevel(tex_${A}, tex_${A}Sampler, uv, 0.0);
#endif        `}};a(Ze,"fs",`
        ${q3}
        ${Ze.bindTextureArray()}

        var<private> fragmentOutput: FragmentOutput;
        var<private> uvSlice: vec2<f32>;
        var<private> EPSILON: f32 = 0.001;
        
        fn sliceBorder(uv:f32, scale:f32, border:vec2<f32>) -> f32 
        {
            var s = uv * scale;
            if(s > border.x){
                s -= border.x;
                let centerPartMax = scale - border.x - border.y;
                let centerPartMin = 1.0 - border.x - border.y;
                if(s < centerPartMax){
                    s = border.x + (s / centerPartMax) * centerPartMin;
                }else{
                    s = s - centerPartMax + border.x + centerPartMin;
                }
            }
            return s;
        }

        fn isInsideAlpha(coord:vec2<f32>, rect:vec4<f32>, cornerRadius0:f32, fadeOutSize0:f32) -> f32
        {
            var minX = min(rect.x, rect.z);
            var maxX = max(rect.x, rect.z);
            var minY = min(rect.y, rect.w);
            var maxY = max(rect.y, rect.w);

            var cornerRadius = max(EPSILON, cornerRadius0);

            var center = vec2<f32>(minX + maxX, minY + maxY) * 0.5;
            var extents = vec2<f32>(maxX - minX, maxY - minY) * 0.5;

            cornerRadius = min(extents.x, cornerRadius);
            cornerRadius = min(extents.y, cornerRadius);
            
            var extendsMin = max(vec2<f32>(0.0), extents - cornerRadius);
            
            var toCenter = abs(coord - center);
            var outerDist = toCenter - extents;
            var innerDist = toCenter - extendsMin;
            
            if(innerDist.x <= 0 && innerDist.y <= 0){
                return 1.0;
            }else if(outerDist.x <= 0 && outerDist.y <= 0){
                var fadeOutPercent = clamp(fadeOutSize0, EPSILON, cornerRadius) / cornerRadius;
                innerDist = max(vec2(EPSILON), innerDist);
                var distance = min(cornerRadius, length(innerDist));
                var alpha = 1.0 - distance / cornerRadius;
                alpha /= fadeOutPercent;
                alpha = clamp(alpha, 0.0, 1.0);
                return alpha;
            }
            return 0.0;
        }
        
        @fragment
        fn FragMain( 
            @location(auto) vUV: vec2<f32>,
            @location(auto) vColor4: vec4<f32>,
            @location(auto) vLocalPos: vec2<f32>,
            @location(auto) vUvRec: vec4<f32>,
            @location(auto) vUvBorder: vec4<f32>,
            @location(auto) vUvSlice: vec2<f32>,
            @location(auto) vTextureID: f32,
            @builtin(front_facing) face: bool,
            @builtin(position) fragCoord : vec4<f32> 
        ) -> FragmentOutput {

            var scissorAlpha = 1.0;
#if SCISSOR_ENABLE
            scissorAlpha = isInsideAlpha(
                vLocalPos.xy,
                materialUniform.scissorRect,
                materialUniform.scissorCornerRadius,
                materialUniform.scissorFadeOutSize);

            if(scissorAlpha < EPSILON){
                discard;
            }
#endif

            uvSlice = vUvSlice;
            
            var uv:vec2<f32> = vUV;
            if(uvSlice.x > 1.0){ uv.x = sliceBorder(uv.x, uvSlice.x, vUvBorder.xz);}
            if(uvSlice.y > 1.0){ uv.y = sliceBorder(uv.y, uvSlice.y, vUvBorder.yw);}
            uv = uv * vUvRec.zw + vUvRec.xy;
            
            var color = vec4<f32>(0.0,0.0,0.0,1.0);
            let texId = i32(vTextureID + 0.5);
            
            var texSize = vec2<i32>(0);
            var coord = vec2<i32>(0);
            
            if(texId == 0){
                ${Ze.sampleTexture(0)}
            }else if(texId == 1){
                ${Ze.sampleTexture(1)}
            }else if(texId == 2){
                ${Ze.sampleTexture(2)}
            }else if(texId == 3){            
                ${Ze.sampleTexture(3)}
            }else if(texId == 4){            
                ${Ze.sampleTexture(4)}
            }else if(texId == 5){            
                ${Ze.sampleTexture(5)}
            }else if(texId == 6){            
                ${Ze.sampleTexture(6)}
            }
            color *= vColor4;
            color.a *= scissorAlpha;
            if(color.a < EPSILON)
            { 
                discard;
            }

            fragmentOutput.color = color;
            return fragmentOutput ;
        }`),a(Ze,"GUI_common_vs",`
        ${K3}
        ${$3}

        struct VertexSpriteBuffer {
            vUvRec: vec4<f32>,
            vUvBorder: vec4<f32>,
            vUvSlice: vec2<f32>,
            vTextureID: f32,
            vVisible: f32
        }
                
        struct MaterialUniform{
            scissorRect:vec4<f32>,

            screenSize:vec2<f32>,
            scissorCornerRadius:f32,
            scissorFadeOutSize:f32,

            pixelRatio:f32,
            v3:vec3<f32>
        }
        
        struct VertexOutput {
            @location(auto) vUV: vec2<f32>,
            @location(auto) vColor4: vec4<f32>,
            @location(auto) vLocalPos: vec2<f32>,
            @location(auto) vUvRec: vec4<f32>,
            @location(auto) vUvBorder: vec4<f32>,
            @location(auto) vUvSlice: vec2<f32>,
            @location(auto) vTextureID: f32,
            
            @builtin(position) member: vec4<f32>
        };
        
         struct VertexInput{
            @builtin(instance_index) index : u32,
            @location(auto) uv: vec2<f32>,
            @location(auto) vIndex: f32,
        }

        @group(2) @binding(0)
        var<uniform> materialUniform : MaterialUniform;
        @group(3) @binding(1)
        var<storage, read> vPositionBuffer: array<vec4<f32>>;
        @group(3) @binding(2)
        var<storage, read> vSpriteBuffer: array<VertexSpriteBuffer>;
        @group(3) @binding(3)
        var<storage, read> vColorBuffer: array<vec4<f32>>;

        var<private> vertexOut: VertexOutput ;

        //quad: (left, bottom, right, top)
        //index: 0~3
        fn getVertexXY(quad:vec4<f32>, index:u32) -> vec2<f32>
        {
            var ret = vec2<f32>(0.0);
            if(index == 0 || index == 3){
                ret.x = quad.x;
            }else{
                ret.x = quad.z;
            }
            if(index == 0 || index == 1){
                ret.y = quad.w;
            }else{
                ret.y = quad.y;
            }
            return ret;
        }
    `),a(Ze,"GUI_shader_view",`
        ${Ze.GUI_common_vs}

        @vertex
        fn VertMain( vertex:VertexInput ) -> VertexOutput {
            var _m = models.matrix[0];
            var _n = globalUniform.frame;
            
            let vertexIndex = vertex.vIndex;
            let quadIndex = u32(vertex.vIndex * 0.25);
            let vertexPosition = getVertexXY(vPositionBuffer[quadIndex], u32(vertexIndex) % 4u);
            var vSpriteData = vSpriteBuffer[quadIndex];
            
            var op = vec2<f32>(0.0001);
            let isValidVertex = vSpriteData.vVisible > 0.5;
            if(isValidVertex){
                op = 2.0 * vertexPosition * materialUniform.pixelRatio  / materialUniform.screenSize;
            }

            vertexOut.vLocalPos = vertexPosition;
            vertexOut.member = vec4<f32>(op.x, op.y, vertexIndex * 0.0001, 1.0);

            vertexOut.vUV = vec2<f32>(vertex.uv);
            vertexOut.vUvRec = vSpriteData.vUvRec;
            vertexOut.vUvBorder = vSpriteData.vUvBorder;
            vertexOut.vUvSlice = vSpriteData.vUvSlice;
            vertexOut.vTextureID = vSpriteData.vTextureID;
            vertexOut.vColor4 = vColorBuffer[quadIndex];

            return vertexOut;
         }
         
         ${Ze.fs}
        `),a(Ze,"GUI_shader_world",`
        ${Ze.GUI_common_vs}
        @vertex
        fn VertMain( vertex:VertexInput ) -> VertexOutput {
            var modelMatrix = models.matrix[vertex.index];
            
            let vertexIndex = vertex.vIndex;
            let quadIndex = u32(vertex.vIndex * 0.25);
            let vertexPosition = getVertexXY(vPositionBuffer[quadIndex], u32(vertexIndex) % 4u);
            var localPos = vec4<f32>(vertexPosition.xy, vertexIndex * 0.0001, 1.0) ;
            var op = vec4<f32>(0.0001);
            var vSpriteData = vSpriteBuffer[quadIndex];

            let isValidVertex = vSpriteData.vVisible > 0.5;
            if(isValidVertex){
                op = globalUniform.projMat * globalUniform.viewMat * modelMatrix * localPos ;
            }

            vertexOut.vLocalPos = vertexPosition;
            vertexOut.member = op;

            vertexOut.vUV = vec2<f32>(vertex.uv);
            vertexOut.vUvRec = vSpriteData.vUvRec;
            vertexOut.vUvBorder = vSpriteData.vUvBorder;
            vertexOut.vUvSlice = vSpriteData.vUvSlice;
            vertexOut.vTextureID = vSpriteData.vTextureID;
            vertexOut.vColor4 = vColorBuffer[quadIndex];

            return vertexOut;
         }
         
         ${Ze.fs}

`);this.scope!=null&&(i+=`,${n?`
`:" "}${t(this.scope,e)}`);const s=n&&this.scope===null;return`new Code(${n?`
`:""}${i}${s?`
`:""})`}}function Gy(r){return r!=null&&typeof r=="object"&&"$id"in r&&r.$id!=null&&"$ref"in r&&typeof r.$ref=="string"&&(!("$db"in r)||"$db"in r&&typeof r.$db=="string")}class Ti extends Zt{get _bsontype(){return"DBRef"}constructor(A,e,t,i){super();const n=A.split(".");n.length===2&&(t=n.shift(),A=n.shift()),this.collection=A,this.oid=e,this.db=t,this.fields=i||{}}get namespace(){return this.collection}set namespace(A){this.collection=A}toJSON(){const A=Object.assign({$ref:this.collection,$id:this.oid},this.fields);return this.db!=null&&(A.$db=this.db),A}toExtendedJSON(A){A=A||{};let e={$ref:this.collection,$id:this.oid};return A.legacy||(this.db&&(e.$db=this.db),e=Object.assign(e,this.fields)),e}static fromExtendedJSON(A){const e=Object.assign({},A);return delete e.$ref,delete e.$id,delete e.$db,new Ti(A.$ref,A.$id,A.$db,e)}inspect(A,e,t){t??(t=ur);const i=[t(this.namespace,e),t(this.oid,e),...this.db?[t(this.db,e)]:[],...Object.keys(this.fields).length>0?[t(this.fields,e)]:[]];return i[1]=t===ur?`new ObjectId(${i[1]})`:i[1],`new DBRef(${i.join(", ")})`}}let pr;try{pr=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}const Kg=65536,YT=1<<24,Eo=Kg*Kg,Vy=Eo*Eo,qg=Vy/2,Xg={},Jg={},$T=20,KT=/^(\+?0|(\+|-)?[1-9][0-9]*)$/;class q extends Zt{get _bsontype(){return"Long"}get __isLong__(){return!0}constructor(A=0,e,t){super(),typeof A=="bigint"?Object.assign(this,q.fromBigInt(A,!!e)):typeof A=="string"?Object.assign(this,q.fromString(A,!!e)):(this.low=A|0,this.high=e|0,this.unsigned=!!t)}static fromBits(A,e,t){return new q(A,e,t)}static fromInt(A,e){let t,i,n;return e?(A>>>=0,(n=0<=A&&A<256)&&(i=Jg[A],i)?i:(t=q.fromBits(A,(A|0)<0?-1:0,!0),n&&(Jg[A]=t),t)):(A|=0,(n=-128<=A&&A<128)&&(i=Xg[A],i)?i:(t=q.fromBits(A,A<0?-1:0,!1),n&&(Xg[A]=t),t))}static fromNumber(A,e){if(isNaN(A))return e?q.UZERO:q.ZERO;if(e){if(A<0)return q.UZERO;if(A>=Vy)return q.MAX_UNSIGNED_VALUE}else{if(A<=-qg)return q.MIN_VALUE;if(A+1>=qg)return q.MAX_VALUE}return A<0?q.fromNumber(-A,e).neg():q.fromBits(A%Eo|0,A/Eo|0,e)}static fromBigInt(A,e){return q.fromString(A.toString(),e)}static fromString(A,e,t){if(A.length===0)throw new cA("empty string");if(A==="NaN"||A==="Infinity"||A==="+Infinity"||A==="-Infinity")return q.ZERO;if(typeof e=="number"?(t=e,e=!1):e=!!e,t=t||10,t<2||36<t)throw new cA("radix");let i;if((i=A.indexOf("-"))>0)throw new cA("interior hyphen");if(i===0)return q.fromString(A.substring(1),e,t).neg();const n=q.fromNumber(Math.pow(t,8));let s=q.ZERO;for(let o=0;o<A.length;o+=8){const u=Math.min(8,A.length-o),l=parseInt(A.substring(o,o+u),t);if(u<8){const c=q.fromNumber(Math.pow(t,u));s=s.mul(c).add(q.fromNumber(l))}else s=s.mul(n),s=s.add(q.fromNumber(l))}return s.unsigned=e,s}static fromBytes(A,e,t){return t?q.fromBytesLE(A,e):q.fromBytesBE(A,e)}static fromBytesLE(A,e){return new q(A[0]|A[1]<<8|A[2]<<16|A[3]<<24,A[4]|A[5]<<8|A[6]<<16|A[7]<<24,e)}static fromBytesBE(A,e){return new q(A[4]<<24|A[5]<<16|A[6]<<8|A[7],A[0]<<24|A[1]<<16|A[2]<<8|A[3],e)}static isLong(A){return A!=null&&typeof A=="object"&&"__isLong__"in A&&A.__isLong__===!0}static fromValue(A,e){return typeof A=="number"?q.fromNumber(A,e):typeof A=="string"?q.fromString(A,e):q.fromBits(A.low,A.high,typeof e=="boolean"?e:A.unsigned)}add(A){q.isLong(A)||(A=q.fromValue(A));const e=this.high>>>16,t=this.high&65535,i=this.low>>>16,n=this.low&65535,s=A.high>>>16,o=A.high&65535,u=A.low>>>16,l=A.low&65535;let c=0,h=0,d=0,f=0;return f+=n+l,d+=f>>>16,f&=65535,d+=i+u,h+=d>>>16,d&=65535,h+=t+o,c+=h>>>16,h&=65535,c+=e+s,c&=65535,q.fromBits(d<<16|f,c<<16|h,this.unsigned)}and(A){return q.isLong(A)||(A=q.fromValue(A)),q.fromBits(this.low&A.low,this.high&A.high,this.unsigned)}compare(A){if(q.isLong(A)||(A=q.fromValue(A)),this.eq(A))return 0;const e=this.isNegative(),t=A.isNegative();return e&&!t?-1:!e&&t?1:this.unsigned?A.high>>>0>this.high>>>0||A.high===this.high&&A.low>>>0>this.low>>>0?-1:1:this.sub(A).isNegative()?-1:1}comp(A){return this.compare(A)}divide(A){if(q.isLong(A)||(A=q.fromValue(A)),A.isZero())throw new cA("division by zero");if(pr){if(!this.unsigned&&this.high===-2147483648&&A.low===-1&&A.high===-1)return this;const n=(this.unsigned?pr.div_u:pr.div_s)(this.low,this.high,A.low,A.high);return q.fromBits(n,pr.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?q.UZERO:q.ZERO;let e,t,i;if(this.unsigned){if(A.unsigned||(A=A.toUnsigned()),A.gt(this))return q.UZERO;if(A.gt(this.shru(1)))return q.UONE;i=q.UZERO}else{if(this.eq(q.MIN_VALUE))return A.eq(q.ONE)||A.eq(q.NEG_ONE)?q.MIN_VALUE:A.eq(q.MIN_VALUE)?q.ONE:(e=this.shr(1).div(A).shl(1),e.eq(q.ZERO)?A.isNegative()?q.ONE:q.NEG_ONE:(t=this.sub(A.mul(e)),i=e.add(t.div(A)),i));if(A.eq(q.MIN_VALUE))return this.unsigned?q.UZERO:q.ZERO;if(this.isNegative())return A.isNegative()?this.neg().div(A.neg()):this.neg().div(A).neg();if(A.isNegative())return this.div(A.neg()).neg();i=q.ZERO}for(t=this;t.gte(A);){e=Math.max(1,Math.floor(t.toNumber()/A.toNumber()));const n=Math.ceil(Math.log(e)/Math.LN2),s=n<=48?1:Math.pow(2,n-48);let o=q.fromNumber(e),u=o.mul(A);for(;u.isNegative()||u.gt(t);)e-=s,o=q.fromNumber(e,this.unsigned),u=o.mul(A);o.isZero()&&(o=q.ONE),i=i.add(o),t=t.sub(u)}return i}div(A){return this.divide(A)}equals(A){return q.isLong(A)||(A=q.fromValue(A)),this.unsigned!==A.unsigned&&this.high>>>31===1&&A.high>>>31===1?!1:this.high===A.high&&this.low===A.low}eq(A){return this.equals(A)}getHighBits(){return this.high}getHighBitsUnsigned(){return this.high>>>0}getLowBits(){return this.low}getLowBitsUnsigned(){return this.low>>>0}getNumBitsAbs(){if(this.isNegative())return this.eq(q.MIN_VALUE)?64:this.neg().getNumBitsAbs();const A=this.high!==0?this.high:this.low;let e;for(e=31;e>0&&!(A&1<<e);e--);return this.high!==0?e+33:e+1}greaterThan(A){return this.comp(A)>0}gt(A){return this.greaterThan(A)}greaterThanOrEqual(A){return this.comp(A)>=0}gte(A){return this.greaterThanOrEqual(A)}ge(A){return this.greaterThanOrEqual(A)}isEven(){return(this.low&1)===0}isNegative(){return!this.unsigned&&this.high<0}isOdd(){return(this.low&1)===1}isPositive(){return this.unsigned||this.high>=0}isZero(){return this.high===0&&this.low===0}lessThan(A){return this.comp(A)<0}lt(A){return this.lessThan(A)}lessThanOrEqual(A){return this.comp(A)<=0}lte(A){return this.lessThanOrEqual(A)}modulo(A){if(q.isLong(A)||(A=q.fromValue(A)),pr){const e=(this.unsigned?pr.rem_u:pr.rem_s)(this.low,this.high,A.low,A.high);return q.fromBits(e,pr.get_high(),this.unsigned)}return this.sub(this.div(A).mul(A))}mod(A){return this.modulo(A)}rem(A){return this.modulo(A)}multiply(A){if(this.isZero())return q.ZERO;if(q.isLong(A)||(A=q.fromValue(A)),pr){const p=pr.mul(this.low,this.high,A.low,A.high);return q.fromBits(p,pr.get_high(),this.unsigned)}if(A.isZero())return q.ZERO;if(this.eq(q.MIN_VALUE))return A.isOdd()?q.MIN_VALUE:q.ZERO;if(A.eq(q.MIN_VALUE))return this.isOdd()?q.MIN_VALUE:q.ZERO;if(this.isNegative())return A.isNegative()?this.neg().mul(A.neg()):this.neg().mul(A).neg();if(A.isNegative())return this.mul(A.neg()).neg();if(this.lt(q.TWO_PWR_24)&&A.lt(q.TWO_PWR_24))return q.fromNumber(this.toNumber()*A.toNumber(),this.unsigned);const e=this.high>>>16,t=this.high&65535,i=this.low>>>16,n=this.low&65535,s=A.high>>>16,o=A.high&65535,u=A.low>>>16,l=A.low&65535;let c=0,h=0,d=0,f=0;return f+=n*l,d+=f>>>16,f&=65535,d+=i*l,h+=d>>>16,d&=65535,d+=n*u,h+=d>>>16,d&=65535,h+=t*l,c+=h>>>16,h&=65535,h+=i*u,c+=h>>>16,h&=65535,h+=n*o,c+=h>>>16,h&=65535,c+=e*l+t*u+i*o+n*s,c&=65535,q.fromBits(d<<16|f,c<<16|h,this.unsigned)}mul(A){return this.multiply(A)}negate(){return!this.unsigned&&this.eq(q.MIN_VALUE)?q.MIN_VALUE:this.not().add(q.ONE)}neg(){return this.negate()}not(){return q.fromBits(~this.low,~this.high,this.unsigned)}notEquals(A){return!this.equals(A)}neq(A){return this.notEquals(A)}ne(A){return this.notEquals(A)}or(A){return q.isLong(A)||(A=q.fromValue(A)),q.fromBits(this.low|A.low,this.high|A.high,this.unsigned)}shiftLeft(A){return q.isLong(A)&&(A=A.toInt()),(A&=63)===0?this:A<32?q.fromBits(this.low<<A,this.high<<A|this.low>>>32-A,this.unsigned):q.fromBits(0,this.low<<A-32,this.unsigned)}shl(A){return this.shiftLeft(A)}shiftRight(A){return q.isLong(A)&&(A=A.toInt()),(A&=63)===0?this:A<32?q.fromBits(this.low>>>A|this.high<<32-A,this.high>>A,this.unsigned):q.fromBits(this.high>>A-32,this.high>=0?0:-1,this.unsigned)}shr(A){return this.shiftRight(A)}shiftRightUnsigned(A){if(q.isLong(A)&&(A=A.toInt()),A&=63,A===0)return this;{const e=this.high;if(A<32){const t=this.low;return q.fromBits(t>>>A|e<<32-A,e>>>A,this.unsigned)}else return A===32?q.fromBits(e,0,this.unsigned):q.fromBits(e>>>A-32,0,this.unsigned)}}shr_u(A){return this.shiftRightUnsigned(A)}shru(A){return this.shiftRightUnsigned(A)}subtract(A){return q.isLong(A)||(A=q.fromValue(A)),this.add(A.neg())}sub(A){return this.subtract(A)}toInt(){return this.unsigned?this.low>>>0:this.low}toNumber(){return this.unsigned?(this.high>>>0)*Eo+(this.low>>>0):this.high*Eo+(this.low>>>0)}toBigInt(){return BigInt(this.toString())}toBytes(A){return A?this.toBytesLE():this.toBytesBE()}toBytesLE(){const A=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,A&255,A>>>8&255,A>>>16&255,A>>>24]}toBytesBE(){const A=this.high,e=this.low;return[A>>>24,A>>>16&255,A>>>8&255,A&255,e>>>24,e>>>16&255,e>>>8&255,e&255]}toSigned(){return this.unsigned?q.fromBits(this.low,this.high,!1):this}toString(A){if(A=A||10,A<2||36<A)throw new cA("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(q.MIN_VALUE)){const n=q.fromNumber(A),s=this.div(n),o=s.mul(n).sub(this);return s.toString(A)+o.toInt().toString(A)}else return"-"+this.neg().toString(A);const e=q.fromNumber(Math.pow(A,6),this.unsigned);let t=this,i="";for(;;){const n=t.div(e);let o=(t.sub(n.mul(e)).toInt()>>>0).toString(A);if(t=n,t.isZero())return o+i;for(;o.length<6;)o="0"+o;i=""+o+i}}toUnsigned(){return this.unsigned?this:q.fromBits(this.low,this.high,!0)}xor(A){return q.isLong(A)||(A=q.fromValue(A)),q.fromBits(this.low^A.low,this.high^A.high,this.unsigned)}eqz(){return this.isZero()}le(A){return this.lessThanOrEqual(A)}toExtendedJSON(A){return A&&A.relaxed?this.toNumber():{$numberLong:this.toString()}}static fromExtendedJSON(A,e){const{useBigInt64:t=!1,relaxed:i=!0}={...e};if(A.$numberLong.length>$T)throw new cA("$numberLong string is too long");if(!KT.test(A.$numberLong))throw new cA(`$numberLong string "${A.$numberLong}" is in an invalid format`);if(t){const s=BigInt(A.$numberLong);return BigInt.asIntN(64,s)}const n=q.fromString(A.$numberLong);return i?n.toNumber():n}inspect(A,e,t){t??(t=ur);const i=t(this.toString(),e),n=this.unsigned?`, ${t(this.unsigned,e)}`:"";return`new Long(${i}${n})`}}q.TWO_PWR_24=q.fromInt(YT);q.MAX_UNSIGNED_VALUE=q.fromBits(-1,-1,!0);q.ZERO=q.fromInt(0);q.UZERO=q.fromInt(0,!0);q.ONE=q.fromInt(1);q.UONE=q.fromInt(1,!0);q.NEG_ONE=q.fromInt(-1);q.MAX_VALUE=q.fromBits(-1,2147483647,!1);q.MIN_VALUE=q.fromBits(0,-2147483648,!1);const qT=/^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/,XT=/^(\+|-)?(Infinity|inf)$/i,JT=/^(\+|-)?NaN$/i,oo=6111,Ea=-6176,Zg=6176,A2=34,Dh=oA.fromNumberArray([124,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse()),e2=oA.fromNumberArray([248,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse()),t2=oA.fromNumberArray([120,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0].reverse()),ZT=/^([-+])?(\d+)?$/,AD=31,r2=16383,eD=30,tD=31;function i2(r){return!isNaN(parseInt(r,10))}function rD(r){const A=q.fromNumber(1e9);let e=q.fromNumber(0);if(!r.parts[0]&&!r.parts[1]&&!r.parts[2]&&!r.parts[3])return{quotient:r,rem:e};for(let t=0;t<=3;t++)e=e.shiftLeft(32),e=e.add(new q(r.parts[t],0)),r.parts[t]=e.div(A).low,e=e.modulo(A);return{quotient:r,rem:e}}function iD(r,A){if(!r&&!A)return{high:q.fromNumber(0),low:q.fromNumber(0)};const e=r.shiftRightUnsigned(32),t=new q(r.getLowBits(),0),i=A.shiftRightUnsigned(32),n=new q(A.getLowBits(),0);let s=e.multiply(i),o=e.multiply(n);const u=t.multiply(i);let l=t.multiply(n);return s=s.add(o.shiftRightUnsigned(32)),o=new q(o.getLowBits(),0).add(u).add(l.shiftRightUnsigned(32)),s=s.add(o.shiftRightUnsigned(32)),l=o.shiftLeft(32).add(new q(l.getLowBits(),0)),{high:s,low:l}}function nD(r,A){const e=r.high>>>0,t=A.high>>>0;if(e<t)return!0;if(e===t){const i=r.low>>>0,n=A.low>>>0;if(i<n)return!0}return!1}function Ur(r,A){throw new cA(`"${r}" is not a valid Decimal128 string - ${A}`)}class Ct extends Zt{get _bsontype(){return"Decimal128"}constructor(A){if(super(),typeof A=="string")this.bytes=Ct.fromString(A).bytes;else if(ws(A)){if(A.byteLength!==16)throw new cA("Decimal128 must take a Buffer of 16 bytes");this.bytes=A}else throw new cA("Decimal128 must take a Buffer or string")}static fromString(A){return Ct._fromString(A,{allowRounding:!1})}static fromStringWithRounding(A){return Ct._fromString(A,{allowRounding:!0})}static _fromString(A,e){let t=!1,i=!1,n=!1,s=!1,o=0,u=0,l=0,c=0,h=0;const d=[0];let f=0,p=0,y=0,_=0,g=new q(0,0),m=new q(0,0),E=0,w=0;if(A.length>=7e3)throw new cA(""+A+" not a valid Decimal128 string");const L=A.match(qT),T=A.match(XT),R=A.match(JT);if(!L&&!T&&!R||A.length===0)throw new cA(""+A+" not a valid Decimal128 string");if(L){const M=L[2],b=L[4],v=L[5],C=L[6];b&&C===void 0&&Ur(A,"missing exponent power"),b&&M===void 0&&Ur(A,"missing exponent base"),b===void 0&&(v||C)&&Ur(A,"missing e before exponent")}if((A[w]==="+"||A[w]==="-")&&(i=!0,t=A[w++]==="-"),!i2(A[w])&&A[w]!=="."){if(A[w]==="i"||A[w]==="I")return new Ct(t?e2:t2);if(A[w]==="N")return new Ct(Dh)}for(;i2(A[w])||A[w]===".";){if(A[w]==="."){n&&Ur(A,"contains multiple periods"),n=!0,w=w+1;continue}f<A2&&(A[w]!=="0"||s)&&(s||(h=u),s=!0,d[p++]=parseInt(A[w],10),f=f+1),s&&(l=l+1),n&&(c=c+1),u=u+1,w=w+1}if(n&&!u)throw new cA(""+A+" not a valid Decimal128 string");if(A[w]==="e"||A[w]==="E"){const M=A.substr(++w).match(ZT);if(!M||!M[2])return new Ct(Dh);_=parseInt(M[0],10),w=w+M[0].length}if(A[w])return new Ct(Dh);if(!f)d[0]=0,l=1,f=1,o=0;else if(y=f-1,o=l,o!==1)for(;A[h+o-1+Number(i)+Number(n)]==="0";)o=o-1;for(_<=c&&c>_+16384?_=Ea:_=_-c;_>oo;){if(y=y+1,y>=A2){if(o===0){_=oo;break}Ur(A,"overflow")}_=_-1}if(e.allowRounding){for(;_<Ea||f<l;){if(y===0&&o<f){_=Ea,o=0;break}if(f<l?l=l-1:y=y-1,_<oo)_=_+1;else{if(d.join("").match(/^0+$/)){_=oo;break}Ur(A,"overflow")}}if(y+1<o){let M=u;n&&(h=h+1,M=M+1),i&&(h=h+1,M=M+1);const b=parseInt(A[h+y+1],10);let v=0;if(b>=5&&(v=1,b===5)){v=d[y]%2===1?1:0;for(let C=h+y+2;C<M;C++)if(parseInt(A[C],10)){v=1;break}}if(v){let C=y;for(;C>=0&&++d[C]>9;C--)if(d[C]=0,C===0)if(_<oo)_=_+1,d[C]=1;else return new Ct(t?e2:t2)}}}else{for(;_<Ea||f<l;){if(y===0){if(o===0){_=Ea;break}Ur(A,"exponent underflow")}f<l?(A[l-1+Number(i)+Number(n)]!=="0"&&o!==0&&Ur(A,"inexact rounding"),l=l-1):(d[y]!==0&&Ur(A,"inexact rounding"),y=y-1),_<oo?_=_+1:Ur(A,"overflow")}y+1<o&&(n&&(h=h+1),i&&(h=h+1),parseInt(A[h+y+1],10)!==0&&Ur(A,"inexact rounding"))}if(g=q.fromNumber(0),m=q.fromNumber(0),o===0)g=q.fromNumber(0),m=q.fromNumber(0);else if(y<17){let M=0;for(m=q.fromNumber(d[M++]),g=new q(0,0);M<=y;M++)m=m.multiply(q.fromNumber(10)),m=m.add(q.fromNumber(d[M]))}else{let M=0;for(g=q.fromNumber(d[M++]);M<=y-17;M++)g=g.multiply(q.fromNumber(10)),g=g.add(q.fromNumber(d[M]));for(m=q.fromNumber(d[M++]);M<=y;M++)m=m.multiply(q.fromNumber(10)),m=m.add(q.fromNumber(d[M]))}const P=iD(g,q.fromString("100000000000000000"));P.low=P.low.add(m),nD(P.low,m)&&(P.high=P.high.add(q.fromNumber(1))),E=_+Zg;const F={low:q.fromNumber(0),high:q.fromNumber(0)};P.high.shiftRightUnsigned(49).and(q.fromNumber(1)).equals(q.fromNumber(1))?(F.high=F.high.or(q.fromNumber(3).shiftLeft(61)),F.high=F.high.or(q.fromNumber(E).and(q.fromNumber(16383).shiftLeft(47))),F.high=F.high.or(P.high.and(q.fromNumber(0x7fffffffffff)))):(F.high=F.high.or(q.fromNumber(E&16383).shiftLeft(49)),F.high=F.high.or(P.high.and(q.fromNumber(562949953421311)))),F.low=P.low,t&&(F.high=F.high.or(q.fromString("9223372036854775808")));const H=oA.allocate(16);return w=0,H[w++]=F.low.low&255,H[w++]=F.low.low>>8&255,H[w++]=F.low.low>>16&255,H[w++]=F.low.low>>24&255,H[w++]=F.low.high&255,H[w++]=F.low.high>>8&255,H[w++]=F.low.high>>16&255,H[w++]=F.low.high>>24&255,H[w++]=F.high.low&255,H[w++]=F.high.low>>8&255,H[w++]=F.high.low>>16&255,H[w++]=F.high.low>>24&255,H[w++]=F.high.high&255,H[w++]=F.high.high>>8&255,H[w++]=F.high.high>>16&255,H[w++]=F.high.high>>24&255,new Ct(H)}toString(){let A,e=0;const t=new Array(36);for(let w=0;w<t.length;w++)t[w]=0;let i=0,n=!1,s,o={parts:[0,0,0,0]},u,l;const c=[];i=0;const h=this.bytes,d=h[i++]|h[i++]<<8|h[i++]<<16|h[i++]<<24,f=h[i++]|h[i++]<<8|h[i++]<<16|h[i++]<<24,p=h[i++]|h[i++]<<8|h[i++]<<16|h[i++]<<24,y=h[i++]|h[i++]<<8|h[i++]<<16|h[i++]<<24;i=0,{low:new q(d,f),high:new q(p,y)}.high.lessThan(q.ZERO)&&c.push("-");const g=y>>26&AD;if(g>>3===3){if(g===eD)return c.join("")+"Infinity";if(g===tD)return"NaN";A=y>>15&r2,s=8+(y>>14&1)}else s=y>>14&7,A=y>>17&r2;const m=A-Zg;if(o.parts[0]=(y&16383)+((s&15)<<14),o.parts[1]=p,o.parts[2]=f,o.parts[3]=d,o.parts[0]===0&&o.parts[1]===0&&o.parts[2]===0&&o.parts[3]===0)n=!0;else for(l=3;l>=0;l--){let w=0;const L=rD(o);if(o=L.quotient,w=L.rem.low,!!w)for(u=8;u>=0;u--)t[l*9+u]=w%10,w=Math.floor(w/10)}if(n)e=1,t[i]=0;else for(e=36;!t[i];)e=e-1,i=i+1;const E=e-1+m;if(E>=34||E<=-7||m>0){if(e>34)return c.push("0"),m>0?c.push(`E+${m}`):m<0&&c.push(`E${m}`),c.join("");c.push(`${t[i++]}`),e=e-1,e&&c.push(".");for(let w=0;w<e;w++)c.push(`${t[i++]}`);c.push("E"),E>0?c.push(`+${E}`):c.push(`${E}`)}else if(m>=0)for(let w=0;w<e;w++)c.push(`${t[i++]}`);else{let w=e+m;if(w>0)for(let L=0;L<w;L++)c.push(`${t[i++]}`);else c.push("0");for(c.push(".");w++<0;)c.push("0");for(let L=0;L<e-Math.max(w-1,0);L++)c.push(`${t[i++]}`)}return c.join("")}toJSON(){return{$numberDecimal:this.toString()}}toExtendedJSON(){return{$numberDecimal:this.toString()}}static fromExtendedJSON(A){return Ct.fromString(A.$numberDecimal)}inspect(A,e,t){return t??(t=ur),`new Decimal128(${t(this.toString(),e)})`}}class qn extends Zt{get _bsontype(){return"Double"}constructor(A){super(),A instanceof Number&&(A=A.valueOf()),this.value=+A}valueOf(){return this.value}toJSON(){return this.value}toString(A){return this.value.toString(A)}toExtendedJSON(A){return A&&(A.legacy||A.relaxed&&isFinite(this.value))?this.value:Object.is(Math.sign(this.value),-0)?{$numberDouble:"-0.0"}:{$numberDouble:Number.isInteger(this.value)?this.value.toFixed(1):this.value.toString()}}static fromExtendedJSON(A,e){const t=parseFloat(A.$numberDouble);return e&&e.relaxed?t:new qn(t)}inspect(A,e,t){return t??(t=ur),`new Double(${t(this.value,e)})`}}class Xn extends Zt{get _bsontype(){return"Int32"}constructor(A){super(),A instanceof Number&&(A=A.valueOf()),this.value=+A|0}valueOf(){return this.value}toString(A){return this.value.toString(A)}toJSON(){return this.value}toExtendedJSON(A){return A&&(A.relaxed||A.legacy)?this.value:{$numberInt:this.value.toString()}}static fromExtendedJSON(A,e){return e&&e.relaxed?parseInt(A.$numberInt,10):new Xn(A.$numberInt)}inspect(A,e,t){return t??(t=ur),`new Int32(${t(this.value,e)})`}}class to extends Zt{get _bsontype(){return"MaxKey"}toExtendedJSON(){return{$maxKey:1}}static fromExtendedJSON(){return new to}inspect(){return"new MaxKey()"}}class ro extends Zt{get _bsontype(){return"MinKey"}toExtendedJSON(){return{$minKey:1}}static fromExtendedJSON(){return new ro}inspect(){return"new MinKey()"}}const sD=new RegExp("^[0-9a-fA-F]{24}$");let rs=null;const Ri=Symbol("id");class we extends Zt{get _bsontype(){return"ObjectId"}constructor(A){super();let e;if(typeof A=="object"&&A&&"id"in A){if(typeof A.id!="string"&&!ArrayBuffer.isView(A.id))throw new cA("Argument passed in must have an id that is of type string or Buffer");"toHexString"in A&&typeof A.toHexString=="function"?e=oA.fromHex(A.toHexString()):e=A.id}else e=A;if(e==null||typeof e=="number")this[Ri]=we.generate(typeof e=="number"?e:void 0);else if(ArrayBuffer.isView(e)&&e.byteLength===12)this[Ri]=oA.toLocalBufferType(e);else if(typeof e=="string")if(e.length===24&&sD.test(e))this[Ri]=oA.fromHex(e);else throw new cA("input must be a 24 character hex string, 12 byte Uint8Array, or an integer");else throw new cA("Argument passed in does not match the accepted types");we.cacheHexString&&(this.__id=oA.toHex(this.id))}get id(){return this[Ri]}set id(A){this[Ri]=A,we.cacheHexString&&(this.__id=oA.toHex(A))}toHexString(){if(we.cacheHexString&&this.__id)return this.__id;const A=oA.toHex(this.id);return we.cacheHexString&&!this.__id&&(this.__id=A),A}static getInc(){return we.index=(we.index+1)%16777215}static generate(A){typeof A!="number"&&(A=Math.floor(Date.now()/1e3));const e=we.getInc(),t=oA.allocate(12);return Il.fromUint8Array(t).setUint32(0,A,!1),rs===null&&(rs=oA.randomBytes(5)),t[4]=rs[0],t[5]=rs[1],t[6]=rs[2],t[7]=rs[3],t[8]=rs[4],t[11]=e&255,t[10]=e>>8&255,t[9]=e>>16&255,t}toString(A){return A==="base64"?oA.toBase64(this.id):A==="hex"?this.toHexString():this.toHexString()}toJSON(){return this.toHexString()}static is(A){return A!=null&&typeof A=="object"&&"_bsontype"in A&&A._bsontype==="ObjectId"}equals(A){if(A==null)return!1;if(we.is(A))return this[Ri][11]===A[Ri][11]&&oA.equals(this[Ri],A[Ri]);if(typeof A=="string")return A.toLowerCase()===this.toHexString();if(typeof A=="object"&&typeof A.toHexString=="function"){const e=A.toHexString(),t=this.toHexString();return typeof e=="string"&&e.toLowerCase()===t}return!1}getTimestamp(){const A=new Date,e=Il.fromUint8Array(this.id).getUint32(0,!1);return A.setTime(Math.floor(e)*1e3),A}static createPk(){return new we}static createFromTime(A){const e=oA.fromNumberArray([0,0,0,0,0,0,0,0,0,0,0,0]);return Il.fromUint8Array(e).setUint32(0,A,!1),new we(e)}static createFromHexString(A){if((A==null?void 0:A.length)!==24)throw new cA("hex string must be 24 characters");return new we(oA.fromHex(A))}static createFromBase64(A){if((A==null?void 0:A.length)!==16)throw new cA("base64 string must be 16 characters");return new we(oA.fromBase64(A))}static isValid(A){if(A==null)return!1;try{return new we(A),!0}catch{return!1}}toExtendedJSON(){return this.toHexString?{$oid:this.toHexString()}:{$oid:this.toString("hex")}}static fromExtendedJSON(A){return new we(A.$oid)}inspect(A,e,t){return t??(t=ur),`new ObjectId(${t(this.toHexString(),e)})`}}we.index=Math.floor(Math.random()*16777215);function Bl(r,A,e){let t=5;if(Array.isArray(r))for(let i=0;i<r.length;i++)t+=n2(i.toString(),r[i],A,!0,e);else{typeof(r==null?void 0:r.toBSON)=="function"&&(r=r.toBSON());for(const i of Object.keys(r))t+=n2(i,r[i],A,!1,e)}return t}function n2(r,A,e=!1,t=!1,i=!1){switch(typeof(A==null?void 0:A.toBSON)=="function"&&(A=A.toBSON()),typeof A){case"string":return 1+oA.utf8ByteLength(r)+1+4+oA.utf8ByteLength(A)+1;case"number":return Math.floor(A)===A&&A>=Iy&&A<=by&&A>=d1&&A<=h1?(r!=null?oA.utf8ByteLength(r)+1:0)+5:(r!=null?oA.utf8ByteLength(r)+1:0)+9;case"undefined":return t||!i?(r!=null?oA.utf8ByteLength(r)+1:0)+1:0;case"boolean":return(r!=null?oA.utf8ByteLength(r)+1:0)+2;case"object":if(A!=null&&typeof A._bsontype=="string"&&A[Symbol.for("@@mdb.bson.version")]!==Rs)throw new Ps;if(A==null||A._bsontype==="MinKey"||A._bsontype==="MaxKey")return(r!=null?oA.utf8ByteLength(r)+1:0)+1;if(A._bsontype==="ObjectId")return(r!=null?oA.utf8ByteLength(r)+1:0)+13;if(A instanceof Date||yo(A))return(r!=null?oA.utf8ByteLength(r)+1:0)+9;if(ArrayBuffer.isView(A)||A instanceof ArrayBuffer||S0(A))return(r!=null?oA.utf8ByteLength(r)+1:0)+6+A.byteLength;if(A._bsontype==="Long"||A._bsontype==="Double"||A._bsontype==="Timestamp")return(r!=null?oA.utf8ByteLength(r)+1:0)+9;if(A._bsontype==="Decimal128")return(r!=null?oA.utf8ByteLength(r)+1:0)+17;if(A._bsontype==="Code")return A.scope!=null&&Object.keys(A.scope).length>0?(r!=null?oA.utf8ByteLength(r)+1:0)+1+4+4+oA.utf8ByteLength(A.code.toString())+1+Bl(A.scope,e,i):(r!=null?oA.utf8ByteLength(r)+1:0)+1+4+oA.utf8ByteLength(A.code.toString())+1;if(A._bsontype==="Binary"){const n=A;return n.sub_type===KA.SUBTYPE_BYTE_ARRAY?(r!=null?oA.utf8ByteLength(r)+1:0)+(n.position+1+4+1+4):(r!=null?oA.utf8ByteLength(r)+1:0)+(n.position+1+4+1)}else{if(A._bsontype==="Symbol")return(r!=null?oA.utf8ByteLength(r)+1:0)+oA.utf8ByteLength(A.value)+4+1+1;if(A._bsontype==="DBRef"){const n=Object.assign({$ref:A.collection,$id:A.oid},A.fields);return A.db!=null&&(n.$db=A.db),(r!=null?oA.utf8ByteLength(r)+1:0)+1+Bl(n,e,i)}else return A instanceof RegExp||mo(A)?(r!=null?oA.utf8ByteLength(r)+1:0)+1+oA.utf8ByteLength(A.source)+1+(A.global?1:0)+(A.ignoreCase?1:0)+(A.multiline?1:0)+1:A._bsontype==="BSONRegExp"?(r!=null?oA.utf8ByteLength(r)+1:0)+1+oA.utf8ByteLength(A.pattern)+1+oA.utf8ByteLength(A.options)+1:(r!=null?oA.utf8ByteLength(r)+1:0)+Bl(A,e,i)+1}case"function":if(e)return(r!=null?oA.utf8ByteLength(r)+1:0)+1+4+oA.utf8ByteLength(A.toString())+1}return 0}function oD(r){return r.split("").sort().join("")}class Tr extends Zt{get _bsontype(){return"BSONRegExp"}constructor(A,e){if(super(),this.pattern=A,this.options=oD(e??""),this.pattern.indexOf("\0")!==-1)throw new cA(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);if(this.options.indexOf("\0")!==-1)throw new cA(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);for(let t=0;t<this.options.length;t++)if(!(this.options[t]==="i"||this.options[t]==="m"||this.options[t]==="x"||this.options[t]==="l"||this.options[t]==="s"||this.options[t]==="u"))throw new cA(`The regular expression option [${this.options[t]}] is not supported`)}static parseOptions(A){return A?A.split("").sort().join(""):""}toExtendedJSON(A){return A=A||{},A.legacy?{$regex:this.pattern,$options:this.options}:{$regularExpression:{pattern:this.pattern,options:this.options}}}static fromExtendedJSON(A){if("$regex"in A)if(typeof A.$regex!="string"){if(A.$regex._bsontype==="BSONRegExp")return A}else return new Tr(A.$regex,Tr.parseOptions(A.$options));if("$regularExpression"in A)return new Tr(A.$regularExpression.pattern,Tr.parseOptions(A.$regularExpression.options));throw new cA(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify(A)}`)}inspect(A,e,t){const i=IT(e)??(o=>o);t??(t=ur);const n=i(t(this.pattern),"regexp"),s=i(t(this.options),"regexp");return`new BSONRegExp(${n}, ${s})`}}class io extends Zt{get _bsontype(){return"BSONSymbol"}constructor(A){super(),this.value=A}valueOf(){return this.value}toString(){return this.value}toJSON(){return this.value}toExtendedJSON(){return{$symbol:this.value}}static fromExtendedJSON(A){return new io(A.$symbol)}inspect(A,e,t){return t??(t=ur),`new BSONSymbol(${t(this.value,e)})`}}const aD=q;class vr extends aD{get _bsontype(){return"Timestamp"}constructor(A){if(A==null)super(0,0,!0);else if(typeof A=="bigint")super(A,!0);else if(q.isLong(A))super(A.low,A.high,!0);else if(typeof A=="object"&&"t"in A&&"i"in A){if(typeof A.t!="number"&&(typeof A.t!="object"||A.t._bsontype!=="Int32"))throw new cA("Timestamp constructed from { t, i } must provide t as a number");if(typeof A.i!="number"&&(typeof A.i!="object"||A.i._bsontype!=="Int32"))throw new cA("Timestamp constructed from { t, i } must provide i as a number");const e=Number(A.t),t=Number(A.i);if(e<0||Number.isNaN(e))throw new cA("Timestamp constructed from { t, i } must provide a positive t");if(t<0||Number.isNaN(t))throw new cA("Timestamp constructed from { t, i } must provide a positive i");if(e>4294967295)throw new cA("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");if(t>4294967295)throw new cA("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");super(t,e,!0)}else throw new cA("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }")}toJSON(){return{$timestamp:this.toString()}}static fromInt(A){return new vr(q.fromInt(A,!0))}static fromNumber(A){return new vr(q.fromNumber(A,!0))}static fromBits(A,e){return new vr({i:A,t:e})}static fromString(A,e){return new vr(q.fromString(A,!0,e))}toExtendedJSON(){return{$timestamp:{t:this.high>>>0,i:this.low>>>0}}}static fromExtendedJSON(A){const e=q.isLong(A.$timestamp.i)?A.$timestamp.i.getLowBitsUnsigned():A.$timestamp.i,t=q.isLong(A.$timestamp.t)?A.$timestamp.t.getLowBitsUnsigned():A.$timestamp.t;return new vr({t,i:e})}inspect(A,e,t){t??(t=ur);const i=t(this.high>>>0,e),n=t(this.low>>>0,e);return`new Timestamp({ t: ${i}, i: ${n} })`}}vr.MAX_VALUE=q.MAX_UNSIGNED_VALUE;const uD=q.fromNumber(by),lD=q.fromNumber(Iy);function Qy(r,A,e){A=A??{};const t=A&&A.index?A.index:0,i=r[t]|r[t+1]<<8|r[t+2]<<16|r[t+3]<<24;if(i<5)throw new cA(`bson size must be >= 5, is ${i}`);if(A.allowObjectSmallerThanBufferSize&&r.length<i)throw new cA(`buffer length ${r.length} must be >= bson size ${i}`);if(!A.allowObjectSmallerThanBufferSize&&r.length!==i)throw new cA(`buffer length ${r.length} must === bson size ${i}`);if(i+t>r.byteLength)throw new cA(`(bson size ${i} + options.index ${t} must be <= buffer length ${r.byteLength})`);if(r[t+i-1]!==0)throw new cA("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");return Tl(r,t,A,e)}const cD=/^\$ref$|^\$id$|^\$db$/;function Tl(r,A,e,t=!1){const i=e.fieldsAsRaw==null?null:e.fieldsAsRaw,n=e.raw==null?!1:e.raw,s=typeof e.bsonRegExp=="boolean"?e.bsonRegExp:!1,o=e.promoteBuffers??!1,u=e.promoteLongs??!0,l=e.promoteValues??!0,c=e.useBigInt64??!1;if(c&&!l)throw new cA("Must either request bigint or Long for int64 deserialization");if(c&&!u)throw new cA("Must either request bigint or Long for int64 deserialization");const h=e.validation==null?{utf8:!0}:e.validation;let d=!0,f;const p=new Set,y=h.utf8;if(typeof y=="boolean")f=y;else{d=!1;const R=Object.keys(y).map(function(P){return y[P]});if(R.length===0)throw new cA("UTF-8 validation setting cannot be empty");if(typeof R[0]!="boolean")throw new cA("Invalid UTF-8 validation option, must specify boolean values");if(f=R[0],!R.every(P=>P===f))throw new cA("Invalid UTF-8 validation option - keys must be all true or all false")}if(!d)for(const R of Object.keys(y))p.add(R);const _=A;if(r.length<5)throw new cA("corrupt bson message < 5 bytes long");const g=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(g<5||g>r.length)throw new cA("corrupt bson message");const m=t?[]:{};let E=0;const w=!1;let L=t?!1:null;const T=new DataView(r.buffer,r.byteOffset,r.byteLength);for(;!w;){const R=r[A++];if(R===0)break;let P=A;for(;r[P]!==0&&P<r.length;)P++;if(P>=r.byteLength)throw new cA("Bad BSON Document: illegal CString");const F=t?E++:oA.toUTF8(r,A,P,!1);let H=!0;d||p.has(F)?H=f:H=!f,L!==!1&&F[0]==="$"&&(L=cD.test(F));let M;if(A=P+1,R===By){const b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(b<=0||b>r.length-A||r[A+b-1]!==0)throw new cA("bad string length in bson");M=oA.toUTF8(r,A,A+b-1,H),A=A+b}else if(R===Dy){const b=oA.allocate(12);b.set(r.subarray(A,A+12)),M=new we(b),A=A+12}else if(R===No&&l===!1)M=new Xn(r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24);else if(R===No)M=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;else if(R===fc&&l===!1)M=new qn(T.getFloat64(A,!0)),A=A+8;else if(R===fc)M=T.getFloat64(A,!0),A=A+8;else if(R===Oy){const b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24,v=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;M=new Date(new q(b,v).toNumber())}else if(R===xy){if(r[A]!==0&&r[A]!==1)throw new cA("illegal boolean type value");M=r[A++]===1}else if(R===w0){const b=A,v=r[A]|r[A+1]<<8|r[A+2]<<16|r[A+3]<<24;if(v<=0||v>r.length-A)throw new cA("bad embedded document length in bson");if(n)M=r.slice(A,A+v);else{let C=e;d||(C={...e,validation:{utf8:H}}),M=Tl(r,b,C,!1)}A=A+v}else if(R===Ty){const b=A,v=r[A]|r[A+1]<<8|r[A+2]<<16|r[A+3]<<24;let C=e;const x=A+v;if(i&&i[F]&&(C={...e,raw:!0}),d||(C={...C,validation:{utf8:H}}),M=Tl(r,b,C,!0),A=A+v,r[A-1]!==0)throw new cA("invalid array terminator byte");if(A!==x)throw new cA("corrupted array bson")}else if(R===BT)M=void 0;else if(R===I0)M=null;else if(R===T0){const b=Il.fromUint8Array(r.subarray(A,A+8)),v=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24,C=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24,x=new q(v,C);c?M=b.getBigInt64(0,!0):u&&l===!0?M=x.lessThanOrEqual(uD)&&x.greaterThanOrEqual(lD)?x.toNumber():x:M=x}else if(R===Fy){const b=oA.allocate(16);b.set(r.subarray(A,A+16),0),A=A+16,M=new Ct(b)}else if(R===b0){let b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;const v=b,C=r[A++];if(b<0)throw new cA("Negative binary type element size found");if(b>r.byteLength)throw new cA("Binary type size larger than document size");if(r.slice!=null){if(C===KA.SUBTYPE_BYTE_ARRAY){if(b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24,b<0)throw new cA("Negative binary type element size found for subtype 0x02");if(b>v-4)throw new cA("Binary type with subtype 0x02 contains too long binary size");if(b<v-4)throw new cA("Binary type with subtype 0x02 contains too short binary size")}o&&l?M=oA.toLocalBufferType(r.slice(A,A+b)):(M=new KA(r.slice(A,A+b),C),C===gc&&rt.isValid(M)&&(M=M.toUUID()))}else{const x=oA.allocate(b);if(C===KA.SUBTYPE_BYTE_ARRAY){if(b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24,b<0)throw new cA("Negative binary type element size found for subtype 0x02");if(b>v-4)throw new cA("Binary type with subtype 0x02 contains too long binary size");if(b<v-4)throw new cA("Binary type with subtype 0x02 contains too short binary size")}for(P=0;P<b;P++)x[P]=r[A+P];o&&l?M=x:(M=new KA(r.slice(A,A+b),C),C===gc&&rt.isValid(M)&&(M=M.toUUID()))}A=A+b}else if(R===pc&&s===!1){for(P=A;r[P]!==0&&P<r.length;)P++;if(P>=r.length)throw new cA("Bad BSON Document: illegal CString");const b=oA.toUTF8(r,A,P,!1);for(A=P+1,P=A;r[P]!==0&&P<r.length;)P++;if(P>=r.length)throw new cA("Bad BSON Document: illegal CString");const v=oA.toUTF8(r,A,P,!1);A=P+1;const C=new Array(v.length);for(P=0;P<v.length;P++)switch(v[P]){case"m":C[P]="m";break;case"s":C[P]="g";break;case"i":C[P]="i";break}M=new RegExp(b,C.join(""))}else if(R===pc&&s===!0){for(P=A;r[P]!==0&&P<r.length;)P++;if(P>=r.length)throw new cA("Bad BSON Document: illegal CString");const b=oA.toUTF8(r,A,P,!1);for(A=P+1,P=A;r[P]!==0&&P<r.length;)P++;if(P>=r.length)throw new cA("Bad BSON Document: illegal CString");const v=oA.toUTF8(r,A,P,!1);A=P+1,M=new Tr(b,v)}else if(R===My){const b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(b<=0||b>r.length-A||r[A+b-1]!==0)throw new cA("bad string length in bson");const v=oA.toUTF8(r,A,A+b-1,H);M=l?v:new io(v),A=A+b}else if(R===Py){const b=r[A++]+r[A++]*256+r[A++]*65536+r[A++]*16777216,v=r[A++]+r[A++]*256+r[A++]*65536+r[A++]*(1<<24);M=new vr({i:b,t:v})}else if(R===Ny)M=new ro;else if(R===Ly)M=new to;else if(R===B0){const b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(b<=0||b>r.length-A||r[A+b-1]!==0)throw new cA("bad string length in bson");const v=oA.toUTF8(r,A,A+b-1,H);M=new rn(v),A=A+b}else if(R===Ry){const b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(b<13)throw new cA("code_w_scope total size shorter minimum expected length");const v=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(v<=0||v>r.length-A||r[A+v-1]!==0)throw new cA("bad string length in bson");const C=oA.toUTF8(r,A,A+v-1,H);A=A+v;const x=A,S=r[A]|r[A+1]<<8|r[A+2]<<16|r[A+3]<<24,B=Tl(r,x,e,!1);if(A=A+S,b<8+S+v)throw new cA("code_w_scope total size is too short, truncating scope");if(b>8+S+v)throw new cA("code_w_scope total size is too long, clips outer document");M=new rn(C,B)}else if(R===TT){const b=r[A++]|r[A++]<<8|r[A++]<<16|r[A++]<<24;if(b<=0||b>r.length-A||r[A+b-1]!==0)throw new cA("bad string length in bson");if(h!=null&&h.utf8&&!ky(r,A,A+b-1))throw new cA("Invalid UTF-8 string in BSON document");const v=oA.toUTF8(r,A,A+b-1,!1);A=A+b;const C=oA.allocate(12);C.set(r.subarray(A,A+12),0);const x=new we(C);A=A+12,M=new Ti(v,x)}else throw new cA(`Detected unknown BSON type ${R.toString(16)} for fieldname "${F}"`);F==="__proto__"?Object.defineProperty(m,F,{value:M,writable:!0,enumerable:!0,configurable:!0}):m[F]=M}if(g!==A-_)throw t?new cA("corrupt array bson"):new cA("corrupt object bson");if(!L)return m;if(Gy(m)){const R=Object.assign({},m);return delete R.$ref,delete R.$id,delete R.$db,new Ti(m.$ref,m.$id,m.$db,R)}return m}const yc=/\x00/,s2=new Set(["$db","$ref","$id","$clusterTime"]);function xh(r,A,e,t){r[t++]=By;const i=oA.encodeUTF8Into(r,A,t);t=t+i+1,r[t-1]=0;const n=oA.encodeUTF8Into(r,e,t+4);return r[t+3]=n+1>>24&255,r[t+2]=n+1>>16&255,r[t+1]=n+1>>8&255,r[t]=n+1&255,t=t+4+n,r[t++]=0,t}const Aa=new DataView(new ArrayBuffer(8),0,8),hD=new Uint8Array(Aa.buffer,0,4),Ec=new Uint8Array(Aa.buffer,0,8);function Oh(r,A,e,t){const n=!Object.is(e,-0)&&Number.isSafeInteger(e)&&e<=h1&&e>=d1?No:fc;n===No?Aa.setInt32(0,e,!0):Aa.setFloat64(0,e,!0);const s=n===No?hD:Ec;r[t++]=n;const o=oA.encodeUTF8Into(r,A,t);return t=t+o,r[t++]=0,r.set(s,t),t+=s.byteLength,t}function Mh(r,A,e,t){r[t++]=T0;const i=oA.encodeUTF8Into(r,A,t);return t+=i,r[t++]=0,Aa.setBigInt64(0,e,!0),r.set(Ec,t),t+=Ec.byteLength,t}function Ca(r,A,e,t){r[t++]=I0;const i=oA.encodeUTF8Into(r,A,t);return t=t+i,r[t++]=0,t}function Rh(r,A,e,t){r[t++]=xy;const i=oA.encodeUTF8Into(r,A,t);return t=t+i,r[t++]=0,r[t++]=e?1:0,t}function Ph(r,A,e,t){r[t++]=Oy;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=q.fromNumber(e.getTime()),s=n.getLowBits(),o=n.getHighBits();return r[t++]=s&255,r[t++]=s>>8&255,r[t++]=s>>16&255,r[t++]=s>>24&255,r[t++]=o&255,r[t++]=o>>8&255,r[t++]=o>>16&255,r[t++]=o>>24&255,t}function Fh(r,A,e,t){r[t++]=pc;const i=oA.encodeUTF8Into(r,A,t);if(t=t+i,r[t++]=0,e.source&&e.source.match(yc)!=null)throw new cA("value "+e.source+" must not contain null bytes");return t=t+oA.encodeUTF8Into(r,e.source,t),r[t++]=0,e.ignoreCase&&(r[t++]=105),e.global&&(r[t++]=115),e.multiline&&(r[t++]=109),r[t++]=0,t}function Nh(r,A,e,t){r[t++]=pc;const i=oA.encodeUTF8Into(r,A,t);if(t=t+i,r[t++]=0,e.pattern.match(yc)!=null)throw new cA("pattern "+e.pattern+" must not contain null bytes");t=t+oA.encodeUTF8Into(r,e.pattern,t),r[t++]=0;const n=e.options.split("").sort().join("");return t=t+oA.encodeUTF8Into(r,n,t),r[t++]=0,t}function Lh(r,A,e,t){e===null?r[t++]=I0:e._bsontype==="MinKey"?r[t++]=Ny:r[t++]=Ly;const i=oA.encodeUTF8Into(r,A,t);return t=t+i,r[t++]=0,t}function Uh(r,A,e,t){r[t++]=Dy;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=e.id;if(ws(n))for(let s=0;s<12;s++)r[t++]=n[s];else throw new cA("object ["+JSON.stringify(e)+"] is not a valid ObjectId");return t}function kh(r,A,e,t){r[t++]=b0;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=e.length;return r[t++]=n&255,r[t++]=n>>8&255,r[t++]=n>>16&255,r[t++]=n>>24&255,r[t++]=DT,r.set(e,t),t=t+n,t}function zh(r,A,e,t,i,n,s,o,u){if(u.has(e))throw new cA("Cannot convert circular structure to BSON");u.add(e),r[t++]=Array.isArray(e)?Ty:w0;const l=oA.encodeUTF8Into(r,A,t);t=t+l,r[t++]=0;const c=Cu(r,e,i,t,n+1,s,o,u);return u.delete(e),c}function Gh(r,A,e,t){r[t++]=Fy;const i=oA.encodeUTF8Into(r,A,t);return t=t+i,r[t++]=0,r.set(e.bytes.subarray(0,16),t),t+16}function Vh(r,A,e,t){r[t++]=e._bsontype==="Long"?T0:Py;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=e.getLowBits(),s=e.getHighBits();return r[t++]=n&255,r[t++]=n>>8&255,r[t++]=n>>16&255,r[t++]=n>>24&255,r[t++]=s&255,r[t++]=s>>8&255,r[t++]=s>>16&255,r[t++]=s>>24&255,t}function Qh(r,A,e,t){e=e.valueOf(),r[t++]=No;const i=oA.encodeUTF8Into(r,A,t);return t=t+i,r[t++]=0,r[t++]=e&255,r[t++]=e>>8&255,r[t++]=e>>16&255,r[t++]=e>>24&255,t}function Hh(r,A,e,t){r[t++]=fc;const i=oA.encodeUTF8Into(r,A,t);return t=t+i,r[t++]=0,Aa.setFloat64(0,e.value,!0),r.set(Ec,t),t=t+8,t}function jh(r,A,e,t){r[t++]=B0;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=e.toString(),s=oA.encodeUTF8Into(r,n,t+4)+1;return r[t]=s&255,r[t+1]=s>>8&255,r[t+2]=s>>16&255,r[t+3]=s>>24&255,t=t+4+s-1,r[t++]=0,t}function Wh(r,A,e,t,i=!1,n=0,s=!1,o=!0,u){if(e.scope&&typeof e.scope=="object"){r[t++]=Ry;const l=oA.encodeUTF8Into(r,A,t);t=t+l,r[t++]=0;let c=t;const h=e.code;t=t+4;const d=oA.encodeUTF8Into(r,h,t+4)+1;r[t]=d&255,r[t+1]=d>>8&255,r[t+2]=d>>16&255,r[t+3]=d>>24&255,r[t+4+d-1]=0,t=t+d+4;const f=Cu(r,e.scope,i,t,n+1,s,o,u);t=f-1;const p=f-c;r[c++]=p&255,r[c++]=p>>8&255,r[c++]=p>>16&255,r[c++]=p>>24&255,r[t++]=0}else{r[t++]=B0;const l=oA.encodeUTF8Into(r,A,t);t=t+l,r[t++]=0;const c=e.code.toString(),h=oA.encodeUTF8Into(r,c,t+4)+1;r[t]=h&255,r[t+1]=h>>8&255,r[t+2]=h>>16&255,r[t+3]=h>>24&255,t=t+4+h-1,r[t++]=0}return t}function Yh(r,A,e,t){r[t++]=b0;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=e.buffer;let s=e.position;return e.sub_type===KA.SUBTYPE_BYTE_ARRAY&&(s=s+4),r[t++]=s&255,r[t++]=s>>8&255,r[t++]=s>>16&255,r[t++]=s>>24&255,r[t++]=e.sub_type,e.sub_type===KA.SUBTYPE_BYTE_ARRAY&&(s=s-4,r[t++]=s&255,r[t++]=s>>8&255,r[t++]=s>>16&255,r[t++]=s>>24&255),r.set(n,t),t=t+e.position,t}function $h(r,A,e,t){r[t++]=My;const i=oA.encodeUTF8Into(r,A,t);t=t+i,r[t++]=0;const n=oA.encodeUTF8Into(r,e.value,t+4)+1;return r[t]=n&255,r[t+1]=n>>8&255,r[t+2]=n>>16&255,r[t+3]=n>>24&255,t=t+4+n-1,r[t++]=0,t}function Kh(r,A,e,t,i,n,s){r[t++]=w0;const o=oA.encodeUTF8Into(r,A,t);t=t+o,r[t++]=0;let u=t,l={$ref:e.collection||e.namespace,$id:e.oid};e.db!=null&&(l.$db=e.db),l=Object.assign(l,e.fields);const c=Cu(r,l,!1,t,i+1,n,!0,s),h=c-u;return r[u++]=h&255,r[u++]=h>>8&255,r[u++]=h>>16&255,r[u++]=h>>24&255,c}function Cu(r,A,e,t,i,n,s,o){if(o==null){if(A==null)return r[0]=5,r[1]=0,r[2]=0,r[3]=0,r[4]=0,5;if(Array.isArray(A))throw new cA("serialize does not support an array as the root input");if(typeof A!="object")throw new cA("serialize does not support non-object as the root input");if("_bsontype"in A&&typeof A._bsontype=="string")throw new cA("BSON types cannot be serialized as a document");if(yo(A)||mo(A)||ws(A)||S0(A))throw new cA("date, regexp, typedarray, and arraybuffer cannot be BSON documents");o=new Set}o.add(A);let u=t+4;if(Array.isArray(A))for(let c=0;c<A.length;c++){const h=`${c}`;let d=A[c];if(typeof(d==null?void 0:d.toBSON)=="function"&&(d=d.toBSON()),typeof d=="string")u=xh(r,h,d,u);else if(typeof d=="number")u=Oh(r,h,d,u);else if(typeof d=="bigint")u=Mh(r,h,d,u);else if(typeof d=="boolean")u=Rh(r,h,d,u);else if(d instanceof Date||yo(d))u=Ph(r,h,d,u);else if(d===void 0)u=Ca(r,h,d,u);else if(d===null)u=Ca(r,h,d,u);else if(ws(d))u=kh(r,h,d,u);else if(d instanceof RegExp||mo(d))u=Fh(r,h,d,u);else if(typeof d=="object"&&d._bsontype==null)u=zh(r,h,d,u,e,i,n,s,o);else{if(typeof d=="object"&&d[Symbol.for("@@mdb.bson.version")]!==Rs)throw new Ps;if(d._bsontype==="ObjectId")u=Uh(r,h,d,u);else if(d._bsontype==="Decimal128")u=Gh(r,h,d,u);else if(d._bsontype==="Long"||d._bsontype==="Timestamp")u=Vh(r,h,d,u);else if(d._bsontype==="Double")u=Hh(r,h,d,u);else if(typeof d=="function"&&n)u=jh(r,h,d,u);else if(d._bsontype==="Code")u=Wh(r,h,d,u,e,i,n,s,o);else if(d._bsontype==="Binary")u=Yh(r,h,d,u);else if(d._bsontype==="BSONSymbol")u=$h(r,h,d,u);else if(d._bsontype==="DBRef")u=Kh(r,h,d,u,i,n,o);else if(d._bsontype==="BSONRegExp")u=Nh(r,h,d,u);else if(d._bsontype==="Int32")u=Qh(r,h,d,u);else if(d._bsontype==="MinKey"||d._bsontype==="MaxKey")u=Lh(r,h,d,u);else if(typeof d._bsontype<"u")throw new cA(`Unrecognized or invalid _bsontype: ${String(d._bsontype)}`)}}else if(A instanceof Map||v0(A)){const c=A.entries();let h=!1;for(;!h;){const d=c.next();if(h=!!d.done,h)continue;const f=d.value[0];let p=d.value[1];typeof(p==null?void 0:p.toBSON)=="function"&&(p=p.toBSON());const y=typeof p;if(typeof f=="string"&&!s2.has(f)){if(f.match(yc)!=null)throw new cA("key "+f+" must not contain null bytes");if(e){if(f[0]==="$")throw new cA("key "+f+" must not start with '$'");if(~f.indexOf("."))throw new cA("key "+f+" must not contain '.'")}}if(y==="string")u=xh(r,f,p,u);else if(y==="number")u=Oh(r,f,p,u);else if(y==="bigint")u=Mh(r,f,p,u);else if(y==="boolean")u=Rh(r,f,p,u);else if(p instanceof Date||yo(p))u=Ph(r,f,p,u);else if(p===null||p===void 0&&s===!1)u=Ca(r,f,p,u);else if(ws(p))u=kh(r,f,p,u);else if(p instanceof RegExp||mo(p))u=Fh(r,f,p,u);else if(y==="object"&&p._bsontype==null)u=zh(r,f,p,u,e,i,n,s,o);else{if(typeof p=="object"&&p[Symbol.for("@@mdb.bson.version")]!==Rs)throw new Ps;if(p._bsontype==="ObjectId")u=Uh(r,f,p,u);else if(y==="object"&&p._bsontype==="Decimal128")u=Gh(r,f,p,u);else if(p._bsontype==="Long"||p._bsontype==="Timestamp")u=Vh(r,f,p,u);else if(p._bsontype==="Double")u=Hh(r,f,p,u);else if(p._bsontype==="Code")u=Wh(r,f,p,u,e,i,n,s,o);else if(typeof p=="function"&&n)u=jh(r,f,p,u);else if(p._bsontype==="Binary")u=Yh(r,f,p,u);else if(p._bsontype==="BSONSymbol")u=$h(r,f,p,u);else if(p._bsontype==="DBRef")u=Kh(r,f,p,u,i,n,o);else if(p._bsontype==="BSONRegExp")u=Nh(r,f,p,u);else if(p._bsontype==="Int32")u=Qh(r,f,p,u);else if(p._bsontype==="MinKey"||p._bsontype==="MaxKey")u=Lh(r,f,p,u);else if(typeof p._bsontype<"u")throw new cA(`Unrecognized or invalid _bsontype: ${String(p._bsontype)}`)}}}else{if(typeof(A==null?void 0:A.toBSON)=="function"&&(A=A.toBSON(),A!=null&&typeof A!="object"))throw new cA("toBSON function did not return an object");for(const c of Object.keys(A)){let h=A[c];typeof(h==null?void 0:h.toBSON)=="function"&&(h=h.toBSON());const d=typeof h;if(typeof c=="string"&&!s2.has(c)){if(c.match(yc)!=null)throw new cA("key "+c+" must not contain null bytes");if(e){if(c[0]==="$")throw new cA("key "+c+" must not start with '$'");if(~c.indexOf("."))throw new cA("key "+c+" must not contain '.'")}}if(d==="string")u=xh(r,c,h,u);else if(d==="number")u=Oh(r,c,h,u);else if(d==="bigint")u=Mh(r,c,h,u);else if(d==="boolean")u=Rh(r,c,h,u);else if(h instanceof Date||yo(h))u=Ph(r,c,h,u);else if(h===void 0)s===!1&&(u=Ca(r,c,h,u));else if(h===null)u=Ca(r,c,h,u);else if(ws(h))u=kh(r,c,h,u);else if(h instanceof RegExp||mo(h))u=Fh(r,c,h,u);else if(d==="object"&&h._bsontype==null)u=zh(r,c,h,u,e,i,n,s,o);else{if(typeof h=="object"&&h[Symbol.for("@@mdb.bson.version")]!==Rs)throw new Ps;if(h._bsontype==="ObjectId")u=Uh(r,c,h,u);else if(d==="object"&&h._bsontype==="Decimal128")u=Gh(r,c,h,u);else if(h._bsontype==="Long"||h._bsontype==="Timestamp")u=Vh(r,c,h,u);else if(h._bsontype==="Double")u=Hh(r,c,h,u);else if(h._bsontype==="Code")u=Wh(r,c,h,u,e,i,n,s,o);else if(typeof h=="function"&&n)u=jh(r,c,h,u);else if(h._bsontype==="Binary")u=Yh(r,c,h,u);else if(h._bsontype==="BSONSymbol")u=$h(r,c,h,u);else if(h._bsontype==="DBRef")u=Kh(r,c,h,u,i,n,o);else if(h._bsontype==="BSONRegExp")u=Nh(r,c,h,u);else if(h._bsontype==="Int32")u=Qh(r,c,h,u);else if(h._bsontype==="MinKey"||h._bsontype==="MaxKey")u=Lh(r,c,h,u);else if(typeof h._bsontype<"u")throw new cA(`Unrecognized or invalid _bsontype: ${String(h._bsontype)}`)}}}o.delete(A),r[u++]=0;const l=u-t;return r[t++]=l&255,r[t++]=l>>8&255,r[t++]=l>>16&255,r[t++]=l>>24&255,u}function dD(r){return r!=null&&typeof r=="object"&&"_bsontype"in r&&typeof r._bsontype=="string"}const fD={$oid:we,$binary:KA,$uuid:KA,$symbol:io,$numberInt:Xn,$numberDecimal:Ct,$numberDouble:qn,$numberLong:q,$minKey:ro,$maxKey:to,$regex:Tr,$regularExpression:Tr,$timestamp:vr};function Hy(r,A={}){if(typeof r=="number"){const t=r<=h1&&r>=d1,i=r<=vy&&r>=wy;if(A.relaxed||A.legacy)return r;if(Number.isInteger(r)&&!Object.is(r,-0)){if(t)return new Xn(r);if(i)return A.useBigInt64?BigInt(r):q.fromNumber(r)}return new qn(r)}if(r==null||typeof r!="object")return r;if(r.$undefined)return null;const e=Object.keys(r).filter(t=>t.startsWith("$")&&r[t]!=null);for(let t=0;t<e.length;t++){const i=fD[e[t]];if(i)return i.fromExtendedJSON(r,A)}if(r.$date!=null){const t=r.$date,i=new Date;if(A.legacy)if(typeof t=="number")i.setTime(t);else if(typeof t=="string")i.setTime(Date.parse(t));else if(typeof t=="bigint")i.setTime(Number(t));else throw new mc(`Unrecognized type for EJSON date: ${typeof t}`);else if(typeof t=="string")i.setTime(Date.parse(t));else if(q.isLong(t))i.setTime(t.toNumber());else if(typeof t=="number"&&A.relaxed)i.setTime(t);else if(typeof t=="bigint")i.setTime(Number(t));else throw new mc(`Unrecognized type for EJSON date: ${typeof t}`);return i}if(r.$code!=null){const t=Object.assign({},r);return r.$scope&&(t.$scope=Hy(r.$scope)),rn.fromExtendedJSON(r)}if(Gy(r)||r.$dbPointer){const t=r.$ref?r:r.$dbPointer;if(t instanceof Ti)return t;const i=Object.keys(t).filter(s=>s.startsWith("$"));let n=!0;if(i.forEach(s=>{["$ref","$id","$db"].indexOf(s)===-1&&(n=!1)}),n)return Ti.fromExtendedJSON(t)}return r}function pD(r,A){return r.map((e,t)=>{A.seenObjects.push({propertyName:`index ${t}`,obj:null});try{return Qi(e,A)}finally{A.seenObjects.pop()}})}function o2(r){const A=r.toISOString();return r.getUTCMilliseconds()!==0?A:A.slice(0,-5)+"Z"}function Qi(r,A){if(r instanceof Map||v0(r)){const e=Object.create(null);for(const[t,i]of r){if(typeof t!="string")throw new cA("Can only serialize maps with string keys");e[t]=i}return Qi(e,A)}if((typeof r=="object"||typeof r=="function")&&r!==null){const e=A.seenObjects.findIndex(t=>t.obj===r);if(e!==-1){const t=A.seenObjects.map(c=>c.propertyName),i=t.slice(0,e).map(c=>`${c} -> `).join(""),n=t[e],s=" -> "+t.slice(e+1,t.length-1).map(c=>`${c} -> `).join(""),o=t[t.length-1],u=" ".repeat(i.length+n.length/2),l="-".repeat(s.length+(n.length+o.length)/2-1);throw new cA(`Converting circular structure to EJSON:
    ${i}${n}${s}${o}
`)>-1&&(BA?xA=xA.split(`
`).map(function(ie){return"  "+ie}).join(`
`).slice(2):xA=`
`+xA.split(`
`).map(function(ie){return"   "+ie}).join(`
`))):xA=G.stylize("[Circular]","special")),P(bA)){if(BA&&vA.match(/^\d+$/))return xA;bA=JSON.stringify(""+vA),bA.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(bA=bA.slice(1,-1),bA=G.stylize(bA,"name")):(bA=bA.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),bA=G.stylize(bA,"string"))}return bA+": "+xA}function _(G,X,nA){var lA=G.reduce(function(vA,BA){return BA.indexOf(`
`)>=0,vA+BA.replace(/\u001b\[\d\d?m/g,"").length+1},0);return lA>60?nA[0]+(X===""?"":X+`
 `)+" "+G.join(`,
${r.toString("base64")}
-----END PRIVATE KEY-----