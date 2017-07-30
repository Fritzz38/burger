// Import MySQL connection.
var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

var orm = {

	selectAll: function(tableInput,cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
    	connection.query(queryString, function(err, result) {
      	if (err) {
        	throw err;
      	}
      	cb(result);
    });

	}, 

	insertOne: function(ree,reed) {


	}, 

	updateOne: function(ree,reed) {


	}

};

module.exports = orm;