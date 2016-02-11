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

    ctDialogCtrl.$inject = ['$sce'];
    function ctDialogCtrl($sce) {
        
        var vm = this;
        var lang_id='0';
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.avatar1 = $sce.trustAsHtml(data_obj_parsed.avatar1);
        vm.avatar2 = $sce.trustAsHtml(data_obj_parsed.avatar2);
        vm.ctdialog = data_obj_parsed.languages[lang_id].fields[0].text;



       // vm.ctDialog = $scope.$parent.ctDialog;
        //console.log(vm.ctDialog);

    }
})();

