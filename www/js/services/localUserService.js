/*
Copyright (c) 2016, Paul Koch

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
* */
(function () {
    'use strict';

    angular
        .module('placity.services')
        .factory('localUserService', localUserService);

    localUserService.$inject = ['fileService', '$q'];

    function localUserService(fileService, $q) {
        var localPlayer;

        return {
            getData: getData,
            setData: setData
        };

        function getData(field) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="field" type="type" optional="true"></param>
            /// <returns type="">Object oder value</returns>

            var data = $q.defer();

            if (localPlayer === undefined) {
                fileService.readFromFile('profile.json').then( function (result) {
                    console.log("result: " + result);
                   // if (result) {
                        localPlayer = result;
                    //  }
                        if (localPlayer != null) {
                            if (!field) {
                                data.resolve(localPlayer);
                            }
                            else {
                                data.resolve(localPlayer[field]);
                            }
                        }
                        else {
                            data.reject('no data');
                        }
                    
                });
                   
            }
            else {
                if (localPlayer != null) {
                    if (!field) {
                        data.resolve(localPlayer);
                    }
                    else {
                        data.resolve(localPlayer[field]);
                    }
                }
                else {
                    data.reject('no data');
                }
            }

            return data.promise;
        }


        function setData(lp) {
            /// <summary>
            /// Überschreibt localPlayer mit lp und schreibt in profile.json
            /// </summary>
            /// <param name="lp" type="Object"></param>
            localPlayer = lp;
            fileService.writeToFile('profile.json', lp);
        }

    }
})();