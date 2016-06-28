/**
 * Created by user on 6/28/2016.
 */
angular.module('hrApp').controller('DescriptionController', ['$scope', function($scope){
$scope.title='Two Way Building Demo';
    $scope.childtemplate='templates/childscope.html';
    $scope.resetFirstVariable=function()
    {
       $scope.firstVariable=undefined; 
    };
    $scope.setFirstVariable=function(val){
        $scope.firstVariable=val;
    };
}]);