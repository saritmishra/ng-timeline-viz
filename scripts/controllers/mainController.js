/* global angular */

"use strict";

var mainController = function ($scope) {
    var model = $scope.model = {};
    // var model.chartData;
    model.filterDatelimit = new Date("11/30/2014") ;

    var query = new google.visualization.Query(
        "https://docs.google.com/a/medallia.com/spreadsheets/d/1SE11mcFZZfG8BE7m-81xr21MWz_RiP7dog4soHnPRCM/edit?range=A1:D500");
    query.send(handleQueryResponse);

    function handleQueryResponse(response) {
      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      model.chartDataTable = response.getDataTable();
      var chart = new google.visualization.Timeline(document.getElementById('g-chart'));
      chart.draw(model.chartDataTable, { height: 500, width: 1200 });
    }
      //   ["Sprints", "Sprint: 10/27 - 11/7", new Date("10/27/2014"), new Date("11/7/2014")],
      //   ["Sprints", "Sprint: 11/10 - 11/21", new Date("11/10/2014"), new Date("11/21/2014")],
      //   ["Sprints", "Sprint: 11/24 - 12/5", new Date("11/24/2014"), new Date("12/5/2014")],
      //   ["Sprints", "Sprint: 12/8 - 12/19", new Date("12/8/2014"), new Date("12/19/2014")],
      //   ["Sprints", "Sprint: 12/22 - 1/2", new Date("12/22/2014"), new Date("1/2/2015")],
      //   ["Sprints", "Sprint: 1/5 - 1/16", new Date("1/5/2015"), new Date("1/16/2015")],
      //   ["Sprint-story", "BMW Response XML", new Date("10/27/2014"), new Date("11/7/2014")],
      //   ["Sprint-story", "BMW SOAP Integration", new Date("10/27/2014"), new Date("11/7/2014")],
      //   ["Sprint-story", "Toyota 2 decimals", new Date("10/27/2014"), new Date("11/7/2014")],
      //   ["Sprint-story", "eBay Normalized - new column", new Date("10/27/2014"), new Date("11/7/2014")],
      //   ["Deadlines", "eBay Normalized - new column", new Date("11/14/2014"), new Date("11/15/2014")],
      //   ["Deadlines", "Toyota 2 decimals", new Date("12/1/2014"), new Date("12/2/2014")],
      //   ["Deadlines", "KIA SSO app", new Date("12/8/2014"), new Date("12/9/2014")],
      //   ["Sprint-story", "KIA SSO app", new Date("11/10/2014"), new Date("11/21/2014")],
      //   ["Holidays", "Sarit PTO", new Date("11/27/2014"), new Date("11/27/2014")],
      //   ["Holidays", "MArge Holiday", new Date("11/24/2014"), new Date("11/25/2014")],
      //   ["Holidays", "HQ Holiday", new Date("11/27/2014"), new Date("11/29/2014")]

    // Creating a data-view to restrict the data that is shown
    // model.chartDataView = new google.visualization.DataView(model.chartData);
    // model.chartDataView.setRows(model.chartDataView.getFilteredRows([{column: 2, maxValue: model.filterDatelimit }]));

};

angular.module("timelineViz").controller("mainController", [ "$scope", mainController]);



