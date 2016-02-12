/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenIDCtrl', routenIDCtrl);

    routenIDCtrl.$inject = ['$routeParams', 'PlaRouteService', '$location', '$scope', '$location'];

    function routenIDCtrl($routeParams, PlaRouteService, $scope, $location) {
        /* jshint validthis:true */
        var vm = this;
        //sowas wie vm.pickedlanguage fehlt noch
        vm.pickedlanguage = '0';
        vm.langarray=[];
        vm.lang_id;
        vm.playing = false;
        vm.loaded = false;
        vm.routenID = $routeParams.routenID;
        vm.start = $routeParams.start;
        vm.pages = '';
        vm.currentPage;
        vm.content_by_id_page;
        vm.goToNextPage = goToNextPage;
        vm.pageIter;
        vm.save = save;
        vm.play = play;
        vm.aod = function () { $location.path('/RouteLokal'); };
        vm.lokaleRouten = {};
        vm.route;
        vm.getLanguage = function () {
            console.log(vm.route.pages.resource[0].content_by_id_page[0].data_obj);
            var help = JSON.parse(vm.route.pages.resource[0].content_by_id_page[0].data_obj);
            console.log(help);
            for (var x in help.languages) {
                vm.langarray[x] = help.languages[x].lang;
            }
            console.log(vm.langarray);
            
        };


        vm.setLanguage = function () {
            console.log(vm.lang_id);
            $scope.lang_id = vm.lang_id;
            vm.playing = true;

        };
        vm.fromDevice = function () {
            PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) {
                vm.route = result;
                vm.getLanguage();
                vm.loaded = true;
            });
          
        };
        vm.fromServer = function () {
            vm.route = PlaRouteService.getRouteFromServer(vm.routenID).then(function (result) {
                vm.route = result;
                vm.getLanguage();
                vm.loaded = true;
            });

        };
        vm.fromSomewhere = function () {
            PlaRouteService.getRoute(vm.routenID).then(function (result) {
                vm.route = result;
                vm.getLanguage();
                vm.loaded = true;
            });
          
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
               
                vm.currentPage = bP;
            });
        }

        function buildPage(value) {
            var bP = "Page Name: " + value.page_name;
           
            vm.currentPage = bP;
        }
    }
})();
