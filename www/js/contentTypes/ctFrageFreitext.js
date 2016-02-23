/*
Copyright (c) 2016, Paul Koch, Philipp Weller

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
    function ctFrageFreitextCtrl($sce, $scope) {

        var vm = this;
        vm.lang_id;
        if ($scope.$parent.vm.lang_id) {
            vm.lang_id = $scope.$parent.vm.lang_id;

        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctFrageFreitextquestion = $sce.trustAsHtml(data_obj_parsed.languages[vm.lang_id].fields[0].text);
        vm.ctFrageFreitextanswer = data_obj_parsed.languages[vm.lang_id].fields[0].answer;
        vm.ctFrageFreitextwmessage = data_obj_parsed.languages[vm.lang_id].fields[0].wmessage;
        vm.ctFrageFreitextcmessage = data_obj_parsed.languages[vm.lang_id].fields[0].cmessage;

        vm.teste = function () {
            /// <summary>
            /// Überprüft die angegebene Antwort, und setzt vm.mesage auf DE/EN Richtig/right, Falsch/Wrong
            /// Für weitere Sprachen müsste hier noch weitere else if definiert werden
            /// </summary>
            if (vm.ctFrageFreitextanswer == vm.answerGiven) {


                vm.message = vm.ctFrageFreitextcmessage;
            }

            else {

                vm.message = vm.ctFrageFreitextwmessage;

            }
        }
    }

})();
