!function(){"use strict";var n,t,e,r,i=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.util.Tools"),u=function(n,t,e){var r="UL"===t?"InsertUnorderedList":"InsertOrderedList";n.execCommand(r,!1,!1===e?null:{"list-style-type":e})},l={register:function(n){n.addCommand("ApplyUnorderedListStyle",function(t,e){u(n,"UL",e["list-style-type"])}),n.addCommand("ApplyOrderedListStyle",function(t,e){u(n,"OL",e["list-style-type"])})}},c=function(n){var t=n.getParam("advlist_number_styles","default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman");return t?t.split(/[ ,]/):[]},s=function(n){var t=n.getParam("advlist_bullet_styles","default,circle,square");return t?t.split(/[ ,]/):[]},f=function(){},a=function(n){return function(){return n}},d=a(!1),g=a(!0),p=function(){return m},m=(n=function(n){return n.isNone()},r={fold:function(n,t){return n()},is:d,isSome:d,isNone:g,getOr:e=function(n){return n},getOrThunk:t=function(n){return n()},getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:a(null),getOrUndefined:a(void 0),or:e,orThunk:t,map:p,each:f,bind:p,exists:d,forall:g,filter:p,equals:n,equals_:n,toArray:function(){return[]},toString:a("none()")},Object.freeze&&Object.freeze(r),r),y=function(n){var t=a(n),e=function(){return i},r=function(t){return t(n)},i={fold:function(t,e){return e(n)},is:function(t){return n===t},isSome:g,isNone:d,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:e,orThunk:e,map:function(t){return y(t(n))},each:function(t){t(n)},bind:r,exists:r,forall:r,filter:function(t){return t(n)?i:m},toArray:function(){return[n]},toString:function(){return"some("+n+")"},equals:function(t){return t.is(n)},equals_:function(t,e){return t.fold(d,function(t){return e(n,t)})}};return i},O=function(n){return null==n?m:y(n)},v=function(n){return n&&/^(TH|TD)$/.test(n.nodeName)},h=function(n){return function(t){return t&&/^(OL|UL|DL)$/.test(t.nodeName)&&function(n,t){return n.$.contains(n.getBody(),t)}(n,t)}},L=function(n){var t=n.dom.getParent(n.selection.getNode(),"ol,ul"),e=n.dom.getStyle(t,"listStyleType");return O(e)},N=function(n,t,e){var r=function(n,t){for(var e=0;e<n.length;e++)if(t(n[e]))return e;return-1}(t.parents,v),i=-1!==r?t.parents.slice(0,r):t.parents,u=o.grep(i,h(n));return u.length>0&&u[0].nodeName===e},S=function(n,t,e,r,i,l){l.length>0?function(n,t,e,r,i,l){n.ui.registry.addSplitButton(t,{tooltip:e,icon:"OL"===i?"ordered-list":"unordered-list",presets:"listpreview",columns:3,fetch:function(n){n(o.map(l,function(n){return{type:"choiceitem",value:"default"===n?"":n,icon:"list-"+("OL"===i?"num":"bull")+"-"+("disc"===n||"decimal"===n?"default":n),text:function(n){return n.replace(/\-/g," ").replace(/\b\w/g,function(n){return n.toUpperCase()})}(n)}}))},onAction:function(){return n.execCommand(r)},onItemAction:function(t,e){u(n,i,e)},select:function(t){return L(n).map(function(n){return t===n}).getOr(!1)},onSetup:function(t){var e=function(e){t.setActive(N(n,e,i))};return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}}})}(n,t,e,r,i,l):function(n,t,e,r,i,o){n.ui.registry.addToggleButton(t,{active:!1,tooltip:e,icon:"OL"===i?"ordered-list":"unordered-list",onSetup:function(t){var e=function(e){t.setActive(N(n,e,i))};return n.on("NodeChange",e),function(){return n.off("NodeChange",e)}},onAction:function(){return n.execCommand(r)}})}(n,t,e,r,i)},T={register:function(n){S(n,"numlist","Numbered list","InsertOrderedList","OL",c(n)),S(n,"bullist","Bullet list","InsertUnorderedList","UL",s(n))}};i.add("advlist",function(n){(function(n,t){var e=n.settings.plugins?n.settings.plugins:"";return-1!==o.inArray(e.split(/[ ,]/),t)})(n,"lists")&&(T.register(n),l.register(n))})}();