function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("kyEFX",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("krr3K",(function(e,n){e.exports=new URL(o("kyEFX").resolve("eithW"),import.meta.url).toString()})),o.register("5i3z7",(function(e,n){e.exports=new URL(o("kyEFX").resolve("dE7Ct"),import.meta.url).toString()})),o.register("4e3al",(function(e,n){e.exports=new URL(o("kyEFX").resolve("aouNz"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.a2526786.js","eithW":"amazon_black.f2f25955.png","dE7Ct":"book_1.6766be83.png","aouNz":"book_2.91914384.png","a8cj2":"shopping-list.8ef3916b.js"}')),o("gyeM6"),o("9L2ks"),o("2hTmC"),o("8BGGW"),o("jJ57b");var i=o("jJ57b");const a=document.querySelector(".shop_plug"),s=document.querySelector(".js-shop_card");s.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;(0,i.removeShoppingListBoock)(e.target.dataset.id);document.getElementById(`${e.target.dataset.id}`).remove()})),i.shopping_info.shopping_list?(function(e){let n="";s.innerHTML=n,Object.keys(e).forEach((t=>{const{book_image:r,title:i,list_name:a,description:s,author:l,amazon_link:c,apple_books_link:d,bookshop_link:p}=e[t];n+=`\n      <div class="shop_card theme-switch light-theme dark-theme" id="${t}">\n      <img src=${r} alt=${i} />\n      <div class="shop_card-div_description">\n        <div class="shop_card-div_title">\n          <div>\n            <h2 class="global-title shop_card-title theme-switch light-theme dark-theme">${i}</h2>\n            <h3 class="global-title shop_card-category">\n              ${a}\n            </h3>\n          </div>\n          <button data-id=${t}></button>\n        </div>\n        <p class="global-p shop_card-description theme-switch light-theme dark-theme">\n          ${s}\n        </p>\n        <div class="shop_card-empty_place"></div>\n        <div class="shop_card-footer">\n          <p class="global-p shop_card-author">${l}</p>\n          <div class="shop_card-empty_place"></div>\n          <a class="global-link shop_card-link" href=${c} target="_blank" rel="noopener noreferrer">\n            <img class="shop_amazon"\n              src=${o("krr3K")}\n              alt="amazon"\n            />\n          </a>\n          <a class="global-link shop_card-link" href=${d} target="_blank" rel="noopener noreferrer">\n            <img\n              src= ${o("5i3z7")}\n              alt="books"\n              />\n           </a>\n          <a class="global-link shop_card-link" href=${p} target="_blank" rel="noopener noreferrer">\n            <img\n              src= ${o("4e3al")}\n              alt="books"\n            />\n          </a>\n        </div>\n      </div>\n    </div>\n    `})),s.insertAdjacentHTML("beforeend",n)}(i.shopping_info.shopping_list),a.style.display="none"):a.style.display="block",o("bj3qq");
//# sourceMappingURL=shopping-list.a2526786.js.map
