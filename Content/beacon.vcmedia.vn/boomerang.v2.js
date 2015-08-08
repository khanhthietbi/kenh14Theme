function BOOMR_check_doc_domain(e){var t;if(!e){if(window.parent===window||!document.getElementById("boomr-if-as"))return!0;e=document.domain}if(-1===e.indexOf("."))return!1;try{return t=window.parent.document,void 0!==t}catch(n){document.domain=e}try{return t=window.parent.document,void 0!==t}catch(n){e=e.replace(/^[\w\-]+\./,"")}return BOOMR_check_doc_domain(e)}BOOMR_start=(new Date).getTime(),BOOMR_check_doc_domain(),function(e){function t(e,t){var n=a(e,{detail:t});n&&BOOMR.setImmediate(function(){o.dispatchEvent?o.dispatchEvent(n):o.fireEvent&&o.fireEvent("onpropertychange",n)})}var n,i,o,r,a;e.parent!==e&&document.getElementById("boomr-if-as")&&"script"===document.getElementById("boomr-if-as").nodeName.toLowerCase()&&(e=e.parent,r=document.getElementById("boomr-if-as").src),o=e.document,void 0===e.BOOMR&&(e.BOOMR={}),BOOMR=e.BOOMR,BOOMR.version||(BOOMR.version="1",BOOMR.window=e,function(){try{void 0!==new e.CustomEvent("CustomEvent")&&(a=function(t,n){return new e.CustomEvent(t,n)})}catch(t){o.createEvent?a=function(e,t){var n=o.createEvent("CustomEvent");return t=t||{cancelable:!1,bubbles:!1},n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}:o.createEventObject&&(a=function(e,t){var n=o.createEventObject();return n.type=n.propertyName=e,n.detail=t.detail,n})}a||(a=function(){return void 0})}(),n={beacon_url:"",beacon_type:"AUTO",site_domain:e.location.hostname,user_ip:"",strip_query_string:!1,onloadfired:!1,handlers_attached:!1,events:{page_ready:[],page_unload:[],dom_loaded:[],visibility_changed:[],before_beacon:[],onbeacon:[],xhr_load:[],click:[],form_submit:[]},public_events:{before_beacon:"onBeforeBoomerangBeacon",onbeacon:"onBoomerangBeacon",onboomerangloaded:"onBoomerangLoaded"},vars:{},disabled_plugins:{},onclick_handler:function(t){var i;t||(t=e.event),t.target?i=t.target:t.srcElement&&(i=t.srcElement),3===i.nodeType&&(i=i.parentNode),i&&"OBJECT"===i.nodeName.toUpperCase()&&"application/x-shockwave-flash"===i.type||n.fireEvent("click",i)},onsubmit_handler:function(t){var i;t||(t=e.event),t.target?i=t.target:t.srcElement&&(i=t.srcElement),3===i.nodeType&&(i=i.parentNode),n.fireEvent("form_submit",i)},fireEvent:function(e,n){var i,o,r;if(e=e.toLowerCase(),!this.events.hasOwnProperty(e))return!1;for(r=this.events[e],i=0;i<r.length;i++)o=r[i],o[0].call(o[2],n,o[1]);return this.public_events.hasOwnProperty(e)&&t(this.public_events[e],n),!0}},i={t_lstart:null,t_start:BOOMR_start,t_end:null,url:r,utils:{objectToString:function(e,t,n){var i,o=[];if(!e||"object"!=typeof e)return e;if(void 0===t&&(t="\\n\\t"),n||(n=0),"[object Array]"===Object.prototype.toString.call(e)){for(i=0;i<e.length;i++)o.push(n>0&&null!==e[i]&&"object"==typeof e[i]?this.objectToString(e[i],t+("\\n\\t"===t?"\\t":""),n-1):encodeURIComponent(e[i]));t=","}else for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&o.push(n>0&&null!==e[i]&&"object"==typeof e[i]?encodeURIComponent(i)+"="+this.objectToString(e[i],t+("\\n\\t"===t?"\\t":""),n-1):encodeURIComponent(i)+"="+encodeURIComponent(e[i]));return o.join(t)},getCookie:function(e){if(!e)return null;e=" "+e+"=";var t,n;return n=" "+o.cookie+";",(t=n.indexOf(e))>=0?(t+=e.length,n=n.substring(t,n.indexOf(";",t))):null},setCookie:function(e,t,i){var r,a,s,l,u;if(!e||!n.site_domain)return BOOMR.debug("No cookie name or site domain: "+e+"/"+n.site_domain),!1;if(r=this.objectToString(t,"&"),a=e+"="+r,l=[a,"path=/","domain="+n.site_domain],i&&(u=new Date,u.setTime(u.getTime()+1e3*i),u=u.toGMTString(),l.push("expires="+u)),a.length<500){if(o.cookie=l.join("; "),s=this.getCookie(e),r===s)return!0;BOOMR.warn("Saved cookie value doesn't match what we tried to set:\\n"+r+"\\n"+s)}else BOOMR.warn("Cookie too long: "+a.length+" "+a);return!1},getSubCookies:function(e){var t,n,i,o,r=!1,a={};if(!e)return null;if("string"!=typeof e)return BOOMR.debug("TypeError: cookie is not a string: "+typeof e),null;for(t=e.split("&"),n=0,i=t.length;i>n;n++)o=t[n].split("="),o[0]&&(o.push(""),a[decodeURIComponent(o[0])]=decodeURIComponent(o[1]),r=!0);return r?a:null},removeCookie:function(e){return this.setCookie(e,{},-86400)},cleanupURL:function(e){return e?n.strip_query_string?e.replace(/\?.*/,"?qs-redacted"):e:""},hashQueryString:function(e,t){return e?(e.match(/^\/\//)&&(e=location.protocol+e),e.match(/^(https?|file):/)?(t&&(e=e.replace(/#.*/,"")),BOOMR.utils.MD5?e.replace(/\?([^#]*)/,function(e,t){return"?"+(t.length>10?BOOMR.utils.MD5(t):t)}):e):(BOOMR.error("Passed in URL is invalid: "+e),"")):e},pluginConfig:function(e,t,n,i){var o,r=0;if(!t||!t[n])return!1;for(o=0;o<i.length;o++)void 0!==t[n][i[o]]&&(e[i[o]]=t[n][i[o]],r++);return r>0},addListener:function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},removeListener:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},pushVars:function(e,t,n){var i,o,r=0;for(i in t)if(t.hasOwnProperty(i))if("[object Array]"===Object.prototype.toString.call(t[i]))for(o=0;o<t[i].length;++o)r+=BOOMR.utils.pushVars(e,t[i][o],i+"["+o+"]");else++r,e.push(encodeURIComponent(n?n+"["+i+"]":i)+"="+(void 0===t[i]||null===t[i]?"":encodeURIComponent(t[i])));return r},postData:function(e){var t=document.createElement("iframe"),i=document.createElement("form"),o=document.createElement("input");t.name="boomerang_post",t.style.display=i.style.display="none",i.method="POST",i.action=n.beacon_url,i.target=t.name,o.name="data",window.JSON?(i.enctype="text/plain",o.value=JSON.stringify(n.vars)):(i.enctype="application/x-www-form-urlencoded",o.value=e),document.body.appendChild(t),i.appendChild(o),document.body.appendChild(i),BOOMR.utils.addListener(t,"load",function(){document.body.removeChild(i),document.body.removeChild(t)}),i.submit()}},init:function(t){var r,a,s=["beacon_url","beacon_type","site_domain","user_ip","strip_query_string"];for(BOOMR_check_doc_domain(),t||(t={}),r=0;r<s.length;r++)void 0!==t[s[r]]&&(n[s[r]]=t[s[r]]);void 0!==t.log&&(this.log=t.log),this.log||(this.log=function(){});for(a in this.plugins)if(this.plugins.hasOwnProperty(a)){if(t[a]&&t[a].hasOwnProperty("enabled")&&t[a].enabled===!1){n.disabled_plugins[a]=1;continue}n.disabled_plugins[a]&&delete n.disabled_plugins[a],"function"==typeof this.plugins[a].init&&this.plugins[a].init(t)}return n.handlers_attached?this:(n.onloadfired||void 0!==t.autorun&&t.autorun===!1||(o.readyState&&"complete"===o.readyState?this.setImmediate(BOOMR.page_ready,null,null,BOOMR):e.onpagehide||null===e.onpagehide?i.utils.addListener(e,"pageshow",BOOMR.page_ready):i.utils.addListener(e,"load",BOOMR.page_ready)),i.utils.addListener(e,"DOMContentLoaded",function(){n.fireEvent("dom_loaded")}),function(){var t,r,a;for(t=function(){n.fireEvent("visibility_changed")},o.webkitVisibilityState?i.utils.addListener(o,"webkitvisibilitychange",t):o.msVisibilityState?i.utils.addListener(o,"msvisibilitychange",t):o.visibilityState&&i.utils.addListener(o,"visibilitychange",t),i.utils.addListener(o,"mouseup",n.onclick_handler),r=o.getElementsByTagName("form"),a=0;a<r.length;a++)i.utils.addListener(r[a],"submit",n.onsubmit_handler);e.onpagehide||null===e.onpagehide||i.utils.addListener(e,"unload",function(){BOOMR.window=e=null})}(),n.handlers_attached=!0,this)},page_ready:function(t){return t||(t=e.event),t||(t={name:"load"}),n.onloadfired?this:(n.fireEvent("page_ready",t),n.onloadfired=!0,this)},setImmediate:function(t,n,i,o){var r=function(){t.call(o||null,n,i||{}),r=null};e.setImmediate?e.setImmediate(r):e.msSetImmediate?e.msSetImmediate(r):e.webkitSetImmediate?e.webkitSetImmediate(r):e.mozSetImmediate?e.mozSetImmediate(r):setTimeout(r,10)},subscribe:function(t,o,r,a){var s,l,u,d;if(t=t.toLowerCase(),!n.events.hasOwnProperty(t))return this;for(u=n.events[t],s=0;s<u.length;s++)if(l=u[s],l[0]===o&&l[1]===r&&l[2]===a)return this;return u.push([o,r||{},a||null]),"page_ready"===t&&n.onloadfired&&this.setImmediate(o,null,r,a),"page_unload"===t&&(d=function(t){o&&o.call(a,t||e.event,r)},e.onpagehide||null===e.onpagehide?i.utils.addListener(e,"pagehide",d):i.utils.addListener(e,"unload",d),i.utils.addListener(e,"beforeunload",d)),this},addVar:function(e,t){if("string"==typeof e)n.vars[e]=t;else if("object"==typeof e){var i,o=e;for(i in o)o.hasOwnProperty(i)&&(n.vars[i]=o[i])}return this},removeVar:function(e){var t,i;if(!arguments.length)return this;for(i=1===arguments.length&&"[object Array]"===Object.prototype.toString.apply(e)?e:arguments,t=0;t<i.length;t++)n.vars.hasOwnProperty(i[t])&&delete n.vars[i[t]];return this},requestStart:function(e){var t=(new Date).getTime();return BOOMR.plugins.RT.startTimer("xhr_"+e,t),{loaded:function(){BOOMR.responseEnd(e,t)}}},responseEnd:function(e,t){BOOMR.plugins.RT.startTimer("xhr_"+e,t),n.fireEvent("xhr_load",{name:"xhr_"+e})},sendBeacon:function(){var t,i,r,a,s;BOOMR.debug("Checking if we can send beacon");for(t in this.plugins)if(this.plugins.hasOwnProperty(t)){if(n.disabled_plugins[t])continue;if(!this.plugins[t].is_complete())return BOOMR.debug("Plugin "+t+" is not complete, deferring beacon send"),!1}return n.vars.v=BOOMR.version,n.vars.u=BOOMR.utils.cleanupURL(o.URL.replace(/#.*/,"")),e!==window&&(n.vars["if"]=""),n.fireEvent("before_beacon",n.vars),n.beacon_url?(i=[],s=BOOMR.utils.pushVars(i,n.vars),this.setImmediate(n.fireEvent,"onbeacon",n.vars,n),s?(i=i.join("&"),"POST"===n.beacon_type?BOOMR.utils.postData(i):(r=n.beacon_url+(n.beacon_url.indexOf("?")>-1?"&":"?")+i,r.length>2e3&&"AUTO"===n.beacon_type?BOOMR.utils.postData(i):(BOOMR.debug("Sending url: "+r.replace(/&/g,"\\n\\t")),a=new Image,a.src=r)),!0):this):(BOOMR.debug("No beacon_url, but would have sent: "+BOOMR.utils.objectToString(n.vars)),!0)}},delete BOOMR_start,"number"==typeof BOOMR_lstart?(i.t_lstart=BOOMR_lstart,delete BOOMR_lstart):"number"==typeof BOOMR.window.BOOMR_lstart&&(i.t_lstart=BOOMR.window.BOOMR_lstart),function(){var t;e.YAHOO&&e.YAHOO.widget&&e.YAHOO.widget.Logger?i.log=e.YAHOO.log:e.Y&&e.Y.log?i.log=e.Y.log:"object"==typeof console&&void 0!==console.log&&(i.log=function(e,t,n){console.log(n+": ["+t+"] "+e)}),t=function(e){return function(t,n){return this.log(t,e,"boomerang"+(n?"."+n:"")),this}},i.debug=t("debug"),i.info=t("info"),i.warn=t("warn"),i.error=t("error")}(),function(){var e;for(e in i)i.hasOwnProperty(e)&&(BOOMR[e]=i[e])}(),BOOMR.plugins=BOOMR.plugins||{},t("onBoomerangLoaded",{BOOMR:BOOMR}))}(window),function(){var e,t;BOOMR=BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},t=[];t.l = { name: "10KB.png", size: 11242, timeout: 3000 },e={data_center_id:"",base_url:"",timeout:1e4,latency_runs:3,user_ip:"",cookie_exp:3600,cookie:"BA",results:[],latencies:[],latency:null,aborted:!1,complete:!0,running:!1,initialized:!1,lat_results:{},ncmp:function(e,t){return e-t},iqr:function(e){var t,n,i,o,r=e.length-1,a=[];if(t=(e[Math.floor(.25*r)]+e[Math.ceil(.25*r)])/2,n=(e[Math.floor(.75*r)]+e[Math.ceil(.75*r)])/2,i=1.5*(n-t),0===i)return e;for(r++,o=0;r>o&&e[o]<n+i;o++)e[o]>t-i&&a.push(e[o]);return a},calc_latency:function(){var e,t,n,i,o,r,a,s,l=0,u=0;for(s=this.latencies.shift(),a=this.iqr(this.latencies.sort(this.ncmp)),t=a.length,BOOMR.debug("latencies: "+this.latencies,"bw"),BOOMR.debug("lat_filtered: "+a,"bw"),e=0;t>e;e++)l+=a[e],u+=a[e]*a[e];return n=Math.round(l/t),o=Math.sqrt(u/t-l*l/(t*t)),r=(1.96*o/Math.sqrt(t)).toFixed(2),o=o.toFixed(2),i=Math.round((a[Math.floor(t/2)]+a[Math.ceil(t/2)])/2),{mean:n,median:i,stddev:o,stderr:r}},defer:function(e){var t=this;return setTimeout(function(){e.call(t),t=null},10)},load_img:function(e,n,i){var o=this.base_url+t[e].name+"?t="+(new Date).getTime()+Math.random(),r=0,a=0,s=new Image,l=this;s.onload=function(){s.onload=s.onerror=null,s=null,clearTimeout(r),i&&i.call(l,e,a,n,!0),l=i=null},s.onerror=function(){s.onload=s.onerror=null,s=null,clearTimeout(r),i&&i.call(l,e,a,n,!1),l=i=null},r=setTimeout(function(){i&&i.call(l,e,a,n,null)},t[e].timeout+Math.min(400,this.latency?this.latency.mean:400)),a=(new Date).getTime(),s.src=o},lat_loaded:function(e,t,n,i){if(n===this.latency_runs+1){if(null!==i){var o=(new Date).getTime()-t;this.latencies.push(o)}0===this.latency_runs&&(this.latency=this.calc_latency()),this.defer(this.iterate)}},finish:function(){this.latency||(this.latency=this.calc_latency());var e={};return e[this.data_center_id+"_lat"]=this.latency.mean,e[this.data_center_id+"_lat_err"]=parseFloat(this.latency.stderr,10),BOOMR.addVar(e),this.lat_results[this.data_center_id+"_lat"]=this.latency.mean,this.lat_results[this.data_center_id+"_lat_err"]=parseFloat(this.latency.stderr,10),this.running=!1,this.dc_count--,this.dc_count<=0?(this.complete=!0,this.lat_results.ip=this.user_ip,this.lat_results.t=(new Date).getTime(),!isNaN(e[this.data_center_id+"_lat"])&&e[this.data_center_id+"_lat"]>0&&BOOMR.utils.setCookie(this.cookie,this.lat_results,this.user_ip?this.cookie_exp:0),BOOMR.plugins.SpeedTest.send_beacon()):(this.complete=!1,BOOMR.plugins.SpeedTest.run())},iterate:function(){return this.aborted?!1:void(this.latency_runs?this.latency_runs&&this.load_img("l",this.latency_runs--,this.lat_loaded):this.finish())},setVarsFromCookie:function(t){var n,i=t.ip.replace(/\.\d+$/,"0"),o=parseInt(t.t,10),r=this.user_ip.replace(/\.\d+$/,"0"),a=Math.round((new Date).getTime()/1e3);if(i===r&&o>=a-e.cookie_exp){n={};for(dc in e.dcs)dc_id=e.dcs[dc].name,n[dc_id+"_lat"]=t[dc_id+"_lat"],n[dc_id+"_lat_err"]=t[dc_id+"_lat_err"];return BOOMR.addVar(n),!0}return!1}},BOOMR.plugins.SpeedTest={init:function(t){var n;if(e.initialized)return this;BOOMR.utils.pluginConfig(e,t,"SpeedTest",["timeout","nruns","cookie","cookie_exp"]),t&&t.user_ip&&(e.user_ip=t.user_ip),e.results=[],e.latencies=[],e.latency=null,e.complete=!1,e.aborted=!1,e.dc_count=t.SpeedTest.data_centers.length,e.dcs=t.SpeedTest.data_centers,e.initialized=!0;var i=e.cookie;return n=BOOMR.utils.getSubCookies(BOOMR.utils.getCookie(i)),n&&e.setVarsFromCookie(n)||(BOOMR.subscribe("page_ready",this.run,null,this),BOOMR.subscribe("page_unload",this.skip,null,this)),this},run:function(){return e.dc_count<=0?(e.complete=!0,this):(e.data_center_id=e.dcs[parseInt(e.dc_count)-1].name,e.base_url=e.dcs[e.dc_count-1].base_url,"https:"===BOOMR.window.location.protocol?(BOOMR.info("HTTPS detected, skipping bandwidth test","bw"),e.complete=!0,BOOMR.sendBeacon(),this):(e.running=!0,e.latency_runs=3,e.results=[],e.latencies=[],e.latency=null,e.aborted=!1,setTimeout(this.abort,e.timeout),e.defer(e.iterate),this))},abort:function(){return e.aborted=!0,e.running,this},skip:function(){return e.complete||(e.complete=!0,BOOMR.sendBeacon()),this},is_complete:function(){return e.complete},send_beacon:function(){return BOOMR.sendBeacon(),this}}}();
BOOMR.init({
    user_ip:"42.114.131.184",
    log:null,
    beacon_url:"http://beacon.vcmedia.vn/beacon",
    SpeedTest:{
        cookies:["dc1_BA","dc2_BA"],
        data_centers:[{name: "dc1", base_url: "http://hn.rum.vccorp.vn/images/"},
                      {name: "dc2", base_url: "http://hcm.rum.vccorp.vn/images/"},
                      {name: "dc3", base_url: "http://vt.rum.vccorp.vn/images/"}
        ]
    }
    }
);