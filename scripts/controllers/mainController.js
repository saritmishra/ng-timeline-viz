/* global angular */

"use strict";

var mainController = function ($scope) {
    var model = $scope.model = {};
    // var model.chartData;

    var init = function(){
      model.chartData = new google.visualization.DataTable();
      model.chartData.addColumn({ type: 'string', id: 'Type' });
      model.chartData.addColumn({ type: 'string', id: 'Name' });
      model.chartData.addColumn({ type: 'date', id: 'Start' });
      model.chartData.addColumn({ type: 'date', id: 'End' });

    // [ 'President',          'George Washington', new Date(1789, 3, 29), new Date(1797, 2, 3)],
      model.chartData.addRows([
        ["Sprints", "Sprint: 10/27 - 11/7", new Date("10/27/2014"), new Date("11/7/2014")],
        ["Sprints", "Sprint: 11/10 - 11/21", new Date("11/10/2014"), new Date("11/21/2014")],
        ["Sprints", "Sprint: 11/24 - 12/5", new Date("11/24/2014"), new Date("12/5/2014")],
        ["Sprints", "Sprint: 12/8 - 12/19", new Date("12/8/2014"), new Date("12/19/2014")],
        ["Sprints", "Sprint: 12/22 - 1/2", new Date("12/22/2014"), new Date("1/2/2015")],
        ["Sprints", "Sprint: 1/5 - 1/16", new Date("1/5/2015"), new Date("1/16/2015")],
        ["Sprint-story", "BMW Response XML", new Date("10/27/2014"), new Date("11/7/2014")],
        ["Sprint-story", "BMW SOAP Integration", new Date("10/27/2014"), new Date("11/7/2014")],
        ["Sprint-story", "Toyota 2 decimals", new Date("10/27/2014"), new Date("11/7/2014")],
        ["Sprint-story", "eBay Normalized - new column", new Date("10/27/2014"), new Date("11/7/2014")],
        ["Deadlines", "eBay Normalized - new column", new Date("11/14/2014"), new Date("11/15/2014")],
        ["Deadlines", "Toyota 2 decimals", new Date("12/1/2014"), new Date("12/2/2014")],
        ["Deadlines", "KIA SSO app", new Date("12/8/2014"), new Date("12/9/2014")],
        ["Sprint-story", "KIA SSO app", new Date("11/10/2014"), new Date("11/21/2014")],
        ["Holidays", "Sarit PTO", new Date("11/27/2014"), new Date("11/27/2014")],

        ["Holidays", "MArge Holiday", new Date("11/24/2014"), new Date("11/25/2014")],
        ["Holidays", "HQ Holiday", new Date("11/27/2014"), new Date("11/29/2014")]

        ]);

    // var chart = new google.visualization.Timeline(document.getElementById('chartdiv'));
    //   chart.draw($scope.model.chartData);
        // $http.get("data/data.json").success(function(jsonData){
        //         model.companyList = jsonData;
        //         // Add chart URLs to each company in the list of companies
        //         model.rebuildCharts();
        //  });
    }; init();

};

angular.module("timelineViz").controller("mainController", [ "$scope", mainController]);



