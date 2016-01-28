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
            text: "Hier befindet<p> sich</p> <h1>Html</h1>-text<p> der</p> vom Nutzer als contenttype text angelegt wurde"
                    };

    }
})();

