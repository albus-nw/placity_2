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

    ctTextCtrl.$inject = ['$sce', 'localUserService'];
    function ctTextCtrl($sce, localUserService) {
        var vm = this;
        var lang_id = '0';
        localUserService.getData("lang").then(function (result) { lang_id = result; });
        var data_obj_parsed;


        data_obj_parsed = JSON.parse(vm.content.data_obj);
       vm.pText = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].text);

     
    }
})();

