﻿(function(){var e=!0,t=null;(function(n){function r(n){if("bug-string-char-index"==n){return"a"!="a"[0]}var r,s="json"==n;if(s||"json-stringify"==n||"json-parse"==n){if("json-stringify"==n||s){var o=l.stringify,f="function"==typeof o&&c;if(f){(r=function(){return 1}).toJSON=r;try{f="0"===o(0)&&"0"===o(new Number)&&'""'==o(new String)&&o(i)===u&&o(u)===u&&o()===u&&"1"===o(r)&&"[1]"==o([r])&&"[null]"==o([u])&&"null"==o(t)&&"[null,null,null]"==o([u,i,t])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==o({a:[r,e,!1,t,"\0\b\n\f\r	"]})&&"1"===o(t,r)&&"[\n 1,\n 2\n]"==o([1,2],t,1)&&'"-271821-04-20T00:00:00.000Z"'==o(new Date(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==o(new Date(864e13))&&'"-000001-01-01T00:00:00.000Z"'==o(new Date(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==o(new Date(-1))}catch(h){f=!1}}if(!s){return f}}if("json-parse"==n||s){n=l.parse;if("function"==typeof n){try{if(0===n("0")&&!n(!1)){r=n('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var p=5==r.a.length&&1===r.a[0];if(p){try{p=!n('"	"')}catch(d){}if(p){try{p=1!==n("01")}catch(v){}}}}}catch(m){p=!1}}if(!s){return p}}return f&&p}}var i={}.toString,s,o,u,f=typeof define==="function"&&define.amd,l="object"==typeof exports&&exports;l||f?"object"==typeof JSON&&JSON?l?(l.stringify=JSON.stringify,l.parse=JSON.parse):l=JSON:f&&(l=n.JSON={}):l=n.JSON||(n.JSON={});var c=new Date(-0xc782b5b800cec);try{c=-109252==c.getUTCFullYear()&&0===c.getUTCMonth()&&1===c.getUTCDate()&&10==c.getUTCHours()&&37==c.getUTCMinutes()&&6==c.getUTCSeconds()&&708==c.getUTCMilliseconds()}catch(h){}if(!r("json")){var p=r("bug-string-char-index");if(!c){var d=Math.floor,v=[0,31,59,90,120,151,181,212,243,273,304,334],m=function(e,t){return v[t]+365*(e-1970)+d((e-1969+(t=+(t>1)))/4)-d((e-1901+t)/100)+d((e-1601+t)/400)}}if(!(s={}.hasOwnProperty)){s=function(e){var n={},r;if((n.__proto__=t,n.__proto__={toString:1},n).toString!=i){s=function(e){var n=this.__proto__,e=e in(this.__proto__=t,this);this.__proto__=n;return e}}else{r=n.constructor;s=function(e){var t=(this.constructor||r).prototype;return e in this&&!(e in t&&this[e]===t[e])}}n=t;return s.call(this,e)}}o=function(e,n){var r=0,o,u,f;(o=function(){this.valueOf=0}).prototype.valueOf=0;u=new o;for(f in u){s.call(u,f)&&r++}o=u=t;if(r){r=r==2?function(e,t){var n={},r=i.call(e)=="[object Function]",o;for(o in e){!(r&&o=="prototype")&&!s.call(n,o)&&(n[o]=1)&&s.call(e,o)&&t(o)}}:function(e,t){var n=i.call(e)=="[object Function]",r,o;for(r in e){!(n&&r=="prototype")&&s.call(e,r)&&!(o=r==="constructor")&&t(r)}(o||s.call(e,r="constructor"))&&t(r)}}else{u=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];r=function(e,t){var n=i.call(e)=="[object Function]",r;for(r in e){!(n&&r=="prototype")&&s.call(e,r)&&t(r)}for(n=u.length;r=u[--n];s.call(e,r)&&t(r)){}}}r(e,n)};if(!r("json-stringify")){var g={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(e,t){return("000000"+(t||0)).slice(-e)},w=function(e){var t='"',n=0,r=e.length,i=r>10&&p,s;for(i&&(s=e.split(""));n<r;n++){var o=e.charCodeAt(n);switch(o){case 8:case 9:case 10:case 12:case 13:case 34:case 92:t=t+g[o];break;default:if(o<32){t=t+("\\u00"+y(2,o.toString(16)));break}t=t+(i?s[n]:p?e.charAt(n):e[n])}}return t+'"'},E=function(n,r,f,l,c,h,p){var v=r[n],g,S,x,T,N,C,k,L,A;try{v=r[n]}catch(O){}if(typeof v=="object"&&v){g=i.call(v);if(g=="[object Date]"&&!s.call(v,"toJSON")){if(v>-1/0&&v<1/0){if(m){x=d(v/864e5);for(g=d(x/365.2425)+1970-1;m(g+1,0)<=x;g++){}for(S=d((x-m(g,0))/30.42);m(g,S+1)<=x;S++){}x=1+x-m(g,S);T=(v%864e5+864e5)%864e5;N=d(T/36e5)%24;C=d(T/6e4)%60;k=d(T/1e3)%60;T=T%1e3}else{g=v.getUTCFullYear();S=v.getUTCMonth();x=v.getUTCDate();N=v.getUTCHours();C=v.getUTCMinutes();k=v.getUTCSeconds();T=v.getUTCMilliseconds()}v=(g<=0||g>=1e4?(g<0?"-":"+")+y(6,g<0?-g:g):y(4,g))+"-"+y(2,S+1)+"-"+y(2,x)+"T"+y(2,N)+":"+y(2,C)+":"+y(2,k)+"."+y(3,T)+"Z"}else{v=t}}else{if(typeof v.toJSON=="function"&&(g!="[object Number]"&&g!="[object String]"&&g!="[object Array]"||s.call(v,"toJSON"))){v=v.toJSON(n)}}}f&&(v=f.call(r,n,v));if(v===t){return"null"}g=i.call(v);if(g=="[object Boolean]"){return""+v}if(g=="[object Number]"){return v>-1/0&&v<1/0?""+v:"null"}if(g=="[object String]"){return w(v)}if(typeof v=="object"){for(n=p.length;n--;){if(p[n]===v){throw TypeError()}}p.push(v);L=[];r=h;h=h+c;if(g=="[object Array]"){S=0;for(n=v.length;S<n;A||(A=e),S++){g=E(S,v,f,l,c,h,p);L.push(g===u?"null":g)}n=A?c?"[\n"+h+L.join(",\n"+h)+"\n"+r+"]":"["+L.join(",")+"]":"[]"}else{o(l||v,function(t){var n=E(t,v,f,l,c,h,p);n!==u&&L.push(w(t)+":"+(c?" ":"")+n);A||(A=e)});n=A?c?"{\n"+h+L.join(",\n"+h)+"\n"+r+"}":"{"+L.join(",")+"}":"{}"}p.pop();return n}};l.stringify=function(e,t,n){var r,s,o;if(typeof t=="function"||typeof t=="object"&&t){if(i.call(t)=="[object Function]"){s=t}else{if(i.call(t)=="[object Array]"){o={};for(var u=0,a=t.length,f;u<a;f=t[u++],(i.call(f)=="[object String]"||i.call(f)=="[object Number]")&&(o[f]=1)){}}}}if(n){if(i.call(n)=="[object Number]"){if((n=n-n%1)>0){r="";for(n>10&&(n=10);r.length<n;r=r+" "){}}}else{i.call(n)=="[object String]"&&(r=n.length<=10?n:n.slice(0,10))}}return E("",(f={},f[""]=e,f),s,o,r,"",[])}}if(!r("json-parse")){var S=String.fromCharCode,x={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},T,N,C=function(){T=N=t;throw SyntaxError()},k=function(){for(var n=N,r=n.length,i,s,o,u,f;T<r;){f=n.charCodeAt(T);switch(f){case 9:case 10:case 13:case 32:T++;break;case 123:case 125:case 91:case 93:case 58:case 44:i=p?n.charAt(T):n[T];T++;return i;case 34:i="@";for(T++;T<r;){f=n.charCodeAt(T);if(f<32){C()}else{if(f==92){f=n.charCodeAt(++T);switch(f){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:i=i+x[f];T++;break;case 117:s=++T;for(o=T+4;T<o;T++){f=n.charCodeAt(T);f>=48&&f<=57||f>=97&&f<=102||f>=65&&f<=70||C()}i=i+S("0x"+n.slice(s,T));break;default:C()}}else{if(f==34){break}f=n.charCodeAt(T);for(s=T;f>=32&&f!=92&&f!=34;){f=n.charCodeAt(++T)}i=i+n.slice(s,T)}}}if(n.charCodeAt(T)==34){T++;return i}C();default:s=T;if(f==45){u=e;f=n.charCodeAt(++T)}if(f>=48&&f<=57){for(f==48&&(f=n.charCodeAt(T+1),f>=48&&f<=57)&&C();T<r&&(f=n.charCodeAt(T),f>=48&&f<=57);T++){}if(n.charCodeAt(T)==46){for(o=++T;o<r&&(f=n.charCodeAt(o),f>=48&&f<=57);o++){}o==T&&C();T=o}f=n.charCodeAt(T);if(f==101||f==69){f=n.charCodeAt(++T);(f==43||f==45)&&T++;for(o=T;o<r&&(f=n.charCodeAt(o),f>=48&&f<=57);o++){}o==T&&C();T=o}return+n.slice(s,T)}u&&C();if(n.slice(T,T+4)=="true"){T=T+4;return e}if(n.slice(T,T+5)=="false"){T=T+5;return false}if(n.slice(T,T+4)=="null"){T=T+4;return t}C()}}return"$"},L=function(t){var n,r;t=="$"&&C();if(typeof t=="string"){if(t[0]=="@"){return t.slice(1)}if(t=="["){for(n=[];;r||(r=e)){t=k();if(t=="]"){break}if(r){if(t==","){t=k();t=="]"&&C()}else{C()}}t==","&&C();n.push(L(t))}return n}if(t=="{"){for(n={};;r||(r=e)){t=k();if(t=="}"){break}if(r){if(t==","){t=k();t=="}"&&C()}else{C()}}(t==","||typeof t!="string"||t[0]!="@"||k()!=":")&&C();n[t.slice(1)]=L(k())}return n}C()}return t},A=function(e,t,n){n=O(e,t,n);n===u?delete e[t]:e[t]=n},O=function(e,t,n){var r=e[t],s;if(typeof r=="object"&&r){if(i.call(r)=="[object Array]"){for(s=r.length;s--;){A(r,s,n)}}else{o(r,function(e){A(r,e,n)})}}return n.call(e,t,r)};l.parse=function(e,n){var r,s;T=0;N=""+e;r=L(k());k()!="$"&&C();T=N=t;return n&&i.call(n)=="[object Function]"?O((s={},s[""]=r,s),"",n):r}}}f&&define(function(){return l})})(this)})();String.format=function(e){if(arguments.length<=1){return e}var t=arguments.length-2;for(var n=0;n<=t;n++){e=e.replace(new RegExp("\\{"+n+"\\}","gi"),arguments[n+1])}return e};var JSON=JSON||{};JSON.stringify=JSON.stringify||function(e){var t=typeof e;if(t!="object"||e===null){if(t=="string"){e='"'+e+'"'}return String(e)}else{var n,r,i=[],s=e&&e.constructor==Array;for(n in e){r=e[n];t=typeof r;if(t=="string"){r='"'+r+'"'}else{if(t=="object"&&r!==null){r=JSON.stringify(r)}}i.push((s?"":'"'+n+'":')+String(r))}return(s?"[":"{")+String(i)+(s?"]":"}")}};var sohaEmbed_K14_PlaceID="sohaEmbed_K14";var sohaEmbed_SourceDomain="http://s.soha.vn";var sohaEmbed_Kenh14_CssSource="http://soha4.vcmedia.vn/www/k14/k14-style.css";var sohaEmbed_Kenh14_utmSource="?utm_source=Kenh14&utm_medium=Kenh14Embed&utm_campaign=Kenh14BoxEmbed";var sohaEmbed_Kenh14_headUtmSource="?utm_source=Kenh14&utm_medium=Head_Kenh14Embed&utm_campaign=Head_Kenh14BoxEmbed";var sohaEmbed_K14=new function(){this.imageWidth=144;this.imageHeight=90;this.top=4;this.type=4;sohaEmbed_K14_bindData=function(data){data=eval("("+data+")");if(data!=null&&data.length>0){var topItemFormat='<a href="{0}" target="_blank" class="avatar" title="{2}"><img src="{4}" /></a><div class="title"><a href="{0}" target="_blank" title="{2}">{1}</a></div><div class="sapo">{3}</div>';var otherFormat='<li><a title="{2}" target="_blank" href="{0}">{1}</a></li>';var embedHtml="";embedHtml+='<div class="box-sohaEmbed-k14">';embedHtml+='<a href="http://soha.vn'+sohaEmbed_Kenh14_headUtmSource+'" target="_blank" title="tin tá»©c"></a>';embedHtml+="</div>";embedHtml+='<div class="content">';embedHtml+='<div class="feature clearfix">';var item=data[0];embedHtml+=String.format(topItemFormat,item.AbsoluteURL+sohaEmbed_Kenh14_utmSource,item.Title,item.EncodedTitle,item.Sapo,item.EmbedImage);embedHtml+="</div>";embedHtml+='<div class="other">';embedHtml+='<ul class="hotlist">';for(var i=1;i<data.length;i++){item=data[i];embedHtml+=String.format(otherFormat,item.AbsoluteURL+sohaEmbed_Kenh14_utmSource,item.Title,item.EncodedTitle)}embedHtml+="</ul>";embedHtml+="</div>";$("#"+sohaEmbed_K14_PlaceID).html(embedHtml);$("#"+sohaEmbed_K14_PlaceID).show()}};this.sohaEmbed_K14_getData=function(){var e="/Services/GetEmbedData.ashx?Top={0}&ImageWidth={1}&ImageHeight={2}&Type={3}";var t=sohaEmbed_SourceDomain+String.format(e,this.top,this.imageWidth,this.imageHeight,this.type);var n="";n+='<div id="'+sohaEmbed_K14_PlaceID+'" class="homepage-box clearfix">';n+="</div>";document.write(n);$("#"+sohaEmbed_K14_PlaceID).hide();$.ajax({type:"GET",url:t,dataType:"jsonp",success:function(e){if(JSON.stringify(e.Success)){sohaEmbed_K14_bindData(JSON.stringify(e.Data));$(".box-sohaEmbed-k14").css({background:"transparent url(http://soha4.vcmedia.vn/Images/Embed/embed-k14-bg3.png) 0 0 no-repeat",width:"347px",height:"53px"});$(".box-sohaEmbed-k14 a").css({display:"block",width:"100%",height:"100%"})}}})}};sohaEmbed_K14.sohaEmbed_K14_getData()