(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},38:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(32),a(24)),l=a(6),s=a(10),f=a(11),p=a(14),m=a(12),d=a(15),u=a(13),g=a(23),h=a(16),w=(a(38),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).clicked=function(){a.props.url&&window.open(a.props.url||"#","_blank")},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.clicked,className:"sociocon"},o.a.createElement("div",{className:"sociocon-container sociocon-container-icon"},o.a.createElement(u.a,{className:"sociocon-icon",icon:this.props.faIcon})),o.a.createElement("div",{className:"sociocon-container sociocon-container-text"},o.a.createElement("span",null,this.props.children)))}}]),t}(n.Component)),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).scrollAndHideMe=function(){var e=a.state.popupTitle;window.scrollTo(0,c.a.findDOMNode(a.refs.left).offsetTop),a.setState({popupTitle:e+" frontpage-popup-info-hidden"})},a.state={woffyUrl:"http://127.0.0.1:5000/watercolor2.png",bgUrl:"http://127.0.0.1:5000/bg.png",popupTitle:"frontpage-popup-info frontpage-popup-info-animated"},a}return Object(d.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.woffyUrl,a=e.bgUrl,n=e.popupTitle;return o.a.createElement("div",{className:"frontpage"},o.a.createElement("div",{className:"frontpage-main"},o.a.createElement("div",{ref:"left",className:"frontpage-main-left"},o.a.createElement("div",{className:"frontpage-main-left-content"},o.a.createElement("h1",{className:"frontpage-heading"},"NerdyWoffy"),o.a.createElement("h2",{className:"frontpage-subheading"},"Your usual wolf friend but slightly nerd!"),o.a.createElement("div",{className:"frontpage-main-left-sociocons"},o.a.createElement(w,{faIcon:h.b,url:"https://telegram.dog/nerdywoffy"},"nerdywoffy"),o.a.createElement(w,{faIcon:h.a,url:"https://discordapp.com/users/133218454852337664"},"NerdyWoffy#1984"),o.a.createElement(w,{faIcon:h.c,url:"https://www.twitter.com/nerdywoffy"},"nerdywoffy")))),o.a.createElement("div",{className:"frontpage-main-right"},o.a.createElement("img",{className:"frontpage-sideimage frontpage-main-right-image-right frontpage-main-right-background",alt:"Background",src:a}),o.a.createElement("img",{className:"frontpage-sideimage frontpage-main-right-image-right frontpage-main-right-woffy",alt:"Woffy :3",src:t}),o.a.createElement("span",{onClick:this.scrollAndHideMe,className:n},o.a.createElement(u.a,{icon:g.a})))))}}]),t}(n.Component);var y=function(){return o.a.createElement(i.a,null,o.a.createElement(l.a,{path:"/",exact:!0,component:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.eb506cf3.chunk.js.map