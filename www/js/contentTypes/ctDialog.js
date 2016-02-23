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
*/

/**
 * ContentType Dialog, PW
 */
(function () {
    'use strict';

    angular
      .module('contentTypes')
      .directive('ctDialog', ctDialog);

    ctDialog.$inject = [];
    /* @ngInject */
    function ctDialog() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctDialog.html',
            controller: ctDialogCtrl,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                content: '=',
                ctDialog: '=content'
            }
        };

        return directive;
    }

    ctDialogCtrl.$inject = ['$sce','$scope'];
    function ctDialogCtrl($sce,$scope) {
        
        var lang_id;
        var vm = this;
         if ($scope.$parent.vm.lang_id) {
            lang_id = $scope.$parent.vm.lang_id;
      
        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.avatar1 = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].avatar1);
        vm.avatar2 = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].avatar2);
        vm.ctdialog = data_obj_parsed.languages[lang_id].fields[0].text;




    }
})();

