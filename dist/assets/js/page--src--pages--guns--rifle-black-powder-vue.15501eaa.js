(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{259:function(t,e,a){"use strict";a(0);var r=a(107),s=(a(108),a(28),a(29),a(30),a(19),a(31),a(13),a(32),a(110),a(111),a(5)),n=(a(173),a(4));function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var o={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,s=e.data,i=e.parent,o=a.info,u=a.showLinks,d=a.showNavigation,g=a.ariaLabel,p=function(t,e){var a=t.currentPage,r=void 0===a?1:a,s=t.totalPages,n=void 0===s?1:s,i=Math.ceil(e/2),l=Math.floor(r-i),o=Math.floor(r+i);n<=e?(l=0,o=n):r<=i?(l=0,o=e):r+i>=n&&(l=n-e,o=n);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:r,total:n,start:l,end:o,pages:c}}(o,a.range),f=p.current,b=p.total,v=p.pages,x=p.start,h=p.end,y=Object(n.d)(i.$route),k=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;e===f&&(n=a.ariaCurrentLabel);var i={to:c(y,e),exact:!0};return a.activeLinkClass&&(i.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(i.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:a.linkClass,attrs:l({},i,{"aria-label":n.replace("%n",e),"aria-current":f===e})},[s])},C=u?v.map((function(t){return k(t,t,a.ariaLinkLabel)})):[];if(d){var m=a.firstLabel,w=a.prevLabel,L=a.nextLabel,P=a.lastLabel,_=a.ariaFirstLabel,O=a.ariaPrevLabel,S=a.ariaNextLabel,j=a.ariaLastLabel;f>1&&C.unshift(k(f-1,w,O)),x>0&&C.unshift(k(1,m,_)),f<b&&C.push(k(f+1,L,S)),h<b&&C.push(k(b,P,j))}return C.length<2?null:t("nav",l({},s,{attrs:{role:"navigation","aria-label":g}}),C)}};function c(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(n.g)(t)+"/".concat(e).concat(a):t}a(109);a.d(e,"a",(function(){return o}))},260:function(t,e,a){"use strict";var r={name:"Sidebar",components:{Search:a(112).a}},s=a(18),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-hidden shadow-lg border-t-4 bg-white rounded-b-lg rounded-t border-ssblue w-full lg:w-1/4"},[a("div",{staticClass:"px-6 py-4 mt-4 mb-8"},[a("div",{staticClass:"uppercase tracking-wide text-c2 mb-4"},[t._v("Gun Type")]),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/air-pistol/"}},[t._v("Air Pistol")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/air-rifle/"}},[t._v("Air Rifle")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/long-barrel-pistol/"}},[t._v("Long Barrel Pistol")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/pistol-black-powder/"}},[t._v("Pistol - Black Powder")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/blank-pistol/"}},[t._v("Pistol - Blanks")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/rifle/"}},[t._v("Rifle")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/rifle-black-powder/"}},[t._v("Rifle - Black Powder")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/shotgun/"}},[t._v("Shotgun")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/shotgun-silenced/"}},[t._v("Shotgun - Silenced")])],1)])])}),[],!1,null,null,null);e.a=n.exports},267:function(t,e,a){},268:function(t,e){},323:function(t,e,a){"use strict";var r=a(267);a.n(r).a},324:function(t,e,a){"use strict";var r=a(268),s=a.n(r);e.default=s.a},378:function(t,e,a){"use strict";a.r(e);var r=a(260),s=a(259),n={metaInfo:function(){return{title:"Black Powder Rifles"}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}},components:{Sidebar:r.a,Pager:s.a}},i=(a(323),a(18)),l=a(324),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"block flex justify-center bg-white p-2 lg:hidden border-b-2 border-black",attrs:{id:"filter-menu"}},[a("button",{staticClass:"lg:hidden text-xl",attrs:{id:"filter-menu"},on:{click:t.toggle}},[t._v("\n      Filter\n      ")])]),a("div",{staticClass:"uppercase font-semibold",class:t.open?"block":"hidden"},[a("Sidebar")],1),a("div",{staticClass:"flex items-start"},[a("div",{staticClass:"hidden lg:block lg:mt-16 lg:w-3/8 h-screen"},[a("Sidebar",{staticClass:"min-w-full ml-6"})],1),a("div",{staticClass:"flex justify-center flex-wrap mx-4 mt-4 h-auto lg:w-5/6 lg:mt-12"},[t._l(t.$page.allGuns.edges,(function(e){return a("div",{key:e.node.id,staticClass:"max-w-xs rounded-b-lg shadow hover:shadow-lg hover:border-ssorange mb-8 border-t-4 border-ssblue sm:w-1/3 sm:m-4",attrs:{id:"gun-card"}},[a("g-link",{attrs:{to:"guns/"+e.node.slug}},[a("g-image",{attrs:{src:e.node.images[0].FullPath,alt:e.node.title}}),a("div",{staticClass:"p-4"},[a("h2",{staticClass:"font-bold uppercase text-xl mt-2"},[t._v("\n              "+t._s(e.node.title)+"\n            ")]),a("h3",{staticClass:"font-semibold"},[t._v("Variant: "+t._s(e.node.variant))]),a("table",[a("tr",[a("td",[t._v("Condition: "+t._s(e.node.condition))])]),a("tr",[a("td",[t._v("Calibre: "+t._s(e.node.calibre))])])]),a("p",{staticClass:"font-semibold text-lg mt-2"},[t._v("£"+t._s(e.node.price))])])],1)],1)})),a("div",{staticClass:"flex justify-center mb-8 w-full"},[a("Pager",{attrs:{linkClass:{pageNum:!0},info:t.$page.allGuns.pageInfo,showLinks:!0}})],1)],2)])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(o);e.default=o.exports}}]);