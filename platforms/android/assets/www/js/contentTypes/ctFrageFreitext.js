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
            scope: {
                content: '=',
                ctFrageFreitext: '=content'
            }
        };

        return directive;

    }
    ctFrageFreitextCtrl.$inject = ['$sce'];
    function ctFrageFreitextCtrl($sce) {
        var lang_id = '0';
        var vm = this;
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctFrageFreitextquestion = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].question);
        vm.ctFrageFreitextanswer = data_obj_parsed.languages[lang_id].fields[0].answer;
        

        vm.teste = function () {
            if (vm.ctFrageFreitextanswer == vm.answerGiven) {
                //  console.log("Richtig!");
                console.log(vm.answerGiven +"richtig");
                vm.message = "Richtig";
            }
            else {
               // console.log("Falsch!");
                vm.message = "Falsch";
                console.log(vm.answerGiven + "falsch");
            }
        }
    }

})();
