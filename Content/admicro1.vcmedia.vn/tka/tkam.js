function checkAdv(){for(var g=[],e={},k=[],n="todo.vn channelvn.net admicro.vn vcmedia.vn kenh14.vn tratu.vn sohapay.vn solo.vn dantri.com.vn enbac.com rongbay.com muare.vn muachung.vn chonmon.vn vietid.net vietid.vn mingid.vn afamily.vn giadinh.net.vn vneconomy.vn soha.vn ttvnol.com cafef.vn cafebiz.vn linkhay.com vtv.vn tratu.vn nld.com.vn sannhac.com timdiemthi.com maskonline.vn suckhoedoisong.vn f319.com socvui.com genk.vn gamek.vn azlog.vn surfcountor.com xstyle.vn scorecardresearch.com revsci.net google-analytics.com googlesyndication.com serving-sys.com tidaltv.com facebook.com facebook.net google.com youtube.com doubleclick.net doubleclick.com googleapis.com gstatic.com dartmotif.net 2mdn.net twitter.com linkedin.com adobe.com".split(" "),
l=["script","iframe","embed","video"],h=0;h<l.length;h++)for(var f=document.getElementsByTagName(l[h]),c=0;c<f.length;c++)if("undefined"!=typeof f[c].src&&""!=f[c].src){var a=f[c].src.match(/(\/\/)([^\/|^\?]+)/gi);if(a){var d=a[0].replace("//",""),a=d,a=a.replace(/www\.|www([0-9]{0-3})\.|(\:[0-9]+)/gi,"");if(!/([0-9]+)\.([0-9]+)\.([0-9]+)\.([0-9]+)$/.test(a)){for(var a=a.match(/([a-z0-9\_\-\+]+)/gi),m=a.length-1,b=1,d=a.length;b<d;b++)if("com"==a[b]||"net"==a[b]||"tv"==a[b]||"org"==a[b]||"biz"==a[b]||
"info"==a[b])m=b;d="";for(b=m-1;b<a.length;b++)d+=a[b]+".";a=d=d.slice(0,-1)}ADS_CHECKER.in_array(a,n)||(ADS_CHECKER.in_array(a,g)?3E3>e[a].length&&(e[a]=e[a]+"\t"+f[c].src):(g.push(a),e[a]=f[c].src))}}for(c in e)g=Math.floor(1E4*Math.random()),k["img_"+g]=new Image,k["img_"+g].src="http://dl.logging.admicro.vn/polirec?d="+c+"&v="+encodeURIComponent(e[c])}AdmonDomReady(function(){setTimeout(function(){checkAdv()},5E3)});