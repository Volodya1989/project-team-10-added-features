!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("401fC",(function(t,n){var i=r("fkNhc"),o=r("6JpON"),a=r("dCfNN"),u=r("gQOBw"),f=r("cokon"),l=(0,i.initializeApp)({apiKey:"AIzaSyDwpmuhImdY7RHC3U0YYZIshSlCJATjNaU",authDomain:"project-team-10-5792d.firebaseapp.com",projectId:"project-team-10-5792d",storageBucket:"project-team-10-5792d.appspot.com",messagingSenderId:"76240638065",appId:"1:76240638065:web:5518f239b638187e380bd0",measurementId:"G-CCNXH403RH"}),s=(0,u.getAuth)(l),c=(0,f.getDatabase)(l),d={},m=document.querySelector(".login-form"),p=document.querySelector("input[name='email']"),g=document.querySelector("input[name='password']"),v=JSON.parse(localStorage.getItem("login-form"));document.addEventListener("DOMContentLoaded",e(a)((function(){null!==v&&(p.value=v.email.length>0?v.email:"",g.value=v.message.length>0?v.message:"",d.email=p.value,d.password=g.value,localStorage.setItem("login-form",JSON.stringify(d)))}),500)),m&&(m.addEventListener("input",e(a)((function(e){d[e.target.name.trim()]=e.target.value.trim(),localStorage.setItem("login-form",JSON.stringify(d)),void 0===d.email&&(d.email=""),void 0===d.password&&(d.password="")}),500)),m.addEventListener("submit",(function(t){t.preventDefault(),m.reset();var n=d.password,i=d.email;s.currentUser?e(o).Notify.warning("You are already signed in!"):(0,u.signInWithEmailAndPassword)(s,i,n).then((function(t){var n=t.user;localStorage.setItem("_userEmail",JSON.stringify(i)),localStorage.removeItem("login-form");var r=new Date;(0,f.update)((0,f.ref)(c,"users/"+n.uid),{last_login:r}),e(o).Notify.success("You are logging in now..."),setTimeout((function(){return window.location="https://volodya1989.github.io/books-store/"}),3e3)})).catch((function(t){t.code;var n=t.message;e(o).Notify.failure(n)}))})))})),r.register("dCfNN",(function(n,i){var o=r("l5bVx"),a="Expected a function",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,p=d||m||Function("return this")(),g=Object.prototype.toString,v=Math.max,y=Math.min,b=function(){return p.Date.now()};function w(e,t,n){var i,r,o,u,f,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function p(t){var n=i,o=r;return i=r=void 0,s=t,u=e.apply(o,n)}function g(e){return s=e,f=setTimeout(O,t),c?p(e):u}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=o}function O(){var e=b();if(w(e))return S(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?y(n,o-(e-s)):n}(e))}function S(e){return f=void 0,m&&i?p(e):(i=r=void 0,u)}function j(){var e=b(),n=w(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=N(t)||0,h(n)&&(c=!!n.leading,o=(d="maxWait"in n)?v(N(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),j.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=l=r=f=void 0},j.flush=function(){return void 0===f?u:S(b())},j}function h(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function N(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var i=l.test(t);return i||s.test(t)?c(t.slice(2),i?2:8):f.test(t)?NaN:+t}n.exports=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return h(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),w(e,t,{leading:i,maxWait:t,trailing:r})}})),r("401fC")}();
//# sourceMappingURL=login.aa076e0c.js.map
