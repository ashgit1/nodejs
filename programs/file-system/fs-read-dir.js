// fs.readdir() - read from directory(files)

var fs = require('fs');

console.log("Going to read directory /tmp");

fs.readdir('/tmp/', function(err, files){
	if(err){
		console.log(err);
	}

	files.forEach(function(eachfile){
		console.log(eachfile);
	});
});
