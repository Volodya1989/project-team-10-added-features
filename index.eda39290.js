var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequired7c6;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var l={id:t,exports:{}};return e[t]=l,i.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequired7c6=i),i("gyeM6"),i("9L2ks"),i("2hTmC"),i("8BGGW");var l=i("5DwtN"),o=i("jJ57b"),a=i("gyeM6");const s=document.querySelector(".category-list"),c=document.querySelector(".load");(0,l.fetchAllCategories)().then((t=>{console.log(t);const e=t.map((({list_name:t})=>`<li class="category-list-item global-list light-theme theme-switch">${t}</li>`)).join("");s.insertAdjacentHTML("beforeend",e);const n=document.querySelectorAll(".category-list-item");n.forEach((t=>{t.addEventListener("click",(function(){n.forEach((t=>t.classList.remove("active"))),this.classList.add("active")}))})),"light"===o.shopping_info.theme?(0,a.renderTheme)("light"):(0,a.renderTheme)("dark"),c.classList.add("unvisible")})).catch((t=>{console.log(t)})),i("5DwtN"),i("jqvOP"),i("5DwtN");l=i("5DwtN");var r=i("2hTmC");o=i("jJ57b"),a=i("gyeM6");const d=document.querySelector(".category-list"),g=document.querySelector(".tb-container"),h=document.querySelector(".heading-primary"),b=document.querySelector("#allctgr"),m=document.querySelector(".loader");d.addEventListener("click",(async function(t){m.classList.remove("is-hidden");const e=t.target.textContent;console.log(e);const n=b.textContent;if(e===n){g.innerHTML="",(0,l.fetchTopBooks)().then(u);const t="Best Sellers Books",e=t.split(" ").splice(0,t.split(" ").length-1).join(" "),n=t.split(" ")[t.split(" ").length-1];h.innerHTML=`${e} <span class="colored-heading">${n}</span>`}else{const t=e.split(" ").splice(0,e.split(" ").length-1).join(" "),n=e.split(" ")[e.split(" ").length-1];h.innerHTML=`${t} <span class="colored-heading">${n}</span>`,h.classList.add("ctg-maintitle"),g.classList.add("flex-container");const i=await(0,l.fetchBooksByExactCategory)(e);m.classList.add("is-hidden"),function({data:t}){g.innerHTML="";const e=t.map((({author:t,title:e,book_image:n,_id:i})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${i}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${n}" alt="${e}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${e}</p>\n                <p class="tb-book-author global-p">${t}</p>\n              </div>\n            </a>\n          </li>`)).join("");g.innerHTML=e}(i)}})),setTimeout((t=>{m.classList.add("is-hidden")}),2500);const p=document.querySelector(".no-books-card");function u(t){if(0==t.data.length)p.classList.remove("is-hidden");else{const e=t.data.map((({list_name:t,books:e})=>`\n      <li class="tb-category-container">\n        <h2 class='tb-category global-title'>${t}</h2>\n        <div class='tb-books-container'>\n          <ul class="global-list flex-container">\n            ${e.map((({author:t,title:e,book_image:n,_id:i})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${i}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${n}" alt="${e}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${e}</p>\n                <p class="tb-book-author global-p">${t}</p>\n              </div>\n            </a>\n          </li>\n          `)).join("")}\n          </ul>\n        </div>\n        <button class="tb-button global-button light-theme theme-switch">See more</button>\n      </li>\n      `)).join("");m.classList.add("is-hidden"),g.insertAdjacentHTML("beforeend",e),"light"===o.shopping_info.theme?(0,a.renderTheme)("light"):(0,a.renderTheme)("dark"),(0,r.modalWindow)()}}(0,l.fetchTopBooks)().then(u),g.addEventListener("click",(async function(t){if(t.target.matches("button")){let e=t.target.closest(".tb-category-container").firstChild.nextSibling.textContent,n=t.target.closest(".tb-category-container").firstChild.nextSibling.nextSibling.nextSibling;!function({data:t},e){const n=`<ul class="global-list flex-container">\n            ${t.map((({author:t,title:e,book_image:n,_id:i})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${i}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${n}" alt="${e}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${e}</p>\n                <p class="tb-book-author global-p">${t}</p>\n              </div>\n            </a>\n          </li>`)).join("")}\n          </ul>`;e.innerHTML=n}(await(0,l.fetchBooksByExactCategory)(e),n),t.target.classList.add("is-hidden")}})),i("jJ57b"),i("bj3qq");
//# sourceMappingURL=index.eda39290.js.map
