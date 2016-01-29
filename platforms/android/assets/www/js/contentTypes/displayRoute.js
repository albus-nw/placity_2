/**
 * DisplayRoute, PW
 * Zerlegt eine Route & zeigt diese mit Hilfe der content Types an
 */
(function () {
    'use strict';

    angular
      .module('contentTypes')
      .directive('displayroute', displayRoute); //WICHTIG 'displayroute' und nicht 'displayRoute' !!!

    displayRoute.$inject = [];
    /* @ngInject */
    function displayRoute() {
        var directive = {
            bindToController: true,
            templateUrl: 'js/contentTypes/displayRoute.html',
            controller: displayRouteCtrl,
            controllerAs: 'vm',
            restrict: 'E',
            scope: { }
        };

        return directive;
    }


    function displayRouteCtrl() {
        
        var vm = this;
        vm.data_obj="data_obj\": \"{\"text\": \"Test <p>mit</p> html\"}";
        vm.test = " flsdh <p>as</p>djk ghsdkjg";
        vm.data = {
            "resource": [
              {
                  "id": 98,
                  "next": null,
                  "page_name": "Text_Test_Seite_1",
                  "pos": 1,
                  "id_route": 770,
                  "content_by_id_page": [
                    {
                        "id": 98,
                        "id_page": 98,
                        "id_content_type": 1,
                        "data_obj": "{\"text\": \"Test <p>mit</p> html\"}",
                        "pos": 1
                    }
                  ],
                  "route_by_id_route": {
                      "id": 770,
                      "name": "Text_Test_Seite_1",
                      "title": "text test titel",
                      "subtitle": "text test subtitel",
                      "description": "text test",
                      "image": null,
                      "app_scheme": "APP_SCHEME",
                      "android_scheme": "android_scheme",
                      "win_scheme": null,
                      "private": "0",
                      "id_orga": null,
                      "id_user": 2,
                      "id_group": null
                  }
              }
            ]
        };






    }
})();

