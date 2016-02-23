/*
Copyright (c) 2016, Philipp Weller

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* */

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
         if ($scope.$parent.vm.lang_id) { //abfrage der ausgewählten Sprache
            vm.lang_id = $scope.$parent.vm.lang_id;
      
        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctMultipleChoiceText = $sce.trustAsHtml(data_obj_parsed.languages[vm.lang_id].fields[0].text);
        vm.ctMultipleChoiceChoice = data_obj_parsed.languages[vm.lang_id].fields[0].choice;
        vm.ctMultipleChoiceChoice.answer = data_obj_parsed.languages[vm.lang_id].fields[0].answer;
        vm.ctMultipleChoiceChoice.cmessage = data_obj_parsed.languages[vm.lang_id].fields[0].cmessage;
        vm.ctMultipleChoiceChoice.wmessage = data_obj_parsed.languages[vm.lang_id].fields[0].wmessage;
      
        vm.answerGiven = "";
       
        vm.test = function () {
            /// <summary>
            /// Überprüft die angegebene Antwort, und gibt eine Richtig / Falsch Message aus
            /// </summary>
           
            if (vm.answerGiven == vm.ctMultipleChoiceChoice.answer) {
                
                    vm.answerGiven = vm.ctMultipleChoiceChoice.cmessage;
                
                
                }
            else {
                
                    vm.answerGiven = vm.ctMultipleChoiceChoice.wmessage
                }
                
            

    }

   
    }

})();

