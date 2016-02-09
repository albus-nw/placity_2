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
            bindToController: true,
            templateUrl: 'js/contentTypes/ctText.html',
            controller: ctTextCtrl,
            controllerAs: 'vm',
            restrict: 'E',

            scope: {  }
        };

        return directive;
    }

    ctTextCtrl.$inject = ['$scope'];
    function ctTextCtrl($scope) {
        var vm=this;
        vm.ctText = $scope.$parent.ctText;

    }
})();

