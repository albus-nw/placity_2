
(function () {
    'use strict';

    angular
      .module('contentTypes')
      .directive('ctImage', ctImage);

    ctImage.$inject = [];
    /* @ngInject */
    function ctImage() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctImage.html',
            controller: ctImageCtrl,
            controllerAs: 'vm',
            restrict: 'E'
        };

        return directive;
    }

    ctImageCtrl.$inject = ['$scope'];
    /* @ngInject */
    function ctImageCtrl($scope) {
        
        //var vm = this;
        $scope.data = {
            src: 'http://143.93.91.92/philipp/avatar1.jpg',
            alt: '...'
        };

    }
})();

