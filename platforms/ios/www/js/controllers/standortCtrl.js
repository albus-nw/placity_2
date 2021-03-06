﻿/**
 * created by pk
 */
(function () {
    'use strict';

    angular
        .module('placity.controllers')
        .controller('standortCtrl', standortCtrl);

    standortCtrl.$inject = []; 

    function standortCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'standortCtrl';
        vm.geolocation = ".......";
        vm.getPos = getPos;
        vm.map = new OpenLayers.Map("map");
        vm.map.addLayer(new OpenLayers.Layer.OSM());
        vm.map.zoomToMaxExtent();
        vm.lat;
        vm.lon;
        vm.markers = new OpenLayers.Layer.Markers("Markers");
        vm.map.addLayer(vm.markers);


        // onSuccess Callback
        // This method accepts a Position object, which contains the
        // current GPS coordinates
        //
        function onSucces(position) {
            this.geolocation = 'Latitude: ' + position.coords.latitude + '\n' +
              'Longitude: ' + position.coords.longitude + '\n' +
              'Altitude: ' + position.coords.altitude + '\n' +
              'Accuracy: ' + position.coords.accuracy + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
              'Heading: ' + position.coords.heading + '\n' +
              'Speed: ' + position.coords.speed + '\n' +
              'Timestamp: ' + position.timestamp + '\n';
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;

            var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
            var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
            var position = new OpenLayers.LonLat(this.lon, this.lat).transform(fromProjection, toProjection);
            var zoom = 15;
            this.map.setCenter(position, zoom);
            this.markers.addMarker(new OpenLayers.Marker(position));
        };
        // onError Callback receives a PositionError object
        //
        function onError(error) {
            this.geolocation = 'code: ' + error.code + '\n' +
                  'message: ' + error.message + '\n';
        };

        function getPos() {
            navigator.geolocation.getCurrentPosition(onSucces.bind(vm), onError.bind(vm));
        };

        vm.getPos();
    }
})();
