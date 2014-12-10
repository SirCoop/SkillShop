define(['app', 'marionette', 'text!templates/nestedRegions-layout.html'], function (app, Marionette, nestedRegionsTemplate) {
	"use strict";
	return Marionette.LayoutView.extend({
	    //template: templates.contentLayout,
	    template: nestedRegionsTemplate,
	    className: 'regionOne-layout',

		regions: {
			first: '.nestedRegion-one',
			second: '.nestedRegion-second'
			
			
		},

        initialize: function() {
            //app.globals.$topContainer = this.$el;
        },




	});
});