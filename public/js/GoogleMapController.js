app.controller('GoogleMapController', function($scope) {

console.log("Inside the controller");
    $scope.mapCenter = "helsinki";
    $scope.MapZoom = 3;
    $scope.data1 = 'Lots of data';
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
	var infoWindow = new google.maps.InfoWindow();
	$scope.showArrays = function(event) {

    // Since this polygon has only one path, we can call getPath()
    // to return the MVCArray of LatLngs.
    var vertices = this.getPath();

    var contentString = '<b>Bermuda Triangle polygon</b><br>' +
        'Clicked location: <br>' + event.latLng.lat() + ',' + event.latLng.lng() +
        '<br>';

    // Iterate over the vertices.
    for (var i =0; i < vertices.getLength(); i++) {
      var xy = vertices.getAt(i);
      contentString += '<br>' + 'Coordinate ' + i + ':<br>' + xy.lat() + ',' +
          xy.lng();
    }

    // Replace the info window's content and position.
    infoWindow.setContent(contentString);
    infoWindow.setPosition(event.latLng);

    infoWindow.open($scope.map);
  }

  });