define([
    'openmct'
], function (
    openmct
) {
    openmct.legacyRegistry.register("tutorials/bargraph", {
    "name": "Bar Graph",
    "description": "Provides the Bar Graph view of telemetry elements.",
    "extensions": {
        "views": [
            {
                "name": "Bar Graph",
                "key": "example.bargraph",
                "cssClass": "icon-autoflow-tabular",
                "templateUrl": "templates/bargraph.html",
                "needs": [ "telemetry" ],
                "delegation": true
            }
        ],
        "stylesheets": [
            {
                "stylesheetUrl": "css/bargraph.css"
            }
        ]
    }
    });
});