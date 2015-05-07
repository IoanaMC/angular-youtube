var myApp = angular.module('myApp',[]);

myApp.controller('SimpleController', ['$scope', function($scope) {
  $scope.customers = [
    {name:'Joe', city:'Bo'},
    {name:'John', city:'Ar'},
    {name:'Doe', city:'En'}
  ];
}]);