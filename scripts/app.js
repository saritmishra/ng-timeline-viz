/* global angular */
"use strict";
// Load Google Chart Visualization stuff
google.load('visualization', '1', {
  packages: ['timeline']
});

google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ["timelineViz"]);
});

angular
    .module("timelineViz", ["ngRoute"])
    .config( function ( $routeProvider ) {

        $routeProvider
            .when("/", {
                templateUrl: "index.html",
                controller: "mainController"
            })
            .otherwise({
                redirectTo: "/"
            });
    });


