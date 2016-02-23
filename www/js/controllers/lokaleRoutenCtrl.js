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
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('lokaleRoutenCtrl', lokaleRoutenCtrl);

    lokaleRoutenCtrl.$inject = ['$location', 'PlaRouteService', 'fileService']; 

    function lokaleRoutenCtrl($location, PlaRouteService, fileService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'lokaleRoutenCtrl';
        //vm.aRouten = PlaRouteService.getAllOnDevice().then( function(res) {
        //    vm.aRouten = res; 
        //});
        vm.aRouten = PlaRouteService.getAllOnDevice();
        vm.remove = remove;

        function remove(rName) {
            //console.log(rID);
            PlaRouteService.deleteRoute(rName);
        }

       // fileService.getAllFiles();
        
    }
})();
