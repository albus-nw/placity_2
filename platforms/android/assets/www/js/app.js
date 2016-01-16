var placity = angular.module("placity", ['ngRoute', 'Controllers', 'ui.bootstrap' ]);
placity.constant('DF', 'http://df.albus-it.com');
placity.constant('APP_API_KEY', '427994563fdc8f1159ff7d04bd00c62ecab42f7bcd3f9e99ae2a5a38f5408d3d');

placity.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', { templateUrl: 'views/hauptmenu.html', controller: 'indexCtrl' })
            //Hauptmenü
        .when('/Optionen', { templateUrl: 'views/options.html', controller: 'optionsCtrl' })
        .when('/Ergebnisse', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
        .when('/Profil', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>  <div class="menuButtonDiv"> <div ng-repeat="button in buttons">   <a class="{{button.class}}" ng-href={{button.href}}>{{button.value}}</a>   </div>' })
        .when('/Abmelden', { template: '<div>{{playerName}}  abgemeldet</div> <br /><a href="#/Login" class="btn btn-primary btn-sm">Login</a>', controller: 'logoutCtrl'  })
                                                                
        .when('/Routen', { templateUrl: 'views/routenmenu.html', controller: 'routenmenuCtrl' })
            //Routenmenü
        .when('/QrScan', { templateUrl: 'views/scan.html', controller: 'ScanCtrl', controllerAs: 'vm'})
        .when('/RouteOnline', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
        .when('/RouteId', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
        .when('/RouteLokal', { template: '<a href="#/.." class="btn btn-primary btn-sm">Zurück</a>' })
                //eine per routenID bestimmte Route, routenID prüfen, starten, laden oä
            .when('/Routen/:routenID', { templateUrl: 'views/routenID.html', controller: 'routenIDCtrl' })
            //Optionen
        .when('/Standort', { templateUrl: 'views/standort.html', controller: 'standortCtrl', controllerAs: 'vm' })
            //LOgin
        .when('/Login', { templateUrl: 'views/login.html', controller: 'loginCtrl', controllerAs: 'vm'})   

        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(false);

   
    
}]);

//placity.config(['$resourceProvider', function ($resourceProvider) {
//    // Don't strip trailing slashes from calculated URLs
//    $resourceProvider.defaults.stripTrailingSlashes = false;
//   //$http.defaults.headers.common['X-DreamFactory-API-Key'] = APP_API_KEY;
//}]);



//ms-appx wp8 problem umgehen
placity.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
]);

placity.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-DreamFactory-API-Key'] = '427994563fdc8f1159ff7d04bd00c62ecab42f7bcd3f9e99ae2a5a38f5408d3d';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json';
 //   $httpProvider.defaults.headers.common['X-DreamFactory-Session-Token'] = $cookies.get('session_token');
}]);
