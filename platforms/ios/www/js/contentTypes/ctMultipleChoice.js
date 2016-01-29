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
            "text": "<p>Wann wurde Rom gegründet ?</p>",
            "answer": "753",
            "choice": {
                "choice1": "357",
                "choice2": "17",
                "choice3": "753",
                "choice4": "166",
                "choice5": "1652"
            }
        };
        vm.answerGiven = "";
       
        vm.test = function () {
            if (vm.answerGiven == vm.data.answer) {
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

