var a=Object.defineProperty;var l=(n,e,t)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var o=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);import{w as c}from"./paths.ET-Wfz1g.js";class r{constructor(e,t,s=0){o(this,"en");o(this,"vn");o(this,"lvl",0);o(this,"levelUp",()=>{this.lvl+=1});o(this,"reset",()=>{this.lvl=0});this.en=e,this.vn=t,this.lvl=s}}function u(n){const e=n.map(t=>({en:t.en,vn:t.vn,lvl:t.lvl}));return localStorage.setItem("appWords",JSON.stringify(e)),!!localStorage.getItem("appWords")}function i(){const n=localStorage.getItem("appWords")||"null",e=JSON.parse(n);let t=[];return e&&(t=e.map(s=>new r(s.en,s.vn,s.lvl))),t.length||console.warn("Couldn't find words data in localStorage"),t}const g=[new r("hello","xin chao"),new r("mom","me"),new r("think","nghi")],v=i()||g,h=c(v);export{r as W,i as a,u as s,h as w};
