var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Mongo Db Connection
mongoose.connect('mongodb://localhost/rest_test', function(err,db){
	console.log(err);
	console.log(db);
	if(!err){
		console.log("Jhakaas! Connected to Mongo DB !");
		return true;
	}

	return false;
});

// // App configuration
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.use('/api', require('./routes/api'));

// Server listening
app.listen(3000);
console.log('Server running at port 3000 !');