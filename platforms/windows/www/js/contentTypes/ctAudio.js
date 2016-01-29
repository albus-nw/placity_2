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
        .directive('ctAudioApp', ctAudioApp);

    ctAudioApp.$inject = [];

    /* @ngInject */
    function ctAudioApp() {
        var directive = {
            bindToController: true,
            templateUrl:'js/contentTypes/ctAudioApp.html',
            controller: ctAudioCtrlApp,
            controllerAs: 'vm',
            restrict: 'E'
        };
        return directive;

    }

    ctAudioCtrlApp.$inject = ['$sce'];

    function ctAudioCtrlApp($sce) {
        // $scope wird nur zum Vergleich eingefügt (injiziert)
        var vm = this;

        vm.content =  {
            id: 1,
            id_page: 1,
            id_content_type: 1,
            data_obj: {
                id:14,
                audiofileurl: "http://143.93.91.92/upload/2016_1_16/Ab%20An%20De%20See.mp3",
                info:"InfoText"
            },
            pos: 1
        };

        vm.config={
            sources:[
                { src: $sce.trustAsResourceUrl("http://143.93.91.92/upload/2016_1_16/Ab%20An%20De%20See.mp3"), type: "audio/mpeg" }
            ],
            theme: "js/frameworks/videogular-themes-default/videogular.css",
        };
        }

        /* //ToDo: Datenzugriff auf content
        activate();

        function activate(){

            return Dataservice.getMediafilesByType('12','audio').then(function(data){
                vm.audioFiles = data;
                return vm.audioFiles;
            })
        }*/
    })();