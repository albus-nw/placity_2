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

    PlaRouteService.$inject = ['fileService', 'Page', 'Route', '$q', 'Routentag'];
    
    
    function PlaRouteService(fileService, Page, Route, $q, Routentag) {
        var route = {};
        route['id'] = {};
        route['pages'] = {};
        console.log("ding ding ding");
        var lokaleRouten = [];
        fileService.readFromFile('lokaleRouten.json').then(function (result) { lokaleRouten = result; });

        var service = {
            getRoute: getRoute,
            getRouteFromServer: getRouteFromServer,
            getRouteFromDevice: getRouteFromDevice,
            searchPerTag: searchPerTag,
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
            /// Route von Server holen und zurückgeben
            /// wird in der aktuellen Routenvariable hinterlegt
            /// </summary>
            /// <param name="id" type="type"></param>
            /// <returns type=""></returns>
            var res = $q.defer();
            if (isOnServer(id) == true) {
                Route.get({ filter: 'id=' + id }).$promise.then(function (result) {
                    result = result.resource[0];
                    Object.keys(result).forEach(function(key) {
                        route[key] = result[key];
                        console.log("key "+ key + " route[key] " + route[key]);
                    });
                });
               
               // route['id'] = id;
                Page.get({ filter: 'id_route=' + id, related: 'content_by_id_page' })
                    .$promise.then(function (result) {
                        route.pages = result;
                        console.log(route);
                        res.resolve(route);
                       // console.log(result);
                        
                    });
            }
            else {
                route.id = null;
                route.pages = null;
                res.reject("not on server");
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
            var fileName = "Route" + route['id'] + ".json";
            var pathToFile = cordova.file.dataDirectory + fileName;
            lokaleRouten.push({ id_route: route.id, name: route.name, fileName: fileName, pathToFile: pathToFile });
            fileService.writeToFile(fileName, route);
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
            return false;
            
        }

        /*
         * 
         */
        function getAllOnDevice() {
            /// <summary>
            /// 
            /// </summary>
            /// <returns type=""></returns>
            var res = $q.defer();
            if (lokaleRouten.length > 1) {
                res.resolve(lokaleRouten);
            }
            else {
                fileService.readFromFile('lokaleRouten.json').then(function (result) {
                    lokaleRouten = result;
                    res.resolve(lokaleRouten);
                });
            }
            return res.promise;
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
            /// <summary>
            /// 
            /// </summary>
            /// <param name="routen_id" type="type"></param>
            /// <returns type="">Objekt zum Iterieren über die Pages einer Route</returns>
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
                /// <summary>
                /// 
                /// </summary>
                /// <returns type="">Objekt: value: nächste Page, done: boolean, false für keine weitere Pages</returns>
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

        /*
         * 
         * 
         */
        function searchPerTag(sTag) {
            /// <summary>
            /// Routen nach Tag suchen
            /// Returns promise für ein Array von { id_route: " ", name: " ", tag_name: " " }
            /// </summary>
            /// <param name="sTag" type="string">Tagname für den gesucht werden soll</param>
            var res = $q.defer();
            Routentag.get({ filter: 'tag_name=' + sTag })
               .$promise.then(
                   function (result) {
                      var aTreffer = result.resource;
                       aTreffer.forEach(function (current, index, array) {
                           Route.get({ filter: 'id=' + current.id_route, fields: 'name' }).$promise.then(function (result) {
                                current.name = result.resource[0].name;
                           });
                       });
                       res.resolve(aTreffer);
                   });
            return res.promise;
        }

        return service;
    }
})();
