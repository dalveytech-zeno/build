"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{50127:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var a=n(42122),s=n.n(a),i=n(27424),r=n.n(i),l=n(34713),o=n(62435),u=n(4480),d=n(59734),p=n(17061),c=n.n(p),y=n(17156),m=n.n(y),f=n(28722),x=function(){var e=m()(c()().mark((function e(t){var n,a,i,r,l;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),e.next=4,(0,f.Dw)(f.Jx,a);case 4:return i=e.sent,r=i.users,l=s()(s()({},null==r?void 0:r[0]),n),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=m()(c()().mark((function e(t){var n,a,i,r;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n    }\n  }'),a={},e.next=4,(0,f.Dw)(f.Jx,n);case 4:return i=e.sent,r=i.users,console.log("---users---",r),e.abrupt("return",s()(s()({},null==r?void 0:r[0]),a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=n(24069),_=n(56690),v=n.n(_),g=n(89728),T=n.n(g),j=n(61655),M=n.n(j),w=n(26389),I=n.n(w),N=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_fundFee","type":"address"},{"internalType":"address","name":"_openFee","type":"address"},{"internalType":"address","name":"_closeFee","type":"address"},{"internalType":"address","name":"_execFee","type":"address"},{"internalType":"address","name":"_liquidate","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_FRATE_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATE_FEE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"execFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_mkt","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"getAccountFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"}],"name":"getCloseFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getCloseRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getCollateralFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getExecFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"getFees","outputs":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getLiquidateFee","outputs":[{"internalType":"uint256","name":"lf","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getLiquidateFees","outputs":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"},{"internalType":"int256","name":"_liqFee","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getLiquidateFees2","outputs":[{"components":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"},{"internalType":"int256","name":"_liqFee","type":"int256"}],"internalType":"struct IFeeRouter.FeeOuts","name":"outs","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"}],"name":"getOpenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getOpenRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrecision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidateFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setCloseFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setCloseFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setExecFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setExecFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_store","type":"address"}],"name":"setFeeStore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setFundFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setLiquidateAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setLiquidateFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setOpenFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setOpenFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_book","type":"address"}],"name":"setPositionBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"int256","name":"_openFee","type":"int256"},{"internalType":"int256","name":"_closeFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_liquidateFee","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"}],"name":"updateAccountFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"updateFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),F=function(e){M()(a,e);var t,n=I()(a);function a(e,t){return v()(this,a),n.call(this,e,t,N.Mt)}return T()(a,[{key:"getClassName",value:function(){return"FeeRouter"}},{key:"getAccountFees",value:(t=m()(c()().mark((function e(t,n){var a;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAccountFees",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})}]),a}(n(76935).k),$=function(){var e=m()(c()().mark((function e(t,n,a,s){var i,r,l;return c()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new F(t,n),e.next=3,i.getAccountFees(a,s);case 3:return r=e.sent,l=null==r?void 0:r.reduce((function(e,t){var n;return e=null===(n=e)||void 0===n?void 0:n.add(t)}),(0,h._b)(0)),e.abrupt("return",null==l?void 0:l.toString());case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),C=n(2076),Z="more___v_xdE",E=n(71944),O=n(6226),A=n(3410),k=n(30026),L=n(77438),z=n(96714),D=n(9679),P={item:"item___FRv2D",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},R=n(86074),S=function(){return(0,R.jsxs)("div",{className:P.fundFeeInfo,children:[(0,R.jsxs)("b",{children:[(0,R.jsx)(A._H,{id:"Fund"}),(0,R.jsx)(A._H,{id:"Fee"})]}),(0,R.jsxs)("div",{children:[(0,R.jsx)(A._H,{id:"fundFeeInfoP1"}),(0,R.jsx)("br",{}),(0,R.jsx)(A._H,{id:"fundFeeInfoP2"})]})]})},V=function(e){var t=e.tradingData;return(0,R.jsxs)(E.Z,{className:P.tradingInfo,gutter:24,children:[(0,R.jsx)(O.Z,{xs:24,lg:12,children:(0,R.jsxs)("div",{className:P.item,children:[(0,R.jsx)("div",{className:P.head,children:"Trading Data"}),(0,R.jsxs)(E.Z,{className:P.content,children:[(0,R.jsxs)(O.Z,{span:8,className:P.cell,children:[(0,R.jsx)("div",{className:P.fieldValue,children:null!=t&&t.totalVolume?"$".concat((0,z.zg)(null==t?void 0:t.totalVolume)):"-"}),(0,R.jsx)("div",{className:P.fieldName,children:"Total volume"})]}),(0,R.jsxs)(O.Z,{span:8,className:P.cell,children:[(0,R.jsx)("div",{className:P.fieldValue,children:null!=t&&t.feesPaid?"$".concat((0,z.zg)(null==t?void 0:t.feesPaid)):"-"}),(0,R.jsx)("div",{className:P.fieldName,children:"Fees Paid"})]}),(0,R.jsxs)(O.Z,{span:8,className:P.cell,children:[(0,R.jsx)("div",{className:P.fieldValue,children:null!=t&&t.realizedPnl?"$".concat((0,z.zg)(null==t?void 0:t.realizedPnl)):"-"}),(0,R.jsx)("div",{className:P.fieldName,children:"PNL"})]})]}),(0,R.jsx)(L.Z,{className:P.footer,href:"/trade",children:"Trade"})]})}),(0,R.jsx)(O.Z,{xs:24,lg:12,children:(0,R.jsxs)("div",{className:P.item,children:[(0,R.jsx)("div",{className:P.head,children:"Trading Fees"}),(0,R.jsxs)(E.Z,{className:P.content,children:[(0,R.jsxs)(O.Z,{span:12,className:P.cell,children:[(0,R.jsx)("div",{className:P.fieldValue,children:"0.1000%"}),(0,R.jsx)("div",{className:P.fieldName,children:"Open/Close Fee"})]}),(0,R.jsxs)(O.Z,{span:10,offset:2,className:P.cell,children:[(0,R.jsx)("div",{className:P.fieldValue,children:"0.0020% / 1h"}),(0,R.jsx)(D.Z,{placement:"topLeft",overlay:(0,R.jsx)(S,{}),children:(0,R.jsxs)("div",{className:"".concat(P.fieldName," ").concat(P.fee),children:["Fund Fee ",(0,R.jsx)(k.r,{className:P.icon})]})})]})]}),(0,R.jsx)(L.Z,{className:P.footer,type:"c20",href:"#",children:"Read More"})]})})]})},G=n(610),W=n.n(G),B=n(70794),Q=n(74855),H=n.n(Q),Y=Object.defineProperty,U=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const K=e=>o.createElement("svg",((e,t)=>{for(var n in t||(t={}))J.call(t,n)&&q(e,n,t[n]);if(U)for(var n of U(t))X.call(t,n)&&q(e,n,t[n]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),o.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var ee=n(11289),te=n(74595),ne=n(87943),ae=n(13805),se=n(22837),ie=n(71874),re=n(1403),le=n(16330),oe="content___oCbRs",ue="mainText___omv2g",de="pnlContainer____9bQB",pe="pnl___A7Mzd",ce="winRate____2WVz",ye="prices___xdV4Q",me="priceContainer___ioeHG",fe="priceTitle___RSAFh",xe="priceValue___s4toj",be=function(e){var t=e.userInfo;return(0,R.jsxs)("div",{className:oe,children:[(0,R.jsxs)("span",{className:ue,children:["I made ",(0,R.jsx)("b",{children:t.trades})," trades on DEI Come on with me!"]}),(0,R.jsxs)("div",{className:de,children:[(0,R.jsx)("span",{className:pe,children:(0,R.jsx)(A._H,{id:"Winrate"})}),(0,R.jsx)("span",{className:ce,children:(null!=t&&t.winRate?(0,B.O)(null==t?void 0:t.winRate).multipliedBy(100).toFixed(2,1):"-")+"%"})]}),(0,R.jsx)("div",{className:ye,children:[{titleId:"profit",value:(0,z.zg)(null==t?void 0:t.avgProfit)+"%"},{titleId:"loss",value:(0,z.zg)(null==t?void 0:t.avgLoss)+"%"}].map((function(e){return(0,R.jsxs)("div",{className:me,children:[(0,R.jsxs)("span",{className:fe,children:[(0,R.jsx)(A._H,{id:"Average"})," ",(0,R.jsx)(A._H,{id:e.titleId})]}),(0,R.jsx)("span",{className:xe,children:e.value})]},e.titleId)}))})]})},he={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"},_e=function(e){var t=e.displayAccount,n=e.account;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("span",{children:null!=t?t:"-"}),(0,R.jsx)(H(),{text:null!=n?n:"",onCopy:function(){ie.U.success("Address copied to your clipboard")},children:(0,R.jsx)(K,{className:he.copy})})]})},ve=function(e){var t,n=e.userInfo,a=te.I.useContainer().setWalletVisible,s=(0,l.Ge)(),i=s.deactivate,r=s.account,u=(0,re.E)(ae.p4).provider,d=(0,o.useCallback)((function(){(0,le.VK)(),(0,le.hL)(),i()}),[i]);var p=(0,o.useMemo)((function(){return r&&r.length>13?"".concat(r.slice(0,5),"...").concat(r.slice(r.length-4)):r}),[r]),c=[{name:"Trades",value:null!==(t=null==n?void 0:n.trades)&&void 0!==t?t:"-"},{name:"Winrate",value:(null!=n&&n.winRate?(0,B.O)(null==n?void 0:n.winRate).multipliedBy(100).toFixed(2,1):"-")+"%"},{name:"Average profit",value:(0,z.zg)(null==n?void 0:n.avgProfit)+"%",xsValue:10},{name:"Average loss",value:(0,z.zg)(null==n?void 0:n.avgLoss)+"%"}];return(0,R.jsxs)(E.Z,{className:he.walletInfo,children:[(0,R.jsx)(O.Z,{xs:24,md:12,className:he.left,children:(0,R.jsxs)(E.Z,{style:{width:"100%"},children:[(0,R.jsx)(O.Z,{flex:"100px",style:{height:80},children:r?(0,R.jsx)(W(),{size:80,address:null!=r?r:"",provider:u}):(0,R.jsx)("img",{className:he.avatar,src:ee.Z})}),(0,R.jsx)(O.Z,{className:he.h5Address,children:(0,R.jsx)(_e,{displayAccount:p,account:r})}),(0,R.jsxs)(O.Z,{className:he.details,flex:"auto",children:[(0,R.jsx)(E.Z,{className:he.address,children:(0,R.jsx)(_e,{displayAccount:p,account:r})}),(0,R.jsx)(E.Z,{className:he.cells,children:c.map((function(e,t){return(0,R.jsxs)(O.Z,{className:he.cell,lg:6,xs:e.xsValue||7,children:[(0,R.jsx)("span",{className:he.fieldValue,children:e.value}),(0,R.jsx)("span",{className:he.fieldName,children:e.name})]},t)}))})]})]})}),(0,R.jsxs)(O.Z,{xs:24,md:8,className:he.right,children:[r&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(ne.T,{title:"Share",downloadName:"Dei.io_share",content:(0,R.jsx)(ne.v,{children:(0,R.jsx)(be,{userInfo:n})}),children:(0,R.jsx)(L.Z,{className:"".concat(he.shareBtn),children:(0,R.jsx)(A._H,{id:"Share"})})}),(0,R.jsx)(L.Z,{className:he.btn,href:"#",type:"c30",onClick:function(){return d(),localStorage.removeItem(se.Cs),void localStorage.removeItem(se.Wr)},children:(0,R.jsx)(A._H,{id:"Disconnect"})})]}),!r&&(0,R.jsx)(L.Z,{className:he.btn,href:"#",onClick:function(){return a(!0)},children:"Connect Wallet"})]})]})},ge=function(){var e=(0,l.Ge)(),t=e.account,n=e.library,a=e.chainId,i=(0,u.FV)((0,C.N6)(a)),p=r()(i,1)[0],c=(0,d.ZP)(t,(function(e){return x(t||"")})).data,y=(0,d.ZP)([t],(function(){return b(t||"")})).data,m=(0,d.ZP)("getAccountFees",(function(){return $(n,a,t,null==p?void 0:p.address)})).data,f=(0,o.useMemo)((function(){return m?s()(s()({},y),{},{feesPaid:m}):y}),[m,y]);return(0,R.jsxs)("div",{className:Z,children:[(0,R.jsx)(ve,{userInfo:c}),(0,R.jsx)(V,{tradingData:f})]})},Te=function(){return(0,R.jsx)(u.Wh,{children:(0,R.jsx)(ge,{})})}},11289:function(e,t,n){n.d(t,{r:function(){return u}});var a=n(62435),s=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const u=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&o(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&o(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.594 18.438a7.031 7.031 0 0 1-7.032 7.03V23.36a4.922 4.922 0 1 0-4.921-4.922H6.53a7.031 7.031 0 1 1 14.063 0Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.035 19.703a10.515 10.515 0 0 1-3.014 6.192l-1.541-1.541a8.345 8.345 0 0 0 2.355-4.65h2.2Zm.075-1.222v-.087.087ZM12.298 7.966a10.516 10.516 0 0 0-6.193 3.014l1.542 1.541a8.344 8.344 0 0 1 4.65-2.356v-2.2ZM24.114 18.438c0-5.825-4.722-10.547-10.547-10.547h-.005v2.18h.005a8.367 8.367 0 0 1 8.367 8.367h2.18Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.563 4.375c7.766 0 14.062 6.296 14.062 14.063h-2.11c0-6.602-5.351-11.954-11.953-11.954V4.375Z",fill:"#fff"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTk0IDE4LjQzOGE3LjAzMSA3LjAzMSAwIDAgMS03LjAzMiA3LjAzVjIzLjM2YTQuOTIyIDQuOTIyIDAgMSAwLTQuOTIxLTQuOTIySDYuNTNhNy4wMzEgNy4wMzEgMCAxIDEgMTQuMDYzIDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMzUgMTkuNzAzYTEwLjUxNSAxMC41MTUgMCAwIDEtMy4wMTQgNi4xOTJsLTEuNTQxLTEuNTQxYTguMzQ1IDguMzQ1IDAgMCAwIDIuMzU1LTQuNjVoMi4yWm0uMDc1LTEuMjIydi0uMDg3LjA4N1pNMTIuMjk4IDcuOTY2YTEwLjUxNiAxMC41MTYgMCAwIDAtNi4xOTMgMy4wMTRsMS41NDIgMS41NDFhOC4zNDQgOC4zNDQgMCAwIDEgNC42NS0yLjM1NnYtMi4yWk0yNC4xMTQgMTguNDM4YzAtNS44MjUtNC43MjItMTAuNTQ3LTEwLjU0Ny0xMC41NDdoLS4wMDV2Mi4xOGguMDA1YTguMzY3IDguMzY3IDAgMCAxIDguMzY3IDguMzY3aDIuMThaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NjMgNC4zNzVjNy43NjYgMCAxNC4wNjIgNi4yOTYgMTQuMDYyIDE0LjA2M2gtMi4xMWMwLTYuNjAyLTUuMzUxLTExLjk1NC0xMS45NTMtMTEuOTU0VjQuMzc1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="},6226:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(94184),s=n.n(a),i=n(62435),r=n(53124),l=n(99134),o=n(6999),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n};const d=["xs","sm","md","lg","xl","xxl"];var p=i.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:a}=i.useContext(r.E_),{gutter:p,wrap:c,supportFlexGap:y}=i.useContext(l.Z),{prefixCls:m,span:f,order:x,offset:b,push:h,pull:_,className:v,children:g,flex:T,style:j}=e,M=u(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),w=n("col",m),[I,N]=(0,o.c)(w);let F={};d.forEach((t=>{let n={};const s=e[t];"number"==typeof s?n.span=s:"object"==typeof s&&(n=s||{}),delete M[t],F=Object.assign(Object.assign({},F),{[`${w}-${t}-${n.span}`]:void 0!==n.span,[`${w}-${t}-order-${n.order}`]:n.order||0===n.order,[`${w}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${w}-${t}-push-${n.push}`]:n.push||0===n.push,[`${w}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${w}-rtl`]:"rtl"===a})}));const $=s()(w,{[`${w}-${f}`]:void 0!==f,[`${w}-order-${x}`]:x,[`${w}-offset-${b}`]:b,[`${w}-push-${h}`]:h,[`${w}-pull-${_}`]:_},v,F,N),C={};if(p&&p[0]>0){const e=p[0]/2;C.paddingLeft=e,C.paddingRight=e}if(p&&p[1]>0&&!y){const e=p[1]/2;C.paddingTop=e,C.paddingBottom=e}return T&&(C.flex=function(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(T),!1!==c||C.minWidth||(C.minWidth=0)),I(i.createElement("div",Object.assign({},M,{style:Object.assign(Object.assign({},C),j),className:$,ref:t}),g))}))},99134:function(e,t,n){const a=(0,n(62435).createContext)({});t.Z=a},6999:function(e,t,n){n.d(t,{V:function(){return o},c:function(){return u}});var a=n(67968),s=n(45503);const i=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around ":{justifyContent:"space-around"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},r=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},l=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:a}=e,s={};for(let e=a;e>=0;e--)0===e?(s[`${n}${t}-${e}`]={display:"none"},s[`${n}-push-${e}`]={insetInlineStart:"auto"},s[`${n}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-push-${e}`]={insetInlineStart:"auto"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:"auto"},s[`${n}${t}-offset-${e}`]={marginInlineEnd:0},s[`${n}${t}-order-${e}`]={order:0}):(s[`${n}${t}-${e}`]={display:"block",flex:`0 0 ${e/a*100}%`,maxWidth:e/a*100+"%"},s[`${n}${t}-push-${e}`]={insetInlineStart:e/a*100+"%"},s[`${n}${t}-pull-${e}`]={insetInlineEnd:e/a*100+"%"},s[`${n}${t}-offset-${e}`]={marginInlineStart:e/a*100+"%"},s[`${n}${t}-order-${e}`]={order:e});return s})(e,t),o=(0,a.Z)("Grid",(e=>[i(e)])),u=(0,a.Z)("Grid",(e=>{const t=(0,s.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[r(t),l(t,""),l(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},l(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},71944:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(94184),s=n.n(a),i=n(62435),r=n(53124),l=n(98924);let o;const u=()=>{if(!(0,l.Z)()||!window.document.documentElement)return!1;if(void 0!==o)return o;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=1===e.scrollHeight,document.body.removeChild(e),o};var d=n(21823);const p=["xxl","xl","lg","md","sm","xs"];function c(){const[,e]=(0,d.dQ)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(p).reverse();return n.forEach(((e,a)=>{const s=e.toUpperCase(),i=`screen${s}Min`,r=`screen${s}`;if(!(t[i]<=t[r]))throw new Error(`${i}<=${r} fails : !(${t[i]}<=${t[r]})`);if(a<n.length-1){const e=`screen${s}Max`;if(!(t[r]<=t[e]))throw new Error(`${r}<=${e} fails : !(${t[r]}<=${t[e]})`);const i=`screen${n[a+1].toUpperCase()}Min`;if(!(t[e]<=t[i]))throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)}})),e})(e));return i.useMemo((()=>{const e=new Map;let n=-1,a={};return{matchHandlers:{},dispatch(t){return a=t,e.forEach((e=>e(a))),e.size>=1},subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(a),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],a=this.matchHandlers[n];null==a||a.mql.removeListener(null==a?void 0:a.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},a),{[e]:n}))},i=window.matchMedia(n);i.addListener(s),this.matchHandlers[n]={mql:i,listener:s},s(i)}))},responsiveMap:t}}),[e])}var y=n(99134),m=n(6999),f=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(n[a[s]]=e[a[s]])}return n};function x(e,t){const[n,a]=i.useState("string"==typeof e?e:"");return i.useEffect((()=>{(()=>{if("string"==typeof e&&a(e),"object"==typeof e)for(let n=0;n<p.length;n++){const s=p[n];if(!t[s])continue;const i=e[s];if(void 0!==i)return void a(i)}})()}),[JSON.stringify(e),t]),n}var b=i.forwardRef(((e,t)=>{const{prefixCls:n,justify:a,align:l,className:o,style:d,children:b,gutter:h=0,wrap:_}=e,v=f(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:g,direction:T}=i.useContext(r.E_),[j,M]=i.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[w,I]=i.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),N=x(l,w),F=x(a,w),$=(()=>{const[e,t]=i.useState(!1);return i.useEffect((()=>{t(u())}),[]),e})(),C=i.useRef(h),Z=c();i.useEffect((()=>{const e=Z.subscribe((e=>{I(e);const t=C.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&M(e)}));return()=>Z.unsubscribe(e)}),[]);const E=g("row",n),[O,A]=(0,m.V)(E),k=(()=>{const e=[void 0,void 0];return(Array.isArray(h)?h:[h,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let a=0;a<p.length;a++){const s=p[a];if(j[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),L=s()(E,{[`${E}-no-wrap`]:!1===_,[`${E}-${F}`]:F,[`${E}-${N}`]:N,[`${E}-rtl`]:"rtl"===T},o,A),z={},D=null!=k[0]&&k[0]>0?k[0]/-2:void 0,P=null!=k[1]&&k[1]>0?k[1]/-2:void 0;D&&(z.marginLeft=D,z.marginRight=D),$?[,z.rowGap]=k:P&&(z.marginTop=P,z.marginBottom=P);const[R,S]=k,V=i.useMemo((()=>({gutter:[R,S],wrap:_,supportFlexGap:$})),[R,S,_,$]);return O(i.createElement(y.Z.Provider,{value:V},i.createElement("div",Object.assign({},v,{className:L,style:Object.assign(Object.assign({},z),d),ref:t}),b)))}))}}]);