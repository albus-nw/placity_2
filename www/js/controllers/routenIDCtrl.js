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
        vm.pages = '';
        vm.save = save;
        vm.play = play;
        vm.aod = function () { vm.lokaleRouten = PlaRouteService.getAllOnDevice(); };
        vm.lokaleRouten = {};
        vm.route = {};
        vm.fromDevice = function () {

            PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) { vm.route = result; });
        };
        vm.fromServer = function () {
            vm.route = PlaRouteService.getRouteFromServer(vm.routenID).then(function (result) { vm.route = result; });
        };
        vm.fromSomewhere = function () {
            PlaRouteService.getRoute(vm.routenID).then(function (result) { vm.route = result; });
        }
       
       
        function save() {
            PlaRouteService.saveRoute(vm.route);
        }
        
       
        function play($scope) {
          
            vm.playing = true;

            var iwas = '';

            
           // PlaRouteService.getPage(2).then(function (result) { vm.route += "\n\n>>>>>Page Pos 2 : " + result; });
          
            //PlaRouteService.getPageContents(2).then(function (result) { vm.route += "\n\n\n>>>>>>Page Pos 2 Contenst :" + JSON.stringify(result); });
            PlaRouteService.getPageContents(2, 1).then(function (result) { vm.route = "\n\n\n>>>>>>< Page Pos 2 Contents Pos 1 " +  JSON.stringify(result); });
           
            var iter = PlaRouteService.PageIter();
            setTimeout(function () {
                //var help = iter.next();
                //var count = 0;
                //while(help.done != true)
                //   help.value.then(function (value) { vm.pages += "<br /><br />"+count++ + "-------------" + JSON.stringify(value); help = iter.next(); });
               
                iter.next().value.then(function (value) { vm.pages += '<br /><br />' + "-------------" + JSON.stringify(value); });
                var help = iter.next();
              //  help.value.then(function (value) { vm.pages += "\n\n\n" + "-------------" + JSON.stringify(value.page_name); });
                while (help.done == false) {

                    help.value.then(function (value) { vm.pages += "\n\n\nPosition: " + value.pos+ "-------------" + JSON.stringify(value.page_name); });
                    help = iter.next();
                }
            }, 8000);
           
            console.log(vm.route);
        }


    }
})();
