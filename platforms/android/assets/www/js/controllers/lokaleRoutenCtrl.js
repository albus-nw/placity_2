(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('lokaleRoutenCtrl', lokaleRoutenCtrl);

    lokaleRoutenCtrl.$inject = ['$location', 'PlaRouteService']; 

    function lokaleRoutenCtrl($location, PlaRouteService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'lokaleRoutenCtrl';
        vm.aRouten = PlaRouteService.getAllOnDevice().then( function(res) {
            vm.aRouten = res; 
        });
        
        
    }
})();
