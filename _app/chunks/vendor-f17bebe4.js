var hl=Object.defineProperty,vl=Object.defineProperties;var yl=Object.getOwnPropertyDescriptors;var fr=Object.getOwnPropertySymbols;var Wa=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable;var za=(e,t,r)=>t in e?hl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ne=(e,t)=>{for(var r in t||(t={}))Wa.call(t,r)&&za(e,r,t[r]);if(fr)for(var r of fr(t))Ka.call(t,r)&&za(e,r,t[r]);return e},Re=(e,t)=>vl(e,yl(t));var Qa=e=>typeof e=="symbol"?e:e+"",Ya=(e,t)=>{var r={};for(var n in e)Wa.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&fr)for(var n of fr(e))t.indexOf(n)<0&&Ka.call(e,n)&&(r[n]=e[n]);return r};function kt(){}function gl(e,t){for(const r in t)e[r]=t[r];return e}function $l(e){return e&&typeof e=="object"&&typeof e.then=="function"}function Ga(e){return e()}function Ha(){return Object.create(null)}function At(e){e.forEach(Ga)}function bl(e){return typeof e=="function"}function Sl(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ol(e){return Object.keys(e).length===0}function OO(e,t,r,n){if(e){const a=Xa(e,t,r,n);return e[0](a)}}function Xa(e,t,r,n){return e[1]&&n?gl(r.ctx.slice(),e[1](n(t))):r.ctx}function wO(e,t,r,n){if(e[2]&&n){const a=e[2](n(r));if(t.dirty===void 0)return a;if(typeof a=="object"){const i=[],s=Math.max(t.dirty.length,a.length);for(let o=0;o<s;o+=1)i[o]=t.dirty[o]|a[o];return i}return t.dirty|a}return t.dirty}function IO(e,t,r,n,a,i){if(a){const s=Xa(t,r,n,i);e.p(s,a)}}function EO(e){if(e.ctx.length>32){const t=[],r=e.ctx.length/32;for(let n=0;n<r;n++)t[n]=-1;return t}return-1}function xO(e){return e==null?"":e}let pr=!1;function wl(){pr=!0}function Il(){pr=!1}function El(e,t,r,n){for(;e<t;){const a=e+(t-e>>1);r(a)<=n?e=a+1:t=a}return e}function xl(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&c.push(u)}t=c}const r=new Int32Array(t.length+1),n=new Int32Array(t.length);r[0]=-1;let a=0;for(let c=0;c<t.length;c++){const l=t[c].claim_order,u=(a>0&&t[r[a]].claim_order<=l?a+1:El(1,a,p=>t[r[p]].claim_order,l))-1;n[c]=r[u]+1;const f=u+1;r[f]=c,a=Math.max(f,a)}const i=[],s=[];let o=t.length-1;for(let c=r[a]+1;c!=0;c=n[c-1]){for(i.push(t[c-1]);o>=c;o--)s.push(t[o]);o--}for(;o>=0;o--)s.push(t[o]);i.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<i.length&&s[c].claim_order>=i[l].claim_order;)l++;const u=l<i.length?i[l]:null;e.insertBefore(s[c],u)}}function Pl(e,t){if(pr){for(xl(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function PO(e,t,r){pr&&!r?Pl(e,t):(t.parentNode!==e||t.nextSibling!=r)&&e.insertBefore(t,r||null)}function kl(e){e.parentNode.removeChild(e)}function kO(e,t){for(let r=0;r<e.length;r+=1)e[r]&&e[r].d(t)}function Al(e){return document.createElement(e)}function jl(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function sn(e){return document.createTextNode(e)}function AO(){return sn(" ")}function jO(){return sn("")}function NO(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function CO(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function Nl(e){return Array.from(e.childNodes)}function Cl(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Za(e,t,r,n,a=!1){Cl(e);const i=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const c=r(o);return c===void 0?e.splice(s,1):e[s]=c,a||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const c=r(o);return c===void 0?e.splice(s,1):e[s]=c,a?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return n()})();return i.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,i}function ei(e,t,r,n){return Za(e,a=>a.nodeName===t,a=>{const i=[];for(let s=0;s<a.attributes.length;s++){const o=a.attributes[s];r[o.name]||i.push(o.name)}i.forEach(s=>a.removeAttribute(s))},()=>n(t))}function _O(e,t,r){return ei(e,t,r,Al)}function RO(e,t,r){return ei(e,t,r,jl)}function _l(e,t){return Za(e,r=>r.nodeType===3,r=>{const n=""+t;if(r.data.startsWith(n)){if(r.data.length!==n.length)return r.splitText(n.length)}else r.data=n},()=>sn(t),!0)}function MO(e){return _l(e," ")}function TO(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function LO(e,t){e.value=t==null?"":t}function qO(e,t,r,n){r===null?e.style.removeProperty(t):e.style.setProperty(t,r,n?"important":"")}function DO(e,t,r){e.classList[r?"add":"remove"](t)}function Rl(e,t,r=!1){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,r,!1,t),n}function BO(e,t=document.body){return Array.from(t.querySelectorAll(e))}let jt;function ke(e){jt=e}function Nt(){if(!jt)throw new Error("Function called outside component initialization");return jt}function FO(e){Nt().$$.on_mount.push(e)}function UO(e){Nt().$$.after_update.push(e)}function VO(){const e=Nt();return(t,r)=>{const n=e.$$.callbacks[t];if(n){const a=Rl(t,r);n.slice().forEach(i=>{i.call(e,a)})}}}function JO(e,t){Nt().$$.context.set(e,t)}function WO(e,t){const r=e.$$.callbacks[t.type];r&&r.slice().forEach(n=>n.call(this,t))}const Ct=[],ti=[],mr=[],on=[],ri=Promise.resolve();let cn=!1;function ni(){cn||(cn=!0,ri.then(fn))}function KO(){return ni(),ri}function ln(e){mr.push(e)}function zO(e){on.push(e)}const un=new Set;let dr=0;function fn(){const e=jt;do{for(;dr<Ct.length;){const t=Ct[dr];dr++,ke(t),Ml(t.$$)}for(ke(null),Ct.length=0,dr=0;ti.length;)ti.pop()();for(let t=0;t<mr.length;t+=1){const r=mr[t];un.has(r)||(un.add(r),r())}mr.length=0}while(Ct.length);for(;on.length;)on.pop()();cn=!1,un.clear(),ke(e)}function Ml(e){if(e.fragment!==null){e.update(),At(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ln)}}const hr=new Set;let Je;function Tl(){Je={r:0,c:[],p:Je}}function Ll(){Je.r||At(Je.c),Je=Je.p}function ai(e,t){e&&e.i&&(hr.delete(e),e.i(t))}function ql(e,t,r,n){if(e&&e.o){if(hr.has(e))return;hr.add(e),Je.c.push(()=>{hr.delete(e),n&&(r&&e.d(1),n())}),e.o(t)}}function QO(e,t){const r=t.token={};function n(a,i,s,o){if(t.token!==r)return;t.resolved=o;let c=t.ctx;s!==void 0&&(c=c.slice(),c[s]=o);const l=a&&(t.current=a)(c);let u=!1;t.block&&(t.blocks?t.blocks.forEach((f,p)=>{p!==i&&f&&(Tl(),ql(f,1,1,()=>{t.blocks[p]===f&&(t.blocks[p]=null)}),Ll())}):t.block.d(1),l.c(),ai(l,1),l.m(t.mount(),t.anchor),u=!0),t.block=l,t.blocks&&(t.blocks[i]=l),u&&fn()}if($l(e)){const a=Nt();if(e.then(i=>{ke(a),n(t.then,1,t.value,i),ke(null)},i=>{if(ke(a),n(t.catch,2,t.error,i),ke(null),!t.hasCatch)throw i}),t.current!==t.pending)return n(t.pending,0),!0}else{if(t.current!==t.then)return n(t.then,1,t.value,e),!0;t.resolved=e}}function YO(e,t,r){const n=t.slice(),{resolved:a}=e;e.current===e.then&&(n[e.value]=a),e.current===e.catch&&(n[e.error]=a),e.block.p(n,r)}function GO(e,t){const r={},n={},a={$$scope:1};let i=e.length;for(;i--;){const s=e[i],o=t[i];if(o){for(const c in s)c in o||(n[c]=1);for(const c in o)a[c]||(r[c]=o[c],a[c]=1);e[i]=o}else for(const c in s)a[c]=1}for(const s in n)s in r||(r[s]=void 0);return r}function HO(e){return typeof e=="object"&&e!==null?e:{}}function XO(e,t,r){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=r,r(e.$$.ctx[n]))}function ZO(e){e&&e.c()}function e0(e,t){e&&e.l(t)}function Dl(e,t,r,n){const{fragment:a,on_mount:i,on_destroy:s,after_update:o}=e.$$;a&&a.m(t,r),n||ln(()=>{const c=i.map(Ga).filter(bl);s?s.push(...c):At(c),e.$$.on_mount=[]}),o.forEach(ln)}function Bl(e,t){const r=e.$$;r.fragment!==null&&(At(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function Fl(e,t){e.$$.dirty[0]===-1&&(Ct.push(e),ni(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function t0(e,t,r,n,a,i,s,o=[-1]){const c=jt;ke(e);const l=e.$$={fragment:null,ctx:null,props:i,update:kt,not_equal:a,bound:Ha(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:Ha(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};s&&s(l.root);let u=!1;if(l.ctx=r?r(e,t.props||{},(f,p,...d)=>{const v=d.length?d[0]:p;return l.ctx&&a(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),u&&Fl(e,f)),p}):[],l.update(),u=!0,At(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){wl();const f=Nl(t.target);l.fragment&&l.fragment.l(f),f.forEach(kl)}else l.fragment&&l.fragment.c();t.intro&&ai(e.$$.fragment),Dl(e,t.target,t.anchor,t.customElement),Il(),fn()}ke(c)}class r0{$destroy(){Bl(this,1),this.$destroy=kt}$on(t,r){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const a=n.indexOf(r);a!==-1&&n.splice(a,1)}}$set(t){this.$$set&&!Ol(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function n0(e,t=kt){let r;const n=new Set;function a(o){if(Sl(e,o)&&(e=o,r)){const c=!et.length;for(const l of n)l[1](),et.push(l,e);if(c){for(let l=0;l<et.length;l+=2)et[l][0](et[l+1]);et.length=0}}}function i(o){a(o(e))}function s(o,c=kt){const l=[o,c];return n.add(l),n.size===1&&(r=t(a)||kt),o(e),()=>{n.delete(l),n.size===0&&(r(),r=null)}}return{set:a,update:i,subscribe:s}}var ii=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function si(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}),t}function he(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?he=function(t){return typeof t}:he=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function oi(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t,r){return t&&oi(e.prototype,t),r&&oi(e,r),e}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function z(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_t(e,t)}function ae(e){return ae=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},ae(e)}function _t(e,t){return _t=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},_t(e,t)}function ci(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function vr(e,t,r){return ci()?vr=Reflect.construct:vr=function(a,i,s){var o=[null];o.push.apply(o,i);var c=Function.bind.apply(a,o),l=new c;return s&&_t(l,s.prototype),l},vr.apply(null,arguments)}function Ul(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function pn(e){var t=typeof Map=="function"?new Map:void 0;return pn=function(n){if(n===null||!Ul(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(n))return t.get(n);t.set(n,a)}function a(){return vr(n,arguments,ae(this).constructor)}return a.prototype=Object.create(n.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),_t(a,n)},pn(e)}function ge(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function li(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:ge(e)}function Q(e){var t=ci();return function(){var n=ae(e),a;if(t){var i=ae(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return li(this,a)}}function Vl(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&(e=ae(e),e!==null););return e}function fe(e,t,r){return typeof Reflect!="undefined"&&Reflect.get?fe=Reflect.get:fe=function(a,i,s){var o=Vl(a,i);if(!!o){var c=Object.getOwnPropertyDescriptor(o,i);return c.get?c.get.call(s):c.value}},fe(e,t,r||e)}function Rt(e,t){return ui(e)||Wl(e,t)||mn(e,t)||pi()}function Mt(e){return ui(e)||Jl(e)||mn(e)||pi()}function ui(e){if(Array.isArray(e))return e}function Jl(e){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}function Wl(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,a=!1,i=void 0;try{for(var s=e[Symbol.iterator](),o;!(n=(o=s.next()).done)&&(r.push(o.value),!(t&&r.length===t));n=!0);}catch(c){a=!0,i=c}finally{try{!n&&s.return!=null&&s.return()}finally{if(a)throw i}}return r}}function mn(e,t){if(!!e){if(typeof e=="string")return fi(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return fi(e,t)}}function fi(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function pi(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=mn(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(c){throw c},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,s=!1,o;return{s:function(){r=e[Symbol.iterator]()},n:function(){var c=r.next();return i=c.done,c},e:function(c){s=!0,o=c},f:function(){try{!i&&r.return!=null&&r.return()}finally{if(s)throw o}}}}var re={ANCHOR:"&",COMMENT:"#",TAG:"!",DIRECTIVES_END:"-",DOCUMENT_END:"."},g={ALIAS:"ALIAS",BLANK_LINE:"BLANK_LINE",BLOCK_FOLDED:"BLOCK_FOLDED",BLOCK_LITERAL:"BLOCK_LITERAL",COMMENT:"COMMENT",DIRECTIVE:"DIRECTIVE",DOCUMENT:"DOCUMENT",FLOW_MAP:"FLOW_MAP",FLOW_SEQ:"FLOW_SEQ",MAP:"MAP",MAP_KEY:"MAP_KEY",MAP_VALUE:"MAP_VALUE",PLAIN:"PLAIN",QUOTE_DOUBLE:"QUOTE_DOUBLE",QUOTE_SINGLE:"QUOTE_SINGLE",SEQ:"SEQ",SEQ_ITEM:"SEQ_ITEM"},yr="tag:yaml.org,2002:",Me={MAP:"tag:yaml.org,2002:map",SEQ:"tag:yaml.org,2002:seq",STR:"tag:yaml.org,2002:str"};function mi(e){for(var t=[0],r=e.indexOf(`
`);r!==-1;)r+=1,t.push(r),r=e.indexOf(`
`,r);return t}function di(e){var t,r;return typeof e=="string"?(t=mi(e),r=e):(Array.isArray(e)&&(e=e[0]),e&&e.context&&(e.lineStarts||(e.lineStarts=mi(e.context.src)),t=e.lineStarts,r=e.context.src)),{lineStarts:t,src:r}}function dn(e,t){if(typeof e!="number"||e<0)return null;var r=di(t),n=r.lineStarts,a=r.src;if(!n||!a||e>a.length)return null;for(var i=0;i<n.length;++i){var s=n[i];if(e<s)return{line:i,col:e-n[i-1]+1};if(e===s)return{line:i+1,col:1}}var o=n.length;return{line:o,col:e-n[o-1]+1}}function Kl(e,t){var r=di(t),n=r.lineStarts,a=r.src;if(!n||!(e>=1)||e>n.length)return null;for(var i=n[e-1],s=n[e];s&&s>i&&a[s-1]===`
`;)--s;return a.slice(i,s)}function zl(e,t){var r=e.start,n=e.end,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:80,i=Kl(r.line,t);if(!i)return null;var s=r.col;if(i.length>a)if(s<=a-10)i=i.substr(0,a-1)+"\u2026";else{var o=Math.round(a/2);i.length>s+o&&(i=i.substr(0,s+o-1)+"\u2026"),s-=i.length-a,i="\u2026"+i.substr(1-a)}var c=1,l="";n&&(n.line===r.line&&s+(n.col-r.col)<=a+1?c=n.col-r.col:(c=Math.min(i.length+1,a)-s,l="\u2026"));var u=s>1?" ".repeat(s-1):"",f="^".repeat(c);return"".concat(i,`
`).concat(u).concat(f).concat(l)}var X=function(){function e(t,r){F(this,e),this.start=t,this.end=r||t}return W(e,[{key:"isEmpty",value:function(){return typeof this.start!="number"||!this.end||this.end<=this.start}},{key:"setOrigRange",value:function(r,n){var a=this.start,i=this.end;if(r.length===0||i<=r[0])return this.origStart=a,this.origEnd=i,n;for(var s=n;s<r.length&&!(r[s]>a);)++s;this.origStart=a+s;for(var o=s;s<r.length&&!(r[s]>=i);)++s;return this.origEnd=i+s,o}}],[{key:"copy",value:function(r){return new e(r.start,r.end)}}]),e}(),w=function(){function e(t,r,n){F(this,e),Object.defineProperty(this,"context",{value:n||null,writable:!0}),this.error=null,this.range=null,this.valueRange=null,this.props=r||[],this.type=t,this.value=null}return W(e,[{key:"getPropValue",value:function(r,n,a){if(!this.context)return null;var i=this.context.src,s=this.props[r];return s&&i[s.start]===n?i.slice(s.start+(a?1:0),s.end):null}},{key:"anchor",get:function(){for(var r=0;r<this.props.length;++r){var n=this.getPropValue(r,re.ANCHOR,!0);if(n!=null)return n}return null}},{key:"comment",get:function(){for(var r=[],n=0;n<this.props.length;++n){var a=this.getPropValue(n,re.COMMENT,!0);a!=null&&r.push(a)}return r.length>0?r.join(`
`):null}},{key:"commentHasRequiredWhitespace",value:function(r){var n=this.context.src;if(this.header&&r===this.header.end||!this.valueRange)return!1;var a=this.valueRange.end;return r!==a||e.atBlank(n,a-1)}},{key:"hasComment",get:function(){if(this.context){for(var r=this.context.src,n=0;n<this.props.length;++n)if(r[this.props[n].start]===re.COMMENT)return!0}return!1}},{key:"hasProps",get:function(){if(this.context){for(var r=this.context.src,n=0;n<this.props.length;++n)if(r[this.props[n].start]!==re.COMMENT)return!0}return!1}},{key:"includesTrailingLines",get:function(){return!1}},{key:"jsonLike",get:function(){var r=[g.FLOW_MAP,g.FLOW_SEQ,g.QUOTE_DOUBLE,g.QUOTE_SINGLE];return r.indexOf(this.type)!==-1}},{key:"rangeAsLinePos",get:function(){if(!(!this.range||!this.context)){var r=dn(this.range.start,this.context.root);if(!!r){var n=dn(this.range.end,this.context.root);return{start:r,end:n}}}}},{key:"rawValue",get:function(){if(!this.valueRange||!this.context)return null;var r=this.valueRange,n=r.start,a=r.end;return this.context.src.slice(n,a)}},{key:"tag",get:function(){for(var r=0;r<this.props.length;++r){var n=this.getPropValue(r,re.TAG,!1);if(n!=null){if(n[1]==="<")return{verbatim:n.slice(2,-1)};var a=n.match(/^(.*!)([^!]*)$/),i=Rt(a,3);i[0];var s=i[1],o=i[2];return{handle:s,suffix:o}}}return null}},{key:"valueRangeContainsNewline",get:function(){if(!this.valueRange||!this.context)return!1;for(var r=this.valueRange,n=r.start,a=r.end,i=this.context.src,s=n;s<a;++s)if(i[s]===`
`)return!0;return!1}},{key:"parseComment",value:function(r){var n=this.context.src;if(n[r]===re.COMMENT){var a=e.endOfLine(n,r+1),i=new X(r,a);return this.props.push(i),a}return r}},{key:"setOrigRanges",value:function(r,n){return this.range&&(n=this.range.setOrigRange(r,n)),this.valueRange&&this.valueRange.setOrigRange(r,n),this.props.forEach(function(a){return a.setOrigRange(r,n)}),n}},{key:"toString",value:function(){var r=this.context.src,n=this.range,a=this.value;if(a!=null)return a;var i=r.slice(n.start,n.end);return e.addStringTerminator(r,n.end,i)}}],[{key:"addStringTerminator",value:function(r,n,a){if(a[a.length-1]===`
`)return a;var i=e.endOfWhiteSpace(r,n);return i>=r.length||r[i]===`
`?a+`
`:a}},{key:"atDocumentBoundary",value:function(r,n,a){var i=r[n];if(!i)return!0;var s=r[n-1];if(s&&s!==`
`)return!1;if(a){if(i!==a)return!1}else if(i!==re.DIRECTIVES_END&&i!==re.DOCUMENT_END)return!1;var o=r[n+1],c=r[n+2];if(o!==i||c!==i)return!1;var l=r[n+3];return!l||l===`
`||l==="	"||l===" "}},{key:"endOfIdentifier",value:function(r,n){for(var a=r[n],i=a==="<",s=i?[`
`,"	"," ",">"]:[`
`,"	"," ","[","]","{","}",","];a&&s.indexOf(a)===-1;)a=r[n+=1];return i&&a===">"&&(n+=1),n}},{key:"endOfIndent",value:function(r,n){for(var a=r[n];a===" ";)a=r[n+=1];return n}},{key:"endOfLine",value:function(r,n){for(var a=r[n];a&&a!==`
`;)a=r[n+=1];return n}},{key:"endOfWhiteSpace",value:function(r,n){for(var a=r[n];a==="	"||a===" ";)a=r[n+=1];return n}},{key:"startOfLine",value:function(r,n){var a=r[n-1];if(a===`
`)return n;for(;a&&a!==`
`;)a=r[n-=1];return n+1}},{key:"endOfBlockIndent",value:function(r,n,a){var i=e.endOfIndent(r,a);if(i>a+n)return i;var s=e.endOfWhiteSpace(r,i),o=r[s];return!o||o===`
`?s:null}},{key:"atBlank",value:function(r,n,a){var i=r[n];return i===`
`||i==="	"||i===" "||a&&!i}},{key:"nextNodeIsIndented",value:function(r,n,a){return!r||n<0?!1:n>0?!0:a&&r==="-"}},{key:"normalizeOffset",value:function(r,n){var a=r[n];return a?a!==`
`&&r[n-1]===`
`?n-1:e.endOfWhiteSpace(r,n):n}},{key:"foldNewline",value:function(r,n,a){for(var i=0,s=!1,o="",c=r[n+1];c===" "||c==="	"||c===`
`;){switch(c){case`
`:i=0,n+=1,o+=`
`;break;case"	":i<=a&&(s=!0),n=e.endOfWhiteSpace(r,n+2)-1;break;case" ":i+=1,n+=1;break}c=r[n+1]}return o||(o=" "),c&&i<=a&&(s=!0),{fold:o,offset:n,error:s}}}]),e}(),tt=function(e){z(r,e);var t=Q(r);function r(n,a,i){var s;if(F(this,r),!i||!(a instanceof w))throw new Error("Invalid arguments for new ".concat(n));return s=t.call(this),s.name=n,s.message=i,s.source=a,s}return W(r,[{key:"makePretty",value:function(){if(!!this.source){this.nodeType=this.source.type;var a=this.source.context&&this.source.context.root;if(typeof this.offset=="number"){this.range=new X(this.offset,this.offset+1);var i=a&&dn(this.offset,a);if(i){var s={line:i.line,col:i.col+1};this.linePos={start:i,end:s}}delete this.offset}else this.range=this.source.range,this.linePos=this.source.rangeAsLinePos;if(this.linePos){var o=this.linePos.start,c=o.line,l=o.col;this.message+=" at line ".concat(c,", column ").concat(l);var u=a&&zl(this.linePos,a);u&&(this.message+=`:

`.concat(u,`
`))}delete this.source}}}]),r}(pn(Error)),Tt=function(e){z(r,e);var t=Q(r);function r(n,a){return F(this,r),t.call(this,"YAMLReferenceError",n,a)}return r}(tt),R=function(e){z(r,e);var t=Q(r);function r(n,a){return F(this,r),t.call(this,"YAMLSemanticError",n,a)}return r}(tt),oe=function(e){z(r,e);var t=Q(r);function r(n,a){return F(this,r),t.call(this,"YAMLSyntaxError",n,a)}return r}(tt),rt=function(e){z(r,e);var t=Q(r);function r(n,a){return F(this,r),t.call(this,"YAMLWarning",n,a)}return r}(tt),hi=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.apply(this,arguments)}return W(r,[{key:"strValue",get:function(){if(!this.valueRange||!this.context)return null;for(var a=this.valueRange,i=a.start,s=a.end,o=this.context.src,c=o[s-1];i<s&&(c===`
`||c==="	"||c===" ");)c=o[--s-1];for(var l="",u=i;u<s;++u){var f=o[u];if(f===`
`){var p=w.foldNewline(o,u,-1),d=p.fold,v=p.offset;l+=d,u=v}else if(f===" "||f==="	"){for(var m=u,$=o[u+1];u<s&&($===" "||$==="	");)u+=1,$=o[u+1];$!==`
`&&(l+=u>m?o.slice(m,u+1):f)}else l+=f}var y=o[i];switch(y){case"	":{var O="Plain value cannot start with a tab character",E=[new R(this,O)];return{errors:E,str:l}}case"@":case"`":{var T="Plain value cannot start with reserved character ".concat(y),j=[new R(this,T)];return{errors:j,str:l}}default:return l}}},{key:"parseBlockValue",value:function(a){for(var i=this.context,s=i.indent,o=i.inFlow,c=i.src,l=a,u=a,f=c[l];f===`
`&&!w.atDocumentBoundary(c,l+1);f=c[l]){var p=w.endOfBlockIndent(c,s,l+1);if(p===null||c[p]==="#")break;c[p]===`
`?l=p:(u=r.endOfLine(c,p,o),l=u)}return this.valueRange.isEmpty()&&(this.valueRange.start=a),this.valueRange.end=u,u}},{key:"parse",value:function(a,i){this.context=a;var s=a.inFlow,o=a.src,c=i,l=o[c];return l&&l!=="#"&&l!==`
`&&(c=r.endOfLine(o,i,s)),this.valueRange=new X(i,c),c=w.endOfWhiteSpace(o,c),c=this.parseComment(c),(!this.hasComment||this.valueRange.isEmpty())&&(c=this.parseBlockValue(c)),c}}],[{key:"endOfLine",value:function(a,i,s){for(var o=a[i],c=i;o&&o!==`
`&&!(s&&(o==="["||o==="]"||o==="{"||o==="}"||o===","));){var l=a[c+1];if(o===":"&&(!l||l===`
`||l==="	"||l===" "||s&&l===",")||(o===" "||o==="	")&&l==="#")break;c+=1,o=l}return c}}]),r}(w),Lt=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.call(this,g.BLANK_LINE)}return W(r,[{key:"includesTrailingLines",get:function(){return!0}},{key:"parse",value:function(a,i){return this.context=a,this.range=new X(i,i+1),i+1}}]),r}(w),hn=function(e){z(r,e);var t=Q(r);function r(n,a){var i;return F(this,r),i=t.call(this,n,a),i.node=null,i}return W(r,[{key:"includesTrailingLines",get:function(){return!!this.node&&this.node.includesTrailingLines}},{key:"parse",value:function(a,i){this.context=a;var s=a.parseNode,o=a.src,c=a.atLineStart,l=a.lineStart;!c&&this.type===g.SEQ_ITEM&&(this.error=new R(this,"Sequence items must not have preceding content on the same line"));for(var u=c?i-l:a.indent,f=w.endOfWhiteSpace(o,i+1),p=o[f],d=p==="#",v=[],m=null;p===`
`||p==="#";){if(p==="#"){var $=w.endOfLine(o,f+1);v.push(new X(f,$)),f=$}else{c=!0,l=f+1;var y=w.endOfWhiteSpace(o,l);o[y]===`
`&&v.length===0&&(m=new Lt,l=m.parse({src:o},l)),f=w.endOfIndent(o,l)}p=o[f]}if(w.nextNodeIsIndented(p,f-(l+u),this.type!==g.SEQ_ITEM)?this.node=s({atLineStart:c,inCollection:!1,indent:u,lineStart:l,parent:this},f):p&&l>i+1&&(f=l-1),this.node){if(m){var O=a.parent.items||a.parent.contents;O&&O.push(m)}v.length&&Array.prototype.push.apply(this.props,v),f=this.node.range.end}else if(d){var E=v[0];this.props.push(E),f=E.end}else f=w.endOfLine(o,i+1);var T=this.node?this.node.valueRange.end:f;return this.valueRange=new X(i,T),f}},{key:"setOrigRanges",value:function(a,i){return i=fe(ae(r.prototype),"setOrigRanges",this).call(this,a,i),this.node?this.node.setOrigRanges(a,i):i}},{key:"toString",value:function(){var a=this.context.src,i=this.node,s=this.range,o=this.value;if(o!=null)return o;var c=i?a.slice(s.start,i.range.start)+String(i):a.slice(s.start,s.end);return w.addStringTerminator(a,s.end,c)}}]),r}(w),qt=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.call(this,g.COMMENT)}return W(r,[{key:"parse",value:function(a,i){this.context=a;var s=this.parseComment(i);return this.range=new X(i,s),s}}]),r}(w);function vn(e){for(var t=e;t instanceof hn;)t=t.node;if(!(t instanceof vi))return null;for(var r=t.items.length,n=-1,a=r-1;a>=0;--a){var i=t.items[a];if(i.type===g.COMMENT){var s=i.context,o=s.indent,c=s.lineStart;if(o>0&&i.range.start>=c+o)break;n=a}else if(i.type===g.BLANK_LINE)n=a;else break}if(n===-1)return null;for(var l=t.items.splice(n,r-n),u=l[0].range.start;t.range.end=u,t.valueRange&&t.valueRange.end>u&&(t.valueRange.end=u),t!==e;)t=t.context.parent;return l}var vi=function(e){z(r,e);var t=Q(r);function r(n){var a;F(this,r),a=t.call(this,n.type===g.SEQ_ITEM?g.SEQ:g.MAP);for(var i=n.props.length-1;i>=0;--i)if(n.props[i].start<n.context.lineStart){a.props=n.props.slice(0,i+1),n.props=n.props.slice(i+1);var s=n.props[0]||n.valueRange;n.range.start=s.start;break}a.items=[n];var o=vn(n);return o&&Array.prototype.push.apply(a.items,o),a}return W(r,[{key:"includesTrailingLines",get:function(){return this.items.length>0}},{key:"parse",value:function(a,i){this.context=a;var s=a.parseNode,o=a.src,c=w.startOfLine(o,i),l=this.items[0];l.context.parent=this,this.valueRange=X.copy(l.valueRange);var u=l.range.start-l.context.lineStart,f=i;f=w.normalizeOffset(o,f);for(var p=o[f],d=w.endOfWhiteSpace(o,c)===f,v=!1;p;){for(;p===`
`||p==="#";){if(d&&p===`
`&&!v){var m=new Lt;if(f=m.parse({src:o},f),this.valueRange.end=f,f>=o.length){p=null;break}this.items.push(m),f-=1}else if(p==="#"){if(f<c+u&&!r.nextContentHasIndent(o,f,u))return f;var $=new qt;if(f=$.parse({indent:u,lineStart:c,src:o},f),this.items.push($),this.valueRange.end=f,f>=o.length){p=null;break}}if(c=f+1,f=w.endOfIndent(o,c),w.atBlank(o,f)){var y=w.endOfWhiteSpace(o,f),O=o[y];(!O||O===`
`||O==="#")&&(f=y)}p=o[f],d=!0}if(!p)break;if(f!==c+u&&(d||p!==":")){if(f<c+u){c>i&&(f=c);break}else if(!this.error){var E="All collection items must start at the same column";this.error=new oe(this,E)}}if(l.type===g.SEQ_ITEM){if(p!=="-"){c>i&&(f=c);break}}else if(p==="-"&&!this.error){var T=o[f+1];if(!T||T===`
`||T==="	"||T===" "){var j="A collection cannot be both a mapping and a sequence";this.error=new oe(this,j)}}var P=s({atLineStart:d,inCollection:!0,indent:u,lineStart:c,parent:this},f);if(!P)return f;if(this.items.push(P),this.valueRange.end=P.valueRange.end,f=w.normalizeOffset(o,P.range.end),p=o[f],d=!1,v=P.includesTrailingLines,p){for(var K=f-1,Z=o[K];Z===" "||Z==="	";)Z=o[--K];Z===`
`&&(c=K+1,d=!0)}var h=vn(P);h&&Array.prototype.push.apply(this.items,h)}return f}},{key:"setOrigRanges",value:function(a,i){return i=fe(ae(r.prototype),"setOrigRanges",this).call(this,a,i),this.items.forEach(function(s){i=s.setOrigRanges(a,i)}),i}},{key:"toString",value:function(){var a=this.context.src,i=this.items,s=this.range,o=this.value;if(o!=null)return o;for(var c=a.slice(s.start,i[0].range.start)+String(i[0]),l=1;l<i.length;++l){var u=i[l],f=u.context,p=f.atLineStart,d=f.indent;if(p)for(var v=0;v<d;++v)c+=" ";c+=String(u)}return w.addStringTerminator(a,s.end,c)}}],[{key:"nextContentHasIndent",value:function(a,i,s){var o=w.endOfLine(a,i)+1;i=w.endOfWhiteSpace(a,o);var c=a[i];return c?i>=o+s?!0:c!=="#"&&c!==`
`?!1:r.nextContentHasIndent(a,i,s):!1}}]),r}(w),Ql=function(e){z(r,e);var t=Q(r);function r(){var n;return F(this,r),n=t.call(this,g.DIRECTIVE),n.name=null,n}return W(r,[{key:"parameters",get:function(){var a=this.rawValue;return a?a.trim().split(/[ \t]+/):[]}},{key:"parseName",value:function(a){for(var i=this.context.src,s=a,o=i[s];o&&o!==`
`&&o!=="	"&&o!==" ";)o=i[s+=1];return this.name=i.slice(a,s),s}},{key:"parseParameters",value:function(a){for(var i=this.context.src,s=a,o=i[s];o&&o!==`
`&&o!=="#";)o=i[s+=1];return this.valueRange=new X(a,s),s}},{key:"parse",value:function(a,i){this.context=a;var s=this.parseName(i+1);return s=this.parseParameters(s),s=this.parseComment(s),this.range=new X(i,s),s}}]),r}(w),Yl=function(e){z(r,e);var t=Q(r);function r(){var n;return F(this,r),n=t.call(this,g.DOCUMENT),n.directives=null,n.contents=null,n.directivesEndMarker=null,n.documentEndMarker=null,n}return W(r,[{key:"parseDirectives",value:function(a){var i=this.context.src;this.directives=[];for(var s=!0,o=!1,c=a;!w.atDocumentBoundary(i,c,re.DIRECTIVES_END);)switch(c=r.startCommentOrEndBlankLine(i,c),i[c]){case`
`:if(s){var l=new Lt;c=l.parse({src:i},c),c<i.length&&this.directives.push(l)}else c+=1,s=!0;break;case"#":{var u=new qt;c=u.parse({src:i},c),this.directives.push(u),s=!1}break;case"%":{var f=new Ql;c=f.parse({parent:this,src:i},c),this.directives.push(f),o=!0,s=!1}break;default:return o?this.error=new R(this,"Missing directives-end indicator line"):this.directives.length>0&&(this.contents=this.directives,this.directives=[]),c}return i[c]?(this.directivesEndMarker=new X(c,c+3),c+3):(o?this.error=new R(this,"Missing directives-end indicator line"):this.directives.length>0&&(this.contents=this.directives,this.directives=[]),c)}},{key:"parseContents",value:function(a){var i=this.context,s=i.parseNode,o=i.src;this.contents||(this.contents=[]);for(var c=a;o[c-1]==="-";)c-=1;var l=w.endOfWhiteSpace(o,a),u=c===a;for(this.valueRange=new X(l);!w.atDocumentBoundary(o,l,re.DOCUMENT_END);){switch(o[l]){case`
`:if(u){var f=new Lt;l=f.parse({src:o},l),l<o.length&&this.contents.push(f)}else l+=1,u=!0;c=l;break;case"#":{var p=new qt;l=p.parse({src:o},l),this.contents.push(p),u=!1}break;default:{var d=w.endOfIndent(o,l),v={atLineStart:u,indent:-1,inFlow:!1,inCollection:!1,lineStart:c,parent:this},m=s(v,d);if(!m)return this.valueRange.end=d;this.contents.push(m),l=m.range.end,u=!1;var $=vn(m);$&&Array.prototype.push.apply(this.contents,$)}}l=r.startCommentOrEndBlankLine(o,l)}if(this.valueRange.end=l,o[l]&&(this.documentEndMarker=new X(l,l+3),l+=3,o[l])){if(l=w.endOfWhiteSpace(o,l),o[l]==="#"){var y=new qt;l=y.parse({src:o},l),this.contents.push(y)}switch(o[l]){case`
`:l+=1;break;case void 0:break;default:this.error=new oe(this,"Document end marker line cannot have a non-comment suffix")}}return l}},{key:"parse",value:function(a,i){a.root=this,this.context=a;var s=a.src,o=s.charCodeAt(i)===65279?i+1:i;return o=this.parseDirectives(o),o=this.parseContents(o),o}},{key:"setOrigRanges",value:function(a,i){return i=fe(ae(r.prototype),"setOrigRanges",this).call(this,a,i),this.directives.forEach(function(s){i=s.setOrigRanges(a,i)}),this.directivesEndMarker&&(i=this.directivesEndMarker.setOrigRange(a,i)),this.contents.forEach(function(s){i=s.setOrigRanges(a,i)}),this.documentEndMarker&&(i=this.documentEndMarker.setOrigRange(a,i)),i}},{key:"toString",value:function(){var a=this.contents,i=this.directives,s=this.value;if(s!=null)return s;var o=i.join("");return a.length>0&&((i.length>0||a[0].type===g.COMMENT)&&(o+=`---
`),o+=a.join("")),o[o.length-1]!==`
`&&(o+=`
`),o}}],[{key:"startCommentOrEndBlankLine",value:function(a,i){var s=w.endOfWhiteSpace(a,i),o=a[s];return o==="#"||o===`
`?s:i}}]),r}(w),Gl=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.apply(this,arguments)}return W(r,[{key:"parse",value:function(a,i){this.context=a;var s=a.src,o=w.endOfIdentifier(s,i+1);return this.valueRange=new X(i+1,o),o=w.endOfWhiteSpace(s,o),o=this.parseComment(o),o}}]),r}(w),Te={CLIP:"CLIP",KEEP:"KEEP",STRIP:"STRIP"},Hl=function(e){z(r,e);var t=Q(r);function r(n,a){var i;return F(this,r),i=t.call(this,n,a),i.blockIndent=null,i.chomping=Te.CLIP,i.header=null,i}return W(r,[{key:"includesTrailingLines",get:function(){return this.chomping===Te.KEEP}},{key:"strValue",get:function(){if(!this.valueRange||!this.context)return null;var a=this.valueRange,i=a.start,s=a.end,o=this.context,c=o.indent,l=o.src;if(this.valueRange.isEmpty())return"";for(var u=null,f=l[s-1];f===`
`||f==="	"||f===" ";){if(s-=1,s<=i){if(this.chomping===Te.KEEP)break;return""}f===`
`&&(u=s),f=l[s-1]}var p=s+1;u&&(this.chomping===Te.KEEP?(p=u,s=this.valueRange.end):s=u);for(var d=c+this.blockIndent,v=this.type===g.BLOCK_FOLDED,m=!0,$="",y="",O=!1,E=i;E<s;++E){for(var T=0;T<d&&l[E]===" ";++T)E+=1;var j=l[E];if(j===`
`)y===`
`?$+=`
`:y=`
`;else{var P=w.endOfLine(l,E),K=l.slice(E,P);E=P,v&&(j===" "||j==="	")&&E<p?(y===" "?y=`
`:!O&&!m&&y===`
`&&(y=`

`),$+=y+K,y=P<s&&l[P]||"",O=!0):($+=y+K,y=v&&E<p?" ":`
`,O=!1),m&&K!==""&&(m=!1)}}return this.chomping===Te.STRIP?$:$+`
`}},{key:"parseBlockHeader",value:function(a){for(var i=this.context.src,s=a+1,o="";;){var c=i[s];switch(c){case"-":this.chomping=Te.STRIP;break;case"+":this.chomping=Te.KEEP;break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":o+=c;break;default:return this.blockIndent=Number(o)||null,this.header=new X(a,s),s}s+=1}}},{key:"parseBlockValue",value:function(a){for(var i=this.context,s=i.indent,o=i.src,c=!!this.blockIndent,l=a,u=a,f=1,p=o[l];p===`
`&&(l+=1,!w.atDocumentBoundary(o,l));p=o[l]){var d=w.endOfBlockIndent(o,s,l);if(d===null)break;var v=o[d],m=d-(l+s);if(this.blockIndent){if(v&&v!==`
`&&m<this.blockIndent){if(o[d]==="#")break;if(!this.error){var y=c?"explicit indentation indicator":"first line",O="Block scalars must not be less indented than their ".concat(y);this.error=new R(this,O)}}}else if(o[d]!==`
`){if(m<f){var $="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";this.error=new R(this,$)}this.blockIndent=m}else m>f&&(f=m);o[d]===`
`?l=d:l=u=w.endOfLine(o,d)}return this.chomping!==Te.KEEP&&(l=o[u]?u+1:u),this.valueRange=new X(a+1,l),l}},{key:"parse",value:function(a,i){this.context=a;var s=a.src,o=this.parseBlockHeader(i);return o=w.endOfWhiteSpace(s,o),o=this.parseComment(o),o=this.parseBlockValue(o),o}},{key:"setOrigRanges",value:function(a,i){return i=fe(ae(r.prototype),"setOrigRanges",this).call(this,a,i),this.header?this.header.setOrigRange(a,i):i}}]),r}(w),Xl=function(e){z(r,e);var t=Q(r);function r(n,a){var i;return F(this,r),i=t.call(this,n,a),i.items=null,i}return W(r,[{key:"prevNodeIsJsonLike",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.items.length,i=this.items[a-1];return!!i&&(i.jsonLike||i.type===g.COMMENT&&this.prevNodeIsJsonLike(a-1))}},{key:"parse",value:function(a,i){this.context=a;var s=a.parseNode,o=a.src,c=a.indent,l=a.lineStart,u=o[i];this.items=[{char:u,offset:i}];var f=w.endOfWhiteSpace(o,i+1);for(u=o[f];u&&u!=="]"&&u!=="}";){switch(u){case`
`:{l=f+1;var p=w.endOfWhiteSpace(o,l);if(o[p]===`
`){var d=new Lt;l=d.parse({src:o},l),this.items.push(d)}if(f=w.endOfIndent(o,l),f<=l+c&&(u=o[f],f<l+c||u!=="]"&&u!=="}")){var v="Insufficient indentation in flow collection";this.error=new R(this,v)}}break;case",":this.items.push({char:u,offset:f}),f+=1;break;case"#":{var m=new qt;f=m.parse({src:o},f),this.items.push(m)}break;case"?":case":":{var $=o[f+1];if($===`
`||$==="	"||$===" "||$===","||u===":"&&this.prevNodeIsJsonLike()){this.items.push({char:u,offset:f}),f+=1;break}}default:{var y=s({atLineStart:!1,inCollection:!1,inFlow:!0,indent:-1,lineStart:l,parent:this},f);if(!y)return this.valueRange=new X(i,f),f;this.items.push(y),f=w.normalizeOffset(o,y.range.end)}}f=w.endOfWhiteSpace(o,f),u=o[f]}return this.valueRange=new X(i,f+1),u&&(this.items.push({char:u,offset:f}),f=w.endOfWhiteSpace(o,f+1),f=this.parseComment(f)),f}},{key:"setOrigRanges",value:function(a,i){return i=fe(ae(r.prototype),"setOrigRanges",this).call(this,a,i),this.items.forEach(function(s){if(s instanceof w)i=s.setOrigRanges(a,i);else if(a.length===0)s.origOffset=s.offset;else{for(var o=i;o<a.length&&!(a[o]>s.offset);)++o;s.origOffset=s.offset+o,i=o}}),i}},{key:"toString",value:function(){var a=this.context.src,i=this.items,s=this.range,o=this.value;if(o!=null)return o;var c=i.filter(function(f){return f instanceof w}),l="",u=s.start;return c.forEach(function(f){var p=a.slice(u,f.range.start);u=f.range.end,l+=p+String(f),l[l.length-1]===`
`&&a[u-1]!==`
`&&a[u]===`
`&&(u+=1)}),l+=a.slice(u,s.end),w.addStringTerminator(a,s.end,l)}}]),r}(w),Zl=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.apply(this,arguments)}return W(r,[{key:"strValue",get:function(){if(!this.valueRange||!this.context)return null;var a=[],i=this.valueRange,s=i.start,o=i.end,c=this.context,l=c.indent,u=c.src;u[o-1]!=='"'&&a.push(new oe(this,'Missing closing "quote'));for(var f="",p=s+1;p<o-1;++p){var d=u[p];if(d===`
`){w.atDocumentBoundary(u,p+1)&&a.push(new R(this,"Document boundary indicators are not allowed within string values"));var v=w.foldNewline(u,p,l),m=v.fold,$=v.offset,y=v.error;f+=m,p=$,y&&a.push(new R(this,"Multi-line double-quoted string needs to be sufficiently indented"))}else if(d==="\\")switch(p+=1,u[p]){case"0":f+="\0";break;case"a":f+="\x07";break;case"b":f+="\b";break;case"e":f+="";break;case"f":f+="\f";break;case"n":f+=`
`;break;case"r":f+="\r";break;case"t":f+="	";break;case"v":f+="\v";break;case"N":f+="\x85";break;case"_":f+="\xA0";break;case"L":f+="\u2028";break;case"P":f+="\u2029";break;case" ":f+=" ";break;case'"':f+='"';break;case"/":f+="/";break;case"\\":f+="\\";break;case"	":f+="	";break;case"x":f+=this.parseCharCode(p+1,2,a),p+=2;break;case"u":f+=this.parseCharCode(p+1,4,a),p+=4;break;case"U":f+=this.parseCharCode(p+1,8,a),p+=8;break;case`
`:for(;u[p+1]===" "||u[p+1]==="	";)p+=1;break;default:a.push(new oe(this,"Invalid escape sequence ".concat(u.substr(p-1,2)))),f+="\\"+u[p]}else if(d===" "||d==="	"){for(var O=p,E=u[p+1];E===" "||E==="	";)p+=1,E=u[p+1];E!==`
`&&(f+=p>O?u.slice(O,p+1):d)}else f+=d}return a.length>0?{errors:a,str:f}:f}},{key:"parseCharCode",value:function(a,i,s){var o=this.context.src,c=o.substr(a,i),l=c.length===i&&/^[0-9a-fA-F]+$/.test(c),u=l?parseInt(c,16):NaN;return isNaN(u)?(s.push(new oe(this,"Invalid escape sequence ".concat(o.substr(a-2,i+2)))),o.substr(a-2,i+2)):String.fromCodePoint(u)}},{key:"parse",value:function(a,i){this.context=a;var s=a.src,o=r.endOfQuote(s,i+1);return this.valueRange=new X(i,o),o=w.endOfWhiteSpace(s,o),o=this.parseComment(o),o}}],[{key:"endOfQuote",value:function(a,i){for(var s=a[i];s&&s!=='"';)i+=s==="\\"?2:1,s=a[i];return i+1}}]),r}(w),eu=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.apply(this,arguments)}return W(r,[{key:"strValue",get:function(){if(!this.valueRange||!this.context)return null;var a=[],i=this.valueRange,s=i.start,o=i.end,c=this.context,l=c.indent,u=c.src;u[o-1]!=="'"&&a.push(new oe(this,"Missing closing 'quote"));for(var f="",p=s+1;p<o-1;++p){var d=u[p];if(d===`
`){w.atDocumentBoundary(u,p+1)&&a.push(new R(this,"Document boundary indicators are not allowed within string values"));var v=w.foldNewline(u,p,l),m=v.fold,$=v.offset,y=v.error;f+=m,p=$,y&&a.push(new R(this,"Multi-line single-quoted string needs to be sufficiently indented"))}else if(d==="'")f+=d,p+=1,u[p]!=="'"&&a.push(new oe(this,"Unescaped single quote? This should not happen."));else if(d===" "||d==="	"){for(var O=p,E=u[p+1];E===" "||E==="	";)p+=1,E=u[p+1];E!==`
`&&(f+=p>O?u.slice(O,p+1):d)}else f+=d}return a.length>0?{errors:a,str:f}:f}},{key:"parse",value:function(a,i){this.context=a;var s=a.src,o=r.endOfQuote(s,i+1);return this.valueRange=new X(i,o),o=w.endOfWhiteSpace(s,o),o=this.parseComment(o),o}}],[{key:"endOfQuote",value:function(a,i){for(var s=a[i];s;)if(s==="'"){if(a[i+1]!=="'")break;s=a[i+=2]}else s=a[i+=1];return i+1}}]),r}(w);function tu(e,t){switch(e){case g.ALIAS:return new Gl(e,t);case g.BLOCK_FOLDED:case g.BLOCK_LITERAL:return new Hl(e,t);case g.FLOW_MAP:case g.FLOW_SEQ:return new Xl(e,t);case g.MAP_KEY:case g.MAP_VALUE:case g.SEQ_ITEM:return new hn(e,t);case g.COMMENT:case g.PLAIN:return new hi(e,t);case g.QUOTE_DOUBLE:return new Zl(e,t);case g.QUOTE_SINGLE:return new eu(e,t);default:return null}}var ru=function(){function e(){var t=this,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.atLineStart,i=n.inCollection,s=n.inFlow,o=n.indent,c=n.lineStart,l=n.parent;F(this,e),se(this,"parseNode",function(u,f){if(w.atDocumentBoundary(t.src,f))return null;var p=new e(t,u),d=p.parseProps(f),v=d.props,m=d.type,$=d.valueStart,y=tu(m,v),O=y.parse(p,$);if(y.range=new X(f,O),O<=f&&(y.error=new Error("Node#parse consumed no characters"),y.error.parseEnd=O,y.error.source=y,y.range.end=f+1),p.nodeStartsCollection(y)){!y.error&&!p.atLineStart&&p.parent.type===g.DOCUMENT&&(y.error=new oe(y,"Block collection must not have preceding content here (e.g. directives-end indicator)"));var E=new vi(y);return O=E.parse(new e(p),O),E.range=new X(f,O),E}return y}),this.atLineStart=a!=null?a:r.atLineStart||!1,this.inCollection=i!=null?i:r.inCollection||!1,this.inFlow=s!=null?s:r.inFlow||!1,this.indent=o!=null?o:r.indent,this.lineStart=c!=null?c:r.lineStart,this.parent=l!=null?l:r.parent||{},this.root=r.root,this.src=r.src}return W(e,[{key:"nodeStartsCollection",value:function(r){var n=this.inCollection,a=this.inFlow,i=this.src;if(n||a)return!1;if(r instanceof hn)return!0;var s=r.range.end;return i[s]===`
`||i[s-1]===`
`?!1:(s=w.endOfWhiteSpace(i,s),i[s]===":")}},{key:"parseProps",value:function(r){var n=this.inFlow,a=this.parent,i=this.src,s=[],o=!1;r=this.atLineStart?w.endOfIndent(i,r):w.endOfWhiteSpace(i,r);for(var c=i[r];c===re.ANCHOR||c===re.COMMENT||c===re.TAG||c===`
`;){if(c===`
`){var l=r,u=void 0;do u=l+1,l=w.endOfIndent(i,u);while(i[l]===`
`);var f=l-(u+this.indent),p=a.type===g.SEQ_ITEM&&a.context.atLineStart;if(i[l]!=="#"&&!w.nextNodeIsIndented(i[l],f,!p))break;this.atLineStart=!0,this.lineStart=u,o=!1,r=l}else if(c===re.COMMENT){var d=w.endOfLine(i,r+1);s.push(new X(r,d)),r=d}else{var v=w.endOfIdentifier(i,r+1);c===re.TAG&&i[v]===","&&/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(i.slice(r+1,v+13))&&(v=w.endOfIdentifier(i,v+5)),s.push(new X(r,v)),o=!0,r=w.endOfWhiteSpace(i,v)}c=i[r]}o&&c===":"&&w.atBlank(i,r+1,!0)&&(r-=1);var m=e.parseType(i,r,n);return{props:s,type:m,valueStart:r}}}],[{key:"parseType",value:function(r,n,a){switch(r[n]){case"*":return g.ALIAS;case">":return g.BLOCK_FOLDED;case"|":return g.BLOCK_LITERAL;case"{":return g.FLOW_MAP;case"[":return g.FLOW_SEQ;case"?":return!a&&w.atBlank(r,n+1,!0)?g.MAP_KEY:g.PLAIN;case":":return!a&&w.atBlank(r,n+1,!0)?g.MAP_VALUE:g.PLAIN;case"-":return!a&&w.atBlank(r,n+1,!0)?g.SEQ_ITEM:g.PLAIN;case'"':return g.QUOTE_DOUBLE;case"'":return g.QUOTE_SINGLE;default:return g.PLAIN}}}]),e}();function yn(e){var t=[];e.indexOf("\r")!==-1&&(e=e.replace(/\r\n?/g,function(s,o){return s.length>1&&t.push(o),`
`}));var r=[],n=0;do{var a=new Yl,i=new ru({src:e});n=a.parse(i,n),r.push(a)}while(n<e.length);return r.setOrigRanges=function(){if(t.length===0)return!1;for(var s=1;s<t.length;++s)t[s]-=s;for(var o=0,c=0;c<r.length;++c)o=r[c].setOrigRanges(t,o);return t.splice(0,t.length),!0},r.toString=function(){return r.join(`...
`)},r}function nu(e,t,r){if(!r)return e;var n=r.replace(/[\s\S]^/gm,"$&".concat(t,"#"));return"#".concat(n,`
`).concat(t).concat(e)}function nt(e,t,r){return r?r.indexOf(`
`)===-1?"".concat(e," #").concat(r):"".concat(e,`
`)+r.replace(/^/gm,"".concat(t||"","#")):e}var pe=function e(){F(this,e)};function we(e,t,r){if(Array.isArray(e))return e.map(function(i,s){return we(i,String(s),r)});if(e&&typeof e.toJSON=="function"){var n=r&&r.anchors&&r.anchors.get(e);n&&(r.onCreate=function(i){n.res=i,delete r.onCreate});var a=e.toJSON(t,r);return n&&r.onCreate&&r.onCreate(a),a}return(!r||!r.keep)&&typeof e=="bigint"?Number(e):e}var J=function(e){z(r,e);var t=Q(r);function r(n){var a;return F(this,r),a=t.call(this),a.value=n,a}return W(r,[{key:"toJSON",value:function(a,i){return i&&i.keep?this.value:we(this.value,a,i)}},{key:"toString",value:function(){return String(this.value)}}]),r}(pe);function yi(e,t,r){for(var n=r,a=t.length-1;a>=0;--a){var i=t[a];if(Number.isInteger(i)&&i>=0){var s=[];s[i]=n,n=s}else{var o={};Object.defineProperty(o,i,{value:n,writable:!0,enumerable:!0,configurable:!0}),n=o}}return e.createNode(n,!1)}var Dt=function(t){return t==null||he(t)==="object"&&t[Symbol.iterator]().next().done},ie=function(e){z(r,e);var t=Q(r);function r(n){var a;return F(this,r),a=t.call(this),se(ge(a),"items",[]),a.schema=n,a}return W(r,[{key:"addIn",value:function(a,i){if(Dt(a))this.add(i);else{var s=Mt(a),o=s[0],c=s.slice(1),l=this.get(o,!0);if(l instanceof r)l.addIn(c,i);else if(l===void 0&&this.schema)this.set(o,yi(this.schema,c,i));else throw new Error("Expected YAML collection at ".concat(o,". Remaining path: ").concat(c))}}},{key:"deleteIn",value:function(a){var i=Mt(a),s=i[0],o=i.slice(1);if(o.length===0)return this.delete(s);var c=this.get(s,!0);if(c instanceof r)return c.deleteIn(o);throw new Error("Expected YAML collection at ".concat(s,". Remaining path: ").concat(o))}},{key:"getIn",value:function(a,i){var s=Mt(a),o=s[0],c=s.slice(1),l=this.get(o,!0);return c.length===0?!i&&l instanceof J?l.value:l:l instanceof r?l.getIn(c,i):void 0}},{key:"hasAllNullValues",value:function(){return this.items.every(function(a){if(!a||a.type!=="PAIR")return!1;var i=a.value;return i==null||i instanceof J&&i.value==null&&!i.commentBefore&&!i.comment&&!i.tag})}},{key:"hasIn",value:function(a){var i=Mt(a),s=i[0],o=i.slice(1);if(o.length===0)return this.has(s);var c=this.get(s,!0);return c instanceof r?c.hasIn(o):!1}},{key:"setIn",value:function(a,i){var s=Mt(a),o=s[0],c=s.slice(1);if(c.length===0)this.set(o,i);else{var l=this.get(o,!0);if(l instanceof r)l.setIn(c,i);else if(l===void 0&&this.schema)this.set(o,yi(this.schema,c,i));else throw new Error("Expected YAML collection at ".concat(o,". Remaining path: ").concat(c))}}},{key:"toJSON",value:function(){return null}},{key:"toString",value:function(a,i,s,o){var c=this,l=i.blockItem,u=i.flowChars,f=i.isMap,p=i.itemIndent,d=a,v=d.indent,m=d.indentStep,$=d.stringify,y=this.type===g.FLOW_MAP||this.type===g.FLOW_SEQ||a.inFlow;y&&(p+=m);var O=f&&this.hasAllNullValues();a=Object.assign({},a,{allNullValues:O,indent:p,inFlow:y,type:null});var E=!1,T=!1,j=this.items.reduce(function(U,x,te){var be;x&&(!E&&x.spaceBefore&&U.push({type:"comment",str:""}),x.commentBefore&&x.commentBefore.match(/^.*$/gm).forEach(function(Se){U.push({type:"comment",str:"#".concat(Se)})}),x.comment&&(be=x.comment),y&&(!E&&x.spaceBefore||x.commentBefore||x.comment||x.key&&(x.key.commentBefore||x.key.comment)||x.value&&(x.value.commentBefore||x.value.comment))&&(T=!0)),E=!1;var H=$(x,a,function(){return be=null},function(){return E=!0});return y&&!T&&H.includes(`
`)&&(T=!0),y&&te<c.items.length-1&&(H+=","),H=nt(H,p,be),E&&(be||y)&&(E=!1),U.push({type:"item",str:H}),U},[]),P;if(j.length===0)P=u.start+u.end;else if(y){var K=u.start,Z=u.end,h=j.map(function(U){return U.str});if(T||h.reduce(function(U,x){return U+x.length+2},2)>r.maxFlowStringSingleLineLength){P=K;var S=Y(h),I;try{for(S.s();!(I=S.n()).done;){var k=I.value;P+=k?`
`.concat(m).concat(v).concat(k):`
`}}catch(U){S.e(U)}finally{S.f()}P+=`
`.concat(v).concat(Z)}else P="".concat(K," ").concat(h.join(" ")," ").concat(Z)}else{var L=j.map(l);P=L.shift();var N=Y(L),B;try{for(N.s();!(B=N.n()).done;){var G=B.value;P+=G?`
`.concat(v).concat(G):`
`}}catch(U){N.e(U)}finally{N.f()}}return this.comment?(P+=`
`+this.comment.replace(/^/gm,"".concat(v,"#")),s&&s()):E&&o&&o(),P}}]),r}(pe);se(ie,"maxFlowStringSingleLineLength",60);function gr(e){var t=e instanceof J?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),Number.isInteger(t)&&t>=0?t:null}var Ie=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.apply(this,arguments)}return W(r,[{key:"add",value:function(a){this.items.push(a)}},{key:"delete",value:function(a){var i=gr(a);if(typeof i!="number")return!1;var s=this.items.splice(i,1);return s.length>0}},{key:"get",value:function(a,i){var s=gr(a);if(typeof s=="number"){var o=this.items[s];return!i&&o instanceof J?o.value:o}}},{key:"has",value:function(a){var i=gr(a);return typeof i=="number"&&i<this.items.length}},{key:"set",value:function(a,i){var s=gr(a);if(typeof s!="number")throw new Error("Expected a valid index, not ".concat(a,"."));this.items[s]=i}},{key:"toJSON",value:function(a,i){var s=[];i&&i.onCreate&&i.onCreate(s);var o=0,c=Y(this.items),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;s.push(we(u,String(o++),i))}}catch(f){c.e(f)}finally{c.f()}return s}},{key:"toString",value:function(a,i,s){return a?fe(ae(r.prototype),"toString",this).call(this,a,{blockItem:function(c){return c.type==="comment"?c.str:"- ".concat(c.str)},flowChars:{start:"[",end:"]"},isMap:!1,itemIndent:(a.indent||"")+"  "},i,s):JSON.stringify(this)}}]),r}(ie),au=function(t,r,n){return r===null?"":he(r)!=="object"?String(r):t instanceof pe&&n&&n.doc?t.toString({anchors:Object.create(null),doc:n.doc,indent:"",indentStep:n.indentStep,inFlow:!0,inStringifyKey:!0,stringify:n.stringify}):JSON.stringify(r)},D=function(e){z(r,e);var t=Q(r);function r(n){var a,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return F(this,r),a=t.call(this),a.key=n,a.value=i,a.type=r.Type.PAIR,a}return W(r,[{key:"commentBefore",get:function(){return this.key instanceof pe?this.key.commentBefore:void 0},set:function(a){if(this.key==null&&(this.key=new J(null)),this.key instanceof pe)this.key.commentBefore=a;else{var i="Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.";throw new Error(i)}}},{key:"addToJSMap",value:function(a,i){var s=we(this.key,"",a);if(i instanceof Map){var o=we(this.value,s,a);i.set(s,o)}else if(i instanceof Set)i.add(s);else{var c=au(this.key,s,a),l=we(this.value,c,a);c in i?Object.defineProperty(i,c,{value:l,writable:!0,enumerable:!0,configurable:!0}):i[c]=l}return i}},{key:"toJSON",value:function(a,i){var s=i&&i.mapAsMap?new Map:{};return this.addToJSMap(i,s)}},{key:"toString",value:function(a,i,s){if(!a||!a.doc)return JSON.stringify(this);var o=a.doc.options,c=o.indent,l=o.indentSeq,u=o.simpleKeys,f=this.key,p=this.value,d=f instanceof pe&&f.comment;if(u){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(f instanceof ie){var v="With simple keys, collection cannot be used as a key value";throw new Error(v)}}var m=!u&&(!f||d||(f instanceof pe?f instanceof ie||f.type===g.BLOCK_FOLDED||f.type===g.BLOCK_LITERAL:he(f)==="object")),$=a,y=$.doc,O=$.indent,E=$.indentStep,T=$.stringify;a=Object.assign({},a,{implicitKey:!m,indent:O+E});var j=!1,P=T(f,a,function(){return d=null},function(){return j=!0});if(P=nt(P,a.indent,d),!m&&P.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");m=!0}if(a.allNullValues&&!u)return this.comment?(P=nt(P,a.indent,this.comment),i&&i()):j&&!d&&s&&s(),a.inFlow&&!m?P:"? ".concat(P);P=m?"? ".concat(P,`
`).concat(O,":"):"".concat(P,":"),this.comment&&(P=nt(P,a.indent,this.comment),i&&i());var K="",Z=null;if(p instanceof pe){if(p.spaceBefore&&(K=`
`),p.commentBefore){var h=p.commentBefore.replace(/^/gm,"".concat(a.indent,"#"));K+=`
`.concat(h)}Z=p.comment}else p&&he(p)==="object"&&(p=y.schema.createNode(p,!0));a.implicitKey=!1,!m&&!this.comment&&p instanceof J&&(a.indentAtStart=P.length+1),j=!1,!l&&c>=2&&!a.inFlow&&!m&&p instanceof Ie&&p.type!==g.FLOW_SEQ&&!p.tag&&!y.anchors.getName(p)&&(a.indent=a.indent.substr(2));var S=T(p,a,function(){return Z=null},function(){return j=!0}),I=" ";if(K||this.comment)I="".concat(K,`
`).concat(a.indent);else if(!m&&p instanceof ie){var k=S[0]==="["||S[0]==="{";(!k||S.includes(`
`))&&(I=`
`.concat(a.indent))}else S[0]===`
`&&(I="");return j&&!Z&&s&&s(),nt(P+I+S,a.indent,Z)}}]),r}(pe);se(D,"Type",{PAIR:"PAIR",MERGE_PAIR:"MERGE_PAIR"});var iu=function e(t,r){if(t instanceof Ae){var n=r.get(t.source);return n.count*n.aliasCount}else if(t instanceof ie){var a=0,i=Y(t.items),s;try{for(i.s();!(s=i.n()).done;){var o=s.value,c=e(o,r);c>a&&(a=c)}}catch(f){i.e(f)}finally{i.f()}return a}else if(t instanceof D){var l=e(t.key,r),u=e(t.value,r);return Math.max(l,u)}return 1},Ae=function(e){z(r,e);var t=Q(r);function r(n){var a;return F(this,r),a=t.call(this),a.source=n,a.type=g.ALIAS,a}return W(r,[{key:"tag",set:function(a){throw new Error("Alias nodes cannot have tags")}},{key:"toJSON",value:function(a,i){if(!i)return we(this.source,a,i);var s=i.anchors,o=i.maxAliasCount,c=s.get(this.source);if(!c||c.res===void 0){var l="This should not happen: Alias anchor was not resolved?";throw this.cstNode?new Tt(this.cstNode,l):new ReferenceError(l)}if(o>=0&&(c.count+=1,c.aliasCount===0&&(c.aliasCount=iu(this.source,s)),c.count*c.aliasCount>o)){var u="Excessive alias count indicates a resource exhaustion attack";throw this.cstNode?new Tt(this.cstNode,u):new ReferenceError(u)}return c.res}},{key:"toString",value:function(a){return r.stringify(this,a)}}],[{key:"stringify",value:function(a,i){var s=a.range,o=a.source,c=i.anchors,l=i.doc,u=i.implicitKey,f=i.inStringifyKey,p=Object.keys(c).find(function(v){return c[v]===o});if(!p&&f&&(p=l.anchors.getName(o)||l.anchors.newName()),p)return"*".concat(p).concat(u?" ":"");var d=l.anchors.getName(o)?"Alias node must be after source node":"Source node not found for alias node";throw new Error("".concat(d," [").concat(s,"]"))}}]),r}(pe);se(Ae,"default",!0);function We(e,t){var r=t instanceof J?t.value:t,n=Y(e),a;try{for(n.s();!(a=n.n()).done;){var i=a.value;if(i instanceof D&&(i.key===t||i.key===r||i.key&&i.key.value===r))return i}}catch(s){n.e(s)}finally{n.f()}}var me=function(e){z(r,e);var t=Q(r);function r(){return F(this,r),t.apply(this,arguments)}return W(r,[{key:"add",value:function(a,i){a?a instanceof D||(a=new D(a.key||a,a.value)):a=new D(a);var s=We(this.items,a.key),o=this.schema&&this.schema.sortMapEntries;if(s)if(i)s.value=a.value;else throw new Error("Key ".concat(a.key," already set"));else if(o){var c=this.items.findIndex(function(l){return o(a,l)<0});c===-1?this.items.push(a):this.items.splice(c,0,a)}else this.items.push(a)}},{key:"delete",value:function(a){var i=We(this.items,a);if(!i)return!1;var s=this.items.splice(this.items.indexOf(i),1);return s.length>0}},{key:"get",value:function(a,i){var s=We(this.items,a),o=s&&s.value;return!i&&o instanceof J?o.value:o}},{key:"has",value:function(a){return!!We(this.items,a)}},{key:"set",value:function(a,i){this.add(new D(a,i),!0)}},{key:"toJSON",value:function(a,i,s){var o=s?new s:i&&i.mapAsMap?new Map:{};i&&i.onCreate&&i.onCreate(o);var c=Y(this.items),l;try{for(c.s();!(l=c.n()).done;){var u=l.value;u.addToJSMap(i,o)}}catch(f){c.e(f)}finally{c.f()}return o}},{key:"toString",value:function(a,i,s){if(!a)return JSON.stringify(this);var o=Y(this.items),c;try{for(o.s();!(c=o.n()).done;){var l=c.value;if(!(l instanceof D))throw new Error("Map items must all be pairs; found ".concat(JSON.stringify(l)," instead"))}}catch(u){o.e(u)}finally{o.f()}return fe(ae(r.prototype),"toString",this).call(this,a,{blockItem:function(f){return f.str},flowChars:{start:"{",end:"}"},isMap:!0,itemIndent:a.indent||""},i,s)}}]),r}(ie),gi="<<",$i=function(e){z(r,e);var t=Q(r);function r(n){var a;if(F(this,r),n instanceof D){var i=n.value;i instanceof Ie||(i=new Ie,i.items.push(n.value),i.range=n.value.range),a=t.call(this,n.key,i),a.range=n.range}else a=t.call(this,new J(gi),new Ie);return a.type=D.Type.MERGE_PAIR,li(a)}return W(r,[{key:"addToJSMap",value:function(a,i){var s=Y(this.value.items),o;try{for(s.s();!(o=s.n()).done;){var c=o.value.source;if(!(c instanceof me))throw new Error("Merge sources must be maps");var l=c.toJSON(null,a,Map),u=Y(l),f;try{for(u.s();!(f=u.n()).done;){var p=Rt(f.value,2),d=p[0],v=p[1];i instanceof Map?i.has(d)||i.set(d,v):i instanceof Set?i.add(d):Object.prototype.hasOwnProperty.call(i,d)||Object.defineProperty(i,d,{value:v,writable:!0,enumerable:!0,configurable:!0})}}catch(m){u.e(m)}finally{u.f()}}}catch(m){s.e(m)}finally{s.f()}return i}},{key:"toString",value:function(a,i){var s=this.value;if(s.items.length>1)return fe(ae(r.prototype),"toString",this).call(this,a,i);this.value=s.items[0];var o=fe(ae(r.prototype),"toString",this).call(this,a,i);return this.value=s,o}}]),r}(D),Bt={defaultType:g.BLOCK_LITERAL,lineWidth:76},je={trueStr:"true",falseStr:"false"},Le={asBigInt:!1},at={nullStr:"null"},Ne={defaultType:g.PLAIN,doubleQuoted:{jsonEncoding:!1,minMultiLineLength:40},fold:{lineWidth:80,minContentWidth:20}};function gn(e,t,r){var n=Y(t),a;try{for(n.s();!(a=n.n()).done;){var i=a.value,s=i.format,o=i.test,c=i.resolve;if(o){var l=e.match(o);if(l){var u=c.apply(null,l);return u instanceof J||(u=new J(u)),s&&(u.format=s),u}}}}catch(f){n.e(f)}finally{n.f()}return r&&(e=r(e)),new J(e)}var bi="flow",$n="block",$r="quoted",Si=function(t,r){for(var n=t[r+1];n===" "||n==="	";){do n=t[r+=1];while(n&&n!==`
`);n=t[r+1]}return r};function br(e,t,r,n){var a=n.indentAtStart,i=n.lineWidth,s=i===void 0?80:i,o=n.minContentWidth,c=o===void 0?20:o,l=n.onFold,u=n.onOverflow;if(!s||s<0)return e;var f=Math.max(1+c,1+s-t.length);if(e.length<=f)return e;var p=[],d={},v=s-t.length;typeof a=="number"&&(a>s-Math.max(2,c)?p.push(0):v=s-a);var m=void 0,$=void 0,y=!1,O=-1,E=-1,T=-1;r===$n&&(O=Si(e,O),O!==-1&&(v=O+f));for(var j;j=e[O+=1];){if(r===$r&&j==="\\"){switch(E=O,e[O+1]){case"x":O+=3;break;case"u":O+=5;break;case"U":O+=9;break;default:O+=1}T=O}if(j===`
`)r===$n&&(O=Si(e,O)),v=O+f,m=void 0;else{if(j===" "&&$&&$!==" "&&$!==`
`&&$!=="	"){var P=e[O+1];P&&P!==" "&&P!==`
`&&P!=="	"&&(m=O)}if(O>=v)if(m)p.push(m),v=m+f,m=void 0;else if(r===$r){for(;$===" "||$==="	";)$=j,j=e[O+=1],y=!0;var K=O>T+1?O-2:E-1;if(d[K])return e;p.push(K),d[K]=!0,v=K+f,m=void 0}else y=!0}$=j}if(y&&u&&u(),p.length===0)return e;l&&l();for(var Z=e.slice(0,p[0]),h=0;h<p.length;++h){var S=p[h],I=p[h+1]||e.length;S===0?Z=`
`.concat(t).concat(e.slice(0,I)):(r===$r&&d[S]&&(Z+="".concat(e[S],"\\")),Z+=`
`.concat(t).concat(e.slice(S+1,I)))}return Z}var bn=function(t){var r=t.indentAtStart;return r?Object.assign({indentAtStart:r},Ne.fold):Ne.fold},Sr=function(t){return/^(%|---|\.\.\.)/m.test(t)};function su(e,t,r){if(!t||t<0)return!1;var n=t-r,a=e.length;if(a<=n)return!1;for(var i=0,s=0;i<a;++i)if(e[i]===`
`){if(i-s>n)return!0;if(s=i+1,a-s<=n)return!1}return!0}function Ke(e,t){var r=t.implicitKey,n=Ne.doubleQuoted,a=n.jsonEncoding,i=n.minMultiLineLength,s=JSON.stringify(e);if(a)return s;for(var o=t.indent||(Sr(e)?"  ":""),c="",l=0,u=0,f=s[u];f;f=s[++u])if(f===" "&&s[u+1]==="\\"&&s[u+2]==="n"&&(c+=s.slice(l,u)+"\\ ",u+=1,l=u,f="\\"),f==="\\")switch(s[u+1]){case"u":{c+=s.slice(l,u);var p=s.substr(u+2,4);switch(p){case"0000":c+="\\0";break;case"0007":c+="\\a";break;case"000b":c+="\\v";break;case"001b":c+="\\e";break;case"0085":c+="\\N";break;case"00a0":c+="\\_";break;case"2028":c+="\\L";break;case"2029":c+="\\P";break;default:p.substr(0,2)==="00"?c+="\\x"+p.substr(2):c+=s.substr(u,6)}u+=5,l=u+1}break;case"n":if(r||s[u+2]==='"'||s.length<i)u+=1;else{for(c+=s.slice(l,u)+`

`;s[u+2]==="\\"&&s[u+3]==="n"&&s[u+4]!=='"';)c+=`
`,u+=2;c+=o,s[u+2]===" "&&(c+="\\"),u+=1,l=u+1}break;default:u+=1}return c=l?c+s.slice(l):s,r?c:br(c,o,$r,bn(t))}function Oi(e,t){if(t.implicitKey){if(/\n/.test(e))return Ke(e,t)}else if(/[ \t]\n|\n[ \t]/.test(e))return Ke(e,t);var r=t.indent||(Sr(e)?"  ":""),n="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
`.concat(r))+"'";return t.implicitKey?n:br(n,r,bi,bn(t))}function Or(e,t,r,n){var a=e.comment,i=e.type,s=e.value;if(/\n[\t ]+$/.test(s)||/^\s*$/.test(s))return Ke(s,t);var o=t.indent||(t.forceBlockIndent||Sr(s)?"  ":""),c=o?"2":"1",l=i===g.BLOCK_FOLDED?!1:i===g.BLOCK_LITERAL?!0:!su(s,Ne.fold.lineWidth,o.length),u=l?"|":">";if(!s)return u+`
`;var f="",p="";if(s=s.replace(/[\n\t ]*$/,function(v){var m=v.indexOf(`
`);return m===-1?u+="-":(s===v||m!==v.length-1)&&(u+="+",n&&n()),p=v.replace(/\n$/,""),""}).replace(/^[\n ]*/,function(v){v.indexOf(" ")!==-1&&(u+=c);var m=v.match(/ +$/);return m?(f=v.slice(0,-m[0].length),m[0]):(f=v,"")}),p&&(p=p.replace(/\n+(?!\n|$)/g,"$&".concat(o))),f&&(f=f.replace(/\n+/g,"$&".concat(o))),a&&(u+=" #"+a.replace(/ ?[\r\n]+/g," "),r&&r()),!s)return"".concat(u).concat(c,`
`).concat(o).concat(p);if(l)return s=s.replace(/\n+/g,"$&".concat(o)),"".concat(u,`
`).concat(o).concat(f).concat(s).concat(p);s=s.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,"$&".concat(o));var d=br("".concat(f).concat(s).concat(p),o,$n,Ne.fold);return"".concat(u,`
`).concat(o).concat(d)}function ou(e,t,r,n){var a=e.comment,i=e.type,s=e.value,o=t.actualString,c=t.implicitKey,l=t.indent,u=t.inFlow;if(c&&/[\n[\]{},]/.test(s)||u&&/[[\]{},]/.test(s))return Ke(s,t);if(!s||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(s))return c||u||s.indexOf(`
`)===-1?s.indexOf('"')!==-1&&s.indexOf("'")===-1?Oi(s,t):Ke(s,t):Or(e,t,r,n);if(!c&&!u&&i!==g.PLAIN&&s.indexOf(`
`)!==-1)return Or(e,t,r,n);if(l===""&&Sr(s))return t.forceBlockIndent=!0,Or(e,t,r,n);var f=s.replace(/\n+/g,`$&
`.concat(l));if(o){var p=t.doc.schema.tags,d=gn(f,p,p.scalarFallback).value;if(typeof d!="string")return Ke(s,t)}var v=c?f:br(f,l,bi,bn(t));return a&&!u&&(v.indexOf(`
`)!==-1||a.indexOf(`
`)!==-1)?(r&&r(),nu(v,l,a)):v}function Sn(e,t,r,n){var a=Ne.defaultType,i=t.implicitKey,s=t.inFlow,o=e,c=o.type,l=o.value;typeof l!="string"&&(l=String(l),e=Object.assign({},e,{value:l}));var u=function(d){switch(d){case g.BLOCK_FOLDED:case g.BLOCK_LITERAL:return Or(e,t,r,n);case g.QUOTE_DOUBLE:return Ke(l,t);case g.QUOTE_SINGLE:return Oi(l,t);case g.PLAIN:return ou(e,t,r,n);default:return null}};(c!==g.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(l)||(i||s)&&(c===g.BLOCK_FOLDED||c===g.BLOCK_LITERAL))&&(c=g.QUOTE_DOUBLE);var f=u(c);if(f===null&&(f=u(a),f===null))throw new Error("Unsupported default string type ".concat(a));return f}function Ce(e){var t=e.format,r=e.minFractionDigits,n=e.tag,a=e.value;if(typeof a=="bigint")return String(a);if(!isFinite(a))return isNaN(a)?".nan":a<0?"-.inf":".inf";var i=JSON.stringify(a);if(!t&&r&&(!n||n==="tag:yaml.org,2002:float")&&/^\d/.test(i)){var s=i.indexOf(".");s<0&&(s=i.length,i+=".");for(var o=r-(i.length-s-1);o-- >0;)i+="0"}return i}function wi(e,t){var r,n;switch(t.type){case g.FLOW_MAP:r="}",n="flow map";break;case g.FLOW_SEQ:r="]",n="flow sequence";break;default:e.push(new R(t,"Not a flow collection!?"));return}for(var a,i=t.items.length-1;i>=0;--i){var s=t.items[i];if(!s||s.type!==g.COMMENT){a=s;break}}if(a&&a.char!==r){var o="Expected ".concat(n," to end with ").concat(r),c;typeof a.offset=="number"?(c=new R(t,o),c.offset=a.offset+1):(c=new R(a,o),a.range&&a.range.end&&(c.offset=a.range.end-a.range.start)),e.push(c)}}function Ii(e,t){var r=t.context.src[t.range.start-1];if(r!==`
`&&r!=="	"&&r!==" "){var n="Comments must be separated from other tokens by white space characters";e.push(new R(t,n))}}function Ei(e,t){var r=String(t),n=r.substr(0,8)+"..."+r.substr(-8);return new R(e,'The "'.concat(n,'" key is too long'))}function xi(e,t){var r=Y(t),n;try{for(r.s();!(n=r.n()).done;){var a=n.value,i=a.afterKey,s=a.before,o=a.comment,c=e.items[s];c?(i&&c.value&&(c=c.value),o===void 0?(i||!c.commentBefore)&&(c.spaceBefore=!0):c.commentBefore?c.commentBefore+=`
`+o:c.commentBefore=o):o!==void 0&&(e.comment?e.comment+=`
`+o:e.comment=o)}}catch(l){r.e(l)}finally{r.f()}}function Ft(e,t){var r=t.strValue;return r?typeof r=="string"?r:(r.errors.forEach(function(n){n.source||(n.source=t),e.errors.push(n)}),r.str):""}function cu(e,t){var r=t.tag,n=r.handle,a=r.suffix,i=e.tagPrefixes.find(function(c){return c.handle===n});if(!i){var s=e.getDefaults().tagPrefixes;if(s&&(i=s.find(function(c){return c.handle===n})),!i)throw new R(t,"The ".concat(n," tag handle is non-default and was not declared."))}if(!a)throw new R(t,"The ".concat(n," tag has no suffix."));if(n==="!"&&(e.version||e.options.version)==="1.0"){if(a[0]==="^")return e.warnings.push(new rt(t,"YAML 1.0 ^ tag expansion is not supported")),a;if(/[:/]/.test(a)){var o=a.match(/^([a-z0-9-]+)\/(.*)/i);return o?"tag:".concat(o[1],".yaml.org,2002:").concat(o[2]):"tag:".concat(a)}}return i.prefix+decodeURIComponent(a)}function lu(e,t){var r=t.tag,n=t.type,a=!1;if(r){var i=r.handle,s=r.suffix,o=r.verbatim;if(o){if(o!=="!"&&o!=="!!")return o;var c="Verbatim tags aren't resolved, so ".concat(o," is invalid.");e.errors.push(new R(t,c))}else if(i==="!"&&!s)a=!0;else try{return cu(e,t)}catch(l){e.errors.push(l)}}switch(n){case g.BLOCK_FOLDED:case g.BLOCK_LITERAL:case g.QUOTE_DOUBLE:case g.QUOTE_SINGLE:return Me.STR;case g.FLOW_MAP:case g.MAP:return Me.MAP;case g.FLOW_SEQ:case g.SEQ:return Me.SEQ;case g.PLAIN:return a?Me.STR:null;default:return null}}function Pi(e,t,r){var n=e.schema.tags,a=[],i=Y(n),s;try{for(i.s();!(s=i.n()).done;){var o=s.value;if(o.tag===r)if(o.test)a.push(o);else{var c=o.resolve(e,t);return c instanceof ie?c:new J(c)}}}catch(u){i.e(u)}finally{i.f()}var l=Ft(e,t);return typeof l=="string"&&a.length>0?gn(l,a,n.scalarFallback):null}function uu(e){var t=e.type;switch(t){case g.FLOW_MAP:case g.MAP:return Me.MAP;case g.FLOW_SEQ:case g.SEQ:return Me.SEQ;default:return Me.STR}}function fu(e,t,r){try{var n=Pi(e,t,r);if(n)return r&&t.tag&&(n.tag=r),n}catch(c){return c.source||(c.source=t),e.errors.push(c),null}try{var a=uu(t);if(!a)throw new Error("The tag ".concat(r," is unavailable"));var i="The tag ".concat(r," is unavailable, falling back to ").concat(a);e.warnings.push(new rt(t,i));var s=Pi(e,t,a);return s.tag=r,s}catch(c){var o=new Tt(t,c.message);return o.stack=c.stack,e.errors.push(o),null}}var pu=function(t){if(!t)return!1;var r=t.type;return r===g.MAP_KEY||r===g.MAP_VALUE||r===g.SEQ_ITEM};function mu(e,t){var r={before:[],after:[]},n=!1,a=!1,i=pu(t.context.parent)?t.context.parent.props.concat(t.props):t.props,s=Y(i),o;try{for(s.s();!(o=s.n()).done;){var c=o.value,l=c.start,u=c.end;switch(t.context.src[l]){case re.COMMENT:{if(!t.commentHasRequiredWhitespace(l)){var f="Comments must be separated from other tokens by white space characters";e.push(new R(t,f))}var p=t.header,d=t.valueRange,v=d&&(l>d.start||p&&l>p.start)?r.after:r.before;v.push(t.context.src.slice(l+1,u));break}case re.ANCHOR:if(n){var m="A node can have at most one anchor";e.push(new R(t,m))}n=!0;break;case re.TAG:if(a){var $="A node can have at most one tag";e.push(new R(t,$))}a=!0;break}}}catch(y){s.e(y)}finally{s.f()}return{comments:r,hasAnchor:n,hasTag:a}}function du(e,t){var r=e.anchors,n=e.errors,a=e.schema;if(t.type===g.ALIAS){var i=t.rawValue,s=r.getNode(i);if(!s){var o="Aliased anchor not found: ".concat(i);return n.push(new Tt(t,o)),null}var c=new Ae(s);return r._cstAliases.push(c),c}var l=lu(e,t);if(l)return fu(e,t,l);if(t.type!==g.PLAIN){var u="Failed to resolve ".concat(t.type," node here");return n.push(new oe(t,u)),null}try{var f=Ft(e,t);return gn(f,a.tags,a.tags.scalarFallback)}catch(p){return p.source||(p.source=t),n.push(p),null}}function qe(e,t){if(!t)return null;t.error&&e.errors.push(t.error);var r=mu(e.errors,t),n=r.comments,a=r.hasAnchor,i=r.hasTag;if(a){var s=e.anchors,o=t.anchor,c=s.getNode(o);c&&(s.map[s.newName(o)]=c),s.map[o]=t}if(t.type===g.ALIAS&&(a||i)){var l="An alias node must not specify any properties";e.errors.push(new R(t,l))}var u=du(e,t);if(u){u.range=[t.range.start,t.range.end],e.options.keepCstNodes&&(u.cstNode=t),e.options.keepNodeTypes&&(u.type=t.type);var f=n.before.join(`
`);f&&(u.commentBefore=u.commentBefore?"".concat(u.commentBefore,`
`).concat(f):f);var p=n.after.join(`
`);p&&(u.comment=u.comment?"".concat(u.comment,`
`).concat(p):p)}return t.resolved=u}function ki(e,t){if(t.type!==g.MAP&&t.type!==g.FLOW_MAP){var r="A ".concat(t.type," node cannot be resolved as a mapping");return e.errors.push(new oe(t,r)),null}var n=t.type===g.FLOW_MAP?gu(e,t):yu(e,t),a=n.comments,i=n.items,s=new me;s.items=i,xi(s,a);for(var o=!1,c=0;c<i.length;++c){var l=i[c].key;if(l instanceof ie&&(o=!0),e.schema.merge&&l&&l.value===gi){i[c]=new $i(i[c]);var u=i[c].value.items,f=null;u.some(function($){if($ instanceof Ae){var y=$.source.type;return y===g.MAP||y===g.FLOW_MAP?!1:f="Merge nodes aliases can only point to maps"}return f="Merge nodes can only have Alias nodes as values"}),f&&e.errors.push(new R(t,f))}else for(var p=c+1;p<i.length;++p){var d=i[p].key;if(l===d||l&&d&&Object.prototype.hasOwnProperty.call(l,"value")&&l.value===d.value){var v='Map keys must be unique; "'.concat(l,'" is repeated');e.errors.push(new R(t,v));break}}}if(o&&!e.options.mapAsMap){var m="Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";e.warnings.push(new rt(t,m))}return t.resolved=s,s}var hu=function(t){var r=t.context,n=r.lineStart,a=r.node,i=r.src,s=t.props;if(s.length===0)return!1;var o=s[0].start;if(a&&o>a.valueRange.start||i[o]!==re.COMMENT)return!1;for(var c=n;c<o;++c)if(i[c]===`
`)return!1;return!0};function vu(e,t){if(!!hu(e)){var r=e.getPropValue(0,re.COMMENT,!0),n=!1,a=t.value.commentBefore;if(a&&a.startsWith(r))t.value.commentBefore=a.substr(r.length+1),n=!0;else{var i=t.value.comment;!e.node&&i&&i.startsWith(r)&&(t.value.comment=i.substr(r.length+1),n=!0)}n&&(t.comment=r)}}function yu(e,t){for(var r=[],n=[],a=void 0,i=null,s=0;s<t.items.length;++s){var o=t.items[s];switch(o.type){case g.BLANK_LINE:r.push({afterKey:!!a,before:n.length});break;case g.COMMENT:r.push({afterKey:!!a,before:n.length,comment:o.comment});break;case g.MAP_KEY:a!==void 0&&n.push(new D(a)),o.error&&e.errors.push(o.error),a=qe(e,o.node),i=null;break;case g.MAP_VALUE:{if(a===void 0&&(a=null),o.error&&e.errors.push(o.error),!o.context.atLineStart&&o.node&&o.node.type===g.MAP&&!o.node.context.atLineStart){var c="Nested mappings are not allowed in compact mappings";e.errors.push(new R(o.node,c))}var l=o.node;if(!l&&o.props.length>0){l=new hi(g.PLAIN,[]),l.context={parent:o,src:o.context.src};var u=o.range.start+1;if(l.range={start:u,end:u},l.valueRange={start:u,end:u},typeof o.range.origStart=="number"){var f=o.range.origStart+1;l.range.origStart=l.range.origEnd=f,l.valueRange.origStart=l.valueRange.origEnd=f}}var p=new D(a,qe(e,l));vu(o,p),n.push(p),a&&typeof i=="number"&&o.range.start>i+1024&&e.errors.push(Ei(t,a)),a=void 0,i=null}break;default:a!==void 0&&n.push(new D(a)),a=qe(e,o),i=o.range.start,o.error&&e.errors.push(o.error);e:for(var d=s+1;;++d){var v=t.items[d];switch(v&&v.type){case g.BLANK_LINE:case g.COMMENT:continue e;case g.MAP_VALUE:break e;default:{var m="Implicit map keys need to be followed by map values";e.errors.push(new R(o,m));break e}}}if(o.valueRangeContainsNewline){var $="Implicit map keys need to be on a single line";e.errors.push(new R(o,$))}}}return a!==void 0&&n.push(new D(a)),{comments:r,items:n}}function gu(e,t){for(var r=[],n=[],a=void 0,i=!1,s="{",o=0;o<t.items.length;++o){var c=t.items[o];if(typeof c.char=="string"){var l=c.char,u=c.offset;if(l==="?"&&a===void 0&&!i){i=!0,s=":";continue}if(l===":"){if(a===void 0&&(a=null),s===":"){s=",";continue}}else if(i&&(a===void 0&&l!==","&&(a=null),i=!1),a!==void 0&&(n.push(new D(a)),a=void 0,l===",")){s=":";continue}if(l==="}"){if(o===t.items.length-1)continue}else if(l===s){s=":";continue}var f="Flow map contains an unexpected ".concat(l),p=new oe(t,f);p.offset=u,e.errors.push(p)}else c.type===g.BLANK_LINE?r.push({afterKey:!!a,before:n.length}):c.type===g.COMMENT?(Ii(e.errors,c),r.push({afterKey:!!a,before:n.length,comment:c.comment})):a===void 0?(s===","&&e.errors.push(new R(c,"Separator , missing in flow map")),a=qe(e,c)):(s!==","&&e.errors.push(new R(c,"Indicator : missing in flow map entry")),n.push(new D(a,qe(e,c))),a=void 0,i=!1)}return wi(e.errors,t),a!==void 0&&n.push(new D(a)),{comments:r,items:n}}function Ai(e,t){if(t.type!==g.SEQ&&t.type!==g.FLOW_SEQ){var r="A ".concat(t.type," node cannot be resolved as a sequence");return e.errors.push(new oe(t,r)),null}var n=t.type===g.FLOW_SEQ?bu(e,t):$u(e,t),a=n.comments,i=n.items,s=new Ie;if(s.items=i,xi(s,a),!e.options.mapAsMap&&i.some(function(c){return c instanceof D&&c.key instanceof ie})){var o="Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";e.warnings.push(new rt(t,o))}return t.resolved=s,s}function $u(e,t){for(var r=[],n=[],a=0;a<t.items.length;++a){var i=t.items[a];switch(i.type){case g.BLANK_LINE:r.push({before:n.length});break;case g.COMMENT:r.push({comment:i.comment,before:n.length});break;case g.SEQ_ITEM:if(i.error&&e.errors.push(i.error),n.push(qe(e,i.node)),i.hasProps){var s="Sequence items cannot have tags or anchors before the - indicator";e.errors.push(new R(i,s))}break;default:i.error&&e.errors.push(i.error),e.errors.push(new oe(i,"Unexpected ".concat(i.type," node in sequence")))}}return{comments:r,items:n}}function bu(e,t){for(var r=[],n=[],a=!1,i=void 0,s=null,o="[",c=null,l=0;l<t.items.length;++l){var u=t.items[l];if(typeof u.char=="string"){var f=u.char,p=u.offset;if(f!==":"&&(a||i!==void 0)&&(a&&i===void 0&&(i=o?n.pop():null),n.push(new D(i)),a=!1,i=void 0,s=null),f===o)o=null;else if(!o&&f==="?")a=!0;else if(o!=="["&&f===":"&&i===void 0){if(o===","){if(i=n.pop(),i instanceof D){var d="Chaining flow sequence pairs is invalid",v=new R(t,d);v.offset=p,e.errors.push(v)}if(!a&&typeof s=="number"){var m=u.range?u.range.start:u.offset;m>s+1024&&e.errors.push(Ei(t,i));for(var $=c.context.src,y=s;y<m;++y)if($[y]===`
`){var O="Implicit keys of flow sequence pairs need to be on a single line";e.errors.push(new R(c,O));break}}}else i=null;s=null,a=!1,o=null}else if(o==="["||f!=="]"||l<t.items.length-1){var E="Flow sequence contains an unexpected ".concat(f),T=new oe(t,E);T.offset=p,e.errors.push(T)}}else if(u.type===g.BLANK_LINE)r.push({before:n.length});else if(u.type===g.COMMENT)Ii(e.errors,u),r.push({comment:u.comment,before:n.length});else{if(o){var j="Expected a ".concat(o," in flow sequence");e.errors.push(new R(u,j))}var P=qe(e,u);i===void 0?(n.push(P),c=u):(n.push(new D(i,P)),i=void 0),s=u.range.start,o=","}}return wi(e.errors,t),i!==void 0&&n.push(new D(i)),{comments:r,items:n}}var ji={identify:function(t){return t instanceof Uint8Array},default:!1,tag:"tag:yaml.org,2002:binary",resolve:function(t,r){var n=Ft(t,r);if(typeof Buffer=="function")return Buffer.from(n,"base64");if(typeof atob=="function"){for(var a=atob(n.replace(/[\n\r]/g,"")),i=new Uint8Array(a.length),s=0;s<a.length;++s)i[s]=a.charCodeAt(s);return i}else{var o="This environment does not support reading binary tags; either Buffer or atob is required";return t.errors.push(new Tt(r,o)),null}},options:Bt,stringify:function(t,r,n,a){var i=t.comment,s=t.type,o=t.value,c;if(typeof Buffer=="function")c=o instanceof Buffer?o.toString("base64"):Buffer.from(o.buffer).toString("base64");else if(typeof btoa=="function"){for(var l="",u=0;u<o.length;++u)l+=String.fromCharCode(o[u]);c=btoa(l)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(s||(s=Bt.defaultType),s===g.QUOTE_DOUBLE)o=c;else{for(var f=Bt.lineWidth,p=Math.ceil(c.length/f),d=new Array(p),v=0,m=0;v<p;++v,m+=f)d[v]=c.substr(m,f);o=d.join(s===g.BLOCK_LITERAL?`
`:" ")}return Sn({comment:i,type:s,value:o},r,n,a)}};function Ni(e,t){for(var r=Ai(e,t),n=0;n<r.items.length;++n){var a=r.items[n];if(!(a instanceof D)){if(a instanceof me){if(a.items.length>1){var i="Each pair must have its own sequence indicator";throw new R(t,i)}var s=a.items[0]||new D;a.commentBefore&&(s.commentBefore=s.commentBefore?"".concat(a.commentBefore,`
`).concat(s.commentBefore):a.commentBefore),a.comment&&(s.comment=s.comment?"".concat(a.comment,`
`).concat(s.comment):a.comment),a=s}r.items[n]=a instanceof D?a:new D(a)}}return r}function Ci(e,t,r){var n=new Ie(e);n.tag="tag:yaml.org,2002:pairs";var a=Y(t),i;try{for(a.s();!(i=a.n()).done;){var s=i.value,o=void 0,c=void 0;if(Array.isArray(s))if(s.length===2)o=s[0],c=s[1];else throw new TypeError("Expected [key, value] tuple: ".concat(s));else if(s&&s instanceof Object){var l=Object.keys(s);if(l.length===1)o=l[0],c=s[o];else throw new TypeError("Expected { key: value } tuple: ".concat(s))}else o=s;var u=e.createPair(o,c,r);n.items.push(u)}}catch(f){a.e(f)}finally{a.f()}return n}var _i={default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Ni,createNode:Ci},wr=function(e){z(r,e);var t=Q(r);function r(){var n;return F(this,r),n=t.call(this),se(ge(n),"add",me.prototype.add.bind(ge(n))),se(ge(n),"delete",me.prototype.delete.bind(ge(n))),se(ge(n),"get",me.prototype.get.bind(ge(n))),se(ge(n),"has",me.prototype.has.bind(ge(n))),se(ge(n),"set",me.prototype.set.bind(ge(n))),n.tag=r.tag,n}return W(r,[{key:"toJSON",value:function(a,i){var s=new Map;i&&i.onCreate&&i.onCreate(s);var o=Y(this.items),c;try{for(o.s();!(c=o.n()).done;){var l=c.value,u=void 0,f=void 0;if(l instanceof D?(u=we(l.key,"",i),f=we(l.value,u,i)):u=we(l,"",i),s.has(u))throw new Error("Ordered maps must not include duplicate keys");s.set(u,f)}}catch(p){o.e(p)}finally{o.f()}return s}}]),r}(Ie);se(wr,"tag","tag:yaml.org,2002:omap");function Su(e,t){var r=Ni(e,t),n=[],a=Y(r.items),i;try{for(a.s();!(i=a.n()).done;){var s=i.value.key;if(s instanceof J)if(n.includes(s.value)){var o="Ordered maps must not include duplicate keys";throw new R(t,o)}else n.push(s.value)}}catch(c){a.e(c)}finally{a.f()}return Object.assign(new wr,r)}function Ou(e,t,r){var n=Ci(e,t,r),a=new wr;return a.items=n.items,a}var Ri={identify:function(t){return t instanceof Map},nodeClass:wr,default:!1,tag:"tag:yaml.org,2002:omap",resolve:Su,createNode:Ou},Ir=function(e){z(r,e);var t=Q(r);function r(){var n;return F(this,r),n=t.call(this),n.tag=r.tag,n}return W(r,[{key:"add",value:function(a){var i=a instanceof D?a:new D(a),s=We(this.items,i.key);s||this.items.push(i)}},{key:"get",value:function(a,i){var s=We(this.items,a);return!i&&s instanceof D?s.key instanceof J?s.key.value:s.key:s}},{key:"set",value:function(a,i){if(typeof i!="boolean")throw new Error("Expected boolean value for set(key, value) in a YAML set, not ".concat(he(i)));var s=We(this.items,a);s&&!i?this.items.splice(this.items.indexOf(s),1):!s&&i&&this.items.push(new D(a))}},{key:"toJSON",value:function(a,i){return fe(ae(r.prototype),"toJSON",this).call(this,a,i,Set)}},{key:"toString",value:function(a,i,s){if(!a)return JSON.stringify(this);if(this.hasAllNullValues())return fe(ae(r.prototype),"toString",this).call(this,a,i,s);throw new Error("Set items must all have null values")}}]),r}(me);se(Ir,"tag","tag:yaml.org,2002:set");function wu(e,t){var r=ki(e,t);if(!r.hasAllNullValues())throw new R(t,"Set items must all have null values");return Object.assign(new Ir,r)}function Iu(e,t,r){var n=new Ir,a=Y(t),i;try{for(a.s();!(i=a.n()).done;){var s=i.value;n.items.push(e.createPair(s,null,r))}}catch(o){a.e(o)}finally{a.f()}return n}var Mi={identify:function(t){return t instanceof Set},nodeClass:Ir,default:!1,tag:"tag:yaml.org,2002:set",resolve:wu,createNode:Iu},On=function(t,r){var n=r.split(":").reduce(function(a,i){return a*60+Number(i)},0);return t==="-"?-n:n},Ti=function(t){var r=t.value;if(isNaN(r)||!isFinite(r))return Ce(r);var n="";r<0&&(n="-",r=Math.abs(r));var a=[r%60];return r<60?a.unshift(0):(r=Math.round((r-a[0])/60),a.unshift(r%60),r>=60&&(r=Math.round((r-a[0])/60),a.unshift(r))),n+a.map(function(i){return i<10?"0"+String(i):String(i)}).join(":").replace(/000000\d*$/,"")},Li={identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,resolve:function(t,r,n){return On(r,n.replace(/_/g,""))},stringify:Ti},qi={identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,resolve:function(t,r,n){return On(r,n.replace(/_/g,""))},stringify:Ti},Di={identify:function(t){return t instanceof Date},default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$"),resolve:function(t,r,n,a,i,s,o,c,l){c&&(c=(c+"00").substr(1,3));var u=Date.UTC(r,n-1,a,i||0,s||0,o||0,c||0);if(l&&l!=="Z"){var f=On(l[0],l.slice(1));Math.abs(f)<30&&(f*=60),u-=6e4*f}return new Date(u)},stringify:function(t){var r=t.value;return r.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")}};function Bi(e){var t=typeof process!="undefined"&&process.env||{};return e?typeof YAML_SILENCE_DEPRECATION_WARNINGS!="undefined"?!YAML_SILENCE_DEPRECATION_WARNINGS:!t.YAML_SILENCE_DEPRECATION_WARNINGS:typeof YAML_SILENCE_WARNINGS!="undefined"?!YAML_SILENCE_WARNINGS:!t.YAML_SILENCE_WARNINGS}function Fi(e,t){if(Bi(!1)){var r=typeof process!="undefined"&&process.emitWarning;r?r(e,t):console.warn(t?"".concat(t,": ").concat(e):e)}}var Ui={};function Eu(e,t){if(!Ui[e]&&Bi(!0)){Ui[e]=!0;var r="The option '".concat(e,"' will be removed in a future release");r+=t?", use '".concat(t,"' instead."):".",Fi(r,"DeprecationWarning")}}function xu(e,t,r){var n=new me(e);if(t instanceof Map){var a=Y(t),i;try{for(a.s();!(i=a.n()).done;){var s=Rt(i.value,2),o=s[0],c=s[1];n.items.push(e.createPair(o,c,r))}}catch(p){a.e(p)}finally{a.f()}}else if(t&&he(t)==="object")for(var l=0,u=Object.keys(t);l<u.length;l++){var f=u[l];n.items.push(e.createPair(f,t[f],r))}return typeof e.sortMapEntries=="function"&&n.items.sort(e.sortMapEntries),n}var Ut={createNode:xu,default:!0,nodeClass:me,tag:"tag:yaml.org,2002:map",resolve:ki};function Pu(e,t,r){var n=new Ie(e);if(t&&t[Symbol.iterator]){var a=Y(t),i;try{for(a.s();!(i=a.n()).done;){var s=i.value,o=e.createNode(s,r.wrapScalars,null,r);n.items.push(o)}}catch(c){a.e(c)}finally{a.f()}}return n}var Er={createNode:Pu,default:!0,nodeClass:Ie,tag:"tag:yaml.org,2002:seq",resolve:Ai},ku={identify:function(t){return typeof t=="string"},default:!0,tag:"tag:yaml.org,2002:str",resolve:Ft,stringify:function(t,r,n,a){return r=Object.assign({actualString:!0},r),Sn(t,r,n,a)},options:Ne},wn=[Ut,Er,ku],xr=function(t){return typeof t=="bigint"||Number.isInteger(t)},In=function(t,r,n){return Le.asBigInt?BigInt(t):parseInt(r,n)};function Vi(e,t,r){var n=e.value;return xr(n)&&n>=0?r+n.toString(t):Ce(e)}var Ji={identify:function(t){return t==null},createNode:function(t,r,n){return n.wrapScalars?new J(null):null},default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:function(){return null},options:at,stringify:function(){return at.nullStr}},Wi={identify:function(t){return typeof t=="boolean"},default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:function(t){return t[0]==="t"||t[0]==="T"},options:je,stringify:function(t){var r=t.value;return r?je.trueStr:je.falseStr}},Ki={identify:function(t){return xr(t)&&t>=0},default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o([0-7]+)$/,resolve:function(t,r){return In(t,r,8)},options:Le,stringify:function(t){return Vi(t,8,"0o")}},zi={identify:xr,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:function(t){return In(t,t,10)},options:Le,stringify:Ce},Qi={identify:function(t){return xr(t)&&t>=0},default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x([0-9a-fA-F]+)$/,resolve:function(t,r){return In(t,r,16)},options:Le,stringify:function(t){return Vi(t,16,"0x")}},Yi={identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.inf|(\.nan))$/i,resolve:function(t,r){return r?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY},stringify:Ce},Gi={identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:function(t){return parseFloat(t)},stringify:function(t){var r=t.value;return Number(r).toExponential()}},Hi={identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,resolve:function(t,r,n){var a=r||n,i=new J(parseFloat(t));return a&&a[a.length-1]==="0"&&(i.minFractionDigits=a.length),i},stringify:Ce},Au=wn.concat([Ji,Wi,Ki,zi,Qi,Yi,Gi,Hi]),Xi=function(t){return typeof t=="bigint"||Number.isInteger(t)},Pr=function(t){var r=t.value;return JSON.stringify(r)},Zi=[Ut,Er,{identify:function(t){return typeof t=="string"},default:!0,tag:"tag:yaml.org,2002:str",resolve:Ft,stringify:Pr},{identify:function(t){return t==null},createNode:function(t,r,n){return n.wrapScalars?new J(null):null},default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:function(){return null},stringify:Pr},{identify:function(t){return typeof t=="boolean"},default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:function(t){return t==="true"},stringify:Pr},{identify:Xi,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:function(t){return Le.asBigInt?BigInt(t):parseInt(t,10)},stringify:function(t){var r=t.value;return Xi(r)?r.toString():JSON.stringify(r)}},{identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:function(t){return parseFloat(t)},stringify:Pr}];Zi.scalarFallback=function(e){throw new SyntaxError("Unresolved plain scalar ".concat(JSON.stringify(e)))};var es=function(t){var r=t.value;return r?je.trueStr:je.falseStr},Vt=function(t){return typeof t=="bigint"||Number.isInteger(t)};function kr(e,t,r){var n=t.replace(/_/g,"");if(Le.asBigInt){switch(r){case 2:n="0b".concat(n);break;case 8:n="0o".concat(n);break;case 16:n="0x".concat(n);break}var a=BigInt(n);return e==="-"?BigInt(-1)*a:a}var i=parseInt(n,r);return e==="-"?-1*i:i}function En(e,t,r){var n=e.value;if(Vt(n)){var a=n.toString(t);return n<0?"-"+r+a.substr(1):r+a}return Ce(e)}var ju=wn.concat([{identify:function(t){return t==null},createNode:function(t,r,n){return n.wrapScalars?new J(null):null},default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:function(){return null},options:at,stringify:function(){return at.nullStr}},{identify:function(t){return typeof t=="boolean"},default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:function(){return!0},options:je,stringify:es},{identify:function(t){return typeof t=="boolean"},default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:function(){return!1},options:je,stringify:es},{identify:Vt,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^([-+]?)0b([0-1_]+)$/,resolve:function(t,r,n){return kr(r,n,2)},stringify:function(t){return En(t,2,"0b")}},{identify:Vt,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^([-+]?)0([0-7_]+)$/,resolve:function(t,r,n){return kr(r,n,8)},stringify:function(t){return En(t,8,"0")}},{identify:Vt,default:!0,tag:"tag:yaml.org,2002:int",test:/^([-+]?)([0-9][0-9_]*)$/,resolve:function(t,r,n){return kr(r,n,10)},stringify:Ce},{identify:Vt,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^([-+]?)0x([0-9a-fA-F_]+)$/,resolve:function(t,r,n){return kr(r,n,16)},stringify:function(t){return En(t,16,"0x")}},{identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.inf|(\.nan))$/i,resolve:function(t,r){return r?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY},stringify:Ce},{identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:function(t){return parseFloat(t.replace(/_/g,""))},stringify:function(t){var r=t.value;return Number(r).toExponential()}},{identify:function(t){return typeof t=="number"},default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,resolve:function(t,r){var n=new J(parseFloat(t.replace(/_/g,"")));if(r){var a=r.replace(/_/g,"");a[a.length-1]==="0"&&(n.minFractionDigits=a.length)}return n},stringify:Ce}],ji,Ri,_i,Mi,Li,qi,Di),Nu={core:Au,failsafe:wn,json:Zi,yaml11:ju},Cu={binary:ji,bool:Wi,float:Hi,floatExp:Gi,floatNaN:Yi,floatTime:qi,int:zi,intHex:Qi,intOct:Ki,intTime:Li,map:Ut,null:Ji,omap:Ri,pairs:_i,seq:Er,set:Mi,timestamp:Di};function _u(e,t,r){if(t){var n=r.filter(function(i){return i.tag===t}),a=n.find(function(i){return!i.format})||n[0];if(!a)throw new Error("Tag ".concat(t," not found"));return a}return r.find(function(i){return(i.identify&&i.identify(e)||i.class&&e instanceof i.class)&&!i.format})}function Ru(e,t,r){if(e instanceof pe)return e;var n=r.defaultPrefix,a=r.onTagObj,i=r.prevObjects,s=r.schema,o=r.wrapScalars;t&&t.startsWith("!!")&&(t=n+t.slice(2));var c=_u(e,t,s.tags);if(!c){if(typeof e.toJSON=="function"&&(e=e.toJSON()),!e||he(e)!=="object")return o?new J(e):e;c=e instanceof Map?Ut:e[Symbol.iterator]?Er:Ut}a&&(a(c),delete r.onTagObj);var l={value:void 0,node:void 0};if(e&&he(e)==="object"&&i){var u=i.get(e);if(u){var f=new Ae(u);return r.aliasNodes.push(f),f}l.value=e,i.set(e,l)}return l.node=c.createNode?c.createNode(r.schema,e,r):o?new J(e):e,t&&l.node instanceof pe&&(l.node.tag=t),l.node}function Mu(e,t,r,n){var a=e[n.replace(/\W/g,"")];if(!a){var i=Object.keys(e).map(function(d){return JSON.stringify(d)}).join(", ");throw new Error('Unknown schema "'.concat(n,'"; use one of ').concat(i))}if(Array.isArray(r)){var s=Y(r),o;try{for(s.s();!(o=s.n()).done;){var c=o.value;a=a.concat(c)}}catch(d){s.e(d)}finally{s.f()}}else typeof r=="function"&&(a=r(a.slice()));for(var l=0;l<a.length;++l){var u=a[l];if(typeof u=="string"){var f=t[u];if(!f){var p=Object.keys(t).map(function(d){return JSON.stringify(d)}).join(", ");throw new Error('Unknown custom tag "'.concat(u,'"; use one of ').concat(p))}a[l]=f}}return a}var Tu=function(t,r){return t.key<r.key?-1:t.key>r.key?1:0},Jt=function(){function e(t){var r=t.customTags,n=t.merge,a=t.schema,i=t.sortMapEntries,s=t.tags;F(this,e),this.merge=!!n,this.name=a,this.sortMapEntries=i===!0?Tu:i||null,!r&&s&&Eu("tags","customTags"),this.tags=Mu(Nu,Cu,r||s,a)}return W(e,[{key:"createNode",value:function(r,n,a,i){var s={defaultPrefix:e.defaultPrefix,schema:this,wrapScalars:n},o=i?Object.assign(i,s):s;return Ru(r,a,o)}},{key:"createPair",value:function(r,n,a){a||(a={wrapScalars:!0});var i=this.createNode(r,a.wrapScalars,null,a),s=this.createNode(n,a.wrapScalars,null,a);return new D(i,s)}}]),e}();se(Jt,"defaultPrefix",yr);se(Jt,"defaultTags",Me);var Ar={anchorPrefix:"a",customTags:null,indent:2,indentSeq:!0,keepCstNodes:!1,keepNodeTypes:!0,keepBlobsInJSON:!0,mapAsMap:!1,maxAliasCount:100,prettyErrors:!1,simpleKeys:!1,version:"1.2"},Lu={get binary(){return Bt},set binary(e){Object.assign(Bt,e)},get bool(){return je},set bool(e){Object.assign(je,e)},get int(){return Le},set int(e){Object.assign(Le,e)},get null(){return at},set null(e){Object.assign(at,e)},get str(){return Ne},set str(e){Object.assign(Ne,e)}},ts={"1.0":{schema:"yaml-1.1",merge:!0,tagPrefixes:[{handle:"!",prefix:yr},{handle:"!!",prefix:"tag:private.yaml.org,2002:"}]},1.1:{schema:"yaml-1.1",merge:!0,tagPrefixes:[{handle:"!",prefix:"!"},{handle:"!!",prefix:yr}]},1.2:{schema:"core",merge:!1,tagPrefixes:[{handle:"!",prefix:"!"},{handle:"!!",prefix:yr}]}};function rs(e,t){if((e.version||e.options.version)==="1.0"){var r=t.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);if(r)return"!"+r[1];var n=t.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);return n?"!".concat(n[1],"/").concat(n[2]):"!".concat(t.replace(/^tag:/,""))}var a=e.tagPrefixes.find(function(o){return t.indexOf(o.prefix)===0});if(!a){var i=e.getDefaults().tagPrefixes;a=i&&i.find(function(o){return t.indexOf(o.prefix)===0})}if(!a)return t[0]==="!"?t:"!<".concat(t,">");var s=t.substr(a.prefix.length).replace(/[!,[\]{}]/g,function(o){return{"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"}[o]});return a.handle+s}function qu(e,t){if(t instanceof Ae)return Ae;if(t.tag){var r=e.filter(function(o){return o.tag===t.tag});if(r.length>0)return r.find(function(o){return o.format===t.format})||r[0]}var n,a;if(t instanceof J){a=t.value;var i=e.filter(function(o){return o.identify&&o.identify(a)||o.class&&a instanceof o.class});n=i.find(function(o){return o.format===t.format})||i.find(function(o){return!o.format})}else a=t,n=e.find(function(o){return o.nodeClass&&a instanceof o.nodeClass});if(!n){var s=a&&a.constructor?a.constructor.name:he(a);throw new Error("Tag not resolved for ".concat(s," value"))}return n}function Du(e,t,r){var n=r.anchors,a=r.doc,i=[],s=a.anchors.getName(e);return s&&(n[s]=e,i.push("&".concat(s))),e.tag?i.push(rs(a,e.tag)):t.default||i.push(rs(a,t.tag)),i.join(" ")}function jr(e,t,r,n){var a=t.doc,i=a.anchors,s=a.schema,o;if(!(e instanceof pe)){var c={aliasNodes:[],onTagObj:function($){return o=$},prevObjects:new Map};e=s.createNode(e,!0,null,c);var l=Y(c.aliasNodes),u;try{for(l.s();!(u=l.n()).done;){var f=u.value;f.source=f.source.node;var p=i.getName(f.source);p||(p=i.newName(),i.map[p]=f.source)}}catch(m){l.e(m)}finally{l.f()}}if(e instanceof D)return e.toString(t,r,n);o||(o=qu(s.tags,e));var d=Du(e,o,t);d.length>0&&(t.indentAtStart=(t.indentAtStart||0)+d.length+1);var v=typeof o.stringify=="function"?o.stringify(e,t,r,n):e instanceof J?Sn(e,t,r,n):e.toString(t,r,n);return d?e instanceof J||v[0]==="{"||v[0]==="["?"".concat(d," ").concat(v):"".concat(d,`
`).concat(t.indent).concat(v):v}var Bu=function(){function e(t){F(this,e),se(this,"map",Object.create(null)),this.prefix=t}return W(e,[{key:"createAlias",value:function(r,n){return this.setAnchor(r,n),new Ae(r)}},{key:"createMergePair",value:function(){for(var r=this,n=new $i,a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return n.value.items=i.map(function(o){if(o instanceof Ae){if(o.source instanceof me)return o}else if(o instanceof me)return r.createAlias(o);throw new Error("Merge sources must be Map nodes or their Aliases")}),n}},{key:"getName",value:function(r){var n=this.map;return Object.keys(n).find(function(a){return n[a]===r})}},{key:"getNames",value:function(){return Object.keys(this.map)}},{key:"getNode",value:function(r){return this.map[r]}},{key:"newName",value:function(r){r||(r=this.prefix);for(var n=Object.keys(this.map),a=1;;++a){var i="".concat(r).concat(a);if(!n.includes(i))return i}}},{key:"resolveNodes",value:function(){var r=this.map,n=this._cstAliases;Object.keys(r).forEach(function(a){r[a]=r[a].resolved}),n.forEach(function(a){a.source=a.source.resolved}),delete this._cstAliases}},{key:"setAnchor",value:function(r,n){if(r!=null&&!e.validAnchorNode(r))throw new Error("Anchors may only be set for Scalar, Seq and Map nodes");if(n&&/[\x00-\x19\s,[\]{}]/.test(n))throw new Error("Anchor names must not contain whitespace or control characters");var a=this.map,i=r&&Object.keys(a).find(function(s){return a[s]===r});if(i)if(n)i!==n&&(delete a[i],a[n]=r);else return i;else{if(!n){if(!r)return null;n=this.newName()}a[n]=r}return n}}],[{key:"validAnchorNode",value:function(r){return r instanceof J||r instanceof Ie||r instanceof me}}]),e}(),Fu=function e(t,r){if(t&&he(t)==="object"){var n=t.tag;t instanceof ie?(n&&(r[n]=!0),t.items.forEach(function(a){return e(a,r)})):t instanceof D?(e(t.key,r),e(t.value,r)):t instanceof J&&n&&(r[n]=!0)}return r},Uu=function(t){return Object.keys(Fu(t,{}))};function Vu(e,t){var r={before:[],after:[]},n=void 0,a=!1,i=Y(t),s;try{for(i.s();!(s=i.n()).done;){var o=s.value;if(o.valueRange){if(n!==void 0){var c="Document contains trailing content not separated by a ... or --- line";e.errors.push(new oe(o,c));break}var l=qe(e,o);a&&(l.spaceBefore=!0,a=!1),n=l}else if(o.comment!==null){var u=n===void 0?r.before:r.after;u.push(o.comment)}else o.type===g.BLANK_LINE&&(a=!0,n===void 0&&r.before.length>0&&!e.commentBefore&&(e.commentBefore=r.before.join(`
`),r.before=[]))}}catch(d){i.e(d)}finally{i.f()}if(e.contents=n||null,!n)e.comment=r.before.concat(r.after).join(`
`)||null;else{var f=r.before.join(`
`);if(f){var p=n instanceof ie&&n.items[0]?n.items[0]:n;p.commentBefore=p.commentBefore?"".concat(f,`
`).concat(p.commentBefore):f}e.comment=r.after.join(`
`)||null}}function Ju(e,t){var r=e.tagPrefixes,n=Rt(t.parameters,2),a=n[0],i=n[1];if(!a||!i){var s="Insufficient parameters given for %TAG directive";throw new R(t,s)}if(r.some(function(c){return c.handle===a})){var o="The %TAG directive must only be given at most once per handle in the same document.";throw new R(t,o)}return{handle:a,prefix:i}}function Wu(e,t){var r=Rt(t.parameters,1),n=r[0];if(t.name==="YAML:1.0"&&(n="1.0"),!n){var a="Insufficient parameters given for %YAML directive";throw new R(t,a)}if(!ts[n]){var i=e.version||e.options.version,s="Document will be parsed as YAML ".concat(i," rather than YAML ").concat(n);e.warnings.push(new rt(t,s))}return n}function Ku(e,t,r){var n=[],a=!1,i=Y(t),s;try{for(i.s();!(s=i.n()).done;){var o=s.value,c=o.comment,l=o.name;switch(l){case"TAG":try{e.tagPrefixes.push(Ju(e,o))}catch(d){e.errors.push(d)}a=!0;break;case"YAML":case"YAML:1.0":if(e.version){var u="The %YAML directive must only be given at most once per document.";e.errors.push(new R(o,u))}try{e.version=Wu(e,o)}catch(d){e.errors.push(d)}a=!0;break;default:if(l){var f="YAML only supports %TAG and %YAML directives, and not %".concat(l);e.warnings.push(new rt(o,f))}}c&&n.push(c)}}catch(d){i.e(d)}finally{i.f()}if(r&&!a&&(e.version||r.version||e.options.version)==="1.1"){var p=function(v){var m=v.handle,$=v.prefix;return{handle:m,prefix:$}};e.tagPrefixes=r.tagPrefixes.map(p),e.version=r.version}e.commentBefore=n.join(`
`)||null}function it(e){if(e instanceof ie)return!0;throw new Error("Expected a YAML collection as document contents")}var xn=function(){function e(t){F(this,e),this.anchors=new Bu(t.anchorPrefix),this.commentBefore=null,this.comment=null,this.contents=null,this.directivesEndMarker=null,this.errors=[],this.options=t,this.schema=null,this.tagPrefixes=[],this.version=null,this.warnings=[]}return W(e,[{key:"add",value:function(r){return it(this.contents),this.contents.add(r)}},{key:"addIn",value:function(r,n){it(this.contents),this.contents.addIn(r,n)}},{key:"delete",value:function(r){return it(this.contents),this.contents.delete(r)}},{key:"deleteIn",value:function(r){return Dt(r)?this.contents==null?!1:(this.contents=null,!0):(it(this.contents),this.contents.deleteIn(r))}},{key:"getDefaults",value:function(){return e.defaults[this.version]||e.defaults[this.options.version]||{}}},{key:"get",value:function(r,n){return this.contents instanceof ie?this.contents.get(r,n):void 0}},{key:"getIn",value:function(r,n){return Dt(r)?!n&&this.contents instanceof J?this.contents.value:this.contents:this.contents instanceof ie?this.contents.getIn(r,n):void 0}},{key:"has",value:function(r){return this.contents instanceof ie?this.contents.has(r):!1}},{key:"hasIn",value:function(r){return Dt(r)?this.contents!==void 0:this.contents instanceof ie?this.contents.hasIn(r):!1}},{key:"set",value:function(r,n){it(this.contents),this.contents.set(r,n)}},{key:"setIn",value:function(r,n){Dt(r)?this.contents=n:(it(this.contents),this.contents.setIn(r,n))}},{key:"setSchema",value:function(r,n){if(!(!r&&!n&&this.schema)){typeof r=="number"&&(r=r.toFixed(1)),r==="1.0"||r==="1.1"||r==="1.2"?(this.version?this.version=r:this.options.version=r,delete this.options.schema):r&&typeof r=="string"&&(this.options.schema=r),Array.isArray(n)&&(this.options.customTags=n);var a=Object.assign({},this.getDefaults(),this.options);this.schema=new Jt(a)}}},{key:"parse",value:function(r,n){this.options.keepCstNodes&&(this.cstNode=r),this.options.keepNodeTypes&&(this.type="DOCUMENT");var a=r.directives,i=a===void 0?[]:a,s=r.contents,o=s===void 0?[]:s,c=r.directivesEndMarker,l=r.error,u=r.valueRange;if(l&&(l.source||(l.source=this),this.errors.push(l)),Ku(this,i,n),c&&(this.directivesEndMarker=!0),this.range=u?[u.start,u.end]:null,this.setSchema(),this.anchors._cstAliases=[],Vu(this,o),this.anchors.resolveNodes(),this.options.prettyErrors){var f=Y(this.errors),p;try{for(f.s();!(p=f.n()).done;){var d=p.value;d instanceof tt&&d.makePretty()}}catch(y){f.e(y)}finally{f.f()}var v=Y(this.warnings),m;try{for(v.s();!(m=v.n()).done;){var $=m.value;$ instanceof tt&&$.makePretty()}}catch(y){v.e(y)}finally{v.f()}}return this}},{key:"listNonDefaultTags",value:function(){return Uu(this.contents).filter(function(r){return r.indexOf(Jt.defaultPrefix)!==0})}},{key:"setTagPrefix",value:function(r,n){if(r[0]!=="!"||r[r.length-1]!=="!")throw new Error("Handle must start and end with !");if(n){var a=this.tagPrefixes.find(function(i){return i.handle===r});a?a.prefix=n:this.tagPrefixes.push({handle:r,prefix:n})}else this.tagPrefixes=this.tagPrefixes.filter(function(i){return i.handle!==r})}},{key:"toJSON",value:function(r,n){var a=this,i=this.options,s=i.keepBlobsInJSON,o=i.mapAsMap,c=i.maxAliasCount,l=s&&(typeof r!="string"||!(this.contents instanceof J)),u={doc:this,indentStep:"  ",keep:l,mapAsMap:l&&!!o,maxAliasCount:c,stringify:jr},f=Object.keys(this.anchors.map);f.length>0&&(u.anchors=new Map(f.map(function(O){return[a.anchors.map[O],{alias:[],aliasCount:0,count:1}]})));var p=we(this.contents,r,u);if(typeof n=="function"&&u.anchors){var d=Y(u.anchors.values()),v;try{for(d.s();!(v=d.n()).done;){var m=v.value,$=m.count,y=m.res;n(y,$)}}catch(O){d.e(O)}finally{d.f()}}return p}},{key:"toString",value:function(){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");var r=this.options.indent;if(!Number.isInteger(r)||r<=0){var n=JSON.stringify(r);throw new Error('"indent" option must be a positive integer, not '.concat(n))}this.setSchema();var a=[],i=!1;if(this.version){var s="%YAML 1.2";this.schema.name==="yaml-1.1"&&(this.version==="1.0"?s="%YAML:1.0":this.version==="1.1"&&(s="%YAML 1.1")),a.push(s),i=!0}var o=this.listNonDefaultTags();this.tagPrefixes.forEach(function(d){var v=d.handle,m=d.prefix;o.some(function($){return $.indexOf(m)===0})&&(a.push("%TAG ".concat(v," ").concat(m)),i=!0)}),(i||this.directivesEndMarker)&&a.push("---"),this.commentBefore&&((i||!this.directivesEndMarker)&&a.unshift(""),a.unshift(this.commentBefore.replace(/^/gm,"#")));var c={anchors:Object.create(null),doc:this,indent:"",indentStep:" ".repeat(r),stringify:jr},l=!1,u=null;if(this.contents){this.contents instanceof pe&&(this.contents.spaceBefore&&(i||this.directivesEndMarker)&&a.push(""),this.contents.commentBefore&&a.push(this.contents.commentBefore.replace(/^/gm,"#")),c.forceBlockIndent=!!this.comment,u=this.contents.comment);var f=u?null:function(){return l=!0},p=jr(this.contents,c,function(){return u=null},f);a.push(nt(p,"",u))}else this.contents!==void 0&&a.push(jr(this.contents,c));return this.comment&&((!l||u)&&a[a.length-1]!==""&&a.push(""),a.push(this.comment.replace(/^/gm,"#"))),a.join(`
`)+`
`}}]),e}();se(xn,"defaults",ts);function zu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2?arguments[2]:void 0;r===void 0&&typeof t=="string"&&(r=t,t=!0);var n=Object.assign({},xn.defaults[Ar.version],Ar),a=new Jt(n);return a.createNode(e,t,r)}var Nr=function(e){z(r,e);var t=Q(r);function r(n){return F(this,r),t.call(this,Object.assign({},Ar,n))}return r}(xn);function Qu(e,t){var r=[],n,a=Y(yn(e)),i;try{for(a.s();!(i=a.n()).done;){var s=i.value,o=new Nr(t);o.parse(s,n),r.push(o),n=o}}catch(c){a.e(c)}finally{a.f()}return r}function ns(e,t){var r=yn(e),n=new Nr(t).parse(r[0]);if(r.length>1){var a="Source contains multiple documents; please use YAML.parseAllDocuments()";n.errors.unshift(new R(r[1],a))}return n}function Yu(e,t){var r=ns(e,t);if(r.warnings.forEach(function(n){return Fi(n)}),r.errors.length>0)throw r.errors[0];return r.toJSON()}function Gu(e,t){var r=new Nr(t);return r.contents=e,String(r)}var Hu={createNode:zu,defaultOptions:Ar,Document:Nr,parse:Yu,parseAllDocuments:Qu,parseCST:yn,parseDocument:ns,scalarOptions:Lu,stringify:Gu},Xu=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",YAML:Hu}),Zu=si(Xu),a0=Zu.YAML,Ee=ef;function ef(e,t){return function r(){t==null&&(t=e.length);var n=[].slice.call(arguments);return n.length>=t?e.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var Cr={exports:{}};(function(e,t){(function(r,n){var a={};r.PubSub?(a=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=a,n(a)),e!==void 0&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a})(typeof window=="object"&&window||ii,function(r){var n={},a=-1,i="*";function s(m){var $;for($ in m)if(Object.prototype.hasOwnProperty.call(m,$))return!0;return!1}function o(m){return function(){throw m}}function c(m,$,y){try{m($,y)}catch(O){setTimeout(o(O),0)}}function l(m,$,y){m($,y)}function u(m,$,y,O){var E=n[$],T=O?l:c,j;if(!!Object.prototype.hasOwnProperty.call(n,$))for(j in E)Object.prototype.hasOwnProperty.call(E,j)&&T(E[j],m,y)}function f(m,$,y){return function(){var E=String(m),T=E.lastIndexOf(".");for(u(m,m,$,y);T!==-1;)E=E.substr(0,T),T=E.lastIndexOf("."),u(m,E,$,y);u(m,i,$,y)}}function p(m){var $=String(m),y=Boolean(Object.prototype.hasOwnProperty.call(n,$)&&s(n[$]));return y}function d(m){for(var $=String(m),y=p($)||p(i),O=$.lastIndexOf(".");!y&&O!==-1;)$=$.substr(0,O),O=$.lastIndexOf("."),y=p($);return y}function v(m,$,y,O){m=typeof m=="symbol"?m.toString():m;var E=f(m,$,O),T=d(m);return T?(y===!0?E():setTimeout(E,0),!0):!1}r.publish=function(m,$){return v(m,$,!1,r.immediateExceptions)},r.publishSync=function(m,$){return v(m,$,!0,r.immediateExceptions)},r.subscribe=function(m,$){if(typeof $!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(n,m)||(n[m]={});var y="uid_"+String(++a);return n[m][y]=$,y},r.subscribeAll=function(m){return r.subscribe(i,m)},r.subscribeOnce=function(m,$){var y=r.subscribe(m,function(){r.unsubscribe(y),$.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function($){var y;for(y in n)Object.prototype.hasOwnProperty.call(n,y)&&y.indexOf($)===0&&delete n[y]},r.countSubscriptions=function($){var y,O,E=0;for(y in n)if(Object.prototype.hasOwnProperty.call(n,y)&&y.indexOf($)===0){for(O in n[y])E++;break}return E},r.getSubscriptions=function($){var y,O=[];for(y in n)Object.prototype.hasOwnProperty.call(n,y)&&y.indexOf($)===0&&O.push(y);return O},r.unsubscribe=function(m){var $=function(Z){var h;for(h in n)if(Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(Z)===0)return!0;return!1},y=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(n,m)||$(m)),O=!y&&typeof m=="string",E=typeof m=="function",T=!1,j,P,K;if(y){r.clearSubscriptions(m);return}for(j in n)if(Object.prototype.hasOwnProperty.call(n,j)){if(P=n[j],O&&P[m]){delete P[m],T=m;break}if(E)for(K in P)Object.prototype.hasOwnProperty.call(P,K)&&P[K]===m&&(delete P[K],T=!0)}return T}})})(Cr,Cr.exports);var tf=lf;function as(e){return e+(e[e.length-1]==="/"?"":"/")}function is(e){let t=e.split("/");t[0]===""&&(t=t.slice(1));let r=[];return t.forEach((n,a)=>{n!=="."&&(n===".."?r.pop():(n!==""||a===t.length-1)&&r.push(n))}),"/"+r.join("/")}function rf(e){const t={host:"",path:"",query:"",protocol:""};let r=e,n=e.indexOf("//");t.protocol=r.substring(0,n),n+=2;const a=e.indexOf("/",n),i=e.indexOf("?"),s=e.indexOf("#");if(s!==-1&&(r=r.substring(0,s)),i!==-1){const o=r.substring(i);t.query=o,r=r.substring(0,i)}if(a!==-1){const o=r.substring(0,a);t.host=o,r=r.substring(a),t.path=r}else t.host=r;return t}const nf="[a-z][a-z0-9+.-]*",af=new RegExp(`^(${nf}:)?//`,"i");function sf(e){const t={href:e,hash:"",query:"",netPath:!1,absolutePath:!1,relativePath:!1};if(af.test(e))return t.netPath=!0,t;e[0]==="/"?t.absolutePath=!0:e!==""&&(t.relativePath=!0);let r=e;const n=e.indexOf("?"),a=e.indexOf("#");if(a!==-1){const i=r.substring(a);t.hash=i,r=r.substring(0,a)}if(n!==-1){const i=r.substring(n);t.query=i,r=r.substring(0,n)}return t.path=r,t}function of(e){const t=e.indexOf("//")+2,r=!e.includes("/",t),n=!e.includes("?",t),a=!e.includes("#",t);return r&&n&&a}function cf(e){return e.startsWith("//")}function lf(e,t){if(e=e.trim(),t=t.trim(),t.startsWith("about:"))return t;const r=rf(e),n=sf(t);if(!r.protocol&&!n.netPath)throw new Error("Error, protocol is not specified");if(n.netPath)return cf(n.href)&&(n.href=r.protocol+n.href),of(n.href)?as(n.href):n.href;if(n.absolutePath){const{path:a,query:i,hash:s}=n;return r.host+is(a)+i+s}else if(n.relativePath){const{path:a,query:i,hash:s}=n;let o=r.path,c=r.host,l;return a.length===0?l=o:(o=o.substring(0,o.lastIndexOf("/")),l=is(o+"/"+a)),l===""&&!i&&!s?c+="/":c+=l+i+s,c}else{const{host:a,path:i,query:s}=r;return!i&&!s?as(a):a+i+s+n.hash}}const uf=tf,ff=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,pf={null:e=>e===null,boolean:e=>typeof e=="boolean",object:ff,array:e=>Array.isArray(e),number:e=>typeof e=="number",integer:e=>Number.isInteger(e),string:e=>typeof e=="string"},mf=(e,t)=>pf[t](e),ss=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),a=e.slice(r+1);return[decodeURI(n),decodeURI(a)]},os=e=>{const t=RegExp(/^(.+):\/\//).exec(e);return t?t[1]:""},df=(e,t)=>{const r=uf(e,t),n=ss(e)[0];if(n&&os(r)==="file"&&os(n)!=="file")throw Error(`Can't access file '${r}' resource from network context '${e}'`);return r},Wt=47,hf=(e,t)=>{if(e===t)return"";let r=1;const n=e.length-1,a=t.length-r,i=n<a?n:a;let s=-1,o=0;for(;o<i;o++){const l=e.charCodeAt(o+1);if(l!==t.charCodeAt(r+o))break;l===Wt&&(s=o)}if(a>i){if(t.charCodeAt(r+o)===Wt)return t.slice(r+o+1);if(o===0)return t.slice(r+o)}n>i&&(e.charCodeAt(o+1)===Wt?s=o:i===0&&(s=0));let c="";for(o=s+2;o<=e.length;++o)(o===e.length||e.charCodeAt(o)===Wt)&&(c+=c.length===0?"..":"/..");return r+=s,c.length>0?`${c}${t.slice(r,t.length)}`:(t.charCodeAt(r)===Wt&&++r,t.slice(r,t.length))};var Pn={jsonTypeOf:mf,splitUrl:ss,safeResolveUrl:df,pathRelative:hf};const kn=Ee,Kt="",zt=e=>{if(e.length>0&&e[0]!=="/")throw Error("Invalid JSON Pointer");return e.split("/").slice(1).map(Of)},vf=(e,t=void 0)=>{const r=zt(e),n=a=>r.reduce(([i,s],o)=>[De(i,o,s),st(o,s)],[a,""])[0];return t===void 0?n:n(t)},yf=(e,t=void 0,r=void 0)=>{const n=zt(e),a=kn((i,s)=>cs(n,i,s,Kt));return t===void 0?a:a(t,r)},cs=(e,t,r,n)=>{if(e.length===0)return r;if(e.length>1){const a=e.shift();return Re(ne({},t),{[a]:cs(e,De(t,a,n),r,st(a,n))})}else if(Array.isArray(t)){const a=[...t],i=An(t,e[0]);return a[i]=r,a}else return typeof t=="object"&&t!==null?Re(ne({},t),{[e[0]]:r}):De(t,e[0],n)},gf=(e,t=void 0,r=void 0)=>{const n=zt(e),a=kn((i,s)=>ls(n,i,s,Kt));return t===void 0?a:a(t,r)},ls=(e,t,r,n)=>{if(e.length!==0)if(e.length===1&&!ps(t)){const a=An(t,e[0]);t[a]=r}else{const a=e.shift();ls(e,De(t,a,n),r,st(a,n))}},$f=(e,t=void 0)=>{const r=zt(e),n=a=>us(r,a,Kt);return t===void 0?n:n(t)},us=(e,t,r)=>{var n;if(e.length!=0)if(e.length>1){const i=e.shift(),s=De(t,i,r);return Re(ne({},t),{[i]:us(e,s,st(i,r))})}else{if(Array.isArray(t))return t.filter((i,s)=>s!=e[0]);if(typeof t=="object"&&t!==null){const a=t,{[n=e[0]]:i}=a;return Ya(a,[Qa(n)])}else return De(t,e[0],r)}},bf=(e,t=void 0)=>{const r=zt(e),n=a=>fs(r,a,Kt);return t===void 0?n:n(t)},fs=(e,t,r)=>{if(e.length!==0)if(e.length>1){const n=e.shift(),a=De(t,n,r);fs(e,a,st(n,r))}else Array.isArray(t)?t.splice(e[0],1):typeof t=="object"&&t!==null?delete t[e[0]]:De(t,e[0],r)},st=kn((e,t)=>t+"/"+Sf(e)),Sf=e=>e.toString().replace(/~/g,"~0").replace(/\//g,"~1"),Of=e=>e.toString().replace(/~1/g,"/").replace(/~0/g,"~"),An=(e,t)=>Array.isArray(e)&&t==="-"?e.length:t,De=(e,t,r="")=>{if(e===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${t}'`);if(e===null)throw TypeError(`Value at '${r}' is null and does not have property '${t}'`);if(ps(e))throw TypeError(`Value at '${r}' is a ${typeof e} and does not have property '${t}'`);{const n=An(e,t);return e[n]}},ps=e=>e===null||typeof e!="object";var ms={nil:Kt,append:st,get:vf,set:yf,assign:gf,unset:$f,remove:bf};const ds=Symbol("$__value"),jn=Symbol("$__href"),wf=(e,t)=>Object.freeze({[jn]:e,[ds]:t}),If=e=>e&&e[jn]!==void 0,Ef=e=>e[jn],xf=e=>e[ds];var Nn={cons:wf,isReference:If,href:Ef,value:xf};const Pf=ms,ot=Ee,{jsonTypeOf:kf}=Pn,hs=Nn,vs=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),Af=(e,t="")=>Object.freeze(Re(ne({},vs),{id:t,instance:e,value:e})),jf=e=>`${e.id}#${encodeURI(e.pointer)}`,$e=e=>hs.isReference(e.value)?hs.value(e.value):e.value,Nf=(e,t)=>e in $e(t),Cf=ot((e,t)=>kf($e(e),t)),ze=(e,t)=>Object.freeze(Re(ne({},t),{pointer:Pf.append(e,t.pointer),value:$e(t)[e]})),_f=e=>Object.keys($e(e)).map(t=>[t,ze(t,e)]),Rf=e=>Object.keys($e(e)),Mf=ot((e,t)=>$e(t).map((r,n,a,i)=>e(ze(n,t),n,a,i))),Tf=ot((e,t)=>$e(t).map((r,n,a,i)=>ze(n,t)).filter((r,n,a,i)=>e(r,n,a,i))),Lf=ot((e,t,r)=>$e(r).reduce((n,a,i)=>e(n,ze(i,r),i),t)),qf=ot((e,t)=>$e(t).every((r,n,a,i)=>e(ze(n,t),n,a,i))),Df=ot((e,t)=>$e(t).some((r,n,a,i)=>e(ze(n,t),n,a,i))),Bf=e=>$e(e).length;var Cn={nil:vs,cons:Af,uri:jf,value:$e,has:Nf,typeOf:Cf,step:ze,entries:_f,keys:Rf,map:Mf,filter:Tf,reduce:Lf,every:qf,some:Df,length:Bf},_n={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ys=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Ff=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,gs=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Uf=/\\([\u000b\u0020-\u00ff])/g,Vf=/([\\"])/g,$s=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;_n.format=Jf;_n.parse=Wf;function Jf(e){if(!e||typeof e!="object")throw new TypeError("argument obj is required");var t=e.parameters,r=e.type;if(!r||!$s.test(r))throw new TypeError("invalid type");var n=r;if(t&&typeof t=="object")for(var a,i=Object.keys(t).sort(),s=0;s<i.length;s++){if(a=i[s],!gs.test(a))throw new TypeError("invalid parameter name");n+="; "+a+"="+zf(t[a])}return n}function Wf(e){if(!e)throw new TypeError("argument string is required");var t=typeof e=="object"?Kf(e):e;if(typeof t!="string")throw new TypeError("argument string is required to be a string");var r=t.indexOf(";"),n=r!==-1?t.substr(0,r).trim():t.trim();if(!$s.test(n))throw new TypeError("invalid media type");var a=new Qf(n.toLowerCase());if(r!==-1){var i,s,o;for(ys.lastIndex=r;s=ys.exec(t);){if(s.index!==r)throw new TypeError("invalid parameter format");r+=s[0].length,i=s[1].toLowerCase(),o=s[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace(Uf,"$1")),a.parameters[i]=o}if(r!==t.length)throw new TypeError("invalid parameter format")}return a}function Kf(e){var t;if(typeof e.getHeader=="function"?t=e.getHeader("content-type"):typeof e.headers=="object"&&(t=e.headers&&e.headers["content-type"]),typeof t!="string")throw new TypeError("content-type header is missing from object");return t}function zf(e){var t=String(e);if(gs.test(t))return t;if(t.length>0&&!Ff.test(t))throw new TypeError("invalid parameter value");return'"'+t.replace(Vf,"\\$1")+'"'}function Qf(e){this.parameters=Object.create(null),this.type=e}var bs=async e=>Object.entries(await e);const Yf=Ee;var Rn=Yf(async(e,t)=>(await t).map(e));const Gf=Ee;var Mn=Gf(async(e,t,r)=>(await r).reduce(async(n,a)=>e(await n,a),t));const Hf=Ee,Xf=Mn;var Zf=Hf(async(e,t,r={})=>Xf(async(n,a)=>await e(a)?n.concat([a]):n,[],t,r));const ep=Ee,tp=Rn;var rp=ep(async(e,t)=>{const r=await tp(e,t);return(await Promise.all(r)).some(n=>n)});const np=Ee,ap=Rn;var ip=np(async(e,t)=>{const r=await ap(e,t);return(await Promise.all(r)).every(n=>n)});const sp=Ee;var Ss=sp((e,t)=>e.reduce(async(r,n)=>n(await r),t)),op=e=>Promise.all(e);const cp=Ss,lp=bs,up=Mn;var fp=e=>cp([lp,up(async(t,[r,n])=>(t[r]=await n,t),{})],e),ee={entries:bs,map:Rn,filter:Zf,reduce:Mn,some:rp,every:ip,pipeline:Ss,all:op,allValues:fp},pp=fetch;const mp=_n,dp=Ee,ct=ee,xe=ms,{jsonTypeOf:Tn,splitUrl:Qe,safeResolveUrl:Ln,pathRelative:hp}=Pn,vp=pp,_e=Nn,Qt={},_r={},yp=(e,t,r)=>{Qt[e]||(Qt[e]={}),Qt[e][t]=r},ce=(e,t)=>{const r=e in _r?_r[e]:e;if(r in Qt)return Qt[r][t]},Yt={},qn={},Dn=(e,t="",r="")=>{e=JSON.parse(JSON.stringify(e));const n=Qe(e.$schema||r)[0];if(!n)throw Error("Couldn't determine schema version");delete e.$schema;const a=ce(n,"baseToken"),i=ce(n,"anchorToken"),s=Qe(t)[0];if(!s&&!Qe(e[a]||"")[0])throw Error("Couldn't determine an identifier for the schema");const o=Ln(s,e[a]||""),[c,l]=Qe(o);delete e[a],l&&a===i&&(e[i]=i!==a?encodeURI(l):`#${encodeURI(l)}`),s&&(qn[s]=c);const u={},f=ce(n,"recursiveAnchorToken");e[f]===!0&&(u[""]=`${c}#`,e[i]="",delete e[f]);let p;const d=ce(n,"vocabularyToken");Tn(e[d],"object")?(_r[c]=n,p=e[d],delete e[d]):(_r[c]=n,p={[n]:!0});const v={"":""};return Yt[c]={id:c,schemaVersion:n,schema:Bn(e,c,n,xe.nil,v,u),anchors:v,dynamicAnchors:u,vocabulary:p,validated:!1},c},Bn=(e,t,r,n,a,i)=>{if(Tn(e,"object")){const s=typeof e.$schema=="string"?Qe(e.$schema)[0]:r,o=ce(s,"embeddedToken"),c=ce(s,"anchorToken");if(typeof e[o]=="string"&&(o!==c||e[o][0]!=="#")){const d=Ln(t,e[o]);return e[o]=d,Dn(e,d,r),_e.cons(e[o],e)}const l=ce(r,"anchorToken"),u=ce(r,"dynamicAnchorToken");typeof e[u]=="string"&&(i[e[u]]=`${t}#${encodeURI(n)}`,a[e[u]]=n,delete e[u]);const f=ce(r,"embeddedToken");if(typeof e[l]=="string"){const d=l!==f?e[l]:e[l].slice(1);a[d]=n,delete e[l]}const p=ce(r,"jrefToken");if(typeof e[p]=="string")return _e.cons(e[p],e);for(const d in e)e[d]=Bn(e[d],t,r,xe.append(d,n),a,i);return e}else return Array.isArray(e)?e.map((s,o)=>Bn(s,t,r,xe.append(o,n),a,i)):e},gp=e=>e in Yt||e in qn,Os=e=>Yt[qn[e]]||Yt[e],$p=e=>{Yt[e].validated=!0},bp=Object.freeze({id:"",schemaVersion:void 0,vocabulary:{},pointer:xe.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),ws=async(e,t=bp)=>{const r=Ln(xs(t),e),[n,a]=Qe(r);if(!gp(n)){const c=await vp(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);if(c.headers.has("content-type")){const l=mp.parse(c.headers.get("content-type")).type;if(l!=="application/schema+json")throw Error(`${n} is not a schema. Found a document with media type: ${l}`)}Dn(await c.json(),n)}const i=Os(n),s=a[0]!=="/"?Es(i,a):a,o=Object.freeze(Re(ne({},i),{pointer:s,value:xe.get(s,i.schema)}));return Is(o)},Is=e=>_e.isReference(e.value)?ws(_e.href(e.value),e):e,Es=(e,t)=>{if(!(t in e.anchors))throw Error(`No such anchor '${encodeURI(e.id)}#${encodeURI(t)}'`);return e.anchors[t]},xs=e=>`${e.id}#${encodeURI(e.pointer)}`,Be=e=>_e.isReference(e.value)?_e.value(e.value):e.value,Sp=(e,t)=>e in Be(t),Op=(e,t)=>Tn(Be(e),t),Fn=(e,t)=>{const r=Os(t.id),n=Object.freeze(Re(ne({},t),{pointer:xe.append(e,t.pointer),value:Be(t)[e],validated:r.validated}));return Is(n)},wp=e=>Object.keys(Be(e)),Ip=e=>ct.pipeline([Be,Object.keys,ct.map(async t=>[t,await Fn(t,e)]),ct.all],e),Ep=dp((e,t)=>ct.pipeline([Be,ct.map(async(r,n)=>e(await Fn(n,t),n)),ct.all],t)),xp=e=>Be(e).length,Pp={parentId:"",parentDialect:"",includeEmbedded:!0},kp=(e,t={})=>{const r=ne(ne({},Pp),t),n=JSON.parse(JSON.stringify(e.schema,(l,u)=>{if(!_e.isReference(u))return u;const f=_e.value(u),p=f.$schema||e.schemaVersion,d=ce(p,"embeddedToken");if(!(!r.includeEmbedded&&d in f))return _e.value(u)})),a=ce(e.schemaVersion,"dynamicAnchorToken");Object.entries(e.dynamicAnchors).forEach(([l,u])=>{const f=Qe(u)[1];xe.assign(f,n,ne({[a]:l},xe.get(f,n)))});const i=ce(e.schemaVersion,"anchorToken");Object.entries(e.anchors).filter(([l])=>l!=="").forEach(([l,u])=>{xe.assign(u,n,ne({[i]:l},xe.get(u,n)))});const s=ce(e.schemaVersion,"baseToken"),o=Ap(r.parentId,e.id),c=r.parentDialect===e.schemaVersion?"":e.schemaVersion;return ne(ne(ne({},o&&{[s]:o}),c&&{$schema:c}),n)},Ap=(e,t)=>{if(t.startsWith("file://")){const r=e.slice(7,e.lastIndexOf("/"));return e===""?"":hp(r,t.slice(7))}else return t};var Rr={setConfig:yp,getConfig:ce,add:Dn,get:ws,markValidated:$p,uri:xs,value:Be,getAnchorPointer:Es,typeOf:Op,has:Sp,step:Fn,keys:wp,entries:Ip,map:Ep,length:xp,toSchema:kp};class jp extends Error{constructor(t){super("Invalid Schema");this.name=this.constructor.name,this.output=t}}var Ps=jp;const Np=Ee,ks=Cr.exports,{splitUrl:Cp}=Pn,As=Cn,Fe=Rr,_p=Ps,Mr="FLAG",Un="BASIC",Vn="DETAILED",Jn="VERBOSE";let js=Vn,Ns=!0;const Rp=async(e,t=void 0,r=void 0)=>{const n=await Wn(e),a=(i,s)=>Kn(n,As.cons(i),s);return t===void 0?a:a(t,r)},Wn=async e=>{const t={metaData:{}},r=await _s(e,t);return{ast:t,schemaUri:r}},Kn=Np(({ast:e,schemaUri:t},r,n=Mr)=>{if(![Mr,Un,Vn,Jn].includes(n))throw Error(`The '${n}' error format is not supported`);const a=[],i=ks.subscribe("result",Mp(n,a));return Ms(t,r,e,{}),ks.unsubscribe(i),a[0]}),Mp=(e,t)=>{const r=[];return(n,a)=>{if(n==="result"){const{keyword:i,absoluteKeywordLocation:s,instanceLocation:o,valid:c}=a,l={keyword:i,absoluteKeywordLocation:s,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const i=r.pop();for(;r[r.length-1]!=="result.start";){const s=r.pop(),o=[s];e===Un&&(o.push(...s.errors),delete s.errors),(e===Jn||e!==Mr&&!s.valid)&&i.errors.unshift(...o)}r[r.length-1]=i,t[0]=i}}},Tp=e=>{js=e},Lp=e=>{Ns=e},zn={},Gt=e=>zn[e],Cs=e=>e in zn,qp=(e,t)=>{zn[e]=ne({collectEvaluatedItems:(r,n,a,i,s)=>t.interpret(r,n,a,i,s)&&new Set,collectEvaluatedProperties:(r,n,a,i,s)=>t.interpret(r,n,a,i,s)&&[]},t)},Qn={},Dp=(e,t)=>{Qn[e]=t},Tr={},_s=async(e,t)=>{if(e=await Rs(e),!Cs(`${e.schemaVersion}#validate`)){const r=await Fe.get(e.schemaVersion);(Fe.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(a=>{if(!r.vocabulary[a])throw Error(`Vocabulary '${a}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([a,i])=>{if(a in Qn)Object.entries(Qn[a]).forEach(([s,o])=>{qp(`${r.id}#${s}`,o)});else if(i)throw Error(`Missing required vocabulary: ${a}`)})}if(Ns&&!e.validated){if(Fe.markValidated(e.id),!(e.schemaVersion in Tr)){const a=await Fe.get(e.schemaVersion),i=await Wn(a);Tr[a.id]=Kn(i)}const r=As.cons(e.schema,e.id),n=Tr[e.schemaVersion](r,js);if(!n.valid)throw new _p(n)}return e.id in t.metaData||(t.metaData[e.id]={id:e.id,dynamicAnchors:e.dynamicAnchors,anchors:e.anchors}),Gt(`${e.schemaVersion}#validate`).compile(e,t)},Rs=async e=>Fe.typeOf(e,"string")?Rs(await Fe.get(Fe.value(e),e)):e,Ms=(e,t,r,n)=>{const a=Yn(e,r),i=Cp(e)[0];return Gt(a).interpret(e,t,r,ne(ne({},r.metaData[i].dynamicAnchors),n))},Bp=(e,t,r,n,a)=>{const i=Yn(e,r);return Gt(i).collectEvaluatedProperties(e,t,r,n,a)},Fp=(e,t,r,n,a)=>{const i=Yn(e,r);return Gt(i).collectEvaluatedItems(e,t,r,n,a)},Yn=(e,t)=>{if(!(e in t))throw Error(`No schema found at ${e}`);return t[e][0]},Up=(e,t="",r="")=>{const n=Fe.add(e,t,r);delete Tr[n]};var Ts={validate:Rp,compile:Wn,interpret:Kn,setMetaOutputFormat:Tp,setShouldMetaValidate:Lp,FLAG:Mr,BASIC:Un,DETAILED:Vn,VERBOSE:Jn,add:Up,getKeyword:Gt,hasKeyword:Cs,defineVocabulary:Dp,compileSchema:_s,interpretSchema:Ms,collectEvaluatedProperties:Bp,collectEvaluatedItems:Fp};const Vp=Rr,Jp=e=>Vp.value(e),Wp=()=>!0;var Kp={compile:Jp,interpret:Wp};const Ht=ee,lt=Cr.exports,Xt=Ts,Ls=Cn,ut=Rr,zp=async(e,t)=>{const r=ut.uri(e);if(!(r in t)){t[r]=!1;const n=ut.value(e);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${ut.uri(e)}'`);t[r]=[`${e.schemaVersion}#validate`,ut.uri(e),typeof n=="boolean"?n:await Ht.pipeline([ut.entries,Ht.map(([a,i])=>[`${e.schemaVersion}#${a}`,i]),Ht.filter(([a])=>Xt.hasKeyword(a)&&a!==`${e.schemaVersion}#validate`),Ht.map(async([a,i])=>{const s=await Xt.getKeyword(a).compile(i,t,e);return[a,ut.uri(i),s]}),Ht.all],e)]}return r},Qp=(e,t,r,n)=>{const[a,i,s]=r[e];lt.publishSync("result.start");const o=typeof s=="boolean"?s:s.every(([c,l,u])=>{lt.publishSync("result.start");const f=Xt.getKeyword(c).interpret(u,t,r,n);return lt.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:Ls.uri(t),valid:f,ast:u}),lt.publishSync("result.end"),f});return lt.publishSync("result",{keyword:a,absoluteKeywordLocation:i,instanceLocation:Ls.uri(t),valid:o,ast:e}),lt.publishSync("result.end"),o},Yp=(e,t,r,n,a=!1)=>{const i=r[e][2];return typeof i=="boolean"?i?[]:!1:i.filter(([s])=>!a||!s.endsWith("#unevaluatedProperties")).reduce((s,[o,,c])=>{const l=s&&Xt.getKeyword(o).collectEvaluatedProperties(c,t,r,n);return l!==!1&&[...s,...l]},[])},Gp=(e,t,r,n,a=!1)=>{const i=r[e][2];return typeof i=="boolean"?i?new Set:!1:i.filter(([s])=>!a||!s.endsWith("#unevaluatedItems")).reduce((s,[o,,c])=>{const l=s!==!1&&Xt.getKeyword(o).collectEvaluatedItems(c,t,r,n);return l!==!1&&new Set([...s,...l])},new Set)};var Hp={compile:zp,interpret:Qp,collectEvaluatedProperties:Yp,collectEvaluatedItems:Gp};const Xp=Kp,Zp=Hp;var em={metaData:Xp,validate:Zp};const tm=Ts,rm=Rr,nm=Cn,am=Nn,im=em,sm=Ps;var b={Core:tm,Schema:rm,Instance:nm,Reference:am,Keywords:im,InvalidSchemaError:sm};const{Core:qs,Schema:Zt,Instance:Gn}=b,om=async(e,t,r)=>{const n=await Zt.step("items",r),a=Zt.typeOf(n,"array")?Zt.length(n):Number.MAX_SAFE_INTEGER;return Zt.typeOf(e,"boolean")?[a,Zt.value(e)]:[a,await qs.compileSchema(e,t)]},cm=([e,t],r,n,a)=>Gn.typeOf(r,"array")?typeof t=="string"?Gn.every((i,s)=>s<e||qs.interpretSchema(t,i,n,a),r):Gn.every((i,s)=>s<e?!0:t,r):!0;var lm={compile:om,interpret:cm};const{Core:Ds,Schema:Hn,Instance:Xn}=b,um=async(e,t,r)=>{const n=await Hn.step("items",r);return[Hn.typeOf(n,"array")?Hn.length(n):Number.MAX_SAFE_INTEGER,await Ds.compileSchema(e,t)]},Bs=([e,t],r,n,a)=>Xn.typeOf(r,"array")?Xn.every((i,s)=>s<e||Ds.interpretSchema(t,i,n,a),r):!0,fm=(e,t,r,n)=>Bs(e,t,r,n)&&new Set(Xn.map((a,i)=>i,t));var pm={compile:um,interpret:Bs,collectEvaluatedItems:fm};const{Core:Fs,Schema:Ue,Instance:Us}=b,mm=async(e,t,r)=>{const n=await Ue.step("properties",r),a=Ue.typeOf(n,"object")?Ue.keys(n):[],i=await Ue.step("patternProperties",r),s=Ue.typeOf(i,"object")?Ue.keys(i).map(o=>new RegExp(o)):[];return Ue.typeOf(e,"boolean")?[a,s,Ue.value(e)]:[a,s,await Fs.compileSchema(e,t)]},dm=([e,t,r],n,a,i)=>{if(!Us.typeOf(n,"object"))return!0;const s=Us.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?s.every(([,o])=>Fs.interpretSchema(r,o,a,i)):s.length===0||r};var hm={compile:mm,interpret:dm};const{Core:Vs,Schema:ft,Instance:Js}=b,vm=async(e,t,r)=>{const n=await ft.step("properties",r),a=ft.typeOf(n,"object")?ft.keys(n):[],i=await ft.step("patternProperties",r),s=ft.typeOf(i,"object")?ft.keys(i).map(o=>new RegExp(o)):[];return[a,s,await Vs.compileSchema(e,t)]},Ws=([e,t,r],n,a,i)=>Js.typeOf(n,"object")?Js.entries(n).filter(([s])=>!e.includes(s)&&!t.some(o=>o.test(s))).every(([,s])=>Vs.interpretSchema(r,s,a,i)):!0,ym=(e,t,r,n)=>Ws(e,t,r,n)&&[new RegExp("")];var gm={compile:vm,interpret:Ws,collectEvaluatedProperties:ym};const{Core:Lr,Schema:$m}=b,Ks=ee,bm=(e,t)=>Ks.pipeline([$m.map(async r=>Lr.compileSchema(await r,t)),Ks.all],e),Sm=(e,t,r,n)=>e.every(a=>Lr.interpretSchema(a,t,r,n)),Om=(e,t,r,n)=>e.reduce((a,i)=>{const s=a&&Lr.collectEvaluatedProperties(i,t,r,n);return s!==!1&&[...a,...s]},[]),wm=(e,t,r,n)=>e.reduce((a,i)=>{const s=a!==!1&&Lr.collectEvaluatedItems(i,t,r,n);return s!==!1&&new Set([...a,...s])},new Set);var Im={compile:bm,interpret:Sm,collectEvaluatedProperties:Om,collectEvaluatedItems:wm};const{Core:qr,Schema:Em}=b,zs=ee,xm=(e,t)=>zs.pipeline([Em.map(async r=>qr.compileSchema(await r,t)),zs.all],e),Pm=(e,t,r,n)=>e.filter(i=>qr.interpretSchema(i,t,r,n)).length>0,km=(e,t,r,n)=>e.reduce((a,i)=>{const s=qr.collectEvaluatedProperties(i,t,r,n);return s!==!1?[...a||[],...s]:a},!1),Am=(e,t,r,n)=>e.reduce((a,i)=>{const s=qr.collectEvaluatedItems(i,t,r,n);return s!==!1?new Set([...a||[],...s]):a},!1);var jm={compile:xm,interpret:Pm,collectEvaluatedProperties:km,collectEvaluatedItems:Am},Nm=Object.keys,Qs=JSON.stringify;function er(e,t){var r,n,a,i,s,o,c;if(c=typeof e,c==="string")return Qs(e);if(e===!0)return"true";if(e===!1)return"false";if(e===null)return"null";if(e instanceof Array){for(a="[",n=e.length-1,r=0;r<n;r++)a+=er(e[r],!1)+",";return n>-1&&(a+=er(e[r],!1)),a+"]"}if(e instanceof Object){if(typeof e.toJSON=="function")return er(e.toJSON(),t);for(i=Nm(e).sort(),n=i.length,a="",r=0;r<n;)s=i[r],o=er(e[s],!0),o!==void 0&&(r&&a!==""&&(a+=","),a+=Qs(s)+":"+o),r++;return"{"+a+"}"}switch(c){case"function":case"undefined":return t?void 0:null;default:return isFinite(e)?e:null}}var pt=function(e){return""+er(e,!1)};const{Schema:Cm,Instance:_m}=b,Ys=pt,Rm=e=>Ys(Cm.value(e)),Mm=(e,t)=>Ys(_m.value(t))===e;var Tm={compile:Rm,interpret:Mm};const{Core:Gs,Instance:Hs}=b,Lm=(e,t)=>Gs.compileSchema(e,t),qm=(e,t,r,n)=>!Hs.typeOf(t,"array")||Hs.some(a=>Gs.interpretSchema(e,a,r,n),t);var Dm={compile:Lm,interpret:qm};const{Core:Zn,Schema:mt,Instance:ea}=b,Bm=async(e,t,r)=>{const n=await Zn.compileSchema(e,t),a=await mt.step("minContains",r),i=mt.typeOf(a,"number")?mt.value(a):1,s=await mt.step("maxContains",r),o=mt.typeOf(s,"number")?mt.value(s):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Xs=({contains:e,minContains:t,maxContains:r},n,a,i)=>{if(!ea.typeOf(n,"array"))return!0;const s=ea.reduce((o,c)=>Zn.interpretSchema(e,c,a,i)?o+1:o,0,n);return s>=t&&s<=r},Fm=(e,t,r,n)=>Xs(e,t,r,n)&&ea.reduce((a,i,s)=>Zn.interpretSchema(e.contains,i,r,n)?a.add(s):a,new Set,t);var Um={compile:Bm,interpret:Xs,collectEvaluatedItems:Fm};const{Core:Vm,Schema:Jm}=b,ta=ee,Wm=async(e,t)=>{await ta.pipeline([Jm.entries,ta.map(([,r])=>Vm.compileSchema(r,t)),ta.all],e)},Km=()=>!0;var zm={compile:Wm,interpret:Km};const{Core:Zs,Schema:ra,Instance:eo}=b,na=ee,Qm=(e,t)=>na.pipeline([ra.entries,na.map(async([r,n])=>[r,ra.typeOf(n,"array")?ra.value(n):await Zs.compileSchema(n,t)]),na.all],e),Ym=(e,t,r,n)=>{const a=eo.value(t);return!eo.typeOf(t,"object")||e.every(([i,s])=>i in a?Array.isArray(s)?s.every(o=>o in a):Zs.interpretSchema(s,t,r,n):!0)};var Gm={compile:Qm,interpret:Ym};const{Schema:to,Instance:ro}=b,aa=ee,Hm=e=>aa.pipeline([to.entries,aa.map(([t,r])=>[t,to.value(r)]),aa.all],e),Xm=(e,t)=>{const r=ro.value(t);return!ro.typeOf(t,"object")||e.every(([n,a])=>!(n in r)||a.every(i=>i in r))};var Zm={compile:Hm,interpret:Xm};const{Core:ia,Schema:ed,Instance:sa}=b,oa=ee,td=(e,t)=>oa.pipeline([ed.entries,oa.map(async([r,n])=>[r,await ia.compileSchema(n,t)]),oa.all],e),rd=(e,t,r,n)=>{const a=sa.value(t);return!sa.typeOf(t,"object")||e.every(([i,s])=>!(i in a)||ia.interpretSchema(s,t,r,n))},nd=(e,t,r,n)=>e.reduce((a,[i,s])=>{if(!a||!sa.has(i,t))return a;const o=ia.collectEvaluatedProperties(s,t,r,n);return o!==!1&&a.concat(o)},[]);var ad={compile:td,interpret:rd,collectEvaluatedProperties:nd};const{Schema:id,Instance:sd}=b,no=pt,od=e=>id.value(e).map(no),cd=(e,t)=>e.some(r=>no(sd.value(t))===r);var ld={compile:od,interpret:cd};const{Schema:ud,Instance:ao}=b,fd=async e=>ud.value(e),pd=(e,t)=>!ao.typeOf(t,"number")||ao.value(t)<e;var md={compile:fd,interpret:pd};const{Schema:dd,Instance:io}=b,hd=async e=>dd.value(e),vd=(e,t)=>!io.typeOf(t,"number")||io.value(t)>e;var yd={compile:hd,interpret:vd};const{Core:Dr}=b,gd=(e,t)=>Dr.compileSchema(e,t),$d=(e,t,r,n)=>(Dr.interpretSchema(e,t,r,n),!0),bd=(e,t,r,n)=>Dr.collectEvaluatedProperties(e,t,r,n)||[],Sd=(e,t,r,n)=>Dr.collectEvaluatedItems(e,t,r,n)||new Set;var Od={compile:gd,interpret:$d,collectEvaluatedProperties:bd,collectEvaluatedItems:Sd};const{Core:dt,Schema:so}=b,wd=async(e,t,r)=>{if(so.has("if",r)){const n=await so.step("if",r);return[await dt.compileSchema(n,t),await dt.compileSchema(e,t)]}else return[]},Id=([e,t],r,n,a)=>e===void 0||!ca(e,r,n,a)||dt.interpretSchema(t,r,n,a),ca=(e,t,r,n)=>{const a=r[e][2];return typeof a=="boolean"?a:a.every(([i,,s])=>dt.getKeyword(i).interpret(s,t,r,n))},Ed=([e,t],r,n,a)=>e===void 0||!ca(e,r,n,a)?[]:dt.collectEvaluatedProperties(t,r,n,a),xd=([e,t],r,n,a)=>e===void 0||!ca(e,r,n,a)?new Set:dt.collectEvaluatedItems(t,r,n,a);var Pd={compile:wd,interpret:Id,collectEvaluatedProperties:Ed,collectEvaluatedItems:xd};const{Core:ht,Schema:oo}=b,kd=async(e,t,r)=>{if(oo.has("if",r)){const n=await oo.step("if",r);return[await ht.compileSchema(n,t),await ht.compileSchema(e,t)]}else return[]},Ad=([e,t],r,n,a)=>e===void 0||la(e,r,n,a)||ht.interpretSchema(t,r,n,a),la=(e,t,r,n)=>{const a=r[e][2];return typeof a=="boolean"?a:a.every(([i,,s])=>ht.getKeyword(i).interpret(s,t,r,n))},jd=([e,t],r,n,a)=>e===void 0||la(e,r,n,a)?[]:ht.collectEvaluatedProperties(t,r,n,a),Nd=([e,t],r,n,a)=>e===void 0||la(e,r,n,a)?new Set:ht.collectEvaluatedItems(t,r,n,a);var Cd={compile:kd,interpret:Ad,collectEvaluatedProperties:jd,collectEvaluatedItems:Nd};const{Core:Br,Schema:co,Instance:Fr}=b,_d=async(e,t)=>{if(co.typeOf(e,"array")){const r=await co.map(n=>Br.compileSchema(n,t),e);return Promise.all(r)}else return Br.compileSchema(e,t)},lo=(e,t,r,n)=>Fr.typeOf(t,"array")?typeof e=="string"?Fr.every(a=>Br.interpretSchema(e,a,r,n),t):Fr.every((a,i)=>!(i in e)||Br.interpretSchema(e[i],a,r,n),t):!0,Rd=(e,t,r,n)=>lo(e,t,r,n)&&(typeof e=="string"?new Set(Fr.map((a,i)=>i,t)):new Set(e.map((a,i)=>i)));var Md={compile:_d,interpret:lo,collectEvaluatedItems:Rd};const{Core:uo,Schema:ua,Instance:fa}=b,Td=async(e,t,r)=>{const n=await ua.step("prefixItems",r);return[ua.typeOf(n,"array")?ua.length(n):0,await uo.compileSchema(e,t)]},fo=([e,t],r,n,a)=>fa.typeOf(r,"array")?fa.every((i,s)=>s<e||uo.interpretSchema(t,i,n,a),r):!0,Ld=(e,t,r,n)=>fo(e,t,r,n)&&new Set(fa.map((a,i)=>i,t));var qd={compile:Td,interpret:fo,collectEvaluatedItems:Ld};const{Schema:Dd,Instance:po}=b,Bd=e=>Dd.value(e),Fd=(e,t)=>!po.typeOf(t,"array")||po.length(t)<=e;var Ud={compile:Bd,interpret:Fd};const{Schema:Vd,Instance:mo}=b,Jd=e=>Vd.value(e),Wd=(e,t)=>!mo.typeOf(t,"string")||mo.length(t)<=e;var Kd={compile:Jd,interpret:Wd};const{Schema:zd,Instance:ho}=b,Qd=e=>zd.value(e),Yd=(e,t)=>!ho.typeOf(t,"string")||[...ho.value(t)].length<=e;var Gd={compile:Qd,interpret:Yd};const{Schema:Hd,Instance:vo}=b,Xd=e=>Hd.value(e),Zd=(e,t)=>!vo.typeOf(t,"object")||vo.keys(t).length<=e;var eh={compile:Xd,interpret:Zd};const{Schema:pa,Instance:yo}=b,th=async(e,t,r)=>{const n=await pa.step("exclusiveMaximum",r),a=pa.value(n);return[pa.value(e),a]},rh=([e,t],r)=>{if(!yo.typeOf(r,"number"))return!0;const n=yo.value(r);return t?n<e:n<=e};var nh={compile:th,interpret:rh};const{Schema:ah,Instance:go}=b,ih=async e=>ah.value(e),sh=(e,t)=>!go.typeOf(t,"number")||go.value(t)<=e;var oh={compile:ih,interpret:sh};const{Schema:ch,Instance:$o}=b,lh=e=>ch.value(e),uh=(e,t)=>!$o.typeOf(t,"array")||$o.length(t)>=e;var fh={compile:lh,interpret:uh};const{Schema:ph,Instance:bo}=b,mh=e=>ph.value(e),dh=(e,t)=>!bo.typeOf(t,"string")||bo.length(t)>=e;var hh={compile:mh,interpret:dh};const{Schema:vh,Instance:So}=b,yh=e=>vh.value(e),gh=(e,t)=>!So.typeOf(t,"string")||[...So.value(t)].length>=e;var $h={compile:yh,interpret:gh};const{Schema:bh,Instance:Oo}=b,Sh=e=>bh.value(e),Oh=(e,t)=>!Oo.typeOf(t,"object")||Oo.keys(t).length>=e;var wh={compile:Sh,interpret:Oh};const{Schema:ma,Instance:wo}=b,Ih=async(e,t,r)=>{const n=await ma.step("exclusiveMinimum",r),a=ma.value(n);return[ma.value(e),a]},Eh=([e,t],r)=>{if(!wo.typeOf(r,"number"))return!0;const n=wo.value(r);return t?n>e:n>=e};var xh={compile:Ih,interpret:Eh};const{Schema:Ph,Instance:Io}=b,kh=async e=>Ph.value(e),Ah=(e,t)=>!Io.typeOf(t,"number")||Io.value(t)>=e;var jh={compile:kh,interpret:Ah};const{Schema:Nh,Instance:Eo}=b,Ch=e=>Nh.value(e),_h=(e,t)=>{if(!Eo.typeOf(t,"number"))return!0;const r=Eo.value(t)%e;return xo(0,r)||xo(e,r)},xo=(e,t)=>Math.abs(e-t)<11920929e-14;var Rh={compile:Ch,interpret:_h};const{Core:Po}=b,Mh=Po.compileSchema,Th=(e,t,r,n)=>!Po.interpretSchema(e,t,r,n);var Lh={compile:Mh,interpret:Th};const{Core:Ur,Schema:qh}=b,Dh=async(e,t)=>{const r=await qh.map(n=>Ur.compileSchema(n,t),e);return Promise.all(r)},Bh=(e,t,r,n)=>{let a=0;for(const i of e)if(Ur.interpretSchema(i,t,r,n)&&a++,a>1)break;return a===1},Fh=(e,t,r,n)=>{let a=0;return e.reduce((i,s)=>{if(a>1)return!1;const o=Ur.collectEvaluatedProperties(s,t,r,n);return o?a++==0&&o:i},!1)},Uh=(e,t,r,n)=>{let a=0;return e.reduce((i,s)=>{if(a>1)return!1;const o=Ur.collectEvaluatedItems(s,t,r,n);return o?a++==0&&o:i},!1)};var Vh={compile:Dh,interpret:Bh,collectEvaluatedProperties:Fh,collectEvaluatedItems:Uh};const{Schema:Jh,Instance:ko}=b,Wh=e=>new RegExp(Jh.value(e),"u"),Kh=(e,t)=>!ko.typeOf(t,"string")||e.test(ko.value(t));var zh={compile:Wh,interpret:Kh};const{Core:Ao,Schema:Qh,Instance:jo}=b,da=ee,Yh=(e,t)=>da.pipeline([Qh.entries,da.map(async([r,n])=>[new RegExp(r,"u"),await Ao.compileSchema(n,t)]),da.all],e),No=(e,t,r,n)=>!jo.typeOf(t,"object")||e.every(([a,i])=>jo.entries(t).filter(([s])=>a.test(s)).every(([,s])=>Ao.interpretSchema(i,s,r,n))),Gh=(e,t,r,n)=>No(e,t,r,n)&&e.map(([a])=>a);var Hh={compile:Yh,interpret:No,collectEvaluatedProperties:Gh};const Xh=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,Zh=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),ev=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),a=e.slice(r+1);return[decodeURI(n),decodeURI(a)]};var Co={isObject:Xh,escapeRegExp:Zh,splitUrl:ev};const{Core:_o,Schema:tv,Instance:Ro}=b,Mo=ee,{escapeRegExp:rv}=Co,nv=(e,t)=>Mo.pipeline([tv.entries,Mo.reduce(async(r,[n,a])=>(r[n]=await _o.compileSchema(a,t),r),Object.create(null))],e),To=(e,t,r,n)=>!Ro.typeOf(t,"object")||Ro.entries(t).filter(([a])=>a in e).every(([a,i])=>_o.interpretSchema(e[a],i,r,n)),av=(e,t,r,n)=>To(e,t,r,n)&&Object.keys(e).map(a=>new RegExp(`^${rv(a)}$`));var iv={compile:nv,interpret:To,collectEvaluatedProperties:av};const{Core:Lo,Instance:ha}=b,sv=(e,t)=>Lo.compileSchema(e,t),ov=(e,t,r,n)=>!ha.typeOf(t,"object")||ha.keys(t).every(a=>Lo.interpretSchema(e,ha.cons(a),r,n));var cv={compile:sv,interpret:ov};const{Core:tr,Schema:Vr}=b,{splitUrl:lv}=Co,uv=async(e,t)=>{const[,r]=lv(Vr.value(e)),n=await Vr.get(Vr.value(e),e);return await tr.compileSchema(n,t),[n.id,r]},fv=([e,t],r,n,a)=>{if(t in n.metaData[e].dynamicAnchors)return tr.interpretSchema(a[t],r,n,a);{const i=Vr.getAnchorPointer(n.metaData[e],t);return tr.interpretSchema(`${e}#${encodeURI(i)}`,r,n,a)}},pv=tr.collectEvaluatedProperties,mv=tr.collectEvaluatedItems;var dv={compile:uv,interpret:fv,collectEvaluatedProperties:pv,collectEvaluatedItems:mv};const{Core:Jr,Schema:qo}=b,hv=async(e,t)=>{const r=await qo.get(qo.value(e),e);return Jr.compileSchema(r,t)},vv=Jr.interpretSchema,yv=Jr.collectEvaluatedProperties,gv=Jr.collectEvaluatedItems;var $v={compile:hv,interpret:vv,collectEvaluatedProperties:yv,collectEvaluatedItems:gv};const{Schema:bv,Instance:Do}=b,Sv=e=>bv.value(e),Ov=(e,t)=>!Do.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(Do.value(t),r));var wv={compile:Sv,interpret:Ov};const{Core:Bo,Schema:Iv,Instance:Fo}=b,Uo=ee,Ev=(e,t)=>Uo.pipeline([Iv.map(r=>Bo.compileSchema(r,t)),Uo.all],e),Vo=(e,t,r,n)=>Fo.typeOf(t,"array")?Fo.every((a,i)=>!(i in e)||Bo.interpretSchema(e[i],a,r,n),t):!0,xv=(e,t,r,n)=>Vo(e,t,r,n)&&new Set(e.map((a,i)=>i));var Pv={compile:Ev,interpret:Vo,collectEvaluatedItems:xv};const{Schema:kv,Instance:Jo}=b,Av=e=>kv.value(e),jv=(e,t)=>typeof e=="string"?Jo.typeOf(t,e):e.some(Jo.typeOf(t));var Nv={compile:Av,interpret:jv};const{Core:va,Schema:Cv,Instance:Wr}=b,_v=async(e,t,r)=>[Cv.uri(r),await va.compileSchema(e,t)],Wo=([e,t],r,n,a)=>{if(!Wr.typeOf(r,"array"))return!0;const i=va.collectEvaluatedItems(e,r,n,a,!0);return i===!1||Wr.every((s,o)=>i.has(o)||va.interpretSchema(t,Wr.step(o,r),n,a),r)},Rv=(e,t,r,n)=>Wo(e,t,r,n)&&new Set(Wr.map((a,i)=>i,t));var Mv={compile:_v,interpret:Wo,collectEvaluatedItems:Rv};const{Core:ya,Schema:Tv,Instance:Ko}=b,Lv=async(e,t,r)=>[Tv.uri(r),await ya.compileSchema(e,t)],zo=([e,t],r,n,a)=>{if(!Ko.typeOf(r,"object"))return!0;const i=ya.collectEvaluatedProperties(e,r,n,a,!0);return!i||Ko.entries(r).filter(([s])=>!i.some(o=>s.match(o))).every(([,s])=>ya.interpretSchema(t,s,n,a))},qv=(e,t,r,n)=>zo(e,t,r,n)&&[new RegExp("")];var Dv={compile:Lv,interpret:zo,collectEvaluatedProperties:qv};const{Schema:Bv,Instance:ga}=b,Fv=pt,Uv=e=>Bv.value(e),Vv=(e,t)=>{if(!ga.typeOf(t,"array")||e===!1)return!0;const r=ga.map(n=>Fv(ga.value(n)),t);return new Set(r).size===r.length};var Jv={compile:Uv,interpret:Vv};const{Keywords:Qo}=b;var vt={additionalItems:lm,additionalItems6:pm,additionalProperties:hm,additionalProperties6:gm,allOf:Im,anyOf:jm,const:Tm,contains:Dm,containsMinContainsMaxContains:Um,definitions:zm,dependencies:Gm,dependentRequired:Zm,dependentSchemas:ad,enum:ld,exclusiveMaximum:md,exclusiveMinimum:yd,if:Od,then:Pd,else:Cd,items:Md,items202012:qd,maxItems:Ud,maxLength:Kd,maxLength6:Gd,maxProperties:eh,maximumExclusiveMaximum:nh,maximum:oh,metaData:Qo.metaData,minItems:fh,minLength:hh,minLength6:$h,minProperties:wh,minimumExclusiveMinimum:xh,minimum:jh,multipleOf:Rh,not:Lh,oneOf:Vh,pattern:zh,patternProperties:Hh,properties:iv,propertyNames:cv,dynamicRef:dv,ref:$v,required:wv,tupleItems:Pv,type:Nv,unevaluatedItems:Mv,unevaluatedProperties:Dv,uniqueItems:Jv,validate:Qo.validate},Wv=`{
    "id": "http://json-schema.org/draft-04/schema#",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "description": "Core schema meta-schema",
    "definitions": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$ref": "#" }
        },
        "positiveInteger": {
            "type": "integer",
            "minimum": 0
        },
        "positiveIntegerDefault0": {
            "allOf": [ { "$ref": "#/definitions/positiveInteger" }, { "default": 0 } ]
        },
        "simpleTypes": {
            "enum": [ "array", "boolean", "integer", "null", "number", "object", "string" ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "minItems": 1,
            "uniqueItems": true
        }
    },
    "type": "object",
    "properties": {
        "id": {
            "type": "string"
        },
        "$schema": {
            "type": "string"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": {},
        "multipleOf": {
            "type": "number",
            "minimum": 0,
            "exclusiveMinimum": true
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "boolean",
            "default": false
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "boolean",
            "default": false
        },
        "maxLength": { "$ref": "#/definitions/positiveInteger" },
        "minLength": { "$ref": "#/definitions/positiveIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "additionalItems": {
            "anyOf": [
                { "type": "boolean" },
                { "$ref": "#" }
            ],
            "default": {}
        },
        "items": {
            "anyOf": [
                { "$ref": "#" },
                { "$ref": "#/definitions/schemaArray" }
            ],
            "default": {}
        },
        "maxItems": { "$ref": "#/definitions/positiveInteger" },
        "minItems": { "$ref": "#/definitions/positiveIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "maxProperties": { "$ref": "#/definitions/positiveInteger" },
        "minProperties": { "$ref": "#/definitions/positiveIntegerDefault0" },
        "required": { "$ref": "#/definitions/stringArray" },
        "additionalProperties": {
            "anyOf": [
                { "type": "boolean" },
                { "$ref": "#" }
            ],
            "default": {}
        },
        "definitions": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "properties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "dependencies": {
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$ref": "#" },
                    { "$ref": "#/definitions/stringArray" }
                ]
            }
        },
        "enum": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/definitions/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/definitions/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        },
        "format": { "type": "string" },
        "allOf": { "$ref": "#/definitions/schemaArray" },
        "anyOf": { "$ref": "#/definitions/schemaArray" },
        "oneOf": { "$ref": "#/definitions/schemaArray" },
        "not": { "$ref": "#" }
    },
    "dependencies": {
        "exclusiveMaximum": [ "maximum" ],
        "exclusiveMinimum": [ "minimum" ]
    },
    "default": {}
}`;const{Core:Kv,Schema:rr}=b,V=vt,zv=Wv,nr="http://json-schema.org/draft-04/schema";rr.setConfig(nr,"baseToken","id");rr.setConfig(nr,"embeddedToken","id");rr.setConfig(nr,"anchorToken","id");rr.setConfig(nr,"jrefToken","$ref");rr.add(JSON.parse(zv));Kv.defineVocabulary(nr,{validate:V.validate,additionalItems:V.additionalItems,additionalProperties:V.additionalProperties,allOf:V.allOf,anyOf:V.anyOf,default:V.metaData,definitions:V.definitions,dependencies:V.dependencies,description:V.metaData,enum:V.enum,format:V.metaData,items:V.items,maxItems:V.maxItems,maxLength:V.maxLength,maxProperties:V.maxProperties,maximum:V.maximumExclusiveMaximum,minItems:V.minItems,minLength:V.minLength,minProperties:V.minProperties,minimum:V.minimumExclusiveMinimum,multipleOf:V.multipleOf,not:V.not,oneOf:V.oneOf,pattern:V.pattern,patternProperties:V.patternProperties,properties:V.properties,required:V.required,title:V.metaData,type:V.type,uniqueItems:V.uniqueItems});var Qv=`{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "$id": "http://json-schema.org/draft-06/schema#",
    "title": "Core schema meta-schema",
    "definitions": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$ref": "#" }
        },
        "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
            "allOf": [
                { "$ref": "#/definitions/nonNegativeInteger" },
                { "default": 0 }
            ]
        },
        "simpleTypes": {
            "enum": [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
        }
    },
    "type": ["object", "boolean"],
    "properties": {
        "$id": {
            "type": "string",
            "format": "uri-reference"
        },
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "$ref": {
            "type": "string",
            "format": "uri-reference"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": {},
        "examples": {
            "type": "array",
            "items": {}
        },
        "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "number"
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "number"
        },
        "maxLength": { "$ref": "#/definitions/nonNegativeInteger" },
        "minLength": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "additionalItems": { "$ref": "#" },
        "items": {
            "anyOf": [
                { "$ref": "#" },
                { "$ref": "#/definitions/schemaArray" }
            ],
            "default": {}
        },
        "maxItems": { "$ref": "#/definitions/nonNegativeInteger" },
        "minItems": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "contains": { "$ref": "#" },
        "maxProperties": { "$ref": "#/definitions/nonNegativeInteger" },
        "minProperties": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
        "required": { "$ref": "#/definitions/stringArray" },
        "additionalProperties": { "$ref": "#" },
        "definitions": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "properties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "dependencies": {
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$ref": "#" },
                    { "$ref": "#/definitions/stringArray" }
                ]
            }
        },
        "propertyNames": { "$ref": "#" },
        "const": {},
        "enum": {
            "type": "array",
            "minItems": 1,
            "uniqueItems": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/definitions/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/definitions/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        },
        "format": { "type": "string" },
        "allOf": { "$ref": "#/definitions/schemaArray" },
        "anyOf": { "$ref": "#/definitions/schemaArray" },
        "oneOf": { "$ref": "#/definitions/schemaArray" },
        "not": { "$ref": "#" }
    },
    "default": {}
}`;const{Core:Yv,Schema:ar}=b,q=vt,Gv=Qv,ir="http://json-schema.org/draft-06/schema";ar.setConfig(ir,"baseToken","$id");ar.setConfig(ir,"embeddedToken","$id");ar.setConfig(ir,"anchorToken","$id");ar.setConfig(ir,"jrefToken","$ref");ar.add(JSON.parse(Gv));Yv.defineVocabulary(ir,{validate:q.validate,additionalItems:q.additionalItems6,additionalProperties:q.additionalProperties6,allOf:q.allOf,anyOf:q.anyOf,const:q.const,contains:q.contains,default:q.metaData,definitions:q.definitions,dependencies:q.dependencies,description:q.metaData,enum:q.enum,examples:q.metaData,exclusiveMaximum:q.exclusiveMaximum,exclusiveMinimum:q.exclusiveMinimum,format:q.metaData,items:q.items,maxItems:q.maxItems,maxLength:q.maxLength6,maxProperties:q.maxProperties,maximum:q.maximum,minItems:q.minItems,minLength:q.minLength6,minProperties:q.minProperties,minimum:q.minimum,multipleOf:q.multipleOf,not:q.not,oneOf:q.oneOf,pattern:q.pattern,patternProperties:q.patternProperties,properties:q.properties,propertyNames:q.propertyNames,required:q.required,title:q.metaData,type:q.type,uniqueItems:q.uniqueItems});var Hv=`{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://json-schema.org/draft-07/schema#",
    "title": "Core schema meta-schema",
    "definitions": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$ref": "#" }
        },
        "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
            "allOf": [
                { "$ref": "#/definitions/nonNegativeInteger" },
                { "default": 0 }
            ]
        },
        "simpleTypes": {
            "enum": [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
        }
    },
    "type": ["object", "boolean"],
    "properties": {
        "$id": {
            "type": "string",
            "format": "uri-reference"
        },
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "$ref": {
            "type": "string",
            "format": "uri-reference"
        },
        "$comment": {
            "type": "string"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": true,
        "readOnly": {
            "type": "boolean",
            "default": false
        },
        "writeOnly": {
            "type": "boolean",
            "default": false
        },
        "examples": {
            "type": "array",
            "items": true
        },
        "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "number"
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "number"
        },
        "maxLength": { "$ref": "#/definitions/nonNegativeInteger" },
        "minLength": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "additionalItems": { "$ref": "#" },
        "items": {
            "anyOf": [
                { "$ref": "#" },
                { "$ref": "#/definitions/schemaArray" }
            ],
            "default": true
        },
        "maxItems": { "$ref": "#/definitions/nonNegativeInteger" },
        "minItems": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "contains": { "$ref": "#" },
        "maxProperties": { "$ref": "#/definitions/nonNegativeInteger" },
        "minProperties": { "$ref": "#/definitions/nonNegativeIntegerDefault0" },
        "required": { "$ref": "#/definitions/stringArray" },
        "additionalProperties": { "$ref": "#" },
        "definitions": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "properties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$ref": "#" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependencies": {
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$ref": "#" },
                    { "$ref": "#/definitions/stringArray" }
                ]
            }
        },
        "propertyNames": { "$ref": "#" },
        "const": true,
        "enum": {
            "type": "array",
            "items": true,
            "minItems": 1,
            "uniqueItems": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/definitions/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/definitions/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        },
        "format": { "type": "string" },
        "contentMediaType": { "type": "string" },
        "contentEncoding": { "type": "string" },
        "if": { "$ref": "#" },
        "then": { "$ref": "#" },
        "else": { "$ref": "#" },
        "allOf": { "$ref": "#/definitions/schemaArray" },
        "anyOf": { "$ref": "#/definitions/schemaArray" },
        "oneOf": { "$ref": "#/definitions/schemaArray" },
        "not": { "$ref": "#" }
    },
    "default": true
}`;const{Core:Xv,Schema:sr}=b,M=vt,Zv=Hv,or="http://json-schema.org/draft-07/schema";sr.setConfig(or,"baseToken","$id");sr.setConfig(or,"embeddedToken","$id");sr.setConfig(or,"anchorToken","$id");sr.setConfig(or,"jrefToken","$ref");sr.add(JSON.parse(Zv));Xv.defineVocabulary(or,{validate:M.validate,additionalItems:M.additionalItems6,additionalProperties:M.additionalProperties6,allOf:M.allOf,anyOf:M.anyOf,const:M.const,contains:M.contains,default:M.metaData,definitions:M.definitions,dependencies:M.dependencies,description:M.metaData,enum:M.enum,exclusiveMaximum:M.exclusiveMaximum,exclusiveMinimum:M.exclusiveMinimum,format:M.metaData,if:M.if,then:M.then,else:M.else,items:M.items,maxItems:M.maxItems,maxLength:M.maxLength6,maxProperties:M.maxProperties,maximum:M.maximum,minItems:M.minItems,minLength:M.minLength6,minProperties:M.minProperties,minimum:M.minimum,multipleOf:M.multipleOf,not:M.not,oneOf:M.oneOf,pattern:M.pattern,patternProperties:M.patternProperties,properties:M.properties,propertyNames:M.propertyNames,readOnly:M.metaData,required:M.required,title:M.metaData,type:M.type,uniqueItems:M.uniqueItems,writeOnly:M.metaData});var ey=`{
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2019-09/vocab/core": true,
        "https://json-schema.org/draft/2019-09/vocab/applicator": true,
        "https://json-schema.org/draft/2019-09/vocab/validation": true,
        "https://json-schema.org/draft/2019-09/vocab/meta-data": true,
        "https://json-schema.org/draft/2019-09/vocab/format": false,
        "https://json-schema.org/draft/2019-09/vocab/content": true
    },
    "$recursiveAnchor": true,

    "title": "Core and Validation specifications meta-schema",
    "allOf": [
        {"$ref": "meta/core"},
        {"$ref": "meta/applicator"},
        {"$ref": "meta/validation"},
        {"$ref": "meta/meta-data"},
        {"$ref": "meta/format"},
        {"$ref": "meta/content"}
    ],
    "type": ["object", "boolean"],
    "properties": {
        "definitions": {
            "$comment": "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
            "type": "object",
            "additionalProperties": { "$recursiveRef": "#" },
            "default": {}
        },
        "dependencies": {
            "$comment": "\\"dependencies\\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \\"dependentSchemas\\" and \\"dependentRequired\\"",
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$recursiveRef": "#" },
                    { "$ref": "meta/validation#/$defs/stringArray" }
                ]
            }
        }
    }
}`,ty=`{
    "$id": "https://json-schema.org/draft/2019-09/meta/core",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2019-09/vocab/core": true
    },
    "$recursiveAnchor": true,

    "title": "Core vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "$id": {
            "type": "string",
            "format": "uri-reference",
            "$comment": "Non-empty fragments not allowed.",
            "pattern": "^[^#]*#?$"
        },
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "$anchor": {
            "type": "string",
            "pattern": "^[A-Za-z][-A-Za-z0-9.:_]*$"
        },
        "$ref": {
            "type": "string",
            "format": "uri-reference"
        },
        "$recursiveRef": {
            "type": "string",
            "format": "uri-reference"
        },
        "$recursiveAnchor": {
            "type": "boolean",
            "default": false
        },
        "$vocabulary": {
            "type": "object",
            "propertyNames": {
                "type": "string",
                "format": "uri"
            },
            "additionalProperties": {
                "type": "boolean"
            }
        },
        "$comment": {
            "type": "string"
        },
        "$defs": {
            "type": "object",
            "additionalProperties": { "$recursiveRef": "#" },
            "default": {}
        }
    }
}`,ry=`{
    "$id": "https://json-schema.org/draft/2019-09/meta/applicator",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2019-09/vocab/applicator": true
    },
    "$recursiveAnchor": true,

    "title": "Applicator vocabulary meta-schema",
    "properties": {
        "additionalItems": { "$recursiveRef": "#" },
        "unevaluatedItems": { "$recursiveRef": "#" },
        "items": {
            "anyOf": [
                { "$recursiveRef": "#" },
                { "$ref": "#/$defs/schemaArray" }
            ]
        },
        "contains": { "$recursiveRef": "#" },
        "additionalProperties": { "$recursiveRef": "#" },
        "unevaluatedProperties": { "$recursiveRef": "#" },
        "properties": {
            "type": "object",
            "additionalProperties": { "$recursiveRef": "#" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$recursiveRef": "#" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependentSchemas": {
            "type": "object",
            "additionalProperties": {
                "$recursiveRef": "#"
            }
        },
        "propertyNames": { "$recursiveRef": "#" },
        "if": { "$recursiveRef": "#" },
        "then": { "$recursiveRef": "#" },
        "else": { "$recursiveRef": "#" },
        "allOf": { "$ref": "#/$defs/schemaArray" },
        "anyOf": { "$ref": "#/$defs/schemaArray" },
        "oneOf": { "$ref": "#/$defs/schemaArray" },
        "not": { "$recursiveRef": "#" }
    },
    "$defs": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$recursiveRef": "#" }
        }
    }
}`,ny=`{
    "$id": "https://json-schema.org/draft/2019-09/meta/validation",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2019-09/vocab/validation": true
    },
    "$recursiveAnchor": true,

    "title": "Validation vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "number"
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "number"
        },
        "maxLength": { "$ref": "#/$defs/nonNegativeInteger" },
        "minLength": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "maxItems": { "$ref": "#/$defs/nonNegativeInteger" },
        "minItems": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "maxContains": { "$ref": "#/$defs/nonNegativeInteger" },
        "minContains": {
            "$ref": "#/$defs/nonNegativeInteger",
            "default": 1
        },
        "maxProperties": { "$ref": "#/$defs/nonNegativeInteger" },
        "minProperties": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "required": { "$ref": "#/$defs/stringArray" },
        "dependentRequired": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/stringArray"
            }
        },
        "const": true,
        "enum": {
            "type": "array",
            "items": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/$defs/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/$defs/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        }
    },
    "$defs": {
        "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
            "$ref": "#/$defs/nonNegativeInteger",
            "default": 0
        },
        "simpleTypes": {
            "enum": [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
        }
    }
}`,ay=`{
    "$id": "https://json-schema.org/draft/2019-09/meta/meta-data",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2019-09/vocab/meta-data": true
    },
    "$recursiveAnchor": true,

    "title": "Meta-data vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": true,
        "deprecated": {
            "type": "boolean",
            "default": false
        },
        "readOnly": {
            "type": "boolean",
            "default": false
        },
        "writeOnly": {
            "type": "boolean",
            "default": false
        },
        "examples": {
            "type": "array",
            "items": true
        }
    }
}`,iy=`{
    "$id": "https://json-schema.org/draft/2019-09/meta/format",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2019-09/vocab/format": true
    },
    "$recursiveAnchor": true,

    "title": "Format vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "format": { "type": "string" }
    }
}`,sy=`{
    "$id": "https://json-schema.org/draft/2019-09/meta/content",
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$vocabulary": {
      "https://json-schema.org/draft/2019-09/vocab/content": true
    },
    "$recursiveAnchor": true,

    "title": "Content vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "contentMediaType": { "type": "string" },
        "contentEncoding": { "type": "string" },
        "contentSchema": { "$recursiveRef": "#" }
    }
}`;const{Core:cr,Schema:ve}=b,_=vt,oy=ey,cy=ty,ly=ry,uy=ny,fy=ay,py=iy,my=sy,yt="https://json-schema.org/draft/2019-09/schema";ve.setConfig(yt,"baseToken","$id");ve.setConfig(yt,"embeddedToken","$id");ve.setConfig(yt,"anchorToken","$anchor");ve.setConfig(yt,"recursiveAnchorToken","$recursiveAnchor");ve.setConfig(yt,"vocabularyToken","$vocabulary");ve.setConfig(yt,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);ve.add(JSON.parse(oy));ve.add(JSON.parse(cy));cr.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:_.validate,$defs:_.definitions,$recursiveRef:_.dynamicRef,$ref:_.ref});ve.add(JSON.parse(ly));cr.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:_.additionalItems6,additionalProperties:_.additionalProperties6,allOf:_.allOf,anyOf:_.anyOf,contains:_.containsMinContainsMaxContains,dependentSchemas:_.dependentSchemas,if:_.if,then:_.then,else:_.else,items:_.items,not:_.not,oneOf:_.oneOf,patternProperties:_.patternProperties,properties:_.properties,propertyNames:_.propertyNames,unevaluatedItems:_.unevaluatedItems,unevaluatedProperties:_.unevaluatedProperties});ve.add(JSON.parse(uy));cr.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:_.const,dependentRequired:_.dependentRequired,enum:_.enum,exclusiveMaximum:_.exclusiveMaximum,exclusiveMinimum:_.exclusiveMinimum,maxItems:_.maxItems,maxLength:_.maxLength6,maxProperties:_.maxProperties,maximum:_.maximum,minItems:_.minItems,minLength:_.minLength6,minProperties:_.minProperties,minimum:_.minimum,multipleOf:_.multipleOf,pattern:_.pattern,required:_.required,type:_.type,uniqueItems:_.uniqueItems});ve.add(JSON.parse(fy));cr.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:_.metaData,deprecated:_.metaData,description:_.metaData,examples:_.metaData,readOnly:_.metaData,title:_.metaData,writeOnly:_.metaData});ve.add(JSON.parse(py));ve.add(JSON.parse(my));cr.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:_.metaData,contentMediaType:_.metaData,contentSchema:_.metaData});var dy=`{
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$id": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": true,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
        "https://json-schema.org/draft/2020-12/vocab/content": true
    },
    "$dynamicAnchor": "meta",

    "title": "Core and Validation specifications meta-schema",
    "allOf": [
        {"$ref": "meta/core"},
        {"$ref": "meta/applicator"},
        {"$ref": "meta/unevaluated"},
        {"$ref": "meta/validation"},
        {"$ref": "meta/meta-data"},
        {"$ref": "meta/format-annotation"},
        {"$ref": "meta/content"}
    ],
    "type": ["object", "boolean"],
    "properties": {
        "definitions": {
            "$comment": "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "default": {}
        },
        "dependencies": {
            "$comment": "\\"dependencies\\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \\"dependentSchemas\\" and \\"dependentRequired\\"",
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$dynamicRef": "#meta" },
                    { "$ref": "meta/validation#/$defs/stringArray" }
                ]
            }
        }
    }
}`,hy=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/core",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true
    },
    "$dynamicAnchor": "meta",

    "title": "Core vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "$id": {
            "type": "string",
            "format": "uri-reference",
            "$comment": "Non-empty fragments not allowed.",
            "pattern": "^[^#]*#?$"
        },
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "$anchor": {
            "type": "string",
            "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        "$ref": {
            "type": "string",
            "format": "uri-reference"
        },
        "$dynamicRef": {
            "type": "string",
            "format": "uri-reference"
        },
        "$dynamicAnchor": {
            "type": "string",
            "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        "$vocabulary": {
            "type": "object",
            "propertyNames": {
                "type": "string",
                "format": "uri"
            },
            "additionalProperties": {
                "type": "boolean"
            }
        },
        "$comment": {
            "type": "string"
        },
        "$defs": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "default": {}
        }
    }
}`,vy=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/applicator",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/applicator": true
    },
    "$dynamicAnchor": "meta",

    "title": "Applicator vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "prefixItems": { "$ref": "#/$defs/schemaArray" },
        "items": { "$dynamicRef": "#meta" },
        "contains": { "$dynamicRef": "#meta" },
        "additionalProperties": { "$dynamicRef": "#meta" },
        "properties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependentSchemas": {
            "type": "object",
            "additionalProperties": {
                "$dynamicRef": "#meta"
            }
        },
        "propertyNames": { "$dynamicRef": "#meta" },
        "if": { "$dynamicRef": "#meta" },
        "then": { "$dynamicRef": "#meta" },
        "else": { "$dynamicRef": "#meta" },
        "allOf": { "$ref": "#/$defs/schemaArray" },
        "anyOf": { "$ref": "#/$defs/schemaArray" },
        "oneOf": { "$ref": "#/$defs/schemaArray" },
        "not": { "$dynamicRef": "#meta" }
    },
    "$defs": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$dynamicRef": "#meta" }
        }
    }
}`,yy=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/validation",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/validation": true
    },
    "$dynamicAnchor": "meta",

    "title": "Validation vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "number"
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "number"
        },
        "maxLength": { "$ref": "#/$defs/nonNegativeInteger" },
        "minLength": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "maxItems": { "$ref": "#/$defs/nonNegativeInteger" },
        "minItems": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "maxContains": { "$ref": "#/$defs/nonNegativeInteger" },
        "minContains": {
            "$ref": "#/$defs/nonNegativeInteger",
            "default": 1
        },
        "maxProperties": { "$ref": "#/$defs/nonNegativeInteger" },
        "minProperties": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "required": { "$ref": "#/$defs/stringArray" },
        "dependentRequired": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/stringArray"
            }
        },
        "const": true,
        "enum": {
            "type": "array",
            "items": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/$defs/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/$defs/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        }
    },
    "$defs": {
        "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
            "$ref": "#/$defs/nonNegativeInteger",
            "default": 0
        },
        "simpleTypes": {
            "enum": [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
        }
    }
}`,gy=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/meta-data",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/meta-data": true
    },
    "$dynamicAnchor": "meta",

    "title": "Meta-data vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": true,
        "deprecated": {
            "type": "boolean",
            "default": false
        },
        "readOnly": {
            "type": "boolean",
            "default": false
        },
        "writeOnly": {
            "type": "boolean",
            "default": false
        },
        "examples": {
            "type": "array",
            "items": true
        }
    }
}`,$y=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/format-annotation",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
    },
    "$dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for annotation results",
    "type": ["object", "boolean"],
    "properties": {
        "format": { "type": "string" }
    }
}`,by=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/format-assertion",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/format-assertion": true
    },
    "$dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for assertion results",
    "type": ["object", "boolean"],
    "properties": {
        "format": { "type": "string" }
    }
}`,Sy=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/content",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/content": true
    },
    "$dynamicAnchor": "meta",

    "title": "Content vocabulary meta-schema",

    "type": ["object", "boolean"],
    "properties": {
        "contentMediaType": { "type": "string" },
        "contentEncoding": { "type": "string" },
        "contentSchema": { "$dynamicRef": "#meta" }
    }
}`,Oy=`{
    "$id": "https://json-schema.org/draft/2020-12/meta/unevaluated",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
    },
    "$dynamicAnchor": "meta",

    "title": "Unevaluated applicator vocabulary meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "unevaluatedItems": { "$dynamicRef": "#meta" },
        "unevaluatedProperties": { "$dynamicRef": "#meta" }
    }
}`;const{Core:Ye,Schema:le}=b,C=vt,wy=dy,Iy=hy,Ey=vy,xy=yy,Py=gy,ky=$y,Ay=by,jy=Sy,Ny=Oy,gt="https://json-schema.org/draft/2020-12/schema";le.setConfig(gt,"baseToken","$id");le.setConfig(gt,"embeddedToken","$id");le.setConfig(gt,"anchorToken","$anchor");le.setConfig(gt,"dynamicAnchorToken","$dynamicAnchor");le.setConfig(gt,"vocabularyToken","$vocabulary");le.setConfig(gt,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);le.add(JSON.parse(wy));le.add(JSON.parse(Iy));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:C.validate,$defs:C.definitions,$dynamicRef:C.dynamicRef,$ref:C.ref});le.add(JSON.parse(Ey));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:C.additionalProperties6,allOf:C.allOf,anyOf:C.anyOf,contains:C.containsMinContainsMaxContains,dependentSchemas:C.dependentSchemas,if:C.if,then:C.then,else:C.else,items:C.items202012,not:C.not,oneOf:C.oneOf,patternProperties:C.patternProperties,prefixItems:C.tupleItems,properties:C.properties,propertyNames:C.propertyNames});le.add(JSON.parse(xy));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:C.const,dependentRequired:C.dependentRequired,enum:C.enum,exclusiveMaximum:C.exclusiveMaximum,exclusiveMinimum:C.exclusiveMinimum,maxItems:C.maxItems,maxLength:C.maxLength6,maxProperties:C.maxProperties,maximum:C.maximum,minItems:C.minItems,minLength:C.minLength6,minProperties:C.minProperties,minimum:C.minimum,multipleOf:C.multipleOf,pattern:C.pattern,required:C.required,type:C.type,uniqueItems:C.uniqueItems});le.add(JSON.parse(Py));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:C.metaData,deprecated:C.metaData,description:C.metaData,examples:C.metaData,readOnly:C.metaData,title:C.metaData,writeOnly:C.metaData});le.add(JSON.parse(ky));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:C.metaData});le.add(JSON.parse(Ay));le.add(JSON.parse(jy));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:C.metaData,contentMediaType:C.metaData,contentSchema:C.metaData});le.add(JSON.parse(Ny));Ye.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:C.unevaluatedItems,unevaluatedProperties:C.unevaluatedProperties});const{Core:Pe,Schema:Cy,InvalidSchemaError:_y}=b,Ry=vt;var de={add:Pe.add,get:Cy.get,validate:Pe.validate,compile:Pe.compile,interpret:Pe.interpret,setMetaOutputFormat:Pe.setMetaOutputFormat,setShouldMetaValidate:Pe.setShouldMetaValidate,FLAG:Pe.FLAG,BASIC:Pe.BASIC,DETAILED:Pe.DETAILED,VERBOSE:Pe.VERBOSE,Keywords:Ry,InvalidSchemaError:_y};const My=de.add,Ty=de.get,Ly=de.validate,qy=de.compile,Dy=de.interpret,By=de.setMetaOutputFormat,Fy=de.setShouldMetaValidate,Uy=de.FLAG,Vy=de.BASIC,Jy=de.DETAILED,Wy=de.VERBOSE,Ky=de.Keywords,zy=de.InvalidSchemaError;var Qy=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",add:My,get:Ty,validate:Ly,compile:qy,interpret:Dy,setMetaOutputFormat:By,setShouldMetaValidate:Fy,FLAG:Uy,BASIC:Vy,DETAILED:Jy,VERBOSE:Wy,Keywords:Ky,InvalidSchemaError:zy,default:de}),Yo={exports:{}};(function(e){(function(t,r){e.exports?e.exports=r():t.moo=r()})(ii,function(){var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function a(h){return h&&r.call(h)==="[object RegExp]"}function i(h){return h&&typeof h=="object"&&!a(h)&&!Array.isArray(h)}function s(h){return h.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(h){var S=new RegExp("|"+h);return S.exec("").length-1}function c(h){return"("+h+")"}function l(h){if(!h.length)return"(?!)";var S=h.map(function(I){return"(?:"+I+")"}).join("|");return"(?:"+S+")"}function u(h){if(typeof h=="string")return"(?:"+s(h)+")";if(a(h)){if(h.ignoreCase)throw new Error("RegExp /i flag not allowed");if(h.global)throw new Error("RegExp /g flag is implied");if(h.sticky)throw new Error("RegExp /y flag is implied");if(h.multiline)throw new Error("RegExp /m flag is implied");return h.source}else throw new Error("Not a pattern: "+h)}function f(h){for(var S=Object.getOwnPropertyNames(h),I=[],k=0;k<S.length;k++){var L=S[k],N=h[L],B=[].concat(N);if(L==="include"){for(var G=0;G<B.length;G++)I.push({include:B[G]});continue}var U=[];B.forEach(function(x){i(x)?(U.length&&I.push(d(L,U)),I.push(d(L,x)),U=[]):U.push(x)}),U.length&&I.push(d(L,U))}return I}function p(h){for(var S=[],I=0;I<h.length;I++){var k=h[I];if(k.include){for(var L=[].concat(k.include),N=0;N<L.length;N++)S.push({include:L[N]});continue}if(!k.type)throw new Error("Rule has no type: "+JSON.stringify(k));S.push(d(k.type,k))}return S}function d(h,S){if(i(S)||(S={match:S}),S.include)throw new Error("Matching rules cannot also include states");var I={defaultType:h,lineBreaks:!!S.error||!!S.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var k in S)t.call(S,k)&&(I[k]=S[k]);if(typeof I.type=="string"&&h!==I.type)throw new Error("Type transform cannot be a string (type '"+I.type+"' for token '"+h+"')");var L=I.match;return I.match=Array.isArray(L)?L:L?[L]:[],I.match.sort(function(N,B){return a(N)&&a(B)?0:a(B)?-1:a(N)?1:B.length-N.length}),I}function v(h){return Array.isArray(h)?p(h):f(h)}var m=d("error",{lineBreaks:!0,shouldThrow:!0});function $(h,S){for(var I=null,k=Object.create(null),L=!0,N=null,B=[],G=[],U=0;U<h.length;U++)h[U].fallback&&(L=!1);for(var U=0;U<h.length;U++){var x=h[U];if(x.include)throw new Error("Inheritance is not allowed in stateless lexers");if(x.error||x.fallback){if(I)throw!x.fallback==!I.fallback?new Error("Multiple "+(x.fallback?"fallback":"error")+" rules not allowed (for token '"+x.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+x.defaultType+"')");I=x}var te=x.match.slice();if(L)for(;te.length&&typeof te[0]=="string"&&te[0].length===1;){var be=te.shift();k[be.charCodeAt(0)]=x}if(x.pop||x.push||x.next){if(!S)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+x.defaultType+"')");if(x.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+x.defaultType+"')")}if(te.length!==0){L=!1,B.push(x);for(var H=0;H<te.length;H++){var Se=te[H];if(!!a(Se)){if(N===null)N=Se.unicode;else if(N!==Se.unicode&&x.fallback===!1)throw new Error("If one rule is /u then all must be")}}var Xe=l(te.map(u)),Oe=new RegExp(Xe);if(Oe.test(""))throw new Error("RegExp matches empty string: "+Oe);var xt=o(Xe);if(xt>0)throw new Error("RegExp has capture groups: "+Oe+`
Use (?: \u2026 ) instead`);if(!x.lineBreaks&&Oe.test(`
`))throw new Error("Rule should declare lineBreaks: "+Oe);G.push(c(Xe))}}var Ze=I&&I.fallback,Pt=n&&!Ze?"ym":"gm",ur=n||Ze?"":"|";N===!0&&(Pt+="u");var dl=new RegExp(l(G)+ur,Pt);return{regexp:dl,groups:B,fast:k,error:I||m}}function y(h){var S=$(v(h));return new j({start:S},"start")}function O(h,S,I){var k=h&&(h.push||h.next);if(k&&!I[k])throw new Error("Missing state '"+k+"' (in token '"+h.defaultType+"' of state '"+S+"')");if(h&&h.pop&&+h.pop!=1)throw new Error("pop must be 1 (in token '"+h.defaultType+"' of state '"+S+"')")}function E(h,S){var I=h.$all?v(h.$all):[];delete h.$all;var k=Object.getOwnPropertyNames(h);S||(S=k[0]);for(var L=Object.create(null),N=0;N<k.length;N++){var B=k[N];L[B]=v(h[B]).concat(I)}for(var N=0;N<k.length;N++)for(var B=k[N],G=L[B],U=Object.create(null),x=0;x<G.length;x++){var te=G[x];if(!!te.include){var be=[x,1];if(te.include!==B&&!U[te.include]){U[te.include]=!0;var H=L[te.include];if(!H)throw new Error("Cannot include nonexistent state '"+te.include+"' (in state '"+B+"')");for(var Se=0;Se<H.length;Se++){var Xe=H[Se];G.indexOf(Xe)===-1&&be.push(Xe)}}G.splice.apply(G,be),x--}}for(var Oe=Object.create(null),N=0;N<k.length;N++){var B=k[N];Oe[B]=$(L[B],!0)}for(var N=0;N<k.length;N++){for(var xt=k[N],Ze=Oe[xt],Pt=Ze.groups,x=0;x<Pt.length;x++)O(Pt[x],xt,Oe);for(var ur=Object.getOwnPropertyNames(Ze.fast),x=0;x<ur.length;x++)O(Ze.fast[ur[x]],xt,Oe)}return new j(Oe,S)}function T(h){for(var S=Object.create(null),I=Object.create(null),k=Object.getOwnPropertyNames(h),L=0;L<k.length;L++){var N=k[L],B=h[N],G=Array.isArray(B)?B:[B];G.forEach(function(H){if((I[H.length]=I[H.length]||[]).push(H),typeof H!="string")throw new Error("keyword must be string (in keyword '"+N+"')");S[H]=N})}function U(H){return JSON.stringify(H)}var x="";x+=`switch (value.length) {
`;for(var te in I){var be=I[te];x+="case "+te+`:
`,x+=`switch (value) {
`,be.forEach(function(H){var Se=S[H];x+="case "+U(H)+": return "+U(Se)+`
`}),x+=`}
`}return x+=`}
`,Function("value",x)}var j=function(h,S){this.startState=S,this.states=h,this.buffer="",this.stack=[],this.reset()};j.prototype.reset=function(h,S){return this.buffer=h||"",this.index=0,this.line=S?S.line:1,this.col=S?S.col:1,this.queuedToken=S?S.queuedToken:null,this.queuedThrow=S?S.queuedThrow:null,this.setState(S?S.state:this.startState),this.stack=S&&S.stack?S.stack.slice():[],this},j.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},j.prototype.setState=function(h){if(!(!h||this.state===h)){this.state=h;var S=this.states[h];this.groups=S.groups,this.error=S.error,this.re=S.regexp,this.fast=S.fast}},j.prototype.popState=function(){this.setState(this.stack.pop())},j.prototype.pushState=function(h){this.stack.push(this.state),this.setState(h)};var P=n?function(h,S){return h.exec(S)}:function(h,S){var I=h.exec(S);return I[0].length===0?null:I};j.prototype._getGroup=function(h){for(var S=this.groups.length,I=0;I<S;I++)if(h[I+1]!==void 0)return this.groups[I];throw new Error("Cannot find token type for matched text")};function K(){return this.value}if(j.prototype.next=function(){var h=this.index;if(this.queuedGroup){var S=this._token(this.queuedGroup,this.queuedText,h);return this.queuedGroup=null,this.queuedText="",S}var I=this.buffer;if(h!==I.length){var k=this.fast[I.charCodeAt(h)];if(k)return this._token(k,I.charAt(h),h);var L=this.re;L.lastIndex=h;var N=P(L,I),B=this.error;if(N==null)return this._token(B,I.slice(h,I.length),h);var k=this._getGroup(N),G=N[0];return B.fallback&&N.index!==h?(this.queuedGroup=k,this.queuedText=G,this._token(B,I.slice(h,N.index),h)):this._token(k,G,h)}},j.prototype._token=function(h,S,I){var k=0;if(h.lineBreaks){var L=/\n/g,N=1;if(S===`
`)k=1;else for(;L.exec(S);)k++,N=L.lastIndex}var B={type:typeof h.type=="function"&&h.type(S)||h.defaultType,value:typeof h.value=="function"?h.value(S):S,text:S,toString:K,offset:I,lineBreaks:k,line:this.line,col:this.col},G=S.length;if(this.index+=G,this.line+=k,k!==0?this.col=G-N+1:this.col+=G,h.shouldThrow)throw new Error(this.formatError(B,"invalid syntax"));return h.pop?this.popState():h.push?this.pushState(h.push):h.next&&this.setState(h.next),B},typeof Symbol!="undefined"&&Symbol.iterator){var Z=function(h){this.lexer=h};Z.prototype.next=function(){var h=this.lexer.next();return{value:h,done:!h}},Z.prototype[Symbol.iterator]=function(){return this},j.prototype[Symbol.iterator]=function(){return new Z(this)}}return j.prototype.formatError=function(h,S){if(h==null)var I=this.buffer.slice(this.index),h={text:I,offset:this.index,lineBreaks:I.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var k=Math.max(0,h.offset-h.col+1),L=h.lineBreaks?h.text.indexOf(`
`):h.text.length,N=this.buffer.substring(k,h.offset+L);return S+=" at line "+h.line+" col "+h.col+`:

`,S+="  "+N+`
`,S+="  "+Array(h.col).join(" ")+"^",S},j.prototype.clone=function(){return new j(this.states,this.state)},j.prototype.has=function(h){return!0},{compile:y,states:E,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:T}})})(Yo);var i0=Yo.exports,Yy=si(Qy),Gy=`{
  "id": "https://spec.openapis.org/oas/3.0/schema/2021-09-28",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "Validation schema for OpenAPI Specification 3.0.X.",
  "type": "object",
  "required": [
    "openapi",
    "info",
    "paths"
  ],
  "properties": {
    "openapi": {
      "type": "string",
      "pattern": "^3\\\\.0\\\\.\\\\d(-.+)?$"
    },
    "info": {
      "$ref": "#/definitions/Info"
    },
    "externalDocs": {
      "$ref": "#/definitions/ExternalDocumentation"
    },
    "servers": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Server"
      }
    },
    "security": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/SecurityRequirement"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/Tag"
      },
      "uniqueItems": true
    },
    "paths": {
      "$ref": "#/definitions/Paths"
    },
    "components": {
      "$ref": "#/definitions/Components"
    }
  },
  "patternProperties": {
    "^x-": {
    }
  },
  "additionalProperties": false,
  "definitions": {
    "Reference": {
      "type": "object",
      "required": [
        "$ref"
      ],
      "patternProperties": {
        "^\\\\$ref$": {
          "type": "string",
          "format": "uri-reference"
        }
      }
    },
    "Info": {
      "type": "object",
      "required": [
        "title",
        "version"
      ],
      "properties": {
        "title": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "termsOfService": {
          "type": "string",
          "format": "uri-reference"
        },
        "contact": {
          "$ref": "#/definitions/Contact"
        },
        "license": {
          "$ref": "#/definitions/License"
        },
        "version": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Contact": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "License": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Server": {
      "type": "object",
      "required": [
        "url"
      ],
      "properties": {
        "url": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "variables": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/ServerVariable"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "ServerVariable": {
      "type": "object",
      "required": [
        "default"
      ],
      "properties": {
        "enum": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "default": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Components": {
      "type": "object",
      "properties": {
        "schemas": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Schema"
                },
                {
                  "$ref": "#/definitions/Reference"
                }
              ]
            }
          }
        },
        "responses": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Response"
                }
              ]
            }
          }
        },
        "parameters": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Parameter"
                }
              ]
            }
          }
        },
        "examples": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Example"
                }
              ]
            }
          }
        },
        "requestBodies": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/RequestBody"
                }
              ]
            }
          }
        },
        "headers": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Header"
                }
              ]
            }
          }
        },
        "securitySchemes": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/SecurityScheme"
                }
              ]
            }
          }
        },
        "links": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Link"
                }
              ]
            }
          }
        },
        "callbacks": {
          "type": "object",
          "patternProperties": {
            "^[a-zA-Z0-9\\\\.\\\\-_]+$": {
              "oneOf": [
                {
                  "$ref": "#/definitions/Reference"
                },
                {
                  "$ref": "#/definitions/Callback"
                }
              ]
            }
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Schema": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "multipleOf": {
          "type": "number",
          "minimum": 0,
          "exclusiveMinimum": true
        },
        "maximum": {
          "type": "number"
        },
        "exclusiveMaximum": {
          "type": "boolean",
          "default": false
        },
        "minimum": {
          "type": "number"
        },
        "exclusiveMinimum": {
          "type": "boolean",
          "default": false
        },
        "maxLength": {
          "type": "integer",
          "minimum": 0
        },
        "minLength": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "pattern": {
          "type": "string",
          "format": "regex"
        },
        "maxItems": {
          "type": "integer",
          "minimum": 0
        },
        "minItems": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "uniqueItems": {
          "type": "boolean",
          "default": false
        },
        "maxProperties": {
          "type": "integer",
          "minimum": 0
        },
        "minProperties": {
          "type": "integer",
          "minimum": 0,
          "default": 0
        },
        "required": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1,
          "uniqueItems": true
        },
        "enum": {
          "type": "array",
          "items": {
          },
          "minItems": 1,
          "uniqueItems": false
        },
        "type": {
          "type": "string",
          "enum": [
            "array",
            "boolean",
            "integer",
            "number",
            "object",
            "string"
          ]
        },
        "not": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "allOf": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "oneOf": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "anyOf": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "items": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "properties": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Schema"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "additionalProperties": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            },
            {
              "type": "boolean"
            }
          ],
          "default": true
        },
        "description": {
          "type": "string"
        },
        "format": {
          "type": "string"
        },
        "default": {
        },
        "nullable": {
          "type": "boolean",
          "default": false
        },
        "discriminator": {
          "$ref": "#/definitions/Discriminator"
        },
        "readOnly": {
          "type": "boolean",
          "default": false
        },
        "writeOnly": {
          "type": "boolean",
          "default": false
        },
        "example": {
        },
        "externalDocs": {
          "$ref": "#/definitions/ExternalDocumentation"
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "xml": {
          "$ref": "#/definitions/XML"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Discriminator": {
      "type": "object",
      "required": [
        "propertyName"
      ],
      "properties": {
        "propertyName": {
          "type": "string"
        },
        "mapping": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      }
    },
    "XML": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "namespace": {
          "type": "string",
          "format": "uri"
        },
        "prefix": {
          "type": "string"
        },
        "attribute": {
          "type": "boolean",
          "default": false
        },
        "wrapped": {
          "type": "boolean",
          "default": false
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Response": {
      "type": "object",
      "required": [
        "description"
      ],
      "properties": {
        "description": {
          "type": "string"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Header"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          }
        },
        "links": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Link"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "MediaType": {
      "type": "object",
      "properties": {
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "example": {
        },
        "examples": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Example"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "encoding": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/Encoding"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false,
      "allOf": [
        {
          "$ref": "#/definitions/ExampleXORExamples"
        }
      ]
    },
    "Example": {
      "type": "object",
      "properties": {
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "value": {
        },
        "externalValue": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Header": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "required": {
          "type": "boolean",
          "default": false
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false
        },
        "style": {
          "type": "string",
          "enum": [
            "simple"
          ],
          "default": "simple"
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "type": "boolean",
          "default": false
        },
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          },
          "minProperties": 1,
          "maxProperties": 1
        },
        "example": {
        },
        "examples": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Example"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false,
      "allOf": [
        {
          "$ref": "#/definitions/ExampleXORExamples"
        },
        {
          "$ref": "#/definitions/SchemaXORContent"
        }
      ]
    },
    "Paths": {
      "type": "object",
      "patternProperties": {
        "^\\\\/": {
          "$ref": "#/definitions/PathItem"
        },
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "PathItem": {
      "type": "object",
      "properties": {
        "$ref": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Server"
          }
        },
        "parameters": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Parameter"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          },
          "uniqueItems": true
        }
      },
      "patternProperties": {
        "^(get|put|post|delete|options|head|patch|trace)$": {
          "$ref": "#/definitions/Operation"
        },
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Operation": {
      "type": "object",
      "required": [
        "responses"
      ],
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/definitions/ExternalDocumentation"
        },
        "operationId": {
          "type": "string"
        },
        "parameters": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "$ref": "#/definitions/Parameter"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          },
          "uniqueItems": true
        },
        "requestBody": {
          "oneOf": [
            {
              "$ref": "#/definitions/RequestBody"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "responses": {
          "$ref": "#/definitions/Responses"
        },
        "callbacks": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Callback"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "security": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/SecurityRequirement"
          }
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/Server"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Responses": {
      "type": "object",
      "properties": {
        "default": {
          "oneOf": [
            {
              "$ref": "#/definitions/Response"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        }
      },
      "patternProperties": {
        "^[1-5](?:\\\\d{2}|XX)$": {
          "oneOf": [
            {
              "$ref": "#/definitions/Response"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "^x-": {
        }
      },
      "minProperties": 1,
      "additionalProperties": false
    },
    "SecurityRequirement": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "Tag": {
      "type": "object",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/definitions/ExternalDocumentation"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "ExternalDocumentation": {
      "type": "object",
      "required": [
        "url"
      ],
      "properties": {
        "description": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri-reference"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "ExampleXORExamples": {
      "description": "Example and examples are mutually exclusive",
      "not": {
        "required": [
          "example",
          "examples"
        ]
      }
    },
    "SchemaXORContent": {
      "description": "Schema and content are mutually exclusive, at least one is required",
      "not": {
        "required": [
          "schema",
          "content"
        ]
      },
      "oneOf": [
        {
          "required": [
            "schema"
          ]
        },
        {
          "required": [
            "content"
          ],
          "description": "Some properties are not allowed if content is present",
          "allOf": [
            {
              "not": {
                "required": [
                  "style"
                ]
              }
            },
            {
              "not": {
                "required": [
                  "explode"
                ]
              }
            },
            {
              "not": {
                "required": [
                  "allowReserved"
                ]
              }
            },
            {
              "not": {
                "required": [
                  "example"
                ]
              }
            },
            {
              "not": {
                "required": [
                  "examples"
                ]
              }
            }
          ]
        }
      ]
    },
    "Parameter": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "in": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "required": {
          "type": "boolean",
          "default": false
        },
        "deprecated": {
          "type": "boolean",
          "default": false
        },
        "allowEmptyValue": {
          "type": "boolean",
          "default": false
        },
        "style": {
          "type": "string"
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "type": "boolean",
          "default": false
        },
        "schema": {
          "oneOf": [
            {
              "$ref": "#/definitions/Schema"
            },
            {
              "$ref": "#/definitions/Reference"
            }
          ]
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          },
          "minProperties": 1,
          "maxProperties": 1
        },
        "example": {
        },
        "examples": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Example"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false,
      "required": [
        "name",
        "in"
      ],
      "allOf": [
        {
          "$ref": "#/definitions/ExampleXORExamples"
        },
        {
          "$ref": "#/definitions/SchemaXORContent"
        },
        {
          "$ref": "#/definitions/ParameterLocation"
        }
      ]
    },
    "ParameterLocation": {
      "description": "Parameter location",
      "oneOf": [
        {
          "description": "Parameter in path",
          "required": [
            "required"
          ],
          "properties": {
            "in": {
              "enum": [
                "path"
              ]
            },
            "style": {
              "enum": [
                "matrix",
                "label",
                "simple"
              ],
              "default": "simple"
            },
            "required": {
              "enum": [
                true
              ]
            }
          }
        },
        {
          "description": "Parameter in query",
          "properties": {
            "in": {
              "enum": [
                "query"
              ]
            },
            "style": {
              "enum": [
                "form",
                "spaceDelimited",
                "pipeDelimited",
                "deepObject"
              ],
              "default": "form"
            }
          }
        },
        {
          "description": "Parameter in header",
          "properties": {
            "in": {
              "enum": [
                "header"
              ]
            },
            "style": {
              "enum": [
                "simple"
              ],
              "default": "simple"
            }
          }
        },
        {
          "description": "Parameter in cookie",
          "properties": {
            "in": {
              "enum": [
                "cookie"
              ]
            },
            "style": {
              "enum": [
                "form"
              ],
              "default": "form"
            }
          }
        }
      ]
    },
    "RequestBody": {
      "type": "object",
      "required": [
        "content"
      ],
      "properties": {
        "description": {
          "type": "string"
        },
        "content": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/definitions/MediaType"
          }
        },
        "required": {
          "type": "boolean",
          "default": false
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "SecurityScheme": {
      "oneOf": [
        {
          "$ref": "#/definitions/APIKeySecurityScheme"
        },
        {
          "$ref": "#/definitions/HTTPSecurityScheme"
        },
        {
          "$ref": "#/definitions/OAuth2SecurityScheme"
        },
        {
          "$ref": "#/definitions/OpenIdConnectSecurityScheme"
        }
      ]
    },
    "APIKeySecurityScheme": {
      "type": "object",
      "required": [
        "type",
        "name",
        "in"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "apiKey"
          ]
        },
        "name": {
          "type": "string"
        },
        "in": {
          "type": "string",
          "enum": [
            "header",
            "query",
            "cookie"
          ]
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "HTTPSecurityScheme": {
      "type": "object",
      "required": [
        "scheme",
        "type"
      ],
      "properties": {
        "scheme": {
          "type": "string"
        },
        "bearerFormat": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "http"
          ]
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false,
      "oneOf": [
        {
          "description": "Bearer",
          "properties": {
            "scheme": {
              "type": "string",
              "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
            }
          }
        },
        {
          "description": "Non Bearer",
          "not": {
            "required": [
              "bearerFormat"
            ]
          },
          "properties": {
            "scheme": {
              "not": {
                "type": "string",
                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
              }
            }
          }
        }
      ]
    },
    "OAuth2SecurityScheme": {
      "type": "object",
      "required": [
        "type",
        "flows"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "oauth2"
          ]
        },
        "flows": {
          "$ref": "#/definitions/OAuthFlows"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "OpenIdConnectSecurityScheme": {
      "type": "object",
      "required": [
        "type",
        "openIdConnectUrl"
      ],
      "properties": {
        "type": {
          "type": "string",
          "enum": [
            "openIdConnect"
          ]
        },
        "openIdConnectUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "description": {
          "type": "string"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "OAuthFlows": {
      "type": "object",
      "properties": {
        "implicit": {
          "$ref": "#/definitions/ImplicitOAuthFlow"
        },
        "password": {
          "$ref": "#/definitions/PasswordOAuthFlow"
        },
        "clientCredentials": {
          "$ref": "#/definitions/ClientCredentialsFlow"
        },
        "authorizationCode": {
          "$ref": "#/definitions/AuthorizationCodeOAuthFlow"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "ImplicitOAuthFlow": {
      "type": "object",
      "required": [
        "authorizationUrl",
        "scopes"
      ],
      "properties": {
        "authorizationUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "PasswordOAuthFlow": {
      "type": "object",
      "required": [
        "tokenUrl",
        "scopes"
      ],
      "properties": {
        "tokenUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "ClientCredentialsFlow": {
      "type": "object",
      "required": [
        "tokenUrl",
        "scopes"
      ],
      "properties": {
        "tokenUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "AuthorizationCodeOAuthFlow": {
      "type": "object",
      "required": [
        "authorizationUrl",
        "tokenUrl",
        "scopes"
      ],
      "properties": {
        "authorizationUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "tokenUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "refreshUrl": {
          "type": "string",
          "format": "uri-reference"
        },
        "scopes": {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false
    },
    "Link": {
      "type": "object",
      "properties": {
        "operationId": {
          "type": "string"
        },
        "operationRef": {
          "type": "string",
          "format": "uri-reference"
        },
        "parameters": {
          "type": "object",
          "additionalProperties": {
          }
        },
        "requestBody": {
        },
        "description": {
          "type": "string"
        },
        "server": {
          "$ref": "#/definitions/Server"
        }
      },
      "patternProperties": {
        "^x-": {
        }
      },
      "additionalProperties": false,
      "not": {
        "description": "Operation Id and Operation Ref are mutually exclusive",
        "required": [
          "operationId",
          "operationRef"
        ]
      }
    },
    "Callback": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/definitions/PathItem"
      },
      "patternProperties": {
        "^x-": {
        }
      }
    },
    "Encoding": {
      "type": "object",
      "properties": {
        "contentType": {
          "type": "string"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "oneOf": [
              {
                "$ref": "#/definitions/Header"
              },
              {
                "$ref": "#/definitions/Reference"
              }
            ]
          }
        },
        "style": {
          "type": "string",
          "enum": [
            "form",
            "spaceDelimited",
            "pipeDelimited",
            "deepObject"
          ]
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "type": "boolean",
          "default": false
        }
      },
      "additionalProperties": false
    }
  }
}`;const{Schema:Go}=b,Ho=Gy;Go.add(JSON.parse(Ho),"https://spec.openapis.org/oas/3.0/schema");Go.add(JSON.parse(Ho),"https://spec.openapis.org/oas/3.0/schema/latest");var Hy=`{
    "$id": "https://spec.openapis.org/oas/3.1/dialect/base",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/2020-12/vocab/core": true,
        "https://json-schema.org/draft/2020-12/vocab/applicator": true,
        "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
        "https://json-schema.org/draft/2020-12/vocab/validation": true,
        "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
        "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
        "https://json-schema.org/draft/2020-12/vocab/content": true,
        "https://spec.openapis.org/oas/3.1/vocab/base": false
    },
    "$dynamicAnchor": "meta",

    "title": "OpenAPI 3.1 Schema Object Dialect",
    "allOf": [
        { "$ref": "https://json-schema.org/draft/2020-12/schema" },
        { "$ref": "https://spec.openapis.org/oas/3.1/meta/base" }
    ]
}`,Xy=`{
    "$id": "https://spec.openapis.org/oas/3.1/meta/base",
    "$schema": "https://json-schema.org/draft/2020-12/schema",
    "$vocabulary": {
        "https://spec.openapis.org/oas/3.1/vocab/base": true
    },
    "$dynamicAnchor": "meta",
    "title": "OAS Base vocabulary",

    "type": ["object", "boolean"],
    "properties": {
        "example": true,
        "discriminator": { "$ref": "#/$defs/discriminator" },
        "externalDocs": { "$ref": "#/$defs/external-docs" },
        "xml": { "$ref": "#/$defs/xml" }
    },
    "$defs": {
        "extensible": {
            "patternProperties": {
                "^x-": true
            }
        },
        "discriminator": {
            "$ref": "#/$defs/extensible",
            "type": "object",
            "properties": {
                "propertyName": {
                    "type": "string"
                },
                "mapping": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    }
                }
            },
            "required": ["propertyName"],
            "unevaluatedProperties": false
        },
        "external-docs": {
            "$ref": "#/$defs/extensible",
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "format": "uri-reference"
                },
                "description": {
                    "type": "string"
                }
            },
            "required": ["url"],
            "unevaluatedProperties": false
        },
        "xml": {
            "$ref": "#/$defs/extensible",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "namespace": {
                    "type": "string",
                    "format": "uri"
                },
                "prefix": {
                    "type": "string"
                },
                "attribute": {
                    "type": "boolean"
                },
                "wrapped": {
                    "type": "boolean"
                }
            },
            "unevaluatedProperties": false
        }
    }
}`,Xo=`{
  "$id": "https://spec.openapis.org/oas/3.1/schema/2021-09-28",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "openapi": {
      "type": "string",
      "pattern": "^3\\\\.1\\\\.\\\\d+(-.+)?$"
    },
    "info": {
      "$ref": "#/$defs/info"
    },
    "jsonSchemaDialect": {
      "type": "string",
      "format": "uri",
      "default": "https://spec.openapis.org/oas/3.1/dialect/base"
    },
    "servers": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/server"
      }
    },
    "paths": {
      "$ref": "#/$defs/paths"
    },
    "webhooks": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/$defs/path-item-or-reference"
      }
    },
    "components": {
      "$ref": "#/$defs/components"
    },
    "security": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/security-requirement"
      }
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "#/$defs/tag"
      }
    },
    "externalDocs": {
      "$ref": "#/$defs/external-documentation"
    }
  },
  "required": [
    "openapi",
    "info"
  ],
  "anyOf": [
    {
      "required": [
        "paths"
      ]
    },
    {
      "required": [
        "components"
      ]
    },
    {
      "required": [
        "webhooks"
      ]
    }
  ],
  "$ref": "#/$defs/specification-extensions",
  "unevaluatedProperties": false,
  "$defs": {
    "info": {
      "type": "object",
      "properties": {
        "title": {
          "type": "string"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "termsOfService": {
          "type": "string"
        },
        "contact": {
          "$ref": "#/$defs/contact"
        },
        "license": {
          "$ref": "#/$defs/license"
        },
        "version": {
          "type": "string"
        }
      },
      "required": [
        "title",
        "version"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "contact": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string"
        },
        "email": {
          "type": "string"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "license": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "identifier": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        }
      },
      "required": [
        "name"
      ],
      "oneOf": [
        {
          "required": [
            "identifier"
          ]
        },
        {
          "required": [
            "url"
          ]
        }
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "server": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string",
          "format": "uri-reference"
        },
        "description": {
          "type": "string"
        },
        "variables": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/server-variable"
          }
        }
      },
      "required": [
        "url"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "server-variable": {
      "type": "object",
      "properties": {
        "enum": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "minItems": 1
        },
        "default": {
          "type": "string"
        },
        "descriptions": {
          "type": "string"
        }
      },
      "required": [
        "default"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "components": {
      "type": "object",
      "properties": {
        "schemas": {
          "type": "object",
          "additionalProperties": {
            "$dynamicRef": "#meta"
          }
        },
        "responses": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/response-or-reference"
          }
        },
        "parameters": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/parameter-or-reference"
          }
        },
        "examples": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/example-or-reference"
          }
        },
        "requestBodies": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/request-body-or-reference"
          }
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/header-or-reference"
          }
        },
        "securitySchemes": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/security-scheme-or-reference"
          }
        },
        "links": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/link-or-reference"
          }
        },
        "callbacks": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/callbacks-or-reference"
          }
        },
        "pathItems": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/path-item-or-reference"
          }
        }
      },
      "patternProperties": {
        "^(schemas|responses|parameters|examples|requestBodies|headers|securitySchemes|links|callbacks|pathItems)$": {
          "$comment": "Enumerating all of the property names in the regex above is necessary for unevaluatedProperties to work as expected",
          "propertyNames": {
            "pattern": "^[a-zA-Z0-9._-]+$"
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "paths": {
      "type": "object",
      "patternProperties": {
        "^/": {
          "$ref": "#/$defs/path-item"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "path-item": {
      "type": "object",
      "properties": {
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/server"
          }
        },
        "parameters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/parameter-or-reference"
          }
        }
      },
      "patternProperties": {
        "^(get|put|post|delete|options|head|patch|trace)$": {
          "$ref": "#/$defs/operation"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "path-item-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/path-item"
      }
    },
    "operation": {
      "type": "object",
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/$defs/external-documentation"
        },
        "operationId": {
          "type": "string"
        },
        "parameters": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/parameter-or-reference"
          }
        },
        "requestBody": {
          "$ref": "#/$defs/request-body-or-reference"
        },
        "responses": {
          "$ref": "#/$defs/responses"
        },
        "callbacks": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/callbacks-or-reference"
          }
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        },
        "security": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/security-requirement"
          }
        },
        "servers": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/server"
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "external-documentation": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        }
      },
      "required": [
        "url"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "parameter": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "in": {
          "enum": [
            "query",
            "header",
            "path",
            "cookie"
          ]
        },
        "description": {
          "type": "string"
        },
        "required": {
          "default": false,
          "type": "boolean"
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        },
        "allowEmptyValue": {
          "default": false,
          "type": "boolean"
        },
        "schema": {
          "$dynamicRef": "#meta"
        },
        "content": {
          "$ref": "#/$defs/content"
        }
      },
      "required": [
        "in"
      ],
      "oneOf": [
        {
          "required": [
            "schema"
          ]
        },
        {
          "required": [
            "content"
          ]
        }
      ],
      "dependentSchemas": {
        "schema": {
          "properties": {
            "style": {
              "type": "string"
            },
            "explode": {
              "type": "boolean"
            },
            "allowReserved": {
              "default": false,
              "type": "boolean"
            }
          },
          "allOf": [
            {
              "$ref": "#/$defs/examples"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-path"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-header"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-query"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-cookie"
            },
            {
              "$ref": "#/$defs/parameter/dependentSchemas/schema/$defs/styles-for-form"
            }
          ],
          "$defs": {
            "styles-for-path": {
              "if": {
                "properties": {
                  "in": {
                    "const": "path"
                  }
                },
                "required": [
                  "in"
                ]
              },
              "then": {
                "properties": {
                  "name": {
                    "pattern": "[^/#?]+$"
                  },
                  "style": {
                    "default": "simple",
                    "enum": [
                      "matrix",
                      "label",
                      "simple"
                    ]
                  },
                  "required": {
                    "const": true
                  }
                },
                "required": [
                  "required"
                ]
              }
            },
            "styles-for-header": {
              "if": {
                "properties": {
                  "in": {
                    "const": "header"
                  }
                },
                "required": [
                  "in"
                ]
              },
              "then": {
                "properties": {
                  "style": {
                    "default": "simple",
                    "const": "simple"
                  }
                }
              }
            },
            "styles-for-query": {
              "if": {
                "properties": {
                  "in": {
                    "const": "query"
                  }
                },
                "required": [
                  "in"
                ]
              },
              "then": {
                "properties": {
                  "style": {
                    "default": "form",
                    "enum": [
                      "form",
                      "spaceDelimited",
                      "pipeDelimited",
                      "deepObject"
                    ]
                  }
                }
              }
            },
            "styles-for-cookie": {
              "if": {
                "properties": {
                  "in": {
                    "const": "cookie"
                  }
                },
                "required": [
                  "in"
                ]
              },
              "then": {
                "properties": {
                  "style": {
                    "default": "form",
                    "const": "form"
                  }
                }
              }
            },
            "styles-for-form": {
              "if": {
                "properties": {
                  "style": {
                    "const": "form"
                  }
                },
                "required": [
                  "style"
                ]
              },
              "then": {
                "properties": {
                  "explode": {
                    "default": true
                  }
                }
              },
              "else": {
                "properties": {
                  "explode": {
                    "default": false
                  }
                }
              }
            }
          }
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "parameter-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/parameter"
      }
    },
    "request-body": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "content": {
          "$ref": "#/$defs/content"
        },
        "required": {
          "default": false,
          "type": "boolean"
        }
      },
      "required": [
        "content"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "request-body-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/request-body"
      }
    },
    "content": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/$defs/media-type"
      },
      "propertyNames": {
        "format": "media-range"
      }
    },
    "media-type": {
      "type": "object",
      "properties": {
        "schema": {
          "$dynamicRef": "#meta"
        },
        "encoding": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/encoding"
          }
        }
      },
      "allOf": [
        {
          "$ref": "#/$defs/specification-extensions"
        },
        {
          "$ref": "#/$defs/examples"
        }
      ],
      "unevaluatedProperties": false
    },
    "encoding": {
      "type": "object",
      "properties": {
        "contentType": {
          "type": "string",
          "format": "media-range"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/header-or-reference"
          }
        },
        "style": {
          "default": "form",
          "enum": [
            "form",
            "spaceDelimited",
            "pipeDelimited",
            "deepObject"
          ]
        },
        "explode": {
          "type": "boolean"
        },
        "allowReserved": {
          "default": false,
          "type": "boolean"
        }
      },
      "allOf": [
        {
          "$ref": "#/$defs/specification-extensions"
        },
        {
          "$ref": "#/$defs/encoding/$defs/explode-default"
        }
      ],
      "unevaluatedProperties": false,
      "$defs": {
        "explode-default": {
          "if": {
            "properties": {
              "style": {
                "const": "form"
              }
            },
            "required": [
              "style"
            ]
          },
          "then": {
            "properties": {
              "explode": {
                "default": true
              }
            }
          },
          "else": {
            "properties": {
              "explode": {
                "default": false
              }
            }
          }
        }
      }
    },
    "responses": {
      "type": "object",
      "properties": {
        "default": {
          "$ref": "#/$defs/response-or-reference"
        }
      },
      "patternProperties": {
        "^[1-5](?:[0-9]{2}|XX)$": {
          "$ref": "#/$defs/response-or-reference"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "response": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "headers": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/header-or-reference"
          }
        },
        "content": {
          "$ref": "#/$defs/content"
        },
        "links": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/link-or-reference"
          }
        }
      },
      "required": [
        "description"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "response-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/response"
      }
    },
    "callbacks": {
      "type": "object",
      "$ref": "#/$defs/specification-extensions",
      "additionalProperties": {
        "$ref": "#/$defs/path-item-or-reference"
      }
    },
    "callbacks-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/callbacks"
      }
    },
    "example": {
      "type": "object",
      "properties": {
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "value": true,
        "externalValue": {
          "type": "string",
          "format": "uri"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "example-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/example"
      }
    },
    "link": {
      "type": "object",
      "properties": {
        "operationRef": {
          "type": "string",
          "format": "uri-reference"
        },
        "operationId": true,
        "parameters": {
          "$ref": "#/$defs/map-of-strings"
        },
        "requestBody": true,
        "description": {
          "type": "string"
        },
        "body": {
          "$ref": "#/$defs/server"
        }
      },
      "oneOf": [
        {
          "required": [
            "operationRef"
          ]
        },
        {
          "required": [
            "operationId"
          ]
        }
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "link-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/link"
      }
    },
    "header": {
      "type": "object",
      "properties": {
        "description": {
          "type": "string"
        },
        "required": {
          "default": false,
          "type": "boolean"
        },
        "deprecated": {
          "default": false,
          "type": "boolean"
        },
        "schema": {
          "$dynamicRef": "#meta"
        },
        "content": {
          "$ref": "#/$defs/content"
        }
      },
      "oneOf": [
        {
          "required": [
            "schema"
          ]
        },
        {
          "required": [
            "content"
          ]
        }
      ],
      "dependentSchemas": {
        "schema": {
          "properties": {
            "style": {
              "default": "simple",
              "const": "simple"
            },
            "explode": {
              "default": false,
              "type": "boolean"
            }
          },
          "$ref": "#/$defs/examples"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "header-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/header"
      }
    },
    "tag": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "externalDocs": {
          "$ref": "#/$defs/external-documentation"
        }
      },
      "required": [
        "name"
      ],
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "reference": {
      "type": "object",
      "properties": {
        "$ref": {
          "type": "string",
          "format": "uri-reference"
        },
        "summary": {
          "type": "string"
        },
        "description": {
          "type": "string"
        }
      },
      "unevaluatedProperties": false
    },
    "schema": {
      "$dynamicAnchor": "meta",
      "type": [
        "object",
        "boolean"
      ]
    },
    "security-scheme": {
      "type": "object",
      "properties": {
        "type": {
          "enum": [
            "apiKey",
            "http",
            "mutualTLS",
            "oauth2",
            "openIdConnect"
          ]
        },
        "description": {
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "allOf": [
        {
          "$ref": "#/$defs/specification-extensions"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-apikey"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-http"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-http-bearer"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-oauth2"
        },
        {
          "$ref": "#/$defs/security-scheme/$defs/type-oidc"
        }
      ],
      "unevaluatedProperties": false,
      "$defs": {
        "type-apikey": {
          "if": {
            "properties": {
              "type": {
                "const": "apiKey"
              }
            },
            "required": [
              "type"
            ]
          },
          "then": {
            "properties": {
              "name": {
                "type": "string"
              },
              "in": {
                "enum": [
                  "query",
                  "header",
                  "cookie"
                ]
              }
            },
            "required": [
              "name",
              "in"
            ]
          }
        },
        "type-http": {
          "if": {
            "properties": {
              "type": {
                "const": "http"
              }
            },
            "required": [
              "type"
            ]
          },
          "then": {
            "properties": {
              "scheme": {
                "type": "string"
              }
            },
            "required": [
              "scheme"
            ]
          }
        },
        "type-http-bearer": {
          "if": {
            "properties": {
              "type": {
                "const": "http"
              },
              "scheme": {
                "type": "string",
                "pattern": "^[Bb][Ee][Aa][Rr][Ee][Rr]$"
              }
            },
            "required": [
              "type",
              "scheme"
            ]
          },
          "then": {
            "properties": {
              "bearerFormat": {
                "type": "string"
              }
            }
          }
        },
        "type-oauth2": {
          "if": {
            "properties": {
              "type": {
                "const": "oauth2"
              }
            },
            "required": [
              "type"
            ]
          },
          "then": {
            "properties": {
              "flows": {
                "$ref": "#/$defs/oauth-flows"
              }
            },
            "required": [
              "flows"
            ]
          }
        },
        "type-oidc": {
          "if": {
            "properties": {
              "type": {
                "const": "openIdConnect"
              }
            },
            "required": [
              "type"
            ]
          },
          "then": {
            "properties": {
              "openIdConnectUrl": {
                "type": "string",
                "format": "uri"
              }
            },
            "required": [
              "openIdConnectUrl"
            ]
          }
        }
      }
    },
    "security-scheme-or-reference": {
      "if": {
        "type": "object",
        "required": [
          "$ref"
        ]
      },
      "then": {
        "$ref": "#/$defs/reference"
      },
      "else": {
        "$ref": "#/$defs/security-scheme"
      }
    },
    "oauth-flows": {
      "type": "object",
      "properties": {
        "implicit": {
          "$ref": "#/$defs/oauth-flows/$defs/implicit"
        },
        "password": {
          "$ref": "#/$defs/oauth-flows/$defs/password"
        },
        "clientCredentials": {
          "$ref": "#/$defs/oauth-flows/$defs/client-credentials"
        },
        "authorizationCode": {
          "$ref": "#/$defs/oauth-flows/$defs/authorization-code"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false,
      "$defs": {
        "implicit": {
          "type": "object",
          "properties": {
            "authorizationUrl": {
              "type": "string"
            },
            "refreshUrl": {
              "type": "string"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": [
            "authorizationUrl",
            "scopes"
          ],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        },
        "password": {
          "type": "object",
          "properties": {
            "tokenUrl": {
              "type": "string"
            },
            "refreshUrl": {
              "type": "string"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": [
            "tokenUrl",
            "scopes"
          ],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        },
        "client-credentials": {
          "type": "object",
          "properties": {
            "tokenUrl": {
              "type": "string"
            },
            "refreshUrl": {
              "type": "string"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": [
            "tokenUrl",
            "scopes"
          ],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        },
        "authorization-code": {
          "type": "object",
          "properties": {
            "authorizationUrl": {
              "type": "string"
            },
            "tokenUrl": {
              "type": "string"
            },
            "refreshUrl": {
              "type": "string"
            },
            "scopes": {
              "$ref": "#/$defs/map-of-strings"
            }
          },
          "required": [
            "authorizationUrl",
            "tokenUrl",
            "scopes"
          ],
          "$ref": "#/$defs/specification-extensions",
          "unevaluatedProperties": false
        }
      }
    },
    "security-requirement": {
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "specification-extensions": {
      "patternProperties": {
        "^x-": true
      }
    },
    "examples": {
      "properties": {
        "example": true,
        "examples": {
          "type": "object",
          "additionalProperties": {
            "$ref": "#/$defs/example-or-reference"
          }
        }
      }
    },
    "map-of-strings": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      }
    }
  }
}`;const{Core:Zy,Keywords:Kr,Schema:$t}=b,eg=Hy,tg=Xy,Zo=Xo,ec=Xo;$t.add(JSON.parse(Zo),"https://spec.openapis.org/oas/3.1/schema");$t.add(JSON.parse(Zo),"https://spec.openapis.org/oas/3.1/schema/latest");$t.add(JSON.parse(ec),"https://spec.openapis.org/oas/3.1/schema-base");$t.add(JSON.parse(ec),"https://spec.openapis.org/oas/3.1/schema-base/latest");$t.add(JSON.parse(eg));$t.add(JSON.parse(tg));Zy.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:Kr.metaData,discriminator:Kr.metaData,externalDocs:Kr.metaData,xml:Kr.metaData});const rg=Yy;var ye=rg;ye.add;ye.get;ye.validate;ye.compile;ye.interpret;ye.setMetaOutputFormat;ye.setShouldMetaValidate;ye.FLAG;ye.BASIC;ye.DETAILED;ye.VERBOSE;ye.Keywords;ye.InvalidSchemaError;const{Core:tc,Schema:lr,Instance:$a}=b,ng=async(e,t,r)=>{const n=await lr.step("items",r),a=lr.typeOf(n,"array")?lr.length(n):Number.MAX_SAFE_INTEGER;return lr.typeOf(e,"boolean")?[a,lr.value(e)]:[a,await tc.compileSchema(e,t)]},ag=([e,t],r,n,a)=>$a.typeOf(r,"array")?typeof t=="string"?$a.every((i,s)=>s<e||tc.interpretSchema(t,i,n,a),r):$a.every((i,s)=>s<e?!0:t,r):!0;var ig={compile:ng,interpret:ag};const{Core:rc,Schema:ba,Instance:Sa}=b,sg=async(e,t,r)=>{const n=await ba.step("items",r);return[ba.typeOf(n,"array")?ba.length(n):Number.MAX_SAFE_INTEGER,await rc.compileSchema(e,t)]},nc=([e,t],r,n,a)=>Sa.typeOf(r,"array")?Sa.every((i,s)=>s<e||rc.interpretSchema(t,i,n,a),r):!0,og=(e,t,r,n)=>nc(e,t,r,n)&&new Set(Sa.map((a,i)=>i,t));var cg={compile:sg,interpret:nc,collectEvaluatedItems:og};const{Core:ac,Schema:Ve,Instance:ic}=b,lg=async(e,t,r)=>{const n=await Ve.step("properties",r),a=Ve.typeOf(n,"object")?Ve.keys(n):[],i=await Ve.step("patternProperties",r),s=Ve.typeOf(i,"object")?Ve.keys(i).map(o=>new RegExp(o)):[];return Ve.typeOf(e,"boolean")?[a,s,Ve.value(e)]:[a,s,await ac.compileSchema(e,t)]},ug=([e,t,r],n,a,i)=>{if(!ic.typeOf(n,"object"))return!0;const s=ic.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?s.every(([,o])=>ac.interpretSchema(r,o,a,i)):s.length===0||r};var fg={compile:lg,interpret:ug};const{Core:sc,Schema:bt,Instance:oc}=b,pg=async(e,t,r)=>{const n=await bt.step("properties",r),a=bt.typeOf(n,"object")?bt.keys(n):[],i=await bt.step("patternProperties",r),s=bt.typeOf(i,"object")?bt.keys(i).map(o=>new RegExp(o)):[];return[a,s,await sc.compileSchema(e,t)]},cc=([e,t,r],n,a,i)=>oc.typeOf(n,"object")?oc.entries(n).filter(([s])=>!e.includes(s)&&!t.some(o=>o.test(s))).every(([,s])=>sc.interpretSchema(r,s,a,i)):!0,mg=(e,t,r,n)=>cc(e,t,r,n)&&[new RegExp("")];var dg={compile:pg,interpret:cc,collectEvaluatedProperties:mg};const{Core:zr,Schema:hg}=b,lc=ee,vg=(e,t)=>lc.pipeline([hg.map(async r=>zr.compileSchema(await r,t)),lc.all],e),yg=(e,t,r,n)=>e.every(a=>zr.interpretSchema(a,t,r,n)),gg=(e,t,r,n)=>e.reduce((a,i)=>{const s=a&&zr.collectEvaluatedProperties(i,t,r,n);return s!==!1&&[...a,...s]},[]),$g=(e,t,r,n)=>e.reduce((a,i)=>{const s=a!==!1&&zr.collectEvaluatedItems(i,t,r,n);return s!==!1&&new Set([...a,...s])},new Set);var bg={compile:vg,interpret:yg,collectEvaluatedProperties:gg,collectEvaluatedItems:$g};const{Core:Qr,Schema:Sg}=b,uc=ee,Og=(e,t)=>uc.pipeline([Sg.map(async r=>Qr.compileSchema(await r,t)),uc.all],e),wg=(e,t,r,n)=>e.filter(i=>Qr.interpretSchema(i,t,r,n)).length>0,Ig=(e,t,r,n)=>e.reduce((a,i)=>{const s=Qr.collectEvaluatedProperties(i,t,r,n);return s!==!1?[...a||[],...s]:a},!1),Eg=(e,t,r,n)=>e.reduce((a,i)=>{const s=Qr.collectEvaluatedItems(i,t,r,n);return s!==!1?new Set([...a||[],...s]):a},!1);var xg={compile:Og,interpret:wg,collectEvaluatedProperties:Ig,collectEvaluatedItems:Eg};const{Schema:Pg,Instance:kg}=b,fc=pt,Ag=e=>fc(Pg.value(e)),jg=(e,t)=>fc(kg.value(t))===e;var Ng={compile:Ag,interpret:jg};const{Core:pc,Instance:mc}=b,Cg=(e,t)=>pc.compileSchema(e,t),_g=(e,t,r,n)=>!mc.typeOf(t,"array")||mc.some(a=>pc.interpretSchema(e,a,r,n),t);var Rg={compile:Cg,interpret:_g};const{Core:Oa,Schema:St,Instance:wa}=b,Mg=async(e,t,r)=>{const n=await Oa.compileSchema(e,t),a=await St.step("minContains",r),i=St.typeOf(a,"number")?St.value(a):1,s=await St.step("maxContains",r),o=St.typeOf(s,"number")?St.value(s):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},dc=({contains:e,minContains:t,maxContains:r},n,a,i)=>{if(!wa.typeOf(n,"array"))return!0;const s=wa.reduce((o,c)=>Oa.interpretSchema(e,c,a,i)?o+1:o,0,n);return s>=t&&s<=r},Tg=(e,t,r,n)=>dc(e,t,r,n)&&wa.reduce((a,i,s)=>Oa.interpretSchema(e.contains,i,r,n)?a.add(s):a,new Set,t);var Lg={compile:Mg,interpret:dc,collectEvaluatedItems:Tg};const{Core:Yr,Schema:Ot,Instance:Ge}=b,qg=async(e,t,r)=>{const n=await Yr.compileSchema(e,t),a=await Ot.step("minContains",r),i=Ot.typeOf(a,"number")?Ot.value(a):1,s=await Ot.step("maxContains",r),o=Ot.typeOf(s,"number")?Ot.value(s):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Ia=({contains:e,minContains:t,maxContains:r},n,a,i)=>{if(!Ge.typeOf(n,"array")&&!Ge.typeOf(n,"object"))return!0;const s=Ge.entries(n).reduce((o,[,c])=>Yr.interpretSchema(e,c,a,i)?o+1:o,0);return s>=t&&s<=r},Dg=(e,t,r,n)=>Ia(e,t,r,n)&&Ge.typeOf(t,"array")&&Ge.reduce((a,i,s)=>Yr.interpretSchema(e.contains,i,r,n)?a.add(s):a,new Set,t),Bg=(e,t,r,n)=>Ia(e,t,r,n)&&Ge.typeOf(t,"object")&&Ge.entries(t).reduce((a,[i,s])=>(Yr.interpretSchema(e.contains,s,r,n)&&a.push(i),a),[],t);var Fg={compile:qg,interpret:Ia,collectEvaluatedItems:Dg,collectEvaluatedProperties:Bg};const{Core:Ug,Schema:Vg}=b,Ea=ee,Jg=async(e,t)=>{await Ea.pipeline([Vg.entries,Ea.map(([,r])=>Ug.compileSchema(r,t)),Ea.all],e)},Wg=()=>!0;var Kg={compile:Jg,interpret:Wg};const{Core:hc,Schema:xa,Instance:vc}=b,Pa=ee,zg=(e,t)=>Pa.pipeline([xa.entries,Pa.map(async([r,n])=>[r,xa.typeOf(n,"array")?xa.value(n):await hc.compileSchema(n,t)]),Pa.all],e),Qg=(e,t,r,n)=>{const a=vc.value(t);return!vc.typeOf(t,"object")||e.every(([i,s])=>i in a?Array.isArray(s)?s.every(o=>o in a):hc.interpretSchema(s,t,r,n):!0)};var Yg={compile:zg,interpret:Qg};const{Schema:yc,Instance:gc}=b,ka=ee,Gg=e=>ka.pipeline([yc.entries,ka.map(([t,r])=>[t,yc.value(r)]),ka.all],e),Hg=(e,t)=>{const r=gc.value(t);return!gc.typeOf(t,"object")||e.every(([n,a])=>!(n in r)||a.every(i=>i in r))};var Xg={compile:Gg,interpret:Hg};const{Core:Aa,Schema:Zg,Instance:ja}=b,Na=ee,e$=(e,t)=>Na.pipeline([Zg.entries,Na.map(async([r,n])=>[r,await Aa.compileSchema(n,t)]),Na.all],e),t$=(e,t,r,n)=>{const a=ja.value(t);return!ja.typeOf(t,"object")||e.every(([i,s])=>!(i in a)||Aa.interpretSchema(s,t,r,n))},r$=(e,t,r,n)=>e.reduce((a,[i,s])=>{if(!a||!ja.has(i,t))return a;const o=Aa.collectEvaluatedProperties(s,t,r,n);return o!==!1&&a.concat(o)},[]);var n$={compile:e$,interpret:t$,collectEvaluatedProperties:r$};const a$=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,i$=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),s$=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),a=e.slice(r+1);return[decodeURI(n),decodeURI(a)]};var $c={isObject:a$,escapeRegExp:i$,splitUrl:s$};const{Core:Gr,Schema:bc}=b,{splitUrl:o$}=$c,c$=async(e,t)=>{const[r,n]=o$(bc.value(e)),a=await bc.get(r,e);return await Gr.compileSchema(a,t),n},l$=(e,t,r,n)=>{if(!(e in n))throw Error(`No dynamic anchor found for "${e}"`);return Gr.interpretSchema(n[e],t,r,n)},u$=Gr.collectEvaluatedProperties,f$=Gr.collectEvaluatedItems;var p$={compile:c$,interpret:l$,collectEvaluatedProperties:u$,collectEvaluatedItems:f$};const{Core:Ca,Schema:m$}=b,d$=m$.value,h$=(e,t,r,n)=>{if(!(e in n))throw Error(`No dynamic anchor found for "${e}"`);return Ca.interpretSchema(n[e],t,r,n)},v$=Ca.collectEvaluatedProperties,y$=Ca.collectEvaluatedItems;var g$={compile:d$,interpret:h$,collectEvaluatedProperties:v$,collectEvaluatedItems:y$};const{Schema:$$,Instance:b$}=b,Sc=pt,S$=e=>$$.value(e).map(Sc),O$=(e,t)=>e.some(r=>Sc(b$.value(t))===r);var w$={compile:S$,interpret:O$};const{Schema:I$,Instance:Oc}=b,E$=async e=>I$.value(e),x$=(e,t)=>!Oc.typeOf(t,"number")||Oc.value(t)<e;var P$={compile:E$,interpret:x$};const{Schema:k$,Instance:wc}=b,A$=async e=>k$.value(e),j$=(e,t)=>!wc.typeOf(t,"number")||wc.value(t)>e;var N$={compile:A$,interpret:j$};const{Core:Hr}=b,C$=(e,t)=>Hr.compileSchema(e,t),_$=(e,t,r,n)=>(Hr.interpretSchema(e,t,r,n),!0),R$=(e,t,r,n)=>Hr.collectEvaluatedProperties(e,t,r,n)||[],M$=(e,t,r,n)=>Hr.collectEvaluatedItems(e,t,r,n)||new Set;var T$={compile:C$,interpret:_$,collectEvaluatedProperties:R$,collectEvaluatedItems:M$};const{Core:wt,Schema:Ic}=b,L$=async(e,t,r)=>{if(Ic.has("if",r)){const n=await Ic.step("if",r);return[await wt.compileSchema(n,t),await wt.compileSchema(e,t)]}else return[]},q$=([e,t],r,n,a)=>e===void 0||!_a(e,r,n,a)||wt.interpretSchema(t,r,n,a),_a=(e,t,r,n)=>{const a=r[e][2];return typeof a=="boolean"?a:a.every(([i,,s])=>wt.getKeyword(i).interpret(s,t,r,n))},D$=([e,t],r,n,a)=>e===void 0||!_a(e,r,n,a)?[]:wt.collectEvaluatedProperties(t,r,n,a),B$=([e,t],r,n,a)=>e===void 0||!_a(e,r,n,a)?new Set:wt.collectEvaluatedItems(t,r,n,a);var F$={compile:L$,interpret:q$,collectEvaluatedProperties:D$,collectEvaluatedItems:B$};const{Core:It,Schema:Ec}=b,U$=async(e,t,r)=>{if(Ec.has("if",r)){const n=await Ec.step("if",r);return[await It.compileSchema(n,t),await It.compileSchema(e,t)]}else return[]},V$=([e,t],r,n,a)=>e===void 0||Ra(e,r,n,a)||It.interpretSchema(t,r,n,a),Ra=(e,t,r,n)=>{const a=r[e][2];return typeof a=="boolean"?a:a.every(([i,,s])=>It.getKeyword(i).interpret(s,t,r,n))},J$=([e,t],r,n,a)=>e===void 0||Ra(e,r,n,a)?[]:It.collectEvaluatedProperties(t,r,n,a),W$=([e,t],r,n,a)=>e===void 0||Ra(e,r,n,a)?new Set:It.collectEvaluatedItems(t,r,n,a);var K$={compile:U$,interpret:V$,collectEvaluatedProperties:J$,collectEvaluatedItems:W$};const{Core:Xr,Schema:xc,Instance:Zr}=b,z$=async(e,t)=>{if(xc.typeOf(e,"array")){const r=await xc.map(n=>Xr.compileSchema(n,t),e);return Promise.all(r)}else return Xr.compileSchema(e,t)},Pc=(e,t,r,n)=>Zr.typeOf(t,"array")?typeof e=="string"?Zr.every(a=>Xr.interpretSchema(e,a,r,n),t):Zr.every((a,i)=>!(i in e)||Xr.interpretSchema(e[i],a,r,n),t):!0,Q$=(e,t,r,n)=>Pc(e,t,r,n)&&(typeof e=="string"?new Set(Zr.map((a,i)=>i,t)):new Set(e.map((a,i)=>i)));var Y$={compile:z$,interpret:Pc,collectEvaluatedItems:Q$};const{Core:kc,Schema:Ma,Instance:Ta}=b,G$=async(e,t,r)=>{const n=await Ma.step("prefixItems",r);return[Ma.typeOf(n,"array")?Ma.length(n):0,await kc.compileSchema(e,t)]},Ac=([e,t],r,n,a)=>Ta.typeOf(r,"array")?Ta.every((i,s)=>s<e||kc.interpretSchema(t,i,n,a),r):!0,H$=(e,t,r,n)=>Ac(e,t,r,n)&&new Set(Ta.map((a,i)=>i,t));var X$={compile:G$,interpret:Ac,collectEvaluatedItems:H$};const{Schema:Z$,Instance:jc}=b,eb=e=>Z$.value(e),tb=(e,t)=>!jc.typeOf(t,"array")||jc.length(t)<=e;var rb={compile:eb,interpret:tb};const{Schema:nb,Instance:Nc}=b,ab=e=>nb.value(e),ib=(e,t)=>!Nc.typeOf(t,"string")||Nc.length(t)<=e;var sb={compile:ab,interpret:ib};const{Schema:ob,Instance:Cc}=b,cb=e=>ob.value(e),lb=(e,t)=>!Cc.typeOf(t,"string")||[...Cc.value(t)].length<=e;var ub={compile:cb,interpret:lb};const{Schema:fb,Instance:_c}=b,pb=e=>fb.value(e),mb=(e,t)=>!_c.typeOf(t,"object")||_c.keys(t).length<=e;var db={compile:pb,interpret:mb};const{Schema:La,Instance:Rc}=b,hb=async(e,t,r)=>{const n=await La.step("exclusiveMaximum",r),a=La.value(n);return[La.value(e),a]},vb=([e,t],r)=>{if(!Rc.typeOf(r,"number"))return!0;const n=Rc.value(r);return t?n<e:n<=e};var yb={compile:hb,interpret:vb};const{Schema:gb,Instance:Mc}=b,$b=async e=>gb.value(e),bb=(e,t)=>!Mc.typeOf(t,"number")||Mc.value(t)<=e;var Sb={compile:$b,interpret:bb};const{Schema:Ob,Instance:Tc}=b,wb=e=>Ob.value(e),Ib=(e,t)=>!Tc.typeOf(t,"array")||Tc.length(t)>=e;var Eb={compile:wb,interpret:Ib};const{Schema:xb,Instance:Lc}=b,Pb=e=>xb.value(e),kb=(e,t)=>!Lc.typeOf(t,"string")||Lc.length(t)>=e;var Ab={compile:Pb,interpret:kb};const{Schema:jb,Instance:qc}=b,Nb=e=>jb.value(e),Cb=(e,t)=>!qc.typeOf(t,"string")||[...qc.value(t)].length>=e;var _b={compile:Nb,interpret:Cb};const{Schema:Rb,Instance:Dc}=b,Mb=e=>Rb.value(e),Tb=(e,t)=>!Dc.typeOf(t,"object")||Dc.keys(t).length>=e;var Lb={compile:Mb,interpret:Tb};const{Schema:qa,Instance:Bc}=b,qb=async(e,t,r)=>{const n=await qa.step("exclusiveMinimum",r),a=qa.value(n);return[qa.value(e),a]},Db=([e,t],r)=>{if(!Bc.typeOf(r,"number"))return!0;const n=Bc.value(r);return t?n>e:n>=e};var Bb={compile:qb,interpret:Db};const{Schema:Fb,Instance:Fc}=b,Ub=async e=>Fb.value(e),Vb=(e,t)=>!Fc.typeOf(t,"number")||Fc.value(t)>=e;var Jb={compile:Ub,interpret:Vb};const{Schema:Wb,Instance:Uc}=b,Kb=e=>Wb.value(e),zb=(e,t)=>{if(!Uc.typeOf(t,"number"))return!0;const r=Uc.value(t)%e;return Vc(0,r)||Vc(e,r)},Vc=(e,t)=>Math.abs(e-t)<11920929e-14;var Qb={compile:Kb,interpret:zb};const{Core:Jc}=b,Yb=Jc.compileSchema,Gb=(e,t,r,n)=>!Jc.interpretSchema(e,t,r,n);var Hb={compile:Yb,interpret:Gb};const{Core:en,Schema:Xb}=b,Zb=async(e,t)=>{const r=await Xb.map(n=>en.compileSchema(n,t),e);return Promise.all(r)},eS=(e,t,r,n)=>{let a=0;for(const i of e)if(en.interpretSchema(i,t,r,n)&&a++,a>1)break;return a===1},tS=(e,t,r,n)=>{let a=0;return e.reduce((i,s)=>{if(a>1)return!1;const o=en.collectEvaluatedProperties(s,t,r,n);return o?a++==0&&o:i},!1)},rS=(e,t,r,n)=>{let a=0;return e.reduce((i,s)=>{if(a>1)return!1;const o=en.collectEvaluatedItems(s,t,r,n);return o?a++==0&&o:i},!1)};var nS={compile:Zb,interpret:eS,collectEvaluatedProperties:tS,collectEvaluatedItems:rS};const{Schema:tn,Instance:Wc}=b,aS=async(e,t,r)=>{const n=await tn.value(e),a=await tn.step("properties",r),i=tn.typeOf(a,"object")?tn.keys(a):[],s=new Set(i);return n.forEach(o=>i.remove(o)),[...s]},iS=(e,t)=>!Wc.typeOf(t,"object")||e.every(r=>Wc.value(t).hasOwnProperty(r));var sS={compile:aS,interpret:iS};const{Schema:oS,Instance:Kc}=b,cS=e=>new RegExp(oS.value(e),"u"),lS=(e,t)=>!Kc.typeOf(t,"string")||e.test(Kc.value(t));var uS={compile:cS,interpret:lS};const{Core:zc,Schema:fS,Instance:Qc}=b,Da=ee,pS=(e,t)=>Da.pipeline([fS.entries,Da.map(async([r,n])=>[new RegExp(r,"u"),await zc.compileSchema(n,t)]),Da.all],e),Yc=(e,t,r,n)=>!Qc.typeOf(t,"object")||e.every(([a,i])=>Qc.entries(t).filter(([s])=>a.test(s)).every(([,s])=>zc.interpretSchema(i,s,r,n))),mS=(e,t,r,n)=>Yc(e,t,r,n)&&e.map(([a])=>a);var dS={compile:pS,interpret:Yc,collectEvaluatedProperties:mS};const{Core:Gc,Schema:hS,Instance:Hc}=b,Xc=ee,{escapeRegExp:vS}=$c,yS=(e,t)=>Xc.pipeline([hS.entries,Xc.reduce(async(r,[n,a])=>(r[n]=await Gc.compileSchema(a,t),r),Object.create(null))],e),Zc=(e,t,r,n)=>!Hc.typeOf(t,"object")||Hc.entries(t).filter(([a])=>a in e).every(([a,i])=>Gc.interpretSchema(e[a],i,r,n)),gS=(e,t,r,n)=>Zc(e,t,r,n)&&Object.keys(e).map(a=>new RegExp(`^${vS(a)}$`));var $S={compile:yS,interpret:Zc,collectEvaluatedProperties:gS};const{Core:el,Schema:tl,Instance:Ba}=b,rn=ee,bS=async(e,t)=>rn.pipeline([tl.entries,rn.reduce(async(r,[n,a])=>(r[n]=await rn.pipeline([tl.entries,rn.reduce(async(i,[s,o])=>(i[s]=await el.compileSchema(o,t),i),{})],a),r),{})],e),SS=(e,t,r,n)=>!Ba.typeOf(t,"object")||Object.entries(e).every(([a,i])=>!Ba.has(a,t)||el.interpretSchema(i[Ba.value(t)[a]],t,r,n));var OS={compile:bS,interpret:SS};const{Core:rl,Instance:Fa}=b,wS=(e,t)=>rl.compileSchema(e,t),IS=(e,t,r,n)=>!Fa.typeOf(t,"object")||Fa.keys(t).every(a=>rl.interpretSchema(e,Fa.cons(a),r,n));var ES={compile:wS,interpret:IS};const{Core:nn,Schema:nl}=b,xS=async(e,t)=>{const r=await nl.get(nl.value(e),e);return nn.compileSchema(r,t)},PS=nn.interpretSchema,kS=nn.collectEvaluatedProperties,AS=nn.collectEvaluatedItems;var jS={compile:xS,interpret:PS,collectEvaluatedProperties:kS,collectEvaluatedItems:AS};const{Schema:NS,Instance:al}=b,CS=e=>NS.value(e),_S=(e,t)=>!al.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(al.value(t),r));var RS={compile:CS,interpret:_S};const{Core:il,Schema:MS,Instance:sl}=b,ol=ee,TS=(e,t)=>ol.pipeline([MS.map(r=>il.compileSchema(r,t)),ol.all],e),cl=(e,t,r,n)=>sl.typeOf(t,"array")?sl.every((a,i)=>!(i in e)||il.interpretSchema(e[i],a,r,n),t):!0,LS=(e,t,r,n)=>cl(e,t,r,n)&&new Set(e.map((a,i)=>i));var qS={compile:TS,interpret:cl,collectEvaluatedItems:LS};const{Schema:DS,Instance:ll}=b,BS=e=>DS.value(e),FS=(e,t)=>typeof e=="string"?ll.typeOf(t,e):e.some(ll.typeOf(t));var US={compile:BS,interpret:FS};const{Core:Ua,Schema:VS,Instance:an}=b,JS=async(e,t,r)=>[VS.uri(r),await Ua.compileSchema(e,t)],ul=([e,t],r,n,a)=>{if(!an.typeOf(r,"array"))return!0;const i=Ua.collectEvaluatedItems(e,r,n,a,!0);return i===!1||an.every((s,o)=>i.has(o)||Ua.interpretSchema(t,an.step(o,r),n,a),r)},WS=(e,t,r,n)=>ul(e,t,r,n)&&new Set(an.map((a,i)=>i,t));var KS={compile:JS,interpret:ul,collectEvaluatedItems:WS};const{Core:Va,Schema:zS,Instance:fl}=b,QS=async(e,t,r)=>[zS.uri(r),await Va.compileSchema(e,t)],pl=([e,t],r,n,a)=>{if(!fl.typeOf(r,"object"))return!0;const i=Va.collectEvaluatedProperties(e,r,n,a,!0);return!i||fl.entries(r).filter(([s])=>!i.some(o=>s.match(o))).every(([,s])=>Va.interpretSchema(t,s,n,a))},YS=(e,t,r,n)=>pl(e,t,r,n)&&[new RegExp("")];var GS={compile:QS,interpret:pl,collectEvaluatedProperties:YS};const{Schema:HS,Instance:Ja}=b,XS=pt,ZS=e=>HS.value(e),eO=(e,t)=>{if(!Ja.typeOf(t,"array")||e===!1)return!0;const r=Ja.map(n=>XS(Ja.value(n)),t);return new Set(r).size===r.length};var tO={compile:ZS,interpret:eO};const{Keywords:ml}=b;var rO={additionalItems:ig,additionalItems6:cg,additionalProperties:fg,additionalProperties6:dg,allOf:bg,anyOf:xg,const:Ng,contains:Rg,containsMinContainsMaxContains:Lg,containsMinContainsMaxContainsFUTURE:Fg,definitions:Kg,dependencies:Yg,dependentRequired:Xg,dependentSchemas:n$,dynamicRef:p$,dynamicRefFUTURE:g$,enum:w$,exclusiveMaximum:P$,exclusiveMinimum:N$,if:T$,then:F$,else:K$,items:Y$,items202012:X$,maxItems:rb,maxLength:sb,maxLength6:ub,maxProperties:db,maximumExclusiveMaximum:yb,maximum:Sb,metaData:ml.metaData,minItems:Eb,minLength:Ab,minLength6:_b,minProperties:Lb,minimumExclusiveMinimum:Bb,minimum:Jb,multipleOf:Qb,not:Hb,oneOf:nS,optional:sS,pattern:uS,patternProperties:dS,properties:$S,propertyDependencies:OS,propertyNames:ES,ref:jS,required:RS,tupleItems:qS,type:US,unevaluatedItems:KS,unevaluatedProperties:GS,uniqueItems:tO,validate:ml.validate},nO=`{
    "$schema": "https://json-schema.org/draft/next/schema",
    "$id": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/core": true,
        "https://json-schema.org/draft/next/vocab/applicator": true,
        "https://json-schema.org/draft/next/vocab/unevaluated": true,
        "https://json-schema.org/draft/next/vocab/validation": true,
        "https://json-schema.org/draft/next/vocab/meta-data": true,
        "https://json-schema.org/draft/next/vocab/format-annotation": true,
        "https://json-schema.org/draft/next/vocab/content": true
    },
    "$dynamicAnchor": "meta",

    "title": "Core and Validation specifications meta-schema",
    "allOf": [
        {"$ref": "meta/core"},
        {"$ref": "meta/applicator"},
        {"$ref": "meta/validation"},
        {"$ref": "meta/meta-data"},
        {"$ref": "meta/format-annotation"},
        {"$ref": "meta/content"}
    ],
    "type": ["object", "boolean", "string"],
    "properties": {
        "definitions": {
            "$comment": "While no longer an official keyword as it is replaced by $defs, this keyword is retained in the meta-schema to prevent incompatible extensions as it remains in common use.",
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "default": {}
        },
        "dependencies": {
            "$comment": "\\"dependencies\\" is no longer a keyword, but schema authors should avoid redefining it to facilitate a smooth transition to \\"dependentSchemas\\" and \\"dependentRequired\\"",
            "type": "object",
            "additionalProperties": {
                "anyOf": [
                    { "$dynamicRef": "#meta" },
                    { "$ref": "meta/validation#/$defs/stringArray" }
                ]
            }
        }
    }
}`,aO=`{
    "$id": "https://json-schema.org/draft/next/meta/core",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/core": true
    },
    "$dynamicAnchor": "meta",

    "title": "Core vocabulary meta-schema",
    "type": ["object", "boolean", "string"],
    "properties": {
        "$id": {
            "type": "string",
            "format": "uri-reference",
            "$comment": "Non-empty fragments not allowed.",
            "pattern": "^[^#]*#?$"
        },
        "$schema": {
            "type": "string",
            "format": "uri"
        },
        "$anchor": {
            "type": "string",
            "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        "$ref": {
            "type": "string",
            "format": "uri-reference"
        },
        "$dynamicRef": {
            "type": "string",
            "format": "uri-reference"
        },
        "$dynamicAnchor": {
            "type": "string",
            "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
        },
        "$vocabulary": {
            "type": "object",
            "propertyNames": {
                "type": "string",
                "format": "uri"
            },
            "additionalProperties": {
                "type": "boolean"
            }
        },
        "$comment": {
            "type": "string"
        },
        "$defs": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "default": {}
        }
    }
}`,iO=`{
    "$id": "https://json-schema.org/draft/next/meta/applicator",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/applicator": true
    },
    "$dynamicAnchor": "meta",

    "title": "Applicator vocabulary meta-schema",
    "type": ["object", "boolean", "string"],
    "properties": {
        "prefixItems": { "$ref": "#/$defs/schemaArray" },
        "items": { "$dynamicRef": "#meta" },
        "contains": { "$dynamicRef": "#meta" },
        "additionalProperties": { "$dynamicRef": "#meta" },
        "properties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "default": {}
        },
        "patternProperties": {
            "type": "object",
            "additionalProperties": { "$dynamicRef": "#meta" },
            "propertyNames": { "format": "regex" },
            "default": {}
        },
        "dependentSchemas": {
            "type": "object",
            "additionalProperties": {
                "$dynamicRef": "#meta"
            }
        },
        "propertyDependencies": {
            "type": "object",
            "additionalProperties": {
                "type": "object",
                "additionalProperties": { "$dynamicRef": "#meta" },
                "default": {}
            },
            "default": {}
        },
        "propertyNames": { "$dynamicRef": "#meta" },
        "if": { "$dynamicRef": "#meta" },
        "then": { "$dynamicRef": "#meta" },
        "else": { "$dynamicRef": "#meta" },
        "allOf": { "$ref": "#/$defs/schemaArray" },
        "anyOf": { "$ref": "#/$defs/schemaArray" },
        "oneOf": { "$ref": "#/$defs/schemaArray" },
        "not": { "$dynamicRef": "#meta" }
    },
    "$defs": {
        "schemaArray": {
            "type": "array",
            "minItems": 1,
            "items": { "$dynamicRef": "#meta" }
        }
    }
}`,sO=`{
    "$id": "https://json-schema.org/draft/next/meta/validation",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/validation": true
    },
    "$dynamicAnchor": "meta",

    "title": "Validation vocabulary meta-schema",
    "type": ["object", "boolean", "string"],
    "properties": {
        "multipleOf": {
            "type": "number",
            "exclusiveMinimum": 0
        },
        "maximum": {
            "type": "number"
        },
        "exclusiveMaximum": {
            "type": "number"
        },
        "minimum": {
            "type": "number"
        },
        "exclusiveMinimum": {
            "type": "number"
        },
        "maxLength": { "$ref": "#/$defs/nonNegativeInteger" },
        "minLength": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "pattern": {
            "type": "string",
            "format": "regex"
        },
        "maxItems": { "$ref": "#/$defs/nonNegativeInteger" },
        "minItems": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "uniqueItems": {
            "type": "boolean",
            "default": false
        },
        "maxContains": { "$ref": "#/$defs/nonNegativeInteger" },
        "minContains": {
            "$ref": "#/$defs/nonNegativeInteger",
            "default": 1
        },
        "maxProperties": { "$ref": "#/$defs/nonNegativeInteger" },
        "minProperties": { "$ref": "#/$defs/nonNegativeIntegerDefault0" },
        "required": { "$ref": "#/$defs/stringArray" },
        "optional": { "$ref": "#/$defs/stringArray" },
        "dependentRequired": {
            "type": "object",
            "additionalProperties": {
                "$ref": "#/$defs/stringArray"
            }
        },
        "const": true,
        "enum": {
            "type": "array",
            "items": true
        },
        "type": {
            "anyOf": [
                { "$ref": "#/$defs/simpleTypes" },
                {
                    "type": "array",
                    "items": { "$ref": "#/$defs/simpleTypes" },
                    "minItems": 1,
                    "uniqueItems": true
                }
            ]
        }
    },
    "$defs": {
        "nonNegativeInteger": {
            "type": "integer",
            "minimum": 0
        },
        "nonNegativeIntegerDefault0": {
            "$ref": "#/$defs/nonNegativeInteger",
            "default": 0
        },
        "simpleTypes": {
            "enum": [
                "array",
                "boolean",
                "integer",
                "null",
                "number",
                "object",
                "string"
            ]
        },
        "stringArray": {
            "type": "array",
            "items": { "type": "string" },
            "uniqueItems": true,
            "default": []
        }
    }
}`,oO=`{
    "$id": "https://json-schema.org/draft/next/meta/meta-data",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/meta-data": true
    },
    "$dynamicAnchor": "meta",

    "title": "Meta-data vocabulary meta-schema",

    "type": ["object", "boolean", "string"],
    "properties": {
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "default": true,
        "deprecated": {
            "type": "boolean",
            "default": false
        },
        "readOnly": {
            "type": "boolean",
            "default": false
        },
        "writeOnly": {
            "type": "boolean",
            "default": false
        },
        "examples": {
            "type": "array",
            "items": true
        }
    }
}`,cO=`{
    "$id": "https://json-schema.org/draft/next/meta/format-annotation",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/format-annotation": true
    },
    "$dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for annotation results",
    "type": ["object", "boolean", "string"],
    "properties": {
        "format": { "type": "string" }
    }
}`,lO=`{
    "$id": "https://json-schema.org/draft/next/meta/format-assertion",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/format-assertion": true
    },
    "$dynamicAnchor": "meta",

    "title": "Format vocabulary meta-schema for assertion results",
    "type": ["object", "boolean", "string"],
    "properties": {
        "format": { "type": "string" }
    }
}`,uO=`{
    "$id": "https://json-schema.org/draft/next/meta/content",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/content": true
    },
    "$dynamicAnchor": "meta",

    "title": "Content vocabulary meta-schema",

    "type": ["object", "boolean", "string"],
    "properties": {
        "contentMediaType": { "type": "string" },
        "contentEncoding": { "type": "string" },
        "contentSchema": { "$dynamicRef": "#meta" }
    }
}`,fO=`{
    "$id": "https://json-schema.org/draft/next/meta/unevaluated",
    "$schema": "https://json-schema.org/draft/next/schema",
    "$vocabulary": {
        "https://json-schema.org/draft/next/vocab/unevaluated": true
    },
    "$dynamicAnchor": "meta",

    "title": "Unevaluated applicator vocabulary meta-schema",
    "type": ["object", "boolean", "string"],
    "properties": {
        "unevaluatedItems": { "$dynamicRef": "#meta" },
        "unevaluatedProperties": { "$dynamicRef": "#meta" }
    }
}`;const{Core:He,Schema:ue}=b,A=rO,pO=nO,mO=aO,dO=iO,hO=sO,vO=oO,yO=cO,gO=lO,$O=uO,bO=fO,Et="https://json-schema.org/draft/next/schema";ue.setConfig(Et,"baseToken","$id");ue.setConfig(Et,"embeddedToken","$id");ue.setConfig(Et,"anchorToken","$anchor");ue.setConfig(Et,"dynamicAnchorToken","$dynamicAnchor");ue.setConfig(Et,"vocabularyToken","$vocabulary");ue.setConfig(Et,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);ue.add(JSON.parse(pO));ue.add(JSON.parse(mO));He.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:A.validate,$defs:A.definitions,$dynamicRef:A.dynamicRef,$dref:A.dynamicRefFUTURE,$ref:A.ref});ue.add(JSON.parse(dO));He.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:A.additionalProperties6,allOf:A.allOf,anyOf:A.anyOf,contains:A.containsMinContainsMaxContainsFUTURE,dependentSchemas:A.dependentSchemas,if:A.if,then:A.then,else:A.else,items:A.items202012,not:A.not,oneOf:A.oneOf,patternProperties:A.patternProperties,prefixItems:A.tupleItems,properties:A.properties,propertyDependencies:A.propertyDependencies,propertyNames:A.propertyNames});ue.add(JSON.parse(hO));He.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:A.const,dependentRequired:A.dependentRequired,enum:A.enum,exclusiveMaximum:A.exclusiveMaximum,exclusiveMinimum:A.exclusiveMinimum,maxItems:A.maxItems,maxLength:A.maxLength6,maxProperties:A.maxProperties,maximum:A.maximum,minItems:A.minItems,minLength:A.minLength6,minProperties:A.minProperties,minimum:A.minimum,multipleOf:A.multipleOf,optional:A.optional,pattern:A.pattern,required:A.required,type:A.type,uniqueItems:A.uniqueItems});ue.add(JSON.parse(vO));He.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:A.metaData,deprecated:A.metaData,description:A.metaData,examples:A.metaData,readOnly:A.metaData,title:A.metaData,writeOnly:A.metaData});ue.add(JSON.parse(yO));He.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:A.metaData});ue.add(JSON.parse(gO));ue.add(JSON.parse($O));He.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:A.metaData,contentMediaType:A.metaData,contentSchema:A.metaData});ue.add(JSON.parse(bO));He.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:A.unevaluatedItems,unevaluatedProperties:A.unevaluatedProperties});export{BO as $,HO as A,Bl as B,gl as C,n0 as D,KO as E,OO as F,IO as G,EO as H,wO as I,Pl as J,kt as K,i0 as L,LO as M,NO as N,kO as O,At as P,WO as Q,ti as R,r0 as S,DO as T,XO as U,zO as V,VO as W,QO as X,YO as Y,jl as Z,RO as _,Nl as a,xO as a0,de as a1,a0 as a2,CO as b,_O as c,kl as d,Al as e,qO as f,PO as g,_l as h,t0 as i,TO as j,AO as k,jO as l,MO as m,Tl as n,ql as o,Ll as p,ai as q,JO as r,Sl as s,sn as t,UO as u,FO as v,ZO as w,e0 as x,Dl as y,GO as z};
