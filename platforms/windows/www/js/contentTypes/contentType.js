/**
 * Created by albus on 16.01.2016.
 */

(function () {
    'use strict';

    angular.module('contentTypes', [
        'ng',
            "ngSanitize",
            "com.2fdevs.videogular",
            "com.2fdevs.videogular.plugins.controls",
            "com.2fdevs.videogular.plugins.overlayplay",
            "com.2fdevs.videogular.plugins.poster",
        'ngRoute',
        'ngMaterial',
        'ngResource',
        'restDataServices'

    ])

    //.config([
    //    '$routeProvider',

    //    function ($routeProvider) {
    //        $routeProvider
    //            .when('/content', {
    //                title    	: 'TEST',
    //                templateUrl	: 'js/contentTypes/test.html',
    //                controller 	: 'testCtrl'
    //            })
    //    }
    //])

})();