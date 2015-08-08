/* DOM variables*/
var __lbd = document;
var __dwin = window;

/* Logging variables*/
var _laq; // Log app infor
var __ldn = "auto"; // (auto|none|domain) set the domain name for cookies
var __lhash = "on"; // (on|off) unique domain hash for cookies
var __ltimeout = "1800"; // set the inactive session timeout in seconds
var __lpostpath = "http://ctr1.channelvn.net/Handlers/Post.ashx";
var __lgifpath = "http://log1.channelvn.net/__ltm.gif"; // set the web path to the __ltm.gif file
//var __lgifpath = "http://lg.channelvn.net/__ltm.gif"; // set the web path to the __ltm.gif file
//var __vgifpath = "http://localhost:17197/__vtm.gif"; // set the web path to the __vtm.gif file
//var __vgifpath = "http://m11.channelvn.net/__vtm.gif"; // set the web path to the __vtm.gif file
var __agifpath = "http://log1.channelvn.net/__atm.gif"; // set the web path to the __atm.gif file
//var __agifpath = "http://m11.channelvn.net/__atm.gif"; // set the web path to the __ltm.gif file
var __ltcp = "/"; // the cookie path for tracking
var __ldm = "";
var __ak;
var __lCh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; // Encode base 64 character
// Pattern regex for news details
var __atmp = /^\/([a-z0-9\-]+)\/[a-z0-9\-]+-([0-9]{14,})\.chn$/ig;
// All link to track appear
var __atmr;

var __ltma;
var __ltmb;
var __ltmc;
var __ltmk;
var __ltmts;
var __ltmq;
var __ltmqm;
// Param B for visit
var __ltmv;

/* Func Utils*/
// Get Cookie l - document cookie, n - cookie name, s - seperate
var _lGC = function (l, n, s) {
    if (!l || l == "" || !n || n == "" || !s || s == "") return null;
    var i, i2, i3, c = null;
    i = l.indexOf(n);
    i3 = n.indexOf("=") + 1;
    if (i > -1) {
        i2 = l.indexOf(s, i);
        if (i2 < 0) {
            i2 = l.length;
        }
        c = l.substring((i + i3), i2);
    }
    return c;
},

// Get Hash
    _lH = function (d) {
        if (!d || d == "") return 1;
        var h = 0,
            g = 0;
        for (var i = d.length - 1; i >= 0; i--) {
            var c = parseInt(d.charCodeAt(i));
            h = ((h << 6) & 0xfffffff) + c + (c << 14);
            if ((g = h & 0xfe00000) != 0) h = (h ^ (g >> 21));
        }
        return h;
    },

// Domain Hash - Get hash of domain
    _lDoH = function () {
        if (!__ldn || __ldn == "" || __ldn == "none") {
            __ldn = "";
            return 1;
        }
        if (__ldn == "auto") {
            var d = __lbd.domain;
            if (d.substring(0, 4) == "www.") {
                d = d.substring(4, d.length);
            }
            __ldn = d;
        }
        __ldn = __ldn.toLowerCase();
        if (__lhash == "off") return 1;
        return _lH(__ldn);
    },

// Encode url
    _lES = function (s, u) {
        if (typeof (encodeURIComponent) == 'function') {
            if (u) return encodeURI(s);
            else return encodeURIComponent(s);
        } else {
            return escape(s);
        }
    },

// UTF-8 Encode
    _lUE = function (s) {
        s = s.replace(/\x0d\x0a/g, "\x0a");
        var o = "";
        for (var n = 0; n < s.length; n++) {
            var c = s.charCodeAt(n);
            if (c < 128) {
                o += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                o += String.fromCharCode((c >> 6) | 192);
                o += String.fromCharCode((c & 63) | 128);
            } else {
                o += String.fromCharCode((c >> 12) | 224);
                o += String.fromCharCode(((c >> 6) & 63) | 128);
                o += String.fromCharCode((c & 63) | 128);
            }
        }
        return o;
    },
// Encode base64
    _lEBa = function (s) {
        var o = "";
        var _c1, _c2, _c3, _e1, _e2, _e3, _e4;
        var i = 0;
        s = _lUE(s);
        while (i < s.length) {
            _c1 = s.charCodeAt(i++);
            _c2 = s.charCodeAt(i++);
            _c3 = s.charCodeAt(i++);
            _e1 = _c1 >> 2;
            _e2 = ((_c1 & 3) << 4) | (_c2 >> 4);
            _e3 = ((_c2 & 15) << 2) | (_c3 >> 6);
            _e4 = _c3 & 63;
            if (isNaN(_c2)) {
                _e3 = _e4 = 64;
            } else if (isNaN(_c3)) {
                _e4 = 64;
            }
            o = o + __lCh.charAt(_e1) + __lCh.charAt(_e2) + __lCh.charAt(_e3) + __lCh.charAt(_e4);
        }
        return o;
    },
// Session Expire - Get Session Expire date in 30 minutes
    _lSE = function () {
        return (new Date((new Date()).getTime() + __ltimeout * 1000)).toGMTString();
    },
// Long Expire - Get Expire date in one year
    _lLE = function () {
        return (new Date((new Date()).getTime() + 63072000000)).toGMTString();
    };
/* End Func Utils*/
// Param C - Generate C param - Session of the domain
var _lPC = function () {
    var dc = __lbd.cookie;
    if (dc) {
        __ltmc = _lGC(dc, "__ltmc=", ";");
        if (__ltmc) {
            return true;
        }
    }
    var d = _lDoH();
    if (d) {
        __ltmc = d;
        __lbd.cookie = "__ltmc=" + __ltmc + "; path=" + __ltcp + "; domain=" + __ldn + ";";
        return true;
    }
    __ltmc = "-";
    return false;
},

// Param B - Generate B param
_lPB = function () {
    var dc = __lbd.cookie;
    if (dc) {
        __ltmb = _lGC(dc, "__ltmb=", ";");
        if (__ltmb) {
            return true;
        }
    }
    if (__ltmc) {
        __ltmb = __ltmc + "." + _lH("ltmb-" + __ltmc);
        var e = _lSE();
        __lbd.cookie = "__ltmb=" + __ltmb + "; path=" + __ltcp + "; expires=" + e + "; domain=" + __ldn + ";";
        return true;
    }

    __ltmb = "-";
    return false;
},
// Param A - Generate A param
_lPA = function () {
    var dc = __lbd.cookie;
    if (dc) {
        __ltma = _lGC(dc, "__ltma=", ";");
        if (__ltma) {
            return true;
        }
    }
    if (__ltmb) {
        __ltma = __ltmb + "." + _lH("ltma-" + __ltmb);
        var e = _lLE();
        __lbd.cookie = "__ltma=" + __ltma + "; path=" + __ltcp + "; expires=" + e + "; domain=" + __ldn + ";";
        return true;
    }
    __ltma = "-";
    return false;
},
// Get param visit
_lPV = function () {
    var dc = __lbd.cookie;
    if (dc) {
        var ltms = _lGC(dc, "__ltms=", ";");
        var ltmv = _lGC(dc, "__ltmv=", ";");
        if (ltms && ltmv) {
            __ltmv = ltmv;
            return true;
        }
    }
    __ltmv = null;
    return false;
},
// Set param visit
_lPVS = function () {
    if (_lPC() && _lPB() && _lPA()) {
        var ltmv = __ltmb + "." + _lH("ltmv-" + __ltma);
        var e = _lSE();
        __lbd.cookie = "__ltmv=" + ltmv + "; path=" + __ltcp + "; expires=" + e + ";";
        __lbd.cookie = "__ltms=" + ltmv + "; path=" + __ltcp + ";";
        return true;
    }
    return false;
},
// Param Timespan
_lPTs = function () {
    var date = new Date();
    __ltmts = date.getTime();
    return true;
},
// Get Client User info
_lBIf = function () {

    var dm1 = '';

    if (document.domain.split('.').length - 1 > 1) {
        dm1 = document.domain.substring(document.domain.length, document.domain.indexOf('.') + 1);
    }
    else {
        dm1 = document.domain;
    }

    var sr = "-",
        sc = "-",
        ul = "-",
        fl = "-",
        cs = "-",
        ur = 1,
        je = 1;
    var n = navigator;
    if (self.screen) {
        sr = screen.width + "x" + screen.height;
        sc = screen.colorDepth + "-bit";
    } else if (self.java) {
        var j = java.awt.Toolkit.getDefaultToolkit();
        var s = j.getScreenSize();
        sr = s.width + "x" + s.height;
    }
    if (n.language) {
        ul = n.language.toLowerCase();
    } else if (n.browserLanguage) {
        ul = n.browserLanguage.toLowerCase();
    }
    if (__lbd.characterSet) cs = _lES(__lbd.characterSet);
    else if (__lbd.charset) cs = _lES(__lbd.charset);
    if (__lbd.referrer) {
        var d = dm1;
        if (d.substring(0, 4) == "www.") {
            d = d.substring(4, d.length);
        }

        if (__lbd.referrer.substring(0, 30).indexOf(d) != -1) {
            ur = 0;
        }
    }

    return "&ltmcs=" + cs + "&ltmsr=" + sr + "&ltmsc=" + sc + "&ltmul=" + ul + "&ltmr=" + ur + "&rf=" + __lbd.referrer;
},
// Logging info
_lLIf = function () {
    if (_lPC()) {
        var ts = _lPTs();
        if (ts && _lPB()) {
            var la = _lPA();
            __ltmk = la ? _lH(__ltma + __ltmb + __ltmc + __ak + __ltmts) : 0;
            __ltmq = "&ltma=" + __ltma + "&ltmb=" + __ltmb + "&ltmc=" + __ltmc + "&ltmts=" + __ltmts + "&ltmk=" + __ltmk + "&ltmap=" + __ak;
            return true;
        }
    }
    return false;
},
_lCF = function (f) {
    window[f].call(null, Array.prototype.slice.call(arguments, 1));
},
// Get Appearance link
_aL = function (regex) {
    __atmr = '';
    var arr = document.getElementsByTagName("a");
    for (var i = 0; i < arr.length; i++) {
        var url = arr[i].getAttribute("href");
        if (url != null && url != '') {
            var match = regex.exec(url);
            if (match == null) continue;

            if (__atmr != '')
                __atmr += "," + match[1] + "|" + match[2];
            else {
                __atmr = match[1] + "|" + match[2];
            }
        }
    }
    //    $('a').each(function () {
    //        if (regex.test($(this).attr("href"))) {
    //            if (__atmr != '')
    //                __atmr += "," + $(this).attr("href");
    //            else {
    //                __atmr = $(this).attr("href");
    //            }
    //        }
    //    });
    return true;
},
// Ajax post function
_lAP = function (url, query) {
    var xmlhttp;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(query);
};
/* Public function */
// Set App key
var _setApp = function (i) {
    __ak = i;
},
_setParams = function (s) {
    var obj = eval("(" + s + ")");
    __ltmqm = "";
    if (obj.catId) __ltmqm += "&catid=" + obj.catId;
    if (obj.tagId) __ltmqm += "&tagid=" + obj.tagId;
    if (obj.newsId) __ltmqm += "&newsid=" + obj.newsId;
},
// Track pageview
_trackPageview = function () {
    if (_lLIf()) {
        var bi = _lBIf();
        var u = Math.round(Math.random() * 2147483647);
        var i = new Image(1, 1);
        i.src = __lgifpath + "?" + "utmu=" + u + __ltmq + bi;
        i.onload = function () {
            _lVoid();
        };

        // Log visit
        //        _lPV();
        //        if (!__ltmv) {
        //            i = new Image(1, 1);
        //            i.src = __vgifpath + "?" + "utmu=" + u + __ltmq + bi;
        //            i.onload = function () {
        //                _lVoid();
        //            };
        //            _lPVS();
        //        }
    }
},
// Track Appearance
_trackAppearance = function (regex) {
    if (typeof (regex) == 'undefined' || regex == null) {
        regex = __atmp;
    }
    if (_aL(regex)) {
        if (_lLIf()) {
            var bi = _lBIf();
            var u = Math.round(Math.random() * 2147483647);
            _lAP(__agifpath, "utmu=" + u + __ltmq + bi + "&atmr=" + __atmr);
        }
    }
};
// Void function
function _lVoid() {
    return;
}

(function () {
    if (_laq && _laq.length != 0) {
        for (var i = 0; i < _laq.length; i++) {
            var it = _laq[i];
            if (typeof (it.length) == 'undefined') continue;
            if (it.length == 1) {
                window[it[0]].call(null, null);
            }
            else {
                var f = it[0];
                it.splice(f, 1);
                window[f].call(null, it);
            }
        }
    }
})();



var ak = __ak+'';

var arrLink = ',';

var linkPost = '';

(function () {
    setTimeout(CTRLog, 2000);
})();

$(window).scroll(function () {
    clearTimeout($.data(this, 'scrollTimer'));

    $.data(this, 'scrollTimer', setTimeout(function () {
        // do something

        CTRLog();

    }, 3000));

});


function CTRLog() {
    linkPost = '';

    var dm1 = '';

    if (document.domain.split('.').length - 1 > 1) {
        dm1 = document.domain.substring(document.domain.length, document.domain.indexOf('.') + 1);
    }
    else {
        dm1 = document.domain;
    }

    $('a').each(function () {

        if ($(this).attr('href') != undefined
           && $(this).attr('href').length > 30
           && ($(this).attr('href').indexOf('http') == -1
               || $(this).attr('href').indexOf('http://' + dm1) > -1)) {
            if ($(this).offset().top > $(window).scrollTop()
             && $(this).offset().top < $(window).height() + $(window).scrollTop()) {

                if (arrLink.indexOf($(this).attr('href')) == -1) {
                    arrLink = arrLink + $(this).attr('href') + ',';

                    linkPost = linkPost + ',' + $(this).attr('href');
                }
            }
        }
    })


    if (linkPost != '') {
        console.log("post");
		$.ajax({type: "POST",url: __lpostpath,data: {ltmap:ak, data:linkPost},dataType:'script'});
    }
}



function GenUID(min, max) {
    return (new Date().getTime()) + '.' + (Math.random() * (max - min) + min);
}

function RealTime() {
    var CNID = '';

    if ($.cookie("CID1") == null) {
        CNID = GenUID(0, 99999);

        $.cookie("CID1", CNID, { expires: 100, path:'/'});

        CNID = $.cookie("CID1");

        if (CNID != '') {
            $.ajax({type: "POST",url: "http://ctr1.channelvn.net/handlers/RealTime.ashx",data: {ltmap:ak, cnvnID:CNID},dataType:'script'});
        }
    }
    else {
        CNID = $.cookie("CID1");

        if (CNID != '') {
			$.ajax({type: "POST",url: "http://ctr1.channelvn.net/handlers/RealTime.ashx",data: {ltmap:ak, cnvnID:CNID},dataType:'script'});
        }
    }
}

RealTime();

