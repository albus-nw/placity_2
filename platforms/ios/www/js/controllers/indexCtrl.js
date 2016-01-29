/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = ['$scope','$http','$location', 'localUserService']; 

    function indexCtrl($scope, $location, $http, localUserService) {
        /* jshint validthis:true */
        var vm = this;
        vm.playerName = '';
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
        $scope.$evalAsync(activate);
          // $scope.$apply(function () { vm.playerName = localUserService.getData("playerName"); });
           // activate();

            function activate() {
                vm.playerName = localUserService.getData("playerName");
               
                
            }
    }
})();
