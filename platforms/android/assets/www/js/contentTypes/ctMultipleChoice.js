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


    function ctMultipleChoiceCtrl() {
        
        var vm = this;
        vm.data = {
            "languages": [

            {
                "lang": "de_DE",
                "fields": [{
                    "text": "<p>Wann wurde Rom gegründet ?</p>",
                    "answer": "753",
                    "choice": [
                        "357",
                        "17",
                        "753",
                        "166",
                        "1652"
                    ]
                }]
            },
            {
                "lang": "en_EN",
                "fields": [{
                    "text": "<p>When was Rome foundet?</p>",
                    "answer": "753",
                    "choice": [
                        "357",
                        "17",
                        "753",
                        "166",
                        "1652"
                    ]

                }]
            }
            ]

        };
        vm.answerGiven = "";
       
        vm.test = function () {
            if (vm.answerGiven == vm.data.languages[0].fields[0].answer) {
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

