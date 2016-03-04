// Dependencies 
var express = require('express');
var router = express.Router();

//Routes
var People = require('../models/people');

People.methods(['get', 'post', 'put', 'delete']);
People.register(router, '/people');

//Return router
module.exports = router;