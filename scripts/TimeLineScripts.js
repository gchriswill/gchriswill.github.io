/* 
 * Disinged and coded by @gchriswill
 * Code licensed under MIT, documentation under CC BY-SA 4.0
 *	
 */


(function(){
	
	var sideNavItem = $(".sideNavigation"); 
	
	var timelineTitle = $(".headerTagTitle");
	
	$(window).scroll( function(){
	
		timelineTitle[0].style.opacity = 1 - (window.pageYOffset / 350);
	 	
	 	sideNavItem[0].style.opacity = (window.pageYOffset / 2000);
		
		sideNavItem[0].style.marginTop = -( ( window.pageYOffset /  7.2 ) - 100) + "px";
		
	});
	
}).call(this);