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