function x(){}const F=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(w)}function P(t){return typeof t=="function"}function S(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function U(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(E(n,e))}function B(t,n,e,o){if(t){const s=b(t,n,e,o);return t[0](s)}}function b(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const a=[],f=Math.max(n.dirty.length,s.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|s[u];return a}return n.dirty|s}return n.dirty}function D(t,n,e,o,s,a){if(s){const f=b(n,e,o,a);t.p(f,s)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t,n,e){return t.set(e),n}function I(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let l;function _(t){l=t}function y(){if(!l)throw new Error("Function called outside component initialization");return l}function J(t){y().$$.on_mount.push(t)}function K(t){y().$$.after_update.push(t)}const i=[],p=[];let c=[];const g=[],m=Promise.resolve();let h=!1;function v(){h||(h=!0,m.then(q))}function L(){return v(),m}function O(t){c.push(t)}const d=new Set;let r=0;function q(){if(r!==0)return;const t=l;do{try{for(;r<i.length;){const n=i[r];r++,_(n),z(n.$$)}}catch(n){throw i.length=0,r=0,n}for(_(null),i.length=0,r=0;p.length;)p.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];d.has(e)||(d.add(e),e())}c.length=0}while(i.length);for(;g.length;)g.pop()();h=!1,d.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function N(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{B as a,p as b,A as c,C as d,K as e,I as f,G as g,O as h,F as i,H as j,P as k,M as l,q as m,x as n,J as o,U as p,N as q,j as r,S as s,L as t,D as u,l as v,_ as w,w as x,i as y,v as z};
