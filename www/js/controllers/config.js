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
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .config(config);

    function config($routeProvider) {
        /* jshint validthis:true */
        $routeProvider
               .when('/', { templateUrl: 'views/hauptmenu.html', controller: 'indexCtrl', controllerAs: 'vm' })
                   //Hauptmenü
               .when('/Optionen', { templateUrl: 'views/options.html', controller: 'optionsCtrl', controllerAs: 'vm' })
             
               .when('/Profil', { templateUrl: 'views/profil.html', controller: 'profilCtrl', controllerAs: 'vm' })
               .when('/Abmelden', { templateUrl: 'views/logout.html', controller: 'logoutCtrl', controllerAs: 'vm' })

               .when('/Routen', { templateUrl: 'views/routenmenu.html', controller: 'routenmenuCtrl', controllerAs: 'vm' })
                   //Routenmenü
               .when('/QrScan', { templateUrl: 'views/scan.html', controller: 'scanCtrl', controllerAs: 'vm' })
               .when('/RouteOnline', { templateUrl: 'views/routeOnlineSuchen.html', controller: 'suchCtrl', controllerAs: 'vm' })

               .when('/RouteId', { templateUrl: 'views/routeIdEingabe.html', controller: 'routenIdEingabeCtrl', controllerAs: 'vm' })

               .when('/RouteLokal', { templateUrl: 'views/lokaleRouten.html', controller: 'lokaleRoutenCtrl', controllerAs: 'vm' })
                       //eine per routenID bestimmte Route, routenID prüfen, starten, laden oä
                   .when('/Routen/:routenID', { templateUrl: 'views/routenID.html', controller: 'routenIDCtrl', controllerAs: 'vm' })

               

                    //Optionen
               .when('/Standort', { templateUrl: 'views/standort.html', controller: 'standortCtrl', controllerAs: 'vm' })
                   //LOgin
               .when('/Login', { templateUrl: 'views/login.html', controller: 'localLoginCtrl', controllerAs: 'vm' })

               .otherwise({ redirectTo: '/' });
    }
   
})();