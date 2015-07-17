

app.controller('GoogleMapController',[ '$scope','PolygonService', function($scope, PolygonService) {

console.log("Inside the controller");

var topLeftY=10.55;
var topLeftX= 11.5;

    $scope.mapCenter = "helsinki";
    $scope.centerChanged = function(e) {
        console.log("Changing center");
        //TODO: Find a way to pass the Bounds to the service correctly
        mBounds = $scope.map.getBounds();
        tlX = mBounds.A;
        tlY = mBounds.j;
        console.log(tlX);
        PolygonService.getPoly({tlX: topLeftX, tlY: topLeftY});
      }
 

    //Temporary polygons to test whether polygons work or not
    $scope.polygons = [ 
      { 
        coordinates: [ [25.774252, -80.190262], [18.466465, -66.118292], [32.321384, -64.75737],[32.321384, -84.75737] ], 
        title: 'MOVE', 
        type: 'MOVE, Inc.', 
        fillColor: '#FF0000',
        opacity: 0.8
      }, 
      { 
        coordinates: [ [29.774252, -80.190262], [28.466465, -66.118292], [3.321384, -64.75737],[32.321384, -84.75737] ], 
        title: 'MOVE', 
        type: 'MOVE, Inc.', 
        fillColor: '#00FF00',
        opacity:  0.8
      }
    ]; 
    $scope.markers = [ 
      { 
        position:$scope.mapCenter, 
        title: 'Center Marker', 
        icon: 'For later marker icon'
      }, 
      { 
        position:  [29.774252, -80.190262], 
        title: 'Random Marker', 
        icon: 'for later'
      }
    ];  


  }]);