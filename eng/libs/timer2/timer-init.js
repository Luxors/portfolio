function run_timers() {
	
    var getms = function (d, h, m) { return (d*24*60 + h*60 + m) *60*1000; }
    
    var on_expired = function() { 
    	//window.location.reload(); 
    	// alert('Expired!');
    	$('.purchase__price, .purchase__button, .god_timer').hide();
    	$('.purchase__button-new, .purchase__price-new').css('display', 'inline-block');
    	// $('.regbutton p span').text('Время предложения истекло');
    	PageTimers.timers = [];
    }

    var get_webinar_time  = function() {
        var time = new Date(new Date().getTime() + getms(0, 72, 0));
        // var time = new Date((new Date()).getTime() + getms(0, 0, 1));

        return time; 
    };

    var cookie = 'timer__odsoiujmxcnyd3436';

    if ($.cookie(cookie)) {
        endDate = new Date(parseInt($.cookie(cookie)));
    }
    else {
        endDate = get_webinar_time();
        $.cookie(cookie, endDate.getTime(), {expires: 5});
    }

    // endDate = get_webinar_time();


    PageTimers.add ( endDate, '#clock1', function(timer, date, expired) {
        if (expired) {  on_expired();  }
    });

    PageTimers.run();
};

(function() {

	function do_init() {

		if ( !window['$'] ) setTimeout(do_init, 300);
		else
			$(function () {
				init_cookies();
				run_timers();
			});	
	}
	do_init();

})();

function init_cookies() {
	/**
	 * Cookie plugin
	 *
	 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
	 * Dual licensed under the MIT and GPL licenses:
	 * http://www.opensource.org/licenses/mit-license.php
	 * http://www.gnu.org/licenses/gpl.html
	 *
	 */

	/**
	 * Create a cookie with the given name and value and other optional parameters.
	 *
	 * @example $.cookie('the_cookie', 'the_value');
	 * @desc Set the value of a cookie.
	 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
	 * @desc Create a cookie with all available options.
	 * @example $.cookie('the_cookie', 'the_value');
	 * @desc Create a session cookie.
	 * @example $.cookie('the_cookie', null);
	 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
	 *       used when the cookie was set.
	 *
	 * @param String name The name of the cookie.
	 * @param String value The value of the cookie.
	 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
	 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
	 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
	 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
	 *                             when the the browser exits.
	 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
	 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
	 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
	 *                        require a secure protocol (like HTTPS).
	 * @type undefined
	 *
	 * @name $.cookie
	 * @cat Plugins/Cookie
	 * @author Klaus Hartl/klaus.hartl@stilbuero.de
	 */

	/**
	 * Get the value of a cookie with the given name.
	 *
	 * @example $.cookie('the_cookie');
	 * @desc Get the value of a cookie.
	 *
	 * @param String name The name of the cookie.
	 * @return The value of the cookie.
	 * @type String
	 *
	 * @name $.cookie
	 * @cat Plugins/Cookie
	 * @author Klaus Hartl/klaus.hartl@stilbuero.de
	 */
	jQuery.cookie = function(name, value, options) {
	    if (typeof value != 'undefined') { // name and value given, set cookie
	        options = options || {};
	        if (value === null) {
	            value = '';
	            options.expires = -1;
	        }
	        var expires = '';
	        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
	            var date;
	            if (typeof options.expires == 'number') {
	                date = new Date();
	                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
	            } else {
	                date = options.expires;
	            }
	            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
	        }
	        // CAUTION: Needed to parenthesize options.path and options.domain
	        // in the following expressions, otherwise they evaluate to undefined
	        // in the packed version for some reason...
	        var path = options.path ? '; path=' + (options.path) : '';
	        var domain = options.domain ? '; domain=' + (options.domain) : '';
	        var secure = options.secure ? '; secure' : '';
	        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	    } else { // only name given, get cookie
	        var cookieValue = null;
	        if (document.cookie && document.cookie != '') {
	            var cookies = document.cookie.split(';');
	            for (var i = 0; i < cookies.length; i++) {
	                var cookie = jQuery.trim(cookies[i]);
	                // Does this cookie string begin with the name we want?
	                if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                    break;
	                }
	            }
	        }
	        return cookieValue;
	    }
	};
}


/****** modal window */

//var overlay = $('#overlay'); 
//var open_modal = $('.zayavka_btn'); 
//var close = $('.modal__close, #overlay'); 
//var modal = $('.modal_div'); 
//
// open_modal.click( function(event){ 
//     event.preventDefault(); 
//     var div = $(this).attr('href'); 
//     overlay.fadeIn(400,
//         function(){ 
//             $(div) 
//                 .css('display', 'block') 
//                 .animate({opacity: 1, top: '0'}, 200); 
//     });
// });
//
// close.click( function(){ 
//        modal 
//         .animate({opacity: 0}, 200, 
//             function(){ 
//                 $(this).css('display', 'none');
//                 overlay.fadeOut(400); 
//             }
//         );
// });
