"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[281],{37432:function(e,t,n){n.d(t,{x:function(){return i}});var r=n(34713),a=n(13805),s=n(22837);function i(){var e=(0,r.Ge)().chainId;if(!e){var t=localStorage.getItem(s.HC);t&&((e=parseInt(t))||localStorage.removeItem(s.HC))}return e&&a.FQ.includes(e)||(e=a.rC),{chainId:e}}},28722:function(e,t,n){n.d(t,{Dw:function(){return m},Jx:function(){return y},x7:function(){return l}});var r,a=n(17061),s=n.n(a),i=n(17156),p=n.n(i),u=n(38416),o=n.n(u),d=n(13805);var y="https://api.thegraph.com/subgraphs/name/dalveytechaaron/fuji",c=(r={},o()(r,d.Qz,y),o()(r,d.bx,y),r),l=function(e){return c[e]||y},m=function(){var e=p()(s()().mark((function e(t,n){var r,a;return s()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:n}),mode:"cors"}).catch((function(e){console.log("err",e)}));case 2:return r=e.sent,e.next=5,null==r?void 0:r.json();case 5:return a=e.sent,e.abrupt("return",(null==a?void 0:a.data)||{});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},36493:function(e,t,n){n.d(t,{do:function(){return r},tq:function(){return a}});n(20238).dE;var r=function(e){var t="BTCUSDT";if(!e)return t;if("Test Market"===e)return t;var n=e.split("/");return 2!==n.length?t:"".concat(n[0],"USDT")};var a=function(){return/Android|web0S|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},18192:function(e,t,n){n.d(t,{a:function(){return f}});var r=n(17061),a=n.n(r),s=n(17156),i=n.n(s),p=n(61895),u=n(54958),o=function(){var e=i()(a()().mark((function e(t){var n,r;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.prev=1,e.next=4,u.ZP.getTicker(t.toUpperCase());case 4:(r=e.sent).data&&(n.Hige=(0,p.O)(r.data.highPrice),n.Low=(0,p.O)(r.data.lowPrice),n.Change=(0,p.O)(r.data.priceChange),n.ChangeRate=(0,p.O)(r.data.priceChangePercent)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=i()(a()().mark((function e(t){var n,r;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={symbol:t.toUpperCase()},e.next=4,u.ZP.getTickerPrice(n);case 4:if(!(r=e.sent).data){e.next=7;break}return e.abrupt("return",(0,p.O)(r.data.price));case 7:return e.abrupt("return",r.data);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.abrupt("return",(0,p.O)(0));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=i()(a()().mark((function e(t){var n,r;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={symbols:JSON.stringify(t.map((function(e){return e.toUpperCase()})))},e.next=4,u.ZP.getTickerPrice(n);case 4:if(!(r=e.sent).data){e.next=7;break}return e.abrupt("return",r.data.map((function(e){return{symbol:e.symbol,price:(0,p.O)(e.price)}})));case 7:return e.abrupt("return",r.data);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();var c=n(27424),l=n.n(c),m=function(){var e=i()(a()().mark((function e(t,n){var r,s,i,p,o,d,y,c,m,f;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],e.prev=1,e.next=4,u.ZP.getKLines(t.toUpperCase(),n);case 4:if((s=e.sent).data)for(i=0;i<s.data.length;i++)p=s.data[i],o=l()(p,5),d=o[0],y=o[1],c=o[2],m=o[3],f=o[4],r.push({time:d/1e3,open:y,high:c,low:m,close:f});e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.abrupt("return",r);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=function(){var e=i()(a()().mark((function e(t){var n;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=function(){var e=i()(a()().mark((function e(t){return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{getIndexPrice:e,getIndexPrices:y,get24H:t,getKLines:function(e,t){return m(e,t)}}}},54958:function(e,t,n){n.d(t,{T5:function(){return a}});var r=n(8433),a={KLINE:"klines",TICKER:"ticker/24hr",TICKER_PRICE:"ticker/price"},s=r.Z.create({baseURL:"https://api.binance.com/api/v3/",timeout:5e3}),i={getTickerPrice:function(e){return s.get(a.TICKER_PRICE,{params:e})},getTicker:function(e){return s.get(a.TICKER,{params:{symbol:e}})},getKLines:function(e,t){return s.get(a.KLINE,{params:{symbol:e,interval:t}})}};t.ZP=i},61641:function(e,t,n){n.d(t,{t:function(){return h}});var r=n(17061),a=n.n(r),s=n(42122),i=n.n(s),p=n(17156),u=n.n(p),o=n(56690),d=n.n(o),y=n(89728),c=n.n(y),l=n(61655),m=n.n(l),f=n(26389),T=n.n(f),b=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"market","type":"address"},{"indexed":false,"internalType":"address","name":"marketValid","type":"address"},{"indexed":false,"internalType":"address","name":"orderBookLong","type":"address"},{"indexed":false,"internalType":"address","name":"orderBookShort","type":"address"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"allMarketsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_marketAddress","type":"address"},{"internalType":"address","name":"_marketValid","type":"address"},{"internalType":"address","name":"_marketRouter","type":"address"},{"internalType":"address","name":"_orderBookLong","type":"address"},{"internalType":"address","name":"_orderBookShort","type":"address"},{"internalType":"address","name":"_indexToken","type":"address"},{"internalType":"address","name":"_feeRouter","type":"address"},{"internalType":"address","name":"_feeVault","type":"address"},{"internalType":"address","name":"_positionBook","type":"address"},{"internalType":"address","name":"_openStoreLong","type":"address"},{"internalType":"address","name":"_closeStoreLong","type":"address"},{"internalType":"address","name":"_openStoreShort","type":"address"},{"internalType":"address","name":"_closeStoreShort","type":"address"},{"internalType":"address","name":"_addressProvider","type":"address"},{"internalType":"uint256","name":"_minSlippage","type":"uint256"},{"internalType":"uint256","name":"_maxSlippage","type":"uint256"},{"internalType":"uint256","name":"_minLeverage","type":"uint256"},{"internalType":"uint256","name":"_maxLeverage","type":"uint256"},{"internalType":"uint256","name":"_maxTradeAmount","type":"uint256"},{"internalType":"uint256","name":"_minPay","type":"uint256"},{"internalType":"uint256","name":"_minCollateral","type":"uint256"},{"internalType":"bool","name":"_allowOpen","type":"bool"},{"internalType":"bool","name":"_allowClose","type":"bool"},{"internalType":"uint256","name":"_tokenDigits","type":"uint256"},{"internalType":"address","name":"_vault","type":"address"},{"internalType":"address","name":"_vaultRouter","type":"address"},{"internalType":"address","name":"_collateralToken","type":"address"}],"internalType":"struct MarketFactory.CreateInputs","name":"_inputs","type":"tuple"}],"name":"create","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"}],"name":"getMarket","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct IMarketFactory.Props","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarkets","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct IMarketFactory.Props[]","name":"_markets","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMarketsV2","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"allowOpen","type":"bool"},{"internalType":"bool","name":"allowClose","type":"bool"}],"internalType":"struct IMarketFactory.Outs[]","name":"_outs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"markets","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_marketAddr","type":"address"},{"internalType":"address","name":"_newMarketAddr","type":"address"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'),v=function(e){m()(r,e);var t,n=T()(r);function r(e,t,a){return d()(this,r),n.call(this,e,t,b.Mt,a)}return c()(r,[{key:"getMarkets",value:(t=u()(a()().mark((function e(){var t;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.call("getMarkets");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"getClassName",value:function(){return"MarketFactory"}}]),r}(n(76935).k),g=n(27960),k={name:"BTC/USDT",address:"0xbEcC4Cd3bC7E912bCeA6EFE3F8379a7018455F99"},h=function(){var e=u()(a()().mark((function e(t,n){var r,s,p;return a()().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.K)(t,"MarketFactory"),s=new v(n,t,r),e.next=4,s.getMarkets();case 4:if(e.t0=e.sent.map((function(e){return i()(i()({},e),{},{address:e.addr})})),e.t0){e.next=7;break}e.t0=[];case 7:return 0==(p=e.t0).length&&(console.warn("failed to get markets"),p.push(k)),e.abrupt("return",p);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}]);