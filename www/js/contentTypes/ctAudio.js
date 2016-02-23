/*
Copyright (c) 2016, Alexander Weiﬂ, Philipp Weller

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

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