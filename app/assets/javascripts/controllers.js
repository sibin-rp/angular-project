//= require angular-route

var myApp = angular.module('myApp',[]);



myApp.controller('MyController', function MyController($scope,$http){

  $http.get("/assets/data.json").success(function(data){
    $scope.style = data;
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