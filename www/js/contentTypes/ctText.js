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
            scope: { }
        };

        return directive;
    }


    function ctTextCtrl() {
        
        var vm = this;
        vm.data = {
            text: '<p>Hier beindet sich html text</p> <p>der vom <h1>Nutzer</h1> als contenttype text angelegt wurde</p>'
                    };

    }
})();

