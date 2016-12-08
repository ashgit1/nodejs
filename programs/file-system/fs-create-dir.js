// fs.mkdir() - to create a directory

var fs = require('fs');

console.log("Going to create a directory /tmp/test");

fs.mkdir('/tmp/test/', function(err){
	if(err){
		console.log(err);
	}
	console.log("directory created successfully");
});

