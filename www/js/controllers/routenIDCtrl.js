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
        //sowas wie vm.pickedlanguage fehlt noch
        vm.pickedlanguage='0';
        vm.playing = false;
        vm.routenID = $routeParams.routenID;
        vm.start = $routeParams.start;
        vm.pages = '';
        vm.currentPage;
        vm.content_by_id_page;
        vm.goToNextPage = goToNextPage;
        vm.pageIter;
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
       
        if (vm.start == 'device') {
            vm.playing = true;
            PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) {
                vm.route = result;
                play();
            });
            
        }

       /*
        * 
        */

      /*  function setLanguage() {
         PlaRouteService.getPageContents(2, 1).then(function (result) { vm.pickedlanguage =JSON.stringify(result); });
         console.log(vm.pickedlanguage);
        }
        setLanguage();

        */
        function save() {
            PlaRouteService.saveRoute(vm.route);
        }
        
       
        function play_1($scope) {
          
            vm.playing = true;
            
           // PlaRouteService.getPage(2).then(function (result) { vm.route += "\n\n>>>>>Page Pos 2 : " + result; });
          
            //PlaRouteService.getPageContents(2).then(function (result) { vm.route += "\n\n\n>>>>>>Page Pos 2 Contenst :" + JSON.stringify(result); });
            PlaRouteService.getPageContents(2, 1).then(function (result) { vm.route = "\n\n\n>>>>>>< Page Pos 2 Contents Pos 1 " +  JSON.stringify(result); });
           
            var iter = PlaRouteService.PageIter();
            setTimeout(function () {
               
                iter.next().value.then(function (value) { vm.pages += '<br /><br />' + "-------------" + JSON.stringify(value); });
                var help = iter.next();
           
                while (help.done == false) {

                    help.value.then(function (value) { vm.pages += "\n\n\nPosition: " + value.pos+ "-------------" + JSON.stringify(value.page_name); });
                    help = iter.next();
                }
            }, 8000);
           
            console.log(vm.route);
        }

        /*
         * 
         */
        function play() {
            vm.playing = true;
            vm.pageIter = PlaRouteService.PageIter();
            vm.pageIter.next().value.then(function (value) {
                vm.content_by_id_page = value.content_by_id_page;
                var bP = "Page Name: " + value.page_name;
                bP += "<br /> POS: " + value.pos;
                bP += "\n Contents: " + value.content_by_id_page;
                vm.currentPage = bP;
            });
        }

        /*
         * 
         */
        function goToNextPage() {
            vm.pageIter.next().value.then(function (value) {
                vm.content_by_id_page = value.content_by_id_page;
                var bP = "Page Name: " + value.page_name;
                bP += "<br /> POS: " + value.pos;
                bP += "\n Contents: " + value.content_by_id_page;
                vm.currentPage = bP;
            });
        }

        function buildPage(value) {
            var bP = "Page Name: " + value.page_name;
            bP += "<br /> POS: " + value.pos;
            bP += "\n Contents: " + value.content_by_id_page;
            vm.currentPage = bP;
        }
    }
})();
