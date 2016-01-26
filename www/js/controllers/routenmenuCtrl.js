/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenmenuCtrl', routenmenuCtrl)
    

    //routenmenuCtrl.$inject = []; 

    function routenmenuCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'routenmenu';
        vm.buttons = [
                        {
                            "value": "QR-Code scannen",
                            "href": "#/QrScan",
                            "class": "btn btn-primary menuButton"
                        },
                        {
                            "value": "Route online suchen",
                            "href": "#/RouteOnline",
                            "class": "btn btn-primary menuButton",

                        },
                        {
                            "value": "lokale Routen",
                            "href": "#/RouteLokal",
                            "class": "btn btn-primary menuButton",

                        },
                        {
                            "value": "RoutenID",
                            "href": "#/RouteId",
                            "class": "btn btn-primary menuButton"
                        }
                    ];

        vm.beep = function () {
            navigator.notification.beep(1);
        };
        vm.vibe = function () {
            navigator.vibrate(292);
        };
        //activate();

        //function activate() { }
    }
})();
