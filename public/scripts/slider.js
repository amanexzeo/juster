$(document).ready(function(){
// invoke the carousel
    $('#myCarousel').carousel({
      interval:6000
    });

// scroll slides on mouse scroll
//$('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){
//
//        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
//            $(this).carousel('prev');
//
//
//        }
//        else{
//            $(this).carousel('next');
//
//        }
//    });

//scroll slides on swipe for touch enabled devices

 	$("#myCarousel").on("touchstart", function(event){

        var yClick = event.originalEvent.touches[0].pageY;
    	$(this).one("touchmove", function(event){

        var yMove = event.originalEvent.touches[0].pageY;
        if( Math.floor(yClick - yMove) > 1 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(yClick - yMove) < -1 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});

});
//animated  carousel start
$(document).ready(function(){

//to add  start animation on load for first slide
$(function(){
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});
                $('.item1 .SliderImg').animateCss('slideInUp');
                $('.click-mode').animateCss('fadeInRight');
                $('.blink').animateCss('flash');

});

//to start animation on  mousescroll , click and swipe



     $("#myCarousel").on('slide.bs.carousel', function () {
		$.fn.extend({
			animateCss: function (animationName) {
				var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
				this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass(animationName);
				});
			}
		});

// add animation type  from animate.css on the element which you want to animate

        $('.item1 .SliderImg').animateCss('slideInUp');
         
		$('.item2 .SliderImg').animateCss('slideInUp');
        $('.click-mode').animateCss('fadeInRight');
        $('.blink').animateCss('flash');
    });
});
