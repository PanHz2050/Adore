webpackJsonp([3],{"22O3":function(t,e,n){"use strict";var a=n("3cXf"),i=n.n(a),s=window.localStorage;e.a={set:function(t,e){void 0!==e&&s.setItem(t,function(t){return i()(t)}(e))},get:function(t,e){var n=function(t){if("string"!=typeof t)return;try{return JSON.parse(t)}catch(e){return t||void 0}}(s.getItem(t));return void 0===n?e:n},remove:function(t){s.removeItem(t)},clear:function(){s.clear()}}},"3cXf":function(t,e,n){t.exports={default:n("L+o2"),__esModule:!0}},AWzI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/l8+"),i=n("Fk3l"),s={name:"CategoryHeader",components:{MeNavbar:a.a,MeSearchBox:i.a},methods:{getQuery:function(t){console.log(t)},goToSearch:function(){this.$router.push("/search")}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("me-navbar",{staticClass:"header"},[n("i",{staticClass:"iconfont icon-scan",attrs:{slot:"left"},slot:"left"}),t._v(" "),n("me-search-box",{attrs:{slot:"center",placeholder:"开学季有礼,好货5折起",fake:""},on:{query:t.getQuery},nativeOn:{click:function(e){return t.goToSearch(e)}},slot:"center"}),t._v(" "),n("i",{staticClass:"iconfont icon-msg",attrs:{slot:"right"},slot:"right"})],1)},staticRenderFns:[]};var c=n("C7Lr")(s,o,!1,function(t){n("zD2P")},"data-v-45ffda10",null).exports,r=n("8MDr"),l=[{name:"热门推荐",id:"WQR2006"},{name:"慕淘超市",id:"WQ1968"},{name:"国际名牌",id:"WQ1969"},{name:"奢侈品",id:"WQ1970"},{name:"全球购",id:"WQ1971"},{name:"男装",id:"WQ1972"},{name:"女装",id:"WQ1973"},{name:"男鞋",id:"WQ1974"},{name:"女鞋",id:"WQ1975"},{name:"内衣配饰",id:"WQ1976"},{name:"箱包手袋",id:"WQ1977"},{name:"美妆个护",id:"WQ1978"},{name:"钟表珠宝",id:"WQ1979"},{name:"手机数码",id:"WQ1980"},{name:"电脑办公",id:"WQ1981"},{name:"家用电器",id:"WQ1982"},{name:"食品生鲜",id:"WQ1983"},{name:"酒水饮料",id:"WQ1984"},{name:"母婴童鞋",id:"WQ1985"},{name:"玩具乐器",id:"WQ1986"},{name:"医药保健",id:"WQ1987"},{name:"计生情趣",id:"WQ1988"},{name:"运动户外",id:"WQ1989"},{name:"汽车用品",id:"WQ1990"},{name:"家居厨具",id:"WQ1991"},{name:"家具家装",id:"WQ1992"},{name:"礼品鲜花",id:"WQ1993"},{name:"宠物生活",id:"WQ1994"},{name:"生活旅行",id:"WQ1995"},{name:"图书音像",id:"WQ1996"},{name:"邮币",id:"WQ1997"},{name:"农资绿植",id:"WQ1998"},{name:"特产馆",id:"WQ1999"},{name:"慕淘金融",id:"WQ2000"},{name:"拍卖",id:"WQ2001"},{name:"房产",id:"WQ2008"},{name:"二手商品",id:"WQ2002"}],d={name:"CategoryTab",components:{MeScroll:r.a},data:function(){return{curId:""}},created:function(){this.init(),this.switchTab(this.items[0].id)},methods:{init:function(){this.items=l},switchTab:function(t){this.curId!==t&&(this.curId=t,this.$emit("switch-tab",t))}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("me-scroll",{attrs:{scrollbar:!1}},[n("ul",{staticClass:"tab"},t._l(t.items,function(e,a){return n("li",{key:a,staticClass:"tab-item",class:{"tab-item-active":e.id===t.curId},on:{click:function(n){return t.switchTab(e.id)}}},[t._v("\n\t\t\t"+t._s(e.name)+"\n\t\t")])}),0)])},staticRenderFns:[]};var m=n("C7Lr")(d,u,!1,function(t){n("YUwm")},"data-v-42aea24d",null).exports,f=n("rVsN"),h=n.n(f),v=n("odKQ"),p=n("fJiA"),g=n("I29D"),C=n.n(g),b=n("T452"),Q=C.a.CancelToken,y=void 0,W=n("22O3"),k={name:"CategoryContent",components:{MeLoading:v.a,MeScroll:r.a,MeBacktop:p.a},props:{curId:{type:String,default:""}},data:function(){return{content:{},isBacktopVisible:!1,isLoading:!0}},watch:{curId:function(t){var e=this;this.isLoading=!0,this.getContent(t).then(function(){e.isLoading=!1,e.backToTop(0)})}},methods:{getContent:function(t){var e=this,n=W.a.get("mall-category-content-key"),a=void 0,i=(new Date).getTime();return n&&n[t]?(a=n[t].updateTime||0,i-a<=864e5?this.getContentByLocalStorage(n[t]):this.getContentByHTTP(t).then(function(){e.updateLocalStorage(n,t,i)})):this.getContentByHTTP(t).then(function(){e.updateLocalStorage(n,t,i)})},getContentByLocalStorage:function(t){return this.content=t.data,h.a.resolve()},getContentByHTTP:function(t){var e=this;return function(t){return y&&y("取消了前一次的请求!"),y=null,C.a.get("http://www.imooc.com/api/category/content/"+t,{timeout:b.c,cancelToken:new Q(function(t){y=t})}).then(function(t){if(t.data.code===b.b)return t.data.content;throw new Error("没有成功获取到数据！")}).catch(function(t){C.a.isCancel(t),console.log(t)})}(t).then(function(t){return new h.a(function(n){t&&(e.content=t,n())})})},updateLocalStorage:function(t,e,n){(t=t||{})[e]={},t[e].data=this.content,t[e].updateTime=n,W.a.set("mall-category-content-key",t)},backToTop:function(t){this.$refs.scroll&&this.$refs.scroll.scrollToTop(t)},updateScroll:function(){this.$refs.scroll&&this.$refs.scroll.update()}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-wrapper"},[t.isLoading?n("div",{staticClass:"loading-container"},[n("div",{staticClass:"loading-wrapper"},[n("me-loading")],1)]):t._e(),t._v(" "),n("me-scroll",{ref:"scroll"},[n("div",{staticClass:"content"},[t.content.banner?n("div",{staticClass:"pic"},[n("a",{staticClass:"pic-link",attrs:{href:t.content.banner.linkUrl}},[n("img",{staticClass:"pic-img",attrs:{src:t.content.banner.picUrl,alt:""},on:{load:t.updateScroll}})])]):t._e(),t._v(" "),t._l(t.content.data,function(e,a){return n("div",{key:a,staticClass:"section"},[n("h4",{staticClass:"section-title"},[t._v(t._s(e.name))]),t._v(" "),n("ul",{staticClass:"section-list"},t._l(e.itemList,function(e,a){return n("li",{key:a,staticClass:"section-item"},[n("a",{staticClass:"section-link",attrs:{href:e.linkUrl}},[e.picUrl?n("p",{staticClass:"section-pic"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],staticClass:"section-img",attrs:{alt:""}})]):t._e(),t._v(" "),n("p",{staticClass:"section-name"},[t._v(t._s(e.name))])])])}),0)])})],2)]),t._v(" "),n("div",{staticClass:"g-backtop-container"},[n("me-backtop",{attrs:{visible:t.isBacktopVisible},on:{backtop:t.backToTop}})],1)],1)},staticRenderFns:[]};var T={name:"Category",components:{CategoryHeader:c,CategoryTab:m,CategoryContent:n("C7Lr")(k,_,!1,function(t){n("f4mU")},"data-v-3bad9299",null).exports},data:function(){return{curId:""}},methods:{getCurrentId:function(t){this.curId=t}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"category"},[e("header",{staticClass:"g-header-container"},[e("category-header")],1),this._v(" "),e("div",{staticClass:"g-content-container"},[e("div",{staticClass:"sidebar"},[e("category-tab",{on:{"switch-tab":this.getCurrentId}})],1),this._v(" "),e("div",{staticClass:"main"},[e("category-content",{attrs:{curId:this.curId}})],1)])])},staticRenderFns:[]};var L=n("C7Lr")(T,w,!1,function(t){n("BckT")},"data-v-6a515b8c",null);e.default=L.exports},BckT:function(t,e){},"L+o2":function(t,e,n){var a=n("ZuHZ"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},YUwm:function(t,e){},f4mU:function(t,e){},fJiA:function(t,e,n){"use strict";var a={name:"MeBacktop",props:{visible:{type:Boolean,default:!1}},methods:{backToTop:function(){this.$emit("backtop")}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"mine-backtop"}},[e("a",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"mine-backtop",attrs:{href:"javascript:;"},on:{click:this.backToTop}},[e("i",{staticClass:"iconfont icon-backtop"})])])},staticRenderFns:[]};var s=n("C7Lr")(a,i,!1,function(t){n("v2g2")},"data-v-385560a1",null);e.a=s.exports},v2g2:function(t,e){},zD2P:function(t,e){}});
//# sourceMappingURL=3.2c571ec5ae19f12df4ae.js.map