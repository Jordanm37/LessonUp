(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,i,c=t.prefix||"__jp",l=t.name||c+a++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;m&&(i=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){s.parentNode&&s.parentNode.removeChild(s),window[l]=o,i&&clearTimeout(i)}return window[l]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+f(l)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,d.parentNode.insertBefore(s,d),function(){window[l]&&p()}};var a=0;function o(){}},G04T:function(e,t,n){"use strict";n("pIFo"),n("VRzm"),n("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("8ujH"),o=(r=a)&&r.__esModule?r:{default:r},s=n("H/qo");var i=function(e){return new Promise((function(t,n){return(0,o.default)(e,{param:"c",timeout:3500},(function(e,r){e&&n(e),r&&t(r)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+r+"="+e[n])}return t};t.default=function(e,t,n){var r=(0,s.validate)(e),a=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var o="https://lessonup.us4.list-manage.com/subscribe/post?u=7470e6c5b9ac4aae5c2049571&amp;id=a1639ddab4";arguments.length<3&&"string"==typeof t?o=t:"string"==typeof n&&(o=n),o=o.replace(/\/post/g,"/post-json");var l="&EMAIL="+a+c(t),u=""+o+l;return i(u)}},GTTd:function(e,t,n){(function(r){function a(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=a,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(a())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";n("dZ+Y"),n("KKXr");var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},QXP7:function(e,t){var n=1e3,r=6e4,a=36e5,o=24*a;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var i,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*a;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?s(i=e,o,"day")||s(i,a,"hour")||s(i,r,"minute")||s(i,n,"second")||i+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=a)return Math.round(e/a)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},U7J8:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("vOnD").a.button.withConfig({displayName:"WhiteButton__Button",componentId:"sc-1b69okb-0"})(["background:#ffffff;border:3px solid #3040c4;box-sizing:border-box;border-radius:5px;font-weight:bold;color:#3040c4;transition:1s cubic-bezier(0.2,0.8,0.2,1);&:hover{background:#3040c4;border:3px solid #3040c4;color:#ffffff;}"]);t.a=function(e){return a.a.createElement(o,{onClick:e.onClick,className:e.className,style:e.style},e.buttonText)}},bRoh:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var a=t.formatters[r];if("function"==typeof a){var o=s[c];n=a.call(e,o),s.splice(c,1),c--}return n})),t.formatArgs.call(e,s);var l=n.log||t.log||console.log.bind(console);l.apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},t4R7:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("vOnD"),s=n("7vrA"),i=n("fdBv"),c=n("EYWl"),l=n("3Z9Z"),u=n("JI6e"),m=n("U7J8"),f=n("YwZP"),d=(n("v63X"),function(e){return a.a.createElement(s.a,null,a.a.createElement(l.a,{className:"Course"},a.a.createElement(u.a,{className:"CourseTitle",sm:6},e.title),a.a.createElement(u.a,{sm:6},a.a.createElement(m.a,{onClick:function(){Object(f.navigate)("/online-courses#notify")},className:"CourseButton",buttonText:"Notify Me"}))))}),p=(n("f3/d"),n("G04T")),g=n.n(p),h=n("VVdk");n("YHrl");var v=o.a.div.withConfig({displayName:"EmailField__InputBorder",componentId:"sv5md-0"})(["border:4px solid #000000;box-sizing:border-box;border-radius:5px;padding-left:10px;padding-top:5px;height:100%;p{font-style:bold;font-size:14px;margin:0;}input{border:none;width:100%;}"]),b=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={name:null,email:null},t._handleChange=function(e){var n,r;console.log(((n={})[""+e.target.name]=e.target.value,n)),t.setState(((r={})[""+e.target.name]=e.target.value,r))},t._handleSubmit=function(e){e.preventDefault(),console.log("submit",t.state),g()(t.state.email,t.state).then((function(e){var t=e.msg,n=e.result;if(console.log("msg",n+": "+t),"success"!==n)throw t;alert(t)})).catch((function(e){console.log("err",e),alert(e)}))},t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(s.a,null,a.a.createElement("form",{onSubmit:this._handleSubmit},a.a.createElement(l.a,null,a.a.createElement(u.a,{sm:8},a.a.createElement(v,null,a.a.createElement("p",null,"EMAIL ADDRESS"),a.a.createElement("input",{type:"email",id:"email",onChange:this._handleChange,name:"email",placeholder:"john.smith@gmail.com"}))),a.a.createElement(u.a,{sm:4},a.a.createElement(h.a,{className:"EmailFieldButton",type:"Submit",buttonText:"Submit"})))))},r}(a.a.Component),y=o.a.p.withConfig({displayName:"online-courses__CallOut",componentId:"sc-1jskcnq-0"})(["padding-left:1rem;padding-right:1rem;font-size:17.5px;text-align:center;"]),w=o.a.p.withConfig({displayName:"online-courses__Subtitle",componentId:"sc-1jskcnq-1"})(["padding-left:1rem;padding-right:1rem;font-size:17.5px;text-align:center;"]);t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(c.a,{title:"Online Courses"}),a.a.createElement("div",{className:"SectionTitle First"},"Online Courses"),a.a.createElement(y,null,"Our"," ",a.a.createElement("b",null,a.a.createElement("i",null,"master"))," ","online courses are coming soon! ",a.a.createElement("br",null),"Click the “Notify Me” button to alerted when they’re avaiable as soon as it is released."),a.a.createElement(s.a,null,a.a.createElement(d,{title:"Master the CAS"}),a.a.createElement(d,{title:"Master Functions & Plotting"}),a.a.createElement(d,{title:"Master Calculus: Differentiation"}),a.a.createElement(d,{title:"Master Calculus: Integration"}),a.a.createElement(d,{title:"Master Proability: Discrete"})),a.a.createElement(w,{style:{marginTop:"3rem"}},"Add your email & we’ll notify you as soon as a course releases! (We don’t spam"," ",a.a.createElement("span",{role:"img","aria-label":"Heart emoji"},"❤️"),")"),a.a.createElement(s.a,null,a.a.createElement("div",{id:"#notify",href:"#notify"}),a.a.createElement(b,null)))}}}]);
//# sourceMappingURL=component---src-pages-online-courses-js-60060c6ccc330355420a.js.map