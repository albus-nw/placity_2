(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('logoutCtrl', logoutCtrl);

    logoutCtrl.$inject = ['$location', 'localUserService']; 

    function logoutCtrl($location,localUserService) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'logoutCtrl';

        logout();

        function logout() {
 
            localUserService.setData('');
        }
    }
})();
