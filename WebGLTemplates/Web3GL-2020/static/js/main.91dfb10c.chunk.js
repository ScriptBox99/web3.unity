(this.webpackJsonpweb3gl=this.webpackJsonpweb3gl||[]).push([[20],{269:function(n,e,t){},282:function(n,e){},292:function(n,e){},294:function(n,e){},303:function(n,e){},305:function(n,e){},330:function(n,e){},332:function(n,e){},333:function(n,e){},338:function(n,e){},340:function(n,e){},347:function(n,e){},349:function(n,e){},361:function(n,e){},363:function(n,e){},375:function(n,e){},378:function(n,e){},381:function(n,e){},431:function(n,e){},437:function(n,e){},535:function(n,e,t){"use strict";t.r(e);var c,o=t(81),a=t.n(o),r=t(146),s=t.n(r),i=(t(269),t(76)),u=t(2),w=t.n(u),l=t(44),f=t(235),p=t(240),d=t.n(p);window.web3gl={connect:function(){return b.apply(this,arguments)},connectAccount:"",sendContract:function(n,e,t,c,o){return m.apply(this,arguments)},sendContractResponse:"",signMessage:function(n){return h.apply(this,arguments)},signMessageResponse:"",network:0};var g=Object(f.a)({dappId:"abfa7356-64c3-4047-a6e1-cdb39a0c691e",networkName:window.web3NetworkName,networkId:window.web3NetworkId,subscriptions:{wallet:function(n){c=new d.a(n.provider),console.log("".concat(n.name," is now connected"))},network:function(n){window.web3gl.network=n}},walletSelect:{wallets:[{walletName:"metamask",preferred:!0},{walletName:"walletConnect",infuraKey:"6429a308b4d646399b1ea170bb406c61",preferred:!0},{walletName:"torus",preferred:!0}]}});function b(){return(b=Object(l.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.walletSelect();case 3:return n.next=5,g.walletCheck();case 5:return n.next=7,c.eth.getAccounts();case 7:window.web3gl.connectAccount=n.sent[0],n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function h(){return(h=Object(l.a)(w.a.mark((function n(e){var t,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.eth.getAccounts();case 3:return t=n.sent[0],n.next=6,c.eth.personal.sign(e,t,"");case 6:o=n.sent,window.web3gl.signMessageResponse=o,console.log(window.web3gl.signMessageResponse),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),window.web3gl.signMessageResponse=n.t0.message;case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}function m(){return(m=Object(l.a)(w.a.mark((function n(e,t,o,a,r){var s,u;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log({method:e,abi:t,contract:o,args:a,value:r}),n.next=3,c.eth.getAccounts();case 3:u=n.sent[0],(s=new c.eth.Contract(JSON.parse(t),o).methods)[e].apply(s,Object(i.a)(JSON.parse(a))).send({from:u,value:r}).on("transactionHash",(function(n){window.web3gl.sendContractResponse=n})).on("error",(function(n){window.web3gl.sendContractResponse=n.message}));case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var v=t(79);var k=function(){return Object(v.jsx)("div",{})},x=function(n){n&&n instanceof Function&&t.e(79).then(t.bind(null,1794)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,r=e.getTTFB;t(n),c(n),o(n),a(n),r(n)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(k,{})}),document.getElementById("root")),x()}},[[535,21,22]]]);
//# sourceMappingURL=main.91dfb10c.chunk.js.map