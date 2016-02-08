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
       /* vm.data = {
            "contenttype": "dialog",
            "avatar1": "http://143.93.91.92/philipp/avatar1.jpg",
            "avatar2": "http://143.93.91.92/philipp/avatar2.jpg",
            "texte": {
                "text1": "<h1>Hi Avatar2</h1>",
                "text2": "<h2>Ein Hallo zurück ;)</h2>",
                "text3": "<h3>Geht es dir gut?</h3>",
                "text4": "<h4>Alles bestens, kann nicht klagen</h4>"
            }

        };*/
        vm.data={	
    "avatar1" : "http://143.93.91.92/philipp/avatar1.jpg",
    "avatar2" : "http://143.93.91.92/philipp/avatar1.jpg",
    "languages":[
                {"lang": "de_DE",
                 "fields": [{
                          "text" :[ 
                            "<p>Hi Alex</p>",
                            "<p>Hi Paul</p>",
                            "<p>Na wie gehts?</p>",
                            "<p>Alles bestens, kann nicht klagen</p>"
                            ]
                        }]
                },
                {"lang": "en_EN",
                 "fields": [{
                          "text" :[
                            "<p>Hi Alex</p>",
                            "<p>Hi Paul</p>",
                            "<p>How are you?</p>",
                            "<p>Quite nice, thanks!</p>"
                            ]
                        }]
                } 

            ]
};

    }
})();

