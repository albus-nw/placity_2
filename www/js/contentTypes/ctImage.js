
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

    ctImageCtrl.$inject = ['$sce','$scope'];
    /* @ngInject */
    function ctImageCtrl($sce,$scope) {
        var lang_id;
        var vm = this;
         if ($scope.$parent.vm.lang_id) {
            lang_id = $scope.$parent.vm.lang_id;
      
        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.src = data_obj_parsed.languages[lang_id].fields[0].src;
        vm.alt = data_obj_parsed.languages[lang_id].fields[0].alt;
       

    }
})();

