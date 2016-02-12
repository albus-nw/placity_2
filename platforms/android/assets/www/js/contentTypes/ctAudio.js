/**
 * Created by albus on 16.01.2016.
 */
//(function () {
//    'use strict';

//    angular
//        .module('contentTypes')
//        .directive('ctAudioQE', ctAudioQE);

//    ctAudioQE.$inject = [];

//    /* @ngInject */
//    function ctAudioQE() {
//        var directive = {
//            bindToController: true,
//            controller: ctAudioCtrlQE,
//            controllerAs: 'vm',
//            restrict: 'E',
//            scope: {}
//        };
//        return directive;


//    }

//    ctAudioCtrlQE.$inject = ['Dataservice'];

//    function ctAudioCtrlQE(Dataservice) {
//        // $scope wird nur zum Vergleich eingefügt (injiziert)
//        var vm = this;

//        vm.audioFiles = [];

//        activate();

//        function activate(){
//            //ToDo: this user (aktueller User hier einfügen)
//            return Dataservice.getMediafilesByType('12','audio').then(function(data){
//                vm.audioFiles = data;
//                return vm.audioFiles;
//            })
//        }
//    }

//})();

(function () {
    'use strict';

    angular
        .module('contentTypes')
        .directive('ctAudioapp', ctAudioApp);

    ctAudioApp.$inject = [];

    /* @ngInject */
    function ctAudioApp() {
        var directive = {
            bindToController: true,
            templateUrl:'js/contentTypes/ctAudioApp.html',
            controller: ctAudioCtrlApp,
            controllerAs: 'vm',
            restrict: 'AE',
            scope : {
                content: '=',
                ctAudioapp : '=content'
            }
        };
        return directive;

    }

    ctAudioCtrlApp.$inject = ['$sce','$scope'];

    function ctAudioCtrlApp($sce,$scope) {
        
        var lang_id;
        var vm = this;
        if ($scope.$parent.vm.lang_id) {
            lang_id = $scope.$parent.vm.lang_id;

        }
        var data_obj_parsed;
        var audiofileurl;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.info = data_obj_parsed.languages[0].fields[0].info;

        vm.sources = [{ src: $sce.trustAsResourceUrl(data_obj_parsed.languages[lang_id].fields[0].audiofileurl), type: "audio/mpeg" }];

        vm.config={
            theme: "js/frameworks/videogular-themes-default/videogular.css",
        };
        }


    })();