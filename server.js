//module dependencies - server.js (Express 4.0)
var application_root = __dirname,
// log every request to console
	morgan = require('morgan'),
// app parser url, json 					
	bodyParser = require('body-parser'),		
// simulate DELETE & PUT	
	methodOverride = require('method-override'),	
// Web framework
	express = require('express'),					
// Utilities for dealing with file paths
  	path = require('path'),	
// MongoDB integration						
	mongoose = require('mongoose');					
//===============================================

// create server
var app = express();
//===============================================

// configure server

console.log('__dirname: ', __dirname);


//NOTE: middlewares are loaded into an express app
//with app.use();

// where to serve static content
app.use(express.static(application_root + '\\public'));

console.log('staticDir: ', application_root + '\\public');

// log every request to the console
app.use(morgan('dev')); 					

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

// parse application/json
app.use(bodyParser.json());

// simulate DELETE and PUT
app.use(methodOverride()); 

// enable routing based on environment
var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
   // configure stuff here
}

// perform route lookup based on URL and HTTP method
//app.use(app.router);  deprecated in 4.x

//create Router instance
var router = express.Router();

//	this is url route
router.get('/', function(req, res) {
		//	this is the file directory with respect to server.js
    	res.sendfile('public/index.html');
	}	
);

//created default url route
app.use('/skillshop', router);


// show all errors in development
//app.use(express.errorHandler({dumpExceptions: true, showStack: true}));

// start server
var port = 4711;
app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});




   
    
					

	