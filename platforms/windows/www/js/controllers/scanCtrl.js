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
