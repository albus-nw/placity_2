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
            restrict: 'E',
            scope: { }
        };

        return directive;
    }

    ctDialogCtrl.$inject = ['$scope'];
    function ctDialogCtrl($scope) {
        
        var vm = this;
        vm.ctDialog = $scope.$parent.ctDialog;
        console.log(vm.ctDialog);

    }
})();

