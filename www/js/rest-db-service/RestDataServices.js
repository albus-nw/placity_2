/*
Copyright (c) 2016, Alexander Weiß

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
*/
/**
 * created by Alexander Weiß on 16.01.2016
 */

(function() {
    'use strict';

  var mod=  angular.module('restDataServices', ['ng',
        'ngResource']);
       mod.factory('Dataservice', Dataservice);

    Dataservice.$inject = [
        'Address','Content','Contenttype',
        'FileSharedForGroup','FileSharedForOrga',
        'Group','Groupmember','Highscore','Mediafile'
        ,'One_Time_Access_Code','OrgaMember','Organization','Page',
        'Player','Route','Routentag','Tag','User','User_config'];

    /* @ngInject */
    function Dataservice(Address,Content,Contenttype,
        FileSharedForGroup,FileSharedForOrga,
        Group,Groupmember,Highscore,Mediafile
        ,One_Time_Access_Code,OrgaMember,Organization,Page,
        Player,Route,Routentag,Tag,User,User_config) {
        var service = {
            getMediafiles: getMediafiles,
            getMediafilesByType: getMediafilesByType
        };
        return service;

        ////////////////
        /**
         *
         * @param {string} id_user
         * @param {video|audio|image}type
         * @returns {*}
         */
        function getMediafilesByType(id_user,type) {
            return Mediafile.get({filter:'id_user:'+id_user & 'type:' +type });
        }

        /**
         *
         * @param filter
         * @returns {*}
         */
        function getMediafiles(filter) {
            return Mediafile.get(filter);
        }
    }

})();




