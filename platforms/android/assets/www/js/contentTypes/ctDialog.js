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

