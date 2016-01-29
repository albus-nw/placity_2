/**
 * created by pk
 */

(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenIdEingabeCtrl', routenIdEingabeCtrl);

    routenIdEingabeCtrl.$inject = ['$scope', '$location'];

    function routenIdEingabeCtrl($scope, $location) {
        $scope.routenID = '';
        $scope.submit = function () {
            console.log("routenID: " + $scope.routenID);
            $location.path('/Routen/' + $scope.routenID);
        };

        

        //activate();

        //function activate() { }
    }
})();
