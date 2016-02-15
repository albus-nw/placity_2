/*
 * created by pk
 * Service zum Lesen, Schreiben und Löschen von Dateien im lokalen FileSystem
 */
(function () {
    'use strict';

    angular
        .module('placity.services')
        .factory('fileService', fileService);

    fileService.$inject = ['$q'];

    function fileService($q) {
        var service = {
            readFromFile : readFromFile,
            writeToFile : writeToFile, 
            getAllFiles: getAllFiles,
            removeFile: removeFile
        };

        return service;

        function readFromFile(fileName) {
            /// <summary>
            /// Lesen aus einer json-Datei, verarbieten des results in der Callback-Funktion
            /// </summary>
            /// <param name="fileName" type="type"></param>
            /// <returns type="promise"></returns>
           
            var pathToFile = cordova.file.dataDirectory + fileName;

            var deferred = $q.defer();

            window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();

                    reader.onloadend = function (e) {
                        var result = this.result;
                        if (result) {
                            deferred.resolve(JSON.parse(result));
                        }
                        else {
                            deferred.reject("Ohhh...noooo");
                        }
                        
                    };

                    reader.readAsText(file);
                }, errorHandler.bind(null, fileName));
            }, errorHandler.bind(null, fileName));

            return deferred.promise;
        };

        function writeToFile(fileName, data) {
            /// <summary>
            /// Schreibt data lokal in Dateisystem, sollte Datei mit dem Namen fileName nicht existieren, wird diese erstellt, andernfalls überschrieben
            /// </summary>
            /// <param name="fileName" type="file"></param>
            /// <param name="data" type="type"></param>
             data = JSON.stringify(data, null, '\t');
             window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
                 directoryEntry.getFile(fileName, { create: true }, function (fileEntry) {
                     fileEntry.createWriter(function (fileWriter) {
                         fileWriter.onwriteend = function (e) {
                             // for real-world usage, you might consider passing a success callback
                             console.log('>>>>Write of file "' + fileName + '"" completed.');
                         };

                         fileWriter.onerror = function (e) {
                             // you could hook this up with our global error handler, or pass in an error callback
                             console.log('>>>>>>>Write failed: ' + e.toString());
                         };

                         var blob = new Blob([data], { type: 'text/plain' });
                         fileWriter.write(blob);
                     }, errorHandler.bind(null, fileName));
                 }, errorHandler.bind(null, fileName));
             }, errorHandler.bind(null, fileName));
         };
        

         function errorHandler(fileName, e) {
             var msg = '';

             switch (e.code) {
                 case FileError.QUOTA_EXCEEDED_ERR:
                     msg = 'Storage quota exceeded';
                     break;
                 case FileError.NOT_FOUND_ERR:
                     msg = 'File not found';
                     break;
                 case FileError.SECURITY_ERR:
                     msg = 'Security error';
                     break;
                 case FileError.INVALID_MODIFICATION_ERR:
                     msg = 'Invalid modification';
                     break;
                 case FileError.INVALID_STATE_ERR:
                     msg = 'Invalid state';
                     break;
                 default:
                     msg = 'Unknown error';
                     break;
             };

             console.log('Error (' + fileName + '): ' + msg);
         }




         function getAllFiles() {
             /// <summary>
             /// Array aller Datein auf dem Gerät
             /// </summary>
             /// <returns type="">Promise für Array aller Datein auf dem Gerät</returns>
             var deferred = $q.defer();

             function success(entries) {
                 deferred.resolve(entries);
             }

             function fail(error) {
                 deferred.reject("Failed to list directory contents: " + error.code);
             }

             window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
                 // Get a directory reader
                 var directoryReader = directoryEntry.createReader();

                 // Get a list of all the entries in the directory
                 directoryReader.readEntries(success, fail);
             });

             return deferred.promise;
         }

         function removeFile(fileName) {
             /// <summary>
             /// Datei löschen
             /// </summary>
             /// <param name="fileName">Der Dateienname, required</param>
             function success(entries) {
                 var i;
                 for (i = 0; i < entries.length; i++) {
                     if (entries[i].name == fileName) {
                         entries[i].remove(function () {
                             console.log(fileName + " removed!");
                         },
                         function (error) {
                             console.log("Error removing file " + fileName + " : " + error.code);
                         });
                         break;
                     }
                 }
             }

             function fail(error) {
                 console.log("Error removing file " + error.code);
             }

             window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (directoryEntry) {
                 var directoryReader = directoryEntry.createReader();

                 directoryReader.readEntries(success, fail);
             });
         }
    }
})();