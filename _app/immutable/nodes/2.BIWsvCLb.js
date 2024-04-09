import{i as Wt,f as Et,s as Ht,r as At,c as Jt,h as qt,j as Pt,d as Gt}from"../chunks/scheduler.BMIAZVXK.js";import{S as Kt,i as Qt,e as u,t as Z,s as _,c as d,a as j,b as $,d as w,f as b,m as R,n as m,g as Q,h as t,o as Ft,p as L,j as Bt,k as xt,l as Vt,r as Xt,B as Yt,C as Zt,v as $t}from"../chunks/index.Bn6_9q_L.js";import{W as te,s as lt,a as jt,w as Tt}from"../chunks/stores.DxtJhRWv.js";import{b as ee}from"../chunks/paths.fJGEKOTM.js";function ne(r){const n=r-1;return n*n*n+1}function se(r,{delay:n=0,duration:s=400,easing:a=Wt}={}){const l=+getComputedStyle(r).opacity;return{delay:n,duration:s,easing:a,css:i=>`opacity: ${i*l}`}}function le(r,{delay:n=0,duration:s=400,easing:a=ne,x:l=0,y:i=0,opacity:f=0}={}){const y=getComputedStyle(r),c=+y.opacity,e=y.transform==="none"?"":y.transform,k=c*(1-f),[O,M]=Et(l),[W,H]=Et(i);return{delay:n,duration:s,easing:a,css:(S,x)=>`
			transform: ${e} translate(${(1-S)*O}${M}, ${(1-S)*W}${H});
			opacity: ${c-k*x}`}}function oe(r){let n,s=r[4].deck[r[4].current].vn+"",a;return{c(){n=u("h2"),a=Z(s)},l(l){n=d(l,"H2",{});var i=j(n);a=$(i,s),i.forEach(w)},m(l,i){Q(l,n,i),t(n,a)},p(l,i){i&16&&s!==(s=l[4].deck[l[4].current].vn+"")&&Bt(a,s)},d(l){l&&w(n)}}}function ae(r){let n,s=r[4].deck[r[4].current].en+"",a;return{c(){n=u("h2"),a=Z(s)},l(l){n=d(l,"H2",{});var i=j(n);a=$(i,s),i.forEach(w)},m(l,i){Q(l,n,i),t(n,a)},p(l,i){i&16&&s!==(s=l[4].deck[l[4].current].en+"")&&Bt(a,s)},d(l){l&&w(n)}}}function Mt(r){let n,s="copied data!",a,l,i;return{c(){n=u("p"),n.textContent=s,this.h()},l(f){n=d(f,"P",{class:!0,"data-svelte-h":!0}),R(n)!=="svelte-pt3136"&&(n.textContent=s),this.h()},h(){m(n,"class","copy-message svelte-1r43zat")},m(f,y){Q(f,n,y),i=!0},i(f){i||(f&&qt(()=>{i&&(l&&l.end(1),a=Yt(n,le,{y:20,opacity:0,duration:600}),a.start())}),i=!0)},o(f){a&&a.invalidate(),f&&(l=Zt(n,se,{})),i=!1},d(f){f&&w(n),f&&l&&l.end()}}}function re(r){let n,s,a,l,i,f,y=`<a href="${ee}/manage-words" class="svelte-1r43zat">Manage words</a>`,c,e,k,O,M,W,H,S,x,tt="Got it",X,B,et="Failed",Y,p,U,g,z,N,J,Ut="Save your words:",ot,D,E,zt="Copy to clipboard",at,P,Rt="Download as text file",rt,ct,it,ut,q,It="Upload words-list text file:",dt,ft,A,pt,ht,vt,_t,bt,gt,mt,I,G,Lt="Paste your list's JSON string:",yt,F,kt,V,Ot="Load data",Ct,St;function Nt(h,C){return h[4].face==="en"?ae:oe}let nt=Nt(r),T=nt(r),v=r[1]&&Mt();return{c(){n=u("div"),s=u("button"),a=Z("Language: "),l=Z(r[0]),i=_(),f=u("div"),f.innerHTML=y,c=_(),e=u("div"),k=u("button"),T.c(),O=_(),M=u("br"),W=_(),H=u("br"),S=_(),x=u("button"),x.textContent=tt,X=_(),B=u("button"),B.textContent=et,Y=_(),p=u("br"),U=_(),g=u("br"),z=_(),v&&v.c(),N=_(),J=u("p"),J.textContent=Ut,ot=_(),D=u("div"),E=u("button"),E.textContent=zt,at=_(),P=u("button"),P.textContent=Rt,rt=_(),ct=u("br"),it=u("br"),ut=_(),q=u("p"),q.textContent=It,dt=u("br"),ft=_(),A=u("input"),pt=_(),ht=u("br"),vt=u("br"),_t=Z("- or -"),bt=u("br"),gt=u("br"),mt=_(),I=u("div"),G=u("p"),G.textContent=Lt,yt=_(),F=u("input"),kt=_(),V=u("button"),V.textContent=Ot,this.h()},l(h){n=d(h,"DIV",{class:!0});var C=j(n);s=d(C,"BUTTON",{class:!0});var wt=j(s);a=$(wt,"Language: "),l=$(wt,r[0]),wt.forEach(w),i=b(C),f=d(C,"DIV",{"data-svelte-h":!0}),R(f)!=="svelte-y60lt1"&&(f.innerHTML=y),C.forEach(w),c=b(h),e=d(h,"DIV",{class:!0});var o=j(e);k=d(o,"BUTTON",{type:!0,class:!0});var Dt=j(k);T.l(Dt),Dt.forEach(w),O=b(o),M=d(o,"BR",{}),W=b(o),H=d(o,"BR",{}),S=b(o),x=d(o,"BUTTON",{class:!0,"data-svelte-h":!0}),R(x)!=="svelte-1wfeemp"&&(x.textContent=tt),X=b(o),B=d(o,"BUTTON",{class:!0,"data-svelte-h":!0}),R(B)!=="svelte-1q7h6b1"&&(B.textContent=et),Y=b(o),p=d(o,"BR",{}),U=b(o),g=d(o,"BR",{}),z=b(o),v&&v.l(o),N=b(o),J=d(o,"P",{"data-svelte-h":!0}),R(J)!=="svelte-hie05z"&&(J.textContent=Ut),ot=b(o),D=d(o,"DIV",{class:!0});var st=j(D);E=d(st,"BUTTON",{class:!0,"data-svelte-h":!0}),R(E)!=="svelte-1dwz792"&&(E.textContent=zt),at=b(st),P=d(st,"BUTTON",{class:!0,"data-svelte-h":!0}),R(P)!=="svelte-zpw3a9"&&(P.textContent=Rt),st.forEach(w),rt=b(o),ct=d(o,"BR",{}),it=d(o,"BR",{}),ut=b(o),q=d(o,"P",{"data-svelte-h":!0}),R(q)!=="svelte-1mx1rcy"&&(q.textContent=It),dt=d(o,"BR",{}),ft=b(o),A=d(o,"INPUT",{type:!0,accept:!0}),pt=b(o),ht=d(o,"BR",{}),vt=d(o,"BR",{}),_t=$(o,"- or -"),bt=d(o,"BR",{}),gt=d(o,"BR",{}),mt=b(o),I=d(o,"DIV",{});var K=j(I);G=d(K,"P",{"data-svelte-h":!0}),R(G)!=="svelte-1un27g1"&&(G.textContent=Lt),yt=b(K),F=d(K,"INPUT",{type:!0}),kt=b(K),V=d(K,"BUTTON",{class:!0,"data-svelte-h":!0}),R(V)!=="svelte-106ahud"&&(V.textContent=Ot),K.forEach(w),o.forEach(w),this.h()},h(){m(s,"class","svelte-1r43zat"),m(n,"class","header svelte-1r43zat"),m(k,"type","button"),m(k,"class","current-word svelte-1r43zat"),m(x,"class","success svelte-1r43zat"),m(B,"class","failure svelte-1r43zat"),m(E,"class","svelte-1r43zat"),m(P,"class","svelte-1r43zat"),m(D,"class","save-list svelte-1r43zat"),m(A,"type","file"),m(A,"accept",".txt"),m(F,"type","text"),m(V,"class","svelte-1r43zat"),m(e,"class","container svelte-1r43zat")},m(h,C){Q(h,n,C),t(n,s),t(s,a),t(s,l),t(n,i),t(n,f),Q(h,c,C),Q(h,e,C),t(e,k),T.m(k,null),t(e,O),t(e,M),t(e,W),t(e,H),t(e,S),t(e,x),t(e,X),t(e,B),t(e,Y),t(e,p),t(e,U),t(e,g),t(e,z),v&&v.m(e,null),t(e,N),t(e,J),t(e,ot),t(e,D),t(D,E),t(D,at),t(D,P),t(e,rt),t(e,ct),t(e,it),t(e,ut),t(e,q),t(e,dt),t(e,ft),t(e,A),r[16](A),t(e,pt),t(e,ht),t(e,vt),t(e,_t),t(e,bt),t(e,gt),t(e,mt),t(e,I),t(I,G),t(I,yt),t(I,F),Ft(F,r[3]),t(I,kt),t(I,V),Ct||(St=[L(s,"click",r[12]),L(k,"click",r[13]),L(x,"click",r[14]),L(B,"click",r[15]),L(E,"click",r[8]),L(P,"click",r[9]),L(A,"change",r[10]),L(F,"input",r[17]),L(V,"click",r[11])],Ct=!0)},p(h,[C]){C&1&&Bt(l,h[0]),nt===(nt=Nt(h))&&T?T.p(h,C):(T.d(1),T=nt(h),T&&(T.c(),T.m(k,null))),h[1]?v?C&2&&xt(v,1):(v=Mt(),v.c(),xt(v,1),v.m(e,N)):v&&($t(),Vt(v,1,1,()=>{v=null}),Xt()),C&8&&F.value!==h[3]&&Ft(F,h[3])},i(h){xt(v)},o(h){Vt(v)},d(h){h&&(w(n),w(c),w(e)),T.d(),v&&v.d(),r[16](null),Ct=!1,At(St)}}}function ce(r,n,s){let a;Jt(r,Tt,p=>s(18,a=p));let l="en",i=!1,f=null,y="",c={deck:a.length?[...a]:[new te("empty list","add words")],current:0,face:"en",shuffle(){let p=this.deck.length,U,g;for(;p!==0;)g=Math.floor(Math.random()*p),p--,U=this.deck[p],this.deck[p]=this.deck[g],this.deck[g]=U;this.deck.sort((z,N)=>z.lvl-N.lvl),console.log(this.deck)},next(){this.current<this.deck.length-1?this.current+=1:(this.current=0,this.shuffle())},previous(){this.current>0?this.current-=1:this.current=this.deck.length-1},toggleFace(p="none"){if(p!=="none"){this.face=p;return}if(this.face==="en"){this.face="vn";return}if(this.face==="vn"){this.face="en";return}}};const e=()=>{c.deck[c.current].levelUp(),c.next(),c.toggleFace(l),s(4,c),lt(a)},k=()=>{c.deck[c.current].reset(),c.next(),c.toggleFace(l),s(4,c),lt(a)},O=()=>{c.toggleFace(),s(4,c)},M=()=>{const p=localStorage.getItem("appWords");p?(navigator.clipboard.writeText(p),s(1,i=!0),setTimeout(()=>{s(1,i=!1)},1e3)):console.log("There is no app data to copy")},W=()=>{const p=localStorage.getItem("appWords");if(p){const U=new Blob([p],{type:"text/plain"}),g=document.createElement("a"),z=URL.createObjectURL(U);g.href=z,g.setAttribute("download","en-vn-wordlist.txt"),g.style.display="none",document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(z)}else console.warn("won't download since there are no words in the list")},H=async()=>{const U=confirm(["This will replace your current word list and can't be reveresed",`

are you sure you wish to continue?`].join());if(f&&f.files&&U){const z=await f.files[0].text(),N=JSON.parse(z);lt(N)?(console.log("loaded succefuly"),Pt(Tt,a=jt(),a),s(4,c.deck=[...a],c),c.shuffle()):console.warn("couldn't save to localStorage")}},S=()=>{const p=JSON.parse(y);lt(p)?(console.log("loaded succefuly"),s(3,y=""),Pt(Tt,a=jt(),a),s(4,c.deck=[...a],c),c.shuffle()):console.warn("couldn't save to localStorage")},x=()=>{if(l==="en"){s(0,l="vn"),c.face==="en"&&c.toggleFace();return}if(l==="vn"){s(0,l="en"),c.face==="vn"&&c.toggleFace();return}};c.shuffle();const tt=()=>O(),X=()=>e(),B=()=>k();function et(p){Gt[p?"unshift":"push"](()=>{f=p,s(2,f)})}function Y(){y=this.value,s(3,y)}return[l,i,f,y,c,e,k,O,M,W,H,S,x,tt,X,B,et,Y]}class pe extends Kt{constructor(n){super(),Qt(this,n,ce,re,Ht,{})}}export{pe as component};