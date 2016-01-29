(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('profilCtrl', profilCtrl);

    profilCtrl.$inject = ['$location', 'User']; 

    function profilCtrl($location, User) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'profilCtrl';
        vm.user = User.get({ id: '12' });
        //activate();

        //function activate() { }
    }
})();
