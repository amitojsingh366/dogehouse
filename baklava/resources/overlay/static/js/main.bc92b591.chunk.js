(this["webpackJsonpdogehouse-baklava-overlay"]=this["webpackJsonpdogehouse-baklava-overlay"]||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var i=r(1),n=r.n(i),a=r(3),o=r.n(a),c=(r(9),r(4)),s=(r(10),r(0)),u=window.require("electron").ipcRenderer;function d(e){return Object(s.jsx)("div",{className:e.speaker.isSpeaking?"active-speaker-cont left":"left",children:Object(s.jsx)("div",{className:"img-div",children:Object(s.jsx)("img",{width:"50px",height:"50px",className:e.speaker.isSpeaking?"active-speaker":"",src:e.speaker.avatarUrl})})})}var p=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),r=t[0],n=t[1];return Object(i.useEffect)((function(){u.send("@overlay/start_ipc",!0),u.on("@overlay/overlayData",(function(e,t){if(t.currentRoom){var r=[];t.currentRoom.users.forEach((function(e){e.roomPermissions?(e.roomPermissions.isSpeaker||t.currentRoom.creatorId===e.id)&&(e.isSpeaking=!1,e.isMuted=!1,t.currentRoom.activeSpeakerMap[e.id]&&(e.isSpeaking=!0),t.currentRoom.muteMap[e.id]&&(e.isMuted=!0),r.push(e)):t.currentRoom.creatorId===e.id&&(e.isSpeaking=!1,e.isMuted=!1,t.currentRoom.activeSpeakerMap[e.id]&&(e.isSpeaking=!0),t.currentRoom.muteMap[e.id]&&(e.isMuted=!0),r.push(e)),console.log(e)})),n(r)}}))}),[]),Object(s.jsx)("div",{className:"App",width:"100%",children:r&&r.map((function(e){return Object(s.jsx)(d,{speaker:e},e.id)}))})},l=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),i(e),n(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),l()},9:function(e,t,r){}},[[12,1,2]]]);
//# sourceMappingURL=main.bc92b591.chunk.js.map