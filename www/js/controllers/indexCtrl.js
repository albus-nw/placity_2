/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('indexCtrl', indexCtrl);

    indexCtrl.$inject = [ '$http','$location', 'localUserService']; 

    function indexCtrl($location, $http, localUserService) {
            var vm = this;
            ////vm.playerName = playerName;
            ////hier: playerName aus datei lesen, wenn nicht vorhanden, auf login routen und datei schreiben dort
            //if (playerName == null) {
            //    //in Callback das Ergebnis bearbeiten, "result" der Inhalt der datei
            //    readFromFile('profile.json', function (result) {
            //        if (result == null) {
            //            $location.path('/Login');
            //        }
            //        else {
            //            playerName = JSON.parse(result).playerName;
            //            vm.playerName = playerName;
            //        }
            //    });
            //}     //TODO: playerName aus file lesen als service realisieren
            vm.playerName = localUserService.getData().playerName;
  
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

    }
})();
