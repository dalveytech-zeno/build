"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65],{61895:function(e,t,n){n.d(t,{Q6:function(){return l},dp:function(){return o}});var r=n(2593),a=n(70794),i=n(24069),s=n(36493);function l(e){return e instanceof r.O$?(0,a.Z)((0,i.dN)(e,18,2)):(0,a.Z)("..."===e?0:e)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-";if(null==e||isNaN(Number(e)))return{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(null==e?void 0:e.defaultDisplay)||"-"},number:l(0),value:n};var r=l(e),a=r.toFixed(t,1);return(0,s.R$)().showFullDecimals&&(a=r.toString()),{display:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.thousandSeparator,n=void 0===t||t,i=e.prefix,s=void 0===i?"$":i,l=e.suffix,o=void 0===l?"":l,d=n?c(a):a,u=s||"";return r.lt(0)&&s&&(u="-".concat(u),d=d.slice(1)),"".concat(u).concat(d).concat(o||"")},number:r,value:0==+a?"0":a}}function c(e){return e?e.replace(/\d+/,(function(e){return e.replace(/(\d)(?=(\d{3})+$)/g,(function(e){return e+","}))})):""}},37432:function(e,t,n){n.d(t,{x:function(){return s}});var r=n(34713),a=n(13805),i=n(65334);function s(){var e=(0,r.Ge)().chainId;if(!e){var t=localStorage.getItem(i.HC);t&&((e=parseInt(t))||localStorage.removeItem(i.HC))}return e&&a.FQ.includes(e)||(e=a.rC),{chainId:e}}},70733:function(e,t,n){n.r(t),n.d(t,{default:function(){return ge}});var r=n(15009),a=n.n(r),i=n(99289),s=n.n(i),l=n(5574),o=n.n(l),c=n(62435),d=n(4480),u=n(97857),m=n.n(u),v=n(24069),p=n(28722),x=function(){var e=(new Date).getTime(),t=(e-864e5).toString().substring(0,10);return{to:e.toString().substring(0,10),from:t}},f=function(){var e=s()(a()().mark((function e(){var t,n,r,i,s,l,o,c;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x(),t.to,n=t.from,r='\n  query MyQuery {\n    summaries24h: summaries(where:{id_gte:"hourly:'.concat(n,'", period: "hourly"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n    }\n    summariesTotal: summaries(where:{period: "total"}){\n      openInterest\n      trades\n      tradingVolume\n      uniqueUsers\n    }\n  }\n '),e.next=4,(0,p.Dw)(p.Jx,r);case 4:return i=e.sent,s=i.summariesTotal,l=i.summaries24h,o=h(l||[]),c=h(s),e.abrupt("return",m()({openInterestTotal:c.openInterest,tradesTotal:c.trades,tradingVolumeTotal:c.tradingVolume,uniqueUsersTotal:c.uniqueUsers},o));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(e){var t=null==e?void 0:e.reduce((function(e,t){var n;return e.openInterest=e.openInterest.add((0,v._b)(t.openInterest)),e.trades+=t.trades,e.tradingVolume=e.tradingVolume.add((0,v._b)(t.tradingVolume)),e.uniqueUsers+=null!==(n=null==t?void 0:t.uniqueUsers)&&void 0!==n?n:0,e}),{openInterest:(0,v._b)(0),trades:0,tradingVolume:(0,v._b)(0),uniqueUsers:0});return t?{openInterest:(0,v.dN)(null==t?void 0:t.openInterest,18),trades:null==t?void 0:t.trades,tradingVolume:(0,v.dN)(null==t?void 0:t.tradingVolume,18),uniqueUsers:null==t?void 0:t.uniqueUsers}:t},_=function(){var e=s()(a()().mark((function e(t){var n,r,i,s,l,o,c,d,u;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x(),n.to,r=n.from,i='marketInfos(where:{id_gte:"hourly:'.concat(r,'", period: "hourly"})\n  {\n  openInterest\n  period\n  trades\n  tradingVolume\n  id'),s="query MyQuery {\n    ".concat(i,"\n  }\n}"),e.next=5,(0,p.Dw)(p.Jx,s);case 5:return l=e.sent,o=l.marketInfos,c={name:"ETH",key:"Ethereum",coinName:"ETH",marketName:"Ethereum",logo:"ETH"},d=h(o),u=m()(m()({},c),d),e.abrupt("return",[u]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=n(40819),I=n(4872),j="overview___Eeiei",N="header____Yrjj",y="title___i6w1f",Z="welcome___Onf4q",b=Object.defineProperty,w=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,E=(e,t,n)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const C=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))M.call(t,n)&&E(e,n,t[n]);if(w)for(var n of w(t))T.call(t,n)&&E(e,n,t[n]);return e})({width:240,height:240,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("g",{opacity:.08,fillRule:"evenodd",clipRule:"evenodd",fill:"#fff"},c.createElement("path",{d:"M157.266 144.844c0 34.302-27.808 62.109-62.11 62.109V188.32c24.012 0 43.477-19.465 43.477-43.476 0-24.012-19.465-43.477-43.477-43.477-24.011 0-43.476 19.465-43.476 43.477H33.047c0-34.302 27.807-62.11 62.11-62.11 34.301 0 62.109 27.808 62.109 62.11ZM187.657 156.024c-2.542 21.258-12.244 40.317-26.624 54.697l-13.614-13.614c10.885-10.885 18.39-25.149 20.808-41.083h19.43Zm.663-10.773.001-.407-.001-.407v.814ZM83.976 52.344C62.718 54.886 43.66 64.587 29.28 78.967l13.615 13.615c10.884-10.885 25.148-18.39 41.082-20.808v-19.43Z"}),c.createElement("path",{d:"M188.36 144.844c0-51.453-41.711-93.164-93.164-93.164h-.04v19.254h.04c40.82 0 73.911 33.09 73.911 73.91h19.253Z"}),c.createElement("path",{d:"M95.156 20.625c68.604 0 124.219 55.615 124.219 124.219h-18.633c0-58.314-47.272-105.586-105.586-105.586V20.625Z"})));var O=n(61895),k="banner___oOBkY",D="logo___lRdUn",V="statList___DgXJu",G="statInfo___rRaIr",S="title___qD2Se",R="amount___oAiPx",L="desc___kJh0S",A=n(86074),P=function(e){var t=e.title,n=e.desc,r=e.amount,a=e.text;return(0,A.jsxs)("div",{className:G,children:[(0,A.jsx)("div",{className:S,children:t}),r&&(0,A.jsxs)("div",{className:R,children:["$".concat(r)," "]}),a&&(0,A.jsxs)("div",{className:R,children:[a," "]}),(0,A.jsxs)("div",{className:L,children:[n," "]})]})},U=function(e){var t,n,r=e.info;return(0,A.jsxs)("div",{className:k,children:[(0,A.jsx)(C,{className:D}),(0,A.jsxs)("div",{className:V,children:[(0,A.jsx)(P,{title:"Trading Volume",amount:(0,O.dp)(null==r?void 0:r.tradingVolumeTotal).display({prefix:""}),desc:"".concat((0,O.dp)(null==r?void 0:r.tradingVolume).display({prefix:"+$"})," in the last 24h")}),(0,A.jsx)(P,{title:"Trades",text:null!==(t=null==r?void 0:r.tradesTotal)&&void 0!==t?t:"-",desc:"+".concat(null!==(n=null==r?void 0:r.trades)&&void 0!==n?n:"-"," in the last 24h")}),(0,A.jsx)(P,{title:"Open Interest",amount:(0,O.dp)(null==r?void 0:r.openInterestTotal).display({prefix:""}),desc:"".concat((0,O.dp)(null==r?void 0:r.openInterest).display({prefix:"+$"})," in the last 24h")})]})]})},F=n(78621);Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var z=n(74595),W=n(94320),X=n(48268),J=n(36493),Y="table___J3lm8",q="marketSituationPanel___l_1QO",B="coinNameBox___gX9IN",H="logo___G1bcn",Q="coinName___YSs6X",$="marketName___aKkCt",K="up___xF4SL",ee="down___M1zxR",te="options___OoBW8",ne="tradeBtn___vTlXs",re={ETH:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMTZDMCA3LjE2MyA3LjE2MyAwIDE2IDBzMTYgNy4xNjMgMTYgMTYtNy4xNjMgMTYtMTYgMTZTMCAyNC44MzcgMCAxNloiIGZpbGw9IiM2ODdFRTMiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMC40NlY1TDguODgxIDE2LjMyOGw3LjExNyA0LjEzMVoiIGZpbGw9IiNmZmYiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDIwLjQ2VjVsNy4xMTcgMTEuMzI4TDE2IDIwLjQ2WiIgZmlsbD0iI0Y0RjRGNCIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMTUuOTk4IDI3IDcuMTE4LTEwLjEwOEwxNiAyMS42NjUgOC44OCAxNi44OTIgMTUuOTk4IDI3WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtOC44OCAxNi4zMjggNy4xMTgtMy4wMDR2Ny4xMzVsLTcuMTE3LTQuMTMxWiIgZmlsbD0iI0VFRSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuMTE3IDE2LjMyOCAxNiAxMy4zMjR2Ny4xMzVsNy4xMTgtNC4xM1oiIGZpbGw9IiNEQURBREEiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1Ljk5OCAyMS42NjVWMjdsNy4xMTgtMTAuMTA4LTcuMTE4IDQuNzczWiIgZmlsbD0iI0VFRSIvPjwvc3ZnPg=="},ae=function(e){var t=z.I.useContainer().isMobile,n=(0,d.sJ)(I.O7),r=e.marketInfo,a=[{title:"Market",dataIndex:"coinName",key:"coinName",render:function(e,t){return(0,A.jsxs)("div",{className:B,children:[(0,A.jsx)("div",{className:H,style:{backgroundImage:"url(".concat(re[t.logo],")")}}),(0,A.jsx)("span",{className:Q,children:t.coinName}),(0,A.jsx)("span",{className:$,children:t.marketName})]})}},{title:"Index Price",render:function(e,t){var r,a,i=null===(r=n[null===(a=(0,J.do)(t.name))||void 0===a?void 0:a.toLowerCase()])||void 0===r?void 0:r.indexPrice;return(0,A.jsx)(X.Z,{value:i,prefix:"$"})}},{title:"24h Change",render:function(e,t){var r,a,i,s=null==n||null===(r=n[null===(i=(0,J.do)(t.name))||void 0===i?void 0:i.toLowerCase()])||void 0===r||null===(a=r["24ChangeRate"])||void 0===a?void 0:a.toFixed(2);return s?+s>=0?(0,A.jsxs)("span",{className:K,children:["+",s,"%"]}):(0,A.jsxs)("span",{className:ee,children:[s,"%"]}):"-"}},{title:"24h Trades",dataIndex:"trades",key:"trades",render:function(e){return(0,A.jsx)(A.Fragment,{children:null!=e?e:"-"})}},{title:"24h Volume",dataIndex:"tradingVolume",key:"tradingVolume",render:function(e){return(0,A.jsx)(X.Z,{value:e,prefix:"$"})}},{title:"Open Interest",dataIndex:"openInterest",key:"openInterest",render:function(e){return(0,A.jsx)(X.Z,{value:e,prefix:"$"})}},{width:120,title:"",render:function(){return(0,A.jsx)("div",{className:te,children:(0,A.jsx)(F.OL,{to:"/trade",className:ne,children:"Trade"})})}}];return(0,A.jsx)("div",{className:q,children:(0,A.jsx)(W.Z,{emptyText:"No data",className:Y,columns:t?a.slice(0,3):a,dataSource:r,size:"small",pagination:!1,bordered:!1})})},ie=n(71230),se=n(15746),le=n(79369),oe=n(87755),ce=Object.defineProperty,de=Object.getOwnPropertySymbols,ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const pe=e=>c.createElement("svg",((e,t)=>{for(var n in t||(t={}))ue.call(t,n)&&ve(e,n,t[n]);if(de)for(var n of de(t))me.call(t,n)&&ve(e,n,t[n]);return e})({width:48,height:48,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M42.328 8.172A4 4 0 0 0 39.5 7h-31a4 4 0 0 0-4 4v25a4 4 0 0 0 4 4h2a2 2 0 0 0 4 0h19a2 2 0 0 0 4 0h2a4 4 0 0 0 4-4V11a4 4 0 0 0-1.172-2.828ZM9 9a2.5 2.5 0 0 0-2.5 2.5v24A2.5 2.5 0 0 0 9 38h30a2.5 2.5 0 0 0 2.5-2.5v-24A2.5 2.5 0 0 0 39 9H9Z",fill:"url(#overview_statistical_icon3_svg__a)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"m18.437 18.44 5.056-1.85a1.48 1.48 0 0 1 .89-.04l.124.04 5.056 1.849c.256.094.48.256.645.47.165.212.264.466.287.733l.005.117v3.778a6.223 6.223 0 0 1-.915 3.242 6.432 6.432 0 0 1-2.486 2.33l-.192.099-2.422 1.18a1.104 1.104 0 0 1-.866.045l-.104-.045-2.422-1.181a6.447 6.447 0 0 1-2.565-2.248 6.231 6.231 0 0 1-1.024-3.212l-.004-.211v-3.777c0-.267.078-.528.224-.754.146-.225.356-.405.603-.52l.11-.045Zm5.836 1.111 2.722 1.057a.78.78 0 0 1 .348.268.822.822 0 0 1 .154.42l.003.066v2.159a3.72 3.72 0 0 1-.493 1.853 3.556 3.556 0 0 1-1.338 1.331l-.104.057-1.304.674a.568.568 0 0 1-.466.026l-.056-.026-1.304-.675a3.546 3.546 0 0 1-1.381-1.285 3.714 3.714 0 0 1-.552-1.835l-.002-.12v-2.159c0-.152.042-.301.12-.43a.787.787 0 0 1 .325-.297l.344.705.008.022h1.22l-.767.298v1.85l.002.1c.015.432.142.85.364 1.208.224.36.534.647.893.833l.991.513.98-.507.083-.045c.351-.199.65-.495.86-.861a2.47 2.47 0 0 0 .327-1.23V21.66l-.769-.299h1.198l-1.21-.005-1.469-.57-1.44.56-1.271-.006-.007-.018-.337-.687.06-.027 2.722-1.057a.753.753 0 0 1 .48-.022l.066.022Zm1.196 1.805-2.908-.01-.043.016h2.963l-.012-.006Z",fill:"url(#overview_statistical_icon3_svg__b)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 10a1.5 1.5 0 0 0-1.5 1.5v24A1.5 1.5 0 0 0 9 37h30a1.5 1.5 0 0 0 1.5-1.5v-24A1.5 1.5 0 0 0 39 10H9Zm14.064 5.416-.821.3-4.26 1.559-.157.065-.023.01a2.684 2.684 0 0 0-1.127.975 2.634 2.634 0 0 0-.426 1.434v3.788l.004.232v.01a7.48 7.48 0 0 0 1.23 3.856 7.697 7.697 0 0 0 3.061 2.685l2.45 1.196.164.07.03.01a2.359 2.359 0 0 0 1.843-.094l2.434-1.186.21-.108.008-.004a7.682 7.682 0 0 0 2.968-2.784 7.474 7.474 0 0 0 1.098-3.893v-3.805l-.007-.17-.003-.027a2.639 2.639 0 0 0-.545-1.393 2.693 2.693 0 0 0-1.203-.877l-5.08-1.859-.178-.056-.028-.007a2.728 2.728 0 0 0-1.642.073Z",fill:"url(#overview_statistical_icon3_svg__c)"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.383 16.55a1.48 1.48 0 0 0-.89.04l-5.056 1.85-.11.045a1.434 1.434 0 0 0-.603.52 1.384 1.384 0 0 0-.224.754v3.777l.004.211a6.231 6.231 0 0 0 1.024 3.212 6.447 6.447 0 0 0 2.565 2.248l2.422 1.181.104.045a1.106 1.106 0 0 0 .866-.045l2.422-1.18.192-.099a6.432 6.432 0 0 0 2.486-2.33c.599-.98.915-2.101.915-3.242v-3.778l-.005-.117a1.388 1.388 0 0 0-.288-.734 1.442 1.442 0 0 0-.644-.469l-5.056-1.85-.124-.039Zm-.177 2.979a.753.753 0 0 0-.479.022l-2.722 1.057-.06.027a.787.787 0 0 0-.324.297.827.827 0 0 0-.121.43v2.159l.002.12c.02.652.212 1.286.552 1.835.34.55.817.993 1.38 1.285l1.305.675.056.026a.566.566 0 0 0 .466-.026l1.304-.674.104-.057a3.556 3.556 0 0 0 1.338-1.331c.323-.56.493-1.2.493-1.853v-2.159l-.003-.067a.822.822 0 0 0-.154-.419.78.78 0 0 0-.348-.268l-2.722-1.057-.067-.022Z",fill:"#3CEAAA"}),c.createElement("defs",null,c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__a",x1:24,y1:7.256,x2:24,y2:41.758,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#5C72FF"}),c.createElement("stop",{offset:.411,stopColor:"#5C72FF",stopOpacity:.707}),c.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.5})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__b",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#5C72FF"}),c.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7})),c.createElement("linearGradient",{id:"overview_statistical_icon3_svg__c",x1:24,y1:9.934,x2:24,y2:37.066,gradientUnits:"userSpaceOnUse"},c.createElement("stop",{stopColor:"#5C72FF"}),c.createElement("stop",{offset:1,stopColor:"#5C72FF",stopOpacity:.7}))));var xe=n(77438),fe=n(96714),he={statisticalDataGrid:"statisticalDataGrid___eZhQf",item:"item___bDuaw",btn:"btn___iPiGO",primary:"primary___pCrr1",text:"text___zIh8r",head:"head___phrnC",content:"content___zlm0M",footer:"footer___bvtie",icon:"icon___tWS5N"},_e=function(e){var t=e.info;return(0,A.jsxs)(ie.Z,{className:he.StatisticalDataGrid,gutter:24,children:[(0,A.jsx)(se.Z,{xs:24,md:12,lg:8,className:he.gutterRow,children:(0,A.jsxs)("div",{className:he.item,children:[(0,A.jsxs)("div",{className:he.head,children:[(0,A.jsx)("div",{className:he.text,children:"Up to 20%"}),(0,A.jsx)(le.r,{className:he.icon})]}),(0,A.jsx)("div",{className:he.content,children:"Stake USDC and earn rewadrs from fees generated on the DEI."}),(0,A.jsx)("div",{className:he.footer,children:(0,A.jsx)(xe.Z,{className:he.btn,type:"primary",size:"middle",href:"/trade",children:"Earn"})})]})}),(0,A.jsx)(se.Z,{xs:24,md:12,lg:8,children:(0,A.jsxs)("div",{className:he.item,children:[(0,A.jsxs)("div",{className:he.head,children:[(0,A.jsx)("div",{className:he.text,children:"<0.10%"}),(0,A.jsx)(oe.r,{className:he.icon})]}),(0,A.jsx)("div",{className:he.content,children:"Lowest transaction fees."}),(0,A.jsx)("div",{className:he.footer,children:(0,A.jsx)(xe.Z,{className:he.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})}),(0,A.jsx)(se.Z,{xs:24,md:12,lg:8,children:(0,A.jsxs)("div",{className:he.item,children:[(0,A.jsxs)("div",{className:he.head,children:[(0,A.jsx)("div",{className:he.text,children:null!=t&&t.uniqueUsersTotal?"".concat(null==t?void 0:t.uniqueUsersTotal,"+"):fe.P}),(0,A.jsx)(pe,{className:he.icon})]}),(0,A.jsx)("div",{className:he.content,children:"Trusted by over ".concat(null==t?void 0:t.uniqueUsersTotal," traders.")}),(0,A.jsx)("div",{className:he.footer,children:(0,A.jsx)(xe.Z,{className:he.btn,type:"c20",size:"middle",href:"#",children:"Learn More"})})]})})]})},ge=function(){var e=(0,c.useState)(),t=o()(e,2),n=t[0],r=t[1],i=(0,c.useState)([]),l=o()(i,2),u=l[0],m=l[1],v=(0,d.sJ)(I.tr),p=function(){var e=s()(a()().mark((function e(t){var n,i;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:return n=e.sent,e.next=5,_(null==t?void 0:t.map((function(e){return e.name})));case 5:i=e.sent,r(n),m(i);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){p(v);var e=setInterval(p,6e4);return function(){return clearInterval(e)}}),[v]),(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)("div",{className:j,children:[(0,A.jsxs)("div",{className:N,children:[(0,A.jsx)("div",{className:y,children:"Hello！"}),(0,A.jsx)("div",{className:Z,children:"Welcome to Dei.io."})]}),(0,A.jsx)(U,{info:n}),(0,A.jsx)(ae,{marketInfo:u,markets:v}),(0,A.jsx)(_e,{info:n}),(0,A.jsx)(g.a,{})]})})}},15746:function(e,t,n){var r=n(21584);t.Z=r.Z},71230:function(e,t,n){var r=n(92820);t.Z=r.Z}}]);