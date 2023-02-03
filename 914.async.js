"use strict";var ht=Object.defineProperty,_t=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var Ge=Object.getOwnPropertySymbols;var it=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var lt=(M,c,t)=>c in M?ht(M,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):M[c]=t,Ee=(M,c)=>{for(var t in c||(c={}))it.call(c,t)&&lt(M,t,c[t]);if(Ge)for(var t of Ge(c))at.call(c,t)&&lt(M,t,c[t]);return M},Fe=(M,c)=>_t(M,gt(c));var oe=(M,c)=>{var t={};for(var e in M)it.call(M,e)&&c.indexOf(e)<0&&(t[e]=M[e]);if(M!=null&&Ge)for(var e of Ge(M))c.indexOf(e)<0&&at.call(M,e)&&(t[e]=M[e]);return t};var st=(M,c,t)=>new Promise((e,o)=>{var u=m=>{try{f(t.next(m))}catch(i){o(i)}},l=m=>{try{f(t.throw(m))}catch(i){o(i)}},f=m=>m.done?e(m.value):Promise.resolve(m.value).then(u,l);f((t=t.apply(M,c)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[914],{39516:function(M,c,t){t.d(c,{d:function(){return B},f:function(){return A}});var e=t(62435),o=t(19946),u=t(12351),l=t(16723),f=t(23784),m=t(73781);let i=(0,e.createContext)(null);function g(){let L=(0,e.useContext)(i);if(L===null){let h=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(h,g),h}return L}function A(){let[L,h]=(0,e.useState)([]);return[L.length>0?L.join(" "):void 0,(0,e.useMemo)(()=>function(P){let b=(0,m.z)(D=>(h(r=>[...r,D]),()=>h(r=>{let y=r.slice(),x=y.indexOf(D);return x!==-1&&y.splice(x,1),y}))),S=(0,e.useMemo)(()=>({register:b,slot:P.slot,name:P.name,props:P.props}),[b,P.slot,P.name,P.props]);return e.createElement(i.Provider,{value:S},P.children)},[h])]}let w="p",B=(0,u.yV)(function(L,h){let P=(0,o.M)(),x=L,{id:b=`headlessui-description-${P}`}=x,S=oe(x,["id"]),D=g(),r=(0,f.T)(h);(0,l.e)(()=>D.register(b),[b,D.register]);let y=Fe(Ee({ref:r},D.props),{id:b});return(0,u.sY)({ourProps:y,theirProps:S,slot:D.slot||{},defaultTag:w,name:D.name||"Description"})})},82546:function(M,c,t){t.d(c,{V:function(){return ze}});var e=t(62435),o=t(32984),u=t(12351),l=t(23784),f=t(61363),m=t(64103),i=t(19946),g=t(82180),A=t(46045),w=t(84575),B=t(73781),L=t(3855);function h(n,d,s){let v=(0,L.E)(d);(0,e.useEffect)(()=>{function a(O){v.current(O)}return window.addEventListener(n,a,s),()=>window.removeEventListener(n,a,s)},[n,s])}var P=(n=>(n[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n))(P||{});function b(){let n=(0,e.useRef)(0);return h("keydown",d=>{d.key==="Tab"&&(n.current=d.shiftKey?1:0)},!0),n}var S=t(14879),D=t(51074);function r(n,d,s,v){let a=(0,L.E)(s);(0,e.useEffect)(()=>{n=n!=null?n:window;function O(_){a.current(_)}return n.addEventListener(d,O,v),()=>n.removeEventListener(d,O,v)},[n,d,v])}var y=t(81021);function x(n,d){let s=(0,e.useRef)([]),v=(0,B.z)(n);(0,e.useEffect)(()=>{let a=[...s.current];for(let[O,_]of d.entries())if(s.current[O]!==_){let T=v(d,a);return s.current=d,T}},[v,...d])}var R=t(94192);let $="div";var Y=(n=>(n[n.None=1]="None",n[n.InitialFocus=2]="InitialFocus",n[n.TabLock=4]="TabLock",n[n.FocusLock=8]="FocusLock",n[n.RestoreFocus=16]="RestoreFocus",n[n.All=30]="All",n))(Y||{});let N=Object.assign((0,u.yV)(function(n,d){let s=(0,e.useRef)(null),v=(0,l.T)(s,d),He=n,{initialFocus:a,containers:O,features:_=30}=He,T=oe(He,["initialFocus","containers","features"]);(0,g.H)()||(_=1);let V=(0,D.i)(s);de({ownerDocument:V},Boolean(_&16));let I=ue({ownerDocument:V,container:s,initialFocus:a},Boolean(_&2));se({ownerDocument:V,container:s,containers:O,previousActiveElement:I},Boolean(_&8));let j=b(),K=(0,B.z)(re=>{let Oe=s.current;Oe&&(De=>De())(()=>{(0,o.E)(j.current,{[P.Forwards]:()=>{(0,w.jA)(Oe,w.TO.First,{skipElements:[re.relatedTarget]})},[P.Backwards]:()=>{(0,w.jA)(Oe,w.TO.Last,{skipElements:[re.relatedTarget]})}})})}),Pe=(0,R.G)(),Q=(0,e.useRef)(!1),We={ref:v,onKeyDown(re){re.key=="Tab"&&(Q.current=!0,Pe.requestAnimationFrame(()=>{Q.current=!1}))},onBlur(re){let Oe=new Set(O==null?void 0:O.current);Oe.add(s);let De=re.relatedTarget;De instanceof HTMLElement&&De.dataset.headlessuiFocusGuard!=="true"&&(q(Oe,De)||(Q.current?(0,w.jA)(s.current,(0,o.E)(j.current,{[P.Forwards]:()=>w.TO.Next,[P.Backwards]:()=>w.TO.Previous})|w.TO.WrapAround,{relativeTo:re.target}):re.target instanceof HTMLElement&&(0,w.C5)(re.target)))}};return e.createElement(e.Fragment,null,Boolean(_&4)&&e.createElement(A._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:K,features:A.A.Focusable}),(0,u.sY)({ourProps:We,theirProps:T,defaultTag:$,name:"FocusTrap"}),Boolean(_&4)&&e.createElement(A._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:K,features:A.A.Focusable}))}),{features:Y});function de({ownerDocument:n},d){let s=(0,e.useRef)(null);r(n==null?void 0:n.defaultView,"focusout",a=>{!d||s.current||(s.current=a.target)},!0),x(()=>{d||((n==null?void 0:n.activeElement)===(n==null?void 0:n.body)&&(0,w.C5)(s.current),s.current=null)},[d]);let v=(0,e.useRef)(!1);(0,e.useEffect)(()=>(v.current=!1,()=>{v.current=!0,(0,y.Y)(()=>{!v.current||((0,w.C5)(s.current),s.current=null)})}),[])}function ue({ownerDocument:n,container:d,initialFocus:s},v){let a=(0,e.useRef)(null),O=(0,S.t)();return x(()=>{if(!v)return;let _=d.current;!_||(0,y.Y)(()=>{if(!O.current)return;let T=n==null?void 0:n.activeElement;if(s!=null&&s.current){if((s==null?void 0:s.current)===T){a.current=T;return}}else if(_.contains(T)){a.current=T;return}s!=null&&s.current?(0,w.C5)(s.current):(0,w.jA)(_,w.TO.First)===w.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=n==null?void 0:n.activeElement})},[v]),a}function se({ownerDocument:n,container:d,containers:s,previousActiveElement:v},a){let O=(0,S.t)();r(n==null?void 0:n.defaultView,"focus",_=>{if(!a||!O.current)return;let T=new Set(s==null?void 0:s.current);T.add(d);let V=v.current;if(!V)return;let I=_.target;I&&I instanceof HTMLElement?q(T,I)?(v.current=I,(0,w.C5)(I)):(_.preventDefault(),_.stopPropagation(),(0,w.C5)(V)):(0,w.C5)(v.current)},!0)}function q(n,d){var s;for(let v of n)if((s=v.current)!=null&&s.contains(d))return!0;return!1}var fe=t(15466),le=t(16723);let J=new Set,he=new Map;function Ke(n){n.setAttribute("aria-hidden","true"),n.inert=!0}function Ie(n){let d=he.get(n);!d||(d["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",d["aria-hidden"]),n.inert=d.inert)}function Ye(n,d=!0){(0,le.e)(()=>{if(!d||!n.current)return;let s=n.current,v=(0,fe.r)(s);if(v){J.add(s);for(let a of he.keys())a.contains(s)&&(Ie(a),he.delete(a));return v.querySelectorAll("body > *").forEach(a=>{if(a instanceof HTMLElement){for(let O of J)if(a.contains(O))return;J.size===1&&(he.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),Ke(a))}}),()=>{if(J.delete(s),J.size>0)v.querySelectorAll("body > *").forEach(a=>{if(a instanceof HTMLElement&&!he.has(a)){for(let O of J)if(a.contains(O))return;he.set(a,{"aria-hidden":a.getAttribute("aria-hidden"),inert:a.inert}),Ke(a)}});else for(let a of he.keys())Ie(a),he.delete(a)}}},[d])}var xe=t(61254);let Ve=(0,e.createContext)(!1);function Je(){return(0,e.useContext)(Ve)}function E(n){return e.createElement(Ve.Provider,{value:n.force},n.children)}var p=t(77896);function F(n){let d=Je(),s=(0,e.useContext)(Z),v=(0,D.i)(n),[a,O]=(0,e.useState)(()=>{if(!d&&s!==null||p.O.isServer)return null;let _=v==null?void 0:v.getElementById("headlessui-portal-root");if(_)return _;if(v===null)return null;let T=v.createElement("div");return T.setAttribute("id","headlessui-portal-root"),v.body.appendChild(T)});return(0,e.useEffect)(()=>{a!==null&&(v!=null&&v.body.contains(a)||v==null||v.body.appendChild(a))},[a,v]),(0,e.useEffect)(()=>{d||s!==null&&O(s.current)},[s,O,d]),a}let U=e.Fragment,ee=(0,u.yV)(function(n,d){let s=n,v=(0,e.useRef)(null),a=(0,l.T)((0,l.h)(j=>{v.current=j}),d),O=(0,D.i)(v),_=F(v),[T]=(0,e.useState)(()=>{var j;return p.O.isServer?null:(j=O==null?void 0:O.createElement("div"))!=null?j:null}),V=(0,g.H)(),I=(0,e.useRef)(!1);return(0,le.e)(()=>{if(I.current=!1,!(!_||!T))return _.contains(T)||(T.setAttribute("data-headlessui-portal",""),_.appendChild(T)),()=>{I.current=!0,(0,y.Y)(()=>{var j;!I.current||!_||!T||(T instanceof Node&&_.contains(T)&&_.removeChild(T),_.childNodes.length<=0&&((j=_.parentElement)==null||j.removeChild(_)))})}},[_,T]),V?!_||!T?null:(0,xe.createPortal)((0,u.sY)({ourProps:{ref:a},theirProps:s,defaultTag:U,name:"Portal"}),T):null}),ie=e.Fragment,Z=(0,e.createContext)(null),z=(0,u.yV)(function(n,d){let O=n,{target:s}=O,v=oe(O,["target"]),a={ref:(0,l.T)(d)};return e.createElement(Z.Provider,{value:s},(0,u.sY)({ourProps:a,theirProps:v,defaultTag:ie,name:"Popover.Group"}))}),k=Object.assign(ee,{Group:z});var W=t(39516),X=t(16567);let ve=(0,e.createContext)(()=>{});ve.displayName="StackContext";var me=(n=>(n[n.Add=0]="Add",n[n.Remove=1]="Remove",n))(me||{});function G(){return(0,e.useContext)(ve)}function C({children:n,onUpdate:d,type:s,element:v,enabled:a}){let O=G(),_=(0,B.z)((...T)=>{d==null||d(...T),O(...T)});return(0,le.e)(()=>{let T=a===void 0||a===!0;return T&&_(0,s,v),()=>{T&&_(1,s,v)}},[_,s,v,a]),e.createElement(ve.Provider,{value:_},n)}var te=t(39650),H=t(9362);function ne(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var ge=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(ge||{}),Te=(n=>(n[n.SetTitleId=0]="SetTitleId",n))(Te||{});let _e={[0](n,d){return n.titleId===d.id?n:Fe(Ee({},n),{titleId:d.id})}},be=(0,e.createContext)(null);be.displayName="DialogContext";function ye(n){let d=(0,e.useContext)(be);if(d===null){let s=new Error(`<${n} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,ye),s}return d}function Me(n,d,s=()=>[document.body]){(0,e.useEffect)(()=>{var v;if(!d||!n)return;let a=(0,H.k)(),O=window.pageYOffset;function _(I,j,K){let Pe=I.style.getPropertyValue(j);return Object.assign(I.style,{[j]:K}),a.add(()=>{Object.assign(I.style,{[j]:Pe})})}let T=n.documentElement,V=((v=n.defaultView)!=null?v:window).innerWidth-T.clientWidth;if(_(T,"overflow","hidden"),V>0){let I=T.clientWidth-T.offsetWidth,j=V-I;_(T,"paddingRight",`${j}px`)}if(ne()){_(n.body,"marginTop",`-${O}px`),window.scrollTo(0,0);let I=null;a.addEventListener(n,"click",j=>{if(j.target instanceof HTMLElement)try{let K=j.target.closest("a");if(!K)return;let{hash:Pe}=new URL(K.href),Q=n.querySelector(Pe);Q&&!s().some(We=>We.contains(Q))&&(I=Q)}catch(K){}},!0),a.addEventListener(n,"touchmove",j=>{j.target instanceof HTMLElement&&!s().some(K=>K.contains(j.target))&&j.preventDefault()},{passive:!1}),a.add(()=>{window.scrollTo(0,window.pageYOffset+O),I&&I.isConnected&&(I.scrollIntoView({block:"nearest"}),I=null)})}return a.dispose},[n,d])}function we(n,d){return(0,o.E)(d.type,_e,n,d)}let je="div",Be=u.AN.RenderStrategy|u.AN.Static,Ae=(0,u.yV)(function(n,d){let s=(0,i.M)(),ut=n,{id:v=`headlessui-dialog-${s}`,open:a,onClose:O,initialFocus:_,__demoMode:T=!1}=ut,V=oe(ut,["id","open","onClose","initialFocus","__demoMode"]),[I,j]=(0,e.useState)(0),K=(0,X.oJ)();a===void 0&&K!==null&&(a=(0,o.E)(K,{[X.ZM.Open]:!0,[X.ZM.Closed]:!1}));let Pe=(0,e.useRef)(new Set),Q=(0,e.useRef)(null),We=(0,l.T)(Q,d),He=(0,e.useRef)(null),re=(0,D.i)(Q),Oe=n.hasOwnProperty("open")||K!==null,De=n.hasOwnProperty("onClose");if(!Oe&&!De)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!Oe)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!De)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof a!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${a}`);if(typeof O!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${O}`);let pe=a?0:1,[Re,ct]=(0,e.useReducer)(we,{titleId:null,descriptionId:null,panelRef:(0,e.createRef)()}),Le=(0,B.z)(()=>O(!1)),nt=(0,B.z)(ae=>ct({type:0,id:ae})),et=(0,g.H)()?T?!1:pe===0:!1,$e=I>1,dt=(0,e.useContext)(be)!==null,ft=$e?"parent":"leaf";Ye(Q,$e?et:!1);let rt=(0,B.z)(()=>{var ae,Se;return[...Array.from((ae=re==null?void 0:re.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?ae:[]).filter(ce=>!(ce===document.body||ce===document.head||!(ce instanceof HTMLElement)||ce.contains(He.current)||Re.panelRef.current&&ce.contains(Re.panelRef.current))),(Se=Re.panelRef.current)!=null?Se:Q.current]});(0,te.O)(()=>rt(),Le,et&&!$e),r(re==null?void 0:re.defaultView,"keydown",ae=>{ae.defaultPrevented||ae.key===f.R.Escape&&pe===0&&($e||(ae.preventDefault(),ae.stopPropagation(),Le()))}),Me(re,pe===0&&!dt,rt),(0,e.useEffect)(()=>{if(pe!==0||!Q.current)return;let ae=new IntersectionObserver(Se=>{for(let ce of Se)ce.boundingClientRect.x===0&&ce.boundingClientRect.y===0&&ce.boundingClientRect.width===0&&ce.boundingClientRect.height===0&&Le()});return ae.observe(Q.current),()=>ae.disconnect()},[pe,Q,Le]);let[vt,mt]=(0,W.f)(),pt=(0,e.useMemo)(()=>[{dialogState:pe,close:Le,setTitleId:nt},Re],[pe,Re,Le,nt]),ot=(0,e.useMemo)(()=>({open:pe===0}),[pe]),Et={ref:We,id:v,role:"dialog","aria-modal":pe===0?!0:void 0,"aria-labelledby":Re.titleId,"aria-describedby":vt};return e.createElement(C,{type:"Dialog",enabled:pe===0,element:Q,onUpdate:(0,B.z)((ae,Se,ce)=>{Se==="Dialog"&&(0,o.E)(ae,{[me.Add](){Pe.current.add(ce),j(tt=>tt+1)},[me.Remove](){Pe.current.add(ce),j(tt=>tt-1)}})})},e.createElement(E,{force:!0},e.createElement(k,null,e.createElement(be.Provider,{value:pt},e.createElement(k.Group,{target:Q},e.createElement(E,{force:!1},e.createElement(mt,{slot:ot,name:"Dialog.Description"},e.createElement(N,{initialFocus:_,containers:Pe,features:et?(0,o.E)(ft,{parent:N.features.RestoreFocus,leaf:N.features.All&~N.features.FocusLock}):N.features.None},(0,u.sY)({ourProps:Et,theirProps:V,slot:ot,defaultTag:je,features:Be,visible:pe===0,name:"Dialog"})))))))),e.createElement(A._,{features:A.A.Hidden,ref:He}))}),Ne="div",Ue=(0,u.yV)(function(n,d){let s=(0,i.M)(),j=n,{id:v=`headlessui-dialog-overlay-${s}`}=j,a=oe(j,["id"]),[{dialogState:O,close:_}]=ye("Dialog.Overlay"),T=(0,l.T)(d),V=(0,B.z)(K=>{if(K.target===K.currentTarget){if((0,m.P)(K.currentTarget))return K.preventDefault();K.preventDefault(),K.stopPropagation(),_()}}),I=(0,e.useMemo)(()=>({open:O===0}),[O]);return(0,u.sY)({ourProps:{ref:T,id:v,"aria-hidden":!0,onClick:V},theirProps:a,slot:I,defaultTag:Ne,name:"Dialog.Overlay"})}),Ze="div",Xe=(0,u.yV)(function(n,d){let s=(0,i.M)(),I=n,{id:v=`headlessui-dialog-backdrop-${s}`}=I,a=oe(I,["id"]),[{dialogState:O},_]=ye("Dialog.Backdrop"),T=(0,l.T)(d);(0,e.useEffect)(()=>{if(_.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[_.panelRef]);let V=(0,e.useMemo)(()=>({open:O===0}),[O]);return e.createElement(E,{force:!0},e.createElement(k,null,(0,u.sY)({ourProps:{ref:T,id:v,"aria-hidden":!0},theirProps:a,slot:V,defaultTag:Ze,name:"Dialog.Backdrop"})))}),Qe="div",Ce=(0,u.yV)(function(n,d){let s=(0,i.M)(),j=n,{id:v=`headlessui-dialog-panel-${s}`}=j,a=oe(j,["id"]),[{dialogState:O},_]=ye("Dialog.Panel"),T=(0,l.T)(d,_.panelRef),V=(0,e.useMemo)(()=>({open:O===0}),[O]),I=(0,B.z)(K=>{K.stopPropagation()});return(0,u.sY)({ourProps:{ref:T,id:v,onClick:I},theirProps:a,slot:V,defaultTag:Qe,name:"Dialog.Panel"})}),ke="h2",qe=(0,u.yV)(function(n,d){let s=(0,i.M)(),I=n,{id:v=`headlessui-dialog-title-${s}`}=I,a=oe(I,["id"]),[{dialogState:O,setTitleId:_}]=ye("Dialog.Title"),T=(0,l.T)(d);(0,e.useEffect)(()=>(_(v),()=>_(null)),[v,_]);let V=(0,e.useMemo)(()=>({open:O===0}),[O]);return(0,u.sY)({ourProps:{ref:T,id:v},theirProps:a,slot:V,defaultTag:ke,name:"Dialog.Title"})}),ze=Object.assign(Ae,{Backdrop:Xe,Panel:Ce,Overlay:Ue,Title:qe,Description:W.d})},61363:function(M,c,t){t.d(c,{R:function(){return e}});var e=(o=>(o.Space=" ",o.Enter="Enter",o.Escape="Escape",o.Backspace="Backspace",o.Delete="Delete",o.ArrowLeft="ArrowLeft",o.ArrowUp="ArrowUp",o.ArrowRight="ArrowRight",o.ArrowDown="ArrowDown",o.Home="Home",o.End="End",o.PageUp="PageUp",o.PageDown="PageDown",o.Tab="Tab",o))(e||{})},11355:function(M,c,t){t.d(c,{u:function(){return Je}});var e=t(62435),o=t(12351),u=t(16567),l=t(32984),f=t(14879),m=t(16723),i=t(3855),g=t(82180),A=t(23784);function w(E){let p={called:!1};return(...F)=>{if(!p.called)return p.called=!0,E(...F)}}var B=t(9362);function L(E,...p){E&&p.length>0&&E.classList.add(...p)}function h(E,...p){E&&p.length>0&&E.classList.remove(...p)}function P(E,p){let F=(0,B.k)();if(!E)return F.dispose;let{transitionDuration:U,transitionDelay:ee}=getComputedStyle(E),[ie,Z]=[U,ee].map(z=>{let[k=0]=z.split(",").filter(Boolean).map(W=>W.includes("ms")?parseFloat(W):parseFloat(W)*1e3).sort((W,X)=>X-W);return k});if(ie+Z!==0){let z=F.addEventListener(E,"transitionend",k=>{k.target===k.currentTarget&&(p(),z())})}else p();return F.add(()=>p()),F.dispose}function b(E,p,F,U){let ee=F?"enter":"leave",ie=(0,B.k)(),Z=U!==void 0?w(U):()=>{};ee==="enter"&&(E.removeAttribute("hidden"),E.style.display="");let z=(0,l.E)(ee,{enter:()=>p.enter,leave:()=>p.leave}),k=(0,l.E)(ee,{enter:()=>p.enterTo,leave:()=>p.leaveTo}),W=(0,l.E)(ee,{enter:()=>p.enterFrom,leave:()=>p.leaveFrom});return h(E,...p.enter,...p.enterTo,...p.enterFrom,...p.leave,...p.leaveFrom,...p.leaveTo,...p.entered),L(E,...z,...W),ie.nextFrame(()=>{h(E,...W),L(E,...k),P(E,()=>(h(E,...z),L(E,...p.entered),Z()))}),ie.dispose}var S=t(94192);function D({container:E,direction:p,classes:F,onStart:U,onStop:ee}){let ie=(0,f.t)(),Z=(0,S.G)(),z=(0,i.E)(p);(0,m.e)(()=>{let k=(0,B.k)();Z.add(k.dispose);let W=E.current;if(W&&z.current!=="idle"&&ie.current)return k.dispose(),U.current(z.current),k.add(b(W,F.current,z.current==="enter",()=>{k.dispose(),ee.current(z.current)})),k.dispose},[p])}var r=t(73781),y=t(5003),x=t(77896);function R(E=""){return E.split(" ").filter(p=>p.trim().length>1)}let $=(0,e.createContext)(null);$.displayName="TransitionContext";var Y=(E=>(E.Visible="visible",E.Hidden="hidden",E))(Y||{});function N(){let E=(0,e.useContext)($);if(E===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return E}function de(){let E=(0,e.useContext)(ue);if(E===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return E}let ue=(0,e.createContext)(null);ue.displayName="NestingContext";function se(E){return"children"in E?se(E.children):E.current.filter(({el:p})=>p.current!==null).filter(({state:p})=>p==="visible").length>0}function q(E,p){let F=(0,i.E)(E),U=(0,e.useRef)([]),ee=(0,f.t)(),ie=(0,S.G)(),Z=(0,r.z)((G,C=o.l4.Hidden)=>{let te=U.current.findIndex(({el:H})=>H===G);te!==-1&&((0,l.E)(C,{[o.l4.Unmount](){U.current.splice(te,1)},[o.l4.Hidden](){U.current[te].state="hidden"}}),ie.microTask(()=>{var H;!se(U)&&ee.current&&((H=F.current)==null||H.call(F))}))}),z=(0,r.z)(G=>{let C=U.current.find(({el:te})=>te===G);return C?C.state!=="visible"&&(C.state="visible"):U.current.push({el:G,state:"visible"}),()=>Z(G,o.l4.Unmount)}),k=(0,e.useRef)([]),W=(0,e.useRef)(Promise.resolve()),X=(0,e.useRef)({enter:[],leave:[],idle:[]}),ve=(0,r.z)((G,C,te)=>{k.current.splice(0),p&&(p.chains.current[C]=p.chains.current[C].filter(([H])=>H!==G)),p==null||p.chains.current[C].push([G,new Promise(H=>{k.current.push(H)})]),p==null||p.chains.current[C].push([G,new Promise(H=>{Promise.all(X.current[C].map(([ne,ge])=>ge)).then(()=>H())})]),C==="enter"?W.current=W.current.then(()=>p==null?void 0:p.wait.current).then(()=>te(C)):te(C)}),me=(0,r.z)((G,C,te)=>{Promise.all(X.current[C].splice(0).map(([H,ne])=>ne)).then(()=>{var H;(H=k.current.shift())==null||H()}).then(()=>te(C))});return(0,e.useMemo)(()=>({children:U,register:z,unregister:Z,onStart:ve,onStop:me,wait:W,chains:X}),[z,Z,U,ve,me,X,W])}function fe(){}let le=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function J(E){var p;let F={};for(let U of le)F[U]=(p=E[U])!=null?p:fe;return F}function he(E){let p=(0,e.useRef)(J(E));return(0,e.useEffect)(()=>{p.current=J(E)},[E]),p}let Ke="div",Ie=o.AN.RenderStrategy,Ye=(0,o.yV)(function(E,p){let ze=E,{beforeEnter:F,afterEnter:U,beforeLeave:ee,afterLeave:ie,enter:Z,enterFrom:z,enterTo:k,entered:W,leave:X,leaveFrom:ve,leaveTo:me}=ze,G=oe(ze,["beforeEnter","afterEnter","beforeLeave","afterLeave","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),C=(0,e.useRef)(null),te=(0,A.T)(C,p),H=G.unmount?o.l4.Unmount:o.l4.Hidden,{show:ne,appear:ge,initial:Te}=N(),[_e,be]=(0,e.useState)(ne?"visible":"hidden"),ye=de(),{register:Me,unregister:we}=ye,je=(0,e.useRef)(null);(0,e.useEffect)(()=>Me(C),[Me,C]),(0,e.useEffect)(()=>{if(H===o.l4.Hidden&&C.current){if(ne&&_e!=="visible"){be("visible");return}return(0,l.E)(_e,{hidden:()=>we(C),visible:()=>Me(C)})}},[_e,C,Me,we,ne,H]);let Be=(0,i.E)({enter:R(Z),enterFrom:R(z),enterTo:R(k),entered:R(W),leave:R(X),leaveFrom:R(ve),leaveTo:R(me)}),Ae=he({beforeEnter:F,afterEnter:U,beforeLeave:ee,afterLeave:ie}),Ne=(0,g.H)();(0,e.useEffect)(()=>{if(Ne&&_e==="visible"&&C.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[C,_e,Ne]);let Ue=Te&&!ge,Ze=(()=>!Ne||Ue||je.current===ne?"idle":ne?"enter":"leave")(),Xe=(0,r.z)(n=>(0,l.E)(n,{enter:()=>Ae.current.beforeEnter(),leave:()=>Ae.current.beforeLeave(),idle:()=>{}})),Qe=(0,r.z)(n=>(0,l.E)(n,{enter:()=>Ae.current.afterEnter(),leave:()=>Ae.current.afterLeave(),idle:()=>{}})),Ce=q(()=>{be("hidden"),we(C)},ye);D({container:C,classes:Be,direction:Ze,onStart:(0,i.E)(n=>{Ce.onStart(C,n,Xe)}),onStop:(0,i.E)(n=>{Ce.onStop(C,n,Qe),n==="leave"&&!se(Ce)&&(be("hidden"),we(C))})}),(0,e.useEffect)(()=>{!Ue||(H===o.l4.Hidden?je.current=null:je.current=ne)},[ne,Ue,_e]);let ke=G,qe={ref:te};return ge&&ne&&x.O.isServer&&(ke=Fe(Ee({},ke),{className:(0,y.A)(G.className,...Be.current.enter,...Be.current.enterFrom)})),e.createElement(ue.Provider,{value:Ce},e.createElement(u.up,{value:(0,l.E)(_e,{visible:u.ZM.Open,hidden:u.ZM.Closed})},(0,o.sY)({ourProps:qe,theirProps:ke,defaultTag:Ke,features:Ie,visible:_e==="visible",name:"Transition.Child"})))}),xe=(0,o.yV)(function(E,p){let ne=E,{show:F,appear:U=!1,unmount:ee}=ne,ie=oe(ne,["show","appear","unmount"]),Z=(0,e.useRef)(null),z=(0,A.T)(Z,p);(0,g.H)();let k=(0,u.oJ)();if(F===void 0&&k!==null&&(F=(0,l.E)(k,{[u.ZM.Open]:!0,[u.ZM.Closed]:!1})),![!0,!1].includes(F))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[W,X]=(0,e.useState)(F?"visible":"hidden"),ve=q(()=>{X("hidden")}),[me,G]=(0,e.useState)(!0),C=(0,e.useRef)([F]);(0,m.e)(()=>{me!==!1&&C.current[C.current.length-1]!==F&&(C.current.push(F),G(!1))},[C,F]);let te=(0,e.useMemo)(()=>({show:F,appear:U,initial:me}),[F,U,me]);(0,e.useEffect)(()=>{if(F)X("visible");else if(!se(ve))X("hidden");else{let ge=Z.current;if(!ge)return;let Te=ge.getBoundingClientRect();Te.x===0&&Te.y===0&&Te.width===0&&Te.height===0&&X("hidden")}},[F,ve]);let H={unmount:ee};return e.createElement(ue.Provider,{value:ve},e.createElement($.Provider,{value:te},(0,o.sY)({ourProps:Fe(Ee({},H),{as:e.Fragment,children:e.createElement(Ye,Ee(Ee({ref:z},H),ie))}),theirProps:{},defaultTag:e.Fragment,features:Ie,visible:W==="visible",name:"Transition"})))}),Ve=(0,o.yV)(function(E,p){let F=(0,e.useContext)($)!==null,U=(0,u.oJ)()!==null;return e.createElement(e.Fragment,null,!F&&U?e.createElement(xe,Ee({ref:p},E)):e.createElement(Ye,Ee({ref:p},E)))}),Je=Object.assign(xe,{Child:Ve,Root:xe})},94192:function(M,c,t){t.d(c,{G:function(){return u}});var e=t(62435),o=t(9362);function u(){let[l]=(0,e.useState)(o.k);return(0,e.useEffect)(()=>()=>l.dispose(),[l]),l}},73781:function(M,c,t){t.d(c,{z:function(){return u}});var e=t(62435),o=t(3855);let u=function(l){let f=(0,o.E)(l);return e.useCallback((...m)=>f.current(...m),[f])}},19946:function(M,c,t){t.d(c,{M:function(){return m}});var e=t(62435),o=t(16723),u=t(82180),l=t(77896),f;let m=(f=e.useId)!=null?f:function(){let i=(0,u.H)(),[g,A]=e.useState(i?()=>l.O.nextId():null);return(0,o.e)(()=>{g===null&&A(l.O.nextId())},[g]),g!=null?""+g:void 0}},14879:function(M,c,t){t.d(c,{t:function(){return u}});var e=t(62435),o=t(16723);function u(){let l=(0,e.useRef)(!1);return(0,o.e)(()=>(l.current=!0,()=>{l.current=!1}),[]),l}},16723:function(M,c,t){t.d(c,{e:function(){return u}});var e=t(62435),o=t(77896);let u=(l,f)=>{o.O.isServer?(0,e.useEffect)(l,f):(0,e.useLayoutEffect)(l,f)}},3855:function(M,c,t){t.d(c,{E:function(){return u}});var e=t(62435),o=t(16723);function u(l){let f=(0,e.useRef)(l);return(0,o.e)(()=>{f.current=l},[l]),f}},39650:function(M,c,t){t.d(c,{O:function(){return f}});var e=t(62435),o=t(84575),u=t(3855);function l(m,i,g){let A=(0,u.E)(i);(0,e.useEffect)(()=>{function w(B){A.current(B)}return document.addEventListener(m,w,g),()=>document.removeEventListener(m,w,g)},[m,g])}function f(m,i,g=!0){let A=(0,e.useRef)(!1);(0,e.useEffect)(()=>{requestAnimationFrame(()=>{A.current=g})},[g]);function w(L,h){if(!A.current||L.defaultPrevented)return;let P=function S(D){return typeof D=="function"?S(D()):Array.isArray(D)||D instanceof Set?D:[D]}(m),b=h(L);if(b!==null&&b.getRootNode().contains(b)){for(let S of P){if(S===null)continue;let D=S instanceof HTMLElement?S:S.current;if(D!=null&&D.contains(b)||L.composed&&L.composedPath().includes(D))return}return!(0,o.sP)(b,o.tJ.Loose)&&b.tabIndex!==-1&&L.preventDefault(),i(L,b)}}let B=(0,e.useRef)(null);l("mousedown",L=>{var h,P;A.current&&(B.current=((P=(h=L.composedPath)==null?void 0:h.call(L))==null?void 0:P[0])||L.target)},!0),l("click",L=>{!B.current||(w(L,()=>B.current),B.current=null)},!0),l("blur",L=>w(L,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},51074:function(M,c,t){t.d(c,{i:function(){return u}});var e=t(62435),o=t(15466);function u(...l){return(0,e.useMemo)(()=>(0,o.r)(...l),[...l])}},82180:function(M,c,t){t.d(c,{H:function(){return u}});var e=t(62435),o=t(77896);function u(){let[l,f]=(0,e.useState)(o.O.isHandoffComplete);return l&&o.O.isHandoffComplete===!1&&f(!1),(0,e.useEffect)(()=>{l!==!0&&f(!0)},[l]),(0,e.useEffect)(()=>o.O.handoff(),[]),l}},23784:function(M,c,t){t.d(c,{T:function(){return f},h:function(){return l}});var e=t(62435),o=t(73781);let u=Symbol();function l(m,i=!0){return Object.assign(m,{[u]:i})}function f(...m){let i=(0,e.useRef)(m);(0,e.useEffect)(()=>{i.current=m},[m]);let g=(0,o.z)(A=>{for(let w of i.current)w!=null&&(typeof w=="function"?w(A):w.current=A)});return m.every(A=>A==null||(A==null?void 0:A[u]))?void 0:g}},46045:function(M,c,t){t.d(c,{A:function(){return u},_:function(){return l}});var e=t(12351);let o="div";var u=(f=>(f[f.None=1]="None",f[f.Focusable=2]="Focusable",f[f.Hidden=4]="Hidden",f))(u||{});let l=(0,e.yV)(function(f,m){let w=f,{features:i=1}=w,g=oe(w,["features"]),A={ref:m,"aria-hidden":(i&2)===2?!0:void 0,style:Ee({position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},(i&4)===4&&(i&2)!==2&&{display:"none"})};return(0,e.sY)({ourProps:A,theirProps:g,slot:{},defaultTag:o,name:"Hidden"})})},16567:function(M,c,t){t.d(c,{ZM:function(){return u},oJ:function(){return l},up:function(){return f}});var e=t(62435);let o=(0,e.createContext)(null);o.displayName="OpenClosedContext";var u=(m=>(m[m.Open=0]="Open",m[m.Closed=1]="Closed",m))(u||{});function l(){return(0,e.useContext)(o)}function f({value:m,children:i}){return e.createElement(o.Provider,{value:m},i)}},64103:function(M,c,t){t.d(c,{P:function(){return e}});function e(u){let l=u.parentElement,f=null;for(;l&&!(l instanceof HTMLFieldSetElement);)l instanceof HTMLLegendElement&&(f=l),l=l.parentElement;let m=(l==null?void 0:l.getAttribute("disabled"))==="";return m&&o(f)?!1:m}function o(u){if(!u)return!1;let l=u.previousElementSibling;for(;l!==null;){if(l instanceof HTMLLegendElement)return!1;l=l.previousElementSibling}return!0}},5003:function(M,c,t){t.d(c,{A:function(){return e}});function e(...o){return o.filter(Boolean).join(" ")}},9362:function(M,c,t){t.d(c,{k:function(){return o}});var e=t(81021);function o(){let u=[],l=[],f={enqueue(i){l.push(i)},addEventListener(i,g,A,w){return i.addEventListener(g,A,w),f.add(()=>i.removeEventListener(g,A,w))},requestAnimationFrame(...i){let g=requestAnimationFrame(...i);return f.add(()=>cancelAnimationFrame(g))},nextFrame(...i){return f.requestAnimationFrame(()=>f.requestAnimationFrame(...i))},setTimeout(...i){let g=setTimeout(...i);return f.add(()=>clearTimeout(g))},microTask(...i){let g={current:!0};return(0,e.Y)(()=>{g.current&&i[0]()}),f.add(()=>{g.current=!1})},add(i){return u.push(i),()=>{let g=u.indexOf(i);if(g>=0){let[A]=u.splice(g,1);A()}}},dispose(){for(let i of u.splice(0))i()},workQueue(){return st(this,null,function*(){for(let i of l.splice(0))yield i()})}};return f}},77896:function(M,c,t){t.d(c,{O:function(){return f}});var e=Object.defineProperty,o=(m,i,g)=>i in m?e(m,i,{enumerable:!0,configurable:!0,writable:!0,value:g}):m[i]=g,u=(m,i,g)=>(o(m,typeof i!="symbol"?i+"":i,g),g);class l{constructor(){u(this,"current",this.detect()),u(this,"handoffState","pending"),u(this,"currentId",0)}set(i){this.current!==i&&(this.handoffState="pending",this.currentId=0,this.current=i)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let f=new l},84575:function(M,c,t){t.d(c,{C5:function(){return L},EO:function(){return S},TO:function(){return f},fE:function(){return m},jA:function(){return D},sP:function(){return w},tJ:function(){return A},wI:function(){return B},z2:function(){return b}});var e=t(9362),o=t(32984),u=t(15466);let l=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(r=>`${r}:not([tabindex='-1'])`).join(",");var f=(r=>(r[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r))(f||{}),m=(r=>(r[r.Error=0]="Error",r[r.Overflow=1]="Overflow",r[r.Success=2]="Success",r[r.Underflow=3]="Underflow",r))(m||{}),i=(r=>(r[r.Previous=-1]="Previous",r[r.Next=1]="Next",r))(i||{});function g(r=document.body){return r==null?[]:Array.from(r.querySelectorAll(l)).sort((y,x)=>Math.sign((y.tabIndex||Number.MAX_SAFE_INTEGER)-(x.tabIndex||Number.MAX_SAFE_INTEGER)))}var A=(r=>(r[r.Strict=0]="Strict",r[r.Loose=1]="Loose",r))(A||{});function w(r,y=0){var x;return r===((x=(0,u.r)(r))==null?void 0:x.body)?!1:(0,o.E)(y,{[0](){return r.matches(l)},[1](){let R=r;for(;R!==null;){if(R.matches(l))return!0;R=R.parentElement}return!1}})}function B(r){let y=(0,u.r)(r);(0,e.k)().nextFrame(()=>{y&&!w(y.activeElement,0)&&L(r)})}function L(r){r==null||r.focus({preventScroll:!0})}let h=["textarea","input"].join(",");function P(r){var y,x;return(x=(y=r==null?void 0:r.matches)==null?void 0:y.call(r,h))!=null?x:!1}function b(r,y=x=>x){return r.slice().sort((x,R)=>{let $=y(x),Y=y(R);if($===null||Y===null)return 0;let N=$.compareDocumentPosition(Y);return N&Node.DOCUMENT_POSITION_FOLLOWING?-1:N&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function S(r,y){return D(g(),y,{relativeTo:r})}function D(r,y,{sorted:x=!0,relativeTo:R=null,skipElements:$=[]}={}){let Y=Array.isArray(r)?r.length>0?r[0].ownerDocument:document:r.ownerDocument,N=Array.isArray(r)?x?b(r):r:g(r);$.length>0&&N.length>1&&(N=N.filter(J=>!$.includes(J))),R=R!=null?R:Y.activeElement;let de=(()=>{if(y&5)return 1;if(y&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),ue=(()=>{if(y&1)return 0;if(y&2)return Math.max(0,N.indexOf(R))-1;if(y&4)return Math.max(0,N.indexOf(R))+1;if(y&8)return N.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),se=y&32?{preventScroll:!0}:{},q=0,fe=N.length,le;do{if(q>=fe||q+fe<=0)return 0;let J=ue+q;if(y&16)J=(J+fe)%fe;else{if(J<0)return 3;if(J>=fe)return 1}le=N[J],le==null||le.focus(se),q+=de}while(le!==Y.activeElement);return y&6&&P(le)&&le.select(),le.hasAttribute("tabindex")||le.setAttribute("tabindex","0"),2}},32984:function(M,c,t){t.d(c,{E:function(){return e}});function e(o,u,...l){if(o in u){let m=u[o];return typeof m=="function"?m(...l):m}let f=new Error(`Tried to handle "${o}" but there is no handler defined. Only defined handlers are: ${Object.keys(u).map(m=>`"${m}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,e),f}},81021:function(M,c,t){t.d(c,{Y:function(){return e}});function e(o){typeof queueMicrotask=="function"?queueMicrotask(o):Promise.resolve().then(o).catch(u=>setTimeout(()=>{throw u}))}},15466:function(M,c,t){t.d(c,{r:function(){return o}});var e=t(77896);function o(u){return e.O.isServer?null:u instanceof Node?u.ownerDocument:u!=null&&u.hasOwnProperty("current")&&u.current instanceof Node?u.current.ownerDocument:document}},12351:function(M,c,t){t.d(c,{AN:function(){return l},l4:function(){return f},oA:function(){return B},sY:function(){return m},yV:function(){return w}});var e=t(62435),o=t(5003),u=t(32984),l=(h=>(h[h.None=0]="None",h[h.RenderStrategy=1]="RenderStrategy",h[h.Static=2]="Static",h))(l||{}),f=(h=>(h[h.Unmount=0]="Unmount",h[h.Hidden=1]="Hidden",h))(f||{});function m({ourProps:h,theirProps:P,slot:b,defaultTag:S,features:D,visible:r=!0,name:y}){let x=A(P,h);if(r)return i(x,b,S,y);let R=D!=null?D:0;if(R&2){let $=x,{static:N=!1}=$,de=oe($,["static"]);if(N)return i(de,b,S,y)}if(R&1){let Y=x,{unmount:N=!0}=Y,de=oe(Y,["unmount"]);return(0,u.E)(N?0:1,{[0](){return null},[1](){return i(Fe(Ee({},de),{hidden:!0,style:{display:"none"}}),b,S,y)}})}return i(x,b,S,y)}function i(h,P={},b,S){var D;let de=L(h,["unmount","static"]),{as:r=b,children:y,refName:x="ref"}=de,R=oe(de,["as","children","refName"]),$=h.ref!==void 0?{[x]:h.ref}:{},Y=typeof y=="function"?y(P):y;R.className&&typeof R.className=="function"&&(R.className=R.className(P));let N={};if(P){let ue=!1,se=[];for(let[q,fe]of Object.entries(P))typeof fe=="boolean"&&(ue=!0),fe===!0&&se.push(q);ue&&(N["data-headlessui-state"]=se.join(" "))}if(r===e.Fragment&&Object.keys(B(R)).length>0){if(!(0,e.isValidElement)(Y)||Array.isArray(Y)&&Y.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${S} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(R).map(q=>`  - ${q}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(q=>`  - ${q}`).join(`
`)].join(`
`));let ue=(0,o.A)((D=Y.props)==null?void 0:D.className,R.className),se=ue?{className:ue}:{};return(0,e.cloneElement)(Y,Object.assign({},A(Y.props,B(L(R,["ref"]))),N,$,g(Y.ref,$.ref),se))}return(0,e.createElement)(r,Object.assign({},L(R,["ref"]),r!==e.Fragment&&$,r!==e.Fragment&&N),Y)}function g(...h){return{ref:h.every(P=>P==null)?void 0:P=>{for(let b of h)b!=null&&(typeof b=="function"?b(P):b.current=P)}}}function A(...h){var P;if(h.length===0)return{};if(h.length===1)return h[0];let b={},S={};for(let D of h)for(let r in D)r.startsWith("on")&&typeof D[r]=="function"?((P=S[r])!=null||(S[r]=[]),S[r].push(D[r])):b[r]=D[r];if(b.disabled||b["aria-disabled"])return Object.assign(b,Object.fromEntries(Object.keys(S).map(D=>[D,void 0])));for(let D in S)Object.assign(b,{[D](r,...y){let x=S[D];for(let R of x){if((r instanceof Event||(r==null?void 0:r.nativeEvent)instanceof Event)&&r.defaultPrevented)return;R(r,...y)}}});return b}function w(h){var P;return Object.assign((0,e.forwardRef)(h),{displayName:(P=h.displayName)!=null?P:h.name})}function B(h){let P=Object.assign({},h);for(let b in P)P[b]===void 0&&delete P[b];return P}function L(h,P=[]){let b=Object.assign({},h);for(let S of P)S in b&&delete b[S];return b}}}]);
