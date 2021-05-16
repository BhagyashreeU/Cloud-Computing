var app = angular.module("app", []);

app.controller("MinCtrl",function ($scope,$http) {

    $scope.kcfunction1 = function (state) {

        $http.get("https://api.census.gov/data/2013/language?get=EST,LANLABEL,NAME&for=state:"+state+"&LAN=641,631,601,638,608,610,611,614,615,616,617,629").then(function (response) {
        drawChart1(response.data,'kcchart1')
        });
    };

    google.charts.load('current', {'packages': ['corechart'],'callback': drawChart1});
    google.charts.setOnLoadCallback(drawChart1);

    function drawChart1(var1,var2) {
        var data = google.visualization.arrayToDataTable([
            ['Language', 'Population speaking the language'],
            [var1[1][1], parseInt(var1[1][0])],
            [var1[2][1], parseInt(var1[2][0])],
            [var1[3][1], parseInt(var1[3][0])],
            [var1[4][1], parseInt(var1[4][0])],
            [var1[5][1], parseInt(var1[5][0])],
            [var1[6][1], parseInt(var1[6][0])],
            [var1[7][1], parseInt(var1[7][0])],
            [var1[8][1], parseInt(var1[8][0])],
            [var1[9][1], parseInt(var1[9][0])],
            [var1[10][1], parseInt(var1[10][0])],
            [var1[11][1], parseInt(var1[11][0])],
            [var1[12][1], parseInt(var1[12][0])]
        ]);
        var options = {
            title: 'Language',
            legend: {position: 'right'},
            width: 900,
            height: 600,
            pointSize:13,
            colors:['#15a0c8'],
            pointShape:{type:'triangle', rotation: 180},
            backgroundColor: 'transparent'
        };
        var chart = new google.visualization.AreaChart(document.getElementById(var2));
        chart.draw(data,options);
    }
});
