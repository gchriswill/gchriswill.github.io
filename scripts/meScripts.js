
jQuery(document).ready(function(){
	
	/* jQuery Plugin  ************************************************************
		Transforms the basic Twitter Bootstrap Carousel into Fullscreen Mode
		@author Fabio Mangolini
		http://www.responsivewebmobile.com
	******************************************************************************/
	$(".carousel").carousel({pause: "false",interval: 10000});
	$(".carousel").css({"margin": 0, "width": $(window).outerWidth(), "height": $(window).outerHeight()});
	$(".carousel .item").css({"position": "fixed", "width": "100%", "height": "100%"});
	$(".carousel-inner div.item img").each(function(){var imgSrc = $(this).attr("src");
	$(this).parent().css({"background": "url("+imgSrc+") center center no-repeat", "-webkit-background-size": "100% ", "-moz-background-size": "100%", "-o-background-size": "100%", "background-size": "100%", "-webkit-background-size": "cover", "-moz-background-size": "cover", "-o-background-size": "cover", "background-size": "cover"});
	$(this).remove();});
	$(window).on("resize", function(){$(".carousel").css({"width": $(window).outerWidth(), "height": $(window).outerHeight()});});
	/* End of plugin */
	
	
	
	/* @gchriswill :---> Me code! *************************************************/
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




	
	

		
/*
$( document ).ready(function() {
  	
	$( ".gchriswill-profileImage" ).fadeOut( 1 );
				
	$( ".gchriswill-intro" ).fadeOut( 1 );
	
	$( ".gchriswill-description" ).fadeOut( 1,function() {
		$( ".gchriswill-profileImage" ).fadeIn( 1000 );
		$( ".gchriswill-intro" ).fadeIn( 2000 );
		$( ".gchriswill-description" ).fadeIn( 3000 );
	});
	
});

$( "#clickTest" ).click(function() {
	
	$( ".gchriswill-container-1" ).slideUp( "slow", function() {
		
		$( ".gchriswill-container-1" ).slideDown( "slow");
	});
	
});

$(".correo").attr("href", "mailto:" + "gchriswill" + "@" + "icloud" + "." + "com");

*/
