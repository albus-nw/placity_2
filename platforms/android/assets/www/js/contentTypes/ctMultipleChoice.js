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

    ctMultipleChoiceCtrl.$inject = ['$sce','$scope'];
    function ctMultipleChoiceCtrl($sce,$scope) {
        var lang_id;
        var vm = this;
         if ($scope.$parent.vm.lang_id) {
            lang_id = $scope.$parent.vm.lang_id;
      
        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctMultipleChoiceText = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].text);
       //  vm.ctMultipleChoiceText = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].text);
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

