(this.webpackJsonpreactfire=this.webpackJsonpreactfire||[]).push([[0],{28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(16),s=a.n(c),r=a(11),i=a(17).a.initializeApp({apiKey:"AIzaSyBwmkD9U-X_rBHTgPDOJAr0IULXJOetMLg",authDomain:"reactfire-ac5a6.firebaseapp.com",projectId:"reactfire-ac5a6",storageBucket:"reactfire-ac5a6.appspot.com",messagingSenderId:"152042234778",appId:"1:152042234778:web:082adfb2457805ae635023",measurementId:"G-BBNBVRK0F4"}),o=a(4),u=function(e){var t=e.email,a=e.setEmail,n=e.password,c=e.setPassword,s=e.handleLogin,r=e.handleSignup,i=e.hasAccount,u=e.setHasAccount,l=e.emailError,d=e.passwordError;return Object(o.jsx)("section",{className:"login",children:Object(o.jsxs)("div",{className:"loginContainer",children:[Object(o.jsx)("label",{children:"Username"}),Object(o.jsx)("input",{type:"text",autoFocus:!0,required:!0,placeholder:"Enter your Email",value:t,onChange:function(e){return a(e.target.value)}}),Object(o.jsx)("p",{className:"errorMsg",children:l}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",required:!0,placeholder:"Enter your Password",value:n,onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("p",{className:"errorMsg",children:d}),Object(o.jsx)("div",{className:"btnContainer",children:i?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:s,children:"Sign in"}),Object(o.jsxs)("p",{children:["Dont have an account ?",Object(o.jsx)("span",{onClick:function(){return u(!i)},children:"Sign up"})," "]})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:r,children:"Sign up"}),Object(o.jsxs)("p",{children:["Have an account ?",Object(o.jsx)("span",{onClick:function(){return u(!i)},children:"Sign in"})]})]})})]})})},l=function(e){var t=e.handleLogout;return Object(o.jsx)("section",{className:"hero",children:Object(o.jsxs)("nav",{children:[Object(o.jsx)("h2",{children:"DOB:1/1/1999 PLACE OF BIRTH:'DEHRADUN'"}),Object(o.jsx)("button",{onClick:t,children:"Logout"})]})})},d=(a(28),function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),d=Object(r.a)(s,2),j=d[0],h=d[1],b=Object(n.useState)(""),O=Object(r.a)(b,2),p=O[0],g=O[1],m=Object(n.useState)(""),f=Object(r.a)(m,2),x=f[0],w=f[1],v=Object(n.useState)(""),E=Object(r.a)(v,2),S=E[0],A=E[1],k=Object(n.useState)(!1),C=Object(r.a)(k,2),B=C[0],I=C[1],N=function(){w(""),A("")},y=function(){i.auth().onAuthStateChanged((function(e){e?(h(""),g(""),c(e)):c("")}))};return Object(n.useEffect)((function(){y()}),[]),Object(o.jsx)("div",{className:"App",children:a?Object(o.jsx)(l,{handleLogout:function(){i.auth().signOut()}}):Object(o.jsx)(u,{email:j,setEmail:h,password:p,setPassword:g,handleLogin:function(){N(),i.auth().signInWithEmailAndPassword(j,p).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":w(e.message);break;case"auth/wrong-password":A(e.message)}}))},handleSignup:function(){N(),i.auth().createUserWithEmailAndPassword(j,p).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":case"auth/user-not-found":w(e.message);break;case"auth/weak-password":A(e.message)}}))},hasAccount:B,setHasAccount:I,emailError:x,passwordError:S})})});s.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4c6571a1.chunk.js.map