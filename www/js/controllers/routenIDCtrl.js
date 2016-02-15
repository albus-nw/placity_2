/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenIDCtrl', routenIDCtrl);

    routenIDCtrl.$inject = ['$routeParams', 'PlaRouteService', '$location', '$scope'];

    function routenIDCtrl($routeParams, PlaRouteService, $scope, $location) {
        /* jshint validthis:true */
        var vm = this;
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
        vm.route;
        vm.getLanguage = getLanguage;
        vm.setLanguage = setLanguage;
        vm.fromDevice = fromDevice;
        vm.fromServer = fromServer;
        vm.fromSomewhere = fromSomewhere;
       
        if (vm.start == 'device') {
            fromDevice();
        }
 
        /////////////////////////////////
 
        function save() {
            PlaRouteService.saveRoute(vm.route);
        }

        function play() {
            vm.playing = true;
            vm.pageIter = PlaRouteService.PageIter();
            vm.pageIter.next().value.then(function (value) {
                vm.content_by_id_page = value.content_by_id_page;
            });
        }

       
        function goToNextPage() {
            var nP = vm.pageIter.next();
            if (nP.done) {
                vm.content_by_id_page = [
					{
					    id_content_type: 1,
					    data_obj: { languages :[
                                {
                                    lang:"de_DE",
                                    fields:[
                                        {
                                            text: "<p>ENDE!!!</p>"
                                        }
                                    ]
                                },
                                {
                                    lang: "en_EN",
                                    fields: [
                                        {
                                            text: "<p>END!!!</p> "
                                        }
                                    ]
                                }
					        ]
					    },
					    pos: 1
					},
                ];
            }
            else {
                nP.value.then(function (value) {
                    vm.content_by_id_page = value.content_by_id_page;
                });
            }
        }


        function getLanguage() {
            console.log(vm.route.pages.resource[0].content_by_id_page[0].data_obj);
            var help = JSON.parse(vm.route.pages.resource[0].content_by_id_page[0].data_obj);
            console.log(help);
            for (var x in help.languages) {
                vm.langarray[x] = help.languages[x].lang;
            }
            console.log(vm.langarray);
            
        };

        function setLanguage() {
            console.log(vm.lang_id);
            $scope.lang_id = vm.lang_id;
            vm.playing = true;

        };

        function fromDevice() {
            PlaRouteService.getRouteFromDevice(vm.routenID).then(function (result) {
                vm.route = result;
                vm.getLanguage();
                vm.loaded = true;
            });
        };

        function fromServer() {
            vm.route = PlaRouteService.getRouteFromServer(vm.routenID).then(function (result) {
                vm.route = result;
                vm.getLanguage();
                vm.loaded = true;
            });
        };

        function fromSomewhere() {
            PlaRouteService.getRoute(vm.routenID).then(function (result) {
                vm.route = result;
                vm.getLanguage();
                vm.loaded = true;
            });
        }

    }
})();
