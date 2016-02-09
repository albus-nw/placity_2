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
        console.log("ding ding ding");
        var lokaleRouten = null;
        fileService.readFromFile('lokaleRouten.json').then(function (result) { lokaleRouten = result; });

        var service = {
            getRoute: getRoute,
            getRouteFromServer: getRouteFromServer,
            getRouteFromDevice: getRouteFromDevice,
            saveRoute: saveRoute,
            isOnDevice: isOnDevice,
            isOnServer: isOnServer,
            getAllOnDevice: getAllOnDevice,
            getPage: getPage,
            getPageContents: getPageContents,
            getCurrentRouteId: getCurrentRouteId,
            PageIter: PageIterator
        };

        /*
         * 
         */
        function getRoute(id) {
            /// <summary>
            /// gibt zur id gehörende Route zurück
            /// entweder lokal wenn vorhanden oder vom server
            /// </summary>
            /// <param name="id" ></param>

            var res = $q.defer();
            if (id === undefined) {
                //keine id angegeben, gebe aktuelle Route zurück, falls gesetzt, oder halt null             
                    res.resolve(route);
            }
            else if (id == route.id) {
                res.resolve(route);
            }
            else {
                if (isOnDevice(id)) {
                    console.log("from device");
                    res.resolve(getRouteFromDevice(id));
                }
                else {
                    console.log("from server");
                    res.resolve(getRouteFromServer(id));
                }
            }
           return res.promise;
        }

        /*
         * 
         */
        function getRouteFromServer(id) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="id" type="type"></param>
            /// <returns type=""></returns>
            var res = $q.defer();
            if (isOnServer(id) == true) {
                route['id'] = id;
                Page.get({ filter: 'id_route=' + id, related: 'content_by_id_page' })
                    .$promise.then(function (result) {
                        route.pages = result;
                        res.resolve(route);
                        console.log(result);
                        console.log(route);
                    });
            }
            else {
                route.id = id;
                route.pages = result;
                res.resolve(route);
                console.log("not on server");
            }
            return res.promise;
        }

        /*
         * 
         */
        function getRouteFromDevice(id) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="id" type="type"></param>
            /// <returns type=""></returns>
     
             var res = $q.defer();
             fileService.readFromFile("Route" + id + ".json")
                 .then(function (result) {
                     route = result;
                     res.resolve(route);
                     console.log(route);
                 });
            return res.promise;
          
        }

        /*
         * 
         */
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

        /*
         * 
         */
        function isOnDevice(id) {
            /// <summary>
            /// check, ob route lokal
            /// </summary>
            /// <param name="id" type="type"></param>
           
            return lokaleRouten.indexOf(id) >= 0;
        }

        /*
         * 
         */
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
            //return false;
            return true;
        }

        /*
         * 
         */
        function getAllOnDevice() {
            /// <summary>
            /// 
            /// </summary>
            /// <returns type=""></returns>
            return lokaleRouten;
        }

        /*
         * 
         */
        function getPage(page_pos) {
            /// <summary>
            /// Liefert die gesamte page an der Position page_pos der geladenen Route
            /// </summary>
            /// <param name="page_pos" >Page Position</param>
            /// <returns >Page an der Position oder null</returns>
            var res = $q.defer();
            for (var i = 0; i < route.pages.resource.length; i++) {
                if (route.pages.resource[i].pos == page_pos) {
                    res.resolve(route.pages.resource[i]);
                    break;
                }
            }
            return res.promise;
          //  var page = route.pages.resource[0].content_by_id_page[0].data_obj
        }

        /*
         * 
         */
        function getPageContents(page_pos, content_pos) {
            /// <summary>
            /// ohne content_pos die gesamte page als array zurück
            /// </summary>
            /// <param name="page_pos" type="type"></param>
            /// <param name="content_pos" type="type"></param>
            /// <returns type=""></returns>
            var res = $q.defer();
                getPage(page_pos).then(function (result) {
                    if (content_pos === undefined) {    //kein parameter gesetzt
                        res.resolve(result.content_by_id_page);
                    }
                    else {
                        //Array nicht unbedingt nach pos sortiert
                        for (var i = 0; i < result.content_by_id_page.length; i++) {
                            if (result.content_by_id_page[i].pos == content_pos) {
                                res.resolve(result.content_by_id_page[i]);
                                break;
                            }
                        }
                    }
                });
            return res.promise;
        }

        /*
         * 
         */
        function getCurrentRouteId() {
            return route.id;
        }

        /*
         * 
         */
        function PageIterator(routen_id) {
            var nextIndex = 0;
            var iteratedRoute,  numberOfPages;
           
            var initIter = initIter;

            if (routen_id === undefined || routen_id == route.id) {
                //PageIterator zur derzeit unter route gespeichertern Route
               return initIter();
            }
            else {
                //PageIterator zur derzeit nicht unter route gespeicherten Route
                getRoute(routen_id)
                    .then(function(result) {
                       return initIter();
                    });
            }
           
            function initIter() {
                iteratedRoute = route.id;
                numberOfPages = route.pages.resource.length || 0;
                return {
                    next: next
                };
            }
            
            function next() {
                if (nextIndex < numberOfPages) {
                    nextIndex++;
                    //index von 0 bis numberOfPages -1  ; position von 1 bis numberOfPages
                    return { value: getPage(nextIndex), done: false };
                }
                else {
                    return { done: true };
                }
            }
        }

        return service;
    }
})();
