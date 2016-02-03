(function () {
    'use strict';

    angular
        .module('placity.services')
        .factory('localUserService', localUserService);

    localUserService.$inject = ['fileService'];

    function localUserService(fileService) {
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
            if (localPlayer === undefined) {
                fileService.readFromFile('profile.json', function (result) {
                    console.log("result: " + result);
                    if (result) {
                        localPlayer = JSON.parse(result);
                        if (!field) {
                            return localPlayer;
                        }
                        else {
                            return localPlayer[field];
                        }
                    }
                    else {
                        localPlayer = null;
                        return 'no data';
                    }
                });
                   
            }
            else {
                if (localPlayer != null) {
                    if (!field) {
                        return localPlayer;
                    }
                    else {
                        return localPlayer[field];
                    }
                }
                else {
                    return 'no data';
                }
            }
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