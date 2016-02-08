(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('displayRouteCtrl', displayRouteCtrl);

    //displayRouteCtrl.$inject = ['getRouteById']; 

    function displayRouteCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'displayRouteCtrl';

        vm.data = {
            "avatar1": "http://143.93.91.92/philipp/avatar1.jpg",
            "avatar2": "http://143.93.91.92/philipp/avatar1.jpg",
            "languages": [
                        {
                            "lang": "de_DE",
                            "fields": [{
                                "text1": [
                                  "<p>Hi du</p>",
                                  "<p>Alles klar soweit?</p>"
                                ],
                                "text2": [
                                    "<p>Grüße dich</p>",
                                    "<p>Alles bestens, kann nicht klagen</p>"
                                ]
                            }]
                        },
                        {
                            "lang": "en_EN",
                            "fields": [{
                                "text1": [
                                  "<p>Hey you there</p>",
                                 "<p>How is your day?</p>"
                                ],
                                "text2": [
                                   "<p>Greetings</p>",
                                   "<p>Quite nice, so far thanks!</p>"
                                ]
                            }]
                        }

            ]
        };
    }
})();
