/**
 * created by pk
 * 
 */
 
 (function () {
    'use strict';

    angular
        .module("placity", ['ngRoute', 'placity.controllers', 'contentTypes', 'ui.bootstrap', 'restDataServices', 'ngAnimate', 'placity.services'])
        .constant('INSTANCE_URL', 'http://df.albus-it.com')
        //.constant('APP_API_KEY', '427994563fdc8f1159ff7d04bd00c62ecab42f7bcd3f9e99ae2a5a38f5408d3d');

        .config([ '$locationProvider', function ( $locationProvider) {
       
            $locationProvider.html5Mode(false);
        }])

        .config(['$resourceProvider', function ($resourceProvider) {
            // Don't strip trailing slashes from calculated URLs
            $resourceProvider.defaults.stripTrailingSlashes = false;
        }])



        //ms-appx wp8 problem umgehen
        .config( [
            '$compileProvider',
            function( $compileProvider )
            {   
                $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|x-wmapp0):/);
                // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
            }
        ])

        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-DreamFactory-API-Key'] = '427994563fdc8f1159ff7d04bd00c62ecab42f7bcd3f9e99ae2a5a38f5408d3d';
            $httpProvider.defaults.headers.common['Accept'] = 'application/json';
         //   $httpProvider.defaults.headers.common['X-DreamFactory-Session-Token'] = $cookies.get('session_token');
        }]);


 })();