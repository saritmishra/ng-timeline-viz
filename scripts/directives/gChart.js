'use strict';

angular.module("timelineViz").directive("gChart", function() {
  return {
    restrict: 'EA',

    link: function($scope, elm, attrs) {
      var chart = new google.visualization.Timeline(elm[0]);
      // var chart = new google.visualization.Timeline(document.getElementById('chartdiv'));
      // chart.draw($scope.model.chartDataView, { height: 500, width: 1200 });
      chart.draw($scope.model.chartDataTable, { height: 500, width: 1200 });
    }

  };
});