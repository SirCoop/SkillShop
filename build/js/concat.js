//SkillShop app Module

define(
  ['marionette'], 
  function (Marionette) {
      "use strict";

      var app = new Marionette.Application();

      app.addRegions({
          contentRegion: "#content" //adds property to app called app.contentRegion which is assigned to DOM element with id="content"
      });

      app.globals = {};

      app.timeout = null;

      app.addInitializer(function () {
    
        //extending Date prototype to return double digit minutes 
        Date.prototype.getMinDoubleDigits = function () {
            var cMin = this.getMinutes();
            if (cMin < 10) 
                return ("0" + cMin.toString());
            else 
                return cMin.toString();
        }
    });

      return app;
  }
);;//Filename: boilerplate.js

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
});; // Filename: main.js

// Require.js allows shortcut alias configuration
require.config({
  paths: {
    //underscore micro-templating
    tpl: 'libs/tpl',
    //An AMD loader plugin for loading text resources
    /*  
        It is nice to build HTML using regular HTML tags, instead of building up DOM structures in script.
        However, there is no good way to embed HTML in a JavaScript file. The best that can be done is 
        using a string of HTML, but that can be hard to manage, particularly for multi-line HTML.
        RequireJS has a plugin, text.js, that can help with this issue. It will automatically be loaded
        if the text! prefix is used for a dependency. See the text.js README for more information.
    */
    text: 'libs/text',
    json3: 'libs/json3',
    jquery: 'libs/jquery-1.9.1',    
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    marionette: 'libs/backbone.marionette',
    bootstrap: 'libs/bootstrap',
    
    
  },

    // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {
        backbone: {            
            deps: ['underscore', 'jquery'], //loads deps before exporting 
            exports: 'Backbone' //attaches "Backbone" to the window object as a global variable instead of defining a module
        },
        underscore: {
            deps: ['text'],
            exports: '_'  
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
            
        }

    }

});


require(['app', 'underscore', 'backbone', 'marionette', 'routers/router', 'controllers/controller'],
    function (app, _, Backbone, Marionette, Router, Controller) { 
        "use strict";
        app.start();
        app.appRouter = new Router({
        controller: new Controller()
    });
    Backbone.history.start();
});






;// define(function (require) {
//     "use strict";
//     return {
//         contentLayout: _.template(require('text!templates/content-layout.html'))
       
//     };
// });