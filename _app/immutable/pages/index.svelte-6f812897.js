import{S as Zt,i as er,s as tr,l as X,a as Re,u as pe,m as W,p as M,h as A,c as qe,v as ue,q as C,b as te,J as T,K as nl,L as pr,n as Te,M as ra,N as ru,e as Wt,O as Ah,P as Jt,w as Ke,Q as Vr,x as ut,y as mt,z as dt,R as Br,f as Be,t as Fe,C as ht,T as Ch,U as sl,V as na,W as nu,F as bo,X as Ot,Y as Et,G as So,H as Io,I as wo,r as ks,Z as _h,_ as xs}from"../chunks/index-87447f69.js";const Oo=Symbol.for("yaml.alias"),Ji=Symbol.for("yaml.document"),Xt=Symbol.for("yaml.map"),su=Symbol.for("yaml.pair"),Dt=Symbol.for("yaml.scalar"),an=Symbol.for("yaml.seq"),st=Symbol.for("yaml.node.type"),hr=e=>!!e&&typeof e=="object"&&e[st]===Oo,ts=e=>!!e&&typeof e=="object"&&e[st]===Ji,yr=e=>!!e&&typeof e=="object"&&e[st]===Xt,Ee=e=>!!e&&typeof e=="object"&&e[st]===su,be=e=>!!e&&typeof e=="object"&&e[st]===Dt,on=e=>!!e&&typeof e=="object"&&e[st]===an;function ke(e){if(e&&typeof e=="object")switch(e[st]){case Xt:case an:return!0}return!1}function _e(e){if(e&&typeof e=="object")switch(e[st]){case Oo:case Xt:case Dt:case an:return!0}return!1}const Nh=e=>(be(e)||ke(e))&&!!e.anchor;class Eo{constructor(t){Object.defineProperty(this,st,{value:t})}clone(){const t=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(t.range=this.range.slice()),t}}const Ye=Symbol("break visit"),au=Symbol("skip children"),kt=Symbol("remove node");function Yt(e,t){const r=iu(t);ts(e)?Fr(null,e.contents,r,Object.freeze([e]))===kt&&(e.contents=null):Fr(null,e,r,Object.freeze([]))}Yt.BREAK=Ye;Yt.SKIP=au;Yt.REMOVE=kt;function Fr(e,t,r,n){const s=ou(e,t,r,n);if(_e(s)||Ee(s))return cu(e,n,s),Fr(e,s,r,n);if(typeof s!="symbol"){if(ke(t)){n=Object.freeze(n.concat(t));for(let a=0;a<t.items.length;++a){const i=Fr(a,t.items[a],r,n);if(typeof i=="number")a=i-1;else{if(i===Ye)return Ye;i===kt&&(t.items.splice(a,1),a-=1)}}}else if(Ee(t)){n=Object.freeze(n.concat(t));const a=Fr("key",t.key,r,n);if(a===Ye)return Ye;a===kt&&(t.key=null);const i=Fr("value",t.value,r,n);if(i===Ye)return Ye;i===kt&&(t.value=null)}}return s}async function da(e,t){const r=iu(t);ts(e)?await Kr(null,e.contents,r,Object.freeze([e]))===kt&&(e.contents=null):await Kr(null,e,r,Object.freeze([]))}da.BREAK=Ye;da.SKIP=au;da.REMOVE=kt;async function Kr(e,t,r,n){const s=await ou(e,t,r,n);if(_e(s)||Ee(s))return cu(e,n,s),Kr(e,s,r,n);if(typeof s!="symbol"){if(ke(t)){n=Object.freeze(n.concat(t));for(let a=0;a<t.items.length;++a){const i=await Kr(a,t.items[a],r,n);if(typeof i=="number")a=i-1;else{if(i===Ye)return Ye;i===kt&&(t.items.splice(a,1),a-=1)}}}else if(Ee(t)){n=Object.freeze(n.concat(t));const a=await Kr("key",t.key,r,n);if(a===Ye)return Ye;a===kt&&(t.key=null);const i=await Kr("value",t.value,r,n);if(i===Ye)return Ye;i===kt&&(t.value=null)}}return s}function iu(e){return typeof e=="object"&&(e.Collection||e.Node||e.Value)?Object.assign({Alias:e.Node,Map:e.Node,Scalar:e.Node,Seq:e.Node},e.Value&&{Map:e.Value,Scalar:e.Value,Seq:e.Value},e.Collection&&{Map:e.Collection,Seq:e.Collection},e):e}function ou(e,t,r,n){var s,a,i,o,c;if(typeof r=="function")return r(e,t,n);if(yr(t))return(s=r.Map)==null?void 0:s.call(r,e,t,n);if(on(t))return(a=r.Seq)==null?void 0:a.call(r,e,t,n);if(Ee(t))return(i=r.Pair)==null?void 0:i.call(r,e,t,n);if(be(t))return(o=r.Scalar)==null?void 0:o.call(r,e,t,n);if(hr(t))return(c=r.Alias)==null?void 0:c.call(r,e,t,n)}function cu(e,t,r){const n=t[t.length-1];if(ke(n))n.items[e]=r;else if(Ee(n))e==="key"?n.key=r:n.value=r;else if(ts(n))n.contents=r;else{const s=hr(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const Th={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Rh=e=>e.replace(/[!,[\]{}]/g,t=>Th[t]);class Ve{constructor(t,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Ve.defaultYaml,t),this.tags=Object.assign({},Ve.defaultTags,r)}clone(){const t=new Ve(this.yaml,this.tags);return t.docStart=this.docStart,t}atDocument(){const t=new Ve(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Ve.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Ve.defaultTags);break}return t}add(t,r){this.atNextDocument&&(this.yaml={explicit:Ve.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Ve.defaultTags),this.atNextDocument=!1);const n=t.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[a,i]=n;return this.tags[a]=i,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[a]=n;if(a==="1.1"||a==="1.2")return this.yaml.version=a,!0;{const i=/^\d+\.\d+$/.test(a);return r(6,`Unsupported YAML version ${a}`,i),!1}}default:return r(0,`Unknown directive ${s}`,!0),!1}}tagName(t,r){if(t==="!")return"!";if(t[0]!=="!")return r(`Not a valid tag: ${t}`),null;if(t[1]==="<"){const i=t.slice(2,-1);return i==="!"||i==="!!"?(r(`Verbatim tags aren't resolved, so ${t} is invalid.`),null):(t[t.length-1]!==">"&&r("Verbatim tags must end with a >"),i)}const[,n,s]=t.match(/^(.*!)([^!]*)$/);s||r(`The ${t} tag has no suffix`);const a=this.tags[n];return a?a+decodeURIComponent(s):n==="!"?t:(r(`Could not resolve tag: ${t}`),null)}tagString(t){for(const[r,n]of Object.entries(this.tags))if(t.startsWith(n))return r+Rh(t.substring(n.length));return t[0]==="!"?t:`!<${t}>`}toString(t){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(t&&n.length>0&&_e(t.contents)){const a={};Yt(t.contents,(i,o)=>{_e(o)&&o.tag&&(a[o.tag]=!0)}),s=Object.keys(a)}else s=[];for(const[a,i]of n)a==="!!"&&i==="tag:yaml.org,2002:"||(!t||s.some(o=>o.startsWith(i)))&&r.push(`%TAG ${a} ${i}`);return r.join(`
`)}}Ve.defaultYaml={explicit:!1,version:"1.2"};Ve.defaultTags={"!!":"tag:yaml.org,2002:"};function lu(e){if(/[\x00-\x19\s,[\]{}]/.test(e)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;throw new Error(r)}return!0}function fu(e){const t=new Set;return Yt(e,{Value(r,n){n.anchor&&t.add(n.anchor)}}),t}function pu(e,t){for(let r=1;;++r){const n=`${e}${r}`;if(!t.has(n))return n}}function qh(e,t){const r=[],n=new Map;let s=null;return{onAnchor:a=>{r.push(a),s||(s=fu(e));const i=pu(t,s);return s.add(i),i},setAnchors:()=>{for(const a of r){const i=n.get(a);if(typeof i=="object"&&i.anchor&&(be(i.node)||ke(i.node)))i.node.anchor=i.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=a,o}}},sourceObjects:n}}class ha extends Eo{constructor(t){super(Oo),this.source=t,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(t){let r;return Yt(t,{Node:(n,s)=>{if(s===this)return Yt.BREAK;s.anchor===this.source&&(r=s)}}),r}toJSON(t,r){if(!r)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:a}=r,i=this.resolve(s);if(!i){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}const o=n.get(i);if(!o||o.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(a>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Vs(s,i,n)),o.count*o.aliasCount>a)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return o.res}toString(t,r,n){const s=`*${this.source}`;if(t){if(lu(this.source),t.options.verifyAliasOrder&&!t.anchors.has(this.source)){const a=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(a)}if(t.implicitKey)return`${s} `}return s}}function Vs(e,t,r){if(hr(t)){const n=t.resolve(e),s=r&&n&&r.get(n);return s?s.count*s.aliasCount:0}else if(ke(t)){let n=0;for(const s of t.items){const a=Vs(e,s,r);a>n&&(n=a)}return n}else if(Ee(t)){const n=Vs(e,t.key,r),s=Vs(e,t.value,r);return Math.max(n,s)}return 1}function xt(e,t,r){if(Array.isArray(e))return e.map((n,s)=>xt(n,String(s),r));if(e&&typeof e.toJSON=="function"){if(!r||!Nh(e))return e.toJSON(t,r);const n={aliasCount:0,count:1,res:void 0};r.anchors.set(e,n),r.onCreate=a=>{n.res=a,delete r.onCreate};const s=e.toJSON(t,r);return r.onCreate&&r.onCreate(s),s}return typeof e=="bigint"&&!(r!=null&&r.keep)?Number(e):e}const uu=e=>!e||typeof e!="function"&&typeof e!="object";class ee extends Eo{constructor(t){super(Dt),this.value=t}toJSON(t,r){return r!=null&&r.keep?this.value:xt(this.value,t,r)}toString(){return String(this.value)}}ee.BLOCK_FOLDED="BLOCK_FOLDED";ee.BLOCK_LITERAL="BLOCK_LITERAL";ee.PLAIN="PLAIN";ee.QUOTE_DOUBLE="QUOTE_DOUBLE";ee.QUOTE_SINGLE="QUOTE_SINGLE";const Dh="tag:yaml.org,2002:";function Lh(e,t,r){var n;if(t){const s=r.filter(i=>i.tag===t),a=(n=s.find(i=>!i.format))!=null?n:s[0];if(!a)throw new Error(`Tag ${t} not found`);return a}return r.find(s=>{var a;return((a=s.identify)==null?void 0:a.call(s,e))&&!s.format})}function zn(e,t,r){var h,d;if(ts(e)&&(e=e.contents),_e(e))return e;if(Ee(e)){const y=(d=(h=r.schema[Xt]).createNode)==null?void 0:d.call(h,r.schema,null,r);return y.items.push(e),y}(e instanceof String||e instanceof Number||e instanceof Boolean||typeof BigInt=="function"&&e instanceof BigInt)&&(e=e.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:a,schema:i,sourceObjects:o}=r;let c;if(n&&e&&typeof e=="object"){if(c=o.get(e),c)return c.anchor||(c.anchor=s(e)),new ha(c.anchor);c={anchor:null,node:null},o.set(e,c)}t!=null&&t.startsWith("!!")&&(t=Dh+t.slice(2));let l=Lh(e,t,i.tags);if(!l){if(e&&typeof e.toJSON=="function"&&(e=e.toJSON()),!e||typeof e!="object"){const y=new ee(e);return c&&(c.node=y),y}l=e instanceof Map?i[Xt]:Symbol.iterator in Object(e)?i[an]:i[Xt]}a&&(a(l),delete r.onTagObj);const f=l!=null&&l.createNode?l.createNode(r.schema,e,r):new ee(e);return t&&(f.tag=t),c&&(c.node=f),f}function sa(e,t,r){let n=r;for(let s=t.length-1;s>=0;--s){const a=t[s];if(typeof a=="number"&&Number.isInteger(a)&&a>=0){const i=[];i[a]=n,n=i}else n=new Map([[a,n]])}return zn(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:e,sourceObjects:new Map})}const Mn=e=>e==null||typeof e=="object"&&!!e[Symbol.iterator]().next().done;class ya extends Eo{constructor(t,r){super(t),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(t){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return t&&(r.schema=t),r.items=r.items.map(n=>_e(n)||Ee(n)?n.clone(t):n),this.range&&(r.range=this.range.slice()),r}addIn(t,r){if(Mn(t))this.add(r);else{const[n,...s]=t,a=this.get(n,!0);if(ke(a))a.addIn(s,r);else if(a===void 0&&this.schema)this.set(n,sa(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(t){const[r,...n]=t;if(n.length===0)return this.delete(r);const s=this.get(r,!0);if(ke(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}getIn(t,r){const[n,...s]=t,a=this.get(n,!0);return s.length===0?!r&&be(a)?a.value:a:ke(a)?a.getIn(s,r):void 0}hasAllNullValues(t){return this.items.every(r=>{if(!Ee(r))return!1;const n=r.value;return n==null||t&&be(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(t){const[r,...n]=t;if(n.length===0)return this.has(r);const s=this.get(r,!0);return ke(s)?s.hasIn(n):!1}setIn(t,r){const[n,...s]=t;if(s.length===0)this.set(n,r);else{const a=this.get(n,!0);if(ke(a))a.setIn(s,r);else if(a===void 0&&this.schema)this.set(n,sa(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}ya.maxFlowStringSingleLineLength=60;const Mh=e=>e.replace(/^(?!$)(?: $)?/gm,"#");function Tt(e,t){return/^\n+$/.test(e)?e.substring(1):t?e.replace(/^(?! *$)/gm,t):e}const zt=(e,t,r)=>e.endsWith(`
`)?Tt(r,t):r.includes(`
`)?`
`+Tt(r,t):(e.endsWith(" ")?"":" ")+r,mu="flow",zi="block",Bs="quoted";function $a(e,t,r="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:a=20,onFold:i,onOverflow:o}={}){if(!s||s<0)return e;const c=Math.max(1+a,1+s-t.length);if(e.length<=c)return e;const l=[],f={};let h=s-t.length;typeof n=="number"&&(n>s-Math.max(2,a)?l.push(0):h=s-n);let d,y,P=!1,u=-1,m=-1,v=-1;r===zi&&(u=al(e,u),u!==-1&&(h=u+c));for(let b;b=e[u+=1];){if(r===Bs&&b==="\\"){switch(m=u,e[u+1]){case"x":u+=3;break;case"u":u+=5;break;case"U":u+=9;break;default:u+=1}v=u}if(b===`
`)r===zi&&(u=al(e,u)),h=u+c,d=void 0;else{if(b===" "&&y&&y!==" "&&y!==`
`&&y!=="	"){const k=e[u+1];k&&k!==" "&&k!==`
`&&k!=="	"&&(d=u)}if(u>=h)if(d)l.push(d),h=d+c,d=void 0;else if(r===Bs){for(;y===" "||y==="	";)y=b,b=e[u+=1],P=!0;const k=u>v+1?u-2:m-1;if(f[k])return e;l.push(k),f[k]=!0,h=k+c,d=void 0}else P=!0}y=b}if(P&&o&&o(),l.length===0)return e;i&&i();let O=e.slice(0,l[0]);for(let b=0;b<l.length;++b){const k=l[b],S=l[b+1]||e.length;k===0?O=`
${t}${e.slice(0,S)}`:(r===Bs&&f[k]&&(O+=`${e[k]}\\`),O+=`
${t}${e.slice(k+1,S)}`)}return O}function al(e,t){let r=e[t+1];for(;r===" "||r==="	";){do r=e[t+=1];while(r&&r!==`
`);r=e[t+1]}return t}const ga=e=>({indentAtStart:e.indentAtStart,lineWidth:e.options.lineWidth,minContentWidth:e.options.minContentWidth}),va=e=>/^(%|---|\.\.\.)/m.test(e);function Uh(e,t,r){if(!t||t<0)return!1;const n=t-r,s=e.length;if(s<=n)return!1;for(let a=0,i=0;a<s;++a)if(e[a]===`
`){if(a-i>n)return!0;if(i=a+1,s-i<=n)return!1}return!0}function Bn(e,t){const r=JSON.stringify(e);if(t.options.doubleQuotedAsJSON)return r;const{implicitKey:n}=t,s=t.options.doubleQuotedMinMultiLineLength,a=t.indent||(va(e)?"  ":"");let i="",o=0;for(let c=0,l=r[c];l;l=r[++c])if(l===" "&&r[c+1]==="\\"&&r[c+2]==="n"&&(i+=r.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(r[c+1]){case"u":{i+=r.slice(o,c);const f=r.substr(c+2,4);switch(f){case"0000":i+="\\0";break;case"0007":i+="\\a";break;case"000b":i+="\\v";break;case"001b":i+="\\e";break;case"0085":i+="\\N";break;case"00a0":i+="\\_";break;case"2028":i+="\\L";break;case"2029":i+="\\P";break;default:f.substr(0,2)==="00"?i+="\\x"+f.substr(2):i+=r.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||r[c+2]==='"'||r.length<s)c+=1;else{for(i+=r.slice(o,c)+`

`;r[c+2]==="\\"&&r[c+3]==="n"&&r[c+4]!=='"';)i+=`
`,c+=2;i+=a,r[c+2]===" "&&(i+="\\"),c+=1,o=c+1}break;default:c+=1}return i=o?i+r.slice(o):r,n?i:$a(i,a,Bs,ga(t))}function Gi(e,t){if(t.options.singleQuote===!1||t.implicitKey&&e.includes(`
`)||/[ \t]\n|\n[ \t]/.test(e))return Bn(e,t);const r=t.indent||(va(e)?"  ":""),n="'"+e.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return t.implicitKey?n:$a(n,r,mu,ga(t))}function Fn(e,t){const{singleQuote:r}=t.options;let n;if(r===!1)n=Bn;else{const s=e.includes('"'),a=e.includes("'");s&&!a?n=Gi:a&&!s?n=Bn:n=r?Gi:Bn}return n(e,t)}function Fs({comment:e,type:t,value:r},n,s,a){const{blockQuote:i,commentString:o,lineWidth:c}=n.options;if(!i||/\n[\t ]+$/.test(r)||/^\s*$/.test(r))return Fn(r,n);const l=n.indent||(n.forceBlockIndent||va(r)?"  ":""),f=i==="literal"?!0:i==="folded"||t===ee.BLOCK_FOLDED?!1:t===ee.BLOCK_LITERAL?!0:!Uh(r,c,l.length);if(!r)return f?`|
`:`>
`;let h,d;for(d=r.length;d>0;--d){const x=r[d-1];if(x!==`
`&&x!=="	"&&x!==" ")break}let y=r.substring(d);const P=y.indexOf(`
`);P===-1?h="-":r===y||P!==y.length-1?(h="+",a&&a()):h="",y&&(r=r.slice(0,-y.length),y[y.length-1]===`
`&&(y=y.slice(0,-1)),y=y.replace(/\n+(?!\n|$)/g,`$&${l}`));let u=!1,m,v=-1;for(m=0;m<r.length;++m){const x=r[m];if(x===" ")u=!0;else if(x===`
`)v=m;else break}let O=r.substring(0,v<m?v+1:m);O&&(r=r.substring(O.length),O=O.replace(/\n+/g,`$&${l}`));let k=(f?"|":">")+(u?l?"2":"1":"")+h;if(e&&(k+=" "+o(e.replace(/ ?[\r\n]+/g," ")),s&&s()),f)return r=r.replace(/\n+/g,`$&${l}`),`${k}
${l}${O}${r}${y}`;r=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);const S=$a(`${O}${r}${y}`,l,zi,ga(n));return`${k}
${l}${S}`}function Vh(e,t,r,n){const{type:s,value:a}=e,{actualString:i,implicitKey:o,indent:c,inFlow:l}=t;if(o&&/[\n[\]{},]/.test(a)||l&&/[[\]{},]/.test(a))return Fn(a,t);if(!a||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a))return o||l||!a.includes(`
`)?Fn(a,t):Fs(e,t,r,n);if(!o&&!l&&s!==ee.PLAIN&&a.includes(`
`))return Fs(e,t,r,n);if(c===""&&va(a))return t.forceBlockIndent=!0,Fs(e,t,r,n);const f=a.replace(/\n+/g,`$&
${c}`);if(i){const h=P=>{var u;return P.default&&P.tag!=="tag:yaml.org,2002:str"&&((u=P.test)==null?void 0:u.test(f))},{compat:d,tags:y}=t.doc.schema;if(y.some(h)||(d==null?void 0:d.some(h)))return Fn(a,t)}return o?f:$a(f,c,mu,ga(t))}function rs(e,t,r,n){const{implicitKey:s,inFlow:a}=t,i=typeof e.value=="string"?e:Object.assign({},e,{value:String(e.value)});let{type:o}=e;o!==ee.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(i.value)&&(o=ee.QUOTE_DOUBLE);const c=f=>{switch(f){case ee.BLOCK_FOLDED:case ee.BLOCK_LITERAL:return s||a?Fn(i.value,t):Fs(i,t,r,n);case ee.QUOTE_DOUBLE:return Bn(i.value,t);case ee.QUOTE_SINGLE:return Gi(i.value,t);case ee.PLAIN:return Vh(i,t,r,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:f,defaultStringType:h}=t.options,d=s&&f||h;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function du(e,t){const r=Object.assign({blockQuote:!0,commentString:Mh,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},e.schema.toStringOptions,t);let n;switch(r.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:e,indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:n,options:r}}function Bh(e,t){var s,a,i,o;if(t.tag){const c=e.filter(l=>l.tag===t.tag);if(c.length>0)return(s=c.find(l=>l.format===t.format))!=null?s:c[0]}let r,n;if(be(t)){n=t.value;const c=e.filter(l=>{var f;return(f=l.identify)==null?void 0:f.call(l,n)});r=(a=c.find(l=>l.format===t.format))!=null?a:c.find(l=>!l.format)}else n=t,r=e.find(c=>c.nodeClass&&n instanceof c.nodeClass);if(!r){const c=(o=(i=n==null?void 0:n.constructor)==null?void 0:i.name)!=null?o:typeof n;throw new Error(`Tag not resolved for ${c} value`)}return r}function Fh(e,t,{anchors:r,doc:n}){if(!n.directives)return"";const s=[],a=(be(e)||ke(e))&&e.anchor;a&&lu(a)&&(r.add(a),s.push(`&${a}`));const i=e.tag?e.tag:t.default?null:t.tag;return i&&s.push(n.directives.tagString(i)),s.join(" ")}function ur(e,t,r,n){var c,l;if(Ee(e))return e.toString(t,r,n);if(hr(e)){if(t.doc.directives)return e.toString(t);if((c=t.resolvedAliases)!=null&&c.has(e))throw new TypeError("Cannot stringify circular structure without alias nodes");t.resolvedAliases?t.resolvedAliases.add(e):t.resolvedAliases=new Set([e]),e=e.resolve(t.doc)}let s;const a=_e(e)?e:t.doc.createNode(e,{onTagObj:f=>s=f});s||(s=Bh(t.doc.schema.tags,a));const i=Fh(a,s,t);i.length>0&&(t.indentAtStart=((l=t.indentAtStart)!=null?l:0)+i.length+1);const o=typeof s.stringify=="function"?s.stringify(a,t,r,n):be(a)?rs(a,t,r,n):a.toString(t,r,n);return i?be(a)||o[0]==="{"||o[0]==="["?`${i} ${o}`:`${i}
${t.indent}${o}`:o}function Kh({key:e,value:t},r,n,s){const{allNullValues:a,doc:i,indent:o,indentStep:c,options:{commentString:l,indentSeq:f,simpleKeys:h}}=r;let d=_e(e)&&e.comment||null;if(h){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(ke(e)){const x="With simple keys, collection cannot be used as a key value";throw new Error(x)}}let y=!h&&(!e||d&&t==null&&!r.inFlow||ke(e)||(be(e)?e.type===ee.BLOCK_FOLDED||e.type===ee.BLOCK_LITERAL:typeof e=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!y&&(h||!a),indent:o+c});let P=!1,u=!1,m=ur(e,r,()=>P=!0,()=>u=!0);if(!y&&!r.inFlow&&m.length>1024){if(h)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");y=!0}if(r.inFlow){if(a||t==null)return P&&n&&n(),m===""?"?":y?`? ${m}`:m}else if(a&&!h||t==null&&y)return m=`? ${m}`,d&&!P?m+=zt(m,r.indent,l(d)):u&&s&&s(),m;P&&(d=null),y?(d&&(m+=zt(m,r.indent,l(d))),m=`? ${m}
${o}:`):(m=`${m}:`,d&&(m+=zt(m,r.indent,l(d))));let v="",O=null;if(_e(t)){if(t.spaceBefore&&(v=`
`),t.commentBefore){const x=l(t.commentBefore);v+=`
${Tt(x,r.indent)}`}O=t.comment}else t&&typeof t=="object"&&(t=i.createNode(t));r.implicitKey=!1,!y&&!d&&be(t)&&(r.indentAtStart=m.length+1),u=!1,!f&&c.length>=2&&!r.inFlow&&!y&&on(t)&&!t.flow&&!t.tag&&!t.anchor&&(r.indent=r.indent.substr(2));let b=!1;const k=ur(t,r,()=>b=!0,()=>u=!0);let S=" ";return v||d?k===""&&!r.inFlow?S=v===`
`?`

`:v:S=`${v}
${r.indent}`:!y&&ke(t)?(!(k[0]==="["||k[0]==="{")||k.includes(`
`))&&(S=`
${r.indent}`):(k===""||k[0]===`
`)&&(S=""),m+=S+k,r.inFlow?b&&n&&n():O&&!b?m+=zt(m,r.indent,l(O)):u&&s&&s(),m}function hu(e,t){(e==="debug"||e==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(t):console.warn(t))}const il="<<";function yu(e,t,{key:r,value:n}){if((e==null?void 0:e.doc.schema.merge)&&Jh(r))if(n=hr(n)?n.resolve(e.doc):n,on(n))for(const s of n.items)Ya(e,t,s);else if(Array.isArray(n))for(const s of n)Ya(e,t,s);else Ya(e,t,n);else{const s=xt(r,"",e);if(t instanceof Map)t.set(s,xt(n,s,e));else if(t instanceof Set)t.add(s);else{const a=zh(r,s,e),i=xt(n,a,e);a in t?Object.defineProperty(t,a,{value:i,writable:!0,enumerable:!0,configurable:!0}):t[a]=i}}return t}const Jh=e=>e===il||be(e)&&e.value===il&&(!e.type||e.type===ee.PLAIN);function Ya(e,t,r){const n=e&&hr(r)?r.resolve(e.doc):r;if(!yr(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,e,Map);for(const[a,i]of s)t instanceof Map?t.has(a)||t.set(a,i):t instanceof Set?t.add(a):Object.prototype.hasOwnProperty.call(t,a)||Object.defineProperty(t,a,{value:i,writable:!0,enumerable:!0,configurable:!0});return t}function zh(e,t,r){if(t===null)return"";if(typeof t!="object")return String(t);if(_e(e)&&r&&r.doc){const n=du(r.doc,{});n.anchors=new Set;for(const a of r.anchors.keys())n.anchors.add(a.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=e.toString(n);if(!r.mapKeyWarned){let a=JSON.stringify(s);a.length>40&&(a=a.substring(0,36)+'..."'),hu(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${a}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return s}return JSON.stringify(t)}function Po(e,t,r){const n=zn(e,void 0,r),s=zn(t,void 0,r);return new Ue(n,s)}class Ue{constructor(t,r=null){Object.defineProperty(this,st,{value:su}),this.key=t,this.value=r}clone(t){let{key:r,value:n}=this;return _e(r)&&(r=r.clone(t)),_e(n)&&(n=n.clone(t)),new Ue(r,n)}toJSON(t,r){const n=r!=null&&r.mapAsMap?new Map:{};return yu(r,n,this)}toString(t,r,n){return t!=null&&t.doc?Kh(this,t,r,n):JSON.stringify(this)}}function $u(e,t,r){var a;return(((a=t.inFlow)!=null?a:e.flow)?Hh:Gh)(e,t,r)}function Gh({comment:e,items:t},r,{blockItemPrefix:n,flowChars:s,itemIndent:a,onChompKeep:i,onComment:o}){const{indent:c,options:{commentString:l}}=r,f=Object.assign({},r,{indent:a,type:null});let h=!1;const d=[];for(let P=0;P<t.length;++P){const u=t[P];let m=null;if(_e(u))!h&&u.spaceBefore&&d.push(""),aa(r,d,u.commentBefore,h),u.comment&&(m=u.comment);else if(Ee(u)){const O=_e(u.key)?u.key:null;O&&(!h&&O.spaceBefore&&d.push(""),aa(r,d,O.commentBefore,h))}h=!1;let v=ur(u,f,()=>m=null,()=>h=!0);m&&(v+=zt(v,a,l(m))),h&&m&&(h=!1),d.push(n+v)}let y;if(d.length===0)y=s.start+s.end;else{y=d[0];for(let P=1;P<d.length;++P){const u=d[P];y+=u?`
${c}${u}`:`
`}}return e?(y+=`
`+Tt(l(e),c),o&&o()):h&&i&&i(),y}function Hh({comment:e,items:t},r,{flowChars:n,itemIndent:s,onComment:a}){const{indent:i,indentStep:o,options:{commentString:c}}=r;s+=o;const l=Object.assign({},r,{indent:s,inFlow:!0,type:null});let f=!1,h=0;const d=[];for(let m=0;m<t.length;++m){const v=t[m];let O=null;if(_e(v))v.spaceBefore&&d.push(""),aa(r,d,v.commentBefore,!1),v.comment&&(O=v.comment);else if(Ee(v)){const k=_e(v.key)?v.key:null;k&&(k.spaceBefore&&d.push(""),aa(r,d,k.commentBefore,!1),k.comment&&(f=!0));const S=_e(v.value)?v.value:null;S?(S.comment&&(O=S.comment),S.commentBefore&&(f=!0)):v.value==null&&k&&k.comment&&(O=k.comment)}O&&(f=!0);let b=ur(v,l,()=>O=null);m<t.length-1&&(b+=","),O&&(b+=zt(b,s,c(O))),!f&&(d.length>h||b.includes(`
`))&&(f=!0),d.push(b),h=d.length}let y;const{start:P,end:u}=n;if(d.length===0)y=P+u;else if(f||(f=d.reduce((v,O)=>v+O.length+2,2)>ya.maxFlowStringSingleLineLength),f){y=P;for(const m of d)y+=m?`
${o}${i}${m}`:`
`;y+=`
${i}${u}`}else y=`${P} ${d.join(" ")} ${u}`;return e&&(y+=zt(y,c(e),i),a&&a()),y}function aa({indent:e,options:{commentString:t}},r,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const a=Tt(t(n),e);r.push(a.trimStart())}}function ir(e,t){const r=be(t)?t.value:t;for(const n of e)if(Ee(n)&&(n.key===t||n.key===r||be(n.key)&&n.key.value===r))return n}class nt extends ya{constructor(t){super(Xt,t),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(t,r){var i;let n;Ee(t)?n=t:!t||typeof t!="object"||!("key"in t)?n=new Ue(t,t==null?void 0:t.value):n=new Ue(t.key,t.value);const s=ir(this.items,n.key),a=(i=this.schema)==null?void 0:i.sortMapEntries;if(s){if(!r)throw new Error(`Key ${n.key} already set`);be(s.value)&&uu(n.value)?s.value.value=n.value:s.value=n.value}else if(a){const o=this.items.findIndex(c=>a(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(t){const r=ir(this.items,t);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(t,r){var a;const n=ir(this.items,t),s=n==null?void 0:n.value;return(a=!r&&be(s)?s.value:s)!=null?a:void 0}has(t){return!!ir(this.items,t)}set(t,r){this.add(new Ue(t,r),!0)}toJSON(t,r,n){const s=n?new n:r!=null&&r.mapAsMap?new Map:{};r!=null&&r.onCreate&&r.onCreate(s);for(const a of this.items)yu(r,s,a);return s}toString(t,r,n){if(!t)return JSON.stringify(this);for(const s of this.items)if(!Ee(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!t.allNullValues&&this.hasAllNullValues(!1)&&(t=Object.assign({},t,{allNullValues:!0})),$u(this,t,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:t.indent||"",onChompKeep:n,onComment:r})}}function Xh(e,t,r){const{keepUndefined:n,replacer:s}=r,a=new nt(e),i=(o,c)=>{if(typeof s=="function")c=s.call(t,o,c);else if(Array.isArray(s)&&!s.includes(o))return;(c!==void 0||n)&&a.items.push(Po(o,c,r))};if(t instanceof Map)for(const[o,c]of t)i(o,c);else if(t&&typeof t=="object")for(const o of Object.keys(t))i(o,t[o]);return typeof e.sortMapEntries=="function"&&a.items.sort(e.sortMapEntries),a}const cn={collection:"map",createNode:Xh,default:!0,nodeClass:nt,tag:"tag:yaml.org,2002:map",resolve(e,t){return yr(e)||t("Expected a mapping for this tag"),e}};class $r extends ya{constructor(t){super(an,t),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(t){this.items.push(t)}delete(t){const r=As(t);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(t,r){const n=As(t);if(typeof n!="number")return;const s=this.items[n];return!r&&be(s)?s.value:s}has(t){const r=As(t);return typeof r=="number"&&r<this.items.length}set(t,r){const n=As(t);if(typeof n!="number")throw new Error(`Expected a valid index, not ${t}.`);const s=this.items[n];be(s)&&uu(r)?s.value=r:this.items[n]=r}toJSON(t,r){const n=[];r!=null&&r.onCreate&&r.onCreate(n);let s=0;for(const a of this.items)n.push(xt(a,String(s++),r));return n}toString(t,r,n){return t?$u(this,t,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(t.indent||"")+"  ",onChompKeep:n,onComment:r}):JSON.stringify(this)}}function As(e){let t=be(e)?e.value:e;return t&&typeof t=="string"&&(t=Number(t)),typeof t=="number"&&Number.isInteger(t)&&t>=0?t:null}function Wh(e,t,r){const{replacer:n}=r,s=new $r(e);if(t&&Symbol.iterator in Object(t)){let a=0;for(let i of t){if(typeof n=="function"){const o=t instanceof Set?i:String(a++);i=n.call(t,o,i)}s.items.push(zn(i,void 0,r))}}return s}const ln={collection:"seq",createNode:Wh,default:!0,nodeClass:$r,tag:"tag:yaml.org,2002:seq",resolve(e,t){return on(e)||t("Expected a sequence for this tag"),e}},ba={identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify(e,t,r,n){return t=Object.assign({actualString:!0},t),rs(e,t,r,n)}},Sa={identify:e=>e==null,createNode:()=>new ee(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new ee(null),stringify:({source:e},t)=>typeof e=="string"&&Sa.test.test(e)?e:t.options.nullStr},jo={identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:e=>new ee(e[0]==="t"||e[0]==="T"),stringify({source:e,value:t},r){if(e&&jo.test.test(e)){const n=e[0]==="t"||e[0]==="T";if(t===n)return e}return t?r.options.trueStr:r.options.falseStr}};function yt({format:e,minFractionDigits:t,tag:r,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let a=JSON.stringify(n);if(!e&&t&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(a)){let i=a.indexOf(".");i<0&&(i=a.length,a+=".");let o=t-(a.length-i-1);for(;o-- >0;)a+="0"}return a}const gu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:yt},vu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():yt(e)}},bu={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(e){const t=new ee(parseFloat(e)),r=e.indexOf(".");return r!==-1&&e[e.length-1]==="0"&&(t.minFractionDigits=e.length-r-1),t},stringify:yt},Ia=e=>typeof e=="bigint"||Number.isInteger(e),ko=(e,t,r,{intAsBigInt:n})=>n?BigInt(e):parseInt(e.substring(t),r);function Su(e,t,r){const{value:n}=e;return Ia(n)&&n>=0?r+n.toString(t):yt(e)}const Iu={identify:e=>Ia(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(e,t,r)=>ko(e,2,8,r),stringify:e=>Su(e,8,"0o")},wu={identify:Ia,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(e,t,r)=>ko(e,0,10,r),stringify:yt},Ou={identify:e=>Ia(e)&&e>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(e,t,r)=>ko(e,2,16,r),stringify:e=>Su(e,16,"0x")},Yh=[cn,ln,ba,Sa,jo,Iu,wu,Ou,gu,vu,bu];function ol(e){return typeof e=="bigint"||Number.isInteger(e)}const Cs=({value:e})=>JSON.stringify(e),Qh=[{identify:e=>typeof e=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:e=>e,stringify:Cs},{identify:e=>e==null,createNode:()=>new ee(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Cs},{identify:e=>typeof e=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:e=>e==="true",stringify:Cs},{identify:ol,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(e,t,{intAsBigInt:r})=>r?BigInt(e):parseInt(e,10),stringify:({value:e})=>ol(e)?e.toString():JSON.stringify(e)},{identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:e=>parseFloat(e),stringify:Cs}],Zh={default:!0,tag:"",test:/^/,resolve(e,t){return t(`Unresolved plain scalar ${JSON.stringify(e)}`),e}},ey=[cn,ln].concat(Qh,Zh),xo={identify:e=>e instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(e,t){if(typeof Buffer=="function")return Buffer.from(e,"base64");if(typeof atob=="function"){const r=atob(e.replace(/[\n\r]/g,"")),n=new Uint8Array(r.length);for(let s=0;s<r.length;++s)n[s]=r.charCodeAt(s);return n}else return t("This environment does not support reading binary tags; either Buffer or atob is required"),e},stringify({comment:e,type:t,value:r},n,s,a){const i=r;let o;if(typeof Buffer=="function")o=i instanceof Buffer?i.toString("base64"):Buffer.from(i.buffer).toString("base64");else if(typeof btoa=="function"){let c="";for(let l=0;l<i.length;++l)c+=String.fromCharCode(i[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(t||(t=ee.BLOCK_LITERAL),t!==ee.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),f=new Array(l);for(let h=0,d=0;h<l;++h,d+=c)f[h]=o.substr(d,c);o=f.join(t===ee.BLOCK_LITERAL?`
`:" ")}return rs({comment:e,type:t,value:o},n,s,a)}};function Eu(e,t){var r;if(on(e))for(let n=0;n<e.items.length;++n){let s=e.items[n];if(!Ee(s)){if(yr(s)){s.items.length>1&&t("Each pair must have its own sequence indicator");const a=s.items[0]||new Ue(new ee(null));if(s.commentBefore&&(a.key.commentBefore=a.key.commentBefore?`${s.commentBefore}
${a.key.commentBefore}`:s.commentBefore),s.comment){const i=(r=a.value)!=null?r:a.key;i.comment=i.comment?`${s.comment}
${i.comment}`:s.comment}s=a}e.items[n]=Ee(s)?s:new Ue(s)}}else t("Expected a sequence for this tag");return e}function Pu(e,t,r){const{replacer:n}=r,s=new $r(e);s.tag="tag:yaml.org,2002:pairs";let a=0;if(t&&Symbol.iterator in Object(t))for(let i of t){typeof n=="function"&&(i=n.call(t,String(a++),i));let o,c;if(Array.isArray(i))if(i.length===2)o=i[0],c=i[1];else throw new TypeError(`Expected [key, value] tuple: ${i}`);else if(i&&i instanceof Object){const l=Object.keys(i);if(l.length===1)o=l[0],c=i[o];else throw new TypeError(`Expected { key: value } tuple: ${i}`)}else o=i;s.items.push(Po(o,c,r))}return s}const Ao={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Eu,createNode:Pu};class Gr extends $r{constructor(){super(),this.add=nt.prototype.add.bind(this),this.delete=nt.prototype.delete.bind(this),this.get=nt.prototype.get.bind(this),this.has=nt.prototype.has.bind(this),this.set=nt.prototype.set.bind(this),this.tag=Gr.tag}toJSON(t,r){if(!r)return super.toJSON(t);const n=new Map;r!=null&&r.onCreate&&r.onCreate(n);for(const s of this.items){let a,i;if(Ee(s)?(a=xt(s.key,"",r),i=xt(s.value,a,r)):a=xt(s,"",r),n.has(a))throw new Error("Ordered maps must not include duplicate keys");n.set(a,i)}return n}}Gr.tag="tag:yaml.org,2002:omap";const Co={collection:"seq",identify:e=>e instanceof Map,nodeClass:Gr,default:!1,tag:"tag:yaml.org,2002:omap",resolve(e,t){const r=Eu(e,t),n=[];for(const{key:s}of r.items)be(s)&&(n.includes(s.value)?t(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Gr,r)},createNode(e,t,r){const n=Pu(e,t,r),s=new Gr;return s.items=n.items,s}};function ju({value:e,source:t},r){return t&&(e?ku:xu).test.test(t)?t:e?r.options.trueStr:r.options.falseStr}const ku={identify:e=>e===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new ee(!0),stringify:ju},xu={identify:e=>e===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new ee(!1),stringify:ju},ty={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:e=>e.slice(-3).toLowerCase()==="nan"?NaN:e[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:yt},ry={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:e=>parseFloat(e.replace(/_/g,"")),stringify(e){const t=Number(e.value);return isFinite(t)?t.toExponential():yt(e)}},ny={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(e){const t=new ee(parseFloat(e.replace(/_/g,""))),r=e.indexOf(".");if(r!==-1){const n=e.substring(r+1).replace(/_/g,"");n[n.length-1]==="0"&&(t.minFractionDigits=n.length)}return t},stringify:yt},ns=e=>typeof e=="bigint"||Number.isInteger(e);function wa(e,t,r,{intAsBigInt:n}){const s=e[0];if((s==="-"||s==="+")&&(t+=1),e=e.substring(t).replace(/_/g,""),n){switch(r){case 2:e=`0b${e}`;break;case 8:e=`0o${e}`;break;case 16:e=`0x${e}`;break}const i=BigInt(e);return s==="-"?BigInt(-1)*i:i}const a=parseInt(e,r);return s==="-"?-1*a:a}function _o(e,t,r){const{value:n}=e;if(ns(n)){const s=n.toString(t);return n<0?"-"+r+s.substr(1):r+s}return yt(e)}const sy={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(e,t,r)=>wa(e,2,2,r),stringify:e=>_o(e,2,"0b")},ay={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(e,t,r)=>wa(e,1,8,r),stringify:e=>_o(e,8,"0")},iy={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(e,t,r)=>wa(e,0,10,r),stringify:yt},oy={identify:ns,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(e,t,r)=>wa(e,2,16,r),stringify:e=>_o(e,16,"0x")};class Hr extends nt{constructor(t){super(t),this.tag=Hr.tag}add(t){let r;Ee(t)?r=t:typeof t=="object"&&"key"in t&&"value"in t&&t.value===null?r=new Ue(t.key,null):r=new Ue(t,null),ir(this.items,r.key)||this.items.push(r)}get(t,r){const n=ir(this.items,t);return!r&&Ee(n)?be(n.key)?n.key.value:n.key:n}set(t,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const n=ir(this.items,t);n&&!r?this.items.splice(this.items.indexOf(n),1):!n&&r&&this.items.push(new Ue(t))}toJSON(t,r){return super.toJSON(t,r,Set)}toString(t,r,n){if(!t)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},t,{allNullValues:!0}),r,n);throw new Error("Set items must all have null values")}}Hr.tag="tag:yaml.org,2002:set";const No={collection:"map",identify:e=>e instanceof Set,nodeClass:Hr,default:!1,tag:"tag:yaml.org,2002:set",resolve(e,t){if(yr(e)){if(e.hasAllNullValues(!0))return Object.assign(new Hr,e);t("Set items must all have null values")}else t("Expected a mapping for this tag");return e},createNode(e,t,r){const{replacer:n}=r,s=new Hr(e);if(t&&Symbol.iterator in Object(t))for(let a of t)typeof n=="function"&&(a=n.call(t,a,a)),s.items.push(Po(a,null,r));return s}};function To(e,t){const r=e[0],n=r==="-"||r==="+"?e.substring(1):e,s=i=>t?BigInt(i):Number(i),a=n.replace(/_/g,"").split(":").reduce((i,o)=>i*s(60)+s(o),s(0));return r==="-"?s(-1)*a:a}function Au(e){let{value:t}=e,r=i=>i;if(typeof t=="bigint")r=i=>BigInt(i);else if(isNaN(t)||!isFinite(t))return yt(e);let n="";t<0&&(n="-",t*=r(-1));const s=r(60),a=[t%s];return t<60?a.unshift(0):(t=(t-a[0])/s,a.unshift(t%s),t>=60&&(t=(t-a[0])/s,a.unshift(t))),n+a.map(i=>i<10?"0"+String(i):String(i)).join(":").replace(/000000\d*$/,"")}const Cu={identify:e=>typeof e=="bigint"||Number.isInteger(e),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(e,t,{intAsBigInt:r})=>To(e,r),stringify:Au},_u={identify:e=>typeof e=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:e=>To(e,!1),stringify:Au},Oa={identify:e=>e instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(e){const t=e.match(Oa.test);if(!t)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,n,s,a,i,o]=t.map(Number),c=t[7]?Number((t[7]+"00").substr(1,3)):0;let l=Date.UTC(r,n-1,s,a||0,i||0,o||0,c);const f=t[8];if(f&&f!=="Z"){let h=To(f,!1);Math.abs(h)<30&&(h*=60),l-=6e4*h}return new Date(l)},stringify:({value:e})=>e.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},cl=[cn,ln,ba,Sa,ku,xu,sy,ay,iy,oy,ty,ry,ny,xo,Co,Ao,No,Cu,_u,Oa],ll=new Map([["core",Yh],["failsafe",[cn,ln,ba]],["json",ey],["yaml11",cl],["yaml-1.1",cl]]),fl={binary:xo,bool:jo,float:bu,floatExp:vu,floatNaN:gu,floatTime:_u,int:wu,intHex:Ou,intOct:Iu,intTime:Cu,map:cn,null:Sa,omap:Co,pairs:Ao,seq:ln,set:No,timestamp:Oa},cy={"tag:yaml.org,2002:binary":xo,"tag:yaml.org,2002:omap":Co,"tag:yaml.org,2002:pairs":Ao,"tag:yaml.org,2002:set":No,"tag:yaml.org,2002:timestamp":Oa};function Qa(e,t){let r=ll.get(t);if(!r)if(Array.isArray(e))r=[];else{const n=Array.from(ll.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${t}"; use one of ${n} or define customTags array`)}if(Array.isArray(e))for(const n of e)r=r.concat(n);else typeof e=="function"&&(r=e(r.slice()));return r.map(n=>{if(typeof n!="string")return n;const s=fl[n];if(s)return s;const a=Object.keys(fl).map(i=>JSON.stringify(i)).join(", ");throw new Error(`Unknown custom tag "${n}"; use one of ${a}`)})}const ly=(e,t)=>e.key<t.key?-1:e.key>t.key?1:0;class Ea{constructor({compat:t,customTags:r,merge:n,resolveKnownTags:s,schema:a,sortMapEntries:i,toStringDefaults:o}){this.compat=Array.isArray(t)?Qa(t,"compat"):t?Qa(null,t):null,this.merge=!!n,this.name=typeof a=="string"&&a||"core",this.knownTags=s?cy:{},this.tags=Qa(r,this.name),this.toStringOptions=o!=null?o:null,Object.defineProperty(this,Xt,{value:cn}),Object.defineProperty(this,Dt,{value:ba}),Object.defineProperty(this,an,{value:ln}),this.sortMapEntries=typeof i=="function"?i:i===!0?ly:null}clone(){const t=Object.create(Ea.prototype,Object.getOwnPropertyDescriptors(this));return t.tags=this.tags.slice(),t}}function fy(e,t){var c;const r=[];let n=t.directives===!0;if(t.directives!==!1&&e.directives){const l=e.directives.toString(e);l?(r.push(l),n=!0):e.directives.docStart&&(n=!0)}n&&r.push("---");const s=du(e,t),{commentString:a}=s.options;if(e.commentBefore){r.length!==1&&r.unshift("");const l=a(e.commentBefore);r.unshift(Tt(l,""))}let i=!1,o=null;if(e.contents){if(_e(e.contents)){if(e.contents.spaceBefore&&n&&r.push(""),e.contents.commentBefore){const h=a(e.contents.commentBefore);r.push(Tt(h,""))}s.forceBlockIndent=!!e.comment,o=e.contents.comment}const l=o?void 0:()=>i=!0;let f=ur(e.contents,s,()=>o=null,l);o&&(f+=zt(f,"",a(o))),(f[0]==="|"||f[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${f}`:r.push(f)}else r.push(ur(e.contents,s));if((c=e.directives)!=null&&c.docEnd)if(e.comment){const l=a(e.comment);l.includes(`
`)?(r.push("..."),r.push(Tt(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=e.comment;l&&i&&(l=l.replace(/^\n+/,"")),l&&((!i||o)&&r[r.length-1]!==""&&r.push(""),r.push(Tt(a(l),"")))}return r.join(`
`)+`
`}function Un(e,t,r,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,a=n.length;s<a;++s){const i=n[s],o=Un(e,n,String(s),i);o===void 0?delete n[s]:o!==i&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const a=n.get(s),i=Un(e,n,s,a);i===void 0?n.delete(s):i!==a&&n.set(s,i)}else if(n instanceof Set)for(const s of Array.from(n)){const a=Un(e,n,s,s);a===void 0?n.delete(s):a!==s&&(n.delete(s),n.add(a))}else for(const[s,a]of Object.entries(n)){const i=Un(e,n,s,a);i===void 0?delete n[s]:i!==a&&(n[s]=i)}return e.call(t,r,n)}class fn{constructor(t,r,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,st,{value:Ji});let s=null;typeof r=="function"||Array.isArray(r)?s=r:n===void 0&&r&&(n=r,r=void 0);const a=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,uniqueKeys:!0,version:"1.2"},n);this.options=a;let{version:i}=a;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(i=this.directives.yaml.version)):this.directives=new Ve({version:i}),this.setSchema(i,n),t===void 0?this.contents=null:this.contents=this.createNode(t,s,n)}clone(){const t=Object.create(fn.prototype,{[st]:{value:Ji}});return t.commentBefore=this.commentBefore,t.comment=this.comment,t.errors=this.errors.slice(),t.warnings=this.warnings.slice(),t.options=Object.assign({},this.options),this.directives&&(t.directives=this.directives.clone()),t.schema=this.schema.clone(),t.contents=_e(this.contents)?this.contents.clone(t.schema):this.contents,this.range&&(t.range=this.range.slice()),t}add(t){kr(this.contents)&&this.contents.add(t)}addIn(t,r){kr(this.contents)&&this.contents.addIn(t,r)}createAlias(t,r){if(!t.anchor){const n=fu(this);t.anchor=!r||n.has(r)?pu(r||"a",n):r}return new ha(t.anchor)}createNode(t,r,n){let s;if(typeof r=="function")t=r.call({"":t},"",t),s=r;else if(Array.isArray(r)){const m=O=>typeof O=="number"||O instanceof String||O instanceof Number,v=r.filter(m).map(String);v.length>0&&(r=r.concat(v)),s=r}else n===void 0&&r&&(n=r,r=void 0);const{aliasDuplicateObjects:a,anchorPrefix:i,flow:o,keepUndefined:c,onTagObj:l,tag:f}=n!=null?n:{},{onAnchor:h,setAnchors:d,sourceObjects:y}=qh(this,i||"a"),P={aliasDuplicateObjects:a!=null?a:!0,keepUndefined:c!=null?c:!1,onAnchor:h,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:y},u=zn(t,f,P);return o&&ke(u)&&(u.flow=!0),d(),u}createPair(t,r,n={}){const s=this.createNode(t,null,n),a=this.createNode(r,null,n);return new Ue(s,a)}delete(t){return kr(this.contents)?this.contents.delete(t):!1}deleteIn(t){return Mn(t)?this.contents==null?!1:(this.contents=null,!0):kr(this.contents)?this.contents.deleteIn(t):!1}get(t,r){return ke(this.contents)?this.contents.get(t,r):void 0}getIn(t,r){return Mn(t)?!r&&be(this.contents)?this.contents.value:this.contents:ke(this.contents)?this.contents.getIn(t,r):void 0}has(t){return ke(this.contents)?this.contents.has(t):!1}hasIn(t){return Mn(t)?this.contents!==void 0:ke(this.contents)?this.contents.hasIn(t):!1}set(t,r){this.contents==null?this.contents=sa(this.schema,[t],r):kr(this.contents)&&this.contents.set(t,r)}setIn(t,r){Mn(t)?this.contents=r:this.contents==null?this.contents=sa(this.schema,Array.from(t),r):kr(this.contents)&&this.contents.setIn(t,r)}setSchema(t,r={}){typeof t=="number"&&(t=String(t));let n;switch(t){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Ve({version:"1.1"}),n={merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=t:this.directives=new Ve({version:t}),n={merge:!1,resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(t);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(n)this.schema=new Ea(Object.assign(n,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:t,jsonArg:r,mapAsMap:n,maxAliasCount:s,onAnchor:a,reviver:i}={}){const o={anchors:new Map,doc:this,keep:!t,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100,stringify:ur},c=xt(this.contents,r!=null?r:"",o);if(typeof a=="function")for(const{count:l,res:f}of o.anchors.values())a(f,l);return typeof i=="function"?Un(i,{"":c},"",c):c}toJSON(t,r){return this.toJS({json:!0,jsonArg:t,mapAsMap:!1,onAnchor:r})}toString(t={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in t&&(!Number.isInteger(t.indent)||Number(t.indent)<=0)){const r=JSON.stringify(t.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return fy(this,t)}}function kr(e){if(ke(e))return!0;throw new Error("Expected a YAML collection as document contents")}class Ro extends Error{constructor(t,r,n,s){super(),this.name=t,this.code=n,this.message=s,this.pos=r}}class or extends Ro{constructor(t,r,n){super("YAMLParseError",t,r,n)}}class Nu extends Ro{constructor(t,r,n){super("YAMLWarning",t,r,n)}}const ia=(e,t)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(o=>t.linePos(o));const{line:n,col:s}=r.linePos[0];r.message+=` at line ${n}, column ${s}`;let a=s-1,i=e.substring(t.lineStarts[n-1],t.lineStarts[n]).replace(/[\n\r]+$/,"");if(a>=60&&i.length>80){const o=Math.min(a-39,i.length-79);i="\u2026"+i.substring(o),a-=o-1}if(i.length>80&&(i=i.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(i.substring(0,a))){let o=e.substring(t.lineStarts[n-2],t.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`\u2026
`),i=o+i}if(/[^ ]/.test(i)){let o=1;const c=r.linePos[1];c&&c.line===n&&c.col>s&&(o=Math.min(c.col-s,80-a));const l=" ".repeat(a)+"^".repeat(o);r.message+=`:

${i}
${l}
`}};function Yr(e,{flow:t,indicator:r,next:n,offset:s,onError:a,startOnNewline:i}){let o=!1,c=i,l=i,f="",h="",d=!1,y=!1,P=!1,u=null,m=null,v=null,O=null,b=null;for(const x of e)switch(P&&(x.type!=="space"&&x.type!=="newline"&&x.type!=="comma"&&a(x.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),P=!1),x.type){case"space":!t&&c&&r!=="doc-start"&&x.source[0]==="	"&&a(x,"TAB_AS_INDENT","Tabs are not allowed as indentation"),l=!0;break;case"comment":{l||a(x,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const G=x.source.substring(1)||" ";f?f+=h+G:f=G,h="",c=!1;break}case"newline":c?f?f+=x.source:o=!0:h+=x.source,c=!0,d=!0,(u||m)&&(y=!0),l=!0;break;case"anchor":u&&a(x,"MULTIPLE_ANCHORS","A node can have at most one anchor"),x.source.endsWith(":")&&a(x.offset+x.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),u=x,b===null&&(b=x.offset),c=!1,l=!1,P=!0;break;case"tag":{m&&a(x,"MULTIPLE_TAGS","A node can have at most one tag"),m=x,b===null&&(b=x.offset),c=!1,l=!1,P=!0;break}case r:(u||m)&&a(x,"BAD_PROP_ORDER",`Anchors and tags must be after the ${x.source} indicator`),O&&a(x,"UNEXPECTED_TOKEN",`Unexpected ${x.source} in ${t!=null?t:"collection"}`),O=x,c=!1,l=!1;break;case"comma":if(t){v&&a(x,"UNEXPECTED_TOKEN",`Unexpected , in ${t}`),v=x,c=!1,l=!1;break}default:a(x,"UNEXPECTED_TOKEN",`Unexpected ${x.type} token`),c=!1,l=!1}const k=e[e.length-1],S=k?k.offset+k.source.length:s;return P&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&a(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),{comma:v,found:O,spaceBefore:o,comment:f,hasNewline:d,hasNewlineAfterProp:y,anchor:u,tag:m,end:S,start:b!=null?b:S}}function Gn(e){if(!e)return null;switch(e.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(e.source.includes(`
`))return!0;if(e.end){for(const t of e.end)if(t.type==="newline")return!0}return!1;case"flow-collection":for(const t of e.items){for(const r of t.start)if(r.type==="newline")return!0;if(t.sep){for(const r of t.sep)if(r.type==="newline")return!0}if(Gn(t.key)||Gn(t.value))return!0}return!1;default:return!0}}function Hi(e,t,r){if((t==null?void 0:t.type)==="flow-collection"){const n=t.end[0];n.indent===e&&(n.source==="]"||n.source==="}")&&Gn(t)&&r(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Tu(e,t,r){const{uniqueKeys:n}=e.options;if(n===!1)return!1;const s=typeof n=="function"?n:(a,i)=>a===i||be(a)&&be(i)&&a.value===i.value&&!(a.value==="<<"&&e.schema.merge);return t.some(a=>s(a.key,r))}const pl="All mapping items must start at the same column";function py({composeNode:e,composeEmptyNode:t},r,n,s){var o;const a=new nt(r.schema);r.atRoot&&(r.atRoot=!1);let i=n.offset;for(const c of n.items){const{start:l,key:f,sep:h,value:d}=c,y=Yr(l,{indicator:"explicit-key-ind",next:f!=null?f:h==null?void 0:h[0],offset:i,onError:s,startOnNewline:!0}),P=!y.found;if(P){if(f&&(f.type==="block-seq"?s(i,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in f&&f.indent!==n.indent&&s(i,"BAD_INDENT",pl)),!y.anchor&&!y.tag&&!h){y.comment&&(a.comment?a.comment+=`
`+y.comment:a.comment=y.comment);continue}(y.hasNewlineAfterProp||Gn(f))&&s(f!=null?f:l[l.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((o=y.found)==null?void 0:o.indent)!==n.indent&&s(i,"BAD_INDENT",pl);const u=y.end,m=f?e(r,f,y,s):t(r,u,l,null,y,s);r.schema.compat&&Hi(n.indent,f,s),Tu(r,a.items,m)&&s(u,"DUPLICATE_KEY","Map keys must be unique");const v=Yr(h!=null?h:[],{indicator:"map-value-ind",next:d,offset:m.range[2],onError:s,startOnNewline:!f||f.type==="block-scalar"});if(i=v.end,v.found){P&&((d==null?void 0:d.type)==="block-map"&&!v.hasNewline&&s(i,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&y.start<v.found.offset-1024&&s(m.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const O=d?e(r,d,v,s):t(r,i,h,null,v,s);r.schema.compat&&Hi(n.indent,d,s),i=O.range[2];const b=new Ue(m,O);r.options.keepSourceTokens&&(b.srcToken=c),a.items.push(b)}else{P&&s(m.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(m.comment?m.comment+=`
`+v.comment:m.comment=v.comment);const O=new Ue(m);r.options.keepSourceTokens&&(O.srcToken=c),a.items.push(O)}}return a.range=[n.offset,i,i],a}function uy({composeNode:e,composeEmptyNode:t},r,n,s){const a=new $r(r.schema);r.atRoot&&(r.atRoot=!1);let i=n.offset;for(const{start:o,value:c}of n.items){const l=Yr(o,{indicator:"seq-item-ind",next:c,offset:i,onError:s,startOnNewline:!0});if(i=l.end,!l.found)if(l.anchor||l.tag||c)c&&c.type==="block-seq"?s(i,"BAD_INDENT","All sequence items must start at the same column"):s(i,"MISSING_CHAR","Sequence item without - indicator");else{l.comment&&(a.comment=l.comment);continue}const f=c?e(r,c,l,s):t(r,i,o,null,l,s);r.schema.compat&&Hi(n.indent,c,s),i=f.range[2],a.items.push(f)}return a.range=[n.offset,i,i],a}function ss(e,t,r,n){let s="";if(e){let a=!1,i="";for(const o of e){const{source:c,type:l}=o;switch(l){case"space":a=!0;break;case"comment":{r&&!a&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const f=c.substring(1)||" ";s?s+=i+f:s=f,i="";break}case"newline":s&&(i+=c),a=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}t+=c.length}}return{comment:s,offset:t}}const Za="Block collections are not allowed within flow collections",ei=e=>e&&(e.type==="block-map"||e.type==="block-seq");function my({composeNode:e,composeEmptyNode:t},r,n,s){var P;const a=n.start.source==="{",i=a?"flow map":"flow sequence",o=a?new nt(r.schema):new $r(r.schema);o.flow=!0;const c=r.atRoot;c&&(r.atRoot=!1);let l=n.offset+n.start.source.length;for(let u=0;u<n.items.length;++u){const m=n.items[u],{start:v,key:O,sep:b,value:k}=m,S=Yr(v,{flow:i,indicator:"explicit-key-ind",next:O!=null?O:b==null?void 0:b[0],offset:l,onError:s,startOnNewline:!1});if(!S.found){if(!S.anchor&&!S.tag&&!b&&!k){u===0&&S.comma?s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`):u<n.items.length-1&&s(S.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${i}`),S.comment&&(o.comment?o.comment+=`
`+S.comment:o.comment=S.comment),l=S.end;continue}!a&&r.options.strict&&Gn(O)&&s(O,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(u===0)S.comma&&s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${i}`);else if(S.comma||s(S.start,"MISSING_CHAR",`Missing , between ${i} items`),S.comment){let x="";e:for(const G of v)switch(G.type){case"comma":case"space":break;case"comment":x=G.source.substring(1);break e;default:break e}if(x){let G=o.items[o.items.length-1];Ee(G)&&(G=(P=G.value)!=null?P:G.key),G.comment?G.comment+=`
`+x:G.comment=x,S.comment=S.comment.substring(x.length+1)}}if(!a&&!b&&!S.found){const x=k?e(r,k,S,s):t(r,S.end,b,null,S,s);o.items.push(x),l=x.range[2],ei(k)&&s(x.range,"BLOCK_IN_FLOW",Za)}else{const x=S.end,G=O?e(r,O,S,s):t(r,x,v,null,S,s);ei(O)&&s(G.range,"BLOCK_IN_FLOW",Za);const re=Yr(b!=null?b:[],{flow:i,indicator:"map-value-ind",next:k,offset:G.range[2],onError:s,startOnNewline:!1});if(re.found){if(!a&&!S.found&&r.options.strict){if(b)for(const N of b){if(N===re.found)break;if(N.type==="newline"){s(N,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}S.start<re.found.offset-1024&&s(re.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else k&&("source"in k&&k.source&&k.source[0]===":"?s(k,"MISSING_CHAR",`Missing space after : in ${i}`):s(re.start,"MISSING_CHAR",`Missing , or : between ${i} items`));const I=k?e(r,k,re,s):re.found?t(r,re.end,b,null,re,s):null;I?ei(k)&&s(I.range,"BLOCK_IN_FLOW",Za):re.comment&&(G.comment?G.comment+=`
`+re.comment:G.comment=re.comment);const _=new Ue(G,I);if(r.options.keepSourceTokens&&(_.srcToken=m),a){const N=o;Tu(r,N.items,G)&&s(x,"DUPLICATE_KEY","Map keys must be unique"),N.items.push(_)}else{const N=new nt(r.schema);N.flow=!0,N.items.push(_),o.items.push(N)}l=I?I.range[2]:re.end}}const f=a?"}":"]",[h,...d]=n.end;let y=l;if(h&&h.source===f)y=h.offset+h.source.length;else{const u=i[0].toUpperCase()+i.substring(1),m=c?`${u} must end with a ${f}`:`${u} in block collection must be sufficiently indented and end with a ${f}`;s(l,c?"MISSING_CHAR":"BAD_INDENT",m),h&&h.source.length!==1&&d.unshift(h)}if(d.length>0){const u=ss(d,y,r.options.strict,s);u.comment&&(o.comment?o.comment+=`
`+u.comment:o.comment=u.comment),o.range=[n.offset,y,u.offset]}else o.range=[n.offset,y,y];return o}function dy(e,t,r,n,s){let a;switch(r.type){case"block-map":{a=py(e,t,r,s);break}case"block-seq":{a=uy(e,t,r,s);break}case"flow-collection":{a=my(e,t,r,s);break}}if(!n)return a;const i=t.directives.tagName(n.source,d=>s(n,"TAG_RESOLVE_FAILED",d));if(!i)return a;const o=a.constructor;if(i==="!"||i===o.tagName)return a.tag=o.tagName,a;const c=yr(a)?"map":"seq";let l=t.schema.tags.find(d=>d.collection===c&&d.tag===i);if(!l){const d=t.schema.knownTags[i];if(d&&d.collection===c)t.schema.tags.push(Object.assign({},d,{default:!1})),l=d;else return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${i}`,!0),a.tag=i,a}const f=l.resolve(a,d=>s(n,"TAG_RESOLVE_FAILED",d),t.options),h=_e(f)?f:new ee(f);return h.range=a.range,h.tag=i,l!=null&&l.format&&(h.format=l.format),h}function Ru(e,t,r){const n=e.offset,s=hy(e,t,r);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const a=s.mode===">"?ee.BLOCK_FOLDED:ee.BLOCK_LITERAL,i=e.source?yy(e.source):[];let o=i.length;for(let u=i.length-1;u>=0;--u){const m=i[u][1];if(m===""||m==="\r")o=u;else break}if(o===0){const u=s.chomp==="+"&&i.length>0?`
`.repeat(Math.max(1,i.length-1)):"";let m=n+s.length;return e.source&&(m+=e.source.length),{value:u,type:a,comment:s.comment,range:[n,m,m]}}let c=e.indent+s.indent,l=e.offset+s.length,f=0;for(let u=0;u<o;++u){const[m,v]=i[u];if(v===""||v==="\r")s.indent===0&&m.length>c&&(c=m.length);else{if(m.length<c){const O="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";r(l+m.length,"MISSING_CHAR",O)}s.indent===0&&(c=m.length),f=u;break}l+=m.length+v.length+1}for(let u=i.length-1;u>=o;--u)i[u][0].length>c&&(o=u+1);let h="",d="",y=!1;for(let u=0;u<f;++u)h+=i[u][0].slice(c)+`
`;for(let u=f;u<o;++u){let[m,v]=i[u];l+=m.length+v.length+1;const O=v[v.length-1]==="\r";if(O&&(v=v.slice(0,-1)),v&&m.length<c){const k=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;r(l-v.length-(O?2:1),"BAD_INDENT",k),m=""}a===ee.BLOCK_LITERAL?(h+=d+m.slice(c)+v,d=`
`):m.length>c||v[0]==="	"?(d===" "?d=`
`:!y&&d===`
`&&(d=`

`),h+=d+m.slice(c)+v,d=`
`,y=!0):v===""?d===`
`?h+=`
`:d=`
`:(h+=d+v,d=" ",y=!1)}switch(s.chomp){case"-":break;case"+":for(let u=o;u<i.length;++u)h+=`
`+i[u][0].slice(c);h[h.length-1]!==`
`&&(h+=`
`);break;default:h+=`
`}const P=n+s.length+e.source.length;return{value:h,type:a,comment:s.comment,range:[n,P,P]}}function hy({offset:e,props:t},r,n){if(t[0].type!=="block-scalar-header")return n(t[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=t[0],a=s[0];let i=0,o="",c=-1;for(let d=1;d<s.length;++d){const y=s[d];if(!o&&(y==="-"||y==="+"))o=y;else{const P=Number(y);!i&&P?i=P:c===-1&&(c=e+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,f="",h=s.length;for(let d=1;d<t.length;++d){const y=t[d];switch(y.type){case"space":l=!0;case"newline":h+=y.source.length;break;case"comment":r&&!l&&n(y,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),h+=y.source.length,f=y.source.substring(1);break;case"error":n(y,"UNEXPECTED_TOKEN",y.message),h+=y.source.length;break;default:{const P=`Unexpected token in block scalar header: ${y.type}`;n(y,"UNEXPECTED_TOKEN",P);const u=y.source;u&&typeof u=="string"&&(h+=u.length)}}}return{mode:a,indent:i,chomp:o,comment:f,length:h}}function yy(e){const t=e.split(/\n( *)/),r=t[0],n=r.match(/^( *)/),a=[n!=null&&n[1]?[n[1],r.slice(n[1].length)]:["",r]];for(let i=1;i<t.length;i+=2)a.push([t[i],t[i+1]]);return a}function qu(e,t,r){const{offset:n,type:s,source:a,end:i}=e;let o,c;const l=(d,y,P)=>r(n+d,y,P);switch(s){case"scalar":o=ee.PLAIN,c=$y(a,l);break;case"single-quoted-scalar":o=ee.QUOTE_SINGLE,c=gy(a,l);break;case"double-quoted-scalar":o=ee.QUOTE_DOUBLE,c=vy(a,l);break;default:return r(e,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+a.length,n+a.length]}}const f=n+a.length,h=ss(i,f,t,r);return{value:c,type:o,comment:h.comment,range:[n,f,h.offset]}}function $y(e,t){let r="";switch(e[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${e[0]}`;break}case"@":case"`":{r=`reserved character ${e[0]}`;break}}return r&&t(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),Du(e)}function gy(e,t){return(e[e.length-1]!=="'"||e.length===1)&&t(e.length,"MISSING_CHAR","Missing closing 'quote"),Du(e.slice(1,-1)).replace(/''/g,"'")}function Du(e){var c;let t,r;try{t=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{t=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=t.exec(e);if(!n)return e;let s=n[1],a=" ",i=t.lastIndex;for(r.lastIndex=i;n=r.exec(e);)n[1]===""?a===`
`?s+=a:a=`
`:(s+=a+n[1],a=" "),i=r.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=i,n=o.exec(e),s+a+((c=n==null?void 0:n[1])!=null?c:"")}function vy(e,t){let r="";for(let n=1;n<e.length-1;++n){const s=e[n];if(!(s==="\r"&&e[n+1]===`
`))if(s===`
`){const{fold:a,offset:i}=by(e,n);r+=a,n=i}else if(s==="\\"){let a=e[++n];const i=Sy[a];if(i)r+=i;else if(a===`
`)for(a=e[n+1];a===" "||a==="	";)a=e[++n+1];else if(a==="\r"&&e[n+1]===`
`)for(a=e[++n+1];a===" "||a==="	";)a=e[++n+1];else if(a==="x"||a==="u"||a==="U"){const o={x:2,u:4,U:8}[a];r+=Iy(e,n+1,o,t),n+=o}else{const o=e.substr(n-1,2);t(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),r+=o}}else if(s===" "||s==="	"){const a=n;let i=e[n+1];for(;i===" "||i==="	";)i=e[++n+1];i!==`
`&&!(i==="\r"&&e[n+2]===`
`)&&(r+=n>a?e.slice(a,n+1):s)}else r+=s}return(e[e.length-1]!=='"'||e.length===1)&&t(e.length,"MISSING_CHAR",'Missing closing "quote'),r}function by(e,t){let r="",n=e[t+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&e[t+2]!==`
`);)n===`
`&&(r+=`
`),t+=1,n=e[t+1];return r||(r=" "),{fold:r,offset:t}}const Sy={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Iy(e,t,r,n){const s=e.substr(t,r),i=s.length===r&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(i)){const o=e.substr(t-2,r+2);return n(t-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(i)}function Lu(e,t,r,n){const{value:s,type:a,comment:i,range:o}=t.type==="block-scalar"?Ru(t,e.options.strict,n):qu(t,e.options.strict,n),c=r?e.directives.tagName(r.source,h=>n(r,"TAG_RESOLVE_FAILED",h)):null,l=r&&c?wy(e.schema,s,c,r,n):t.type==="scalar"?Oy(e,s,t,n):e.schema[Dt];let f;try{const h=l.resolve(s,d=>n(r!=null?r:t,"TAG_RESOLVE_FAILED",d),e.options);f=be(h)?h:new ee(h)}catch(h){const d=h instanceof Error?h.message:String(h);n(r!=null?r:t,"TAG_RESOLVE_FAILED",d),f=new ee(s)}return f.range=o,f.source=s,a&&(f.type=a),c&&(f.tag=c),l.format&&(f.format=l.format),i&&(f.comment=i),f}function wy(e,t,r,n,s){var o;if(r==="!")return e[Dt];const a=[];for(const c of e.tags)if(!c.collection&&c.tag===r)if(c.default&&c.test)a.push(c);else return c;for(const c of a)if((o=c.test)!=null&&o.test(t))return c;const i=e.knownTags[r];return i&&!i.collection?(e.tags.push(Object.assign({},i,{default:!1,test:void 0})),i):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),e[Dt])}function Oy({directives:e,schema:t},r,n,s){var i;const a=t.tags.find(o=>{var c;return o.default&&((c=o.test)==null?void 0:c.test(r))})||t[Dt];if(t.compat){const o=(i=t.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))}))!=null?i:t[Dt];if(a.tag!==o.tag){const c=e.tagString(a.tag),l=e.tagString(o.tag),f=`Value may be parsed as either ${c} or ${l}`;s(n,"TAG_RESOLVE_FAILED",f,!0)}}return a}function Ey(e,t,r){if(t){r===null&&(r=t.length);for(let n=r-1;n>=0;--n){let s=t[n];switch(s.type){case"space":case"comment":case"newline":e-=s.source.length;continue}for(s=t[++n];(s==null?void 0:s.type)==="space";)e+=s.source.length,s=t[++n];break}}return e}const Py={composeNode:Mu,composeEmptyNode:qo};function Mu(e,t,r,n){const{spaceBefore:s,comment:a,anchor:i,tag:o}=r;let c,l=!0;switch(t.type){case"alias":c=jy(e,t,n),(i||o)&&n(t,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Lu(e,t,o,n),i&&(c.anchor=i.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=dy(Py,e,t,o,n),i&&(c.anchor=i.source.substring(1));break;default:{const f=t.type==="error"?t.message:`Unsupported token (type: ${t.type})`;n(t,"UNEXPECTED_TOKEN",f),c=qo(e,t.offset,void 0,null,r,n),l=!1}}return i&&c.anchor===""&&n(i,"BAD_ALIAS","Anchor cannot be an empty string"),s&&(c.spaceBefore=!0),a&&(t.type==="scalar"&&t.source===""?c.comment=a:c.commentBefore=a),e.options.keepSourceTokens&&l&&(c.srcToken=t),c}function qo(e,t,r,n,{spaceBefore:s,comment:a,anchor:i,tag:o},c){const l={type:"scalar",offset:Ey(t,r,n),indent:-1,source:""},f=Lu(e,l,o,c);return i&&(f.anchor=i.source.substring(1),f.anchor===""&&c(i,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(f.spaceBefore=!0),a&&(f.comment=a),f}function jy({options:e},{offset:t,source:r,end:n},s){const a=new ha(r.substring(1));a.source===""&&s(t,"BAD_ALIAS","Alias cannot be an empty string"),a.source.endsWith(":")&&s(t+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const i=t+r.length,o=ss(n,i,e.strict,s);return a.range=[t,i,o.offset],o.comment&&(a.comment=o.comment),a}function ky(e,t,{offset:r,start:n,value:s,end:a},i){const o=Object.assign({_directives:t},e),c=new fn(void 0,o),l={atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},f=Yr(n,{indicator:"doc-start",next:s!=null?s:a==null?void 0:a[0],offset:r,onError:i,startOnNewline:!0});f.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!f.hasNewline&&i(f.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Mu(l,s,f,i):qo(l,f.end,n,null,f,i);const h=c.contents.range[2],d=ss(a,h,!1,i);return d.comment&&(c.comment=d.comment),c.range=[r,h,d.offset],c}function Pn(e){if(typeof e=="number")return[e,e+1];if(Array.isArray(e))return e.length===2?e:[e[0],e[1]];const{offset:t,source:r}=e;return[t,t+(typeof r=="string"?r.length:1)]}function ul(e){var s;let t="",r=!1,n=!1;for(let a=0;a<e.length;++a){const i=e[a];switch(i[0]){case"#":t+=(t===""?"":n?`

`:`
`)+(i.substring(1)||" "),r=!0,n=!1;break;case"%":((s=e[a+1])==null?void 0:s[0])!=="#"&&(a+=1),r=!1;break;default:r||(n=!0),r=!1}}return{comment:t,afterEmptyLine:n}}class Do{constructor(t={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,n,s,a)=>{const i=Pn(r);a?this.warnings.push(new Nu(i,n,s)):this.errors.push(new or(i,n,s))},this.directives=new Ve({version:t.version||"1.2"}),this.options=t}decorate(t,r){const{comment:n,afterEmptyLine:s}=ul(this.prelude);if(n){const a=t.contents;if(r)t.comment=t.comment?`${t.comment}
${n}`:n;else if(s||t.directives.docStart||!a)t.commentBefore=n;else if(ke(a)&&!a.flow&&a.items.length>0){let i=a.items[0];Ee(i)&&(i=i.key);const o=i.commentBefore;i.commentBefore=o?`${n}
${o}`:n}else{const i=a.commentBefore;a.commentBefore=i?`${n}
${i}`:n}}r?(Array.prototype.push.apply(t.errors,this.errors),Array.prototype.push.apply(t.warnings,this.warnings)):(t.errors=this.errors,t.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:ul(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(t,r=!1,n=-1){for(const s of t)yield*this.next(s);yield*this.end(r,n)}*next(t){switch(t.type){case"directive":this.directives.add(t.source,(r,n,s)=>{const a=Pn(t);a[0]+=r,this.onError(a,"BAD_DIRECTIVE",n,s)}),this.prelude.push(t.source),this.atDirectives=!0;break;case"document":{const r=ky(this.options,this.directives,t,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(t,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(t.source);break;case"error":{const r=t.source?`${t.message}: ${JSON.stringify(t.source)}`:t.message,n=new or(Pn(t),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new or(Pn(t),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const r=ss(t.end,t.offset+t.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new or(Pn(t),"UNEXPECTED_TOKEN",`Unsupported token ${t.type}`))}}*end(t=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(t){const n=Object.assign({_directives:this.directives},this.options),s=new fn(void 0,n);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,r,r],this.decorate(s,!1),yield s}}}function xy(e,t=!0,r){if(e){const n=(s,a,i)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(r)r(o,a,i);else throw new or([o,o+1],a,i)};switch(e.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return qu(e,t,n);case"block-scalar":return Ru(e,t,n)}}return null}function Ay(e,t){var l;const{implicitKey:r=!1,indent:n,inFlow:s=!1,offset:a=-1,type:i="PLAIN"}=t,o=rs({type:i,value:e},{implicitKey:r,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=(l=t.end)!=null?l:[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const f=o.indexOf(`
`),h=o.substring(0,f),d=o.substring(f+1)+`
`,y=[{type:"block-scalar-header",offset:a,indent:n,source:h}];return Uu(y,c)||y.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:a,indent:n,props:y,source:d}}case'"':return{type:"double-quoted-scalar",offset:a,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:a,indent:n,source:o,end:c};default:return{type:"scalar",offset:a,indent:n,source:o,end:c}}}function Cy(e,t,r={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:a=!1,type:i}=r,o="indent"in e?e.indent:null;if(n&&typeof o=="number"&&(o+=2),!i)switch(e.type){case"single-quoted-scalar":i="QUOTE_SINGLE";break;case"double-quoted-scalar":i="QUOTE_DOUBLE";break;case"block-scalar":{const l=e.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:i="PLAIN"}const c=rs({type:i,value:t},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:a,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":_y(e,c);break;case'"':ti(e,c,"double-quoted-scalar");break;case"'":ti(e,c,"single-quoted-scalar");break;default:ti(e,c,"scalar")}}function _y(e,t){const r=t.indexOf(`
`),n=t.substring(0,r),s=t.substring(r+1)+`
`;if(e.type==="block-scalar"){const a=e.props[0];if(a.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a.source=n,e.source=s}else{const{offset:a}=e,i="indent"in e?e.indent:-1,o=[{type:"block-scalar-header",offset:a,indent:i,source:n}];Uu(o,"end"in e?e.end:void 0)||o.push({type:"newline",offset:-1,indent:i,source:`
`});for(const c of Object.keys(e))c!=="type"&&c!=="offset"&&delete e[c];Object.assign(e,{type:"block-scalar",indent:i,props:o,source:s})}}function Uu(e,t){if(t)for(const r of t)switch(r.type){case"space":case"comment":e.push(r);break;case"newline":return e.push(r),!0}return!1}function ti(e,t,r){switch(e.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":e.type=r,e.source=t;break;case"block-scalar":{const n=e.props.slice(1);let s=t.length;e.props[0].type==="block-scalar-header"&&(s-=e.props[0].source.length);for(const a of n)a.offset+=s;delete e.props,Object.assign(e,{type:r,source:t,end:n});break}case"block-map":case"block-seq":{const n=e.offset+t.length,s={type:"newline",offset:n,indent:e.indent,source:`
`};delete e.items,Object.assign(e,{type:r,source:t,end:[s]});break}default:{const n="indent"in e?e.indent:-1,s="end"in e&&Array.isArray(e.end)?e.end.filter(a=>a.type==="space"||a.type==="comment"||a.type==="newline"):[];for(const a of Object.keys(e))a!=="type"&&a!=="offset"&&delete e[a];Object.assign(e,{type:r,indent:n,source:t,end:s})}}}const Ny=e=>"type"in e?oa(e):Ks(e);function oa(e){switch(e.type){case"block-scalar":{let t="";for(const r of e.props)t+=oa(r);return t+e.source}case"block-map":case"block-seq":{let t="";for(const r of e.items)t+=Ks(r);return t}case"flow-collection":{let t=e.start.source;for(const r of e.items)t+=Ks(r);for(const r of e.end)t+=r.source;return t}case"document":{let t=Ks(e);if(e.end)for(const r of e.end)t+=r.source;return t}default:{let t=e.source;if("end"in e&&e.end)for(const r of e.end)t+=r.source;return t}}}function Ks({start:e,key:t,sep:r,value:n}){let s="";for(const a of e)s+=a.source;if(t&&(s+=oa(t)),r)for(const a of r)s+=a.source;return n&&(s+=oa(n)),s}const Xi=Symbol("break visit"),Ty=Symbol("skip children"),Vu=Symbol("remove item");function mr(e,t){"type"in e&&e.type==="document"&&(e={start:e.start,value:e.value}),Bu(Object.freeze([]),e,t)}mr.BREAK=Xi;mr.SKIP=Ty;mr.REMOVE=Vu;mr.itemAtPath=(e,t)=>{let r=e;for(const[n,s]of t){const a=r==null?void 0:r[n];if(a&&"items"in a)r=a.items[s];else return}return r};mr.parentCollection=(e,t)=>{const r=mr.itemAtPath(e,t.slice(0,-1)),n=t[t.length-1][0],s=r==null?void 0:r[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function Bu(e,t,r){let n=r(t,e);if(typeof n=="symbol")return n;for(const s of["key","value"]){const a=t[s];if(a&&"items"in a){for(let i=0;i<a.items.length;++i){const o=Bu(Object.freeze(e.concat([[s,i]])),a.items[i],r);if(typeof o=="number")i=o-1;else{if(o===Xi)return Xi;o===Vu&&(a.items.splice(i,1),i-=1)}}typeof n=="function"&&s==="key"&&(n=n(t,e))}}return typeof n=="function"?n(t,e):n}const Pa="\uFEFF",ja="",ka="",Hn="",Ry=e=>!!e&&"items"in e,qy=e=>!!e&&(e.type==="scalar"||e.type==="single-quoted-scalar"||e.type==="double-quoted-scalar"||e.type==="block-scalar");function Dy(e){switch(e){case Pa:return"<BOM>";case ja:return"<DOC>";case ka:return"<FLOW_END>";case Hn:return"<SCALAR>";default:return JSON.stringify(e)}}function Fu(e){switch(e){case Pa:return"byte-order-mark";case ja:return"doc-mode";case ka:return"flow-error-end";case Hn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(e[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Ly=Object.freeze(Object.defineProperty({__proto__:null,BOM:Pa,DOCUMENT:ja,FLOW_END:ka,SCALAR:Hn,isCollection:Ry,isScalar:qy,prettyToken:Dy,tokenType:Fu,createScalarToken:Ay,resolveAsScalar:xy,setScalarValue:Cy,stringify:Ny,visit:mr},Symbol.toStringTag,{value:"Module"}));function rt(e){switch(e){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const ml="0123456789ABCDEFabcdef".split(""),My="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),ri=",[]{}".split(""),Uy=` ,[]{}
\r	`.split(""),ni=e=>!e||Uy.includes(e);class Ku{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(t,r=!1){var s;t&&(this.buffer=this.buffer?this.buffer+t:t,this.lineEndPos=null),this.atEnd=!r;let n=(s=this.next)!=null?s:"stream";for(;n&&(r||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let t=this.pos,r=this.buffer[t];for(;r===" "||r==="	";)r=this.buffer[++t];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[t+1]===`
`:!1}charAt(t){return this.buffer[this.pos+t]}continueScalar(t){let r=this.buffer[t];if(this.indentNext>0){let n=0;for(;r===" ";)r=this.buffer[++n+t];if(r==="\r"){const s=this.buffer[n+t+1];if(s===`
`||!s&&!this.atEnd)return t+n+1}return r===`
`||n>=this.indentNext||!r&&!this.atEnd?t+n:-1}if(r==="-"||r==="."){const n=this.buffer.substr(t,3);if((n==="---"||n==="...")&&rt(this.buffer[t+3]))return-1}return t}getLine(){let t=this.lineEndPos;return(typeof t!="number"||t!==-1&&t<this.pos)&&(t=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=t),t===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[t-1]==="\r"&&(t-=1),this.buffer.substring(this.pos,t))}hasChars(t){return this.pos+t<=this.buffer.length}setNext(t){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=t,null}peek(t){return this.buffer.substr(this.pos,t)}*parseNext(t){switch(t){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let t=this.getLine();if(t===null)return this.setNext("stream");if(t[0]===Pa&&(yield*this.pushCount(1),t=t.substring(1)),t[0]==="%"){let r=t.length;const n=t.indexOf("#");if(n!==-1){const a=t[n-1];(a===" "||a==="	")&&(r=n-1)}for(;;){const a=t[r-1];if(a===" "||a==="	")r-=1;else break}const s=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(t.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(t.length-r),yield*this.pushNewline(),"stream"}return yield ja,yield*this.parseLineStart()}*parseLineStart(){const t=this.charAt(0);if(!t&&!this.atEnd)return this.setNext("line-start");if(t==="-"||t==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if(r==="---"&&rt(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(r==="..."&&rt(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!rt(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[t,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((t==="-"||t==="?"||t===":")&&rt(r)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const t=this.getLine();if(t===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(t[r]){case"#":yield*this.pushCount(t.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(ni),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(t.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let t,r,n=-1;do t=yield*this.pushNewline(),t>0?(r=yield*this.pushSpaces(!1),this.indentValue=n=r):r=0,r+=yield*this.pushSpaces(!0);while(t+r>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&rt(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield ka,yield*this.parseLineStart();let a=0;for(;s[a]===",";)a+=yield*this.pushCount(1),a+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(a+=yield*this.pushIndicators(),s[a]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-a),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(ni),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const i=this.charAt(1);if(this.flowKey||rt(i)||i===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const t=this.charAt(0);let r=this.buffer.indexOf(t,this.pos+1);if(t==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let a=0;for(;this.buffer[r-1-a]==="\\";)a+=1;if(a%2===0)break;r=this.buffer.indexOf('"',r+1)}const n=this.buffer.substring(0,r);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const a=this.continueScalar(s+1);if(a===-1)break;s=n.indexOf(`
`,a)}s!==-1&&(r=s-(n[s-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let t=this.pos;for(;;){const r=this.buffer[++t];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>rt(r)||r==="#")}*parseBlockScalar(){let t=this.pos-1,r=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":r+=1;break;case`
`:t=s,r=0;break;case"\r":{const a=this.buffer[s+1];if(!a&&!this.atEnd)return this.setNext("block-scalar");if(a===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext+=this.blockScalarIndent;do{const s=this.continueScalar(t+1);if(s===-1)break;t=this.buffer.indexOf(`
`,s)}while(t!==-1);if(t===-1){if(!this.atEnd)return this.setNext("block-scalar");t=this.buffer.length}}if(!this.blockScalarKeep)do{let s=t-1,a=this.buffer[s];a==="\r"&&(a=this.buffer[--s]);const i=s;for(;a===" "||a==="	";)a=this.buffer[--s];if(a===`
`&&s>=this.pos&&s+1+r>i)t=s;else break}while(!0);return yield Hn,yield*this.pushToIndex(t+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const t=this.flowLevel>0;let r=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const a=this.buffer[n+1];if(rt(a)||t&&a===",")break;r=n}else if(rt(s)){let a=this.buffer[n+1];if(s==="\r"&&(a===`
`?(n+=1,s=`
`,a=this.buffer[n+1]):r=n),a==="#"||t&&ri.includes(a))break;if(s===`
`){const i=this.continueScalar(n+1);if(i===-1)break;n=Math.max(n,i-2)}}else{if(t&&ri.includes(s))break;r=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield Hn,yield*this.pushToIndex(r+1,!0),t?"flow":"doc")}*pushCount(t){return t>0?(yield this.buffer.substr(this.pos,t),this.pos+=t,t):0}*pushToIndex(t,r){const n=this.buffer.slice(this.pos,t);return n?(yield n,this.pos+=n.length,n.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(ni))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const t=this.flowLevel>0,r=this.charAt(1);if(rt(r)||t&&ri.includes(r))return t?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let t=this.pos+2,r=this.buffer[t];for(;!rt(r)&&r!==">";)r=this.buffer[++t];return yield*this.pushToIndex(r===">"?t+1:t,!1)}else{let t=this.pos+1,r=this.buffer[t];for(;r;)if(My.includes(r))r=this.buffer[++t];else if(r==="%"&&ml.includes(this.buffer[t+1])&&ml.includes(this.buffer[t+2]))r=this.buffer[t+=3];else break;return yield*this.pushToIndex(t,!1)}}*pushNewline(){const t=this.buffer[this.pos];return t===`
`?yield*this.pushCount(1):t==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(t){let r=this.pos-1,n;do n=this.buffer[++r];while(n===" "||t&&n==="	");const s=r-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=r),s}*pushUntil(t){let r=this.pos,n=this.buffer[r];for(;!t(n);)n=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class Ju{constructor(){this.lineStarts=[],this.addNewLine=t=>this.lineStarts.push(t),this.linePos=t=>{let r=0,n=this.lineStarts.length;for(;r<n;){const a=r+n>>1;this.lineStarts[a]<t?r=a+1:n=a}if(this.lineStarts[r]===t)return{line:r+1,col:1};if(r===0)return{line:0,col:t};const s=this.lineStarts[r-1];return{line:r,col:t-s+1}}}}function pt(e,t){for(let r=0;r<e.length;++r)if(e[r].type===t)return!0;return!1}function dl(e){for(let t=0;t<e.length;++t)switch(e[t].type){case"space":case"comment":case"newline":break;default:return t}return-1}function zu(e){switch(e==null?void 0:e.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function _s(e){var t;switch(e.type){case"document":return e.start;case"block-map":{const r=e.items[e.items.length-1];return(t=r.sep)!=null?t:r.start}case"block-seq":return e.items[e.items.length-1].start;default:return[]}}function xr(e){var r;if(e.length===0)return[];let t=e.length;e:for(;--t>=0;)switch(e[t].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((r=e[++t])==null?void 0:r.type)==="space";);return e.splice(t,e.length)}function hl(e){if(e.start.type==="flow-seq-start")for(const t of e.items)t.sep&&!t.value&&!pt(t.start,"explicit-key-ind")&&!pt(t.sep,"map-value-ind")&&(t.key&&(t.value=t.key),delete t.key,zu(t.value)?t.value.end?Array.prototype.push.apply(t.value.end,t.sep):t.value.end=t.sep:Array.prototype.push.apply(t.start,t.sep),delete t.sep)}class Lo{constructor(t){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new Ku,this.onNewLine=t}*parse(t,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(t,r))yield*this.next(n);r||(yield*this.end())}*next(t){if(this.source=t,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=t.length;return}const r=Fu(t);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+t.length);break;case"space":this.atNewLine&&t[0]===" "&&(this.indent+=t.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=t.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=t.length}else{const n=`Not a YAML token: ${t}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:t}),this.offset+=t.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const t=this.peek(1);if(this.type==="doc-end"&&(!t||t.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!t)return yield*this.stream();switch(t.type){case"document":return yield*this.document(t);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(t);case"block-scalar":return yield*this.blockScalar(t);case"block-map":return yield*this.blockMap(t);case"block-seq":return yield*this.blockSequence(t);case"flow-collection":return yield*this.flowCollection(t);case"doc-end":return yield*this.documentEnd(t)}yield*this.pop()}peek(t){return this.stack[this.stack.length-t]}*pop(t){const r=t!=null?t:this.stack.pop();if(r)if(this.stack.length===0)yield r;else{const n=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in n?n.indent:0:r.type==="flow-collection"&&n.type==="document"&&(r.indent=0),r.type==="flow-collection"&&hl(r),n.type){case"document":n.value=r;break;case"block-scalar":n.props.push(r);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=r;else{Object.assign(s,{key:r,sep:[]}),this.onKeyLine=!pt(s.start,"explicit-key-ind");return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:r}):s.value=r;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:r,sep:[]}):s.sep?s.value=r:Object.assign(s,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const s=r.items[r.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&dl(s.start)===-1&&(r.indent===0||s.start.every(a=>a.type!=="comment"||a.indent<r.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),r.items.splice(-1,1))}}else{const n="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:n}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const t={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&t.start.push(this.sourceToken),this.stack.push(t);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(t){if(t.value)return yield*this.lineEnd(t);switch(this.type){case"doc-start":{dl(t.start)!==-1?(yield*this.pop(),yield*this.step()):t.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":t.start.push(this.sourceToken);return}const r=this.startBlockValue(t);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(t){if(this.type==="map-value-ind"){const r=_s(this.peek(2)),n=xr(r);let s;t.end?(s=t.end,s.push(this.sourceToken),delete t.end):s=[this.sourceToken];const a={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:n,key:t,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=a}else yield*this.lineEnd(t)}*blockScalar(t){switch(this.type){case"space":case"comment":case"newline":t.props.push(this.sourceToken);return;case"scalar":if(t.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(t){var n;const r=t.items[t.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0,a=Array.isArray(s)?s[s.length-1]:void 0;(a==null?void 0:a.type)==="comment"?s==null||s.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)t.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,t.indent)){const s=t.items[t.items.length-2],a=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(a)){Array.prototype.push.apply(a,r.start),a.push(this.sourceToken),t.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=t.indent){const s=!this.onKeyLine&&this.indent===t.indent&&r.sep;let a=[];if(s&&r.sep&&!r.value){const i=[];for(let o=0;o<r.sep.length;++o){const c=r.sep[o];switch(c.type){case"newline":i.push(o);break;case"space":break;case"comment":c.indent>t.indent&&(i.length=0);break;default:i.length=0}}i.length>=2&&(a=r.sep.splice(i[1]))}switch(this.type){case"anchor":case"tag":s||r.value?(a.push(this.sourceToken),t.items.push({start:a}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!pt(r.start,"explicit-key-ind")?r.start.push(this.sourceToken):s||r.value?(a.push(this.sourceToken),t.items.push({start:a})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}),this.onKeyLine=!0;return;case"map-value-ind":if(pt(r.start,"explicit-key-ind"))if(r.sep)if(r.value)t.items.push({start:[],key:null,sep:[this.sourceToken]});else if(pt(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]});else if(zu(r.key)&&!pt(r.sep,"newline")){const i=xr(r.start),o=r.key,c=r.sep;c.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:o,sep:c}]})}else a.length>0?r.sep=r.sep.concat(a,this.sourceToken):r.sep.push(this.sourceToken);else if(pt(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const i=xr(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||s?t.items.push({start:a,key:null,sep:[this.sourceToken]}):pt(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const i=this.flowScalar(this.type);s||r.value?(t.items.push({start:a,key:i,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(i):(Object.assign(r,{key:i,sep:[]}),this.onKeyLine=!0);return}default:{const i=this.startBlockValue(t);if(i){s&&i.type!=="block-seq"&&pt(r.start,"explicit-key-ind")&&t.items.push({start:a}),this.stack.push(i);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(t){var n;const r=t.items[t.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0,a=Array.isArray(s)?s[s.length-1]:void 0;(a==null?void 0:a.type)==="comment"?s==null||s.push(this.sourceToken):t.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)t.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,t.indent)){const s=t.items[t.items.length-2],a=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(a)){Array.prototype.push.apply(a,r.start),a.push(this.sourceToken),t.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=t.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==t.indent)break;r.value||pt(r.start,"seq-item-ind")?t.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>t.indent){const s=this.startBlockValue(t);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(t){const r=t.items[t.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(t.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?t.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?t.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?t.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!r||r.value?t.items.push({start:[],key:s,sep:[]}):r.sep?this.stack.push(s):Object.assign(r,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":t.end.push(this.sourceToken);return}const n=this.startBlockValue(t);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===t.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=_s(n),a=xr(s);hl(t);const i=t.end.splice(1,t.end.length);i.push(this.sourceToken);const o={type:"block-map",offset:t.offset,indent:t.indent,items:[{start:a,key:t,sep:i}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(t)}}flowScalar(t){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:t,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(t){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=_s(t),n=xr(r);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const r=_s(t),n=xr(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(t,r){return this.type!=="comment"||this.indent<=r?!1:t.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(t){this.type!=="doc-mode"&&(t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(t){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:t.end?t.end.push(this.sourceToken):t.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function Gu(e){const t=e.prettyErrors!==!1;return{lineCounter:e.lineCounter||t&&new Ju||null,prettyErrors:t}}function Vy(e,t={}){const{lineCounter:r,prettyErrors:n}=Gu(t),s=new Lo(r==null?void 0:r.addNewLine),a=new Do(t),i=Array.from(a.compose(s.parse(e)));if(n&&r)for(const o of i)o.errors.forEach(ia(e,r)),o.warnings.forEach(ia(e,r));return i.length>0?i:Object.assign([],{empty:!0},a.streamInfo())}function Hu(e,t={}){const{lineCounter:r,prettyErrors:n}=Gu(t),s=new Lo(r==null?void 0:r.addNewLine),a=new Do(t);let i=null;for(const o of a.compose(s.parse(e),!0,e.length))if(!i)i=o;else if(i.options.logLevel!=="silent"){i.errors.push(new or(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&r&&(i.errors.forEach(ia(e,r)),i.warnings.forEach(ia(e,r))),i}function By(e,t,r){let n;typeof t=="function"?n=t:r===void 0&&t&&typeof t=="object"&&(r=t);const s=Hu(e,r);if(!s)return null;if(s.warnings.forEach(a=>hu(s.options.logLevel,a)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},r))}function Fy(e,t,r){var s;let n=null;if(typeof t=="function"||Array.isArray(t)?n=t:r===void 0&&t&&(r=t),typeof r=="string"&&(r=r.length),typeof r=="number"){const a=Math.round(r);r=a<1?void 0:a>8?{indent:8}:{indent:a}}if(e===void 0){const{keepUndefined:a}=(s=r!=null?r:t)!=null?s:{};if(!a)return}return new fn(e,n,r).toString(r)}const yl=Object.freeze(Object.defineProperty({__proto__:null,CST:Ly,Composer:Do,Document:fn,Schema:Ea,YAMLError:Ro,YAMLParseError:or,YAMLWarning:Nu,Alias:ha,isAlias:hr,isCollection:ke,isDocument:ts,isMap:yr,isNode:_e,isPair:Ee,isScalar:be,isSeq:on,Pair:Ue,Scalar:ee,YAMLMap:nt,YAMLSeq:$r,Lexer:Ku,LineCounter:Ju,Parser:Lo,parse:By,parseAllDocuments:Vy,parseDocument:Hu,stringify:Fy,visit:Yt,visitAsync:da},Symbol.toStringTag,{value:"Module"}));var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qe=Ky;function Ky(e,t){return function r(){t==null&&(t=e.length);var n=[].slice.call(arguments);return n.length>=t?e.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var Qr={exports:{}};(function(e,t){(function(r,n){var s={};r.PubSub?(s=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=s,n(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||Mo,function(r){var n={},s=-1,a="*";function i(u){var m;for(m in u)if(Object.prototype.hasOwnProperty.call(u,m))return!0;return!1}function o(u){return function(){throw u}}function c(u,m,v){try{u(m,v)}catch(O){setTimeout(o(O),0)}}function l(u,m,v){u(m,v)}function f(u,m,v,O){var b=n[m],k=O?l:c,S;if(!!Object.prototype.hasOwnProperty.call(n,m))for(S in b)Object.prototype.hasOwnProperty.call(b,S)&&k(b[S],u,v)}function h(u,m,v){return function(){var b=String(u),k=b.lastIndexOf(".");for(f(u,u,m,v);k!==-1;)b=b.substr(0,k),k=b.lastIndexOf("."),f(u,b,m,v);f(u,a,m,v)}}function d(u){var m=String(u),v=Boolean(Object.prototype.hasOwnProperty.call(n,m)&&i(n[m]));return v}function y(u){for(var m=String(u),v=d(m)||d(a),O=m.lastIndexOf(".");!v&&O!==-1;)m=m.substr(0,O),O=m.lastIndexOf("."),v=d(m);return v}function P(u,m,v,O){u=typeof u=="symbol"?u.toString():u;var b=h(u,m,O),k=y(u);return k?(v===!0?b():setTimeout(b,0),!0):!1}r.publish=function(u,m){return P(u,m,!1,r.immediateExceptions)},r.publishSync=function(u,m){return P(u,m,!0,r.immediateExceptions)},r.subscribe=function(u,m){if(typeof m!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(n,u)||(n[u]={});var v="uid_"+String(++s);return n[u][v]=m,v},r.subscribeAll=function(u){return r.subscribe(a,u)},r.subscribeOnce=function(u,m){var v=r.subscribe(u,function(){r.unsubscribe(v),m.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function(m){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(m)===0&&delete n[v]},r.countSubscriptions=function(m){var v,O,b=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(m)===0){for(O in n[v])b++;break}return b},r.getSubscriptions=function(m){var v,O=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(m)===0&&O.push(v);return O},r.unsubscribe=function(u){var m=function(re){var I;for(I in n)if(Object.prototype.hasOwnProperty.call(n,I)&&I.indexOf(re)===0)return!0;return!1},v=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(n,u)||m(u)),O=!v&&typeof u=="string",b=typeof u=="function",k=!1,S,x,G;if(v){r.clearSubscriptions(u);return}for(S in n)if(Object.prototype.hasOwnProperty.call(n,S)){if(x=n[S],O&&x[u]){delete x[u],k=u;break}if(b)for(G in x)Object.prototype.hasOwnProperty.call(x,G)&&x[G]===u&&(delete x[G],k=!0)}return k}})})(Qr,Qr.exports);var ca={exports:{}};/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */(function(e,t){(function(r,n){n(t)})(Mo,function(r){function n(){for(var $=arguments.length,p=Array($),g=0;g<$;g++)p[g]=arguments[g];if(p.length>1){p[0]=p[0].slice(0,-1);for(var E=p.length-1,w=1;w<E;++w)p[w]=p[w].slice(1,-1);return p[E]=p[E].slice(1),p.join("")}else return p[0]}function s($){return"(?:"+$+")"}function a($){return $===void 0?"undefined":$===null?"null":Object.prototype.toString.call($).split(" ").pop().split("]").shift().toLowerCase()}function i($){return $.toUpperCase()}function o($){return $!=null?$ instanceof Array?$:typeof $.length!="number"||$.split||$.setInterval||$.call?[$]:Array.prototype.slice.call($):[]}function c($,p){var g=$;if(p)for(var E in p)g[E]=p[E];return g}function l($){var p="[A-Za-z]",g="[0-9]",E=n(g,"[A-Fa-f]"),w=s(s("%[EFef]"+E+"%"+E+E+"%"+E+E)+"|"+s("%[89A-Fa-f]"+E+"%"+E+E)+"|"+s("%"+E+E)),L="[\\:\\/\\?\\#\\[\\]\\@]",U="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",le=n(L,U),Se=$?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",xe=$?"[\\uE000-\\uF8FF]":"[]",ae=n(p,g,"[\\-\\.\\_\\~]",Se);s(p+n(p,g,"[\\+\\-\\.]")+"*"),s(s(w+"|"+n(ae,U,"[\\:]"))+"*");var ve=s(s("25[0-5]")+"|"+s("2[0-4]"+g)+"|"+s("1"+g+g)+"|"+s("0?[1-9]"+g)+"|0?0?"+g),Ae=s(ve+"\\."+ve+"\\."+ve+"\\."+ve),Y=s(E+"{1,4}"),we=s(s(Y+"\\:"+Y)+"|"+Ae),Ne=s(s(Y+"\\:")+"{6}"+we),Oe=s("\\:\\:"+s(Y+"\\:")+"{5}"+we),Vt=s(s(Y)+"?\\:\\:"+s(Y+"\\:")+"{4}"+we),vt=s(s(s(Y+"\\:")+"{0,1}"+Y)+"?\\:\\:"+s(Y+"\\:")+"{3}"+we),bt=s(s(s(Y+"\\:")+"{0,2}"+Y)+"?\\:\\:"+s(Y+"\\:")+"{2}"+we),jr=s(s(s(Y+"\\:")+"{0,3}"+Y)+"?\\:\\:"+Y+"\\:"+we),sr=s(s(s(Y+"\\:")+"{0,4}"+Y)+"?\\:\\:"+we),tt=s(s(s(Y+"\\:")+"{0,5}"+Y)+"?\\:\\:"+Y),St=s(s(s(Y+"\\:")+"{0,6}"+Y)+"?\\:\\:"),ar=s([Ne,Oe,Vt,vt,bt,jr,sr,tt,St].join("|")),Nt=s(s(ae+"|"+w)+"+");s("[vV]"+E+"+\\."+n(ae,U,"[\\:]")+"+"),s(s(w+"|"+n(ae,U))+"*");var On=s(w+"|"+n(ae,U,"[\\:\\@]"));return s(s(w+"|"+n(ae,U,"[\\@]"))+"+"),s(s(On+"|"+n("[\\/\\?]",xe))+"*"),{NOT_SCHEME:new RegExp(n("[^]",p,g,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(n("[^\\%\\:]",ae,U),"g"),NOT_HOST:new RegExp(n("[^\\%\\[\\]\\:]",ae,U),"g"),NOT_PATH:new RegExp(n("[^\\%\\/\\:\\@]",ae,U),"g"),NOT_PATH_NOSCHEME:new RegExp(n("[^\\%\\/\\@]",ae,U),"g"),NOT_QUERY:new RegExp(n("[^\\%]",ae,U,"[\\:\\@\\/\\?]",xe),"g"),NOT_FRAGMENT:new RegExp(n("[^\\%]",ae,U,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(n("[^]",ae,U),"g"),UNRESERVED:new RegExp(ae,"g"),OTHER_CHARS:new RegExp(n("[^\\%]",ae,le),"g"),PCT_ENCODED:new RegExp(w,"g"),IPV4ADDRESS:new RegExp("^("+Ae+")$"),IPV6ADDRESS:new RegExp("^\\[?("+ar+")"+s(s("\\%25|\\%(?!"+E+"{2})")+"("+Nt+")")+"?\\]?$")}}var f=l(!1),h=l(!0),d=function(){function $(p,g){var E=[],w=!0,L=!1,U=void 0;try{for(var le=p[Symbol.iterator](),Se;!(w=(Se=le.next()).done)&&(E.push(Se.value),!(g&&E.length===g));w=!0);}catch(xe){L=!0,U=xe}finally{try{!w&&le.return&&le.return()}finally{if(L)throw U}}return E}return function(p,g){if(Array.isArray(p))return p;if(Symbol.iterator in Object(p))return $(p,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function($){if(Array.isArray($)){for(var p=0,g=Array($.length);p<$.length;p++)g[p]=$[p];return g}else return Array.from($)},P=2147483647,u=36,m=1,v=26,O=38,b=700,k=72,S=128,x="-",G=/^xn--/,re=/[^\0-\x7E]/,I=/[\x2E\u3002\uFF0E\uFF61]/g,_={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},N=u-m,R=Math.floor,H=String.fromCharCode;function q($){throw new RangeError(_[$])}function Q($,p){for(var g=[],E=$.length;E--;)g[E]=p($[E]);return g}function ye($,p){var g=$.split("@"),E="";g.length>1&&(E=g[0]+"@",$=g[1]),$=$.replace(I,".");var w=$.split("."),L=Q(w,p).join(".");return E+L}function ge($){for(var p=[],g=0,E=$.length;g<E;){var w=$.charCodeAt(g++);if(w>=55296&&w<=56319&&g<E){var L=$.charCodeAt(g++);(L&64512)==56320?p.push(((w&1023)<<10)+(L&1023)+65536):(p.push(w),g--)}else p.push(w)}return p}var K=function(p){return String.fromCodePoint.apply(String,y(p))},Pe=function(p){return p-48<10?p-22:p-65<26?p-65:p-97<26?p-97:u},ot=function(p,g){return p+22+75*(p<26)-((g!=0)<<5)},je=function(p,g,E){var w=0;for(p=E?R(p/b):p>>1,p+=R(p/g);p>N*v>>1;w+=u)p=R(p/N);return R(w+(N+1)*p/(p+O))},He=function(p){var g=[],E=p.length,w=0,L=S,U=k,le=p.lastIndexOf(x);le<0&&(le=0);for(var Se=0;Se<le;++Se)p.charCodeAt(Se)>=128&&q("not-basic"),g.push(p.charCodeAt(Se));for(var xe=le>0?le+1:0;xe<E;){for(var ae=w,ve=1,Ae=u;;Ae+=u){xe>=E&&q("invalid-input");var Y=Pe(p.charCodeAt(xe++));(Y>=u||Y>R((P-w)/ve))&&q("overflow"),w+=Y*ve;var we=Ae<=U?m:Ae>=U+v?v:Ae-U;if(Y<we)break;var Ne=u-we;ve>R(P/Ne)&&q("overflow"),ve*=Ne}var Oe=g.length+1;U=je(w-ae,Oe,ae==0),R(w/Oe)>P-L&&q("overflow"),L+=R(w/Oe),w%=Oe,g.splice(w++,0,L)}return String.fromCodePoint.apply(String,g)},Xe=function(p){var g=[];p=ge(p);var E=p.length,w=S,L=0,U=k,le=!0,Se=!1,xe=void 0;try{for(var ae=p[Symbol.iterator](),ve;!(le=(ve=ae.next()).done);le=!0){var Ae=ve.value;Ae<128&&g.push(H(Ae))}}catch(En){Se=!0,xe=En}finally{try{!le&&ae.return&&ae.return()}finally{if(Se)throw xe}}var Y=g.length,we=Y;for(Y&&g.push(x);we<E;){var Ne=P,Oe=!0,Vt=!1,vt=void 0;try{for(var bt=p[Symbol.iterator](),jr;!(Oe=(jr=bt.next()).done);Oe=!0){var sr=jr.value;sr>=w&&sr<Ne&&(Ne=sr)}}catch(En){Vt=!0,vt=En}finally{try{!Oe&&bt.return&&bt.return()}finally{if(Vt)throw vt}}var tt=we+1;Ne-w>R((P-L)/tt)&&q("overflow"),L+=(Ne-w)*tt,w=Ne;var St=!0,ar=!1,Nt=void 0;try{for(var On=p[Symbol.iterator](),Zc;!(St=(Zc=On.next()).done);St=!0){var el=Zc.value;if(el<w&&++L>P&&q("overflow"),el==w){for(var Es=L,Ps=u;;Ps+=u){var js=Ps<=U?m:Ps>=U+v?v:Ps-U;if(Es<js)break;var tl=Es-js,rl=u-js;g.push(H(ot(js+tl%rl,0))),Es=R(tl/rl)}g.push(H(ot(Es,0))),U=je(L,tt,we==Y),L=0,++we}}}catch(En){ar=!0,Nt=En}finally{try{!St&&On.return&&On.return()}finally{if(ar)throw Nt}}++L,++w}return g.join("")},he=function(p){return ye(p,function(g){return G.test(g)?He(g.slice(4).toLowerCase()):g})},Z=function(p){return ye(p,function(g){return re.test(g)?"xn--"+Xe(g):g})},ce={version:"2.1.0",ucs2:{decode:ge,encode:K},decode:He,encode:Xe,toASCII:Z,toUnicode:he},$e={};function Ie($){var p=$.charCodeAt(0),g=void 0;return p<16?g="%0"+p.toString(16).toUpperCase():p<128?g="%"+p.toString(16).toUpperCase():p<2048?g="%"+(p>>6|192).toString(16).toUpperCase()+"%"+(p&63|128).toString(16).toUpperCase():g="%"+(p>>12|224).toString(16).toUpperCase()+"%"+(p>>6&63|128).toString(16).toUpperCase()+"%"+(p&63|128).toString(16).toUpperCase(),g}function We($){for(var p="",g=0,E=$.length;g<E;){var w=parseInt($.substr(g+1,2),16);if(w<128)p+=String.fromCharCode(w),g+=3;else if(w>=194&&w<224){if(E-g>=6){var L=parseInt($.substr(g+4,2),16);p+=String.fromCharCode((w&31)<<6|L&63)}else p+=$.substr(g,6);g+=6}else if(w>=224){if(E-g>=9){var U=parseInt($.substr(g+4,2),16),le=parseInt($.substr(g+7,2),16);p+=String.fromCharCode((w&15)<<12|(U&63)<<6|le&63)}else p+=$.substr(g,9);g+=9}else p+=$.substr(g,3),g+=3}return p}function De($,p){function g(E){var w=We(E);return w.match(p.UNRESERVED)?w:E}return $.scheme&&($.scheme=String($.scheme).replace(p.PCT_ENCODED,g).toLowerCase().replace(p.NOT_SCHEME,"")),$.userinfo!==void 0&&($.userinfo=String($.userinfo).replace(p.PCT_ENCODED,g).replace(p.NOT_USERINFO,Ie).replace(p.PCT_ENCODED,i)),$.host!==void 0&&($.host=String($.host).replace(p.PCT_ENCODED,g).toLowerCase().replace(p.NOT_HOST,Ie).replace(p.PCT_ENCODED,i)),$.path!==void 0&&($.path=String($.path).replace(p.PCT_ENCODED,g).replace($.scheme?p.NOT_PATH:p.NOT_PATH_NOSCHEME,Ie).replace(p.PCT_ENCODED,i)),$.query!==void 0&&($.query=String($.query).replace(p.PCT_ENCODED,g).replace(p.NOT_QUERY,Ie).replace(p.PCT_ENCODED,i)),$.fragment!==void 0&&($.fragment=String($.fragment).replace(p.PCT_ENCODED,g).replace(p.NOT_FRAGMENT,Ie).replace(p.PCT_ENCODED,i)),$}function wr($){return $.replace(/^0*(.*)/,"$1")||"0"}function Or($,p){var g=$.match(p.IPV4ADDRESS)||[],E=d(g,2),w=E[1];return w?w.split(".").map(wr).join("."):$}function Sn($,p){var g=$.match(p.IPV6ADDRESS)||[],E=d(g,3),w=E[1],L=E[2];if(w){for(var U=w.toLowerCase().split("::").reverse(),le=d(U,2),Se=le[0],xe=le[1],ae=xe?xe.split(":").map(wr):[],ve=Se.split(":").map(wr),Ae=p.IPV4ADDRESS.test(ve[ve.length-1]),Y=Ae?7:8,we=ve.length-Y,Ne=Array(Y),Oe=0;Oe<Y;++Oe)Ne[Oe]=ae[Oe]||ve[we+Oe]||"";Ae&&(Ne[Y-1]=Or(Ne[Y-1],p));var Vt=Ne.reduce(function(tt,St,ar){if(!St||St==="0"){var Nt=tt[tt.length-1];Nt&&Nt.index+Nt.length===ar?Nt.length++:tt.push({index:ar,length:1})}return tt},[]),vt=Vt.sort(function(tt,St){return St.length-tt.length})[0],bt=void 0;if(vt&&vt.length>1){var jr=Ne.slice(0,vt.index),sr=Ne.slice(vt.index+vt.length);bt=jr.join(":")+"::"+sr.join(":")}else bt=Ne.join(":");return L&&(bt+="%"+L),bt}else return $}var ws=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,Os="".match(/(){0}/)[1]===void 0;function Ct($){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g={},E=p.iri!==!1?h:f;p.reference==="suffix"&&($=(p.scheme?p.scheme+":":"")+"//"+$);var w=$.match(ws);if(w){Os?(g.scheme=w[1],g.userinfo=w[3],g.host=w[4],g.port=parseInt(w[5],10),g.path=w[6]||"",g.query=w[7],g.fragment=w[8],isNaN(g.port)&&(g.port=w[5])):(g.scheme=w[1]||void 0,g.userinfo=$.indexOf("@")!==-1?w[3]:void 0,g.host=$.indexOf("//")!==-1?w[4]:void 0,g.port=parseInt(w[5],10),g.path=w[6]||"",g.query=$.indexOf("?")!==-1?w[7]:void 0,g.fragment=$.indexOf("#")!==-1?w[8]:void 0,isNaN(g.port)&&(g.port=$.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?w[4]:void 0)),g.host&&(g.host=Sn(Or(g.host,E),E)),g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",p.reference&&p.reference!=="suffix"&&p.reference!==g.reference&&(g.error=g.error||"URI is not a "+p.reference+" reference.");var L=$e[(p.scheme||g.scheme||"").toLowerCase()];if(!p.unicodeSupport&&(!L||!L.unicodeSupport)){if(g.host&&(p.domainHost||L&&L.domainHost))try{g.host=ce.toASCII(g.host.replace(E.PCT_ENCODED,We).toLowerCase())}catch(U){g.error=g.error||"Host's domain name can not be converted to ASCII via punycode: "+U}De(g,f)}else De(g,E);L&&L.parse&&L.parse(g,p)}else g.error=g.error||"URI can not be parsed.";return g}function mh($,p){var g=p.iri!==!1?h:f,E=[];return $.userinfo!==void 0&&(E.push($.userinfo),E.push("@")),$.host!==void 0&&E.push(Sn(Or(String($.host),g),g).replace(g.IPV6ADDRESS,function(w,L,U){return"["+L+(U?"%25"+U:"")+"]"})),(typeof $.port=="number"||typeof $.port=="string")&&(E.push(":"),E.push(String($.port))),E.length?E.join(""):void 0}var Vc=/^\.\.?\//,Bc=/^\/\.(\/|$)/,Fc=/^\/\.\.(\/|$)/,dh=/^\/?(?:.|\n)*?(?=\/|$)/;function Er($){for(var p=[];$.length;)if($.match(Vc))$=$.replace(Vc,"");else if($.match(Bc))$=$.replace(Bc,"/");else if($.match(Fc))$=$.replace(Fc,"/"),p.pop();else if($==="."||$==="..")$="";else{var g=$.match(dh);if(g){var E=g[0];$=$.slice(E.length),p.push(E)}else throw new Error("Unexpected dot segment condition")}return p.join("")}function $t($){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=p.iri?h:f,E=[],w=$e[(p.scheme||$.scheme||"").toLowerCase()];if(w&&w.serialize&&w.serialize($,p),$.host&&!g.IPV6ADDRESS.test($.host)){if(p.domainHost||w&&w.domainHost)try{$.host=p.iri?ce.toUnicode($.host):ce.toASCII($.host.replace(g.PCT_ENCODED,We).toLowerCase())}catch(le){$.error=$.error||"Host's domain name can not be converted to "+(p.iri?"Unicode":"ASCII")+" via punycode: "+le}}De($,g),p.reference!=="suffix"&&$.scheme&&(E.push($.scheme),E.push(":"));var L=mh($,p);if(L!==void 0&&(p.reference!=="suffix"&&E.push("//"),E.push(L),$.path&&$.path.charAt(0)!=="/"&&E.push("/")),$.path!==void 0){var U=$.path;!p.absolutePath&&(!w||!w.absolutePath)&&(U=Er(U)),L===void 0&&(U=U.replace(/^\/\//,"/%2F")),E.push(U)}return $.query!==void 0&&(E.push("?"),E.push($.query)),$.fragment!==void 0&&(E.push("#"),E.push($.fragment)),E.join("")}function Kc($,p){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},E=arguments[3],w={};return E||($=Ct($t($,g),g),p=Ct($t(p,g),g)),g=g||{},!g.tolerant&&p.scheme?(w.scheme=p.scheme,w.userinfo=p.userinfo,w.host=p.host,w.port=p.port,w.path=Er(p.path||""),w.query=p.query):(p.userinfo!==void 0||p.host!==void 0||p.port!==void 0?(w.userinfo=p.userinfo,w.host=p.host,w.port=p.port,w.path=Er(p.path||""),w.query=p.query):(p.path?(p.path.charAt(0)==="/"?w.path=Er(p.path):(($.userinfo!==void 0||$.host!==void 0||$.port!==void 0)&&!$.path?w.path="/"+p.path:$.path?w.path=$.path.slice(0,$.path.lastIndexOf("/")+1)+p.path:w.path=p.path,w.path=Er(w.path)),w.query=p.query):(w.path=$.path,p.query!==void 0?w.query=p.query:w.query=$.query),w.userinfo=$.userinfo,w.host=$.host,w.port=$.port),w.scheme=$.scheme),w.fragment=p.fragment,w}function hh($,p,g){var E=c({scheme:"null"},g);return $t(Kc(Ct($,E),Ct(p,E),E,!0),E)}function yh($,p){return typeof $=="string"?$=$t(Ct($,p),p):a($)==="object"&&($=Ct($t($,p),p)),$}function $h($,p,g){return typeof $=="string"?$=$t(Ct($,g),g):a($)==="object"&&($=$t($,g)),typeof p=="string"?p=$t(Ct(p,g),g):a(p)==="object"&&(p=$t(p,g)),$===p}function gh($,p){return $&&$.toString().replace(!p||!p.iri?f.ESCAPE:h.ESCAPE,Ie)}function _t($,p){return $&&$.toString().replace(!p||!p.iri?f.PCT_ENCODED:h.PCT_ENCODED,We)}var In={scheme:"http",domainHost:!0,parse:function(p,g){return p.host||(p.error=p.error||"HTTP URIs must have a host."),p},serialize:function(p,g){var E=String(p.scheme).toLowerCase()==="https";return(p.port===(E?443:80)||p.port==="")&&(p.port=void 0),p.path||(p.path="/"),p}},Jc={scheme:"https",domainHost:In.domainHost,parse:In.parse,serialize:In.serialize};function zc($){return typeof $.secure=="boolean"?$.secure:String($.scheme).toLowerCase()==="wss"}var wn={scheme:"ws",domainHost:!0,parse:function(p,g){var E=p;return E.secure=zc(E),E.resourceName=(E.path||"/")+(E.query?"?"+E.query:""),E.path=void 0,E.query=void 0,E},serialize:function(p,g){if((p.port===(zc(p)?443:80)||p.port==="")&&(p.port=void 0),typeof p.secure=="boolean"&&(p.scheme=p.secure?"wss":"ws",p.secure=void 0),p.resourceName){var E=p.resourceName.split("?"),w=d(E,2),L=w[0],U=w[1];p.path=L&&L!=="/"?L:void 0,p.query=U,p.resourceName=void 0}return p.fragment=void 0,p}},Gc={scheme:"wss",domainHost:wn.domainHost,parse:wn.parse,serialize:wn.serialize},vh={},Hc="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",gt="[0-9A-Fa-f]",bh=s(s("%[EFef]"+gt+"%"+gt+gt+"%"+gt+gt)+"|"+s("%[89A-Fa-f]"+gt+"%"+gt+gt)+"|"+s("%"+gt+gt)),Sh="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",Ih="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",wh=n(Ih,'[\\"\\\\]'),Oh="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",Eh=new RegExp(Hc,"g"),Pr=new RegExp(bh,"g"),Ph=new RegExp(n("[^]",Sh,"[\\.]",'[\\"]',wh),"g"),Xc=new RegExp(n("[^]",Hc,Oh),"g"),jh=Xc;function Wa($){var p=We($);return p.match(Eh)?p:$}var Wc={scheme:"mailto",parse:function(p,g){var E=p,w=E.to=E.path?E.path.split(","):[];if(E.path=void 0,E.query){for(var L=!1,U={},le=E.query.split("&"),Se=0,xe=le.length;Se<xe;++Se){var ae=le[Se].split("=");switch(ae[0]){case"to":for(var ve=ae[1].split(","),Ae=0,Y=ve.length;Ae<Y;++Ae)w.push(ve[Ae]);break;case"subject":E.subject=_t(ae[1],g);break;case"body":E.body=_t(ae[1],g);break;default:L=!0,U[_t(ae[0],g)]=_t(ae[1],g);break}}L&&(E.headers=U)}E.query=void 0;for(var we=0,Ne=w.length;we<Ne;++we){var Oe=w[we].split("@");if(Oe[0]=_t(Oe[0]),g.unicodeSupport)Oe[1]=_t(Oe[1],g).toLowerCase();else try{Oe[1]=ce.toASCII(_t(Oe[1],g).toLowerCase())}catch(Vt){E.error=E.error||"Email address's domain name can not be converted to ASCII via punycode: "+Vt}w[we]=Oe.join("@")}return E},serialize:function(p,g){var E=p,w=o(p.to);if(w){for(var L=0,U=w.length;L<U;++L){var le=String(w[L]),Se=le.lastIndexOf("@"),xe=le.slice(0,Se).replace(Pr,Wa).replace(Pr,i).replace(Ph,Ie),ae=le.slice(Se+1);try{ae=g.iri?ce.toUnicode(ae):ce.toASCII(_t(ae,g).toLowerCase())}catch(we){E.error=E.error||"Email address's domain name can not be converted to "+(g.iri?"Unicode":"ASCII")+" via punycode: "+we}w[L]=xe+"@"+ae}E.path=w.join(",")}var ve=p.headers=p.headers||{};p.subject&&(ve.subject=p.subject),p.body&&(ve.body=p.body);var Ae=[];for(var Y in ve)ve[Y]!==vh[Y]&&Ae.push(Y.replace(Pr,Wa).replace(Pr,i).replace(Xc,Ie)+"="+ve[Y].replace(Pr,Wa).replace(Pr,i).replace(jh,Ie));return Ae.length&&(E.query=Ae.join("&")),E}},kh=/^([^\:]+)\:(.*)/,Yc={scheme:"urn",parse:function(p,g){var E=p.path&&p.path.match(kh),w=p;if(E){var L=g.scheme||w.scheme||"urn",U=E[1].toLowerCase(),le=E[2],Se=L+":"+(g.nid||U),xe=$e[Se];w.nid=U,w.nss=le,w.path=void 0,xe&&(w=xe.parse(w,g))}else w.error=w.error||"URN can not be parsed.";return w},serialize:function(p,g){var E=g.scheme||p.scheme||"urn",w=p.nid,L=E+":"+(g.nid||w),U=$e[L];U&&(p=U.serialize(p,g));var le=p,Se=p.nss;return le.path=(w||g.nid)+":"+Se,le}},xh=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,Qc={scheme:"urn:uuid",parse:function(p,g){var E=p;return E.uuid=E.nss,E.nss=void 0,!g.tolerant&&(!E.uuid||!E.uuid.match(xh))&&(E.error=E.error||"UUID is not valid."),E},serialize:function(p,g){var E=p;return E.nss=(p.uuid||"").toLowerCase(),E}};$e[In.scheme]=In,$e[Jc.scheme]=Jc,$e[wn.scheme]=wn,$e[Gc.scheme]=Gc,$e[Wc.scheme]=Wc,$e[Yc.scheme]=Yc,$e[Qc.scheme]=Qc,r.SCHEMES=$e,r.pctEncChar=Ie,r.pctDecChars=We,r.parse=Ct,r.removeDotSegments=Er,r.serialize=$t,r.resolveComponents=Kc,r.resolve=hh,r.normalize=yh,r.equal=$h,r.escapeComponent=gh,r.unescapeComponent=_t,Object.defineProperty(r,"__esModule",{value:!0})})})(ca,ca.exports);const Jr=ca.exports,Jy=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,zy={null:e=>e===null,boolean:e=>typeof e=="boolean",object:Jy,array:e=>Array.isArray(e),number:e=>typeof e=="number",integer:e=>Number.isInteger(e),string:e=>typeof e=="string"},Gy=(e,t)=>zy[t](e),Hy=(e,t)=>{const r=Jr.resolve(e,t,{iri:!0});if(Jr.resolve(e,"",{iri:!0})&&Jr.parse(r).scheme==="file"&&Jr.parse(e).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${e}'`);return r},Xy=e=>Jr.unescapeComponent(Jr.parse(e).fragment)||"",jn=47,Wy=(e,t)=>{if(e===t)return"";let r=1;const n=e.length-1,s=t.length-r,a=n<s?n:s;let i=-1,o=0;for(;o<a;o++){const l=e.charCodeAt(o+1);if(l!==t.charCodeAt(r+o))break;l===jn&&(i=o)}if(s>a){if(t.charCodeAt(r+o)===jn)return t.slice(r+o+1);if(o===0)return t.slice(r+o)}n>a&&(e.charCodeAt(o+1)===jn?i=o:a===0&&(i=0));let c="";for(o=i+2;o<=e.length;++o)(o===e.length||e.charCodeAt(o)===jn)&&(c+=c.length===0?"..":"/..");return r+=i,c.length>0?`${c}${t.slice(r,t.length)}`:(t.charCodeAt(r)===jn&&++r,t.slice(r,t.length))};var Uo={jsonTypeOf:Gy,resolveUrl:Hy,urlFragment:Xy,pathRelative:Wy};const Vo=Qe,as="",is=e=>{if(e.length>0&&e[0]!=="/")throw Error("Invalid JSON Pointer");return e.split("/").slice(1).map(n$)},Yy=(e,t=void 0)=>{const r=is(e),n=s=>r.reduce(([a,i],o)=>[Qt(a,o,i),pn(o,i)],[s,""])[0];return t===void 0?n:n(t)},Qy=(e,t=void 0,r=void 0)=>{const n=is(e),s=Vo((a,i)=>Xu(n,a,i,as));return t===void 0?s:s(t,r)},Xu=(e,t,r,n)=>{if(e.length===0)return r;if(e.length>1){const s=e.shift();return{...t,[s]:Xu(e,Qt(t,s,n),r,pn(s,n))}}else if(Array.isArray(t)){const s=[...t],a=Bo(t,e[0]);return s[a]=r,s}else return typeof t=="object"&&t!==null?{...t,[e[0]]:r}:Qt(t,e[0],n)},Zy=(e,t=void 0,r=void 0)=>{const n=is(e),s=Vo((a,i)=>Wu(n,a,i,as));return t===void 0?s:s(t,r)},Wu=(e,t,r,n)=>{if(e.length!==0)if(e.length===1&&!Zu(t)){const s=Bo(t,e[0]);t[s]=r}else{const s=e.shift();Wu(e,Qt(t,s,n),r,pn(s,n))}},e$=(e,t=void 0)=>{const r=is(e),n=s=>Yu(r,s,as);return t===void 0?n:n(t)},Yu=(e,t,r)=>{if(e.length!=0)if(e.length>1){const n=e.shift(),s=Qt(t,n,r);return{...t,[n]:Yu(e,s,pn(n,r))}}else{if(Array.isArray(t))return t.filter((n,s)=>s!=e[0]);if(typeof t=="object"&&t!==null){const{[e[0]]:n,...s}=t;return s}else return Qt(t,e[0],r)}},t$=(e,t=void 0)=>{const r=is(e),n=s=>Qu(r,s,as);return t===void 0?n:n(t)},Qu=(e,t,r)=>{if(e.length!==0)if(e.length>1){const n=e.shift(),s=Qt(t,n,r);Qu(e,s,pn(n,r))}else Array.isArray(t)?t.splice(e[0],1):typeof t=="object"&&t!==null?delete t[e[0]]:Qt(t,e[0],r)},pn=Vo((e,t)=>t+"/"+r$(e)),r$=e=>e.toString().replace(/~/g,"~0").replace(/\//g,"~1"),n$=e=>e.toString().replace(/~1/g,"/").replace(/~0/g,"~"),Bo=(e,t)=>Array.isArray(e)&&t==="-"?e.length:t,Qt=(e,t,r="")=>{if(e===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${t}'`);if(e===null)throw TypeError(`Value at '${r}' is null and does not have property '${t}'`);if(Zu(e))throw TypeError(`Value at '${r}' is a ${typeof e} and does not have property '${t}'`);{const n=Bo(e,t);return e[n]}},Zu=e=>e===null||typeof e!="object";var xa={nil:as,append:pn,get:Yy,set:Qy,assign:Zy,unset:e$,remove:t$};const em=Symbol("$__value"),Fo=Symbol("$__href"),s$=(e,t)=>Object.freeze({[Fo]:e,[em]:t}),a$=e=>e&&e[Fo]!==void 0,i$=e=>e[Fo],o$=e=>e[em];var Ko={cons:s$,isReference:a$,href:i$,value:o$};const c$=xa,un=Qe,{resolveUrl:l$,jsonTypeOf:f$}=Uo,$l=Ko,tm=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),p$=(e,t="")=>Object.freeze({...tm,id:l$(t,""),instance:e,value:e}),u$=e=>`${e.id}#${encodeURI(e.pointer)}`,at=e=>$l.isReference(e.value)?$l.value(e.value):e.value,m$=(e,t)=>e in at(t),d$=un((e,t)=>f$(at(e),t)),gr=(e,t)=>Object.freeze({...t,pointer:c$.append(e,t.pointer),value:at(t)[e]}),h$=e=>Object.keys(at(e)).map(t=>[t,gr(t,e)]),y$=e=>Object.keys(at(e)),$$=un((e,t)=>at(t).map((r,n,s,a)=>e(gr(n,t),n,s,a))),g$=un((e,t)=>at(t).map((r,n,s,a)=>gr(n,t)).filter((r,n,s,a)=>e(r,n,s,a))),v$=un((e,t,r)=>at(r).reduce((n,s,a)=>e(n,gr(a,r),a),t)),b$=un((e,t)=>at(t).every((r,n,s,a)=>e(gr(n,t),n,s,a))),S$=un((e,t)=>at(t).some((r,n,s,a)=>e(gr(n,t),n,s,a))),I$=e=>at(e).length;var Jo={nil:tm,cons:p$,uri:u$,value:at,has:m$,typeOf:d$,step:gr,entries:h$,keys:y$,map:$$,filter:g$,reduce:v$,every:b$,some:S$,length:I$},rm=async e=>Object.entries(await e);const w$=Qe;var zo=w$(async(e,t)=>(await t).map(e));const O$=Qe;var Go=O$(async(e,t,r)=>(await r).reduce(async(n,s)=>e(await n,s),t));const E$=Qe,P$=Go;var j$=E$(async(e,t,r={})=>P$(async(n,s)=>await e(s)?n.concat([s]):n,[],t,r));const k$=Qe,x$=zo;var A$=k$(async(e,t)=>{const r=await x$(e,t);return(await Promise.all(r)).some(n=>n)});const C$=Qe,_$=zo;var N$=C$(async(e,t)=>{const r=await _$(e,t);return(await Promise.all(r)).every(n=>n)});const T$=Qe;var nm=T$((e,t)=>e.reduce(async(r,n)=>n(await r),t)),R$=e=>Promise.all(e);const q$=nm,D$=rm,L$=Go;var M$=e=>q$([D$,L$(async(t,[r,n])=>(t[r]=await n,t),{})],e),fe={entries:rm,map:zo,filter:j$,reduce:Go,some:A$,every:N$,pipeline:nm,all:R$,allValues:M$},U$=fetch,Aa={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var gl=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,V$=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,sm=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,B$=/\\([\u000b\u0020-\u00ff])/g,F$=/([\\"])/g,am=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;Aa.format=K$;Aa.parse=J$;function K$(e){if(!e||typeof e!="object")throw new TypeError("argument obj is required");var t=e.parameters,r=e.type;if(!r||!am.test(r))throw new TypeError("invalid type");var n=r;if(t&&typeof t=="object")for(var s,a=Object.keys(t).sort(),i=0;i<a.length;i++){if(s=a[i],!sm.test(s))throw new TypeError("invalid parameter name");n+="; "+s+"="+G$(t[s])}return n}function J$(e){if(!e)throw new TypeError("argument string is required");var t=typeof e=="object"?z$(e):e;if(typeof t!="string")throw new TypeError("argument string is required to be a string");var r=t.indexOf(";"),n=r!==-1?t.substr(0,r).trim():t.trim();if(!am.test(n))throw new TypeError("invalid media type");var s=new H$(n.toLowerCase());if(r!==-1){var a,i,o;for(gl.lastIndex=r;i=gl.exec(t);){if(i.index!==r)throw new TypeError("invalid parameter format");r+=i[0].length,a=i[1].toLowerCase(),o=i[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace(B$,"$1")),s.parameters[a]=o}if(r!==t.length)throw new TypeError("invalid parameter format")}return s}function z$(e){var t;if(typeof e.getHeader=="function"?t=e.getHeader("content-type"):typeof e.headers=="object"&&(t=e.headers&&e.headers["content-type"]),typeof t!="string")throw new TypeError("content-type header is missing from object");return t}function G$(e){var t=String(e);if(sm.test(t))return t;if(t.length>0&&!V$.test(t))throw new TypeError("invalid parameter value");return'"'+t.replace(F$,"\\$1")+'"'}function H$(e){this.parameters=Object.create(null),this.type=e}const X$=Aa,Xn={},W$=(e,t)=>{Xn[e]=t},Y$=e=>{const t=X$.parse(e.headers.get("content-type")).type;if(!(t in Xn))throw Error(`${e.url} is not a schema. Found a document with media type: ${t}`);return Xn[t].parse(e)},Q$=e=>{for(const t in Xn)if(Xn[t].matcher(e))return t;return"application/octet-stream"};var im={addPlugin:W$,parse:Y$,getContentType:Q$};const Z$=Qe,Xr=fe,Pt=xa,{jsonTypeOf:Ho,resolveUrl:Lt,urlFragment:Xo,pathRelative:eg}=Uo,tg=U$,Rt=Ko,rg=im,kn="https://json-schema.org/draft/2019-09/vocab/core",xn="https://json-schema.org/draft/2020-12/vocab/core",Kn={},lt={},ng=(e,t,r)=>{Kn[e]||(Kn[e]={}),Kn[e][t]=r},Le=(e,t)=>{var n;const r=lt[e];return(n=Kn[r])==null?void 0:n[t]},cr={},Wo={},Yo=(e,t="",r="")=>{var P,u;e=JSON.parse(JSON.stringify(e));const n=Lt(t,""),s=Lt(e.$schema||r,"");if(!s)throw Error("Couldn't determine schema dialect");if(delete e.$schema,!(s in lt))if(((P=e==null?void 0:e.$vocabulary)==null?void 0:P[kn])===!0&&s===Ns(e,n,kn)[0])lt[s]=kn;else if(((u=e==null?void 0:e.$vocabulary)==null?void 0:u[xn])===!0&&s===Ns(e,n,xn)[0])lt[s]=xn;else if(s===Ns(e,n,s)[0])lt[s]=s;else if(s in cr){const m=cr[s];m.vocabulary[kn]===!0?lt[s]=kn:m.vocabulary[xn]===!0?lt[s]=xn:lt[s]=lt[m.dialectId]}else throw Error(`Couldn't determine JSON Schema version for dialect: '${s}'`);const[a,i]=Ns(e,n,lt[s]);if(!a)throw Error("Couldn't determine an identifier for the schema");const o=Le(s,"baseToken");delete e[o],n&&(Wo[n]=a);const c=Le(s,"anchorToken");i&&o===c&&(e[c]=c!==o?encodeURI(i):`#${encodeURI(i)}`);const l={},f=Le(s,"recursiveAnchorToken");e[f]===!0&&(l[""]=`${a}#`,e[c]="",delete e[f]);let h;const d=Le(s,"vocabularyToken");Ho(e[d],"object")?(h=e[d],delete e[d]):h={[lt[s]]:!0};const y={"":""};return cr[a]={id:a,dialectId:s,schema:Wi(e,a,s,Pt.nil,y,l),anchors:y,dynamicAnchors:l,vocabulary:h,validated:!1},a},Ns=(e,t,r)=>{var a;const n=(a=Kn[r])==null?void 0:a.baseToken,s=Lt(t,e[n]||"");return[Lt(s,""),Xo(s)]},Wi=(e,t,r,n,s,a)=>{if(Ho(e,"object")){const i=typeof e.$schema=="string"?Lt(e.$schema,""):r,o=Le(i,"embeddedToken"),c=Le(i,"anchorToken");if(typeof e[o]=="string"&&(o!==c||e[o][0]!=="#")){const y=Lt(t,e[o]),P=Le(i,"baseToken");return e[P]=y,Yo(e,y,r),Rt.cons(e[o],e)}const l=Le(r,"anchorToken"),f=Le(r,"dynamicAnchorToken");typeof e[f]=="string"&&(a[e[f]]=`${t}#${encodeURI(n)}`,s[e[f]]=n,delete e[f]);const h=Le(r,"embeddedToken");if(typeof e[l]=="string"){const y=l!==h?e[l]:e[l].slice(1);s[y]=n,delete e[l]}const d=Le(r,"jrefToken");if(typeof e[d]=="string")return Rt.cons(e[d],e);for(const y in e)e[y]=Wi(e[y],t,r,Pt.append(y,n),s,a);return e}else return Array.isArray(e)?e.map((i,o)=>Wi(i,t,r,Pt.append(o,n),s,a)):e},sg=e=>e in cr||e in Wo,om=e=>cr[Wo[e]]||cr[e],ag=e=>{cr[e].validated=!0},ig=Object.freeze({id:"",dialectId:void 0,vocabulary:{},pointer:Pt.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),cm=async(e,t=ig)=>{const r=Lt(pm(t),e),n=Lt(r,""),s=Xo(r);if(!sg(n)){const c=await tg(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);Yo(await rg.parse(c),n)}const a=om(n),i=s[0]!=="/"?fm(a,s):s,o=Object.freeze({...a,pointer:i,value:Pt.get(i,a.schema)});return lm(o)},lm=e=>Rt.isReference(e.value)?cm(Rt.href(e.value),e):e,fm=(e,t)=>{if(!(t in e.anchors))throw Error(`No such anchor '${encodeURI(e.id)}#${encodeURI(t)}'`);return e.anchors[t]},pm=e=>`${e.id}#${encodeURI(e.pointer)}`,rr=e=>Rt.isReference(e.value)?Rt.value(e.value):e.value,og=(e,t)=>e in rr(t),cg=(e,t)=>Ho(rr(e),t),Qo=(e,t)=>{const r=om(t.id),n=Object.freeze({...t,pointer:Pt.append(e,t.pointer),value:rr(t)[e],validated:r.validated});return lm(n)},lg=e=>Object.keys(rr(e)),fg=e=>Xr.pipeline([rr,Object.keys,Xr.map(async t=>[t,await Qo(t,e)]),Xr.all],e),pg=Z$((e,t)=>Xr.pipeline([rr,Xr.map(async(r,n)=>e(await Qo(n,t),n)),Xr.all],t)),ug=e=>rr(e).length,mg={parentId:"",parentDialect:"",includeEmbedded:!0},dg=(e,t={})=>{const r={...mg,...t},n=JSON.parse(JSON.stringify(e.schema,(l,f)=>{if(!Rt.isReference(f))return f;const h=Rt.value(f),d=typeof h.$schema=="string"?Lt(h.$schema,""):e.dialectId,y=Le(d,"embeddedToken");if(!(!r.includeEmbedded&&y in h))return Rt.value(f)})),s=Le(e.dialectId,"dynamicAnchorToken");Object.entries(e.dynamicAnchors).forEach(([l,f])=>{const h=Xo(f);Pt.assign(h,n,{[s]:l,...Pt.get(h,n)})});const a=Le(e.dialectId,"anchorToken");Object.entries(e.anchors).filter(([l])=>l!=="").forEach(([l,f])=>{Pt.assign(f,n,{[a]:l,...Pt.get(f,n)})});const i=Le(e.dialectId,"baseToken"),o=hg(r.parentId,e.id),c=r.parentDialect===e.dialectId?"":e.dialectId;return{...o&&{[i]:o},...c&&{$schema:c},...n}},hg=(e,t)=>{if(t.startsWith("file://")){const r=e.slice(7,e.lastIndexOf("/"));return e===""?"":eg(r,t.slice(7))}else return t};var Ca={setConfig:ng,getConfig:Le,add:Yo,get:cm,markValidated:ag,uri:pm,value:rr,getAnchorPointer:fm,typeOf:cg,has:og,step:Qo,keys:lg,entries:fg,map:pg,length:ug,toSchema:dg};class yg extends Error{constructor(t){super("Invalid Schema"),this.name=this.constructor.name,this.output=t}}var um=yg;const $g=Qe,vl=Qr.exports,{resolveUrl:gg}=Uo,mm=Jo,Gt=Ca,vg=um,dm=im,la="FLAG",Zo="BASIC",ec="DETAILED",tc="VERBOSE";let hm=ec,ym=!0;dm.addPlugin("application/schema+json",{parse:async e=>await e.json(),matcher:e=>e.endsWith(".schema.json")});const bg=async(e,t=void 0,r=void 0)=>{const n=await rc(e),s=(a,i)=>nc(n,mm.cons(a),i);return t===void 0?s:s(t,r)},rc=async e=>{const t={metaData:{}},r=await gm(e,t);return{ast:t,schemaUri:r}},nc=$g(({ast:e,schemaUri:t},r,n=la)=>{if(![la,Zo,ec,tc].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],a=vl.subscribe("result",Sg(n,s));return bm(t,r,e,{}),vl.unsubscribe(a),s[0]}),Sg=(e,t)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c}=s,l={keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const a=r.pop();for(;r[r.length-1]!=="result.start";){const i=r.pop(),o=[i];e===Zo&&(o.push(...i.errors),delete i.errors),(e===tc||e!==la&&!i.valid)&&a.errors.unshift(...o)}r[r.length-1]=a,t[0]=a}}},Ig=e=>{hm=e},wg=e=>{ym=e},sc={},os=e=>sc[e],$m=e=>e in sc,Og=(e,t)=>{sc[e]={collectEvaluatedItems:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&new Set,collectEvaluatedProperties:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&[],...t}},Yi={},Eg=(e,t)=>{Yi[e]=t},Js={},gm=async(e,t)=>{if(e=await vm(e),!$m(`${e.dialectId}#validate`)){const r=await Gt.get(e.dialectId);(Gt.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,a])=>{if(s in Yi)Object.entries(Yi[s]).forEach(([i,o])=>{Og(`${r.id}#${i}`,o)});else if(a)throw Error(`Missing required vocabulary: ${s}`)})}if(ym&&!e.validated){if(Gt.markValidated(e.id),!(e.dialectId in Js)){const s=await Gt.get(e.dialectId),a=await rc(s);Js[s.id]=nc(a)}const r=mm.cons(e.schema,e.id),n=Js[e.dialectId](r,hm);if(!n.valid)throw new vg(n)}return e.id in t.metaData||(t.metaData[e.id]={id:e.id,dynamicAnchors:e.dynamicAnchors,anchors:e.anchors}),os(`${e.dialectId}#validate`).compile(e,t)},vm=async e=>Gt.typeOf(e,"string")?vm(await Gt.get(Gt.value(e),e)):e,bm=(e,t,r,n)=>{const s=ac(e,r),a=gg(e,"");return os(s).interpret(e,t,r,{...r.metaData[a].dynamicAnchors,...n})},Pg=(e,t,r,n,s)=>{const a=ac(e,r);return os(a).collectEvaluatedProperties(e,t,r,n,s)},jg=(e,t,r,n,s)=>{const a=ac(e,r);return os(a).collectEvaluatedItems(e,t,r,n,s)},ac=(e,t)=>{if(!(e in t))throw Error(`No schema found at ${e}`);return t[e][0]},kg=(e,t="",r="")=>{const n=Gt.add(e,t,r);delete Js[n]};var Sm={validate:bg,compile:rc,interpret:nc,setMetaOutputFormat:Ig,setShouldMetaValidate:wg,FLAG:la,BASIC:Zo,DETAILED:ec,VERBOSE:tc,add:kg,getKeyword:os,hasKeyword:$m,defineVocabulary:Eg,compileSchema:gm,interpretSchema:bm,collectEvaluatedProperties:Pg,collectEvaluatedItems:jg,addMediaTypePlugin:dm.addPlugin};const xg=Ca,Ag=e=>xg.value(e),Cg=()=>!0;var _g={compile:Ag,interpret:Cg};const An=fe,Ar=Qr.exports,Wn=Sm,bl=Jo,Cr=Ca,Ng=async(e,t)=>{const r=Cr.uri(e);if(!(r in t)){t[r]=!1;const n=Cr.value(e);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${Cr.uri(e)}'`);t[r]=[`${e.dialectId}#validate`,Cr.uri(e),typeof n=="boolean"?n:await An.pipeline([Cr.entries,An.map(([s,a])=>[`${e.dialectId}#${s}`,a]),An.filter(([s])=>Wn.hasKeyword(s)&&s!==`${e.dialectId}#validate`),An.map(async([s,a])=>{const i=await Wn.getKeyword(s).compile(a,t,e);return[s,Cr.uri(a),i]}),An.all],e)]}return r},Tg=(e,t,r,n)=>{const[s,a,i]=r[e];Ar.publishSync("result.start");const o=typeof i=="boolean"?i:i.every(([c,l,f])=>{Ar.publishSync("result.start");const h=Wn.getKeyword(c).interpret(f,t,r,n);return Ar.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:bl.uri(t),valid:h,ast:f}),Ar.publishSync("result.end"),h});return Ar.publishSync("result",{keyword:s,absoluteKeywordLocation:a,instanceLocation:bl.uri(t),valid:o,ast:e}),Ar.publishSync("result.end"),o},Rg=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?[]:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedProperties")).reduce((i,[o,,c])=>{const l=i&&Wn.getKeyword(o).collectEvaluatedProperties(c,t,r,n);return l!==!1&&[...i,...l]},[])},qg=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?new Set:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedItems")).reduce((i,[o,,c])=>{const l=i!==!1&&Wn.getKeyword(o).collectEvaluatedItems(c,t,r,n);return l!==!1&&new Set([...i,...l])},new Set)};var Dg={compile:Ng,interpret:Tg,collectEvaluatedProperties:Rg,collectEvaluatedItems:qg};const Lg=_g,Mg=Dg;var Ug={metaData:Lg,validate:Mg};const Vg=Sm,Bg=Ca,Fg=Jo,Kg=Ko,Jg=Ug,zg=um;var j={Core:Vg,Schema:Bg,Instance:Fg,Reference:Kg,Keywords:Jg,InvalidSchemaError:zg};const{Core:Im,Schema:Cn,Instance:si}=j,Gg=async(e,t,r)=>{const n=await Cn.step("items",r),s=Cn.typeOf(n,"array")?Cn.length(n):Number.MAX_SAFE_INTEGER;return Cn.typeOf(e,"boolean")?[s,Cn.value(e)]:[s,await Im.compileSchema(e,t)]},Hg=([e,t],r,n,s)=>si.typeOf(r,"array")?typeof t=="string"?si.every((a,i)=>i<e||Im.interpretSchema(t,a,n,s),r):si.every((a,i)=>i<e?!0:t,r):!0;var Xg={compile:Gg,interpret:Hg};const{Core:wm,Schema:ai,Instance:Qi}=j,Wg=async(e,t,r)=>{const n=await ai.step("items",r);return[ai.typeOf(n,"array")?ai.length(n):Number.MAX_SAFE_INTEGER,await wm.compileSchema(e,t)]},Om=([e,t],r,n,s)=>Qi.typeOf(r,"array")?Qi.every((a,i)=>i<e||wm.interpretSchema(t,a,n,s),r):!0,Yg=(e,t,r,n)=>Om(e,t,r,n)&&new Set(Qi.map((s,a)=>a,t));var Qg={compile:Wg,interpret:Om,collectEvaluatedItems:Yg};const{Core:Em,Schema:Bt,Instance:Sl}=j,Zg=async(e,t,r)=>{const n=await Bt.step("properties",r),s=Bt.typeOf(n,"object")?Bt.keys(n):[],a=await Bt.step("patternProperties",r),i=Bt.typeOf(a,"object")?Bt.keys(a).map(o=>new RegExp(o)):[];return Bt.typeOf(e,"boolean")?[s,i,Bt.value(e)]:[s,i,await Em.compileSchema(e,t)]},ev=([e,t,r],n,s,a)=>{if(!Sl.typeOf(n,"object"))return!0;const i=Sl.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?i.every(([,o])=>Em.interpretSchema(r,o,s,a)):i.length===0||r};var tv={compile:Zg,interpret:ev};const{Core:Pm,Schema:_r,Instance:Il}=j,rv=async(e,t,r)=>{const n=await _r.step("properties",r),s=_r.typeOf(n,"object")?_r.keys(n):[],a=await _r.step("patternProperties",r),i=_r.typeOf(a,"object")?_r.keys(a).map(o=>new RegExp(o)):[];return[s,i,await Pm.compileSchema(e,t)]},jm=([e,t,r],n,s,a)=>Il.typeOf(n,"object")?Il.entries(n).filter(([i])=>!e.includes(i)&&!t.some(o=>o.test(i))).every(([,i])=>Pm.interpretSchema(r,i,s,a)):!0,nv=(e,t,r,n)=>jm(e,t,r,n)&&[new RegExp("")];var sv={compile:rv,interpret:jm,collectEvaluatedProperties:nv};const{Core:_a,Schema:av}=j,wl=fe,iv=(e,t)=>wl.pipeline([av.map(async r=>_a.compileSchema(await r,t)),wl.all],e),ov=(e,t,r,n)=>e.every(s=>_a.interpretSchema(s,t,r,n)),cv=(e,t,r,n)=>e.reduce((s,a)=>{const i=s&&_a.collectEvaluatedProperties(a,t,r,n);return i!==!1&&[...s,...i]},[]),lv=(e,t,r,n)=>e.reduce((s,a)=>{const i=s!==!1&&_a.collectEvaluatedItems(a,t,r,n);return i!==!1&&new Set([...s,...i])},new Set);var fv={compile:iv,interpret:ov,collectEvaluatedProperties:cv,collectEvaluatedItems:lv};const{Core:Na,Schema:pv}=j,Ol=fe,uv=(e,t)=>Ol.pipeline([pv.map(async r=>Na.compileSchema(await r,t)),Ol.all],e),mv=(e,t,r,n)=>e.filter(a=>Na.interpretSchema(a,t,r,n)).length>0,dv=(e,t,r,n)=>e.reduce((s,a)=>{const i=Na.collectEvaluatedProperties(a,t,r,n);return i!==!1?[...s||[],...i]:s},!1),hv=(e,t,r,n)=>e.reduce((s,a)=>{const i=Na.collectEvaluatedItems(a,t,r,n);return i!==!1?new Set([...s||[],...i]):s},!1);var yv={compile:uv,interpret:mv,collectEvaluatedProperties:dv,collectEvaluatedItems:hv},$v=Object.keys,El=JSON.stringify;function Vn(e,t){var r,n,s,a,i,o,c;if(c=typeof e,c==="string")return El(e);if(e===!0)return"true";if(e===!1)return"false";if(e===null)return"null";if(e instanceof Array){for(s="[",n=e.length-1,r=0;r<n;r++)s+=Vn(e[r],!1)+",";return n>-1&&(s+=Vn(e[r],!1)),s+"]"}if(e instanceof Object){if(typeof e.toJSON=="function")return Vn(e.toJSON(),t);for(a=$v(e).sort(),n=a.length,s="",r=0;r<n;)i=a[r],o=Vn(e[i],!0),o!==void 0&&(r&&s!==""&&(s+=","),s+=El(i)+":"+o),r++;return"{"+s+"}"}switch(c){case"function":case"undefined":return t?void 0:null;default:return isFinite(e)?e:null}}var Ut=function(e){return""+Vn(e,!1)};const{Schema:gv,Instance:vv}=j,km=Ut,bv=e=>km(gv.value(e)),Sv=(e,t)=>km(vv.value(t))===e;var Iv={compile:bv,interpret:Sv};const{Core:xm,Instance:Pl}=j,wv=(e,t)=>xm.compileSchema(e,t),Ov=(e,t,r,n)=>!Pl.typeOf(t,"array")||Pl.some(s=>xm.interpretSchema(e,s,r,n),t);var Ev={compile:wv,interpret:Ov};const{Core:ic,Schema:Nr,Instance:Zi}=j,Pv=async(e,t,r)=>{const n=await ic.compileSchema(e,t),s=await Nr.step("minContains",r),a=Nr.typeOf(s,"number")?Nr.value(s):1,i=await Nr.step("maxContains",r),o=Nr.typeOf(i,"number")?Nr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},Am=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!Zi.typeOf(n,"array"))return!0;const i=Zi.reduce((o,c)=>ic.interpretSchema(e,c,s,a)?o+1:o,0,n);return i>=t&&i<=r},jv=(e,t,r,n)=>Am(e,t,r,n)&&Zi.reduce((s,a,i)=>ic.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t);var kv={compile:Pv,interpret:Am,collectEvaluatedItems:jv};const{Core:xv,Schema:Av}=j,ii=fe,Cv=async(e,t)=>{await ii.pipeline([Av.entries,ii.map(([,r])=>xv.compileSchema(r,t)),ii.all],e)},_v=()=>!0;var Nv={compile:Cv,interpret:_v};const{Core:Cm,Schema:oi,Instance:jl}=j,ci=fe,Tv=(e,t)=>ci.pipeline([oi.entries,ci.map(async([r,n])=>[r,oi.typeOf(n,"array")?oi.value(n):await Cm.compileSchema(n,t)]),ci.all],e),Rv=(e,t,r,n)=>{const s=jl.value(t);return!jl.typeOf(t,"object")||e.every(([a,i])=>a in s?Array.isArray(i)?i.every(o=>o in s):Cm.interpretSchema(i,t,r,n):!0)};var qv={compile:Tv,interpret:Rv};const{Schema:kl,Instance:xl}=j,li=fe,Dv=e=>li.pipeline([kl.entries,li.map(([t,r])=>[t,kl.value(r)]),li.all],e),Lv=(e,t)=>{const r=xl.value(t);return!xl.typeOf(t,"object")||e.every(([n,s])=>!(n in r)||s.every(a=>a in r))};var Mv={compile:Dv,interpret:Lv};const{Core:oc,Schema:Uv,Instance:eo}=j,fi=fe,Vv=(e,t)=>fi.pipeline([Uv.entries,fi.map(async([r,n])=>[r,await oc.compileSchema(n,t)]),fi.all],e),Bv=(e,t,r,n)=>{const s=eo.value(t);return!eo.typeOf(t,"object")||e.every(([a,i])=>!(a in s)||oc.interpretSchema(i,t,r,n))},Fv=(e,t,r,n)=>e.reduce((s,[a,i])=>{if(!s||!eo.has(a,t))return s;const o=oc.collectEvaluatedProperties(i,t,r,n);return o!==!1&&s.concat(o)},[]);var Kv={compile:Vv,interpret:Bv,collectEvaluatedProperties:Fv};const{Schema:Jv,Instance:zv}=j,_m=Ut,Gv=e=>Jv.value(e).map(_m),Hv=(e,t)=>e.some(r=>_m(zv.value(t))===r);var Xv={compile:Gv,interpret:Hv};const{Schema:Wv,Instance:Al}=j,Yv=async e=>Wv.value(e),Qv=(e,t)=>!Al.typeOf(t,"number")||Al.value(t)<e;var Zv={compile:Yv,interpret:Qv};const{Schema:eb,Instance:Cl}=j,tb=async e=>eb.value(e),rb=(e,t)=>!Cl.typeOf(t,"number")||Cl.value(t)>e;var nb={compile:tb,interpret:rb};const{Core:Ta}=j,sb=(e,t)=>Ta.compileSchema(e,t),ab=(e,t,r,n)=>(Ta.interpretSchema(e,t,r,n),!0),ib=(e,t,r,n)=>Ta.collectEvaluatedProperties(e,t,r,n)||[],ob=(e,t,r,n)=>Ta.collectEvaluatedItems(e,t,r,n)||new Set;var cb={compile:sb,interpret:ab,collectEvaluatedProperties:ib,collectEvaluatedItems:ob};const{Core:Zr,Schema:_l}=j,lb=async(e,t,r)=>{if(_l.has("if",r)){const n=await _l.step("if",r);return[await Zr.compileSchema(n,t),await Zr.compileSchema(e,t)]}else return[]},fb=([e,t],r,n,s)=>e===void 0||!cc(e,r,n,s)||Zr.interpretSchema(t,r,n,s),cc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>Zr.getKeyword(a).interpret(i,t,r,n))},pb=([e,t],r,n,s)=>e===void 0||!cc(e,r,n,s)?[]:Zr.collectEvaluatedProperties(t,r,n,s),ub=([e,t],r,n,s)=>e===void 0||!cc(e,r,n,s)?new Set:Zr.collectEvaluatedItems(t,r,n,s);var mb={compile:lb,interpret:fb,collectEvaluatedProperties:pb,collectEvaluatedItems:ub};const{Core:en,Schema:Nl}=j,db=async(e,t,r)=>{if(Nl.has("if",r)){const n=await Nl.step("if",r);return[await en.compileSchema(n,t),await en.compileSchema(e,t)]}else return[]},hb=([e,t],r,n,s)=>e===void 0||lc(e,r,n,s)||en.interpretSchema(t,r,n,s),lc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>en.getKeyword(a).interpret(i,t,r,n))},yb=([e,t],r,n,s)=>e===void 0||lc(e,r,n,s)?[]:en.collectEvaluatedProperties(t,r,n,s),$b=([e,t],r,n,s)=>e===void 0||lc(e,r,n,s)?new Set:en.collectEvaluatedItems(t,r,n,s);var gb={compile:db,interpret:hb,collectEvaluatedProperties:yb,collectEvaluatedItems:$b};const{Core:fa,Schema:Tl,Instance:zs}=j,vb=async(e,t)=>{if(Tl.typeOf(e,"array")){const r=await Tl.map(n=>fa.compileSchema(n,t),e);return Promise.all(r)}else return fa.compileSchema(e,t)},Nm=(e,t,r,n)=>zs.typeOf(t,"array")?typeof e=="string"?zs.every(s=>fa.interpretSchema(e,s,r,n),t):zs.every((s,a)=>!(a in e)||fa.interpretSchema(e[a],s,r,n),t):!0,bb=(e,t,r,n)=>Nm(e,t,r,n)&&(typeof e=="string"?new Set(zs.map((s,a)=>a,t)):new Set(e.map((s,a)=>a)));var Sb={compile:vb,interpret:Nm,collectEvaluatedItems:bb};const{Core:Tm,Schema:pi,Instance:to}=j,Ib=async(e,t,r)=>{const n=await pi.step("prefixItems",r);return[pi.typeOf(n,"array")?pi.length(n):0,await Tm.compileSchema(e,t)]},Rm=([e,t],r,n,s)=>to.typeOf(r,"array")?to.every((a,i)=>i<e||Tm.interpretSchema(t,a,n,s),r):!0,wb=(e,t,r,n)=>Rm(e,t,r,n)&&new Set(to.map((s,a)=>a,t));var Ob={compile:Ib,interpret:Rm,collectEvaluatedItems:wb};const{Schema:Eb,Instance:Rl}=j,Pb=e=>Eb.value(e),jb=(e,t)=>!Rl.typeOf(t,"array")||Rl.length(t)<=e;var kb={compile:Pb,interpret:jb};const{Schema:xb,Instance:ql}=j,Ab=e=>xb.value(e),Cb=(e,t)=>!ql.typeOf(t,"string")||ql.length(t)<=e;var _b={compile:Ab,interpret:Cb};const{Schema:Nb,Instance:Dl}=j,Tb=e=>Nb.value(e),Rb=(e,t)=>!Dl.typeOf(t,"string")||[...Dl.value(t)].length<=e;var qb={compile:Tb,interpret:Rb};const{Schema:Db,Instance:Ll}=j,Lb=e=>Db.value(e),Mb=(e,t)=>!Ll.typeOf(t,"object")||Ll.keys(t).length<=e;var Ub={compile:Lb,interpret:Mb};const{Schema:ui,Instance:Ml}=j,Vb=async(e,t,r)=>{const n=await ui.step("exclusiveMaximum",r),s=ui.value(n);return[ui.value(e),s]},Bb=([e,t],r)=>{if(!Ml.typeOf(r,"number"))return!0;const n=Ml.value(r);return t?n<e:n<=e};var Fb={compile:Vb,interpret:Bb};const{Schema:Kb,Instance:Ul}=j,Jb=async e=>Kb.value(e),zb=(e,t)=>!Ul.typeOf(t,"number")||Ul.value(t)<=e;var Gb={compile:Jb,interpret:zb};const{Schema:Hb,Instance:Vl}=j,Xb=e=>Hb.value(e),Wb=(e,t)=>!Vl.typeOf(t,"array")||Vl.length(t)>=e;var Yb={compile:Xb,interpret:Wb};const{Schema:Qb,Instance:Bl}=j,Zb=e=>Qb.value(e),e1=(e,t)=>!Bl.typeOf(t,"string")||Bl.length(t)>=e;var t1={compile:Zb,interpret:e1};const{Schema:r1,Instance:Fl}=j,n1=e=>r1.value(e),s1=(e,t)=>!Fl.typeOf(t,"string")||[...Fl.value(t)].length>=e;var a1={compile:n1,interpret:s1};const{Schema:i1,Instance:Kl}=j,o1=e=>i1.value(e),c1=(e,t)=>!Kl.typeOf(t,"object")||Kl.keys(t).length>=e;var l1={compile:o1,interpret:c1};const{Schema:mi,Instance:Jl}=j,f1=async(e,t,r)=>{const n=await mi.step("exclusiveMinimum",r),s=mi.value(n);return[mi.value(e),s]},p1=([e,t],r)=>{if(!Jl.typeOf(r,"number"))return!0;const n=Jl.value(r);return t?n>e:n>=e};var u1={compile:f1,interpret:p1};const{Schema:m1,Instance:zl}=j,d1=async e=>m1.value(e),h1=(e,t)=>!zl.typeOf(t,"number")||zl.value(t)>=e;var y1={compile:d1,interpret:h1};const{Schema:$1,Instance:Gl}=j,g1=e=>$1.value(e),v1=(e,t)=>{if(!Gl.typeOf(t,"number"))return!0;const r=Gl.value(t)%e;return Hl(0,r)||Hl(e,r)},Hl=(e,t)=>Math.abs(e-t)<11920929e-14;var b1={compile:g1,interpret:v1};const{Core:qm}=j,S1=qm.compileSchema,I1=(e,t,r,n)=>!qm.interpretSchema(e,t,r,n);var w1={compile:S1,interpret:I1};const{Core:Ra,Schema:O1}=j,E1=async(e,t)=>{const r=await O1.map(n=>Ra.compileSchema(n,t),e);return Promise.all(r)},P1=(e,t,r,n)=>{let s=0;for(const a of e)if(Ra.interpretSchema(a,t,r,n)&&s++,s>1)break;return s===1},j1=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ra.collectEvaluatedProperties(i,t,r,n);return o?s++===0&&o:a},!1)},k1=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ra.collectEvaluatedItems(i,t,r,n);return o?s++===0&&o:a},!1)};var x1={compile:E1,interpret:P1,collectEvaluatedProperties:j1,collectEvaluatedItems:k1};const{Schema:A1,Instance:Xl}=j,C1=e=>new RegExp(A1.value(e),"u"),_1=(e,t)=>!Xl.typeOf(t,"string")||e.test(Xl.value(t));var N1={compile:C1,interpret:_1};const{Core:Dm,Schema:T1,Instance:Wl}=j,di=fe,R1=(e,t)=>di.pipeline([T1.entries,di.map(async([r,n])=>[new RegExp(r,"u"),await Dm.compileSchema(n,t)]),di.all],e),Lm=(e,t,r,n)=>!Wl.typeOf(t,"object")||e.every(([s,a])=>Wl.entries(t).filter(([i])=>s.test(i)).every(([,i])=>Dm.interpretSchema(a,i,r,n))),q1=(e,t,r,n)=>Lm(e,t,r,n)&&e.map(([s])=>s);var D1={compile:R1,interpret:Lm,collectEvaluatedProperties:q1};const L1=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,M1=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),U1=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Mm={isObject:L1,escapeRegExp:M1,splitUrl:U1};const{Core:Um,Schema:V1,Instance:Yl}=j,Ql=fe,{escapeRegExp:B1}=Mm,F1=(e,t)=>Ql.pipeline([V1.entries,Ql.reduce(async(r,[n,s])=>(r[n]=await Um.compileSchema(s,t),r),Object.create(null))],e),Vm=(e,t,r,n)=>!Yl.typeOf(t,"object")||Yl.entries(t).filter(([s])=>s in e).every(([s,a])=>Um.interpretSchema(e[s],a,r,n)),K1=(e,t,r,n)=>Vm(e,t,r,n)&&Object.keys(e).map(s=>new RegExp(`^${B1(s)}$`));var J1={compile:F1,interpret:Vm,collectEvaluatedProperties:K1};const{Core:Bm,Instance:hi}=j,z1=(e,t)=>Bm.compileSchema(e,t),G1=(e,t,r,n)=>!hi.typeOf(t,"object")||hi.keys(t).every(s=>Bm.interpretSchema(e,hi.cons(s),r,n));var H1={compile:z1,interpret:G1};const{Core:Yn,Schema:Gs}=j,{splitUrl:X1}=Mm,W1=async(e,t)=>{const[,r]=X1(Gs.value(e)),n=await Gs.get(Gs.value(e),e);return await Yn.compileSchema(n,t),[n.id,r]},Y1=([e,t],r,n,s)=>{if(t in n.metaData[e].dynamicAnchors)return Yn.interpretSchema(s[t],r,n,s);{const a=Gs.getAnchorPointer(n.metaData[e],t);return Yn.interpretSchema(`${e}#${encodeURI(a)}`,r,n,s)}},Q1=Yn.collectEvaluatedProperties,Z1=Yn.collectEvaluatedItems;var e0={compile:W1,interpret:Y1,collectEvaluatedProperties:Q1,collectEvaluatedItems:Z1};const{Core:qa,Schema:Zl}=j,t0=async(e,t)=>{const r=await Zl.get(Zl.value(e),e);return qa.compileSchema(r,t)},r0=qa.interpretSchema,n0=qa.collectEvaluatedProperties,s0=qa.collectEvaluatedItems;var a0={compile:t0,interpret:r0,collectEvaluatedProperties:n0,collectEvaluatedItems:s0};const{Schema:i0,Instance:ef}=j,o0=e=>i0.value(e),c0=(e,t)=>!ef.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(ef.value(t),r));var l0={compile:o0,interpret:c0};const{Core:Fm,Schema:f0,Instance:tf}=j,rf=fe,p0=(e,t)=>rf.pipeline([f0.map(r=>Fm.compileSchema(r,t)),rf.all],e),Km=(e,t,r,n)=>tf.typeOf(t,"array")?tf.every((s,a)=>!(a in e)||Fm.interpretSchema(e[a],s,r,n),t):!0,u0=(e,t,r,n)=>Km(e,t,r,n)&&new Set(e.map((s,a)=>a));var m0={compile:p0,interpret:Km,collectEvaluatedItems:u0};const{Schema:d0,Instance:nf}=j,h0=e=>d0.value(e),y0=(e,t)=>typeof e=="string"?nf.typeOf(t,e):e.some(nf.typeOf(t));var $0={compile:h0,interpret:y0};const{Core:ro,Schema:g0,Instance:Hs}=j,v0=async(e,t,r)=>[g0.uri(r),await ro.compileSchema(e,t)],Jm=([e,t],r,n,s)=>{if(!Hs.typeOf(r,"array"))return!0;const a=ro.collectEvaluatedItems(e,r,n,s,!0);return a===!1||Hs.every((i,o)=>a.has(o)||ro.interpretSchema(t,Hs.step(o,r),n,s),r)},b0=(e,t,r,n)=>Jm(e,t,r,n)&&new Set(Hs.map((s,a)=>a,t));var S0={compile:v0,interpret:Jm,collectEvaluatedItems:b0};const{Core:no,Schema:I0,Instance:sf}=j,w0=async(e,t,r)=>[I0.uri(r),await no.compileSchema(e,t)],zm=([e,t],r,n,s)=>{if(!sf.typeOf(r,"object"))return!0;const a=no.collectEvaluatedProperties(e,r,n,s,!0);return!a||sf.entries(r).filter(([i])=>!a.some(o=>i.match(o))).every(([,i])=>no.interpretSchema(t,i,n,s))},O0=(e,t,r,n)=>zm(e,t,r,n)&&[new RegExp("")];var E0={compile:w0,interpret:zm,collectEvaluatedProperties:O0};const{Schema:P0,Instance:yi}=j,j0=Ut,k0=e=>P0.value(e),x0=(e,t)=>{if(!yi.typeOf(t,"array")||e===!1)return!0;const r=yi.map(n=>j0(yi.value(n)),t);return new Set(r).size===r.length};var A0={compile:k0,interpret:x0};const{Keywords:af}=j;var mn={additionalItems:Xg,additionalItems6:Qg,additionalProperties:tv,additionalProperties6:sv,allOf:fv,anyOf:yv,const:Iv,contains:Ev,containsMinContainsMaxContains:kv,definitions:Nv,dependencies:qv,dependentRequired:Mv,dependentSchemas:Kv,enum:Xv,exclusiveMaximum:Zv,exclusiveMinimum:nb,if:cb,then:mb,else:gb,items:Sb,items202012:Ob,maxItems:kb,maxLength:_b,maxLength6:qb,maxProperties:Ub,maximumExclusiveMaximum:Fb,maximum:Gb,metaData:af.metaData,minItems:Yb,minLength:t1,minLength6:a1,minProperties:l1,minimumExclusiveMinimum:u1,minimum:y1,multipleOf:b1,not:w1,oneOf:x1,pattern:N1,patternProperties:D1,properties:J1,propertyNames:H1,dynamicRef:e0,ref:a0,required:l0,tupleItems:m0,type:$0,unevaluatedItems:S0,unevaluatedProperties:E0,uniqueItems:A0,validate:af.validate},C0=`{
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
}`;const{Core:_0,Schema:cs}=j,me=mn,N0=C0,ls="http://json-schema.org/draft-04/schema";cs.setConfig(ls,"baseToken","id");cs.setConfig(ls,"embeddedToken","id");cs.setConfig(ls,"anchorToken","id");cs.setConfig(ls,"jrefToken","$ref");cs.add(JSON.parse(N0));_0.defineVocabulary(ls,{validate:me.validate,additionalItems:me.additionalItems,additionalProperties:me.additionalProperties,allOf:me.allOf,anyOf:me.anyOf,default:me.metaData,definitions:me.definitions,dependencies:me.dependencies,description:me.metaData,enum:me.enum,format:me.metaData,items:me.items,maxItems:me.maxItems,maxLength:me.maxLength,maxProperties:me.maxProperties,maximum:me.maximumExclusiveMaximum,minItems:me.minItems,minLength:me.minLength,minProperties:me.minProperties,minimum:me.minimumExclusiveMinimum,multipleOf:me.multipleOf,not:me.not,oneOf:me.oneOf,pattern:me.pattern,patternProperties:me.patternProperties,properties:me.properties,required:me.required,title:me.metaData,type:me.type,uniqueItems:me.uniqueItems});var T0=`{
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
}`;const{Core:R0,Schema:fs}=j,ie=mn,q0=T0,ps="http://json-schema.org/draft-06/schema";fs.setConfig(ps,"baseToken","$id");fs.setConfig(ps,"embeddedToken","$id");fs.setConfig(ps,"anchorToken","$id");fs.setConfig(ps,"jrefToken","$ref");fs.add(JSON.parse(q0));R0.defineVocabulary(ps,{validate:ie.validate,additionalItems:ie.additionalItems6,additionalProperties:ie.additionalProperties6,allOf:ie.allOf,anyOf:ie.anyOf,const:ie.const,contains:ie.contains,default:ie.metaData,definitions:ie.definitions,dependencies:ie.dependencies,description:ie.metaData,enum:ie.enum,examples:ie.metaData,exclusiveMaximum:ie.exclusiveMaximum,exclusiveMinimum:ie.exclusiveMinimum,format:ie.metaData,items:ie.items,maxItems:ie.maxItems,maxLength:ie.maxLength6,maxProperties:ie.maxProperties,maximum:ie.maximum,minItems:ie.minItems,minLength:ie.minLength6,minProperties:ie.minProperties,minimum:ie.minimum,multipleOf:ie.multipleOf,not:ie.not,oneOf:ie.oneOf,pattern:ie.pattern,patternProperties:ie.patternProperties,properties:ie.properties,propertyNames:ie.propertyNames,required:ie.required,title:ie.metaData,type:ie.type,uniqueItems:ie.uniqueItems});var D0=`{
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
}`;const{Core:L0,Schema:us}=j,ne=mn,M0=D0,ms="http://json-schema.org/draft-07/schema";us.setConfig(ms,"baseToken","$id");us.setConfig(ms,"embeddedToken","$id");us.setConfig(ms,"anchorToken","$id");us.setConfig(ms,"jrefToken","$ref");us.add(JSON.parse(M0));L0.defineVocabulary(ms,{validate:ne.validate,additionalItems:ne.additionalItems6,additionalProperties:ne.additionalProperties6,allOf:ne.allOf,anyOf:ne.anyOf,const:ne.const,contains:ne.contains,default:ne.metaData,definitions:ne.definitions,dependencies:ne.dependencies,description:ne.metaData,enum:ne.enum,exclusiveMaximum:ne.exclusiveMaximum,exclusiveMinimum:ne.exclusiveMinimum,format:ne.metaData,if:ne.if,then:ne.then,else:ne.else,items:ne.items,maxItems:ne.maxItems,maxLength:ne.maxLength6,maxProperties:ne.maxProperties,maximum:ne.maximum,minItems:ne.minItems,minLength:ne.minLength6,minProperties:ne.minProperties,minimum:ne.minimum,multipleOf:ne.multipleOf,not:ne.not,oneOf:ne.oneOf,pattern:ne.pattern,patternProperties:ne.patternProperties,properties:ne.properties,propertyNames:ne.propertyNames,readOnly:ne.metaData,required:ne.required,title:ne.metaData,type:ne.type,uniqueItems:ne.uniqueItems,writeOnly:ne.metaData});var U0=`{
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
}`,V0=`{
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
}`,B0=`{
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
}`,F0=`{
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
}`,K0=`{
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
}`,J0=`{
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
}`,z0=`{
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
}`;const{Core:ds,Schema:Ze}=j,J=mn,G0=U0,H0=V0,X0=B0,W0=F0,Y0=K0,Q0=J0,Z0=z0,dn="https://json-schema.org/draft/2019-09/vocab/core";Ze.setConfig(dn,"baseToken","$id");Ze.setConfig(dn,"embeddedToken","$id");Ze.setConfig(dn,"anchorToken","$anchor");Ze.setConfig(dn,"recursiveAnchorToken","$recursiveAnchor");Ze.setConfig(dn,"vocabularyToken","$vocabulary");Ze.setConfig(dn,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);Ze.add(JSON.parse(G0));Ze.add(JSON.parse(H0));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:J.validate,$defs:J.definitions,$recursiveRef:J.dynamicRef,$ref:J.ref});Ze.add(JSON.parse(X0));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:J.additionalItems6,additionalProperties:J.additionalProperties6,allOf:J.allOf,anyOf:J.anyOf,contains:J.containsMinContainsMaxContains,dependentSchemas:J.dependentSchemas,if:J.if,then:J.then,else:J.else,items:J.items,not:J.not,oneOf:J.oneOf,patternProperties:J.patternProperties,properties:J.properties,propertyNames:J.propertyNames,unevaluatedItems:J.unevaluatedItems,unevaluatedProperties:J.unevaluatedProperties});Ze.add(JSON.parse(W0));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:J.const,dependentRequired:J.dependentRequired,enum:J.enum,exclusiveMaximum:J.exclusiveMaximum,exclusiveMinimum:J.exclusiveMinimum,maxItems:J.maxItems,maxLength:J.maxLength6,maxProperties:J.maxProperties,maximum:J.maximum,minItems:J.minItems,minLength:J.minLength6,minProperties:J.minProperties,minimum:J.minimum,multipleOf:J.multipleOf,pattern:J.pattern,required:J.required,type:J.type,uniqueItems:J.uniqueItems});Ze.add(JSON.parse(Y0));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:J.metaData,deprecated:J.metaData,description:J.metaData,examples:J.metaData,readOnly:J.metaData,title:J.metaData,writeOnly:J.metaData});Ze.add(JSON.parse(Q0));Ze.add(JSON.parse(Z0));ds.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:J.metaData,contentMediaType:J.metaData,contentSchema:J.metaData});var eS=`{
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
}`,tS=`{
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
}`,rS=`{
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
}`,nS=`{
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
}`,sS=`{
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
}`,aS=`{
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
}`,iS=`{
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
}`,oS=`{
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
}`,cS=`{
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
}`;const{Core:vr,Schema:Je}=j,B=mn,lS=eS,fS=tS,pS=rS,uS=nS,mS=sS,dS=aS,hS=iS,yS=oS,$S=cS,hn="https://json-schema.org/draft/2020-12/vocab/core";Je.setConfig(hn,"baseToken","$id");Je.setConfig(hn,"embeddedToken","$id");Je.setConfig(hn,"anchorToken","$anchor");Je.setConfig(hn,"dynamicAnchorToken","$dynamicAnchor");Je.setConfig(hn,"vocabularyToken","$vocabulary");Je.setConfig(hn,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);Je.add(JSON.parse(lS));Je.add(JSON.parse(fS));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:B.validate,$defs:B.definitions,$dynamicRef:B.dynamicRef,$ref:B.ref});Je.add(JSON.parse(pS));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:B.additionalProperties6,allOf:B.allOf,anyOf:B.anyOf,contains:B.containsMinContainsMaxContains,dependentSchemas:B.dependentSchemas,if:B.if,then:B.then,else:B.else,items:B.items202012,not:B.not,oneOf:B.oneOf,patternProperties:B.patternProperties,prefixItems:B.tupleItems,properties:B.properties,propertyNames:B.propertyNames});Je.add(JSON.parse(uS));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:B.const,dependentRequired:B.dependentRequired,enum:B.enum,exclusiveMaximum:B.exclusiveMaximum,exclusiveMinimum:B.exclusiveMinimum,maxItems:B.maxItems,maxLength:B.maxLength6,maxProperties:B.maxProperties,maximum:B.maximum,minItems:B.minItems,minLength:B.minLength6,minProperties:B.minProperties,minimum:B.minimum,multipleOf:B.multipleOf,pattern:B.pattern,required:B.required,type:B.type,uniqueItems:B.uniqueItems});Je.add(JSON.parse(mS));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:B.metaData,deprecated:B.metaData,description:B.metaData,examples:B.metaData,readOnly:B.metaData,title:B.metaData,writeOnly:B.metaData});Je.add(JSON.parse(dS));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:B.metaData});Je.add(JSON.parse(hS));Je.add(JSON.parse(yS));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:B.metaData,contentMediaType:B.metaData,contentSchema:B.metaData});Je.add(JSON.parse($S));vr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:B.unevaluatedItems,unevaluatedProperties:B.unevaluatedProperties});const{Core:ct,Schema:gS,InvalidSchemaError:vS}=j,bS=mn;var Ce={add:ct.add,get:gS.get,validate:ct.validate,compile:ct.compile,interpret:ct.interpret,setMetaOutputFormat:ct.setMetaOutputFormat,setShouldMetaValidate:ct.setShouldMetaValidate,addMediaTypePlugin:ct.addMediaTypePlugin,FLAG:ct.FLAG,BASIC:ct.BASIC,DETAILED:ct.DETAILED,VERBOSE:ct.VERBOSE,Keywords:bS,InvalidSchemaError:vS};Ce.add;Ce.get;Ce.validate;Ce.compile;Ce.interpret;Ce.setMetaOutputFormat;Ce.setShouldMetaValidate;Ce.addMediaTypePlugin;Ce.FLAG;Ce.BASIC;Ce.DETAILED;Ce.VERBOSE;Ce.Keywords;Ce.InvalidSchemaError;var Gm={exports:{}};(function(e){(function(t,r){e.exports?e.exports=r():t.moo=r()})(Mo,function(){var t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function s(I){return I&&r.call(I)==="[object RegExp]"}function a(I){return I&&typeof I=="object"&&!s(I)&&!Array.isArray(I)}function i(I){return I.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(I){var _=new RegExp("|"+I);return _.exec("").length-1}function c(I){return"("+I+")"}function l(I){if(!I.length)return"(?!)";var _=I.map(function(N){return"(?:"+N+")"}).join("|");return"(?:"+_+")"}function f(I){if(typeof I=="string")return"(?:"+i(I)+")";if(s(I)){if(I.ignoreCase)throw new Error("RegExp /i flag not allowed");if(I.global)throw new Error("RegExp /g flag is implied");if(I.sticky)throw new Error("RegExp /y flag is implied");if(I.multiline)throw new Error("RegExp /m flag is implied");return I.source}else throw new Error("Not a pattern: "+I)}function h(I){for(var _=Object.getOwnPropertyNames(I),N=[],R=0;R<_.length;R++){var H=_[R],q=I[H],Q=[].concat(q);if(H==="include"){for(var ye=0;ye<Q.length;ye++)N.push({include:Q[ye]});continue}var ge=[];Q.forEach(function(K){a(K)?(ge.length&&N.push(y(H,ge)),N.push(y(H,K)),ge=[]):ge.push(K)}),ge.length&&N.push(y(H,ge))}return N}function d(I){for(var _=[],N=0;N<I.length;N++){var R=I[N];if(R.include){for(var H=[].concat(R.include),q=0;q<H.length;q++)_.push({include:H[q]});continue}if(!R.type)throw new Error("Rule has no type: "+JSON.stringify(R));_.push(y(R.type,R))}return _}function y(I,_){if(a(_)||(_={match:_}),_.include)throw new Error("Matching rules cannot also include states");var N={defaultType:I,lineBreaks:!!_.error||!!_.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var R in _)t.call(_,R)&&(N[R]=_[R]);if(typeof N.type=="string"&&I!==N.type)throw new Error("Type transform cannot be a string (type '"+N.type+"' for token '"+I+"')");var H=N.match;return N.match=Array.isArray(H)?H:H?[H]:[],N.match.sort(function(q,Q){return s(q)&&s(Q)?0:s(Q)?-1:s(q)?1:Q.length-q.length}),N}function P(I){return Array.isArray(I)?d(I):h(I)}var u=y("error",{lineBreaks:!0,shouldThrow:!0});function m(I,_){for(var N=null,R=Object.create(null),H=!0,q=null,Q=[],ye=[],ge=0;ge<I.length;ge++)I[ge].fallback&&(H=!1);for(var ge=0;ge<I.length;ge++){var K=I[ge];if(K.include)throw new Error("Inheritance is not allowed in stateless lexers");if(K.error||K.fallback){if(N)throw!K.fallback==!N.fallback?new Error("Multiple "+(K.fallback?"fallback":"error")+" rules not allowed (for token '"+K.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+K.defaultType+"')");N=K}var Pe=K.match.slice();if(H)for(;Pe.length&&typeof Pe[0]=="string"&&Pe[0].length===1;){var ot=Pe.shift();R[ot.charCodeAt(0)]=K}if(K.pop||K.push||K.next){if(!_)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+K.defaultType+"')");if(K.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+K.defaultType+"')")}if(Pe.length!==0){H=!1,Q.push(K);for(var je=0;je<Pe.length;je++){var He=Pe[je];if(!!s(He)){if(q===null)q=He.unicode;else if(q!==He.unicode&&K.fallback===!1)throw new Error("If one rule is /u then all must be")}}var Xe=l(Pe.map(f)),he=new RegExp(Xe);if(he.test(""))throw new Error("RegExp matches empty string: "+he);var Z=o(Xe);if(Z>0)throw new Error("RegExp has capture groups: "+he+`
Use (?: \u2026 ) instead`);if(!K.lineBreaks&&he.test(`
`))throw new Error("Rule should declare lineBreaks: "+he);ye.push(c(Xe))}}var ce=N&&N.fallback,$e=n&&!ce?"ym":"gm",Ie=n||ce?"":"|";q===!0&&($e+="u");var We=new RegExp(l(ye)+Ie,$e);return{regexp:We,groups:Q,fast:R,error:N||u}}function v(I){var _=m(P(I));return new S({start:_},"start")}function O(I,_,N){var R=I&&(I.push||I.next);if(R&&!N[R])throw new Error("Missing state '"+R+"' (in token '"+I.defaultType+"' of state '"+_+"')");if(I&&I.pop&&+I.pop!=1)throw new Error("pop must be 1 (in token '"+I.defaultType+"' of state '"+_+"')")}function b(I,_){var N=I.$all?P(I.$all):[];delete I.$all;var R=Object.getOwnPropertyNames(I);_||(_=R[0]);for(var H=Object.create(null),q=0;q<R.length;q++){var Q=R[q];H[Q]=P(I[Q]).concat(N)}for(var q=0;q<R.length;q++)for(var Q=R[q],ye=H[Q],ge=Object.create(null),K=0;K<ye.length;K++){var Pe=ye[K];if(!!Pe.include){var ot=[K,1];if(Pe.include!==Q&&!ge[Pe.include]){ge[Pe.include]=!0;var je=H[Pe.include];if(!je)throw new Error("Cannot include nonexistent state '"+Pe.include+"' (in state '"+Q+"')");for(var He=0;He<je.length;He++){var Xe=je[He];ye.indexOf(Xe)===-1&&ot.push(Xe)}}ye.splice.apply(ye,ot),K--}}for(var he=Object.create(null),q=0;q<R.length;q++){var Q=R[q];he[Q]=m(H[Q],!0)}for(var q=0;q<R.length;q++){for(var Z=R[q],ce=he[Z],$e=ce.groups,K=0;K<$e.length;K++)O($e[K],Z,he);for(var Ie=Object.getOwnPropertyNames(ce.fast),K=0;K<Ie.length;K++)O(ce.fast[Ie[K]],Z,he)}return new S(he,_)}function k(I){for(var _=Object.create(null),N=Object.create(null),R=Object.getOwnPropertyNames(I),H=0;H<R.length;H++){var q=R[H],Q=I[q],ye=Array.isArray(Q)?Q:[Q];ye.forEach(function(je){if((N[je.length]=N[je.length]||[]).push(je),typeof je!="string")throw new Error("keyword must be string (in keyword '"+q+"')");_[je]=q})}function ge(je){return JSON.stringify(je)}var K="";K+=`switch (value.length) {
`;for(var Pe in N){var ot=N[Pe];K+="case "+Pe+`:
`,K+=`switch (value) {
`,ot.forEach(function(je){var He=_[je];K+="case "+ge(je)+": return "+ge(He)+`
`}),K+=`}
`}return K+=`}
`,Function("value",K)}var S=function(I,_){this.startState=_,this.states=I,this.buffer="",this.stack=[],this.reset()};S.prototype.reset=function(I,_){return this.buffer=I||"",this.index=0,this.line=_?_.line:1,this.col=_?_.col:1,this.queuedToken=_?_.queuedToken:null,this.queuedThrow=_?_.queuedThrow:null,this.setState(_?_.state:this.startState),this.stack=_&&_.stack?_.stack.slice():[],this},S.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},S.prototype.setState=function(I){if(!(!I||this.state===I)){this.state=I;var _=this.states[I];this.groups=_.groups,this.error=_.error,this.re=_.regexp,this.fast=_.fast}},S.prototype.popState=function(){this.setState(this.stack.pop())},S.prototype.pushState=function(I){this.stack.push(this.state),this.setState(I)};var x=n?function(I,_){return I.exec(_)}:function(I,_){var N=I.exec(_);return N[0].length===0?null:N};S.prototype._getGroup=function(I){for(var _=this.groups.length,N=0;N<_;N++)if(I[N+1]!==void 0)return this.groups[N];throw new Error("Cannot find token type for matched text")};function G(){return this.value}if(S.prototype.next=function(){var I=this.index;if(this.queuedGroup){var _=this._token(this.queuedGroup,this.queuedText,I);return this.queuedGroup=null,this.queuedText="",_}var N=this.buffer;if(I!==N.length){var Q=this.fast[N.charCodeAt(I)];if(Q)return this._token(Q,N.charAt(I),I);var R=this.re;R.lastIndex=I;var H=x(R,N),q=this.error;if(H==null)return this._token(q,N.slice(I,N.length),I);var Q=this._getGroup(H),ye=H[0];return q.fallback&&H.index!==I?(this.queuedGroup=Q,this.queuedText=ye,this._token(q,N.slice(I,H.index),I)):this._token(Q,ye,I)}},S.prototype._token=function(I,_,N){var R=0;if(I.lineBreaks){var H=/\n/g,q=1;if(_===`
`)R=1;else for(;H.exec(_);)R++,q=H.lastIndex}var Q={type:typeof I.type=="function"&&I.type(_)||I.defaultType,value:typeof I.value=="function"?I.value(_):_,text:_,toString:G,offset:N,lineBreaks:R,line:this.line,col:this.col},ye=_.length;if(this.index+=ye,this.line+=R,R!==0?this.col=ye-q+1:this.col+=ye,I.shouldThrow)throw new Error(this.formatError(Q,"invalid syntax"));return I.pop?this.popState():I.push?this.pushState(I.push):I.next&&this.setState(I.next),Q},typeof Symbol<"u"&&Symbol.iterator){var re=function(I){this.lexer=I};re.prototype.next=function(){var I=this.lexer.next();return{value:I,done:!I}},re.prototype[Symbol.iterator]=function(){return this},S.prototype[Symbol.iterator]=function(){return new re(this)}}return S.prototype.formatError=function(I,_){if(I==null)var N=this.buffer.slice(this.index),I={text:N,offset:this.index,lineBreaks:N.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var R=Math.max(0,I.offset-I.col+1),H=I.lineBreaks?I.text.indexOf(`
`):I.text.length,q=this.buffer.substring(R,I.offset+H);return _+=" at line "+I.line+" col "+I.col+`:

`,_+="  "+q+`
`,_+="  "+Array(I.col).join(" ")+"^",_},S.prototype.clone=function(){return new S(this.states,this.state)},S.prototype.has=function(I){return!0},{compile:v,states:b,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:k}})})(Gm);const wt=Gm.exports,fc="[0-9]",SS="[1-9]",IS="[0-9a-fA-F]",of=`(?:\\\\["\\/\\\\brfnt]|\\\\u${IS}{4}|[^"\\\\])`,wS='"(?=[^"]*"\\s*:)',OS=`(?:0|${SS}${fc}*)`,ES=`\\.${fc}+`,PS="[eE]",jS=`${PS}[-+]?${fc}+`,kS=`-?${OS}(?:${ES})?(?:${jS})?`,xS=`(?:(?:\r?
)|[ 	])+`,cf=wt.states({main:{WS:{match:new RegExp(xS),lineBreaks:!0},accent7:new RegExp(`true|false|${kS}`),accent3:["{","}","[","]"],accent6:"null",stringProperty:{match:new RegExp(wS),push:"property"},stringStart:{match:'"',push:"string"},other:/./},string:{accent7:{match:new RegExp(`${of}+`),lineBreaks:!0},stringEnd:{match:'"',pop:!0},other:/./},property:{accent1:{match:new RegExp(`${of}+`),lineBreaks:!0},propertyEnd:{match:'"',pop:!0},other:/./}}),pc="[0-9]",AS="[1-9]",Hm="[0-9a-fA-F]",lf=`(?:\r?
)+`,dr="[ \\t]",CS=`^${dr}+`,_S=`(?:\\\\["\\/\\\\brfnt]|\\\\u${Hm}{4}|[^"\\\\])`,NS=`(?:\\\\['\\/\\\\brfnt]|\\\\u${Hm}{4}|[^'\\\\])`,Ts=`(?:"${_S}*"|'${NS}*')`,Xm=`${dr}*:(?:${dr}+|$)`,TS=`[^\\s]+(?=${Xm})`,so=`${dr}*:`,ff=`[^\\s]+(?=${so})`,RS=`(?:0|${AS}${pc}*)`,qS=`\\.${pc}+`,DS="[eE]",LS=`${DS}[-+]?${pc}+`,Rs=`-?${RS}(?:${qS})?(?:${LS})?`,MS=`-${dr}+`,qs=`#[^
]*`,pf=wt.states({main:{WS:{match:new RegExp(lf),lineBreaks:!0},indent:new RegExp(CS),comment:new RegExp(qs),inlineArray:{match:"[",type:wt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:wt.keywords({accent3:"{"}),push:"inlineObject"},accent1:new RegExp(MS),accent7:["true","false","null",new RegExp(Ts),new RegExp(Rs)],accent6:new RegExp(TS),accent3:{match:new RegExp(Xm),lineBreaks:!0,push:"property"},other:/[^#\n]+/},property:{WS:{match:new RegExp(lf),lineBreaks:!0,pop:1},comment:new RegExp(qs),accent7:{match:["true","false","null",new RegExp(Ts),new RegExp(Rs)],pop:1},other:/[^#\n]+/},inlineArray:{WS:new RegExp(`${dr}+`),comment:new RegExp(qs),inlineArray:{match:"[",type:wt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:wt.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"]",type:wt.keywords({accent3:"]"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Ts),new RegExp(Rs)],accent6:new RegExp(ff),accent3:{match:new RegExp(so),lineBreaks:!0},other:/[^\]\n,#]+/},inlineObject:{WS:new RegExp(`${dr}+`),comment:new RegExp(qs),inlineArray:{match:"[",type:wt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:wt.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"}",type:wt.keywords({accent3:"}"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Ts),new RegExp(Rs)],accent6:new RegExp(ff),accent3:{match:new RegExp(so),lineBreaks:!0},other:/[^}\n,#]+/}});function uf(e,t,r){const n=e.slice();return n[10]=t[r],n}function mf(e,t,r){const n=e.slice();return n[13]=t[r],n[15]=r,n}function df(e){let t,r=e[15]+1+"",n;return{c(){t=X("div"),n=pe(r),this.h()},l(s){t=W(s,"DIV",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p:Te,d(s){s&&A(t)}}}function US(e){let t=e[10].value+"",r;return{c(){r=pe(t)},l(n){r=ue(n,t)},m(n,s){te(n,r,s)},p(n,s){s&8&&t!==(t=n[10].value+"")&&Ke(r,t)},d(n){n&&A(r)}}}function VS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent8 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function BS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent7 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function FS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent6 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function KS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent5 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function JS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent4 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function zS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent3 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function GS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent2 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function HS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","accent1 svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function XS(e){let t,r=e[10].value+"",n;return{c(){t=X("span"),n=pe(r),this.h()},l(s){t=W(s,"SPAN",{class:!0});var a=M(t);n=ue(a,r),a.forEach(A),this.h()},h(){C(t,"class","comment svelte-564293")},m(s,a){te(s,t,a),T(t,n)},p(s,a){a&8&&r!==(r=s[10].value+"")&&Ke(n,r)},d(s){s&&A(t)}}}function hf(e){let t;function r(a,i){return a[10].type==="comment"?XS:a[10].type==="accent1"?HS:a[10].type==="accent2"?GS:a[10].type==="accent3"?zS:a[10].type==="accent4"?JS:a[10].type==="accent5"?KS:a[10].type==="accent6"?FS:a[10].type==="accent7"?BS:a[10].type==="accent8"?VS:US}let n=r(e),s=n(e);return{c(){s.c(),t=Wt()},l(a){s.l(a),t=Wt()},m(a,i){s.m(a,i),te(a,t,i)},p(a,i){n===(n=r(a))&&s?s.p(a,i):(s.d(1),s=n(a),s&&(s.c(),s.m(t.parentNode,t)))},d(a){s.d(a),a&&A(t)}}}function WS(e){let t,r,n,s,a,i,o,c,l,f,h,d,y=[...Array(e[4])],P=[];for(let v=0;v<y.length;v+=1)P[v]=df(mf(e,y,v));let u=e[3],m=[];for(let v=0;v<u.length;v+=1)m[v]=hf(uf(e,u,v));return{c(){t=X("div"),r=X("div");for(let v=0;v<P.length;v+=1)P[v].c();n=Re(),s=X("div"),a=X("pre"),i=pe("");for(let v=0;v<m.length;v+=1)m[v].c();o=pe(`
    `),c=Re(),l=X("textarea"),this.h()},l(v){t=W(v,"DIV",{class:!0});var O=M(t);r=W(O,"DIV",{class:!0});var b=M(r);for(let x=0;x<P.length;x+=1)P[x].l(b);b.forEach(A),n=qe(O),s=W(O,"DIV",{class:!0});var k=M(s);a=W(k,"PRE",{class:!0});var S=M(a);i=ue(S,"");for(let x=0;x<m.length;x+=1)m[x].l(S);o=ue(S,`
    `),S.forEach(A),c=qe(k),l=W(k,"TEXTAREA",{class:!0,"aria-label":!0}),M(l).forEach(A),k.forEach(A),O.forEach(A),this.h()},h(){C(r,"class","line-numbers svelte-564293"),C(a,"class","highlighted svelte-564293"),C(l,"class","src svelte-564293"),C(l,"aria-label","Code Editor"),C(s,"class","editable svelte-564293"),C(t,"class",f="Editor "+e[1]+" svelte-564293")},m(v,O){te(v,t,O),T(t,r);for(let b=0;b<P.length;b+=1)P[b].m(r,null);T(t,n),T(t,s),T(s,a),T(a,i);for(let b=0;b<m.length;b+=1)m[b].m(a,null);T(a,o),T(s,c),T(s,l),e[8](l),nl(l,e[0]),h||(d=[pr(l,"input",e[9]),pr(l,"input",e[7])],h=!0)},p(v,[O]){if(O&16){y=[...Array(v[4])];let b;for(b=0;b<y.length;b+=1){const k=mf(v,y,b);P[b]?P[b].p(k,O):(P[b]=df(k),P[b].c(),P[b].m(r,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=y.length}if(O&8){u=v[3];let b;for(b=0;b<u.length;b+=1){const k=uf(v,u,b);m[b]?m[b].p(k,O):(m[b]=hf(k),m[b].c(),m[b].m(a,o))}for(;b<m.length;b+=1)m[b].d(1);m.length=u.length}O&1&&nl(l,v[0]),O&2&&f!==(f="Editor "+v[1]+" svelte-564293")&&C(t,"class",f)},i:Te,o:Te,d(v){v&&A(t),ra(P,v),ra(m,v),e[8](null),h=!1,ru(d)}}}function YS(e,t,r){let n,s,{theme:a="solarized-dark"}=t,{value:i=""}=t,{format:o="json"}=t,c;const l=()=>{c.focus()};function f(y){Ah.call(this,e,y)}function h(y){Jt[y?"unshift":"push"](()=>{c=y,r(2,c)})}function d(){i=this.value,r(0,i)}return e.$$set=y=>{"theme"in y&&r(1,a=y.theme),"value"in y&&r(0,i=y.value),"format"in y&&r(5,o=y.format)},e.$$.update=()=>{e.$$.dirty&1&&r(4,n=(i.match(/\n/g)||[]).length+1),e.$$.dirty&33&&r(3,s=function(){return o==="json"?(cf.reset(i),Array.from(cf)):(pf.reset(i),Array.from(pf))}())},[i,a,c,s,n,o,l,f,h,d]}class QS extends Zt{constructor(t){super(),er(this,t,YS,WS,tr,{theme:1,value:0,format:5,focus:6})}get focus(){return this.$$.ctx[6]}}function yf(e,t,r){const n=e.slice();return n[18]=t[r],n[20]=r,n}function $f(e){let t,r,n,s;function a(){return e[12](e[20])}return{c(){t=X("button"),r=pe("\xD7"),this.h()},l(i){t=W(i,"BUTTON",{class:!0});var o=M(t);r=ue(o,"\xD7"),o.forEach(A),this.h()},h(){C(t,"class","tab-close svelte-1ylgy73")},m(i,o){te(i,t,o),T(t,r),n||(s=pr(t,"click",a),n=!0)},p(i,o){e=i},d(i){i&&A(t),n=!1,s()}}}function gf(e){let t,r,n=e[18].label+"",s,a,i,o,c,l,f=!e[18].persistent&&e[0].length>e[6]&&$f(e);function h(){return e[13](e[20])}return{c(){t=X("button"),r=X("span"),s=pe(n),a=Re(),f&&f.c(),this.h()},l(d){t=W(d,"BUTTON",{role:!0,id:!0,"aria-selected":!0,"aria-controls":!0,class:!0});var y=M(t);r=W(y,"SPAN",{class:!0});var P=M(r);s=ue(P,n),P.forEach(A),a=qe(y),f&&f.l(y),y.forEach(A),this.h()},h(){C(r,"class","tab-label svelte-1ylgy73"),C(t,"role","tab"),C(t,"id",i=`${e[3]}-tab-${e[20]}`),C(t,"aria-selected",o=e[20]===e[1]),C(t,"aria-controls","tabpanel"),C(t,"class","svelte-1ylgy73"),sl(t,"active",e[20]===e[5])},m(d,y){te(d,t,y),T(t,r),T(r,s),T(t,a),f&&f.m(t,null),c||(l=pr(t,"click",h),c=!0)},p(d,y){e=d,y&1&&n!==(n=e[18].label+"")&&Ke(s,n),!e[18].persistent&&e[0].length>e[6]?f?f.p(e,y):(f=$f(e),f.c(),f.m(t,null)):f&&(f.d(1),f=null),y&8&&i!==(i=`${e[3]}-tab-${e[20]}`)&&C(t,"id",i),y&2&&o!==(o=e[20]===e[1])&&C(t,"aria-selected",o),y&32&&sl(t,"active",e[20]===e[5])},d(d){d&&A(t),f&&f.d(),c=!1,l()}}}function vf(e){let t,r,n,s,a,i;return{c(){t=X("button"),r=X("span"),n=pe("+"),this.h()},l(o){t=W(o,"BUTTON",{role:!0,id:!0,class:!0});var c=M(t);r=W(c,"SPAN",{class:!0});var l=M(r);n=ue(l,"+"),l.forEach(A),c.forEach(A),this.h()},h(){C(r,"class","tab-label svelte-1ylgy73"),C(t,"role","tab"),C(t,"id",s=`${e[3]}-tab-${e[0].length}`),C(t,"class","svelte-1ylgy73")},m(o,c){te(o,t,c),T(t,r),T(r,n),a||(i=pr(t,"click",e[10]),a=!0)},p(o,c){c&9&&s!==(s=`${o[3]}-tab-${o[0].length}`)&&C(t,"id",s)},d(o){o&&A(t),a=!1,i()}}}function ZS(e){let t,r,n,s,a,i,o,c,l,f=e[0],h=[];for(let m=0;m<f.length;m+=1)h[m]=gf(yf(e,f,m));let d=e[4]&&vf(e);function y(m){e[15](m)}function P(m){e[16](m)}let u={};return e[0][e[1]].text!==void 0&&(u.value=e[0][e[1]].text),e[2]!==void 0&&(u.format=e[2]),a=new QS({props:u}),e[14](a),Jt.push(()=>Vr(a,"value",y)),Jt.push(()=>Vr(a,"format",P)),a.$on("input",e[17]),{c(){t=X("div");for(let m=0;m<h.length;m+=1)h[m].c();r=Re(),d&&d.c(),n=Re(),s=X("div"),ut(a.$$.fragment),this.h()},l(m){t=W(m,"DIV",{role:!0,class:!0});var v=M(t);for(let b=0;b<h.length;b+=1)h[b].l(v);r=qe(v),d&&d.l(v),v.forEach(A),n=qe(m),s=W(m,"DIV",{role:!0,id:!0,"aria-labelledby":!0,class:!0});var O=M(s);mt(a.$$.fragment,O),O.forEach(A),this.h()},h(){C(t,"role","tablist"),C(t,"class","svelte-1ylgy73"),C(s,"role","tabpanel"),C(s,"id","tabpanel"),C(s,"aria-labelledby",c=`${e[3]}-tab-${e[1]}`),C(s,"class","svelte-1ylgy73")},m(m,v){te(m,t,v);for(let O=0;O<h.length;O+=1)h[O].m(t,null);T(t,r),d&&d.m(t,null),te(m,n,v),te(m,s,v),dt(a,s,null),l=!0},p(m,[v]){if(v&2667){f=m[0];let b;for(b=0;b<f.length;b+=1){const k=yf(m,f,b);h[b]?h[b].p(k,v):(h[b]=gf(k),h[b].c(),h[b].m(t,r))}for(;b<h.length;b+=1)h[b].d(1);h.length=f.length}m[4]?d?d.p(m,v):(d=vf(m),d.c(),d.m(t,null)):d&&(d.d(1),d=null);const O={};!i&&v&3&&(i=!0,O.value=m[0][m[1]].text,Br(()=>i=!1)),!o&&v&4&&(o=!0,O.format=m[2],Br(()=>o=!1)),a.$set(O),(!l||v&10&&c!==(c=`${m[3]}-tab-${m[1]}`))&&C(s,"aria-labelledby",c)},i(m){l||(Be(a.$$.fragment,m),l=!0)},o(m){Fe(a.$$.fragment,m),l=!1},d(m){m&&A(t),ra(h,m),d&&d.d(),m&&A(n),m&&A(s),e[14](null),ht(a)}}}function e2(e,t,r){let{ns:n=""}=t,{tabs:s=[]}=t,{newTab:a=void 0}=t,{active:i=0}=t,{selected:o=0}=t,{minTabs:c=1}=t,{format:l="json"}=t,f;const h=Ch();function d(S){r(1,o=S),f.focus()}function y(){r(0,s[s.length]=a(),s),r(1,o=s.length-1),f.focus()}function P(S){o>=S&&o>0&&r(1,o-=1),s.splice(S,1),r(0,s),f.focus()}const u=S=>P(S),m=S=>d(S);function v(S){Jt[S?"unshift":"push"](()=>{f=S,r(7,f)})}function O(S){e.$$.not_equal(s[o].text,S)&&(s[o].text=S,r(0,s))}function b(S){l=S,r(2,l)}const k=()=>h("input",s);return e.$$set=S=>{"ns"in S&&r(3,n=S.ns),"tabs"in S&&r(0,s=S.tabs),"newTab"in S&&r(4,a=S.newTab),"active"in S&&r(5,i=S.active),"selected"in S&&r(1,o=S.selected),"minTabs"in S&&r(6,c=S.minTabs),"format"in S&&r(2,l=S.format)},[s,o,l,n,a,i,c,f,h,d,y,P,u,m,v,O,b,k]}class bf extends Zt{constructor(t){super(),er(this,t,e2,ZS,tr,{ns:3,tabs:0,newTab:4,active:5,selected:1,minTabs:6,format:2})}}function Sf(e,t,r){const n=e.slice();return n[2]=t[r],n}function t2(e){let t;function r(a,i){return a[1].output?n2:r2}let n=r(e),s=n(e);return{c(){s.c(),t=Wt()},l(a){s.l(a),t=Wt()},m(a,i){s.m(a,i),te(a,t,i)},p(a,i){n===(n=r(a))&&s?s.p(a,i):(s.d(1),s=n(a),s&&(s.c(),s.m(t.parentNode,t)))},d(a){s.d(a),a&&A(t)}}}function r2(e){let t=e[1]+"",r;return{c(){r=pe(t)},l(n){r=ue(n,t)},m(n,s){te(n,r,s)},p(n,s){s&1&&t!==(t=n[1]+"")&&Ke(r,t)},d(n){n&&A(r)}}}function n2(e){let t,r,n=e[1].output.errors,s=[];for(let a=0;a<n.length;a+=1)s[a]=wf(Sf(e,n,a));return{c(){t=pe(`Invalid
    `),r=X("ul");for(let a=0;a<s.length;a+=1)s[a].c()},l(a){t=ue(a,`Invalid
    `),r=W(a,"UL",{});var i=M(r);for(let o=0;o<s.length;o+=1)s[o].l(i);i.forEach(A)},m(a,i){te(a,t,i),te(a,r,i);for(let o=0;o<s.length;o+=1)s[o].m(r,null)},p(a,i){if(i&1){n=a[1].output.errors;let o;for(o=0;o<n.length;o+=1){const c=Sf(a,n,o);s[o]?s[o].p(c,i):(s[o]=wf(c),s[o].c(),s[o].m(r,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(a){a&&A(t),a&&A(r),ra(s,a)}}}function If(e){let t,r,n=e[2].instanceLocation+"",s,a,i,o=e[2].absoluteKeywordLocation+"",c;return{c(){t=X("li"),r=X("code"),s=pe(n),a=pe(" fails schema constraint "),i=X("code"),c=pe(o),this.h()},l(l){t=W(l,"LI",{class:!0});var f=M(t);r=W(f,"CODE",{class:!0});var h=M(r);s=ue(h,n),h.forEach(A),a=ue(f," fails schema constraint "),i=W(f,"CODE",{class:!0});var d=M(i);c=ue(d,o),d.forEach(A),f.forEach(A),this.h()},h(){C(r,"class","svelte-1sdf2dp"),C(i,"class","svelte-1sdf2dp"),C(t,"class","svelte-1sdf2dp")},m(l,f){te(l,t,f),T(t,r),T(r,s),T(t,a),T(t,i),T(i,c)},p(l,f){f&1&&n!==(n=l[2].instanceLocation+"")&&Ke(s,n),f&1&&o!==(o=l[2].absoluteKeywordLocation+"")&&Ke(c,o)},d(l){l&&A(t)}}}function wf(e){let t=!e[2].valid&&!e[2].keyword.endsWith("#validate"),r,n=t&&If(e);return{c(){n&&n.c(),r=Wt()},l(s){n&&n.l(s),r=Wt()},m(s,a){n&&n.m(s,a),te(s,r,a)},p(s,a){a&1&&(t=!s[2].valid&&!s[2].keyword.endsWith("#validate")),t?n?n.p(s,a):(n=If(s),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&A(r)}}}function s2(e){let t=e[0]?"Valid":"",r;return{c(){r=pe(t)},l(n){r=ue(n,t)},m(n,s){te(n,r,s)},p(n,s){s&1&&t!==(t=n[0]?"Valid":"")&&Ke(r,t)},d(n){n&&A(r)}}}function a2(e){let t;return{c(){t=pe("Validating ...")},l(r){t=ue(r,"Validating ...")},m(r,n){te(r,t,n)},p:Te,d(r){r&&A(t)}}}function i2(e){let t,r,n={ctx:e,current:null,token:null,hasCatch:!0,pending:a2,then:s2,catch:t2,value:0,error:1};return na(r=e[0],n),{c(){t=Wt(),n.block.c()},l(s){t=Wt(),n.block.l(s)},m(s,a){te(s,t,a),n.block.m(s,n.anchor=a),n.mount=()=>t.parentNode,n.anchor=t},p(s,[a]){e=s,n.ctx=e,a&1&&r!==(r=e[0])&&na(r,n)||nu(n,e,a)},i:Te,o:Te,d(s){s&&A(t),n.block.d(s),n.token=null,n=null}}}function o2(e,t,r){let{results:n}=t;return e.$$set=s=>{"results"in s&&r(0,n=s.results)},[n]}class Wm extends Zt{constructor(t){super(),er(this,t,o2,i2,tr,{results:0})}}function c2(e){let t,r,n,s,a;const i=e[2].default,o=bo(i,e,e[1],null);return{c(){t=X("a"),r=Ot("svg"),n=Ot("path"),s=Re(),o&&o.c(),this.h()},l(c){t=W(c,"A",{href:!0,class:!0});var l=M(t);r=Et(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var f=M(r);n=Et(f,"path",{"fill-rule":!0,d:!0}),M(n).forEach(A),f.forEach(A),s=qe(l),o&&o.l(l),l.forEach(A),this.h()},h(){C(n,"fill-rule","evenodd"),C(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),C(r,"height","1.5em"),C(r,"viewBox","0 0 16 16"),C(r,"version","1.1"),C(r,"aria-hidden","true"),C(r,"class","svelte-i8toq"),C(t,"href",e[0]),C(t,"class","svelte-i8toq")},m(c,l){te(c,t,l),T(t,r),T(r,n),T(t,s),o&&o.m(t,null),a=!0},p(c,[l]){o&&o.p&&(!a||l&2)&&So(o,i,c,c[1],a?wo(i,c[1],l,null):Io(c[1]),null),(!a||l&1)&&C(t,"href",c[0])},i(c){a||(Be(o,c),a=!0)},o(c){Fe(o,c),a=!1},d(c){c&&A(t),o&&o.d(c)}}}function l2(e,t,r){let{$$slots:n={},$$scope:s}=t,{href:a=""}=t;return e.$$set=i=>{"href"in i&&r(0,a=i.href),"$$scope"in i&&r(1,s=i.$$scope)},[a,s,n]}class Of extends Zt{constructor(t){super(),er(this,t,l2,c2,tr,{href:0})}}function f2(e){let t,r,n,s,a;const i=e[2].default,o=bo(i,e,e[1],null);return{c(){t=X("a"),r=Ot("svg"),n=Ot("path"),s=Re(),o&&o.c(),this.h()},l(c){t=W(c,"A",{href:!0,class:!0});var l=M(t);r=Et(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var f=M(r);n=Et(f,"path",{d:!0}),M(n).forEach(A),f.forEach(A),s=qe(l),o&&o.l(l),l.forEach(A),this.h()},h(){C(n,"d","M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"),C(r,"height","1em"),C(r,"viewBox","0 0 780 250"),C(r,"version","1.1"),C(r,"aria-hidden","true"),C(r,"class","svelte-wj8h0n"),C(t,"href",e[0]),C(t,"class","svelte-wj8h0n")},m(c,l){te(c,t,l),T(t,r),T(r,n),T(t,s),o&&o.m(t,null),a=!0},p(c,[l]){o&&o.p&&(!a||l&2)&&So(o,i,c,c[1],a?wo(i,c[1],l,null):Io(c[1]),null),(!a||l&1)&&C(t,"href",c[0])},i(c){a||(Be(o,c),a=!0)},o(c){Fe(o,c),a=!1},d(c){c&&A(t),o&&o.d(c)}}}function p2(e,t,r){let{$$slots:n={},$$scope:s}=t,{href:a=""}=t;return e.$$set=i=>{"href"in i&&r(0,a=i.href),"$$scope"in i&&r(1,s=i.$$scope)},[a,s,n]}class Ef extends Zt{constructor(t){super(),er(this,t,p2,f2,tr,{href:0})}}function u2(e){let t,r,n,s,a,i,o,c,l;const f=e[2].default,h=bo(f,e,e[1],null);return{c(){t=X("a"),r=Ot("svg"),n=Ot("g"),s=Ot("path"),a=Ot("path"),i=Ot("path"),o=Ot("path"),c=Re(),h&&h.c(),this.h()},l(d){t=W(d,"A",{href:!0,class:!0});var y=M(t);r=Et(y,"svg",{version:!0,viewBox:!0,height:!0,class:!0});var P=M(r);n=Et(P,"g",{transform:!0,id:!0});var u=M(n);s=Et(u,"path",{id:!0,d:!0,style:!0}),M(s).forEach(A),a=Et(u,"path",{id:!0,d:!0,style:!0}),M(a).forEach(A),i=Et(u,"path",{id:!0,d:!0,style:!0}),M(i).forEach(A),o=Et(u,"path",{id:!0,d:!0,style:!0}),M(o).forEach(A),u.forEach(A),P.forEach(A),c=qe(y),h&&h.l(y),y.forEach(A),this.h()},h(){C(s,"id","path4544"),C(s,"d","m 122.99401,114.18985 c -4.32897,-0.9404 -7.58044,-3.47848 -8.71251,-6.80095 -0.78921,-2.31618 -0.67682,-6.07238 0.33363,-11.150598 0.48507,-2.437836 0.88169,-5.347843 0.88139,-6.466688 -9.8e-4,-3.718098 -1.71106,-5.735418 -5.1001,-6.016462 l -1.9549,-0.162116 v -2.392655 -2.392657 l 1.85208,-0.250855 c 2.70243,-0.366031 3.74441,-1.02838 4.57629,-2.908984 0.61121,-1.381726 0.68884,-2.068648 0.50552,-4.472869 -0.11913,-1.562244 -0.53527,-4.348568 -0.92477,-6.191832 -0.98954,-4.682868 -0.94822,-8.485471 0.11707,-10.773163 1.56862,-3.368589 5.43705,-5.854553 9.93248,-6.382903 l 1.93299,-0.227185 v 2.518015 2.518015 h -1.29973 c -1.77186,0 -4.2497,1.262413 -4.8835,2.488054 -0.60797,1.175674 -0.65405,2.864146 -0.15834,5.802223 0.78343,4.643508 1.04707,9.098344 0.67592,11.421636 -0.42464,2.658142 -1.97477,5.796328 -3.6791,7.448236 l -1.18012,1.143813 1.61497,1.982752 c 1.99051,2.443801 2.76458,4.148744 3.24284,7.142561 0.37835,2.368341 0.0844,7.282673 -0.67072,11.213982 -1.05359,5.48514 0.1623,7.65141 4.66209,8.30613 l 1.67569,0.24382 v 2.44782 c 0,2.79211 0.17086,2.69708 -3.43917,1.91286 z"),ks(s,"fill","stroke-width:0.35277775"),C(a,"id","path4546"),C(a,"d","m 152.2304,112.24932 v -2.42987 l 2.04969,-0.42336 c 2.26276,-0.46736 4.054,-1.8634 4.45842,-3.47475 0.1274,-0.50758 -0.11267,-3.16398 -0.53347,-5.90311 -1.37183,-8.929552 -0.6114,-13.537042 2.85482,-17.297452 l 1.48237,-1.60818 -1.1108,-1.26512 c -3.97855,-4.53132 -4.66885,-8.552208 -3.15364,-18.369547 0.76342,-4.946305 0.76409,-4.994322 0.087,-6.173611 -0.79713,-1.388278 -3.28385,-2.776033 -4.97438,-2.776033 h -1.15997 v -2.469445 c 0,-2.811057 -0.0583,-2.773846 3.24583,-2.072788 3.9645,0.841179 6.80448,2.853272 8.27787,5.864775 0.84544,1.728026 0.97275,2.400136 0.94911,5.010889 -0.015,1.658349 -0.35758,4.682054 -0.76125,6.719346 -1.49867,7.563594 -1.3651,9.576204 0.7654,11.532814 0.98915,0.90842 1.64012,1.17274 3.37032,1.36849 l 2.14439,0.24261 v 2.42387 2.42388 l -1.6757,7.1e-4 c -2.1517,7e-4 -3.9323,0.90924 -4.83869,2.46889 -0.95194,1.63803 -0.89239,5.20675 0.17364,10.40695 0.90648,4.421902 1.05253,8.458452 0.3882,10.728752 -0.70059,2.39406 -3.81995,5.29609 -6.74745,6.27718 -1.26118,0.42266 -2.96775,0.87096 -3.79236,0.99623 l -1.49931,0.22775 z"),ks(a,"stroke-width","0.35277778"),C(i,"id","path4548"),C(i,"d","m 131.74239,108.26592 c -1.02163,-1.2988 -0.87294,-3.53652 0.38087,-5.73185 0.92776,-1.62446 4.80862,-6.948549 7.61066,-10.440949 l 1.13094,-1.40958 -1.80213,-5.22523 c -2.02147,-5.86123 -2.0098,-5.97467 0.65581,-6.37225 l 1.46834,-0.219 1.64076,3.3506 c 0.90242,1.84283 1.76982,3.35061 1.92755,3.35061 0.15774,0 1.77489,-1.75542 3.59368,-3.90092 3.15918,-3.72667 3.35688,-3.89165 4.42591,-3.69334 0.64552,0.11974 1.21858,0.0465 1.35432,-0.17316 0.31818,-0.51481 1.23083,0.24704 1.23083,1.02746 0,0.32009 -0.45438,1.13409 -1.00972,1.80888 -2.26771,2.75549 -7.10417,9.27155 -7.10417,9.5713 0,0.17685 0.97502,2.45302 2.16671,5.05816 l 2.1667,4.736609 -0.65823,0.98459 c -0.36203,0.54152 -0.66236,1.12603 -0.6674,1.29891 -0.005,0.17288 -0.27769,0.48371 -0.60588,0.69073 -0.83174,0.52464 -1.44656,-0.11541 -3.9894,-4.153119 -1.16417,-1.84856 -2.23163,-3.36491 -2.37215,-3.36967 -0.31309,-0.0106 -3.7911,5.131969 -6.47955,9.580639 -2.37093,3.92324 -1.93885,3.4204 -3.26614,3.80106 -0.95533,0.27398 -1.19348,0.19843 -1.79831,-0.57048 z"),ks(i,"stroke-width","0.35277775"),C(o,"id","path4550"),C(o,"d","m 131.98567,83.677091 c -2.15148,-3.8472 -6.0183,-9.42829 -7.57842,-10.93815 -0.79252,-0.76698 -1.44094,-1.57494 -1.44094,-1.79546 0,-0.6016 1.61695,-1.21975 3.19058,-1.21975 1.69822,0 3.49597,1.47777 5.0997,4.19203 0.58208,0.98515 1.15641,1.79434 1.27629,1.79819 0.11988,0.004 0.80873,-1.65116 1.53078,-3.67779 1.5464,-4.34039 5.62351,-12.777999 7.22453,-14.951229 1.3726,-1.86316 3.42936,-2.865165 5.90274,-2.875676 3.23375,-0.01374 3.24268,0.130067 0.20474,3.296663 -4.63599,4.832327 -6.76321,8.809632 -11.25155,21.037252 -1.24637,3.39549 -2.39032,6.47895 -2.54212,6.85214 -0.23022,0.56597 -0.49833,0.28096 -1.61633,-1.71822 z"),ks(o,"stroke-width","0.35277775"),C(n,"transform","translate(-104.22785,-45.507923)"),C(n,"id","layer1"),C(r,"version","1.1"),C(r,"viewBox","0 0 70.423268 70.42326"),C(r,"height","1.25em"),C(r,"class","svelte-27u907"),C(t,"href",e[0]),C(t,"class","svelte-27u907")},m(d,y){te(d,t,y),T(t,r),T(r,n),T(n,s),T(n,a),T(n,i),T(n,o),T(t,c),h&&h.m(t,null),l=!0},p(d,[y]){h&&h.p&&(!l||y&2)&&So(h,f,d,d[1],l?wo(f,d[1],y,null):Io(d[1]),null),(!l||y&1)&&C(t,"href",d[0])},i(d){l||(Be(h,d),l=!0)},o(d){Fe(h,d),l=!1},d(d){d&&A(t),h&&h.d(d)}}}function m2(e,t,r){let{$$slots:n={},$$scope:s}=t,{href:a=""}=t;return e.$$set=i=>{"href"in i&&r(0,a=i.href),"$$scope"in i&&r(1,s=i.$$scope)},[a,s,n]}class d2 extends Zt{constructor(t){super(),er(this,t,m2,u2,tr,{href:0})}}function h2(e){let t;return{c(){t=pe("hyperjump-io/json-schema.hyperjump.io")},l(r){t=ue(r,"hyperjump-io/json-schema.hyperjump.io")},m(r,n){te(r,t,n)},d(r){r&&A(t)}}}function y2(e){let t;return{c(){t=pe("hyperjump-io/json-schema-validator")},l(r){t=ue(r,"hyperjump-io/json-schema-validator")},m(r,n){te(r,t,n)},d(r){r&&A(t)}}}function $2(e){let t;return{c(){t=pe("@hyperjump/json-schema")},l(r){t=ue(r,"@hyperjump/json-schema")},m(r,n){te(r,t,n)},d(r){r&&A(t)}}}function g2(e){let t;return{c(){t=pe("@hyperjump/json-schema-core")},l(r){t=ue(r,"@hyperjump/json-schema-core")},m(r,n){te(r,t,n)},d(r){r&&A(t)}}}function v2(e){let t;return{c(){t=pe("JSON Schema")},l(r){t=ue(r,"JSON Schema")},m(r,n){te(r,t,n)},d(r){r&&A(t)}}}function b2(e){let t,r,n,s,a,i,o,c,l,f,h,d,y,P,u,m,v;return s=new Of({props:{href:"https://github.com/hyperjump-io/json-schema.hyperjump.io",$$slots:{default:[h2]},$$scope:{ctx:e}}}),o=new Of({props:{href:"https://github.com/hyperjump-io/json-schema-validator",$$slots:{default:[y2]},$$scope:{ctx:e}}}),f=new Ef({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema",$$slots:{default:[$2]},$$scope:{ctx:e}}}),y=new Ef({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema-core",$$slots:{default:[g2]},$$scope:{ctx:e}}}),m=new d2({props:{href:"https://json-schema.org",$$slots:{default:[v2]},$$scope:{ctx:e}}}),{c(){t=X("footer"),r=X("ul"),n=X("li"),ut(s.$$.fragment),a=Re(),i=X("li"),ut(o.$$.fragment),c=Re(),l=X("li"),ut(f.$$.fragment),h=Re(),d=X("li"),ut(y.$$.fragment),P=Re(),u=X("li"),ut(m.$$.fragment),this.h()},l(O){t=W(O,"FOOTER",{class:!0});var b=M(t);r=W(b,"UL",{class:!0});var k=M(r);n=W(k,"LI",{class:!0});var S=M(n);mt(s.$$.fragment,S),S.forEach(A),a=qe(k),i=W(k,"LI",{class:!0});var x=M(i);mt(o.$$.fragment,x),x.forEach(A),c=qe(k),l=W(k,"LI",{class:!0});var G=M(l);mt(f.$$.fragment,G),G.forEach(A),h=qe(k),d=W(k,"LI",{class:!0});var re=M(d);mt(y.$$.fragment,re),re.forEach(A),P=qe(k),u=W(k,"LI",{class:!0});var I=M(u);mt(m.$$.fragment,I),I.forEach(A),k.forEach(A),b.forEach(A),this.h()},h(){C(n,"class","svelte-17tbtsq"),C(i,"class","svelte-17tbtsq"),C(l,"class","svelte-17tbtsq"),C(d,"class","svelte-17tbtsq"),C(u,"class","svelte-17tbtsq"),C(r,"class","links svelte-17tbtsq"),C(t,"class","svelte-17tbtsq")},m(O,b){te(O,t,b),T(t,r),T(r,n),dt(s,n,null),T(r,a),T(r,i),dt(o,i,null),T(r,c),T(r,l),dt(f,l,null),T(r,h),T(r,d),dt(y,d,null),T(r,P),T(r,u),dt(m,u,null),v=!0},p(O,[b]){const k={};b&1&&(k.$$scope={dirty:b,ctx:O}),s.$set(k);const S={};b&1&&(S.$$scope={dirty:b,ctx:O}),o.$set(S);const x={};b&1&&(x.$$scope={dirty:b,ctx:O}),f.$set(x);const G={};b&1&&(G.$$scope={dirty:b,ctx:O}),y.$set(G);const re={};b&1&&(re.$$scope={dirty:b,ctx:O}),m.$set(re)},i(O){v||(Be(s.$$.fragment,O),Be(o.$$.fragment,O),Be(f.$$.fragment,O),Be(y.$$.fragment,O),Be(m.$$.fragment,O),v=!0)},o(O){Fe(s.$$.fragment,O),Fe(o.$$.fragment,O),Fe(f.$$.fragment,O),Fe(y.$$.fragment,O),Fe(m.$$.fragment,O),v=!1},d(O){O&&A(t),ht(s),ht(o),ht(f),ht(y),ht(m)}}}class S2 extends Zt{constructor(t){super(),er(this,t,null,b2,tr,{})}}const zr=ca.exports,I2=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,w2={null:e=>e===null,boolean:e=>typeof e=="boolean",object:I2,array:e=>Array.isArray(e),number:e=>typeof e=="number",integer:e=>Number.isInteger(e),string:e=>typeof e=="string"},O2=(e,t)=>w2[t](e),E2=(e,t)=>{const r=zr.resolve(e,t,{iri:!0});if(zr.resolve(e,"",{iri:!0})&&zr.parse(r).scheme==="file"&&zr.parse(e).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${e}'`);return r},P2=e=>zr.unescapeComponent(zr.parse(e).fragment)||"",_n=47,j2=(e,t)=>{if(e===t)return"";let r=1;const n=e.length-1,s=t.length-r,a=n<s?n:s;let i=-1,o=0;for(;o<a;o++){const l=e.charCodeAt(o+1);if(l!==t.charCodeAt(r+o))break;l===_n&&(i=o)}if(s>a){if(t.charCodeAt(r+o)===_n)return t.slice(r+o+1);if(o===0)return t.slice(r+o)}n>a&&(e.charCodeAt(o+1)===_n?i=o:a===0&&(i=0));let c="";for(o=i+2;o<=e.length;++o)(o===e.length||e.charCodeAt(o)===_n)&&(c+=c.length===0?"..":"/..");return r+=i,c.length>0?`${c}${t.slice(r,t.length)}`:(t.charCodeAt(r)===_n&&++r,t.slice(r,t.length))};var uc={jsonTypeOf:O2,resolveUrl:E2,urlFragment:P2,pathRelative:j2};const Ym=Symbol("$__value"),mc=Symbol("$__href"),k2=(e,t)=>Object.freeze({[mc]:e,[Ym]:t}),x2=e=>e&&e[mc]!==void 0,A2=e=>e[mc],C2=e=>e[Ym];var dc={cons:k2,isReference:x2,href:A2,value:C2};const _2=xa,yn=Qe,{resolveUrl:N2,jsonTypeOf:T2}=uc,Pf=dc,Qm=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),R2=(e,t="")=>Object.freeze({...Qm,id:N2(t,""),instance:e,value:e}),q2=e=>`${e.id}#${encodeURI(e.pointer)}`,it=e=>Pf.isReference(e.value)?Pf.value(e.value):e.value,D2=(e,t)=>e in it(t),L2=yn((e,t)=>T2(it(e),t)),br=(e,t)=>Object.freeze({...t,pointer:_2.append(e,t.pointer),value:it(t)[e]}),M2=e=>Object.keys(it(e)).map(t=>[t,br(t,e)]),U2=e=>Object.keys(it(e)),V2=yn((e,t)=>it(t).map((r,n,s,a)=>e(br(n,t),n,s,a))),B2=yn((e,t)=>it(t).map((r,n,s,a)=>br(n,t)).filter((r,n,s,a)=>e(r,n,s,a))),F2=yn((e,t,r)=>it(r).reduce((n,s,a)=>e(n,br(a,r),a),t)),K2=yn((e,t)=>it(t).every((r,n,s,a)=>e(br(n,t),n,s,a))),J2=yn((e,t)=>it(t).some((r,n,s,a)=>e(br(n,t),n,s,a))),z2=e=>it(e).length;var hc={nil:Qm,cons:R2,uri:q2,value:it,has:D2,typeOf:L2,step:br,entries:M2,keys:U2,map:V2,filter:B2,reduce:F2,every:K2,some:J2,length:z2},G2=fetch;const H2=Aa,X2=Qe,Wr=fe,jt=xa,{jsonTypeOf:yc,resolveUrl:Mt,urlFragment:$c,pathRelative:W2}=uc,Y2=G2,qt=dc,Nn="https://json-schema.org/draft/2019-09/vocab/core",Tn="https://json-schema.org/draft/2020-12/vocab/core",Jn={},ft={},Q2=(e,t,r)=>{Jn[e]||(Jn[e]={}),Jn[e][t]=r},Me=(e,t)=>{var n;const r=ft[e];return(n=Jn[r])==null?void 0:n[t]},lr={},gc={},vc=(e,t="",r="")=>{var P,u;e=JSON.parse(JSON.stringify(e));const n=Mt(t,""),s=Mt(e.$schema||r,"");if(!s)throw Error("Couldn't determine schema dialect");if(delete e.$schema,!(s in ft))if(((P=e==null?void 0:e.$vocabulary)==null?void 0:P[Nn])===!0&&s===Ds(e,n,Nn)[0])ft[s]=Nn;else if(((u=e==null?void 0:e.$vocabulary)==null?void 0:u[Tn])===!0&&s===Ds(e,n,Tn)[0])ft[s]=Tn;else if(s===Ds(e,n,s)[0])ft[s]=s;else if(s in lr){const m=lr[s];m.vocabulary[Nn]===!0?ft[s]=Nn:m.vocabulary[Tn]===!0?ft[s]=Tn:ft[s]=ft[m.dialectId]}else throw Error(`Couldn't determine JSON Schema version for dialect: '${s}'`);const[a,i]=Ds(e,n,ft[s]);if(!a)throw Error("Couldn't determine an identifier for the schema");const o=Me(s,"baseToken");delete e[o],n&&(gc[n]=a);const c=Me(s,"anchorToken");i&&o===c&&(e[c]=c!==o?encodeURI(i):`#${encodeURI(i)}`);const l={},f=Me(s,"recursiveAnchorToken");e[f]===!0&&(l[""]=`${a}#`,e[c]="",delete e[f]);let h;const d=Me(s,"vocabularyToken");yc(e[d],"object")?(h=e[d],delete e[d]):h={[ft[s]]:!0};const y={"":""};return lr[a]={id:a,dialectId:s,schema:ao(e,a,s,jt.nil,y,l),anchors:y,dynamicAnchors:l,vocabulary:h,validated:!1},a},Ds=(e,t,r)=>{var a;const n=(a=Jn[r])==null?void 0:a.baseToken,s=Mt(t,e[n]||"");return[Mt(s,""),$c(s)]},ao=(e,t,r,n,s,a)=>{if(yc(e,"object")){const i=typeof e.$schema=="string"?Mt(e.$schema,""):r,o=Me(i,"embeddedToken"),c=Me(i,"anchorToken");if(typeof e[o]=="string"&&(o!==c||e[o][0]!=="#")){const y=Mt(t,e[o]),P=Me(i,"baseToken");return e[P]=y,vc(e,y,r),qt.cons(e[o],e)}const l=Me(r,"anchorToken"),f=Me(r,"dynamicAnchorToken");typeof e[f]=="string"&&(a[e[f]]=`${t}#${encodeURI(n)}`,s[e[f]]=n,delete e[f]);const h=Me(r,"embeddedToken");if(typeof e[l]=="string"){const y=l!==h?e[l]:e[l].slice(1);s[y]=n,delete e[l]}const d=Me(r,"jrefToken");if(typeof e[d]=="string")return qt.cons(e[d],e);for(const y in e)e[y]=ao(e[y],t,r,jt.append(y,n),s,a);return e}else return Array.isArray(e)?e.map((i,o)=>ao(i,t,r,jt.append(o,n),s,a)):e},Z2=e=>e in lr||e in gc,Zm=e=>lr[gc[e]]||lr[e],eI=e=>{lr[e].validated=!0},tI=Object.freeze({id:"",dialectId:void 0,vocabulary:{},pointer:jt.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),ed=async(e,t=tI)=>{const r=Mt(nd(t),e),n=Mt(r,""),s=$c(r);if(!Z2(n)){const c=await Y2(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);if(c.headers.has("content-type")){const l=H2.parse(c.headers.get("content-type")).type;if(l!=="application/schema+json")throw Error(`${n} is not a schema. Found a document with media type: ${l}`)}vc(await c.json(),n)}const a=Zm(n),i=s[0]!=="/"?rd(a,s):s,o=Object.freeze({...a,pointer:i,value:jt.get(i,a.schema)});return td(o)},td=e=>qt.isReference(e.value)?ed(qt.href(e.value),e):e,rd=(e,t)=>{if(!(t in e.anchors))throw Error(`No such anchor '${encodeURI(e.id)}#${encodeURI(t)}'`);return e.anchors[t]},nd=e=>`${e.id}#${encodeURI(e.pointer)}`,nr=e=>qt.isReference(e.value)?qt.value(e.value):e.value,rI=(e,t)=>e in nr(t),nI=(e,t)=>yc(nr(e),t),bc=(e,t)=>{const r=Zm(t.id),n=Object.freeze({...t,pointer:jt.append(e,t.pointer),value:nr(t)[e],validated:r.validated});return td(n)},sI=e=>Object.keys(nr(e)),aI=e=>Wr.pipeline([nr,Object.keys,Wr.map(async t=>[t,await bc(t,e)]),Wr.all],e),iI=X2((e,t)=>Wr.pipeline([nr,Wr.map(async(r,n)=>e(await bc(n,t),n)),Wr.all],t)),oI=e=>nr(e).length,cI={parentId:"",parentDialect:"",includeEmbedded:!0},lI=(e,t={})=>{const r={...cI,...t},n=JSON.parse(JSON.stringify(e.schema,(l,f)=>{if(!qt.isReference(f))return f;const h=qt.value(f),d=typeof h.$schema=="string"?Mt(h.$schema,""):e.dialectId,y=Me(d,"embeddedToken");if(!(!r.includeEmbedded&&y in h))return qt.value(f)})),s=Me(e.dialectId,"dynamicAnchorToken");Object.entries(e.dynamicAnchors).forEach(([l,f])=>{const h=$c(f);jt.assign(h,n,{[s]:l,...jt.get(h,n)})});const a=Me(e.dialectId,"anchorToken");Object.entries(e.anchors).filter(([l])=>l!=="").forEach(([l,f])=>{jt.assign(f,n,{[a]:l,...jt.get(f,n)})});const i=Me(e.dialectId,"baseToken"),o=fI(r.parentId,e.id),c=r.parentDialect===e.dialectId?"":e.dialectId;return{...o&&{[i]:o},...c&&{$schema:c},...n}},fI=(e,t)=>{if(t.startsWith("file://")){const r=e.slice(7,e.lastIndexOf("/"));return e===""?"":W2(r,t.slice(7))}else return t};var Da={setConfig:Q2,getConfig:Me,add:vc,get:ed,markValidated:eI,uri:nd,value:nr,getAnchorPointer:rd,typeOf:nI,has:rI,step:bc,keys:sI,entries:aI,map:iI,length:oI,toSchema:lI};class pI extends Error{constructor(t){super("Invalid Schema"),this.name=this.constructor.name,this.output=t}}var sd=pI;const uI=Qe,jf=Qr.exports,{resolveUrl:mI}=uc,ad=hc,Ht=Da,dI=sd,pa="FLAG",Sc="BASIC",Ic="DETAILED",wc="VERBOSE";let id=Ic,od=!0;const hI=async(e,t=void 0,r=void 0)=>{const n=await Oc(e),s=(a,i)=>Ec(n,ad.cons(a),i);return t===void 0?s:s(t,r)},Oc=async e=>{const t={metaData:{}},r=await ld(e,t);return{ast:t,schemaUri:r}},Ec=uI(({ast:e,schemaUri:t},r,n=pa)=>{if(![pa,Sc,Ic,wc].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],a=jf.subscribe("result",yI(n,s));return pd(t,r,e,{}),jf.unsubscribe(a),s[0]}),yI=(e,t)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c}=s,l={keyword:a,absoluteKeywordLocation:i,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const a=r.pop();for(;r[r.length-1]!=="result.start";){const i=r.pop(),o=[i];e===Sc&&(o.push(...i.errors),delete i.errors),(e===wc||e!==pa&&!i.valid)&&a.errors.unshift(...o)}r[r.length-1]=a,t[0]=a}}},$I=e=>{id=e},gI=e=>{od=e},Pc={},hs=e=>Pc[e],cd=e=>e in Pc,vI=(e,t)=>{Pc[e]={collectEvaluatedItems:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&new Set,collectEvaluatedProperties:(r,n,s,a,i)=>t.interpret(r,n,s,a,i)&&[],...t}},io={},bI=(e,t)=>{io[e]=t},Xs={},ld=async(e,t)=>{if(e=await fd(e),!cd(`${e.dialectId}#validate`)){const r=await Ht.get(e.dialectId);(Ht.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,a])=>{if(s in io)Object.entries(io[s]).forEach(([i,o])=>{vI(`${r.id}#${i}`,o)});else if(a)throw Error(`Missing required vocabulary: ${s}`)})}if(od&&!e.validated){if(Ht.markValidated(e.id),!(e.dialectId in Xs)){const s=await Ht.get(e.dialectId),a=await Oc(s);Xs[s.id]=Ec(a)}const r=ad.cons(e.schema,e.id),n=Xs[e.dialectId](r,id);if(!n.valid)throw new dI(n)}return e.id in t.metaData||(t.metaData[e.id]={id:e.id,dynamicAnchors:e.dynamicAnchors,anchors:e.anchors}),hs(`${e.dialectId}#validate`).compile(e,t)},fd=async e=>Ht.typeOf(e,"string")?fd(await Ht.get(Ht.value(e),e)):e,pd=(e,t,r,n)=>{const s=jc(e,r),a=mI(e,"");return hs(s).interpret(e,t,r,{...r.metaData[a].dynamicAnchors,...n})},SI=(e,t,r,n,s)=>{const a=jc(e,r);return hs(a).collectEvaluatedProperties(e,t,r,n,s)},II=(e,t,r,n,s)=>{const a=jc(e,r);return hs(a).collectEvaluatedItems(e,t,r,n,s)},jc=(e,t)=>{if(!(e in t))throw Error(`No schema found at ${e}`);return t[e][0]},wI=(e,t="",r="")=>{const n=Ht.add(e,t,r);delete Xs[n]};var ud={validate:hI,compile:Oc,interpret:Ec,setMetaOutputFormat:$I,setShouldMetaValidate:gI,FLAG:pa,BASIC:Sc,DETAILED:Ic,VERBOSE:wc,add:wI,getKeyword:hs,hasKeyword:cd,defineVocabulary:bI,compileSchema:ld,interpretSchema:pd,collectEvaluatedProperties:SI,collectEvaluatedItems:II};const OI=Da,EI=e=>OI.value(e),PI=()=>!0;var jI={compile:EI,interpret:PI};const Rn=fe,Tr=Qr.exports,Qn=ud,kf=hc,Rr=Da,kI=async(e,t)=>{const r=Rr.uri(e);if(!(r in t)){t[r]=!1;const n=Rr.value(e);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${Rr.uri(e)}'`);t[r]=[`${e.dialectId}#validate`,Rr.uri(e),typeof n=="boolean"?n:await Rn.pipeline([Rr.entries,Rn.map(([s,a])=>[`${e.dialectId}#${s}`,a]),Rn.filter(([s])=>Qn.hasKeyword(s)&&s!==`${e.dialectId}#validate`),Rn.map(async([s,a])=>{const i=await Qn.getKeyword(s).compile(a,t,e);return[s,Rr.uri(a),i]}),Rn.all],e)]}return r},xI=(e,t,r,n)=>{const[s,a,i]=r[e];Tr.publishSync("result.start");const o=typeof i=="boolean"?i:i.every(([c,l,f])=>{Tr.publishSync("result.start");const h=Qn.getKeyword(c).interpret(f,t,r,n);return Tr.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:kf.uri(t),valid:h,ast:f}),Tr.publishSync("result.end"),h});return Tr.publishSync("result",{keyword:s,absoluteKeywordLocation:a,instanceLocation:kf.uri(t),valid:o,ast:e}),Tr.publishSync("result.end"),o},AI=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?[]:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedProperties")).reduce((i,[o,,c])=>{const l=i&&Qn.getKeyword(o).collectEvaluatedProperties(c,t,r,n);return l!==!1&&[...i,...l]},[])},CI=(e,t,r,n,s=!1)=>{const a=r[e][2];return typeof a=="boolean"?a?new Set:!1:a.filter(([i])=>!s||!i.endsWith("#unevaluatedItems")).reduce((i,[o,,c])=>{const l=i!==!1&&Qn.getKeyword(o).collectEvaluatedItems(c,t,r,n);return l!==!1&&new Set([...i,...l])},new Set)};var _I={compile:kI,interpret:xI,collectEvaluatedProperties:AI,collectEvaluatedItems:CI};const NI=jI,TI=_I;var RI={metaData:NI,validate:TI};const qI=ud,DI=Da,LI=hc,MI=dc,UI=RI,VI=sd;var D={Core:qI,Schema:DI,Instance:LI,Reference:MI,Keywords:UI,InvalidSchemaError:VI};const{Core:md,Schema:qn,Instance:$i}=D,BI=async(e,t,r)=>{const n=await qn.step("items",r),s=qn.typeOf(n,"array")?qn.length(n):Number.MAX_SAFE_INTEGER;return qn.typeOf(e,"boolean")?[s,qn.value(e)]:[s,await md.compileSchema(e,t)]},FI=([e,t],r,n,s)=>$i.typeOf(r,"array")?typeof t=="string"?$i.every((a,i)=>i<e||md.interpretSchema(t,a,n,s),r):$i.every((a,i)=>i<e?!0:t,r):!0;var KI={compile:BI,interpret:FI};const{Core:dd,Schema:gi,Instance:oo}=D,JI=async(e,t,r)=>{const n=await gi.step("items",r);return[gi.typeOf(n,"array")?gi.length(n):Number.MAX_SAFE_INTEGER,await dd.compileSchema(e,t)]},hd=([e,t],r,n,s)=>oo.typeOf(r,"array")?oo.every((a,i)=>i<e||dd.interpretSchema(t,a,n,s),r):!0,zI=(e,t,r,n)=>hd(e,t,r,n)&&new Set(oo.map((s,a)=>a,t));var GI={compile:JI,interpret:hd,collectEvaluatedItems:zI};const{Core:yd,Schema:Ft,Instance:xf}=D,HI=async(e,t,r)=>{const n=await Ft.step("properties",r),s=Ft.typeOf(n,"object")?Ft.keys(n):[],a=await Ft.step("patternProperties",r),i=Ft.typeOf(a,"object")?Ft.keys(a).map(o=>new RegExp(o)):[];return Ft.typeOf(e,"boolean")?[s,i,Ft.value(e)]:[s,i,await yd.compileSchema(e,t)]},XI=([e,t,r],n,s,a)=>{if(!xf.typeOf(n,"object"))return!0;const i=xf.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?i.every(([,o])=>yd.interpretSchema(r,o,s,a)):i.length===0||r};var WI={compile:HI,interpret:XI};const{Core:$d,Schema:qr,Instance:Af}=D,YI=async(e,t,r)=>{const n=await qr.step("properties",r),s=qr.typeOf(n,"object")?qr.keys(n):[],a=await qr.step("patternProperties",r),i=qr.typeOf(a,"object")?qr.keys(a).map(o=>new RegExp(o)):[];return[s,i,await $d.compileSchema(e,t)]},gd=([e,t,r],n,s,a)=>Af.typeOf(n,"object")?Af.entries(n).filter(([i])=>!e.includes(i)&&!t.some(o=>o.test(i))).every(([,i])=>$d.interpretSchema(r,i,s,a)):!0,QI=(e,t,r,n)=>gd(e,t,r,n)&&[new RegExp("")];var ZI={compile:YI,interpret:gd,collectEvaluatedProperties:QI};const{Core:La,Schema:ew}=D,Cf=fe,tw=(e,t)=>Cf.pipeline([ew.map(async r=>La.compileSchema(await r,t)),Cf.all],e),rw=(e,t,r,n)=>e.every(s=>La.interpretSchema(s,t,r,n)),nw=(e,t,r,n)=>e.reduce((s,a)=>{const i=s&&La.collectEvaluatedProperties(a,t,r,n);return i!==!1&&[...s,...i]},[]),sw=(e,t,r,n)=>e.reduce((s,a)=>{const i=s!==!1&&La.collectEvaluatedItems(a,t,r,n);return i!==!1&&new Set([...s,...i])},new Set);var aw={compile:tw,interpret:rw,collectEvaluatedProperties:nw,collectEvaluatedItems:sw};const{Core:Ma,Schema:iw}=D,_f=fe,ow=(e,t)=>_f.pipeline([iw.map(async r=>Ma.compileSchema(await r,t)),_f.all],e),cw=(e,t,r,n)=>e.filter(a=>Ma.interpretSchema(a,t,r,n)).length>0,lw=(e,t,r,n)=>e.reduce((s,a)=>{const i=Ma.collectEvaluatedProperties(a,t,r,n);return i!==!1?[...s||[],...i]:s},!1),fw=(e,t,r,n)=>e.reduce((s,a)=>{const i=Ma.collectEvaluatedItems(a,t,r,n);return i!==!1?new Set([...s||[],...i]):s},!1);var pw={compile:ow,interpret:cw,collectEvaluatedProperties:lw,collectEvaluatedItems:fw};const{Schema:uw,Instance:mw}=D,vd=Ut,dw=e=>vd(uw.value(e)),hw=(e,t)=>vd(mw.value(t))===e;var yw={compile:dw,interpret:hw};const{Core:bd,Instance:Nf}=D,$w=(e,t)=>bd.compileSchema(e,t),gw=(e,t,r,n)=>!Nf.typeOf(t,"array")||Nf.some(s=>bd.interpretSchema(e,s,r,n),t);var vw={compile:$w,interpret:gw};const{Core:kc,Schema:Dr,Instance:co}=D,bw=async(e,t,r)=>{const n=await kc.compileSchema(e,t),s=await Dr.step("minContains",r),a=Dr.typeOf(s,"number")?Dr.value(s):1,i=await Dr.step("maxContains",r),o=Dr.typeOf(i,"number")?Dr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},Sd=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!co.typeOf(n,"array"))return!0;const i=co.reduce((o,c)=>kc.interpretSchema(e,c,s,a)?o+1:o,0,n);return i>=t&&i<=r},Sw=(e,t,r,n)=>Sd(e,t,r,n)&&co.reduce((s,a,i)=>kc.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t);var Iw={compile:bw,interpret:Sd,collectEvaluatedItems:Sw};const{Core:ww,Schema:Ow}=D,vi=fe,Ew=async(e,t)=>{await vi.pipeline([Ow.entries,vi.map(([,r])=>ww.compileSchema(r,t)),vi.all],e)},Pw=()=>!0;var jw={compile:Ew,interpret:Pw};const{Core:Id,Schema:bi,Instance:Tf}=D,Si=fe,kw=(e,t)=>Si.pipeline([bi.entries,Si.map(async([r,n])=>[r,bi.typeOf(n,"array")?bi.value(n):await Id.compileSchema(n,t)]),Si.all],e),xw=(e,t,r,n)=>{const s=Tf.value(t);return!Tf.typeOf(t,"object")||e.every(([a,i])=>a in s?Array.isArray(i)?i.every(o=>o in s):Id.interpretSchema(i,t,r,n):!0)};var Aw={compile:kw,interpret:xw};const{Schema:Rf,Instance:qf}=D,Ii=fe,Cw=e=>Ii.pipeline([Rf.entries,Ii.map(([t,r])=>[t,Rf.value(r)]),Ii.all],e),_w=(e,t)=>{const r=qf.value(t);return!qf.typeOf(t,"object")||e.every(([n,s])=>!(n in r)||s.every(a=>a in r))};var Nw={compile:Cw,interpret:_w};const{Core:xc,Schema:Tw,Instance:lo}=D,wi=fe,Rw=(e,t)=>wi.pipeline([Tw.entries,wi.map(async([r,n])=>[r,await xc.compileSchema(n,t)]),wi.all],e),qw=(e,t,r,n)=>{const s=lo.value(t);return!lo.typeOf(t,"object")||e.every(([a,i])=>!(a in s)||xc.interpretSchema(i,t,r,n))},Dw=(e,t,r,n)=>e.reduce((s,[a,i])=>{if(!s||!lo.has(a,t))return s;const o=xc.collectEvaluatedProperties(i,t,r,n);return o!==!1&&s.concat(o)},[]);var Lw={compile:Rw,interpret:qw,collectEvaluatedProperties:Dw};const{Schema:Mw,Instance:Uw}=D,wd=Ut,Vw=e=>Mw.value(e).map(wd),Bw=(e,t)=>e.some(r=>wd(Uw.value(t))===r);var Fw={compile:Vw,interpret:Bw};const{Schema:Kw,Instance:Df}=D,Jw=async e=>Kw.value(e),zw=(e,t)=>!Df.typeOf(t,"number")||Df.value(t)<e;var Gw={compile:Jw,interpret:zw};const{Schema:Hw,Instance:Lf}=D,Xw=async e=>Hw.value(e),Ww=(e,t)=>!Lf.typeOf(t,"number")||Lf.value(t)>e;var Yw={compile:Xw,interpret:Ww};const{Core:Ua}=D,Qw=(e,t)=>Ua.compileSchema(e,t),Zw=(e,t,r,n)=>(Ua.interpretSchema(e,t,r,n),!0),eO=(e,t,r,n)=>Ua.collectEvaluatedProperties(e,t,r,n)||[],tO=(e,t,r,n)=>Ua.collectEvaluatedItems(e,t,r,n)||new Set;var rO={compile:Qw,interpret:Zw,collectEvaluatedProperties:eO,collectEvaluatedItems:tO};const{Core:tn,Schema:Mf}=D,nO=async(e,t,r)=>{if(Mf.has("if",r)){const n=await Mf.step("if",r);return[await tn.compileSchema(n,t),await tn.compileSchema(e,t)]}else return[]},sO=([e,t],r,n,s)=>e===void 0||!Ac(e,r,n,s)||tn.interpretSchema(t,r,n,s),Ac=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>tn.getKeyword(a).interpret(i,t,r,n))},aO=([e,t],r,n,s)=>e===void 0||!Ac(e,r,n,s)?[]:tn.collectEvaluatedProperties(t,r,n,s),iO=([e,t],r,n,s)=>e===void 0||!Ac(e,r,n,s)?new Set:tn.collectEvaluatedItems(t,r,n,s);var oO={compile:nO,interpret:sO,collectEvaluatedProperties:aO,collectEvaluatedItems:iO};const{Core:rn,Schema:Uf}=D,cO=async(e,t,r)=>{if(Uf.has("if",r)){const n=await Uf.step("if",r);return[await rn.compileSchema(n,t),await rn.compileSchema(e,t)]}else return[]},lO=([e,t],r,n,s)=>e===void 0||Cc(e,r,n,s)||rn.interpretSchema(t,r,n,s),Cc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>rn.getKeyword(a).interpret(i,t,r,n))},fO=([e,t],r,n,s)=>e===void 0||Cc(e,r,n,s)?[]:rn.collectEvaluatedProperties(t,r,n,s),pO=([e,t],r,n,s)=>e===void 0||Cc(e,r,n,s)?new Set:rn.collectEvaluatedItems(t,r,n,s);var uO={compile:cO,interpret:lO,collectEvaluatedProperties:fO,collectEvaluatedItems:pO};const{Core:ua,Schema:Vf,Instance:Ws}=D,mO=async(e,t)=>{if(Vf.typeOf(e,"array")){const r=await Vf.map(n=>ua.compileSchema(n,t),e);return Promise.all(r)}else return ua.compileSchema(e,t)},Od=(e,t,r,n)=>Ws.typeOf(t,"array")?typeof e=="string"?Ws.every(s=>ua.interpretSchema(e,s,r,n),t):Ws.every((s,a)=>!(a in e)||ua.interpretSchema(e[a],s,r,n),t):!0,dO=(e,t,r,n)=>Od(e,t,r,n)&&(typeof e=="string"?new Set(Ws.map((s,a)=>a,t)):new Set(e.map((s,a)=>a)));var hO={compile:mO,interpret:Od,collectEvaluatedItems:dO};const{Core:Ed,Schema:Oi,Instance:fo}=D,yO=async(e,t,r)=>{const n=await Oi.step("prefixItems",r);return[Oi.typeOf(n,"array")?Oi.length(n):0,await Ed.compileSchema(e,t)]},Pd=([e,t],r,n,s)=>fo.typeOf(r,"array")?fo.every((a,i)=>i<e||Ed.interpretSchema(t,a,n,s),r):!0,$O=(e,t,r,n)=>Pd(e,t,r,n)&&new Set(fo.map((s,a)=>a,t));var gO={compile:yO,interpret:Pd,collectEvaluatedItems:$O};const{Schema:vO,Instance:Bf}=D,bO=e=>vO.value(e),SO=(e,t)=>!Bf.typeOf(t,"array")||Bf.length(t)<=e;var IO={compile:bO,interpret:SO};const{Schema:wO,Instance:Ff}=D,OO=e=>wO.value(e),EO=(e,t)=>!Ff.typeOf(t,"string")||Ff.length(t)<=e;var PO={compile:OO,interpret:EO};const{Schema:jO,Instance:Kf}=D,kO=e=>jO.value(e),xO=(e,t)=>!Kf.typeOf(t,"string")||[...Kf.value(t)].length<=e;var AO={compile:kO,interpret:xO};const{Schema:CO,Instance:Jf}=D,_O=e=>CO.value(e),NO=(e,t)=>!Jf.typeOf(t,"object")||Jf.keys(t).length<=e;var TO={compile:_O,interpret:NO};const{Schema:Ei,Instance:zf}=D,RO=async(e,t,r)=>{const n=await Ei.step("exclusiveMaximum",r),s=Ei.value(n);return[Ei.value(e),s]},qO=([e,t],r)=>{if(!zf.typeOf(r,"number"))return!0;const n=zf.value(r);return t?n<e:n<=e};var DO={compile:RO,interpret:qO};const{Schema:LO,Instance:Gf}=D,MO=async e=>LO.value(e),UO=(e,t)=>!Gf.typeOf(t,"number")||Gf.value(t)<=e;var VO={compile:MO,interpret:UO};const{Schema:BO,Instance:Hf}=D,FO=e=>BO.value(e),KO=(e,t)=>!Hf.typeOf(t,"array")||Hf.length(t)>=e;var JO={compile:FO,interpret:KO};const{Schema:zO,Instance:Xf}=D,GO=e=>zO.value(e),HO=(e,t)=>!Xf.typeOf(t,"string")||Xf.length(t)>=e;var XO={compile:GO,interpret:HO};const{Schema:WO,Instance:Wf}=D,YO=e=>WO.value(e),QO=(e,t)=>!Wf.typeOf(t,"string")||[...Wf.value(t)].length>=e;var ZO={compile:YO,interpret:QO};const{Schema:eE,Instance:Yf}=D,tE=e=>eE.value(e),rE=(e,t)=>!Yf.typeOf(t,"object")||Yf.keys(t).length>=e;var nE={compile:tE,interpret:rE};const{Schema:Pi,Instance:Qf}=D,sE=async(e,t,r)=>{const n=await Pi.step("exclusiveMinimum",r),s=Pi.value(n);return[Pi.value(e),s]},aE=([e,t],r)=>{if(!Qf.typeOf(r,"number"))return!0;const n=Qf.value(r);return t?n>e:n>=e};var iE={compile:sE,interpret:aE};const{Schema:oE,Instance:Zf}=D,cE=async e=>oE.value(e),lE=(e,t)=>!Zf.typeOf(t,"number")||Zf.value(t)>=e;var fE={compile:cE,interpret:lE};const{Schema:pE,Instance:ep}=D,uE=e=>pE.value(e),mE=(e,t)=>{if(!ep.typeOf(t,"number"))return!0;const r=ep.value(t)%e;return tp(0,r)||tp(e,r)},tp=(e,t)=>Math.abs(e-t)<11920929e-14;var dE={compile:uE,interpret:mE};const{Core:jd}=D,hE=jd.compileSchema,yE=(e,t,r,n)=>!jd.interpretSchema(e,t,r,n);var $E={compile:hE,interpret:yE};const{Core:Va,Schema:gE}=D,vE=async(e,t)=>{const r=await gE.map(n=>Va.compileSchema(n,t),e);return Promise.all(r)},bE=(e,t,r,n)=>{let s=0;for(const a of e)if(Va.interpretSchema(a,t,r,n)&&s++,s>1)break;return s===1},SE=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Va.collectEvaluatedProperties(i,t,r,n);return o?s++===0&&o:a},!1)},IE=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Va.collectEvaluatedItems(i,t,r,n);return o?s++===0&&o:a},!1)};var wE={compile:vE,interpret:bE,collectEvaluatedProperties:SE,collectEvaluatedItems:IE};const{Schema:OE,Instance:rp}=D,EE=e=>new RegExp(OE.value(e),"u"),PE=(e,t)=>!rp.typeOf(t,"string")||e.test(rp.value(t));var jE={compile:EE,interpret:PE};const{Core:kd,Schema:kE,Instance:np}=D,ji=fe,xE=(e,t)=>ji.pipeline([kE.entries,ji.map(async([r,n])=>[new RegExp(r,"u"),await kd.compileSchema(n,t)]),ji.all],e),xd=(e,t,r,n)=>!np.typeOf(t,"object")||e.every(([s,a])=>np.entries(t).filter(([i])=>s.test(i)).every(([,i])=>kd.interpretSchema(a,i,r,n))),AE=(e,t,r,n)=>xd(e,t,r,n)&&e.map(([s])=>s);var CE={compile:xE,interpret:xd,collectEvaluatedProperties:AE};const _E=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,NE=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),TE=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Ad={isObject:_E,escapeRegExp:NE,splitUrl:TE};const{Core:Cd,Schema:RE,Instance:sp}=D,ap=fe,{escapeRegExp:qE}=Ad,DE=(e,t)=>ap.pipeline([RE.entries,ap.reduce(async(r,[n,s])=>(r[n]=await Cd.compileSchema(s,t),r),Object.create(null))],e),_d=(e,t,r,n)=>!sp.typeOf(t,"object")||sp.entries(t).filter(([s])=>s in e).every(([s,a])=>Cd.interpretSchema(e[s],a,r,n)),LE=(e,t,r,n)=>_d(e,t,r,n)&&Object.keys(e).map(s=>new RegExp(`^${qE(s)}$`));var ME={compile:DE,interpret:_d,collectEvaluatedProperties:LE};const{Core:Nd,Instance:ki}=D,UE=(e,t)=>Nd.compileSchema(e,t),VE=(e,t,r,n)=>!ki.typeOf(t,"object")||ki.keys(t).every(s=>Nd.interpretSchema(e,ki.cons(s),r,n));var BE={compile:UE,interpret:VE};const{Core:Zn,Schema:Ys}=D,{splitUrl:FE}=Ad,KE=async(e,t)=>{const[,r]=FE(Ys.value(e)),n=await Ys.get(Ys.value(e),e);return await Zn.compileSchema(n,t),[n.id,r]},JE=([e,t],r,n,s)=>{if(t in n.metaData[e].dynamicAnchors)return Zn.interpretSchema(s[t],r,n,s);{const a=Ys.getAnchorPointer(n.metaData[e],t);return Zn.interpretSchema(`${e}#${encodeURI(a)}`,r,n,s)}},zE=Zn.collectEvaluatedProperties,GE=Zn.collectEvaluatedItems;var HE={compile:KE,interpret:JE,collectEvaluatedProperties:zE,collectEvaluatedItems:GE};const{Core:Ba,Schema:ip}=D,XE=async(e,t)=>{const r=await ip.get(ip.value(e),e);return Ba.compileSchema(r,t)},WE=Ba.interpretSchema,YE=Ba.collectEvaluatedProperties,QE=Ba.collectEvaluatedItems;var ZE={compile:XE,interpret:WE,collectEvaluatedProperties:YE,collectEvaluatedItems:QE};const{Schema:eP,Instance:op}=D,tP=e=>eP.value(e),rP=(e,t)=>!op.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(op.value(t),r));var nP={compile:tP,interpret:rP};const{Core:Td,Schema:sP,Instance:cp}=D,lp=fe,aP=(e,t)=>lp.pipeline([sP.map(r=>Td.compileSchema(r,t)),lp.all],e),Rd=(e,t,r,n)=>cp.typeOf(t,"array")?cp.every((s,a)=>!(a in e)||Td.interpretSchema(e[a],s,r,n),t):!0,iP=(e,t,r,n)=>Rd(e,t,r,n)&&new Set(e.map((s,a)=>a));var oP={compile:aP,interpret:Rd,collectEvaluatedItems:iP};const{Schema:cP,Instance:fp}=D,lP=e=>cP.value(e),fP=(e,t)=>typeof e=="string"?fp.typeOf(t,e):e.some(fp.typeOf(t));var pP={compile:lP,interpret:fP};const{Core:po,Schema:uP,Instance:Qs}=D,mP=async(e,t,r)=>[uP.uri(r),await po.compileSchema(e,t)],qd=([e,t],r,n,s)=>{if(!Qs.typeOf(r,"array"))return!0;const a=po.collectEvaluatedItems(e,r,n,s,!0);return a===!1||Qs.every((i,o)=>a.has(o)||po.interpretSchema(t,Qs.step(o,r),n,s),r)},dP=(e,t,r,n)=>qd(e,t,r,n)&&new Set(Qs.map((s,a)=>a,t));var hP={compile:mP,interpret:qd,collectEvaluatedItems:dP};const{Core:uo,Schema:yP,Instance:pp}=D,$P=async(e,t,r)=>[yP.uri(r),await uo.compileSchema(e,t)],Dd=([e,t],r,n,s)=>{if(!pp.typeOf(r,"object"))return!0;const a=uo.collectEvaluatedProperties(e,r,n,s,!0);return!a||pp.entries(r).filter(([i])=>!a.some(o=>i.match(o))).every(([,i])=>uo.interpretSchema(t,i,n,s))},gP=(e,t,r,n)=>Dd(e,t,r,n)&&[new RegExp("")];var vP={compile:$P,interpret:Dd,collectEvaluatedProperties:gP};const{Schema:bP,Instance:xi}=D,SP=Ut,IP=e=>bP.value(e),wP=(e,t)=>{if(!xi.typeOf(t,"array")||e===!1)return!0;const r=xi.map(n=>SP(xi.value(n)),t);return new Set(r).size===r.length};var OP={compile:IP,interpret:wP};const{Keywords:up}=D;var $n={additionalItems:KI,additionalItems6:GI,additionalProperties:WI,additionalProperties6:ZI,allOf:aw,anyOf:pw,const:yw,contains:vw,containsMinContainsMaxContains:Iw,definitions:jw,dependencies:Aw,dependentRequired:Nw,dependentSchemas:Lw,enum:Fw,exclusiveMaximum:Gw,exclusiveMinimum:Yw,if:rO,then:oO,else:uO,items:hO,items202012:gO,maxItems:IO,maxLength:PO,maxLength6:AO,maxProperties:TO,maximumExclusiveMaximum:DO,maximum:VO,metaData:up.metaData,minItems:JO,minLength:XO,minLength6:ZO,minProperties:nE,minimumExclusiveMinimum:iE,minimum:fE,multipleOf:dE,not:$E,oneOf:wE,pattern:jE,patternProperties:CE,properties:ME,propertyNames:BE,dynamicRef:HE,ref:ZE,required:nP,tupleItems:oP,type:pP,unevaluatedItems:hP,unevaluatedProperties:vP,uniqueItems:OP,validate:up.validate},EP=`{
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
}`;const{Core:PP,Schema:ys}=D,de=$n,jP=EP,$s="http://json-schema.org/draft-04/schema";ys.setConfig($s,"baseToken","id");ys.setConfig($s,"embeddedToken","id");ys.setConfig($s,"anchorToken","id");ys.setConfig($s,"jrefToken","$ref");ys.add(JSON.parse(jP));PP.defineVocabulary($s,{validate:de.validate,additionalItems:de.additionalItems,additionalProperties:de.additionalProperties,allOf:de.allOf,anyOf:de.anyOf,default:de.metaData,definitions:de.definitions,dependencies:de.dependencies,description:de.metaData,enum:de.enum,format:de.metaData,items:de.items,maxItems:de.maxItems,maxLength:de.maxLength,maxProperties:de.maxProperties,maximum:de.maximumExclusiveMaximum,minItems:de.minItems,minLength:de.minLength,minProperties:de.minProperties,minimum:de.minimumExclusiveMinimum,multipleOf:de.multipleOf,not:de.not,oneOf:de.oneOf,pattern:de.pattern,patternProperties:de.patternProperties,properties:de.properties,required:de.required,title:de.metaData,type:de.type,uniqueItems:de.uniqueItems});var kP=`{
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
}`;const{Core:xP,Schema:gs}=D,oe=$n,AP=kP,vs="http://json-schema.org/draft-06/schema";gs.setConfig(vs,"baseToken","$id");gs.setConfig(vs,"embeddedToken","$id");gs.setConfig(vs,"anchorToken","$id");gs.setConfig(vs,"jrefToken","$ref");gs.add(JSON.parse(AP));xP.defineVocabulary(vs,{validate:oe.validate,additionalItems:oe.additionalItems6,additionalProperties:oe.additionalProperties6,allOf:oe.allOf,anyOf:oe.anyOf,const:oe.const,contains:oe.contains,default:oe.metaData,definitions:oe.definitions,dependencies:oe.dependencies,description:oe.metaData,enum:oe.enum,examples:oe.metaData,exclusiveMaximum:oe.exclusiveMaximum,exclusiveMinimum:oe.exclusiveMinimum,format:oe.metaData,items:oe.items,maxItems:oe.maxItems,maxLength:oe.maxLength6,maxProperties:oe.maxProperties,maximum:oe.maximum,minItems:oe.minItems,minLength:oe.minLength6,minProperties:oe.minProperties,minimum:oe.minimum,multipleOf:oe.multipleOf,not:oe.not,oneOf:oe.oneOf,pattern:oe.pattern,patternProperties:oe.patternProperties,properties:oe.properties,propertyNames:oe.propertyNames,required:oe.required,title:oe.metaData,type:oe.type,uniqueItems:oe.uniqueItems});var CP=`{
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
}`;const{Core:_P,Schema:bs}=D,se=$n,NP=CP,Ss="http://json-schema.org/draft-07/schema";bs.setConfig(Ss,"baseToken","$id");bs.setConfig(Ss,"embeddedToken","$id");bs.setConfig(Ss,"anchorToken","$id");bs.setConfig(Ss,"jrefToken","$ref");bs.add(JSON.parse(NP));_P.defineVocabulary(Ss,{validate:se.validate,additionalItems:se.additionalItems6,additionalProperties:se.additionalProperties6,allOf:se.allOf,anyOf:se.anyOf,const:se.const,contains:se.contains,default:se.metaData,definitions:se.definitions,dependencies:se.dependencies,description:se.metaData,enum:se.enum,exclusiveMaximum:se.exclusiveMaximum,exclusiveMinimum:se.exclusiveMinimum,format:se.metaData,if:se.if,then:se.then,else:se.else,items:se.items,maxItems:se.maxItems,maxLength:se.maxLength6,maxProperties:se.maxProperties,maximum:se.maximum,minItems:se.minItems,minLength:se.minLength6,minProperties:se.minProperties,minimum:se.minimum,multipleOf:se.multipleOf,not:se.not,oneOf:se.oneOf,pattern:se.pattern,patternProperties:se.patternProperties,properties:se.properties,propertyNames:se.propertyNames,readOnly:se.metaData,required:se.required,title:se.metaData,type:se.type,uniqueItems:se.uniqueItems,writeOnly:se.metaData});var TP=`{
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
}`,RP=`{
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
}`,qP=`{
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
}`,DP=`{
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
}`,LP=`{
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
}`,MP=`{
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
}`,UP=`{
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
}`;const{Core:Is,Schema:et}=D,z=$n,VP=TP,BP=RP,FP=qP,KP=DP,JP=LP,zP=MP,GP=UP,gn="https://json-schema.org/draft/2019-09/vocab/core";et.setConfig(gn,"baseToken","$id");et.setConfig(gn,"embeddedToken","$id");et.setConfig(gn,"anchorToken","$anchor");et.setConfig(gn,"recursiveAnchorToken","$recursiveAnchor");et.setConfig(gn,"vocabularyToken","$vocabulary");et.setConfig(gn,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);et.add(JSON.parse(VP));et.add(JSON.parse(BP));Is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:z.validate,$defs:z.definitions,$recursiveRef:z.dynamicRef,$ref:z.ref});et.add(JSON.parse(FP));Is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:z.additionalItems6,additionalProperties:z.additionalProperties6,allOf:z.allOf,anyOf:z.anyOf,contains:z.containsMinContainsMaxContains,dependentSchemas:z.dependentSchemas,if:z.if,then:z.then,else:z.else,items:z.items,not:z.not,oneOf:z.oneOf,patternProperties:z.patternProperties,properties:z.properties,propertyNames:z.propertyNames,unevaluatedItems:z.unevaluatedItems,unevaluatedProperties:z.unevaluatedProperties});et.add(JSON.parse(KP));Is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:z.const,dependentRequired:z.dependentRequired,enum:z.enum,exclusiveMaximum:z.exclusiveMaximum,exclusiveMinimum:z.exclusiveMinimum,maxItems:z.maxItems,maxLength:z.maxLength6,maxProperties:z.maxProperties,maximum:z.maximum,minItems:z.minItems,minLength:z.minLength6,minProperties:z.minProperties,minimum:z.minimum,multipleOf:z.multipleOf,pattern:z.pattern,required:z.required,type:z.type,uniqueItems:z.uniqueItems});et.add(JSON.parse(JP));Is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:z.metaData,deprecated:z.metaData,description:z.metaData,examples:z.metaData,readOnly:z.metaData,title:z.metaData,writeOnly:z.metaData});et.add(JSON.parse(zP));et.add(JSON.parse(GP));Is.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:z.metaData,contentMediaType:z.metaData,contentSchema:z.metaData});var HP=`{
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
}`,XP=`{
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
}`,WP=`{
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
}`,YP=`{
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
}`,QP=`{
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
}`,ZP=`{
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
}`,ej=`{
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
}`,tj=`{
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
}`,rj=`{
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
}`;const{Core:Sr,Schema:ze}=D,F=$n,nj=HP,sj=XP,aj=WP,ij=YP,oj=QP,cj=ZP,lj=ej,fj=tj,pj=rj,vn="https://json-schema.org/draft/2020-12/vocab/core";ze.setConfig(vn,"baseToken","$id");ze.setConfig(vn,"embeddedToken","$id");ze.setConfig(vn,"anchorToken","$anchor");ze.setConfig(vn,"dynamicAnchorToken","$dynamicAnchor");ze.setConfig(vn,"vocabularyToken","$vocabulary");ze.setConfig(vn,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);ze.add(JSON.parse(nj));ze.add(JSON.parse(sj));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:F.validate,$defs:F.definitions,$dynamicRef:F.dynamicRef,$ref:F.ref});ze.add(JSON.parse(aj));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:F.additionalProperties6,allOf:F.allOf,anyOf:F.anyOf,contains:F.containsMinContainsMaxContains,dependentSchemas:F.dependentSchemas,if:F.if,then:F.then,else:F.else,items:F.items202012,not:F.not,oneOf:F.oneOf,patternProperties:F.patternProperties,prefixItems:F.tupleItems,properties:F.properties,propertyNames:F.propertyNames});ze.add(JSON.parse(ij));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:F.const,dependentRequired:F.dependentRequired,enum:F.enum,exclusiveMaximum:F.exclusiveMaximum,exclusiveMinimum:F.exclusiveMinimum,maxItems:F.maxItems,maxLength:F.maxLength6,maxProperties:F.maxProperties,maximum:F.maximum,minItems:F.minItems,minLength:F.minLength6,minProperties:F.minProperties,minimum:F.minimum,multipleOf:F.multipleOf,pattern:F.pattern,required:F.required,type:F.type,uniqueItems:F.uniqueItems});ze.add(JSON.parse(oj));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:F.metaData,deprecated:F.metaData,description:F.metaData,examples:F.metaData,readOnly:F.metaData,title:F.metaData,writeOnly:F.metaData});ze.add(JSON.parse(cj));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:F.metaData});ze.add(JSON.parse(lj));ze.add(JSON.parse(fj));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:F.metaData,contentMediaType:F.metaData,contentSchema:F.metaData});ze.add(JSON.parse(pj));Sr.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:F.unevaluatedItems,unevaluatedProperties:F.unevaluatedProperties});const{Core:It,Schema:uj,InvalidSchemaError:mj}=D,dj=$n;It.add,uj.get,It.validate,It.compile,It.interpret,It.setMetaOutputFormat,It.setShouldMetaValidate,It.FLAG,It.BASIC,It.DETAILED,It.VERBOSE;var hj=`{
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
}`;const{Schema:Ld}=D,Md=hj;Ld.add(JSON.parse(Md),"https://spec.openapis.org/oas/3.0/schema");Ld.add(JSON.parse(Md),"https://spec.openapis.org/oas/3.0/schema/latest");var yj=`{
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
}`,$j=`{
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
}`,Ud=`{
  "$id": "https://spec.openapis.org/oas/3.1/schema/2022-02-27",
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "description": "The description of OpenAPI v3.1.x documents without schema validation, as defined by https://spec.openapis.org/oas/v3.1.0",
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
      },
      "default": [
        { "url": "/" }
      ]
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#info-object",
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
          "type": "string",
          "format": "uri"
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#contact-object",
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "url": {
          "type": "string",
          "format": "uri"
        },
        "email": {
          "type": "string",
          "format": "email"
        }
      },
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "license": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#license-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#server-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#server-variable-object",
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
        "description": {
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#components-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#paths-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#path-item-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#operation-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#external-documentation-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#parameter-object",
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
        "schema": {
          "$dynamicRef": "#meta"
        },
        "content": {
          "$ref": "#/$defs/content",
          "minProperties": 1,
          "maxProperties": 1
        }
      },
      "required": [
        "name",
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
          "allowEmptyValue": {
            "default": false,
            "type": "boolean"
          }
        }
      },
      "dependentSchemas": {
        "schema": {
          "properties": {
            "style": {
              "type": "string"
            },
            "explode": {
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
                  },
                  "allowReserved": {
                    "default": false,
                    "type": "boolean"
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#request-body-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#fixed-fields-10",
      "type": "object",
      "additionalProperties": {
        "$ref": "#/$defs/media-type"
      },
      "propertyNames": {
        "format": "media-range"
      }
    },
    "media-type": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#media-type-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#encoding-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#responses-object",
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
      "minProperties": 1,
      "$ref": "#/$defs/specification-extensions",
      "unevaluatedProperties": false
    },
    "response": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#response-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#callback-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#example-object",
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
      "not": {
        "required": [
          "value",
          "externalValue"
        ]
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#link-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#header-object",
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
          "$ref": "#/$defs/content",
          "minProperties": 1,
          "maxProperties": 1
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#tag-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#reference-object",
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#schema-object",
      "$dynamicAnchor": "meta",
      "type": [
        "object",
        "boolean"
      ]
    },
    "security-scheme": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#security-scheme-object",
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
              "type": "string",
              "format": "uri"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri"
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
              "type": "string",
              "format": "uri"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri"
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
              "type": "string",
              "format": "uri"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri"
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
              "type": "string",
              "format": "uri"
            },
            "tokenUrl": {
              "type": "string",
              "format": "uri"
            },
            "refreshUrl": {
              "type": "string",
              "format": "uri"
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
      "$comment": "https://spec.openapis.org/oas/v3.1.0#security-requirement-object",
      "type": "object",
      "additionalProperties": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "specification-extensions": {
      "$comment": "https://spec.openapis.org/oas/v3.1.0#specification-extensions",
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
}`,Vd=`{
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
}`;const{Core:gj,Keywords:Ls,Schema:At}=D,vj=yj,bj=$j,_c=Ud,Nc=Ud,Sj=Vd,Ij=Vd;At.add(JSON.parse(_c),"https://spec.openapis.org/oas/3.1/schema");At.add(JSON.parse(_c),"https://spec.openapis.org/oas/3.1/schema/latest");At.add(JSON.parse(Nc),"https://spec.openapis.org/oas/3.1/schema-base");At.add(JSON.parse(Nc),"https://spec.openapis.org/oas/3.1/schema-base/latest");At.add(JSON.parse(_c),"https://spec.openapis.org/oas/3.1/schema/2022-02-27");At.add(JSON.parse(Nc),"https://spec.openapis.org/oas/3.1/schema-base/2022-02-27");At.add(JSON.parse(Sj),"https://spec.openapis.org/oas/3.1/schema/2021-09-28");At.add(JSON.parse(Ij),"https://spec.openapis.org/oas/3.1/schema-base/2021-09-28");At.add(JSON.parse(vj));At.add(JSON.parse(bj));gj.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:Ls.metaData,discriminator:Ls.metaData,externalDocs:Ls.metaData,xml:Ls.metaData});const{Core:Bd,Schema:Dn,Instance:Ai}=j,wj=async(e,t,r)=>{const n=await Dn.step("items",r),s=Dn.typeOf(n,"array")?Dn.length(n):Number.MAX_SAFE_INTEGER;return Dn.typeOf(e,"boolean")?[s,Dn.value(e)]:[s,await Bd.compileSchema(e,t)]},Oj=([e,t],r,n,s)=>Ai.typeOf(r,"array")?typeof t=="string"?Ai.every((a,i)=>i<e||Bd.interpretSchema(t,a,n,s),r):Ai.every((a,i)=>i<e?!0:t,r):!0;var Ej={compile:wj,interpret:Oj};const{Core:Fd,Schema:Ci,Instance:mo}=j,Pj=async(e,t,r)=>{const n=await Ci.step("items",r);return[Ci.typeOf(n,"array")?Ci.length(n):Number.MAX_SAFE_INTEGER,await Fd.compileSchema(e,t)]},Kd=([e,t],r,n,s)=>mo.typeOf(r,"array")?mo.every((a,i)=>i<e||Fd.interpretSchema(t,a,n,s),r):!0,jj=(e,t,r,n)=>Kd(e,t,r,n)&&new Set(mo.map((s,a)=>a,t));var kj={compile:Pj,interpret:Kd,collectEvaluatedItems:jj};const{Core:Jd,Schema:Kt,Instance:mp}=j,xj=async(e,t,r)=>{const n=await Kt.step("properties",r),s=Kt.typeOf(n,"object")?Kt.keys(n):[],a=await Kt.step("patternProperties",r),i=Kt.typeOf(a,"object")?Kt.keys(a).map(o=>new RegExp(o)):[];return Kt.typeOf(e,"boolean")?[s,i,Kt.value(e)]:[s,i,await Jd.compileSchema(e,t)]},Aj=([e,t,r],n,s,a)=>{if(!mp.typeOf(n,"object"))return!0;const i=mp.entries(n).filter(([o])=>!e.includes(o)&&!t.some(c=>c.test(o)));return typeof r=="string"?i.every(([,o])=>Jd.interpretSchema(r,o,s,a)):i.length===0||r};var Cj={compile:xj,interpret:Aj};const{Core:zd,Schema:Lr,Instance:dp}=j,_j=async(e,t,r)=>{const n=await Lr.step("properties",r),s=Lr.typeOf(n,"object")?Lr.keys(n):[],a=await Lr.step("patternProperties",r),i=Lr.typeOf(a,"object")?Lr.keys(a).map(o=>new RegExp(o)):[];return[s,i,await zd.compileSchema(e,t)]},Gd=([e,t,r],n,s,a)=>dp.typeOf(n,"object")?dp.entries(n).filter(([i])=>!e.includes(i)&&!t.some(o=>o.test(i))).every(([,i])=>zd.interpretSchema(r,i,s,a)):!0,Nj=(e,t,r,n)=>Gd(e,t,r,n)&&[new RegExp("")];var Tj={compile:_j,interpret:Gd,collectEvaluatedProperties:Nj};const{Core:Fa,Schema:Rj}=j,hp=fe,qj=(e,t)=>hp.pipeline([Rj.map(async r=>Fa.compileSchema(await r,t)),hp.all],e),Dj=(e,t,r,n)=>e.every(s=>Fa.interpretSchema(s,t,r,n)),Lj=(e,t,r,n)=>e.reduce((s,a)=>{const i=s&&Fa.collectEvaluatedProperties(a,t,r,n);return i!==!1&&[...s,...i]},[]),Mj=(e,t,r,n)=>e.reduce((s,a)=>{const i=s!==!1&&Fa.collectEvaluatedItems(a,t,r,n);return i!==!1&&new Set([...s,...i])},new Set);var Uj={compile:qj,interpret:Dj,collectEvaluatedProperties:Lj,collectEvaluatedItems:Mj};const{Core:Ka,Schema:Vj}=j,yp=fe,Bj=(e,t)=>yp.pipeline([Vj.map(async r=>Ka.compileSchema(await r,t)),yp.all],e),Fj=(e,t,r,n)=>e.filter(a=>Ka.interpretSchema(a,t,r,n)).length>0,Kj=(e,t,r,n)=>e.reduce((s,a)=>{const i=Ka.collectEvaluatedProperties(a,t,r,n);return i!==!1?[...s||[],...i]:s},!1),Jj=(e,t,r,n)=>e.reduce((s,a)=>{const i=Ka.collectEvaluatedItems(a,t,r,n);return i!==!1?new Set([...s||[],...i]):s},!1);var zj={compile:Bj,interpret:Fj,collectEvaluatedProperties:Kj,collectEvaluatedItems:Jj};const{Schema:Gj,Instance:Hj}=j,Hd=Ut,Xj=e=>Hd(Gj.value(e)),Wj=(e,t)=>Hd(Hj.value(t))===e;var Yj={compile:Xj,interpret:Wj};const{Core:Xd,Instance:$p}=j,Qj=(e,t)=>Xd.compileSchema(e,t),Zj=(e,t,r,n)=>!$p.typeOf(t,"array")||$p.some(s=>Xd.interpretSchema(e,s,r,n),t);var ek={compile:Qj,interpret:Zj};const{Core:Tc,Schema:Mr,Instance:ho}=j,tk=async(e,t,r)=>{const n=await Tc.compileSchema(e,t),s=await Mr.step("minContains",r),a=Mr.typeOf(s,"number")?Mr.value(s):1,i=await Mr.step("maxContains",r),o=Mr.typeOf(i,"number")?Mr.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},Wd=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!ho.typeOf(n,"array"))return!0;const i=ho.reduce((o,c)=>Tc.interpretSchema(e,c,s,a)?o+1:o,0,n);return i>=t&&i<=r},rk=(e,t,r,n)=>Wd(e,t,r,n)&&ho.reduce((s,a,i)=>Tc.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t);var nk={compile:tk,interpret:Wd,collectEvaluatedItems:rk};const{Core:Ja,Schema:Ur,Instance:fr}=j,sk=async(e,t,r)=>{const n=await Ja.compileSchema(e,t),s=await Ur.step("minContains",r),a=Ur.typeOf(s,"number")?Ur.value(s):1,i=await Ur.step("maxContains",r),o=Ur.typeOf(i,"number")?Ur.value(i):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:a,maxContains:o}},Rc=({contains:e,minContains:t,maxContains:r},n,s,a)=>{if(!fr.typeOf(n,"array")&&!fr.typeOf(n,"object"))return!0;const i=fr.entries(n).reduce((o,[,c])=>Ja.interpretSchema(e,c,s,a)?o+1:o,0);return i>=t&&i<=r},ak=(e,t,r,n)=>Rc(e,t,r,n)&&fr.typeOf(t,"array")&&fr.reduce((s,a,i)=>Ja.interpretSchema(e.contains,a,r,n)?s.add(i):s,new Set,t),ik=(e,t,r,n)=>Rc(e,t,r,n)&&fr.typeOf(t,"object")&&fr.entries(t).reduce((s,[a,i])=>(Ja.interpretSchema(e.contains,i,r,n)&&s.push(a),s),[],t);var ok={compile:sk,interpret:Rc,collectEvaluatedItems:ak,collectEvaluatedProperties:ik};const{Core:ck,Schema:lk}=j,_i=fe,fk=async(e,t)=>{await _i.pipeline([lk.entries,_i.map(([,r])=>ck.compileSchema(r,t)),_i.all],e)},pk=()=>!0;var uk={compile:fk,interpret:pk};const{Core:Yd,Schema:Ni,Instance:gp}=j,Ti=fe,mk=(e,t)=>Ti.pipeline([Ni.entries,Ti.map(async([r,n])=>[r,Ni.typeOf(n,"array")?Ni.value(n):await Yd.compileSchema(n,t)]),Ti.all],e),dk=(e,t,r,n)=>{const s=gp.value(t);return!gp.typeOf(t,"object")||e.every(([a,i])=>a in s?Array.isArray(i)?i.every(o=>o in s):Yd.interpretSchema(i,t,r,n):!0)};var hk={compile:mk,interpret:dk};const{Schema:vp,Instance:bp}=j,Ri=fe,yk=e=>Ri.pipeline([vp.entries,Ri.map(([t,r])=>[t,vp.value(r)]),Ri.all],e),$k=(e,t)=>{const r=bp.value(t);return!bp.typeOf(t,"object")||e.every(([n,s])=>!(n in r)||s.every(a=>a in r))};var gk={compile:yk,interpret:$k};const{Core:qc,Schema:vk,Instance:yo}=j,qi=fe,bk=(e,t)=>qi.pipeline([vk.entries,qi.map(async([r,n])=>[r,await qc.compileSchema(n,t)]),qi.all],e),Sk=(e,t,r,n)=>{const s=yo.value(t);return!yo.typeOf(t,"object")||e.every(([a,i])=>!(a in s)||qc.interpretSchema(i,t,r,n))},Ik=(e,t,r,n)=>e.reduce((s,[a,i])=>{if(!s||!yo.has(a,t))return s;const o=qc.collectEvaluatedProperties(i,t,r,n);return o!==!1&&s.concat(o)},[]);var wk={compile:bk,interpret:Sk,collectEvaluatedProperties:Ik};const Ok=e=>typeof e=="object"&&!Array.isArray(e)&&e!==null,Ek=e=>e.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),Pk=e=>{const t=e.indexOf("#"),r=t===-1?e.length:t,n=e.slice(0,r),s=e.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Dc={isObject:Ok,escapeRegExp:Ek,splitUrl:Pk};const{Core:es,Schema:Zs}=j,{splitUrl:jk}=Dc,kk=async(e,t)=>{const[,r]=jk(Zs.value(e)),n=await Zs.get(Zs.value(e),e);return await es.compileSchema(n,t),[n.id,r]},xk=([e,t],r,n,s)=>{if(t in n.metaData[e].dynamicAnchors)return es.interpretSchema(s[t],r,n,s);{const a=Zs.getAnchorPointer(n.metaData[e],t);return es.interpretSchema(`${e}#${encodeURI(a)}`,r,n,s)}},Ak=es.collectEvaluatedProperties,Ck=es.collectEvaluatedItems;var _k={compile:kk,interpret:xk,collectEvaluatedProperties:Ak,collectEvaluatedItems:Ck};const{Core:za,Schema:Sp}=j,{splitUrl:Nk}=Dc,Tk=async(e,t)=>{const[r,n]=Nk(Sp.value(e)),s=await Sp.get(r,e);return await za.compileSchema(s,t),n},Rk=(e,t,r,n)=>{if(!(e in n))throw Error(`No dynamic anchor found for "${e}"`);return za.interpretSchema(n[e],t,r,n)},qk=za.collectEvaluatedProperties,Dk=za.collectEvaluatedItems;var Lk={compile:Tk,interpret:Rk,collectEvaluatedProperties:qk,collectEvaluatedItems:Dk};const{Core:Lc,Schema:Mk}=j,Uk=Mk.value,Vk=(e,t,r,n)=>{if(!(e in n))throw Error(`No dynamic anchor found for "${e}"`);return Lc.interpretSchema(n[e],t,r,n)},Bk=Lc.collectEvaluatedProperties,Fk=Lc.collectEvaluatedItems;var Kk={compile:Uk,interpret:Vk,collectEvaluatedProperties:Bk,collectEvaluatedItems:Fk};const{Schema:Jk,Instance:zk}=j,Qd=Ut,Gk=e=>Jk.value(e).map(Qd),Hk=(e,t)=>e.some(r=>Qd(zk.value(t))===r);var Xk={compile:Gk,interpret:Hk};const{Schema:Wk,Instance:Ip}=j,Yk=async e=>Wk.value(e),Qk=(e,t)=>!Ip.typeOf(t,"number")||Ip.value(t)<e;var Zk={compile:Yk,interpret:Qk};const{Schema:ex,Instance:wp}=j,tx=async e=>ex.value(e),rx=(e,t)=>!wp.typeOf(t,"number")||wp.value(t)>e;var nx={compile:tx,interpret:rx};const{Core:Ga}=j,sx=(e,t)=>Ga.compileSchema(e,t),ax=(e,t,r,n)=>(Ga.interpretSchema(e,t,r,n),!0),ix=(e,t,r,n)=>Ga.collectEvaluatedProperties(e,t,r,n)||[],ox=(e,t,r,n)=>Ga.collectEvaluatedItems(e,t,r,n)||new Set;var cx={compile:sx,interpret:ax,collectEvaluatedProperties:ix,collectEvaluatedItems:ox};const{Core:nn,Schema:Op}=j,lx=async(e,t,r)=>{if(Op.has("if",r)){const n=await Op.step("if",r);return[await nn.compileSchema(n,t),await nn.compileSchema(e,t)]}else return[]},fx=([e,t],r,n,s)=>e===void 0||!Mc(e,r,n,s)||nn.interpretSchema(t,r,n,s),Mc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>nn.getKeyword(a).interpret(i,t,r,n))},px=([e,t],r,n,s)=>e===void 0||!Mc(e,r,n,s)?[]:nn.collectEvaluatedProperties(t,r,n,s),ux=([e,t],r,n,s)=>e===void 0||!Mc(e,r,n,s)?new Set:nn.collectEvaluatedItems(t,r,n,s);var mx={compile:lx,interpret:fx,collectEvaluatedProperties:px,collectEvaluatedItems:ux};const{Core:sn,Schema:Ep}=j,dx=async(e,t,r)=>{if(Ep.has("if",r)){const n=await Ep.step("if",r);return[await sn.compileSchema(n,t),await sn.compileSchema(e,t)]}else return[]},hx=([e,t],r,n,s)=>e===void 0||Uc(e,r,n,s)||sn.interpretSchema(t,r,n,s),Uc=(e,t,r,n)=>{const s=r[e][2];return typeof s=="boolean"?s:s.every(([a,,i])=>sn.getKeyword(a).interpret(i,t,r,n))},yx=([e,t],r,n,s)=>e===void 0||Uc(e,r,n,s)?[]:sn.collectEvaluatedProperties(t,r,n,s),$x=([e,t],r,n,s)=>e===void 0||Uc(e,r,n,s)?new Set:sn.collectEvaluatedItems(t,r,n,s);var gx={compile:dx,interpret:hx,collectEvaluatedProperties:yx,collectEvaluatedItems:$x};const{Core:ma,Schema:Pp,Instance:ea}=j,vx=async(e,t)=>{if(Pp.typeOf(e,"array")){const r=await Pp.map(n=>ma.compileSchema(n,t),e);return Promise.all(r)}else return ma.compileSchema(e,t)},Zd=(e,t,r,n)=>ea.typeOf(t,"array")?typeof e=="string"?ea.every(s=>ma.interpretSchema(e,s,r,n),t):ea.every((s,a)=>!(a in e)||ma.interpretSchema(e[a],s,r,n),t):!0,bx=(e,t,r,n)=>Zd(e,t,r,n)&&(typeof e=="string"?new Set(ea.map((s,a)=>a,t)):new Set(e.map((s,a)=>a)));var Sx={compile:vx,interpret:Zd,collectEvaluatedItems:bx};const{Core:eh,Schema:Di,Instance:$o}=j,Ix=async(e,t,r)=>{const n=await Di.step("prefixItems",r);return[Di.typeOf(n,"array")?Di.length(n):0,await eh.compileSchema(e,t)]},th=([e,t],r,n,s)=>$o.typeOf(r,"array")?$o.every((a,i)=>i<e||eh.interpretSchema(t,a,n,s),r):!0,wx=(e,t,r,n)=>th(e,t,r,n)&&new Set($o.map((s,a)=>a,t));var Ox={compile:Ix,interpret:th,collectEvaluatedItems:wx};const{Schema:Ex,Instance:jp}=j,Px=e=>Ex.value(e),jx=(e,t)=>!jp.typeOf(t,"array")||jp.length(t)<=e;var kx={compile:Px,interpret:jx};const{Schema:xx,Instance:kp}=j,Ax=e=>xx.value(e),Cx=(e,t)=>!kp.typeOf(t,"string")||kp.length(t)<=e;var _x={compile:Ax,interpret:Cx};const{Schema:Nx,Instance:xp}=j,Tx=e=>Nx.value(e),Rx=(e,t)=>!xp.typeOf(t,"string")||[...xp.value(t)].length<=e;var qx={compile:Tx,interpret:Rx};const{Schema:Dx,Instance:Ap}=j,Lx=e=>Dx.value(e),Mx=(e,t)=>!Ap.typeOf(t,"object")||Ap.keys(t).length<=e;var Ux={compile:Lx,interpret:Mx};const{Schema:Li,Instance:Cp}=j,Vx=async(e,t,r)=>{const n=await Li.step("exclusiveMaximum",r),s=Li.value(n);return[Li.value(e),s]},Bx=([e,t],r)=>{if(!Cp.typeOf(r,"number"))return!0;const n=Cp.value(r);return t?n<e:n<=e};var Fx={compile:Vx,interpret:Bx};const{Schema:Kx,Instance:_p}=j,Jx=async e=>Kx.value(e),zx=(e,t)=>!_p.typeOf(t,"number")||_p.value(t)<=e;var Gx={compile:Jx,interpret:zx};const{Schema:Hx,Instance:Np}=j,Xx=e=>Hx.value(e),Wx=(e,t)=>!Np.typeOf(t,"array")||Np.length(t)>=e;var Yx={compile:Xx,interpret:Wx};const{Schema:Qx,Instance:Tp}=j,Zx=e=>Qx.value(e),eA=(e,t)=>!Tp.typeOf(t,"string")||Tp.length(t)>=e;var tA={compile:Zx,interpret:eA};const{Schema:rA,Instance:Rp}=j,nA=e=>rA.value(e),sA=(e,t)=>!Rp.typeOf(t,"string")||[...Rp.value(t)].length>=e;var aA={compile:nA,interpret:sA};const{Schema:iA,Instance:qp}=j,oA=e=>iA.value(e),cA=(e,t)=>!qp.typeOf(t,"object")||qp.keys(t).length>=e;var lA={compile:oA,interpret:cA};const{Schema:Mi,Instance:Dp}=j,fA=async(e,t,r)=>{const n=await Mi.step("exclusiveMinimum",r),s=Mi.value(n);return[Mi.value(e),s]},pA=([e,t],r)=>{if(!Dp.typeOf(r,"number"))return!0;const n=Dp.value(r);return t?n>e:n>=e};var uA={compile:fA,interpret:pA};const{Schema:mA,Instance:Lp}=j,dA=async e=>mA.value(e),hA=(e,t)=>!Lp.typeOf(t,"number")||Lp.value(t)>=e;var yA={compile:dA,interpret:hA};const{Schema:$A,Instance:Mp}=j,gA=e=>$A.value(e),vA=(e,t)=>{if(!Mp.typeOf(t,"number"))return!0;const r=Mp.value(t)%e;return Up(0,r)||Up(e,r)},Up=(e,t)=>Math.abs(e-t)<11920929e-14;var bA={compile:gA,interpret:vA};const{Core:rh}=j,SA=rh.compileSchema,IA=(e,t,r,n)=>!rh.interpretSchema(e,t,r,n);var wA={compile:SA,interpret:IA};const{Core:Ha,Schema:OA}=j,EA=async(e,t)=>{const r=await OA.map(n=>Ha.compileSchema(n,t),e);return Promise.all(r)},PA=(e,t,r,n)=>{let s=0;for(const a of e)if(Ha.interpretSchema(a,t,r,n)&&s++,s>1)break;return s===1},jA=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ha.collectEvaluatedProperties(i,t,r,n);return o?s++===0&&o:a},!1)},kA=(e,t,r,n)=>{let s=0;return e.reduce((a,i)=>{if(s>1)return!1;const o=Ha.collectEvaluatedItems(i,t,r,n);return o?s++===0&&o:a},!1)};var xA={compile:EA,interpret:PA,collectEvaluatedProperties:jA,collectEvaluatedItems:kA};const{Schema:Ms,Instance:Vp}=j,AA=async(e,t,r)=>{const n=await Ms.value(e),s=await Ms.step("properties",r),a=Ms.typeOf(s,"object")?Ms.keys(s):[],i=new Set(a);return n.forEach(o=>a.remove(o)),[...i]},CA=(e,t)=>!Vp.typeOf(t,"object")||e.every(r=>Vp.value(t).hasOwnProperty(r));var _A={compile:AA,interpret:CA};const{Schema:NA,Instance:Bp}=j,TA=e=>new RegExp(NA.value(e),"u"),RA=(e,t)=>!Bp.typeOf(t,"string")||e.test(Bp.value(t));var qA={compile:TA,interpret:RA};const{Core:nh,Schema:DA,Instance:Fp}=j,Ui=fe,LA=(e,t)=>Ui.pipeline([DA.entries,Ui.map(async([r,n])=>[new RegExp(r,"u"),await nh.compileSchema(n,t)]),Ui.all],e),sh=(e,t,r,n)=>!Fp.typeOf(t,"object")||e.every(([s,a])=>Fp.entries(t).filter(([i])=>s.test(i)).every(([,i])=>nh.interpretSchema(a,i,r,n))),MA=(e,t,r,n)=>sh(e,t,r,n)&&e.map(([s])=>s);var UA={compile:LA,interpret:sh,collectEvaluatedProperties:MA};const{Core:ah,Schema:VA,Instance:Kp}=j,Jp=fe,{escapeRegExp:BA}=Dc,FA=(e,t)=>Jp.pipeline([VA.entries,Jp.reduce(async(r,[n,s])=>(r[n]=await ah.compileSchema(s,t),r),Object.create(null))],e),ih=(e,t,r,n)=>!Kp.typeOf(t,"object")||Kp.entries(t).filter(([s])=>s in e).every(([s,a])=>ah.interpretSchema(e[s],a,r,n)),KA=(e,t,r,n)=>ih(e,t,r,n)&&Object.keys(e).map(s=>new RegExp(`^${BA(s)}$`));var JA={compile:FA,interpret:ih,collectEvaluatedProperties:KA};const{Core:oh,Schema:zp,Instance:Vi}=j,Us=fe,zA=async(e,t)=>Us.pipeline([zp.entries,Us.reduce(async(r,[n,s])=>(r[n]=await Us.pipeline([zp.entries,Us.reduce(async(a,[i,o])=>(a[i]=await oh.compileSchema(o,t),a),{})],s),r),{})],e),GA=(e,t,r,n)=>!Vi.typeOf(t,"object")||Object.entries(e).every(([s,a])=>!Vi.has(s,t)||oh.interpretSchema(a[Vi.value(t)[s]],t,r,n));var HA={compile:zA,interpret:GA};const{Core:ch,Instance:Bi}=j,XA=(e,t)=>ch.compileSchema(e,t),WA=(e,t,r,n)=>!Bi.typeOf(t,"object")||Bi.keys(t).every(s=>ch.interpretSchema(e,Bi.cons(s),r,n));var YA={compile:XA,interpret:WA};const{Core:Xa,Schema:Gp}=j,QA=async(e,t)=>{const r=await Gp.get(Gp.value(e),e);return Xa.compileSchema(r,t)},ZA=Xa.interpretSchema,eC=Xa.collectEvaluatedProperties,tC=Xa.collectEvaluatedItems;var rC={compile:QA,interpret:ZA,collectEvaluatedProperties:eC,collectEvaluatedItems:tC};const{Schema:nC,Instance:Hp}=j,sC=e=>nC.value(e),aC=(e,t)=>!Hp.typeOf(t,"object")||e.every(r=>Object.prototype.hasOwnProperty.call(Hp.value(t),r));var iC={compile:sC,interpret:aC};const{Core:lh,Schema:oC,Instance:Xp}=j,Wp=fe,cC=(e,t)=>Wp.pipeline([oC.map(r=>lh.compileSchema(r,t)),Wp.all],e),fh=(e,t,r,n)=>Xp.typeOf(t,"array")?Xp.every((s,a)=>!(a in e)||lh.interpretSchema(e[a],s,r,n),t):!0,lC=(e,t,r,n)=>fh(e,t,r,n)&&new Set(e.map((s,a)=>a));var fC={compile:cC,interpret:fh,collectEvaluatedItems:lC};const{Schema:pC,Instance:Yp}=j,uC=e=>pC.value(e),mC=(e,t)=>typeof e=="string"?Yp.typeOf(t,e):e.some(Yp.typeOf(t));var dC={compile:uC,interpret:mC};const{Core:go,Schema:hC,Instance:ta}=j,yC=async(e,t,r)=>[hC.uri(r),await go.compileSchema(e,t)],ph=([e,t],r,n,s)=>{if(!ta.typeOf(r,"array"))return!0;const a=go.collectEvaluatedItems(e,r,n,s,!0);return a===!1||ta.every((i,o)=>a.has(o)||go.interpretSchema(t,ta.step(o,r),n,s),r)},$C=(e,t,r,n)=>ph(e,t,r,n)&&new Set(ta.map((s,a)=>a,t));var gC={compile:yC,interpret:ph,collectEvaluatedItems:$C};const{Core:vo,Schema:vC,Instance:Qp}=j,bC=async(e,t,r)=>[vC.uri(r),await vo.compileSchema(e,t)],uh=([e,t],r,n,s)=>{if(!Qp.typeOf(r,"object"))return!0;const a=vo.collectEvaluatedProperties(e,r,n,s,!0);return!a||Qp.entries(r).filter(([i])=>!a.some(o=>i.match(o))).every(([,i])=>vo.interpretSchema(t,i,n,s))},SC=(e,t,r,n)=>uh(e,t,r,n)&&[new RegExp("")];var IC={compile:bC,interpret:uh,collectEvaluatedProperties:SC};const{Schema:wC,Instance:Fi}=j,OC=Ut,EC=e=>wC.value(e),PC=(e,t)=>{if(!Fi.typeOf(t,"array")||e===!1)return!0;const r=Fi.map(n=>OC(Fi.value(n)),t);return new Set(r).size===r.length};var jC={compile:EC,interpret:PC};const{Keywords:Zp}=j;var kC={additionalItems:Ej,additionalItems6:kj,additionalProperties:Cj,additionalProperties6:Tj,allOf:Uj,anyOf:zj,const:Yj,contains:ek,containsMinContainsMaxContains:nk,containsMinContainsMaxContainsFUTURE:ok,definitions:uk,dependencies:hk,dependentRequired:gk,dependentSchemas:wk,dynamicRef:_k,dynamicRefNEXT:Lk,dynamicRefPROPOSED:Kk,enum:Xk,exclusiveMaximum:Zk,exclusiveMinimum:nx,if:cx,then:mx,else:gx,items:Sx,items202012:Ox,maxItems:kx,maxLength:_x,maxLength6:qx,maxProperties:Ux,maximumExclusiveMaximum:Fx,maximum:Gx,metaData:Zp.metaData,minItems:Yx,minLength:tA,minLength6:aA,minProperties:lA,minimumExclusiveMinimum:uA,minimum:yA,multipleOf:bA,not:wA,oneOf:xA,optional:_A,pattern:qA,patternProperties:UA,properties:JA,propertyDependencies:HA,propertyNames:YA,ref:rC,required:iC,tupleItems:fC,type:dC,unevaluatedItems:gC,unevaluatedProperties:IC,uniqueItems:jC,validate:Zp.validate},xC=`{
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
}`,AC=`{
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
}`,CC=`{
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
}`,_C=`{
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
}`,NC=`{
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
}`,TC=`{
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
}`,RC=`{
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
}`,qC=`{
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
}`,DC=`{
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
}`;const{Core:Ir,Schema:Ge}=j,V=kC,LC=xC,MC=AC,UC=CC,VC=_C,BC=NC,FC=TC,KC=RC,JC=qC,zC=DC,bn="https://json-schema.org/draft/next/schema";Ge.setConfig(bn,"baseToken","$id");Ge.setConfig(bn,"embeddedToken","$id");Ge.setConfig(bn,"anchorToken","$anchor");Ge.setConfig(bn,"dynamicAnchorToken","$dynamicAnchor");Ge.setConfig(bn,"vocabularyToken","$vocabulary");Ge.setConfig(bn,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);Ge.add(JSON.parse(LC));Ge.add(JSON.parse(MC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:V.validate,$defs:V.definitions,$dynamicRef:V.dynamicRefNEXT,$dref:V.dynamicRefPROPOSED,$ref:V.ref});Ge.add(JSON.parse(UC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:V.additionalProperties6,allOf:V.allOf,anyOf:V.anyOf,contains:V.containsMinContainsMaxContainsFUTURE,dependentSchemas:V.dependentSchemas,if:V.if,then:V.then,else:V.else,items:V.items202012,not:V.not,oneOf:V.oneOf,patternProperties:V.patternProperties,prefixItems:V.tupleItems,properties:V.properties,propertyDependencies:V.propertyDependencies,propertyNames:V.propertyNames});Ge.add(JSON.parse(VC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:V.const,dependentRequired:V.dependentRequired,enum:V.enum,exclusiveMaximum:V.exclusiveMaximum,exclusiveMinimum:V.exclusiveMinimum,maxItems:V.maxItems,maxLength:V.maxLength6,maxProperties:V.maxProperties,maximum:V.maximum,minItems:V.minItems,minLength:V.minLength6,minProperties:V.minProperties,minimum:V.minimum,multipleOf:V.multipleOf,optional:V.optional,pattern:V.pattern,required:V.required,type:V.type,uniqueItems:V.uniqueItems});Ge.add(JSON.parse(BC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:V.metaData,deprecated:V.metaData,description:V.metaData,examples:V.metaData,readOnly:V.metaData,title:V.metaData,writeOnly:V.metaData});Ge.add(JSON.parse(FC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:V.metaData});Ge.add(JSON.parse(KC));Ge.add(JSON.parse(JC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:V.metaData,contentMediaType:V.metaData,contentSchema:V.metaData});Ge.add(JSON.parse(zC));Ir.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:V.unevaluatedItems,unevaluatedProperties:V.unevaluatedProperties});function GC(e){return{c:Te,l:Te,m:Te,p:Te,i:Te,o:Te,d:Te}}function HC(e){let t,r;return t=new Wm({props:{results:e[5]}}),{c(){ut(t.$$.fragment)},l(n){mt(t.$$.fragment,n)},m(n,s){dt(t,n,s),r=!0},p(n,s){const a={};s&32&&(a.results=n[5]),t.$set(a)},i(n){r||(Be(t.$$.fragment,n),r=!0)},o(n){Fe(t.$$.fragment,n),r=!1},d(n){ht(t,n)}}}function XC(e){return{c:Te,l:Te,m:Te,p:Te,i:Te,o:Te,d:Te}}function WC(e){let t,r,n,s,a,i,o,c,l,f,h,d,y,P,u,m,v,O,b,k,S,x,G,re,I,_,N,R,H,q,Q,ye,ge;function K(Z){e[11](Z)}let Pe={ns:"schemas",tabs:e[1],newTab:e[7],active:0};e[0]!==void 0&&(Pe.format=e[0]),u=new bf({props:Pe}),Jt.push(()=>Vr(u,"format",K)),u.$on("input",e[9]);function ot(Z){e[12](Z)}function je(Z){e[13](Z)}function He(Z){e[14](Z)}let Xe={ns:"instances",tabs:e[2],newTab:e[8]};e[3]!==void 0&&(Xe.selected=e[3]),e[3]!==void 0&&(Xe.active=e[3]),e[0]!==void 0&&(Xe.format=e[0]),b=new bf({props:Xe}),Jt.push(()=>Vr(b,"selected",ot)),Jt.push(()=>Vr(b,"active",je)),Jt.push(()=>Vr(b,"format",He)),b.$on("input",e[10]),I=new Wm({props:{results:e[4]}});let he={ctx:e,current:null,token:null,hasCatch:!1,pending:XC,then:HC,catch:GC,value:18,blocks:[,,,]};return na(R=e[4],he),q=new S2({}),{c(){t=Re(),r=X("div"),n=X("button"),s=pe("JSON"),i=X("button"),o=pe("YAML"),l=Re(),f=X("main"),h=X("h1"),d=pe("Hyperjump - JSON Schema Validator"),y=Re(),P=X("div"),ut(u.$$.fragment),v=Re(),O=X("div"),ut(b.$$.fragment),G=Re(),re=X("div"),ut(I.$$.fragment),_=Re(),N=X("div"),he.block.c(),H=Re(),ut(q.$$.fragment),this.h()},l(Z){_h('[data-svelte="svelte-14138tz"]',document.head).forEach(A),t=qe(Z),r=W(Z,"DIV",{class:!0});var $e=M(r);n=W($e,"BUTTON",{class:!0});var Ie=M(n);s=ue(Ie,"JSON"),Ie.forEach(A),i=W($e,"BUTTON",{class:!0});var We=M(i);o=ue(We,"YAML"),We.forEach(A),$e.forEach(A),l=qe(Z),f=W(Z,"MAIN",{class:!0});var De=M(f);h=W(De,"H1",{class:!0});var wr=M(h);d=ue(wr,"Hyperjump - JSON Schema Validator"),wr.forEach(A),y=qe(De),P=W(De,"DIV",{class:!0});var Or=M(P);mt(u.$$.fragment,Or),Or.forEach(A),v=qe(De),O=W(De,"DIV",{class:!0});var Sn=M(O);mt(b.$$.fragment,Sn),Sn.forEach(A),G=qe(De),re=W(De,"DIV",{class:!0});var ws=M(re);mt(I.$$.fragment,ws),ws.forEach(A),_=qe(De),N=W(De,"DIV",{class:!0});var Os=M(N);he.block.l(Os),Os.forEach(A),H=qe(De),mt(q.$$.fragment,De),De.forEach(A),this.h()},h(){document.title="Hyperjump - JSON Schema Validator",C(n,"class",a=xs(e[0]==="json"?"selected":"")+" svelte-ub4xmj"),C(i,"class",c=xs(e[0]==="yaml"?"selected":"")+" svelte-ub4xmj"),C(r,"class","format svelte-ub4xmj"),C(h,"class","svelte-ub4xmj"),C(P,"class","editor-section svelte-ub4xmj"),C(O,"class","editor-section svelte-ub4xmj"),C(re,"class","results "+tu+" svelte-ub4xmj"),C(N,"class","results "+tu+" svelte-ub4xmj"),C(f,"class","svelte-ub4xmj")},m(Z,ce){te(Z,t,ce),te(Z,r,ce),T(r,n),T(n,s),T(r,i),T(i,o),te(Z,l,ce),te(Z,f,ce),T(f,h),T(h,d),T(f,y),T(f,P),dt(u,P,null),T(f,v),T(f,O),dt(b,O,null),T(f,G),T(f,re),dt(I,re,null),T(f,_),T(f,N),he.block.m(N,he.anchor=null),he.mount=()=>N,he.anchor=null,T(f,H),dt(q,f,null),Q=!0,ye||(ge=[pr(n,"click",e[6]("json")),pr(i,"click",e[6]("yaml"))],ye=!0)},p(Z,[ce]){e=Z,(!Q||ce&1&&a!==(a=xs(e[0]==="json"?"selected":"")+" svelte-ub4xmj"))&&C(n,"class",a),(!Q||ce&1&&c!==(c=xs(e[0]==="yaml"?"selected":"")+" svelte-ub4xmj"))&&C(i,"class",c);const $e={};ce&2&&($e.tabs=e[1]),!m&&ce&1&&(m=!0,$e.format=e[0],Br(()=>m=!1)),u.$set($e);const Ie={};ce&4&&(Ie.tabs=e[2]),!k&&ce&8&&(k=!0,Ie.selected=e[3],Br(()=>k=!1)),!S&&ce&8&&(S=!0,Ie.active=e[3],Br(()=>S=!1)),!x&&ce&1&&(x=!0,Ie.format=e[0],Br(()=>x=!1)),b.$set(Ie);const We={};ce&16&&(We.results=e[4]),I.$set(We),he.ctx=e,ce&16&&R!==(R=e[4])&&na(R,he)||nu(he,e,ce)},i(Z){Q||(Be(u.$$.fragment,Z),Be(b.$$.fragment,Z),Be(I.$$.fragment,Z),Be(he.block),Be(q.$$.fragment,Z),Q=!0)},o(Z){Fe(u.$$.fragment,Z),Fe(b.$$.fragment,Z),Fe(I.$$.fragment,Z);for(let ce=0;ce<3;ce+=1){const $e=he.blocks[ce];Fe($e)}Fe(q.$$.fragment,Z),Q=!1},d(Z){Z&&A(t),Z&&A(r),Z&&A(l),Z&&A(f),ht(u),ht(b),ht(I),he.block.d(),he.token=null,he=null,ht(q),ye=!1,ru(ge)}}}const eu=750,Ki="https://json-schema.org/draft/2020-12/schema",Ln="https://json-schema.hyperjump.io/schema",tu="solarized-dark";function YC(e,t,r){let n,s,a="json";const i=(S,x)=>x==="yaml"?yl.parse(S):JSON.parse(S),o={json:S=>`{
  "$id": "${S}",
  "$schema": "${Ki}"
}`,yaml:S=>`$id: '${S}'
$schema: '${Ki}'`},c=S=>()=>{r(0,a=S),r(1,h=[l("Schema",Ln,!0)]),r(2,d=[f("Instance")]),r(3,y=0)},l=function(){let S=1;return(x=void 0,G=void 0,re=!1)=>{const I=G||`${Ln}${++S}`;return{label:x||`Schema ${S}`,text:o[a](I),persistent:re}}}(),f=function(){let S=1;return()=>({label:`Instance ${S++}`,text:""})}();let h=[l("Schema",Ln,!0)],d=[f("Instance")],y=0;const P=function(S,x){let G;return({detail:re})=>{clearTimeout(G),G=setTimeout(()=>S(re),x)}},u=P(S=>r(1,h=S),eu),m=P(S=>r(2,d=S),eu);Ce.setMetaOutputFormat(Ce.BASIC),Ce.addMediaTypePlugin("application/schema+yaml",{parse:async S=>yl.parse(await S.text()),matcher:S=>S.endsWith(".schema.yaml")});function v(S){a=S,r(0,a)}function O(S){y=S,r(3,y)}function b(S){y=S,r(3,y)}function k(S){a=S,r(0,a)}return e.$$.update=()=>{e.$$.dirty&3&&r(4,n=async function(){h.forEach((x,G)=>{const re=G===0?Ln:"";Ce.add(i(x.text||"true",a),re,Ki)});const S=await Ce.get(Ln);return Ce.validate(S)}()),e.$$.dirty&29&&r(5,s=async function(){if(d[y].text!==""){let S;try{S=await n}catch{}if(S){const x=S(i(d[y].text,a),Ce.BASIC);if(x.valid)return x;throw{output:x}}}}())},[a,h,d,y,n,s,c,l,f,u,m,v,O,b,k]}class ZC extends Zt{constructor(t){super(),er(this,t,YC,WC,tr,{})}}export{ZC as default};
