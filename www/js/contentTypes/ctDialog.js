/**
 * ContentType Dialog, PW
 */
(function () {
    'use strict';

    angular
      .module('contentTypes')
      .directive('ctDialog', ctDialog);

    ctDialog.$inject = [];
    /* @ngInject */
    function ctDialog() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctDialog.html',
            controller: ctDialogCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            scope: { }
        };

        return directive;
    }


    function ctDialogCtrl() {
        
        var vm = this;
        vm.data = {
            "contenttype": "dialog",
            "avatar1": "http://143.93.91.92/philipp/avatar1.jpg",
            "avatar2": "http://143.93.91.92/philipp/avatar2.jpg",
            "texte": {
                "text1": "<p>Hi du</p>",
                "text2": "<p>Alles klar soweit?</p>",
                "text3": "<p>Grüße dich</p>",
                "text4": "<p>Alles bestens, kann nicht klagen</p>"
            }

        };

    }
})();

