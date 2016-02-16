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
      .factory('PlaRouteService', PlaRouteService);

    PlaRouteService.$inject = ['fileService', 'Page', 'Route', '$q', 'Routentag'];


    function PlaRouteService(fileService, Page, Route, $q, Routentag) {
        var route = {};
        route['id'] = {};
        route['pages'] = {};
        var lokaleRouten = [];
        cacheLokaleRouten();


        var service = {
            getRoute: getRoute,
            getRouteFromServer: getRouteFromServer,
            getRouteFromDevice: getRouteFromDevice,
            searchPerTag: searchPerTag,
            saveRoute: saveRoute,
            deleteRoute: deleteRoute,
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
            /// wird in der aktuellen Routenvariable hinterlegt
            /// </summary>
            /// <param name="id" >ID der angeforderten Route</param>
            /// <returns type="promise">Promise zur angeforderten Route</returns>

            var res = $q.defer();
            if (id === undefined) {
                //keine id angegeben, gebe aktuelle Route zurück, falls gesetzt, oder halt null             
                res.resolve(route);
            }
            else if (id == route.id) {
                //die angeforderte Route entspricht der, die bereits in der Routenvariable des PlaRouteService hinterlegt ist
                res.resolve(route);
            }
            else {
                if (isOnDevice(id)) {
                    //console.log("from device");
                    res.resolve(getRouteFromDevice(id));
                }
                else {
                    //console.log("from server");
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
            /// <param name="id">ID der Route</param>
            /// <returns type="">Promise zur angeforderten Route</returns>
            var res = $q.defer();
            if (isOnServer(id) == true) {
                Route.get({ filter: 'id=' + id }).$promise.then(
                    function (result) {
                        result = result.resource[0];
                        Object.keys(result).forEach(
                            //alle Eigenschaften der vom Server geholten Route werden in der Routenvariable des Service hinterlegt
                            function (key) {
                                route[key] = result[key];
                                //console.log("key "+ key + " route[key] " + route[key]);
                            });
                    });

                Page.get({ filter: 'id_route=' + id, related: 'content_by_id_page' })
                    .$promise.then(
                    //alle Pages, die zur Route gehören, sind in einer eigenen Tabelle in der Datenbank hinterlegt
                    //hier werden diese geholt und in der Routenvariable des Service hinterlegt
                    function (result) {
                        route.pages = result;
                        console.log(route);
                        res.resolve(route);
                        // console.log(result);  
                    });
            }
            else {
                //Route nicht auf Server; id und pages der Routenvariable des Service werden auf null gesetzt; das Promise wird rejected
                route.id = null;
                route.pages = null;
                res.reject("not on server");
                //console.log("not on server");
            }
            return res.promise;
        }

        /*
         * 
         */
        function getRouteFromDevice(id) {
            /// <summary>
            /// Route aus dem lokalen Dateisystem holen;
            /// wird in der aktuellen Routenvariable hinterlegt
            /// </summary>
            /// <param name="id">ID der Route</param>
            /// <returns type="">Promise für die Route</returns>

            var res = $q.defer();
            fileService.readFromFile("Route" + id + ".json")
                //alle Routen sind im Format "Route<id>.json" auf dem lokalen Dateisystem gespeichert
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
            /// speichert übergebene Route im lokalen Dateisystem
            /// im Format "Route<id>.json", id wird aus der übergebenen Route übernommen
            /// eine Route mit dieser ID wird überschrieben, falls vorhanden
            /// </summary>
            /// <param name="route" type="object">Die zu speichernde Route</param>
            var fileName = "Route" + route['id'] + ".json";
            var pathToFile = cordova.file.dataDirectory + fileName;
            lokaleRouten.push({ id_route: route.id, name: route.name, fileName: fileName, pathToFile: pathToFile });
            //in der Array-Variable lokaleRouten wird das ebenfalls hinterlegt
            fileService.writeToFile(fileName, route);
        }

        /*
         * 
         */
        function deleteRoute(name) {
            /// <summary>
            /// Route aus dem lokalen Dateisystem löschen
            /// </summary>
            /// <param name="name">Name der zu löschenden Route</param>
            fileService.removeFile(name);   //aus Dateisystem löschen
            for (var i = 0; i < lokaleRouten.length; i++) {
                //aus dem lokaleRouten-Array entfernen
                if (lokaleRouten[i].fileName == name) {
                    lokaleRouten.splice(i, 1);
                    break;
                }
            }
        }

        /*
         * 
         */
        function isOnDevice(id) {
            /// <summary>
            /// check, ob route lokal
            /// </summary>
            /// <param name="id"></param>
            var b = false;
            for (var i = 0; i < lokaleRouten.length; i++) {
                if (lokaleRouten[i].id_route && lokaleRouten[i].id_route == id) {
                    b = true;
                    break;
                }
            }
            console.log("is on device: " + b);
            return b;
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
            return Route.get({ id: id },function () {
                console.log("route gefunden");
                return true;
            },function() {
                console.log("Route nicht auf Server");
                return false;
            });
               
        }

        /*
         * 
         */
        function getAllOnDevice() {
            /// <summary>
            /// Getter für Array mit Informationen über lokal gespeicherte Routen
            /// Objekte der Form 
            /// {   fileName: "value",
            ///     pathToFile: "value",
            ///     name: "value",
            ///     id_route: "value"
            ///  }
            /// </summary>
            /// <returns type="array"> object array</returns>
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
            /// <returns >Promise für Page an der Position oder null</returns>
            var res = $q.defer();
            for (var i = 0; i < route.pages.resource.length; i++) {
                if (route.pages.resource[i].pos == page_pos) {
                    res.resolve(route.pages.resource[i]);
                    break;
                }
            }
            return res.promise;
        }


        /*
         * 
         */
        function getPageContents(page_pos, content_pos) {
            /// <summary>
            /// Getter für Content an einer bestimmten Position in einer Page an bestimmter Position in der aktuellen Route
            /// ohne content_pos die gesamte page als array von Contents zurück
            /// </summary>
            /// <param name="page_pos" type="int">Position der Page</param>
            /// <param name="content_pos" type="int">Position des Contents</param>
            /// <returns type="">Promise für PageContent bzw Content-Array</returns>
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
            /// <summary>
            /// Gibt die ID der aktuell in der Routenvariablen hinterlegten Route
            /// </summary>
            /// <returns type="int">ID der Route</returns>
            return route.id;
        }

        /*
         * 
         */
        function PageIterator(routen_id) {
            /// <summary>
            /// Ein Iterator über eine Route
            /// next() liefert die nächste Page einer Route
            /// </summary>
            /// <param name="routen_id" type="type"></param>
            /// <returns type="">Objekt zum Iterieren über die Pages einer Route</returns>
            var nextIndex = 0;
            var iteratedRoute, numberOfPages;

            var initIter = initIter;

            if (routen_id === undefined || routen_id == route.id) {
                //PageIterator zur derzeit unter route gespeichertern Route
                return initIter();
            }
            else {
                //PageIterator zur derzeit nicht unter route gespeicherten Route; aktuelle Route wird geändert
                getRoute(routen_id)
                    .then(function (result) {
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
                /// Nächste Page
                /// </summary>
                /// <returns type="object">Objekt: {value: nächste Page, done: boolean (-->false für keine weitere Pages) }</returns>
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
                           //hier nochmal holen des namen der zur id_route gehörenden Route
                           Route.get({ filter: 'id=' + current.id_route, fields: 'name' }).$promise.then(function (result) {
                               current.name = result.resource[0].name;
                           });
                       });
                       res.resolve(aTreffer);
                   });
            return res.promise;
        }

        function cacheLokaleRouten() {
            /// <summary>
            /// alle Dateien lesen, dann für jede Datei, die eine eine Route darstellt, einen Eintrag in lokaleRouten-Array einfügen
            /// </summary>
            fileService.getAllFiles().then(function (entries) {
                entries.forEach(function (current, index, array) {
                    if (current.name.indexOf('Route') == 0) {
                        console.log("reading route: " + current.name);
                        fileService.readFromFile(current.name).then(function (res) {
                            lokaleRouten.push({
                                fileName: current.name,
                                pathToFile: current.nativeURL,
                                name: res.name,
                                id_route: res.id
                            });
                        });
                    }
                });
            });
        }

        return service;
    }
})();
