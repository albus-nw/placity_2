/*
 * created by pk on 11.02.2016
 * 
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('suchCtrl', suchCtrl);

    suchCtrl.$inject = ['$location', 'Routentag', 'Route' , 'PlaRouteService']; 

    function suchCtrl($location, Routentag, Route, PlaRouteService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'suchCtrl';
        vm.search = search;
        vm.iTreffer = 0;
        vm.aTreffer = [];
        

        function search() {
            PlaRouteService.searchPerTag(vm.suchbegriff).then(function (result) {
                vm.aTreffer = result;
                vm.iTreffer = result.length;
            });
        }

        function MMMsearch() {
           
            Routentag.get({ filter: 'tag_name=' + vm.suchbegriff })
                .$promise.then(
                    function (result) {
                        vm.tag = result;
                        vm.iTreffer = result.resource.length;
                        vm.aTreffer = result.resource;
                        vm.aTreffer.forEach(function (current, index, array) {
                             Route.get({ filter: 'id=' + current.id_route, fields: 'name' }).$promise.then(function (result) {
                                
                                 current.name = result.resource[0].name;
                            });

                        });
                          
                        
                    });
       
        }

        
    }
})();
