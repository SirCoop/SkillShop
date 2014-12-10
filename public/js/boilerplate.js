//Filename: boilerplate.js

/*
	define() - defines modules, named or unnamed
	
	define(
		module_id, //optional
		[dependencies], //optional
		function(dep1,...n){
			
			return //value that defines module export

		}
	);

	require() - loads deps dynamically within a module or load code in top-level file

	require(['mod1', 'mod2'], 
		function(mod1, mod2) {
			//code
		}
	)

*/

// These are path alias that we configured in our bootstrap
define(
	['jquery', 'underscore', 'backbone'],
 	function($, _, Backbone){
	// Above we have passed in jQuery, Underscore and Backbone
  	// They will not be accessible in the global scope
  	return {};
  	// What we return here will be used by other modules
});