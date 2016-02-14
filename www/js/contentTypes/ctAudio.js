/**
 * Created by albus on 16.01.2016.
 * Edit PW
 */


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