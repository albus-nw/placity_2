(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('profilCtrl', profilCtrl);

    profilCtrl.$inject = ['$location', 'User', 'fileService', 'localUserService']; 

    function profilCtrl($location, User, fileService, localUserService) {
         /* jshint validthis:true */
        var vm = this;

        vm.prof = '';
        vm.field = '';
        vm.value = '';
        vm.add = add;
        vm.title = 'profilCtrl';
        vm.user = User.get({ id: '12' });
       
        localUserService.getData().then(function (result) { vm.prof = result; });

        function add() {
            vm.prof[vm.field] = vm.value;
            vm.field = '';
            vm.value = '';
            localUserService.setData(vm.prof);
        }

        new Promise(function (resolve, reject) {
            var xx = User.get({ id: '12' });
            resolve(xx);
        }).then(function (result) {
            console.log(result);
            fileService.writeToFile('kat.json', result);
        });

        //setTimeout(function () {
        //    console.log("inside timeout >>>>>>>>>>>>>> " + vm.user['name']);
        //    fileService.writeToFile('katrin2.json', vm.user);
        //}, 15000);
        
       
    }
})();
