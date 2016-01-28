/**
 * created by pk on 24.01.2016
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

    function ctFrageFreitextCtrl() {
        var vm = this;
        vm.answerGiven="";
        vm.message="";
        vm.content = {
            frage: "Wann wurde Rom gegründet ?",
            answer: "753"
        };
        
        vm.teste = function () {
            if (vm.content.answer == vm.answerGiven) {
                console.log("Richtig!");
                vm.message="Richtig";
            }
            else {
                console.log("Falsch!");
                vm.message="Falsch";
            }
        }
    }

})();
