define(['marionette'], function (Marionette) {
    'use strict';

    return Marionette.AppRouter.extend({
        appRoutes: {
            '': 'showDefault',
            // 'transcript': 'showDefault',
            // 'transcript/': 'showDefault',
            // 'folder/:folder': 'showTranscriptsByFolder',
            // 'transcript/:transcriptID' : 'showTranscriptById',
            // 'transcript/:transcriptID/page/:page': 'showTranscriptByIdThenPage',
            // 'transcript/:transcriptID/page/:page/line/:line': 'showTranscriptByIdThenPageLine'
        }
    });
});