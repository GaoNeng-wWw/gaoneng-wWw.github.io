import{a as i,J as p,h as c,e as m,K as d,j as f,L as y,M as l,N as L,O as _,u as v}from"./entry.a88ff9a0.js";const h=i({props:{name:String},async setup(s,u){const e=await p[s.name]().then(t=>t.default||t);return()=>c(e,{},u.slots)}}),T=i({props:{name:{type:[String,Boolean,Object],default:null}},setup(s,u){const e=_("_route"),t=e===m()?d():e,n=f(()=>{var a,o;return(o=(a=v(s.name))!=null?a:t.meta.layout)!=null?o:"default"});return()=>{var r;const a=n.value&&n.value in p,o=(r=t.meta.layoutTransition)!=null?r:y;return l(L,a&&o,{default:()=>l(h,a&&{key:n.value,name:n.value,hasTransition:void 0},u.slots).default()}).default()}}});export{T as default};