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
            //templateUrl: 'js/contentTypes/ctText.html',
            template: '<p style="color: #cf1fb6"> <em>{{vm.content.data_obj}}</em> ODER:   ------{{vm.ctText}}--------------------</p>',
        };
        return directive;
    }

    ctTextCtrl.$inject = [];
    function ctTextCtrl() {
        var vm=this; 
        //vm.ctText = $scope.$parent.ctText;
        vm.ctText = vm.content;
        console.log(vm.ctText);
        console.log(vm.content);
     
    }
})();

