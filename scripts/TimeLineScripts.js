/* 
 * TimeLine's Custom JavaScript - Disinged and coded by @gchriswill
 * Code licensed under MIT, documentation under CC BY-SA 4.0
 *	
 */



jQuery(document).ready(function(){
	
	
	var winYOff, w, h, op1, formula, mTop, op2, meTabPo ;
	var sideNavItem 	= $(".sideNavigation"),
		timelineTitle 	= $(".headerTagTitle"),
		
		
		
		/* Testing Varibles */
		testingTag 		= $(".mainNavLi"),
		testingTag2 	= $("body > .navbar-inverse"),
		testingTag3 	= $("#myTittlePage");
		
		
	/* Testing z-index functionality */
	for (var i = 0; i < testingTag.length; i++ ){
		testingTag[i].style.zIndex = i + 1;
	};
	
	
	
	/* 
		
		
		Testing variables IMPORTANT! ***************
		var allPosts = $(".timeline-posts").length;
		var allMonths = $(".monthHeader").length;
	*/

	     
	     
	     /* Reusable function that calculates the vertical position of the side navigation and 
	    // main title object. This function extracts the side navigation object from the DOM, 
	   // also references the outer height and width of window for futher calculations for 
	  // seting the results to the marging and opacity of the objects to execute parallax 
	 // type animations.
	*/ 
	function positionCalculatorAndSetter() {
		window.webkitRequestAnimationFrame(function(){
			w = window.outerWidth;
		 	h = window.outerHeight;
		 	op1 = 1 - (winYOff / 350);
		 	winYOff = window.pageYOffset;
		 	
		 	formula = /* Level 1 */ winYOff >= 0.0 &&  /* Level 2 */ winYOff < ( /* Level 3 */ h * ( /* Level 4 */( w / h ) * 2.2  )   );  /* <- Four Levels formula */
			
			if ( formula ){
		 	 	
		 	 	mTop = -( winYOff / 4 );
		 	 	op2 = (winYOff / 2000);
		 	 	meTabPo = -( winYOff / 4 ) / 0.8;
		 	 	
		 	 		timelineTitle[0].style.opacity = op1.toFixed(1);
			 	 	
			 	 	sideNavItem[0].style.opacity = op2.toFixed(1);
			 	 	sideNavItem[0].style.marginTop = mTop.toFixed(1) + "px";
			 	 	
			 	 	
			 	 	
			 	 	
			 	 	/*
	if (meTabPo < -284 && !(meTabPo >= 0) ) {
			 	
				 	//console.log("yes" + testingTag[0].offsetWidth );
				 	testingTag[4].style.right = meTabPo.toFixed(1) - -284 + "px";
				 	
				 	}else{
			 	
				 	testingTag[4].style.right = 0 + "px";
				 	
				 	};
	*/
			 	 	
			 	 	
			 	 	
	
			 	 	testingTag[0].style.right = meTabPo.toFixed(1) + "px";
				 	
			 	if (meTabPo < -50 && !(meTabPo >= 0.0 ) ) {
			 		
				 	testingTag[1].style.right = meTabPo.toFixed(1) - -50+ "px";
				 	
			 	}else{ 
			 	
			 		testingTag[1].style.right = 0 + "px";
			 		
			 	};
	
			 	//};
			 	if (meTabPo < -131 && !(meTabPo >= 0) ) {
			 		
				 	testingTag[2].style.right = meTabPo.toFixed(1) - -131 + "px";
				 	
			 	}else {
			 	
				 	testingTag[2].style.right = 0 + "px";
				 	
			 	}
			 	
			 	if (meTabPo < -201 && !(meTabPo >= 0) ) {
			 		
				 	testingTag[3].style.right = meTabPo.toFixed(1) - -201 + "px";
				 	
			 	}else {
			 	
				 	testingTag[3].style.right = 0 + "px";
				 	
			 	}
			 	
			 	if (meTabPo < -284 && !(meTabPo >= 0) ) {
			 	
				 	
				 	testingTag[4].style.right = meTabPo.toFixed(1) - -284 + "px";
				 	
			 	}else{
			 	
				 	testingTag[4].style.right = 0 + "px";
				 	testingTag2[0].style.top = meTabPo.toFixed(1) + "px";
			 	};
			 	
			 	
			 	if (meTabPo < -444 && !(meTabPo >= 0) ){
			 	
				 	testingTag2[0].style.top = meTabPo.toFixed(1) - -444+ "px";
				 	
			 	}else{
			 	
				 	testingTag2[0].style.top = 0 + "px";
				 	
			 	};
			 	
			 	
			 	/* var mynewtest = $(".navbar-brand").css("left"); */
			 	//testingTag3.style.top = meTabPo.toFixed(1) +"px";
			 	
			 	
			 	//console.log( testingTag3 ); // = 100 + "px";
			 	
			};
		});
	
	};
	
	// $ Window Events ...
	$(window).on("scroll", positionCalculatorAndSetter );
	$(window).resize( positionCalculatorAndSetter );
	
	
	$(function() {
	    
	    $("ul.nav a.sidePostLinks, ul.nav a.monthLinks, ul.nav a.goTop").bind("click", function(event){
	        
	        var $anchor = $(this);
	        
	        $("html, body").stop().animate({
	        
	            scrollTop: $($anchor.attr("href")).offset().top
	            
	        }, 500, "easeInOutExpo");
	        
	        event.preventDefault();
	        
	    });
	    
    });
    
    
});





