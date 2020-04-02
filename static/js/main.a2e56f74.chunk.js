(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{177:function(e,t,a){e.exports=a(369)},182:function(e,t,a){},193:function(e,t,a){},199:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},203:function(e,t){},204:function(e,t){},369:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=(a(182),a(125)),o=a(37),l=a(38),d=a(28),u=a(47),p=a(48),m=a(30),f=a.n(m),h=a(380),v=a(381),b=a(382),E=a(383),g=a(123),w=a(372),y=a(371),k=a(376),x=a(124),R=a(374),S=a(375),j=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).keyboardBind=function(){var e=Object(d.a)(r).props.controller,t=e.speed,a=e.direction;window.document.addEventListener("keydown",(function(e){var n=e.key;"w"===n&&t(1),"s"===n&&t(-1),"a"===n&&a(1),"d"===n&&a(-1)}),!1),window.document.addEventListener("keyup",(function(e){var t=Object(d.a)(r).props.controller,a=t.speed,n=t.direction,s=e.key;"w"===s&&a(0),"s"===s&&a(0),"a"===s&&n(0),"d"===s&&n(0)}),!1)},r.ref=Object(n.createRef)(),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.keyboardBind()}},{key:"render",value:function(){return r.a.createElement("div",{tabIndex:"0",ref:this.ref},"wads")}}]),a}(n.Component),C=(a(193),function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setCanvasRef=function(t){n.canvasRef=t,e.setCanvasRef&&e.setCanvasRef(t)},n}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){e.disabled!==this.props.disabled&&(e.disabled?this.disconnect():this.connect())}},{key:"connect",value:function(){var e=this,t=this.props.address;t&&(this.wsavc=new window.WSAvcPlayer(this.canvasRef,"webgl",1,35),this.wsavc.connect("".concat("https:"===window.location.protocol?"wss":"ws","://").concat(t),(function(){e.wsavc.playStream()})))}},{key:"disconnect",value:function(){this.wsavc&&(this.wsavc.disconnect(),this.wsavc.initCanvas(),this.wsavc=void 0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"player"},r.a.createElement("canvas",{className:"canvas",ref:this.setCanvasRef}))}}]),a}(n.Component)),O=a(172),I=a(10),A=a.n(I),M=a(29),W=a(151),z=a(370),P=a(373),N=a(377),L=a(11),D=(a(73),a(378)),Z=a(379),T={labelCol:{span:6},wrapperCol:{span:16}},B={wrapperCol:{offset:6,span:16}},F={0:"0%",25:"25%",50:"50%",75:"75%",100:"100%"};function _(){return q.apply(this,arguments)}function q(){return(q=Object(M.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.d("https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_1.0_224/model.json");case 2:return t=e.sent,a=t.getLayer("conv_pw_13_relu"),e.abrupt("return",L.e({inputs:t.inputs,outputs:a.output}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H,V,J,U=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"addExample",value:function(e,t){var a=L.i((function(){return L.h(t,[1,2])}));if(null==this.xs)this.xs=L.b(e),this.ys=L.b(a);else{var n=this.xs;this.xs=L.b(n.concat(e,0));var r=this.ys;this.ys=L.b(r.concat(a,0)),n.dispose(),r.dispose(),a.dispose()}}}]),e}()),$=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).exampleHandler=function(){var e=Object(M.a)(A.a.mark((function e(t){var a,n,s,c,i,o,l,u,p,m,f;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(d.a)(r),n=a.state.exampleList,s=a.props,c=s.action,i=s.canvasRef,o=L.a.fromPixels(i),l=o.resizeNearestNeighbor([224,224]),u=L.i((function(){return l.expandDims(0).toFloat().div(127).sub(1)})),m=(p=t||c).speed,f=p.direction,U.addExample(H.predict(u),[m,f]),e.next=9,L.a.toPixels(l,r.smallCanvasRef.current);case 9:n.push({img:r.smallCanvasRef.current.toDataURL(),action:{speed:m,direction:f}}),r.setState({exampleList:n}),o.dispose();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.train=Object(M.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.setState({isTraining:!0}),null!=U.xs){e.next=3;break}throw new Error("Add some examples before training!");case 3:if(V=L.g({layers:[L.c.flatten({inputShape:H.outputs[0].shape.slice(1)}),L.c.dense({units:100,activation:"relu",kernelInitializer:"varianceScaling",useBias:!0}),L.c.dense({units:2,kernelInitializer:"varianceScaling",useBias:!1,activation:"softmax"})]}),t=L.j.adam(1e-4),V.compile({optimizer:t,loss:"categoricalCrossentropy"}),(a=Math.floor(.4*U.xs.shape[0]))>0){e.next=9;break}throw new Error("Batch size is 0 or NaN. Please choose a non-zero fraction.");case 9:V.fit(U.xs,U.ys,{batchSize:a,epochs:20,callbacks:{onBatchEnd:function(){var e=Object(M.a)(A.a.mark((function e(t,a){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Loss: "+a.loss.toFixed(5)),r.setState({loss:a.loss.toFixed(5)});case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()}});case 10:case"end":return e.stop()}}),e)}))),r.predict=Object(M.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object(d.a)(r),a=t.props.canvasRef,r.setState({isPredicting:!0},Object(M.a)(A.a.mark((function e(){var t,n,s,c,i,o,l;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.isPredicting){e.next=17;break}return t=L.i((function(){return L.a.fromPixels(a).resizeNearestNeighbor([224,224]).expandDims(0).toFloat().div(127).sub(1)})),n=H.predict(t),s=V.predict(n),e.next=6,s.as1D().data();case 6:return c=e.sent,i=Object(O.a)(c,2),o=i[0],l=i[1],console.log("Ai \u52a8\u4f5c\uff1a",{speed:o,direction:l}),t.dispose(),r.doAction({speed:o,direction:l}),e.next=15,L.f();case 15:e.next=0;break;case 17:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e)}))),r.record=Object(M.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.setState({isRecording:!0},Object(M.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.state.isRecording){e.next=5;break}return e.next=3,r.exampleHandler();case 3:e.next=0;break;case 5:case"end":return e.stop()}}),e)}))));case 1:case"end":return e.stop()}}),e)}))),r.state={learnForm:{},exampleList:[],loading:!1,training:!1,isPredicting:!1,isRecording:!1,loss:0},r.smallCanvasRef=Object(n.createRef)(),r}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(M.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,_();case 3:H=e.sent,this.setState({loading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"doAction",value:function(){var e=Object(M.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.speed,a=t.direction,this.props.controller.direction(a);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.exampleList,n=t.loading,s=t.isRecording,c=t.isTraining,i=t.isPredicting,o=t.loss,l=this.exampleHandler,d=this.record,u=this.predict;return r.a.createElement(W.a,{spinning:n},r.a.createElement("canvas",{className:"ai-canvas",ref:this.smallCanvasRef}),r.a.createElement(w.a,T,r.a.createElement(w.a.Item,{label:"Learning rate"}),r.a.createElement(w.a.Item,{label:""})),r.a.createElement(w.a,Object.assign({},T,{initialValues:{speed:0,direction:0},onFinish:function(e){return l(e)}}),r.a.createElement(w.a.Item,{name:"speed",label:"\u901f\u5ea6",required:!0},r.a.createElement(k.a,null)),r.a.createElement(w.a.Item,{name:"direction",label:"\u65b9\u5411",required:!0},r.a.createElement(k.a,null)),r.a.createElement(w.a.Item,B,r.a.createElement(z.a,null,r.a.createElement(x.a,{key:"record-once",htmlType:"submit",type:"primary",icon:r.a.createElement(D.a,null)}),r.a.createElement(x.a,{type:"primary",key:"record",loading:s,onClick:d},"\u5f00\u59cb\u8bb0\u5f55"),r.a.createElement(x.a,{key:"stop",onClick:function(){e.setState({isRecording:!1})},disabled:!s},"\u505c\u6b62\u8bb0\u5f55"),r.a.createElement(x.a,{onClick:this.train,key:"fit",loading:c},"\u5b66\u4e60"),r.a.createElement("span",null,"loss: ",o))),r.a.createElement(w.a.Item,B,r.a.createElement(z.a,null,r.a.createElement(x.a,{type:"danger",key:"predic",loading:i,onClick:u},"\u5f00\u59cb Ai \u9a7e\u9a76"),r.a.createElement(x.a,{onClick:function(){e.setState({isPredicting:!1})},disabled:!i,key:"stop"},"\u505c\u6b62 Ai \u9a7e\u9a76")))),r.a.createElement(P.a,{size:"small",className:"ai-example-list",grid:{gutter:16,column:4},itemLayout:"vertical",pagination:{pageSize:12},dataSource:a,renderItem:function(e){var t=e.img,a=e.action,n=a.speed,s=a.direction;return r.a.createElement(P.a.Item,null,r.a.createElement(N.a,{size:"small",title:"\u901f\u5ea6\uff1a".concat(n,"    \u65b9\u5411\uff1a").concat(s),actions:[r.a.createElement(x.a,{size:"small",icon:r.a.createElement(Z.a,null),type:"danger"})]},r.a.createElement("img",{src:t})))}}))}}]),a}(n.Component),G=g.a.TabPane;window.addEventListener("deviceorientation",(function(e){var t=e.alpha,a=e.beta,n=e.gamma;J={alpha:t,beta:a,gamma:n}}));var K=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).deviceorientation=function(){var e=Object(d.a)(n),t=(e.changeSpeed,e.changeDirection),a=e.state,r=(a.hold,a.base),s=(r.gamma,r.beta),c=a.directionReverse,i=(a.speedZeroRate,a.speedMaxRate,a.speedReverseMaxRate,J.beta-s);i=(i=i<-30?-30:i)>30?30:i,t(5*(c?-i/30:i/30)+7.5)},n.connectWs=function(e){var t=e.wsAddress,a=e.playerWsAddress;t&&(n.socket&&(n.socket.close(),n.socket=void 0),n.socket=window.io(t),n.socket.on("connect",(function(){n.setState({wsConnected:!0}),n.changeZeroSpeedRate(n.state.speedZeroRate),f.a.set("wsAddress",t)})),n.socket.on("disconnect",(function(){n.setState({wsConnected:!1})})),a&&(n.setState({playerWsAddress:a}),f.a.set("playerWsAddress",a)))},n.disconnectWs=function(e){e&&e.preventDefault(),n.socket.close()},n.handleHold=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||(n.socket.emit("speed rate",0),n.socket.emit("direction rate",0)),n.setState({hold:e,base:Object(i.a)({},J)})},n.changeZeroSpeedRate=function(e){n.state.wsConnected&&(n.socket.emit("speed zero rate",e),n.setState({speedZeroRate:e}))},n.changeSpeed=function(e){n.state.wsConnected&&(n.socket.emit("speed rate",e),n.setState({speedRate:e}))},n.changeDirection=function(e){n.state.wsConnected&&(n.socket.emit("direction rate",e),n.setState({direction:e}))},n.appRef=r.a.createRef(),n.state={hold:!1,speed:0,direction:0,base:{alpha:void 0,beta:void 0,gamma:void 0},speedMaxRate:f.a.get("speedMaxRate")||80,speedReverseMaxRate:f.a.get("speedReverseMaxRate")||70,speedZeroRate:f.a.get("speedZeroRate")||75,speedRate:0,directionReverse:f.a.get("directionReverse")||!0,wsConnected:!1,wsAddress:f.a.get("wsAddress"),playerWsAddress:f.a.get("playerWsAddress"),playerEnabled:!1,canvasRef:void 0,action:{speed:0,direction:0}},n.controller={speed:function(e){var t=Object(d.a)(n),a=t.changeSpeed,r=t.state,s=r.speedMaxRate,c=r.speedReverseMaxRate,i=r.speedZeroRate,o=r.action;o.speed=e;var l=e>0?i+(s-i)*e:i+(i-c)*e;n.setState({action:o}),a(l)},direction:function(e){var t=Object(d.a)(n),a=t.changeDirection,r=t.state.action;r.direction=e,a(5*e+7.5),n.setState({action:r})}},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.deviceorientation,t=this.connectWs,a=this.state.wsAddress;window.addEventListener("deviceorientation",(function(){e()}),!1),t({wsAddress:a})}},{key:"render",value:function(){var e=this,t=this.connectWs,a=this.disconnectWs,n=this.changeSpeed,s=this.changeDirection,c=this.controller,o=this.state,l=o.wsConnected,d=o.directionReverse,u=o.direction,p=o.speedReverseMaxRate,m=o.speedMaxRate,O=o.speedZeroRate,I=o.speedRate,A=o.wsAddress,M=o.playerWsAddress,W=o.playerEnabled,z=o.canvasRef,P=o.action;return r.a.createElement("div",{className:"App",ref:this.appRef},r.a.createElement(w.a,{layout:"inline",className:"status",size:"small"},r.a.createElement(w.a.Item,{label:"\u8fde\u63a5\u72b6\u6001"},r.a.createElement(y.a,{checked:l,disabled:!0})),r.a.createElement(w.a.Item,{label:"\u8235\u673a PWM"},r.a.createElement(k.a,{style:{margin:"0 16px"},value:u,onChange:s})),r.a.createElement(w.a.Item,{label:"\u7535\u8c03 PWM"},r.a.createElement(k.a,{style:{margin:"0 16px"},value:I,onChange:n})),r.a.createElement(w.a.Item,{label:"\u5168\u5c4f"},r.a.createElement(x.a,{type:"primary",shape:"circle",icon:r.a.createElement(h.a,null),onClick:function(){e.appRef.current.requestFullscreen()}}))),r.a.createElement(g.a,null,r.a.createElement(G,{tab:"\u63a7\u5236",key:1,className:"control-pane"},r.a.createElement(w.a,{className:"controller",size:"small",layout:"inline"},r.a.createElement(w.a.Item,null,r.a.createElement(x.a,{type:"danger",onClick:function(){e.setState({base:Object(i.a)({},J)})},icon:r.a.createElement(v.a,null)},"\u8235\u673a\u6821\u51c6")),r.a.createElement(w.a.Item,{label:"\u8235\u673a\u53cd\u5411"},r.a.createElement(y.a,{checked:d,onChange:function(t){e.setState({directionReverse:t})}}))),r.a.createElement(x.a,{className:"forward-button",shape:"circle",size:"large",type:"primary",onTouchStart:function(){e.setState({hold:!0}),e.changeSpeed(m)},onTouchEnd:function(){e.setState({hold:!1}),e.changeSpeed(O)},icon:r.a.createElement(b.a,null)}),r.a.createElement(x.a,{className:"backward-button",shape:"circle",size:"large",type:"primary",onTouchStart:function(){e.setState({hold:!0}),e.changeSpeed(p)},onTouchEnd:function(){e.setState({hold:!1}),e.changeSpeed(O)},icon:r.a.createElement(E.a,null)})),r.a.createElement(G,{tab:"\u952e\u76d8\u63a7\u5236",key:2},r.a.createElement(j,{controller:c})),r.a.createElement(G,{tab:"\u8bbe\u7f6e",key:"setting"},r.a.createElement(w.a,T,r.a.createElement(w.a.Item,{label:"\u6444\u50cf\u5934"},r.a.createElement(y.a,{checked:W,onChange:function(t){e.setState({playerEnabled:t})}})),r.a.createElement(w.a.Item,{label:"\u7535\u8c03\u65e0\u8f93\u51fa PWM \u7a7a\u5360\u6bd4"},r.a.createElement(R.a,{value:O,min:0,max:100,onChange:function(t){e.changeZeroSpeedRate(t),f.a.set("speedZeroRate",t)},included:!1,tooltipVisible:!0,marks:F,disabled:!0})),r.a.createElement(w.a.Item,{label:"\u7535\u8c03\u6700\u5927 PWM \u7a7a\u5360\u6bd4"},r.a.createElement(R.a,{value:m,min:O,max:100,onChange:function(t){e.setState({speedMaxRate:t}),f.a.set("speedMaxRate",t)},marks:F})),r.a.createElement(w.a.Item,{label:"\u7535\u8c03\u53cd\u5411\u6700\u5927 PWM \u7a7a\u5360\u6bd4"},r.a.createElement(R.a,{value:p,min:0,max:O,onChange:function(t){e.setState({speedReverseMaxRate:t}),f.a.set("speedReverseMaxRate",t)},marks:F})))),r.a.createElement(G,{tab:"\u8fde\u63a5",key:3},r.a.createElement(w.a,Object.assign({},T,{onFinish:t,initialValues:{wsAddress:A,playerWsAddress:M}}),r.a.createElement("br",null),r.a.createElement(w.a.Item,{label:"\u63a7\u5236\u8fde\u63a5\u5730\u5740",name:"wsAddress",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8fde\u63a5\u5730\u5740!"}]},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,{label:"\u5a92\u4f53\u8fde\u63a5\u5730\u5740",name:"playerWsAddress"},r.a.createElement(S.a,null)),r.a.createElement(w.a.Item,B,l?r.a.createElement(x.a,{type:"danger",onClick:a},"\u65ad\u5f00"):r.a.createElement(x.a,{type:"primary",htmlType:"submit"},"\u8fde\u63a5")))),r.a.createElement(G,{tab:"\u8c03\u8bd5",key:4},r.a.createElement(w.a.Item,{label:"\u7535\u8c03"},r.a.createElement(R.a,{value:I,min:0,max:100,onChange:n})),r.a.createElement(w.a.Item,{label:"\u8235\u673a"},r.a.createElement(R.a,{value:u,min:0,max:100,onChange:s}))),r.a.createElement(G,{tab:"Ai",key:"ai"},r.a.createElement($,{canvasRef:z,action:P,controller:c}))),r.a.createElement(C,{disabled:!W,address:M,setCanvasRef:function(t){e.setState({canvasRef:t})}}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[177,1,2]]]);
//# sourceMappingURL=main.a2e56f74.chunk.js.map