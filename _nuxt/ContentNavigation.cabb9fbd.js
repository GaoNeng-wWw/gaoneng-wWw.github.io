import{a as u,s as v,l as h,A as g,B as P,d as e,_ as r,t as S,j as O,C as A,D as T,E as L,k as y,b as D,h as E,F as R}from"./entry.4fd5b1ba.js";import{u as I}from"./asyncData.dfa25018.js";import"./gittalk.3ac992cb.js";import"./ContentDoc.955fd06c.js";import"./ContentList.85b1511e.js";import"./ContentQuery.1184b8dd.js";import"./ContentRenderer.482be216.js";import"./ContentRendererMarkdown.f8173323.js";import"./ContentSlot.bfa8fdac.js";import"./DocumentDrivenEmpty.17b25d84.js";import"./DocumentDrivenNotFound.04ea04d1.js";import"./Markdown.cc3afa6b.js";import"./ProseCode.a9b1dc89.js";import"./layout.5fc0e35f.js";import"./client-only.ef70530f.js";import{u as V}from"./composables.735a31d4.js";import"./_commonjsHelpers.726de751.js";import"./head.6e35e06e.js";import"./index.1dec55d2.js";const c=u({emits:{error(t){return!0}},setup(t,{slots:i,emit:_}){const o=v(null),n=h();return g(a=>{if(!n.isHydrating)return _("error",a),o.value=a,!1}),()=>{var a,l;return o.value?(a=i.error)==null?void 0:a.call(i,{error:o}):(l=i.default)==null?void 0:l.call(i)}}}),b=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),B=u({name:"DevOnly",setup(t,i){return()=>null}}),j=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),N=u({name:"ServerPlaceholder",render(){return P("div")}}),x=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),C=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),p=(t,i)=>(_,o)=>(V(()=>t({...C(_),...o.attrs},o)),()=>{var n,a;return i?(a=(n=o.slots).default)==null?void 0:a.call(n):null}),d={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},q=u({name:"NoScript",inheritAttrs:!1,props:{...d,title:String,body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:i})=>{var n;const _={...t},o=(((n=i.default)==null?void 0:n.call(i))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return o&&(_.children=o),{noscript:[_]}})}),M=u({name:"Link",inheritAttrs:!1,props:{...d,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>({link:[t]}))}),k=u({name:"Base",inheritAttrs:!1,props:{...d,href:String,target:String},setup:p(t=>({base:t}))}),z=u({name:"Title",inheritAttrs:!1,setup:p((t,{slots:i})=>{var o,n,a;return{title:((a=(n=(o=i.default)==null?void 0:o.call(i))==null?void 0:n[0])==null?void 0:a.children)||null}})}),H=u({name:"Meta",inheritAttrs:!1,props:{...d,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:p(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),$=u({name:"Style",inheritAttrs:!1,props:{...d,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:p((t,{slots:i})=>{var n,a,l;const _={...t},o=(l=(a=(n=i.default)==null?void 0:n.call(i))==null?void 0:a[0])==null?void 0:l.children;return o&&(_.children=o),{style:[_]}})}),w=u({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var _,o;return(o=(_=i.slots).default)==null?void 0:o.call(_)}}),F=u({name:"Html",inheritAttrs:!1,props:{...d,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:p(t=>({htmlAttrs:t}),!0)}),U=u({name:"Body",inheritAttrs:!1,props:{...d,renderPriority:[String,Number]},setup:p(t=>({bodyAttrs:t}),!0)}),m=Object.freeze(Object.defineProperty({__proto__:null,NoScript:q,Link:M,Base:k,Title:z,Meta:H,Style:$,Head:w,Html:F,Body:U},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./near.d01e31bb.js"),["./near.d01e31bb.js","./near.vue_vue_type_script_setup_true_lang.b944cefd.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./config.cf7a0b20.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./toc.809d0838.js"),["./toc.809d0838.js","./toc.vue_vue_type_script_setup_true_lang.d4129ca2.js","./postToc.vue_vue_type_script_setup_true_lang.d573a9b2.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./postComment.35e9cbe0.js"),["./postComment.35e9cbe0.js","./postComment.vue_vue_type_script_setup_true_lang.fd1a99a9.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./config.cf7a0b20.js","./gittalk.3ac992cb.js","./_commonjsHelpers.726de751.js","./gittalk.03db038e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./postToc.7e09439f.js"),["./postToc.7e09439f.js","./postToc.vue_vue_type_script_setup_true_lang.d573a9b2.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentDoc.955fd06c.js"),["./ContentDoc.955fd06c.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./head.6e35e06e.js","./composables.735a31d4.js","./ContentRenderer.482be216.js","./ContentRendererMarkdown.f8173323.js","./index.1dec55d2.js","./_commonjsHelpers.726de751.js","./ContentQuery.1184b8dd.js","./asyncData.dfa25018.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentList.85b1511e.js"),["./ContentList.85b1511e.js","./ContentQuery.1184b8dd.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./asyncData.dfa25018.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentQuery.1184b8dd.js"),["./ContentQuery.1184b8dd.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./asyncData.dfa25018.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRenderer.482be216.js"),["./ContentRenderer.482be216.js","./ContentRendererMarkdown.f8173323.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./index.1dec55d2.js","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentRendererMarkdown.f8173323.js"),["./ContentRendererMarkdown.f8173323.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./index.1dec55d2.js","./_commonjsHelpers.726de751.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ContentSlot.bfa8fdac.js"),["./ContentSlot.bfa8fdac.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenEmpty.17b25d84.js"),["./DocumentDrivenEmpty.17b25d84.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./DocumentDrivenNotFound.04ea04d1.js"),["./DocumentDrivenNotFound.04ea04d1.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./Markdown.cc3afa6b.js"),["./Markdown.cc3afa6b.js","./ContentSlot.bfa8fdac.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseA.65f66f28.js"),["./ProseA.65f66f28.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseBlockquote.57e3790a.js"),["./ProseBlockquote.57e3790a.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCode.a9b1dc89.js"),["./ProseCode.a9b1dc89.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseCodeInline.5361417d.js"),["./ProseCodeInline.5361417d.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseEm.32adcebf.js"),["./ProseEm.32adcebf.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH1.c9e5f6f3.js"),["./ProseH1.c9e5f6f3.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH2.b6a5af9a.js"),["./ProseH2.b6a5af9a.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH3.78538f9f.js"),["./ProseH3.78538f9f.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH4.18906a38.js"),["./ProseH4.18906a38.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH5.ce966716.js"),["./ProseH5.ce966716.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseH6.daa51296.js"),["./ProseH6.daa51296.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseHr.804cd051.js"),["./ProseHr.804cd051.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseImg.fa534d26.js"),["./ProseImg.fa534d26.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseLi.feca8bd9.js"),["./ProseLi.feca8bd9.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseOl.f13655d5.js"),["./ProseOl.f13655d5.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseP.c2f5ef2e.js"),["./ProseP.c2f5ef2e.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseStrong.94027b37.js"),["./ProseStrong.94027b37.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTable.7ba8e874.js"),["./ProseTable.7ba8e874.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTbody.9a3a9dbe.js"),["./ProseTbody.9a3a9dbe.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTd.de4bdfdb.js"),["./ProseTd.de4bdfdb.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTh.2c752236.js"),["./ProseTh.2c752236.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseThead.d96bf939.js"),["./ProseThead.d96bf939.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseTr.774796ee.js"),["./ProseTr.774796ee.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./ProseUl.938b09da.js"),["./ProseUl.938b09da.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./welcome.a504b71e.js"),["./welcome.a504b71e.js","./composables.735a31d4.js","./entry.4fd5b1ba.js","./entry.2726a783.css","./asyncData.dfa25018.js","./gittalk.3ac992cb.js","./_commonjsHelpers.726de751.js","./gittalk.03db038e.css","./ContentDoc.955fd06c.js","./head.6e35e06e.js","./ContentRenderer.482be216.js","./ContentRendererMarkdown.f8173323.js","./index.1dec55d2.js","./ContentQuery.1184b8dd.js","./ContentList.85b1511e.js","./ContentSlot.bfa8fdac.js","./DocumentDrivenEmpty.17b25d84.js","./DocumentDrivenNotFound.04ea04d1.js","./Markdown.cc3afa6b.js","./ProseCode.a9b1dc89.js","./ProseCode.e63e49c6.css","./layout.5fc0e35f.js","./client-only.ef70530f.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./layout.5fc0e35f.js"),["./layout.5fc0e35f.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>b),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./client-only.ef70530f.js"),["./client-only.ef70530f.js","./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>j),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>x),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4fd5b1ba.js").then(t=>t.aj),["./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4fd5b1ba.js").then(t=>t.ak),["./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./entry.4fd5b1ba.js").then(t=>t.al),["./entry.4fd5b1ba.js","./entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>m),void 0,import.meta.url).then(t=>t.Body));const G=u({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=S(t),_=O(()=>{var n;return typeof((n=i.value)==null?void 0:n.params)=="function"?i.value.params():i.value});if(!_.value&&A("dd-navigation").value){const{navigation:n}=T();return{navigation:n}}const{data:o}=await I(`content-navigation-${y(_.value)}`,()=>L(_.value));return{navigation:o}},render(t){const i=D(),{navigation:_}=t,o=l=>E(R,{to:l._path},()=>l.title),n=(l,f)=>E("ul",f?{"data-level":f}:null,l.map(s=>s.children?E("li",null,[o(s),n(s.children,f+1)]):E("li",null,o(s)))),a=l=>n(l,0);return i!=null&&i.default?i.default({navigation:_,...this.$attrs}):a(_)}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));export{G as default};
