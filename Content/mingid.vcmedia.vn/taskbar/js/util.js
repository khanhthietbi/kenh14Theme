define_vid(function() {

    function notifyScroller(){
        if(typeof jQuery == 'undefined' || typeof jQuery.fn.osc_scroller == 'undefined') {
            setTimeout(notifyScroller, 100);
            return;
        }
        
        $(".VID-list-notify").osc_scroller({
            callback : {
                inBottom : function(params) {                
                    //params.inst.reset();
                    jQuery('#notifimgloading').show();
                    //load notifi data
                    MINGID_NOTIF_FUNC.PGNOTIF = MINGID_NOTIF_FUNC.PGNOTIF+1;
                    //MINGID_DATA_FUNC.getJsonP("get", "jsonp", MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF);                      
                    VIDDATA_getJsonP('get',  MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF, 'getAjaxnotif', ''); 
                    setTimeout(function() {
                        params.inst.reset();
                    }, 500);
                }
            }
        });    
    }

    function toggeSetting() {
        var stToggle = $('#VID-setting')[0];
        
        if(stToggle) {
            var msgArea = stToggle.parentNode;
            var msgTimer = null;
                
            var _outMsg = true;
            function closeSetting() {
                if(_outMsg) {
                    $(msgArea).removeClass('VID-action');
                    $(document).unbind('mousedown', closeSetting);
                }   
            }
        
            $(stToggle).hover(function(){
                _outMsg = false;
            }, function(){
                _outMsg = true;
            });
            //      Them de user click ra ngoai xu ly close box
            $('.VID-form').hover(function(){
                _outMsg = false;
            }, function(){
                _outMsg = true;
            });
             //      End : Them de user click ra ngoai xu ly close box   
        
            $(stToggle).click(function(e){
                if(_outMsg){
               
                } else {
                    $("ul[class='VID-taskbar VID-taskbar-login'] > li").removeClass('VID-action');
                    $(msgArea).toggleClass('VID-action');
                    if($(msgArea).hasClass('VID-action')) {
                        //close adm ads
                        if((typeof admTvcMini)!='undefined') admTvcMini();                        
                    }else {
                        //open admicro ads
                        if((typeof admTvcMedium)!='undefined') admTvcMedium();
                        //console.log('close')
                    } 
                    e.stopPropagation();
                }
                //      Them de user click ra ngoai xu ly close box
                if($(msgArea).hasClass("VID-action")) {
                    $(document).bind('mousedown', closeSetting);
                } else {
                    $(document).unbind('mousedown', closeSetting);
                } 
                //      End : Them de user click ra ngoai xu ly close box 
            });
            if($(msgArea).hasClass("VID-action")) {
                //console.log('open')
                //close adm ads
                if((typeof admTvcMini)!='undefined') admTvcMini();
            } else {
                //open admicro ads
                if((typeof admTvcMini)!='undefined') admTvcMedium();
                //console.log('close')
            } 
            
            $(".VID-close-ico-frm").click(function(){
                $(msgArea).removeClass('VID-action');
                //open admicro ads
                if((typeof admTvcMedium)!='undefined') admTvcMedium();
                return false;
            });     
            $(".VID-txt-logout-info").click(function(){
                logoutVID();
            });     
        }
    }


    /*function toggeNotify() {
        var notifyToggle = $('#notification')[0];
        
        if(notifyToggle) {
            var notifyArea = notifyToggle.parentNode;
            var notifyTimer = null;
                
            var _outNotify = true;
            function closeNotify() {
                if(_outNotify) {
                    $(notifyArea).removeClass('VID-action');
                    $(document).unbind('mousedown', closeNotify);
                }   
            }
        
            $(notifyToggle).hover(function(){
                _outNotify = false;
            }, function(){
                _outNotify = true;
            });
        
            $(notifyToggle).click(function(e){
                if(_outNotify){
                    
                } else {
                    $("ul[class='VID-taskbar VID-taskbar-login'] > li").removeClass('VID-action');
                    $(notifyArea).toggleClass('VID-action');
                    if($(notifyArea).hasClass('VID-action')) {

                        //close adm ads
                        if((typeof admTvcMini)!='undefined') admTvcMini();

                        jQuery('#notifimgloading').show();
                        //load notifi data
                        MINGID_NOTIF_FUNC.PGNOTIF = MINGID_NOTIF_FUNC.PGNOTIF+1;
                        //MINGID_DATA_FUNC.getJsonP("get", "jsonp", MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF);                      
                        VIDDATA_getJsonP('post',  MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF, 'getAjaxnotif', '');

                        //scroller
                        notifyScroller();
                    }else{
                        MINGID_NOTIF_FUNC.PGNOTIF = 0;
                        jQuery('.VID-form-notify').html('');
                        jQuery('.VID-form-notify').html('<span class="VID-rs"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png" alt="logo" title="VietId" class="VID-taskbar-text-ico"/>Thông báo<img style="text-align: center;height:18px;float:right;margin-right:20px;align:right;vertical-align:middle;display:none;width:32px;" src="http://mingid.vcmedia.vn/images/comment/ming_loading.gif" id="notifimgloading"><span class="VID-close-ico-frm"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/null.png" alt="close" title="Close" class="VID-img-close"/></span></span><div class="VID-content-notify" id="VID-content-notify"><ul class="VID-list-notify" id="UDVID-list-notify"></ul></div>');

                        //jQuery('#UDVID-list-notify').html('');
                        //jQuery('#VID-content-notify').removeClass('osc-scroller');
                        //jQuery('#VID-content-notify').html('<ul class="list-notify" id="UDVID-list-notify"></ul>');
                        //jQuery("#VID-content-notify").osc_scroller('reset');
                        //setTimeout(function() {
                            //params.inst.reset();
                        //}, 200);
                    }
                    e.stopPropagation();
                }
            //    
            //            if($(notifyArea).hasClass("action")) {
            //                $(document).bind('mousedown', closeNotify);
            //            } else {
            //                $(document).unbind('mousedown', closeNotify);
            //            } 
            });
            if($(notifyArea).hasClass("VID-action")) {
                //console.log('open')
                //close adm ads
                if((typeof admTvcMini)!='undefined') admTvcMini();
            } else {
                //open admicro ads
                if((typeof admTvcMini)!='undefined') admTvcMedium();
                //console.log('close')
            } 
            
            $(".VID-close-ico-frm").click(function(){
                $(notifyArea).removeClass('action');
                MINGID_NOTIF_FUNC.PGNOTIF = 0;
                jQuery('.VID-form-notify').html('');
                jQuery('.VID-form-notify').html('<span class="VID-rs"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png" alt="logo" title="VietId" class="VID-taskbar-text-ico"/>Thông báo<img style="text-align: center;height:18px;float:right;margin-right:20px;align:right;vertical-align:middle;display:none;width:32px;" src="http://mingid.vcmedia.vn/images/comment/ming_loading.gif" id="notifimgloading"><span class="VID-close-ico-frm"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/null.png" alt="close" title="Close" class="VID-img-close"/></span></span><div class="VID-content-notify" id="VID-content-notify"><ul class="VID-list-notify" id="UDVID-list-notify"></ul></div>');
                $("ul[class='VID-taskbar VID-taskbar-login'] > li").removeClass('VID-action');
                //closeNotify();
                //open admicro ads
                if((typeof admTvcMini)!='undefined') admTvcMedium();
                return;
            });        

            $('#btn-vid-login').click(function(e){
                var email = $('#inp-vid-email').val(),
                    password = $('#inp-vid-password').val();
                if(typeof email=='undefined' || email==''){
                    $('#retMess').html('Bạn chưa điền email!').addClass('VID-red');
                }
                else if(typeof password=='undefined' || password==''){
                    $('#retMess').html('Bạn chưa điền mật khẩu!').addClass('VID-red');
                }
                else{
                    var data = 'email='+email+'&password='+password;
                    VIDDATA_getJsonP('post', 'http://vietid.net/taskbar/login', 'taskbarLogin', data);
                    $('#vid_loading_img').show();
                }
            });
        }
    }*/


    /*function toggeNotify(){           
        console.log('toogle Notify');
        var notifyToggle = $('#notification')[0];
        
        if(notifyToggle) {
            var notifyArea = notifyToggle.parentNode;
            var notifyTimer = null;
                
            var _outNotify = true;

            function closeNotify() {
                if(_outNotify) {
                    $(notifyArea).removeClass('VID-action');
                    $(document).unbind('mousedown', closeNotify);
                }   
            }
        
            $(notifyToggle).hover(function(){
                _outNotify = false;
            }, function(){
                _outNotify = true;
            });
        
            $(notifyToggle).click(function(e){
                if(_outNotify){
               
                } else {
                    $("ul[class='VID-taskbar VID-taskbar-login'] > li").removeClass('VID-action');
                    $(notifyArea).toggleClass('VID-action');
                    $('#liVID-Taskbar-act').removeClass('VID-action');
                    if($(notifyArea).hasClass('VID-action')) {
                        notifyScroller();
                    }
                    e.stopPropagation();
                }
            });
            
            $(".VID-close-ico-frm").click(function(){
                $(notifyArea).removeClass('VID-action');
                return false;
            });     
        }
    }*/
    function toggeNotify() {
        var notifyToggle = $('#notification')[0];
        
        if(notifyToggle) {
            var notifyArea = notifyToggle.parentNode;
            var notifyTimer = null;
                
            var _outNotify = true;
            function closeNotify() {
                if(_outNotify) {
                    $(notifyArea).removeClass('VID-action');
                    $(document).unbind('mousedown', closeNotify);
                }   
            }
        
            $(notifyToggle).hover(function(){
                _outNotify = false;
            }, function(){
                _outNotify = true;
            });

            //      Them de user click ra ngoai xu ly close box
            $('.VID-form').hover(function(){
                _outNotify = false;
            }, function(){
                _outNotify = true;
            });
            //      End : Them de user click ra ngoai xu ly close box       

            $(notifyToggle).click(function(e){
                if(_outNotify){
                    
                } else {
                    $("ul[class='VID-taskbar VID-taskbar-login'] > li").removeClass('VID-action');
                    $(notifyArea).toggleClass('VID-action');
                    if($(notifyArea).hasClass('VID-action')) {
                        notifyScroller();

                        //reset notify count   
                        VID_reset_notify_count();

                        //close adm ads
                        if((typeof admTvcMini)!='undefined') admTvcMini();
                    }
                    e.stopPropagation();
                }
                //      Them de user click ra ngoai xu ly close box
                if($(notifyArea).hasClass("VID-action")) {
                    $(document).bind('mousedown', closeNotify);
                } else {
                    $(document).unbind('mousedown', closeNotify);
                } 
                //      End : Them de user click ra ngoai xu ly close box     
            //    
            //            if($(notifyArea).hasClass("action")) {
            //                $(document).bind('mousedown', closeNotify);
            //            } else {
            //                $(document).unbind('mousedown', closeNotify);
            //            } 
            });
            
            if($(notifyArea).hasClass("VID-action")) {
                //console.log('open')
                //close adm ads
                if((typeof admTvcMini)!='undefined') admTvcMini();
            } else {
                //open admicro ads
                if((typeof admTvcMini)!='undefined') admTvcMedium();
                //console.log('close')
            } 
            $(".VID-close-ico-frm").click(function(){
                $(notifyArea).removeClass('VID-action');
                //open admicro ads
                if((typeof admTvcMedium)!='undefined') admTvcMedium();
                return false;
            });     
        }
    }
    function toggeLogin(){
        //console.log('toogle Login');  
        //var notifyToggle = $('.text-vietid')[0];
        var notifyToggle = $('.VID-text-vietid')[0];
        //console.log(notifyToggle+'xxx');
        //console.log($('.text-vietid')+ ': toooooo')
        //if(notifyToggle) {
            var notifyArea = notifyToggle.parentNode;
            var notifyTimer = null;
                
            var _outNotify = true;
            function closeNotify() {
                if(_outNotify) {
                    $(notifyArea).removeClass('VID-action');
                    $(document).unbind('mousedown', closeNotify);
                }   
            }
        
            $(notifyToggle).hover(function(){
                _outNotify = false;
            }, function(){
                _outNotify = true;
            });
            //      Them de user click ra ngoai xu ly close box
            $('.VID-form').hover(function(){
                _outNotify = false;
            }, function(){
                _outNotify = true;
            });
             //      End : Them de user click ra ngoai xu ly close box   
        
            $(notifyToggle).click(function(e){
                if(_outNotify){
               
                } else {
                    $("ul[class='VID-taskbar VID-taskbar-login']").removeClass('VID-action');
                    $(notifyArea).toggleClass('VID-action');
                
                    if($(notifyArea).hasClass('VID-action')) {

                        //close adm ads
                        if((typeof admTvcMini)!='undefined') admTvcMini();
                        
                    }else {
                        //open admicro ads
                        if((typeof admTvcMedium)!='undefined') admTvcMedium();
                        //console.log('close')
                    } 
                    e.stopPropagation();
                }
                //      Them de user click ra ngoai xu ly close box
                if($(notifyArea).hasClass("VID-action")) {
                    $(document).bind('mousedown', closeNotify);
                } else {
                    $(document).unbind('mousedown', closeNotify);
                } 
                //      End : Them de user click ra ngoai xu ly close box 
        
            //            if($(notifyArea).hasClass("action")) {
            //                $(document).bind('mousedown', closeNotify);
            //            } else {
            //                $(document).unbind('mousedown', closeNotify);
            //            } 
            });
            
            if($(notifyArea).hasClass("VID-action")) {
                //console.log('open')
                //close adm ads
                if((typeof admTvcMini)!='undefined') admTvcMini();
            } else {
                //open admicro ads
                if((typeof admTvcMedium)!='undefined') admTvcMedium();
                //console.log('close')
            } 
            
            $(".VID-close-ico-frm").click(function(){
                $(notifyArea).removeClass('VID-action');
                //open admicro ads
                if((typeof admTvcMedium)!='undefined') admTvcMedium();
                return false;
            });     

            $('.VID-text-register-login').click(function(e){
                var email = $('#inp-vid-email').val(),
                    password = $('#inp-vid-password').val(),
                    cfm = $('#vid-check-confirm').is(':checked'), cfm_term=1;
                    
                if(typeof email=='undefined' || email==''){
                    $('#retMess').html('Bạn chưa điền email!').addClass('VID-red');
                }
                else if(typeof password=='undefined' || password==''){
                    $('#retMess').html('Bạn chưa điền mật khẩu!').addClass('VID-red');
                }
				/*
                else if(cfm!=true){
                    $('#retMess').html('Bạn phải chấp nhận các điều khoản sử dụng!').addClass('VID-red');
                    cfm_term = 0;
                }*/
                else{
					if(cfm!=true) cfm_term = 0;
                    
					var app_key = $("#VID_taskbar").attr('rel');
					if (typeof app_key == "undefined") {
						app_key = '';
					}
                    var data = 'email='+email+'&password='+password+'&cfm='+cfm_term+'&app_key='+app_key;
					
                    VIDDATA_getJsonP('post', 'http://vietid.net/taskbar/login', 'taskbarLogin', data);
                    $('#vid_loading_img').show();
                }
            });

            $('.VID-register-now').click(function(e){ //toggle register form
                //console.log('reg');
                showRegister();
            });
        //} 
    }
    
    function initTaskbar(){        
        var idTaskBar = document.getElementById('VID_taskbar');
        if(typeof idTaskBar!='undefined' && idTaskBar!=null && document.getElementById('VID_taskbar')!==null){
            idTaskBar.innerHTML = '<ul class="VID-taskbar" id="VID_ul_taskbar"></ul>';
        }else{
            return;
        }

        /*
        if(typeof VID_USER=='undefined') {
            VID_CUR_USER = '';
            MINGID_DATA_FUNC.setCookie('tmpChkCookie', 1, 365);

            var tmpChkCookie = MINGID_DATA_FUNC.getCookie('tmpChkCookie');
            if(tmpChkCookie==1){
                MINGID_DATA_FUNC.setCookie('tmpChkCookie', 1, -1);
                VIDDATA_getJsonP('get', 'http://vietid.net/taskbar/CheckStat', 'taskbarChecklogin');
				
            }
        }else{
			VIDDATA_getJsonP('get', 'http://vietid.net/taskbar/CheckStat', 'taskbarChecklogin');
			
            
			
            VID_CUR_USER = VID_USER;
        }*/
		
		VIDDATA_getJsonP('get', 'http://vietid.net/taskbar/CheckStat', 'taskbarChecklogin');
		//set interner	
        //console.log(  idTaskBar );
		var myVar = setInterval(function(){
		
		
			if(typeof idTaskBar!='undefined' || idTaskBar!='null'){
				//console.log('run taskbar');
			}
			/*
			VID_USER = MINGID_DATA_FUNC.getCookie('ming_user');
			VID_HASH = MINGID_DATA_FUNC.getCookie('ming_key');
			*/
			VID_CUR_USER = VID_USER;
			if(typeof VID_CUR_USER =='undefined') {
				VID_CUR_USER = '';
			}
			if( ((VID_USER)!='undefined' && VID_USER!='' && VID_USER!=null) && (typeof(VID_HASH)!='undefined' && VID_HASH != '' && VID_HASH!=null )){ //logged in
				
				var CUR_NOTIF_COUNT = MINGID_DATA_FUNC.getCookie('MIDNOTIFDATA');
				//console.log(CUR_NOTIF_COUNT.length)    
				var dataOfNotif = 0;
				var htmlNotifCount = '';
				if(typeof(CUR_NOTIF_COUNT)=='undefined') {
					dataOfNotif = 0;
					//console.log('hide0')
					/*$('.group-notify').hide();
					$('.notify-point').hide();*/
					htmlNotifCount = '';
				}else if(CUR_NOTIF_COUNT.length>0){
					var dataOfNotif = CUR_NOTIF_COUNT.split('_');
					dataOfNotif = parseInt(dataOfNotif[0]);
					//console.log('='+dataOfNotif)
					if(dataOfNotif>=1){
						//console.log('x')
						htmlNotifCount = '<span class="VID-group-notify"><span class="VID-notify-left"></span><span class="VID-notify-content"><span class="VID-notify-total" id="notify-total">'+dataOfNotif+'</span></span><span class="VID-notify-right"></span></span><span class="VID-notify-point"></span>';
						//console.log('show')
						//$('.group-notify').show();
						//$('.notify-point').show();
					}
					else{
						//console.log('y')
						//console.log('hide1')
						//$('.group-notify').hide();
						//$('.notify-point').hide();
						htmlNotifCount = '';
					}   
				} 
				
				var usrData = MINGID_DATA_FUNC.getCookie('ming_udata');     
				if(typeof usrData=='undefined'){
					VIDDATA_getJsonP('get', 'http://vietid.net/taskbar/CheckStat', 'taskbarChecklogin');
					var usrData = MINGID_DATA_FUNC.getCookie('ming_udata');
				}
				var usrData = usrData.split('|'), usrDataLen = usrData.length;

				$('#VID_ul_taskbar').addClass('VID-taskbar-login');
				if(usrDataLen>0){
					uData = [];
					for (var i = 0; i < usrDataLen; i++) {
						var U = usrData[i].split('::');
						if(U[1]=='undefined') U[1] = '';
						uData[''+U[0]+''] = U[1];
					};
				
					if(typeof uData['username']=='undefined' || uData['username']=='undefined' || uData['username']==''){
						VIDDATA_getJsonP('get', 'http://vietid.net/taskbar/CheckStat', 'taskbarChecklogin');
						var usrData = MINGID_DATA_FUNC.getCookie('ming_udata');     
							usrData = usrData.split('|'), usrDataLen = usrData.length;
						uData = [];
						for (var i = 0; i < usrDataLen; i++) {
							var U = usrData[i].split('::');
							if(U[1]=='undefined') U[1] = '';
							uData[''+U[0]+''] = U[1];
						};
					} 

					uGen = 'Nữ';
					if(uData['gender']==1) uGen='Nam';
					if(uData['avatar']=='') uData['avatar'] = 'http://mingid.vcmedia.vn/thumb/48_48/v4/images/comment/Defaut-6.png';
				}
				if( typeof(uData['full_name'])!='undefined' && uData['full_name']!='') VID_USER = uData['full_name'];
				if( typeof(uData['city'])=='undefined' || uData['city']=='undefined') uData['city']='';

				$('#VID_ul_taskbar').html(
					'<li class="">\
						<span id="VID-setting" class="VID-item-setting VID-item">\
							<img class="VID-taskbar-ico-setting" title="setting" alt="ico" src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/ico/setting.png">\
						</span>\
						<div class="VID-form VID-form-notify VID-form-setting">\
							<span class="VID-rs">\
								<img class="VID-taskbar-text-ico" title="VietId" alt="logo" src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png">\
									Thông tin tài khoản\
									<span class="VID-close-ico-frm">\
										<img class="VID-img-close" title="Close" alt="close" src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/null.png">\
									</span>\
							</span>\
							<div class="VID-content-notify">\
								<div class="VID-ava-setting">\
									<a class="VID-ava">\
										<img class="" title="Avatar" alt="avatar" src="'+uData['avatar']+'"  onerror="this.src=\'http://mingid.vcmedia.vn/thumb/48_48/v4/images/comment/Defaut-'+Math.floor((Math.random()*6)+1)+'.png\'">\
									</a>\
									<div class="VID-info">\
										<a class="VID-nameacc" href="http://vietid.net/u/'+uData['username']+'" target="_blank">'+VID_USER+'</a>\
										<span class="VID-ava-edit"><i class="VID-ico VID-ava-ico-edit"></i><a href="http://vietid.net/u/'+uData['username']+'/profiles" target="_blank">Thay hình đại diện</a></span>\
									</div>\
								</div>\
								<div class="VID-tab-info">\
									<span class="VID-txt-info">Thông tin hiển thị</span>\
									<span class="VID-txt-edit"><i class="VID-ico VID-ico-edit"></i><a href="http://vietid.net/u/'+uData['username']+'/profiles" target="_blank">Sửa</a></span>\
								</div>\
								<div class="VID-content-info">\
									<div class="VID-name-info"><i class="VID-ico VID-name-info-ico"></i>'+uData['full_name']+'</div>\
									<div class="VID-gender-info"><i class="VID-ico VID-gender-info-ico"></i>'+uGen+'</div>\
									<div class="VID-birth-info"><i class="VID-ico VID-birth-info-ico"></i>'+uData['birthday']+'</div>\
									<div class="VID-state-info"><i class="VID-ico VID-state-info-ico"></i>'+uData['city']+'</div>\
								</div>\
								<div class="VID-logout-info">\
									<span class="VID-txt-logout-info"><i class="VID-ico VID-txt-logout-info-ico"></i>Thoát</span>\
								</div>\
							</div>\
						</div>\
					</li>\
					<li class="" id="liVID-Taskbar-act">\
						<span class="VID-item-notification VID-item" id="notification">\
							<img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/ico/notification.png" alt="ico" title="notification" class="VID-taskbar-ico-notification" />\
						</span>\
						<div class="VID-form VID-form-notify">\
							<span class="VID-rs">\
								<img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png" alt="logo" title="VietId" class="VID-taskbar-text-ico"/>\
								Thông báo\
								<img style="text-align: center;height:18px;float:right;margin-right:20px;align:right;vertical-align:middle;display:none;width:32px;" src="http://mingid.vcmedia.vn/images/comment/ming_loading.gif" id="notifimgloading">\
								<span class="VID-close-ico-frm">\
									<img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/null.png" alt="close" title="Close" class="VID-img-close"/>\
								</span>\
							</span>\
							<div class="VID-content-notify">\
								<ul class="VID-list-notify" id="UDVID-list-notify"><span id="Vid_Nonotify">Chưa có thông báo nào<span></ul>\
							</div>\
						</div>\
					</li>\
					');   
				$('#notification').append(''+htmlNotifCount+'');
				//load notifi data
				MINGID_NOTIF_FUNC.PGNOTIF = 1;
				//MINGID_DATA_FUNC.getJsonP("get", "jsonp", MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF);                      
				VIDDATA_getJsonP('get',  MINGID_CONS.NOTFY_URL_NRESETC+"?p="+MINGID_NOTIF_FUNC.PGNOTIF, 'getAjaxnotif', '');
				//$('#VID_ul_taskbar').html('<ul class="VID-taskbar VID-taskbar-login" id="VID_ul_taskbar"></ul>');
				//$('#VID_ul_taskbar').toogleClass('VID-taskbar-login');
				//console.log('logged in');
				/*require(["http://dev.comment.id.ming.vn/statics/taskbar/js/vid_initaskbar.js"], function(initTask) {                 
					initTask.initTaskbar();
				});
				toggeSetting();
				toggeNotify();*/
				toggeSetting();
				toggeNotify();

				setTimeout("MINGID_NOTIF_FUNC.getNotif()",MINGID_CONS.TIMEOUT);
			}else{ //not logged in
				idTaskBar.innerHTML = '<ul class="VID-taskbar" id="VID_ul_taskbar"></ul>';
				//require(["http://dev.comment.id.ming.vn/statics/taskbar/js/html2js/taskbar_notlogin.js"], function() {
					//var idTaskBar = document.getElementById('VID_ul_taskbar');
					//idTaskBar.innerHTML = ''+VID_ul_taskbar_notlogin+'';
					$('#VID_ul_taskbar').html(
						'<li class="VID-text-vietid">\
							<span title="Đăng nhập ViệtID" class="VID-text VID-frm-login show">\
								<img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png" alt="logo" title="VietId" class="VID-taskbar-text-ico"/>\
								Đăng nhập ViệtID\
							</span>\
						</li>\
						<!--li class="VID-ico-vietid"-->\
							<!--a id="[removed]toTop" class="VID-toTop"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/ico/ico-vietid.png" alt="ico" title="VietId" class="VID-taskbar-ico" /></a-->\
							<div class="VID-form VID-form-login">\
								<span class="VID-rs">\
									<img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/register-logo-vietid.png" alt="ico" title="VietId" class="VID-img-header-menu-regisrer"/>\
									Đăng ký <span class="VID-bold">ViệtID/MingID</span>\
									<span class="VID-close-ico-frm">\
										<img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/null.png" alt="close" title="Close" class="VID-img-close"/>\
									</span>\
								</span>\
								<!--div class="VID-msg-register">\
									<span class="VID-content-msg">\
										<span class="VID-bold VID-red">*Lưu ý:</span> Kể từ 5-12-2012 \
										<span class="VID-bold">MingID</span> đã đổi tên thành \
										<span class="VID-bold">ViệtID</span> do đó bạn có thể dùng email và mật khẩu cũ để đăng nhập \
										<a class="VID-green">[?]</a>\
									</span>\
								</div-->\
								<div id="retMess"></div>\
								<div class="VID-content-menu">\
									<div class="VID-frm-content">\
										<div class="VID-email">\
											<div class="VID-text-email">\
												<span class="VID-red"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/sao.png" alt="sao" class="VID-sao"/></span>\
												Email\
											</div>\
											<div class="VID-input">\
												<input value="'+VID_CUR_USER+'" type="text" class="VID-input-email" id="inp-vid-email" name="inp-vid-emai" />\
											</div>\
										</div>\
										<div class="VID-email">\
											<div class="VID-text-email">\
												<span class="VID-red"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/sao.png" alt="sao" class="VID-sao"/></span>\
												Mật khẩu\
											</div>\
											<div class="VID-input">\
												<input value="" type="password" class="VID-input-email" id="inp-vid-password" name="inp-vid-password" />\
											</div>\
										</div>\
										<div class="VID-confirm">\
											<input type="checkbox" value="" class="VID-check-border" id="vid-check-confirm" name="vid-check-confirm" checked="checked"/> \
											<label for="check-confirm">Ghi nhớ</label>\
										</div>\
										<div class="VID-g-button">\
											<a class="VID-register-button" href="javascript:void(0)">\
												<span class="VID-text-register VID-text-register-login">Đăng nhập</span>\
											</a>\
											<a class="VID-green" href="http://vietid.net/login/forgot_password" target="_blank">Quên mật khẩu?</a>\
											<span class="VID-gray">|</span>\
											<a class="VID-green" href="http://vietid.net/Users/ForgotEmail" target="_blank">Quên Email?</a>\
											 <div id="vid-loading-img" style="display:none"><img src="http://mingid.vcmedia.vn/images/comment/ming_loading.gif"></div>\
										</div>\
									</div>\
								</div>\
								<div class="VID-other-register">\
									<span class="VID-text">Chưa có tài khoản <a class="VID-green" href="javascript:void(0)">ViệtID?</a></span>\
									<a href="javascript:void(0)" class="VID-register-now">\
										<span>Đăng ký ngay</span>\
									</a>\
								</div>\
							</div>\
						<!--/li-->'
					);
			   // });
				toggeLogin();
			}
		if(VID_STATUS === 1) {
			clearInterval(myVar);
		}
		}, 1000);
    }

    //export module
    return {
        initTaskbar:initTaskbar,
        notifyScroller:notifyScroller,
        toggeSetting:toggeSetting,
        //toggeNotify:toggeNotify,
        toggeLogin:toggeLogin
    };
});

/*function notifyScroller() {
    if(typeof jQuery == 'undefined' || typeof jQuery.fn.osc_scroller == 'undefined') {
        setTimeout(notifyScroller, 100);
        return;
    }
    
    $(".list-notify").osc_scroller({
        callback : {
            inBottom : function(params) {                
                params.inst.reset();
            }
        }
    });
}

function toggeNotify() {
    console.log('toogle Notify');
    var notifyToggle = $('#notification')[0];
	
    if(notifyToggle) {
        var notifyArea = notifyToggle.parentNode;
        var notifyTimer = null;
			
        var _outNotify = true;
        function closeNotify() {
            if(_outNotify) {
                $(notifyArea).removeClass('action');
                $(document).unbind('mousedown', closeNotify);
            }	
        }
    
        $(notifyToggle).hover(function(){
            _outNotify = false;
        }, function(){
            _outNotify = true;
        });
    
        $(notifyToggle).click(function(e){
            if(_outNotify){
           
            } else {
                $("ul[class='VID_taskbar'] > li").removeClass('action');
                $(notifyArea).toggleClass('action');
                if($(notifyArea).hasClass('action')) {
                    notifyScroller();
                }
                e.stopPropagation();
            }
        //    
        //            if($(notifyArea).hasClass("action")) {
        //                $(document).bind('mousedown', closeNotify);
        //            } else {
        //                $(document).unbind('mousedown', closeNotify);
        //            } 
        });
		
        $(".close-ico-frm").click(function(){
            $(notifyArea).removeClass('action');
            return false;
        });		
    }
}

function toggeLogin() {
    console.log('toogle Login');  
    var notifyToggle = $('.text-vietid')[0];
	
    if(notifyToggle) {
        var notifyArea = notifyToggle.parentNode;
			
        var _outNotify = true;
        function closeNotify() {
            if(_outNotify) {
                $(notifyArea).removeClass('action');
                $(document).unbind('mousedown', closeNotify);
            }	
        }
    
        $(notifyToggle).hover(function(){
            _outNotify = false;
        }, function(){
            _outNotify = true;
        });
    
        $(notifyToggle).click(function(e){
            if(_outNotify){
           
            } else {
                $("ul[class='VID_taskbar']").removeClass('action');
                $(notifyArea).toggleClass('action');
			
                if($(notifyArea).hasClass('action')) {
                	
                }
                e.stopPropagation();
            }
    
        //            if($(notifyArea).hasClass("action")) {
        //                $(document).bind('mousedown', closeNotify);
        //            } else {
        //                $(document).unbind('mousedown', closeNotify);
        //            } 
        });
		
        $(".close-ico-frm").click(function(){
            $(notifyArea).removeClass('action');
            return false;
        });		
    }    
}

function initTaskbar(){
    var idTaskBar = document.getElementById('VID_taskbar');
    if(typeof idTaskBar!='undefined' || idTaskBar!='null'){
        console.log('run taskbar');
        idTaskBar.innerHTML = '<ul class="taskbar" id="VID_ul_taskbar"></ul>';
    }
    var VID_USER = MINGID_DATA_FUNC.getCookie('ming_user'),
        VID_HASH = MINGID_DATA_FUNC.getCookie('ming_key');
    if(typeof(VID_USER)=='undefined' && typeof(VID_HASH)!='undefined'){ //logged in
        console.log('logged in');
    }else{ //not logged in
        require(["http://dev.comment.id.ming.vn/statics/taskbar/js/html2js/taskbar_notlogin.js"], function() {
            //var idTaskBar = document.getElementById('VID_ul_taskbar');
            //idTaskBar.innerHTML = ''+VID_ul_taskbar_notlogin+'';
            $('#VID_ul_taskbar').html(''+VID_ul_taskbar_notlogin+'');
        });
    }
}*/
