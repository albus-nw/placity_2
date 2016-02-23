/*
Copyright (c) 2016, Paul Koch, Philipp Weller

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = ['$scope','$http','$location', 'localUserService', 'fileService']; 

    function indexCtrl($scope, $location, $http, localUserService, fileService) {
        /* jshint validthis:true */
        var vm = this; 
        vm.playerName = '';
        vm.buttons = [
                               /* {
                                    "value": "Ergebnisse",
                                    "href": "#/Ergebnisse",
                                    "class": "btn btn-primary menuButton"
                                },*/
                                {
                                    "value": "Routen",
                                    "href": "#/Routen",
                                    "class": "btn btn-primary menuButton"
                                },
                                {
                                    "value": "Optionen",
                                    "href": "#/Optionen",
                                    "class": "btn btn-primary menuButton"
                                },
                                {
                                    "value": "Profil",
                                    "href": "#/Profil",
                                    "class": "btn btn-primary menuButton"
                                },
                                {
                                    "value": "Lokal Login",
                                    "href": "#/Login",
                                    "class": "btn btn-primary menuButton",
                                },
                                {
                                    "value": "Abmelden",
                                    "href": "#/Abmelden",
                                    "class": "btn btn-primary menuButton",
                                }

        ];

        localUserService.getData("penisLaenge").then(function (result) { vm.penisLaenge = result; });
        localUserService.getData("playerName").then(function (result) { vm.playerName = result; });
        console.log(cordova.file.dataDirectory);
    }
})();
