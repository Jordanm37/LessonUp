(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{BtY0:function(e,t,n){e.exports=n.p+"static/lessonup-maths-chat-4740d71528df107eaaa71a156604f652.png"},ELEi:function(e,t,n){var r;n("KKXr"),n("8+KV"),n("Oyvg"),n("f3/d"),n("pIFo"),n("LK8F"),n("/SS/"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Tze0"),n("bWfx"),n("91GP"),n("Vd3H"),n("2Spj"),n("hHhE"),n("rE2o"),n("ioFf"),n("HAE/"),e.exports=(r=n("q1tI"),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){var r=n(3);e.exports=n(8)(r.isElement,!0)},function(e,t){e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),a=n(3),i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o.initializer.load(this,n,t),this.begin()}return r(e,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,e&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var e=this;this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){e.currentElContent&&0!==e.currentElContent.length?e.backspace(e.currentElContent,e.currentElContent.length):e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)}),this.startDelay)}},{key:"typewrite",value:function(e,t){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),o=1;!0!==this.pause.status?this.timeout=setTimeout((function(){t=a.htmlParser.typeHtmlChars(e,t,n);var r=0,i=e.substr(t);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var s=1;s+=(i=/\d+/.exec(i)[0]).length,r=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),e=e.substring(0,t)+e.substring(t+s),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==e.substr(t+o).charAt(0)&&!(t+ ++o>e.length););var u=e.substring(0,t),c=e.substring(u.length+1,t+o),l=e.substring(t+o+1);e=u+c+l,o--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),t>=e.length?n.doneTyping(e,t):n.keepTyping(e,t,o),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),r)}),r):this.setPauseStatus(e,t,!0)}},{key:"keepTyping",value:function(e,t,n){0===t&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),t+=n;var r=e.substr(0,t);this.replaceText(r),this.typewrite(e,t)}},{key:"doneTyping",value:function(e,t){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(e,t)}),this.backDelay))}},{key:"backspace",value:function(e,t){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){t=a.htmlParser.backSpaceHtmlChars(e,t,n);var r=e.substr(0,t);if(n.replaceText(r),n.smartBackspace){var o=n.strings[n.arrayPos+1];o&&r===o.substr(0,t)?n.stopNum=t:n.stopNum=0}t>n.stopNum?(t--,n.backspace(e,t)):t<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],t))}),r)}else this.setPauseStatus(e,t,!0)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(e,t,n){this.pause.typewrite=n,this.pause.curString=e,this.pause.curStrPos=t}},{key:"toggleBlinking",value:function(e){this.cursor&&(this.pause.status||this.cursorBlinking!==e&&(this.cursorBlinking=e,e?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(e){return Math.round(Math.random()*e/2)+e}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var e=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){e.arrayPos++,e.replaceText(""),e.strings.length>e.arrayPos?e.typewrite(e.strings[e.sequence[e.arrayPos]],0):(e.typewrite(e.strings[0],0),e.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(e){this.attr?this.el.setAttribute(this.attr,e):this.isInput?this.el.value=e:"html"===this.contentType?this.el.innerHTML=e:this.el.textContent=e}},{key:"bindFocusEvents",value:function(){var e=this;this.isInput&&(this.el.addEventListener("focus",(function(t){e.stop()})),this.el.addEventListener("blur",(function(t){e.el.value&&0!==e.el.value.length||e.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),e}();t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=(r=n(2))&&r.__esModule?r:{default:r},s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return a(e,[{key:"load",value:function(e,t,n){if(e.el="string"==typeof n?document.querySelector(n):n,e.options=o({},i.default,t),e.isInput="input"===e.el.tagName.toLowerCase(),e.attr=e.options.attr,e.bindInputFocusEvents=e.options.bindInputFocusEvents,e.showCursor=!e.isInput&&e.options.showCursor,e.cursorChar=e.options.cursorChar,e.cursorBlinking=!0,e.elContent=e.attr?e.el.getAttribute(e.attr):e.el.textContent,e.contentType=e.options.contentType,e.typeSpeed=e.options.typeSpeed,e.startDelay=e.options.startDelay,e.backSpeed=e.options.backSpeed,e.smartBackspace=e.options.smartBackspace,e.backDelay=e.options.backDelay,e.fadeOut=e.options.fadeOut,e.fadeOutClass=e.options.fadeOutClass,e.fadeOutDelay=e.options.fadeOutDelay,e.isPaused=!1,e.strings=e.options.strings.map((function(e){return e.trim()})),"string"==typeof e.options.stringsElement?e.stringsElement=document.querySelector(e.options.stringsElement):e.stringsElement=e.options.stringsElement,e.stringsElement){e.strings=[],e.stringsElement.style.display="none";var r=Array.prototype.slice.apply(e.stringsElement.children),a=r.length;if(a)for(var s=0;s<a;s+=1){var u=r[s];e.strings.push(u.innerHTML.trim())}}for(var s in e.strPos=0,e.arrayPos=0,e.stopNum=0,e.loop=e.options.loop,e.loopCount=e.options.loopCount,e.curLoop=0,e.shuffle=e.options.shuffle,e.sequence=[],e.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},e.typingComplete=!1,e.strings)e.sequence[s]=s;e.currentElContent=this.getCurrentElContent(e),e.autoInsertCss=e.options.autoInsertCss,this.appendAnimationCss(e)}},{key:"getCurrentElContent",value:function(e){return e.attr?e.el.getAttribute(e.attr):e.isInput?e.el.value:"html"===e.contentType?e.el.innerHTML:e.el.textContent}},{key:"appendAnimationCss",value:function(e){if(e.autoInsertCss&&(e.showCursor||e.fadeOut)&&!document.querySelector("[data-typed-js-css]")){var t=document.createElement("style");t.type="text/css",t.setAttribute("data-typed-js-css",!0);var n="";e.showCursor&&(n+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),e.fadeOut&&(n+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==t.length&&(t.innerHTML=n,document.body.appendChild(t))}}}]),e}();t.default=s;var u=new s;t.initializer=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onComplete:function(e){},preStringTyped:function(e,t){},onStringTyped:function(e,t){},onLastStringBackspaced:function(e){},onTypingPaused:function(e,t){},onTypingResumed:function(e,t){},onReset:function(e){},onStop:function(e,t){},onStart:function(e,t){},onDestroy:function(e){}},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return n(e,[{key:"typeHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if("<"===r||"&"===r){var o;for(o="<"===r?">":";";e.substr(t+1).charAt(0)!==o&&!(++t+1>e.length););t++}return t}},{key:"backSpaceHtmlChars",value:function(e,t,n){if("html"!==n.contentType)return t;var r=e.substr(t).charAt(0);if(">"===r||";"===r){var o;for(o=">"===r?"<":"&";e.substr(t-1).charAt(0)!==o&&!(--t<0););t--}return t}}]),e}();t.default=r;var o=new r;t.htmlParser=o}])},e.exports=r()},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=n.n(a),s=n(4),u=n.n(s);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){var e,n,r,a,i,s,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,p=new Array(l),y=0;y<l;y++)p[y]=arguments[y];return r=this,n=!(a=(e=f(t)).call.apply(e,[this].concat(p)))||"object"!==c(a)&&"function"!=typeof a?d(r):a,i=d(n),s="rootElement",u=o.a.createRef(),s in i?Object.defineProperty(i,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[s]=u,n}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=(e.style,e.typedRef,e.stopped),n=(e.className,l(e,["style","typedRef","stopped","className"]));this.constructTyped(n),t&&this.typed.stop()}},{key:"constructTyped",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.props,r=(n.style,n.typedRef,n.stopped,n.className,l(n,["style","typedRef","stopped","className"]));this.typed&&this.typed.destroy(),this.typed=new u.a(this.rootElement.current,Object.assign(r,t)),this.props.typedRef&&this.props.typedRef(this.typed),this.typed.reConstruct=function(t){e.constructTyped(t)}}},{key:"shouldComponentUpdate",value:function(e){var t=this;if(this.props!==e){e.style,e.typedRef,e.stopped,e.className;var n=l(e,["style","typedRef","stopped","className"]);return this.typed.options=Object.assign(this.typed.options,n),!Object.keys(e).every((function(n){return!t.props[n]&&e[n]?(t.constructTyped(e),!1):(t.typed[n]&&(t.typed[n]=e[n]),!0)}))||this.props.strings.length===e.strings.length||this.constructTyped(e),!0}return!1}},{key:"render",value:function(){var e=this.props,t=e.style,n=e.className,r=e.children,a=o.a.createElement("span",{ref:this.rootElement});return r&&(a=o.a.cloneElement(r,{ref:this.rootElement})),o.a.createElement("span",{style:t,className:n},a)}}])&&p(n.prototype,a),t}();m.propTypes={style:i.a.object,className:i.a.string,children:i.a.object,typedRef:i.a.func,stopped:i.a.bool,strings:i.a.arrayOf(i.a.string),typeSpeed:i.a.number,startDelay:i.a.number,backSpeed:i.a.number,smartBackspace:i.a.bool,shuffle:i.a.bool,backDelay:i.a.number,fadeOut:i.a.bool,fadeOutClass:i.a.string,fadeOutDelay:i.a.number,loop:i.a.bool,loopCount:i.a.number,showCursor:i.a.bool,cursorChar:i.a.string,autoInsertCss:i.a.bool,attr:i.a.string,bindInputFocusEvents:i.a.bool,contentType:i.a.oneOf(["html",""]),onComplete:i.a.func,preStringTyped:i.a.func,onStringTyped:i.a.func,onLastStringBackspaced:i.a.func,onTypingPaused:i.a.func,onTypingResumed:i.a.func,onReset:i.a.func,onStop:i.a.func,onStart:i.a.func,onDestroy:i.a.func},t.default=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case f:case i:case u:case s:case y:return e;default:switch(e=e&&e.$$typeof){case l:case d:case c:return e;default:return t}}case g:case h:case a:return t}}}function w(e){return x(e)===f}t.typeOf=x,t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=c,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=u,t.StrictMode=s,t.Suspense=y,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===f||e===u||e===s||e===y||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===c||e.$$typeof===l||e.$$typeof===d||e.$$typeof===b||e.$$typeof===v)},t.isAsyncMode=function(e){return w(e)||x(e)===p},t.isConcurrentMode=w,t.isContextConsumer=function(e){return x(e)===l},t.isContextProvider=function(e){return x(e)===c},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===g},t.isMemo=function(e){return x(e)===h},t.isPortal=function(e){return x(e)===a},t.isProfiler=function(e){return x(e)===u},t.isStrictMode=function(e){return x(e)===s},t.isSuspense=function(e){return x(e)===y}},function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"==typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,f=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!=typeof console&&console.warn(a);try{throw new Error(a)}catch(e){}};function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var d=e.type;switch(d){case c:case l:case o:case i:case a:case f:return d;default:var h=d&&d.$$typeof;switch(h){case u:case p:case s:return h;default:return t}}case m:case y:case r:return t}}}var x=c,w=l,E=u,S=s,k=n,O=p,C=o,T=m,P=y,j=r,_=i,I=a,N=f,M=!1;function A(e){return v(e)===l}t.typeOf=v,t.AsyncMode=x,t.ConcurrentMode=w,t.ContextConsumer=E,t.ContextProvider=S,t.Element=k,t.ForwardRef=O,t.Fragment=C,t.Lazy=T,t.Memo=P,t.Portal=j,t.Profiler=_,t.StrictMode=I,t.Suspense=N,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===i||e===a||e===f||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g)},t.isAsyncMode=function(e){return M||(M=!0,function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];b.apply(void 0,[t].concat(r))}}(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),A(e)||v(e)===c},t.isConcurrentMode=A,t.isContextConsumer=function(e){return v(e)===u},t.isContextProvider=function(e){return v(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return v(e)===p},t.isFragment=function(e){return v(e)===o},t.isLazy=function(e){return v(e)===m},t.isMemo=function(e){return v(e)===y},t.isPortal=function(e){return v(e)===r},t.isProfiler=function(e){return v(e)===i},t.isStrictMode=function(e){return v(e)===a},t.isSuspense=function(e){return v(e)===f}}()},function(e,t,n){"use strict";var r,o=n(3),a=n(9),i=n(2),s=n(10),u=Function.call.bind(Object.prototype.hasOwnProperty);function c(){return null}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},e.exports=function(e,t){var n="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",p={array:m("array"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(c),arrayOf:function(e){return y((function(t,n,r,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s))return new d("Invalid "+o+" `"+a+"` of type `"+g(s)+"` supplied to `"+r+"`, expected an array.");for(var u=0;u<s.length;u++){var c=e(s,u,r,o,a+"["+u+"]",i);if(c instanceof Error)return c}return null}))},element:y((function(t,n,r,o,a){var i=t[n];return e(i)?null:new d("Invalid "+o+" `"+a+"` of type `"+g(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:y((function(e,t,n,r,a){var i=e[t];return o.isValidElementType(i)?null:new d("Invalid "+r+" `"+a+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||l;return new d("Invalid "+o+" `"+a+"` of type `"+function(e){return e.constructor&&e.constructor.name?e.constructor.name:l}(t[n])+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}return null}))},node:y((function(e,t,n,r,o){return h(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,n,r,o,a){if("function"!=typeof e)return new d("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var s=t[n],c=g(s);if("object"!==c)return new d("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var l in s)if(u(s,l)){var p=e(s,l,r,o,a+"."+l,i);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?y((function(t,n,r,o,a){for(var i=t[n],s=0;s<e.length;s++)if(f(i,e[s]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===b(t)?String(t):t}));return new d("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+r+"`, expected one of "+u+".")})):(arguments.length>1?r("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):r("Invalid argument supplied to oneOf, expected an array."),c)},oneOfType:function(e){if(!Array.isArray(e))return r("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var n=e[t];if("function"!=typeof n)return r("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(n)+" at index "+t+"."),c}return y((function(t,n,r,o,a){for(var s=0;s<e.length;s++)if(null==(0,e[s])(t,n,r,o,a,i))return null;return new d("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")}))},shape:function(e){return y((function(t,n,r,o,a){var s=t[n],u=g(s);if("object"!==u)return new d("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");for(var c in e){var l=e[c];if(l){var p=l(s,c,r,o,a+"."+c,i);if(p)return p}}return null}))},exact:function(e){return y((function(t,n,r,o,s){var u=t[n],c=g(u);if("object"!==c)return new d("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");var l=a({},t[n],e);for(var p in l){var f=e[p];if(!f)return new d("Invalid "+o+" `"+s+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=f(u,p,r,o,s+"."+p,i);if(y)return y}return null}))}};function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){this.message=e,this.stack=""}function y(e){var n={},o=0;function a(a,s,u,c,p,f,y){if(c=c||l,f=f||u,y!==i){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!=typeof console){var h=c+":"+u;!n[h]&&o<3&&(r("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[h]=!0,o++)}}return null==s[u]?a?null===s[u]?new d("The "+p+" `"+f+"` is marked as required in `"+c+"`, but its value is `null`."):new d("The "+p+" `"+f+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(s,u,c,p,f)}var s=a.bind(null,!1);return s.isRequired=a.bind(null,!0),s}function m(e){return y((function(t,n,r,o,a,i){var s=t[n];return g(s)!==e?new d("Invalid "+o+" `"+a+"` of type `"+b(s)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!h(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function g(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function b(e){if(null==e)return""+e;var t=g(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=b(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,p.checkPropTypes=s,p.resetWarningCache=s.resetWarningCache,p.PropTypes=p,p}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,s,u=i(e),c=1;c<arguments.length;c++){for(var l in n=Object(arguments[c]))o.call(n,l)&&(u[l]=n[l]);if(r){s=r(n);for(var p=0;p<s.length;p++)a.call(n,s[p])&&(u[s[p]]=n[s[p]])}}return u}},function(e,t,n){"use strict";var r=function(){},o=n(2),a={},i=Function.call.bind(Object.prototype.hasOwnProperty);function s(e,t,n,s,u){for(var c in e)if(i(e,c)){var l;try{if("function"!=typeof e[c]){var p=Error((s||"React class")+": "+n+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.");throw p.name="Invariant Violation",p}l=e[c](t,c,s,n,null,o)}catch(e){l=e}if(!l||l instanceof Error||r((s||"React class")+": type specification of "+n+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var f=u?u():"";r("Failed "+n+" type: "+l.message+(null!=f?f:""))}}}r=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(e){}},s.resetWarningCache=function(){a={}},e.exports=s},function(e,t,n){"use strict";var r=n(2);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}}]))},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("7vrA"),s=n("3Z9Z"),u=n("JI6e"),c=n("vOnD"),l=n("ehup"),p=(n("q4sD"),n("aT6C"),n("yMkV"),n("2uqB")),f=n("6ctO"),d=n("+YzT"),y=n("ELEi"),m=n.n(y);n("putZ");var h=c.a.button.withConfig({displayName:"Banner__MenuButton",componentId:"wj2a71-0"})(["font-weight:bold;font-size:18px;color:#ffffff;border-radius:5px;border:none;background-color:#3040c4;padding:15px 30px 15px 30px;transition:1s cubic-bezier(0.2,0.8,0.2,1);margin-right:60px;&:hover{background-color:white;color:#3040c4;box-shadow:0 10px 20px rgba(0,0,0,0.25);transform:translateY(-3px);}@media (max-width:575px){margin-right:0;margin-bottom:10px;}@media (min-width:576px) and (max-width:767px){margin-right:20px;padding:10px 15px 10px 15px;font-size:10px;}@media (min-width:768px) and (max-width:991px){font-size:14px;margin-right:30px;padding:10px 25px 10px 25px;}"]),g=function(e){var t,r;function c(t){var n;return(n=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?n.setState({hasScrolled:!0}):n.setState({hasScrolled:!1})},n.state={hasScrolled:!1},n}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l=c.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},l.render=function(){return o.a.createElement("div",{className:"BannerGroup"},o.a.createElement("div",null,o.a.createElement(f.a,{collapseOnSelect:!0,expand:"sm",fixed:this.state.hasScrolled?"top":""},o.a.createElement(f.a.Brand,{href:"/"},"LessonUp"),o.a.createElement(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(f.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(d.a,{className:"mr-auto"},o.a.createElement(d.a.Link,{href:"../study-support"},"Study Support"),o.a.createElement(d.a.Link,{href:"../tutoring"},"Tutoring"),o.a.createElement(d.a.Link,{href:"../online-courses"},"Online Courses"),o.a.createElement(d.a.Link,{href:"../about-us",className:"small-hidden"},"About Us")),o.a.createElement(d.a,{href:"contact-us",className:"call-to-action"},o.a.createElement(a.Link,{to:"contact-us"},o.a.createElement(h,{className:"calltobutton"},"Enquire Today!")))))),o.a.createElement(i.a,null,o.a.createElement(s.a,null,o.a.createElement(u.a,{sm:7,md:5,style:{margin:"auto 0"}},o.a.createElement("div",{className:"BannerHeader"},"Learn to... ",o.a.createElement("br",null),o.a.createElement("span",null,o.a.createElement(m.a,{strings:["Take notes correctly.","Solve equations efficiently.","Be ready for the exam.","Be top of your class.","Get a 99.95 ATAR.","Be your best student.","Tackle any problem."],typeSpeed:100,backSpeed:80,loop:!0}))),o.a.createElement("div",{className:"BannerSubtitle"},"Supercharge your study experience with some of Victoria's most trusted resources and tutors.")),o.a.createElement(u.a,{sm:5,md:7},o.a.createElement("img",{src:n("BtY0")})))))},c}(o.a.Component),b=n("JwsL"),v=function(e){var t=e.children;l.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null),o.a.createElement(g,null),o.a.createElement("main",null,t),o.a.createElement(b.a,null))},x=n("EYWl"),w=(n("tUrg"),n("U7J8")),E=(n("WBmp"),function(e){return o.a.createElement("div",{className:"Card"},o.a.createElement("img",{src:e.image,alt:e.title}),o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.text),o.a.createElement(a.Link,{to:e.link},o.a.createElement(w.a,{className:"CardButton",buttonText:e.buttonText})))}),S=n("VVdk"),k=c.a.p.withConfig({displayName:"pages__MissionText",componentId:"sc-6kvjaa-0"})(["line-height:38px;margin-left:60px;font-size:30px;@media (max-width:1086px){font-size:24px;}@media (max-width:991px){font-size:22px;}@media (max-width:767px){font-size:16px;line-height:32px;}@media (max-width:575px){text-align:center;margin:0rem 2rem 0 2rem;}"]),O=c.a.div.withConfig({displayName:"pages__MissionDiv",componentId:"sc-6kvjaa-1"})(["@media (max-width:575px){text-align:center;}"]),C=c.a.p.withConfig({displayName:"pages__SectionTitle",componentId:"sc-6kvjaa-2"})(["font-weight:bold;font-size:30px;margin-top:98px;text-align:center;margin-top:2rem;"]),T=c.a.p.withConfig({displayName:"pages__Quote",componentId:"sc-6kvjaa-3"})(["font-weight:bold;font-style:italic;font-size:30px;text-align:center;margin-top:-10px;margin-bottom:-20px;@media (max-width:1200px){margin-bottom:-5px;}@media (max-width:430px){background:#3040c4;color:#ffffff;padding:10px;margin-bottom:0;}@media (max-width:991px){margin-bottom:4rem;}@media (max-width:575px){margin-bottom:2rem;}"]),P=c.a.p.withConfig({displayName:"pages__Highlight",componentId:"sc-6kvjaa-4"})(["display:inline;background:#3040c4;padding:10px;color:#ffffff;@media (max-width:430px){padding-left:0;}"]),j=c.a.img.withConfig({displayName:"pages__Circle",componentId:"sc-6kvjaa-5"})(["position:relative;left:15%;width:85%;margin-top:-30px;@media (max-width:991px){width:95%;left:5%;}@media (max-width:767px){width:100%;left:0;}@media (min-width:575px) and (max-width:610px){width:120%;left:0;}@media (max-width:575px){display:none;}"]);t.default=function(){return o.a.createElement(v,null,o.a.createElement(x.a,{title:"Home"}),o.a.createElement("div",{className:"SectionTitle"},"Academic Services"),o.a.createElement(i.a,null,o.a.createElement(s.a,{style:{marginTop:"3rem"}},o.a.createElement(u.a,{sm:12,md:6},o.a.createElement(E,{image:n("dK/e"),title:"Study Support",text:"A tailor-made study program that yields academic excellence through measurable daily improvements.",link:"study-support",buttonText:"Learn More"})),o.a.createElement(u.a,{sm:12,md:6},o.a.createElement(E,{className:"cardSpacing",image:n("ouvs"),title:"Tutoring",text:"Our carefully selected team of high achievers tutor over 200 students privately across Victoria.",link:"tutoring",buttonText:"Get Tutoring"})))),o.a.createElement(C,null,"Our Mission"),o.a.createElement(T,null,'"Give you control ',o.a.createElement(P,null,'your marks."')),o.a.createElement("div",{style:{overflow:"hidden"}},o.a.createElement(s.a,null,o.a.createElement(u.a,{xs:12,sm:7,style:{margin:"auto 0"}},o.a.createElement(O,null,o.a.createElement(k,null,"The team at LessonUp treats every student uniquely. We"," ",o.a.createElement("b",null,o.a.createElement("i",null,"strongly ")),"disagree with a one size fits all approach when it comes to education. The first session will be an assessment so we understand your strengths and weakness. Using the results from our assessment we tailor a specific plan for you."),o.a.createElement(a.Link,{to:"./about-us"},o.a.createElement(S.a,{className:"IndexMission",buttonText:"Learn More",style:{marginLeft:"60px",padding:"1rem"}})))),o.a.createElement(u.a,{sm:5,style:{paddingRight:0}},o.a.createElement(j,{src:n("egNA")})))),o.a.createElement("div",{className:"SectionTitle"},"Online Courses"),o.a.createElement(i.a,null,o.a.createElement(i.a,null,o.a.createElement(s.a,{className:"CourseActionGroup"},o.a.createElement(u.a,{md:6,style:{margin:"auto 0"}},o.a.createElement("img",{src:n("lwat"),style:{width:"100%"},alt:"Master CAS Online Course"})),o.a.createElement(u.a,{md:6,style:{margin:"auto 0"},className:"CourseActionInfo"},o.a.createElement("h3",null,"Master the CAS"),o.a.createElement("p",null,"Save time, become a CAS expert. Learn how to efficiently & effectively use your graphing calculator."),o.a.createElement(a.Link,{to:"./online-courses"},o.a.createElement(S.a,{className:"CourseActionButton",buttonText:"Learn More",style:{width:"100%",margin:0}})))))))}},U7J8:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("vOnD").a.button.withConfig({displayName:"WhiteButton__Button",componentId:"sc-1b69okb-0"})(["background:#ffffff;border:3px solid #3040c4;box-sizing:border-box;border-radius:5px;font-weight:bold;color:#3040c4;transition:1s cubic-bezier(0.2,0.8,0.2,1);&:hover{background:#3040c4;border:3px solid #3040c4;color:#ffffff;}"]);t.a=function(e){return o.a.createElement(a,{className:e.className,style:e.style},e.buttonText)}},"dK/e":function(e,t,n){e.exports=n.p+"static/lessonup-stairs-5a25435f5769d0ad59a5cdf9db928eaf.png"},egNA:function(e,t,n){e.exports=n.p+"static/lessonup-reading-v2-adf63aa55e908dbabd529a617e2041d3.png"},ehup:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"LessonUp"}}}}')},lwat:function(e,t,n){e.exports=n.p+"static/lessonup-error-2c9c70d4ab643cae67e975336636e491.png"},ouvs:function(e,t,n){e.exports=n.p+"static/lessonup-reading-d8c08853c1b93d525e14d17bddacaff3.png"},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-index-js-2a9d7dbff1798bb8ca6e.js.map