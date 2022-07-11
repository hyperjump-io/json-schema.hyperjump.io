import{S as Rt,i as qt,s as Dt,e as J,t as ie,c as G,a as L,h as ae,d as A,b as x,g as Q,J as T,n as ke,l as Nt,k as _e,m as Ae,K as no,L as Kt,M as Qn,N as ml,O as tu,P as jt,j as De,Q as so,R as mr,x as Ze,y as et,z as tt,T as hr,r as Re,p as qe,C as rt,U as ru,V as Zn,W as hl,F as Mi,X as pt,Y as ut,G as Bi,H as Ui,I as Fi,f as _n,Z as nu,_ as An}from"../chunks/index-4a192058.js";const Vi=Symbol.for("yaml.alias"),gi=Symbol.for("yaml.document"),xt=Symbol.for("yaml.map"),yl=Symbol.for("yaml.pair"),It=Symbol.for("yaml.scalar"),kr=Symbol.for("yaml.seq"),Xe=Symbol.for("yaml.node.type"),Ht=t=>!!t&&typeof t=="object"&&t[Xe]===Vi,fn=t=>!!t&&typeof t=="object"&&t[Xe]===gi,Xt=t=>!!t&&typeof t=="object"&&t[Xe]===xt,ge=t=>!!t&&typeof t=="object"&&t[Xe]===yl,de=t=>!!t&&typeof t=="object"&&t[Xe]===It,jr=t=>!!t&&typeof t=="object"&&t[Xe]===kr;function Se(t){if(t&&typeof t=="object")switch(t[Xe]){case xt:case kr:return!0}return!1}function Ie(t){if(t&&typeof t=="object")switch(t[Xe]){case Vi:case xt:case It:case kr:return!0}return!1}const su=t=>(de(t)||Se(t))&&!!t.anchor;class Ki{constructor(e){Object.defineProperty(this,Xe,{value:e})}clone(){const e=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return this.range&&(e.range=this.range.slice()),e}}const Ve=Symbol("break visit"),$l=Symbol("skip children"),ht=Symbol("remove node");function Ct(t,e){const r=gl(e);fn(t)?yr(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):yr(null,t,r,Object.freeze([]))}Ct.BREAK=Ve;Ct.SKIP=$l;Ct.REMOVE=ht;function yr(t,e,r,n){const s=vl(t,e,r,n);if(Ie(s)||ge(s))return bl(t,n,s),yr(t,s,r,n);if(typeof s!="symbol"){if(Se(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=yr(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const i=yr("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=yr("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}async function cs(t,e){const r=gl(e);fn(t)?await $r(null,t.contents,r,Object.freeze([t]))===ht&&(t.contents=null):await $r(null,t,r,Object.freeze([]))}cs.BREAK=Ve;cs.SKIP=$l;cs.REMOVE=ht;async function $r(t,e,r,n){const s=await vl(t,e,r,n);if(Ie(s)||ge(s))return bl(t,n,s),$r(t,s,r,n);if(typeof s!="symbol"){if(Se(e)){n=Object.freeze(n.concat(e));for(let i=0;i<e.items.length;++i){const a=await $r(i,e.items[i],r,n);if(typeof a=="number")i=a-1;else{if(a===Ve)return Ve;a===ht&&(e.items.splice(i,1),i-=1)}}}else if(ge(e)){n=Object.freeze(n.concat(e));const i=await $r("key",e.key,r,n);if(i===Ve)return Ve;i===ht&&(e.key=null);const a=await $r("value",e.value,r,n);if(a===Ve)return Ve;a===ht&&(e.value=null)}}return s}function gl(t){return typeof t=="object"&&(t.Collection||t.Node||t.Value)?Object.assign({Alias:t.Node,Map:t.Node,Scalar:t.Node,Seq:t.Node},t.Value&&{Map:t.Value,Scalar:t.Value,Seq:t.Value},t.Collection&&{Map:t.Collection,Seq:t.Collection},t):t}function vl(t,e,r,n){var s,i,a,o,c;if(typeof r=="function")return r(t,e,n);if(Xt(e))return(s=r.Map)==null?void 0:s.call(r,t,e,n);if(jr(e))return(i=r.Seq)==null?void 0:i.call(r,t,e,n);if(ge(e))return(a=r.Pair)==null?void 0:a.call(r,t,e,n);if(de(e))return(o=r.Scalar)==null?void 0:o.call(r,t,e,n);if(Ht(e))return(c=r.Alias)==null?void 0:c.call(r,t,e,n)}function bl(t,e,r){const n=e[e.length-1];if(Se(n))n.items[t]=r;else if(ge(n))t==="key"?n.key=r:n.value=r;else if(fn(n))n.contents=r;else{const s=Ht(n)?"alias":"scalar";throw new Error(`Cannot replace node with ${s} parent`)}}const iu={"!":"%21",",":"%2C","[":"%5B","]":"%5D","{":"%7B","}":"%7D"},au=t=>t.replace(/[!,[\]{}]/g,e=>iu[e]);class Te{constructor(e,r){this.docStart=null,this.docEnd=!1,this.yaml=Object.assign({},Te.defaultYaml,e),this.tags=Object.assign({},Te.defaultTags,r)}clone(){const e=new Te(this.yaml,this.tags);return e.docStart=this.docStart,e}atDocument(){const e=new Te(this.yaml,this.tags);switch(this.yaml.version){case"1.1":this.atNextDocument=!0;break;case"1.2":this.atNextDocument=!1,this.yaml={explicit:Te.defaultYaml.explicit,version:"1.2"},this.tags=Object.assign({},Te.defaultTags);break}return e}add(e,r){this.atNextDocument&&(this.yaml={explicit:Te.defaultYaml.explicit,version:"1.1"},this.tags=Object.assign({},Te.defaultTags),this.atNextDocument=!1);const n=e.trim().split(/[ \t]+/),s=n.shift();switch(s){case"%TAG":{if(n.length!==2&&(r(0,"%TAG directive should contain exactly two parts"),n.length<2))return!1;const[i,a]=n;return this.tags[i]=a,!0}case"%YAML":{if(this.yaml.explicit=!0,n.length!==1)return r(0,"%YAML directive should contain exactly one part"),!1;const[i]=n;if(i==="1.1"||i==="1.2")return this.yaml.version=i,!0;{const a=/^\d+\.\d+$/.test(i);return r(6,`Unsupported YAML version ${i}`,a),!1}}default:return r(0,`Unknown directive ${s}`,!0),!1}}tagName(e,r){if(e==="!")return"!";if(e[0]!=="!")return r(`Not a valid tag: ${e}`),null;if(e[1]==="<"){const a=e.slice(2,-1);return a==="!"||a==="!!"?(r(`Verbatim tags aren't resolved, so ${e} is invalid.`),null):(e[e.length-1]!==">"&&r("Verbatim tags must end with a >"),a)}const[,n,s]=e.match(/^(.*!)([^!]*)$/);s||r(`The ${e} tag has no suffix`);const i=this.tags[n];return i?i+decodeURIComponent(s):n==="!"?e:(r(`Could not resolve tag: ${e}`),null)}tagString(e){for(const[r,n]of Object.entries(this.tags))if(e.startsWith(n))return r+au(e.substring(n.length));return e[0]==="!"?e:`!<${e}>`}toString(e){const r=this.yaml.explicit?[`%YAML ${this.yaml.version||"1.2"}`]:[],n=Object.entries(this.tags);let s;if(e&&n.length>0&&Ie(e.contents)){const i={};Ct(e.contents,(a,o)=>{Ie(o)&&o.tag&&(i[o.tag]=!0)}),s=Object.keys(i)}else s=[];for(const[i,a]of n)i==="!!"&&a==="tag:yaml.org,2002:"||(!e||s.some(o=>o.startsWith(a)))&&r.push(`%TAG ${i} ${a}`);return r.join(`
`)}}Te.defaultYaml={explicit:!1,version:"1.2"};Te.defaultTags={"!!":"tag:yaml.org,2002:"};function Sl(t){if(/[\x00-\x19\s,[\]{}]/.test(t)){const r=`Anchor must not contain whitespace or control characters: ${JSON.stringify(t)}`;throw new Error(r)}return!0}function wl(t){const e=new Set;return Ct(t,{Value(r,n){n.anchor&&e.add(n.anchor)}}),e}function El(t,e){for(let r=1;;++r){const n=`${t}${r}`;if(!e.has(n))return n}}function ou(t,e){const r=[],n=new Map;let s=null;return{onAnchor:i=>{r.push(i),s||(s=wl(t));const a=El(e,s);return s.add(a),a},setAnchors:()=>{for(const i of r){const a=n.get(i);if(typeof a=="object"&&a.anchor&&(de(a.node)||Se(a.node)))a.node.anchor=a.anchor;else{const o=new Error("Failed to resolve repeated object (this should not happen)");throw o.source=i,o}}},sourceObjects:n}}class ls extends Ki{constructor(e){super(Vi),this.source=e,Object.defineProperty(this,"tag",{set(){throw new Error("Alias nodes cannot have tags")}})}resolve(e){let r;return Ct(e,{Node:(n,s)=>{if(s===this)return Ct.BREAK;s.anchor===this.source&&(r=s)}}),r}toJSON(e,r){if(!r)return{source:this.source};const{anchors:n,doc:s,maxAliasCount:i}=r,a=this.resolve(s);if(!a){const c=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new ReferenceError(c)}const o=n.get(a);if(!o||o.res===void 0){const c="This should not happen: Alias anchor was not resolved?";throw new ReferenceError(c)}if(i>=0&&(o.count+=1,o.aliasCount===0&&(o.aliasCount=Bn(s,a,n)),o.count*o.aliasCount>i)){const c="Excessive alias count indicates a resource exhaustion attack";throw new ReferenceError(c)}return o.res}toString(e,r,n){const s=`*${this.source}`;if(e){if(Sl(this.source),e.options.verifyAliasOrder&&!e.anchors.has(this.source)){const i=`Unresolved alias (the anchor must be set before the alias): ${this.source}`;throw new Error(i)}if(e.implicitKey)return`${s} `}return s}}function Bn(t,e,r){if(Ht(e)){const n=e.resolve(t),s=r&&n&&r.get(n);return s?s.count*s.aliasCount:0}else if(Se(e)){let n=0;for(const s of e.items){const i=Bn(t,s,r);i>n&&(n=i)}return n}else if(ge(e)){const n=Bn(t,e.key,r),s=Bn(t,e.value,r);return Math.max(n,s)}return 1}function yt(t,e,r){if(Array.isArray(t))return t.map((n,s)=>yt(n,String(s),r));if(t&&typeof t.toJSON=="function"){if(!r||!su(t))return t.toJSON(e,r);const n={aliasCount:0,count:1,res:void 0};r.anchors.set(t,n),r.onCreate=i=>{n.res=i,delete r.onCreate};const s=t.toJSON(e,r);return r.onCreate&&r.onCreate(s),s}return typeof t=="bigint"&&!(r!=null&&r.keep)?Number(t):t}const Il=t=>!t||typeof t!="function"&&typeof t!="object";class W extends Ki{constructor(e){super(It),this.value=e}toJSON(e,r){return r!=null&&r.keep?this.value:yt(this.value,e,r)}toString(){return String(this.value)}}W.BLOCK_FOLDED="BLOCK_FOLDED";W.BLOCK_LITERAL="BLOCK_LITERAL";W.PLAIN="PLAIN";W.QUOTE_DOUBLE="QUOTE_DOUBLE";W.QUOTE_SINGLE="QUOTE_SINGLE";const cu="tag:yaml.org,2002:";function lu(t,e,r){var n;if(e){const s=r.filter(a=>a.tag===e),i=(n=s.find(a=>!a.format))!=null?n:s[0];if(!i)throw new Error(`Tag ${e} not found`);return i}return r.find(s=>{var i;return((i=s.identify)==null?void 0:i.call(s,t))&&!s.format})}function rn(t,e,r){var $,m;if(fn(t)&&(t=t.contents),Ie(t))return t;if(ge(t)){const y=(m=($=r.schema[xt]).createNode)==null?void 0:m.call($,r.schema,null,r);return y.items.push(t),y}(t instanceof String||t instanceof Number||t instanceof Boolean||typeof BigInt=="function"&&t instanceof BigInt)&&(t=t.valueOf());const{aliasDuplicateObjects:n,onAnchor:s,onTagObj:i,schema:a,sourceObjects:o}=r;let c;if(n&&t&&typeof t=="object"){if(c=o.get(t),c)return c.anchor||(c.anchor=s(t)),new ls(c.anchor);c={anchor:null,node:null},o.set(t,c)}e!=null&&e.startsWith("!!")&&(e=cu+e.slice(2));let l=lu(t,e,a.tags);if(!l){if(t&&typeof t.toJSON=="function"&&(t=t.toJSON()),!t||typeof t!="object"){const y=new W(t);return c&&(c.node=y),y}l=t instanceof Map?a[xt]:Symbol.iterator in Object(t)?a[kr]:a[xt]}i&&(i(l),delete r.onTagObj);const p=l!=null&&l.createNode?l.createNode(r.schema,t,r):new W(t);return e&&(p.tag=e),c&&(c.node=p),p}function es(t,e,r){let n=r;for(let s=e.length-1;s>=0;--s){const i=e[s];if(typeof i=="number"&&Number.isInteger(i)&&i>=0){const a=[];a[i]=n,n=a}else n=new Map([[i,n]])}return rn(n,void 0,{aliasDuplicateObjects:!1,keepUndefined:!1,onAnchor:()=>{throw new Error("This should not happen, please report a bug.")},schema:t,sourceObjects:new Map})}const Yr=t=>t==null||typeof t=="object"&&!!t[Symbol.iterator]().next().done;class fs extends Ki{constructor(e,r){super(e),Object.defineProperty(this,"schema",{value:r,configurable:!0,enumerable:!1,writable:!0})}clone(e){const r=Object.create(Object.getPrototypeOf(this),Object.getOwnPropertyDescriptors(this));return e&&(r.schema=e),r.items=r.items.map(n=>Ie(n)||ge(n)?n.clone(e):n),this.range&&(r.range=this.range.slice()),r}addIn(e,r){if(Yr(e))this.add(r);else{const[n,...s]=e,i=this.get(n,!0);if(Se(i))i.addIn(s,r);else if(i===void 0&&this.schema)this.set(n,es(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}deleteIn(e){const[r,...n]=e;if(n.length===0)return this.delete(r);const s=this.get(r,!0);if(Se(s))return s.deleteIn(n);throw new Error(`Expected YAML collection at ${r}. Remaining path: ${n}`)}getIn(e,r){const[n,...s]=e,i=this.get(n,!0);return s.length===0?!r&&de(i)?i.value:i:Se(i)?i.getIn(s,r):void 0}hasAllNullValues(e){return this.items.every(r=>{if(!ge(r))return!1;const n=r.value;return n==null||e&&de(n)&&n.value==null&&!n.commentBefore&&!n.comment&&!n.tag})}hasIn(e){const[r,...n]=e;if(n.length===0)return this.has(r);const s=this.get(r,!0);return Se(s)?s.hasIn(n):!1}setIn(e,r){const[n,...s]=e;if(s.length===0)this.set(n,r);else{const i=this.get(n,!0);if(Se(i))i.setIn(s,r);else if(i===void 0&&this.schema)this.set(n,es(this.schema,s,r));else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${s}`)}}}fs.maxFlowStringSingleLineLength=60;const fu=t=>t.replace(/^(?!$)(?: $)?/gm,"#");function wt(t,e){return/^\n+$/.test(t)?t.substring(1):e?t.replace(/^(?! *$)/gm,e):t}const _t=(t,e,r)=>t.endsWith(`
`)?wt(r,e):r.includes(`
`)?`
`+wt(r,e):(t.endsWith(" ")?"":" ")+r,Ol="flow",vi="block",Un="quoted";function ps(t,e,r="flow",{indentAtStart:n,lineWidth:s=80,minContentWidth:i=20,onFold:a,onOverflow:o}={}){if(!s||s<0)return t;const c=Math.max(1+i,1+s-e.length);if(t.length<=c)return t;const l=[],p={};let $=s-e.length;typeof n=="number"&&(n>s-Math.max(2,i)?l.push(0):$=s-n);let m,y,P=!1,u=-1,d=-1,v=-1;r===vi&&(u=io(t,u),u!==-1&&($=u+c));for(let b;b=t[u+=1];){if(r===Un&&b==="\\"){switch(d=u,t[u+1]){case"x":u+=3;break;case"u":u+=5;break;case"U":u+=9;break;default:u+=1}v=u}if(b===`
`)r===vi&&(u=io(t,u)),$=u+c,m=void 0;else{if(b===" "&&y&&y!==" "&&y!==`
`&&y!=="	"){const j=t[u+1];j&&j!==" "&&j!==`
`&&j!=="	"&&(m=u)}if(u>=$)if(m)l.push(m),$=m+c,m=void 0;else if(r===Un){for(;y===" "||y==="	";)y=b,b=t[u+=1],P=!0;const j=u>v+1?u-2:d-1;if(p[j])return t;l.push(j),p[j]=!0,$=j+c,m=void 0}else P=!0}y=b}if(P&&o&&o(),l.length===0)return t;a&&a();let I=t.slice(0,l[0]);for(let b=0;b<l.length;++b){const j=l[b],S=l[b+1]||t.length;j===0?I=`
${e}${t.slice(0,S)}`:(r===Un&&p[j]&&(I+=`${t[j]}\\`),I+=`
${e}${t.slice(j+1,S)}`)}return I}function io(t,e){let r=t[e+1];for(;r===" "||r==="	";){do r=t[e+=1];while(r&&r!==`
`);r=t[e+1]}return e}const us=t=>({indentAtStart:t.indentAtStart,lineWidth:t.options.lineWidth,minContentWidth:t.options.minContentWidth}),ds=t=>/^(%|---|\.\.\.)/m.test(t);function pu(t,e,r){if(!e||e<0)return!1;const n=e-r,s=t.length;if(s<=n)return!1;for(let i=0,a=0;i<s;++i)if(t[i]===`
`){if(i-a>n)return!0;if(a=i+1,s-a<=n)return!1}return!0}function Zr(t,e){const r=JSON.stringify(t);if(e.options.doubleQuotedAsJSON)return r;const{implicitKey:n}=e,s=e.options.doubleQuotedMinMultiLineLength,i=e.indent||(ds(t)?"  ":"");let a="",o=0;for(let c=0,l=r[c];l;l=r[++c])if(l===" "&&r[c+1]==="\\"&&r[c+2]==="n"&&(a+=r.slice(o,c)+"\\ ",c+=1,o=c,l="\\"),l==="\\")switch(r[c+1]){case"u":{a+=r.slice(o,c);const p=r.substr(c+2,4);switch(p){case"0000":a+="\\0";break;case"0007":a+="\\a";break;case"000b":a+="\\v";break;case"001b":a+="\\e";break;case"0085":a+="\\N";break;case"00a0":a+="\\_";break;case"2028":a+="\\L";break;case"2029":a+="\\P";break;default:p.substr(0,2)==="00"?a+="\\x"+p.substr(2):a+=r.substr(c,6)}c+=5,o=c+1}break;case"n":if(n||r[c+2]==='"'||r.length<s)c+=1;else{for(a+=r.slice(o,c)+`

`;r[c+2]==="\\"&&r[c+3]==="n"&&r[c+4]!=='"';)a+=`
`,c+=2;a+=i,r[c+2]===" "&&(a+="\\"),c+=1,o=c+1}break;default:c+=1}return a=o?a+r.slice(o):r,n?a:ps(a,i,Un,us(e))}function bi(t,e){if(e.options.singleQuote===!1||e.implicitKey&&t.includes(`
`)||/[ \t]\n|\n[ \t]/.test(t))return Zr(t,e);const r=e.indent||(ds(t)?"  ":""),n="'"+t.replace(/'/g,"''").replace(/\n+/g,`$&
${r}`)+"'";return e.implicitKey?n:ps(n,r,Ol,us(e))}function en(t,e){const{singleQuote:r}=e.options;let n;if(r===!1)n=Zr;else{const s=t.includes('"'),i=t.includes("'");s&&!i?n=bi:i&&!s?n=Zr:n=r?bi:Zr}return n(t,e)}function Fn({comment:t,type:e,value:r},n,s,i){const{blockQuote:a,commentString:o,lineWidth:c}=n.options;if(!a||/\n[\t ]+$/.test(r)||/^\s*$/.test(r))return en(r,n);const l=n.indent||(n.forceBlockIndent||ds(r)?"  ":""),p=a==="literal"?!0:a==="folded"||e===W.BLOCK_FOLDED?!1:e===W.BLOCK_LITERAL?!0:!pu(r,c,l.length);if(!r)return p?`|
`:`>
`;let $,m;for(m=r.length;m>0;--m){const _=r[m-1];if(_!==`
`&&_!=="	"&&_!==" ")break}let y=r.substring(m);const P=y.indexOf(`
`);P===-1?$="-":r===y||P!==y.length-1?($="+",i&&i()):$="",y&&(r=r.slice(0,-y.length),y[y.length-1]===`
`&&(y=y.slice(0,-1)),y=y.replace(/\n+(?!\n|$)/g,`$&${l}`));let u=!1,d,v=-1;for(d=0;d<r.length;++d){const _=r[d];if(_===" ")u=!0;else if(_===`
`)v=d;else break}let I=r.substring(0,v<d?v+1:d);I&&(r=r.substring(I.length),I=I.replace(/\n+/g,`$&${l}`));let j=(p?"|":">")+(u?l?"2":"1":"")+$;if(t&&(j+=" "+o(t.replace(/ ?[\r\n]+/g," ")),s&&s()),p)return r=r.replace(/\n+/g,`$&${l}`),`${j}
${l}${I}${r}${y}`;r=r.replace(/\n+/g,`
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${l}`);const S=ps(`${I}${r}${y}`,l,vi,us(n));return`${j}
${l}${S}`}function uu(t,e,r,n){const{type:s,value:i}=t,{actualString:a,implicitKey:o,indent:c,inFlow:l}=e;if(o&&/[\n[\]{},]/.test(i)||l&&/[[\]{},]/.test(i))return en(i,e);if(!i||/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(i))return o||l||!i.includes(`
`)?en(i,e):Fn(t,e,r,n);if(!o&&!l&&s!==W.PLAIN&&i.includes(`
`))return Fn(t,e,r,n);if(c===""&&ds(i))return e.forceBlockIndent=!0,Fn(t,e,r,n);const p=i.replace(/\n+/g,`$&
${c}`);if(a){const $=P=>{var u;return P.default&&P.tag!=="tag:yaml.org,2002:str"&&((u=P.test)==null?void 0:u.test(p))},{compat:m,tags:y}=e.doc.schema;if(y.some($)||(m==null?void 0:m.some($)))return en(i,e)}return o?p:ps(p,c,Ol,us(e))}function pn(t,e,r,n){const{implicitKey:s,inFlow:i}=e,a=typeof t.value=="string"?t:Object.assign({},t,{value:String(t.value)});let{type:o}=t;o!==W.QUOTE_DOUBLE&&/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value)&&(o=W.QUOTE_DOUBLE);const c=p=>{switch(p){case W.BLOCK_FOLDED:case W.BLOCK_LITERAL:return s||i?en(a.value,e):Fn(a,e,r,n);case W.QUOTE_DOUBLE:return Zr(a.value,e);case W.QUOTE_SINGLE:return bi(a.value,e);case W.PLAIN:return uu(a,e,r,n);default:return null}};let l=c(o);if(l===null){const{defaultKeyType:p,defaultStringType:$}=e.options,m=s&&p||$;if(l=c(m),l===null)throw new Error(`Unsupported default string type ${m}`)}return l}function Pl(t,e){const r=Object.assign({blockQuote:!0,commentString:fu,defaultKeyType:null,defaultStringType:"PLAIN",directives:null,doubleQuotedAsJSON:!1,doubleQuotedMinMultiLineLength:40,falseStr:"false",indentSeq:!0,lineWidth:80,minContentWidth:20,nullStr:"null",simpleKeys:!1,singleQuote:null,trueStr:"true",verifyAliasOrder:!0},t.schema.toStringOptions,e);let n;switch(r.collectionStyle){case"block":n=!1;break;case"flow":n=!0;break;default:n=null}return{anchors:new Set,doc:t,indent:"",indentStep:typeof r.indent=="number"?" ".repeat(r.indent):"  ",inFlow:n,options:r}}function du(t,e){var s,i,a,o;if(e.tag){const c=t.filter(l=>l.tag===e.tag);if(c.length>0)return(s=c.find(l=>l.format===e.format))!=null?s:c[0]}let r,n;if(de(e)){n=e.value;const c=t.filter(l=>{var p;return(p=l.identify)==null?void 0:p.call(l,n)});r=(i=c.find(l=>l.format===e.format))!=null?i:c.find(l=>!l.format)}else n=e,r=t.find(c=>c.nodeClass&&n instanceof c.nodeClass);if(!r){const c=(o=(a=n==null?void 0:n.constructor)==null?void 0:a.name)!=null?o:typeof n;throw new Error(`Tag not resolved for ${c} value`)}return r}function mu(t,e,{anchors:r,doc:n}){if(!n.directives)return"";const s=[],i=(de(t)||Se(t))&&t.anchor;i&&Sl(i)&&(r.add(i),s.push(`&${i}`));const a=t.tag?t.tag:e.default?null:e.tag;return a&&s.push(n.directives.tagString(a)),s.join(" ")}function zt(t,e,r,n){var c,l;if(ge(t))return t.toString(e,r,n);if(Ht(t)){if(e.doc.directives)return t.toString(e);if((c=e.resolvedAliases)!=null&&c.has(t))throw new TypeError("Cannot stringify circular structure without alias nodes");e.resolvedAliases?e.resolvedAliases.add(t):e.resolvedAliases=new Set([t]),t=t.resolve(e.doc)}let s;const i=Ie(t)?t:e.doc.createNode(t,{onTagObj:p=>s=p});s||(s=du(e.doc.schema.tags,i));const a=mu(i,s,e);a.length>0&&(e.indentAtStart=((l=e.indentAtStart)!=null?l:0)+a.length+1);const o=typeof s.stringify=="function"?s.stringify(i,e,r,n):de(i)?pn(i,e,r,n):i.toString(e,r,n);return a?de(i)||o[0]==="{"||o[0]==="["?`${a} ${o}`:`${a}
${e.indent}${o}`:o}function hu({key:t,value:e},r,n,s){const{allNullValues:i,doc:a,indent:o,indentStep:c,options:{commentString:l,indentSeq:p,simpleKeys:$}}=r;let m=Ie(t)&&t.comment||null;if($){if(m)throw new Error("With simple keys, key nodes cannot have comments");if(Se(t)){const _="With simple keys, collection cannot be used as a key value";throw new Error(_)}}let y=!$&&(!t||m&&e==null&&!r.inFlow||Se(t)||(de(t)?t.type===W.BLOCK_FOLDED||t.type===W.BLOCK_LITERAL:typeof t=="object"));r=Object.assign({},r,{allNullValues:!1,implicitKey:!y&&($||!i),indent:o+c});let P=!1,u=!1,d=zt(t,r,()=>P=!0,()=>u=!0);if(!y&&!r.inFlow&&d.length>1024){if($)throw new Error("With simple keys, single line scalar must not span more than 1024 characters");y=!0}if(r.inFlow){if(i||e==null)return P&&n&&n(),d===""?"?":y?`? ${d}`:d}else if(i&&!$||e==null&&y)return d=`? ${d}`,m&&!P?d+=_t(d,r.indent,l(m)):u&&s&&s(),d;P&&(m=null),y?(m&&(d+=_t(d,r.indent,l(m))),d=`? ${d}
${o}:`):(d=`${d}:`,m&&(d+=_t(d,r.indent,l(m))));let v="",I=null;if(Ie(e)){if(e.spaceBefore&&(v=`
`),e.commentBefore){const _=l(e.commentBefore);v+=`
${wt(_,r.indent)}`}I=e.comment}else e&&typeof e=="object"&&(e=a.createNode(e));r.implicitKey=!1,!y&&!m&&de(e)&&(r.indentAtStart=d.length+1),u=!1,!p&&c.length>=2&&!r.inFlow&&!y&&jr(e)&&!e.flow&&!e.tag&&!e.anchor&&(r.indent=r.indent.substr(2));let b=!1;const j=zt(e,r,()=>b=!0,()=>u=!0);let S=" ";return v||m?j===""&&!r.inFlow?S=v===`
`?`

`:v:S=`${v}
${r.indent}`:!y&&Se(e)?(!(j[0]==="["||j[0]==="{")||j.includes(`
`))&&(S=`
${r.indent}`):(j===""||j[0]===`
`)&&(S=""),d+=S+j,r.inFlow?b&&n&&n():I&&!b?d+=_t(d,r.indent,l(I)):u&&s&&s(),d}function kl(t,e){(t==="debug"||t==="warn")&&(typeof process!="undefined"&&process.emitWarning?process.emitWarning(e):console.warn(e))}const ao="<<";function jl(t,e,{key:r,value:n}){if((t==null?void 0:t.doc.schema.merge)&&yu(r))if(n=Ht(n)?n.resolve(t.doc):n,jr(n))for(const s of n.items)Ds(t,e,s);else if(Array.isArray(n))for(const s of n)Ds(t,e,s);else Ds(t,e,n);else{const s=yt(r,"",t);if(e instanceof Map)e.set(s,yt(n,s,t));else if(e instanceof Set)e.add(s);else{const i=$u(r,s,t),a=yt(n,i,t);i in e?Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0}):e[i]=a}}return e}const yu=t=>t===ao||de(t)&&t.value===ao&&(!t.type||t.type===W.PLAIN);function Ds(t,e,r){const n=t&&Ht(r)?r.resolve(t.doc):r;if(!Xt(n))throw new Error("Merge sources must be maps or map aliases");const s=n.toJSON(null,t,Map);for(const[i,a]of s)e instanceof Map?e.has(i)||e.set(i,a):e instanceof Set?e.add(i):Object.prototype.hasOwnProperty.call(e,i)||Object.defineProperty(e,i,{value:a,writable:!0,enumerable:!0,configurable:!0});return e}function $u(t,e,r){if(e===null)return"";if(typeof e!="object")return String(e);if(Ie(t)&&r&&r.doc){const n=Pl(r.doc,{});n.anchors=new Set;for(const i of r.anchors.keys())n.anchors.add(i.anchor);n.inFlow=!0,n.inStringifyKey=!0;const s=t.toString(n);if(!r.mapKeyWarned){let i=JSON.stringify(s);i.length>40&&(i=i.substring(0,36)+'..."'),kl(r.doc.options.logLevel,`Keys with collection values will be stringified due to JS Object restrictions: ${i}. Set mapAsMap: true to use object keys.`),r.mapKeyWarned=!0}return s}return JSON.stringify(e)}function zi(t,e,r){const n=rn(t,void 0,r),s=rn(e,void 0,r);return new Ce(n,s)}class Ce{constructor(e,r=null){Object.defineProperty(this,Xe,{value:yl}),this.key=e,this.value=r}clone(e){let{key:r,value:n}=this;return Ie(r)&&(r=r.clone(e)),Ie(n)&&(n=n.clone(e)),new Ce(r,n)}toJSON(e,r){const n=r!=null&&r.mapAsMap?new Map:{};return jl(r,n,this)}toString(e,r,n){return e!=null&&e.doc?hu(this,e,r,n):JSON.stringify(this)}}function _l(t,e,r){var i;return(((i=e.inFlow)!=null?i:t.flow)?vu:gu)(t,e,r)}function gu({comment:t,items:e},r,{blockItemPrefix:n,flowChars:s,itemIndent:i,onChompKeep:a,onComment:o}){const{indent:c,options:{commentString:l}}=r,p=Object.assign({},r,{indent:i,type:null});let $=!1;const m=[];for(let P=0;P<e.length;++P){const u=e[P];let d=null;if(Ie(u))!$&&u.spaceBefore&&m.push(""),ts(r,m,u.commentBefore,$),u.comment&&(d=u.comment);else if(ge(u)){const I=Ie(u.key)?u.key:null;I&&(!$&&I.spaceBefore&&m.push(""),ts(r,m,I.commentBefore,$))}$=!1;let v=zt(u,p,()=>d=null,()=>$=!0);d&&(v+=_t(v,i,l(d))),$&&d&&($=!1),m.push(n+v)}let y;if(m.length===0)y=s.start+s.end;else{y=m[0];for(let P=1;P<m.length;++P){const u=m[P];y+=u?`
${c}${u}`:`
`}}return t?(y+=`
`+wt(l(t),c),o&&o()):$&&a&&a(),y}function vu({comment:t,items:e},r,{flowChars:n,itemIndent:s,onComment:i}){const{indent:a,indentStep:o,options:{commentString:c}}=r;s+=o;const l=Object.assign({},r,{indent:s,inFlow:!0,type:null});let p=!1,$=0;const m=[];for(let d=0;d<e.length;++d){const v=e[d];let I=null;if(Ie(v))v.spaceBefore&&m.push(""),ts(r,m,v.commentBefore,!1),v.comment&&(I=v.comment);else if(ge(v)){const j=Ie(v.key)?v.key:null;j&&(j.spaceBefore&&m.push(""),ts(r,m,j.commentBefore,!1),j.comment&&(p=!0));const S=Ie(v.value)?v.value:null;S?(S.comment&&(I=S.comment),S.commentBefore&&(p=!0)):v.value==null&&j&&j.comment&&(I=j.comment)}I&&(p=!0);let b=zt(v,l,()=>I=null);d<e.length-1&&(b+=","),I&&(b+=_t(b,s,c(I))),!p&&(m.length>$||b.includes(`
`))&&(p=!0),m.push(b),$=m.length}let y;const{start:P,end:u}=n;if(m.length===0)y=P+u;else if(p||(p=m.reduce((v,I)=>v+I.length+2,2)>fs.maxFlowStringSingleLineLength),p){y=P;for(const d of m)y+=d?`
${o}${a}${d}`:`
`;y+=`
${a}${u}`}else y=`${P} ${m.join(" ")} ${u}`;return t&&(y+=_t(y,c(t),a),i&&i()),y}function ts({indent:t,options:{commentString:e}},r,n,s){if(n&&s&&(n=n.replace(/^\n+/,"")),n){const i=wt(e(n),t);r.push(i.trimStart())}}function Ut(t,e){const r=de(e)?e.value:e;for(const n of t)if(ge(n)&&(n.key===e||n.key===r||de(n.key)&&n.key.value===r))return n}class He extends fs{constructor(e){super(xt,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:map"}add(e,r){var a;let n;ge(e)?n=e:!e||typeof e!="object"||!("key"in e)?n=new Ce(e,e==null?void 0:e.value):n=new Ce(e.key,e.value);const s=Ut(this.items,n.key),i=(a=this.schema)==null?void 0:a.sortMapEntries;if(s){if(!r)throw new Error(`Key ${n.key} already set`);de(s.value)&&Il(n.value)?s.value.value=n.value:s.value=n.value}else if(i){const o=this.items.findIndex(c=>i(n,c)<0);o===-1?this.items.push(n):this.items.splice(o,0,n)}else this.items.push(n)}delete(e){const r=Ut(this.items,e);return r?this.items.splice(this.items.indexOf(r),1).length>0:!1}get(e,r){var i;const n=Ut(this.items,e),s=n==null?void 0:n.value;return(i=!r&&de(s)?s.value:s)!=null?i:void 0}has(e){return!!Ut(this.items,e)}set(e,r){this.add(new Ce(e,r),!0)}toJSON(e,r,n){const s=n?new n:r!=null&&r.mapAsMap?new Map:{};r!=null&&r.onCreate&&r.onCreate(s);for(const i of this.items)jl(r,s,i);return s}toString(e,r,n){if(!e)return JSON.stringify(this);for(const s of this.items)if(!ge(s))throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);return!e.allNullValues&&this.hasAllNullValues(!1)&&(e=Object.assign({},e,{allNullValues:!0})),_l(this,e,{blockItemPrefix:"",flowChars:{start:"{",end:"}"},itemIndent:e.indent||"",onChompKeep:n,onComment:r})}}function bu(t,e,r){const{keepUndefined:n,replacer:s}=r,i=new He(t),a=(o,c)=>{if(typeof s=="function")c=s.call(e,o,c);else if(Array.isArray(s)&&!s.includes(o))return;(c!==void 0||n)&&i.items.push(zi(o,c,r))};if(e instanceof Map)for(const[o,c]of e)a(o,c);else if(e&&typeof e=="object")for(const o of Object.keys(e))a(o,e[o]);return typeof t.sortMapEntries=="function"&&i.items.sort(t.sortMapEntries),i}const _r={collection:"map",createNode:bu,default:!0,nodeClass:He,tag:"tag:yaml.org,2002:map",resolve(t,e){return Xt(t)||e("Expected a mapping for this tag"),t}};class Yt extends fs{constructor(e){super(kr,e),this.items=[]}static get tagName(){return"tag:yaml.org,2002:seq"}add(e){this.items.push(e)}delete(e){const r=xn(e);return typeof r!="number"?!1:this.items.splice(r,1).length>0}get(e,r){const n=xn(e);if(typeof n!="number")return;const s=this.items[n];return!r&&de(s)?s.value:s}has(e){const r=xn(e);return typeof r=="number"&&r<this.items.length}set(e,r){const n=xn(e);if(typeof n!="number")throw new Error(`Expected a valid index, not ${e}.`);const s=this.items[n];de(s)&&Il(r)?s.value=r:this.items[n]=r}toJSON(e,r){const n=[];r!=null&&r.onCreate&&r.onCreate(n);let s=0;for(const i of this.items)n.push(yt(i,String(s++),r));return n}toString(e,r,n){return e?_l(this,e,{blockItemPrefix:"- ",flowChars:{start:"[",end:"]"},itemIndent:(e.indent||"")+"  ",onChompKeep:n,onComment:r}):JSON.stringify(this)}}function xn(t){let e=de(t)?t.value:t;return e&&typeof e=="string"&&(e=Number(e)),typeof e=="number"&&Number.isInteger(e)&&e>=0?e:null}function Su(t,e,r){const{replacer:n}=r,s=new Yt(t);if(e&&Symbol.iterator in Object(e)){let i=0;for(let a of e){if(typeof n=="function"){const o=e instanceof Set?a:String(i++);a=n.call(e,o,a)}s.items.push(rn(a,void 0,r))}}return s}const Ar={collection:"seq",createNode:Su,default:!0,nodeClass:Yt,tag:"tag:yaml.org,2002:seq",resolve(t,e){return jr(t)||e("Expected a sequence for this tag"),t}},ms={identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify(t,e,r,n){return e=Object.assign({actualString:!0},e),pn(t,e,r,n)}},hs={identify:t=>t==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^(?:~|[Nn]ull|NULL)?$/,resolve:()=>new W(null),stringify:({source:t},e)=>typeof t=="string"&&hs.test.test(t)?t:e.options.nullStr},Ji={identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,resolve:t=>new W(t[0]==="t"||t[0]==="T"),stringify({source:t,value:e},r){if(t&&Ji.test.test(t)){const n=t[0]==="t"||t[0]==="T";if(e===n)return t}return e?r.options.trueStr:r.options.falseStr}};function nt({format:t,minFractionDigits:e,tag:r,value:n}){if(typeof n=="bigint")return String(n);const s=typeof n=="number"?n:Number(n);if(!isFinite(s))return isNaN(s)?".nan":s<0?"-.inf":".inf";let i=JSON.stringify(n);if(!t&&e&&(!r||r==="tag:yaml.org,2002:float")&&/^\d/.test(i)){let a=i.indexOf(".");a<0&&(a=i.length,i+=".");let o=e-(i.length-a-1);for(;o-- >0;)i+="0"}return i}const Al={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:nt},xl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():nt(t)}},Nl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,resolve(t){const e=new W(parseFloat(t)),r=t.indexOf(".");return r!==-1&&t[t.length-1]==="0"&&(e.minFractionDigits=t.length-r-1),e},stringify:nt},ys=t=>typeof t=="bigint"||Number.isInteger(t),Gi=(t,e,r,{intAsBigInt:n})=>n?BigInt(t):parseInt(t.substring(e),r);function Cl(t,e,r){const{value:n}=t;return ys(n)&&n>=0?r+n.toString(e):nt(t)}const Tl={identify:t=>ys(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^0o[0-7]+$/,resolve:(t,e,r)=>Gi(t,2,8,r),stringify:t=>Cl(t,8,"0o")},Rl={identify:ys,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9]+$/,resolve:(t,e,r)=>Gi(t,0,10,r),stringify:nt},ql={identify:t=>ys(t)&&t>=0,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^0x[0-9a-fA-F]+$/,resolve:(t,e,r)=>Gi(t,2,16,r),stringify:t=>Cl(t,16,"0x")},wu=[_r,Ar,ms,hs,Ji,Tl,Rl,ql,Al,xl,Nl];function oo(t){return typeof t=="bigint"||Number.isInteger(t)}const Nn=({value:t})=>JSON.stringify(t),Eu=[{identify:t=>typeof t=="string",default:!0,tag:"tag:yaml.org,2002:str",resolve:t=>t,stringify:Nn},{identify:t=>t==null,createNode:()=>new W(null),default:!0,tag:"tag:yaml.org,2002:null",test:/^null$/,resolve:()=>null,stringify:Nn},{identify:t=>typeof t=="boolean",default:!0,tag:"tag:yaml.org,2002:bool",test:/^true|false$/,resolve:t=>t==="true",stringify:Nn},{identify:oo,default:!0,tag:"tag:yaml.org,2002:int",test:/^-?(?:0|[1-9][0-9]*)$/,resolve:(t,e,{intAsBigInt:r})=>r?BigInt(t):parseInt(t,10),stringify:({value:t})=>oo(t)?t.toString():JSON.stringify(t)},{identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,resolve:t=>parseFloat(t),stringify:Nn}],Iu={default:!0,tag:"",test:/^/,resolve(t,e){return e(`Unresolved plain scalar ${JSON.stringify(t)}`),t}},Ou=[_r,Ar].concat(Eu,Iu),Hi={identify:t=>t instanceof Uint8Array,default:!1,tag:"tag:yaml.org,2002:binary",resolve(t,e){if(typeof Buffer=="function")return Buffer.from(t,"base64");if(typeof atob=="function"){const r=atob(t.replace(/[\n\r]/g,"")),n=new Uint8Array(r.length);for(let s=0;s<r.length;++s)n[s]=r.charCodeAt(s);return n}else return e("This environment does not support reading binary tags; either Buffer or atob is required"),t},stringify({comment:t,type:e,value:r},n,s,i){const a=r;let o;if(typeof Buffer=="function")o=a instanceof Buffer?a.toString("base64"):Buffer.from(a.buffer).toString("base64");else if(typeof btoa=="function"){let c="";for(let l=0;l<a.length;++l)c+=String.fromCharCode(a[l]);o=btoa(c)}else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");if(e||(e=W.BLOCK_LITERAL),e!==W.QUOTE_DOUBLE){const c=Math.max(n.options.lineWidth-n.indent.length,n.options.minContentWidth),l=Math.ceil(o.length/c),p=new Array(l);for(let $=0,m=0;$<l;++$,m+=c)p[$]=o.substr(m,c);o=p.join(e===W.BLOCK_LITERAL?`
`:" ")}return pn({comment:t,type:e,value:o},n,s,i)}};function Dl(t,e){var r;if(jr(t))for(let n=0;n<t.items.length;++n){let s=t.items[n];if(!ge(s)){if(Xt(s)){s.items.length>1&&e("Each pair must have its own sequence indicator");const i=s.items[0]||new Ce(new W(null));if(s.commentBefore&&(i.key.commentBefore=i.key.commentBefore?`${s.commentBefore}
${i.key.commentBefore}`:s.commentBefore),s.comment){const a=(r=i.value)!=null?r:i.key;a.comment=a.comment?`${s.comment}
${a.comment}`:s.comment}s=i}t.items[n]=ge(s)?s:new Ce(s)}}else e("Expected a sequence for this tag");return t}function Ll(t,e,r){const{replacer:n}=r,s=new Yt(t);s.tag="tag:yaml.org,2002:pairs";let i=0;if(e&&Symbol.iterator in Object(e))for(let a of e){typeof n=="function"&&(a=n.call(e,String(i++),a));let o,c;if(Array.isArray(a))if(a.length===2)o=a[0],c=a[1];else throw new TypeError(`Expected [key, value] tuple: ${a}`);else if(a&&a instanceof Object){const l=Object.keys(a);if(l.length===1)o=l[0],c=a[o];else throw new TypeError(`Expected { key: value } tuple: ${a}`)}else o=a;s.items.push(zi(o,c,r))}return s}const Xi={collection:"seq",default:!1,tag:"tag:yaml.org,2002:pairs",resolve:Dl,createNode:Ll};class vr extends Yt{constructor(){super(),this.add=He.prototype.add.bind(this),this.delete=He.prototype.delete.bind(this),this.get=He.prototype.get.bind(this),this.has=He.prototype.has.bind(this),this.set=He.prototype.set.bind(this),this.tag=vr.tag}toJSON(e,r){if(!r)return super.toJSON(e);const n=new Map;r!=null&&r.onCreate&&r.onCreate(n);for(const s of this.items){let i,a;if(ge(s)?(i=yt(s.key,"",r),a=yt(s.value,i,r)):i=yt(s,"",r),n.has(i))throw new Error("Ordered maps must not include duplicate keys");n.set(i,a)}return n}}vr.tag="tag:yaml.org,2002:omap";const Yi={collection:"seq",identify:t=>t instanceof Map,nodeClass:vr,default:!1,tag:"tag:yaml.org,2002:omap",resolve(t,e){const r=Dl(t,e),n=[];for(const{key:s}of r.items)de(s)&&(n.includes(s.value)?e(`Ordered maps must not include duplicate keys: ${s.value}`):n.push(s.value));return Object.assign(new vr,r)},createNode(t,e,r){const n=Ll(t,e,r),s=new vr;return s.items=n.items,s}};function Ml({value:t,source:e},r){return e&&(t?Bl:Ul).test.test(e)?e:t?r.options.trueStr:r.options.falseStr}const Bl={identify:t=>t===!0,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,resolve:()=>new W(!0),stringify:Ml},Ul={identify:t=>t===!1,default:!0,tag:"tag:yaml.org,2002:bool",test:/^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,resolve:()=>new W(!1),stringify:Ml},Pu={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,resolve:t=>t.slice(-3).toLowerCase()==="nan"?NaN:t[0]==="-"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,stringify:nt},ku={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"EXP",test:/^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,resolve:t=>parseFloat(t.replace(/_/g,"")),stringify(t){const e=Number(t.value);return isFinite(e)?e.toExponential():nt(t)}},ju={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",test:/^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,resolve(t){const e=new W(parseFloat(t.replace(/_/g,""))),r=t.indexOf(".");if(r!==-1){const n=t.substring(r+1).replace(/_/g,"");n[n.length-1]==="0"&&(e.minFractionDigits=n.length)}return e},stringify:nt},un=t=>typeof t=="bigint"||Number.isInteger(t);function $s(t,e,r,{intAsBigInt:n}){const s=t[0];if((s==="-"||s==="+")&&(e+=1),t=t.substring(e).replace(/_/g,""),n){switch(r){case 2:t=`0b${t}`;break;case 8:t=`0o${t}`;break;case 16:t=`0x${t}`;break}const a=BigInt(t);return s==="-"?BigInt(-1)*a:a}const i=parseInt(t,r);return s==="-"?-1*i:i}function Wi(t,e,r){const{value:n}=t;if(un(n)){const s=n.toString(e);return n<0?"-"+r+s.substr(1):r+s}return nt(t)}const _u={identify:un,default:!0,tag:"tag:yaml.org,2002:int",format:"BIN",test:/^[-+]?0b[0-1_]+$/,resolve:(t,e,r)=>$s(t,2,2,r),stringify:t=>Wi(t,2,"0b")},Au={identify:un,default:!0,tag:"tag:yaml.org,2002:int",format:"OCT",test:/^[-+]?0[0-7_]+$/,resolve:(t,e,r)=>$s(t,1,8,r),stringify:t=>Wi(t,8,"0")},xu={identify:un,default:!0,tag:"tag:yaml.org,2002:int",test:/^[-+]?[0-9][0-9_]*$/,resolve:(t,e,r)=>$s(t,0,10,r),stringify:nt},Nu={identify:un,default:!0,tag:"tag:yaml.org,2002:int",format:"HEX",test:/^[-+]?0x[0-9a-fA-F_]+$/,resolve:(t,e,r)=>$s(t,2,16,r),stringify:t=>Wi(t,16,"0x")};class br extends He{constructor(e){super(e),this.tag=br.tag}add(e){let r;ge(e)?r=e:typeof e=="object"&&"key"in e&&"value"in e&&e.value===null?r=new Ce(e.key,null):r=new Ce(e,null),Ut(this.items,r.key)||this.items.push(r)}get(e,r){const n=Ut(this.items,e);return!r&&ge(n)?de(n.key)?n.key.value:n.key:n}set(e,r){if(typeof r!="boolean")throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof r}`);const n=Ut(this.items,e);n&&!r?this.items.splice(this.items.indexOf(n),1):!n&&r&&this.items.push(new Ce(e))}toJSON(e,r){return super.toJSON(e,r,Set)}toString(e,r,n){if(!e)return JSON.stringify(this);if(this.hasAllNullValues(!0))return super.toString(Object.assign({},e,{allNullValues:!0}),r,n);throw new Error("Set items must all have null values")}}br.tag="tag:yaml.org,2002:set";const Qi={collection:"map",identify:t=>t instanceof Set,nodeClass:br,default:!1,tag:"tag:yaml.org,2002:set",resolve(t,e){if(Xt(t)){if(t.hasAllNullValues(!0))return Object.assign(new br,t);e("Set items must all have null values")}else e("Expected a mapping for this tag");return t},createNode(t,e,r){const{replacer:n}=r,s=new br(t);if(e&&Symbol.iterator in Object(e))for(let i of e)typeof n=="function"&&(i=n.call(e,i,i)),s.items.push(zi(i,null,r));return s}};function Zi(t,e){const r=t[0],n=r==="-"||r==="+"?t.substring(1):t,s=a=>e?BigInt(a):Number(a),i=n.replace(/_/g,"").split(":").reduce((a,o)=>a*s(60)+s(o),s(0));return r==="-"?s(-1)*i:i}function Fl(t){let{value:e}=t,r=a=>a;if(typeof e=="bigint")r=a=>BigInt(a);else if(isNaN(e)||!isFinite(e))return nt(t);let n="";e<0&&(n="-",e*=r(-1));const s=r(60),i=[e%s];return e<60?i.unshift(0):(e=(e-i[0])/s,i.unshift(e%s),e>=60&&(e=(e-i[0])/s,i.unshift(e))),n+i.map(a=>a<10?"0"+String(a):String(a)).join(":").replace(/000000\d*$/,"")}const Vl={identify:t=>typeof t=="bigint"||Number.isInteger(t),default:!0,tag:"tag:yaml.org,2002:int",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,resolve:(t,e,{intAsBigInt:r})=>Zi(t,r),stringify:Fl},Kl={identify:t=>typeof t=="number",default:!0,tag:"tag:yaml.org,2002:float",format:"TIME",test:/^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,resolve:t=>Zi(t,!1),stringify:Fl},gs={identify:t=>t instanceof Date,default:!0,tag:"tag:yaml.org,2002:timestamp",test:RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),resolve(t){const e=t.match(gs.test);if(!e)throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");const[,r,n,s,i,a,o]=e.map(Number),c=e[7]?Number((e[7]+"00").substr(1,3)):0;let l=Date.UTC(r,n-1,s,i||0,a||0,o||0,c);const p=e[8];if(p&&p!=="Z"){let $=Zi(p,!1);Math.abs($)<30&&($*=60),l-=6e4*$}return new Date(l)},stringify:({value:t})=>t.toISOString().replace(/((T00:00)?:00)?\.000Z$/,"")},co=[_r,Ar,ms,hs,Bl,Ul,_u,Au,xu,Nu,Pu,ku,ju,Hi,Yi,Xi,Qi,Vl,Kl,gs],lo=new Map([["core",wu],["failsafe",[_r,Ar,ms]],["json",Ou],["yaml11",co],["yaml-1.1",co]]),fo={binary:Hi,bool:Ji,float:Nl,floatExp:xl,floatNaN:Al,floatTime:Kl,int:Rl,intHex:ql,intOct:Tl,intTime:Vl,map:_r,null:hs,omap:Yi,pairs:Xi,seq:Ar,set:Qi,timestamp:gs},Cu={"tag:yaml.org,2002:binary":Hi,"tag:yaml.org,2002:omap":Yi,"tag:yaml.org,2002:pairs":Xi,"tag:yaml.org,2002:set":Qi,"tag:yaml.org,2002:timestamp":gs};function Ls(t,e){let r=lo.get(e);if(!r)if(Array.isArray(t))r=[];else{const n=Array.from(lo.keys()).filter(s=>s!=="yaml11").map(s=>JSON.stringify(s)).join(", ");throw new Error(`Unknown schema "${e}"; use one of ${n} or define customTags array`)}if(Array.isArray(t))for(const n of t)r=r.concat(n);else typeof t=="function"&&(r=t(r.slice()));return r.map(n=>{if(typeof n!="string")return n;const s=fo[n];if(s)return s;const i=Object.keys(fo).map(a=>JSON.stringify(a)).join(", ");throw new Error(`Unknown custom tag "${n}"; use one of ${i}`)})}const Tu=(t,e)=>t.key<e.key?-1:t.key>e.key?1:0;class vs{constructor({compat:e,customTags:r,merge:n,resolveKnownTags:s,schema:i,sortMapEntries:a,toStringDefaults:o}){this.compat=Array.isArray(e)?Ls(e,"compat"):e?Ls(null,e):null,this.merge=!!n,this.name=typeof i=="string"&&i||"core",this.knownTags=s?Cu:{},this.tags=Ls(r,this.name),this.toStringOptions=o!=null?o:null,Object.defineProperty(this,xt,{value:_r}),Object.defineProperty(this,It,{value:ms}),Object.defineProperty(this,kr,{value:Ar}),this.sortMapEntries=typeof a=="function"?a:a===!0?Tu:null}clone(){const e=Object.create(vs.prototype,Object.getOwnPropertyDescriptors(this));return e.tags=this.tags.slice(),e}}function Ru(t,e){var c;const r=[];let n=e.directives===!0;if(e.directives!==!1&&t.directives){const l=t.directives.toString(t);l?(r.push(l),n=!0):t.directives.docStart&&(n=!0)}n&&r.push("---");const s=Pl(t,e),{commentString:i}=s.options;if(t.commentBefore){r.length!==1&&r.unshift("");const l=i(t.commentBefore);r.unshift(wt(l,""))}let a=!1,o=null;if(t.contents){if(Ie(t.contents)){if(t.contents.spaceBefore&&n&&r.push(""),t.contents.commentBefore){const $=i(t.contents.commentBefore);r.push(wt($,""))}s.forceBlockIndent=!!t.comment,o=t.contents.comment}const l=o?void 0:()=>a=!0;let p=zt(t.contents,s,()=>o=null,l);o&&(p+=_t(p,"",i(o))),(p[0]==="|"||p[0]===">")&&r[r.length-1]==="---"?r[r.length-1]=`--- ${p}`:r.push(p)}else r.push(zt(t.contents,s));if((c=t.directives)!=null&&c.docEnd)if(t.comment){const l=i(t.comment);l.includes(`
`)?(r.push("..."),r.push(wt(l,""))):r.push(`... ${l}`)}else r.push("...");else{let l=t.comment;l&&a&&(l=l.replace(/^\n+/,"")),l&&((!a||o)&&r[r.length-1]!==""&&r.push(""),r.push(wt(i(l),"")))}return r.join(`
`)+`
`}function Wr(t,e,r,n){if(n&&typeof n=="object")if(Array.isArray(n))for(let s=0,i=n.length;s<i;++s){const a=n[s],o=Wr(t,n,String(s),a);o===void 0?delete n[s]:o!==a&&(n[s]=o)}else if(n instanceof Map)for(const s of Array.from(n.keys())){const i=n.get(s),a=Wr(t,n,s,i);a===void 0?n.delete(s):a!==i&&n.set(s,a)}else if(n instanceof Set)for(const s of Array.from(n)){const i=Wr(t,n,s,s);i===void 0?n.delete(s):i!==s&&(n.delete(s),n.add(i))}else for(const[s,i]of Object.entries(n)){const a=Wr(t,n,s,i);a===void 0?delete n[s]:a!==i&&(n[s]=a)}return t.call(e,r,n)}class xr{constructor(e,r,n){this.commentBefore=null,this.comment=null,this.errors=[],this.warnings=[],Object.defineProperty(this,Xe,{value:gi});let s=null;typeof r=="function"||Array.isArray(r)?s=r:n===void 0&&r&&(n=r,r=void 0);const i=Object.assign({intAsBigInt:!1,keepSourceTokens:!1,logLevel:"warn",prettyErrors:!0,strict:!0,uniqueKeys:!0,version:"1.2"},n);this.options=i;let{version:a}=i;n!=null&&n._directives?(this.directives=n._directives.atDocument(),this.directives.yaml.explicit&&(a=this.directives.yaml.version)):this.directives=new Te({version:a}),this.setSchema(a,n),e===void 0?this.contents=null:this.contents=this.createNode(e,s,n)}clone(){const e=Object.create(xr.prototype,{[Xe]:{value:gi}});return e.commentBefore=this.commentBefore,e.comment=this.comment,e.errors=this.errors.slice(),e.warnings=this.warnings.slice(),e.options=Object.assign({},this.options),this.directives&&(e.directives=this.directives.clone()),e.schema=this.schema.clone(),e.contents=Ie(this.contents)?this.contents.clone(e.schema):this.contents,this.range&&(e.range=this.range.slice()),e}add(e){ir(this.contents)&&this.contents.add(e)}addIn(e,r){ir(this.contents)&&this.contents.addIn(e,r)}createAlias(e,r){if(!e.anchor){const n=wl(this);e.anchor=!r||n.has(r)?El(r||"a",n):r}return new ls(e.anchor)}createNode(e,r,n){let s;if(typeof r=="function")e=r.call({"":e},"",e),s=r;else if(Array.isArray(r)){const d=I=>typeof I=="number"||I instanceof String||I instanceof Number,v=r.filter(d).map(String);v.length>0&&(r=r.concat(v)),s=r}else n===void 0&&r&&(n=r,r=void 0);const{aliasDuplicateObjects:i,anchorPrefix:a,flow:o,keepUndefined:c,onTagObj:l,tag:p}=n!=null?n:{},{onAnchor:$,setAnchors:m,sourceObjects:y}=ou(this,a||"a"),P={aliasDuplicateObjects:i!=null?i:!0,keepUndefined:c!=null?c:!1,onAnchor:$,onTagObj:l,replacer:s,schema:this.schema,sourceObjects:y},u=rn(e,p,P);return o&&Se(u)&&(u.flow=!0),m(),u}createPair(e,r,n={}){const s=this.createNode(e,null,n),i=this.createNode(r,null,n);return new Ce(s,i)}delete(e){return ir(this.contents)?this.contents.delete(e):!1}deleteIn(e){return Yr(e)?this.contents==null?!1:(this.contents=null,!0):ir(this.contents)?this.contents.deleteIn(e):!1}get(e,r){return Se(this.contents)?this.contents.get(e,r):void 0}getIn(e,r){return Yr(e)?!r&&de(this.contents)?this.contents.value:this.contents:Se(this.contents)?this.contents.getIn(e,r):void 0}has(e){return Se(this.contents)?this.contents.has(e):!1}hasIn(e){return Yr(e)?this.contents!==void 0:Se(this.contents)?this.contents.hasIn(e):!1}set(e,r){this.contents==null?this.contents=es(this.schema,[e],r):ir(this.contents)&&this.contents.set(e,r)}setIn(e,r){Yr(e)?this.contents=r:this.contents==null?this.contents=es(this.schema,Array.from(e),r):ir(this.contents)&&this.contents.setIn(e,r)}setSchema(e,r={}){typeof e=="number"&&(e=String(e));let n;switch(e){case"1.1":this.directives?this.directives.yaml.version="1.1":this.directives=new Te({version:"1.1"}),n={merge:!0,resolveKnownTags:!1,schema:"yaml-1.1"};break;case"1.2":case"next":this.directives?this.directives.yaml.version=e:this.directives=new Te({version:e}),n={merge:!1,resolveKnownTags:!0,schema:"core"};break;case null:this.directives&&delete this.directives,n=null;break;default:{const s=JSON.stringify(e);throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${s}`)}}if(r.schema instanceof Object)this.schema=r.schema;else if(n)this.schema=new vs(Object.assign(n,r));else throw new Error("With a null YAML version, the { schema: Schema } option is required")}toJS({json:e,jsonArg:r,mapAsMap:n,maxAliasCount:s,onAnchor:i,reviver:a}={}){const o={anchors:new Map,doc:this,keep:!e,mapAsMap:n===!0,mapKeyWarned:!1,maxAliasCount:typeof s=="number"?s:100,stringify:zt},c=yt(this.contents,r!=null?r:"",o);if(typeof i=="function")for(const{count:l,res:p}of o.anchors.values())i(p,l);return typeof a=="function"?Wr(a,{"":c},"",c):c}toJSON(e,r){return this.toJS({json:!0,jsonArg:e,mapAsMap:!1,onAnchor:r})}toString(e={}){if(this.errors.length>0)throw new Error("Document with errors cannot be stringified");if("indent"in e&&(!Number.isInteger(e.indent)||Number(e.indent)<=0)){const r=JSON.stringify(e.indent);throw new Error(`"indent" option must be a positive integer, not ${r}`)}return Ru(this,e)}}function ir(t){if(Se(t))return!0;throw new Error("Expected a YAML collection as document contents")}class ea extends Error{constructor(e,r,n,s){super(),this.name=e,this.code=n,this.message=s,this.pos=r}}class Ft extends ea{constructor(e,r,n){super("YAMLParseError",e,r,n)}}class zl extends ea{constructor(e,r,n){super("YAMLWarning",e,r,n)}}const rs=(t,e)=>r=>{if(r.pos[0]===-1)return;r.linePos=r.pos.map(o=>e.linePos(o));const{line:n,col:s}=r.linePos[0];r.message+=` at line ${n}, column ${s}`;let i=s-1,a=t.substring(e.lineStarts[n-1],e.lineStarts[n]).replace(/[\n\r]+$/,"");if(i>=60&&a.length>80){const o=Math.min(i-39,a.length-79);a="\u2026"+a.substring(o),i-=o-1}if(a.length>80&&(a=a.substring(0,79)+"\u2026"),n>1&&/^ *$/.test(a.substring(0,i))){let o=t.substring(e.lineStarts[n-2],e.lineStarts[n-1]);o.length>80&&(o=o.substring(0,79)+`\u2026
`),a=o+a}if(/[^ ]/.test(a)){let o=1;const c=r.linePos[1];c&&c.line===n&&c.col>s&&(o=Math.min(c.col-s,80-i));const l=" ".repeat(i)+"^".repeat(o);r.message+=`:

${a}
${l}
`}};function wr(t,{flow:e,indicator:r,next:n,offset:s,onError:i,startOnNewline:a}){let o=!1,c=a,l=a,p="",$="",m=!1,y=!1,P=!1,u=null,d=null,v=null,I=null,b=null;for(const _ of t)switch(P&&(_.type!=="space"&&_.type!=="newline"&&_.type!=="comma"&&i(_.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),P=!1),_.type){case"space":!e&&c&&r!=="doc-start"&&_.source[0]==="	"&&i(_,"TAB_AS_INDENT","Tabs are not allowed as indentation"),l=!0;break;case"comment":{l||i(_,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const K=_.source.substring(1)||" ";p?p+=$+K:p=K,$="",c=!1;break}case"newline":c?p?p+=_.source:o=!0:$+=_.source,c=!0,m=!0,(u||d)&&(y=!0),l=!0;break;case"anchor":u&&i(_,"MULTIPLE_ANCHORS","A node can have at most one anchor"),_.source.endsWith(":")&&i(_.offset+_.source.length-1,"BAD_ALIAS","Anchor ending in : is ambiguous",!0),u=_,b===null&&(b=_.offset),c=!1,l=!1,P=!0;break;case"tag":{d&&i(_,"MULTIPLE_TAGS","A node can have at most one tag"),d=_,b===null&&(b=_.offset),c=!1,l=!1,P=!0;break}case r:(u||d)&&i(_,"BAD_PROP_ORDER",`Anchors and tags must be after the ${_.source} indicator`),I&&i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.source} in ${e!=null?e:"collection"}`),I=_,c=!1,l=!1;break;case"comma":if(e){v&&i(_,"UNEXPECTED_TOKEN",`Unexpected , in ${e}`),v=_,c=!1,l=!1;break}default:i(_,"UNEXPECTED_TOKEN",`Unexpected ${_.type} token`),c=!1,l=!1}const j=t[t.length-1],S=j?j.offset+j.source.length:s;return P&&n&&n.type!=="space"&&n.type!=="newline"&&n.type!=="comma"&&(n.type!=="scalar"||n.source!=="")&&i(n.offset,"MISSING_CHAR","Tags and anchors must be separated from the next token by white space"),{comma:v,found:I,spaceBefore:o,comment:p,hasNewline:m,hasNewlineAfterProp:y,anchor:u,tag:d,end:S,start:b!=null?b:S}}function nn(t){if(!t)return null;switch(t.type){case"alias":case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":if(t.source.includes(`
`))return!0;if(t.end){for(const e of t.end)if(e.type==="newline")return!0}return!1;case"flow-collection":for(const e of t.items){for(const r of e.start)if(r.type==="newline")return!0;if(e.sep){for(const r of e.sep)if(r.type==="newline")return!0}if(nn(e.key)||nn(e.value))return!0}return!1;default:return!0}}function Si(t,e,r){if((e==null?void 0:e.type)==="flow-collection"){const n=e.end[0];n.indent===t&&(n.source==="]"||n.source==="}")&&nn(e)&&r(n,"BAD_INDENT","Flow end indicator should be more indented than parent",!0)}}function Jl(t,e,r){const{uniqueKeys:n}=t.options;if(n===!1)return!1;const s=typeof n=="function"?n:(i,a)=>i===a||de(i)&&de(a)&&i.value===a.value&&!(i.value==="<<"&&t.schema.merge);return e.some(i=>s(i.key,r))}const po="All mapping items must start at the same column";function qu({composeNode:t,composeEmptyNode:e},r,n,s){var o;const i=new He(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset;for(const c of n.items){const{start:l,key:p,sep:$,value:m}=c,y=wr(l,{indicator:"explicit-key-ind",next:p!=null?p:$==null?void 0:$[0],offset:a,onError:s,startOnNewline:!0}),P=!y.found;if(P){if(p&&(p.type==="block-seq"?s(a,"BLOCK_AS_IMPLICIT_KEY","A block sequence may not be used as an implicit map key"):"indent"in p&&p.indent!==n.indent&&s(a,"BAD_INDENT",po)),!y.anchor&&!y.tag&&!$){y.comment&&(i.comment?i.comment+=`
`+y.comment:i.comment=y.comment);continue}(y.hasNewlineAfterProp||nn(p))&&s(p!=null?p:l[l.length-1],"MULTILINE_IMPLICIT_KEY","Implicit keys need to be on a single line")}else((o=y.found)==null?void 0:o.indent)!==n.indent&&s(a,"BAD_INDENT",po);const u=y.end,d=p?t(r,p,y,s):e(r,u,l,null,y,s);r.schema.compat&&Si(n.indent,p,s),Jl(r,i.items,d)&&s(u,"DUPLICATE_KEY","Map keys must be unique");const v=wr($!=null?$:[],{indicator:"map-value-ind",next:m,offset:d.range[2],onError:s,startOnNewline:!p||p.type==="block-scalar"});if(a=v.end,v.found){P&&((m==null?void 0:m.type)==="block-map"&&!v.hasNewline&&s(a,"BLOCK_AS_IMPLICIT_KEY","Nested mappings are not allowed in compact mappings"),r.options.strict&&y.start<v.found.offset-1024&&s(d.range,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));const I=m?t(r,m,v,s):e(r,a,$,null,v,s);r.schema.compat&&Si(n.indent,m,s),a=I.range[2];const b=new Ce(d,I);r.options.keepSourceTokens&&(b.srcToken=c),i.items.push(b)}else{P&&s(d.range,"MISSING_CHAR","Implicit map keys need to be followed by map values"),v.comment&&(d.comment?d.comment+=`
`+v.comment:d.comment=v.comment);const I=new Ce(d);r.options.keepSourceTokens&&(I.srcToken=c),i.items.push(I)}}return i.range=[n.offset,a,a],i}function Du({composeNode:t,composeEmptyNode:e},r,n,s){const i=new Yt(r.schema);r.atRoot&&(r.atRoot=!1);let a=n.offset;for(const{start:o,value:c}of n.items){const l=wr(o,{indicator:"seq-item-ind",next:c,offset:a,onError:s,startOnNewline:!0});if(a=l.end,!l.found)if(l.anchor||l.tag||c)c&&c.type==="block-seq"?s(a,"BAD_INDENT","All sequence items must start at the same column"):s(a,"MISSING_CHAR","Sequence item without - indicator");else{l.comment&&(i.comment=l.comment);continue}const p=c?t(r,c,l,s):e(r,a,o,null,l,s);r.schema.compat&&Si(n.indent,c,s),a=p.range[2],i.items.push(p)}return i.range=[n.offset,a,a],i}function dn(t,e,r,n){let s="";if(t){let i=!1,a="";for(const o of t){const{source:c,type:l}=o;switch(l){case"space":i=!0;break;case"comment":{r&&!i&&n(o,"MISSING_CHAR","Comments must be separated from other tokens by white space characters");const p=c.substring(1)||" ";s?s+=a+p:s=p,a="";break}case"newline":s&&(a+=c),i=!0;break;default:n(o,"UNEXPECTED_TOKEN",`Unexpected ${l} at node end`)}e+=c.length}}return{comment:s,offset:e}}const Ms="Block collections are not allowed within flow collections",Bs=t=>t&&(t.type==="block-map"||t.type==="block-seq");function Lu({composeNode:t,composeEmptyNode:e},r,n,s){var P;const i=n.start.source==="{",a=i?"flow map":"flow sequence",o=i?new He(r.schema):new Yt(r.schema);o.flow=!0;const c=r.atRoot;c&&(r.atRoot=!1);let l=n.offset+n.start.source.length;for(let u=0;u<n.items.length;++u){const d=n.items[u],{start:v,key:I,sep:b,value:j}=d,S=wr(v,{flow:a,indicator:"explicit-key-ind",next:I!=null?I:b==null?void 0:b[0],offset:l,onError:s,startOnNewline:!1});if(!S.found){if(!S.anchor&&!S.tag&&!b&&!j){u===0&&S.comma?s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`):u<n.items.length-1&&s(S.start,"UNEXPECTED_TOKEN",`Unexpected empty item in ${a}`),S.comment&&(o.comment?o.comment+=`
`+S.comment:o.comment=S.comment),l=S.end;continue}!i&&r.options.strict&&nn(I)&&s(I,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line")}if(u===0)S.comma&&s(S.comma,"UNEXPECTED_TOKEN",`Unexpected , in ${a}`);else if(S.comma||s(S.start,"MISSING_CHAR",`Missing , between ${a} items`),S.comment){let _="";e:for(const K of v)switch(K.type){case"comma":case"space":break;case"comment":_=K.source.substring(1);break e;default:break e}if(_){let K=o.items[o.items.length-1];ge(K)&&(K=(P=K.value)!=null?P:K.key),K.comment?K.comment+=`
`+_:K.comment=_,S.comment=S.comment.substring(_.length+1)}}if(!i&&!b&&!S.found){const _=j?t(r,j,S,s):e(r,S.end,b,null,S,s);o.items.push(_),l=_.range[2],Bs(j)&&s(_.range,"BLOCK_IN_FLOW",Ms)}else{const _=S.end,K=I?t(r,I,S,s):e(r,_,v,null,S,s);Bs(I)&&s(K.range,"BLOCK_IN_FLOW",Ms);const Z=wr(b!=null?b:[],{flow:a,indicator:"map-value-ind",next:j,offset:K.range[2],onError:s,startOnNewline:!1});if(Z.found){if(!i&&!S.found&&r.options.strict){if(b)for(const C of b){if(C===Z.found)break;if(C.type==="newline"){s(C,"MULTILINE_IMPLICIT_KEY","Implicit keys of flow sequence pairs need to be on a single line");break}}S.start<Z.found.offset-1024&&s(Z.found,"KEY_OVER_1024_CHARS","The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")}}else j&&("source"in j&&j.source&&j.source[0]===":"?s(j,"MISSING_CHAR",`Missing space after : in ${a}`):s(Z.start,"MISSING_CHAR",`Missing , or : between ${a} items`));const w=j?t(r,j,Z,s):Z.found?e(r,Z.end,b,null,Z,s):null;w?Bs(j)&&s(w.range,"BLOCK_IN_FLOW",Ms):Z.comment&&(K.comment?K.comment+=`
`+Z.comment:K.comment=Z.comment);const N=new Ce(K,w);if(r.options.keepSourceTokens&&(N.srcToken=d),i){const C=o;Jl(r,C.items,K)&&s(_,"DUPLICATE_KEY","Map keys must be unique"),C.items.push(N)}else{const C=new He(r.schema);C.flow=!0,C.items.push(N),o.items.push(C)}l=w?w.range[2]:Z.end}}const p=i?"}":"]",[$,...m]=n.end;let y=l;if($&&$.source===p)y=$.offset+$.source.length;else{const u=a[0].toUpperCase()+a.substring(1),d=c?`${u} must end with a ${p}`:`${u} in block collection must be sufficiently indented and end with a ${p}`;s(l,c?"MISSING_CHAR":"BAD_INDENT",d),$&&$.source.length!==1&&m.unshift($)}if(m.length>0){const u=dn(m,y,r.options.strict,s);u.comment&&(o.comment?o.comment+=`
`+u.comment:o.comment=u.comment),o.range=[n.offset,y,u.offset]}else o.range=[n.offset,y,y];return o}function Mu(t,e,r,n,s){let i;switch(r.type){case"block-map":{i=qu(t,e,r,s);break}case"block-seq":{i=Du(t,e,r,s);break}case"flow-collection":{i=Lu(t,e,r,s);break}}if(!n)return i;const a=e.directives.tagName(n.source,m=>s(n,"TAG_RESOLVE_FAILED",m));if(!a)return i;const o=i.constructor;if(a==="!"||a===o.tagName)return i.tag=o.tagName,i;const c=Xt(i)?"map":"seq";let l=e.schema.tags.find(m=>m.collection===c&&m.tag===a);if(!l){const m=e.schema.knownTags[a];if(m&&m.collection===c)e.schema.tags.push(Object.assign({},m,{default:!1})),l=m;else return s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${a}`,!0),i.tag=a,i}const p=l.resolve(i,m=>s(n,"TAG_RESOLVE_FAILED",m),e.options),$=Ie(p)?p:new W(p);return $.range=i.range,$.tag=a,l!=null&&l.format&&($.format=l.format),$}function Gl(t,e,r){const n=t.offset,s=Bu(t,e,r);if(!s)return{value:"",type:null,comment:"",range:[n,n,n]};const i=s.mode===">"?W.BLOCK_FOLDED:W.BLOCK_LITERAL,a=t.source?Uu(t.source):[];let o=a.length;for(let u=a.length-1;u>=0;--u){const d=a[u][1];if(d===""||d==="\r")o=u;else break}if(o===0){const u=s.chomp==="+"&&a.length>0?`
`.repeat(Math.max(1,a.length-1)):"";let d=n+s.length;return t.source&&(d+=t.source.length),{value:u,type:i,comment:s.comment,range:[n,d,d]}}let c=t.indent+s.indent,l=t.offset+s.length,p=0;for(let u=0;u<o;++u){const[d,v]=a[u];if(v===""||v==="\r")s.indent===0&&d.length>c&&(c=d.length);else{if(d.length<c){const I="Block scalars with more-indented leading empty lines must use an explicit indentation indicator";r(l+d.length,"MISSING_CHAR",I)}s.indent===0&&(c=d.length),p=u;break}l+=d.length+v.length+1}for(let u=a.length-1;u>=o;--u)a[u][0].length>c&&(o=u+1);let $="",m="",y=!1;for(let u=0;u<p;++u)$+=a[u][0].slice(c)+`
`;for(let u=p;u<o;++u){let[d,v]=a[u];l+=d.length+v.length+1;const I=v[v.length-1]==="\r";if(I&&(v=v.slice(0,-1)),v&&d.length<c){const j=`Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;r(l-v.length-(I?2:1),"BAD_INDENT",j),d=""}i===W.BLOCK_LITERAL?($+=m+d.slice(c)+v,m=`
`):d.length>c||v[0]==="	"?(m===" "?m=`
`:!y&&m===`
`&&(m=`

`),$+=m+d.slice(c)+v,m=`
`,y=!0):v===""?m===`
`?$+=`
`:m=`
`:($+=m+v,m=" ",y=!1)}switch(s.chomp){case"-":break;case"+":for(let u=o;u<a.length;++u)$+=`
`+a[u][0].slice(c);$[$.length-1]!==`
`&&($+=`
`);break;default:$+=`
`}const P=n+s.length+t.source.length;return{value:$,type:i,comment:s.comment,range:[n,P,P]}}function Bu({offset:t,props:e},r,n){if(e[0].type!=="block-scalar-header")return n(e[0],"IMPOSSIBLE","Block scalar header not found"),null;const{source:s}=e[0],i=s[0];let a=0,o="",c=-1;for(let m=1;m<s.length;++m){const y=s[m];if(!o&&(y==="-"||y==="+"))o=y;else{const P=Number(y);!a&&P?a=P:c===-1&&(c=t+m)}}c!==-1&&n(c,"UNEXPECTED_TOKEN",`Block scalar header includes extra characters: ${s}`);let l=!1,p="",$=s.length;for(let m=1;m<e.length;++m){const y=e[m];switch(y.type){case"space":l=!0;case"newline":$+=y.source.length;break;case"comment":r&&!l&&n(y,"MISSING_CHAR","Comments must be separated from other tokens by white space characters"),$+=y.source.length,p=y.source.substring(1);break;case"error":n(y,"UNEXPECTED_TOKEN",y.message),$+=y.source.length;break;default:{const P=`Unexpected token in block scalar header: ${y.type}`;n(y,"UNEXPECTED_TOKEN",P);const u=y.source;u&&typeof u=="string"&&($+=u.length)}}}return{mode:i,indent:a,chomp:o,comment:p,length:$}}function Uu(t){const e=t.split(/\n( *)/),r=e[0],n=r.match(/^( *)/),i=[n!=null&&n[1]?[n[1],r.slice(n[1].length)]:["",r]];for(let a=1;a<e.length;a+=2)i.push([e[a],e[a+1]]);return i}function Hl(t,e,r){const{offset:n,type:s,source:i,end:a}=t;let o,c;const l=(m,y,P)=>r(n+m,y,P);switch(s){case"scalar":o=W.PLAIN,c=Fu(i,l);break;case"single-quoted-scalar":o=W.QUOTE_SINGLE,c=Vu(i,l);break;case"double-quoted-scalar":o=W.QUOTE_DOUBLE,c=Ku(i,l);break;default:return r(t,"UNEXPECTED_TOKEN",`Expected a flow scalar value, but found: ${s}`),{value:"",type:null,comment:"",range:[n,n+i.length,n+i.length]}}const p=n+i.length,$=dn(a,p,e,r);return{value:c,type:o,comment:$.comment,range:[n,p,$.offset]}}function Fu(t,e){let r="";switch(t[0]){case"	":r="a tab character";break;case",":r="flow indicator character ,";break;case"%":r="directive indicator character %";break;case"|":case">":{r=`block scalar indicator ${t[0]}`;break}case"@":case"`":{r=`reserved character ${t[0]}`;break}}return r&&e(0,"BAD_SCALAR_START",`Plain value cannot start with ${r}`),Xl(t)}function Vu(t,e){return(t[t.length-1]!=="'"||t.length===1)&&e(t.length,"MISSING_CHAR","Missing closing 'quote"),Xl(t.slice(1,-1)).replace(/''/g,"'")}function Xl(t){var c;let e,r;try{e=new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`,"sy"),r=new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`,"sy")}catch{e=/(.*?)[ \t]*\r?\n/sy,r=/[ \t]*(.*?)[ \t]*\r?\n/sy}let n=e.exec(t);if(!n)return t;let s=n[1],i=" ",a=e.lastIndex;for(r.lastIndex=a;n=r.exec(t);)n[1]===""?i===`
`?s+=i:i=`
`:(s+=i+n[1],i=" "),a=r.lastIndex;const o=/[ \t]*(.*)/sy;return o.lastIndex=a,n=o.exec(t),s+i+((c=n==null?void 0:n[1])!=null?c:"")}function Ku(t,e){let r="";for(let n=1;n<t.length-1;++n){const s=t[n];if(!(s==="\r"&&t[n+1]===`
`))if(s===`
`){const{fold:i,offset:a}=zu(t,n);r+=i,n=a}else if(s==="\\"){let i=t[++n];const a=Ju[i];if(a)r+=a;else if(i===`
`)for(i=t[n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="\r"&&t[n+1]===`
`)for(i=t[++n+1];i===" "||i==="	";)i=t[++n+1];else if(i==="x"||i==="u"||i==="U"){const o={x:2,u:4,U:8}[i];r+=Gu(t,n+1,o,e),n+=o}else{const o=t.substr(n-1,2);e(n-1,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),r+=o}}else if(s===" "||s==="	"){const i=n;let a=t[n+1];for(;a===" "||a==="	";)a=t[++n+1];a!==`
`&&!(a==="\r"&&t[n+2]===`
`)&&(r+=n>i?t.slice(i,n+1):s)}else r+=s}return(t[t.length-1]!=='"'||t.length===1)&&e(t.length,"MISSING_CHAR",'Missing closing "quote'),r}function zu(t,e){let r="",n=t[e+1];for(;(n===" "||n==="	"||n===`
`||n==="\r")&&!(n==="\r"&&t[e+2]!==`
`);)n===`
`&&(r+=`
`),e+=1,n=t[e+1];return r||(r=" "),{fold:r,offset:e}}const Ju={0:"\0",a:"\x07",b:"\b",e:"\x1B",f:"\f",n:`
`,r:"\r",t:"	",v:"\v",N:"\x85",_:"\xA0",L:"\u2028",P:"\u2029"," ":" ",'"':'"',"/":"/","\\":"\\","	":"	"};function Gu(t,e,r,n){const s=t.substr(e,r),a=s.length===r&&/^[0-9a-fA-F]+$/.test(s)?parseInt(s,16):NaN;if(isNaN(a)){const o=t.substr(e-2,r+2);return n(e-2,"BAD_DQ_ESCAPE",`Invalid escape sequence ${o}`),o}return String.fromCodePoint(a)}function Yl(t,e,r,n){const{value:s,type:i,comment:a,range:o}=e.type==="block-scalar"?Gl(e,t.options.strict,n):Hl(e,t.options.strict,n),c=r?t.directives.tagName(r.source,$=>n(r,"TAG_RESOLVE_FAILED",$)):null,l=r&&c?Hu(t.schema,s,c,r,n):e.type==="scalar"?Xu(t,s,e,n):t.schema[It];let p;try{const $=l.resolve(s,m=>n(r!=null?r:e,"TAG_RESOLVE_FAILED",m),t.options);p=de($)?$:new W($)}catch($){const m=$ instanceof Error?$.message:String($);n(r!=null?r:e,"TAG_RESOLVE_FAILED",m),p=new W(s)}return p.range=o,p.source=s,i&&(p.type=i),c&&(p.tag=c),l.format&&(p.format=l.format),a&&(p.comment=a),p}function Hu(t,e,r,n,s){var o;if(r==="!")return t[It];const i=[];for(const c of t.tags)if(!c.collection&&c.tag===r)if(c.default&&c.test)i.push(c);else return c;for(const c of i)if((o=c.test)!=null&&o.test(e))return c;const a=t.knownTags[r];return a&&!a.collection?(t.tags.push(Object.assign({},a,{default:!1,test:void 0})),a):(s(n,"TAG_RESOLVE_FAILED",`Unresolved tag: ${r}`,r!=="tag:yaml.org,2002:str"),t[It])}function Xu({directives:t,schema:e},r,n,s){var a;const i=e.tags.find(o=>{var c;return o.default&&((c=o.test)==null?void 0:c.test(r))})||e[It];if(e.compat){const o=(a=e.compat.find(c=>{var l;return c.default&&((l=c.test)==null?void 0:l.test(r))}))!=null?a:e[It];if(i.tag!==o.tag){const c=t.tagString(i.tag),l=t.tagString(o.tag),p=`Value may be parsed as either ${c} or ${l}`;s(n,"TAG_RESOLVE_FAILED",p,!0)}}return i}function Yu(t,e,r){if(e){r===null&&(r=e.length);for(let n=r-1;n>=0;--n){let s=e[n];switch(s.type){case"space":case"comment":case"newline":t-=s.source.length;continue}for(s=e[++n];(s==null?void 0:s.type)==="space";)t+=s.source.length,s=e[++n];break}}return t}const Wu={composeNode:Wl,composeEmptyNode:ta};function Wl(t,e,r,n){const{spaceBefore:s,comment:i,anchor:a,tag:o}=r;let c,l=!0;switch(e.type){case"alias":c=Qu(t,e,n),(a||o)&&n(e,"ALIAS_PROPS","An alias node must not specify any properties");break;case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"block-scalar":c=Yl(t,e,o,n),a&&(c.anchor=a.source.substring(1));break;case"block-map":case"block-seq":case"flow-collection":c=Mu(Wu,t,e,o,n),a&&(c.anchor=a.source.substring(1));break;default:{const p=e.type==="error"?e.message:`Unsupported token (type: ${e.type})`;n(e,"UNEXPECTED_TOKEN",p),c=ta(t,e.offset,void 0,null,r,n),l=!1}}return a&&c.anchor===""&&n(a,"BAD_ALIAS","Anchor cannot be an empty string"),s&&(c.spaceBefore=!0),i&&(e.type==="scalar"&&e.source===""?c.comment=i:c.commentBefore=i),t.options.keepSourceTokens&&l&&(c.srcToken=e),c}function ta(t,e,r,n,{spaceBefore:s,comment:i,anchor:a,tag:o},c){const l={type:"scalar",offset:Yu(e,r,n),indent:-1,source:""},p=Yl(t,l,o,c);return a&&(p.anchor=a.source.substring(1),p.anchor===""&&c(a,"BAD_ALIAS","Anchor cannot be an empty string")),s&&(p.spaceBefore=!0),i&&(p.comment=i),p}function Qu({options:t},{offset:e,source:r,end:n},s){const i=new ls(r.substring(1));i.source===""&&s(e,"BAD_ALIAS","Alias cannot be an empty string"),i.source.endsWith(":")&&s(e+r.length-1,"BAD_ALIAS","Alias ending in : is ambiguous",!0);const a=e+r.length,o=dn(n,a,t.strict,s);return i.range=[e,a,o.offset],o.comment&&(i.comment=o.comment),i}function Zu(t,e,{offset:r,start:n,value:s,end:i},a){const o=Object.assign({_directives:e},t),c=new xr(void 0,o),l={atRoot:!0,directives:c.directives,options:c.options,schema:c.schema},p=wr(n,{indicator:"doc-start",next:s!=null?s:i==null?void 0:i[0],offset:r,onError:a,startOnNewline:!0});p.found&&(c.directives.docStart=!0,s&&(s.type==="block-map"||s.type==="block-seq")&&!p.hasNewline&&a(p.end,"MISSING_CHAR","Block collection cannot start on same line with directives-end marker")),c.contents=s?Wl(l,s,p,a):ta(l,p.end,n,null,p,a);const $=c.contents.range[2],m=dn(i,$,!1,a);return m.comment&&(c.comment=m.comment),c.range=[r,$,m.offset],c}function Kr(t){if(typeof t=="number")return[t,t+1];if(Array.isArray(t))return t.length===2?t:[t[0],t[1]];const{offset:e,source:r}=t;return[e,e+(typeof r=="string"?r.length:1)]}function uo(t){var s;let e="",r=!1,n=!1;for(let i=0;i<t.length;++i){const a=t[i];switch(a[0]){case"#":e+=(e===""?"":n?`

`:`
`)+(a.substring(1)||" "),r=!0,n=!1;break;case"%":((s=t[i+1])==null?void 0:s[0])!=="#"&&(i+=1),r=!1;break;default:r||(n=!0),r=!1}}return{comment:e,afterEmptyLine:n}}class ra{constructor(e={}){this.doc=null,this.atDirectives=!1,this.prelude=[],this.errors=[],this.warnings=[],this.onError=(r,n,s,i)=>{const a=Kr(r);i?this.warnings.push(new zl(a,n,s)):this.errors.push(new Ft(a,n,s))},this.directives=new Te({version:e.version||"1.2"}),this.options=e}decorate(e,r){const{comment:n,afterEmptyLine:s}=uo(this.prelude);if(n){const i=e.contents;if(r)e.comment=e.comment?`${e.comment}
${n}`:n;else if(s||e.directives.docStart||!i)e.commentBefore=n;else if(Se(i)&&!i.flow&&i.items.length>0){let a=i.items[0];ge(a)&&(a=a.key);const o=a.commentBefore;a.commentBefore=o?`${n}
${o}`:n}else{const a=i.commentBefore;i.commentBefore=a?`${n}
${a}`:n}}r?(Array.prototype.push.apply(e.errors,this.errors),Array.prototype.push.apply(e.warnings,this.warnings)):(e.errors=this.errors,e.warnings=this.warnings),this.prelude=[],this.errors=[],this.warnings=[]}streamInfo(){return{comment:uo(this.prelude).comment,directives:this.directives,errors:this.errors,warnings:this.warnings}}*compose(e,r=!1,n=-1){for(const s of e)yield*this.next(s);yield*this.end(r,n)}*next(e){switch(e.type){case"directive":this.directives.add(e.source,(r,n,s)=>{const i=Kr(e);i[0]+=r,this.onError(i,"BAD_DIRECTIVE",n,s)}),this.prelude.push(e.source),this.atDirectives=!0;break;case"document":{const r=Zu(this.options,this.directives,e,this.onError);this.atDirectives&&!r.directives.docStart&&this.onError(e,"MISSING_CHAR","Missing directives-end/doc-start indicator line"),this.decorate(r,!1),this.doc&&(yield this.doc),this.doc=r,this.atDirectives=!1;break}case"byte-order-mark":case"space":break;case"comment":case"newline":this.prelude.push(e.source);break;case"error":{const r=e.source?`${e.message}: ${JSON.stringify(e.source)}`:e.message,n=new Ft(Kr(e),"UNEXPECTED_TOKEN",r);this.atDirectives||!this.doc?this.errors.push(n):this.doc.errors.push(n);break}case"doc-end":{if(!this.doc){const n="Unexpected doc-end without preceding document";this.errors.push(new Ft(Kr(e),"UNEXPECTED_TOKEN",n));break}this.doc.directives.docEnd=!0;const r=dn(e.end,e.offset+e.source.length,this.doc.options.strict,this.onError);if(this.decorate(this.doc,!0),r.comment){const n=this.doc.comment;this.doc.comment=n?`${n}
${r.comment}`:r.comment}this.doc.range[2]=r.offset;break}default:this.errors.push(new Ft(Kr(e),"UNEXPECTED_TOKEN",`Unsupported token ${e.type}`))}}*end(e=!1,r=-1){if(this.doc)this.decorate(this.doc,!0),yield this.doc,this.doc=null;else if(e){const n=Object.assign({_directives:this.directives},this.options),s=new xr(void 0,n);this.atDirectives&&this.onError(r,"MISSING_CHAR","Missing directives-end indicator line"),s.range=[0,r,r],this.decorate(s,!1),yield s}}}function ed(t,e=!0,r){if(t){const n=(s,i,a)=>{const o=typeof s=="number"?s:Array.isArray(s)?s[0]:s.offset;if(r)r(o,i,a);else throw new Ft([o,o+1],i,a)};switch(t.type){case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return Hl(t,e,n);case"block-scalar":return Gl(t,e,n)}}return null}function td(t,e){var l;const{implicitKey:r=!1,indent:n,inFlow:s=!1,offset:i=-1,type:a="PLAIN"}=e,o=pn({type:a,value:t},{implicitKey:r,indent:n>0?" ".repeat(n):"",inFlow:s,options:{blockQuote:!0,lineWidth:-1}}),c=(l=e.end)!=null?l:[{type:"newline",offset:-1,indent:n,source:`
`}];switch(o[0]){case"|":case">":{const p=o.indexOf(`
`),$=o.substring(0,p),m=o.substring(p+1)+`
`,y=[{type:"block-scalar-header",offset:i,indent:n,source:$}];return Ql(y,c)||y.push({type:"newline",offset:-1,indent:n,source:`
`}),{type:"block-scalar",offset:i,indent:n,props:y,source:m}}case'"':return{type:"double-quoted-scalar",offset:i,indent:n,source:o,end:c};case"'":return{type:"single-quoted-scalar",offset:i,indent:n,source:o,end:c};default:return{type:"scalar",offset:i,indent:n,source:o,end:c}}}function rd(t,e,r={}){let{afterKey:n=!1,implicitKey:s=!1,inFlow:i=!1,type:a}=r,o="indent"in t?t.indent:null;if(n&&typeof o=="number"&&(o+=2),!a)switch(t.type){case"single-quoted-scalar":a="QUOTE_SINGLE";break;case"double-quoted-scalar":a="QUOTE_DOUBLE";break;case"block-scalar":{const l=t.props[0];if(l.type!=="block-scalar-header")throw new Error("Invalid block scalar header");a=l.source[0]===">"?"BLOCK_FOLDED":"BLOCK_LITERAL";break}default:a="PLAIN"}const c=pn({type:a,value:e},{implicitKey:s||o===null,indent:o!==null&&o>0?" ".repeat(o):"",inFlow:i,options:{blockQuote:!0,lineWidth:-1}});switch(c[0]){case"|":case">":nd(t,c);break;case'"':Us(t,c,"double-quoted-scalar");break;case"'":Us(t,c,"single-quoted-scalar");break;default:Us(t,c,"scalar")}}function nd(t,e){const r=e.indexOf(`
`),n=e.substring(0,r),s=e.substring(r+1)+`
`;if(t.type==="block-scalar"){const i=t.props[0];if(i.type!=="block-scalar-header")throw new Error("Invalid block scalar header");i.source=n,t.source=s}else{const{offset:i}=t,a="indent"in t?t.indent:-1,o=[{type:"block-scalar-header",offset:i,indent:a,source:n}];Ql(o,"end"in t?t.end:void 0)||o.push({type:"newline",offset:-1,indent:a,source:`
`});for(const c of Object.keys(t))c!=="type"&&c!=="offset"&&delete t[c];Object.assign(t,{type:"block-scalar",indent:a,props:o,source:s})}}function Ql(t,e){if(e)for(const r of e)switch(r.type){case"space":case"comment":t.push(r);break;case"newline":return t.push(r),!0}return!1}function Us(t,e,r){switch(t.type){case"scalar":case"double-quoted-scalar":case"single-quoted-scalar":t.type=r,t.source=e;break;case"block-scalar":{const n=t.props.slice(1);let s=e.length;t.props[0].type==="block-scalar-header"&&(s-=t.props[0].source.length);for(const i of n)i.offset+=s;delete t.props,Object.assign(t,{type:r,source:e,end:n});break}case"block-map":case"block-seq":{const n=t.offset+e.length,s={type:"newline",offset:n,indent:t.indent,source:`
`};delete t.items,Object.assign(t,{type:r,source:e,end:[s]});break}default:{const n="indent"in t?t.indent:-1,s="end"in t&&Array.isArray(t.end)?t.end.filter(i=>i.type==="space"||i.type==="comment"||i.type==="newline"):[];for(const i of Object.keys(t))i!=="type"&&i!=="offset"&&delete t[i];Object.assign(t,{type:r,indent:n,source:e,end:s})}}}const sd=t=>"type"in t?ns(t):Vn(t);function ns(t){switch(t.type){case"block-scalar":{let e="";for(const r of t.props)e+=ns(r);return e+t.source}case"block-map":case"block-seq":{let e="";for(const r of t.items)e+=Vn(r);return e}case"flow-collection":{let e=t.start.source;for(const r of t.items)e+=Vn(r);for(const r of t.end)e+=r.source;return e}case"document":{let e=Vn(t);if(t.end)for(const r of t.end)e+=r.source;return e}default:{let e=t.source;if("end"in t&&t.end)for(const r of t.end)e+=r.source;return e}}}function Vn({start:t,key:e,sep:r,value:n}){let s="";for(const i of t)s+=i.source;if(e&&(s+=ns(e)),r)for(const i of r)s+=i.source;return n&&(s+=ns(n)),s}const wi=Symbol("break visit"),id=Symbol("skip children"),Zl=Symbol("remove item");function Jt(t,e){"type"in t&&t.type==="document"&&(t={start:t.start,value:t.value}),ef(Object.freeze([]),t,e)}Jt.BREAK=wi;Jt.SKIP=id;Jt.REMOVE=Zl;Jt.itemAtPath=(t,e)=>{let r=t;for(const[n,s]of e){const i=r==null?void 0:r[n];if(i&&"items"in i)r=i.items[s];else return}return r};Jt.parentCollection=(t,e)=>{const r=Jt.itemAtPath(t,e.slice(0,-1)),n=e[e.length-1][0],s=r==null?void 0:r[n];if(s&&"items"in s)return s;throw new Error("Parent collection not found")};function ef(t,e,r){let n=r(e,t);if(typeof n=="symbol")return n;for(const s of["key","value"]){const i=e[s];if(i&&"items"in i){for(let a=0;a<i.items.length;++a){const o=ef(Object.freeze(t.concat([[s,a]])),i.items[a],r);if(typeof o=="number")a=o-1;else{if(o===wi)return wi;o===Zl&&(i.items.splice(a,1),a-=1)}}typeof n=="function"&&s==="key"&&(n=n(e,t))}}return typeof n=="function"?n(e,t):n}const bs="\uFEFF",Ss="",ws="",sn="",ad=t=>!!t&&"items"in t,od=t=>!!t&&(t.type==="scalar"||t.type==="single-quoted-scalar"||t.type==="double-quoted-scalar"||t.type==="block-scalar");function cd(t){switch(t){case bs:return"<BOM>";case Ss:return"<DOC>";case ws:return"<FLOW_END>";case sn:return"<SCALAR>";default:return JSON.stringify(t)}}function tf(t){switch(t){case bs:return"byte-order-mark";case Ss:return"doc-mode";case ws:return"flow-error-end";case sn:return"scalar";case"---":return"doc-start";case"...":return"doc-end";case"":case`
`:case`\r
`:return"newline";case"-":return"seq-item-ind";case"?":return"explicit-key-ind";case":":return"map-value-ind";case"{":return"flow-map-start";case"}":return"flow-map-end";case"[":return"flow-seq-start";case"]":return"flow-seq-end";case",":return"comma"}switch(t[0]){case" ":case"	":return"space";case"#":return"comment";case"%":return"directive-line";case"*":return"alias";case"&":return"anchor";case"!":return"tag";case"'":return"single-quoted-scalar";case'"':return"double-quoted-scalar";case"|":case">":return"block-scalar-header"}return null}var ld=Object.freeze(Object.defineProperty({__proto__:null,BOM:bs,DOCUMENT:Ss,FLOW_END:ws,SCALAR:sn,isCollection:ad,isScalar:od,prettyToken:cd,tokenType:tf,createScalarToken:td,resolveAsScalar:ed,setScalarValue:rd,stringify:sd,visit:Jt},Symbol.toStringTag,{value:"Module"}));function Ge(t){switch(t){case void 0:case" ":case`
`:case"\r":case"	":return!0;default:return!1}}const mo="0123456789ABCDEFabcdef".split(""),fd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(""),Fs=",[]{}".split(""),pd=` ,[]{}
\r	`.split(""),Vs=t=>!t||pd.includes(t);class rf{constructor(){this.atEnd=!1,this.blockScalarIndent=-1,this.blockScalarKeep=!1,this.buffer="",this.flowKey=!1,this.flowLevel=0,this.indentNext=0,this.indentValue=0,this.lineEndPos=null,this.next=null,this.pos=0}*lex(e,r=!1){var s;e&&(this.buffer=this.buffer?this.buffer+e:e,this.lineEndPos=null),this.atEnd=!r;let n=(s=this.next)!=null?s:"stream";for(;n&&(r||this.hasChars(1));)n=yield*this.parseNext(n)}atLineEnd(){let e=this.pos,r=this.buffer[e];for(;r===" "||r==="	";)r=this.buffer[++e];return!r||r==="#"||r===`
`?!0:r==="\r"?this.buffer[e+1]===`
`:!1}charAt(e){return this.buffer[this.pos+e]}continueScalar(e){let r=this.buffer[e];if(this.indentNext>0){let n=0;for(;r===" ";)r=this.buffer[++n+e];if(r==="\r"){const s=this.buffer[n+e+1];if(s===`
`||!s&&!this.atEnd)return e+n+1}return r===`
`||n>=this.indentNext||!r&&!this.atEnd?e+n:-1}if(r==="-"||r==="."){const n=this.buffer.substr(e,3);if((n==="---"||n==="...")&&Ge(this.buffer[e+3]))return-1}return e}getLine(){let e=this.lineEndPos;return(typeof e!="number"||e!==-1&&e<this.pos)&&(e=this.buffer.indexOf(`
`,this.pos),this.lineEndPos=e),e===-1?this.atEnd?this.buffer.substring(this.pos):null:(this.buffer[e-1]==="\r"&&(e-=1),this.buffer.substring(this.pos,e))}hasChars(e){return this.pos+e<=this.buffer.length}setNext(e){return this.buffer=this.buffer.substring(this.pos),this.pos=0,this.lineEndPos=null,this.next=e,null}peek(e){return this.buffer.substr(this.pos,e)}*parseNext(e){switch(e){case"stream":return yield*this.parseStream();case"line-start":return yield*this.parseLineStart();case"block-start":return yield*this.parseBlockStart();case"doc":return yield*this.parseDocument();case"flow":return yield*this.parseFlowCollection();case"quoted-scalar":return yield*this.parseQuotedScalar();case"block-scalar":return yield*this.parseBlockScalar();case"plain-scalar":return yield*this.parsePlainScalar()}}*parseStream(){let e=this.getLine();if(e===null)return this.setNext("stream");if(e[0]===bs&&(yield*this.pushCount(1),e=e.substring(1)),e[0]==="%"){let r=e.length;const n=e.indexOf("#");if(n!==-1){const i=e[n-1];(i===" "||i==="	")&&(r=n-1)}for(;;){const i=e[r-1];if(i===" "||i==="	")r-=1;else break}const s=(yield*this.pushCount(r))+(yield*this.pushSpaces(!0));return yield*this.pushCount(e.length-s),this.pushNewline(),"stream"}if(this.atLineEnd()){const r=yield*this.pushSpaces(!0);return yield*this.pushCount(e.length-r),yield*this.pushNewline(),"stream"}return yield Ss,yield*this.parseLineStart()}*parseLineStart(){const e=this.charAt(0);if(!e&&!this.atEnd)return this.setNext("line-start");if(e==="-"||e==="."){if(!this.atEnd&&!this.hasChars(4))return this.setNext("line-start");const r=this.peek(3);if(r==="---"&&Ge(this.charAt(3)))return yield*this.pushCount(3),this.indentValue=0,this.indentNext=0,"doc";if(r==="..."&&Ge(this.charAt(3)))return yield*this.pushCount(3),"stream"}return this.indentValue=yield*this.pushSpaces(!1),this.indentNext>this.indentValue&&!Ge(this.charAt(1))&&(this.indentNext=this.indentValue),yield*this.parseBlockStart()}*parseBlockStart(){const[e,r]=this.peek(2);if(!r&&!this.atEnd)return this.setNext("block-start");if((e==="-"||e==="?"||e===":")&&Ge(r)){const n=(yield*this.pushCount(1))+(yield*this.pushSpaces(!0));return this.indentNext=this.indentValue+1,this.indentValue+=n,yield*this.parseBlockStart()}return"doc"}*parseDocument(){yield*this.pushSpaces(!0);const e=this.getLine();if(e===null)return this.setNext("doc");let r=yield*this.pushIndicators();switch(e[r]){case"#":yield*this.pushCount(e.length-r);case void 0:return yield*this.pushNewline(),yield*this.parseLineStart();case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel=1,"flow";case"}":case"]":return yield*this.pushCount(1),"doc";case"*":return yield*this.pushUntil(Vs),"doc";case'"':case"'":return yield*this.parseQuotedScalar();case"|":case">":return r+=yield*this.parseBlockScalarHeader(),r+=yield*this.pushSpaces(!0),yield*this.pushCount(e.length-r),yield*this.pushNewline(),yield*this.parseBlockScalar();default:return yield*this.parsePlainScalar()}}*parseFlowCollection(){let e,r,n=-1;do e=yield*this.pushNewline(),e>0?(r=yield*this.pushSpaces(!1),this.indentValue=n=r):r=0,r+=yield*this.pushSpaces(!0);while(e+r>0);const s=this.getLine();if(s===null)return this.setNext("flow");if((n!==-1&&n<this.indentNext&&s[0]!=="#"||n===0&&(s.startsWith("---")||s.startsWith("..."))&&Ge(s[3]))&&!(n===this.indentNext-1&&this.flowLevel===1&&(s[0]==="]"||s[0]==="}")))return this.flowLevel=0,yield ws,yield*this.parseLineStart();let i=0;for(;s[i]===",";)i+=yield*this.pushCount(1),i+=yield*this.pushSpaces(!0),this.flowKey=!1;switch(i+=yield*this.pushIndicators(),s[i]){case void 0:return"flow";case"#":return yield*this.pushCount(s.length-i),"flow";case"{":case"[":return yield*this.pushCount(1),this.flowKey=!1,this.flowLevel+=1,"flow";case"}":case"]":return yield*this.pushCount(1),this.flowKey=!0,this.flowLevel-=1,this.flowLevel?"flow":"doc";case"*":return yield*this.pushUntil(Vs),"flow";case'"':case"'":return this.flowKey=!0,yield*this.parseQuotedScalar();case":":{const a=this.charAt(1);if(this.flowKey||Ge(a)||a===",")return this.flowKey=!1,yield*this.pushCount(1),yield*this.pushSpaces(!0),"flow"}default:return this.flowKey=!1,yield*this.parsePlainScalar()}}*parseQuotedScalar(){const e=this.charAt(0);let r=this.buffer.indexOf(e,this.pos+1);if(e==="'")for(;r!==-1&&this.buffer[r+1]==="'";)r=this.buffer.indexOf("'",r+2);else for(;r!==-1;){let i=0;for(;this.buffer[r-1-i]==="\\";)i+=1;if(i%2===0)break;r=this.buffer.indexOf('"',r+1)}const n=this.buffer.substring(0,r);let s=n.indexOf(`
`,this.pos);if(s!==-1){for(;s!==-1;){const i=this.continueScalar(s+1);if(i===-1)break;s=n.indexOf(`
`,i)}s!==-1&&(r=s-(n[s-1]==="\r"?2:1))}if(r===-1){if(!this.atEnd)return this.setNext("quoted-scalar");r=this.buffer.length}return yield*this.pushToIndex(r+1,!1),this.flowLevel?"flow":"doc"}*parseBlockScalarHeader(){this.blockScalarIndent=-1,this.blockScalarKeep=!1;let e=this.pos;for(;;){const r=this.buffer[++e];if(r==="+")this.blockScalarKeep=!0;else if(r>"0"&&r<="9")this.blockScalarIndent=Number(r)-1;else if(r!=="-")break}return yield*this.pushUntil(r=>Ge(r)||r==="#")}*parseBlockScalar(){let e=this.pos-1,r=0,n;e:for(let s=this.pos;n=this.buffer[s];++s)switch(n){case" ":r+=1;break;case`
`:e=s,r=0;break;case"\r":{const i=this.buffer[s+1];if(!i&&!this.atEnd)return this.setNext("block-scalar");if(i===`
`)break}default:break e}if(!n&&!this.atEnd)return this.setNext("block-scalar");if(r>=this.indentNext){this.blockScalarIndent===-1?this.indentNext=r:this.indentNext+=this.blockScalarIndent;do{const s=this.continueScalar(e+1);if(s===-1)break;e=this.buffer.indexOf(`
`,s)}while(e!==-1);if(e===-1){if(!this.atEnd)return this.setNext("block-scalar");e=this.buffer.length}}if(!this.blockScalarKeep)do{let s=e-1,i=this.buffer[s];i==="\r"&&(i=this.buffer[--s]);const a=s;for(;i===" "||i==="	";)i=this.buffer[--s];if(i===`
`&&s>=this.pos&&s+1+r>a)e=s;else break}while(!0);return yield sn,yield*this.pushToIndex(e+1,!0),yield*this.parseLineStart()}*parsePlainScalar(){const e=this.flowLevel>0;let r=this.pos-1,n=this.pos-1,s;for(;s=this.buffer[++n];)if(s===":"){const i=this.buffer[n+1];if(Ge(i)||e&&i===",")break;r=n}else if(Ge(s)){let i=this.buffer[n+1];if(s==="\r"&&(i===`
`?(n+=1,s=`
`,i=this.buffer[n+1]):r=n),i==="#"||e&&Fs.includes(i))break;if(s===`
`){const a=this.continueScalar(n+1);if(a===-1)break;n=Math.max(n,a-2)}}else{if(e&&Fs.includes(s))break;r=n}return!s&&!this.atEnd?this.setNext("plain-scalar"):(yield sn,yield*this.pushToIndex(r+1,!0),e?"flow":"doc")}*pushCount(e){return e>0?(yield this.buffer.substr(this.pos,e),this.pos+=e,e):0}*pushToIndex(e,r){const n=this.buffer.slice(this.pos,e);return n?(yield n,this.pos+=n.length,n.length):(r&&(yield""),0)}*pushIndicators(){switch(this.charAt(0)){case"!":return(yield*this.pushTag())+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"&":return(yield*this.pushUntil(Vs))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators());case"-":case"?":case":":{const e=this.flowLevel>0,r=this.charAt(1);if(Ge(r)||e&&Fs.includes(r))return e?this.flowKey&&(this.flowKey=!1):this.indentNext=this.indentValue+1,(yield*this.pushCount(1))+(yield*this.pushSpaces(!0))+(yield*this.pushIndicators())}}return 0}*pushTag(){if(this.charAt(1)==="<"){let e=this.pos+2,r=this.buffer[e];for(;!Ge(r)&&r!==">";)r=this.buffer[++e];return yield*this.pushToIndex(r===">"?e+1:e,!1)}else{let e=this.pos+1,r=this.buffer[e];for(;r;)if(fd.includes(r))r=this.buffer[++e];else if(r==="%"&&mo.includes(this.buffer[e+1])&&mo.includes(this.buffer[e+2]))r=this.buffer[e+=3];else break;return yield*this.pushToIndex(e,!1)}}*pushNewline(){const e=this.buffer[this.pos];return e===`
`?yield*this.pushCount(1):e==="\r"&&this.charAt(1)===`
`?yield*this.pushCount(2):0}*pushSpaces(e){let r=this.pos-1,n;do n=this.buffer[++r];while(n===" "||e&&n==="	");const s=r-this.pos;return s>0&&(yield this.buffer.substr(this.pos,s),this.pos=r),s}*pushUntil(e){let r=this.pos,n=this.buffer[r];for(;!e(n);)n=this.buffer[++r];return yield*this.pushToIndex(r,!1)}}class nf{constructor(){this.lineStarts=[],this.addNewLine=e=>this.lineStarts.push(e),this.linePos=e=>{let r=0,n=this.lineStarts.length;for(;r<n;){const i=r+n>>1;this.lineStarts[i]<e?r=i+1:n=i}if(this.lineStarts[r]===e)return{line:r+1,col:1};if(r===0)return{line:0,col:e};const s=this.lineStarts[r-1];return{line:r,col:e-s+1}}}}function Qe(t,e){for(let r=0;r<t.length;++r)if(t[r].type===e)return!0;return!1}function ho(t){for(let e=0;e<t.length;++e)switch(t[e].type){case"space":case"comment":case"newline":break;default:return e}return-1}function sf(t){switch(t==null?void 0:t.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":case"flow-collection":return!0;default:return!1}}function Cn(t){var e;switch(t.type){case"document":return t.start;case"block-map":{const r=t.items[t.items.length-1];return(e=r.sep)!=null?e:r.start}case"block-seq":return t.items[t.items.length-1].start;default:return[]}}function ar(t){var r;if(t.length===0)return[];let e=t.length;e:for(;--e>=0;)switch(t[e].type){case"doc-start":case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":case"newline":break e}for(;((r=t[++e])==null?void 0:r.type)==="space";);return t.splice(e,t.length)}function yo(t){if(t.start.type==="flow-seq-start")for(const e of t.items)e.sep&&!e.value&&!Qe(e.start,"explicit-key-ind")&&!Qe(e.sep,"map-value-ind")&&(e.key&&(e.value=e.key),delete e.key,sf(e.value)?e.value.end?Array.prototype.push.apply(e.value.end,e.sep):e.value.end=e.sep:Array.prototype.push.apply(e.start,e.sep),delete e.sep)}class na{constructor(e){this.atNewLine=!0,this.atScalar=!1,this.indent=0,this.offset=0,this.onKeyLine=!1,this.stack=[],this.source="",this.type="",this.lexer=new rf,this.onNewLine=e}*parse(e,r=!1){this.onNewLine&&this.offset===0&&this.onNewLine(0);for(const n of this.lexer.lex(e,r))yield*this.next(n);r||(yield*this.end())}*next(e){if(this.source=e,this.atScalar){this.atScalar=!1,yield*this.step(),this.offset+=e.length;return}const r=tf(e);if(r)if(r==="scalar")this.atNewLine=!1,this.atScalar=!0,this.type="scalar";else{switch(this.type=r,yield*this.step(),r){case"newline":this.atNewLine=!0,this.indent=0,this.onNewLine&&this.onNewLine(this.offset+e.length);break;case"space":this.atNewLine&&e[0]===" "&&(this.indent+=e.length);break;case"explicit-key-ind":case"map-value-ind":case"seq-item-ind":this.atNewLine&&(this.indent+=e.length);break;case"doc-mode":case"flow-error-end":return;default:this.atNewLine=!1}this.offset+=e.length}else{const n=`Not a YAML token: ${e}`;yield*this.pop({type:"error",offset:this.offset,message:n,source:e}),this.offset+=e.length}}*end(){for(;this.stack.length>0;)yield*this.pop()}get sourceToken(){return{type:this.type,offset:this.offset,indent:this.indent,source:this.source}}*step(){const e=this.peek(1);if(this.type==="doc-end"&&(!e||e.type!=="doc-end")){for(;this.stack.length>0;)yield*this.pop();this.stack.push({type:"doc-end",offset:this.offset,source:this.source});return}if(!e)return yield*this.stream();switch(e.type){case"document":return yield*this.document(e);case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return yield*this.scalar(e);case"block-scalar":return yield*this.blockScalar(e);case"block-map":return yield*this.blockMap(e);case"block-seq":return yield*this.blockSequence(e);case"flow-collection":return yield*this.flowCollection(e);case"doc-end":return yield*this.documentEnd(e)}yield*this.pop()}peek(e){return this.stack[this.stack.length-e]}*pop(e){const r=e!=null?e:this.stack.pop();if(r)if(this.stack.length===0)yield r;else{const n=this.peek(1);switch(r.type==="block-scalar"?r.indent="indent"in n?n.indent:0:r.type==="flow-collection"&&n.type==="document"&&(r.indent=0),r.type==="flow-collection"&&yo(r),n.type){case"document":n.value=r;break;case"block-scalar":n.props.push(r);break;case"block-map":{const s=n.items[n.items.length-1];if(s.value){n.items.push({start:[],key:r,sep:[]}),this.onKeyLine=!0;return}else if(s.sep)s.value=r;else{Object.assign(s,{key:r,sep:[]}),this.onKeyLine=!Qe(s.start,"explicit-key-ind");return}break}case"block-seq":{const s=n.items[n.items.length-1];s.value?n.items.push({start:[],value:r}):s.value=r;break}case"flow-collection":{const s=n.items[n.items.length-1];!s||s.value?n.items.push({start:[],key:r,sep:[]}):s.sep?s.value=r:Object.assign(s,{key:r,sep:[]});return}default:yield*this.pop(),yield*this.pop(r)}if((n.type==="document"||n.type==="block-map"||n.type==="block-seq")&&(r.type==="block-map"||r.type==="block-seq")){const s=r.items[r.items.length-1];s&&!s.sep&&!s.value&&s.start.length>0&&ho(s.start)===-1&&(r.indent===0||s.start.every(i=>i.type!=="comment"||i.indent<r.indent))&&(n.type==="document"?n.end=s.start:n.items.push({start:s.start}),r.items.splice(-1,1))}}else{const n="Tried to pop an empty stack";yield{type:"error",offset:this.offset,source:"",message:n}}}*stream(){switch(this.type){case"directive-line":yield{type:"directive",offset:this.offset,source:this.source};return;case"byte-order-mark":case"space":case"comment":case"newline":yield this.sourceToken;return;case"doc-mode":case"doc-start":{const e={type:"document",offset:this.offset,start:[]};this.type==="doc-start"&&e.start.push(this.sourceToken),this.stack.push(e);return}}yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML stream`,source:this.source}}*document(e){if(e.value)return yield*this.lineEnd(e);switch(this.type){case"doc-start":{ho(e.start)!==-1?(yield*this.pop(),yield*this.step()):e.start.push(this.sourceToken);return}case"anchor":case"tag":case"space":case"comment":case"newline":e.start.push(this.sourceToken);return}const r=this.startBlockValue(e);r?this.stack.push(r):yield{type:"error",offset:this.offset,message:`Unexpected ${this.type} token in YAML document`,source:this.source}}*scalar(e){if(this.type==="map-value-ind"){const r=Cn(this.peek(2)),n=ar(r);let s;e.end?(s=e.end,s.push(this.sourceToken),delete e.end):s=[this.sourceToken];const i={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:n,key:e,sep:s}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=i}else yield*this.lineEnd(e)}*blockScalar(e){switch(this.type){case"space":case"comment":case"newline":e.props.push(this.sourceToken);return;case"scalar":if(e.source=this.source,this.atNewLine=!0,this.indent=0,this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}yield*this.pop();break;default:yield*this.pop(),yield*this.step()}}*blockMap(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(this.onKeyLine=!1,r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else if(r.sep)r.sep.push(this.sourceToken);else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return}if(this.indent>=e.indent){const s=!this.onKeyLine&&this.indent===e.indent&&r.sep;let i=[];if(s&&r.sep&&!r.value){const a=[];for(let o=0;o<r.sep.length;++o){const c=r.sep[o];switch(c.type){case"newline":a.push(o);break;case"space":break;case"comment":c.indent>e.indent&&(a.length=0);break;default:a.length=0}}a.length>=2&&(i=r.sep.splice(a[1]))}switch(this.type){case"anchor":case"tag":s||r.value?(i.push(this.sourceToken),e.items.push({start:i}),this.onKeyLine=!0):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"explicit-key-ind":!r.sep&&!Qe(r.start,"explicit-key-ind")?r.start.push(this.sourceToken):s||r.value?(i.push(this.sourceToken),e.items.push({start:i})):this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]}),this.onKeyLine=!0;return;case"map-value-ind":if(Qe(r.start,"explicit-key-ind"))if(r.sep)if(r.value)e.items.push({start:[],key:null,sep:[this.sourceToken]});else if(Qe(r.sep,"map-value-ind"))this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:i,key:null,sep:[this.sourceToken]}]});else if(sf(r.key)&&!Qe(r.sep,"newline")){const a=ar(r.start),o=r.key,c=r.sep;c.push(this.sourceToken),delete r.key,delete r.sep,this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:o,sep:c}]})}else i.length>0?r.sep=r.sep.concat(i,this.sourceToken):r.sep.push(this.sourceToken);else if(Qe(r.start,"newline"))Object.assign(r,{key:null,sep:[this.sourceToken]});else{const a=ar(r.start);this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:a,key:null,sep:[this.sourceToken]}]})}else r.sep?r.value||s?e.items.push({start:i,key:null,sep:[this.sourceToken]}):Qe(r.sep,"map-value-ind")?this.stack.push({type:"block-map",offset:this.offset,indent:this.indent,items:[{start:[],key:null,sep:[this.sourceToken]}]}):r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});this.onKeyLine=!0;return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const a=this.flowScalar(this.type);s||r.value?(e.items.push({start:i,key:a,sep:[]}),this.onKeyLine=!0):r.sep?this.stack.push(a):(Object.assign(r,{key:a,sep:[]}),this.onKeyLine=!0);return}default:{const a=this.startBlockValue(e);if(a){s&&a.type!=="block-seq"&&Qe(r.start,"explicit-key-ind")&&e.items.push({start:i}),this.stack.push(a);return}}}}yield*this.pop(),yield*this.step()}*blockSequence(e){var n;const r=e.items[e.items.length-1];switch(this.type){case"newline":if(r.value){const s="end"in r.value?r.value.end:void 0,i=Array.isArray(s)?s[s.length-1]:void 0;(i==null?void 0:i.type)==="comment"?s==null||s.push(this.sourceToken):e.items.push({start:[this.sourceToken]})}else r.start.push(this.sourceToken);return;case"space":case"comment":if(r.value)e.items.push({start:[this.sourceToken]});else{if(this.atIndentedComment(r.start,e.indent)){const s=e.items[e.items.length-2],i=(n=s==null?void 0:s.value)==null?void 0:n.end;if(Array.isArray(i)){Array.prototype.push.apply(i,r.start),i.push(this.sourceToken),e.items.pop();return}}r.start.push(this.sourceToken)}return;case"anchor":case"tag":if(r.value||this.indent<=e.indent)break;r.start.push(this.sourceToken);return;case"seq-item-ind":if(this.indent!==e.indent)break;r.value||Qe(r.start,"seq-item-ind")?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return}if(this.indent>e.indent){const s=this.startBlockValue(e);if(s){this.stack.push(s);return}}yield*this.pop(),yield*this.step()}*flowCollection(e){const r=e.items[e.items.length-1];if(this.type==="flow-error-end"){let n;do yield*this.pop(),n=this.peek(1);while(n&&n.type==="flow-collection")}else if(e.end.length===0){switch(this.type){case"comma":case"explicit-key-ind":!r||r.sep?e.items.push({start:[this.sourceToken]}):r.start.push(this.sourceToken);return;case"map-value-ind":!r||r.value?e.items.push({start:[],key:null,sep:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):Object.assign(r,{key:null,sep:[this.sourceToken]});return;case"space":case"comment":case"newline":case"anchor":case"tag":!r||r.value?e.items.push({start:[this.sourceToken]}):r.sep?r.sep.push(this.sourceToken):r.start.push(this.sourceToken);return;case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":{const s=this.flowScalar(this.type);!r||r.value?e.items.push({start:[],key:s,sep:[]}):r.sep?this.stack.push(s):Object.assign(r,{key:s,sep:[]});return}case"flow-map-end":case"flow-seq-end":e.end.push(this.sourceToken);return}const n=this.startBlockValue(e);n?this.stack.push(n):(yield*this.pop(),yield*this.step())}else{const n=this.peek(2);if(n.type==="block-map"&&(this.type==="map-value-ind"&&n.indent===e.indent||this.type==="newline"&&!n.items[n.items.length-1].sep))yield*this.pop(),yield*this.step();else if(this.type==="map-value-ind"&&n.type!=="flow-collection"){const s=Cn(n),i=ar(s);yo(e);const a=e.end.splice(1,e.end.length);a.push(this.sourceToken);const o={type:"block-map",offset:e.offset,indent:e.indent,items:[{start:i,key:e,sep:a}]};this.onKeyLine=!0,this.stack[this.stack.length-1]=o}else yield*this.lineEnd(e)}}flowScalar(e){if(this.onNewLine){let r=this.source.indexOf(`
`)+1;for(;r!==0;)this.onNewLine(this.offset+r),r=this.source.indexOf(`
`,r)+1}return{type:e,offset:this.offset,indent:this.indent,source:this.source}}startBlockValue(e){switch(this.type){case"alias":case"scalar":case"single-quoted-scalar":case"double-quoted-scalar":return this.flowScalar(this.type);case"block-scalar-header":return{type:"block-scalar",offset:this.offset,indent:this.indent,props:[this.sourceToken],source:""};case"flow-map-start":case"flow-seq-start":return{type:"flow-collection",offset:this.offset,indent:this.indent,start:this.sourceToken,items:[],end:[]};case"seq-item-ind":return{type:"block-seq",offset:this.offset,indent:this.indent,items:[{start:[this.sourceToken]}]};case"explicit-key-ind":{this.onKeyLine=!0;const r=Cn(e),n=ar(r);return n.push(this.sourceToken),{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n}]}}case"map-value-ind":{this.onKeyLine=!0;const r=Cn(e),n=ar(r);return{type:"block-map",offset:this.offset,indent:this.indent,items:[{start:n,key:null,sep:[this.sourceToken]}]}}}return null}atIndentedComment(e,r){return this.type!=="comment"||this.indent<=r?!1:e.every(n=>n.type==="newline"||n.type==="space")}*documentEnd(e){this.type!=="doc-mode"&&(e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop()))}*lineEnd(e){switch(this.type){case"comma":case"doc-start":case"doc-end":case"flow-seq-end":case"flow-map-end":case"map-value-ind":yield*this.pop(),yield*this.step();break;case"newline":this.onKeyLine=!1;case"space":case"comment":default:e.end?e.end.push(this.sourceToken):e.end=[this.sourceToken],this.type==="newline"&&(yield*this.pop())}}}function af(t){const e=t.prettyErrors!==!1;return{lineCounter:t.lineCounter||e&&new nf||null,prettyErrors:e}}function ud(t,e={}){const{lineCounter:r,prettyErrors:n}=af(e),s=new na(r==null?void 0:r.addNewLine),i=new ra(e),a=Array.from(i.compose(s.parse(t)));if(n&&r)for(const o of a)o.errors.forEach(rs(t,r)),o.warnings.forEach(rs(t,r));return a.length>0?a:Object.assign([],{empty:!0},i.streamInfo())}function of(t,e={}){const{lineCounter:r,prettyErrors:n}=af(e),s=new na(r==null?void 0:r.addNewLine),i=new ra(e);let a=null;for(const o of i.compose(s.parse(t),!0,t.length))if(!a)a=o;else if(a.options.logLevel!=="silent"){a.errors.push(new Ft(o.range.slice(0,2),"MULTIPLE_DOCS","Source contains multiple documents; please use YAML.parseAllDocuments()"));break}return n&&r&&(a.errors.forEach(rs(t,r)),a.warnings.forEach(rs(t,r))),a}function dd(t,e,r){let n;typeof e=="function"?n=e:r===void 0&&e&&typeof e=="object"&&(r=e);const s=of(t,r);if(!s)return null;if(s.warnings.forEach(i=>kl(s.options.logLevel,i)),s.errors.length>0){if(s.options.logLevel!=="silent")throw s.errors[0];s.errors=[]}return s.toJS(Object.assign({reviver:n},r))}function md(t,e,r){var s;let n=null;if(typeof e=="function"||Array.isArray(e)?n=e:r===void 0&&e&&(r=e),typeof r=="string"&&(r=r.length),typeof r=="number"){const i=Math.round(r);r=i<1?void 0:i>8?{indent:8}:{indent:i}}if(t===void 0){const{keepUndefined:i}=(s=r!=null?r:e)!=null?s:{};if(!i)return}return new xr(t,n,r).toString(r)}var hd=Object.freeze(Object.defineProperty({__proto__:null,CST:ld,Composer:ra,Document:xr,Schema:vs,YAMLError:ea,YAMLParseError:Ft,YAMLWarning:zl,Alias:ls,isAlias:Ht,isCollection:Se,isDocument:fn,isMap:Xt,isNode:Ie,isPair:ge,isScalar:de,isSeq:jr,Pair:Ce,Scalar:W,YAMLMap:He,YAMLSeq:Yt,Lexer:rf,LineCounter:nf,Parser:na,parse:dd,parseAllDocuments:ud,parseDocument:of,stringify:md,visit:Ct,visitAsync:cs},Symbol.toStringTag,{value:"Module"})),sa=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function yd(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})}),e}var $t=$d;function $d(t,e){return function r(){e==null&&(e=t.length);var n=[].slice.call(arguments);return n.length>=e?t.apply(this,n):function(){return r.apply(this,n.concat([].slice.call(arguments)))}}}var ss={exports:{}};(function(t,e){(function(r,n){var s={};r.PubSub?(s=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=s,n(s)),t!==void 0&&t.exports&&(e=t.exports=s),e.PubSub=s,t.exports=e=s})(typeof window=="object"&&window||sa,function(r){var n={},s=-1,i="*";function a(u){var d;for(d in u)if(Object.prototype.hasOwnProperty.call(u,d))return!0;return!1}function o(u){return function(){throw u}}function c(u,d,v){try{u(d,v)}catch(I){setTimeout(o(I),0)}}function l(u,d,v){u(d,v)}function p(u,d,v,I){var b=n[d],j=I?l:c,S;if(!!Object.prototype.hasOwnProperty.call(n,d))for(S in b)Object.prototype.hasOwnProperty.call(b,S)&&j(b[S],u,v)}function $(u,d,v){return function(){var b=String(u),j=b.lastIndexOf(".");for(p(u,u,d,v);j!==-1;)b=b.substr(0,j),j=b.lastIndexOf("."),p(u,b,d,v);p(u,i,d,v)}}function m(u){var d=String(u),v=Boolean(Object.prototype.hasOwnProperty.call(n,d)&&a(n[d]));return v}function y(u){for(var d=String(u),v=m(d)||m(i),I=d.lastIndexOf(".");!v&&I!==-1;)d=d.substr(0,I),I=d.lastIndexOf("."),v=m(d);return v}function P(u,d,v,I){u=typeof u=="symbol"?u.toString():u;var b=$(u,d,I),j=y(u);return j?(v===!0?b():setTimeout(b,0),!0):!1}r.publish=function(u,d){return P(u,d,!1,r.immediateExceptions)},r.publishSync=function(u,d){return P(u,d,!0,r.immediateExceptions)},r.subscribe=function(u,d){if(typeof d!="function")return!1;u=typeof u=="symbol"?u.toString():u,Object.prototype.hasOwnProperty.call(n,u)||(n[u]={});var v="uid_"+String(++s);return n[u][v]=d,v},r.subscribeAll=function(u){return r.subscribe(i,u)},r.subscribeOnce=function(u,d){var v=r.subscribe(u,function(){r.unsubscribe(v),d.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){n={}},r.clearSubscriptions=function(d){var v;for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&delete n[v]},r.countSubscriptions=function(d){var v,I,b=0;for(v in n)if(Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0){for(I in n[v])b++;break}return b},r.getSubscriptions=function(d){var v,I=[];for(v in n)Object.prototype.hasOwnProperty.call(n,v)&&v.indexOf(d)===0&&I.push(v);return I},r.unsubscribe=function(u){var d=function(Z){var w;for(w in n)if(Object.prototype.hasOwnProperty.call(n,w)&&w.indexOf(Z)===0)return!0;return!1},v=typeof u=="string"&&(Object.prototype.hasOwnProperty.call(n,u)||d(u)),I=!v&&typeof u=="string",b=typeof u=="function",j=!1,S,_,K;if(v){r.clearSubscriptions(u);return}for(S in n)if(Object.prototype.hasOwnProperty.call(n,S)){if(_=n[S],I&&_[u]){delete _[u],j=u;break}if(b)for(K in _)Object.prototype.hasOwnProperty.call(_,K)&&_[K]===u&&(delete _[K],j=!0)}return j}})})(ss,ss.exports);var Ei={exports:{}};/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */(function(t,e){(function(r,n){n(e)})(sa,function(r){function n(){for(var h=arguments.length,f=Array(h),g=0;g<h;g++)f[g]=arguments[g];if(f.length>1){f[0]=f[0].slice(0,-1);for(var O=f.length-1,E=1;E<O;++E)f[E]=f[E].slice(1,-1);return f[O]=f[O].slice(1),f.join("")}else return f[0]}function s(h){return"(?:"+h+")"}function i(h){return h===void 0?"undefined":h===null?"null":Object.prototype.toString.call(h).split(" ").pop().split("]").shift().toLowerCase()}function a(h){return h.toUpperCase()}function o(h){return h!=null?h instanceof Array?h:typeof h.length!="number"||h.split||h.setInterval||h.call?[h]:Array.prototype.slice.call(h):[]}function c(h,f){var g=h;if(f)for(var O in f)g[O]=f[O];return g}function l(h){var f="[A-Za-z]",g="[0-9]",O=n(g,"[A-Fa-f]"),E=s(s("%[EFef]"+O+"%"+O+O+"%"+O+O)+"|"+s("%[89A-Fa-f]"+O+"%"+O+O)+"|"+s("%"+O+O)),D="[\\:\\/\\?\\#\\[\\]\\@]",M="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",se=n(D,M),me=h?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]",we=h?"[\\uE000-\\uF8FF]":"[]",te=n(f,g,"[\\-\\.\\_\\~]",me);s(f+n(f,g,"[\\+\\-\\.]")+"*"),s(s(E+"|"+n(te,M,"[\\:]"))+"*");var ue=s(s("25[0-5]")+"|"+s("2[0-4]"+g)+"|"+s("1"+g+g)+"|"+s("0?[1-9]"+g)+"|0?0?"+g),Ee=s(ue+"\\."+ue+"\\."+ue+"\\."+ue),H=s(O+"{1,4}"),ye=s(s(H+"\\:"+H)+"|"+Ee),Pe=s(s(H+"\\:")+"{6}"+ye),$e=s("\\:\\:"+s(H+"\\:")+"{5}"+ye),Ot=s(s(H)+"?\\:\\:"+s(H+"\\:")+"{4}"+ye),at=s(s(s(H+"\\:")+"{0,1}"+H)+"?\\:\\:"+s(H+"\\:")+"{3}"+ye),ot=s(s(s(H+"\\:")+"{0,2}"+H)+"?\\:\\:"+s(H+"\\:")+"{2}"+ye),sr=s(s(s(H+"\\:")+"{0,3}"+H)+"?\\:\\:"+H+"\\:"+ye),Mt=s(s(s(H+"\\:")+"{0,4}"+H)+"?\\:\\:"+ye),Je=s(s(s(H+"\\:")+"{0,5}"+H)+"?\\:\\:"+H),ct=s(s(s(H+"\\:")+"{0,6}"+H)+"?\\:\\:"),Bt=s([Pe,$e,Ot,at,ot,sr,Mt,Je,ct].join("|")),St=s(s(te+"|"+E)+"+");s("[vV]"+O+"+\\."+n(te,M,"[\\:]")+"+"),s(s(E+"|"+n(te,M))+"*");var Fr=s(E+"|"+n(te,M,"[\\:\\@]"));return s(s(E+"|"+n(te,M,"[\\@]"))+"+"),s(s(Fr+"|"+n("[\\/\\?]",we))+"*"),{NOT_SCHEME:new RegExp(n("[^]",f,g,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(n("[^\\%\\:]",te,M),"g"),NOT_HOST:new RegExp(n("[^\\%\\[\\]\\:]",te,M),"g"),NOT_PATH:new RegExp(n("[^\\%\\/\\:\\@]",te,M),"g"),NOT_PATH_NOSCHEME:new RegExp(n("[^\\%\\/\\@]",te,M),"g"),NOT_QUERY:new RegExp(n("[^\\%]",te,M,"[\\:\\@\\/\\?]",we),"g"),NOT_FRAGMENT:new RegExp(n("[^\\%]",te,M,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(n("[^]",te,M),"g"),UNRESERVED:new RegExp(te,"g"),OTHER_CHARS:new RegExp(n("[^\\%]",te,se),"g"),PCT_ENCODED:new RegExp(E,"g"),IPV4ADDRESS:new RegExp("^("+Ee+")$"),IPV6ADDRESS:new RegExp("^\\[?("+Bt+")"+s(s("\\%25|\\%(?!"+O+"{2})")+"("+St+")")+"?\\]?$")}}var p=l(!1),$=l(!0),m=function(){function h(f,g){var O=[],E=!0,D=!1,M=void 0;try{for(var se=f[Symbol.iterator](),me;!(E=(me=se.next()).done)&&(O.push(me.value),!(g&&O.length===g));E=!0);}catch(we){D=!0,M=we}finally{try{!E&&se.return&&se.return()}finally{if(D)throw M}}return O}return function(f,g){if(Array.isArray(f))return f;if(Symbol.iterator in Object(f))return h(f,g);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),y=function(h){if(Array.isArray(h)){for(var f=0,g=Array(h.length);f<h.length;f++)g[f]=h[f];return g}else return Array.from(h)},P=2147483647,u=36,d=1,v=26,I=38,b=700,j=72,S=128,_="-",K=/^xn--/,Z=/[^\0-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,N={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=u-d,R=Math.floor,z=String.fromCharCode;function q(h){throw new RangeError(N[h])}function X(h,f){for(var g=[],O=h.length;O--;)g[O]=f(h[O]);return g}function le(h,f){var g=h.split("@"),O="";g.length>1&&(O=g[0]+"@",h=g[1]),h=h.replace(w,".");var E=h.split("."),D=X(E,f).join(".");return O+D}function pe(h){for(var f=[],g=0,O=h.length;g<O;){var E=h.charCodeAt(g++);if(E>=55296&&E<=56319&&g<O){var D=h.charCodeAt(g++);(D&64512)==56320?f.push(((E&1023)<<10)+(D&1023)+65536):(f.push(E),g--)}else f.push(E)}return f}var F=function(f){return String.fromCodePoint.apply(String,y(f))},ve=function(f){return f-48<10?f-22:f-65<26?f-65:f-97<26?f-97:u},We=function(f,g){return f+22+75*(f<26)-((g!=0)<<5)},be=function(f,g,O){var E=0;for(f=O?R(f/b):f>>1,f+=R(f/g);f>C*v>>1;E+=u)f=R(f/C);return R(E+(C+1)*f/(f+I))},Be=function(f){var g=[],O=f.length,E=0,D=S,M=j,se=f.lastIndexOf(_);se<0&&(se=0);for(var me=0;me<se;++me)f.charCodeAt(me)>=128&&q("not-basic"),g.push(f.charCodeAt(me));for(var we=se>0?se+1:0;we<O;){for(var te=E,ue=1,Ee=u;;Ee+=u){we>=O&&q("invalid-input");var H=ve(f.charCodeAt(we++));(H>=u||H>R((P-E)/ue))&&q("overflow"),E+=H*ue;var ye=Ee<=M?d:Ee>=M+v?v:Ee-M;if(H<ye)break;var Pe=u-ye;ue>R(P/Pe)&&q("overflow"),ue*=Pe}var $e=g.length+1;M=be(E-te,$e,te==0),R(E/$e)>P-D&&q("overflow"),D+=R(E/$e),E%=$e,g.splice(E++,0,D)}return String.fromCodePoint.apply(String,g)},Ue=function(f){var g=[];f=pe(f);var O=f.length,E=S,D=0,M=j,se=!0,me=!1,we=void 0;try{for(var te=f[Symbol.iterator](),ue;!(se=(ue=te.next()).done);se=!0){var Ee=ue.value;Ee<128&&g.push(z(Ee))}}catch(Vr){me=!0,we=Vr}finally{try{!se&&te.return&&te.return()}finally{if(me)throw we}}var H=g.length,ye=H;for(H&&g.push(_);ye<O;){var Pe=P,$e=!0,Ot=!1,at=void 0;try{for(var ot=f[Symbol.iterator](),sr;!($e=(sr=ot.next()).done);$e=!0){var Mt=sr.value;Mt>=E&&Mt<Pe&&(Pe=Mt)}}catch(Vr){Ot=!0,at=Vr}finally{try{!$e&&ot.return&&ot.return()}finally{if(Ot)throw at}}var Je=ye+1;Pe-E>R((P-D)/Je)&&q("overflow"),D+=(Pe-E)*Je,E=Pe;var ct=!0,Bt=!1,St=void 0;try{for(var Fr=f[Symbol.iterator](),Za;!(ct=(Za=Fr.next()).done);ct=!0){var eo=Za.value;if(eo<E&&++D>P&&q("overflow"),eo==E){for(var Pn=D,kn=u;;kn+=u){var jn=kn<=M?d:kn>=M+v?v:kn-M;if(Pn<jn)break;var to=Pn-jn,ro=u-jn;g.push(z(We(jn+to%ro,0))),Pn=R(to/ro)}g.push(z(We(Pn,0))),M=be(D,Je,ye==H),D=0,++ye}}}catch(Vr){Bt=!0,St=Vr}finally{try{!ct&&Fr.return&&Fr.return()}finally{if(Bt)throw St}}++D,++E}return g.join("")},ce=function(f){return le(f,function(g){return K.test(g)?Be(g.slice(4).toLowerCase()):g})},Y=function(f){return le(f,function(g){return Z.test(g)?"xn--"+Ue(g):g})},ne={version:"2.1.0",ucs2:{decode:pe,encode:F},decode:Be,encode:Ue,toASCII:Y,toUnicode:ce},fe={};function he(h){var f=h.charCodeAt(0),g=void 0;return f<16?g="%0"+f.toString(16).toUpperCase():f<128?g="%"+f.toString(16).toUpperCase():f<2048?g="%"+(f>>6|192).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase():g="%"+(f>>12|224).toString(16).toUpperCase()+"%"+(f>>6&63|128).toString(16).toUpperCase()+"%"+(f&63|128).toString(16).toUpperCase(),g}function Fe(h){for(var f="",g=0,O=h.length;g<O;){var E=parseInt(h.substr(g+1,2),16);if(E<128)f+=String.fromCharCode(E),g+=3;else if(E>=194&&E<224){if(O-g>=6){var D=parseInt(h.substr(g+4,2),16);f+=String.fromCharCode((E&31)<<6|D&63)}else f+=h.substr(g,6);g+=6}else if(E>=224){if(O-g>=9){var M=parseInt(h.substr(g+4,2),16),se=parseInt(h.substr(g+7,2),16);f+=String.fromCharCode((E&15)<<12|(M&63)<<6|se&63)}else f+=h.substr(g,9);g+=9}else f+=h.substr(g,3),g+=3}return f}function xe(h,f){function g(O){var E=Fe(O);return E.match(f.UNRESERVED)?E:O}return h.scheme&&(h.scheme=String(h.scheme).replace(f.PCT_ENCODED,g).toLowerCase().replace(f.NOT_SCHEME,"")),h.userinfo!==void 0&&(h.userinfo=String(h.userinfo).replace(f.PCT_ENCODED,g).replace(f.NOT_USERINFO,he).replace(f.PCT_ENCODED,a)),h.host!==void 0&&(h.host=String(h.host).replace(f.PCT_ENCODED,g).toLowerCase().replace(f.NOT_HOST,he).replace(f.PCT_ENCODED,a)),h.path!==void 0&&(h.path=String(h.path).replace(f.PCT_ENCODED,g).replace(h.scheme?f.NOT_PATH:f.NOT_PATH_NOSCHEME,he).replace(f.PCT_ENCODED,a)),h.query!==void 0&&(h.query=String(h.query).replace(f.PCT_ENCODED,g).replace(f.NOT_QUERY,he).replace(f.PCT_ENCODED,a)),h.fragment!==void 0&&(h.fragment=String(h.fragment).replace(f.PCT_ENCODED,g).replace(f.NOT_FRAGMENT,he).replace(f.PCT_ENCODED,a)),h}function er(h){return h.replace(/^0*(.*)/,"$1")||"0"}function tr(h,f){var g=h.match(f.IPV4ADDRESS)||[],O=m(g,2),E=O[1];return E?E.split(".").map(er).join("."):h}function Mr(h,f){var g=h.match(f.IPV6ADDRESS)||[],O=m(g,3),E=O[1],D=O[2];if(E){for(var M=E.toLowerCase().split("::").reverse(),se=m(M,2),me=se[0],we=se[1],te=we?we.split(":").map(er):[],ue=me.split(":").map(er),Ee=f.IPV4ADDRESS.test(ue[ue.length-1]),H=Ee?7:8,ye=ue.length-H,Pe=Array(H),$e=0;$e<H;++$e)Pe[$e]=te[$e]||ue[ye+$e]||"";Ee&&(Pe[H-1]=tr(Pe[H-1],f));var Ot=Pe.reduce(function(Je,ct,Bt){if(!ct||ct==="0"){var St=Je[Je.length-1];St&&St.index+St.length===Bt?St.length++:Je.push({index:Bt,length:1})}return Je},[]),at=Ot.sort(function(Je,ct){return ct.length-Je.length})[0],ot=void 0;if(at&&at.length>1){var sr=Pe.slice(0,at.index),Mt=Pe.slice(at.index+at.length);ot=sr.join(":")+"::"+Mt.join(":")}else ot=Pe.join(":");return D&&(ot+="%"+D),ot}else return h}var In=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,On="".match(/(){0}/)[1]===void 0;function vt(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g={},O=f.iri!==!1?$:p;f.reference==="suffix"&&(h=(f.scheme?f.scheme+":":"")+"//"+h);var E=h.match(In);if(E){On?(g.scheme=E[1],g.userinfo=E[3],g.host=E[4],g.port=parseInt(E[5],10),g.path=E[6]||"",g.query=E[7],g.fragment=E[8],isNaN(g.port)&&(g.port=E[5])):(g.scheme=E[1]||void 0,g.userinfo=h.indexOf("@")!==-1?E[3]:void 0,g.host=h.indexOf("//")!==-1?E[4]:void 0,g.port=parseInt(E[5],10),g.path=E[6]||"",g.query=h.indexOf("?")!==-1?E[7]:void 0,g.fragment=h.indexOf("#")!==-1?E[8]:void 0,isNaN(g.port)&&(g.port=h.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?E[4]:void 0)),g.host&&(g.host=Mr(tr(g.host,O),O)),g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&!g.path&&g.query===void 0?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",f.reference&&f.reference!=="suffix"&&f.reference!==g.reference&&(g.error=g.error||"URI is not a "+f.reference+" reference.");var D=fe[(f.scheme||g.scheme||"").toLowerCase()];if(!f.unicodeSupport&&(!D||!D.unicodeSupport)){if(g.host&&(f.domainHost||D&&D.domainHost))try{g.host=ne.toASCII(g.host.replace(O.PCT_ENCODED,Fe).toLowerCase())}catch(M){g.error=g.error||"Host's domain name can not be converted to ASCII via punycode: "+M}xe(g,p)}else xe(g,O);D&&D.parse&&D.parse(g,f)}else g.error=g.error||"URI can not be parsed.";return g}function Lp(h,f){var g=f.iri!==!1?$:p,O=[];return h.userinfo!==void 0&&(O.push(h.userinfo),O.push("@")),h.host!==void 0&&O.push(Mr(tr(String(h.host),g),g).replace(g.IPV6ADDRESS,function(E,D,M){return"["+D+(M?"%25"+M:"")+"]"})),(typeof h.port=="number"||typeof h.port=="string")&&(O.push(":"),O.push(String(h.port))),O.length?O.join(""):void 0}var Ua=/^\.\.?\//,Fa=/^\/\.(\/|$)/,Va=/^\/\.\.(\/|$)/,Mp=/^\/?(?:.|\n)*?(?=\/|$)/;function rr(h){for(var f=[];h.length;)if(h.match(Ua))h=h.replace(Ua,"");else if(h.match(Fa))h=h.replace(Fa,"/");else if(h.match(Va))h=h.replace(Va,"/"),f.pop();else if(h==="."||h==="..")h="";else{var g=h.match(Mp);if(g){var O=g[0];h=h.slice(O.length),f.push(O)}else throw new Error("Unexpected dot segment condition")}return f.join("")}function st(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},g=f.iri?$:p,O=[],E=fe[(f.scheme||h.scheme||"").toLowerCase()];if(E&&E.serialize&&E.serialize(h,f),h.host&&!g.IPV6ADDRESS.test(h.host)){if(f.domainHost||E&&E.domainHost)try{h.host=f.iri?ne.toUnicode(h.host):ne.toASCII(h.host.replace(g.PCT_ENCODED,Fe).toLowerCase())}catch(se){h.error=h.error||"Host's domain name can not be converted to "+(f.iri?"Unicode":"ASCII")+" via punycode: "+se}}xe(h,g),f.reference!=="suffix"&&h.scheme&&(O.push(h.scheme),O.push(":"));var D=Lp(h,f);if(D!==void 0&&(f.reference!=="suffix"&&O.push("//"),O.push(D),h.path&&h.path.charAt(0)!=="/"&&O.push("/")),h.path!==void 0){var M=h.path;!f.absolutePath&&(!E||!E.absolutePath)&&(M=rr(M)),D===void 0&&(M=M.replace(/^\/\//,"/%2F")),O.push(M)}return h.query!==void 0&&(O.push("?"),O.push(h.query)),h.fragment!==void 0&&(O.push("#"),O.push(h.fragment)),O.join("")}function Ka(h,f){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},O=arguments[3],E={};return O||(h=vt(st(h,g),g),f=vt(st(f,g),g)),g=g||{},!g.tolerant&&f.scheme?(E.scheme=f.scheme,E.userinfo=f.userinfo,E.host=f.host,E.port=f.port,E.path=rr(f.path||""),E.query=f.query):(f.userinfo!==void 0||f.host!==void 0||f.port!==void 0?(E.userinfo=f.userinfo,E.host=f.host,E.port=f.port,E.path=rr(f.path||""),E.query=f.query):(f.path?(f.path.charAt(0)==="/"?E.path=rr(f.path):((h.userinfo!==void 0||h.host!==void 0||h.port!==void 0)&&!h.path?E.path="/"+f.path:h.path?E.path=h.path.slice(0,h.path.lastIndexOf("/")+1)+f.path:E.path=f.path,E.path=rr(E.path)),E.query=f.query):(E.path=h.path,f.query!==void 0?E.query=f.query:E.query=h.query),E.userinfo=h.userinfo,E.host=h.host,E.port=h.port),E.scheme=h.scheme),E.fragment=f.fragment,E}function Bp(h,f,g){var O=c({scheme:"null"},g);return st(Ka(vt(h,O),vt(f,O),O,!0),O)}function Up(h,f){return typeof h=="string"?h=st(vt(h,f),f):i(h)==="object"&&(h=vt(st(h,f),f)),h}function Fp(h,f,g){return typeof h=="string"?h=st(vt(h,g),g):i(h)==="object"&&(h=st(h,g)),typeof f=="string"?f=st(vt(f,g),g):i(f)==="object"&&(f=st(f,g)),h===f}function Vp(h,f){return h&&h.toString().replace(!f||!f.iri?p.ESCAPE:$.ESCAPE,he)}function bt(h,f){return h&&h.toString().replace(!f||!f.iri?p.PCT_ENCODED:$.PCT_ENCODED,Fe)}var Br={scheme:"http",domainHost:!0,parse:function(f,g){return f.host||(f.error=f.error||"HTTP URIs must have a host."),f},serialize:function(f,g){var O=String(f.scheme).toLowerCase()==="https";return(f.port===(O?443:80)||f.port==="")&&(f.port=void 0),f.path||(f.path="/"),f}},za={scheme:"https",domainHost:Br.domainHost,parse:Br.parse,serialize:Br.serialize};function Ja(h){return typeof h.secure=="boolean"?h.secure:String(h.scheme).toLowerCase()==="wss"}var Ur={scheme:"ws",domainHost:!0,parse:function(f,g){var O=f;return O.secure=Ja(O),O.resourceName=(O.path||"/")+(O.query?"?"+O.query:""),O.path=void 0,O.query=void 0,O},serialize:function(f,g){if((f.port===(Ja(f)?443:80)||f.port==="")&&(f.port=void 0),typeof f.secure=="boolean"&&(f.scheme=f.secure?"wss":"ws",f.secure=void 0),f.resourceName){var O=f.resourceName.split("?"),E=m(O,2),D=E[0],M=E[1];f.path=D&&D!=="/"?D:void 0,f.query=M,f.resourceName=void 0}return f.fragment=void 0,f}},Ga={scheme:"wss",domainHost:Ur.domainHost,parse:Ur.parse,serialize:Ur.serialize},Kp={},Ha="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",it="[0-9A-Fa-f]",zp=s(s("%[EFef]"+it+"%"+it+it+"%"+it+it)+"|"+s("%[89A-Fa-f]"+it+"%"+it+it)+"|"+s("%"+it+it)),Jp="[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",Gp="[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",Hp=n(Gp,'[\\"\\\\]'),Xp="[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]",Yp=new RegExp(Ha,"g"),nr=new RegExp(zp,"g"),Wp=new RegExp(n("[^]",Jp,"[\\.]",'[\\"]',Hp),"g"),Xa=new RegExp(n("[^]",Ha,Xp),"g"),Qp=Xa;function qs(h){var f=Fe(h);return f.match(Yp)?f:h}var Ya={scheme:"mailto",parse:function(f,g){var O=f,E=O.to=O.path?O.path.split(","):[];if(O.path=void 0,O.query){for(var D=!1,M={},se=O.query.split("&"),me=0,we=se.length;me<we;++me){var te=se[me].split("=");switch(te[0]){case"to":for(var ue=te[1].split(","),Ee=0,H=ue.length;Ee<H;++Ee)E.push(ue[Ee]);break;case"subject":O.subject=bt(te[1],g);break;case"body":O.body=bt(te[1],g);break;default:D=!0,M[bt(te[0],g)]=bt(te[1],g);break}}D&&(O.headers=M)}O.query=void 0;for(var ye=0,Pe=E.length;ye<Pe;++ye){var $e=E[ye].split("@");if($e[0]=bt($e[0]),g.unicodeSupport)$e[1]=bt($e[1],g).toLowerCase();else try{$e[1]=ne.toASCII(bt($e[1],g).toLowerCase())}catch(Ot){O.error=O.error||"Email address's domain name can not be converted to ASCII via punycode: "+Ot}E[ye]=$e.join("@")}return O},serialize:function(f,g){var O=f,E=o(f.to);if(E){for(var D=0,M=E.length;D<M;++D){var se=String(E[D]),me=se.lastIndexOf("@"),we=se.slice(0,me).replace(nr,qs).replace(nr,a).replace(Wp,he),te=se.slice(me+1);try{te=g.iri?ne.toUnicode(te):ne.toASCII(bt(te,g).toLowerCase())}catch(ye){O.error=O.error||"Email address's domain name can not be converted to "+(g.iri?"Unicode":"ASCII")+" via punycode: "+ye}E[D]=we+"@"+te}O.path=E.join(",")}var ue=f.headers=f.headers||{};f.subject&&(ue.subject=f.subject),f.body&&(ue.body=f.body);var Ee=[];for(var H in ue)ue[H]!==Kp[H]&&Ee.push(H.replace(nr,qs).replace(nr,a).replace(Xa,he)+"="+ue[H].replace(nr,qs).replace(nr,a).replace(Qp,he));return Ee.length&&(O.query=Ee.join("&")),O}},Zp=/^([^\:]+)\:(.*)/,Wa={scheme:"urn",parse:function(f,g){var O=f.path&&f.path.match(Zp),E=f;if(O){var D=g.scheme||E.scheme||"urn",M=O[1].toLowerCase(),se=O[2],me=D+":"+(g.nid||M),we=fe[me];E.nid=M,E.nss=se,E.path=void 0,we&&(E=we.parse(E,g))}else E.error=E.error||"URN can not be parsed.";return E},serialize:function(f,g){var O=g.scheme||f.scheme||"urn",E=f.nid,D=O+":"+(g.nid||E),M=fe[D];M&&(f=M.serialize(f,g));var se=f,me=f.nss;return se.path=(E||g.nid)+":"+me,se}},eu=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,Qa={scheme:"urn:uuid",parse:function(f,g){var O=f;return O.uuid=O.nss,O.nss=void 0,!g.tolerant&&(!O.uuid||!O.uuid.match(eu))&&(O.error=O.error||"UUID is not valid."),O},serialize:function(f,g){var O=f;return O.nss=(f.uuid||"").toLowerCase(),O}};fe[Br.scheme]=Br,fe[za.scheme]=za,fe[Ur.scheme]=Ur,fe[Ga.scheme]=Ga,fe[Ya.scheme]=Ya,fe[Wa.scheme]=Wa,fe[Qa.scheme]=Qa,r.SCHEMES=fe,r.pctEncChar=he,r.pctDecChars=Fe,r.parse=vt,r.removeDotSegments=rr,r.serialize=st,r.resolveComponents=Ka,r.resolve=Bp,r.normalize=Up,r.equal=Fp,r.escapeComponent=Vp,r.unescapeComponent=bt,Object.defineProperty(r,"__esModule",{value:!0})})})(Ei,Ei.exports);const gr=Ei.exports,gd=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,vd={null:t=>t===null,boolean:t=>typeof t=="boolean",object:gd,array:t=>Array.isArray(t),number:t=>typeof t=="number",integer:t=>Number.isInteger(t),string:t=>typeof t=="string"},bd=(t,e)=>vd[e](t),Sd=(t,e)=>{const r=gr.resolve(t,e,{iri:!0});if(gr.resolve(t,"",{iri:!0})&&gr.parse(r).scheme==="file"&&gr.parse(t).scheme!=="file")throw Error(`Can't access file '${r}' resource from network context '${t}'`);return r},wd=t=>gr.unescapeComponent(gr.parse(t).fragment)||"",zr=47,Ed=(t,e)=>{if(t===e)return"";let r=1;const n=t.length-1,s=e.length-r,i=n<s?n:s;let a=-1,o=0;for(;o<i;o++){const l=t.charCodeAt(o+1);if(l!==e.charCodeAt(r+o))break;l===zr&&(a=o)}if(s>i){if(e.charCodeAt(r+o)===zr)return e.slice(r+o+1);if(o===0)return e.slice(r+o)}n>i&&(t.charCodeAt(o+1)===zr?a=o:i===0&&(a=0));let c="";for(o=a+2;o<=t.length;++o)(o===t.length||t.charCodeAt(o)===zr)&&(c+=c.length===0?"..":"/..");return r+=a,c.length>0?`${c}${e.slice(r,e.length)}`:(e.charCodeAt(r)===zr&&++r,e.slice(r,e.length))};var ia={jsonTypeOf:bd,resolveUrl:Sd,urlFragment:wd,pathRelative:Ed};const aa=$t,mn="",hn=t=>{if(t.length>0&&t[0]!=="/")throw Error("Invalid JSON Pointer");return t.split("/").slice(1).map(Ad)},Id=(t,e=void 0)=>{const r=hn(t),n=s=>r.reduce(([i,a],o)=>[Tt(i,o,a),Nr(o,a)],[s,""])[0];return e===void 0?n:n(e)},Od=(t,e=void 0,r=void 0)=>{const n=hn(t),s=aa((i,a)=>cf(n,i,a,mn));return e===void 0?s:s(e,r)},cf=(t,e,r,n)=>{if(t.length===0)return r;if(t.length>1){const s=t.shift();return{...e,[s]:cf(t,Tt(e,s,n),r,Nr(s,n))}}else if(Array.isArray(e)){const s=[...e],i=oa(e,t[0]);return s[i]=r,s}else return typeof e=="object"&&e!==null?{...e,[t[0]]:r}:Tt(e,t[0],n)},Pd=(t,e=void 0,r=void 0)=>{const n=hn(t),s=aa((i,a)=>lf(n,i,a,mn));return e===void 0?s:s(e,r)},lf=(t,e,r,n)=>{if(t.length!==0)if(t.length===1&&!uf(e)){const s=oa(e,t[0]);e[s]=r}else{const s=t.shift();lf(t,Tt(e,s,n),r,Nr(s,n))}},kd=(t,e=void 0)=>{const r=hn(t),n=s=>ff(r,s,mn);return e===void 0?n:n(e)},ff=(t,e,r)=>{if(t.length!=0)if(t.length>1){const n=t.shift(),s=Tt(e,n,r);return{...e,[n]:ff(t,s,Nr(n,r))}}else{if(Array.isArray(e))return e.filter((n,s)=>s!=t[0]);if(typeof e=="object"&&e!==null){const{[t[0]]:n,...s}=e;return s}else return Tt(e,t[0],r)}},jd=(t,e=void 0)=>{const r=hn(t),n=s=>pf(r,s,mn);return e===void 0?n:n(e)},pf=(t,e,r)=>{if(t.length!==0)if(t.length>1){const n=t.shift(),s=Tt(e,n,r);pf(t,s,Nr(n,r))}else Array.isArray(e)?e.splice(t[0],1):typeof e=="object"&&e!==null?delete e[t[0]]:Tt(e,t[0],r)},Nr=aa((t,e)=>e+"/"+_d(t)),_d=t=>t.toString().replace(/~/g,"~0").replace(/\//g,"~1"),Ad=t=>t.toString().replace(/~1/g,"/").replace(/~0/g,"~"),oa=(t,e)=>Array.isArray(t)&&e==="-"?t.length:e,Tt=(t,e,r="")=>{if(t===void 0)throw TypeError(`Value at '${r}' is undefined and does not have property '${e}'`);if(t===null)throw TypeError(`Value at '${r}' is null and does not have property '${e}'`);if(uf(t))throw TypeError(`Value at '${r}' is a ${typeof t} and does not have property '${e}'`);{const n=oa(t,e);return t[n]}},uf=t=>t===null||typeof t!="object";var df={nil:mn,append:Nr,get:Id,set:Od,assign:Pd,unset:kd,remove:jd};const mf=Symbol("$__value"),ca=Symbol("$__href"),xd=(t,e)=>Object.freeze({[ca]:t,[mf]:e}),Nd=t=>t&&t[ca]!==void 0,Cd=t=>t[ca],Td=t=>t[mf];var la={cons:xd,isReference:Nd,href:Cd,value:Td};const Rd=df,Cr=$t,{resolveUrl:qd,jsonTypeOf:Dd}=ia,$o=la,hf=Object.freeze({id:"",pointer:"",instance:void 0,value:void 0}),Ld=(t,e="")=>Object.freeze({...hf,id:qd(e,""),instance:t,value:t}),Md=t=>`${t.id}#${encodeURI(t.pointer)}`,Ye=t=>$o.isReference(t.value)?$o.value(t.value):t.value,Bd=(t,e)=>t in Ye(e),Ud=Cr((t,e)=>Dd(Ye(t),e)),Wt=(t,e)=>Object.freeze({...e,pointer:Rd.append(t,e.pointer),value:Ye(e)[t]}),Fd=t=>Object.keys(Ye(t)).map(e=>[e,Wt(e,t)]),Vd=t=>Object.keys(Ye(t)),Kd=Cr((t,e)=>Ye(e).map((r,n,s,i)=>t(Wt(n,e),n,s,i))),zd=Cr((t,e)=>Ye(e).map((r,n,s,i)=>Wt(n,e)).filter((r,n,s,i)=>t(r,n,s,i))),Jd=Cr((t,e,r)=>Ye(r).reduce((n,s,i)=>t(n,Wt(i,r),i),e)),Gd=Cr((t,e)=>Ye(e).every((r,n,s,i)=>t(Wt(n,e),n,s,i))),Hd=Cr((t,e)=>Ye(e).some((r,n,s,i)=>t(Wt(n,e),n,s,i))),Xd=t=>Ye(t).length;var fa={nil:hf,cons:Ld,uri:Md,value:Ye,has:Bd,typeOf:Ud,step:Wt,entries:Fd,keys:Vd,map:Kd,filter:zd,reduce:Jd,every:Gd,some:Hd,length:Xd},pa={};/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var go=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,Yd=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,yf=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,Wd=/\\([\u000b\u0020-\u00ff])/g,Qd=/([\\"])/g,$f=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;pa.format=Zd;pa.parse=em;function Zd(t){if(!t||typeof t!="object")throw new TypeError("argument obj is required");var e=t.parameters,r=t.type;if(!r||!$f.test(r))throw new TypeError("invalid type");var n=r;if(e&&typeof e=="object")for(var s,i=Object.keys(e).sort(),a=0;a<i.length;a++){if(s=i[a],!yf.test(s))throw new TypeError("invalid parameter name");n+="; "+s+"="+rm(e[s])}return n}function em(t){if(!t)throw new TypeError("argument string is required");var e=typeof t=="object"?tm(t):t;if(typeof e!="string")throw new TypeError("argument string is required to be a string");var r=e.indexOf(";"),n=r!==-1?e.substr(0,r).trim():e.trim();if(!$f.test(n))throw new TypeError("invalid media type");var s=new nm(n.toLowerCase());if(r!==-1){var i,a,o;for(go.lastIndex=r;a=go.exec(e);){if(a.index!==r)throw new TypeError("invalid parameter format");r+=a[0].length,i=a[1].toLowerCase(),o=a[2],o[0]==='"'&&(o=o.substr(1,o.length-2).replace(Wd,"$1")),s.parameters[i]=o}if(r!==e.length)throw new TypeError("invalid parameter format")}return s}function tm(t){var e;if(typeof t.getHeader=="function"?e=t.getHeader("content-type"):typeof t.headers=="object"&&(e=t.headers&&t.headers["content-type"]),typeof e!="string")throw new TypeError("content-type header is missing from object");return e}function rm(t){var e=String(t);if(yf.test(e))return e;if(e.length>0&&!Yd.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(Qd,"\\$1")+'"'}function nm(t){this.parameters=Object.create(null),this.type=t}var gf=async t=>Object.entries(await t);const sm=$t;var ua=sm(async(t,e)=>(await e).map(t));const im=$t;var da=im(async(t,e,r)=>(await r).reduce(async(n,s)=>t(await n,s),e));const am=$t,om=da;var cm=am(async(t,e,r={})=>om(async(n,s)=>await t(s)?n.concat([s]):n,[],e,r));const lm=$t,fm=ua;var pm=lm(async(t,e)=>{const r=await fm(t,e);return(await Promise.all(r)).some(n=>n)});const um=$t,dm=ua;var mm=um(async(t,e)=>{const r=await dm(t,e);return(await Promise.all(r)).every(n=>n)});const hm=$t;var vf=hm((t,e)=>t.reduce(async(r,n)=>n(await r),e)),ym=t=>Promise.all(t);const $m=vf,gm=gf,vm=da;var bm=t=>$m([gm,vm(async(e,[r,n])=>(e[r]=await n,e),{})],t),Oe={entries:gf,map:ua,filter:cm,reduce:da,some:pm,every:mm,pipeline:vf,all:ym,allValues:bm},Sm=fetch;const wm=pa,Em=$t,Sr=Oe,mt=df,{jsonTypeOf:ma,resolveUrl:dt,urlFragment:ha,pathRelative:Im}=ia,Om=Sm,Et=la,tn={},Kn={},Pm=(t,e,r)=>{tn[t]||(tn[t]={}),tn[t][e]=r},Ne=(t,e)=>{const r=Kn[t]||t;if(r in tn)return tn[r][e]},an={},ya={},$a=(t,e="",r="")=>{var d,v;t=JSON.parse(JSON.stringify(t));const n=dt(t.$schema||r,"");if(!n)throw Error("Couldn't determine schema dialect");delete t.$schema;let s;((d=t.$vocabulary)==null?void 0:d["https://json-schema.org/draft/2019-09/vocab/core"])===!0?s="https://json-schema.org/draft/2019-09/vocab/core":((v=t.$vocabulary)==null?void 0:v["https://json-schema.org/draft/2020-12/vocab/core"])===!0?s="https://json-schema.org/draft/2020-12/vocab/core":s=Kn[n]||n;const i=Ne(s,"baseToken"),a=Ne(s,"anchorToken"),o=dt(e,"");if(!o&&!dt(t[i]||"",""))throw Error("Couldn't determine an identifier for the schema");const c=dt(o,t[i]||""),l=dt(c,""),p=ha(c);delete t[i],p&&i===a&&(t[a]=a!==i?encodeURI(p):`#${encodeURI(p)}`),o&&(ya[o]=l),Kn[l]=s;const $={},m=Ne(n,"recursiveAnchorToken");t[m]===!0&&($[""]=`${l}#`,t[a]="",delete t[m]);let y;const P=Ne(n,"vocabularyToken");ma(t[P],"object")?(y=t[P],delete t[P]):y={[Kn[n]]:!0};const u={"":""};return an[l]={id:l,dialectId:n,schema:Ii(t,l,n,mt.nil,u,$),anchors:u,dynamicAnchors:$,vocabulary:y,validated:!1},l},Ii=(t,e,r,n,s,i)=>{if(ma(t,"object")){const a=typeof t.$schema=="string"?dt(t.$schema,""):r,o=Ne(a,"embeddedToken"),c=Ne(a,"anchorToken");if(typeof t[o]=="string"&&(o!==c||t[o][0]!=="#")){const y=dt(e,t[o]),P=Ne(a,"baseToken");return t[P]=y,$a(t,y,r),Et.cons(t[o],t)}const l=Ne(r,"anchorToken"),p=Ne(r,"dynamicAnchorToken");typeof t[p]=="string"&&(i[t[p]]=`${e}#${encodeURI(n)}`,s[t[p]]=n,delete t[p]);const $=Ne(r,"embeddedToken");if(typeof t[l]=="string"){const y=l!==$?t[l]:t[l].slice(1);s[y]=n,delete t[l]}const m=Ne(r,"jrefToken");if(typeof t[m]=="string")return Et.cons(t[m],t);for(const y in t)t[y]=Ii(t[y],e,r,mt.append(y,n),s,i);return t}else return Array.isArray(t)?t.map((a,o)=>Ii(a,e,r,mt.append(o,n),s,i)):t},km=t=>t in an||t in ya,bf=t=>an[ya[t]]||an[t],jm=t=>{an[t].validated=!0},_m=Object.freeze({id:"",dialectId:void 0,vocabulary:{},pointer:mt.nil,schema:void 0,value:void 0,anchors:{},dynamicAnchors:{},validated:!0}),Sf=async(t,e=_m)=>{const r=dt(If(e),t),n=dt(r,""),s=ha(r);if(!km(n)){const c=await Om(n,{headers:{Accept:"application/schema+json"}});if(c.status>=400)throw await c.text(),Error(`Failed to retrieve schema with id: ${n}`);if(c.headers.has("content-type")){const l=wm.parse(c.headers.get("content-type")).type;if(l!=="application/schema+json")throw Error(`${n} is not a schema. Found a document with media type: ${l}`)}$a(await c.json(),n)}const i=bf(n),a=s[0]!=="/"?Ef(i,s):s,o=Object.freeze({...i,pointer:a,value:mt.get(a,i.schema)});return wf(o)},wf=t=>Et.isReference(t.value)?Sf(Et.href(t.value),t):t,Ef=(t,e)=>{if(!(e in t.anchors))throw Error(`No such anchor '${encodeURI(t.id)}#${encodeURI(e)}'`);return t.anchors[e]},If=t=>`${t.id}#${encodeURI(t.pointer)}`,Lt=t=>Et.isReference(t.value)?Et.value(t.value):t.value,Am=(t,e)=>t in Lt(e),xm=(t,e)=>ma(Lt(t),e),ga=(t,e)=>{const r=bf(e.id),n=Object.freeze({...e,pointer:mt.append(t,e.pointer),value:Lt(e)[t],validated:r.validated});return wf(n)},Nm=t=>Object.keys(Lt(t)),Cm=t=>Sr.pipeline([Lt,Object.keys,Sr.map(async e=>[e,await ga(e,t)]),Sr.all],t),Tm=Em((t,e)=>Sr.pipeline([Lt,Sr.map(async(r,n)=>t(await ga(n,e),n)),Sr.all],e)),Rm=t=>Lt(t).length,qm={parentId:"",parentDialect:"",includeEmbedded:!0},Dm=(t,e={})=>{const r={...qm,...e},n=JSON.parse(JSON.stringify(t.schema,(l,p)=>{if(!Et.isReference(p))return p;const $=Et.value(p),m=typeof $.$schema=="string"?dt($.$schema,""):t.dialectId,y=Ne(m,"embeddedToken");if(!(!r.includeEmbedded&&y in $))return Et.value(p)})),s=Ne(t.dialectId,"dynamicAnchorToken");Object.entries(t.dynamicAnchors).forEach(([l,p])=>{const $=ha(p);mt.assign($,n,{[s]:l,...mt.get($,n)})});const i=Ne(t.dialectId,"anchorToken");Object.entries(t.anchors).filter(([l])=>l!=="").forEach(([l,p])=>{mt.assign(p,n,{[i]:l,...mt.get(p,n)})});const a=Ne(t.dialectId,"baseToken"),o=Lm(r.parentId,t.id),c=r.parentDialect===t.dialectId?"":t.dialectId;return{...o&&{[a]:o},...c&&{$schema:c},...n}},Lm=(t,e)=>{if(e.startsWith("file://")){const r=t.slice(7,t.lastIndexOf("/"));return t===""?"":Im(r,e.slice(7))}else return e};var Es={setConfig:Pm,getConfig:Ne,add:$a,get:Sf,markValidated:jm,uri:If,value:Lt,getAnchorPointer:Ef,typeOf:xm,has:Am,step:ga,keys:Nm,entries:Cm,map:Tm,length:Rm,toSchema:Dm};class Mm extends Error{constructor(e){super("Invalid Schema"),this.name=this.constructor.name,this.output=e}}var Of=Mm;const Bm=$t,vo=ss.exports,{resolveUrl:Um}=ia,Pf=fa,At=Es,Fm=Of,is="FLAG",va="BASIC",ba="DETAILED",Sa="VERBOSE";let kf=ba,jf=!0;const Vm=async(t,e=void 0,r=void 0)=>{const n=await wa(t),s=(i,a)=>Ea(n,Pf.cons(i),a);return e===void 0?s:s(e,r)},wa=async t=>{const e={metaData:{}},r=await Af(t,e);return{ast:e,schemaUri:r}},Ea=Bm(({ast:t,schemaUri:e},r,n=is)=>{if(![is,va,ba,Sa].includes(n))throw Error(`The '${n}' error format is not supported`);const s=[],i=vo.subscribe("result",Km(n,s));return Nf(e,r,t,{}),vo.unsubscribe(i),s[0]}),Km=(t,e)=>{const r=[];return(n,s)=>{if(n==="result"){const{keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c}=s,l={keyword:i,absoluteKeywordLocation:a,instanceLocation:o,valid:c,errors:[]};r.push(l)}else if(n==="result.start")r.push(n);else if(n==="result.end"){const i=r.pop();for(;r[r.length-1]!=="result.start";){const a=r.pop(),o=[a];t===va&&(o.push(...a.errors),delete a.errors),(t===Sa||t!==is&&!a.valid)&&i.errors.unshift(...o)}r[r.length-1]=i,e[0]=i}}},zm=t=>{kf=t},Jm=t=>{jf=t},Ia={},yn=t=>Ia[t],_f=t=>t in Ia,Gm=(t,e)=>{Ia[t]={collectEvaluatedItems:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&new Set,collectEvaluatedProperties:(r,n,s,i,a)=>e.interpret(r,n,s,i,a)&&[],...e}},Oi={},Hm=(t,e)=>{Oi[t]=e},zn={},Af=async(t,e)=>{if(t=await xf(t),!_f(`${t.dialectId}#validate`)){const r=await At.get(t.dialectId);(At.getConfig(r.id,"mandatoryVocabularies")||[]).forEach(s=>{if(!r.vocabulary[s])throw Error(`Vocabulary '${s}' must be explicitly declared and required`)}),Object.entries(r.vocabulary).forEach(([s,i])=>{if(s in Oi)Object.entries(Oi[s]).forEach(([a,o])=>{Gm(`${r.id}#${a}`,o)});else if(i)throw Error(`Missing required vocabulary: ${s}`)})}if(jf&&!t.validated){if(At.markValidated(t.id),!(t.dialectId in zn)){const s=await At.get(t.dialectId),i=await wa(s);zn[s.id]=Ea(i)}const r=Pf.cons(t.schema,t.id),n=zn[t.dialectId](r,kf);if(!n.valid)throw new Fm(n)}return t.id in e.metaData||(e.metaData[t.id]={id:t.id,dynamicAnchors:t.dynamicAnchors,anchors:t.anchors}),yn(`${t.dialectId}#validate`).compile(t,e)},xf=async t=>At.typeOf(t,"string")?xf(await At.get(At.value(t),t)):t,Nf=(t,e,r,n)=>{const s=Oa(t,r),i=Um(t,"");return yn(s).interpret(t,e,r,{...r.metaData[i].dynamicAnchors,...n})},Xm=(t,e,r,n,s)=>{const i=Oa(t,r);return yn(i).collectEvaluatedProperties(t,e,r,n,s)},Ym=(t,e,r,n,s)=>{const i=Oa(t,r);return yn(i).collectEvaluatedItems(t,e,r,n,s)},Oa=(t,e)=>{if(!(t in e))throw Error(`No schema found at ${t}`);return e[t][0]},Wm=(t,e="",r="")=>{const n=At.add(t,e,r);delete zn[n]};var Cf={validate:Vm,compile:wa,interpret:Ea,setMetaOutputFormat:zm,setShouldMetaValidate:Jm,FLAG:is,BASIC:va,DETAILED:ba,VERBOSE:Sa,add:Wm,getKeyword:yn,hasKeyword:_f,defineVocabulary:Hm,compileSchema:Af,interpretSchema:Nf,collectEvaluatedProperties:Xm,collectEvaluatedItems:Ym};const Qm=Es,Zm=t=>Qm.value(t),eh=()=>!0;var th={compile:Zm,interpret:eh};const Jr=Oe,or=ss.exports,on=Cf,bo=fa,cr=Es,rh=async(t,e)=>{const r=cr.uri(t);if(!(r in e)){e[r]=!1;const n=cr.value(t);if(!["object","boolean"].includes(typeof n))throw Error(`No schema found at '${cr.uri(t)}'`);e[r]=[`${t.dialectId}#validate`,cr.uri(t),typeof n=="boolean"?n:await Jr.pipeline([cr.entries,Jr.map(([s,i])=>[`${t.dialectId}#${s}`,i]),Jr.filter(([s])=>on.hasKeyword(s)&&s!==`${t.dialectId}#validate`),Jr.map(async([s,i])=>{const a=await on.getKeyword(s).compile(i,e,t);return[s,cr.uri(i),a]}),Jr.all],t)]}return r},nh=(t,e,r,n)=>{const[s,i,a]=r[t];or.publishSync("result.start");const o=typeof a=="boolean"?a:a.every(([c,l,p])=>{or.publishSync("result.start");const $=on.getKeyword(c).interpret(p,e,r,n);return or.publishSync("result",{keyword:c,absoluteKeywordLocation:l,instanceLocation:bo.uri(e),valid:$,ast:p}),or.publishSync("result.end"),$});return or.publishSync("result",{keyword:s,absoluteKeywordLocation:i,instanceLocation:bo.uri(e),valid:o,ast:t}),or.publishSync("result.end"),o},sh=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?[]:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedProperties")).reduce((a,[o,,c])=>{const l=a&&on.getKeyword(o).collectEvaluatedProperties(c,e,r,n);return l!==!1&&[...a,...l]},[])},ih=(t,e,r,n,s=!1)=>{const i=r[t][2];return typeof i=="boolean"?i?new Set:!1:i.filter(([a])=>!s||!a.endsWith("#unevaluatedItems")).reduce((a,[o,,c])=>{const l=a!==!1&&on.getKeyword(o).collectEvaluatedItems(c,e,r,n);return l!==!1&&new Set([...a,...l])},new Set)};var ah={compile:rh,interpret:nh,collectEvaluatedProperties:sh,collectEvaluatedItems:ih};const oh=th,ch=ah;var lh={metaData:oh,validate:ch};const fh=Cf,ph=Es,uh=fa,dh=la,mh=lh,hh=Of;var k={Core:fh,Schema:ph,Instance:uh,Reference:dh,Keywords:mh,InvalidSchemaError:hh};const{Core:Tf,Schema:Gr,Instance:Ks}=k,yh=async(t,e,r)=>{const n=await Gr.step("items",r),s=Gr.typeOf(n,"array")?Gr.length(n):Number.MAX_SAFE_INTEGER;return Gr.typeOf(t,"boolean")?[s,Gr.value(t)]:[s,await Tf.compileSchema(t,e)]},$h=([t,e],r,n,s)=>Ks.typeOf(r,"array")?typeof e=="string"?Ks.every((i,a)=>a<t||Tf.interpretSchema(e,i,n,s),r):Ks.every((i,a)=>a<t?!0:e,r):!0;var gh={compile:yh,interpret:$h};const{Core:Rf,Schema:zs,Instance:Pi}=k,vh=async(t,e,r)=>{const n=await zs.step("items",r);return[zs.typeOf(n,"array")?zs.length(n):Number.MAX_SAFE_INTEGER,await Rf.compileSchema(t,e)]},qf=([t,e],r,n,s)=>Pi.typeOf(r,"array")?Pi.every((i,a)=>a<t||Rf.interpretSchema(e,i,n,s),r):!0,bh=(t,e,r,n)=>qf(t,e,r,n)&&new Set(Pi.map((s,i)=>i,e));var Sh={compile:vh,interpret:qf,collectEvaluatedItems:bh};const{Core:Df,Schema:Pt,Instance:So}=k,wh=async(t,e,r)=>{const n=await Pt.step("properties",r),s=Pt.typeOf(n,"object")?Pt.keys(n):[],i=await Pt.step("patternProperties",r),a=Pt.typeOf(i,"object")?Pt.keys(i).map(o=>new RegExp(o)):[];return Pt.typeOf(t,"boolean")?[s,a,Pt.value(t)]:[s,a,await Df.compileSchema(t,e)]},Eh=([t,e,r],n,s,i)=>{if(!So.typeOf(n,"object"))return!0;const a=So.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>Df.interpretSchema(r,o,s,i)):a.length===0||r};var Ih={compile:wh,interpret:Eh};const{Core:Lf,Schema:lr,Instance:wo}=k,Oh=async(t,e,r)=>{const n=await lr.step("properties",r),s=lr.typeOf(n,"object")?lr.keys(n):[],i=await lr.step("patternProperties",r),a=lr.typeOf(i,"object")?lr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await Lf.compileSchema(t,e)]},Mf=([t,e,r],n,s,i)=>wo.typeOf(n,"object")?wo.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>Lf.interpretSchema(r,a,s,i)):!0,Ph=(t,e,r,n)=>Mf(t,e,r,n)&&[new RegExp("")];var kh={compile:Oh,interpret:Mf,collectEvaluatedProperties:Ph};const{Core:Is,Schema:jh}=k,Eo=Oe,_h=(t,e)=>Eo.pipeline([jh.map(async r=>Is.compileSchema(await r,e)),Eo.all],t),Ah=(t,e,r,n)=>t.every(s=>Is.interpretSchema(s,e,r,n)),xh=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&Is.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),Nh=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&Is.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var Ch={compile:_h,interpret:Ah,collectEvaluatedProperties:xh,collectEvaluatedItems:Nh};const{Core:Os,Schema:Th}=k,Io=Oe,Rh=(t,e)=>Io.pipeline([Th.map(async r=>Os.compileSchema(await r,e)),Io.all],t),qh=(t,e,r,n)=>t.filter(i=>Os.interpretSchema(i,e,r,n)).length>0,Dh=(t,e,r,n)=>t.reduce((s,i)=>{const a=Os.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),Lh=(t,e,r,n)=>t.reduce((s,i)=>{const a=Os.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var Mh={compile:Rh,interpret:qh,collectEvaluatedProperties:Dh,collectEvaluatedItems:Lh},Bh=Object.keys,Oo=JSON.stringify;function Qr(t,e){var r,n,s,i,a,o,c;if(c=typeof t,c==="string")return Oo(t);if(t===!0)return"true";if(t===!1)return"false";if(t===null)return"null";if(t instanceof Array){for(s="[",n=t.length-1,r=0;r<n;r++)s+=Qr(t[r],!1)+",";return n>-1&&(s+=Qr(t[r],!1)),s+"]"}if(t instanceof Object){if(typeof t.toJSON=="function")return Qr(t.toJSON(),e);for(i=Bh(t).sort(),n=i.length,s="",r=0;r<n;)a=i[r],o=Qr(t[a],!0),o!==void 0&&(r&&s!==""&&(s+=","),s+=Oo(a)+":"+o),r++;return"{"+s+"}"}switch(c){case"function":case"undefined":return e?void 0:null;default:return isFinite(t)?t:null}}var Tr=function(t){return""+Qr(t,!1)};const{Schema:Uh,Instance:Fh}=k,Bf=Tr,Vh=t=>Bf(Uh.value(t)),Kh=(t,e)=>Bf(Fh.value(e))===t;var zh={compile:Vh,interpret:Kh};const{Core:Uf,Instance:Po}=k,Jh=(t,e)=>Uf.compileSchema(t,e),Gh=(t,e,r,n)=>!Po.typeOf(e,"array")||Po.some(s=>Uf.interpretSchema(t,s,r,n),e);var Hh={compile:Jh,interpret:Gh};const{Core:Pa,Schema:fr,Instance:ki}=k,Xh=async(t,e,r)=>{const n=await Pa.compileSchema(t,e),s=await fr.step("minContains",r),i=fr.typeOf(s,"number")?fr.value(s):1,a=await fr.step("maxContains",r),o=fr.typeOf(a,"number")?fr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Ff=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!ki.typeOf(n,"array"))return!0;const a=ki.reduce((o,c)=>Pa.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},Yh=(t,e,r,n)=>Ff(t,e,r,n)&&ki.reduce((s,i,a)=>Pa.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var Wh={compile:Xh,interpret:Ff,collectEvaluatedItems:Yh};const{Core:Qh,Schema:Zh}=k,Js=Oe,ey=async(t,e)=>{await Js.pipeline([Zh.entries,Js.map(([,r])=>Qh.compileSchema(r,e)),Js.all],t)},ty=()=>!0;var ry={compile:ey,interpret:ty};const{Core:Vf,Schema:Gs,Instance:ko}=k,Hs=Oe,ny=(t,e)=>Hs.pipeline([Gs.entries,Hs.map(async([r,n])=>[r,Gs.typeOf(n,"array")?Gs.value(n):await Vf.compileSchema(n,e)]),Hs.all],t),sy=(t,e,r,n)=>{const s=ko.value(e);return!ko.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):Vf.interpretSchema(a,e,r,n):!0)};var iy={compile:ny,interpret:sy};const{Schema:jo,Instance:_o}=k,Xs=Oe,ay=t=>Xs.pipeline([jo.entries,Xs.map(([e,r])=>[e,jo.value(r)]),Xs.all],t),oy=(t,e)=>{const r=_o.value(e);return!_o.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var cy={compile:ay,interpret:oy};const{Core:ka,Schema:ly,Instance:ji}=k,Ys=Oe,fy=(t,e)=>Ys.pipeline([ly.entries,Ys.map(async([r,n])=>[r,await ka.compileSchema(n,e)]),Ys.all],t),py=(t,e,r,n)=>{const s=ji.value(e);return!ji.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||ka.interpretSchema(a,e,r,n))},uy=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!ji.has(i,e))return s;const o=ka.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var dy={compile:fy,interpret:py,collectEvaluatedProperties:uy};const{Schema:my,Instance:hy}=k,Kf=Tr,yy=t=>my.value(t).map(Kf),$y=(t,e)=>t.some(r=>Kf(hy.value(e))===r);var gy={compile:yy,interpret:$y};const{Schema:vy,Instance:Ao}=k,by=async t=>vy.value(t),Sy=(t,e)=>!Ao.typeOf(e,"number")||Ao.value(e)<t;var wy={compile:by,interpret:Sy};const{Schema:Ey,Instance:xo}=k,Iy=async t=>Ey.value(t),Oy=(t,e)=>!xo.typeOf(e,"number")||xo.value(e)>t;var Py={compile:Iy,interpret:Oy};const{Core:Ps}=k,ky=(t,e)=>Ps.compileSchema(t,e),jy=(t,e,r,n)=>(Ps.interpretSchema(t,e,r,n),!0),_y=(t,e,r,n)=>Ps.collectEvaluatedProperties(t,e,r,n)||[],Ay=(t,e,r,n)=>Ps.collectEvaluatedItems(t,e,r,n)||new Set;var xy={compile:ky,interpret:jy,collectEvaluatedProperties:_y,collectEvaluatedItems:Ay};const{Core:Er,Schema:No}=k,Ny=async(t,e,r)=>{if(No.has("if",r)){const n=await No.step("if",r);return[await Er.compileSchema(n,e),await Er.compileSchema(t,e)]}else return[]},Cy=([t,e],r,n,s)=>t===void 0||!ja(t,r,n,s)||Er.interpretSchema(e,r,n,s),ja=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Er.getKeyword(i).interpret(a,e,r,n))},Ty=([t,e],r,n,s)=>t===void 0||!ja(t,r,n,s)?[]:Er.collectEvaluatedProperties(e,r,n,s),Ry=([t,e],r,n,s)=>t===void 0||!ja(t,r,n,s)?new Set:Er.collectEvaluatedItems(e,r,n,s);var qy={compile:Ny,interpret:Cy,collectEvaluatedProperties:Ty,collectEvaluatedItems:Ry};const{Core:Ir,Schema:Co}=k,Dy=async(t,e,r)=>{if(Co.has("if",r)){const n=await Co.step("if",r);return[await Ir.compileSchema(n,e),await Ir.compileSchema(t,e)]}else return[]},Ly=([t,e],r,n,s)=>t===void 0||_a(t,r,n,s)||Ir.interpretSchema(e,r,n,s),_a=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Ir.getKeyword(i).interpret(a,e,r,n))},My=([t,e],r,n,s)=>t===void 0||_a(t,r,n,s)?[]:Ir.collectEvaluatedProperties(e,r,n,s),By=([t,e],r,n,s)=>t===void 0||_a(t,r,n,s)?new Set:Ir.collectEvaluatedItems(e,r,n,s);var Uy={compile:Dy,interpret:Ly,collectEvaluatedProperties:My,collectEvaluatedItems:By};const{Core:as,Schema:To,Instance:Jn}=k,Fy=async(t,e)=>{if(To.typeOf(t,"array")){const r=await To.map(n=>as.compileSchema(n,e),t);return Promise.all(r)}else return as.compileSchema(t,e)},zf=(t,e,r,n)=>Jn.typeOf(e,"array")?typeof t=="string"?Jn.every(s=>as.interpretSchema(t,s,r,n),e):Jn.every((s,i)=>!(i in t)||as.interpretSchema(t[i],s,r,n),e):!0,Vy=(t,e,r,n)=>zf(t,e,r,n)&&(typeof t=="string"?new Set(Jn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var Ky={compile:Fy,interpret:zf,collectEvaluatedItems:Vy};const{Core:Jf,Schema:Ws,Instance:_i}=k,zy=async(t,e,r)=>{const n=await Ws.step("prefixItems",r);return[Ws.typeOf(n,"array")?Ws.length(n):0,await Jf.compileSchema(t,e)]},Gf=([t,e],r,n,s)=>_i.typeOf(r,"array")?_i.every((i,a)=>a<t||Jf.interpretSchema(e,i,n,s),r):!0,Jy=(t,e,r,n)=>Gf(t,e,r,n)&&new Set(_i.map((s,i)=>i,e));var Gy={compile:zy,interpret:Gf,collectEvaluatedItems:Jy};const{Schema:Hy,Instance:Ro}=k,Xy=t=>Hy.value(t),Yy=(t,e)=>!Ro.typeOf(e,"array")||Ro.length(e)<=t;var Wy={compile:Xy,interpret:Yy};const{Schema:Qy,Instance:qo}=k,Zy=t=>Qy.value(t),e$=(t,e)=>!qo.typeOf(e,"string")||qo.length(e)<=t;var t$={compile:Zy,interpret:e$};const{Schema:r$,Instance:Do}=k,n$=t=>r$.value(t),s$=(t,e)=>!Do.typeOf(e,"string")||[...Do.value(e)].length<=t;var i$={compile:n$,interpret:s$};const{Schema:a$,Instance:Lo}=k,o$=t=>a$.value(t),c$=(t,e)=>!Lo.typeOf(e,"object")||Lo.keys(e).length<=t;var l$={compile:o$,interpret:c$};const{Schema:Qs,Instance:Mo}=k,f$=async(t,e,r)=>{const n=await Qs.step("exclusiveMaximum",r),s=Qs.value(n);return[Qs.value(t),s]},p$=([t,e],r)=>{if(!Mo.typeOf(r,"number"))return!0;const n=Mo.value(r);return e?n<t:n<=t};var u$={compile:f$,interpret:p$};const{Schema:d$,Instance:Bo}=k,m$=async t=>d$.value(t),h$=(t,e)=>!Bo.typeOf(e,"number")||Bo.value(e)<=t;var y$={compile:m$,interpret:h$};const{Schema:$$,Instance:Uo}=k,g$=t=>$$.value(t),v$=(t,e)=>!Uo.typeOf(e,"array")||Uo.length(e)>=t;var b$={compile:g$,interpret:v$};const{Schema:S$,Instance:Fo}=k,w$=t=>S$.value(t),E$=(t,e)=>!Fo.typeOf(e,"string")||Fo.length(e)>=t;var I$={compile:w$,interpret:E$};const{Schema:O$,Instance:Vo}=k,P$=t=>O$.value(t),k$=(t,e)=>!Vo.typeOf(e,"string")||[...Vo.value(e)].length>=t;var j$={compile:P$,interpret:k$};const{Schema:_$,Instance:Ko}=k,A$=t=>_$.value(t),x$=(t,e)=>!Ko.typeOf(e,"object")||Ko.keys(e).length>=t;var N$={compile:A$,interpret:x$};const{Schema:Zs,Instance:zo}=k,C$=async(t,e,r)=>{const n=await Zs.step("exclusiveMinimum",r),s=Zs.value(n);return[Zs.value(t),s]},T$=([t,e],r)=>{if(!zo.typeOf(r,"number"))return!0;const n=zo.value(r);return e?n>t:n>=t};var R$={compile:C$,interpret:T$};const{Schema:q$,Instance:Jo}=k,D$=async t=>q$.value(t),L$=(t,e)=>!Jo.typeOf(e,"number")||Jo.value(e)>=t;var M$={compile:D$,interpret:L$};const{Schema:B$,Instance:Go}=k,U$=t=>B$.value(t),F$=(t,e)=>{if(!Go.typeOf(e,"number"))return!0;const r=Go.value(e)%t;return Ho(0,r)||Ho(t,r)},Ho=(t,e)=>Math.abs(t-e)<11920929e-14;var V$={compile:U$,interpret:F$};const{Core:Hf}=k,K$=Hf.compileSchema,z$=(t,e,r,n)=>!Hf.interpretSchema(t,e,r,n);var J$={compile:K$,interpret:z$};const{Core:ks,Schema:G$}=k,H$=async(t,e)=>{const r=await G$.map(n=>ks.compileSchema(n,e),t);return Promise.all(r)},X$=(t,e,r,n)=>{let s=0;for(const i of t)if(ks.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},Y$=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=ks.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},W$=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=ks.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var Q$={compile:H$,interpret:X$,collectEvaluatedProperties:Y$,collectEvaluatedItems:W$};const{Schema:Z$,Instance:Xo}=k,eg=t=>new RegExp(Z$.value(t),"u"),tg=(t,e)=>!Xo.typeOf(e,"string")||t.test(Xo.value(e));var rg={compile:eg,interpret:tg};const{Core:Xf,Schema:ng,Instance:Yo}=k,ei=Oe,sg=(t,e)=>ei.pipeline([ng.entries,ei.map(async([r,n])=>[new RegExp(r,"u"),await Xf.compileSchema(n,e)]),ei.all],t),Yf=(t,e,r,n)=>!Yo.typeOf(e,"object")||t.every(([s,i])=>Yo.entries(e).filter(([a])=>s.test(a)).every(([,a])=>Xf.interpretSchema(i,a,r,n))),ig=(t,e,r,n)=>Yf(t,e,r,n)&&t.map(([s])=>s);var ag={compile:sg,interpret:Yf,collectEvaluatedProperties:ig};const og=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,cg=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),lg=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Wf={isObject:og,escapeRegExp:cg,splitUrl:lg};const{Core:Qf,Schema:fg,Instance:Wo}=k,Qo=Oe,{escapeRegExp:pg}=Wf,ug=(t,e)=>Qo.pipeline([fg.entries,Qo.reduce(async(r,[n,s])=>(r[n]=await Qf.compileSchema(s,e),r),Object.create(null))],t),Zf=(t,e,r,n)=>!Wo.typeOf(e,"object")||Wo.entries(e).filter(([s])=>s in t).every(([s,i])=>Qf.interpretSchema(t[s],i,r,n)),dg=(t,e,r,n)=>Zf(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${pg(s)}$`));var mg={compile:ug,interpret:Zf,collectEvaluatedProperties:dg};const{Core:ep,Instance:ti}=k,hg=(t,e)=>ep.compileSchema(t,e),yg=(t,e,r,n)=>!ti.typeOf(e,"object")||ti.keys(e).every(s=>ep.interpretSchema(t,ti.cons(s),r,n));var $g={compile:hg,interpret:yg};const{Core:cn,Schema:Gn}=k,{splitUrl:gg}=Wf,vg=async(t,e)=>{const[,r]=gg(Gn.value(t)),n=await Gn.get(Gn.value(t),t);return await cn.compileSchema(n,e),[n.id,r]},bg=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return cn.interpretSchema(s[e],r,n,s);{const i=Gn.getAnchorPointer(n.metaData[t],e);return cn.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},Sg=cn.collectEvaluatedProperties,wg=cn.collectEvaluatedItems;var Eg={compile:vg,interpret:bg,collectEvaluatedProperties:Sg,collectEvaluatedItems:wg};const{Core:js,Schema:Zo}=k,Ig=async(t,e)=>{const r=await Zo.get(Zo.value(t),t);return js.compileSchema(r,e)},Og=js.interpretSchema,Pg=js.collectEvaluatedProperties,kg=js.collectEvaluatedItems;var jg={compile:Ig,interpret:Og,collectEvaluatedProperties:Pg,collectEvaluatedItems:kg};const{Schema:_g,Instance:ec}=k,Ag=t=>_g.value(t),xg=(t,e)=>!ec.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(ec.value(e),r));var Ng={compile:Ag,interpret:xg};const{Core:tp,Schema:Cg,Instance:tc}=k,rc=Oe,Tg=(t,e)=>rc.pipeline([Cg.map(r=>tp.compileSchema(r,e)),rc.all],t),rp=(t,e,r,n)=>tc.typeOf(e,"array")?tc.every((s,i)=>!(i in t)||tp.interpretSchema(t[i],s,r,n),e):!0,Rg=(t,e,r,n)=>rp(t,e,r,n)&&new Set(t.map((s,i)=>i));var qg={compile:Tg,interpret:rp,collectEvaluatedItems:Rg};const{Schema:Dg,Instance:nc}=k,Lg=t=>Dg.value(t),Mg=(t,e)=>typeof t=="string"?nc.typeOf(e,t):t.some(nc.typeOf(e));var Bg={compile:Lg,interpret:Mg};const{Core:Ai,Schema:Ug,Instance:Hn}=k,Fg=async(t,e,r)=>[Ug.uri(r),await Ai.compileSchema(t,e)],np=([t,e],r,n,s)=>{if(!Hn.typeOf(r,"array"))return!0;const i=Ai.collectEvaluatedItems(t,r,n,s,!0);return i===!1||Hn.every((a,o)=>i.has(o)||Ai.interpretSchema(e,Hn.step(o,r),n,s),r)},Vg=(t,e,r,n)=>np(t,e,r,n)&&new Set(Hn.map((s,i)=>i,e));var Kg={compile:Fg,interpret:np,collectEvaluatedItems:Vg};const{Core:xi,Schema:zg,Instance:sc}=k,Jg=async(t,e,r)=>[zg.uri(r),await xi.compileSchema(t,e)],sp=([t,e],r,n,s)=>{if(!sc.typeOf(r,"object"))return!0;const i=xi.collectEvaluatedProperties(t,r,n,s,!0);return!i||sc.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>xi.interpretSchema(e,a,n,s))},Gg=(t,e,r,n)=>sp(t,e,r,n)&&[new RegExp("")];var Hg={compile:Jg,interpret:sp,collectEvaluatedProperties:Gg};const{Schema:Xg,Instance:ri}=k,Yg=Tr,Wg=t=>Xg.value(t),Qg=(t,e)=>{if(!ri.typeOf(e,"array")||t===!1)return!0;const r=ri.map(n=>Yg(ri.value(n)),e);return new Set(r).size===r.length};var Zg={compile:Wg,interpret:Qg};const{Keywords:ic}=k;var Rr={additionalItems:gh,additionalItems6:Sh,additionalProperties:Ih,additionalProperties6:kh,allOf:Ch,anyOf:Mh,const:zh,contains:Hh,containsMinContainsMaxContains:Wh,definitions:ry,dependencies:iy,dependentRequired:cy,dependentSchemas:dy,enum:gy,exclusiveMaximum:wy,exclusiveMinimum:Py,if:xy,then:qy,else:Uy,items:Ky,items202012:Gy,maxItems:Wy,maxLength:t$,maxLength6:i$,maxProperties:l$,maximumExclusiveMaximum:u$,maximum:y$,metaData:ic.metaData,minItems:b$,minLength:I$,minLength6:j$,minProperties:N$,minimumExclusiveMinimum:R$,minimum:M$,multipleOf:V$,not:J$,oneOf:Q$,pattern:rg,patternProperties:ag,properties:mg,propertyNames:$g,dynamicRef:Eg,ref:jg,required:Ng,tupleItems:qg,type:Bg,unevaluatedItems:Kg,unevaluatedProperties:Hg,uniqueItems:Zg,validate:ic.validate},ev=`{
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
}`;const{Core:tv,Schema:$n}=k,oe=Rr,rv=ev,gn="http://json-schema.org/draft-04/schema";$n.setConfig(gn,"baseToken","id");$n.setConfig(gn,"embeddedToken","id");$n.setConfig(gn,"anchorToken","id");$n.setConfig(gn,"jrefToken","$ref");$n.add(JSON.parse(rv));tv.defineVocabulary(gn,{validate:oe.validate,additionalItems:oe.additionalItems,additionalProperties:oe.additionalProperties,allOf:oe.allOf,anyOf:oe.anyOf,default:oe.metaData,definitions:oe.definitions,dependencies:oe.dependencies,description:oe.metaData,enum:oe.enum,format:oe.metaData,items:oe.items,maxItems:oe.maxItems,maxLength:oe.maxLength,maxProperties:oe.maxProperties,maximum:oe.maximumExclusiveMaximum,minItems:oe.minItems,minLength:oe.minLength,minProperties:oe.minProperties,minimum:oe.minimumExclusiveMinimum,multipleOf:oe.multipleOf,not:oe.not,oneOf:oe.oneOf,pattern:oe.pattern,patternProperties:oe.patternProperties,properties:oe.properties,required:oe.required,title:oe.metaData,type:oe.type,uniqueItems:oe.uniqueItems});var nv=`{
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
}`;const{Core:sv,Schema:vn}=k,re=Rr,iv=nv,bn="http://json-schema.org/draft-06/schema";vn.setConfig(bn,"baseToken","$id");vn.setConfig(bn,"embeddedToken","$id");vn.setConfig(bn,"anchorToken","$id");vn.setConfig(bn,"jrefToken","$ref");vn.add(JSON.parse(iv));sv.defineVocabulary(bn,{validate:re.validate,additionalItems:re.additionalItems6,additionalProperties:re.additionalProperties6,allOf:re.allOf,anyOf:re.anyOf,const:re.const,contains:re.contains,default:re.metaData,definitions:re.definitions,dependencies:re.dependencies,description:re.metaData,enum:re.enum,examples:re.metaData,exclusiveMaximum:re.exclusiveMaximum,exclusiveMinimum:re.exclusiveMinimum,format:re.metaData,items:re.items,maxItems:re.maxItems,maxLength:re.maxLength6,maxProperties:re.maxProperties,maximum:re.maximum,minItems:re.minItems,minLength:re.minLength6,minProperties:re.minProperties,minimum:re.minimum,multipleOf:re.multipleOf,not:re.not,oneOf:re.oneOf,pattern:re.pattern,patternProperties:re.patternProperties,properties:re.properties,propertyNames:re.propertyNames,required:re.required,title:re.metaData,type:re.type,uniqueItems:re.uniqueItems});var av=`{
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
}`;const{Core:ov,Schema:Sn}=k,ee=Rr,cv=av,wn="http://json-schema.org/draft-07/schema";Sn.setConfig(wn,"baseToken","$id");Sn.setConfig(wn,"embeddedToken","$id");Sn.setConfig(wn,"anchorToken","$id");Sn.setConfig(wn,"jrefToken","$ref");Sn.add(JSON.parse(cv));ov.defineVocabulary(wn,{validate:ee.validate,additionalItems:ee.additionalItems6,additionalProperties:ee.additionalProperties6,allOf:ee.allOf,anyOf:ee.anyOf,const:ee.const,contains:ee.contains,default:ee.metaData,definitions:ee.definitions,dependencies:ee.dependencies,description:ee.metaData,enum:ee.enum,exclusiveMaximum:ee.exclusiveMaximum,exclusiveMinimum:ee.exclusiveMinimum,format:ee.metaData,if:ee.if,then:ee.then,else:ee.else,items:ee.items,maxItems:ee.maxItems,maxLength:ee.maxLength6,maxProperties:ee.maxProperties,maximum:ee.maximum,minItems:ee.minItems,minLength:ee.minLength6,minProperties:ee.minProperties,minimum:ee.minimum,multipleOf:ee.multipleOf,not:ee.not,oneOf:ee.oneOf,pattern:ee.pattern,patternProperties:ee.patternProperties,properties:ee.properties,propertyNames:ee.propertyNames,readOnly:ee.metaData,required:ee.required,title:ee.metaData,type:ee.type,uniqueItems:ee.uniqueItems,writeOnly:ee.metaData});var lv=`{
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
}`,fv=`{
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
}`,pv=`{
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
}`,uv=`{
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
}`,dv=`{
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
}`,mv=`{
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
}`,hv=`{
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
}`;const{Core:En,Schema:Ke}=k,V=Rr,yv=lv,$v=fv,gv=pv,vv=uv,bv=dv,Sv=mv,wv=hv,qr="https://json-schema.org/draft/2019-09/vocab/core";Ke.setConfig(qr,"baseToken","$id");Ke.setConfig(qr,"embeddedToken","$id");Ke.setConfig(qr,"anchorToken","$anchor");Ke.setConfig(qr,"recursiveAnchorToken","$recursiveAnchor");Ke.setConfig(qr,"vocabularyToken","$vocabulary");Ke.setConfig(qr,"mandatoryVocabularies",["https://json-schema.org/draft/2019-09/vocab/core"]);Ke.add(JSON.parse(yv));Ke.add(JSON.parse($v));En.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/core",{validate:V.validate,$defs:V.definitions,$recursiveRef:V.dynamicRef,$ref:V.ref});Ke.add(JSON.parse(gv));En.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/applicator",{additionalItems:V.additionalItems6,additionalProperties:V.additionalProperties6,allOf:V.allOf,anyOf:V.anyOf,contains:V.containsMinContainsMaxContains,dependentSchemas:V.dependentSchemas,if:V.if,then:V.then,else:V.else,items:V.items,not:V.not,oneOf:V.oneOf,patternProperties:V.patternProperties,properties:V.properties,propertyNames:V.propertyNames,unevaluatedItems:V.unevaluatedItems,unevaluatedProperties:V.unevaluatedProperties});Ke.add(JSON.parse(vv));En.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/validation",{const:V.const,dependentRequired:V.dependentRequired,enum:V.enum,exclusiveMaximum:V.exclusiveMaximum,exclusiveMinimum:V.exclusiveMinimum,maxItems:V.maxItems,maxLength:V.maxLength6,maxProperties:V.maxProperties,maximum:V.maximum,minItems:V.minItems,minLength:V.minLength6,minProperties:V.minProperties,minimum:V.minimum,multipleOf:V.multipleOf,pattern:V.pattern,required:V.required,type:V.type,uniqueItems:V.uniqueItems});Ke.add(JSON.parse(bv));En.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/meta-data",{default:V.metaData,deprecated:V.metaData,description:V.metaData,examples:V.metaData,readOnly:V.metaData,title:V.metaData,writeOnly:V.metaData});Ke.add(JSON.parse(Sv));Ke.add(JSON.parse(wv));En.defineVocabulary("https://json-schema.org/draft/2019-09/vocab/content",{contentEncoding:V.metaData,contentMediaType:V.metaData,contentSchema:V.metaData});var Ev=`{
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
}`,Iv=`{
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
}`,Ov=`{
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
}`,Pv=`{
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
}`,kv=`{
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
}`,jv=`{
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
}`,_v=`{
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
}`,Av=`{
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
}`,xv=`{
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
}`;const{Core:Qt,Schema:Le}=k,U=Rr,Nv=Ev,Cv=Iv,Tv=Ov,Rv=Pv,qv=kv,Dv=jv,Lv=_v,Mv=Av,Bv=xv,Dr="https://json-schema.org/draft/2020-12/vocab/core";Le.setConfig(Dr,"baseToken","$id");Le.setConfig(Dr,"embeddedToken","$id");Le.setConfig(Dr,"anchorToken","$anchor");Le.setConfig(Dr,"dynamicAnchorToken","$dynamicAnchor");Le.setConfig(Dr,"vocabularyToken","$vocabulary");Le.setConfig(Dr,"mandatoryVocabularies",["https://json-schema.org/draft/2020-12/vocab/core"]);Le.add(JSON.parse(Nv));Le.add(JSON.parse(Cv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/core",{validate:U.validate,$defs:U.definitions,$dynamicRef:U.dynamicRef,$ref:U.ref});Le.add(JSON.parse(Tv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/applicator",{additionalProperties:U.additionalProperties6,allOf:U.allOf,anyOf:U.anyOf,contains:U.containsMinContainsMaxContains,dependentSchemas:U.dependentSchemas,if:U.if,then:U.then,else:U.else,items:U.items202012,not:U.not,oneOf:U.oneOf,patternProperties:U.patternProperties,prefixItems:U.tupleItems,properties:U.properties,propertyNames:U.propertyNames});Le.add(JSON.parse(Rv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/validation",{const:U.const,dependentRequired:U.dependentRequired,enum:U.enum,exclusiveMaximum:U.exclusiveMaximum,exclusiveMinimum:U.exclusiveMinimum,maxItems:U.maxItems,maxLength:U.maxLength6,maxProperties:U.maxProperties,maximum:U.maximum,minItems:U.minItems,minLength:U.minLength6,minProperties:U.minProperties,minimum:U.minimum,multipleOf:U.multipleOf,pattern:U.pattern,required:U.required,type:U.type,uniqueItems:U.uniqueItems});Le.add(JSON.parse(qv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/meta-data",{default:U.metaData,deprecated:U.metaData,description:U.metaData,examples:U.metaData,readOnly:U.metaData,title:U.metaData,writeOnly:U.metaData});Le.add(JSON.parse(Dv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/format-annotation",{format:U.metaData});Le.add(JSON.parse(Lv));Le.add(JSON.parse(Mv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/content",{contentEncoding:U.metaData,contentMediaType:U.metaData,contentSchema:U.metaData});Le.add(JSON.parse(Bv));Qt.defineVocabulary("https://json-schema.org/draft/2020-12/vocab/unevaluated",{unevaluatedItems:U.unevaluatedItems,unevaluatedProperties:U.unevaluatedProperties});const{Core:lt,Schema:Uv,InvalidSchemaError:Fv}=k,Vv=Rr;var je={add:lt.add,get:Uv.get,validate:lt.validate,compile:lt.compile,interpret:lt.interpret,setMetaOutputFormat:lt.setMetaOutputFormat,setShouldMetaValidate:lt.setShouldMetaValidate,FLAG:lt.FLAG,BASIC:lt.BASIC,DETAILED:lt.DETAILED,VERBOSE:lt.VERBOSE,Keywords:Vv,InvalidSchemaError:Fv};const Kv=je.add,zv=je.get,Jv=je.validate,Gv=je.compile,Hv=je.interpret,Xv=je.setMetaOutputFormat,Yv=je.setShouldMetaValidate,Wv=je.FLAG,Qv=je.BASIC,Zv=je.DETAILED,eb=je.VERBOSE,tb=je.Keywords,rb=je.InvalidSchemaError;var nb=Object.freeze(Object.defineProperty({__proto__:null,add:Kv,get:zv,validate:Jv,compile:Gv,interpret:Hv,setMetaOutputFormat:Xv,setShouldMetaValidate:Yv,FLAG:Wv,BASIC:Qv,DETAILED:Zv,VERBOSE:eb,Keywords:tb,InvalidSchemaError:rb,default:je},Symbol.toStringTag,{value:"Module"})),ip={exports:{}};(function(t){(function(e,r){t.exports?t.exports=r():e.moo=r()})(sa,function(){var e=Object.prototype.hasOwnProperty,r=Object.prototype.toString,n=typeof new RegExp().sticky=="boolean";function s(w){return w&&r.call(w)==="[object RegExp]"}function i(w){return w&&typeof w=="object"&&!s(w)&&!Array.isArray(w)}function a(w){return w.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function o(w){var N=new RegExp("|"+w);return N.exec("").length-1}function c(w){return"("+w+")"}function l(w){if(!w.length)return"(?!)";var N=w.map(function(C){return"(?:"+C+")"}).join("|");return"(?:"+N+")"}function p(w){if(typeof w=="string")return"(?:"+a(w)+")";if(s(w)){if(w.ignoreCase)throw new Error("RegExp /i flag not allowed");if(w.global)throw new Error("RegExp /g flag is implied");if(w.sticky)throw new Error("RegExp /y flag is implied");if(w.multiline)throw new Error("RegExp /m flag is implied");return w.source}else throw new Error("Not a pattern: "+w)}function $(w){for(var N=Object.getOwnPropertyNames(w),C=[],R=0;R<N.length;R++){var z=N[R],q=w[z],X=[].concat(q);if(z==="include"){for(var le=0;le<X.length;le++)C.push({include:X[le]});continue}var pe=[];X.forEach(function(F){i(F)?(pe.length&&C.push(y(z,pe)),C.push(y(z,F)),pe=[]):pe.push(F)}),pe.length&&C.push(y(z,pe))}return C}function m(w){for(var N=[],C=0;C<w.length;C++){var R=w[C];if(R.include){for(var z=[].concat(R.include),q=0;q<z.length;q++)N.push({include:z[q]});continue}if(!R.type)throw new Error("Rule has no type: "+JSON.stringify(R));N.push(y(R.type,R))}return N}function y(w,N){if(i(N)||(N={match:N}),N.include)throw new Error("Matching rules cannot also include states");var C={defaultType:w,lineBreaks:!!N.error||!!N.fallback,pop:!1,next:null,push:null,error:!1,fallback:!1,value:null,type:null,shouldThrow:!1};for(var R in N)e.call(N,R)&&(C[R]=N[R]);if(typeof C.type=="string"&&w!==C.type)throw new Error("Type transform cannot be a string (type '"+C.type+"' for token '"+w+"')");var z=C.match;return C.match=Array.isArray(z)?z:z?[z]:[],C.match.sort(function(q,X){return s(q)&&s(X)?0:s(X)?-1:s(q)?1:X.length-q.length}),C}function P(w){return Array.isArray(w)?m(w):$(w)}var u=y("error",{lineBreaks:!0,shouldThrow:!0});function d(w,N){for(var C=null,R=Object.create(null),z=!0,q=null,X=[],le=[],pe=0;pe<w.length;pe++)w[pe].fallback&&(z=!1);for(var pe=0;pe<w.length;pe++){var F=w[pe];if(F.include)throw new Error("Inheritance is not allowed in stateless lexers");if(F.error||F.fallback){if(C)throw!F.fallback==!C.fallback?new Error("Multiple "+(F.fallback?"fallback":"error")+" rules not allowed (for token '"+F.defaultType+"')"):new Error("fallback and error are mutually exclusive (for token '"+F.defaultType+"')");C=F}var ve=F.match.slice();if(z)for(;ve.length&&typeof ve[0]=="string"&&ve[0].length===1;){var We=ve.shift();R[We.charCodeAt(0)]=F}if(F.pop||F.push||F.next){if(!N)throw new Error("State-switching options are not allowed in stateless lexers (for token '"+F.defaultType+"')");if(F.fallback)throw new Error("State-switching options are not allowed on fallback tokens (for token '"+F.defaultType+"')")}if(ve.length!==0){z=!1,X.push(F);for(var be=0;be<ve.length;be++){var Be=ve[be];if(!!s(Be)){if(q===null)q=Be.unicode;else if(q!==Be.unicode&&F.fallback===!1)throw new Error("If one rule is /u then all must be")}}var Ue=l(ve.map(p)),ce=new RegExp(Ue);if(ce.test(""))throw new Error("RegExp matches empty string: "+ce);var Y=o(Ue);if(Y>0)throw new Error("RegExp has capture groups: "+ce+`
Use (?: \u2026 ) instead`);if(!F.lineBreaks&&ce.test(`
`))throw new Error("Rule should declare lineBreaks: "+ce);le.push(c(Ue))}}var ne=C&&C.fallback,fe=n&&!ne?"ym":"gm",he=n||ne?"":"|";q===!0&&(fe+="u");var Fe=new RegExp(l(le)+he,fe);return{regexp:Fe,groups:X,fast:R,error:C||u}}function v(w){var N=d(P(w));return new S({start:N},"start")}function I(w,N,C){var R=w&&(w.push||w.next);if(R&&!C[R])throw new Error("Missing state '"+R+"' (in token '"+w.defaultType+"' of state '"+N+"')");if(w&&w.pop&&+w.pop!=1)throw new Error("pop must be 1 (in token '"+w.defaultType+"' of state '"+N+"')")}function b(w,N){var C=w.$all?P(w.$all):[];delete w.$all;var R=Object.getOwnPropertyNames(w);N||(N=R[0]);for(var z=Object.create(null),q=0;q<R.length;q++){var X=R[q];z[X]=P(w[X]).concat(C)}for(var q=0;q<R.length;q++)for(var X=R[q],le=z[X],pe=Object.create(null),F=0;F<le.length;F++){var ve=le[F];if(!!ve.include){var We=[F,1];if(ve.include!==X&&!pe[ve.include]){pe[ve.include]=!0;var be=z[ve.include];if(!be)throw new Error("Cannot include nonexistent state '"+ve.include+"' (in state '"+X+"')");for(var Be=0;Be<be.length;Be++){var Ue=be[Be];le.indexOf(Ue)===-1&&We.push(Ue)}}le.splice.apply(le,We),F--}}for(var ce=Object.create(null),q=0;q<R.length;q++){var X=R[q];ce[X]=d(z[X],!0)}for(var q=0;q<R.length;q++){for(var Y=R[q],ne=ce[Y],fe=ne.groups,F=0;F<fe.length;F++)I(fe[F],Y,ce);for(var he=Object.getOwnPropertyNames(ne.fast),F=0;F<he.length;F++)I(ne.fast[he[F]],Y,ce)}return new S(ce,N)}function j(w){for(var N=Object.create(null),C=Object.create(null),R=Object.getOwnPropertyNames(w),z=0;z<R.length;z++){var q=R[z],X=w[q],le=Array.isArray(X)?X:[X];le.forEach(function(be){if((C[be.length]=C[be.length]||[]).push(be),typeof be!="string")throw new Error("keyword must be string (in keyword '"+q+"')");N[be]=q})}function pe(be){return JSON.stringify(be)}var F="";F+=`switch (value.length) {
`;for(var ve in C){var We=C[ve];F+="case "+ve+`:
`,F+=`switch (value) {
`,We.forEach(function(be){var Be=N[be];F+="case "+pe(be)+": return "+pe(Be)+`
`}),F+=`}
`}return F+=`}
`,Function("value",F)}var S=function(w,N){this.startState=N,this.states=w,this.buffer="",this.stack=[],this.reset()};S.prototype.reset=function(w,N){return this.buffer=w||"",this.index=0,this.line=N?N.line:1,this.col=N?N.col:1,this.queuedToken=N?N.queuedToken:null,this.queuedThrow=N?N.queuedThrow:null,this.setState(N?N.state:this.startState),this.stack=N&&N.stack?N.stack.slice():[],this},S.prototype.save=function(){return{line:this.line,col:this.col,state:this.state,stack:this.stack.slice(),queuedToken:this.queuedToken,queuedThrow:this.queuedThrow}},S.prototype.setState=function(w){if(!(!w||this.state===w)){this.state=w;var N=this.states[w];this.groups=N.groups,this.error=N.error,this.re=N.regexp,this.fast=N.fast}},S.prototype.popState=function(){this.setState(this.stack.pop())},S.prototype.pushState=function(w){this.stack.push(this.state),this.setState(w)};var _=n?function(w,N){return w.exec(N)}:function(w,N){var C=w.exec(N);return C[0].length===0?null:C};S.prototype._getGroup=function(w){for(var N=this.groups.length,C=0;C<N;C++)if(w[C+1]!==void 0)return this.groups[C];throw new Error("Cannot find token type for matched text")};function K(){return this.value}if(S.prototype.next=function(){var w=this.index;if(this.queuedGroup){var N=this._token(this.queuedGroup,this.queuedText,w);return this.queuedGroup=null,this.queuedText="",N}var C=this.buffer;if(w!==C.length){var X=this.fast[C.charCodeAt(w)];if(X)return this._token(X,C.charAt(w),w);var R=this.re;R.lastIndex=w;var z=_(R,C),q=this.error;if(z==null)return this._token(q,C.slice(w,C.length),w);var X=this._getGroup(z),le=z[0];return q.fallback&&z.index!==w?(this.queuedGroup=X,this.queuedText=le,this._token(q,C.slice(w,z.index),w)):this._token(X,le,w)}},S.prototype._token=function(w,N,C){var R=0;if(w.lineBreaks){var z=/\n/g,q=1;if(N===`
`)R=1;else for(;z.exec(N);)R++,q=z.lastIndex}var X={type:typeof w.type=="function"&&w.type(N)||w.defaultType,value:typeof w.value=="function"?w.value(N):N,text:N,toString:K,offset:C,lineBreaks:R,line:this.line,col:this.col},le=N.length;if(this.index+=le,this.line+=R,R!==0?this.col=le-q+1:this.col+=le,w.shouldThrow)throw new Error(this.formatError(X,"invalid syntax"));return w.pop?this.popState():w.push?this.pushState(w.push):w.next&&this.setState(w.next),X},typeof Symbol!="undefined"&&Symbol.iterator){var Z=function(w){this.lexer=w};Z.prototype.next=function(){var w=this.lexer.next();return{value:w,done:!w}},Z.prototype[Symbol.iterator]=function(){return this},S.prototype[Symbol.iterator]=function(){return new Z(this)}}return S.prototype.formatError=function(w,N){if(w==null)var C=this.buffer.slice(this.index),w={text:C,offset:this.index,lineBreaks:C.indexOf(`
`)===-1?0:1,line:this.line,col:this.col};var R=Math.max(0,w.offset-w.col+1),z=w.lineBreaks?w.text.indexOf(`
`):w.text.length,q=this.buffer.substring(R,w.offset+z);return N+=" at line "+w.line+" col "+w.col+`:

`,N+="  "+q+`
`,N+="  "+Array(w.col).join(" ")+"^",N},S.prototype.clone=function(){return new S(this.states,this.state)},S.prototype.has=function(w){return!0},{compile:v,states:b,error:Object.freeze({error:!0}),fallback:Object.freeze({fallback:!0}),keywords:j}})})(ip);var ft=ip.exports;const Aa="[0-9]",sb="[1-9]",ib="[0-9a-fA-F]",ac=`(?:\\\\["\\/\\\\brfnt]|\\\\u${ib}{4}|[^"\\\\])`,ab='"(?=[^"]*"\\s*:)',ob=`(?:0|${sb}${Aa}*)`,cb=`\\.${Aa}+`,lb="[eE]",fb=`${lb}[-+]?${Aa}+`,pb=`-?${ob}(?:${cb})?(?:${fb})?`,ub=`(?:(?:\r?
)|[ 	])+`;var oc=ft.states({main:{WS:{match:new RegExp(ub),lineBreaks:!0},accent7:new RegExp(`true|false|${pb}`),accent3:["{","}","[","]"],accent6:"null",stringProperty:{match:new RegExp(ab),push:"property"},stringStart:{match:'"',push:"string"},other:/./},string:{accent7:{match:new RegExp(`${ac}+`),lineBreaks:!0},stringEnd:{match:'"',pop:!0},other:/./},property:{accent1:{match:new RegExp(`${ac}+`),lineBreaks:!0},propertyEnd:{match:'"',pop:!0},other:/./}});const xa="[0-9]",db="[1-9]",ap="[0-9a-fA-F]",cc=`(?:\r?
)+`,Gt="[ \\t]",mb=`^${Gt}+`,hb=`(?:\\\\["\\/\\\\brfnt]|\\\\u${ap}{4}|[^"\\\\])`,yb=`(?:\\\\['\\/\\\\brfnt]|\\\\u${ap}{4}|[^'\\\\])`,Tn=`(?:"${hb}*"|'${yb}*')`,op=`${Gt}*:(?:${Gt}+|$)`,$b=`[^\\s]+(?=${op})`,Ni=`${Gt}*:`,lc=`[^\\s]+(?=${Ni})`,gb=`(?:0|${db}${xa}*)`,vb=`\\.${xa}+`,bb="[eE]",Sb=`${bb}[-+]?${xa}+`,Rn=`-?${gb}(?:${vb})?(?:${Sb})?`,wb=`-${Gt}+`,qn=`#[^
]*`;var fc=ft.states({main:{WS:{match:new RegExp(cc),lineBreaks:!0},indent:new RegExp(mb),comment:new RegExp(qn),inlineArray:{match:"[",type:ft.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:ft.keywords({accent3:"{"}),push:"inlineObject"},accent1:new RegExp(wb),accent7:["true","false","null",new RegExp(Tn),new RegExp(Rn)],accent6:new RegExp($b),accent3:{match:new RegExp(op),lineBreaks:!0,push:"property"},other:/[^#\n]+/},property:{WS:{match:new RegExp(cc),lineBreaks:!0,pop:1},comment:new RegExp(qn),accent7:{match:["true","false","null",new RegExp(Tn),new RegExp(Rn)],pop:1},other:/[^#\n]+/},inlineArray:{WS:new RegExp(`${Gt}+`),comment:new RegExp(qn),inlineArray:{match:"[",type:ft.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:ft.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"]",type:ft.keywords({accent3:"]"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Tn),new RegExp(Rn)],accent6:new RegExp(lc),accent3:{match:new RegExp(Ni),lineBreaks:!0},other:/[^\]\n,#]+/},inlineObject:{WS:new RegExp(`${Gt}+`),comment:new RegExp(qn),inlineArray:{match:"[",type:ft.keywords({accent3:"["}),push:"inlineArray"},inlineObject:{match:["{"],type:ft.keywords({accent3:"{"}),push:"inlineObject"},close:{match:"}",type:ft.keywords({accent3:"}"}),pop:1},comma:",",accent7:["true","false","null",new RegExp(Tn),new RegExp(Rn)],accent6:new RegExp(lc),accent3:{match:new RegExp(Ni),lineBreaks:!0},other:/[^}\n,#]+/}});function pc(t,e,r){const n=t.slice();return n[10]=e[r],n}function uc(t,e,r){const n=t.slice();return n[13]=e[r],n[15]=r,n}function dc(t){let e,r=t[15]+1+"",n;return{c(){e=J("div"),n=ie(r),this.h()},l(s){e=G(s,"DIV",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p:ke,d(s){s&&A(e)}}}function Eb(t){let e=t[10].value+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&8&&e!==(e=n[10].value+"")&&De(r,e)},d(n){n&&A(r)}}}function Ib(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent8 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Ob(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent7 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Pb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent6 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function kb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent5 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function jb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent4 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function _b(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent3 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Ab(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent2 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function xb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","accent1 svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function Nb(t){let e,r=t[10].value+"",n;return{c(){e=J("span"),n=ie(r),this.h()},l(s){e=G(s,"SPAN",{class:!0});var i=L(e);n=ae(i,r),i.forEach(A),this.h()},h(){x(e,"class","comment svelte-564293")},m(s,i){Q(s,e,i),T(e,n)},p(s,i){i&8&&r!==(r=s[10].value+"")&&De(n,r)},d(s){s&&A(e)}}}function mc(t){let e;function r(i,a){return i[10].type==="comment"?Nb:i[10].type==="accent1"?xb:i[10].type==="accent2"?Ab:i[10].type==="accent3"?_b:i[10].type==="accent4"?jb:i[10].type==="accent5"?kb:i[10].type==="accent6"?Pb:i[10].type==="accent7"?Ob:i[10].type==="accent8"?Ib:Eb}let n=r(t),s=n(t);return{c(){s.c(),e=Nt()},l(i){s.l(i),e=Nt()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function Cb(t){let e,r,n,s,i,a,o,c,l,p,$,m,y=[...Array(t[4])],P=[];for(let v=0;v<y.length;v+=1)P[v]=dc(uc(t,y,v));let u=t[3],d=[];for(let v=0;v<u.length;v+=1)d[v]=mc(pc(t,u,v));return{c(){e=J("div"),r=J("div");for(let v=0;v<P.length;v+=1)P[v].c();n=_e(),s=J("div"),i=J("pre"),a=ie("");for(let v=0;v<d.length;v+=1)d[v].c();o=ie(`
    `),c=_e(),l=J("textarea"),this.h()},l(v){e=G(v,"DIV",{class:!0});var I=L(e);r=G(I,"DIV",{class:!0});var b=L(r);for(let _=0;_<P.length;_+=1)P[_].l(b);b.forEach(A),n=Ae(I),s=G(I,"DIV",{class:!0});var j=L(s);i=G(j,"PRE",{class:!0});var S=L(i);a=ae(S,"");for(let _=0;_<d.length;_+=1)d[_].l(S);o=ae(S,`
    `),S.forEach(A),c=Ae(j),l=G(j,"TEXTAREA",{class:!0,"aria-label":!0}),L(l).forEach(A),j.forEach(A),I.forEach(A),this.h()},h(){x(r,"class","line-numbers svelte-564293"),x(i,"class","highlighted svelte-564293"),x(l,"class","src svelte-564293"),x(l,"aria-label","Code Editor"),x(s,"class","editable svelte-564293"),x(e,"class",p="Editor "+t[1]+" svelte-564293")},m(v,I){Q(v,e,I),T(e,r);for(let b=0;b<P.length;b+=1)P[b].m(r,null);T(e,n),T(e,s),T(s,i),T(i,a);for(let b=0;b<d.length;b+=1)d[b].m(i,null);T(i,o),T(s,c),T(s,l),t[8](l),no(l,t[0]),$||(m=[Kt(l,"input",t[9]),Kt(l,"input",t[7])],$=!0)},p(v,[I]){if(I&16){y=[...Array(v[4])];let b;for(b=0;b<y.length;b+=1){const j=uc(v,y,b);P[b]?P[b].p(j,I):(P[b]=dc(j),P[b].c(),P[b].m(r,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=y.length}if(I&8){u=v[3];let b;for(b=0;b<u.length;b+=1){const j=pc(v,u,b);d[b]?d[b].p(j,I):(d[b]=mc(j),d[b].c(),d[b].m(i,o))}for(;b<d.length;b+=1)d[b].d(1);d.length=u.length}I&1&&no(l,v[0]),I&2&&p!==(p="Editor "+v[1]+" svelte-564293")&&x(e,"class",p)},i:ke,o:ke,d(v){v&&A(e),Qn(P,v),Qn(d,v),t[8](null),$=!1,ml(m)}}}function Tb(t,e,r){let n,s,{theme:i="solarized-dark"}=e,{value:a=""}=e,{format:o="json"}=e,c;const l=()=>{c.focus()};function p(y){tu.call(this,t,y)}function $(y){jt[y?"unshift":"push"](()=>{c=y,r(2,c)})}function m(){a=this.value,r(0,a)}return t.$$set=y=>{"theme"in y&&r(1,i=y.theme),"value"in y&&r(0,a=y.value),"format"in y&&r(5,o=y.format)},t.$$.update=()=>{t.$$.dirty&1&&r(4,n=(a.match(/\n/g)||[]).length+1),t.$$.dirty&33&&r(3,s=function(){return o==="json"?(oc.reset(a),Array.from(oc)):(fc.reset(a),Array.from(fc))}())},[a,i,c,s,n,o,l,p,$,m]}class Rb extends Rt{constructor(e){super(),qt(this,e,Tb,Cb,Dt,{theme:1,value:0,format:5,focus:6})}get focus(){return this.$$.ctx[6]}}function hc(t,e,r){const n=t.slice();return n[18]=e[r],n[20]=r,n}function yc(t){let e,r,n,s;function i(){return t[12](t[20])}return{c(){e=J("button"),r=ie("\xD7"),this.h()},l(a){e=G(a,"BUTTON",{class:!0});var o=L(e);r=ae(o,"\xD7"),o.forEach(A),this.h()},h(){x(e,"class","tab-close svelte-1ylgy73")},m(a,o){Q(a,e,o),T(e,r),n||(s=Kt(e,"click",i),n=!0)},p(a,o){t=a},d(a){a&&A(e),n=!1,s()}}}function $c(t){let e,r,n=t[18].label+"",s,i,a,o,c,l,p=!t[18].persistent&&t[0].length>t[6]&&yc(t);function $(){return t[13](t[20])}return{c(){e=J("button"),r=J("span"),s=ie(n),i=_e(),p&&p.c(),this.h()},l(m){e=G(m,"BUTTON",{role:!0,id:!0,"aria-selected":!0,"aria-controls":!0,class:!0});var y=L(e);r=G(y,"SPAN",{class:!0});var P=L(r);s=ae(P,n),P.forEach(A),i=Ae(y),p&&p.l(y),y.forEach(A),this.h()},h(){x(r,"class","tab-label svelte-1ylgy73"),x(e,"role","tab"),x(e,"id",a=`${t[3]}-tab-${t[20]}`),x(e,"aria-selected",o=t[20]===t[1]),x(e,"aria-controls","tabpanel"),x(e,"class","svelte-1ylgy73"),so(e,"active",t[20]===t[5])},m(m,y){Q(m,e,y),T(e,r),T(r,s),T(e,i),p&&p.m(e,null),c||(l=Kt(e,"click",$),c=!0)},p(m,y){t=m,y&1&&n!==(n=t[18].label+"")&&De(s,n),!t[18].persistent&&t[0].length>t[6]?p?p.p(t,y):(p=yc(t),p.c(),p.m(e,null)):p&&(p.d(1),p=null),y&8&&a!==(a=`${t[3]}-tab-${t[20]}`)&&x(e,"id",a),y&2&&o!==(o=t[20]===t[1])&&x(e,"aria-selected",o),y&32&&so(e,"active",t[20]===t[5])},d(m){m&&A(e),p&&p.d(),c=!1,l()}}}function gc(t){let e,r,n,s,i,a;return{c(){e=J("button"),r=J("span"),n=ie("+"),this.h()},l(o){e=G(o,"BUTTON",{role:!0,id:!0,class:!0});var c=L(e);r=G(c,"SPAN",{class:!0});var l=L(r);n=ae(l,"+"),l.forEach(A),c.forEach(A),this.h()},h(){x(r,"class","tab-label svelte-1ylgy73"),x(e,"role","tab"),x(e,"id",s=`${t[3]}-tab-${t[0].length}`),x(e,"class","svelte-1ylgy73")},m(o,c){Q(o,e,c),T(e,r),T(r,n),i||(a=Kt(e,"click",t[10]),i=!0)},p(o,c){c&9&&s!==(s=`${o[3]}-tab-${o[0].length}`)&&x(e,"id",s)},d(o){o&&A(e),i=!1,a()}}}function qb(t){let e,r,n,s,i,a,o,c,l,p=t[0],$=[];for(let d=0;d<p.length;d+=1)$[d]=$c(hc(t,p,d));let m=t[4]&&gc(t);function y(d){t[15](d)}function P(d){t[16](d)}let u={};return t[0][t[1]].text!==void 0&&(u.value=t[0][t[1]].text),t[2]!==void 0&&(u.format=t[2]),i=new Rb({props:u}),t[14](i),jt.push(()=>mr(i,"value",y)),jt.push(()=>mr(i,"format",P)),i.$on("input",t[17]),{c(){e=J("div");for(let d=0;d<$.length;d+=1)$[d].c();r=_e(),m&&m.c(),n=_e(),s=J("div"),Ze(i.$$.fragment),this.h()},l(d){e=G(d,"DIV",{role:!0,class:!0});var v=L(e);for(let b=0;b<$.length;b+=1)$[b].l(v);r=Ae(v),m&&m.l(v),v.forEach(A),n=Ae(d),s=G(d,"DIV",{role:!0,id:!0,"aria-labelledby":!0,class:!0});var I=L(s);et(i.$$.fragment,I),I.forEach(A),this.h()},h(){x(e,"role","tablist"),x(e,"class","svelte-1ylgy73"),x(s,"role","tabpanel"),x(s,"id","tabpanel"),x(s,"aria-labelledby",c=`${t[3]}-tab-${t[1]}`),x(s,"class","svelte-1ylgy73")},m(d,v){Q(d,e,v);for(let I=0;I<$.length;I+=1)$[I].m(e,null);T(e,r),m&&m.m(e,null),Q(d,n,v),Q(d,s,v),tt(i,s,null),l=!0},p(d,[v]){if(v&2667){p=d[0];let b;for(b=0;b<p.length;b+=1){const j=hc(d,p,b);$[b]?$[b].p(j,v):($[b]=$c(j),$[b].c(),$[b].m(e,r))}for(;b<$.length;b+=1)$[b].d(1);$.length=p.length}d[4]?m?m.p(d,v):(m=gc(d),m.c(),m.m(e,null)):m&&(m.d(1),m=null);const I={};!a&&v&3&&(a=!0,I.value=d[0][d[1]].text,hr(()=>a=!1)),!o&&v&4&&(o=!0,I.format=d[2],hr(()=>o=!1)),i.$set(I),(!l||v&10&&c!==(c=`${d[3]}-tab-${d[1]}`))&&x(s,"aria-labelledby",c)},i(d){l||(Re(i.$$.fragment,d),l=!0)},o(d){qe(i.$$.fragment,d),l=!1},d(d){d&&A(e),Qn($,d),m&&m.d(),d&&A(n),d&&A(s),t[14](null),rt(i)}}}function Db(t,e,r){let{ns:n=""}=e,{tabs:s=[]}=e,{newTab:i=void 0}=e,{active:a=0}=e,{selected:o=0}=e,{minTabs:c=1}=e,{format:l="json"}=e,p;const $=ru();function m(S){r(1,o=S),p.focus()}function y(){r(0,s[s.length]=i(),s),r(1,o=s.length-1),p.focus()}function P(S){o>=S&&o>0&&r(1,o-=1),s.splice(S,1),r(0,s),p.focus()}const u=S=>P(S),d=S=>m(S);function v(S){jt[S?"unshift":"push"](()=>{p=S,r(7,p)})}function I(S){t.$$.not_equal(s[o].text,S)&&(s[o].text=S,r(0,s))}function b(S){l=S,r(2,l)}const j=()=>$("input",s);return t.$$set=S=>{"ns"in S&&r(3,n=S.ns),"tabs"in S&&r(0,s=S.tabs),"newTab"in S&&r(4,i=S.newTab),"active"in S&&r(5,a=S.active),"selected"in S&&r(1,o=S.selected),"minTabs"in S&&r(6,c=S.minTabs),"format"in S&&r(2,l=S.format)},[s,o,l,n,i,a,c,p,$,m,y,P,u,d,v,I,b,j]}class vc extends Rt{constructor(e){super(),qt(this,e,Db,qb,Dt,{ns:3,tabs:0,newTab:4,active:5,selected:1,minTabs:6,format:2})}}function bc(t,e,r){const n=t.slice();return n[2]=e[r],n}function Lb(t){let e;function r(i,a){return i[1].output?Bb:Mb}let n=r(t),s=n(t);return{c(){s.c(),e=Nt()},l(i){s.l(i),e=Nt()},m(i,a){s.m(i,a),Q(i,e,a)},p(i,a){n===(n=r(i))&&s?s.p(i,a):(s.d(1),s=n(i),s&&(s.c(),s.m(e.parentNode,e)))},d(i){s.d(i),i&&A(e)}}}function Mb(t){let e=t[1]+"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[1]+"")&&De(r,e)},d(n){n&&A(r)}}}function Bb(t){let e,r,n=t[1].output.errors,s=[];for(let i=0;i<n.length;i+=1)s[i]=wc(bc(t,n,i));return{c(){e=ie(`Invalid
    `),r=J("ul");for(let i=0;i<s.length;i+=1)s[i].c()},l(i){e=ae(i,`Invalid
    `),r=G(i,"UL",{});var a=L(r);for(let o=0;o<s.length;o+=1)s[o].l(a);a.forEach(A)},m(i,a){Q(i,e,a),Q(i,r,a);for(let o=0;o<s.length;o+=1)s[o].m(r,null)},p(i,a){if(a&1){n=i[1].output.errors;let o;for(o=0;o<n.length;o+=1){const c=bc(i,n,o);s[o]?s[o].p(c,a):(s[o]=wc(c),s[o].c(),s[o].m(r,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(i){i&&A(e),i&&A(r),Qn(s,i)}}}function Sc(t){let e,r,n=t[2].instanceLocation+"",s,i,a,o=t[2].absoluteKeywordLocation+"",c;return{c(){e=J("li"),r=J("code"),s=ie(n),i=ie(" fails schema constraint "),a=J("code"),c=ie(o),this.h()},l(l){e=G(l,"LI",{class:!0});var p=L(e);r=G(p,"CODE",{class:!0});var $=L(r);s=ae($,n),$.forEach(A),i=ae(p," fails schema constraint "),a=G(p,"CODE",{class:!0});var m=L(a);c=ae(m,o),m.forEach(A),p.forEach(A),this.h()},h(){x(r,"class","svelte-1sdf2dp"),x(a,"class","svelte-1sdf2dp"),x(e,"class","svelte-1sdf2dp")},m(l,p){Q(l,e,p),T(e,r),T(r,s),T(e,i),T(e,a),T(a,c)},p(l,p){p&1&&n!==(n=l[2].instanceLocation+"")&&De(s,n),p&1&&o!==(o=l[2].absoluteKeywordLocation+"")&&De(c,o)},d(l){l&&A(e)}}}function wc(t){let e=!t[2].valid&&!t[2].keyword.endsWith("#validate"),r,n=e&&Sc(t);return{c(){n&&n.c(),r=Nt()},l(s){n&&n.l(s),r=Nt()},m(s,i){n&&n.m(s,i),Q(s,r,i)},p(s,i){i&1&&(e=!s[2].valid&&!s[2].keyword.endsWith("#validate")),e?n?n.p(s,i):(n=Sc(s),n.c(),n.m(r.parentNode,r)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&A(r)}}}function Ub(t){let e=t[0]?"Valid":"",r;return{c(){r=ie(e)},l(n){r=ae(n,e)},m(n,s){Q(n,r,s)},p(n,s){s&1&&e!==(e=n[0]?"Valid":"")&&De(r,e)},d(n){n&&A(r)}}}function Fb(t){let e;return{c(){e=ie("Validating ...")},l(r){e=ae(r,"Validating ...")},m(r,n){Q(r,e,n)},p:ke,d(r){r&&A(e)}}}function Vb(t){let e,r,n={ctx:t,current:null,token:null,hasCatch:!0,pending:Fb,then:Ub,catch:Lb,value:0,error:1};return Zn(r=t[0],n),{c(){e=Nt(),n.block.c()},l(s){e=Nt(),n.block.l(s)},m(s,i){Q(s,e,i),n.block.m(s,n.anchor=i),n.mount=()=>e.parentNode,n.anchor=e},p(s,[i]){t=s,n.ctx=t,i&1&&r!==(r=t[0])&&Zn(r,n)||hl(n,t,i)},i:ke,o:ke,d(s){s&&A(e),n.block.d(s),n.token=null,n=null}}}function Kb(t,e,r){let{results:n}=e;return t.$$set=s=>{"results"in s&&r(0,n=s.results)},[n]}class cp extends Rt{constructor(e){super(),qt(this,e,Kb,Vb,Dt,{results:0})}}function zb(t){let e,r,n,s,i;const a=t[2].default,o=Mi(a,t,t[1],null);return{c(){e=J("a"),r=pt("svg"),n=pt("path"),s=_e(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=ut(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=ut(p,"path",{"fill-rule":!0,d:!0}),L(n).forEach(A),p.forEach(A),s=Ae(l),o&&o.l(l),l.forEach(A),this.h()},h(){x(n,"fill-rule","evenodd"),x(n,"d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"),x(r,"height","1.5em"),x(r,"viewBox","0 0 16 16"),x(r,"version","1.1"),x(r,"aria-hidden","true"),x(r,"class","svelte-i8toq"),x(e,"href",t[0]),x(e,"class","svelte-i8toq")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Bi(o,a,c,c[1],i?Fi(a,c[1],l,null):Ui(c[1]),null),(!i||l&1)&&x(e,"href",c[0])},i(c){i||(Re(o,c),i=!0)},o(c){qe(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function Jb(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Ec extends Rt{constructor(e){super(),qt(this,e,Jb,zb,Dt,{href:0})}}function Gb(t){let e,r,n,s,i;const a=t[2].default,o=Mi(a,t,t[1],null);return{c(){e=J("a"),r=pt("svg"),n=pt("path"),s=_e(),o&&o.c(),this.h()},l(c){e=G(c,"A",{href:!0,class:!0});var l=L(e);r=ut(l,"svg",{height:!0,viewBox:!0,version:!0,"aria-hidden":!0,class:!0});var p=L(r);n=ut(p,"path",{d:!0}),L(n).forEach(A),p.forEach(A),s=Ae(l),o&&o.l(l),l.forEach(A),this.h()},h(){x(n,"d","M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"),x(r,"height","1em"),x(r,"viewBox","0 0 780 250"),x(r,"version","1.1"),x(r,"aria-hidden","true"),x(r,"class","svelte-wj8h0n"),x(e,"href",t[0]),x(e,"class","svelte-wj8h0n")},m(c,l){Q(c,e,l),T(e,r),T(r,n),T(e,s),o&&o.m(e,null),i=!0},p(c,[l]){o&&o.p&&(!i||l&2)&&Bi(o,a,c,c[1],i?Fi(a,c[1],l,null):Ui(c[1]),null),(!i||l&1)&&x(e,"href",c[0])},i(c){i||(Re(o,c),i=!0)},o(c){qe(o,c),i=!1},d(c){c&&A(e),o&&o.d(c)}}}function Hb(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Ic extends Rt{constructor(e){super(),qt(this,e,Hb,Gb,Dt,{href:0})}}function Xb(t){let e,r,n,s,i,a,o,c,l;const p=t[2].default,$=Mi(p,t,t[1],null);return{c(){e=J("a"),r=pt("svg"),n=pt("g"),s=pt("path"),i=pt("path"),a=pt("path"),o=pt("path"),c=_e(),$&&$.c(),this.h()},l(m){e=G(m,"A",{href:!0,class:!0});var y=L(e);r=ut(y,"svg",{version:!0,viewBox:!0,height:!0,class:!0});var P=L(r);n=ut(P,"g",{transform:!0,id:!0});var u=L(n);s=ut(u,"path",{id:!0,d:!0,style:!0}),L(s).forEach(A),i=ut(u,"path",{id:!0,d:!0,style:!0}),L(i).forEach(A),a=ut(u,"path",{id:!0,d:!0,style:!0}),L(a).forEach(A),o=ut(u,"path",{id:!0,d:!0,style:!0}),L(o).forEach(A),u.forEach(A),P.forEach(A),c=Ae(y),$&&$.l(y),y.forEach(A),this.h()},h(){x(s,"id","path4544"),x(s,"d","m 122.99401,114.18985 c -4.32897,-0.9404 -7.58044,-3.47848 -8.71251,-6.80095 -0.78921,-2.31618 -0.67682,-6.07238 0.33363,-11.150598 0.48507,-2.437836 0.88169,-5.347843 0.88139,-6.466688 -9.8e-4,-3.718098 -1.71106,-5.735418 -5.1001,-6.016462 l -1.9549,-0.162116 v -2.392655 -2.392657 l 1.85208,-0.250855 c 2.70243,-0.366031 3.74441,-1.02838 4.57629,-2.908984 0.61121,-1.381726 0.68884,-2.068648 0.50552,-4.472869 -0.11913,-1.562244 -0.53527,-4.348568 -0.92477,-6.191832 -0.98954,-4.682868 -0.94822,-8.485471 0.11707,-10.773163 1.56862,-3.368589 5.43705,-5.854553 9.93248,-6.382903 l 1.93299,-0.227185 v 2.518015 2.518015 h -1.29973 c -1.77186,0 -4.2497,1.262413 -4.8835,2.488054 -0.60797,1.175674 -0.65405,2.864146 -0.15834,5.802223 0.78343,4.643508 1.04707,9.098344 0.67592,11.421636 -0.42464,2.658142 -1.97477,5.796328 -3.6791,7.448236 l -1.18012,1.143813 1.61497,1.982752 c 1.99051,2.443801 2.76458,4.148744 3.24284,7.142561 0.37835,2.368341 0.0844,7.282673 -0.67072,11.213982 -1.05359,5.48514 0.1623,7.65141 4.66209,8.30613 l 1.67569,0.24382 v 2.44782 c 0,2.79211 0.17086,2.69708 -3.43917,1.91286 z"),_n(s,"fill","stroke-width:0.35277775"),x(i,"id","path4546"),x(i,"d","m 152.2304,112.24932 v -2.42987 l 2.04969,-0.42336 c 2.26276,-0.46736 4.054,-1.8634 4.45842,-3.47475 0.1274,-0.50758 -0.11267,-3.16398 -0.53347,-5.90311 -1.37183,-8.929552 -0.6114,-13.537042 2.85482,-17.297452 l 1.48237,-1.60818 -1.1108,-1.26512 c -3.97855,-4.53132 -4.66885,-8.552208 -3.15364,-18.369547 0.76342,-4.946305 0.76409,-4.994322 0.087,-6.173611 -0.79713,-1.388278 -3.28385,-2.776033 -4.97438,-2.776033 h -1.15997 v -2.469445 c 0,-2.811057 -0.0583,-2.773846 3.24583,-2.072788 3.9645,0.841179 6.80448,2.853272 8.27787,5.864775 0.84544,1.728026 0.97275,2.400136 0.94911,5.010889 -0.015,1.658349 -0.35758,4.682054 -0.76125,6.719346 -1.49867,7.563594 -1.3651,9.576204 0.7654,11.532814 0.98915,0.90842 1.64012,1.17274 3.37032,1.36849 l 2.14439,0.24261 v 2.42387 2.42388 l -1.6757,7.1e-4 c -2.1517,7e-4 -3.9323,0.90924 -4.83869,2.46889 -0.95194,1.63803 -0.89239,5.20675 0.17364,10.40695 0.90648,4.421902 1.05253,8.458452 0.3882,10.728752 -0.70059,2.39406 -3.81995,5.29609 -6.74745,6.27718 -1.26118,0.42266 -2.96775,0.87096 -3.79236,0.99623 l -1.49931,0.22775 z"),_n(i,"stroke-width","0.35277778"),x(a,"id","path4548"),x(a,"d","m 131.74239,108.26592 c -1.02163,-1.2988 -0.87294,-3.53652 0.38087,-5.73185 0.92776,-1.62446 4.80862,-6.948549 7.61066,-10.440949 l 1.13094,-1.40958 -1.80213,-5.22523 c -2.02147,-5.86123 -2.0098,-5.97467 0.65581,-6.37225 l 1.46834,-0.219 1.64076,3.3506 c 0.90242,1.84283 1.76982,3.35061 1.92755,3.35061 0.15774,0 1.77489,-1.75542 3.59368,-3.90092 3.15918,-3.72667 3.35688,-3.89165 4.42591,-3.69334 0.64552,0.11974 1.21858,0.0465 1.35432,-0.17316 0.31818,-0.51481 1.23083,0.24704 1.23083,1.02746 0,0.32009 -0.45438,1.13409 -1.00972,1.80888 -2.26771,2.75549 -7.10417,9.27155 -7.10417,9.5713 0,0.17685 0.97502,2.45302 2.16671,5.05816 l 2.1667,4.736609 -0.65823,0.98459 c -0.36203,0.54152 -0.66236,1.12603 -0.6674,1.29891 -0.005,0.17288 -0.27769,0.48371 -0.60588,0.69073 -0.83174,0.52464 -1.44656,-0.11541 -3.9894,-4.153119 -1.16417,-1.84856 -2.23163,-3.36491 -2.37215,-3.36967 -0.31309,-0.0106 -3.7911,5.131969 -6.47955,9.580639 -2.37093,3.92324 -1.93885,3.4204 -3.26614,3.80106 -0.95533,0.27398 -1.19348,0.19843 -1.79831,-0.57048 z"),_n(a,"stroke-width","0.35277775"),x(o,"id","path4550"),x(o,"d","m 131.98567,83.677091 c -2.15148,-3.8472 -6.0183,-9.42829 -7.57842,-10.93815 -0.79252,-0.76698 -1.44094,-1.57494 -1.44094,-1.79546 0,-0.6016 1.61695,-1.21975 3.19058,-1.21975 1.69822,0 3.49597,1.47777 5.0997,4.19203 0.58208,0.98515 1.15641,1.79434 1.27629,1.79819 0.11988,0.004 0.80873,-1.65116 1.53078,-3.67779 1.5464,-4.34039 5.62351,-12.777999 7.22453,-14.951229 1.3726,-1.86316 3.42936,-2.865165 5.90274,-2.875676 3.23375,-0.01374 3.24268,0.130067 0.20474,3.296663 -4.63599,4.832327 -6.76321,8.809632 -11.25155,21.037252 -1.24637,3.39549 -2.39032,6.47895 -2.54212,6.85214 -0.23022,0.56597 -0.49833,0.28096 -1.61633,-1.71822 z"),_n(o,"stroke-width","0.35277775"),x(n,"transform","translate(-104.22785,-45.507923)"),x(n,"id","layer1"),x(r,"version","1.1"),x(r,"viewBox","0 0 70.423268 70.42326"),x(r,"height","1.25em"),x(r,"class","svelte-27u907"),x(e,"href",t[0]),x(e,"class","svelte-27u907")},m(m,y){Q(m,e,y),T(e,r),T(r,n),T(n,s),T(n,i),T(n,a),T(n,o),T(e,c),$&&$.m(e,null),l=!0},p(m,[y]){$&&$.p&&(!l||y&2)&&Bi($,p,m,m[1],l?Fi(p,m[1],y,null):Ui(m[1]),null),(!l||y&1)&&x(e,"href",m[0])},i(m){l||(Re($,m),l=!0)},o(m){qe($,m),l=!1},d(m){m&&A(e),$&&$.d(m)}}}function Yb(t,e,r){let{$$slots:n={},$$scope:s}=e,{href:i=""}=e;return t.$$set=a=>{"href"in a&&r(0,i=a.href),"$$scope"in a&&r(1,s=a.$$scope)},[i,s,n]}class Wb extends Rt{constructor(e){super(),qt(this,e,Yb,Xb,Dt,{href:0})}}function Qb(t){let e;return{c(){e=ie("hyperjump-io/json-schema.hyperjump.io")},l(r){e=ae(r,"hyperjump-io/json-schema.hyperjump.io")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function Zb(t){let e;return{c(){e=ie("hyperjump-io/json-schema-validator")},l(r){e=ae(r,"hyperjump-io/json-schema-validator")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function e1(t){let e;return{c(){e=ie("@hyperjump/json-schema")},l(r){e=ae(r,"@hyperjump/json-schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function t1(t){let e;return{c(){e=ie("@hyperjump/json-schema-core")},l(r){e=ae(r,"@hyperjump/json-schema-core")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function r1(t){let e;return{c(){e=ie("JSON Schema")},l(r){e=ae(r,"JSON Schema")},m(r,n){Q(r,e,n)},d(r){r&&A(e)}}}function n1(t){let e,r,n,s,i,a,o,c,l,p,$,m,y,P,u,d,v;return s=new Ec({props:{href:"https://github.com/hyperjump-io/json-schema.hyperjump.io",$$slots:{default:[Qb]},$$scope:{ctx:t}}}),o=new Ec({props:{href:"https://github.com/hyperjump-io/json-schema-validator",$$slots:{default:[Zb]},$$scope:{ctx:t}}}),p=new Ic({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema",$$slots:{default:[e1]},$$scope:{ctx:t}}}),y=new Ic({props:{href:"https://www.npmjs.com/package/@hyperjump/json-schema-core",$$slots:{default:[t1]},$$scope:{ctx:t}}}),d=new Wb({props:{href:"https://json-schema.org",$$slots:{default:[r1]},$$scope:{ctx:t}}}),{c(){e=J("footer"),r=J("ul"),n=J("li"),Ze(s.$$.fragment),i=_e(),a=J("li"),Ze(o.$$.fragment),c=_e(),l=J("li"),Ze(p.$$.fragment),$=_e(),m=J("li"),Ze(y.$$.fragment),P=_e(),u=J("li"),Ze(d.$$.fragment),this.h()},l(I){e=G(I,"FOOTER",{class:!0});var b=L(e);r=G(b,"UL",{class:!0});var j=L(r);n=G(j,"LI",{class:!0});var S=L(n);et(s.$$.fragment,S),S.forEach(A),i=Ae(j),a=G(j,"LI",{class:!0});var _=L(a);et(o.$$.fragment,_),_.forEach(A),c=Ae(j),l=G(j,"LI",{class:!0});var K=L(l);et(p.$$.fragment,K),K.forEach(A),$=Ae(j),m=G(j,"LI",{class:!0});var Z=L(m);et(y.$$.fragment,Z),Z.forEach(A),P=Ae(j),u=G(j,"LI",{class:!0});var w=L(u);et(d.$$.fragment,w),w.forEach(A),j.forEach(A),b.forEach(A),this.h()},h(){x(n,"class","svelte-17tbtsq"),x(a,"class","svelte-17tbtsq"),x(l,"class","svelte-17tbtsq"),x(m,"class","svelte-17tbtsq"),x(u,"class","svelte-17tbtsq"),x(r,"class","links svelte-17tbtsq"),x(e,"class","svelte-17tbtsq")},m(I,b){Q(I,e,b),T(e,r),T(r,n),tt(s,n,null),T(r,i),T(r,a),tt(o,a,null),T(r,c),T(r,l),tt(p,l,null),T(r,$),T(r,m),tt(y,m,null),T(r,P),T(r,u),tt(d,u,null),v=!0},p(I,[b]){const j={};b&1&&(j.$$scope={dirty:b,ctx:I}),s.$set(j);const S={};b&1&&(S.$$scope={dirty:b,ctx:I}),o.$set(S);const _={};b&1&&(_.$$scope={dirty:b,ctx:I}),p.$set(_);const K={};b&1&&(K.$$scope={dirty:b,ctx:I}),y.$set(K);const Z={};b&1&&(Z.$$scope={dirty:b,ctx:I}),d.$set(Z)},i(I){v||(Re(s.$$.fragment,I),Re(o.$$.fragment,I),Re(p.$$.fragment,I),Re(y.$$.fragment,I),Re(d.$$.fragment,I),v=!0)},o(I){qe(s.$$.fragment,I),qe(o.$$.fragment,I),qe(p.$$.fragment,I),qe(y.$$.fragment,I),qe(d.$$.fragment,I),v=!1},d(I){I&&A(e),rt(s),rt(o),rt(p),rt(y),rt(d)}}}class s1 extends Rt{constructor(e){super(),qt(this,e,null,n1,Dt,{})}}var i1=yd(nb),a1=`{
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
}`;const{Schema:lp}=k,fp=a1;lp.add(JSON.parse(fp),"https://spec.openapis.org/oas/3.0/schema");lp.add(JSON.parse(fp),"https://spec.openapis.org/oas/3.0/schema/latest");var o1=`{
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
}`,c1=`{
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
}`,pp=`{
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
}`,up=`{
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
}`;const{Core:l1,Keywords:Dn,Schema:gt}=k,f1=o1,p1=c1,Na=pp,Ca=pp,u1=up,d1=up;gt.add(JSON.parse(Na),"https://spec.openapis.org/oas/3.1/schema");gt.add(JSON.parse(Na),"https://spec.openapis.org/oas/3.1/schema/latest");gt.add(JSON.parse(Ca),"https://spec.openapis.org/oas/3.1/schema-base");gt.add(JSON.parse(Ca),"https://spec.openapis.org/oas/3.1/schema-base/latest");gt.add(JSON.parse(Na),"https://spec.openapis.org/oas/3.1/schema/2022-02-27");gt.add(JSON.parse(Ca),"https://spec.openapis.org/oas/3.1/schema-base/2022-02-27");gt.add(JSON.parse(u1),"https://spec.openapis.org/oas/3.1/schema/2021-09-28");gt.add(JSON.parse(d1),"https://spec.openapis.org/oas/3.1/schema-base/2021-09-28");gt.add(JSON.parse(f1));gt.add(JSON.parse(p1));l1.defineVocabulary("https://spec.openapis.org/oas/3.1/vocab/extensions",{example:Dn.metaData,discriminator:Dn.metaData,externalDocs:Dn.metaData,xml:Dn.metaData});const m1=i1;var ze=m1;ze.add;ze.get;ze.validate;ze.compile;ze.interpret;ze.setMetaOutputFormat;ze.setShouldMetaValidate;ze.FLAG;ze.BASIC;ze.DETAILED;ze.VERBOSE;ze.Keywords;ze.InvalidSchemaError;const{Core:dp,Schema:Hr,Instance:ni}=k,h1=async(t,e,r)=>{const n=await Hr.step("items",r),s=Hr.typeOf(n,"array")?Hr.length(n):Number.MAX_SAFE_INTEGER;return Hr.typeOf(t,"boolean")?[s,Hr.value(t)]:[s,await dp.compileSchema(t,e)]},y1=([t,e],r,n,s)=>ni.typeOf(r,"array")?typeof e=="string"?ni.every((i,a)=>a<t||dp.interpretSchema(e,i,n,s),r):ni.every((i,a)=>a<t?!0:e,r):!0;var $1={compile:h1,interpret:y1};const{Core:mp,Schema:si,Instance:Ci}=k,g1=async(t,e,r)=>{const n=await si.step("items",r);return[si.typeOf(n,"array")?si.length(n):Number.MAX_SAFE_INTEGER,await mp.compileSchema(t,e)]},hp=([t,e],r,n,s)=>Ci.typeOf(r,"array")?Ci.every((i,a)=>a<t||mp.interpretSchema(e,i,n,s),r):!0,v1=(t,e,r,n)=>hp(t,e,r,n)&&new Set(Ci.map((s,i)=>i,e));var b1={compile:g1,interpret:hp,collectEvaluatedItems:v1};const{Core:yp,Schema:kt,Instance:Oc}=k,S1=async(t,e,r)=>{const n=await kt.step("properties",r),s=kt.typeOf(n,"object")?kt.keys(n):[],i=await kt.step("patternProperties",r),a=kt.typeOf(i,"object")?kt.keys(i).map(o=>new RegExp(o)):[];return kt.typeOf(t,"boolean")?[s,a,kt.value(t)]:[s,a,await yp.compileSchema(t,e)]},w1=([t,e,r],n,s,i)=>{if(!Oc.typeOf(n,"object"))return!0;const a=Oc.entries(n).filter(([o])=>!t.includes(o)&&!e.some(c=>c.test(o)));return typeof r=="string"?a.every(([,o])=>yp.interpretSchema(r,o,s,i)):a.length===0||r};var E1={compile:S1,interpret:w1};const{Core:$p,Schema:pr,Instance:Pc}=k,I1=async(t,e,r)=>{const n=await pr.step("properties",r),s=pr.typeOf(n,"object")?pr.keys(n):[],i=await pr.step("patternProperties",r),a=pr.typeOf(i,"object")?pr.keys(i).map(o=>new RegExp(o)):[];return[s,a,await $p.compileSchema(t,e)]},gp=([t,e,r],n,s,i)=>Pc.typeOf(n,"object")?Pc.entries(n).filter(([a])=>!t.includes(a)&&!e.some(o=>o.test(a))).every(([,a])=>$p.interpretSchema(r,a,s,i)):!0,O1=(t,e,r,n)=>gp(t,e,r,n)&&[new RegExp("")];var P1={compile:I1,interpret:gp,collectEvaluatedProperties:O1};const{Core:_s,Schema:k1}=k,kc=Oe,j1=(t,e)=>kc.pipeline([k1.map(async r=>_s.compileSchema(await r,e)),kc.all],t),_1=(t,e,r,n)=>t.every(s=>_s.interpretSchema(s,e,r,n)),A1=(t,e,r,n)=>t.reduce((s,i)=>{const a=s&&_s.collectEvaluatedProperties(i,e,r,n);return a!==!1&&[...s,...a]},[]),x1=(t,e,r,n)=>t.reduce((s,i)=>{const a=s!==!1&&_s.collectEvaluatedItems(i,e,r,n);return a!==!1&&new Set([...s,...a])},new Set);var N1={compile:j1,interpret:_1,collectEvaluatedProperties:A1,collectEvaluatedItems:x1};const{Core:As,Schema:C1}=k,jc=Oe,T1=(t,e)=>jc.pipeline([C1.map(async r=>As.compileSchema(await r,e)),jc.all],t),R1=(t,e,r,n)=>t.filter(i=>As.interpretSchema(i,e,r,n)).length>0,q1=(t,e,r,n)=>t.reduce((s,i)=>{const a=As.collectEvaluatedProperties(i,e,r,n);return a!==!1?[...s||[],...a]:s},!1),D1=(t,e,r,n)=>t.reduce((s,i)=>{const a=As.collectEvaluatedItems(i,e,r,n);return a!==!1?new Set([...s||[],...a]):s},!1);var L1={compile:T1,interpret:R1,collectEvaluatedProperties:q1,collectEvaluatedItems:D1};const{Schema:M1,Instance:B1}=k,vp=Tr,U1=t=>vp(M1.value(t)),F1=(t,e)=>vp(B1.value(e))===t;var V1={compile:U1,interpret:F1};const{Core:bp,Instance:_c}=k,K1=(t,e)=>bp.compileSchema(t,e),z1=(t,e,r,n)=>!_c.typeOf(e,"array")||_c.some(s=>bp.interpretSchema(t,s,r,n),e);var J1={compile:K1,interpret:z1};const{Core:Ta,Schema:ur,Instance:Ti}=k,G1=async(t,e,r)=>{const n=await Ta.compileSchema(t,e),s=await ur.step("minContains",r),i=ur.typeOf(s,"number")?ur.value(s):1,a=await ur.step("maxContains",r),o=ur.typeOf(a,"number")?ur.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Sp=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Ti.typeOf(n,"array"))return!0;const a=Ti.reduce((o,c)=>Ta.interpretSchema(t,c,s,i)?o+1:o,0,n);return a>=e&&a<=r},H1=(t,e,r,n)=>Sp(t,e,r,n)&&Ti.reduce((s,i,a)=>Ta.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e);var X1={compile:G1,interpret:Sp,collectEvaluatedItems:H1};const{Core:xs,Schema:dr,Instance:Vt}=k,Y1=async(t,e,r)=>{const n=await xs.compileSchema(t,e),s=await dr.step("minContains",r),i=dr.typeOf(s,"number")?dr.value(s):1,a=await dr.step("maxContains",r),o=dr.typeOf(a,"number")?dr.value(a):Number.MAX_SAFE_INTEGER;return{contains:n,minContains:i,maxContains:o}},Ra=({contains:t,minContains:e,maxContains:r},n,s,i)=>{if(!Vt.typeOf(n,"array")&&!Vt.typeOf(n,"object"))return!0;const a=Vt.entries(n).reduce((o,[,c])=>xs.interpretSchema(t,c,s,i)?o+1:o,0);return a>=e&&a<=r},W1=(t,e,r,n)=>Ra(t,e,r,n)&&Vt.typeOf(e,"array")&&Vt.reduce((s,i,a)=>xs.interpretSchema(t.contains,i,r,n)?s.add(a):s,new Set,e),Q1=(t,e,r,n)=>Ra(t,e,r,n)&&Vt.typeOf(e,"object")&&Vt.entries(e).reduce((s,[i,a])=>(xs.interpretSchema(t.contains,a,r,n)&&s.push(i),s),[],e);var Z1={compile:Y1,interpret:Ra,collectEvaluatedItems:W1,collectEvaluatedProperties:Q1};const{Core:e0,Schema:t0}=k,ii=Oe,r0=async(t,e)=>{await ii.pipeline([t0.entries,ii.map(([,r])=>e0.compileSchema(r,e)),ii.all],t)},n0=()=>!0;var s0={compile:r0,interpret:n0};const{Core:wp,Schema:ai,Instance:Ac}=k,oi=Oe,i0=(t,e)=>oi.pipeline([ai.entries,oi.map(async([r,n])=>[r,ai.typeOf(n,"array")?ai.value(n):await wp.compileSchema(n,e)]),oi.all],t),a0=(t,e,r,n)=>{const s=Ac.value(e);return!Ac.typeOf(e,"object")||t.every(([i,a])=>i in s?Array.isArray(a)?a.every(o=>o in s):wp.interpretSchema(a,e,r,n):!0)};var o0={compile:i0,interpret:a0};const{Schema:xc,Instance:Nc}=k,ci=Oe,c0=t=>ci.pipeline([xc.entries,ci.map(([e,r])=>[e,xc.value(r)]),ci.all],t),l0=(t,e)=>{const r=Nc.value(e);return!Nc.typeOf(e,"object")||t.every(([n,s])=>!(n in r)||s.every(i=>i in r))};var f0={compile:c0,interpret:l0};const{Core:qa,Schema:p0,Instance:Ri}=k,li=Oe,u0=(t,e)=>li.pipeline([p0.entries,li.map(async([r,n])=>[r,await qa.compileSchema(n,e)]),li.all],t),d0=(t,e,r,n)=>{const s=Ri.value(e);return!Ri.typeOf(e,"object")||t.every(([i,a])=>!(i in s)||qa.interpretSchema(a,e,r,n))},m0=(t,e,r,n)=>t.reduce((s,[i,a])=>{if(!s||!Ri.has(i,e))return s;const o=qa.collectEvaluatedProperties(a,e,r,n);return o!==!1&&s.concat(o)},[]);var h0={compile:u0,interpret:d0,collectEvaluatedProperties:m0};const y0=t=>typeof t=="object"&&!Array.isArray(t)&&t!==null,$0=t=>t.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),g0=t=>{const e=t.indexOf("#"),r=e===-1?t.length:e,n=t.slice(0,r),s=t.slice(r+1);return[decodeURI(n),decodeURI(s)]};var Da={isObject:y0,escapeRegExp:$0,splitUrl:g0};const{Core:ln,Schema:Xn}=k,{splitUrl:v0}=Da,b0=async(t,e)=>{const[,r]=v0(Xn.value(t)),n=await Xn.get(Xn.value(t),t);return await ln.compileSchema(n,e),[n.id,r]},S0=([t,e],r,n,s)=>{if(e in n.metaData[t].dynamicAnchors)return ln.interpretSchema(s[e],r,n,s);{const i=Xn.getAnchorPointer(n.metaData[t],e);return ln.interpretSchema(`${t}#${encodeURI(i)}`,r,n,s)}},w0=ln.collectEvaluatedProperties,E0=ln.collectEvaluatedItems;var I0={compile:b0,interpret:S0,collectEvaluatedProperties:w0,collectEvaluatedItems:E0};const{Core:Ns,Schema:Cc}=k,{splitUrl:O0}=Da,P0=async(t,e)=>{const[r,n]=O0(Cc.value(t)),s=await Cc.get(r,t);return await Ns.compileSchema(s,e),n},k0=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return Ns.interpretSchema(n[t],e,r,n)},j0=Ns.collectEvaluatedProperties,_0=Ns.collectEvaluatedItems;var A0={compile:P0,interpret:k0,collectEvaluatedProperties:j0,collectEvaluatedItems:_0};const{Core:La,Schema:x0}=k,N0=x0.value,C0=(t,e,r,n)=>{if(!(t in n))throw Error(`No dynamic anchor found for "${t}"`);return La.interpretSchema(n[t],e,r,n)},T0=La.collectEvaluatedProperties,R0=La.collectEvaluatedItems;var q0={compile:N0,interpret:C0,collectEvaluatedProperties:T0,collectEvaluatedItems:R0};const{Schema:D0,Instance:L0}=k,Ep=Tr,M0=t=>D0.value(t).map(Ep),B0=(t,e)=>t.some(r=>Ep(L0.value(e))===r);var U0={compile:M0,interpret:B0};const{Schema:F0,Instance:Tc}=k,V0=async t=>F0.value(t),K0=(t,e)=>!Tc.typeOf(e,"number")||Tc.value(e)<t;var z0={compile:V0,interpret:K0};const{Schema:J0,Instance:Rc}=k,G0=async t=>J0.value(t),H0=(t,e)=>!Rc.typeOf(e,"number")||Rc.value(e)>t;var X0={compile:G0,interpret:H0};const{Core:Cs}=k,Y0=(t,e)=>Cs.compileSchema(t,e),W0=(t,e,r,n)=>(Cs.interpretSchema(t,e,r,n),!0),Q0=(t,e,r,n)=>Cs.collectEvaluatedProperties(t,e,r,n)||[],Z0=(t,e,r,n)=>Cs.collectEvaluatedItems(t,e,r,n)||new Set;var eS={compile:Y0,interpret:W0,collectEvaluatedProperties:Q0,collectEvaluatedItems:Z0};const{Core:Or,Schema:qc}=k,tS=async(t,e,r)=>{if(qc.has("if",r)){const n=await qc.step("if",r);return[await Or.compileSchema(n,e),await Or.compileSchema(t,e)]}else return[]},rS=([t,e],r,n,s)=>t===void 0||!Ma(t,r,n,s)||Or.interpretSchema(e,r,n,s),Ma=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Or.getKeyword(i).interpret(a,e,r,n))},nS=([t,e],r,n,s)=>t===void 0||!Ma(t,r,n,s)?[]:Or.collectEvaluatedProperties(e,r,n,s),sS=([t,e],r,n,s)=>t===void 0||!Ma(t,r,n,s)?new Set:Or.collectEvaluatedItems(e,r,n,s);var iS={compile:tS,interpret:rS,collectEvaluatedProperties:nS,collectEvaluatedItems:sS};const{Core:Pr,Schema:Dc}=k,aS=async(t,e,r)=>{if(Dc.has("if",r)){const n=await Dc.step("if",r);return[await Pr.compileSchema(n,e),await Pr.compileSchema(t,e)]}else return[]},oS=([t,e],r,n,s)=>t===void 0||Ba(t,r,n,s)||Pr.interpretSchema(e,r,n,s),Ba=(t,e,r,n)=>{const s=r[t][2];return typeof s=="boolean"?s:s.every(([i,,a])=>Pr.getKeyword(i).interpret(a,e,r,n))},cS=([t,e],r,n,s)=>t===void 0||Ba(t,r,n,s)?[]:Pr.collectEvaluatedProperties(e,r,n,s),lS=([t,e],r,n,s)=>t===void 0||Ba(t,r,n,s)?new Set:Pr.collectEvaluatedItems(e,r,n,s);var fS={compile:aS,interpret:oS,collectEvaluatedProperties:cS,collectEvaluatedItems:lS};const{Core:os,Schema:Lc,Instance:Yn}=k,pS=async(t,e)=>{if(Lc.typeOf(t,"array")){const r=await Lc.map(n=>os.compileSchema(n,e),t);return Promise.all(r)}else return os.compileSchema(t,e)},Ip=(t,e,r,n)=>Yn.typeOf(e,"array")?typeof t=="string"?Yn.every(s=>os.interpretSchema(t,s,r,n),e):Yn.every((s,i)=>!(i in t)||os.interpretSchema(t[i],s,r,n),e):!0,uS=(t,e,r,n)=>Ip(t,e,r,n)&&(typeof t=="string"?new Set(Yn.map((s,i)=>i,e)):new Set(t.map((s,i)=>i)));var dS={compile:pS,interpret:Ip,collectEvaluatedItems:uS};const{Core:Op,Schema:fi,Instance:qi}=k,mS=async(t,e,r)=>{const n=await fi.step("prefixItems",r);return[fi.typeOf(n,"array")?fi.length(n):0,await Op.compileSchema(t,e)]},Pp=([t,e],r,n,s)=>qi.typeOf(r,"array")?qi.every((i,a)=>a<t||Op.interpretSchema(e,i,n,s),r):!0,hS=(t,e,r,n)=>Pp(t,e,r,n)&&new Set(qi.map((s,i)=>i,e));var yS={compile:mS,interpret:Pp,collectEvaluatedItems:hS};const{Schema:$S,Instance:Mc}=k,gS=t=>$S.value(t),vS=(t,e)=>!Mc.typeOf(e,"array")||Mc.length(e)<=t;var bS={compile:gS,interpret:vS};const{Schema:SS,Instance:Bc}=k,wS=t=>SS.value(t),ES=(t,e)=>!Bc.typeOf(e,"string")||Bc.length(e)<=t;var IS={compile:wS,interpret:ES};const{Schema:OS,Instance:Uc}=k,PS=t=>OS.value(t),kS=(t,e)=>!Uc.typeOf(e,"string")||[...Uc.value(e)].length<=t;var jS={compile:PS,interpret:kS};const{Schema:_S,Instance:Fc}=k,AS=t=>_S.value(t),xS=(t,e)=>!Fc.typeOf(e,"object")||Fc.keys(e).length<=t;var NS={compile:AS,interpret:xS};const{Schema:pi,Instance:Vc}=k,CS=async(t,e,r)=>{const n=await pi.step("exclusiveMaximum",r),s=pi.value(n);return[pi.value(t),s]},TS=([t,e],r)=>{if(!Vc.typeOf(r,"number"))return!0;const n=Vc.value(r);return e?n<t:n<=t};var RS={compile:CS,interpret:TS};const{Schema:qS,Instance:Kc}=k,DS=async t=>qS.value(t),LS=(t,e)=>!Kc.typeOf(e,"number")||Kc.value(e)<=t;var MS={compile:DS,interpret:LS};const{Schema:BS,Instance:zc}=k,US=t=>BS.value(t),FS=(t,e)=>!zc.typeOf(e,"array")||zc.length(e)>=t;var VS={compile:US,interpret:FS};const{Schema:KS,Instance:Jc}=k,zS=t=>KS.value(t),JS=(t,e)=>!Jc.typeOf(e,"string")||Jc.length(e)>=t;var GS={compile:zS,interpret:JS};const{Schema:HS,Instance:Gc}=k,XS=t=>HS.value(t),YS=(t,e)=>!Gc.typeOf(e,"string")||[...Gc.value(e)].length>=t;var WS={compile:XS,interpret:YS};const{Schema:QS,Instance:Hc}=k,ZS=t=>QS.value(t),ew=(t,e)=>!Hc.typeOf(e,"object")||Hc.keys(e).length>=t;var tw={compile:ZS,interpret:ew};const{Schema:ui,Instance:Xc}=k,rw=async(t,e,r)=>{const n=await ui.step("exclusiveMinimum",r),s=ui.value(n);return[ui.value(t),s]},nw=([t,e],r)=>{if(!Xc.typeOf(r,"number"))return!0;const n=Xc.value(r);return e?n>t:n>=t};var sw={compile:rw,interpret:nw};const{Schema:iw,Instance:Yc}=k,aw=async t=>iw.value(t),ow=(t,e)=>!Yc.typeOf(e,"number")||Yc.value(e)>=t;var cw={compile:aw,interpret:ow};const{Schema:lw,Instance:Wc}=k,fw=t=>lw.value(t),pw=(t,e)=>{if(!Wc.typeOf(e,"number"))return!0;const r=Wc.value(e)%t;return Qc(0,r)||Qc(t,r)},Qc=(t,e)=>Math.abs(t-e)<11920929e-14;var uw={compile:fw,interpret:pw};const{Core:kp}=k,dw=kp.compileSchema,mw=(t,e,r,n)=>!kp.interpretSchema(t,e,r,n);var hw={compile:dw,interpret:mw};const{Core:Ts,Schema:yw}=k,$w=async(t,e)=>{const r=await yw.map(n=>Ts.compileSchema(n,e),t);return Promise.all(r)},gw=(t,e,r,n)=>{let s=0;for(const i of t)if(Ts.interpretSchema(i,e,r,n)&&s++,s>1)break;return s===1},vw=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Ts.collectEvaluatedProperties(a,e,r,n);return o?s++===0&&o:i},!1)},bw=(t,e,r,n)=>{let s=0;return t.reduce((i,a)=>{if(s>1)return!1;const o=Ts.collectEvaluatedItems(a,e,r,n);return o?s++===0&&o:i},!1)};var Sw={compile:$w,interpret:gw,collectEvaluatedProperties:vw,collectEvaluatedItems:bw};const{Schema:Ln,Instance:Zc}=k,ww=async(t,e,r)=>{const n=await Ln.value(t),s=await Ln.step("properties",r),i=Ln.typeOf(s,"object")?Ln.keys(s):[],a=new Set(i);return n.forEach(o=>i.remove(o)),[...a]},Ew=(t,e)=>!Zc.typeOf(e,"object")||t.every(r=>Zc.value(e).hasOwnProperty(r));var Iw={compile:ww,interpret:Ew};const{Schema:Ow,Instance:el}=k,Pw=t=>new RegExp(Ow.value(t),"u"),kw=(t,e)=>!el.typeOf(e,"string")||t.test(el.value(e));var jw={compile:Pw,interpret:kw};const{Core:jp,Schema:_w,Instance:tl}=k,di=Oe,Aw=(t,e)=>di.pipeline([_w.entries,di.map(async([r,n])=>[new RegExp(r,"u"),await jp.compileSchema(n,e)]),di.all],t),_p=(t,e,r,n)=>!tl.typeOf(e,"object")||t.every(([s,i])=>tl.entries(e).filter(([a])=>s.test(a)).every(([,a])=>jp.interpretSchema(i,a,r,n))),xw=(t,e,r,n)=>_p(t,e,r,n)&&t.map(([s])=>s);var Nw={compile:Aw,interpret:_p,collectEvaluatedProperties:xw};const{Core:Ap,Schema:Cw,Instance:rl}=k,nl=Oe,{escapeRegExp:Tw}=Da,Rw=(t,e)=>nl.pipeline([Cw.entries,nl.reduce(async(r,[n,s])=>(r[n]=await Ap.compileSchema(s,e),r),Object.create(null))],t),xp=(t,e,r,n)=>!rl.typeOf(e,"object")||rl.entries(e).filter(([s])=>s in t).every(([s,i])=>Ap.interpretSchema(t[s],i,r,n)),qw=(t,e,r,n)=>xp(t,e,r,n)&&Object.keys(t).map(s=>new RegExp(`^${Tw(s)}$`));var Dw={compile:Rw,interpret:xp,collectEvaluatedProperties:qw};const{Core:Np,Schema:sl,Instance:mi}=k,Mn=Oe,Lw=async(t,e)=>Mn.pipeline([sl.entries,Mn.reduce(async(r,[n,s])=>(r[n]=await Mn.pipeline([sl.entries,Mn.reduce(async(i,[a,o])=>(i[a]=await Np.compileSchema(o,e),i),{})],s),r),{})],t),Mw=(t,e,r,n)=>!mi.typeOf(e,"object")||Object.entries(t).every(([s,i])=>!mi.has(s,e)||Np.interpretSchema(i[mi.value(e)[s]],e,r,n));var Bw={compile:Lw,interpret:Mw};const{Core:Cp,Instance:hi}=k,Uw=(t,e)=>Cp.compileSchema(t,e),Fw=(t,e,r,n)=>!hi.typeOf(e,"object")||hi.keys(e).every(s=>Cp.interpretSchema(t,hi.cons(s),r,n));var Vw={compile:Uw,interpret:Fw};const{Core:Rs,Schema:il}=k,Kw=async(t,e)=>{const r=await il.get(il.value(t),t);return Rs.compileSchema(r,e)},zw=Rs.interpretSchema,Jw=Rs.collectEvaluatedProperties,Gw=Rs.collectEvaluatedItems;var Hw={compile:Kw,interpret:zw,collectEvaluatedProperties:Jw,collectEvaluatedItems:Gw};const{Schema:Xw,Instance:al}=k,Yw=t=>Xw.value(t),Ww=(t,e)=>!al.typeOf(e,"object")||t.every(r=>Object.prototype.hasOwnProperty.call(al.value(e),r));var Qw={compile:Yw,interpret:Ww};const{Core:Tp,Schema:Zw,Instance:ol}=k,cl=Oe,e2=(t,e)=>cl.pipeline([Zw.map(r=>Tp.compileSchema(r,e)),cl.all],t),Rp=(t,e,r,n)=>ol.typeOf(e,"array")?ol.every((s,i)=>!(i in t)||Tp.interpretSchema(t[i],s,r,n),e):!0,t2=(t,e,r,n)=>Rp(t,e,r,n)&&new Set(t.map((s,i)=>i));var r2={compile:e2,interpret:Rp,collectEvaluatedItems:t2};const{Schema:n2,Instance:ll}=k,s2=t=>n2.value(t),i2=(t,e)=>typeof t=="string"?ll.typeOf(e,t):t.some(ll.typeOf(e));var a2={compile:s2,interpret:i2};const{Core:Di,Schema:o2,Instance:Wn}=k,c2=async(t,e,r)=>[o2.uri(r),await Di.compileSchema(t,e)],qp=([t,e],r,n,s)=>{if(!Wn.typeOf(r,"array"))return!0;const i=Di.collectEvaluatedItems(t,r,n,s,!0);return i===!1||Wn.every((a,o)=>i.has(o)||Di.interpretSchema(e,Wn.step(o,r),n,s),r)},l2=(t,e,r,n)=>qp(t,e,r,n)&&new Set(Wn.map((s,i)=>i,e));var f2={compile:c2,interpret:qp,collectEvaluatedItems:l2};const{Core:Li,Schema:p2,Instance:fl}=k,u2=async(t,e,r)=>[p2.uri(r),await Li.compileSchema(t,e)],Dp=([t,e],r,n,s)=>{if(!fl.typeOf(r,"object"))return!0;const i=Li.collectEvaluatedProperties(t,r,n,s,!0);return!i||fl.entries(r).filter(([a])=>!i.some(o=>a.match(o))).every(([,a])=>Li.interpretSchema(e,a,n,s))},d2=(t,e,r,n)=>Dp(t,e,r,n)&&[new RegExp("")];var m2={compile:u2,interpret:Dp,collectEvaluatedProperties:d2};const{Schema:h2,Instance:yi}=k,y2=Tr,$2=t=>h2.value(t),g2=(t,e)=>{if(!yi.typeOf(e,"array")||t===!1)return!0;const r=yi.map(n=>y2(yi.value(n)),e);return new Set(r).size===r.length};var v2={compile:$2,interpret:g2};const{Keywords:pl}=k;var b2={additionalItems:$1,additionalItems6:b1,additionalProperties:E1,additionalProperties6:P1,allOf:N1,anyOf:L1,const:V1,contains:J1,containsMinContainsMaxContains:X1,containsMinContainsMaxContainsFUTURE:Z1,definitions:s0,dependencies:o0,dependentRequired:f0,dependentSchemas:h0,dynamicRef:I0,dynamicRefNEXT:A0,dynamicRefPROPOSED:q0,enum:U0,exclusiveMaximum:z0,exclusiveMinimum:X0,if:eS,then:iS,else:fS,items:dS,items202012:yS,maxItems:bS,maxLength:IS,maxLength6:jS,maxProperties:NS,maximumExclusiveMaximum:RS,maximum:MS,metaData:pl.metaData,minItems:VS,minLength:GS,minLength6:WS,minProperties:tw,minimumExclusiveMinimum:sw,minimum:cw,multipleOf:uw,not:hw,oneOf:Sw,optional:Iw,pattern:jw,patternProperties:Nw,properties:Dw,propertyDependencies:Bw,propertyNames:Vw,ref:Hw,required:Qw,tupleItems:r2,type:a2,unevaluatedItems:f2,unevaluatedProperties:m2,uniqueItems:v2,validate:pl.validate},S2=`{
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
}`,w2=`{
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
}`,E2=`{
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
}`,I2=`{
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
}`,O2=`{
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
}`,P2=`{
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
}`,k2=`{
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
}`,j2=`{
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
}`,_2=`{
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
}`;const{Core:Zt,Schema:Me}=k,B=b2,A2=S2,x2=w2,N2=E2,C2=I2,T2=O2,R2=P2,q2=k2,D2=j2,L2=_2,Lr="https://json-schema.org/draft/next/schema";Me.setConfig(Lr,"baseToken","$id");Me.setConfig(Lr,"embeddedToken","$id");Me.setConfig(Lr,"anchorToken","$anchor");Me.setConfig(Lr,"dynamicAnchorToken","$dynamicAnchor");Me.setConfig(Lr,"vocabularyToken","$vocabulary");Me.setConfig(Lr,"mandatoryVocabularies",["https://json-schema.org/draft/next/vocab/core"]);Me.add(JSON.parse(A2));Me.add(JSON.parse(x2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/core",{validate:B.validate,$defs:B.definitions,$dynamicRef:B.dynamicRefNEXT,$dref:B.dynamicRefPROPOSED,$ref:B.ref});Me.add(JSON.parse(N2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/applicator",{additionalProperties:B.additionalProperties6,allOf:B.allOf,anyOf:B.anyOf,contains:B.containsMinContainsMaxContainsFUTURE,dependentSchemas:B.dependentSchemas,if:B.if,then:B.then,else:B.else,items:B.items202012,not:B.not,oneOf:B.oneOf,patternProperties:B.patternProperties,prefixItems:B.tupleItems,properties:B.properties,propertyDependencies:B.propertyDependencies,propertyNames:B.propertyNames});Me.add(JSON.parse(C2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/validation",{const:B.const,dependentRequired:B.dependentRequired,enum:B.enum,exclusiveMaximum:B.exclusiveMaximum,exclusiveMinimum:B.exclusiveMinimum,maxItems:B.maxItems,maxLength:B.maxLength6,maxProperties:B.maxProperties,maximum:B.maximum,minItems:B.minItems,minLength:B.minLength6,minProperties:B.minProperties,minimum:B.minimum,multipleOf:B.multipleOf,optional:B.optional,pattern:B.pattern,required:B.required,type:B.type,uniqueItems:B.uniqueItems});Me.add(JSON.parse(T2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/meta-data",{default:B.metaData,deprecated:B.metaData,description:B.metaData,examples:B.metaData,readOnly:B.metaData,title:B.metaData,writeOnly:B.metaData});Me.add(JSON.parse(R2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/format-annotation",{format:B.metaData});Me.add(JSON.parse(q2));Me.add(JSON.parse(D2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/content",{contentEncoding:B.metaData,contentMediaType:B.metaData,contentSchema:B.metaData});Me.add(JSON.parse(L2));Zt.defineVocabulary("https://json-schema.org/draft/next/vocab/unevaluated",{unevaluatedItems:B.unevaluatedItems,unevaluatedProperties:B.unevaluatedProperties});function M2(t){return{c:ke,l:ke,m:ke,p:ke,i:ke,o:ke,d:ke}}function B2(t){let e,r;return e=new cp({props:{results:t[5]}}),{c(){Ze(e.$$.fragment)},l(n){et(e.$$.fragment,n)},m(n,s){tt(e,n,s),r=!0},p(n,s){const i={};s&32&&(i.results=n[5]),e.$set(i)},i(n){r||(Re(e.$$.fragment,n),r=!0)},o(n){qe(e.$$.fragment,n),r=!1},d(n){rt(e,n)}}}function U2(t){return{c:ke,l:ke,m:ke,p:ke,i:ke,o:ke,d:ke}}function F2(t){let e,r,n,s,i,a,o,c,l,p,$,m,y,P,u,d,v,I,b,j,S,_,K,Z,w,N,C,R,z,q,X,le,pe;function F(Y){t[11](Y)}let ve={ns:"schemas",tabs:t[1],newTab:t[7],active:0};t[0]!==void 0&&(ve.format=t[0]),u=new vc({props:ve}),jt.push(()=>mr(u,"format",F)),u.$on("input",t[9]);function We(Y){t[12](Y)}function be(Y){t[13](Y)}function Be(Y){t[14](Y)}let Ue={ns:"instances",tabs:t[2],newTab:t[8]};t[3]!==void 0&&(Ue.selected=t[3]),t[3]!==void 0&&(Ue.active=t[3]),t[0]!==void 0&&(Ue.format=t[0]),b=new vc({props:Ue}),jt.push(()=>mr(b,"selected",We)),jt.push(()=>mr(b,"active",be)),jt.push(()=>mr(b,"format",Be)),b.$on("input",t[10]),w=new cp({props:{results:t[4]}});let ce={ctx:t,current:null,token:null,hasCatch:!1,pending:U2,then:B2,catch:M2,value:18,blocks:[,,,]};return Zn(R=t[4],ce),q=new s1({}),{c(){e=_e(),r=J("div"),n=J("button"),s=ie("JSON"),a=J("button"),o=ie("YAML"),l=_e(),p=J("main"),$=J("h1"),m=ie("Hyperjump - JSON Schema Validator"),y=_e(),P=J("div"),Ze(u.$$.fragment),v=_e(),I=J("div"),Ze(b.$$.fragment),K=_e(),Z=J("div"),Ze(w.$$.fragment),N=_e(),C=J("div"),ce.block.c(),z=_e(),Ze(q.$$.fragment),this.h()},l(Y){nu('[data-svelte="svelte-14138tz"]',document.head).forEach(A),e=Ae(Y),r=G(Y,"DIV",{class:!0});var fe=L(r);n=G(fe,"BUTTON",{class:!0});var he=L(n);s=ae(he,"JSON"),he.forEach(A),a=G(fe,"BUTTON",{class:!0});var Fe=L(a);o=ae(Fe,"YAML"),Fe.forEach(A),fe.forEach(A),l=Ae(Y),p=G(Y,"MAIN",{class:!0});var xe=L(p);$=G(xe,"H1",{class:!0});var er=L($);m=ae(er,"Hyperjump - JSON Schema Validator"),er.forEach(A),y=Ae(xe),P=G(xe,"DIV",{class:!0});var tr=L(P);et(u.$$.fragment,tr),tr.forEach(A),v=Ae(xe),I=G(xe,"DIV",{class:!0});var Mr=L(I);et(b.$$.fragment,Mr),Mr.forEach(A),K=Ae(xe),Z=G(xe,"DIV",{class:!0});var In=L(Z);et(w.$$.fragment,In),In.forEach(A),N=Ae(xe),C=G(xe,"DIV",{class:!0});var On=L(C);ce.block.l(On),On.forEach(A),z=Ae(xe),et(q.$$.fragment,xe),xe.forEach(A),this.h()},h(){document.title="Hyperjump - JSON Schema Validator",x(n,"class",i=An(t[0]==="json"?"selected":"")+" svelte-ub4xmj"),x(a,"class",c=An(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"),x(r,"class","format svelte-ub4xmj"),x($,"class","svelte-ub4xmj"),x(P,"class","editor-section svelte-ub4xmj"),x(I,"class","editor-section svelte-ub4xmj"),x(Z,"class","results "+dl+" svelte-ub4xmj"),x(C,"class","results "+dl+" svelte-ub4xmj"),x(p,"class","svelte-ub4xmj")},m(Y,ne){Q(Y,e,ne),Q(Y,r,ne),T(r,n),T(n,s),T(r,a),T(a,o),Q(Y,l,ne),Q(Y,p,ne),T(p,$),T($,m),T(p,y),T(p,P),tt(u,P,null),T(p,v),T(p,I),tt(b,I,null),T(p,K),T(p,Z),tt(w,Z,null),T(p,N),T(p,C),ce.block.m(C,ce.anchor=null),ce.mount=()=>C,ce.anchor=null,T(p,z),tt(q,p,null),X=!0,le||(pe=[Kt(n,"click",t[6]("json")),Kt(a,"click",t[6]("yaml"))],le=!0)},p(Y,[ne]){t=Y,(!X||ne&1&&i!==(i=An(t[0]==="json"?"selected":"")+" svelte-ub4xmj"))&&x(n,"class",i),(!X||ne&1&&c!==(c=An(t[0]==="yaml"?"selected":"")+" svelte-ub4xmj"))&&x(a,"class",c);const fe={};ne&2&&(fe.tabs=t[1]),!d&&ne&1&&(d=!0,fe.format=t[0],hr(()=>d=!1)),u.$set(fe);const he={};ne&4&&(he.tabs=t[2]),!j&&ne&8&&(j=!0,he.selected=t[3],hr(()=>j=!1)),!S&&ne&8&&(S=!0,he.active=t[3],hr(()=>S=!1)),!_&&ne&1&&(_=!0,he.format=t[0],hr(()=>_=!1)),b.$set(he);const Fe={};ne&16&&(Fe.results=t[4]),w.$set(Fe),ce.ctx=t,ne&16&&R!==(R=t[4])&&Zn(R,ce)||hl(ce,t,ne)},i(Y){X||(Re(u.$$.fragment,Y),Re(b.$$.fragment,Y),Re(w.$$.fragment,Y),Re(ce.block),Re(q.$$.fragment,Y),X=!0)},o(Y){qe(u.$$.fragment,Y),qe(b.$$.fragment,Y),qe(w.$$.fragment,Y);for(let ne=0;ne<3;ne+=1){const fe=ce.blocks[ne];qe(fe)}qe(q.$$.fragment,Y),X=!1},d(Y){Y&&A(e),Y&&A(r),Y&&A(l),Y&&A(p),rt(u),rt(b),rt(w),ce.block.d(),ce.token=null,ce=null,rt(q),le=!1,ml(pe)}}}const ul=750,$i="https://json-schema.org/draft/2020-12/schema",Xr="https://json-schema.hyperjump.io/schema",dl="solarized-dark";function V2(t,e,r){let n,s,i="json";const a=(S,_)=>_==="yaml"?hd.parse(S):JSON.parse(S),o={json:S=>`{
  "$id": "${S}",
  "$schema": "${$i}"
}`,yaml:S=>`$id: '${S}'
$schema: '${$i}'`},c=S=>()=>{r(0,i=S),r(1,$=[l("Schema",Xr,!0)]),r(2,m=[p("Instance")]),r(3,y=0)},l=function(){let S=1;return(_=void 0,K=void 0,Z=!1)=>{const w=K||`${Xr}${++S}`;return{label:_||`Schema ${S}`,text:o[i](w),persistent:Z}}}(),p=function(){let S=1;return()=>({label:`Instance ${S++}`,text:""})}();let $=[l("Schema",Xr,!0)],m=[p("Instance")],y=0;const P=function(S,_){let K;return({detail:Z})=>{clearTimeout(K),K=setTimeout(()=>S(Z),_)}},u=P(S=>r(1,$=S),ul),d=P(S=>r(2,m=S),ul);je.setMetaOutputFormat(je.BASIC);function v(S){i=S,r(0,i)}function I(S){y=S,r(3,y)}function b(S){y=S,r(3,y)}function j(S){i=S,r(0,i)}return t.$$.update=()=>{t.$$.dirty&3&&r(4,n=async function(){$.forEach((_,K)=>{const Z=K===0?Xr:"";je.add(a(_.text||"true",i),Z,$i)});const S=await je.get(Xr);return je.validate(S)}()),t.$$.dirty&29&&r(5,s=async function(){if(m[y].text!==""){let S;try{S=await n}catch{}if(S){const _=S(a(m[y].text,i),je.BASIC);if(_.valid)return _;throw{output:_}}}}())},[i,$,m,y,n,s,c,l,p,u,d,v,I,b,j]}class z2 extends Rt{constructor(e){super(),qt(this,e,V2,F2,Dt,{})}}export{z2 as default};
