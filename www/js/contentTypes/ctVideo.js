/*
Copyright (c) 2016, Steffen Hollenbach, Philipp Weller

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
(function () {
    'use strict';

    angular
      .module('contentTypes')
      //.controller('ContenttypeVideoController', ['$scope', '$rootScope', '$http', ContenttypeVideoController])
      .directive('ctVideo', ctVideo);

    ctVideo.$inject = [];

    /* @ngInject */
    function ctVideo() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/ctVideo.html',
            controller: ContenttypeVideoController,
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                content: '=',
                ctVideo: '=content'
            },
        };
        return directive;

    }

    ContenttypeVideoController.$inject = ['$scope', '$http', '$sce'];

    function ContenttypeVideoController($scope, $http, $sce) {
        var lang_id;
        var vm = this;
         if ($scope.$parent.vm.lang_id) {
            lang_id = $scope.$parent.vm.lang_id;
      
        }
        var data_obj_parsed;
        data_obj_parsed = JSON.parse(vm.content.data_obj);
        vm.ctVideodescription = data_obj_parsed.languages[lang_id].fields[0].description;
        vm.ctVideoautoplay = data_obj_parsed.languages[lang_id].fields[0].autoplay;
        vm.ctVideosrc = $sce.trustAsHtml(data_obj_parsed.languages[lang_id].fields[0].src);



       
       // $scope.fileSrc = vm.ctVideosrc;

      //  $scope.j = { "res": { "contenttype": "video", "src": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.480p.webm", "description": "Eine Bahn faehrt einen Berg hoch", "autoplay": true } };

        $scope.playVideo = function () {
            console.log("play");
            var oVideo = document.getElementById('video2');      //video element
            oVideo.src = vm.ctVideosrc;
            oVideo.play();
        }

        $scope.pauseVideo = function () {
            console.log("pause");
            var oVideo = document.getElementById('video2');
            oVideo.pause();
        }

        $scope.interpreteJson = function () {
           // console.log($rootScope.json);
            //var jsonParsed = jQuery.parseJSON($rootScope.json);;
            //var jsonParsed = $scope.j;

         //   $scope.fileSrc = jsonParsed['res']['src'];
          //  $scope.description = jsonParsed['res']['description'];

            if (vm.ctVideoautoplay === true) {
                $scope.playVideo();
                console.log("Autoplay");
            } else {
                console.log("No Autoplay");
            }

        }

    }




})();
