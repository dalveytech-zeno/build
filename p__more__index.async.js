"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40],{50127:function(e,t,n){n.r(t),n.d(t,{default:function(){return Me}});var a=n(42122),s=n.n(a),i=n(27424),r=n.n(i),l=n(34713),u=n(62435),d=n(4480),p=n(59734),o=n(17061),y=n.n(o),c=n(17156),m=n.n(c),f=n(28722),_=function(){var e=m()(y()().mark((function e(t){var n,a,i,r,l;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}) {\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n      totalProfitCount\n    }\n  }'),e.next=4,(0,f.Dw)(f.Jx,a);case 4:return i=e.sent,r=i.users,l=s()(s()({},null==r?void 0:r[0]),n),e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=m()(y()().mark((function e(t){var n,a,i,r;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n='query MyQuery {\n    users(where: {id: "'.concat(t.toLowerCase(),'"}){\n      avgLoss\n      avgProfit\n      winRate\n      totalVolume\n      realizedPnl\n      trades\n    }\n  }'),a={},e.next=4,(0,f.Dw)(f.Jx,n);case 4:return i=e.sent,r=i.users,console.log("---users---",r),e.abrupt("return",s()(s()({},null==r?void 0:r[0]),a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=n(24069),x=n(56690),v=n.n(x),h=n(89728),M=n.n(h),j=n(61655),g=n.n(j),I=n(26389),N=n.n(I),w=JSON.parse('{"Mt":[{"inputs":[{"internalType":"address","name":"_fundFee","type":"address"},{"internalType":"address","name":"_openFee","type":"address"},{"internalType":"address","name":"_closeFee","type":"address"},{"internalType":"address","name":"_execFee","type":"address"},{"internalType":"address","name":"_liquidate","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_FRATE_LIMIT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPDATE_FEE_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closeFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"execFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeStore","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_mkt","type":"address"},{"internalType":"address","name":"_user","type":"address"}],"name":"getAccountFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"}],"name":"getCloseFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getCloseRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getCollateralFees","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getExecFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"},{"internalType":"bool","name":"_isExec","type":"bool"},{"internalType":"bool","name":"_isOpen","type":"bool"}],"name":"getFees","outputs":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"}],"name":"getFundingFee","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getFundingRate","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getLiquidateFee","outputs":[{"internalType":"uint256","name":"lf","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getLiquidateFees","outputs":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"},{"internalType":"int256","name":"_liqFee","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"bool","name":"_isLong","type":"bool"},{"internalType":"uint256","name":"_size","type":"uint256"}],"name":"getLiquidateFees2","outputs":[{"components":[{"internalType":"int256","name":"_totoalFees","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_tradeFee","type":"int256"},{"internalType":"int256","name":"_liqFee","type":"int256"}],"internalType":"struct IFeeRouter.FeeOuts","name":"outs","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"},{"internalType":"uint256","name":"_sizeDelta","type":"uint256"}],"name":"getOpenFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"getOpenRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrecision","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidateFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openFee","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"positionBook","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setCloseFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setCloseFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setExecFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setExecFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_store","type":"address"}],"name":"setFeeStore","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setFundFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setLiquidateAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setLiquidateFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fee","type":"address"}],"name":"setOpenFeeAddr","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_market","type":"address[]"},{"internalType":"int256[]","name":"_rates","type":"int256[]"}],"name":"setOpenFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_book","type":"address"}],"name":"setPositionBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_account","type":"address"},{"internalType":"address","name":"_market","type":"address"},{"internalType":"int256","name":"_openFee","type":"int256"},{"internalType":"int256","name":"_closeFee","type":"int256"},{"internalType":"int256","name":"_fundFee","type":"int256"},{"internalType":"int256","name":"_liquidateFee","type":"int256"},{"internalType":"int256","name":"_execFee","type":"int256"}],"name":"updateAccountFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_market","type":"address"}],"name":"updateFeeRate","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),F=function(e){g()(a,e);var t,n=N()(a);function a(e,t){return v()(this,a),n.call(this,e,t,w.Mt)}return M()(a,[{key:"getClassName",value:function(){return"FeeRouter"}},{key:"getAccountFees",value:(t=m()(y()().mark((function e(t,n){var a;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getAccountFees",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})}]),a}(n(76935).k),Z=function(){var e=m()(y()().mark((function e(t,n,a,s){var i,r,l;return y()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new F(t,n),e.next=3,i.getAccountFees(a,s);case 3:return r=e.sent,l=null==r?void 0:r.reduce((function(e,t){var n;return e=null===(n=e)||void 0===n?void 0:n.add(t)}),(0,b._b)(0)),e.abrupt("return",null==l?void 0:l.toString());case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,s){return e.apply(this,arguments)}}(),A=n(2076),k="more___v_xdE",C=n(6277),D=n(6226),z=n(3410),L=n(30026),E=n(77438),R=n(96714),P=n(9679),V={item:"item___FRv2D",btn:"btn___fp2oa",primary:"primary___h3mfF",head:"head___J_JkM",content:"content___EqeXD",cell:"cell___NTsu9",fieldValue:"fieldValue___cZGhB",fieldName:"fieldName___weocJ",footer:"footer___Ir88b",icon:"icon___qyyhH",fee:"fee___t82Et",fundFeeInfo:"fundFeeInfo___KmcYB"},O=n(86074),S=function(){return(0,O.jsxs)("div",{className:V.fundFeeInfo,children:[(0,O.jsxs)("b",{children:[(0,O.jsx)(z._H,{id:"Fund"}),(0,O.jsx)(z._H,{id:"Fee"})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)(z._H,{id:"fundFeeInfoP1"}),(0,O.jsx)("br",{}),(0,O.jsx)(z._H,{id:"fundFeeInfoP2"})]})]})},G=function(e){var t=e.tradingData;return(0,O.jsxs)(C.Z,{className:V.tradingInfo,gutter:24,children:[(0,O.jsx)(D.Z,{xs:24,lg:12,children:(0,O.jsxs)("div",{className:V.item,children:[(0,O.jsx)("div",{className:V.head,children:"Trading Data"}),(0,O.jsxs)(C.Z,{className:V.content,children:[(0,O.jsxs)(D.Z,{span:8,className:V.cell,children:[(0,O.jsx)("div",{className:V.fieldValue,children:"$".concat((0,R.zg)(null==t?void 0:t.totalVolume))}),(0,O.jsx)("div",{className:V.fieldName,children:"Total volume"})]}),(0,O.jsxs)(D.Z,{span:8,className:V.cell,children:[(0,O.jsx)("div",{className:V.fieldValue,children:"$".concat((0,R.zg)(null==t?void 0:t.feesPaid))}),(0,O.jsx)("div",{className:V.fieldName,children:"Fees Paid"})]}),(0,O.jsxs)(D.Z,{span:8,className:V.cell,children:[(0,O.jsx)("div",{className:V.fieldValue,children:"$".concat((0,R.zg)(null==t?void 0:t.realizedPnl))}),(0,O.jsx)("div",{className:V.fieldName,children:"PNL"})]})]}),(0,O.jsx)("div",{className:V.footer,children:(0,O.jsx)(E.Z,{href:"/trade",children:"Trade"})})]})}),(0,O.jsx)(D.Z,{xs:24,lg:12,children:(0,O.jsxs)("div",{className:V.item,children:[(0,O.jsx)("div",{className:V.head,children:"Trading Fees"}),(0,O.jsxs)(C.Z,{className:V.content,children:[(0,O.jsxs)(D.Z,{span:12,className:V.cell,children:[(0,O.jsxs)("div",{className:V.fieldValue,children:["0.0800% ",(0,O.jsx)("del",{children:"0.1000% "})]}),(0,O.jsx)("div",{className:V.fieldName,children:"Open/Close Fee"})]}),(0,O.jsxs)(D.Z,{span:10,offset:2,className:V.cell,children:[(0,O.jsx)("div",{className:V.fieldValue,children:"0.0020% / 1h"}),(0,O.jsx)(P.Z,{placement:"topLeft",overlay:(0,O.jsx)(S,{}),children:(0,O.jsxs)("div",{className:"".concat(V.fieldName," ").concat(V.fee),children:["Fund Fee ",(0,O.jsx)(L.r,{className:V.icon})]})})]})]}),(0,O.jsx)("div",{className:V.footer,children:(0,O.jsx)(E.Z,{type:"border",href:"#",children:"Read More"})})]})})]})},W=n(610),B=n.n(W),Q=n(70794),Y=n(74855),H=n.n(Y),J=Object.defineProperty,U=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const $=e=>u.createElement("svg",((e,t)=>{for(var n in t||(t={}))q.call(t,n)&&K(e,n,t[n]);if(U)for(var n of U(t))X.call(t,n)&&K(e,n,t[n]);return e})({width:24,height:25,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M17.25 9h-7a1.75 1.75 0 0 0-1.75 1.75v7c0 .966.784 1.75 1.75 1.75h7A1.75 1.75 0 0 0 19 17.75v-7A1.75 1.75 0 0 0 17.25 9Z",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),u.createElement("path",{d:"M15.5 9V7.25a1.75 1.75 0 0 0-1.75-1.75h-7A1.75 1.75 0 0 0 5 7.25v7A1.75 1.75 0 0 0 6.75 16H8.5",stroke:"#9597B5",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}));var ee=n(11289),te=n(74595),ne=n(87943),ae=n(13805),se=n(22837),ie=n(71874),re=n(1403),le=n(16330),ue="content___oCbRs",de="mainText___omv2g",pe="pnlContainer____9bQB",oe="pnl___A7Mzd",ye="winRate____2WVz",ce="prices___xdV4Q",me="priceContainer___ioeHG",fe="priceTitle___RSAFh",_e="priceValue___s4toj",Te=function(e){var t=e.userInfo;return(0,O.jsxs)("div",{className:ue,children:[(0,O.jsxs)("span",{className:de,children:["I made ",(0,O.jsx)("b",{children:t.trades})," trades on DEI Come on with me!"]}),(0,O.jsxs)("div",{className:pe,children:[(0,O.jsx)("span",{className:oe,children:(0,O.jsx)(z._H,{id:"Winrate"})}),(0,O.jsx)("span",{className:ye,children:(null!=t&&t.winRate?(0,Q.O)(null==t?void 0:t.winRate).multipliedBy(100).toFixed(2,1):"-")+"%"})]}),(0,O.jsx)("div",{className:ce,children:[{titleId:"profit",value:(0,R.zg)(null==t?void 0:t.avgProfit)+"%"},{titleId:"loss",value:(0,R.zg)(null==t?void 0:t.avgLoss)+"%"}].map((function(e){return(0,O.jsxs)("div",{className:me,children:[(0,O.jsxs)("span",{className:fe,children:[(0,O.jsx)(z._H,{id:"Average"})," ",(0,O.jsx)(z._H,{id:e.titleId})]}),(0,O.jsx)("span",{className:_e,children:e.value})]},e.titleId)}))})]})},be={walletInfo:"walletInfo___GORBE",avatar:"avatar___SFBQR",copy:"copy___lquiD",left:"left___J1Auj",right:"right___cW8mN",address:"address___WNk72",cells:"cells___ZDMOm",cell:"cell___Cu_Tk",fieldValue:"fieldValue___YJIFV",fieldName:"fieldName___E9D3z",btn:"btn___UEE1S",shareBtn:"shareBtn___KsWSb",primary:"primary___CrgyC",h5Address:"h5Address___F2MEi"},xe=function(e){var t=e.displayAccount,n=e.account;return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("span",{children:null!=t?t:"-"}),(0,O.jsx)(H(),{text:null!=n?n:"",onCopy:function(){ie.U.success("Address copied to your clipboard")},children:(0,O.jsx)($,{className:be.copy})})]})},ve=function(e){var t,n=e.userInfo,a=te.I.useContainer().setWalletVisible,s=(0,l.Ge)(),i=s.deactivate,r=s.account,d=(0,re.E)(ae.p4).provider,p=(0,u.useCallback)((function(){(0,le.VK)(),(0,le.hL)(),i()}),[i]);var o=(0,u.useMemo)((function(){return r&&r.length>13?"".concat(r.slice(0,5),"...").concat(r.slice(r.length-4)):r}),[r]),y=[{name:"Trades",value:null!==(t=null==n?void 0:n.trades)&&void 0!==t?t:"-"},{name:"Winrate",value:(null!=n&&n.winRate?(0,Q.O)(null==n?void 0:n.winRate).multipliedBy(100).toFixed(2,1):"-")+"%"},{name:"Average profit",value:(0,R.zg)(null==n?void 0:n.avgProfit)+"%",xsValue:10},{name:"Average loss",value:(0,R.zg)(null==n?void 0:n.avgLoss)+"%"}];return(0,O.jsxs)(C.Z,{className:be.walletInfo,children:[(0,O.jsx)(D.Z,{xs:24,md:12,className:be.left,children:(0,O.jsxs)(C.Z,{style:{width:"100%"},children:[(0,O.jsx)(D.Z,{flex:"100px",style:{height:80},children:r?(0,O.jsx)(B(),{size:80,address:null!=r?r:"",provider:d}):(0,O.jsx)("img",{className:be.avatar,src:ee.Z})}),(0,O.jsx)(D.Z,{className:be.h5Address,children:(0,O.jsx)(xe,{displayAccount:o,account:r})}),(0,O.jsxs)(D.Z,{className:be.details,flex:"auto",children:[(0,O.jsx)(C.Z,{className:be.address,children:(0,O.jsx)(xe,{displayAccount:o,account:r})}),(0,O.jsx)(C.Z,{className:be.cells,children:y.map((function(e,t){return(0,O.jsxs)(D.Z,{className:be.cell,lg:6,xs:e.xsValue||7,children:[(0,O.jsx)("span",{className:be.fieldValue,children:e.value}),(0,O.jsx)("span",{className:be.fieldName,children:e.name})]},t)}))})]})]})}),(0,O.jsxs)(D.Z,{xs:24,md:8,className:be.right,children:[r&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(ne.T,{title:"Share",downloadName:"Dei.io_share",content:(0,O.jsx)(ne.v,{children:(0,O.jsx)(Te,{userInfo:n})}),children:(0,O.jsx)(E.Z,{className:"".concat(be.shareBtn),children:(0,O.jsx)(z._H,{id:"Share"})})}),(0,O.jsx)(E.Z,{className:be.btn,href:"#",type:"c30",onClick:function(){return p(),localStorage.removeItem(se.Cs),void localStorage.removeItem(se.Wr)},children:(0,O.jsx)(z._H,{id:"Disconnect"})})]}),!r&&(0,O.jsx)(E.Z,{className:be.btn,href:"#",onClick:function(){return a(!0)},children:"Connect Wallet"})]})]})},he=function(){var e=(0,l.Ge)(),t=e.account,n=e.library,a=e.chainId,i=(0,d.FV)((0,A.N6)(a)),o=r()(i,1)[0],y=(0,p.ZP)(t,(function(e){return _(t||"")})).data,c=(0,p.ZP)([t],(function(){return T(t||"")})).data,m=(0,p.ZP)("getAccountFees",(function(){return Z(n,a,t,null==o?void 0:o.address)})).data,f=(0,u.useMemo)((function(){return m?s()(s()({},c),{},{feesPaid:m}):c}),[m,c]);return(0,O.jsxs)("div",{className:k,children:[(0,O.jsx)(ve,{userInfo:y}),(0,O.jsx)(G,{tradingData:f})]})},Me=function(){return(0,O.jsx)(d.Wh,{children:(0,O.jsx)(he,{})})}},11289:function(e,t,n){n.d(t,{r:function(){return d}});var a=n(62435),s=Object.defineProperty,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const d=e=>a.createElement("svg",((e,t)=>{for(var n in t||(t={}))r.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&u(e,n,t[n]);return e})({width:32,height:32,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__a)"}),a.createElement("rect",{width:32,height:32,rx:16,fill:"url(#rewards_logo_svg__b)"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.594 18.438a7.031 7.031 0 0 1-7.032 7.03V23.36a4.922 4.922 0 1 0-4.921-4.922H6.53a7.031 7.031 0 1 1 14.063 0Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24.035 19.703a10.515 10.515 0 0 1-3.014 6.192l-1.541-1.541a8.345 8.345 0 0 0 2.355-4.65h2.2Zm.075-1.222v-.087.087ZM12.298 7.966a10.516 10.516 0 0 0-6.193 3.014l1.542 1.541a8.344 8.344 0 0 1 4.65-2.356v-2.2ZM24.114 18.438c0-5.825-4.722-10.547-10.547-10.547h-.005v2.18h.005a8.367 8.367 0 0 1 8.367 8.367h2.18Z",fill:"#fff"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.563 4.375c7.766 0 14.062 6.296 14.062 14.063h-2.11c0-6.602-5.351-11.954-11.953-11.954V4.375Z",fill:"#fff"}),a.createElement("defs",null,a.createElement("linearGradient",{id:"rewards_logo_svg__a",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"})),a.createElement("linearGradient",{id:"rewards_logo_svg__b",x1:0,y1:0,x2:39.172,y2:10.86,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#3CEAAA"}),a.createElement("stop",{offset:.771,stopColor:"#5C72FF"}))));t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9InVybCgjYSkiLz48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTk0IDE4LjQzOGE3LjAzMSA3LjAzMSAwIDAgMS03LjAzMiA3LjAzVjIzLjM2YTQuOTIyIDQuOTIyIDAgMSAwLTQuOTIxLTQuOTIySDYuNTNhNy4wMzEgNy4wMzEgMCAxIDEgMTQuMDYzIDBaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4wMzUgMTkuNzAzYTEwLjUxNSAxMC41MTUgMCAwIDEtMy4wMTQgNi4xOTJsLTEuNTQxLTEuNTQxYTguMzQ1IDguMzQ1IDAgMCAwIDIuMzU1LTQuNjVoMi4yWm0uMDc1LTEuMjIydi0uMDg3LjA4N1pNMTIuMjk4IDcuOTY2YTEwLjUxNiAxMC41MTYgMCAwIDAtNi4xOTMgMy4wMTRsMS41NDIgMS41NDFhOC4zNDQgOC4zNDQgMCAwIDEgNC42NS0yLjM1NnYtMi4yWk0yNC4xMTQgMTguNDM4YzAtNS44MjUtNC43MjItMTAuNTQ3LTEwLjU0Ny0xMC41NDdoLS4wMDV2Mi4xOGguMDA1YTguMzY3IDguMzY3IDAgMCAxIDguMzY3IDguMzY3aDIuMThaIiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy41NjMgNC4zNzVjNy43NjYgMCAxNC4wNjIgNi4yOTYgMTQuMDYyIDE0LjA2M2gtMi4xMWMwLTYuNjAyLTUuMzUxLTExLjk1NC0xMS45NTMtMTEuOTU0VjQuMzc1WiIgZmlsbD0iI2ZmZiIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAiIHkxPSIwIiB4Mj0iMzkuMTcyIiB5Mj0iMTAuODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjM0NFQUFBIi8+PHN0b3Agb2Zmc2V0PSIuNzcxIiBzdG9wLWNvbG9yPSIjNUM3MkZGIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIwIiB5MT0iMCIgeDI9IjM5LjE3MiIgeTI9IjEwLjg2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzNDRUFBQSIvPjxzdG9wIG9mZnNldD0iLjc3MSIgc3RvcC1jb2xvcj0iIzVDNzJGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="}}]);