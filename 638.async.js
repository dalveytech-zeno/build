(self.webpackChunk=self.webpackChunk||[]).push([[638],{74595:function(H,W,r){"use strict";r.d(W,{I:function(){return I}});var D=r(27424),e=r.n(D),S=r(62435),T=r(88305),I=(0,T.f)(function(){var O=(0,S.useState)(!1),b=e()(O,2),w=b[0],d=b[1],A=(0,S.useState)([]),R=e()(A,2),u=R[0],n=R[1],E=(0,S.useState)(!1),_=e()(E,2),o=_[0],s=_[1],g=(0,S.useState)([]),v=e()(g,2),P=v[0],C=v[1];return{pendingTxns:u,walletVisible:w,setWalletVisible:d,setPendingTxns:n,tableFlag:o,setTableFlag:s,positions:P,setPositions:C}})},13805:function(H,W,r){"use strict";r.d(W,{EC:function(){return X},FQ:function(){return c},Fe:function(){return C},PO:function(){return o},Qz:function(){return _},RM:function(){return N},RR:function(){return v},T8:function(){return Y},Vr:function(){return P},Ww:function(){return t},bx:function(){return U},jY:function(){return G},p4:function(){return E},qF:function(){return g},qd:function(){return $},qz:function(){return a},rC:function(){return k},vC:function(){return M},vT:function(){return s},wc:function(){return L},xW:function(){return z}});var D=r(38416),e=r.n(D),S=r(35553),T=r(15400),I=r(36493),O,b,w,d,A,R,u,n=S.fi,E=1,_=43114,o=42161,s=5,g=421613,v=56,P=97,C=1337,U=43113,k=U,j=(O={},e()(O,v,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:8,v2:!1}),e()(O,P,{nativeTokenSymbol:"BNB",defaultCollateralSymbol:"BUSD",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:8,v2:!1}),e()(O,g,{nativeTokenSymbol:"ETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:n("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:n("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:n("0.000300001")}),e()(O,o,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!1,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:n("0.0003"),INCREASE_ORDER_EXECUTION_GAS_FEE:n("0.0003"),DECREASE_ORDER_EXECUTION_GAS_FEE:n("0.000300001")}),e()(O,_,{nativeTokenSymbol:"AVAX",wrappedTokenSymbol:"WAVAX",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:n("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:n("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:n("0.0100001")}),e()(O,s,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:n("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:n("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:n("0.0100001")}),e()(O,C,{nativeTokenSymbol:"ETH",wrappedTokenSymbol:"WETH",defaultCollateralSymbol:"USDC",defaultFlagOrdersEnabled:!0,positionReaderPropsLength:9,v2:!0,SWAP_ORDER_EXECUTION_GAS_FEE:n("0.01"),INCREASE_ORDER_EXECUTION_GAS_FEE:n("0.01"),DECREASE_ORDER_EXECUTION_GAS_FEE:n("0.0100001")}),O);function y(){return"https://arb1.arbitrum.io/rpc"}var J=null,Q=function(x,V){if(!j[x])throw new Error("Unsupported chainId ".concat(x));if(!(V in j[x]))throw new Error("Key ".concat(V," does not exist for chainId ").concat(x));return j[x][V]};function G(f){return f===3?"https://ropsten.etherscan.io/":f===42?"https://kovan.etherscan.io/":f===v?"https://bscscan.com/":f===P?"https://testnet.bscscan.com/":f===g?"https://testnet.arbiscan.io/":f===o?"https://arbiscan.io/":f===_?"https://snowtrace.io/":f===s?"https://goerli.etherscan.io/":"https://testnet.snowtrace.io/"}var z=(b={},e()(b,o,"0"),e()(b,_,"3000000000"),e()(b,C,"3000000000"),e()(b,s,"3000000000"),b),$=(w={},e()(w,_,"200000000000"),e()(w,C,"200000000000"),e()(w,s,"200000000000"),w),Y=[y()],l=["https://rpc.ankr.com/eth"],i=["https://api.avax-test.network/ext/bc/C/rpc"],t=["https://api.avax.network/ext/bc/C/rpc"],p=["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org"],c=[s,o,_,U];(0,I.yG)()&&(c.push(g),c.push(P),c.push(C),c.push(s));var h=(d={},e()(d,v,"BSC"),e()(d,P,"BSC Testnet"),e()(d,g,"Arbitrum Goerli Testnet"),e()(d,o,"Arbitrum"),e()(d,_,"Avalanche"),e()(d,U,"Avalanche Fuji Testnet"),e()(d,C,"Local Dev"),e()(d,s,"Goerli"),d),L=(A={},e()(A,v,{chainId:"0x"+v.toString(16),chainName:"BSC",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:p,blockExplorerUrls:["https://bscscan.com"]}),e()(A,P,{chainId:"0x"+P.toString(16),chainName:"BSC Testnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-testnet.public.blastapi.io"],blockExplorerUrls:["https://testnet.bscscan.com/"]}),e()(A,g,{chainId:"0x"+g.toString(16),chainName:"Arbitrum Testnet",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["https://goerli-rollup.arbitrum.io/rpc"],blockExplorerUrls:["https://goerli.arbiscan.io/"]}),e()(A,o,{chainId:"0x"+o.toString(16),chainName:"Arbitrum",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:Y,blockExplorerUrls:[G(o)]}),e()(A,_,{chainId:"0x"+_.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:t,blockExplorerUrls:[G(_)]}),e()(A,U,{chainId:"0x"+U.toString(16),chainName:"Avalanche",nativeCurrency:{name:"AVAX",symbol:"AVAX",decimals:18},rpcUrls:["https://api.avax-test.network/ext/C/rpc"],blockExplorerUrls:["https://testnet.snowtrace.io"]}),e()(A,s,{chainId:"0x"+s.toString(16),chainName:"GOERLI",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://goerli.infura.io/v3/"],blockExplorerUrls:[G(s)]}),e()(A,C,{chainId:"0x"+C.toString(16),chainName:"Local",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:["http://127.0.0.1:8545"],blockExplorerUrls:[G(C)]}),A);function a(f){return h[f]}var B=(R={},e()(R,o,3),e()(R,_,3),e()(R,C,3),e()(R,s,3),R),M=(u={},e()(u,E,l),e()(u,v,p),e()(u,o,Y),e()(u,_,t),e()(u,U,i),e()(u,C,"http://127.0.0.1:8545"),e()(u,s,"https://goerli.infura.io/v3/"),u);function N(f){return(0,T.Z)(M[f])}function F(f){return sample(FALLBACK_PROVIDERS[f])}function K(f){return B[f]||3}function X(f){return c.includes(f)}},22837:function(H,W,r){"use strict";r.d(W,{Cs:function(){return T},HC:function(){return D},Wr:function(){return I},eQ:function(){return e},kX:function(){return S}});var D="DEPX_SELECTED_NETWORK",e="DEPX_walletconnect",S="DEPX_-walletlink",T="DEPX_eagerconnect",I="DEPX_currentprovider",O="DEPX_LANGUAGE_KEY",b="DEPX_Exchange-swap-slippage-basis-points-v3",w="DEPX_Close-position-receive-useInfoTokens.ts",d="DEPX_Exchange-swap-is-pnl-in-leverage",A="DEPX_Exchange-swap-show-pnl-after-fees",R="DEPX_disable-Orders-validation",u="DEPX_Exchange-swap-should-show-position-lines",n="DEPX_GMX-referralCode",E="DEPX_Referrals-selected-tab"},71874:function(H,W,r){"use strict";r.d(W,{U:function(){return e}});var D=r(84774),e={success:function(T,I){D.Am.dismiss(),D.Am.success(T,I)},error:function(T,I){D.Am.dismiss(),D.Am.error(T,I)}}},1403:function(H,W,r){"use strict";r.d(W,{E:function(){return u},V:function(){return n}});var D=r(17061),e=r.n(D),S=r(17156),T=r.n(S),I=r(27424),O=r.n(I),b=r(11427),w=r(15400),d=r(58967),A=r(62435),R=r(13805);function u(E){var _=(0,A.useState)(),o=O()(_,2),s=o[0],g=o[1];return(0,A.useEffect)(function(){function v(){return P.apply(this,arguments)}function P(){return P=T()(e()().mark(function C(){var U,k;return e()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(U=(0,R.RM)(E),U){y.next=3;break}return y.abrupt("return");case 3:return k=new b.JsonRpcProvider(U),y.next=6,k.ready;case 6:g(k);case 7:case"end":return y.stop()}},C)})),P.apply(this,arguments)}v()},[E]),{provider:s}}function n(E,_){var o;return E?E.getSigner():(o=(0,w.Z)((0,d.Z)(R.vC,_.toString())),new b.StaticJsonRpcProvider(o,{chainId:_}))}},36493:function(H,W,r){"use strict";r.d(W,{Dw:function(){return R},do:function(){return w},yG:function(){return d}});var D=r(17061),e=r.n(D),S=r(17156),T=r.n(S),I=r(20238),O=I.dE;function b(u){return new Promise(function(n){setTimeout(function(){return n()},u)})}var w=function(n){var E="BTCUSDT";if(!n||n==="Test Market")return E;var _=n.split("/");return _.length!==2?E:"".concat(_[0],"USDT")};function d(){var u,n;return!((u=window.location.host)!==null&&u!==void 0&&u.includes("gmx.io"))&&!((n=window.location.host)!==null&&n!==void 0&&n.includes("ipfs.io"))}var A=function(n,E){if(!n)return[];for(var _=[],o=0;o<n.length;o++){var s=n[o];s===O&&(s=E),_.push(s)}return _},R=function(){var u=T()(e()().mark(function n(E,_){var o,s;return e()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,fetch(E,{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify({query:_}),mode:"cors"}).catch(function(P){console.log("err",P)});case 2:return o=v.sent,v.next=5,o==null?void 0:o.json();case 5:return s=v.sent,v.abrupt("return",(s==null?void 0:s.data)||{});case 7:case"end":return v.stop()}},n)}));return function(E,_){return u.apply(this,arguments)}}()},16330:function(H,W,r){"use strict";r.d(W,{If:function(){return z},VK:function(){return s},_G:function(){return J},a_:function(){return Q},fJ:function(){return j},gn:function(){return Y},hL:function(){return g},nu:function(){return U},qd:function(){return y},yW:function(){return k}});var D=r(17061),e=r.n(D),S=r(17156),T=r.n(S),I=r(27424),O=r.n(I),b=r(38416),w=r.n(b),d=r(34713),A=r(30950),R=r(83929),u=r(62435),n=r(13805),E=r(22837),_=r(71874),o=r(86074);function s(){localStorage.removeItem(E.eQ)}function g(){Object.entries(localStorage).map(function(l){return l[0]}).filter(function(l){return l.startsWith(E.kX)}).map(function(l){return localStorage.removeItem(l)})}var v=function(){var i,t=n.rC;return new R.zw({rpc:(i={},w()(i,n.Qz,n.Ww[0]),w()(i,n.PO,n.T8[0]),w()(i,n.qF,"https://rinkeby.arbitrum.io/rpc"),i),qrcode:!0,chainId:t})},P=new A._k({supportedChainIds:n.FQ});function C(){return P}function U(l){var i=window,t=i.ethereum;if(!(!(t!=null&&t.providers)&&!(t!=null&&t.isCoinbaseWallet)&&!(t!=null&&t.isMetaMask))){var p;if(t!=null&&t.providers)switch(l){case"CoinBase":p=t.providers.find(function(c){var h=c.isCoinbaseWallet;return h});break;case"MetaMask":default:p=t.providers.find(function(c){var h=c.isMetaMask;return h});break}p&&t.setSelectedProvider(p)}}function k(l){var i=(0,d.Ge)(),t=i.activate,p=i.active,c=(0,u.useState)(!1),h=O()(c,2),L=h[0],a=h[1];return(0,u.useEffect)(function(){T()(e()().mark(function B(){var M,N,F,K,X,f,x,V;return e()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:if(Boolean(localStorage.getItem(E.Cs))===!0){m.next=4;break}return s(),g(),m.abrupt("return");case 4:M=!1;try{N=localStorage.getItem(E.eQ),N&&(F=JSON.parse(N),F&&F.connected&&(M=!0))}catch(Z){Z instanceof SyntaxError&&s()}if(!M){m.next=18;break}return m.prev=7,K=v(),l(K),m.next=12,t(K,void 0,!0);case 12:return m.abrupt("return");case 15:m.prev=15,m.t0=m.catch(7),s();case 18:return m.prev=18,f=C(),x=(X=localStorage.getItem(E.Wr))!==null&&X!==void 0?X:!1,x!==!1&&U(x),m.next=24,f.isAuthorized();case 24:if(V=m.sent,!V){m.next=29;break}return l(f),m.next=29,t(f,void 0,!0);case 29:m.next=33;break;case 31:m.prev=31,m.t1=m.catch(18);case 33:a(!0);case 34:case"end":return m.stop()}},B,null,[[7,15],[18,31]])}))()},[]),(0,u.useEffect)(function(){!L&&p&&a(!0)},[L,p]),L}function j(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=C(),t=(0,d.Ge)(),p=t.active,c=t.error,h=t.activate;(0,u.useEffect)(function(){var L=window,a=L.ethereum;if(a&&a.on&&!p&&!c&&!l){var B=function(){h(i)},M=function(){h(i)},N=function(X){X.length>0&&h(i)},F=function(){h(i)};return a.on("connect",B),a.on("chainChanged",M),a.on("accountsChanged",N),a.on("networkChanged",F),function(){a.removeListener&&(a.removeListener("connect",B),a.removeListener("chainChanged",M),a.removeListener("accountsChanged",N),a.removeListener("networkChanged",F))}}},[p,c,l,h])}function y(){return window.ethereum}var J=function(i,t){var p=function(){return new Promise(function(h,L){i(C(),function(a){var B;if(a instanceof d.Uu){t(),L();return}var M=(B=a.message)!==null&&B!==void 0?B:a.toString();L(M)}).then(h)})};return p},Q=function(i,t,p){var c=function(){var h=T()(e()().mark(function L(){var a;return e()().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:a=v(),p(a),i(a,function(N){N instanceof d.Uu?(_.U.error("Unsupported chain. Switch to Arbitrum network on your wallet and try again"),console.warn(N)):N instanceof R.ab||(_.U.error(N.message),console.warn(N)),s(),t()});case 3:case"end":return M.stop()}},L)}));return function(){return h.apply(this,arguments)}}();return c},G=function(){var l=T()(e()().mark(function i(t){return e()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,window.ethereum.request({method:"wallet_addEthereumChain",params:[t]}).catch();case 2:case"end":return c.stop()}},i)}));return function(t){return l.apply(this,arguments)}}(),z=function(){var l=T()(e()().mark(function i(t,p,c){var h;return e()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(p){a.next=4;break}return localStorage.setItem(E.HC,String(t)),document.location.reload(),a.abrupt("return");case 4:return a.prev=4,h="0x"+t.toString(16),a.next=8,window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:h}]});case 8:return c&&c(),_.U.success("Connected to ".concat((0,n.qz)(t))),a.abrupt("return",(0,n.qz)(t));case 13:if(a.prev=13,a.t0=a.catch(4),a.t0.code===4001){a.next=19;break}return a.next=18,G(n.wc[t]);case 18:return a.abrupt("return",a.sent);case 19:case"end":return a.stop()}},i,null,[[4,13]])}));return function(t,p,c){return l.apply(this,arguments)}}();function $(){var l=n.rC;_.U.error((0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:["Your wallet is not connected to ",(0,n.qz)(l),"."]}),(0,o.jsxs)("div",{className:"clickable underline",onClick:function(){return z(l,!0)},children:["Switch to ",(0,n.qz)(l)]})]}))}function Y(){var l=(0,d.Ge)(),i=l.error,t=l.deactivate;(0,u.useEffect)(function(){i instanceof d.Uu&&($(),t())},[i,t])}},46601:function(){}}]);
