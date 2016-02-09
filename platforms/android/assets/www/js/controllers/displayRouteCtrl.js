/**
 * nicht benutzt
 * --> PlaRoutenService stattdessen
 */

(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('displayRouteCtrl', displayRouteCtrl);

    displayRouteCtrl.$inject = ['PlaRouteService','$scope'];

    function displayRouteCtrl(PlaRouteService, $scope) {
        /* jshint validthis:true */
      
        var vm = this;
        vm.title = 'displayRouteCtrl';
     
        var route = "";
        PlaRouteService.getRouteFromServer(770);
        route = PlaRouteService.getActiveRoute();
        //   route['id'] = id;
        //    route['pages'] = Page.get({ filter: 'id_route=' + id, related: 'content_by_id_page' });
        var pageX;
        // console.log(route['pages'].then(function(result){ pageX=result.resource[0];}));
        console.log(route['pages']);
        //console.log(pageX);
        $scope.ctText = "displayctrl";
        $scope.ctDialog = route['pages'];

    }
})();
