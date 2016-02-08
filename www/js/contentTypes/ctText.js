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
            "languages": [
                           {
                               "lang": "de_DE",
                               "fields": [{
                                   "text": "<p>Hier beindet sich html text</p> <p>der vom <h1>Nutzer</h1> als contenttype text angelegt wurde</p>"
                               }]
                           },

                           {
                               "lang": "en_EN",
                               "fields": [{
                                   "text": "<p>You'll find HTML Text here</p> <p>which the<h1>user</h1>produced as ContentType Text</p>"
                               }]
                           }
            ]
        }

        ;

    }
})();

