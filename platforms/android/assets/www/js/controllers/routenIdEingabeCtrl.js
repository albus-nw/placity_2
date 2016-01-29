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
        var vm = this;
        vm.routenID = '';
        vm.submit = function () {
            console.log("routenID: " + vm.routenID);
            $location.path('/Routen/' + vm.routenID);
        };

        

        //activate();

        //function activate() { }
    }
})();
