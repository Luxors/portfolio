(function(t){function e(e){for(var n,o,c=e[0],i=e[1],u=e[2],f=0,p=[];f<c.length;f++)o=c[f],a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,c=1;c<r.length;c++){var i=r[c];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/userCRM/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=i;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"2de4":function(t,e,r){"use strict";var n=r("f2a8"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("header",[r("nav",{staticClass:"navbar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-content"},[r("div",{staticClass:"logo"},[t._v("User CRM")]),r("ul",{staticClass:"navbar-list"},t._l(t.links,function(e){return r("li",{key:e.title,staticClass:"navbar-item"},[r("router-link",{staticClass:"navbar-link",attrs:{to:e.url}},[t._v(t._s(e.title))])],1)}),0)])])])]),r("router-view")],1)},s=[],o={data:function(){return{links:[{title:"Home",url:"/"},{title:"Users",url:"/users"}]}}},c=o,i=(r("5c0b"),r("2877")),u=Object(i["a"])(c,a,s,!1,null,null,null),l=u.exports,f=r("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("h1",[t._v("Home page")])])])])}],d={},h=Object(i["a"])(d,p,v,!1,null,null,null),g=h.exports,_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("h1",[t._v("PAGE NOT FOUND")]),r("p",[t._v("Go to: "),r("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v(" Home")])],1)])])])},b=[],m=(r("f16b"),{}),y=Object(i["a"])(m,_,b,!1,null,"3c2873ab",null),C=y.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",{staticClass:"container users"},[r("h1",[t._v("Users page")]),r("div",{staticClass:"tabel-container"},[r("table",[r("thead",[r("tr",[r("th",{on:{click:function(e){return t.sort("firstName")}}},[t._v("Name↓")]),r("th",{on:{click:function(e){return t.sort("lastName")}}},[t._v("Last name↓")]),r("th",{on:{click:function(e){return t.sort("age")}}},[t._v("Age↓")]),r("th",{on:{click:function(e){return t.sort("gender")}}},[t._v("Gender↓")])])]),r("tbody",t._l(t.usersSort,function(e){return r("tr",{key:e.id},[r("td",[r("img",{attrs:{src:e.image,alt:e.image}}),r("span",[t._v(t._s(e.firstName))])]),r("td",[t._v(t._s(e.lastName))]),r("td",[t._v(" "+t._s(e.age)+" ")]),r("td",[t._v(" "+t._s(e.gender)+" ")])])}),0)])]),r("footer",[r("p",[t._v("Debug: sort: "+t._s(t.currentSort)+", dir: "+t._s(t.currentSortDir)+" ")]),r("p",[t._v("page: "+t._s(this.page.current)+", length: "+t._s(this.page.length)+" ")])])]),r("footer",{staticClass:"container footer"},[r("div",{staticClass:"button-list"},[r("button",{staticClass:"btn btnPrimary",on:{click:t.prevPage}},[t._v("←")]),r("button",{staticClass:"btn btnPrimary",on:{click:t.nextPage}},[t._v("→")])])])])},w=[],k=(r("55dd"),r("bc3a")),x=r.n(k),O=(r("3022"),{data:function(){return{users:[],currentSort:"name",currentSortDir:"asc",page:{current:1,length:10}}},created:function(){var t=this;x.a.get("https://dummyjson.com/users").then(function(e){console.log(e.data.users),t.users=e.data.users}).catch(function(t){console.log(t)})},computed:{usersSort:function(){var t=this;return this.users.sort(function(e,r){var n=1;return"desc"===t.currentSortDir&&(n=-1),e[t.currentSort]<r[t.currentSort]?-1*n:e[t.currentSort]>r[t.currentSort]?1*n:0}).filter(function(e,r){var n=(t.page.current-1)*t.page.length,a=t.page.current*t.page.length;if(r>=n&&r<a)return!0})}},methods:{sort:function(t){t===this.currentSort&&(this.currentSortDir="asc"===this.currentSortDir?"desc":"asc"),this.currentSort=t},prevPage:function(){this.page.current>1&&(this.page.current-=1)},nextPage:function(){this.page.current*this.page.length<this.users.length&&(this.page.current+=1)}}}),j=O,P=(r("2de4"),Object(i["a"])(j,S,w,!1,null,"016f28e9",null)),D=P.exports;n["a"].use(f["a"]);var N=new f["a"]({mode:"history",routes:[{path:"/",name:"home",component:g},{path:"*",name:"not-found",component:C},{path:"/users",name:"users",component:D}]}),E=r("2f62");n["a"].use(E["a"]);var M=new E["a"].Store({state:{},mutations:{},actions:{},getters:{}});r("c1c3");n["a"].config.productionTip=!1,new n["a"]({router:N,store:M,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),a=r.n(n);a.a},"5e27":function(t,e,r){},c1c3:function(t,e,r){},e8ab:function(t,e,r){},f16b:function(t,e,r){"use strict";var n=r("e8ab"),a=r.n(n);a.a},f2a8:function(t,e,r){}});
//# sourceMappingURL=app.a7d1b25e.js.map