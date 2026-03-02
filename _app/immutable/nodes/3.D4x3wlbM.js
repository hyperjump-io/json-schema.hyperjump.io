import{a as h,f as g}from"../chunks/Ct9EWnWc.js";import{i as _}from"../chunks/CDFa1F5A.js";import{q as A,t as c,o as p,u as C,v as l,w as R,x,y as j,z as B,A as D}from"../chunks/BI6nfqCF.js";import{e as T,s as U}from"../chunks/DL7493h5.js";import{i as z}from"../chunks/Krr-4Wds.js";var J=g('<h2>Restored Text</h2> <pre class="svelte-yzhnh5"> </pre>',1),N=g('<h1>Deflate → Base64 Demo</h1> <button class="svelte-yzhnh5">Compress & Decompress</button> <!>',1);function E(d,$){A($,!1);let b={schema:`{
    "$schema": "https://json-schema.org/v1/2026",
    "$id": "https://json-schema.org/v1/2026",
    "$dynamicAnchor": "meta",

    "title": "JSON Schema Core and Validation specification meta-schema",
    "type": ["object", "boolean"],
    "properties": {
        "$id": {
            "$ref": "#/$defs/iriReferenceString",
            "$comment": "Fragments not allowed.",
            "pattern": "^[^#]*$"
        },
        "$schema": { "$ref": "#/$defs/iriString" },
        "$ref": { "$ref": "#/$defs/iriReferenceString" },
        "$anchor": { "$ref": "#/$defs/anchorString" },
        "$dynamicRef": { "$ref": "#/$defs/anchorString" },
        "$dynamicAnchor": { "$ref": "#/$defs/anchorString" },
    }
}
`},n=R("");const u=async()=>{const e=await w(b);console.log(e.length),window.location.hash=e,x(n,await y(window.location.hash.substring(1)))};async function w(e){const r=JSON.stringify(e),s=new Blob([r]).stream().pipeThrough(new CompressionStream("brotli")),o=await new Response(s).arrayBuffer(),i=String.fromCharCode(...new Uint8Array(o));return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function y(e){let r=e.replace(/-/g,"+").replace(/_/g,"/");for(;r.length%4;)r+="=";const t=atob(r),s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);const i=new Blob([s]).stream().pipeThrough(new DecompressionStream("brotli"));return await new Response(i).json()}_();var m=N(),f=c(p(m),2),v=c(f,2);{var S=e=>{var r=J(),t=c(p(r),2),s=j(t,!0);B(t),D(o=>U(s,o),[()=>JSON.stringify(l(n),null,"  ")]),h(e,r)};z(v,e=>{l(n)&&e(S)})}T("click",f,u),h(d,m),C()}export{E as component};
