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
(function () {
    'use strict';

/**
 * REST-DB-Service - created by Alexander Weiß 01.2016
 */
angular.module('restDataServices')
    .factory('Group', Group);

    Group.$inject = ['$resource'];

    /* @ngInject */
    /**
     * @ngdoc service
     * @name Group
     * @requires $resource
     * @requires ngResource
     *
     * created by Alexander Weiß
     *
     * @description
     *
     *  * ---
     * CRUD - Operationen via REST-Schnittstelle für den Entitytypen Group
     *
     * @example:
     *  - get:       Group.get({id:'1',related:'*'})   selectiert Group mit id=1 und führt alle Fremdschlüssel
     *                                                  Assoziationen an.
     *  - create:    Group.get({Key:VALUE})            erstellt einen neuen Eintrag mit Key:VALUE
     *                                                  Rückgabe: ID
     *  - replace:   Group.replace({id:1,KEY:VALUE})   ersetzt KEY:VALUE in Group.id=1
     *  - update:    Group.update({id:1,KEY:VALUE})    update von KEY:VALUE in Group.id=1
     *  - delete:    Group.remove({id:1})              löscht Group.id=1
     *               Group.remove({filter:'id>2'})     löscht alle Einträge mit ID > 2
     */
        function Group ($resource) {
        return $resource('/api/v2/db/_table/Group/:id', {id: '@id'}, {
            /**
             * @ngdoc function
             * @name Group.get
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Group.get() Datenbank-Selection der Tabelle Group
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
             * @name Group.create
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Group.create() erstellt eine Instanz des Entity-Typs Group
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
             * @returns {integer} id of created Group instance
             */
            create: {
                method: 'POST'
                // url: '/api/v2/Group/create'
                // You can provide different urls for different CRUD operations
            },
            /**
             * @ngdoc function
             * @name Group.replace
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Group.replace() ersetzen von einzelen Feldern einer Instanz des Typs Group
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
             * @returns {integer} id of created Group instance
             */
            replace: {
                method: 'PUT'
            },
            /**
             * @ngdoc function
             * @name Group.update
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Group.update() update von einzelen Feldern einer Instanz des Typs Group
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
             * @returns {integer} id of created Group instance
             */
            update: {
                method: 'PATCH'
            },
            /**
             * @ngdoc function
             * @name Group.remove
             * @module RestDataServices
             * @kind function
             *
             * @description
             * Group.remove() löschen einer Instanz des Typs Group
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
            //    return Group.create();
            //}
        })
    }

})();


