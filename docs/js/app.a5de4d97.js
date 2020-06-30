(function(t){function e(e){for(var n,o,l=e[0],c=e[1],i=e[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(m.length)m.shift()();return s.push.apply(s,i||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2c1ee39c"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=o(t);var i=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",i.name="ChunkLoadError",i.type=n,i.request=s,a[1](i)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"005b":function(t,e,a){},"13cc":function(t,e,a){t.exports=a.p+"img/ava.3a5c6f34.jpg"},"140b":function(t,e,a){"use strict";var n=a("4d28"),r=a.n(n);r.a},"4d28":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column",attrs:{id:"app"}},[a("Navbar"),a("main",[a("div",{staticClass:"container"},[a("router-view")],1)]),a("Footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Search test app")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarColor01"}},[a("div",{staticClass:"navbar-nav ml-auto",attrs:{id:"nav"}},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"Navbar"},i=c,u=(a("c01f"),a("2877")),p=Object(u["a"])(i,o,l,!1,null,null,null),m=p.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"d-flex justify-content-center flex-wrap"},[n("h2",{staticClass:"my-3"},[t._v("Антон Красильников")]),n("img",{staticClass:"mx-5 my-3",attrs:{src:a("13cc"),alt:"avatar"}}),n("h2",{staticClass:"my-3"},[n("a",{attrs:{href:"https://github.com/kras174/vuetestapp",target:"_blank"}},[t._v("Репозиторий GitHub")])])])}],v={name:"Footer"},h=v,g=(a("a2b3"),Object(u["a"])(h,d,f,!1,null,null,null)),b=g.exports,_={components:{Navbar:m,Footer:b}},C=_,x=(a("5c0b"),Object(u["a"])(C,r,s,!1,null,null,null)),y=x.exports,k=(a("d3b7"),a("8c4f")),w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("SearchBar"),a("ResultTable")],1)},P=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"searchBar my-5"},[a("form",[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-sm-3 col-md-1 col-form-label",attrs:{for:"searchBar"}},[t._v("Search")]),a("div",{staticClass:"col-sm-9 col-md-11"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control-plaintext",attrs:{type:"text",id:"searchBar",placeholder:"Enter package name..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])])])])},O=[],$=a("5530"),E=a("2f62"),S={name:"SearchBar",methods:Object($["a"])({},Object(E["b"])(["fetchItems"])),data:function(){return{text:""}},updated:function(){this.fetchItems(this.text)}},I=S,M=(a("140b"),Object(u["a"])(I,j,O,!1,null,"71ae01d2",null)),T=M.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result-table my-5"},[t.loading?a("div",{staticClass:"loader"},[t._v("Loading...")]):t.allPages.length?a("section",[a("table",{staticClass:"table table-hover"},[t._m(0),t._l(t.renderPage,(function(t){return a("ResultItem",{key:t.index,attrs:{item:t||[]}})}))],2),a("Paginate",{attrs:{"v-model":t.currentPage,"page-count":t.pageCount,"click-handler":t.pageClickHandler,"prev-text":"«","next-text":"»","container-class":"pagination","page-class":"page-item","page-link-class":"page-link","prev-class":"page-item","prev-link-class":"page-link","next-class":"page-item","next-link-class":"page-link"}})],1):a("p",[t._v(" Please enter something in search field... ")])])},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Package name")]),a("th",{attrs:{scope:"col"}},[t._v("Latest version")])])])}],H=(a("99af"),a("8832")),L=a.n(H),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tbody",[t.showModal?a("Modal",{attrs:{item:t.item.package},on:{close:function(e){t.showModal=!1}}}):t._e(),a("tr",{attrs:{id:"show-modal"},on:{click:function(e){t.showModal=!0}}},[a("th",{attrs:{scope:"row"}},[t._v(t._s(t.item.package.name))]),a("td",[t._v(t._s(t.item.package.version))])])],1)},N=[],F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[t._t("header",[a("h2",[t._v(t._s(t.item.name))])])],2),a("div",{staticClass:"modal-body"},[t._t("body",[a("p",[t._v(t._s(t.item.version))])])],2),a("div",{staticClass:"modal-footer"},[t._t("footer",[t._v(" Ещё какая-то важная информация о пакете ")])],2),a("button",{staticClass:"btn-outline danger",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times-circle"},[t._v("Close")]),a("span",[t._v("Big red button =)")])])])])])])},q=[],z={name:"Modal",props:["item"]},J=z,G=(a("91a5"),Object(u["a"])(J,F,q,!1,null,null,null)),U=G.exports,D={name:"ResultItem",components:{Modal:U},props:["item"],data:function(){return{showModal:!1}}},K=D,Q=Object(u["a"])(K,A,N,!1,null,null,null),V=Q.exports,W=a("2ef0"),X=a.n(W),Y={name:"ResultTable",components:{ResultItem:V,Paginate:L.a},data:function(){return{currentPage:+this.$route.query.currentPage||1,pageSize:10,pageCount:0,allPages:[],renderPage:[],loading:!1}},computed:Object(E["c"])(["allItems"]),watch:{allItems:function(){this.loading=!0,this.allPages=X.a.chunk(this.allItems,this.pageSize),this.pageCount=this.allPages.length,this.renderPage=this.allPages[this.currentPage-1]||this.allPages[0],this.loading=!1}},methods:{pageClickHandler:function(t){this.$router.push("".concat(this.$route.path,"?page=").concat(t)),this.renderPage=this.allPages[t-1]||this.allPages[0]}},updated:function(){console.log(this.showModal)}},Z=Y,tt=Object(u["a"])(Z,R,B,!1,null,null,null),et=tt.exports,at={name:"Home",components:{SearchBar:T,ResultTable:et}},nt=at,rt=Object(u["a"])(nt,w,P,!1,null,null,null),st=rt.exports;n["a"].use(k["a"]);var ot=[{path:"/",name:"Home",meta:{title:"Home Page - Search App",metaTags:[{name:"description",content:"The home page of our search app."},{property:"og:description",content:"The home page of our search app."}]},component:st},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],lt=new k["a"]({mode:"history",routes:ot}),ct=lt,it=(a("96cf"),a("1da1")),ut=a("bc3a"),pt=a.n(ut);pt.a.defaults.baseURL="https://registry.npmjs.com/-/v1";var mt={items:[]},dt={allItems:function(t){return t.items}},ft={fetchItems:function(t,e){return Object(it["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.commit,a.next=3,pt.a.get("/search?text=".concat(e));case 3:r=a.sent,n("setItems",r.data.objects);case 5:case"end":return a.stop()}}),a)})))()}},vt={setItems:function(t,e){return t.items=e}},ht={state:mt,getters:dt,actions:ft,mutations:vt};n["a"].use(E["a"]);var gt=new E["a"].Store({modules:{items:ht}});n["a"].config.productionTip=!1,new n["a"]({router:ct,store:gt,render:function(t){return t(y)}}).$mount("#app"),n["a"].component("Paginate",L.a)},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"6e3b":function(t,e,a){},"91a5":function(t,e,a){"use strict";var n=a("acc0"),r=a.n(n);r.a},"9c0c":function(t,e,a){},a2b3:function(t,e,a){"use strict";var n=a("6e3b"),r=a.n(n);r.a},acc0:function(t,e,a){},c01f:function(t,e,a){"use strict";var n=a("005b"),r=a.n(n);r.a}});
//# sourceMappingURL=app.a5de4d97.js.map