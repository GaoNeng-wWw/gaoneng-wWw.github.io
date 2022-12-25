import{a as m,s as E,l as S,A as O,B as P,C as c,D as g,h as p,d as e,_ as r,t as y,j as A,E as T,F as L,G as D,k as R,b as V,H as I}from"../entry.7516a059.js";import{u as b}from"./chunk-c49826c0.js";import"./chunk-fb0c20d6.js";import"./chunk-1f970b5f.js";import"./chunk-50578e66.js";import"./chunk-a5322ae9.js";import"./chunk-c54477d6.js";import"./chunk-857f1c78.js";import"./chunk-4b65d370.js";import"./chunk-f800bb0d.js";import"./chunk-fd03f05f.js";import"./chunk-f5eee443.js";import"./chunk-60646ce2.js";import"./chunk-efd770be.js";import{u as B}from"./chunk-4d0d7ffe.js";import"./chunk-6de5519e.js";import"./chunk-c26534c4.js";import"./chunk-c7581c37.js";const j=m({emits:{error(t){return!0}},setup(t,{slots:i,emit:_}){const a=E(null),n=S();return O(o=>{if(!n.isHydrating)return _("error",o),a.value=o,!1}),()=>{var o,u;return a.value?(o=i.error)==null?void 0:o.call(i,{error:a}):(u=i.default)==null?void 0:u.call(i)}}}),k=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),N=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:i,attrs:_}){const a=E(!1);return P(()=>{a.value=!0}),n=>{var l;if(a.value)return(l=i.default)==null?void 0:l.call(i);const o=i.fallback||i.placeholder;if(o)return o();const u=n.fallback||n.placeholder||"",f=n.fallbackTag||n.placeholderTag||"span";return c(f,_,u)}}}),v=new WeakMap;function C(t){if(v.has(t))return v.get(t);const i={...t};return i.render?i.render=(_,...a)=>{var n;if(_.mounted$){const o=t.render(_,...a);return o.children===null||typeof o.children=="string"?g(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",(n=_.$attrs)!=null?n:_._.attrs)}:i.template&&(i.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),i.setup=(_,a)=>{var o;const n=E(!1);return P(()=>{n.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,_,a))||{}).then(u=>typeof u!="function"?{...u,mounted$:n}:(...f)=>{if(n.value){const l=u(...f);return l.children===null||typeof l.children=="string"?g(l.type,l.props,l.children,l.patchFlag,l.dynamicProps,l.shapeFlag):p(l)}else return p("div",a.attrs)})},v.set(t,i),i}const M=Object.freeze(Object.defineProperty({__proto__:null,default:N,createClientOnly:C},Symbol.toStringTag,{value:"Module"})),$=m({name:"DevOnly",setup(t,i){return()=>null}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"})),z=m({name:"ServerPlaceholder",render(){return c("div")}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"})),x=t=>Object.fromEntries(Object.entries(t).filter(([,i])=>i!==void 0)),s=(t,i)=>(_,a)=>(B(()=>t({...x(_),...a.attrs},a)),()=>{var n,o;return i?(o=(n=a.slots).default)==null?void 0:o.call(n):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},F=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:i})=>{var n;const _={...t},a=(((n=i.default)==null?void 0:n.call(i))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return a&&(_.children=a),{noscript:[_]}})}),w=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:s(t=>({link:[t]}))}),U=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:s(t=>({base:t}))}),G=m({name:"Title",inheritAttrs:!1,setup:s((t,{slots:i})=>{var a,n,o;return{title:((o=(n=(a=i.default)==null?void 0:a.call(i))==null?void 0:n[0])==null?void 0:o.children)||null}})}),W=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(t=>{const i={...t};return i.httpEquiv&&(i["http-equiv"]=i.httpEquiv,delete i.httpEquiv),{meta:[i]}})}),J=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:s((t,{slots:i})=>{var n,o,u;const _={...t},a=(u=(o=(n=i.default)==null?void 0:n.call(i))==null?void 0:o[0])==null?void 0:u.children;return a&&(_.children=a),{style:[_]}})}),K=m({name:"Head",inheritAttrs:!1,setup:(t,i)=>()=>{var _,a;return(a=(_=i.slots).default)==null?void 0:a.call(_)}}),Q=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(t=>({htmlAttrs:t}),!0)}),X=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:s(t=>({bodyAttrs:t}),!0)}),d=Object.freeze(Object.defineProperty({__proto__:null,NoScript:F,Link:w,Base:U,Title:G,Meta:W,Style:J,Head:K,Html:Q,Body:X},Symbol.toStringTag,{value:"Module"}));e(()=>r(()=>import("./chunk-9ec41265.js"),["./chunk-9ec41265.js","./chunk-f497418a.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-f97064a9.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-8ae43b66.js"),["./chunk-8ae43b66.js","./chunk-592f713a.js","./chunk-f087f85c.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-f80379bc.js"),["./chunk-f80379bc.js","./chunk-4c9d8875.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-f97064a9.js","./chunk-fb0c20d6.js","./chunk-6de5519e.js","..\\gittalk.03db038e.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-201074b6.js"),["./chunk-201074b6.js","./chunk-f087f85c.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-1f970b5f.js"),["./chunk-1f970b5f.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-c26534c4.js","./chunk-4d0d7ffe.js","./chunk-c54477d6.js","./chunk-857f1c78.js","./chunk-c7581c37.js","./chunk-6de5519e.js","./chunk-a5322ae9.js","./chunk-c49826c0.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-50578e66.js"),["./chunk-50578e66.js","./chunk-a5322ae9.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-c49826c0.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-a5322ae9.js"),["./chunk-a5322ae9.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-c49826c0.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-c54477d6.js"),["./chunk-c54477d6.js","./chunk-857f1c78.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-c7581c37.js","./chunk-6de5519e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-857f1c78.js"),["./chunk-857f1c78.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-c7581c37.js","./chunk-6de5519e.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-4b65d370.js"),["./chunk-4b65d370.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-f800bb0d.js"),["./chunk-f800bb0d.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-fd03f05f.js"),["./chunk-fd03f05f.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-f5eee443.js"),["./chunk-f5eee443.js","./chunk-4b65d370.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-49affee0.js"),["./chunk-49affee0.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-e9f8c740.js"),["./chunk-e9f8c740.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-60646ce2.js"),["./chunk-60646ce2.js","..\\entry.7516a059.js","..\\entry.2726a783.css","..\\ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-5448efc1.js"),["./chunk-5448efc1.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-340d0afe.js"),["./chunk-340d0afe.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-a24b79c7.js"),["./chunk-a24b79c7.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-06fbf70d.js"),["./chunk-06fbf70d.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-dc2d165f.js"),["./chunk-dc2d165f.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-5c36e303.js"),["./chunk-5c36e303.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-0fa09b69.js"),["./chunk-0fa09b69.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-78b97fca.js"),["./chunk-78b97fca.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-eab0624b.js"),["./chunk-eab0624b.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-c820a275.js"),["./chunk-c820a275.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-fdfc4ae0.js"),["./chunk-fdfc4ae0.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-249b9ba0.js"),["./chunk-249b9ba0.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-7f045ec6.js"),["./chunk-7f045ec6.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-53de5fc7.js"),["./chunk-53de5fc7.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-92333bc8.js"),["./chunk-92333bc8.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-37a81efb.js"),["./chunk-37a81efb.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-1ab9149a.js"),["./chunk-1ab9149a.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-1b245526.js"),["./chunk-1b245526.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-b09ec56c.js"),["./chunk-b09ec56c.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-6fb1dd3f.js"),["./chunk-6fb1dd3f.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-57f99d3f.js"),["./chunk-57f99d3f.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-0543fe0e.js"),["./chunk-0543fe0e.js","./chunk-4d0d7ffe.js","..\\entry.7516a059.js","..\\entry.2726a783.css","./chunk-c49826c0.js","./chunk-fb0c20d6.js","./chunk-6de5519e.js","..\\gittalk.03db038e.css","./chunk-1f970b5f.js","./chunk-c26534c4.js","./chunk-c54477d6.js","./chunk-857f1c78.js","./chunk-c7581c37.js","./chunk-a5322ae9.js","./chunk-50578e66.js","./chunk-4b65d370.js","./chunk-f800bb0d.js","./chunk-fd03f05f.js","./chunk-f5eee443.js","./chunk-60646ce2.js","..\\ProseCode.e63e49c6.css","./chunk-efd770be.js"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("./chunk-efd770be.js"),["./chunk-efd770be.js","..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>k),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>M),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>H),void 0,import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("../entry.7516a059.js").then(t=>t.aj),["..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("../entry.7516a059.js").then(t=>t.ak),["..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>import("../entry.7516a059.js").then(t=>t.al),["..\\entry.7516a059.js","..\\entry.2726a783.css"],import.meta.url).then(t=>t.default||t));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.NoScript));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Link));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Base));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Title));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Meta));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Style));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Head));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Html));e(()=>r(()=>Promise.resolve().then(()=>d),void 0,import.meta.url).then(t=>t.Body));const Y=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:i}=y(t),_=A(()=>{var n;return typeof((n=i.value)==null?void 0:n.params)=="function"?i.value.params():i.value});if(!_.value&&T("dd-navigation").value){const{navigation:n}=L();return{navigation:n}}const{data:a}=await b(`content-navigation-${R(_.value)}`,()=>D(_.value));return{navigation:a}},render(t){const i=V(),{navigation:_}=t,a=u=>p(I,{to:u._path},()=>u.title),n=(u,f)=>p("ul",f?{"data-level":f}:null,u.map(l=>l.children?p("li",null,[a(l),n(l.children,f+1)]):p("li",null,a(l)))),o=u=>n(u,0);return i!=null&&i.default?i.default({navigation:_,...this.$attrs}):o(_)}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{Y as default};
