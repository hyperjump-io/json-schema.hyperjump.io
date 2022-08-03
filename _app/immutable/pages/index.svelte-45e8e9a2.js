import{S as qt,i as Dt,s as Lt,l as J,a as _e,u as ie,m as G,p as L,h as A,c as Ae,v as ae,q as x,b as Q,J as T,K as lo,L as Jt,n as je,M as es,N as Sl,e as Ct,O as lu,P as _t,w as De,Q as yr,x as tt,y as rt,z as nt,R as $r,f as Re,t as qe,C as st,T as fu,U as fo,V as ts,W as wl,F as Vi,X as ut,Y as dt,G as Ki,H as zi,I as Ji,r as Nn,Z as pu,_ as Cn}from"../chunks/index-87447f69.js";const Gi=Symbol.for("yaml.alias"),wi=Symbol.for("yaml.document"),Nt=Symbol.for("yaml.map"),Il=Symbol.for("yaml.pair"),Ot=Symbol.for("yaml.scalar"),Ar=Symbol.for("yaml.seq"),Ye=Symbol.for("yaml.node.type"),Wt=t=>!!t&&typeof t=="object"&&t[Ye]===Gi,dn=t=>!!t&&typeof t=="object"&&t[Ye]===wi,Yt=t=>!!t&&typeof t=="object"&&t[Ye]===Nt,ge=t=>!!t&&typeof t=="object"&&t[Ye]===Il,de=t=>!!t&&typeof t=="object"&&t[Ye]===Ot,xr=t=>!!t&&typeof t=="object"&&t[Ye]===Ar;function Se(t){if(t&&typeof t=="object")switch(t[Ye]){case Nt:case Ar:return!0}return!1}function Oe(t){if(t&&typeof t=="object")switch(t[Ye]){case Gi:case Nt:case Ot:case Ar:return!0}return!1}const uu=t=>(de(t)||Se(t))&&!!t.anchor;class Hi{constructor(e){Object.defineProperty(this,Ye,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}}const Ve=Symbol("break visit"),El=Symbol("skip children"),ht=Symbol("remove node");function Tt(t,e){const r=Ol(e);dn(t)?gr(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):gr(null,t,r,Object.freeze([]))}Tt.BREAK=Ve;Tt.SKIP=El;Tt.REMOVE=ht;function gr(t,e,r,n){const s=Pl(t,e,r,n);if(Oe(s)||ge(s))return kl(t,n,s),gr(t,s,r,n);if(typeof s!="symbol"){if(Se(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=gr(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const i=gr("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=gr("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}async function fs(t,e){const r=Ol(e);dn(t)?await vr(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):await vr(null,t,r,Object.freeze([]))}fs.BREAK=Ve;fs.SKIP=El;fs.REMOVE=ht;async function vr(t,e,r,n){const s=await Pl(t,e,r,n);if(Oe(s)||ge(s))return kl(t,n,s),vr(t,s,r,n);if(typeof s!="symbol"){if(Se(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=await vr(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const i=await vr("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=await vr("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}function Ol(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function Pl(t,e,r,n){var s,i,a,o,c;if(typeof r=="function")return r(t,e,n);if(Yt(e))return(s=r.Map)==null?void 0:s.call(r,t,e,n);if(xr(e))return(i=r.Seq)==null?void 0:i.call(r,t,e,n);if(ge(e))return(a=r.Pair)==null?void 0:a.call(r,t,e,n);if(de(e))return(o=r.Scalar)==null?void 0:o.call(r,t,e,n);if(Wt(e))return(c=r.Alias)==null?void 0:c.call(r,t,e,n)}function kl(t,e,r){const n=e[e.length-1];if(Se(n))n.items[t]=r;else if(ge(n))t==="key"?n.key=r:n.value=r;else if(dn(n))n.contents=r;else{const s=Wt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const du={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},mu=t=>t.replace(/[!,[\]{}]/g,e=>du[e]);class Te{constructor(e,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Te.defaultYaml,e),this.tags=Object.assign({},Te.defaultTags,r)}clone(){const e=new Te(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Te(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Te.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Te.defaultTags);break}return e}add(e,r){this.atNextDocument&&(this.yaml={explicit:Te.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Te.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[i,a]=n;return this.tags[i]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[i]=n;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const a=/^\d+\.\d+$/.test(i);return r(6,`Unsupported YAML version ${i}`,a),!1}}default:return r(0,`Unknown directive ${s}`,!0),!1}}tagName(e,r){if(e==="!")return"!";if(e[0]!=="!")return r(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(r(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&r("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/);s||r(`The ${e} tag has no suffix`);const i=this.tags[n];return i?i+decodeURIComponent(s):n==="!"?e:(r(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[r,n]of Object.entries(this.tags))if(e.startsWith(n))return r+mu(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&Oe(e.contents)){const i={};Tt(e.contents,(a,o)=>{Oe(o)&&o.tag&&(i[o.tag]=!0)}),s=Object.keys(i)}else s=[];for(const[i,a]of n)i==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&r.push(`%TAG ${i} ${a}`);return r.join(`
`)}}Te.defaultYaml={explicit:!1,version:"1.2"};Te.defaultTags={"!!":"tag:yaml.org,2002:"};function jl(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(r)}return!0}function _l(t){const e=new Set;return Tt(t,{Value(r,n){n.anchor&&e.add(n.anchor)}}),e}function Al(t,e){for(let r=1;;++r){const n=`${t}${r}`;if(!e.has(n))return n}}function hu(t,e){const r=[],n=new Map;let s=null;return{onAnchor:i=>{r.push(i),s||(s=_l(t));const a=Al(e,s);return s.add(a),a},setAnchors:()=>{for(const i of r){const a=n.get(i);if(typeof a=="object"&&a.anchor&&(de(a.node)||Se(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=i,o}}},sourceObjects:n}}class ps extends Hi{constructor(e){super(Gi),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let r;return Tt(e,{Node:(n,s)=>{if(s===this)return Tt.BREAK;s.anchor===this.source&&(r=s)}}),r}toJSON(e,r){if(!r)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:i}=r,a=this.resolve(s);if(!a){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}const o=n.get(a);if(!o||o.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Vn(s,a,n)),o.count*o.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return o.res}toString(e,r,n){const s=`*${this.source}`;if(e){if(jl(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${s} `}return s}}function Vn(t,e,r){if(Wt(e)){const n=e.resolve(t),s=r&&n&&r.get(n);return s?s.count*s.aliasCount:0}else if(Se(e)){let n=0;for(const s of e.items){const i=Vn(t,s,r);i>n&&(n=i)}return n}else if(ge(e)){const n=Vn(t,e.key,r),s=Vn(t,e.value,r);return Math.max(n,s)}return 1}function yt(t,e,r){if(Array.isArray(t))return t.map((n,s)=>yt(n,String(s),r));if(t&&typeof t.toJSON=="function"){if(!r||!uu(t))return t.toJSON(e,r);const n={aliasCount:0,count:1,res:void 0};r.anchors.set(t,n),r.onCreate=i=>{n.res=i,delete r.onCreate};const s=t.toJSON(e,r);return r.onCreate&&r.onCreate(s),s}return typeof t=="bigint"&&!(r!=null&&r.keep)?Number(t):t}const xl=t=>!t||typeof t!="function"&&typeof t!="object";class Y extends Hi{constructor(e){super(Ot),this.value=e}toJSON(e,r){return r!=null&&r.keep?this.value:yt(this.value,e,r)}toString(){return String(this.value)}}Y.BLOCK_FOLDED="BLOCK_FOLDED";Y.BLOCK_LITERAL="BLOCK_LITERAL";Y.PLAIN="PLAIN";Y.QUOTE_DOUBLE="QUOTE_DOUBLE";Y.QUOTE_SINGLE="QUOTE_SINGLE";const yu="tag:yaml.org,2002:";function $u(t,e,r){var n;if(e){const s=r.filter(a=>a.tag===e),i=(n=s.find(a=>!a.format))!=null?n:s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return r.find(s=>{var i;return((i=s.identify)==null?void 0:i.call(s,t))&&!s.format})}function on(t,e,r){var y,m;if(dn(t)&&(t=t.contents),Oe(t))return t;if(ge(t)){const $=(m=(y=r.schema[Nt]).createNode)==null?void 0:m.call(y,r.schema,null,r);return $.items.push(t),$}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt=="function"&&t instanceof BigInt)&&(t=t.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:i,schema:a,sourceObjects:o}=r;let c;if(n&&t&&typeof t=="object"){if(c=o.get(t),c)return c.anchor||(c.anchor=s(t)),new ps(c.anchor);c={anchor:null,node:null},o.set(t,c)}e!=null&&e.startsWith("!!")&&(e=yu+e.slice(2));let l=$u(t,e,a.tags);if(!l){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){const $=new Y(t);return c&&(c.node=$),$}l=t instanceof Map?a[Nt]:Symbol.iterator in Object(t)?a[Ar]:a[Nt]}i&&(i(l),delete r.onTagObj);const p=l!=null&&l.createNode?l.createNode(r.schema,t,r):new Y(t);return e&&(p.tag=e),c&&(c.node=p),p}function rs(t,e,r){let n=r;for(let s=e.length-1;s>=0;--s){const i=e[s];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const a=[];a[i]=n,n=a}else n=new Map([[i,n]])}return on(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}const en=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class us extends Hi{constructor(e,r){super(e),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(e){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(r.schema=e),r.items=r.items.map(n=>Oe(n)||ge(n)?n.clone(e):n),this.range&&(r.range=this.range.slice()),r}addIn(e,r){if(en(e))this.add(r);else{const[n,...s]=e,i=this.get(n,!0);if(Se(i))i.addIn(s,r);else if(i===void 0&&this.schema)this.set(n,rs(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[r,...n]=e;if(n.length===0)return this.delete(r);const s=this.get(r,!0);if(Se(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}getIn(e,r){const[n,...s]=e,i=this.get(n,!0);return s.length===0?!r&&de(i)?i.value:i:Se(i)?i.getIn(s,r):void 0}hasAllNullValues(e){return this.items.every(r=>{if(!ge(r))return!1;const n=r.value;return n==null||e&&de(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[r,...n]=e;if(n.length===0)return this.has(r);const s=this.get(r,!0);return Se(s)?s.hasIn(n):!1}setIn(e,r){const[n,...s]=e;if(s.length===0)this.set(n,r);else{const i=this.get(n,!0);if(Se(i))i.setIn(s,r);else if(i===void 0&&this.schema)this.set(n,rs(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}us.maxFlowStringSingleLineLength=60;const gu=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function It(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}const At=(t,e,r)=>t.endsWith(`
`)?It(r,e):r.includes(`
`)?`
`+It(r,e):(t.endsWith(" ")?"":" ")+r,Nl="flow",Ii="block",Kn="quoted";function ds(t,e,r="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:i=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return t;const c=Math.max(1+i,1+s-e.length);if(t.length<=c)return t;const l=[],p={};let y=s-e.length;typeof n=="number"&&(n>s-Math.max(2,i)?l.push(0):y=s-n);let m,$,P=!1,u=-1,d=-1,v=-1;r===Ii&&(u=po(t,u),u!==-1&&(y=u+c));for(let b;b=t[u+=1];){if(r===Kn&&b==="\\"){switch(d=u,t[u+1]){case"x":u+=3;break;case"u":u+=5;break;case"U":u+=9;break;default:u+=1}v=u}if(b===`
`)r===Ii&&(u=po(t,u)),y=u+c,m=void 0;else{if(b===" "&&$&&$!==" "&&$!==`
`&&$!=="	"){const j=t[u+1];j&&j!==" "&&j!==`
`&&j!=="	"&&(m=u)}if(u>=y)if(m)l.push(m),y=m+c,m=void 0;else if(r===Kn){for(;$===" "||$==="	";)$=b,b=t[u+=1],P=!0;const j=u>v+1?u-2:d-1;if(p[j])return t;l.push(j),p[j]=!0,y=j+c,m=void 0}else P=!0}$=b}if(P&&o&&o(),l.length===0)return t;a&&a();let E=t.slice(0,l[0]);for(let b=0;b<l.length;++b){const j=l[b],S=l[b+1]||t.length;j===0?E=`
${e}${t.slice(0,S)}`:(r===Kn&&p[j]&&(E+=`${t[j]}\\`),E+=`
${e}${t.slice(j+1,S)}`)}return E}function po(t,e){let r=t[e+1];for(;r===" "||r==="	";){do r=t[e+=1];while(r&&r!==`
`);r=t[e+1]}return e}const ms=t=>({indentAtStart:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),hs=t=>/^(%|---|\.\.\.)/m.test(t);function vu(t,e,r){if(!e||e<0)return!1;const n=e-r,s=t.length;if(s<=n)return!1;for(let i=0,a=0;i<s;++i)if(t[i]===`
`){if(i-a>n)return!0;if(a=i+1,s-a<=n)return!1}return!0}function nn(t,e){const r=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return r;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(hs(t)?"  ":"");let a="",o=0;for(let c=0,l=r[c];l;l=r[++c])if(l===" "&&r[c+1]==="\\"&&r[c+2]==="n"&&(a+=r.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(r[c+1]){case"u":{a+=r.slice(o,c);const p=r.substr(c+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=r.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||r[c+2]==='"'||r.length<s)c+=1;else{for(a+=r.slice(o,c)+`

`;r[c+2]==="\\"&&r[c+3]==="n"&&r[c+4]!=='"';)a+=`
`,c+=2;a+=i,r[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+r.slice(o):r,n?a:ds(a,i,Kn,ms(e))}function Ei(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return nn(t,e);const r=e.indent||(hs(t)?"  ":""),n="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return e.implicitKey?n:ds(n,r,Nl,ms(e))}function sn(t,e){const{singleQuote:r}=e.options;let n;if(r===!1)n=nn;else{const s=t.includes('"'),i=t.includes("'");s&&!i?n=Ei:i&&!s?n=nn:n=r?Ei:nn}return n(t,e)}function zn({comment:t,type:e,value:r},n,s,i){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(r)||/^\s*$/.test(r))return sn(r,n);const l=n.indent||(n.forceBlockIndent||hs(r)?"  ":""),p=a==="literal"?!0:a==="folded"||e===Y.BLOCK_FOLDED?!1:e===Y.BLOCK_LITERAL?!0:!vu(r,c,l.length);if(!r)return p?`|
`:`>
`;let y,m;for(m=r.length;m>0;--m){const _=r[m-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let $=r.substring(m);const P=$.indexOf(`
`);P===-1?y="-":r===$||P!==$.length-1?(y="+",i&&i()):y="",$&&(r=r.slice(0,-$.length),$[$.length-1]===`
`&&($=$.slice(0,-1)),$=$.replace(/\n+(?!\n|$)/g,`$&${l}`));let u=!1,d,v=-1;for(d=0;d<r.length;++d){const _=r[d];if(_===" ")u=!0;else if(_===`
`)v=d;else break}let E=r.substring(0,v<d?v+1:d);E&&(r=r.substring(E.length),E=E.replace(/\n+/g,`$&${l}`));let j=(p?"|":">")+(u?l?"2":"1":"")+y;if(t&&(j+=" "+o(t.replace(/ ?[\r\n]+/g," ")),s&&s()),p)return r=r.replace(/\n+/g,`$&${l}`),`${j}
${l}${E}${r}${$}`;r=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);const S=ds(`${E}${r}${$}`,l,Ii,ms(n));return`${j}
${l}${S}`}function bu(t,e,r,n){const{type:s,value:i}=t,{actualString:a,implicitKey:o,indent:c,inFlow:l}=e;if(o&&/[\n[\]{},]/.test(i)||l&&/[[\]{},]/.test(i))return sn(i,e);if(!i||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return o||l||!i.includes(`
`)?sn(i,e):zn(t,e,r,n);if(!o&&!l&&s!==Y.PLAIN&&i.includes(`
`))return zn(t,e,r,n);if(c===""&&hs(i))return e.forceBlockIndent=!0,zn(t,e,r,n);const p=i.replace(/\n+/g,`$&
${c}`);if(a){const y=P=>{var u;return P.default&&P.tag!=="tag:yaml.org,2002:str"&&((u=P.test)==null?void 0:u.test(p))},{compat:m,tags:$}=e.doc.schema;if($.some(y)||(m==null?void 0:m.some(y)))return sn(i,e)}return o?p:ds(p,c,Nl,ms(e))}function mn(t,e,r,n){const{implicitKey:s,inFlow:i}=e,a=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:o}=t;o!==Y.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Y.QUOTE_DOUBLE);const c=p=>{switch(p){case Y.BLOCK_FOLDED:case Y.BLOCK_LITERAL:return s||i?sn(a.value,e):zn(a,e,r,n);case Y.QUOTE_DOUBLE:return nn(a.value,e);case Y.QUOTE_SINGLE:return Ei(a.value,e);case Y.PLAIN:return bu(a,e,r,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:p,defaultStringType:y}=e.options,m=s&&p||y;if(l=c(m),l===null)throw new Error(`Unsupported default string type ${m}`)}return l}function Cl(t,e){const r=Object.assign({blockQuote:!0,commentString:gu,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e);let n;switch(r.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:t,indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:n,options:r}}function Su(t,e){var s,i,a,o;if(e.tag){const c=t.filter(l=>l.tag===e.tag);if(c.length>0)return(s=c.find(l=>l.format===e.format))!=null?s:c[0]}let r,n;if(de(e)){n=e.value;const c=t.filter(l=>{var p;return(p=l.identify)==null?void 0:p.call(l,n)});r=(i=c.find(l=>l.format===e.format))!=null?i:c.find(l=>!l.format)}else n=e,r=t.find(c=>c.nodeClass&&n instanceof c.nodeClass);if(!r){const c=(o=(a=n==null?void 0:n.constructor)==null?void 0:a.name)!=null?o:typeof n;throw new Error(`Tag not resolved for ${c} value`)}return r}function wu(t,e,{anchors:r,doc:n}){if(!n.directives)return"";const s=[],i=(de(t)||Se(t))&&t.anchor;i&&jl(i)&&(r.add(i),s.push(`&${i}`));const a=t.tag?t.tag:e.default?null:e.tag;return a&&s.push(n.directives.tagString(a)),s.join(" ")}function Gt(t,e,r,n){var c,l;if(ge(t))return t.toString(e,r,n);if(Wt(t)){if(e.doc.directives)return t.toString(e);if((c=e.resolvedAliases)!=null&&c.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let s;const i=Oe(t)?t:e.doc.createNode(t,{onTagObj:p=>s=p});s||(s=Su(e.doc.schema.tags,i));const a=wu(i,s,e);a.length>0&&(e.indentAtStart=((l=e.indentAtStart)!=null?l:0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(i,e,r,n):de(i)?mn(i,e,r,n):i.toString(e,r,n);return a?de(i)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function Iu({key:t,value:e},r,n,s){const{allNullValues:i,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:p,simpleKeys:y}}=r;let m=Oe(t)&&t.comment||null;if(y){if(m)throw new Error("With simple keys, key nodes cannot have comments");if(Se(t)){const _="With simple keys, collection cannot be used as a key value";throw new Error(_)}}let $=!y&&(!t||m&&e==null&&!r.inFlow||Se(t)||(de(t)?t.type===Y.BLOCK_FOLDED||t.type===Y.BLOCK_LITERAL:typeof t=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!$&&(y||!i),indent:o+c});let P=!1,u=!1,d=Gt(t,r,()=>P=!0,()=>u=!0);if(!$&&!r.inFlow&&d.length>1024){if(y)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");$=!0}if(r.inFlow){if(i||e==null)return P&&n&&n(),d===""?"?":$?`? ${d}`:d}else if(i&&!y||e==null&&$)return d=`? ${d}`,m&&!P?d+=At(d,r.indent,l(m)):u&&s&&s(),d;P&&(m=null),$?(m&&(d+=At(d,r.indent,l(m))),d=`? ${d}
${o}:`):(d=`${d}:`,m&&(d+=At(d,r.indent,l(m))));let v="",E=null;if(Oe(e)){if(e.spaceBefore&&(v=`
`),e.commentBefore){const _=l(e.commentBefore);v+=`
${It(_,r.indent)}`}E=e.comment}else e&&typeof e=="object"&&(e=a.createNode(e));r.implicitKey=!1,!$&&!m&&de(e)&&(r.indentAtStart=d.length+1),u=!1,!p&&c.length>=2&&!r.inFlow&&!$&&xr(e)&&!e.flow&&!e.tag&&!e.anchor&&(r.indent=r.indent.substr(2));let b=!1;const j=Gt(e,r,()=>b=!0,()=>u=!0);let S=" ";return v||m?j===""&&!r.inFlow?S=v===`
`?`

`:v:S=`${v}
${r.indent}`:!$&&Se(e)?(!(j[0]==="["||j[0]==="{")||j.includes(`
`))&&(S=`
${r.indent}`):(j===""||j[0]===`
`)&&(S=""),d+=S+j,r.inFlow?b&&n&&n():E&&!b?d+=At(d,r.indent,l(E)):u&&s&&s(),d}function Tl(t,e){(t==="debug"||t==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const uo="<<";function Rl(t,e,{key:r,value:n}){if((t==null?void 0:t.doc.schema.merge)&&Eu(r))if(n=Wt(n)?n.resolve(t.doc):n,xr(n))for(const s of n.items)Bs(t,e,s);else if(Array.isArray(n))for(const s of n)Bs(t,e,s);else Bs(t,e,n);else{const s=yt(r,"",t);if(e instanceof Map)e.set(s,yt(n,s,t));else if(e instanceof Set)e.add(s);else{const i=Ou(r,s,t),a=yt(n,i,t);i in e?Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[i]=a}}return e}const Eu=t=>t===uo||de(t)&&t.value===uo&&(!t.type||t.type===Y.PLAIN);function Bs(t,e,r){const n=t&&Wt(r)?r.resolve(t.doc):r;if(!Yt(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,t,Map);for(const[i,a]of s)e instanceof Map?e.has(i)||e.set(i,a):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function Ou(t,e,r){if(e===null)return"";if(typeof e!="object")return String(e);if(Oe(t)&&r&&r.doc){const n=Cl(r.doc,{});n.anchors=new Set;for(const i of r.anchors.keys())n.anchors.add(i.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=t.toString(n);if(!r.mapKeyWarned){let i=JSON.stringify(s);i.length>40&&(i=i.substring(0,36)+'..."'),Tl(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return s}return JSON.stringify(e)}function Xi(t,e,r){const n=on(t,void 0,r),s=on(e,void 0,r);return new Ce(n,s)}class Ce{constructor(e,r=null){Object.defineProperty(this,Ye,{value:Il}),this.key=e,this.value=r}clone(e){let{key:r,value:n}=this;return Oe(r)&&(r=r.clone(e)),Oe(n)&&(n=n.clone(e)),new Ce(r,n)}toJSON(e,r){const n=r!=null&&r.mapAsMap?new Map:{};return Rl(r,n,this)}toString(e,r,n){return e!=null&&e.doc?Iu(this,e,r,n):JSON.stringify(this)}}function ql(t,e,r){var i;return(((i=e.inFlow)!=null?i:t.flow)?ku:Pu)(t,e,r)}function Pu({comment:t,items:e},r,{blockItemPrefix:n,flowChars:s,itemIndent:i,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=r,p=Object.assign({},r,{indent:i,type:null});let y=!1;const m=[];for(let P=0;P<e.length;++P){const u=e[P];let d=null;if(Oe(u))!y&&u.spaceBefore&&m.push(""),ns(r,m,u.commentBefore,y),u.comment&&(d=u.comment);else if(ge(u)){const E=Oe(u.key)?u.key:null;E&&(!y&&E.spaceBefore&&m.push(""),ns(r,m,E.commentBefore,y))}y=!1;let v=Gt(u,p,()=>d=null,()=>y=!0);d&&(v+=At(v,i,l(d))),y&&d&&(y=!1),m.push(n+v)}let $;if(m.length===0)$=s.start+s.end;else{$=m[0];for(let P=1;P<m.length;++P){const u=m[P];$+=u?`
${c}${u}`:`
`}}return t?($+=`
`+It(l(t),c),o&&o()):y&&a&&a(),$}function ku({comment:t,items:e},r,{flowChars:n,itemIndent:s,onComment:i}){const{indent:a,indentStep:o,options:{commentString:c}}=r;s+=o;const l=Object.assign({},r,{indent:s,inFlow:!0,type:null});let p=!1,y=0;const m=[];for(let d=0;d<e.length;++d){const v=e[d];let E=null;if(Oe(v))v.spaceBefore&&m.push(""),ns(r,m,v.commentBefore,!1),v.comment&&(E=v.comment);else if(ge(v)){const j=Oe(v.key)?v.key:null;j&&(j.spaceBefore&&m.push(""),ns(r,m,j.commentBefore,!1),j.comment&&(p=!0));const S=Oe(v.value)?v.value:null;S?(S.comment&&(E=S.comment),S.commentBefore&&(p=!0)):v.value==null&&j&&j.comment&&(E=j.comment)}E&&(p=!0);let b=Gt(v,l,()=>E=null);d<e.length-1&&(b+=","),E&&(b+=At(b,s,c(E))),!p&&(m.length>y||b.includes(`
`))&&(p=!0),m.push(b),y=m.length}let $;const{start:P,end:u}=n;if(m.length===0)$=P+u;else if(p||(p=m.reduce((v,E)=>v+E.length+2,2)>us.maxFlowStringSingleLineLength),p){$=P;for(const d of m)$+=d?`
${o}${a}${d}`:`
`;$+=`
${a}${u}`}else $=`${P} ${m.join(" ")} ${u}`;return t&&($+=At($,c(t),a),i&&i()),$}function ns({indent:t,options:{commentString:e}},r,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const i=It(e(n),t);r.push(i.trimStart())}}function Vt(t,e){const r=de(e)?e.value:e;for(const n of t)if(ge(n)&&(n.key===e||n.key===r||de(n.key)&&n.key.value===r))return n}class We extends us{constructor(e){super(Nt,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(e,r){var a;let n;ge(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Ce(e,e==null?void 0:e.value):n=new Ce(e.key,e.value);const s=Vt(this.items,n.key),i=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!r)throw new Error(`Key ${n.key} already set`);de(s.value)&&xl(n.value)?s.value.value=n.value:s.value=n.value}else if(i){const o=this.items.findIndex(c=>i(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const r=Vt(this.items,e);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(e,r){var i;const n=Vt(this.items,e),s=n==null?void 0:n.value;return(i=!r&&de(s)?s.value:s)!=null?i:void 0}has(e){return!!Vt(this.items,e)}set(e,r){this.add(new Ce(e,r),!0)}toJSON(e,r,n){const s=n?new n:r!=null&&r.mapAsMap?new Map:{};r!=null&&r.onCreate&&r.onCreate(s);for(const i of this.items)Rl(r,s,i);return s}toString(e,r,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!ge(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),ql(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:r})}}function ju(t,e,r){const{keepUndefined:n,replacer:s}=r,i=new We(t),a=(o,c)=>{if(typeof s=="function")c=s.call(e,o,c);else if(Array.isArray(s)&&!s.includes(o))return;(c!==void 0||n)&&i.items.push(Xi(o,c,r))};if(e instanceof Map)for(const[o,c]of e)a(o,c);else if(e&&typeof e=="object")for(const o of Object.keys(e))a(o,e[o]);return typeof t.sortMapEntries=="function"&&i.items.sort(t.sortMapEntries),i}const Nr={collection:"map",createNode:ju,default:!0,nodeClass:We,tag:"tag:yaml.org,2002:map",resolve(t,e){return Yt(t)||e("Expected a mapping for this tag"),t}};class Qt extends us{constructor(e){super(Ar,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(e){this.items.push(e)}delete(e){const r=Tn(e);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(e,r){const n=Tn(e);if(typeof n!="number")return;const s=this.items[n];return!r&&de(s)?s.value:s}has(e){const r=Tn(e);return typeof r=="number"&&r<this.items.length}set(e,r){const n=Tn(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];de(s)&&xl(r)?s.value=r:this.items[n]=r}toJSON(e,r){const n=[];r!=null&&r.onCreate&&r.onCreate(n);let s=0;for(const i of this.items)n.push(yt(i,String(s++),r));return n}toString(e,r,n){return e?ql(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:r}):JSON.stringify(this)}}function Tn(t){let e=de(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function _u(t,e,r){const{replacer:n}=r,s=new Qt(t);if(e&&Symbol.iterator in Object(e)){let i=0;for(let a of e){if(typeof n=="function"){const o=e instanceof Set?a:String(i++);a=n.call(e,o,a)}s.items.push(on(a,void 0,r))}}return s}const Cr={collection:"seq",createNode:_u,default:!0,nodeClass:Qt,tag:"tag:yaml.org,2002:seq",resolve(t,e){return xr(t)||e("Expected a sequence for this tag"),t}},ys={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify(t,e,r,n){return e=Object.assign({actualString:!0},e),mn(t,e,r,n)}},$s={identify:t=>t==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Y(null),stringify:({source:t},e)=>typeof t=="string"&&$s.test.test(t)?t:e.options.nullStr},Wi={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new Y(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},r){if(t&&Wi.test.test(t)){const n=t[0]==="t"||t[0]==="T";if(e===n)return t}return e?r.options.trueStr:r.options.falseStr}};function it({format:t,minFractionDigits:e,tag:r,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let i=JSON.stringify(n);if(!t&&e&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let a=i.indexOf(".");a<0&&(a=i.length,i+=".");let o=e-(i.length-a-1);for(;o-- >0;)i+="0"}return i}const Dl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:it},Ll={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():it(t)}},Ml={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const e=new Y(parseFloat(t)),r=t.indexOf(".");return r!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-r-1),e},stringify:it},gs=t=>typeof t=="bigint"||Number.isInteger(t),Yi=(t,e,r,{intAsBigInt:n})=>n?BigInt(t):parseInt(t.substring(e),r);function Bl(t,e,r){const{value:n}=t;return gs(n)&&n>=0?r+n.toString(e):it(t)}const Ul={identify:t=>gs(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,r)=>Yi(t,2,8,r),stringify:t=>Bl(t,8,"0o")},Fl={identify:gs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,r)=>Yi(t,0,10,r),stringify:it},Vl={identify:t=>gs(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,r)=>Yi(t,2,16,r),stringify:t=>Bl(t,16,"0x")},Au=[Nr,Cr,ys,$s,Wi,Ul,Fl,Vl,Dl,Ll,Ml];function mo(t){return typeof t=="bigint"||Number.isInteger(t)}const Rn=({value:t})=>JSON.stringify(t),xu=[{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:Rn},{identify:t=>t==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Rn},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:t=>t==="true",stringify:Rn},{identify:mo,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:r})=>r?BigInt(t):parseInt(t,10),stringify:({value:t})=>mo(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:Rn}],Nu={default:!0,tag:"",test:/^/,resolve(t,e){return e(`Unresolved plain scalar ${JSON.stringify(t)}`),t}},Cu=[Nr,Cr].concat(xu,Nu),Qi={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof Buffer=="function")return Buffer.from(t,"base64");if(typeof atob=="function"){const r=atob(t.replace(/[\n\r]/g,"")),n=new Uint8Array(r.length);for(let s=0;s<r.length;++s)n[s]=r.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:r},n,s,i){const a=r;let o;if(typeof Buffer=="function")o=a instanceof Buffer?a.toString("base64"):Buffer.from(a.buffer).toString("base64");else if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=Y.BLOCK_LITERAL),e!==Y.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),p=new Array(l);for(let y=0,m=0;y<l;++y,m+=c)p[y]=o.substr(m,c);o=p.join(e===Y.BLOCK_LITERAL?`
`:" ")}return mn({comment:t,type:e,value:o},n,s,i)}};function Kl(t,e){var r;if(xr(t))for(let n=0;n<t.items.length;++n){let s=t.items[n];if(!ge(s)){if(Yt(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new Ce(new Y(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const a=(r=i.value)!=null?r:i.key;a.comment=a.comment?`${s.comment}
${a.comment}`:s.comment}s=i}t.items[n]=ge(s)?s:new Ce(s)}}else e("Expected a sequence for this tag");return t}function zl(t,e,r){const{replacer:n}=r,s=new Qt(t);s.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(i++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected { key: value } tuple: ${a}`)}else o=a;s.items.push(Xi(o,c,r))}return s}const Zi={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Kl,createNode:zl};class Sr extends Qt{constructor(){super(),this.add=We.prototype.add.bind(this),this.delete=We.prototype.delete.bind(this),this.get=We.prototype.get.bind(this),this.has=We.prototype.has.bind(this),this.set=We.prototype.set.bind(this),this.tag=Sr.tag}toJSON(e,r){if(!r)return super.toJSON(e);const n=new Map;r!=null&&r.onCreate&&r.onCreate(n);for(const s of this.items){let i,a;if(ge(s)?(i=yt(s.key,"",r),a=yt(s.value,i,r)):i=yt(s,"",r),n.has(i))throw new Error("Ordered maps must not include duplicate keys");n.set(i,a)}return n}}Sr.tag="tag:yaml.org,2002:omap";const ea={collection:"seq",identify:t=>t instanceof Map,nodeClass:Sr,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){const r=Kl(t,e),n=[];for(const{key:s}of r.items)de(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Sr,r)},createNode(t,e,r){const n=zl(t,e,r),s=new Sr;return s.items=n.items,s}};function Jl({value:t,source:e},r){return e&&(t?Gl:Hl).test.test(e)?e:t?r.options.trueStr:r.options.falseStr}const Gl={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Y(!0),stringify:Jl},Hl={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new Y(!1),stringify:Jl},Tu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:it},Ru={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():it(t)}},qu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const e=new Y(parseFloat(t.replace(/_/g,""))),r=t.indexOf(".");if(r!==-1){const n=t.substring(r+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:it},hn=t=>typeof t=="bigint"||Number.isInteger(t);function vs(t,e,r,{intAsBigInt:n}){const s=t[0];if((s==="-"||s==="+")&&(e+=1),t=t.substring(e).replace(/_/g,""),n){switch(r){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`;break}const a=BigInt(t);return s==="-"?BigInt(-1)*a:a}const i=parseInt(t,r);return s==="-"?-1*i:i}function ta(t,e,r){const{value:n}=t;if(hn(n)){const s=n.toString(e);return n<0?"-"+r+s.substr(1):r+s}return it(t)}const Du={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,r)=>vs(t,2,2,r),stringify:t=>ta(t,2,"0b")},Lu={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,r)=>vs(t,1,8,r),stringify:t=>ta(t,8,"0")},Mu={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,r)=>vs(t,0,10,r),stringify:it},Bu={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,r)=>vs(t,2,16,r),stringify:t=>ta(t,16,"0x")};class wr extends We{constructor(e){super(e),this.tag=wr.tag}add(e){let r;ge(e)?r=e:typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?r=new Ce(e.key,null):r=new Ce(e,null),Vt(this.items,r.key)||this.items.push(r)}get(e,r){const n=Vt(this.items,e);return!r&&ge(n)?de(n.key)?n.key.value:n.key:n}set(e,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const n=Vt(this.items,e);n&&!r?this.items.splice(this.items.indexOf(n),1):!n&&r&&this.items.push(new Ce(e))}toJSON(e,r){return super.toJSON(e,r,Set)}toString(e,r,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),r,n);throw new Error("Set items must all have null values")}}wr.tag="tag:yaml.org,2002:set";const ra={collection:"map",identify:t=>t instanceof Set,nodeClass:wr,default:!1,tag:"tag:yaml.org,2002:set",resolve(t,e){if(Yt(t)){if(t.hasAllNullValues(!0))return Object.assign(new wr,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t},createNode(t,e,r){const{replacer:n}=r,s=new wr(t);if(e&&Symbol.iterator in Object(e))for(let i of e)typeof n=="function"&&(i=n.call(e,i,i)),s.items.push(Xi(i,null,r));return s}};function na(t,e){const r=t[0],n=r==="-"||r==="+"?t.substring(1):t,s=a=>e?BigInt(a):Number(a),i=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return r==="-"?s(-1)*i:i}function Xl(t){let{value:e}=t,r=a=>a;if(typeof e=="bigint")r=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return it(t);let n="";e<0&&(n="-",e*=r(-1));const s=r(60),i=[e%s];return e<60?i.unshift(0):(e=(e-i[0])/s,i.unshift(e%s),e>=60&&(e=(e-i[0])/s,i.unshift(e))),n+i.map(a=>a<10?"0"+String(a):String(a)).join(":").replace(/000000\d*$/,"")}const Wl={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:r})=>na(t,r),stringify:Xl},Yl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>na(t,!1),stringify:Xl},bs={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const e=t.match(bs.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,n,s,i,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(r,n-1,s,i||0,a||0,o||0,c);const p=e[8];if(p&&p!=="Z"){let y=na(p,!1);Math.abs(y)<30&&(y*=60),l-=6e4*y}return new Date(l)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},ho=[Nr,Cr,ys,$s,Gl,Hl,Du,Lu,Mu,Bu,Tu,Ru,qu,Qi,ea,Zi,ra,Wl,Yl,bs],yo=new Map([["core",Au],["failsafe",[Nr,Cr,ys]],["json",Cu],["yaml11",ho],["yaml-1.1",ho]]),$o={binary:Qi,bool:Wi,float:Ml,floatExp:Ll,floatNaN:Dl,floatTime:Yl,int:Fl,intHex:Vl,intOct:Ul,intTime:Wl,map:Nr,null:$s,omap:ea,pairs:Zi,seq:Cr,set:ra,timestamp:bs},Uu={"tag:yaml.org,2002:binary":Qi,"tag:yaml.org,2002:omap":ea,"tag:yaml.org,2002:pairs":Zi,"tag:yaml.org,2002:set":ra,"tag:yaml.org,2002:timestamp":bs};function Us(t,e){let r=yo.get(e);if(!r)if(Array.isArray(t))r=[];else{const n=Array.from(yo.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${n} or define customTags array`)}if(Array.isArray(t))for(const n of t)r=r.concat(n);else typeof t=="function"&&(r=t(r.slice()));return r.map(n=>{if(typeof n!="string")return n;const s=$o[n];if(s)return s;const i=Object.keys($o).map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown custom tag "${n}"; use one of ${i}`)})}const Fu=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0;class Ss{constructor({compat:e,customTags:r,merge:n,resolveKnownTags:s,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Us(e,"compat"):e?Us(null,e):null,this.merge=!!n,this.name=typeof i=="string"&&i||"core",this.knownTags=s?Uu:{},this.tags=Us(r,this.name),this.toStringOptions=o!=null?o:null,Object.defineProperty(this,Nt,{value:Nr}),Object.defineProperty(this,Ot,{value:ys}),Object.defineProperty(this,Ar,{value:Cr}),this.sortMapEntries=typeof a=="function"?a:a===!0?Fu:null}clone(){const e=Object.create(Ss.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Vu(t,e){var c;const r=[];let n=e.directives===!0;if(e.directives!==!1&&t.directives){const l=t.directives.toString(t);l?(r.push(l),n=!0):t.directives.docStart&&(n=!0)}n&&r.push("---");const s=Cl(t,e),{commentString:i}=s.options;if(t.commentBefore){r.length!==1&&r.unshift("");const l=i(t.commentBefore);r.unshift(It(l,""))}let a=!1,o=null;if(t.contents){if(Oe(t.contents)){if(t.contents.spaceBefore&&n&&r.push(""),t.contents.commentBefore){const y=i(t.contents.commentBefore);r.push(It(y,""))}s.forceBlockIndent=!!t.comment,o=t.contents.comment}const l=o?void 0:()=>a=!0;let p=Gt(t.contents,s,()=>o=null,l);o&&(p+=At(p,"",i(o))),(p[0]==="|"||p[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${p}`:r.push(p)}else r.push(Gt(t.contents,s));if((c=t.directives)!=null&&c.docEnd)if(t.comment){const l=i(t.comment);l.includes(`
`)?(r.push("..."),r.push(It(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=t.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&r[r.length-1]!==""&&r.push(""),r.push(It(i(l),"")))}return r.join(`
`)+`
`}function tn(t,e,r,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,i=n.length;s<i;++s){const a=n[s],o=tn(t,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const i=n.get(s),a=tn(t,n,s,i);a===void 0?n.delete(s):a!==i&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const i=tn(t,n,s,s);i===void 0?n.delete(s):i!==s&&(n.delete(s),n.add(i))}else for(const[s,i]of Object.entries(n)){const a=tn(t,n,s,i);a===void 0?delete n[s]:a!==i&&(n[s]=a)}return t.call(e,r,n)}class Tr{constructor(e,r,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Ye,{value:wi});let s=null;typeof r=="function"||Array.isArray(r)?s=r:n===void 0&&r&&(n=r,r=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,uniqueKeys:!0,version:"1.2"},n);this.options=i;let{version:a}=i;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Te({version:a}),this.setSchema(a,n),e===void 0?this.contents=null:this.contents=this.createNode(e,s,n)}clone(){const e=Object.create(Tr.prototype,{[Ye]:{value:wi}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Oe(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){or(this.contents)&&this.contents.add(e)}addIn(e,r){or(this.contents)&&this.contents.addIn(e,r)}createAlias(e,r){if(!e.anchor){const n=_l(this);e.anchor=!r||n.has(r)?Al(r||"a",n):r}return new ps(e.anchor)}createNode(e,r,n){let s;if(typeof r=="function")e=r.call({"":e},"",e),s=r;else if(Array.isArray(r)){const d=E=>typeof E=="number"||E instanceof String||E instanceof Number,v=r.filter(d).map(String);v.length>0&&(r=r.concat(v)),s=r}else n===void 0&&r&&(n=r,r=void 0);const{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:p}=n!=null?n:{},{onAnchor:y,setAnchors:m,sourceObjects:$}=hu(this,a||"a"),P={aliasDuplicateObjects:i!=null?i:!0,keepUndefined:c!=null?c:!1,onAnchor:y,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:$},u=on(e,p,P);return o&&Se(u)&&(u.flow=!0),m(),u}createPair(e,r,n={}){const s=this.createNode(e,null,n),i=this.createNode(r,null,n);return new Ce(s,i)}delete(e){return or(this.contents)?this.contents.delete(e):!1}deleteIn(e){return en(e)?this.contents==null?!1:(this.contents=null,!0):or(this.contents)?this.contents.deleteIn(e):!1}get(e,r){return Se(this.contents)?this.contents.get(e,r):void 0}getIn(e,r){return en(e)?!r&&de(this.contents)?this.contents.value:this.contents:Se(this.contents)?this.contents.getIn(e,r):void 0}has(e){return Se(this.contents)?this.contents.has(e):!1}hasIn(e){return en(e)?this.contents!==void 0:Se(this.contents)?this.contents.hasIn(e):!1}set(e,r){this.contents==null?this.contents=rs(this.schema,[e],r):or(this.contents)&&this.contents.set(e,r)}setIn(e,r){en(e)?this.contents=r:this.contents==null?this.contents=rs(this.schema,Array.from(e),r):or(this.contents)&&this.contents.setIn(e,r)}setSchema(e,r={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Te({version:"1.1"}),n={merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Te({version:e}),n={merge:!1,resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(n)this.schema=new Ss(Object.assign(n,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:r,mapAsMap:n,maxAliasCount:s,onAnchor:i,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100,stringify:Gt},c=yt(this.contents,r!=null?r:"",o);if(typeof i=="function")for(const{count:l,res:p}of o.anchors.values())i(p,l);return typeof a=="function"?tn(a,{"":c},"",c):c}toJSON(e,r){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:r})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const r=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return Vu(this,e)}}function or(t){if(Se(t))return!0;throw new Error("Expected a YAML collection as document contents")}class sa extends Error{constructor(e,r,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=r}}class Kt extends sa{constructor(e,r,n){super("YAMLParseError",e,r,n)}}class Ql extends sa{constructor(e,r,n){super("YAMLWarning",e,r,n)}}const ss=(t,e)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(o=>e.linePos(o));const{line:n,col:s}=r.linePos[0];r.message+=` at line ${n}, column ${s}`;let i=s-1,a=t.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(i>=60&&a.length>80){const o=Math.min(i-39,a.length-79);a="\u2026"+a.substring(o),i-=o-1}if(a.length>80&&(a=a.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(a.substring(0,i))){let o=t.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`\u2026
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=r.linePos[1];c&&c.line===n&&c.col>s&&(o=Math.min(c.col-s,80-i));const l=" ".repeat(i)+"^".repeat(o);r.message+=`:

${a}
${l}
`}};function Er(t,{flow:e,indicator:r,next:n,offset:s,onError:i,startOnNewline:a}){let o=!1,c=a,l=a,p="",y="",m=!1,$=!1,P=!1,u=null,d=null,v=null,E=null,b=null;for(const _ of t)switch(P&&(_.type!=="space"&&_.type!=="newline"&&_.type!=="comma"&&i(_.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),P=!1),_.type){case"space":!e&&c&&r!=="doc-start"&&_.source[0]==="	"&&i(_,"TAB_AS_INDENT","Tabs are not allowed as indentation"),l=!0;break;case"comment":{l||i(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const K=_.source.substring(1)||" ";p?p+=y+K:p=K,y="",c=!1;break}case"newline":c?p?p+=_.source:o=!0:y+=_.source,c=!0,m=!0,(u||d)&&($=!0),l=!0;break;case"anchor":u&&i(_,"MULTIPLE_ANCHORS","A node can have at most one anchor"),_.source.endsWith(":")&&i(_.offset+_.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),u=_,b===null&&(b=_.offset),c=!1,l=!1,P=!0;break;case"tag":{d&&i(_,"MULTIPLE_TAGS","A node can have at most one tag"),d=_,b===null&&(b=_.offset),c=!1,l=!1,P=!0;break}case r:(u||d)&&i(_,"BAD_PROP_ORDER",`Anchors and tags must be after the ${_.source} indicator`),E&&i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.source} in ${e!=null?e:"collection"}`),E=_,c=!1,l=!1;break;case"comma":if(e){v&&i(_,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),v=_,c=!1,l=!1;break}default:i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.type} token`),c=!1,l=!1}const j=t[t.length-1],S=j?j.offset+j.source.length:s;return P&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&i(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),{comma:v,found:E,spaceBefore:o,comment:p,hasNewline:m,hasNewlineAfterProp:$,anchor:u,tag:d,end:S,start:b!=null?b:S}}function cn(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of t.items){for(const r of e.start)if(r.type==="newline")return!0;if(e.sep){for(const r of e.sep)if(r.type==="newline")return!0}if(cn(e.key)||cn(e.value))return!0}return!1;default:return!0}}function Oi(t,e,r){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===t&&(n.source==="]"||n.source==="}")&&cn(e)&&r(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Zl(t,e,r){const{uniqueKeys:n}=t.options;if(n===!1)return!1;const s=typeof n=="function"?n:(i,a)=>i===a||de(i)&&de(a)&&i.value===a.value&&!(i.value==="<<"&&t.schema.merge);return e.some(i=>s(i.key,r))}const go="All mapping items must start at the same column";function Ku({composeNode:t,composeEmptyNode:e},r,n,s){var o;const i=new We(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset;for(const c of n.items){const{start:l,key:p,sep:y,value:m}=c,$=Er(l,{indicator:"explicit-key-ind",next:p!=null?p:y==null?void 0:y[0],offset:a,onError:s,startOnNewline:!0}),P=!$.found;if(P){if(p&&(p.type==="block-seq"?s(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(a,"BAD_INDENT",go)),!$.anchor&&!$.tag&&!y){$.comment&&(i.comment?i.comment+=`
`+$.comment:i.comment=$.comment);continue}($.hasNewlineAfterProp||cn(p))&&s(p!=null?p:l[l.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((o=$.found)==null?void 0:o.indent)!==n.indent&&s(a,"BAD_INDENT",go);const u=$.end,d=p?t(r,p,$,s):e(r,u,l,null,$,s);r.schema.compat&&Oi(n.indent,p,s),Zl(r,i.items,d)&&s(u,"DUPLICATE_KEY","Map keys must be unique");const v=Er(y!=null?y:[],{indicator:"map-value-ind",next:m,offset:d.range[2],onError:s,startOnNewline:!p||p.type==="block-scalar"});if(a=v.end,v.found){P&&((m==null?void 0:m.type)==="block-map"&&!v.hasNewline&&s(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&$.start<v.found.offset-1024&&s(d.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=m?t(r,m,v,s):e(r,a,y,null,v,s);r.schema.compat&&Oi(n.indent,m,s),a=E.range[2];const b=new Ce(d,E);r.options.keepSourceTokens&&(b.srcToken=c),i.items.push(b)}else{P&&s(d.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(d.comment?d.comment+=`
`+v.comment:d.comment=v.comment);const E=new Ce(d);r.options.keepSourceTokens&&(E.srcToken=c),i.items.push(E)}}return i.range=[n.offset,a,a],i}function zu({composeNode:t,composeEmptyNode:e},r,n,s){const i=new Qt(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset;for(const{start:o,value:c}of n.items){const l=Er(o,{indicator:"seq-item-ind",next:c,offset:a,onError:s,startOnNewline:!0});if(a=l.end,!l.found)if(l.anchor||l.tag||c)c&&c.type==="block-seq"?s(a,"BAD_INDENT","All sequence items must start at the same column"):s(a,"MISSING_CHAR","Sequence item without - indicator");else{l.comment&&(i.comment=l.comment);continue}const p=c?t(r,c,l,s):e(r,a,o,null,l,s);r.schema.compat&&Oi(n.indent,c,s),a=p.range[2],i.items.push(p)}return i.range=[n.offset,a,a],i}function yn(t,e,r,n){let s="";if(t){let i=!1,a="";for(const o of t){const{source:c,type:l}=o;switch(l){case"space":i=!0;break;case"comment":{r&&!i&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=c.substring(1)||" ";s?s+=a+p:s=p,a="";break}case"newline":s&&(a+=c),i=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const Fs="Block collections are not allowed within flow collections",Vs=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Ju({composeNode:t,composeEmptyNode:e},r,n,s){var P;const i=n.start.source==="{",a=i?"flow map":"flow sequence",o=i?new We(r.schema):new Qt(r.schema);o.flow=!0;const c=r.atRoot;c&&(r.atRoot=!1);let l=n.offset+n.start.source.length;for(let u=0;u<n.items.length;++u){const d=n.items[u],{start:v,key:E,sep:b,value:j}=d,S=Er(v,{flow:a,indicator:"explicit-key-ind",next:E!=null?E:b==null?void 0:b[0],offset:l,onError:s,startOnNewline:!1});if(!S.found){if(!S.anchor&&!S.tag&&!b&&!j){u===0&&S.comma?s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):u<n.items.length-1&&s(S.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),S.comment&&(o.comment?o.comment+=`
`+S.comment:o.comment=S.comment),l=S.end;continue}!i&&r.options.strict&&cn(E)&&s(E,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(u===0)S.comma&&s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(S.comma||s(S.start,"MISSING_CHAR",`Missing , between ${a} items`),S.comment){let _="";e:for(const K of v)switch(K.type){case"comma":case"space":break;case"comment":_=K.source.substring(1);break e;default:break e}if(_){let K=o.items[o.items.length-1];ge(K)&&(K=(P=K.value)!=null?P:K.key),K.comment?K.comment+=`
`+_:K.comment=_,S.comment=S.comment.substring(_.length+1)}}if(!i&&!b&&!S.found){const _=j?t(r,j,S,s):e(r,S.end,b,null,S,s);o.items.push(_),l=_.range[2],Vs(j)&&s(_.range,"BLOCK_IN_FLOW",Fs)}else{const _=S.end,K=E?t(r,E,S,s):e(r,_,v,null,S,s);Vs(E)&&s(K.range,"BLOCK_IN_FLOW",Fs);const Z=Er(b!=null?b:[],{flow:a,indicator:"map-value-ind",next:j,offset:K.range[2],onError:s,startOnNewline:!1});if(Z.found){if(!i&&!S.found&&r.options.strict){if(b)for(const C of b){if(C===Z.found)break;if(C.type==="newline"){s(C,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}S.start<Z.found.offset-1024&&s(Z.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else j&&("source"in j&&j.source&&j.source[0]===":"?s(j,"MISSING_CHAR",`Missing space after : in ${a}`):s(Z.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const w=j?t(r,j,Z,s):Z.found?e(r,Z.end,b,null,Z,s):null;w?Vs(j)&&s(w.range,"BLOCK_IN_FLOW",Fs):Z.comment&&(K.comment?K.comment+=`
`+Z.comment:K.comment=Z.comment);const N=new Ce(K,w);if(r.options.keepSourceTokens&&(N.srcToken=d),i){const C=o;Zl(r,C.items,K)&&s(_,"DUPLICATE_KEY","Map keys must be unique"),C.items.push(N)}else{const C=new We(r.schema);C.flow=!0,C.items.push(N),o.items.push(C)}l=w?w.range[2]:Z.end}}const p=i?"}":"]",[y,...m]=n.end;let $=l;if(y&&y.source===p)$=y.offset+y.source.length;else{const u=a[0].toUpperCase()+a.substring(1),d=c?`${u} must end with a ${p}`:`${u} in block collection must be sufficiently indented and end with a ${p}`;s(l,c?"MISSING_CHAR":"BAD_INDENT",d),y&&y.source.length!==1&&m.unshift(y)}if(m.length>0){const u=yn(m,$,r.options.strict,s);u.comment&&(o.comment?o.comment+=`
`+u.comment:o.comment=u.comment),o.range=[n.offset,$,u.offset]}else o.range=[n.offset,$,$];return o}function Gu(t,e,r,n,s){let i;switch(r.type){case"block-map":{i=Ku(t,e,r,s);break}case"block-seq":{i=zu(t,e,r,s);break}case"flow-collection":{i=Ju(t,e,r,s);break}}if(!n)return i;const a=e.directives.tagName(n.source,m=>s(n,"TAG_RESOLVE_FAILED",m));if(!a)return i;const o=i.constructor;if(a==="!"||a===o.tagName)return i.tag=o.tagName,i;const c=Yt(i)?"map":"seq";let l=e.schema.tags.find(m=>m.collection===c&&m.tag===a);if(!l){const m=e.schema.knownTags[a];if(m&&m.collection===c)e.schema.tags.push(Object.assign({},m,{default:!1})),l=m;else return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),i.tag=a,i}const p=l.resolve(i,m=>s(n,"TAG_RESOLVE_FAILED",m),e.options),y=Oe(p)?p:new Y(p);return y.range=i.range,y.tag=a,l!=null&&l.format&&(y.format=l.format),y}function ef(t,e,r){const n=t.offset,s=Hu(t,e,r);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const i=s.mode===">"?Y.BLOCK_FOLDED:Y.BLOCK_LITERAL,a=t.source?Xu(t.source):[];let o=a.length;for(let u=a.length-1;u>=0;--u){const d=a[u][1];if(d===""||d==="\r")o=u;else break}if(o===0){const u=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let d=n+s.length;return t.source&&(d+=t.source.length),{value:u,type:i,comment:s.comment,range:[n,d,d]}}let c=t.indent+s.indent,l=t.offset+s.length,p=0;for(let u=0;u<o;++u){const[d,v]=a[u];if(v===""||v==="\r")s.indent===0&&d.length>c&&(c=d.length);else{if(d.length<c){const E="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";r(l+d.length,"MISSING_CHAR",E)}s.indent===0&&(c=d.length),p=u;break}l+=d.length+v.length+1}for(let u=a.length-1;u>=o;--u)a[u][0].length>c&&(o=u+1);let y="",m="",$=!1;for(let u=0;u<p;++u)y+=a[u][0].slice(c)+`
`;for(let u=p;u<o;++u){let[d,v]=a[u];l+=d.length+v.length+1;const E=v[v.length-1]==="\r";if(E&&(v=v.slice(0,-1)),v&&d.length<c){const j=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;r(l-v.length-(E?2:1),"BAD_INDENT",j),d=""}i===Y.BLOCK_LITERAL?(y+=m+d.slice(c)+v,m=`
`):d.length>c||v[0]==="	"?(m===" "?m=`
`:!$&&m===`
`&&(m=`

`),y+=m+d.slice(c)+v,m=`
`,$=!0):v===""?m===`
`?y+=`
`:m=`
`:(y+=m+v,m=" ",$=!1)}switch(s.chomp){case"-":break;case"+":for(let u=o;u<a.length;++u)y+=`
`+a[u][0].slice(c);y[y.length-1]!==`
`&&(y+=`
`);break;default:y+=`
`}const P=n+s.length+t.source.length;return{value:y,type:i,comment:s.comment,range:[n,P,P]}}function Hu({offset:t,props:e},r,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],i=s[0];let a=0,o="",c=-1;for(let m=1;m<s.length;++m){const $=s[m];if(!o&&($==="-"||$==="+"))o=$;else{const P=Number($);!a&&P?a=P:c===-1&&(c=t+m)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,p="",y=s.length;for(let m=1;m<e.length;++m){const $=e[m];switch($.type){case"space":l=!0;case"newline":y+=$.source.length;break;case"comment":r&&!l&&n($,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),y+=$.source.length,p=$.source.substring(1);break;case"error":n($,"UNEXPECTED_TOKEN",$.message),y+=$.source.length;break;default:{const P=`Unexpected token in block scalar header: ${$.type}`;n($,"UNEXPECTED_TOKEN",P);const u=$.source;u&&typeof u=="string"&&(y+=u.length)}}}return{mode:i,indent:a,chomp:o,comment:p,length:y}}function Xu(t){const e=t.split(/\n( *)/),r=e[0],n=r.match(/^( *)/),i=[n!=null&&n[1]?[n[1],r.slice(n[1].length)]:["",r]];for(let a=1;a<e.length;a+=2)i.push([e[a],e[a+1]]);return i}function tf(t,e,r){const{offset:n,type:s,source:i,end:a}=t;let o,c;const l=(m,$,P)=>r(n+m,$,P);switch(s){case"scalar":o=Y.PLAIN,c=Wu(i,l);break;case"single-quoted-scalar":o=Y.QUOTE_SINGLE,c=Yu(i,l);break;case"double-quoted-scalar":o=Y.QUOTE_DOUBLE,c=Qu(i,l);break;default:return r(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+i.length,n+i.length]}}const p=n+i.length,y=yn(a,p,e,r);return{value:c,type:o,comment:y.comment,range:[n,p,y.offset]}}function Wu(t,e){let r="";switch(t[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${t[0]}`;break}case"@":case"`":{r=`reserved character ${t[0]}`;break}}return r&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),rf(t)}function Yu(t,e){return(t[t.length-1]!=="'"||t.length===1)&&e(t.length,"MISSING_CHAR","Missing closing 'quote"),rf(t.slice(1,-1)).replace(/''/g,"'")}function rf(t){var c;let e,r;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(t);if(!n)return t;let s=n[1],i=" ",a=e.lastIndex;for(r.lastIndex=a;n=r.exec(t);)n[1]===""?i===`
`?s+=i:i=`
`:(s+=i+n[1],i=" "),a=r.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,n=o.exec(t),s+i+((c=n==null?void 0:n[1])!=null?c:"")}function Qu(t,e){let r="";for(let n=1;n<t.length-1;++n){const s=t[n];if(!(s==="\r"&&t[n+1]===`
`))if(s===`
`){const{fold:i,offset:a}=Zu(t,n);r+=i,n=a}else if(s==="\\"){let i=t[++n];const a=ed[i];if(a)r+=a;else if(i===`
`)for(i=t[n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="\r"&&t[n+1]===`
`)for(i=t[++n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="x"||i==="u"||i==="U"){const o={x:2,u:4,U:8}[i];r+=td(t,n+1,o,e),n+=o}else{const o=t.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),r+=o}}else if(s===" "||s==="	"){const i=n;let a=t[n+1];for(;a===" "||a==="	";)a=t[++n+1];a!==`
`&&!(a==="\r"&&t[n+2]===`
`)&&(r+=n>i?t.slice(i,n+1):s)}else r+=s}return(t[t.length-1]!=='"'||t.length===1)&&e(t.length,"MISSING_CHAR",'Missing closing "quote'),r}function Zu(t,e){let r="",n=t[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&t[e+2]!==`
`);)n===`
`&&(r+=`
`),e+=1,n=t[e+1];return r||(r=" "),{fold:r,offset:e}}const ed={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function td(t,e,r,n){const s=t.substr(e,r),a=s.length===r&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(a)){const o=t.substr(e-2,r+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function nf(t,e,r,n){const{value:s,type:i,comment:a,range:o}=e.type==="block-scalar"?ef(e,t.options.strict,n):tf(e,t.options.strict,n),c=r?t.directives.tagName(r.source,y=>n(r,"TAG_RESOLVE_FAILED",y)):null,l=r&&c?rd(t.schema,s,c,r,n):e.type==="scalar"?nd(t,s,e,n):t.schema[Ot];let p;try{const y=l.resolve(s,m=>n(r!=null?r:e,"TAG_RESOLVE_FAILED",m),t.options);p=de(y)?y:new Y(y)}catch(y){const m=y instanceof Error?y.message:String(y);n(r!=null?r:e,"TAG_RESOLVE_FAILED",m),p=new Y(s)}return p.range=o,p.source=s,i&&(p.type=i),c&&(p.tag=c),l.format&&(p.format=l.format),a&&(p.comment=a),p}function rd(t,e,r,n,s){var o;if(r==="!")return t[Ot];const i=[];for(const c of t.tags)if(!c.collection&&c.tag===r)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((o=c.test)!=null&&o.test(e))return c;const a=t.knownTags[r];return a&&!a.collection?(t.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),t[Ot])}function nd({directives:t,schema:e},r,n,s){var a;const i=e.tags.find(o=>{var c;return o.default&&((c=o.test)==null?void 0:c.test(r))})||e[Ot];if(e.compat){const o=(a=e.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))}))!=null?a:e[Ot];if(i.tag!==o.tag){const c=t.tagString(i.tag),l=t.tagString(o.tag),p=`Value may be parsed as either ${c} or ${l}`;s(n,"TAG_RESOLVE_FAILED",p,!0)}}return i}function sd(t,e,r){if(e){r===null&&(r=e.length);for(let n=r-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":t-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)t+=s.source.length,s=e[++n];break}}return t}const id={composeNode:sf,composeEmptyNode:ia};function sf(t,e,r,n){const{spaceBefore:s,comment:i,anchor:a,tag:o}=r;let c,l=!0;switch(e.type){case"alias":c=ad(t,e,n),(a||o)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=nf(t,e,o,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Gu(id,t,e,o,n),a&&(c.anchor=a.source.substring(1));break;default:{const p=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",p),c=ia(t,e.offset,void 0,null,r,n),l=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&(c.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?c.comment=i:c.commentBefore=i),t.options.keepSourceTokens&&l&&(c.srcToken=e),c}function ia(t,e,r,n,{spaceBefore:s,comment:i,anchor:a,tag:o},c){const l={type:"scalar",offset:sd(e,r,n),indent:-1,source:""},p=nf(t,l,o,c);return a&&(p.anchor=a.source.substring(1),p.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(p.spaceBefore=!0),i&&(p.comment=i),p}function ad({options:t},{offset:e,source:r,end:n},s){const i=new ps(r.substring(1));i.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&s(e+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+r.length,o=yn(n,a,t.strict,s);return i.range=[e,a,o.offset],o.comment&&(i.comment=o.comment),i}function od(t,e,{offset:r,start:n,value:s,end:i},a){const o=Object.assign({_directives:e},t),c=new Tr(void 0,o),l={atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},p=Er(n,{indicator:"doc-start",next:s!=null?s:i==null?void 0:i[0],offset:r,onError:a,startOnNewline:!0});p.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?sf(l,s,p,a):ia(l,p.end,n,null,p,a);const y=c.contents.range[2],m=yn(i,y,!1,a);return m.comment&&(c.comment=m.comment),c.range=[r,y,m.offset],c}function Jr(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:e,source:r}=t;return[e,e+(typeof r=="string"?r.length:1)]}function vo(t){var s;let e="",r=!1,n=!1;for(let i=0;i<t.length;++i){const a=t[i];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),r=!0,n=!1;break;case"%":((s=t[i+1])==null?void 0:s[0])!=="#"&&(i+=1),r=!1;break;default:r||(n=!0),r=!1}}return{comment:e,afterEmptyLine:n}}class aa{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,n,s,i)=>{const a=Jr(r);i?this.warnings.push(new Ql(a,n,s)):this.errors.push(new Kt(a,n,s))},this.directives=new Te({version:e.version||"1.2"}),this.options=e}decorate(e,r){const{comment:n,afterEmptyLine:s}=vo(this.prelude);if(n){const i=e.contents;if(r)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!i)e.commentBefore=n;else if(Se(i)&&!i.flow&&i.items.length>0){let a=i.items[0];ge(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=i.commentBefore;i.commentBefore=a?`${n}
${a}`:n}}r?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:vo(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,r=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(r,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(r,n,s)=>{const i=Jr(e);i[0]+=r,this.onError(i,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const r=od(this.options,this.directives,e,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const r=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Kt(Jr(e),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Kt(Jr(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const r=yn(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new Kt(Jr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Tr(void 0,n);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,r,r],this.decorate(s,!1),yield s}}}function cd(t,e=!0,r){if(t){const n=(s,i,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(r)r(o,i,a);else throw new Kt([o,o+1],i,a)};switch(t.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return tf(t,e,n);case"block-scalar":return ef(t,e,n)}}return null}function ld(t,e){var l;const{implicitKey:r=!1,indent:n,inFlow:s=!1,offset:i=-1,type:a="PLAIN"}=e,o=mn({type:a,value:t},{implicitKey:r,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=(l=e.end)!=null?l:[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const p=o.indexOf(`
`),y=o.substring(0,p),m=o.substring(p+1)+`
`,$=[{type:"block-scalar-header",offset:i,indent:n,source:y}];return af($,c)||$.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:i,indent:n,props:$,source:m}}case'"':return{type:"double-quoted-scalar",offset:i,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:i,indent:n,source:o,end:c};default:return{type:"scalar",offset:i,indent:n,source:o,end:c}}}function fd(t,e,r={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:i=!1,type:a}=r,o="indent"in t?t.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(t.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=t.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=mn({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":pd(t,c);break;case'"':Ks(t,c,"double-quoted-scalar");break;case"'":Ks(t,c,"single-quoted-scalar");break;default:Ks(t,c,"scalar")}}function pd(t,e){const r=e.indexOf(`
`),n=e.substring(0,r),s=e.substring(r+1)+`
`;if(t.type==="block-scalar"){const i=t.props[0];if(i.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i.source=n,t.source=s}else{const{offset:i}=t,a="indent"in t?t.indent:-1,o=[{type:"block-scalar-header",offset:i,indent:a,source:n}];af(o,"end"in t?t.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(t))c!=="type"&&c!=="offset"&&delete t[c];Object.assign(t,{type:"block-scalar",indent:a,props:o,source:s})}}function af(t,e){if(e)for(const r of e)switch(r.type){case"space":case"comment":t.push(r);break;case"newline":return t.push(r),!0}return!1}function Ks(t,e,r){switch(t.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":t.type=r,t.source=e;break;case"block-scalar":{const n=t.props.slice(1);let s=e.length;t.props[0].type==="block-scalar-header"&&(s-=t.props[0].source.length);for(const i of n)i.offset+=s;delete t.props,Object.assign(t,{type:r,source:e,end:n});break}case"block-map":case"block-seq":{const n=t.offset+e.length,s={type:"newline",offset:n,indent:t.indent,source:`
`};delete t.items,Object.assign(t,{type:r,source:e,end:[s]});break}default:{const n="indent"in t?t.indent:-1,s="end"in t&&Array.isArray(t.end)?t.end.filter(i=>i.type==="space"||i.type==="comment"||i.type==="newline"):[];for(const i of Object.keys(t))i!=="type"&&i!=="offset"&&delete t[i];Object.assign(t,{type:r,indent:n,source:e,end:s})}}}const ud=t=>"type"in t?is(t):Jn(t);function is(t){switch(t.type){case"block-scalar":{let e="";for(const r of t.props)e+=is(r);return e+t.source}case"block-map":case"block-seq":{let e="";for(const r of t.items)e+=Jn(r);return e}case"flow-collection":{let e=t.start.source;for(const r of t.items)e+=Jn(r);for(const r of t.end)e+=r.source;return e}case"document":{let e=Jn(t);if(t.end)for(const r of t.end)e+=r.source;return e}default:{let e=t.source;if("end"in t&&t.end)for(const r of t.end)e+=r.source;return e}}}function Jn({start:t,key:e,sep:r,value:n}){let s="";for(const i of t)s+=i.source;if(e&&(s+=is(e)),r)for(const i of r)s+=i.source;return n&&(s+=is(n)),s}const Pi=Symbol("break visit"),dd=Symbol("skip children"),of=Symbol("remove item");function Ht(t,e){"type"in t&&t.type==="document"&&(t={start:t.start,value:t.value}),cf(Object.freeze([]),t,e)}Ht.BREAK=Pi;Ht.SKIP=dd;Ht.REMOVE=of;Ht.itemAtPath=(t,e)=>{let r=t;for(const[n,s]of e){const i=r==null?void 0:r[n];if(i&&"items"in i)r=i.items[s];else return}return r};Ht.parentCollection=(t,e)=>{const r=Ht.itemAtPath(t,e.slice(0,-1)),n=e[e.length-1][0],s=r==null?void 0:r[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function cf(t,e,r){let n=r(e,t);if(typeof n=="symbol")return n;for(const s of["key","value"]){const i=e[s];if(i&&"items"in i){for(let a=0;a<i.items.length;++a){const o=cf(Object.freeze(t.concat([[s,a]])),i.items[a],r);if(typeof o=="number")a=o-1;else{if(o===Pi)return Pi;o===of&&(i.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,t))}}return typeof n=="function"?n(e,t):n}const ws="\uFEFF",Is="",Es="",ln="",md=t=>!!t&&"items"in t,hd=t=>!!t&&(t.type==="scalar"||t.type==="single-quoted-scalar"||t.type==="double-quoted-scalar"||t.type==="block-scalar");function yd(t){switch(t){case ws:return"<BOM>";case Is:return"<DOC>";case Es:return"<FLOW_END>";case ln:return"<SCALAR>";default:return JSON.stringify(t)}}function lf(t){switch(t){case ws:return"byte-order-mark";case Is:return"doc-mode";case Es:return"flow-error-end";case ln:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(t[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const $d=Object.freeze(Object.defineProperty({__proto__:null,BOM:ws,DOCUMENT:Is,FLOW_END:Es,SCALAR:ln,isCollection:md,isScalar:hd,prettyToken:yd,tokenType:lf,createScalarToken:ld,resolveAsScalar:cd,setScalarValue:fd,stringify:ud,visit:Ht},Symbol.toStringTag,{value:"Module"}));function He(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const bo="0123456789ABCDEFabcdef".split(""),gd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),zs=",[]{}".split(""),vd=` ,[]{}
\r	`.split(""),Js=t=>!t||vd.includes(t);class ff{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,r=!1){var s;e&&(this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null),this.atEnd=!r;let n=(s=this.next)!=null?s:"stream";for(;n&&(r||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,r=this.buffer[e];for(;r===" "||r==="	";)r=this.buffer[++e];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let r=this.buffer[e];if(this.indentNext>0){let n=0;for(;r===" ";)r=this.buffer[++n+e];if(r==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return r===`
`||n>=this.indentNext||!r&&!this.atEnd?e+n:-1}if(r==="-"||r==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&He(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===ws&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let r=e.length;const n=e.indexOf("#");if(n!==-1){const i=e[n-1];(i===" "||i==="	")&&(r=n-1)}for(;;){const i=e[r-1];if(i===" "||i==="	")r-=1;else break}const s=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-r),yield*this.pushNewline(),"stream"}return yield Is,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if(r==="---"&&He(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(r==="..."&&He(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!He(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&He(r)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(e[r]){case"#":yield*this.pushCount(e.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Js),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,r,n=-1;do e=yield*this.pushNewline(),e>0?(r=yield*this.pushSpaces(!1),this.indentValue=n=r):r=0,r+=yield*this.pushSpaces(!0);while(e+r>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&He(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Es,yield*this.parseLineStart();let i=0;for(;s[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),s[i]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Js),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||He(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let r=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let i=0;for(;this.buffer[r-1-i]==="\\";)i+=1;if(i%2===0)break;r=this.buffer.indexOf('"',r+1)}const n=this.buffer.substring(0,r);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const i=this.continueScalar(s+1);if(i===-1)break;s=n.indexOf(`
`,i)}s!==-1&&(r=s-(n[s-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const r=this.buffer[++e];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>He(r)||r==="#")}*parseBlockScalar(){let e=this.pos-1,r=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":r+=1;break;case`
`:e=s,r=0;break;case"\r":{const i=this.buffer[s+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext+=this.blockScalarIndent;do{const s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}if(!this.blockScalarKeep)do{let s=e-1,i=this.buffer[s];i==="\r"&&(i=this.buffer[--s]);const a=s;for(;i===" "||i==="	";)i=this.buffer[--s];if(i===`
`&&s>=this.pos&&s+1+r>a)e=s;else break}while(!0);return yield ln,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let r=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const i=this.buffer[n+1];if(He(i)||e&&i===",")break;r=n}else if(He(s)){let i=this.buffer[n+1];if(s==="\r"&&(i===`
`?(n+=1,s=`
`,i=this.buffer[n+1]):r=n),i==="#"||e&&zs.includes(i))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&zs.includes(s))break;r=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield ln,yield*this.pushToIndex(r+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,r){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Js))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,r=this.charAt(1);if(He(r)||e&&zs.includes(r))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,r=this.buffer[e];for(;!He(r)&&r!==">";)r=this.buffer[++e];return yield*this.pushToIndex(r===">"?e+1:e,!1)}else{let e=this.pos+1,r=this.buffer[e];for(;r;)if(gd.includes(r))r=this.buffer[++e];else if(r==="%"&&bo.includes(this.buffer[e+1])&&bo.includes(this.buffer[e+2]))r=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let r=this.pos-1,n;do n=this.buffer[++r];while(n===" "||e&&n==="	");const s=r-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=r),s}*pushUntil(e){let r=this.pos,n=this.buffer[r];for(;!e(n);)n=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class pf{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let r=0,n=this.lineStarts.length;for(;r<n;){const i=r+n>>1;this.lineStarts[i]<e?r=i+1:n=i}if(this.lineStarts[r]===e)return{line:r+1,col:1};if(r===0)return{line:0,col:e};const s=this.lineStarts[r-1];return{line:r,col:e-s+1}}}}function et(t,e){for(let r=0;r<t.length;++r)if(t[r].type===e)return!0;return!1}function So(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function uf(t){switch(t==null?void 0:t.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function qn(t){var e;switch(t.type){case"document":return t.start;case"block-map":{const r=t.items[t.items.length-1];return(e=r.sep)!=null?e:r.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function cr(t){var r;if(t.length===0)return[];let e=t.length;e:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((r=t[++e])==null?void 0:r.type)==="space";);return t.splice(e,t.length)}function wo(t){if(t.start.type==="flow-seq-start")for(const e of t.items)e.sep&&!e.value&&!et(e.start,"explicit-key-ind")&&!et(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,uf(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class oa{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new ff,this.onNewLine=e}*parse(e,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,r))yield*this.next(n);r||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const r=lf(e);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const r=e!=null?e:this.stack.pop();if(r)if(this.stack.length===0)yield r;else{const n=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in n?n.indent:0:r.type==="flow-collection"&&n.type==="document"&&(r.indent=0),r.type==="flow-collection"&&wo(r),n.type){case"document":n.value=r;break;case"block-scalar":n.props.push(r);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=r;else{Object.assign(s,{key:r,sep:[]}),this.onKeyLine=!et(s.start,"explicit-key-ind");return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:r}):s.value=r;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:r,sep:[]}):s.sep?s.value=r:Object.assign(s,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const s=r.items[r.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&So(s.start)===-1&&(r.indent===0||s.start.every(i=>i.type!=="comment"||i.indent<r.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),r.items.splice(-1,1))}}else{const n="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:n}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{So(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const r=this.startBlockValue(e);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const r=qn(this.peek(2)),n=cr(r);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent&&r.sep;let i=[];if(s&&r.sep&&!r.value){const a=[];for(let o=0;o<r.sep.length;++o){const c=r.sep[o];switch(c.type){case"newline":a.push(o);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(i=r.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":s||r.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!et(r.start,"explicit-key-ind")?r.start.push(this.sourceToken):s||r.value?(i.push(this.sourceToken),e.items.push({start:i})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}),this.onKeyLine=!0;return;case"map-value-ind":if(et(r.start,"explicit-key-ind"))if(r.sep)if(r.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(et(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(uf(r.key)&&!et(r.sep,"newline")){const a=cr(r.start),o=r.key,c=r.sep;c.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:c}]})}else i.length>0?r.sep=r.sep.concat(i,this.sourceToken):r.sep.push(this.sourceToken);else if(et(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const a=cr(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||s?e.items.push({start:i,key:null,sep:[this.sourceToken]}):et(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);s||r.value?(e.items.push({start:i,key:a,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(a):(Object.assign(r,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&et(r.start,"explicit-key-ind")&&e.items.push({start:i}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=e.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;r.value||et(r.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const r=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?e.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!r||r.value?e.items.push({start:[],key:s,sep:[]}):r.sep?this.stack.push(s):Object.assign(r,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=qn(n),i=cr(s);wo(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=qn(e),n=cr(r);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const r=qn(e),n=cr(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,r){return this.type!=="comment"||this.indent<=r?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function df(t){const e=t.prettyErrors!==!1;return{lineCounter:t.lineCounter||e&&new pf||null,prettyErrors:e}}function bd(t,e={}){const{lineCounter:r,prettyErrors:n}=df(e),s=new oa(r==null?void 0:r.addNewLine),i=new aa(e),a=Array.from(i.compose(s.parse(t)));if(n&&r)for(const o of a)o.errors.forEach(ss(t,r)),o.warnings.forEach(ss(t,r));return a.length>0?a:Object.assign([],{empty:!0},i.streamInfo())}function mf(t,e={}){const{lineCounter:r,prettyErrors:n}=df(e),s=new oa(r==null?void 0:r.addNewLine),i=new aa(e);let a=null;for(const o of i.compose(s.parse(t),!0,t.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Kt(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&r&&(a.errors.forEach(ss(t,r)),a.warnings.forEach(ss(t,r))),a}function Sd(t,e,r){let n;typeof e=="function"?n=e:r===void 0&&e&&typeof e=="object"&&(r=e);const s=mf(t,r);if(!s)return null;if(s.warnings.forEach(i=>Tl(s.options.logLevel,i)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},r))}function wd(t,e,r){var s;let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:r===void 0&&e&&(r=e),typeof r=="string"&&(r=r.length),typeof r=="number"){const i=Math.round(r);r=i<1?void 0:i>8?{indent:8}:{indent:i}}if(t===void 0){const{keepUndefined:i}=(s=r!=null?r:e)!=null?s:{};if(!i)return}return new Tr(t,n,r).toString(r)}const Io=Object.freeze(Object.defineProperty({__proto__:null,CST:$d,Composer:aa,Document:Tr,Schema:Ss,YAMLError:sa,YAMLParseError:Kt,YAMLWarning:Ql,Alias:ps,isAlias:Wt,isCollection:Se,isDocument:dn,isMap:Yt,isNode:Oe,isPair:ge,isScalar:de,isSeq:xr,Pair:Ce,Scalar:Y,YAMLMap:We,YAMLSeq:Qt,Lexer:ff,LineCounter:pf,Parser:oa,parse:Sd,parseAllDocuments:bd,parseDocument:mf,stringify:wd,visit:Tt,visitAsync:fs},Symbol.toStringTag,{value:"Module"}));var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(t){var e=t.default;if(typeof e=="function"){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var s=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return t[n]}})}),r}var gt=Ed;function Ed(t,e){return function r(){e==null&&(e=t.length);var n=[].slice.call(arguments);return n.length>=e?t.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var as={exports:{}};(function(t,e){(function(r,n){var s={};r.PubSub?(s=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=s,n(s)),t!==void 0&&t.exports&&(e=t.exports=s),e.PubSub=s,t.exports=e=s})(typeof window=="object"&&window||ca,function(r){var n={},s=-1,i="*";function a(u){var d;for(d in u)if(Object.prototype.hasOwnProperty.call(u,d))return!0;return!1}function o(u){return function(){throw u}}function c(u,d,v){try{u(d,v)}catch(E){setTimeout(o(E),0)}}function l(u,d,v){u(d,v)}function p(u,d,v,E){var b=n[d],j=E?l:c,S;if(!!Object.prototype.hasOwnProperty.call(n,d))for(S in b)Object.prototype.hasOwnProperty.call(b,S)&&j(b[S],u,v)}function y(u,d,v){return function(){var b=String(u),j=b.lastIndexOf(".");for(p(u,u,d,v);j!==-1;)b=b.substr(0,j),j=b.lastIndexOf("."),p(u,b,d,v);p(u,i,d,v)}}function m(u){var d=String(u),v=Boolean(Object.prototype.hasOwnProperty.call(n,d)&&a(n[d]));return v}function $(u){for(var d=String(u),v=m(d)||m(i),E=d.lastIndexOf(".");!v&&E!==-1;)d=d.substr(0,E),E=d.lastIndexOf("."),v=m(d);return v}function P(u,d,v,E){u=typeof u=="symbol"?u.toString():u;var b=y(u,d,E),j=$(u);return j?(v===!0?b():setTimeout(b,0),!0):!1}r.publish=function(u,d){return P(u,d,!1,r.immediateExceptions)},r.publishSync=function(u,d){return P(u,d,!0,r.immediateExceptions)},r.subscribe=function(u,d){if(typeof d!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(n,u)||(n[u]={});var v="uid_"+String(++s);return n[u][v]=d,v},r.subscribeAll=function(u){return r.subscribe(i,u)},r.subscribeOnce=function(u,d){var v=r.subscribe(u,function(){r.unsubscribe(v),d.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function(d){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&delete n[v]},r.countSubscriptions=function(d){var v,E,b=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0){for(E in n[v])b++;break}return b},r.getSubscriptions=function(d){var v,E=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&E.push(v);return E},r.unsubscribe=function(u){var d=function(Z){var w;for(w in n)if(Object.prototype.hasOwnProperty.call(n,w)&&w.indexOf(Z)===0)return!0;return!1},v=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(n,u)||d(u)),E=!v&&typeof u=="string",b=typeof u=="function",j=!1,S,_,K;if(v){r.clearSubscriptions(u);return}for(S in n)if(Object.prototype.hasOwnProperty.call(n,S)){if(_=n[S],E&&_[u]){delete _[u],j=u;break}if(b)for(K in _)Object.prototype.hasOwnProperty.call(_,K)&&_[K]===u&&(delete _[K],j=!0)}return j}})})(as,as.exports);var ki={exports:{}};/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */(function(t,e){(function(r,n){n(e)})(ca,function(r){function n(){for(var h=arguments.length,f=Array(h),g=0;g<h;g++)f[g]=arguments[g];if(f.length>1){f[0]=f[0].slice(0,-1);for(var O=f.length-1,I=1;I<O;++I)f[I]=f[I].slice(1,-1);return f[O]=f[O].slice(1),f.join("")}else return f[0]}function s(h){return"(?:"+h+")"}function i(h){return h===void 0?"undefined":h===null?"null":Object.prototype.toString.call(h).split(" ").pop().split("]").shift().toLowerCase()}function a(h){return h.toUpperCase()}function o(h){return h!=null?h instanceof Array?h:typeof h.length!="number"||h.split||h.setInterval||h.call?[h]:Array.prototype.slice.call(h):[]}function c(h,f){var g=h;if(f)for(var O in f)g[O]=f[O];return g}function l(h){var f="[A-Za-z]",g="[0-9]",O=n(g,"[A-Fa-f]"),I=s(s("%[EFef]"+O+"%"+O+O+"%"+O+O)+"|"+s("%[89A-Fa-f]"+O+"%"+O+O)+"|"+s("%"+O+O)),D="[\\:\\/\\?\\#\\[\\]\\@]",M="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",se=n(D,M),me=h?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",Ie=h?"[\\uE000-\\uF8FF]":"[]",te=n(f,g,"[\\-\\.\\_\\~]",me);s(f+n(f,g,"[\\+\\-\\.]")+"*"),s(s(I+"|"+n(te,M,"[\\:]"))+"*");var ue=s(s("25[0-5]")+"|"+s("2[0-4]"+g)+"|"+s("1"+g+g)+"|"+s("0?[1-9]"+g)+"|0?0?"+g),Ee=s(ue+"\\."+ue+"\\."+ue+"\\."+ue),H=s(O+"{1,4}"),ye=s(s(H+"\\:"+H)+"|"+Ee),ke=s(s(H+"\\:")+"{6}"+ye),$e=s("\\:\\:"+s(H+"\\:")+"{5}"+ye),Pt=s(s(H)+"?\\:\\:"+s(H+"\\:")+"{4}"+ye),ct=s(s(s(H+"\\:")+"{0,1}"+H)+"?\\:\\:"+s(H+"\\:")+"{3}"+ye),lt=s(s(s(H+"\\:")+"{0,2}"+H)+"?\\:\\:"+s(H+"\\:")+"{2}"+ye),ar=s(s(s(H+"\\:")+"{0,3}"+H)+"?\\:\\:"+H+"\\:"+ye),Ut=s(s(s(H+"\\:")+"{0,4}"+H)+"?\\:\\:"+ye),Ge=s(s(s(H+"\\:")+"{0,5}"+H)+"?\\:\\:"+H),ft=s(s(s(H+"\\:")+"{0,6}"+H)+"?\\:\\:"),Ft=s([ke,$e,Pt,ct,lt,ar,Ut,Ge,ft].join("|")),wt=s(s(te+"|"+I)+"+");s("[vV]"+O+"+\\."+n(te,M,"[\\:]")+"+"),s(s(I+"|"+n(te,M))+"*");var Kr=s(I+"|"+n(te,M,"[\\:\\@]"));return s(s(I+"|"+n(te,M,"[\\@]"))+"+"),s(s(Kr+"|"+n("[\\/\\?]",Ie))+"*"),{NOT_SCHEME:new RegExp(n("[^]",f,g,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(n("[^\\%\\:]",te,M),"g"),NOT_HOST:new RegExp(n("[^\\%\\[\\]\\:]",te,M),"g"),NOT_PATH:new RegExp(n("[^\\%\\/\\:\\@]",te,M),"g"),NOT_PATH_NOSCHEME:new RegExp(n("[^\\%\\/\\@]",te,M),"g"),NOT_QUERY:new RegExp(n("[^\\%]",te,M,"[\\:\\@\\/\\?]",Ie),"g"),NOT_FRAGMENT:new RegExp(n("[^\\%]",te,M,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(n("[^]",te,M),"g"),UNRESERVED:new RegExp(te,"g"),OTHER_CHARS:new RegExp(n("[^\\%]",te,se),"g"),PCT_ENCODED:new RegExp(I,"g"),IPV4ADDRESS:new RegExp("^("+Ee+")$"),IPV6ADDRESS:new RegExp("^\\[?("+Ft+")"+s(s("\\%25|\\%(?!"+O+"{2})")+"("+wt+")")+"?\\]?$")}}var p=l(!1),y=l(!0),m=function(){function h(f,g){var O=[],I=!0,D=!1,M=void 0;try{for(var se=f[Symbol.iterator](),me;!(I=(me=se.next()).done)&&(O.push(me.value),!(g&&O.length===g));I=!0);}catch(Ie){D=!0,M=Ie}finally{try{!I&&se.return&&se.return()}finally{if(D)throw M}}return O}return function(f,g){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return h(f,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),$=function(h){if(Array.isArray(h)){for(var f=0,g=Array(h.length);f<h.length;f++)g[f]=h[f];return g}else return Array.from(h)},P=2147483647,u=36,d=1,v=26,E=38,b=700,j=72,S=128,_="-",K=/^xn--/,Z=/[^\0-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,N={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=u-d,R=Math.floor,z=String.fromCharCode;function q(h){throw new RangeError(N[h])}function X(h,f){for(var g=[],O=h.length;O--;)g[O]=f(h[O]);return g}function le(h,f){var g=h.split("@"),O="";g.length>1&&(O=g[0]+"@",h=g[1]),h=h.replace(w,".");var I=h.split("."),D=X(I,f).join(".");return O+D}function pe(h){for(var f=[],g=0,O=h.length;g<O;){var I=h.charCodeAt(g++);if(I>=55296&&I<=56319&&g<O){var D=h.charCodeAt(g++);(D&64512)==56320?f.push(((I&1023)<<10)+(D&1023)+65536):(f.push(I),g--)}else f.push(I)}return f}var F=function(f){return String.fromCodePoint.apply(String,$(f))},ve=function(f){return f-48<10?f-22:f-65<26?f-65:f-97<26?f-97:u},Qe=function(f,g){return f+22+75*(f<26)-((g!=0)<<5)},be=function(f,g,O){var I=0;for(f=O?R(f/b):f>>1,f+=R(f/g);f>C*v>>1;I+=u)f=R(f/C);return R(I+(C+1)*f/(f+E))},Be=function(f){var g=[],O=f.length,I=0,D=S,M=j,se=f.lastIndexOf(_);se<0&&(se=0);for(var me=0;me<se;++me)f.charCodeAt(me)>=128&&q("not-basic"),g.push(f.charCodeAt(me));for(var Ie=se>0?se+1:0;Ie<O;){for(var te=I,ue=1,Ee=u;;Ee+=u){Ie>=O&&q("invalid-input");var H=ve(f.charCodeAt(Ie++));(H>=u||H>R((P-I)/ue))&&q("overflow"),I+=H*ue;var ye=Ee<=M?d:Ee>=M+v?v:Ee-M;if(H<ye)break;var ke=u-ye;ue>R(P/ke)&&q("overflow"),ue*=ke}var $e=g.length+1;M=be(I-te,$e,te==0),R(I/$e)>P-D&&q("overflow"),D+=R(I/$e),I%=$e,g.splice(I++,0,D)}return String.fromCodePoint.apply(String,g)},Ue=function(f){var g=[];f=pe(f);var O=f.length,I=S,D=0,M=j,se=!0,me=!1,Ie=void 0;try{for(var te=f[Symbol.iterator](),ue;!(se=(ue=te.next()).done);se=!0){var Ee=ue.value;Ee<128&&g.push(z(Ee))}}catch(zr){me=!0,Ie=zr}finally{try{!se&&te.return&&te.return()}finally{if(me)throw Ie}}var H=g.length,ye=H;for(H&&g.push(_);ye<O;){var ke=P,$e=!0,Pt=!1,ct=void 0;try{for(var lt=f[Symbol.iterator](),ar;!($e=(ar=lt.next()).done);$e=!0){var Ut=ar.value;Ut>=I&&Ut<ke&&(ke=Ut)}}catch(zr){Pt=!0,ct=zr}finally{try{!$e&&lt.return&&lt.return()}finally{if(Pt)throw ct}}var Ge=ye+1;ke-I>R((P-D)/Ge)&&q("overflow"),D+=(ke-I)*Ge,I=ke;var ft=!0,Ft=!1,wt=void 0;try{for(var Kr=f[Symbol.iterator](),io;!(ft=(io=Kr.next()).done);ft=!0){var ao=io.value;if(ao<I&&++D>P&&q("overflow"),ao==I){for(var _n=D,An=u;;An+=u){var xn=An<=M?d:An>=M+v?v:An-M;if(_n<xn)break;var oo=_n-xn,co=u-xn;g.push(z(Qe(xn+oo%co,0))),_n=R(oo/co)}g.push(z(Qe(_n,0))),M=be(D,Ge,ye==H),D=0,++ye}}}catch(zr){Ft=!0,wt=zr}finally{try{!ft&&Kr.return&&Kr.return()}finally{if(Ft)throw wt}}++D,++I}return g.join("")},ce=function(f){return le(f,function(g){return K.test(g)?Be(g.slice(4).toLowerCase()):g})},W=function(f){return le(f,function(g){return Z.test(g)?"xn--"+Ue(g):g})},ne={version:"2.1.0",ucs2:{decode:pe,encode:F},decode:Be,encode:Ue,toASCII:W,toUnicode:ce},fe={};function he(h){var f=h.charCodeAt(0),g=void 0;return f<16?g="%0"+f.toString(16).toUpperCase():f<128?g="%"+f.toString(16).toUpperCase():f<2048?g="%"+(f>>6|192).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase():g="%"+(f>>12|224).toString(16).toUpperCase()+"%"+(f>>6&63|128).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase(),g}function Fe(h){for(var f="",g=0,O=h.length;g<O;){var I=parseInt(h.substr(g+1,2),16);if(I<128)f+=String.fromCharCode(I),g+=3;else if(I>=194&&I<224){if(O-g>=6){var D=parseInt(h.substr(g+4,2),16);f+=String.fromCharCode((I&31)<<6|D&63)}else f+=h.substr(g,6);g+=6}else if(I>=224){if(O-g>=9){var M=parseInt(h.substr(g+4,2),16),se=parseInt(h.substr(g+7,2),16);f+=String.fromCharCode((I&15)<<12|(M&63)<<6|se&63)}else f+=h.substr(g,9);g+=9}else f+=h.substr(g,3),g+=3}return f}function xe(h,f){function g(O){var I=Fe(O);return I.match(f.UNRESERVED)?I:O}return h.scheme&&(h.scheme=String(h.scheme).replace(f.PCT_ENCODED,g).toLowerCase().replace(f.NOT_SCHEME,"")),h.userinfo!==void 0&&(h.userinfo=String(h.userinfo).replace(f.PCT_ENCODED,g).replace(f.NOT_USERINFO,he).replace(f.PCT_ENCODED,a)),h.host!==void 0&&(h.host=String(h.host).replace(f.PCT_ENCODED,g).toLowerCase().replace(f.NOT_HOST,he).replace(f.PCT_ENCODED,a)),h.path!==void 0&&(h.path=String(h.path).replace(f.PCT_ENCODED,g).replace(h.scheme?f.NOT_PATH:f.NOT_PATH_NOSCHEME,he).replace(f.PCT_ENCODED,a)),h.query!==void 0&&(h.query=String(h.query).replace(f.PCT_ENCODED,g).replace(f.NOT_QUERY,he).replace(f.PCT_ENCODED,a)),h.fragment!==void 0&&(h.fragment=String(h.fragment).replace(f.PCT_ENCODED,g).replace(f.NOT_FRAGMENT,he).replace(f.PCT_ENCODED,a)),h}function rr(h){return h.replace(/^0*(.*)/,"$1")||"0"}function nr(h,f){var g=h.match(f.IPV4ADDRESS)||[],O=m(g,2),I=O[1];return I?I.split(".").map(rr).join("."):h}function Ur(h,f){var g=h.match(f.IPV6ADDRESS)||[],O=m(g,3),I=O[1],D=O[2];if(I){for(var M=I.toLowerCase().split("::").reverse(),se=m(M,2),me=se[0],Ie=se[1],te=Ie?Ie.split(":").map(rr):[],ue=me.split(":").map(rr),Ee=f.IPV4ADDRESS.test(ue[ue.length-1]),H=Ee?7:8,ye=ue.length-H,ke=Array(H),$e=0;$e<H;++$e)ke[$e]=te[$e]||ue[ye+$e]||"";Ee&&(ke[H-1]=nr(ke[H-1],f));var Pt=ke.reduce(function(Ge,ft,Ft){if(!ft||ft==="0"){var wt=Ge[Ge.length-1];wt&&wt.index+wt.length===Ft?wt.length++:Ge.push({index:Ft,length:1})}return Ge},[]),ct=Pt.sort(function(Ge,ft){return ft.length-Ge.length})[0],lt=void 0;if(ct&&ct.length>1){var ar=ke.slice(0,ct.index),Ut=ke.slice(ct.index+ct.length);lt=ar.join(":")+"::"+Ut.join(":")}else lt=ke.join(":");return D&&(lt+="%"+D),lt}else return h}var kn=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,jn="".match(/(){0}/)[1]===void 0;function bt(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g={},O=f.iri!==!1?y:p;f.reference==="suffix"&&(h=(f.scheme?f.scheme+":":"")+"//"+h);var I=h.match(kn);if(I){jn?(g.scheme=I[1],g.userinfo=I[3],g.host=I[4],g.port=parseInt(I[5],10),g.path=I[6]||"",g.query=I[7],g.fragment=I[8],isNaN(g.port)&&(g.port=I[5])):(g.scheme=I[1]||void 0,g.userinfo=h.indexOf("@")!==-1?I[3]:void 0,g.host=h.indexOf("//")!==-1?I[4]:void 0,g.port=parseInt(I[5],10),g.path=I[6]||"",g.query=h.indexOf("?")!==-1?I[7]:void 0,g.fragment=h.indexOf("#")!==-1?I[8]:void 0,isNaN(g.port)&&(g.port=h.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?I[4]:void 0)),g.host&&(g.host=Ur(nr(g.host,O),O)),g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==g.reference&&(g.error=g.error||"URI is not a "+f.reference+" reference.");var D=fe[(f.scheme||g.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!D||!D.unicodeSupport)){if(g.host&&(f.domainHost||D&&D.domainHost))try{g.host=ne.toASCII(g.host.replace(O.PCT_ENCODED,Fe).toLowerCase())}catch(M){g.error=g.error||"Host's domain name can not be converted to ASCII via punycode: "+M}xe(g,p)}else xe(g,O);D&&D.parse&&D.parse(g,f)}else g.error=g.error||"URI can not be parsed.";return g}function Jp(h,f){var g=f.iri!==!1?y:p,O=[];return h.userinfo!==void 0&&(O.push(h.userinfo),O.push("@")),h.host!==void 0&&O.push(Ur(nr(String(h.host),g),g).replace(g.IPV6ADDRESS,function(I,D,M){return"["+D+(M?"%25"+M:"")+"]"})),(typeof h.port=="number"||typeof h.port=="string")&&(O.push(":"),O.push(String(h.port))),O.length?O.join(""):void 0}var Ga=/^\.\.?\//,Ha=/^\/\.(\/|$)/,Xa=/^\/\.\.(\/|$)/,Gp=/^\/?(?:.|\n)*?(?=\/|$)/;function sr(h){for(var f=[];h.length;)if(h.match(Ga))h=h.replace(Ga,"");else if(h.match(Ha))h=h.replace(Ha,"/");else if(h.match(Xa))h=h.replace(Xa,"/"),f.pop();else if(h==="."||h==="..")h="";else{var g=h.match(Gp);if(g){var O=g[0];h=h.slice(O.length),f.push(O)}else throw new Error("Unexpected dot segment condition")}return f.join("")}function at(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=f.iri?y:p,O=[],I=fe[(f.scheme||h.scheme||"").toLowerCase()];if(I&&I.serialize&&I.serialize(h,f),h.host&&!g.IPV6ADDRESS.test(h.host)){if(f.domainHost||I&&I.domainHost)try{h.host=f.iri?ne.toUnicode(h.host):ne.toASCII(h.host.replace(g.PCT_ENCODED,Fe).toLowerCase())}catch(se){h.error=h.error||"Host's domain name can not be converted to "+(f.iri?"Unicode":"ASCII")+" via punycode: "+se}}xe(h,g),f.reference!=="suffix"&&h.scheme&&(O.push(h.scheme),O.push(":"));var D=Jp(h,f);if(D!==void 0&&(f.reference!=="suffix"&&O.push("//"),O.push(D),h.path&&h.path.charAt(0)!=="/"&&O.push("/")),h.path!==void 0){var M=h.path;!f.absolutePath&&(!I||!I.absolutePath)&&(M=sr(M)),D===void 0&&(M=M.replace(/^\/\//,"/%2F")),O.push(M)}return h.query!==void 0&&(O.push("?"),O.push(h.query)),h.fragment!==void 0&&(O.push("#"),O.push(h.fragment)),O.join("")}function Wa(h,f){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},O=arguments[3],I={};return O||(h=bt(at(h,g),g),f=bt(at(f,g),g)),g=g||{},!g.tolerant&&f.scheme?(I.scheme=f.scheme,I.userinfo=f.userinfo,I.host=f.host,I.port=f.port,I.path=sr(f.path||""),I.query=f.query):(f.userinfo!==void 0||f.host!==void 0||f.port!==void 0?(I.userinfo=f.userinfo,I.host=f.host,I.port=f.port,I.path=sr(f.path||""),I.query=f.query):(f.path?(f.path.charAt(0)==="/"?I.path=sr(f.path):((h.userinfo!==void 0||h.host!==void 0||h.port!==void 0)&&!h.path?I.path="/"+f.path:h.path?I.path=h.path.slice(0,h.path.lastIndexOf("/")+1)+f.path:I.path=f.path,I.path=sr(I.path)),I.query=f.query):(I.path=h.path,f.query!==void 0?I.query=f.query:I.query=h.query),I.userinfo=h.userinfo,I.host=h.host,I.port=h.port),I.scheme=h.scheme),I.fragment=f.fragment,I}function Hp(h,f,g){var O=c({scheme:"null"},g);return at(Wa(bt(h,O),bt(f,O),O,!0),O)}function Xp(h,f){return typeof h=="string"?h=at(bt(h,f),f):i(h)==="object"&&(h=bt(at(h,f),f)),h}function Wp(h,f,g){return typeof h=="string"?h=at(bt(h,g),g):i(h)==="object"&&(h=at(h,g)),typeof f=="string"?f=at(bt(f,g),g):i(f)==="object"&&(f=at(f,g)),h===f}function Yp(h,f){return h&&h.toString().replace(!f||!f.iri?p.ESCAPE:y.ESCAPE,he)}function St(h,f){return h&&h.toString().replace(!f||!f.iri?p.PCT_ENCODED:y.PCT_ENCODED,Fe)}var Fr={scheme:"http",domainHost:!0,parse:function(f,g){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f},serialize:function(f,g){var O=String(f.scheme).toLowerCase()==="https";return(f.port===(O?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}},Ya={scheme:"https",domainHost:Fr.domainHost,parse:Fr.parse,serialize:Fr.serialize};function Qa(h){return typeof h.secure=="boolean"?h.secure:String(h.scheme).toLowerCase()==="wss"}var Vr={scheme:"ws",domainHost:!0,parse:function(f,g){var O=f;return O.secure=Qa(O),O.resourceName=(O.path||"/")+(O.query?"?"+O.query:""),O.path=void 0,O.query=void 0,O},serialize:function(f,g){if((f.port===(Qa(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){var O=f.resourceName.split("?"),I=m(O,2),D=I[0],M=I[1];f.path=D&&D!=="/"?D:void 0,f.query=M,f.resourceName=void 0}return f.fragment=void 0,f}},Za={scheme:"wss",domainHost:Vr.domainHost,parse:Vr.parse,serialize:Vr.serialize},Qp={},eo="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",ot="[0-9A-Fa-f]",Zp=s(s("%[EFef]"+ot+"%"+ot+ot+"%"+ot+ot)+"|"+s("%[89A-Fa-f]"+ot+"%"+ot+ot)+"|"+s("%"+ot+ot)),eu="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",tu="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",ru=n(tu,'[\\"\\\\]'),nu="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",su=new RegExp(eo,"g"),ir=new RegExp(Zp,"g"),iu=new RegExp(n("[^]",eu,"[\\.]",'[\\"]',ru),"g"),to=new RegExp(n("[^]",eo,nu),"g"),au=to;function Ms(h){var f=Fe(h);return f.match(su)?f:h}var ro={scheme:"mailto",parse:function(f,g){var O=f,I=O.to=O.path?O.path.split(","):[];if(O.path=void 0,O.query){for(var D=!1,M={},se=O.query.split("&"),me=0,Ie=se.length;me<Ie;++me){var te=se[me].split("=");switch(te[0]){case"to":for(var ue=te[1].split(","),Ee=0,H=ue.length;Ee<H;++Ee)I.push(ue[Ee]);break;case"subject":O.subject=St(te[1],g);break;case"body":O.body=St(te[1],g);break;default:D=!0,M[St(te[0],g)]=St(te[1],g);break}}D&&(O.headers=M)}O.query=void 0;for(var ye=0,ke=I.length;ye<ke;++ye){var $e=I[ye].split("@");if($e[0]=St($e[0]),g.unicodeSupport)$e[1]=St($e[1],g).toLowerCase();else try{$e[1]=ne.toASCII(St($e[1],g).toLowerCase())}catch(Pt){O.error=O.error||"Email address's domain name can not be converted to ASCII via punycode: "+Pt}I[ye]=$e.join("@")}return O},serialize:function(f,g){var O=f,I=o(f.to);if(I){for(var D=0,M=I.length;D<M;++D){var se=String(I[D]),me=se.lastIndexOf("@"),Ie=se.slice(0,me).replace(ir,Ms).replace(ir,a).replace(iu,he),te=se.slice(me+1);try{te=g.iri?ne.toUnicode(te):ne.toASCII(St(te,g).toLowerCase())}catch(ye){O.error=O.error||"Email address's domain name can not be converted to "+(g.iri?"Unicode":"ASCII")+" via punycode: "+ye}I[D]=Ie+"@"+te}O.path=I.join(",")}var ue=f.headers=f.headers||{};f.subject&&(ue.subject=f.subject),f.body&&(ue.body=f.body);var Ee=[];for(var H in ue)ue[H]!==Qp[H]&&Ee.push(H.replace(ir,Ms).replace(ir,a).replace(to,he)+"="+ue[H].replace(ir,Ms).replace(ir,a).replace(au,he));return Ee.length&&(O.query=Ee.join("&")),O}},ou=/^([^\:]+)\:(.*)/,no={scheme:"urn",parse:function(f,g){var O=f.path&&f.path.match(ou),I=f;if(O){var D=g.scheme||I.scheme||"urn",M=O[1].toLowerCase(),se=O[2],me=D+":"+(g.nid||M),Ie=fe[me];I.nid=M,I.nss=se,I.path=void 0,Ie&&(I=Ie.parse(I,g))}else I.error=I.error||"URN can not be parsed.";return I},serialize:function(f,g){var O=g.scheme||f.scheme||"urn",I=f.nid,D=O+":"+(g.nid||I),M=fe[D];M&&(f=M.serialize(f,g));var se=f,me=f.nss;return se.path=(I||g.nid)+":"+me,se}},cu=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,so={scheme:"urn:uuid",parse:function(f,g){var O=f;return O.uuid=O.nss,O.nss=void 0,!g.tolerant&&(!O.uuid||!O.uuid.match(cu))&&(O.error=O.error||"UUID is not valid."),O},serialize:function(f,g){var O=f;return O.nss=(f.uuid||"").toLowerCase(),O}};fe[Fr.scheme]=Fr,fe[Ya.scheme]=Ya,fe[Vr.scheme]=Vr,fe[Za.scheme]=Za,fe[ro.scheme]=ro,fe[no.scheme]=no,fe[so.scheme]=so,r.SCHEMES=fe,r.pctEncChar=he,r.pctDecChars=Fe,r.parse=bt,r.removeDotSegments=sr,r.serialize=at,r.resolveComponents=Wa,r.resolve=Hp,r.normalize=Xp,r.equal=Wp,r.escapeComponent=Yp,r.unescapeComponent=St,Object.defineProperty(r,"__esModule",{value:!0})})})(ki,ki.exports);const br=ki.exports,Od=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,Pd={null:t=>t===null,boolean:t=>typeof t=="boolean",object:Od,array:t=>Array.isArray(t),number:t=>typeof t=="number",integer:t=>Number.isInteger(t),string:t=>typeof t=="string"},kd=(t,e)=>Pd[e](t),jd=(t,e)=>{const r=br.resolve(t,e,{iri:!0});if(br.resolve(t,"",{iri:!0})&&br.parse(r).scheme==="file"&&br.parse(t).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${t}'`);return r},_d=t=>br.unescapeComponent(br.parse(t).fragment)||"",Gr=47,Ad=(t,e)=>{if(t===e)return"";let r=1;const n=t.length-1,s=e.length-r,i=n<s?n:s;let a=-1,o=0;for(;o<i;o++){const l=t.charCodeAt(o+1);if(l!==e.charCodeAt(r+o))break;l===Gr&&(a=o)}if(s>i){if(e.charCodeAt(r+o)===Gr)return e.slice(r+o+1);if(o===0)return e.slice(r+o)}n>i&&(t.charCodeAt(o+1)===Gr?a=o:i===0&&(a=0));let c="";for(o=a+2;o<=t.length;++o)(o===t.length||t.charCodeAt(o)===Gr)&&(c+=c.length===0?"..":"/..");return r+=a,c.length>0?`${c}${e.slice(r,e.length)}`:(e.charCodeAt(r)===Gr&&++r,e.slice(r,e.length))};var la={jsonTypeOf:kd,resolveUrl:jd,urlFragment:_d,pathRelative:Ad};const fa=gt,$n="",gn=t=>{if(t.length>0&&t[0]!=="/")throw Error("Invalid JSON Pointer");return t.split("/").slice(1).map(Dd)},xd=(t,e=void 0)=>{const r=gn(t),n=s=>r.reduce(([i,a],o)=>[Rt(i,o,a),Rr(o,a)],[s,""])[0];return e===void 0?n:n(e)},Nd=(t,e=void 0,r=void 0)=>{const n=gn(t),s=fa((i,a)=>hf(n,i,a,$n));return e===void 0?s:s(e,r)},hf=(t,e,r,n)=>{if(t.length===0)return r;if(t.length>1){const s=t.shift();return{...e,[s]:hf(t,Rt(e,s,n),r,Rr(s,n))}}else if(Array.isArray(e)){const s=[...e],i=pa(e,t[0]);return s[i]=r,s}else return typeof e=="object"&&e!==null?{...e,[t[0]]:r}:Rt(e,t[0],n)},Cd=(t,e=void 0,r=void 0)=>{const n=gn(t),s=fa((i,a)=>yf(n,i,a,$n));return e===void 0?s:s(e,r)},yf=(t,e,r,n)=>{if(t.length!==0)if(t.length===1&&!vf(e)){const s=pa(e,t[0]);e[s]=r}else{const s=t.shift();yf(t,Rt(e,s,n),r,Rr(s,n))}},Td=(t,e=void 0)=>{const r=gn(t),n=s=>$f(r,s,$n);return e===void 0?n:n(e)},$f=(t,e,r)=>{if(t.length!=0)if(t.length>1){const n=t.shift(),s=Rt(e,n,r);return{...e,[n]:$f(t,s,Rr(n,r))}}else{if(Array.isArray(e))return e.filter((n,s)=>s!=t[0]);if(typeof e=="object"&&e!==null){const{[t[0]]:n,...s}=e;return s}else return Rt(e,t[0],r)}},Rd=(t,e=void 0)=>{const r=gn(t),n=s=>gf(r,s,$n);return e===void 0?n:n(e)},gf=(t,e,r)=>{if(t.length!==0)if(t.length>1){const n=t.shift(),s=Rt(e,n,r);gf(t,s,Rr(n,r))}else Array.isArray(e)?e.splice(t[0],1):typeof e=="object"&&e!==null?delete e[t[0]]:Rt(e,t[0],r)},Rr=fa((t,e)=>e+"/"+qd(t)),qd=t=>t.toString().replace(/~/g,"~0").replace(/\//g,"~1"),Dd=t=>t.toString().replace(/~1/g,"/").replace(/~0/g,"~"),pa=(t,e)=>Array.isArray(t)&&e==="-"?t.length:e,Rt=(t,e,r="")=>{if(t===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${e}'`);if(t===null)throw TypeError(`Value at '${r}' is null and does not have property '${e}'`);if(vf(t))throw TypeError(`Value at '${r}' is a ${typeof t} and does not have property '${e}'`);{const n=pa(t,e);return t[n]}},vf=t=>t===null||typeof t!="object";var bf={nil:$n,append:Rr,get:xd,set:Nd,assign:Cd,unset:Td,remove:Rd};const Sf=Symbol("$__value"),ua=Symbol("$__href"),Ld=(t,e)=>Object.freeze({[ua]:t,[Sf]:e}),Md=t=>t&&t[ua]!==void 0,Bd=t=>t[ua],Ud=t=>t[Sf];var da={cons:Ld,isReference:Md,href:Bd,value:Ud};const Fd=bf,Zt=gt,{resolveUrl:Vd,jsonTypeOf:Kd}=la,Eo=da,ma=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),zd=(t,e="")=>Object.freeze({...ma,id:Vd(e,""),instance:t,value:t}),Jd=(t,e=ma)=>{if(!t.startsWith("#"))throw Error(`No JSON document found at '${t.split("#")[0]}'`);return Object.freeze({...e,pointer:t.substr(1)})},Gd=t=>`${t.id}#${encodeURI(t.pointer)}`,Ke=t=>Eo.isReference(t.value)?Eo.value(t.value):t.value,Hd=(t,e)=>t in Ke(e),Xd=Zt((t,e)=>Kd(Ke(t),e)),Mt=(t,e)=>Object.freeze({...e,pointer:Fd.append(t,e.pointer),value:Ke(e)[t]}),Wd=t=>Object.keys(Ke(t)).map(e=>[e,Mt(e,t)]),Yd=t=>Object.keys(Ke(t)),Qd=Zt((t,e)=>Ke(e).map((r,n,s,i)=>t(Mt(n,e),n,s,i))),Zd=Zt((t,e)=>Ke(e).forEach((r,n,s,i)=>t(Mt(n,e),n,s,i))),em=Zt((t,e)=>Ke(e).map((r,n,s,i)=>Mt(n,e)).filter((r,n,s,i)=>t(r,n,s,i))),tm=Zt((t,e,r)=>Ke(r).reduce((n,s,i)=>t(n,Mt(i,r),i),e)),rm=Zt((t,e)=>Ke(e).every((r,n,s,i)=>t(Mt(n,e),n,s,i))),nm=Zt((t,e)=>Ke(e).some((r,n,s,i)=>t(Mt(n,e),n,s,i))),sm=t=>Ke(t).length;var ha={nil:ma,cons:zd,get:Jd,uri:Gd,value:Ke,has:Hd,typeOf:Xd,length:sm,step:Mt,entries:Wd,keys:Yd,map:Qd,forEach:Zd,filter:em,reduce:tm,every:rm,some:nm},wf=async t=>Object.entries(await t);const im=gt;var ya=im(async(t,e)=>(await e).map(t));const am=gt;var $a=am(async(t,e,r)=>(await r).reduce(async(n,s)=>t(await n,s),e));const om=gt,cm=$a;var lm=om(async(t,e,r={})=>cm(async(n,s)=>await t(s)?n.concat([s]):n,[],e,r));const fm=gt,pm=ya;var um=fm(async(t,e)=>{const r=await pm(t,e);return(await Promise.all(r)).some(n=>n)});const dm=gt,mm=ya;var hm=dm(async(t,e)=>{const r=await mm(t,e);return(await Promise.all(r)).every(n=>n)});const ym=gt;var If=ym((t,e)=>t.reduce(async(r,n)=>n(await r),e)),$m=t=>Promise.all(t);const gm=If,vm=wf,bm=$a;var Sm=t=>gm([vm,bm(async(e,[r,n])=>(e[r]=await n,e),{})],t),Pe={entries:wf,map:ya,filter:lm,reduce:$a,some:um,every:hm,pipeline:If,all:$m,allValues:Sm},wm=fetch,ga={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var Oo=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Im=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,Ef=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Em=/\\([\u000b\u0020-\u00ff])/g,Om=/([\\"])/g,Of=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;ga.format=Pm;ga.parse=km;function Pm(t){if(!t||typeof t!="object")throw new TypeError("argument obj is required");var e=t.parameters,r=t.type;if(!r||!Of.test(r))throw new TypeError("invalid type");var n=r;if(e&&typeof e=="object")for(var s,i=Object.keys(e).sort(),a=0;a<i.length;a++){if(s=i[a],!Ef.test(s))throw new TypeError("invalid parameter name");n+="; "+s+"="+_m(e[s])}return n}function km(t){if(!t)throw new TypeError("argument string is required");var e=typeof t=="object"?jm(t):t;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var r=e.indexOf(";"),n=r!==-1?e.substr(0,r).trim():e.trim();if(!Of.test(n))throw new TypeError("invalid media type");var s=new Am(n.toLowerCase());if(r!==-1){var i,a,o;for(Oo.lastIndex=r;a=Oo.exec(e);){if(a.index!==r)throw new TypeError("invalid parameter format");r+=a[0].length,i=a[1].toLowerCase(),o=a[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace(Em,"$1")),s.parameters[i]=o}if(r!==e.length)throw new TypeError("invalid parameter format")}return s}function jm(t){var e;if(typeof t.getHeader=="function"?e=t.getHeader("content-type"):typeof t.headers=="object"&&(e=t.headers&&t.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function _m(t){var e=String(t);if(Ef.test(e))return e;if(e.length>0&&!Im.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(Om,"\\$1")+'"'}function Am(t){this.parameters=Object.create(null),this.type=t}const xm=ga,fn={},Nm=(t,e)=>{fn[t]=e},Cm=t=>{const e=xm.parse(t.headers.get("content-type"));if(!(e.type in fn))throw Error(`${t.url} is not a schema. Found a document with media type: ${e.type}`);return fn[e.type].parse(t,e.parameters)},Tm=t=>{for(const e in fn)if(fn[e].matcher(t))return e;return"application/octet-stream"};var Pf={addPlugin:Nm,parse:Cm,getContentType:Tm};const Rm=gt,Ir=Pe,mt=bf,{jsonTypeOf:va,resolveUrl:$t,urlFragment:ba,pathRelative:qm}=la,Dm=wm,Et=da,Lm=Pf,Hr="https://json-schema.org/draft/2019-09/vocab/core",Xr="https://json-schema.org/draft/2020-12/vocab/core",an={},Xe={},Mm=(t,e,r)=>{Xe[t]=t,an[t]||(an[t]={}),an[t][e]=r},Ne=(t,e)=>{var n;const r=Xe[t];return(n=an[r])==null?void 0:n[e]},Or={},Sa={},wa=(t,e="",r="")=>{var P,u;t=JSON.parse(JSON.stringify(t));const n=$t(e,""),s=$t(t.$schema||r,"");if(!s)throw Error("Couldn't determine schema dialect");if(delete t.$schema,!(s in Xe))if(((P=t==null?void 0:t.$vocabulary)==null?void 0:P[Hr])===!0&&s===Gs(t,n,Hr)[0])Xe[s]=Hr;else if(((u=t==null?void 0:t.$vocabulary)==null?void 0:u[Xr])===!0&&s===Gs(t,n,Xr)[0])Xe[s]=Xr;else{const d=Or[s];if(d)d.vocabulary[Hr]===!0?Xe[s]=Hr:d.vocabulary[Xr]===!0?Xe[s]=Xr:Xe[s]=Xe[d.dialectId];else throw Error(`Couldn't determine JSON Schema version for dialect: '${s}'`)}const[i,a]=Gs(t,n,Xe[s]);if(!i)throw Error("Couldn't determine an identifier for the schema");const o=Ne(s,"baseToken");delete t[o],n&&(Sa[n]=i);const c=Ne(s,"anchorToken");a&&o===c&&(t[c]=c!==o?encodeURI(a):`#${encodeURI(a)}`);const l={},p=Ne(s,"recursiveAnchorToken");t[p]===!0&&(l[""]=`${i}#`,t[c]="",delete t[p]);let y;const m=Ne(s,"vocabularyToken");va(t[m],"object")?(y=t[m],delete t[m]):y={[Xe[s]]:!0};const $={"":""};return Or[i]={id:i,dialectId:s,schema:ji(t,i,s,mt.nil,$,l),anchors:$,dynamicAnchors:l,vocabulary:y,validated:!1},i},Gs=(t,e,r)=>{var i;const n=(i=an[r])==null?void 0:i.baseToken,s=$t(e,t[n]||"");return[$t(s,""),ba(s)]},ji=(t,e,r,n,s,i)=>{if(va(t,"object")){const a=typeof t.$schema=="string"?$t(t.$schema,""):r,o=Ne(a,"embeddedToken"),c=Ne(a,"anchorToken");if(typeof t[o]=="string"&&(o!==c||t[o][0]!=="#")){const $=$t(e,t[o]),P=Ne(a,"baseToken");return t[P]=$,wa(t,$,r),Et.cons(t[o],t)}const l=Ne(r,"anchorToken"),p=Ne(r,"dynamicAnchorToken");typeof t[p]=="string"&&(i[t[p]]=`${e}#${encodeURI(n)}`,s[t[p]]=n,delete t[p]);const y=Ne(r,"embeddedToken");if(typeof t[l]=="string"){const $=l!==y?t[l]:t[l].slice(1);s[$]=n,delete t[l]}const m=Ne(r,"jrefToken");if(typeof t[m]=="string")return Et.cons(t[m],t);for(const $ in t)t[$]=ji(t[$],e,r,mt.append($,n),s,i);return t}else return Array.isArray(t)?t.map((a,o)=>ji(a,e,r,mt.append(o,n),s,i)):t},Bm=t=>t in Or||t in Sa,kf=t=>Or[Sa[t]]||Or[t],Um=t=>{Or[t].validated=!0},Fm=Object.freeze({id:"",dialectId:void 0,vocabulary:{},pointer:mt.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),Ia=async(t,e=Fm)=>{const r=$t(Af(e),t),n=$t(r,""),s=ba(r);if(!Bm(n)){const c=await Dm(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);const[l,p]=await Lm.parse(c),y=$t(l.$schema,"")||p;n!==y&&!(y in Xe)&&await Ia(y),wa(l,n)}const i=kf(n),a=s[0]!=="/"?_f(i,s):s,o=Object.freeze({...i,pointer:a,value:mt.get(a,i.schema)});return jf(o)},jf=t=>Et.isReference(t.value)?Ia(Et.href(t.value),t):t,_f=(t,e)=>{if(!(e in t.anchors))throw Error(`No such anchor '${encodeURI(t.id)}#${encodeURI(e)}'`);return t.anchors[e]},Af=t=>`${t.id}#${encodeURI(t.pointer)}`,Bt=t=>Et.isReference(t.value)?Et.value(t.value):t.value,Vm=(t,e)=>t in Bt(e),Km=(t,e)=>va(Bt(t),e),Ea=(t,e)=>{const r=kf(e.id),n=Object.freeze({...e,pointer:mt.append(t,e.pointer),value:Bt(e)[t],validated:r.validated});return jf(n)},zm=t=>Object.keys(Bt(t)),Jm=t=>Ir.pipeline([Bt,Object.keys,Ir.map(async e=>[e,await Ea(e,t)]),Ir.all],t),Gm=Rm((t,e)=>Ir.pipeline([Bt,Ir.map(async(r,n)=>t(await Ea(n,e),n)),Ir.all],e)),Hm=t=>Bt(t).length,Xm={parentId:"",parentDialect:"",includeEmbedded:!0},Wm=(t,e={})=>{const r={...Xm,...e},n=JSON.parse(JSON.stringify(t.schema,(l,p)=>{if(!Et.isReference(p))return p;const y=Et.value(p),m=typeof y.$schema=="string"?$t(y.$schema,""):t.dialectId,$=Ne(m,"embeddedToken");if(!(!r.includeEmbedded&&$ in y))return Et.value(p)})),s=Ne(t.dialectId,"dynamicAnchorToken");Object.entries(t.dynamicAnchors).forEach(([l,p])=>{const y=ba(p);mt.assign(y,n,{[s]:l,...mt.get(y,n)})});const i=Ne(t.dialectId,"anchorToken");Object.entries(t.anchors).filter(([l])=>l!=="").forEach(([l,p])=>{mt.assign(p,n,{[i]:l,...mt.get(p,n)})});const a=Ne(t.dialectId,"baseToken"),o=Ym(r.parentId,t.id),c=r.parentDialect===t.dialectId?"":t.dialectId;return{...o&&{[a]:o},...c&&{$schema:c},...n}},Ym=(t,e)=>{if(e.startsWith("file://")){const r=t.slice(7,t.lastIndexOf("/"));return t===""?"":qm(r,e.slice(7))}else return e};var Os={setConfig:Mm,getConfig:Ne,add:wa,get:Ia,markValidated:Um,uri:Af,value:Bt,getAnchorPointer:_f,typeOf:Km,has:Vm,step:Ea,keys:zm,entries:Jm,map:Gm,length:Hm,toSchema:Wm};class Qm extends Error{constructor(e){super("Invalid Schema"),this.name=this.constructor.name,this.output=e}}var xf=Qm;const Zm=Os,eh=t=>Zm.value(t),th=()=>!0;var Nf={compile:eh,interpret:th};const rh=gt,Po=as.exports,{resolveUrl:nh}=la,Cf=ha,xt=Os,sh=xf,Tf=Pf,ih=Nf,os="FLAG",Oa="BASIC",Pa="DETAILED",ka="VERBOSE";let Rf=Pa,qf=!0;Tf.addPlugin("application/schema+json",{parse:async(t,e)=>[await t.json(),e.schema||e.profile],matcher:t=>t.endsWith(".schema.json")});const ah=async(t,e=void 0,r=void 0)=>{const n=await ja(t),s=(i,a)=>_a(n,Cf.cons(i),a);return e===void 0?s:s(e,r)},ja=async t=>{const e={metaData:{}},r=await Lf(t,e);return{ast:e,schemaUri:r}},_a=rh(({ast:t,schemaUri:e},r,n=os)=>{if(![os,Oa,Pa,ka].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],i=Po.subscribe("result",oh(n,s));return Bf(e,r,t,{}),Po.unsubscribe(i),s[0]}),oh=(t,e)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c}=s,l={keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const i=r.pop();for(;r[r.length-1]!=="result.start";){const a=r.pop(),o=[a];t===Oa&&(o.push(...a.errors),delete a.errors),(t===ka||t!==os&&!a.valid)&&i.errors.unshift(...o)}r[r.length-1]=i,e[0]=i}}},ch=t=>{Rf=t},lh=t=>{qf=t},Aa={},vn=t=>Aa[t]||ih,Df=t=>t in Aa,fh=(t,e)=>{Aa[t]={collectEvaluatedItems:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&new Set,collectEvaluatedProperties:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&[],...e}},_i={},ph=(t,e)=>{_i[t]=e},Gn={},Lf=async(t,e)=>{if(t=await Mf(t),!Df(`${t.dialectId}#validate`)){const r=await xt.get(t.dialectId);(xt.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,i])=>{if(s in _i)Object.entries(_i[s]).forEach(([a,o])=>{fh(`${r.id}#${a}`,o)});else if(i)throw Error(`Missing required vocabulary: ${s}`)})}if(qf&&!t.validated){if(xt.markValidated(t.id),!(t.dialectId in Gn)){const s=await xt.get(t.dialectId),i=await ja(s);Gn[s.id]=_a(i)}const r=Cf.cons(t.schema,t.id),n=Gn[t.dialectId](r,Rf);if(!n.valid)throw new sh(n)}return t.id in e.metaData||(e.metaData[t.id]={id:t.id,dynamicAnchors:t.dynamicAnchors,anchors:t.anchors}),vn(`${t.dialectId}#validate`).compile(t,e)},Mf=async t=>xt.typeOf(t,"string")?Mf(await xt.get(xt.value(t),t)):t,Bf=(t,e,r,n)=>{const s=xa(t,r),i=nh(t,"");return vn(s).interpret(t,e,r,{...r.metaData[i].dynamicAnchors,...n})},uh=(t,e,r,n,s)=>{const i=xa(t,r);return vn(i).collectEvaluatedProperties(t,e,r,n,s)},dh=(t,e,r,n,s)=>{const i=xa(t,r);return vn(i).collectEvaluatedItems(t,e,r,n,s)},xa=(t,e)=>{if(!(t in e))throw Error(`No schema found at ${t}`);return e[t][0]},mh=(t,e="",r="")=>{const n=xt.add(t,e,r);delete Gn[n]};var Uf={validate:ah,compile:ja,interpret:_a,setMetaOutputFormat:ch,setShouldMetaValidate:lh,FLAG:os,BASIC:Oa,DETAILED:Pa,VERBOSE:ka,add:mh,getKeyword:vn,hasKeyword:Df,defineVocabulary:ph,compileSchema:Lf,interpretSchema:Bf,collectEvaluatedProperties:uh,collectEvaluatedItems:dh,addMediaTypePlugin:Tf.addPlugin};const Wr=Pe,lr=as.exports,Ps=Uf,ko=ha,fr=Os,hh=async(t,e)=>{const r=fr.uri(t);if(!(r in e)){e[r]=!1;const n=fr.value(t);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${fr.uri(t)}'`);e[r]=[`${t.dialectId}#validate`,fr.uri(t),typeof n=="boolean"?n:await Wr.pipeline([fr.entries,Wr.map(([s,i])=>[`${t.dialectId}#${s}`,i]),Wr.filter(([s])=>s!==`${t.dialectId}#validate`),Wr.map(async([s,i])=>{const a=await Ps.getKeyword(s).compile(i,e,t);return[s,fr.uri(i),a]}),Wr.all],t)]}return r},yh=(t,e,r,n)=>{const[s,i,a]=r[t];lr.publishSync("result.start");const o=typeof a=="boolean"?a:a.every(([c,l,p])=>{lr.publishSync("result.start");const y=Ps.getKeyword(c).interpret(p,e,r,n);return lr.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:ko.uri(e),valid:y,ast:p}),lr.publishSync("result.end"),y});return lr.publishSync("result",{keyword:s,absoluteKeywordLocation:i,instanceLocation:ko.uri(e),valid:o,ast:t}),lr.publishSync("result.end"),o},$h=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?[]:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedProperties")).reduce((a,[o,,c])=>{const l=a&&Ps.getKeyword(o).collectEvaluatedProperties(c,e,r,n);return l!==!1&&[...a,...l]},[])},gh=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?new Set:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedItems")).reduce((a,[o,,c])=>{const l=a!==!1&&Ps.getKeyword(o).collectEvaluatedItems(c,e,r,n);return l!==!1&&new Set([...a,...l])},new Set)};var vh={compile:hh,interpret:yh,collectEvaluatedProperties:$h,collectEvaluatedItems:gh};const bh=Nf,Sh=vh;var wh={metaData:bh,validate:Sh};const Ih=Uf,Eh=Os,Oh=ha,Ph=da,kh=wh,jh=xf;var k={Core:Ih,Schema:Eh,Instance:Oh,Reference:Ph,Keywords:kh,InvalidSchemaError:jh};const{Core:Ff,Schema:Yr,Instance:Hs}=k,_h=async(t,e,r)=>{const n=await Yr.step("items",r),s=Yr.typeOf(n,"array")?Yr.length(n):Number.MAX_SAFE_INTEGER;return Yr.typeOf(t,"boolean")?[s,Yr.value(t)]:[s,await Ff.compileSchema(t,e)]},Ah=([t,e],r,n,s)=>Hs.typeOf(r,"array")?typeof e=="string"?Hs.every((i,a)=>a<t||Ff.interpretSchema(e,i,n,s),r):Hs.every((i,a)=>a<t?!0:e,r):!0;var xh={compile:_h,interpret:Ah};const{Core:Vf,Schema:Xs,Instance:Ai}=k,Nh=async(t,e,r)=>{const n=await Xs.step("items",r);return[Xs.typeOf(n,"array")?Xs.length(n):Number.MAX_SAFE_INTEGER,await Vf.compileSchema(t,e)]},Kf=([t,e],r,n,s)=>Ai.typeOf(r,"array")?Ai.every((i,a)=>a<t||Vf.interpretSchema(e,i,n,s),r):!0,Ch=(t,e,r,n)=>Kf(t,e,r,n)&&new Set(Ai.map((s,i)=>i,e));var Th={compile:Nh,interpret:Kf,collectEvaluatedItems:Ch};const{Core:zf,Schema:kt,Instance:jo}=k,Rh=async(t,e,r)=>{const n=await kt.step("properties",r),s=kt.typeOf(n,"object")?kt.keys(n):[],i=await kt.step("patternProperties",r),a=kt.typeOf(i,"object")?kt.keys(i).map(o=>new RegExp(o)):[];return kt.typeOf(t,"boolean")?[s,a,kt.value(t)]:[s,a,await zf.compileSchema(t,e)]},qh=([t,e,r],n,s,i)=>{if(!jo.typeOf(n,"object"))return!0;const a=jo.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>zf.interpretSchema(r,o,s,i)):a.length===0||r};var Dh={compile:Rh,interpret:qh};const{Core:Jf,Schema:pr,Instance:_o}=k,Lh=async(t,e,r)=>{const n=await pr.step("properties",r),s=pr.typeOf(n,"object")?pr.keys(n):[],i=await pr.step("patternProperties",r),a=pr.typeOf(i,"object")?pr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await Jf.compileSchema(t,e)]},Gf=([t,e,r],n,s,i)=>_o.typeOf(n,"object")?_o.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>Jf.interpretSchema(r,a,s,i)):!0,Mh=(t,e,r,n)=>Gf(t,e,r,n)&&[new RegExp("")];var Bh={compile:Lh,interpret:Gf,collectEvaluatedProperties:Mh};const{Core:ks,Schema:Uh}=k,Ao=Pe,Fh=(t,e)=>Ao.pipeline([Uh.map(async r=>ks.compileSchema(await r,e)),Ao.all],t),Vh=(t,e,r,n)=>t.every(s=>ks.interpretSchema(s,e,r,n)),Kh=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&ks.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),zh=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&ks.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var Jh={compile:Fh,interpret:Vh,collectEvaluatedProperties:Kh,collectEvaluatedItems:zh};const{Core:js,Schema:Gh}=k,xo=Pe,Hh=(t,e)=>xo.pipeline([Gh.map(async r=>js.compileSchema(await r,e)),xo.all],t),Xh=(t,e,r,n)=>t.filter(i=>js.interpretSchema(i,e,r,n)).length>0,Wh=(t,e,r,n)=>t.reduce((s,i)=>{const a=js.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),Yh=(t,e,r,n)=>t.reduce((s,i)=>{const a=js.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var Qh={compile:Hh,interpret:Xh,collectEvaluatedProperties:Wh,collectEvaluatedItems:Yh},Zh=Object.keys,No=JSON.stringify;function rn(t,e){var r,n,s,i,a,o,c;if(c=typeof t,c==="string")return No(t);if(t===!0)return"true";if(t===!1)return"false";if(t===null)return"null";if(t instanceof Array){for(s="[",n=t.length-1,r=0;r<n;r++)s+=rn(t[r],!1)+",";return n>-1&&(s+=rn(t[r],!1)),s+"]"}if(t instanceof Object){if(typeof t.toJSON=="function")return rn(t.toJSON(),e);for(i=Zh(t).sort(),n=i.length,s="",r=0;r<n;)a=i[r],o=rn(t[a],!0),o!==void 0&&(r&&s!==""&&(s+=","),s+=No(a)+":"+o),r++;return"{"+s+"}"}switch(c){case"function":case"undefined":return e?void 0:null;default:return isFinite(t)?t:null}}var qr=function(t){return""+rn(t,!1)};const{Schema:ey,Instance:ty}=k,Hf=qr,ry=t=>Hf(ey.value(t)),ny=(t,e)=>Hf(ty.value(e))===t;var sy={compile:ry,interpret:ny};const{Core:Xf,Instance:Co}=k,iy=(t,e)=>Xf.compileSchema(t,e),ay=(t,e,r,n)=>!Co.typeOf(e,"array")||Co.some(s=>Xf.interpretSchema(t,s,r,n),e);var oy={compile:iy,interpret:ay};const{Core:Na,Schema:ur,Instance:xi}=k,cy=async(t,e,r)=>{const n=await Na.compileSchema(t,e),s=await ur.step("minContains",r),i=ur.typeOf(s,"number")?ur.value(s):1,a=await ur.step("maxContains",r),o=ur.typeOf(a,"number")?ur.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Wf=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!xi.typeOf(n,"array"))return!0;const a=xi.reduce((o,c)=>Na.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},ly=(t,e,r,n)=>Wf(t,e,r,n)&&xi.reduce((s,i,a)=>Na.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var fy={compile:cy,interpret:Wf,collectEvaluatedItems:ly};const{Core:py,Schema:uy}=k,Ws=Pe,dy=async(t,e)=>{await Ws.pipeline([uy.entries,Ws.map(([,r])=>py.compileSchema(r,e)),Ws.all],t)},my=()=>!0;var hy={compile:dy,interpret:my};const{Core:Yf,Schema:Ys,Instance:To}=k,Qs=Pe,yy=(t,e)=>Qs.pipeline([Ys.entries,Qs.map(async([r,n])=>[r,Ys.typeOf(n,"array")?Ys.value(n):await Yf.compileSchema(n,e)]),Qs.all],t),$y=(t,e,r,n)=>{const s=To.value(e);return!To.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):Yf.interpretSchema(a,e,r,n):!0)};var gy={compile:yy,interpret:$y};const{Schema:Ro,Instance:qo}=k,Zs=Pe,vy=t=>Zs.pipeline([Ro.entries,Zs.map(([e,r])=>[e,Ro.value(r)]),Zs.all],t),by=(t,e)=>{const r=qo.value(e);return!qo.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var Sy={compile:vy,interpret:by};const{Core:Ca,Schema:wy,Instance:Ni}=k,ei=Pe,Iy=(t,e)=>ei.pipeline([wy.entries,ei.map(async([r,n])=>[r,await Ca.compileSchema(n,e)]),ei.all],t),Ey=(t,e,r,n)=>{const s=Ni.value(e);return!Ni.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||Ca.interpretSchema(a,e,r,n))},Oy=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!Ni.has(i,e))return s;const o=Ca.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var Py={compile:Iy,interpret:Ey,collectEvaluatedProperties:Oy};const{Schema:ky,Instance:jy}=k,Qf=qr,_y=t=>ky.value(t).map(Qf),Ay=(t,e)=>t.some(r=>Qf(jy.value(e))===r);var xy={compile:_y,interpret:Ay};const{Schema:Ny,Instance:Do}=k,Cy=async t=>Ny.value(t),Ty=(t,e)=>!Do.typeOf(e,"number")||Do.value(e)<t;var Ry={compile:Cy,interpret:Ty};const{Schema:qy,Instance:Lo}=k,Dy=async t=>qy.value(t),Ly=(t,e)=>!Lo.typeOf(e,"number")||Lo.value(e)>t;var My={compile:Dy,interpret:Ly};const{Core:_s}=k,By=(t,e)=>_s.compileSchema(t,e),Uy=(t,e,r,n)=>(_s.interpretSchema(t,e,r,n),!0),Fy=(t,e,r,n)=>_s.collectEvaluatedProperties(t,e,r,n)||[],Vy=(t,e,r,n)=>_s.collectEvaluatedItems(t,e,r,n)||new Set;var Ky={compile:By,interpret:Uy,collectEvaluatedProperties:Fy,collectEvaluatedItems:Vy};const{Core:Pr,Schema:Mo}=k,zy=async(t,e,r)=>{if(Mo.has("if",r)){const n=await Mo.step("if",r);return[await Pr.compileSchema(n,e),await Pr.compileSchema(t,e)]}else return[]},Jy=([t,e],r,n,s)=>t===void 0||!Ta(t,r,n,s)||Pr.interpretSchema(e,r,n,s),Ta=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Pr.getKeyword(i).interpret(a,e,r,n))},Gy=([t,e],r,n,s)=>t===void 0||!Ta(t,r,n,s)?[]:Pr.collectEvaluatedProperties(e,r,n,s),Hy=([t,e],r,n,s)=>t===void 0||!Ta(t,r,n,s)?new Set:Pr.collectEvaluatedItems(e,r,n,s);var Xy={compile:zy,interpret:Jy,collectEvaluatedProperties:Gy,collectEvaluatedItems:Hy};const{Core:kr,Schema:Bo}=k,Wy=async(t,e,r)=>{if(Bo.has("if",r)){const n=await Bo.step("if",r);return[await kr.compileSchema(n,e),await kr.compileSchema(t,e)]}else return[]},Yy=([t,e],r,n,s)=>t===void 0||Ra(t,r,n,s)||kr.interpretSchema(e,r,n,s),Ra=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>kr.getKeyword(i).interpret(a,e,r,n))},Qy=([t,e],r,n,s)=>t===void 0||Ra(t,r,n,s)?[]:kr.collectEvaluatedProperties(e,r,n,s),Zy=([t,e],r,n,s)=>t===void 0||Ra(t,r,n,s)?new Set:kr.collectEvaluatedItems(e,r,n,s);var e$={compile:Wy,interpret:Yy,collectEvaluatedProperties:Qy,collectEvaluatedItems:Zy};const{Core:cs,Schema:Uo,Instance:Hn}=k,t$=async(t,e)=>{if(Uo.typeOf(t,"array")){const r=await Uo.map(n=>cs.compileSchema(n,e),t);return Promise.all(r)}else return cs.compileSchema(t,e)},Zf=(t,e,r,n)=>Hn.typeOf(e,"array")?typeof t=="string"?Hn.every(s=>cs.interpretSchema(t,s,r,n),e):Hn.every((s,i)=>!(i in t)||cs.interpretSchema(t[i],s,r,n),e):!0,r$=(t,e,r,n)=>Zf(t,e,r,n)&&(typeof t=="string"?new Set(Hn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var n$={compile:t$,interpret:Zf,collectEvaluatedItems:r$};const{Core:ep,Schema:ti,Instance:Ci}=k,s$=async(t,e,r)=>{const n=await ti.step("prefixItems",r);return[ti.typeOf(n,"array")?ti.length(n):0,await ep.compileSchema(t,e)]},tp=([t,e],r,n,s)=>Ci.typeOf(r,"array")?Ci.every((i,a)=>a<t||ep.interpretSchema(e,i,n,s),r):!0,i$=(t,e,r,n)=>tp(t,e,r,n)&&new Set(Ci.map((s,i)=>i,e));var a$={compile:s$,interpret:tp,collectEvaluatedItems:i$};const{Schema:o$,Instance:Fo}=k,c$=t=>o$.value(t),l$=(t,e)=>!Fo.typeOf(e,"array")||Fo.length(e)<=t;var f$={compile:c$,interpret:l$};const{Schema:p$,Instance:Vo}=k,u$=t=>p$.value(t),d$=(t,e)=>!Vo.typeOf(e,"string")||Vo.length(e)<=t;var m$={compile:u$,interpret:d$};const{Schema:h$,Instance:Ko}=k,y$=t=>h$.value(t),$$=(t,e)=>!Ko.typeOf(e,"string")||[...Ko.value(e)].length<=t;var g$={compile:y$,interpret:$$};const{Schema:v$,Instance:zo}=k,b$=t=>v$.value(t),S$=(t,e)=>!zo.typeOf(e,"object")||zo.keys(e).length<=t;var w$={compile:b$,interpret:S$};const{Schema:ri,Instance:Jo}=k,I$=async(t,e,r)=>{const n=await ri.step("exclusiveMaximum",r),s=ri.value(n);return[ri.value(t),s]},E$=([t,e],r)=>{if(!Jo.typeOf(r,"number"))return!0;const n=Jo.value(r);return e?n<t:n<=t};var O$={compile:I$,interpret:E$};const{Schema:P$,Instance:Go}=k,k$=async t=>P$.value(t),j$=(t,e)=>!Go.typeOf(e,"number")||Go.value(e)<=t;var _$={compile:k$,interpret:j$};const{Schema:A$,Instance:Ho}=k,x$=t=>A$.value(t),N$=(t,e)=>!Ho.typeOf(e,"array")||Ho.length(e)>=t;var C$={compile:x$,interpret:N$};const{Schema:T$,Instance:Xo}=k,R$=t=>T$.value(t),q$=(t,e)=>!Xo.typeOf(e,"string")||Xo.length(e)>=t;var D$={compile:R$,interpret:q$};const{Schema:L$,Instance:Wo}=k,M$=t=>L$.value(t),B$=(t,e)=>!Wo.typeOf(e,"string")||[...Wo.value(e)].length>=t;var U$={compile:M$,interpret:B$};const{Schema:F$,Instance:Yo}=k,V$=t=>F$.value(t),K$=(t,e)=>!Yo.typeOf(e,"object")||Yo.keys(e).length>=t;var z$={compile:V$,interpret:K$};const{Schema:ni,Instance:Qo}=k,J$=async(t,e,r)=>{const n=await ni.step("exclusiveMinimum",r),s=ni.value(n);return[ni.value(t),s]},G$=([t,e],r)=>{if(!Qo.typeOf(r,"number"))return!0;const n=Qo.value(r);return e?n>t:n>=t};var H$={compile:J$,interpret:G$};const{Schema:X$,Instance:Zo}=k,W$=async t=>X$.value(t),Y$=(t,e)=>!Zo.typeOf(e,"number")||Zo.value(e)>=t;var Q$={compile:W$,interpret:Y$};const{Schema:Z$,Instance:ec}=k,eg=t=>Z$.value(t),tg=(t,e)=>{if(!ec.typeOf(e,"number"))return!0;const r=ec.value(e)%t;return tc(0,r)||tc(t,r)},tc=(t,e)=>Math.abs(t-e)<11920929e-14;var rg={compile:eg,interpret:tg};const{Core:rp}=k,ng=rp.compileSchema,sg=(t,e,r,n)=>!rp.interpretSchema(t,e,r,n);var ig={compile:ng,interpret:sg};const{Core:As,Schema:ag}=k,og=async(t,e)=>{const r=await ag.map(n=>As.compileSchema(n,e),t);return Promise.all(r)},cg=(t,e,r,n)=>{let s=0;for(const i of t)if(As.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},lg=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=As.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},fg=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=As.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var pg={compile:og,interpret:cg,collectEvaluatedProperties:lg,collectEvaluatedItems:fg};const{Schema:ug,Instance:rc}=k,dg=t=>new RegExp(ug.value(t),"u"),mg=(t,e)=>!rc.typeOf(e,"string")||t.test(rc.value(e));var hg={compile:dg,interpret:mg};const{Core:np,Schema:yg,Instance:nc}=k,si=Pe,$g=(t,e)=>si.pipeline([yg.entries,si.map(async([r,n])=>[new RegExp(r,"u"),await np.compileSchema(n,e)]),si.all],t),sp=(t,e,r,n)=>!nc.typeOf(e,"object")||t.every(([s,i])=>nc.entries(e).filter(([a])=>s.test(a)).every(([,a])=>np.interpretSchema(i,a,r,n))),gg=(t,e,r,n)=>sp(t,e,r,n)&&t.map(([s])=>s);var vg={compile:$g,interpret:sp,collectEvaluatedProperties:gg};const bg=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,Sg=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),wg=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var ip={isObject:bg,escapeRegExp:Sg,splitUrl:wg};const{Core:ap,Schema:Ig,Instance:sc}=k,ic=Pe,{escapeRegExp:Eg}=ip,Og=(t,e)=>ic.pipeline([Ig.entries,ic.reduce(async(r,[n,s])=>(r[n]=await ap.compileSchema(s,e),r),Object.create(null))],t),op=(t,e,r,n)=>!sc.typeOf(e,"object")||sc.entries(e).filter(([s])=>s in t).every(([s,i])=>ap.interpretSchema(t[s],i,r,n)),Pg=(t,e,r,n)=>op(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${Eg(s)}$`));var kg={compile:Og,interpret:op,collectEvaluatedProperties:Pg};const{Core:cp,Instance:ii}=k,jg=(t,e)=>cp.compileSchema(t,e),_g=(t,e,r,n)=>!ii.typeOf(e,"object")||ii.keys(e).every(s=>cp.interpretSchema(t,ii.cons(s),r,n));var Ag={compile:jg,interpret:_g};const{Core:pn,Schema:Xn}=k,{splitUrl:xg}=ip,Ng=async(t,e)=>{const[,r]=xg(Xn.value(t)),n=await Xn.get(Xn.value(t),t);return await pn.compileSchema(n,e),[n.id,r]},Cg=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return pn.interpretSchema(s[e],r,n,s);{const i=Xn.getAnchorPointer(n.metaData[t],e);return pn.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},Tg=pn.collectEvaluatedProperties,Rg=pn.collectEvaluatedItems;var qg={compile:Ng,interpret:Cg,collectEvaluatedProperties:Tg,collectEvaluatedItems:Rg};const{Core:xs,Schema:ac}=k,Dg=async(t,e)=>{const r=await ac.get(ac.value(t),t);return xs.compileSchema(r,e)},Lg=xs.interpretSchema,Mg=xs.collectEvaluatedProperties,Bg=xs.collectEvaluatedItems;var Ug={compile:Dg,interpret:Lg,collectEvaluatedProperties:Mg,collectEvaluatedItems:Bg};const{Schema:Fg,Instance:oc}=k,Vg=t=>Fg.value(t),Kg=(t,e)=>!oc.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(oc.value(e),r));var zg={compile:Vg,interpret:Kg};const{Core:lp,Schema:Jg,Instance:cc}=k,lc=Pe,Gg=(t,e)=>lc.pipeline([Jg.map(r=>lp.compileSchema(r,e)),lc.all],t),fp=(t,e,r,n)=>cc.typeOf(e,"array")?cc.every((s,i)=>!(i in t)||lp.interpretSchema(t[i],s,r,n),e):!0,Hg=(t,e,r,n)=>fp(t,e,r,n)&&new Set(t.map((s,i)=>i));var Xg={compile:Gg,interpret:fp,collectEvaluatedItems:Hg};const{Schema:Wg,Instance:fc}=k,Yg=t=>Wg.value(t),Qg=(t,e)=>typeof t=="string"?fc.typeOf(e,t):t.some(fc.typeOf(e));var Zg={compile:Yg,interpret:Qg};const{Core:Ti,Schema:ev,Instance:Wn}=k,tv=async(t,e,r)=>[ev.uri(r),await Ti.compileSchema(t,e)],pp=([t,e],r,n,s)=>{if(!Wn.typeOf(r,"array"))return!0;const i=Ti.collectEvaluatedItems(t,r,n,s,!0);return i===!1||Wn.every((a,o)=>i.has(o)||Ti.interpretSchema(e,Wn.step(o,r),n,s),r)},rv=(t,e,r,n)=>pp(t,e,r,n)&&new Set(Wn.map((s,i)=>i,e));var nv={compile:tv,interpret:pp,collectEvaluatedItems:rv};const{Core:Ri,Schema:sv,Instance:pc}=k,iv=async(t,e,r)=>[sv.uri(r),await Ri.compileSchema(t,e)],up=([t,e],r,n,s)=>{if(!pc.typeOf(r,"object"))return!0;const i=Ri.collectEvaluatedProperties(t,r,n,s,!0);return!i||pc.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>Ri.interpretSchema(e,a,n,s))},av=(t,e,r,n)=>up(t,e,r,n)&&[new RegExp("")];var ov={compile:iv,interpret:up,collectEvaluatedProperties:av};const{Schema:cv,Instance:ai}=k,lv=qr,fv=t=>cv.value(t),pv=(t,e)=>{if(!ai.typeOf(e,"array")||t===!1)return!0;const r=ai.map(n=>lv(ai.value(n)),e);return new Set(r).size===r.length};var uv={compile:fv,interpret:pv};const{Keywords:uc}=k;var Dr={additionalItems:xh,additionalItems6:Th,additionalProperties:Dh,additionalProperties6:Bh,allOf:Jh,anyOf:Qh,const:sy,contains:oy,containsMinContainsMaxContains:fy,definitions:hy,dependencies:gy,dependentRequired:Sy,dependentSchemas:Py,enum:xy,exclusiveMaximum:Ry,exclusiveMinimum:My,if:Ky,then:Xy,else:e$,items:n$,items202012:a$,maxItems:f$,maxLength:m$,maxLength6:g$,maxProperties:w$,maximumExclusiveMaximum:O$,maximum:_$,metaData:uc.metaData,minItems:C$,minLength:D$,minLength6:U$,minProperties:z$,minimumExclusiveMinimum:H$,minimum:Q$,multipleOf:rg,not:ig,oneOf:pg,pattern:hg,patternProperties:vg,properties:kg,propertyNames:Ag,dynamicRef:qg,ref:Ug,required:zg,tupleItems:Xg,type:Zg,unevaluatedItems:nv,unevaluatedProperties:ov,uniqueItems:uv,validate:uc.validate},dv=`{
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
}`;const{Core:mv,Schema:bn}=k,oe=Dr,hv=dv,Sn="http://json-schema.org/draft-04/schema";bn.setConfig(Sn,"baseToken","id");bn.setConfig(Sn,"embeddedToken","id");bn.setConfig(Sn,"anchorToken","id");bn.setConfig(Sn,"jrefToken","$ref");bn.add(JSON.parse(hv));mv.defineVocabulary(Sn,{validate:oe.validate,additionalItems:oe.additionalItems,additionalProperties:oe.additionalProperties,allOf:oe.allOf,anyOf:oe.anyOf,default:oe.metaData,definitions:oe.definitions,dependencies:oe.dependencies,description:oe.metaData,enum:oe.enum,format:oe.metaData,items:oe.items,maxItems:oe.maxItems,maxLength:oe.maxLength,maxProperties:oe.maxProperties,maximum:oe.maximumExclusiveMaximum,minItems:oe.minItems,minLength:oe.minLength,minProperties:oe.minProperties,minimum:oe.minimumExclusiveMinimum,multipleOf:oe.multipleOf,not:oe.not,oneOf:oe.oneOf,pattern:oe.pattern,patternProperties:oe.patternProperties,properties:oe.properties,required:oe.required,title:oe.metaData,type:oe.type,uniqueItems:oe.uniqueItems});var yv=`{
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
}`;const{Core:$v,Schema:wn}=k,re=Dr,gv=yv,In="http://json-schema.org/draft-06/schema";wn.setConfig(In,"baseToken","$id");wn.setConfig(In,"embeddedToken","$id");wn.setConfig(In,"anchorToken","$id");wn.setConfig(In,"jrefToken","$ref");wn.add(JSON.parse(gv));$v.defineVocabulary(In,{validate:re.validate,additionalItems:re.additionalItems6,additionalProperties:re.additionalProperties6,allOf:re.allOf,anyOf:re.anyOf,const:re.const,contains:re.contains,default:re.metaData,definitions:re.definitions,dependencies:re.dependencies,description:re.metaData,enum:re.enum,examples:re.metaData,exclusiveMaximum:re.exclusiveMaximum,exclusiveMinimum:re.exclusiveMinimum,format:re.metaData,items:re.items,maxItems:re.maxItems,maxLength:re.maxLength6,maxProperties:re.maxProperties,maximum:re.maximum,minItems:re.minItems,minLength:re.minLength6,minProperties:re.minProperties,minimum:re.minimum,multipleOf:re.multipleOf,not:re.not,oneOf:re.oneOf,pattern:re.pattern,patternProperties:re.patternProperties,properties:re.properties,propertyNames:re.propertyNames,required:re.required,title:re.metaData,type:re.type,uniqueItems:re.uniqueItems});var vv=`{
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
}`;const{Core:bv,Schema:En}=k,ee=Dr,Sv=vv,On="http://json-schema.org/draft-07/schema";En.setConfig(On,"baseToken","$id");En.setConfig(On,"embeddedToken","$id");En.setConfig(On,"anchorToken","$id");En.setConfig(On,"jrefToken","$ref");En.add(JSON.parse(Sv));bv.defineVocabulary(On,{validate:ee.validate,additionalItems:ee.additionalItems6,additionalProperties:ee.additionalProperties6,allOf:ee.allOf,anyOf:ee.anyOf,const:ee.const,contains:ee.contains,default:ee.metaData,definitions:ee.definitions,dependencies:ee.dependencies,description:ee.metaData,enum:ee.enum,exclusiveMaximum:ee.exclusiveMaximum,exclusiveMinimum:ee.exclusiveMinimum,format:ee.metaData,if:ee.if,then:ee.then,else:ee.else,items:ee.items,maxItems:ee.maxItems,maxLength:ee.maxLength6,maxProperties:ee.maxProperties,maximum:ee.maximum,minItems:ee.minItems,minLength:ee.minLength6,minProperties:ee.minProperties,minimum:ee.minimum,multipleOf:ee.multipleOf,not:ee.not,oneOf:ee.oneOf,pattern:ee.pattern,patternProperties:ee.patternProperties,properties:ee.properties,propertyNames:ee.propertyNames,readOnly:ee.metaData,required:ee.required,title:ee.metaData,type:ee.type,uniqueItems:ee.uniqueItems,writeOnly:ee.metaData});var wv=`{
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
}`,Iv=`{
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
}`,Ev=`{
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
}`,Ov=`{
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
}`,Pv=`{
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
}`,kv=`{
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
}`,jv=`{
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
}`;const{Core:Pn,Schema:ze}=k,V=Dr,_v=wv,Av=Iv,xv=Ev,Nv=Ov,Cv=Pv,Tv=kv,Rv=jv,Lr="https://json-schema.org/draft/2019-09/vocab/core";ze.setConfig(Lr,"baseToken","$id");ze.setConfig(Lr,"embeddedToken","$id");ze.setConfig(Lr,"anchorToken","$anchor");ze.setConfig(Lr,"recursiveAnchorToken","$recursiveAnchor");ze.setConfig(Lr,"vocabularyToken","$vocabulary");ze.setConfig(Lr,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);ze.add(JSON.parse(_v));ze.add(JSON.parse(Av));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:V.validate,$defs:V.definitions,$recursiveRef:V.dynamicRef,$ref:V.ref});ze.add(JSON.parse(xv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:V.additionalItems6,additionalProperties:V.additionalProperties6,allOf:V.allOf,anyOf:V.anyOf,contains:V.containsMinContainsMaxContains,dependentSchemas:V.dependentSchemas,if:V.if,then:V.then,else:V.else,items:V.items,not:V.not,oneOf:V.oneOf,patternProperties:V.patternProperties,properties:V.properties,propertyNames:V.propertyNames,unevaluatedItems:V.unevaluatedItems,unevaluatedProperties:V.unevaluatedProperties});ze.add(JSON.parse(Nv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:V.const,dependentRequired:V.dependentRequired,enum:V.enum,exclusiveMaximum:V.exclusiveMaximum,exclusiveMinimum:V.exclusiveMinimum,maxItems:V.maxItems,maxLength:V.maxLength6,maxProperties:V.maxProperties,maximum:V.maximum,minItems:V.minItems,minLength:V.minLength6,minProperties:V.minProperties,minimum:V.minimum,multipleOf:V.multipleOf,pattern:V.pattern,required:V.required,type:V.type,uniqueItems:V.uniqueItems});ze.add(JSON.parse(Cv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:V.metaData,deprecated:V.metaData,description:V.metaData,examples:V.metaData,readOnly:V.metaData,title:V.metaData,writeOnly:V.metaData});ze.add(JSON.parse(Tv));ze.add(JSON.parse(Rv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:V.metaData,contentMediaType:V.metaData,contentSchema:V.metaData});var qv=`{
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
}`,Dv=`{
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
}`,Lv=`{
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
}`,Mv=`{
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
}`,Bv=`{
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
}`,Uv=`{
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
}`,Fv=`{
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
}`,Vv=`{
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
}`,Kv=`{
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
}`;const{Core:er,Schema:Le}=k,U=Dr,zv=qv,Jv=Dv,Gv=Lv,Hv=Mv,Xv=Bv,Wv=Uv,Yv=Fv,Qv=Vv,Zv=Kv,Mr="https://json-schema.org/draft/2020-12/vocab/core";Le.setConfig(Mr,"baseToken","$id");Le.setConfig(Mr,"embeddedToken","$id");Le.setConfig(Mr,"anchorToken","$anchor");Le.setConfig(Mr,"dynamicAnchorToken","$dynamicAnchor");Le.setConfig(Mr,"vocabularyToken","$vocabulary");Le.setConfig(Mr,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);Le.add(JSON.parse(zv));Le.add(JSON.parse(Jv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:U.validate,$defs:U.definitions,$dynamicRef:U.dynamicRef,$ref:U.ref});Le.add(JSON.parse(Gv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:U.additionalProperties6,allOf:U.allOf,anyOf:U.anyOf,contains:U.containsMinContainsMaxContains,dependentSchemas:U.dependentSchemas,if:U.if,then:U.then,else:U.else,items:U.items202012,not:U.not,oneOf:U.oneOf,patternProperties:U.patternProperties,prefixItems:U.tupleItems,properties:U.properties,propertyNames:U.propertyNames});Le.add(JSON.parse(Hv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:U.const,dependentRequired:U.dependentRequired,enum:U.enum,exclusiveMaximum:U.exclusiveMaximum,exclusiveMinimum:U.exclusiveMinimum,maxItems:U.maxItems,maxLength:U.maxLength6,maxProperties:U.maxProperties,maximum:U.maximum,minItems:U.minItems,minLength:U.minLength6,minProperties:U.minProperties,minimum:U.minimum,multipleOf:U.multipleOf,pattern:U.pattern,required:U.required,type:U.type,uniqueItems:U.uniqueItems});Le.add(JSON.parse(Xv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:U.metaData,deprecated:U.metaData,description:U.metaData,examples:U.metaData,readOnly:U.metaData,title:U.metaData,writeOnly:U.metaData});Le.add(JSON.parse(Wv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:U.metaData});Le.add(JSON.parse(Yv));Le.add(JSON.parse(Qv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:U.metaData,contentMediaType:U.metaData,contentSchema:U.metaData});Le.add(JSON.parse(Zv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:U.unevaluatedItems,unevaluatedProperties:U.unevaluatedProperties});const{Core:Ze,Schema:eb,InvalidSchemaError:tb}=k,rb=Dr;var we={add:Ze.add,get:eb.get,validate:Ze.validate,compile:Ze.compile,interpret:Ze.interpret,setMetaOutputFormat:Ze.setMetaOutputFormat,setShouldMetaValidate:Ze.setShouldMetaValidate,addMediaTypePlugin:Ze.addMediaTypePlugin,FLAG:Ze.FLAG,BASIC:Ze.BASIC,DETAILED:Ze.DETAILED,VERBOSE:Ze.VERBOSE,Keywords:rb,InvalidSchemaError:tb};const nb=we.add,sb=we.get,ib=we.validate,ab=we.compile,ob=we.interpret,cb=we.setMetaOutputFormat,lb=we.setShouldMetaValidate,fb=we.addMediaTypePlugin,pb=we.FLAG,ub=we.BASIC,db=we.DETAILED,mb=we.VERBOSE,hb=we.Keywords,yb=we.InvalidSchemaError,$b=Object.freeze(Object.defineProperty({__proto__:null,add:nb,get:sb,validate:ib,compile:ab,interpret:ob,setMetaOutputFormat:cb,setShouldMetaValidate:lb,addMediaTypePlugin:fb,FLAG:pb,BASIC:ub,DETAILED:db,VERBOSE:mb,Keywords:hb,InvalidSchemaError:yb,default:we},Symbol.toStringTag,{value:"Module"}));var dp={exports:{}};(function(t){(function(e,r){t.exports?t.exports=r():e.moo=r()})(ca,function(){var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function s(w){return w&&r.call(w)==="[object RegExp]"}function i(w){return w&&typeof w=="object"&&!s(w)&&!Array.isArray(w)}function a(w){return w.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(w){var N=new RegExp("|"+w);return N.exec("").length-1}function c(w){return"("+w+")"}function l(w){if(!w.length)return"(?!)";var N=w.map(function(C){return"(?:"+C+")"}).join("|");return"(?:"+N+")"}function p(w){if(typeof w=="string")return"(?:"+a(w)+")";if(s(w)){if(w.ignoreCase)throw new Error("RegExp /i flag not allowed");if(w.global)throw new Error("RegExp /g flag is implied");if(w.sticky)throw new Error("RegExp /y flag is implied");if(w.multiline)throw new Error("RegExp /m flag is implied");return w.source}else throw new Error("Not a pattern: "+w)}function y(w){for(var N=Object.getOwnPropertyNames(w),C=[],R=0;R<N.length;R++){var z=N[R],q=w[z],X=[].concat(q);if(z==="include"){for(var le=0;le<X.length;le++)C.push({include:X[le]});continue}var pe=[];X.forEach(function(F){i(F)?(pe.length&&C.push($(z,pe)),C.push($(z,F)),pe=[]):pe.push(F)}),pe.length&&C.push($(z,pe))}return C}function m(w){for(var N=[],C=0;C<w.length;C++){var R=w[C];if(R.include){for(var z=[].concat(R.include),q=0;q<z.length;q++)N.push({include:z[q]});continue}if(!R.type)throw new Error("Rule has no type: "+JSON.stringify(R));N.push($(R.type,R))}return N}function $(w,N){if(i(N)||(N={match:N}),N.include)throw new Error("Matching rules cannot also include states");var C={defaultType:w,lineBreaks:!!N.error||!!N.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var R in N)e.call(N,R)&&(C[R]=N[R]);if(typeof C.type=="string"&&w!==C.type)throw new Error("Type transform cannot be a string (type '"+C.type+"' for token '"+w+"')");var z=C.match;return C.match=Array.isArray(z)?z:z?[z]:[],C.match.sort(function(q,X){return s(q)&&s(X)?0:s(X)?-1:s(q)?1:X.length-q.length}),C}function P(w){return Array.isArray(w)?m(w):y(w)}var u=$("error",{lineBreaks:!0,shouldThrow:!0});function d(w,N){for(var C=null,R=Object.create(null),z=!0,q=null,X=[],le=[],pe=0;pe<w.length;pe++)w[pe].fallback&&(z=!1);for(var pe=0;pe<w.length;pe++){var F=w[pe];if(F.include)throw new Error("Inheritance is not allowed in stateless lexers");if(F.error||F.fallback){if(C)throw!F.fallback==!C.fallback?new Error("Multiple "+(F.fallback?"fallback":"error")+" rules not allowed (for token '"+F.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+F.defaultType+"')");C=F}var ve=F.match.slice();if(z)for(;ve.length&&typeof ve[0]=="string"&&ve[0].length===1;){var Qe=ve.shift();R[Qe.charCodeAt(0)]=F}if(F.pop||F.push||F.next){if(!N)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+F.defaultType+"')");if(F.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+F.defaultType+"')")}if(ve.length!==0){z=!1,X.push(F);for(var be=0;be<ve.length;be++){var Be=ve[be];if(!!s(Be)){if(q===null)q=Be.unicode;else if(q!==Be.unicode&&F.fallback===!1)throw new Error("If one rule is /u then all must be")}}var Ue=l(ve.map(p)),ce=new RegExp(Ue);if(ce.test(""))throw new Error("RegExp matches empty string: "+ce);var W=o(Ue);if(W>0)throw new Error("RegExp has capture groups: "+ce+`
Use (?: \u2026 ) instead`);if(!F.lineBreaks&&ce.test(`
`))throw new Error("Rule should declare lineBreaks: "+ce);le.push(c(Ue))}}var ne=C&&C.fallback,fe=n&&!ne?"ym":"gm",he=n||ne?"":"|";q===!0&&(fe+="u");var Fe=new RegExp(l(le)+he,fe);return{regexp:Fe,groups:X,fast:R,error:C||u}}function v(w){var N=d(P(w));return new S({start:N},"start")}function E(w,N,C){var R=w&&(w.push||w.next);if(R&&!C[R])throw new Error("Missing state '"+R+"' (in token '"+w.defaultType+"' of state '"+N+"')");if(w&&w.pop&&+w.pop!=1)throw new Error("pop must be 1 (in token '"+w.defaultType+"' of state '"+N+"')")}function b(w,N){var C=w.$all?P(w.$all):[];delete w.$all;var R=Object.getOwnPropertyNames(w);N||(N=R[0]);for(var z=Object.create(null),q=0;q<R.length;q++){var X=R[q];z[X]=P(w[X]).concat(C)}for(var q=0;q<R.length;q++)for(var X=R[q],le=z[X],pe=Object.create(null),F=0;F<le.length;F++){var ve=le[F];if(!!ve.include){var Qe=[F,1];if(ve.include!==X&&!pe[ve.include]){pe[ve.include]=!0;var be=z[ve.include];if(!be)throw new Error("Cannot include nonexistent state '"+ve.include+"' (in state '"+X+"')");for(var Be=0;Be<be.length;Be++){var Ue=be[Be];le.indexOf(Ue)===-1&&Qe.push(Ue)}}le.splice.apply(le,Qe),F--}}for(var ce=Object.create(null),q=0;q<R.length;q++){var X=R[q];ce[X]=d(z[X],!0)}for(var q=0;q<R.length;q++){for(var W=R[q],ne=ce[W],fe=ne.groups,F=0;F<fe.length;F++)E(fe[F],W,ce);for(var he=Object.getOwnPropertyNames(ne.fast),F=0;F<he.length;F++)E(ne.fast[he[F]],W,ce)}return new S(ce,N)}function j(w){for(var N=Object.create(null),C=Object.create(null),R=Object.getOwnPropertyNames(w),z=0;z<R.length;z++){var q=R[z],X=w[q],le=Array.isArray(X)?X:[X];le.forEach(function(be){if((C[be.length]=C[be.length]||[]).push(be),typeof be!="string")throw new Error("keyword must be string (in keyword '"+q+"')");N[be]=q})}function pe(be){return JSON.stringify(be)}var F="";F+=`switch (value.length) {
`;for(var ve in C){var Qe=C[ve];F+="case "+ve+`:
`,F+=`switch (value) {
`,Qe.forEach(function(be){var Be=N[be];F+="case "+pe(be)+": return "+pe(Be)+`
`}),F+=`}
`}return F+=`}
`,Function("value",F)}var S=function(w,N){this.startState=N,this.states=w,this.buffer="",this.stack=[],this.reset()};S.prototype.reset=function(w,N){return this.buffer=w||"",this.index=0,this.line=N?N.line:1,this.col=N?N.col:1,this.queuedToken=N?N.queuedToken:null,this.queuedThrow=N?N.queuedThrow:null,this.setState(N?N.state:this.startState),this.stack=N&&N.stack?N.stack.slice():[],this},S.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},S.prototype.setState=function(w){if(!(!w||this.state===w)){this.state=w;var N=this.states[w];this.groups=N.groups,this.error=N.error,this.re=N.regexp,this.fast=N.fast}},S.prototype.popState=function(){this.setState(this.stack.pop())},S.prototype.pushState=function(w){this.stack.push(this.state),this.setState(w)};var _=n?function(w,N){return w.exec(N)}:function(w,N){var C=w.exec(N);return C[0].length===0?null:C};S.prototype._getGroup=function(w){for(var N=this.groups.length,C=0;C<N;C++)if(w[C+1]!==void 0)return this.groups[C];throw new Error("Cannot find token type for matched text")};function K(){return this.value}if(S.prototype.next=function(){var w=this.index;if(this.queuedGroup){var N=this._token(this.queuedGroup,this.queuedText,w);return this.queuedGroup=null,this.queuedText="",N}var C=this.buffer;if(w!==C.length){var X=this.fast[C.charCodeAt(w)];if(X)return this._token(X,C.charAt(w),w);var R=this.re;R.lastIndex=w;var z=_(R,C),q=this.error;if(z==null)return this._token(q,C.slice(w,C.length),w);var X=this._getGroup(z),le=z[0];return q.fallback&&z.index!==w?(this.queuedGroup=X,this.queuedText=le,this._token(q,C.slice(w,z.index),w)):this._token(X,le,w)}},S.prototype._token=function(w,N,C){var R=0;if(w.lineBreaks){var z=/\n/g,q=1;if(N===`
`)R=1;else for(;z.exec(N);)R++,q=z.lastIndex}var X={type:typeof w.type=="function"&&w.type(N)||w.defaultType,value:typeof w.value=="function"?w.value(N):N,text:N,toString:K,offset:C,lineBreaks:R,line:this.line,col:this.col},le=N.length;if(this.index+=le,this.line+=R,R!==0?this.col=le-q+1:this.col+=le,w.shouldThrow)throw new Error(this.formatError(X,"invalid syntax"));return w.pop?this.popState():w.push?this.pushState(w.push):w.next&&this.setState(w.next),X},typeof Symbol<"u"&&Symbol.iterator){var Z=function(w){this.lexer=w};Z.prototype.next=function(){var w=this.lexer.next();return{value:w,done:!w}},Z.prototype[Symbol.iterator]=function(){return this},S.prototype[Symbol.iterator]=function(){return new Z(this)}}return S.prototype.formatError=function(w,N){if(w==null)var C=this.buffer.slice(this.index),w={text:C,offset:this.index,lineBreaks:C.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var R=Math.max(0,w.offset-w.col+1),z=w.lineBreaks?w.text.indexOf(`
`):w.text.length,q=this.buffer.substring(R,w.offset+z);return N+=" at line "+w.line+" col "+w.col+`:

`,N+="  "+q+`
`,N+="  "+Array(w.col).join(" ")+"^",N},S.prototype.clone=function(){return new S(this.states,this.state)},S.prototype.has=function(w){return!0},{compile:v,states:b,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:j}})})(dp);const pt=dp.exports,qa="[0-9]",gb="[1-9]",vb="[0-9a-fA-F]",dc=`(?:\\\\["\\/\\\\brfnt]|\\\\u${vb}{4}|[^"\\\\])`,bb='"(?=[^"]*"\\s*:)',Sb=`(?:0|${gb}${qa}*)`,wb=`\\.${qa}+`,Ib="[eE]",Eb=`${Ib}[-+]?${qa}+`,Ob=`-?${Sb}(?:${wb})?(?:${Eb})?`,Pb=`(?:(?:\r?
)|[ 	])+`,mc=pt.states({main:{WS:{match:new RegExp(Pb),lineBreaks:!0},accent7:new RegExp(`true|false|${Ob}`),accent3:["{","}","[","]"],accent6:"null",stringProperty:{match:new RegExp(bb),push:"property"},stringStart:{match:'"',push:"string"},other:/./},string:{accent7:{match:new RegExp(`${dc}+`),lineBreaks:!0},stringEnd:{match:'"',pop:!0},other:/./},property:{accent1:{match:new RegExp(`${dc}+`),lineBreaks:!0},propertyEnd:{match:'"',pop:!0},other:/./}}),Da="[0-9]",kb="[1-9]",mp="[0-9a-fA-F]",hc=`(?:\r?
)+`,Xt="[ \\t]",jb=`^${Xt}+`,_b=`(?:\\\\["\\/\\\\brfnt]|\\\\u${mp}{4}|[^"\\\\])`,Ab=`(?:\\\\['\\/\\\\brfnt]|\\\\u${mp}{4}|[^'\\\\])`,Dn=`(?:"${_b}*"|'${Ab}*')`,hp=`${Xt}*:(?:${Xt}+|$)`,xb=`[^\\s]+(?=${hp})`,qi=`${Xt}*:`,yc=`[^\\s]+(?=${qi})`,Nb=`(?:0|${kb}${Da}*)`,Cb=`\\.${Da}+`,Tb="[eE]",Rb=`${Tb}[-+]?${Da}+`,Ln=`-?${Nb}(?:${Cb})?(?:${Rb})?`,qb=`-${Xt}+`,Mn=`#[^
]*`,$c=pt.states({main:{WS:{match:new RegExp(hc),lineBreaks:!0},indent:new RegExp(jb),comment:new RegExp(Mn),inlineArray:{match:"[",type:pt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:pt.keywords({accent3:"{"}),push:"inlineObject"},accent1:new RegExp(qb),accent7:["true","false","null",new RegExp(Dn),new RegExp(Ln)],accent6:new RegExp(xb),accent3:{match:new RegExp(hp),lineBreaks:!0,push:"property"},other:/[^#\n]+/},property:{WS:{match:new RegExp(hc),lineBreaks:!0,pop:1},comment:new RegExp(Mn),accent7:{match:["true","false","null",new RegExp(Dn),new RegExp(Ln)],pop:1},other:/[^#\n]+/},inlineArray:{WS:new RegExp(`${Xt}+`),comment:new RegExp(Mn),inlineArray:{match:"[",type:pt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:pt.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"]",type:pt.keywords({accent3:"]"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Dn),new RegExp(Ln)],accent6:new RegExp(yc),accent3:{match:new RegExp(qi),lineBreaks:!0},other:/[^\]\n,#]+/},inlineObject:{WS:new RegExp(`${Xt}+`),comment:new RegExp(Mn),inlineArray:{match:"[",type:pt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:pt.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"}",type:pt.keywords({accent3:"}"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Dn),new RegExp(Ln)],accent6:new RegExp(yc),accent3:{match:new RegExp(qi),lineBreaks:!0},other:/[^}\n,#]+/}});function gc(t,e,r){const n=t.slice();return n[10]=e[r],n}function vc(t,e,r){const n=t.slice();return n[13]=e[r],n[15]=r,n}function bc(t){let e,r=t[15]+1+"",n;return{c(){e=J("div"),n=ie(r),this.h()},l(s){e=G(s,"DIV",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p:je,d(s){s&&A(e)}}}function Db(t){let e=t[10].value+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&8&&e!==(e=n[10].value+"")&&De(r,e)},d(n){n&&A(r)}}}function Lb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent8 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Mb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent7 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Bb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent6 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Ub(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent5 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Fb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent4 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Vb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent3 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Kb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent2 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function zb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent1 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Jb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","comment svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Sc(t){let e;function r(i,a){return i[10].type==="comment"?Jb:i[10].type==="accent1"?zb:i[10].type==="accent2"?Kb:i[10].type==="accent3"?Vb:i[10].type==="accent4"?Fb:i[10].type==="accent5"?Ub:i[10].type==="accent6"?Bb:i[10].type==="accent7"?Mb:i[10].type==="accent8"?Lb:Db}let n=r(t),s=n(t);return{c(){s.c(),e=Ct()},l(i){s.l(i),e=Ct()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function Gb(t){let e,r,n,s,i,a,o,c,l,p,y,m,$=[...Array(t[4])],P=[];for(let v=0;v<$.length;v+=1)P[v]=bc(vc(t,$,v));let u=t[3],d=[];for(let v=0;v<u.length;v+=1)d[v]=Sc(gc(t,u,v));return{c(){e=J("div"),r=J("div");for(let v=0;v<P.length;v+=1)P[v].c();n=_e(),s=J("div"),i=J("pre"),a=ie("");for(let v=0;v<d.length;v+=1)d[v].c();o=ie(`
    `),c=_e(),l=J("textarea"),this.h()},l(v){e=G(v,"DIV",{class:!0});var E=L(e);r=G(E,"DIV",{class:!0});var b=L(r);for(let _=0;_<P.length;_+=1)P[_].l(b);b.forEach(A),n=Ae(E),s=G(E,"DIV",{class:!0});var j=L(s);i=G(j,"PRE",{class:!0});var S=L(i);a=ae(S,"");for(let _=0;_<d.length;_+=1)d[_].l(S);o=ae(S,`
    `),S.forEach(A),c=Ae(j),l=G(j,"TEXTAREA",{class:!0,"aria-label":!0}),L(l).forEach(A),j.forEach(A),E.forEach(A),this.h()},h(){x(r,"class","line-numbers svelte-564293"),x(i,"class","highlighted svelte-564293"),x(l,"class","src svelte-564293"),x(l,"aria-label","Code Editor"),x(s,"class","editable svelte-564293"),x(e,"class",p="Editor "+t[1]+" svelte-564293")},m(v,E){Q(v,e,E),T(e,r);for(let b=0;b<P.length;b+=1)P[b].m(r,null);T(e,n),T(e,s),T(s,i),T(i,a);for(let b=0;b<d.length;b+=1)d[b].m(i,null);T(i,o),T(s,c),T(s,l),t[8](l),lo(l,t[0]),y||(m=[Jt(l,"input",t[9]),Jt(l,"input",t[7])],y=!0)},p(v,[E]){if(E&16){$=[...Array(v[4])];let b;for(b=0;b<$.length;b+=1){const j=vc(v,$,b);P[b]?P[b].p(j,E):(P[b]=bc(j),P[b].c(),P[b].m(r,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=$.length}if(E&8){u=v[3];let b;for(b=0;b<u.length;b+=1){const j=gc(v,u,b);d[b]?d[b].p(j,E):(d[b]=Sc(j),d[b].c(),d[b].m(i,o))}for(;b<d.length;b+=1)d[b].d(1);d.length=u.length}E&1&&lo(l,v[0]),E&2&&p!==(p="Editor "+v[1]+" svelte-564293")&&x(e,"class",p)},i:je,o:je,d(v){v&&A(e),es(P,v),es(d,v),t[8](null),y=!1,Sl(m)}}}function Hb(t,e,r){let n,s,{theme:i="solarized-dark"}=e,{value:a=""}=e,{format:o="json"}=e,c;const l=()=>{c.focus()};function p($){lu.call(this,t,$)}function y($){_t[$?"unshift":"push"](()=>{c=$,r(2,c)})}function m(){a=this.value,r(0,a)}return t.$$set=$=>{"theme"in $&&r(1,i=$.theme),"value"in $&&r(0,a=$.value),"format"in $&&r(5,o=$.format)},t.$$.update=()=>{t.$$.dirty&1&&r(4,n=(a.match(/\n/g)||[]).length+1),t.$$.dirty&33&&r(3,s=function(){return o==="json"?(mc.reset(a),Array.from(mc)):($c.reset(a),Array.from($c))}())},[a,i,c,s,n,o,l,p,y,m]}class Xb extends qt{constructor(e){super(),Dt(this,e,Hb,Gb,Lt,{theme:1,value:0,format:5,focus:6})}get focus(){return this.$$.ctx[6]}}function wc(t,e,r){const n=t.slice();return n[18]=e[r],n[20]=r,n}function Ic(t){let e,r,n,s;function i(){return t[12](t[20])}return{c(){e=J("button"),r=ie("\xD7"),this.h()},l(a){e=G(a,"BUTTON",{class:!0});var o=L(e);r=ae(o,"\xD7"),o.forEach(A),this.h()},h(){x(e,"class","tab-close svelte-1ylgy73")},m(a,o){Q(a,e,o),T(e,r),n||(s=Jt(e,"click",i),n=!0)},p(a,o){t=a},d(a){a&&A(e),n=!1,s()}}}function Ec(t){let e,r,n=t[18].label+"",s,i,a,o,c,l,p=!t[18].persistent&&t[0].length>t[6]&&Ic(t);function y(){return t[13](t[20])}return{c(){e=J("button"),r=J("span"),s=ie(n),i=_e(),p&&p.c(),this.h()},l(m){e=G(m,"BUTTON",{role:!0,id:!0,"aria-selected":!0,"aria-controls":!0,class:!0});var $=L(e);r=G($,"SPAN",{class:!0});var P=L(r);s=ae(P,n),P.forEach(A),i=Ae($),p&&p.l($),$.forEach(A),this.h()},h(){x(r,"class","tab-label svelte-1ylgy73"),x(e,"role","tab"),x(e,"id",a=`${t[3]}-tab-${t[20]}`),x(e,"aria-selected",o=t[20]===t[1]),x(e,"aria-controls","tabpanel"),x(e,"class","svelte-1ylgy73"),fo(e,"active",t[20]===t[5])},m(m,$){Q(m,e,$),T(e,r),T(r,s),T(e,i),p&&p.m(e,null),c||(l=Jt(e,"click",y),c=!0)},p(m,$){t=m,$&1&&n!==(n=t[18].label+"")&&De(s,n),!t[18].persistent&&t[0].length>t[6]?p?p.p(t,$):(p=Ic(t),p.c(),p.m(e,null)):p&&(p.d(1),p=null),$&8&&a!==(a=`${t[3]}-tab-${t[20]}`)&&x(e,"id",a),$&2&&o!==(o=t[20]===t[1])&&x(e,"aria-selected",o),$&32&&fo(e,"active",t[20]===t[5])},d(m){m&&A(e),p&&p.d(),c=!1,l()}}}function Oc(t){let e,r,n,s,i,a;return{c(){e=J("button"),r=J("span"),n=ie("+"),this.h()},l(o){e=G(o,"BUTTON",{role:!0,id:!0,class:!0});var c=L(e);r=G(c,"SPAN",{class:!0});var l=L(r);n=ae(l,"+"),l.forEach(A),c.forEach(A),this.h()},h(){x(r,"class","tab-label svelte-1ylgy73"),x(e,"role","tab"),x(e,"id",s=`${t[3]}-tab-${t[0].length}`),x(e,"class","svelte-1ylgy73")},m(o,c){Q(o,e,c),T(e,r),T(r,n),i||(a=Jt(e,"click",t[10]),i=!0)},p(o,c){c&9&&s!==(s=`${o[3]}-tab-${o[0].length}`)&&x(e,"id",s)},d(o){o&&A(e),i=!1,a()}}}function Wb(t){let e,r,n,s,i,a,o,c,l,p=t[0],y=[];for(let d=0;d<p.length;d+=1)y[d]=Ec(wc(t,p,d));let m=t[4]&&Oc(t);function $(d){t[15](d)}function P(d){t[16](d)}let u={};return t[0][t[1]].text!==void 0&&(u.value=t[0][t[1]].text),t[2]!==void 0&&(u.format=t[2]),i=new Xb({props:u}),t[14](i),_t.push(()=>yr(i,"value",$)),_t.push(()=>yr(i,"format",P)),i.$on("input",t[17]),{c(){e=J("div");for(let d=0;d<y.length;d+=1)y[d].c();r=_e(),m&&m.c(),n=_e(),s=J("div"),tt(i.$$.fragment),this.h()},l(d){e=G(d,"DIV",{role:!0,class:!0});var v=L(e);for(let b=0;b<y.length;b+=1)y[b].l(v);r=Ae(v),m&&m.l(v),v.forEach(A),n=Ae(d),s=G(d,"DIV",{role:!0,id:!0,"aria-labelledby":!0,class:!0});var E=L(s);rt(i.$$.fragment,E),E.forEach(A),this.h()},h(){x(e,"role","tablist"),x(e,"class","svelte-1ylgy73"),x(s,"role","tabpanel"),x(s,"id","tabpanel"),x(s,"aria-labelledby",c=`${t[3]}-tab-${t[1]}`),x(s,"class","svelte-1ylgy73")},m(d,v){Q(d,e,v);for(let E=0;E<y.length;E+=1)y[E].m(e,null);T(e,r),m&&m.m(e,null),Q(d,n,v),Q(d,s,v),nt(i,s,null),l=!0},p(d,[v]){if(v&2667){p=d[0];let b;for(b=0;b<p.length;b+=1){const j=wc(d,p,b);y[b]?y[b].p(j,v):(y[b]=Ec(j),y[b].c(),y[b].m(e,r))}for(;b<y.length;b+=1)y[b].d(1);y.length=p.length}d[4]?m?m.p(d,v):(m=Oc(d),m.c(),m.m(e,null)):m&&(m.d(1),m=null);const E={};!a&&v&3&&(a=!0,E.value=d[0][d[1]].text,$r(()=>a=!1)),!o&&v&4&&(o=!0,E.format=d[2],$r(()=>o=!1)),i.$set(E),(!l||v&10&&c!==(c=`${d[3]}-tab-${d[1]}`))&&x(s,"aria-labelledby",c)},i(d){l||(Re(i.$$.fragment,d),l=!0)},o(d){qe(i.$$.fragment,d),l=!1},d(d){d&&A(e),es(y,d),m&&m.d(),d&&A(n),d&&A(s),t[14](null),st(i)}}}function Yb(t,e,r){let{ns:n=""}=e,{tabs:s=[]}=e,{newTab:i=void 0}=e,{active:a=0}=e,{selected:o=0}=e,{minTabs:c=1}=e,{format:l="json"}=e,p;const y=fu();function m(S){r(1,o=S),p.focus()}function $(){r(0,s[s.length]=i(),s),r(1,o=s.length-1),p.focus()}function P(S){o>=S&&o>0&&r(1,o-=1),s.splice(S,1),r(0,s),p.focus()}const u=S=>P(S),d=S=>m(S);function v(S){_t[S?"unshift":"push"](()=>{p=S,r(7,p)})}function E(S){t.$$.not_equal(s[o].text,S)&&(s[o].text=S,r(0,s))}function b(S){l=S,r(2,l)}const j=()=>y("input",s);return t.$$set=S=>{"ns"in S&&r(3,n=S.ns),"tabs"in S&&r(0,s=S.tabs),"newTab"in S&&r(4,i=S.newTab),"active"in S&&r(5,a=S.active),"selected"in S&&r(1,o=S.selected),"minTabs"in S&&r(6,c=S.minTabs),"format"in S&&r(2,l=S.format)},[s,o,l,n,i,a,c,p,y,m,$,P,u,d,v,E,b,j]}class Pc extends qt{constructor(e){super(),Dt(this,e,Yb,Wb,Lt,{ns:3,tabs:0,newTab:4,active:5,selected:1,minTabs:6,format:2})}}function kc(t,e,r){const n=t.slice();return n[2]=e[r],n}function Qb(t){let e;function r(i,a){return i[1].output?e1:Zb}let n=r(t),s=n(t);return{c(){s.c(),e=Ct()},l(i){s.l(i),e=Ct()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function Zb(t){let e=t[1]+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[1]+"")&&De(r,e)},d(n){n&&A(r)}}}function e1(t){let e,r,n=t[1].output.errors,s=[];for(let i=0;i<n.length;i+=1)s[i]=_c(kc(t,n,i));return{c(){e=ie(`Invalid
    `),r=J("ul");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=ae(i,`Invalid
    `),r=G(i,"UL",{});var a=L(r);for(let o=0;o<s.length;o+=1)s[o].l(a);a.forEach(A)},m(i,a){Q(i,e,a),Q(i,r,a);for(let o=0;o<s.length;o+=1)s[o].m(r,null)},p(i,a){if(a&1){n=i[1].output.errors;let o;for(o=0;o<n.length;o+=1){const c=kc(i,n,o);s[o]?s[o].p(c,a):(s[o]=_c(c),s[o].c(),s[o].m(r,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){i&&A(e),i&&A(r),es(s,i)}}}function jc(t){let e,r,n=t[2].instanceLocation+"",s,i,a,o=t[2].absoluteKeywordLocation+"",c;return{c(){e=J("li"),r=J("code"),s=ie(n),i=ie(" fails schema constraint "),a=J("code"),c=ie(o),this.h()},l(l){e=G(l,"LI",{class:!0});var p=L(e);r=G(p,"CODE",{class:!0});var y=L(r);s=ae(y,n),y.forEach(A),i=ae(p," fails schema constraint "),a=G(p,"CODE",{class:!0});var m=L(a);c=ae(m,o),m.forEach(A),p.forEach(A),this.h()},h(){x(r,"class","svelte-1sdf2dp"),x(a,"class","svelte-1sdf2dp"),x(e,"class","svelte-1sdf2dp")},m(l,p){Q(l,e,p),T(e,r),T(r,s),T(e,i),T(e,a),T(a,c)},p(l,p){p&1&&n!==(n=l[2].instanceLocation+"")&&De(s,n),p&1&&o!==(o=l[2].absoluteKeywordLocation+"")&&De(c,o)},d(l){l&&A(e)}}}function _c(t){let e=!t[2].valid&&!t[2].keyword.endsWith("#validate"),r,n=e&&jc(t);return{c(){n&&n.c(),r=Ct()},l(s){n&&n.l(s),r=Ct()},m(s,i){n&&n.m(s,i),Q(s,r,i)},p(s,i){i&1&&(e=!s[2].valid&&!s[2].keyword.endsWith("#validate")),e?n?n.p(s,i):(n=jc(s),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&A(r)}}}function t1(t){let e=t[0]?"Valid":"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[0]?"Valid":"")&&De(r,e)},d(n){n&&A(r)}}}function r1(t){let e;return{c(){e=ie("Validating ...")},l(r){e=ae(r,"Validating ...")},m(r,n){Q(r,e,n)},p:je,d(r){r&&A(e)}}}function n1(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!0,pending:r1,then:t1,catch:Qb,value:0,error:1};return ts(r=t[0],n),{c(){e=Ct(),n.block.c()},l(s){e=Ct(),n.block.l(s)},m(s,i){Q(s,e,i),n.block.m(s,n.anchor=i),n.mount=()=>e.parentNode,n.anchor=e},p(s,[i]){t=s,n.ctx=t,i&1&&r!==(r=t[0])&&ts(r,n)||wl(n,t,i)},i:je,o:je,d(s){s&&A(e),n.block.d(s),n.token=null,n=null}}}function s1(t,e,r){let{results:n}=e;return t.$$set=s=>{"results"in s&&r(0,n=s.results)},[n]}class yp extends qt{constructor(e){super(),Dt(this,e,s1,n1,Lt,{results:0})}}function i1(t){let e,r,n,s,i;const a=t[2].default,o=Vi(a,t,t[1],null);return{c(){e=J("a"),r=ut("svg"),n=ut("path"),s=_e(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=dt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=dt(p,"path",{"fill-rule":!0,d:!0}),L(n).forEach(A),p.forEach(A),s=Ae(l),o&&o.l(l),l.forEach(A),this.h()},h(){x(n,"fill-rule","evenodd"),x(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),x(r,"height","1.5em"),x(r,"viewBox","0 0 16 16"),x(r,"version","1.1"),x(r,"aria-hidden","true"),x(r,"class","svelte-i8toq"),x(e,"href",t[0]),x(e,"class","svelte-i8toq")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Ki(o,a,c,c[1],i?Ji(a,c[1],l,null):zi(c[1]),null),(!i||l&1)&&x(e,"href",c[0])},i(c){i||(Re(o,c),i=!0)},o(c){qe(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function a1(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Ac extends qt{constructor(e){super(),Dt(this,e,a1,i1,Lt,{href:0})}}function o1(t){let e,r,n,s,i;const a=t[2].default,o=Vi(a,t,t[1],null);return{c(){e=J("a"),r=ut("svg"),n=ut("path"),s=_e(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=dt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=dt(p,"path",{d:!0}),L(n).forEach(A),p.forEach(A),s=Ae(l),o&&o.l(l),l.forEach(A),this.h()},h(){x(n,"d","M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"),x(r,"height","1em"),x(r,"viewBox","0 0 780 250"),x(r,"version","1.1"),x(r,"aria-hidden","true"),x(r,"class","svelte-wj8h0n"),x(e,"href",t[0]),x(e,"class","svelte-wj8h0n")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Ki(o,a,c,c[1],i?Ji(a,c[1],l,null):zi(c[1]),null),(!i||l&1)&&x(e,"href",c[0])},i(c){i||(Re(o,c),i=!0)},o(c){qe(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function c1(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class xc extends qt{constructor(e){super(),Dt(this,e,c1,o1,Lt,{href:0})}}function l1(t){let e,r,n,s,i,a,o,c,l;const p=t[2].default,y=Vi(p,t,t[1],null);return{c(){e=J("a"),r=ut("svg"),n=ut("g"),s=ut("path"),i=ut("path"),a=ut("path"),o=ut("path"),c=_e(),y&&y.c(),this.h()},l(m){e=G(m,"A",{href:!0,class:!0});var $=L(e);r=dt($,"svg",{version:!0,viewBox:!0,height:!0,class:!0});var P=L(r);n=dt(P,"g",{transform:!0,id:!0});var u=L(n);s=dt(u,"path",{id:!0,d:!0,style:!0}),L(s).forEach(A),i=dt(u,"path",{id:!0,d:!0,style:!0}),L(i).forEach(A),a=dt(u,"path",{id:!0,d:!0,style:!0}),L(a).forEach(A),o=dt(u,"path",{id:!0,d:!0,style:!0}),L(o).forEach(A),u.forEach(A),P.forEach(A),c=Ae($),y&&y.l($),$.forEach(A),this.h()},h(){x(s,"id","path4544"),x(s,"d","m 122.99401,114.18985 c -4.32897,-0.9404 -7.58044,-3.47848 -8.71251,-6.80095 -0.78921,-2.31618 -0.67682,-6.07238 0.33363,-11.150598 0.48507,-2.437836 0.88169,-5.347843 0.88139,-6.466688 -9.8e-4,-3.718098 -1.71106,-5.735418 -5.1001,-6.016462 l -1.9549,-0.162116 v -2.392655 -2.392657 l 1.85208,-0.250855 c 2.70243,-0.366031 3.74441,-1.02838 4.57629,-2.908984 0.61121,-1.381726 0.68884,-2.068648 0.50552,-4.472869 -0.11913,-1.562244 -0.53527,-4.348568 -0.92477,-6.191832 -0.98954,-4.682868 -0.94822,-8.485471 0.11707,-10.773163 1.56862,-3.368589 5.43705,-5.854553 9.93248,-6.382903 l 1.93299,-0.227185 v 2.518015 2.518015 h -1.29973 c -1.77186,0 -4.2497,1.262413 -4.8835,2.488054 -0.60797,1.175674 -0.65405,2.864146 -0.15834,5.802223 0.78343,4.643508 1.04707,9.098344 0.67592,11.421636 -0.42464,2.658142 -1.97477,5.796328 -3.6791,7.448236 l -1.18012,1.143813 1.61497,1.982752 c 1.99051,2.443801 2.76458,4.148744 3.24284,7.142561 0.37835,2.368341 0.0844,7.282673 -0.67072,11.213982 -1.05359,5.48514 0.1623,7.65141 4.66209,8.30613 l 1.67569,0.24382 v 2.44782 c 0,2.79211 0.17086,2.69708 -3.43917,1.91286 z"),Nn(s,"fill","stroke-width:0.35277775"),x(i,"id","path4546"),x(i,"d","m 152.2304,112.24932 v -2.42987 l 2.04969,-0.42336 c 2.26276,-0.46736 4.054,-1.8634 4.45842,-3.47475 0.1274,-0.50758 -0.11267,-3.16398 -0.53347,-5.90311 -1.37183,-8.929552 -0.6114,-13.537042 2.85482,-17.297452 l 1.48237,-1.60818 -1.1108,-1.26512 c -3.97855,-4.53132 -4.66885,-8.552208 -3.15364,-18.369547 0.76342,-4.946305 0.76409,-4.994322 0.087,-6.173611 -0.79713,-1.388278 -3.28385,-2.776033 -4.97438,-2.776033 h -1.15997 v -2.469445 c 0,-2.811057 -0.0583,-2.773846 3.24583,-2.072788 3.9645,0.841179 6.80448,2.853272 8.27787,5.864775 0.84544,1.728026 0.97275,2.400136 0.94911,5.010889 -0.015,1.658349 -0.35758,4.682054 -0.76125,6.719346 -1.49867,7.563594 -1.3651,9.576204 0.7654,11.532814 0.98915,0.90842 1.64012,1.17274 3.37032,1.36849 l 2.14439,0.24261 v 2.42387 2.42388 l -1.6757,7.1e-4 c -2.1517,7e-4 -3.9323,0.90924 -4.83869,2.46889 -0.95194,1.63803 -0.89239,5.20675 0.17364,10.40695 0.90648,4.421902 1.05253,8.458452 0.3882,10.728752 -0.70059,2.39406 -3.81995,5.29609 -6.74745,6.27718 -1.26118,0.42266 -2.96775,0.87096 -3.79236,0.99623 l -1.49931,0.22775 z"),Nn(i,"stroke-width","0.35277778"),x(a,"id","path4548"),x(a,"d","m 131.74239,108.26592 c -1.02163,-1.2988 -0.87294,-3.53652 0.38087,-5.73185 0.92776,-1.62446 4.80862,-6.948549 7.61066,-10.440949 l 1.13094,-1.40958 -1.80213,-5.22523 c -2.02147,-5.86123 -2.0098,-5.97467 0.65581,-6.37225 l 1.46834,-0.219 1.64076,3.3506 c 0.90242,1.84283 1.76982,3.35061 1.92755,3.35061 0.15774,0 1.77489,-1.75542 3.59368,-3.90092 3.15918,-3.72667 3.35688,-3.89165 4.42591,-3.69334 0.64552,0.11974 1.21858,0.0465 1.35432,-0.17316 0.31818,-0.51481 1.23083,0.24704 1.23083,1.02746 0,0.32009 -0.45438,1.13409 -1.00972,1.80888 -2.26771,2.75549 -7.10417,9.27155 -7.10417,9.5713 0,0.17685 0.97502,2.45302 2.16671,5.05816 l 2.1667,4.736609 -0.65823,0.98459 c -0.36203,0.54152 -0.66236,1.12603 -0.6674,1.29891 -0.005,0.17288 -0.27769,0.48371 -0.60588,0.69073 -0.83174,0.52464 -1.44656,-0.11541 -3.9894,-4.153119 -1.16417,-1.84856 -2.23163,-3.36491 -2.37215,-3.36967 -0.31309,-0.0106 -3.7911,5.131969 -6.47955,9.580639 -2.37093,3.92324 -1.93885,3.4204 -3.26614,3.80106 -0.95533,0.27398 -1.19348,0.19843 -1.79831,-0.57048 z"),Nn(a,"stroke-width","0.35277775"),x(o,"id","path4550"),x(o,"d","m 131.98567,83.677091 c -2.15148,-3.8472 -6.0183,-9.42829 -7.57842,-10.93815 -0.79252,-0.76698 -1.44094,-1.57494 -1.44094,-1.79546 0,-0.6016 1.61695,-1.21975 3.19058,-1.21975 1.69822,0 3.49597,1.47777 5.0997,4.19203 0.58208,0.98515 1.15641,1.79434 1.27629,1.79819 0.11988,0.004 0.80873,-1.65116 1.53078,-3.67779 1.5464,-4.34039 5.62351,-12.777999 7.22453,-14.951229 1.3726,-1.86316 3.42936,-2.865165 5.90274,-2.875676 3.23375,-0.01374 3.24268,0.130067 0.20474,3.296663 -4.63599,4.832327 -6.76321,8.809632 -11.25155,21.037252 -1.24637,3.39549 -2.39032,6.47895 -2.54212,6.85214 -0.23022,0.56597 -0.49833,0.28096 -1.61633,-1.71822 z"),Nn(o,"stroke-width","0.35277775"),x(n,"transform","translate(-104.22785,-45.507923)"),x(n,"id","layer1"),x(r,"version","1.1"),x(r,"viewBox","0 0 70.423268 70.42326"),x(r,"height","1.25em"),x(r,"class","svelte-27u907"),x(e,"href",t[0]),x(e,"class","svelte-27u907")},m(m,$){Q(m,e,$),T(e,r),T(r,n),T(n,s),T(n,i),T(n,a),T(n,o),T(e,c),y&&y.m(e,null),l=!0},p(m,[$]){y&&y.p&&(!l||$&2)&&Ki(y,p,m,m[1],l?Ji(p,m[1],$,null):zi(m[1]),null),(!l||$&1)&&x(e,"href",m[0])},i(m){l||(Re(y,m),l=!0)},o(m){qe(y,m),l=!1},d(m){m&&A(e),y&&y.d(m)}}}function f1(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class p1 extends qt{constructor(e){super(),Dt(this,e,f1,l1,Lt,{href:0})}}function u1(t){let e;return{c(){e=ie("hyperjump-io/json-schema.hyperjump.io")},l(r){e=ae(r,"hyperjump-io/json-schema.hyperjump.io")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function d1(t){let e;return{c(){e=ie("hyperjump-io/json-schema-validator")},l(r){e=ae(r,"hyperjump-io/json-schema-validator")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function m1(t){let e;return{c(){e=ie("@hyperjump/json-schema")},l(r){e=ae(r,"@hyperjump/json-schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function h1(t){let e;return{c(){e=ie("@hyperjump/json-schema-core")},l(r){e=ae(r,"@hyperjump/json-schema-core")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function y1(t){let e;return{c(){e=ie("JSON Schema")},l(r){e=ae(r,"JSON Schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function $1(t){let e,r,n,s,i,a,o,c,l,p,y,m,$,P,u,d,v;return s=new Ac({props:{href:"https://github.com/hyperjump-io/json-schema.hyperjump.io",$$slots:{default:[u1]},$$scope:{ctx:t}}}),o=new Ac({props:{href:"https://github.com/hyperjump-io/json-schema-validator",$$slots:{default:[d1]},$$scope:{ctx:t}}}),p=new xc({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema",$$slots:{default:[m1]},$$scope:{ctx:t}}}),$=new xc({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema-core",$$slots:{default:[h1]},$$scope:{ctx:t}}}),d=new p1({props:{href:"https://json-schema.org",$$slots:{default:[y1]},$$scope:{ctx:t}}}),{c(){e=J("footer"),r=J("ul"),n=J("li"),tt(s.$$.fragment),i=_e(),a=J("li"),tt(o.$$.fragment),c=_e(),l=J("li"),tt(p.$$.fragment),y=_e(),m=J("li"),tt($.$$.fragment),P=_e(),u=J("li"),tt(d.$$.fragment),this.h()},l(E){e=G(E,"FOOTER",{class:!0});var b=L(e);r=G(b,"UL",{class:!0});var j=L(r);n=G(j,"LI",{class:!0});var S=L(n);rt(s.$$.fragment,S),S.forEach(A),i=Ae(j),a=G(j,"LI",{class:!0});var _=L(a);rt(o.$$.fragment,_),_.forEach(A),c=Ae(j),l=G(j,"LI",{class:!0});var K=L(l);rt(p.$$.fragment,K),K.forEach(A),y=Ae(j),m=G(j,"LI",{class:!0});var Z=L(m);rt($.$$.fragment,Z),Z.forEach(A),P=Ae(j),u=G(j,"LI",{class:!0});var w=L(u);rt(d.$$.fragment,w),w.forEach(A),j.forEach(A),b.forEach(A),this.h()},h(){x(n,"class","svelte-17tbtsq"),x(a,"class","svelte-17tbtsq"),x(l,"class","svelte-17tbtsq"),x(m,"class","svelte-17tbtsq"),x(u,"class","svelte-17tbtsq"),x(r,"class","links svelte-17tbtsq"),x(e,"class","svelte-17tbtsq")},m(E,b){Q(E,e,b),T(e,r),T(r,n),nt(s,n,null),T(r,i),T(r,a),nt(o,a,null),T(r,c),T(r,l),nt(p,l,null),T(r,y),T(r,m),nt($,m,null),T(r,P),T(r,u),nt(d,u,null),v=!0},p(E,[b]){const j={};b&1&&(j.$$scope={dirty:b,ctx:E}),s.$set(j);const S={};b&1&&(S.$$scope={dirty:b,ctx:E}),o.$set(S);const _={};b&1&&(_.$$scope={dirty:b,ctx:E}),p.$set(_);const K={};b&1&&(K.$$scope={dirty:b,ctx:E}),$.$set(K);const Z={};b&1&&(Z.$$scope={dirty:b,ctx:E}),d.$set(Z)},i(E){v||(Re(s.$$.fragment,E),Re(o.$$.fragment,E),Re(p.$$.fragment,E),Re($.$$.fragment,E),Re(d.$$.fragment,E),v=!0)},o(E){qe(s.$$.fragment,E),qe(o.$$.fragment,E),qe(p.$$.fragment,E),qe($.$$.fragment,E),qe(d.$$.fragment,E),v=!1},d(E){E&&A(e),st(s),st(o),st(p),st($),st(d)}}}class g1 extends qt{constructor(e){super(),Dt(this,e,null,$1,Lt,{})}}const v1=Id($b);var b1=`{
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
}`;const{Schema:$p}=k,gp=b1;$p.add(JSON.parse(gp),"https://spec.openapis.org/oas/3.0/schema");$p.add(JSON.parse(gp),"https://spec.openapis.org/oas/3.0/schema/latest");var S1=`{
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
}`,w1=`{
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
}`,vp=`{
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
}`,bp=`{
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
}`;const{Core:I1,Keywords:Bn,Schema:vt}=k,E1=S1,O1=w1,La=vp,Ma=vp,P1=bp,k1=bp;vt.add(JSON.parse(La),"https://spec.openapis.org/oas/3.1/schema");vt.add(JSON.parse(La),"https://spec.openapis.org/oas/3.1/schema/latest");vt.add(JSON.parse(Ma),"https://spec.openapis.org/oas/3.1/schema-base");vt.add(JSON.parse(Ma),"https://spec.openapis.org/oas/3.1/schema-base/latest");vt.add(JSON.parse(La),"https://spec.openapis.org/oas/3.1/schema/2022-02-27");vt.add(JSON.parse(Ma),"https://spec.openapis.org/oas/3.1/schema-base/2022-02-27");vt.add(JSON.parse(P1),"https://spec.openapis.org/oas/3.1/schema/2021-09-28");vt.add(JSON.parse(k1),"https://spec.openapis.org/oas/3.1/schema-base/2021-09-28");vt.add(JSON.parse(E1));vt.add(JSON.parse(O1));I1.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:Bn.metaData,discriminator:Bn.metaData,externalDocs:Bn.metaData,xml:Bn.metaData});const j1=v1;var Je=j1;Je.add;Je.get;Je.validate;Je.compile;Je.interpret;Je.setMetaOutputFormat;Je.setShouldMetaValidate;Je.FLAG;Je.BASIC;Je.DETAILED;Je.VERBOSE;Je.Keywords;Je.InvalidSchemaError;const{Core:Sp,Schema:Qr,Instance:oi}=k,_1=async(t,e,r)=>{const n=await Qr.step("items",r),s=Qr.typeOf(n,"array")?Qr.length(n):Number.MAX_SAFE_INTEGER;return Qr.typeOf(t,"boolean")?[s,Qr.value(t)]:[s,await Sp.compileSchema(t,e)]},A1=([t,e],r,n,s)=>oi.typeOf(r,"array")?typeof e=="string"?oi.every((i,a)=>a<t||Sp.interpretSchema(e,i,n,s),r):oi.every((i,a)=>a<t?!0:e,r):!0;var x1={compile:_1,interpret:A1};const{Core:wp,Schema:ci,Instance:Di}=k,N1=async(t,e,r)=>{const n=await ci.step("items",r);return[ci.typeOf(n,"array")?ci.length(n):Number.MAX_SAFE_INTEGER,await wp.compileSchema(t,e)]},Ip=([t,e],r,n,s)=>Di.typeOf(r,"array")?Di.every((i,a)=>a<t||wp.interpretSchema(e,i,n,s),r):!0,C1=(t,e,r,n)=>Ip(t,e,r,n)&&new Set(Di.map((s,i)=>i,e));var T1={compile:N1,interpret:Ip,collectEvaluatedItems:C1};const{Core:Ep,Schema:jt,Instance:Nc}=k,R1=async(t,e,r)=>{const n=await jt.step("properties",r),s=jt.typeOf(n,"object")?jt.keys(n):[],i=await jt.step("patternProperties",r),a=jt.typeOf(i,"object")?jt.keys(i).map(o=>new RegExp(o)):[];return jt.typeOf(t,"boolean")?[s,a,jt.value(t)]:[s,a,await Ep.compileSchema(t,e)]},q1=([t,e,r],n,s,i)=>{if(!Nc.typeOf(n,"object"))return!0;const a=Nc.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>Ep.interpretSchema(r,o,s,i)):a.length===0||r};var D1={compile:R1,interpret:q1};const{Core:Op,Schema:dr,Instance:Cc}=k,L1=async(t,e,r)=>{const n=await dr.step("properties",r),s=dr.typeOf(n,"object")?dr.keys(n):[],i=await dr.step("patternProperties",r),a=dr.typeOf(i,"object")?dr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await Op.compileSchema(t,e)]},Pp=([t,e,r],n,s,i)=>Cc.typeOf(n,"object")?Cc.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>Op.interpretSchema(r,a,s,i)):!0,M1=(t,e,r,n)=>Pp(t,e,r,n)&&[new RegExp("")];var B1={compile:L1,interpret:Pp,collectEvaluatedProperties:M1};const{Core:Ns,Schema:U1}=k,Tc=Pe,F1=(t,e)=>Tc.pipeline([U1.map(async r=>Ns.compileSchema(await r,e)),Tc.all],t),V1=(t,e,r,n)=>t.every(s=>Ns.interpretSchema(s,e,r,n)),K1=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&Ns.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),z1=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&Ns.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var J1={compile:F1,interpret:V1,collectEvaluatedProperties:K1,collectEvaluatedItems:z1};const{Core:Cs,Schema:G1}=k,Rc=Pe,H1=(t,e)=>Rc.pipeline([G1.map(async r=>Cs.compileSchema(await r,e)),Rc.all],t),X1=(t,e,r,n)=>t.filter(i=>Cs.interpretSchema(i,e,r,n)).length>0,W1=(t,e,r,n)=>t.reduce((s,i)=>{const a=Cs.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),Y1=(t,e,r,n)=>t.reduce((s,i)=>{const a=Cs.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var Q1={compile:H1,interpret:X1,collectEvaluatedProperties:W1,collectEvaluatedItems:Y1};const{Schema:Z1,Instance:e0}=k,kp=qr,t0=t=>kp(Z1.value(t)),r0=(t,e)=>kp(e0.value(e))===t;var n0={compile:t0,interpret:r0};const{Core:jp,Instance:qc}=k,s0=(t,e)=>jp.compileSchema(t,e),i0=(t,e,r,n)=>!qc.typeOf(e,"array")||qc.some(s=>jp.interpretSchema(t,s,r,n),e);var a0={compile:s0,interpret:i0};const{Core:Ba,Schema:mr,Instance:Li}=k,o0=async(t,e,r)=>{const n=await Ba.compileSchema(t,e),s=await mr.step("minContains",r),i=mr.typeOf(s,"number")?mr.value(s):1,a=await mr.step("maxContains",r),o=mr.typeOf(a,"number")?mr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},_p=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Li.typeOf(n,"array"))return!0;const a=Li.reduce((o,c)=>Ba.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},c0=(t,e,r,n)=>_p(t,e,r,n)&&Li.reduce((s,i,a)=>Ba.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var l0={compile:o0,interpret:_p,collectEvaluatedItems:c0};const{Core:Ts,Schema:hr,Instance:zt}=k,f0=async(t,e,r)=>{const n=await Ts.compileSchema(t,e),s=await hr.step("minContains",r),i=hr.typeOf(s,"number")?hr.value(s):1,a=await hr.step("maxContains",r),o=hr.typeOf(a,"number")?hr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Ua=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!zt.typeOf(n,"array")&&!zt.typeOf(n,"object"))return!0;const a=zt.entries(n).reduce((o,[,c])=>Ts.interpretSchema(t,c,s,i)?o+1:o,0);return a>=e&&a<=r},p0=(t,e,r,n)=>Ua(t,e,r,n)&&zt.typeOf(e,"array")&&zt.reduce((s,i,a)=>Ts.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e),u0=(t,e,r,n)=>Ua(t,e,r,n)&&zt.typeOf(e,"object")&&zt.entries(e).reduce((s,[i,a])=>(Ts.interpretSchema(t.contains,a,r,n)&&s.push(i),s),[],e);var d0={compile:f0,interpret:Ua,collectEvaluatedItems:p0,collectEvaluatedProperties:u0};const{Core:m0,Schema:h0}=k,li=Pe,y0=async(t,e)=>{await li.pipeline([h0.entries,li.map(([,r])=>m0.compileSchema(r,e)),li.all],t)},$0=()=>!0;var g0={compile:y0,interpret:$0};const{Core:Ap,Schema:fi,Instance:Dc}=k,pi=Pe,v0=(t,e)=>pi.pipeline([fi.entries,pi.map(async([r,n])=>[r,fi.typeOf(n,"array")?fi.value(n):await Ap.compileSchema(n,e)]),pi.all],t),b0=(t,e,r,n)=>{const s=Dc.value(e);return!Dc.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):Ap.interpretSchema(a,e,r,n):!0)};var S0={compile:v0,interpret:b0};const{Schema:Lc,Instance:Mc}=k,ui=Pe,w0=t=>ui.pipeline([Lc.entries,ui.map(([e,r])=>[e,Lc.value(r)]),ui.all],t),I0=(t,e)=>{const r=Mc.value(e);return!Mc.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var E0={compile:w0,interpret:I0};const{Core:Fa,Schema:O0,Instance:Mi}=k,di=Pe,P0=(t,e)=>di.pipeline([O0.entries,di.map(async([r,n])=>[r,await Fa.compileSchema(n,e)]),di.all],t),k0=(t,e,r,n)=>{const s=Mi.value(e);return!Mi.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||Fa.interpretSchema(a,e,r,n))},j0=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!Mi.has(i,e))return s;const o=Fa.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var _0={compile:P0,interpret:k0,collectEvaluatedProperties:j0};const A0=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,x0=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),N0=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Va={isObject:A0,escapeRegExp:x0,splitUrl:N0};const{Core:un,Schema:Yn}=k,{splitUrl:C0}=Va,T0=async(t,e)=>{const[,r]=C0(Yn.value(t)),n=await Yn.get(Yn.value(t),t);return await un.compileSchema(n,e),[n.id,r]},R0=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return un.interpretSchema(s[e],r,n,s);{const i=Yn.getAnchorPointer(n.metaData[t],e);return un.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},q0=un.collectEvaluatedProperties,D0=un.collectEvaluatedItems;var L0={compile:T0,interpret:R0,collectEvaluatedProperties:q0,collectEvaluatedItems:D0};const{Core:Rs,Schema:Bc}=k,{splitUrl:M0}=Va,B0=async(t,e)=>{const[r,n]=M0(Bc.value(t)),s=await Bc.get(r,t);return await Rs.compileSchema(s,e),n},U0=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Rs.interpretSchema(n[t],e,r,n)},F0=Rs.collectEvaluatedProperties,V0=Rs.collectEvaluatedItems;var K0={compile:B0,interpret:U0,collectEvaluatedProperties:F0,collectEvaluatedItems:V0};const{Core:Ka,Schema:z0}=k,J0=z0.value,G0=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Ka.interpretSchema(n[t],e,r,n)},H0=Ka.collectEvaluatedProperties,X0=Ka.collectEvaluatedItems;var W0={compile:J0,interpret:G0,collectEvaluatedProperties:H0,collectEvaluatedItems:X0};const{Schema:Y0,Instance:Q0}=k,xp=qr,Z0=t=>Y0.value(t).map(xp),eS=(t,e)=>t.some(r=>xp(Q0.value(e))===r);var tS={compile:Z0,interpret:eS};const{Schema:rS,Instance:Uc}=k,nS=async t=>rS.value(t),sS=(t,e)=>!Uc.typeOf(e,"number")||Uc.value(e)<t;var iS={compile:nS,interpret:sS};const{Schema:aS,Instance:Fc}=k,oS=async t=>aS.value(t),cS=(t,e)=>!Fc.typeOf(e,"number")||Fc.value(e)>t;var lS={compile:oS,interpret:cS};const{Core:qs}=k,fS=(t,e)=>qs.compileSchema(t,e),pS=(t,e,r,n)=>(qs.interpretSchema(t,e,r,n),!0),uS=(t,e,r,n)=>qs.collectEvaluatedProperties(t,e,r,n)||[],dS=(t,e,r,n)=>qs.collectEvaluatedItems(t,e,r,n)||new Set;var mS={compile:fS,interpret:pS,collectEvaluatedProperties:uS,collectEvaluatedItems:dS};const{Core:jr,Schema:Vc}=k,hS=async(t,e,r)=>{if(Vc.has("if",r)){const n=await Vc.step("if",r);return[await jr.compileSchema(n,e),await jr.compileSchema(t,e)]}else return[]},yS=([t,e],r,n,s)=>t===void 0||!za(t,r,n,s)||jr.interpretSchema(e,r,n,s),za=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>jr.getKeyword(i).interpret(a,e,r,n))},$S=([t,e],r,n,s)=>t===void 0||!za(t,r,n,s)?[]:jr.collectEvaluatedProperties(e,r,n,s),gS=([t,e],r,n,s)=>t===void 0||!za(t,r,n,s)?new Set:jr.collectEvaluatedItems(e,r,n,s);var vS={compile:hS,interpret:yS,collectEvaluatedProperties:$S,collectEvaluatedItems:gS};const{Core:_r,Schema:Kc}=k,bS=async(t,e,r)=>{if(Kc.has("if",r)){const n=await Kc.step("if",r);return[await _r.compileSchema(n,e),await _r.compileSchema(t,e)]}else return[]},SS=([t,e],r,n,s)=>t===void 0||Ja(t,r,n,s)||_r.interpretSchema(e,r,n,s),Ja=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>_r.getKeyword(i).interpret(a,e,r,n))},wS=([t,e],r,n,s)=>t===void 0||Ja(t,r,n,s)?[]:_r.collectEvaluatedProperties(e,r,n,s),IS=([t,e],r,n,s)=>t===void 0||Ja(t,r,n,s)?new Set:_r.collectEvaluatedItems(e,r,n,s);var ES={compile:bS,interpret:SS,collectEvaluatedProperties:wS,collectEvaluatedItems:IS};const{Core:ls,Schema:zc,Instance:Qn}=k,OS=async(t,e)=>{if(zc.typeOf(t,"array")){const r=await zc.map(n=>ls.compileSchema(n,e),t);return Promise.all(r)}else return ls.compileSchema(t,e)},Np=(t,e,r,n)=>Qn.typeOf(e,"array")?typeof t=="string"?Qn.every(s=>ls.interpretSchema(t,s,r,n),e):Qn.every((s,i)=>!(i in t)||ls.interpretSchema(t[i],s,r,n),e):!0,PS=(t,e,r,n)=>Np(t,e,r,n)&&(typeof t=="string"?new Set(Qn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var kS={compile:OS,interpret:Np,collectEvaluatedItems:PS};const{Core:Cp,Schema:mi,Instance:Bi}=k,jS=async(t,e,r)=>{const n=await mi.step("prefixItems",r);return[mi.typeOf(n,"array")?mi.length(n):0,await Cp.compileSchema(t,e)]},Tp=([t,e],r,n,s)=>Bi.typeOf(r,"array")?Bi.every((i,a)=>a<t||Cp.interpretSchema(e,i,n,s),r):!0,_S=(t,e,r,n)=>Tp(t,e,r,n)&&new Set(Bi.map((s,i)=>i,e));var AS={compile:jS,interpret:Tp,collectEvaluatedItems:_S};const{Schema:xS,Instance:Jc}=k,NS=t=>xS.value(t),CS=(t,e)=>!Jc.typeOf(e,"array")||Jc.length(e)<=t;var TS={compile:NS,interpret:CS};const{Schema:RS,Instance:Gc}=k,qS=t=>RS.value(t),DS=(t,e)=>!Gc.typeOf(e,"string")||Gc.length(e)<=t;var LS={compile:qS,interpret:DS};const{Schema:MS,Instance:Hc}=k,BS=t=>MS.value(t),US=(t,e)=>!Hc.typeOf(e,"string")||[...Hc.value(e)].length<=t;var FS={compile:BS,interpret:US};const{Schema:VS,Instance:Xc}=k,KS=t=>VS.value(t),zS=(t,e)=>!Xc.typeOf(e,"object")||Xc.keys(e).length<=t;var JS={compile:KS,interpret:zS};const{Schema:hi,Instance:Wc}=k,GS=async(t,e,r)=>{const n=await hi.step("exclusiveMaximum",r),s=hi.value(n);return[hi.value(t),s]},HS=([t,e],r)=>{if(!Wc.typeOf(r,"number"))return!0;const n=Wc.value(r);return e?n<t:n<=t};var XS={compile:GS,interpret:HS};const{Schema:WS,Instance:Yc}=k,YS=async t=>WS.value(t),QS=(t,e)=>!Yc.typeOf(e,"number")||Yc.value(e)<=t;var ZS={compile:YS,interpret:QS};const{Schema:ew,Instance:Qc}=k,tw=t=>ew.value(t),rw=(t,e)=>!Qc.typeOf(e,"array")||Qc.length(e)>=t;var nw={compile:tw,interpret:rw};const{Schema:sw,Instance:Zc}=k,iw=t=>sw.value(t),aw=(t,e)=>!Zc.typeOf(e,"string")||Zc.length(e)>=t;var ow={compile:iw,interpret:aw};const{Schema:cw,Instance:el}=k,lw=t=>cw.value(t),fw=(t,e)=>!el.typeOf(e,"string")||[...el.value(e)].length>=t;var pw={compile:lw,interpret:fw};const{Schema:uw,Instance:tl}=k,dw=t=>uw.value(t),mw=(t,e)=>!tl.typeOf(e,"object")||tl.keys(e).length>=t;var hw={compile:dw,interpret:mw};const{Schema:yi,Instance:rl}=k,yw=async(t,e,r)=>{const n=await yi.step("exclusiveMinimum",r),s=yi.value(n);return[yi.value(t),s]},$w=([t,e],r)=>{if(!rl.typeOf(r,"number"))return!0;const n=rl.value(r);return e?n>t:n>=t};var gw={compile:yw,interpret:$w};const{Schema:vw,Instance:nl}=k,bw=async t=>vw.value(t),Sw=(t,e)=>!nl.typeOf(e,"number")||nl.value(e)>=t;var ww={compile:bw,interpret:Sw};const{Schema:Iw,Instance:sl}=k,Ew=t=>Iw.value(t),Ow=(t,e)=>{if(!sl.typeOf(e,"number"))return!0;const r=sl.value(e)%t;return il(0,r)||il(t,r)},il=(t,e)=>Math.abs(t-e)<11920929e-14;var Pw={compile:Ew,interpret:Ow};const{Core:Rp}=k,kw=Rp.compileSchema,jw=(t,e,r,n)=>!Rp.interpretSchema(t,e,r,n);var _w={compile:kw,interpret:jw};const{Core:Ds,Schema:Aw}=k,xw=async(t,e)=>{const r=await Aw.map(n=>Ds.compileSchema(n,e),t);return Promise.all(r)},Nw=(t,e,r,n)=>{let s=0;for(const i of t)if(Ds.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},Cw=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Ds.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},Tw=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Ds.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var Rw={compile:xw,interpret:Nw,collectEvaluatedProperties:Cw,collectEvaluatedItems:Tw};const{Schema:Un,Instance:al}=k,qw=async(t,e,r)=>{const n=await Un.value(t),s=await Un.step("properties",r),i=Un.typeOf(s,"object")?Un.keys(s):[],a=new Set(i);return n.forEach(o=>i.remove(o)),[...a]},Dw=(t,e)=>!al.typeOf(e,"object")||t.every(r=>al.value(e).hasOwnProperty(r));var Lw={compile:qw,interpret:Dw};const{Schema:Mw,Instance:ol}=k,Bw=t=>new RegExp(Mw.value(t),"u"),Uw=(t,e)=>!ol.typeOf(e,"string")||t.test(ol.value(e));var Fw={compile:Bw,interpret:Uw};const{Core:qp,Schema:Vw,Instance:cl}=k,$i=Pe,Kw=(t,e)=>$i.pipeline([Vw.entries,$i.map(async([r,n])=>[new RegExp(r,"u"),await qp.compileSchema(n,e)]),$i.all],t),Dp=(t,e,r,n)=>!cl.typeOf(e,"object")||t.every(([s,i])=>cl.entries(e).filter(([a])=>s.test(a)).every(([,a])=>qp.interpretSchema(i,a,r,n))),zw=(t,e,r,n)=>Dp(t,e,r,n)&&t.map(([s])=>s);var Jw={compile:Kw,interpret:Dp,collectEvaluatedProperties:zw};const{Core:Lp,Schema:Gw,Instance:ll}=k,fl=Pe,{escapeRegExp:Hw}=Va,Xw=(t,e)=>fl.pipeline([Gw.entries,fl.reduce(async(r,[n,s])=>(r[n]=await Lp.compileSchema(s,e),r),Object.create(null))],t),Mp=(t,e,r,n)=>!ll.typeOf(e,"object")||ll.entries(e).filter(([s])=>s in t).every(([s,i])=>Lp.interpretSchema(t[s],i,r,n)),Ww=(t,e,r,n)=>Mp(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${Hw(s)}$`));var Yw={compile:Xw,interpret:Mp,collectEvaluatedProperties:Ww};const{Core:Bp,Schema:pl,Instance:gi}=k,Fn=Pe,Qw=async(t,e)=>Fn.pipeline([pl.entries,Fn.reduce(async(r,[n,s])=>(r[n]=await Fn.pipeline([pl.entries,Fn.reduce(async(i,[a,o])=>(i[a]=await Bp.compileSchema(o,e),i),{})],s),r),{})],t),Zw=(t,e,r,n)=>!gi.typeOf(e,"object")||Object.entries(t).every(([s,i])=>!gi.has(s,e)||Bp.interpretSchema(i[gi.value(e)[s]],e,r,n));var e2={compile:Qw,interpret:Zw};const{Core:Up,Instance:vi}=k,t2=(t,e)=>Up.compileSchema(t,e),r2=(t,e,r,n)=>!vi.typeOf(e,"object")||vi.keys(e).every(s=>Up.interpretSchema(t,vi.cons(s),r,n));var n2={compile:t2,interpret:r2};const{Core:Ls,Schema:ul}=k,s2=async(t,e)=>{const r=await ul.get(ul.value(t),t);return Ls.compileSchema(r,e)},i2=Ls.interpretSchema,a2=Ls.collectEvaluatedProperties,o2=Ls.collectEvaluatedItems;var c2={compile:s2,interpret:i2,collectEvaluatedProperties:a2,collectEvaluatedItems:o2};const{Schema:l2,Instance:dl}=k,f2=t=>l2.value(t),p2=(t,e)=>!dl.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(dl.value(e),r));var u2={compile:f2,interpret:p2};const{Core:Fp,Schema:d2,Instance:ml}=k,hl=Pe,m2=(t,e)=>hl.pipeline([d2.map(r=>Fp.compileSchema(r,e)),hl.all],t),Vp=(t,e,r,n)=>ml.typeOf(e,"array")?ml.every((s,i)=>!(i in t)||Fp.interpretSchema(t[i],s,r,n),e):!0,h2=(t,e,r,n)=>Vp(t,e,r,n)&&new Set(t.map((s,i)=>i));var y2={compile:m2,interpret:Vp,collectEvaluatedItems:h2};const{Schema:$2,Instance:yl}=k,g2=t=>$2.value(t),v2=(t,e)=>typeof t=="string"?yl.typeOf(e,t):t.some(yl.typeOf(e));var b2={compile:g2,interpret:v2};const{Core:Ui,Schema:S2,Instance:Zn}=k,w2=async(t,e,r)=>[S2.uri(r),await Ui.compileSchema(t,e)],Kp=([t,e],r,n,s)=>{if(!Zn.typeOf(r,"array"))return!0;const i=Ui.collectEvaluatedItems(t,r,n,s,!0);return i===!1||Zn.every((a,o)=>i.has(o)||Ui.interpretSchema(e,Zn.step(o,r),n,s),r)},I2=(t,e,r,n)=>Kp(t,e,r,n)&&new Set(Zn.map((s,i)=>i,e));var E2={compile:w2,interpret:Kp,collectEvaluatedItems:I2};const{Core:Fi,Schema:O2,Instance:$l}=k,P2=async(t,e,r)=>[O2.uri(r),await Fi.compileSchema(t,e)],zp=([t,e],r,n,s)=>{if(!$l.typeOf(r,"object"))return!0;const i=Fi.collectEvaluatedProperties(t,r,n,s,!0);return!i||$l.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>Fi.interpretSchema(e,a,n,s))},k2=(t,e,r,n)=>zp(t,e,r,n)&&[new RegExp("")];var j2={compile:P2,interpret:zp,collectEvaluatedProperties:k2};const{Schema:_2,Instance:bi}=k,A2=qr,x2=t=>_2.value(t),N2=(t,e)=>{if(!bi.typeOf(e,"array")||t===!1)return!0;const r=bi.map(n=>A2(bi.value(n)),e);return new Set(r).size===r.length};var C2={compile:x2,interpret:N2};const{Keywords:gl}=k;var T2={additionalItems:x1,additionalItems6:T1,additionalProperties:D1,additionalProperties6:B1,allOf:J1,anyOf:Q1,const:n0,contains:a0,containsMinContainsMaxContains:l0,containsMinContainsMaxContainsFUTURE:d0,definitions:g0,dependencies:S0,dependentRequired:E0,dependentSchemas:_0,dynamicRef:L0,dynamicRefNEXT:K0,dynamicRefPROPOSED:W0,enum:tS,exclusiveMaximum:iS,exclusiveMinimum:lS,if:mS,then:vS,else:ES,items:kS,items202012:AS,maxItems:TS,maxLength:LS,maxLength6:FS,maxProperties:JS,maximumExclusiveMaximum:XS,maximum:ZS,metaData:gl.metaData,minItems:nw,minLength:ow,minLength6:pw,minProperties:hw,minimumExclusiveMinimum:gw,minimum:ww,multipleOf:Pw,not:_w,oneOf:Rw,optional:Lw,pattern:Fw,patternProperties:Jw,properties:Yw,propertyDependencies:e2,propertyNames:n2,ref:c2,required:u2,tupleItems:y2,type:b2,unevaluatedItems:E2,unevaluatedProperties:j2,uniqueItems:C2,validate:gl.validate},R2=`{
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
}`,q2=`{
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
}`,D2=`{
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
}`,L2=`{
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
}`,M2=`{
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
}`,B2=`{
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
}`,U2=`{
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
}`,F2=`{
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
}`,V2=`{
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
}`;const{Core:tr,Schema:Me}=k,B=T2,K2=R2,z2=q2,J2=D2,G2=L2,H2=M2,X2=B2,W2=U2,Y2=F2,Q2=V2,Br="https://json-schema.org/draft/next/schema";Me.setConfig(Br,"baseToken","$id");Me.setConfig(Br,"embeddedToken","$id");Me.setConfig(Br,"anchorToken","$anchor");Me.setConfig(Br,"dynamicAnchorToken","$dynamicAnchor");Me.setConfig(Br,"vocabularyToken","$vocabulary");Me.setConfig(Br,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);Me.add(JSON.parse(K2));Me.add(JSON.parse(z2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:B.validate,$defs:B.definitions,$dynamicRef:B.dynamicRefNEXT,$dref:B.dynamicRefPROPOSED,$ref:B.ref});Me.add(JSON.parse(J2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:B.additionalProperties6,allOf:B.allOf,anyOf:B.anyOf,contains:B.containsMinContainsMaxContainsFUTURE,dependentSchemas:B.dependentSchemas,if:B.if,then:B.then,else:B.else,items:B.items202012,not:B.not,oneOf:B.oneOf,patternProperties:B.patternProperties,prefixItems:B.tupleItems,properties:B.properties,propertyDependencies:B.propertyDependencies,propertyNames:B.propertyNames});Me.add(JSON.parse(G2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:B.const,dependentRequired:B.dependentRequired,enum:B.enum,exclusiveMaximum:B.exclusiveMaximum,exclusiveMinimum:B.exclusiveMinimum,maxItems:B.maxItems,maxLength:B.maxLength6,maxProperties:B.maxProperties,maximum:B.maximum,minItems:B.minItems,minLength:B.minLength6,minProperties:B.minProperties,minimum:B.minimum,multipleOf:B.multipleOf,optional:B.optional,pattern:B.pattern,required:B.required,type:B.type,uniqueItems:B.uniqueItems});Me.add(JSON.parse(H2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:B.metaData,deprecated:B.metaData,description:B.metaData,examples:B.metaData,readOnly:B.metaData,title:B.metaData,writeOnly:B.metaData});Me.add(JSON.parse(X2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:B.metaData});Me.add(JSON.parse(W2));Me.add(JSON.parse(Y2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:B.metaData,contentMediaType:B.metaData,contentSchema:B.metaData});Me.add(JSON.parse(Q2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:B.unevaluatedItems,unevaluatedProperties:B.unevaluatedProperties});function Z2(t){return{c:je,l:je,m:je,p:je,i:je,o:je,d:je}}function eI(t){let e,r;return e=new yp({props:{results:t[5]}}),{c(){tt(e.$$.fragment)},l(n){rt(e.$$.fragment,n)},m(n,s){nt(e,n,s),r=!0},p(n,s){const i={};s&32&&(i.results=n[5]),e.$set(i)},i(n){r||(Re(e.$$.fragment,n),r=!0)},o(n){qe(e.$$.fragment,n),r=!1},d(n){st(e,n)}}}function tI(t){return{c:je,l:je,m:je,p:je,i:je,o:je,d:je}}function rI(t){let e,r,n,s,i,a,o,c,l,p,y,m,$,P,u,d,v,E,b,j,S,_,K,Z,w,N,C,R,z,q,X,le,pe;function F(W){t[11](W)}let ve={ns:"schemas",tabs:t[1],newTab:t[7],active:0};t[0]!==void 0&&(ve.format=t[0]),u=new Pc({props:ve}),_t.push(()=>yr(u,"format",F)),u.$on("input",t[9]);function Qe(W){t[12](W)}function be(W){t[13](W)}function Be(W){t[14](W)}let Ue={ns:"instances",tabs:t[2],newTab:t[8]};t[3]!==void 0&&(Ue.selected=t[3]),t[3]!==void 0&&(Ue.active=t[3]),t[0]!==void 0&&(Ue.format=t[0]),b=new Pc({props:Ue}),_t.push(()=>yr(b,"selected",Qe)),_t.push(()=>yr(b,"active",be)),_t.push(()=>yr(b,"format",Be)),b.$on("input",t[10]),w=new yp({props:{results:t[4]}});let ce={ctx:t,current:null,token:null,hasCatch:!1,pending:tI,then:eI,catch:Z2,value:18,blocks:[,,,]};return ts(R=t[4],ce),q=new g1({}),{c(){e=_e(),r=J("div"),n=J("button"),s=ie("JSON"),a=J("button"),o=ie("YAML"),l=_e(),p=J("main"),y=J("h1"),m=ie("Hyperjump - JSON Schema Validator"),$=_e(),P=J("div"),tt(u.$$.fragment),v=_e(),E=J("div"),tt(b.$$.fragment),K=_e(),Z=J("div"),tt(w.$$.fragment),N=_e(),C=J("div"),ce.block.c(),z=_e(),tt(q.$$.fragment),this.h()},l(W){pu('[data-svelte="svelte-14138tz"]',document.head).forEach(A),e=Ae(W),r=G(W,"DIV",{class:!0});var fe=L(r);n=G(fe,"BUTTON",{class:!0});var he=L(n);s=ae(he,"JSON"),he.forEach(A),a=G(fe,"BUTTON",{class:!0});var Fe=L(a);o=ae(Fe,"YAML"),Fe.forEach(A),fe.forEach(A),l=Ae(W),p=G(W,"MAIN",{class:!0});var xe=L(p);y=G(xe,"H1",{class:!0});var rr=L(y);m=ae(rr,"Hyperjump - JSON Schema Validator"),rr.forEach(A),$=Ae(xe),P=G(xe,"DIV",{class:!0});var nr=L(P);rt(u.$$.fragment,nr),nr.forEach(A),v=Ae(xe),E=G(xe,"DIV",{class:!0});var Ur=L(E);rt(b.$$.fragment,Ur),Ur.forEach(A),K=Ae(xe),Z=G(xe,"DIV",{class:!0});var kn=L(Z);rt(w.$$.fragment,kn),kn.forEach(A),N=Ae(xe),C=G(xe,"DIV",{class:!0});var jn=L(C);ce.block.l(jn),jn.forEach(A),z=Ae(xe),rt(q.$$.fragment,xe),xe.forEach(A),this.h()},h(){document.title="Hyperjump - JSON Schema Validator",x(n,"class",i=Cn(t[0]==="json"?"selected":"")+" svelte-ub4xmj"),x(a,"class",c=Cn(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"),x(r,"class","format svelte-ub4xmj"),x(y,"class","svelte-ub4xmj"),x(P,"class","editor-section svelte-ub4xmj"),x(E,"class","editor-section svelte-ub4xmj"),x(Z,"class","results "+bl+" svelte-ub4xmj"),x(C,"class","results "+bl+" svelte-ub4xmj"),x(p,"class","svelte-ub4xmj")},m(W,ne){Q(W,e,ne),Q(W,r,ne),T(r,n),T(n,s),T(r,a),T(a,o),Q(W,l,ne),Q(W,p,ne),T(p,y),T(y,m),T(p,$),T(p,P),nt(u,P,null),T(p,v),T(p,E),nt(b,E,null),T(p,K),T(p,Z),nt(w,Z,null),T(p,N),T(p,C),ce.block.m(C,ce.anchor=null),ce.mount=()=>C,ce.anchor=null,T(p,z),nt(q,p,null),X=!0,le||(pe=[Jt(n,"click",t[6]("json")),Jt(a,"click",t[6]("yaml"))],le=!0)},p(W,[ne]){t=W,(!X||ne&1&&i!==(i=Cn(t[0]==="json"?"selected":"")+" svelte-ub4xmj"))&&x(n,"class",i),(!X||ne&1&&c!==(c=Cn(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"))&&x(a,"class",c);const fe={};ne&2&&(fe.tabs=t[1]),!d&&ne&1&&(d=!0,fe.format=t[0],$r(()=>d=!1)),u.$set(fe);const he={};ne&4&&(he.tabs=t[2]),!j&&ne&8&&(j=!0,he.selected=t[3],$r(()=>j=!1)),!S&&ne&8&&(S=!0,he.active=t[3],$r(()=>S=!1)),!_&&ne&1&&(_=!0,he.format=t[0],$r(()=>_=!1)),b.$set(he);const Fe={};ne&16&&(Fe.results=t[4]),w.$set(Fe),ce.ctx=t,ne&16&&R!==(R=t[4])&&ts(R,ce)||wl(ce,t,ne)},i(W){X||(Re(u.$$.fragment,W),Re(b.$$.fragment,W),Re(w.$$.fragment,W),Re(ce.block),Re(q.$$.fragment,W),X=!0)},o(W){qe(u.$$.fragment,W),qe(b.$$.fragment,W),qe(w.$$.fragment,W);for(let ne=0;ne<3;ne+=1){const fe=ce.blocks[ne];qe(fe)}qe(q.$$.fragment,W),X=!1},d(W){W&&A(e),W&&A(r),W&&A(l),W&&A(p),st(u),st(b),st(w),ce.block.d(),ce.token=null,ce=null,st(q),le=!1,Sl(pe)}}}const vl=750,Si="https://json-schema.org/draft/2020-12/schema",Zr="https://json-schema.hyperjump.io/schema",bl="solarized-dark";function nI(t,e,r){let n,s,i="json";const a=(S,_)=>_==="yaml"?Io.parse(S):JSON.parse(S),o={json:S=>`{
  "$id": "${S}",
  "$schema": "${Si}"
}`,yaml:S=>`$id: '${S}'
$schema: '${Si}'`},c=S=>()=>{r(0,i=S),r(1,y=[l("Schema",Zr,!0)]),r(2,m=[p("Instance")]),r(3,$=0)},l=function(){let S=1;return(_=void 0,K=void 0,Z=!1)=>{const w=K||`${Zr}${++S}`;return{label:_||`Schema ${S}`,text:o[i](w),persistent:Z}}}(),p=function(){let S=1;return()=>({label:`Instance ${S++}`,text:""})}();let y=[l("Schema",Zr,!0)],m=[p("Instance")],$=0;const P=function(S,_){let K;return({detail:Z})=>{clearTimeout(K),K=setTimeout(()=>S(Z),_)}},u=P(S=>r(1,y=S),vl),d=P(S=>r(2,m=S),vl);we.setMetaOutputFormat(we.BASIC),we.addMediaTypePlugin("application/schema+yaml",{parse:async S=>[Io.parse(await S.text(),void 0)],matcher:S=>S.endsWith(".schema.yaml")});function v(S){i=S,r(0,i)}function E(S){$=S,r(3,$)}function b(S){$=S,r(3,$)}function j(S){i=S,r(0,i)}return t.$$.update=()=>{t.$$.dirty&3&&r(4,n=async function(){y.forEach((_,K)=>{const Z=K===0?Zr:"";we.add(a(_.text||"true",i),Z,Si)});const S=await we.get(Zr);return we.validate(S)}()),t.$$.dirty&29&&r(5,s=async function(){if(m[$].text!==""){let S;try{S=await n}catch{}if(S){const _=S(a(m[$].text,i),we.BASIC);if(_.valid)return _;throw{output:_}}}}())},[i,y,m,$,n,s,c,l,p,u,d,v,E,b,j]}class iI extends qt{constructor(e){super(),Dt(this,e,nI,rI,Lt,{})}}export{iI as default};
