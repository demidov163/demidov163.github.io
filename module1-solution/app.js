(function () {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchController);

    LunchController.$injector=['scope'];

    function LunchController($scope){
        $scope.makeLunch = function () {
            var inputlist = $scope.lunch;
            if (inputlist == null) {
                $scope.alertmsg = "Please enter data first"
            } else {
                $scope.alertmsg = inputlist.split(',').length <= 3 ? "Enjoy! " : "Too much";
            }
        }
    }
})();