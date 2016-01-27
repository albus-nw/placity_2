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
            controller: ctTextCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            scope: { }
        };

        return directive;
    }


    function ctTextCtrl() {
        
        var vm = this;
        vm.data = {
            "text": "Hier befindet sich eine <h1>Html Frage:</h1><p>Wählen Sie:</p>",
            "answer": "2",
            "choice": {
                "choice1": "1",
                "choice2": "2",
                "choice3": "3",
                "choice4": "4",
                "choice5": "5"
            }
        };
        vm.answerGiven = "";
       
        vm.test = function () {
            console.log(vm.answerGiven);
    }

   
    }

})();

