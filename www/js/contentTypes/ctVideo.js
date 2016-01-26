
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
            restrict: 'E'
        };
        return directive;

    }

    ContenttypeVideoController.$inject = ['$scope', '$rootScope', '$http'];

    function ContenttypeVideoController($scope, $rootScope, $http) {
        $scope.description = "-";
        $scope.fileSrc = "";

        $scope.j = { "res": { "contenttype": "video", "src": "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.480p.webm", "description": "Eine Bahn frt einen Berg hoch", "autoplay": true } };

        $scope.playVideo = function () {
            console.log("play");
            var oVideo = document.getElementById('video2');      //video element
            oVideo.src = $scope.fileSrc;
            oVideo.play();
        }

        $scope.pauseVideo = function () {
            console.log("pause");
            var oVideo = document.getElementById('video2');
            oVideo.pause();
        }

        $scope.interpreteJson = function () {
            console.log($rootScope.json);
            //var jsonParsed = jQuery.parseJSON($rootScope.json);;
            var jsonParsed = $scope.j;

            $scope.fileSrc = jsonParsed['res']['src'];
            $scope.description = jsonParsed['res']['description'];

            if (jsonParsed['res']['autoplay'] === true) {
                $scope.playVideo();
                console.log("Autoplay");
            } else {
                console.log("No Autoplay");
            }

        }

    }




})();
