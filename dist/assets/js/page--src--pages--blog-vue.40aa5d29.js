(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{259:function(t,e,a){"use strict";a(0);var r=a(107),s=(a(108),a(28),a(29),a(30),a(19),a(31),a(13),a(32),a(110),a(111),a(5)),n=(a(173),a(4));function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){Object(s.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,s=e.data,i=e.parent,l=a.info,c=a.showLinks,g=a.showNavigation,d=a.ariaLabel,p=function(t,e){var a=t.currentPage,r=void 0===a?1:a,s=t.totalPages,n=void 0===s?1:s,i=Math.ceil(e/2),o=Math.floor(r-i),l=Math.floor(r+i);n<=e?(o=0,l=n):r<=i?(o=0,l=e):r+i>=n&&(o=n-e,l=n);for(var u=[],c=o+1;c<=l;c++)u.push(c);return{current:r,total:n,start:o,end:l,pages:u}}(l,a.range),f=p.current,v=p.total,b=p.pages,x=p.start,y=p.end,h=Object(n.d)(i.$route),k=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;e===f&&(n=a.ariaCurrentLabel);var i={to:u(h,e),exact:!0};return a.activeLinkClass&&(i.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(i.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:a.linkClass,attrs:o({},i,{"aria-label":n.replace("%n",e),"aria-current":f===e})},[s])},L=c?b.map((function(t){return k(t,t,a.ariaLinkLabel)})):[];if(g){var w=a.firstLabel,C=a.prevLabel,m=a.nextLabel,P=a.lastLabel,O=a.ariaFirstLabel,S=a.ariaPrevLabel,_=a.ariaNextLabel,j=a.ariaLastLabel;f>1&&L.unshift(k(f-1,C,S)),x>0&&L.unshift(k(1,w,O)),f<v&&L.push(k(f+1,m,_)),y<v&&L.push(k(v,P,j))}return L.length<2?null:t("nav",o({},s,{attrs:{role:"navigation","aria-label":d}}),L)}};function u(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(n.g)(t)+"/".concat(e).concat(a):t}a(109);a.d(e,"a",(function(){return l}))},260:function(t,e,a){"use strict";var r={name:"Sidebar",components:{Search:a(112).a}},s=a(18),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overflow-hidden shadow-lg border-t-4 bg-white rounded-b-lg rounded-t border-ssblue w-full lg:w-1/4"},[a("div",{staticClass:"px-6 py-4 mt-4 mb-8"},[a("div",{staticClass:"uppercase tracking-wide text-c2 mb-4"},[t._v("Gun Type")]),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/air-pistol/"}},[t._v("Air Pistol")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/air-rifle/"}},[t._v("Air Rifle")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/long-barrel-pistol/"}},[t._v("Long Barrel Pistol")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/pistol-black-powder/"}},[t._v("Pistol - Black Powder")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/blank-pistol/"}},[t._v("Pistol - Blanks")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/rifle/"}},[t._v("Rifle")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/rifle-black-powder/"}},[t._v("Rifle - Black Powder")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/shotgun/"}},[t._v("Shotgun")])],1),a("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[a("g-link",{attrs:{to:"/guns/shotgun-silenced/"}},[t._v("Shotgun - Silenced")])],1)])])}),[],!1,null,null,null);e.a=n.exports},313:function(t,e,a){},314:function(t,e){},369:function(t,e,a){"use strict";var r=a(313);a.n(r).a},370:function(t,e,a){"use strict";var r=a(314),s=a.n(r);e.default=s.a},402:function(t,e,a){"use strict";a.r(e);var r=a(260),s=a(259),n={metaInfo:function(){return{title:"Blog"}},components:{Sidebar:r.a,Pager:s.a}},i=(a(369),a(18)),o=a(370),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"flex items-start"},[a("div",{staticClass:"flex justify-around flex-wrap mx-4 mt-4 h-auto lg:mt-12"},[t._l(t.$page.allPost.edges,(function(e){return a("div",{key:e.node.id,staticClass:"max-w-xs rounded-b-lg shadow hover:shadow-lg hover:border-ssorange mb-8 border-t-4 border-ssblue sm:w-1/3 sm:m-4",attrs:{id:"gun-card"}},[a("g-link",{attrs:{to:"blog/"+e.node.slug}},[a("g-image",{attrs:{src:e.node.thumbnail,alt:e.node.title}}),a("div",{staticClass:"p-4"},[a("h2",{staticClass:"font-bold uppercase text-xl mt-2"},[t._v("\n              "+t._s(e.node.title)+"\n            ")]),a("h5",{staticClass:"italic"},[t._v("\n              "+t._s(e.node.author)+" - "+t._s(e.node.date)+"\n            ")]),a("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(e.node.excerpt))])])],1)],1)})),a("div",{staticClass:"flex justify-center mb-8 w-full"},[a("Pager",{attrs:{linkClass:{pageNum:!0},info:t.$page.allPost.pageInfo,showLinks:!0}})],1)],2)])])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(l);e.default=l.exports}}]);