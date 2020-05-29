(this["webpackJsonpweather-or-not"]=this["webpackJsonpweather-or-not"]||[]).push([[0],{45:function(e,n,t){e.exports=t.p+"static/media/background.f3ba588a.jpg"},49:function(e,n,t){e.exports=t(85)},54:function(e,n,t){},59:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(18),o=t.n(c),i=(t(54),t(5)),l=t(10),s=t(24),u=t(48),m=t(11),f=t.n(m),d=function(e){return{type:"FAVORITES/REMOVE_FROM_FAVORITES",data:e}},p=function(e,n){return e.lat===n.lat&&e.lon===n.lon},g=function(e,n){return e.filter((function(e){return!p(e,n)}))},h=function(e,n){return!f()(e)&&g(e,n).length!==e.length},v=function(e){return localStorage.setItem("weather-or-not/favorites",JSON.stringify(e))},b=function(e){return alert("".concat(e.city," is already added to Favorites."))},E=function(e){return window.confirm("Are you sure you want to delete ".concat(e.city," from Favorites?"))},w=[];var O=function(e){return{type:"FAVORITES/SET_KEYWORD",keyword:e}};var y=function(e){return localStorage.setItem("weather-or-not/degree",e)};var x=t(4),j=function(e){var n,t="";return e<=-5?(n="#000000",t="#000000"):e<=5?(n="#d1dfe6",t="#808080"):e<=20?(n="#b2eddb",t="#808080"):e<=26?(n="#e6f7b0",t="#808080"):e<=32?(n="#fcec6f",t="#808080"):e<=36?(n="#ffc175",t="#808080"):(n="#fca474",t="#ffffff"),{bg:n,text:t}},N=function(e){return parseFloat(e).toFixed(1)},_=function(e){return e<10?"0".concat(e):e},T=t(2),S=t(3);function k(){var e=Object(T.a)(["\nfrom {\n  opacity: 1;\n  transform: translate(-50%, -50%);\n}\nto {\n  opacity: 0;\n  transform: translate(-50%, -6rem);\n}\n"]);return k=function(){return e},e}function I(){var e=Object(T.a)(["\n  from {\n    opacity: 0;\n    transform: translate(-50%, -6rem);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n"]);return I=function(){return e},e}function R(){var e=Object(T.a)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]);return R=function(){return e},e}function A(){var e=Object(T.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return A=function(){return e},e}var F={fadeIn:Object(S.c)(A()),fadeOut:Object(S.c)(R()),bounceIn:Object(S.c)(I()),bounceOut:Object(S.c)(k())},C=function(){var e=new Date,n=60*e.getTimezoneOffset();return new Date(e.getTime()+1e3*n)}();var D=Object(l.combineReducers)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0,t=e;switch(n.type){case"FAVORITES/ADD_TO_FAVORITES":return h(e,n.data)?(b(n.data),e):(t=[].concat(Object(u.a)(e),[Object(s.a)({},n.data,{isFavorite:!0})]),v(t),t);case"FAVORITES/REMOVE_FROM_FAVORITES":return E(n.data)&&(t=g(e,n.data),v(t)),t;case"FAVORITES/UPDATE_FAVORITE":return h(e,n.data)&&(t=e.map((function(e){return p(e,n.data)?n.data:e})),v(t)),t;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FAVORITES/SET_KEYWORD":return n.keyword;default:return e}},degree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"celsius",n=arguments.length>1?arguments[1]:void 0,t=e;switch(n.type){case"DEGREE/TOGGLE_DEGREE":return y(t="celsius"===e?"fahrenheit":"celsius"),t;default:return e}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TIME/SET_CUR_UTC_TIME":return new Date(e.getTime()+1e3);default:return e}}});t(59);function P(){var e=Object(T.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n"]);return P=function(){return e},e}var V=Object(S.b)((function(e){var n=e.className;return r.a.createElement("div",{className:n})}))(P(),(function(e){return e.image}));function z(){var e=Object(T.a)(["\n  width: 100%;\n  padding: 0.5rem;\n  color: white;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: none;\n  .degree-container {\n    .degree {\n      color: rgba(150, 150, 150);\n      &:hover {\n        cursor: pointer;\n      }\n    }\n    .degree-selected {\n      color: white;\n      &:hover {\n        cursor: default;\n      }\n    }\n  }\n"]);return z=function(){return e},e}function M(){var e=Object(T.a)(["\n  color: white;\n"]);return M=function(){return e},e}var W=S.b.div(M()),K=Object(S.b)((function(e){var n=e.className,t=Object(i.c)((function(e){return e.degree})),a=Object(i.b)(),c=function(e){t!==e.target.dataset.degree&&a({type:"DEGREE/TOGGLE_DEGREE"})};return r.a.createElement("nav",{className:n},r.a.createElement(W,null,"W/N"),r.a.createElement("div",{className:"degree-container"},r.a.createElement("span",{className:"degree ".concat("celsius"===t&&"degree-selected"),onClick:c,"data-degree":"celsius"},"\xb0C"),r.a.createElement("span",null,"/"),r.a.createElement("span",{className:"degree ".concat("fahrenheit"===t&&"degree-selected"),onClick:c,"data-degree":"fahrenheit"},"\xb0F")))}))(z()),U=t(14);function H(){var e=Object(T.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border: thin rgba(255, 255, 255, 0.7) solid;\n  background-color: rgba(70, 70, 70, 1);\n  border-radius: 0.5rem;\n  overflow: hidden;\n  .search-container {\n    display: flex;\n    align-items: center;\n    padding: 0.5rem;\n    .search-form {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      .search-icon {\n        width: 1.5rem;\n        height: 1.5rem;\n        font-size: 1.5em;\n        color: white;\n        margin-right: 0.125rem;\n        margin-bottom: 0;\n      }\n      input {\n        flex: 1;\n      }\n    }\n  }\n  .suggestions {\n    color: white;\n    user-select: none;\n    li {\n      padding: 0.5rem 1rem;\n      &:hover {\n        background-color: rgba(120, 120, 120, 1);\n      }\n    }\n  }\n"]);return H=function(){return e},e}function G(){var e=Object(T.a)(["\n  list-style: none;\n  width: 100%;\n"]);return G=function(){return e},e}function L(){var e=Object(T.a)(["\n  background-color: transparent;\n  border: none;\n  color: white;\n  padding: 0 0.5rem;\n  font-size: 1em;\n  &:focus {\n    outline: none;\n  }\n"]);return L=function(){return e},e}var J=S.b.input(L()),B=S.b.ul(G()),Y=Object(S.b)((function(e){var n=e.className,t=e.getSuggestions,c=e.suggestions,o=e.onSuggestionClick,l=Object(i.c)((function(e){return e.search})),s=Object(a.useRef)(),u=Object(i.b)(),m=function(e){u(O("")),o(e)};return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(U.c,{className:"search-icon"}),r.a.createElement(J,{type:"text",placeholder:"Search...",onChange:function(e){u(O(e.target.value)),t(e.target.value)},ref:s,value:l}))),r.a.createElement(B,{className:"suggestions"},c.map((function(e,n){return r.a.createElement("li",{className:"suggestion",key:e.id,onClick:m,"data-index":n},e.place_name)}))))}))(H());function X(){var e=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  width: 15rem;\n  margin: 0.5rem;\n  height: 12rem;\n  color: ",";\n  border-radius: 0.25rem;\n  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n  background-color: ",";\n  .top-container {\n    display: flex;\n    flex-direction: column;\n    .city-icon-container {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      height: 3rem;\n      padding: 0.5rem 1rem;\n      .weather-icon {\n        min-width: 3rem;\n        min-height: 3rem;\n      }\n    }\n    .date-text {\n      margin-left: 1.5rem;\n    }\n  }\n  .mid-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5rem 1rem;\n    .cur-temp {\n      flex: 1;\n      font-size: 1.6em;\n      margin-left: 0.5rem;\n    }\n    .max-min-temp-container {\n      width: 30%;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      span:first-child {\n        border-bottom: 1px solid\n          ",";\n        padding-bottom: 0.25rem;\n        margin-bottom: 0.25rem;\n      }\n    }\n  }\n  .btm-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    .description {\n      font-size: 1.2em;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n  .favorite-icon-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    color: #38619d;\n    padding: 0.5rem;\n    .favorite-icon {\n      font-size: 1.5em;\n      color: ",";\n    }\n    &:hover {\n      background-color: lightgray;\n      cursor: pointer;\n    }\n  }\n"]);return X=function(){return e},e}function $(){var e=Object(T.a)(["\n  font-size: 1.8em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 0.5rem;\n"]);return $=function(){return e},e}var q=S.b.div($()),Q=Object(S.b)((function(e){var n,t,a=e.className,c=e.weather,o=e.onFavoriteClick,l=c.city,s=c.lat,u=c.lon,m=c.timezone_offset,f=c.temp,p=c.temp_min,g=c.temp_max,h=c.description,v=c.icon,b=c.isFavorite,E=Object(i.c)((function(e){return e.date})),w=Object(i.c)((function(e){return e.degree})),y=function(e){var n=e.getHours()>12?e.getHours()%12:e.getHours(),t=e.getMinutes(),a=e.getHours()<12?"AM":"PM";return"".concat(_(n),":").concat(_(t)," ").concat(a)}((n=m,new Date(E.getTime()+1e3*n))),j=Object(i.b)(),T=function(e){return function(e,n){return N("fahrenheit"===e?1.8*n+32:n)}(w,e)+("celsius"===w?"\u2103":"\u2109")};return r.a.createElement("div",{className:a},r.a.createElement("div",{className:"top-container"},r.a.createElement("div",{className:"city-icon-container"},r.a.createElement(q,null,l),(t=v,{"01d":r.a.createElement(x.e,{className:"weather-icon"}),"02d":r.a.createElement(x.c,{className:"weather-icon"}),"03d":r.a.createElement(x.a,{className:"weather-icon"}),"04d":r.a.createElement(x.b,{className:"weather-icon"}),"09d":r.a.createElement(x.j,{className:"weather-icon"}),"10d":r.a.createElement(x.d,{className:"weather-icon"}),"11d":r.a.createElement(x.l,{className:"weather-icon"}),"13d":r.a.createElement(x.k,{className:"weather-icon"}),"50d":r.a.createElement(x.f,{className:"weather-icon"}),"01n":r.a.createElement(x.g,{className:"weather-icon"}),"02n":r.a.createElement(x.h,{className:"weather-icon"}),"03n":r.a.createElement(x.a,{className:"weather-icon"}),"04n":r.a.createElement(x.b,{className:"weather-icon"}),"09n":r.a.createElement(x.j,{className:"weather-icon"}),"10n":r.a.createElement(x.i,{className:"weather-icon"}),"11n":r.a.createElement(x.l,{className:"weather-icon"}),"13n":r.a.createElement(x.k,{className:"weather-icon"}),"50n":r.a.createElement(x.f,{className:"weather-icon"})}[t])),r.a.createElement("span",{className:"date-text"},y)),r.a.createElement("div",{className:"mid-container"},r.a.createElement("span",{className:"cur-temp"},T(f)),r.a.createElement("div",{className:"max-min-temp-container"},r.a.createElement("span",null,T(g)),r.a.createElement("span",null,T(p)))),r.a.createElement("div",{className:"btm-container"},r.a.createElement("span",{className:"description"},h)),r.a.createElement("div",{className:"favorite-icon-container",onClick:function(){b?j(d(c)):(j({type:"FAVORITES/ADD_TO_FAVORITES",data:c}),o(),j(O("")))},"data-lat":s,"data-lon":u},c.isFavorite?r.a.createElement(U.a,{className:"favorite-icon"}):r.a.createElement(U.b,{className:"favorite-icon"})))}))(X(),(function(e){return j(e.weather.temp).text}),(function(e){return j(e.weather.temp).bg}),(function(e){return j(e.weather.temp).text}),(function(e){return j(e.weather.temp).bg})),Z=t(8),ee=t.n(Z),ne=t(15),te=t(16),ae=t(43),re=t.n(ae),ce=t(23),oe=t.n(ce),ie=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-or-not",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_OPEN_WEATHER_API_KEY,le=function(e){var n=e.lon,t={params:{lat:e.lat,lon:n,units:"metric",exclude:"hourly",appid:ie}};return oe.a.get("https://api.openweathermap.org/data/2.5/onecall",t)},se=Object({NODE_ENV:"production",PUBLIC_URL:"/weather-or-not",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MAPBOX_API_KEY,ue=function(e){var n="https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,".json"),t={params:{types:"place",fuzzyMatch:"false",access_token:se}};return oe.a.get(n,t)};function me(){var e=Object(T.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  .search-top-container {\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1rem;\n  }\n  .search-result {\n    width: 100%;\n    height: 20rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    .greeting-msg {\n      padding: 1rem;\n      color: white;\n      font-size: 3em;\n      animation: "," 3s forwards;\n    }\n  }\n  .search-bar {\n    width: 70%;\n    margin-right: 1rem;\n  }\n"]);return me=function(){return e},e}t(65).config();var fe=Object(S.b)((function(e){var n=e.className,t=Object(a.useState)([]),c=Object(te.a)(t,2),o=c[0],i=c[1],l=Object(a.useState)(null),s=Object(te.a)(l,2),u=s[0],m=s[1],d=Object(a.useState)(!1),p=Object(te.a)(d,2),g=p[0],h=p[1],v=function(){var e=Object(ne.a)(ee.a.mark((function e(n){var t,a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f()(n)){e.next=13;break}return e.prev=1,e.next=4,ue(n);case 4:t=e.sent,a=[],t.data.features.map((function(e){return a.push(e)})),i(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=Object(ne.a)(ee.a.mark((function e(n,t){var a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(null),h(!0),e.next=5,le(t);case 5:a=e.sent,E(n,a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:h(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),E=function(e,n){m({city:e.split(",")[0],lat:n.lat,lon:n.lon,timezone_offset:n.timezone_offset,temp:N(n.current.temp),temp_min:N(n.daily[0].temp.min),temp_max:N(n.daily[0].temp.max),description:n.current.weather[0].description,icon:n.current.weather[0].icon,isFavorite:!1})},w=function(){m(null)};return Object(a.useEffect)((function(){document.addEventListener("mousedown",(function(e){e.target.classList.contains("suggestion")||f()(o)||i([])}))})),r.a.createElement("div",{className:n},r.a.createElement("div",{className:"search-top-container"},r.a.createElement(Y,{className:"search-bar",getSuggestions:v,suggestions:o,onSuggestionClick:function(e){var n=e.target.dataset.index,t=Object(te.a)(o[n].geometry.coordinates,2),a=t[0],r=t[1];i([]),b(e.target.innerText,{lon:a,lat:r})}})),r.a.createElement("div",{className:"search-result"},g?r.a.createElement(re.a,{size:30,color:"white"}):u?r.a.createElement(Q,{weather:u,onFavoriteClick:w}):r.a.createElement("span",{className:"greeting-msg"},"Check the weather and we'll keep you updated.")))}))(me(),F.fadeIn);function de(){var e=Object(T.a)(["\n  min-height: 15rem;\n  /* background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(10px); */\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  .empty-msg {\n    color: rgba(255, 255, 255, 0.8);\n    margin: 1rem 0 0 1rem;\n  }\n  .weather-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    flex-flow: row wrap;\n    height: 15rem;\n    max-height: 26rem;\n    overflow-y: scroll;\n    background-color: rgba(0, 0, 0, 0.2);\n    backdrop-filter: blur(10px);\n    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);\n    border-radius: 0.5rem;\n    .weather-card {\n      flex: calc(25% - 1rem);\n      max-width: calc(25% - 1rem);\n    }\n  }\n"]);return de=function(){return e},e}var pe=Object(S.b)((function(e){var n=e.className,t=Object(i.c)((function(e){return e.favorites})),c=Object(i.b)(),o=function(e){var n=e.target.dataset,t=n.lat,a=n.lon;c(d({lat:t,lon:a}))};return Object(a.useEffect)((function(){var e=setInterval((function(){t.map(function(){var e=Object(ne.a)(ee.a.mark((function e(n){var t,a;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={lat:n.lat,lon:n.lon},e.prev=1,e.next=4,le(t);case 4:a=e.sent,c({type:"FAVORITES/UPDATE_FAVORITE",data:Object(s.a)({},n,{temp:N(a.data.current.temp),temp_min:N(a.data.daily[0].temp.min),temp_max:N(a.data.daily[0].temp.max),description:a.data.current.weather[0].description,icon:a.data.current.weather[0].icon})}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}())}),12e5);return function(){return clearInterval(e)}})),r.a.createElement("div",{className:n},r.a.createElement("h1",null,"Favorites"),f()(t)?r.a.createElement("h2",{className:"empty-msg"},"Please add your favorite city to check the weather."):r.a.createElement("div",{className:"weather-card-container"},t.map((function(e){return r.a.createElement(Q,{key:"".concat(e.lat,".").concat(e.lon),className:"weather-card",weather:e,onFavoriteClick:o})}))))}))(de());function ge(){var e=Object(T.a)(['\n  * {\n    font-family: "Josefin Sans", sans-serif;\n  }\n  .blur {\n    filter: blur(0.125rem);\n    -webkit-filter: blur(0.125rem);\n  }\n']);return ge=function(){return e},e}var he=Object(S.a)(ge()),ve=t(45),be=t.n(ve),Ee=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){var n=setInterval((function(){e({type:"TIME/SET_CUR_UTC_TIME"})}),1e3);return function(){return clearInterval(n)}})),r.a.createElement("div",{className:"App"},r.a.createElement(he,null),r.a.createElement(V,{image:be.a}),r.a.createElement(K,null),r.a.createElement(fe,null),r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=t(47),Oe=t(46),ye=Object(l.createStore)(D,function(){var e=localStorage.getItem("weather-or-not/favorites"),n=localStorage.getItem("weather-or-not/degree");return e||(e=[],localStorage.setItem("weather-or-not/favorites",JSON.stringify(e))),n||(n="celsius",localStorage.setItem("weather-or-not/degree",n)),{favorites:JSON.parse(e),degree:n}}(),Object(Oe.composeWithDevTools)());o.a.render(r.a.createElement(we.a,null,r.a.createElement(i.a,{store:ye},r.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.ea0b311e.chunk.js.map