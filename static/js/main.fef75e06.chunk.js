(this.webpackJsonptwitter_clone=this.webpackJsonptwitter_clone||[]).push([[0],{50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(32),s=a.n(r),i=a(9),o=a(24),u=a(6),l=a(10),j=a.n(l),d=a(17),b=a(23);a(41),a(53),a(52);b.a.initializeApp({apiKey:"AIzaSyAFsNGdLFpR4FKwYAHwsbDx_Ab2ClV0C2k",authDomain:"qwitter-25dd2.firebaseapp.com",projectId:"qwitter-25dd2",storageBucket:"qwitter-25dd2.appspot.com",messagingSenderId:"303601108897",appId:"1:303601108897:web:7842dcb37efb65b933ede0"});var p=b.a,h=b.a.auth(),m=b.a.firestore(),O=b.a.storage(),f=a(1),x=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(n.useState)(!0),b=Object(i.a)(l,2),p=b[0],m=b[1],O=Object(n.useState)(""),x=Object(i.a)(O,2),v=x[0],g=x[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&u(n)},y=function(){var e=Object(d.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,h.createUserWithEmailAndPassword(a,o);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,h.signInWithEmailAndPassword(a,o);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:y,className:"container",children:[Object(f.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:a,onChange:w,className:"authInput"}),Object(f.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"authInput"}),Object(f.jsx)("input",{type:"submit",className:"authInput authSubmit",value:p?"Create Account":"Log In"}),v&&Object(f.jsx)("span",{className:"authError",children:v})]}),Object(f.jsx)("span",{onClick:function(){return m((function(e){return!e}))},className:"authSwitch",children:p?"Sing In":"Create Account"})]})},v=a(12),g=a(21),w=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new p.auth.GoogleAuthProvider:"github"===a?n=new p.auth.GithubAuthProvider:"facebook"===a&&(n=new p.auth.FacebookAuthProvider),e.next=4,h.signInWithPopup(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"authContainer",children:[Object(f.jsx)(v.a,{icon:g.d,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(f.jsx)(x,{}),Object(f.jsxs)("div",{className:"authBtns",children:[Object(f.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(f.jsx)(v.a,{icon:g.c})]}),Object(f.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(f.jsx)(v.a,{icon:g.b})]}),Object(f.jsxs)("button",{onClick:e,name:"facebook",className:"authBtn",children:["Continue with Facebook ",Object(f.jsx)(v.a,{icon:g.a})]})]})]})},y=a(35),N=a(19),k=function(e){var t=e.qweetObj,a=e.isOwner,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(n.useState)(t.text),l=Object(i.a)(u,2),b=l[0],p=l[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this qweet?")){e.next=4;break}return e.next=4,m.doc("qweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,O.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){o((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m.doc("qweets/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)("div",{className:"qweet",children:s?Object(f.jsx)(f.Fragment,{children:a&&Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("form",{onSubmit:g,className:"container qweetEdit",children:[Object(f.jsx)("div",{className:"username_box",children:Object(f.jsx)("h4",{className:"username",children:t.creatorName})}),Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;p(t)},type:"text",placeholder:"Edit your qweet",value:b,required:!0,autoFocus:!0,className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Update Qweet",className:"formBtn"})]}),Object(f.jsx)("span",{onClick:x,className:"formBtn cancelBtn",children:"Cancel"})]})}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"username_box",children:Object(f.jsx)("h4",{className:"username",children:t.creatorName})}),Object(f.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(f.jsx)("img",{src:t.attachmentUrl,alt:"attachment"}),a&&Object(f.jsxs)("div",{className:"qweet__actions",children:[Object(f.jsx)("span",{onClick:h,children:Object(f.jsx)(v.a,{icon:N.d})}),Object(f.jsx)("span",{onClick:x,children:Object(f.jsx)(v.a,{icon:N.a})})]})]})})},C=a(55),F=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),u=Object(i.a)(o,2),l=u[0],b=u[1],p=function(){var e=Object(d.a)(j.a.mark((function e(a){var n,c,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===l){e.next=12;break}return c=O.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:n=e.sent;case 12:return o={text:r,createdAt:Date.now(),creatorId:t.uid,creatorName:t.displayName,attachmentUrl:n},e.next=15,m.collection("qweets").add(o);case 15:s(""),b("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("form",{onSubmit:p,className:"factoryForm",children:[Object(f.jsxs)("div",{className:"factoryInput__container",children:[Object(f.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(f.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(f.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(f.jsx)("span",{children:"Add photos"}),Object(f.jsx)(v.a,{icon:N.b})]}),Object(f.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){var t=e.currentTarget.result;b(t)},a.readAsDataURL(t)},style:{opacity:0}}),l&&Object(f.jsxs)("div",{className:"factoryForm__attachment",children:[Object(f.jsx)("img",{src:l,style:{backgroundImage:l},alt:"attachment"}),Object(f.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return b("")},children:[Object(f.jsx)("span",{children:"Remove"}),Object(f.jsx)(v.a,{icon:N.c})]})]})]})},S=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(i.a)(a,2),r=c[0],s=c[1];return Object(n.useEffect)((function(){var e=m.collection("qweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));s(t)}));return function(){return e()}}),[]),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(F,{userObj:t}),Object(f.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(f.jsx)(k,{qweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},I=function(e){var t=e.refreshUser,a=e.userObj,c=Object(u.f)(),r=Object(n.useState)(a.displayName),s=Object(i.a)(r,2),o=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a.displayName===o){e.next=6;break}return e.next=4,a.updateProfile({displayName:o});case 4:t(),c.push("/");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(f.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Display Name",value:o,autoFocus:!0,className:"formInput"}),Object(f.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(f.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){h.signOut(),c.push("/")},children:"Log Out"})]})},A=function(e){var t=e.userObj;return Object(f.jsx)("nav",{style:{marginTop:"20px"},children:Object(f.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:"50"},children:[Object(f.jsx)("li",{children:Object(f.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(f.jsx)(v.a,{icon:g.d,color:"#04AAFF",size:"2x"})})}),Object(f.jsx)("li",{children:Object(f.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(f.jsx)(v.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(f.jsx)("span",{style:{marginTop:12},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},_=function(e){var t=e.refreshUser,a=e.isLoggedIn,n=e.userObj;return Object(f.jsxs)(o.a,{children:[a&&Object(f.jsx)(A,{userObj:n}),Object(f.jsx)(u.c,{children:Object(f.jsx)(f.Fragment,{children:a?Object(f.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(f.jsx)(u.a,{exact:!0,path:"/",children:Object(f.jsx)(S,{userObj:n})}),Object(f.jsx)(u.a,{exact:!0,path:"/profile",children:Object(f.jsx)(I,{refreshUser:t,userObj:n})})]}):Object(f.jsx)(u.a,{exact:!0,path:"/",children:Object(f.jsx)(w,{})})})})]})};var q=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){u(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),Object(f.jsxs)(f.Fragment,{children:[a?Object(f.jsx)(_,{refreshUser:function(){var e=h.currentUser;u({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},userObj:o,isLoggedIn:Boolean(o)}):"Initializing...",Object(f.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Qwitter"]})]})};a(50);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.fef75e06.chunk.js.map