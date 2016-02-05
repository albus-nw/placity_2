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
        vm.penisLaenge = 'klein';
        vm.buttons = [
                                {
                                    "value": "Ergebnisse",
                                    "href": "#/Ergebnisse",
                                    "class": "btn btn-primary menuButton"
                                },
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
                                    "value": "Abmelden",
                                    "href": "#/Abmelden",
                                    "class": "btn btn-primary menuButton",
                                },
                                {
                                    "value": "Lokal Login",
                                    "href": "#/Login",
                                    "class": "btn btn-primary menuButton",
                                }

        ];

        localUserService.getData("penisLaenge").then(function (result) { vm.penisLaenge = result; });
        localUserService.getData("playerName").then(function (result) { vm.playerName = result; });

    }
})();
