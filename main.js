(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,':root {\n    --bg-light: #F9EFDB;\n    --bg-dark: #EBD9B4;\n    --light-green: #9DBC98;\n    --dark-green: #3A4D39;\n    --dark-brown: #675D50;\n    --teal: #638889;\n    --pink: #D37676;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nhtml,\nbody {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nmain {\n    display: flex;\n    height: calc(100% - (134px + 64px));\n    align-items: stretch;\n    font-size: 20px;\n}\n\n.btn {\n    border: none;\n    padding: 4px 8px;\n    background-color: inherit;\n    border-radius: 4px;\n}\n\n.section-title {\n    padding: 12px 0;\n}\n\n/* HEADER */\n\nheader {\n    display: flex;\n    justify-content: center;\n    padding: 32px 0;\n    background-color: var(--light-green);\n    align-items: center;\n    gap: 8px;\n}\n\n.fa-list-check {\n    font-size: 50px;\n    color: var(--dark-green);\n}\n\n.page-title {\n    font-family: "Viga", sans-serif;\n    font-weight: 500;\n    font-style: normal;\n    font-size: 50px;\n}\n\n/* MENU */\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    width: 300px;\n    background-color: var(--bg-light);\n    padding: 20px;\n}\n\n.category-section,\n.project-section {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.project-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.project {\n    padding: 8px;\n    border-radius: 4px;\n}\n\n.project:hover,\n.btn:hover {\n    background-color: var(--bg-dark);\n    cursor: pointer;\n}\n\n/* TASK LIST */\n\n#task-list-title {\n    display: none;\n}\n\n.task-list-section {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    background-color: var(--bg-dark);\n    width: 100%;\n    height: 100%;\n    padding: 20px;\n}\n\n.task-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.task {\n    padding: 8px;\n    border-radius: 4px;\n}\n\n/* FORMS */\n\n.btn-form {\n    flex: 1;\n    height: 40px;\n    font-size: 20px;\n}\n\n#btn-submit-project,\n#btn-submit-task {\n    background-color: var(--light-green);\n}\n\n#btn-cancel-project,\n#btn-cancel-task {\n    background-color: var(--pink);\n}\n\ninput {\n    padding: 10px;\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n\n/* ADD PROJECT FORM */\n\n.add-project-form {\n    display: none;\n    padding: 10px 0;\n}\n\n.add-project-buttons {\n    display: flex;\n    width: 100%;\n    gap: 4px;\n}\n\n#btn-add-project {\n    display: flex;\n    align-items: center;\n    padding: 8px;\n    color: var(--dark-brown);\n}\n\n/* ADD TASK FORM */\n\n.add-task-form {\n    display: none;\n    padding: 20px;\n    width: 600px;\n    background-color: var(--bg-light);\n    border-radius: 4px;\n}\n\n.add-task-buttons {\n    display: flex;\n    width: 50%;\n    gap: 4px;\n}\n\n.fa-square-plus {\n    font-size: 24px;\n    margin-right: 6px;\n}\n\n#btn-add-task {\n    display: flex;\n    align-items: center;\n    max-width: 300px;\n    padding: 8px;\n    color: var(--dark-brown);\n}\n\n#btn-add-task:hover {\n    background-color: var(--bg-light);\n}\n\n/* SHOW FORMS */\n\n.show {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n/* FOOTER */\n\nfooter {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 64px;\n    background-color: var(--bg-light);\n}\n\n',""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),c=n.n(s),u=n(540),d=n.n(u),l=n(113),h=n.n(l),m=n(208),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;class g{static getProjectList(){let t=localStorage.getItem("projectList"),e=[];return e=t?JSON.parse(t):[],e}static getProject(t){const e=g.getProjectList();let n={};return e&&(n=e.find((({title:e})=>e===t))),void 0!==typeof n?n:null}static saveProject(t){let e=g.getProjectList();e.push(t),localStorage.setItem("projectList",JSON.stringify(e))}static updateProject(t){const e=g.deleteProject(t.title);if(e<0)return;const n=g.getProjectList();n.splice(e,0,t),localStorage.setItem("projectList",JSON.stringify(n))}static deleteProject(t){const e=g.getProjectList();let n={};if(!e)return-1;if(n=e.find((({title:e})=>e===t)),void 0===n)return-1;const r=e.indexOf(n);return r<0?-1:(e.splice(r,1),localStorage.setItem("projectList",JSON.stringify(e)),r)}static saveTask(t,e){const n=g.getProject(t);n?(n.taskList.push(e),this.updateProject(n)):alert("No project of this title")}static getTaskList(t){const e=g.getProject(t);return e?e.taskList:null}}class p{constructor(t){this.title=t,this.taskList=[]}setTaskList(t){this.taskList=t}addToTaskList(t){this.taskList.push(t)}}class b{constructor(t,e){this.title=t,this.dueDate=e}}const w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function y(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const v={date:y({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:y({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:y({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},k={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const S={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function M(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const P={ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(j.matchPattern);if(!n)return null;const r=n[0],a=t.match(j.parsePattern);if(!a)return null;let o=j.valueCallback?j.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:M({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:M({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:M({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:M({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var j;const T={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=w[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:v,formatRelative:(t,e,n,r)=>k[t],localize:S,match:P,options:{weekStartsOn:0,firstWeekContainsDate:1}};let L={};function C(){return L}Math.pow(10,8);const D=6048e5,q=864e5;function E(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function F(t){const e=E(t);return e.setHours(0,0,0,0),e}function O(t){const e=E(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function A(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function W(t){const e=E(t);return function(t,e){const n=F(t),r=F(e),a=+n-O(n),o=+r-O(r);return Math.round((a-o)/q)}(e,function(t){const e=E(t),n=A(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function N(t,e){const n=C(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=E(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function Y(t){return N(t,{weekStartsOn:1})}function H(t){const e=E(t),n=e.getFullYear(),r=A(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=Y(r),o=A(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=Y(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function B(t){const e=E(t),n=+Y(e)-+function(t){const e=H(t),n=A(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),Y(n)}(e);return Math.round(n/D)+1}function z(t,e){const n=E(t),r=n.getFullYear(),a=C(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=A(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=N(i,e),c=A(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=N(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function I(t,e){const n=E(t),r=+N(n,e)-+function(t,e){const n=C(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=z(t,e),o=A(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),N(o,e)}(n,e);return Math.round(r/D)+1}function Q(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const G={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return Q("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):Q(n+1,2)},d:(t,e)=>Q(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>Q(t.getHours()%12||12,e.length),H:(t,e)=>Q(t.getHours(),e.length),m:(t,e)=>Q(t.getMinutes(),e.length),s:(t,e)=>Q(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return Q(Math.trunc(r*Math.pow(10,n-3)),e.length)}},X={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return G.y(t,e)},Y:function(t,e,n,r){const a=z(t,r),o=a>0?a:1-a;return"YY"===e?Q(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):Q(o,e.length)},R:function(t,e){return Q(H(t),e.length)},u:function(t,e){return Q(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Q(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Q(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return G.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return Q(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=I(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):Q(a,e.length)},I:function(t,e,n){const r=B(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Q(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):G.d(t,e)},D:function(t,e,n){const r=W(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Q(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return Q(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return Q(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return Q(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return G.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):G.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Q(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):G.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):G.s(t,e)},S:function(t,e){return G.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return R(r);case"XXXX":case"XX":return $(r);default:return $(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return R(r);case"xxxx":case"xx":return $(r);default:return $(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+J(r,":");default:return"GMT"+$(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+J(r,":");default:return"GMT"+$(r,":")}},t:function(t,e,n){return Q(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return Q(t.getTime(),e.length)}};function J(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+Q(o,2)}function R(t,e){return t%60==0?(t>0?"-":"+")+Q(Math.abs(t)/60,2):$(t,e)}function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+Q(Math.trunc(r/60),2)+e+Q(r%60,2)}const U=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},K=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},V={p:K,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return U(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",U(r,e)).replace("{{time}}",K(a,e))}},Z=/^D+$/,_=/^Y+$/,tt=["D","DD","YY","YYYY"];function et(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=E(t);return!isNaN(Number(n))}const nt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,rt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,at=/^'([^]*?)'?$/,ot=/''/g,it=/[a-zA-Z]/;function st(t){const e=t.match(at);return e?e[1].replace(ot,"'"):t}class ct{constructor(){}static loadContent(){ct.loadProjects(),ct.loadTasks(),ct.initButtons()}static loadProjects(){const t=document.querySelector(".project-list");g.getProjectList().forEach((e=>{const n=document.createElement("div"),r=document.createElement("p");n.classList.add("project"),r.classList.add("project-title"),r.textContent=e.title,n.append(r),t.append(n)})),ct.initChooseProjectButtons()}static loadTasks(t){ct.hideTasks();const e=document.querySelector(".task-list"),n=g.getTaskList(t);n&&n.forEach((t=>{const n=document.createElement("div"),r=document.createElement("p");n.classList.add("task"),r.classList.add("task-title"),r.textContent=t.title,n.append(r),e.append(n)}))}static hideTasks(){document.querySelector(".task-list").innerHTML=""}static initButtons(){ct.initProjectButtons(),ct.initTaskButtons()}static initFilterButtons(){const t=document.querySelector("#btn-all-tasks"),e=document.querySelector("#btn-today-tasks");t.addEventListener("click",(()=>ct.filterTaskList("allTasks"))),e.addEventListener("click",(()=>ct.filterTaskList("todayTasks")))}static initProjectButtons(){const t=document.querySelector("#btn-add-project"),e=document.querySelector("#btn-submit-project"),n=document.querySelector("#btn-cancel-project");t.addEventListener("click",ct.showAddProjectForm),e.addEventListener("click",ct.submitProjectCreation),n.addEventListener("click",ct.cancelProjectCreation),ct.initChooseProjectButtons()}static initChooseProjectButtons(){document.querySelectorAll(".project").forEach((t=>{t.addEventListener("click",ct.chooseProject)}))}static initTaskButtons(){const t=document.querySelector("#btn-add-task"),e=document.querySelector("#btn-submit-task"),n=document.querySelector("#btn-cancel-task");t.addEventListener("click",ct.showAddTaskForm),e.addEventListener("click",ct.submitTaskCreation),n.addEventListener("click",ct.cancelTaskCreation)}static chooseProject(t){ct.showTaskListTitle();const e=document.querySelector("#task-list-title");e.textContent=t.target.textContent,ct.loadTasks(e.textContent)}static submitProjectCreation(){const t=document.querySelector("#input-project-title");if(!t.value)return void alert("You must enter project title");if(g.getProject(t.value))return void alert("Project of this title already exists");g.saveProject(new p(t.value));const e=document.querySelector(".project-list"),n=document.createElement("div"),r=document.createElement("p");n.classList.add("project"),r.classList.add("project-title"),r.textContent=t.value,n.append(r),e.append(n),n.addEventListener("click",ct.chooseProject),ct.hideAddProjectForm()}static cancelProjectCreation(){document.querySelector("#input-project-title").value="",ct.hideAddProjectForm()}static submitTaskCreation(){const t=document.querySelector("#input-task-title"),e=document.querySelector("#task-list-title").textContent;if(!e)return alert("You must choose project"),void ct.hideAddTaskForm();if(!t.value)return alert("You must enter task title"),void ct.hideAddTaskForm();const n=document.querySelector("#input-task-date"),r=function(t,e,n){const r=C(),a=n?.locale??r.locale??T,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=E(t);if(!et(s))throw new RangeError("Invalid time value");let c=e.match(rt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,V[e])(t,a.formatLong):t})).join("").match(nt).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:st(t)};if(X[e])return{isToken:!0,value:t};if(e.match(it))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return _.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return Z.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),tt.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,X[o[0]])(s,o,a.localize,u)})).join("")}(new Date(n.value),"dd/MM/yyyy");g.saveTask(e,new b(t.value,r)),ct.hideAddTaskForm(),ct.loadTasks(e)}static cancelTaskCreation(){document.querySelector("#input-task-title").textContent="",ct.hideAddTaskForm()}static filterTaskList(t){}static showAddProjectForm(){document.querySelector(".add-project-form").classList.add("show")}static hideAddProjectForm(){document.querySelector(".add-project-form").classList.remove("show"),ct.resetAddProjectForm()}static resetAddProjectForm(){document.querySelector("#input-project-title").value=""}static showAddTaskForm(){document.querySelector(".add-task-form").classList.add("show"),document.querySelector("#input-task-date").value=(new Date).toISOString().slice(0,10)}static hideAddTaskForm(){document.querySelector(".add-task-form").classList.remove("show"),ct.resetAddTaskForm()}static resetAddTaskForm(){const t=document.querySelector("#input-task-title"),e=document.querySelector("#input-task-date");t.value="",e.value=(new Date).toISOString().slice(0,10)}static showTaskListTitle(){document.querySelector("#task-list-title").style.display="block"}static hideTaskListTitle(){document.querySelector("#task-list-title").style.display="none"}}document.addEventListener("DOMContentLoaded",ct.loadContent)})()})();