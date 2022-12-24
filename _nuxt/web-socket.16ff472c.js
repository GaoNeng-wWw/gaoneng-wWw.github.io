import{m as u}from"./entry.4fd5b1ba.js";import{r as g}from"./asyncData.dfa25018.js";const n={log:(...s)=>{},warn:(...s)=>{}};let e;function f(){if(!window.WebSocket){n.warn("Could not enable hot reload, your browser does not support WebSocket.");return}const s=o=>{try{if(!JSON.parse(o.data))return;g()}catch{}},c=()=>n.log("WS connected!"),a=o=>{switch(o.code){case"ECONNREFUSED":t(!0);break;default:n.warn("WS Error:",o);break}},l=o=>{o.code===1e3||o.code===1005?n.log("WS closed!"):t(!0)},t=(o=!1)=>{if(o){n.log("WS reconnecting.."),setTimeout(t,1e3);return}if(e){try{e.close()}catch{}e=void 0}const r=`${u().public.content.wsUrl}ws`;n.log(`WS connect to ${r}`),e=new WebSocket(r),e.onopen=c,e.onmessage=s,e.onerror=a,e.onclose=l};return t(),{connect:t}}export{f as useContentWebSocket};
