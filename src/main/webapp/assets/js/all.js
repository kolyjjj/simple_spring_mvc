var simpleModule = angular.module("simple", []);

simpleModule.controller('tooltipCtrl', ['$scope', function($scope){
    $scope.greeting="Welcome to bootstrap tooltip";
}]);

function tooltipCtrl($scope){

}