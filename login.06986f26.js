function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("3mZO9",(function(t,a){var n=o("gKkQl"),r=o("7Y9D8"),i=o("9OeKo"),s=o("eyjy7"),l=o("jAzyG");const d=(0,n.initializeApp)({apiKey:"AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU",authDomain:"project-team-10-5792d.firebaseapp.com",projectId:"project-team-10-5792d",storageBucket:"project-team-10-5792d.appspot.com",messagingSenderId:"76240638065",appId:"1:76240638065:web:5518f239b638187e380bd0",measurementId:"G-CCNXH403RH"}),u=(0,s.getAuth)(d),m=(0,l.getDatabase)(d),c={},p=document.querySelector(".login-form"),g=document.querySelector("input[name='email']"),f=document.querySelector("input[name='password']"),y=JSON.parse(localStorage.getItem("login-form")),w=e=>{c[e.target.name.trim()]=e.target.value.trim(),localStorage.setItem("sign-up-form",JSON.stringify(c)),void 0===c.email&&(c.email=""),void 0===c.username&&(c.username="")},v=t=>{t.preventDefault(),p.reset();const{password:a,email:n}=c;u.currentUser?e(r).Notify.warning("You are already signed in!"):(0,s.signInWithEmailAndPassword)(u,n,a).then((t=>{const a=t.user,n=new Date;(0,l.update)((0,l.ref)(m,"users/"+a.uid),{last_login:n}),e(r).Notify.success("You are logging in now..."),setTimeout((()=>window.location="https://millenialia.github.io/project-team-10-added-features/"),3e3)})).catch((t=>{t.code;const a=t.message;e(r).Notify.failure(a)}))};document.addEventListener("DOMContentLoaded",e(i)((()=>{null!==y&&(g.value=y.email.length>0?y.email:"",f.value=y.message.length>0?y.message:"",c.email=g.value,c.password=f.value,localStorage.setItem("login-form",JSON.stringify(c)))}),500)),p&&(p.addEventListener("input",e(i)(w,500)),p.addEventListener("submit",v))})),o("3mZO9");
//# sourceMappingURL=login.06986f26.js.map