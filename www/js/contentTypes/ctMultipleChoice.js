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
            restrict: 'E',
            scope: { }
        };

        return directive;
    }

    ctMultipleChoiceCtrl.$inject = ['$scope'];
    function ctMultipleChoiceCtrl($scope) {
        
        var vm = this;
        
        vm.ctMultipleChoice = $scope.$parent.ctMultipleChoice;
        vm.answerGiven = "";
       
        vm.test = function () {
            if (vm.answerGiven == vm.ctMultipleChoice.answer) {
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

