/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2012 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 1.3.43
*/
(function(e){void 0==e.fn.inputmask&&(e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,showMaskOnHover:!0,onKeyValidation:e.noop,numericInput:!1,radixPoint:".",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},
"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,
93,112,113,114,115,116,117,118,119,120,121,122,123]},val:e.fn.val,escapeRegex:function(e){return e.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")},getMaskLength:function(e,C,z){var D=e.length;!C&&1<z&&(D+=e.length*(z-1));return D}},e.fn.inputmask=function(s,C){function z(d,b){var c=a.aliases[d];return c?(c.alias&&z(c.alias),e.extend(!0,a,c),e.extend(!0,a,b),!0):!1}function D(){var d=!1,b=0,c=a.mask.toString();1==c.length&&!1==a.greedy&&(a.placeholder="");for(var c=
e.map(c.split(""),function(c){var e=[];if(c==a.escapeChar)d=true;else if(c!=a.optionalmarker.start&&c!=a.optionalmarker.end||d){var E=a.definitions[c];if(E&&!d)for(c=0;c<E.cardinality;c++)e.push(A(b+c));else{e.push(c);d=false}b=b+e.length;return e}}),E=c.slice(),g=1;g<a.repeat&&a.greedy;g++)E=E.concat(c.slice());return E}function I(){var d=!1,b=!1,c=!1;return e.map(a.mask.toString().split(""),function(e){var g=[];if(e==a.escapeChar)b=!0;else if(e==a.optionalmarker.start&&!b)c=d=!0;else if(e==a.optionalmarker.end&&
!b)d=!1,c=!0;else{var i=a.definitions[e];if(i&&!b){for(var j=i.prevalidator,k=j?j.length:0,h=1;h<i.cardinality;h++){var l=k>=h?j[h-1]:[],f=l.validator,l=l.cardinality;g.push({fn:f?"string"==typeof f?RegExp(f):new function(){this.test=f}:/./,cardinality:l?l:1,optionality:d,newBlockMarker:!0==d?c:!1,offset:0,casing:i.casing,def:e});!0==d&&(c=!1)}g.push({fn:i.validator?"string"==typeof i.validator?RegExp(i.validator):new function(){this.test=i.validator}:/./,cardinality:i.cardinality,optionality:d,newBlockMarker:c,
offset:0,casing:i.casing,def:e})}else g.push({fn:null,cardinality:0,optionality:d,newBlockMarker:c,offset:0,casing:null,def:e}),b=!1;c=!1;return g}})}function G(d,b,c,e){var g=!1;if(0<=d&&d<n()){for(var j=d%i.length,r=b?1:0,k="",h=i[j].cardinality;h>r;h--)k+=t(c,j-(h-1));b&&(k+=b);g=null!=i[j].fn?i[j].fn.test(k,c,d,e,a):!1}setTimeout(function(){a.onKeyValidation.call(this,g,a)},0);return g}function r(d){d=i[d%i.length];return void 0!=d?d.fn:!1}function A(d){return a.placeholder.charAt(d%a.placeholder.length)}
function n(){return e.inputmask.getMaskLength(g,a.greedy,a.repeat)}function v(d,a){var c=n();if(a>=c)return c;for(var e=a;++e<c&&!r(e););return e}function L(d,a){var c=a;if(0>=c)return 0;for(;0<--c&&!r(c););return c}function F(d,a,c){var e=i[a%i.length],g=c;if(void 0!=g)switch(e.casing){case "upper":g=c.toUpperCase();break;case "lower":g=c.toLowerCase()}d[a]=g}function t(a,b,c){c&&(b=P(a,b));return a[b]}function P(a,b,c){if(c)for(;0>b&&a.length<n();){c=g.length-1;for(b=g.length;void 0!==g[c];)a.unshift(g[c--])}else for(;void 0==
a[b]&&a.length<n();)for(c=0;void 0!==g[c];)a.push(g[c++]);return b}function x(a,b,c){a._valueSet(b.join(""));void 0!=c&&(J?setTimeout(function(){j(a,c)},100):j(a,c))}function Q(a,b,c){for(var e=n();b<c&&b<e;b++)F(a,b,t(g.slice(),b))}function K(a,b){F(a,b,t(g,b%i.length))}function m(d,b,c,E){var j=e(d).data("inputmask").isRTL,m=M(d._valueGet(),j).split("");if(j){var B=n(),k=m.reverse();k.length=B;for(var h=0;h<B;h++){var l=(B-(h+1))%i.length;null==i[l].fn&&k[h]!=t(g,l)?(k.splice(h,0,t(g,l)),k.length=
B):k[h]=k[h]||t(g,l)}m=k.reverse()}Q(b,0,b.length);b.length=g.length;for(var f=k=-1,y,B=n(),s=m.length,l=0==s?B:-1,h=0;h<s;h++)for(var q=f+1;q<B;q++)if(r(q)){var u=m[h];!1!==(y=G(q,u,b,!c))?(!0!==y&&(q=void 0!=y.pos?y.pos:q,u=void 0!=y.c?y.c:u),F(b,q,u),k=f=q):(K(b,q),u==A(q)&&(l=f=q));break}else if(K(b,q),k==f&&(k=q),f=q,m[h]==t(b,q))break;if(!1==a.greedy)for(h=M(b.join(""),j).split("");b.length!=h.length;)j?b.shift():b.pop();c&&x(d,b);return j?a.numericInput?-1!=e.inArray(a.radixPoint,b)&&!0!==
E?e.inArray(a.radixPoint,b):v(b,B):v(b,l):v(b,k)}function S(a){return e.inputmask.escapeRegex.call(this,a)}function M(a,b){return b?a.replace(RegExp("^("+S(g.join(""))+")*"),""):a.replace(RegExp("("+S(g.join(""))+")*$"),"")}function R(a,b){m(a,b,!1);var c=b.slice();if(e(a).data("inputmask").isRTL)for(var g=0;g<=c.length-1;g++){var j=g%i.length;if(i[j].optionality)if(A(g)==b[g]||!r(g))c.splice(0,1);else break;else break}else for(g=c.length-1;0<=g;g--)if(j=g%i.length,i[j].optionality)if(A(g)==b[g]||
!r(g))c.pop();else break;else break;x(a,c)}function T(a,b){var c=a[0];if(i&&(!0===b||!a.hasClass("hasDatepicker"))){var j=g.slice();m(c,j);return e.map(j,function(a,b){return r(b)&&a!=t(g.slice(),b)?a:null}).join("")}return c._valueGet()}function j(d,b,c){d=d.jquery&&0<d.length?d[0]:d;if("number"==typeof b){c="number"==typeof c?c:b;!1==a.insertMode&&b==c&&c++;if(d.setSelectionRange)d.setSelectionRange(b,c);else if(d.createTextRange){var e=d.createTextRange();e.collapse(!0);e.moveEnd("character",c);
e.moveStart("character",b);e.select()}d.focus()}else{var g=J?e:null,e=null;null==g&&(d.setSelectionRange?(b=d.selectionStart,c=d.selectionEnd):document.selection&&document.selection.createRange&&(e=document.selection.createRange(),b=0-e.duplicate().moveStart("character",-1E5),c=b+e.text.length),g={begin:b,end:c});return g}}function N(a){for(var b=!0,a=a._valueGet(),e=a.length,g=0;g<e;g++)if(r(g)&&a.charAt(g)==A(g)){b=!1;break}return b}function O(d){function b(a){a=e._data(a).events;e.each(a,function(a,
b){e.each(b,function(a,b){if("inputmask"==b.namespace){var f=b.handler;b.handler=function(){return this.readOnly||this.disabled?!1:f.apply(this,arguments)}}})})}function c(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=e(this),b=e(this).data("inputmask");return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=b._buffer.join("")?
this._valueGet():""},set:function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=e(this),b=e(this).data("inputmask");return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=b._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);
e(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=e.fn.val.inputmaskpatch)e.fn.val=function(){if(arguments.length==0){var a=e(this);if(a.data("inputmask")){if(a.data("inputmask").autoUnmask)return a.inputmask("unmaskedvalue");var b=e.inputmask.val.apply(a);return b!=a.data("inputmask")._buffer.join("")?b:""}return e.inputmask.val.apply(a)}var f=arguments;return this.each(function(){var a=e(this),
b=e.inputmask.val.apply(a,f);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},e.extend(e.fn.val,{inputmaskpatch:!0})}function s(a,b,e){for(;!r(a)&&0<=a-1;)a--;for(var c=a;c<b&&c<n();c++)if(r(c)){K(f,c);var d=v(f,c),p=t(f,d);if(p!=A(d))if(d<n()&&!1!==G(c,p,f,!0)&&i[c%i.length].def==i[d%i.length].def)F(f,c,t(f,d)),K(f,d);else{if(r(c))break}else if(void 0==e)break}else K(f,c);void 0!=e&&F(f,w?b:L(f,b),e);f=M(f.join(""),w).split("");0==f.length&&(f=g.slice());return a}function z(a,
b,c,e){for(;a<=b&&a<n();a++)if(r(a)){var d=t(f,a);F(f,a,c);if(d!=A(a))if(c=v(f,a),c<n())if(!1!==G(c,d,f,!0)&&i[a%i.length].def==i[c%i.length].def)c=d;else if(r(c))break;else c=d;else break;else if(!0!==e)break}else K(f,a);e=f.length;f=M(f.join(""),w).split("");0==f.length&&(f=g.slice());return b-(e-f.length)}function D(b){C=!1;var c=this,d=b.keyCode,i=j(c);if(a.numericInput){var h=c._valueGet().indexOf(a.radixPoint);-1!=h&&(w=i.begin<=h||i.end<=h)}if(d==a.keyCode.BACKSPACE||d==a.keyCode.DELETE||U&&
127==d){h=n();if(0==i.begin&&i.end==h)f=g.slice(),x(c,f),j(c,m(c,f,!1));else if(1<i.end-i.begin||1==i.end-i.begin&&a.insertMode)Q(f,i.begin,i.end),x(c,f),j(w?m(c,f,!1):i.begin);else{var p=i.begin-(d==a.keyCode.DELETE?0:1);p<H&&d==a.keyCode.DELETE&&(p=H);p>=H&&(a.numericInput&&(a.greedy&&d==a.keyCode.DELETE&&f[p]==a.radixPoint)&&(p=v(f,p),w=!1),w?(p=z(H,p,A(p),!0),p=a.numericInput&&a.greedy&&d==a.keyCode.BACKSPACE&&f[p+1]==a.radixPoint?p+1:v(f,p)):p=s(p,h),x(c,f,p))}c._valueGet()==g.join("")&&e(c).trigger("cleared");
b.preventDefault()}else d==a.keyCode.END||d==a.keyCode.PAGE_DOWN?setTimeout(function(){var d=m(c,f,!1,!0);!a.insertMode&&(d==n()&&!b.shiftKey)&&d--;j(c,b.shiftKey?i.begin:d,d)},0):d==a.keyCode.HOME||d==a.keyCode.PAGE_UP?j(c,0,b.shiftKey?i.begin:0):d==a.keyCode.ESCAPE?(c._valueSet(y),j(c,0,m(c,f))):d==a.keyCode.INSERT?(a.insertMode=!a.insertMode,j(c,!a.insertMode&&i.begin==n()?i.begin-1:i.begin)):b.ctrlKey&&88==d?setTimeout(function(){j(c,m(c,f,!0))},0):a.insertMode||(d==a.keyCode.RIGHT?(h=i.begin==
i.end?i.end+1:i.end,h=h<n()?h:i.end,j(c,b.shiftKey?i.begin:h,b.shiftKey?h+1:h)):d==a.keyCode.LEFT&&(h=i.begin-1,h=0<h?h:0,j(c,h,b.shiftKey?i.end:h)));a.onKeyDown.call(this,b,a);q=-1!=e.inArray(d,a.ignorables)}function B(b){if(C)return!1;C=!0;var c=this,d=e(c),b=b||window.event,g=b.which||b.charCode||b.keyCode,i=String.fromCharCode(g);if(a.numericInput&&i==a.radixPoint){var h=c._valueGet().indexOf(a.radixPoint);j(c,v(f,-1!=h?h:n()))}if(b.ctrlKey||b.altKey||b.metaKey||q)return!0;if(g){d.trigger("input");
var k=j(c),l=n(),g=!0;Q(f,k.begin,k.end);if(w){var h=L(f,k.end),o;if(!1!==(o=G(h==l||t(f,h)==a.radixPoint?L(f,h):h,i,f,!1))){!0!==o&&(h=void 0!=o.pos?o.pos:h,i=void 0!=o.c?o.c:i);o=H;if(!0==a.insertMode){if(!0==a.greedy)for(var m=f.slice();t(m,o,!0)!=A(o)&&o<=h;)o=o==l?l+1:v(f,o);o<=h&&(a.greedy||f.length<l)?(f[H]!=A(H)&&f.length<l&&(l=P(f,-1,w),0!=k.end&&(h+=l),l=f.length),s(o,h,i)):g=!1}else F(f,h,i);g&&(x(c,f,a.numericInput?v(f,h):h),setTimeout(function(){N(c)&&d.trigger("complete")},0))}else J&&
x(c,f,k.begin)}else if(h=v(f,k.begin-1),P(f,h,w),!1!==(o=G(h,i,f,!1))){!0!==o&&(h=void 0!=o.pos?o.pos:h,i=void 0!=o.c?o.c:i);if(!0==a.insertMode){k=n();for(m=f.slice();t(m,k,!0)!=A(k)&&k>=h;)k=0==k?-1:L(f,k);k>=h?z(h,f.length,i):g=!1}else F(f,h,i);g&&(i=v(f,h),x(c,f,i),setTimeout(function(){N(c)&&d.trigger("complete")},0))}else J&&x(c,f,k.begin);b.preventDefault()}}function k(b){var c=e(this),d=b.keyCode;a.onKeyUp.call(this,b,a);d==a.keyCode.TAB&&(c.hasClass("focus.inputmask")&&0==this._valueGet().length)&&
(f=g.slice(),x(this,f),w||j(this,0),y=this._valueGet())}var h=e(d);if(h.is(":input")){a.greedy=a.greedy?a.greedy:0==a.repeat;var l=h.prop("maxLength");n()>l&&-1<l&&(l<g.length&&(g.length=l),!1==a.greedy&&(a.repeat=Math.round(l/g.length)),h.prop("maxLength",2*n()));h.data("inputmask",{tests:i,_buffer:g,greedy:a.greedy,repeat:a.repeat,autoUnmask:a.autoUnmask,definitions:a.definitions,isRTL:!1});c(d);var f=g.slice(),y=d._valueGet(),C=!1,q=!1,u=-1,H=v(f,-1);L(f,n());var w=!1;if("rtl"==d.dir||a.numericInput)d.dir=
"ltr",h.css("text-align","right"),h.removeAttr("dir"),l=h.data("inputmask"),l.isRTL=!0,h.data("inputmask",l),w=!0;h.unbind(".inputmask");h.removeClass("focus.inputmask");h.bind("mouseenter.inputmask",function(){if(!e(this).hasClass("focus.inputmask")&&a.showMaskOnHover){var b=this._valueGet().length;b<f.length&&(0==b&&(f=g.slice()),x(this,f))}}).bind("blur.inputmask",function(){var b=e(this),c=this._valueGet();b.removeClass("focus.inputmask");c!=y&&b.change();a.clearMaskOnLostFocus&&""!=c&&(c==g.join("")?
this._valueSet(""):R(this,f));N(this)||(b.trigger("incomplete"),a.clearIncomplete&&(a.clearMaskOnLostFocus?this._valueSet(""):(f=g.slice(),x(this,f))))}).bind("focus.inputmask",function(){var b=e(this),c=this._valueGet();if(!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&""==c))c=c.length,c<f.length&&(0==c&&(f=g.slice()),j(this,m(this,f,!0)));b.addClass("focus.inputmask");y=this._valueGet()}).bind("mouseleave.inputmask",function(){var b=e(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||
(this._valueGet()==g.join("")||""==this._valueGet()?this._valueSet(""):R(this,f)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=j(a);b.begin==b.end&&(b=b.begin,u=m(a,f,!1),w?j(a,b>u&&(!1!==G(b,f[b],f,!0)||!r(b))?b:u):j(a,b<u&&(!1!==G(b,f[b],f,!0)||!r(b))?b:u))},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){j(a,0,u)},0)}).bind("keydown.inputmask",D).bind("keypress.inputmask",B).bind("keyup.inputmask",k).bind(V+".inputmask dragdrop.inputmask drop.inputmask",
function(){var a=this;setTimeout(function(){j(a,m(a,f,!0))},0)}).bind("setvalue.inputmask",function(){y=this._valueGet();m(this,f,!0);this._valueGet()==g.join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",a.oncleared);var u=m(d,f,!0),I;try{I=document.activeElement}catch(O){}I===d?(h.addClass("focus.inputmask"),j(d,u)):a.clearMaskOnLostFocus&&(d._valueGet()==g.join("")?d._valueSet(""):R(d,f));b(d)}}var a=e.extend(!0,
{},e.inputmask.defaults,C),V=function(a){var b=document.createElement("input"),a="on"+a,c=a in b;c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]);return c}("paste")?"paste":"input",U=null!=navigator.userAgent.match(/iphone/i),J=null!=navigator.userAgent.match(/android.*mobile safari.*/i);if(J)var W=navigator.userAgent.match(/mobile safari.*/i),J=533>=parseInt(RegExp(/[0-9]+/).exec(W));if("string"==typeof s)switch(s){case "mask":z(a.alias,C);var g=D(),i=I();return this.each(function(){O(this)});
case "unmaskedvalue":return i=this.data("inputmask").tests,g=this.data("inputmask")._buffer,a.greedy=this.data("inputmask").greedy,a.repeat=this.data("inputmask").repeat,a.definitions=this.data("inputmask").definitions,T(this);case "remove":return this.each(function(){var d=e(this),b=this;setTimeout(function(){if(d.data("inputmask")){i=d.data("inputmask").tests;g=d.data("inputmask")._buffer;a.greedy=d.data("inputmask").greedy;a.repeat=d.data("inputmask").repeat;a.definitions=d.data("inputmask").definitions;
b._valueSet(T(d,!0));d.removeData("inputmask");d.unbind(".inputmask");d.removeClass("focus.inputmask");var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value"));c&&c.get?b._valueGet&&Object.defineProperty(b,"value",{get:b._valueGet,set:b._valueSet}):document.__lookupGetter__&&b.__lookupGetter__("value")&&b._valueGet&&(b.__defineGetter__("value",b._valueGet),b.__defineSetter__("value",b._valueSet));delete b._valueGet;delete b._valueSet}},0)});case "getemptymask":return this.data("inputmask")?
this.data("inputmask")._buffer.join(""):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").autoUnmask:!1;case "isComplete":return i=this.data("inputmask").tests,g=this.data("inputmask")._buffer,a.greedy=this.data("inputmask").greedy,a.repeat=this.data("inputmask").repeat,a.definitions=this.data("inputmask").definitions,N(this[0]);default:return z(s,C)||(a.mask=s),g=D(),i=I(),this.each(function(){O(this)})}else{if("object"==typeof s)return a=e.extend(!0,{},e.inputmask.defaults,
s),z(a.alias,s),g=D(),i=I(),this.each(function(){O(this)});if(void 0==s)return this.each(function(){var d=e(this).attr("data-inputmask");if(d&&""!=d)try{var d=d.replace(RegExp("'","g"),'"'),b=e.parseJSON("{"+d+"}");a=e.extend(!0,{},e.inputmask.defaults,b);z(a.alias,b);a.alias=void 0;e(this).inputmask(a)}catch(c){}})}return this})})(jQuery);
