 // Filename: main.js

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






