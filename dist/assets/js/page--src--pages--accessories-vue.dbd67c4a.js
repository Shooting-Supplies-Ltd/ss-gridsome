(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{259:function(t,e,r){"use strict";r(0);var a=r(107),s=(r(108),r(28),r(29),r(30),r(19),r(31),r(13),r(32),r(110),r(111),r(5)),i=(r(173),r(4));function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){Object(s.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var r=e.props,s=e.data,n=e.parent,l=r.info,d=r.showLinks,u=r.showNavigation,g=r.ariaLabel,p=function(t,e){var r=t.currentPage,a=void 0===r?1:r,s=t.totalPages,i=void 0===s?1:s,n=Math.ceil(e/2),o=Math.floor(a-n),l=Math.floor(a+n);i<=e?(o=0,l=i):a<=n?(o=0,l=e):a+n>=i&&(o=i-e,l=i);for(var c=[],d=o+1;d<=l;d++)c.push(d);return{current:a,total:i,start:o,end:l,pages:c}}(l,r.range),b=p.current,f=p.total,v=p.pages,x=p.start,h=p.end,y=Object(i.d)(n.$route),k=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;e===b&&(i=r.ariaCurrentLabel);var n={to:c(y,e),exact:!0};return r.activeLinkClass&&(n.activeClass=r.activeLinkClass),r.exactActiveLinkClass&&(n.exactActiveClass=r.exactActiveLinkClass),t(a.a,{class:r.linkClass,attrs:o({},n,{"aria-label":i.replace("%n",e),"aria-current":b===e})},[s])},m=d?v.map((function(t){return k(t,t,r.ariaLinkLabel)})):[];if(u){var C=r.firstLabel,L=r.prevLabel,w=r.nextLabel,O=r.lastLabel,P=r.ariaFirstLabel,j=r.ariaPrevLabel,S=r.ariaNextLabel,_=r.ariaLastLabel;b>1&&m.unshift(k(b-1,L,j)),x>0&&m.unshift(k(1,C,P)),b<f&&m.push(k(b+1,w,S)),h<f&&m.push(k(f,O,_))}return m.length<2?null:t("nav",o({},s,{attrs:{role:"navigation","aria-label":g}}),m)}};function c(t,e){var r=/\/$/.test(t)?"/":"";return e>1?Object(i.g)(t)+"/".concat(e).concat(r):t}r(109);r.d(e,"a",(function(){return l}))},261:function(t,e,r){"use strict";var a={name:"AccessoriesSidebar"},s=r(18),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"overflow-hidden shadow-lg border-t-4 bg-white rounded-b-lg rounded-t border-ssblue w-full lg:w-1/4"},[r("div",{staticClass:"px-6 py-4 mt-4 mb-8"},[r("div",{staticClass:"uppercase tracking-wide text-c2 mb-4"},[t._v("Accessory Type")]),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/attachments-mounts"}},[t._v("Attachments & Mounts")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/bipods-rests"}},[t._v("Bipods & Rests")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/cheek-pieces"}},[t._v("Cheek Pieces")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/grips"}},[t._v("Grips")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/handguards"}},[t._v("Handguards")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/holsters"}},[t._v("Holsters")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/magazines"}},[t._v("Magazines")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/stocks"}},[t._v("Stocks")])],1),r("div",{staticClass:"flex cursor-pointer border px-4 py-2 text-lg text-grey-darkest border-b-0 hover:text-ssorange"},[r("g-link",{attrs:{to:"/accessories/targets"}},[t._v("Targets")])],1)])])}),[],!1,null,null,null);e.a=i.exports},315:function(t,e,r){},316:function(t,e){},371:function(t,e,r){"use strict";var a=r(315);r.n(a).a},372:function(t,e,r){"use strict";var a=r(316),s=r.n(a);e.default=s.a},403:function(t,e,r){"use strict";r.r(e);var a=r(261),s=r(259),i={metaInfo:function(){return{title:"Accessories"}},data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}},components:{AccessoriesSidebar:a.a,Pager:s.a}},n=(r(371),r(18)),o=r(372),l=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("div",{staticClass:"block flex justify-center bg-white p-2 lg:hidden border-b-2 border-black",attrs:{id:"filter-menu"}},[r("button",{staticClass:"lg:hidden text-xl",attrs:{id:"filter-menu"},on:{click:t.toggle}},[t._v("\n      Filter\n      ")])]),r("div",{staticClass:"uppercase font-semibold",class:t.open?"block":"hidden"},[r("AccessoriesSidebar")],1),r("div",{staticClass:"flex items-start"},[r("div",{staticClass:"hidden lg:block lg:mt-16 lg:w-3/8 h-screen"},[r("AccessoriesSidebar",{staticClass:"min-w-full ml-6"})],1),r("div",{staticClass:"flex justify-center flex-wrap mx-4 mt-8 h-auto lg:w-5/6 lg:mt-12"},[t._l(t.$page.allWooProducts.edges,(function(e){return r("div",{key:e.node.id,staticClass:"max-w-xs rounded-b-lg shadow hover:shadow-lg hover:border-ssorange mb-8 border-t-4 border-ssblue sm:w-1/3 sm:m-4",attrs:{id:"gun-card"}},[r("g-link",{attrs:{to:"/products/"+e.node.slug}},[r("g-image",{attrs:{src:e.node.images[0].src,alt:e.node.name}}),r("div",{staticClass:"p-4"},[r("h2",{staticClass:"font-bold uppercase text-xl mt-2 hover:text-ssorange"},[t._v("\n              "+t._s(e.node.name)+"\n            ")]),r("p",{staticClass:"font-semibold text-lg mt-2"},[t._v("£"+t._s(e.node.price))])])],1)],1)})),r("div",{staticClass:"flex justify-center mb-8 w-full"},[r("Pager",{attrs:{linkClass:{pageNum:!0},info:t.$page.allWooProducts.pageInfo,showLinks:!0}})],1)],2)])])}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(l);e.default=l.exports}}]);