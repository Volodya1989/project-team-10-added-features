!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a("b3EoS"),a("3PD8C"),a("6VMVE"),a("ekC86");var i=a("eUV6u"),c=a("4WFAO"),r=a("b3EoS"),l=document.querySelector(".category-list"),s=document.querySelector(".load");(0,i.fetchAllCategories)().then((function(e){console.log(e);var t=e.map((function(e){var t=e.list_name;return'<li class="category-list-item global-list light-theme theme-switch">'.concat(t,"</li>")})).join("");l.insertAdjacentHTML("beforeend",t),"light"===c.shopping_info.theme?(0,r.renderTheme)("light"):(0,r.renderTheme)("dark"),s.classList.add("unvisible")})).catch((function(e){console.log(e)})),a("eUV6u");var d=a("bpxeT"),u=a("2TvXO"),h=(i=a("eUV6u"),a("6VMVE"));c=a("4WFAO"),r=a("b3EoS");var b=document.querySelector(".category-list"),f=document.querySelector(".tb-container"),g=document.querySelector(".heading-primary");function m(){return(m=e(d)(e(u).mark((function t(n){var o;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.target.textContent,g.textContent=o,g.classList.add("ctg-maintitle"),f.classList.add("flex-container"),e.next=6,(0,i.fetchBooksByExactCategory)(o);case 6:p(e.sent);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function p(e){var t=e.data;f.innerHTML="";var n=t.map((function(e){var t=e.author,n=e.title,o=e.book_image,a=e._id;return'\n    <div class="flex-container-item"><a href=# class="global-link" data-id="'.concat(a,'">\n    <img class="book-img img" src="').concat(o,'" alt="').concat(n,'">\n    <p class="book-title light-theme theme-switch global-p">').concat(n,'</p>\n    <p class="tb-book-author global-p">').concat(t,"</p></a></div>")})).join("");f.innerHTML=n}b.addEventListener("click",(function(e){return m.apply(this,arguments)}));var v=document.querySelector(".tb-container"),k=document.querySelector(".no-books-card");(0,i.fetchTopBooks)().then((function(e){if(0==e.data.length)k.classList.remove("is-hidden");else{var t=e.data.map((function(e){var t=e.list_name,n=e.books.map((function(e){var t=e.author,n=e.title,o=e.book_image,a=e._id;return'\n          <li class="flex-container-item">\n            <a href=# class="global-link" data-id="'.concat(a,'">\n              <div class="tb-book-card">\n                <img class="tb-book-img img" src="').concat(o,'" alt="').concat(n,'">\n                <p class="tb-book-title light-theme theme-switch global-p">').concat(n,'</p>\n                <p class="tb-book-author global-p">').concat(t,"</p>\n              </div>\n            </a>\n          </li>\n          ")})).join("");return"\n      <div class=\"tb-category-container\">\n        <h2 class='tb-category global-title'>".concat(t,"</h2>\n        <div class='tb-books-container'>\n          <ul class=\"global-list flex-container\">\n            ").concat(n,'\n          </ul>\n        </div>\n        <button class="tb-button global-button light-theme theme-switch">See more</button>\n      </div>\n      ')})).join("");v.insertAdjacentHTML("beforeend",t),"light"===c.shopping_info.theme?(0,r.renderTheme)("light"):(0,r.renderTheme)("dark"),(0,h.modalWindow)()}})),a("hDfHX"),a("eUV6u"),a("4WFAO"),a("afu5w")}();
//# sourceMappingURL=index.852d79b7.js.map
