module.exports = function(app,path) {

	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public', 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
	});
};
