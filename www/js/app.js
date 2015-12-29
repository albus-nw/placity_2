var placity = angular.module("placity", ['ngRoute', 'Controllers', 'ui.bootstrap' ]);

placity.config(function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: 'views/hauptmenu.html', controller: 'indexCtrl' })
        //Hauptmenü
    .when('/Optionen', { templateUrl: 'views/options.html', controller: 'optionsCtrl' })
    .when('/Ergebnisse', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
    .when('/Profil', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>  <div class="menuButtonDiv"> <div ng-repeat="button in buttons">   <a class="{{button.class}}" ng-href={{button.href}}>{{button.value}}</a>   </div>' })
    .when('/Abmelden', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
    .when('/Routen', { templateUrl: 'views/routen.html', controller: 'routenCtrl' })
        //Routenmenü
    .when('/QrScan', { templateUrl: 'views/scan.html', controller: 'ScanCtrl', controllerAs: 'vm'})
    .when('/RouteOnline', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
    .when('/RouteId', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
    .when('/RouteLokal', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
        //Optionen
    .when('/Standort', { templateUrl: 'views/standort.html', controller: 'standortCtrl', controllerAs: 'vm'})

   .otherwise({ redirectTo: '/' });
//testddfdffd
});


//ms-appx wp8 problem umgehen
placity.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);

