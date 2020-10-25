(this["webpackJsonpweather-or-not"]=this["webpackJsonpweather-or-not"]||[]).push([[0],{48:function(e,n,t){e.exports=t(84)},53:function(e,n,t){},58:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),c=t(18),o=t.n(c),i=(t(53),t(5)),s=t(10),l=t(24),u=t(47),m=t(11),f=t.n(m),d=function(e){return{type:"FAVORITES/REMOVE_FROM_FAVORITES",data:e}},h=function(e,n){return e.lat===n.lat&&e.lon===n.lon},p=function(e,n){return e.filter((function(e){return!h(e,n)}))},g=function(e,n){return!f()(e)&&p(e,n).length!==e.length},v=function(e){return localStorage.setItem("weather-or-not/favorites",JSON.stringify(e))},b=function(e){return alert("".concat(e.city," is already added to Favorites."))},w=function(e){return window.confirm("Are you sure you want to delete ".concat(e.city," from Favorites?"))},E=[];var O=function(e){return{type:"FAVORITES/SET_KEYWORD",keyword:e}};var y=function(e){return localStorage.setItem("weather-or-not/degree",e)};var x=t(4),j=function(e){var n,t="";return e<=-5?(n="#000000",t="#000000"):e<=5?(n="#d1dfe6",t="#808080"):e<=20?(n="#b2eddb",t="#808080"):e<=26?(n="#e6f7b0",t="#808080"):e<=32?(n="#fcec6f",t="#808080"):e<=36?(n="#ffc175",t="#808080"):(n="#fca474",t="#ffffff"),{bg:n,text:t}},N=function(e){return parseFloat(e).toFixed(1)},k=function(e){return e<10?"0".concat(e):e},S=t(2),T=t(3);function I(){var e=Object(S.a)(["\nfrom {\n  opacity: 1;\n  transform: translate(-50%, -50%);\n}\nto {\n  opacity: 0;\n  transform: translate(-50%, -6rem);\n}\n"]);return I=function(){return e},e}function _(){var e=Object(S.a)(["\n  from {\n    opacity: 0;\n    transform: translate(-50%, -6rem);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -50%);\n  }\n"]);return _=function(){return e},e}function F(){var e=Object(S.a)(["\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n"]);return F=function(){return e},e}function R(){var e=Object(S.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return R=function(){return e},e}var A={fadeIn:Object(T.c)(R()),fadeOut:Object(T.c)(F()),bounceIn:Object(T.c)(_()),bounceOut:Object(T.c)(I())},D=function(){var e=new Date,n=60*e.getTimezoneOffset();return new Date(e.getTime()+1e3*n)}();var z=Object(s.combineReducers)({favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0,t=e;switch(n.type){case"FAVORITES/ADD_TO_FAVORITES":return g(e,n.data)?(b(n.data),e):(t=[].concat(Object(u.a)(e),[Object(l.a)({},n.data,{isFavorite:!0})]),v(t),t);case"FAVORITES/REMOVE_FROM_FAVORITES":return w(n.data)&&(t=p(e,n.data),v(t)),t;case"FAVORITES/UPDATE_FAVORITE":return g(e,n.data)&&(t=e.map((function(e){return h(e,n.data)?n.data:e})),v(t)),t;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"FAVORITES/SET_KEYWORD":return n.keyword;default:return e}},degree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"celsius",n=arguments.length>1?arguments[1]:void 0,t=e;switch(n.type){case"DEGREE/TOGGLE_DEGREE":return y(t="celsius"===e?"fahrenheit":"celsius"),t;default:return e}},date:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TIME/SET_CUR_UTC_TIME":return new Date(e.getTime()+1e3);default:return e}}});t(58);function C(){var e=Object(S.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  z-index: -1;\n  background: url(",") no-repeat center center;\n  background-size: cover;\n"]);return C=function(){return e},e}Object(T.b)((function(e){var n=e.className;return r.a.createElement("div",{className:n})}))(C(),(function(e){return e.image}));function V(){var e=Object(S.a)(['\n  width: 100%;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: none;\n  * {\n    font-family: "Josefin Sans", sans-serif;\n  }\n  .degree-container {\n    .degree {\n      color: rgba(150, 150, 150);\n      &:hover {\n        cursor: pointer;\n      }\n    }\n    .degree-selected {\n      color: black;\n      &:hover {\n        cursor: default;\n      }\n    }\n  }\n']);return V=function(){return e},e}function M(){var e=Object(S.a)(["\n  font-size: 1em;\n"]);return M=function(){return e},e}var G=T.b.h2(M()),J=Object(T.b)((function(e){var n=e.className,t=Object(i.c)((function(e){return e.degree})),a=Object(i.b)(),c=function(e){t!==e.target.dataset.degree&&a({type:"DEGREE/TOGGLE_DEGREE"})};return r.a.createElement("nav",{className:n},r.a.createElement(G,null,"W/N"),r.a.createElement("div",{className:"degree-container"},r.a.createElement("span",{className:"degree ".concat("celsius"===t&&"degree-selected"),onClick:c,"data-degree":"celsius"},"\xb0C"),r.a.createElement("span",null,"/"),r.a.createElement("span",{className:"degree ".concat("fahrenheit"===t&&"degree-selected"),onClick:c,"data-degree":"fahrenheit"},"\xb0F")))}))(V()),U=t(14);function W(){var e=Object(S.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  border: thin rgba(255, 255, 255, 0.7) solid;\n  background-color: rgba(70, 70, 70, 1);\n  border-radius: 0.5rem;\n  overflow: hidden;\n  .search-container {\n    display: flex;\n    align-items: center;\n    padding: 0.5rem;\n    .search-form {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      .search-icon {\n        width: 1.5rem;\n        height: 1.5rem;\n        font-size: 1.5em;\n        color: white;\n        margin-right: 0.125rem;\n        margin-bottom: 0;\n      }\n      input {\n        flex: 1;\n      }\n    }\n  }\n  .suggestions {\n    color: white;\n    user-select: none;\n    li {\n      padding: 0.5rem 1rem;\n      &:hover {\n        background-color: rgba(120, 120, 120, 1);\n      }\n    }\n  }\n"]);return W=function(){return e},e}function H(){var e=Object(S.a)(["\n  list-style: none;\n  width: 100%;\n"]);return H=function(){return e},e}function L(){var e=Object(S.a)(["\n  background-color: transparent;\n  border: none;\n  color: white;\n  padding: 0 0.5rem;\n  font-size: 1em;\n  &:focus {\n    outline: none;\n  }\n"]);return L=function(){return e},e}var P=T.b.input(L()),B=T.b.ul(H()),K=Object(T.b)((function(e){var n=e.className,t=e.getSuggestions,c=e.suggestions,o=e.onSuggestionClick,s=Object(i.c)((function(e){return e.search})),l=Object(a.useRef)(),u=Object(i.b)(),m=function(e){u(O("")),o(e)};return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"search-container"},r.a.createElement("form",{className:"search-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement(U.c,{className:"search-icon"}),r.a.createElement(P,{type:"text",placeholder:"Search...",onChange:function(e){u(O(e.target.value)),t(e.target.value)},ref:l,value:s}))),r.a.createElement(B,{className:"suggestions"},c.map((function(e,n){return r.a.createElement("li",{className:"suggestion",key:e.id,onClick:m,"data-index":n},e.place_name)}))))}))(W());function Y(){var e=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden;\n  user-select: none;\n  width: 100%;\n  min-width: 13rem;\n  margin: 0.5rem;\n  height: 15rem;\n  color: ",";\n  border-radius: 0.75rem;\n  border: 8px solid ",";\n  background-color: white;\n  .top-container {\n    display: flex;\n    flex-direction: column;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    overflow: hidden;\n    .city-icon-container {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      height: 3rem;\n      padding: 0.5rem 1rem;\n      .weather-icon {\n        min-width: 2.5rem;\n        min-height: 2.5rem;\n      }\n    }\n    .date-text {\n      margin-left: 1.5rem;\n    }\n  }\n  .mid-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5rem 1rem;\n    .cur-temp {\n      flex: 1;\n      font-size: 1.6em;\n      margin-left: 0.5rem;\n    }\n    .max-min-temp-container {\n      width: 30%;\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n      span:first-child {\n        border-bottom: 1px solid\n          ",";\n        padding-bottom: 0.25rem;\n        margin-bottom: 0.25rem;\n      }\n    }\n  }\n  .btm-container {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n    overflow: hidden;\n    .description {\n      font-size: 1.2em;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n  .favorite-icon-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: white;\n    color: #38619d;\n    padding: 0.5rem;\n    transition: all 100ms ease-in-out;\n    .favorite-icon {\n      font-size: 1.5em;\n      color: #fa826b;\n    }\n    &:hover {\n      background-color: #f0f0f0;\n      cursor: pointer;\n    }\n  }\n"]);return Y=function(){return e},e}function $(){var e=Object(S.a)(["\n  font-size: 1.3em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 0.5rem;\n"]);return $=function(){return e},e}var q=T.b.div($()),Q=Object(T.b)((function(e){var n,t,a=e.className,c=e.weather,o=e.onFavoriteClick,s=c.city,l=c.lat,u=c.lon,m=c.timezone_offset,f=c.temp,h=c.temp_min,p=c.temp_max,g=c.description,v=c.icon,b=c.isFavorite,w=Object(i.c)((function(e){return e.date})),E=Object(i.c)((function(e){return e.degree})),y=function(e){var n=e.getHours()>12?e.getHours()%12:e.getHours(),t=e.getMinutes(),a=e.getHours()<12?"AM":"PM";return"".concat(k(n),":").concat(k(t)," ").concat(a)}((n=m,new Date(w.getTime()+1e3*n))),j=Object(i.b)(),S=function(e){return function(e,n){return N("fahrenheit"===e?1.8*n+32:n)}(E,e)+("celsius"===E?"\u2103":"\u2109")};return r.a.createElement("div",{className:a},r.a.createElement("div",{className:"top-container"},r.a.createElement("div",{className:"city-icon-container"},r.a.createElement(q,null,s),(t=v,{"01d":r.a.createElement(x.e,{className:"weather-icon"}),"02d":r.a.createElement(x.c,{className:"weather-icon"}),"03d":r.a.createElement(x.a,{className:"weather-icon"}),"04d":r.a.createElement(x.b,{className:"weather-icon"}),"09d":r.a.createElement(x.j,{className:"weather-icon"}),"10d":r.a.createElement(x.d,{className:"weather-icon"}),"11d":r.a.createElement(x.l,{className:"weather-icon"}),"13d":r.a.createElement(x.k,{className:"weather-icon"}),"50d":r.a.createElement(x.f,{className:"weather-icon"}),"01n":r.a.createElement(x.g,{className:"weather-icon"}),"02n":r.a.createElement(x.h,{className:"weather-icon"}),"03n":r.a.createElement(x.a,{className:"weather-icon"}),"04n":r.a.createElement(x.b,{className:"weather-icon"}),"09n":r.a.createElement(x.j,{className:"weather-icon"}),"10n":r.a.createElement(x.i,{className:"weather-icon"}),"11n":r.a.createElement(x.l,{className:"weather-icon"}),"13n":r.a.createElement(x.k,{className:"weather-icon"}),"50n":r.a.createElement(x.f,{className:"weather-icon"})}[t])),r.a.createElement("span",{className:"date-text"},y)),r.a.createElement("div",{className:"mid-container"},r.a.createElement("span",{className:"cur-temp"},S(f)),r.a.createElement("div",{className:"max-min-temp-container"},r.a.createElement("span",null,S(p)),r.a.createElement("span",null,S(h)))),r.a.createElement("div",{className:"btm-container"},r.a.createElement("span",{className:"description"},g)),r.a.createElement("div",{className:"favorite-icon-container",onClick:function(){b?j(d(c)):(j({type:"FAVORITES/ADD_TO_FAVORITES",data:c}),o(),j(O("")))},"data-lat":l,"data-lon":u},c.isFavorite?r.a.createElement(U.a,{className:"favorite-icon"}):r.a.createElement(U.b,{className:"favorite-icon"})))}))(Y(),(function(e){return j(e.weather.temp).text}),(function(e){return j(e.weather.temp).bg}),(function(e){return j(e.weather.temp).text})),X=t(8),Z=t.n(X),ee=t(15),ne=t(16),te=t(43),ae=t.n(te),re=t(23),ce=t.n(re),oe=function(e){var n={params:{lat:e.lat,lon:e.lon}};return ce.a.get("https://weather-or-not-server.herokuapp.com/weather",n)},ie=function(e){var n="https://weather-or-not-server.herokuapp.com/geocode/".concat(e);return ce.a.get(n)};function se(){var e=Object(S.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 2rem;\n  .search-top-container {\n    position: absolute;\n    z-index: 2;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 1rem;\n  }\n  .search-result {\n    width: 100%;\n    height: 20rem;\n    margin-top: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    .greeting-msg {\n      font-size: 2.5em;\n      animation: "," 2s forwards;\n      @media (max-width: 640px) {\n        font-size: 2em;\n      }\n    }\n  }\n  .search-bar {\n    width: 70%;\n  }\n"]);return se=function(){return e},e}t(64).config();var le=Object(T.b)((function(e){var n=e.className,t=Object(a.useState)([]),c=Object(ne.a)(t,2),o=c[0],i=c[1],s=Object(a.useState)(null),l=Object(ne.a)(s,2),u=l[0],m=l[1],d=Object(a.useState)(!1),h=Object(ne.a)(d,2),p=h[0],g=h[1],v=function(){var e=Object(ee.a)(Z.a.mark((function e(n){var t,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f()(n)){e.next=13;break}return e.prev=1,e.next=4,ie(n);case 4:t=e.sent,a=[],t.data.features.map((function(e){return a.push(e)})),i(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=Object(ee.a)(Z.a.mark((function e(n,t){var a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(null),g(!0),e.next=5,oe(t);case 5:a=e.sent,w(n,a.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:g(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),w=function(e,n){m({city:e.split(",")[0],lat:n.lat,lon:n.lon,timezone_offset:n.timezone_offset,temp:N(n.current.temp),temp_min:N(n.daily[0].temp.min),temp_max:N(n.daily[0].temp.max),description:n.current.weather[0].description,icon:n.current.weather[0].icon,isFavorite:!1})},E=function(){m(null)};return Object(a.useEffect)((function(){document.addEventListener("mousedown",(function(e){e.target.classList.contains("suggestion")||f()(o)||i([])}))})),r.a.createElement("div",{className:n},r.a.createElement("div",{className:"search-top-container"},r.a.createElement(K,{className:"search-bar",getSuggestions:v,suggestions:o,onSuggestionClick:function(e){var n=e.target.dataset.index,t=Object(ne.a)(o[n].geometry.coordinates,2),a=t[0],r=t[1];i([]),b(e.target.innerText,{lon:a,lat:r})}})),r.a.createElement("div",{className:"search-result"},p?r.a.createElement(ae.a,{size:30,color:"white"}):u?r.a.createElement(Q,{weather:u,onFavoriteClick:E}):r.a.createElement("span",{className:"greeting-msg"},"Check the weather and we'll keep you updated.")))}))(se(),A.fadeIn);function ue(){var e=Object(S.a)(["\n  min-height: 15rem;\n  /* background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(10px); */\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  .empty-msg {\n    color: gray;\n    margin: 1rem 0 0 1rem;\n  }\n  .weather-card-container {\n    flex: 1;\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: flex-start;\n    flex-flow: row wrap;\n    height: 15rem;\n    max-height: 26rem;\n    padding: 1rem;\n    margin-top: 1rem;\n    overflow: auto;\n    background-color: #f5f5f9;\n    border-radius: 1rem;\n    .weather-card {\n      flex: calc(50% - 1rem);\n      max-width: calc(50% - 1rem);\n      @media (max-width: 640px) {\n        flex: 1;\n        max-width: 100%;\n      }\n    }\n  }\n"]);return ue=function(){return e},e}var me=Object(T.b)((function(e){var n=e.className,t=Object(i.c)((function(e){return e.favorites})),c=Object(i.b)(),o=function(e){var n=e.target.dataset,t=n.lat,a=n.lon;c(d({lat:t,lon:a}))};return Object(a.useEffect)((function(){var e=setInterval((function(){t.map(function(){var e=Object(ee.a)(Z.a.mark((function e(n){var t,a;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={lat:n.lat,lon:n.lon},e.prev=1,e.next=4,oe(t);case 4:a=e.sent,c({type:"FAVORITES/UPDATE_FAVORITE",data:Object(l.a)({},n,{temp:N(a.data.current.temp),temp_min:N(a.data.daily[0].temp.min),temp_max:N(a.data.daily[0].temp.max),description:a.data.current.weather[0].description,icon:a.data.current.weather[0].icon})}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}())}),12e5);return function(){return clearInterval(e)}})),r.a.createElement("div",{className:n},r.a.createElement("h1",null,"Favorites"),f()(t)?r.a.createElement("h2",{className:"empty-msg"},"Please add your favorite city to check the weather."):r.a.createElement("div",{className:"weather-card-container"},t.map((function(e){return r.a.createElement(Q,{key:"".concat(e.lat,".").concat(e.lon),className:"weather-card",weather:e,onFavoriteClick:o})}))))}))(ue());function fe(){var e=Object(S.a)(["\n  * {\n    font-family: 'Open Sans', sans-serif;\n  }\n  .blur {\n    filter: blur(0.125rem);\n    -webkit-filter: blur(0.125rem);\n  }\n"]);return fe=function(){return e},e}var de=Object(T.a)(fe()),he=function(){var e=Object(i.b)();return Object(a.useEffect)((function(){var n=setInterval((function(){e({type:"TIME/SET_CUR_UTC_TIME"})}),1e3);return function(){return clearInterval(n)}})),r.a.createElement("div",{className:"App"},r.a.createElement(de,null),r.a.createElement(J,null),r.a.createElement(le,null),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var pe=t(46),ge=t(45),ve=Object(s.createStore)(z,function(){var e=localStorage.getItem("weather-or-not/favorites"),n=localStorage.getItem("weather-or-not/degree");return e||(e=[],localStorage.setItem("weather-or-not/favorites",JSON.stringify(e))),n||(n="celsius",localStorage.setItem("weather-or-not/degree",n)),{favorites:JSON.parse(e),degree:n}}(),Object(ge.composeWithDevTools)());o.a.render(r.a.createElement(pe.a,null,r.a.createElement(i.a,{store:ve},r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.4f05f039.chunk.js.map