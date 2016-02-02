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
        //function xxx() {
        //    return new Promise(function (resolve, reject) {
        //        var zzz = User.get({ id: '12' });
        //        console.log("inside Promise >>>>>>>>>>>>>> " + zzz['name']);
        //        resolve(zzz);
        //    });
        //}

        //xxx().then(function (result) {
        //    console.log("inside xxx >>>>>>>>>>>>>> " + result['name']);
        //    fileService.writeToFile('katrin.json', result);
        //});
        //var ttt = xxx();
        setTimeout(function () {
            console.log("inside timeout >>>>>>>>>>>>>> " + vm.user['name']);
            fileService.writeToFile('katrin2.json', vm.user);
        }, 15000);
        
        //fileService.writeToFile('katrin.json', Promise.resolve(User.get({ id: '12' })));
        //activate();

        //function activate() { }
    }
})();
