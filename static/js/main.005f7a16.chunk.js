(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{54:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(32),i=n.n(c),s=n(6),u=n(18),o=n(17),j=n(5),b=n(7),l=n.n(b),d=n(11),p=n(21);n(43),n(55),n(56);p.a.initializeApp({apiKey:"AIzaSyAeWCmRAkw8HA71ZEsyWhbogUKNoyls3OY",authDomain:"nwitter-a2659.firebaseapp.com",projectId:"nwitter-a2659",storageBucket:"nwitter-a2659.appspot.com",messagingSenderId:"661613096419",appId:"1:661613096419:web:8f87a6493ae026176ac4d6"});var h,O,x,f,m,g,v=p.a,w=p.a.auth(),y=p.a.firestore(),k=p.a.storage(),S=n(1),C=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],b=Object(r.useState)(""),p=Object(s.a)(b,2),h=p[0],O=p[1],x=(Object(j.f)(),function(e){var t=e.target,n=t.name,r=t.value;"email"===n?a(r):"password"===n&&o(r)}),f=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.createUserWithEmailAndPassword(n,u);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),O(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("form",{onSubmit:f,children:[Object(S.jsx)("input",{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",required:!0,value:n,onChange:x}),Object(S.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:u,onChange:x}),Object(S.jsx)("input",{type:"submit",value:"\uacc4\uc815\uc0dd\uc131"}),h?"\uc798\ubabb\uc785\ub825\ud588\uc5b4":""]})})},U=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(s.a)(c,2),u=i[0],b=i[1],p=Object(r.useState)(""),h=Object(s.a)(p,2),O=h[0],x=h[1],f=(Object(j.f)(),function(e){var t=e.target,n=t.name,r=t.value;"email"===n?a(r):"password"===n&&b(r)}),m=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w.signInWithEmailAndPassword(n,u);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),x(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{onSubmit:m,children:[Object(S.jsx)("input",{name:"email",type:"text",placeholder:"\uc774\uba54\uc77c",required:!0,value:n,onChange:f}),Object(S.jsx)("input",{name:"password",type:"password",placeholder:"\ube44\ubc00\ubc88\ud638",required:!0,value:u,onChange:f}),Object(S.jsx)("input",{type:"submit",value:"\ub85c\uadf8\uc778"}),O?"\uc798\ubabb\uc785\ub825\ud588\uc5b4":""]}),Object(S.jsx)(o.b,{to:"/Account",children:"\uacc4\uc815\uc0dd\uc131"})]})},A=n(15),N=A.c.div(h||(h=Object(u.a)(["\n  font-size: 13px;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),F=A.c.div(O||(O=Object(u.a)(["\n  width:500px;\n  height: 500px;\n  background-color: gold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),I=A.c.button(x||(x=Object(u.a)(['\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  background-color: white;\n  border: 0;\n  cursor: pointer;\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg");\n  background-repeat: no-repeat;\n  background-size: contain;\n']))),D=A.c.button(f||(f=Object(u.a)(['\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  background-color: white;\n  border: 0;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-image: url("https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png");\n']))),P=function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new v.auth.GoogleAuthProvider:"github"===n&&(r=new v.auth.GithubAuthProvider),e.next=4,w.signInWithPopup(r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)(N,{children:Object(S.jsxs)(F,{children:[Object(S.jsx)(U,{}),Object(S.jsxs)("div",{children:[Object(S.jsx)(I,{onClick:e,name:"google"}),Object(S.jsx)(D,{onClick:e,name:"github"})]})]})})},E=n(37),L=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(r.useState)(!1),c=Object(s.a)(a,2),i=c[0],u=c[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),b=j[0],p=j[1],h=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,y.doc("nweet/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,k.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return u((function(e){return!e}))},x=function(){var e=Object(d.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,y.doc("nweet/".concat(t.id)).update({text:b});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{children:i?Object(S.jsx)(S.Fragment,{children:n&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{onSubmit:x,children:[Object(S.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:b,required:!0,onChange:function(e){var t=e.target.value;p(t)}}),Object(S.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(S.jsx)("button",{onClick:O,children:"Cancel"})]})}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(S.jsx)("img",{alt:"",src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("button",{onClick:h,children:"Delete Nweet"}),Object(S.jsx)("button",{onClick:O,children:"Edit Nweet"})]})]})})},z=n(58),R=function(e){var t=e.userObj,n=Object(r.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],b=o[1],p=function(){var e=Object(d.a)(l.a.mark((function e(n){var r,a,s,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return a=k.ref().child("".concat(t.uid,"/").concat(Object(z.a)())),e.next=6,a.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return u={text:c,createAt:Date.now(),creatorId:t.uid,attachmentUrl:r},e.next=13,y.collection("nweet").add(u);case 13:i(""),b("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("form",{onSubmit:p,children:[Object(S.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(S.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;t&&(n.onloadend=function(e){var t=e.currentTarget.result;b(t)},n.readAsDataURL(t))}}),Object(S.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{alt:"",src:j,width:"50px",height:"50px"}),Object(S.jsx)("button",{onClick:function(){return b("")},children:"Clear"})]})]})},W=function(e){var t=e.userObj,n=Object(r.useState)([]),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(r.useEffect)((function(){y.collection("nweet").orderBy("createAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(E.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)(R,{userObj:t}),Object(S.jsx)("div",{children:c.map((function(e){return Object(S.jsx)(L,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},q=function(e){var t=e.userObj;return Object(S.jsx)("nav",{children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(o.b,{to:"/Home",children:"\uc790\uc720\ud1a0\ud06c"})}),Object(S.jsx)("li",{children:Object(S.jsxs)(o.b,{to:"/profile",children:[t.displayName,"\ub2d8\uc758 \ud504\ub85c\ud544"]})})]})})},G=function(e){var t=e.refreshUser,n=e.userObj,a=Object(r.useState)(n.displayName),c=Object(s.a)(a,2),i=c[0],u=c[1],o=Object(j.f)(),b=function(){var e=Object(d.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n.displayName===i){e.next=5;break}return e.next=4,n.updateProfile({displayName:i});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("form",{onSubmit:b,children:[Object(S.jsx)("input",{onChange:function(e){var t=e.target.value;u(t)},value:i,type:"text",placeholder:"Display name"}),Object(S.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(S.jsx)("button",{onClick:function(){w.signOut(),o.push("/")},children:"Log Out"})]})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userObj;return Object(S.jsxs)(o.a,{children:[n&&Object(S.jsx)(q,{userObj:r}),Object(S.jsx)(j.c,{children:n?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(j.a,{exact:!0,path:"/Home",component:W,children:Object(S.jsx)(W,{userObj:r})}),Object(S.jsx)(j.a,{exact:!0,path:"/profile",children:Object(S.jsx)(G,{refreshUser:t,userObj:r})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(j.a,{exact:!0,path:"/",component:P,children:Object(S.jsx)(P,{})}),Object(S.jsx)(j.a,{exact:!0,path:"/Account",component:C,children:Object(S.jsx)(C,{})})]})})]})},H=n(36),_=Object(A.a)(m||(m=Object(u.a)(["\n    ",";\n\n    body{\n        width: 100%;\n        height: 100vh;\n        font-size: 20px;\n        background-color: yellow;\n        font-family: 'Noto Sans KR', sans-serif;\n    }\n"])),H.a),K=A.c.body(g||(g=Object(u.a)(["\n  width: 100%;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n"])));var J=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(s.a)(c,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){w.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),a(!0)}))}),[]),Object(S.jsx)(K,{children:n?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(_,{}),Object(S.jsx)(B,{refreshUser:function(){var e=w.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u})]}):"Initializing..."})};i.a.render(Object(S.jsxs)(a.a.StrictMode,{children:[Object(S.jsx)(J,{}),Object(S.jsx)("globalStyles",{})]}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.005f7a16.chunk.js.map