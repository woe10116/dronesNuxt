(window.webpackJsonp=window.webpackJsonp||[]).push([[38,7,14,18,24],{372:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjExLjk5ODgiIGhlaWdodD0iMS4yOTk4NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDk4OTYgLTAuNzA0MzA2IDAuNzA5ODk2IDAuNzA0MzA2IDAgOC42Njg5NSkiIGZpbGw9IiM2RDZBN0EiLz4KPHJlY3Qgd2lkdGg9IjExLjk5ODgiIGhlaWdodD0iMS4yOTk4NyIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDk4OTYgMC43MDQzMDYgLTAuNzA5ODk2IDAuNzA0MzA2IDAuOTIxODc1IDAuMjE3NzczKSIgZmlsbD0iIzc3Nzc3NyIvPgo8L3N2Zz4K"},373:function(t,e,n){"use strict";n.r(e);n(14),n(33),n(34),n(397),n(163);var r={data:function(){return{img:n(378),example:null}},components:{IconBase:n(162).default},props:{image:{type:Object,required:!0,default:"../assets/img/platform1.jpg"},titleImage:{type:String,required:!0,default:"Добавьте фото"}},methods:{addImage:function(){this.example=this.$refs.file.files[0],1==confirm("Добавить фото?")&&(this.$emit("addPhoto",URL.createObjectURL(this.example)),this.$emit("close-modal"))}}},o=(n(379),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ModalWindow"},[n("div",{staticClass:"ModalWindow__container"},[n("div",{staticClass:"Close",on:{click:function(e){return t.$emit("close-modal")}}},[n("iconBase",{attrs:{iconType:"close",width:"32px",height:"32px"}})],1),t._v(" "),n("div",{staticClass:"ModalWindow__container-description"},[0==t.$store.getters.GetChangestatus?n("h6",[t._v("\n        "+t._s(t.$t(t.titleImage))+"\n      ")]):n("h6",[t._v("Добавьте фото")])]),t._v(" "),n("div",{staticClass:"ModalWindow__container-image"},[0==t.$store.getters.GetChangestatus?n("img",{attrs:{src:t.image,alt:"Error"}}):n("div",{staticClass:"rz-picter"},[n("img",{staticClass:"img-avatar",attrs:{src:t.img}}),t._v(" "),n("input",{ref:"file",staticClass:"uppic",attrs:{type:"file",name:"avatar",id:"uppic",accept:"image/gif,image/jpeg,image/jpg,image/png"},on:{change:function(e){return t.addImage()}}})])])])])}),[],!1,null,"817b9380",null);e.default=component.exports},374:function(t,e,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0b89e778",content,!0,{sourceMap:!1})},376:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("19243309",content,!0,{sourceMap:!1})},377:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("bae778ea",content,!0,{sourceMap:!1})},378:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMyIiBoZWlnaHQ9IjM5NSIgdmlld0JveD0iMCAwIDQzMiAzOTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zOTMuNzUgOTQuNUgzMzQuMzEyTDMwMCA1N0gxODcuNVY5NC41SDI4My41TDMxNy44MTMgMTMySDM5My43NVYzNTdIOTMuNzVWMTg4LjI1SDU2LjI1VjM1N0M1Ni4yNSAzNzcuNjI1IDczLjEyNSAzOTQuNSA5My43NSAzOTQuNUgzOTMuNzVDNDE0LjM3NSAzOTQuNSA0MzEuMjUgMzc3LjYyNSA0MzEuMjUgMzU3VjEzMkM0MzEuMjUgMTExLjM3NSA0MTQuMzc1IDk0LjUgMzkzLjc1IDk0LjVaTTE1MCAyNDQuNUMxNTAgMjk2LjI1IDE5MiAzMzguMjUgMjQzLjc1IDMzOC4yNUMyOTUuNSAzMzguMjUgMzM3LjUgMjk2LjI1IDMzNy41IDI0NC41QzMzNy41IDE5Mi43NSAyOTUuNSAxNTAuNzUgMjQzLjc1IDE1MC43NUMxOTIgMTUwLjc1IDE1MCAxOTIuNzUgMTUwIDI0NC41Wk0yNDMuNzUgMTg4LjI1QzI3NC42ODcgMTg4LjI1IDMwMCAyMTMuNTYzIDMwMCAyNDQuNUMzMDAgMjc1LjQzNyAyNzQuNjg3IDMwMC43NSAyNDMuNzUgMzAwLjc1QzIxMi44MTMgMzAwLjc1IDE4Ny41IDI3NS40MzcgMTg3LjUgMjQ0LjVDMTg3LjUgMjEzLjU2MyAyMTIuODEzIDE4OC4yNSAyNDMuNzUgMTg4LjI1Wk05My43NSA5NC41SDE1MFY1N0g5My43NVYwLjc1SDU2LjI1VjU3SDBWOTQuNUg1Ni4yNVYxNTAuNzVIOTMuNzVWOTQuNVoiIGZpbGw9IiNCQUJBQkEiLz4KPC9zdmc+Cg=="},379:function(t,e,n){"use strict";n(374)},380:function(t,e,n){var r=n(30)(!1);r.push([t.i,".rz-picter[data-v-817b9380]{height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;transition:all .5s ease}.rz-picter[data-v-817b9380]:hover{-webkit-animation:addphoto-data-v-817b9380 3s ease 0s alternate-reverse,move 5s linear 2s;animation:addphoto-data-v-817b9380 3s ease 0s alternate-reverse,move 5s linear 2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.uppic[data-v-817b9380]{width:450px;height:450px;margin:0 auto;opacity:0;z-index:99999;top:10px;position:absolute;cursor:pointer}@-webkit-keyframes addphoto-data-v-817b9380{0%{transform:scale(90%)}to{transform:scale(100%)}}@keyframes addphoto-data-v-817b9380{0%{transform:scale(90%)}to{transform:scale(100%)}}.img-avatar[data-v-817b9380]{top:10px;position:absolute}.ModalWindow[data-v-817b9380]{position:fixed;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;background-color:rgba(0,0,0,.8549019608);z-index:9999}.ModalWindow__container[data-v-817b9380]{position:relative;text-align:center;background-color:#fff;height:600px;width:570px;margin-top:5%;padding:30px;border-radius:20px}.ModalWindow__container-description[data-v-817b9380]{display:flex;align-items:flex-start}.ModalWindow__container-image[data-v-817b9380]{margin-top:30px}.ModalWindow__container-image img[data-v-817b9380]{border-radius:3rem;border:1px solid rgba(0,0,0,.05);box-shadow:0 4px 4px rgba(0,0,0,.25);width:450px;height:450px}.Close[data-v-817b9380]{position:absolute;cursor:pointer;right:15px;top:30px}[dir=ltr] h6[data-v-817b9380]{text-align:left}[dir=rtl] h6[data-v-817b9380]{text-align:right}h6[data-v-817b9380]{font-weight:500;font-size:28px}@media(max-width:800px){.ModalWindow__container[data-v-817b9380]{height:300px;width:270px;padding:10px}.ModalWindow__container-image[data-v-817b9380]{margin-top:20px}.ModalWindow__container-image img[data-v-817b9380]{width:100%;height:230px}.Close[data-v-817b9380]{position:absolute;cursor:pointer;right:7.5px;top:15px}[dir=ltr] h6[data-v-817b9380]{text-align:left}[dir=rtl] h6[data-v-817b9380]{text-align:right}h6[data-v-817b9380]{font-weight:400;font-size:22px}}",""]),t.exports=r},381:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("510ee0da",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(376)},386:function(t,e,n){var r=n(30)(!1);r.push([t.i,".ModalButton{position:relative}.ModalButton-Show-button{background-color:inherit}.ModalButton-button{height:48px;width:110px;background-color:#fff;box-shadow:2px 4px 20px rgba(0,0,0,.2);border-radius:10px;z-index:9999;position:absolute;right:-15px;top:-20px}.ModalButton-button:hover{color:#8a2be2;background-color:#f7f7f9}",""]),t.exports=r},387:function(t,e,n){t.exports=function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,n){"use strict";function r(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=n(2),o=n(0),i=n.n(o);e.a=function(t,e){var o=e.value;if((Array.isArray(o)||"string"==typeof o)&&(o={mask:o,tokens:i.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var u=t.getElementsByTagName("input");if(1!==u.length)throw new Error("v-mask directive requires 1 input, found "+u.length);t=u[0]}t.oninput=function(e){if(e.isTrusted){var i=t.selectionEnd,u=t.value[i-1];for(t.value=n.i(a.a)(t.value,o.mask,!0,o.tokens);i<t.value.length&&t.value.charAt(i-1)!==u;)i++;t===document.activeElement&&(t.setSelectionRange(i,i),setTimeout((function(){t.setSelectionRange(i,i)}),0)),t.dispatchEvent(r("input"))}};var s=n.i(a.a)(t.value,o.mask,!0,o.tokens);s!==t.value&&(t.value=s,t.dispatchEvent(r("input")))}},function(t,e,n){"use strict";var r=n(6),a=n(5);e.a=function(t,e){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments[3];return Array.isArray(e)?n.i(a.a)(r.a,e,i)(t,e,o,i):n.i(r.a)(t,e,o,i)}},function(t,e,n){"use strict";function r(t){t.component(s.a.name,s.a),t.directive("mask",i.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),o=n.n(a),i=n(1),u=n(7),s=n.n(u);n.d(e,"TheMask",(function(){return s.a})),n.d(e,"mask",(function(){return i.a})),n.d(e,"tokens",(function(){return o.a})),n.d(e,"version",(function(){return l}));var l="0.11.1";e.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),a=n(0),o=n.n(a),i=n(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return o.a}}},directives:{mask:r.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t,(t=n.i(i.a)(t,this.mask,this.masked,this.tokens))!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,n){"use strict";function r(t,e,n){return e=e.sort((function(t,e){return t.length-e.length})),function(r,a){for(var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=0;i<e.length;){var u=e[i];i++;var s=e[i];if(!(s&&t(r,s,!0,n).length>u.length))return t(r,u,o,n)}return""}}e.a=r},function(t,e,n){"use strict";function r(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];t=t||"",e=e||"";for(var a=0,o=0,i="";a<e.length&&o<t.length;){var s=r[u=e[a]],l=t[o];s&&!s.escape?(s.pattern.test(l)&&(i+=s.transform?s.transform(l):l,a++),o++):(s&&s.escape&&(u=e[++a]),n&&(i+=u),l===u&&o++,a++)}for(var c="";a<e.length&&n;){var u;if(r[u=e[a]]){c="";break}c+=u,a++}return i+c}e.a=r},function(t,e,n){var r=n(8)(n(4),n(9),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var a,o=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,o=t.default);var u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),r){var s=u.computed||(u.computed={});Object.keys(r).forEach((function(t){var e=r[t];s[t]=function(){return e}}))}return{esModule:a,exports:o,options:u}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,n){t.exports=n(3)}])},388:function(t,e,n){"use strict";n(377)},389:function(t,e,n){var r=n(30)(!1);r.push([t.i,".divThreeQuantity[data-v-7481d398]{display:flex;grid-gap:10px;gap:10px}",""]),t.exports=r},390:function(t,e,n){"use strict";n.r(e);var r=n(373),o={props:{link:{type:String,required:!0,default:"/Platform"}},layout:"map",components:{ModalWindow:r.default},data:function(){return{showModal:"false",showButton:!1}},methods:{statusOfSessionButtton:function(){var t=this;sessionStorage.setItem("statusOfButton",this.showModal),window.addEventListener("click",(function(e){var n=e.target;n.closest(".ModalButton-Show-button")||n.closest(".ModalButton-button")||(t.showButton=!1,t.showModal="false",sessionStorage.setItem("statusOfButton",t.showModal))}))},hideButton:function(){var t=this;"true"==sessionStorage.getItem("statusOfButton")?window.addEventListener("click",(function(e){var n=e.target;n.closest(".ModalButton-Show-button")||n.closest(".ModalButton-button")||(t.showButton=!1,t.showModal="false",sessionStorage.setItem("statusOfButton",t.showModal))})):"true"!=sessionStorage.getItem("statusOfButton")&&(this.showModal="true",sessionStorage.setItem("statusOfButton",this.showModal),this.showButton=!0)}},beforeMount:function(){this.statusOfSessionButtton()}},l=(n(385),n(13)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Test"},[n("div",{staticClass:"save-btn"},[n("div",{staticClass:"ModalButton"},[n("div",{staticClass:"ModalButton-Show"},[n("button",{staticClass:"ModalButton-Show-button",on:{click:function(e){return t.hideButton()}}},[n("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M2.94435 9.5C2.55404 9.5 2.1797 9.34196 1.90371 9.06066C1.62771 8.77936 1.47266 8.39782 1.47266 8C1.47266 7.60218 1.62771 7.22064 1.90371 6.93934C2.1797 6.65804 2.55404 6.5 2.94435 6.5C3.33467 6.5 3.70901 6.65804 3.985 6.93934C4.261 7.22064 4.41605 7.60218 4.41605 8C4.41605 8.39782 4.261 8.77936 3.985 9.06066C3.70901 9.34196 3.33467 9.5 2.94435 9.5ZM7.85001 9.5C7.4597 9.5 7.08536 9.34196 6.80937 9.06066C6.53337 8.77936 6.37832 8.39782 6.37832 8C6.37832 7.60218 6.53337 7.22064 6.80937 6.93934C7.08536 6.65804 7.4597 6.5 7.85001 6.5C8.24033 6.5 8.61467 6.65804 8.89066 6.93934C9.16666 7.22064 9.32171 7.60218 9.32171 8C9.32171 8.39782 9.16666 8.77936 8.89066 9.06066C8.61467 9.34196 8.24033 9.5 7.85001 9.5ZM12.7557 9.5C12.3654 9.5 11.991 9.34196 11.715 9.06066C11.439 8.77936 11.284 8.39782 11.284 8C11.284 7.60218 11.439 7.22064 11.715 6.93934C11.991 6.65804 12.3654 6.5 12.7557 6.5C13.146 6.5 13.5203 6.65804 13.7963 6.93934C14.0723 7.22064 14.2274 7.60218 14.2274 8C14.2274 8.39782 14.0723 8.77936 13.7963 9.06066C13.5203 9.34196 13.146 9.5 12.7557 9.5Z",fill:"#141029","fill-opacity":"0.8"}})])])]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath(t.link)}},[this.showButton?n("button",{staticClass:"ModalButton-button"},[t._v("\n          "+t._s(t.$t("open-btn"))+"\n        ")]):t._e()])],1)])])}),[],!1,null,null,null);e.default=component.exports},391:function(t,e,n){"use strict";n.r(e);n(23),n(44),n(19),n(67);var r={directives:{mask:n(387).mask},data:function(){return{splitStringThreePoint:{}}},props:{title:{type:Array,required:!0},description:{type:Array,required:!0},type:{type:Array,required:!0}},methods:{clearInput:function(t){document.getElementById(t).value=""},splitThreePoints:function(){if("three quantity"==this.type[1]){var t=this.description[1].split("x");this.splitStringThreePoint=t,console.log(this.splitStringThreePoint)}}},beforeMount:function(){this.splitThreePoints()}},o=(n(388),n(13)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return 0==t.$store.getters.GetChangestatus?r("div",{staticClass:"card-main__list card-main-list"},[r("ul",t._l(t.title,(function(e,n){return r("div",{key:e,staticClass:"card-main-list__el"},[r("hr"),t._v(" "),r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[n])))]),t._v(" "),""!=t.description[n]?r("span",[t._v(t._s(t.description[n]))]):r("span",[t._v(t._s(t.$t("no-info")))])])])])})),0)]):r("div",{staticClass:"card-main__list card-main-list"},[r("ul",[r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[0])))]),t._v(" "),"addres"==t.type[0]?r("div",{staticClass:"card-main-list__addres"},[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[0],type:"text"},domProps:{value:t.description[0]},on:{input:function(e){return t.$emit("changeInfo",0,e.target.value)}}}),t._v(" "),r("button",{staticClass:"card-main-list-point__button",on:{click:function(e){t.clearInput(t.title[0]),t.$emit("clearInput",0)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):"text"==t.type[0]?r("div",[r("input",{directives:[{name:"mask",rawName:"v-mask",value:["XXXX-XXX-XXXX","XXXX-XXXX-XXXX"],expression:"['XXXX-XXX-XXXX', 'XXXX-XXXX-XXXX']"}],staticClass:"card-main-list__input",attrs:{id:t.title[0],type:"text"},domProps:{value:t.description[0]},on:{input:function(e){return t.$emit("changeInfo",0,e.target.value)}}}),t._v(" "),r("button",{staticClass:"card-main-list-point__button",on:{click:function(e){t.clearInput(t.title[0]),t.$emit("clearInput",0)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]),t._v(" "),r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[1])))]),t._v(" "),"text"==t.type[1]?r("div",[r("input",{directives:[{name:"mask",rawName:"v-mask",value:["XXXX-XXX-XXXX","XXXX-XXXX-XXXX"],expression:"['XXXX-XXX-XXXX', 'XXXX-XXXX-XXXX']"}],staticClass:"card-main-list__input",attrs:{id:t.title[1],type:"text"},domProps:{value:t.description[1]},on:{input:function(e){return t.$emit("changeInfo",1,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",on:{click:function(e){t.clearInput(t.title[1]),t.$emit("clearInput",1)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):"three quantity"==t.type[1]?r("div",{staticClass:"divThreeQuantity"},[this.splitStringThreePoint[0]?r("input",{staticClass:"card-main-list__input inputThreeQuantity",attrs:{id:"first"+t.title[1],type:"text"},domProps:{value:this.splitStringThreePoint[0]},on:{input:function(e){return t.$emit("changeInfo",1,e.target.value,0)}}}):t._e(),t._v(" "),this.splitStringThreePoint[0]?r("button",{staticClass:"card-main-list-point__1button",on:{click:function(e){t.clearInput("first"+t.title[1]),t.$emit("clearInput",1,0)}}},[r("img",{attrs:{src:n(372),alt:""}})]):t._e(),t._v(" "),this.splitStringThreePoint[1]?r("input",{staticClass:"card-main-list__input inputThreeQuantity",attrs:{id:"second"+t.title[1],type:"text"},domProps:{value:this.splitStringThreePoint[1]},on:{input:function(e){return t.$emit("changeInfo",1,e.target.value,1)}}}):t._e(),t._v(" "),this.splitStringThreePoint[1]?r("button",{staticClass:"card-main-list-point__2button",on:{click:function(e){t.clearInput("second"+t.title[1]),t.$emit("clearInput",1,1)}}},[r("img",{attrs:{src:n(372),alt:""}})]):t._e(),t._v(" "),this.splitStringThreePoint[2]?r("input",{staticClass:"card-main-list__input inputThreeQuantity",attrs:{id:"third"+t.title[1],type:"text"},domProps:{value:this.splitStringThreePoint[2]},on:{input:function(e){return t.$emit("changeInfo",1,e.target.value,2)}}}):t._e(),t._v(" "),this.splitStringThreePoint[2]?r("button",{staticClass:"card-main-list-point__3button",on:{click:function(e){t.clearInput("third"+t.title[1]),t.$emit("clearInput",1,2)}}},[r("img",{attrs:{src:n(372),alt:""}})]):t._e()]):t._e()])])]),t._v(" "),r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[2])))]),t._v(" "),"number"==t.type[2]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[2],type:"number"},domProps:{value:t.description[2]},on:{input:function(e){return t.$emit("changeInfo",2,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[2]),t.$emit("clearInput",2)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):"date"==t.type[2]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[2],type:"date"},domProps:{value:t.description[2]},on:{input:function(e){return t.$emit("changeInfo",2,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[2]),t.$emit("clearInput",2)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]),t._v(" "),t.description[3]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[3])))]),t._v(" "),"text"==t.type[3]?r("div",[r("input",{directives:[{name:"mask",rawName:"v-mask",value:["XXXX-XXX-XXXX","XXXX-XXXX-XXXX"],expression:"['XXXX-XXX-XXXX', 'XXXX-XXXX-XXXX']"}],staticClass:"card-main-list__input",attrs:{id:t.title[3],type:"text"},domProps:{value:t.description[3]},on:{input:function(e){return t.$emit("changeInfo",3,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",on:{click:function(e){t.clearInput(t.title[3]),t.$emit("clearInput",3)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):"number"==t.type[3]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[3],type:"number"},domProps:{value:t.description[3]},on:{input:function(e){return t.$emit("changeInfo",3,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[3]),t.$emit("clearInput",3)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]):t._e(),t._v(" "),t.description[4]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[4])))]),t._v(" "),"number"==t.type[4]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[4],type:"number"},domProps:{value:t.description[4]},on:{input:function(e){return t.$emit("changeInfo",4,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[4]),t.$emit("clearInput",4)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):"two quantity"==t.type[4]?r("div",[r("input",{directives:[{name:"mask",rawName:"v-mask",value:["от XXX до XXX","от XX до XX","от XXX до XX"],expression:"['от XXX до XXX', 'от XX до XX', 'от XXX до XX']"}],staticClass:"card-main-list__input",attrs:{id:t.title[4],type:"text"},domProps:{value:t.description[4]},on:{input:function(e){return t.$emit("changeInfo",4,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",on:{click:function(e){t.clearInput(t.title[4]),t.$emit("clearInput",4)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]):t._e(),t._v(" "),t.description[5]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[5])))]),t._v(" "),"number"==t.type[5]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[5],type:"number"},domProps:{value:t.description[5]},on:{input:function(e){return t.$emit("changeInfo",5,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[5]),t.$emit("clearInput",5)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e(),t._v(" "),"select"==t.type[5]?r("div",[r("select",{staticClass:"card-main-list__input",attrs:{id:t.title[5]},on:{change:function(e){return t.$emit("changeInfo",5,e.target.value)}}},[r("option",{domProps:{value:t.description[5]}},[t._v("\n                "+t._s(t.description[5])+"\n              ")]),t._v(" "),"24/7"!=t.description[5]?r("option",{attrs:{value:"24/7"}},[t._v("\n                24/7\n              ")]):t._e(),t._v(" "),"6/1"!=t.description[5]?r("option",{attrs:{value:"6/1"}},[t._v("6/1")]):t._e(),t._v(" "),"5/2"!=t.description[5]?r("option",{attrs:{value:"5/2"}},[t._v("5/2")]):t._e(),t._v(" "),"4/3"!=t.description[5]?r("option",{attrs:{value:"4/3"}},[t._v("4/3")]):t._e(),t._v(" "),"2/2"!=t.description[5]?r("option",{attrs:{value:"2/2"}},[t._v("2/2")]):t._e()])]):t._e()])])]):t._e(),t._v(" "),t.description[6]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[6])))]),t._v(" "),"number"==t.type[6]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[6],type:"number"},domProps:{value:t.description[6]},on:{input:function(e){return t.$emit("changeInfo",6,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[6]),t.$emit("clearInput",6)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]):t._e(),t._v(" "),t.description[7]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.$t(t.title[7])))]),t._v(" "),"number"==t.type[7]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[7],type:"number"},domProps:{value:t.description[7]},on:{input:function(e){return t.$emit("changeInfo",7,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[7]),t.$emit("clearInput",7)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]):t._e(),t._v(" "),t.description[8]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.title[8]))]),t._v(" "),"number"==t.type[8]?r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[8],type:"number"},domProps:{value:t.description[8]},on:{input:function(e){return t.$emit("changeInfo",8,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",staticStyle:{right:"-5px"},on:{click:function(e){t.clearInput(t.title[8]),t.$emit("clearInput",8)}}},[r("img",{attrs:{src:n(372),alt:""}})])]):t._e()])])]):t._e(),t._v(" "),t.description[9]?r("div",{staticClass:"card-main-list__el"},[r("li",[r("div",{staticClass:"card-main-list__point"},[r("h4",[t._v(t._s(t.title[9]))]),t._v(" "),r("div",[r("input",{staticClass:"card-main-list__input",attrs:{id:t.title[9],type:"text"},domProps:{value:t.description[9]},on:{input:function(e){return t.$emit("changeInfo",9,e.target.value)}}}),r("button",{staticClass:"card-main-list-point__button",on:{click:function(e){t.clearInput(t.title[9]),t.$emit("clearInput",9)}}},[r("img",{attrs:{src:n(372),alt:""}})])])])])]):t._e()])])}),[],!1,null,"7481d398",null);e.default=component.exports},392:function(t,e,n){t.exports=n.p+"img/add-photo.0974a07.png"},393:function(t,e,n){"use strict";n(381)},394:function(t,e,n){var r=n(30)(!1);r.push([t.i,".sizePhoto[data-v-426ef2fe]{width:242px;height:242px}",""]),t.exports=r},396:function(t,e,n){"use strict";n.r(e);var r,o=n(18),l=n(162),c=(r={components:{ModalWindow:n(373).default},data:function(){return{showModal:!1,image:"",titleImage:"",status:this.$store.getters.GetChangestatus}}},Object(o.a)(r,"components",{IconBase:l.default}),Object(o.a)(r,"props",{img:{type:Array,required:!0},titleImg:{type:Array,required:!0}}),Object(o.a)(r,"methods",{showModal1:function(data,t){this.image=data,this.titleImage=t},addPhoto:function(t){this.$emit("addPhoto",t)}}),r),d=(n(393),n(13)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:1==t.$store.getters.GetChangestatus?"card-images-editing":"card__images card-images"},[t._l(t.img,(function(e,n){return r("div",{key:e,staticClass:"card-images__image"},[r("img",{staticClass:"sizePhoto",attrs:{src:t.img[n]}}),t._v(" "),0==t.$store.getters.GetChangestatus?r("iconBase",{staticClass:"card-images__loop",attrs:{iconType:"search",backgroundColor:"#ffffff"},on:{click:function(e){t.showModal=!0,t.showModal1(t.img[n],t.titleImg[n])}}}):r("icon-base",{staticClass:"card-images__loop",attrs:{iconType:"close",backgroundColor:"#ffffff"},on:{click:function(e){return t.$emit("DeleteImg",n)}}})],1)})),t._v(" "),0==t.img.length&&1==t.$store.getters.GetChangestatus?r("h1",{staticClass:"card-images__noPhoto"},[t._v("\n    "+t._s(t.$t("you-can-add-photo"))+"\n  ")]):t._e(),t._v(" "),0==t.img.length&&0==t.$store.getters.GetChangestatus?r("h1",{staticClass:"card-images__noPhoto"},[t._v("\n    "+t._s(t.$t("no-photo"))+"\n  ")]):t._e(),t._v(" "),1==t.$store.getters.GetChangestatus?r("button",{staticClass:"card-images-editing__button",on:{click:function(e){t.showModal=!0}}},[r("img",{attrs:{src:n(392),alt:""}})]):t._e(),t._v(" "),r("ModalWindow",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],attrs:{image:t.image,titleImage:t.titleImage},on:{"close-modal":function(e){t.showModal=!1},addPhoto:t.addPhoto}})],2)}),[],!1,null,"426ef2fe",null);e.default=component.exports;installComponents(component,{ModalWindow:n(373).default})},464:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0e481122",content,!0,{sourceMap:!1})},509:function(t,e,n){t.exports=n.p+"img/postamat1.12f21a2.jpg"},510:function(t,e,n){t.exports=n.p+"img/postamat2.2e29611.jpg"},511:function(t,e,n){t.exports=n.p+"img/postamat3.4bbabce.jpg"},512:function(t,e,n){"use strict";n(464)},513:function(t,e,n){var r=n(30)(!1);r.push([t.i,'.page{width:100%;height:100%}.page,.title-page{display:flex;flex-direction:column;grid-gap:30px;gap:30px}.title-page{padding:40px 0}.title-page__way span{font-family:"Montserrat";font-style:normal;font-weight:400;font-size:18px;line-height:22px;color:rgba(20,16,41,.8);cursor:pointer}.title-page-name{display:flex;flex-direction:row;justify-content:space-between;width:100%}.title-page-name__heading{font-family:"Montserrat";font-style:normal;font-weight:700;font-size:24px;line-height:29px;color:#141029}.title-page-name__button{background:linear-gradient(90deg,#0094ff 3.2%,#9b42f5 73.28%);border-radius:10px;padding:13px 24px;transition:all .2s;width:200px}.title-page-name__button span{font-family:"Montserrat";font-style:normal;font-weight:500;font-size:16px;line-height:20px;text-align:center;color:#fff;transition:all .2s}.title-page-name__button:hover{transform:translateY(-2px);box-shadow:2px 4px 20px rgba(0,0,0,.25)}.title-page-name__button:hover span{color:#c4bfbf}.card{display:flex;flex-direction:column;grid-gap:0;gap:0;width:100%;height:auto;min-height:100px;background:#fff}.card hr{border:1px solid #d3d3d3;width:100%}.card__infrastructure{display:flex;grid-gap:30px;gap:30px;padding:30px;flex-direction:column}.card__images{display:flex;flex-direction:row;grid-gap:90px;gap:90px;padding:30px 115px;flex-wrap:wrap;justify-content:center}.card__main{display:flex;flex-direction:column;grid-gap:30px;gap:30px;width:100%;padding:30px}.card-images-editing{display:flex;flex-direction:row;justify-content:center;align-items:center;grid-gap:60px;gap:60px;padding:30px 62px;flex-wrap:wrap}.card-images-editing__button{width:93px;height:82px;border-radius:20px;transition:all .3s ease 0s}.card-images-editing__button:hover{transform:scale(110%)}.card-images__noPhoto{font-family:"Montserrat";font-style:normal;font-weight:600;font-size:20px;line-height:25px;color:#141029}.card-images__image{position:relative;transition:all .2s;box-shadow:2px 4px 20px rgba(0,0,0,.25)}.card-images__image,.card-images__image img{border-radius:1.5rem}.card-images__image:hover{transform:translateY(-3px)}.card-images__loop{position:absolute;top:15px;right:15px;background:#fff;box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:10px;min-width:46px;min-height:46px}.card-images__loop img{margin:0 auto}.card-main__title h2{font-family:"Montserrat";font-style:normal;font-weight:600;font-size:18px;line-height:22px;color:#141029}.card-main-list{display:flex;flex-direction:column}.card-main-list ul hr{border:1px solid #e5e5e5;transform:matrix(1,0,.01,-1,0,0)}.card-main-list ul li{padding:15px 0;transition:all .2s}.card-main-list__input{min-width:66px;padding:19px 20px 19px 8px;background:#f7f7f9;font-family:"Montserrat";font-style:normal;font-weight:500;font-size:16px;line-height:100%;display:flex;align-items:center;color:#141029;width:100%}.card-main-list__addres{width:77%}.card-main-list__point{display:flex;grid-gap:30px;gap:30px;align-items:center}.card-main-list__point div{position:relative}.card-main-list__point h4{line-height:20px;color:#7d7b84;width:230px}.card-main-list__point h4,.card-main-list__point span{font-family:"Montserrat";font-style:normal;font-weight:500;font-size:16px}.card-main-list__point span{line-height:100%;display:flex;align-items:center;color:#141029}.card-infrastructure__title h2{font-family:"Montserrat";font-style:normal;font-weight:600;font-size:18px;line-height:22px;color:#141029}.card-infrastructure__table{max-height:300px;overflow-y:auto;min-width:900px}.card-infrastructure__table table{width:100%}.card-infrastructure__table table th{font-weight:600;line-height:100%;padding:0 15px 15px}.card-infrastructure__table table td,.card-infrastructure__table table th{font-family:"Montserrat";font-style:normal;font-size:16px;color:rgba(20,16,41,.8)}.card-infrastructure__table table td{font-weight:500;line-height:20px;padding:15px}.card-infrastructure__table table td svg{cursor:pointer}@media(max-width:1000px){.card-main-list__point{display:flex;flex-direction:column;grid-gap:30px;gap:30px;align-items:center}.card-main-list__point h4{text-align:center}.card-infrastructure__table{min-width:100px}.card__images{padding:30px 80px}.card__infrastructure{padding:10px}}.card-main{display:flex;flex-direction:column;grid-gap:30px;gap:30px}.card-main__table table tr th{padding:0 22.5px 45px;font-weight:600}.card-main__table table tr td,.card-main__table table tr th{font-family:"Montserrat";font-style:normal;font-size:16px;line-height:20px;color:#141029}.card-main__table table tr td{font-weight:500;padding:22.5px}.inputThreeQuantity{min-width:100px;width:15%}.card-main-list-point__1button{left:80px}.card-main-list-point__1button,.card-main-list-point__2button{position:absolute;top:1.6rem;padding-right:15px;background-color:transparent;cursor:pointer;align-items:center}.card-main-list-point__2button{left:190px}.card-main-list-point__3button{left:305px}.card-main-list-point__3button,.card-main-list-point__button{position:absolute;top:1.6rem;padding-right:15px;background-color:transparent;cursor:pointer;align-items:center}.card-main-list-point__button{right:0}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#fff;border-radius:6px}::-webkit-scrollbar-thumb{background:#9b42f5;border-radius:6px}progress::-webkit-progress-bar,progress::-webkit-progress-value{color:#9b42f5}progress{color:#9b42f5}',""]),t.exports=r},541:function(t,e,n){"use strict";n.r(e);n(19),n(67),n(23),n(44),n(131),n(132);var r=n(396),o=n(391),l=n(373),c=n(390),d={layout:"card",components:{Imagecard:r.default,Tablecard:o.default,ModalWindow:l.default,OpenCard:c.default},data:function(){return{img:[n(509),n(510),n(511)],titleImg:["left-view-table-card","top-view-table-card","right-view-table-card"],title:["registration-num-table-card","dimensions-table-card-mm","voltage-table-card","weight-table-card","alowable-temp-table-card","time-order-table-card","wind-speed-table-card","maintence-time-table-card"],description:["450n-144-vc67PST","2045 x 1145 x 565","220","1600","от 0 до 40","1","15","5"],type:["text","three quantity","number","number","two quantity","number","number","number"]}},headerData:{title:"postamat-title"},methods:{changeData:function(t,e,n){if(null!=n){var r=this.description[t].split("x");r[n]=String(e);var o=r.join("x");this.description[t]=o,localStorage.setItem("DataDroneportLocal",JSON.stringify(this.description))}else this.description[t]=e,localStorage.setItem("DataDroneportLocal",JSON.stringify(this.description))},DeleteImg:function(t){this.img.splice(t,1)},clearInput:function(t,e){if(null!=e){var n=this.description[t].split("x");n[e]=" ";var r=n.join("x");this.description[t]=r,localStorage.setItem("DataDroneportLocal",JSON.stringify(this.description))}else this.description[t]="",localStorage.setItem("DataDroneportLocal",JSON.stringify(this.description))},addPhoto:function(t){this.img.push(t)},TakeDataFromLocalPostamat:function(){var t=localStorage.getItem("DataPostamatLocal");null!=t&&(this.description=JSON.parse(t))}},beforeMount:function(){this.TakeDataFromLocalPostamat()}},m=(n(512),n(13)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("div",{staticClass:"card"},[n("Imagecard",{attrs:{img:t.img,titleImg:t.titleImg},on:{addPhoto:t.addPhoto,DeleteImg:t.DeleteImg}}),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"card__main card-main"},[n("div",{staticClass:"card-main__title"},[n("h2",[t._v(t._s(t.$t("postamat-title-page")))])]),t._v(" "),n("Tablecard",{attrs:{title:t.title,description:t.description,type:t.type},on:{changeInfo:t.changeData,clearInput:t.clearInput}})],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);