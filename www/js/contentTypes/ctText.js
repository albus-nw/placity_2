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
 * ContentType Text, PW
 */
(function () {
    'use strict';

    angular
      .module('contentTypes')
      .directive('ctText', ctText);

    ctText.$inject = [];
    /* @ngInject */
    function ctText() {
        var directive = {
            restrict: 'EA',
            scope: {
                content: '=',
                ctText: '=content'
            },
            controller: ctTextCtrl,
            controllerAs: 'vm',
            bindToController: true,
            templateUrl: 'js/contentTypes/ctText.html'
           
        };
        return directive;
    }

    ctTextCtrl.$inject = ['$sce', 'localUserService','$scope'];
    function ctTextCtrl($sce, localUserService,$scope) {
        var lang_id;
        var vm = this;
        if ($scope.$parent.vm.lang_id) {
            lang_id = $scope.$parent.vm.lang_id;

        }
       // localUserService.getData("lang").then(function (result) {
        //    lang_id = result;
            activate();
       // });
        var data_obj_parsed;

        function activate() {
        data_obj_parsed = angular.fromJson(vm.content.data_obj);
       vm.pText = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].text);
        }


     
    }
})();

