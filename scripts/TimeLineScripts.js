/* 
 * TimeLine's JavaScript - Disinged and coded by @gchriswill
 * Code licensed under MIT, documentation under CC BY-SA 4.0
 *	
 */


jQuery(document).ready(function(){
	
	var sideNavItem = $(".sideNavigation"); 
	var timelineTitle = $(".headerTagTitle");
	var winYOff, w, h, op1, formula, mTop, op;
	
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
	 	op1 = 1 - (winYOff / 350);
	 	formula = /* Level 1 */ winYOff >= 0 && ( /* Level 2 */ winYOff < ( /* Level 3 */ h * ( /* Level 4 */( w / h ) * 2.2  )  )  );  /* <- Four Levels formula */
		
		window.requestAnimationFrame(function() {
			
			timelineTitle[0].style.opacity = op1.toFixed(2);

			if ( formula ){
		 	 	
		 	 	mTop = -( winYOff / 4 );
		 	 	op = (winYOff / 2000);
		 	 	
		 	 	sideNavItem[0].style.opacity = op.toFixed(2);
			 	sideNavItem[0].style.marginTop = mTop.toFixed(2) + "px";
			
			};
		});
	};
	
	// $ Window Events ...
	$(window).scroll( positionCalculatorAndSetter );
	$(window).resize( positionCalculatorAndSetter );
	
});