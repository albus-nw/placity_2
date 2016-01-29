(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('logoutCtrl', logoutCtrl);

    logoutCtrl.$inject = ['$location']; 

    function logoutCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'logoutCtrl';

        activate();

        function activate() { }
    }
})();
