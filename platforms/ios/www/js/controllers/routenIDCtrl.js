/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('routenIDCtrl', routenIDCtrl);

    routenIDCtrl.$inject = ['$routeParams']; 

    function routenIDCtrl($routeParams) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'routenIDCtrl';

        vm.routenID = $routeParams.routenID;
    }
})();
