/**
 * Created by albus on 11.01.2016.
 */
'use strict';
                        //modulName
angular.module('test', [
        'ngRoute',
        'ngMaterial',
        'restDataServices',
        'ngResource'
])

    .config([
        '$routeProvider',

        function ($routeProvider) {
            $routeProvider
                .when('/test', {
                    title    	: 'TEST',
                    templateUrl	: 'app/test/test.html',
                    controller 	: 'testCtrl'
                })
        }
    ])


. factory('Test', [
        '$resource',

        function ($resource) {
            return $resource('/api/v2/db/_table/route/:id',{id:'@id'},{
                     get: { method: 'GET', isArray: false},
                  create: { method: 'POST'},
                 replace: { method: 'PUT'},
                  update: { method: 'PATCH'},
                  remove: { method: 'DELETE'}
            });
        }
    ])
    .controller('testCtrl', [
        '$scope' , 'Test', '$filter','Group',

        function ($scope, Test,$filter,Group) {
            $scope.newRoute = '';
            $scope.test = 'Hallo TEST-Data'
            $scope.loadData = function (object) {
                console.log("!!!! getRoute(id): call loadData() ");

                Test.get(object).$promise.then(function (result) {
                    $scope.test = result;
                });

            };


            $scope.loadData({id:'2',related:'*'});

        }
    ]);


