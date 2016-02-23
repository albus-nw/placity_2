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
/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('scanCtrl', scanCtrl);

    scanCtrl.$inject = ['$rootScope', '$location'];

    function scanCtrl($rootScope, $location) {
        var vm = this;

        vm.result = cordova.plugins.barcodeScanner.scan(onSucess.bind(vm), function (error) {
            return "Scanning failed: " + error;
        });
        console.log("location 1 " + $location);
        vm.$location = $location;
        console.log("location vm " + vm.$location);
    
        function onSucess(result) {
            this.result = "We got a barcode\n" +
                   "Result: " + result.text + "\n" +
                   "Format: " + result.format + "\n" +
                   "Cancelled: " + result.cancelled;
     
            this.$location.path('/Routen/' + result.text);
            $rootScope.$apply();
            console.log("location 555 " + this.$location.path());
            return this.result;
        };
      
        
       
    }
})();
