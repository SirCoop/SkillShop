define(['app', 'marionette', 'views/ContentLayout', 'views/NestedRegionsLayout'],
    function (app, Marionette, ContentLayout, NestedRegionsLayout) {
        return Marionette.Controller.extend({
            
            initialize: function (options) {

                // app.contentRegion.content = new ContentLayout()
                // app.contentRegion.show(app.contentRegion.content);

                // app.contentRegion.content.transcriptControls = new TranscriptControlsView({});  //create a view
                // app.contentRegion.currentView.controlsRegion.show(app.contentRegion.content.transcriptControls); //show view in designated region

                // app.vent.on('viewchange', this.triggerFunction, this);

                app.contentRegion.content = new ContentLayout();
                app.contentRegion.show(app.contentRegion.content);

                /* **********  nesting views within layout regions is done within the layout view itself, not this controller ***** */



            },
            showDefault: function () {
            
               
            },


        });
    });









//after showDefault


            // triggerFunction: function () {
            //     var args = Array.prototype.slice.apply(arguments);

            //     methodName = args[0];
            //     if (_.isFunction(this[methodName])) {
            //         args.shift();
            //         return this[methodName].apply(this, args);
            //     }
            // },

            // appChange: function (dashboard) {
            //     //this.adjustTabs(dashboard)
            //     app.vent.trigger("search:bar:display", "none");
            //     $('#printTranscriptBtn').hide();
            //     app.contentRegion.currentView.$el.children('.view').removeClass('split-screen');
            //     app.contentRegion.currentView.$el.children('.view').hide();
            // },

            // showTranscriptById: function (transcriptID, navmenu) {
            //     var param = { transcriptID: transcriptID, navmenu: navmenu ? navmenu : "nav:issuesdesignations" };

            //     this.showTranscriptLayout(param);
            // },        

            // showTranscriptLayout: function (param) {
            //     this.appChange();
            //     // Show the transcriptRegion
            //     app.contentRegion.currentView.$el.children(app.contentRegion.currentView.regions.transcriptRegion).show();
            //     // Call the transcript search on the control bar
            //     app.vent.trigger("search:bar:display", "transcript-search");
            //     // Show the printer button on the control bar
            //     $('#printTranscriptBtn').show();

            //     app.vent.trigger("transcript:loaded");

            //     var transcriptRegion = app.contentRegion.currentView.transcriptRegion;

            //     app.globals.curTranscriptID = param.transcriptID;

            //     // Prepare page if not on Transcript view
            //     if (this.transcriptParam.transcriptID != param.transcriptID ||
            //          typeof this.transcriptParam.transcriptID == 'undefined') {
            //         enableProgressBar("Loading Transcript");

            //         app.contentRegion.content.transcriptLayout = new TranscriptLayout(param);
            //         transcriptRegion.show(app.contentRegion.content.transcriptLayout);
            //     }
              

            //     // Scroll to the right place on the transcript according
            //     // the values on param
            //     app.contentRegion.content.transcriptLayout.transcriptDisplay(param);            

            //     // Save the current transcript id to listen for changes
            //     this.transcriptParam = param;
            // },

            // showIssuesDesignations: function (transcriptID, issueID) {
            //     this.appChange();
            //     //All Cases or for a specified transcript
            //     if (transcriptID == null) {
            //         var param = { url: app.baseUrl() + 'issues/' + issueID + '/designations' };
            //         app.vent.trigger("hideIssueBackBtn", false);
            //     } else {
            //         var param = { url: app.baseUrl() + 'transcripts/' + transcriptID + '/issues/' + issueID + '/designations' };
            //         app.vent.trigger("hideIssueBackBtn", true);
            //     }
            //     app.contentRegion.content.designationsView = new DesignationsView(param);
            //     app.contentRegion.content.designationsView.render();
            //     app.contentRegion.currentView.listResultRegion.show(app.contentRegion.content.designationsView);
            //     app.contentRegion.currentView.$el.children(app.contentRegion.currentView.regions.listResultRegion).show();
            //     app.vent.trigger('gridviewer:display');
            // },
            // showBriefcaseView: function (strParameter) {
            //     this.appChange();
            //     app.contentRegion.currentView.$el.children(app.contentRegion.currentView.regions.briefcaseRegion).show();
            //     var briefCaseRegion = app.contentRegion.content.briefcaseRegion;

            //     if (strParameter === 'base' || strParameter === 'thumbnails') {
            //         if (briefCaseRegion.briefcaseViewGrid == undefined) {
            //             enableProgressBar("Loading Your Briefcase");
            //             app.vent.trigger("search:bar:display", "briefcase-search");
            //             briefCaseRegion.briefcaseViewGrid = new BriefcaseViewGrid();
            //             briefCaseRegion.show(briefCaseRegion.briefcaseViewGrid);

            //         }
            //         else if (briefCaseRegion.briefcaseViewGrid !== undefined) {
            //             app.vent.trigger("search:bar:display", "briefcase-search");
            //             briefCaseRegion.briefcaseViewGrid.loadBindings();
            //         }


            //     };

            // }