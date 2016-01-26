(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('optionsCtrl', optionsCtrl);

    optionsCtrl.$inject = []; 

    function optionsCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'optionsCtrl';
        vm.buttons = [
                        {
                            "value": "Standort",
                            "href": "#/Standort",
                            "class": "btn btn-primary menuButton"
                        }
                     ];
      
    }

})();
