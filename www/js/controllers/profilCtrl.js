(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('profilCtrl', profilCtrl);

    profilCtrl.$inject = ['$location', 'User', 'fileService']; 

    function profilCtrl($location, User, fileService) {

        /* jshint validthis:true */
        var vm = this;
        
        vm.title = 'profilCtrl';
        vm.user = User.get({ id: '12' });
       
        setTimeout(function () {
            console.log("inside timeout >>>>>>>>>>>>>> " + vm.user['name']);
            fileService.writeToFile('katrin2.json', vm.user);
        }, 15000);
        
       
    }
})();
