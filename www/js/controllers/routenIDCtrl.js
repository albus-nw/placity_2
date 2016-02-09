/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenIDCtrl', routenIDCtrl);

    routenIDCtrl.$inject = ['$routeParams', 'PlaRouteService', '$location', '$scope'];

    function routenIDCtrl($routeParams, PlaRouteService, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.playing = false;
        vm.routenID = $routeParams.routenID;
        vm.save = save;
        vm.play = play;
        vm.aod = function () { vm.lokaleRouten = PlaRouteService.getAllOnDevice(); };
        vm.lokaleRouten = {};
        vm.route = {};
        vm.fromDevice = function () {

            PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) { vm.route = result; });
        };
        vm.fromServer = function () {
            vm.route = PlaRouteService.getRouteFromServer(vm.routenID);
        };
       
       
        function save() {
            PlaRouteService.saveRoute(vm.route);
        }
        
       
        function play($scope) {
          
            vm.playing = true;

            var iwas = '';

            
            //PlaRouteService.getPage(2).then(function (result) { vm.route += "\n\n>>>>>Page Pos 2 : " + result; });
          
            //PlaRouteService.getPageContents(2).then(function (result) { vm.route += "\n\n\n>>>>>>Page Pos 2 Contenst :" + JSON.stringify(result); });
            PlaRouteService.getPageContents(2, 1).then(function (result) { vm.route = "\n\n\n>>>>>>< Page Pos 2 Contents Pos 1 " +  JSON.stringify(result); });
           
            console.log(vm.route);
        }


    }
})();
