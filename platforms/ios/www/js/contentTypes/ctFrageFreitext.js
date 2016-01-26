/**
 * created by pk on 24.01.2016
 */

(function () {
    'use strict';

    angular
        .module('contentTypes')
        .directive('ctFrageFreitext', ctFrageFreitext);

    ctFrageFreitext.$inject = [];

    /* @ngInject */
    function ctFrageFreitext() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctFrageFreitext.html',
            controller: ctFrageFreitextCtrl,
            controllerAs: 'vm',
            restrict: 'E'
        };
        return directive;

    }

    function ctFrageFreitextCtrl() {
        var vm = this;

        vm.content = {
            frage: "Alles fresh?"
        };

    }

})();
