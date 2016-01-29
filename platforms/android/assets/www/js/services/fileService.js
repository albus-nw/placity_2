(function () {
    'use strict';

    angular
        .module('placity.services')
        .factory('fileService', fileService);

    fileService.$inject = [];

    function fileService() {
        var service = {
            readFromFile : readFromFile,
            writeToFile : writeToFile
        };

        return service;

         function readFromFile(fileName, callback) {
            var pathToFile = cordova.file.dataDirectory + fileName;
            window.resolveLocalFileSystemURL(pathToFile, function (fileEntry) {
                fileEntry.file(function (file) {
                    var reader = new FileReader();

                    reader.onloadend = function (e) {
                        var result = this.result;
                        // Make sure the callback is a function​
                        if (typeof callback === "function") {
                            // Call it, since we have confirmed it is callable​
                            callback(result);
                        }
                        console.log('adadad<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>vor dem retuern 256 >>>>>>>>>>>>>>akdgkg   ' + result + ' ja...');

                        //return JSON.parse(this.result);
                    };

                    reader.readAsText(file);
                }, errorHandler.bind(null, fileName));
            }, errorHandler.bind(null, fileName));
         };

        //in Dateisystem schreiben
        ////https://www.neontribe.co.uk/cordova-file-plugin-examples/
         function writeToFile(fileName, data) {
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
         };


    }
})();