var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,o.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("gyeM6"),o("9L2ks"),o("2hTmC"),o("8BGGW");var l=o("5DwtN"),i=o("jJ57b"),a=o("gyeM6");const s=document.querySelector(".category-list"),c=document.querySelector(".load");(0,l.fetchAllCategories)().then((e=>{console.log(e);const t=e.map((({list_name:e})=>`<li class="category-list-item global-list light-theme theme-switch">${e}</li>`)).join("");s.insertAdjacentHTML("beforeend",t),"light"===i.shopping_info.theme?(0,a.renderTheme)("light"):(0,a.renderTheme)("dark"),c.classList.add("unvisible")})).catch((e=>{console.log(e)})),o("5DwtN");l=o("5DwtN");var r=o("2hTmC");i=o("jJ57b"),a=o("gyeM6");const d=document.querySelector(".category-list"),b=document.querySelector(".tb-container"),g=document.querySelector(".heading-primary");d.addEventListener("click",(async function(e){const t=e.target.textContent;g.textContent=t,g.classList.add("ctg-maintitle"),b.classList.add("flex-container");!function({data:e}){b.innerHTML="";const t=e.map((({author:e,title:t,book_image:n,_id:o})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${o}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${n}" alt="${t}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${t}</p>\n                <p class="tb-book-author global-p">${e}</p>\n              </div>\n            </a>\n          </li>`)).join("");b.innerHTML=t}(await(0,l.fetchBooksByExactCategory)(t))}));const h=document.querySelector(".no-books-card");(0,l.fetchTopBooks)().then((function(e){if(0==e.data.length)h.classList.remove("is-hidden");else{const t=e.data.map((({list_name:e,books:t})=>`\n      <li class="tb-category-container">\n        <h2 class='tb-category global-title'>${e}</h2>\n        <div class='tb-books-container'>\n          <ul class="global-list flex-container">\n            ${t.map((({author:e,title:t,book_image:n,_id:o})=>`\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="${o}">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="${n}" alt="${t}" loading="lazy">\n                <p class="tb-book-title light-theme theme-switch global-p">${t}</p>\n                <p class="tb-book-author global-p">${e}</p>\n              </div>\n            </a>\n          </li>\n          `)).join("")}\n          </ul>\n        </div>\n        <button class="tb-button global-button light-theme theme-switch">See more</button>\n      </li>\n      `)).join("");b.insertAdjacentHTML("beforeend",t),"light"===i.shopping_info.theme?(0,a.renderTheme)("light"):(0,a.renderTheme)("dark"),(0,r.modalWindow)()}})),o("jqvOP"),o("5DwtN"),o("jJ57b"),o("bj3qq");
//# sourceMappingURL=index.457b87ed.js.map
