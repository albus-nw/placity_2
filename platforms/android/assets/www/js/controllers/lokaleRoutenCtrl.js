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
