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

    function ctFrageFreitextCtrl() {
        var vm = this;
        vm.answerGiven = "";
        vm.message = "";
        vm.data = {
            "languages": [
             {
                 "lang": "de_DE",
                 "fields": [{
                     "question": "Wann wurde Rom gegründet ?",
                     "answer": "753"
                 }]
             },
             {
                 "lang": "en_EN",
                 "fields": [{
                     "question": "When was Rome foundet ?",
                     "answer": "753"
                 }]
             }]
        };


        vm.teste = function () {
            if (vm.data.languages[0].fields[0].answer == vm.answerGiven) {
                console.log("Richtig!");
                vm.message = "Richtig";
            }
            else {
                console.log("Falsch!");
                vm.message = "Falsch";
            }
        }
    }

})();
