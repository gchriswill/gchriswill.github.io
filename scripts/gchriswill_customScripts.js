
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