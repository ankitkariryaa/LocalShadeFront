app.factory('PolygonService', ['$resource', function($resource) {
return $resource('/polygons/:id', null,
    {
        'update': { method:'PUT' }
        
    });
}]);