// fs.rmdir() - to remove a directoty

var fs = require('fs');

console.log("Going to delete directory /tmp/test");

fs.rmdir('/tmp/test', function(err){
	if(err){
		console.log(err);
	}
	console.log("Going to read directory /tmp to see if /test dir is deleted");

	fs.readdir("/tmp", function(err, files){
		if(err){
			console.log(err);
		}
		// print the /tmp directory
		files.forEach(function(file){
			console.log(file);
		});
	});
});

