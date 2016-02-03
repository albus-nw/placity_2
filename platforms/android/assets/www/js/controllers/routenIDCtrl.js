/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenIDCtrl', routenIDCtrl);

    routenIDCtrl.$inject = ['$routeParams', 'PlaRouteService']; 

    function routenIDCtrl($routeParams, PlaRouteService) {
        /* jshint validthis:true */
        var vm = this;
        vm.routenID = $routeParams.routenID;
        vm.save = save;
        vm.aod = function () { vm.lokaleRouten = PlaRouteService.getAllOnDevice(); };
        vm.lokaleRouten = {};
        vm.route = PlaRouteService.getRoute(vm.routenID);


        //if (PlaRouteService.isOnServer(vm.routenID)) {
        //    vm.route = PlaRouteService.getRoute(vm.routenID);
        //    console.log("route: " + vm.route);
        //}
        //else {
        //    vm.route = "nix Route gibt";
        //}

        function save() {
            PlaRouteService.saveRoute(vm.route);
        }



    }
})();
