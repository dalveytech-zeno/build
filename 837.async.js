"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[837],{26977:function(e,n,t){t.d(n,{gp:function(){return o},tV:function(){return c},mU:function(){return y},ZP:function(){return d}});var a=t(97857),r=t.n(a),s=t(94184),i=t.n(s),u={input:"input___FmRXa",wrapper:"wrapper___FSDBG",var:"var___VCDiS",flex:"flex___gOhnV",max:"max___hao26"},p=t(86074),l=function(e){var n=e.label,t=e.symbolVar,a=e.children,r=e.disabled,s=e.className,l=e.decimals,c=void 0===l?18:l,o=e.onChange,y=e.value,d=e.max,m=function(e){if(o){var n=new RegExp("^\\D*(\\d*(?:\\.\\d{0,".concat(c,"})?).*$"),"g"),t=e.replace(n,"$1");d&&+t>+d&&(t=d),o(t)}};return(0,p.jsxs)("div",{className:i()(u.input,s),children:[n&&(0,p.jsx)("div",{className:u.label,children:n}),(0,p.jsxs)("div",{className:u.wrapper,children:[(0,p.jsx)("input",{type:"text",value:y,disabled:r,onChange:function(e){m(e.target.value)},placeholder:"0.0"}),t?(0,p.jsx)("div",{className:u.var,children:t}):a]})]})},c=function(e){return(0,p.jsx)(l,r()(r()({label:"Price"},e),{},{children:(0,p.jsx)("div",{className:u.var,children:"USD"})}))},o=function(e){var n=e.onClickMaxBtn,t=e.symbol;return(0,p.jsx)(l,r()(r()({label:"Pay"},e),{},{children:(0,p.jsxs)("div",{className:u.flex,children:[(0,p.jsx)("div",{className:u.max,onClick:n,children:"MAX"}),(0,p.jsx)("div",{className:u.var,children:null!=t?t:"USDC"})]})}))},y=function(e){return(0,p.jsx)(l,r()(r()({label:"Receive"},e),{},{children:(0,p.jsx)("div",{className:u.flex,children:(0,p.jsx)("div",{className:u.var,children:e.symbol})})}))},d=l},25122:function(e,n,t){t.d(n,{a:function(){return b}});var a=t(15009),r=t.n(a),s=t(99289),i=t.n(s),u=t(12444),p=t.n(u),l=t(72004),c=t.n(l),o=t(73408),y=t.n(o),d=t(31996),m=t.n(d),f=t(26037),h=t.n(f),v=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),b=function(e){m()(T,e);var n,t,a,s,u,l,o,d,f,b,x,w=h()(T);function T(e,n){var t,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;return p()(this,T),t=null==r?w.call(this,e,n,v.Mt,a):w.call(this,e,n,r,a),y()(t)}return c()(T,[{key:"name",value:(x=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("name");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return x.apply(this,arguments)})},{key:"symbol",value:(b=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("symbol");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return b.apply(this,arguments)})},{key:"decimals",value:(f=i()(r()().mark((function e(){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("decimals");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"totalSupply",value:(d=i()(r()().mark((function e(){var n;return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("totalSupply");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"balanceOf",value:(o=i()(r()().mark((function e(n){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("balanceOf",n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"transfer",value:(l=i()(r()().mark((function e(n,t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("transfer",n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,n){return l.apply(this,arguments)})},{key:"allowance",value:(u=i()(r()().mark((function e(n,t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("allowance",n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,n){return u.apply(this,arguments)})},{key:"approve",value:(s=i()(r()().mark((function e(n,t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("approve",n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,n){return s.apply(this,arguments)})},{key:"transferFrom",value:(a=i()(r()().mark((function e(n,t,a){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("transferFrom",n,t,a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,n,t){return a.apply(this,arguments)})},{key:"increaseAllowance",value:(t=i()(r()().mark((function e(n,t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("increaseAllowance",n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"decreaseAllowance",value:(n=i()(r()().mark((function e(n,t){return r()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("decreaseAllowance",n,t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})}]),T}(t(76935).k)}}]);