import{S as Wt,i as Xt,s as Yt,e as W,t as ue,c as X,a as M,h as pe,d as x,b as _,g as te,J as T,n as Ne,l as zt,k as Te,m as Re,K as Gc,L as ir,M as zs,N as Hu,O as Ih,P as Ut,j as Ke,Q as Hc,R as Dr,x as lt,y as ft,z as ut,T as qr,r as Be,p as Fe,C as pt,U as wh,V as Gs,W as Wu,F as uo,X as It,Y as wt,G as po,H as mo,I as ho,f as bs,Z as Oh,_ as Ss}from"../chunks/index-4a192058.js";const yo=Symbol.for("yaml.alias"),Di=Symbol.for("yaml.document"),Jt=Symbol.for("yaml.map"),Xu=Symbol.for("yaml.pair"),Rt=Symbol.for("yaml.scalar"),Zr=Symbol.for("yaml.seq"),st=Symbol.for("yaml.node.type"),fr=e=>!!e&&typeof e=="object"&&e[st]===yo,Gn=e=>!!e&&typeof e=="object"&&e[st]===Di,ur=e=>!!e&&typeof e=="object"&&e[st]===Jt,Ee=e=>!!e&&typeof e=="object"&&e[st]===Xu,be=e=>!!e&&typeof e=="object"&&e[st]===Rt,en=e=>!!e&&typeof e=="object"&&e[st]===Zr;function je(e){if(e&&typeof e=="object")switch(e[st]){case Jt:case Zr:return!0}return!1}function _e(e){if(e&&typeof e=="object")switch(e[st]){case yo:case Jt:case Rt:case Zr:return!0}return!1}const Eh=e=>(be(e)||je(e))&&!!e.anchor;class $o{constructor(t){Object.defineProperty(this,st,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}}const Ye=Symbol("break visit"),Yu=Symbol("skip children"),Pt=Symbol("remove node");function Gt(e,t){const r=Qu(t);Gn(e)?Lr(null,e.contents,r,Object.freeze([e]))===Pt&&(e.contents=null):Lr(null,e,r,Object.freeze([]))}Gt.BREAK=Ye;Gt.SKIP=Yu;Gt.REMOVE=Pt;function Lr(e,t,r,n){const s=Zu(e,t,r,n);if(_e(s)||Ee(s))return ep(e,n,s),Lr(e,s,r,n);if(typeof s!="symbol"){if(je(t)){n=Object.freeze(n.concat(t));for(let a=0;a<t.items.length;++a){const i=Lr(a,t.items[a],r,n);if(typeof i=="number")a=i-1;else{if(i===Ye)return Ye;i===Pt&&(t.items.splice(a,1),a-=1)}}}else if(Ee(t)){n=Object.freeze(n.concat(t));const a=Lr("key",t.key,r,n);if(a===Ye)return Ye;a===Pt&&(t.key=null);const i=Lr("value",t.value,r,n);if(i===Ye)return Ye;i===Pt&&(t.value=null)}}return s}async function aa(e,t){const r=Qu(t);Gn(e)?await Mr(null,e.contents,r,Object.freeze([e]))===Pt&&(e.contents=null):await Mr(null,e,r,Object.freeze([]))}aa.BREAK=Ye;aa.SKIP=Yu;aa.REMOVE=Pt;async function Mr(e,t,r,n){const s=await Zu(e,t,r,n);if(_e(s)||Ee(s))return ep(e,n,s),Mr(e,s,r,n);if(typeof s!="symbol"){if(je(t)){n=Object.freeze(n.concat(t));for(let a=0;a<t.items.length;++a){const i=await Mr(a,t.items[a],r,n);if(typeof i=="number")a=i-1;else{if(i===Ye)return Ye;i===Pt&&(t.items.splice(a,1),a-=1)}}}else if(Ee(t)){n=Object.freeze(n.concat(t));const a=await Mr("key",t.key,r,n);if(a===Ye)return Ye;a===Pt&&(t.key=null);const i=await Mr("value",t.value,r,n);if(i===Ye)return Ye;i===Pt&&(t.value=null)}}return s}function Qu(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function Zu(e,t,r,n){var s,a,i,o,c;if(typeof r=="function")return r(e,t,n);if(ur(t))return(s=r.Map)==null?void 0:s.call(r,e,t,n);if(en(t))return(a=r.Seq)==null?void 0:a.call(r,e,t,n);if(Ee(t))return(i=r.Pair)==null?void 0:i.call(r,e,t,n);if(be(t))return(o=r.Scalar)==null?void 0:o.call(r,e,t,n);if(fr(t))return(c=r.Alias)==null?void 0:c.call(r,e,t,n)}function ep(e,t,r){const n=t[t.length-1];if(je(n))n.items[e]=r;else if(Ee(n))e==="key"?n.key=r:n.value=r;else if(Gn(n))n.contents=r;else{const s=fr(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const Ph={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},kh=e=>e.replace(/[!,[\]{}]/g,t=>Ph[t]);class Me{constructor(t,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Me.defaultYaml,t),this.tags=Object.assign({},Me.defaultTags,r)}clone(){const t=new Me(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Me(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Me.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Me.defaultTags);break}return t}add(t,r){this.atNextDocument&&(this.yaml={explicit:Me.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Me.defaultTags),this.atNextDocument=!1);const n=t.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[a,i]=n;return this.tags[a]=i,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[a]=n;if(a==="1.1"||a==="1.2")return this.yaml.version=a,!0;{const i=/^\d+\.\d+$/.test(a);return r(6,`Unsupported YAML version ${a}`,i),!1}}default:return r(0,`Unknown directive ${s}`,!0),!1}}tagName(t,r){if(t==="!")return"!";if(t[0]!=="!")return r(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const i=t.slice(2,-1);return i==="!"||i==="!!"?(r(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&r("Verbatim tags must end with a >"),i)}const[,n,s]=t.match(/^(.*!)([^!]*)$/);s||r(`The ${t} tag has no suffix`);const a=this.tags[n];return a?a+decodeURIComponent(s):n==="!"?t:(r(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[r,n]of Object.entries(this.tags))if(t.startsWith(n))return r+kh(t.substring(n.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(t&&n.length>0&&_e(t.contents)){const a={};Gt(t.contents,(i,o)=>{_e(o)&&o.tag&&(a[o.tag]=!0)}),s=Object.keys(a)}else s=[];for(const[a,i]of n)a==="!!"&&i==="tag:yaml.org,2002:"||(!t||s.some(o=>o.startsWith(i)))&&r.push(`%TAG ${a} ${i}`);return r.join(`
`)}}Me.defaultYaml={explicit:!1,version:"1.2"};Me.defaultTags={"!!":"tag:yaml.org,2002:"};function tp(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(r)}return!0}function rp(e){const t=new Set;return Gt(e,{Value(r,n){n.anchor&&t.add(n.anchor)}}),t}function np(e,t){for(let r=1;;++r){const n=`${e}${r}`;if(!t.has(n))return n}}function jh(e,t){const r=[],n=new Map;let s=null;return{onAnchor:a=>{r.push(a),s||(s=rp(e));const i=np(t,s);return s.add(i),i},setAnchors:()=>{for(const a of r){const i=n.get(a);if(typeof i=="object"&&i.anchor&&(be(i.node)||je(i.node)))i.node.anchor=i.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=a,o}}},sourceObjects:n}}class ia extends $o{constructor(t){super(yo),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t){let r;return Gt(t,{Node:(n,s)=>{if(s===this)return Gt.BREAK;s.anchor===this.source&&(r=s)}}),r}toJSON(t,r){if(!r)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:a}=r,i=this.resolve(s);if(!i){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}const o=n.get(i);if(!o||o.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(a>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=_s(s,i,n)),o.count*o.aliasCount>a)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return o.res}toString(t,r,n){const s=`*${this.source}`;if(t){if(tp(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(t.implicitKey)return`${s} `}return s}}function _s(e,t,r){if(fr(t)){const n=t.resolve(e),s=r&&n&&r.get(n);return s?s.count*s.aliasCount:0}else if(je(t)){let n=0;for(const s of t.items){const a=_s(e,s,r);a>n&&(n=a)}return n}else if(Ee(t)){const n=_s(e,t.key,r),s=_s(e,t.value,r);return Math.max(n,s)}return 1}function kt(e,t,r){if(Array.isArray(e))return e.map((n,s)=>kt(n,String(s),r));if(e&&typeof e.toJSON=="function"){if(!r||!Eh(e))return e.toJSON(t,r);const n={aliasCount:0,count:1,res:void 0};r.anchors.set(e,n),r.onCreate=a=>{n.res=a,delete r.onCreate};const s=e.toJSON(t,r);return r.onCreate&&r.onCreate(s),s}return typeof e=="bigint"&&!(r!=null&&r.keep)?Number(e):e}const sp=e=>!e||typeof e!="function"&&typeof e!="object";class ee extends $o{constructor(t){super(Rt),this.value=t}toJSON(t,r){return r!=null&&r.keep?this.value:kt(this.value,t,r)}toString(){return String(this.value)}}ee.BLOCK_FOLDED="BLOCK_FOLDED";ee.BLOCK_LITERAL="BLOCK_LITERAL";ee.PLAIN="PLAIN";ee.QUOTE_DOUBLE="QUOTE_DOUBLE";ee.QUOTE_SINGLE="QUOTE_SINGLE";const Ah="tag:yaml.org,2002:";function xh(e,t,r){var n;if(t){const s=r.filter(i=>i.tag===t),a=(n=s.find(i=>!i.format))!=null?n:s[0];if(!a)throw new Error(`Tag ${t} not found`);return a}return r.find(s=>{var a;return((a=s.identify)==null?void 0:a.call(s,e))&&!s.format})}function qn(e,t,r){var y,p;if(Gn(e)&&(e=e.contents),_e(e))return e;if(Ee(e)){const h=(p=(y=r.schema[Jt]).createNode)==null?void 0:p.call(y,r.schema,null,r);return h.items.push(e),h}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt=="function"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:a,schema:i,sourceObjects:o}=r;let c;if(n&&e&&typeof e=="object"){if(c=o.get(e),c)return c.anchor||(c.anchor=s(e)),new ia(c.anchor);c={anchor:null,node:null},o.set(e,c)}t!=null&&t.startsWith("!!")&&(t=Ah+t.slice(2));let l=xh(e,t,i.tags);if(!l){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const h=new ee(e);return c&&(c.node=h),h}l=e instanceof Map?i[Jt]:Symbol.iterator in Object(e)?i[Zr]:i[Jt]}a&&(a(l),delete r.onTagObj);const f=l!=null&&l.createNode?l.createNode(r.schema,e,r):new ee(e);return t&&(f.tag=t),c&&(c.node=f),f}function Hs(e,t,r){let n=r;for(let s=t.length-1;s>=0;--s){const a=t[s];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const i=[];i[a]=n,n=i}else n=new Map([[a,n]])}return qn(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const xn=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class oa extends $o{constructor(t,r){super(t),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(t){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(r.schema=t),r.items=r.items.map(n=>_e(n)||Ee(n)?n.clone(t):n),this.range&&(r.range=this.range.slice()),r}addIn(t,r){if(xn(t))this.add(r);else{const[n,...s]=t,a=this.get(n,!0);if(je(a))a.addIn(s,r);else if(a===void 0&&this.schema)this.set(n,Hs(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(t){const[r,...n]=t;if(n.length===0)return this.delete(r);const s=this.get(r,!0);if(je(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}getIn(t,r){const[n,...s]=t,a=this.get(n,!0);return s.length===0?!r&&be(a)?a.value:a:je(a)?a.getIn(s,r):void 0}hasAllNullValues(t){return this.items.every(r=>{if(!Ee(r))return!1;const n=r.value;return n==null||t&&be(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(t){const[r,...n]=t;if(n.length===0)return this.has(r);const s=this.get(r,!0);return je(s)?s.hasIn(n):!1}setIn(t,r){const[n,...s]=t;if(s.length===0)this.set(n,r);else{const a=this.get(n,!0);if(je(a))a.setIn(s,r);else if(a===void 0&&this.schema)this.set(n,Hs(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}oa.maxFlowStringSingleLineLength=60;const _h=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Ct(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const Bt=(e,t,r)=>e.endsWith(`
`)?Ct(r,t):r.includes(`
`)?`
`+Ct(r,t):(e.endsWith(" ")?"":" ")+r,ap="flow",qi="block",Cs="quoted";function ca(e,t,r="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:a=20,onFold:i,onOverflow:o}={}){if(!s||s<0)return e;const c=Math.max(1+a,1+s-t.length);if(e.length<=c)return e;const l=[],f={};let y=s-t.length;typeof n=="number"&&(n>s-Math.max(2,a)?l.push(0):y=s-n);let p,h,P=!1,m=-1,d=-1,v=-1;r===qi&&(m=Wc(e,m),m!==-1&&(y=m+c));for(let b;b=e[m+=1];){if(r===Cs&&b==="\\"){switch(d=m,e[m+1]){case"x":m+=3;break;case"u":m+=5;break;case"U":m+=9;break;default:m+=1}v=m}if(b===`
`)r===qi&&(m=Wc(e,m)),y=m+c,p=void 0;else{if(b===" "&&h&&h!==" "&&h!==`
`&&h!=="	"){const j=e[m+1];j&&j!==" "&&j!==`
`&&j!=="	"&&(p=m)}if(m>=y)if(p)l.push(p),y=p+c,p=void 0;else if(r===Cs){for(;h===" "||h==="	";)h=b,b=e[m+=1],P=!0;const j=m>v+1?m-2:d-1;if(f[j])return e;l.push(j),f[j]=!0,y=j+c,p=void 0}else P=!0}h=b}if(P&&o&&o(),l.length===0)return e;i&&i();let O=e.slice(0,l[0]);for(let b=0;b<l.length;++b){const j=l[b],S=l[b+1]||e.length;j===0?O=`
${t}${e.slice(0,S)}`:(r===Cs&&f[j]&&(O+=`${e[j]}\\`),O+=`
${t}${e.slice(j+1,S)}`)}return O}function Wc(e,t){let r=e[t+1];for(;r===" "||r==="	";){do r=e[t+=1];while(r&&r!==`
`);r=e[t+1]}return t}const la=e=>({indentAtStart:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),fa=e=>/^(%|---|\.\.\.)/m.test(e);function Ch(e,t,r){if(!t||t<0)return!1;const n=t-r,s=e.length;if(s<=n)return!1;for(let a=0,i=0;a<s;++a)if(e[a]===`
`){if(a-i>n)return!0;if(i=a+1,s-i<=n)return!1}return!0}function Nn(e,t){const r=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return r;const{implicitKey:n}=t,s=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(fa(e)?"  ":"");let i="",o=0;for(let c=0,l=r[c];l;l=r[++c])if(l===" "&&r[c+1]==="\\"&&r[c+2]==="n"&&(i+=r.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(r[c+1]){case"u":{i+=r.slice(o,c);const f=r.substr(c+2,4);switch(f){case"0000":i+="\\0";break;case"0007":i+="\\a";break;case"000b":i+="\\v";break;case"001b":i+="\\e";break;case"0085":i+="\\N";break;case"00a0":i+="\\_";break;case"2028":i+="\\L";break;case"2029":i+="\\P";break;default:f.substr(0,2)==="00"?i+="\\x"+f.substr(2):i+=r.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||r[c+2]==='"'||r.length<s)c+=1;else{for(i+=r.slice(o,c)+`

`;r[c+2]==="\\"&&r[c+3]==="n"&&r[c+4]!=='"';)i+=`
`,c+=2;i+=a,r[c+2]===" "&&(i+="\\"),c+=1,o=c+1}break;default:c+=1}return i=o?i+r.slice(o):r,n?i:ca(i,a,Cs,la(t))}function Li(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Nn(e,t);const r=t.indent||(fa(e)?"  ":""),n="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return t.implicitKey?n:ca(n,r,ap,la(t))}function Tn(e,t){const{singleQuote:r}=t.options;let n;if(r===!1)n=Nn;else{const s=e.includes('"'),a=e.includes("'");s&&!a?n=Li:a&&!s?n=Nn:n=r?Li:Nn}return n(e,t)}function Ns({comment:e,type:t,value:r},n,s,a){const{blockQuote:i,commentString:o,lineWidth:c}=n.options;if(!i||/\n[\t ]+$/.test(r)||/^\s*$/.test(r))return Tn(r,n);const l=n.indent||(n.forceBlockIndent||fa(r)?"  ":""),f=i==="literal"?!0:i==="folded"||t===ee.BLOCK_FOLDED?!1:t===ee.BLOCK_LITERAL?!0:!Ch(r,c,l.length);if(!r)return f?`|
`:`>
`;let y,p;for(p=r.length;p>0;--p){const A=r[p-1];if(A!==`
`&&A!=="	"&&A!==" ")break}let h=r.substring(p);const P=h.indexOf(`
`);P===-1?y="-":r===h||P!==h.length-1?(y="+",a&&a()):y="",h&&(r=r.slice(0,-h.length),h[h.length-1]===`
`&&(h=h.slice(0,-1)),h=h.replace(/\n+(?!\n|$)/g,`$&${l}`));let m=!1,d,v=-1;for(d=0;d<r.length;++d){const A=r[d];if(A===" ")m=!0;else if(A===`
`)v=d;else break}let O=r.substring(0,v<d?v+1:d);O&&(r=r.substring(O.length),O=O.replace(/\n+/g,`$&${l}`));let j=(f?"|":">")+(m?l?"2":"1":"")+y;if(e&&(j+=" "+o(e.replace(/ ?[\r\n]+/g," ")),s&&s()),f)return r=r.replace(/\n+/g,`$&${l}`),`${j}
${l}${O}${r}${h}`;r=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);const S=ca(`${O}${r}${h}`,l,qi,la(n));return`${j}
${l}${S}`}function Nh(e,t,r,n){const{type:s,value:a}=e,{actualString:i,implicitKey:o,indent:c,inFlow:l}=t;if(o&&/[\n[\]{},]/.test(a)||l&&/[[\]{},]/.test(a))return Tn(a,t);if(!a||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return o||l||!a.includes(`
`)?Tn(a,t):Ns(e,t,r,n);if(!o&&!l&&s!==ee.PLAIN&&a.includes(`
`))return Ns(e,t,r,n);if(c===""&&fa(a))return t.forceBlockIndent=!0,Ns(e,t,r,n);const f=a.replace(/\n+/g,`$&
${c}`);if(i){const y=P=>{var m;return P.default&&P.tag!=="tag:yaml.org,2002:str"&&((m=P.test)==null?void 0:m.test(f))},{compat:p,tags:h}=t.doc.schema;if(h.some(y)||(p==null?void 0:p.some(y)))return Tn(a,t)}return o?f:ca(f,c,ap,la(t))}function Hn(e,t,r,n){const{implicitKey:s,inFlow:a}=t,i=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:o}=e;o!==ee.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value)&&(o=ee.QUOTE_DOUBLE);const c=f=>{switch(f){case ee.BLOCK_FOLDED:case ee.BLOCK_LITERAL:return s||a?Tn(i.value,t):Ns(i,t,r,n);case ee.QUOTE_DOUBLE:return Nn(i.value,t);case ee.QUOTE_SINGLE:return Li(i.value,t);case ee.PLAIN:return Nh(i,t,r,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:f,defaultStringType:y}=t.options,p=s&&f||y;if(l=c(p),l===null)throw new Error(`Unsupported default string type ${p}`)}return l}function ip(e,t){const r=Object.assign({blockQuote:!0,commentString:_h,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let n;switch(r.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:e,indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:n,options:r}}function Th(e,t){var s,a,i,o;if(t.tag){const c=e.filter(l=>l.tag===t.tag);if(c.length>0)return(s=c.find(l=>l.format===t.format))!=null?s:c[0]}let r,n;if(be(t)){n=t.value;const c=e.filter(l=>{var f;return(f=l.identify)==null?void 0:f.call(l,n)});r=(a=c.find(l=>l.format===t.format))!=null?a:c.find(l=>!l.format)}else n=t,r=e.find(c=>c.nodeClass&&n instanceof c.nodeClass);if(!r){const c=(o=(i=n==null?void 0:n.constructor)==null?void 0:i.name)!=null?o:typeof n;throw new Error(`Tag not resolved for ${c} value`)}return r}function Rh(e,t,{anchors:r,doc:n}){if(!n.directives)return"";const s=[],a=(be(e)||je(e))&&e.anchor;a&&tp(a)&&(r.add(a),s.push(`&${a}`));const i=e.tag?e.tag:t.default?null:t.tag;return i&&s.push(n.directives.tagString(i)),s.join(" ")}function or(e,t,r,n){var c,l;if(Ee(e))return e.toString(t,r,n);if(fr(e)){if(t.doc.directives)return e.toString(t);if((c=t.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let s;const a=_e(e)?e:t.doc.createNode(e,{onTagObj:f=>s=f});s||(s=Th(t.doc.schema.tags,a));const i=Rh(a,s,t);i.length>0&&(t.indentAtStart=((l=t.indentAtStart)!=null?l:0)+i.length+1);const o=typeof s.stringify=="function"?s.stringify(a,t,r,n):be(a)?Hn(a,t,r,n):a.toString(t,r,n);return i?be(a)||o[0]==="{"||o[0]==="["?`${i} ${o}`:`${i}
${t.indent}${o}`:o}function Dh({key:e,value:t},r,n,s){const{allNullValues:a,doc:i,indent:o,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:y}}=r;let p=_e(e)&&e.comment||null;if(y){if(p)throw new Error("With simple keys, key nodes cannot have comments");if(je(e)){const A="With simple keys, collection cannot be used as a key value";throw new Error(A)}}let h=!y&&(!e||p&&t==null&&!r.inFlow||je(e)||(be(e)?e.type===ee.BLOCK_FOLDED||e.type===ee.BLOCK_LITERAL:typeof e=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!h&&(y||!a),indent:o+c});let P=!1,m=!1,d=or(e,r,()=>P=!0,()=>m=!0);if(!h&&!r.inFlow&&d.length>1024){if(y)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");h=!0}if(r.inFlow){if(a||t==null)return P&&n&&n(),d===""?"?":h?`? ${d}`:d}else if(a&&!y||t==null&&h)return d=`? ${d}`,p&&!P?d+=Bt(d,r.indent,l(p)):m&&s&&s(),d;P&&(p=null),h?(p&&(d+=Bt(d,r.indent,l(p))),d=`? ${d}
${o}:`):(d=`${d}:`,p&&(d+=Bt(d,r.indent,l(p))));let v="",O=null;if(_e(t)){if(t.spaceBefore&&(v=`
`),t.commentBefore){const A=l(t.commentBefore);v+=`
${Ct(A,r.indent)}`}O=t.comment}else t&&typeof t=="object"&&(t=i.createNode(t));r.implicitKey=!1,!h&&!p&&be(t)&&(r.indentAtStart=d.length+1),m=!1,!f&&c.length>=2&&!r.inFlow&&!h&&en(t)&&!t.flow&&!t.tag&&!t.anchor&&(r.indent=r.indent.substr(2));let b=!1;const j=or(t,r,()=>b=!0,()=>m=!0);let S=" ";return v||p?j===""&&!r.inFlow?S=v===`
`?`

`:v:S=`${v}
${r.indent}`:!h&&je(t)?(!(j[0]==="["||j[0]==="{")||j.includes(`
`))&&(S=`
${r.indent}`):(j===""||j[0]===`
`)&&(S=""),d+=S+j,r.inFlow?b&&n&&n():O&&!b?d+=Bt(d,r.indent,l(O)):m&&s&&s(),d}function op(e,t){(e==="debug"||e==="warn")&&(typeof process!="undefined"&&process.emitWarning?process.emitWarning(t):console.warn(t))}const Xc="<<";function cp(e,t,{key:r,value:n}){if((e==null?void 0:e.doc.schema.merge)&&qh(r))if(n=fr(n)?n.resolve(e.doc):n,en(n))for(const s of n.items)Ba(e,t,s);else if(Array.isArray(n))for(const s of n)Ba(e,t,s);else Ba(e,t,n);else{const s=kt(r,"",e);if(t instanceof Map)t.set(s,kt(n,s,e));else if(t instanceof Set)t.add(s);else{const a=Lh(r,s,e),i=kt(n,a,e);a in t?Object.defineProperty(t,a,{value:i,writable:!0,enumerable:!0,configurable:!0}):t[a]=i}}return t}const qh=e=>e===Xc||be(e)&&e.value===Xc&&(!e.type||e.type===ee.PLAIN);function Ba(e,t,r){const n=e&&fr(r)?r.resolve(e.doc):r;if(!ur(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,e,Map);for(const[a,i]of s)t instanceof Map?t.has(a)||t.set(a,i):t instanceof Set?t.add(a):Object.prototype.hasOwnProperty.call(t,a)||Object.defineProperty(t,a,{value:i,writable:!0,enumerable:!0,configurable:!0});return t}function Lh(e,t,r){if(t===null)return"";if(typeof t!="object")return String(t);if(_e(e)&&r&&r.doc){const n=ip(r.doc,{});n.anchors=new Set;for(const a of r.anchors.keys())n.anchors.add(a.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=e.toString(n);if(!r.mapKeyWarned){let a=JSON.stringify(s);a.length>40&&(a=a.substring(0,36)+'..."'),op(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return s}return JSON.stringify(t)}function go(e,t,r){const n=qn(e,void 0,r),s=qn(t,void 0,r);return new Le(n,s)}class Le{constructor(t,r=null){Object.defineProperty(this,st,{value:Xu}),this.key=t,this.value=r}clone(t){let{key:r,value:n}=this;return _e(r)&&(r=r.clone(t)),_e(n)&&(n=n.clone(t)),new Le(r,n)}toJSON(t,r){const n=r!=null&&r.mapAsMap?new Map:{};return cp(r,n,this)}toString(t,r,n){return t!=null&&t.doc?Dh(this,t,r,n):JSON.stringify(this)}}function lp(e,t,r){var a;return(((a=t.inFlow)!=null?a:e.flow)?Vh:Mh)(e,t,r)}function Mh({comment:e,items:t},r,{blockItemPrefix:n,flowChars:s,itemIndent:a,onChompKeep:i,onComment:o}){const{indent:c,options:{commentString:l}}=r,f=Object.assign({},r,{indent:a,type:null});let y=!1;const p=[];for(let P=0;P<t.length;++P){const m=t[P];let d=null;if(_e(m))!y&&m.spaceBefore&&p.push(""),Ws(r,p,m.commentBefore,y),m.comment&&(d=m.comment);else if(Ee(m)){const O=_e(m.key)?m.key:null;O&&(!y&&O.spaceBefore&&p.push(""),Ws(r,p,O.commentBefore,y))}y=!1;let v=or(m,f,()=>d=null,()=>y=!0);d&&(v+=Bt(v,a,l(d))),y&&d&&(y=!1),p.push(n+v)}let h;if(p.length===0)h=s.start+s.end;else{h=p[0];for(let P=1;P<p.length;++P){const m=p[P];h+=m?`
${c}${m}`:`
`}}return e?(h+=`
`+Ct(l(e),c),o&&o()):y&&i&&i(),h}function Vh({comment:e,items:t},r,{flowChars:n,itemIndent:s,onComment:a}){const{indent:i,indentStep:o,options:{commentString:c}}=r;s+=o;const l=Object.assign({},r,{indent:s,inFlow:!0,type:null});let f=!1,y=0;const p=[];for(let d=0;d<t.length;++d){const v=t[d];let O=null;if(_e(v))v.spaceBefore&&p.push(""),Ws(r,p,v.commentBefore,!1),v.comment&&(O=v.comment);else if(Ee(v)){const j=_e(v.key)?v.key:null;j&&(j.spaceBefore&&p.push(""),Ws(r,p,j.commentBefore,!1),j.comment&&(f=!0));const S=_e(v.value)?v.value:null;S?(S.comment&&(O=S.comment),S.commentBefore&&(f=!0)):v.value==null&&j&&j.comment&&(O=j.comment)}O&&(f=!0);let b=or(v,l,()=>O=null);d<t.length-1&&(b+=","),O&&(b+=Bt(b,s,c(O))),!f&&(p.length>y||b.includes(`
`))&&(f=!0),p.push(b),y=p.length}let h;const{start:P,end:m}=n;if(p.length===0)h=P+m;else if(f||(f=p.reduce((v,O)=>v+O.length+2,2)>oa.maxFlowStringSingleLineLength),f){h=P;for(const d of p)h+=d?`
${o}${i}${d}`:`
`;h+=`
${i}${m}`}else h=`${P} ${p.join(" ")} ${m}`;return e&&(h+=Bt(h,c(e),i),a&&a()),h}function Ws({indent:e,options:{commentString:t}},r,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const a=Ct(t(n),e);r.push(a.trimStart())}}function rr(e,t){const r=be(t)?t.value:t;for(const n of e)if(Ee(n)&&(n.key===t||n.key===r||be(n.key)&&n.key.value===r))return n}class nt extends oa{constructor(t){super(Jt,t),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(t,r){var i;let n;Ee(t)?n=t:!t||typeof t!="object"||!("key"in t)?n=new Le(t,t==null?void 0:t.value):n=new Le(t.key,t.value);const s=rr(this.items,n.key),a=(i=this.schema)==null?void 0:i.sortMapEntries;if(s){if(!r)throw new Error(`Key ${n.key} already set`);be(s.value)&&sp(n.value)?s.value.value=n.value:s.value=n.value}else if(a){const o=this.items.findIndex(c=>a(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(t){const r=rr(this.items,t);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(t,r){var a;const n=rr(this.items,t),s=n==null?void 0:n.value;return(a=!r&&be(s)?s.value:s)!=null?a:void 0}has(t){return!!rr(this.items,t)}set(t,r){this.add(new Le(t,r),!0)}toJSON(t,r,n){const s=n?new n:r!=null&&r.mapAsMap?new Map:{};r!=null&&r.onCreate&&r.onCreate(s);for(const a of this.items)cp(r,s,a);return s}toString(t,r,n){if(!t)return JSON.stringify(this);for(const s of this.items)if(!Ee(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),lp(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:n,onComment:r})}}function Uh(e,t,r){const{keepUndefined:n,replacer:s}=r,a=new nt(e),i=(o,c)=>{if(typeof s=="function")c=s.call(t,o,c);else if(Array.isArray(s)&&!s.includes(o))return;(c!==void 0||n)&&a.items.push(go(o,c,r))};if(t instanceof Map)for(const[o,c]of t)i(o,c);else if(t&&typeof t=="object")for(const o of Object.keys(t))i(o,t[o]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}const tn={collection:"map",createNode:Uh,default:!0,nodeClass:nt,tag:"tag:yaml.org,2002:map",resolve(e,t){return ur(e)||t("Expected a mapping for this tag"),e}};class pr extends oa{constructor(t){super(Zr,t),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(t){this.items.push(t)}delete(t){const r=Is(t);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(t,r){const n=Is(t);if(typeof n!="number")return;const s=this.items[n];return!r&&be(s)?s.value:s}has(t){const r=Is(t);return typeof r=="number"&&r<this.items.length}set(t,r){const n=Is(t);if(typeof n!="number")throw new Error(`Expected a valid index, not ${t}.`);const s=this.items[n];be(s)&&sp(r)?s.value=r:this.items[n]=r}toJSON(t,r){const n=[];r!=null&&r.onCreate&&r.onCreate(n);let s=0;for(const a of this.items)n.push(kt(a,String(s++),r));return n}toString(t,r,n){return t?lp(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:n,onComment:r}):JSON.stringify(this)}}function Is(e){let t=be(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}function Bh(e,t,r){const{replacer:n}=r,s=new pr(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let i of t){if(typeof n=="function"){const o=t instanceof Set?i:String(a++);i=n.call(t,o,i)}s.items.push(qn(i,void 0,r))}}return s}const rn={collection:"seq",createNode:Bh,default:!0,nodeClass:pr,tag:"tag:yaml.org,2002:seq",resolve(e,t){return en(e)||t("Expected a sequence for this tag"),e}},ua={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,r,n){return t=Object.assign({actualString:!0},t),Hn(e,t,r,n)}},pa={identify:e=>e==null,createNode:()=>new ee(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new ee(null),stringify:({source:e},t)=>typeof e=="string"&&pa.test.test(e)?e:t.options.nullStr},vo={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new ee(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},r){if(e&&vo.test.test(e)){const n=e[0]==="t"||e[0]==="T";if(t===n)return e}return t?r.options.trueStr:r.options.falseStr}};function mt({format:e,minFractionDigits:t,tag:r,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let a=JSON.stringify(n);if(!e&&t&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(a)){let i=a.indexOf(".");i<0&&(i=a.length,a+=".");let o=t-(a.length-i-1);for(;o-- >0;)a+="0"}return a}const fp={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:mt},up={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():mt(e)}},pp={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new ee(parseFloat(e)),r=e.indexOf(".");return r!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-r-1),t},stringify:mt},ma=e=>typeof e=="bigint"||Number.isInteger(e),bo=(e,t,r,{intAsBigInt:n})=>n?BigInt(e):parseInt(e.substring(t),r);function mp(e,t,r){const{value:n}=e;return ma(n)&&n>=0?r+n.toString(t):mt(e)}const dp={identify:e=>ma(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,r)=>bo(e,2,8,r),stringify:e=>mp(e,8,"0o")},hp={identify:ma,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,r)=>bo(e,0,10,r),stringify:mt},yp={identify:e=>ma(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,r)=>bo(e,2,16,r),stringify:e=>mp(e,16,"0x")},Fh=[tn,rn,ua,pa,vo,dp,hp,yp,fp,up,pp];function Yc(e){return typeof e=="bigint"||Number.isInteger(e)}const ws=({value:e})=>JSON.stringify(e),Kh=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:ws},{identify:e=>e==null,createNode:()=>new ee(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:ws},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:e=>e==="true",stringify:ws},{identify:Yc,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:r})=>r?BigInt(e):parseInt(e,10),stringify:({value:e})=>Yc(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:ws}],Jh={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},zh=[tn,rn].concat(Kh,Jh),So={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof Buffer=="function")return Buffer.from(e,"base64");if(typeof atob=="function"){const r=atob(e.replace(/[\n\r]/g,"")),n=new Uint8Array(r.length);for(let s=0;s<r.length;++s)n[s]=r.charCodeAt(s);return n}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:r},n,s,a){const i=r;let o;if(typeof Buffer=="function")o=i instanceof Buffer?i.toString("base64"):Buffer.from(i.buffer).toString("base64");else if(typeof btoa=="function"){let c="";for(let l=0;l<i.length;++l)c+=String.fromCharCode(i[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t||(t=ee.BLOCK_LITERAL),t!==ee.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),f=new Array(l);for(let y=0,p=0;y<l;++y,p+=c)f[y]=o.substr(p,c);o=f.join(t===ee.BLOCK_LITERAL?`
`:" ")}return Hn({comment:e,type:t,value:o},n,s,a)}};function $p(e,t){var r;if(en(e))for(let n=0;n<e.items.length;++n){let s=e.items[n];if(!Ee(s)){if(ur(s)){s.items.length>1&&t("Each pair must have its own sequence indicator");const a=s.items[0]||new Le(new ee(null));if(s.commentBefore&&(a.key.commentBefore=a.key.commentBefore?`${s.commentBefore}
${a.key.commentBefore}`:s.commentBefore),s.comment){const i=(r=a.value)!=null?r:a.key;i.comment=i.comment?`${s.comment}
${i.comment}`:s.comment}s=a}e.items[n]=Ee(s)?s:new Le(s)}}else t("Expected a sequence for this tag");return e}function gp(e,t,r){const{replacer:n}=r,s=new pr(e);s.tag="tag:yaml.org,2002:pairs";let a=0;if(t&&Symbol.iterator in Object(t))for(let i of t){typeof n=="function"&&(i=n.call(t,String(a++),i));let o,c;if(Array.isArray(i))if(i.length===2)o=i[0],c=i[1];else throw new TypeError(`Expected [key, value] tuple: ${i}`);else if(i&&i instanceof Object){const l=Object.keys(i);if(l.length===1)o=l[0],c=i[o];else throw new TypeError(`Expected { key: value } tuple: ${i}`)}else o=i;s.items.push(go(o,c,r))}return s}const Io={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:$p,createNode:gp};class Ur extends pr{constructor(){super(),this.add=nt.prototype.add.bind(this),this.delete=nt.prototype.delete.bind(this),this.get=nt.prototype.get.bind(this),this.has=nt.prototype.has.bind(this),this.set=nt.prototype.set.bind(this),this.tag=Ur.tag}toJSON(t,r){if(!r)return super.toJSON(t);const n=new Map;r!=null&&r.onCreate&&r.onCreate(n);for(const s of this.items){let a,i;if(Ee(s)?(a=kt(s.key,"",r),i=kt(s.value,a,r)):a=kt(s,"",r),n.has(a))throw new Error("Ordered maps must not include duplicate keys");n.set(a,i)}return n}}Ur.tag="tag:yaml.org,2002:omap";const wo={collection:"seq",identify:e=>e instanceof Map,nodeClass:Ur,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const r=$p(e,t),n=[];for(const{key:s}of r.items)be(s)&&(n.includes(s.value)?t(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Ur,r)},createNode(e,t,r){const n=gp(e,t,r),s=new Ur;return s.items=n.items,s}};function vp({value:e,source:t},r){return t&&(e?bp:Sp).test.test(t)?t:e?r.options.trueStr:r.options.falseStr}const bp={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new ee(!0),stringify:vp},Sp={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new ee(!1),stringify:vp},Gh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:mt},Hh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():mt(e)}},Wh={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new ee(parseFloat(e.replace(/_/g,""))),r=e.indexOf(".");if(r!==-1){const n=e.substring(r+1).replace(/_/g,"");n[n.length-1]==="0"&&(t.minFractionDigits=n.length)}return t},stringify:mt},Wn=e=>typeof e=="bigint"||Number.isInteger(e);function da(e,t,r,{intAsBigInt:n}){const s=e[0];if((s==="-"||s==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),n){switch(r){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const i=BigInt(e);return s==="-"?BigInt(-1)*i:i}const a=parseInt(e,r);return s==="-"?-1*a:a}function Oo(e,t,r){const{value:n}=e;if(Wn(n)){const s=n.toString(t);return n<0?"-"+r+s.substr(1):r+s}return mt(e)}const Xh={identify:Wn,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,r)=>da(e,2,2,r),stringify:e=>Oo(e,2,"0b")},Yh={identify:Wn,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,r)=>da(e,1,8,r),stringify:e=>Oo(e,8,"0")},Qh={identify:Wn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,r)=>da(e,0,10,r),stringify:mt},Zh={identify:Wn,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,r)=>da(e,2,16,r),stringify:e=>Oo(e,16,"0x")};class Br extends nt{constructor(t){super(t),this.tag=Br.tag}add(t){let r;Ee(t)?r=t:typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?r=new Le(t.key,null):r=new Le(t,null),rr(this.items,r.key)||this.items.push(r)}get(t,r){const n=rr(this.items,t);return!r&&Ee(n)?be(n.key)?n.key.value:n.key:n}set(t,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const n=rr(this.items,t);n&&!r?this.items.splice(this.items.indexOf(n),1):!n&&r&&this.items.push(new Le(t))}toJSON(t,r){return super.toJSON(t,r,Set)}toString(t,r,n){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),r,n);throw new Error("Set items must all have null values")}}Br.tag="tag:yaml.org,2002:set";const Eo={collection:"map",identify:e=>e instanceof Set,nodeClass:Br,default:!1,tag:"tag:yaml.org,2002:set",resolve(e,t){if(ur(e)){if(e.hasAllNullValues(!0))return Object.assign(new Br,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e},createNode(e,t,r){const{replacer:n}=r,s=new Br(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof n=="function"&&(a=n.call(t,a,a)),s.items.push(go(a,null,r));return s}};function Po(e,t){const r=e[0],n=r==="-"||r==="+"?e.substring(1):e,s=i=>t?BigInt(i):Number(i),a=n.replace(/_/g,"").split(":").reduce((i,o)=>i*s(60)+s(o),s(0));return r==="-"?s(-1)*a:a}function Ip(e){let{value:t}=e,r=i=>i;if(typeof t=="bigint")r=i=>BigInt(i);else if(isNaN(t)||!isFinite(t))return mt(e);let n="";t<0&&(n="-",t*=r(-1));const s=r(60),a=[t%s];return t<60?a.unshift(0):(t=(t-a[0])/s,a.unshift(t%s),t>=60&&(t=(t-a[0])/s,a.unshift(t))),n+a.map(i=>i<10?"0"+String(i):String(i)).join(":").replace(/000000\d*$/,"")}const wp={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:r})=>Po(e,r),stringify:Ip},Op={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>Po(e,!1),stringify:Ip},ha={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(ha.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,n,s,a,i,o]=t.map(Number),c=t[7]?Number((t[7]+"00").substr(1,3)):0;let l=Date.UTC(r,n-1,s,a||0,i||0,o||0,c);const f=t[8];if(f&&f!=="Z"){let y=Po(f,!1);Math.abs(y)<30&&(y*=60),l-=6e4*y}return new Date(l)},stringify:({value:e})=>e.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},Qc=[tn,rn,ua,pa,bp,Sp,Xh,Yh,Qh,Zh,Gh,Hh,Wh,So,wo,Io,Eo,wp,Op,ha],Zc=new Map([["core",Fh],["failsafe",[tn,rn,ua]],["json",zh],["yaml11",Qc],["yaml-1.1",Qc]]),el={binary:So,bool:vo,float:pp,floatExp:up,floatNaN:fp,floatTime:Op,int:hp,intHex:yp,intOct:dp,intTime:wp,map:tn,null:pa,omap:wo,pairs:Io,seq:rn,set:Eo,timestamp:ha},ey={"tag:yaml.org,2002:binary":So,"tag:yaml.org,2002:omap":wo,"tag:yaml.org,2002:pairs":Io,"tag:yaml.org,2002:set":Eo,"tag:yaml.org,2002:timestamp":ha};function Fa(e,t){let r=Zc.get(t);if(!r)if(Array.isArray(e))r=[];else{const n=Array.from(Zc.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${n} or define customTags array`)}if(Array.isArray(e))for(const n of e)r=r.concat(n);else typeof e=="function"&&(r=e(r.slice()));return r.map(n=>{if(typeof n!="string")return n;const s=el[n];if(s)return s;const a=Object.keys(el).map(i=>JSON.stringify(i)).join(", ");throw new Error(`Unknown custom tag "${n}"; use one of ${a}`)})}const ty=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class ya{constructor({compat:t,customTags:r,merge:n,resolveKnownTags:s,schema:a,sortMapEntries:i,toStringDefaults:o}){this.compat=Array.isArray(t)?Fa(t,"compat"):t?Fa(null,t):null,this.merge=!!n,this.name=typeof a=="string"&&a||"core",this.knownTags=s?ey:{},this.tags=Fa(r,this.name),this.toStringOptions=o!=null?o:null,Object.defineProperty(this,Jt,{value:tn}),Object.defineProperty(this,Rt,{value:ua}),Object.defineProperty(this,Zr,{value:rn}),this.sortMapEntries=typeof i=="function"?i:i===!0?ty:null}clone(){const t=Object.create(ya.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function ry(e,t){var c;const r=[];let n=t.directives===!0;if(t.directives!==!1&&e.directives){const l=e.directives.toString(e);l?(r.push(l),n=!0):e.directives.docStart&&(n=!0)}n&&r.push("---");const s=ip(e,t),{commentString:a}=s.options;if(e.commentBefore){r.length!==1&&r.unshift("");const l=a(e.commentBefore);r.unshift(Ct(l,""))}let i=!1,o=null;if(e.contents){if(_e(e.contents)){if(e.contents.spaceBefore&&n&&r.push(""),e.contents.commentBefore){const y=a(e.contents.commentBefore);r.push(Ct(y,""))}s.forceBlockIndent=!!e.comment,o=e.contents.comment}const l=o?void 0:()=>i=!0;let f=or(e.contents,s,()=>o=null,l);o&&(f+=Bt(f,"",a(o))),(f[0]==="|"||f[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${f}`:r.push(f)}else r.push(or(e.contents,s));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const l=a(e.comment);l.includes(`
`)?(r.push("..."),r.push(Ct(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=e.comment;l&&i&&(l=l.replace(/^\n+/,"")),l&&((!i||o)&&r[r.length-1]!==""&&r.push(""),r.push(Ct(a(l),"")))}return r.join(`
`)+`
`}function _n(e,t,r,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,a=n.length;s<a;++s){const i=n[s],o=_n(e,n,String(s),i);o===void 0?delete n[s]:o!==i&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const a=n.get(s),i=_n(e,n,s,a);i===void 0?n.delete(s):i!==a&&n.set(s,i)}else if(n instanceof Set)for(const s of Array.from(n)){const a=_n(e,n,s,s);a===void 0?n.delete(s):a!==s&&(n.delete(s),n.add(a))}else for(const[s,a]of Object.entries(n)){const i=_n(e,n,s,a);i===void 0?delete n[s]:i!==a&&(n[s]=i)}return e.call(t,r,n)}class nn{constructor(t,r,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,st,{value:Di});let s=null;typeof r=="function"||Array.isArray(r)?s=r:n===void 0&&r&&(n=r,r=void 0);const a=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,uniqueKeys:!0,version:"1.2"},n);this.options=a;let{version:i}=a;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(i=this.directives.yaml.version)):this.directives=new Me({version:i}),this.setSchema(i,n),t===void 0?this.contents=null:this.contents=this.createNode(t,s,n)}clone(){const t=Object.create(nn.prototype,{[st]:{value:Di}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=_e(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){wr(this.contents)&&this.contents.add(t)}addIn(t,r){wr(this.contents)&&this.contents.addIn(t,r)}createAlias(t,r){if(!t.anchor){const n=rp(this);t.anchor=!r||n.has(r)?np(r||"a",n):r}return new ia(t.anchor)}createNode(t,r,n){let s;if(typeof r=="function")t=r.call({"":t},"",t),s=r;else if(Array.isArray(r)){const d=O=>typeof O=="number"||O instanceof String||O instanceof Number,v=r.filter(d).map(String);v.length>0&&(r=r.concat(v)),s=r}else n===void 0&&r&&(n=r,r=void 0);const{aliasDuplicateObjects:a,anchorPrefix:i,flow:o,keepUndefined:c,onTagObj:l,tag:f}=n!=null?n:{},{onAnchor:y,setAnchors:p,sourceObjects:h}=jh(this,i||"a"),P={aliasDuplicateObjects:a!=null?a:!0,keepUndefined:c!=null?c:!1,onAnchor:y,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:h},m=qn(t,f,P);return o&&je(m)&&(m.flow=!0),p(),m}createPair(t,r,n={}){const s=this.createNode(t,null,n),a=this.createNode(r,null,n);return new Le(s,a)}delete(t){return wr(this.contents)?this.contents.delete(t):!1}deleteIn(t){return xn(t)?this.contents==null?!1:(this.contents=null,!0):wr(this.contents)?this.contents.deleteIn(t):!1}get(t,r){return je(this.contents)?this.contents.get(t,r):void 0}getIn(t,r){return xn(t)?!r&&be(this.contents)?this.contents.value:this.contents:je(this.contents)?this.contents.getIn(t,r):void 0}has(t){return je(this.contents)?this.contents.has(t):!1}hasIn(t){return xn(t)?this.contents!==void 0:je(this.contents)?this.contents.hasIn(t):!1}set(t,r){this.contents==null?this.contents=Hs(this.schema,[t],r):wr(this.contents)&&this.contents.set(t,r)}setIn(t,r){xn(t)?this.contents=r:this.contents==null?this.contents=Hs(this.schema,Array.from(t),r):wr(this.contents)&&this.contents.setIn(t,r)}setSchema(t,r={}){typeof t=="number"&&(t=String(t));let n;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Me({version:"1.1"}),n={merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Me({version:t}),n={merge:!1,resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(n)this.schema=new ya(Object.assign(n,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:r,mapAsMap:n,maxAliasCount:s,onAnchor:a,reviver:i}={}){const o={anchors:new Map,doc:this,keep:!t,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100,stringify:or},c=kt(this.contents,r!=null?r:"",o);if(typeof a=="function")for(const{count:l,res:f}of o.anchors.values())a(f,l);return typeof i=="function"?_n(i,{"":c},"",c):c}toJSON(t,r){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:r})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const r=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return ry(this,t)}}function wr(e){if(je(e))return!0;throw new Error("Expected a YAML collection as document contents")}class ko extends Error{constructor(t,r,n,s){super(),this.name=t,this.code=n,this.message=s,this.pos=r}}class nr extends ko{constructor(t,r,n){super("YAMLParseError",t,r,n)}}class Ep extends ko{constructor(t,r,n){super("YAMLWarning",t,r,n)}}const Xs=(e,t)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(o=>t.linePos(o));const{line:n,col:s}=r.linePos[0];r.message+=` at line ${n}, column ${s}`;let a=s-1,i=e.substring(t.lineStarts[n-1],t.lineStarts[n]).replace(/[\n\r]+$/,"");if(a>=60&&i.length>80){const o=Math.min(a-39,i.length-79);i="\u2026"+i.substring(o),a-=o-1}if(i.length>80&&(i=i.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(i.substring(0,a))){let o=e.substring(t.lineStarts[n-2],t.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`\u2026
`),i=o+i}if(/[^ ]/.test(i)){let o=1;const c=r.linePos[1];c&&c.line===n&&c.col>s&&(o=Math.min(c.col-s,80-a));const l=" ".repeat(a)+"^".repeat(o);r.message+=`:

${i}
${l}
`}};function Jr(e,{flow:t,indicator:r,next:n,offset:s,onError:a,startOnNewline:i}){let o=!1,c=i,l=i,f="",y="",p=!1,h=!1,P=!1,m=null,d=null,v=null,O=null,b=null;for(const A of e)switch(P&&(A.type!=="space"&&A.type!=="newline"&&A.type!=="comma"&&a(A.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),P=!1),A.type){case"space":!t&&c&&r!=="doc-start"&&A.source[0]==="	"&&a(A,"TAB_AS_INDENT","Tabs are not allowed as indentation"),l=!0;break;case"comment":{l||a(A,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const G=A.source.substring(1)||" ";f?f+=y+G:f=G,y="",c=!1;break}case"newline":c?f?f+=A.source:o=!0:y+=A.source,c=!0,p=!0,(m||d)&&(h=!0),l=!0;break;case"anchor":m&&a(A,"MULTIPLE_ANCHORS","A node can have at most one anchor"),A.source.endsWith(":")&&a(A.offset+A.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),m=A,b===null&&(b=A.offset),c=!1,l=!1,P=!0;break;case"tag":{d&&a(A,"MULTIPLE_TAGS","A node can have at most one tag"),d=A,b===null&&(b=A.offset),c=!1,l=!1,P=!0;break}case r:(m||d)&&a(A,"BAD_PROP_ORDER",`Anchors and tags must be after the ${A.source} indicator`),O&&a(A,"UNEXPECTED_TOKEN",`Unexpected ${A.source} in ${t!=null?t:"collection"}`),O=A,c=!1,l=!1;break;case"comma":if(t){v&&a(A,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),v=A,c=!1,l=!1;break}default:a(A,"UNEXPECTED_TOKEN",`Unexpected ${A.type} token`),c=!1,l=!1}const j=e[e.length-1],S=j?j.offset+j.source.length:s;return P&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&a(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),{comma:v,found:O,spaceBefore:o,comment:f,hasNewline:p,hasNewlineAfterProp:h,anchor:m,tag:d,end:S,start:b!=null?b:S}}function Ln(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const r of t.start)if(r.type==="newline")return!0;if(t.sep){for(const r of t.sep)if(r.type==="newline")return!0}if(Ln(t.key)||Ln(t.value))return!0}return!1;default:return!0}}function Mi(e,t,r){if((t==null?void 0:t.type)==="flow-collection"){const n=t.end[0];n.indent===e&&(n.source==="]"||n.source==="}")&&Ln(t)&&r(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Pp(e,t,r){const{uniqueKeys:n}=e.options;if(n===!1)return!1;const s=typeof n=="function"?n:(a,i)=>a===i||be(a)&&be(i)&&a.value===i.value&&!(a.value==="<<"&&e.schema.merge);return t.some(a=>s(a.key,r))}const tl="All mapping items must start at the same column";function ny({composeNode:e,composeEmptyNode:t},r,n,s){var o;const a=new nt(r.schema);r.atRoot&&(r.atRoot=!1);let i=n.offset;for(const c of n.items){const{start:l,key:f,sep:y,value:p}=c,h=Jr(l,{indicator:"explicit-key-ind",next:f!=null?f:y==null?void 0:y[0],offset:i,onError:s,startOnNewline:!0}),P=!h.found;if(P){if(f&&(f.type==="block-seq"?s(i,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==n.indent&&s(i,"BAD_INDENT",tl)),!h.anchor&&!h.tag&&!y){h.comment&&(a.comment?a.comment+=`
`+h.comment:a.comment=h.comment);continue}(h.hasNewlineAfterProp||Ln(f))&&s(f!=null?f:l[l.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((o=h.found)==null?void 0:o.indent)!==n.indent&&s(i,"BAD_INDENT",tl);const m=h.end,d=f?e(r,f,h,s):t(r,m,l,null,h,s);r.schema.compat&&Mi(n.indent,f,s),Pp(r,a.items,d)&&s(m,"DUPLICATE_KEY","Map keys must be unique");const v=Jr(y!=null?y:[],{indicator:"map-value-ind",next:p,offset:d.range[2],onError:s,startOnNewline:!f||f.type==="block-scalar"});if(i=v.end,v.found){P&&((p==null?void 0:p.type)==="block-map"&&!v.hasNewline&&s(i,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&h.start<v.found.offset-1024&&s(d.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const O=p?e(r,p,v,s):t(r,i,y,null,v,s);r.schema.compat&&Mi(n.indent,p,s),i=O.range[2];const b=new Le(d,O);r.options.keepSourceTokens&&(b.srcToken=c),a.items.push(b)}else{P&&s(d.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(d.comment?d.comment+=`
`+v.comment:d.comment=v.comment);const O=new Le(d);r.options.keepSourceTokens&&(O.srcToken=c),a.items.push(O)}}return a.range=[n.offset,i,i],a}function sy({composeNode:e,composeEmptyNode:t},r,n,s){const a=new pr(r.schema);r.atRoot&&(r.atRoot=!1);let i=n.offset;for(const{start:o,value:c}of n.items){const l=Jr(o,{indicator:"seq-item-ind",next:c,offset:i,onError:s,startOnNewline:!0});if(i=l.end,!l.found)if(l.anchor||l.tag||c)c&&c.type==="block-seq"?s(i,"BAD_INDENT","All sequence items must start at the same column"):s(i,"MISSING_CHAR","Sequence item without - indicator");else{l.comment&&(a.comment=l.comment);continue}const f=c?e(r,c,l,s):t(r,i,o,null,l,s);r.schema.compat&&Mi(n.indent,c,s),i=f.range[2],a.items.push(f)}return a.range=[n.offset,i,i],a}function Xn(e,t,r,n){let s="";if(e){let a=!1,i="";for(const o of e){const{source:c,type:l}=o;switch(l){case"space":a=!0;break;case"comment":{r&&!a&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";s?s+=i+f:s=f,i="";break}case"newline":s&&(i+=c),a=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}t+=c.length}}return{comment:s,offset:t}}const Ka="Block collections are not allowed within flow collections",Ja=e=>e&&(e.type==="block-map"||e.type==="block-seq");function ay({composeNode:e,composeEmptyNode:t},r,n,s){var P;const a=n.start.source==="{",i=a?"flow map":"flow sequence",o=a?new nt(r.schema):new pr(r.schema);o.flow=!0;const c=r.atRoot;c&&(r.atRoot=!1);let l=n.offset+n.start.source.length;for(let m=0;m<n.items.length;++m){const d=n.items[m],{start:v,key:O,sep:b,value:j}=d,S=Jr(v,{flow:i,indicator:"explicit-key-ind",next:O!=null?O:b==null?void 0:b[0],offset:l,onError:s,startOnNewline:!1});if(!S.found){if(!S.anchor&&!S.tag&&!b&&!j){m===0&&S.comma?s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`):m<n.items.length-1&&s(S.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${i}`),S.comment&&(o.comment?o.comment+=`
`+S.comment:o.comment=S.comment),l=S.end;continue}!a&&r.options.strict&&Ln(O)&&s(O,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(m===0)S.comma&&s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`);else if(S.comma||s(S.start,"MISSING_CHAR",`Missing , between ${i} items`),S.comment){let A="";e:for(const G of v)switch(G.type){case"comma":case"space":break;case"comment":A=G.source.substring(1);break e;default:break e}if(A){let G=o.items[o.items.length-1];Ee(G)&&(G=(P=G.value)!=null?P:G.key),G.comment?G.comment+=`
`+A:G.comment=A,S.comment=S.comment.substring(A.length+1)}}if(!a&&!b&&!S.found){const A=j?e(r,j,S,s):t(r,S.end,b,null,S,s);o.items.push(A),l=A.range[2],Ja(j)&&s(A.range,"BLOCK_IN_FLOW",Ka)}else{const A=S.end,G=O?e(r,O,S,s):t(r,A,v,null,S,s);Ja(O)&&s(G.range,"BLOCK_IN_FLOW",Ka);const re=Jr(b!=null?b:[],{flow:i,indicator:"map-value-ind",next:j,offset:G.range[2],onError:s,startOnNewline:!1});if(re.found){if(!a&&!S.found&&r.options.strict){if(b)for(const N of b){if(N===re.found)break;if(N.type==="newline"){s(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}S.start<re.found.offset-1024&&s(re.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else j&&("source"in j&&j.source&&j.source[0]===":"?s(j,"MISSING_CHAR",`Missing space after : in ${i}`):s(re.start,"MISSING_CHAR",`Missing , or : between ${i} items`));const I=j?e(r,j,re,s):re.found?t(r,re.end,b,null,re,s):null;I?Ja(j)&&s(I.range,"BLOCK_IN_FLOW",Ka):re.comment&&(G.comment?G.comment+=`
`+re.comment:G.comment=re.comment);const C=new Le(G,I);if(r.options.keepSourceTokens&&(C.srcToken=d),a){const N=o;Pp(r,N.items,G)&&s(A,"DUPLICATE_KEY","Map keys must be unique"),N.items.push(C)}else{const N=new nt(r.schema);N.flow=!0,N.items.push(C),o.items.push(N)}l=I?I.range[2]:re.end}}const f=a?"}":"]",[y,...p]=n.end;let h=l;if(y&&y.source===f)h=y.offset+y.source.length;else{const m=i[0].toUpperCase()+i.substring(1),d=c?`${m} must end with a ${f}`:`${m} in block collection must be sufficiently indented and end with a ${f}`;s(l,c?"MISSING_CHAR":"BAD_INDENT",d),y&&y.source.length!==1&&p.unshift(y)}if(p.length>0){const m=Xn(p,h,r.options.strict,s);m.comment&&(o.comment?o.comment+=`
`+m.comment:o.comment=m.comment),o.range=[n.offset,h,m.offset]}else o.range=[n.offset,h,h];return o}function iy(e,t,r,n,s){let a;switch(r.type){case"block-map":{a=ny(e,t,r,s);break}case"block-seq":{a=sy(e,t,r,s);break}case"flow-collection":{a=ay(e,t,r,s);break}}if(!n)return a;const i=t.directives.tagName(n.source,p=>s(n,"TAG_RESOLVE_FAILED",p));if(!i)return a;const o=a.constructor;if(i==="!"||i===o.tagName)return a.tag=o.tagName,a;const c=ur(a)?"map":"seq";let l=t.schema.tags.find(p=>p.collection===c&&p.tag===i);if(!l){const p=t.schema.knownTags[i];if(p&&p.collection===c)t.schema.tags.push(Object.assign({},p,{default:!1})),l=p;else return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,!0),a.tag=i,a}const f=l.resolve(a,p=>s(n,"TAG_RESOLVE_FAILED",p),t.options),y=_e(f)?f:new ee(f);return y.range=a.range,y.tag=i,l!=null&&l.format&&(y.format=l.format),y}function kp(e,t,r){const n=e.offset,s=oy(e,t,r);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const a=s.mode===">"?ee.BLOCK_FOLDED:ee.BLOCK_LITERAL,i=e.source?cy(e.source):[];let o=i.length;for(let m=i.length-1;m>=0;--m){const d=i[m][1];if(d===""||d==="\r")o=m;else break}if(o===0){const m=s.chomp==="+"&&i.length>0?`
`.repeat(Math.max(1,i.length-1)):"";let d=n+s.length;return e.source&&(d+=e.source.length),{value:m,type:a,comment:s.comment,range:[n,d,d]}}let c=e.indent+s.indent,l=e.offset+s.length,f=0;for(let m=0;m<o;++m){const[d,v]=i[m];if(v===""||v==="\r")s.indent===0&&d.length>c&&(c=d.length);else{if(d.length<c){const O="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";r(l+d.length,"MISSING_CHAR",O)}s.indent===0&&(c=d.length),f=m;break}l+=d.length+v.length+1}for(let m=i.length-1;m>=o;--m)i[m][0].length>c&&(o=m+1);let y="",p="",h=!1;for(let m=0;m<f;++m)y+=i[m][0].slice(c)+`
`;for(let m=f;m<o;++m){let[d,v]=i[m];l+=d.length+v.length+1;const O=v[v.length-1]==="\r";if(O&&(v=v.slice(0,-1)),v&&d.length<c){const j=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;r(l-v.length-(O?2:1),"BAD_INDENT",j),d=""}a===ee.BLOCK_LITERAL?(y+=p+d.slice(c)+v,p=`
`):d.length>c||v[0]==="	"?(p===" "?p=`
`:!h&&p===`
`&&(p=`

`),y+=p+d.slice(c)+v,p=`
`,h=!0):v===""?p===`
`?y+=`
`:p=`
`:(y+=p+v,p=" ",h=!1)}switch(s.chomp){case"-":break;case"+":for(let m=o;m<i.length;++m)y+=`
`+i[m][0].slice(c);y[y.length-1]!==`
`&&(y+=`
`);break;default:y+=`
`}const P=n+s.length+e.source.length;return{value:y,type:a,comment:s.comment,range:[n,P,P]}}function oy({offset:e,props:t},r,n){if(t[0].type!=="block-scalar-header")return n(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=t[0],a=s[0];let i=0,o="",c=-1;for(let p=1;p<s.length;++p){const h=s[p];if(!o&&(h==="-"||h==="+"))o=h;else{const P=Number(h);!i&&P?i=P:c===-1&&(c=e+p)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,f="",y=s.length;for(let p=1;p<t.length;++p){const h=t[p];switch(h.type){case"space":l=!0;case"newline":y+=h.source.length;break;case"comment":r&&!l&&n(h,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),y+=h.source.length,f=h.source.substring(1);break;case"error":n(h,"UNEXPECTED_TOKEN",h.message),y+=h.source.length;break;default:{const P=`Unexpected token in block scalar header: ${h.type}`;n(h,"UNEXPECTED_TOKEN",P);const m=h.source;m&&typeof m=="string"&&(y+=m.length)}}}return{mode:a,indent:i,chomp:o,comment:f,length:y}}function cy(e){const t=e.split(/\n( *)/),r=t[0],n=r.match(/^( *)/),a=[n!=null&&n[1]?[n[1],r.slice(n[1].length)]:["",r]];for(let i=1;i<t.length;i+=2)a.push([t[i],t[i+1]]);return a}function jp(e,t,r){const{offset:n,type:s,source:a,end:i}=e;let o,c;const l=(p,h,P)=>r(n+p,h,P);switch(s){case"scalar":o=ee.PLAIN,c=ly(a,l);break;case"single-quoted-scalar":o=ee.QUOTE_SINGLE,c=fy(a,l);break;case"double-quoted-scalar":o=ee.QUOTE_DOUBLE,c=uy(a,l);break;default:return r(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+a.length,n+a.length]}}const f=n+a.length,y=Xn(i,f,t,r);return{value:c,type:o,comment:y.comment,range:[n,f,y.offset]}}function ly(e,t){let r="";switch(e[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${e[0]}`;break}case"@":case"`":{r=`reserved character ${e[0]}`;break}}return r&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),Ap(e)}function fy(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Ap(e.slice(1,-1)).replace(/''/g,"'")}function Ap(e){var c;let t,r;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=t.exec(e);if(!n)return e;let s=n[1],a=" ",i=t.lastIndex;for(r.lastIndex=i;n=r.exec(e);)n[1]===""?a===`
`?s+=a:a=`
`:(s+=a+n[1],a=" "),i=r.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=i,n=o.exec(e),s+a+((c=n==null?void 0:n[1])!=null?c:"")}function uy(e,t){let r="";for(let n=1;n<e.length-1;++n){const s=e[n];if(!(s==="\r"&&e[n+1]===`
`))if(s===`
`){const{fold:a,offset:i}=py(e,n);r+=a,n=i}else if(s==="\\"){let a=e[++n];const i=my[a];if(i)r+=i;else if(a===`
`)for(a=e[n+1];a===" "||a==="	";)a=e[++n+1];else if(a==="\r"&&e[n+1]===`
`)for(a=e[++n+1];a===" "||a==="	";)a=e[++n+1];else if(a==="x"||a==="u"||a==="U"){const o={x:2,u:4,U:8}[a];r+=dy(e,n+1,o,t),n+=o}else{const o=e.substr(n-1,2);t(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),r+=o}}else if(s===" "||s==="	"){const a=n;let i=e[n+1];for(;i===" "||i==="	";)i=e[++n+1];i!==`
`&&!(i==="\r"&&e[n+2]===`
`)&&(r+=n>a?e.slice(a,n+1):s)}else r+=s}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),r}function py(e,t){let r="",n=e[t+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&e[t+2]!==`
`);)n===`
`&&(r+=`
`),t+=1,n=e[t+1];return r||(r=" "),{fold:r,offset:t}}const my={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function dy(e,t,r,n){const s=e.substr(t,r),i=s.length===r&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(i)){const o=e.substr(t-2,r+2);return n(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(i)}function xp(e,t,r,n){const{value:s,type:a,comment:i,range:o}=t.type==="block-scalar"?kp(t,e.options.strict,n):jp(t,e.options.strict,n),c=r?e.directives.tagName(r.source,y=>n(r,"TAG_RESOLVE_FAILED",y)):null,l=r&&c?hy(e.schema,s,c,r,n):t.type==="scalar"?yy(e,s,t,n):e.schema[Rt];let f;try{const y=l.resolve(s,p=>n(r!=null?r:t,"TAG_RESOLVE_FAILED",p),e.options);f=be(y)?y:new ee(y)}catch(y){const p=y instanceof Error?y.message:String(y);n(r!=null?r:t,"TAG_RESOLVE_FAILED",p),f=new ee(s)}return f.range=o,f.source=s,a&&(f.type=a),c&&(f.tag=c),l.format&&(f.format=l.format),i&&(f.comment=i),f}function hy(e,t,r,n,s){var o;if(r==="!")return e[Rt];const a=[];for(const c of e.tags)if(!c.collection&&c.tag===r)if(c.default&&c.test)a.push(c);else return c;for(const c of a)if((o=c.test)!=null&&o.test(t))return c;const i=e.knownTags[r];return i&&!i.collection?(e.tags.push(Object.assign({},i,{default:!1,test:void 0})),i):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),e[Rt])}function yy({directives:e,schema:t},r,n,s){var i;const a=t.tags.find(o=>{var c;return o.default&&((c=o.test)==null?void 0:c.test(r))})||t[Rt];if(t.compat){const o=(i=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))}))!=null?i:t[Rt];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),f=`Value may be parsed as either ${c} or ${l}`;s(n,"TAG_RESOLVE_FAILED",f,!0)}}return a}function $y(e,t,r){if(t){r===null&&(r=t.length);for(let n=r-1;n>=0;--n){let s=t[n];switch(s.type){case"space":case"comment":case"newline":e-=s.source.length;continue}for(s=t[++n];(s==null?void 0:s.type)==="space";)e+=s.source.length,s=t[++n];break}}return e}const gy={composeNode:_p,composeEmptyNode:jo};function _p(e,t,r,n){const{spaceBefore:s,comment:a,anchor:i,tag:o}=r;let c,l=!0;switch(t.type){case"alias":c=vy(e,t,n),(i||o)&&n(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=xp(e,t,o,n),i&&(c.anchor=i.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=iy(gy,e,t,o,n),i&&(c.anchor=i.source.substring(1));break;default:{const f=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;n(t,"UNEXPECTED_TOKEN",f),c=jo(e,t.offset,void 0,null,r,n),l=!1}}return i&&c.anchor===""&&n(i,"BAD_ALIAS","Anchor cannot be an empty string"),s&&(c.spaceBefore=!0),a&&(t.type==="scalar"&&t.source===""?c.comment=a:c.commentBefore=a),e.options.keepSourceTokens&&l&&(c.srcToken=t),c}function jo(e,t,r,n,{spaceBefore:s,comment:a,anchor:i,tag:o},c){const l={type:"scalar",offset:$y(t,r,n),indent:-1,source:""},f=xp(e,l,o,c);return i&&(f.anchor=i.source.substring(1),f.anchor===""&&c(i,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(f.spaceBefore=!0),a&&(f.comment=a),f}function vy({options:e},{offset:t,source:r,end:n},s){const a=new ia(r.substring(1));a.source===""&&s(t,"BAD_ALIAS","Alias cannot be an empty string"),a.source.endsWith(":")&&s(t+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const i=t+r.length,o=Xn(n,i,e.strict,s);return a.range=[t,i,o.offset],o.comment&&(a.comment=o.comment),a}function by(e,t,{offset:r,start:n,value:s,end:a},i){const o=Object.assign({_directives:t},e),c=new nn(void 0,o),l={atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=Jr(n,{indicator:"doc-start",next:s!=null?s:a==null?void 0:a[0],offset:r,onError:i,startOnNewline:!0});f.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&i(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?_p(l,s,f,i):jo(l,f.end,n,null,f,i);const y=c.contents.range[2],p=Xn(a,y,!1,i);return p.comment&&(c.comment=p.comment),c.range=[r,y,p.offset],c}function Sn(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:r}=e;return[t,t+(typeof r=="string"?r.length:1)]}function rl(e){var s;let t="",r=!1,n=!1;for(let a=0;a<e.length;++a){const i=e[a];switch(i[0]){case"#":t+=(t===""?"":n?`

`:`
`)+(i.substring(1)||" "),r=!0,n=!1;break;case"%":((s=e[a+1])==null?void 0:s[0])!=="#"&&(a+=1),r=!1;break;default:r||(n=!0),r=!1}}return{comment:t,afterEmptyLine:n}}class Ao{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,n,s,a)=>{const i=Sn(r);a?this.warnings.push(new Ep(i,n,s)):this.errors.push(new nr(i,n,s))},this.directives=new Me({version:t.version||"1.2"}),this.options=t}decorate(t,r){const{comment:n,afterEmptyLine:s}=rl(this.prelude);if(n){const a=t.contents;if(r)t.comment=t.comment?`${t.comment}
${n}`:n;else if(s||t.directives.docStart||!a)t.commentBefore=n;else if(je(a)&&!a.flow&&a.items.length>0){let i=a.items[0];Ee(i)&&(i=i.key);const o=i.commentBefore;i.commentBefore=o?`${n}
${o}`:n}else{const i=a.commentBefore;a.commentBefore=i?`${n}
${i}`:n}}r?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:rl(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,r=!1,n=-1){for(const s of t)yield*this.next(s);yield*this.end(r,n)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(r,n,s)=>{const a=Sn(t);a[0]+=r,this.onError(a,"BAD_DIRECTIVE",n,s)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const r=by(this.options,this.directives,t,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const r=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,n=new nr(Sn(t),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new nr(Sn(t),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const r=Xn(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new nr(Sn(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const n=Object.assign({_directives:this.directives},this.options),s=new nn(void 0,n);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,r,r],this.decorate(s,!1),yield s}}}function Sy(e,t=!0,r){if(e){const n=(s,a,i)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(r)r(o,a,i);else throw new nr([o,o+1],a,i)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return jp(e,t,n);case"block-scalar":return kp(e,t,n)}}return null}function Iy(e,t){var l;const{implicitKey:r=!1,indent:n,inFlow:s=!1,offset:a=-1,type:i="PLAIN"}=t,o=Hn({type:i,value:e},{implicitKey:r,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=(l=t.end)!=null?l:[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const f=o.indexOf(`
`),y=o.substring(0,f),p=o.substring(f+1)+`
`,h=[{type:"block-scalar-header",offset:a,indent:n,source:y}];return Cp(h,c)||h.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:a,indent:n,props:h,source:p}}case'"':return{type:"double-quoted-scalar",offset:a,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:a,indent:n,source:o,end:c};default:return{type:"scalar",offset:a,indent:n,source:o,end:c}}}function wy(e,t,r={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:a=!1,type:i}=r,o="indent"in e?e.indent:null;if(n&&typeof o=="number"&&(o+=2),!i)switch(e.type){case"single-quoted-scalar":i="QUOTE_SINGLE";break;case"double-quoted-scalar":i="QUOTE_DOUBLE";break;case"block-scalar":{const l=e.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:i="PLAIN"}const c=Hn({type:i,value:t},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":Oy(e,c);break;case'"':za(e,c,"double-quoted-scalar");break;case"'":za(e,c,"single-quoted-scalar");break;default:za(e,c,"scalar")}}function Oy(e,t){const r=t.indexOf(`
`),n=t.substring(0,r),s=t.substring(r+1)+`
`;if(e.type==="block-scalar"){const a=e.props[0];if(a.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a.source=n,e.source=s}else{const{offset:a}=e,i="indent"in e?e.indent:-1,o=[{type:"block-scalar-header",offset:a,indent:i,source:n}];Cp(o,"end"in e?e.end:void 0)||o.push({type:"newline",offset:-1,indent:i,source:`
`});for(const c of Object.keys(e))c!=="type"&&c!=="offset"&&delete e[c];Object.assign(e,{type:"block-scalar",indent:i,props:o,source:s})}}function Cp(e,t){if(t)for(const r of t)switch(r.type){case"space":case"comment":e.push(r);break;case"newline":return e.push(r),!0}return!1}function za(e,t,r){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=r,e.source=t;break;case"block-scalar":{const n=e.props.slice(1);let s=t.length;e.props[0].type==="block-scalar-header"&&(s-=e.props[0].source.length);for(const a of n)a.offset+=s;delete e.props,Object.assign(e,{type:r,source:t,end:n});break}case"block-map":case"block-seq":{const n=e.offset+t.length,s={type:"newline",offset:n,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:r,source:t,end:[s]});break}default:{const n="indent"in e?e.indent:-1,s="end"in e&&Array.isArray(e.end)?e.end.filter(a=>a.type==="space"||a.type==="comment"||a.type==="newline"):[];for(const a of Object.keys(e))a!=="type"&&a!=="offset"&&delete e[a];Object.assign(e,{type:r,indent:n,source:t,end:s})}}}const Ey=e=>"type"in e?Ys(e):Ts(e);function Ys(e){switch(e.type){case"block-scalar":{let t="";for(const r of e.props)t+=Ys(r);return t+e.source}case"block-map":case"block-seq":{let t="";for(const r of e.items)t+=Ts(r);return t}case"flow-collection":{let t=e.start.source;for(const r of e.items)t+=Ts(r);for(const r of e.end)t+=r.source;return t}case"document":{let t=Ts(e);if(e.end)for(const r of e.end)t+=r.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const r of e.end)t+=r.source;return t}}}function Ts({start:e,key:t,sep:r,value:n}){let s="";for(const a of e)s+=a.source;if(t&&(s+=Ys(t)),r)for(const a of r)s+=a.source;return n&&(s+=Ys(n)),s}const Vi=Symbol("break visit"),Py=Symbol("skip children"),Np=Symbol("remove item");function cr(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),Tp(Object.freeze([]),e,t)}cr.BREAK=Vi;cr.SKIP=Py;cr.REMOVE=Np;cr.itemAtPath=(e,t)=>{let r=e;for(const[n,s]of t){const a=r==null?void 0:r[n];if(a&&"items"in a)r=a.items[s];else return}return r};cr.parentCollection=(e,t)=>{const r=cr.itemAtPath(e,t.slice(0,-1)),n=t[t.length-1][0],s=r==null?void 0:r[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function Tp(e,t,r){let n=r(t,e);if(typeof n=="symbol")return n;for(const s of["key","value"]){const a=t[s];if(a&&"items"in a){for(let i=0;i<a.items.length;++i){const o=Tp(Object.freeze(e.concat([[s,i]])),a.items[i],r);if(typeof o=="number")i=o-1;else{if(o===Vi)return Vi;o===Np&&(a.items.splice(i,1),i-=1)}}typeof n=="function"&&s==="key"&&(n=n(t,e))}}return typeof n=="function"?n(t,e):n}const $a="\uFEFF",ga="",va="",Mn="",ky=e=>!!e&&"items"in e,jy=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function Ay(e){switch(e){case $a:return"<BOM>";case ga:return"<DOC>";case va:return"<FLOW_END>";case Mn:return"<SCALAR>";default:return JSON.stringify(e)}}function Rp(e){switch(e){case $a:return"byte-order-mark";case ga:return"doc-mode";case va:return"flow-error-end";case Mn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}var xy=Object.freeze(Object.defineProperty({__proto__:null,BOM:$a,DOCUMENT:ga,FLOW_END:va,SCALAR:Mn,isCollection:ky,isScalar:jy,prettyToken:Ay,tokenType:Rp,createScalarToken:Iy,resolveAsScalar:Sy,setScalarValue:wy,stringify:Ey,visit:cr},Symbol.toStringTag,{value:"Module"}));function rt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const nl="0123456789ABCDEFabcdef".split(""),_y="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),Ga=",[]{}".split(""),Cy=` ,[]{}
\r	`.split(""),Ha=e=>!e||Cy.includes(e);class Dp{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,r=!1){var s;t&&(this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null),this.atEnd=!r;let n=(s=this.next)!=null?s:"stream";for(;n&&(r||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let t=this.pos,r=this.buffer[t];for(;r===" "||r==="	";)r=this.buffer[++t];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let r=this.buffer[t];if(this.indentNext>0){let n=0;for(;r===" ";)r=this.buffer[++n+t];if(r==="\r"){const s=this.buffer[n+t+1];if(s===`
`||!s&&!this.atEnd)return t+n+1}return r===`
`||n>=this.indentNext||!r&&!this.atEnd?t+n:-1}if(r==="-"||r==="."){const n=this.buffer.substr(t,3);if((n==="---"||n==="...")&&rt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===$a&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let r=t.length;const n=t.indexOf("#");if(n!==-1){const a=t[n-1];(a===" "||a==="	")&&(r=n-1)}for(;;){const a=t[r-1];if(a===" "||a==="	")r-=1;else break}const s=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-r),yield*this.pushNewline(),"stream"}return yield ga,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if(r==="---"&&rt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(r==="..."&&rt(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!rt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&rt(r)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(t[r]){case"#":yield*this.pushCount(t.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Ha),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,r,n=-1;do t=yield*this.pushNewline(),t>0?(r=yield*this.pushSpaces(!1),this.indentValue=n=r):r=0,r+=yield*this.pushSpaces(!0);while(t+r>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&rt(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield va,yield*this.parseLineStart();let a=0;for(;s[a]===",";)a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(a+=yield*this.pushIndicators(),s[a]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-a),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Ha),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const i=this.charAt(1);if(this.flowKey||rt(i)||i===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let r=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let a=0;for(;this.buffer[r-1-a]==="\\";)a+=1;if(a%2===0)break;r=this.buffer.indexOf('"',r+1)}const n=this.buffer.substring(0,r);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const a=this.continueScalar(s+1);if(a===-1)break;s=n.indexOf(`
`,a)}s!==-1&&(r=s-(n[s-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const r=this.buffer[++t];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>rt(r)||r==="#")}*parseBlockScalar(){let t=this.pos-1,r=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":r+=1;break;case`
`:t=s,r=0;break;case"\r":{const a=this.buffer[s+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext+=this.blockScalarIndent;do{const s=this.continueScalar(t+1);if(s===-1)break;t=this.buffer.indexOf(`
`,s)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}if(!this.blockScalarKeep)do{let s=t-1,a=this.buffer[s];a==="\r"&&(a=this.buffer[--s]);const i=s;for(;a===" "||a==="	";)a=this.buffer[--s];if(a===`
`&&s>=this.pos&&s+1+r>i)t=s;else break}while(!0);return yield Mn,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let r=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const a=this.buffer[n+1];if(rt(a)||t&&a===",")break;r=n}else if(rt(s)){let a=this.buffer[n+1];if(s==="\r"&&(a===`
`?(n+=1,s=`
`,a=this.buffer[n+1]):r=n),a==="#"||t&&Ga.includes(a))break;if(s===`
`){const i=this.continueScalar(n+1);if(i===-1)break;n=Math.max(n,i-2)}}else{if(t&&Ga.includes(s))break;r=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Mn,yield*this.pushToIndex(r+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,r){const n=this.buffer.slice(this.pos,t);return n?(yield n,this.pos+=n.length,n.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Ha))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,r=this.charAt(1);if(rt(r)||t&&Ga.includes(r))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,r=this.buffer[t];for(;!rt(r)&&r!==">";)r=this.buffer[++t];return yield*this.pushToIndex(r===">"?t+1:t,!1)}else{let t=this.pos+1,r=this.buffer[t];for(;r;)if(_y.includes(r))r=this.buffer[++t];else if(r==="%"&&nl.includes(this.buffer[t+1])&&nl.includes(this.buffer[t+2]))r=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let r=this.pos-1,n;do n=this.buffer[++r];while(n===" "||t&&n==="	");const s=r-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=r),s}*pushUntil(t){let r=this.pos,n=this.buffer[r];for(;!t(n);)n=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class qp{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let r=0,n=this.lineStarts.length;for(;r<n;){const a=r+n>>1;this.lineStarts[a]<t?r=a+1:n=a}if(this.lineStarts[r]===t)return{line:r+1,col:1};if(r===0)return{line:0,col:t};const s=this.lineStarts[r-1];return{line:r,col:t-s+1}}}}function ct(e,t){for(let r=0;r<e.length;++r)if(e[r].type===t)return!0;return!1}function sl(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function Lp(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Os(e){var t;switch(e.type){case"document":return e.start;case"block-map":{const r=e.items[e.items.length-1];return(t=r.sep)!=null?t:r.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function Or(e){var r;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((r=e[++t])==null?void 0:r.type)==="space";);return e.splice(t,e.length)}function al(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!ct(t.start,"explicit-key-ind")&&!ct(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,Lp(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class xo{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Dp,this.onNewLine=t}*parse(t,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(t,r))yield*this.next(n);r||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const r=Rp(t);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const n=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const r=t!=null?t:this.stack.pop();if(r)if(this.stack.length===0)yield r;else{const n=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in n?n.indent:0:r.type==="flow-collection"&&n.type==="document"&&(r.indent=0),r.type==="flow-collection"&&al(r),n.type){case"document":n.value=r;break;case"block-scalar":n.props.push(r);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=r;else{Object.assign(s,{key:r,sep:[]}),this.onKeyLine=!ct(s.start,"explicit-key-ind");return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:r}):s.value=r;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:r,sep:[]}):s.sep?s.value=r:Object.assign(s,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const s=r.items[r.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&sl(s.start)===-1&&(r.indent===0||s.start.every(a=>a.type!=="comment"||a.indent<r.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),r.items.splice(-1,1))}}else{const n="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:n}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{sl(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const r=this.startBlockValue(t);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const r=Os(this.peek(2)),n=Or(r);let s;t.end?(s=t.end,s.push(this.sourceToken),delete t.end):s=[this.sourceToken];const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:n,key:t,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var n;const r=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0,a=Array.isArray(s)?s[s.length-1]:void 0;(a==null?void 0:a.type)==="comment"?s==null||s.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)t.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,t.indent)){const s=t.items[t.items.length-2],a=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(a)){Array.prototype.push.apply(a,r.start),a.push(this.sourceToken),t.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const s=!this.onKeyLine&&this.indent===t.indent&&r.sep;let a=[];if(s&&r.sep&&!r.value){const i=[];for(let o=0;o<r.sep.length;++o){const c=r.sep[o];switch(c.type){case"newline":i.push(o);break;case"space":break;case"comment":c.indent>t.indent&&(i.length=0);break;default:i.length=0}}i.length>=2&&(a=r.sep.splice(i[1]))}switch(this.type){case"anchor":case"tag":s||r.value?(a.push(this.sourceToken),t.items.push({start:a}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!ct(r.start,"explicit-key-ind")?r.start.push(this.sourceToken):s||r.value?(a.push(this.sourceToken),t.items.push({start:a})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}),this.onKeyLine=!0;return;case"map-value-ind":if(ct(r.start,"explicit-key-ind"))if(r.sep)if(r.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(ct(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(Lp(r.key)&&!ct(r.sep,"newline")){const i=Or(r.start),o=r.key,c=r.sep;c.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:o,sep:c}]})}else a.length>0?r.sep=r.sep.concat(a,this.sourceToken):r.sep.push(this.sourceToken);else if(ct(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const i=Or(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||s?t.items.push({start:a,key:null,sep:[this.sourceToken]}):ct(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);s||r.value?(t.items.push({start:a,key:i,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(i):(Object.assign(r,{key:i,sep:[]}),this.onKeyLine=!0);return}default:{const i=this.startBlockValue(t);if(i){s&&i.type!=="block-seq"&&ct(r.start,"explicit-key-ind")&&t.items.push({start:a}),this.stack.push(i);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var n;const r=t.items[t.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0,a=Array.isArray(s)?s[s.length-1]:void 0;(a==null?void 0:a.type)==="comment"?s==null||s.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,t.indent)){const s=t.items[t.items.length-2],a=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(a)){Array.prototype.push.apply(a,r.start),a.push(this.sourceToken),t.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=t.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;r.value||ct(r.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>t.indent){const s=this.startBlockValue(t);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const r=t.items[t.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?t.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?t.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!r||r.value?t.items.push({start:[],key:s,sep:[]}):r.sep?this.stack.push(s):Object.assign(r,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===t.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=Os(n),a=Or(s);al(t);const i=t.end.splice(1,t.end.length);i.push(this.sourceToken);const o={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:a,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=Os(t),n=Or(r);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const r=Os(t),n=Or(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,r){return this.type!=="comment"||this.indent<=r?!1:t.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Mp(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new qp||null,prettyErrors:t}}function Ny(e,t={}){const{lineCounter:r,prettyErrors:n}=Mp(t),s=new xo(r==null?void 0:r.addNewLine),a=new Ao(t),i=Array.from(a.compose(s.parse(e)));if(n&&r)for(const o of i)o.errors.forEach(Xs(e,r)),o.warnings.forEach(Xs(e,r));return i.length>0?i:Object.assign([],{empty:!0},a.streamInfo())}function Vp(e,t={}){const{lineCounter:r,prettyErrors:n}=Mp(t),s=new xo(r==null?void 0:r.addNewLine),a=new Ao(t);let i=null;for(const o of a.compose(s.parse(e),!0,e.length))if(!i)i=o;else if(i.options.logLevel!=="silent"){i.errors.push(new nr(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&r&&(i.errors.forEach(Xs(e,r)),i.warnings.forEach(Xs(e,r))),i}function Ty(e,t,r){let n;typeof t=="function"?n=t:r===void 0&&t&&typeof t=="object"&&(r=t);const s=Vp(e,r);if(!s)return null;if(s.warnings.forEach(a=>op(s.options.logLevel,a)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},r))}function Ry(e,t,r){var s;let n=null;if(typeof t=="function"||Array.isArray(t)?n=t:r===void 0&&t&&(r=t),typeof r=="string"&&(r=r.length),typeof r=="number"){const a=Math.round(r);r=a<1?void 0:a>8?{indent:8}:{indent:a}}if(e===void 0){const{keepUndefined:a}=(s=r!=null?r:t)!=null?s:{};if(!a)return}return new nn(e,n,r).toString(r)}var Dy=Object.freeze(Object.defineProperty({__proto__:null,CST:xy,Composer:Ao,Document:nn,Schema:ya,YAMLError:ko,YAMLParseError:nr,YAMLWarning:Ep,Alias:ia,isAlias:fr,isCollection:je,isDocument:Gn,isMap:ur,isNode:_e,isPair:Ee,isScalar:be,isSeq:en,Pair:Le,Scalar:ee,YAMLMap:nt,YAMLSeq:pr,Lexer:Dp,LineCounter:qp,Parser:xo,parse:Ty,parseAllDocuments:Ny,parseDocument:Vp,stringify:Ry,visit:Gt,visitAsync:aa},Symbol.toStringTag,{value:"Module"})),_o=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Qe=qy;function qy(e,t){return function r(){t==null&&(t=e.length);var n=[].slice.call(arguments);return n.length>=t?e.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var zr={exports:{}};(function(e,t){(function(r,n){var s={};r.PubSub?(s=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=s,n(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||_o,function(r){var n={},s=-1,a="*";function i(m){var d;for(d in m)if(Object.prototype.hasOwnProperty.call(m,d))return!0;return!1}function o(m){return function(){throw m}}function c(m,d,v){try{m(d,v)}catch(O){setTimeout(o(O),0)}}function l(m,d,v){m(d,v)}function f(m,d,v,O){var b=n[d],j=O?l:c,S;if(!!Object.prototype.hasOwnProperty.call(n,d))for(S in b)Object.prototype.hasOwnProperty.call(b,S)&&j(b[S],m,v)}function y(m,d,v){return function(){var b=String(m),j=b.lastIndexOf(".");for(f(m,m,d,v);j!==-1;)b=b.substr(0,j),j=b.lastIndexOf("."),f(m,b,d,v);f(m,a,d,v)}}function p(m){var d=String(m),v=Boolean(Object.prototype.hasOwnProperty.call(n,d)&&i(n[d]));return v}function h(m){for(var d=String(m),v=p(d)||p(a),O=d.lastIndexOf(".");!v&&O!==-1;)d=d.substr(0,O),O=d.lastIndexOf("."),v=p(d);return v}function P(m,d,v,O){m=typeof m=="symbol"?m.toString():m;var b=y(m,d,O),j=h(m);return j?(v===!0?b():setTimeout(b,0),!0):!1}r.publish=function(m,d){return P(m,d,!1,r.immediateExceptions)},r.publishSync=function(m,d){return P(m,d,!0,r.immediateExceptions)},r.subscribe=function(m,d){if(typeof d!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(n,m)||(n[m]={});var v="uid_"+String(++s);return n[m][v]=d,v},r.subscribeAll=function(m){return r.subscribe(a,m)},r.subscribeOnce=function(m,d){var v=r.subscribe(m,function(){r.unsubscribe(v),d.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function(d){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&delete n[v]},r.countSubscriptions=function(d){var v,O,b=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0){for(O in n[v])b++;break}return b},r.getSubscriptions=function(d){var v,O=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&O.push(v);return O},r.unsubscribe=function(m){var d=function(re){var I;for(I in n)if(Object.prototype.hasOwnProperty.call(n,I)&&I.indexOf(re)===0)return!0;return!1},v=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(n,m)||d(m)),O=!v&&typeof m=="string",b=typeof m=="function",j=!1,S,A,G;if(v){r.clearSubscriptions(m);return}for(S in n)if(Object.prototype.hasOwnProperty.call(n,S)){if(A=n[S],O&&A[m]){delete A[m],j=m;break}if(b)for(G in A)Object.prototype.hasOwnProperty.call(A,G)&&A[G]===m&&(delete A[G],j=!0)}return j}})})(zr,zr.exports);var Ui={exports:{}};/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */(function(e,t){(function(r,n){n(t)})(_o,function(r){function n(){for(var $=arguments.length,u=Array($),g=0;g<$;g++)u[g]=arguments[g];if(u.length>1){u[0]=u[0].slice(0,-1);for(var E=u.length-1,w=1;w<E;++w)u[w]=u[w].slice(1,-1);return u[E]=u[E].slice(1),u.join("")}else return u[0]}function s($){return"(?:"+$+")"}function a($){return $===void 0?"undefined":$===null?"null":Object.prototype.toString.call($).split(" ").pop().split("]").shift().toLowerCase()}function i($){return $.toUpperCase()}function o($){return $!=null?$ instanceof Array?$:typeof $.length!="number"||$.split||$.setInterval||$.call?[$]:Array.prototype.slice.call($):[]}function c($,u){var g=$;if(u)for(var E in u)g[E]=u[E];return g}function l($){var u="[A-Za-z]",g="[0-9]",E=n(g,"[A-Fa-f]"),w=s(s("%[EFef]"+E+"%"+E+E+"%"+E+E)+"|"+s("%[89A-Fa-f]"+E+"%"+E+E)+"|"+s("%"+E+E)),L="[\\:\\/\\?\\#\\[\\]\\@]",V="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",le=n(L,V),Se=$?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",Ae=$?"[\\uE000-\\uF8FF]":"[]",ae=n(u,g,"[\\-\\.\\_\\~]",Se);s(u+n(u,g,"[\\+\\-\\.]")+"*"),s(s(w+"|"+n(ae,V,"[\\:]"))+"*");var ve=s(s("25[0-5]")+"|"+s("2[0-4]"+g)+"|"+s("1"+g+g)+"|"+s("0?[1-9]"+g)+"|0?0?"+g),xe=s(ve+"\\."+ve+"\\."+ve+"\\."+ve),Y=s(E+"{1,4}"),we=s(s(Y+"\\:"+Y)+"|"+xe),Ce=s(s(Y+"\\:")+"{6}"+we),Oe=s("\\:\\:"+s(Y+"\\:")+"{5}"+we),qt=s(s(Y)+"?\\:\\:"+s(Y+"\\:")+"{4}"+we),yt=s(s(s(Y+"\\:")+"{0,1}"+Y)+"?\\:\\:"+s(Y+"\\:")+"{3}"+we),$t=s(s(s(Y+"\\:")+"{0,2}"+Y)+"?\\:\\:"+s(Y+"\\:")+"{2}"+we),Ir=s(s(s(Y+"\\:")+"{0,3}"+Y)+"?\\:\\:"+Y+"\\:"+we),er=s(s(s(Y+"\\:")+"{0,4}"+Y)+"?\\:\\:"+we),tt=s(s(s(Y+"\\:")+"{0,5}"+Y)+"?\\:\\:"+Y),gt=s(s(s(Y+"\\:")+"{0,6}"+Y)+"?\\:\\:"),tr=s([Ce,Oe,qt,yt,$t,Ir,er,tt,gt].join("|")),xt=s(s(ae+"|"+w)+"+");s("[vV]"+E+"+\\."+n(ae,V,"[\\:]")+"+"),s(s(w+"|"+n(ae,V))+"*");var vn=s(w+"|"+n(ae,V,"[\\:\\@]"));return s(s(w+"|"+n(ae,V,"[\\@]"))+"+"),s(s(vn+"|"+n("[\\/\\?]",Ae))+"*"),{NOT_SCHEME:new RegExp(n("[^]",u,g,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(n("[^\\%\\:]",ae,V),"g"),NOT_HOST:new RegExp(n("[^\\%\\[\\]\\:]",ae,V),"g"),NOT_PATH:new RegExp(n("[^\\%\\/\\:\\@]",ae,V),"g"),NOT_PATH_NOSCHEME:new RegExp(n("[^\\%\\/\\@]",ae,V),"g"),NOT_QUERY:new RegExp(n("[^\\%]",ae,V,"[\\:\\@\\/\\?]",Ae),"g"),NOT_FRAGMENT:new RegExp(n("[^\\%]",ae,V,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(n("[^]",ae,V),"g"),UNRESERVED:new RegExp(ae,"g"),OTHER_CHARS:new RegExp(n("[^\\%]",ae,le),"g"),PCT_ENCODED:new RegExp(w,"g"),IPV4ADDRESS:new RegExp("^("+xe+")$"),IPV6ADDRESS:new RegExp("^\\[?("+tr+")"+s(s("\\%25|\\%(?!"+E+"{2})")+"("+xt+")")+"?\\]?$")}}var f=l(!1),y=l(!0),p=function(){function $(u,g){var E=[],w=!0,L=!1,V=void 0;try{for(var le=u[Symbol.iterator](),Se;!(w=(Se=le.next()).done)&&(E.push(Se.value),!(g&&E.length===g));w=!0);}catch(Ae){L=!0,V=Ae}finally{try{!w&&le.return&&le.return()}finally{if(L)throw V}}return E}return function(u,g){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return $(u,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=function($){if(Array.isArray($)){for(var u=0,g=Array($.length);u<$.length;u++)g[u]=$[u];return g}else return Array.from($)},P=2147483647,m=36,d=1,v=26,O=38,b=700,j=72,S=128,A="-",G=/^xn--/,re=/[^\0-\x7E]/,I=/[\x2E\u3002\uFF0E\uFF61]/g,C={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},N=m-d,R=Math.floor,H=String.fromCharCode;function D($){throw new RangeError(C[$])}function Q($,u){for(var g=[],E=$.length;E--;)g[E]=u($[E]);return g}function ye($,u){var g=$.split("@"),E="";g.length>1&&(E=g[0]+"@",$=g[1]),$=$.replace(I,".");var w=$.split("."),L=Q(w,u).join(".");return E+L}function ge($){for(var u=[],g=0,E=$.length;g<E;){var w=$.charCodeAt(g++);if(w>=55296&&w<=56319&&g<E){var L=$.charCodeAt(g++);(L&64512)==56320?u.push(((w&1023)<<10)+(L&1023)+65536):(u.push(w),g--)}else u.push(w)}return u}var K=function(u){return String.fromCodePoint.apply(String,h(u))},Pe=function(u){return u-48<10?u-22:u-65<26?u-65:u-97<26?u-97:m},ot=function(u,g){return u+22+75*(u<26)-((g!=0)<<5)},ke=function(u,g,E){var w=0;for(u=E?R(u/b):u>>1,u+=R(u/g);u>N*v>>1;w+=m)u=R(u/N);return R(w+(N+1)*u/(u+O))},He=function(u){var g=[],E=u.length,w=0,L=S,V=j,le=u.lastIndexOf(A);le<0&&(le=0);for(var Se=0;Se<le;++Se)u.charCodeAt(Se)>=128&&D("not-basic"),g.push(u.charCodeAt(Se));for(var Ae=le>0?le+1:0;Ae<E;){for(var ae=w,ve=1,xe=m;;xe+=m){Ae>=E&&D("invalid-input");var Y=Pe(u.charCodeAt(Ae++));(Y>=m||Y>R((P-w)/ve))&&D("overflow"),w+=Y*ve;var we=xe<=V?d:xe>=V+v?v:xe-V;if(Y<we)break;var Ce=m-we;ve>R(P/Ce)&&D("overflow"),ve*=Ce}var Oe=g.length+1;V=ke(w-ae,Oe,ae==0),R(w/Oe)>P-L&&D("overflow"),L+=R(w/Oe),w%=Oe,g.splice(w++,0,L)}return String.fromCodePoint.apply(String,g)},We=function(u){var g=[];u=ge(u);var E=u.length,w=S,L=0,V=j,le=!0,Se=!1,Ae=void 0;try{for(var ae=u[Symbol.iterator](),ve;!(le=(ve=ae.next()).done);le=!0){var xe=ve.value;xe<128&&g.push(H(xe))}}catch(bn){Se=!0,Ae=bn}finally{try{!le&&ae.return&&ae.return()}finally{if(Se)throw Ae}}var Y=g.length,we=Y;for(Y&&g.push(A);we<E;){var Ce=P,Oe=!0,qt=!1,yt=void 0;try{for(var $t=u[Symbol.iterator](),Ir;!(Oe=(Ir=$t.next()).done);Oe=!0){var er=Ir.value;er>=w&&er<Ce&&(Ce=er)}}catch(bn){qt=!0,yt=bn}finally{try{!Oe&&$t.return&&$t.return()}finally{if(qt)throw yt}}var tt=we+1;Ce-w>R((P-L)/tt)&&D("overflow"),L+=(Ce-w)*tt,w=Ce;var gt=!0,tr=!1,xt=void 0;try{for(var vn=u[Symbol.iterator](),Fc;!(gt=(Fc=vn.next()).done);gt=!0){var Kc=Fc.value;if(Kc<w&&++L>P&&D("overflow"),Kc==w){for(var $s=L,gs=m;;gs+=m){var vs=gs<=V?d:gs>=V+v?v:gs-V;if($s<vs)break;var Jc=$s-vs,zc=m-vs;g.push(H(ot(vs+Jc%zc,0))),$s=R(Jc/zc)}g.push(H(ot($s,0))),V=ke(L,tt,we==Y),L=0,++we}}}catch(bn){tr=!0,xt=bn}finally{try{!gt&&vn.return&&vn.return()}finally{if(tr)throw xt}}++L,++w}return g.join("")},he=function(u){return ye(u,function(g){return G.test(g)?He(g.slice(4).toLowerCase()):g})},Z=function(u){return ye(u,function(g){return re.test(g)?"xn--"+We(g):g})},ce={version:"2.1.0",ucs2:{decode:ge,encode:K},decode:He,encode:We,toASCII:Z,toUnicode:he},$e={};function Ie($){var u=$.charCodeAt(0),g=void 0;return u<16?g="%0"+u.toString(16).toUpperCase():u<128?g="%"+u.toString(16).toUpperCase():u<2048?g="%"+(u>>6|192).toString(16).toUpperCase()+"%"+(u&63|128).toString(16).toUpperCase():g="%"+(u>>12|224).toString(16).toUpperCase()+"%"+(u>>6&63|128).toString(16).toUpperCase()+"%"+(u&63|128).toString(16).toUpperCase(),g}function Xe($){for(var u="",g=0,E=$.length;g<E;){var w=parseInt($.substr(g+1,2),16);if(w<128)u+=String.fromCharCode(w),g+=3;else if(w>=194&&w<224){if(E-g>=6){var L=parseInt($.substr(g+4,2),16);u+=String.fromCharCode((w&31)<<6|L&63)}else u+=$.substr(g,6);g+=6}else if(w>=224){if(E-g>=9){var V=parseInt($.substr(g+4,2),16),le=parseInt($.substr(g+7,2),16);u+=String.fromCharCode((w&15)<<12|(V&63)<<6|le&63)}else u+=$.substr(g,9);g+=9}else u+=$.substr(g,3),g+=3}return u}function qe($,u){function g(E){var w=Xe(E);return w.match(u.UNRESERVED)?w:E}return $.scheme&&($.scheme=String($.scheme).replace(u.PCT_ENCODED,g).toLowerCase().replace(u.NOT_SCHEME,"")),$.userinfo!==void 0&&($.userinfo=String($.userinfo).replace(u.PCT_ENCODED,g).replace(u.NOT_USERINFO,Ie).replace(u.PCT_ENCODED,i)),$.host!==void 0&&($.host=String($.host).replace(u.PCT_ENCODED,g).toLowerCase().replace(u.NOT_HOST,Ie).replace(u.PCT_ENCODED,i)),$.path!==void 0&&($.path=String($.path).replace(u.PCT_ENCODED,g).replace($.scheme?u.NOT_PATH:u.NOT_PATH_NOSCHEME,Ie).replace(u.PCT_ENCODED,i)),$.query!==void 0&&($.query=String($.query).replace(u.PCT_ENCODED,g).replace(u.NOT_QUERY,Ie).replace(u.PCT_ENCODED,i)),$.fragment!==void 0&&($.fragment=String($.fragment).replace(u.PCT_ENCODED,g).replace(u.NOT_FRAGMENT,Ie).replace(u.PCT_ENCODED,i)),$}function gr($){return $.replace(/^0*(.*)/,"$1")||"0"}function vr($,u){var g=$.match(u.IPV4ADDRESS)||[],E=p(g,2),w=E[1];return w?w.split(".").map(gr).join("."):$}function yn($,u){var g=$.match(u.IPV6ADDRESS)||[],E=p(g,3),w=E[1],L=E[2];if(w){for(var V=w.toLowerCase().split("::").reverse(),le=p(V,2),Se=le[0],Ae=le[1],ae=Ae?Ae.split(":").map(gr):[],ve=Se.split(":").map(gr),xe=u.IPV4ADDRESS.test(ve[ve.length-1]),Y=xe?7:8,we=ve.length-Y,Ce=Array(Y),Oe=0;Oe<Y;++Oe)Ce[Oe]=ae[Oe]||ve[we+Oe]||"";xe&&(Ce[Y-1]=vr(Ce[Y-1],u));var qt=Ce.reduce(function(tt,gt,tr){if(!gt||gt==="0"){var xt=tt[tt.length-1];xt&&xt.index+xt.length===tr?xt.length++:tt.push({index:tr,length:1})}return tt},[]),yt=qt.sort(function(tt,gt){return gt.length-tt.length})[0],$t=void 0;if(yt&&yt.length>1){var Ir=Ce.slice(0,yt.index),er=Ce.slice(yt.index+yt.length);$t=Ir.join(":")+"::"+er.join(":")}else $t=Ce.join(":");return L&&($t+="%"+L),$t}else return $}var hs=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,ys="".match(/(){0}/)[1]===void 0;function jt($){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g={},E=u.iri!==!1?y:f;u.reference==="suffix"&&($=(u.scheme?u.scheme+":":"")+"//"+$);var w=$.match(hs);if(w){ys?(g.scheme=w[1],g.userinfo=w[3],g.host=w[4],g.port=parseInt(w[5],10),g.path=w[6]||"",g.query=w[7],g.fragment=w[8],isNaN(g.port)&&(g.port=w[5])):(g.scheme=w[1]||void 0,g.userinfo=$.indexOf("@")!==-1?w[3]:void 0,g.host=$.indexOf("//")!==-1?w[4]:void 0,g.port=parseInt(w[5],10),g.path=w[6]||"",g.query=$.indexOf("?")!==-1?w[7]:void 0,g.fragment=$.indexOf("#")!==-1?w[8]:void 0,isNaN(g.port)&&(g.port=$.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?w[4]:void 0)),g.host&&(g.host=yn(vr(g.host,E),E)),g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",u.reference&&u.reference!=="suffix"&&u.reference!==g.reference&&(g.error=g.error||"URI is not a "+u.reference+" reference.");var L=$e[(u.scheme||g.scheme||"").toLowerCase()];if(!u.unicodeSupport&&(!L||!L.unicodeSupport)){if(g.host&&(u.domainHost||L&&L.domainHost))try{g.host=ce.toASCII(g.host.replace(E.PCT_ENCODED,Xe).toLowerCase())}catch(V){g.error=g.error||"Host's domain name can not be converted to ASCII via punycode: "+V}qe(g,f)}else qe(g,E);L&&L.parse&&L.parse(g,u)}else g.error=g.error||"URI can not be parsed.";return g}function ah($,u){var g=u.iri!==!1?y:f,E=[];return $.userinfo!==void 0&&(E.push($.userinfo),E.push("@")),$.host!==void 0&&E.push(yn(vr(String($.host),g),g).replace(g.IPV6ADDRESS,function(w,L,V){return"["+L+(V?"%25"+V:"")+"]"})),(typeof $.port=="number"||typeof $.port=="string")&&(E.push(":"),E.push(String($.port))),E.length?E.join(""):void 0}var _c=/^\.\.?\//,Cc=/^\/\.(\/|$)/,Nc=/^\/\.\.(\/|$)/,ih=/^\/?(?:.|\n)*?(?=\/|$)/;function br($){for(var u=[];$.length;)if($.match(_c))$=$.replace(_c,"");else if($.match(Cc))$=$.replace(Cc,"/");else if($.match(Nc))$=$.replace(Nc,"/"),u.pop();else if($==="."||$==="..")$="";else{var g=$.match(ih);if(g){var E=g[0];$=$.slice(E.length),u.push(E)}else throw new Error("Unexpected dot segment condition")}return u.join("")}function dt($){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=u.iri?y:f,E=[],w=$e[(u.scheme||$.scheme||"").toLowerCase()];if(w&&w.serialize&&w.serialize($,u),$.host&&!g.IPV6ADDRESS.test($.host)){if(u.domainHost||w&&w.domainHost)try{$.host=u.iri?ce.toUnicode($.host):ce.toASCII($.host.replace(g.PCT_ENCODED,Xe).toLowerCase())}catch(le){$.error=$.error||"Host's domain name can not be converted to "+(u.iri?"Unicode":"ASCII")+" via punycode: "+le}}qe($,g),u.reference!=="suffix"&&$.scheme&&(E.push($.scheme),E.push(":"));var L=ah($,u);if(L!==void 0&&(u.reference!=="suffix"&&E.push("//"),E.push(L),$.path&&$.path.charAt(0)!=="/"&&E.push("/")),$.path!==void 0){var V=$.path;!u.absolutePath&&(!w||!w.absolutePath)&&(V=br(V)),L===void 0&&(V=V.replace(/^\/\//,"/%2F")),E.push(V)}return $.query!==void 0&&(E.push("?"),E.push($.query)),$.fragment!==void 0&&(E.push("#"),E.push($.fragment)),E.join("")}function Tc($,u){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},E=arguments[3],w={};return E||($=jt(dt($,g),g),u=jt(dt(u,g),g)),g=g||{},!g.tolerant&&u.scheme?(w.scheme=u.scheme,w.userinfo=u.userinfo,w.host=u.host,w.port=u.port,w.path=br(u.path||""),w.query=u.query):(u.userinfo!==void 0||u.host!==void 0||u.port!==void 0?(w.userinfo=u.userinfo,w.host=u.host,w.port=u.port,w.path=br(u.path||""),w.query=u.query):(u.path?(u.path.charAt(0)==="/"?w.path=br(u.path):(($.userinfo!==void 0||$.host!==void 0||$.port!==void 0)&&!$.path?w.path="/"+u.path:$.path?w.path=$.path.slice(0,$.path.lastIndexOf("/")+1)+u.path:w.path=u.path,w.path=br(w.path)),w.query=u.query):(w.path=$.path,u.query!==void 0?w.query=u.query:w.query=$.query),w.userinfo=$.userinfo,w.host=$.host,w.port=$.port),w.scheme=$.scheme),w.fragment=u.fragment,w}function oh($,u,g){var E=c({scheme:"null"},g);return dt(Tc(jt($,E),jt(u,E),E,!0),E)}function ch($,u){return typeof $=="string"?$=dt(jt($,u),u):a($)==="object"&&($=jt(dt($,u),u)),$}function lh($,u,g){return typeof $=="string"?$=dt(jt($,g),g):a($)==="object"&&($=dt($,g)),typeof u=="string"?u=dt(jt(u,g),g):a(u)==="object"&&(u=dt(u,g)),$===u}function fh($,u){return $&&$.toString().replace(!u||!u.iri?f.ESCAPE:y.ESCAPE,Ie)}function At($,u){return $&&$.toString().replace(!u||!u.iri?f.PCT_ENCODED:y.PCT_ENCODED,Xe)}var $n={scheme:"http",domainHost:!0,parse:function(u,g){return u.host||(u.error=u.error||"HTTP URIs must have a host."),u},serialize:function(u,g){var E=String(u.scheme).toLowerCase()==="https";return(u.port===(E?443:80)||u.port==="")&&(u.port=void 0),u.path||(u.path="/"),u}},Rc={scheme:"https",domainHost:$n.domainHost,parse:$n.parse,serialize:$n.serialize};function Dc($){return typeof $.secure=="boolean"?$.secure:String($.scheme).toLowerCase()==="wss"}var gn={scheme:"ws",domainHost:!0,parse:function(u,g){var E=u;return E.secure=Dc(E),E.resourceName=(E.path||"/")+(E.query?"?"+E.query:""),E.path=void 0,E.query=void 0,E},serialize:function(u,g){if((u.port===(Dc(u)?443:80)||u.port==="")&&(u.port=void 0),typeof u.secure=="boolean"&&(u.scheme=u.secure?"wss":"ws",u.secure=void 0),u.resourceName){var E=u.resourceName.split("?"),w=p(E,2),L=w[0],V=w[1];u.path=L&&L!=="/"?L:void 0,u.query=V,u.resourceName=void 0}return u.fragment=void 0,u}},qc={scheme:"wss",domainHost:gn.domainHost,parse:gn.parse,serialize:gn.serialize},uh={},Lc="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",ht="[0-9A-Fa-f]",ph=s(s("%[EFef]"+ht+"%"+ht+ht+"%"+ht+ht)+"|"+s("%[89A-Fa-f]"+ht+"%"+ht+ht)+"|"+s("%"+ht+ht)),mh="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",dh="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",hh=n(dh,'[\\"\\\\]'),yh="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",$h=new RegExp(Lc,"g"),Sr=new RegExp(ph,"g"),gh=new RegExp(n("[^]",mh,"[\\.]",'[\\"]',hh),"g"),Mc=new RegExp(n("[^]",Lc,yh),"g"),vh=Mc;function Ua($){var u=Xe($);return u.match($h)?u:$}var Vc={scheme:"mailto",parse:function(u,g){var E=u,w=E.to=E.path?E.path.split(","):[];if(E.path=void 0,E.query){for(var L=!1,V={},le=E.query.split("&"),Se=0,Ae=le.length;Se<Ae;++Se){var ae=le[Se].split("=");switch(ae[0]){case"to":for(var ve=ae[1].split(","),xe=0,Y=ve.length;xe<Y;++xe)w.push(ve[xe]);break;case"subject":E.subject=At(ae[1],g);break;case"body":E.body=At(ae[1],g);break;default:L=!0,V[At(ae[0],g)]=At(ae[1],g);break}}L&&(E.headers=V)}E.query=void 0;for(var we=0,Ce=w.length;we<Ce;++we){var Oe=w[we].split("@");if(Oe[0]=At(Oe[0]),g.unicodeSupport)Oe[1]=At(Oe[1],g).toLowerCase();else try{Oe[1]=ce.toASCII(At(Oe[1],g).toLowerCase())}catch(qt){E.error=E.error||"Email address's domain name can not be converted to ASCII via punycode: "+qt}w[we]=Oe.join("@")}return E},serialize:function(u,g){var E=u,w=o(u.to);if(w){for(var L=0,V=w.length;L<V;++L){var le=String(w[L]),Se=le.lastIndexOf("@"),Ae=le.slice(0,Se).replace(Sr,Ua).replace(Sr,i).replace(gh,Ie),ae=le.slice(Se+1);try{ae=g.iri?ce.toUnicode(ae):ce.toASCII(At(ae,g).toLowerCase())}catch(we){E.error=E.error||"Email address's domain name can not be converted to "+(g.iri?"Unicode":"ASCII")+" via punycode: "+we}w[L]=Ae+"@"+ae}E.path=w.join(",")}var ve=u.headers=u.headers||{};u.subject&&(ve.subject=u.subject),u.body&&(ve.body=u.body);var xe=[];for(var Y in ve)ve[Y]!==uh[Y]&&xe.push(Y.replace(Sr,Ua).replace(Sr,i).replace(Mc,Ie)+"="+ve[Y].replace(Sr,Ua).replace(Sr,i).replace(vh,Ie));return xe.length&&(E.query=xe.join("&")),E}},bh=/^([^\:]+)\:(.*)/,Uc={scheme:"urn",parse:function(u,g){var E=u.path&&u.path.match(bh),w=u;if(E){var L=g.scheme||w.scheme||"urn",V=E[1].toLowerCase(),le=E[2],Se=L+":"+(g.nid||V),Ae=$e[Se];w.nid=V,w.nss=le,w.path=void 0,Ae&&(w=Ae.parse(w,g))}else w.error=w.error||"URN can not be parsed.";return w},serialize:function(u,g){var E=g.scheme||u.scheme||"urn",w=u.nid,L=E+":"+(g.nid||w),V=$e[L];V&&(u=V.serialize(u,g));var le=u,Se=u.nss;return le.path=(w||g.nid)+":"+Se,le}},Sh=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,Bc={scheme:"urn:uuid",parse:function(u,g){var E=u;return E.uuid=E.nss,E.nss=void 0,!g.tolerant&&(!E.uuid||!E.uuid.match(Sh))&&(E.error=E.error||"UUID is not valid."),E},serialize:function(u,g){var E=u;return E.nss=(u.uuid||"").toLowerCase(),E}};$e[$n.scheme]=$n,$e[Rc.scheme]=Rc,$e[gn.scheme]=gn,$e[qc.scheme]=qc,$e[Vc.scheme]=Vc,$e[Uc.scheme]=Uc,$e[Bc.scheme]=Bc,r.SCHEMES=$e,r.pctEncChar=Ie,r.pctDecChars=Xe,r.parse=jt,r.removeDotSegments=br,r.serialize=dt,r.resolveComponents=Tc,r.resolve=oh,r.normalize=ch,r.equal=lh,r.escapeComponent=fh,r.unescapeComponent=At,Object.defineProperty(r,"__esModule",{value:!0})})})(Ui,Ui.exports);const Vr=Ui.exports,Ly=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,My={null:e=>e===null,boolean:e=>typeof e=="boolean",object:Ly,array:e=>Array.isArray(e),number:e=>typeof e=="number",integer:e=>Number.isInteger(e),string:e=>typeof e=="string"},Vy=(e,t)=>My[t](e),Uy=(e,t)=>{const r=Vr.resolve(e,t,{iri:!0});if(Vr.resolve(e,"",{iri:!0})&&Vr.parse(r).scheme==="file"&&Vr.parse(e).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${e}'`);return r},By=e=>Vr.unescapeComponent(Vr.parse(e).fragment)||"",In=47,Fy=(e,t)=>{if(e===t)return"";let r=1;const n=e.length-1,s=t.length-r,a=n<s?n:s;let i=-1,o=0;for(;o<a;o++){const l=e.charCodeAt(o+1);if(l!==t.charCodeAt(r+o))break;l===In&&(i=o)}if(s>a){if(t.charCodeAt(r+o)===In)return t.slice(r+o+1);if(o===0)return t.slice(r+o)}n>a&&(e.charCodeAt(o+1)===In?i=o:a===0&&(i=0));let c="";for(o=i+2;o<=e.length;++o)(o===e.length||e.charCodeAt(o)===In)&&(c+=c.length===0?"..":"/..");return r+=i,c.length>0?`${c}${t.slice(r,t.length)}`:(t.charCodeAt(r)===In&&++r,t.slice(r,t.length))};var Co={jsonTypeOf:Vy,resolveUrl:Uy,urlFragment:By,pathRelative:Fy};const No=Qe,Yn="",Qn=e=>{if(e.length>0&&e[0]!=="/")throw Error("Invalid JSON Pointer");return e.split("/").slice(1).map(Xy)},Ky=(e,t=void 0)=>{const r=Qn(e),n=s=>r.reduce(([a,i],o)=>[Ht(a,o,i),sn(o,i)],[s,""])[0];return t===void 0?n:n(t)},Jy=(e,t=void 0,r=void 0)=>{const n=Qn(e),s=No((a,i)=>Up(n,a,i,Yn));return t===void 0?s:s(t,r)},Up=(e,t,r,n)=>{if(e.length===0)return r;if(e.length>1){const s=e.shift();return{...t,[s]:Up(e,Ht(t,s,n),r,sn(s,n))}}else if(Array.isArray(t)){const s=[...t],a=To(t,e[0]);return s[a]=r,s}else return typeof t=="object"&&t!==null?{...t,[e[0]]:r}:Ht(t,e[0],n)},zy=(e,t=void 0,r=void 0)=>{const n=Qn(e),s=No((a,i)=>Bp(n,a,i,Yn));return t===void 0?s:s(t,r)},Bp=(e,t,r,n)=>{if(e.length!==0)if(e.length===1&&!Jp(t)){const s=To(t,e[0]);t[s]=r}else{const s=e.shift();Bp(e,Ht(t,s,n),r,sn(s,n))}},Gy=(e,t=void 0)=>{const r=Qn(e),n=s=>Fp(r,s,Yn);return t===void 0?n:n(t)},Fp=(e,t,r)=>{if(e.length!=0)if(e.length>1){const n=e.shift(),s=Ht(t,n,r);return{...t,[n]:Fp(e,s,sn(n,r))}}else{if(Array.isArray(t))return t.filter((n,s)=>s!=e[0]);if(typeof t=="object"&&t!==null){const{[e[0]]:n,...s}=t;return s}else return Ht(t,e[0],r)}},Hy=(e,t=void 0)=>{const r=Qn(e),n=s=>Kp(r,s,Yn);return t===void 0?n:n(t)},Kp=(e,t,r)=>{if(e.length!==0)if(e.length>1){const n=e.shift(),s=Ht(t,n,r);Kp(e,s,sn(n,r))}else Array.isArray(t)?t.splice(e[0],1):typeof t=="object"&&t!==null?delete t[e[0]]:Ht(t,e[0],r)},sn=No((e,t)=>t+"/"+Wy(e)),Wy=e=>e.toString().replace(/~/g,"~0").replace(/\//g,"~1"),Xy=e=>e.toString().replace(/~1/g,"/").replace(/~0/g,"~"),To=(e,t)=>Array.isArray(e)&&t==="-"?e.length:t,Ht=(e,t,r="")=>{if(e===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${t}'`);if(e===null)throw TypeError(`Value at '${r}' is null and does not have property '${t}'`);if(Jp(e))throw TypeError(`Value at '${r}' is a ${typeof e} and does not have property '${t}'`);{const n=To(e,t);return e[n]}},Jp=e=>e===null||typeof e!="object";var ba={nil:Yn,append:sn,get:Ky,set:Jy,assign:zy,unset:Gy,remove:Hy};const zp=Symbol("$__value"),Ro=Symbol("$__href"),Yy=(e,t)=>Object.freeze({[Ro]:e,[zp]:t}),Qy=e=>e&&e[Ro]!==void 0,Zy=e=>e[Ro],e$=e=>e[zp];var Do={cons:Yy,isReference:Qy,href:Zy,value:e$};const t$=ba,an=Qe,{resolveUrl:r$,jsonTypeOf:n$}=Co,il=Do,Gp=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),s$=(e,t="")=>Object.freeze({...Gp,id:r$(t,""),instance:e,value:e}),a$=e=>`${e.id}#${encodeURI(e.pointer)}`,at=e=>il.isReference(e.value)?il.value(e.value):e.value,i$=(e,t)=>e in at(t),o$=an((e,t)=>n$(at(e),t)),mr=(e,t)=>Object.freeze({...t,pointer:t$.append(e,t.pointer),value:at(t)[e]}),c$=e=>Object.keys(at(e)).map(t=>[t,mr(t,e)]),l$=e=>Object.keys(at(e)),f$=an((e,t)=>at(t).map((r,n,s,a)=>e(mr(n,t),n,s,a))),u$=an((e,t)=>at(t).map((r,n,s,a)=>mr(n,t)).filter((r,n,s,a)=>e(r,n,s,a))),p$=an((e,t,r)=>at(r).reduce((n,s,a)=>e(n,mr(a,r),a),t)),m$=an((e,t)=>at(t).every((r,n,s,a)=>e(mr(n,t),n,s,a))),d$=an((e,t)=>at(t).some((r,n,s,a)=>e(mr(n,t),n,s,a))),h$=e=>at(e).length;var qo={nil:Gp,cons:s$,uri:a$,value:at,has:i$,typeOf:o$,step:mr,entries:c$,keys:l$,map:f$,filter:u$,reduce:p$,every:m$,some:d$,length:h$},Sa={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var ol=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,y$=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,Hp=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,$$=/\\([\u000b\u0020-\u00ff])/g,g$=/([\\"])/g,Wp=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;Sa.format=v$;Sa.parse=b$;function v$(e){if(!e||typeof e!="object")throw new TypeError("argument obj is required");var t=e.parameters,r=e.type;if(!r||!Wp.test(r))throw new TypeError("invalid type");var n=r;if(t&&typeof t=="object")for(var s,a=Object.keys(t).sort(),i=0;i<a.length;i++){if(s=a[i],!Hp.test(s))throw new TypeError("invalid parameter name");n+="; "+s+"="+I$(t[s])}return n}function b$(e){if(!e)throw new TypeError("argument string is required");var t=typeof e=="object"?S$(e):e;if(typeof t!="string")throw new TypeError("argument string is required to be a string");var r=t.indexOf(";"),n=r!==-1?t.substr(0,r).trim():t.trim();if(!Wp.test(n))throw new TypeError("invalid media type");var s=new w$(n.toLowerCase());if(r!==-1){var a,i,o;for(ol.lastIndex=r;i=ol.exec(t);){if(i.index!==r)throw new TypeError("invalid parameter format");r+=i[0].length,a=i[1].toLowerCase(),o=i[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace($$,"$1")),s.parameters[a]=o}if(r!==t.length)throw new TypeError("invalid parameter format")}return s}function S$(e){var t;if(typeof e.getHeader=="function"?t=e.getHeader("content-type"):typeof e.headers=="object"&&(t=e.headers&&e.headers["content-type"]),typeof t!="string")throw new TypeError("content-type header is missing from object");return t}function I$(e){var t=String(e);if(Hp.test(t))return t;if(t.length>0&&!y$.test(t))throw new TypeError("invalid parameter value");return'"'+t.replace(g$,"\\$1")+'"'}function w$(e){this.parameters=Object.create(null),this.type=e}var Xp=async e=>Object.entries(await e);const O$=Qe;var Lo=O$(async(e,t)=>(await t).map(e));const E$=Qe;var Mo=E$(async(e,t,r)=>(await r).reduce(async(n,s)=>e(await n,s),t));const P$=Qe,k$=Mo;var j$=P$(async(e,t,r={})=>k$(async(n,s)=>await e(s)?n.concat([s]):n,[],t,r));const A$=Qe,x$=Lo;var _$=A$(async(e,t)=>{const r=await x$(e,t);return(await Promise.all(r)).some(n=>n)});const C$=Qe,N$=Lo;var T$=C$(async(e,t)=>{const r=await N$(e,t);return(await Promise.all(r)).every(n=>n)});const R$=Qe;var Yp=R$((e,t)=>e.reduce(async(r,n)=>n(await r),t)),D$=e=>Promise.all(e);const q$=Yp,L$=Xp,M$=Mo;var V$=e=>q$([L$,M$(async(t,[r,n])=>(t[r]=await n,t),{})],e),fe={entries:Xp,map:Lo,filter:j$,reduce:Mo,some:_$,every:T$,pipeline:Yp,all:D$,allValues:V$},U$=fetch;const B$=Sa,F$=Qe,Fr=fe,Ot=ba,{jsonTypeOf:Vo,resolveUrl:_t,urlFragment:Uo,pathRelative:K$}=Co,J$=U$,Nt=Do,Rn={},Qs={},z$=(e,t,r)=>{Rn[e]||(Rn[e]={}),Rn[e][t]=r},Ve=(e,t)=>{const r=e in Qs?Qs[e]:e;if(r in Rn)return Rn[r][t]},Vn={},Bo={},Fo=(e,t="",r="")=>{e=JSON.parse(JSON.stringify(e));const n=_t(e.$schema||r,"");if(!n)throw Error("Couldn't determine schema version");delete e.$schema;const s=Ve(n,"baseToken"),a=Ve(n,"anchorToken"),i=_t(t,"");if(!i&&!_t(e[s]||"",""))throw Error("Couldn't determine an identifier for the schema");const o=_t(i,e[s]||""),c=_t(o,""),l=Uo(o);delete e[s],l&&s===a&&(e[a]=a!==s?encodeURI(l):`#${encodeURI(l)}`),i&&(Bo[i]=c);const f={},y=Ve(n,"recursiveAnchorToken");e[y]===!0&&(f[""]=`${c}#`,e[a]="",delete e[y]);let p;const h=Ve(n,"vocabularyToken");Vo(e[h],"object")?(Qs[c]=n,p=e[h],delete e[h]):(Qs[c]=n,p={[n]:!0});const P={"":""};return Vn[c]={id:c,schemaVersion:n,schema:Bi(e,c,n,Ot.nil,P,f),anchors:P,dynamicAnchors:f,vocabulary:p,validated:!1},c},Bi=(e,t,r,n,s,a)=>{if(Vo(e,"object")){const i=typeof e.$schema=="string"?_t(e.$schema,""):r,o=Ve(i,"embeddedToken"),c=Ve(i,"anchorToken");if(typeof e[o]=="string"&&(o!==c||e[o][0]!=="#")){const h=_t(t,e[o]);return e[o]=h,Fo(e,h,r),Nt.cons(e[o],e)}const l=Ve(r,"anchorToken"),f=Ve(r,"dynamicAnchorToken");typeof e[f]=="string"&&(a[e[f]]=`${t}#${encodeURI(n)}`,s[e[f]]=n,delete e[f]);const y=Ve(r,"embeddedToken");if(typeof e[l]=="string"){const h=l!==y?e[l]:e[l].slice(1);s[h]=n,delete e[l]}const p=Ve(r,"jrefToken");if(typeof e[p]=="string")return Nt.cons(e[p],e);for(const h in e)e[h]=Bi(e[h],t,r,Ot.append(h,n),s,a);return e}else return Array.isArray(e)?e.map((i,o)=>Bi(i,t,r,Ot.append(o,n),s,a)):e},G$=e=>e in Vn||e in Bo,Qp=e=>Vn[Bo[e]]||Vn[e],H$=e=>{Vn[e].validated=!0},W$=Object.freeze({id:"",schemaVersion:void 0,vocabulary:{},pointer:Ot.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),Zp=async(e,t=W$)=>{const r=_t(rm(t),e),n=_t(r,""),s=Uo(r);if(!G$(n)){const c=await J$(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);if(c.headers.has("content-type")){const l=B$.parse(c.headers.get("content-type")).type;if(l!=="application/schema+json")throw Error(`${n} is not a schema. Found a document with media type: ${l}`)}Fo(await c.json(),n)}const a=Qp(n),i=s[0]!=="/"?tm(a,s):s,o=Object.freeze({...a,pointer:i,value:Ot.get(i,a.schema)});return em(o)},em=e=>Nt.isReference(e.value)?Zp(Nt.href(e.value),e):e,tm=(e,t)=>{if(!(t in e.anchors))throw Error(`No such anchor '${encodeURI(e.id)}#${encodeURI(t)}'`);return e.anchors[t]},rm=e=>`${e.id}#${encodeURI(e.pointer)}`,Qt=e=>Nt.isReference(e.value)?Nt.value(e.value):e.value,X$=(e,t)=>e in Qt(t),Y$=(e,t)=>Vo(Qt(e),t),Ko=(e,t)=>{const r=Qp(t.id),n=Object.freeze({...t,pointer:Ot.append(e,t.pointer),value:Qt(t)[e],validated:r.validated});return em(n)},Q$=e=>Object.keys(Qt(e)),Z$=e=>Fr.pipeline([Qt,Object.keys,Fr.map(async t=>[t,await Ko(t,e)]),Fr.all],e),eg=F$((e,t)=>Fr.pipeline([Qt,Fr.map(async(r,n)=>e(await Ko(n,t),n)),Fr.all],t)),tg=e=>Qt(e).length,rg={parentId:"",parentDialect:"",includeEmbedded:!0},ng=(e,t={})=>{const r={...rg,...t},n=JSON.parse(JSON.stringify(e.schema,(l,f)=>{if(!Nt.isReference(f))return f;const y=Nt.value(f),p=y.$schema||e.schemaVersion,h=Ve(p,"embeddedToken");if(!(!r.includeEmbedded&&h in y))return Nt.value(f)})),s=Ve(e.schemaVersion,"dynamicAnchorToken");Object.entries(e.dynamicAnchors).forEach(([l,f])=>{const y=Uo(f);Ot.assign(y,n,{[s]:l,...Ot.get(y,n)})});const a=Ve(e.schemaVersion,"anchorToken");Object.entries(e.anchors).filter(([l])=>l!=="").forEach(([l,f])=>{Ot.assign(f,n,{[a]:l,...Ot.get(f,n)})});const i=Ve(e.schemaVersion,"baseToken"),o=sg(r.parentId,e.id),c=r.parentDialect===e.schemaVersion?"":e.schemaVersion;return{...o&&{[i]:o},...c&&{$schema:c},...n}},sg=(e,t)=>{if(t.startsWith("file://")){const r=e.slice(7,e.lastIndexOf("/"));return e===""?"":K$(r,t.slice(7))}else return t};var Ia={setConfig:z$,getConfig:Ve,add:Fo,get:Zp,markValidated:H$,uri:rm,value:Qt,getAnchorPointer:tm,typeOf:Y$,has:X$,step:Ko,keys:Q$,entries:Z$,map:eg,length:tg,toSchema:ng};class ag extends Error{constructor(t){super("Invalid Schema"),this.name=this.constructor.name,this.output=t}}var nm=ag;const ig=Qe,cl=zr.exports,{resolveUrl:og}=Co,sm=qo,Ft=Ia,cg=nm,Zs="FLAG",Jo="BASIC",zo="DETAILED",Go="VERBOSE";let am=zo,im=!0;const lg=async(e,t=void 0,r=void 0)=>{const n=await Ho(e),s=(a,i)=>Wo(n,sm.cons(a),i);return t===void 0?s:s(t,r)},Ho=async e=>{const t={metaData:{}},r=await cm(e,t);return{ast:t,schemaUri:r}},Wo=ig(({ast:e,schemaUri:t},r,n=Zs)=>{if(![Zs,Jo,zo,Go].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],a=cl.subscribe("result",fg(n,s));return fm(t,r,e,{}),cl.unsubscribe(a),s[0]}),fg=(e,t)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c}=s,l={keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const a=r.pop();for(;r[r.length-1]!=="result.start";){const i=r.pop(),o=[i];e===Jo&&(o.push(...i.errors),delete i.errors),(e===Go||e!==Zs&&!i.valid)&&a.errors.unshift(...o)}r[r.length-1]=a,t[0]=a}}},ug=e=>{am=e},pg=e=>{im=e},Xo={},Zn=e=>Xo[e],om=e=>e in Xo,mg=(e,t)=>{Xo[e]={collectEvaluatedItems:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&new Set,collectEvaluatedProperties:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&[],...t}},Fi={},dg=(e,t)=>{Fi[e]=t},Rs={},cm=async(e,t)=>{if(e=await lm(e),!om(`${e.schemaVersion}#validate`)){const r=await Ft.get(e.schemaVersion);(Ft.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,a])=>{if(s in Fi)Object.entries(Fi[s]).forEach(([i,o])=>{mg(`${r.id}#${i}`,o)});else if(a)throw Error(`Missing required vocabulary: ${s}`)})}if(im&&!e.validated){if(Ft.markValidated(e.id),!(e.schemaVersion in Rs)){const s=await Ft.get(e.schemaVersion),a=await Ho(s);Rs[s.id]=Wo(a)}const r=sm.cons(e.schema,e.id),n=Rs[e.schemaVersion](r,am);if(!n.valid)throw new cg(n)}return e.id in t.metaData||(t.metaData[e.id]={id:e.id,dynamicAnchors:e.dynamicAnchors,anchors:e.anchors}),Zn(`${e.schemaVersion}#validate`).compile(e,t)},lm=async e=>Ft.typeOf(e,"string")?lm(await Ft.get(Ft.value(e),e)):e,fm=(e,t,r,n)=>{const s=Yo(e,r),a=og(e,"");return Zn(s).interpret(e,t,r,{...r.metaData[a].dynamicAnchors,...n})},hg=(e,t,r,n,s)=>{const a=Yo(e,r);return Zn(a).collectEvaluatedProperties(e,t,r,n,s)},yg=(e,t,r,n,s)=>{const a=Yo(e,r);return Zn(a).collectEvaluatedItems(e,t,r,n,s)},Yo=(e,t)=>{if(!(e in t))throw Error(`No schema found at ${e}`);return t[e][0]},$g=(e,t="",r="")=>{const n=Ft.add(e,t,r);delete Rs[n]};var um={validate:lg,compile:Ho,interpret:Wo,setMetaOutputFormat:ug,setShouldMetaValidate:pg,FLAG:Zs,BASIC:Jo,DETAILED:zo,VERBOSE:Go,add:$g,getKeyword:Zn,hasKeyword:om,defineVocabulary:dg,compileSchema:cm,interpretSchema:fm,collectEvaluatedProperties:hg,collectEvaluatedItems:yg};const gg=Ia,vg=e=>gg.value(e),bg=()=>!0;var Sg={compile:vg,interpret:bg};const wn=fe,Er=zr.exports,Un=um,ll=qo,Pr=Ia,Ig=async(e,t)=>{const r=Pr.uri(e);if(!(r in t)){t[r]=!1;const n=Pr.value(e);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${Pr.uri(e)}'`);t[r]=[`${e.schemaVersion}#validate`,Pr.uri(e),typeof n=="boolean"?n:await wn.pipeline([Pr.entries,wn.map(([s,a])=>[`${e.schemaVersion}#${s}`,a]),wn.filter(([s])=>Un.hasKeyword(s)&&s!==`${e.schemaVersion}#validate`),wn.map(async([s,a])=>{const i=await Un.getKeyword(s).compile(a,t,e);return[s,Pr.uri(a),i]}),wn.all],e)]}return r},wg=(e,t,r,n)=>{const[s,a,i]=r[e];Er.publishSync("result.start");const o=typeof i=="boolean"?i:i.every(([c,l,f])=>{Er.publishSync("result.start");const y=Un.getKeyword(c).interpret(f,t,r,n);return Er.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:ll.uri(t),valid:y,ast:f}),Er.publishSync("result.end"),y});return Er.publishSync("result",{keyword:s,absoluteKeywordLocation:a,instanceLocation:ll.uri(t),valid:o,ast:e}),Er.publishSync("result.end"),o},Og=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?[]:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedProperties")).reduce((i,[o,,c])=>{const l=i&&Un.getKeyword(o).collectEvaluatedProperties(c,t,r,n);return l!==!1&&[...i,...l]},[])},Eg=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?new Set:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedItems")).reduce((i,[o,,c])=>{const l=i!==!1&&Un.getKeyword(o).collectEvaluatedItems(c,t,r,n);return l!==!1&&new Set([...i,...l])},new Set)};var Pg={compile:Ig,interpret:wg,collectEvaluatedProperties:Og,collectEvaluatedItems:Eg};const kg=Sg,jg=Pg;var Ag={metaData:kg,validate:jg};const xg=um,_g=Ia,Cg=qo,Ng=Do,Tg=Ag,Rg=nm;var k={Core:xg,Schema:_g,Instance:Cg,Reference:Ng,Keywords:Tg,InvalidSchemaError:Rg};const{Core:pm,Schema:On,Instance:Wa}=k,Dg=async(e,t,r)=>{const n=await On.step("items",r),s=On.typeOf(n,"array")?On.length(n):Number.MAX_SAFE_INTEGER;return On.typeOf(e,"boolean")?[s,On.value(e)]:[s,await pm.compileSchema(e,t)]},qg=([e,t],r,n,s)=>Wa.typeOf(r,"array")?typeof t=="string"?Wa.every((a,i)=>i<e||pm.interpretSchema(t,a,n,s),r):Wa.every((a,i)=>i<e?!0:t,r):!0;var Lg={compile:Dg,interpret:qg};const{Core:mm,Schema:Xa,Instance:Ki}=k,Mg=async(e,t,r)=>{const n=await Xa.step("items",r);return[Xa.typeOf(n,"array")?Xa.length(n):Number.MAX_SAFE_INTEGER,await mm.compileSchema(e,t)]},dm=([e,t],r,n,s)=>Ki.typeOf(r,"array")?Ki.every((a,i)=>i<e||mm.interpretSchema(t,a,n,s),r):!0,Vg=(e,t,r,n)=>dm(e,t,r,n)&&new Set(Ki.map((s,a)=>a,t));var Ug={compile:Mg,interpret:dm,collectEvaluatedItems:Vg};const{Core:hm,Schema:Lt,Instance:fl}=k,Bg=async(e,t,r)=>{const n=await Lt.step("properties",r),s=Lt.typeOf(n,"object")?Lt.keys(n):[],a=await Lt.step("patternProperties",r),i=Lt.typeOf(a,"object")?Lt.keys(a).map(o=>new RegExp(o)):[];return Lt.typeOf(e,"boolean")?[s,i,Lt.value(e)]:[s,i,await hm.compileSchema(e,t)]},Fg=([e,t,r],n,s,a)=>{if(!fl.typeOf(n,"object"))return!0;const i=fl.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?i.every(([,o])=>hm.interpretSchema(r,o,s,a)):i.length===0||r};var Kg={compile:Bg,interpret:Fg};const{Core:ym,Schema:kr,Instance:ul}=k,Jg=async(e,t,r)=>{const n=await kr.step("properties",r),s=kr.typeOf(n,"object")?kr.keys(n):[],a=await kr.step("patternProperties",r),i=kr.typeOf(a,"object")?kr.keys(a).map(o=>new RegExp(o)):[];return[s,i,await ym.compileSchema(e,t)]},$m=([e,t,r],n,s,a)=>ul.typeOf(n,"object")?ul.entries(n).filter(([i])=>!e.includes(i)&&!t.some(o=>o.test(i))).every(([,i])=>ym.interpretSchema(r,i,s,a)):!0,zg=(e,t,r,n)=>$m(e,t,r,n)&&[new RegExp("")];var Gg={compile:Jg,interpret:$m,collectEvaluatedProperties:zg};const{Core:wa,Schema:Hg}=k,pl=fe,Wg=(e,t)=>pl.pipeline([Hg.map(async r=>wa.compileSchema(await r,t)),pl.all],e),Xg=(e,t,r,n)=>e.every(s=>wa.interpretSchema(s,t,r,n)),Yg=(e,t,r,n)=>e.reduce((s,a)=>{const i=s&&wa.collectEvaluatedProperties(a,t,r,n);return i!==!1&&[...s,...i]},[]),Qg=(e,t,r,n)=>e.reduce((s,a)=>{const i=s!==!1&&wa.collectEvaluatedItems(a,t,r,n);return i!==!1&&new Set([...s,...i])},new Set);var Zg={compile:Wg,interpret:Xg,collectEvaluatedProperties:Yg,collectEvaluatedItems:Qg};const{Core:Oa,Schema:ev}=k,ml=fe,tv=(e,t)=>ml.pipeline([ev.map(async r=>Oa.compileSchema(await r,t)),ml.all],e),rv=(e,t,r,n)=>e.filter(a=>Oa.interpretSchema(a,t,r,n)).length>0,nv=(e,t,r,n)=>e.reduce((s,a)=>{const i=Oa.collectEvaluatedProperties(a,t,r,n);return i!==!1?[...s||[],...i]:s},!1),sv=(e,t,r,n)=>e.reduce((s,a)=>{const i=Oa.collectEvaluatedItems(a,t,r,n);return i!==!1?new Set([...s||[],...i]):s},!1);var av={compile:tv,interpret:rv,collectEvaluatedProperties:nv,collectEvaluatedItems:sv},iv=Object.keys,dl=JSON.stringify;function Cn(e,t){var r,n,s,a,i,o,c;if(c=typeof e,c==="string")return dl(e);if(e===!0)return"true";if(e===!1)return"false";if(e===null)return"null";if(e instanceof Array){for(s="[",n=e.length-1,r=0;r<n;r++)s+=Cn(e[r],!1)+",";return n>-1&&(s+=Cn(e[r],!1)),s+"]"}if(e instanceof Object){if(typeof e.toJSON=="function")return Cn(e.toJSON(),t);for(a=iv(e).sort(),n=a.length,s="",r=0;r<n;)i=a[r],o=Cn(e[i],!0),o!==void 0&&(r&&s!==""&&(s+=","),s+=dl(i)+":"+o),r++;return"{"+s+"}"}switch(c){case"function":case"undefined":return t?void 0:null;default:return isFinite(e)?e:null}}var Dt=function(e){return""+Cn(e,!1)};const{Schema:ov,Instance:cv}=k,gm=Dt,lv=e=>gm(ov.value(e)),fv=(e,t)=>gm(cv.value(t))===e;var uv={compile:lv,interpret:fv};const{Core:vm,Instance:hl}=k,pv=(e,t)=>vm.compileSchema(e,t),mv=(e,t,r,n)=>!hl.typeOf(t,"array")||hl.some(s=>vm.interpretSchema(e,s,r,n),t);var dv={compile:pv,interpret:mv};const{Core:Qo,Schema:jr,Instance:Ji}=k,hv=async(e,t,r)=>{const n=await Qo.compileSchema(e,t),s=await jr.step("minContains",r),a=jr.typeOf(s,"number")?jr.value(s):1,i=await jr.step("maxContains",r),o=jr.typeOf(i,"number")?jr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},bm=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!Ji.typeOf(n,"array"))return!0;const i=Ji.reduce((o,c)=>Qo.interpretSchema(e,c,s,a)?o+1:o,0,n);return i>=t&&i<=r},yv=(e,t,r,n)=>bm(e,t,r,n)&&Ji.reduce((s,a,i)=>Qo.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t);var $v={compile:hv,interpret:bm,collectEvaluatedItems:yv};const{Core:gv,Schema:vv}=k,Ya=fe,bv=async(e,t)=>{await Ya.pipeline([vv.entries,Ya.map(([,r])=>gv.compileSchema(r,t)),Ya.all],e)},Sv=()=>!0;var Iv={compile:bv,interpret:Sv};const{Core:Sm,Schema:Qa,Instance:yl}=k,Za=fe,wv=(e,t)=>Za.pipeline([Qa.entries,Za.map(async([r,n])=>[r,Qa.typeOf(n,"array")?Qa.value(n):await Sm.compileSchema(n,t)]),Za.all],e),Ov=(e,t,r,n)=>{const s=yl.value(t);return!yl.typeOf(t,"object")||e.every(([a,i])=>a in s?Array.isArray(i)?i.every(o=>o in s):Sm.interpretSchema(i,t,r,n):!0)};var Ev={compile:wv,interpret:Ov};const{Schema:$l,Instance:gl}=k,ei=fe,Pv=e=>ei.pipeline([$l.entries,ei.map(([t,r])=>[t,$l.value(r)]),ei.all],e),kv=(e,t)=>{const r=gl.value(t);return!gl.typeOf(t,"object")||e.every(([n,s])=>!(n in r)||s.every(a=>a in r))};var jv={compile:Pv,interpret:kv};const{Core:Zo,Schema:Av,Instance:zi}=k,ti=fe,xv=(e,t)=>ti.pipeline([Av.entries,ti.map(async([r,n])=>[r,await Zo.compileSchema(n,t)]),ti.all],e),_v=(e,t,r,n)=>{const s=zi.value(t);return!zi.typeOf(t,"object")||e.every(([a,i])=>!(a in s)||Zo.interpretSchema(i,t,r,n))},Cv=(e,t,r,n)=>e.reduce((s,[a,i])=>{if(!s||!zi.has(a,t))return s;const o=Zo.collectEvaluatedProperties(i,t,r,n);return o!==!1&&s.concat(o)},[]);var Nv={compile:xv,interpret:_v,collectEvaluatedProperties:Cv};const{Schema:Tv,Instance:Rv}=k,Im=Dt,Dv=e=>Tv.value(e).map(Im),qv=(e,t)=>e.some(r=>Im(Rv.value(t))===r);var Lv={compile:Dv,interpret:qv};const{Schema:Mv,Instance:vl}=k,Vv=async e=>Mv.value(e),Uv=(e,t)=>!vl.typeOf(t,"number")||vl.value(t)<e;var Bv={compile:Vv,interpret:Uv};const{Schema:Fv,Instance:bl}=k,Kv=async e=>Fv.value(e),Jv=(e,t)=>!bl.typeOf(t,"number")||bl.value(t)>e;var zv={compile:Kv,interpret:Jv};const{Core:Ea}=k,Gv=(e,t)=>Ea.compileSchema(e,t),Hv=(e,t,r,n)=>(Ea.interpretSchema(e,t,r,n),!0),Wv=(e,t,r,n)=>Ea.collectEvaluatedProperties(e,t,r,n)||[],Xv=(e,t,r,n)=>Ea.collectEvaluatedItems(e,t,r,n)||new Set;var Yv={compile:Gv,interpret:Hv,collectEvaluatedProperties:Wv,collectEvaluatedItems:Xv};const{Core:Gr,Schema:Sl}=k,Qv=async(e,t,r)=>{if(Sl.has("if",r)){const n=await Sl.step("if",r);return[await Gr.compileSchema(n,t),await Gr.compileSchema(e,t)]}else return[]},Zv=([e,t],r,n,s)=>e===void 0||!ec(e,r,n,s)||Gr.interpretSchema(t,r,n,s),ec=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Gr.getKeyword(a).interpret(i,t,r,n))},eb=([e,t],r,n,s)=>e===void 0||!ec(e,r,n,s)?[]:Gr.collectEvaluatedProperties(t,r,n,s),tb=([e,t],r,n,s)=>e===void 0||!ec(e,r,n,s)?new Set:Gr.collectEvaluatedItems(t,r,n,s);var rb={compile:Qv,interpret:Zv,collectEvaluatedProperties:eb,collectEvaluatedItems:tb};const{Core:Hr,Schema:Il}=k,nb=async(e,t,r)=>{if(Il.has("if",r)){const n=await Il.step("if",r);return[await Hr.compileSchema(n,t),await Hr.compileSchema(e,t)]}else return[]},sb=([e,t],r,n,s)=>e===void 0||tc(e,r,n,s)||Hr.interpretSchema(t,r,n,s),tc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Hr.getKeyword(a).interpret(i,t,r,n))},ab=([e,t],r,n,s)=>e===void 0||tc(e,r,n,s)?[]:Hr.collectEvaluatedProperties(t,r,n,s),ib=([e,t],r,n,s)=>e===void 0||tc(e,r,n,s)?new Set:Hr.collectEvaluatedItems(t,r,n,s);var ob={compile:nb,interpret:sb,collectEvaluatedProperties:ab,collectEvaluatedItems:ib};const{Core:ea,Schema:wl,Instance:Ds}=k,cb=async(e,t)=>{if(wl.typeOf(e,"array")){const r=await wl.map(n=>ea.compileSchema(n,t),e);return Promise.all(r)}else return ea.compileSchema(e,t)},wm=(e,t,r,n)=>Ds.typeOf(t,"array")?typeof e=="string"?Ds.every(s=>ea.interpretSchema(e,s,r,n),t):Ds.every((s,a)=>!(a in e)||ea.interpretSchema(e[a],s,r,n),t):!0,lb=(e,t,r,n)=>wm(e,t,r,n)&&(typeof e=="string"?new Set(Ds.map((s,a)=>a,t)):new Set(e.map((s,a)=>a)));var fb={compile:cb,interpret:wm,collectEvaluatedItems:lb};const{Core:Om,Schema:ri,Instance:Gi}=k,ub=async(e,t,r)=>{const n=await ri.step("prefixItems",r);return[ri.typeOf(n,"array")?ri.length(n):0,await Om.compileSchema(e,t)]},Em=([e,t],r,n,s)=>Gi.typeOf(r,"array")?Gi.every((a,i)=>i<e||Om.interpretSchema(t,a,n,s),r):!0,pb=(e,t,r,n)=>Em(e,t,r,n)&&new Set(Gi.map((s,a)=>a,t));var mb={compile:ub,interpret:Em,collectEvaluatedItems:pb};const{Schema:db,Instance:Ol}=k,hb=e=>db.value(e),yb=(e,t)=>!Ol.typeOf(t,"array")||Ol.length(t)<=e;var $b={compile:hb,interpret:yb};const{Schema:gb,Instance:El}=k,vb=e=>gb.value(e),bb=(e,t)=>!El.typeOf(t,"string")||El.length(t)<=e;var Sb={compile:vb,interpret:bb};const{Schema:Ib,Instance:Pl}=k,wb=e=>Ib.value(e),Ob=(e,t)=>!Pl.typeOf(t,"string")||[...Pl.value(t)].length<=e;var Eb={compile:wb,interpret:Ob};const{Schema:Pb,Instance:kl}=k,kb=e=>Pb.value(e),jb=(e,t)=>!kl.typeOf(t,"object")||kl.keys(t).length<=e;var Ab={compile:kb,interpret:jb};const{Schema:ni,Instance:jl}=k,xb=async(e,t,r)=>{const n=await ni.step("exclusiveMaximum",r),s=ni.value(n);return[ni.value(e),s]},_b=([e,t],r)=>{if(!jl.typeOf(r,"number"))return!0;const n=jl.value(r);return t?n<e:n<=e};var Cb={compile:xb,interpret:_b};const{Schema:Nb,Instance:Al}=k,Tb=async e=>Nb.value(e),Rb=(e,t)=>!Al.typeOf(t,"number")||Al.value(t)<=e;var Db={compile:Tb,interpret:Rb};const{Schema:qb,Instance:xl}=k,Lb=e=>qb.value(e),Mb=(e,t)=>!xl.typeOf(t,"array")||xl.length(t)>=e;var Vb={compile:Lb,interpret:Mb};const{Schema:Ub,Instance:_l}=k,Bb=e=>Ub.value(e),Fb=(e,t)=>!_l.typeOf(t,"string")||_l.length(t)>=e;var Kb={compile:Bb,interpret:Fb};const{Schema:Jb,Instance:Cl}=k,zb=e=>Jb.value(e),Gb=(e,t)=>!Cl.typeOf(t,"string")||[...Cl.value(t)].length>=e;var Hb={compile:zb,interpret:Gb};const{Schema:Wb,Instance:Nl}=k,Xb=e=>Wb.value(e),Yb=(e,t)=>!Nl.typeOf(t,"object")||Nl.keys(t).length>=e;var Qb={compile:Xb,interpret:Yb};const{Schema:si,Instance:Tl}=k,Zb=async(e,t,r)=>{const n=await si.step("exclusiveMinimum",r),s=si.value(n);return[si.value(e),s]},e1=([e,t],r)=>{if(!Tl.typeOf(r,"number"))return!0;const n=Tl.value(r);return t?n>e:n>=e};var t1={compile:Zb,interpret:e1};const{Schema:r1,Instance:Rl}=k,n1=async e=>r1.value(e),s1=(e,t)=>!Rl.typeOf(t,"number")||Rl.value(t)>=e;var a1={compile:n1,interpret:s1};const{Schema:i1,Instance:Dl}=k,o1=e=>i1.value(e),c1=(e,t)=>{if(!Dl.typeOf(t,"number"))return!0;const r=Dl.value(t)%e;return ql(0,r)||ql(e,r)},ql=(e,t)=>Math.abs(e-t)<11920929e-14;var l1={compile:o1,interpret:c1};const{Core:Pm}=k,f1=Pm.compileSchema,u1=(e,t,r,n)=>!Pm.interpretSchema(e,t,r,n);var p1={compile:f1,interpret:u1};const{Core:Pa,Schema:m1}=k,d1=async(e,t)=>{const r=await m1.map(n=>Pa.compileSchema(n,t),e);return Promise.all(r)},h1=(e,t,r,n)=>{let s=0;for(const a of e)if(Pa.interpretSchema(a,t,r,n)&&s++,s>1)break;return s===1},y1=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Pa.collectEvaluatedProperties(i,t,r,n);return o?s++===0&&o:a},!1)},$1=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Pa.collectEvaluatedItems(i,t,r,n);return o?s++===0&&o:a},!1)};var g1={compile:d1,interpret:h1,collectEvaluatedProperties:y1,collectEvaluatedItems:$1};const{Schema:v1,Instance:Ll}=k,b1=e=>new RegExp(v1.value(e),"u"),S1=(e,t)=>!Ll.typeOf(t,"string")||e.test(Ll.value(t));var I1={compile:b1,interpret:S1};const{Core:km,Schema:w1,Instance:Ml}=k,ai=fe,O1=(e,t)=>ai.pipeline([w1.entries,ai.map(async([r,n])=>[new RegExp(r,"u"),await km.compileSchema(n,t)]),ai.all],e),jm=(e,t,r,n)=>!Ml.typeOf(t,"object")||e.every(([s,a])=>Ml.entries(t).filter(([i])=>s.test(i)).every(([,i])=>km.interpretSchema(a,i,r,n))),E1=(e,t,r,n)=>jm(e,t,r,n)&&e.map(([s])=>s);var P1={compile:O1,interpret:jm,collectEvaluatedProperties:E1};const k1=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,j1=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),A1=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Am={isObject:k1,escapeRegExp:j1,splitUrl:A1};const{Core:xm,Schema:x1,Instance:Vl}=k,Ul=fe,{escapeRegExp:_1}=Am,C1=(e,t)=>Ul.pipeline([x1.entries,Ul.reduce(async(r,[n,s])=>(r[n]=await xm.compileSchema(s,t),r),Object.create(null))],e),_m=(e,t,r,n)=>!Vl.typeOf(t,"object")||Vl.entries(t).filter(([s])=>s in e).every(([s,a])=>xm.interpretSchema(e[s],a,r,n)),N1=(e,t,r,n)=>_m(e,t,r,n)&&Object.keys(e).map(s=>new RegExp(`^${_1(s)}$`));var T1={compile:C1,interpret:_m,collectEvaluatedProperties:N1};const{Core:Cm,Instance:ii}=k,R1=(e,t)=>Cm.compileSchema(e,t),D1=(e,t,r,n)=>!ii.typeOf(t,"object")||ii.keys(t).every(s=>Cm.interpretSchema(e,ii.cons(s),r,n));var q1={compile:R1,interpret:D1};const{Core:Bn,Schema:qs}=k,{splitUrl:L1}=Am,M1=async(e,t)=>{const[,r]=L1(qs.value(e)),n=await qs.get(qs.value(e),e);return await Bn.compileSchema(n,t),[n.id,r]},V1=([e,t],r,n,s)=>{if(t in n.metaData[e].dynamicAnchors)return Bn.interpretSchema(s[t],r,n,s);{const a=qs.getAnchorPointer(n.metaData[e],t);return Bn.interpretSchema(`${e}#${encodeURI(a)}`,r,n,s)}},U1=Bn.collectEvaluatedProperties,B1=Bn.collectEvaluatedItems;var F1={compile:M1,interpret:V1,collectEvaluatedProperties:U1,collectEvaluatedItems:B1};const{Core:ka,Schema:Bl}=k,K1=async(e,t)=>{const r=await Bl.get(Bl.value(e),e);return ka.compileSchema(r,t)},J1=ka.interpretSchema,z1=ka.collectEvaluatedProperties,G1=ka.collectEvaluatedItems;var H1={compile:K1,interpret:J1,collectEvaluatedProperties:z1,collectEvaluatedItems:G1};const{Schema:W1,Instance:Fl}=k,X1=e=>W1.value(e),Y1=(e,t)=>!Fl.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(Fl.value(t),r));var Q1={compile:X1,interpret:Y1};const{Core:Nm,Schema:Z1,Instance:Kl}=k,Jl=fe,e0=(e,t)=>Jl.pipeline([Z1.map(r=>Nm.compileSchema(r,t)),Jl.all],e),Tm=(e,t,r,n)=>Kl.typeOf(t,"array")?Kl.every((s,a)=>!(a in e)||Nm.interpretSchema(e[a],s,r,n),t):!0,t0=(e,t,r,n)=>Tm(e,t,r,n)&&new Set(e.map((s,a)=>a));var r0={compile:e0,interpret:Tm,collectEvaluatedItems:t0};const{Schema:n0,Instance:zl}=k,s0=e=>n0.value(e),a0=(e,t)=>typeof e=="string"?zl.typeOf(t,e):e.some(zl.typeOf(t));var i0={compile:s0,interpret:a0};const{Core:Hi,Schema:o0,Instance:Ls}=k,c0=async(e,t,r)=>[o0.uri(r),await Hi.compileSchema(e,t)],Rm=([e,t],r,n,s)=>{if(!Ls.typeOf(r,"array"))return!0;const a=Hi.collectEvaluatedItems(e,r,n,s,!0);return a===!1||Ls.every((i,o)=>a.has(o)||Hi.interpretSchema(t,Ls.step(o,r),n,s),r)},l0=(e,t,r,n)=>Rm(e,t,r,n)&&new Set(Ls.map((s,a)=>a,t));var f0={compile:c0,interpret:Rm,collectEvaluatedItems:l0};const{Core:Wi,Schema:u0,Instance:Gl}=k,p0=async(e,t,r)=>[u0.uri(r),await Wi.compileSchema(e,t)],Dm=([e,t],r,n,s)=>{if(!Gl.typeOf(r,"object"))return!0;const a=Wi.collectEvaluatedProperties(e,r,n,s,!0);return!a||Gl.entries(r).filter(([i])=>!a.some(o=>i.match(o))).every(([,i])=>Wi.interpretSchema(t,i,n,s))},m0=(e,t,r,n)=>Dm(e,t,r,n)&&[new RegExp("")];var d0={compile:p0,interpret:Dm,collectEvaluatedProperties:m0};const{Schema:h0,Instance:oi}=k,y0=Dt,$0=e=>h0.value(e),g0=(e,t)=>{if(!oi.typeOf(t,"array")||e===!1)return!0;const r=oi.map(n=>y0(oi.value(n)),t);return new Set(r).size===r.length};var v0={compile:$0,interpret:g0};const{Keywords:Hl}=k;var on={additionalItems:Lg,additionalItems6:Ug,additionalProperties:Kg,additionalProperties6:Gg,allOf:Zg,anyOf:av,const:uv,contains:dv,containsMinContainsMaxContains:$v,definitions:Iv,dependencies:Ev,dependentRequired:jv,dependentSchemas:Nv,enum:Lv,exclusiveMaximum:Bv,exclusiveMinimum:zv,if:Yv,then:rb,else:ob,items:fb,items202012:mb,maxItems:$b,maxLength:Sb,maxLength6:Eb,maxProperties:Ab,maximumExclusiveMaximum:Cb,maximum:Db,metaData:Hl.metaData,minItems:Vb,minLength:Kb,minLength6:Hb,minProperties:Qb,minimumExclusiveMinimum:t1,minimum:a1,multipleOf:l1,not:p1,oneOf:g1,pattern:I1,patternProperties:P1,properties:T1,propertyNames:q1,dynamicRef:F1,ref:H1,required:Q1,tupleItems:r0,type:i0,unevaluatedItems:f0,unevaluatedProperties:d0,uniqueItems:v0,validate:Hl.validate},b0=`{
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
}`;const{Core:S0,Schema:es}=k,me=on,I0=b0,ts="http://json-schema.org/draft-04/schema";es.setConfig(ts,"baseToken","id");es.setConfig(ts,"embeddedToken","id");es.setConfig(ts,"anchorToken","id");es.setConfig(ts,"jrefToken","$ref");es.add(JSON.parse(I0));S0.defineVocabulary(ts,{validate:me.validate,additionalItems:me.additionalItems,additionalProperties:me.additionalProperties,allOf:me.allOf,anyOf:me.anyOf,default:me.metaData,definitions:me.definitions,dependencies:me.dependencies,description:me.metaData,enum:me.enum,format:me.metaData,items:me.items,maxItems:me.maxItems,maxLength:me.maxLength,maxProperties:me.maxProperties,maximum:me.maximumExclusiveMaximum,minItems:me.minItems,minLength:me.minLength,minProperties:me.minProperties,minimum:me.minimumExclusiveMinimum,multipleOf:me.multipleOf,not:me.not,oneOf:me.oneOf,pattern:me.pattern,patternProperties:me.patternProperties,properties:me.properties,required:me.required,title:me.metaData,type:me.type,uniqueItems:me.uniqueItems});var w0=`{
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
}`;const{Core:O0,Schema:rs}=k,ie=on,E0=w0,ns="http://json-schema.org/draft-06/schema";rs.setConfig(ns,"baseToken","$id");rs.setConfig(ns,"embeddedToken","$id");rs.setConfig(ns,"anchorToken","$id");rs.setConfig(ns,"jrefToken","$ref");rs.add(JSON.parse(E0));O0.defineVocabulary(ns,{validate:ie.validate,additionalItems:ie.additionalItems6,additionalProperties:ie.additionalProperties6,allOf:ie.allOf,anyOf:ie.anyOf,const:ie.const,contains:ie.contains,default:ie.metaData,definitions:ie.definitions,dependencies:ie.dependencies,description:ie.metaData,enum:ie.enum,examples:ie.metaData,exclusiveMaximum:ie.exclusiveMaximum,exclusiveMinimum:ie.exclusiveMinimum,format:ie.metaData,items:ie.items,maxItems:ie.maxItems,maxLength:ie.maxLength6,maxProperties:ie.maxProperties,maximum:ie.maximum,minItems:ie.minItems,minLength:ie.minLength6,minProperties:ie.minProperties,minimum:ie.minimum,multipleOf:ie.multipleOf,not:ie.not,oneOf:ie.oneOf,pattern:ie.pattern,patternProperties:ie.patternProperties,properties:ie.properties,propertyNames:ie.propertyNames,required:ie.required,title:ie.metaData,type:ie.type,uniqueItems:ie.uniqueItems});var P0=`{
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
}`;const{Core:k0,Schema:ss}=k,ne=on,j0=P0,as="http://json-schema.org/draft-07/schema";ss.setConfig(as,"baseToken","$id");ss.setConfig(as,"embeddedToken","$id");ss.setConfig(as,"anchorToken","$id");ss.setConfig(as,"jrefToken","$ref");ss.add(JSON.parse(j0));k0.defineVocabulary(as,{validate:ne.validate,additionalItems:ne.additionalItems6,additionalProperties:ne.additionalProperties6,allOf:ne.allOf,anyOf:ne.anyOf,const:ne.const,contains:ne.contains,default:ne.metaData,definitions:ne.definitions,dependencies:ne.dependencies,description:ne.metaData,enum:ne.enum,exclusiveMaximum:ne.exclusiveMaximum,exclusiveMinimum:ne.exclusiveMinimum,format:ne.metaData,if:ne.if,then:ne.then,else:ne.else,items:ne.items,maxItems:ne.maxItems,maxLength:ne.maxLength6,maxProperties:ne.maxProperties,maximum:ne.maximum,minItems:ne.minItems,minLength:ne.minLength6,minProperties:ne.minProperties,minimum:ne.minimum,multipleOf:ne.multipleOf,not:ne.not,oneOf:ne.oneOf,pattern:ne.pattern,patternProperties:ne.patternProperties,properties:ne.properties,propertyNames:ne.propertyNames,readOnly:ne.metaData,required:ne.required,title:ne.metaData,type:ne.type,uniqueItems:ne.uniqueItems,writeOnly:ne.metaData});var A0=`{
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
}`,x0=`{
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
}`,_0=`{
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
}`,C0=`{
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
}`,N0=`{
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
}`,T0=`{
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
}`,R0=`{
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
}`;const{Core:is,Schema:Ze}=k,J=on,D0=A0,q0=x0,L0=_0,M0=C0,V0=N0,U0=T0,B0=R0,cn="https://json-schema.org/draft/2019-09/schema";Ze.setConfig(cn,"baseToken","$id");Ze.setConfig(cn,"embeddedToken","$id");Ze.setConfig(cn,"anchorToken","$anchor");Ze.setConfig(cn,"recursiveAnchorToken","$recursiveAnchor");Ze.setConfig(cn,"vocabularyToken","$vocabulary");Ze.setConfig(cn,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);Ze.add(JSON.parse(D0));Ze.add(JSON.parse(q0));is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:J.validate,$defs:J.definitions,$recursiveRef:J.dynamicRef,$ref:J.ref});Ze.add(JSON.parse(L0));is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:J.additionalItems6,additionalProperties:J.additionalProperties6,allOf:J.allOf,anyOf:J.anyOf,contains:J.containsMinContainsMaxContains,dependentSchemas:J.dependentSchemas,if:J.if,then:J.then,else:J.else,items:J.items,not:J.not,oneOf:J.oneOf,patternProperties:J.patternProperties,properties:J.properties,propertyNames:J.propertyNames,unevaluatedItems:J.unevaluatedItems,unevaluatedProperties:J.unevaluatedProperties});Ze.add(JSON.parse(M0));is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:J.const,dependentRequired:J.dependentRequired,enum:J.enum,exclusiveMaximum:J.exclusiveMaximum,exclusiveMinimum:J.exclusiveMinimum,maxItems:J.maxItems,maxLength:J.maxLength6,maxProperties:J.maxProperties,maximum:J.maximum,minItems:J.minItems,minLength:J.minLength6,minProperties:J.minProperties,minimum:J.minimum,multipleOf:J.multipleOf,pattern:J.pattern,required:J.required,type:J.type,uniqueItems:J.uniqueItems});Ze.add(JSON.parse(V0));is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:J.metaData,deprecated:J.metaData,description:J.metaData,examples:J.metaData,readOnly:J.metaData,title:J.metaData,writeOnly:J.metaData});Ze.add(JSON.parse(U0));Ze.add(JSON.parse(B0));is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:J.metaData,contentMediaType:J.metaData,contentSchema:J.metaData});var F0=`{
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
}`,K0=`{
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
}`,J0=`{
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
}`,z0=`{
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
}`,G0=`{
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
}`,H0=`{
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
}`,W0=`{
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
}`,X0=`{
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
}`,Y0=`{
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
}`;const{Core:dr,Schema:Je}=k,B=on,Q0=F0,Z0=K0,eS=J0,tS=z0,rS=G0,nS=H0,sS=W0,aS=X0,iS=Y0,ln="https://json-schema.org/draft/2020-12/schema";Je.setConfig(ln,"baseToken","$id");Je.setConfig(ln,"embeddedToken","$id");Je.setConfig(ln,"anchorToken","$anchor");Je.setConfig(ln,"dynamicAnchorToken","$dynamicAnchor");Je.setConfig(ln,"vocabularyToken","$vocabulary");Je.setConfig(ln,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);Je.add(JSON.parse(Q0));Je.add(JSON.parse(Z0));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:B.validate,$defs:B.definitions,$dynamicRef:B.dynamicRef,$ref:B.ref});Je.add(JSON.parse(eS));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:B.additionalProperties6,allOf:B.allOf,anyOf:B.anyOf,contains:B.containsMinContainsMaxContains,dependentSchemas:B.dependentSchemas,if:B.if,then:B.then,else:B.else,items:B.items202012,not:B.not,oneOf:B.oneOf,patternProperties:B.patternProperties,prefixItems:B.tupleItems,properties:B.properties,propertyNames:B.propertyNames});Je.add(JSON.parse(tS));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:B.const,dependentRequired:B.dependentRequired,enum:B.enum,exclusiveMaximum:B.exclusiveMaximum,exclusiveMinimum:B.exclusiveMinimum,maxItems:B.maxItems,maxLength:B.maxLength6,maxProperties:B.maxProperties,maximum:B.maximum,minItems:B.minItems,minLength:B.minLength6,minProperties:B.minProperties,minimum:B.minimum,multipleOf:B.multipleOf,pattern:B.pattern,required:B.required,type:B.type,uniqueItems:B.uniqueItems});Je.add(JSON.parse(rS));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:B.metaData,deprecated:B.metaData,description:B.metaData,examples:B.metaData,readOnly:B.metaData,title:B.metaData,writeOnly:B.metaData});Je.add(JSON.parse(nS));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:B.metaData});Je.add(JSON.parse(sS));Je.add(JSON.parse(aS));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:B.metaData,contentMediaType:B.metaData,contentSchema:B.metaData});Je.add(JSON.parse(iS));dr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:B.unevaluatedItems,unevaluatedProperties:B.unevaluatedProperties});const{Core:vt,Schema:oS,InvalidSchemaError:cS}=k,lS=on;var De={add:vt.add,get:oS.get,validate:vt.validate,compile:vt.compile,interpret:vt.interpret,setMetaOutputFormat:vt.setMetaOutputFormat,setShouldMetaValidate:vt.setShouldMetaValidate,FLAG:vt.FLAG,BASIC:vt.BASIC,DETAILED:vt.DETAILED,VERBOSE:vt.VERBOSE,Keywords:lS,InvalidSchemaError:cS};De.add;De.get;De.validate;De.compile;De.interpret;De.setMetaOutputFormat;De.setShouldMetaValidate;De.FLAG;De.BASIC;De.DETAILED;De.VERBOSE;De.Keywords;De.InvalidSchemaError;var qm={exports:{}};(function(e){(function(t,r){e.exports?e.exports=r():t.moo=r()})(_o,function(){var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function s(I){return I&&r.call(I)==="[object RegExp]"}function a(I){return I&&typeof I=="object"&&!s(I)&&!Array.isArray(I)}function i(I){return I.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(I){var C=new RegExp("|"+I);return C.exec("").length-1}function c(I){return"("+I+")"}function l(I){if(!I.length)return"(?!)";var C=I.map(function(N){return"(?:"+N+")"}).join("|");return"(?:"+C+")"}function f(I){if(typeof I=="string")return"(?:"+i(I)+")";if(s(I)){if(I.ignoreCase)throw new Error("RegExp /i flag not allowed");if(I.global)throw new Error("RegExp /g flag is implied");if(I.sticky)throw new Error("RegExp /y flag is implied");if(I.multiline)throw new Error("RegExp /m flag is implied");return I.source}else throw new Error("Not a pattern: "+I)}function y(I){for(var C=Object.getOwnPropertyNames(I),N=[],R=0;R<C.length;R++){var H=C[R],D=I[H],Q=[].concat(D);if(H==="include"){for(var ye=0;ye<Q.length;ye++)N.push({include:Q[ye]});continue}var ge=[];Q.forEach(function(K){a(K)?(ge.length&&N.push(h(H,ge)),N.push(h(H,K)),ge=[]):ge.push(K)}),ge.length&&N.push(h(H,ge))}return N}function p(I){for(var C=[],N=0;N<I.length;N++){var R=I[N];if(R.include){for(var H=[].concat(R.include),D=0;D<H.length;D++)C.push({include:H[D]});continue}if(!R.type)throw new Error("Rule has no type: "+JSON.stringify(R));C.push(h(R.type,R))}return C}function h(I,C){if(a(C)||(C={match:C}),C.include)throw new Error("Matching rules cannot also include states");var N={defaultType:I,lineBreaks:!!C.error||!!C.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var R in C)t.call(C,R)&&(N[R]=C[R]);if(typeof N.type=="string"&&I!==N.type)throw new Error("Type transform cannot be a string (type '"+N.type+"' for token '"+I+"')");var H=N.match;return N.match=Array.isArray(H)?H:H?[H]:[],N.match.sort(function(D,Q){return s(D)&&s(Q)?0:s(Q)?-1:s(D)?1:Q.length-D.length}),N}function P(I){return Array.isArray(I)?p(I):y(I)}var m=h("error",{lineBreaks:!0,shouldThrow:!0});function d(I,C){for(var N=null,R=Object.create(null),H=!0,D=null,Q=[],ye=[],ge=0;ge<I.length;ge++)I[ge].fallback&&(H=!1);for(var ge=0;ge<I.length;ge++){var K=I[ge];if(K.include)throw new Error("Inheritance is not allowed in stateless lexers");if(K.error||K.fallback){if(N)throw!K.fallback==!N.fallback?new Error("Multiple "+(K.fallback?"fallback":"error")+" rules not allowed (for token '"+K.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+K.defaultType+"')");N=K}var Pe=K.match.slice();if(H)for(;Pe.length&&typeof Pe[0]=="string"&&Pe[0].length===1;){var ot=Pe.shift();R[ot.charCodeAt(0)]=K}if(K.pop||K.push||K.next){if(!C)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+K.defaultType+"')");if(K.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+K.defaultType+"')")}if(Pe.length!==0){H=!1,Q.push(K);for(var ke=0;ke<Pe.length;ke++){var He=Pe[ke];if(!!s(He)){if(D===null)D=He.unicode;else if(D!==He.unicode&&K.fallback===!1)throw new Error("If one rule is /u then all must be")}}var We=l(Pe.map(f)),he=new RegExp(We);if(he.test(""))throw new Error("RegExp matches empty string: "+he);var Z=o(We);if(Z>0)throw new Error("RegExp has capture groups: "+he+`
Use (?: \u2026 ) instead`);if(!K.lineBreaks&&he.test(`
`))throw new Error("Rule should declare lineBreaks: "+he);ye.push(c(We))}}var ce=N&&N.fallback,$e=n&&!ce?"ym":"gm",Ie=n||ce?"":"|";D===!0&&($e+="u");var Xe=new RegExp(l(ye)+Ie,$e);return{regexp:Xe,groups:Q,fast:R,error:N||m}}function v(I){var C=d(P(I));return new S({start:C},"start")}function O(I,C,N){var R=I&&(I.push||I.next);if(R&&!N[R])throw new Error("Missing state '"+R+"' (in token '"+I.defaultType+"' of state '"+C+"')");if(I&&I.pop&&+I.pop!=1)throw new Error("pop must be 1 (in token '"+I.defaultType+"' of state '"+C+"')")}function b(I,C){var N=I.$all?P(I.$all):[];delete I.$all;var R=Object.getOwnPropertyNames(I);C||(C=R[0]);for(var H=Object.create(null),D=0;D<R.length;D++){var Q=R[D];H[Q]=P(I[Q]).concat(N)}for(var D=0;D<R.length;D++)for(var Q=R[D],ye=H[Q],ge=Object.create(null),K=0;K<ye.length;K++){var Pe=ye[K];if(!!Pe.include){var ot=[K,1];if(Pe.include!==Q&&!ge[Pe.include]){ge[Pe.include]=!0;var ke=H[Pe.include];if(!ke)throw new Error("Cannot include nonexistent state '"+Pe.include+"' (in state '"+Q+"')");for(var He=0;He<ke.length;He++){var We=ke[He];ye.indexOf(We)===-1&&ot.push(We)}}ye.splice.apply(ye,ot),K--}}for(var he=Object.create(null),D=0;D<R.length;D++){var Q=R[D];he[Q]=d(H[Q],!0)}for(var D=0;D<R.length;D++){for(var Z=R[D],ce=he[Z],$e=ce.groups,K=0;K<$e.length;K++)O($e[K],Z,he);for(var Ie=Object.getOwnPropertyNames(ce.fast),K=0;K<Ie.length;K++)O(ce.fast[Ie[K]],Z,he)}return new S(he,C)}function j(I){for(var C=Object.create(null),N=Object.create(null),R=Object.getOwnPropertyNames(I),H=0;H<R.length;H++){var D=R[H],Q=I[D],ye=Array.isArray(Q)?Q:[Q];ye.forEach(function(ke){if((N[ke.length]=N[ke.length]||[]).push(ke),typeof ke!="string")throw new Error("keyword must be string (in keyword '"+D+"')");C[ke]=D})}function ge(ke){return JSON.stringify(ke)}var K="";K+=`switch (value.length) {
`;for(var Pe in N){var ot=N[Pe];K+="case "+Pe+`:
`,K+=`switch (value) {
`,ot.forEach(function(ke){var He=C[ke];K+="case "+ge(ke)+": return "+ge(He)+`
`}),K+=`}
`}return K+=`}
`,Function("value",K)}var S=function(I,C){this.startState=C,this.states=I,this.buffer="",this.stack=[],this.reset()};S.prototype.reset=function(I,C){return this.buffer=I||"",this.index=0,this.line=C?C.line:1,this.col=C?C.col:1,this.queuedToken=C?C.queuedToken:null,this.queuedThrow=C?C.queuedThrow:null,this.setState(C?C.state:this.startState),this.stack=C&&C.stack?C.stack.slice():[],this},S.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},S.prototype.setState=function(I){if(!(!I||this.state===I)){this.state=I;var C=this.states[I];this.groups=C.groups,this.error=C.error,this.re=C.regexp,this.fast=C.fast}},S.prototype.popState=function(){this.setState(this.stack.pop())},S.prototype.pushState=function(I){this.stack.push(this.state),this.setState(I)};var A=n?function(I,C){return I.exec(C)}:function(I,C){var N=I.exec(C);return N[0].length===0?null:N};S.prototype._getGroup=function(I){for(var C=this.groups.length,N=0;N<C;N++)if(I[N+1]!==void 0)return this.groups[N];throw new Error("Cannot find token type for matched text")};function G(){return this.value}if(S.prototype.next=function(){var I=this.index;if(this.queuedGroup){var C=this._token(this.queuedGroup,this.queuedText,I);return this.queuedGroup=null,this.queuedText="",C}var N=this.buffer;if(I!==N.length){var Q=this.fast[N.charCodeAt(I)];if(Q)return this._token(Q,N.charAt(I),I);var R=this.re;R.lastIndex=I;var H=A(R,N),D=this.error;if(H==null)return this._token(D,N.slice(I,N.length),I);var Q=this._getGroup(H),ye=H[0];return D.fallback&&H.index!==I?(this.queuedGroup=Q,this.queuedText=ye,this._token(D,N.slice(I,H.index),I)):this._token(Q,ye,I)}},S.prototype._token=function(I,C,N){var R=0;if(I.lineBreaks){var H=/\n/g,D=1;if(C===`
`)R=1;else for(;H.exec(C);)R++,D=H.lastIndex}var Q={type:typeof I.type=="function"&&I.type(C)||I.defaultType,value:typeof I.value=="function"?I.value(C):C,text:C,toString:G,offset:N,lineBreaks:R,line:this.line,col:this.col},ye=C.length;if(this.index+=ye,this.line+=R,R!==0?this.col=ye-D+1:this.col+=ye,I.shouldThrow)throw new Error(this.formatError(Q,"invalid syntax"));return I.pop?this.popState():I.push?this.pushState(I.push):I.next&&this.setState(I.next),Q},typeof Symbol!="undefined"&&Symbol.iterator){var re=function(I){this.lexer=I};re.prototype.next=function(){var I=this.lexer.next();return{value:I,done:!I}},re.prototype[Symbol.iterator]=function(){return this},S.prototype[Symbol.iterator]=function(){return new re(this)}}return S.prototype.formatError=function(I,C){if(I==null)var N=this.buffer.slice(this.index),I={text:N,offset:this.index,lineBreaks:N.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var R=Math.max(0,I.offset-I.col+1),H=I.lineBreaks?I.text.indexOf(`
`):I.text.length,D=this.buffer.substring(R,I.offset+H);return C+=" at line "+I.line+" col "+I.col+`:

`,C+="  "+D+`
`,C+="  "+Array(I.col).join(" ")+"^",C},S.prototype.clone=function(){return new S(this.states,this.state)},S.prototype.has=function(I){return!0},{compile:v,states:b,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:j}})})(qm);var St=qm.exports;const rc="[0-9]",fS="[1-9]",uS="[0-9a-fA-F]",Wl=`(?:\\\\["\\/\\\\brfnt]|\\\\u${uS}{4}|[^"\\\\])`,pS='"(?=[^"]*"\\s*:)',mS=`(?:0|${fS}${rc}*)`,dS=`\\.${rc}+`,hS="[eE]",yS=`${hS}[-+]?${rc}+`,$S=`-?${mS}(?:${dS})?(?:${yS})?`,gS=`(?:(?:\r?
)|[ 	])+`;var Xl=St.states({main:{WS:{match:new RegExp(gS),lineBreaks:!0},accent7:new RegExp(`true|false|${$S}`),accent3:["{","}","[","]"],accent6:"null",stringProperty:{match:new RegExp(pS),push:"property"},stringStart:{match:'"',push:"string"},other:/./},string:{accent7:{match:new RegExp(`${Wl}+`),lineBreaks:!0},stringEnd:{match:'"',pop:!0},other:/./},property:{accent1:{match:new RegExp(`${Wl}+`),lineBreaks:!0},propertyEnd:{match:'"',pop:!0},other:/./}});const nc="[0-9]",vS="[1-9]",Lm="[0-9a-fA-F]",Yl=`(?:\r?
)+`,lr="[ \\t]",bS=`^${lr}+`,SS=`(?:\\\\["\\/\\\\brfnt]|\\\\u${Lm}{4}|[^"\\\\])`,IS=`(?:\\\\['\\/\\\\brfnt]|\\\\u${Lm}{4}|[^'\\\\])`,Es=`(?:"${SS}*"|'${IS}*')`,Mm=`${lr}*:(?:${lr}+|$)`,wS=`[^\\s]+(?=${Mm})`,Xi=`${lr}*:`,Ql=`[^\\s]+(?=${Xi})`,OS=`(?:0|${vS}${nc}*)`,ES=`\\.${nc}+`,PS="[eE]",kS=`${PS}[-+]?${nc}+`,Ps=`-?${OS}(?:${ES})?(?:${kS})?`,jS=`-${lr}+`,ks=`#[^
]*`;var Zl=St.states({main:{WS:{match:new RegExp(Yl),lineBreaks:!0},indent:new RegExp(bS),comment:new RegExp(ks),inlineArray:{match:"[",type:St.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:St.keywords({accent3:"{"}),push:"inlineObject"},accent1:new RegExp(jS),accent7:["true","false","null",new RegExp(Es),new RegExp(Ps)],accent6:new RegExp(wS),accent3:{match:new RegExp(Mm),lineBreaks:!0,push:"property"},other:/[^#\n]+/},property:{WS:{match:new RegExp(Yl),lineBreaks:!0,pop:1},comment:new RegExp(ks),accent7:{match:["true","false","null",new RegExp(Es),new RegExp(Ps)],pop:1},other:/[^#\n]+/},inlineArray:{WS:new RegExp(`${lr}+`),comment:new RegExp(ks),inlineArray:{match:"[",type:St.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:St.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"]",type:St.keywords({accent3:"]"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Es),new RegExp(Ps)],accent6:new RegExp(Ql),accent3:{match:new RegExp(Xi),lineBreaks:!0},other:/[^\]\n,#]+/},inlineObject:{WS:new RegExp(`${lr}+`),comment:new RegExp(ks),inlineArray:{match:"[",type:St.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:St.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"}",type:St.keywords({accent3:"}"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Es),new RegExp(Ps)],accent6:new RegExp(Ql),accent3:{match:new RegExp(Xi),lineBreaks:!0},other:/[^}\n,#]+/}});function ef(e,t,r){const n=e.slice();return n[10]=t[r],n}function tf(e,t,r){const n=e.slice();return n[13]=t[r],n[15]=r,n}function rf(e){let t,r=e[15]+1+"",n;return{c(){t=W("div"),n=ue(r),this.h()},l(s){t=X(s,"DIV",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p:Ne,d(s){s&&x(t)}}}function AS(e){let t=e[10].value+"",r;return{c(){r=ue(t)},l(n){r=pe(n,t)},m(n,s){te(n,r,s)},p(n,s){s&8&&t!==(t=n[10].value+"")&&Ke(r,t)},d(n){n&&x(r)}}}function xS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent8 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function _S(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent7 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function CS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent6 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function NS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent5 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function TS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent4 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function RS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent3 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function DS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent2 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function qS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","accent1 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function LS(e){let t,r=e[10].value+"",n;return{c(){t=W("span"),n=ue(r),this.h()},l(s){t=X(s,"SPAN",{class:!0});var a=M(t);n=pe(a,r),a.forEach(x),this.h()},h(){_(t,"class","comment svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&x(t)}}}function nf(e){let t;function r(a,i){return a[10].type==="comment"?LS:a[10].type==="accent1"?qS:a[10].type==="accent2"?DS:a[10].type==="accent3"?RS:a[10].type==="accent4"?TS:a[10].type==="accent5"?NS:a[10].type==="accent6"?CS:a[10].type==="accent7"?_S:a[10].type==="accent8"?xS:AS}let n=r(e),s=n(e);return{c(){s.c(),t=zt()},l(a){s.l(a),t=zt()},m(a,i){s.m(a,i),te(a,t,i)},p(a,i){n===(n=r(a))&&s?s.p(a,i):(s.d(1),s=n(a),s&&(s.c(),s.m(t.parentNode,t)))},d(a){s.d(a),a&&x(t)}}}function MS(e){let t,r,n,s,a,i,o,c,l,f,y,p,h=[...Array(e[4])],P=[];for(let v=0;v<h.length;v+=1)P[v]=rf(tf(e,h,v));let m=e[3],d=[];for(let v=0;v<m.length;v+=1)d[v]=nf(ef(e,m,v));return{c(){t=W("div"),r=W("div");for(let v=0;v<P.length;v+=1)P[v].c();n=Te(),s=W("div"),a=W("pre"),i=ue("");for(let v=0;v<d.length;v+=1)d[v].c();o=ue(`
    `),c=Te(),l=W("textarea"),this.h()},l(v){t=X(v,"DIV",{class:!0});var O=M(t);r=X(O,"DIV",{class:!0});var b=M(r);for(let A=0;A<P.length;A+=1)P[A].l(b);b.forEach(x),n=Re(O),s=X(O,"DIV",{class:!0});var j=M(s);a=X(j,"PRE",{class:!0});var S=M(a);i=pe(S,"");for(let A=0;A<d.length;A+=1)d[A].l(S);o=pe(S,`
    `),S.forEach(x),c=Re(j),l=X(j,"TEXTAREA",{class:!0,"aria-label":!0}),M(l).forEach(x),j.forEach(x),O.forEach(x),this.h()},h(){_(r,"class","line-numbers svelte-564293"),_(a,"class","highlighted svelte-564293"),_(l,"class","src svelte-564293"),_(l,"aria-label","Code Editor"),_(s,"class","editable svelte-564293"),_(t,"class",f="Editor "+e[1]+" svelte-564293")},m(v,O){te(v,t,O),T(t,r);for(let b=0;b<P.length;b+=1)P[b].m(r,null);T(t,n),T(t,s),T(s,a),T(a,i);for(let b=0;b<d.length;b+=1)d[b].m(a,null);T(a,o),T(s,c),T(s,l),e[8](l),Gc(l,e[0]),y||(p=[ir(l,"input",e[9]),ir(l,"input",e[7])],y=!0)},p(v,[O]){if(O&16){h=[...Array(v[4])];let b;for(b=0;b<h.length;b+=1){const j=tf(v,h,b);P[b]?P[b].p(j,O):(P[b]=rf(j),P[b].c(),P[b].m(r,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=h.length}if(O&8){m=v[3];let b;for(b=0;b<m.length;b+=1){const j=ef(v,m,b);d[b]?d[b].p(j,O):(d[b]=nf(j),d[b].c(),d[b].m(a,o))}for(;b<d.length;b+=1)d[b].d(1);d.length=m.length}O&1&&Gc(l,v[0]),O&2&&f!==(f="Editor "+v[1]+" svelte-564293")&&_(t,"class",f)},i:Ne,o:Ne,d(v){v&&x(t),zs(P,v),zs(d,v),e[8](null),y=!1,Hu(p)}}}function VS(e,t,r){let n,s,{theme:a="solarized-dark"}=t,{value:i=""}=t,{format:o="json"}=t,c;const l=()=>{c.focus()};function f(h){Ih.call(this,e,h)}function y(h){Ut[h?"unshift":"push"](()=>{c=h,r(2,c)})}function p(){i=this.value,r(0,i)}return e.$$set=h=>{"theme"in h&&r(1,a=h.theme),"value"in h&&r(0,i=h.value),"format"in h&&r(5,o=h.format)},e.$$.update=()=>{e.$$.dirty&1&&r(4,n=(i.match(/\n/g)||[]).length+1),e.$$.dirty&33&&r(3,s=function(){return o==="json"?(Xl.reset(i),Array.from(Xl)):(Zl.reset(i),Array.from(Zl))}())},[i,a,c,s,n,o,l,f,y,p]}class US extends Wt{constructor(t){super(),Xt(this,t,VS,MS,Yt,{theme:1,value:0,format:5,focus:6})}get focus(){return this.$$.ctx[6]}}function sf(e,t,r){const n=e.slice();return n[18]=t[r],n[20]=r,n}function af(e){let t,r,n,s;function a(){return e[12](e[20])}return{c(){t=W("button"),r=ue("\xD7"),this.h()},l(i){t=X(i,"BUTTON",{class:!0});var o=M(t);r=pe(o,"\xD7"),o.forEach(x),this.h()},h(){_(t,"class","tab-close svelte-1ylgy73")},m(i,o){te(i,t,o),T(t,r),n||(s=ir(t,"click",a),n=!0)},p(i,o){e=i},d(i){i&&x(t),n=!1,s()}}}function of(e){let t,r,n=e[18].label+"",s,a,i,o,c,l,f=!e[18].persistent&&e[0].length>e[6]&&af(e);function y(){return e[13](e[20])}return{c(){t=W("button"),r=W("span"),s=ue(n),a=Te(),f&&f.c(),this.h()},l(p){t=X(p,"BUTTON",{role:!0,id:!0,"aria-selected":!0,"aria-controls":!0,class:!0});var h=M(t);r=X(h,"SPAN",{class:!0});var P=M(r);s=pe(P,n),P.forEach(x),a=Re(h),f&&f.l(h),h.forEach(x),this.h()},h(){_(r,"class","tab-label svelte-1ylgy73"),_(t,"role","tab"),_(t,"id",i=`${e[3]}-tab-${e[20]}`),_(t,"aria-selected",o=e[20]===e[1]),_(t,"aria-controls","tabpanel"),_(t,"class","svelte-1ylgy73"),Hc(t,"active",e[20]===e[5])},m(p,h){te(p,t,h),T(t,r),T(r,s),T(t,a),f&&f.m(t,null),c||(l=ir(t,"click",y),c=!0)},p(p,h){e=p,h&1&&n!==(n=e[18].label+"")&&Ke(s,n),!e[18].persistent&&e[0].length>e[6]?f?f.p(e,h):(f=af(e),f.c(),f.m(t,null)):f&&(f.d(1),f=null),h&8&&i!==(i=`${e[3]}-tab-${e[20]}`)&&_(t,"id",i),h&2&&o!==(o=e[20]===e[1])&&_(t,"aria-selected",o),h&32&&Hc(t,"active",e[20]===e[5])},d(p){p&&x(t),f&&f.d(),c=!1,l()}}}function cf(e){let t,r,n,s,a,i;return{c(){t=W("button"),r=W("span"),n=ue("+"),this.h()},l(o){t=X(o,"BUTTON",{role:!0,id:!0,class:!0});var c=M(t);r=X(c,"SPAN",{class:!0});var l=M(r);n=pe(l,"+"),l.forEach(x),c.forEach(x),this.h()},h(){_(r,"class","tab-label svelte-1ylgy73"),_(t,"role","tab"),_(t,"id",s=`${e[3]}-tab-${e[0].length}`),_(t,"class","svelte-1ylgy73")},m(o,c){te(o,t,c),T(t,r),T(r,n),a||(i=ir(t,"click",e[10]),a=!0)},p(o,c){c&9&&s!==(s=`${o[3]}-tab-${o[0].length}`)&&_(t,"id",s)},d(o){o&&x(t),a=!1,i()}}}function BS(e){let t,r,n,s,a,i,o,c,l,f=e[0],y=[];for(let d=0;d<f.length;d+=1)y[d]=of(sf(e,f,d));let p=e[4]&&cf(e);function h(d){e[15](d)}function P(d){e[16](d)}let m={};return e[0][e[1]].text!==void 0&&(m.value=e[0][e[1]].text),e[2]!==void 0&&(m.format=e[2]),a=new US({props:m}),e[14](a),Ut.push(()=>Dr(a,"value",h)),Ut.push(()=>Dr(a,"format",P)),a.$on("input",e[17]),{c(){t=W("div");for(let d=0;d<y.length;d+=1)y[d].c();r=Te(),p&&p.c(),n=Te(),s=W("div"),lt(a.$$.fragment),this.h()},l(d){t=X(d,"DIV",{role:!0,class:!0});var v=M(t);for(let b=0;b<y.length;b+=1)y[b].l(v);r=Re(v),p&&p.l(v),v.forEach(x),n=Re(d),s=X(d,"DIV",{role:!0,id:!0,"aria-labelledby":!0,class:!0});var O=M(s);ft(a.$$.fragment,O),O.forEach(x),this.h()},h(){_(t,"role","tablist"),_(t,"class","svelte-1ylgy73"),_(s,"role","tabpanel"),_(s,"id","tabpanel"),_(s,"aria-labelledby",c=`${e[3]}-tab-${e[1]}`),_(s,"class","svelte-1ylgy73")},m(d,v){te(d,t,v);for(let O=0;O<y.length;O+=1)y[O].m(t,null);T(t,r),p&&p.m(t,null),te(d,n,v),te(d,s,v),ut(a,s,null),l=!0},p(d,[v]){if(v&2667){f=d[0];let b;for(b=0;b<f.length;b+=1){const j=sf(d,f,b);y[b]?y[b].p(j,v):(y[b]=of(j),y[b].c(),y[b].m(t,r))}for(;b<y.length;b+=1)y[b].d(1);y.length=f.length}d[4]?p?p.p(d,v):(p=cf(d),p.c(),p.m(t,null)):p&&(p.d(1),p=null);const O={};!i&&v&3&&(i=!0,O.value=d[0][d[1]].text,qr(()=>i=!1)),!o&&v&4&&(o=!0,O.format=d[2],qr(()=>o=!1)),a.$set(O),(!l||v&10&&c!==(c=`${d[3]}-tab-${d[1]}`))&&_(s,"aria-labelledby",c)},i(d){l||(Be(a.$$.fragment,d),l=!0)},o(d){Fe(a.$$.fragment,d),l=!1},d(d){d&&x(t),zs(y,d),p&&p.d(),d&&x(n),d&&x(s),e[14](null),pt(a)}}}function FS(e,t,r){let{ns:n=""}=t,{tabs:s=[]}=t,{newTab:a=void 0}=t,{active:i=0}=t,{selected:o=0}=t,{minTabs:c=1}=t,{format:l="json"}=t,f;const y=wh();function p(S){r(1,o=S),f.focus()}function h(){r(0,s[s.length]=a(),s),r(1,o=s.length-1),f.focus()}function P(S){o>=S&&o>0&&r(1,o-=1),s.splice(S,1),r(0,s),f.focus()}const m=S=>P(S),d=S=>p(S);function v(S){Ut[S?"unshift":"push"](()=>{f=S,r(7,f)})}function O(S){e.$$.not_equal(s[o].text,S)&&(s[o].text=S,r(0,s))}function b(S){l=S,r(2,l)}const j=()=>y("input",s);return e.$$set=S=>{"ns"in S&&r(3,n=S.ns),"tabs"in S&&r(0,s=S.tabs),"newTab"in S&&r(4,a=S.newTab),"active"in S&&r(5,i=S.active),"selected"in S&&r(1,o=S.selected),"minTabs"in S&&r(6,c=S.minTabs),"format"in S&&r(2,l=S.format)},[s,o,l,n,a,i,c,f,y,p,h,P,m,d,v,O,b,j]}class lf extends Wt{constructor(t){super(),Xt(this,t,FS,BS,Yt,{ns:3,tabs:0,newTab:4,active:5,selected:1,minTabs:6,format:2})}}function ff(e,t,r){const n=e.slice();return n[2]=t[r],n}function KS(e){let t;function r(a,i){return a[1].output?zS:JS}let n=r(e),s=n(e);return{c(){s.c(),t=zt()},l(a){s.l(a),t=zt()},m(a,i){s.m(a,i),te(a,t,i)},p(a,i){n===(n=r(a))&&s?s.p(a,i):(s.d(1),s=n(a),s&&(s.c(),s.m(t.parentNode,t)))},d(a){s.d(a),a&&x(t)}}}function JS(e){let t=e[1]+"",r;return{c(){r=ue(t)},l(n){r=pe(n,t)},m(n,s){te(n,r,s)},p(n,s){s&1&&t!==(t=n[1]+"")&&Ke(r,t)},d(n){n&&x(r)}}}function zS(e){let t,r,n=e[1].output.errors,s=[];for(let a=0;a<n.length;a+=1)s[a]=pf(ff(e,n,a));return{c(){t=ue(`Invalid
    `),r=W("ul");for(let a=0;a<s.length;a+=1)s[a].c()},l(a){t=pe(a,`Invalid
    `),r=X(a,"UL",{});var i=M(r);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(x)},m(a,i){te(a,t,i),te(a,r,i);for(let o=0;o<s.length;o+=1)s[o].m(r,null)},p(a,i){if(i&1){n=a[1].output.errors;let o;for(o=0;o<n.length;o+=1){const c=ff(a,n,o);s[o]?s[o].p(c,i):(s[o]=pf(c),s[o].c(),s[o].m(r,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(a){a&&x(t),a&&x(r),zs(s,a)}}}function uf(e){let t,r,n=e[2].instanceLocation+"",s,a,i,o=e[2].absoluteKeywordLocation+"",c;return{c(){t=W("li"),r=W("code"),s=ue(n),a=ue(" fails schema constraint "),i=W("code"),c=ue(o),this.h()},l(l){t=X(l,"LI",{class:!0});var f=M(t);r=X(f,"CODE",{class:!0});var y=M(r);s=pe(y,n),y.forEach(x),a=pe(f," fails schema constraint "),i=X(f,"CODE",{class:!0});var p=M(i);c=pe(p,o),p.forEach(x),f.forEach(x),this.h()},h(){_(r,"class","svelte-1sdf2dp"),_(i,"class","svelte-1sdf2dp"),_(t,"class","svelte-1sdf2dp")},m(l,f){te(l,t,f),T(t,r),T(r,s),T(t,a),T(t,i),T(i,c)},p(l,f){f&1&&n!==(n=l[2].instanceLocation+"")&&Ke(s,n),f&1&&o!==(o=l[2].absoluteKeywordLocation+"")&&Ke(c,o)},d(l){l&&x(t)}}}function pf(e){let t=!e[2].valid&&!e[2].keyword.endsWith("#validate"),r,n=t&&uf(e);return{c(){n&&n.c(),r=zt()},l(s){n&&n.l(s),r=zt()},m(s,a){n&&n.m(s,a),te(s,r,a)},p(s,a){a&1&&(t=!s[2].valid&&!s[2].keyword.endsWith("#validate")),t?n?n.p(s,a):(n=uf(s),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&x(r)}}}function GS(e){let t=e[0]?"Valid":"",r;return{c(){r=ue(t)},l(n){r=pe(n,t)},m(n,s){te(n,r,s)},p(n,s){s&1&&t!==(t=n[0]?"Valid":"")&&Ke(r,t)},d(n){n&&x(r)}}}function HS(e){let t;return{c(){t=ue("Validating ...")},l(r){t=pe(r,"Validating ...")},m(r,n){te(r,t,n)},p:Ne,d(r){r&&x(t)}}}function WS(e){let t,r,n={ctx:e,current:null,token:null,hasCatch:!0,pending:HS,then:GS,catch:KS,value:0,error:1};return Gs(r=e[0],n),{c(){t=zt(),n.block.c()},l(s){t=zt(),n.block.l(s)},m(s,a){te(s,t,a),n.block.m(s,n.anchor=a),n.mount=()=>t.parentNode,n.anchor=t},p(s,[a]){e=s,n.ctx=e,a&1&&r!==(r=e[0])&&Gs(r,n)||Wu(n,e,a)},i:Ne,o:Ne,d(s){s&&x(t),n.block.d(s),n.token=null,n=null}}}function XS(e,t,r){let{results:n}=t;return e.$$set=s=>{"results"in s&&r(0,n=s.results)},[n]}class Vm extends Wt{constructor(t){super(),Xt(this,t,XS,WS,Yt,{results:0})}}function YS(e){let t,r,n,s,a;const i=e[2].default,o=uo(i,e,e[1],null);return{c(){t=W("a"),r=It("svg"),n=It("path"),s=Te(),o&&o.c(),this.h()},l(c){t=X(c,"A",{href:!0,class:!0});var l=M(t);r=wt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var f=M(r);n=wt(f,"path",{"fill-rule":!0,d:!0}),M(n).forEach(x),f.forEach(x),s=Re(l),o&&o.l(l),l.forEach(x),this.h()},h(){_(n,"fill-rule","evenodd"),_(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),_(r,"height","1.5em"),_(r,"viewBox","0 0 16 16"),_(r,"version","1.1"),_(r,"aria-hidden","true"),_(r,"class","svelte-i8toq"),_(t,"href",e[0]),_(t,"class","svelte-i8toq")},m(c,l){te(c,t,l),T(t,r),T(r,n),T(t,s),o&&o.m(t,null),a=!0},p(c,[l]){o&&o.p&&(!a||l&2)&&po(o,i,c,c[1],a?ho(i,c[1],l,null):mo(c[1]),null),(!a||l&1)&&_(t,"href",c[0])},i(c){a||(Be(o,c),a=!0)},o(c){Fe(o,c),a=!1},d(c){c&&x(t),o&&o.d(c)}}}function QS(e,t,r){let{$$slots:n={},$$scope:s}=t,{href:a=""}=t;return e.$$set=i=>{"href"in i&&r(0,a=i.href),"$$scope"in i&&r(1,s=i.$$scope)},[a,s,n]}class mf extends Wt{constructor(t){super(),Xt(this,t,QS,YS,Yt,{href:0})}}function ZS(e){let t,r,n,s,a;const i=e[2].default,o=uo(i,e,e[1],null);return{c(){t=W("a"),r=It("svg"),n=It("path"),s=Te(),o&&o.c(),this.h()},l(c){t=X(c,"A",{href:!0,class:!0});var l=M(t);r=wt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var f=M(r);n=wt(f,"path",{d:!0}),M(n).forEach(x),f.forEach(x),s=Re(l),o&&o.l(l),l.forEach(x),this.h()},h(){_(n,"d","M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"),_(r,"height","1em"),_(r,"viewBox","0 0 780 250"),_(r,"version","1.1"),_(r,"aria-hidden","true"),_(r,"class","svelte-wj8h0n"),_(t,"href",e[0]),_(t,"class","svelte-wj8h0n")},m(c,l){te(c,t,l),T(t,r),T(r,n),T(t,s),o&&o.m(t,null),a=!0},p(c,[l]){o&&o.p&&(!a||l&2)&&po(o,i,c,c[1],a?ho(i,c[1],l,null):mo(c[1]),null),(!a||l&1)&&_(t,"href",c[0])},i(c){a||(Be(o,c),a=!0)},o(c){Fe(o,c),a=!1},d(c){c&&x(t),o&&o.d(c)}}}function e2(e,t,r){let{$$slots:n={},$$scope:s}=t,{href:a=""}=t;return e.$$set=i=>{"href"in i&&r(0,a=i.href),"$$scope"in i&&r(1,s=i.$$scope)},[a,s,n]}class df extends Wt{constructor(t){super(),Xt(this,t,e2,ZS,Yt,{href:0})}}function t2(e){let t,r,n,s,a,i,o,c,l;const f=e[2].default,y=uo(f,e,e[1],null);return{c(){t=W("a"),r=It("svg"),n=It("g"),s=It("path"),a=It("path"),i=It("path"),o=It("path"),c=Te(),y&&y.c(),this.h()},l(p){t=X(p,"A",{href:!0,class:!0});var h=M(t);r=wt(h,"svg",{version:!0,viewBox:!0,height:!0,class:!0});var P=M(r);n=wt(P,"g",{transform:!0,id:!0});var m=M(n);s=wt(m,"path",{id:!0,d:!0,style:!0}),M(s).forEach(x),a=wt(m,"path",{id:!0,d:!0,style:!0}),M(a).forEach(x),i=wt(m,"path",{id:!0,d:!0,style:!0}),M(i).forEach(x),o=wt(m,"path",{id:!0,d:!0,style:!0}),M(o).forEach(x),m.forEach(x),P.forEach(x),c=Re(h),y&&y.l(h),h.forEach(x),this.h()},h(){_(s,"id","path4544"),_(s,"d","m 122.99401,114.18985 c -4.32897,-0.9404 -7.58044,-3.47848 -8.71251,-6.80095 -0.78921,-2.31618 -0.67682,-6.07238 0.33363,-11.150598 0.48507,-2.437836 0.88169,-5.347843 0.88139,-6.466688 -9.8e-4,-3.718098 -1.71106,-5.735418 -5.1001,-6.016462 l -1.9549,-0.162116 v -2.392655 -2.392657 l 1.85208,-0.250855 c 2.70243,-0.366031 3.74441,-1.02838 4.57629,-2.908984 0.61121,-1.381726 0.68884,-2.068648 0.50552,-4.472869 -0.11913,-1.562244 -0.53527,-4.348568 -0.92477,-6.191832 -0.98954,-4.682868 -0.94822,-8.485471 0.11707,-10.773163 1.56862,-3.368589 5.43705,-5.854553 9.93248,-6.382903 l 1.93299,-0.227185 v 2.518015 2.518015 h -1.29973 c -1.77186,0 -4.2497,1.262413 -4.8835,2.488054 -0.60797,1.175674 -0.65405,2.864146 -0.15834,5.802223 0.78343,4.643508 1.04707,9.098344 0.67592,11.421636 -0.42464,2.658142 -1.97477,5.796328 -3.6791,7.448236 l -1.18012,1.143813 1.61497,1.982752 c 1.99051,2.443801 2.76458,4.148744 3.24284,7.142561 0.37835,2.368341 0.0844,7.282673 -0.67072,11.213982 -1.05359,5.48514 0.1623,7.65141 4.66209,8.30613 l 1.67569,0.24382 v 2.44782 c 0,2.79211 0.17086,2.69708 -3.43917,1.91286 z"),bs(s,"fill","stroke-width:0.35277775"),_(a,"id","path4546"),_(a,"d","m 152.2304,112.24932 v -2.42987 l 2.04969,-0.42336 c 2.26276,-0.46736 4.054,-1.8634 4.45842,-3.47475 0.1274,-0.50758 -0.11267,-3.16398 -0.53347,-5.90311 -1.37183,-8.929552 -0.6114,-13.537042 2.85482,-17.297452 l 1.48237,-1.60818 -1.1108,-1.26512 c -3.97855,-4.53132 -4.66885,-8.552208 -3.15364,-18.369547 0.76342,-4.946305 0.76409,-4.994322 0.087,-6.173611 -0.79713,-1.388278 -3.28385,-2.776033 -4.97438,-2.776033 h -1.15997 v -2.469445 c 0,-2.811057 -0.0583,-2.773846 3.24583,-2.072788 3.9645,0.841179 6.80448,2.853272 8.27787,5.864775 0.84544,1.728026 0.97275,2.400136 0.94911,5.010889 -0.015,1.658349 -0.35758,4.682054 -0.76125,6.719346 -1.49867,7.563594 -1.3651,9.576204 0.7654,11.532814 0.98915,0.90842 1.64012,1.17274 3.37032,1.36849 l 2.14439,0.24261 v 2.42387 2.42388 l -1.6757,7.1e-4 c -2.1517,7e-4 -3.9323,0.90924 -4.83869,2.46889 -0.95194,1.63803 -0.89239,5.20675 0.17364,10.40695 0.90648,4.421902 1.05253,8.458452 0.3882,10.728752 -0.70059,2.39406 -3.81995,5.29609 -6.74745,6.27718 -1.26118,0.42266 -2.96775,0.87096 -3.79236,0.99623 l -1.49931,0.22775 z"),bs(a,"stroke-width","0.35277778"),_(i,"id","path4548"),_(i,"d","m 131.74239,108.26592 c -1.02163,-1.2988 -0.87294,-3.53652 0.38087,-5.73185 0.92776,-1.62446 4.80862,-6.948549 7.61066,-10.440949 l 1.13094,-1.40958 -1.80213,-5.22523 c -2.02147,-5.86123 -2.0098,-5.97467 0.65581,-6.37225 l 1.46834,-0.219 1.64076,3.3506 c 0.90242,1.84283 1.76982,3.35061 1.92755,3.35061 0.15774,0 1.77489,-1.75542 3.59368,-3.90092 3.15918,-3.72667 3.35688,-3.89165 4.42591,-3.69334 0.64552,0.11974 1.21858,0.0465 1.35432,-0.17316 0.31818,-0.51481 1.23083,0.24704 1.23083,1.02746 0,0.32009 -0.45438,1.13409 -1.00972,1.80888 -2.26771,2.75549 -7.10417,9.27155 -7.10417,9.5713 0,0.17685 0.97502,2.45302 2.16671,5.05816 l 2.1667,4.736609 -0.65823,0.98459 c -0.36203,0.54152 -0.66236,1.12603 -0.6674,1.29891 -0.005,0.17288 -0.27769,0.48371 -0.60588,0.69073 -0.83174,0.52464 -1.44656,-0.11541 -3.9894,-4.153119 -1.16417,-1.84856 -2.23163,-3.36491 -2.37215,-3.36967 -0.31309,-0.0106 -3.7911,5.131969 -6.47955,9.580639 -2.37093,3.92324 -1.93885,3.4204 -3.26614,3.80106 -0.95533,0.27398 -1.19348,0.19843 -1.79831,-0.57048 z"),bs(i,"stroke-width","0.35277775"),_(o,"id","path4550"),_(o,"d","m 131.98567,83.677091 c -2.15148,-3.8472 -6.0183,-9.42829 -7.57842,-10.93815 -0.79252,-0.76698 -1.44094,-1.57494 -1.44094,-1.79546 0,-0.6016 1.61695,-1.21975 3.19058,-1.21975 1.69822,0 3.49597,1.47777 5.0997,4.19203 0.58208,0.98515 1.15641,1.79434 1.27629,1.79819 0.11988,0.004 0.80873,-1.65116 1.53078,-3.67779 1.5464,-4.34039 5.62351,-12.777999 7.22453,-14.951229 1.3726,-1.86316 3.42936,-2.865165 5.90274,-2.875676 3.23375,-0.01374 3.24268,0.130067 0.20474,3.296663 -4.63599,4.832327 -6.76321,8.809632 -11.25155,21.037252 -1.24637,3.39549 -2.39032,6.47895 -2.54212,6.85214 -0.23022,0.56597 -0.49833,0.28096 -1.61633,-1.71822 z"),bs(o,"stroke-width","0.35277775"),_(n,"transform","translate(-104.22785,-45.507923)"),_(n,"id","layer1"),_(r,"version","1.1"),_(r,"viewBox","0 0 70.423268 70.42326"),_(r,"height","1.25em"),_(r,"class","svelte-27u907"),_(t,"href",e[0]),_(t,"class","svelte-27u907")},m(p,h){te(p,t,h),T(t,r),T(r,n),T(n,s),T(n,a),T(n,i),T(n,o),T(t,c),y&&y.m(t,null),l=!0},p(p,[h]){y&&y.p&&(!l||h&2)&&po(y,f,p,p[1],l?ho(f,p[1],h,null):mo(p[1]),null),(!l||h&1)&&_(t,"href",p[0])},i(p){l||(Be(y,p),l=!0)},o(p){Fe(y,p),l=!1},d(p){p&&x(t),y&&y.d(p)}}}function r2(e,t,r){let{$$slots:n={},$$scope:s}=t,{href:a=""}=t;return e.$$set=i=>{"href"in i&&r(0,a=i.href),"$$scope"in i&&r(1,s=i.$$scope)},[a,s,n]}class n2 extends Wt{constructor(t){super(),Xt(this,t,r2,t2,Yt,{href:0})}}function s2(e){let t;return{c(){t=ue("hyperjump-io/json-schema.hyperjump.io")},l(r){t=pe(r,"hyperjump-io/json-schema.hyperjump.io")},m(r,n){te(r,t,n)},d(r){r&&x(t)}}}function a2(e){let t;return{c(){t=ue("hyperjump-io/json-schema-validator")},l(r){t=pe(r,"hyperjump-io/json-schema-validator")},m(r,n){te(r,t,n)},d(r){r&&x(t)}}}function i2(e){let t;return{c(){t=ue("@hyperjump/json-schema")},l(r){t=pe(r,"@hyperjump/json-schema")},m(r,n){te(r,t,n)},d(r){r&&x(t)}}}function o2(e){let t;return{c(){t=ue("@hyperjump/json-schema-core")},l(r){t=pe(r,"@hyperjump/json-schema-core")},m(r,n){te(r,t,n)},d(r){r&&x(t)}}}function c2(e){let t;return{c(){t=ue("JSON Schema")},l(r){t=pe(r,"JSON Schema")},m(r,n){te(r,t,n)},d(r){r&&x(t)}}}function l2(e){let t,r,n,s,a,i,o,c,l,f,y,p,h,P,m,d,v;return s=new mf({props:{href:"https://github.com/hyperjump-io/json-schema.hyperjump.io",$$slots:{default:[s2]},$$scope:{ctx:e}}}),o=new mf({props:{href:"https://github.com/hyperjump-io/json-schema-validator",$$slots:{default:[a2]},$$scope:{ctx:e}}}),f=new df({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema",$$slots:{default:[i2]},$$scope:{ctx:e}}}),h=new df({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema-core",$$slots:{default:[o2]},$$scope:{ctx:e}}}),d=new n2({props:{href:"https://json-schema.org",$$slots:{default:[c2]},$$scope:{ctx:e}}}),{c(){t=W("footer"),r=W("ul"),n=W("li"),lt(s.$$.fragment),a=Te(),i=W("li"),lt(o.$$.fragment),c=Te(),l=W("li"),lt(f.$$.fragment),y=Te(),p=W("li"),lt(h.$$.fragment),P=Te(),m=W("li"),lt(d.$$.fragment),this.h()},l(O){t=X(O,"FOOTER",{class:!0});var b=M(t);r=X(b,"UL",{class:!0});var j=M(r);n=X(j,"LI",{class:!0});var S=M(n);ft(s.$$.fragment,S),S.forEach(x),a=Re(j),i=X(j,"LI",{class:!0});var A=M(i);ft(o.$$.fragment,A),A.forEach(x),c=Re(j),l=X(j,"LI",{class:!0});var G=M(l);ft(f.$$.fragment,G),G.forEach(x),y=Re(j),p=X(j,"LI",{class:!0});var re=M(p);ft(h.$$.fragment,re),re.forEach(x),P=Re(j),m=X(j,"LI",{class:!0});var I=M(m);ft(d.$$.fragment,I),I.forEach(x),j.forEach(x),b.forEach(x),this.h()},h(){_(n,"class","svelte-17tbtsq"),_(i,"class","svelte-17tbtsq"),_(l,"class","svelte-17tbtsq"),_(p,"class","svelte-17tbtsq"),_(m,"class","svelte-17tbtsq"),_(r,"class","links svelte-17tbtsq"),_(t,"class","svelte-17tbtsq")},m(O,b){te(O,t,b),T(t,r),T(r,n),ut(s,n,null),T(r,a),T(r,i),ut(o,i,null),T(r,c),T(r,l),ut(f,l,null),T(r,y),T(r,p),ut(h,p,null),T(r,P),T(r,m),ut(d,m,null),v=!0},p(O,[b]){const j={};b&1&&(j.$$scope={dirty:b,ctx:O}),s.$set(j);const S={};b&1&&(S.$$scope={dirty:b,ctx:O}),o.$set(S);const A={};b&1&&(A.$$scope={dirty:b,ctx:O}),f.$set(A);const G={};b&1&&(G.$$scope={dirty:b,ctx:O}),h.$set(G);const re={};b&1&&(re.$$scope={dirty:b,ctx:O}),d.$set(re)},i(O){v||(Be(s.$$.fragment,O),Be(o.$$.fragment,O),Be(f.$$.fragment,O),Be(h.$$.fragment,O),Be(d.$$.fragment,O),v=!0)},o(O){Fe(s.$$.fragment,O),Fe(o.$$.fragment,O),Fe(f.$$.fragment,O),Fe(h.$$.fragment,O),Fe(d.$$.fragment,O),v=!1},d(O){O&&x(t),pt(s),pt(o),pt(f),pt(h),pt(d)}}}class f2 extends Wt{constructor(t){super(),Xt(this,t,null,l2,Yt,{})}}var u2=g2;function hf(e){return e+(e[e.length-1]==="/"?"":"/")}function yf(e){let t=e.split("/");t[0]===""&&(t=t.slice(1));let r=[];return t.forEach((n,s)=>{n!=="."&&(n===".."?r.pop():(n!==""||s===t.length-1)&&r.push(n))}),"/"+r.join("/")}function p2(e){const t={host:"",path:"",query:"",protocol:""};let r=e,n=e.indexOf("//");t.protocol=r.substring(0,n),n+=2;const s=e.indexOf("/",n),a=e.indexOf("?"),i=e.indexOf("#");if(i!==-1&&(r=r.substring(0,i)),a!==-1){const o=r.substring(a);t.query=o,r=r.substring(0,a)}if(s!==-1){const o=r.substring(0,s);t.host=o,r=r.substring(s),t.path=r}else t.host=r;return t}const m2="[a-z][a-z0-9+.-]*",d2=new RegExp(`^(${m2}:)?//`,"i");function h2(e){const t={href:e,hash:"",query:"",netPath:!1,absolutePath:!1,relativePath:!1};if(d2.test(e))return t.netPath=!0,t;e[0]==="/"?t.absolutePath=!0:e!==""&&(t.relativePath=!0);let r=e;const n=e.indexOf("?"),s=e.indexOf("#");if(s!==-1){const a=r.substring(s);t.hash=a,r=r.substring(0,s)}if(n!==-1){const a=r.substring(n);t.query=a,r=r.substring(0,n)}return t.path=r,t}function y2(e){const t=e.indexOf("//")+2,r=!e.includes("/",t),n=!e.includes("?",t),s=!e.includes("#",t);return r&&n&&s}function $2(e){return e.startsWith("//")}function g2(e,t){if(e=e.trim(),t=t.trim(),t.startsWith("about:"))return t;const r=p2(e),n=h2(t);if(!r.protocol&&!n.netPath)throw new Error("Error, protocol is not specified");if(n.netPath)return $2(n.href)&&(n.href=r.protocol+n.href),y2(n.href)?hf(n.href):n.href;if(n.absolutePath){const{path:s,query:a,hash:i}=n;return r.host+yf(s)+a+i}else if(n.relativePath){const{path:s,query:a,hash:i}=n;let o=r.path,c=r.host,l;return s.length===0?l=o:(o=o.substring(0,o.lastIndexOf("/")),l=yf(o+"/"+s)),l===""&&!a&&!i?c+="/":c+=l+a+i,c}else{const{host:s,path:a,query:i}=r;return!a&&!i?hf(s):s+a+i+n.hash}}const v2=u2,b2=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,S2={null:e=>e===null,boolean:e=>typeof e=="boolean",object:b2,array:e=>Array.isArray(e),number:e=>typeof e=="number",integer:e=>Number.isInteger(e),string:e=>typeof e=="string"},I2=(e,t)=>S2[t](e),Um=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]},$f=e=>{const t=RegExp(/^(.+):\/\//).exec(e);return t?t[1]:""},w2=(e,t)=>{const r=v2(e,t),n=Um(e)[0];if(n&&$f(r)==="file"&&$f(n)!=="file")throw Error(`Can't access file '${r}' resource from network context '${e}'`);return r},En=47,O2=(e,t)=>{if(e===t)return"";let r=1;const n=e.length-1,s=t.length-r,a=n<s?n:s;let i=-1,o=0;for(;o<a;o++){const l=e.charCodeAt(o+1);if(l!==t.charCodeAt(r+o))break;l===En&&(i=o)}if(s>a){if(t.charCodeAt(r+o)===En)return t.slice(r+o+1);if(o===0)return t.slice(r+o)}n>a&&(e.charCodeAt(o+1)===En?i=o:a===0&&(i=0));let c="";for(o=i+2;o<=e.length;++o)(o===e.length||e.charCodeAt(o)===En)&&(c+=c.length===0?"..":"/..");return r+=i,c.length>0?`${c}${t.slice(r,t.length)}`:(t.charCodeAt(r)===En&&++r,t.slice(r,t.length))};var sc={jsonTypeOf:I2,splitUrl:Um,safeResolveUrl:w2,pathRelative:O2};const Bm=Symbol("$__value"),ac=Symbol("$__href"),E2=(e,t)=>Object.freeze({[ac]:e,[Bm]:t}),P2=e=>e&&e[ac]!==void 0,k2=e=>e[ac],j2=e=>e[Bm];var ic={cons:E2,isReference:P2,href:k2,value:j2};const A2=ba,fn=Qe,{jsonTypeOf:x2}=sc,gf=ic,Fm=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),_2=(e,t="")=>Object.freeze({...Fm,id:t,instance:e,value:e}),C2=e=>`${e.id}#${encodeURI(e.pointer)}`,it=e=>gf.isReference(e.value)?gf.value(e.value):e.value,N2=(e,t)=>e in it(t),T2=fn((e,t)=>x2(it(e),t)),hr=(e,t)=>Object.freeze({...t,pointer:A2.append(e,t.pointer),value:it(t)[e]}),R2=e=>Object.keys(it(e)).map(t=>[t,hr(t,e)]),D2=e=>Object.keys(it(e)),q2=fn((e,t)=>it(t).map((r,n,s,a)=>e(hr(n,t),n,s,a))),L2=fn((e,t)=>it(t).map((r,n,s,a)=>hr(n,t)).filter((r,n,s,a)=>e(r,n,s,a))),M2=fn((e,t,r)=>it(r).reduce((n,s,a)=>e(n,hr(a,r),a),t)),V2=fn((e,t)=>it(t).every((r,n,s,a)=>e(hr(n,t),n,s,a))),U2=fn((e,t)=>it(t).some((r,n,s,a)=>e(hr(n,t),n,s,a))),B2=e=>it(e).length;var oc={nil:Fm,cons:_2,uri:C2,value:it,has:N2,typeOf:T2,step:hr,entries:R2,keys:D2,map:q2,filter:L2,reduce:M2,every:V2,some:U2,length:B2},F2=fetch;const K2=Sa,J2=Qe,Kr=fe,Et=ba,{jsonTypeOf:cc,splitUrl:sr,safeResolveUrl:lc,pathRelative:z2}=sc,G2=F2,Tt=ic,Dn={},ta={},H2=(e,t,r)=>{Dn[e]||(Dn[e]={}),Dn[e][t]=r},Ue=(e,t)=>{const r=e in ta?ta[e]:e;if(r in Dn)return Dn[r][t]},Fn={},fc={},uc=(e,t="",r="")=>{e=JSON.parse(JSON.stringify(e));const n=sr(e.$schema||r)[0];if(!n)throw Error("Couldn't determine schema version");delete e.$schema;const s=Ue(n,"baseToken"),a=Ue(n,"anchorToken"),i=sr(t)[0];if(!i&&!sr(e[s]||"")[0])throw Error("Couldn't determine an identifier for the schema");const o=lc(i,e[s]||""),[c,l]=sr(o);delete e[s],l&&s===a&&(e[a]=a!==s?encodeURI(l):`#${encodeURI(l)}`),i&&(fc[i]=c);const f={},y=Ue(n,"recursiveAnchorToken");e[y]===!0&&(f[""]=`${c}#`,e[a]="",delete e[y]);let p;const h=Ue(n,"vocabularyToken");cc(e[h],"object")?(ta[c]=n,p=e[h],delete e[h]):(ta[c]=n,p={[n]:!0});const P={"":""};return Fn[c]={id:c,schemaVersion:n,schema:Yi(e,c,n,Et.nil,P,f),anchors:P,dynamicAnchors:f,vocabulary:p,validated:!1},c},Yi=(e,t,r,n,s,a)=>{if(cc(e,"object")){const i=typeof e.$schema=="string"?sr(e.$schema)[0]:r,o=Ue(i,"embeddedToken"),c=Ue(i,"anchorToken");if(typeof e[o]=="string"&&(o!==c||e[o][0]!=="#")){const h=lc(t,e[o]);return e[o]=h,uc(e,h,r),Tt.cons(e[o],e)}const l=Ue(r,"anchorToken"),f=Ue(r,"dynamicAnchorToken");typeof e[f]=="string"&&(a[e[f]]=`${t}#${encodeURI(n)}`,s[e[f]]=n,delete e[f]);const y=Ue(r,"embeddedToken");if(typeof e[l]=="string"){const h=l!==y?e[l]:e[l].slice(1);s[h]=n,delete e[l]}const p=Ue(r,"jrefToken");if(typeof e[p]=="string")return Tt.cons(e[p],e);for(const h in e)e[h]=Yi(e[h],t,r,Et.append(h,n),s,a);return e}else return Array.isArray(e)?e.map((i,o)=>Yi(i,t,r,Et.append(o,n),s,a)):e},W2=e=>e in Fn||e in fc,Km=e=>Fn[fc[e]]||Fn[e],X2=e=>{Fn[e].validated=!0},Y2=Object.freeze({id:"",schemaVersion:void 0,vocabulary:{},pointer:Et.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),Jm=async(e,t=Y2)=>{const r=lc(Hm(t),e),[n,s]=sr(r);if(!W2(n)){const c=await G2(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);if(c.headers.has("content-type")){const l=K2.parse(c.headers.get("content-type")).type;if(l!=="application/schema+json")throw Error(`${n} is not a schema. Found a document with media type: ${l}`)}uc(await c.json(),n)}const a=Km(n),i=s[0]!=="/"?Gm(a,s):s,o=Object.freeze({...a,pointer:i,value:Et.get(i,a.schema)});return zm(o)},zm=e=>Tt.isReference(e.value)?Jm(Tt.href(e.value),e):e,Gm=(e,t)=>{if(!(t in e.anchors))throw Error(`No such anchor '${encodeURI(e.id)}#${encodeURI(t)}'`);return e.anchors[t]},Hm=e=>`${e.id}#${encodeURI(e.pointer)}`,Zt=e=>Tt.isReference(e.value)?Tt.value(e.value):e.value,Q2=(e,t)=>e in Zt(t),Z2=(e,t)=>cc(Zt(e),t),pc=(e,t)=>{const r=Km(t.id),n=Object.freeze({...t,pointer:Et.append(e,t.pointer),value:Zt(t)[e],validated:r.validated});return zm(n)},eI=e=>Object.keys(Zt(e)),tI=e=>Kr.pipeline([Zt,Object.keys,Kr.map(async t=>[t,await pc(t,e)]),Kr.all],e),rI=J2((e,t)=>Kr.pipeline([Zt,Kr.map(async(r,n)=>e(await pc(n,t),n)),Kr.all],t)),nI=e=>Zt(e).length,sI={parentId:"",parentDialect:"",includeEmbedded:!0},aI=(e,t={})=>{const r={...sI,...t},n=JSON.parse(JSON.stringify(e.schema,(l,f)=>{if(!Tt.isReference(f))return f;const y=Tt.value(f),p=y.$schema||e.schemaVersion,h=Ue(p,"embeddedToken");if(!(!r.includeEmbedded&&h in y))return Tt.value(f)})),s=Ue(e.schemaVersion,"dynamicAnchorToken");Object.entries(e.dynamicAnchors).forEach(([l,f])=>{const y=sr(f)[1];Et.assign(y,n,{[s]:l,...Et.get(y,n)})});const a=Ue(e.schemaVersion,"anchorToken");Object.entries(e.anchors).filter(([l])=>l!=="").forEach(([l,f])=>{Et.assign(f,n,{[a]:l,...Et.get(f,n)})});const i=Ue(e.schemaVersion,"baseToken"),o=iI(r.parentId,e.id),c=r.parentDialect===e.schemaVersion?"":e.schemaVersion;return{...o&&{[i]:o},...c&&{$schema:c},...n}},iI=(e,t)=>{if(t.startsWith("file://")){const r=e.slice(7,e.lastIndexOf("/"));return e===""?"":z2(r,t.slice(7))}else return t};var ja={setConfig:H2,getConfig:Ue,add:uc,get:Jm,markValidated:X2,uri:Hm,value:Zt,getAnchorPointer:Gm,typeOf:Z2,has:Q2,step:pc,keys:eI,entries:tI,map:rI,length:nI,toSchema:aI};class oI extends Error{constructor(t){super("Invalid Schema"),this.name=this.constructor.name,this.output=t}}var Wm=oI;const cI=Qe,vf=zr.exports,{splitUrl:lI}=sc,Xm=oc,Kt=ja,fI=Wm,ra="FLAG",mc="BASIC",dc="DETAILED",hc="VERBOSE";let Ym=dc,Qm=!0;const uI=async(e,t=void 0,r=void 0)=>{const n=await yc(e),s=(a,i)=>$c(n,Xm.cons(a),i);return t===void 0?s:s(t,r)},yc=async e=>{const t={metaData:{}},r=await ed(e,t);return{ast:t,schemaUri:r}},$c=cI(({ast:e,schemaUri:t},r,n=ra)=>{if(![ra,mc,dc,hc].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],a=vf.subscribe("result",pI(n,s));return rd(t,r,e,{}),vf.unsubscribe(a),s[0]}),pI=(e,t)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c}=s,l={keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const a=r.pop();for(;r[r.length-1]!=="result.start";){const i=r.pop(),o=[i];e===mc&&(o.push(...i.errors),delete i.errors),(e===hc||e!==ra&&!i.valid)&&a.errors.unshift(...o)}r[r.length-1]=a,t[0]=a}}},mI=e=>{Ym=e},dI=e=>{Qm=e},gc={},os=e=>gc[e],Zm=e=>e in gc,hI=(e,t)=>{gc[e]={collectEvaluatedItems:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&new Set,collectEvaluatedProperties:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&[],...t}},Qi={},yI=(e,t)=>{Qi[e]=t},Ms={},ed=async(e,t)=>{if(e=await td(e),!Zm(`${e.schemaVersion}#validate`)){const r=await Kt.get(e.schemaVersion);(Kt.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,a])=>{if(s in Qi)Object.entries(Qi[s]).forEach(([i,o])=>{hI(`${r.id}#${i}`,o)});else if(a)throw Error(`Missing required vocabulary: ${s}`)})}if(Qm&&!e.validated){if(Kt.markValidated(e.id),!(e.schemaVersion in Ms)){const s=await Kt.get(e.schemaVersion),a=await yc(s);Ms[s.id]=$c(a)}const r=Xm.cons(e.schema,e.id),n=Ms[e.schemaVersion](r,Ym);if(!n.valid)throw new fI(n)}return e.id in t.metaData||(t.metaData[e.id]={id:e.id,dynamicAnchors:e.dynamicAnchors,anchors:e.anchors}),os(`${e.schemaVersion}#validate`).compile(e,t)},td=async e=>Kt.typeOf(e,"string")?td(await Kt.get(Kt.value(e),e)):e,rd=(e,t,r,n)=>{const s=vc(e,r),a=lI(e)[0];return os(s).interpret(e,t,r,{...r.metaData[a].dynamicAnchors,...n})},$I=(e,t,r,n,s)=>{const a=vc(e,r);return os(a).collectEvaluatedProperties(e,t,r,n,s)},gI=(e,t,r,n,s)=>{const a=vc(e,r);return os(a).collectEvaluatedItems(e,t,r,n,s)},vc=(e,t)=>{if(!(e in t))throw Error(`No schema found at ${e}`);return t[e][0]},vI=(e,t="",r="")=>{const n=Kt.add(e,t,r);delete Ms[n]};var nd={validate:uI,compile:yc,interpret:$c,setMetaOutputFormat:mI,setShouldMetaValidate:dI,FLAG:ra,BASIC:mc,DETAILED:dc,VERBOSE:hc,add:vI,getKeyword:os,hasKeyword:Zm,defineVocabulary:yI,compileSchema:ed,interpretSchema:rd,collectEvaluatedProperties:$I,collectEvaluatedItems:gI};const bI=ja,SI=e=>bI.value(e),II=()=>!0;var wI={compile:SI,interpret:II};const Pn=fe,Ar=zr.exports,Kn=nd,bf=oc,xr=ja,OI=async(e,t)=>{const r=xr.uri(e);if(!(r in t)){t[r]=!1;const n=xr.value(e);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${xr.uri(e)}'`);t[r]=[`${e.schemaVersion}#validate`,xr.uri(e),typeof n=="boolean"?n:await Pn.pipeline([xr.entries,Pn.map(([s,a])=>[`${e.schemaVersion}#${s}`,a]),Pn.filter(([s])=>Kn.hasKeyword(s)&&s!==`${e.schemaVersion}#validate`),Pn.map(async([s,a])=>{const i=await Kn.getKeyword(s).compile(a,t,e);return[s,xr.uri(a),i]}),Pn.all],e)]}return r},EI=(e,t,r,n)=>{const[s,a,i]=r[e];Ar.publishSync("result.start");const o=typeof i=="boolean"?i:i.every(([c,l,f])=>{Ar.publishSync("result.start");const y=Kn.getKeyword(c).interpret(f,t,r,n);return Ar.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:bf.uri(t),valid:y,ast:f}),Ar.publishSync("result.end"),y});return Ar.publishSync("result",{keyword:s,absoluteKeywordLocation:a,instanceLocation:bf.uri(t),valid:o,ast:e}),Ar.publishSync("result.end"),o},PI=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?[]:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedProperties")).reduce((i,[o,,c])=>{const l=i&&Kn.getKeyword(o).collectEvaluatedProperties(c,t,r,n);return l!==!1&&[...i,...l]},[])},kI=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?new Set:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedItems")).reduce((i,[o,,c])=>{const l=i!==!1&&Kn.getKeyword(o).collectEvaluatedItems(c,t,r,n);return l!==!1&&new Set([...i,...l])},new Set)};var jI={compile:OI,interpret:EI,collectEvaluatedProperties:PI,collectEvaluatedItems:kI};const AI=wI,xI=jI;var _I={metaData:AI,validate:xI};const CI=nd,NI=ja,TI=oc,RI=ic,DI=_I,qI=Wm;var q={Core:CI,Schema:NI,Instance:TI,Reference:RI,Keywords:DI,InvalidSchemaError:qI};const{Core:sd,Schema:kn,Instance:ci}=q,LI=async(e,t,r)=>{const n=await kn.step("items",r),s=kn.typeOf(n,"array")?kn.length(n):Number.MAX_SAFE_INTEGER;return kn.typeOf(e,"boolean")?[s,kn.value(e)]:[s,await sd.compileSchema(e,t)]},MI=([e,t],r,n,s)=>ci.typeOf(r,"array")?typeof t=="string"?ci.every((a,i)=>i<e||sd.interpretSchema(t,a,n,s),r):ci.every((a,i)=>i<e?!0:t,r):!0;var VI={compile:LI,interpret:MI};const{Core:ad,Schema:li,Instance:Zi}=q,UI=async(e,t,r)=>{const n=await li.step("items",r);return[li.typeOf(n,"array")?li.length(n):Number.MAX_SAFE_INTEGER,await ad.compileSchema(e,t)]},id=([e,t],r,n,s)=>Zi.typeOf(r,"array")?Zi.every((a,i)=>i<e||ad.interpretSchema(t,a,n,s),r):!0,BI=(e,t,r,n)=>id(e,t,r,n)&&new Set(Zi.map((s,a)=>a,t));var FI={compile:UI,interpret:id,collectEvaluatedItems:BI};const{Core:od,Schema:Mt,Instance:Sf}=q,KI=async(e,t,r)=>{const n=await Mt.step("properties",r),s=Mt.typeOf(n,"object")?Mt.keys(n):[],a=await Mt.step("patternProperties",r),i=Mt.typeOf(a,"object")?Mt.keys(a).map(o=>new RegExp(o)):[];return Mt.typeOf(e,"boolean")?[s,i,Mt.value(e)]:[s,i,await od.compileSchema(e,t)]},JI=([e,t,r],n,s,a)=>{if(!Sf.typeOf(n,"object"))return!0;const i=Sf.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?i.every(([,o])=>od.interpretSchema(r,o,s,a)):i.length===0||r};var zI={compile:KI,interpret:JI};const{Core:cd,Schema:_r,Instance:If}=q,GI=async(e,t,r)=>{const n=await _r.step("properties",r),s=_r.typeOf(n,"object")?_r.keys(n):[],a=await _r.step("patternProperties",r),i=_r.typeOf(a,"object")?_r.keys(a).map(o=>new RegExp(o)):[];return[s,i,await cd.compileSchema(e,t)]},ld=([e,t,r],n,s,a)=>If.typeOf(n,"object")?If.entries(n).filter(([i])=>!e.includes(i)&&!t.some(o=>o.test(i))).every(([,i])=>cd.interpretSchema(r,i,s,a)):!0,HI=(e,t,r,n)=>ld(e,t,r,n)&&[new RegExp("")];var WI={compile:GI,interpret:ld,collectEvaluatedProperties:HI};const{Core:Aa,Schema:XI}=q,wf=fe,YI=(e,t)=>wf.pipeline([XI.map(async r=>Aa.compileSchema(await r,t)),wf.all],e),QI=(e,t,r,n)=>e.every(s=>Aa.interpretSchema(s,t,r,n)),ZI=(e,t,r,n)=>e.reduce((s,a)=>{const i=s&&Aa.collectEvaluatedProperties(a,t,r,n);return i!==!1&&[...s,...i]},[]),ew=(e,t,r,n)=>e.reduce((s,a)=>{const i=s!==!1&&Aa.collectEvaluatedItems(a,t,r,n);return i!==!1&&new Set([...s,...i])},new Set);var tw={compile:YI,interpret:QI,collectEvaluatedProperties:ZI,collectEvaluatedItems:ew};const{Core:xa,Schema:rw}=q,Of=fe,nw=(e,t)=>Of.pipeline([rw.map(async r=>xa.compileSchema(await r,t)),Of.all],e),sw=(e,t,r,n)=>e.filter(a=>xa.interpretSchema(a,t,r,n)).length>0,aw=(e,t,r,n)=>e.reduce((s,a)=>{const i=xa.collectEvaluatedProperties(a,t,r,n);return i!==!1?[...s||[],...i]:s},!1),iw=(e,t,r,n)=>e.reduce((s,a)=>{const i=xa.collectEvaluatedItems(a,t,r,n);return i!==!1?new Set([...s||[],...i]):s},!1);var ow={compile:nw,interpret:sw,collectEvaluatedProperties:aw,collectEvaluatedItems:iw};const{Schema:cw,Instance:lw}=q,fd=Dt,fw=e=>fd(cw.value(e)),uw=(e,t)=>fd(lw.value(t))===e;var pw={compile:fw,interpret:uw};const{Core:ud,Instance:Ef}=q,mw=(e,t)=>ud.compileSchema(e,t),dw=(e,t,r,n)=>!Ef.typeOf(t,"array")||Ef.some(s=>ud.interpretSchema(e,s,r,n),t);var hw={compile:mw,interpret:dw};const{Core:bc,Schema:Cr,Instance:eo}=q,yw=async(e,t,r)=>{const n=await bc.compileSchema(e,t),s=await Cr.step("minContains",r),a=Cr.typeOf(s,"number")?Cr.value(s):1,i=await Cr.step("maxContains",r),o=Cr.typeOf(i,"number")?Cr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},pd=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!eo.typeOf(n,"array"))return!0;const i=eo.reduce((o,c)=>bc.interpretSchema(e,c,s,a)?o+1:o,0,n);return i>=t&&i<=r},$w=(e,t,r,n)=>pd(e,t,r,n)&&eo.reduce((s,a,i)=>bc.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t);var gw={compile:yw,interpret:pd,collectEvaluatedItems:$w};const{Core:vw,Schema:bw}=q,fi=fe,Sw=async(e,t)=>{await fi.pipeline([bw.entries,fi.map(([,r])=>vw.compileSchema(r,t)),fi.all],e)},Iw=()=>!0;var ww={compile:Sw,interpret:Iw};const{Core:md,Schema:ui,Instance:Pf}=q,pi=fe,Ow=(e,t)=>pi.pipeline([ui.entries,pi.map(async([r,n])=>[r,ui.typeOf(n,"array")?ui.value(n):await md.compileSchema(n,t)]),pi.all],e),Ew=(e,t,r,n)=>{const s=Pf.value(t);return!Pf.typeOf(t,"object")||e.every(([a,i])=>a in s?Array.isArray(i)?i.every(o=>o in s):md.interpretSchema(i,t,r,n):!0)};var Pw={compile:Ow,interpret:Ew};const{Schema:kf,Instance:jf}=q,mi=fe,kw=e=>mi.pipeline([kf.entries,mi.map(([t,r])=>[t,kf.value(r)]),mi.all],e),jw=(e,t)=>{const r=jf.value(t);return!jf.typeOf(t,"object")||e.every(([n,s])=>!(n in r)||s.every(a=>a in r))};var Aw={compile:kw,interpret:jw};const{Core:Sc,Schema:xw,Instance:to}=q,di=fe,_w=(e,t)=>di.pipeline([xw.entries,di.map(async([r,n])=>[r,await Sc.compileSchema(n,t)]),di.all],e),Cw=(e,t,r,n)=>{const s=to.value(t);return!to.typeOf(t,"object")||e.every(([a,i])=>!(a in s)||Sc.interpretSchema(i,t,r,n))},Nw=(e,t,r,n)=>e.reduce((s,[a,i])=>{if(!s||!to.has(a,t))return s;const o=Sc.collectEvaluatedProperties(i,t,r,n);return o!==!1&&s.concat(o)},[]);var Tw={compile:_w,interpret:Cw,collectEvaluatedProperties:Nw};const{Schema:Rw,Instance:Dw}=q,dd=Dt,qw=e=>Rw.value(e).map(dd),Lw=(e,t)=>e.some(r=>dd(Dw.value(t))===r);var Mw={compile:qw,interpret:Lw};const{Schema:Vw,Instance:Af}=q,Uw=async e=>Vw.value(e),Bw=(e,t)=>!Af.typeOf(t,"number")||Af.value(t)<e;var Fw={compile:Uw,interpret:Bw};const{Schema:Kw,Instance:xf}=q,Jw=async e=>Kw.value(e),zw=(e,t)=>!xf.typeOf(t,"number")||xf.value(t)>e;var Gw={compile:Jw,interpret:zw};const{Core:_a}=q,Hw=(e,t)=>_a.compileSchema(e,t),Ww=(e,t,r,n)=>(_a.interpretSchema(e,t,r,n),!0),Xw=(e,t,r,n)=>_a.collectEvaluatedProperties(e,t,r,n)||[],Yw=(e,t,r,n)=>_a.collectEvaluatedItems(e,t,r,n)||new Set;var Qw={compile:Hw,interpret:Ww,collectEvaluatedProperties:Xw,collectEvaluatedItems:Yw};const{Core:Wr,Schema:_f}=q,Zw=async(e,t,r)=>{if(_f.has("if",r)){const n=await _f.step("if",r);return[await Wr.compileSchema(n,t),await Wr.compileSchema(e,t)]}else return[]},eO=([e,t],r,n,s)=>e===void 0||!Ic(e,r,n,s)||Wr.interpretSchema(t,r,n,s),Ic=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Wr.getKeyword(a).interpret(i,t,r,n))},tO=([e,t],r,n,s)=>e===void 0||!Ic(e,r,n,s)?[]:Wr.collectEvaluatedProperties(t,r,n,s),rO=([e,t],r,n,s)=>e===void 0||!Ic(e,r,n,s)?new Set:Wr.collectEvaluatedItems(t,r,n,s);var nO={compile:Zw,interpret:eO,collectEvaluatedProperties:tO,collectEvaluatedItems:rO};const{Core:Xr,Schema:Cf}=q,sO=async(e,t,r)=>{if(Cf.has("if",r)){const n=await Cf.step("if",r);return[await Xr.compileSchema(n,t),await Xr.compileSchema(e,t)]}else return[]},aO=([e,t],r,n,s)=>e===void 0||wc(e,r,n,s)||Xr.interpretSchema(t,r,n,s),wc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Xr.getKeyword(a).interpret(i,t,r,n))},iO=([e,t],r,n,s)=>e===void 0||wc(e,r,n,s)?[]:Xr.collectEvaluatedProperties(t,r,n,s),oO=([e,t],r,n,s)=>e===void 0||wc(e,r,n,s)?new Set:Xr.collectEvaluatedItems(t,r,n,s);var cO={compile:sO,interpret:aO,collectEvaluatedProperties:iO,collectEvaluatedItems:oO};const{Core:na,Schema:Nf,Instance:Vs}=q,lO=async(e,t)=>{if(Nf.typeOf(e,"array")){const r=await Nf.map(n=>na.compileSchema(n,t),e);return Promise.all(r)}else return na.compileSchema(e,t)},hd=(e,t,r,n)=>Vs.typeOf(t,"array")?typeof e=="string"?Vs.every(s=>na.interpretSchema(e,s,r,n),t):Vs.every((s,a)=>!(a in e)||na.interpretSchema(e[a],s,r,n),t):!0,fO=(e,t,r,n)=>hd(e,t,r,n)&&(typeof e=="string"?new Set(Vs.map((s,a)=>a,t)):new Set(e.map((s,a)=>a)));var uO={compile:lO,interpret:hd,collectEvaluatedItems:fO};const{Core:yd,Schema:hi,Instance:ro}=q,pO=async(e,t,r)=>{const n=await hi.step("prefixItems",r);return[hi.typeOf(n,"array")?hi.length(n):0,await yd.compileSchema(e,t)]},$d=([e,t],r,n,s)=>ro.typeOf(r,"array")?ro.every((a,i)=>i<e||yd.interpretSchema(t,a,n,s),r):!0,mO=(e,t,r,n)=>$d(e,t,r,n)&&new Set(ro.map((s,a)=>a,t));var dO={compile:pO,interpret:$d,collectEvaluatedItems:mO};const{Schema:hO,Instance:Tf}=q,yO=e=>hO.value(e),$O=(e,t)=>!Tf.typeOf(t,"array")||Tf.length(t)<=e;var gO={compile:yO,interpret:$O};const{Schema:vO,Instance:Rf}=q,bO=e=>vO.value(e),SO=(e,t)=>!Rf.typeOf(t,"string")||Rf.length(t)<=e;var IO={compile:bO,interpret:SO};const{Schema:wO,Instance:Df}=q,OO=e=>wO.value(e),EO=(e,t)=>!Df.typeOf(t,"string")||[...Df.value(t)].length<=e;var PO={compile:OO,interpret:EO};const{Schema:kO,Instance:qf}=q,jO=e=>kO.value(e),AO=(e,t)=>!qf.typeOf(t,"object")||qf.keys(t).length<=e;var xO={compile:jO,interpret:AO};const{Schema:yi,Instance:Lf}=q,_O=async(e,t,r)=>{const n=await yi.step("exclusiveMaximum",r),s=yi.value(n);return[yi.value(e),s]},CO=([e,t],r)=>{if(!Lf.typeOf(r,"number"))return!0;const n=Lf.value(r);return t?n<e:n<=e};var NO={compile:_O,interpret:CO};const{Schema:TO,Instance:Mf}=q,RO=async e=>TO.value(e),DO=(e,t)=>!Mf.typeOf(t,"number")||Mf.value(t)<=e;var qO={compile:RO,interpret:DO};const{Schema:LO,Instance:Vf}=q,MO=e=>LO.value(e),VO=(e,t)=>!Vf.typeOf(t,"array")||Vf.length(t)>=e;var UO={compile:MO,interpret:VO};const{Schema:BO,Instance:Uf}=q,FO=e=>BO.value(e),KO=(e,t)=>!Uf.typeOf(t,"string")||Uf.length(t)>=e;var JO={compile:FO,interpret:KO};const{Schema:zO,Instance:Bf}=q,GO=e=>zO.value(e),HO=(e,t)=>!Bf.typeOf(t,"string")||[...Bf.value(t)].length>=e;var WO={compile:GO,interpret:HO};const{Schema:XO,Instance:Ff}=q,YO=e=>XO.value(e),QO=(e,t)=>!Ff.typeOf(t,"object")||Ff.keys(t).length>=e;var ZO={compile:YO,interpret:QO};const{Schema:$i,Instance:Kf}=q,eE=async(e,t,r)=>{const n=await $i.step("exclusiveMinimum",r),s=$i.value(n);return[$i.value(e),s]},tE=([e,t],r)=>{if(!Kf.typeOf(r,"number"))return!0;const n=Kf.value(r);return t?n>e:n>=e};var rE={compile:eE,interpret:tE};const{Schema:nE,Instance:Jf}=q,sE=async e=>nE.value(e),aE=(e,t)=>!Jf.typeOf(t,"number")||Jf.value(t)>=e;var iE={compile:sE,interpret:aE};const{Schema:oE,Instance:zf}=q,cE=e=>oE.value(e),lE=(e,t)=>{if(!zf.typeOf(t,"number"))return!0;const r=zf.value(t)%e;return Gf(0,r)||Gf(e,r)},Gf=(e,t)=>Math.abs(e-t)<11920929e-14;var fE={compile:cE,interpret:lE};const{Core:gd}=q,uE=gd.compileSchema,pE=(e,t,r,n)=>!gd.interpretSchema(e,t,r,n);var mE={compile:uE,interpret:pE};const{Core:Ca,Schema:dE}=q,hE=async(e,t)=>{const r=await dE.map(n=>Ca.compileSchema(n,t),e);return Promise.all(r)},yE=(e,t,r,n)=>{let s=0;for(const a of e)if(Ca.interpretSchema(a,t,r,n)&&s++,s>1)break;return s===1},$E=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ca.collectEvaluatedProperties(i,t,r,n);return o?s++===0&&o:a},!1)},gE=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ca.collectEvaluatedItems(i,t,r,n);return o?s++===0&&o:a},!1)};var vE={compile:hE,interpret:yE,collectEvaluatedProperties:$E,collectEvaluatedItems:gE};const{Schema:bE,Instance:Hf}=q,SE=e=>new RegExp(bE.value(e),"u"),IE=(e,t)=>!Hf.typeOf(t,"string")||e.test(Hf.value(t));var wE={compile:SE,interpret:IE};const{Core:vd,Schema:OE,Instance:Wf}=q,gi=fe,EE=(e,t)=>gi.pipeline([OE.entries,gi.map(async([r,n])=>[new RegExp(r,"u"),await vd.compileSchema(n,t)]),gi.all],e),bd=(e,t,r,n)=>!Wf.typeOf(t,"object")||e.every(([s,a])=>Wf.entries(t).filter(([i])=>s.test(i)).every(([,i])=>vd.interpretSchema(a,i,r,n))),PE=(e,t,r,n)=>bd(e,t,r,n)&&e.map(([s])=>s);var kE={compile:EE,interpret:bd,collectEvaluatedProperties:PE};const jE=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,AE=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),xE=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Sd={isObject:jE,escapeRegExp:AE,splitUrl:xE};const{Core:Id,Schema:_E,Instance:Xf}=q,Yf=fe,{escapeRegExp:CE}=Sd,NE=(e,t)=>Yf.pipeline([_E.entries,Yf.reduce(async(r,[n,s])=>(r[n]=await Id.compileSchema(s,t),r),Object.create(null))],e),wd=(e,t,r,n)=>!Xf.typeOf(t,"object")||Xf.entries(t).filter(([s])=>s in e).every(([s,a])=>Id.interpretSchema(e[s],a,r,n)),TE=(e,t,r,n)=>wd(e,t,r,n)&&Object.keys(e).map(s=>new RegExp(`^${CE(s)}$`));var RE={compile:NE,interpret:wd,collectEvaluatedProperties:TE};const{Core:Od,Instance:vi}=q,DE=(e,t)=>Od.compileSchema(e,t),qE=(e,t,r,n)=>!vi.typeOf(t,"object")||vi.keys(t).every(s=>Od.interpretSchema(e,vi.cons(s),r,n));var LE={compile:DE,interpret:qE};const{Core:Jn,Schema:Us}=q,{splitUrl:ME}=Sd,VE=async(e,t)=>{const[,r]=ME(Us.value(e)),n=await Us.get(Us.value(e),e);return await Jn.compileSchema(n,t),[n.id,r]},UE=([e,t],r,n,s)=>{if(t in n.metaData[e].dynamicAnchors)return Jn.interpretSchema(s[t],r,n,s);{const a=Us.getAnchorPointer(n.metaData[e],t);return Jn.interpretSchema(`${e}#${encodeURI(a)}`,r,n,s)}},BE=Jn.collectEvaluatedProperties,FE=Jn.collectEvaluatedItems;var KE={compile:VE,interpret:UE,collectEvaluatedProperties:BE,collectEvaluatedItems:FE};const{Core:Na,Schema:Qf}=q,JE=async(e,t)=>{const r=await Qf.get(Qf.value(e),e);return Na.compileSchema(r,t)},zE=Na.interpretSchema,GE=Na.collectEvaluatedProperties,HE=Na.collectEvaluatedItems;var WE={compile:JE,interpret:zE,collectEvaluatedProperties:GE,collectEvaluatedItems:HE};const{Schema:XE,Instance:Zf}=q,YE=e=>XE.value(e),QE=(e,t)=>!Zf.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(Zf.value(t),r));var ZE={compile:YE,interpret:QE};const{Core:Ed,Schema:eP,Instance:eu}=q,tu=fe,tP=(e,t)=>tu.pipeline([eP.map(r=>Ed.compileSchema(r,t)),tu.all],e),Pd=(e,t,r,n)=>eu.typeOf(t,"array")?eu.every((s,a)=>!(a in e)||Ed.interpretSchema(e[a],s,r,n),t):!0,rP=(e,t,r,n)=>Pd(e,t,r,n)&&new Set(e.map((s,a)=>a));var nP={compile:tP,interpret:Pd,collectEvaluatedItems:rP};const{Schema:sP,Instance:ru}=q,aP=e=>sP.value(e),iP=(e,t)=>typeof e=="string"?ru.typeOf(t,e):e.some(ru.typeOf(t));var oP={compile:aP,interpret:iP};const{Core:no,Schema:cP,Instance:Bs}=q,lP=async(e,t,r)=>[cP.uri(r),await no.compileSchema(e,t)],kd=([e,t],r,n,s)=>{if(!Bs.typeOf(r,"array"))return!0;const a=no.collectEvaluatedItems(e,r,n,s,!0);return a===!1||Bs.every((i,o)=>a.has(o)||no.interpretSchema(t,Bs.step(o,r),n,s),r)},fP=(e,t,r,n)=>kd(e,t,r,n)&&new Set(Bs.map((s,a)=>a,t));var uP={compile:lP,interpret:kd,collectEvaluatedItems:fP};const{Core:so,Schema:pP,Instance:nu}=q,mP=async(e,t,r)=>[pP.uri(r),await so.compileSchema(e,t)],jd=([e,t],r,n,s)=>{if(!nu.typeOf(r,"object"))return!0;const a=so.collectEvaluatedProperties(e,r,n,s,!0);return!a||nu.entries(r).filter(([i])=>!a.some(o=>i.match(o))).every(([,i])=>so.interpretSchema(t,i,n,s))},dP=(e,t,r,n)=>jd(e,t,r,n)&&[new RegExp("")];var hP={compile:mP,interpret:jd,collectEvaluatedProperties:dP};const{Schema:yP,Instance:bi}=q,$P=Dt,gP=e=>yP.value(e),vP=(e,t)=>{if(!bi.typeOf(t,"array")||e===!1)return!0;const r=bi.map(n=>$P(bi.value(n)),t);return new Set(r).size===r.length};var bP={compile:gP,interpret:vP};const{Keywords:su}=q;var un={additionalItems:VI,additionalItems6:FI,additionalProperties:zI,additionalProperties6:WI,allOf:tw,anyOf:ow,const:pw,contains:hw,containsMinContainsMaxContains:gw,definitions:ww,dependencies:Pw,dependentRequired:Aw,dependentSchemas:Tw,enum:Mw,exclusiveMaximum:Fw,exclusiveMinimum:Gw,if:Qw,then:nO,else:cO,items:uO,items202012:dO,maxItems:gO,maxLength:IO,maxLength6:PO,maxProperties:xO,maximumExclusiveMaximum:NO,maximum:qO,metaData:su.metaData,minItems:UO,minLength:JO,minLength6:WO,minProperties:ZO,minimumExclusiveMinimum:rE,minimum:iE,multipleOf:fE,not:mE,oneOf:vE,pattern:wE,patternProperties:kE,properties:RE,propertyNames:LE,dynamicRef:KE,ref:WE,required:ZE,tupleItems:nP,type:oP,unevaluatedItems:uP,unevaluatedProperties:hP,uniqueItems:bP,validate:su.validate},SP=`{
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
}`;const{Core:IP,Schema:cs}=q,de=un,wP=SP,ls="http://json-schema.org/draft-04/schema";cs.setConfig(ls,"baseToken","id");cs.setConfig(ls,"embeddedToken","id");cs.setConfig(ls,"anchorToken","id");cs.setConfig(ls,"jrefToken","$ref");cs.add(JSON.parse(wP));IP.defineVocabulary(ls,{validate:de.validate,additionalItems:de.additionalItems,additionalProperties:de.additionalProperties,allOf:de.allOf,anyOf:de.anyOf,default:de.metaData,definitions:de.definitions,dependencies:de.dependencies,description:de.metaData,enum:de.enum,format:de.metaData,items:de.items,maxItems:de.maxItems,maxLength:de.maxLength,maxProperties:de.maxProperties,maximum:de.maximumExclusiveMaximum,minItems:de.minItems,minLength:de.minLength,minProperties:de.minProperties,minimum:de.minimumExclusiveMinimum,multipleOf:de.multipleOf,not:de.not,oneOf:de.oneOf,pattern:de.pattern,patternProperties:de.patternProperties,properties:de.properties,required:de.required,title:de.metaData,type:de.type,uniqueItems:de.uniqueItems});var OP=`{
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
}`;const{Core:EP,Schema:fs}=q,oe=un,PP=OP,us="http://json-schema.org/draft-06/schema";fs.setConfig(us,"baseToken","$id");fs.setConfig(us,"embeddedToken","$id");fs.setConfig(us,"anchorToken","$id");fs.setConfig(us,"jrefToken","$ref");fs.add(JSON.parse(PP));EP.defineVocabulary(us,{validate:oe.validate,additionalItems:oe.additionalItems6,additionalProperties:oe.additionalProperties6,allOf:oe.allOf,anyOf:oe.anyOf,const:oe.const,contains:oe.contains,default:oe.metaData,definitions:oe.definitions,dependencies:oe.dependencies,description:oe.metaData,enum:oe.enum,examples:oe.metaData,exclusiveMaximum:oe.exclusiveMaximum,exclusiveMinimum:oe.exclusiveMinimum,format:oe.metaData,items:oe.items,maxItems:oe.maxItems,maxLength:oe.maxLength6,maxProperties:oe.maxProperties,maximum:oe.maximum,minItems:oe.minItems,minLength:oe.minLength6,minProperties:oe.minProperties,minimum:oe.minimum,multipleOf:oe.multipleOf,not:oe.not,oneOf:oe.oneOf,pattern:oe.pattern,patternProperties:oe.patternProperties,properties:oe.properties,propertyNames:oe.propertyNames,required:oe.required,title:oe.metaData,type:oe.type,uniqueItems:oe.uniqueItems});var kP=`{
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
}`;const{Core:jP,Schema:ps}=q,se=un,AP=kP,ms="http://json-schema.org/draft-07/schema";ps.setConfig(ms,"baseToken","$id");ps.setConfig(ms,"embeddedToken","$id");ps.setConfig(ms,"anchorToken","$id");ps.setConfig(ms,"jrefToken","$ref");ps.add(JSON.parse(AP));jP.defineVocabulary(ms,{validate:se.validate,additionalItems:se.additionalItems6,additionalProperties:se.additionalProperties6,allOf:se.allOf,anyOf:se.anyOf,const:se.const,contains:se.contains,default:se.metaData,definitions:se.definitions,dependencies:se.dependencies,description:se.metaData,enum:se.enum,exclusiveMaximum:se.exclusiveMaximum,exclusiveMinimum:se.exclusiveMinimum,format:se.metaData,if:se.if,then:se.then,else:se.else,items:se.items,maxItems:se.maxItems,maxLength:se.maxLength6,maxProperties:se.maxProperties,maximum:se.maximum,minItems:se.minItems,minLength:se.minLength6,minProperties:se.minProperties,minimum:se.minimum,multipleOf:se.multipleOf,not:se.not,oneOf:se.oneOf,pattern:se.pattern,patternProperties:se.patternProperties,properties:se.properties,propertyNames:se.propertyNames,readOnly:se.metaData,required:se.required,title:se.metaData,type:se.type,uniqueItems:se.uniqueItems,writeOnly:se.metaData});var xP=`{
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
}`,_P=`{
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
}`,CP=`{
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
}`,NP=`{
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
}`,TP=`{
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
}`,RP=`{
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
}`,DP=`{
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
}`;const{Core:ds,Schema:et}=q,z=un,qP=xP,LP=_P,MP=CP,VP=NP,UP=TP,BP=RP,FP=DP,pn="https://json-schema.org/draft/2019-09/schema";et.setConfig(pn,"baseToken","$id");et.setConfig(pn,"embeddedToken","$id");et.setConfig(pn,"anchorToken","$anchor");et.setConfig(pn,"recursiveAnchorToken","$recursiveAnchor");et.setConfig(pn,"vocabularyToken","$vocabulary");et.setConfig(pn,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);et.add(JSON.parse(qP));et.add(JSON.parse(LP));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:z.validate,$defs:z.definitions,$recursiveRef:z.dynamicRef,$ref:z.ref});et.add(JSON.parse(MP));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:z.additionalItems6,additionalProperties:z.additionalProperties6,allOf:z.allOf,anyOf:z.anyOf,contains:z.containsMinContainsMaxContains,dependentSchemas:z.dependentSchemas,if:z.if,then:z.then,else:z.else,items:z.items,not:z.not,oneOf:z.oneOf,patternProperties:z.patternProperties,properties:z.properties,propertyNames:z.propertyNames,unevaluatedItems:z.unevaluatedItems,unevaluatedProperties:z.unevaluatedProperties});et.add(JSON.parse(VP));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:z.const,dependentRequired:z.dependentRequired,enum:z.enum,exclusiveMaximum:z.exclusiveMaximum,exclusiveMinimum:z.exclusiveMinimum,maxItems:z.maxItems,maxLength:z.maxLength6,maxProperties:z.maxProperties,maximum:z.maximum,minItems:z.minItems,minLength:z.minLength6,minProperties:z.minProperties,minimum:z.minimum,multipleOf:z.multipleOf,pattern:z.pattern,required:z.required,type:z.type,uniqueItems:z.uniqueItems});et.add(JSON.parse(UP));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:z.metaData,deprecated:z.metaData,description:z.metaData,examples:z.metaData,readOnly:z.metaData,title:z.metaData,writeOnly:z.metaData});et.add(JSON.parse(BP));et.add(JSON.parse(FP));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:z.metaData,contentMediaType:z.metaData,contentSchema:z.metaData});var KP=`{
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
}`,JP=`{
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
}`,zP=`{
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
}`,GP=`{
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
}`,HP=`{
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
}`,WP=`{
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
}`,XP=`{
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
}`,YP=`{
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
}`,QP=`{
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
}`;const{Core:yr,Schema:ze}=q,F=un,ZP=KP,ek=JP,tk=zP,rk=GP,nk=HP,sk=WP,ak=XP,ik=YP,ok=QP,mn="https://json-schema.org/draft/2020-12/schema";ze.setConfig(mn,"baseToken","$id");ze.setConfig(mn,"embeddedToken","$id");ze.setConfig(mn,"anchorToken","$anchor");ze.setConfig(mn,"dynamicAnchorToken","$dynamicAnchor");ze.setConfig(mn,"vocabularyToken","$vocabulary");ze.setConfig(mn,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);ze.add(JSON.parse(ZP));ze.add(JSON.parse(ek));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:F.validate,$defs:F.definitions,$dynamicRef:F.dynamicRef,$ref:F.ref});ze.add(JSON.parse(tk));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:F.additionalProperties6,allOf:F.allOf,anyOf:F.anyOf,contains:F.containsMinContainsMaxContains,dependentSchemas:F.dependentSchemas,if:F.if,then:F.then,else:F.else,items:F.items202012,not:F.not,oneOf:F.oneOf,patternProperties:F.patternProperties,prefixItems:F.tupleItems,properties:F.properties,propertyNames:F.propertyNames});ze.add(JSON.parse(rk));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:F.const,dependentRequired:F.dependentRequired,enum:F.enum,exclusiveMaximum:F.exclusiveMaximum,exclusiveMinimum:F.exclusiveMinimum,maxItems:F.maxItems,maxLength:F.maxLength6,maxProperties:F.maxProperties,maximum:F.maximum,minItems:F.minItems,minLength:F.minLength6,minProperties:F.minProperties,minimum:F.minimum,multipleOf:F.multipleOf,pattern:F.pattern,required:F.required,type:F.type,uniqueItems:F.uniqueItems});ze.add(JSON.parse(nk));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:F.metaData,deprecated:F.metaData,description:F.metaData,examples:F.metaData,readOnly:F.metaData,title:F.metaData,writeOnly:F.metaData});ze.add(JSON.parse(sk));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:F.metaData});ze.add(JSON.parse(ak));ze.add(JSON.parse(ik));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:F.metaData,contentMediaType:F.metaData,contentSchema:F.metaData});ze.add(JSON.parse(ok));yr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:F.unevaluatedItems,unevaluatedProperties:F.unevaluatedProperties});const{Core:bt,Schema:ck,InvalidSchemaError:lk}=q,fk=un;bt.add,ck.get,bt.validate,bt.compile,bt.interpret,bt.setMetaOutputFormat,bt.setShouldMetaValidate,bt.FLAG,bt.BASIC,bt.DETAILED,bt.VERBOSE;var uk=`{
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
}`;const{Schema:Ad}=q,xd=uk;Ad.add(JSON.parse(xd),"https://spec.openapis.org/oas/3.0/schema");Ad.add(JSON.parse(xd),"https://spec.openapis.org/oas/3.0/schema/latest");var pk=`{
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
}`,mk=`{
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
}`,_d=`{
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
}`;const{Core:dk,Keywords:js,Schema:dn}=q,hk=pk,yk=mk,Cd=_d,Nd=_d;dn.add(JSON.parse(Cd),"https://spec.openapis.org/oas/3.1/schema");dn.add(JSON.parse(Cd),"https://spec.openapis.org/oas/3.1/schema/latest");dn.add(JSON.parse(Nd),"https://spec.openapis.org/oas/3.1/schema-base");dn.add(JSON.parse(Nd),"https://spec.openapis.org/oas/3.1/schema-base/latest");dn.add(JSON.parse(hk));dn.add(JSON.parse(yk));dk.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:js.metaData,discriminator:js.metaData,externalDocs:js.metaData,xml:js.metaData});const{Core:Td,Schema:jn,Instance:Si}=k,$k=async(e,t,r)=>{const n=await jn.step("items",r),s=jn.typeOf(n,"array")?jn.length(n):Number.MAX_SAFE_INTEGER;return jn.typeOf(e,"boolean")?[s,jn.value(e)]:[s,await Td.compileSchema(e,t)]},gk=([e,t],r,n,s)=>Si.typeOf(r,"array")?typeof t=="string"?Si.every((a,i)=>i<e||Td.interpretSchema(t,a,n,s),r):Si.every((a,i)=>i<e?!0:t,r):!0;var vk={compile:$k,interpret:gk};const{Core:Rd,Schema:Ii,Instance:ao}=k,bk=async(e,t,r)=>{const n=await Ii.step("items",r);return[Ii.typeOf(n,"array")?Ii.length(n):Number.MAX_SAFE_INTEGER,await Rd.compileSchema(e,t)]},Dd=([e,t],r,n,s)=>ao.typeOf(r,"array")?ao.every((a,i)=>i<e||Rd.interpretSchema(t,a,n,s),r):!0,Sk=(e,t,r,n)=>Dd(e,t,r,n)&&new Set(ao.map((s,a)=>a,t));var Ik={compile:bk,interpret:Dd,collectEvaluatedItems:Sk};const{Core:qd,Schema:Vt,Instance:au}=k,wk=async(e,t,r)=>{const n=await Vt.step("properties",r),s=Vt.typeOf(n,"object")?Vt.keys(n):[],a=await Vt.step("patternProperties",r),i=Vt.typeOf(a,"object")?Vt.keys(a).map(o=>new RegExp(o)):[];return Vt.typeOf(e,"boolean")?[s,i,Vt.value(e)]:[s,i,await qd.compileSchema(e,t)]},Ok=([e,t,r],n,s,a)=>{if(!au.typeOf(n,"object"))return!0;const i=au.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?i.every(([,o])=>qd.interpretSchema(r,o,s,a)):i.length===0||r};var Ek={compile:wk,interpret:Ok};const{Core:Ld,Schema:Nr,Instance:iu}=k,Pk=async(e,t,r)=>{const n=await Nr.step("properties",r),s=Nr.typeOf(n,"object")?Nr.keys(n):[],a=await Nr.step("patternProperties",r),i=Nr.typeOf(a,"object")?Nr.keys(a).map(o=>new RegExp(o)):[];return[s,i,await Ld.compileSchema(e,t)]},Md=([e,t,r],n,s,a)=>iu.typeOf(n,"object")?iu.entries(n).filter(([i])=>!e.includes(i)&&!t.some(o=>o.test(i))).every(([,i])=>Ld.interpretSchema(r,i,s,a)):!0,kk=(e,t,r,n)=>Md(e,t,r,n)&&[new RegExp("")];var jk={compile:Pk,interpret:Md,collectEvaluatedProperties:kk};const{Core:Ta,Schema:Ak}=k,ou=fe,xk=(e,t)=>ou.pipeline([Ak.map(async r=>Ta.compileSchema(await r,t)),ou.all],e),_k=(e,t,r,n)=>e.every(s=>Ta.interpretSchema(s,t,r,n)),Ck=(e,t,r,n)=>e.reduce((s,a)=>{const i=s&&Ta.collectEvaluatedProperties(a,t,r,n);return i!==!1&&[...s,...i]},[]),Nk=(e,t,r,n)=>e.reduce((s,a)=>{const i=s!==!1&&Ta.collectEvaluatedItems(a,t,r,n);return i!==!1&&new Set([...s,...i])},new Set);var Tk={compile:xk,interpret:_k,collectEvaluatedProperties:Ck,collectEvaluatedItems:Nk};const{Core:Ra,Schema:Rk}=k,cu=fe,Dk=(e,t)=>cu.pipeline([Rk.map(async r=>Ra.compileSchema(await r,t)),cu.all],e),qk=(e,t,r,n)=>e.filter(a=>Ra.interpretSchema(a,t,r,n)).length>0,Lk=(e,t,r,n)=>e.reduce((s,a)=>{const i=Ra.collectEvaluatedProperties(a,t,r,n);return i!==!1?[...s||[],...i]:s},!1),Mk=(e,t,r,n)=>e.reduce((s,a)=>{const i=Ra.collectEvaluatedItems(a,t,r,n);return i!==!1?new Set([...s||[],...i]):s},!1);var Vk={compile:Dk,interpret:qk,collectEvaluatedProperties:Lk,collectEvaluatedItems:Mk};const{Schema:Uk,Instance:Bk}=k,Vd=Dt,Fk=e=>Vd(Uk.value(e)),Kk=(e,t)=>Vd(Bk.value(t))===e;var Jk={compile:Fk,interpret:Kk};const{Core:Ud,Instance:lu}=k,zk=(e,t)=>Ud.compileSchema(e,t),Gk=(e,t,r,n)=>!lu.typeOf(t,"array")||lu.some(s=>Ud.interpretSchema(e,s,r,n),t);var Hk={compile:zk,interpret:Gk};const{Core:Oc,Schema:Tr,Instance:io}=k,Wk=async(e,t,r)=>{const n=await Oc.compileSchema(e,t),s=await Tr.step("minContains",r),a=Tr.typeOf(s,"number")?Tr.value(s):1,i=await Tr.step("maxContains",r),o=Tr.typeOf(i,"number")?Tr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},Bd=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!io.typeOf(n,"array"))return!0;const i=io.reduce((o,c)=>Oc.interpretSchema(e,c,s,a)?o+1:o,0,n);return i>=t&&i<=r},Xk=(e,t,r,n)=>Bd(e,t,r,n)&&io.reduce((s,a,i)=>Oc.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t);var Yk={compile:Wk,interpret:Bd,collectEvaluatedItems:Xk};const{Core:Da,Schema:Rr,Instance:ar}=k,Qk=async(e,t,r)=>{const n=await Da.compileSchema(e,t),s=await Rr.step("minContains",r),a=Rr.typeOf(s,"number")?Rr.value(s):1,i=await Rr.step("maxContains",r),o=Rr.typeOf(i,"number")?Rr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},Ec=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!ar.typeOf(n,"array")&&!ar.typeOf(n,"object"))return!0;const i=ar.entries(n).reduce((o,[,c])=>Da.interpretSchema(e,c,s,a)?o+1:o,0);return i>=t&&i<=r},Zk=(e,t,r,n)=>Ec(e,t,r,n)&&ar.typeOf(t,"array")&&ar.reduce((s,a,i)=>Da.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t),ej=(e,t,r,n)=>Ec(e,t,r,n)&&ar.typeOf(t,"object")&&ar.entries(t).reduce((s,[a,i])=>(Da.interpretSchema(e.contains,i,r,n)&&s.push(a),s),[],t);var tj={compile:Qk,interpret:Ec,collectEvaluatedItems:Zk,collectEvaluatedProperties:ej};const{Core:rj,Schema:nj}=k,wi=fe,sj=async(e,t)=>{await wi.pipeline([nj.entries,wi.map(([,r])=>rj.compileSchema(r,t)),wi.all],e)},aj=()=>!0;var ij={compile:sj,interpret:aj};const{Core:Fd,Schema:Oi,Instance:fu}=k,Ei=fe,oj=(e,t)=>Ei.pipeline([Oi.entries,Ei.map(async([r,n])=>[r,Oi.typeOf(n,"array")?Oi.value(n):await Fd.compileSchema(n,t)]),Ei.all],e),cj=(e,t,r,n)=>{const s=fu.value(t);return!fu.typeOf(t,"object")||e.every(([a,i])=>a in s?Array.isArray(i)?i.every(o=>o in s):Fd.interpretSchema(i,t,r,n):!0)};var lj={compile:oj,interpret:cj};const{Schema:uu,Instance:pu}=k,Pi=fe,fj=e=>Pi.pipeline([uu.entries,Pi.map(([t,r])=>[t,uu.value(r)]),Pi.all],e),uj=(e,t)=>{const r=pu.value(t);return!pu.typeOf(t,"object")||e.every(([n,s])=>!(n in r)||s.every(a=>a in r))};var pj={compile:fj,interpret:uj};const{Core:Pc,Schema:mj,Instance:oo}=k,ki=fe,dj=(e,t)=>ki.pipeline([mj.entries,ki.map(async([r,n])=>[r,await Pc.compileSchema(n,t)]),ki.all],e),hj=(e,t,r,n)=>{const s=oo.value(t);return!oo.typeOf(t,"object")||e.every(([a,i])=>!(a in s)||Pc.interpretSchema(i,t,r,n))},yj=(e,t,r,n)=>e.reduce((s,[a,i])=>{if(!s||!oo.has(a,t))return s;const o=Pc.collectEvaluatedProperties(i,t,r,n);return o!==!1&&s.concat(o)},[]);var $j={compile:dj,interpret:hj,collectEvaluatedProperties:yj};const gj=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,vj=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),bj=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]};var kc={isObject:gj,escapeRegExp:vj,splitUrl:bj};const{Core:zn,Schema:Fs}=k,{splitUrl:Sj}=kc,Ij=async(e,t)=>{const[,r]=Sj(Fs.value(e)),n=await Fs.get(Fs.value(e),e);return await zn.compileSchema(n,t),[n.id,r]},wj=([e,t],r,n,s)=>{if(t in n.metaData[e].dynamicAnchors)return zn.interpretSchema(s[t],r,n,s);{const a=Fs.getAnchorPointer(n.metaData[e],t);return zn.interpretSchema(`${e}#${encodeURI(a)}`,r,n,s)}},Oj=zn.collectEvaluatedProperties,Ej=zn.collectEvaluatedItems;var Pj={compile:Ij,interpret:wj,collectEvaluatedProperties:Oj,collectEvaluatedItems:Ej};const{Core:qa,Schema:mu}=k,{splitUrl:kj}=kc,jj=async(e,t)=>{const[r,n]=kj(mu.value(e)),s=await mu.get(r,e);return await qa.compileSchema(s,t),n},Aj=(e,t,r,n)=>{if(!(e in n))throw Error(`No dynamic anchor found for "${e}"`);return qa.interpretSchema(n[e],t,r,n)},xj=qa.collectEvaluatedProperties,_j=qa.collectEvaluatedItems;var Cj={compile:jj,interpret:Aj,collectEvaluatedProperties:xj,collectEvaluatedItems:_j};const{Core:jc,Schema:Nj}=k,Tj=Nj.value,Rj=(e,t,r,n)=>{if(!(e in n))throw Error(`No dynamic anchor found for "${e}"`);return jc.interpretSchema(n[e],t,r,n)},Dj=jc.collectEvaluatedProperties,qj=jc.collectEvaluatedItems;var Lj={compile:Tj,interpret:Rj,collectEvaluatedProperties:Dj,collectEvaluatedItems:qj};const{Schema:Mj,Instance:Vj}=k,Kd=Dt,Uj=e=>Mj.value(e).map(Kd),Bj=(e,t)=>e.some(r=>Kd(Vj.value(t))===r);var Fj={compile:Uj,interpret:Bj};const{Schema:Kj,Instance:du}=k,Jj=async e=>Kj.value(e),zj=(e,t)=>!du.typeOf(t,"number")||du.value(t)<e;var Gj={compile:Jj,interpret:zj};const{Schema:Hj,Instance:hu}=k,Wj=async e=>Hj.value(e),Xj=(e,t)=>!hu.typeOf(t,"number")||hu.value(t)>e;var Yj={compile:Wj,interpret:Xj};const{Core:La}=k,Qj=(e,t)=>La.compileSchema(e,t),Zj=(e,t,r,n)=>(La.interpretSchema(e,t,r,n),!0),eA=(e,t,r,n)=>La.collectEvaluatedProperties(e,t,r,n)||[],tA=(e,t,r,n)=>La.collectEvaluatedItems(e,t,r,n)||new Set;var rA={compile:Qj,interpret:Zj,collectEvaluatedProperties:eA,collectEvaluatedItems:tA};const{Core:Yr,Schema:yu}=k,nA=async(e,t,r)=>{if(yu.has("if",r)){const n=await yu.step("if",r);return[await Yr.compileSchema(n,t),await Yr.compileSchema(e,t)]}else return[]},sA=([e,t],r,n,s)=>e===void 0||!Ac(e,r,n,s)||Yr.interpretSchema(t,r,n,s),Ac=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Yr.getKeyword(a).interpret(i,t,r,n))},aA=([e,t],r,n,s)=>e===void 0||!Ac(e,r,n,s)?[]:Yr.collectEvaluatedProperties(t,r,n,s),iA=([e,t],r,n,s)=>e===void 0||!Ac(e,r,n,s)?new Set:Yr.collectEvaluatedItems(t,r,n,s);var oA={compile:nA,interpret:sA,collectEvaluatedProperties:aA,collectEvaluatedItems:iA};const{Core:Qr,Schema:$u}=k,cA=async(e,t,r)=>{if($u.has("if",r)){const n=await $u.step("if",r);return[await Qr.compileSchema(n,t),await Qr.compileSchema(e,t)]}else return[]},lA=([e,t],r,n,s)=>e===void 0||xc(e,r,n,s)||Qr.interpretSchema(t,r,n,s),xc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Qr.getKeyword(a).interpret(i,t,r,n))},fA=([e,t],r,n,s)=>e===void 0||xc(e,r,n,s)?[]:Qr.collectEvaluatedProperties(t,r,n,s),uA=([e,t],r,n,s)=>e===void 0||xc(e,r,n,s)?new Set:Qr.collectEvaluatedItems(t,r,n,s);var pA={compile:cA,interpret:lA,collectEvaluatedProperties:fA,collectEvaluatedItems:uA};const{Core:sa,Schema:gu,Instance:Ks}=k,mA=async(e,t)=>{if(gu.typeOf(e,"array")){const r=await gu.map(n=>sa.compileSchema(n,t),e);return Promise.all(r)}else return sa.compileSchema(e,t)},Jd=(e,t,r,n)=>Ks.typeOf(t,"array")?typeof e=="string"?Ks.every(s=>sa.interpretSchema(e,s,r,n),t):Ks.every((s,a)=>!(a in e)||sa.interpretSchema(e[a],s,r,n),t):!0,dA=(e,t,r,n)=>Jd(e,t,r,n)&&(typeof e=="string"?new Set(Ks.map((s,a)=>a,t)):new Set(e.map((s,a)=>a)));var hA={compile:mA,interpret:Jd,collectEvaluatedItems:dA};const{Core:zd,Schema:ji,Instance:co}=k,yA=async(e,t,r)=>{const n=await ji.step("prefixItems",r);return[ji.typeOf(n,"array")?ji.length(n):0,await zd.compileSchema(e,t)]},Gd=([e,t],r,n,s)=>co.typeOf(r,"array")?co.every((a,i)=>i<e||zd.interpretSchema(t,a,n,s),r):!0,$A=(e,t,r,n)=>Gd(e,t,r,n)&&new Set(co.map((s,a)=>a,t));var gA={compile:yA,interpret:Gd,collectEvaluatedItems:$A};const{Schema:vA,Instance:vu}=k,bA=e=>vA.value(e),SA=(e,t)=>!vu.typeOf(t,"array")||vu.length(t)<=e;var IA={compile:bA,interpret:SA};const{Schema:wA,Instance:bu}=k,OA=e=>wA.value(e),EA=(e,t)=>!bu.typeOf(t,"string")||bu.length(t)<=e;var PA={compile:OA,interpret:EA};const{Schema:kA,Instance:Su}=k,jA=e=>kA.value(e),AA=(e,t)=>!Su.typeOf(t,"string")||[...Su.value(t)].length<=e;var xA={compile:jA,interpret:AA};const{Schema:_A,Instance:Iu}=k,CA=e=>_A.value(e),NA=(e,t)=>!Iu.typeOf(t,"object")||Iu.keys(t).length<=e;var TA={compile:CA,interpret:NA};const{Schema:Ai,Instance:wu}=k,RA=async(e,t,r)=>{const n=await Ai.step("exclusiveMaximum",r),s=Ai.value(n);return[Ai.value(e),s]},DA=([e,t],r)=>{if(!wu.typeOf(r,"number"))return!0;const n=wu.value(r);return t?n<e:n<=e};var qA={compile:RA,interpret:DA};const{Schema:LA,Instance:Ou}=k,MA=async e=>LA.value(e),VA=(e,t)=>!Ou.typeOf(t,"number")||Ou.value(t)<=e;var UA={compile:MA,interpret:VA};const{Schema:BA,Instance:Eu}=k,FA=e=>BA.value(e),KA=(e,t)=>!Eu.typeOf(t,"array")||Eu.length(t)>=e;var JA={compile:FA,interpret:KA};const{Schema:zA,Instance:Pu}=k,GA=e=>zA.value(e),HA=(e,t)=>!Pu.typeOf(t,"string")||Pu.length(t)>=e;var WA={compile:GA,interpret:HA};const{Schema:XA,Instance:ku}=k,YA=e=>XA.value(e),QA=(e,t)=>!ku.typeOf(t,"string")||[...ku.value(t)].length>=e;var ZA={compile:YA,interpret:QA};const{Schema:ex,Instance:ju}=k,tx=e=>ex.value(e),rx=(e,t)=>!ju.typeOf(t,"object")||ju.keys(t).length>=e;var nx={compile:tx,interpret:rx};const{Schema:xi,Instance:Au}=k,sx=async(e,t,r)=>{const n=await xi.step("exclusiveMinimum",r),s=xi.value(n);return[xi.value(e),s]},ax=([e,t],r)=>{if(!Au.typeOf(r,"number"))return!0;const n=Au.value(r);return t?n>e:n>=e};var ix={compile:sx,interpret:ax};const{Schema:ox,Instance:xu}=k,cx=async e=>ox.value(e),lx=(e,t)=>!xu.typeOf(t,"number")||xu.value(t)>=e;var fx={compile:cx,interpret:lx};const{Schema:ux,Instance:_u}=k,px=e=>ux.value(e),mx=(e,t)=>{if(!_u.typeOf(t,"number"))return!0;const r=_u.value(t)%e;return Cu(0,r)||Cu(e,r)},Cu=(e,t)=>Math.abs(e-t)<11920929e-14;var dx={compile:px,interpret:mx};const{Core:Hd}=k,hx=Hd.compileSchema,yx=(e,t,r,n)=>!Hd.interpretSchema(e,t,r,n);var $x={compile:hx,interpret:yx};const{Core:Ma,Schema:gx}=k,vx=async(e,t)=>{const r=await gx.map(n=>Ma.compileSchema(n,t),e);return Promise.all(r)},bx=(e,t,r,n)=>{let s=0;for(const a of e)if(Ma.interpretSchema(a,t,r,n)&&s++,s>1)break;return s===1},Sx=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ma.collectEvaluatedProperties(i,t,r,n);return o?s++===0&&o:a},!1)},Ix=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ma.collectEvaluatedItems(i,t,r,n);return o?s++===0&&o:a},!1)};var wx={compile:vx,interpret:bx,collectEvaluatedProperties:Sx,collectEvaluatedItems:Ix};const{Schema:As,Instance:Nu}=k,Ox=async(e,t,r)=>{const n=await As.value(e),s=await As.step("properties",r),a=As.typeOf(s,"object")?As.keys(s):[],i=new Set(a);return n.forEach(o=>a.remove(o)),[...i]},Ex=(e,t)=>!Nu.typeOf(t,"object")||e.every(r=>Nu.value(t).hasOwnProperty(r));var Px={compile:Ox,interpret:Ex};const{Schema:kx,Instance:Tu}=k,jx=e=>new RegExp(kx.value(e),"u"),Ax=(e,t)=>!Tu.typeOf(t,"string")||e.test(Tu.value(t));var xx={compile:jx,interpret:Ax};const{Core:Wd,Schema:_x,Instance:Ru}=k,_i=fe,Cx=(e,t)=>_i.pipeline([_x.entries,_i.map(async([r,n])=>[new RegExp(r,"u"),await Wd.compileSchema(n,t)]),_i.all],e),Xd=(e,t,r,n)=>!Ru.typeOf(t,"object")||e.every(([s,a])=>Ru.entries(t).filter(([i])=>s.test(i)).every(([,i])=>Wd.interpretSchema(a,i,r,n))),Nx=(e,t,r,n)=>Xd(e,t,r,n)&&e.map(([s])=>s);var Tx={compile:Cx,interpret:Xd,collectEvaluatedProperties:Nx};const{Core:Yd,Schema:Rx,Instance:Du}=k,qu=fe,{escapeRegExp:Dx}=kc,qx=(e,t)=>qu.pipeline([Rx.entries,qu.reduce(async(r,[n,s])=>(r[n]=await Yd.compileSchema(s,t),r),Object.create(null))],e),Qd=(e,t,r,n)=>!Du.typeOf(t,"object")||Du.entries(t).filter(([s])=>s in e).every(([s,a])=>Yd.interpretSchema(e[s],a,r,n)),Lx=(e,t,r,n)=>Qd(e,t,r,n)&&Object.keys(e).map(s=>new RegExp(`^${Dx(s)}$`));var Mx={compile:qx,interpret:Qd,collectEvaluatedProperties:Lx};const{Core:Zd,Schema:Lu,Instance:Ci}=k,xs=fe,Vx=async(e,t)=>xs.pipeline([Lu.entries,xs.reduce(async(r,[n,s])=>(r[n]=await xs.pipeline([Lu.entries,xs.reduce(async(a,[i,o])=>(a[i]=await Zd.compileSchema(o,t),a),{})],s),r),{})],e),Ux=(e,t,r,n)=>!Ci.typeOf(t,"object")||Object.entries(e).every(([s,a])=>!Ci.has(s,t)||Zd.interpretSchema(a[Ci.value(t)[s]],t,r,n));var Bx={compile:Vx,interpret:Ux};const{Core:eh,Instance:Ni}=k,Fx=(e,t)=>eh.compileSchema(e,t),Kx=(e,t,r,n)=>!Ni.typeOf(t,"object")||Ni.keys(t).every(s=>eh.interpretSchema(e,Ni.cons(s),r,n));var Jx={compile:Fx,interpret:Kx};const{Core:Va,Schema:Mu}=k,zx=async(e,t)=>{const r=await Mu.get(Mu.value(e),e);return Va.compileSchema(r,t)},Gx=Va.interpretSchema,Hx=Va.collectEvaluatedProperties,Wx=Va.collectEvaluatedItems;var Xx={compile:zx,interpret:Gx,collectEvaluatedProperties:Hx,collectEvaluatedItems:Wx};const{Schema:Yx,Instance:Vu}=k,Qx=e=>Yx.value(e),Zx=(e,t)=>!Vu.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(Vu.value(t),r));var e_={compile:Qx,interpret:Zx};const{Core:th,Schema:t_,Instance:Uu}=k,Bu=fe,r_=(e,t)=>Bu.pipeline([t_.map(r=>th.compileSchema(r,t)),Bu.all],e),rh=(e,t,r,n)=>Uu.typeOf(t,"array")?Uu.every((s,a)=>!(a in e)||th.interpretSchema(e[a],s,r,n),t):!0,n_=(e,t,r,n)=>rh(e,t,r,n)&&new Set(e.map((s,a)=>a));var s_={compile:r_,interpret:rh,collectEvaluatedItems:n_};const{Schema:a_,Instance:Fu}=k,i_=e=>a_.value(e),o_=(e,t)=>typeof e=="string"?Fu.typeOf(t,e):e.some(Fu.typeOf(t));var c_={compile:i_,interpret:o_};const{Core:lo,Schema:l_,Instance:Js}=k,f_=async(e,t,r)=>[l_.uri(r),await lo.compileSchema(e,t)],nh=([e,t],r,n,s)=>{if(!Js.typeOf(r,"array"))return!0;const a=lo.collectEvaluatedItems(e,r,n,s,!0);return a===!1||Js.every((i,o)=>a.has(o)||lo.interpretSchema(t,Js.step(o,r),n,s),r)},u_=(e,t,r,n)=>nh(e,t,r,n)&&new Set(Js.map((s,a)=>a,t));var p_={compile:f_,interpret:nh,collectEvaluatedItems:u_};const{Core:fo,Schema:m_,Instance:Ku}=k,d_=async(e,t,r)=>[m_.uri(r),await fo.compileSchema(e,t)],sh=([e,t],r,n,s)=>{if(!Ku.typeOf(r,"object"))return!0;const a=fo.collectEvaluatedProperties(e,r,n,s,!0);return!a||Ku.entries(r).filter(([i])=>!a.some(o=>i.match(o))).every(([,i])=>fo.interpretSchema(t,i,n,s))},h_=(e,t,r,n)=>sh(e,t,r,n)&&[new RegExp("")];var y_={compile:d_,interpret:sh,collectEvaluatedProperties:h_};const{Schema:$_,Instance:Ti}=k,g_=Dt,v_=e=>$_.value(e),b_=(e,t)=>{if(!Ti.typeOf(t,"array")||e===!1)return!0;const r=Ti.map(n=>g_(Ti.value(n)),t);return new Set(r).size===r.length};var S_={compile:v_,interpret:b_};const{Keywords:Ju}=k;var I_={additionalItems:vk,additionalItems6:Ik,additionalProperties:Ek,additionalProperties6:jk,allOf:Tk,anyOf:Vk,const:Jk,contains:Hk,containsMinContainsMaxContains:Yk,containsMinContainsMaxContainsFUTURE:tj,definitions:ij,dependencies:lj,dependentRequired:pj,dependentSchemas:$j,dynamicRef:Pj,dynamicRefNEXT:Cj,dynamicRefPROPOSED:Lj,enum:Fj,exclusiveMaximum:Gj,exclusiveMinimum:Yj,if:rA,then:oA,else:pA,items:hA,items202012:gA,maxItems:IA,maxLength:PA,maxLength6:xA,maxProperties:TA,maximumExclusiveMaximum:qA,maximum:UA,metaData:Ju.metaData,minItems:JA,minLength:WA,minLength6:ZA,minProperties:nx,minimumExclusiveMinimum:ix,minimum:fx,multipleOf:dx,not:$x,oneOf:wx,optional:Px,pattern:xx,patternProperties:Tx,properties:Mx,propertyDependencies:Bx,propertyNames:Jx,ref:Xx,required:e_,tupleItems:s_,type:c_,unevaluatedItems:p_,unevaluatedProperties:y_,uniqueItems:S_,validate:Ju.validate},w_=`{
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
}`,O_=`{
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
}`,E_=`{
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
}`,P_=`{
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
}`,k_=`{
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
}`,j_=`{
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
}`,A_=`{
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
}`,x_=`{
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
}`,__=`{
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
}`;const{Core:$r,Schema:Ge}=k,U=I_,C_=w_,N_=O_,T_=E_,R_=P_,D_=k_,q_=j_,L_=A_,M_=x_,V_=__,hn="https://json-schema.org/draft/next/schema";Ge.setConfig(hn,"baseToken","$id");Ge.setConfig(hn,"embeddedToken","$id");Ge.setConfig(hn,"anchorToken","$anchor");Ge.setConfig(hn,"dynamicAnchorToken","$dynamicAnchor");Ge.setConfig(hn,"vocabularyToken","$vocabulary");Ge.setConfig(hn,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);Ge.add(JSON.parse(C_));Ge.add(JSON.parse(N_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:U.validate,$defs:U.definitions,$dynamicRef:U.dynamicRefNEXT,$dref:U.dynamicRefPROPOSED,$ref:U.ref});Ge.add(JSON.parse(T_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:U.additionalProperties6,allOf:U.allOf,anyOf:U.anyOf,contains:U.containsMinContainsMaxContainsFUTURE,dependentSchemas:U.dependentSchemas,if:U.if,then:U.then,else:U.else,items:U.items202012,not:U.not,oneOf:U.oneOf,patternProperties:U.patternProperties,prefixItems:U.tupleItems,properties:U.properties,propertyDependencies:U.propertyDependencies,propertyNames:U.propertyNames});Ge.add(JSON.parse(R_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:U.const,dependentRequired:U.dependentRequired,enum:U.enum,exclusiveMaximum:U.exclusiveMaximum,exclusiveMinimum:U.exclusiveMinimum,maxItems:U.maxItems,maxLength:U.maxLength6,maxProperties:U.maxProperties,maximum:U.maximum,minItems:U.minItems,minLength:U.minLength6,minProperties:U.minProperties,minimum:U.minimum,multipleOf:U.multipleOf,optional:U.optional,pattern:U.pattern,required:U.required,type:U.type,uniqueItems:U.uniqueItems});Ge.add(JSON.parse(D_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:U.metaData,deprecated:U.metaData,description:U.metaData,examples:U.metaData,readOnly:U.metaData,title:U.metaData,writeOnly:U.metaData});Ge.add(JSON.parse(q_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:U.metaData});Ge.add(JSON.parse(L_));Ge.add(JSON.parse(M_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:U.metaData,contentMediaType:U.metaData,contentSchema:U.metaData});Ge.add(JSON.parse(V_));$r.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:U.unevaluatedItems,unevaluatedProperties:U.unevaluatedProperties});function U_(e){return{c:Ne,l:Ne,m:Ne,p:Ne,i:Ne,o:Ne,d:Ne}}function B_(e){let t,r;return t=new Vm({props:{results:e[5]}}),{c(){lt(t.$$.fragment)},l(n){ft(t.$$.fragment,n)},m(n,s){ut(t,n,s),r=!0},p(n,s){const a={};s&32&&(a.results=n[5]),t.$set(a)},i(n){r||(Be(t.$$.fragment,n),r=!0)},o(n){Fe(t.$$.fragment,n),r=!1},d(n){pt(t,n)}}}function F_(e){return{c:Ne,l:Ne,m:Ne,p:Ne,i:Ne,o:Ne,d:Ne}}function K_(e){let t,r,n,s,a,i,o,c,l,f,y,p,h,P,m,d,v,O,b,j,S,A,G,re,I,C,N,R,H,D,Q,ye,ge;function K(Z){e[11](Z)}let Pe={ns:"schemas",tabs:e[1],newTab:e[7],active:0};e[0]!==void 0&&(Pe.format=e[0]),m=new lf({props:Pe}),Ut.push(()=>Dr(m,"format",K)),m.$on("input",e[9]);function ot(Z){e[12](Z)}function ke(Z){e[13](Z)}function He(Z){e[14](Z)}let We={ns:"instances",tabs:e[2],newTab:e[8]};e[3]!==void 0&&(We.selected=e[3]),e[3]!==void 0&&(We.active=e[3]),e[0]!==void 0&&(We.format=e[0]),b=new lf({props:We}),Ut.push(()=>Dr(b,"selected",ot)),Ut.push(()=>Dr(b,"active",ke)),Ut.push(()=>Dr(b,"format",He)),b.$on("input",e[10]),I=new Vm({props:{results:e[4]}});let he={ctx:e,current:null,token:null,hasCatch:!1,pending:F_,then:B_,catch:U_,value:18,blocks:[,,,]};return Gs(R=e[4],he),D=new f2({}),{c(){t=Te(),r=W("div"),n=W("button"),s=ue("JSON"),i=W("button"),o=ue("YAML"),l=Te(),f=W("main"),y=W("h1"),p=ue("Hyperjump - JSON Schema Validator"),h=Te(),P=W("div"),lt(m.$$.fragment),v=Te(),O=W("div"),lt(b.$$.fragment),G=Te(),re=W("div"),lt(I.$$.fragment),C=Te(),N=W("div"),he.block.c(),H=Te(),lt(D.$$.fragment),this.h()},l(Z){Oh('[data-svelte="svelte-14138tz"]',document.head).forEach(x),t=Re(Z),r=X(Z,"DIV",{class:!0});var $e=M(r);n=X($e,"BUTTON",{class:!0});var Ie=M(n);s=pe(Ie,"JSON"),Ie.forEach(x),i=X($e,"BUTTON",{class:!0});var Xe=M(i);o=pe(Xe,"YAML"),Xe.forEach(x),$e.forEach(x),l=Re(Z),f=X(Z,"MAIN",{class:!0});var qe=M(f);y=X(qe,"H1",{class:!0});var gr=M(y);p=pe(gr,"Hyperjump - JSON Schema Validator"),gr.forEach(x),h=Re(qe),P=X(qe,"DIV",{class:!0});var vr=M(P);ft(m.$$.fragment,vr),vr.forEach(x),v=Re(qe),O=X(qe,"DIV",{class:!0});var yn=M(O);ft(b.$$.fragment,yn),yn.forEach(x),G=Re(qe),re=X(qe,"DIV",{class:!0});var hs=M(re);ft(I.$$.fragment,hs),hs.forEach(x),C=Re(qe),N=X(qe,"DIV",{class:!0});var ys=M(N);he.block.l(ys),ys.forEach(x),H=Re(qe),ft(D.$$.fragment,qe),qe.forEach(x),this.h()},h(){document.title="Hyperjump - JSON Schema Validator",_(n,"class",a=Ss(e[0]==="json"?"selected":"")+" svelte-ub4xmj"),_(i,"class",c=Ss(e[0]==="yaml"?"selected":"")+" svelte-ub4xmj"),_(r,"class","format svelte-ub4xmj"),_(y,"class","svelte-ub4xmj"),_(P,"class","editor-section svelte-ub4xmj"),_(O,"class","editor-section svelte-ub4xmj"),_(re,"class","results "+Gu+" svelte-ub4xmj"),_(N,"class","results "+Gu+" svelte-ub4xmj"),_(f,"class","svelte-ub4xmj")},m(Z,ce){te(Z,t,ce),te(Z,r,ce),T(r,n),T(n,s),T(r,i),T(i,o),te(Z,l,ce),te(Z,f,ce),T(f,y),T(y,p),T(f,h),T(f,P),ut(m,P,null),T(f,v),T(f,O),ut(b,O,null),T(f,G),T(f,re),ut(I,re,null),T(f,C),T(f,N),he.block.m(N,he.anchor=null),he.mount=()=>N,he.anchor=null,T(f,H),ut(D,f,null),Q=!0,ye||(ge=[ir(n,"click",e[6]("json")),ir(i,"click",e[6]("yaml"))],ye=!0)},p(Z,[ce]){e=Z,(!Q||ce&1&&a!==(a=Ss(e[0]==="json"?"selected":"")+" svelte-ub4xmj"))&&_(n,"class",a),(!Q||ce&1&&c!==(c=Ss(e[0]==="yaml"?"selected":"")+" svelte-ub4xmj"))&&_(i,"class",c);const $e={};ce&2&&($e.tabs=e[1]),!d&&ce&1&&(d=!0,$e.format=e[0],qr(()=>d=!1)),m.$set($e);const Ie={};ce&4&&(Ie.tabs=e[2]),!j&&ce&8&&(j=!0,Ie.selected=e[3],qr(()=>j=!1)),!S&&ce&8&&(S=!0,Ie.active=e[3],qr(()=>S=!1)),!A&&ce&1&&(A=!0,Ie.format=e[0],qr(()=>A=!1)),b.$set(Ie);const Xe={};ce&16&&(Xe.results=e[4]),I.$set(Xe),he.ctx=e,ce&16&&R!==(R=e[4])&&Gs(R,he)||Wu(he,e,ce)},i(Z){Q||(Be(m.$$.fragment,Z),Be(b.$$.fragment,Z),Be(I.$$.fragment,Z),Be(he.block),Be(D.$$.fragment,Z),Q=!0)},o(Z){Fe(m.$$.fragment,Z),Fe(b.$$.fragment,Z),Fe(I.$$.fragment,Z);for(let ce=0;ce<3;ce+=1){const $e=he.blocks[ce];Fe($e)}Fe(D.$$.fragment,Z),Q=!1},d(Z){Z&&x(t),Z&&x(r),Z&&x(l),Z&&x(f),pt(m),pt(b),pt(I),he.block.d(),he.token=null,he=null,pt(D),ye=!1,Hu(ge)}}}const zu=750,Ri="https://json-schema.org/draft/2020-12/schema",An="https://json-schema.hyperjump.io/schema",Gu="solarized-dark";function J_(e,t,r){let n,s,a="json";const i=(S,A)=>A==="yaml"?Dy.parse(S):JSON.parse(S),o={json:S=>`{
  "$id": "${S}",
  "$schema": "${Ri}"
}`,yaml:S=>`$id: '${S}'
$schema: '${Ri}'`},c=S=>()=>{r(0,a=S),r(1,y=[l("Schema",An,!0)]),r(2,p=[f("Instance")]),r(3,h=0)},l=function(){let S=1;return(A=void 0,G=void 0,re=!1)=>{const I=G||`${An}${++S}`;return{label:A||`Schema ${S}`,text:o[a](I),persistent:re}}}(),f=function(){let S=1;return()=>({label:`Instance ${S++}`,text:""})}();let y=[l("Schema",An,!0)],p=[f("Instance")],h=0;const P=function(S,A){let G;return({detail:re})=>{clearTimeout(G),G=setTimeout(()=>S(re),A)}},m=P(S=>r(1,y=S),zu),d=P(S=>r(2,p=S),zu);De.setMetaOutputFormat(De.BASIC);function v(S){a=S,r(0,a)}function O(S){h=S,r(3,h)}function b(S){h=S,r(3,h)}function j(S){a=S,r(0,a)}return e.$$.update=()=>{e.$$.dirty&3&&r(4,n=async function(){y.forEach((A,G)=>{const re=G===0?An:"";De.add(i(A.text||"true",a),re,Ri)});const S=await De.get(An);return De.validate(S)}()),e.$$.dirty&29&&r(5,s=async function(){if(p[h].text!==""){let S;try{S=await n}catch{}if(S){const A=S(i(p[h].text,a),De.BASIC);if(A.valid)return A;throw{output:A}}}}())},[a,y,p,h,n,s,c,l,f,m,d,v,O,b,j]}class G_ extends Wt{constructor(t){super(),Xt(this,t,J_,K_,Yt,{})}}export{G_ as default};
