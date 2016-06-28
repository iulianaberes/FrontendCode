/**
 * Created by user on 6/28/2016.
 */
angular.module('hrApp').controller('MainController',['$rootScope','$scope' function($rootScope, $scope){
    $scope.someValue = "someValue";
    console.log($scope.someValue);
}]);