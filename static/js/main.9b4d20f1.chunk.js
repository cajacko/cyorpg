(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{68:function(e,n,t){e.exports=t(93)},93:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),i=t(9),r=t.n(i),c=t(34),l=t(126),s=t(138),f=t(128),u=t(59),d=t.n(u),m=t(58),p=t.n(m),h=t(130),g=t(134),b=t(136),v=t(133),w=t(132),y=t(137),E=Object(l.a)(function(e){return Object(s.a)({fab:{margin:e.spacing(2),position:"absolute",bottom:0,right:0},button:{margin:e.spacing(4),position:"absolute",bottom:0},delete:{margin:e.spacing(2),position:"absolute",bottom:0,left:0},emotion:{fontFamily:"helvetica, sans-serif",fontSize:50},paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},container:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center"}})}),k=function(){var e=a.a.useState("Loading"),n=Object(c.a)(e,2),t=n[0],o=n[1],i=a.a.useState([]),r=Object(c.a)(i,2),l=r[0],s=r[1],u=a.a.useState(!1),m=Object(c.a)(u,2),k=m[0],O=m[1],j=a.a.useState(""),C=Object(c.a)(j,2),S=C[0],T=C[1],Z=E(),W=function(e){var n=e||l,a=n[Math.floor(Math.random()*n.length)];if(n.length>1)for(;a===t;)a=n[Math.floor(Math.random()*n.length)];o(a||"No emotion to set")};return a.a.useEffect(function(){fetch("https://api.jsonbin.io/b/5d029c6e4f234842a564ef57/latest",{headers:{"secret-key":"$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ."}}).then(function(e){return e.json()}).then(function(e){s(e.emotions),W(e.emotions)})},[]),a.a.createElement("div",{className:Z.container},a.a.createElement("p",{className:Z.emotion},t),a.a.createElement(f.a,{color:"primary","aria-label":"Add",className:Z.delete,onClick:function(){var e=l.filter(function(e){return e!==t});s(e),W(e),fetch("https://api.jsonbin.io/b/5d029c6e4f234842a564ef57",{method:"PUT",headers:{"Content-Type":"application/json","secret-key":"$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ."},body:JSON.stringify({emotions:e})})}},a.a.createElement(p.a,null)),a.a.createElement(h.a,{className:Z.button,variant:"contained",onClick:function(){return W()}},"Reload"),a.a.createElement(f.a,{color:"primary","aria-label":"Add",className:Z.fab,onClick:function(){return O(!0)}},a.a.createElement(d.a,null)),a.a.createElement(b.a,{open:k,onClose:function(){return O(!1)},"aria-labelledby":"form-dialog-title"},a.a.createElement(y.a,{id:"form-dialog-title"},"Add an Emotion"),a.a.createElement(w.a,null,a.a.createElement(g.a,{autoFocus:!0,margin:"dense",id:"name",label:"Emotion",fullWidth:!0,value:S,onChange:function(e){return T(e.target.value)}})),a.a.createElement(v.a,null,a.a.createElement(h.a,{onClick:function(){return O(!1)},color:"primary"},"Cancel"),a.a.createElement(h.a,{onClick:function(){O(!1);var e=l.concat([S]);s(e),fetch("https://api.jsonbin.io/b/5d029c6e4f234842a564ef57",{method:"PUT",headers:{"Content-Type":"application/json","secret-key":"$2a$10$89POHX9tTf1imV1Z8UiQ6Ov0WSLocHomZ3OaRecBZ4gfiospExTZ."},body:JSON.stringify({emotions:e})})},color:"primary"},"Add"))))},O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(a.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cyorpg",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/cyorpg","/service-worker.js");O?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(n,e)})}}()}},[[68,1,2]]]);
//# sourceMappingURL=main.9b4d20f1.chunk.js.map