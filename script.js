var myApp = angular.module('myApp',[]);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/View1.html'
      })
    .when ('/partial2',
      {
        controller: 'SimpleController',
        templateUrl: 'partials/View2.html'
      })
    .otherwise({ redirectTo: '/'});
});

myApp.controller('SimpleController', ['$scope', function($scope) {
  $scope.customers = [
    {name:'Joe', city:'Bo'},
    {name:'John', city:'Ar'},
    {name:'Doe', city:'En'}
  ];

  $scope.addCustomer
}]);