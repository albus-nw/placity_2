/**
 * ContentType Multiplechoice, PW
 */
(function () {
    'use strict';

    angular
      .module('contentTypes')
      .directive('ctMultiplechoice', ctMultipleChoice);

    ctMultipleChoice.$inject = [];
    /* @ngInject */
    function ctMultipleChoice() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctMultipleChoice.html',
             
            controller: ctMultipleChoiceCtrl,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                content: '=',
                ctMultipleChoice: '=content'
            }
        };

        return directive;
    }

    ctMultipleChoiceCtrl.$inject = ['$sce'];
    function ctMultipleChoiceCtrl($sce) {
        var lang_id = '0';
        var vm = this;
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctMultipleChoiceText = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].question);
        vm.ctMultipleChoiceChoice = data_obj_parsed.languages[lang_id].fields[0].choice;
        vm.ctMultipleChoiceChoice.answer = data_obj_parsed.languages[lang_id].fields[0].answer;
      
        vm.answerGiven = "";
       
        vm.test = function () {
            if (vm.answerGiven == vm.ctMultipleChoiceChoice.answer) {
               // console.log("richtig");
                vm.answerGiven = "Richtig!";
                
                }
            else {
              //  console.log("falsch");
                vm.answerGiven = "Falsch!";
            }

    }

   
    }

})();

