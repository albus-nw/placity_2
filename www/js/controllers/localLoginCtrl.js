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
            var localUser = localUserService.getData();
            localUser.playerName = vm.playerName;
            localUser.penisLaenge = 18;
            localUser.highscores = {};
            localUser.highscores['route X'] = '300000000 Punkte';
            localUserService.setData(localUser);
            $location.path('/');
        }
        
        function noLogin() {
            $location.path('/');
        }
    }
})();
