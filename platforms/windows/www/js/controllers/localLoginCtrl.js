(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('localLoginCtrl', localLoginCtrl);

    localLoginCtrl.$inject = ['$location', 'localUserService']; 

    function localLoginCtrl($location, localUserService) {
        /* jshint validthis:true */
        var vm = this;
        vm.login = login;
        vm.noLogin = noLogin;
        vm.playerName = '';
        vm.title = 'localLoginCtrl';

        function login() {
            localUserService.setData({ playerName: vm.playerName });
            $location.path('/');
        }
        
        function noLogin() {
            $location.path('/');
        }
    }
})();
