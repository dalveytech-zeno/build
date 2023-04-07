"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[447],{92419:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(87462),a=r(71002),o=r(1413),l=r(45987),s=r(62435),i=r(81263),u={adjustX:1,adjustY:1},c=[0,0],f={left:{points:["cr","cl"],overflow:u,offset:[-4,0],targetOffset:c},right:{points:["cl","cr"],overflow:u,offset:[4,0],targetOffset:c},top:{points:["bc","tc"],overflow:u,offset:[0,-4],targetOffset:c},bottom:{points:["tc","bc"],overflow:u,offset:[0,4],targetOffset:c},topLeft:{points:["bl","tl"],overflow:u,offset:[0,-4],targetOffset:c},leftTop:{points:["tr","tl"],overflow:u,offset:[-4,0],targetOffset:c},topRight:{points:["br","tr"],overflow:u,offset:[0,-4],targetOffset:c},rightTop:{points:["tl","tr"],overflow:u,offset:[4,0],targetOffset:c},bottomRight:{points:["tr","br"],overflow:u,offset:[0,4],targetOffset:c},rightBottom:{points:["bl","br"],overflow:u,offset:[4,0],targetOffset:c},bottomLeft:{points:["tl","bl"],overflow:u,offset:[0,4],targetOffset:c},leftBottom:{points:["br","bl"],overflow:u,offset:[-4,0],targetOffset:c}},d=r(94184),p=r.n(d);function b(e){var t=e.showArrow,r=e.arrowContent,n=e.children,a=e.prefixCls,o=e.id,l=e.overlayInnerStyle,i=e.className,u=e.style;return s.createElement("div",{className:p()("".concat(a,"-content"),i),style:u},!1!==t&&s.createElement("div",{className:"".concat(a,"-arrow"),key:"arrow"},r),s.createElement("div",{className:"".concat(a,"-inner"),id:o,role:"tooltip",style:l},"function"==typeof n?n():n))}var v=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],m=function(e,t){var r=e.overlayClassName,u=e.trigger,c=void 0===u?["hover"]:u,d=e.mouseEnterDelay,p=void 0===d?0:d,m=e.mouseLeaveDelay,g=void 0===m?.1:m,y=e.overlayStyle,x=e.prefixCls,h=void 0===x?"rc-tooltip":x,w=e.children,T=e.onVisibleChange,E=e.afterVisibleChange,O=e.transitionName,P=e.animation,C=e.motion,I=e.placement,A=void 0===I?"right":I,R=e.align,S=void 0===R?{}:R,k=e.destroyTooltipOnHide,N=void 0!==k&&k,z=e.defaultVisible,D=e.getTooltipContainer,L=e.overlayInnerStyle,j=e.arrowContent,M=e.overlay,V=e.id,F=e.showArrow,B=void 0===F||F,H=(0,l.Z)(e,v),Y=(0,s.useRef)(null);(0,s.useImperativeHandle)(t,(function(){return Y.current}));var G=(0,o.Z)({},H);"visible"in e&&(G.popupVisible=e.visible);var U=!1,Z=!1;if("boolean"==typeof N)U=N;else if(N&&"object"===(0,a.Z)(N)){var $=N.keepParent;U=!0===$,Z=!1===$}return s.createElement(i.Z,(0,n.Z)({popupClassName:r,prefixCls:h,popup:function(){return s.createElement(b,{showArrow:B,arrowContent:j,key:"content",prefixCls:h,id:V,overlayInnerStyle:L},M)},action:c,builtinPlacements:f,popupPlacement:A,ref:Y,popupAlign:S,getPopupContainer:D,onPopupVisibleChange:T,afterPopupVisibleChange:E,popupTransitionName:O,popupAnimation:P,popupMotion:C,defaultPopupVisible:z,destroyPopupOnHide:U,autoDestroy:Z,mouseLeaveDelay:g,popupStyle:y,mouseEnterDelay:p},G),w)},g=(0,s.forwardRef)(m)},8193:function(e,t,r){r.d(t,{$iz:function(){return a}});var n=r(88357);function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]})(e)}},88357:function(e,t,r){r.d(t,{w_:function(){return u}});var n=r(62435),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function i(e){return e&&e.map((function(e,t){return n.createElement(e.tag,l({key:t},e.attr),i(e.child))}))}function u(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),i(e.child))}}function c(e){var t=function(t){var r,a=e.attr,o=e.size,i=e.title,u=s(e,["attr","size","title"]),c=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},49808:function(e,t,r){r.d(t,{O:function(){return F}});var n=r(62435),a=r(12351),o=r(19946),l=r(32984),s=r(61363),i=r(84575),u=r(16723),c=r(23784),f=r(14157),d=r(3855),p=r(46045);function b({onFocus:e}){let[t,r]=(0,n.useState)(!0);return t?n.createElement(p._,{as:"button",type:"button",features:p.A.Focusable,onFocus:t=>{t.preventDefault();let n,a=50;n=requestAnimationFrame((function t(){if(!(a--<=0))return e()?(r(!1),void cancelAnimationFrame(n)):void(n=requestAnimationFrame(t));n&&cancelAnimationFrame(n)}))}}):null}var v,m,g,y=r(73781),x=r(81021),h=r(15466),w=((g=w||{})[g.Forwards=0]="Forwards",g[g.Backwards=1]="Backwards",g),T=((m=T||{})[m.Less=-1]="Less",m[m.Equal=0]="Equal",m[m.Greater=1]="Greater",m),E=((v=E||{})[v.SetSelectedIndex=0]="SetSelectedIndex",v[v.RegisterTab=1]="RegisterTab",v[v.UnregisterTab=2]="UnregisterTab",v[v.RegisterPanel=3]="RegisterPanel",v[v.UnregisterPanel=4]="UnregisterPanel",v);let O={0(e,t){var r;let n=(0,i.z2)(e.tabs,(e=>e.current)),a=(0,i.z2)(e.panels,(e=>e.current)),o=n.filter((e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))})),s={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let r=(0,l.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,l.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return{...s,selectedIndex:(0,l.E)(r,{0:()=>n.indexOf(o[0]),1:()=>n.indexOf(o[o.length-1])})}}let u=n.slice(0,t.index),c=[...n.slice(t.index),...u].find((e=>o.includes(e)));if(!c)return s;let f=null!=(r=n.indexOf(c))?r:e.selectedIndex;return-1===f&&(f=e.selectedIndex),{...s,selectedIndex:f}},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,i.z2)([...e.tabs,t.tab],(e=>e.current)),o=null!=(r=a.indexOf(n))?r:e.selectedIndex;return-1===o&&(o=e.selectedIndex),{...e,tabs:a,selectedIndex:o}},2(e,t){return{...e,tabs:e.tabs.filter((e=>e!==t.tab))}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:(0,i.z2)([...e.panels,t.panel],(e=>e.current))}},4(e,t){return{...e,panels:e.panels.filter((e=>e!==t.panel))}}},P=(0,n.createContext)(null);function C(e){let t=(0,n.useContext)(P);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,C),t}return t}P.displayName="TabsSSRContext";let I=(0,n.createContext)(null);function A(e){let t=(0,n.useContext)(I);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}I.displayName="TabsDataContext";let R=(0,n.createContext)(null);function S(e){let t=(0,n.useContext)(R);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,S),t}return t}function k(e,t){return(0,l.E)(t.type,O,e,t)}R.displayName="TabsActionsContext";let N=n.Fragment,z=(0,a.yV)((function(e,t){let{defaultIndex:r=0,vertical:o=!1,manual:l=!1,onChange:s,selectedIndex:f=null,...p}=e;const v=o?"vertical":"horizontal",m=l?"manual":"auto";let g=null!==f,x=(0,c.T)(t),[h,w]=(0,n.useReducer)(k,{selectedIndex:null!=f?f:r,tabs:[],panels:[]}),T=(0,n.useMemo)((()=>({selectedIndex:h.selectedIndex})),[h.selectedIndex]),E=(0,d.E)(s||(()=>{})),O=(0,d.E)(h.tabs),C=(0,n.useMemo)((()=>({orientation:v,activation:m,...h})),[v,m,h]),A=(0,y.z)((e=>(w({type:1,tab:e}),()=>w({type:2,tab:e})))),S=(0,y.z)((e=>(w({type:3,panel:e}),()=>w({type:4,panel:e})))),z=(0,y.z)((e=>{D.current!==e&&E.current(e),g||w({type:0,index:e})})),D=(0,d.E)(g?e.selectedIndex:h.selectedIndex),L=(0,n.useMemo)((()=>({registerTab:A,registerPanel:S,change:z})),[]);(0,u.e)((()=>{w({type:0,index:null!=f?f:r})}),[f]),(0,u.e)((()=>{if(void 0===D.current||h.tabs.length<=0)return;let e=(0,i.z2)(h.tabs,(e=>e.current));e.some(((e,t)=>h.tabs[t]!==e))&&z(e.indexOf(h.tabs[D.current]))}));let j=(0,n.useRef)({tabs:0,panels:0}),M={ref:x};return n.createElement(P.Provider,{value:j},n.createElement(R.Provider,{value:L},n.createElement(I.Provider,{value:C},C.tabs.length<=0&&n.createElement(b,{onFocus:()=>{var e,t;for(let r of O.current)if(0===(null==(e=r.current)?void 0:e.tabIndex))return null==(t=r.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:M,theirProps:p,slot:T,defaultTag:N,name:"Tabs"}))))})),D=(0,a.yV)((function(e,t){let{orientation:r,selectedIndex:n}=A("Tab.List"),o=(0,c.T)(t);return(0,a.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})})),L=(0,a.yV)((function(e,t){var r,d;let p=(0,o.M)(),{id:b=`headlessui-tabs-tab-${p}`,...v}=e,{orientation:m,activation:g,selectedIndex:w,tabs:T,panels:E}=A("Tab"),O=S("Tab"),P=A("Tab"),I=C("Tab"),R=(0,n.useRef)(null),k=(0,c.T)(R,t);(0,u.e)((()=>O.registerTab(R)),[O,R]);let N=(0,n.useRef)(-1);-1===N.current&&(N.current=I.current?I.current.tabs++:-1);let z=T.indexOf(R);-1===z&&(z=N.current);let D=z===w,L=(0,y.z)((e=>{var t;let r=e();if(r===i.fE.Success&&"auto"===g){let e=null==(t=(0,h.r)(R))?void 0:t.activeElement,r=P.tabs.findIndex((t=>t.current===e));-1!==r&&O.change(r)}return r})),j=(0,y.z)((e=>{let t=T.map((e=>e.current)).filter(Boolean);if(e.key===s.R.Space||e.key===s.R.Enter)return e.preventDefault(),e.stopPropagation(),void O.change(z);switch(e.key){case s.R.Home:case s.R.PageUp:return e.preventDefault(),e.stopPropagation(),L((()=>(0,i.jA)(t,i.TO.First)));case s.R.End:case s.R.PageDown:return e.preventDefault(),e.stopPropagation(),L((()=>(0,i.jA)(t,i.TO.Last)))}return L((()=>(0,l.E)(m,{vertical(){return e.key===s.R.ArrowUp?(0,i.jA)(t,i.TO.Previous|i.TO.WrapAround):e.key===s.R.ArrowDown?(0,i.jA)(t,i.TO.Next|i.TO.WrapAround):i.fE.Error},horizontal(){return e.key===s.R.ArrowLeft?(0,i.jA)(t,i.TO.Previous|i.TO.WrapAround):e.key===s.R.ArrowRight?(0,i.jA)(t,i.TO.Next|i.TO.WrapAround):i.fE.Error}})))===i.fE.Success?e.preventDefault():void 0})),M=(0,n.useRef)(!1),V=(0,y.z)((()=>{var e;M.current||(M.current=!0,null==(e=R.current)||e.focus(),O.change(z),(0,x.Y)((()=>{M.current=!1})))})),F=(0,y.z)((e=>{e.preventDefault()})),B=(0,n.useMemo)((()=>({selected:D})),[D]),H={ref:k,onKeyDown:j,onMouseDown:F,onClick:V,id:b,role:"tab",type:(0,f.f)(e,R),"aria-controls":null==(d=null==(r=E[z])?void 0:r.current)?void 0:d.id,"aria-selected":D,tabIndex:D?0:-1};return(0,a.sY)({ourProps:H,theirProps:v,slot:B,defaultTag:"button",name:"Tabs.Tab"})})),j=(0,a.yV)((function(e,t){let{selectedIndex:r}=A("Tab.Panels"),o=(0,c.T)(t),l=(0,n.useMemo)((()=>({selectedIndex:r})),[r]);return(0,a.sY)({ourProps:{ref:o},theirProps:e,slot:l,defaultTag:"div",name:"Tabs.Panels"})})),M=a.AN.RenderStrategy|a.AN.Static,V=(0,a.yV)((function(e,t){var r,l,s,i;let f=(0,o.M)(),{id:d=`headlessui-tabs-panel-${f}`,tabIndex:b=0,...v}=e,{selectedIndex:m,tabs:g,panels:y}=A("Tab.Panel"),x=S("Tab.Panel"),h=C("Tab.Panel"),w=(0,n.useRef)(null),T=(0,c.T)(w,t);(0,u.e)((()=>x.registerPanel(w)),[x,w]);let E=(0,n.useRef)(-1);-1===E.current&&(E.current=h.current?h.current.panels++:-1);let O=y.indexOf(w);-1===O&&(O=E.current);let P=O===m,I=(0,n.useMemo)((()=>({selected:P})),[P]),R={ref:T,id:d,role:"tabpanel","aria-labelledby":null==(l=null==(r=g[O])?void 0:r.current)?void 0:l.id,tabIndex:P?b:-1};return P||null!=(s=v.unmount)&&!s||null!=(i=v.static)&&i?(0,a.sY)({ourProps:R,theirProps:v,slot:I,defaultTag:"div",features:M,visible:P,name:"Tabs.Panel"}):n.createElement(p._,{as:"span",...R})})),F=Object.assign(L,{Group:z,List:D,Panels:j,Panel:V})},14157:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(62435),a=r(16723);function o(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";return"string"==typeof r&&"button"===r.toLowerCase()?"button":void 0}function l(e,t){let[r,l]=(0,n.useState)((()=>o(e)));return(0,a.e)((()=>{l(o(e))}),[e.type,e.as]),(0,a.e)((()=>{r||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&l("button")}),[r,t]),r}}}]);