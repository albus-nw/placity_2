
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
            restrict: 'E',
            scope: {
                content: '=',
                ctImage:'=content'
            }
        };

        return directive;
    }

    ctImageCtrl.$inject = ['$sce'];
    /* @ngInject */
    function ctImageCtrl($sce) {
        var vm = this;
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.src = data_obj_parsed.src;
        vm.alt = data_obj_parsed.alt;
       

    }
})();

