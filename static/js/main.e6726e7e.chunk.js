(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,n){e.exports=n(95)},95:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(10),r=n.n(i),c=n(35),l=n(96),s=n(149),u=n(136),f=n(140),d=n(66),m=n.n(d),p=n(65),g=n.n(p),h=n(141),b=n(144),v=n(147),E=n(143),w=n(142),y=n(148),k=n(137),O=n(146),j=n(139),C=["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude06","\ud83d\ude05","\ud83e\udd23","\ud83d\ude02","\ud83d\ude42","\ud83d\ude43","\ud83d\ude09","\ud83d\ude0a","\ud83d\ude07","\ud83d\ude0d","\ud83e\udd29","\ud83d\ude18","\ud83d\ude17","\ud83d\ude1a","\ud83d\ude19","\ud83d\ude0b","\ud83d\ude1b","\ud83d\ude1c","\ud83e\udd2a","\ud83d\ude1d","\ud83e\udd11","\ud83e\udd17","\ud83e\udd2d","\ud83e\udd2b","\ud83e\udd14","\ud83e\udd10","\ud83e\udd28","\ud83d\ude10","\ud83d\ude11","\ud83d\ude36","\ud83d\ude0f","\ud83d\ude12","\ud83d\ude44","\ud83d\ude2c","\ud83e\udd25","\ud83d\ude0c","\ud83d\ude14","\ud83d\ude2a","\ud83e\udd24","\ud83d\ude34","\ud83d\ude37","\ud83e\udd12","\ud83e\udd15","\ud83e\udd22","\ud83e\udd2e","\ud83e\udd27","\ud83d\ude35","\ud83e\udd2f","\ud83e\udd20","\ud83d\ude0e","\ud83e\udd13","\ud83e\uddd0","\ud83d\ude15","\ud83d\ude1f","\ud83d\ude41","\ud83d\ude2e","\ud83d\ude2f","\ud83d\ude32","\ud83d\ude33","\ud83d\ude26","\ud83d\ude27","\ud83d\ude28","\ud83d\ude30","\ud83d\ude25","\ud83d\ude22","\ud83d\ude2d","\ud83d\ude31","\ud83d\ude16","\ud83d\ude23","\ud83d\ude1e","\ud83d\ude13","\ud83d\ude29","\ud83d\ude2b","\ud83d\ude24","\ud83d\ude21","\ud83d\ude20","\ud83e\udd2c"],S=Object(l.a)(function(e){return Object(s.a)({fab:{margin:e.spacing(2),position:"absolute",bottom:0,right:0},button:{margin:e.spacing(4),position:"absolute",bottom:0},delete:{margin:e.spacing(2),position:"absolute",bottom:0,left:0},emotion:{fontFamily:"helvetica, sans-serif",fontSize:50},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},container:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"}})}),T=function(){var e=a.a.useState("Loading"),t=Object(c.a)(e,2),n=t[0],o=t[1],i=a.a.useState([]),r=Object(c.a)(i,2),l=r[0],s=r[1],d=a.a.useState(!1),p=Object(c.a)(d,2),T=p[0],Z=p[1],W=a.a.useState(""),N=Object(c.a)(W,2),$=N[0],A=N[1],U=a.a.useState(0),x=Object(c.a)(U,2),P=x[0],R=x[1],H=S(),L=function(e,t){var a=e||l;1!==t&&1!==P||(a=C);var i=a[Math.floor(Math.random()*a.length)];if(a.length>1)for(;i===n;)i=a[Math.floor(Math.random()*a.length)];o(i||"No emotion to set")};return a.a.useEffect(function(){fetch("https://api.jsonbin.io/b/5d029c6e4f234842a564ef57/latest",{headers:{"secret-key":"$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ."}}).then(function(e){return e.json()}).then(function(e){s(e.emotions),L(e.emotions)})},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null),a.a.createElement(k.a,{position:"static"},a.a.createElement(O.a,{value:P,onChange:function(e,t){R(t),L(void 0,t)}},a.a.createElement(j.a,{label:"Emotions"}),a.a.createElement(j.a,{label:"Emojis"}))),a.a.createElement("div",{className:H.container},a.a.createElement("p",{style:{fontSize:1===P?150:void 0},className:H.emotion},n),0===P&&a.a.createElement(f.a,{color:"primary","aria-label":"Add",className:H.delete,onClick:function(){var e=l.filter(function(e){return e!==n});s(e),L(e),fetch("https://api.jsonbin.io/b/5d029c6e4f234842a564ef57",{method:"PUT",headers:{"Content-Type":"application/json","secret-key":"$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ."},body:JSON.stringify({emotions:e})})}},a.a.createElement(g.a,null)),a.a.createElement(h.a,{className:H.button,variant:"contained",onClick:function(){return L()}},"Reload"),0===P&&a.a.createElement(f.a,{color:"primary","aria-label":"Add",className:H.fab,onClick:function(){return Z(!0)}},a.a.createElement(m.a,null)),a.a.createElement(v.a,{open:T,onClose:function(){return Z(!1)},"aria-labelledby":"form-dialog-title"},a.a.createElement(y.a,{id:"form-dialog-title"},"Add an Emotion"),a.a.createElement(w.a,null,a.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",label:"Emotion",fullWidth:!0,value:$,onChange:function(e){return A(e.target.value)}})),a.a.createElement(E.a,null,a.a.createElement(h.a,{onClick:function(){return Z(!1)},color:"primary"},"Cancel"),a.a.createElement(h.a,{onClick:function(){Z(!1);var e=l.concat([$]);s(e),fetch("https://api.jsonbin.io/b/5d029c6e4f234842a564ef57",{method:"PUT",headers:{"Content-Type":"application/json","secret-key":"$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ."},body:JSON.stringify({emotions:e})})},color:"primary"},"Add")))))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cyorpg",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/cyorpg","/service-worker.js");Z?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):W(t,e)})}}()}},[[70,1,2]]]);
//# sourceMappingURL=main.e6726e7e.chunk.js.map