(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-1d43454f":"b8a7c876","chunk-2d0e95df":"8af8dd32","chunk-2d229481":"dc22fbfa","chunk-65c9ae80":"458ce80c","chunk-920326e4":"22f81f4d"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-1d43454f":1,"chunk-65c9ae80":1,"chunk-920326e4":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-1d43454f":"ac66d8d9","chunk-2d0e95df":"31d6cfe0","chunk-2d229481":"31d6cfe0","chunk-65c9ae80":"7c64b4d1","chunk-920326e4":"35e93093"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a5d":function(e,t,n){var r={"./404.vue":["8cdb","chunk-2d0e95df"],"./dashboard.vue":["4601","chunk-920326e4"],"./layout.vue":["ed3a","chunk-1d43454f"],"./login.vue":["dd7b","chunk-2d229481"],"./video-manager.vue":["045c","chunk-65c9ae80"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="1a5d",e.exports=a},"384e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),a=n.n(r),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],c={},u=c,s=n("2877"),l=Object(s["a"])(u,o,i,!1,null,null,null),d=l.exports,f=n("5c96"),p=n.n(f);n("0fae");a.a.use(p.a);n("b0c0"),n("d3b7");var h=n("6389"),v=n.n(h),m=n("323e"),g=n.n(m);n("a5d8");a.a.use(v.a);var b=function(e){return function(){return n("1a5d")("./".concat(e,".vue"))}},y=[{path:"/",component:b("layout"),children:[{path:"/",name:"dashboard",component:b("dashboard"),meta:{title:"仪表盘"}},{path:"/video_manager",name:"video_manager",component:b("video-manager"),meta:{title:"视频管理"}},{path:"/404",name:"404",component:b("404"),meta:{title:"404"}}]},{path:"/login",name:"login",component:b("login"),meta:{title:"登录"}},{path:"*",redirect:"/",hidden:!0}],_=new v.a({mode:"history",routes:y});_.beforeEach((function(e,t,n){g.a.start(),e.meta.title&&(document.title=e.meta.title),0===e.matched.length?(t.name,n({path:"/404"})):n()})),_.afterEach((function(){g.a.done()}));var k=_,w=n("2f62"),E={},O=E,S={},j=S,x={},P=x,T={},C=T,L=n("0e44");a.a.use(w["a"]);var N=new w["a"].Store({state:O,mutations:j,actions:P,getters:C,plugins:[Object(L["a"])()]}),A=n("bc3a"),U=n.n(A),$=(n("99af"),n("a15b"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("1276"),{getQueryString:function(e){var t=new RegExp("(^|&)".concat(e,"=([^&]*)(&|$)")),n=window.location.hash,r=n.split("?"),a=r[1]&&r[1].match(t);return null!=a?a[2]:""},queryString:function(e,t){var n=[];for(var r in t)n.push(r+"="+t[r]);var a=n.join("&");return a?"".concat(e,"?").concat(a):e}}),q=$,D=n("4328"),M=n.n(D);function B(e,t,n){return U()({method:e,url:"GET"===e||"DELETE"===e?q.queryString(t,n):t,data:"POST"===e||"PUT"===e?M.a.stringify(n):null})}U.a.defaults.baseURL="/",U.a.defaults.timeout=1e4,U.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",U.a.interceptors.response.use((function(e){return 200===e.status?Promise.resolve(e["data"]):Promise.reject(e)}),(function(e){return Promise.reject(e.response.status)}));var V={get:function(e,t){return B("GET",e,t)},post:function(e,t){return B("POST",e,t)}},F={getVideoList:function(e){return V.get("/video/getlist",e)}},R=n("2819"),G=n.n(R),J=n("8cf7"),z=n.n(J),H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg-icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":e.iconName}})])},I=[],K={name:"icon-svg",props:{iconClass:{type:String,required:!0}},computed:{iconName:function(){return"#".concat(this.iconClass)}}},Q=K,W=(n("caaa"),Object(s["a"])(Q,H,I,!1,null,null,null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:e.pic}}),n("div",{staticStyle:{padding:"14px"}},[n("span",[e._v(e._s(e.title))]),n("div",{staticClass:"time"},[e._v(e._s(e.creat_time)),n("span",{on:{click:e.clickUp}},[e._v(e._s(e.upName))])]),n("div",{staticClass:"param-list"},[n("span",[n("icon-svg",{attrs:{"icon-class":"bl-icon-zan"}}),e._v(e._s(e.num[0]))],1),n("span",[n("icon-svg",{attrs:{"icon-class":"bl-icon-Bbi"}}),e._v(e._s(e.num[1]))],1),n("span",[n("icon-svg",{attrs:{"icon-class":"bl-icon-shoucang"}}),e._v(e._s(e.num[2]))],1),n("span",[n("icon-svg",{attrs:{"icon-class":"bl-icon-fenxiang"}}),e._v(e._s(e.num[3]))],1)])])])},Z=[],ee={name:"video-card",data:function(){return{}},props:{title:String,pic:String,creat_time:String,upName:String,num:{type:Array,default:function(){return[0,0,0,0]}}},methods:{clickUp:function(){}}},te=ee,ne=Object(s["a"])(te,Y,Z,!1,null,null,null),re=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{attrs:{gutter:40}},[n("el-col",{attrs:{span:6}},e._l(e.list1,(function(t,r){return n("video-card",e._b({key:r},"video-card",t,!1))})),1),n("el-col",{attrs:{span:6}},e._l(e.list2,(function(t,r){return n("video-card",e._b({key:r},"video-card",t,!1))})),1),n("el-col",{attrs:{span:6}},e._l(e.list3,(function(t,r){return n("video-card",e._b({key:r},"video-card",t,!1))})),1),n("el-col",{attrs:{span:6}},e._l(e.list4,(function(t,r){return n("video-card",e._b({key:r},"video-card",t,!1))})),1)],1)},oe=[],ie={name:"video-list",data:function(){return{list1:[],list2:[],list3:[],list4:[]}},props:{originList:{type:Array,default:function(){return[0,0,0,0]}}},methods:{addList:function(e){for(var t=0;t<e.length;t++)switch(t%4){case 0:this.list1.push(e[t]);break;case 1:this.list2.push(e[t]);break;case 2:this.list3.push(e[t]);break;case 3:this.list4.push(e[t]);break}}},mounted:function(){var e=this;this.$api.getVideoList().then((function(t){var n=t["data"];e.addList(n)})).catch((function(e){console.log(e)}))}},ce=ie,ue=Object(s["a"])(ce,ae,oe,!1,null,null,null),se=ue.exports;a.a.config.productionTip=!1,a.a.component("icon-svg",X),a.a.component("video-card",re),a.a.component("video-list",se),a.a.use(G.a),a.a.use(z.a),a.a.prototype.$api=F,new a.a({router:k,store:N,render:function(e){return e(d)}}).$mount("#app")},6389:function(e,t){e.exports=VueRouter},"8bbf":function(e,t){e.exports=Vue},caaa:function(e,t,n){"use strict";n("384e")}});