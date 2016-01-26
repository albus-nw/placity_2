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




