(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(4),r=n.n(a),i=n(14),s=n.n(i),o=(n(23),n(13)),u=n.n(o),j=n(15),p=n(10),d=(n(25),n(8)),b=(n(30),n(27),n(16)),l=n(17);d.a.apps.length?d.a.app():d.a.initializeApp({apiKey:"AIzaSyATc-uDAlbhWTAqW-b6MpvA-7nHtYHDAPA",authDomain:"chat-app-f913d.firebaseapp.com",projectId:"chat-app-f913d",storageBucket:"chat-app-f913d.appspot.com",messagingSenderId:"505071026941",appId:"1:505071026941:web:9e2ba702d1f4fc16657494"});var h=d.a.auth(),O=d.a.firestore();function f(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;h.signInWithPopup(e)},children:"Sign in with Google"})})}function g(){return h.currentUser&&Object(c.jsx)("button",{className:"sign-out",onClick:function(){return h.signOut()},children:"Sign Out"})}function m(){var e=Object(a.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),r=Object(b.a)(n,{idField:"id"}),i=Object(p.a)(r,1)[0],s=Object(a.useState)(""),o=Object(p.a)(s,2),l=o[0],f=o[1],g=function(){var n=Object(j.a)(u.a.mark((function n(c){var a,r,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),a=h.currentUser,r=a.uid,i=a.photoURL,n.next=4,t.add({text:l,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:i});case 4:f(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("main",{children:[i&&i.map((function(e){return Object(c.jsx)(x,{message:e},e.id)})),Object(c.jsx)("span",{ref:e})]}),Object(c.jsxs)("form",{onSubmit:g,children:[Object(c.jsx)("input",{value:l,onChange:function(e){return f(e.target.value)},placeholder:"say something nice"}),Object(c.jsx)("button",{type:"submit",disabled:!l,children:"\ud83d\udd4a\ufe0f"})]})]})}function x(e){var t=e.message,n=t.text,a=t.uid,r=t.photoURL,i=a===h.currentUser.uid?"sent":"received";return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"message ".concat(i),children:[Object(c.jsx)("img",{src:r||"https://api.adorable.io/avatars/23/abott@adorable.png",alt:""}),Object(c.jsx)("p",{children:n})]})})}var v=function(){var e=Object(l.a)(h),t=Object(p.a)(e,1)[0];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(c.jsx)(g,{})]}),Object(c.jsx)("section",{children:t?Object(c.jsx)(m,{}):Object(c.jsx)(f,{})})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),A()}},[[29,1,2]]]);
//# sourceMappingURL=main.faadd5a2.chunk.js.map