/*
 * created by Paul Koch 
 * 
 * gibt routen zurück, prüft ob lokal vorhanden, online vorhanden
 * führt Routenliste
 * speichert zusatzinfo zu den routen usw
 */
(function () {
    'use strict';

    angular
      .module('placity.services')
      .factory('PlaRouteService',  PlaRouteService);

    PlaRouteService.$inject = ['fileService', 'Page', 'Route'];
    
    
    function PlaRouteService(fileService, Page, Route) {
        var service = {
            getRoute: getRoute,
            getRouteFromServer: getRouteFromServer,
            getRouteFromDevice: getRouteFromDevice,
            saveRoute: saveRoute,
            isOnDevice: isOnDevice,
            isOnServer: isOnServer,
            getAllOnDevice: getAllOnDevice
        };

        var lokaleRouten = [];
        fileService.readFromFile('lokaleRouten.json', function (result) { lokaleRouten = JSON.parse(result); });

        //function getData() {
        ////http://df.albus-it.com:80/api/v2/db/_table/page?filter=id_route%3D1&related=content_by_id_page
        //}

        function getRoute(id) {
            /// <summary>
            /// gibt zur id gehörende Route zurück
            /// entweder lokal wenn vorhanden oder vom server
            /// </summary>
            /// <param name="id" ></param>

            if (isOnDevice(id)) {
                console.log("from device");
                return getRouteFromDevice(id);
            }
            else {
                console.log("from server");
                return getRouteFromServer(id);
            }
            //var route = {};
            //route['id'] = id;
            //route['pages'] = Page.get({ filter: 'id_route=' + id, related: 'content_by_id_page' });
            //return route;
        }

        function getRouteFromServer(id) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="id" type="type"></param>
            /// <returns type=""></returns>
            var route = {};
            route['id'] = id;
            route['pages'] = Page.get({ filter: 'id_route=' + id, related: 'content_by_id_page' });
            return route;
        }

        function getRouteFromDevice(id) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="id" type="type"></param>
            /// <returns type=""></returns>
            var route = {};
            fileService.readFromFile("Route" + id + ".json", function (result) { route = result; });
            setTimeout(function () {
                return route;
            }, 10000);  //ist das kacke ey...
            }

        function saveRoute(route) {
            /// <summary>
            /// speichert übergebene Route lokal
            /// </summary>
            /// <param name="route" type="type"></param>
            lokaleRouten.push(route['id']);
            console.log("routeID: " + route['id']);
           // lokaleRouten.route['id'] = "Route" + route['id'] + ".json";
            fileService.writeToFile("Route" + route['id'] + ".json", route);
            fileService.writeToFile('lokaleRouten.json', lokaleRouten);
        }

        function isOnDevice(id) {
            /// <summary>
            /// check, ob route lokal
            /// </summary>
            /// <param name="id" type="type"></param>
           
            return lokaleRouten.indexOf(id) >= 0;
        }

        function isOnServer(id) {
            /// <summary>
            /// lookup on server
            /// </summary>
            /// <param name="id" type="type"></param>
            /// <returns type="boolean"></returns>
            if (Route.get({ id: id })) {    //ToDo: das so nicht gut
                console.log("in if; true, route gefunden");
                return true;
            }
            return false;
        }

        function getAllOnDevice() {
            /// <summary>
            /// 
            /// </summary>
            /// <returns type=""></returns>
            return lokaleRouten;
        }




        return service;
    }
})();
