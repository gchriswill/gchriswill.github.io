
$( document ).ready(function() {
  	
	$( ".gchriswill-profileImage" ).fadeOut( 1,function() {
		$( ".gchriswill-profileImage" ).fadeIn( 1000 );
	});
				
	$( ".gchriswill-twitterHandle" ).fadeOut( 1,function() {
		$( ".gchriswill-twitterHandle" ).fadeIn( 2000 );
	});
	
	$( ".gchriswill-description" ).fadeOut( 1,function() {
		$( ".gchriswill-description" ).fadeIn( 3000 );
	});
	
});

$( "#clickTest" ).click(function() {
	
	$( ".gchriswill-container-1" ).slideUp( "slow", function() {
		
		$( ".gchriswill-container-1" ).slideDown( "slow");
	});
	
});

$(".correo").attr("href", "mailto:" + "gchriswill" + "@" + "icloud" + "." + "com");