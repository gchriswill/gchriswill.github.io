/* 
 * Me's JavaScript - Disinged and coded by @gchriswill
 * Code licensed under MIT, documentation under CC BY-SA 4.0
 *	
 */


jQuery(document).ready(function(){
	
	/* jQuery Plugin  ************************************************************
		Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
		Author: Fabio Mangolini - @responsivewm
		Website: http://www.responsivewebmobile.com
	******************************************************************************/
	$(".carousel").carousel({pause: "false",interval: 10000});
	
	$(".carousel").css({
		"margin": 0, 
		"width": $(window).outerWidth(), 
		"height": $(window).outerHeight()
	});
	
	$(".carousel .item").css({
		"position": "fixed", 
		"width": "100%", 
		"height": "100%"
	});
	
	$(".carousel-inner div.item img").each(function(){
		var imgSrc = $(this).attr("src");
		$(this).parent().css({
			"background": "url("+imgSrc+") center center no-repeat", 
			"-webkit-background-size": "100% ", 
			"-moz-background-size": "100%", 
			"-o-background-size": "100%", 
			"background-size": "100%", 
			"-webkit-background-size": "cover", 
			"-moz-background-size": "cover", 
			"-o-background-size": "cover", 
			"background-size": "cover"
		});
		$(this).remove();
	});
	
	$(window).on("resize", function(){
		$(".carousel").css({
			"width": $(window).outerWidth(), 
			"height": $(window).outerHeight()
		});
	});
	/* End of plugin */
	
	
	
	/* @gchriswill *** Me code! *************************************************/
	window.requestAnimationFrame(function(){
	
		$("#devModal").modal("show");
		
		$("#carousel_setup").on("slide.bs.carousel", function () {
				
			$(".textAnimation_1i1").animate({opacity: 0}, 10);
				
			$(".textAnimation_1i2").slideUp(10);
					
		});
			
		
		$("#carousel_setup").on("slid.bs.carousel", function () {
				
			$(".textAnimation_1i2").slideDown("slow");
				
			$(".textAnimation_1i1").animate({opacity: 1}, "slow");
						
		});
		
	});
	
}); 
