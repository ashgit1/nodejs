// fs.unlink() - delete an existing file. Create a sample file sample.txt first.

var fs = require('fs');

console.log("Going to delete an existing file sample.txt");

fs.unlink('sample.txt', function(err){
	if(err){
		return console.error(err);
	}
	console.log("File deleted successfuly!");
});