(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n,t){e.exports=t(33)},23:function(e,n,t){},24:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(10),c=t.n(r),l=(t(23),t(11)),i=t(12),s=t(16),d=t(13),m=t(17),u=(t(24),t(14)),p=t.n(u),h=t(15),w=t.n(h),v=t(25),g=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(o)))).state={markdown:"# Hello there!\n## Welcome to my React Markdown Previewer! \n### Built with React :)\n\n-----------\n\n*italic*, **bold**,\n`monospace`, ~~strikethrough~~ and [links](https://www.freecodecamp.com).\n\n---\n\n> Block Quotes!\n\nUnordered list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3.pears\n\nHere's some `code`,\n\n```javascript\nfunction sayHello() {\n  return 'Hello world!';\n}\n```\n\n **Stromtoopocat** says Hi!\n\n ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg)"},t.updateMarkdown=function(e){this.setState({markdown:e})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=this.state.markdown;return o.a.createElement("div",{className:"App container"},o.a.createElement("header",{className:"my-header"},o.a.createElement("h1",null,"Markdown Previewer")),o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"left-col"},o.a.createElement(p.a,{controlId:"editor"},o.a.createElement(w.a,{as:"textarea",placeholder:"",value:n,onChange:function(n){return e.updateMarkdown(n.target.value)}}))),o.a.createElement("div",{className:"right-col"},o.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:v(n)}}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.3253f34a.chunk.js.map