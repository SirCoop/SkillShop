define(['app', 'marionette', 'text!templates/content-layout.html', 'views/NestedRegionsLayout'], function (app, Marionette, contentLayoutTemplate, NestedRegionsLayout) {
	"use strict";
	return Marionette.LayoutView.extend({
	    //template: templates.contentLayout,
	    template: contentLayoutTemplate,
	    className: 'Content-Region',

		regions: {
			region1: '.contentLayout-one',
			region2: '.contentLayout-two'
			
		},

        initialize: function() {
            //app.globals.$topContainer = this.$el;
        },

        onShow: function(){
        	this.region1.show(new NestedRegionsLayout());
        	this.region2.show(new NestedRegionsLayout());

        }


	});
});