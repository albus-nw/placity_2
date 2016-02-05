(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('displayRouteCtrl', displayRouteCtrl);

    //displayRouteCtrl.$inject = ['getRouteById']; 

    function displayRouteCtrl($scope, getRouteById) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'displayRouteCtrl';

        vm.data = getRouteById.getData('1');
    }
})();
