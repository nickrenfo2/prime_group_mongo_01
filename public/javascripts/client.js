/**
 * Created by Nick on 10/7/15.
 */
var app = angular.module('myApp',[]);
app.controller('MainController',['$scope','$http', function ($scope,$http) {
    $scope.itworks='Hello World';
    $scope.assignments=[];
    $scope.item={};

    function getAssigns() {
        console.log('updating assignment list');
        $http.get('/assignments/get').then(function (response) {
            console.log(response.data);
            $scope.assignments = response.data;
        });
    }

    $scope.grabInput = function(){
        var jString={};
        jString.name = $scope.fname;
        jString.assignNum=$scope.fassignNum;
        jString.score=$scope.fscore;
        jString.completed=$scope.fcompleted;

        $scope.fname = '';
        $scope.fassignNum='';
        $scope.fscore='';
        $scope.fcompleted='';


        var txData=JSON.stringify(jString);
        console.log(txData);
        $http.post('/assignments/add',txData);

        getAssigns();
    };

    $scope.delete = function(ind){
        var assignNum = $scope.assignments[ind].assignNum;
        console.log('removing:',assignNum);
        $http.delete('/assignments/delete/'+assignNum);
    };

    getAssigns();
    setInterval(getAssigns,5000);
}]);