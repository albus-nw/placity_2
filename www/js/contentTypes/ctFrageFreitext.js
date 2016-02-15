/**
 * created by pk, PW on 24.01.2016
 */

(function () {
    'use strict';

    angular
        .module('contentTypes')
        .directive('ctFragefreitext', ctFrageFreitext); 

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
    ctFrageFreitextCtrl.$inject = ['$sce','$scope'];
    function ctFrageFreitextCtrl($sce,$scope) {
        
        var vm = this;
        vm.lang_id;
        if ($scope.$parent.vm.lang_id) {
            vm.lang_id = $scope.$parent.vm.lang_id;

        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctFrageFreitextquestion = $sce.trustAsHtml(data_obj_parsed.languages[vm.lang_id].fields[0].text);
        vm.ctFrageFreitextanswer = data_obj_parsed.languages[vm.lang_id].fields[0].answer;
        

        vm.teste = function () {
            /// <summary>
            /// Überprüft die angegebene Antwort, und setzt vm.mesage auf DE/EN Richtig/right, Falsch/Wrong
            /// Für weitere Sprachen müsste hier noch weitere else if definiert werden
            /// </summary>
            if (vm.ctFrageFreitextanswer == vm.answerGiven) {
                            
                if (vm.lang_id == '0') {
                    vm.message = "Richtig";
                }
                else if (vm.lang_id == '1') {
                    vm.message = "right";
                }
            }
            else {
                if (vm.lang_id == '0') {
                    vm.message = "Falsch";
                }
                else if (vm.lang_id == '1') {
                    vm.message = "wrong";
                }
            }
        }
    }

})();
