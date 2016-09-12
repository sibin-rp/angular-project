//= require angular-route


var myApp = angular.module('myApp',[]);



myApp.controller('MyController1', function MyController($scope,$http){

  $http({
    method : "GET",
    url : "https://api.github.com/orgs/redpanthers/members"
  }).then(function mySucces(response) {
      $scope.users = response.data;
    }, function myError(response) {
      $scope.users = response.statusText;
  });

  
  
});


myApp.controller('MyController2', function MyController($scope,$http){

  $http({
    method : "GET",
    url : "https://api.github.com/orgs/redpanthers/repos"
  }).then(function mySucces(response) {
      $scope.repos = response.data;
    }, function myError(response) {
      $scope.repos = response.statusText;
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
