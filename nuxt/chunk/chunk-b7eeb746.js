import{d as o,_ as c,o as g,c as E,n as k,g as P,u as s}from"../entry.9f761a14.js";const v={__name:"nuxt-error-page",props:{error:Object},setup(u){var n;const{error:t}=u;(t.stack||"").split(`
`).splice(1).map(e=>({text:e.replace("webpack:/","").replace(".vue",".js").trim(),internal:e.includes("node_modules")&&!e.includes(".cache")||e.includes("internal")||e.includes("new Promise")})).map(e=>`<span class="stack${e.internal?" internal":""}">${e.text}</span>`).join(`
`);const r=Number(t.statusCode||500),a=r===404,i=(n=t.statusMessage)!=null?n:a?"Page Not Found":"Internal Server Error",p=t.message||t.toString(),_=void 0,d=o(()=>c(()=>import("./chunk-7d88dbe8.js"),["./chunk-7d88dbe8.js","..\\entry.9f761a14.js","..\\assets\\assert-2726a783.css","./chunk-68865926.js","..\\assets\\assert-a19a4ebd.css"],import.meta.url).then(e=>e.default||e)),l=o(()=>c(()=>import("./chunk-5915df54.js"),["./chunk-5915df54.js","./chunk-68865926.js","..\\entry.9f761a14.js","..\\assets\\assert-2726a783.css","..\\assets\\assert-aa2df86e.css"],import.meta.url).then(e=>e.default||e)),m=a?d:l;return(e,f)=>(g(),E(s(m),k(P({statusCode:s(r),statusMessage:s(i),description:s(p),stack:s(_)})),null,16))}},h=v;export{h as default};