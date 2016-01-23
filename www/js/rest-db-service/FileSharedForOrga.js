
(function () {
    'use strict';

/**
 * REST-DB-Service - created by Alexander Weiß 01.2016
 */
angular.module('restDataServices')
    .factory('FileSharedForOrga', FileSharedForOrga);

    FileSharedForOrga.$inject = ['$resource'];

    /* @ngInject */
    /**
     * @ngdoc service
     * @name FileSharedForOrga
     * @requires $resource
     * @requires ngResource
     *
     * created by Alexander Weiß
     *
     * @description
     *
     *  * ---
     * CRUD - Operationen via REST-Schnittstelle für den Entitytypen FileSharedForOrga
     *
     * @example:
     *  - get:       FileSharedForOrga.get({id:'1',related:'*'})   selectiert FileSharedForOrga mit id=1 und führt alle Fremdschlüssel
     *                                                  Assoziationen an.
     *  - create:    FileSharedForOrga.get({Key:VALUE})            erstellt einen neuen Eintrag mit Key:VALUE
     *                                                  Rückgabe: ID
     *  - replace:   FileSharedForOrga.replace({id:1,KEY:VALUE})   ersetzt KEY:VALUE in FileSharedForOrga.id=1
     *  - update:    FileSharedForOrga.update({id:1,KEY:VALUE})    update von KEY:VALUE in FileSharedForOrga.id=1
     *  - delete:    FileSharedForOrga.remove({id:1})              löscht FileSharedForOrga.id=1
     *               FileSharedForOrga.remove({filter:'id>2'})     löscht alle Einträge mit ID > 2
     */
        function FileSharedForOrga ($resource) {
        return $resource('/api/v2/db/_table/FileSharedForOrga/:id', {id: '@id'}, {
            /**
             * @ngdoc function
             * @name FileSharedForOrga.get
             * @module RestDataServices
             * @kind function
             *
             * @description
             * FileSharedForOrga.get() Datenbank-Selection der Tabelle FileSharedForOrga
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
             * @name FileSharedForOrga.create
             * @module RestDataServices
             * @kind function
             *
             * @description
             * FileSharedForOrga.create() erstellt eine Instanz des Entity-Typs FileSharedForOrga
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
             * @returns {integer} id of created FileSharedForOrga instance
             */
            create: {
                method: 'POST'
                // url: '/api/v2/FileSharedForOrga/create'
                // You can provide different urls for different CRUD operations
            },
            /**
             * @ngdoc function
             * @name FileSharedForOrga.replace
             * @module RestDataServices
             * @kind function
             *
             * @description
             * FileSharedForOrga.replace() ersetzen von einzelen Feldern einer Instanz des Typs FileSharedForOrga
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
             * @returns {integer} id of created FileSharedForOrga instance
             */
            replace: {
                method: 'PUT'
            },
            /**
             * @ngdoc function
             * @name FileSharedForOrga.update
             * @module RestDataServices
             * @kind function
             *
             * @description
             * FileSharedForOrga.update() update von einzelen Feldern einer Instanz des Typs FileSharedForOrga
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
             * @returns {integer} id of created FileSharedForOrga instance
             */
            update: {
                method: 'PATCH'
            },
            /**
             * @ngdoc function
             * @name FileSharedForOrga.remove
             * @module RestDataServices
             * @kind function
             *
             * @description
             * FileSharedForOrga.remove() löschen einer Instanz des Typs FileSharedForOrga
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
            //    return FileSharedForOrga.create();
            //}
        })
    }

})();


