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
            text: "<p>Hier befindet sich</p> <h1>Html-text</h1><h2> der vom Nutzer</h2><h3>als contenttype text angelegt wurde</h3>"
                    };

    }
})();

