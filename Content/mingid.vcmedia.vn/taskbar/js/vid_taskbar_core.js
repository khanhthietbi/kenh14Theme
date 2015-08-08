var my_base_url = 'http://comment.vietid.net';
var my_pligg_base='';
var VID_USER = '';
var VID_HASH = '';
var VID_STATUS = 0;
var app_key = $("#VID_taskbar").attr('rel');
if (typeof app_key == "undefined") {
    app_key = '';
}

/**
 * OSECORE
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the GNU General Public License version 3
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.html
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@osecore.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade OSECORE to newer
 * versions in the future. If you wish to customize OSECORE for your
 * needs please refer to http://www.osecore.com for more information.
 *
 * @copyright   Copyright (C) 2011 by Sang Le Tuan (http://www.osecore.com). All rights reserved.
 * @license     http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License version 3
 * @author      Sang Le Tuan - batsatla@gmail.com
 */
function osc_core_setter() {
    if(typeof jQuery == 'undefined') {
        setTimeout(osc_core_setter, 150);
        return;
    }

        function OSC_Base64() {
        this.encode = function (input) {
            var output = '';
            var i = 0;
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;


            input = this._utf8_encode(input);

            while(i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3 ) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if(isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if(isNaN(chr3)) {
                    enc4 = 64;
                }

                output += this._keyStr.charAt(enc1);
                output += this._keyStr.charAt(enc2);
                output += this._keyStr.charAt(enc3);
                output += this._keyStr.charAt(enc4);
            }

            return output;
        }

        this.decode = function (input) {
            var output = '';
            var i = 0;
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;

            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while(i < input.length) {
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output += String.fromCharCode(chr1);

                if(enc3 != 64) {
                    output += String.fromCharCode(chr2);
                }

                if(enc4 != 64) {
                    output += String.fromCharCode(chr3);
                }
            }

            output = this._utf8_decode(output);

            return output;
        }

        this._utf8_encode = function (string) {
            string  = string.replace(/\r\n/g, "\n");
            var utftext = '';

            for(var i = 0; i < string.length; i ++) {
                var c = string.charCodeAt(i);

                if(c < 128) {
                    utftext += String.fromCharCode(c);
                } else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }

            return utftext;
        }

        this._utf8_decode = function (utftext) {
            var string = '';
            var i = 0;
            var c = 0;
            var c1 = 0;
            var c2 = 0;
            var c3;

            while(i < utftext.length) {
                c = utftext.charCodeAt(i);

                if(c < 128) {
                    string += String.fromCharCode(c);
                    i ++;
                } else if((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }

            return string;
        }

        this._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }

    var base64 = new OSC_Base64();

        var md5 =
        {
                encode : function ( string )
                {
                        var a   = 0x67452301;
                        var b   = 0xEFCDAB89;
                        var c   = 0x98BADCFE;
                        var d   = 0x10325476;
                        var x   = Array();
                        var S11 = 7;
                        var S12 = 12;
                        var S13 = 17;
                        var S14 = 22;
                        var S21 = 5;
                        var S22 = 9;
                        var S23 = 14;
                        var S24 = 20;
                        var S31 = 4;
                        var S32 = 11;
                        var S33 = 16;
                        var S34 = 23;
                        var S41 = 6;
                        var S42 = 10;
                        var S43 = 15
                        var S44 = 21;
                        var AA;
                        var BB;
                        var CC;
                        var DD;
                        var k;

                        string = this.Utf8Encode( string );

                        x = this.ConvertToWordArray( string );

                        for( k = 0; k < x.length; k += 16 )
                        {
                                AA = a;
                                BB = b;
                                CC = c;
                                DD = d;

                                a = this.FF( a, b, c, d, x[ k + 0 ], S11, 0xD76AA478 );
                                d = this.FF( d, a, b, c, x[ k + 1 ], S12, 0xE8C7B756 );
                                c = this.FF( c, d, a, b, x[ k + 2 ], S13, 0x242070DB );
                                b = this.FF( b, c, d, a, x[ k + 3 ], S14, 0xC1BDCEEE );
                                a = this.FF( a, b, c, d, x[ k + 4 ], S11, 0xF57C0FAF );
                                d = this.FF( d, a, b, c, x[ k + 5 ], S12, 0x4787C62A );
                                c = this.FF( c, d, a, b, x[ k + 6 ], S13, 0xA8304613 );
                                b = this.FF( b, c, d, a, x[ k + 7 ], S14, 0xFD469501 );
                                a = this.FF( a, b, c, d, x[ k + 8 ], S11, 0x698098D8 );
                                d = this.FF( d, a, b, c, x[ k + 9 ], S12, 0x8B44F7AF );
                                c = this.FF( c, d, a, b, x[ k + 10 ], S13, 0xFFFF5BB1 );
                                b = this.FF( b, c, d, a, x[ k + 11 ], S14, 0x895CD7BE );
                                a = this.FF( a, b, c, d, x[ k + 12 ], S11, 0x6B901122 );
                                d = this.FF( d, a, b, c, x[ k + 13 ], S12, 0xFD987193 );
                                c = this.FF( c, d, a, b, x[ k + 14 ], S13, 0xA679438E );
                                b = this.FF( b, c, d, a, x[ k + 15 ], S14, 0x49B40821 );

                                a = this.GG( a, b, c, d, x[ k + 1 ], S21, 0xF61E2562 );
                                d = this.GG( d, a, b, c, x[ k + 6 ], S22, 0xC040B340 );
                                c = this.GG( c, d, a, b, x[ k + 11 ], S23, 0x265E5A51 );
                                b = this.GG( b, c, d, a, x[ k + 0 ], S24, 0xE9B6C7AA );
                                a = this.GG( a, b, c, d, x[ k + 5 ], S21, 0xD62F105D );
                                d = this.GG( d, a, b, c, x[ k + 10 ], S22, 0x2441453 );
                                c = this.GG( c, d, a, b, x[ k + 15 ], S23, 0xD8A1E681 );
                                b = this.GG( b, c, d, a, x[ k + 4 ], S24, 0xE7D3FBC8 );
                                a = this.GG( a, b, c, d, x[ k + 9 ], S21, 0x21E1CDE6 );
                                d = this.GG( d, a, b, c, x[ k + 14 ], S22, 0xC33707D6 );
                                c = this.GG( c, d, a, b, x[ k + 3 ], S23, 0xF4D50D87 );
                                b = this.GG( b, c, d, a, x[ k + 8 ], S24, 0x455A14ED );
                                a = this.GG( a, b, c, d, x[ k + 13 ], S21, 0xA9E3E905 );
                                d = this.GG( d, a, b, c, x[ k + 2 ], S22, 0xFCEFA3F8 );
                                c = this.GG( c, d, a, b, x[ k + 7 ], S23, 0x676F02D9 );
                                b = this.GG( b, c, d, a, x[ k + 12 ], S24, 0x8D2A4C8A );

                                a = this.HH( a, b, c, d, x[ k + 5 ], S31, 0xFFFA3942 );
                                d = this.HH( d, a, b, c, x[ k + 8 ], S32, 0x8771F681 );
                                c = this.HH( c, d, a, b, x[ k + 11 ], S33, 0x6D9D6122 );
                                b = this.HH( b, c, d, a, x[ k + 14 ], S34, 0xFDE5380C );
                                a = this.HH( a, b, c, d, x[ k + 1 ], S31, 0xA4BEEA44 );
                                d = this.HH( d, a, b, c, x[ k + 4 ], S32, 0x4BDECFA9 );
                                c = this.HH( c, d, a, b, x[ k + 7 ], S33, 0xF6BB4B60 );
                                b = this.HH( b, c, d, a, x[ k + 10 ], S34, 0xBEBFBC70 );
                                a = this.HH( a, b, c, d, x[ k + 13 ], S31, 0x289B7EC6 );
                                d = this.HH( d, a, b, c, x[ k + 0 ], S32, 0xEAA127FA );
                                c = this.HH( c, d, a, b, x[ k + 3 ], S33, 0xD4EF3085 );
                                b = this.HH( b, c, d, a, x[ k + 6 ], S34, 0x4881D05 );
                                a = this.HH( a, b, c, d, x[ k + 9 ], S31, 0xD9D4D039 );
                                d = this.HH( d, a, b, c, x[ k + 12 ], S32, 0xE6DB99E5 );
                                c = this.HH( c, d, a, b, x[ k + 15 ], S33, 0x1FA27CF8 );
                                b = this.HH( b, c, d, a, x[ k + 2 ], S34, 0xC4AC5665 );

                                a = this.II( a, b, c, d, x[ k + 0 ], S41, 0xF4292244 );
                                d = this.II( d, a, b, c, x[ k + 7 ], S42, 0x432AFF97 );
                                c = this.II( c, d, a, b, x[ k + 14 ], S43, 0xAB9423A7 );
                                b = this.II( b, c, d, a, x[ k + 5 ], S44, 0xFC93A039 );
                                a = this.II( a, b, c, d, x[ k + 12 ], S41, 0x655B59C3 );
                                d = this.II( d, a, b, c, x[ k + 3 ], S42, 0x8F0CCC92 );
                                c = this.II( c, d, a, b, x[ k + 10 ], S43, 0xFFEFF47D );
                                b = this.II( b, c, d, a, x[ k + 1 ], S44, 0x85845DD1 );
                                a = this.II( a, b, c, d, x[ k + 8 ], S41, 0x6FA87E4F );
                                d = this.II( d, a, b, c, x[ k + 15 ], S42, 0xFE2CE6E0 );
                                c = this.II( c, d, a, b, x[ k + 6 ], S43, 0xA3014314 );
                                b = this.II( b, c, d, a, x[ k + 13 ], S44, 0x4E0811A1 );
                                a = this.II( a, b, c, d, x[ k + 4 ], S41, 0xF7537E82 );
                                d = this.II( d, a, b, c, x[ k + 11 ], S42, 0xBD3AF235 );
                                c = this.II( c, d, a, b, x[ k + 2 ], S43, 0x2AD7D2BB );
                                b = this.II( b, c, d, a, x[ k + 9 ], S44, 0xEB86D391 );

                                a = this.AddUnsigned( a, AA );
                                b = this.AddUnsigned( b, BB );
                                c = this.AddUnsigned( c, CC );
                                d = this.AddUnsigned( d, DD );
                        }

                        var temp = this.WordToHex( a ) + this.WordToHex( b ) + this.WordToHex( c ) + this.WordToHex( d );

                        return temp.toLowerCase();
                },

                RotateLeft : function ( lValue, iShiftBits )
                {
                        return ( lValue << iShiftBits ) | ( lValue >>> ( 32-iShiftBits ) );
                },

                AddUnsigned : function ( lX, lY )
                {
                        var lX4     = ( lX & 0x40000000 );
                        var lY4     = ( lY & 0x40000000 );
                        var lX8     = ( lX & 0x80000000 );
                        var lY8     = ( lY & 0x80000000 );
                        var lResult = ( lX & 0x3FFFFFFF ) + ( lY & 0x3FFFFFFF );

                        if( lX4 & lY4 )
                        {
                                return ( lResult ^ 0x80000000 ^ lX8 ^ lY8 );
                        }

                        if( lX4 | lY4 )
                        {
                                if( lResult & 0x40000000 )
                                {
                                        return ( lResult ^ 0xC0000000 ^ lX8 ^ lY8 );
                                }
                                else
                                {
                                        return ( lResult ^ 0x40000000 ^ lX8 ^ lY8 );
                                }
                        }
                        else
                        {
                                return ( lResult ^ lX8 ^ lY8 );
                        }
                },

                F : function ( x, y, z ) { return ( x & y ) | ( ( ~x ) & z ); },
                G : function ( x, y, z ) { return ( x & z ) | ( y & ( ~z ) ); },
                H : function ( x, y, z ) { return ( x ^ y ^ z ); },
                I : function ( x, y, z ) { return ( y ^ (x | ( ~z ) ) ); },

                FF : function ( a, b, c, d, x, s, ac )
                {
                        a = this.AddUnsigned( a, this.AddUnsigned( this.AddUnsigned( this.F( b, c, d ), x ), ac ) );
                        return this.AddUnsigned( this.RotateLeft( a, s ), b );
                },

                GG : function ( a, b, c, d, x, s, ac )
                {
                        a = this.AddUnsigned( a, this.AddUnsigned( this.AddUnsigned( this.G( b, c, d ), x ), ac ) );
                        return this.AddUnsigned( this.RotateLeft( a, s ), b );
                },

                HH : function ( a, b, c, d, x, s, ac )
                {
                        a = this.AddUnsigned( a, this.AddUnsigned( this.AddUnsigned( this.H( b, c, d ), x ), ac ) );
                        return this.AddUnsigned( this.RotateLeft( a, s ), b );
                },

                II : function (a,b,c,d,x,s,ac)
                {
                        a = this.AddUnsigned( a, this.AddUnsigned( this.AddUnsigned( this.I( b, c, d ), x ), ac ) );
                        return this.AddUnsigned( this.RotateLeft( a, s ), b );
                },

                ConvertToWordArray : function ( string )
                {
                        var lWordCount;
                        var lMessageLength       = string.length;
                        var lNumberOfWords_temp1 = lMessageLength + 8;
                        var lNumberOfWords_temp2 = ( lNumberOfWords_temp1 - ( lNumberOfWords_temp1 % 64 ) ) / 64;
                        var lNumberOfWords       = ( lNumberOfWords_temp2 + 1 ) * 16;
                        var lWordArray           = Array( lNumberOfWords - 1 );
                        var lBytePosition        = 0;
                        var lByteCount           = 0;

                        while( lByteCount < lMessageLength )
                        {
                                lWordCount               = ( lByteCount - ( lByteCount % 4 ) ) / 4;
                                lBytePosition            = ( lByteCount % 4 ) * 8;
                                lWordArray[ lWordCount ] = ( lWordArray[ lWordCount ] | ( string.charCodeAt( lByteCount ) << lBytePosition ) );
                                lByteCount ++;
                        }

                        lWordCount                       = ( lByteCount - ( lByteCount % 4 ) ) / 4;
                        lBytePosition                    = ( lByteCount % 4 ) * 8;
                        lWordArray[ lWordCount ]         = lWordArray[ lWordCount ] | ( 0x80 << lBytePosition );
                        lWordArray[ lNumberOfWords - 2 ] = lMessageLength << 3;
                        lWordArray[ lNumberOfWords - 1 ] = lMessageLength >>> 29;

                        return lWordArray;
                },

                WordToHex : function ( lValue )
                {
                        var WordToHexValue      = '';
                        var WordToHexValue_temp = '';
                        var lByte;
                        var lCount;

                        for( lCount = 0; lCount <= 3; lCount ++ )
                        {
                                lByte               = ( lValue >>> ( lCount * 8 ) ) & 255;
                                WordToHexValue_temp = '0' + lByte.toString( 16 );
                                WordToHexValue      = WordToHexValue + WordToHexValue_temp.substr( WordToHexValue_temp.length - 2, 2 );
                        }

                        return WordToHexValue;
                },

                Utf8Encode : function ( string )
                {
                        string      = string.replace( /\r\n/g, "\n" );
                        var utftext = '';

                        for( var n = 0; n < string.length; n ++ )
                        {
                                var c = string.charCodeAt( n );

                                if( c < 128 )
                                {
                                        utftext += String.fromCharCode( c );
                                }
                                else if( ( c > 127 ) && ( c < 2048 ) )
                                {
                                        utftext += String.fromCharCode( ( c >> 6 ) | 192 );
                                        utftext += String.fromCharCode( ( c & 63 ) | 128 );
                                }
                                else
                                {
                                        utftext += String.fromCharCode( ( c >> 12 ) | 224 );
                                        utftext += String.fromCharCode( ( ( c >> 6 ) & 63 ) | 128 );
                                        utftext += String.fromCharCode( ( c & 63 ) | 128 );
                                }
                        }

                        return utftext;
                }
        };

    (function($){
        $.extend($, {
            OSC : true,
                        base_url : my_base_url + my_pligg_base,
                        md5 : function(text) {
                            return md5.encode(text);
                        },

                        base64Encode : function(text) {
                            return base64.encode(text);
                        },

                        base64Decode : function(text) {
                            return base64.decode(text);
                        },

                        cleanVNMask : function(text) {
                            var search_arr = [['á','à','ả','ạ','ã','â','ấ','ầ','ẩ','ậ','ẫ','ă','ắ','ằ','ẳ','ặ','ẵ'],
                                              ['á','À','Ả','Ạ','Ã','Â','Ấ','Ầ','Ẩ','Ậ','Ẫ','Ă','Ắ','Ằ','Ẳ','Ặ','Ẵ'],
                                              ['ó','ò','ỏ','ọ','õ','ô','ố','ồ','ổ','ộ','ỗ','ơ','ớ','ờ','ở','ợ','ỡ'],
                                              ['Ó','Ò','Ỏ','Ọ','Õ','Ô','Ố','Ồ','Ổ','Ộ','Ỗ','Ơ','Ớ','Ờ','Ở','Ợ','Ỡ'],
                                              ['é','è','ẻ','ẹ','ẽ','ê','ế','ề','ể','ệ','ễ'],
                                              ['É','È','Ẻ','Ẹ','Ẽ','Ê','Ế','Ề','Ể','Ệ','Ễ'],
                                              ['ú','ù','ủ','ụ','ũ','ư','ứ','ừ','ử','ự','ữ'],
                                              ['Ú','Ù','Ủ','Ụ','Ũ','Ư','Ứ','Ừ','Ử','Ự','Ữ'],
                                              ['í','ì','ỉ','ị','ĩ'],
                                              ['í','Ì','Ỉ','Ị','Ĩ'],
                                              ['ý','ỳ','ỷ','ỵ','ỹ'],
                                              ['Ý','Ỳ','Ỷ','Ỵ','Ỹ'],
                                              ['đ'],
                                              ['Đ']];

                            var replace_arr = ['a','A','o','O','e','E','u','U','i','I','y','Y','d','D'];

                            for(var k = 0; k < search_arr.length; k ++) {
                                eval("text = text.replace(/(" + search_arr[k].join('|') + ")/g, replace_arr[k]);");
                            }

                            return text;
                        },
            str_pad : function(text, length, padstring) {
                text = new String(text);
                padstring = new String(padstring);

                if(text.length < length) {
                    var padtext = new String(padstring);

                    while(padtext.length < (length - text.length)) {
                        padtext += padstring;
                    }

                    text = padtext.substr(0, length - text.length) + text;
                }

                return text;
            },

            mb_strlen : function(str) {
                return ($.browser.msie && str.indexOf('\n') != -1) ? str.replace(/\r?\n/g, '_').length : str.length;
            },

            strip_tags : function(txt) {
                return txt.toString().replace(/<\S[^><]*>/g, "");
            },

            htmlspecialchars : function(str) {
                var f = [
                    $.browser.mac && $.browser.msie ? new RegExp('&', 'g') : new RegExp('&(?!#[0-9]+;)', 'g'),
                    new RegExp('<', 'g'),
                    new RegExp('>', 'g'),
                    new RegExp('"', 'g')
                ];

                var r = ['&amp;', '&lt;', '&gt;', '&quot;'];

                for(var i = 0; i < f.length; i++) {
                    str = str.replace(f[i], r[i]);
                }

                return str;
            },

            serializeStyle : function(o) {
                var s = '';

                $.each(o, function(k, v) {
                    if (k && v) {
                        if ($.browser.mozilla && k.indexOf('-moz-') === 0) return;

                        switch(k) {
                            case 'color':
                            case 'background-color':
                                v = v.toLowerCase();
                                break;
                        }

                        s += (s ? ' ' : '') + k + ': ' + v + ';';
                    }
                });

                return s;
            },

            parseStyle : function(st) {
                var o = {};

                if(! st) {
                    return o;
                }

                function compress(p, s, ot) {
                    var t, r, b, l;

                    t = o[p + '-top' + s];

                    if(! t) return;

                    r = o[p + '-right' + s];

                    if(t != r) return;

                    b = o[p + '-bottom' + s];

                    if(r != b) return;

                    l = o[p + '-left' + s];

                    if(b != l) return;

                    o[ot] = l;

                    delete o[p + '-top' + s];
                    delete o[p + '-right' + s];
                    delete o[p + '-bottom' + s];
                    delete o[p + '-left' + s];
                }

                function compress2(ta, a, b, c) {
                    var t;

                    t = o[a];

                    if(! t) return;

                    t = o[b];

                    if(! t) return;

                    t = o[c];

                    if(! t) return;

                    o[ta] = o[a] + ' ' + o[b] + ' ' + o[c];

                    delete o[a];
                    delete o[b];
                    delete o[c];
                };

                st = st.replace(/&(#?[a-z0-9]+);/g, '&$1_MCE_SEMI_'); // Protect entities

                $.each(st.split(';'), function(k, v) {
                    var sv, ur = [];

                    if(v) {
                        v = v.replace(/_MCE_SEMI_/g, ';'); // Restore entities
                        v = v.replace(/url\([^\)]+\)/g, function(v){
                            ur.push(v);
                            return 'url(' + ur.length + ')'
                        });
                        v = v.split(':');
                        sv = $.trim(v[1]);
                        sv = sv.replace(/url\(([^\)]+)\)/g, function(a, b) {
                            return ur[parseInt(b) - 1]
                        });
                        sv = sv.replace(/(rgb\([^\)]+\))/g, function(a,b) {
                            return $.rgbToColor(b);
                        });

                        o[$.trim(v[0]).toLowerCase()] = sv;
                    }
                });

                compress("border", "", "border");
                compress("border", "-width", "border-width");
                compress("border", "-color", "border-color");
                compress("border", "-style", "border-style");
                compress("padding", "", "padding");
                compress("margin", "", "margin");
                compress2('border', 'border-width', 'border-style', 'border-color');

                if($.browser.msie) {
                    if(o.border == 'medium none') {
                        o.border = '';
                    }
                }

                return o;
            },

            rgbToColor : function(forecolor) {
                if(forecolor == '' || forecolor == null) {
                    return '';
                }

                var matches = forecolor.match(/^rgb\s*\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i);

                if(matches) {
                    return $.rgbhexToColor((matches[1] & 0xFF).toString(16), (matches[2] & 0xFF).toString(16), (matches[3] & 0xFF).toString(16));
                } else {
                    return $.rgbhexToColor((forecolor & 0xFF).toString(16), ((forecolor >> 8) & 0xFF).toString(16), ((forecolor >> 16) & 0xFF).toString(16));
                }
            },

            rgbhexToColor : function(r, g, b) {
                return '#' + ($.str_pad(r, 2, 0) + $.str_pad(g, 2, 0) + $.str_pad(b, 2, 0));
            },

            TXT2XML : function(TXT) {
                try {
                    XML = new ActiveXObject("Microsoft.XMLDOM");
                    XML.async = "false";
                    XML.loadXML(TXT);
                } catch(e) {
                    try {
                        parser = new DOMParser();
                        XML = parser.parseFromString(TXT, "text/xml" );
                    } catch(e){}
                }

                return XML;
            },

            XML2TXT : function(XML) {
                try {
                    TXT = XML.xml;
                } catch(e) {
                    try {
                        TXT = (new XMLSerializer()).serializeToString(XML);
                    } catch(e){}
                }

                return TXT;
            },

            createElement : function(tag, attribs, styles, parent){
                var el = document.createElement(tag);

                var obj = $(el);

                if(attribs){
                    obj.prop(attribs);
                }

                if(styles){
                    obj.css(styles);
                }

                if(parent){
                    parent.appendChild(el);
                }

                return el;
            },

            validate : function(data) {
                var result, field, type, args, errors = 0;

                for( var x in data ) {
                    field = $('#' + x);

                    if( field.length < 1 ) {
                        continue;
                    }

                    if( typeof data[x] == 'function' ) {
                        result = data[x](field);
                    } else {
                        args = {};

                        if( typeof data[x] == 'string' ) {
                            type = '_' + data[x].replace(/^([a-zA-Z0-9_]+)(:.*)?$/, '$1');

                            if( (/:/).test(data[x]) ) {
                                args = data[x].replace(/^([a-zA-Z0-9_]+):(.*)?$/, '$2').split(':');
                            }
                        }

                        result = this._validator[type](field, args);
                    }

                    if( result != 'OK' ) {
                        errors ++;

                        $('#' + x + '__err').show().each(function(){
                            this.innerHTML = result;
                        });

                        field.addClass('error');
                    } else {
                        $('#' + x + '__err').hide();
                        field.removeClass('error');
                    }
                }

                return errors < 1;
            },

            _validator : {
                _selector : function(field, arguments) {
                    var totalOptSelected = 0;

                    for( var x = 0; x < field.options.length; x ++ ) {
                        if(! field.options[x].selected) {
                            continue;
                        }

                        if( field.options[x].value == '') {
                            continue;
                        }

                        totalOptSelected ++;
                    }

                    return totalOptSelected > 0 ? true : 'You must select least one option';
                },

                _string : function(field, arguments) {
                    var error = '';

                    var counter = 0;

                    field.each(function(){
                        if(this.tagName == 'INPUT') {
                            this.value = $.trim(this.value);

                            if( this.value == '' ) {
                                error = 'The field is must enter value';
                            }
                        } else if(this.tagName == 'SELECT') {
                            var result = $._validator._selector(this, arguments);

                            if( result !== true) {
                                error = result;
                            }
                        }

                        counter ++;
                    });

                    return error == '' ? 'OK' : error;
                },

                _number : function(field, arguments) {
                    var error = '';

                    var counter = 0;

                    field.each(function(){
                        if(this.tagName == 'INPUT') {
                            this.value = $.trim(this.value);

                            if( this.value == '' ) {
                                error = 'The field is must enter value';
                            } else {
                                this.value = arguments.isFloat ? parseFloat(this.value) : parseInt(this.value);

                                if( isNaN(this.value) ){
                                    error = 'ERR: The value is not number';
                                } else if( arguments.min && this.value < arguments.min ){
                                    error = 'ERR: The value is less than ' + arguments.min;
                                } else if( arguments.max && this.value > arguments.max ){
                                    error = 'ERR: The value is greater than ' + arguments.max;
                                }
                            }
                        } else if(this.tagName == 'SELECT') {
                            var result = $._validator._selector(this, arguments);

                            if( result !== true) {
                                error = result;
                            }
                        }

                        counter ++;
                    });

                    return error == '' ? 'OK' : error;
                }
            },

            confirmAction : function(message, url)  {
                var confirmVar = confirm(message);

                if( typeof url == 'undefined' ) {
                    return confirmVar;
                }

                if( confirmVar ) {
                    window.location = url;
                }
            },

            disablePage : function() {
                var obj = $('#disable');

                if( obj.css('display') != '' ) {
                    var docDim = $.getDocumentDim();
                    obj.show().css({
                        width : docDim.w + 'px',
                        height : docDim.h + 'px'
                    });
                }
            },

            enablePage : function() {
                $('#disable').hide();
            },

            showLoadingForm : function(message, skipDisable) {
                if( ! skipDisable ) {
                    $.disablePage();
                }

                message  = ! message ? 'Please wait for loading' : message;

                $('#loading-message').html(message + '...');
                $('#loading').show().moveToCenter();
            },

            hideLoadingForm : function(skipAvailable) {
                $('#loading').hide();

                if( ! skipAvailable ) {
                    $.enablePage();
                }
            },

            getDocumentDim : function() {
                var mode = document.compatMode;

                var browserDim = $.getBrowserDim();

                return {
                    w : Math.max( ( mode != 'CSS1Compat' ) ? document.body.scrollWidth : document.documentElement.scrollWidth, browserDim.w ),
                    h : Math.max( ( mode != 'CSS1Compat' ) ? document.body.scrollHeight : document.documentElement.scrollHeight, browserDim.h )
                };
            },

            getViewPort : function(win) {
                if(! win) {
                    win = window;
                }

                var CSS1Mode = window.document.compatMode == 'CSS1Compat';

                return {
                    x : win.pageXOffset || ( CSS1Mode ? win.document.documentElement.scrollLeft   : win.document.body.scrollLeft   ),
                    y : win.pageYOffset || ( CSS1Mode ? win.document.documentElement.scrollTop    : win.document.body.scrollTop    ),
                    w : win.innerWidth  || ( CSS1Mode ? win.document.documentElement.clientWidth  : win.document.body.clientWidth  ),
                    h : win.innerHeight || ( CSS1Mode ? win.document.documentElement.clientHeight : win.document.body.clientHeight )
                };
            },

            getBrowserDim : function() {
                var dim = {
                    w : self.innerWidth,
                    h : self.innerHeight
                };

                var mode = document.compatMode;

                if ( ( mode || $.browser.msie ) && ! $.browser.opera ) {
                    dim.w = ( mode == 'CSS1Compat' ) ? document.documentElement.clientWidth : document.body.clientWidth;
                    dim.h = ( mode == 'CSS1Compat' ) ? document.documentElement.clientHeight : document.body.clientHeight;
                }

                return dim;
            },

            indexOf : function(arr, elt, from){
                if (arr.indexOf) return arr.indexOf(elt, from);

                from = from || 0;
                var len = arr.length;

                if (from < 0) from += len;

                for (; from < len; from++){
                    if (from in arr && arr[from] === elt){
                        return from;
                    }
                }
                return -1;
            },

            formatSize : function(bytes){
                var i = -1;

                do {
                    bytes = bytes/1024;
                    i++;
                } while (bytes > 99);

                return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
            }
        });

        $.extend($.fn, {
                    realWidth : function() {
                        var dom = this[0];

                        if(dom.tagName != 'IMG') {
                            return $(dom).width();
                        }

                        var img = $(dom);

                        if(img.prop('naturalWidth') == undefined) {
                            var tmp = $('<img/>').attr('src', img.attr('src'));
                            img.prop('naturalWidth', tmp[0].width);
                            img.prop('naturalHeight', tmp[0].height);
                        }

                        return img.prop('naturalWidth');

                    },

                    realHeight : function() {
                        var dom = this[0];

                        if(dom.tagName != 'IMG') {
                            return $(dom).height();
                        }

                        var img = $(dom);

                        if(img.prop('naturalHeight') == undefined) {
                            var tmp = $('<img/>').attr('src', img.attr('src'));
                            img.prop('naturalWidth', tmp[0].width);
                            img.prop('naturalHeight', tmp[0].height);
                        }

                        return img.prop('naturalHeight');

                    },

            moveToCenter : function(){
                return this.each(function(){
                    var iebody = document.compatMode == 'CSS1Compat' ? document.documentElement : document.body;

                    var stop   = $.browser.msie ? iebody.scrollTop   : window.pageYOffset;
                    var doch   = $.browser.msie ? iebody.clientHeight: window.innerHeight;
                    var docw   = $.browser.msie ? iebody.clientWidth : window.innerWidth;

                    var objh   = this.offsetHeight;
                    var objw   = this.offsetWidth;

                    x = docw/2-objw/2;
                    y = stop+doch/2-objh/2;

                    if( x < 0 ) {
                        x = 0;
                    }

                    if( y < 0 ) {
                        y = 0;
                    }

                    $(this).css({
                        left : x + 'px',
                        top : y + 'px'
                    });
                });
            },

            realOffset : function() {
                return $(this[0]).offset();
            },

            markElement : function(sExpandoProperty) {
                return this.each(function() {
                    this['MenuElem'] = 1;

                    for(var x = 0, node = null; x < this.childNodes.length; x++) {
                        node = this.childNodes[x];

                        if(node.tagName) {
                            $(node).markElement(sExpandoProperty);
                        }
                    }
                });
            }
        });

        if(typeof $.browser!=='undefined'){
            $.browser.mac = navigator.userAgent.toLowerCase().indexOf('mac') != -1 || navigator.vendor == 'Apple Computer, Inc.';
        }
        $(window).load(function(){
            $.WIN_READY = true;
        });
    })(jQuery);
}
osc_core_setter();

/**
 * OSECORE
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the GNU General Public License version 3
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.gnu.org/licenses/gpl-3.0.html
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@osecore.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade OSECORE to newer
 * versions in the future. If you wish to customize OSECORE for your
 * needs please refer to http://www.osecore.com for more information.
 *
 * @copyright   Copyright (C) 2011 by Sang Le Tuan (http://www.osecore.com). All rights reserved.
 * @license     http://www.gnu.org/licenses/gpl-3.0.html GNU General Public License version 3
 * @author      Sang Le Tuan - batsatla@gmail.com
 */
function osc_dragger_setter() {
    if(typeof jQuery == 'undefined' || typeof jQuery.OSC == 'undefined') {
        setTimeout(osc_dragger_setter, 150);
        return;
    }

    (function($){
        $.oscDraggerReady = true;

        function OSC_Dragger(bar, options) {
            this.lock = function() {
                this.locked = true;
            }

            this.unlock = function() {
                this.locked = false;
            }

            this.fire = function(e) {
                e.stopPropagation();

                if(this.locked) {
                    return true;
                }

                $.DRAGGER_CUR_INST = this;

                if(typeof this.callback.fire != 'undefined') {
                    this.callback.fire({
                        e : e,
                        inst : this
                    });
                }

                this._min_coords = {};
                this._max_coords = {};

                var docDim = $.getDocumentDim();

                var maxX = docDim.w - $(this.target).width();
                var maxY = docDim.h - $(this.target).height();

                if(this.min_coords == null) {
                    this._min_coords.x = 0;
                    this._min_coords.y = 0;
                } else {
                    this._min_coords = this.min_coords;
                }

                if(this.max_coords == null) {
                    this._max_coords.x = maxX;
                    this._max_coords.y = maxY;
                } else {
                    if(this.max_coords.x > maxX) {
                        this.max_coords.x = maxX;
                    }

                    if(this.max_coords.y > maxY) {
                        this.max_coords.y = maxY;
                    }

                    this._max_coords = this.max_coords;
                }

                var cursorCoords = {
                    x : e.pageX,
                    y : e.pageY
                };

                var targetCoords = $(this.target).offset();

                targetCoords = {
                    x : targetCoords.left,
                    y : targetCoords.top
                };

                this.coords_in_bar.x = cursorCoords.x - targetCoords.x;
                this.coords_in_bar.y = cursorCoords.y - targetCoords.y;

                if(this.hook_func.drag != null) {
                    $(document).unbind('mousemove', this.hook_func.drag).unbind('mouseup', this.hook_func.drop);
                }

                var self = this;

                this.hook_func.drag = function(e){
                    self.drag(e);
                };
                this.hook_func.drop = function(e){
                    self.drop(e);
                };

                $(document).bind('mousemove', this.hook_func.drag).bind('mouseup', this.hook_func.drop);
                $(document.body).addClass('dis-sel');
                $(".form").addClass('dis-sel');
                document.onselectstart = function() {
                    return false;
                }
                document.onmousedown = function() {
                    return false;
                }

                return false;
            }

            this.drag = function(e) {
                var cursorCoords = {
                    x : e.pageX,
                    y : e.pageY
                };

                var x = cursorCoords.x - this.coords_in_bar.x;
                var y = cursorCoords.y - this.coords_in_bar.y;

                if(x < this._min_coords.x) {
                    x = this._min_coords.x;
                } else if(x > this._max_coords.x) {
                    x = this._max_coords.x;
                }

                if(y < this._min_coords.y) {
                    y = this._min_coords.y;
                } else if(y > this._max_coords.y) {
                    y = this._max_coords.y;
                }

                if(this.divergent) {
                    x += this.divergent.x;
                    y += this.divergent.y;
                }

                $(this.target).css({
                    left : x + 'px',
                    top: y + 'px'
                });

                this.coords = {
                    x : x,
                    y : y
                };

                if(typeof this.callback.drag != 'undefined') {
                    this.callback.drag({
                        e : e,
                        inst : this
                    });
                }

            }

            this.drop = function(e) {
                if(typeof this.callback.drop != 'undefined') {
                    this.callback.drop({
                        e : e,
                        inst : this
                    });
                }

                $(document).unbind('mousemove', this.hook_func.drag).unbind('mouseup', this.hook_func.drop);
                $(document.body).removeClass('dis-sel');
                $('.form').removeClass('dis-sel');
                document.onselectstart = function() {
                    return true;
                }
                document.onmousedown = function() {
                    return true;
                }

                this.hook_func.drag = null;
                this.hook_func.drop = null;

                $.DRAGGER_CUR_INST = null;
            }

            if(typeof bar != 'object') {
                bar = $('#' + bar)[0];
            }

            if(!options.target) {
                options.target = bar;
            } else if(typeof options.target != 'object') {
                options.target = $('#' + options.target)[0];
            }

            options.index = bar.id;
            options.bar = bar;

            this.index = null;
            this.bar = null;
            this.target = null;
            this.coords_in_bar = {
                x : 0,
                y : 0
            };
            this.coords = {
                x : 0,
                y : 0
            };
            this.min_coords = null;
            this.max_coords = null;
            this._min_coords = {};
            this._max_coords = {};
            this.divergent = null;
            this.callback = {};
            this.cursor = 'move';
            this.hook_func = {};
            this.locked = false;

            $.extend(this, options);

            var self = this;

            this.hook_func.fire = function(e){
                self.fire(e);
            };

            $(this.bar).bind('mousedown', this.hook_func.fire).css('cursor', this.cursor);
        }

        $.fn.osc_dragger = function() {
            var func = null;

            if(arguments.length > 0 && typeof arguments[0] == 'string') {
                func = arguments[0];
            }

            if(func) {
                var opts = [];

                for(var x = 1; x < arguments.length; x ++) {
                    opts.push(arguments[x]);
                }
            } else {
                opts = arguments[0];
            }

            return this.each(function() {
                if(func) {
                    var instance = $(this).data('osc-dragger');
                    instance[func].apply(instance, opts);
                } else {
                    $(this).data('osc-dragger', new OSC_Dragger(this, opts));
                }
            });
        };
    })(jQuery);
}

osc_dragger_setter();



function osc_scroller_setter() {
    if(typeof jQuery == 'undefined' || typeof jQuery.OSC == 'undefined' || ! jQuery.oscDraggerReady) {
        setTimeout(osc_scroller_setter, 150);
        return;
    }

    (function($){
        $.oscScrollerReady = true;

        function OSC_Scroller(container, options) {
            this.reset = function() {
                var container_obj = $(this.container);
                var content_obj = $(this.content);

                //container_obj.height(content_obj.height());
                this.viewport_height = container_obj.height();
                this.content_height = content_obj.height();

                this.ratio = this.viewport_height/this.content_height;
                this.bar_ratio = this.content_height/this.viewport_height;

                this.thumb_height = parseInt(this.viewport_height*this.ratio);

                if(this.ratio >= 1) {
                    $(this.track).hide();
                }

                var self = this;

                if(isNaN(this.thumb_height)) {
                    this.thumb_height = 0;
                    setTimeout(function(){
                        self.reset();
                    }, 1000);
                }

                $(this.thumb).height(this.thumb_height);
            }

            this.scrollToObj = function(obj) {
                if(typeof obj == 'string') {
                    obj = $(obj, this.content);
                } else if(obj.nodeName) {
                    obj = $(obj);
                }

                var content_obj = $(this.content);

                var content_offset = content_obj.offset();
                var obj_offset = obj.offset();

                var iScroll = obj_offset.top - content_offset.top;

                if(this.content_height-iScroll < this.viewport_height) {
                    iScroll = this.content_height - this.viewport_height;
                }

                this.y = iScroll/this.bar_ratio;

                content_obj.css('top', -iScroll);
                $(this.thumb).css('top', this.y);
            }

            this.getPosition = function() {
                return Math.ceil(this.y*this.bar_ratio);
            }

            this.scrollToPosition = function(position) {
                position = parseInt(position);

                if(isNaN(position)) {
                    position = 0;
                } else if(position < 0) {
                    position = - position;
                }

                position = Math.ceil(position);
                this.y = Math.ceil(position/this.bar_ratio);

                $(this.content).css('top', -position);
                $(this.thumb).css('top', this.y);
            }

            this.wheel = function(e){
                e.preventDefault();

                if(this.ratio < 1) {
                    var wheel = 20;

                    var content_obj = $(this.content);

                    e = e || window.event;

                    var wheel_delta = 0;

                    if (e.wheelDelta) {
                        wheel_delta = e.wheelDelta;
                    } else if (e.detail) {
                        wheel_delta = e.detail * -40;
                    }

                    var iDelta = wheel_delta/120;
                    var iScroll = parseInt(content_obj.css('top'));

                    if(isNaN(iScroll)) {
                        iScroll = 0;
                    }

                    iScroll = -iScroll;
                    iScroll -= iDelta * wheel;
                    iScroll = Math.min(this.content_height - this.viewport_height, Math.max(0, iScroll));

                    this.y = Math.ceil(iScroll/this.bar_ratio);

                    content_obj.css('top', -iScroll);
                    $(this.thumb).css('top', this.y);

                    this.position = iScroll;

                    if(typeof this.callback.wheel == 'function') {
                        this.callback.wheel({
                            e : e,
                            inst : this
                        });
                    }

                    if(iScroll == 0) {
                        this.in_bottom_called = false;

                        if(!this.in_top_called && typeof this.callback.inTop == 'function') {
                            this.in_top_called = true;
                            this.callback.inTop({
                                e : e,
                                inst : this
                            });
                        }
                    } else if(this.y >= (this.viewport_height - this.thumb_height)) {
                        this.in_top_called = false;

                        if(!this.in_bottom_called && typeof this.callback.inBottom == 'function') {
                            this.in_bottom_called = true;
                            this.callback.inBottom({
                                e : e,
                                inst : this
                            });
                        }
                    } else {
                        this.in_top_called = false;
                        this.in_bottom_called = false;
                    }
                }
            }

            this.scroll = function(e) {
                if(this.ratio < 1){
                    var content_obj = $(this.content);
                    var thumb_obj = $(this.thumb);

                    this.y = Math.min(this.viewport_height-this.thumb_height, Math.ceil(Math.max(0, (this.position_start + (e.pageY - this.mouse_start)))));

                    var iScroll = this.y * this.bar_ratio;
                    content_obj.css('top', -iScroll);
                    thumb_obj.css('top', this.y);

                    this.position = iScroll;

                    if(this.y == 0) {
                        this.in_bottom_called = false;

                        if(!this.in_top_called && typeof this.callback.inTop == 'function') {
                            this.in_top_called = true;
                            this.callback.inTop({
                                e : e,
                                inst : this
                            });
                        }
                    } else if(this.y >= (this.viewport_height - this.thumb_height)) {
                        this.in_top_called = false;

                        if(!this.in_bottom_called && typeof this.callback.inBottom == 'function') {
                            this.in_bottom_called = true;
                            this.callback.inBottom({
                                e : e,
                                inst : this
                            });
                        }
                    } else {
                        this.in_top_called = false;
                        this.in_bottom_called = false;
                    }
                }
            }

            this._setDragArea = function(e, dragger) {
                var track_obj = $(this.track);
                var thumb_obj = $(this.thumb);

                var track_offset = track_obj.offset();

                dragger.min_coords = {
                    x : track_offset.left,
                    y : track_offset.top
                };

                dragger.max_coords = {
                    x : track_offset.left,
                    y : track_offset.top + track_obj.height() - thumb_obj.height()
                };

                dragger.divergent = {
                    x : - dragger.min_coords.x,
                    y : - dragger.min_coords.y
                };

                this.mouse_start = e.pageY;
                var thumb_dir = parseInt(thumb_obj.css('top'));
                this.position_start = isNaN(thumb_dir) ? 0 : thumb_dir;
            }

            this._mouseOverHook = function() {
                clearTimeout(this.timer);

                if(this.auto_reset) {
                    this.reset();
                }

                $(this.track)[this.ratio < 1 ? 'show' : 'hide']();
            }

            this._hideScroller = function() {
                if(this.scrolling) {
                    var self = this;
                    this.timer = setTimeout(function(){
                        self._hideScroller();
                    }, 100);
                    return;
                }

                $(this.track).hide();
            }

            if(typeof options != 'object') {
                options = {};
            }

            options.index = container.id;
            options.container = container;

            this.index = null;
            this.container = null;
            this.thumb = null;
            this.track = null;
            this.content = null;
            this.name = null;
            this.renderer = null;
            this._hook_funcs = {
                mouse_over : null,
                mouse_out : null
            };
            this.callback = {};
            this.timer = null;
            this.in_top_called = null;
            this.in_bottom_called = null;
            this.scrolling = false;

            $.extend(this, options);

            if(typeof this.renderer != 'object' || this.renderer === null) {
                this.renderer = new OSC_Scroller_Renderer();
            }

            this.renderer.setInstance(this).render();

            var self = this;

            $(this.thumb).osc_dragger({
                target : this.thumb,
                cursor_type : 'pointer',
                callback : {
                    fire : function(params) {
                        self.scrolling = true;

                        if(typeof self.callback.fire == 'function') {
                            self.callback.fire({
                                e : params.e
                                });
                        }

                        self._setDragArea(params.e, params.inst);
                    },

                    drag : function(params) {
                        self.scrolling = true;

                        self.scroll(params.e);

                        if(typeof self.callback.drag == 'function') {
                            self.callback.drag({
                                e : params.e
                                });
                        }
                    },

                    drop : function(params) {
                        self.scrolling = false;

                        if(typeof self.callback.drop == 'function') {
                            self.callback.drop({
                                e : params.e
                                });
                        }
                    }
                }
            });

            if(container.addEventListener) {
                container.addEventListener('DOMMouseScroll', function(e){
                    self.wheel(e);
                }, false);
                container.addEventListener('mousewheel', function(e){
                    self.wheel(e);
                }, false);
                container.addEventListener('MozMousePixelScroll', function(e){
                    e.preventDefault();
                }, false);
            } else {
                container.onmousewheel = function(e){
                    self.wheel(e);
                };
            }

            this._hook_funcs._mouse_over = function() {
                self.reset();
                self._mouseOverHook();
            };
            this._hook_funcs._mouse_out = function() {
                self.timer = setTimeout(function(){
                    self._hideScroller();
                }, 100);
            }

            $(container).hover(this._hook_funcs._mouse_over , this._hook_funcs._mouse_out);

            this.reset();
        }

        function OSC_Scroller_Renderer() {
            this.setInstance = function(inst) {
                this.inst = inst;
                return this;
            }

            this.render = function() {
                this.inst.content = $.createElement('div');

                while(this.inst.container.childNodes.length > 0) {
                    this.inst.content.appendChild(this.inst.container.childNodes[0]);
                }

                $(this.inst.container).addClass('osc-scroller').html(this.inst.content);
                $(this.inst.content).addClass('osc-content');

                this.inst.track = $.createElement('div', {
                    className : 'track'
                }, {}, this.inst.container);
                this.inst.thumb = $.createElement('div', {
                    className : 'thumb'
                }, {}, this.inst.track);
            }

            this.inst = null;
        }

        $.fn.osc_scroller = function() {
            var func = null;

            if(arguments.length > 0 && typeof arguments[0] == 'string') {
                func = arguments[0];
            }

            if(func) {
                var opts = [];

                for(var x = 1; x < arguments.length; x ++) {
                    opts.push(arguments[x]);
                }
            } else {
                opts = arguments[0];
            }

            if(func && func.toLowerCase() == 'getposition') {
                var instance = $(this).data('osc-scroller');
                return instance ? instance.getPosition() : null;
            }

            return this.each(function() {
                var instance = $(this).data('osc-scroller');

                if(func) {
                    instance[func].apply(instance, opts);
                } else {
                    if(!instance) {
                        $(this).data('osc-scroller', new OSC_Scroller(this, opts));
                    }
                }
            });
        }
    })(jQuery);
}
osc_scroller_setter();

function get_scrolltop(){
    try{
        if(window.pageYOffset!=undefined)
            return window.pageYOffset;
        return window.document.body.scrollTop;
    }catch(err){
        try{
            return window.document.body.scrollTop;
        }catch(err2){
            return 0;
        }
    }
}

function notifyScroller(){
    if(typeof jQuery == 'undefined' || typeof jQuery.fn.osc_scroller == 'undefined') {
        setTimeout(notifyScroller, 150);
        return;
    }

    $(".VID-list-notify").osc_scroller({
        callback : {
            inBottom : function(params) {
                if(MINGID_NOTIF_FUNC.PGNOTIF<100){
                    jQuery('#notifimgloading').show();
                    //load notifi data
                    MINGID_NOTIF_FUNC.PGNOTIF = MINGID_NOTIF_FUNC.PGNOTIF+1;
                    //MINGID_DATA_FUNC.getJsonP("get", "jsonp", MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF);
                    VIDDATA_getJsonP('get',  MINGID_CONS.NOTFY_URL+"?p="+MINGID_NOTIF_FUNC.PGNOTIF, 'getAjaxnotif', '');
                    setTimeout(function() {
                        params.inst.reset();
                    }, 500);
                }else{
                    params.inst.reset();
                }
                /*params.inst.reset();
                jQuery("#VID-content-notify").osc_scroller('reset');
                //jQuery("#VID-content-notify").osc_scroller('scrollToPosition','50');

                var top = $('.content','#VID-content-notify').css('top');
                top = parseInt(top.replace("px",""));
                top = top + 25;
                jQuery("#VID-content-notify").osc_scroller('scrollToPosition',top);*/
                //console.log(top)
            }
        }
    });
}
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
            _outMsg = false;
        }, function(){
            _outMsg = true;
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
        //
        //            if($(notifyArea).hasClass("action")) {
        //                $(document).bind('mousedown', closeNotify);
        //            } else {
        //                $(document).unbind('mousedown', closeNotify);
        //            }
        });

        $(".VID-close-ico-frm").click(function(){
            $(notifyArea).removeClass('VID-action');
            //open admicro ads
            if((typeof admTvcMedium)!='undefined') admTvcMedium();
            return false;
        });
    }
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

function toggeLogin(){
    var notifyToggle = $('.VID-text-vietid')[0];

    //console.log($('.text-vietid')+ ': toooooo')
    //if(notifyToggle) {
        if(typeof notifyToggle=='undefined') return;
        var notifyArea = notifyToggle.parentNode;

        var _outNotify = true;
        function closeNotify() {
            if(_outNotify) {
                $(notifyArea).removeClass('VID-action');
                $(document).unbind('mousedown', closeNotify);
                //open admicro ads
                admTvcMedium();
            }
        }

        $(notifyToggle).hover(function(){
            _outNotify = false;
        }, function(){
            _outNotify = true;
        });
        //      Them de user click ra ngoai xu ly close box
        $('.VID-form').hover(function(){
            _outMsg = false;
        }, function(){
            _outMsg = true;
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
            if($(msgArea).hasClass("VID-action")) {
                $(document).bind('mousedown', closeSetting);
            } else {
                $(document).unbind('mousedown', closeSetting);
            }
            //      End : Them de user click ra ngoai xu ly close box

            if($(notifyArea).hasClass("VID-action")) {
                    //close adm ads
                    if((typeof admTvcMini)!='undefined') admTvcMini();
            } else {
                //open admicro ads
                if((typeof admTvcMedium)!='undefined') admTvcMedium();
            }
        });

        $(".VID-close-ico-frm").click(function(){
            $(notifyArea).removeClass('VID-action');
            //open admicro ads
            if((typeof admTvcMedium)!='undefined') admTvcMedium();
            return false;
        });
    //}

    $('#btn-vid-login').click(function(e){
        jQuery('.VID-msg-login-warning').remove();
        jQuery('#taskbar-password-warn').remove();
        var email = $('#inp-vid-email').val(),
            password = $('#inp-vid-password').val();
        if(typeof email=='undefined' || email==''){
            $('.VID-msg-register').after('<div class="VID-red VID-msg-login-warning" id="retMess">Bạn chưa điền email!</div>');
        }
        else if(typeof password=='undefined' || password==''){
            $('.VID-msg-register').after('<div class="VID-red VID-msg-login-warning" id="retMess">Bạn chưa điền mật khẩu!</div>');
        }
        else{
            var data = 'email='+email+'&password='+password;
            VIDDATA_getJsonP('post', 'http://vietid.net/taskbar/login', 'taskbarLogin', data);
            $('#vid_loading_img').show();
        }
    });
}

function openPopup(mylink){
    //window.open(url, name,'fullscreen=1,left=0,top=0,location=0,menubar=0,resizable=1,scrollbars=0,status=0,titlebar=0,toolbar=0,top=0');
    if (! window.focus) return true;
    var href;
    if (typeof(mylink) == 'string')
       href=mylink;

    else
       href=mylink.href;

    window.open(href, 'VietID', 'width=600,height=400,scrollbars=yes');
    return false;
}

function VIDDATA_getJsonP(rtype, urlget, callback, data){
    $.ajax({
        type: rtype,
        url: urlget,
        data: data,
        dataType: 'jsonp',
        jsonp: 'callback',
		async: false,
        jsonpCallback: callback,
        success: function(){
            //MINGID_NOTIF_FUNC.LOADLOCK=0;
            //alert("success");
        }
    });
}

function taskbarLogin(data){
	var app_key = $("#VID_taskbar").attr('rel');
	if (typeof app_key == "undefined") {
		app_key = '';
	}
    $('#vid_loading_img').hide(); //hide loading image when data received
    $('#retMess').remove();
    if(typeof data!='undefined'){
        var dLen = data.length;
        if(data.status==0){
            $('#retMess').remove();
            $('.VID-rs').after('<div class="VID-red" id="retMess">'+data.message+'!</div>');
        }
        if(data.status==1){
            $('#VID_ul_taskbar').addClass('VID-taskbar-login');
            /*console.log(data.status);
            console.log(data.user.avatar)*/

            MINGID_DATA_FUNC.setCookie('ming_user', data.user.email, 365);
            MINGID_DATA_FUNC.setCookie('ming_key', data.user.key, 365);
            MINGID_DATA_FUNC.setCookie('ming_udata', 'full_name::'+data.user.full_name+'|avatar::'+data.user.avatar+'|gender::'+data.user.gender+'|mobile_number::'+data.user.mobile_number+'|birthday::'+data.user.birthday+'|username::'+data.user.username+'|city::'+data.user.city, 365);
            MINGID_DATA_FUNC.setCookie('vid_uid', data.user.id, 365);
            /*require(["http://dev.comment.id.ming.vn/statics/taskbar/js/vid_initaskbar.js"], function(initTask) {
                $('#VID_ul_taskbar').html('');
                initTask.initTaskbar();
            });*/

            require_vid(["http://mingid.vcmedia.vn/taskbar/js/util.js"], function(x) {
                x.initTaskbar();
            });
			if ($('#mingid_comment_iframe').length > 0) {
				$('#mingid_comment_iframe').attr('src', $('#mingid_comment_iframe').attr('src'));
			}
			/*
			if(app_key == 'd9c694bd04eb35d96f1d71a84141d075') {


				MingToolbarCallback(data.user.id);
			}
			*/
			if (typeof MingToolbarCallback === 'function') {
			   MingToolbarCallback(data.user.id);
			}
            if(typeof isLoginReload!='undefined'){
                if(isLoginReload == 1) {
                    location.reload();
                }
            }

        }
    }else{
        $('.VID-rs').after('<div class="VID-red" id="retMess">Có lỗi xảy ra, vui lòng thử lại!</div>');
    }
}

function taskbarChecklogin(data){
	//console.log(data);
    if(typeof (data) == 'undefined' || data == '' || data == null || data == 'null'){

        MINGID_DATA_FUNC.setCookie('ming_key', '', 365);

		//console.log(MINGID_DATA_FUNC.getCookie('ming_key'));
    } else {

        var data = eval("(" + data + ")");
        var dLen = data.length;
        $('#VID_ul_taskbar').addClass('VID-taskbar-login');
        //console.log(data)
        /*console.log(data.status);
        console.log(data.user.avatar)*/
        MINGID_DATA_FUNC.setCookie('ming_user', data.email, 365);
        MINGID_DATA_FUNC.setCookie('ming_key', data.key, 365);
        MINGID_DATA_FUNC.setCookie('ming_udata', 'full_name::'+data.full_name+'|avatar::'+data.avatar+'|gender::'+data.gender+'|mobile_number::'+data.mobile_number+'|birthday::'+data.birthday+'|username::'+data.username+'|city::'+data.city, 365);
		/*
        require(["http://dev.comment.vietid.net/statics/taskbar/js/util.js"], function(x) {
            x.initTaskbar();
        });
		*/

	}
	VID_USER = MINGID_DATA_FUNC.getCookie('ming_user');
	VID_HASH = MINGID_DATA_FUNC.getCookie('ming_key');
	VID_STATUS = 1;
}

function showForgotEmail(){

}
function showForgotPass(){

}


function submitReg(){
	var app_key = $("#VID_taskbar").attr('rel');
	if (typeof app_key == "undefined") {
		app_key = '';
	}
	//console.log(app_key);
    var email=$('#taskbar-reg-email').val(),
        password=$('#taskbar-reg-password').val(),
        repassword=$('#taskbar-reg-repassword').val(),
        fullname=$('#taskbar-reg-fullname').val()
        termcheck=$('#check-rules').is(":checked");
        //console.log(termcheck);
    if(typeof email=='undefined' || email=='' || email=='Bạn chưa nhập email!'){
        $('#taskbar-reg-email').val('Bạn chưa nhập email!');
    }else if(typeof password=='undefined' || password==''){
        $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Bạn chưa nhập mật khẩu!</div>');
    }else if(typeof repassword=='undefined' || repassword==''){
        $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Bạn chưa nhập lại mật khẩu!</div>');
    }else if(typeof fullname=='undefined' || fullname==''){
        $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Bạn chưa nhập họ tên!</div>');
    }else if(typeof termcheck=='undefined' || termcheck==false){
        $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Bạn chưa đồng ý với điều khoản sử dụng!</div>');
    }else{
        $('#taskbar-password-warn').remove();
        var tc=0;
        if(termcheck==true) {
            tc=1;
        }
        var data ='email='+email+'&password='+escape(password)+'&repassword='+escape(repassword)+'&fullname='+escape(fullname)+'&termcheck='+tc+'&app_key='+app_key;
		console.log(data);
        VIDDATA_getJsonP('POST', 'http://vietid.net/Taskbar/Pregister', 'regCallback', data);
    }
}

function regCallback(data){
    var data = eval("(" + data + ")");
    var dataLen = data.length;

    if(dataLen<0){
        $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Có lỗi xảy ra, xin vui lòng thử lại!</div>');
    }
    var style='VID-red';
    if(data.status==1) style='VID-green';

    if(data.status==1){
        $('#retMess').html('<div id="taskbar-password-warn" class="'+style+'">'+data.message+'</div>');
        setTimeout(function() {
            $('.ico-vietid .form').hide();
        }, 10000);
    }else{
        $('#retMess').html('<div id="taskbar-password-warn" class="'+style+'">'+data.message+'</div>');
    }
}

function showRegister(){
	var app_key = $("#VID_taskbar").attr('rel');
	if (typeof app_key == "undefined") {
		app_key = '';
	}
    var urlFb = 'http://comment.vietid.net/OauthServer/FBAccess?taskbar_callback='+encodeURIComponent(''+window.location.href+'?fbreturn=1')+'&app_key='+app_key;
    $('#VID_ul_taskbar').html(
        '<li class="VID-text-vietid">\
            <span title="Đăng ký ViệtID" class="VID-text VID-frm-login VID-show">\
                <img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png" alt="logo" title="VietId" class="VID-taskbar-text-ico"/>\
                Đăng ký ViệtID\
            </span>\
        </li>\
        <!--li class="VID-ico-vietid"-->\
            <!--a id="toTop" class="VID-toTop"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/ico/ico-vietid.png" alt="ico" title="VietId" class="VID-taskbar-ico" /></a-->\
            <div class="VID-form">\
                <span class="VID-rs">\
                    <img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/register-logo-vietid.png" alt="ico" title="VietId" class="VID-img-header-menu-regisrer"/>\
                    Đăng ký <span class="VID-bold">ViệtID</span>\
                    <span class="VID-close-ico-frm">\
                        <img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/null.png" alt="close" title="Close" class="VID-img-close"/>\
                    </span>\
                </span>\
                <div class="VID-content-menu">\
                    <div class="VID-header-register">\
                        <span class="VID-register-tab-one">\
                            <img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/bg/header-register.png" alt="ico" title="VietId" class="VID-img-header-register"/>\
                            <img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/logo-vietid.png" alt="logo" title="VietId" class="VID-taskbar-text-ico"/>\
                            <span class="VID-text text-head-login">Đăng ký</span>\
                        </span>\
                        <span class="VID-register-tab-two">\
                            <span class="VID-text VID-text-head-login text-done">Hoàn tất đăng ký</span>\
                        </span>\
                    </div>\
                    <div id="retMess"></div>\
                    <form id="taskbar_reg_frm" action="" method="post">\
                    <div class="VID-frm-content">\
                        <div class="VID-email">\
                            <div class="VID-text-email">\
                                <span class="VID-red"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/sao.png" alt="sao" class="VID-sao"/></span>\
                                Email\
                            </div>\
                            <div class="VID-input">\
                                <input value="" type="text" class="VID-input-email" id="taskbar-reg-email" />\
                            </div>\
                        </div>\
                        <div class="VID-email">\
                            <div class="VID-text-email">\
                                <span class="VID-red"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/sao.png" alt="sao" class="VID-sao"/></span>\
                                Mật khẩu\
                            </div>\
                            <div class="VID-input">\
                                <input value="" type="password" class="VID-input-email" id="taskbar-reg-password"/>\
                            </div>\
                        </div>\
                        <div class="VID-email">\
                            <div class="VID-text-email">\
                                <span class="VID-red"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/sao.png" alt="sao" class="VID-sao"/></span>\
                                Xác nhận MK\
                            </div>\
                            <div class="VID-input">\
                                <input value="" type="password" class="VID-input-email" id="taskbar-reg-repassword"/>\
                            </div>\
                        </div>\
                        <div class="VID-email">\
                            <div class="VID-text-email">\
                                <span class="VID-red"><img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/sao.png" alt="sao" class="VID-sao"/></span>\
                                Tên đầy đủ\
                            </div>\
                            <div class="VID-input">\
                                <input value="" type="text" class="VID-input-email" id="taskbar-reg-fullname"/>\
                            </div>\
                        </div>\
                        <div class="VID-rules">\
                            <input type="checkbox" value="1" class="VID-check-border" id="check-rules" checked="checked"/>\
                            <label for="check-rules">Tôi đã đọc và chấp nhận <a class="VID-green" href="http://vietid.net/terms" target="_blank">quy định</a> của <span class="VID-bold">VietID</span></label>\
                        </div>\
                        <div class="VID-g-button">\
                            <a class="VID-register-button" href="javascript:void(0)" onclick="javascript:submitReg()">\
                                <span class="VID-text-register">Đăng ký</span>\
                            </a>\
                            <a class="VID-green" href="http://vietid.net/Support/" target="_blank">Trợ giúp</a>\
                            <span class="VID-gray">|</span>\
                            <a class="VID-green" href="http://vietid.net/Users/ResendActive" target="_blank">  Gửi lại email KH?</a>\
                        </div>\
                    </div>\
                    </form>\
                </div>\
                <div class="VID-other-register">\
                    <span class="VID-text text-orther-register">hoặc đăng ký bằng tài khoản</span>\
                    <a href="'+urlFb+'" class="VID-fb" onClick="return openPopup(this)">\
                        <img src="'+MINGID_STATIC_DOMAIN+'/images_taskbar/fb.png" alt="facebook" class="VID-facebook"/>\
                    </a>\
                </div>\
            </div>\
        <!--/li-->'
    );
    //toggeNotify();
    //toggeLogin();

    $('#taskbar-reg-email').on({
        focus: function(){
            var $this = $(this);
            if($this.val() === 'Bạn chưa nhập email!') {
                $this.val('');
                $('#taskbar-password-warn').remove();
            }
        },
        blur: function(){
            var $this = $(this);
            if($this.val() === '') $this.val('Bạn chưa nhập email!');
        }
    });
    $('#taskbar-reg-password').on({
        focus: function(){
            var $this = $(this);
            if($this.val() === 'Bạn chưa nhập mật khẩu!') {
                $this.val('');
                $('#taskbar-password-warn').remove();
            }
        },
        blur: function(){
            var $this = $(this);
            if($this.val() === '') {
                //$('#retMess').html('<div id="taskbar-password-warn" class="red">Bạn chưa nhập mật khẩu!</div>');
            } else {
                if($this.val().length<6){
                    $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Mật khẩu phải từ 6 kí tự trở lên!</div>');
                }
            }
        }
    });
    $('#taskbar-reg-repassword').on({
        focus: function(){
            var $this = $(this);
            if($this.val() === 'Bạn chưa nhập lại mật khẩu!') {
                $this.val('');
                $('#taskbar-password-warn').remove();
            }
        },
        blur: function(){
            var $this = $(this);
            if($this.val() === '') {
                $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Bạn chưa nhập lại mật khẩu!</div>');
            } else {
                if($this.val().length<6){
                    $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Mật khẩu phải từ 6 kí tự trở lên!</div>');
                }
                if($this.val()!=$('#taskbar-reg-password').val()){
                    $('#retMess').html('<div id="taskbar-password-warn" class="VID-red">Mật khẩu không giống nhau!</div>');
                }
            }
        }
    });
    $('#taskbar-reg-fullname').on({
        focus: function(){
            var $this = $(this);
            if($this.val() === 'Bạn chưa nhập họ tên!') {
                $this.val('');
                $('#taskbar-password-warn').remove();
            }
        },
        blur: function(){
            var $this = $(this);
            if($this.val() === '') $this.val('Bạn chưa nhập họ tên!');
        }
    });


    var notifyToggle = $('.VID-text-vietid')[0];
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
            $("ul[class='VID-taskbar VID-taskbar-login']").removeClass('VID-action');
            $(notifyArea).toggleClass('VID-action');

            if($(notifyArea).hasClass('VID-action')) {

            }
            e.stopPropagation();
        }
    });
    $(".VID-close-ico-frm").click(function(){
        $(notifyArea).removeClass('VID-action');
        require_vid(["http://mingid.vcmedia.vn/taskbar/js/util.js"], function(x) {
                x.initTaskbar();
        });
        return false;
    });
}

function getAjaxnotif(data){
    //var data = eval("(" + data + ")");

    var dataLen = data.length;
    if(MINGID_NOTIF_FUNC.PGNOTIF>0 && (data=='' || data.length==0 || typeof data=='undefined')){
        jQuery('#notifimgloading').hide();
        return;
    }
    //console.log(data+'data');
    //console.log(typeof data);
    if(typeof data=='undefined' || data=='' || dataLen<=0){
        //$('.content-notify .content').html('Chưa có thông báo nào!');
        str + '\
            <li>\
                <a href="#" class="VID-avatar">\
                    <img src="#" alt="avatar" title="VID-avatar" />\
                </a>\
                <div class="VID-data-notify">\
                    <span class="VID-link-notify">\
                        Chưa có thông báo nào!\
                    </span>\
                </div>\
            </li>\
            ';
    }else{
        jQuery('#Vid_Nonotify').remove();
        var str = '', //define str to fill into notify panel
            strU = ''; //define string with user list count
        for(var i=0; i<dataLen; i++){
            var userList = data[i].list_username.split(','),
                uListLen = userList.length;
            if(uListLen==1){
                strU = '<a href="javascript:void(0)" class="VID-bold">' + userList[0] + '</a>';
            }
            if(uListLen>1){
                strU = '<a href="javascript:void(0)" class="VID-bold">' + userList[0] + '</a> và ' + (uListLen-1) + ' người nữa';
            }
            var domain = data[i].news_url.match(/^(([a-z]+:)?(\/\/)?[^\/]+\/).*$/)[1];
            var str = str + '\
                        <li>\
                            <a href="javascript:void(0)" class="VID-avatar">\
                                <img src="' + data[i].user_avatar + '" alt="avatar" title="avatar" onerror="this.src=\'http://mingid.vcmedia.vn/thumb/48_48/v4/images/comment/Defaut-'+Math.floor((Math.random()*6)+1)+'.png\'" />\
                            </a>\
                            <div class="VID-data-notify">';
            if(data[i].type == 5 || data[i].type == 6 || data[i].type == 7) {
                var str = str + '<span class="VID-author">' + strU + ' <span class="VID-gray-frm">' + MINGID_NOTIF_FUNC.arrNotifType(data[i].type) + '</span>\
                                <a href="' + data[i].news_url + '" class="VID-link" target="_blank">\
                                <span class="VID-link-notify">\
                                    <span class="VID-date-time">' + data[i].create_time + '</span>\
                                </span></a>';
            }
            if(data[i].type != 5 && data[i].type != 6 && data[i].type != 7) {
                var str = str + '<span class="VID-author">\
                                    ' + strU + ' <span class="VID-gray-frm">' + MINGID_NOTIF_FUNC.arrNotifType(data[i].type) + ' bình luận của bạn tại link:</span>\
                                </span>\
                                <span class="VID-link-notify">\
                                    <a href="' + data[i].news_url + '" class="VID-link" target="_blank">' + data[i].news_title + '</a>\
                                    <span class="VID-space-dot">·</span>\
                                    <a href="javascript:void(0)" class="VID-channel">' + domain+ '</a>\
                                    <span class="VID-space-dot">·</span>\
                                    <a href="javascript:void(0)" class="VID-date-time">' + data[i].create_time + '</a>\
                                </span>';
            }
                str = str + '</div>\
                        </li>\
                        ';
        }

        //$('#VID_ul_taskbar .track').remove();
        //console.log('<'+MINGID_NOTIF_FUNC.PGNOTIF+'---'+dataLen+'>')
        //setTimeout(function() {
            if((MINGID_NOTIF_FUNC.PGNOTIF==1 && dataLen>0)){ //add html content to div notify panel when first get Notify
                $('ul.VID-list-notify').append(''+str+'');
            }else if((MINGID_NOTIF_FUNC.PGNOTIF>1 && dataLen>0)){
                $('ul.VID-list-notify .osc-content').append(''+str+'');
                //$('ul.VID-list-notify').append(''+str+'');
            }
            //$('.content-notify').after('<div class="track"><div class="thumb" style="cursor: move;"></div></div>');

            osc_core_setter();
            osc_dragger_setter();
            osc_scroller_setter();
        //}, 1100);
        /*toggeNotify();
        notifyScroller();*/
    }

    jQuery('#notifimgloading').hide();
}

function VIDlogoutCallback(data){
    var data = eval("(" + data + ")");
    console.log(data)
    if(data.status==1){
        MINGID_DATA_FUNC.setCookie('ming_key', '', -365);
        MINGID_DATA_FUNC.setCookie('vid_uid', '', -365);
        require_vid(["http://mingid.vcmedia.vn/taskbar/js/util.js"], function(x) {
                x.initTaskbar();
        });
		window.top.location.reload();
    }
}
function logoutVID(){
     VIDDATA_getJsonP('get',  'http://vietid.net/taskbar/Logout', 'VIDlogoutCallback', '');
}

function VID_counNotif(data){
    if(typeof data=='undefined' || data<=0){
        jQuery('.VID-group-notify').remove();
        jQuery('.VID-notify-point').remove();
    }
    if(data>0){
        $('#notification').append('<span class="VID-group-notify"><span class="VID-notify-left"></span><span class="VID-notify-content"><span class="VID-notify-total" id="notify-total">'+data+'</span></span><span class="VID-notify-right"></span></span><span class="VID-notify-point"></span>');
    }
}

function VID_reset_notify_count(){
    var CUR_NOTIF_COUNT = MINGID_DATA_FUNC.getCookie('MIDNOTIFDATA');
    if(typeof(CUR_NOTIF_COUNT)!='undefined' && CUR_NOTIF_COUNT!=null) {
        var dataOfNotif = CUR_NOTIF_COUNT.split('_');
            dataOfNotif = parseInt(dataOfNotif[0]);

        if(dataOfNotif>=1){
            //reset notify count
            VIDDATA_getJsonP('get',  MINGID_CONS.UPDATE_NOTIFYEX_URL, 'notifCountCallback', '');

            if(jQuery('.VID-group-notify')){
                jQuery('.VID-group-notify').remove();
            }
            if(jQuery('.VID-notify-point')){
                jQuery('.VID-notify-point').remove();
            }
            var ts=Math.round((new Date()).getTime() / 1000);
            MINGID_DATA_FUNC.setCookie('MIDNOTIFDATA', '0' + '_' + ts);
        }
    }
}