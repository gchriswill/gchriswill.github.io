
$( document ).ready(function() {
  

	$( ".gchriswill-profileImage" ).fadeOut( 1,function() {
		$( ".gchriswill-profileImage" ).fadeIn( 1500 );
	});
				
	$( ".gchriswill-twitterHandle" ).fadeOut( 1,function() {
		$( ".gchriswill-twitterHandle" ).fadeIn( 3500 );
	});
	
	$( ".gchriswill-description" ).fadeOut( 1,function() {
		$( ".gchriswill-description" ).fadeIn( 5500 );
	});
	
});

$( "#clickTest" ).click(function() {
	
	$( ".gchriswill-container-1" ).slideUp( "slow", function() {
		
		$( ".gchriswill-container-1" ).slideDown( "slow");
	});
	
});