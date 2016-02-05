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
        vm.route = '';
        vm.fromDevice = function () {
            PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) { vm.route = result; });
        };
        vm.fromServer = function () { vm.route = PlaRouteService.getRouteFromServer(vm.routenID); };
       
        //PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) { vm.route = result; });


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
