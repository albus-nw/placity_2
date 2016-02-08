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

    PlaRouteService.$inject = ['fileService', 'Page', 'Route', '$q'];
    
    
    function PlaRouteService(fileService, Page, Route, $q) {
        var route = {};
        route['id'] = {};
        route['pages'] = {};

        var service = {
            
            getRoute: getRoute,
            getRouteFromServer: getRouteFromServer,
            getRouteFromDevice: getRouteFromDevice,
            saveRoute: saveRoute,
            isOnDevice: isOnDevice,
            isOnServer: isOnServer,
            getAllOnDevice: getAllOnDevice,
            getPage: getPage,
            getPageContents: getPageContents
        };

        var lokaleRouten = [];
        fileService.readFromFile('lokaleRouten.json').then( function (result) { lokaleRouten = result; });

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
           // var route = {};
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
          //  var route = {};
            //fileService.readFromFile("Route" + id + ".json").then(function (result) { route = result; });
             route = $q.defer();
            fileService.readFromFile("Route" + id + ".json").then(function (result) { route.resolve(result); });
            return route.promise;
          
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

        function getPage(page_pos) {
            /// <summary>
            /// Liefert die gesamte page an der Position page_pos der geladenen Route
            /// </summary>
            /// <param name="page_pos" >Page Position</param>
            /// <returns >Page an der Position oder null</returns>
            var res = $q.defer();
            for (var i = 0; i < route.pages.resource.length; i++) {
                if (route.pages.resource[i].pos == page_pos) {
                    res = route.pages.resource[i];
                    break;
                }
            }
            return res.promise;
          //  var page = route.pages.resource[0].content_by_id_page[0].data_obj
        }

        function getPageContents(page_pos, content_pos) {
            var res = $q.defer();
                getPage(page_pos).then(function (result) {
                    if (content_pos === 'undefined') {    //kein parameter gesetzt
                        res = result.content_by_id_page;
                    }
                    else {
                        //Array nicht unbedingt nach pos sortiert
                        for (var i = 0; i < result.content_by_id_page.length; i++) {
                            if (result.content_by_id_page[i].pos == content_pos) {
                                res = result.content_by_id_page[i];
                                break;
                            }
                        }
                    }
                });
            return res.promise;
        }

        return service;
    }
})();
