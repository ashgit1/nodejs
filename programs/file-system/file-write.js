// writeFile() - write into a file

var fs = require('fs');

console.log("Going to write into a File");

fs.writeFile('output.txt', 'Simple write operation!', function(err){
	if(err){
		return console.error(err);
	}
	
	console.log("Data written successfully!");
	console.log("Let's read from newly written data");

	fs.readFile('output.txt', function(err, data){
		if(err){
			return console.error(err);
		}
		console.log("Asynchronous read: " + data.toString());
	});
});