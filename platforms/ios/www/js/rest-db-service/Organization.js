
(function () {
    'use strict';

/**
 * REST-DB-Service - created by Alexander Weiß 01.2016
 */
angular.module('restDataServices')
    .factory('Organization', Organization);

    Organization.$inject = ['$resource'];

    /* @ngInject */
    /**
     * @ngdoc service
     * @name Organization
     * @requires $resource
     * @requires ngResource
     *
     * created by Alexander Weiß
     *
     * @description
     *
     *  * ---
     * CRUD - Operationen via REST-Schnittstelle für den Entitytypen Organization
     *
     * @example:
     *  - get:       Organization.get({id:'1',related:'*'})   selectiert Organization mit id=1 und führt alle Fremdschlüssel
     *                                                  Assoziationen an.
     *  - create:    Organization.get({Key:VALUE})            erstellt einen neuen Eintrag mit Key:VALUE
     *                                                  Rückgabe: ID
     *  - replace:   Organization.replace({id:1,KEY:VALUE})   ersetzt KEY:VALUE in Organization.id=1
     *  - update:    Organization.update({id:1,KEY:VALUE})    update von KEY:VALUE in Organization.id=1
     *  - delete:    Organization.remove({id:1})              löscht Organization.id=1
     *               Organization.remove({filter:'id>2'})     löscht alle Einträge mit ID > 2
     */
        function Organization ($resource) {
        return $resource('/api/v2/db/_table/Organization/:id', {id: '@id'}, {
            /**
             * @ngdoc function
             * @name Organization.get
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Organization.get() Datenbank-Selection der Tabelle Organization
             * siehe [APIDocs](http://df.albus-it.com/dreamfactory/dist/index.html#/apidocs)
             *
             * @param {

                {string}  filter          SQL-like filter to limit the records to retrieve
                {integer} limit           Set to limit the filter results.
                {string}  order           SQL-like order containing field and direction for filter results.
                {string}  group           Comma-delimited list of the fields used for grouping of
                                          filter results.
                {integer} offset          Set to offset the filter results to a particular record count.
                {boolean} include_count   Include the total number of filter results in returned metadata.
                {string}  ids             Comma-delimited list of the identifiers of the 
                                          records to retrieve.
                {string}  id_field        Comma-delimited list of the fields used as identifiers
                {string}  id_type         Comma-delimited list of the field types used as 
                                          identifiers for the table
                {string}  continue        continue processing even after one action fails
                {string}  fields          comma-delimited list of properties to be returned
                                          for each resource
                {string}  related         Comma-delimited list of related names to 
                                          retrieve for each resource.
                {boolean} include_schema  Include the schema of the table queried in returned metadata.
                                    params = {  [id:{integer}][,id_field:{string}][,id_type:{string}]
                                                [,fields:{string}][,related:{string}]               }
                                         |   
                                             {  [filter:'filterstring'][,limit:{integer}][,order:{string}]
                                                [,group:{string}][,offset:{integer}][,nclude_count{bool}]
                                                [,ids:{string}][,id_field:{string}][,id_type:{string}]
                                                [,continue:{bool}][,fields:{string}][,related:{string}]
                                                [,include_schema:{bool}]}                           
              
               } || {
                {string}  id             Identifier of the record to retrieve.   
                [,{string}  id_field     Comma-delimited list of the fields used as identifiers ]
                [,{string}  id_type      Comma-delimited list of the field types used as        
                                         identifiers for the Tabelle                            ]
                [,{string}  fields       comma-delimited list of properties to be returned
                                         for each resources                                     ]
                [,{string}  related      Comma-delimited list of related names to 
                                         retrieve for each resource.                            ]

               }
             * @returns {JSON} Selection
             */
            get: {
                method: 'GET',
                isArray: false
            },
            /**
             * @ngdoc function
             * @name Organization.create
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Organization.create() erstellt eine Instanz des Entity-Typs Organization
             * siehe [APIDocs](http://df.albus-it.com/dreamfactory/dist/index.html#/apidocs)
             *
             * @param
             *  {
             *      @param {json}       body      Data containing name-value pairs of records to create.
             *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
             *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
             *     [,@param {bool}      continue  In batch scenarios:continue processing after one action fails ]
             *     [,@param {bool}      rollback  rollback all actions if one action fails                      ]
             *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
             *     [,@param {string}    related   Comma-delimited list of related keys to retrieve              ]
             *  }   params JSON mit Parametern
             *
             * @returns {integer} id of created Organization instance
             */
            create: {
                method: 'POST'
                // url: '/api/v2/Organization/create'
                // You can provide different urls for different CRUD operations
            },
            /**
             * @ngdoc function
             * @name Organization.replace
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Organization.replace() ersetzen von einzelen Feldern einer Instanz des Typs Organization
             * siehe [APIDocs](http://df.albus-it.com/dreamfactory/dist/index.html#/apidocs)
             *
             * @param
             *  {
             *      @param {json}       body      Data containing name-value pairs of records to create.
             *     [,@param {string}    ids       Comma-delimited list of the identifiers                       ]
             *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
             *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
             *     [,@param {bool}      continue  In batch scenarios:continue processing after one action fails ]
             *     [,@param {bool}      rollback  rollback all actions if one action fails                      ]
             *     [,@param {string}    filter    SQL-like filter to limit the records to retrieve.             ]
             *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
             *     [,@param {string}    related   Comma-delimited list of related keys to retrieve              ]
             *  }
             *   ||
             *  {   @param  {string}    id        Identifier of the record to update.
                 *      ,@param  {json}      body      Data containing name-value pairs of records to create.
                 *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
                 *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
                 *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
                 *     [,@param {string}    related   Comma-delimited list of related keys to retrieve              ]
                 *   }
             *
             *     params JSON mit Parametern
             *
             * @returns {integer} id of created Organization instance
             */
            replace: {
                method: 'PUT'
            },
            /**
             * @ngdoc function
             * @name Organization.update
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Organization.update() update von einzelen Feldern einer Instanz des Typs Organization
             * siehe [APIDocs](http://df.albus-it.com/dreamfactory/dist/index.html#/apidocs)
             *
             * @param
             *  {
             *      @param {json}       body      Data containing name-value pairs of records to create.
             *     [,@param {string}    ids       Comma-delimited list of the identifiers                       ]
             *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
             *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
             *     [,@param {bool}      continue  In batch scenarios:continue processing after one action fails ]
             *     [,@param {bool}      rollback  rollback all actions if one action fails                      ]
             *     [,@param {string}    filter    SQL-like filter to limit the records to retrieve.             ]
             *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
             *     [,@param {string}    related   Comma-delimited list of related keys to retrieve              ]
             *  }
             ||
             {   @param  {string}    id        Identifier of the record to update.
             *     ,@param  {json}      body      Data containing name-value pairs of records to create.
             *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
             *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
             *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
             *     [,@param {string}    related   Comma-delimited list of related keys to retrieve              ]
             *  }
             *
             *     params JSON mit Parametern
             *
             * @returns {integer} id of created Organization instance
             */
            update: {
                method: 'PATCH'
            },
            /**
             * @ngdoc function
             * @name Organization.remove
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Organization.remove() löschen einer Instanz des Typs Organization
             * siehe [APIDocs](http://df.albus-it.com/dreamfactory/dist/index.html#/apidocs)
             *
             * @param
             *  {
             *      @param {json}       body      Data containing name-value pairs of records to create.
             *     [,@param {string}    ids       Comma-delimited list of the identifiers                       ]
             *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
             *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
             *     [,@param {bool}      continue  In batch scenarios:continue processing after one action fails ]
             *     [,@param {bool}      rollback  rollback all actions if one action fails                      ]
             *     [,@param {string}    filter    SQL-like filter to limit the records to retrieve.             ]
             *     [,@param {bool}      force     to delete all resources in the given table                    ]
             *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
             *     [,@param {string}    related   Comma-delimited list of related keys to retrieve              ]
             *  }
             *  ||
             *  {   @param  {string}    id        Identifier of the record to update.
                 *     [,@param {string}    id_field  Comma-delimited list of the fields used as identifiers        ]
                 *     [,@param {string}    id_type   Comma-delimited list of the field types used as identifiers   ]
                 *     [,@param {string}    fields    Comma-delimited list of properties to be returned; default: * ]
                 *  }
             *
             *     params JSON mit Parametern
             *
             */
            remove: {
                method: 'DELETE'
            }
            //createNewInstance: function (params) {
            //    return Organization.create();
            //}
        })
    }

})();


