var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/view1',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/View1.html'
      })
    .when ('/view2',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/View2.html'
      })
    .otherwise({ redirectTo: '/view1'});
});

myApp.controller('SimpleController', function($scope) {
  $scope.customers = [
    {name:'Joe', city:'Bo'},
    {name:'John', city:'Ar'},
    {name:'Doe', city:'En'}
  ];

  $scope.addCustomer = function() {
    $scope.customers.push(
      {
        name: $scope.newCustomer.name,
        city: $scope.newCustomer.city
      });
  }
});