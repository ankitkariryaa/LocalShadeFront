app.controller('GoogleMapController', function($scope) {

console.log("Inside the controller");
    $scope.mapCenter = "helsinki";
    $scope.MapZoom = 3;
    $scope.data1 = 'Lots of data';
    // $scope.$on('mapInitialized', function(evt, map) {
    //   var infoWindow = map.infoWindows[1];
      
    // });
    // $scope.markers = {"-34.890542, 151.274856":"//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // "-35.890542, 151.274856":"//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"};
      

    //   $scope.zoomChanged = function(e) {
    //     console.log("Changing zoom");
    //     infoWindow.setContent('Zoom: ' + map.getZoom());
    //     map.setCenter(infoWindow.getPosition());
    //   }
    //    $scope.centerChanged = function(e) {
    //     console.log("Changing center");
    //     infoWindow.setContent('Zoom: ' + map.getZoom());
    //     map.setCenter(infoWindow.getPosition());
    //   }


    $scope.MapCenterSearch = function(){

    }

  });