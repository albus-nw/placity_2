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
               .when('/Ergebnisse', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>  <div>   <ct-audio-app></ct-audio-app>         </div>' })
               .when('/Profil', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a> <div> {{vm.user}}  </div>', controller: 'profilCtrl', controllerAs: 'vm' })
               .when('/Abmelden', { template: '<div>{{vm.playerName}}  abgemeldet</div> <br /><a href="#/Login" class="btn btn-primary btn-sm">Login</a>', controller: 'logoutCtrl', controllerAs: 'vm' })

               .when('/Routen', { templateUrl: 'views/routenmenu.html', controller: 'routenmenuCtrl', controllerAs: 'vm' })
                   //Routenmenü
               .when('/QrScan', { templateUrl: 'views/scan.html', controller: 'scanCtrl', controllerAs: 'vm' })
               .when('/RouteOnline', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })

               .when('/RouteId', { templateUrl: 'views/routeIdEingabe.html', controller: 'routenIdEingabeCtrl', controllerAs: 'vm' })

               .when('/RouteLokal', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
                       //eine per routenID bestimmte Route, routenID prüfen, starten, laden oä
                   .when('/Routen/:routenID', { templateUrl: 'views/routenID.html', controller: 'routenIDCtrl', controllerAs: 'vm' })
                   //Optionen
               .when('/Standort', { templateUrl: 'views/standort.html', controller: 'standortCtrl', controllerAs: 'vm' })
                   //LOgin
               .when('/Login', { templateUrl: 'views/login.html', controller: 'localLoginCtrl', controllerAs: 'vm' })

               .otherwise({ redirectTo: '/' });
    }
   
})();