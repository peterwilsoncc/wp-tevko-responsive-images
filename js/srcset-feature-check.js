(function( window ){
	var document = window.document;
	var config = window._wpResponsiveImagesSettings;
	var image  = new window.Image();

	function browserSupportsResponsiveImages() {
		// Adapted from picturefill 2.3.1
		if ( 'sizes' in image && 'currentSrc' in image && 'srcset' in image ) {
			return true;
		}

		return false;
	}

	function enqueueScript( src ) {
		var script = document.createElement( 'script' );
		var firstScript = document.getElementsByTagName( 'script' )[0];

		script.async = script.src = src;
		firstScript.parentNode.insertBefore( script, firstScript );
	}

	if ( false === browserSupportsResponsiveImages() ) {
		enqueueScript( config.picturefillSource );
	}
})( window );