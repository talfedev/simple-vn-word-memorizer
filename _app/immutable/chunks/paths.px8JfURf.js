import{n as b,s as m}from"./scheduler.BMIAZVXK.js";const t=[];function d(i,a=b){let n;const o=new Set;function r(e){if(m(i,e)&&(i=e,n)){const c=!t.length;for(const s of o)s[1](),t.push(s,i);if(c){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(i))}function _(e,c=b){const s=[e,c];return o.add(s),o.size===1&&(n=a(r,f)||b),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var l;const p=((l=globalThis.__sveltekit_11qlcm)==null?void 0:l.base)??"/simple-vn-word-memorizer";var u;const g=((u=globalThis.__sveltekit_11qlcm)==null?void 0:u.assets)??p;export{g as a,p as b,d as w};
