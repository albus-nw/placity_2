﻿// gibt mit .getData(param) die route mit der id param zurück
/*
 * 
 * 
 * Unnötig, bitte entfernen!!
 * gibt btw nicht die Route, sondern die Pages einer Route
 */

(function () {
    'use strict';

    angular
        .module('placity.services')
        .factory('getRouteById', getRouteById);

    getRouteById.$inject = ['Page'];

    function getRouteById(Page) {

        return {
            getData: function (param) {

                return Page.get({ id_route: 'param', related: 'content_by_id_page' });
            }
        };
    };


})();