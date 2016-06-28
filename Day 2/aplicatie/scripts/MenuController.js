/**
 * Created by user on 6/28/2016.
 */
hrApp.controller('MenuController', ['$scope', function($scope){
    $scope.demoActionList=[
        {
            label: "OtherScope",
            url= "views/childscope.html"
        }
    ];
}]);