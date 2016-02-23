/*
Copyright (c) 2016, Paul Koch

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
