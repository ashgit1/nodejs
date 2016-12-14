// Adding new user 
var express = require('express');
var app = express();
var fs = require("fs");

// prepare the user. In real world this will come from a form.
var user = {
	"user4" : {
		"name": "kaka",
		"password": "password4",
		"profession": "football",
		"id": 4
	}
}

// post request
app.post('/addUser', function(req, res){
	// First read existing users.
	fs.readFile( __dirname + "/" + "users.json", "utf8", function(err, data){
		data = JSON.parse(data);
		data["user4"] = user["user4"];
		console.log(data);
		res.end(JSON.stringify(data));
	});
});

// start the server
var server = app.listen(8081, function(){

	var host = server.address().address;
	var port = server.address().port;
	console.log("App listen @ http://127.0.0.1:8081/addUser"); 

});