$(function(){

	
	
	$(".social ul li , .header-menu1 ul li").each(function () {
        $("a strong", this).css("opacity", "0");
    });
    $(".social li").hover(function () {
        $(this).stop().fadeTo(500, 1).siblings().stop().fadeTo(500, 0.2);
        $("a strong", this).stop().animate({
            opacity: 1,
            top: "-10px"
        }, 300);
    }, function () {
        $(this).stop().fadeTo(500, 1).siblings().stop().fadeTo(500, 1);
        $("a strong", this).stop().animate({
            opacity: 0,
            top: "-1px"
        }, 300);
    });
    $('.social li a,.header-menu1 ul li a').hover(function (event) {
        $(this).stop().animate({
            marginTop: "-3px"
        }, {
            duration: 'slow',
            easing: 'easeOutElastic'
        });
    }, function () {
        $(this).stop().animate({
            marginTop: "0px"
        }, {
            duration: 'slow',
            easing: 'easeOutElastic'
        });
		});
		
		
	$(document).ready(function() {

			/* 	1st example	*/

			/// wrap inner content of each anchor with first layer and append background layer
			$("#menu li a").wrapInner( '<span class="out"></span>' ).append( '<span class="bg"></span>' );

			// loop each anchor and add copy of text content
			$("#menu li a").each(function() {
				$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
			});

			$("#menu li a").hover(function() {
				// this function is fired when the mouse is moved over
				$(".out",	this).stop().animate({'top':	'45px'},	250); // move down - hide
				$(".over",	this).stop().animate({'top':	'0px'},		250); // move down - show
				$(".bg",	this).stop().animate({'top':	'0px'},		120); // move down - show

			}, function() {
				// this function is fired when the mouse is moved off
				$(".out",	this).stop().animate({'top':	'0px'},		250); // move up - show
				$(".over",	this).stop().animate({'top':	'-45px'},	250); // move up - hide
				$(".bg",	this).stop().animate({'top':	'-45px'},	120); // move up - hide
			});
					


		});

	
	
});