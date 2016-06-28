/**
 * Created by user on 6/28/2016.
 */
angular.module('hrApp').controller('DescriptionController', ['$scope', function($scope){
   $scope.title='Two Way Binding Demo';
    $scope.childtemplate='template/childscope.html';
    $scope.resetFirstVariabile=function(){
        $scope.firstVariable=undefined;
    };
    $scope.setFirstVariable=function(val){
        $scope.firstVariable=val;
    };

}]);