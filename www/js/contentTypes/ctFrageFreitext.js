/**
 * created by pk, PW on 24.01.2016
 */

(function () {
    'use strict';

    angular
        .module('contentTypes')
        .directive('ctFragefreitext', ctFrageFreitext); //wichtig nicht 'ctFrageFreitext'

    ctFrageFreitext.$inject = [];

    /* @ngInject */
    function ctFrageFreitext() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctFrageFreitext.html',
            controller: ctFrageFreitextCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            scope : { }
        };

        return directive;

    }
    ctFrageFreitextCtrl.$inject = ['$scope'];
    function ctFrageFreitextCtrl($scope) {
        var vm = this;
        vm.ctFrageFreitext = $scope.$parent.ctFrageFreitext;


        vm.teste = function () {
            if (vm.ctFrageFreitext.answer == vm.answerGiven) {
              //  console.log("Richtig!");
                vm.message = "Richtig";
            }
            else {
               // console.log("Falsch!");
                vm.message = "Falsch";
            }
        }
    }

})();
