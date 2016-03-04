var restful = require('node-restful');
var mongoose = restful.mongoose;

var peopleSchema = new mongoose.Schema({
	name: String,
	age: Number
});

module.exports = restful.model('people', peopleSchema);