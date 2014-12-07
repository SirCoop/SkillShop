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
);