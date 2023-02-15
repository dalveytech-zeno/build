"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90],{61895:function(k,A,t){t.d(A,{O:function(){return p}});var T=t(2593),u=t(70794),w=t(24069);function p(y){return y instanceof T.O$?(0,u.Z)((0,w.dN)(y,18,2)):(0,u.Z)(y)}},26977:function(k,A,t){t.d(A,{bW:function(){return S},gp:function(){return h},tV:function(){return D},mU:function(){return M}});var T=t(42122),u=t.n(T),w=t(94184),p=t.n(w),y={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},f=t(86074),E=function(d){var b=d.label,C=d.children,x=d.disabled,B=d.className,m=d.onChange,o=d.value;return(0,f.jsxs)("div",{className:p()(y.input,B),children:[(0,f.jsx)("div",{className:y.label,children:b}),(0,f.jsxs)("div",{className:y.wrapper,children:[(0,f.jsx)("input",{type:"number",value:o,disabled:x,onChange:function(s){m&&m(s.target.value)},placeholder:"0.0",min:"0"}),C]})]})},D=function(d){return(0,f.jsx)(E,u()(u()({label:"Price"},d),{},{children:(0,f.jsx)("div",{className:y.var,children:"USD"})}))},S=function(d){var b=d.symbol;return(0,f.jsx)(E,u()(u()({label:"Long"},d),{},{children:(0,f.jsx)("div",{className:y.var,children:b})}))},h=function(d){var b=d.onClickMaxBtn,C=d.symbol;return(0,f.jsx)(E,u()(u()({label:"Pay"},d),{},{children:(0,f.jsxs)("div",{className:y.flex,children:[(0,f.jsx)("div",{className:y.max,onClick:b,children:"MAX"}),(0,f.jsx)("div",{className:y.var,children:C!=null?C:"USDC"})]})}))},M=function(d){return(0,f.jsx)(E,u()(u()({label:"Receive"},d),{},{children:(0,f.jsx)("div",{className:y.flex,children:(0,f.jsx)("div",{className:y.var,children:d.symbol})})}))},P=null},25122:function(k,A,t){t.d(A,{a:function(){return x}});var T=t(17061),u=t.n(T),w=t(17156),p=t.n(w),y=t(56690),f=t.n(y),E=t(89728),D=t.n(E),S=t(94993),h=t.n(S),M=t(61655),P=t.n(M),F=t(26389),d=t.n(F),b=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),C=t(38518),x=function(B){P()(o,B);var m=d()(o);function o(r,s){var i,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:void 0;return f()(this,o),n==null?i=m.call(this,r,s,b.Mt):i=m.call(this,r,s,n),h()(i)}return D()(o,[{key:"name",value:function(){var r=p()(u()().mark(function i(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i,this)}));function s(){return r.apply(this,arguments)}return s}()},{key:"symbol",value:function(){var r=p()(u()().mark(function i(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("symbol");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i,this)}));function s(){return r.apply(this,arguments)}return s}()},{key:"decimals",value:function(){var r=p()(u()().mark(function i(){return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("decimals");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},i,this)}));function s(){return r.apply(this,arguments)}return s}()},{key:"totalSupply",value:function(){var r=p()(u()().mark(function i(){var n;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.call("totalSupply");case 2:return n=a.sent,a.abrupt("return",n);case 4:case"end":return a.stop()}},i,this)}));function s(){return r.apply(this,arguments)}return s}()},{key:"balanceOf",value:function(){var r=p()(u()().mark(function i(n){return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.call("balanceOf",n);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},i,this)}));function s(i){return r.apply(this,arguments)}return s}()},{key:"transfer",value:function(){var r=p()(u()().mark(function i(n,e){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.call("transfer",n,e);case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},i,this)}));function s(i,n){return r.apply(this,arguments)}return s}()},{key:"allowance",value:function(){var r=p()(u()().mark(function i(n,e){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.call("allowance",n,e);case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},i,this)}));function s(i,n){return r.apply(this,arguments)}return s}()},{key:"approve",value:function(){var r=p()(u()().mark(function i(n,e){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.call("approve",n,e);case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},i,this)}));function s(i,n){return r.apply(this,arguments)}return s}()},{key:"ftransferFrom",value:function(){var r=p()(u()().mark(function i(n,e,a){return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,this.call("ftransferFrom",n,e,a);case 2:return c.abrupt("return",c.sent);case 3:case"end":return c.stop()}},i,this)}));function s(i,n,e){return r.apply(this,arguments)}return s}()},{key:"increaseAllowance",value:function(){var r=p()(u()().mark(function i(n,e){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.call("increaseAllowance",n,e);case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},i,this)}));function s(i,n){return r.apply(this,arguments)}return s}()},{key:"decreaseAllowance",value:function(){var r=p()(u()().mark(function i(n,e){return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.call("decreaseAllowance",n,e);case 2:return l.abrupt("return",l.sent);case 3:case"end":return l.stop()}},i,this)}));function s(i,n){return r.apply(this,arguments)}return s}()}]),o}(C.k)},38518:function(k,A,t){t.d(A,{k:function(){return b}});var T=t(17061),u=t.n(T),w=t(17156),p=t.n(w),y=t(56690),f=t.n(y),E=t(89728),D=t.n(E),S=t(38416),h=t.n(S),M=t(77294),P=t(27350),F=t(24069),d=JSON.parse('{"PositionValid":"0xFE7EF7c6cac9339149fb3FA5c1300b982224e7Ee","PositionBook":"0xBE6cB7b96aCeAe143C73539D16e5557ab26E7376","MarketPositionMgr":"0x98c7526c5EFE2c7bD98e3096F12808cF1bff7e0F","OpenStoreLong":"0xd69389bB0B476E3A05fBEFC840A420bf01EB00EE","CloseStoreLong":"0x5227D6A3B941EdA464405E354e95f27ed142e055","OpenStoreShort":"0x7956d1F9AdF4a32143860897038A282D0Ea1D8c8","CloseStoreShort":"0x464a898bb0d9434C4484bc48a8C9425f4D9f4BE1","Market":"0xA67AC88508F7867f27Ad04469Bdce9bccfD94986","OrderBookLong":"0x92Ea9D1Fb55E8673Ee31bf5f7dcaEbFD2C8F2c42","OrderBookShort":"0xF4E28647A99Ac9C2FE1ab6d9Abab228F03D5b684","FeeVault":"0x21850B6f60Fbf4646D677E3fFd74E8341F9058d5","LP":"0xC44B30fBC2d9fD225f3A5ddD98c65F07ED21f875","USDC":"0xB95EfD842e650e7065f1027c8173250a7F26AE07","BTC":"0x3860F93d6386fE0E5b2f25F411d1b7D4f50c43EB","ETH":"0x0De3434801811FbF031f7bC047b8DAcb3EB84212","LINK":"0xe7f9d33a3aF52Ec54DF634F46Ec9a31F5104C03c","CoreVault":"0xb69A74771683A985A45a983fBba8d80737aaEEE5","VaultRouter":"0xcE30cFa145f4B4509eE734650755856d77383A4b","MarketReader":"0xa2C5d16C085B2e1BafBf41BECB4865986D61D31b","MarketValid":"0x5e88B8DC882ae019991AA8981929c6D9dEc4D8fc","MarketFactory":"0x3Ee2f127C11705b486d394fC63B497a5A5637B0A","MarketAddressesProvider":"0xdE2B4a65D682ACFd9289D6B2D0CA03cf40F578EA","MarketValidReader":"0x6a94AaC8faaF512471C9933321648781aFf4Eef2","MockOracle":"0x16dB675852574Cc0A1223c516Da4F55cEF9E2a11","ExecFee":"0x01A8cCe47a0092E756980E016368fb23a217dc32","OpenFee":"0x011d70B2EA7A62E97320879Fc687d337e7f74334","CloseFee":"0xE8b8fC15c16f0e892627542A75FDE8694270eF7F","FundFee":"0x2bCBbd450577492866876A72661d54f9954bE018","LiquidateFee":"0x8f7A67953Fe0dCAa3C3bC7015bFB985E1526fcb4","FeeRouter":"0xD9Bf1D233BEaE76303035620016aB39DA4a4b462"}'),b=function(){function m(o,r,s){f()(this,m),h()(this,"_contract",void 0),h()(this,"_address",void 0),h()(this,"_library",void 0),h()(this,"_abi",void 0),h()(this,"_chainId",void 0),h()(this,"_PendingTxns",void 0);var i=this.constructor.name;console.log(i);var n=d;this._address=n[i],console.log(this._address),this._library=r,this._contract=this.newContract(o,s)}return D()(m,[{key:"newContract",value:function(r,s){return s!=null&&(this._abi=s),C(r,this._abi,this._library)}},{key:"setChainId",value:function(r){this._chainId=r}},{key:"setPendingTxns",value:function(r){this._PendingTxns=r}},{key:"call",value:function(){var o=p()(u()().mark(function s(i){var n,e,a,l,c,g=arguments;return u()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:for(n=g.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=g[a];return v.prev=1,v.next=4,(l=this._contract)[i].apply(l,e);case 4:return c=v.sent,v.abrupt("return",c);case 8:v.prev=8,v.t0=v.catch(1),console.log("SolidityContract call failed address",this._contract.address),console.log("SolidityContract call failed functionName",i),console.log("SolidityContract call failed params",e),console.log("SolidityContract call failed error",v.t0);case 14:case"end":return v.stop()}},s,this,[[1,8]])}));function r(s){return o.apply(this,arguments)}return r}()},{key:"send",value:function(){var o=p()(u()().mark(function s(i){var n,e,a,l=arguments;return u()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:for(n=l.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=l[a];return g.next=3,x(this._chainId,this._contract,i,this._PendingTxns,e);case 3:return g.abrupt("return",g.sent);case 4:case"end":return g.stop()}},s,this)}));function r(s){return o.apply(this,arguments)}return r}()}]),m}(),C=function(o,r,s){return new M.Contract(o,r,s.getSigner())};function x(){return B.apply(this,arguments)}function B(){return B=p()(u()().mark(function m(){var o,r,s,i,n,e,a=arguments;return u()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=a.length>0&&a[0]!==void 0?a[0]:5,r=a.length>1?a[1]:void 0,s=a.length>2?a[2]:void 0,i=a.length>3?a[3]:void 0,n=a.length>4?a[4]:void 0,c.prev=5,c.next=8,(0,P.HV)(o,r,s,n,{gasLimit:(0,F._b)(5e5),setPendingTxns:i});case 8:return e=c.sent,c.abrupt("return",e);case 12:c.prev=12,c.t0=c.catch(5),console.log("SolidityContract send failed address",r.address),console.log("SolidityContract send failed functionName",s),console.log("SolidityContract send failed params",n),console.log("SolidityContract send failed error",c.t0),console.error(c.t0);case 19:case"end":return c.stop()}},m,null,[[5,12]])})),B.apply(this,arguments)}}}]);
