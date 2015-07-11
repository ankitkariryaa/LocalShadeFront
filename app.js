// set up ======================================================================
var express  = require('express');
var app      = express(); 								// create our app w/ express
var path = require('path');
var port  	 = process.env.PORT || 5000; 				// set the port
var morgan   = require('morgan');
var methodOverride = require('method-override');

// configuration ===============================================================
app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/routes.js')(app,path);

// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
