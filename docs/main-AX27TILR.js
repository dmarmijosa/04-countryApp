import{M as f,N as l,O as d,Q as u,T as a,U as h,V as C,W as g,Z as M,_ as b,g as r,i as c,j as i,u as m,v as p,w as s}from"./chunk-J5QV7U6Q.js";var j=[{path:"home",component:h},{path:"about",component:C},{path:"contact",component:g},{path:"countries",loadChildren:()=>import("./chunk-JWYIWQMS.js").then(o=>o.CountriesModule)},{path:"**",redirectTo:"countries"}],v=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t}),t.\u0275inj=r({imports:[a.forRoot(j),a]});let o=t;return o})();var w=(()=>{let t=class t{constructor(){this.title="countryApp"}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-3"],[1,"col"]],template:function(e,x){e&1&&(m(0,"div",0)(1,"div",1),s(2,"shared-sidebar"),p(),m(3,"div",2),s(4,"router-outlet"),p()())},dependencies:[u,M]});let o=t;return o})();var N=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i({type:t,bootstrap:[w]}),t.\u0275inj=r({imports:[d,f,v,b]});let o=t;return o})();l().bootstrapModule(N).catch(o=>console.error(o));