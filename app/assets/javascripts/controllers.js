//= require angular-route


var myApp = angular.module('myApp',[]);



myApp.controller('MyController', function MyController($scope,$http){

  $http({
    method : "GET",
    url : "https://api.github.com/orgs/redpanthers"
  }).then(function mySucces(response) {
      $scope.style = response.data;
    }, function myError(response) {
      $scope.style = response.statusText;
  });

  
  
});



/*
app.config(
    function($routeProvider) {
    $routeProvider
    .when('/',{
      templateUrl: 'assets/partials/dashboard.html'
      
    })
    .when('/tasks',{
      templateUrl: 'assets/partials/tasks.html'
      
    })
    .otherwise({redirectTo:'/'});
  });   



*/
