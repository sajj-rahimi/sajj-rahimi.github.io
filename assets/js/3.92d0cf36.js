(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{317:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},318:function(t,e,o){var n=o(25),s=o(20),i="["+o(317)+"]",r=RegExp("^"+i+i+"*"),a=RegExp(i+i+"*$"),c=function(t){return function(e){var o=s(n(e));return 1&t&&(o=o.replace(r,"")),2&t&&(o=o.replace(a,"")),o}};t.exports={start:c(1),end:c(2),trim:c(3)}},319:function(t,e,o){var n=o(4),s=o(73);t.exports=function(t,e,o){var i,r;return s&&"function"==typeof(i=e.constructor)&&i!==o&&n(r=i.prototype)&&r!==o.prototype&&s(t,r),t}},321:function(t,e,o){var n=o(0),s=o(1),i=o(48),r=[].slice,a=function(t){return function(e,o){var n=arguments.length>2,s=n?r.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,s)}:e,o)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:a(s.setTimeout),setInterval:a(s.setInterval)})},322:function(t,e,o){"use strict";var n=o(6),s=o(1),i=o(99),r=o(19),a=o(8),c=o(27),l=o(319),p=o(49),d=o(169),u=o(2),h=o(21),v=o(47).f,f=o(26).f,m=o(7).f,b=o(318).trim,g=s.Number,_=g.prototype,C="Number"==c(h(_)),w=function(t){if(p(t))throw TypeError("Cannot convert a Symbol value to a number");var e,o,n,s,i,r,a,c,l=d(t,"number");if("string"==typeof l&&l.length>2)if(43===(e=(l=b(l)).charCodeAt(0))||45===e){if(88===(o=l.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(r=(i=l.slice(2)).length,a=0;a<r;a++)if((c=i.charCodeAt(a))<48||c>s)return NaN;return parseInt(i,n)}return+l};if(i("Number",!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var y,N=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof N&&(C?u((function(){_.valueOf.call(o)})):"Number"!=c(o))?l(new g(w(e)),o,N):w(e)},T=n?v(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;T.length>x;x++)a(g,y=T[x])&&!a(N,y)&&m(N,y,f(g,y));N.prototype=_,_.constructor=N,r(s,"Number",N)}},345:function(t,e,o){"use strict";o.r(e);o(321),o(322),o(97),o(98);var n={name:"StepsProgressBar",props:{options:{type:Object,default:function(){return{maxWidth:"100%",nodeWidth:40,nodeHeight:40,barHeight:3,showTooltip:!0,showContent:!0,barType:"dashed",nodes:[{content:"step 1",tooltip:"sth about step 1"},{content:"step 2",tooltip:"sth about step 2"},{content:"step 3",tooltip:"sth about step 3"},{content:"step 4",tooltip:"sth about step 4"}]}}}},created:function(){setTimeout(this.handleHover,20)},methods:{next:function(){var t;null!==(t=this.options)&&void 0!==t&&t.beforeNext&&this.options.onNext();var e=document.querySelector(".node.active");if(e){var o,n=Number(e.getAttribute("id"));if(e.classList.remove("active"),e.classList.add("checked"),e.firstElementChild.innerHTML="",n!==this.options.nodes.length-1)document.querySelector(".node.node-".concat(n+1)).classList.add("active"),document.querySelector(".bar-".concat(n)).classList.add("checked");else null!==(o=this.options)&&void 0!==o&&o.onFinish&&this.options.onFinish()}},prev:function(){var t=document.querySelector(".node.active")?document.querySelector(".node.active"):document.querySelector(".last-node");if(t){var e=Number(t.getAttribute("id"));if(0!==e){t.classList.remove("active"),t.classList.remove("checked"),t.firstElementChild.innerHTML="",t.firstElementChild.innerHTML=e+1;var o=document.querySelector(".node.node-".concat(e-1));o.classList.remove("checked"),o.firstElementChild.innerHTML="",o.firstElementChild.innerHTML=e,o.classList.add("active"),document.querySelector(".bar-".concat(e-1)).classList.remove("checked")}}},restart:function(){document.querySelectorAll(".node").forEach((function(t,e){t.classList.remove("checked"),t.classList.remove("active"),t.firstElementChild.innerHTML=e,t.classList.contains("start-node")&&t.classList.add("active")})),document.querySelectorAll(".progress-bar").forEach((function(t){t.classList.remove("checked")}))},handleHover:function(){this.options.showTooltip&&document.querySelectorAll(".node-circle").forEach((function(t){var e=t.getAttribute("id");t.addEventListener("mouseover",(function(){document.querySelectorAll(".node-tooltip").forEach((function(t){t.classList.remove("remove-tooltip"),t.classList.remove("show-tooltip")})),document.querySelector(".node-tooltip.node-tooltip-".concat(e)).classList.add("show-tooltip")})),t.addEventListener("mouseleave",(function(){document.querySelectorAll(".node-tooltip").forEach((function(t){t.classList.remove("remove-tooltip"),t.classList.remove("show-tooltip")})),document.querySelector(".node-tooltip.node-tooltip-".concat(e)).classList.add("remove-tooltip")}))}))}}},s=o(45),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"progress-container",style:{maxWidth:t.options.maxWidth}},t._l(t.options.nodes,(function(e,n){return o("div",{key:n,staticClass:"progress",attrs:{id:n}},[o("div",{staticClass:"node",class:["node-"+n,{"start-node active":0===n},{"last-node":n+1===t.options.nodes.length}],style:{width:t.options.nodeWidth+"px",height:t.options.nodeHeight+"px"},attrs:{id:n}},[o("div",{staticClass:"node-circle",attrs:{id:n}},[t._v(t._s(n+1))]),t._v(" "),t.options.showContent?o("div",{staticClass:"node-content"},[o("p",[t._v(t._s(e.content))])]):t._e(),t._v(" "),t.options.showTooltip?o("div",{staticClass:"tooltip-container"},[o("div",{staticClass:"node-tooltip",class:["node-tooltip-"+n,n%2==0?"node-tooltip-top":"node-tooltip-down"]},[o("p",{staticClass:"tooltip-text",staticStyle:{position:"relative"}},[t._v(" "+t._s(e.tooltip))])])]):t._e()]),t._v(" "),n+1!==t.options.nodes.length?o("div",{staticClass:"progress-bar",class:["bar-"+n],attrs:{id:n}},[o("div",{staticClass:"progress-bar-active",style:{borderTop:t.options.barHeight+"px "+t.options.barType+" #bbbbbb"}}),t._v(" "),o("div",{staticClass:"progress-bar-checked",style:{borderTop:t.options.barHeight+"px solid #61B15A"}})]):t._e()])})),0)}),[],!1,null,null,null);e.default=i.exports},374:function(t,e,o){"use strict";o.r(e);var n={name:"App",components:{StepsProgressBar:o(345).default},data:function(){return{options:{maxWidth:"100%",nodeWidth:40,nodeHeight:40,barHeight:3,showTooltip:!0,showContent:!0,barType:"dashed",nodes:[{content:"step 1",tooltip:"sth about step 1"},{content:"step 2",tooltip:"sth about step 2"},{content:"step 3",tooltip:"sth about step 3"},{content:"step 4",tooltip:"sth about step 4"}]}}}},s=o(45),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("steps-progress-bar",{ref:"progress",attrs:{options:t.options}}),t._v(" "),o("div",{staticClass:"option-holder"},[o("div",{staticClass:"input-holder"},[o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"input-1"}},[t._v("\n        Node Width :\n        ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.nodeWidth,expression:"options.nodeWidth"}],attrs:{type:"number",placeholder:"",id:"input-1",min:"20",max:"60"},domProps:{value:t.options.nodeWidth},on:{input:function(e){e.target.composing||t.$set(t.options,"nodeWidth",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"input-2"}},[t._v("Node Height :")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.nodeHeight,expression:"options.nodeHeight"}],attrs:{type:"number",placeholder:"",id:"input-2",min:"20",max:"60"},domProps:{value:t.options.nodeHeight},on:{input:function(e){e.target.composing||t.$set(t.options,"nodeHeight",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"input-container"},[o("label",{attrs:{for:"input-3"}},[t._v(" \n            Bar height :\n          ")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.barHeight,expression:"options.barHeight"}],attrs:{type:"number",placeholder:"",id:"input-3",max:"15"},domProps:{value:t.options.barHeight},on:{input:function(e){e.target.composing||t.$set(t.options,"barHeight",e.target.value)}}})])]),t._v(" "),o("div",{staticClass:"toggle-holder"},[o("div",{staticClass:"toggle-container"},[o("label",{attrs:{for:""}},[t._v("Show content :")]),t._v(" "),o("label",{staticClass:"switch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.showContent,expression:"options.showContent"}],attrs:{type:"checkbox",checked:""},domProps:{checked:Array.isArray(t.options.showContent)?t._i(t.options.showContent,null)>-1:t.options.showContent},on:{change:function(e){var o=t.options.showContent,n=e.target,s=!!n.checked;if(Array.isArray(o)){var i=t._i(o,null);n.checked?i<0&&t.$set(t.options,"showContent",o.concat([null])):i>-1&&t.$set(t.options,"showContent",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.options,"showContent",s)}}}),t._v(" "),o("span",{staticClass:"slider round"})])]),t._v(" "),o("div",{staticClass:"toggle-container"},[o("label",{attrs:{for:""}},[t._v("Show tooltip :")]),t._v(" "),o("label",{staticClass:"switch"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.showTooltip,expression:"options.showTooltip"}],attrs:{type:"checkbox",checked:""},domProps:{checked:Array.isArray(t.options.showTooltip)?t._i(t.options.showTooltip,null)>-1:t.options.showTooltip},on:{change:function(e){var o=t.options.showTooltip,n=e.target,s=!!n.checked;if(Array.isArray(o)){var i=t._i(o,null);n.checked?i<0&&t.$set(t.options,"showTooltip",o.concat([null])):i>-1&&t.$set(t.options,"showTooltip",o.slice(0,i).concat(o.slice(i+1)))}else t.$set(t.options,"showTooltip",s)}}}),t._v(" "),o("span",{staticClass:"slider round"})])])]),t._v(" "),o("div",{staticClass:"button-holder"},[o("button",{staticClass:"button",on:{click:function(e){return t.$refs.progress.next()}}},[t._v("next")]),t._v(" "),o("button",{staticClass:"button",on:{click:function(e){return t.$refs.progress.prev()}}},[t._v("previous")]),t._v(" "),o("button",{staticClass:"button",on:{click:function(e){return t.$refs.progress.restart()}}},[t._v("restart")])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);