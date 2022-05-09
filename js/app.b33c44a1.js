(function(){var t={6911:function(t,e,a){"use strict";var i=a(144),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("router-view",{key:t.$route.path})],1)},r=[],s={name:"App",data:()=>({})},o=s,l=a(1001),c=a(3453),u=a.n(c),d=a(7524),h=(0,l.Z)(o,n,r,!1,null,null,null),m=h.exports;u()(h,{VApp:d.Z});var p=a(8345),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"container",class:t.weatherBackground,attrs:{fluid:""}},[a("NavigationBar"),a("WeatherInfo",{staticClass:"mt-1"})],1)},v=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{staticClass:"mx-auto",attrs:{"max-width":"500",elevation:"9",color:"grey lighten-5",outlined:"",rounded:""}},[a("v-app-bar-nav-icon",{staticClass:"d-block",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-autocomplete",{attrs:{loading:t.loading,"search-input":t.search,"return-object":"","item-value":"lat","item-text":"name",items:t.states,"cache-items":"",label:"Search Your City ","hide-details":"","hide-no-data":"",solo:"",clearable:"","prepend-inner-icon":"mdi-magnify",required:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),a("v-navigation-drawer",{attrs:{absolute:"",bottom:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"}},[a("v-list-item",[a("v-list-item-title",[t._v("Home")])],1),a("v-list-item",{on:{click:function(e){return t.toAboutPage()}}},[a("v-list-item-title",[t._v("About Us")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Contact Me")])],1)],1)],1)],1)],1)},w=[];const y={select:{},weatherType:""};var b=y,x={name:"NavigationBar",props:[],data:()=>({drawer:!1,model:null,search:null,loading:!1,searching:null,states:[],lastLatLon:null,datas:b}),watch:{search(t){t&&t!==this.select&&this.querySelections()},"datas.select":{handler(){localStorage.setItem("select",JSON.stringify(this.datas.select))},deep:!0}},methods:{toAboutPage(){this.$router.push({name:"about"})},async fetchPosition(){const t="a3e7bdc246b811691b06aab13ccb0dbb",e=await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.search}&limit=5&appid=${t}`),a=await e.json();let i=[];for(let n=0;n<a.length;n++)i.push({name:a[n].name+" "+a[n].country,country:a[n].country,lat:a[n].lat,lon:a[n].lon});this.states=i,this.loading=!1},querySelections(){this.loading=!0,this.fetchPosition();const t=JSON.parse(JSON.stringify(this.model));this.datas.select=t}}},_=x,T=a(5206),Z=a(4888),S=a(6816),V=a(7620),C=a(7874),O=a(2710),k=a(3283),I=a(6656),N=(0,l.Z)(_,g,w,!1,null,null,null),L=N.exports;u()(N,{VAppBarNavIcon:T.Z,VAutocomplete:Z.Z,VList:S.Z,VListItem:V.Z,VListItemGroup:C.Z,VListItemTitle:O.V9,VNavigationDrawer:k.Z,VToolbar:I.Z});var U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h5"},[t._v(" "+t._s(t.locationName)+" ")]),i("v-list-item-subtitle",[t._v(t._s(t.dayOfweek)+", "+t._s(t.timing)+", "+t._s(t.weatherDescription))])],1)],1),i("v-card-text",[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"text-h2",attrs:{cols:"6"}},[t._v(" "+t._s(t.currentTemp)+"°C ")]),i("v-col",{attrs:{cols:"6"}},[i("v-img",{attrs:{src:a(6003)("./"+t.weatherUrl+".png"),alt:"Sunny image",width:"92"}})],1)],1)],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-weather-windy")])],1),i("v-list-item-subtitle",[t._v(t._s(t.windSpeed)+" km/h")])],1),i("v-list-item",[i("v-list-item-icon",[i("v-icon",[t._v("mdi-water")])],1),i("v-list-item-subtitle",[t._v(t._s(t.humidity)+"%")])],1),i("v-divider"),i("ForcastTab",{attrs:{temp:t.daily,hourly:t.hourly,timer:t.cityTime,icon:"mdi-cloud"}})],1)],1)])},j=[],B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",[a("v-toolbar",{attrs:{color:"purple",dark:"",flat:""}},[[a("v-tabs",{attrs:{centered:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(t.item,(function(e){return a("v-tab",{key:e},[t._v(" "+t._s(e)+" ")])})),1)]],2),a("v-tabs-items",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-list",[a("div",{staticClass:"d-flex flex-row flex-wrap box"},t._l(t.temp,(function(e){return a("v-list-item",{key:t.temp.indexOf(e),staticClass:"d-inline-flex flex-column justify-center align-center"},[a("v-list-item-subtitle",[t._v(" "+t._s(t.labels[t.timer.getDay()+t.temp.indexOf(e)])+" ")]),a("v-list-item-icon",{staticClass:"text-center align-self-center mx-0 my-0"},[a("v-img",{attrs:{src:"http://openweathermap.org/img/wn/"+e.weather[0].icon+".png",alt:"icon"}})],1),a("v-list-item-subtitle",{staticClass:"d-inline align-self-center"},[t._v(" "+t._s(Math.round(e.temp.min))+" / "+t._s(Math.round(e.temp.max))+" °C ")])],1)})),1)])],1)],1)],1),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-list",[a("div",{staticClass:"d-flex flex-row flex-wrap box-hour"},t._l(t.hourly.slice(0,5),(function(e){return a("v-list-item",{key:t.hourly.indexOf(e),staticClass:"d-inline-flex flex-column justify-center align-center"},[a("v-list-item-subtitle",[t._v(" "+t._s(t.timer.getHours()+t.hourly.indexOf(e))+" :"+t._s(String(t.timer.getMinutes()).padStart(2,"0"))+" ")]),a("v-list-item-icon",{staticClass:"text-center align-self-center mx-0 my-0"},[a("v-img",{attrs:{src:"http://openweathermap.org/img/wn/"+e.weather[0].icon+".png",alt:"icon"}})],1),a("v-list-item-subtitle",{staticClass:"d-inline align-self-center"},[t._v(" "+t._s(Math.round(e.temp))+" °C ")])],1)})),1)])],1)],1)],1)],1)],1)},$=[],z={data(){return{tabs:null,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",item:["8 DAYS","5 Hours"],labels:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},props:["temp","hourly","timer"]},D=z,M=a(3237),E=a(7118),F=a(7047),A=a(459),P=a(4227),q=a(1759),J=a(7090),H=a(5547),W=(0,l.Z)(D,B,$,!1,null,"6cc9a931",null),R=W.exports;u()(W,{VCard:M.Z,VCardText:E.ZB,VImg:F.Z,VList:S.Z,VListItem:V.Z,VListItemIcon:A.Z,VListItemSubtitle:O.oZ,VTab:P.Z,VTabItem:q.Z,VTabs:J.Z,VTabsItems:H.Z,VToolbar:I.Z});var Y={data:()=>({datas:b,currentTemp:null,timeZone:null,labels:["SU","MO","TU","WED","TH","FR","SA"],time:0,dayOfweek:null,weatherDescription:null,timing:null,humidity:null,windSpeed:null,weatherUrl:"clear",locationName:"California",daily:null,days:null,forcastIcon:null,hourly:[],cityTime:null}),components:{ForcastTab:R},watch:{"datas.select":{handler:function(){null!==this.datas.select&&0!==Object.keys(this.datas.select).length&&this.weatherInfoFetch()},deep:!0}},methods:{async weatherInfoFetch(){let t=null,e=null;if(localStorage.getItem("select")){t=JSON.parse(localStorage.getItem("select")).lat,e=JSON.parse(localStorage.getItem("select")).lon;const a=JSON.parse(localStorage.getItem("select")).name;this.locationName=a}else t=36.778259,e=-119.417931;const a="14476baa7dc7b943fa43681da12a198c",i=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${t}&lon=${e}&exclude=minutely&appid=${a}&units=metric`),n=await i.json(),r=new Date,s=r.getTime(),o=6e4*r.getTimezoneOffset(),l=s+o,c=new Date(l+1e3*n.timezone_offset);this.cityTime=c,this.timeZone=c.toString(),this.currentTemp=Math.round(n.current.temp),this.dayOfweek=this.labels[c.getDay()],this.weatherDescription=n.current.weather[0].description,this.timing=c.getHours()+":"+String(c.getMinutes()).padStart(2,"0"),this.humidity=n.current.humidity,this.windSpeed=n.current.wind_speed,this.weatherUrl=n.current.weather[0].main,this.daily=n.daily,this.hourly=n.hourly,this.datas.weatherType=n.current.weather[0].main,"Clouds"===this.datas.weatherType?(this.weatherUrl="clouds",this.forcastIcon="mdi-cloud"):"Clear"===this.datas.weatherType?this.weatherUrl="clear":"Rain"===this.datas.weatherType?this.weatherUrl="rain":"Snow"===this.datas.weatherType?this.weatherUrl="snow":"Thunderstorm"===this.datas.weatherType?this.weatherUrl="thunderstorm":"Drizzle"===this.datas.weatherType?this.weatherUrl="drizzle":"Haze"===this.datas.weatherType&&(this.weatherUrl="haze"),console.log(n)}},mounted(){this.weatherInfoFetch()}},G=Y,K=a(2102),Q=a(1418),X=a(6428),tt=a(2877),et=(0,l.Z)(G,U,j,!1,null,null,null),at=et.exports;u()(et,{VCard:M.Z,VCardText:E.ZB,VCol:K.Z,VDivider:Q.Z,VIcon:X.Z,VImg:F.Z,VListItem:V.Z,VListItemContent:O.km,VListItemIcon:A.Z,VListItemSubtitle:O.oZ,VListItemTitle:O.V9,VRow:tt.Z});var it={name:"HomeView",components:{NavigationBar:L,WeatherInfo:at},data(){return{datas:b,timeZone:null,currentTemp:null,weatherBackground:JSON.parse(localStorage.getItem("weatherBackground"))}},methods:{},watch:{"datas.weatherType":{handler:function(){"Clear"===this.datas.weatherType?this.weatherBackground="clear":"Rain"===this.datas.weatherType?this.weatherBackground="rainy":"Clouds"===this.datas.weatherType?this.weatherBackground="cloudy":"Snow"===this.datas.weatherType&&(this.weatherBackground="snowy"),localStorage.setItem("weatherBackground",JSON.stringify(this.weatherBackground))},deep:!0}}},nt=it,rt=a(247),st=(0,l.Z)(nt,f,v,!1,null,null,null),ot=st.exports;u()(st,{VContainer:rt.Z});var lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],ut={},dt=(0,l.Z)(ut,lt,ct,!1,null,null,null),ht=dt.exports;i.Z.use(p.Z);const mt=[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:ht}],pt=new p.Z({mode:"history",base:"/vue2-weather-app/",routes:mt});var ft=pt,vt=a(9132);i.Z.use(vt.Z);var gt=new vt.Z({});new i.Z({router:ft,vuetify:gt,render:t=>t(m)}).$mount("#app")},6003:function(t,e,a){var i={"./clear.png":1517,"./clouds.png":7542,"./drizzle.png":5469,"./haze.png":4462,"./rain.png":7308,"./snow.png":9007,"./thunderstorm.png":3224};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id=6003},1517:function(t,e,a){"use strict";t.exports=a.p+"img/clear.54e092a9.png"},7542:function(t,e,a){"use strict";t.exports=a.p+"img/clouds.02ca802a.png"},5469:function(t,e,a){"use strict";t.exports=a.p+"img/drizzle.061d050f.png"},4462:function(t,e,a){"use strict";t.exports=a.p+"img/haze.8f4ece97.png"},7308:function(t,e,a){"use strict";t.exports=a.p+"img/rain.f944240d.png"},9007:function(t,e,a){"use strict";t.exports=a.p+"img/snow.eb10f08d.png"},3224:function(t,e,a){"use strict";t.exports=a.p+"img/thunderstorm.366a4cef.png"}},e={};function a(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,i,n,r){if(!i){var s=1/0;for(u=0;u<t.length;u++){i=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<s&&(s=r));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/vue2-weather-app/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var n,r,s=i[0],o=i[1],l=i[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var u=l(a)}for(e&&e(i);c<s.length;c++)r=s[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(u)},i=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(6911)}));i=a.O(i)})();
//# sourceMappingURL=app.b33c44a1.js.map