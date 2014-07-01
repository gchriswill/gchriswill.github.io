/* 
 * TimeLine's JavaScript - Disinged and coded by @gchriswill
 * Code licensed under MIT, documentation under CC BY-SA 4.0
 *	
 */


jQuery(document).ready(function(){
	
	var sideNavItem = $(".sideNavigation"); 
	var timelineTitle = $(".headerTagTitle");
	var winYOff, w, h;
	
	/* Testing variables and assets ***************
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
		
		winYOff = window.pageYOffset;
		w = window.outerWidth;
	 	h = window.outerHeight;
	 	
		timelineTitle[0].style.opacity = 1 - (winYOff / 350);
		
		if ( /* Level 1 */ winYOff >= 0 && ( /* Level 2 */ winYOff < ( /* Level 3 */ h * ( /* Level 4 */( w / h ) * 2.2  )  )  )  ) /* <- Four Levels formula */ {
	 	 	
	 	 	sideNavItem[0].style.opacity = (winYOff / 2000);
		 	sideNavItem[0].style.marginTop = -( winYOff / 4 )+ "px";
		
		};
		
	};
	
	// $ Window Events ...
	$(window).scroll( positionCalculatorAndSetter );
	$(window).resize( positionCalculatorAndSetter );
	
});