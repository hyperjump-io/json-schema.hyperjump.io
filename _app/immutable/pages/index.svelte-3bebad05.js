import{S as qt,i as Dt,s as Lt,e as J,t as ie,c as G,a as L,h as ae,d as A,b as x,g as Q,J as T,n as ke,l as Ct,k as _e,m as Ae,K as ao,L as Jt,M as ts,N as $l,O as su,P as _t,j as De,Q as oo,R as yr,x as et,y as tt,z as rt,T as $r,r as Re,p as qe,C as nt,U as iu,V as rs,W as gl,F as Fi,X as ut,Y as dt,G as Vi,H as Ki,I as zi,f as Nn,Z as au,_ as Cn}from"../chunks/index-4a192058.js";const Ji=Symbol.for("yaml.alias"),Si=Symbol.for("yaml.document"),Nt=Symbol.for("yaml.map"),vl=Symbol.for("yaml.pair"),Et=Symbol.for("yaml.scalar"),_r=Symbol.for("yaml.seq"),Xe=Symbol.for("yaml.node.type"),Yt=t=>!!t&&typeof t=="object"&&t[Xe]===Ji,dn=t=>!!t&&typeof t=="object"&&t[Xe]===Si,Wt=t=>!!t&&typeof t=="object"&&t[Xe]===Nt,ge=t=>!!t&&typeof t=="object"&&t[Xe]===vl,de=t=>!!t&&typeof t=="object"&&t[Xe]===Et,Ar=t=>!!t&&typeof t=="object"&&t[Xe]===_r;function Se(t){if(t&&typeof t=="object")switch(t[Xe]){case Nt:case _r:return!0}return!1}function Ee(t){if(t&&typeof t=="object")switch(t[Xe]){case Ji:case Nt:case Et:case _r:return!0}return!1}const ou=t=>(de(t)||Se(t))&&!!t.anchor;class Gi{constructor(e){Object.defineProperty(this,Xe,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}}const Ve=Symbol("break visit"),bl=Symbol("skip children"),ht=Symbol("remove node");function Tt(t,e){const r=Sl(e);dn(t)?gr(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):gr(null,t,r,Object.freeze([]))}Tt.BREAK=Ve;Tt.SKIP=bl;Tt.REMOVE=ht;function gr(t,e,r,n){const s=wl(t,e,r,n);if(Ee(s)||ge(s))return Il(t,n,s),gr(t,s,r,n);if(typeof s!="symbol"){if(Se(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=gr(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const i=gr("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=gr("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}async function ps(t,e){const r=Sl(e);dn(t)?await vr(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):await vr(null,t,r,Object.freeze([]))}ps.BREAK=Ve;ps.SKIP=bl;ps.REMOVE=ht;async function vr(t,e,r,n){const s=await wl(t,e,r,n);if(Ee(s)||ge(s))return Il(t,n,s),vr(t,s,r,n);if(typeof s!="symbol"){if(Se(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=await vr(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const i=await vr("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=await vr("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}function Sl(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function wl(t,e,r,n){var s,i,a,o,c;if(typeof r=="function")return r(t,e,n);if(Wt(e))return(s=r.Map)==null?void 0:s.call(r,t,e,n);if(Ar(e))return(i=r.Seq)==null?void 0:i.call(r,t,e,n);if(ge(e))return(a=r.Pair)==null?void 0:a.call(r,t,e,n);if(de(e))return(o=r.Scalar)==null?void 0:o.call(r,t,e,n);if(Yt(e))return(c=r.Alias)==null?void 0:c.call(r,t,e,n)}function Il(t,e,r){const n=e[e.length-1];if(Se(n))n.items[t]=r;else if(ge(n))t==="key"?n.key=r:n.value=r;else if(dn(n))n.contents=r;else{const s=Yt(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const cu={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},lu=t=>t.replace(/[!,[\]{}]/g,e=>cu[e]);class Te{constructor(e,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Te.defaultYaml,e),this.tags=Object.assign({},Te.defaultTags,r)}clone(){const e=new Te(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Te(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Te.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Te.defaultTags);break}return e}add(e,r){this.atNextDocument&&(this.yaml={explicit:Te.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Te.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[i,a]=n;return this.tags[i]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[i]=n;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const a=/^\d+\.\d+$/.test(i);return r(6,`Unsupported YAML version ${i}`,a),!1}}default:return r(0,`Unknown directive ${s}`,!0),!1}}tagName(e,r){if(e==="!")return"!";if(e[0]!=="!")return r(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(r(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&r("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/);s||r(`The ${e} tag has no suffix`);const i=this.tags[n];return i?i+decodeURIComponent(s):n==="!"?e:(r(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[r,n]of Object.entries(this.tags))if(e.startsWith(n))return r+lu(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&Ee(e.contents)){const i={};Tt(e.contents,(a,o)=>{Ee(o)&&o.tag&&(i[o.tag]=!0)}),s=Object.keys(i)}else s=[];for(const[i,a]of n)i==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&r.push(`%TAG ${i} ${a}`);return r.join(`
`)}}Te.defaultYaml={explicit:!1,version:"1.2"};Te.defaultTags={"!!":"tag:yaml.org,2002:"};function El(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(r)}return!0}function Ol(t){const e=new Set;return Tt(t,{Value(r,n){n.anchor&&e.add(n.anchor)}}),e}function Pl(t,e){for(let r=1;;++r){const n=`${t}${r}`;if(!e.has(n))return n}}function fu(t,e){const r=[],n=new Map;let s=null;return{onAnchor:i=>{r.push(i),s||(s=Ol(t));const a=Pl(e,s);return s.add(a),a},setAnchors:()=>{for(const i of r){const a=n.get(i);if(typeof a=="object"&&a.anchor&&(de(a.node)||Se(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=i,o}}},sourceObjects:n}}class us extends Gi{constructor(e){super(Ji),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let r;return Tt(e,{Node:(n,s)=>{if(s===this)return Tt.BREAK;s.anchor===this.source&&(r=s)}}),r}toJSON(e,r){if(!r)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:i}=r,a=this.resolve(s);if(!a){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}const o=n.get(a);if(!o||o.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Kn(s,a,n)),o.count*o.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return o.res}toString(e,r,n){const s=`*${this.source}`;if(e){if(El(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${s} `}return s}}function Kn(t,e,r){if(Yt(e)){const n=e.resolve(t),s=r&&n&&r.get(n);return s?s.count*s.aliasCount:0}else if(Se(e)){let n=0;for(const s of e.items){const i=Kn(t,s,r);i>n&&(n=i)}return n}else if(ge(e)){const n=Kn(t,e.key,r),s=Kn(t,e.value,r);return Math.max(n,s)}return 1}function yt(t,e,r){if(Array.isArray(t))return t.map((n,s)=>yt(n,String(s),r));if(t&&typeof t.toJSON=="function"){if(!r||!ou(t))return t.toJSON(e,r);const n={aliasCount:0,count:1,res:void 0};r.anchors.set(t,n),r.onCreate=i=>{n.res=i,delete r.onCreate};const s=t.toJSON(e,r);return r.onCreate&&r.onCreate(s),s}return typeof t=="bigint"&&!(r!=null&&r.keep)?Number(t):t}const kl=t=>!t||typeof t!="function"&&typeof t!="object";class W extends Gi{constructor(e){super(Et),this.value=e}toJSON(e,r){return r!=null&&r.keep?this.value:yt(this.value,e,r)}toString(){return String(this.value)}}W.BLOCK_FOLDED="BLOCK_FOLDED";W.BLOCK_LITERAL="BLOCK_LITERAL";W.PLAIN="PLAIN";W.QUOTE_DOUBLE="QUOTE_DOUBLE";W.QUOTE_SINGLE="QUOTE_SINGLE";const pu="tag:yaml.org,2002:";function uu(t,e,r){var n;if(e){const s=r.filter(a=>a.tag===e),i=(n=s.find(a=>!a.format))!=null?n:s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return r.find(s=>{var i;return((i=s.identify)==null?void 0:i.call(s,t))&&!s.format})}function on(t,e,r){var y,m;if(dn(t)&&(t=t.contents),Ee(t))return t;if(ge(t)){const $=(m=(y=r.schema[Nt]).createNode)==null?void 0:m.call(y,r.schema,null,r);return $.items.push(t),$}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt=="function"&&t instanceof BigInt)&&(t=t.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:i,schema:a,sourceObjects:o}=r;let c;if(n&&t&&typeof t=="object"){if(c=o.get(t),c)return c.anchor||(c.anchor=s(t)),new us(c.anchor);c={anchor:null,node:null},o.set(t,c)}e!=null&&e.startsWith("!!")&&(e=pu+e.slice(2));let l=uu(t,e,a.tags);if(!l){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){const $=new W(t);return c&&(c.node=$),$}l=t instanceof Map?a[Nt]:Symbol.iterator in Object(t)?a[_r]:a[Nt]}i&&(i(l),delete r.onTagObj);const p=l!=null&&l.createNode?l.createNode(r.schema,t,r):new W(t);return e&&(p.tag=e),c&&(c.node=p),p}function ns(t,e,r){let n=r;for(let s=e.length-1;s>=0;--s){const i=e[s];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const a=[];a[i]=n,n=a}else n=new Map([[i,n]])}return on(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}const en=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class ds extends Gi{constructor(e,r){super(e),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(e){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(r.schema=e),r.items=r.items.map(n=>Ee(n)||ge(n)?n.clone(e):n),this.range&&(r.range=this.range.slice()),r}addIn(e,r){if(en(e))this.add(r);else{const[n,...s]=e,i=this.get(n,!0);if(Se(i))i.addIn(s,r);else if(i===void 0&&this.schema)this.set(n,ns(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[r,...n]=e;if(n.length===0)return this.delete(r);const s=this.get(r,!0);if(Se(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}getIn(e,r){const[n,...s]=e,i=this.get(n,!0);return s.length===0?!r&&de(i)?i.value:i:Se(i)?i.getIn(s,r):void 0}hasAllNullValues(e){return this.items.every(r=>{if(!ge(r))return!1;const n=r.value;return n==null||e&&de(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[r,...n]=e;if(n.length===0)return this.has(r);const s=this.get(r,!0);return Se(s)?s.hasIn(n):!1}setIn(e,r){const[n,...s]=e;if(s.length===0)this.set(n,r);else{const i=this.get(n,!0);if(Se(i))i.setIn(s,r);else if(i===void 0&&this.schema)this.set(n,ns(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}ds.maxFlowStringSingleLineLength=60;const du=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function wt(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}const At=(t,e,r)=>t.endsWith(`
`)?wt(r,e):r.includes(`
`)?`
`+wt(r,e):(t.endsWith(" ")?"":" ")+r,jl="flow",wi="block",zn="quoted";function ms(t,e,r="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:i=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return t;const c=Math.max(1+i,1+s-e.length);if(t.length<=c)return t;const l=[],p={};let y=s-e.length;typeof n=="number"&&(n>s-Math.max(2,i)?l.push(0):y=s-n);let m,$,P=!1,u=-1,d=-1,v=-1;r===wi&&(u=co(t,u),u!==-1&&(y=u+c));for(let b;b=t[u+=1];){if(r===zn&&b==="\\"){switch(d=u,t[u+1]){case"x":u+=3;break;case"u":u+=5;break;case"U":u+=9;break;default:u+=1}v=u}if(b===`
`)r===wi&&(u=co(t,u)),y=u+c,m=void 0;else{if(b===" "&&$&&$!==" "&&$!==`
`&&$!=="	"){const j=t[u+1];j&&j!==" "&&j!==`
`&&j!=="	"&&(m=u)}if(u>=y)if(m)l.push(m),y=m+c,m=void 0;else if(r===zn){for(;$===" "||$==="	";)$=b,b=t[u+=1],P=!0;const j=u>v+1?u-2:d-1;if(p[j])return t;l.push(j),p[j]=!0,y=j+c,m=void 0}else P=!0}$=b}if(P&&o&&o(),l.length===0)return t;a&&a();let E=t.slice(0,l[0]);for(let b=0;b<l.length;++b){const j=l[b],S=l[b+1]||t.length;j===0?E=`
${e}${t.slice(0,S)}`:(r===zn&&p[j]&&(E+=`${t[j]}\\`),E+=`
${e}${t.slice(j+1,S)}`)}return E}function co(t,e){let r=t[e+1];for(;r===" "||r==="	";){do r=t[e+=1];while(r&&r!==`
`);r=t[e+1]}return e}const hs=t=>({indentAtStart:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),ys=t=>/^(%|---|\.\.\.)/m.test(t);function mu(t,e,r){if(!e||e<0)return!1;const n=e-r,s=t.length;if(s<=n)return!1;for(let i=0,a=0;i<s;++i)if(t[i]===`
`){if(i-a>n)return!0;if(a=i+1,s-a<=n)return!1}return!0}function nn(t,e){const r=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return r;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(ys(t)?"  ":"");let a="",o=0;for(let c=0,l=r[c];l;l=r[++c])if(l===" "&&r[c+1]==="\\"&&r[c+2]==="n"&&(a+=r.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(r[c+1]){case"u":{a+=r.slice(o,c);const p=r.substr(c+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=r.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||r[c+2]==='"'||r.length<s)c+=1;else{for(a+=r.slice(o,c)+`

`;r[c+2]==="\\"&&r[c+3]==="n"&&r[c+4]!=='"';)a+=`
`,c+=2;a+=i,r[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+r.slice(o):r,n?a:ms(a,i,zn,hs(e))}function Ii(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return nn(t,e);const r=e.indent||(ys(t)?"  ":""),n="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return e.implicitKey?n:ms(n,r,jl,hs(e))}function sn(t,e){const{singleQuote:r}=e.options;let n;if(r===!1)n=nn;else{const s=t.includes('"'),i=t.includes("'");s&&!i?n=Ii:i&&!s?n=nn:n=r?Ii:nn}return n(t,e)}function Jn({comment:t,type:e,value:r},n,s,i){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(r)||/^\s*$/.test(r))return sn(r,n);const l=n.indent||(n.forceBlockIndent||ys(r)?"  ":""),p=a==="literal"?!0:a==="folded"||e===W.BLOCK_FOLDED?!1:e===W.BLOCK_LITERAL?!0:!mu(r,c,l.length);if(!r)return p?`|
`:`>
`;let y,m;for(m=r.length;m>0;--m){const _=r[m-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let $=r.substring(m);const P=$.indexOf(`
`);P===-1?y="-":r===$||P!==$.length-1?(y="+",i&&i()):y="",$&&(r=r.slice(0,-$.length),$[$.length-1]===`
`&&($=$.slice(0,-1)),$=$.replace(/\n+(?!\n|$)/g,`$&${l}`));let u=!1,d,v=-1;for(d=0;d<r.length;++d){const _=r[d];if(_===" ")u=!0;else if(_===`
`)v=d;else break}let E=r.substring(0,v<d?v+1:d);E&&(r=r.substring(E.length),E=E.replace(/\n+/g,`$&${l}`));let j=(p?"|":">")+(u?l?"2":"1":"")+y;if(t&&(j+=" "+o(t.replace(/ ?[\r\n]+/g," ")),s&&s()),p)return r=r.replace(/\n+/g,`$&${l}`),`${j}
${l}${E}${r}${$}`;r=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);const S=ms(`${E}${r}${$}`,l,wi,hs(n));return`${j}
${l}${S}`}function hu(t,e,r,n){const{type:s,value:i}=t,{actualString:a,implicitKey:o,indent:c,inFlow:l}=e;if(o&&/[\n[\]{},]/.test(i)||l&&/[[\]{},]/.test(i))return sn(i,e);if(!i||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return o||l||!i.includes(`
`)?sn(i,e):Jn(t,e,r,n);if(!o&&!l&&s!==W.PLAIN&&i.includes(`
`))return Jn(t,e,r,n);if(c===""&&ys(i))return e.forceBlockIndent=!0,Jn(t,e,r,n);const p=i.replace(/\n+/g,`$&
${c}`);if(a){const y=P=>{var u;return P.default&&P.tag!=="tag:yaml.org,2002:str"&&((u=P.test)==null?void 0:u.test(p))},{compat:m,tags:$}=e.doc.schema;if($.some(y)||(m==null?void 0:m.some(y)))return sn(i,e)}return o?p:ms(p,c,jl,hs(e))}function mn(t,e,r,n){const{implicitKey:s,inFlow:i}=e,a=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:o}=t;o!==W.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=W.QUOTE_DOUBLE);const c=p=>{switch(p){case W.BLOCK_FOLDED:case W.BLOCK_LITERAL:return s||i?sn(a.value,e):Jn(a,e,r,n);case W.QUOTE_DOUBLE:return nn(a.value,e);case W.QUOTE_SINGLE:return Ii(a.value,e);case W.PLAIN:return hu(a,e,r,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:p,defaultStringType:y}=e.options,m=s&&p||y;if(l=c(m),l===null)throw new Error(`Unsupported default string type ${m}`)}return l}function _l(t,e){const r=Object.assign({blockQuote:!0,commentString:du,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e);let n;switch(r.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:t,indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:n,options:r}}function yu(t,e){var s,i,a,o;if(e.tag){const c=t.filter(l=>l.tag===e.tag);if(c.length>0)return(s=c.find(l=>l.format===e.format))!=null?s:c[0]}let r,n;if(de(e)){n=e.value;const c=t.filter(l=>{var p;return(p=l.identify)==null?void 0:p.call(l,n)});r=(i=c.find(l=>l.format===e.format))!=null?i:c.find(l=>!l.format)}else n=e,r=t.find(c=>c.nodeClass&&n instanceof c.nodeClass);if(!r){const c=(o=(a=n==null?void 0:n.constructor)==null?void 0:a.name)!=null?o:typeof n;throw new Error(`Tag not resolved for ${c} value`)}return r}function $u(t,e,{anchors:r,doc:n}){if(!n.directives)return"";const s=[],i=(de(t)||Se(t))&&t.anchor;i&&El(i)&&(r.add(i),s.push(`&${i}`));const a=t.tag?t.tag:e.default?null:e.tag;return a&&s.push(n.directives.tagString(a)),s.join(" ")}function Gt(t,e,r,n){var c,l;if(ge(t))return t.toString(e,r,n);if(Yt(t)){if(e.doc.directives)return t.toString(e);if((c=e.resolvedAliases)!=null&&c.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let s;const i=Ee(t)?t:e.doc.createNode(t,{onTagObj:p=>s=p});s||(s=yu(e.doc.schema.tags,i));const a=$u(i,s,e);a.length>0&&(e.indentAtStart=((l=e.indentAtStart)!=null?l:0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(i,e,r,n):de(i)?mn(i,e,r,n):i.toString(e,r,n);return a?de(i)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function gu({key:t,value:e},r,n,s){const{allNullValues:i,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:p,simpleKeys:y}}=r;let m=Ee(t)&&t.comment||null;if(y){if(m)throw new Error("With simple keys, key nodes cannot have comments");if(Se(t)){const _="With simple keys, collection cannot be used as a key value";throw new Error(_)}}let $=!y&&(!t||m&&e==null&&!r.inFlow||Se(t)||(de(t)?t.type===W.BLOCK_FOLDED||t.type===W.BLOCK_LITERAL:typeof t=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!$&&(y||!i),indent:o+c});let P=!1,u=!1,d=Gt(t,r,()=>P=!0,()=>u=!0);if(!$&&!r.inFlow&&d.length>1024){if(y)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");$=!0}if(r.inFlow){if(i||e==null)return P&&n&&n(),d===""?"?":$?`? ${d}`:d}else if(i&&!y||e==null&&$)return d=`? ${d}`,m&&!P?d+=At(d,r.indent,l(m)):u&&s&&s(),d;P&&(m=null),$?(m&&(d+=At(d,r.indent,l(m))),d=`? ${d}
${o}:`):(d=`${d}:`,m&&(d+=At(d,r.indent,l(m))));let v="",E=null;if(Ee(e)){if(e.spaceBefore&&(v=`
`),e.commentBefore){const _=l(e.commentBefore);v+=`
${wt(_,r.indent)}`}E=e.comment}else e&&typeof e=="object"&&(e=a.createNode(e));r.implicitKey=!1,!$&&!m&&de(e)&&(r.indentAtStart=d.length+1),u=!1,!p&&c.length>=2&&!r.inFlow&&!$&&Ar(e)&&!e.flow&&!e.tag&&!e.anchor&&(r.indent=r.indent.substr(2));let b=!1;const j=Gt(e,r,()=>b=!0,()=>u=!0);let S=" ";return v||m?j===""&&!r.inFlow?S=v===`
`?`

`:v:S=`${v}
${r.indent}`:!$&&Se(e)?(!(j[0]==="["||j[0]==="{")||j.includes(`
`))&&(S=`
${r.indent}`):(j===""||j[0]===`
`)&&(S=""),d+=S+j,r.inFlow?b&&n&&n():E&&!b?d+=At(d,r.indent,l(E)):u&&s&&s(),d}function Al(t,e){(t==="debug"||t==="warn")&&(typeof process<"u"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const lo="<<";function xl(t,e,{key:r,value:n}){if((t==null?void 0:t.doc.schema.merge)&&vu(r))if(n=Yt(n)?n.resolve(t.doc):n,Ar(n))for(const s of n.items)Bs(t,e,s);else if(Array.isArray(n))for(const s of n)Bs(t,e,s);else Bs(t,e,n);else{const s=yt(r,"",t);if(e instanceof Map)e.set(s,yt(n,s,t));else if(e instanceof Set)e.add(s);else{const i=bu(r,s,t),a=yt(n,i,t);i in e?Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[i]=a}}return e}const vu=t=>t===lo||de(t)&&t.value===lo&&(!t.type||t.type===W.PLAIN);function Bs(t,e,r){const n=t&&Yt(r)?r.resolve(t.doc):r;if(!Wt(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,t,Map);for(const[i,a]of s)e instanceof Map?e.has(i)||e.set(i,a):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function bu(t,e,r){if(e===null)return"";if(typeof e!="object")return String(e);if(Ee(t)&&r&&r.doc){const n=_l(r.doc,{});n.anchors=new Set;for(const i of r.anchors.keys())n.anchors.add(i.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=t.toString(n);if(!r.mapKeyWarned){let i=JSON.stringify(s);i.length>40&&(i=i.substring(0,36)+'..."'),Al(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return s}return JSON.stringify(e)}function Hi(t,e,r){const n=on(t,void 0,r),s=on(e,void 0,r);return new Ce(n,s)}class Ce{constructor(e,r=null){Object.defineProperty(this,Xe,{value:vl}),this.key=e,this.value=r}clone(e){let{key:r,value:n}=this;return Ee(r)&&(r=r.clone(e)),Ee(n)&&(n=n.clone(e)),new Ce(r,n)}toJSON(e,r){const n=r!=null&&r.mapAsMap?new Map:{};return xl(r,n,this)}toString(e,r,n){return e!=null&&e.doc?gu(this,e,r,n):JSON.stringify(this)}}function Nl(t,e,r){var i;return(((i=e.inFlow)!=null?i:t.flow)?wu:Su)(t,e,r)}function Su({comment:t,items:e},r,{blockItemPrefix:n,flowChars:s,itemIndent:i,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=r,p=Object.assign({},r,{indent:i,type:null});let y=!1;const m=[];for(let P=0;P<e.length;++P){const u=e[P];let d=null;if(Ee(u))!y&&u.spaceBefore&&m.push(""),ss(r,m,u.commentBefore,y),u.comment&&(d=u.comment);else if(ge(u)){const E=Ee(u.key)?u.key:null;E&&(!y&&E.spaceBefore&&m.push(""),ss(r,m,E.commentBefore,y))}y=!1;let v=Gt(u,p,()=>d=null,()=>y=!0);d&&(v+=At(v,i,l(d))),y&&d&&(y=!1),m.push(n+v)}let $;if(m.length===0)$=s.start+s.end;else{$=m[0];for(let P=1;P<m.length;++P){const u=m[P];$+=u?`
${c}${u}`:`
`}}return t?($+=`
`+wt(l(t),c),o&&o()):y&&a&&a(),$}function wu({comment:t,items:e},r,{flowChars:n,itemIndent:s,onComment:i}){const{indent:a,indentStep:o,options:{commentString:c}}=r;s+=o;const l=Object.assign({},r,{indent:s,inFlow:!0,type:null});let p=!1,y=0;const m=[];for(let d=0;d<e.length;++d){const v=e[d];let E=null;if(Ee(v))v.spaceBefore&&m.push(""),ss(r,m,v.commentBefore,!1),v.comment&&(E=v.comment);else if(ge(v)){const j=Ee(v.key)?v.key:null;j&&(j.spaceBefore&&m.push(""),ss(r,m,j.commentBefore,!1),j.comment&&(p=!0));const S=Ee(v.value)?v.value:null;S?(S.comment&&(E=S.comment),S.commentBefore&&(p=!0)):v.value==null&&j&&j.comment&&(E=j.comment)}E&&(p=!0);let b=Gt(v,l,()=>E=null);d<e.length-1&&(b+=","),E&&(b+=At(b,s,c(E))),!p&&(m.length>y||b.includes(`
`))&&(p=!0),m.push(b),y=m.length}let $;const{start:P,end:u}=n;if(m.length===0)$=P+u;else if(p||(p=m.reduce((v,E)=>v+E.length+2,2)>ds.maxFlowStringSingleLineLength),p){$=P;for(const d of m)$+=d?`
${o}${a}${d}`:`
`;$+=`
${a}${u}`}else $=`${P} ${m.join(" ")} ${u}`;return t&&($+=At($,c(t),a),i&&i()),$}function ss({indent:t,options:{commentString:e}},r,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const i=wt(e(n),t);r.push(i.trimStart())}}function Ft(t,e){const r=de(e)?e.value:e;for(const n of t)if(ge(n)&&(n.key===e||n.key===r||de(n.key)&&n.key.value===r))return n}class He extends ds{constructor(e){super(Nt,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(e,r){var a;let n;ge(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Ce(e,e==null?void 0:e.value):n=new Ce(e.key,e.value);const s=Ft(this.items,n.key),i=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!r)throw new Error(`Key ${n.key} already set`);de(s.value)&&kl(n.value)?s.value.value=n.value:s.value=n.value}else if(i){const o=this.items.findIndex(c=>i(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const r=Ft(this.items,e);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(e,r){var i;const n=Ft(this.items,e),s=n==null?void 0:n.value;return(i=!r&&de(s)?s.value:s)!=null?i:void 0}has(e){return!!Ft(this.items,e)}set(e,r){this.add(new Ce(e,r),!0)}toJSON(e,r,n){const s=n?new n:r!=null&&r.mapAsMap?new Map:{};r!=null&&r.onCreate&&r.onCreate(s);for(const i of this.items)xl(r,s,i);return s}toString(e,r,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!ge(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),Nl(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:r})}}function Iu(t,e,r){const{keepUndefined:n,replacer:s}=r,i=new He(t),a=(o,c)=>{if(typeof s=="function")c=s.call(e,o,c);else if(Array.isArray(s)&&!s.includes(o))return;(c!==void 0||n)&&i.items.push(Hi(o,c,r))};if(e instanceof Map)for(const[o,c]of e)a(o,c);else if(e&&typeof e=="object")for(const o of Object.keys(e))a(o,e[o]);return typeof t.sortMapEntries=="function"&&i.items.sort(t.sortMapEntries),i}const xr={collection:"map",createNode:Iu,default:!0,nodeClass:He,tag:"tag:yaml.org,2002:map",resolve(t,e){return Wt(t)||e("Expected a mapping for this tag"),t}};class Qt extends ds{constructor(e){super(_r,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(e){this.items.push(e)}delete(e){const r=Tn(e);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(e,r){const n=Tn(e);if(typeof n!="number")return;const s=this.items[n];return!r&&de(s)?s.value:s}has(e){const r=Tn(e);return typeof r=="number"&&r<this.items.length}set(e,r){const n=Tn(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];de(s)&&kl(r)?s.value=r:this.items[n]=r}toJSON(e,r){const n=[];r!=null&&r.onCreate&&r.onCreate(n);let s=0;for(const i of this.items)n.push(yt(i,String(s++),r));return n}toString(e,r,n){return e?Nl(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:r}):JSON.stringify(this)}}function Tn(t){let e=de(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Eu(t,e,r){const{replacer:n}=r,s=new Qt(t);if(e&&Symbol.iterator in Object(e)){let i=0;for(let a of e){if(typeof n=="function"){const o=e instanceof Set?a:String(i++);a=n.call(e,o,a)}s.items.push(on(a,void 0,r))}}return s}const Nr={collection:"seq",createNode:Eu,default:!0,nodeClass:Qt,tag:"tag:yaml.org,2002:seq",resolve(t,e){return Ar(t)||e("Expected a sequence for this tag"),t}},$s={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify(t,e,r,n){return e=Object.assign({actualString:!0},e),mn(t,e,r,n)}},gs={identify:t=>t==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new W(null),stringify:({source:t},e)=>typeof t=="string"&&gs.test.test(t)?t:e.options.nullStr},Xi={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new W(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},r){if(t&&Xi.test.test(t)){const n=t[0]==="t"||t[0]==="T";if(e===n)return t}return e?r.options.trueStr:r.options.falseStr}};function st({format:t,minFractionDigits:e,tag:r,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let i=JSON.stringify(n);if(!t&&e&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let a=i.indexOf(".");a<0&&(a=i.length,i+=".");let o=e-(i.length-a-1);for(;o-- >0;)i+="0"}return i}const Cl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:st},Tl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():st(t)}},Rl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const e=new W(parseFloat(t)),r=t.indexOf(".");return r!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-r-1),e},stringify:st},vs=t=>typeof t=="bigint"||Number.isInteger(t),Yi=(t,e,r,{intAsBigInt:n})=>n?BigInt(t):parseInt(t.substring(e),r);function ql(t,e,r){const{value:n}=t;return vs(n)&&n>=0?r+n.toString(e):st(t)}const Dl={identify:t=>vs(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,r)=>Yi(t,2,8,r),stringify:t=>ql(t,8,"0o")},Ll={identify:vs,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,r)=>Yi(t,0,10,r),stringify:st},Ml={identify:t=>vs(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,r)=>Yi(t,2,16,r),stringify:t=>ql(t,16,"0x")},Ou=[xr,Nr,$s,gs,Xi,Dl,Ll,Ml,Cl,Tl,Rl];function fo(t){return typeof t=="bigint"||Number.isInteger(t)}const Rn=({value:t})=>JSON.stringify(t),Pu=[{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:Rn},{identify:t=>t==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Rn},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:t=>t==="true",stringify:Rn},{identify:fo,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:r})=>r?BigInt(t):parseInt(t,10),stringify:({value:t})=>fo(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:Rn}],ku={default:!0,tag:"",test:/^/,resolve(t,e){return e(`Unresolved plain scalar ${JSON.stringify(t)}`),t}},ju=[xr,Nr].concat(Pu,ku),Wi={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof Buffer=="function")return Buffer.from(t,"base64");if(typeof atob=="function"){const r=atob(t.replace(/[\n\r]/g,"")),n=new Uint8Array(r.length);for(let s=0;s<r.length;++s)n[s]=r.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:r},n,s,i){const a=r;let o;if(typeof Buffer=="function")o=a instanceof Buffer?a.toString("base64"):Buffer.from(a.buffer).toString("base64");else if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=W.BLOCK_LITERAL),e!==W.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),p=new Array(l);for(let y=0,m=0;y<l;++y,m+=c)p[y]=o.substr(m,c);o=p.join(e===W.BLOCK_LITERAL?`
`:" ")}return mn({comment:t,type:e,value:o},n,s,i)}};function Bl(t,e){var r;if(Ar(t))for(let n=0;n<t.items.length;++n){let s=t.items[n];if(!ge(s)){if(Wt(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new Ce(new W(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const a=(r=i.value)!=null?r:i.key;a.comment=a.comment?`${s.comment}
${a.comment}`:s.comment}s=i}t.items[n]=ge(s)?s:new Ce(s)}}else e("Expected a sequence for this tag");return t}function Ul(t,e,r){const{replacer:n}=r,s=new Qt(t);s.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(i++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected { key: value } tuple: ${a}`)}else o=a;s.items.push(Hi(o,c,r))}return s}const Qi={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Bl,createNode:Ul};class Sr extends Qt{constructor(){super(),this.add=He.prototype.add.bind(this),this.delete=He.prototype.delete.bind(this),this.get=He.prototype.get.bind(this),this.has=He.prototype.has.bind(this),this.set=He.prototype.set.bind(this),this.tag=Sr.tag}toJSON(e,r){if(!r)return super.toJSON(e);const n=new Map;r!=null&&r.onCreate&&r.onCreate(n);for(const s of this.items){let i,a;if(ge(s)?(i=yt(s.key,"",r),a=yt(s.value,i,r)):i=yt(s,"",r),n.has(i))throw new Error("Ordered maps must not include duplicate keys");n.set(i,a)}return n}}Sr.tag="tag:yaml.org,2002:omap";const Zi={collection:"seq",identify:t=>t instanceof Map,nodeClass:Sr,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){const r=Bl(t,e),n=[];for(const{key:s}of r.items)de(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new Sr,r)},createNode(t,e,r){const n=Ul(t,e,r),s=new Sr;return s.items=n.items,s}};function Fl({value:t,source:e},r){return e&&(t?Vl:Kl).test.test(e)?e:t?r.options.trueStr:r.options.falseStr}const Vl={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new W(!0),stringify:Fl},Kl={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new W(!1),stringify:Fl},_u={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:st},Au={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():st(t)}},xu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const e=new W(parseFloat(t.replace(/_/g,""))),r=t.indexOf(".");if(r!==-1){const n=t.substring(r+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:st},hn=t=>typeof t=="bigint"||Number.isInteger(t);function bs(t,e,r,{intAsBigInt:n}){const s=t[0];if((s==="-"||s==="+")&&(e+=1),t=t.substring(e).replace(/_/g,""),n){switch(r){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`;break}const a=BigInt(t);return s==="-"?BigInt(-1)*a:a}const i=parseInt(t,r);return s==="-"?-1*i:i}function ea(t,e,r){const{value:n}=t;if(hn(n)){const s=n.toString(e);return n<0?"-"+r+s.substr(1):r+s}return st(t)}const Nu={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,r)=>bs(t,2,2,r),stringify:t=>ea(t,2,"0b")},Cu={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,r)=>bs(t,1,8,r),stringify:t=>ea(t,8,"0")},Tu={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,r)=>bs(t,0,10,r),stringify:st},Ru={identify:hn,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,r)=>bs(t,2,16,r),stringify:t=>ea(t,16,"0x")};class wr extends He{constructor(e){super(e),this.tag=wr.tag}add(e){let r;ge(e)?r=e:typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?r=new Ce(e.key,null):r=new Ce(e,null),Ft(this.items,r.key)||this.items.push(r)}get(e,r){const n=Ft(this.items,e);return!r&&ge(n)?de(n.key)?n.key.value:n.key:n}set(e,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const n=Ft(this.items,e);n&&!r?this.items.splice(this.items.indexOf(n),1):!n&&r&&this.items.push(new Ce(e))}toJSON(e,r){return super.toJSON(e,r,Set)}toString(e,r,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),r,n);throw new Error("Set items must all have null values")}}wr.tag="tag:yaml.org,2002:set";const ta={collection:"map",identify:t=>t instanceof Set,nodeClass:wr,default:!1,tag:"tag:yaml.org,2002:set",resolve(t,e){if(Wt(t)){if(t.hasAllNullValues(!0))return Object.assign(new wr,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t},createNode(t,e,r){const{replacer:n}=r,s=new wr(t);if(e&&Symbol.iterator in Object(e))for(let i of e)typeof n=="function"&&(i=n.call(e,i,i)),s.items.push(Hi(i,null,r));return s}};function ra(t,e){const r=t[0],n=r==="-"||r==="+"?t.substring(1):t,s=a=>e?BigInt(a):Number(a),i=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return r==="-"?s(-1)*i:i}function zl(t){let{value:e}=t,r=a=>a;if(typeof e=="bigint")r=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return st(t);let n="";e<0&&(n="-",e*=r(-1));const s=r(60),i=[e%s];return e<60?i.unshift(0):(e=(e-i[0])/s,i.unshift(e%s),e>=60&&(e=(e-i[0])/s,i.unshift(e))),n+i.map(a=>a<10?"0"+String(a):String(a)).join(":").replace(/000000\d*$/,"")}const Jl={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:r})=>ra(t,r),stringify:zl},Gl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>ra(t,!1),stringify:zl},Ss={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const e=t.match(Ss.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,n,s,i,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(r,n-1,s,i||0,a||0,o||0,c);const p=e[8];if(p&&p!=="Z"){let y=ra(p,!1);Math.abs(y)<30&&(y*=60),l-=6e4*y}return new Date(l)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},po=[xr,Nr,$s,gs,Vl,Kl,Nu,Cu,Tu,Ru,_u,Au,xu,Wi,Zi,Qi,ta,Jl,Gl,Ss],uo=new Map([["core",Ou],["failsafe",[xr,Nr,$s]],["json",ju],["yaml11",po],["yaml-1.1",po]]),mo={binary:Wi,bool:Xi,float:Rl,floatExp:Tl,floatNaN:Cl,floatTime:Gl,int:Ll,intHex:Ml,intOct:Dl,intTime:Jl,map:xr,null:gs,omap:Zi,pairs:Qi,seq:Nr,set:ta,timestamp:Ss},qu={"tag:yaml.org,2002:binary":Wi,"tag:yaml.org,2002:omap":Zi,"tag:yaml.org,2002:pairs":Qi,"tag:yaml.org,2002:set":ta,"tag:yaml.org,2002:timestamp":Ss};function Us(t,e){let r=uo.get(e);if(!r)if(Array.isArray(t))r=[];else{const n=Array.from(uo.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${n} or define customTags array`)}if(Array.isArray(t))for(const n of t)r=r.concat(n);else typeof t=="function"&&(r=t(r.slice()));return r.map(n=>{if(typeof n!="string")return n;const s=mo[n];if(s)return s;const i=Object.keys(mo).map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown custom tag "${n}"; use one of ${i}`)})}const Du=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0;class ws{constructor({compat:e,customTags:r,merge:n,resolveKnownTags:s,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Us(e,"compat"):e?Us(null,e):null,this.merge=!!n,this.name=typeof i=="string"&&i||"core",this.knownTags=s?qu:{},this.tags=Us(r,this.name),this.toStringOptions=o!=null?o:null,Object.defineProperty(this,Nt,{value:xr}),Object.defineProperty(this,Et,{value:$s}),Object.defineProperty(this,_r,{value:Nr}),this.sortMapEntries=typeof a=="function"?a:a===!0?Du:null}clone(){const e=Object.create(ws.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Lu(t,e){var c;const r=[];let n=e.directives===!0;if(e.directives!==!1&&t.directives){const l=t.directives.toString(t);l?(r.push(l),n=!0):t.directives.docStart&&(n=!0)}n&&r.push("---");const s=_l(t,e),{commentString:i}=s.options;if(t.commentBefore){r.length!==1&&r.unshift("");const l=i(t.commentBefore);r.unshift(wt(l,""))}let a=!1,o=null;if(t.contents){if(Ee(t.contents)){if(t.contents.spaceBefore&&n&&r.push(""),t.contents.commentBefore){const y=i(t.contents.commentBefore);r.push(wt(y,""))}s.forceBlockIndent=!!t.comment,o=t.contents.comment}const l=o?void 0:()=>a=!0;let p=Gt(t.contents,s,()=>o=null,l);o&&(p+=At(p,"",i(o))),(p[0]==="|"||p[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${p}`:r.push(p)}else r.push(Gt(t.contents,s));if((c=t.directives)!=null&&c.docEnd)if(t.comment){const l=i(t.comment);l.includes(`
`)?(r.push("..."),r.push(wt(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=t.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&r[r.length-1]!==""&&r.push(""),r.push(wt(i(l),"")))}return r.join(`
`)+`
`}function tn(t,e,r,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,i=n.length;s<i;++s){const a=n[s],o=tn(t,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const i=n.get(s),a=tn(t,n,s,i);a===void 0?n.delete(s):a!==i&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const i=tn(t,n,s,s);i===void 0?n.delete(s):i!==s&&(n.delete(s),n.add(i))}else for(const[s,i]of Object.entries(n)){const a=tn(t,n,s,i);a===void 0?delete n[s]:a!==i&&(n[s]=a)}return t.call(e,r,n)}class Cr{constructor(e,r,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Xe,{value:Si});let s=null;typeof r=="function"||Array.isArray(r)?s=r:n===void 0&&r&&(n=r,r=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,uniqueKeys:!0,version:"1.2"},n);this.options=i;let{version:a}=i;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Te({version:a}),this.setSchema(a,n),e===void 0?this.contents=null:this.contents=this.createNode(e,s,n)}clone(){const e=Object.create(Cr.prototype,{[Xe]:{value:Si}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Ee(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){or(this.contents)&&this.contents.add(e)}addIn(e,r){or(this.contents)&&this.contents.addIn(e,r)}createAlias(e,r){if(!e.anchor){const n=Ol(this);e.anchor=!r||n.has(r)?Pl(r||"a",n):r}return new us(e.anchor)}createNode(e,r,n){let s;if(typeof r=="function")e=r.call({"":e},"",e),s=r;else if(Array.isArray(r)){const d=E=>typeof E=="number"||E instanceof String||E instanceof Number,v=r.filter(d).map(String);v.length>0&&(r=r.concat(v)),s=r}else n===void 0&&r&&(n=r,r=void 0);const{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:p}=n!=null?n:{},{onAnchor:y,setAnchors:m,sourceObjects:$}=fu(this,a||"a"),P={aliasDuplicateObjects:i!=null?i:!0,keepUndefined:c!=null?c:!1,onAnchor:y,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:$},u=on(e,p,P);return o&&Se(u)&&(u.flow=!0),m(),u}createPair(e,r,n={}){const s=this.createNode(e,null,n),i=this.createNode(r,null,n);return new Ce(s,i)}delete(e){return or(this.contents)?this.contents.delete(e):!1}deleteIn(e){return en(e)?this.contents==null?!1:(this.contents=null,!0):or(this.contents)?this.contents.deleteIn(e):!1}get(e,r){return Se(this.contents)?this.contents.get(e,r):void 0}getIn(e,r){return en(e)?!r&&de(this.contents)?this.contents.value:this.contents:Se(this.contents)?this.contents.getIn(e,r):void 0}has(e){return Se(this.contents)?this.contents.has(e):!1}hasIn(e){return en(e)?this.contents!==void 0:Se(this.contents)?this.contents.hasIn(e):!1}set(e,r){this.contents==null?this.contents=ns(this.schema,[e],r):or(this.contents)&&this.contents.set(e,r)}setIn(e,r){en(e)?this.contents=r:this.contents==null?this.contents=ns(this.schema,Array.from(e),r):or(this.contents)&&this.contents.setIn(e,r)}setSchema(e,r={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Te({version:"1.1"}),n={merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Te({version:e}),n={merge:!1,resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(n)this.schema=new ws(Object.assign(n,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:r,mapAsMap:n,maxAliasCount:s,onAnchor:i,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100,stringify:Gt},c=yt(this.contents,r!=null?r:"",o);if(typeof i=="function")for(const{count:l,res:p}of o.anchors.values())i(p,l);return typeof a=="function"?tn(a,{"":c},"",c):c}toJSON(e,r){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:r})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const r=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return Lu(this,e)}}function or(t){if(Se(t))return!0;throw new Error("Expected a YAML collection as document contents")}class na extends Error{constructor(e,r,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=r}}class Vt extends na{constructor(e,r,n){super("YAMLParseError",e,r,n)}}class Hl extends na{constructor(e,r,n){super("YAMLWarning",e,r,n)}}const is=(t,e)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(o=>e.linePos(o));const{line:n,col:s}=r.linePos[0];r.message+=` at line ${n}, column ${s}`;let i=s-1,a=t.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(i>=60&&a.length>80){const o=Math.min(i-39,a.length-79);a="\u2026"+a.substring(o),i-=o-1}if(a.length>80&&(a=a.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(a.substring(0,i))){let o=t.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`\u2026
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=r.linePos[1];c&&c.line===n&&c.col>s&&(o=Math.min(c.col-s,80-i));const l=" ".repeat(i)+"^".repeat(o);r.message+=`:

${a}
${l}
`}};function Er(t,{flow:e,indicator:r,next:n,offset:s,onError:i,startOnNewline:a}){let o=!1,c=a,l=a,p="",y="",m=!1,$=!1,P=!1,u=null,d=null,v=null,E=null,b=null;for(const _ of t)switch(P&&(_.type!=="space"&&_.type!=="newline"&&_.type!=="comma"&&i(_.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),P=!1),_.type){case"space":!e&&c&&r!=="doc-start"&&_.source[0]==="	"&&i(_,"TAB_AS_INDENT","Tabs are not allowed as indentation"),l=!0;break;case"comment":{l||i(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const K=_.source.substring(1)||" ";p?p+=y+K:p=K,y="",c=!1;break}case"newline":c?p?p+=_.source:o=!0:y+=_.source,c=!0,m=!0,(u||d)&&($=!0),l=!0;break;case"anchor":u&&i(_,"MULTIPLE_ANCHORS","A node can have at most one anchor"),_.source.endsWith(":")&&i(_.offset+_.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),u=_,b===null&&(b=_.offset),c=!1,l=!1,P=!0;break;case"tag":{d&&i(_,"MULTIPLE_TAGS","A node can have at most one tag"),d=_,b===null&&(b=_.offset),c=!1,l=!1,P=!0;break}case r:(u||d)&&i(_,"BAD_PROP_ORDER",`Anchors and tags must be after the ${_.source} indicator`),E&&i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.source} in ${e!=null?e:"collection"}`),E=_,c=!1,l=!1;break;case"comma":if(e){v&&i(_,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),v=_,c=!1,l=!1;break}default:i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.type} token`),c=!1,l=!1}const j=t[t.length-1],S=j?j.offset+j.source.length:s;return P&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&i(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),{comma:v,found:E,spaceBefore:o,comment:p,hasNewline:m,hasNewlineAfterProp:$,anchor:u,tag:d,end:S,start:b!=null?b:S}}function cn(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of t.items){for(const r of e.start)if(r.type==="newline")return!0;if(e.sep){for(const r of e.sep)if(r.type==="newline")return!0}if(cn(e.key)||cn(e.value))return!0}return!1;default:return!0}}function Ei(t,e,r){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===t&&(n.source==="]"||n.source==="}")&&cn(e)&&r(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Xl(t,e,r){const{uniqueKeys:n}=t.options;if(n===!1)return!1;const s=typeof n=="function"?n:(i,a)=>i===a||de(i)&&de(a)&&i.value===a.value&&!(i.value==="<<"&&t.schema.merge);return e.some(i=>s(i.key,r))}const ho="All mapping items must start at the same column";function Mu({composeNode:t,composeEmptyNode:e},r,n,s){var o;const i=new He(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset;for(const c of n.items){const{start:l,key:p,sep:y,value:m}=c,$=Er(l,{indicator:"explicit-key-ind",next:p!=null?p:y==null?void 0:y[0],offset:a,onError:s,startOnNewline:!0}),P=!$.found;if(P){if(p&&(p.type==="block-seq"?s(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(a,"BAD_INDENT",ho)),!$.anchor&&!$.tag&&!y){$.comment&&(i.comment?i.comment+=`
`+$.comment:i.comment=$.comment);continue}($.hasNewlineAfterProp||cn(p))&&s(p!=null?p:l[l.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((o=$.found)==null?void 0:o.indent)!==n.indent&&s(a,"BAD_INDENT",ho);const u=$.end,d=p?t(r,p,$,s):e(r,u,l,null,$,s);r.schema.compat&&Ei(n.indent,p,s),Xl(r,i.items,d)&&s(u,"DUPLICATE_KEY","Map keys must be unique");const v=Er(y!=null?y:[],{indicator:"map-value-ind",next:m,offset:d.range[2],onError:s,startOnNewline:!p||p.type==="block-scalar"});if(a=v.end,v.found){P&&((m==null?void 0:m.type)==="block-map"&&!v.hasNewline&&s(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&$.start<v.found.offset-1024&&s(d.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const E=m?t(r,m,v,s):e(r,a,y,null,v,s);r.schema.compat&&Ei(n.indent,m,s),a=E.range[2];const b=new Ce(d,E);r.options.keepSourceTokens&&(b.srcToken=c),i.items.push(b)}else{P&&s(d.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(d.comment?d.comment+=`
`+v.comment:d.comment=v.comment);const E=new Ce(d);r.options.keepSourceTokens&&(E.srcToken=c),i.items.push(E)}}return i.range=[n.offset,a,a],i}function Bu({composeNode:t,composeEmptyNode:e},r,n,s){const i=new Qt(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset;for(const{start:o,value:c}of n.items){const l=Er(o,{indicator:"seq-item-ind",next:c,offset:a,onError:s,startOnNewline:!0});if(a=l.end,!l.found)if(l.anchor||l.tag||c)c&&c.type==="block-seq"?s(a,"BAD_INDENT","All sequence items must start at the same column"):s(a,"MISSING_CHAR","Sequence item without - indicator");else{l.comment&&(i.comment=l.comment);continue}const p=c?t(r,c,l,s):e(r,a,o,null,l,s);r.schema.compat&&Ei(n.indent,c,s),a=p.range[2],i.items.push(p)}return i.range=[n.offset,a,a],i}function yn(t,e,r,n){let s="";if(t){let i=!1,a="";for(const o of t){const{source:c,type:l}=o;switch(l){case"space":i=!0;break;case"comment":{r&&!i&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=c.substring(1)||" ";s?s+=a+p:s=p,a="";break}case"newline":s&&(a+=c),i=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const Fs="Block collections are not allowed within flow collections",Vs=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Uu({composeNode:t,composeEmptyNode:e},r,n,s){var P;const i=n.start.source==="{",a=i?"flow map":"flow sequence",o=i?new He(r.schema):new Qt(r.schema);o.flow=!0;const c=r.atRoot;c&&(r.atRoot=!1);let l=n.offset+n.start.source.length;for(let u=0;u<n.items.length;++u){const d=n.items[u],{start:v,key:E,sep:b,value:j}=d,S=Er(v,{flow:a,indicator:"explicit-key-ind",next:E!=null?E:b==null?void 0:b[0],offset:l,onError:s,startOnNewline:!1});if(!S.found){if(!S.anchor&&!S.tag&&!b&&!j){u===0&&S.comma?s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):u<n.items.length-1&&s(S.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),S.comment&&(o.comment?o.comment+=`
`+S.comment:o.comment=S.comment),l=S.end;continue}!i&&r.options.strict&&cn(E)&&s(E,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(u===0)S.comma&&s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(S.comma||s(S.start,"MISSING_CHAR",`Missing , between ${a} items`),S.comment){let _="";e:for(const K of v)switch(K.type){case"comma":case"space":break;case"comment":_=K.source.substring(1);break e;default:break e}if(_){let K=o.items[o.items.length-1];ge(K)&&(K=(P=K.value)!=null?P:K.key),K.comment?K.comment+=`
`+_:K.comment=_,S.comment=S.comment.substring(_.length+1)}}if(!i&&!b&&!S.found){const _=j?t(r,j,S,s):e(r,S.end,b,null,S,s);o.items.push(_),l=_.range[2],Vs(j)&&s(_.range,"BLOCK_IN_FLOW",Fs)}else{const _=S.end,K=E?t(r,E,S,s):e(r,_,v,null,S,s);Vs(E)&&s(K.range,"BLOCK_IN_FLOW",Fs);const Z=Er(b!=null?b:[],{flow:a,indicator:"map-value-ind",next:j,offset:K.range[2],onError:s,startOnNewline:!1});if(Z.found){if(!i&&!S.found&&r.options.strict){if(b)for(const C of b){if(C===Z.found)break;if(C.type==="newline"){s(C,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}S.start<Z.found.offset-1024&&s(Z.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else j&&("source"in j&&j.source&&j.source[0]===":"?s(j,"MISSING_CHAR",`Missing space after : in ${a}`):s(Z.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const w=j?t(r,j,Z,s):Z.found?e(r,Z.end,b,null,Z,s):null;w?Vs(j)&&s(w.range,"BLOCK_IN_FLOW",Fs):Z.comment&&(K.comment?K.comment+=`
`+Z.comment:K.comment=Z.comment);const N=new Ce(K,w);if(r.options.keepSourceTokens&&(N.srcToken=d),i){const C=o;Xl(r,C.items,K)&&s(_,"DUPLICATE_KEY","Map keys must be unique"),C.items.push(N)}else{const C=new He(r.schema);C.flow=!0,C.items.push(N),o.items.push(C)}l=w?w.range[2]:Z.end}}const p=i?"}":"]",[y,...m]=n.end;let $=l;if(y&&y.source===p)$=y.offset+y.source.length;else{const u=a[0].toUpperCase()+a.substring(1),d=c?`${u} must end with a ${p}`:`${u} in block collection must be sufficiently indented and end with a ${p}`;s(l,c?"MISSING_CHAR":"BAD_INDENT",d),y&&y.source.length!==1&&m.unshift(y)}if(m.length>0){const u=yn(m,$,r.options.strict,s);u.comment&&(o.comment?o.comment+=`
`+u.comment:o.comment=u.comment),o.range=[n.offset,$,u.offset]}else o.range=[n.offset,$,$];return o}function Fu(t,e,r,n,s){let i;switch(r.type){case"block-map":{i=Mu(t,e,r,s);break}case"block-seq":{i=Bu(t,e,r,s);break}case"flow-collection":{i=Uu(t,e,r,s);break}}if(!n)return i;const a=e.directives.tagName(n.source,m=>s(n,"TAG_RESOLVE_FAILED",m));if(!a)return i;const o=i.constructor;if(a==="!"||a===o.tagName)return i.tag=o.tagName,i;const c=Wt(i)?"map":"seq";let l=e.schema.tags.find(m=>m.collection===c&&m.tag===a);if(!l){const m=e.schema.knownTags[a];if(m&&m.collection===c)e.schema.tags.push(Object.assign({},m,{default:!1})),l=m;else return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),i.tag=a,i}const p=l.resolve(i,m=>s(n,"TAG_RESOLVE_FAILED",m),e.options),y=Ee(p)?p:new W(p);return y.range=i.range,y.tag=a,l!=null&&l.format&&(y.format=l.format),y}function Yl(t,e,r){const n=t.offset,s=Vu(t,e,r);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const i=s.mode===">"?W.BLOCK_FOLDED:W.BLOCK_LITERAL,a=t.source?Ku(t.source):[];let o=a.length;for(let u=a.length-1;u>=0;--u){const d=a[u][1];if(d===""||d==="\r")o=u;else break}if(o===0){const u=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let d=n+s.length;return t.source&&(d+=t.source.length),{value:u,type:i,comment:s.comment,range:[n,d,d]}}let c=t.indent+s.indent,l=t.offset+s.length,p=0;for(let u=0;u<o;++u){const[d,v]=a[u];if(v===""||v==="\r")s.indent===0&&d.length>c&&(c=d.length);else{if(d.length<c){const E="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";r(l+d.length,"MISSING_CHAR",E)}s.indent===0&&(c=d.length),p=u;break}l+=d.length+v.length+1}for(let u=a.length-1;u>=o;--u)a[u][0].length>c&&(o=u+1);let y="",m="",$=!1;for(let u=0;u<p;++u)y+=a[u][0].slice(c)+`
`;for(let u=p;u<o;++u){let[d,v]=a[u];l+=d.length+v.length+1;const E=v[v.length-1]==="\r";if(E&&(v=v.slice(0,-1)),v&&d.length<c){const j=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;r(l-v.length-(E?2:1),"BAD_INDENT",j),d=""}i===W.BLOCK_LITERAL?(y+=m+d.slice(c)+v,m=`
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
`}const P=n+s.length+t.source.length;return{value:y,type:i,comment:s.comment,range:[n,P,P]}}function Vu({offset:t,props:e},r,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],i=s[0];let a=0,o="",c=-1;for(let m=1;m<s.length;++m){const $=s[m];if(!o&&($==="-"||$==="+"))o=$;else{const P=Number($);!a&&P?a=P:c===-1&&(c=t+m)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,p="",y=s.length;for(let m=1;m<e.length;++m){const $=e[m];switch($.type){case"space":l=!0;case"newline":y+=$.source.length;break;case"comment":r&&!l&&n($,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),y+=$.source.length,p=$.source.substring(1);break;case"error":n($,"UNEXPECTED_TOKEN",$.message),y+=$.source.length;break;default:{const P=`Unexpected token in block scalar header: ${$.type}`;n($,"UNEXPECTED_TOKEN",P);const u=$.source;u&&typeof u=="string"&&(y+=u.length)}}}return{mode:i,indent:a,chomp:o,comment:p,length:y}}function Ku(t){const e=t.split(/\n( *)/),r=e[0],n=r.match(/^( *)/),i=[n!=null&&n[1]?[n[1],r.slice(n[1].length)]:["",r]];for(let a=1;a<e.length;a+=2)i.push([e[a],e[a+1]]);return i}function Wl(t,e,r){const{offset:n,type:s,source:i,end:a}=t;let o,c;const l=(m,$,P)=>r(n+m,$,P);switch(s){case"scalar":o=W.PLAIN,c=zu(i,l);break;case"single-quoted-scalar":o=W.QUOTE_SINGLE,c=Ju(i,l);break;case"double-quoted-scalar":o=W.QUOTE_DOUBLE,c=Gu(i,l);break;default:return r(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+i.length,n+i.length]}}const p=n+i.length,y=yn(a,p,e,r);return{value:c,type:o,comment:y.comment,range:[n,p,y.offset]}}function zu(t,e){let r="";switch(t[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${t[0]}`;break}case"@":case"`":{r=`reserved character ${t[0]}`;break}}return r&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),Ql(t)}function Ju(t,e){return(t[t.length-1]!=="'"||t.length===1)&&e(t.length,"MISSING_CHAR","Missing closing 'quote"),Ql(t.slice(1,-1)).replace(/''/g,"'")}function Ql(t){var c;let e,r;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(t);if(!n)return t;let s=n[1],i=" ",a=e.lastIndex;for(r.lastIndex=a;n=r.exec(t);)n[1]===""?i===`
`?s+=i:i=`
`:(s+=i+n[1],i=" "),a=r.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,n=o.exec(t),s+i+((c=n==null?void 0:n[1])!=null?c:"")}function Gu(t,e){let r="";for(let n=1;n<t.length-1;++n){const s=t[n];if(!(s==="\r"&&t[n+1]===`
`))if(s===`
`){const{fold:i,offset:a}=Hu(t,n);r+=i,n=a}else if(s==="\\"){let i=t[++n];const a=Xu[i];if(a)r+=a;else if(i===`
`)for(i=t[n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="\r"&&t[n+1]===`
`)for(i=t[++n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="x"||i==="u"||i==="U"){const o={x:2,u:4,U:8}[i];r+=Yu(t,n+1,o,e),n+=o}else{const o=t.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),r+=o}}else if(s===" "||s==="	"){const i=n;let a=t[n+1];for(;a===" "||a==="	";)a=t[++n+1];a!==`
`&&!(a==="\r"&&t[n+2]===`
`)&&(r+=n>i?t.slice(i,n+1):s)}else r+=s}return(t[t.length-1]!=='"'||t.length===1)&&e(t.length,"MISSING_CHAR",'Missing closing "quote'),r}function Hu(t,e){let r="",n=t[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&t[e+2]!==`
`);)n===`
`&&(r+=`
`),e+=1,n=t[e+1];return r||(r=" "),{fold:r,offset:e}}const Xu={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Yu(t,e,r,n){const s=t.substr(e,r),a=s.length===r&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(a)){const o=t.substr(e-2,r+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function Zl(t,e,r,n){const{value:s,type:i,comment:a,range:o}=e.type==="block-scalar"?Yl(e,t.options.strict,n):Wl(e,t.options.strict,n),c=r?t.directives.tagName(r.source,y=>n(r,"TAG_RESOLVE_FAILED",y)):null,l=r&&c?Wu(t.schema,s,c,r,n):e.type==="scalar"?Qu(t,s,e,n):t.schema[Et];let p;try{const y=l.resolve(s,m=>n(r!=null?r:e,"TAG_RESOLVE_FAILED",m),t.options);p=de(y)?y:new W(y)}catch(y){const m=y instanceof Error?y.message:String(y);n(r!=null?r:e,"TAG_RESOLVE_FAILED",m),p=new W(s)}return p.range=o,p.source=s,i&&(p.type=i),c&&(p.tag=c),l.format&&(p.format=l.format),a&&(p.comment=a),p}function Wu(t,e,r,n,s){var o;if(r==="!")return t[Et];const i=[];for(const c of t.tags)if(!c.collection&&c.tag===r)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((o=c.test)!=null&&o.test(e))return c;const a=t.knownTags[r];return a&&!a.collection?(t.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),t[Et])}function Qu({directives:t,schema:e},r,n,s){var a;const i=e.tags.find(o=>{var c;return o.default&&((c=o.test)==null?void 0:c.test(r))})||e[Et];if(e.compat){const o=(a=e.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))}))!=null?a:e[Et];if(i.tag!==o.tag){const c=t.tagString(i.tag),l=t.tagString(o.tag),p=`Value may be parsed as either ${c} or ${l}`;s(n,"TAG_RESOLVE_FAILED",p,!0)}}return i}function Zu(t,e,r){if(e){r===null&&(r=e.length);for(let n=r-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":t-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)t+=s.source.length,s=e[++n];break}}return t}const ed={composeNode:ef,composeEmptyNode:sa};function ef(t,e,r,n){const{spaceBefore:s,comment:i,anchor:a,tag:o}=r;let c,l=!0;switch(e.type){case"alias":c=td(t,e,n),(a||o)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Zl(t,e,o,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Fu(ed,t,e,o,n),a&&(c.anchor=a.source.substring(1));break;default:{const p=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",p),c=sa(t,e.offset,void 0,null,r,n),l=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&(c.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?c.comment=i:c.commentBefore=i),t.options.keepSourceTokens&&l&&(c.srcToken=e),c}function sa(t,e,r,n,{spaceBefore:s,comment:i,anchor:a,tag:o},c){const l={type:"scalar",offset:Zu(e,r,n),indent:-1,source:""},p=Zl(t,l,o,c);return a&&(p.anchor=a.source.substring(1),p.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(p.spaceBefore=!0),i&&(p.comment=i),p}function td({options:t},{offset:e,source:r,end:n},s){const i=new us(r.substring(1));i.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&s(e+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+r.length,o=yn(n,a,t.strict,s);return i.range=[e,a,o.offset],o.comment&&(i.comment=o.comment),i}function rd(t,e,{offset:r,start:n,value:s,end:i},a){const o=Object.assign({_directives:e},t),c=new Cr(void 0,o),l={atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},p=Er(n,{indicator:"doc-start",next:s!=null?s:i==null?void 0:i[0],offset:r,onError:a,startOnNewline:!0});p.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?ef(l,s,p,a):sa(l,p.end,n,null,p,a);const y=c.contents.range[2],m=yn(i,y,!1,a);return m.comment&&(c.comment=m.comment),c.range=[r,y,m.offset],c}function Jr(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:e,source:r}=t;return[e,e+(typeof r=="string"?r.length:1)]}function yo(t){var s;let e="",r=!1,n=!1;for(let i=0;i<t.length;++i){const a=t[i];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),r=!0,n=!1;break;case"%":((s=t[i+1])==null?void 0:s[0])!=="#"&&(i+=1),r=!1;break;default:r||(n=!0),r=!1}}return{comment:e,afterEmptyLine:n}}class ia{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,n,s,i)=>{const a=Jr(r);i?this.warnings.push(new Hl(a,n,s)):this.errors.push(new Vt(a,n,s))},this.directives=new Te({version:e.version||"1.2"}),this.options=e}decorate(e,r){const{comment:n,afterEmptyLine:s}=yo(this.prelude);if(n){const i=e.contents;if(r)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!i)e.commentBefore=n;else if(Se(i)&&!i.flow&&i.items.length>0){let a=i.items[0];ge(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=i.commentBefore;i.commentBefore=a?`${n}
${a}`:n}}r?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:yo(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,r=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(r,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(r,n,s)=>{const i=Jr(e);i[0]+=r,this.onError(i,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const r=rd(this.options,this.directives,e,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const r=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Vt(Jr(e),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Vt(Jr(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const r=yn(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new Vt(Jr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new Cr(void 0,n);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,r,r],this.decorate(s,!1),yield s}}}function nd(t,e=!0,r){if(t){const n=(s,i,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(r)r(o,i,a);else throw new Vt([o,o+1],i,a)};switch(t.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Wl(t,e,n);case"block-scalar":return Yl(t,e,n)}}return null}function sd(t,e){var l;const{implicitKey:r=!1,indent:n,inFlow:s=!1,offset:i=-1,type:a="PLAIN"}=e,o=mn({type:a,value:t},{implicitKey:r,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=(l=e.end)!=null?l:[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const p=o.indexOf(`
`),y=o.substring(0,p),m=o.substring(p+1)+`
`,$=[{type:"block-scalar-header",offset:i,indent:n,source:y}];return tf($,c)||$.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:i,indent:n,props:$,source:m}}case'"':return{type:"double-quoted-scalar",offset:i,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:i,indent:n,source:o,end:c};default:return{type:"scalar",offset:i,indent:n,source:o,end:c}}}function id(t,e,r={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:i=!1,type:a}=r,o="indent"in t?t.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(t.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=t.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=mn({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":ad(t,c);break;case'"':Ks(t,c,"double-quoted-scalar");break;case"'":Ks(t,c,"single-quoted-scalar");break;default:Ks(t,c,"scalar")}}function ad(t,e){const r=e.indexOf(`
`),n=e.substring(0,r),s=e.substring(r+1)+`
`;if(t.type==="block-scalar"){const i=t.props[0];if(i.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i.source=n,t.source=s}else{const{offset:i}=t,a="indent"in t?t.indent:-1,o=[{type:"block-scalar-header",offset:i,indent:a,source:n}];tf(o,"end"in t?t.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(t))c!=="type"&&c!=="offset"&&delete t[c];Object.assign(t,{type:"block-scalar",indent:a,props:o,source:s})}}function tf(t,e){if(e)for(const r of e)switch(r.type){case"space":case"comment":t.push(r);break;case"newline":return t.push(r),!0}return!1}function Ks(t,e,r){switch(t.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":t.type=r,t.source=e;break;case"block-scalar":{const n=t.props.slice(1);let s=e.length;t.props[0].type==="block-scalar-header"&&(s-=t.props[0].source.length);for(const i of n)i.offset+=s;delete t.props,Object.assign(t,{type:r,source:e,end:n});break}case"block-map":case"block-seq":{const n=t.offset+e.length,s={type:"newline",offset:n,indent:t.indent,source:`
`};delete t.items,Object.assign(t,{type:r,source:e,end:[s]});break}default:{const n="indent"in t?t.indent:-1,s="end"in t&&Array.isArray(t.end)?t.end.filter(i=>i.type==="space"||i.type==="comment"||i.type==="newline"):[];for(const i of Object.keys(t))i!=="type"&&i!=="offset"&&delete t[i];Object.assign(t,{type:r,indent:n,source:e,end:s})}}}const od=t=>"type"in t?as(t):Gn(t);function as(t){switch(t.type){case"block-scalar":{let e="";for(const r of t.props)e+=as(r);return e+t.source}case"block-map":case"block-seq":{let e="";for(const r of t.items)e+=Gn(r);return e}case"flow-collection":{let e=t.start.source;for(const r of t.items)e+=Gn(r);for(const r of t.end)e+=r.source;return e}case"document":{let e=Gn(t);if(t.end)for(const r of t.end)e+=r.source;return e}default:{let e=t.source;if("end"in t&&t.end)for(const r of t.end)e+=r.source;return e}}}function Gn({start:t,key:e,sep:r,value:n}){let s="";for(const i of t)s+=i.source;if(e&&(s+=as(e)),r)for(const i of r)s+=i.source;return n&&(s+=as(n)),s}const Oi=Symbol("break visit"),cd=Symbol("skip children"),rf=Symbol("remove item");function Ht(t,e){"type"in t&&t.type==="document"&&(t={start:t.start,value:t.value}),nf(Object.freeze([]),t,e)}Ht.BREAK=Oi;Ht.SKIP=cd;Ht.REMOVE=rf;Ht.itemAtPath=(t,e)=>{let r=t;for(const[n,s]of e){const i=r==null?void 0:r[n];if(i&&"items"in i)r=i.items[s];else return}return r};Ht.parentCollection=(t,e)=>{const r=Ht.itemAtPath(t,e.slice(0,-1)),n=e[e.length-1][0],s=r==null?void 0:r[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function nf(t,e,r){let n=r(e,t);if(typeof n=="symbol")return n;for(const s of["key","value"]){const i=e[s];if(i&&"items"in i){for(let a=0;a<i.items.length;++a){const o=nf(Object.freeze(t.concat([[s,a]])),i.items[a],r);if(typeof o=="number")a=o-1;else{if(o===Oi)return Oi;o===rf&&(i.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,t))}}return typeof n=="function"?n(e,t):n}const Is="\uFEFF",Es="",Os="",ln="",ld=t=>!!t&&"items"in t,fd=t=>!!t&&(t.type==="scalar"||t.type==="single-quoted-scalar"||t.type==="double-quoted-scalar"||t.type==="block-scalar");function pd(t){switch(t){case Is:return"<BOM>";case Es:return"<DOC>";case Os:return"<FLOW_END>";case ln:return"<SCALAR>";default:return JSON.stringify(t)}}function sf(t){switch(t){case Is:return"byte-order-mark";case Es:return"doc-mode";case Os:return"flow-error-end";case ln:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(t[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}const ud=Object.freeze(Object.defineProperty({__proto__:null,BOM:Is,DOCUMENT:Es,FLOW_END:Os,SCALAR:ln,isCollection:ld,isScalar:fd,prettyToken:pd,tokenType:sf,createScalarToken:sd,resolveAsScalar:nd,setScalarValue:id,stringify:od,visit:Ht},Symbol.toStringTag,{value:"Module"}));function Ge(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const $o="0123456789ABCDEFabcdef".split(""),dd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),zs=",[]{}".split(""),md=` ,[]{}
\r	`.split(""),Js=t=>!t||md.includes(t);class af{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,r=!1){var s;e&&(this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null),this.atEnd=!r;let n=(s=this.next)!=null?s:"stream";for(;n&&(r||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,r=this.buffer[e];for(;r===" "||r==="	";)r=this.buffer[++e];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let r=this.buffer[e];if(this.indentNext>0){let n=0;for(;r===" ";)r=this.buffer[++n+e];if(r==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return r===`
`||n>=this.indentNext||!r&&!this.atEnd?e+n:-1}if(r==="-"||r==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Ge(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===Is&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let r=e.length;const n=e.indexOf("#");if(n!==-1){const i=e[n-1];(i===" "||i==="	")&&(r=n-1)}for(;;){const i=e[r-1];if(i===" "||i==="	")r-=1;else break}const s=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-r),yield*this.pushNewline(),"stream"}return yield Es,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if(r==="---"&&Ge(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(r==="..."&&Ge(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Ge(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Ge(r)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(e[r]){case"#":yield*this.pushCount(e.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Js),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,r,n=-1;do e=yield*this.pushNewline(),e>0?(r=yield*this.pushSpaces(!1),this.indentValue=n=r):r=0,r+=yield*this.pushSpaces(!0);while(e+r>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Ge(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield Os,yield*this.parseLineStart();let i=0;for(;s[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),s[i]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Js),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Ge(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let r=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let i=0;for(;this.buffer[r-1-i]==="\\";)i+=1;if(i%2===0)break;r=this.buffer.indexOf('"',r+1)}const n=this.buffer.substring(0,r);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const i=this.continueScalar(s+1);if(i===-1)break;s=n.indexOf(`
`,i)}s!==-1&&(r=s-(n[s-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const r=this.buffer[++e];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>Ge(r)||r==="#")}*parseBlockScalar(){let e=this.pos-1,r=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":r+=1;break;case`
`:e=s,r=0;break;case"\r":{const i=this.buffer[s+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext+=this.blockScalarIndent;do{const s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}if(!this.blockScalarKeep)do{let s=e-1,i=this.buffer[s];i==="\r"&&(i=this.buffer[--s]);const a=s;for(;i===" "||i==="	";)i=this.buffer[--s];if(i===`
`&&s>=this.pos&&s+1+r>a)e=s;else break}while(!0);return yield ln,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let r=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const i=this.buffer[n+1];if(Ge(i)||e&&i===",")break;r=n}else if(Ge(s)){let i=this.buffer[n+1];if(s==="\r"&&(i===`
`?(n+=1,s=`
`,i=this.buffer[n+1]):r=n),i==="#"||e&&zs.includes(i))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&zs.includes(s))break;r=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield ln,yield*this.pushToIndex(r+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,r){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Js))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,r=this.charAt(1);if(Ge(r)||e&&zs.includes(r))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,r=this.buffer[e];for(;!Ge(r)&&r!==">";)r=this.buffer[++e];return yield*this.pushToIndex(r===">"?e+1:e,!1)}else{let e=this.pos+1,r=this.buffer[e];for(;r;)if(dd.includes(r))r=this.buffer[++e];else if(r==="%"&&$o.includes(this.buffer[e+1])&&$o.includes(this.buffer[e+2]))r=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let r=this.pos-1,n;do n=this.buffer[++r];while(n===" "||e&&n==="	");const s=r-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=r),s}*pushUntil(e){let r=this.pos,n=this.buffer[r];for(;!e(n);)n=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class of{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let r=0,n=this.lineStarts.length;for(;r<n;){const i=r+n>>1;this.lineStarts[i]<e?r=i+1:n=i}if(this.lineStarts[r]===e)return{line:r+1,col:1};if(r===0)return{line:0,col:e};const s=this.lineStarts[r-1];return{line:r,col:e-s+1}}}}function Ze(t,e){for(let r=0;r<t.length;++r)if(t[r].type===e)return!0;return!1}function go(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function cf(t){switch(t==null?void 0:t.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function qn(t){var e;switch(t.type){case"document":return t.start;case"block-map":{const r=t.items[t.items.length-1];return(e=r.sep)!=null?e:r.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function cr(t){var r;if(t.length===0)return[];let e=t.length;e:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((r=t[++e])==null?void 0:r.type)==="space";);return t.splice(e,t.length)}function vo(t){if(t.start.type==="flow-seq-start")for(const e of t.items)e.sep&&!e.value&&!Ze(e.start,"explicit-key-ind")&&!Ze(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,cf(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class aa{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new af,this.onNewLine=e}*parse(e,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,r))yield*this.next(n);r||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const r=sf(e);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const r=e!=null?e:this.stack.pop();if(r)if(this.stack.length===0)yield r;else{const n=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in n?n.indent:0:r.type==="flow-collection"&&n.type==="document"&&(r.indent=0),r.type==="flow-collection"&&vo(r),n.type){case"document":n.value=r;break;case"block-scalar":n.props.push(r);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=r;else{Object.assign(s,{key:r,sep:[]}),this.onKeyLine=!Ze(s.start,"explicit-key-ind");return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:r}):s.value=r;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:r,sep:[]}):s.sep?s.value=r:Object.assign(s,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const s=r.items[r.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&go(s.start)===-1&&(r.indent===0||s.start.every(i=>i.type!=="comment"||i.indent<r.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),r.items.splice(-1,1))}}else{const n="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:n}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{go(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const r=this.startBlockValue(e);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const r=qn(this.peek(2)),n=cr(r);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent&&r.sep;let i=[];if(s&&r.sep&&!r.value){const a=[];for(let o=0;o<r.sep.length;++o){const c=r.sep[o];switch(c.type){case"newline":a.push(o);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(i=r.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":s||r.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!Ze(r.start,"explicit-key-ind")?r.start.push(this.sourceToken):s||r.value?(i.push(this.sourceToken),e.items.push({start:i})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}),this.onKeyLine=!0;return;case"map-value-ind":if(Ze(r.start,"explicit-key-ind"))if(r.sep)if(r.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Ze(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(cf(r.key)&&!Ze(r.sep,"newline")){const a=cr(r.start),o=r.key,c=r.sep;c.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:c}]})}else i.length>0?r.sep=r.sep.concat(i,this.sourceToken):r.sep.push(this.sourceToken);else if(Ze(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const a=cr(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||s?e.items.push({start:i,key:null,sep:[this.sourceToken]}):Ze(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);s||r.value?(e.items.push({start:i,key:a,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(a):(Object.assign(r,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&Ze(r.start,"explicit-key-ind")&&e.items.push({start:i}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=e.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;r.value||Ze(r.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const r=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?e.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!r||r.value?e.items.push({start:[],key:s,sep:[]}):r.sep?this.stack.push(s):Object.assign(r,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=qn(n),i=cr(s);vo(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=qn(e),n=cr(r);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const r=qn(e),n=cr(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,r){return this.type!=="comment"||this.indent<=r?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function lf(t){const e=t.prettyErrors!==!1;return{lineCounter:t.lineCounter||e&&new of||null,prettyErrors:e}}function hd(t,e={}){const{lineCounter:r,prettyErrors:n}=lf(e),s=new aa(r==null?void 0:r.addNewLine),i=new ia(e),a=Array.from(i.compose(s.parse(t)));if(n&&r)for(const o of a)o.errors.forEach(is(t,r)),o.warnings.forEach(is(t,r));return a.length>0?a:Object.assign([],{empty:!0},i.streamInfo())}function ff(t,e={}){const{lineCounter:r,prettyErrors:n}=lf(e),s=new aa(r==null?void 0:r.addNewLine),i=new ia(e);let a=null;for(const o of i.compose(s.parse(t),!0,t.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Vt(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&r&&(a.errors.forEach(is(t,r)),a.warnings.forEach(is(t,r))),a}function yd(t,e,r){let n;typeof e=="function"?n=e:r===void 0&&e&&typeof e=="object"&&(r=e);const s=ff(t,r);if(!s)return null;if(s.warnings.forEach(i=>Al(s.options.logLevel,i)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},r))}function $d(t,e,r){var s;let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:r===void 0&&e&&(r=e),typeof r=="string"&&(r=r.length),typeof r=="number"){const i=Math.round(r);r=i<1?void 0:i>8?{indent:8}:{indent:i}}if(t===void 0){const{keepUndefined:i}=(s=r!=null?r:e)!=null?s:{};if(!i)return}return new Cr(t,n,r).toString(r)}const gd=Object.freeze(Object.defineProperty({__proto__:null,CST:ud,Composer:ia,Document:Cr,Schema:ws,YAMLError:na,YAMLParseError:Vt,YAMLWarning:Hl,Alias:us,isAlias:Yt,isCollection:Se,isDocument:dn,isMap:Wt,isNode:Ee,isPair:ge,isScalar:de,isSeq:Ar,Pair:Ce,Scalar:W,YAMLMap:He,YAMLSeq:Qt,Lexer:af,LineCounter:of,Parser:aa,parse:yd,parseAllDocuments:hd,parseDocument:ff,stringify:$d,visit:Tt,visitAsync:ps},Symbol.toStringTag,{value:"Module"}));var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vd(t){var e=t.default;if(typeof e=="function"){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var s=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(r,n,s.get?s:{enumerable:!0,get:function(){return t[n]}})}),r}var $t=bd;function bd(t,e){return function r(){e==null&&(e=t.length);var n=[].slice.call(arguments);return n.length>=e?t.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var os={exports:{}};(function(t,e){(function(r,n){var s={};r.PubSub?(s=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=s,n(s)),t!==void 0&&t.exports&&(e=t.exports=s),e.PubSub=s,t.exports=e=s})(typeof window=="object"&&window||oa,function(r){var n={},s=-1,i="*";function a(u){var d;for(d in u)if(Object.prototype.hasOwnProperty.call(u,d))return!0;return!1}function o(u){return function(){throw u}}function c(u,d,v){try{u(d,v)}catch(E){setTimeout(o(E),0)}}function l(u,d,v){u(d,v)}function p(u,d,v,E){var b=n[d],j=E?l:c,S;if(!!Object.prototype.hasOwnProperty.call(n,d))for(S in b)Object.prototype.hasOwnProperty.call(b,S)&&j(b[S],u,v)}function y(u,d,v){return function(){var b=String(u),j=b.lastIndexOf(".");for(p(u,u,d,v);j!==-1;)b=b.substr(0,j),j=b.lastIndexOf("."),p(u,b,d,v);p(u,i,d,v)}}function m(u){var d=String(u),v=Boolean(Object.prototype.hasOwnProperty.call(n,d)&&a(n[d]));return v}function $(u){for(var d=String(u),v=m(d)||m(i),E=d.lastIndexOf(".");!v&&E!==-1;)d=d.substr(0,E),E=d.lastIndexOf("."),v=m(d);return v}function P(u,d,v,E){u=typeof u=="symbol"?u.toString():u;var b=y(u,d,E),j=$(u);return j?(v===!0?b():setTimeout(b,0),!0):!1}r.publish=function(u,d){return P(u,d,!1,r.immediateExceptions)},r.publishSync=function(u,d){return P(u,d,!0,r.immediateExceptions)},r.subscribe=function(u,d){if(typeof d!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(n,u)||(n[u]={});var v="uid_"+String(++s);return n[u][v]=d,v},r.subscribeAll=function(u){return r.subscribe(i,u)},r.subscribeOnce=function(u,d){var v=r.subscribe(u,function(){r.unsubscribe(v),d.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function(d){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&delete n[v]},r.countSubscriptions=function(d){var v,E,b=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0){for(E in n[v])b++;break}return b},r.getSubscriptions=function(d){var v,E=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&E.push(v);return E},r.unsubscribe=function(u){var d=function(Z){var w;for(w in n)if(Object.prototype.hasOwnProperty.call(n,w)&&w.indexOf(Z)===0)return!0;return!1},v=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(n,u)||d(u)),E=!v&&typeof u=="string",b=typeof u=="function",j=!1,S,_,K;if(v){r.clearSubscriptions(u);return}for(S in n)if(Object.prototype.hasOwnProperty.call(n,S)){if(_=n[S],E&&_[u]){delete _[u],j=u;break}if(b)for(K in _)Object.prototype.hasOwnProperty.call(_,K)&&_[K]===u&&(delete _[K],j=!0)}return j}})})(os,os.exports);var Pi={exports:{}};/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */(function(t,e){(function(r,n){n(e)})(oa,function(r){function n(){for(var h=arguments.length,f=Array(h),g=0;g<h;g++)f[g]=arguments[g];if(f.length>1){f[0]=f[0].slice(0,-1);for(var O=f.length-1,I=1;I<O;++I)f[I]=f[I].slice(1,-1);return f[O]=f[O].slice(1),f.join("")}else return f[0]}function s(h){return"(?:"+h+")"}function i(h){return h===void 0?"undefined":h===null?"null":Object.prototype.toString.call(h).split(" ").pop().split("]").shift().toLowerCase()}function a(h){return h.toUpperCase()}function o(h){return h!=null?h instanceof Array?h:typeof h.length!="number"||h.split||h.setInterval||h.call?[h]:Array.prototype.slice.call(h):[]}function c(h,f){var g=h;if(f)for(var O in f)g[O]=f[O];return g}function l(h){var f="[A-Za-z]",g="[0-9]",O=n(g,"[A-Fa-f]"),I=s(s("%[EFef]"+O+"%"+O+O+"%"+O+O)+"|"+s("%[89A-Fa-f]"+O+"%"+O+O)+"|"+s("%"+O+O)),D="[\\:\\/\\?\\#\\[\\]\\@]",M="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",se=n(D,M),me=h?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",we=h?"[\\uE000-\\uF8FF]":"[]",te=n(f,g,"[\\-\\.\\_\\~]",me);s(f+n(f,g,"[\\+\\-\\.]")+"*"),s(s(I+"|"+n(te,M,"[\\:]"))+"*");var ue=s(s("25[0-5]")+"|"+s("2[0-4]"+g)+"|"+s("1"+g+g)+"|"+s("0?[1-9]"+g)+"|0?0?"+g),Ie=s(ue+"\\."+ue+"\\."+ue+"\\."+ue),H=s(O+"{1,4}"),ye=s(s(H+"\\:"+H)+"|"+Ie),Pe=s(s(H+"\\:")+"{6}"+ye),$e=s("\\:\\:"+s(H+"\\:")+"{5}"+ye),Pt=s(s(H)+"?\\:\\:"+s(H+"\\:")+"{4}"+ye),ot=s(s(s(H+"\\:")+"{0,1}"+H)+"?\\:\\:"+s(H+"\\:")+"{3}"+ye),ct=s(s(s(H+"\\:")+"{0,2}"+H)+"?\\:\\:"+s(H+"\\:")+"{2}"+ye),ar=s(s(s(H+"\\:")+"{0,3}"+H)+"?\\:\\:"+H+"\\:"+ye),Bt=s(s(s(H+"\\:")+"{0,4}"+H)+"?\\:\\:"+ye),Je=s(s(s(H+"\\:")+"{0,5}"+H)+"?\\:\\:"+H),lt=s(s(s(H+"\\:")+"{0,6}"+H)+"?\\:\\:"),Ut=s([Pe,$e,Pt,ot,ct,ar,Bt,Je,lt].join("|")),St=s(s(te+"|"+I)+"+");s("[vV]"+O+"+\\."+n(te,M,"[\\:]")+"+"),s(s(I+"|"+n(te,M))+"*");var Kr=s(I+"|"+n(te,M,"[\\:\\@]"));return s(s(I+"|"+n(te,M,"[\\@]"))+"+"),s(s(Kr+"|"+n("[\\/\\?]",we))+"*"),{NOT_SCHEME:new RegExp(n("[^]",f,g,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(n("[^\\%\\:]",te,M),"g"),NOT_HOST:new RegExp(n("[^\\%\\[\\]\\:]",te,M),"g"),NOT_PATH:new RegExp(n("[^\\%\\/\\:\\@]",te,M),"g"),NOT_PATH_NOSCHEME:new RegExp(n("[^\\%\\/\\@]",te,M),"g"),NOT_QUERY:new RegExp(n("[^\\%]",te,M,"[\\:\\@\\/\\?]",we),"g"),NOT_FRAGMENT:new RegExp(n("[^\\%]",te,M,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(n("[^]",te,M),"g"),UNRESERVED:new RegExp(te,"g"),OTHER_CHARS:new RegExp(n("[^\\%]",te,se),"g"),PCT_ENCODED:new RegExp(I,"g"),IPV4ADDRESS:new RegExp("^("+Ie+")$"),IPV6ADDRESS:new RegExp("^\\[?("+Ut+")"+s(s("\\%25|\\%(?!"+O+"{2})")+"("+St+")")+"?\\]?$")}}var p=l(!1),y=l(!0),m=function(){function h(f,g){var O=[],I=!0,D=!1,M=void 0;try{for(var se=f[Symbol.iterator](),me;!(I=(me=se.next()).done)&&(O.push(me.value),!(g&&O.length===g));I=!0);}catch(we){D=!0,M=we}finally{try{!I&&se.return&&se.return()}finally{if(D)throw M}}return O}return function(f,g){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return h(f,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),$=function(h){if(Array.isArray(h)){for(var f=0,g=Array(h.length);f<h.length;f++)g[f]=h[f];return g}else return Array.from(h)},P=2147483647,u=36,d=1,v=26,E=38,b=700,j=72,S=128,_="-",K=/^xn--/,Z=/[^\0-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,N={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=u-d,R=Math.floor,z=String.fromCharCode;function q(h){throw new RangeError(N[h])}function X(h,f){for(var g=[],O=h.length;O--;)g[O]=f(h[O]);return g}function le(h,f){var g=h.split("@"),O="";g.length>1&&(O=g[0]+"@",h=g[1]),h=h.replace(w,".");var I=h.split("."),D=X(I,f).join(".");return O+D}function pe(h){for(var f=[],g=0,O=h.length;g<O;){var I=h.charCodeAt(g++);if(I>=55296&&I<=56319&&g<O){var D=h.charCodeAt(g++);(D&64512)==56320?f.push(((I&1023)<<10)+(D&1023)+65536):(f.push(I),g--)}else f.push(I)}return f}var F=function(f){return String.fromCodePoint.apply(String,$(f))},ve=function(f){return f-48<10?f-22:f-65<26?f-65:f-97<26?f-97:u},We=function(f,g){return f+22+75*(f<26)-((g!=0)<<5)},be=function(f,g,O){var I=0;for(f=O?R(f/b):f>>1,f+=R(f/g);f>C*v>>1;I+=u)f=R(f/C);return R(I+(C+1)*f/(f+E))},Be=function(f){var g=[],O=f.length,I=0,D=S,M=j,se=f.lastIndexOf(_);se<0&&(se=0);for(var me=0;me<se;++me)f.charCodeAt(me)>=128&&q("not-basic"),g.push(f.charCodeAt(me));for(var we=se>0?se+1:0;we<O;){for(var te=I,ue=1,Ie=u;;Ie+=u){we>=O&&q("invalid-input");var H=ve(f.charCodeAt(we++));(H>=u||H>R((P-I)/ue))&&q("overflow"),I+=H*ue;var ye=Ie<=M?d:Ie>=M+v?v:Ie-M;if(H<ye)break;var Pe=u-ye;ue>R(P/Pe)&&q("overflow"),ue*=Pe}var $e=g.length+1;M=be(I-te,$e,te==0),R(I/$e)>P-D&&q("overflow"),D+=R(I/$e),I%=$e,g.splice(I++,0,D)}return String.fromCodePoint.apply(String,g)},Ue=function(f){var g=[];f=pe(f);var O=f.length,I=S,D=0,M=j,se=!0,me=!1,we=void 0;try{for(var te=f[Symbol.iterator](),ue;!(se=(ue=te.next()).done);se=!0){var Ie=ue.value;Ie<128&&g.push(z(Ie))}}catch(zr){me=!0,we=zr}finally{try{!se&&te.return&&te.return()}finally{if(me)throw we}}var H=g.length,ye=H;for(H&&g.push(_);ye<O;){var Pe=P,$e=!0,Pt=!1,ot=void 0;try{for(var ct=f[Symbol.iterator](),ar;!($e=(ar=ct.next()).done);$e=!0){var Bt=ar.value;Bt>=I&&Bt<Pe&&(Pe=Bt)}}catch(zr){Pt=!0,ot=zr}finally{try{!$e&&ct.return&&ct.return()}finally{if(Pt)throw ot}}var Je=ye+1;Pe-I>R((P-D)/Je)&&q("overflow"),D+=(Pe-I)*Je,I=Pe;var lt=!0,Ut=!1,St=void 0;try{for(var Kr=f[Symbol.iterator](),ro;!(lt=(ro=Kr.next()).done);lt=!0){var no=ro.value;if(no<I&&++D>P&&q("overflow"),no==I){for(var _n=D,An=u;;An+=u){var xn=An<=M?d:An>=M+v?v:An-M;if(_n<xn)break;var so=_n-xn,io=u-xn;g.push(z(We(xn+so%io,0))),_n=R(so/io)}g.push(z(We(_n,0))),M=be(D,Je,ye==H),D=0,++ye}}}catch(zr){Ut=!0,St=zr}finally{try{!lt&&Kr.return&&Kr.return()}finally{if(Ut)throw St}}++D,++I}return g.join("")},ce=function(f){return le(f,function(g){return K.test(g)?Be(g.slice(4).toLowerCase()):g})},Y=function(f){return le(f,function(g){return Z.test(g)?"xn--"+Ue(g):g})},ne={version:"2.1.0",ucs2:{decode:pe,encode:F},decode:Be,encode:Ue,toASCII:Y,toUnicode:ce},fe={};function he(h){var f=h.charCodeAt(0),g=void 0;return f<16?g="%0"+f.toString(16).toUpperCase():f<128?g="%"+f.toString(16).toUpperCase():f<2048?g="%"+(f>>6|192).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase():g="%"+(f>>12|224).toString(16).toUpperCase()+"%"+(f>>6&63|128).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase(),g}function Fe(h){for(var f="",g=0,O=h.length;g<O;){var I=parseInt(h.substr(g+1,2),16);if(I<128)f+=String.fromCharCode(I),g+=3;else if(I>=194&&I<224){if(O-g>=6){var D=parseInt(h.substr(g+4,2),16);f+=String.fromCharCode((I&31)<<6|D&63)}else f+=h.substr(g,6);g+=6}else if(I>=224){if(O-g>=9){var M=parseInt(h.substr(g+4,2),16),se=parseInt(h.substr(g+7,2),16);f+=String.fromCharCode((I&15)<<12|(M&63)<<6|se&63)}else f+=h.substr(g,9);g+=9}else f+=h.substr(g,3),g+=3}return f}function xe(h,f){function g(O){var I=Fe(O);return I.match(f.UNRESERVED)?I:O}return h.scheme&&(h.scheme=String(h.scheme).replace(f.PCT_ENCODED,g).toLowerCase().replace(f.NOT_SCHEME,"")),h.userinfo!==void 0&&(h.userinfo=String(h.userinfo).replace(f.PCT_ENCODED,g).replace(f.NOT_USERINFO,he).replace(f.PCT_ENCODED,a)),h.host!==void 0&&(h.host=String(h.host).replace(f.PCT_ENCODED,g).toLowerCase().replace(f.NOT_HOST,he).replace(f.PCT_ENCODED,a)),h.path!==void 0&&(h.path=String(h.path).replace(f.PCT_ENCODED,g).replace(h.scheme?f.NOT_PATH:f.NOT_PATH_NOSCHEME,he).replace(f.PCT_ENCODED,a)),h.query!==void 0&&(h.query=String(h.query).replace(f.PCT_ENCODED,g).replace(f.NOT_QUERY,he).replace(f.PCT_ENCODED,a)),h.fragment!==void 0&&(h.fragment=String(h.fragment).replace(f.PCT_ENCODED,g).replace(f.NOT_FRAGMENT,he).replace(f.PCT_ENCODED,a)),h}function rr(h){return h.replace(/^0*(.*)/,"$1")||"0"}function nr(h,f){var g=h.match(f.IPV4ADDRESS)||[],O=m(g,2),I=O[1];return I?I.split(".").map(rr).join("."):h}function Ur(h,f){var g=h.match(f.IPV6ADDRESS)||[],O=m(g,3),I=O[1],D=O[2];if(I){for(var M=I.toLowerCase().split("::").reverse(),se=m(M,2),me=se[0],we=se[1],te=we?we.split(":").map(rr):[],ue=me.split(":").map(rr),Ie=f.IPV4ADDRESS.test(ue[ue.length-1]),H=Ie?7:8,ye=ue.length-H,Pe=Array(H),$e=0;$e<H;++$e)Pe[$e]=te[$e]||ue[ye+$e]||"";Ie&&(Pe[H-1]=nr(Pe[H-1],f));var Pt=Pe.reduce(function(Je,lt,Ut){if(!lt||lt==="0"){var St=Je[Je.length-1];St&&St.index+St.length===Ut?St.length++:Je.push({index:Ut,length:1})}return Je},[]),ot=Pt.sort(function(Je,lt){return lt.length-Je.length})[0],ct=void 0;if(ot&&ot.length>1){var ar=Pe.slice(0,ot.index),Bt=Pe.slice(ot.index+ot.length);ct=ar.join(":")+"::"+Bt.join(":")}else ct=Pe.join(":");return D&&(ct+="%"+D),ct}else return h}var kn=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,jn="".match(/(){0}/)[1]===void 0;function vt(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g={},O=f.iri!==!1?y:p;f.reference==="suffix"&&(h=(f.scheme?f.scheme+":":"")+"//"+h);var I=h.match(kn);if(I){jn?(g.scheme=I[1],g.userinfo=I[3],g.host=I[4],g.port=parseInt(I[5],10),g.path=I[6]||"",g.query=I[7],g.fragment=I[8],isNaN(g.port)&&(g.port=I[5])):(g.scheme=I[1]||void 0,g.userinfo=h.indexOf("@")!==-1?I[3]:void 0,g.host=h.indexOf("//")!==-1?I[4]:void 0,g.port=parseInt(I[5],10),g.path=I[6]||"",g.query=h.indexOf("?")!==-1?I[7]:void 0,g.fragment=h.indexOf("#")!==-1?I[8]:void 0,isNaN(g.port)&&(g.port=h.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?I[4]:void 0)),g.host&&(g.host=Ur(nr(g.host,O),O)),g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==g.reference&&(g.error=g.error||"URI is not a "+f.reference+" reference.");var D=fe[(f.scheme||g.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!D||!D.unicodeSupport)){if(g.host&&(f.domainHost||D&&D.domainHost))try{g.host=ne.toASCII(g.host.replace(O.PCT_ENCODED,Fe).toLowerCase())}catch(M){g.error=g.error||"Host's domain name can not be converted to ASCII via punycode: "+M}xe(g,p)}else xe(g,O);D&&D.parse&&D.parse(g,f)}else g.error=g.error||"URI can not be parsed.";return g}function Up(h,f){var g=f.iri!==!1?y:p,O=[];return h.userinfo!==void 0&&(O.push(h.userinfo),O.push("@")),h.host!==void 0&&O.push(Ur(nr(String(h.host),g),g).replace(g.IPV6ADDRESS,function(I,D,M){return"["+D+(M?"%25"+M:"")+"]"})),(typeof h.port=="number"||typeof h.port=="string")&&(O.push(":"),O.push(String(h.port))),O.length?O.join(""):void 0}var Ka=/^\.\.?\//,za=/^\/\.(\/|$)/,Ja=/^\/\.\.(\/|$)/,Fp=/^\/?(?:.|\n)*?(?=\/|$)/;function sr(h){for(var f=[];h.length;)if(h.match(Ka))h=h.replace(Ka,"");else if(h.match(za))h=h.replace(za,"/");else if(h.match(Ja))h=h.replace(Ja,"/"),f.pop();else if(h==="."||h==="..")h="";else{var g=h.match(Fp);if(g){var O=g[0];h=h.slice(O.length),f.push(O)}else throw new Error("Unexpected dot segment condition")}return f.join("")}function it(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=f.iri?y:p,O=[],I=fe[(f.scheme||h.scheme||"").toLowerCase()];if(I&&I.serialize&&I.serialize(h,f),h.host&&!g.IPV6ADDRESS.test(h.host)){if(f.domainHost||I&&I.domainHost)try{h.host=f.iri?ne.toUnicode(h.host):ne.toASCII(h.host.replace(g.PCT_ENCODED,Fe).toLowerCase())}catch(se){h.error=h.error||"Host's domain name can not be converted to "+(f.iri?"Unicode":"ASCII")+" via punycode: "+se}}xe(h,g),f.reference!=="suffix"&&h.scheme&&(O.push(h.scheme),O.push(":"));var D=Up(h,f);if(D!==void 0&&(f.reference!=="suffix"&&O.push("//"),O.push(D),h.path&&h.path.charAt(0)!=="/"&&O.push("/")),h.path!==void 0){var M=h.path;!f.absolutePath&&(!I||!I.absolutePath)&&(M=sr(M)),D===void 0&&(M=M.replace(/^\/\//,"/%2F")),O.push(M)}return h.query!==void 0&&(O.push("?"),O.push(h.query)),h.fragment!==void 0&&(O.push("#"),O.push(h.fragment)),O.join("")}function Ga(h,f){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},O=arguments[3],I={};return O||(h=vt(it(h,g),g),f=vt(it(f,g),g)),g=g||{},!g.tolerant&&f.scheme?(I.scheme=f.scheme,I.userinfo=f.userinfo,I.host=f.host,I.port=f.port,I.path=sr(f.path||""),I.query=f.query):(f.userinfo!==void 0||f.host!==void 0||f.port!==void 0?(I.userinfo=f.userinfo,I.host=f.host,I.port=f.port,I.path=sr(f.path||""),I.query=f.query):(f.path?(f.path.charAt(0)==="/"?I.path=sr(f.path):((h.userinfo!==void 0||h.host!==void 0||h.port!==void 0)&&!h.path?I.path="/"+f.path:h.path?I.path=h.path.slice(0,h.path.lastIndexOf("/")+1)+f.path:I.path=f.path,I.path=sr(I.path)),I.query=f.query):(I.path=h.path,f.query!==void 0?I.query=f.query:I.query=h.query),I.userinfo=h.userinfo,I.host=h.host,I.port=h.port),I.scheme=h.scheme),I.fragment=f.fragment,I}function Vp(h,f,g){var O=c({scheme:"null"},g);return it(Ga(vt(h,O),vt(f,O),O,!0),O)}function Kp(h,f){return typeof h=="string"?h=it(vt(h,f),f):i(h)==="object"&&(h=vt(it(h,f),f)),h}function zp(h,f,g){return typeof h=="string"?h=it(vt(h,g),g):i(h)==="object"&&(h=it(h,g)),typeof f=="string"?f=it(vt(f,g),g):i(f)==="object"&&(f=it(f,g)),h===f}function Jp(h,f){return h&&h.toString().replace(!f||!f.iri?p.ESCAPE:y.ESCAPE,he)}function bt(h,f){return h&&h.toString().replace(!f||!f.iri?p.PCT_ENCODED:y.PCT_ENCODED,Fe)}var Fr={scheme:"http",domainHost:!0,parse:function(f,g){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f},serialize:function(f,g){var O=String(f.scheme).toLowerCase()==="https";return(f.port===(O?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}},Ha={scheme:"https",domainHost:Fr.domainHost,parse:Fr.parse,serialize:Fr.serialize};function Xa(h){return typeof h.secure=="boolean"?h.secure:String(h.scheme).toLowerCase()==="wss"}var Vr={scheme:"ws",domainHost:!0,parse:function(f,g){var O=f;return O.secure=Xa(O),O.resourceName=(O.path||"/")+(O.query?"?"+O.query:""),O.path=void 0,O.query=void 0,O},serialize:function(f,g){if((f.port===(Xa(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){var O=f.resourceName.split("?"),I=m(O,2),D=I[0],M=I[1];f.path=D&&D!=="/"?D:void 0,f.query=M,f.resourceName=void 0}return f.fragment=void 0,f}},Ya={scheme:"wss",domainHost:Vr.domainHost,parse:Vr.parse,serialize:Vr.serialize},Gp={},Wa="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",at="[0-9A-Fa-f]",Hp=s(s("%[EFef]"+at+"%"+at+at+"%"+at+at)+"|"+s("%[89A-Fa-f]"+at+"%"+at+at)+"|"+s("%"+at+at)),Xp="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",Yp="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",Wp=n(Yp,'[\\"\\\\]'),Qp="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",Zp=new RegExp(Wa,"g"),ir=new RegExp(Hp,"g"),eu=new RegExp(n("[^]",Xp,"[\\.]",'[\\"]',Wp),"g"),Qa=new RegExp(n("[^]",Wa,Qp),"g"),tu=Qa;function Ms(h){var f=Fe(h);return f.match(Zp)?f:h}var Za={scheme:"mailto",parse:function(f,g){var O=f,I=O.to=O.path?O.path.split(","):[];if(O.path=void 0,O.query){for(var D=!1,M={},se=O.query.split("&"),me=0,we=se.length;me<we;++me){var te=se[me].split("=");switch(te[0]){case"to":for(var ue=te[1].split(","),Ie=0,H=ue.length;Ie<H;++Ie)I.push(ue[Ie]);break;case"subject":O.subject=bt(te[1],g);break;case"body":O.body=bt(te[1],g);break;default:D=!0,M[bt(te[0],g)]=bt(te[1],g);break}}D&&(O.headers=M)}O.query=void 0;for(var ye=0,Pe=I.length;ye<Pe;++ye){var $e=I[ye].split("@");if($e[0]=bt($e[0]),g.unicodeSupport)$e[1]=bt($e[1],g).toLowerCase();else try{$e[1]=ne.toASCII(bt($e[1],g).toLowerCase())}catch(Pt){O.error=O.error||"Email address's domain name can not be converted to ASCII via punycode: "+Pt}I[ye]=$e.join("@")}return O},serialize:function(f,g){var O=f,I=o(f.to);if(I){for(var D=0,M=I.length;D<M;++D){var se=String(I[D]),me=se.lastIndexOf("@"),we=se.slice(0,me).replace(ir,Ms).replace(ir,a).replace(eu,he),te=se.slice(me+1);try{te=g.iri?ne.toUnicode(te):ne.toASCII(bt(te,g).toLowerCase())}catch(ye){O.error=O.error||"Email address's domain name can not be converted to "+(g.iri?"Unicode":"ASCII")+" via punycode: "+ye}I[D]=we+"@"+te}O.path=I.join(",")}var ue=f.headers=f.headers||{};f.subject&&(ue.subject=f.subject),f.body&&(ue.body=f.body);var Ie=[];for(var H in ue)ue[H]!==Gp[H]&&Ie.push(H.replace(ir,Ms).replace(ir,a).replace(Qa,he)+"="+ue[H].replace(ir,Ms).replace(ir,a).replace(tu,he));return Ie.length&&(O.query=Ie.join("&")),O}},ru=/^([^\:]+)\:(.*)/,eo={scheme:"urn",parse:function(f,g){var O=f.path&&f.path.match(ru),I=f;if(O){var D=g.scheme||I.scheme||"urn",M=O[1].toLowerCase(),se=O[2],me=D+":"+(g.nid||M),we=fe[me];I.nid=M,I.nss=se,I.path=void 0,we&&(I=we.parse(I,g))}else I.error=I.error||"URN can not be parsed.";return I},serialize:function(f,g){var O=g.scheme||f.scheme||"urn",I=f.nid,D=O+":"+(g.nid||I),M=fe[D];M&&(f=M.serialize(f,g));var se=f,me=f.nss;return se.path=(I||g.nid)+":"+me,se}},nu=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,to={scheme:"urn:uuid",parse:function(f,g){var O=f;return O.uuid=O.nss,O.nss=void 0,!g.tolerant&&(!O.uuid||!O.uuid.match(nu))&&(O.error=O.error||"UUID is not valid."),O},serialize:function(f,g){var O=f;return O.nss=(f.uuid||"").toLowerCase(),O}};fe[Fr.scheme]=Fr,fe[Ha.scheme]=Ha,fe[Vr.scheme]=Vr,fe[Ya.scheme]=Ya,fe[Za.scheme]=Za,fe[eo.scheme]=eo,fe[to.scheme]=to,r.SCHEMES=fe,r.pctEncChar=he,r.pctDecChars=Fe,r.parse=vt,r.removeDotSegments=sr,r.serialize=it,r.resolveComponents=Ga,r.resolve=Vp,r.normalize=Kp,r.equal=zp,r.escapeComponent=Jp,r.unescapeComponent=bt,Object.defineProperty(r,"__esModule",{value:!0})})})(Pi,Pi.exports);const br=Pi.exports,Sd=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,wd={null:t=>t===null,boolean:t=>typeof t=="boolean",object:Sd,array:t=>Array.isArray(t),number:t=>typeof t=="number",integer:t=>Number.isInteger(t),string:t=>typeof t=="string"},Id=(t,e)=>wd[e](t),Ed=(t,e)=>{const r=br.resolve(t,e,{iri:!0});if(br.resolve(t,"",{iri:!0})&&br.parse(r).scheme==="file"&&br.parse(t).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${t}'`);return r},Od=t=>br.unescapeComponent(br.parse(t).fragment)||"",Gr=47,Pd=(t,e)=>{if(t===e)return"";let r=1;const n=t.length-1,s=e.length-r,i=n<s?n:s;let a=-1,o=0;for(;o<i;o++){const l=t.charCodeAt(o+1);if(l!==e.charCodeAt(r+o))break;l===Gr&&(a=o)}if(s>i){if(e.charCodeAt(r+o)===Gr)return e.slice(r+o+1);if(o===0)return e.slice(r+o)}n>i&&(t.charCodeAt(o+1)===Gr?a=o:i===0&&(a=0));let c="";for(o=a+2;o<=t.length;++o)(o===t.length||t.charCodeAt(o)===Gr)&&(c+=c.length===0?"..":"/..");return r+=a,c.length>0?`${c}${e.slice(r,e.length)}`:(e.charCodeAt(r)===Gr&&++r,e.slice(r,e.length))};var ca={jsonTypeOf:Id,resolveUrl:Ed,urlFragment:Od,pathRelative:Pd};const la=$t,$n="",gn=t=>{if(t.length>0&&t[0]!=="/")throw Error("Invalid JSON Pointer");return t.split("/").slice(1).map(Cd)},kd=(t,e=void 0)=>{const r=gn(t),n=s=>r.reduce(([i,a],o)=>[Rt(i,o,a),Tr(o,a)],[s,""])[0];return e===void 0?n:n(e)},jd=(t,e=void 0,r=void 0)=>{const n=gn(t),s=la((i,a)=>pf(n,i,a,$n));return e===void 0?s:s(e,r)},pf=(t,e,r,n)=>{if(t.length===0)return r;if(t.length>1){const s=t.shift();return{...e,[s]:pf(t,Rt(e,s,n),r,Tr(s,n))}}else if(Array.isArray(e)){const s=[...e],i=fa(e,t[0]);return s[i]=r,s}else return typeof e=="object"&&e!==null?{...e,[t[0]]:r}:Rt(e,t[0],n)},_d=(t,e=void 0,r=void 0)=>{const n=gn(t),s=la((i,a)=>uf(n,i,a,$n));return e===void 0?s:s(e,r)},uf=(t,e,r,n)=>{if(t.length!==0)if(t.length===1&&!hf(e)){const s=fa(e,t[0]);e[s]=r}else{const s=t.shift();uf(t,Rt(e,s,n),r,Tr(s,n))}},Ad=(t,e=void 0)=>{const r=gn(t),n=s=>df(r,s,$n);return e===void 0?n:n(e)},df=(t,e,r)=>{if(t.length!=0)if(t.length>1){const n=t.shift(),s=Rt(e,n,r);return{...e,[n]:df(t,s,Tr(n,r))}}else{if(Array.isArray(e))return e.filter((n,s)=>s!=t[0]);if(typeof e=="object"&&e!==null){const{[t[0]]:n,...s}=e;return s}else return Rt(e,t[0],r)}},xd=(t,e=void 0)=>{const r=gn(t),n=s=>mf(r,s,$n);return e===void 0?n:n(e)},mf=(t,e,r)=>{if(t.length!==0)if(t.length>1){const n=t.shift(),s=Rt(e,n,r);mf(t,s,Tr(n,r))}else Array.isArray(e)?e.splice(t[0],1):typeof e=="object"&&e!==null?delete e[t[0]]:Rt(e,t[0],r)},Tr=la((t,e)=>e+"/"+Nd(t)),Nd=t=>t.toString().replace(/~/g,"~0").replace(/\//g,"~1"),Cd=t=>t.toString().replace(/~1/g,"/").replace(/~0/g,"~"),fa=(t,e)=>Array.isArray(t)&&e==="-"?t.length:e,Rt=(t,e,r="")=>{if(t===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${e}'`);if(t===null)throw TypeError(`Value at '${r}' is null and does not have property '${e}'`);if(hf(t))throw TypeError(`Value at '${r}' is a ${typeof t} and does not have property '${e}'`);{const n=fa(t,e);return t[n]}},hf=t=>t===null||typeof t!="object";var yf={nil:$n,append:Tr,get:kd,set:jd,assign:_d,unset:Ad,remove:xd};const $f=Symbol("$__value"),pa=Symbol("$__href"),Td=(t,e)=>Object.freeze({[pa]:t,[$f]:e}),Rd=t=>t&&t[pa]!==void 0,qd=t=>t[pa],Dd=t=>t[$f];var ua={cons:Td,isReference:Rd,href:qd,value:Dd};const Ld=yf,Rr=$t,{resolveUrl:Md,jsonTypeOf:Bd}=ca,bo=ua,gf=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),Ud=(t,e="")=>Object.freeze({...gf,id:Md(e,""),instance:t,value:t}),Fd=t=>`${t.id}#${encodeURI(t.pointer)}`,Ye=t=>bo.isReference(t.value)?bo.value(t.value):t.value,Vd=(t,e)=>t in Ye(e),Kd=Rr((t,e)=>Bd(Ye(t),e)),Zt=(t,e)=>Object.freeze({...e,pointer:Ld.append(t,e.pointer),value:Ye(e)[t]}),zd=t=>Object.keys(Ye(t)).map(e=>[e,Zt(e,t)]),Jd=t=>Object.keys(Ye(t)),Gd=Rr((t,e)=>Ye(e).map((r,n,s,i)=>t(Zt(n,e),n,s,i))),Hd=Rr((t,e)=>Ye(e).map((r,n,s,i)=>Zt(n,e)).filter((r,n,s,i)=>t(r,n,s,i))),Xd=Rr((t,e,r)=>Ye(r).reduce((n,s,i)=>t(n,Zt(i,r),i),e)),Yd=Rr((t,e)=>Ye(e).every((r,n,s,i)=>t(Zt(n,e),n,s,i))),Wd=Rr((t,e)=>Ye(e).some((r,n,s,i)=>t(Zt(n,e),n,s,i))),Qd=t=>Ye(t).length;var da={nil:gf,cons:Ud,uri:Fd,value:Ye,has:Vd,typeOf:Kd,step:Zt,entries:zd,keys:Jd,map:Gd,filter:Hd,reduce:Xd,every:Yd,some:Wd,length:Qd},ma={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var So=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Zd=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,vf=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,em=/\\([\u000b\u0020-\u00ff])/g,tm=/([\\"])/g,bf=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;ma.format=rm;ma.parse=nm;function rm(t){if(!t||typeof t!="object")throw new TypeError("argument obj is required");var e=t.parameters,r=t.type;if(!r||!bf.test(r))throw new TypeError("invalid type");var n=r;if(e&&typeof e=="object")for(var s,i=Object.keys(e).sort(),a=0;a<i.length;a++){if(s=i[a],!vf.test(s))throw new TypeError("invalid parameter name");n+="; "+s+"="+im(e[s])}return n}function nm(t){if(!t)throw new TypeError("argument string is required");var e=typeof t=="object"?sm(t):t;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var r=e.indexOf(";"),n=r!==-1?e.substr(0,r).trim():e.trim();if(!bf.test(n))throw new TypeError("invalid media type");var s=new am(n.toLowerCase());if(r!==-1){var i,a,o;for(So.lastIndex=r;a=So.exec(e);){if(a.index!==r)throw new TypeError("invalid parameter format");r+=a[0].length,i=a[1].toLowerCase(),o=a[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace(em,"$1")),s.parameters[i]=o}if(r!==e.length)throw new TypeError("invalid parameter format")}return s}function sm(t){var e;if(typeof t.getHeader=="function"?e=t.getHeader("content-type"):typeof t.headers=="object"&&(e=t.headers&&t.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function im(t){var e=String(t);if(vf.test(e))return e;if(e.length>0&&!Zd.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(tm,"\\$1")+'"'}function am(t){this.parameters=Object.create(null),this.type=t}var Sf=async t=>Object.entries(await t);const om=$t;var ha=om(async(t,e)=>(await e).map(t));const cm=$t;var ya=cm(async(t,e,r)=>(await r).reduce(async(n,s)=>t(await n,s),e));const lm=$t,fm=ya;var pm=lm(async(t,e,r={})=>fm(async(n,s)=>await t(s)?n.concat([s]):n,[],e,r));const um=$t,dm=ha;var mm=um(async(t,e)=>{const r=await dm(t,e);return(await Promise.all(r)).some(n=>n)});const hm=$t,ym=ha;var $m=hm(async(t,e)=>{const r=await ym(t,e);return(await Promise.all(r)).every(n=>n)});const gm=$t;var wf=gm((t,e)=>t.reduce(async(r,n)=>n(await r),e)),vm=t=>Promise.all(t);const bm=wf,Sm=Sf,wm=ya;var Im=t=>bm([Sm,wm(async(e,[r,n])=>(e[r]=await n,e),{})],t),Oe={entries:Sf,map:ha,filter:pm,reduce:ya,some:mm,every:$m,pipeline:wf,all:vm,allValues:Im},Em=fetch;const Om=ma,Pm=$t,Ir=Oe,mt=yf,{jsonTypeOf:$a,resolveUrl:Ot,urlFragment:ga,pathRelative:km}=ca,jm=Em,It=ua,Hr="https://json-schema.org/draft/2019-09/vocab/core",Xr="https://json-schema.org/draft/2020-12/vocab/core",an={},Qe={},_m=(t,e,r)=>{an[t]||(an[t]={}),an[t][e]=r},Ne=(t,e)=>{var n;const r=Qe[t];return(n=an[r])==null?void 0:n[e]},Kt={},va={},ba=(t,e="",r="")=>{var P,u;t=JSON.parse(JSON.stringify(t));const n=Ot(e,""),s=Ot(t.$schema||r,"");if(!s)throw Error("Couldn't determine schema dialect");if(delete t.$schema,!(s in Qe))if(((P=t==null?void 0:t.$vocabulary)==null?void 0:P[Hr])===!0&&s===Dn(t,n,Hr)[0])Qe[s]=Hr;else if(((u=t==null?void 0:t.$vocabulary)==null?void 0:u[Xr])===!0&&s===Dn(t,n,Xr)[0])Qe[s]=Xr;else if(s===Dn(t,n,s)[0])Qe[s]=s;else if(s in Kt){const d=Kt[s];d.vocabulary[Hr]===!0?Qe[s]=Hr:d.vocabulary[Xr]===!0?Qe[s]=Xr:Qe[s]=Qe[d.dialectId]}else throw Error(`Couldn't determine JSON Schema version for dialect: '${s}'`);const[i,a]=Dn(t,n,Qe[s]);if(!i)throw Error("Couldn't determine an identifier for the schema");const o=Ne(s,"baseToken");delete t[o],n&&(va[n]=i);const c=Ne(s,"anchorToken");a&&o===c&&(t[c]=c!==o?encodeURI(a):`#${encodeURI(a)}`);const l={},p=Ne(s,"recursiveAnchorToken");t[p]===!0&&(l[""]=`${i}#`,t[c]="",delete t[p]);let y;const m=Ne(s,"vocabularyToken");$a(t[m],"object")?(y=t[m],delete t[m]):y={[Qe[s]]:!0};const $={"":""};return Kt[i]={id:i,dialectId:s,schema:ki(t,i,s,mt.nil,$,l),anchors:$,dynamicAnchors:l,vocabulary:y,validated:!1},i},Dn=(t,e,r)=>{var i;const n=(i=an[r])==null?void 0:i.baseToken,s=Ot(e,t[n]||"");return[Ot(s,""),ga(s)]},ki=(t,e,r,n,s,i)=>{if($a(t,"object")){const a=typeof t.$schema=="string"?Ot(t.$schema,""):r,o=Ne(a,"embeddedToken"),c=Ne(a,"anchorToken");if(typeof t[o]=="string"&&(o!==c||t[o][0]!=="#")){const $=Ot(e,t[o]),P=Ne(a,"baseToken");return t[P]=$,ba(t,$,r),It.cons(t[o],t)}const l=Ne(r,"anchorToken"),p=Ne(r,"dynamicAnchorToken");typeof t[p]=="string"&&(i[t[p]]=`${e}#${encodeURI(n)}`,s[t[p]]=n,delete t[p]);const y=Ne(r,"embeddedToken");if(typeof t[l]=="string"){const $=l!==y?t[l]:t[l].slice(1);s[$]=n,delete t[l]}const m=Ne(r,"jrefToken");if(typeof t[m]=="string")return It.cons(t[m],t);for(const $ in t)t[$]=ki(t[$],e,r,mt.append($,n),s,i);return t}else return Array.isArray(t)?t.map((a,o)=>ki(a,e,r,mt.append(o,n),s,i)):t},Am=t=>t in Kt||t in va,If=t=>Kt[va[t]]||Kt[t],xm=t=>{Kt[t].validated=!0},Nm=Object.freeze({id:"",dialectId:void 0,vocabulary:{},pointer:mt.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),Ef=async(t,e=Nm)=>{const r=Ot(kf(e),t),n=Ot(r,""),s=ga(r);if(!Am(n)){const c=await jm(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);if(c.headers.has("content-type")){const l=Om.parse(c.headers.get("content-type")).type;if(l!=="application/schema+json")throw Error(`${n} is not a schema. Found a document with media type: ${l}`)}ba(await c.json(),n)}const i=If(n),a=s[0]!=="/"?Pf(i,s):s,o=Object.freeze({...i,pointer:a,value:mt.get(a,i.schema)});return Of(o)},Of=t=>It.isReference(t.value)?Ef(It.href(t.value),t):t,Pf=(t,e)=>{if(!(e in t.anchors))throw Error(`No such anchor '${encodeURI(t.id)}#${encodeURI(e)}'`);return t.anchors[e]},kf=t=>`${t.id}#${encodeURI(t.pointer)}`,Mt=t=>It.isReference(t.value)?It.value(t.value):t.value,Cm=(t,e)=>t in Mt(e),Tm=(t,e)=>$a(Mt(t),e),Sa=(t,e)=>{const r=If(e.id),n=Object.freeze({...e,pointer:mt.append(t,e.pointer),value:Mt(e)[t],validated:r.validated});return Of(n)},Rm=t=>Object.keys(Mt(t)),qm=t=>Ir.pipeline([Mt,Object.keys,Ir.map(async e=>[e,await Sa(e,t)]),Ir.all],t),Dm=Pm((t,e)=>Ir.pipeline([Mt,Ir.map(async(r,n)=>t(await Sa(n,e),n)),Ir.all],e)),Lm=t=>Mt(t).length,Mm={parentId:"",parentDialect:"",includeEmbedded:!0},Bm=(t,e={})=>{const r={...Mm,...e},n=JSON.parse(JSON.stringify(t.schema,(l,p)=>{if(!It.isReference(p))return p;const y=It.value(p),m=typeof y.$schema=="string"?Ot(y.$schema,""):t.dialectId,$=Ne(m,"embeddedToken");if(!(!r.includeEmbedded&&$ in y))return It.value(p)})),s=Ne(t.dialectId,"dynamicAnchorToken");Object.entries(t.dynamicAnchors).forEach(([l,p])=>{const y=ga(p);mt.assign(y,n,{[s]:l,...mt.get(y,n)})});const i=Ne(t.dialectId,"anchorToken");Object.entries(t.anchors).filter(([l])=>l!=="").forEach(([l,p])=>{mt.assign(p,n,{[i]:l,...mt.get(p,n)})});const a=Ne(t.dialectId,"baseToken"),o=Um(r.parentId,t.id),c=r.parentDialect===t.dialectId?"":t.dialectId;return{...o&&{[a]:o},...c&&{$schema:c},...n}},Um=(t,e)=>{if(e.startsWith("file://")){const r=t.slice(7,t.lastIndexOf("/"));return t===""?"":km(r,e.slice(7))}else return e};var Ps={setConfig:_m,getConfig:Ne,add:ba,get:Ef,markValidated:xm,uri:kf,value:Mt,getAnchorPointer:Pf,typeOf:Tm,has:Cm,step:Sa,keys:Rm,entries:qm,map:Dm,length:Lm,toSchema:Bm};class Fm extends Error{constructor(e){super("Invalid Schema"),this.name=this.constructor.name,this.output=e}}var jf=Fm;const Vm=$t,wo=os.exports,{resolveUrl:Km}=ca,_f=da,xt=Ps,zm=jf,cs="FLAG",wa="BASIC",Ia="DETAILED",Ea="VERBOSE";let Af=Ia,xf=!0;const Jm=async(t,e=void 0,r=void 0)=>{const n=await Oa(t),s=(i,a)=>Pa(n,_f.cons(i),a);return e===void 0?s:s(e,r)},Oa=async t=>{const e={metaData:{}},r=await Cf(t,e);return{ast:e,schemaUri:r}},Pa=Vm(({ast:t,schemaUri:e},r,n=cs)=>{if(![cs,wa,Ia,Ea].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],i=wo.subscribe("result",Gm(n,s));return Rf(e,r,t,{}),wo.unsubscribe(i),s[0]}),Gm=(t,e)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c}=s,l={keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const i=r.pop();for(;r[r.length-1]!=="result.start";){const a=r.pop(),o=[a];t===wa&&(o.push(...a.errors),delete a.errors),(t===Ea||t!==cs&&!a.valid)&&i.errors.unshift(...o)}r[r.length-1]=i,e[0]=i}}},Hm=t=>{Af=t},Xm=t=>{xf=t},ka={},vn=t=>ka[t],Nf=t=>t in ka,Ym=(t,e)=>{ka[t]={collectEvaluatedItems:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&new Set,collectEvaluatedProperties:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&[],...e}},ji={},Wm=(t,e)=>{ji[t]=e},Hn={},Cf=async(t,e)=>{if(t=await Tf(t),!Nf(`${t.dialectId}#validate`)){const r=await xt.get(t.dialectId);(xt.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,i])=>{if(s in ji)Object.entries(ji[s]).forEach(([a,o])=>{Ym(`${r.id}#${a}`,o)});else if(i)throw Error(`Missing required vocabulary: ${s}`)})}if(xf&&!t.validated){if(xt.markValidated(t.id),!(t.dialectId in Hn)){const s=await xt.get(t.dialectId),i=await Oa(s);Hn[s.id]=Pa(i)}const r=_f.cons(t.schema,t.id),n=Hn[t.dialectId](r,Af);if(!n.valid)throw new zm(n)}return t.id in e.metaData||(e.metaData[t.id]={id:t.id,dynamicAnchors:t.dynamicAnchors,anchors:t.anchors}),vn(`${t.dialectId}#validate`).compile(t,e)},Tf=async t=>xt.typeOf(t,"string")?Tf(await xt.get(xt.value(t),t)):t,Rf=(t,e,r,n)=>{const s=ja(t,r),i=Km(t,"");return vn(s).interpret(t,e,r,{...r.metaData[i].dynamicAnchors,...n})},Qm=(t,e,r,n,s)=>{const i=ja(t,r);return vn(i).collectEvaluatedProperties(t,e,r,n,s)},Zm=(t,e,r,n,s)=>{const i=ja(t,r);return vn(i).collectEvaluatedItems(t,e,r,n,s)},ja=(t,e)=>{if(!(t in e))throw Error(`No schema found at ${t}`);return e[t][0]},eh=(t,e="",r="")=>{const n=xt.add(t,e,r);delete Hn[n]};var qf={validate:Jm,compile:Oa,interpret:Pa,setMetaOutputFormat:Hm,setShouldMetaValidate:Xm,FLAG:cs,BASIC:wa,DETAILED:Ia,VERBOSE:Ea,add:eh,getKeyword:vn,hasKeyword:Nf,defineVocabulary:Wm,compileSchema:Cf,interpretSchema:Rf,collectEvaluatedProperties:Qm,collectEvaluatedItems:Zm};const th=Ps,rh=t=>th.value(t),nh=()=>!0;var sh={compile:rh,interpret:nh};const Yr=Oe,lr=os.exports,fn=qf,Io=da,fr=Ps,ih=async(t,e)=>{const r=fr.uri(t);if(!(r in e)){e[r]=!1;const n=fr.value(t);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${fr.uri(t)}'`);e[r]=[`${t.dialectId}#validate`,fr.uri(t),typeof n=="boolean"?n:await Yr.pipeline([fr.entries,Yr.map(([s,i])=>[`${t.dialectId}#${s}`,i]),Yr.filter(([s])=>fn.hasKeyword(s)&&s!==`${t.dialectId}#validate`),Yr.map(async([s,i])=>{const a=await fn.getKeyword(s).compile(i,e,t);return[s,fr.uri(i),a]}),Yr.all],t)]}return r},ah=(t,e,r,n)=>{const[s,i,a]=r[t];lr.publishSync("result.start");const o=typeof a=="boolean"?a:a.every(([c,l,p])=>{lr.publishSync("result.start");const y=fn.getKeyword(c).interpret(p,e,r,n);return lr.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:Io.uri(e),valid:y,ast:p}),lr.publishSync("result.end"),y});return lr.publishSync("result",{keyword:s,absoluteKeywordLocation:i,instanceLocation:Io.uri(e),valid:o,ast:t}),lr.publishSync("result.end"),o},oh=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?[]:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedProperties")).reduce((a,[o,,c])=>{const l=a&&fn.getKeyword(o).collectEvaluatedProperties(c,e,r,n);return l!==!1&&[...a,...l]},[])},ch=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?new Set:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedItems")).reduce((a,[o,,c])=>{const l=a!==!1&&fn.getKeyword(o).collectEvaluatedItems(c,e,r,n);return l!==!1&&new Set([...a,...l])},new Set)};var lh={compile:ih,interpret:ah,collectEvaluatedProperties:oh,collectEvaluatedItems:ch};const fh=sh,ph=lh;var uh={metaData:fh,validate:ph};const dh=qf,mh=Ps,hh=da,yh=ua,$h=uh,gh=jf;var k={Core:dh,Schema:mh,Instance:hh,Reference:yh,Keywords:$h,InvalidSchemaError:gh};const{Core:Df,Schema:Wr,Instance:Gs}=k,vh=async(t,e,r)=>{const n=await Wr.step("items",r),s=Wr.typeOf(n,"array")?Wr.length(n):Number.MAX_SAFE_INTEGER;return Wr.typeOf(t,"boolean")?[s,Wr.value(t)]:[s,await Df.compileSchema(t,e)]},bh=([t,e],r,n,s)=>Gs.typeOf(r,"array")?typeof e=="string"?Gs.every((i,a)=>a<t||Df.interpretSchema(e,i,n,s),r):Gs.every((i,a)=>a<t?!0:e,r):!0;var Sh={compile:vh,interpret:bh};const{Core:Lf,Schema:Hs,Instance:_i}=k,wh=async(t,e,r)=>{const n=await Hs.step("items",r);return[Hs.typeOf(n,"array")?Hs.length(n):Number.MAX_SAFE_INTEGER,await Lf.compileSchema(t,e)]},Mf=([t,e],r,n,s)=>_i.typeOf(r,"array")?_i.every((i,a)=>a<t||Lf.interpretSchema(e,i,n,s),r):!0,Ih=(t,e,r,n)=>Mf(t,e,r,n)&&new Set(_i.map((s,i)=>i,e));var Eh={compile:wh,interpret:Mf,collectEvaluatedItems:Ih};const{Core:Bf,Schema:kt,Instance:Eo}=k,Oh=async(t,e,r)=>{const n=await kt.step("properties",r),s=kt.typeOf(n,"object")?kt.keys(n):[],i=await kt.step("patternProperties",r),a=kt.typeOf(i,"object")?kt.keys(i).map(o=>new RegExp(o)):[];return kt.typeOf(t,"boolean")?[s,a,kt.value(t)]:[s,a,await Bf.compileSchema(t,e)]},Ph=([t,e,r],n,s,i)=>{if(!Eo.typeOf(n,"object"))return!0;const a=Eo.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>Bf.interpretSchema(r,o,s,i)):a.length===0||r};var kh={compile:Oh,interpret:Ph};const{Core:Uf,Schema:pr,Instance:Oo}=k,jh=async(t,e,r)=>{const n=await pr.step("properties",r),s=pr.typeOf(n,"object")?pr.keys(n):[],i=await pr.step("patternProperties",r),a=pr.typeOf(i,"object")?pr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await Uf.compileSchema(t,e)]},Ff=([t,e,r],n,s,i)=>Oo.typeOf(n,"object")?Oo.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>Uf.interpretSchema(r,a,s,i)):!0,_h=(t,e,r,n)=>Ff(t,e,r,n)&&[new RegExp("")];var Ah={compile:jh,interpret:Ff,collectEvaluatedProperties:_h};const{Core:ks,Schema:xh}=k,Po=Oe,Nh=(t,e)=>Po.pipeline([xh.map(async r=>ks.compileSchema(await r,e)),Po.all],t),Ch=(t,e,r,n)=>t.every(s=>ks.interpretSchema(s,e,r,n)),Th=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&ks.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),Rh=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&ks.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var qh={compile:Nh,interpret:Ch,collectEvaluatedProperties:Th,collectEvaluatedItems:Rh};const{Core:js,Schema:Dh}=k,ko=Oe,Lh=(t,e)=>ko.pipeline([Dh.map(async r=>js.compileSchema(await r,e)),ko.all],t),Mh=(t,e,r,n)=>t.filter(i=>js.interpretSchema(i,e,r,n)).length>0,Bh=(t,e,r,n)=>t.reduce((s,i)=>{const a=js.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),Uh=(t,e,r,n)=>t.reduce((s,i)=>{const a=js.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var Fh={compile:Lh,interpret:Mh,collectEvaluatedProperties:Bh,collectEvaluatedItems:Uh},Vh=Object.keys,jo=JSON.stringify;function rn(t,e){var r,n,s,i,a,o,c;if(c=typeof t,c==="string")return jo(t);if(t===!0)return"true";if(t===!1)return"false";if(t===null)return"null";if(t instanceof Array){for(s="[",n=t.length-1,r=0;r<n;r++)s+=rn(t[r],!1)+",";return n>-1&&(s+=rn(t[r],!1)),s+"]"}if(t instanceof Object){if(typeof t.toJSON=="function")return rn(t.toJSON(),e);for(i=Vh(t).sort(),n=i.length,s="",r=0;r<n;)a=i[r],o=rn(t[a],!0),o!==void 0&&(r&&s!==""&&(s+=","),s+=jo(a)+":"+o),r++;return"{"+s+"}"}switch(c){case"function":case"undefined":return e?void 0:null;default:return isFinite(t)?t:null}}var qr=function(t){return""+rn(t,!1)};const{Schema:Kh,Instance:zh}=k,Vf=qr,Jh=t=>Vf(Kh.value(t)),Gh=(t,e)=>Vf(zh.value(e))===t;var Hh={compile:Jh,interpret:Gh};const{Core:Kf,Instance:_o}=k,Xh=(t,e)=>Kf.compileSchema(t,e),Yh=(t,e,r,n)=>!_o.typeOf(e,"array")||_o.some(s=>Kf.interpretSchema(t,s,r,n),e);var Wh={compile:Xh,interpret:Yh};const{Core:_a,Schema:ur,Instance:Ai}=k,Qh=async(t,e,r)=>{const n=await _a.compileSchema(t,e),s=await ur.step("minContains",r),i=ur.typeOf(s,"number")?ur.value(s):1,a=await ur.step("maxContains",r),o=ur.typeOf(a,"number")?ur.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},zf=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Ai.typeOf(n,"array"))return!0;const a=Ai.reduce((o,c)=>_a.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},Zh=(t,e,r,n)=>zf(t,e,r,n)&&Ai.reduce((s,i,a)=>_a.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var ey={compile:Qh,interpret:zf,collectEvaluatedItems:Zh};const{Core:ty,Schema:ry}=k,Xs=Oe,ny=async(t,e)=>{await Xs.pipeline([ry.entries,Xs.map(([,r])=>ty.compileSchema(r,e)),Xs.all],t)},sy=()=>!0;var iy={compile:ny,interpret:sy};const{Core:Jf,Schema:Ys,Instance:Ao}=k,Ws=Oe,ay=(t,e)=>Ws.pipeline([Ys.entries,Ws.map(async([r,n])=>[r,Ys.typeOf(n,"array")?Ys.value(n):await Jf.compileSchema(n,e)]),Ws.all],t),oy=(t,e,r,n)=>{const s=Ao.value(e);return!Ao.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):Jf.interpretSchema(a,e,r,n):!0)};var cy={compile:ay,interpret:oy};const{Schema:xo,Instance:No}=k,Qs=Oe,ly=t=>Qs.pipeline([xo.entries,Qs.map(([e,r])=>[e,xo.value(r)]),Qs.all],t),fy=(t,e)=>{const r=No.value(e);return!No.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var py={compile:ly,interpret:fy};const{Core:Aa,Schema:uy,Instance:xi}=k,Zs=Oe,dy=(t,e)=>Zs.pipeline([uy.entries,Zs.map(async([r,n])=>[r,await Aa.compileSchema(n,e)]),Zs.all],t),my=(t,e,r,n)=>{const s=xi.value(e);return!xi.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||Aa.interpretSchema(a,e,r,n))},hy=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!xi.has(i,e))return s;const o=Aa.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var yy={compile:dy,interpret:my,collectEvaluatedProperties:hy};const{Schema:$y,Instance:gy}=k,Gf=qr,vy=t=>$y.value(t).map(Gf),by=(t,e)=>t.some(r=>Gf(gy.value(e))===r);var Sy={compile:vy,interpret:by};const{Schema:wy,Instance:Co}=k,Iy=async t=>wy.value(t),Ey=(t,e)=>!Co.typeOf(e,"number")||Co.value(e)<t;var Oy={compile:Iy,interpret:Ey};const{Schema:Py,Instance:To}=k,ky=async t=>Py.value(t),jy=(t,e)=>!To.typeOf(e,"number")||To.value(e)>t;var _y={compile:ky,interpret:jy};const{Core:_s}=k,Ay=(t,e)=>_s.compileSchema(t,e),xy=(t,e,r,n)=>(_s.interpretSchema(t,e,r,n),!0),Ny=(t,e,r,n)=>_s.collectEvaluatedProperties(t,e,r,n)||[],Cy=(t,e,r,n)=>_s.collectEvaluatedItems(t,e,r,n)||new Set;var Ty={compile:Ay,interpret:xy,collectEvaluatedProperties:Ny,collectEvaluatedItems:Cy};const{Core:Or,Schema:Ro}=k,Ry=async(t,e,r)=>{if(Ro.has("if",r)){const n=await Ro.step("if",r);return[await Or.compileSchema(n,e),await Or.compileSchema(t,e)]}else return[]},qy=([t,e],r,n,s)=>t===void 0||!xa(t,r,n,s)||Or.interpretSchema(e,r,n,s),xa=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Or.getKeyword(i).interpret(a,e,r,n))},Dy=([t,e],r,n,s)=>t===void 0||!xa(t,r,n,s)?[]:Or.collectEvaluatedProperties(e,r,n,s),Ly=([t,e],r,n,s)=>t===void 0||!xa(t,r,n,s)?new Set:Or.collectEvaluatedItems(e,r,n,s);var My={compile:Ry,interpret:qy,collectEvaluatedProperties:Dy,collectEvaluatedItems:Ly};const{Core:Pr,Schema:qo}=k,By=async(t,e,r)=>{if(qo.has("if",r)){const n=await qo.step("if",r);return[await Pr.compileSchema(n,e),await Pr.compileSchema(t,e)]}else return[]},Uy=([t,e],r,n,s)=>t===void 0||Na(t,r,n,s)||Pr.interpretSchema(e,r,n,s),Na=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Pr.getKeyword(i).interpret(a,e,r,n))},Fy=([t,e],r,n,s)=>t===void 0||Na(t,r,n,s)?[]:Pr.collectEvaluatedProperties(e,r,n,s),Vy=([t,e],r,n,s)=>t===void 0||Na(t,r,n,s)?new Set:Pr.collectEvaluatedItems(e,r,n,s);var Ky={compile:By,interpret:Uy,collectEvaluatedProperties:Fy,collectEvaluatedItems:Vy};const{Core:ls,Schema:Do,Instance:Xn}=k,zy=async(t,e)=>{if(Do.typeOf(t,"array")){const r=await Do.map(n=>ls.compileSchema(n,e),t);return Promise.all(r)}else return ls.compileSchema(t,e)},Hf=(t,e,r,n)=>Xn.typeOf(e,"array")?typeof t=="string"?Xn.every(s=>ls.interpretSchema(t,s,r,n),e):Xn.every((s,i)=>!(i in t)||ls.interpretSchema(t[i],s,r,n),e):!0,Jy=(t,e,r,n)=>Hf(t,e,r,n)&&(typeof t=="string"?new Set(Xn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var Gy={compile:zy,interpret:Hf,collectEvaluatedItems:Jy};const{Core:Xf,Schema:ei,Instance:Ni}=k,Hy=async(t,e,r)=>{const n=await ei.step("prefixItems",r);return[ei.typeOf(n,"array")?ei.length(n):0,await Xf.compileSchema(t,e)]},Yf=([t,e],r,n,s)=>Ni.typeOf(r,"array")?Ni.every((i,a)=>a<t||Xf.interpretSchema(e,i,n,s),r):!0,Xy=(t,e,r,n)=>Yf(t,e,r,n)&&new Set(Ni.map((s,i)=>i,e));var Yy={compile:Hy,interpret:Yf,collectEvaluatedItems:Xy};const{Schema:Wy,Instance:Lo}=k,Qy=t=>Wy.value(t),Zy=(t,e)=>!Lo.typeOf(e,"array")||Lo.length(e)<=t;var e$={compile:Qy,interpret:Zy};const{Schema:t$,Instance:Mo}=k,r$=t=>t$.value(t),n$=(t,e)=>!Mo.typeOf(e,"string")||Mo.length(e)<=t;var s$={compile:r$,interpret:n$};const{Schema:i$,Instance:Bo}=k,a$=t=>i$.value(t),o$=(t,e)=>!Bo.typeOf(e,"string")||[...Bo.value(e)].length<=t;var c$={compile:a$,interpret:o$};const{Schema:l$,Instance:Uo}=k,f$=t=>l$.value(t),p$=(t,e)=>!Uo.typeOf(e,"object")||Uo.keys(e).length<=t;var u$={compile:f$,interpret:p$};const{Schema:ti,Instance:Fo}=k,d$=async(t,e,r)=>{const n=await ti.step("exclusiveMaximum",r),s=ti.value(n);return[ti.value(t),s]},m$=([t,e],r)=>{if(!Fo.typeOf(r,"number"))return!0;const n=Fo.value(r);return e?n<t:n<=t};var h$={compile:d$,interpret:m$};const{Schema:y$,Instance:Vo}=k,$$=async t=>y$.value(t),g$=(t,e)=>!Vo.typeOf(e,"number")||Vo.value(e)<=t;var v$={compile:$$,interpret:g$};const{Schema:b$,Instance:Ko}=k,S$=t=>b$.value(t),w$=(t,e)=>!Ko.typeOf(e,"array")||Ko.length(e)>=t;var I$={compile:S$,interpret:w$};const{Schema:E$,Instance:zo}=k,O$=t=>E$.value(t),P$=(t,e)=>!zo.typeOf(e,"string")||zo.length(e)>=t;var k$={compile:O$,interpret:P$};const{Schema:j$,Instance:Jo}=k,_$=t=>j$.value(t),A$=(t,e)=>!Jo.typeOf(e,"string")||[...Jo.value(e)].length>=t;var x$={compile:_$,interpret:A$};const{Schema:N$,Instance:Go}=k,C$=t=>N$.value(t),T$=(t,e)=>!Go.typeOf(e,"object")||Go.keys(e).length>=t;var R$={compile:C$,interpret:T$};const{Schema:ri,Instance:Ho}=k,q$=async(t,e,r)=>{const n=await ri.step("exclusiveMinimum",r),s=ri.value(n);return[ri.value(t),s]},D$=([t,e],r)=>{if(!Ho.typeOf(r,"number"))return!0;const n=Ho.value(r);return e?n>t:n>=t};var L$={compile:q$,interpret:D$};const{Schema:M$,Instance:Xo}=k,B$=async t=>M$.value(t),U$=(t,e)=>!Xo.typeOf(e,"number")||Xo.value(e)>=t;var F$={compile:B$,interpret:U$};const{Schema:V$,Instance:Yo}=k,K$=t=>V$.value(t),z$=(t,e)=>{if(!Yo.typeOf(e,"number"))return!0;const r=Yo.value(e)%t;return Wo(0,r)||Wo(t,r)},Wo=(t,e)=>Math.abs(t-e)<11920929e-14;var J$={compile:K$,interpret:z$};const{Core:Wf}=k,G$=Wf.compileSchema,H$=(t,e,r,n)=>!Wf.interpretSchema(t,e,r,n);var X$={compile:G$,interpret:H$};const{Core:As,Schema:Y$}=k,W$=async(t,e)=>{const r=await Y$.map(n=>As.compileSchema(n,e),t);return Promise.all(r)},Q$=(t,e,r,n)=>{let s=0;for(const i of t)if(As.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},Z$=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=As.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},eg=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=As.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var tg={compile:W$,interpret:Q$,collectEvaluatedProperties:Z$,collectEvaluatedItems:eg};const{Schema:rg,Instance:Qo}=k,ng=t=>new RegExp(rg.value(t),"u"),sg=(t,e)=>!Qo.typeOf(e,"string")||t.test(Qo.value(e));var ig={compile:ng,interpret:sg};const{Core:Qf,Schema:ag,Instance:Zo}=k,ni=Oe,og=(t,e)=>ni.pipeline([ag.entries,ni.map(async([r,n])=>[new RegExp(r,"u"),await Qf.compileSchema(n,e)]),ni.all],t),Zf=(t,e,r,n)=>!Zo.typeOf(e,"object")||t.every(([s,i])=>Zo.entries(e).filter(([a])=>s.test(a)).every(([,a])=>Qf.interpretSchema(i,a,r,n))),cg=(t,e,r,n)=>Zf(t,e,r,n)&&t.map(([s])=>s);var lg={compile:og,interpret:Zf,collectEvaluatedProperties:cg};const fg=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,pg=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),ug=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var ep={isObject:fg,escapeRegExp:pg,splitUrl:ug};const{Core:tp,Schema:dg,Instance:ec}=k,tc=Oe,{escapeRegExp:mg}=ep,hg=(t,e)=>tc.pipeline([dg.entries,tc.reduce(async(r,[n,s])=>(r[n]=await tp.compileSchema(s,e),r),Object.create(null))],t),rp=(t,e,r,n)=>!ec.typeOf(e,"object")||ec.entries(e).filter(([s])=>s in t).every(([s,i])=>tp.interpretSchema(t[s],i,r,n)),yg=(t,e,r,n)=>rp(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${mg(s)}$`));var $g={compile:hg,interpret:rp,collectEvaluatedProperties:yg};const{Core:np,Instance:si}=k,gg=(t,e)=>np.compileSchema(t,e),vg=(t,e,r,n)=>!si.typeOf(e,"object")||si.keys(e).every(s=>np.interpretSchema(t,si.cons(s),r,n));var bg={compile:gg,interpret:vg};const{Core:pn,Schema:Yn}=k,{splitUrl:Sg}=ep,wg=async(t,e)=>{const[,r]=Sg(Yn.value(t)),n=await Yn.get(Yn.value(t),t);return await pn.compileSchema(n,e),[n.id,r]},Ig=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return pn.interpretSchema(s[e],r,n,s);{const i=Yn.getAnchorPointer(n.metaData[t],e);return pn.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},Eg=pn.collectEvaluatedProperties,Og=pn.collectEvaluatedItems;var Pg={compile:wg,interpret:Ig,collectEvaluatedProperties:Eg,collectEvaluatedItems:Og};const{Core:xs,Schema:rc}=k,kg=async(t,e)=>{const r=await rc.get(rc.value(t),t);return xs.compileSchema(r,e)},jg=xs.interpretSchema,_g=xs.collectEvaluatedProperties,Ag=xs.collectEvaluatedItems;var xg={compile:kg,interpret:jg,collectEvaluatedProperties:_g,collectEvaluatedItems:Ag};const{Schema:Ng,Instance:nc}=k,Cg=t=>Ng.value(t),Tg=(t,e)=>!nc.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(nc.value(e),r));var Rg={compile:Cg,interpret:Tg};const{Core:sp,Schema:qg,Instance:sc}=k,ic=Oe,Dg=(t,e)=>ic.pipeline([qg.map(r=>sp.compileSchema(r,e)),ic.all],t),ip=(t,e,r,n)=>sc.typeOf(e,"array")?sc.every((s,i)=>!(i in t)||sp.interpretSchema(t[i],s,r,n),e):!0,Lg=(t,e,r,n)=>ip(t,e,r,n)&&new Set(t.map((s,i)=>i));var Mg={compile:Dg,interpret:ip,collectEvaluatedItems:Lg};const{Schema:Bg,Instance:ac}=k,Ug=t=>Bg.value(t),Fg=(t,e)=>typeof t=="string"?ac.typeOf(e,t):t.some(ac.typeOf(e));var Vg={compile:Ug,interpret:Fg};const{Core:Ci,Schema:Kg,Instance:Wn}=k,zg=async(t,e,r)=>[Kg.uri(r),await Ci.compileSchema(t,e)],ap=([t,e],r,n,s)=>{if(!Wn.typeOf(r,"array"))return!0;const i=Ci.collectEvaluatedItems(t,r,n,s,!0);return i===!1||Wn.every((a,o)=>i.has(o)||Ci.interpretSchema(e,Wn.step(o,r),n,s),r)},Jg=(t,e,r,n)=>ap(t,e,r,n)&&new Set(Wn.map((s,i)=>i,e));var Gg={compile:zg,interpret:ap,collectEvaluatedItems:Jg};const{Core:Ti,Schema:Hg,Instance:oc}=k,Xg=async(t,e,r)=>[Hg.uri(r),await Ti.compileSchema(t,e)],op=([t,e],r,n,s)=>{if(!oc.typeOf(r,"object"))return!0;const i=Ti.collectEvaluatedProperties(t,r,n,s,!0);return!i||oc.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>Ti.interpretSchema(e,a,n,s))},Yg=(t,e,r,n)=>op(t,e,r,n)&&[new RegExp("")];var Wg={compile:Xg,interpret:op,collectEvaluatedProperties:Yg};const{Schema:Qg,Instance:ii}=k,Zg=qr,ev=t=>Qg.value(t),tv=(t,e)=>{if(!ii.typeOf(e,"array")||t===!1)return!0;const r=ii.map(n=>Zg(ii.value(n)),e);return new Set(r).size===r.length};var rv={compile:ev,interpret:tv};const{Keywords:cc}=k;var Dr={additionalItems:Sh,additionalItems6:Eh,additionalProperties:kh,additionalProperties6:Ah,allOf:qh,anyOf:Fh,const:Hh,contains:Wh,containsMinContainsMaxContains:ey,definitions:iy,dependencies:cy,dependentRequired:py,dependentSchemas:yy,enum:Sy,exclusiveMaximum:Oy,exclusiveMinimum:_y,if:Ty,then:My,else:Ky,items:Gy,items202012:Yy,maxItems:e$,maxLength:s$,maxLength6:c$,maxProperties:u$,maximumExclusiveMaximum:h$,maximum:v$,metaData:cc.metaData,minItems:I$,minLength:k$,minLength6:x$,minProperties:R$,minimumExclusiveMinimum:L$,minimum:F$,multipleOf:J$,not:X$,oneOf:tg,pattern:ig,patternProperties:lg,properties:$g,propertyNames:bg,dynamicRef:Pg,ref:xg,required:Rg,tupleItems:Mg,type:Vg,unevaluatedItems:Gg,unevaluatedProperties:Wg,uniqueItems:rv,validate:cc.validate},nv=`{
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
}`;const{Core:sv,Schema:bn}=k,oe=Dr,iv=nv,Sn="http://json-schema.org/draft-04/schema";bn.setConfig(Sn,"baseToken","id");bn.setConfig(Sn,"embeddedToken","id");bn.setConfig(Sn,"anchorToken","id");bn.setConfig(Sn,"jrefToken","$ref");bn.add(JSON.parse(iv));sv.defineVocabulary(Sn,{validate:oe.validate,additionalItems:oe.additionalItems,additionalProperties:oe.additionalProperties,allOf:oe.allOf,anyOf:oe.anyOf,default:oe.metaData,definitions:oe.definitions,dependencies:oe.dependencies,description:oe.metaData,enum:oe.enum,format:oe.metaData,items:oe.items,maxItems:oe.maxItems,maxLength:oe.maxLength,maxProperties:oe.maxProperties,maximum:oe.maximumExclusiveMaximum,minItems:oe.minItems,minLength:oe.minLength,minProperties:oe.minProperties,minimum:oe.minimumExclusiveMinimum,multipleOf:oe.multipleOf,not:oe.not,oneOf:oe.oneOf,pattern:oe.pattern,patternProperties:oe.patternProperties,properties:oe.properties,required:oe.required,title:oe.metaData,type:oe.type,uniqueItems:oe.uniqueItems});var av=`{
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
}`;const{Core:ov,Schema:wn}=k,re=Dr,cv=av,In="http://json-schema.org/draft-06/schema";wn.setConfig(In,"baseToken","$id");wn.setConfig(In,"embeddedToken","$id");wn.setConfig(In,"anchorToken","$id");wn.setConfig(In,"jrefToken","$ref");wn.add(JSON.parse(cv));ov.defineVocabulary(In,{validate:re.validate,additionalItems:re.additionalItems6,additionalProperties:re.additionalProperties6,allOf:re.allOf,anyOf:re.anyOf,const:re.const,contains:re.contains,default:re.metaData,definitions:re.definitions,dependencies:re.dependencies,description:re.metaData,enum:re.enum,examples:re.metaData,exclusiveMaximum:re.exclusiveMaximum,exclusiveMinimum:re.exclusiveMinimum,format:re.metaData,items:re.items,maxItems:re.maxItems,maxLength:re.maxLength6,maxProperties:re.maxProperties,maximum:re.maximum,minItems:re.minItems,minLength:re.minLength6,minProperties:re.minProperties,minimum:re.minimum,multipleOf:re.multipleOf,not:re.not,oneOf:re.oneOf,pattern:re.pattern,patternProperties:re.patternProperties,properties:re.properties,propertyNames:re.propertyNames,required:re.required,title:re.metaData,type:re.type,uniqueItems:re.uniqueItems});var lv=`{
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
}`;const{Core:fv,Schema:En}=k,ee=Dr,pv=lv,On="http://json-schema.org/draft-07/schema";En.setConfig(On,"baseToken","$id");En.setConfig(On,"embeddedToken","$id");En.setConfig(On,"anchorToken","$id");En.setConfig(On,"jrefToken","$ref");En.add(JSON.parse(pv));fv.defineVocabulary(On,{validate:ee.validate,additionalItems:ee.additionalItems6,additionalProperties:ee.additionalProperties6,allOf:ee.allOf,anyOf:ee.anyOf,const:ee.const,contains:ee.contains,default:ee.metaData,definitions:ee.definitions,dependencies:ee.dependencies,description:ee.metaData,enum:ee.enum,exclusiveMaximum:ee.exclusiveMaximum,exclusiveMinimum:ee.exclusiveMinimum,format:ee.metaData,if:ee.if,then:ee.then,else:ee.else,items:ee.items,maxItems:ee.maxItems,maxLength:ee.maxLength6,maxProperties:ee.maxProperties,maximum:ee.maximum,minItems:ee.minItems,minLength:ee.minLength6,minProperties:ee.minProperties,minimum:ee.minimum,multipleOf:ee.multipleOf,not:ee.not,oneOf:ee.oneOf,pattern:ee.pattern,patternProperties:ee.patternProperties,properties:ee.properties,propertyNames:ee.propertyNames,readOnly:ee.metaData,required:ee.required,title:ee.metaData,type:ee.type,uniqueItems:ee.uniqueItems,writeOnly:ee.metaData});var uv=`{
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
}`,dv=`{
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
}`,mv=`{
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
}`,hv=`{
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
}`,yv=`{
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
}`,$v=`{
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
}`,gv=`{
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
}`;const{Core:Pn,Schema:Ke}=k,V=Dr,vv=uv,bv=dv,Sv=mv,wv=hv,Iv=yv,Ev=$v,Ov=gv,Lr="https://json-schema.org/draft/2019-09/vocab/core";Ke.setConfig(Lr,"baseToken","$id");Ke.setConfig(Lr,"embeddedToken","$id");Ke.setConfig(Lr,"anchorToken","$anchor");Ke.setConfig(Lr,"recursiveAnchorToken","$recursiveAnchor");Ke.setConfig(Lr,"vocabularyToken","$vocabulary");Ke.setConfig(Lr,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);Ke.add(JSON.parse(vv));Ke.add(JSON.parse(bv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:V.validate,$defs:V.definitions,$recursiveRef:V.dynamicRef,$ref:V.ref});Ke.add(JSON.parse(Sv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:V.additionalItems6,additionalProperties:V.additionalProperties6,allOf:V.allOf,anyOf:V.anyOf,contains:V.containsMinContainsMaxContains,dependentSchemas:V.dependentSchemas,if:V.if,then:V.then,else:V.else,items:V.items,not:V.not,oneOf:V.oneOf,patternProperties:V.patternProperties,properties:V.properties,propertyNames:V.propertyNames,unevaluatedItems:V.unevaluatedItems,unevaluatedProperties:V.unevaluatedProperties});Ke.add(JSON.parse(wv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:V.const,dependentRequired:V.dependentRequired,enum:V.enum,exclusiveMaximum:V.exclusiveMaximum,exclusiveMinimum:V.exclusiveMinimum,maxItems:V.maxItems,maxLength:V.maxLength6,maxProperties:V.maxProperties,maximum:V.maximum,minItems:V.minItems,minLength:V.minLength6,minProperties:V.minProperties,minimum:V.minimum,multipleOf:V.multipleOf,pattern:V.pattern,required:V.required,type:V.type,uniqueItems:V.uniqueItems});Ke.add(JSON.parse(Iv));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:V.metaData,deprecated:V.metaData,description:V.metaData,examples:V.metaData,readOnly:V.metaData,title:V.metaData,writeOnly:V.metaData});Ke.add(JSON.parse(Ev));Ke.add(JSON.parse(Ov));Pn.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:V.metaData,contentMediaType:V.metaData,contentSchema:V.metaData});var Pv=`{
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
}`,kv=`{
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
}`,jv=`{
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
}`,_v=`{
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
}`,Av=`{
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
}`,xv=`{
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
}`,Nv=`{
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
}`,Cv=`{
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
}`,Tv=`{
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
}`;const{Core:er,Schema:Le}=k,U=Dr,Rv=Pv,qv=kv,Dv=jv,Lv=_v,Mv=Av,Bv=xv,Uv=Nv,Fv=Cv,Vv=Tv,Mr="https://json-schema.org/draft/2020-12/vocab/core";Le.setConfig(Mr,"baseToken","$id");Le.setConfig(Mr,"embeddedToken","$id");Le.setConfig(Mr,"anchorToken","$anchor");Le.setConfig(Mr,"dynamicAnchorToken","$dynamicAnchor");Le.setConfig(Mr,"vocabularyToken","$vocabulary");Le.setConfig(Mr,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);Le.add(JSON.parse(Rv));Le.add(JSON.parse(qv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:U.validate,$defs:U.definitions,$dynamicRef:U.dynamicRef,$ref:U.ref});Le.add(JSON.parse(Dv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:U.additionalProperties6,allOf:U.allOf,anyOf:U.anyOf,contains:U.containsMinContainsMaxContains,dependentSchemas:U.dependentSchemas,if:U.if,then:U.then,else:U.else,items:U.items202012,not:U.not,oneOf:U.oneOf,patternProperties:U.patternProperties,prefixItems:U.tupleItems,properties:U.properties,propertyNames:U.propertyNames});Le.add(JSON.parse(Lv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:U.const,dependentRequired:U.dependentRequired,enum:U.enum,exclusiveMaximum:U.exclusiveMaximum,exclusiveMinimum:U.exclusiveMinimum,maxItems:U.maxItems,maxLength:U.maxLength6,maxProperties:U.maxProperties,maximum:U.maximum,minItems:U.minItems,minLength:U.minLength6,minProperties:U.minProperties,minimum:U.minimum,multipleOf:U.multipleOf,pattern:U.pattern,required:U.required,type:U.type,uniqueItems:U.uniqueItems});Le.add(JSON.parse(Mv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:U.metaData,deprecated:U.metaData,description:U.metaData,examples:U.metaData,readOnly:U.metaData,title:U.metaData,writeOnly:U.metaData});Le.add(JSON.parse(Bv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:U.metaData});Le.add(JSON.parse(Uv));Le.add(JSON.parse(Fv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:U.metaData,contentMediaType:U.metaData,contentSchema:U.metaData});Le.add(JSON.parse(Vv));er.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:U.unevaluatedItems,unevaluatedProperties:U.unevaluatedProperties});const{Core:ft,Schema:Kv,InvalidSchemaError:zv}=k,Jv=Dr;var je={add:ft.add,get:Kv.get,validate:ft.validate,compile:ft.compile,interpret:ft.interpret,setMetaOutputFormat:ft.setMetaOutputFormat,setShouldMetaValidate:ft.setShouldMetaValidate,FLAG:ft.FLAG,BASIC:ft.BASIC,DETAILED:ft.DETAILED,VERBOSE:ft.VERBOSE,Keywords:Jv,InvalidSchemaError:zv};const Gv=je.add,Hv=je.get,Xv=je.validate,Yv=je.compile,Wv=je.interpret,Qv=je.setMetaOutputFormat,Zv=je.setShouldMetaValidate,eb=je.FLAG,tb=je.BASIC,rb=je.DETAILED,nb=je.VERBOSE,sb=je.Keywords,ib=je.InvalidSchemaError,ab=Object.freeze(Object.defineProperty({__proto__:null,add:Gv,get:Hv,validate:Xv,compile:Yv,interpret:Wv,setMetaOutputFormat:Qv,setShouldMetaValidate:Zv,FLAG:eb,BASIC:tb,DETAILED:rb,VERBOSE:nb,Keywords:sb,InvalidSchemaError:ib,default:je},Symbol.toStringTag,{value:"Module"}));var cp={exports:{}};(function(t){(function(e,r){t.exports?t.exports=r():e.moo=r()})(oa,function(){var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function s(w){return w&&r.call(w)==="[object RegExp]"}function i(w){return w&&typeof w=="object"&&!s(w)&&!Array.isArray(w)}function a(w){return w.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(w){var N=new RegExp("|"+w);return N.exec("").length-1}function c(w){return"("+w+")"}function l(w){if(!w.length)return"(?!)";var N=w.map(function(C){return"(?:"+C+")"}).join("|");return"(?:"+N+")"}function p(w){if(typeof w=="string")return"(?:"+a(w)+")";if(s(w)){if(w.ignoreCase)throw new Error("RegExp /i flag not allowed");if(w.global)throw new Error("RegExp /g flag is implied");if(w.sticky)throw new Error("RegExp /y flag is implied");if(w.multiline)throw new Error("RegExp /m flag is implied");return w.source}else throw new Error("Not a pattern: "+w)}function y(w){for(var N=Object.getOwnPropertyNames(w),C=[],R=0;R<N.length;R++){var z=N[R],q=w[z],X=[].concat(q);if(z==="include"){for(var le=0;le<X.length;le++)C.push({include:X[le]});continue}var pe=[];X.forEach(function(F){i(F)?(pe.length&&C.push($(z,pe)),C.push($(z,F)),pe=[]):pe.push(F)}),pe.length&&C.push($(z,pe))}return C}function m(w){for(var N=[],C=0;C<w.length;C++){var R=w[C];if(R.include){for(var z=[].concat(R.include),q=0;q<z.length;q++)N.push({include:z[q]});continue}if(!R.type)throw new Error("Rule has no type: "+JSON.stringify(R));N.push($(R.type,R))}return N}function $(w,N){if(i(N)||(N={match:N}),N.include)throw new Error("Matching rules cannot also include states");var C={defaultType:w,lineBreaks:!!N.error||!!N.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var R in N)e.call(N,R)&&(C[R]=N[R]);if(typeof C.type=="string"&&w!==C.type)throw new Error("Type transform cannot be a string (type '"+C.type+"' for token '"+w+"')");var z=C.match;return C.match=Array.isArray(z)?z:z?[z]:[],C.match.sort(function(q,X){return s(q)&&s(X)?0:s(X)?-1:s(q)?1:X.length-q.length}),C}function P(w){return Array.isArray(w)?m(w):y(w)}var u=$("error",{lineBreaks:!0,shouldThrow:!0});function d(w,N){for(var C=null,R=Object.create(null),z=!0,q=null,X=[],le=[],pe=0;pe<w.length;pe++)w[pe].fallback&&(z=!1);for(var pe=0;pe<w.length;pe++){var F=w[pe];if(F.include)throw new Error("Inheritance is not allowed in stateless lexers");if(F.error||F.fallback){if(C)throw!F.fallback==!C.fallback?new Error("Multiple "+(F.fallback?"fallback":"error")+" rules not allowed (for token '"+F.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+F.defaultType+"')");C=F}var ve=F.match.slice();if(z)for(;ve.length&&typeof ve[0]=="string"&&ve[0].length===1;){var We=ve.shift();R[We.charCodeAt(0)]=F}if(F.pop||F.push||F.next){if(!N)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+F.defaultType+"')");if(F.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+F.defaultType+"')")}if(ve.length!==0){z=!1,X.push(F);for(var be=0;be<ve.length;be++){var Be=ve[be];if(!!s(Be)){if(q===null)q=Be.unicode;else if(q!==Be.unicode&&F.fallback===!1)throw new Error("If one rule is /u then all must be")}}var Ue=l(ve.map(p)),ce=new RegExp(Ue);if(ce.test(""))throw new Error("RegExp matches empty string: "+ce);var Y=o(Ue);if(Y>0)throw new Error("RegExp has capture groups: "+ce+`
Use (?: \u2026 ) instead`);if(!F.lineBreaks&&ce.test(`
`))throw new Error("Rule should declare lineBreaks: "+ce);le.push(c(Ue))}}var ne=C&&C.fallback,fe=n&&!ne?"ym":"gm",he=n||ne?"":"|";q===!0&&(fe+="u");var Fe=new RegExp(l(le)+he,fe);return{regexp:Fe,groups:X,fast:R,error:C||u}}function v(w){var N=d(P(w));return new S({start:N},"start")}function E(w,N,C){var R=w&&(w.push||w.next);if(R&&!C[R])throw new Error("Missing state '"+R+"' (in token '"+w.defaultType+"' of state '"+N+"')");if(w&&w.pop&&+w.pop!=1)throw new Error("pop must be 1 (in token '"+w.defaultType+"' of state '"+N+"')")}function b(w,N){var C=w.$all?P(w.$all):[];delete w.$all;var R=Object.getOwnPropertyNames(w);N||(N=R[0]);for(var z=Object.create(null),q=0;q<R.length;q++){var X=R[q];z[X]=P(w[X]).concat(C)}for(var q=0;q<R.length;q++)for(var X=R[q],le=z[X],pe=Object.create(null),F=0;F<le.length;F++){var ve=le[F];if(!!ve.include){var We=[F,1];if(ve.include!==X&&!pe[ve.include]){pe[ve.include]=!0;var be=z[ve.include];if(!be)throw new Error("Cannot include nonexistent state '"+ve.include+"' (in state '"+X+"')");for(var Be=0;Be<be.length;Be++){var Ue=be[Be];le.indexOf(Ue)===-1&&We.push(Ue)}}le.splice.apply(le,We),F--}}for(var ce=Object.create(null),q=0;q<R.length;q++){var X=R[q];ce[X]=d(z[X],!0)}for(var q=0;q<R.length;q++){for(var Y=R[q],ne=ce[Y],fe=ne.groups,F=0;F<fe.length;F++)E(fe[F],Y,ce);for(var he=Object.getOwnPropertyNames(ne.fast),F=0;F<he.length;F++)E(ne.fast[he[F]],Y,ce)}return new S(ce,N)}function j(w){for(var N=Object.create(null),C=Object.create(null),R=Object.getOwnPropertyNames(w),z=0;z<R.length;z++){var q=R[z],X=w[q],le=Array.isArray(X)?X:[X];le.forEach(function(be){if((C[be.length]=C[be.length]||[]).push(be),typeof be!="string")throw new Error("keyword must be string (in keyword '"+q+"')");N[be]=q})}function pe(be){return JSON.stringify(be)}var F="";F+=`switch (value.length) {
`;for(var ve in C){var We=C[ve];F+="case "+ve+`:
`,F+=`switch (value) {
`,We.forEach(function(be){var Be=N[be];F+="case "+pe(be)+": return "+pe(Be)+`
`}),F+=`}
`}return F+=`}
`,Function("value",F)}var S=function(w,N){this.startState=N,this.states=w,this.buffer="",this.stack=[],this.reset()};S.prototype.reset=function(w,N){return this.buffer=w||"",this.index=0,this.line=N?N.line:1,this.col=N?N.col:1,this.queuedToken=N?N.queuedToken:null,this.queuedThrow=N?N.queuedThrow:null,this.setState(N?N.state:this.startState),this.stack=N&&N.stack?N.stack.slice():[],this},S.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},S.prototype.setState=function(w){if(!(!w||this.state===w)){this.state=w;var N=this.states[w];this.groups=N.groups,this.error=N.error,this.re=N.regexp,this.fast=N.fast}},S.prototype.popState=function(){this.setState(this.stack.pop())},S.prototype.pushState=function(w){this.stack.push(this.state),this.setState(w)};var _=n?function(w,N){return w.exec(N)}:function(w,N){var C=w.exec(N);return C[0].length===0?null:C};S.prototype._getGroup=function(w){for(var N=this.groups.length,C=0;C<N;C++)if(w[C+1]!==void 0)return this.groups[C];throw new Error("Cannot find token type for matched text")};function K(){return this.value}if(S.prototype.next=function(){var w=this.index;if(this.queuedGroup){var N=this._token(this.queuedGroup,this.queuedText,w);return this.queuedGroup=null,this.queuedText="",N}var C=this.buffer;if(w!==C.length){var X=this.fast[C.charCodeAt(w)];if(X)return this._token(X,C.charAt(w),w);var R=this.re;R.lastIndex=w;var z=_(R,C),q=this.error;if(z==null)return this._token(q,C.slice(w,C.length),w);var X=this._getGroup(z),le=z[0];return q.fallback&&z.index!==w?(this.queuedGroup=X,this.queuedText=le,this._token(q,C.slice(w,z.index),w)):this._token(X,le,w)}},S.prototype._token=function(w,N,C){var R=0;if(w.lineBreaks){var z=/\n/g,q=1;if(N===`
`)R=1;else for(;z.exec(N);)R++,q=z.lastIndex}var X={type:typeof w.type=="function"&&w.type(N)||w.defaultType,value:typeof w.value=="function"?w.value(N):N,text:N,toString:K,offset:C,lineBreaks:R,line:this.line,col:this.col},le=N.length;if(this.index+=le,this.line+=R,R!==0?this.col=le-q+1:this.col+=le,w.shouldThrow)throw new Error(this.formatError(X,"invalid syntax"));return w.pop?this.popState():w.push?this.pushState(w.push):w.next&&this.setState(w.next),X},typeof Symbol<"u"&&Symbol.iterator){var Z=function(w){this.lexer=w};Z.prototype.next=function(){var w=this.lexer.next();return{value:w,done:!w}},Z.prototype[Symbol.iterator]=function(){return this},S.prototype[Symbol.iterator]=function(){return new Z(this)}}return S.prototype.formatError=function(w,N){if(w==null)var C=this.buffer.slice(this.index),w={text:C,offset:this.index,lineBreaks:C.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var R=Math.max(0,w.offset-w.col+1),z=w.lineBreaks?w.text.indexOf(`
`):w.text.length,q=this.buffer.substring(R,w.offset+z);return N+=" at line "+w.line+" col "+w.col+`:

`,N+="  "+q+`
`,N+="  "+Array(w.col).join(" ")+"^",N},S.prototype.clone=function(){return new S(this.states,this.state)},S.prototype.has=function(w){return!0},{compile:v,states:b,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:j}})})(cp);const pt=cp.exports,Ca="[0-9]",ob="[1-9]",cb="[0-9a-fA-F]",lc=`(?:\\\\["\\/\\\\brfnt]|\\\\u${cb}{4}|[^"\\\\])`,lb='"(?=[^"]*"\\s*:)',fb=`(?:0|${ob}${Ca}*)`,pb=`\\.${Ca}+`,ub="[eE]",db=`${ub}[-+]?${Ca}+`,mb=`-?${fb}(?:${pb})?(?:${db})?`,hb=`(?:(?:\r?
)|[ 	])+`,fc=pt.states({main:{WS:{match:new RegExp(hb),lineBreaks:!0},accent7:new RegExp(`true|false|${mb}`),accent3:["{","}","[","]"],accent6:"null",stringProperty:{match:new RegExp(lb),push:"property"},stringStart:{match:'"',push:"string"},other:/./},string:{accent7:{match:new RegExp(`${lc}+`),lineBreaks:!0},stringEnd:{match:'"',pop:!0},other:/./},property:{accent1:{match:new RegExp(`${lc}+`),lineBreaks:!0},propertyEnd:{match:'"',pop:!0},other:/./}}),Ta="[0-9]",yb="[1-9]",lp="[0-9a-fA-F]",pc=`(?:\r?
)+`,Xt="[ \\t]",$b=`^${Xt}+`,gb=`(?:\\\\["\\/\\\\brfnt]|\\\\u${lp}{4}|[^"\\\\])`,vb=`(?:\\\\['\\/\\\\brfnt]|\\\\u${lp}{4}|[^'\\\\])`,Ln=`(?:"${gb}*"|'${vb}*')`,fp=`${Xt}*:(?:${Xt}+|$)`,bb=`[^\\s]+(?=${fp})`,Ri=`${Xt}*:`,uc=`[^\\s]+(?=${Ri})`,Sb=`(?:0|${yb}${Ta}*)`,wb=`\\.${Ta}+`,Ib="[eE]",Eb=`${Ib}[-+]?${Ta}+`,Mn=`-?${Sb}(?:${wb})?(?:${Eb})?`,Ob=`-${Xt}+`,Bn=`#[^
]*`,dc=pt.states({main:{WS:{match:new RegExp(pc),lineBreaks:!0},indent:new RegExp($b),comment:new RegExp(Bn),inlineArray:{match:"[",type:pt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:pt.keywords({accent3:"{"}),push:"inlineObject"},accent1:new RegExp(Ob),accent7:["true","false","null",new RegExp(Ln),new RegExp(Mn)],accent6:new RegExp(bb),accent3:{match:new RegExp(fp),lineBreaks:!0,push:"property"},other:/[^#\n]+/},property:{WS:{match:new RegExp(pc),lineBreaks:!0,pop:1},comment:new RegExp(Bn),accent7:{match:["true","false","null",new RegExp(Ln),new RegExp(Mn)],pop:1},other:/[^#\n]+/},inlineArray:{WS:new RegExp(`${Xt}+`),comment:new RegExp(Bn),inlineArray:{match:"[",type:pt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:pt.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"]",type:pt.keywords({accent3:"]"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Ln),new RegExp(Mn)],accent6:new RegExp(uc),accent3:{match:new RegExp(Ri),lineBreaks:!0},other:/[^\]\n,#]+/},inlineObject:{WS:new RegExp(`${Xt}+`),comment:new RegExp(Bn),inlineArray:{match:"[",type:pt.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:pt.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"}",type:pt.keywords({accent3:"}"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Ln),new RegExp(Mn)],accent6:new RegExp(uc),accent3:{match:new RegExp(Ri),lineBreaks:!0},other:/[^}\n,#]+/}});function mc(t,e,r){const n=t.slice();return n[10]=e[r],n}function hc(t,e,r){const n=t.slice();return n[13]=e[r],n[15]=r,n}function yc(t){let e,r=t[15]+1+"",n;return{c(){e=J("div"),n=ie(r),this.h()},l(s){e=G(s,"DIV",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p:ke,d(s){s&&A(e)}}}function Pb(t){let e=t[10].value+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&8&&e!==(e=n[10].value+"")&&De(r,e)},d(n){n&&A(r)}}}function kb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent8 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function jb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent7 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function _b(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent6 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Ab(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent5 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function xb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent4 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Nb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent3 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Cb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent2 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Tb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent1 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Rb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","comment svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function $c(t){let e;function r(i,a){return i[10].type==="comment"?Rb:i[10].type==="accent1"?Tb:i[10].type==="accent2"?Cb:i[10].type==="accent3"?Nb:i[10].type==="accent4"?xb:i[10].type==="accent5"?Ab:i[10].type==="accent6"?_b:i[10].type==="accent7"?jb:i[10].type==="accent8"?kb:Pb}let n=r(t),s=n(t);return{c(){s.c(),e=Ct()},l(i){s.l(i),e=Ct()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function qb(t){let e,r,n,s,i,a,o,c,l,p,y,m,$=[...Array(t[4])],P=[];for(let v=0;v<$.length;v+=1)P[v]=yc(hc(t,$,v));let u=t[3],d=[];for(let v=0;v<u.length;v+=1)d[v]=$c(mc(t,u,v));return{c(){e=J("div"),r=J("div");for(let v=0;v<P.length;v+=1)P[v].c();n=_e(),s=J("div"),i=J("pre"),a=ie("");for(let v=0;v<d.length;v+=1)d[v].c();o=ie(`
    `),c=_e(),l=J("textarea"),this.h()},l(v){e=G(v,"DIV",{class:!0});var E=L(e);r=G(E,"DIV",{class:!0});var b=L(r);for(let _=0;_<P.length;_+=1)P[_].l(b);b.forEach(A),n=Ae(E),s=G(E,"DIV",{class:!0});var j=L(s);i=G(j,"PRE",{class:!0});var S=L(i);a=ae(S,"");for(let _=0;_<d.length;_+=1)d[_].l(S);o=ae(S,`
    `),S.forEach(A),c=Ae(j),l=G(j,"TEXTAREA",{class:!0,"aria-label":!0}),L(l).forEach(A),j.forEach(A),E.forEach(A),this.h()},h(){x(r,"class","line-numbers svelte-564293"),x(i,"class","highlighted svelte-564293"),x(l,"class","src svelte-564293"),x(l,"aria-label","Code Editor"),x(s,"class","editable svelte-564293"),x(e,"class",p="Editor "+t[1]+" svelte-564293")},m(v,E){Q(v,e,E),T(e,r);for(let b=0;b<P.length;b+=1)P[b].m(r,null);T(e,n),T(e,s),T(s,i),T(i,a);for(let b=0;b<d.length;b+=1)d[b].m(i,null);T(i,o),T(s,c),T(s,l),t[8](l),ao(l,t[0]),y||(m=[Jt(l,"input",t[9]),Jt(l,"input",t[7])],y=!0)},p(v,[E]){if(E&16){$=[...Array(v[4])];let b;for(b=0;b<$.length;b+=1){const j=hc(v,$,b);P[b]?P[b].p(j,E):(P[b]=yc(j),P[b].c(),P[b].m(r,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=$.length}if(E&8){u=v[3];let b;for(b=0;b<u.length;b+=1){const j=mc(v,u,b);d[b]?d[b].p(j,E):(d[b]=$c(j),d[b].c(),d[b].m(i,o))}for(;b<d.length;b+=1)d[b].d(1);d.length=u.length}E&1&&ao(l,v[0]),E&2&&p!==(p="Editor "+v[1]+" svelte-564293")&&x(e,"class",p)},i:ke,o:ke,d(v){v&&A(e),ts(P,v),ts(d,v),t[8](null),y=!1,$l(m)}}}function Db(t,e,r){let n,s,{theme:i="solarized-dark"}=e,{value:a=""}=e,{format:o="json"}=e,c;const l=()=>{c.focus()};function p($){su.call(this,t,$)}function y($){_t[$?"unshift":"push"](()=>{c=$,r(2,c)})}function m(){a=this.value,r(0,a)}return t.$$set=$=>{"theme"in $&&r(1,i=$.theme),"value"in $&&r(0,a=$.value),"format"in $&&r(5,o=$.format)},t.$$.update=()=>{t.$$.dirty&1&&r(4,n=(a.match(/\n/g)||[]).length+1),t.$$.dirty&33&&r(3,s=function(){return o==="json"?(fc.reset(a),Array.from(fc)):(dc.reset(a),Array.from(dc))}())},[a,i,c,s,n,o,l,p,y,m]}class Lb extends qt{constructor(e){super(),Dt(this,e,Db,qb,Lt,{theme:1,value:0,format:5,focus:6})}get focus(){return this.$$.ctx[6]}}function gc(t,e,r){const n=t.slice();return n[18]=e[r],n[20]=r,n}function vc(t){let e,r,n,s;function i(){return t[12](t[20])}return{c(){e=J("button"),r=ie("\xD7"),this.h()},l(a){e=G(a,"BUTTON",{class:!0});var o=L(e);r=ae(o,"\xD7"),o.forEach(A),this.h()},h(){x(e,"class","tab-close svelte-1ylgy73")},m(a,o){Q(a,e,o),T(e,r),n||(s=Jt(e,"click",i),n=!0)},p(a,o){t=a},d(a){a&&A(e),n=!1,s()}}}function bc(t){let e,r,n=t[18].label+"",s,i,a,o,c,l,p=!t[18].persistent&&t[0].length>t[6]&&vc(t);function y(){return t[13](t[20])}return{c(){e=J("button"),r=J("span"),s=ie(n),i=_e(),p&&p.c(),this.h()},l(m){e=G(m,"BUTTON",{role:!0,id:!0,"aria-selected":!0,"aria-controls":!0,class:!0});var $=L(e);r=G($,"SPAN",{class:!0});var P=L(r);s=ae(P,n),P.forEach(A),i=Ae($),p&&p.l($),$.forEach(A),this.h()},h(){x(r,"class","tab-label svelte-1ylgy73"),x(e,"role","tab"),x(e,"id",a=`${t[3]}-tab-${t[20]}`),x(e,"aria-selected",o=t[20]===t[1]),x(e,"aria-controls","tabpanel"),x(e,"class","svelte-1ylgy73"),oo(e,"active",t[20]===t[5])},m(m,$){Q(m,e,$),T(e,r),T(r,s),T(e,i),p&&p.m(e,null),c||(l=Jt(e,"click",y),c=!0)},p(m,$){t=m,$&1&&n!==(n=t[18].label+"")&&De(s,n),!t[18].persistent&&t[0].length>t[6]?p?p.p(t,$):(p=vc(t),p.c(),p.m(e,null)):p&&(p.d(1),p=null),$&8&&a!==(a=`${t[3]}-tab-${t[20]}`)&&x(e,"id",a),$&2&&o!==(o=t[20]===t[1])&&x(e,"aria-selected",o),$&32&&oo(e,"active",t[20]===t[5])},d(m){m&&A(e),p&&p.d(),c=!1,l()}}}function Sc(t){let e,r,n,s,i,a;return{c(){e=J("button"),r=J("span"),n=ie("+"),this.h()},l(o){e=G(o,"BUTTON",{role:!0,id:!0,class:!0});var c=L(e);r=G(c,"SPAN",{class:!0});var l=L(r);n=ae(l,"+"),l.forEach(A),c.forEach(A),this.h()},h(){x(r,"class","tab-label svelte-1ylgy73"),x(e,"role","tab"),x(e,"id",s=`${t[3]}-tab-${t[0].length}`),x(e,"class","svelte-1ylgy73")},m(o,c){Q(o,e,c),T(e,r),T(r,n),i||(a=Jt(e,"click",t[10]),i=!0)},p(o,c){c&9&&s!==(s=`${o[3]}-tab-${o[0].length}`)&&x(e,"id",s)},d(o){o&&A(e),i=!1,a()}}}function Mb(t){let e,r,n,s,i,a,o,c,l,p=t[0],y=[];for(let d=0;d<p.length;d+=1)y[d]=bc(gc(t,p,d));let m=t[4]&&Sc(t);function $(d){t[15](d)}function P(d){t[16](d)}let u={};return t[0][t[1]].text!==void 0&&(u.value=t[0][t[1]].text),t[2]!==void 0&&(u.format=t[2]),i=new Lb({props:u}),t[14](i),_t.push(()=>yr(i,"value",$)),_t.push(()=>yr(i,"format",P)),i.$on("input",t[17]),{c(){e=J("div");for(let d=0;d<y.length;d+=1)y[d].c();r=_e(),m&&m.c(),n=_e(),s=J("div"),et(i.$$.fragment),this.h()},l(d){e=G(d,"DIV",{role:!0,class:!0});var v=L(e);for(let b=0;b<y.length;b+=1)y[b].l(v);r=Ae(v),m&&m.l(v),v.forEach(A),n=Ae(d),s=G(d,"DIV",{role:!0,id:!0,"aria-labelledby":!0,class:!0});var E=L(s);tt(i.$$.fragment,E),E.forEach(A),this.h()},h(){x(e,"role","tablist"),x(e,"class","svelte-1ylgy73"),x(s,"role","tabpanel"),x(s,"id","tabpanel"),x(s,"aria-labelledby",c=`${t[3]}-tab-${t[1]}`),x(s,"class","svelte-1ylgy73")},m(d,v){Q(d,e,v);for(let E=0;E<y.length;E+=1)y[E].m(e,null);T(e,r),m&&m.m(e,null),Q(d,n,v),Q(d,s,v),rt(i,s,null),l=!0},p(d,[v]){if(v&2667){p=d[0];let b;for(b=0;b<p.length;b+=1){const j=gc(d,p,b);y[b]?y[b].p(j,v):(y[b]=bc(j),y[b].c(),y[b].m(e,r))}for(;b<y.length;b+=1)y[b].d(1);y.length=p.length}d[4]?m?m.p(d,v):(m=Sc(d),m.c(),m.m(e,null)):m&&(m.d(1),m=null);const E={};!a&&v&3&&(a=!0,E.value=d[0][d[1]].text,$r(()=>a=!1)),!o&&v&4&&(o=!0,E.format=d[2],$r(()=>o=!1)),i.$set(E),(!l||v&10&&c!==(c=`${d[3]}-tab-${d[1]}`))&&x(s,"aria-labelledby",c)},i(d){l||(Re(i.$$.fragment,d),l=!0)},o(d){qe(i.$$.fragment,d),l=!1},d(d){d&&A(e),ts(y,d),m&&m.d(),d&&A(n),d&&A(s),t[14](null),nt(i)}}}function Bb(t,e,r){let{ns:n=""}=e,{tabs:s=[]}=e,{newTab:i=void 0}=e,{active:a=0}=e,{selected:o=0}=e,{minTabs:c=1}=e,{format:l="json"}=e,p;const y=iu();function m(S){r(1,o=S),p.focus()}function $(){r(0,s[s.length]=i(),s),r(1,o=s.length-1),p.focus()}function P(S){o>=S&&o>0&&r(1,o-=1),s.splice(S,1),r(0,s),p.focus()}const u=S=>P(S),d=S=>m(S);function v(S){_t[S?"unshift":"push"](()=>{p=S,r(7,p)})}function E(S){t.$$.not_equal(s[o].text,S)&&(s[o].text=S,r(0,s))}function b(S){l=S,r(2,l)}const j=()=>y("input",s);return t.$$set=S=>{"ns"in S&&r(3,n=S.ns),"tabs"in S&&r(0,s=S.tabs),"newTab"in S&&r(4,i=S.newTab),"active"in S&&r(5,a=S.active),"selected"in S&&r(1,o=S.selected),"minTabs"in S&&r(6,c=S.minTabs),"format"in S&&r(2,l=S.format)},[s,o,l,n,i,a,c,p,y,m,$,P,u,d,v,E,b,j]}class wc extends qt{constructor(e){super(),Dt(this,e,Bb,Mb,Lt,{ns:3,tabs:0,newTab:4,active:5,selected:1,minTabs:6,format:2})}}function Ic(t,e,r){const n=t.slice();return n[2]=e[r],n}function Ub(t){let e;function r(i,a){return i[1].output?Vb:Fb}let n=r(t),s=n(t);return{c(){s.c(),e=Ct()},l(i){s.l(i),e=Ct()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function Fb(t){let e=t[1]+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[1]+"")&&De(r,e)},d(n){n&&A(r)}}}function Vb(t){let e,r,n=t[1].output.errors,s=[];for(let i=0;i<n.length;i+=1)s[i]=Oc(Ic(t,n,i));return{c(){e=ie(`Invalid
    `),r=J("ul");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=ae(i,`Invalid
    `),r=G(i,"UL",{});var a=L(r);for(let o=0;o<s.length;o+=1)s[o].l(a);a.forEach(A)},m(i,a){Q(i,e,a),Q(i,r,a);for(let o=0;o<s.length;o+=1)s[o].m(r,null)},p(i,a){if(a&1){n=i[1].output.errors;let o;for(o=0;o<n.length;o+=1){const c=Ic(i,n,o);s[o]?s[o].p(c,a):(s[o]=Oc(c),s[o].c(),s[o].m(r,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){i&&A(e),i&&A(r),ts(s,i)}}}function Ec(t){let e,r,n=t[2].instanceLocation+"",s,i,a,o=t[2].absoluteKeywordLocation+"",c;return{c(){e=J("li"),r=J("code"),s=ie(n),i=ie(" fails schema constraint "),a=J("code"),c=ie(o),this.h()},l(l){e=G(l,"LI",{class:!0});var p=L(e);r=G(p,"CODE",{class:!0});var y=L(r);s=ae(y,n),y.forEach(A),i=ae(p," fails schema constraint "),a=G(p,"CODE",{class:!0});var m=L(a);c=ae(m,o),m.forEach(A),p.forEach(A),this.h()},h(){x(r,"class","svelte-1sdf2dp"),x(a,"class","svelte-1sdf2dp"),x(e,"class","svelte-1sdf2dp")},m(l,p){Q(l,e,p),T(e,r),T(r,s),T(e,i),T(e,a),T(a,c)},p(l,p){p&1&&n!==(n=l[2].instanceLocation+"")&&De(s,n),p&1&&o!==(o=l[2].absoluteKeywordLocation+"")&&De(c,o)},d(l){l&&A(e)}}}function Oc(t){let e=!t[2].valid&&!t[2].keyword.endsWith("#validate"),r,n=e&&Ec(t);return{c(){n&&n.c(),r=Ct()},l(s){n&&n.l(s),r=Ct()},m(s,i){n&&n.m(s,i),Q(s,r,i)},p(s,i){i&1&&(e=!s[2].valid&&!s[2].keyword.endsWith("#validate")),e?n?n.p(s,i):(n=Ec(s),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&A(r)}}}function Kb(t){let e=t[0]?"Valid":"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[0]?"Valid":"")&&De(r,e)},d(n){n&&A(r)}}}function zb(t){let e;return{c(){e=ie("Validating ...")},l(r){e=ae(r,"Validating ...")},m(r,n){Q(r,e,n)},p:ke,d(r){r&&A(e)}}}function Jb(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!0,pending:zb,then:Kb,catch:Ub,value:0,error:1};return rs(r=t[0],n),{c(){e=Ct(),n.block.c()},l(s){e=Ct(),n.block.l(s)},m(s,i){Q(s,e,i),n.block.m(s,n.anchor=i),n.mount=()=>e.parentNode,n.anchor=e},p(s,[i]){t=s,n.ctx=t,i&1&&r!==(r=t[0])&&rs(r,n)||gl(n,t,i)},i:ke,o:ke,d(s){s&&A(e),n.block.d(s),n.token=null,n=null}}}function Gb(t,e,r){let{results:n}=e;return t.$$set=s=>{"results"in s&&r(0,n=s.results)},[n]}class pp extends qt{constructor(e){super(),Dt(this,e,Gb,Jb,Lt,{results:0})}}function Hb(t){let e,r,n,s,i;const a=t[2].default,o=Fi(a,t,t[1],null);return{c(){e=J("a"),r=ut("svg"),n=ut("path"),s=_e(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=dt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=dt(p,"path",{"fill-rule":!0,d:!0}),L(n).forEach(A),p.forEach(A),s=Ae(l),o&&o.l(l),l.forEach(A),this.h()},h(){x(n,"fill-rule","evenodd"),x(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),x(r,"height","1.5em"),x(r,"viewBox","0 0 16 16"),x(r,"version","1.1"),x(r,"aria-hidden","true"),x(r,"class","svelte-i8toq"),x(e,"href",t[0]),x(e,"class","svelte-i8toq")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Vi(o,a,c,c[1],i?zi(a,c[1],l,null):Ki(c[1]),null),(!i||l&1)&&x(e,"href",c[0])},i(c){i||(Re(o,c),i=!0)},o(c){qe(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function Xb(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Pc extends qt{constructor(e){super(),Dt(this,e,Xb,Hb,Lt,{href:0})}}function Yb(t){let e,r,n,s,i;const a=t[2].default,o=Fi(a,t,t[1],null);return{c(){e=J("a"),r=ut("svg"),n=ut("path"),s=_e(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=dt(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=dt(p,"path",{d:!0}),L(n).forEach(A),p.forEach(A),s=Ae(l),o&&o.l(l),l.forEach(A),this.h()},h(){x(n,"d","M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"),x(r,"height","1em"),x(r,"viewBox","0 0 780 250"),x(r,"version","1.1"),x(r,"aria-hidden","true"),x(r,"class","svelte-wj8h0n"),x(e,"href",t[0]),x(e,"class","svelte-wj8h0n")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Vi(o,a,c,c[1],i?zi(a,c[1],l,null):Ki(c[1]),null),(!i||l&1)&&x(e,"href",c[0])},i(c){i||(Re(o,c),i=!0)},o(c){qe(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function Wb(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class kc extends qt{constructor(e){super(),Dt(this,e,Wb,Yb,Lt,{href:0})}}function Qb(t){let e,r,n,s,i,a,o,c,l;const p=t[2].default,y=Fi(p,t,t[1],null);return{c(){e=J("a"),r=ut("svg"),n=ut("g"),s=ut("path"),i=ut("path"),a=ut("path"),o=ut("path"),c=_e(),y&&y.c(),this.h()},l(m){e=G(m,"A",{href:!0,class:!0});var $=L(e);r=dt($,"svg",{version:!0,viewBox:!0,height:!0,class:!0});var P=L(r);n=dt(P,"g",{transform:!0,id:!0});var u=L(n);s=dt(u,"path",{id:!0,d:!0,style:!0}),L(s).forEach(A),i=dt(u,"path",{id:!0,d:!0,style:!0}),L(i).forEach(A),a=dt(u,"path",{id:!0,d:!0,style:!0}),L(a).forEach(A),o=dt(u,"path",{id:!0,d:!0,style:!0}),L(o).forEach(A),u.forEach(A),P.forEach(A),c=Ae($),y&&y.l($),$.forEach(A),this.h()},h(){x(s,"id","path4544"),x(s,"d","m 122.99401,114.18985 c -4.32897,-0.9404 -7.58044,-3.47848 -8.71251,-6.80095 -0.78921,-2.31618 -0.67682,-6.07238 0.33363,-11.150598 0.48507,-2.437836 0.88169,-5.347843 0.88139,-6.466688 -9.8e-4,-3.718098 -1.71106,-5.735418 -5.1001,-6.016462 l -1.9549,-0.162116 v -2.392655 -2.392657 l 1.85208,-0.250855 c 2.70243,-0.366031 3.74441,-1.02838 4.57629,-2.908984 0.61121,-1.381726 0.68884,-2.068648 0.50552,-4.472869 -0.11913,-1.562244 -0.53527,-4.348568 -0.92477,-6.191832 -0.98954,-4.682868 -0.94822,-8.485471 0.11707,-10.773163 1.56862,-3.368589 5.43705,-5.854553 9.93248,-6.382903 l 1.93299,-0.227185 v 2.518015 2.518015 h -1.29973 c -1.77186,0 -4.2497,1.262413 -4.8835,2.488054 -0.60797,1.175674 -0.65405,2.864146 -0.15834,5.802223 0.78343,4.643508 1.04707,9.098344 0.67592,11.421636 -0.42464,2.658142 -1.97477,5.796328 -3.6791,7.448236 l -1.18012,1.143813 1.61497,1.982752 c 1.99051,2.443801 2.76458,4.148744 3.24284,7.142561 0.37835,2.368341 0.0844,7.282673 -0.67072,11.213982 -1.05359,5.48514 0.1623,7.65141 4.66209,8.30613 l 1.67569,0.24382 v 2.44782 c 0,2.79211 0.17086,2.69708 -3.43917,1.91286 z"),Nn(s,"fill","stroke-width:0.35277775"),x(i,"id","path4546"),x(i,"d","m 152.2304,112.24932 v -2.42987 l 2.04969,-0.42336 c 2.26276,-0.46736 4.054,-1.8634 4.45842,-3.47475 0.1274,-0.50758 -0.11267,-3.16398 -0.53347,-5.90311 -1.37183,-8.929552 -0.6114,-13.537042 2.85482,-17.297452 l 1.48237,-1.60818 -1.1108,-1.26512 c -3.97855,-4.53132 -4.66885,-8.552208 -3.15364,-18.369547 0.76342,-4.946305 0.76409,-4.994322 0.087,-6.173611 -0.79713,-1.388278 -3.28385,-2.776033 -4.97438,-2.776033 h -1.15997 v -2.469445 c 0,-2.811057 -0.0583,-2.773846 3.24583,-2.072788 3.9645,0.841179 6.80448,2.853272 8.27787,5.864775 0.84544,1.728026 0.97275,2.400136 0.94911,5.010889 -0.015,1.658349 -0.35758,4.682054 -0.76125,6.719346 -1.49867,7.563594 -1.3651,9.576204 0.7654,11.532814 0.98915,0.90842 1.64012,1.17274 3.37032,1.36849 l 2.14439,0.24261 v 2.42387 2.42388 l -1.6757,7.1e-4 c -2.1517,7e-4 -3.9323,0.90924 -4.83869,2.46889 -0.95194,1.63803 -0.89239,5.20675 0.17364,10.40695 0.90648,4.421902 1.05253,8.458452 0.3882,10.728752 -0.70059,2.39406 -3.81995,5.29609 -6.74745,6.27718 -1.26118,0.42266 -2.96775,0.87096 -3.79236,0.99623 l -1.49931,0.22775 z"),Nn(i,"stroke-width","0.35277778"),x(a,"id","path4548"),x(a,"d","m 131.74239,108.26592 c -1.02163,-1.2988 -0.87294,-3.53652 0.38087,-5.73185 0.92776,-1.62446 4.80862,-6.948549 7.61066,-10.440949 l 1.13094,-1.40958 -1.80213,-5.22523 c -2.02147,-5.86123 -2.0098,-5.97467 0.65581,-6.37225 l 1.46834,-0.219 1.64076,3.3506 c 0.90242,1.84283 1.76982,3.35061 1.92755,3.35061 0.15774,0 1.77489,-1.75542 3.59368,-3.90092 3.15918,-3.72667 3.35688,-3.89165 4.42591,-3.69334 0.64552,0.11974 1.21858,0.0465 1.35432,-0.17316 0.31818,-0.51481 1.23083,0.24704 1.23083,1.02746 0,0.32009 -0.45438,1.13409 -1.00972,1.80888 -2.26771,2.75549 -7.10417,9.27155 -7.10417,9.5713 0,0.17685 0.97502,2.45302 2.16671,5.05816 l 2.1667,4.736609 -0.65823,0.98459 c -0.36203,0.54152 -0.66236,1.12603 -0.6674,1.29891 -0.005,0.17288 -0.27769,0.48371 -0.60588,0.69073 -0.83174,0.52464 -1.44656,-0.11541 -3.9894,-4.153119 -1.16417,-1.84856 -2.23163,-3.36491 -2.37215,-3.36967 -0.31309,-0.0106 -3.7911,5.131969 -6.47955,9.580639 -2.37093,3.92324 -1.93885,3.4204 -3.26614,3.80106 -0.95533,0.27398 -1.19348,0.19843 -1.79831,-0.57048 z"),Nn(a,"stroke-width","0.35277775"),x(o,"id","path4550"),x(o,"d","m 131.98567,83.677091 c -2.15148,-3.8472 -6.0183,-9.42829 -7.57842,-10.93815 -0.79252,-0.76698 -1.44094,-1.57494 -1.44094,-1.79546 0,-0.6016 1.61695,-1.21975 3.19058,-1.21975 1.69822,0 3.49597,1.47777 5.0997,4.19203 0.58208,0.98515 1.15641,1.79434 1.27629,1.79819 0.11988,0.004 0.80873,-1.65116 1.53078,-3.67779 1.5464,-4.34039 5.62351,-12.777999 7.22453,-14.951229 1.3726,-1.86316 3.42936,-2.865165 5.90274,-2.875676 3.23375,-0.01374 3.24268,0.130067 0.20474,3.296663 -4.63599,4.832327 -6.76321,8.809632 -11.25155,21.037252 -1.24637,3.39549 -2.39032,6.47895 -2.54212,6.85214 -0.23022,0.56597 -0.49833,0.28096 -1.61633,-1.71822 z"),Nn(o,"stroke-width","0.35277775"),x(n,"transform","translate(-104.22785,-45.507923)"),x(n,"id","layer1"),x(r,"version","1.1"),x(r,"viewBox","0 0 70.423268 70.42326"),x(r,"height","1.25em"),x(r,"class","svelte-27u907"),x(e,"href",t[0]),x(e,"class","svelte-27u907")},m(m,$){Q(m,e,$),T(e,r),T(r,n),T(n,s),T(n,i),T(n,a),T(n,o),T(e,c),y&&y.m(e,null),l=!0},p(m,[$]){y&&y.p&&(!l||$&2)&&Vi(y,p,m,m[1],l?zi(p,m[1],$,null):Ki(m[1]),null),(!l||$&1)&&x(e,"href",m[0])},i(m){l||(Re(y,m),l=!0)},o(m){qe(y,m),l=!1},d(m){m&&A(e),y&&y.d(m)}}}function Zb(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class e1 extends qt{constructor(e){super(),Dt(this,e,Zb,Qb,Lt,{href:0})}}function t1(t){let e;return{c(){e=ie("hyperjump-io/json-schema.hyperjump.io")},l(r){e=ae(r,"hyperjump-io/json-schema.hyperjump.io")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function r1(t){let e;return{c(){e=ie("hyperjump-io/json-schema-validator")},l(r){e=ae(r,"hyperjump-io/json-schema-validator")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function n1(t){let e;return{c(){e=ie("@hyperjump/json-schema")},l(r){e=ae(r,"@hyperjump/json-schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function s1(t){let e;return{c(){e=ie("@hyperjump/json-schema-core")},l(r){e=ae(r,"@hyperjump/json-schema-core")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function i1(t){let e;return{c(){e=ie("JSON Schema")},l(r){e=ae(r,"JSON Schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function a1(t){let e,r,n,s,i,a,o,c,l,p,y,m,$,P,u,d,v;return s=new Pc({props:{href:"https://github.com/hyperjump-io/json-schema.hyperjump.io",$$slots:{default:[t1]},$$scope:{ctx:t}}}),o=new Pc({props:{href:"https://github.com/hyperjump-io/json-schema-validator",$$slots:{default:[r1]},$$scope:{ctx:t}}}),p=new kc({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema",$$slots:{default:[n1]},$$scope:{ctx:t}}}),$=new kc({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema-core",$$slots:{default:[s1]},$$scope:{ctx:t}}}),d=new e1({props:{href:"https://json-schema.org",$$slots:{default:[i1]},$$scope:{ctx:t}}}),{c(){e=J("footer"),r=J("ul"),n=J("li"),et(s.$$.fragment),i=_e(),a=J("li"),et(o.$$.fragment),c=_e(),l=J("li"),et(p.$$.fragment),y=_e(),m=J("li"),et($.$$.fragment),P=_e(),u=J("li"),et(d.$$.fragment),this.h()},l(E){e=G(E,"FOOTER",{class:!0});var b=L(e);r=G(b,"UL",{class:!0});var j=L(r);n=G(j,"LI",{class:!0});var S=L(n);tt(s.$$.fragment,S),S.forEach(A),i=Ae(j),a=G(j,"LI",{class:!0});var _=L(a);tt(o.$$.fragment,_),_.forEach(A),c=Ae(j),l=G(j,"LI",{class:!0});var K=L(l);tt(p.$$.fragment,K),K.forEach(A),y=Ae(j),m=G(j,"LI",{class:!0});var Z=L(m);tt($.$$.fragment,Z),Z.forEach(A),P=Ae(j),u=G(j,"LI",{class:!0});var w=L(u);tt(d.$$.fragment,w),w.forEach(A),j.forEach(A),b.forEach(A),this.h()},h(){x(n,"class","svelte-17tbtsq"),x(a,"class","svelte-17tbtsq"),x(l,"class","svelte-17tbtsq"),x(m,"class","svelte-17tbtsq"),x(u,"class","svelte-17tbtsq"),x(r,"class","links svelte-17tbtsq"),x(e,"class","svelte-17tbtsq")},m(E,b){Q(E,e,b),T(e,r),T(r,n),rt(s,n,null),T(r,i),T(r,a),rt(o,a,null),T(r,c),T(r,l),rt(p,l,null),T(r,y),T(r,m),rt($,m,null),T(r,P),T(r,u),rt(d,u,null),v=!0},p(E,[b]){const j={};b&1&&(j.$$scope={dirty:b,ctx:E}),s.$set(j);const S={};b&1&&(S.$$scope={dirty:b,ctx:E}),o.$set(S);const _={};b&1&&(_.$$scope={dirty:b,ctx:E}),p.$set(_);const K={};b&1&&(K.$$scope={dirty:b,ctx:E}),$.$set(K);const Z={};b&1&&(Z.$$scope={dirty:b,ctx:E}),d.$set(Z)},i(E){v||(Re(s.$$.fragment,E),Re(o.$$.fragment,E),Re(p.$$.fragment,E),Re($.$$.fragment,E),Re(d.$$.fragment,E),v=!0)},o(E){qe(s.$$.fragment,E),qe(o.$$.fragment,E),qe(p.$$.fragment,E),qe($.$$.fragment,E),qe(d.$$.fragment,E),v=!1},d(E){E&&A(e),nt(s),nt(o),nt(p),nt($),nt(d)}}}class o1 extends qt{constructor(e){super(),Dt(this,e,null,a1,Lt,{})}}const c1=vd(ab);var l1=`{
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
}`;const{Schema:up}=k,dp=l1;up.add(JSON.parse(dp),"https://spec.openapis.org/oas/3.0/schema");up.add(JSON.parse(dp),"https://spec.openapis.org/oas/3.0/schema/latest");var f1=`{
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
}`,p1=`{
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
}`,mp=`{
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
}`,hp=`{
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
}`;const{Core:u1,Keywords:Un,Schema:gt}=k,d1=f1,m1=p1,Ra=mp,qa=mp,h1=hp,y1=hp;gt.add(JSON.parse(Ra),"https://spec.openapis.org/oas/3.1/schema");gt.add(JSON.parse(Ra),"https://spec.openapis.org/oas/3.1/schema/latest");gt.add(JSON.parse(qa),"https://spec.openapis.org/oas/3.1/schema-base");gt.add(JSON.parse(qa),"https://spec.openapis.org/oas/3.1/schema-base/latest");gt.add(JSON.parse(Ra),"https://spec.openapis.org/oas/3.1/schema/2022-02-27");gt.add(JSON.parse(qa),"https://spec.openapis.org/oas/3.1/schema-base/2022-02-27");gt.add(JSON.parse(h1),"https://spec.openapis.org/oas/3.1/schema/2021-09-28");gt.add(JSON.parse(y1),"https://spec.openapis.org/oas/3.1/schema-base/2021-09-28");gt.add(JSON.parse(d1));gt.add(JSON.parse(m1));u1.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:Un.metaData,discriminator:Un.metaData,externalDocs:Un.metaData,xml:Un.metaData});const $1=c1;var ze=$1;ze.add;ze.get;ze.validate;ze.compile;ze.interpret;ze.setMetaOutputFormat;ze.setShouldMetaValidate;ze.FLAG;ze.BASIC;ze.DETAILED;ze.VERBOSE;ze.Keywords;ze.InvalidSchemaError;const{Core:yp,Schema:Qr,Instance:ai}=k,g1=async(t,e,r)=>{const n=await Qr.step("items",r),s=Qr.typeOf(n,"array")?Qr.length(n):Number.MAX_SAFE_INTEGER;return Qr.typeOf(t,"boolean")?[s,Qr.value(t)]:[s,await yp.compileSchema(t,e)]},v1=([t,e],r,n,s)=>ai.typeOf(r,"array")?typeof e=="string"?ai.every((i,a)=>a<t||yp.interpretSchema(e,i,n,s),r):ai.every((i,a)=>a<t?!0:e,r):!0;var b1={compile:g1,interpret:v1};const{Core:$p,Schema:oi,Instance:qi}=k,S1=async(t,e,r)=>{const n=await oi.step("items",r);return[oi.typeOf(n,"array")?oi.length(n):Number.MAX_SAFE_INTEGER,await $p.compileSchema(t,e)]},gp=([t,e],r,n,s)=>qi.typeOf(r,"array")?qi.every((i,a)=>a<t||$p.interpretSchema(e,i,n,s),r):!0,w1=(t,e,r,n)=>gp(t,e,r,n)&&new Set(qi.map((s,i)=>i,e));var I1={compile:S1,interpret:gp,collectEvaluatedItems:w1};const{Core:vp,Schema:jt,Instance:jc}=k,E1=async(t,e,r)=>{const n=await jt.step("properties",r),s=jt.typeOf(n,"object")?jt.keys(n):[],i=await jt.step("patternProperties",r),a=jt.typeOf(i,"object")?jt.keys(i).map(o=>new RegExp(o)):[];return jt.typeOf(t,"boolean")?[s,a,jt.value(t)]:[s,a,await vp.compileSchema(t,e)]},O1=([t,e,r],n,s,i)=>{if(!jc.typeOf(n,"object"))return!0;const a=jc.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>vp.interpretSchema(r,o,s,i)):a.length===0||r};var P1={compile:E1,interpret:O1};const{Core:bp,Schema:dr,Instance:_c}=k,k1=async(t,e,r)=>{const n=await dr.step("properties",r),s=dr.typeOf(n,"object")?dr.keys(n):[],i=await dr.step("patternProperties",r),a=dr.typeOf(i,"object")?dr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await bp.compileSchema(t,e)]},Sp=([t,e,r],n,s,i)=>_c.typeOf(n,"object")?_c.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>bp.interpretSchema(r,a,s,i)):!0,j1=(t,e,r,n)=>Sp(t,e,r,n)&&[new RegExp("")];var _1={compile:k1,interpret:Sp,collectEvaluatedProperties:j1};const{Core:Ns,Schema:A1}=k,Ac=Oe,x1=(t,e)=>Ac.pipeline([A1.map(async r=>Ns.compileSchema(await r,e)),Ac.all],t),N1=(t,e,r,n)=>t.every(s=>Ns.interpretSchema(s,e,r,n)),C1=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&Ns.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),T1=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&Ns.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var R1={compile:x1,interpret:N1,collectEvaluatedProperties:C1,collectEvaluatedItems:T1};const{Core:Cs,Schema:q1}=k,xc=Oe,D1=(t,e)=>xc.pipeline([q1.map(async r=>Cs.compileSchema(await r,e)),xc.all],t),L1=(t,e,r,n)=>t.filter(i=>Cs.interpretSchema(i,e,r,n)).length>0,M1=(t,e,r,n)=>t.reduce((s,i)=>{const a=Cs.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),B1=(t,e,r,n)=>t.reduce((s,i)=>{const a=Cs.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var U1={compile:D1,interpret:L1,collectEvaluatedProperties:M1,collectEvaluatedItems:B1};const{Schema:F1,Instance:V1}=k,wp=qr,K1=t=>wp(F1.value(t)),z1=(t,e)=>wp(V1.value(e))===t;var J1={compile:K1,interpret:z1};const{Core:Ip,Instance:Nc}=k,G1=(t,e)=>Ip.compileSchema(t,e),H1=(t,e,r,n)=>!Nc.typeOf(e,"array")||Nc.some(s=>Ip.interpretSchema(t,s,r,n),e);var X1={compile:G1,interpret:H1};const{Core:Da,Schema:mr,Instance:Di}=k,Y1=async(t,e,r)=>{const n=await Da.compileSchema(t,e),s=await mr.step("minContains",r),i=mr.typeOf(s,"number")?mr.value(s):1,a=await mr.step("maxContains",r),o=mr.typeOf(a,"number")?mr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Ep=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Di.typeOf(n,"array"))return!0;const a=Di.reduce((o,c)=>Da.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},W1=(t,e,r,n)=>Ep(t,e,r,n)&&Di.reduce((s,i,a)=>Da.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var Q1={compile:Y1,interpret:Ep,collectEvaluatedItems:W1};const{Core:Ts,Schema:hr,Instance:zt}=k,Z1=async(t,e,r)=>{const n=await Ts.compileSchema(t,e),s=await hr.step("minContains",r),i=hr.typeOf(s,"number")?hr.value(s):1,a=await hr.step("maxContains",r),o=hr.typeOf(a,"number")?hr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},La=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!zt.typeOf(n,"array")&&!zt.typeOf(n,"object"))return!0;const a=zt.entries(n).reduce((o,[,c])=>Ts.interpretSchema(t,c,s,i)?o+1:o,0);return a>=e&&a<=r},e0=(t,e,r,n)=>La(t,e,r,n)&&zt.typeOf(e,"array")&&zt.reduce((s,i,a)=>Ts.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e),t0=(t,e,r,n)=>La(t,e,r,n)&&zt.typeOf(e,"object")&&zt.entries(e).reduce((s,[i,a])=>(Ts.interpretSchema(t.contains,a,r,n)&&s.push(i),s),[],e);var r0={compile:Z1,interpret:La,collectEvaluatedItems:e0,collectEvaluatedProperties:t0};const{Core:n0,Schema:s0}=k,ci=Oe,i0=async(t,e)=>{await ci.pipeline([s0.entries,ci.map(([,r])=>n0.compileSchema(r,e)),ci.all],t)},a0=()=>!0;var o0={compile:i0,interpret:a0};const{Core:Op,Schema:li,Instance:Cc}=k,fi=Oe,c0=(t,e)=>fi.pipeline([li.entries,fi.map(async([r,n])=>[r,li.typeOf(n,"array")?li.value(n):await Op.compileSchema(n,e)]),fi.all],t),l0=(t,e,r,n)=>{const s=Cc.value(e);return!Cc.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):Op.interpretSchema(a,e,r,n):!0)};var f0={compile:c0,interpret:l0};const{Schema:Tc,Instance:Rc}=k,pi=Oe,p0=t=>pi.pipeline([Tc.entries,pi.map(([e,r])=>[e,Tc.value(r)]),pi.all],t),u0=(t,e)=>{const r=Rc.value(e);return!Rc.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var d0={compile:p0,interpret:u0};const{Core:Ma,Schema:m0,Instance:Li}=k,ui=Oe,h0=(t,e)=>ui.pipeline([m0.entries,ui.map(async([r,n])=>[r,await Ma.compileSchema(n,e)]),ui.all],t),y0=(t,e,r,n)=>{const s=Li.value(e);return!Li.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||Ma.interpretSchema(a,e,r,n))},$0=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!Li.has(i,e))return s;const o=Ma.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var g0={compile:h0,interpret:y0,collectEvaluatedProperties:$0};const v0=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,b0=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),S0=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Ba={isObject:v0,escapeRegExp:b0,splitUrl:S0};const{Core:un,Schema:Qn}=k,{splitUrl:w0}=Ba,I0=async(t,e)=>{const[,r]=w0(Qn.value(t)),n=await Qn.get(Qn.value(t),t);return await un.compileSchema(n,e),[n.id,r]},E0=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return un.interpretSchema(s[e],r,n,s);{const i=Qn.getAnchorPointer(n.metaData[t],e);return un.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},O0=un.collectEvaluatedProperties,P0=un.collectEvaluatedItems;var k0={compile:I0,interpret:E0,collectEvaluatedProperties:O0,collectEvaluatedItems:P0};const{Core:Rs,Schema:qc}=k,{splitUrl:j0}=Ba,_0=async(t,e)=>{const[r,n]=j0(qc.value(t)),s=await qc.get(r,t);return await Rs.compileSchema(s,e),n},A0=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Rs.interpretSchema(n[t],e,r,n)},x0=Rs.collectEvaluatedProperties,N0=Rs.collectEvaluatedItems;var C0={compile:_0,interpret:A0,collectEvaluatedProperties:x0,collectEvaluatedItems:N0};const{Core:Ua,Schema:T0}=k,R0=T0.value,q0=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Ua.interpretSchema(n[t],e,r,n)},D0=Ua.collectEvaluatedProperties,L0=Ua.collectEvaluatedItems;var M0={compile:R0,interpret:q0,collectEvaluatedProperties:D0,collectEvaluatedItems:L0};const{Schema:B0,Instance:U0}=k,Pp=qr,F0=t=>B0.value(t).map(Pp),V0=(t,e)=>t.some(r=>Pp(U0.value(e))===r);var K0={compile:F0,interpret:V0};const{Schema:z0,Instance:Dc}=k,J0=async t=>z0.value(t),G0=(t,e)=>!Dc.typeOf(e,"number")||Dc.value(e)<t;var H0={compile:J0,interpret:G0};const{Schema:X0,Instance:Lc}=k,Y0=async t=>X0.value(t),W0=(t,e)=>!Lc.typeOf(e,"number")||Lc.value(e)>t;var Q0={compile:Y0,interpret:W0};const{Core:qs}=k,Z0=(t,e)=>qs.compileSchema(t,e),eS=(t,e,r,n)=>(qs.interpretSchema(t,e,r,n),!0),tS=(t,e,r,n)=>qs.collectEvaluatedProperties(t,e,r,n)||[],rS=(t,e,r,n)=>qs.collectEvaluatedItems(t,e,r,n)||new Set;var nS={compile:Z0,interpret:eS,collectEvaluatedProperties:tS,collectEvaluatedItems:rS};const{Core:kr,Schema:Mc}=k,sS=async(t,e,r)=>{if(Mc.has("if",r)){const n=await Mc.step("if",r);return[await kr.compileSchema(n,e),await kr.compileSchema(t,e)]}else return[]},iS=([t,e],r,n,s)=>t===void 0||!Fa(t,r,n,s)||kr.interpretSchema(e,r,n,s),Fa=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>kr.getKeyword(i).interpret(a,e,r,n))},aS=([t,e],r,n,s)=>t===void 0||!Fa(t,r,n,s)?[]:kr.collectEvaluatedProperties(e,r,n,s),oS=([t,e],r,n,s)=>t===void 0||!Fa(t,r,n,s)?new Set:kr.collectEvaluatedItems(e,r,n,s);var cS={compile:sS,interpret:iS,collectEvaluatedProperties:aS,collectEvaluatedItems:oS};const{Core:jr,Schema:Bc}=k,lS=async(t,e,r)=>{if(Bc.has("if",r)){const n=await Bc.step("if",r);return[await jr.compileSchema(n,e),await jr.compileSchema(t,e)]}else return[]},fS=([t,e],r,n,s)=>t===void 0||Va(t,r,n,s)||jr.interpretSchema(e,r,n,s),Va=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>jr.getKeyword(i).interpret(a,e,r,n))},pS=([t,e],r,n,s)=>t===void 0||Va(t,r,n,s)?[]:jr.collectEvaluatedProperties(e,r,n,s),uS=([t,e],r,n,s)=>t===void 0||Va(t,r,n,s)?new Set:jr.collectEvaluatedItems(e,r,n,s);var dS={compile:lS,interpret:fS,collectEvaluatedProperties:pS,collectEvaluatedItems:uS};const{Core:fs,Schema:Uc,Instance:Zn}=k,mS=async(t,e)=>{if(Uc.typeOf(t,"array")){const r=await Uc.map(n=>fs.compileSchema(n,e),t);return Promise.all(r)}else return fs.compileSchema(t,e)},kp=(t,e,r,n)=>Zn.typeOf(e,"array")?typeof t=="string"?Zn.every(s=>fs.interpretSchema(t,s,r,n),e):Zn.every((s,i)=>!(i in t)||fs.interpretSchema(t[i],s,r,n),e):!0,hS=(t,e,r,n)=>kp(t,e,r,n)&&(typeof t=="string"?new Set(Zn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var yS={compile:mS,interpret:kp,collectEvaluatedItems:hS};const{Core:jp,Schema:di,Instance:Mi}=k,$S=async(t,e,r)=>{const n=await di.step("prefixItems",r);return[di.typeOf(n,"array")?di.length(n):0,await jp.compileSchema(t,e)]},_p=([t,e],r,n,s)=>Mi.typeOf(r,"array")?Mi.every((i,a)=>a<t||jp.interpretSchema(e,i,n,s),r):!0,gS=(t,e,r,n)=>_p(t,e,r,n)&&new Set(Mi.map((s,i)=>i,e));var vS={compile:$S,interpret:_p,collectEvaluatedItems:gS};const{Schema:bS,Instance:Fc}=k,SS=t=>bS.value(t),wS=(t,e)=>!Fc.typeOf(e,"array")||Fc.length(e)<=t;var IS={compile:SS,interpret:wS};const{Schema:ES,Instance:Vc}=k,OS=t=>ES.value(t),PS=(t,e)=>!Vc.typeOf(e,"string")||Vc.length(e)<=t;var kS={compile:OS,interpret:PS};const{Schema:jS,Instance:Kc}=k,_S=t=>jS.value(t),AS=(t,e)=>!Kc.typeOf(e,"string")||[...Kc.value(e)].length<=t;var xS={compile:_S,interpret:AS};const{Schema:NS,Instance:zc}=k,CS=t=>NS.value(t),TS=(t,e)=>!zc.typeOf(e,"object")||zc.keys(e).length<=t;var RS={compile:CS,interpret:TS};const{Schema:mi,Instance:Jc}=k,qS=async(t,e,r)=>{const n=await mi.step("exclusiveMaximum",r),s=mi.value(n);return[mi.value(t),s]},DS=([t,e],r)=>{if(!Jc.typeOf(r,"number"))return!0;const n=Jc.value(r);return e?n<t:n<=t};var LS={compile:qS,interpret:DS};const{Schema:MS,Instance:Gc}=k,BS=async t=>MS.value(t),US=(t,e)=>!Gc.typeOf(e,"number")||Gc.value(e)<=t;var FS={compile:BS,interpret:US};const{Schema:VS,Instance:Hc}=k,KS=t=>VS.value(t),zS=(t,e)=>!Hc.typeOf(e,"array")||Hc.length(e)>=t;var JS={compile:KS,interpret:zS};const{Schema:GS,Instance:Xc}=k,HS=t=>GS.value(t),XS=(t,e)=>!Xc.typeOf(e,"string")||Xc.length(e)>=t;var YS={compile:HS,interpret:XS};const{Schema:WS,Instance:Yc}=k,QS=t=>WS.value(t),ZS=(t,e)=>!Yc.typeOf(e,"string")||[...Yc.value(e)].length>=t;var ew={compile:QS,interpret:ZS};const{Schema:tw,Instance:Wc}=k,rw=t=>tw.value(t),nw=(t,e)=>!Wc.typeOf(e,"object")||Wc.keys(e).length>=t;var sw={compile:rw,interpret:nw};const{Schema:hi,Instance:Qc}=k,iw=async(t,e,r)=>{const n=await hi.step("exclusiveMinimum",r),s=hi.value(n);return[hi.value(t),s]},aw=([t,e],r)=>{if(!Qc.typeOf(r,"number"))return!0;const n=Qc.value(r);return e?n>t:n>=t};var ow={compile:iw,interpret:aw};const{Schema:cw,Instance:Zc}=k,lw=async t=>cw.value(t),fw=(t,e)=>!Zc.typeOf(e,"number")||Zc.value(e)>=t;var pw={compile:lw,interpret:fw};const{Schema:uw,Instance:el}=k,dw=t=>uw.value(t),mw=(t,e)=>{if(!el.typeOf(e,"number"))return!0;const r=el.value(e)%t;return tl(0,r)||tl(t,r)},tl=(t,e)=>Math.abs(t-e)<11920929e-14;var hw={compile:dw,interpret:mw};const{Core:Ap}=k,yw=Ap.compileSchema,$w=(t,e,r,n)=>!Ap.interpretSchema(t,e,r,n);var gw={compile:yw,interpret:$w};const{Core:Ds,Schema:vw}=k,bw=async(t,e)=>{const r=await vw.map(n=>Ds.compileSchema(n,e),t);return Promise.all(r)},Sw=(t,e,r,n)=>{let s=0;for(const i of t)if(Ds.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},ww=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Ds.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},Iw=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Ds.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var Ew={compile:bw,interpret:Sw,collectEvaluatedProperties:ww,collectEvaluatedItems:Iw};const{Schema:Fn,Instance:rl}=k,Ow=async(t,e,r)=>{const n=await Fn.value(t),s=await Fn.step("properties",r),i=Fn.typeOf(s,"object")?Fn.keys(s):[],a=new Set(i);return n.forEach(o=>i.remove(o)),[...a]},Pw=(t,e)=>!rl.typeOf(e,"object")||t.every(r=>rl.value(e).hasOwnProperty(r));var kw={compile:Ow,interpret:Pw};const{Schema:jw,Instance:nl}=k,_w=t=>new RegExp(jw.value(t),"u"),Aw=(t,e)=>!nl.typeOf(e,"string")||t.test(nl.value(e));var xw={compile:_w,interpret:Aw};const{Core:xp,Schema:Nw,Instance:sl}=k,yi=Oe,Cw=(t,e)=>yi.pipeline([Nw.entries,yi.map(async([r,n])=>[new RegExp(r,"u"),await xp.compileSchema(n,e)]),yi.all],t),Np=(t,e,r,n)=>!sl.typeOf(e,"object")||t.every(([s,i])=>sl.entries(e).filter(([a])=>s.test(a)).every(([,a])=>xp.interpretSchema(i,a,r,n))),Tw=(t,e,r,n)=>Np(t,e,r,n)&&t.map(([s])=>s);var Rw={compile:Cw,interpret:Np,collectEvaluatedProperties:Tw};const{Core:Cp,Schema:qw,Instance:il}=k,al=Oe,{escapeRegExp:Dw}=Ba,Lw=(t,e)=>al.pipeline([qw.entries,al.reduce(async(r,[n,s])=>(r[n]=await Cp.compileSchema(s,e),r),Object.create(null))],t),Tp=(t,e,r,n)=>!il.typeOf(e,"object")||il.entries(e).filter(([s])=>s in t).every(([s,i])=>Cp.interpretSchema(t[s],i,r,n)),Mw=(t,e,r,n)=>Tp(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${Dw(s)}$`));var Bw={compile:Lw,interpret:Tp,collectEvaluatedProperties:Mw};const{Core:Rp,Schema:ol,Instance:$i}=k,Vn=Oe,Uw=async(t,e)=>Vn.pipeline([ol.entries,Vn.reduce(async(r,[n,s])=>(r[n]=await Vn.pipeline([ol.entries,Vn.reduce(async(i,[a,o])=>(i[a]=await Rp.compileSchema(o,e),i),{})],s),r),{})],t),Fw=(t,e,r,n)=>!$i.typeOf(e,"object")||Object.entries(t).every(([s,i])=>!$i.has(s,e)||Rp.interpretSchema(i[$i.value(e)[s]],e,r,n));var Vw={compile:Uw,interpret:Fw};const{Core:qp,Instance:gi}=k,Kw=(t,e)=>qp.compileSchema(t,e),zw=(t,e,r,n)=>!gi.typeOf(e,"object")||gi.keys(e).every(s=>qp.interpretSchema(t,gi.cons(s),r,n));var Jw={compile:Kw,interpret:zw};const{Core:Ls,Schema:cl}=k,Gw=async(t,e)=>{const r=await cl.get(cl.value(t),t);return Ls.compileSchema(r,e)},Hw=Ls.interpretSchema,Xw=Ls.collectEvaluatedProperties,Yw=Ls.collectEvaluatedItems;var Ww={compile:Gw,interpret:Hw,collectEvaluatedProperties:Xw,collectEvaluatedItems:Yw};const{Schema:Qw,Instance:ll}=k,Zw=t=>Qw.value(t),e2=(t,e)=>!ll.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(ll.value(e),r));var t2={compile:Zw,interpret:e2};const{Core:Dp,Schema:r2,Instance:fl}=k,pl=Oe,n2=(t,e)=>pl.pipeline([r2.map(r=>Dp.compileSchema(r,e)),pl.all],t),Lp=(t,e,r,n)=>fl.typeOf(e,"array")?fl.every((s,i)=>!(i in t)||Dp.interpretSchema(t[i],s,r,n),e):!0,s2=(t,e,r,n)=>Lp(t,e,r,n)&&new Set(t.map((s,i)=>i));var i2={compile:n2,interpret:Lp,collectEvaluatedItems:s2};const{Schema:a2,Instance:ul}=k,o2=t=>a2.value(t),c2=(t,e)=>typeof t=="string"?ul.typeOf(e,t):t.some(ul.typeOf(e));var l2={compile:o2,interpret:c2};const{Core:Bi,Schema:f2,Instance:es}=k,p2=async(t,e,r)=>[f2.uri(r),await Bi.compileSchema(t,e)],Mp=([t,e],r,n,s)=>{if(!es.typeOf(r,"array"))return!0;const i=Bi.collectEvaluatedItems(t,r,n,s,!0);return i===!1||es.every((a,o)=>i.has(o)||Bi.interpretSchema(e,es.step(o,r),n,s),r)},u2=(t,e,r,n)=>Mp(t,e,r,n)&&new Set(es.map((s,i)=>i,e));var d2={compile:p2,interpret:Mp,collectEvaluatedItems:u2};const{Core:Ui,Schema:m2,Instance:dl}=k,h2=async(t,e,r)=>[m2.uri(r),await Ui.compileSchema(t,e)],Bp=([t,e],r,n,s)=>{if(!dl.typeOf(r,"object"))return!0;const i=Ui.collectEvaluatedProperties(t,r,n,s,!0);return!i||dl.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>Ui.interpretSchema(e,a,n,s))},y2=(t,e,r,n)=>Bp(t,e,r,n)&&[new RegExp("")];var $2={compile:h2,interpret:Bp,collectEvaluatedProperties:y2};const{Schema:g2,Instance:vi}=k,v2=qr,b2=t=>g2.value(t),S2=(t,e)=>{if(!vi.typeOf(e,"array")||t===!1)return!0;const r=vi.map(n=>v2(vi.value(n)),e);return new Set(r).size===r.length};var w2={compile:b2,interpret:S2};const{Keywords:ml}=k;var I2={additionalItems:b1,additionalItems6:I1,additionalProperties:P1,additionalProperties6:_1,allOf:R1,anyOf:U1,const:J1,contains:X1,containsMinContainsMaxContains:Q1,containsMinContainsMaxContainsFUTURE:r0,definitions:o0,dependencies:f0,dependentRequired:d0,dependentSchemas:g0,dynamicRef:k0,dynamicRefNEXT:C0,dynamicRefPROPOSED:M0,enum:K0,exclusiveMaximum:H0,exclusiveMinimum:Q0,if:nS,then:cS,else:dS,items:yS,items202012:vS,maxItems:IS,maxLength:kS,maxLength6:xS,maxProperties:RS,maximumExclusiveMaximum:LS,maximum:FS,metaData:ml.metaData,minItems:JS,minLength:YS,minLength6:ew,minProperties:sw,minimumExclusiveMinimum:ow,minimum:pw,multipleOf:hw,not:gw,oneOf:Ew,optional:kw,pattern:xw,patternProperties:Rw,properties:Bw,propertyDependencies:Vw,propertyNames:Jw,ref:Ww,required:t2,tupleItems:i2,type:l2,unevaluatedItems:d2,unevaluatedProperties:$2,uniqueItems:w2,validate:ml.validate},E2=`{
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
}`,O2=`{
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
}`,P2=`{
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
}`,k2=`{
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
}`,j2=`{
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
}`,_2=`{
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
}`,A2=`{
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
}`,x2=`{
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
}`,N2=`{
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
}`;const{Core:tr,Schema:Me}=k,B=I2,C2=E2,T2=O2,R2=P2,q2=k2,D2=j2,L2=_2,M2=A2,B2=x2,U2=N2,Br="https://json-schema.org/draft/next/schema";Me.setConfig(Br,"baseToken","$id");Me.setConfig(Br,"embeddedToken","$id");Me.setConfig(Br,"anchorToken","$anchor");Me.setConfig(Br,"dynamicAnchorToken","$dynamicAnchor");Me.setConfig(Br,"vocabularyToken","$vocabulary");Me.setConfig(Br,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);Me.add(JSON.parse(C2));Me.add(JSON.parse(T2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:B.validate,$defs:B.definitions,$dynamicRef:B.dynamicRefNEXT,$dref:B.dynamicRefPROPOSED,$ref:B.ref});Me.add(JSON.parse(R2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:B.additionalProperties6,allOf:B.allOf,anyOf:B.anyOf,contains:B.containsMinContainsMaxContainsFUTURE,dependentSchemas:B.dependentSchemas,if:B.if,then:B.then,else:B.else,items:B.items202012,not:B.not,oneOf:B.oneOf,patternProperties:B.patternProperties,prefixItems:B.tupleItems,properties:B.properties,propertyDependencies:B.propertyDependencies,propertyNames:B.propertyNames});Me.add(JSON.parse(q2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:B.const,dependentRequired:B.dependentRequired,enum:B.enum,exclusiveMaximum:B.exclusiveMaximum,exclusiveMinimum:B.exclusiveMinimum,maxItems:B.maxItems,maxLength:B.maxLength6,maxProperties:B.maxProperties,maximum:B.maximum,minItems:B.minItems,minLength:B.minLength6,minProperties:B.minProperties,minimum:B.minimum,multipleOf:B.multipleOf,optional:B.optional,pattern:B.pattern,required:B.required,type:B.type,uniqueItems:B.uniqueItems});Me.add(JSON.parse(D2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:B.metaData,deprecated:B.metaData,description:B.metaData,examples:B.metaData,readOnly:B.metaData,title:B.metaData,writeOnly:B.metaData});Me.add(JSON.parse(L2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:B.metaData});Me.add(JSON.parse(M2));Me.add(JSON.parse(B2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:B.metaData,contentMediaType:B.metaData,contentSchema:B.metaData});Me.add(JSON.parse(U2));tr.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:B.unevaluatedItems,unevaluatedProperties:B.unevaluatedProperties});function F2(t){return{c:ke,l:ke,m:ke,p:ke,i:ke,o:ke,d:ke}}function V2(t){let e,r;return e=new pp({props:{results:t[5]}}),{c(){et(e.$$.fragment)},l(n){tt(e.$$.fragment,n)},m(n,s){rt(e,n,s),r=!0},p(n,s){const i={};s&32&&(i.results=n[5]),e.$set(i)},i(n){r||(Re(e.$$.fragment,n),r=!0)},o(n){qe(e.$$.fragment,n),r=!1},d(n){nt(e,n)}}}function K2(t){return{c:ke,l:ke,m:ke,p:ke,i:ke,o:ke,d:ke}}function z2(t){let e,r,n,s,i,a,o,c,l,p,y,m,$,P,u,d,v,E,b,j,S,_,K,Z,w,N,C,R,z,q,X,le,pe;function F(Y){t[11](Y)}let ve={ns:"schemas",tabs:t[1],newTab:t[7],active:0};t[0]!==void 0&&(ve.format=t[0]),u=new wc({props:ve}),_t.push(()=>yr(u,"format",F)),u.$on("input",t[9]);function We(Y){t[12](Y)}function be(Y){t[13](Y)}function Be(Y){t[14](Y)}let Ue={ns:"instances",tabs:t[2],newTab:t[8]};t[3]!==void 0&&(Ue.selected=t[3]),t[3]!==void 0&&(Ue.active=t[3]),t[0]!==void 0&&(Ue.format=t[0]),b=new wc({props:Ue}),_t.push(()=>yr(b,"selected",We)),_t.push(()=>yr(b,"active",be)),_t.push(()=>yr(b,"format",Be)),b.$on("input",t[10]),w=new pp({props:{results:t[4]}});let ce={ctx:t,current:null,token:null,hasCatch:!1,pending:K2,then:V2,catch:F2,value:18,blocks:[,,,]};return rs(R=t[4],ce),q=new o1({}),{c(){e=_e(),r=J("div"),n=J("button"),s=ie("JSON"),a=J("button"),o=ie("YAML"),l=_e(),p=J("main"),y=J("h1"),m=ie("Hyperjump - JSON Schema Validator"),$=_e(),P=J("div"),et(u.$$.fragment),v=_e(),E=J("div"),et(b.$$.fragment),K=_e(),Z=J("div"),et(w.$$.fragment),N=_e(),C=J("div"),ce.block.c(),z=_e(),et(q.$$.fragment),this.h()},l(Y){au('[data-svelte="svelte-14138tz"]',document.head).forEach(A),e=Ae(Y),r=G(Y,"DIV",{class:!0});var fe=L(r);n=G(fe,"BUTTON",{class:!0});var he=L(n);s=ae(he,"JSON"),he.forEach(A),a=G(fe,"BUTTON",{class:!0});var Fe=L(a);o=ae(Fe,"YAML"),Fe.forEach(A),fe.forEach(A),l=Ae(Y),p=G(Y,"MAIN",{class:!0});var xe=L(p);y=G(xe,"H1",{class:!0});var rr=L(y);m=ae(rr,"Hyperjump - JSON Schema Validator"),rr.forEach(A),$=Ae(xe),P=G(xe,"DIV",{class:!0});var nr=L(P);tt(u.$$.fragment,nr),nr.forEach(A),v=Ae(xe),E=G(xe,"DIV",{class:!0});var Ur=L(E);tt(b.$$.fragment,Ur),Ur.forEach(A),K=Ae(xe),Z=G(xe,"DIV",{class:!0});var kn=L(Z);tt(w.$$.fragment,kn),kn.forEach(A),N=Ae(xe),C=G(xe,"DIV",{class:!0});var jn=L(C);ce.block.l(jn),jn.forEach(A),z=Ae(xe),tt(q.$$.fragment,xe),xe.forEach(A),this.h()},h(){document.title="Hyperjump - JSON Schema Validator",x(n,"class",i=Cn(t[0]==="json"?"selected":"")+" svelte-ub4xmj"),x(a,"class",c=Cn(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"),x(r,"class","format svelte-ub4xmj"),x(y,"class","svelte-ub4xmj"),x(P,"class","editor-section svelte-ub4xmj"),x(E,"class","editor-section svelte-ub4xmj"),x(Z,"class","results "+yl+" svelte-ub4xmj"),x(C,"class","results "+yl+" svelte-ub4xmj"),x(p,"class","svelte-ub4xmj")},m(Y,ne){Q(Y,e,ne),Q(Y,r,ne),T(r,n),T(n,s),T(r,a),T(a,o),Q(Y,l,ne),Q(Y,p,ne),T(p,y),T(y,m),T(p,$),T(p,P),rt(u,P,null),T(p,v),T(p,E),rt(b,E,null),T(p,K),T(p,Z),rt(w,Z,null),T(p,N),T(p,C),ce.block.m(C,ce.anchor=null),ce.mount=()=>C,ce.anchor=null,T(p,z),rt(q,p,null),X=!0,le||(pe=[Jt(n,"click",t[6]("json")),Jt(a,"click",t[6]("yaml"))],le=!0)},p(Y,[ne]){t=Y,(!X||ne&1&&i!==(i=Cn(t[0]==="json"?"selected":"")+" svelte-ub4xmj"))&&x(n,"class",i),(!X||ne&1&&c!==(c=Cn(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"))&&x(a,"class",c);const fe={};ne&2&&(fe.tabs=t[1]),!d&&ne&1&&(d=!0,fe.format=t[0],$r(()=>d=!1)),u.$set(fe);const he={};ne&4&&(he.tabs=t[2]),!j&&ne&8&&(j=!0,he.selected=t[3],$r(()=>j=!1)),!S&&ne&8&&(S=!0,he.active=t[3],$r(()=>S=!1)),!_&&ne&1&&(_=!0,he.format=t[0],$r(()=>_=!1)),b.$set(he);const Fe={};ne&16&&(Fe.results=t[4]),w.$set(Fe),ce.ctx=t,ne&16&&R!==(R=t[4])&&rs(R,ce)||gl(ce,t,ne)},i(Y){X||(Re(u.$$.fragment,Y),Re(b.$$.fragment,Y),Re(w.$$.fragment,Y),Re(ce.block),Re(q.$$.fragment,Y),X=!0)},o(Y){qe(u.$$.fragment,Y),qe(b.$$.fragment,Y),qe(w.$$.fragment,Y);for(let ne=0;ne<3;ne+=1){const fe=ce.blocks[ne];qe(fe)}qe(q.$$.fragment,Y),X=!1},d(Y){Y&&A(e),Y&&A(r),Y&&A(l),Y&&A(p),nt(u),nt(b),nt(w),ce.block.d(),ce.token=null,ce=null,nt(q),le=!1,$l(pe)}}}const hl=750,bi="https://json-schema.org/draft/2020-12/schema",Zr="https://json-schema.hyperjump.io/schema",yl="solarized-dark";function J2(t,e,r){let n,s,i="json";const a=(S,_)=>_==="yaml"?gd.parse(S):JSON.parse(S),o={json:S=>`{
  "$id": "${S}",
  "$schema": "${bi}"
}`,yaml:S=>`$id: '${S}'
$schema: '${bi}'`},c=S=>()=>{r(0,i=S),r(1,y=[l("Schema",Zr,!0)]),r(2,m=[p("Instance")]),r(3,$=0)},l=function(){let S=1;return(_=void 0,K=void 0,Z=!1)=>{const w=K||`${Zr}${++S}`;return{label:_||`Schema ${S}`,text:o[i](w),persistent:Z}}}(),p=function(){let S=1;return()=>({label:`Instance ${S++}`,text:""})}();let y=[l("Schema",Zr,!0)],m=[p("Instance")],$=0;const P=function(S,_){let K;return({detail:Z})=>{clearTimeout(K),K=setTimeout(()=>S(Z),_)}},u=P(S=>r(1,y=S),hl),d=P(S=>r(2,m=S),hl);je.setMetaOutputFormat(je.BASIC);function v(S){i=S,r(0,i)}function E(S){$=S,r(3,$)}function b(S){$=S,r(3,$)}function j(S){i=S,r(0,i)}return t.$$.update=()=>{t.$$.dirty&3&&r(4,n=async function(){y.forEach((_,K)=>{const Z=K===0?Zr:"";je.add(a(_.text||"true",i),Z,bi)});const S=await je.get(Zr);return je.validate(S)}()),t.$$.dirty&29&&r(5,s=async function(){if(m[$].text!==""){let S;try{S=await n}catch{}if(S){const _=S(a(m[$].text,i),je.BASIC);if(_.valid)return _;throw{output:_}}}}())},[i,y,m,$,n,s,c,l,p,u,d,v,E,b,j]}class H2 extends qt{constructor(e){super(),Dt(this,e,J2,z2,Lt,{})}}export{H2 as default};
