

app.factory('PolygonService', ['$resource', function($resource) {

	console.log("Sending a request");
	return {
		getPoly:function(){
			console.log("THe service worls");
		$resource('/api/polygons/:tlX/topY/:tlY', {tlX: '@tlX', tlY: '@tlY'});
	}
	}
}]);

