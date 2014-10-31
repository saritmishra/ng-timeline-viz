'use strict';

angular.module("timelineViz").directive("gChart", function() {
  return {
    restrict: 'A',

    link: function($scope, elm, attrs) {
        console.log("inside directive");
        console.log($scope.model.chartData);
      // var chart = new google.visualization.Timeline(elm[0]);  document.getElementById('chartdiv')
      var chart = new google.visualization.Timeline(document.getElementById('chartdiv'));
      chart.draw($scope.model.chartData);
    }

  };
});