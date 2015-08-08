$( document ).ready(function() {
    if(document.getElementById('mingid_comment_adv_iframe') !== null) {
		document.getElementById('mingid_comment_adv_iframe').style.height = "1000px";
		includeCssFileAma();
		var html = '<a class="mingid-new-stories" onclick="hide_popup1()" href="javascript://" style="display:none;">';
		html += '<span class="mingid-up-arrow"></span>';
		html += 'Có <span class="mingid_count_stories mingid-red"></span> nội dung mới </a>';

		$('.bodycontent').prepend(html);
	}

    if ($(".quick_jam_btn")[0]){
        $(".quick_jam_btn").hide();

        $(".quick_jam_btn").live('click', function() {
            return false;
            $(".jam_top_slide_content_wrap").css({"overflow": "visible"});
            $(".main").css({"overflow": "hidden"});
            flagautoTopHome = false;
            var form_id = $(this).attr("id");
            $("#mingid_comment_iframe_quick_jam_"+form_id).show();
            $("#quick_jam_form_"+form_id).show();
            $(this).show();
            $(this).css("position", "relative");

                //return false;
        })
        // Do something if class exists
    }


});


function getElementTopMing(e) {
    if (document.getElementById) var t = document.getElementById(e);
    else document.all && (t = document.all[e]); if (null != t) {
        yPos = t.offsetTop;
        for (tempEl = t.offsetParent; null != tempEl;) yPos += tempEl.offsetTop, tempEl = tempEl.offsetParent;
        return yPos
    }
    return 0
}
var mingid_iframe_comment_static = "mingid_comment_iframe";
var mingid_comment_iframe_height = 238;
var mingid_comment_cover = "mingid_comments_content";
function ifrResize() {
    if(document.getElementById(mingid_iframe_comment_static) !== null) {
        var e = document,
            t = e.getElementById(mingid_iframe_comment_static),
            n = e.location.href,
            r = n.toString().split("#mh_");
        temp_url = n.toString().split("#itemComment_");

        var i = document.getElementById(mingid_iframe_comment_static).src,
            n = jQuery("#" + mingid_comment_cover).offset();
        2 == temp_url.length && (2 > i.toString().split("&com=").length && (i = i + "&com=" + temp_url[1], document.getElementById(mingid_iframe_comment_static).src = i), i = parseInt(n.top) + 200, scroll(0, i), window.history.replaceState("", "", urlabcd()));
        2 == r.length && (i = r[1].toString().split("_"), 2 == i.length ? (t.style.height = i[0] + "px", i = 1 == i[1] ? parseInt(n.top) + parseInt(r[1]) - 250 : parseInt(n.top) + parseInt(r[1]) - 100, scroll(0, i)) : e.getElementById(mingid_iframe_comment_static).style.height = r[1] + "px", window.history.replaceState("", "", urlabc()), e.referrer.split("/")[2] == e.domain && (t = 999, -1 != navigator.appVersion.indexOf("MSIE") && (t = parseFloat(navigator.appVersion.split("MSIE")[1])), 999 == t && window.history.go(-1)));
        t = e.getElementById(mingid_iframe_comment_static).height;
        e = e.getElementById(mingid_comment_cover);
        setTimeout("ifrResize()", MINGID_CONS.TIMEOUT_IFR)
    }
}

function listener(e) {
    if (e.origin === "http://" + MINGID_COMMENT_DOMAIN) {
        var temp = e.data.split(";");

        if(e.data == 'unbind') {
			flag = true;
			//alert(flag);
        } else if(temp[0] === 'close_form') {
            flagautoTopHome = true;
            $(".jam_top_slide_content_wrap").css({"overflow": "hidden"});
            $(".main").removeAttr('style');
            $("#"+temp[1]).hide();
		} else if(e.data == 'popup') {
			if($('.mingid-new-stories').length) {
				$('.mingid-new-stories').show();
				var mingid_count_stories = parseInt($('.mingid_count_stories').html());
				var mingid_count_stories = $('.mingid_count_stories').html();
				if (typeof val === "undefined") {
					mingid_count_stories = 0;
				}
				mingid_count_stories = mingid_count_stories + 1;
				$('.mingid_count_stories').html(mingid_count_stories);
			}
		} else {
            if(temp[1] == 'quickjam') {
                var mingid_comment_iframe_quick_jam = temp[2];
                console.log(mingid_comment_iframe_quick_jam);
                document.getElementById(mingid_comment_iframe_quick_jam).style.borderRadius = '5px'; // standard
                document.getElementById(mingid_comment_iframe_quick_jam).style.MozBorderRadius = '5px'; // Mozilla
                document.getElementById(mingid_comment_iframe_quick_jam).style.WebkitBorderRadius = '5px'; // WebKit
                document.getElementById(mingid_comment_iframe_quick_jam).style.height = temp[0] + "px";
            } else {

                var t = e.data.split("_"),
                    n = jQuery("#" + mingid_comment_cover).offset();
                var r = e.data.split(":");

                if (r.length >= 2) {

                    mingid_iframe_comment_statics = r[1];
                    var i = mingid_iframe_comment_static.split("_");
                    document.getElementById(mingid_iframe_comment_statics).style.height = r[0] + "px";

                    if (r.length == 4) {
                        if (r[3] == 1 && r[2] == "69e770cffb9ce06ca28628a57b804128") {
                            document.getElementById(mingid_iframe_comment_statics).style.maxHeight = r[0] + "px"
                        }
                    }
                } else {
    				2 == t.length ? (e = parseInt(n.top) + parseInt(t[0]), h = parseInt(n.top) + parseInt(t[1]), $("html,body").animate({
    					scrollTop: h
    				}, "slow"), document.getElementById(mingid_iframe_comment_static).style.height = t[0] + "px") : document.getElementById(mingid_iframe_comment_static).style.height = e.data + "px"
    			}
            }
		}
    }
 //    else if(e.origin === "http://" + MINGID_COMMENT_JAM_DOMAIN) {
 //        var temp = e.data.split(";");
	// 	if(e.data == 'unbind') {
	// 		flag = true;
	// 		//alert(flag);
 //        } else if(temp[0] === 'close_form') {
 //            flagautoTopHome = true;
 //            $(".jam_top_slide_content_wrap").css({"overflow": "hidden"});
 //            $(".main").removeAttr('style');
 //            $("#"+temp[1]).hide();
	// 	} else if(e.data == 'popup') {
	// 		if($('.mingid-new-stories').length) {
	// 			$('.mingid-new-stories').show();
	// 			var mingid_count_stories = parseInt($('.mingid_count_stories').html());
	// 			var mingid_count_stories = $('.mingid_count_stories').html();
	// 			if (typeof val === "undefined") {
	// 				mingid_count_stories = 0;
	// 			}
	// 			mingid_count_stories = mingid_count_stories + 1;
	// 			$('.mingid_count_stories').html(mingid_count_stories);
	// 		}
	// 	} else {
 //            var t = e.data.split("_"),
 //                n = jQuery("#" + mingid_comment_cover).offset();
 //            var r = e.data.split(":");
 //            if (r.length >= 2) {
 //                mingid_iframe_comment_statics = r[1];
 //                var i = mingid_iframe_comment_static.split("_");
 //                document.getElementById(mingid_iframe_comment_statics).style.height = r[0] + "px";
 //            }
 //            2 == t.length ? (e = parseInt(n.top) + parseInt(t[0]), h = parseInt(n.top) + parseInt(t[1]), $("html,body").animate({
 //                scrollTop: h
 //            }, "slow"), document.getElementById(mingid_iframe_comment_static).style.height = t[0] + "px") : document.getElementById(mingid_iframe_comment_static).style.height = e.data + "px"
 //        }
	// }
}
"undefined" == typeof jQuery && function () {
    var e = document,
        t = e.createElement("script");
    t.type = "text/javascript";
    t.async = !0;
    t.src = "http://mingid.vcmedia.vn/js/jquery-1.7.2.min.js";
    e = e.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
}();
function hide_popup() {
	var scroll_top = jQuery("#" + mingid_comment_cover).offset().top + 200;
	$("html,body").animate({scrollTop: scroll_top}, "slow");

	setTimeout(function(){
		$('.mingid-new-stories').hide('slow');
		$('.mingid_count_stories').html(0);
	}
	,3000);
}
function hide_popup1() {
	var scroll_top = jQuery("#" + mingid_comment_cover).offset().top + 200;
	$("html,body").animate({scrollTop: "350px"}, "slow");

	setTimeout(function(){
		$('.mingid-new-stories').hide('slow');
		$('.mingid_count_stories').html(0);
	}
	,3000);
}

(function (e, t, n) {
    e.fn.MIDjScrollPane = function (i) {
        function s(i, s) {
            function o(s) {
                var W, st, ot, ut, at, ft = !1,
                    ct = !1;
                T = s;
                if (C === n) ut = i.scrollTop(), at = i.scrollLeft(), i.css({
                    overflow: "hidden",
                    padding: 0
                }), k = i.innerWidth() + rt, L = i.innerHeight(), i.width(k), C = e('<div class="jspPane" />').css("padding", nt).append(i.children()), A = e('<div class="jspContainer" />').css({
                    width: k + "px",
                    height: L + "px"
                }).append(C).appendTo(i);
                else {
                    i.css("width", "");
                    if (ft = T.stickToBottom) ft = M - L, ft = 20 < ft && 10 > ft - S();
                    if (ct = T.stickToRight) ct = O - k, ct = 20 < ct && 10 > ct - E();
                    if (ot = i.innerWidth() + rt != k || i.outerHeight() != L) k = i.innerWidth() + rt, L = i.innerHeight(), A.css({
                        width: k + "px",
                        height: L + "px"
                    });
                    if (!ot && it == O && C.outerHeight() == M) {
                        i.width(k);
                        return
                    }
                    it = O;
                    C.css("width", "");
                    i.width(k);
                    A.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                C.css("overflow", "auto");
                O = s.contentWidth ? s.contentWidth : C[0].scrollWidth;
                M = C[0].scrollHeight;
                C.css("overflow", "");
                _ = O / k;
                D = M / L;
                P = 1 < D;
                H = 1 < _;
                if (!H && !P) i.removeClass("jspScrollable"), C.css({
                    top: 0,
                    width: A.width() - rt
                }), A.unbind(lt), C.find(":input,a").unbind("focus.jsp"), i.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), c();
                else {
                    i.addClass("jspScrollable");
                    if (s = T.maintainPosition && (F || R)) W = E(), st = S();
                    P && (A.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), U = A.find(">.jspVerticalBar"), z = U.find(">.jspTrack"), B = z.find(">.jspDrag"), T.showArrows && ($ = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", l(0, -1)).bind("click.jsp", x), J = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", l(0, 1)).bind("click.jsp", x), T.arrowScrollOnHover && ($.bind("mouseover.jsp", l(0, -1, $)), J.bind("mouseover.jsp", l(0, 1, J))), f(z, T.verticalArrowPositions, $, J)), X = L, A.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                        X -= e(this).outerHeight()
                    }), B.hover(function () {
                        B.addClass("jspHover")
                    }, function () {
                        B.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", x);
                        B.addClass("jspActive");
                        var n = t.pageY - B.position().top;
                        e("html").bind("mousemove.jsp", function (e) {
                            p(e.pageY - n, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", h);
                        return !1
                    }), u());
                    H && (A.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), K = A.find(">.jspHorizontalBar"), Q = K.find(">.jspTrack"), I = Q.find(">.jspDrag"), T.showArrows && (Z = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", l(-1, 0)).bind("click.jsp", x), et = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", l(1, 0)).bind("click.jsp", x), T.arrowScrollOnHover && (Z.bind("mouseover.jsp", l(-1, 0, Z)), et.bind("mouseover.jsp", l(1, 0, et))), f(Q, T.horizontalArrowPositions, Z, et)), I.hover(function () {
                        I.addClass("jspHover")
                    }, function () {
                        I.removeClass("jspHover")
                    }).bind("mousedown.jsp", function (t) {
                        e("html").bind("dragstart.jsp selectstart.jsp", x);
                        I.addClass("jspActive");
                        var n = t.pageX - I.position().left;
                        e("html").bind("mousemove.jsp", function (e) {
                            v(e.pageX - n, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", h);
                        return !1
                    }), G = A.innerWidth(), a());
                    if (H && P) {
                        ot = Q.outerHeight();
                        var ht = z.outerWidth();
                        X -= ot;
                        e(K).find(">.jspCap:visible,>.jspArrow").each(function () {
                            G += e(this).outerWidth()
                        });
                        G -= ht;
                        L -= ht;
                        k -= ot;
                        Q.parent().append(e('<div class="jspCorner" />').css("width", ot + "px"));
                        u();
                        a()
                    }
                    H && C.width(A.outerWidth() - rt + "px");
                    M = C.outerHeight();
                    D = M / L;
                    H && (Y = Math.ceil(1 / _ * G), Y > T.horizontalDragMaxWidth ? Y = T.horizontalDragMaxWidth : Y < T.horizontalDragMinWidth && (Y = T.horizontalDragMinWidth), I.width(Y + "px"), q = G - Y, m(R));
                    P && (V = Math.ceil(1 / D * X), V > T.verticalDragMaxHeight ? V = T.verticalDragMaxHeight : V < T.verticalDragMinHeight && (V = T.verticalDragMinHeight), B.height(V + "px"), j = X - V, d(F));
                    s && (y(ct ? O - k : W, !1), g(ft ? M - L : st, !1));
                    C.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (e) {
                        w(e.target, !1)
                    });
                    A.unbind(lt).bind(lt, function (e, t, n, r) {
                        e = R;
                        t = F;
                        N.scrollBy(n * T.MIDmousewheelSpeed, -r * T.MIDmousewheelSpeed, !1);
                        return e == R && t == F
                    });
                    var pt, dt, vt, mt, gt, yt = !1;
                    A.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (e) {
                        e = e.originalEvent.touches[0];
                        pt = E();
                        dt = S();
                        vt = e.pageX;
                        mt = e.pageY;
                        gt = !1;
                        yt = !0
                    }).bind("touchmove.jsp", function (e) {
                        if (yt) {
                            var e = e.originalEvent.touches[0],
                                t = R,
                                n = F;
                            N.scrollTo(pt + vt - e.pageX, dt + mt - e.pageY);
                            gt = gt || 5 < Math.abs(vt - e.pageX) || 5 < Math.abs(mt - e.pageY);
                            return t == R && n == F
                        }
                    }).bind("touchend.jsp", function () {
                        yt = !1
                    }).bind("click.jsp-touchclick", function () {
                        if (gt) return gt = !1
                    });
                    if (T.enableKeyboardNavigation) {
                        var bt = function () {
                            var e = R,
                                t = F;
                            switch (wt) {
                            case 40:
                                N.scrollByY(T.keyboardSpeed, !1);
                                break;
                            case 38:
                                N.scrollByY(-T.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                N.scrollByY(L * T.scrollPagePercent, !1);
                                break;
                            case 33:
                                N.scrollByY(-L * T.scrollPagePercent, !1);
                                break;
                            case 39:
                                N.scrollByX(T.keyboardSpeed, !1);
                                break;
                            case 37:
                                N.scrollByX(-T.keyboardSpeed, !1)
                            }
                            return Et = e != R || t != F
                        }, wt, Et, St = [];
                        H && St.push(K[0]);
                        P && St.push(U[0]);
                        C.focus(function () {
                            i.focus()
                        });
                        i.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (t) {
                            if (!(t.target !== this && (!St.length || !e(t.target).closest(St).length))) {
                                var n = R,
                                    r = F;
                                switch (t.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    wt = t.keyCode;
                                    bt();
                                    break;
                                case 35:
                                    g(M - L);
                                    wt = null;
                                    break;
                                case 36:
                                    g(0), wt = null
                                }
                                Et = t.keyCode == wt && n != R || r != F;
                                return !Et
                            }
                        }).bind("keypress.jsp", function (e) {
                            e.keyCode == wt && bt();
                            return !Et
                        });
                        T.hideFocus ? (i.css("outline", "none"), "hideFocus" in A[0] && i.attr("hideFocus", !0)) : (i.css("outline", ""), "hideFocus" in A[0] && i.attr("hideFocus", !1))
                    }
                    T.clickOnTrack && (c(), P && z.bind("mousedown.jsp", function (t) {
                        if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                            var i = e(this),
                                s = i.offset(),
                                o = t.pageY - s.top - F,
                                u, a = !0,
                                f = function () {
                                    var e = i.offset(),
                                        e = t.pageY - e.top - V / 2,
                                        n = L * T.scrollPagePercent,
                                        r = j * n / (M - L);
                                    if (0 > o) F - r > e ? N.scrollByY(-n) : p(e);
                                    else if (0 < o) F + r < e ? N.scrollByY(n) : p(e);
                                    else {
                                        l();
                                        return
                                    }
                                    u = setTimeout(f, a ? T.initialDelay : T.trackClickRepeatFreq);
                                    a = !1
                                }, l = function () {
                                    u && clearTimeout(u);
                                    u = null;
                                    e(document).unbind("mouseup.jsp", l)
                                };
                            f();
                            e(document).bind("mouseup.jsp", l);
                            return !1
                        }
                    }), H && Q.bind("mousedown.jsp", function (t) {
                        if (t.originalTarget === n || t.originalTarget == t.currentTarget) {
                            var i = e(this),
                                s = i.offset(),
                                o = t.pageX - s.left - R,
                                u, a = !0,
                                f = function () {
                                    var e = i.offset(),
                                        e = t.pageX - e.left - Y / 2,
                                        n = k * T.scrollPagePercent,
                                        r = q * n / (O - k);
                                    if (0 > o) R - r > e ? N.scrollByX(-n) : v(e);
                                    else if (0 < o) R + r < e ? N.scrollByX(n) : v(e);
                                    else {
                                        l();
                                        return
                                    }
                                    u = setTimeout(f, a ? T.initialDelay : T.trackClickRepeatFreq);
                                    a = !1
                                }, l = function () {
                                    u && clearTimeout(u);
                                    u = null;
                                    e(document).unbind("mouseup.jsp", l)
                                };
                            f();
                            e(document).bind("mouseup.jsp", l);
                            return !1
                        }
                    }));
                    e: if (location.hash && 1 < location.hash.length) {
                        var xt, Tt;
                        W = escape(location.hash.substr(1));
                        try {
                            xt = e("#" + W + ', a[name="' + W + '"]')
                        } catch (Nt) {
                            break e
                        }
                        xt.length && C.find(W) && (0 === A.scrollTop() ? Tt = setInterval(function () {
                            0 < A.scrollTop() && (w(xt, !0), e(document).scrollTop(A.position().top), clearInterval(Tt))
                        }, 50) : (w(xt, !0), e(document).scrollTop(A.position().top)))
                    }
                    T.hijackInternalLinks && (e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function (n) {
                        var r = this.href.substr(0, this.href.indexOf("#")),
                            i = location.href,
                            s; - 1 !== location.href.indexOf("#") && (i = location.href.substr(0, location.href.indexOf("#")));
                        if (r === i) {
                            r = escape(this.href.substr(this.href.indexOf("#") + 1));
                            s;
                            try {
                                s = e("#" + r + ', a[name="' + r + '"]')
                            } catch (o) {
                                return
                            }
                            s.length && (r = s.closest(".jspScrollable"), i = r.data("jsp"), i.scrollToElement(s, !0), r[0].scrollIntoView && (i = e(t).scrollTop(), s = s.offset().top, (s < i || s > i + e(t).height()) && r[0].scrollIntoView()), n.preventDefault())
                        }
                    })))
                }
                T.autoReinitialise && !tt ? tt = setInterval(function () {
                    o(T)
                }, T.autoReinitialiseDelay) : !T.autoReinitialise && tt && clearInterval(tt);
                ut && i.scrollTop(0) && g(ut, !1);
                at && i.scrollLeft(0) && y(at, !1);
                i.trigger("jsp-initialised", [H || P])
            }

            function u() {
                z.height(X + "px");
                F = 0;
                W = T.verticalGutter + z.outerWidth();
                C.width(k - W - rt);
                try {
                    0 === U.position().left && C.css("margin-left", W + "px")
                } catch (e) {}
            }

            function a() {
                A.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    G -= e(this).outerWidth()
                });
                Q.width(G + "px");
                R = 0
            }

            function f(e, t, n, r) {
                var i = "before",
                    s = "after";
                "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split");
                t == i ? s = t : t == s && (i = t, t = n, n = r, r = t);
                e[i](n)[s](r)
            }

            function l(t, n, r) {
                return function () {
                    var i = this,
                        s = r,
                        i = e(i).addClass("jspActive"),
                        o, u, a = !0,
                        f = function () {
                            0 !== t && N.scrollByX(t * T.arrowButtonSpeed);
                            0 !== n && N.scrollByY(n * T.arrowButtonSpeed);
                            u = setTimeout(f, a ? T.initialDelay : T.arrowRepeatFreq);
                            a = !1
                        };
                    f();
                    o = s ? "mouseout.jsp" : "mouseup.jsp";
                    s = s || e("html");
                    s.bind(o, function () {
                        i.removeClass("jspActive");
                        u && clearTimeout(u);
                        u = null;
                        s.unbind(o)
                    });
                    this.blur();
                    return !1
                }
            }

            function c() {
                Q && Q.unbind("mousedown.jsp");
                z && z.unbind("mousedown.jsp")
            }

            function h() {
                e("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                B && B.removeClass("jspActive");
                I && I.removeClass("jspActive")
            }

            function p(e, t) {
                P && (0 > e ? e = 0 : e > j && (e = j), t === n && (t = T.animateScroll), t ? N.animate(B, "top", e, d) : (B.css("top", e), d(e)))
            }

            function d(e) {
                e === n && (e = B.position().top);
                A.scrollTop(0);
                F = e;
                var t = 0 === F,
                    s = F == j,
                    e = -(e / j) * (M - L);
                if (st != t || ut != s) st = t, ut = s, i.trigger("jsp-arrow-change", [st, ut, ot, at]);
                T.showArrows && ($[t ? "addClass" : "removeClass"]("jspDisabled"), J[s ? "addClass" : "removeClass"]("jspDisabled"));
                C.css("top", e);
                i.trigger("jsp-scroll-y", [-e, t, s]).trigger("scroll")
            }

            function v(e, t) {
                H && (0 > e ? e = 0 : e > q && (e = q), t === n && (t = T.animateScroll), t ? N.animate(I, "left", e, m) : (I.css("left", e), m(e)))
            }

            function m(e) {
                e === n && (e = I.position().left);
                A.scrollTop(0);
                R = e;
                var t = 0 === R,
                    s = R == q,
                    e = -(e / q) * (O - k);
                if (ot != t || at != s) ot = t, at = s, i.trigger("jsp-arrow-change", [st, ut, ot, at]);
                T.showArrows && (Z[t ? "addClass" : "removeClass"]("jspDisabled"), et[s ? "addClass" : "removeClass"]("jspDisabled"));
                C.css("left", e);
                i.trigger("jsp-scroll-x", [-e, t, s]).trigger("scroll")
            }

            function g(e, t) {
                p(e / (M - L) * j, t)
            }

            function y(e, t) {
                v(e / (O - k) * q, t)
            }

            function w(t, n, r) {
                var i, s, o = 0,
                    u = 0,
                    a, f, l;
                try {
                    i = e(t)
                } catch (c) {
                    return
                }
                s = i.outerHeight();
                t = i.outerWidth();
                A.scrollTop(0);
                for (A.scrollLeft(0); !i.is(".jspPane");)
                    if (o += i.position().top, u += i.position().left, i = i.offsetParent(), /^body|html$/i.test(i[0].nodeName)) return;
                i = S();
                a = i + L;
                o < i || n ? f = o - T.verticalGutter : o + s > a && (f = o - L + s + T.verticalGutter);
                f && g(f, r);
                o = E();
                f = o + k;
                u < o || n ? l = u - T.horizontalGutter : u + t > f && (l = u - k + t + T.horizontalGutter);
                l && y(l, r)
            }

            function E() {
                return -C.position().left
            }

            function S() {
                return -C.position().top
            }

            function x() {
                return !1
            }
            var T, N = this,
                C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt, it, st = !0,
                ot = !0,
                ut = !1,
                at = !1,
                ft = i.clone(!1, !1).empty(),
                lt = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "MIDmousewheel.jsp";
            nt = i.css("paddingTop") + " " + i.css("paddingRight") + " " + i.css("paddingBottom") + " " + i.css("paddingLeft");
            rt = (parseInt(i.css("paddingLeft"), 10) || 0) + (parseInt(i.css("paddingRight"), 10) || 0);
            e.extend(N, {
                reinitialise: function (t) {
                    t = e.extend({}, T, t);
                    o(t)
                },
                scrollToElement: function (e, t, n) {
                    w(e, t, n)
                },
                scrollTo: function (e, t, n) {
                    y(e, n);
                    g(t, n)
                },
                scrollToX: function (e, t) {
                    y(e, t)
                },
                scrollToY: function (e, t) {
                    g(e, t)
                },
                scrollToPercentX: function (e, t) {
                    y(e * (O - k), t)
                },
                scrollToPercentY: function (e, t) {
                    g(e * (M - L), t)
                },
                scrollBy: function (e, t, n) {
                    N.scrollByX(e, n);
                    N.scrollByY(t, n)
                },
                scrollByX: function (e, t) {
                    var n = (E() + Math[0 > e ? "floor" : "ceil"](e)) / (O - k);
                    v(n * q, t)
                },
                scrollByY: function (e, t) {
                    var n = (S() + Math[0 > e ? "floor" : "ceil"](e)) / (M - L);
                    p(n * j, t)
                },
                positionDragX: function (e, t) {
                    v(e, t)
                },
                positionDragY: function (e, t) {
                    p(e, t)
                },
                animate: function (e, t, n, r) {
                    var i = {};
                    i[t] = n;
                    e.animate(i, {
                        duration: T.animateDuration,
                        easing: T.animateEase,
                        queue: !1,
                        step: r
                    })
                },
                getContentPositionX: function () {
                    return E()
                },
                getContentPositionY: function () {
                    return S()
                },
                getContentWidth: function () {
                    return O
                },
                getContentHeight: function () {
                    return M
                },
                getPercentScrolledX: function () {
                    return E() / (O - k)
                },
                getPercentScrolledY: function () {
                    return S() / (M - L)
                },
                getIsScrollableH: function () {
                    return H
                },
                getIsScrollableV: function () {
                    return P
                },
                getContentPane: function () {
                    return C
                },
                scrollToBottom: function (e) {
                    p(j, e)
                },
                hijackInternalLinks: e.noop,
                destroy: function () {
                    var e = S(),
                        t = E();
                    i.removeClass("jspScrollable").unbind(".jsp");
                    i.replaceWith(ft.append(C.children()));
                    ft.scrollTop(e);
                    ft.scrollLeft(t);
                    tt && clearInterval(tt)
                }
            });
            o(s)
        }
        i = e.extend({}, e.fn.MIDjScrollPane.defaults, i);
        e.each(["MIDmousewheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            i[this] = i[this] || i.speed
        });
        return this.each(function () {
            var t = e(this),
                n = t.data("jsp");
            n ? n.reinitialise(i) : (e("script", t).filter('[type="text/javascript"],:not([type])').remove(), n = new s(t, i), t.data("jsp", n))
        })
    };
    e.fn.MIDjScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: n,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        MIDmousewheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
})(jQuery, this);
(function (e) {
    function t(t) {
        var n = t || window.event,
            r = [].slice.call(arguments, 1),
            i = 0,
            s = 0,
            o = 0,
            t = e.event.fix(n);
        t.type = "MIDmousewheel";
        n.wheelDelta && (i = n.wheelDelta / 120);
        n.detail && (i = -n.detail / 3);
        o = i;
        void 0 !== n.axis && n.axis === n.HORIZONTAL_AXIS && (o = 0, s = -1 * i);
        void 0 !== n.wheelDeltaY && (o = n.wheelDeltaY / 120);
        void 0 !== n.wheelDeltaX && (s = -1 * n.wheelDeltaX / 120);
        r.unshift(t, i, s, o);
        return (e.event.dispatch || e.event.handle).apply(this, r)
    }
    var n = ["DOMMouseScroll", "MIDmousewheel"];
    if (e.event.fixHooks)
        for (var r = n.length; r;) e.event.fixHooks[n[--r]] = e.event.mouseHooks;
    e.event.special.MIDmousewheel = {
        setup: function () {
            if (this.addEventListener)
                for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
            else this.onMIDmousewheel = t
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
            else this.onMIDmousewheel = null
        }
    };
    e.fn.extend({
        MIDmousewheel: function (e) {
            return e ? this.bind("MIDmousewheel", e) : this.trigger("MIDmousewheel")
        },
        unMIDmousewheel: function (e) {
            return this.unbind("MIDmousewheel", e)
        }
    })
})(jQuery);
var MINGID_COMMENT_DOMAIN = "comment.vietid.net";
var MINGID_COMMENT_JAM_DOMAIN = "comment.vietid.net";
var MINGID_CONS = {
    ROOT_URL: "http://vietid.net",
    PURL: "http://" + MINGID_COMMENT_DOMAIN + "/comments/Post",
    TIMEOUT: 2e4,
    ROW_COUNT: 10,
    NOTFY_URL: "http://comment.vietid.net/Notify/GetNotifAjax",
    NOTFY_URL_NRESETC: "http://comment.vietid.net/notify/GetNotifAjaxEx",
    CNOTFY_URL: "http://comment.vietid.net/notify/GetCountNotify",
    UPDATE_NOTIFY_URL: "http://comment.vietid.net/Notify/UpdateNotify",
    UPDATE_NOTIFYEX_URL: "http://comment.vietid.net/notify/UpdateNotifyEx",
    STORAGE_DRIVER: null,
    DRIVER: ("cookie", "jsdis"),
    TIMEOUT_IFR: 2e3
};
var MINGID_DETECT_EVIROMENT = {
    loadStorage: function () {
        var e = window;
        "localStorage" in e && null !== e.localStorage ? MINGID_CONS.STORAGE_DRIVER = "jsdis" : (e = navigator.cookieEnabled ? !0 : !1, "undefined" == typeof navigator.cookieEnabled && !e && (document.cookie = "testMIDcookie", e = -1 != document.cookie.indexOf("testMIDcookie") ? !0 : !1), !0 == e && (MINGID_CONS.STORAGE_DRIVER = "cookie"));
        if (null != MINGID_CONS.STORAGE_DRIVER) {
            e = document.createElement("script");
            e.type = "text/javascript";
            e.async = !0;
            e.src = "http://comment.vietid.net/statics/js/" + MINGID_CONS.STORAGE_DRIVER + ".js";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
    },
    loadJs: function (e) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.async = !0;
        t.src = "http://comment.vietid.net/statics/js/" + e;
        e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    }
}, MINGID_DATA_FUNC = {
        setCookie: function (e, t, n) {
            var r = new Date;
            r.setDate(r.getDate() + n);
            t = escape(t) + (null == n ? "" : "; expires=" + r.toUTCString()) + "; path=/";
            document.cookie = e + "=" + t
        },
        getCookie: function (e) {
            var t, n, r, i = document.cookie.split(";");
            for (t = 0; t < i.length; t++)
                if (n = i[t].substr(0, i[t].indexOf("=")), r = i[t].substr(i[t].indexOf("=") + 1), n = n.replace(/^\s+|\s+$/g, ""), n == e) return unescape(r)
        },
        ajaxRequest: function (a, b) {
            "undefined" == typeof a && (a = "get");
            "undefined" == typeof b && (b = "jsonp");
            $.ajax({
                type: a,
                crossDomain: !0,
                cache: !1,
                dataType: b,
                url: "undefined" == typeof wget || null == wget ? MINGID_CONS.CNOTFY_URL : MINGID_CONS.NOTFY_URL + "?p" + MINGID_NOTIF_FUNC.PGNOTIF,
                xhrFields: {
                    withCredentials: !0
                },
                jsonp: "callback",
                jsonpCallback: "MINGID_NOTIF_FUNC.callback",
                data: "",
                success: function (a) {
                    a = eval("(" + a + ")");
                    alert(a)
                }
            })
        },
        getJsonP: function (e, t, n) {
            "undefined" == typeof e && (e = "get");
            "undefined" == typeof t && (t = "jsonp");
            "undefined" == typeof n || null == n ? (e = MINGID_CONS.CNOTFY_URL, t = "MINGID_NOTIF_FUNC.notifCountCallback") : (e = n, t = "MINGID_NOTIF_FUNC.notifCallback");
            $.ajax({
                url: e,
                data: "",
                dataType: "jsonp",
                jsonp: "callback",
                jsonpCallback: t,
                success: function () {}
            })
        }
    }, MINGID_NOTIF_FUNC = {
        PGNOTIF: 1,
        LOADLOCK: 1,
        arrNotifType: function (e) {
            return ["trả lời bình luận của bạn", "thích bình luận của bạn", "", "", "", "gửi lời mới kết bạn", "nhắn tin cho bạn", "chấp nhận lời mời kết bạn"][e]
        },
        arrNotifIcon: function (e) {
            return ["message", "like", "", "", "", "addfriend", "", "addfriend"][e]
        },
        arrClickOut: function (e) {
            return ["MidnotifIcon", "MidNotifCount", "notification_number", "MidTitleNotif", "notification_panel"].indexOf(e)
        },
        notifCountCallback: function (e) {
            "undefined" != typeof e ? 0 < e ? $("#MidNotifCount").html(e).show() : $("#MidNotifCount").html(e).hide() : e = 0;
            VID_counNotif(e);
            var t = Math.round((new Date).getTime() / 1e3);
            MINGID_DATA_FUNC.setCookie("MIDNOTIFDATA", e + "_" + t)
        },
        notifCallback: function (e) {
            $("#notifimgloading").hide();
            if ("undefined" != typeof e) {
                var t = e.length;
                if (0 < t && "block" == $("#notification_panel").css("display")) {
                    var n = "",
                        r = "";
                    if (0 >= t && 1 >= MINGID_NOTIF_FUNC.PGNOTIF) n += '<div class="item clearfix"><img class="avatar" /><div class="noti_info"><a><div class="noti_message">Chưa có thông báo mới!<span id="userNotifCount"></span> <span class="postname"></span></div></a><div class="noti_action"></div></div></div>';
                    else
                        for (var i = 0; i < t; i++) {
                            var s = e[i].list_username.split(","),
                                o = s.length;
                            1 == o && (r = s[0]);
                            1 < o && (r = s[0] + " và " + (o - 1) + " người");
                            if (e[i].type == 5 || e[i].type == 6 || e[i].type == 7) {
                                n = n + '<div class="item clearfix" id="itemsNotif"><img src="' + e[i].user_avatar + '" class="avatar" /><div class="noti_info"><a href="' + e[i].news_url + '"><div class="noti_message"><span id="userNotifCount">' + r + "</span> đã " + MINGID_NOTIF_FUNC.arrNotifType(e[i].type) + '</div></a><div class="noti_action ' + MINGID_NOTIF_FUNC.arrNotifIcon(e[i].type) + '">' + e[i].create_time + "</div></div></div>"
                            }
                            if (e[i].type != 5 && e[i].type != 6 && e[i].type != 7) n = n + '<div class="item clearfix" id="itemsNotif"><img src="' + e[i].user_avatar + '" class="avatar" /><div class="noti_info"><a href="' + e[i].news_url + '"><div class="noti_message"><span id="userNotifCount">' + r + "</span> đã " + MINGID_NOTIF_FUNC.arrNotifType(e[i].type) + ' bình luận của bạn trong bài viết <span class="postname">&ldquo;' + e[i].news_title + '&rdquo;</span></div></a><div class="noti_action ' + MINGID_NOTIF_FUNC.arrNotifIcon(e[i].type) + '">' + e[i].create_time + "</div></div></div>"
                        }
                    if ("undefined" == typeof n || "" == n || 1 > n.length) n += '<div class="item clearfix"><img class="avatar" /><div class="noti_info"><a><div class="noti_message">Chưa có thông báo mới!<span id="userNotifCount"></span> <span class="postname"></span></div></a><div class="noti_action"></div></div></div>';
                    1 == MINGID_NOTIF_FUNC.PGNOTIF ? $(".jspPane").html("" + n + "") : $(".jspPane").append("" + n + "");
                    0 == $(".noti_pop_list").height() && $(".noti_pop_list").height(350);
                    $(".noti_pop_list").MIDjScrollPane({
                        autoReinitialise: !0
                    });
                    jQuery(".noti_pop_list").MIDjScrollPane().bind("jsp-scroll-y", function (e, t) {
                        var n = $(".noti_pop_list").data("jsp").getContentHeight();
                        t == n - 350 && (MINGID_NOTIF_FUNC.LOADLOCK = 0, t == n - 350 && 5 > MINGID_NOTIF_FUNC.PGNOTIF && 0 == MINGID_NOTIF_FUNC.LOADLOCK && (MINGID_NOTIF_FUNC.PGNOTIF += 1, MINGID_NOTIF_FUNC.LOADLOCK = 1, MINGID_DATA_FUNC.getJsonP("get", "jsonp", MINGID_CONS.NOTFY_URL + "?p=" + MINGID_NOTIF_FUNC.PGNOTIF), $("#notifimgloading").show()))
                    });
                    $("#notificationbox").mouseout(function () {
                        $("body").click(function (e) {
                            e = e.target.id;
                            "block" == $("#notification_panel").css("display") && -1 == MINGID_NOTIF_FUNC.arrClickOut(e) && MINGID_NOTIF_FUNC.notifStatus(0)
                        })
                    });
                    $("#notificationbox").mouseover(function () {
                        $("#notification_panel").is(":has(.jspPane)") && $("#notification_panel").MIDmousewheel(function () {
                            return !1
                        })
                    })
                }
            }
        },
        getListNotif: function () {
            "none" == $("#notification_panel").css("display") ? (MINGID_NOTIF_FUNC.PGNOTIF = 1, MINGID_NOTIF_FUNC.notifStatus(1), MINGID_DATA_FUNC.getJsonP("get", "jsonp", MINGID_CONS.NOTFY_URL + "?p=" + MINGID_NOTIF_FUNC.PGNOTIF)) : MINGID_NOTIF_FUNC.notifStatus(0)
        },
        initNotif: function (e) {
            if (32 > e.length) return !1;
            var e = document,
                t = e.getElementById("mingid_notification");
            "undefined" != typeof t && null !== t && (document.createStyleSheet ? document.createStyleSheet("http://mingid.vcmedia.vn/comment/notification.css") : (t = document.createElement("link"), t.rel = "stylesheet", t.href = "data:text/css," + escape("@import url('http://mingid.vcmedia.vn/comment/notification.css');"), document.getElementsByTagName("head")[0].appendChild(t)), t = '<div href="#" class="notificationbox logged" id="notificationbox"><span class="notification_number" id="notification_number" onclick="MINGID_NOTIF_FUNC.getListNotif()"><img src="http://mingid.vcmedia.vn/comment/notify/images/notify.png" id="MidnotifIcon" style="float:left;"></img><span id="MidNotifCount">0</span></span><span class="notification_arrow deactive"></span><div id="notification_panel" class="notification_panel deactive"><h4>Thông báo &nbsp;&nbsp;&nbsp;<img style="text-align: center; height:22px; align:right;vertical-align: middle; display:none; width:32px;" src="http://mingid.vcmedia.vn/images/comment/ming_loading.gif" id="notifimgloading"><span style="float:right; margin-right:3px;"><a href="http://vietid.net/Users/profiles" target="_blank" style="color:#000000">Thông tin cá nhân</a></span></h4><div class="noti_pop_list jspScrollable" style="overflow: hidden; padding: 0px; width: 400px;" tabindex="0"><div class="jspContainer" id="jspContainer" style="width: 400px; height: 380px;"><div class="jspPane" id="listOfNotif" style="padding: 0px; width: 391px; top: 0px;"></div><div class="jspVerticalBar"><div class="jspCap jspCapTop"></div><div class="jspTrack" style="height: 380px;"><div class="jspDrag" style="height: 279px; top: 0px;"><div class="jspDragTop"></div><div class="jspDragBottom"></div></div></div><div class="jspCap jspCapBottom"></div></div></div></div><a href="' + MINGID_CONS.ROOT_URL + '/Notification" class="view_all_noti" target="_blank">Xem tất cả</a></div></div>', e.getElementById("mingid_notification").innerHTML = t, jQuery(window).bind("load", function () {
                jQuery(".noti_pop_list").MIDjScrollPane()
            }), e = Math.round((new Date).getTime() / 1e3), t = MINGID_DATA_FUNC.getCookie("MIDNOTIFDATA"), "undefined" == typeof t ? setTimeout("MINGID_NOTIF_FUNC.getNotif()", MINGID_CONS.TIMEOUT) : (t = t.split("_"), e - t[1] <= MINGID_CONS.TIMEOUT / 1e3 ? $("#MidNotifCount").html(t[0]).css("display", "inline").show() : MINGID_NOTIF_FUNC.getNotif()))
        },
        getNotif: function () {
            MINGID_DATA_FUNC.getJsonP("get", "jsonp");
            setTimeout("MINGID_NOTIF_FUNC.getNotif()", MINGID_CONS.TIMEOUT)
        },
        notifStatus: function (e) {
            "undefined" != typeof e && ("0" == e && ($("#notification_panel").hide(), $(".notification_arrow").hide(), $(".jspPane").html(""), $(".listOfNotif").html(""), $(".jspVerticalBar").remove(), $(".jspPane").css("top", "0px"), $(".noti_pop_list").css("height", "0px"), $("#notifimgloading").hide(), MINGID_NOTIF_FUNC.PGNOTIF = 1), 1 == e && ($("#notification_panel").show(), $(".notification_arrow").show(), $("#notifimgloading").show()))
        }
    }, MINGID_CORE_FUNC = {
        mingidCommentReisizeIframe: function (e) {
            if ("undefined" != typeof e || 0 < e) {
                var t = window.parent.document.getElementById("mingid_comment_iframe")
            }
        }
    };
var MINGID_IFRAME_FUNC = {
    mingidGenIfram: function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, rt, hd) {
		if ("undefined" == typeof hd || null == hd) hd = 0;

		var app_key = n;
        var g = document.location.href;
        var y = g.indexOf("#itemComment_");
        var b = $(window);
        if (d == 1 || d == 2 || y > -1|| d == 3) {
            if ("undefined" == typeof m || null == m) m = 0;
            if ("undefined" == typeof v || null == v) v = 0;
            if ("undefined" == typeof t || null == t || 0 == t || t == 238) t = 238;
            if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
            if ("undefined" == typeof h || null == h) h = "0";
            if ("undefined" == typeof p || null == p) p = "0";
            if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
            if ("undefined" == typeof d || null == d) d = "0";
			if ("undefined" == typeof rt || null == rt) rt = "0";
            var w = document.createElement("iframe"),
                E = "undefined" == typeof E || null == E ? 1 : 2,
                S = "auto";
            2 == E && (S = "no");
            0 == a && (S = "no");
            if (d != "0") S = "no";

			if (v==1){
				n = "http://" + MINGID_COMMENT_JAM_DOMAIN + "/commentsJam?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&height=" + t + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m + "&real_time=" + rt;
				//n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&height=" + t + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m + "&real_time=" + rt;
			}else{
				n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&height=" + t + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m + "&real_time=" + rt+"&is_hidden_comment="+hd;
			}

            iframe_comment_id = c;
            w.setAttribute("width", e);
            if (v!=1){
                w.setAttribute("height", 0);
            }
            w.setAttribute("border", "medium none");
            w.setAttribute("overflow", "hidden");
            w.setAttribute("scrolling", S);
            w.setAttribute("frameborder", "0");
            w.setAttribute("id", c);
            w.setAttribute("src", n);
            document.getElementById(l).appendChild(w);
            mingid_iframe_comment_static = c
        } else {
            mingid_comment_cover = l;
            if (typeof mingid_comment_cover === "undefined") {
                mingid_comment_cover = "mingid_comments_content"
            }
            //var x = '<div id="comment_loading" style="text-align:center"><img style="height:15px;"src="http://mingid.vcmedia.vn/v4/images/comment/loading_head.gif" /></div>';
            var x = '';
            $("#" + mingid_comment_cover).append(x);
            var T = $("#" + mingid_comment_cover).offset().top;

            if (T < screen.availHeight) {

                if ("undefined" == typeof m || null == m) m = 0;
                if ("undefined" == typeof v || null == v) v = 0;
                if ("undefined" == typeof t || null == t || 0 == t || t == 238) t = 238;
                if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
                if ("undefined" == typeof h || null == h) h = "0";
                if ("undefined" == typeof p || null == p) p = "0";
                if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
                if ("undefined" == typeof d || null == d) d = "0";
                var w = document.createElement("iframe"),
                    E = "undefined" == typeof E || null == E ? 1 : 2,
                    S = "auto";
                2 == E && (S = "no");
                0 == a && (S = "no");
                if (d != "0") S = "no";

				if (v==1){
					n = "http://" + MINGID_COMMENT_JAM_DOMAIN + "/commentsJam?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
					//n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
				}else{
					n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m+"&is_hidden_comment="+hd;
				}

                iframe_comment_id = c;
                w.setAttribute("width", e);
                if (v!=1){
                    w.setAttribute("height", 0);
                }
                w.setAttribute("border", "medium none");
                w.setAttribute("overflow", "hidden");
                w.setAttribute("scrolling", S);
                w.setAttribute("frameborder", "0");
                w.setAttribute("id", c);
                w.setAttribute("src", n);
                document.getElementById(l).appendChild(w);
                mingid_iframe_comment_static = c;
                var N = setInterval(function () {
                    if ($("#" + mingid_iframe_comment_static).height() > 0) {
                        clearInterval(N);
                        $("#comment_loading").hide()
                    }
                }, 3e3);
				if(app_key=='5f88cdece459ae8dfa25ee90fa9e6caf') {
					includeCssFileAma();
					var html = '<a class="mingid-new-stories" onclick="hide_popup()" href="javascript://" style="display:none;">';
					html += '<span class="mingid-up-arrow"></span>';
					html += 'Có <span class="mingid_count_stories mingid-red"></span> câu trả lời mới </a>';

					$('.main').prepend(html);
				}
            } else {
					b.scroll(function () {
					var g = $(this).scrollTop();
					if (g + $(window).height() > T - 300) {
						if ($("#" + mingid_comment_cover).children("#" + c).length == 0) {
							if ("undefined" == typeof m || null == m) m = 0;
							if ("undefined" == typeof v || null == v) v = 0;
							if ("undefined" == typeof t || null == t || 0 == t || t == 238) t = 238;
							if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
							if ("undefined" == typeof h || null == h) h = "0";
							if ("undefined" == typeof p || null == p) p = "0";
							if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
							if ("undefined" == typeof d || null == d) d = "0";
							var y = document.createElement("iframe"),
								b = "undefined" == typeof b || null == b ? 1 : 2,
								w = "auto";
							2 == b && (w = "no");
							0 == a && (w = "no");
							if (d != "0") w = "no";

							if (v==1){
								n = "http://" + MINGID_COMMENT_JAM_DOMAIN + "/commentsJam?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
								//n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
							}else{
								n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m+"&is_hidden_comment="+hd;
							}

							iframe_comment_id = c;
							y.setAttribute("width", e);
                            if (v!=1){
                                y.setAttribute("height", 0);
                            }
							y.setAttribute("height", 0);
							y.setAttribute("border", "medium none");
							y.setAttribute("overflow", "hidden");
							y.setAttribute("scrolling", w);
							y.setAttribute("frameborder", "0");
							y.setAttribute("id", c);
							y.setAttribute("src", n);
							document.getElementById(l).appendChild(y);
							mingid_iframe_comment_static = c;
							var E = setInterval(function () {
								if ($("#" + mingid_iframe_comment_static).height() > 100) {
									clearInterval(E);
									$("#comment_loading").hide()
								}
							}, 3e3);
						}
					}
				})
            }
        }
    }
};
var quick_jam_width = '', quick_jam_height = '', quick_jam_app_key = '', quick_jam_content_url = '', quick_jam_news_title = '', quick_jam_http_detail = '', quick_jam_id_frame_cover = '';
var MINGID_IFRAME_FUNC_QUICK_JAM = {
    mingidGenIframQuickJam: function (width, height, app_key, content_url, news_title, http_referer, id_frame_cover) {


	$("#quick_jam_form_"+id_frame_cover).remove();
	var html = '<div id="quick_jam_form_'+id_frame_cover+'"></div>';

	$("#"+id_frame_cover).append(html);
	$("#quick_jam_form_"+id_frame_cover).css({"position":"absolute","left":"-200px", "top": "95px", "z-index": "9999","display":"none"});
	n = "http://" + MINGID_COMMENT_DOMAIN + "/commentsJam/QuickJamCommentForm?app_key="+app_key+"&content_url="+content_url+"&news_title="+news_title+"&http_referer="+http_referer+"&iframe_comment_id=mingid_comment_iframe_quick_jam_"+id_frame_cover;
	var w = document.createElement("iframe");


		w.setAttribute("id", "mingid_comment_iframe_quick_jam_"+id_frame_cover);
		w.setAttribute("src", n);
		w.setAttribute("width", '515px');
		w.setAttribute("border-radius", '5px');



		document.getElementById("quick_jam_form_"+id_frame_cover).appendChild(w);


    }
};
var MINGID_IFRAME_LIST = {
    mingidGenIframList: function (width, height, app_key, content_url, news_title, http_referer, id_frame_cover, id_frame, verify, verify_flag, http_redirect) {


	$("#comment_form_list_"+id_frame_cover).remove();
	var html = '<div id="comment_form_list_'+id_frame_cover+'"></div>';
	if ("undefined" == typeof verify || null == verify) verify = "0";
    if ("undefined" == typeof verify_flag || null == verify_flag) verify_flag = "0";

	if ("undefined" == typeof http_redirect || null == http_redirect) http_redirect = "";
	$("#"+id_frame_cover).append(html);

	n = "http://" + MINGID_COMMENT_DOMAIN + "/commentList?app_key="+app_key+"&content_url="+content_url+"&news_title="+news_title+"&http_referer="+http_referer+"&iframe_comment_id=mingid_comment_iframe_quick_jam_"+id_frame_cover+"&verify="+verify+"&verify_flag="+verify_flag+"&http_redirect="+http_redirect;
	var w = document.createElement("iframe");


		w.setAttribute("id", "mingid_comment_iframe_quick_jam_"+id_frame_cover);
		w.setAttribute("src", n);
		w.setAttribute("width", '680px');
		w.setAttribute("border-radius", '5px');



		document.getElementById("comment_form_list_"+id_frame_cover).appendChild(w);


    }
};
 var MINGID_IFRAME_FUNC_TOP = {
    mingidGenIframTop: function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, rt) {

        var app_key = n;
        var g = document.location.href;
        var y = g.indexOf("#itemComment_");
        var b = $(window);

        mingid_comment_cover_top = l;
        if (typeof mingid_comment_cover_top === "undefined") {
            mingid_comment_cover_top = "mingid_comments_content"
        }

        var T = $("#" + mingid_comment_cover_top).offset().top;

        if ("undefined" == typeof m || null == m) m = 0;
        if ("undefined" == typeof v || null == v) v = 0;
        if ("undefined" == typeof t || null == t) t = 0;
        if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
        if ("undefined" == typeof h || null == h) h = "0";
        if ("undefined" == typeof p || null == p) p = "0";
        if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
        if ("undefined" == typeof d || null == d) d = "0";
        var w = document.createElement("iframe"),
            E = "undefined" == typeof E || null == E ? 1 : 2,
            S = "auto";
        2 == E && (S = "no");
        0 == a && (S = "no");
        if (d != "0") S = "no";
        n = "http://" + MINGID_COMMENT_DOMAIN + "/comments/CommentTop?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
        iframe_comment_id = c;
        w.setAttribute("width", e);
        w.setAttribute("height", t);
        w.setAttribute("border", "medium none");
        w.setAttribute("overflow", "hidden");
        w.setAttribute("scrolling", S);
        w.setAttribute("frameborder", "0");
        w.setAttribute("id", c);
        w.setAttribute("src", n);
        document.getElementById(l).appendChild(w);
        mingid_iframe_comment_static_top = c;
        var N = setInterval(function () {
            if ($("#" + mingid_iframe_comment_static_top).height() > 0) {
                clearInterval(N);
                $("#comment_loading").hide()
            }
        }, 3e3);



            b.scroll(function () {
            var g = $(this).scrollTop();

            if (g + $(window).height() > T - 300) {
                if ($("#" + mingid_comment_cover_top).children("#" + c).length == 0) {
                    if ("undefined" == typeof m || null == m) m = 0;
                    if ("undefined" == typeof v || null == v) v = 0;
                    if ("undefined" == typeof t || null == t) t = 0;
                    if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
                    if ("undefined" == typeof h || null == h) h = "0";
                    if ("undefined" == typeof p || null == p) p = "0";
                    if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
                    if ("undefined" == typeof d || null == d) d = "0";
                    var y = document.createElement("iframe"),
                        b = "undefined" == typeof b || null == b ? 1 : 2,
                        w = "auto";
                    2 == b && (w = "no");
                    0 == a && (w = "no");
                    if (d != "0") w = "no";
                    n = "http://" + MINGID_COMMENT_DOMAIN + "/comments/CommentTop?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
                    iframe_comment_id = c;
                    y.setAttribute("width", e);
                    y.setAttribute("height", t);
                    y.setAttribute("border", "medium none");
                    y.setAttribute("overflow", "hidden");
                    y.setAttribute("scrolling", w);
                    y.setAttribute("frameborder", "0");
                    y.setAttribute("id", c);
                    y.setAttribute("src", n);
                    document.getElementById(l).appendChild(y);
                    mingid_iframe_comment_static_top = c;
                    var E = setInterval(function () {
                        if ($("#" + mingid_iframe_comment_static_top).height() > 100) {
                            clearInterval(E);
                            $("#comment_loading").hide()
                        }
                    }, 3e3);
                }
            }
        })

    }
};
var VIETID_IFRAME_FUNC = {
    vietidGenIfram: function (e, n, r, s, o, u) {
        if ("undefined" == typeof r || null == r || 0 == r) r = 682;
        if ("undefined" == typeof n || null == n) n = "mingid_comments_content";
        if ("undefined" == typeof s || null == s) s = "0";
        if ("undefined" == typeof o || null == o) o = "0";
        if ("undefined" == typeof u || null == u) u = "mingid_comment_iframe";
        if ("undefined" == typeof i || null == i || 0 == i || i == 238) i = 238;
        if ("undefined" == typeof f || null == f) f = 0;
        if ("undefined" == typeof c_f || null == c_f) c_f = 0;
        if ("undefined" == typeof t || null == t) t = "0";
        var a = window.location.href.toString(),
            l = a;
        var c = document.title;
        if (c == "") c = "Comment VietID";
        c = B64.encode(encodeURIComponent(c.replace(/&/g, "&")));
        var h = 0,
            p = 1,
            d = 0,
            v = 0;
        var m = document.createElement("iframe"),
            g = "undefined" == typeof g || null == g ? 1 : 2,
            y = "auto";
        2 == g && (y = "no");
        0 == v && (y = "no");
        if (t != "0") y = "no";
        e = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + e + "&content_url=" + a + "&news_title=" + c + "&num_count=" + h + "&debugcache=" + p + "&min=" + d + "&scroll=" + v + "&http_referer=" + l + "&verify=" + s + "&verify_flag=" + o + "&funny_flag=" + t + "&iframe_comment_id=" + u + "&comment_flag=" + c_f + "&news_url_short=" + f;
        iframe_comment_id = u;
        m.setAttribute("width", r);
        m.setAttribute("height", i);
        m.setAttribute("border", "medium none");
        m.setAttribute("overflow", "hidden");
        m.setAttribute("scrolling", y);
        m.setAttribute("frameborder", "0");
        m.setAttribute("id", u);
        m.setAttribute("src", e);
        document.getElementById(n).appendChild(m);
        mingid_iframe_comment_static = u;
        mingid_comment_cover = n
    }
};
var VIETID_QUESTION_IFRAME_FUNC = {
    vietidQuestionGenIfram: function (w, h, a, c, t, r, d, i, f) {
		//width, height, app_key, content_url, news_title, http_referer, id div comment, id iframe, comment_flag
		if ("undefined" == typeof w || null == w || 0 == w) w = 682;
		if ("undefined" == typeof h || null == h || 0 == h || h == 238) h = 238;
		if ("undefined" == typeof a || null == a) a = "";
		if ("undefined" == typeof c || null == c) c = "";
		if ("undefined" == typeof t || null == t) t = "";
		if ("undefined" == typeof r || null == r) r = "";
		if ("undefined" == typeof d || null == d) d = "mingid_comments_content";
		if ("undefined" == typeof i || null == i) i = "mingid_comment_iframe";
		if ("undefined" == typeof f || null == f) f = 1;

        var m = document.createElement("iframe"),
        e = "http://" + MINGID_COMMENT_DOMAIN + "/commentsAdv?app_key=" + a + "&content_url=" + c + "&news_title=" + t + "&http_referer=" + r + "&iframe_comment_id=" + i + "&comment_flag=" + f;
        m.setAttribute("width", w);
        m.setAttribute("height", h);
        m.setAttribute("border", "medium none");
        m.setAttribute("overflow", "hidden");
        m.setAttribute("scrolling", "no");
        m.setAttribute("frameborder", "0");
        m.setAttribute("id", i);
        m.setAttribute("src", e);
        document.getElementById(d).appendChild(m);
    }
};
var VIETID_WMC_IFRAME_FUNC = {
    mingidGenIframWmc: function (e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, rt, hd) {
        if ("undefined" == typeof hd || null == hd) hd = 0;

        var app_key = n;
        var g = document.location.href;
        var y = g.indexOf("#itemComment_");
        var b = $(window);
        d = 3;
        v = 0;
        if (d == 1 || d == 2 || y > -1|| d == 3) {
            if ("undefined" == typeof m || null == m) m = 0;
            if ("undefined" == typeof v || null == v) v = 0;
            if ("undefined" == typeof t || null == t || 0 == t || t == 238) t = 238;
            if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
            if ("undefined" == typeof h || null == h) h = "0";
            if ("undefined" == typeof p || null == p) p = "0";
            if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
            if ("undefined" == typeof d || null == d) d = "0";
            if ("undefined" == typeof rt || null == rt) rt = "0";
            var w = document.createElement("iframe"),
                E = "undefined" == typeof E || null == E ? 1 : 2,
                S = "auto";
            2 == E && (S = "no");
            0 == a && (S = "no");
            if (d != "0") S = "no";


            n = "http://" + MINGID_COMMENT_DOMAIN + "/commentsWmcV2?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&height=" + t + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m + "&real_time=" + rt;


            iframe_comment_id = c;
            w.setAttribute("width", e);
            if (v!=1){
                w.setAttribute("height", 0);
            }
            w.setAttribute("border", "medium none");
            w.setAttribute("overflow", "hidden");
            w.setAttribute("scrolling", S);
            w.setAttribute("frameborder", "0");
            w.setAttribute("id", c);
            w.setAttribute("src", n);
            document.getElementById(l).appendChild(w);
            mingid_iframe_comment_static = c
        } else {
            mingid_comment_cover = l;
            if (typeof mingid_comment_cover === "undefined") {
                mingid_comment_cover = "mingid_comments_content"
            }
            //var x = '<div id="comment_loading" style="text-align:center"><img style="height:15px;"src="http://mingid.vcmedia.vn/v4/images/comment/loading_head.gif" /></div>';
            var x = '';
            $("#" + mingid_comment_cover).append(x);
            var T = $("#" + mingid_comment_cover).offset().top;

            if (T < screen.availHeight) {

                if ("undefined" == typeof m || null == m) m = 0;
                if ("undefined" == typeof v || null == v) v = 0;
                if ("undefined" == typeof t || null == t || 0 == t || t == 238) t = 238;
                if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
                if ("undefined" == typeof h || null == h) h = "0";
                if ("undefined" == typeof p || null == p) p = "0";
                if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
                if ("undefined" == typeof d || null == d) d = "0";
                var w = document.createElement("iframe"),
                    E = "undefined" == typeof E || null == E ? 1 : 2,
                    S = "auto";
                2 == E && (S = "no");
                0 == a && (S = "no");
                if (d != "0") S = "no";


                n = "http://" + MINGID_COMMENT_DOMAIN + "/commentsWmcV2?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;


                iframe_comment_id = c;
                w.setAttribute("width", e);
                if (v!=1){
                    w.setAttribute("height", 0);
                }
                w.setAttribute("border", "medium none");
                w.setAttribute("overflow", "hidden");
                w.setAttribute("scrolling", S);
                w.setAttribute("frameborder", "0");
                w.setAttribute("id", c);
                w.setAttribute("src", n);
                document.getElementById(l).appendChild(w);
                mingid_iframe_comment_static = c;
                var N = setInterval(function () {
                    if ($("#" + mingid_iframe_comment_static).height() > 0) {
                        clearInterval(N);
                        $("#comment_loading").hide()
                    }
                }, 3e3);
                if(app_key=='5f88cdece459ae8dfa25ee90fa9e6caf') {
                    includeCssFileAma();
                    var html = '<a class="mingid-new-stories" onclick="hide_popup()" href="javascript://" style="display:none;">';
                    html += '<span class="mingid-up-arrow"></span>';
                    html += 'Có <span class="mingid_count_stories mingid-red"></span> câu trả lời mới </a>';

                    $('.main').prepend(html);
                }
            } else {
                    b.scroll(function () {
                    var g = $(this).scrollTop();
                    if (g + $(window).height() > T - 300) {
                        if ($("#" + mingid_comment_cover).children("#" + c).length == 0) {
                            if ("undefined" == typeof m || null == m) m = 0;
                            if ("undefined" == typeof v || null == v) v = 0;
                            if ("undefined" == typeof t || null == t || 0 == t || t == 238) t = 238;
                            if ("undefined" == typeof l || null == l) l = "mingid_comments_content";
                            if ("undefined" == typeof h || null == h) h = "0";
                            if ("undefined" == typeof p || null == p) p = "0";
                            if ("undefined" == typeof c || null == c) c = "mingid_comment_iframe";
                            if ("undefined" == typeof d || null == d) d = "0";
                            var y = document.createElement("iframe"),
                                b = "undefined" == typeof b || null == b ? 1 : 2,
                                w = "auto";
                            2 == b && (w = "no");
                            0 == a && (w = "no");
                            if (d != "0") w = "no";


                            n = "http://" + MINGID_COMMENT_DOMAIN + "/commentsWmc2?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;
                                //n = "http://" + MINGID_COMMENT_DOMAIN + "/comments?app_key=" + n + "&content_url=" + r + "&news_title=" + i + "&num_count=" + s + "&debugcache=" + o + "&min=" + u + "&scroll=" + a + "&http_referer=" + f + "&verify=" + h + "&verify_flag=" + p + "&funny_flag=" + d + "&iframe_comment_id=" + c + "&comment_flag=" + v + "&news_url_short=" + m;


                            iframe_comment_id = c;
                            y.setAttribute("width", e);
                            if (v!=1){
                                y.setAttribute("height", 0);
                            }
                            y.setAttribute("height", 0);
                            y.setAttribute("border", "medium none");
                            y.setAttribute("overflow", "hidden");
                            y.setAttribute("scrolling", w);
                            y.setAttribute("frameborder", "0");
                            y.setAttribute("id", c);
                            y.setAttribute("src", n);
                            document.getElementById(l).appendChild(y);
                            mingid_iframe_comment_static = c;
                            var E = setInterval(function () {
                                if ($("#" + mingid_iframe_comment_static).height() > 100) {
                                    clearInterval(E);
                                    $("#comment_loading").hide()
                                }
                            }, 3e3);
                        }
                    }
                })
            }
        }
    }
};
setTimeout("ifrResize()", MINGID_CONS.TIMEOUT_IFR);
window.onload = function () {
    jQuery(".noti_pop_list").MIDjScrollPane({
        autoReinitialise: true
    })
};
var urlabc = function () {
    var e = top.location.toString(),
        t = document.domain;
    if ("" == t) return e;
    e = e.substring(e.indexOf(t) + t.length, e.length);
    e = e.toString().split("#mh_");
    return e[0]
}, urlabcd = function () {
        var e = top.location.toString(),
            t = document.domain;
        if ("" == t) return e;
        e = e.substring(e.indexOf(t) + t.length, e.length);
        e = e.toString().split("#itemComment_");
        return e[0]
    };
var flag = true;
window.addEventListener ? addEventListener("message", listener, !1) : attachEvent("onmessage", listener);
var MINGID_STATIC_DOMAIN = "http://mingid.vcmedia.vn";
//if (document.domain != "autopro.com.vn") {
    var requirejs_vid,require_vid,define_vid;(function(global){function isFunction(e){return ostring.call(e)==="[object Function]"}function isArray(e){return ostring.call(e)==="[object Array]"}function each(e,t){if(e){var n;for(n=0;n<e.length;n+=1){if(e[n]&&t(e[n],n,e)){break}}}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1;n-=1){if(e[n]&&t(e[n],n,e)){break}}}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e){if(hasProp(e,n)){if(t(e[n],n)){break}}}}function mixin(e,t,n,r){if(t){eachProp(t,function(t,i){if(n||!hasProp(e,i)){if(r&&typeof t==="object"&&t&&!isArray(t)&&!isFunction(t)&&!(t instanceof RegExp)){if(!e[i]){e[i]={}}mixin(e[i],t,n,r)}else{e[i]=t}}})}return e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e){return e}var t=global;each(e.split("."),function(e){t=t[e]});return t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);i.requireType=e;i.requireModules=r;if(n){i.originalError=n}return i}function newContext(e){function m(e){var t,n;for(t=0;t<e.length;t++){n=e[t];if(n==="."){e.splice(t,1);t-=1}else if(n===".."){if(t===0||t==1&&e[2]===".."||e[t-1]===".."){continue}else if(t>0){e.splice(t-1,2);t-=2}}}}function g(e,t,n){var r,i,s,u,a,f,l,c,h,p,d,v,g=t&&t.split("/"),y=o.map,b=y&&y["*"];if(e){e=e.split("/");l=e.length-1;if(o.nodeIdCompat&&jsSuffixRegExp.test(e[l])){e[l]=e[l].replace(jsSuffixRegExp,"")}if(e[0].charAt(0)==="."&&g){v=g.slice(0,g.length-1);e=v.concat(e)}m(e);e=e.join("/")}if(n&&y&&(g||b)){s=e.split("/");e:for(u=s.length;u>0;u-=1){f=s.slice(0,u).join("/");if(g){for(a=g.length;a>0;a-=1){i=getOwn(y,g.slice(0,a).join("/"));if(i){i=getOwn(i,f);if(i){c=i;h=u;break e}}}}if(!p&&b&&getOwn(b,f)){p=getOwn(b,f);d=u}}if(!c&&p){c=p;h=d}if(c){s.splice(0,h,c);e=s.join("/")}}r=getOwn(o.pkgs,e);return r?r:e}function y(e){if(isBrowser){each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===r.contextName){t.parentNode.removeChild(t);return true}})}}function b(e){var t=getOwn(o.paths,e);if(t&&isArray(t)&&t.length>1){t.shift();r.require_vid.undef(e);r.makeRequire(null,{skipMap:true})([e]);return true}}function w(e){var t,n=e?e.indexOf("!"):-1;if(n>-1){t=e.substring(0,n);e=e.substring(n+1,e.length)}return[t,e]}function E(e,t,n,i){var s,o,u,a,f=null,l=t?t.name:null,h=e,p=true,m="";if(!e){p=false;e="_@r"+(d+=1)}a=w(e);f=a[0];e=a[1];if(f){f=g(f,l,i);o=getOwn(c,f)}if(e){if(f){if(o&&o.normalize){m=o.normalize(e,function(e){return g(e,l,i)})}else{m=e.indexOf("!")===-1?g(e,l,i):e}}else{m=g(e,l,i);a=w(m);f=a[0];m=a[1];n=true;s=r.nameToUrl(m)}}u=f&&!o&&!n?"_unnormalized"+(v+=1):"";return{prefix:f,name:m,parentMap:t,unnormalized:!!u,url:s,originalName:h,isDefine:p,id:(f?f+"!"+m:m)+u}}function S(e){var t=e.id,n=getOwn(u,t);if(!n){n=u[t]=new r.Module(e)}return n}function x(e,t,n){var r=e.id,i=getOwn(u,r);if(hasProp(c,r)&&(!i||i.defineEmitComplete)){if(t==="defined"){n(c[r])}}else{i=S(e);if(i.error&&t==="error"){n(i.error)}else{i.on(t,n)}}}function T(e,t){var n=e.requireModules,r=false;if(t){t(e)}else{each(n,function(t){var n=getOwn(u,t);if(n){n.error=e;if(n.events.error){r=true;n.emit("error",e)}}});if(!r){req.onError(e)}}}function N(){if(globalDefQueue.length){apsp.apply(l,[l.length,0].concat(globalDefQueue));globalDefQueue=[]}}function C(e){delete u[e];delete a[e]}function k(e,t,n){var r=e.map.id;if(e.error){e.emit("error",e.error)}else{t[r]=true;each(e.depMaps,function(r,i){var s=r.id,o=getOwn(u,s);if(o&&!e.depMatched[i]&&!n[s]){if(getOwn(t,s)){e.defineDep(i,c[s]);e.check()}else{k(o,t,n)}}});n[r]=true}}function L(){var e,n,i=o.waitSeconds*1e3,u=i&&r.startTime+i<(new Date).getTime(),f=[],l=[],c=false,h=true;if(t){return}t=true;eachProp(a,function(e){var t=e.map,r=t.id;if(!e.enabled){return}if(!t.isDefine){l.push(e)}if(!e.error){if(!e.inited&&u){if(b(r)){n=true;c=true}else{f.push(r);y(r)}}else if(!e.inited&&e.fetched&&t.isDefine){c=true;if(!t.prefix){return h=false}}}});if(u&&f.length){e=makeError("timeout","Load timeout for modules: "+f,null,f);e.contextName=r.contextName;return T(e)}if(h){each(l,function(e){k(e,{},{})})}if((!u||n)&&c){if((isBrowser||isWebWorker)&&!s){s=setTimeout(function(){s=0;L()},50)}}t=false}function A(e){if(!hasProp(c,e[0])){S(E(e[0],null,true)).init(e[1],e[2])}}function O(e,t,n,r){if(e.detachEvent&&!isOpera){if(r){e.detachEvent(r,t)}}else{e.removeEventListener(n,t,false)}}function M(e){var t=e.currentTarget||e.srcElement;O(t,r.onScriptLoad,"load","onreadystatechange");O(t,r.onScriptError,"error");return{node:t,id:t&&t.getAttribute("data-requiremodule")}}function _(){var e;N();while(l.length){e=l.shift();if(e[0]===null){return T(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]))}else{A(e)}}}var t,n,r,i,s,o={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},u={},a={},f={},l=[],c={},h={},p={},d=1,v=1;i={require_vid:function(e){if(e.require_vid){return e.require_vid}else{return e.require_vid=r.makeRequire(e.map)}},exports:function(e){e.usingExports=true;if(e.map.isDefine){if(e.exports){return c[e.map.id]=e.exports}else{return e.exports=c[e.map.id]={}}}},module:function(e){if(e.module){return e.module}else{return e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(o.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}}};n=function(e){this.events=getOwn(f,e.id)||{};this.map=e;this.shim=getOwn(o.shim,e.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};n.prototype={init:function(e,t,n,r){r=r||{};if(this.inited){return}this.factory=t;if(n){this.on("error",n)}else if(this.events.error){n=bind(this,function(e){this.emit("error",e)})}this.depMaps=e&&e.slice(0);this.errback=n;this.inited=true;this.ignore=r.ignore;if(r.enabled||this.enabled){this.enable()}else{this.check()}},defineDep:function(e,t){if(!this.depMatched[e]){this.depMatched[e]=true;this.depCount-=1;this.depExports[e]=t}},fetch:function(){if(this.fetched){return}this.fetched=true;r.startTime=(new Date).getTime();var e=this.map;if(this.shim){r.makeRequire(this.map,{enableBuildCallback:true})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}else{return e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;if(!h[e]){h[e]=true;r.load(this.map.id,e)}},check:function(){if(!this.enabled||this.enabling){return}var e,t,n=this.map.id,i=this.depExports,s=this.exports,o=this.factory;if(!this.inited){this.fetch()}else if(this.error){this.emit("error",this.error)}else if(!this.defining){this.defining=true;if(this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError){try{s=r.execCb(n,o,i,s)}catch(u){e=u}}else{s=r.execCb(n,o,i,s)}if(this.map.isDefine&&s===undefined){t=this.module;if(t){s=t.exports}else if(this.usingExports){s=this.exports}}if(e){e.requireMap=this.map;e.requireModules=this.map.isDefine?[this.map.id]:null;e.requireType=this.map.isDefine?"define_vid":"require_vid";return T(this.error=e)}}else{s=o}this.exports=s;if(this.map.isDefine&&!this.ignore){c[n]=s;if(req.onResourceLoad){req.onResourceLoad(r,this.map,this.depMaps)}}C(n);this.defined=true}this.defining=false;if(this.defined&&!this.defineEmitted){this.defineEmitted=true;this.emit("defined",this.exports);this.defineEmitComplete=true}}},callPlugin:function(){var e=this.map,t=e.id,n=E(e.prefix);this.depMaps.push(n);x(n,"defined",bind(this,function(n){var i,s,a,f=getOwn(p,this.map.id),l=this.map.name,c=this.map.parentMap?this.map.parentMap.name:null,h=r.makeRequire(e.parentMap,{enableBuildCallback:true});if(this.map.unnormalized){if(n.normalize){l=n.normalize(l,function(e){return g(e,c,true)})||""}s=E(e.prefix+"!"+l,this.map.parentMap);x(s,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:true,ignore:true})}));a=getOwn(u,s.id);if(a){this.depMaps.push(s);if(this.events.error){a.on("error",bind(this,function(e){this.emit("error",e)}))}a.enable()}return}if(f){this.map.url=r.nameToUrl(f);this.load();return}i=bind(this,function(e){this.init([],function(){return e},null,{enabled:true})});i.error=bind(this,function(e){this.inited=true;this.error=e;e.requireModules=[t];eachProp(u,function(e){if(e.map.id.indexOf(t+"_unnormalized")===0){C(e.map.id)}});T(e)});i.fromText=bind(this,function(n,s){var u=e.name,a=E(u),f=useInteractive;if(s){n=s}if(f){useInteractive=false}S(a);if(hasProp(o.config,t)){o.config[u]=o.config[t]}try{req.exec(n)}catch(l){return T(makeError("fromtexteval","fromText eval for "+t+" failed: "+l,l,[t]))}if(f){useInteractive=true}this.depMaps.push(a);r.completeLoad(u);h([u],i)});n.load(e.name,h,i,o)}));r.enable(n,this);this.pluginMaps[n.id]=n},enable:function(){a[this.map.id]=this;this.enabled=true;this.enabling=true;each(this.depMaps,bind(this,function(e,t){var n,s,o;if(typeof e==="string"){e=E(e,this.map.isDefine?this.map:this.map.parentMap,false,!this.skipMap);this.depMaps[t]=e;o=getOwn(i,e.id);if(o){this.depExports[t]=o(this);return}this.depCount+=1;x(e,"defined",bind(this,function(e){this.defineDep(t,e);this.check()}));if(this.errback){x(e,"error",bind(this,this.errback))}}n=e.id;s=u[n];if(!hasProp(i,n)&&s&&!s.enabled){r.enable(e,this)}}));eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(u,e.id);if(t&&!t.enabled){r.enable(e,this)}}));this.enabling=false;this.check()},on:function(e,t){var n=this.events[e];if(!n){n=this.events[e]=[]}n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)});if(e==="error"){delete this.events[e]}}};r={config:o,contextName:e,registry:u,defined:c,urlFetched:h,defQueue:l,Module:n,makeModuleMap:E,nextTick:req.nextTick,onError:T,configure:function(e){if(e.baseUrl){if(e.baseUrl.charAt(e.baseUrl.length-1)!=="/"){e.baseUrl+="/"}}var t=o.shim,n={paths:true,bundles:true,config:true,map:true};eachProp(e,function(e,t){if(n[t]){if(!o[t]){o[t]={}}mixin(o[t],e,true,true)}else{o[t]=e}});if(e.bundles){eachProp(e.bundles,function(e,t){each(e,function(e){if(e!==t){p[e]=t}})})}if(e.shim){eachProp(e.shim,function(e,n){if(isArray(e)){e={deps:e}}if((e.exports||e.init)&&!e.exportsFn){e.exportsFn=r.makeShimExports(e)}t[n]=e});o.shim=t}if(e.packages){each(e.packages,function(e){var t,n;e=typeof e==="string"?{name:e}:e;n=e.name;t=e.location;if(t){o.paths[n]=e.location}o.pkgs[n]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")})}eachProp(u,function(e,t){if(!e.inited&&!e.map.unnormalized){e.map=E(t)}});if(e.deps||e.callback){r.require_vid(e.deps||[],e.callback)}},makeShimExports:function(e){function t(){var t;if(e.init){t=e.init.apply(global,arguments)}return t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function s(o,a,f){var l,h,p;if(n.enableBuildCallback&&a&&isFunction(a)){a.__requireJsBuild=true}if(typeof o==="string"){if(isFunction(a)){return T(makeError("requireargs","Invalid require call"),f)}if(t&&hasProp(i,o)){return i[o](u[t.id])}if(req.get){return req.get(r,o,t,s)}h=E(o,t,false,true);l=h.id;if(!hasProp(c,l)){return T(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))}return c[l]}_();r.nextTick(function(){_();p=S(E(null,t));p.skipMap=n.skipMap;p.init(o,a,f,{enabled:true});L()});return s}n=n||{};mixin(s,{isBrowser:isBrowser,toUrl:function(e){var n,i=e.lastIndexOf("."),s=e.split("/")[0],o=s==="."||s==="..";if(i!==-1&&(!o||i>1)){n=e.substring(i,e.length);e=e.substring(0,i)}return r.nameToUrl(g(e,t&&t.id,true),n,true)},defined:function(e){return hasProp(c,E(e,t,false,true).id)},specified:function(e){e=E(e,t,false,true).id;return hasProp(c,e)||hasProp(u,e)}});if(!t){s.undef=function(e){N();var n=E(e,t,true),r=getOwn(u,e);y(e);delete c[e];delete h[n.url];delete f[e];eachReverse(l,function(t,n){if(t[0]===e){l.splice(n,1)}});if(r){if(r.events.defined){f[e]=r.events}C(e)}}}return s},enable:function(e){var t=getOwn(u,e.id);if(t){S(e).enable()}},completeLoad:function(e){var t,n,r,i=getOwn(o.shim,e)||{},s=i.exports;N();while(l.length){n=l.shift();if(n[0]===null){n[0]=e;if(t){break}t=true}else if(n[0]===e){t=true}A(n)}r=getOwn(u,e);if(!t&&!hasProp(c,e)&&r&&!r.inited){if(o.enforceDefine&&(!s||!getGlobal(s))){if(b(e)){return}else{return T(makeError("nodefine","No define call for "+e,null,[e]))}}else{A([e,i.deps||[],i.exportsFn])}}L()},nameToUrl:function(e,t,n){var i,s,u,a,f,l,c,h=getOwn(o.pkgs,e);if(h){e=h}c=getOwn(p,e);if(c){return r.nameToUrl(c,t,n)}if(req.jsExtRegExp.test(e)){f=e+(t||"")}else{i=o.paths;s=e.split("/");for(u=s.length;u>0;u-=1){a=s.slice(0,u).join("/");l=getOwn(i,a);if(l){if(isArray(l)){l=l[0]}s.splice(0,u,l);break}}f=s.join("/");f+=t||(/^data\:|\?/.test(f)||n?"":".js");f=(f.charAt(0)==="/"||f.match(/^[\w\+\.\-]+:/)?"":o.baseUrl)+f}return o.urlArgs?f+((f.indexOf("?")===-1?"?":"&")+o.urlArgs):f},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if(e.type==="load"||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=M(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=M(e);if(!b(t.id)){return T(makeError("scripterror","Script error for: "+t.id,e,[t.id]))}}};r.require_vid=r.makeRequire();return r}function getInteractiveScript(){if(interactiveScript&&interactiveScript.readyState==="interactive"){return interactiveScript}eachReverse(scripts(),function(e){if(e.readyState==="interactive"){return interactiveScript=e}});return interactiveScript}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.15",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!!(typeof window!=="undefined"&&typeof navigator!=="undefined"&&window.document),isWebWorker=!isBrowser&&typeof importScripts!=="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=false;if(typeof define_vid!=="undefined"){return}if(typeof requirejs_vid!=="undefined"){if(isFunction(requirejs_vid)){return}cfg=requirejs_vid;requirejs_vid=undefined}if(typeof require_vid!=="undefined"&&!isFunction(require_vid)){cfg=require_vid;require_vid=undefined}req=requirejs_vid=function(e,t,n,r){var i,s,o=defContextName;if(!isArray(e)&&typeof e!=="string"){s=e;if(isArray(t)){e=t;t=n;n=r}else{e=[]}}if(s&&s.context){o=s.context}i=getOwn(contexts,o);if(!i){i=contexts[o]=req.s.newContext(o)}if(s){i.configure(s)}return i.require_vid(e,t,n)};req.config=function(e){return req(e)};req.nextTick=typeof setTimeout!=="undefined"?function(e){setTimeout(e,4)}:function(e){e()};if(!require_vid){require_vid=req}req.version=version;req.jsExtRegExp=/^\/|:|\?|\.js$/;req.isBrowser=isBrowser;s=req.s={contexts:contexts,newContext:newContext};req({});each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require_vid[e].apply(t,arguments)}});if(isBrowser){head=s.head=document.getElementsByTagName("head")[0];baseElement=document.getElementsByTagName("base")[0];if(baseElement){head=s.head=baseElement.parentNode}}req.onError=defaultOnError;req.createNode=function(e,t,n){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");r.type=e.scriptType||"text/javascript";r.charset="utf-8";r.async=true;return r};req.load=function(e,t,n){var r=e&&e.config||{},i;if(isBrowser){i=req.createNode(r,t,n);i.setAttribute("data-requirecontext",e.contextName);i.setAttribute("data-requiremodule",t);if(i.attachEvent&&!(i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0)&&!isOpera){useInteractive=true;i.attachEvent("onreadystatechange",e.onScriptLoad)}else{i.addEventListener("load",e.onScriptLoad,false);i.addEventListener("error",e.onScriptError,false)}i.src=n;currentlyAddingScript=i;if(baseElement){head.insertBefore(i,baseElement)}else{head.appendChild(i)}currentlyAddingScript=null;return i}else if(isWebWorker){try{importScripts(n);e.completeLoad(t)}catch(s){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+n,s,[t]))}}};if(isBrowser&&!cfg.skipDataMain){eachReverse(scripts(),function(e){if(!head){head=e.parentNode}dataMain=e.getAttribute("data-main");if(dataMain){mainScript=dataMain;if(!cfg.baseUrl){src=mainScript.split("/");mainScript=src.pop();subPath=src.length?src.join("/")+"/":"./";cfg.baseUrl=subPath}mainScript=mainScript.replace(jsSuffixRegExp,"");if(req.jsExtRegExp.test(mainScript)){mainScript=dataMain}cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript];return true}})}define_vid=function(e,t,n){var r,i;if(typeof e!=="string"){n=t;t=e;e=null}if(!isArray(t)){n=t;t=null}if(!t&&isFunction(n)){t=[];if(n.length){n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)});t=(n.length===1?["require_vid"]:["require_vid","exports","module"]).concat(t)}}if(useInteractive){r=currentlyAddingScript||getInteractiveScript();if(r){if(!e){e=r.getAttribute("data-requiremodule")}i=contexts[r.getAttribute("data-requirecontext")]}}(i?i.defQueue:globalDefQueue).push([e,t,n])};define_vid.amd={jQuery:true};req.exec=function(text){return eval(text)};req(cfg)})(this)

    function VID_counNotif() {
        return
    }

    function runTask(e) {
        e.initTaskbar();
		if (!jQuery('a').hasClass('to_top')) {
			jQuery("#VID_taskbar").after('<div style="display: block;" id="toTop" class="VID-scrolltop"><span>Trở lên trên</span></div>');
		}
        $("#toTop").click(function (e) {
            $("html, body").animate({
                scrollTop: "0px"
            }, "slow")
        });
        jQuery(window).resize(function () {
            if (jQuery(window).width() < 1100) {
                jQuery("#toTop").hide();
                return
            }
        });
        jQuery(document).scroll(function () {
            if (jQuery(window).width() < 1100) {
                jQuery("#toTop").hide();
                return
            }
            if (get_scrolltop() < jQuery(window).height()) {
                jQuery("#toTop").hide()
            } else {
                jQuery("#toTop").show()
            }
        })
    }

    function prepTaskBVID() {
        var e = document.getElementById("VID_taskbar"),
            t = 3e5;
        var n = "@import url('http://mingid.vcmedia.vn/taskbar/css/taskbar_core.css');";
        var r = document.createElement("link");
        r.rel = "stylesheet";
        r.href = "data:text/css," + escape(n);
        document.getElementsByTagName("head")[0].appendChild(r);
        require_vid.config({
            enforceDefine: false,
            waitSeconds: 15
        });
        require_vid(["http://mingid.vcmedia.vn/taskbar/js/vid_taskbar_core.js"], function () {
            require_vid(["http://mingid.vcmedia.vn/taskbar/js/util.js"], function (e) {
                if (document.getElementById("VID_taskbar") !== null) {
                    runTask(e)
                } else {
                    setTimeout(function () {
                        if (document.getElementById("VID_taskbar") !== null) {
                            runTask(e)
                        } else {
                            setTimeout(function () {
                                if (document.getElementById("VID_taskbar") !== null) {
                                    runTask(e)
                                } else {
                                    setTimeout(function () {
                                        if (document.getElementById("VID_taskbar") !== null) {
                                            runTask(e)
                                        } else {
                                            setTimeout(function () {
                                                if (document.getElementById("VID_taskbar") !== null) {
                                                    runTask(e)
                                                } else {
                                                    setTimeout(function () {
                                                        if (document.getElementById("VID_taskbar") !== null) {
                                                            runTask(e)
                                                        } else {
                                                            setTimeout(function () {
                                                                if (document.getElementById("VID_taskbar") !== null) {
                                                                    runTask(e)
                                                                } else {
                                                                    setTimeout(function () {
                                                                        if (document.getElementById("VID_taskbar") !== null) {
                                                                            runTask(e)
                                                                        } else {
                                                                            setTimeout(function () {
                                                                                if (document.getElementById("VID_taskbar") !== null) {
                                                                                    runTask(e)
                                                                                } else {
                                                                                    setTimeout(function () {
                                                                                        if (document.getElementById("VID_taskbar") !== null) {
                                                                                            runTask(e)
                                                                                        } else {
                                                                                            setTimeout(function () {
                                                                                                if (document.getElementById("VID_taskbar") !== null) {
                                                                                                    runTask(e)
                                                                                                }
                                                                                            }, 500)
                                                                                        }
                                                                                    }, 500)
                                                                                }
                                                                            }, 500)
                                                                        }
                                                                    }, 500)
                                                                }
                                                            }, 500)
                                                        }
                                                    }, 500)
                                                }
                                            }, 500)
                                        }
                                    }, 500)
                                }
                            }, 500)
                        }
                    }, 500)
                }
            })
        })
    }
    prepTaskBVID()
//}
$(window).scroll(function () {
    var e = 0;
    var t = "http://" + MINGID_COMMENT_JAM_DOMAIN;
    if ($("#mingid_comments_content").height() > 500) {
		if ($('#mingid_comment_iframe').length){
			var n = document.getElementById("mingid_comment_iframe").contentWindow;
			if((($(window).scrollTop() + $(window).height())/$(document).height())*100 >= 90) {
				if (flag == true) {
					n.postMessage("loadmore", t);
					flag = false
				}
				return false
			}
		}

    }
});
function includeCssFileAma(){
	var styles = "@import url('http://mingid.vcmedia.vn/ama/css/style_comment.css');";
	var newSS=document.createElement('link');
	newSS.rel='stylesheet';
	newSS.href='data:text/css,'+escape(styles);
	document.getElementsByTagName("head")[0].appendChild(newSS);
}
function order_tabs() {
	var str = 'new_reply_comment'
	parentPostMessage(str);
}
function parentPostMessage(str) {
	var url = "http://" + MINGID_COMMENT_DOMAIN + "/comments";
	var iframeWin = document.getElementById("mingid_comment_iframe").contentWindow;
	iframeWin.postMessage(str, url);
}
var B64 = {
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    lookup: null,
    ie: /MSIE /.test(navigator.userAgent),
    ieo: /MSIE [67]/.test(navigator.userAgent),
    encode: function (e) {
        var t = B64.toUtf8(e),
            n = -1,
            r = t.length,
            i, s, o = [, , , ];
        if (B64.ie) {
            var u = [];
            while (++n < r) {
                i = t[n + 1], s = t[n + 2];
                o[0] = t[n] >> 2;
                o[1] = (t[n] & 3) << 4 | t[++n] >> 4;
                if (isNaN(i)) o[2] = o[3] = 64;
                else {
                    o[2] = (t[n] & 15) << 2 | t[++n] >> 6;
                    o[3] = isNaN(s) ? 64 : t[n] & 63
                }
                u.push(B64.alphabet[o[0]], B64.alphabet[o[1]], B64.alphabet[o[2]], B64.alphabet[o[3]])
            }
            return u.join("")
        } else {
            u = "";
            while (++n < r) {
                i = t[n + 1], s = t[n + 2];
                o[0] = t[n] >> 2;
                o[1] = (t[n] & 3) << 4 | t[++n] >> 4;
                if (isNaN(i)) o[2] = o[3] = 64;
                else {
                    o[2] = (t[n] & 15) << 2 | t[++n] >> 6;
                    o[3] = isNaN(s) ? 64 : t[n] & 63
                }
                u += B64.alphabet[o[0]] + B64.alphabet[o[1]] + B64.alphabet[o[2]] + B64.alphabet[o[3]]
            }
            return u
        }
    },
    decode: function (e) {
        var t = B64.fromUtf8(e),
            n = 0,
            r = t.length;
        if (B64.ieo) {
            result = [];
            while (n < r) {
                if (t[n] < 128) result.push(String.fromCharCode(t[n++]));
                else if (t[n] > 191 && t[n] < 224) result.push(String.fromCharCode((t[n++] & 31) << 6 | t[n++] & 63));
                else result.push(String.fromCharCode((t[n++] & 15) << 12 | (t[n++] & 63) << 6 | t[n++] & 63))
            }
            return result.join("")
        } else {
            result = "";
            while (n < r) {
                if (t[n] < 128) result += String.fromCharCode(t[n++]);
                else if (t[n] > 191 && t[n] < 224) result += String.fromCharCode((t[n++] & 31) << 6 | t[n++] & 63);
                else result += String.fromCharCode((t[n++] & 15) << 12 | (t[n++] & 63) << 6 | t[n++] & 63)
            }
            return result
        }
    },
    toUtf8: function (e) {
        var t = -1,
            n = e.length,
            r, i = [];
        if (/^[\x00-\x7f]*$/.test(e))
            while (++t < n) i.push(e.charCodeAt(t));
        else
            while (++t < n) {
                r = e.charCodeAt(t);
                if (r < 128) i.push(r);
                else if (r < 2048) i.push(r >> 6 | 192, r & 63 | 128);
                else i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128)
            }
        return i
    },
    fromUtf8: function (e) {
        var t = -1,
            n, r = [],
            i = [, , , ];
        if (!B64.lookup) {
            n = B64.alphabet.length;
            B64.lookup = {};
            while (++t < n) B64.lookup[B64.alphabet[t]] = t;
            t = -1
        }
        n = e.length;
        while (t < n) {
            i[0] = B64.lookup[e.charAt(++t)];
            i[1] = B64.lookup[e.charAt(++t)];
            r.push(i[0] << 2 | i[1] >> 4);
            i[2] = B64.lookup[e.charAt(++t)];
            if (i[2] == 64) break;
            r.push((i[1] & 15) << 4 | i[2] >> 2);
            i[3] = B64.lookup[e.charAt(++t)];
            if (i[3] == 64) break;
            r.push((i[2] & 3) << 6 | i[3])
        }
        return r
    }
}