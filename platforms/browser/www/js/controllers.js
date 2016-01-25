var controllers = angular.module('Controllers', []);

controllers.buttons = {};
controllers.buttons.hauptmenu = [
    {
        "value": "Ergebnisse",
        "href": "#/Ergebnisse",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Routen",
        "href": "#/Routen",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Optionen",
        "href": "#/Optionen",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Profil",
        "href": "#/Profil",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "Abmelden",
        "href": "#/Abmelden",
        "class": "btn btn-primary menuButton",
        "ng-click": "beep(1)"
    }
];

controllers.buttons.routen = [
    {
    "value": "QR-Code scannen",
    "href": "#/QrScan",
    "class": "btn btn-primary menuButton"
},
    {
        "value": "Route online suchen",
        "href": "#/RouteOnline",
        "class": "btn btn-primary menuButton",
        "ng-click": "$scope.vibe()"
    },
    {
        "value": "lokale Routen",
        "href": "#/RouteLokal",
        "class": "btn btn-primary menuButton",
        "ng-click": "vibe()"
    },
    {
        "value": "RoutenID",
        "href": "#/RouteId",
        "class": "btn btn-primary menuButton"
    },
    {
        "value": "BullshitTaste",
        "href": "",
        "class": "btn btn-primary menuButton"
    }
];

controllers.buttons.options = [
    {
        "value": "Standort",
        "href": "#/Standort",
        "class": "btn btn-primary menuButton"
    }
];

controllers.buttons.standort = [
    {
        "value": "Aktualisieren",
        "class": "btn btn-primary btn-sm",
      
    }
];

//console.log(controllers.buttons);


//global playerName
playerName = null;

controllers.controller("indexCtrl",['$scope', '$location', function ($scope, $location) {
    $scope.playerName = "";
    //hier: playerName aus datei lesen, wenn nicht vorhanden, auf login routen und datei schreiben dort
    if (!playerName) {
        $location.path('/Login');

    }
    else {
        $scope.playerName = playerName;
    }

    $scope.buttons = controllers.buttons.hauptmenu;

    $scope.beep = function () {
        navigator.notification.beep(1);
    };
    $scope.vibe = function () {
        navigator.vibrate(292);
    };
  
}]);

controllers.controller("loginCtrl", ['$scope', '$location', function ($scope, $location) {
    
    $scope.login = function () {
        playerName = $scope.playerName + "";
        $location.path('/');
    };
    $scope.noLogin = function () {
        playerName = "noName";
        $location.path('/');
    };
}]);

controllers.controller("logoutCtrl", ['$scope', function ($scope) {
    $scope.playerName = playerName;
    playerName = null;

}]);

controllers.controller("routenmenuCtrl",['$scope' ,function ($scope) {
    $scope.buttons = controllers.buttons.routen;
   
    navigator.vibrate(292);
    $scope.beep = function () {
        navigator.notification.beep(1);
    };
    $scope.vibe = function () {
        navigator.vibrate(292);
    };


}]);

controllers.controller("routenIDCtrl", ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.routenID = $routeParams.routenID;


}]);

controllers.controller("optionsCtrl", ['$scope', function ($scope) {
    $scope.buttons = controllers.buttons.options;
}]);

controllers.controller("standortCtrl", ['$scope', function ($scope) {
    var vm = this;
    vm.buttons = controllers.buttons.standort;
    vm.geolocation = ".......";
    vm.getPos = getPos;
    vm.map = new OpenLayers.Map("map");
    vm.map.addLayer(new OpenLayers.Layer.OSM());
    vm.map.zoomToMaxExtent();
    vm.lat;
    vm.lon;
    vm.markers = new OpenLayers.Layer.Markers("Markers");
    vm.map.addLayer(vm.markers);
    

    //getPos();

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
}]);


controllers.controller('ScanCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    var vm = this;
    vm.result = cordova.plugins.barcodeScanner.scan(onSucess.bind(vm), function (error) {
        return "Scanning failed: " + error ;
    });
    console.log("location 1 " + $location);
    vm.$location = $location;
    console.log("location vm " + vm.$location);
   // console.log($scope.result+"WAWSWAW");
   

    function onSucess(result) {
        console.log(result);
        console.log($scope.result);
        this.result = "We got a barcode\n" +
               "Result: " + result.text + "\n" +
               "Format: " + result.format + "\n" +
               "Cancelled: " + result.cancelled;
        //alert(vm.result);
      //  console.log($scope.result);
       // console.log(this.result);
    
        //    console.log(vm.result);
        this.$location.path('/Routen/' + result.text);
        $rootScope.$apply();
        console.log("location 555 " + this.$location.path());
        return this.result;
    };
    console.log($scope.result + "wwwwwwwwwwwwww");
    
}]);
