define("aladdin-san/app/se_com_default/result_f56fc4d",["san","tslib","@searchfe/inject-js","@baidu/www-api",searchUiPcNode["Star_Star"],searchUiPcNode["Label_Label"],searchUiPcNode["Tts_Tts"],searchUiPcNode["Source_Source"],searchUiPcNode["Row_Span"],searchUiPcNode["Row_Row"],searchUiPcNode["Image_Image"],searchUiPcNode["Title_Title"]],function(a,n,s,i,r,l,o,c,u,p,f,m){return y={},d.m=_=[function(t,e,a){var n=[e,a(1)],s=function(t,l){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function c(e){return typeof e}:function c(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(t)}function u(t,e){var a;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var n=0,s=function s(){};return{s:s,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return r=t.done,t},e:function(t){l=!0,i=t},f:function(){try{r||null==a["return"]||a["return"]()}finally{if(l)throw i}}}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(t,e,a){var n,s=u(function(t){var e=[t];"function"==typeof t&&(e.push(t.prototype),t.prototype.constructor&&e.push(t.prototype.constructor.prototype));return e}(t));try{for(s.s();!(n=s.n()).done;){var i=n.value;e&&(i.template=e),a.length&&function(t,e){var a,n={},s=u(e);try{for(s.s();!(a=s.n()).done;){var i=a.value;o(n,i)}}catch(l){s.e(l)}finally{s.f()}var r=t.initData;t.initData=r?function(){return o({},r.call(this),{$style:n})}:function(){return n}}(i,a)}}catch(r){s.e(r)}finally{s.f()}return"object"===c(t)?(0,l.defineComponent)(t):t}}.apply(e,n);s===undefined||(t.exports=s)},function(t,e){t.exports=a},function(t,e,a){var n=function(){"use strict";t.exports=function(a){var o=[];return o.toString=function(){return this.map(function(t){var e=function(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var s=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(a," */")}(n),i=n.sources.map(function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")});return[a].concat(i).concat([s]).join("\n")}return[a].join("\n")}(t,a);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},o.i=function(t,e,a){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(a)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(n[i]=!0)}for(var r=0;r<t.length;r++){var l=[].concat(t[r]);a&&n[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),o.push(l))}},o}}.apply(e,[]);n===undefined||(t.exports=n)},function(t,e){t.exports=n},function(t,e,a){"use strict";function o(t,e){for(var a=[],n={},s=0;s<e.length;s++){var i=e[s],r=i[0],l={id:t+":"+s,css:i[1],media:i[2],sourceMap:i[3]};n[r]?n[r].parts.push(l):a.push(n[r]={id:r,parts:[l]})}return a}a.r(e),a.d(e,"default",function(){return d});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},s=n&&(document.head||document.getElementsByTagName("head")[0]),i=null,r=0,u=!1,l=function(){},p=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(r,t,e,a){u=!!a.runAsProduction||e,p=a||{};var l=o(r,t);return _(l),function(t){for(var e=[],a=0;a<l.length;a++){var n=l[a];(s=c[n.id]).refs--,e.push(s)}t?_(l=o(r,t)):l=[];for(var s,a=0;a<e.length;a++){if(0===(s=e[a]).refs){for(var i=0;i<s.parts.length;i++)s.parts[i]();delete c[s.id]}}}}function _(t){for(var e=0;e<t.length;e++){var a=t[e],n=c[a.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](a.parts[s]);for(;s<a.parts.length;s++)n.parts.push(b(a.parts[s]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var i=[],s=0;s<a.parts.length;s++)i.push(b(a.parts[s]));c[a.id]={id:a.id,refs:1,parts:i}}}}function y(){var t=document.createElement("style"),e=p.attributes||{};for(var a in t.type="text/css",e)e.hasOwnProperty(a)&&t.setAttribute(a,e[a]);return s.appendChild(t),t}function b(e){var t,a,n,s=document.querySelector("style["+f+'~="'+e.id+'"]');if(s){if(u)return l;s.parentNode.removeChild(s)}return n=m?(t=r++,s=i=i||y(),a=v.bind(null,s,t,!1),v.bind(null,s,t,!0)):(s=y(),a=function(t,e){var a=e.css,n=e.media,s=e.sourceMap;n&&t.setAttribute("media",n);p.ssrId&&t.setAttribute(f,e.id);s&&(a+="\n/*# sourceURL="+s.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}.bind(null,s),function(){s.parentNode.removeChild(s)}),a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}var h,g=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function v(t,e,a,n){var s,i,r=a?"":n.css;t.styleSheet?t.styleSheet.cssText=g(e,r):(s=document.createTextNode(r),(i=t.childNodes)[e]&&t.removeChild(i[e]),i.length?t.insertBefore(s,i[e]):t.appendChild(s))}},,,function(t,e){t.exports=s},function(t,e){t.exports=i},,,,,,function(t,e,a){"use strict";e.__esModule=!0;var n,s=a(3),i=a(1),r=s.__importDefault(a(51)),l=s.__importDefault(a(53)),o=s.__importDefault(a(57)),c=s.__importDefault(a(59)),u=a(7),p=a(8),f=(n=i.Component,s.__extends(m,n),m.prototype.initData=function(){return{officialFlag:!1,title:"",titleUrl:"",extQuery:"",kbShowStyle:"",kbUrl:"",kbFrom:"",showUrl:"",toolsId:"",toolsTitle:"",robotsUrl:"",col:"24",urlSign:"",test:0,subLinkArray:[],ttsInfo:{}}},m.components={"sub-link":r["default"],"sub-title":o["default"],"c-title":c["default"],"c-content":l["default"]},s.__decorate([u.injectable,s.__metadata("design:paramtypes",[p.SanOption])],m));function m(t){var e=n.call(this,t)||this;return e.trimWhitespace="all",e}e["default"]=f},function(t,e,a){"use strict";e.__esModule=!0;var n,s=a(3),i=a(1),r=s.__importDefault(a(23)),l=s.__importDefault(a(28)),o=s.__importDefault(a(24)),c=(n=i.Component,s.__extends(u,n),u.prototype.initData=function(){return{subLinkArray:[],tplData:{},alignType:"left",colNum:3,searchUrl:""}},u.components={"c-star":r["default"],"c-tts":l["default"],"c-label":o["default"]},u);function u(){var t=null!==n&&n.apply(this,arguments)||this;return t.trimWhitespace="all",t}e["default"]=c},function(t,e,a){"use strict";e.__esModule=!0;var n,s=a(3),i=a(1),r=s.__importDefault(a(29)),l=s.__importDefault(a(55)),o=s.__importDefault(a(30)),c=s.__importDefault(a(56)),u=s.__importDefault(a(23)),p=s.__importDefault(a(24)),f=a(7),m=s.__importDefault(a(28)),d=(n=i.Component,s.__extends(_,n),_.prototype.initData=function(){return{normalGallery:[],source:{},contentText:"",leftImg:"",wenkuInfo:{},tplData:{},newTimeFactorStr:"",url:"",ttsInfo:{}}},_.components={"c-source":r["default"],"c-img":c["default"],"c-row":l["default"],"c-span":o["default"],"c-star":u["default"],"c-label":p["default"],"c-tts":m["default"]},_.computed={showResHintUnsafe:function(){var t=this.data.get("tplData").templateData;return!("res_hint_unsafe"!==t.templateName||!t.hintData||!t.hintData.hintText)}},s.__decorate([f.injectable],_));function _(){var t=null!==n&&n.apply(this,arguments)||this;return t.trimWhitespace="all",t}e["default"]=d},function(t,e,a){"use strict";e.__esModule=!0;var n,s=a(3),i=a(1),r=s.__importDefault(a(29)),l=s.__importDefault(a(23)),o=s.__importDefault(a(30)),c=s.__importDefault(a(24)),u=(n=i.Component,s.__extends(p,n),p.prototype.initData=function(){return{subtitleWithAvatar:[],subtitleWithIcon:null,wenkuInfo:null,leftImg:"",tplData:null,suntitleTranslateUrl:""}},p.components={"c-source":r["default"],"c-star":l["default"],"c-span":o["default"],"c-label":c["default"]},p.computed={labelData:function(){var t=this.data.get("subtitleWithIcon.label");return{type:null==t?void 0:t.type,text:null==t?void 0:t.text}}},p);function p(){var t=null!==n&&n.apply(this,arguments)||this;return t.trimWhitespace="all",t}e["default"]=u},function(t,e,a){"use strict";e.__esModule=!0;var n,s=a(3),i=a(1),r=s.__importDefault(a(61)),l=(n=i.Component,s.__extends(o,n),o.prototype.initData=function(){return{iconClass:"",iconText:"",titleUrl:"",officialFlag:"",title:"",frontIcon:{code:"&#xe636",color:"#509de0"},dataClick:""}},o.components={"c-title":r["default"]},o);function o(){var t=null!==n&&n.apply(this,arguments)||this;return t.trimWhitespace="all",t}e["default"]=l},,,,,function(t,e){t.exports=r},function(t,e){t.exports=l},,,,function(t,e){t.exports=o},function(t,e){t.exports=c},function(t,e){t.exports=u},function(t,e,a){var n=a(50);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4)["default"])("737009d0",n,!1,{runAsProduction:!0})},function(t,e){t.exports=' <div class="c-container"> <div has-tts="{{tplData.ttsInfo[0].hasTts}}"> <c-title iconClass="{{iconClass}}" iconText="{{iconText}}" titleUrl="{{titleUrl}}" dataClick="{{titleDataClick}}" titleLabelProps="{{titleLabelProps}}" title="{{title}}" frontIcon="{{frontIcon}}" class="tts-title" preText="{{preText}}"/> <sub-title subtitleWithAvatar="{{subtitleWithAvatar}}" subtitleWithIcon="{{subtitleWithIcon}}" wenkuInfo="{{wenkuInfo}}" leftImg="{{leftImg}}" tplData="{{tplData}}" suntitleTranslateUrl="{{suntitleTranslateUrl}}"/> <c-content subtitleWithIcon="{{subtitleWithIcon}}" normalGallery="{{normalGallery}}" source="{{source}}" contentText="{{contentText}}" leftImg="{{leftImg}}" wenkuInfo="{{wenkuInfo}}" tplData="{{tplData}}" newTimeFactorStr="{{newTimeFactorStr}}" summaryList="{{summaryList}}" url="{{titleUrl}}"/> </div> <div s-if="tplData.sitelink_with_summary_cn" class="sitelink"> <div s-for="sl , index in tplData.sitelink_with_summary_cn.sitelink" s-bind:key="sl.title + index" class="{{[\'c-gap-top-small\', \'sitelink_summary\', index % 2 === 1 ? \'sitelink_summary_last\' : \'\']}}"> <a href="{{sl.url}}" target="_blank">{{sl.title}}</a> <p class="c-color-text">{{sl.summary}}</p> </div> </div> <sub-link s-if="subLinkArray" subLinkArray="{{ subLinkArray }}" alignType="{{ tplData.comm_sublink_align }}" colNum="{{ tplData.comm_sublink_colNum }}" tplData="{{ tplData }}" searchUrl="{{ searchUrl }}"/> </div> '},function(t,e,a){var n=a(52);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4)["default"])("8a37523a",n,!1,{runAsProduction:!0})},function(t,e){t.exports=' <div> <ul s-if="tplData.pc_site_group_new" class="subLink_answer" style="{{tplData.comm_general_pic && tplData.comm_general_pic.url ? \'padding-top: 6px\' : \'\'}}"> <li s-for="item , index in subLinkArray" has-tts="{{tplData.ttsInfo[index + 1]\n                    && tplData.ttsInfo[index + 1].hasTts ? tplData.ttsInfo[index + 1].hasTts : \'false\'}}"> <h4 class="f14" s-if="item.col0"> <a s-if="item.col0link" href="{{ item.col0link }}" target="_blank" s-html="item.col0" class="tts-title"> </a> <span s-else>{{ item.col0 }}</span> </h4> <div s-if="item.col1" class="label_wrap f13"> <c-label s-if="item.label.type && item.label.text" class="c-gap-right-small" type="{{item.label.type}}" text="{{item.label.text}}"/> <span class="" s-if="item.value"> <c-star style="margin-top: 2px;" score="{{item.value / 2}}"/> </span> <span>{{item.col1}}</span> <span s-if="item.col2">{{item.col2}}</span> <span s-else-if="item.timefactor">{{item.timefactor}}</span> <div s-if="item.abstract" s-html="item.abstract"></div> </div> <template s-else-if="!item.col2"> <div s-if="item.timefactor"> <span class="date">{{item.timefactor}}</span> <i s-if="item.abstract" class="subLink_answer_dis date">-</i> <span s-html="item.abstract"></span> </div> <div s-else-if="item.abstract" s-html="item.abstract"></div> </template> <template s-else> <div s-if="item.value" class="label_wrap f13"> <span class=""> <c-star style="margin-top: 2px;" score="{{item.value / 2}}"/>{{item.value}} </span> <span>{{item.col2}}</span> <span s-if="item.timefactor">{{item.timefactor}}</span> </div> <div s-else> <span class="date">{{item.col2}}&nbsp;&nbsp;</span> <span s-if="item.timefactor" class="date">{{item.timefactor}}</span> </div> <div s-if="item.abstract" s-html="item.abstract"></div> </template> <c-tts s-if="tplData.ttsInfo && tplData.ttsInfo[index + 1] && tplData.ttsInfo[index + 1].hasTts" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[index + 1].ext}}" tts-id="{{tplData.ttsInfo[index + 1].ttsId}}" title-url="{{tplData.ttsInfo[index + 1].titleUrl}}" tts-source-type="{{tplData.ttsInfo[index + 1].ttsSourceType}}"/> </li> </ul> <a s-if="searchUrl" href="{{searchUrl}}" target="_blank" class="c-gap-top-xsmall f14" style="display:block;"> {{tplData.comm_sublink_more.text}} </a> </div> '},function(t,e,a){var n=a(54);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4)["default"])("0e2aa182",n,!1,{runAsProduction:!0})},function(t,e){t.exports=' <div> <div s-if="normalGallery && normalGallery.length !== 0" style="margin-top: 10px;"> <c-row class="c-gap-bottom-small"> <c-span col="3" s-for="item , index in normalGallery" s-bind:key="item.link + index"> <a href="{{item.link}}" target="_blank"> <c-img type="z" src="{{ item.src }}" gridSize="3"/> </a> </c-span> </c-row> <c-source s-if="source && contentText && !leftImg" class="OP_LOG_LINK" s-bind="{{ source }}" sourceLinkTitle="true"/> <c-tts s-if="tplData.ttsInfo[0] && tplData.ttsInfo[0].hasTts && source && contentText && !leftImg" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </div> <template s-else-if="leftImg"> <c-row class="c-gap-top-middle"> <c-span col="3"> <a href="{{url}}" target="_blank"> <c-img class="c-gap-top-mini" size="128_85" type="y" src="{{ leftImg }}" gridSize="3"/> </a> </c-span> <c-span col="9" class="c-span-last"> <p s-if="tplData.comm_subtitle_structure" class="f13 c-color-gray2"> {{ tplData.comm_subtitle_structure }} </p> <div s-if="wenkuInfo.score" class="c-color-gray2"> <c-star style="margin-top: 2px;" score="{{wenkuInfo.score}}"/> &nbsp;评分:{{ wenkuInfo.score }}/5 <template s-if="wenkuInfo.page">&nbsp;{{ wenkuInfo.page }}页</template> </div> <span s-if="tplData.ZhidaoProfTag"> <c-label type="blue-border" text="专业"/> <span class="m">答案:</span> </span> <span class="c-color-gray2" s-if="tplData.comm_summary_pre && !tplData.ZhidaoProfTag"> {{ tplData.comm_summary_pre }} </span> <span class="c-color-gray2" s-else-if="{{newTimeFactorStr}}">{{ newTimeFactorStr + \' \' }}</span> <p s-if="tplData.comm_original" class="f13 c-color-gray2"> <c-label type="blue-border" text="原创"/> {{ tplData.comm_original }} </p> <div s-if="tplData.baijiahao_struct_abstract" class="c-gray"> <c-label type="blue-border" text="百家号"/> 作者:{{ tplData.baijiahao_struct_abstract.author }} </div> <span s-if="tplData.general_pic && tplData.general_pic.hasPicType == \'21\'" class="{{$style.labelRight}}"> <c-label type="blue-border" text="图文"/> </span> <span s-if="tplData.from_official_info && tplData.from_official_info.is_main == 1" class="{{$style.labelRight}}"> <c-label type="blue-border" text="官方"/> </span> <p s-if="tplData.comm_sup_summary"> <span s-if="tplData.comm_sup_summary_pre" class="c-color-gray2"> {{ tplData.comm_sup_summary_pre }} </span> {{ tplData.comm_sup_summary }} </p> <span s-if="contentText" s-html="contentText" class="{{$style.contentRight}}"> </span> <div s-else-if="summaryList" s-for="item , index in summaryList" s-bind:key="item + index" s-html="{{ item }}"> </div> <div s-if="tplData.comm_summary_escaped" s-html="{{tplData.comm_summary_escaped}}"></div> <c-source s-if="source && !tplData.comm_summary_escaped && !subtitleWithIcon.iconClass" class="OP_LOG_LINK c-gap-top-xsmall" s-bind="{{ source }}" sourceLinkTitle="true"/> <c-tts s-if="tplData.ttsInfo[0].hasTts && source\n                            && !tplData.comm_summary_escaped\n                            && !subtitleWithIcon.iconClass" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </c-span> </c-row> <c-source s-if="source && (tplData.comm_summary_escaped || subtitleWithIcon.iconClass)" class="OP_LOG_LINK c-gap-top-mini" s-bind="{{ source }}" sourceLinkTitle="true"/> <c-tts s-if="tplData.ttsInfo[0].hasTts && source\n                    && (tplData.comm_summary_escaped || subtitleWithIcon.iconClass)" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </template> <div class="c-gap-top-small" s-else> <div s-if="showResHintUnsafe" class="unsafe_content {{$style[\'unsafe\']}}"> <a href="{{tplData.templateData.jubaoUrl}}" target="_blank" class="unsafe_ico_new c-color-orange"> 百度网址安全中心提醒您：{{tplData.templateData.hintData.hintText}} </a> </div> <span s-if="tplData.general_pic && tplData.general_pic.hasPicType == \'21\'" class="{{$style.labelRight}}"> <c-label type="blue-border" text="图文"/> </span> <span s-if="tplData.from_official_info && tplData.from_official_info.is_main == 1" class="{{$style.labelRight}}"> <c-label type="blue-border" text="官方"/> </span> <span class="c-color-gray2" s-if="{{newTimeFactorStr}}">{{ newTimeFactorStr + \' \' }}</span> <span s-if="tplData.ZhidaoProfTag"> <c-label type="blue-border" text="专业"/> <span class="m">答案:</span> </span> <span class="c-color-gray2" s-if="{{ tplData.comm_summary_pre && !tplData.ZhidaoProfTag}}"> {{ tplData.comm_summary_pre}} </span> <span s-if="contentText" s-html="{{ contentText }}" class="{{$style.contentRight}}"> </span> <div s-else-if="summaryList" s-for="item , index in summaryList" s-bind:key="item + index" s-html="{{ item }}"> </div> <div s-if="tplData.comm_summary_escaped" s-html="{{tplData.comm_summary_escaped}}"> </div> <c-source s-if="source && !leftImg" class="OP_LOG_LINK c-gap-top-xsmall {{ $style.sourceS }}" s-bind="{{ source }}" sourceLinkTitle="true"/> <c-tts s-if="tplData.ttsInfo[0].hasTts && source && !leftImg" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </div> </div> '},function(t,e,a){var n=a(58);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4)["default"])("0e5a0b53",n,!1,{runAsProduction:!0})},function(t,e){t.exports=' <div style="margin-bottom: -4px;"> <div s-if="suntitleTranslateUrl" class="c-gray"> 查看此网页的中文翻译，请点击&nbsp; <a class="c-gray" href="{{suntitleTranslateUrl}}" target="_blank">翻译此页</a> </div> <c-source s-if="subtitleWithAvatar && subtitleWithAvatar[0] && subtitleWithAvatar[0].text" class="OP_LOG_LINK" img="{{subtitleWithAvatar[0].avatarUrl }}" sitename="{{ subtitleWithAvatar[0].text }}" sourceLinkTitle="true"/> <div s-if="wenkuInfo.score && !leftImg" class="c-color-gray2"> <c-star style="margin-top: 2px;" score="{{wenkuInfo.score}}"/> &nbsp;评分:{{wenkuInfo.score}}/5<template s-if="wenkuInfo.page">&nbsp;{{wenkuInfo.page}}页</template> </div> <p s-if="!leftImg && tplData.comm_subtitle_structure" class="f13 c-color-gray2" style="margin-bottom: 2px;margin-top: -2px;"> <i s-if="tplData.comm_original" class="c-text c-text-info"> <b>[</b><span>原创</span><b>]</b> </i> {{tplData.comm_subtitle_structure}} </p> <p class="f13" s-if="tplData.classicInfo\n                && tplData.classicInfo.docType >= 0\n                && !tplData.comm_hideDocType\n                && tplData.classicInfo.docTypeDetail\n                && tplData.classicInfo.snapshootKey\n                && !tplData.subtitleWithIcon"> <span>文件格式：</span>{{tplData.classicInfo.docTypeDetail}}&nbsp;-&nbsp; <a href="{{\'http://cache.baidu.com/c?\' + tplData.classicInfo.snapshootKey + \'&user=baidu\'}}" target="_blank">HTML版</a> </p> <div class="f13 c-color-gray2" s-if="tplData.subtitleWithIcon" style="margin-bottom: 2px;margin-top: -2px;"> <c-label s-if="labelData.type && labelData.text" class="c-gap-right-small" type="{{labelData.type}}" text="{{labelData.text}}"/> <span>{{tplData.subtitleWithIcon.text}}</span> </div> </div> '},function(t,e,a){var n=a(60);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,a(4)["default"])("7c207cbe",n,!1,{runAsProduction:!0})},function(t,e){t.exports=' <c-title url="{{titleUrl}}" text="{{title}}" labelProps="{{titleLabelProps}}" frontIcon="{{frontIcon}}" class="t" preText="{{preText}}" logInfo="{{dataClick}}" sourceLinkTitle="true"/> '},,,,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(31),r=a.n(i),l=a(32),o=a.n(l),c=a(14),u=a.n(c);for(var p in c)"default"!==p&&function(t){a.d(e,t,function(){return c[t]})}(p);var f=[r.a];e["default"]=s()(u.a,o.a,f)},function(t,e,a){(e=a(2)(!1)).push([t.i,".sitelink_summary_3VdXX {\n  float: left;\n  width: 272px;\n  padding-right: 0;\n}\n.sitelink_summary_last_T63lC {\n  padding-right: 0;\n}\n",""]),e.locals={sitelink_summary:"sitelink_summary_3VdXX",sitelinkSummary:"sitelink_summary_3VdXX",sitelink_summary_last:"sitelink_summary_last_T63lC",sitelinkSummaryLast:"sitelink_summary_last_T63lC"},t.exports=e},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(33),r=a.n(i),l=a(34),o=a.n(l),c=a(15),u=a.n(c);for(var p in c)"default"!==p&&function(t){a.d(e,t,function(){return c[t]})}(p);var f=[r.a];e["default"]=s()(u.a,o.a,f)},function(t,e,a){(e=a(2)(!1)).push([t.i,".tts-site_2uSdA {\n  float: right !important;\n  margin-top: -20px;\n}\n",""]),e.locals={"tts-site":"tts-site_2uSdA",ttsSite:"tts-site_2uSdA"},t.exports=e},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(35),r=a.n(i),l=a(36),o=a.n(l),c=a(16),u=a.n(c);for(var p in c)"default"!==p&&function(t){a.d(e,t,function(){return c[t]})}(p);var f=[r.a];e["default"]=s()(u.a,o.a,f)},function(t,e,a){(e=a(2)(!1)).push([t.i,".label-right_1tffw {\n  margin-right: 3px;\n  position: relative;\n  bottom: 2px;\n}\n.source_s_3aixw {\n  margin-top: 4px;\n}\n.tts-source_2PMLh {\n  position: relative;\n}\n.tts-site_2MWX0 {\n  float: right !important;\n  margin-top: -20px;\n}\n.unsafe_vMrNJ {\n  margin-top: -2px;\n  margin-bottom: 2px;\n}\n.content-right_8Zs40 {\n  word-break: break-all;\n}\n",""]),e.locals={"label-right":"label-right_1tffw",labelRight:"label-right_1tffw",source_s:"source_s_3aixw",sourceS:"source_s_3aixw","tts-source":"tts-source_2PMLh",ttsSource:"tts-source_2PMLh","tts-site":"tts-site_2MWX0",ttsSite:"tts-site_2MWX0",unsafe:"unsafe_vMrNJ","content-right":"content-right_8Zs40",contentRight:"content-right_8Zs40"},t.exports=e},function(t,e){t.exports=p},function(t,e){t.exports=f},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(37),r=a.n(i),l=a(38),o=a.n(l),c=a(17),u=a.n(c);for(var p in c)"default"!==p&&function(t){a.d(e,t,function(){return c[t]})}(p);var f=[r.a];e["default"]=s()(u.a,o.a,f)},function(t,e,a){(e=a(2)(!1)).push([t.i,"",""]),t.exports=e},function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(39),r=a.n(i),l=a(40),o=a.n(l),c=a(18),u=a.n(c);for(var p in c)"default"!==p&&function(t){a.d(e,t,function(){return c[t]})}(p);var f=[r.a];e["default"]=s()(u.a,o.a,f)},function(t,e,a){(e=a(2)(!1)).push([t.i,"",""]),t.exports=e},function(t,e){t.exports=m}],d.c=y,d.d=function(t,e,a){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},d.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(a,n,function(t){return e[t]}.bind(null,n));return a},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="https://pss.bdstatic.com/r/www/cache",d(d.s=49);function d(t){if(y[t])return y[t].exports;var e=y[t]={i:t,l:!1,exports:{}};return _[t].call(e.exports,e,e.exports,d),e.l=!0,e.exports}var _,y});