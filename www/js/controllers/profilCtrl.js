/*
Copyright (c) 2016, Paul Koch

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
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
