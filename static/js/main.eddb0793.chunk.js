(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return i});n(49);var r=n(12).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7b38740e-6682-4bef-94dc-8cb25179ee14"}}),o={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(t,"&count=").concat(e)).then(function(t){return t.data})},followDelete:function(t){return r.delete("follow/".concat(t)).then(function(t){return t.data})},followPost:function(t){return r.post("follow/".concat(t)).then(function(t){return t.data})},getProfile:function(t){return console.warn("Please profileAPI object"),a.getProfile(t)}},a={getProfile:function(t){return r.get("profile/"+t)},getStatus:function(t){return r.get("profile/status/"+t)},updateStatus:function(t){return r.put("profile/status",{status:t})}},i={me:function(){return r.get("auth/me")},login:function(t,e,n){return r.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},,,,function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return f});var r=n(5),o=n(4),a=n(15);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new _(o||[]);return r(i,"_invoke",{value:O(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var g={};s(g,a,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==e&&n.call(y,a)&&(g=y);var w=v.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(l).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function O(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,r(w,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),s(E.prototype,c,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),s(w,u,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var c={id:null,login:null,email:null,isAuth:!1},u=function(t,e,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{id:t,login:e,email:n,isAuth:r}}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"samurai-network/auth/SET_USER_DATA":return Object(o.a)({},t,e.payload);default:return t}};var s=function(){return function(){var t=Object(r.a)(i().mark(function t(e){var n,r,o,c,s;return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.me();case 2:0===(n=t.sent).data.resultCode&&(r=n.data.data,o=r.id,c=r.login,s=r.email,e(u(o,c,s,!0)));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},l=function(t,e,n){return function(){var o=Object(r.a)(i().mark(function r(o){return i().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,a.a.login(t,e,n);case 2:0===r.sent.data.resultCode&&o(s());case 5:case"end":return r.stop()}},r)}));return function(t){return o.apply(this,arguments)}}()},f=function(){return function(){var t=Object(r.a)(i().mark(function t(e){return i().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.a.logout();case 2:0===t.sent.data.resultCode&&e(u(null,null,null,!1));case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}},,function(t,e,n){"use strict";var r=n(5),o=n(6),a=n(4),i=n(15),c=function(t,e,n,r){return t.map(function(t){return t[n]===e?Object(a.a)({},t,r):t})};function u(){u=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new _(o||[]);return r(i,"_invoke",{value:O(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var g={};s(g,a,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==e&&n.call(y,a)&&(g=y);var w=v.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(l).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function O(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,r(w,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),s(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),s(w,c,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}n.d(e,"d",function(){return h}),n.d(e,"e",function(){return d}),n.d(e,"c",function(){return v}),n.d(e,"b",function(){return m}),n.d(e,"f",function(){return y});var s={users:[],pageSize:5,totalUsersCount:0,currentPages:1,isFetching:!1,followingProgres:[]},l=function(t){return{type:"FOLLOW",userId:t}},f=function(t){return{type:"UNFOLLOW",userId:t}},h=function(t){return{type:"SET_CURRENT_PAGE",currentPages:t}},p=function(t){return{type:"TOGGLE_IS_FETCHING",isFetch:t}},d=function(t,e){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetch:t,userId:e}},v=function(t,e){return function(){var n=Object(r.a)(u().mark(function n(r){var o;return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(p(!0)),n.next=3,i.c.getUsers(t,e);case 3:o=n.sent,r(p(!1)),r({type:"SET_USERS",users:o.items}),r({type:"SET_TOTAL_COUNT",count:o.totalCount}),r(h(t));case 8:case"end":return n.stop()}},n)}));return function(t){return n.apply(this,arguments)}}()},g=function(){var t=Object(r.a)(u().mark(function t(e,n,r,o){return u().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e(d(!0,n)),t.next=3,r(n);case 3:0===t.sent.resultCode&&e(o(n)),e(d(!1,n));case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}(),m=function(t){return function(){var e=Object(r.a)(u().mark(function e(n){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g(n,t,i.c.followPost.bind(i.c),l);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},y=function(t){return function(){var e=Object(r.a)(u().mark(function e(n){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:g(n,t,i.c.followDelete.bind(i.c),f);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FOLLOW":return Object(a.a)({},t,{users:c(t.users,e.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(a.a)({},t,{users:c(t.users,e.userId,"id",{followed:!1})});case"SET_USERS":return Object(a.a)({},t,{users:e.users});case"SET_CURRENT_PAGE":return Object(a.a)({},t,{currentPages:e.currentPages});case"SET_TOTAL_COUNT":return Object(a.a)({},t,{totalUsersCount:e.count});case"TOGGLE_IS_FETCHING":return Object(a.a)({},t,{isFetching:e.isFetch});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(a.a)({},t,{followingProgres:e.isFetch?[].concat(Object(o.a)(t.followingProgres),[e.userId]):t.followingProgres.filter(function(t){return t!=e.userId})});default:return t}}},function(t,e,n){t.exports={nav:"Navbar_nav__31OvL",navItem:"Navbar_navItem__uO-IJ"}},,,,function(t,e,n){t.exports={header:"Header_header__1G-Br",loginBlock:"Header_loginBlock__3N7rl",login:"Header_login__BvX-R",logoutBox:"Header_logoutBox__1JLMq",buttonLogout:"Header_buttonLogout__1Ypbg"}},,,function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(50),i=n.n(a);e.a=function(t){return o.a.createElement("div",null,o.a.createElement("img",{src:i.a}))}},,,,,,function(t,e,n){"use strict";n.d(e,"b",function(){return i});var r=n(4),o=(n(15),n(19)),a={initialized:!1},i=function(){return function(t){t(Object(o.b)()).then(function(){return t({type:"INITIALIZED_SUCCESS"})})}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(r.a)({},t,{initialized:!0});default:return t}}},,,,function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"e",function(){return l}),n.d(e,"d",function(){return h}),n.d(e,"c",function(){return p}),n.d(e,"f",function(){return d});var r=n(5),o=n(6),a=n(4),i=n(15);function c(){c=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new _(o||[]);return r(i,"_invoke",{value:O(t,n,c)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var g={};s(g,a,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==e&&n.call(y,a)&&(g=y);var w=v.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(e){s(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(l).then(function(t){s.value=t,i(s)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function O(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,r(w,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),s(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(w),s(w,u,"Generator"),s(w,a,function(){return this}),s(w,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var u={postData:[{id:1,message:"Hello world!"},{id:2,message:"its my first post"},{id:1,message:"WORLD WORK"},{id:1,message:"samurai way"},{id:1,message:"101 movie"}],newPostText:"text post",profile:null,status:""},s=function(){return{type:"ADD-POST"}},l=function(t){return{type:"UPDATE-NEW-POST-TEXT",newText:t}},f=function(t){return{type:"SET_STATUS",status:t}},h=function(t){return function(){var e=Object(r.a)(c().mark(function e(n){var r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getProfile(t);case 2:r=e.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},p=function(t){return function(){var e=Object(r.a)(c().mark(function e(n){var r;return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getStatus(t);case 2:r=e.sent,n(f(r.data));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(t){return function(){var e=Object(r.a)(c().mark(function e(n){return c().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(f(t));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD-POST":var n={id:5,message:t.newPostText};return Object(a.a)({},t,{postData:[].concat(Object(o.a)(t.postData),[n]),newPostText:""});case"UPDATE-NEW-POST-TEXT":return Object(a.a)({},t,{newPostText:e.newText});case"SET_STATUS":return Object(a.a)({},t,{status:e.status});case"SET_USER_PROFILE":return Object(a.a)({},t,{profile:e.profile});default:return t}}},,function(t,e,n){"use strict";n.d(e,"a",function(){return p});var r=n(10),o=n(11),a=n(17),i=n(14),c=n(16),u=n(1),s=n.n(u),l=n(18),f=n(0),h=function(t){return{isAuth:t.auth.isAuth}},p=function(t){var e=function(e){function n(){return Object(r.a)(this,n),Object(a.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,e),Object(o.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(t,this.props):s.a.createElement(f.a,{to:"/login"})}}]),n}(s.a.Component);return Object(l.b)(h)(e)}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return c});var r=n(6),o=n(4),a={dialogData:[{id:1,name:"dimych"},{id:2,name:"any"},{id:3,name:"banan"},{id:4,name:"bobrik"},{id:5,name:"bayelPro"},{id:6,name:"hitler"}],messagesData:[{id:1,message:"boberrr"},{id:2,message:"hi im roza"},{id:3,message:"mimozochka"},{id:4,message:"bobrik"},{id:5,message:"bayel crossavchik"}],newMessageBody:""},i=function(){return{type:"SEND-MESSAGE"}},c=function(t){return{type:"UPDATE-NEW-MESSAGE-BODY",body:t}};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(o.a)({},t,{newMessageBody:e.body});case"SEND-MESSAGE":var n=t.newMessageBody;return Object(o.a)({},t,{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:6,message:n}]),newMessageBody:""});default:return t}}},,,,function(t,e,n){t.exports={selectedPage:"paginator_selectedPage__2YHJ_"}},function(t,e,n){t.exports=n.p+"static/media/interact.c79fd870.png"},function(t,e,n){t.exports={userPhoto:"Users_userPhoto__1r9kn"}},,function(t,e,n){t.exports=n.p+"static/media/Spinner-1s-200px.9064981b.svg"},,function(t,e,n){"use strict";var r=n(24),o=n(39),a=n(42),i=n(21),c=n(19),u=n(53),s=n(35),l=Object(r.b)({profilePages:o.b,messagesPages:a.a,usersPages:i.a,auth:c.a,app:s.a}),f=Object(r.d)(l,Object(r.a)(u.a));e.a=f},,function(t,e,n){"use strict";var r=n(10),o=n(11),a=n(17),i=n(14),c=n(16),u=n(1),s=n.n(u),l=(n(65),n(22)),f=n.n(l),h=n(13),p=function(){return s.a.createElement("nav",{className:f.a.nav},s.a.createElement("div",{className:f.a.navItem},s.a.createElement(h.b,{to:"/profile"},"Profile")),s.a.createElement("div",{className:f.a.navItem},s.a.createElement(h.b,{to:"/dialog"},"Messages")),s.a.createElement("div",{className:f.a.navItem},s.a.createElement(h.b,{to:"/users"},"Users")),s.a.createElement("div",{className:f.a.navItem},s.a.createElement(h.b,{to:"/news"},"News")),s.a.createElement("div",{className:f.a.navItem},s.a.createElement(h.b,{to:"/music"},"Music")),s.a.createElement("div",{className:f.a.navItem},s.a.createElement(h.b,{to:"/settings"},"Settings")))},d=n(0),v=function(t){return s.a.createElement("div",null,"Setting")},g=function(t){return s.a.createElement("div",null,"News")},m=function(t){return s.a.createElement("div",null,"MUSIC")},y=n(18),w=n(23),b=n(7),E=n(46),O=n.n(E),L=function(t){for(var e=t.totalItemsCount,n=t.pageSize,r=t.currentPages,o=t.onPageChanged,a=t.potrionSize,i=void 0===a?15:a,c=Math.ceil(e/n),l=[],f=1;f<=c;f++)l.push(f);var h=Math.ceil(c/i),p=Object(u.useState)(1),d=Object(b.a)(p,2),v=d[0],g=d[1],m=(v-1)*i+1,y=v*i;return s.a.createElement("div",null,v>1&&s.a.createElement("button",{onClick:function(){g(v-1)}},"Left"),l.filter(function(t){return t>=m&&t<=y}).map(function(t){return s.a.createElement("span",{className:r===t&&O.a.selectedPage,onClick:function(e){o(t)}},t)}),";",h>v&&s.a.createElement("button",{onClick:function(){g(v+1)}},"right"),";")},x=n(47),j=n.n(x),_=n(48),S=n.n(_),P=function(t){var e=t.user,n=t.followingProgres,r=t.unfollow,o=t.follow;return s.a.createElement("div",null,s.a.createElement("span",null,s.a.createElement("div",null,s.a.createElement(h.b,{to:"/profile/"+e.id},s.a.createElement("img",{src:null!=e.photos.small?e.photos.small:j.a,className:S.a.userPhoto}))),s.a.createElement("div",null,e.followed?s.a.createElement("button",{disabled:n.some(function(t){return t===e.id}),onClick:function(){r(e.id)}},"Unfollow"):s.a.createElement("button",{disabled:n.some(function(t){return t===e.id}),onClick:function(){o(e.id)}},"Follow"))),s.a.createElement("span",null,s.a.createElement("span",null,s.a.createElement("div",null,"Nickname: ",e.name))))},T=function(t){var e=t.currentPages,n=t.totalUsersCount,r=t.pageSize,o=t.onPageChanged,a=Object(w.a)(t,["currentPages","totalUsersCount","pageSize","onPageChanged"]);return s.a.createElement("div",null,s.a.createElement(L,{currentPages:e,onPageChanged:o,totalItemsCount:n,pageSize:r}),s.a.createElement("div",null,a.users.map(function(t){return s.a.createElement(P,{user:t,key:t.id,followingProgres:a.followingProgres,unfollow:a.unfollow,follow:a.follow})})))},k=n(21),N=n(29),I=n(41),C=n(24),G=function(t){return t.usersPages.users},A=function(t){return t.usersPages.pageSize},U=function(t){return t.usersPages.totalUsersCount},F=function(t){return t.usersPages.currentPages},D=function(t){return t.usersPages.followingProgres},z=function(t){function e(){var t,n;Object(r.a)(this,e);for(var o=arguments.length,c=new Array(o),u=0;u<o;u++)c[u]=arguments[u];return(n=Object(a.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(c)))).onPageChanged=function(t){n.props.getUsers(t,n.props.pageSize)},n}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPages,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isFetching?s.a.createElement(N.a,null):null,s.a.createElement(T,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPages:this.props.currentPages,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,followingProgres:this.props.followingProgres}))}}]),e}(s.a.Component),R=Object(C.c)(I.a,Object(y.b)(function(t){return{users:G(t),pageSize:A(t),totalUsersCount:U(t),currentPages:F(t),followingProgres:D(t)}},{follow:k.b,unfollow:k.f,setCurrentPage:k.d,setIsFollowingProgres:k.e,getUsers:k.c}))(z),M=n(26),B=n.n(M),W=function(t){return s.a.createElement("header",{className:B.a.header},s.a.createElement("img",{src:"https://assets.stickpng.com/images/61fc02743cf0e70004222074.png"}),s.a.createElement("div",{className:B.a.loginBlock},t.isAuth?s.a.createElement("div",{className:B.a.logoutBox}," ",t.login," - ",s.a.createElement("button",{className:B.a.buttonLogout,onClick:t.logout},"Log out")):s.a.createElement("div",{className:B.a.login},s.a.createElement(h.b,{to:"/login"},"LOGIN"))))},Y=n(19),H=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return s.a.createElement(W,this.props)}}]),e}(s.a.Component),J=Object(y.b)(function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}},{logout:Y.d})(H),X=n(51),q=function(t){var e=Object(X.a)(),n=e.register,r=e.handleSubmit;return s.a.createElement("form",{onSubmit:r(function(e){t.login(e.email,e.password,e.chekbox),console.log(e)})},s.a.createElement("div",null,s.a.createElement("input",Object.assign({},n("email",{required:!0,maxLength:200}),{placeholder:"Login"}))),s.a.createElement("div",null,s.a.createElement("input",Object.assign({type:"password"},n("password"),{placeholder:"Password"}))),s.a.createElement("div",null,s.a.createElement("input",Object.assign({},n("chekbox"),{type:"checkbox"}))),s.a.createElement("div",null,s.a.createElement("input",{type:"submit"})))},K=Object(y.b)(function(t){return{isAuth:t.auth.isAuth}},{login:Y.c,logout:Y.d})(function(t){return t.isAuth?s.a.createElement(d.a,{to:"/profile"}):s.a.createElement("div",null,s.a.createElement("h1",null,"You are not authorized"),s.a.createElement(q,{login:t.login,logout:t.logout}))}),Z=n(35),Q=s.a.lazy(function(){return n.e(1).then(n.bind(null,93))}),V=s.a.lazy(function(){return n.e(2).then(n.bind(null,92))}),$=function(t){function e(){return Object(r.a)(this,e),Object(a.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?s.a.createElement("div",{className:"app-wrapper"},s.a.createElement(J,null),s.a.createElement(p,null),s.a.createElement("div",{className:"app-wrapper-content"},s.a.createElement(d.d,null,s.a.createElement(d.b,{path:"/dialog",element:s.a.createElement(u.Suspense,null,"  ",s.a.createElement(Q,null)," ")}),s.a.createElement(d.b,{path:"/profile",element:s.a.createElement(u.Suspense,null," ",s.a.createElement(V,null)," ")},s.a.createElement(d.b,{path:":userId",element:s.a.createElement(u.Suspense,null," ",s.a.createElement(V,null)," ")})),s.a.createElement(d.b,{path:"/users",element:s.a.createElement(R,null)}),s.a.createElement(d.b,{path:"/login",element:s.a.createElement(K,null)}),s.a.createElement(d.b,{path:"/news",element:s.a.createElement(g,null)}),s.a.createElement(d.b,{path:"/music",element:s.a.createElement(m,null)}),s.a.createElement(d.b,{path:"/settings",element:s.a.createElement(v,null)})))):s.a.createElement(N.a,null)}}]),e}(s.a.Component);e.a=Object(y.b)(function(t){return{initialized:t.app.initialized}},{initializeApp:Z.b})($)},function(t,e,n){t.exports=n(56)},function(t,e,n){"use strict";n.r(e),function(t){var e=n(1),r=n.n(e),o=n(43),a=n.n(o),i=(n(63),n(54)),c=n(52),u=n(13),s=n(18);a.a.createRoot(document.getElementById("root")).render(r.a.createElement(u.a,{basename:t.evn.PUBLIC_URL},r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:c.a},r.a.createElement(i.a,null)))))}.call(this,n(40))},,,,,,,function(t,e,n){},,function(t,e,n){}],[[55,4,3]]]);
//# sourceMappingURL=main.eddb0793.chunk.js.map