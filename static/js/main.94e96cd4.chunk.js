(this.webpackJsonphbd=this.webpackJsonphbd||[]).push([[0],{13:function(e,t,a){e.exports=a(39)},18:function(e,t,a){},19:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),s=a.n(r),o=(a(18),a(19),a(4)),c=a(5),l=a(7),m=a(6),d=a(9),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"typing-dots-box"},i.a.createElement("div",{className:"typingdots"},i.a.createElement("span",{id:"1"}),i.a.createElement("span",{id:"2"}),i.a.createElement("span",{id:"3"})))}}]),a}(n.Component),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:this.props.id,className:" message-div message-div-"+this.props.id},i.a.createElement("div",{className:"message"}," ",this.props.message))}}]),a}(n.Component),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={start:e.start,date:(new Date).getTime()},n}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),100)}},{key:"tick",value:function(){this.setState({date:(new Date).getTime()})}},{key:"render",value:function(){var e;return e=this.state.date<this.state.start+1800,i.a.createElement("div",{className:"transition"},i.a.createElement(d.Fade,{bottom:!0,delay:this.props.delay,distance:"20px"},e?i.a.createElement(u,null):i.a.createElement(d.Bounce,{left:!0,distance:"20px"},i.a.createElement(h,{id:this.props.id,message:this.props.message}))))}}]),a}(n.Component),v=a(8),g=a.n(v),y=[{id:"1",start:(new Date).getTime(),message:g()("Hi, there! \ud83d\udc4b"),delay:0},{id:"2",start:(new Date).getTime()+2200,message:g()("So you have finally grown one year older but you have the brains of a child \ud83d\ude02"),delay:2200},{id:"3",start:(new Date).getTime()+4200,message:g()("What would you like for a gift... face mask \ud83d\ude37 or gloves\ud83e\udde4?"),delay:4200},{id:"4",start:(new Date).getTime()+6200,message:g()("Anyways keeping that aside, a very happy birthday to you \ud83c\udf82"),delay:6200},{id:"5",start:(new Date).getTime()+8200,message:"Have a blast! \u2728",delay:8200},{id:"6",start:(new Date).getTime()+10200,message:"Jainam. \ud83d\udc68\u200d\ud83d\udcbb",delay:10200}],f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"wishings-div"},y.map((function(e){return i.a.createElement(p,{key:e.id,id:e.id,start:e.start,message:e.message,delay:e.delay})})))}}]),a}(n.Component);var b=function(){return i.a.createElement("div",{id:"wishings"},i.a.createElement(f,{start:(new Date).getTime()}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.94e96cd4.chunk.js.map