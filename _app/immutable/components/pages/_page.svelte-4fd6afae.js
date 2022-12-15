import{S as qt,i as Rt,s as Dt,k as J,a as Ae,q as ie,l as G,m as L,h as A,c as Ne,r as ae,n as N,b as Q,G as T,I as vo,J as zt,B as xe,K as ts,L as kl,e as Ct,M as yu,N as _t,u as Ue,O as hr,w as tt,x as rt,y as nt,P as yr,f as Le,t as Me,z as st,Q as $u,R as bo,T as rs,U as jl,C as Ji,V as dt,W as mt,D as Gi,E as Hi,F as Xi,p as Cn,X as gu,Y as Tn}from"../../chunks/index-2d563024.js";const Wi=Symbol.for("yaml.alias"),Ii=Symbol.for("yaml.document"),Nt=Symbol.for("yaml.map"),_l=Symbol.for("yaml.pair"),It=Symbol.for("yaml.scalar"),xr=Symbol.for("yaml.seq"),Qe=Symbol.for("yaml.node.type"),Wt=t=>!!t&&typeof t=="object"&&t[Qe]===Wi,mn=t=>!!t&&typeof t=="object"&&t[Qe]===Ii,Yt=t=>!!t&&typeof t=="object"&&t[Qe]===Nt,ve=t=>!!t&&typeof t=="object"&&t[Qe]===_l,de=t=>!!t&&typeof t=="object"&&t[Qe]===It,Ar=t=>!!t&&typeof t=="object"&&t[Qe]===xr;function be(t){if(t&&typeof t=="object")switch(t[Qe]){case Nt:case xr:return!0}return!1}function Pe(t){if(t&&typeof t=="object")switch(t[Qe]){case Wi:case Nt:case It:case xr:return!0}return!1}const vu=t=>(de(t)||be(t))&&!!t.anchor;class Yi{constructor(e){Object.defineProperty(this,Qe,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}}const Ve=Symbol("break visit"),xl=Symbol("skip children"),ht=Symbol("remove node");function Tt(t,e){const r=Al(e);mn(t)?$r(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):$r(null,t,r,Object.freeze([]))}Tt.BREAK=Ve;Tt.SKIP=xl;Tt.REMOVE=ht;function $r(t,e,r,n){const s=Nl(t,e,r,n);if(Pe(s)||ve(s))return Cl(t,n,s),$r(t,s,r,n);if(typeof s!="symbol"){if(be(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=$r(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ve(e)){n=Object.freeze(n.concat(e));const i=$r("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=$r("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}async function us(t,e){const r=Al(e);mn(t)?await gr(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):await gr(null,t,r,Object.freeze([]))}us.BREAK=Ve;us.SKIP=xl;us.REMOVE=ht;async function gr(t,e,r,n){const s=await Nl(t,e,r,n);if(Pe(s)||ve(s))return Cl(t,n,s),gr(t,s,r,n);if(typeof s!="symbol"){if(be(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=await gr(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ve(e)){n=Object.freeze(n.concat(e));const i=await gr("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=await gr("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}function Al(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function Nl(t,e,r,n){var s,i,a,o,c;if(typeof r=="function")return r(t,e,n);if(Yt(e))return(s=r.Map)==null?void 0:s.call(r,t,e,n);if(Ar(e))return(i=r.Seq)==null?void 0:i.call(r,t,e,n);if(ve(e))return(a=r.Pair)==null?void 0:a.call(r,t,e,n);if(de(e))return(o=r.Scalar)==null?void 0:o.call(r,t,e,n);if(Wt(e))return(c=r.Alias)==null?void 0:c.call(r,t,e,n)}function Cl(t,e,r){const n=e[e.length-1];if(be(n))n.items[t]=r;else if(ve(n))t==="key"?n.key=r:n.value=r;else if(mn(n))n.contents=r;else{const s=Wt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const bu={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},Su=t=>t.replace(/[!,[\]{}]/g,e=>bu[e]);class De{constructor(e,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},De.defaultYaml,e),this.tags=Object.assign({},De.defaultTags,r)}clone(){const e=new De(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new De(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:De.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},De.defaultTags);break}return e}add(e,r){this.atNextDocument&&(this.yaml={explicit:De.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},De.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[i,a]=n;return this.tags[i]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[i]=n;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const a=/^\d+\.\d+$/.test(i);return r(6,`Unsupported YAML version ${i}`,a),!1}}default:return r(0,`Unknown directive ${s}`,!0),!1}}tagName(e,r){if(e==="!")return"!";if(e[0]!=="!")return r(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(r(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&r("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/);s||r(`The ${e} tag has no suffix`);const i=this.tags[n];return i?i+decodeURIComponent(s):n==="!"?e:(r(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[r,n]of Object.entries(this.tags))if(e.startsWith(n))return r+Su(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&Pe(e.contents)){const i={};Tt(e.contents,(a,o)=>{Pe(o)&&o.tag&&(i[o.tag]=!0)}),s=Object.keys(i)}else s=[];for(const[i,a]of n)i==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&r.push(`%TAG ${i} ${a}`);return r.join(`
`)}}De.defaultYaml={explicit:!1,version:"1.2"};De.defaultTags={"!!":"tag:yaml.org,2002:"};function Tl(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(r)}return!0}function ql(t){const e=new Set;return Tt(t,{Value(r,n){n.anchor&&e.add(n.anchor)}}),e}function Rl(t,e){for(let r=1;;++r){const n=`${t}${r}`;if(!e.has(n))return n}}function wu(t,e){const r=[],n=new Map;let s=null;return{onAnchor:i=>{r.push(i),s||(s=ql(t));const a=Rl(e,s);return s.add(a),a},setAnchors:()=>{for(const i of r){const a=n.get(i);if(typeof a=="object"&&a.anchor&&(de(a.node)||be(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=i,o}}},sourceObjects:n}}class ds extends Yi{constructor(e){super(Wi),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let r;return Tt(e,{Node:(n,s)=>{if(s===this)return Tt.BREAK;s.anchor===this.source&&(r=s)}}),r}toJSON(e,r){if(!r)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:i}=r,a=this.resolve(s);if(!a){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}const o=n.get(a);if(!o||o.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Kn(s,a,n)),o.count*o.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return o.res}toString(e,r,n){const s=`*${this.source}`;if(e){if(Tl(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${s} `}return s}}function Kn(t,e,r){if(Wt(e)){const n=e.resolve(t),s=r&&n&&r.get(n);return s?s.count*s.aliasCount:0}else if(be(e)){let n=0;for(const s of e.items){const i=Kn(t,s,r);i>n&&(n=i)}return n}else if(ve(e)){const n=Kn(t,e.key,r),s=Kn(t,e.value,r);return Math.max(n,s)}return 1}function yt(t,e,r){if(Array.isArray(t))return t.map((n,s)=>yt(n,String(s),r));if(t&&typeof t.toJSON=="function"){if(!r||!vu(t))return t.toJSON(e,r);const n={aliasCount:0,count:1,res:void 0};r.anchors.set(t,n),r.onCreate=i=>{n.res=i,delete r.onCreate};const s=t.toJSON(e,r);return r.onCreate&&r.onCreate(s),s}return typeof t=="bigint"&&!(r!=null&&r.keep)?Number(t):t}const Dl=t=>!t||typeof t!="function"&&typeof t!="object";class Y extends Yi{constructor(e){super(It),this.value=e}toJSON(e,r){return r!=null&&r.keep?this.value:yt(this.value,e,r)}toString(){return String(this.value)}}Y.BLOCK_FOLDED="BLOCK_FOLDED";Y.BLOCK_LITERAL="BLOCK_LITERAL";Y.PLAIN="PLAIN";Y.QUOTE_DOUBLE="QUOTE_DOUBLE";Y.QUOTE_SINGLE="QUOTE_SINGLE";const Eu="tag:yaml.org,2002:";function Iu(t,e,r){if(e){const n=r.filter(i=>i.tag===e),s=n.find(i=>!i.format)??n[0];if(!s)throw new Error(`Tag ${e} not found`);return s}return r.find(n=>{var s;return((s=n.identify)==null?void 0:s.call(n,t))&&!n.format})}function cn(t,e,r){var u,d;if(mn(t)&&(t=t.contents),Pe(t))return t;if(ve(t)){const g=(d=(u=r.schema[Nt]).createNode)==null?void 0:d.call(u,r.schema,null,r);return g.items.push(t),g}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt<"u"&&t instanceof BigInt)&&(t=t.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:i,schema:a,sourceObjects:o}=r;let c;if(n&&t&&typeof t=="object"){if(c=o.get(t),c)return c.anchor||(c.anchor=s(t)),new ds(c.anchor);c={anchor:null,node:null},o.set(t,c)}e!=null&&e.startsWith("!!")&&(e=Eu+e.slice(2));let l=Iu(t,e,a.tags);if(!l){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){const g=new Y(t);return c&&(c.node=g),g}l=t instanceof Map?a[Nt]:Symbol.iterator in Object(t)?a[xr]:a[Nt]}i&&(i(l),delete r.onTagObj);const p=l!=null&&l.createNode?l.createNode(r.schema,t,r):new Y(t);return e&&(p.tag=e),c&&(c.node=p),p}function ns(t,e,r){let n=r;for(let s=e.length-1;s>=0;--s){const i=e[s];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const a=[];a[i]=n,n=a}else n=new Map([[i,n]])}return cn(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}const en=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class ms extends Yi{constructor(e,r){super(e),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(e){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(r.schema=e),r.items=r.items.map(n=>Pe(n)||ve(n)?n.clone(e):n),this.range&&(r.range=this.range.slice()),r}addIn(e,r){if(en(e))this.add(r);else{const[n,...s]=e,i=this.get(n,!0);if(be(i))i.addIn(s,r);else if(i===void 0&&this.schema)this.set(n,ns(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[r,...n]=e;if(n.length===0)return this.delete(r);const s=this.get(r,!0);if(be(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}getIn(e,r){const[n,...s]=e,i=this.get(n,!0);return s.length===0?!r&&de(i)?i.value:i:be(i)?i.getIn(s,r):void 0}hasAllNullValues(e){return this.items.every(r=>{if(!ve(r))return!1;const n=r.value;return n==null||e&&de(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[r,...n]=e;if(n.length===0)return this.has(r);const s=this.get(r,!0);return be(s)?s.hasIn(n):!1}setIn(e,r){const[n,...s]=e;if(s.length===0)this.set(n,r);else{const i=this.get(n,!0);if(be(i))i.setIn(s,r);else if(i===void 0&&this.schema)this.set(n,ns(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}ms.maxFlowStringSingleLineLength=60;const Ou=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function St(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}const xt=(t,e,r)=>t.endsWith(`
`)?St(r,e):r.includes(`
`)?`
`+St(r,e):(t.endsWith(" ")?"":" ")+r,Ll="flow",Oi="block",zn="quoted";function hs(t,e,r="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:i=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return t;const c=Math.max(1+i,1+s-e.length);if(t.length<=c)return t;const l=[],p={};let u=s-e.length;typeof n=="number"&&(n>s-Math.max(2,i)?l.push(0):u=s-n);let d,g,O=!1,m=-1,h=-1,v=-1;r===Oi&&(m=So(t,m),m!==-1&&(u=m+c));for(let b;b=t[m+=1];){if(r===zn&&b==="\\"){switch(h=m,t[m+1]){case"x":m+=3;break;case"u":m+=5;break;case"U":m+=9;break;default:m+=1}v=m}if(b===`
`)r===Oi&&(m=So(t,m)),u=m+c,d=void 0;else{if(b===" "&&g&&g!==" "&&g!==`
`&&g!=="	"){const k=t[m+1];k&&k!==" "&&k!==`
`&&k!=="	"&&(d=m)}if(m>=u)if(d)l.push(d),u=d+c,d=void 0;else if(r===zn){for(;g===" "||g==="	";)g=b,b=t[m+=1],O=!0;const k=m>v+1?m-2:h-1;if(p[k])return t;l.push(k),p[k]=!0,u=k+c,d=void 0}else O=!0}g=b}if(O&&o&&o(),l.length===0)return t;a&&a();let S=t.slice(0,l[0]);for(let b=0;b<l.length;++b){const k=l[b],P=l[b+1]||t.length;k===0?S=`
${e}${t.slice(0,P)}`:(r===zn&&p[k]&&(S+=`${t[k]}\\`),S+=`
${e}${t.slice(k+1,P)}`)}return S}function So(t,e){let r=t[e+1];for(;r===" "||r==="	";){do r=t[e+=1];while(r&&r!==`
`);r=t[e+1]}return e}const ys=t=>({indentAtStart:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),$s=t=>/^(%|---|\.\.\.)/m.test(t);function Pu(t,e,r){if(!e||e<0)return!1;const n=e-r,s=t.length;if(s<=n)return!1;for(let i=0,a=0;i<s;++i)if(t[i]===`
`){if(i-a>n)return!0;if(a=i+1,s-a<=n)return!1}return!0}function nn(t,e){const r=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return r;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,i=e.indent||($s(t)?"  ":"");let a="",o=0;for(let c=0,l=r[c];l;l=r[++c])if(l===" "&&r[c+1]==="\\"&&r[c+2]==="n"&&(a+=r.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(r[c+1]){case"u":{a+=r.slice(o,c);const p=r.substr(c+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=r.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||r[c+2]==='"'||r.length<s)c+=1;else{for(a+=r.slice(o,c)+`

`;r[c+2]==="\\"&&r[c+3]==="n"&&r[c+4]!=='"';)a+=`
`,c+=2;a+=i,r[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+r.slice(o):r,n?a:hs(a,i,zn,ys(e))}function Pi(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return nn(t,e);const r=e.indent||($s(t)?"  ":""),n="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return e.implicitKey?n:hs(n,r,Ll,ys(e))}function sn(t,e){const{singleQuote:r}=e.options;let n;if(r===!1)n=nn;else{const s=t.includes('"'),i=t.includes("'");s&&!i?n=Pi:i&&!s?n=nn:n=r?Pi:nn}return n(t,e)}function Jn({comment:t,type:e,value:r},n,s,i){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(r)||/^\s*$/.test(r))return sn(r,n);const l=n.indent||(n.forceBlockIndent||$s(r)?"  ":""),p=a==="literal"?!0:a==="folded"||e===Y.BLOCK_FOLDED?!1:e===Y.BLOCK_LITERAL?!0:!Pu(r,c,l.length);if(!r)return p?`|
`:`>
`;let u,d;for(d=r.length;d>0;--d){const _=r[d-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let g=r.substring(d);const O=g.indexOf(`
`);O===-1?u="-":r===g||O!==g.length-1?(u="+",i&&i()):u="",g&&(r=r.slice(0,-g.length),g[g.length-1]===`
`&&(g=g.slice(0,-1)),g=g.replace(/\n+(?!\n|$)/g,`$&${l}`));let m=!1,h,v=-1;for(h=0;h<r.length;++h){const _=r[h];if(_===" ")m=!0;else if(_===`
`)v=h;else break}let S=r.substring(0,v<h?v+1:h);S&&(r=r.substring(S.length),S=S.replace(/\n+/g,`$&${l}`));let k=(p?"|":">")+(m?l?"2":"1":"")+u;if(t&&(k+=" "+o(t.replace(/ ?[\r\n]+/g," ")),s&&s()),p)return r=r.replace(/\n+/g,`$&${l}`),`${k}
${l}${S}${r}${g}`;r=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);const P=hs(`${S}${r}${g}`,l,Oi,ys(n));return`${k}
${l}${P}`}function ku(t,e,r,n){const{type:s,value:i}=t,{actualString:a,implicitKey:o,indent:c,inFlow:l}=e;if(o&&/[\n[\]{},]/.test(i)||l&&/[[\]{},]/.test(i))return sn(i,e);if(!i||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return o||l||!i.includes(`
`)?sn(i,e):Jn(t,e,r,n);if(!o&&!l&&s!==Y.PLAIN&&i.includes(`
`))return Jn(t,e,r,n);if(c===""&&$s(i))return e.forceBlockIndent=!0,Jn(t,e,r,n);const p=i.replace(/\n+/g,`$&
${c}`);if(a){const u=O=>{var m;return O.default&&O.tag!=="tag:yaml.org,2002:str"&&((m=O.test)==null?void 0:m.test(p))},{compat:d,tags:g}=e.doc.schema;if(g.some(u)||d!=null&&d.some(u))return sn(i,e)}return o?p:hs(p,c,Ll,ys(e))}function hn(t,e,r,n){const{implicitKey:s,inFlow:i}=e,a=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:o}=t;o!==Y.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=Y.QUOTE_DOUBLE);const c=p=>{switch(p){case Y.BLOCK_FOLDED:case Y.BLOCK_LITERAL:return s||i?sn(a.value,e):Jn(a,e,r,n);case Y.QUOTE_DOUBLE:return nn(a.value,e);case Y.QUOTE_SINGLE:return Pi(a.value,e);case Y.PLAIN:return ku(a,e,r,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:p,defaultStringType:u}=e.options,d=s&&p||u;if(l=c(d),l===null)throw new Error(`Unsupported default string type ${d}`)}return l}function Ml(t,e){const r=Object.assign({blockQuote:!0,commentString:Ou,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e);let n;switch(r.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:t,indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:n,options:r}}function ju(t,e){var s;if(e.tag){const i=t.filter(a=>a.tag===e.tag);if(i.length>0)return i.find(a=>a.format===e.format)??i[0]}let r,n;if(de(e)){n=e.value;const i=t.filter(a=>{var o;return(o=a.identify)==null?void 0:o.call(a,n)});r=i.find(a=>a.format===e.format)??i.find(a=>!a.format)}else n=e,r=t.find(i=>i.nodeClass&&n instanceof i.nodeClass);if(!r){const i=((s=n==null?void 0:n.constructor)==null?void 0:s.name)??typeof n;throw new Error(`Tag not resolved for ${i} value`)}return r}function _u(t,e,{anchors:r,doc:n}){if(!n.directives)return"";const s=[],i=(de(t)||be(t))&&t.anchor;i&&Tl(i)&&(r.add(i),s.push(`&${i}`));const a=t.tag?t.tag:e.default?null:e.tag;return a&&s.push(n.directives.tagString(a)),s.join(" ")}function Jt(t,e,r,n){var c;if(ve(t))return t.toString(e,r,n);if(Wt(t)){if(e.doc.directives)return t.toString(e);if((c=e.resolvedAliases)!=null&&c.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let s;const i=Pe(t)?t:e.doc.createNode(t,{onTagObj:l=>s=l});s||(s=ju(e.doc.schema.tags,i));const a=_u(i,s,e);a.length>0&&(e.indentAtStart=(e.indentAtStart??0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(i,e,r,n):de(i)?hn(i,e,r,n):i.toString(e,r,n);return a?de(i)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function xu({key:t,value:e},r,n,s){const{allNullValues:i,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:p,simpleKeys:u}}=r;let d=Pe(t)&&t.comment||null;if(u){if(d)throw new Error("With simple keys, key nodes cannot have comments");if(be(t)){const _="With simple keys, collection cannot be used as a key value";throw new Error(_)}}let g=!u&&(!t||d&&e==null&&!r.inFlow||be(t)||(de(t)?t.type===Y.BLOCK_FOLDED||t.type===Y.BLOCK_LITERAL:typeof t=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!g&&(u||!i),indent:o+c});let O=!1,m=!1,h=Jt(t,r,()=>O=!0,()=>m=!0);if(!g&&!r.inFlow&&h.length>1024){if(u)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");g=!0}if(r.inFlow){if(i||e==null)return O&&n&&n(),h===""?"?":g?`? ${h}`:h}else if(i&&!u||e==null&&g)return h=`? ${h}`,d&&!O?h+=xt(h,r.indent,l(d)):m&&s&&s(),h;O&&(d=null),g?(d&&(h+=xt(h,r.indent,l(d))),h=`? ${h}
${o}:`):(h=`${h}:`,d&&(h+=xt(h,r.indent,l(d))));let v="",S=null;if(Pe(e)){if(e.spaceBefore&&(v=`
`),e.commentBefore){const _=l(e.commentBefore);v+=`
${St(_,r.indent)}`}S=e.comment}else e&&typeof e=="object"&&(e=a.createNode(e));r.implicitKey=!1,!g&&!d&&de(e)&&(r.indentAtStart=h.length+1),m=!1,!p&&c.length>=2&&!r.inFlow&&!g&&Ar(e)&&!e.flow&&!e.tag&&!e.anchor&&(r.indent=r.indent.substr(2));let b=!1;const k=Jt(e,r,()=>b=!0,()=>m=!0);let P=" ";return v||d?k===""&&!r.inFlow?P=v===`
`?`

`:v:P=`${v}
${r.indent}`:!g&&be(e)?(!(k[0]==="["||k[0]==="{")||k.includes(`
`))&&(P=`
${r.indent}`):(k===""||k[0]===`
`)&&(P=""),h+=P+k,r.inFlow?b&&n&&n():S&&!b?h+=xt(h,r.indent,l(S)):m&&s&&s(),h}function Ul(t,e){(t==="debug"||t==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const wo="<<";function Bl(t,e,{key:r,value:n}){if(t!=null&&t.doc.schema.merge&&Au(r))if(n=Wt(n)?n.resolve(t.doc):n,Ar(n))for(const s of n.items)Vs(t,e,s);else if(Array.isArray(n))for(const s of n)Vs(t,e,s);else Vs(t,e,n);else{const s=yt(r,"",t);if(e instanceof Map)e.set(s,yt(n,s,t));else if(e instanceof Set)e.add(s);else{const i=Nu(r,s,t),a=yt(n,i,t);i in e?Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[i]=a}}return e}const Au=t=>t===wo||de(t)&&t.value===wo&&(!t.type||t.type===Y.PLAIN);function Vs(t,e,r){const n=t&&Wt(r)?r.resolve(t.doc):r;if(!Yt(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,t,Map);for(const[i,a]of s)e instanceof Map?e.has(i)||e.set(i,a):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function Nu(t,e,r){if(e===null)return"";if(typeof e!="object")return String(e);if(Pe(t)&&r&&r.doc){const n=Ml(r.doc,{});n.anchors=new Set;for(const i of r.anchors.keys())n.anchors.add(i.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=t.toString(n);if(!r.mapKeyWarned){let i=JSON.stringify(s);i.length>40&&(i=i.substring(0,36)+'..."'),Ul(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return s}return JSON.stringify(e)}function Qi(t,e,r){const n=cn(t,void 0,r),s=cn(e,void 0,r);return new qe(n,s)}class qe{constructor(e,r=null){Object.defineProperty(this,Qe,{value:_l}),this.key=e,this.value=r}clone(e){let{key:r,value:n}=this;return Pe(r)&&(r=r.clone(e)),Pe(n)&&(n=n.clone(e)),new qe(r,n)}toJSON(e,r){const n=r!=null&&r.mapAsMap?new Map:{};return Bl(r,n,this)}toString(e,r,n){return e!=null&&e.doc?xu(this,e,r,n):JSON.stringify(this)}}function Fl(t,e,r){return(e.inFlow??t.flow?Tu:Cu)(t,e,r)}function Cu({comment:t,items:e},r,{blockItemPrefix:n,flowChars:s,itemIndent:i,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=r,p=Object.assign({},r,{indent:i,type:null});let u=!1;const d=[];for(let O=0;O<e.length;++O){const m=e[O];let h=null;if(Pe(m))!u&&m.spaceBefore&&d.push(""),ss(r,d,m.commentBefore,u),m.comment&&(h=m.comment);else if(ve(m)){const S=Pe(m.key)?m.key:null;S&&(!u&&S.spaceBefore&&d.push(""),ss(r,d,S.commentBefore,u))}u=!1;let v=Jt(m,p,()=>h=null,()=>u=!0);h&&(v+=xt(v,i,l(h))),u&&h&&(u=!1),d.push(n+v)}let g;if(d.length===0)g=s.start+s.end;else{g=d[0];for(let O=1;O<d.length;++O){const m=d[O];g+=m?`
${c}${m}`:`
`}}return t?(g+=`
`+St(l(t),c),o&&o()):u&&a&&a(),g}function Tu({comment:t,items:e},r,{flowChars:n,itemIndent:s,onComment:i}){const{indent:a,indentStep:o,options:{commentString:c}}=r;s+=o;const l=Object.assign({},r,{indent:s,inFlow:!0,type:null});let p=!1,u=0;const d=[];for(let h=0;h<e.length;++h){const v=e[h];let S=null;if(Pe(v))v.spaceBefore&&d.push(""),ss(r,d,v.commentBefore,!1),v.comment&&(S=v.comment);else if(ve(v)){const k=Pe(v.key)?v.key:null;k&&(k.spaceBefore&&d.push(""),ss(r,d,k.commentBefore,!1),k.comment&&(p=!0));const P=Pe(v.value)?v.value:null;P?(P.comment&&(S=P.comment),P.commentBefore&&(p=!0)):v.value==null&&k&&k.comment&&(S=k.comment)}S&&(p=!0);let b=Jt(v,l,()=>S=null);h<e.length-1&&(b+=","),S&&(b+=xt(b,s,c(S))),!p&&(d.length>u||b.includes(`
`))&&(p=!0),d.push(b),u=d.length}let g;const{start:O,end:m}=n;if(d.length===0)g=O+m;else if(p||(p=d.reduce((v,S)=>v+S.length+2,2)>ms.maxFlowStringSingleLineLength),p){g=O;for(const h of d)g+=h?`
${o}${a}${h}`:`
`;g+=`
${a}${m}`}else g=`${O} ${d.join(" ")} ${m}`;return t&&(g+=xt(g,c(t),a),i&&i()),g}function ss({indent:t,options:{commentString:e}},r,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const i=St(e(n),t);r.push(i.trimStart())}}function Ft(t,e){const r=de(e)?e.value:e;for(const n of t)if(ve(n)&&(n.key===e||n.key===r||de(n.key)&&n.key.value===r))return n}class Ye extends ms{constructor(e){super(Nt,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(e,r){var a;let n;ve(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new qe(e,e==null?void 0:e.value):n=new qe(e.key,e.value);const s=Ft(this.items,n.key),i=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!r)throw new Error(`Key ${n.key} already set`);de(s.value)&&Dl(n.value)?s.value.value=n.value:s.value=n.value}else if(i){const o=this.items.findIndex(c=>i(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const r=Ft(this.items,e);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(e,r){const n=Ft(this.items,e),s=n==null?void 0:n.value;return(!r&&de(s)?s.value:s)??void 0}has(e){return!!Ft(this.items,e)}set(e,r){this.add(new qe(e,r),!0)}toJSON(e,r,n){const s=n?new n:r!=null&&r.mapAsMap?new Map:{};r!=null&&r.onCreate&&r.onCreate(s);for(const i of this.items)Bl(r,s,i);return s}toString(e,r,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!ve(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Fl(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:r})}}function qu(t,e,r){const{keepUndefined:n,replacer:s}=r,i=new Ye(t),a=(o,c)=>{if(typeof s=="function")c=s.call(e,o,c);else if(Array.isArray(s)&&!s.includes(o))return;(c!==void 0||n)&&i.items.push(Qi(o,c,r))};if(e instanceof Map)for(const[o,c]of e)a(o,c);else if(e&&typeof e=="object")for(const o of Object.keys(e))a(o,e[o]);return typeof t.sortMapEntries=="function"&&i.items.sort(t.sortMapEntries),i}const Nr={collection:"map",createNode:qu,default:!0,nodeClass:Ye,tag:"tag:yaml.org,2002:map",resolve(t,e){return Yt(t)||e("Expected a mapping for this tag"),t}};class Qt extends ms{constructor(e){super(xr,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(e){this.items.push(e)}delete(e){const r=qn(e);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(e,r){const n=qn(e);if(typeof n!="number")return;const s=this.items[n];return!r&&de(s)?s.value:s}has(e){const r=qn(e);return typeof r=="number"&&r<this.items.length}set(e,r){const n=qn(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];de(s)&&Dl(r)?s.value=r:this.items[n]=r}toJSON(e,r){const n=[];r!=null&&r.onCreate&&r.onCreate(n);let s=0;for(const i of this.items)n.push(yt(i,String(s++),r));return n}toString(e,r,n){return e?Fl(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:r}):JSON.stringify(this)}}function qn(t){let e=de(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Ru(t,e,r){const{replacer:n}=r,s=new Qt(t);if(e&&Symbol.iterator in Object(e)){let i=0;for(let a of e){if(typeof n=="function"){const o=e instanceof Set?a:String(i++);a=n.call(e,o,a)}s.items.push(cn(a,void 0,r))}}return s}const Cr={collection:"seq",createNode:Ru,default:!0,nodeClass:Qt,tag:"tag:yaml.org,2002:seq",resolve(t,e){return Ar(t)||e("Expected a sequence for this tag"),t}},gs={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify(t,e,r,n){return e=Object.assign({actualString:!0},e),hn(t,e,r,n)}},vs={identify:t=>t==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new Y(null),stringify:({source:t},e)=>typeof t=="string"&&vs.test.test(t)?t:e.options.nullStr},Zi={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new Y(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},r){if(t&&Zi.test.test(t)){const n=t[0]==="t"||t[0]==="T";if(e===n)return t}return e?r.options.trueStr:r.options.falseStr}};function at({format:t,minFractionDigits:e,tag:r,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let i=JSON.stringify(n);if(!t&&e&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let a=i.indexOf(".");a<0&&(a=i.length,i+=".");let o=e-(i.length-a-1);for(;o-- >0;)i+="0"}return i}const Vl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:at},Kl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():at(t)}},zl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const e=new Y(parseFloat(t)),r=t.indexOf(".");return r!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-r-1),e},stringify:at},bs=t=>typeof t=="bigint"||Number.isInteger(t),ea=(t,e,r,{intAsBigInt:n})=>n?BigInt(t):parseInt(t.substring(e),r);function Jl(t,e,r){const{value:n}=t;return bs(n)&&n>=0?r+n.toString(e):at(t)}const Gl={identify:t=>bs(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,r)=>ea(t,2,8,r),stringify:t=>Jl(t,8,"0o")},Hl={identify:bs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,r)=>ea(t,0,10,r),stringify:at},Xl={identify:t=>bs(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,r)=>ea(t,2,16,r),stringify:t=>Jl(t,16,"0x")},Du=[Nr,Cr,gs,vs,Zi,Gl,Hl,Xl,Vl,Kl,zl];function Eo(t){return typeof t=="bigint"||Number.isInteger(t)}const Rn=({value:t})=>JSON.stringify(t),Lu=[{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:Rn},{identify:t=>t==null,createNode:()=>new Y(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Rn},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:t=>t==="true",stringify:Rn},{identify:Eo,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:r})=>r?BigInt(t):parseInt(t,10),stringify:({value:t})=>Eo(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:Rn}],Mu={default:!0,tag:"",test:/^/,resolve(t,e){return e(`Unresolved plain scalar ${JSON.stringify(t)}`),t}},Uu=[Nr,Cr].concat(Lu,Mu),ta={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof Buffer=="function")return Buffer.from(t,"base64");if(typeof atob=="function"){const r=atob(t.replace(/[\n\r]/g,"")),n=new Uint8Array(r.length);for(let s=0;s<r.length;++s)n[s]=r.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:r},n,s,i){const a=r;let o;if(typeof Buffer=="function")o=a instanceof Buffer?a.toString("base64"):Buffer.from(a.buffer).toString("base64");else if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=Y.BLOCK_LITERAL),e!==Y.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),p=new Array(l);for(let u=0,d=0;u<l;++u,d+=c)p[u]=o.substr(d,c);o=p.join(e===Y.BLOCK_LITERAL?`
`:" ")}return hn({comment:t,type:e,value:o},n,s,i)}};function Wl(t,e){if(Ar(t))for(let r=0;r<t.items.length;++r){let n=t.items[r];if(!ve(n)){if(Yt(n)){n.items.length>1&&e("Each pair must have its own sequence indicator");const s=n.items[0]||new qe(new Y(null));if(n.commentBefore&&(s.key.commentBefore=s.key.commentBefore?`${n.commentBefore}
${s.key.commentBefore}`:n.commentBefore),n.comment){const i=s.value??s.key;i.comment=i.comment?`${n.comment}
${i.comment}`:n.comment}n=s}t.items[r]=ve(n)?n:new qe(n)}}else e("Expected a sequence for this tag");return t}function Yl(t,e,r){const{replacer:n}=r,s=new Qt(t);s.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(i++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected { key: value } tuple: ${a}`)}else o=a;s.items.push(Qi(o,c,r))}return s}const ra={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Wl,createNode:Yl};class br extends Qt{constructor(){super(),this.add=Ye.prototype.add.bind(this),this.delete=Ye.prototype.delete.bind(this),this.get=Ye.prototype.get.bind(this),this.has=Ye.prototype.has.bind(this),this.set=Ye.prototype.set.bind(this),this.tag=br.tag}toJSON(e,r){if(!r)return super.toJSON(e);const n=new Map;r!=null&&r.onCreate&&r.onCreate(n);for(const s of this.items){let i,a;if(ve(s)?(i=yt(s.key,"",r),a=yt(s.value,i,r)):i=yt(s,"",r),n.has(i))throw new Error("Ordered maps must not include duplicate keys");n.set(i,a)}return n}}br.tag="tag:yaml.org,2002:omap";const na={collection:"seq",identify:t=>t instanceof Map,nodeClass:br,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){const r=Wl(t,e),n=[];for(const{key:s}of r.items)de(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new br,r)},createNode(t,e,r){const n=Yl(t,e,r),s=new br;return s.items=n.items,s}};function Ql({value:t,source:e},r){return e&&(t?Zl:ef).test.test(e)?e:t?r.options.trueStr:r.options.falseStr}const Zl={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new Y(!0),stringify:Ql},ef={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new Y(!1),stringify:Ql},Bu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:at},Fu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():at(t)}},Vu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const e=new Y(parseFloat(t.replace(/_/g,""))),r=t.indexOf(".");if(r!==-1){const n=t.substring(r+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:at},yn=t=>typeof t=="bigint"||Number.isInteger(t);function Ss(t,e,r,{intAsBigInt:n}){const s=t[0];if((s==="-"||s==="+")&&(e+=1),t=t.substring(e).replace(/_/g,""),n){switch(r){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`;break}const a=BigInt(t);return s==="-"?BigInt(-1)*a:a}const i=parseInt(t,r);return s==="-"?-1*i:i}function sa(t,e,r){const{value:n}=t;if(yn(n)){const s=n.toString(e);return n<0?"-"+r+s.substr(1):r+s}return at(t)}const Ku={identify:yn,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,r)=>Ss(t,2,2,r),stringify:t=>sa(t,2,"0b")},zu={identify:yn,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,r)=>Ss(t,1,8,r),stringify:t=>sa(t,8,"0")},Ju={identify:yn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,r)=>Ss(t,0,10,r),stringify:at},Gu={identify:yn,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,r)=>Ss(t,2,16,r),stringify:t=>sa(t,16,"0x")};class Sr extends Ye{constructor(e){super(e),this.tag=Sr.tag}add(e){let r;ve(e)?r=e:e&&typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?r=new qe(e.key,null):r=new qe(e,null),Ft(this.items,r.key)||this.items.push(r)}get(e,r){const n=Ft(this.items,e);return!r&&ve(n)?de(n.key)?n.key.value:n.key:n}set(e,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const n=Ft(this.items,e);n&&!r?this.items.splice(this.items.indexOf(n),1):!n&&r&&this.items.push(new qe(e))}toJSON(e,r){return super.toJSON(e,r,Set)}toString(e,r,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),r,n);throw new Error("Set items must all have null values")}}Sr.tag="tag:yaml.org,2002:set";const ia={collection:"map",identify:t=>t instanceof Set,nodeClass:Sr,default:!1,tag:"tag:yaml.org,2002:set",resolve(t,e){if(Yt(t)){if(t.hasAllNullValues(!0))return Object.assign(new Sr,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t},createNode(t,e,r){const{replacer:n}=r,s=new Sr(t);if(e&&Symbol.iterator in Object(e))for(let i of e)typeof n=="function"&&(i=n.call(e,i,i)),s.items.push(Qi(i,null,r));return s}};function aa(t,e){const r=t[0],n=r==="-"||r==="+"?t.substring(1):t,s=a=>e?BigInt(a):Number(a),i=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return r==="-"?s(-1)*i:i}function tf(t){let{value:e}=t,r=a=>a;if(typeof e=="bigint")r=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return at(t);let n="";e<0&&(n="-",e*=r(-1));const s=r(60),i=[e%s];return e<60?i.unshift(0):(e=(e-i[0])/s,i.unshift(e%s),e>=60&&(e=(e-i[0])/s,i.unshift(e))),n+i.map(a=>a<10?"0"+String(a):String(a)).join(":").replace(/000000\d*$/,"")}const rf={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:r})=>aa(t,r),stringify:tf},nf={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>aa(t,!1),stringify:tf},ws={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const e=t.match(ws.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,n,s,i,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(r,n-1,s,i||0,a||0,o||0,c);const p=e[8];if(p&&p!=="Z"){let u=aa(p,!1);Math.abs(u)<30&&(u*=60),l-=6e4*u}return new Date(l)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},Io=[Nr,Cr,gs,vs,Zl,ef,Ku,zu,Ju,Gu,Bu,Fu,Vu,ta,na,ra,ia,rf,nf,ws],Oo=new Map([["core",Du],["failsafe",[Nr,Cr,gs]],["json",Uu],["yaml11",Io],["yaml-1.1",Io]]),Po={binary:ta,bool:Zi,float:zl,floatExp:Kl,floatNaN:Vl,floatTime:nf,int:Hl,intHex:Xl,intOct:Gl,intTime:rf,map:Nr,null:vs,omap:na,pairs:ra,seq:Cr,set:ia,timestamp:ws},Hu={"tag:yaml.org,2002:binary":ta,"tag:yaml.org,2002:omap":na,"tag:yaml.org,2002:pairs":ra,"tag:yaml.org,2002:set":ia,"tag:yaml.org,2002:timestamp":ws};function Ks(t,e){let r=Oo.get(e);if(!r)if(Array.isArray(t))r=[];else{const n=Array.from(Oo.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${n} or define customTags array`)}if(Array.isArray(t))for(const n of t)r=r.concat(n);else typeof t=="function"&&(r=t(r.slice()));return r.map(n=>{if(typeof n!="string")return n;const s=Po[n];if(s)return s;const i=Object.keys(Po).map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown custom tag "${n}"; use one of ${i}`)})}const Xu=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0;let oa=class{constructor({compat:e,customTags:r,merge:n,resolveKnownTags:s,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Ks(e,"compat"):e?Ks(null,e):null,this.merge=!!n,this.name=typeof i=="string"&&i||"core",this.knownTags=s?Hu:{},this.tags=Ks(r,this.name),this.toStringOptions=o??null,Object.defineProperty(this,Nt,{value:Nr}),Object.defineProperty(this,It,{value:gs}),Object.defineProperty(this,xr,{value:Cr}),this.sortMapEntries=typeof a=="function"?a:a===!0?Xu:null}clone(){const e=Object.create(oa.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}};function Wu(t,e){var c;const r=[];let n=e.directives===!0;if(e.directives!==!1&&t.directives){const l=t.directives.toString(t);l?(r.push(l),n=!0):t.directives.docStart&&(n=!0)}n&&r.push("---");const s=Ml(t,e),{commentString:i}=s.options;if(t.commentBefore){r.length!==1&&r.unshift("");const l=i(t.commentBefore);r.unshift(St(l,""))}let a=!1,o=null;if(t.contents){if(Pe(t.contents)){if(t.contents.spaceBefore&&n&&r.push(""),t.contents.commentBefore){const u=i(t.contents.commentBefore);r.push(St(u,""))}s.forceBlockIndent=!!t.comment,o=t.contents.comment}const l=o?void 0:()=>a=!0;let p=Jt(t.contents,s,()=>o=null,l);o&&(p+=xt(p,"",i(o))),(p[0]==="|"||p[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${p}`:r.push(p)}else r.push(Jt(t.contents,s));if((c=t.directives)!=null&&c.docEnd)if(t.comment){const l=i(t.comment);l.includes(`
`)?(r.push("..."),r.push(St(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=t.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&r[r.length-1]!==""&&r.push(""),r.push(St(i(l),"")))}return r.join(`
`)+`
`}function tn(t,e,r,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,i=n.length;s<i;++s){const a=n[s],o=tn(t,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const i=n.get(s),a=tn(t,n,s,i);a===void 0?n.delete(s):a!==i&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const i=tn(t,n,s,s);i===void 0?n.delete(s):i!==s&&(n.delete(s),n.add(i))}else for(const[s,i]of Object.entries(n)){const a=tn(t,n,s,i);a===void 0?delete n[s]:a!==i&&(n[s]=a)}return t.call(e,r,n)}class Tr{constructor(e,r,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Qe,{value:Ii});let s=null;typeof r=="function"||Array.isArray(r)?s=r:n===void 0&&r&&(n=r,r=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,uniqueKeys:!0,version:"1.2"},n);this.options=i;let{version:a}=i;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new De({version:a}),this.setSchema(a,n),e===void 0?this.contents=null:this.contents=this.createNode(e,s,n)}clone(){const e=Object.create(Tr.prototype,{[Qe]:{value:Ii}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Pe(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){ar(this.contents)&&this.contents.add(e)}addIn(e,r){ar(this.contents)&&this.contents.addIn(e,r)}createAlias(e,r){if(!e.anchor){const n=ql(this);e.anchor=!r||n.has(r)?Rl(r||"a",n):r}return new ds(e.anchor)}createNode(e,r,n){let s;if(typeof r=="function")e=r.call({"":e},"",e),s=r;else if(Array.isArray(r)){const h=S=>typeof S=="number"||S instanceof String||S instanceof Number,v=r.filter(h).map(String);v.length>0&&(r=r.concat(v)),s=r}else n===void 0&&r&&(n=r,r=void 0);const{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:p}=n??{},{onAnchor:u,setAnchors:d,sourceObjects:g}=wu(this,a||"a"),O={aliasDuplicateObjects:i??!0,keepUndefined:c??!1,onAnchor:u,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:g},m=cn(e,p,O);return o&&be(m)&&(m.flow=!0),d(),m}createPair(e,r,n={}){const s=this.createNode(e,null,n),i=this.createNode(r,null,n);return new qe(s,i)}delete(e){return ar(this.contents)?this.contents.delete(e):!1}deleteIn(e){return en(e)?this.contents==null?!1:(this.contents=null,!0):ar(this.contents)?this.contents.deleteIn(e):!1}get(e,r){return be(this.contents)?this.contents.get(e,r):void 0}getIn(e,r){return en(e)?!r&&de(this.contents)?this.contents.value:this.contents:be(this.contents)?this.contents.getIn(e,r):void 0}has(e){return be(this.contents)?this.contents.has(e):!1}hasIn(e){return en(e)?this.contents!==void 0:be(this.contents)?this.contents.hasIn(e):!1}set(e,r){this.contents==null?this.contents=ns(this.schema,[e],r):ar(this.contents)&&this.contents.set(e,r)}setIn(e,r){en(e)?this.contents=r:this.contents==null?this.contents=ns(this.schema,Array.from(e),r):ar(this.contents)&&this.contents.setIn(e,r)}setSchema(e,r={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new De({version:"1.1"}),n={merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new De({version:e}),n={merge:!1,resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(n)this.schema=new oa(Object.assign(n,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:r,mapAsMap:n,maxAliasCount:s,onAnchor:i,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100,stringify:Jt},c=yt(this.contents,r??"",o);if(typeof i=="function")for(const{count:l,res:p}of o.anchors.values())i(p,l);return typeof a=="function"?tn(a,{"":c},"",c):c}toJSON(e,r){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:r})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const r=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return Wu(this,e)}}function ar(t){if(be(t))return!0;throw new Error("Expected a YAML collection as document contents")}class ca extends Error{constructor(e,r,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=r}}class Vt extends ca{constructor(e,r,n){super("YAMLParseError",e,r,n)}}class sf extends ca{constructor(e,r,n){super("YAMLWarning",e,r,n)}}const is=(t,e)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(o=>e.linePos(o));const{line:n,col:s}=r.linePos[0];r.message+=` at line ${n}, column ${s}`;let i=s-1,a=t.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(i>=60&&a.length>80){const o=Math.min(i-39,a.length-79);a="…"+a.substring(o),i-=o-1}if(a.length>80&&(a=a.substring(0,79)+"…"),n>1&&/^ *$/.test(a.substring(0,i))){let o=t.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`…
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=r.linePos[1];c&&c.line===n&&c.col>s&&(o=Math.min(c.col-s,80-i));const l=" ".repeat(i)+"^".repeat(o);r.message+=`:

${a}
${l}
`}};function Er(t,{flow:e,indicator:r,next:n,offset:s,onError:i,startOnNewline:a}){let o=!1,c=a,l=a,p="",u="",d=!1,g=!1,O=!1,m=null,h=null,v=null,S=null,b=null;for(const _ of t)switch(O&&(_.type!=="space"&&_.type!=="newline"&&_.type!=="comma"&&i(_.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),O=!1),_.type){case"space":!e&&c&&r!=="doc-start"&&_.source[0]==="	"&&i(_,"TAB_AS_INDENT","Tabs are not allowed as indentation"),l=!0;break;case"comment":{l||i(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const R=_.source.substring(1)||" ";p?p+=u+R:p=R,u="",c=!1;break}case"newline":c?p?p+=_.source:o=!0:u+=_.source,c=!0,d=!0,(m||h)&&(g=!0),l=!0;break;case"anchor":m&&i(_,"MULTIPLE_ANCHORS","A node can have at most one anchor"),_.source.endsWith(":")&&i(_.offset+_.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),m=_,b===null&&(b=_.offset),c=!1,l=!1,O=!0;break;case"tag":{h&&i(_,"MULTIPLE_TAGS","A node can have at most one tag"),h=_,b===null&&(b=_.offset),c=!1,l=!1,O=!0;break}case r:(m||h)&&i(_,"BAD_PROP_ORDER",`Anchors and tags must be after the ${_.source} indicator`),S&&i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.source} in ${e??"collection"}`),S=_,c=!1,l=!1;break;case"comma":if(e){v&&i(_,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),v=_,c=!1,l=!1;break}default:i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.type} token`),c=!1,l=!1}const k=t[t.length-1],P=k?k.offset+k.source.length:s;return O&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&i(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),{comma:v,found:S,spaceBefore:o,comment:p,hasNewline:d,hasNewlineAfterProp:g,anchor:m,tag:h,end:P,start:b??P}}function ln(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of t.items){for(const r of e.start)if(r.type==="newline")return!0;if(e.sep){for(const r of e.sep)if(r.type==="newline")return!0}if(ln(e.key)||ln(e.value))return!0}return!1;default:return!0}}function ki(t,e,r){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===t&&(n.source==="]"||n.source==="}")&&ln(e)&&r(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function af(t,e,r){const{uniqueKeys:n}=t.options;if(n===!1)return!1;const s=typeof n=="function"?n:(i,a)=>i===a||de(i)&&de(a)&&i.value===a.value&&!(i.value==="<<"&&t.schema.merge);return e.some(i=>s(i.key,r))}const ko="All mapping items must start at the same column";function Yu({composeNode:t,composeEmptyNode:e},r,n,s){var c;const i=new Ye(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset,o=null;for(const l of n.items){const{start:p,key:u,sep:d,value:g}=l,O=Er(p,{indicator:"explicit-key-ind",next:u??(d==null?void 0:d[0]),offset:a,onError:s,startOnNewline:!0}),m=!O.found;if(m){if(u&&(u.type==="block-seq"?s(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in u&&u.indent!==n.indent&&s(a,"BAD_INDENT",ko)),!O.anchor&&!O.tag&&!d){o=O.end,O.comment&&(i.comment?i.comment+=`
`+O.comment:i.comment=O.comment);continue}(O.hasNewlineAfterProp||ln(u))&&s(u??p[p.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((c=O.found)==null?void 0:c.indent)!==n.indent&&s(a,"BAD_INDENT",ko);const h=O.end,v=u?t(r,u,O,s):e(r,h,p,null,O,s);r.schema.compat&&ki(n.indent,u,s),af(r,i.items,v)&&s(h,"DUPLICATE_KEY","Map keys must be unique");const S=Er(d??[],{indicator:"map-value-ind",next:g,offset:v.range[2],onError:s,startOnNewline:!u||u.type==="block-scalar"});if(a=S.end,S.found){m&&((g==null?void 0:g.type)==="block-map"&&!S.hasNewline&&s(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&O.start<S.found.offset-1024&&s(v.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const b=g?t(r,g,S,s):e(r,a,d,null,S,s);r.schema.compat&&ki(n.indent,g,s),a=b.range[2];const k=new qe(v,b);r.options.keepSourceTokens&&(k.srcToken=l),i.items.push(k)}else{m&&s(v.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),S.comment&&(v.comment?v.comment+=`
`+S.comment:v.comment=S.comment);const b=new qe(v);r.options.keepSourceTokens&&(b.srcToken=l),i.items.push(b)}}return o&&o<a&&s(o,"IMPOSSIBLE","Map comment with trailing content"),i.range=[n.offset,a,o??a],i}function Qu({composeNode:t,composeEmptyNode:e},r,n,s){const i=new Qt(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset,o=null;for(const{start:c,value:l}of n.items){const p=Er(c,{indicator:"seq-item-ind",next:l,offset:a,onError:s,startOnNewline:!0});if(!p.found)if(p.anchor||p.tag||l)l&&l.type==="block-seq"?s(p.end,"BAD_INDENT","All sequence items must start at the same column"):s(a,"MISSING_CHAR","Sequence item without - indicator");else{o=p.end,p.comment&&(i.comment=p.comment);continue}const u=l?t(r,l,p,s):e(r,p.end,c,null,p,s);r.schema.compat&&ki(n.indent,l,s),a=u.range[2],i.items.push(u)}return i.range=[n.offset,a,o??a],i}function $n(t,e,r,n){let s="";if(t){let i=!1,a="";for(const o of t){const{source:c,type:l}=o;switch(l){case"space":i=!0;break;case"comment":{r&&!i&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=c.substring(1)||" ";s?s+=a+p:s=p,a="";break}case"newline":s&&(a+=c),i=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const zs="Block collections are not allowed within flow collections",Js=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Zu({composeNode:t,composeEmptyNode:e},r,n,s){const i=n.start.source==="{",a=i?"flow map":"flow sequence",o=i?new Ye(r.schema):new Qt(r.schema);o.flow=!0;const c=r.atRoot;c&&(r.atRoot=!1);let l=n.offset+n.start.source.length;for(let O=0;O<n.items.length;++O){const m=n.items[O],{start:h,key:v,sep:S,value:b}=m,k=Er(h,{flow:a,indicator:"explicit-key-ind",next:v??(S==null?void 0:S[0]),offset:l,onError:s,startOnNewline:!1});if(!k.found){if(!k.anchor&&!k.tag&&!S&&!b){O===0&&k.comma?s(k.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):O<n.items.length-1&&s(k.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),k.comment&&(o.comment?o.comment+=`
`+k.comment:o.comment=k.comment),l=k.end;continue}!i&&r.options.strict&&ln(v)&&s(v,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(O===0)k.comma&&s(k.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(k.comma||s(k.start,"MISSING_CHAR",`Missing , between ${a} items`),k.comment){let P="";e:for(const _ of h)switch(_.type){case"comma":case"space":break;case"comment":P=_.source.substring(1);break e;default:break e}if(P){let _=o.items[o.items.length-1];ve(_)&&(_=_.value??_.key),_.comment?_.comment+=`
`+P:_.comment=P,k.comment=k.comment.substring(P.length+1)}}if(!i&&!S&&!k.found){const P=b?t(r,b,k,s):e(r,k.end,S,null,k,s);o.items.push(P),l=P.range[2],Js(b)&&s(P.range,"BLOCK_IN_FLOW",zs)}else{const P=k.end,_=v?t(r,v,k,s):e(r,P,h,null,k,s);Js(v)&&s(_.range,"BLOCK_IN_FLOW",zs);const R=Er(S??[],{flow:a,indicator:"map-value-ind",next:b,offset:_.range[2],onError:s,startOnNewline:!1});if(R.found){if(!i&&!k.found&&r.options.strict){if(S)for(const je of S){if(je===R.found)break;if(je.type==="newline"){s(je,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}k.start<R.found.offset-1024&&s(R.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else b&&("source"in b&&b.source&&b.source[0]===":"?s(b,"MISSING_CHAR",`Missing space after : in ${a}`):s(R.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const oe=b?t(r,b,R,s):R.found?e(r,R.end,S,null,R,s):null;oe?Js(b)&&s(oe.range,"BLOCK_IN_FLOW",zs):R.comment&&(_.comment?_.comment+=`
`+R.comment:_.comment=R.comment);const me=new qe(_,oe);if(r.options.keepSourceTokens&&(me.srcToken=m),i){const je=o;af(r,je.items,_)&&s(P,"DUPLICATE_KEY","Map keys must be unique"),je.items.push(me)}else{const je=new Ye(r.schema);je.flow=!0,je.items.push(me),o.items.push(je)}l=oe?oe.range[2]:R.end}}const p=i?"}":"]",[u,...d]=n.end;let g=l;if(u&&u.source===p)g=u.offset+u.source.length;else{const O=a[0].toUpperCase()+a.substring(1),m=c?`${O} must end with a ${p}`:`${O} in block collection must be sufficiently indented and end with a ${p}`;s(l,c?"MISSING_CHAR":"BAD_INDENT",m),u&&u.source.length!==1&&d.unshift(u)}if(d.length>0){const O=$n(d,g,r.options.strict,s);O.comment&&(o.comment?o.comment+=`
`+O.comment:o.comment=O.comment),o.range=[n.offset,g,O.offset]}else o.range=[n.offset,g,g];return o}function ed(t,e,r,n,s){let i;switch(r.type){case"block-map":{i=Yu(t,e,r,s);break}case"block-seq":{i=Qu(t,e,r,s);break}case"flow-collection":{i=Zu(t,e,r,s);break}}if(!n)return i;const a=e.directives.tagName(n.source,d=>s(n,"TAG_RESOLVE_FAILED",d));if(!a)return i;const o=i.constructor;if(a==="!"||a===o.tagName)return i.tag=o.tagName,i;const c=Yt(i)?"map":"seq";let l=e.schema.tags.find(d=>d.collection===c&&d.tag===a);if(!l){const d=e.schema.knownTags[a];if(d&&d.collection===c)e.schema.tags.push(Object.assign({},d,{default:!1})),l=d;else return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),i.tag=a,i}const p=l.resolve(i,d=>s(n,"TAG_RESOLVE_FAILED",d),e.options),u=Pe(p)?p:new Y(p);return u.range=i.range,u.tag=a,l!=null&&l.format&&(u.format=l.format),u}function of(t,e,r){const n=t.offset,s=td(t,e,r);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const i=s.mode===">"?Y.BLOCK_FOLDED:Y.BLOCK_LITERAL,a=t.source?rd(t.source):[];let o=a.length;for(let m=a.length-1;m>=0;--m){const h=a[m][1];if(h===""||h==="\r")o=m;else break}if(o===0){const m=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let h=n+s.length;return t.source&&(h+=t.source.length),{value:m,type:i,comment:s.comment,range:[n,h,h]}}let c=t.indent+s.indent,l=t.offset+s.length,p=0;for(let m=0;m<o;++m){const[h,v]=a[m];if(v===""||v==="\r")s.indent===0&&h.length>c&&(c=h.length);else{if(h.length<c){const S="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";r(l+h.length,"MISSING_CHAR",S)}s.indent===0&&(c=h.length),p=m;break}l+=h.length+v.length+1}for(let m=a.length-1;m>=o;--m)a[m][0].length>c&&(o=m+1);let u="",d="",g=!1;for(let m=0;m<p;++m)u+=a[m][0].slice(c)+`
`;for(let m=p;m<o;++m){let[h,v]=a[m];l+=h.length+v.length+1;const S=v[v.length-1]==="\r";if(S&&(v=v.slice(0,-1)),v&&h.length<c){const k=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;r(l-v.length-(S?2:1),"BAD_INDENT",k),h=""}i===Y.BLOCK_LITERAL?(u+=d+h.slice(c)+v,d=`
`):h.length>c||v[0]==="	"?(d===" "?d=`
`:!g&&d===`
`&&(d=`

`),u+=d+h.slice(c)+v,d=`
`,g=!0):v===""?d===`
`?u+=`
`:d=`
`:(u+=d+v,d=" ",g=!1)}switch(s.chomp){case"-":break;case"+":for(let m=o;m<a.length;++m)u+=`
`+a[m][0].slice(c);u[u.length-1]!==`
`&&(u+=`
`);break;default:u+=`
`}const O=n+s.length+t.source.length;return{value:u,type:i,comment:s.comment,range:[n,O,O]}}function td({offset:t,props:e},r,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],i=s[0];let a=0,o="",c=-1;for(let d=1;d<s.length;++d){const g=s[d];if(!o&&(g==="-"||g==="+"))o=g;else{const O=Number(g);!a&&O?a=O:c===-1&&(c=t+d)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,p="",u=s.length;for(let d=1;d<e.length;++d){const g=e[d];switch(g.type){case"space":l=!0;case"newline":u+=g.source.length;break;case"comment":r&&!l&&n(g,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),u+=g.source.length,p=g.source.substring(1);break;case"error":n(g,"UNEXPECTED_TOKEN",g.message),u+=g.source.length;break;default:{const O=`Unexpected token in block scalar header: ${g.type}`;n(g,"UNEXPECTED_TOKEN",O);const m=g.source;m&&typeof m=="string"&&(u+=m.length)}}}return{mode:i,indent:a,chomp:o,comment:p,length:u}}function rd(t){const e=t.split(/\n( *)/),r=e[0],n=r.match(/^( *)/),i=[n!=null&&n[1]?[n[1],r.slice(n[1].length)]:["",r]];for(let a=1;a<e.length;a+=2)i.push([e[a],e[a+1]]);return i}function cf(t,e,r){const{offset:n,type:s,source:i,end:a}=t;let o,c;const l=(d,g,O)=>r(n+d,g,O);switch(s){case"scalar":o=Y.PLAIN,c=nd(i,l);break;case"single-quoted-scalar":o=Y.QUOTE_SINGLE,c=sd(i,l);break;case"double-quoted-scalar":o=Y.QUOTE_DOUBLE,c=id(i,l);break;default:return r(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+i.length,n+i.length]}}const p=n+i.length,u=$n(a,p,e,r);return{value:c,type:o,comment:u.comment,range:[n,p,u.offset]}}function nd(t,e){let r="";switch(t[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${t[0]}`;break}case"@":case"`":{r=`reserved character ${t[0]}`;break}}return r&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),lf(t)}function sd(t,e){return(t[t.length-1]!=="'"||t.length===1)&&e(t.length,"MISSING_CHAR","Missing closing 'quote"),lf(t.slice(1,-1)).replace(/''/g,"'")}function lf(t){let e,r;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(t);if(!n)return t;let s=n[1],i=" ",a=e.lastIndex;for(r.lastIndex=a;n=r.exec(t);)n[1]===""?i===`
`?s+=i:i=`
`:(s+=i+n[1],i=" "),a=r.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,n=o.exec(t),s+i+((n==null?void 0:n[1])??"")}function id(t,e){let r="";for(let n=1;n<t.length-1;++n){const s=t[n];if(!(s==="\r"&&t[n+1]===`
`))if(s===`
`){const{fold:i,offset:a}=ad(t,n);r+=i,n=a}else if(s==="\\"){let i=t[++n];const a=od[i];if(a)r+=a;else if(i===`
`)for(i=t[n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="\r"&&t[n+1]===`
`)for(i=t[++n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="x"||i==="u"||i==="U"){const o={x:2,u:4,U:8}[i];r+=cd(t,n+1,o,e),n+=o}else{const o=t.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),r+=o}}else if(s===" "||s==="	"){const i=n;let a=t[n+1];for(;a===" "||a==="	";)a=t[++n+1];a!==`
`&&!(a==="\r"&&t[n+2]===`
`)&&(r+=n>i?t.slice(i,n+1):s)}else r+=s}return(t[t.length-1]!=='"'||t.length===1)&&e(t.length,"MISSING_CHAR",'Missing closing "quote'),r}function ad(t,e){let r="",n=t[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&t[e+2]!==`
`);)n===`
`&&(r+=`
`),e+=1,n=t[e+1];return r||(r=" "),{fold:r,offset:e}}const od={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"",_:" ",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function cd(t,e,r,n){const s=t.substr(e,r),a=s.length===r&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(a)){const o=t.substr(e-2,r+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function ff(t,e,r,n){const{value:s,type:i,comment:a,range:o}=e.type==="block-scalar"?of(e,t.options.strict,n):cf(e,t.options.strict,n),c=r?t.directives.tagName(r.source,u=>n(r,"TAG_RESOLVE_FAILED",u)):null,l=r&&c?ld(t.schema,s,c,r,n):e.type==="scalar"?fd(t,s,e,n):t.schema[It];let p;try{const u=l.resolve(s,d=>n(r??e,"TAG_RESOLVE_FAILED",d),t.options);p=de(u)?u:new Y(u)}catch(u){const d=u instanceof Error?u.message:String(u);n(r??e,"TAG_RESOLVE_FAILED",d),p=new Y(s)}return p.range=o,p.source=s,i&&(p.type=i),c&&(p.tag=c),l.format&&(p.format=l.format),a&&(p.comment=a),p}function ld(t,e,r,n,s){var o;if(r==="!")return t[It];const i=[];for(const c of t.tags)if(!c.collection&&c.tag===r)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((o=c.test)!=null&&o.test(e))return c;const a=t.knownTags[r];return a&&!a.collection?(t.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),t[It])}function fd({directives:t,schema:e},r,n,s){const i=e.tags.find(a=>{var o;return a.default&&((o=a.test)==null?void 0:o.test(r))})||e[It];if(e.compat){const a=e.compat.find(o=>{var c;return o.default&&((c=o.test)==null?void 0:c.test(r))})??e[It];if(i.tag!==a.tag){const o=t.tagString(i.tag),c=t.tagString(a.tag),l=`Value may be parsed as either ${o} or ${c}`;s(n,"TAG_RESOLVE_FAILED",l,!0)}}return i}function pd(t,e,r){if(e){r===null&&(r=e.length);for(let n=r-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":t-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)t+=s.source.length,s=e[++n];break}}return t}const ud={composeNode:pf,composeEmptyNode:la};function pf(t,e,r,n){const{spaceBefore:s,comment:i,anchor:a,tag:o}=r;let c,l=!0;switch(e.type){case"alias":c=dd(t,e,n),(a||o)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=ff(t,e,o,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=ed(ud,t,e,o,n),a&&(c.anchor=a.source.substring(1));break;default:{const p=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",p),c=la(t,e.offset,void 0,null,r,n),l=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&(c.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?c.comment=i:c.commentBefore=i),t.options.keepSourceTokens&&l&&(c.srcToken=e),c}function la(t,e,r,n,{spaceBefore:s,comment:i,anchor:a,tag:o,end:c},l){const p={type:"scalar",offset:pd(e,r,n),indent:-1,source:""},u=ff(t,p,o,l);return a&&(u.anchor=a.source.substring(1),u.anchor===""&&l(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(u.spaceBefore=!0),i&&(u.comment=i,u.range[2]=c),u}function dd({options:t},{offset:e,source:r,end:n},s){const i=new ds(r.substring(1));i.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&s(e+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+r.length,o=$n(n,a,t.strict,s);return i.range=[e,a,o.offset],o.comment&&(i.comment=o.comment),i}function md(t,e,{offset:r,start:n,value:s,end:i},a){const o=Object.assign({_directives:e},t),c=new Tr(void 0,o),l={atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},p=Er(n,{indicator:"doc-start",next:s??(i==null?void 0:i[0]),offset:r,onError:a,startOnNewline:!0});p.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?pf(l,s,p,a):la(l,p.end,n,null,p,a);const u=c.contents.range[2],d=$n(i,u,!1,a);return d.comment&&(c.comment=d.comment),c.range=[r,u,d.offset],c}function Jr(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:e,source:r}=t;return[e,e+(typeof r=="string"?r.length:1)]}function jo(t){var s;let e="",r=!1,n=!1;for(let i=0;i<t.length;++i){const a=t[i];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),r=!0,n=!1;break;case"%":((s=t[i+1])==null?void 0:s[0])!=="#"&&(i+=1),r=!1;break;default:r||(n=!0),r=!1}}return{comment:e,afterEmptyLine:n}}class fa{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,n,s,i)=>{const a=Jr(r);i?this.warnings.push(new sf(a,n,s)):this.errors.push(new Vt(a,n,s))},this.directives=new De({version:e.version||"1.2"}),this.options=e}decorate(e,r){const{comment:n,afterEmptyLine:s}=jo(this.prelude);if(n){const i=e.contents;if(r)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!i)e.commentBefore=n;else if(be(i)&&!i.flow&&i.items.length>0){let a=i.items[0];ve(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=i.commentBefore;i.commentBefore=a?`${n}
${a}`:n}}r?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:jo(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,r=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(r,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(r,n,s)=>{const i=Jr(e);i[0]+=r,this.onError(i,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const r=md(this.options,this.directives,e,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const r=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Vt(Jr(e),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Vt(Jr(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const r=$n(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new Vt(Jr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Tr(void 0,n);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,r,r],this.decorate(s,!1),yield s}}}function hd(t,e=!0,r){if(t){const n=(s,i,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(r)r(o,i,a);else throw new Vt([o,o+1],i,a)};switch(t.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return cf(t,e,n);case"block-scalar":return of(t,e,n)}}return null}function yd(t,e){const{implicitKey:r=!1,indent:n,inFlow:s=!1,offset:i=-1,type:a="PLAIN"}=e,o=hn({type:a,value:t},{implicitKey:r,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=e.end??[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const l=o.indexOf(`
`),p=o.substring(0,l),u=o.substring(l+1)+`
`,d=[{type:"block-scalar-header",offset:i,indent:n,source:p}];return uf(d,c)||d.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:i,indent:n,props:d,source:u}}case'"':return{type:"double-quoted-scalar",offset:i,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:i,indent:n,source:o,end:c};default:return{type:"scalar",offset:i,indent:n,source:o,end:c}}}function $d(t,e,r={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:i=!1,type:a}=r,o="indent"in t?t.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(t.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=t.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=hn({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":gd(t,c);break;case'"':Gs(t,c,"double-quoted-scalar");break;case"'":Gs(t,c,"single-quoted-scalar");break;default:Gs(t,c,"scalar")}}function gd(t,e){const r=e.indexOf(`
`),n=e.substring(0,r),s=e.substring(r+1)+`
`;if(t.type==="block-scalar"){const i=t.props[0];if(i.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i.source=n,t.source=s}else{const{offset:i}=t,a="indent"in t?t.indent:-1,o=[{type:"block-scalar-header",offset:i,indent:a,source:n}];uf(o,"end"in t?t.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(t))c!=="type"&&c!=="offset"&&delete t[c];Object.assign(t,{type:"block-scalar",indent:a,props:o,source:s})}}function uf(t,e){if(e)for(const r of e)switch(r.type){case"space":case"comment":t.push(r);break;case"newline":return t.push(r),!0}return!1}function Gs(t,e,r){switch(t.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":t.type=r,t.source=e;break;case"block-scalar":{const n=t.props.slice(1);let s=e.length;t.props[0].type==="block-scalar-header"&&(s-=t.props[0].source.length);for(const i of n)i.offset+=s;delete t.props,Object.assign(t,{type:r,source:e,end:n});break}case"block-map":case"block-seq":{const s={type:"newline",offset:t.offset+e.length,indent:t.indent,source:`
`};delete t.items,Object.assign(t,{type:r,source:e,end:[s]});break}default:{const n="indent"in t?t.indent:-1,s="end"in t&&Array.isArray(t.end)?t.end.filter(i=>i.type==="space"||i.type==="comment"||i.type==="newline"):[];for(const i of Object.keys(t))i!=="type"&&i!=="offset"&&delete t[i];Object.assign(t,{type:r,indent:n,source:e,end:s})}}}const vd=t=>"type"in t?as(t):Gn(t);function as(t){switch(t.type){case"block-scalar":{let e="";for(const r of t.props)e+=as(r);return e+t.source}case"block-map":case"block-seq":{let e="";for(const r of t.items)e+=Gn(r);return e}case"flow-collection":{let e=t.start.source;for(const r of t.items)e+=Gn(r);for(const r of t.end)e+=r.source;return e}case"document":{let e=Gn(t);if(t.end)for(const r of t.end)e+=r.source;return e}default:{let e=t.source;if("end"in t&&t.end)for(const r of t.end)e+=r.source;return e}}}function Gn({start:t,key:e,sep:r,value:n}){let s="";for(const i of t)s+=i.source;if(e&&(s+=as(e)),r)for(const i of r)s+=i.source;return n&&(s+=as(n)),s}const ji=Symbol("break visit"),bd=Symbol("skip children"),df=Symbol("remove item");function Gt(t,e){"type"in t&&t.type==="document"&&(t={start:t.start,value:t.value}),mf(Object.freeze([]),t,e)}Gt.BREAK=ji;Gt.SKIP=bd;Gt.REMOVE=df;Gt.itemAtPath=(t,e)=>{let r=t;for(const[n,s]of e){const i=r==null?void 0:r[n];if(i&&"items"in i)r=i.items[s];else return}return r};Gt.parentCollection=(t,e)=>{const r=Gt.itemAtPath(t,e.slice(0,-1)),n=e[e.length-1][0],s=r==null?void 0:r[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function mf(t,e,r){let n=r(e,t);if(typeof n=="symbol")return n;for(const s of["key","value"]){const i=e[s];if(i&&"items"in i){for(let a=0;a<i.items.length;++a){const o=mf(Object.freeze(t.concat([[s,a]])),i.items[a],r);if(typeof o=="number")a=o-1;else{if(o===ji)return ji;o===df&&(i.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,t))}}return typeof n=="function"?n(e,t):n}const Es="\uFEFF",Is="",Os="",fn="",Sd=t=>!!t&&"items"in t,wd=t=>!!t&&(t.type==="scalar"||t.type==="single-quoted-scalar"||t.type==="double-quoted-scalar"||t.type==="block-scalar");function Ed(t){switch(t){case Es:return"<BOM>";case Is:return"<DOC>";case Os:return"<FLOW_END>";case fn:return"<SCALAR>";default:return JSON.stringify(t)}}function hf(t){switch(t){case Es:return"byte-order-mark";case Is:return"doc-mode";case Os:return"flow-error-end";case fn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(t[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const Id=Object.freeze(Object.defineProperty({__proto__:null,BOM:Es,DOCUMENT:Is,FLOW_END:Os,SCALAR:fn,isCollection:Sd,isScalar:wd,prettyToken:Ed,tokenType:hf,createScalarToken:yd,resolveAsScalar:hd,setScalarValue:$d,stringify:vd,visit:Gt},Symbol.toStringTag,{value:"Module"}));function Xe(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const _o="0123456789ABCDEFabcdef".split(""),Od="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),Hs=",[]{}".split(""),Pd=` ,[]{}
\r	`.split(""),Xs=t=>!t||Pd.includes(t);class yf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,r=!1){e&&(this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null),this.atEnd=!r;let n=this.next??"stream";for(;n&&(r||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,r=this.buffer[e];for(;r===" "||r==="	";)r=this.buffer[++e];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let r=this.buffer[e];if(this.indentNext>0){let n=0;for(;r===" ";)r=this.buffer[++n+e];if(r==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return r===`
`||n>=this.indentNext||!r&&!this.atEnd?e+n:-1}if(r==="-"||r==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Xe(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Es&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let r=e.length;const n=e.indexOf("#");if(n!==-1){const i=e[n-1];(i===" "||i==="	")&&(r=n-1)}for(;;){const i=e[r-1];if(i===" "||i==="	")r-=1;else break}const s=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-r),yield*this.pushNewline(),"stream"}return yield Is,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if(r==="---"&&Xe(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(r==="..."&&Xe(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Xe(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Xe(r)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(e[r]){case"#":yield*this.pushCount(e.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Xs),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,r,n=-1;do e=yield*this.pushNewline(),e>0?(r=yield*this.pushSpaces(!1),this.indentValue=n=r):r=0,r+=yield*this.pushSpaces(!0);while(e+r>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Xe(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Os,yield*this.parseLineStart();let i=0;for(;s[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),s[i]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Xs),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Xe(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let r=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let i=0;for(;this.buffer[r-1-i]==="\\";)i+=1;if(i%2===0)break;r=this.buffer.indexOf('"',r+1)}const n=this.buffer.substring(0,r);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const i=this.continueScalar(s+1);if(i===-1)break;s=n.indexOf(`
`,i)}s!==-1&&(r=s-(n[s-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const r=this.buffer[++e];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>Xe(r)||r==="#")}*parseBlockScalar(){let e=this.pos-1,r=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":r+=1;break;case`
`:e=s,r=0;break;case"\r":{const i=this.buffer[s+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext+=this.blockScalarIndent;do{const s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}if(!this.blockScalarKeep)do{let s=e-1,i=this.buffer[s];i==="\r"&&(i=this.buffer[--s]);const a=s;for(;i===" "||i==="	";)i=this.buffer[--s];if(i===`
`&&s>=this.pos&&s+1+r>a)e=s;else break}while(!0);return yield fn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let r=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const i=this.buffer[n+1];if(Xe(i)||e&&i===",")break;r=n}else if(Xe(s)){let i=this.buffer[n+1];if(s==="\r"&&(i===`
`?(n+=1,s=`
`,i=this.buffer[n+1]):r=n),i==="#"||e&&Hs.includes(i))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&Hs.includes(s))break;r=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield fn,yield*this.pushToIndex(r+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,r){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Xs))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,r=this.charAt(1);if(Xe(r)||e&&Hs.includes(r))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,r=this.buffer[e];for(;!Xe(r)&&r!==">";)r=this.buffer[++e];return yield*this.pushToIndex(r===">"?e+1:e,!1)}else{let e=this.pos+1,r=this.buffer[e];for(;r;)if(Od.includes(r))r=this.buffer[++e];else if(r==="%"&&_o.includes(this.buffer[e+1])&&_o.includes(this.buffer[e+2]))r=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let r=this.pos-1,n;do n=this.buffer[++r];while(n===" "||e&&n==="	");const s=r-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=r),s}*pushUntil(e){let r=this.pos,n=this.buffer[r];for(;!e(n);)n=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class $f{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let r=0,n=this.lineStarts.length;for(;r<n;){const i=r+n>>1;this.lineStarts[i]<e?r=i+1:n=i}if(this.lineStarts[r]===e)return{line:r+1,col:1};if(r===0)return{line:0,col:e};const s=this.lineStarts[r-1];return{line:r,col:e-s+1}}}}function et(t,e){for(let r=0;r<t.length;++r)if(t[r].type===e)return!0;return!1}function xo(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function gf(t){switch(t==null?void 0:t.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Dn(t){switch(t.type){case"document":return t.start;case"block-map":{const e=t.items[t.items.length-1];return e.sep??e.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function or(t){var r;if(t.length===0)return[];let e=t.length;e:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((r=t[++e])==null?void 0:r.type)==="space";);return t.splice(e,t.length)}function Ao(t){if(t.start.type==="flow-seq-start")for(const e of t.items)e.sep&&!e.value&&!et(e.start,"explicit-key-ind")&&!et(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,gf(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class pa{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new yf,this.onNewLine=e}*parse(e,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,r))yield*this.next(n);r||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const r=hf(e);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const r=e??this.stack.pop();if(r)if(this.stack.length===0)yield r;else{const n=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in n?n.indent:0:r.type==="flow-collection"&&n.type==="document"&&(r.indent=0),r.type==="flow-collection"&&Ao(r),n.type){case"document":n.value=r;break;case"block-scalar":n.props.push(r);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=r;else{Object.assign(s,{key:r,sep:[]}),this.onKeyLine=!et(s.start,"explicit-key-ind");return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:r}):s.value=r;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:r,sep:[]}):s.sep?s.value=r:Object.assign(s,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const s=r.items[r.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&xo(s.start)===-1&&(r.indent===0||s.start.every(i=>i.type!=="comment"||i.indent<r.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),r.items.splice(-1,1))}}else{const n="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:n}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{xo(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const r=this.startBlockValue(e);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const r=Dn(this.peek(2)),n=or(r);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent&&r.sep;let i=[];if(s&&r.sep&&!r.value){const a=[];for(let o=0;o<r.sep.length;++o){const c=r.sep[o];switch(c.type){case"newline":a.push(o);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(i=r.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":s||r.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!et(r.start,"explicit-key-ind")?r.start.push(this.sourceToken):s||r.value?(i.push(this.sourceToken),e.items.push({start:i})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}),this.onKeyLine=!0;return;case"map-value-ind":if(et(r.start,"explicit-key-ind"))if(r.sep)if(r.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(et(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(gf(r.key)&&!et(r.sep,"newline")){const a=or(r.start),o=r.key,c=r.sep;c.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:c}]})}else i.length>0?r.sep=r.sep.concat(i,this.sourceToken):r.sep.push(this.sourceToken);else if(et(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const a=or(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||s?e.items.push({start:i,key:null,sep:[this.sourceToken]}):et(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);s||r.value?(e.items.push({start:i,key:a,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(a):(Object.assign(r,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&et(r.start,"explicit-key-ind")&&e.items.push({start:i}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=e.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;r.value||et(r.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const r=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?e.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!r||r.value?e.items.push({start:[],key:s,sep:[]}):r.sep?this.stack.push(s):Object.assign(r,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=Dn(n),i=or(s);Ao(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=Dn(e),n=or(r);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const r=Dn(e),n=or(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,r){return this.type!=="comment"||this.indent<=r?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function vf(t){const e=t.prettyErrors!==!1;return{lineCounter:t.lineCounter||e&&new $f||null,prettyErrors:e}}function kd(t,e={}){const{lineCounter:r,prettyErrors:n}=vf(e),s=new pa(r==null?void 0:r.addNewLine),i=new fa(e),a=Array.from(i.compose(s.parse(t)));if(n&&r)for(const o of a)o.errors.forEach(is(t,r)),o.warnings.forEach(is(t,r));return a.length>0?a:Object.assign([],{empty:!0},i.streamInfo())}function bf(t,e={}){const{lineCounter:r,prettyErrors:n}=vf(e),s=new pa(r==null?void 0:r.addNewLine),i=new fa(e);let a=null;for(const o of i.compose(s.parse(t),!0,t.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Vt(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&r&&(a.errors.forEach(is(t,r)),a.warnings.forEach(is(t,r))),a}function jd(t,e,r){let n;typeof e=="function"?n=e:r===void 0&&e&&typeof e=="object"&&(r=e);const s=bf(t,r);if(!s)return null;if(s.warnings.forEach(i=>Ul(s.options.logLevel,i)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},r))}function _d(t,e,r){let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:r===void 0&&e&&(r=e),typeof r=="string"&&(r=r.length),typeof r=="number"){const s=Math.round(r);r=s<1?void 0:s>8?{indent:8}:{indent:s}}if(t===void 0){const{keepUndefined:s}=r??e??{};if(!s)return}return new Tr(t,n,r).toString(r)}const No=Object.freeze(Object.defineProperty({__proto__:null,CST:Id,Composer:fa,Document:Tr,Schema:oa,YAMLError:ca,YAMLParseError:Vt,YAMLWarning:sf,Alias:ds,isAlias:Wt,isCollection:be,isDocument:mn,isMap:Yt,isNode:Pe,isPair:ve,isScalar:de,isSeq:Ar,Pair:qe,Scalar:Y,YAMLMap:Ye,YAMLSeq:Qt,Lexer:yf,LineCounter:$f,Parser:pa,parse:jd,parseAllDocuments:kd,parseDocument:bf,stringify:_d,visit:Tt,visitAsync:us},Symbol.toStringTag,{value:"Module"}));var ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xd(t){var e=t.default;if(typeof e=="function"){var r=function n(){if(this instanceof n){var s=[null];s.push.apply(s,arguments);var i=Function.bind.apply(e,s);return new i}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var s=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return t[n]}})}),r}var Ps=Ad;function Ad(t,e){return function r(){e==null&&(e=t.length);var n=[].slice.call(arguments);return n.length>=e?t.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var os={exports:{}};(function(t,e){(function(r,n){var s={};r.PubSub?(s=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=s,n(s)),t!==void 0&&t.exports&&(e=t.exports=s),e.PubSub=s,t.exports=e=s})(typeof window=="object"&&window||ua,function(r){var n={},s=-1,i="*";function a(m){var h;for(h in m)if(Object.prototype.hasOwnProperty.call(m,h))return!0;return!1}function o(m){return function(){throw m}}function c(m,h,v){try{m(h,v)}catch(S){setTimeout(o(S),0)}}function l(m,h,v){m(h,v)}function p(m,h,v,S){var b=n[h],k=S?l:c,P;if(Object.prototype.hasOwnProperty.call(n,h))for(P in b)Object.prototype.hasOwnProperty.call(b,P)&&k(b[P],m,v)}function u(m,h,v){return function(){var b=String(m),k=b.lastIndexOf(".");for(p(m,m,h,v);k!==-1;)b=b.substr(0,k),k=b.lastIndexOf("."),p(m,b,h,v);p(m,i,h,v)}}function d(m){var h=String(m),v=Boolean(Object.prototype.hasOwnProperty.call(n,h)&&a(n[h]));return v}function g(m){for(var h=String(m),v=d(h)||d(i),S=h.lastIndexOf(".");!v&&S!==-1;)h=h.substr(0,S),S=h.lastIndexOf("."),v=d(h);return v}function O(m,h,v,S){m=typeof m=="symbol"?m.toString():m;var b=u(m,h,S),k=g(m);return k?(v===!0?b():setTimeout(b,0),!0):!1}r.publish=function(m,h){return O(m,h,!1,r.immediateExceptions)},r.publishSync=function(m,h){return O(m,h,!0,r.immediateExceptions)},r.subscribe=function(m,h){if(typeof h!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(n,m)||(n[m]={});var v="uid_"+String(++s);return n[m][v]=h,v},r.subscribeAll=function(m){return r.subscribe(i,m)},r.subscribeOnce=function(m,h){var v=r.subscribe(m,function(){r.unsubscribe(v),h.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function(h){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(h)===0&&delete n[v]},r.countSubscriptions=function(h){var v,S,b=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(h)===0){for(S in n[v])b++;break}return b},r.getSubscriptions=function(h){var v,S=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(h)===0&&S.push(v);return S},r.unsubscribe=function(m){var h=function(oe){var me;for(me in n)if(Object.prototype.hasOwnProperty.call(n,me)&&me.indexOf(oe)===0)return!0;return!1},v=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(n,m)||h(m)),S=!v&&typeof m=="string",b=typeof m=="function",k=!1,P,_,R;if(v){r.clearSubscriptions(m);return}for(P in n)if(Object.prototype.hasOwnProperty.call(n,P)){if(_=n[P],S&&_[m]){delete _[m],k=m;break}if(b)for(R in _)Object.prototype.hasOwnProperty.call(_,R)&&_[R]===m&&(delete _[R],k=!0)}return k}})})(os,os.exports);var _i={exports:{}};(function(t,e){(function(r,n){n(e)})(ua,function(r){function n(){for(var y=arguments.length,f=Array(y),$=0;$<y;$++)f[$]=arguments[$];if(f.length>1){f[0]=f[0].slice(0,-1);for(var I=f.length-1,E=1;E<I;++E)f[E]=f[E].slice(1,-1);return f[I]=f[I].slice(1),f.join("")}else return f[0]}function s(y){return"(?:"+y+")"}function i(y){return y===void 0?"undefined":y===null?"null":Object.prototype.toString.call(y).split(" ").pop().split("]").shift().toLowerCase()}function a(y){return y.toUpperCase()}function o(y){return y!=null?y instanceof Array?y:typeof y.length!="number"||y.split||y.setInterval||y.call?[y]:Array.prototype.slice.call(y):[]}function c(y,f){var $=y;if(f)for(var I in f)$[I]=f[I];return $}function l(y){var f="[A-Za-z]",$="[0-9]",I=n($,"[A-Fa-f]"),E=s(s("%[EFef]"+I+"%"+I+I+"%"+I+I)+"|"+s("%[89A-Fa-f]"+I+"%"+I+I)+"|"+s("%"+I+I)),D="[\\:\\/\\?\\#\\[\\]\\@]",M="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",se=n(D,M),ye=y?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",Ie=y?"[\\uE000-\\uF8FF]":"[]",re=n(f,$,"[\\-\\.\\_\\~]",ye);s(f+n(f,$,"[\\+\\-\\.]")+"*"),s(s(E+"|"+n(re,M,"[\\:]"))+"*");var ue=s(s("25[0-5]")+"|"+s("2[0-4]"+$)+"|"+s("1"+$+$)+"|"+s("0?[1-9]"+$)+"|0?0?"+$),Oe=s(ue+"\\."+ue+"\\."+ue+"\\."+ue),H=s(I+"{1,4}"),$e=s(s(H+"\\:"+H)+"|"+Oe),_e=s(s(H+"\\:")+"{6}"+$e),ge=s("\\:\\:"+s(H+"\\:")+"{5}"+$e),Pt=s(s(H)+"?\\:\\:"+s(H+"\\:")+"{4}"+$e),lt=s(s(s(H+"\\:")+"{0,1}"+H)+"?\\:\\:"+s(H+"\\:")+"{3}"+$e),ft=s(s(s(H+"\\:")+"{0,2}"+H)+"?\\:\\:"+s(H+"\\:")+"{2}"+$e),ir=s(s(s(H+"\\:")+"{0,3}"+H)+"?\\:\\:"+H+"\\:"+$e),Ut=s(s(s(H+"\\:")+"{0,4}"+H)+"?\\:\\:"+$e),He=s(s(s(H+"\\:")+"{0,5}"+H)+"?\\:\\:"+H),pt=s(s(s(H+"\\:")+"{0,6}"+H)+"?\\:\\:"),Bt=s([_e,ge,Pt,lt,ft,ir,Ut,He,pt].join("|")),bt=s(s(re+"|"+E)+"+");s("[vV]"+I+"+\\."+n(re,M,"[\\:]")+"+"),s(s(E+"|"+n(re,M))+"*");var Kr=s(E+"|"+n(re,M,"[\\:\\@]"));return s(s(E+"|"+n(re,M,"[\\@]"))+"+"),s(s(Kr+"|"+n("[\\/\\?]",Ie))+"*"),{NOT_SCHEME:new RegExp(n("[^]",f,$,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(n("[^\\%\\:]",re,M),"g"),NOT_HOST:new RegExp(n("[^\\%\\[\\]\\:]",re,M),"g"),NOT_PATH:new RegExp(n("[^\\%\\/\\:\\@]",re,M),"g"),NOT_PATH_NOSCHEME:new RegExp(n("[^\\%\\/\\@]",re,M),"g"),NOT_QUERY:new RegExp(n("[^\\%]",re,M,"[\\:\\@\\/\\?]",Ie),"g"),NOT_FRAGMENT:new RegExp(n("[^\\%]",re,M,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(n("[^]",re,M),"g"),UNRESERVED:new RegExp(re,"g"),OTHER_CHARS:new RegExp(n("[^\\%]",re,se),"g"),PCT_ENCODED:new RegExp(E,"g"),IPV4ADDRESS:new RegExp("^("+Oe+")$"),IPV6ADDRESS:new RegExp("^\\[?("+Bt+")"+s(s("\\%25|\\%(?!"+I+"{2})")+"("+bt+")")+"?\\]?$")}}var p=l(!1),u=l(!0),d=function(){function y(f,$){var I=[],E=!0,D=!1,M=void 0;try{for(var se=f[Symbol.iterator](),ye;!(E=(ye=se.next()).done)&&(I.push(ye.value),!($&&I.length===$));E=!0);}catch(Ie){D=!0,M=Ie}finally{try{!E&&se.return&&se.return()}finally{if(D)throw M}}return I}return function(f,$){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return y(f,$);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),g=function(y){if(Array.isArray(y)){for(var f=0,$=Array(y.length);f<y.length;f++)$[f]=y[f];return $}else return Array.from(y)},O=2147483647,m=36,h=1,v=26,S=38,b=700,k=72,P=128,_="-",R=/^xn--/,oe=/[^\0-\x7E]/,me=/[\x2E\u3002\uFF0E\uFF61]/g,je={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},w=m-h,x=Math.floor,C=String.fromCharCode;function q(y){throw new RangeError(je[y])}function V(y,f){for(var $=[],I=y.length;I--;)$[I]=f(y[I]);return $}function U(y,f){var $=y.split("@"),I="";$.length>1&&(I=$[0]+"@",y=$[1]),y=y.replace(me,".");var E=y.split("."),D=V(E,f).join(".");return I+D}function W(y){for(var f=[],$=0,I=y.length;$<I;){var E=y.charCodeAt($++);if(E>=55296&&E<=56319&&$<I){var D=y.charCodeAt($++);(D&64512)==56320?f.push(((E&1023)<<10)+(D&1023)+65536):(f.push(E),$--)}else f.push(E)}return f}var le=function(f){return String.fromCodePoint.apply(String,g(f))},te=function(f){return f-48<10?f-22:f-65<26?f-65:f-97<26?f-97:m},z=function(f,$){return f+22+75*(f<26)-(($!=0)<<5)},Se=function(f,$,I){var E=0;for(f=I?x(f/b):f>>1,f+=x(f/$);f>w*v>>1;E+=m)f=x(f/w);return x(E+(w+1)*f/(f+S))},Ge=function(f){var $=[],I=f.length,E=0,D=P,M=k,se=f.lastIndexOf(_);se<0&&(se=0);for(var ye=0;ye<se;++ye)f.charCodeAt(ye)>=128&&q("not-basic"),$.push(f.charCodeAt(ye));for(var Ie=se>0?se+1:0;Ie<I;){for(var re=E,ue=1,Oe=m;;Oe+=m){Ie>=I&&q("invalid-input");var H=te(f.charCodeAt(Ie++));(H>=m||H>x((O-E)/ue))&&q("overflow"),E+=H*ue;var $e=Oe<=M?h:Oe>=M+v?v:Oe-M;if(H<$e)break;var _e=m-$e;ue>x(O/_e)&&q("overflow"),ue*=_e}var ge=$.length+1;M=Se(E-re,ge,re==0),x(E/ge)>O-D&&q("overflow"),D+=x(E/ge),E%=ge,$.splice(E++,0,D)}return String.fromCodePoint.apply(String,$)},Re=function(f){var $=[];f=W(f);var I=f.length,E=P,D=0,M=k,se=!0,ye=!1,Ie=void 0;try{for(var re=f[Symbol.iterator](),ue;!(se=(ue=re.next()).done);se=!0){var Oe=ue.value;Oe<128&&$.push(C(Oe))}}catch(zr){ye=!0,Ie=zr}finally{try{!se&&re.return&&re.return()}finally{if(ye)throw Ie}}var H=$.length,$e=H;for(H&&$.push(_);$e<I;){var _e=O,ge=!0,Pt=!1,lt=void 0;try{for(var ft=f[Symbol.iterator](),ir;!(ge=(ir=ft.next()).done);ge=!0){var Ut=ir.value;Ut>=E&&Ut<_e&&(_e=Ut)}}catch(zr){Pt=!0,lt=zr}finally{try{!ge&&ft.return&&ft.return()}finally{if(Pt)throw lt}}var He=$e+1;_e-E>x((O-D)/He)&&q("overflow"),D+=(_e-E)*He,E=_e;var pt=!0,Bt=!1,bt=void 0;try{for(var Kr=f[Symbol.iterator](),ho;!(pt=(ho=Kr.next()).done);pt=!0){var yo=ho.value;if(yo<E&&++D>O&&q("overflow"),yo==E){for(var xn=D,An=m;;An+=m){var Nn=An<=M?h:An>=M+v?v:An-M;if(xn<Nn)break;var $o=xn-Nn,go=m-Nn;$.push(C(z(Nn+$o%go,0))),xn=x($o/go)}$.push(C(z(xn,0))),M=Se(D,He,$e==H),D=0,++$e}}}catch(zr){Bt=!0,bt=zr}finally{try{!pt&&Kr.return&&Kr.return()}finally{if(Bt)throw bt}}++D,++E}return $.join("")},he=function(f){return U(f,function($){return R.test($)?Ge($.slice(4).toLowerCase()):$})},X=function(f){return U(f,function($){return oe.test($)?"xn--"+Re($):$})},Z={version:"2.1.0",ucs2:{decode:W,encode:le},decode:Ge,encode:Re,toASCII:X,toUnicode:he},fe={};function pe(y){var f=y.charCodeAt(0),$=void 0;return f<16?$="%0"+f.toString(16).toUpperCase():f<128?$="%"+f.toString(16).toUpperCase():f<2048?$="%"+(f>>6|192).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase():$="%"+(f>>12|224).toString(16).toUpperCase()+"%"+(f>>6&63|128).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase(),$}function Ce(y){for(var f="",$=0,I=y.length;$<I;){var E=parseInt(y.substr($+1,2),16);if(E<128)f+=String.fromCharCode(E),$+=3;else if(E>=194&&E<224){if(I-$>=6){var D=parseInt(y.substr($+4,2),16);f+=String.fromCharCode((E&31)<<6|D&63)}else f+=y.substr($,6);$+=6}else if(E>=224){if(I-$>=9){var M=parseInt(y.substr($+4,2),16),se=parseInt(y.substr($+7,2),16);f+=String.fromCharCode((E&15)<<12|(M&63)<<6|se&63)}else f+=y.substr($,9);$+=9}else f+=y.substr($,3),$+=3}return f}function Ee(y,f){function $(I){var E=Ce(I);return E.match(f.UNRESERVED)?E:I}return y.scheme&&(y.scheme=String(y.scheme).replace(f.PCT_ENCODED,$).toLowerCase().replace(f.NOT_SCHEME,"")),y.userinfo!==void 0&&(y.userinfo=String(y.userinfo).replace(f.PCT_ENCODED,$).replace(f.NOT_USERINFO,pe).replace(f.PCT_ENCODED,a)),y.host!==void 0&&(y.host=String(y.host).replace(f.PCT_ENCODED,$).toLowerCase().replace(f.NOT_HOST,pe).replace(f.PCT_ENCODED,a)),y.path!==void 0&&(y.path=String(y.path).replace(f.PCT_ENCODED,$).replace(y.scheme?f.NOT_PATH:f.NOT_PATH_NOSCHEME,pe).replace(f.PCT_ENCODED,a)),y.query!==void 0&&(y.query=String(y.query).replace(f.PCT_ENCODED,$).replace(f.NOT_QUERY,pe).replace(f.PCT_ENCODED,a)),y.fragment!==void 0&&(y.fragment=String(y.fragment).replace(f.PCT_ENCODED,$).replace(f.NOT_FRAGMENT,pe).replace(f.PCT_ENCODED,a)),y}function Ot(y){return y.replace(/^0*(.*)/,"$1")||"0"}function rr(y,f){var $=y.match(f.IPV4ADDRESS)||[],I=d($,2),E=I[1];return E?E.split(".").map(Ot).join("."):y}function Br(y,f){var $=y.match(f.IPV6ADDRESS)||[],I=d($,3),E=I[1],D=I[2];if(E){for(var M=E.toLowerCase().split("::").reverse(),se=d(M,2),ye=se[0],Ie=se[1],re=Ie?Ie.split(":").map(Ot):[],ue=ye.split(":").map(Ot),Oe=f.IPV4ADDRESS.test(ue[ue.length-1]),H=Oe?7:8,$e=ue.length-H,_e=Array(H),ge=0;ge<H;++ge)_e[ge]=re[ge]||ue[$e+ge]||"";Oe&&(_e[H-1]=rr(_e[H-1],f));var Pt=_e.reduce(function(He,pt,Bt){if(!pt||pt==="0"){var bt=He[He.length-1];bt&&bt.index+bt.length===Bt?bt.length++:He.push({index:Bt,length:1})}return He},[]),lt=Pt.sort(function(He,pt){return pt.length-He.length})[0],ft=void 0;if(lt&&lt.length>1){var ir=_e.slice(0,lt.index),Ut=_e.slice(lt.index+lt.length);ft=ir.join(":")+"::"+Ut.join(":")}else ft=_e.join(":");return D&&(ft+="%"+D),ft}else return y}var jn=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,_n="".match(/(){0}/)[1]===void 0;function gt(y){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},$={},I=f.iri!==!1?u:p;f.reference==="suffix"&&(y=(f.scheme?f.scheme+":":"")+"//"+y);var E=y.match(jn);if(E){_n?($.scheme=E[1],$.userinfo=E[3],$.host=E[4],$.port=parseInt(E[5],10),$.path=E[6]||"",$.query=E[7],$.fragment=E[8],isNaN($.port)&&($.port=E[5])):($.scheme=E[1]||void 0,$.userinfo=y.indexOf("@")!==-1?E[3]:void 0,$.host=y.indexOf("//")!==-1?E[4]:void 0,$.port=parseInt(E[5],10),$.path=E[6]||"",$.query=y.indexOf("?")!==-1?E[7]:void 0,$.fragment=y.indexOf("#")!==-1?E[8]:void 0,isNaN($.port)&&($.port=y.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?E[4]:void 0)),$.host&&($.host=Br(rr($.host,I),I)),$.scheme===void 0&&$.userinfo===void 0&&$.host===void 0&&$.port===void 0&&!$.path&&$.query===void 0?$.reference="same-document":$.scheme===void 0?$.reference="relative":$.fragment===void 0?$.reference="absolute":$.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==$.reference&&($.error=$.error||"URI is not a "+f.reference+" reference.");var D=fe[(f.scheme||$.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!D||!D.unicodeSupport)){if($.host&&(f.domainHost||D&&D.domainHost))try{$.host=Z.toASCII($.host.replace(I.PCT_ENCODED,Ce).toLowerCase())}catch(M){$.error=$.error||"Host's domain name can not be converted to ASCII via punycode: "+M}Ee($,p)}else Ee($,I);D&&D.parse&&D.parse($,f)}else $.error=$.error||"URI can not be parsed.";return $}function Zp(y,f){var $=f.iri!==!1?u:p,I=[];return y.userinfo!==void 0&&(I.push(y.userinfo),I.push("@")),y.host!==void 0&&I.push(Br(rr(String(y.host),$),$).replace($.IPV6ADDRESS,function(E,D,M){return"["+D+(M?"%25"+M:"")+"]"})),(typeof y.port=="number"||typeof y.port=="string")&&(I.push(":"),I.push(String(y.port))),I.length?I.join(""):void 0}var ro=/^\.\.?\//,no=/^\/\.(\/|$)/,so=/^\/\.\.(\/|$)/,eu=/^\/?(?:.|\n)*?(?=\/|$)/;function nr(y){for(var f=[];y.length;)if(y.match(ro))y=y.replace(ro,"");else if(y.match(no))y=y.replace(no,"/");else if(y.match(so))y=y.replace(so,"/"),f.pop();else if(y==="."||y==="..")y="";else{var $=y.match(eu);if($){var I=$[0];y=y.slice(I.length),f.push(I)}else throw new Error("Unexpected dot segment condition")}return f.join("")}function ot(y){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},$=f.iri?u:p,I=[],E=fe[(f.scheme||y.scheme||"").toLowerCase()];if(E&&E.serialize&&E.serialize(y,f),y.host&&!$.IPV6ADDRESS.test(y.host)){if(f.domainHost||E&&E.domainHost)try{y.host=f.iri?Z.toUnicode(y.host):Z.toASCII(y.host.replace($.PCT_ENCODED,Ce).toLowerCase())}catch(se){y.error=y.error||"Host's domain name can not be converted to "+(f.iri?"Unicode":"ASCII")+" via punycode: "+se}}Ee(y,$),f.reference!=="suffix"&&y.scheme&&(I.push(y.scheme),I.push(":"));var D=Zp(y,f);if(D!==void 0&&(f.reference!=="suffix"&&I.push("//"),I.push(D),y.path&&y.path.charAt(0)!=="/"&&I.push("/")),y.path!==void 0){var M=y.path;!f.absolutePath&&(!E||!E.absolutePath)&&(M=nr(M)),D===void 0&&(M=M.replace(/^\/\//,"/%2F")),I.push(M)}return y.query!==void 0&&(I.push("?"),I.push(y.query)),y.fragment!==void 0&&(I.push("#"),I.push(y.fragment)),I.join("")}function io(y,f){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},I=arguments[3],E={};return I||(y=gt(ot(y,$),$),f=gt(ot(f,$),$)),$=$||{},!$.tolerant&&f.scheme?(E.scheme=f.scheme,E.userinfo=f.userinfo,E.host=f.host,E.port=f.port,E.path=nr(f.path||""),E.query=f.query):(f.userinfo!==void 0||f.host!==void 0||f.port!==void 0?(E.userinfo=f.userinfo,E.host=f.host,E.port=f.port,E.path=nr(f.path||""),E.query=f.query):(f.path?(f.path.charAt(0)==="/"?E.path=nr(f.path):((y.userinfo!==void 0||y.host!==void 0||y.port!==void 0)&&!y.path?E.path="/"+f.path:y.path?E.path=y.path.slice(0,y.path.lastIndexOf("/")+1)+f.path:E.path=f.path,E.path=nr(E.path)),E.query=f.query):(E.path=y.path,f.query!==void 0?E.query=f.query:E.query=y.query),E.userinfo=y.userinfo,E.host=y.host,E.port=y.port),E.scheme=y.scheme),E.fragment=f.fragment,E}function tu(y,f,$){var I=c({scheme:"null"},$);return ot(io(gt(y,I),gt(f,I),I,!0),I)}function ru(y,f){return typeof y=="string"?y=ot(gt(y,f),f):i(y)==="object"&&(y=gt(ot(y,f),f)),y}function nu(y,f,$){return typeof y=="string"?y=ot(gt(y,$),$):i(y)==="object"&&(y=ot(y,$)),typeof f=="string"?f=ot(gt(f,$),$):i(f)==="object"&&(f=ot(f,$)),y===f}function su(y,f){return y&&y.toString().replace(!f||!f.iri?p.ESCAPE:u.ESCAPE,pe)}function vt(y,f){return y&&y.toString().replace(!f||!f.iri?p.PCT_ENCODED:u.PCT_ENCODED,Ce)}var Fr={scheme:"http",domainHost:!0,parse:function(f,$){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f},serialize:function(f,$){var I=String(f.scheme).toLowerCase()==="https";return(f.port===(I?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}},ao={scheme:"https",domainHost:Fr.domainHost,parse:Fr.parse,serialize:Fr.serialize};function oo(y){return typeof y.secure=="boolean"?y.secure:String(y.scheme).toLowerCase()==="wss"}var Vr={scheme:"ws",domainHost:!0,parse:function(f,$){var I=f;return I.secure=oo(I),I.resourceName=(I.path||"/")+(I.query?"?"+I.query:""),I.path=void 0,I.query=void 0,I},serialize:function(f,$){if((f.port===(oo(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){var I=f.resourceName.split("?"),E=d(I,2),D=E[0],M=E[1];f.path=D&&D!=="/"?D:void 0,f.query=M,f.resourceName=void 0}return f.fragment=void 0,f}},co={scheme:"wss",domainHost:Vr.domainHost,parse:Vr.parse,serialize:Vr.serialize},iu={},lo="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",ct="[0-9A-Fa-f]",au=s(s("%[EFef]"+ct+"%"+ct+ct+"%"+ct+ct)+"|"+s("%[89A-Fa-f]"+ct+"%"+ct+ct)+"|"+s("%"+ct+ct)),ou="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",cu="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",lu=n(cu,'[\\"\\\\]'),fu="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",pu=new RegExp(lo,"g"),sr=new RegExp(au,"g"),uu=new RegExp(n("[^]",ou,"[\\.]",'[\\"]',lu),"g"),fo=new RegExp(n("[^]",lo,fu),"g"),du=fo;function Fs(y){var f=Ce(y);return f.match(pu)?f:y}var po={scheme:"mailto",parse:function(f,$){var I=f,E=I.to=I.path?I.path.split(","):[];if(I.path=void 0,I.query){for(var D=!1,M={},se=I.query.split("&"),ye=0,Ie=se.length;ye<Ie;++ye){var re=se[ye].split("=");switch(re[0]){case"to":for(var ue=re[1].split(","),Oe=0,H=ue.length;Oe<H;++Oe)E.push(ue[Oe]);break;case"subject":I.subject=vt(re[1],$);break;case"body":I.body=vt(re[1],$);break;default:D=!0,M[vt(re[0],$)]=vt(re[1],$);break}}D&&(I.headers=M)}I.query=void 0;for(var $e=0,_e=E.length;$e<_e;++$e){var ge=E[$e].split("@");if(ge[0]=vt(ge[0]),$.unicodeSupport)ge[1]=vt(ge[1],$).toLowerCase();else try{ge[1]=Z.toASCII(vt(ge[1],$).toLowerCase())}catch(Pt){I.error=I.error||"Email address's domain name can not be converted to ASCII via punycode: "+Pt}E[$e]=ge.join("@")}return I},serialize:function(f,$){var I=f,E=o(f.to);if(E){for(var D=0,M=E.length;D<M;++D){var se=String(E[D]),ye=se.lastIndexOf("@"),Ie=se.slice(0,ye).replace(sr,Fs).replace(sr,a).replace(uu,pe),re=se.slice(ye+1);try{re=$.iri?Z.toUnicode(re):Z.toASCII(vt(re,$).toLowerCase())}catch($e){I.error=I.error||"Email address's domain name can not be converted to "+($.iri?"Unicode":"ASCII")+" via punycode: "+$e}E[D]=Ie+"@"+re}I.path=E.join(",")}var ue=f.headers=f.headers||{};f.subject&&(ue.subject=f.subject),f.body&&(ue.body=f.body);var Oe=[];for(var H in ue)ue[H]!==iu[H]&&Oe.push(H.replace(sr,Fs).replace(sr,a).replace(fo,pe)+"="+ue[H].replace(sr,Fs).replace(sr,a).replace(du,pe));return Oe.length&&(I.query=Oe.join("&")),I}},mu=/^([^\:]+)\:(.*)/,uo={scheme:"urn",parse:function(f,$){var I=f.path&&f.path.match(mu),E=f;if(I){var D=$.scheme||E.scheme||"urn",M=I[1].toLowerCase(),se=I[2],ye=D+":"+($.nid||M),Ie=fe[ye];E.nid=M,E.nss=se,E.path=void 0,Ie&&(E=Ie.parse(E,$))}else E.error=E.error||"URN can not be parsed.";return E},serialize:function(f,$){var I=$.scheme||f.scheme||"urn",E=f.nid,D=I+":"+($.nid||E),M=fe[D];M&&(f=M.serialize(f,$));var se=f,ye=f.nss;return se.path=(E||$.nid)+":"+ye,se}},hu=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,mo={scheme:"urn:uuid",parse:function(f,$){var I=f;return I.uuid=I.nss,I.nss=void 0,!$.tolerant&&(!I.uuid||!I.uuid.match(hu))&&(I.error=I.error||"UUID is not valid."),I},serialize:function(f,$){var I=f;return I.nss=(f.uuid||"").toLowerCase(),I}};fe[Fr.scheme]=Fr,fe[ao.scheme]=ao,fe[Vr.scheme]=Vr,fe[co.scheme]=co,fe[po.scheme]=po,fe[uo.scheme]=uo,fe[mo.scheme]=mo,r.SCHEMES=fe,r.pctEncChar=pe,r.pctDecChars=Ce,r.parse=gt,r.removeDotSegments=nr,r.serialize=ot,r.resolveComponents=io,r.resolve=tu,r.normalize=ru,r.equal=nu,r.escapeComponent=su,r.unescapeComponent=vt,Object.defineProperty(r,"__esModule",{value:!0})})})(_i,_i.exports);const vr=_i.exports,Nd=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,Cd={null:t=>t===null,boolean:t=>typeof t=="boolean",object:Nd,array:t=>Array.isArray(t),number:t=>typeof t=="number",integer:t=>Number.isInteger(t),string:t=>typeof t=="string"},Td=(t,e)=>Cd[e](t),qd=(t,e)=>{const r=vr.resolve(t,e,{iri:!0});if(vr.resolve(t,"",{iri:!0})&&vr.parse(r).scheme==="file"&&vr.parse(t).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${t}'`);return r},Rd=t=>vr.unescapeComponent(vr.parse(t).fragment)||"",Gr=47,Dd=(t,e)=>{if(t===e)return"";let r=1;const n=t.length-1,s=e.length-r,i=n<s?n:s;let a=-1,o=0;for(;o<i;o++){const l=t.charCodeAt(o+1);if(l!==e.charCodeAt(r+o))break;l===Gr&&(a=o)}if(s>i){if(e.charCodeAt(r+o)===Gr)return e.slice(r+o+1);if(o===0)return e.slice(r+o)}n>i&&(t.charCodeAt(o+1)===Gr?a=o:i===0&&(a=0));let c="";for(o=a+2;o<=t.length;++o)(o===t.length||t.charCodeAt(o)===Gr)&&(c+=c.length===0?"..":"/..");return r+=a,c.length>0?`${c}${e.slice(r,e.length)}`:(e.charCodeAt(r)===Gr&&++r,e.slice(r,e.length))};var da={jsonTypeOf:Td,resolveUrl:qd,urlFragment:Rd,pathRelative:Dd};const ma=Ps,gn="",vn=t=>{if(t.length>0&&t[0]!=="/")throw Error("Invalid JSON Pointer");return t.split("/").slice(1).map(Kd)},Ld=(t,e=void 0)=>{const r=vn(t),n=s=>r.reduce(([i,a],o)=>[wt(i,o,a),Ht(o,a)],[s,""])[0];return e===void 0?n:n(e)},Md=(t,e=void 0,r=void 0)=>{const n=vn(t),s=ma((i,a)=>xi(n,i,a,gn));return e===void 0?s:s(e,r)},xi=(t,e,r,n)=>{if(t.length===0)return r;if(t.length>1)if(Array.isArray(e)){const s=t.shift(),i=[...e];return i[s]=xi(t,wt(e,s,n),r,Ht(s,n)),i}else{const s=t.shift();return{...e,[s]:xi(t,wt(e,s,n),r,Ht(s,n))}}else if(Array.isArray(e)){const s=[...e],i=ha(e,t[0]);return s[i]=r,s}else return typeof e=="object"&&e!==null?{...e,[t[0]]:r}:wt(e,t[0],n)},Ud=(t,e=void 0,r=void 0)=>{const n=vn(t),s=ma((i,a)=>Sf(n,i,a,gn));return e===void 0?s:s(e,r)},Sf=(t,e,r,n)=>{if(t.length!==0)if(t.length===1&&!If(e)){const s=ha(e,t[0]);e[s]=r}else{const s=t.shift();Sf(t,wt(e,s,n),r,Ht(s,n))}},Bd=(t,e=void 0)=>{const r=vn(t),n=s=>wf(r,s,gn);return e===void 0?n:n(e)},wf=(t,e,r)=>{if(t.length!=0)if(t.length>1){const n=t.shift(),s=wt(e,n,r);return{...e,[n]:wf(t,s,Ht(n,r))}}else{if(Array.isArray(e))return e.filter((n,s)=>s!=t[0]);if(typeof e=="object"&&e!==null){const{[t[0]]:n,...s}=e;return s}else return wt(e,t[0],r)}},Fd=(t,e=void 0)=>{const r=vn(t),n=s=>Ef(r,s,gn);return e===void 0?n:n(e)},Ef=(t,e,r)=>{if(t.length!==0)if(t.length>1){const n=t.shift(),s=wt(e,n,r);Ef(t,s,Ht(n,r))}else Array.isArray(e)?e.splice(t[0],1):typeof e=="object"&&e!==null?delete e[t[0]]:wt(e,t[0],r)},Ht=ma((t,e)=>e+"/"+Vd(t)),Vd=t=>t.toString().replace(/~/g,"~0").replace(/\//g,"~1"),Kd=t=>t.toString().replace(/~1/g,"/").replace(/~0/g,"~"),ha=(t,e)=>Array.isArray(t)&&e==="-"?t.length:e,wt=(t,e,r="")=>{if(t===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${e}'`);if(t===null)throw TypeError(`Value at '${r}' is null and does not have property '${e}'`);if(If(t))throw TypeError(`Value at '${r}' is a ${typeof t} and does not have property '${e}'`);{const n=ha(t,e);return t[n]}},If=t=>t===null||typeof t!="object";var ks={nil:gn,append:Ht,get:Ld,set:Md,assign:Ud,unset:Bd,remove:Fd};const Of=Symbol("$__value"),ya=Symbol("$__href"),zd=(t,e)=>Object.freeze({[ya]:t,[Of]:e}),Jd=t=>t&&t[ya]!==void 0,Gd=t=>t[ya],Hd=t=>t[Of];var $a={cons:zd,isReference:Jd,href:Gd,value:Hd};const Xd=ks,Zt=Ps,{resolveUrl:Wd,jsonTypeOf:Yd}=da,Co=$a,ga=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),Qd=(t,e="")=>Object.freeze({...ga,id:Wd(e,""),instance:t,value:t}),Zd=(t,e=ga)=>{if(!t.startsWith("#"))throw Error(`No JSON document found at '${t.split("#")[0]}'`);return Object.freeze({...e,pointer:t.substr(1)})},em=t=>`${t.id}#${encodeURI(t.pointer)}`,Ke=t=>Co.isReference(t.value)?Co.value(t.value):t.value,tm=(t,e)=>t in Ke(e),rm=Zt((t,e)=>Yd(Ke(t),e)),Lt=(t,e)=>Object.freeze({...e,pointer:Xd.append(t,e.pointer),value:Ke(e)[t]}),nm=t=>Object.keys(Ke(t)).map(e=>[e,Lt(e,t)]),sm=t=>Object.keys(Ke(t)),im=Zt((t,e)=>Ke(e).map((r,n,s,i)=>t(Lt(n,e),n,s,i))),am=Zt((t,e)=>Ke(e).forEach((r,n,s,i)=>t(Lt(n,e),n,s,i))),om=Zt((t,e)=>Ke(e).map((r,n,s,i)=>Lt(n,e)).filter((r,n,s,i)=>t(r,n,s,i))),cm=Zt((t,e,r)=>Ke(r).reduce((n,s,i)=>t(n,Lt(i,r),i),e)),lm=Zt((t,e)=>Ke(e).every((r,n,s,i)=>t(Lt(n,e),n,s,i))),fm=Zt((t,e)=>Ke(e).some((r,n,s,i)=>t(Lt(n,e),n,s,i))),pm=t=>Ke(t).length;var va={nil:ga,cons:Qd,get:Zd,uri:em,value:Ke,has:tm,typeOf:rm,length:pm,step:Lt,entries:nm,keys:sm,map:im,forEach:am,filter:om,reduce:cm,every:lm,some:fm},Pf=async t=>Object.entries(await t),qr=um;function um(t,e){return function r(){e==null&&(e=t.length);var n=[].slice.call(arguments);return n.length>=e?t.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}const dm=qr;var ba=dm(async(t,e)=>(await e).map(t));const mm=qr;var Sa=mm(async(t,e,r)=>(await r).reduce(async(n,s)=>t(await n,s),e));const hm=qr,ym=Sa;var $m=hm(async(t,e,r={})=>ym(async(n,s)=>await t(s)?n.concat([s]):n,[],e,r));const gm=qr,vm=ba;var bm=gm(async(t,e)=>{const r=await vm(t,e);return(await Promise.all(r)).some(n=>n)});const Sm=qr,wm=ba;var Em=Sm(async(t,e)=>{const r=await wm(t,e);return(await Promise.all(r)).every(n=>n)});const Im=qr;var kf=Im((t,e)=>t.reduce(async(r,n)=>n(await r),e)),Om=t=>Promise.all(t);const Pm=kf,km=Pf,jm=Sa;var _m=t=>Pm([km,jm(async(e,[r,n])=>(e[r]=await n,e),{})],t),ke={entries:Pf,map:ba,filter:$m,reduce:Sa,some:bm,every:Em,pipeline:kf,all:Om,allValues:_m},wa={exports:{}};(function(t){(function(e,r){t.exports?t.exports=r():e.moo=r()})(ua,function(){var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function s(w){return w&&r.call(w)==="[object RegExp]"}function i(w){return w&&typeof w=="object"&&!s(w)&&!Array.isArray(w)}function a(w){return w.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(w){var x=new RegExp("|"+w);return x.exec("").length-1}function c(w){return"("+w+")"}function l(w){if(!w.length)return"(?!)";var x=w.map(function(C){return"(?:"+C+")"}).join("|");return"(?:"+x+")"}function p(w){if(typeof w=="string")return"(?:"+a(w)+")";if(s(w)){if(w.ignoreCase)throw new Error("RegExp /i flag not allowed");if(w.global)throw new Error("RegExp /g flag is implied");if(w.sticky)throw new Error("RegExp /y flag is implied");if(w.multiline)throw new Error("RegExp /m flag is implied");return w.source}else throw new Error("Not a pattern: "+w)}function u(w,x){return w.length>x?w:Array(x-w.length+1).join(" ")+w}function d(w,x){for(var C=w.length,q=0;;){var V=w.lastIndexOf(`
`,C-1);if(V===-1||(q++,C=V,q===x)||C===0)break}var U=q<x?0:C+1;return w.substring(U).split(`
`)}function g(w){for(var x=Object.getOwnPropertyNames(w),C=[],q=0;q<x.length;q++){var V=x[q],U=w[V],W=[].concat(U);if(V==="include"){for(var le=0;le<W.length;le++)C.push({include:W[le]});continue}var te=[];W.forEach(function(z){i(z)?(te.length&&C.push(m(V,te)),C.push(m(V,z)),te=[]):te.push(z)}),te.length&&C.push(m(V,te))}return C}function O(w){for(var x=[],C=0;C<w.length;C++){var q=w[C];if(q.include){for(var V=[].concat(q.include),U=0;U<V.length;U++)x.push({include:V[U]});continue}if(!q.type)throw new Error("Rule has no type: "+JSON.stringify(q));x.push(m(q.type,q))}return x}function m(w,x){if(i(x)||(x={match:x}),x.include)throw new Error("Matching rules cannot also include states");var C={defaultType:w,lineBreaks:!!x.error||!!x.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var q in x)e.call(x,q)&&(C[q]=x[q]);if(typeof C.type=="string"&&w!==C.type)throw new Error("Type transform cannot be a string (type '"+C.type+"' for token '"+w+"')");var V=C.match;return C.match=Array.isArray(V)?V:V?[V]:[],C.match.sort(function(U,W){return s(U)&&s(W)?0:s(W)?-1:s(U)?1:W.length-U.length}),C}function h(w){return Array.isArray(w)?O(w):g(w)}var v=m("error",{lineBreaks:!0,shouldThrow:!0});function S(w,x){for(var C=null,q=Object.create(null),V=!0,U=null,W=[],le=[],te=0;te<w.length;te++)w[te].fallback&&(V=!1);for(var te=0;te<w.length;te++){var z=w[te];if(z.include)throw new Error("Inheritance is not allowed in stateless lexers");if(z.error||z.fallback){if(C)throw!z.fallback==!C.fallback?new Error("Multiple "+(z.fallback?"fallback":"error")+" rules not allowed (for token '"+z.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+z.defaultType+"')");C=z}var Se=z.match.slice();if(V)for(;Se.length&&typeof Se[0]=="string"&&Se[0].length===1;){var Ge=Se.shift();q[Ge.charCodeAt(0)]=z}if(z.pop||z.push||z.next){if(!x)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+z.defaultType+"')");if(z.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+z.defaultType+"')")}if(Se.length!==0){V=!1,W.push(z);for(var Re=0;Re<Se.length;Re++){var he=Se[Re];if(s(he)){if(U===null)U=he.unicode;else if(U!==he.unicode&&z.fallback===!1)throw new Error("If one rule is /u then all must be")}}var X=l(Se.map(p)),Z=new RegExp(X);if(Z.test(""))throw new Error("RegExp matches empty string: "+Z);var fe=o(X);if(fe>0)throw new Error("RegExp has capture groups: "+Z+`
Use (?: … ) instead`);if(!z.lineBreaks&&Z.test(`
`))throw new Error("Rule should declare lineBreaks: "+Z);le.push(c(X))}}var pe=C&&C.fallback,Ce=n&&!pe?"ym":"gm",Ee=n||pe?"":"|";U===!0&&(Ce+="u");var Ot=new RegExp(l(le)+Ee,Ce);return{regexp:Ot,groups:W,fast:q,error:C||v}}function b(w){var x=S(h(w));return new R({start:x},"start")}function k(w,x,C){var q=w&&(w.push||w.next);if(q&&!C[q])throw new Error("Missing state '"+q+"' (in token '"+w.defaultType+"' of state '"+x+"')");if(w&&w.pop&&+w.pop!=1)throw new Error("pop must be 1 (in token '"+w.defaultType+"' of state '"+x+"')")}function P(w,x){var C=w.$all?h(w.$all):[];delete w.$all;var q=Object.getOwnPropertyNames(w);x||(x=q[0]);for(var V=Object.create(null),U=0;U<q.length;U++){var W=q[U];V[W]=h(w[W]).concat(C)}for(var U=0;U<q.length;U++)for(var W=q[U],le=V[W],te=Object.create(null),z=0;z<le.length;z++){var Se=le[z];if(Se.include){var Ge=[z,1];if(Se.include!==W&&!te[Se.include]){te[Se.include]=!0;var Re=V[Se.include];if(!Re)throw new Error("Cannot include nonexistent state '"+Se.include+"' (in state '"+W+"')");for(var he=0;he<Re.length;he++){var X=Re[he];le.indexOf(X)===-1&&Ge.push(X)}}le.splice.apply(le,Ge),z--}}for(var Z=Object.create(null),U=0;U<q.length;U++){var W=q[U];Z[W]=S(V[W],!0)}for(var U=0;U<q.length;U++){for(var fe=q[U],pe=Z[fe],Ce=pe.groups,z=0;z<Ce.length;z++)k(Ce[z],fe,Z);for(var Ee=Object.getOwnPropertyNames(pe.fast),z=0;z<Ee.length;z++)k(pe.fast[Ee[z]],fe,Z)}return new R(Z,x)}function _(w){for(var x=typeof Map<"u",C=x?new Map:Object.create(null),q=Object.getOwnPropertyNames(w),V=0;V<q.length;V++){var U=q[V],W=w[U],le=Array.isArray(W)?W:[W];le.forEach(function(te){if(typeof te!="string")throw new Error("keyword must be string (in keyword '"+U+"')");x?C.set(te,U):C[te]=U})}return function(te){return x?C.get(te):C[te]}}var R=function(w,x){this.startState=x,this.states=w,this.buffer="",this.stack=[],this.reset()};R.prototype.reset=function(w,x){return this.buffer=w||"",this.index=0,this.line=x?x.line:1,this.col=x?x.col:1,this.queuedToken=x?x.queuedToken:null,this.queuedText=x?x.queuedText:"",this.queuedThrow=x?x.queuedThrow:null,this.setState(x?x.state:this.startState),this.stack=x&&x.stack?x.stack.slice():[],this},R.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedText:this.queuedText,queuedThrow:this.queuedThrow}},R.prototype.setState=function(w){if(!(!w||this.state===w)){this.state=w;var x=this.states[w];this.groups=x.groups,this.error=x.error,this.re=x.regexp,this.fast=x.fast}},R.prototype.popState=function(){this.setState(this.stack.pop())},R.prototype.pushState=function(w){this.stack.push(this.state),this.setState(w)};var oe=n?function(w,x){return w.exec(x)}:function(w,x){var C=w.exec(x);return C[0].length===0?null:C};R.prototype._getGroup=function(w){for(var x=this.groups.length,C=0;C<x;C++)if(w[C+1]!==void 0)return this.groups[C];throw new Error("Cannot find token type for matched text")};function me(){return this.value}if(R.prototype.next=function(){var w=this.index;if(this.queuedGroup){var x=this._token(this.queuedGroup,this.queuedText,w);return this.queuedGroup=null,this.queuedText="",x}var C=this.buffer;if(w!==C.length){var W=this.fast[C.charCodeAt(w)];if(W)return this._token(W,C.charAt(w),w);var q=this.re;q.lastIndex=w;var V=oe(q,C),U=this.error;if(V==null)return this._token(U,C.slice(w,C.length),w);var W=this._getGroup(V),le=V[0];return U.fallback&&V.index!==w?(this.queuedGroup=W,this.queuedText=le,this._token(U,C.slice(w,V.index),w)):this._token(W,le,w)}},R.prototype._token=function(w,x,C){var q=0;if(w.lineBreaks){var V=/\n/g,U=1;if(x===`
`)q=1;else for(;V.exec(x);)q++,U=V.lastIndex}var W={type:typeof w.type=="function"&&w.type(x)||w.defaultType,value:typeof w.value=="function"?w.value(x):x,text:x,toString:me,offset:C,lineBreaks:q,line:this.line,col:this.col},le=x.length;if(this.index+=le,this.line+=q,q!==0?this.col=le-U+1:this.col+=le,w.shouldThrow){var te=new Error(this.formatError(W,"invalid syntax"));throw te}return w.pop?this.popState():w.push?this.pushState(w.push):w.next&&this.setState(w.next),W},typeof Symbol<"u"&&Symbol.iterator){var je=function(w){this.lexer=w};je.prototype.next=function(){var w=this.lexer.next();return{value:w,done:!w}},je.prototype[Symbol.iterator]=function(){return this},R.prototype[Symbol.iterator]=function(){return new je(this)}}return R.prototype.formatError=function(w,x){if(w==null)var C=this.buffer.slice(this.index),w={text:C,offset:this.index,lineBreaks:C.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var q=2,V=Math.max(w.line-q,1),U=w.line+q,W=String(U).length,le=d(this.buffer,this.line-w.line+q+1).slice(0,5),te=[];te.push(x+" at line "+w.line+" col "+w.col+":"),te.push("");for(var z=0;z<le.length;z++){var Se=le[z],Ge=V+z;te.push(u(String(Ge),W)+"  "+Se),Ge===w.line&&te.push(u("",W+w.col+1)+"^")}return te.join(`
`)},R.prototype.clone=function(){return new R(this.states,this.state)},R.prototype.has=function(w){return!0},{compile:b,states:P,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:_}})})(wa);const ut=wa.exports,To=wa.exports,Ea="[0-9]",xm="[1-9]",Am="[0-9a-fA-F]",Nm="[\\x20-\\x21\\x23-\\x5b\\x5d-\\u{10ffff}]",Cm="\\\\",Tm=`${Cm}(?:["\\/\\\\brfnt]|u${Am}{4})`,qm=`(?:${Nm}|${Tm})`,Rm=`"${qm}*"`,Dm=`(?:0|${xm}${Ea}*)`,Lm=`\\.${Ea}+`,Mm="[eE]",Um=`${Mm}[-+]?${Ea}+`,Bm=`-?${Dm}(?:${Lm})?(?:${Um})?`,Fm="(?:(?:\\r?\\n)|[ \\t])+";var Vm=t=>{const e=To.states({main:{WS:{match:new RegExp(Fm,"u"),lineBreaks:!0},true:{match:"true",value:()=>!0},false:{match:"false",value:()=>!1},null:{match:"null",value:()=>null},number:{match:new RegExp(Bm,"u"),value:parseFloat},string:{match:new RegExp(Rm,"u"),value:JSON.parse},"{":"{","}":"}","[":"[","]":"]",":":":",",":",",error:To.error}});e.reset(t);const r=()=>{let l;do if(l=e.next(),(l==null?void 0:l.type)==="error")throw SyntaxError(e.formatError(l,"Unrecognized token"));while((l==null?void 0:l.type)==="WS");return l};let n,s=r();const i=(l=void 0)=>{if(n=s,s=r(),l&&(n==null?void 0:n.type)!==l)throw SyntaxError(e.formatError(n,`Expected a '${l}'`));return n},a=()=>s,o={offset:0,line:1,col:0,text:""};return{next:i,peek:a,syntaxError:l=>{const p=n||o,u={...p,offset:p.offset+p.text.length,col:p.col+p.text.length};throw new SyntaxError(e.formatError(u,l))}}};const Ia=ks,Km=Vm,zm=(t,e)=>e,Jm=(t,e=zm)=>{const r=Km(t),n=Oa(r,"",Ia.nil,e);return r.peek()&&r.syntaxError("A value has been parsed, but more tokens were found"),n},Oa=(t,e,r,n)=>{let s;const i=t.next();switch(i==null?void 0:i.type){case"true":case"false":case"null":case"number":case"string":s=i.value;break;case"{":s=Gm(t,e,r,n);break;case"[":s=Hm(t,e,r,n);break;default:t.syntaxError("Expected a JSON value")}return n(e,s,r)},Gm=(t,e,r,n)=>{var i;const s={};return((i=t.peek())==null?void 0:i.type)!=="}"&&jf(t,e,r,n,s),t.next("}"),s},jf=(t,e,r,n,s)=>{var a;const i=t.next("string").value;t.next(":"),cs(t.peek())||t.syntaxError("Expected a JSON value"),s[i]=Oa(t,i,Ia.append(i,r),n),((a=t.peek())==null?void 0:a.type)===","?(t.next(),jf(t,i,r,n,s)):cs(t.peek())&&t.next(",")},Hm=(t,e,r,n)=>{var i;const s=[];return((i=t.peek())==null?void 0:i.type)!=="]"&&_f(t,0,r,n,s),t.next("]"),s},_f=(t,e,r,n,s)=>{var i;cs(t.peek())||t.syntaxError("Expected a JSON value"),s[e]=Oa(t,e,Ia.append(e,r),n),((i=t.peek())==null?void 0:i.type)===","?(t.next(),_f(t,e+1,r,n,s)):cs(t.peek())&&t.next(",")},Xm=new Set(["string","number","true","false","null","[","{"]),cs=t=>Xm.has(t==null?void 0:t.type);var Wm=Jm;const Pa=ks,Ym=(t,e)=>e,Qm=(t,e=Ym,r="")=>ka(t,e,r,"",Pa.nil,1),ka=(t,e,r,n,s,i)=>{t=e(n,t,s);let a;return Array.isArray(t)?a=Zm(t,e,r,s,i):typeof t=="object"&&t!==null?a=eh(t,e,r,s,i):a=JSON.stringify(t),a},Zm=(t,e,r,n,s)=>{t.length===0&&(r="");const i=r?`
${r.repeat(s-1)}`:"";return"["+i+r+t.map((a,o)=>{const c=Pa.append(o,n);return ka(a,e,r,o,c,s+1)}).join(`,${i}${r}`)+i+"]"},eh=(t,e,r,n,s)=>{Object.keys(t).length===0&&(r="");const i=r?`
${r.repeat(s-1)}`:"",a=r?" ":"";return"{"+i+r+Object.entries(t).map(([o,c])=>{const l=Pa.append(o,n);return JSON.stringify(o)+":"+a+ka(c,e,r,o,l,s+1)}).join(`,${i}${r}`)+i+"}"};var th=Qm;const rh=Wm,nh=th;var sh={parse:rh,stringify:nh},ih=fetch,ja={};var qo=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,ah=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,xf=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,oh=/\\([\u000b\u0020-\u00ff])/g,ch=/([\\"])/g,Af=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;ja.format=lh;ja.parse=fh;function lh(t){if(!t||typeof t!="object")throw new TypeError("argument obj is required");var e=t.parameters,r=t.type;if(!r||!Af.test(r))throw new TypeError("invalid type");var n=r;if(e&&typeof e=="object")for(var s,i=Object.keys(e).sort(),a=0;a<i.length;a++){if(s=i[a],!xf.test(s))throw new TypeError("invalid parameter name");n+="; "+s+"="+uh(e[s])}return n}function fh(t){if(!t)throw new TypeError("argument string is required");var e=typeof t=="object"?ph(t):t;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var r=e.indexOf(";"),n=r!==-1?e.substr(0,r).trim():e.trim();if(!Af.test(n))throw new TypeError("invalid media type");var s=new dh(n.toLowerCase());if(r!==-1){var i,a,o;for(qo.lastIndex=r;a=qo.exec(e);){if(a.index!==r)throw new TypeError("invalid parameter format");r+=a[0].length,i=a[1].toLowerCase(),o=a[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace(oh,"$1")),s.parameters[i]=o}if(r!==e.length)throw new TypeError("invalid parameter format")}return s}function ph(t){var e;if(typeof t.getHeader=="function"?e=t.getHeader("content-type"):typeof t.headers=="object"&&(e=t.headers&&t.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function uh(t){var e=String(t);if(xf.test(e))return e;if(e.length>0&&!ah.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(ch,"\\$1")+'"'}function dh(t){this.parameters=Object.create(null),this.type=t}const mh=ja,pn={},hh=(t,e)=>{pn[t]=e},yh=t=>{const e=mh.parse(t.headers.get("content-type"));if(!(e.type in pn))throw Error(`${t.url} is not a schema. Found a document with media type: ${e.type}`);return pn[e.type].parse(t,e.parameters)},$h=t=>{for(const e in pn)if(pn[e].matcher(t))return e;return"application/octet-stream"};var Nf={addPlugin:hh,parse:yh,getContentType:$h};const gh=Ps,wr=ke,vh=sh,Ir=ks,{jsonTypeOf:_a,resolveUrl:it,urlFragment:xa,pathRelative:bh}=da,Sh=ih,Et=$a,wh=Nf,Hr="https://json-schema.org/draft/2019-09/vocab/core",Xr="https://json-schema.org/draft/2020-12/vocab/core",an={},We={},Eh=(t,e,r)=>{We[t]=t,an[t]||(an[t]={}),an[t][e]=r},Te=(t,e)=>{var n;const r=We[t];return(n=an[r])==null?void 0:n[e]},Or={},Aa={},Na=(t,e="",r="")=>{var O,m;t=JSON.parse(JSON.stringify(t));const n=it(e,""),s=it(t.$schema||r,"");if(!s)throw Error("Couldn't determine schema dialect");if(delete t.$schema,!(s in We))if(((O=t==null?void 0:t.$vocabulary)==null?void 0:O[Hr])===!0&&s===Ws(t,n,Hr)[0])We[s]=Hr;else if(((m=t==null?void 0:t.$vocabulary)==null?void 0:m[Xr])===!0&&s===Ws(t,n,Xr)[0])We[s]=Xr;else{const h=Or[s];if(h)h.vocabulary[Hr]===!0?We[s]=Hr:h.vocabulary[Xr]===!0?We[s]=Xr:We[s]=We[h.dialectId];else throw Error(`Couldn't determine JSON Schema version for dialect: '${s}'`)}const[i,a]=Ws(t,n,We[s]);if(!i)throw Error("Couldn't determine an identifier for the schema");const o=Te(s,"baseToken");delete t[o],n&&(Aa[n]=i);const c=Te(s,"anchorToken");a&&o===c&&(t[c]=c!==o?encodeURI(a):`#${encodeURI(a)}`);const l={},p=Te(s,"recursiveAnchorToken");t[p]===!0&&(l[""]=`${i}#`,t[c]="",delete t[p]);let u;const d=Te(s,"vocabularyToken");_a(t[d],"object")?(u=t[d],delete t[d]):u={[We[s]]:!0};const g={"":""};return Or[i]={id:i,dialectId:s,schema:Ai(t,i,s,Ir.nil,g,l),anchors:g,dynamicAnchors:l,vocabulary:u,validated:!1},i},Ws=(t,e,r)=>{var i;const n=(i=an[r])==null?void 0:i.baseToken,s=it(e,t[n]||"");return[it(s,""),xa(s)]},Ai=(t,e,r,n,s,i)=>{if(_a(t,"object")){const a=typeof t.$schema=="string"?it(t.$schema,""):r,o=Te(a,"embeddedToken"),c=Te(a,"anchorToken");if(typeof t[o]=="string"&&(o!==c||t[o][0]!=="#")){const g=it(e,t[o]),O=Te(a,"baseToken");return t[O]=g,Na(t,g,r),Et.cons(t[o],t)}const l=Te(r,"anchorToken"),p=Te(r,"dynamicAnchorToken");typeof t[p]=="string"&&(i[t[p]]=`${e}#${encodeURI(n)}`,s[t[p]]=n,delete t[p]);const u=Te(r,"embeddedToken");if(typeof t[l]=="string"){const g=l!==u?t[l]:t[l].slice(1);s[g]=n,delete t[l]}const d=Te(r,"jrefToken");if(typeof t[d]=="string")return Et.cons(t[d],t);for(const g in t)t[g]=Ai(t[g],e,r,Ir.append(g,n),s,i);return t}else return Array.isArray(t)?t.map((a,o)=>Ai(a,e,r,Ir.append(o,n),s,i)):t},Ih=t=>t in Or||t in Aa,Cf=t=>Or[Aa[t]]||Or[t],Oh=t=>{Or[t].validated=!0},Ph=Object.freeze({id:"",dialectId:void 0,vocabulary:{},pointer:Ir.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),Ca=async(t,e=Ph)=>{const r=it(Rf(e),t),n=it(r,""),s=xa(r);if(!Ih(n)){const c=await Sh(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);const[l,p]=await wh.parse(c);let u;l.$schema?u=it(l.$schema,""):p?u=it(n,p):u="",u&&n!==u&&!(u in We)&&await Ca(u),Na(l,n,u)}const i=Cf(n),a=s[0]!=="/"?qf(i,s):s,o=Object.freeze({...i,pointer:a,value:Ir.get(a,i.schema)});return Tf(o)},Tf=t=>Et.isReference(t.value)?Ca(Et.href(t.value),t):t,qf=(t,e)=>{if(!(e in t.anchors))throw Error(`No such anchor '${encodeURI(t.id)}#${encodeURI(e)}'`);return t.anchors[e]},Rf=t=>`${t.id}#${encodeURI(t.pointer)}`,Mt=t=>Et.isReference(t.value)?Et.value(t.value):t.value,kh=(t,e)=>t in Mt(e),jh=(t,e)=>_a(Mt(t),e),Ta=(t,e)=>{const r=Cf(e.id),n=Object.freeze({...e,pointer:Ir.append(t,e.pointer),value:Mt(e)[t],validated:r.validated});return Tf(n)},_h=t=>Object.keys(Mt(t)),xh=t=>wr.pipeline([Mt,Object.keys,wr.map(async e=>[e,await Ta(e,t)]),wr.all],t),Ah=gh((t,e)=>wr.pipeline([Mt,wr.map(async(r,n)=>t(await Ta(n,e),n)),wr.all],e)),Nh=t=>Mt(t).length,Ch={parentId:"",parentDialect:"",includeEmbedded:!0},Th=(t,e={})=>{const r={...Ch,...e},n=Te(t.dialectId,"anchorToken"),s=Te(t.dialectId,"dynamicAnchorToken"),i={};for(const u in t.anchors)u!==""&&!t.dynamicAnchors[u]&&(i[t.anchors[u]]=u);const a={};for(const u in t.dynamicAnchors){const d=xa(t.dynamicAnchors[u]);a[d]=u}const o=JSON.parse(vh.stringify(t.schema,(u,d,g)=>{if(Et.isReference(d)){const O=Et.value(d),m=typeof O.$schema=="string"?it(O.$schema,""):t.dialectId,h=Te(m,"embeddedToken");return!r.includeEmbedded&&h in O?void 0:Et.value(d)}else return g in i&&(d={[n]:i[g],...d}),g in a&&(d={[s]:a[g],...d}),d})),c=Te(t.dialectId,"baseToken"),l=qh(r.parentId,t.id),p=r.parentDialect===t.dialectId?"":t.dialectId;return{...l&&{[c]:l},...p&&{$schema:p},...o}},qh=(t,e)=>{if(e.startsWith("file://")){const r=t.slice(7,t.lastIndexOf("/"));return t===""?"":bh(r,e.slice(7))}else return e};var js={setConfig:Eh,getConfig:Te,add:Na,get:Ca,markValidated:Oh,uri:Rf,value:Mt,getAnchorPointer:qf,typeOf:jh,has:kh,step:Ta,keys:_h,entries:xh,map:Ah,length:Nh,toSchema:Th};let Rh=class extends Error{constructor(e){super("Invalid Schema"),this.name=this.constructor.name,this.output=e}};var Df=Rh;const Dh=js,Lh=t=>Dh.value(t),Mh=()=>!0;var Lf={compile:Lh,interpret:Mh};const Uh=Ps,Ro=os.exports,{resolveUrl:Bh}=da,Mf=va,At=js,Fh=Df,Uf=Nf,Vh=Lf,ls="FLAG",qa="BASIC",Ra="DETAILED",Da="VERBOSE";let Bf=Ra,Ff=!0;Uf.addPlugin("application/schema+json",{parse:async(t,e)=>[await t.json(),e.schema||e.profile],matcher:t=>t.endsWith(".schema.json")});const Kh=async(t,e=void 0,r=void 0)=>{const n=await La(t),s=(i,a)=>Ma(n,Mf.cons(i),a);return e===void 0?s:s(e,r)},La=async t=>{const e={metaData:{}},r=await Kf(t,e);return{ast:e,schemaUri:r}},Ma=Uh(({ast:t,schemaUri:e},r,n=ls)=>{if(![ls,qa,Ra,Da].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],i=Ro.subscribe("result",zh(n,s));return Jf(e,r,t,{}),Ro.unsubscribe(i),s[0]}),zh=(t,e)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c}=s,l={keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const i=r.pop();for(;r[r.length-1]!=="result.start";){const a=r.pop(),o=[a];t===qa&&(o.push(...a.errors),delete a.errors),(t===Da||t!==ls&&!a.valid)&&i.errors.unshift(...o)}r[r.length-1]=i,e[0]=i}}},Jh=t=>{Bf=t},Gh=t=>{Ff=t},Ua={},bn=t=>Ua[t]||Vh,Vf=t=>t in Ua,Hh=(t,e)=>{Ua[t]={collectEvaluatedItems:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&new Set,collectEvaluatedProperties:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&[],...e}},Ni={},Xh=(t,e)=>{Ni[t]=e},Hn={},Kf=async(t,e)=>{if(t=await zf(t),!Vf(`${t.dialectId}#validate`)){const r=await At.get(t.dialectId);(At.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,i])=>{if(s in Ni)Object.entries(Ni[s]).forEach(([a,o])=>{Hh(`${r.id}#${a}`,o)});else if(i)throw Error(`Missing required vocabulary: ${s}`)})}if(Ff&&!t.validated){if(At.markValidated(t.id),!(t.dialectId in Hn)){const s=await At.get(t.dialectId),i=await La(s);Hn[s.id]=Ma(i)}const r=Mf.cons(t.schema,t.id),n=Hn[t.dialectId](r,Bf);if(!n.valid)throw new Fh(n)}return t.id in e.metaData||(e.metaData[t.id]={id:t.id,dynamicAnchors:t.dynamicAnchors,anchors:t.anchors}),bn(`${t.dialectId}#validate`).compile(t,e)},zf=async t=>At.typeOf(t,"string")?zf(await At.get(At.value(t),t)):t,Jf=(t,e,r,n)=>{const s=Ba(t,r),i=Bh(t,"");return bn(s).interpret(t,e,r,{...r.metaData[i].dynamicAnchors,...n})},Wh=(t,e,r,n,s)=>{const i=Ba(t,r);return bn(i).collectEvaluatedProperties(t,e,r,n,s)},Yh=(t,e,r,n,s)=>{const i=Ba(t,r);return bn(i).collectEvaluatedItems(t,e,r,n,s)},Ba=(t,e)=>{if(!(t in e))throw Error(`No schema found at ${t}`);return e[t][0]},Qh=(t,e="",r="")=>{const n=At.add(t,e,r);delete Hn[n]};var Gf={validate:Kh,compile:La,interpret:Ma,setMetaOutputFormat:Jh,setShouldMetaValidate:Gh,FLAG:ls,BASIC:qa,DETAILED:Ra,VERBOSE:Da,add:Qh,getKeyword:bn,hasKeyword:Vf,defineVocabulary:Xh,compileSchema:Kf,interpretSchema:Jf,collectEvaluatedProperties:Wh,collectEvaluatedItems:Yh,addMediaTypePlugin:Uf.addPlugin};const Wr=ke,cr=os.exports,_s=Gf,Do=va,lr=js,Zh=async(t,e)=>{const r=lr.uri(t);if(!(r in e)){e[r]=!1;const n=lr.value(t);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${lr.uri(t)}'`);e[r]=[`${t.dialectId}#validate`,lr.uri(t),typeof n=="boolean"?n:await Wr.pipeline([lr.entries,Wr.map(([s,i])=>[`${t.dialectId}#${s}`,i]),Wr.filter(([s])=>s!==`${t.dialectId}#validate`),Wr.map(async([s,i])=>{const a=await _s.getKeyword(s).compile(i,e,t);return[s,lr.uri(i),a]}),Wr.all],t)]}return r},ey=(t,e,r,n)=>{const[s,i,a]=r[t];cr.publishSync("result.start");const o=typeof a=="boolean"?a:a.every(([c,l,p])=>{cr.publishSync("result.start");const u=_s.getKeyword(c).interpret(p,e,r,n);return cr.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:Do.uri(e),valid:u,ast:p}),cr.publishSync("result.end"),u});return cr.publishSync("result",{keyword:s,absoluteKeywordLocation:i,instanceLocation:Do.uri(e),valid:o,ast:t}),cr.publishSync("result.end"),o},ty=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?[]:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedProperties")).reduce((a,[o,,c])=>{const l=a&&_s.getKeyword(o).collectEvaluatedProperties(c,e,r,n);return l!==!1&&[...a,...l]},[])},ry=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?new Set:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedItems")).reduce((a,[o,,c])=>{const l=a!==!1&&_s.getKeyword(o).collectEvaluatedItems(c,e,r,n);return l!==!1&&new Set([...a,...l])},new Set)};var ny={compile:Zh,interpret:ey,collectEvaluatedProperties:ty,collectEvaluatedItems:ry};const sy=Lf,iy=ny;var ay={metaData:sy,validate:iy};const oy=Gf,cy=js,ly=va,fy=$a,py=ay,uy=Df;var j={Core:oy,Schema:cy,Instance:ly,Reference:fy,Keywords:py,InvalidSchemaError:uy};const{Core:Hf,Schema:Yr,Instance:Ys}=j,dy=async(t,e,r)=>{const n=await Yr.step("items",r),s=Yr.typeOf(n,"array")?Yr.length(n):Number.MAX_SAFE_INTEGER;return Yr.typeOf(t,"boolean")?[s,Yr.value(t)]:[s,await Hf.compileSchema(t,e)]},my=([t,e],r,n,s)=>Ys.typeOf(r,"array")?typeof e=="string"?Ys.every((i,a)=>a<t||Hf.interpretSchema(e,i,n,s),r):Ys.every((i,a)=>a<t?!0:e,r):!0;var hy={compile:dy,interpret:my};const{Core:Xf,Schema:Qs,Instance:Ci}=j,yy=async(t,e,r)=>{const n=await Qs.step("items",r);return[Qs.typeOf(n,"array")?Qs.length(n):Number.MAX_SAFE_INTEGER,await Xf.compileSchema(t,e)]},Wf=([t,e],r,n,s)=>Ci.typeOf(r,"array")?Ci.every((i,a)=>a<t||Xf.interpretSchema(e,i,n,s),r):!0,$y=(t,e,r,n)=>Wf(t,e,r,n)&&new Set(Ci.map((s,i)=>i,e));var gy={compile:yy,interpret:Wf,collectEvaluatedItems:$y};const{Core:Yf,Schema:kt,Instance:Lo}=j,vy=async(t,e,r)=>{const n=await kt.step("properties",r),s=kt.typeOf(n,"object")?kt.keys(n):[],i=await kt.step("patternProperties",r),a=kt.typeOf(i,"object")?kt.keys(i).map(o=>new RegExp(o)):[];return kt.typeOf(t,"boolean")?[s,a,kt.value(t)]:[s,a,await Yf.compileSchema(t,e)]},by=([t,e,r],n,s,i)=>{if(!Lo.typeOf(n,"object"))return!0;const a=Lo.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>Yf.interpretSchema(r,o,s,i)):a.length===0||r};var Sy={compile:vy,interpret:by};const{Core:Qf,Schema:fr,Instance:Mo}=j,wy=async(t,e,r)=>{const n=await fr.step("properties",r),s=fr.typeOf(n,"object")?fr.keys(n):[],i=await fr.step("patternProperties",r),a=fr.typeOf(i,"object")?fr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await Qf.compileSchema(t,e)]},Zf=([t,e,r],n,s,i)=>Mo.typeOf(n,"object")?Mo.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>Qf.interpretSchema(r,a,s,i)):!0,Ey=(t,e,r,n)=>Zf(t,e,r,n)&&[new RegExp("")];var Iy={compile:wy,interpret:Zf,collectEvaluatedProperties:Ey};const{Core:xs,Schema:Oy}=j,Uo=ke,Py=(t,e)=>Uo.pipeline([Oy.map(async r=>xs.compileSchema(await r,e)),Uo.all],t),ky=(t,e,r,n)=>t.every(s=>xs.interpretSchema(s,e,r,n)),jy=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&xs.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),_y=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&xs.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var xy={compile:Py,interpret:ky,collectEvaluatedProperties:jy,collectEvaluatedItems:_y};const{Core:As,Schema:Ay}=j,Bo=ke,Ny=(t,e)=>Bo.pipeline([Ay.map(async r=>As.compileSchema(await r,e)),Bo.all],t),Cy=(t,e,r,n)=>t.filter(i=>As.interpretSchema(i,e,r,n)).length>0,Ty=(t,e,r,n)=>t.reduce((s,i)=>{const a=As.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),qy=(t,e,r,n)=>t.reduce((s,i)=>{const a=As.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var Ry={compile:Ny,interpret:Cy,collectEvaluatedProperties:Ty,collectEvaluatedItems:qy},Dy=Object.keys,Fo=JSON.stringify;function rn(t,e){var r,n,s,i,a,o,c;if(c=typeof t,c==="string")return Fo(t);if(t===!0)return"true";if(t===!1)return"false";if(t===null)return"null";if(t instanceof Array){for(s="[",n=t.length-1,r=0;r<n;r++)s+=rn(t[r],!1)+",";return n>-1&&(s+=rn(t[r],!1)),s+"]"}if(t instanceof Object){if(typeof t.toJSON=="function")return rn(t.toJSON(),e);for(i=Dy(t).sort(),n=i.length,s="",r=0;r<n;)a=i[r],o=rn(t[a],!0),o!==void 0&&(r&&s!==""&&(s+=","),s+=Fo(a)+":"+o),r++;return"{"+s+"}"}switch(c){case"function":case"undefined":return e?void 0:null;default:return isFinite(t)?t:null}}var Rr=function(t){return""+rn(t,!1)};const{Schema:Ly,Instance:My}=j,ep=Rr,Uy=t=>ep(Ly.value(t)),By=(t,e)=>ep(My.value(e))===t;var Fy={compile:Uy,interpret:By};const{Core:tp,Instance:Vo}=j,Vy=(t,e)=>tp.compileSchema(t,e),Ky=(t,e,r,n)=>!Vo.typeOf(e,"array")||Vo.some(s=>tp.interpretSchema(t,s,r,n),e);var zy={compile:Vy,interpret:Ky};const{Core:Fa,Schema:pr,Instance:Ti}=j,Jy=async(t,e,r)=>{const n=await Fa.compileSchema(t,e),s=await pr.step("minContains",r),i=pr.typeOf(s,"number")?pr.value(s):1,a=await pr.step("maxContains",r),o=pr.typeOf(a,"number")?pr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},rp=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Ti.typeOf(n,"array"))return!0;const a=Ti.reduce((o,c)=>Fa.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},Gy=(t,e,r,n)=>rp(t,e,r,n)&&Ti.reduce((s,i,a)=>Fa.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var Hy={compile:Jy,interpret:rp,collectEvaluatedItems:Gy};const{Core:Xy,Schema:Wy}=j,Zs=ke,Yy=async(t,e)=>{await Zs.pipeline([Wy.entries,Zs.map(([,r])=>Xy.compileSchema(r,e)),Zs.all],t)},Qy=()=>!0;var Zy={compile:Yy,interpret:Qy};const{Core:np,Schema:ei,Instance:Ko}=j,ti=ke,e$=(t,e)=>ti.pipeline([ei.entries,ti.map(async([r,n])=>[r,ei.typeOf(n,"array")?ei.value(n):await np.compileSchema(n,e)]),ti.all],t),t$=(t,e,r,n)=>{const s=Ko.value(e);return!Ko.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):np.interpretSchema(a,e,r,n):!0)};var r$={compile:e$,interpret:t$};const{Schema:zo,Instance:Jo}=j,ri=ke,n$=t=>ri.pipeline([zo.entries,ri.map(([e,r])=>[e,zo.value(r)]),ri.all],t),s$=(t,e)=>{const r=Jo.value(e);return!Jo.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var i$={compile:n$,interpret:s$};const{Core:Va,Schema:a$,Instance:qi}=j,ni=ke,o$=(t,e)=>ni.pipeline([a$.entries,ni.map(async([r,n])=>[r,await Va.compileSchema(n,e)]),ni.all],t),c$=(t,e,r,n)=>{const s=qi.value(e);return!qi.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||Va.interpretSchema(a,e,r,n))},l$=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!qi.has(i,e))return s;const o=Va.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var f$={compile:o$,interpret:c$,collectEvaluatedProperties:l$};const{Schema:p$,Instance:u$}=j,sp=Rr,d$=t=>p$.value(t).map(sp),m$=(t,e)=>t.some(r=>sp(u$.value(e))===r);var h$={compile:d$,interpret:m$};const{Schema:y$,Instance:Go}=j,$$=async t=>y$.value(t),g$=(t,e)=>!Go.typeOf(e,"number")||Go.value(e)<t;var v$={compile:$$,interpret:g$};const{Schema:b$,Instance:Ho}=j,S$=async t=>b$.value(t),w$=(t,e)=>!Ho.typeOf(e,"number")||Ho.value(e)>t;var E$={compile:S$,interpret:w$};const{Core:Ns}=j,I$=(t,e)=>Ns.compileSchema(t,e),O$=(t,e,r,n)=>(Ns.interpretSchema(t,e,r,n),!0),P$=(t,e,r,n)=>Ns.collectEvaluatedProperties(t,e,r,n)||[],k$=(t,e,r,n)=>Ns.collectEvaluatedItems(t,e,r,n)||new Set;var j$={compile:I$,interpret:O$,collectEvaluatedProperties:P$,collectEvaluatedItems:k$};const{Core:Pr,Schema:Xo}=j,_$=async(t,e,r)=>{if(Xo.has("if",r)){const n=await Xo.step("if",r);return[await Pr.compileSchema(n,e),await Pr.compileSchema(t,e)]}else return[]},x$=([t,e],r,n,s)=>t===void 0||!Ka(t,r,n,s)||Pr.interpretSchema(e,r,n,s),Ka=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Pr.getKeyword(i).interpret(a,e,r,n))},A$=([t,e],r,n,s)=>t===void 0||!Ka(t,r,n,s)?[]:Pr.collectEvaluatedProperties(e,r,n,s),N$=([t,e],r,n,s)=>t===void 0||!Ka(t,r,n,s)?new Set:Pr.collectEvaluatedItems(e,r,n,s);var C$={compile:_$,interpret:x$,collectEvaluatedProperties:A$,collectEvaluatedItems:N$};const{Core:kr,Schema:Wo}=j,T$=async(t,e,r)=>{if(Wo.has("if",r)){const n=await Wo.step("if",r);return[await kr.compileSchema(n,e),await kr.compileSchema(t,e)]}else return[]},q$=([t,e],r,n,s)=>t===void 0||za(t,r,n,s)||kr.interpretSchema(e,r,n,s),za=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>kr.getKeyword(i).interpret(a,e,r,n))},R$=([t,e],r,n,s)=>t===void 0||za(t,r,n,s)?[]:kr.collectEvaluatedProperties(e,r,n,s),D$=([t,e],r,n,s)=>t===void 0||za(t,r,n,s)?new Set:kr.collectEvaluatedItems(e,r,n,s);var L$={compile:T$,interpret:q$,collectEvaluatedProperties:R$,collectEvaluatedItems:D$};const{Core:fs,Schema:Yo,Instance:Xn}=j,M$=async(t,e)=>{if(Yo.typeOf(t,"array")){const r=await Yo.map(n=>fs.compileSchema(n,e),t);return Promise.all(r)}else return fs.compileSchema(t,e)},ip=(t,e,r,n)=>Xn.typeOf(e,"array")?typeof t=="string"?Xn.every(s=>fs.interpretSchema(t,s,r,n),e):Xn.every((s,i)=>!(i in t)||fs.interpretSchema(t[i],s,r,n),e):!0,U$=(t,e,r,n)=>ip(t,e,r,n)&&(typeof t=="string"?new Set(Xn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var B$={compile:M$,interpret:ip,collectEvaluatedItems:U$};const{Core:ap,Schema:si,Instance:Ri}=j,F$=async(t,e,r)=>{const n=await si.step("prefixItems",r);return[si.typeOf(n,"array")?si.length(n):0,await ap.compileSchema(t,e)]},op=([t,e],r,n,s)=>Ri.typeOf(r,"array")?Ri.every((i,a)=>a<t||ap.interpretSchema(e,i,n,s),r):!0,V$=(t,e,r,n)=>op(t,e,r,n)&&new Set(Ri.map((s,i)=>i,e));var K$={compile:F$,interpret:op,collectEvaluatedItems:V$};const{Schema:z$,Instance:Qo}=j,J$=t=>z$.value(t),G$=(t,e)=>!Qo.typeOf(e,"array")||Qo.length(e)<=t;var H$={compile:J$,interpret:G$};const{Schema:X$,Instance:Zo}=j,W$=t=>X$.value(t),Y$=(t,e)=>!Zo.typeOf(e,"string")||[...Zo.value(e)].length<=t;var Q$={compile:W$,interpret:Y$};const{Schema:Z$,Instance:ec}=j,eg=t=>Z$.value(t),tg=(t,e)=>!ec.typeOf(e,"object")||ec.keys(e).length<=t;var rg={compile:eg,interpret:tg};const{Schema:ii,Instance:tc}=j,ng=async(t,e,r)=>{const n=await ii.step("exclusiveMaximum",r),s=ii.value(n);return[ii.value(t),s]},sg=([t,e],r)=>{if(!tc.typeOf(r,"number"))return!0;const n=tc.value(r);return e?n<t:n<=t};var ig={compile:ng,interpret:sg};const{Schema:ag,Instance:rc}=j,og=async t=>ag.value(t),cg=(t,e)=>!rc.typeOf(e,"number")||rc.value(e)<=t;var lg={compile:og,interpret:cg};const{Schema:fg,Instance:nc}=j,pg=t=>fg.value(t),ug=(t,e)=>!nc.typeOf(e,"array")||nc.length(e)>=t;var dg={compile:pg,interpret:ug};const{Schema:mg,Instance:sc}=j,hg=t=>mg.value(t),yg=(t,e)=>!sc.typeOf(e,"string")||[...sc.value(e)].length>=t;var $g={compile:hg,interpret:yg};const{Schema:gg,Instance:ic}=j,vg=t=>gg.value(t),bg=(t,e)=>!ic.typeOf(e,"object")||ic.keys(e).length>=t;var Sg={compile:vg,interpret:bg};const{Schema:ai,Instance:ac}=j,wg=async(t,e,r)=>{const n=await ai.step("exclusiveMinimum",r),s=ai.value(n);return[ai.value(t),s]},Eg=([t,e],r)=>{if(!ac.typeOf(r,"number"))return!0;const n=ac.value(r);return e?n>t:n>=t};var Ig={compile:wg,interpret:Eg};const{Schema:Og,Instance:oc}=j,Pg=async t=>Og.value(t),kg=(t,e)=>!oc.typeOf(e,"number")||oc.value(e)>=t;var jg={compile:Pg,interpret:kg};const{Schema:_g,Instance:cc}=j,xg=t=>_g.value(t),Ag=(t,e)=>{if(!cc.typeOf(e,"number"))return!0;const r=cc.value(e)%t;return lc(0,r)||lc(t,r)},lc=(t,e)=>Math.abs(t-e)<11920929e-14;var Ng={compile:xg,interpret:Ag};const{Core:cp}=j,Cg=cp.compileSchema,Tg=(t,e,r,n)=>!cp.interpretSchema(t,e,r,n);var qg={compile:Cg,interpret:Tg};const{Core:Cs,Schema:Rg}=j,Dg=async(t,e)=>{const r=await Rg.map(n=>Cs.compileSchema(n,e),t);return Promise.all(r)},Lg=(t,e,r,n)=>{let s=0;for(const i of t)if(Cs.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},Mg=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Cs.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},Ug=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Cs.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var Bg={compile:Dg,interpret:Lg,collectEvaluatedProperties:Mg,collectEvaluatedItems:Ug};const{Schema:Fg,Instance:fc}=j,Vg=t=>new RegExp(Fg.value(t),"u"),Kg=(t,e)=>!fc.typeOf(e,"string")||t.test(fc.value(e));var zg={compile:Vg,interpret:Kg};const{Core:lp,Schema:Jg,Instance:pc}=j,oi=ke,Gg=(t,e)=>oi.pipeline([Jg.entries,oi.map(async([r,n])=>[new RegExp(r,"u"),await lp.compileSchema(n,e)]),oi.all],t),fp=(t,e,r,n)=>!pc.typeOf(e,"object")||t.every(([s,i])=>pc.entries(e).filter(([a])=>s.test(a)).every(([,a])=>lp.interpretSchema(i,a,r,n))),Hg=(t,e,r,n)=>fp(t,e,r,n)&&t.map(([s])=>s);var Xg={compile:Gg,interpret:fp,collectEvaluatedProperties:Hg};const Wg=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,Yg=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),Qg=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var pp={isObject:Wg,escapeRegExp:Yg,splitUrl:Qg};const{Core:up,Schema:Zg,Instance:uc}=j,dc=ke,{escapeRegExp:ev}=pp,tv=(t,e)=>dc.pipeline([Zg.entries,dc.reduce(async(r,[n,s])=>(r[n]=await up.compileSchema(s,e),r),Object.create(null))],t),dp=(t,e,r,n)=>!uc.typeOf(e,"object")||uc.entries(e).filter(([s])=>s in t).every(([s,i])=>up.interpretSchema(t[s],i,r,n)),rv=(t,e,r,n)=>dp(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${ev(s)}$`));var nv={compile:tv,interpret:dp,collectEvaluatedProperties:rv};const{Core:mp,Instance:ci}=j,sv=(t,e)=>mp.compileSchema(t,e),iv=(t,e,r,n)=>!ci.typeOf(e,"object")||ci.keys(e).every(s=>mp.interpretSchema(t,ci.cons(s),r,n));var av={compile:sv,interpret:iv};const{Core:un,Schema:Wn}=j,{splitUrl:ov}=pp,cv=async(t,e)=>{const[,r]=ov(Wn.value(t)),n=await Wn.get(Wn.value(t),t);return await un.compileSchema(n,e),[n.id,r]},lv=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return un.interpretSchema(s[e],r,n,s);{const i=Wn.getAnchorPointer(n.metaData[t],e);return un.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},fv=un.collectEvaluatedProperties,pv=un.collectEvaluatedItems;var uv={compile:cv,interpret:lv,collectEvaluatedProperties:fv,collectEvaluatedItems:pv};const{Core:Ts,Schema:mc}=j,dv=async(t,e)=>{const r=await mc.get(mc.value(t),t);return Ts.compileSchema(r,e)},mv=Ts.interpretSchema,hv=Ts.collectEvaluatedProperties,yv=Ts.collectEvaluatedItems;var $v={compile:dv,interpret:mv,collectEvaluatedProperties:hv,collectEvaluatedItems:yv};const{Schema:gv,Instance:hc}=j,vv=t=>gv.value(t),bv=(t,e)=>!hc.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(hc.value(e),r));var Sv={compile:vv,interpret:bv};const{Core:hp,Schema:wv,Instance:yc}=j,$c=ke,Ev=(t,e)=>$c.pipeline([wv.map(r=>hp.compileSchema(r,e)),$c.all],t),yp=(t,e,r,n)=>yc.typeOf(e,"array")?yc.every((s,i)=>!(i in t)||hp.interpretSchema(t[i],s,r,n),e):!0,Iv=(t,e,r,n)=>yp(t,e,r,n)&&new Set(t.map((s,i)=>i));var Ov={compile:Ev,interpret:yp,collectEvaluatedItems:Iv};const{Schema:Pv,Instance:gc}=j,kv=t=>Pv.value(t),jv=(t,e)=>typeof t=="string"?gc.typeOf(e,t):t.some(gc.typeOf(e));var _v={compile:kv,interpret:jv};const{Core:Di,Schema:xv,Instance:Yn}=j,Av=async(t,e,r)=>[xv.uri(r),await Di.compileSchema(t,e)],$p=([t,e],r,n,s)=>{if(!Yn.typeOf(r,"array"))return!0;const i=Di.collectEvaluatedItems(t,r,n,s,!0);return i===!1||Yn.every((a,o)=>i.has(o)||Di.interpretSchema(e,Yn.step(o,r),n,s),r)},Nv=(t,e,r,n)=>$p(t,e,r,n)&&new Set(Yn.map((s,i)=>i,e));var Cv={compile:Av,interpret:$p,collectEvaluatedItems:Nv};const{Core:Li,Schema:Tv,Instance:vc}=j,qv=async(t,e,r)=>[Tv.uri(r),await Li.compileSchema(t,e)],gp=([t,e],r,n,s)=>{if(!vc.typeOf(r,"object"))return!0;const i=Li.collectEvaluatedProperties(t,r,n,s,!0);return!i||vc.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>Li.interpretSchema(e,a,n,s))},Rv=(t,e,r,n)=>gp(t,e,r,n)&&[new RegExp("")];var Dv={compile:qv,interpret:gp,collectEvaluatedProperties:Rv};const{Schema:Lv,Instance:li}=j,Mv=Rr,Uv=t=>Lv.value(t),Bv=(t,e)=>{if(!li.typeOf(e,"array")||t===!1)return!0;const r=li.map(n=>Mv(li.value(n)),e);return new Set(r).size===r.length};var Fv={compile:Uv,interpret:Bv};const{Keywords:bc}=j;var Dr={additionalItems:hy,additionalItems6:gy,additionalProperties:Sy,additionalProperties6:Iy,allOf:xy,anyOf:Ry,const:Fy,contains:zy,containsMinContainsMaxContains:Hy,definitions:Zy,dependencies:r$,dependentRequired:i$,dependentSchemas:f$,enum:h$,exclusiveMaximum:v$,exclusiveMinimum:E$,if:j$,then:C$,else:L$,items:B$,items202012:K$,maxItems:H$,maxLength:Q$,maxProperties:rg,maximumExclusiveMaximum:ig,maximum:lg,metaData:bc.metaData,minItems:dg,minLength:$g,minProperties:Sg,minimumExclusiveMinimum:Ig,minimum:jg,multipleOf:Ng,not:qg,oneOf:Bg,pattern:zg,patternProperties:Xg,properties:nv,propertyNames:av,dynamicRef:uv,ref:$v,required:Sv,tupleItems:Ov,type:_v,unevaluatedItems:Cv,unevaluatedProperties:Dv,uniqueItems:Fv,validate:bc.validate},Vv=`{
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
}`;const{Core:Kv,Schema:Sn}=j,ce=Dr,zv=Vv,wn="http://json-schema.org/draft-04/schema";Sn.setConfig(wn,"baseToken","id");Sn.setConfig(wn,"embeddedToken","id");Sn.setConfig(wn,"anchorToken","id");Sn.setConfig(wn,"jrefToken","$ref");Sn.add(JSON.parse(zv));Kv.defineVocabulary(wn,{validate:ce.validate,additionalItems:ce.additionalItems,additionalProperties:ce.additionalProperties,allOf:ce.allOf,anyOf:ce.anyOf,default:ce.metaData,definitions:ce.definitions,dependencies:ce.dependencies,description:ce.metaData,enum:ce.enum,format:ce.metaData,items:ce.items,maxItems:ce.maxItems,maxLength:ce.maxLength,maxProperties:ce.maxProperties,maximum:ce.maximumExclusiveMaximum,minItems:ce.minItems,minLength:ce.minLength,minProperties:ce.minProperties,minimum:ce.minimumExclusiveMinimum,multipleOf:ce.multipleOf,not:ce.not,oneOf:ce.oneOf,pattern:ce.pattern,patternProperties:ce.patternProperties,properties:ce.properties,required:ce.required,title:ce.metaData,type:ce.type,uniqueItems:ce.uniqueItems});var Jv=`{
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
}`;const{Core:Gv,Schema:En}=j,ne=Dr,Hv=Jv,In="http://json-schema.org/draft-06/schema";En.setConfig(In,"baseToken","$id");En.setConfig(In,"embeddedToken","$id");En.setConfig(In,"anchorToken","$id");En.setConfig(In,"jrefToken","$ref");En.add(JSON.parse(Hv));Gv.defineVocabulary(In,{validate:ne.validate,additionalItems:ne.additionalItems6,additionalProperties:ne.additionalProperties6,allOf:ne.allOf,anyOf:ne.anyOf,const:ne.const,contains:ne.contains,default:ne.metaData,definitions:ne.definitions,dependencies:ne.dependencies,description:ne.metaData,enum:ne.enum,examples:ne.metaData,exclusiveMaximum:ne.exclusiveMaximum,exclusiveMinimum:ne.exclusiveMinimum,format:ne.metaData,items:ne.items,maxItems:ne.maxItems,maxLength:ne.maxLength,maxProperties:ne.maxProperties,maximum:ne.maximum,minItems:ne.minItems,minLength:ne.minLength,minProperties:ne.minProperties,minimum:ne.minimum,multipleOf:ne.multipleOf,not:ne.not,oneOf:ne.oneOf,pattern:ne.pattern,patternProperties:ne.patternProperties,properties:ne.properties,propertyNames:ne.propertyNames,required:ne.required,title:ne.metaData,type:ne.type,uniqueItems:ne.uniqueItems});var Xv=`{
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
}`;const{Core:Wv,Schema:On}=j,ee=Dr,Yv=Xv,Pn="http://json-schema.org/draft-07/schema";On.setConfig(Pn,"baseToken","$id");On.setConfig(Pn,"embeddedToken","$id");On.setConfig(Pn,"anchorToken","$id");On.setConfig(Pn,"jrefToken","$ref");On.add(JSON.parse(Yv));Wv.defineVocabulary(Pn,{validate:ee.validate,additionalItems:ee.additionalItems6,additionalProperties:ee.additionalProperties6,allOf:ee.allOf,anyOf:ee.anyOf,const:ee.const,contains:ee.contains,default:ee.metaData,definitions:ee.definitions,dependencies:ee.dependencies,description:ee.metaData,enum:ee.enum,exclusiveMaximum:ee.exclusiveMaximum,exclusiveMinimum:ee.exclusiveMinimum,format:ee.metaData,if:ee.if,then:ee.then,else:ee.else,items:ee.items,maxItems:ee.maxItems,maxLength:ee.maxLength,maxProperties:ee.maxProperties,maximum:ee.maximum,minItems:ee.minItems,minLength:ee.minLength,minProperties:ee.minProperties,minimum:ee.minimum,multipleOf:ee.multipleOf,not:ee.not,oneOf:ee.oneOf,pattern:ee.pattern,patternProperties:ee.patternProperties,properties:ee.properties,propertyNames:ee.propertyNames,readOnly:ee.metaData,required:ee.required,title:ee.metaData,type:ee.type,uniqueItems:ee.uniqueItems,writeOnly:ee.metaData});var Qv=`{
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
}`,Zv=`{
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
}`,eb=`{
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
}`,tb=`{
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
}`,rb=`{
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
}`,nb=`{
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
}`,sb=`{
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
}`;const{Core:kn,Schema:ze}=j,K=Dr,ib=Qv,ab=Zv,ob=eb,cb=tb,lb=rb,fb=nb,pb=sb,Lr="https://json-schema.org/draft/2019-09/vocab/core";ze.setConfig(Lr,"baseToken","$id");ze.setConfig(Lr,"embeddedToken","$id");ze.setConfig(Lr,"anchorToken","$anchor");ze.setConfig(Lr,"recursiveAnchorToken","$recursiveAnchor");ze.setConfig(Lr,"vocabularyToken","$vocabulary");ze.setConfig(Lr,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);ze.add(JSON.parse(ib));ze.add(JSON.parse(ab));kn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:K.validate,$defs:K.definitions,$recursiveRef:K.dynamicRef,$ref:K.ref});ze.add(JSON.parse(ob));kn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:K.additionalItems6,additionalProperties:K.additionalProperties6,allOf:K.allOf,anyOf:K.anyOf,contains:K.containsMinContainsMaxContains,dependentSchemas:K.dependentSchemas,if:K.if,then:K.then,else:K.else,items:K.items,not:K.not,oneOf:K.oneOf,patternProperties:K.patternProperties,properties:K.properties,propertyNames:K.propertyNames,unevaluatedItems:K.unevaluatedItems,unevaluatedProperties:K.unevaluatedProperties});ze.add(JSON.parse(cb));kn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:K.const,dependentRequired:K.dependentRequired,enum:K.enum,exclusiveMaximum:K.exclusiveMaximum,exclusiveMinimum:K.exclusiveMinimum,maxItems:K.maxItems,maxLength:K.maxLength,maxProperties:K.maxProperties,maximum:K.maximum,minItems:K.minItems,minLength:K.minLength,minProperties:K.minProperties,minimum:K.minimum,multipleOf:K.multipleOf,pattern:K.pattern,required:K.required,type:K.type,uniqueItems:K.uniqueItems});ze.add(JSON.parse(lb));kn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:K.metaData,deprecated:K.metaData,description:K.metaData,examples:K.metaData,readOnly:K.metaData,title:K.metaData,writeOnly:K.metaData});ze.add(JSON.parse(fb));ze.add(JSON.parse(pb));kn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:K.metaData,contentMediaType:K.metaData,contentSchema:K.metaData});var ub=`{
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
}`,db=`{
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
}`,mb=`{
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
}`,hb=`{
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
}`,yb=`{
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
}`,$b=`{
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
}`,gb=`{
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
}`,vb=`{
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
}`,bb=`{
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
}`;const{Core:er,Schema:Be}=j,F=Dr,Sb=ub,wb=db,Eb=mb,Ib=hb,Ob=yb,Pb=$b,kb=gb,jb=vb,_b=bb,Mr="https://json-schema.org/draft/2020-12/vocab/core";Be.setConfig(Mr,"baseToken","$id");Be.setConfig(Mr,"embeddedToken","$id");Be.setConfig(Mr,"anchorToken","$anchor");Be.setConfig(Mr,"dynamicAnchorToken","$dynamicAnchor");Be.setConfig(Mr,"vocabularyToken","$vocabulary");Be.setConfig(Mr,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);Be.add(JSON.parse(Sb));Be.add(JSON.parse(wb));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:F.validate,$defs:F.definitions,$dynamicRef:F.dynamicRef,$ref:F.ref});Be.add(JSON.parse(Eb));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:F.additionalProperties6,allOf:F.allOf,anyOf:F.anyOf,contains:F.containsMinContainsMaxContains,dependentSchemas:F.dependentSchemas,if:F.if,then:F.then,else:F.else,items:F.items202012,not:F.not,oneOf:F.oneOf,patternProperties:F.patternProperties,prefixItems:F.tupleItems,properties:F.properties,propertyNames:F.propertyNames});Be.add(JSON.parse(Ib));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:F.const,dependentRequired:F.dependentRequired,enum:F.enum,exclusiveMaximum:F.exclusiveMaximum,exclusiveMinimum:F.exclusiveMinimum,maxItems:F.maxItems,maxLength:F.maxLength,maxProperties:F.maxProperties,maximum:F.maximum,minItems:F.minItems,minLength:F.minLength,minProperties:F.minProperties,minimum:F.minimum,multipleOf:F.multipleOf,pattern:F.pattern,required:F.required,type:F.type,uniqueItems:F.uniqueItems});Be.add(JSON.parse(Ob));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:F.metaData,deprecated:F.metaData,description:F.metaData,examples:F.metaData,readOnly:F.metaData,title:F.metaData,writeOnly:F.metaData});Be.add(JSON.parse(Pb));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:F.metaData});Be.add(JSON.parse(kb));Be.add(JSON.parse(jb));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:F.metaData,contentMediaType:F.metaData,contentSchema:F.metaData});Be.add(JSON.parse(_b));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:F.unevaluatedItems,unevaluatedProperties:F.unevaluatedProperties});const{Core:Ze,Schema:xb,InvalidSchemaError:Ab}=j,Nb=Dr;var we={add:Ze.add,get:xb.get,validate:Ze.validate,compile:Ze.compile,interpret:Ze.interpret,setMetaOutputFormat:Ze.setMetaOutputFormat,setShouldMetaValidate:Ze.setShouldMetaValidate,addMediaTypePlugin:Ze.addMediaTypePlugin,FLAG:Ze.FLAG,BASIC:Ze.BASIC,DETAILED:Ze.DETAILED,VERBOSE:Ze.VERBOSE,Keywords:Nb,InvalidSchemaError:Ab};const Cb=we.add,Tb=we.get,qb=we.validate,Rb=we.compile,Db=we.interpret,Lb=we.setMetaOutputFormat,Mb=we.setShouldMetaValidate,Ub=we.addMediaTypePlugin,Bb=we.FLAG,Fb=we.BASIC,Vb=we.DETAILED,Kb=we.VERBOSE,zb=we.Keywords,Jb=we.InvalidSchemaError,Gb=Object.freeze(Object.defineProperty({__proto__:null,add:Cb,get:Tb,validate:qb,compile:Rb,interpret:Db,setMetaOutputFormat:Lb,setShouldMetaValidate:Mb,addMediaTypePlugin:Ub,FLAG:Bb,BASIC:Fb,DETAILED:Vb,VERBOSE:Kb,Keywords:zb,InvalidSchemaError:Jb,default:we},Symbol.toStringTag,{value:"Module"})),Ja="[0-9]",Hb="[1-9]",Xb="[0-9a-fA-F]",Sc=`(?:\\\\["\\/\\\\brfnt]|\\\\u${Xb}{4}|[^"\\\\])`,Wb='"(?=[^"]*"\\s*:)',Yb=`(?:0|${Hb}${Ja}*)`,Qb=`\\.${Ja}+`,Zb="[eE]",e1=`${Zb}[-+]?${Ja}+`,t1=`-?${Yb}(?:${Qb})?(?:${e1})?`,r1=`(?:(?:\r?
)|[ 	])+`,wc=ut.states({main:{WS:{match:new RegExp(r1),lineBreaks:!0},accent7:new RegExp(`true|false|${t1}`),accent3:["{","}","[","]"],accent6:"null",stringProperty:{match:new RegExp(Wb),push:"property"},stringStart:{match:'"',push:"string"},other:/./},string:{accent7:{match:new RegExp(`${Sc}+`),lineBreaks:!0},stringEnd:{match:'"',pop:!0},other:/./},property:{accent1:{match:new RegExp(`${Sc}+`),lineBreaks:!0},propertyEnd:{match:'"',pop:!0},other:/./}}),Ga="[0-9]",n1="[1-9]",vp="[0-9a-fA-F]",Ec=`(?:\r?
)+`,Xt="[ \\t]",s1=`^${Xt}+`,i1=`(?:\\\\["\\/\\\\brfnt]|\\\\u${vp}{4}|[^"\\\\])`,a1=`(?:\\\\['\\/\\\\brfnt]|\\\\u${vp}{4}|[^'\\\\])`,Ln=`(?:"${i1}*"|'${a1}*')`,bp=`${Xt}*:(?:${Xt}+|$)`,o1=`[^\\s]+(?=${bp})`,Mi=`${Xt}*:`,Ic=`[^\\s]+(?=${Mi})`,c1=`(?:0|${n1}${Ga}*)`,l1=`\\.${Ga}+`,f1="[eE]",p1=`${f1}[-+]?${Ga}+`,Mn=`-?${c1}(?:${l1})?(?:${p1})?`,u1=`-${Xt}+`,Un=`#[^
]*`,Oc=ut.states({main:{WS:{match:new RegExp(Ec),lineBreaks:!0},indent:new RegExp(s1),comment:new RegExp(Un),inlineArray:{match:"[",type:ut.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:ut.keywords({accent3:"{"}),push:"inlineObject"},accent1:new RegExp(u1),accent7:["true","false","null",new RegExp(Ln),new RegExp(Mn)],accent6:new RegExp(o1),accent3:{match:new RegExp(bp),lineBreaks:!0,push:"property"},other:/[^#\n]+/},property:{WS:{match:new RegExp(Ec),lineBreaks:!0,pop:1},comment:new RegExp(Un),accent7:{match:["true","false","null",new RegExp(Ln),new RegExp(Mn)],pop:1},other:/[^#\n]+/},inlineArray:{WS:new RegExp(`${Xt}+`),comment:new RegExp(Un),inlineArray:{match:"[",type:ut.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:ut.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"]",type:ut.keywords({accent3:"]"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Ln),new RegExp(Mn)],accent6:new RegExp(Ic),accent3:{match:new RegExp(Mi),lineBreaks:!0},other:/[^\]\n,#]+/},inlineObject:{WS:new RegExp(`${Xt}+`),comment:new RegExp(Un),inlineArray:{match:"[",type:ut.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:ut.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"}",type:ut.keywords({accent3:"}"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Ln),new RegExp(Mn)],accent6:new RegExp(Ic),accent3:{match:new RegExp(Mi),lineBreaks:!0},other:/[^}\n,#]+/}});function Pc(t,e,r){const n=t.slice();return n[10]=e[r],n}function kc(t,e,r){const n=t.slice();return n[13]=e[r],n[15]=r,n}function jc(t){let e,r=t[15]+1+"",n;return{c(){e=J("div"),n=ie(r),this.h()},l(s){e=G(s,"DIV",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p:xe,d(s){s&&A(e)}}}function d1(t){let e=t[10].value+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&8&&e!==(e=n[10].value+"")&&Ue(r,e)},d(n){n&&A(r)}}}function m1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent8 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function h1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent7 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function y1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent6 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function $1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent5 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function g1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent4 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function v1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent3 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function b1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent2 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function S1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","accent1 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function w1(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){N(e,"class","comment svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&Ue(n,r)},d(s){s&&A(e)}}}function _c(t){let e;function r(i,a){return i[10].type==="comment"?w1:i[10].type==="accent1"?S1:i[10].type==="accent2"?b1:i[10].type==="accent3"?v1:i[10].type==="accent4"?g1:i[10].type==="accent5"?$1:i[10].type==="accent6"?y1:i[10].type==="accent7"?h1:i[10].type==="accent8"?m1:d1}let n=r(t),s=n(t);return{c(){s.c(),e=Ct()},l(i){s.l(i),e=Ct()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function E1(t){let e,r,n,s,i,a,o,c,l,p,u,d,g=[...Array(t[4])],O=[];for(let v=0;v<g.length;v+=1)O[v]=jc(kc(t,g,v));let m=t[3],h=[];for(let v=0;v<m.length;v+=1)h[v]=_c(Pc(t,m,v));return{c(){e=J("div"),r=J("div");for(let v=0;v<O.length;v+=1)O[v].c();n=Ae(),s=J("div"),i=J("pre"),a=ie("");for(let v=0;v<h.length;v+=1)h[v].c();o=ie(`
    `),c=Ae(),l=J("textarea"),this.h()},l(v){e=G(v,"DIV",{class:!0});var S=L(e);r=G(S,"DIV",{class:!0});var b=L(r);for(let _=0;_<O.length;_+=1)O[_].l(b);b.forEach(A),n=Ne(S),s=G(S,"DIV",{class:!0});var k=L(s);i=G(k,"PRE",{class:!0});var P=L(i);a=ae(P,"");for(let _=0;_<h.length;_+=1)h[_].l(P);o=ae(P,`
    `),P.forEach(A),c=Ne(k),l=G(k,"TEXTAREA",{class:!0,"aria-label":!0}),L(l).forEach(A),k.forEach(A),S.forEach(A),this.h()},h(){N(r,"class","line-numbers svelte-564293"),N(i,"class","highlighted svelte-564293"),N(l,"class","src svelte-564293"),N(l,"aria-label","Code Editor"),N(s,"class","editable svelte-564293"),N(e,"class",p="Editor "+t[1]+" svelte-564293")},m(v,S){Q(v,e,S),T(e,r);for(let b=0;b<O.length;b+=1)O[b].m(r,null);T(e,n),T(e,s),T(s,i),T(i,a);for(let b=0;b<h.length;b+=1)h[b].m(i,null);T(i,o),T(s,c),T(s,l),t[8](l),vo(l,t[0]),u||(d=[zt(l,"input",t[9]),zt(l,"input",t[7])],u=!0)},p(v,[S]){if(S&16){g=[...Array(v[4])];let b;for(b=0;b<g.length;b+=1){const k=kc(v,g,b);O[b]?O[b].p(k,S):(O[b]=jc(k),O[b].c(),O[b].m(r,null))}for(;b<O.length;b+=1)O[b].d(1);O.length=g.length}if(S&8){m=v[3];let b;for(b=0;b<m.length;b+=1){const k=Pc(v,m,b);h[b]?h[b].p(k,S):(h[b]=_c(k),h[b].c(),h[b].m(i,o))}for(;b<h.length;b+=1)h[b].d(1);h.length=m.length}S&1&&vo(l,v[0]),S&2&&p!==(p="Editor "+v[1]+" svelte-564293")&&N(e,"class",p)},i:xe,o:xe,d(v){v&&A(e),ts(O,v),ts(h,v),t[8](null),u=!1,kl(d)}}}function I1(t,e,r){let n,s,{theme:i="solarized-dark"}=e,{value:a=""}=e,{format:o="json"}=e,c;const l=()=>{c.focus()};function p(g){yu.call(this,t,g)}function u(g){_t[g?"unshift":"push"](()=>{c=g,r(2,c)})}function d(){a=this.value,r(0,a)}return t.$$set=g=>{"theme"in g&&r(1,i=g.theme),"value"in g&&r(0,a=g.value),"format"in g&&r(5,o=g.format)},t.$$.update=()=>{t.$$.dirty&1&&r(4,n=(a.match(/\n/g)||[]).length+1),t.$$.dirty&33&&r(3,s=function(){return o==="json"?(wc.reset(a),Array.from(wc)):(Oc.reset(a),Array.from(Oc))}())},[a,i,c,s,n,o,l,p,u,d]}class O1 extends qt{constructor(e){super(),Rt(this,e,I1,E1,Dt,{theme:1,value:0,format:5,focus:6})}get focus(){return this.$$.ctx[6]}}function xc(t,e,r){const n=t.slice();return n[18]=e[r],n[20]=r,n}function Ac(t){let e,r,n,s;function i(){return t[12](t[20])}return{c(){e=J("button"),r=ie("×"),this.h()},l(a){e=G(a,"BUTTON",{class:!0});var o=L(e);r=ae(o,"×"),o.forEach(A),this.h()},h(){N(e,"class","tab-close svelte-1ylgy73")},m(a,o){Q(a,e,o),T(e,r),n||(s=zt(e,"click",i),n=!0)},p(a,o){t=a},d(a){a&&A(e),n=!1,s()}}}function Nc(t){let e,r,n=t[18].label+"",s,i,a,o,c,l,p=!t[18].persistent&&t[0].length>t[6]&&Ac(t);function u(){return t[13](t[20])}return{c(){e=J("button"),r=J("span"),s=ie(n),i=Ae(),p&&p.c(),this.h()},l(d){e=G(d,"BUTTON",{role:!0,id:!0,"aria-selected":!0,"aria-controls":!0,class:!0});var g=L(e);r=G(g,"SPAN",{class:!0});var O=L(r);s=ae(O,n),O.forEach(A),i=Ne(g),p&&p.l(g),g.forEach(A),this.h()},h(){N(r,"class","tab-label svelte-1ylgy73"),N(e,"role","tab"),N(e,"id",a=`${t[3]}-tab-${t[20]}`),N(e,"aria-selected",o=t[20]===t[1]),N(e,"aria-controls","tabpanel"),N(e,"class","svelte-1ylgy73"),bo(e,"active",t[20]===t[5])},m(d,g){Q(d,e,g),T(e,r),T(r,s),T(e,i),p&&p.m(e,null),c||(l=zt(e,"click",u),c=!0)},p(d,g){t=d,g&1&&n!==(n=t[18].label+"")&&Ue(s,n),!t[18].persistent&&t[0].length>t[6]?p?p.p(t,g):(p=Ac(t),p.c(),p.m(e,null)):p&&(p.d(1),p=null),g&8&&a!==(a=`${t[3]}-tab-${t[20]}`)&&N(e,"id",a),g&2&&o!==(o=t[20]===t[1])&&N(e,"aria-selected",o),g&32&&bo(e,"active",t[20]===t[5])},d(d){d&&A(e),p&&p.d(),c=!1,l()}}}function Cc(t){let e,r,n,s,i,a;return{c(){e=J("button"),r=J("span"),n=ie("+"),this.h()},l(o){e=G(o,"BUTTON",{role:!0,id:!0,class:!0});var c=L(e);r=G(c,"SPAN",{class:!0});var l=L(r);n=ae(l,"+"),l.forEach(A),c.forEach(A),this.h()},h(){N(r,"class","tab-label svelte-1ylgy73"),N(e,"role","tab"),N(e,"id",s=`${t[3]}-tab-${t[0].length}`),N(e,"class","svelte-1ylgy73")},m(o,c){Q(o,e,c),T(e,r),T(r,n),i||(a=zt(e,"click",t[10]),i=!0)},p(o,c){c&9&&s!==(s=`${o[3]}-tab-${o[0].length}`)&&N(e,"id",s)},d(o){o&&A(e),i=!1,a()}}}function P1(t){let e,r,n,s,i,a,o,c,l,p=t[0],u=[];for(let h=0;h<p.length;h+=1)u[h]=Nc(xc(t,p,h));let d=t[4]&&Cc(t);function g(h){t[15](h)}function O(h){t[16](h)}let m={};return t[0][t[1]].text!==void 0&&(m.value=t[0][t[1]].text),t[2]!==void 0&&(m.format=t[2]),i=new O1({props:m}),t[14](i),_t.push(()=>hr(i,"value",g,t[0][t[1]].text)),_t.push(()=>hr(i,"format",O,t[2])),i.$on("input",t[17]),{c(){e=J("div");for(let h=0;h<u.length;h+=1)u[h].c();r=Ae(),d&&d.c(),n=Ae(),s=J("div"),tt(i.$$.fragment),this.h()},l(h){e=G(h,"DIV",{role:!0,class:!0});var v=L(e);for(let b=0;b<u.length;b+=1)u[b].l(v);r=Ne(v),d&&d.l(v),v.forEach(A),n=Ne(h),s=G(h,"DIV",{role:!0,id:!0,"aria-labelledby":!0,class:!0});var S=L(s);rt(i.$$.fragment,S),S.forEach(A),this.h()},h(){N(e,"role","tablist"),N(e,"class","svelte-1ylgy73"),N(s,"role","tabpanel"),N(s,"id","tabpanel"),N(s,"aria-labelledby",c=`${t[3]}-tab-${t[1]}`),N(s,"class","svelte-1ylgy73")},m(h,v){Q(h,e,v);for(let S=0;S<u.length;S+=1)u[S].m(e,null);T(e,r),d&&d.m(e,null),Q(h,n,v),Q(h,s,v),nt(i,s,null),l=!0},p(h,[v]){if(v&2667){p=h[0];let b;for(b=0;b<p.length;b+=1){const k=xc(h,p,b);u[b]?u[b].p(k,v):(u[b]=Nc(k),u[b].c(),u[b].m(e,r))}for(;b<u.length;b+=1)u[b].d(1);u.length=p.length}h[4]?d?d.p(h,v):(d=Cc(h),d.c(),d.m(e,null)):d&&(d.d(1),d=null);const S={};!a&&v&3&&(a=!0,S.value=h[0][h[1]].text,yr(()=>a=!1)),!o&&v&4&&(o=!0,S.format=h[2],yr(()=>o=!1)),i.$set(S),(!l||v&10&&c!==(c=`${h[3]}-tab-${h[1]}`))&&N(s,"aria-labelledby",c)},i(h){l||(Le(i.$$.fragment,h),l=!0)},o(h){Me(i.$$.fragment,h),l=!1},d(h){h&&A(e),ts(u,h),d&&d.d(),h&&A(n),h&&A(s),t[14](null),st(i)}}}function k1(t,e,r){let{ns:n=""}=e,{tabs:s=[]}=e,{newTab:i=void 0}=e,{active:a=0}=e,{selected:o=0}=e,{minTabs:c=1}=e,{format:l="json"}=e,p;const u=$u();function d(P){r(1,o=P),p.focus()}function g(){r(0,s[s.length]=i(),s),r(1,o=s.length-1),p.focus()}function O(P){o>=P&&o>0&&r(1,o-=1),s.splice(P,1),r(0,s),p.focus()}const m=P=>O(P),h=P=>d(P);function v(P){_t[P?"unshift":"push"](()=>{p=P,r(7,p)})}function S(P){t.$$.not_equal(s[o].text,P)&&(s[o].text=P,r(0,s))}function b(P){l=P,r(2,l)}const k=()=>u("input",s);return t.$$set=P=>{"ns"in P&&r(3,n=P.ns),"tabs"in P&&r(0,s=P.tabs),"newTab"in P&&r(4,i=P.newTab),"active"in P&&r(5,a=P.active),"selected"in P&&r(1,o=P.selected),"minTabs"in P&&r(6,c=P.minTabs),"format"in P&&r(2,l=P.format)},[s,o,l,n,i,a,c,p,u,d,g,O,m,h,v,S,b,k]}class Tc extends qt{constructor(e){super(),Rt(this,e,k1,P1,Dt,{ns:3,tabs:0,newTab:4,active:5,selected:1,minTabs:6,format:2})}}function qc(t,e,r){const n=t.slice();return n[2]=e[r],n}function j1(t){let e;function r(i,a){return i[1].output?x1:_1}let n=r(t),s=n(t);return{c(){s.c(),e=Ct()},l(i){s.l(i),e=Ct()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function _1(t){let e=t[1]+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[1]+"")&&Ue(r,e)},d(n){n&&A(r)}}}function x1(t){let e,r,n=t[1].output.errors,s=[];for(let i=0;i<n.length;i+=1)s[i]=Dc(qc(t,n,i));return{c(){e=ie(`Invalid
    `),r=J("ul");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=ae(i,`Invalid
    `),r=G(i,"UL",{});var a=L(r);for(let o=0;o<s.length;o+=1)s[o].l(a);a.forEach(A)},m(i,a){Q(i,e,a),Q(i,r,a);for(let o=0;o<s.length;o+=1)s[o].m(r,null)},p(i,a){if(a&1){n=i[1].output.errors;let o;for(o=0;o<n.length;o+=1){const c=qc(i,n,o);s[o]?s[o].p(c,a):(s[o]=Dc(c),s[o].c(),s[o].m(r,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){i&&A(e),i&&A(r),ts(s,i)}}}function Rc(t){let e,r,n=t[2].instanceLocation+"",s,i,a,o=t[2].absoluteKeywordLocation+"",c;return{c(){e=J("li"),r=J("code"),s=ie(n),i=ie(" fails schema constraint "),a=J("code"),c=ie(o),this.h()},l(l){e=G(l,"LI",{class:!0});var p=L(e);r=G(p,"CODE",{class:!0});var u=L(r);s=ae(u,n),u.forEach(A),i=ae(p," fails schema constraint "),a=G(p,"CODE",{class:!0});var d=L(a);c=ae(d,o),d.forEach(A),p.forEach(A),this.h()},h(){N(r,"class","svelte-1sdf2dp"),N(a,"class","svelte-1sdf2dp"),N(e,"class","svelte-1sdf2dp")},m(l,p){Q(l,e,p),T(e,r),T(r,s),T(e,i),T(e,a),T(a,c)},p(l,p){p&1&&n!==(n=l[2].instanceLocation+"")&&Ue(s,n),p&1&&o!==(o=l[2].absoluteKeywordLocation+"")&&Ue(c,o)},d(l){l&&A(e)}}}function Dc(t){let e=!t[2].valid&&!t[2].keyword.endsWith("#validate"),r,n=e&&Rc(t);return{c(){n&&n.c(),r=Ct()},l(s){n&&n.l(s),r=Ct()},m(s,i){n&&n.m(s,i),Q(s,r,i)},p(s,i){i&1&&(e=!s[2].valid&&!s[2].keyword.endsWith("#validate")),e?n?n.p(s,i):(n=Rc(s),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&A(r)}}}function A1(t){let e=t[0]?"Valid":"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[0]?"Valid":"")&&Ue(r,e)},d(n){n&&A(r)}}}function N1(t){let e;return{c(){e=ie("Validating ...")},l(r){e=ae(r,"Validating ...")},m(r,n){Q(r,e,n)},p:xe,d(r){r&&A(e)}}}function C1(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!0,pending:N1,then:A1,catch:j1,value:0,error:1};return rs(r=t[0],n),{c(){e=Ct(),n.block.c()},l(s){e=Ct(),n.block.l(s)},m(s,i){Q(s,e,i),n.block.m(s,n.anchor=i),n.mount=()=>e.parentNode,n.anchor=e},p(s,[i]){t=s,n.ctx=t,i&1&&r!==(r=t[0])&&rs(r,n)||jl(n,t,i)},i:xe,o:xe,d(s){s&&A(e),n.block.d(s),n.token=null,n=null}}}function T1(t,e,r){let{results:n}=e;return t.$$set=s=>{"results"in s&&r(0,n=s.results)},[n]}class Sp extends qt{constructor(e){super(),Rt(this,e,T1,C1,Dt,{results:0})}}function q1(t){let e,r,n,s,i;const a=t[2].default,o=Ji(a,t,t[1],null);return{c(){e=J("a"),r=dt("svg"),n=dt("path"),s=Ae(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=mt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=mt(p,"path",{"fill-rule":!0,d:!0}),L(n).forEach(A),p.forEach(A),s=Ne(l),o&&o.l(l),l.forEach(A),this.h()},h(){N(n,"fill-rule","evenodd"),N(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),N(r,"height","1.5em"),N(r,"viewBox","0 0 16 16"),N(r,"version","1.1"),N(r,"aria-hidden","true"),N(r,"class","svelte-i8toq"),N(e,"href",t[0]),N(e,"class","svelte-i8toq")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Gi(o,a,c,c[1],i?Xi(a,c[1],l,null):Hi(c[1]),null),(!i||l&1)&&N(e,"href",c[0])},i(c){i||(Le(o,c),i=!0)},o(c){Me(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function R1(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Lc extends qt{constructor(e){super(),Rt(this,e,R1,q1,Dt,{href:0})}}function D1(t){let e,r,n,s,i;const a=t[2].default,o=Ji(a,t,t[1],null);return{c(){e=J("a"),r=dt("svg"),n=dt("path"),s=Ae(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=mt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=mt(p,"path",{d:!0}),L(n).forEach(A),p.forEach(A),s=Ne(l),o&&o.l(l),l.forEach(A),this.h()},h(){N(n,"d","M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"),N(r,"height","1em"),N(r,"viewBox","0 0 780 250"),N(r,"version","1.1"),N(r,"aria-hidden","true"),N(r,"class","svelte-wj8h0n"),N(e,"href",t[0]),N(e,"class","svelte-wj8h0n")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Gi(o,a,c,c[1],i?Xi(a,c[1],l,null):Hi(c[1]),null),(!i||l&1)&&N(e,"href",c[0])},i(c){i||(Le(o,c),i=!0)},o(c){Me(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function L1(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Mc extends qt{constructor(e){super(),Rt(this,e,L1,D1,Dt,{href:0})}}function M1(t){let e,r,n,s,i,a,o,c,l;const p=t[2].default,u=Ji(p,t,t[1],null);return{c(){e=J("a"),r=dt("svg"),n=dt("g"),s=dt("path"),i=dt("path"),a=dt("path"),o=dt("path"),c=Ae(),u&&u.c(),this.h()},l(d){e=G(d,"A",{href:!0,class:!0});var g=L(e);r=mt(g,"svg",{version:!0,viewBox:!0,height:!0,class:!0});var O=L(r);n=mt(O,"g",{transform:!0,id:!0});var m=L(n);s=mt(m,"path",{id:!0,d:!0,style:!0}),L(s).forEach(A),i=mt(m,"path",{id:!0,d:!0,style:!0}),L(i).forEach(A),a=mt(m,"path",{id:!0,d:!0,style:!0}),L(a).forEach(A),o=mt(m,"path",{id:!0,d:!0,style:!0}),L(o).forEach(A),m.forEach(A),O.forEach(A),c=Ne(g),u&&u.l(g),g.forEach(A),this.h()},h(){N(s,"id","path4544"),N(s,"d","m 122.99401,114.18985 c -4.32897,-0.9404 -7.58044,-3.47848 -8.71251,-6.80095 -0.78921,-2.31618 -0.67682,-6.07238 0.33363,-11.150598 0.48507,-2.437836 0.88169,-5.347843 0.88139,-6.466688 -9.8e-4,-3.718098 -1.71106,-5.735418 -5.1001,-6.016462 l -1.9549,-0.162116 v -2.392655 -2.392657 l 1.85208,-0.250855 c 2.70243,-0.366031 3.74441,-1.02838 4.57629,-2.908984 0.61121,-1.381726 0.68884,-2.068648 0.50552,-4.472869 -0.11913,-1.562244 -0.53527,-4.348568 -0.92477,-6.191832 -0.98954,-4.682868 -0.94822,-8.485471 0.11707,-10.773163 1.56862,-3.368589 5.43705,-5.854553 9.93248,-6.382903 l 1.93299,-0.227185 v 2.518015 2.518015 h -1.29973 c -1.77186,0 -4.2497,1.262413 -4.8835,2.488054 -0.60797,1.175674 -0.65405,2.864146 -0.15834,5.802223 0.78343,4.643508 1.04707,9.098344 0.67592,11.421636 -0.42464,2.658142 -1.97477,5.796328 -3.6791,7.448236 l -1.18012,1.143813 1.61497,1.982752 c 1.99051,2.443801 2.76458,4.148744 3.24284,7.142561 0.37835,2.368341 0.0844,7.282673 -0.67072,11.213982 -1.05359,5.48514 0.1623,7.65141 4.66209,8.30613 l 1.67569,0.24382 v 2.44782 c 0,2.79211 0.17086,2.69708 -3.43917,1.91286 z"),Cn(s,"fill","stroke-width:0.35277775"),N(i,"id","path4546"),N(i,"d","m 152.2304,112.24932 v -2.42987 l 2.04969,-0.42336 c 2.26276,-0.46736 4.054,-1.8634 4.45842,-3.47475 0.1274,-0.50758 -0.11267,-3.16398 -0.53347,-5.90311 -1.37183,-8.929552 -0.6114,-13.537042 2.85482,-17.297452 l 1.48237,-1.60818 -1.1108,-1.26512 c -3.97855,-4.53132 -4.66885,-8.552208 -3.15364,-18.369547 0.76342,-4.946305 0.76409,-4.994322 0.087,-6.173611 -0.79713,-1.388278 -3.28385,-2.776033 -4.97438,-2.776033 h -1.15997 v -2.469445 c 0,-2.811057 -0.0583,-2.773846 3.24583,-2.072788 3.9645,0.841179 6.80448,2.853272 8.27787,5.864775 0.84544,1.728026 0.97275,2.400136 0.94911,5.010889 -0.015,1.658349 -0.35758,4.682054 -0.76125,6.719346 -1.49867,7.563594 -1.3651,9.576204 0.7654,11.532814 0.98915,0.90842 1.64012,1.17274 3.37032,1.36849 l 2.14439,0.24261 v 2.42387 2.42388 l -1.6757,7.1e-4 c -2.1517,7e-4 -3.9323,0.90924 -4.83869,2.46889 -0.95194,1.63803 -0.89239,5.20675 0.17364,10.40695 0.90648,4.421902 1.05253,8.458452 0.3882,10.728752 -0.70059,2.39406 -3.81995,5.29609 -6.74745,6.27718 -1.26118,0.42266 -2.96775,0.87096 -3.79236,0.99623 l -1.49931,0.22775 z"),Cn(i,"stroke-width","0.35277778"),N(a,"id","path4548"),N(a,"d","m 131.74239,108.26592 c -1.02163,-1.2988 -0.87294,-3.53652 0.38087,-5.73185 0.92776,-1.62446 4.80862,-6.948549 7.61066,-10.440949 l 1.13094,-1.40958 -1.80213,-5.22523 c -2.02147,-5.86123 -2.0098,-5.97467 0.65581,-6.37225 l 1.46834,-0.219 1.64076,3.3506 c 0.90242,1.84283 1.76982,3.35061 1.92755,3.35061 0.15774,0 1.77489,-1.75542 3.59368,-3.90092 3.15918,-3.72667 3.35688,-3.89165 4.42591,-3.69334 0.64552,0.11974 1.21858,0.0465 1.35432,-0.17316 0.31818,-0.51481 1.23083,0.24704 1.23083,1.02746 0,0.32009 -0.45438,1.13409 -1.00972,1.80888 -2.26771,2.75549 -7.10417,9.27155 -7.10417,9.5713 0,0.17685 0.97502,2.45302 2.16671,5.05816 l 2.1667,4.736609 -0.65823,0.98459 c -0.36203,0.54152 -0.66236,1.12603 -0.6674,1.29891 -0.005,0.17288 -0.27769,0.48371 -0.60588,0.69073 -0.83174,0.52464 -1.44656,-0.11541 -3.9894,-4.153119 -1.16417,-1.84856 -2.23163,-3.36491 -2.37215,-3.36967 -0.31309,-0.0106 -3.7911,5.131969 -6.47955,9.580639 -2.37093,3.92324 -1.93885,3.4204 -3.26614,3.80106 -0.95533,0.27398 -1.19348,0.19843 -1.79831,-0.57048 z"),Cn(a,"stroke-width","0.35277775"),N(o,"id","path4550"),N(o,"d","m 131.98567,83.677091 c -2.15148,-3.8472 -6.0183,-9.42829 -7.57842,-10.93815 -0.79252,-0.76698 -1.44094,-1.57494 -1.44094,-1.79546 0,-0.6016 1.61695,-1.21975 3.19058,-1.21975 1.69822,0 3.49597,1.47777 5.0997,4.19203 0.58208,0.98515 1.15641,1.79434 1.27629,1.79819 0.11988,0.004 0.80873,-1.65116 1.53078,-3.67779 1.5464,-4.34039 5.62351,-12.777999 7.22453,-14.951229 1.3726,-1.86316 3.42936,-2.865165 5.90274,-2.875676 3.23375,-0.01374 3.24268,0.130067 0.20474,3.296663 -4.63599,4.832327 -6.76321,8.809632 -11.25155,21.037252 -1.24637,3.39549 -2.39032,6.47895 -2.54212,6.85214 -0.23022,0.56597 -0.49833,0.28096 -1.61633,-1.71822 z"),Cn(o,"stroke-width","0.35277775"),N(n,"transform","translate(-104.22785,-45.507923)"),N(n,"id","layer1"),N(r,"version","1.1"),N(r,"viewBox","0 0 70.423268 70.42326"),N(r,"height","1.25em"),N(r,"class","svelte-27u907"),N(e,"href",t[0]),N(e,"class","svelte-27u907")},m(d,g){Q(d,e,g),T(e,r),T(r,n),T(n,s),T(n,i),T(n,a),T(n,o),T(e,c),u&&u.m(e,null),l=!0},p(d,[g]){u&&u.p&&(!l||g&2)&&Gi(u,p,d,d[1],l?Xi(p,d[1],g,null):Hi(d[1]),null),(!l||g&1)&&N(e,"href",d[0])},i(d){l||(Le(u,d),l=!0)},o(d){Me(u,d),l=!1},d(d){d&&A(e),u&&u.d(d)}}}function U1(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class B1 extends qt{constructor(e){super(),Rt(this,e,U1,M1,Dt,{href:0})}}function F1(t){let e;return{c(){e=ie("hyperjump-io/json-schema.hyperjump.io")},l(r){e=ae(r,"hyperjump-io/json-schema.hyperjump.io")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function V1(t){let e;return{c(){e=ie("hyperjump-io/json-schema-validator")},l(r){e=ae(r,"hyperjump-io/json-schema-validator")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function K1(t){let e;return{c(){e=ie("@hyperjump/json-schema")},l(r){e=ae(r,"@hyperjump/json-schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function z1(t){let e;return{c(){e=ie("@hyperjump/json-schema-core")},l(r){e=ae(r,"@hyperjump/json-schema-core")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function J1(t){let e;return{c(){e=ie("JSON Schema")},l(r){e=ae(r,"JSON Schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function G1(t){let e,r,n,s,i,a,o,c,l,p,u,d,g,O,m,h,v;return s=new Lc({props:{href:"https://github.com/hyperjump-io/json-schema.hyperjump.io",$$slots:{default:[F1]},$$scope:{ctx:t}}}),o=new Lc({props:{href:"https://github.com/hyperjump-io/json-schema-validator",$$slots:{default:[V1]},$$scope:{ctx:t}}}),p=new Mc({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema",$$slots:{default:[K1]},$$scope:{ctx:t}}}),g=new Mc({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema-core",$$slots:{default:[z1]},$$scope:{ctx:t}}}),h=new B1({props:{href:"https://json-schema.org",$$slots:{default:[J1]},$$scope:{ctx:t}}}),{c(){e=J("footer"),r=J("ul"),n=J("li"),tt(s.$$.fragment),i=Ae(),a=J("li"),tt(o.$$.fragment),c=Ae(),l=J("li"),tt(p.$$.fragment),u=Ae(),d=J("li"),tt(g.$$.fragment),O=Ae(),m=J("li"),tt(h.$$.fragment),this.h()},l(S){e=G(S,"FOOTER",{class:!0});var b=L(e);r=G(b,"UL",{class:!0});var k=L(r);n=G(k,"LI",{class:!0});var P=L(n);rt(s.$$.fragment,P),P.forEach(A),i=Ne(k),a=G(k,"LI",{class:!0});var _=L(a);rt(o.$$.fragment,_),_.forEach(A),c=Ne(k),l=G(k,"LI",{class:!0});var R=L(l);rt(p.$$.fragment,R),R.forEach(A),u=Ne(k),d=G(k,"LI",{class:!0});var oe=L(d);rt(g.$$.fragment,oe),oe.forEach(A),O=Ne(k),m=G(k,"LI",{class:!0});var me=L(m);rt(h.$$.fragment,me),me.forEach(A),k.forEach(A),b.forEach(A),this.h()},h(){N(n,"class","svelte-17tbtsq"),N(a,"class","svelte-17tbtsq"),N(l,"class","svelte-17tbtsq"),N(d,"class","svelte-17tbtsq"),N(m,"class","svelte-17tbtsq"),N(r,"class","links svelte-17tbtsq"),N(e,"class","svelte-17tbtsq")},m(S,b){Q(S,e,b),T(e,r),T(r,n),nt(s,n,null),T(r,i),T(r,a),nt(o,a,null),T(r,c),T(r,l),nt(p,l,null),T(r,u),T(r,d),nt(g,d,null),T(r,O),T(r,m),nt(h,m,null),v=!0},p(S,[b]){const k={};b&1&&(k.$$scope={dirty:b,ctx:S}),s.$set(k);const P={};b&1&&(P.$$scope={dirty:b,ctx:S}),o.$set(P);const _={};b&1&&(_.$$scope={dirty:b,ctx:S}),p.$set(_);const R={};b&1&&(R.$$scope={dirty:b,ctx:S}),g.$set(R);const oe={};b&1&&(oe.$$scope={dirty:b,ctx:S}),h.$set(oe)},i(S){v||(Le(s.$$.fragment,S),Le(o.$$.fragment,S),Le(p.$$.fragment,S),Le(g.$$.fragment,S),Le(h.$$.fragment,S),v=!0)},o(S){Me(s.$$.fragment,S),Me(o.$$.fragment,S),Me(p.$$.fragment,S),Me(g.$$.fragment,S),Me(h.$$.fragment,S),v=!1},d(S){S&&A(e),st(s),st(o),st(p),st(g),st(h)}}}class H1 extends qt{constructor(e){super(),Rt(this,e,null,G1,Dt,{})}}const X1=xd(Gb);var W1=`{
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
}`;const{Schema:wp}=j,Ep=W1;wp.add(JSON.parse(Ep),"https://spec.openapis.org/oas/3.0/schema");wp.add(JSON.parse(Ep),"https://spec.openapis.org/oas/3.0/schema/latest");var Y1=`{
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
}`,Q1=`{
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
}`,Ip=`{
  "$id": "https://spec.openapis.org/oas/3.1/schema/2022-10-07",
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
        {
          "url": "/"
        }
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
      "dependentSchemas": {
        "identifier": {
          "not": {
            "required": [
              "url"
            ]
          }
        }
      },
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
        },
        "get": {
          "$ref": "#/$defs/operation"
        },
        "put": {
          "$ref": "#/$defs/operation"
        },
        "post": {
          "$ref": "#/$defs/operation"
        },
        "delete": {
          "$ref": "#/$defs/operation"
        },
        "options": {
          "$ref": "#/$defs/operation"
        },
        "head": {
          "$ref": "#/$defs/operation"
        },
        "patch": {
          "$ref": "#/$defs/operation"
        },
        "trace": {
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
        "operationId": {
          "type": "string"
        },
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
}
`,Op=`{
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
}`,Pp=`{
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
}`;const{Core:Z1,Keywords:Bn,Schema:$t}=j,e0=Y1,t0=Q1,kp=Ip,jp=Ip,r0=Op,n0=Op,s0=Pp,i0=Pp;$t.add(JSON.parse(kp),"https://spec.openapis.org/oas/3.1/schema");$t.add(JSON.parse(kp),"https://spec.openapis.org/oas/3.1/schema/latest");$t.add(JSON.parse(jp),"https://spec.openapis.org/oas/3.1/schema-base");$t.add(JSON.parse(jp),"https://spec.openapis.org/oas/3.1/schema-base/latest");$t.add(JSON.parse(r0));$t.add(JSON.parse(n0));$t.add(JSON.parse(s0));$t.add(JSON.parse(i0));$t.add(JSON.parse(e0));$t.add(JSON.parse(t0));Z1.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:Bn.metaData,discriminator:Bn.metaData,externalDocs:Bn.metaData,xml:Bn.metaData});const a0=X1;var Je=a0;Je.add;Je.get;Je.validate;Je.compile;Je.interpret;Je.setMetaOutputFormat;Je.setShouldMetaValidate;Je.FLAG;Je.BASIC;Je.DETAILED;Je.VERBOSE;Je.Keywords;Je.InvalidSchemaError;const{Core:_p,Schema:Qr,Instance:fi}=j,o0=async(t,e,r)=>{const n=await Qr.step("items",r),s=Qr.typeOf(n,"array")?Qr.length(n):Number.MAX_SAFE_INTEGER;return Qr.typeOf(t,"boolean")?[s,Qr.value(t)]:[s,await _p.compileSchema(t,e)]},c0=([t,e],r,n,s)=>fi.typeOf(r,"array")?typeof e=="string"?fi.every((i,a)=>a<t||_p.interpretSchema(e,i,n,s),r):fi.every((i,a)=>a<t?!0:e,r):!0;var l0={compile:o0,interpret:c0};const{Core:xp,Schema:pi,Instance:Ui}=j,f0=async(t,e,r)=>{const n=await pi.step("items",r);return[pi.typeOf(n,"array")?pi.length(n):Number.MAX_SAFE_INTEGER,await xp.compileSchema(t,e)]},Ap=([t,e],r,n,s)=>Ui.typeOf(r,"array")?Ui.every((i,a)=>a<t||xp.interpretSchema(e,i,n,s),r):!0,p0=(t,e,r,n)=>Ap(t,e,r,n)&&new Set(Ui.map((s,i)=>i,e));var u0={compile:f0,interpret:Ap,collectEvaluatedItems:p0};const{Core:Np,Schema:jt,Instance:Uc}=j,d0=async(t,e,r)=>{const n=await jt.step("properties",r),s=jt.typeOf(n,"object")?jt.keys(n):[],i=await jt.step("patternProperties",r),a=jt.typeOf(i,"object")?jt.keys(i).map(o=>new RegExp(o)):[];return jt.typeOf(t,"boolean")?[s,a,jt.value(t)]:[s,a,await Np.compileSchema(t,e)]},m0=([t,e,r],n,s,i)=>{if(!Uc.typeOf(n,"object"))return!0;const a=Uc.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>Np.interpretSchema(r,o,s,i)):a.length===0||r};var h0={compile:d0,interpret:m0};const{Core:Cp,Schema:ur,Instance:Bc}=j,y0=async(t,e,r)=>{const n=await ur.step("properties",r),s=ur.typeOf(n,"object")?ur.keys(n):[],i=await ur.step("patternProperties",r),a=ur.typeOf(i,"object")?ur.keys(i).map(o=>new RegExp(o)):[];return[s,a,await Cp.compileSchema(t,e)]},Tp=([t,e,r],n,s,i)=>Bc.typeOf(n,"object")?Bc.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>Cp.interpretSchema(r,a,s,i)):!0,$0=(t,e,r,n)=>Tp(t,e,r,n)&&[new RegExp("")];var g0={compile:y0,interpret:Tp,collectEvaluatedProperties:$0};const{Core:qs,Schema:v0}=j,Fc=ke,b0=(t,e)=>Fc.pipeline([v0.map(async r=>qs.compileSchema(await r,e)),Fc.all],t),S0=(t,e,r,n)=>t.every(s=>qs.interpretSchema(s,e,r,n)),w0=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&qs.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),E0=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&qs.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var I0={compile:b0,interpret:S0,collectEvaluatedProperties:w0,collectEvaluatedItems:E0};const{Core:Rs,Schema:O0}=j,Vc=ke,P0=(t,e)=>Vc.pipeline([O0.map(async r=>Rs.compileSchema(await r,e)),Vc.all],t),k0=(t,e,r,n)=>t.filter(i=>Rs.interpretSchema(i,e,r,n)).length>0,j0=(t,e,r,n)=>t.reduce((s,i)=>{const a=Rs.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),_0=(t,e,r,n)=>t.reduce((s,i)=>{const a=Rs.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var x0={compile:P0,interpret:k0,collectEvaluatedProperties:j0,collectEvaluatedItems:_0};const{Schema:A0,Instance:N0}=j,qp=Rr,C0=t=>qp(A0.value(t)),T0=(t,e)=>qp(N0.value(e))===t;var q0={compile:C0,interpret:T0};const{Core:Rp,Instance:Kc}=j,R0=(t,e)=>Rp.compileSchema(t,e),D0=(t,e,r,n)=>!Kc.typeOf(e,"array")||Kc.some(s=>Rp.interpretSchema(t,s,r,n),e);var L0={compile:R0,interpret:D0};const{Core:Ha,Schema:dr,Instance:Bi}=j,M0=async(t,e,r)=>{const n=await Ha.compileSchema(t,e),s=await dr.step("minContains",r),i=dr.typeOf(s,"number")?dr.value(s):1,a=await dr.step("maxContains",r),o=dr.typeOf(a,"number")?dr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Dp=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Bi.typeOf(n,"array"))return!0;const a=Bi.reduce((o,c)=>Ha.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},U0=(t,e,r,n)=>Dp(t,e,r,n)&&Bi.reduce((s,i,a)=>Ha.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var B0={compile:M0,interpret:Dp,collectEvaluatedItems:U0};const{Core:Ds,Schema:mr,Instance:Kt}=j,F0=async(t,e,r)=>{const n=await Ds.compileSchema(t,e),s=await mr.step("minContains",r),i=mr.typeOf(s,"number")?mr.value(s):1,a=await mr.step("maxContains",r),o=mr.typeOf(a,"number")?mr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Xa=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Kt.typeOf(n,"array")&&!Kt.typeOf(n,"object"))return!0;const a=Kt.entries(n).reduce((o,[,c])=>Ds.interpretSchema(t,c,s,i)?o+1:o,0);return a>=e&&a<=r},V0=(t,e,r,n)=>Xa(t,e,r,n)&&Kt.typeOf(e,"array")&&Kt.reduce((s,i,a)=>Ds.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e),K0=(t,e,r,n)=>Xa(t,e,r,n)&&Kt.typeOf(e,"object")&&Kt.entries(e).reduce((s,[i,a])=>(Ds.interpretSchema(t.contains,a,r,n)&&s.push(i),s),[],e);var z0={compile:F0,interpret:Xa,collectEvaluatedItems:V0,collectEvaluatedProperties:K0};const{Core:J0,Schema:G0}=j,ui=ke,H0=async(t,e)=>{await ui.pipeline([G0.entries,ui.map(([,r])=>J0.compileSchema(r,e)),ui.all],t)},X0=()=>!0;var W0={compile:H0,interpret:X0};const{Core:Lp,Schema:di,Instance:zc}=j,mi=ke,Y0=(t,e)=>mi.pipeline([di.entries,mi.map(async([r,n])=>[r,di.typeOf(n,"array")?di.value(n):await Lp.compileSchema(n,e)]),mi.all],t),Q0=(t,e,r,n)=>{const s=zc.value(e);return!zc.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):Lp.interpretSchema(a,e,r,n):!0)};var Z0={compile:Y0,interpret:Q0};const{Schema:Jc,Instance:Gc}=j,hi=ke,eS=t=>hi.pipeline([Jc.entries,hi.map(([e,r])=>[e,Jc.value(r)]),hi.all],t),tS=(t,e)=>{const r=Gc.value(e);return!Gc.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var rS={compile:eS,interpret:tS};const{Core:Wa,Schema:nS,Instance:Fi}=j,yi=ke,sS=(t,e)=>yi.pipeline([nS.entries,yi.map(async([r,n])=>[r,await Wa.compileSchema(n,e)]),yi.all],t),iS=(t,e,r,n)=>{const s=Fi.value(e);return!Fi.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||Wa.interpretSchema(a,e,r,n))},aS=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!Fi.has(i,e))return s;const o=Wa.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var oS={compile:sS,interpret:iS,collectEvaluatedProperties:aS};const cS=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,lS=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),fS=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Ya={isObject:cS,escapeRegExp:lS,splitUrl:fS};const{Core:dn,Schema:Qn}=j,{splitUrl:pS}=Ya,uS=async(t,e)=>{const[,r]=pS(Qn.value(t)),n=await Qn.get(Qn.value(t),t);return await dn.compileSchema(n,e),[n.id,r]},dS=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return dn.interpretSchema(s[e],r,n,s);{const i=Qn.getAnchorPointer(n.metaData[t],e);return dn.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},mS=dn.collectEvaluatedProperties,hS=dn.collectEvaluatedItems;var yS={compile:uS,interpret:dS,collectEvaluatedProperties:mS,collectEvaluatedItems:hS};const{Core:Ls,Schema:Hc}=j,{splitUrl:$S}=Ya,gS=async(t,e)=>{const[r,n]=$S(Hc.value(t)),s=await Hc.get(r,t);return await Ls.compileSchema(s,e),n},vS=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Ls.interpretSchema(n[t],e,r,n)},bS=Ls.collectEvaluatedProperties,SS=Ls.collectEvaluatedItems;var wS={compile:gS,interpret:vS,collectEvaluatedProperties:bS,collectEvaluatedItems:SS};const{Core:Qa,Schema:ES}=j,IS=ES.value,OS=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Qa.interpretSchema(n[t],e,r,n)},PS=Qa.collectEvaluatedProperties,kS=Qa.collectEvaluatedItems;var jS={compile:IS,interpret:OS,collectEvaluatedProperties:PS,collectEvaluatedItems:kS};const{Schema:_S,Instance:xS}=j,Mp=Rr,AS=t=>_S.value(t).map(Mp),NS=(t,e)=>t.some(r=>Mp(xS.value(e))===r);var CS={compile:AS,interpret:NS};const{Schema:TS,Instance:Xc}=j,qS=async t=>TS.value(t),RS=(t,e)=>!Xc.typeOf(e,"number")||Xc.value(e)<t;var DS={compile:qS,interpret:RS};const{Schema:LS,Instance:Wc}=j,MS=async t=>LS.value(t),US=(t,e)=>!Wc.typeOf(e,"number")||Wc.value(e)>t;var BS={compile:MS,interpret:US};const{Core:Ms}=j,FS=(t,e)=>Ms.compileSchema(t,e),VS=(t,e,r,n)=>(Ms.interpretSchema(t,e,r,n),!0),KS=(t,e,r,n)=>Ms.collectEvaluatedProperties(t,e,r,n)||[],zS=(t,e,r,n)=>Ms.collectEvaluatedItems(t,e,r,n)||new Set;var JS={compile:FS,interpret:VS,collectEvaluatedProperties:KS,collectEvaluatedItems:zS};const{Core:jr,Schema:Yc}=j,GS=async(t,e,r)=>{if(Yc.has("if",r)){const n=await Yc.step("if",r);return[await jr.compileSchema(n,e),await jr.compileSchema(t,e)]}else return[]},HS=([t,e],r,n,s)=>t===void 0||!Za(t,r,n,s)||jr.interpretSchema(e,r,n,s),Za=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>jr.getKeyword(i).interpret(a,e,r,n))},XS=([t,e],r,n,s)=>t===void 0||!Za(t,r,n,s)?[]:jr.collectEvaluatedProperties(e,r,n,s),WS=([t,e],r,n,s)=>t===void 0||!Za(t,r,n,s)?new Set:jr.collectEvaluatedItems(e,r,n,s);var YS={compile:GS,interpret:HS,collectEvaluatedProperties:XS,collectEvaluatedItems:WS};const{Core:_r,Schema:Qc}=j,QS=async(t,e,r)=>{if(Qc.has("if",r)){const n=await Qc.step("if",r);return[await _r.compileSchema(n,e),await _r.compileSchema(t,e)]}else return[]},ZS=([t,e],r,n,s)=>t===void 0||eo(t,r,n,s)||_r.interpretSchema(e,r,n,s),eo=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>_r.getKeyword(i).interpret(a,e,r,n))},ew=([t,e],r,n,s)=>t===void 0||eo(t,r,n,s)?[]:_r.collectEvaluatedProperties(e,r,n,s),tw=([t,e],r,n,s)=>t===void 0||eo(t,r,n,s)?new Set:_r.collectEvaluatedItems(e,r,n,s);var rw={compile:QS,interpret:ZS,collectEvaluatedProperties:ew,collectEvaluatedItems:tw};const{Core:ps,Schema:Zc,Instance:Zn}=j,nw=async(t,e)=>{if(Zc.typeOf(t,"array")){const r=await Zc.map(n=>ps.compileSchema(n,e),t);return Promise.all(r)}else return ps.compileSchema(t,e)},Up=(t,e,r,n)=>Zn.typeOf(e,"array")?typeof t=="string"?Zn.every(s=>ps.interpretSchema(t,s,r,n),e):Zn.every((s,i)=>!(i in t)||ps.interpretSchema(t[i],s,r,n),e):!0,sw=(t,e,r,n)=>Up(t,e,r,n)&&(typeof t=="string"?new Set(Zn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var iw={compile:nw,interpret:Up,collectEvaluatedItems:sw};const{Core:Bp,Schema:$i,Instance:Vi}=j,aw=async(t,e,r)=>{const n=await $i.step("prefixItems",r);return[$i.typeOf(n,"array")?$i.length(n):0,await Bp.compileSchema(t,e)]},Fp=([t,e],r,n,s)=>Vi.typeOf(r,"array")?Vi.every((i,a)=>a<t||Bp.interpretSchema(e,i,n,s),r):!0,ow=(t,e,r,n)=>Fp(t,e,r,n)&&new Set(Vi.map((s,i)=>i,e));var cw={compile:aw,interpret:Fp,collectEvaluatedItems:ow};const{Schema:lw,Instance:el}=j,fw=t=>lw.value(t),pw=(t,e)=>!el.typeOf(e,"array")||el.length(e)<=t;var uw={compile:fw,interpret:pw};const{Schema:dw,Instance:tl}=j,mw=t=>dw.value(t),hw=(t,e)=>!tl.typeOf(e,"string")||[...tl.value(e)].length<=t;var yw={compile:mw,interpret:hw};const{Schema:$w,Instance:rl}=j,gw=t=>$w.value(t),vw=(t,e)=>!rl.typeOf(e,"object")||rl.keys(e).length<=t;var bw={compile:gw,interpret:vw};const{Schema:gi,Instance:nl}=j,Sw=async(t,e,r)=>{const n=await gi.step("exclusiveMaximum",r),s=gi.value(n);return[gi.value(t),s]},ww=([t,e],r)=>{if(!nl.typeOf(r,"number"))return!0;const n=nl.value(r);return e?n<t:n<=t};var Ew={compile:Sw,interpret:ww};const{Schema:Iw,Instance:sl}=j,Ow=async t=>Iw.value(t),Pw=(t,e)=>!sl.typeOf(e,"number")||sl.value(e)<=t;var kw={compile:Ow,interpret:Pw};const{Schema:jw,Instance:il}=j,_w=t=>jw.value(t),xw=(t,e)=>!il.typeOf(e,"array")||il.length(e)>=t;var Aw={compile:_w,interpret:xw};const{Schema:Nw,Instance:al}=j,Cw=t=>Nw.value(t),Tw=(t,e)=>!al.typeOf(e,"string")||[...al.value(e)].length>=t;var qw={compile:Cw,interpret:Tw};const{Schema:Rw,Instance:ol}=j,Dw=t=>Rw.value(t),Lw=(t,e)=>!ol.typeOf(e,"object")||ol.keys(e).length>=t;var Mw={compile:Dw,interpret:Lw};const{Schema:vi,Instance:cl}=j,Uw=async(t,e,r)=>{const n=await vi.step("exclusiveMinimum",r),s=vi.value(n);return[vi.value(t),s]},Bw=([t,e],r)=>{if(!cl.typeOf(r,"number"))return!0;const n=cl.value(r);return e?n>t:n>=t};var Fw={compile:Uw,interpret:Bw};const{Schema:Vw,Instance:ll}=j,Kw=async t=>Vw.value(t),zw=(t,e)=>!ll.typeOf(e,"number")||ll.value(e)>=t;var Jw={compile:Kw,interpret:zw};const{Schema:Gw,Instance:fl}=j,Hw=t=>Gw.value(t),Xw=(t,e)=>{if(!fl.typeOf(e,"number"))return!0;const r=fl.value(e)%t;return pl(0,r)||pl(t,r)},pl=(t,e)=>Math.abs(t-e)<11920929e-14;var Ww={compile:Hw,interpret:Xw};const{Core:Vp}=j,Yw=Vp.compileSchema,Qw=(t,e,r,n)=>!Vp.interpretSchema(t,e,r,n);var Zw={compile:Yw,interpret:Qw};const{Core:Us,Schema:e2}=j,t2=async(t,e)=>{const r=await e2.map(n=>Us.compileSchema(n,e),t);return Promise.all(r)},r2=(t,e,r,n)=>{let s=0;for(const i of t)if(Us.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},n2=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Us.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},s2=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Us.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var i2={compile:t2,interpret:r2,collectEvaluatedProperties:n2,collectEvaluatedItems:s2};const{Schema:Fn,Instance:ul}=j,a2=async(t,e,r)=>{const n=await Fn.value(t),s=await Fn.step("properties",r),i=Fn.typeOf(s,"object")?Fn.keys(s):[],a=new Set(i);return n.forEach(o=>i.remove(o)),[...a]},o2=(t,e)=>!ul.typeOf(e,"object")||t.every(r=>ul.value(e).hasOwnProperty(r));var c2={compile:a2,interpret:o2};const{Schema:l2,Instance:dl}=j,f2=t=>new RegExp(l2.value(t),"u"),p2=(t,e)=>!dl.typeOf(e,"string")||t.test(dl.value(e));var u2={compile:f2,interpret:p2};const{Core:Kp,Schema:d2,Instance:ml}=j,bi=ke,m2=(t,e)=>bi.pipeline([d2.entries,bi.map(async([r,n])=>[new RegExp(r,"u"),await Kp.compileSchema(n,e)]),bi.all],t),zp=(t,e,r,n)=>!ml.typeOf(e,"object")||t.every(([s,i])=>ml.entries(e).filter(([a])=>s.test(a)).every(([,a])=>Kp.interpretSchema(i,a,r,n))),h2=(t,e,r,n)=>zp(t,e,r,n)&&t.map(([s])=>s);var y2={compile:m2,interpret:zp,collectEvaluatedProperties:h2};const{Core:Jp,Schema:$2,Instance:hl}=j,yl=ke,{escapeRegExp:g2}=Ya,v2=(t,e)=>yl.pipeline([$2.entries,yl.reduce(async(r,[n,s])=>(r[n]=await Jp.compileSchema(s,e),r),Object.create(null))],t),Gp=(t,e,r,n)=>!hl.typeOf(e,"object")||hl.entries(e).filter(([s])=>s in t).every(([s,i])=>Jp.interpretSchema(t[s],i,r,n)),b2=(t,e,r,n)=>Gp(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${g2(s)}$`));var S2={compile:v2,interpret:Gp,collectEvaluatedProperties:b2};const{Core:to,Schema:$l,Instance:on}=j,Vn=ke,w2=async(t,e)=>Vn.pipeline([$l.entries,Vn.reduce(async(r,[n,s])=>(r[n]=await Vn.pipeline([$l.entries,Vn.reduce(async(i,[a,o])=>(i[a]=await to.compileSchema(o,e),i),{})],s),r),{})],t),E2=(t,e,r,n)=>!on.typeOf(e,"object")||Object.entries(t).every(([s,i])=>{const a=on.value(e)[s];return!on.has(s,e)||!(a in i)||to.interpretSchema(i[a],e,r,n)}),I2=(t,e,r,n)=>Object.entries(t).reduce((s,[i,a])=>{const o=on.value(e)[i];if(on.has(i,e)&&o in a){const c=to.collectEvaluatedProperties(a[o],e,r,n);return c!==!1&&s.concat(c)}else return s},[]);var O2={compile:w2,interpret:E2,collectEvaluatedProperties:I2};const{Core:Hp,Instance:Si}=j,P2=(t,e)=>Hp.compileSchema(t,e),k2=(t,e,r,n)=>!Si.typeOf(e,"object")||Si.keys(e).every(s=>Hp.interpretSchema(t,Si.cons(s),r,n));var j2={compile:P2,interpret:k2};const{Core:Bs,Schema:gl}=j,_2=async(t,e)=>{const r=await gl.get(gl.value(t),t);return Bs.compileSchema(r,e)},x2=Bs.interpretSchema,A2=Bs.collectEvaluatedProperties,N2=Bs.collectEvaluatedItems;var C2={compile:_2,interpret:x2,collectEvaluatedProperties:A2,collectEvaluatedItems:N2};const{Schema:T2,Instance:vl}=j,q2=t=>T2.value(t),R2=(t,e)=>!vl.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(vl.value(e),r));var D2={compile:q2,interpret:R2};const{Core:Xp,Schema:L2,Instance:bl}=j,Sl=ke,M2=(t,e)=>Sl.pipeline([L2.map(r=>Xp.compileSchema(r,e)),Sl.all],t),Wp=(t,e,r,n)=>bl.typeOf(e,"array")?bl.every((s,i)=>!(i in t)||Xp.interpretSchema(t[i],s,r,n),e):!0,U2=(t,e,r,n)=>Wp(t,e,r,n)&&new Set(t.map((s,i)=>i));var B2={compile:M2,interpret:Wp,collectEvaluatedItems:U2};const{Schema:F2,Instance:wl}=j,V2=t=>F2.value(t),K2=(t,e)=>typeof t=="string"?wl.typeOf(e,t):t.some(wl.typeOf(e));var z2={compile:V2,interpret:K2};const{Core:Ki,Schema:J2,Instance:es}=j,G2=async(t,e,r)=>[J2.uri(r),await Ki.compileSchema(t,e)],Yp=([t,e],r,n,s)=>{if(!es.typeOf(r,"array"))return!0;const i=Ki.collectEvaluatedItems(t,r,n,s,!0);return i===!1||es.every((a,o)=>i.has(o)||Ki.interpretSchema(e,es.step(o,r),n,s),r)},H2=(t,e,r,n)=>Yp(t,e,r,n)&&new Set(es.map((s,i)=>i,e));var X2={compile:G2,interpret:Yp,collectEvaluatedItems:H2};const{Core:zi,Schema:W2,Instance:El}=j,Y2=async(t,e,r)=>[W2.uri(r),await zi.compileSchema(t,e)],Qp=([t,e],r,n,s)=>{if(!El.typeOf(r,"object"))return!0;const i=zi.collectEvaluatedProperties(t,r,n,s,!0);return!i||El.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>zi.interpretSchema(e,a,n,s))},Q2=(t,e,r,n)=>Qp(t,e,r,n)&&[new RegExp("")];var Z2={compile:Y2,interpret:Qp,collectEvaluatedProperties:Q2};const{Schema:eE,Instance:wi}=j,tE=Rr,rE=t=>eE.value(t),nE=(t,e)=>{if(!wi.typeOf(e,"array")||t===!1)return!0;const r=wi.map(n=>tE(wi.value(n)),e);return new Set(r).size===r.length};var sE={compile:rE,interpret:nE};const{Keywords:Il}=j;var iE={additionalItems:l0,additionalItems6:u0,additionalProperties:h0,additionalProperties6:g0,allOf:I0,anyOf:x0,const:q0,contains:L0,containsMinContainsMaxContains:B0,containsMinContainsMaxContainsFUTURE:z0,definitions:W0,dependencies:Z0,dependentRequired:rS,dependentSchemas:oS,dynamicRef:yS,dynamicRefNEXT:wS,dynamicRefPROPOSED:jS,enum:CS,exclusiveMaximum:DS,exclusiveMinimum:BS,if:JS,then:YS,else:rw,items:iw,items202012:cw,maxItems:uw,maxLength:yw,maxProperties:bw,maximumExclusiveMaximum:Ew,maximum:kw,metaData:Il.metaData,minItems:Aw,minLength:qw,minProperties:Mw,minimumExclusiveMinimum:Fw,minimum:Jw,multipleOf:Ww,not:Zw,oneOf:i2,optional:c2,pattern:u2,patternProperties:y2,properties:S2,propertyDependencies:O2,propertyNames:j2,ref:C2,required:D2,tupleItems:B2,type:z2,unevaluatedItems:X2,unevaluatedProperties:Z2,uniqueItems:sE,validate:Il.validate},aE=`{
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
}`,oE=`{
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
}`,cE=`{
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
}`,lE=`{
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
}`,fE=`{
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
}`,pE=`{
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
}`,uE=`{
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
}`,dE=`{
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
}`,mE=`{
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
}`;const{Core:tr,Schema:Fe}=j,B=iE,hE=aE,yE=oE,$E=cE,gE=lE,vE=fE,bE=pE,SE=uE,wE=dE,EE=mE,Ur="https://json-schema.org/draft/next/schema";Fe.setConfig(Ur,"baseToken","$id");Fe.setConfig(Ur,"embeddedToken","$id");Fe.setConfig(Ur,"anchorToken","$anchor");Fe.setConfig(Ur,"dynamicAnchorToken","$dynamicAnchor");Fe.setConfig(Ur,"vocabularyToken","$vocabulary");Fe.setConfig(Ur,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);Fe.add(JSON.parse(hE));Fe.add(JSON.parse(yE));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:B.validate,$defs:B.definitions,$dynamicRef:B.dynamicRefNEXT,$dref:B.dynamicRefPROPOSED,$ref:B.ref});Fe.add(JSON.parse($E));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:B.additionalProperties6,allOf:B.allOf,anyOf:B.anyOf,contains:B.containsMinContainsMaxContainsFUTURE,dependentSchemas:B.dependentSchemas,if:B.if,then:B.then,else:B.else,items:B.items202012,not:B.not,oneOf:B.oneOf,patternProperties:B.patternProperties,prefixItems:B.tupleItems,properties:B.properties,propertyDependencies:B.propertyDependencies,propertyNames:B.propertyNames});Fe.add(JSON.parse(gE));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:B.const,dependentRequired:B.dependentRequired,enum:B.enum,exclusiveMaximum:B.exclusiveMaximum,exclusiveMinimum:B.exclusiveMinimum,maxItems:B.maxItems,maxLength:B.maxLength,maxProperties:B.maxProperties,maximum:B.maximum,minItems:B.minItems,minLength:B.minLength,minProperties:B.minProperties,minimum:B.minimum,multipleOf:B.multipleOf,optional:B.optional,pattern:B.pattern,required:B.required,type:B.type,uniqueItems:B.uniqueItems});Fe.add(JSON.parse(vE));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:B.metaData,deprecated:B.metaData,description:B.metaData,examples:B.metaData,readOnly:B.metaData,title:B.metaData,writeOnly:B.metaData});Fe.add(JSON.parse(bE));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:B.metaData});Fe.add(JSON.parse(SE));Fe.add(JSON.parse(wE));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:B.metaData,contentMediaType:B.metaData,contentSchema:B.metaData});Fe.add(JSON.parse(EE));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:B.unevaluatedItems,unevaluatedProperties:B.unevaluatedProperties});function IE(t){return{c:xe,l:xe,m:xe,p:xe,i:xe,o:xe,d:xe}}function OE(t){let e,r;return e=new Sp({props:{results:t[5]}}),{c(){tt(e.$$.fragment)},l(n){rt(e.$$.fragment,n)},m(n,s){nt(e,n,s),r=!0},p(n,s){const i={};s&32&&(i.results=n[5]),e.$set(i)},i(n){r||(Le(e.$$.fragment,n),r=!0)},o(n){Me(e.$$.fragment,n),r=!1},d(n){st(e,n)}}}function PE(t){return{c:xe,l:xe,m:xe,p:xe,i:xe,o:xe,d:xe}}function kE(t){let e,r,n,s,i,a,o,c,l,p,u,d,g,O,m,h,v,S,b,k,P,_,R,oe,me,je,w,x,C,q,V,U,W;function le(X){t[11](X)}let te={ns:"schemas",tabs:t[1],newTab:t[7],active:0};t[0]!==void 0&&(te.format=t[0]),m=new Tc({props:te}),_t.push(()=>hr(m,"format",le,t[0])),m.$on("input",t[9]);function z(X){t[12](X)}function Se(X){t[13](X)}function Ge(X){t[14](X)}let Re={ns:"instances",tabs:t[2],newTab:t[8]};t[3]!==void 0&&(Re.selected=t[3]),t[3]!==void 0&&(Re.active=t[3]),t[0]!==void 0&&(Re.format=t[0]),b=new Tc({props:Re}),_t.push(()=>hr(b,"selected",z,t[3])),_t.push(()=>hr(b,"active",Se,t[3])),_t.push(()=>hr(b,"format",Ge,t[0])),b.$on("input",t[10]),me=new Sp({props:{results:t[4]}});let he={ctx:t,current:null,token:null,hasCatch:!1,pending:PE,then:OE,catch:IE,value:18,blocks:[,,,]};return rs(x=t[4],he),q=new H1({}),{c(){e=Ae(),r=J("div"),n=J("button"),s=ie("JSON"),a=J("button"),o=ie("YAML"),l=Ae(),p=J("main"),u=J("h1"),d=ie("Hyperjump - JSON Schema Validator"),g=Ae(),O=J("div"),tt(m.$$.fragment),v=Ae(),S=J("div"),tt(b.$$.fragment),R=Ae(),oe=J("div"),tt(me.$$.fragment),je=Ae(),w=J("div"),he.block.c(),C=Ae(),tt(q.$$.fragment),this.h()},l(X){gu("svelte-14138tz",document.head).forEach(A),e=Ne(X),r=G(X,"DIV",{class:!0});var fe=L(r);n=G(fe,"BUTTON",{class:!0});var pe=L(n);s=ae(pe,"JSON"),pe.forEach(A),a=G(fe,"BUTTON",{class:!0});var Ce=L(a);o=ae(Ce,"YAML"),Ce.forEach(A),fe.forEach(A),l=Ne(X),p=G(X,"MAIN",{class:!0});var Ee=L(p);u=G(Ee,"H1",{class:!0});var Ot=L(u);d=ae(Ot,"Hyperjump - JSON Schema Validator"),Ot.forEach(A),g=Ne(Ee),O=G(Ee,"DIV",{class:!0});var rr=L(O);rt(m.$$.fragment,rr),rr.forEach(A),v=Ne(Ee),S=G(Ee,"DIV",{class:!0});var Br=L(S);rt(b.$$.fragment,Br),Br.forEach(A),R=Ne(Ee),oe=G(Ee,"DIV",{class:!0});var jn=L(oe);rt(me.$$.fragment,jn),jn.forEach(A),je=Ne(Ee),w=G(Ee,"DIV",{class:!0});var _n=L(w);he.block.l(_n),_n.forEach(A),C=Ne(Ee),rt(q.$$.fragment,Ee),Ee.forEach(A),this.h()},h(){document.title="Hyperjump - JSON Schema Validator",N(n,"class",i=Tn(t[0]==="json"?"selected":"")+" svelte-ub4xmj"),N(a,"class",c=Tn(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"),N(r,"class","format svelte-ub4xmj"),N(u,"class","svelte-ub4xmj"),N(O,"class","editor-section svelte-ub4xmj"),N(S,"class","editor-section svelte-ub4xmj"),N(oe,"class","results "+Pl+" svelte-ub4xmj"),N(w,"class","results "+Pl+" svelte-ub4xmj"),N(p,"class","svelte-ub4xmj")},m(X,Z){Q(X,e,Z),Q(X,r,Z),T(r,n),T(n,s),T(r,a),T(a,o),Q(X,l,Z),Q(X,p,Z),T(p,u),T(u,d),T(p,g),T(p,O),nt(m,O,null),T(p,v),T(p,S),nt(b,S,null),T(p,R),T(p,oe),nt(me,oe,null),T(p,je),T(p,w),he.block.m(w,he.anchor=null),he.mount=()=>w,he.anchor=null,T(p,C),nt(q,p,null),V=!0,U||(W=[zt(n,"click",t[6]("json")),zt(a,"click",t[6]("yaml"))],U=!0)},p(X,[Z]){t=X,(!V||Z&1&&i!==(i=Tn(t[0]==="json"?"selected":"")+" svelte-ub4xmj"))&&N(n,"class",i),(!V||Z&1&&c!==(c=Tn(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"))&&N(a,"class",c);const fe={};Z&2&&(fe.tabs=t[1]),!h&&Z&1&&(h=!0,fe.format=t[0],yr(()=>h=!1)),m.$set(fe);const pe={};Z&4&&(pe.tabs=t[2]),!k&&Z&8&&(k=!0,pe.selected=t[3],yr(()=>k=!1)),!P&&Z&8&&(P=!0,pe.active=t[3],yr(()=>P=!1)),!_&&Z&1&&(_=!0,pe.format=t[0],yr(()=>_=!1)),b.$set(pe);const Ce={};Z&16&&(Ce.results=t[4]),me.$set(Ce),he.ctx=t,Z&16&&x!==(x=t[4])&&rs(x,he)||jl(he,t,Z)},i(X){V||(Le(m.$$.fragment,X),Le(b.$$.fragment,X),Le(me.$$.fragment,X),Le(he.block),Le(q.$$.fragment,X),V=!0)},o(X){Me(m.$$.fragment,X),Me(b.$$.fragment,X),Me(me.$$.fragment,X);for(let Z=0;Z<3;Z+=1){const fe=he.blocks[Z];Me(fe)}Me(q.$$.fragment,X),V=!1},d(X){X&&A(e),X&&A(r),X&&A(l),X&&A(p),st(m),st(b),st(me),he.block.d(),he.token=null,he=null,st(q),U=!1,kl(W)}}}const Ol=750,Ei="https://json-schema.org/draft/2020-12/schema",Zr="https://json-schema.hyperjump.io/schema",Pl="solarized-dark";function jE(t,e,r){let n,s,i="json";const a=(P,_)=>_==="yaml"?No.parse(P):JSON.parse(P),o={json:P=>`{
  "$id": "${P}",
  "$schema": "${Ei}"
}`,yaml:P=>`$id: '${P}'
$schema: '${Ei}'`},c=P=>()=>{r(0,i=P),r(1,u=[l("Schema",Zr,!0)]),r(2,d=[p("Instance")]),r(3,g=0)},l=function(){let P=1;return(_=void 0,R=void 0,oe=!1)=>{const me=R||`${Zr}${++P}`;return{label:_||`Schema ${P}`,text:o[i](me),persistent:oe}}}(),p=function(){let P=1;return()=>({label:`Instance ${P++}`,text:""})}();let u=[l("Schema",Zr,!0)],d=[p("Instance")],g=0;const O=function(P,_){let R;return({detail:oe})=>{clearTimeout(R),R=setTimeout(()=>P(oe),_)}},m=O(P=>r(1,u=P),Ol),h=O(P=>r(2,d=P),Ol);we.setMetaOutputFormat(we.BASIC),we.addMediaTypePlugin("application/schema+yaml",{parse:async P=>[No.parse(await P.text(),void 0)],matcher:P=>P.endsWith(".schema.yaml")});function v(P){i=P,r(0,i)}function S(P){g=P,r(3,g)}function b(P){g=P,r(3,g)}function k(P){i=P,r(0,i)}return t.$$.update=()=>{t.$$.dirty&3&&r(4,n=async function(){u.forEach((_,R)=>{const oe=R===0?Zr:"";we.add(a(_.text||"true",i),oe,Ei)});const P=await we.get(Zr);return we.validate(P)}()),t.$$.dirty&29&&r(5,s=async function(){if(d[g].text!==""){let P;try{P=await n}catch{}if(P){const _=P(a(d[g].text,i),we.BASIC);if(_.valid)return _;throw{output:_}}}}())},[i,u,d,g,n,s,c,l,p,m,h,v,S,b,k]}class NE extends qt{constructor(e){super(),Rt(this,e,jE,kE,Dt,{})}}export{NE as default};
