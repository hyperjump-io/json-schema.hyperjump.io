var _n=Array.isArray,cn=Array.prototype.indexOf,Jn=Array.from,Wn=Object.defineProperty,G=Object.getOwnPropertyDescriptor,vn=Object.getOwnPropertyDescriptors,hn=Object.prototype,pn=Array.prototype,Ct=Object.getPrototypeOf,Rt=Object.isExtensible;const Xn=()=>{};function Qn(t){return typeof(t==null?void 0:t.then)=="function"}function te(t){return t()}function Pt(t){for(var e=0;e<t.length;e++)t[e]()}const I=2,Ft=4,ut=8,mt=16,k=32,B=64,et=128,m=256,rt=512,w=1024,O=2048,P=4096,j=8192,ot=16384,dn=32768,Mt=65536,ne=1<<17,yn=1<<19,Lt=1<<20,yt=1<<21,K=Symbol("$state"),ee=Symbol("legacy props"),re=Symbol("");function qt(t){return t===this.v}function wn(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Yt(t){return!wn(t,this.v)}function En(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function gn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function mn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Tn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ae(){throw new Error("https://svelte.dev/e/hydration_failed")}function le(t){throw new Error("https://svelte.dev/e/lifecycle_legacy_only")}function se(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function An(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function xn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function bn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let _t=!1;function fe(){_t=!0}const ie=1,ue=2,oe=4,_e=8,ce=16,ve=1,he=2,pe=4,de=8,ye=16,we=1,Ee=2,In="[",Rn="[!",Dn="]",jt={},E=Symbol(),ge="http://www.w3.org/1999/xhtml";let p=null;function Dt(t){p=t}function me(t,e=!1,n){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};_t&&!e&&(p.l={s:null,u:null,r1:[],r2:At(!1)}),Pn(()=>{r.d=!0})}function Te(t){const e=p;if(e!==null){t!==void 0&&(e.x=t);const u=e.e;if(u!==null){var n=h,r=v;e.e=null;try{for(var a=0;a<u.length;a++){var l=u[a];st(l.effect),H(l.reaction),zt(l.fn)}}finally{st(n),H(r)}}p=e.p,e.m=!0}return t||{}}function ct(){return!_t||p!==null&&p.l===null}function Y(t){if(typeof t!="object"||t===null||K in t)return t;const e=Ct(t);if(e!==hn&&e!==pn)return t;var n=new Map,r=_n(t),a=N(0),l=v,u=i=>{var s=v;H(l);var f=i();return H(s),f};return r&&n.set("length",N(t.length)),new Proxy(t,{defineProperty(i,s,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&An();var _=n.get(s);return _===void 0?(_=u(()=>N(f.value)),n.set(s,_)):b(_,u(()=>Y(f.value))),!0},deleteProperty(i,s){var f=n.get(s);if(f===void 0)s in i&&n.set(s,u(()=>N(E)));else{if(r&&typeof s=="string"){var _=n.get("length"),o=Number(s);Number.isInteger(o)&&o<_.v&&b(_,o)}b(f,E),Ot(a)}return!0},get(i,s,f){var x;if(s===K)return t;var _=n.get(s),o=s in i;if(_===void 0&&(!o||(x=G(i,s))!=null&&x.writable)&&(_=u(()=>N(Y(o?i[s]:E))),n.set(s,_)),_!==void 0){var c=C(_);return c===E?void 0:c}return Reflect.get(i,s,f)},getOwnPropertyDescriptor(i,s){var f=Reflect.getOwnPropertyDescriptor(i,s);if(f&&"value"in f){var _=n.get(s);_&&(f.value=C(_))}else if(f===void 0){var o=n.get(s),c=o==null?void 0:o.v;if(o!==void 0&&c!==E)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return f},has(i,s){var c;if(s===K)return!0;var f=n.get(s),_=f!==void 0&&f.v!==E||Reflect.has(i,s);if(f!==void 0||h!==null&&(!_||(c=G(i,s))!=null&&c.writable)){f===void 0&&(f=u(()=>N(_?Y(i[s]):E)),n.set(s,f));var o=C(f);if(o===E)return!1}return _},set(i,s,f,_){var It;var o=n.get(s),c=s in i;if(r&&s==="length")for(var x=f;x<o.v;x+=1){var Q=n.get(x+"");Q!==void 0?b(Q,E):x in i&&(Q=u(()=>N(E)),n.set(x+"",Q))}o===void 0?(!c||(It=G(i,s))!=null&&It.writable)&&(o=u(()=>N(void 0)),b(o,u(()=>Y(f))),n.set(s,o)):(c=o.v!==E,b(o,u(()=>Y(f))));var tt=Reflect.getOwnPropertyDescriptor(i,s);if(tt!=null&&tt.set&&tt.set.call(_,f),!c){if(r&&typeof s=="string"){var bt=n.get("length"),dt=Number(s);Number.isInteger(dt)&&dt>=bt.v&&b(bt,dt+1)}Ot(a)}return!0},ownKeys(i){C(a);var s=Reflect.ownKeys(i).filter(o=>{var c=n.get(o);return c===void 0||c.v!==E});for(var[f,_]of n)_.v!==E&&!(f in i)&&s.push(f);return s},setPrototypeOf(){xn()}})}function Ot(t,e=1){b(t,t.v+e)}function Tt(t){var e=I|O,n=v!==null&&(v.f&I)!==0?v:null;return h===null||n!==null&&(n.f&m)!==0?e|=m:h.f|=Lt,{ctx:p,deps:null,effects:null,equals:qt,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??h}}function Ae(t){const e=Tt(t);return rn(e),e}function xe(t){const e=Tt(t);return e.equals=Yt,e}function Ht(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)L(e[n])}}function On(t){for(var e=t.parent;e!==null;){if((e.f&I)===0)return e;e=e.parent}return null}function Bt(t){var e,n=h;st(On(t));try{Ht(t),e=fn(t)}finally{st(n)}return e}function Ut(t){var e=Bt(t),n=(S||(t.f&m)!==0)&&t.deps!==null?P:w;A(t,n),t.equals(e)||(t.v=e,t.wv=ln())}const Z=new Map;function At(t,e){var n={f:0,v:t,reactions:null,equals:qt,rv:0,wv:0};return n}function N(t,e){const n=At(t);return rn(n),n}function be(t,e=!1){var r;const n=At(t);return e||(n.equals=Yt),_t&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(n),n}function Ie(t,e){return b(t,on(()=>C(t))),e}function b(t,e,n=!1){v!==null&&!D&&ct()&&(v.f&(I|mt))!==0&&!(y!=null&&y.includes(t))&&bn();let r=n?Y(e):e;return kn(t,r)}function kn(t,e){if(!t.equals(e)){var n=t.v;X?Z.set(t,e):Z.set(t,n),t.v=e,t.wv=ln(),(t.f&I)!==0&&((t.f&O)!==0&&Bt(t),A(t,(t.f&m)===0?w:P)),Vt(t,O),ct()&&h!==null&&(h.f&w)!==0&&(h.f&(k|B))===0&&(T===null?Hn([t]):T.push(t))}return e}function Re(t,e=1){var n=C(t),r=e===1?n++:n--;return b(t,n),r}function Vt(t,e){var n=t.reactions;if(n!==null)for(var r=ct(),a=n.length,l=0;l<a;l++){var u=n[l],i=u.f;(i&O)===0&&(!r&&u===h||(A(u,e),(i&(w|m))!==0&&((i&I)!==0?Vt(u,P):pt(u))))}}function Gt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let M=!1;function De(t){M=t}let R;function z(t){if(t===null)throw Gt(),jt;return R=t}function Oe(){return z(q(R))}function ke(t){if(M){if(q(R)!==null)throw Gt(),jt;R=t}}function Ne(t=1){if(M){for(var e=t,n=R;e--;)n=q(n);R=n}}function Se(){for(var t=0,e=R;;){if(e.nodeType===8){var n=e.data;if(n===Dn){if(t===0)return e;t-=1}else(n===In||n===Rn)&&(t+=1)}var r=q(e);e.remove(),e=r}}var kt,Nn,Sn,Kt,$t;function Ce(){if(kt===void 0){kt=window,Nn=document,Sn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;Kt=G(e,"firstChild").get,$t=G(e,"nextSibling").get,Rt(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),Rt(n)&&(n.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function Et(t){return Kt.call(t)}function q(t){return $t.call(t)}function Pe(t,e){if(!M)return Et(t);var n=Et(R);if(n===null)n=R.appendChild(wt());else if(e&&n.nodeType!==3){var r=wt();return n==null||n.before(r),z(r),r}return z(n),n}function Fe(t,e){if(!M){var n=Et(t);return n instanceof Comment&&n.data===""?q(n):n}return R}function Me(t,e=1,n=!1){let r=M?R:t;for(var a;e--;)a=r,r=q(r);if(!M)return r;var l=r==null?void 0:r.nodeType;if(n&&l!==3){var u=wt();return r===null?a==null||a.after(u):r.before(u),z(u),u}return z(r),r}function Le(t){t.textContent=""}function Zt(t){h===null&&v===null&&mn(),v!==null&&(v.f&m)!==0&&h===null&&gn(),X&&En()}function Cn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function U(t,e,n,r=!0){var a=h,l={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{ht(l),l.f|=dn}catch(s){throw L(l),s}else e!==null&&pt(l);var u=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(Lt|et))===0;if(!u&&r&&(a!==null&&Cn(l,a),v!==null&&(v.f&I)!==0)){var i=v;(i.effects??(i.effects=[])).push(l)}return l}function Pn(t){const e=U(ut,null,!1);return A(e,w),e.teardown=t,e}function qe(t){Zt();var e=h!==null&&(h.f&k)!==0&&p!==null&&!p.m;if(e){var n=p;(n.e??(n.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=zt(t);return r}}function Ye(t){return Zt(),xt(t)}function je(t){const e=U(B,t,!0);return(n={})=>new Promise(r=>{n.outro?Ln(e,()=>{L(e),r(void 0)}):(L(e),r(void 0))})}function zt(t){return U(Ft,t,!1)}function He(t,e){var n=p,r={effect:null,ran:!1};n.l.r1.push(r),r.effect=xt(()=>{t(),!r.ran&&(r.ran=!0,b(n.l.r2,!0),on(e))})}function Be(){var t=p;xt(()=>{if(C(t.l.r2)){for(var e of t.l.r1){var n=e.effect;(n.f&w)!==0&&A(n,P),V(n)&&ht(n),e.ran=!1}t.l.r2.v=!1}})}function xt(t){return U(ut,t,!0)}function Ue(t,e=[],n=Tt){const r=e.map(n);return Fn(()=>t(...r.map(C)))}function Fn(t,e=0){return U(ut|mt|e,t,!0)}function Ve(t,e=!0){return U(ut|k,t,!0,e)}function Jt(t){var e=t.teardown;if(e!==null){const n=X,r=v;St(!0),H(null);try{e.call(null)}finally{St(n),H(r)}}}function Wt(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&B)!==0?n.parent=null:L(n,e),n=r}}function Mn(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&k)===0&&L(e),e=n}}function L(t,e=!0){var n=!1;if((e||(t.f&yn)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var l=r===a?null:q(r);r.remove(),r=l}n=!0}Wt(t,e&&!n),it(t,0),A(t,ot);var u=t.transitions;if(u!==null)for(const s of u)s.stop();Jt(t);var i=t.parent;i!==null&&i.first!==null&&Xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Xt(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function Ln(t,e){var n=[];Qt(t,n,!0),qn(n,()=>{L(t),e&&e()})}function qn(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Qt(t,e,n){if((t.f&j)===0){if(t.f^=j,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&e.push(u);for(var r=t.first;r!==null;){var a=r.next,l=(r.f&Mt)!==0||(r.f&k)!==0;Qt(r,e,l?n:!1),r=a}}}function Ge(t){tn(t,!0)}function tn(t,e){if((t.f&j)!==0){t.f^=j,(t.f&w)===0&&(t.f^=w),V(t)&&(A(t,O),pt(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&Mt)!==0||(n.f&k)!==0;tn(n,a?e:!1),n=r}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||e)&&l.in()}}const Yn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let J=[],W=[];function nn(){var t=J;J=[],Pt(t)}function en(){var t=W;W=[],Pt(t)}function Ke(t){J.length===0&&queueMicrotask(nn),J.push(t)}function $e(t){W.length===0&&Yn(en),W.push(t)}function Nt(){J.length>0&&nn(),W.length>0&&en()}let nt=!1,at=!1,lt=null,F=!1,X=!1;function St(t){X=t}let $=[];let v=null,D=!1;function H(t){v=t}let h=null;function st(t){h=t}let y=null;function jn(t){y=t}function rn(t){v!==null&&v.f&yt&&(y===null?jn([t]):y.push(t))}let d=null,g=0,T=null;function Hn(t){T=t}let an=1,ft=0,S=!1;function ln(){return++an}function V(t){var o;var e=t.f;if((e&O)!==0)return!0;if((e&P)!==0){var n=t.deps,r=(e&m)!==0;if(n!==null){var a,l,u=(e&rt)!==0,i=r&&h!==null&&!S,s=n.length;if(u||i){var f=t,_=f.parent;for(a=0;a<s;a++)l=n[a],(u||!((o=l==null?void 0:l.reactions)!=null&&o.includes(f)))&&(l.reactions??(l.reactions=[])).push(f);u&&(f.f^=rt),i&&_!==null&&(_.f&m)===0&&(f.f^=m)}for(a=0;a<s;a++)if(l=n[a],V(l)&&Ut(l),l.wv>t.wv)return!0}(!r||h!==null&&!S)&&A(t,w)}return!1}function Bn(t,e){for(var n=e;n!==null;){if((n.f&et)!==0)try{n.fn(t);return}catch{n.f^=et}n=n.parent}throw nt=!1,t}function Un(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function vt(t,e,n,r){if(nt){if(n===null&&(nt=!1),Un(e))throw t;return}n!==null&&(nt=!0);{Bn(t,e);return}}function sn(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];y!=null&&y.includes(t)||((l.f&I)!==0?sn(l,e,!1):e===l&&(n?A(l,O):(l.f&w)!==0&&A(l,P),pt(l)))}}function fn(t){var x;var e=d,n=g,r=T,a=v,l=S,u=y,i=p,s=D,f=t.f;d=null,g=0,T=null,S=(f&m)!==0&&(D||!F||v===null),v=(f&(k|B))===0?t:null,y=null,Dt(t.ctx),D=!1,ft++,t.f|=yt;try{var _=(0,t.fn)(),o=t.deps;if(d!==null){var c;if(it(t,g),o!==null&&g>0)for(o.length=g+d.length,c=0;c<d.length;c++)o[g+c]=d[c];else t.deps=o=d;if(!S)for(c=g;c<o.length;c++)((x=o[c]).reactions??(x.reactions=[])).push(t)}else o!==null&&g<o.length&&(it(t,g),o.length=g);if(ct()&&T!==null&&!D&&o!==null&&(t.f&(I|P|O))===0)for(c=0;c<T.length;c++)sn(T[c],t);return a!==t&&(ft++,T!==null&&(r===null?r=T:r.push(...T))),_}finally{d=e,g=n,T=r,v=a,S=l,y=u,Dt(i),D=s,t.f^=yt}}function Vn(t,e){let n=e.reactions;if(n!==null){var r=cn.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&I)!==0&&(d===null||!d.includes(e))&&(A(e,P),(e.f&(m|rt))===0&&(e.f^=rt),Ht(e),it(e,0))}function it(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)Vn(t,n[r])}function ht(t){var e=t.f;if((e&ot)===0){A(t,w);var n=h,r=p,a=F;h=t,F=!0;try{(e&mt)!==0?Mn(t):Wt(t),Jt(t);var l=fn(t);t.teardown=typeof l=="function"?l:null,t.wv=an;var u=t.deps,i}catch(s){vt(s,t,n,r||t.ctx)}finally{F=a,h=n}}}function Gn(){try{Tn()}catch(t){if(lt!==null)vt(t,lt,null);else throw t}}function un(){var t=F;try{var e=0;for(F=!0;$.length>0;){e++>1e3&&Gn();var n=$,r=n.length;$=[];for(var a=0;a<r;a++){var l=$n(n[a]);Kn(l)}Z.clear()}}finally{at=!1,F=t,lt=null}}function Kn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(ot|j))===0)try{V(r)&&(ht(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Xt(r):r.fn=null))}catch(a){vt(a,r,null,r.ctx)}}}function pt(t){at||(at=!0,queueMicrotask(un));for(var e=lt=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(B|k))!==0){if((n&w)===0)return;e.f^=w}}$.push(e)}function $n(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(k|B))!==0,l=a&&(r&w)!==0;if(!l&&(r&j)===0){if((r&Ft)!==0)e.push(n);else if(a)n.f^=w;else{var u=v;try{v=n,V(n)&&ht(n)}catch(f){vt(f,n,null,n.ctx)}finally{v=u}}var i=n.first;if(i!==null){n=i;continue}}var s=n.parent;for(n=n.next;n===null&&s!==null;)n=s.next,s=s.parent}return e}function Zn(t){var e;for(Nt();$.length>0;)at=!0,un(),Nt();return e}async function Ze(){await Promise.resolve(),Zn()}function C(t){var e=t.f,n=(e&I)!==0;if(v!==null&&!D){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ft&&(t.rv=ft,d===null&&r!==null&&r[g]===t?g++:d===null?d=[t]:(!S||!d.includes(t))&&d.push(t))}}else if(n&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&m)===0&&(a.f^=m)}return n&&(a=t,V(a)&&Ut(a)),X&&Z.has(t)?Z.get(t):t.v}function on(t){var e=D;try{return D=!0,t()}finally{D=e}}const zn=-7169;function A(t,e){t.f=t.f&zn|e}function ze(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(K in t)gt(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&K in n&&gt(n)}}}function gt(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],e)}catch{}const n=Ct(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=vn(n);for(let a in r){const l=r[a].get;if(l)try{l.call(t)}catch{}}}}}export{ye as $,z as A,De as B,Ge as C,Ln as D,Mt as E,zt as F,xt as G,In as H,Ke as I,Pn as J,Wn as K,be as L,b as M,G as N,se as O,ne as P,xe as Q,pe as R,K as S,Yt as T,E as U,Y as V,de as W,ee as X,_t as Y,he as Z,ve as _,Ve as a,wn as a0,_n as a1,le as a2,wt as a3,Et as a4,Sn as a5,h as a6,we as a7,Ee as a8,Le as a9,Qt as aA,qn as aB,ce as aC,ge as aD,Ct as aE,re as aF,vn as aG,$e as aH,He as aI,Be as aJ,Ie as aK,kt as aL,Ne as aM,Nn as aN,Re as aO,H as aa,st as ab,v as ac,yn as ad,q as ae,Ce as af,jt as ag,Dn as ah,Gt as ai,ae as aj,Jn as ak,je as al,Zn as am,N as an,Ze as ao,Ae as ap,ct as aq,Qn as ar,kn as as,At as at,Dt as au,oe as av,j as aw,ie as ax,ue as ay,_e as az,Fn as b,R as c,L as d,p as e,Fe as f,qe as g,M as h,on as i,te as j,C as k,ze as l,Tt as m,Xn as n,fe as o,me as p,Te as q,Pt as r,Pe as s,Ue as t,Ye as u,ke as v,Me as w,Oe as x,Rn as y,Se as z};
