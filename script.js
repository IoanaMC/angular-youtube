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

myApp.factory('simpleFactory', function(){
  var customers = [
    {name:'Joe', city:'Bo'},
    {name:'John', city:'Ar'},
    {name:'Doe', city:'En'}
  ];

  var factory = {};
  factory.getCustomers = function() {
    return customers;
  };

  factory.postCustomer = function(customer) {

  };

  return factory;
});

myApp.controller('SimpleController', function($scope, simpleFactory) {
  $scope.customers = [];

  init();

  function init() {
    $scope.customers = simpleFactory.getCustomers();
  }

  $scope.addCustomer = function() {
    $scope.customers.push(
      {
        name: $scope.newCustomer.name,
        city: $scope.newCustomer.city
      });
  }
});