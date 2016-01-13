/*
setup file: progressive loading of images,
*/
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }
    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }
    // other browser
    return false;
}    
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var chrome = (window.chrome || isChrome);
var Windows = (navigator.userAgent.indexOf('Windows') != -1);
var win8 = (navigator.userAgent.indexOf('Windows NT 6.2') != -1) || (navigator.userAgent.indexOf('Windows NT 6.3') != -1);
var Mac = (navigator.userAgent.indexOf('Macintosh') != -1);
var firefox = (navigator.userAgent.indexOf('Firefox') != -1);
var Linux;
var Opera = (navigator.userAgent.indexOf('OPR') != -1);
var IE = detectIE();

var touchDevice = Modernizr.touch;
var orientation = Modernizr.deviceorientation;
var win_orientation = window.orientation;
//var url = location.href;
if ((typeof orientation) == 'number') {
    //load mobile version
    //alert('SORRY, THIS IS THE END OF THE ROAD FOR MOBILE. TRY AGAIN ON A DESKTOP BROWSER.')
    alert('THIS MIGHT NOT BE OPTIMAL FOR MOBILE. TRY ANYWAY?')
}

if (IE) {
	//alert('its IE')
	$('html').addClass('ie');
}
if (chrome) {
	//alert('its IE')
	$('html').addClass('chrome');
}

if (isSafari) {
	$('html').addClass('safari');

}
//console.log(navigator.userAgent)

(function($) { 
	//helper to know how far the scrollbar has scrolled down.
    // var t = $("#how-far");              
    // $(window).scroll(function() {
    // 	var pos = t.position();   
    //     var windowpos = $(window).scrollTop();
    //     t.html('distance from the top: ' + windowpos);
    // });

	// $.preloadImages = function() {
	//   for (var i = 0; i < arguments.length; i++) {
	//     $("<img />").attr("src", arguments[i]);
	//   }
	// }

	// $.preloadImages("hoverimage1.jpg","hoverimage2.jpg");

var images = new Array();
	function preload() {
		for (i = 0; i < preload.arguments.length; i++) {
			images[i] = new Image()
			images[i].src = preload.arguments[i]
		}
	}	

    setTimeout(function(){
		preload(
			"http://bonfirelabs.com/assets/404/assets/css/assets/submit-02-on.png",
			"http://bonfirelabs.com/assets/404/assets/css/module-1k/click-here-on.png",
			"http://bonfirelabs.com/assets/404/assets/css/module-1k/enter-site-on.png",
			"http://bonfirelabs.com/assets/404/assets/css/module-1k/play-again-on.png",
			"http://bonfirelabs.com/assets/404/assets/css/module-1k/share-now-on.png",
			"http://bonfirelabs.com/assets/404/assets/css/module-1k/submit-01-on.png",
			"http://bonfirelabs.com/assets/404/assets/css/module-1a/module-1a-FULL.jpg"
		)   
    }, 9000)

})(jQuery);







