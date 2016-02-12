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
        
        var vm = this;
        vm.lang_id;
         if ($scope.$parent.vm.lang_id) {
            vm.lang_id = $scope.$parent.vm.lang_id;
      
        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctMultipleChoiceText = $sce.trustAsHtml(data_obj_parsed.languages[vm.lang_id].fields[0].text);
       //  vm.ctMultipleChoiceText = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].text);
        vm.ctMultipleChoiceChoice = data_obj_parsed.languages[vm.lang_id].fields[0].choice;
        vm.ctMultipleChoiceChoice.answer = data_obj_parsed.languages[vm.lang_id].fields[0].answer;
      
        vm.answerGiven = "";
       
        vm.test = function () {
            console.log(vm.lang_id);
            if (vm.answerGiven == vm.ctMultipleChoiceChoice.answer) {
                if (vm.lang_id == '0') {
                    vm.answerGiven = "Richtig";
                }
                else if (vm.lang_id == '1') {
                    vm.answerGiven = "right";
                }
                
                }
            else {
                if (vm.lang_id == '0') {
                    vm.answerGiven = "Falsch";
                }
                else if (vm.lang_id == '1') {
                    vm.answerGiven = "wrong";
                }
            }

    }

   
    }

})();

