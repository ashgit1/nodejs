// Writing to a Stream
var fs = require("fs");
var data = 'My name is Ashishkumar Gupta';

// create a writable stream
var writerStream = fs.createWriteStream('output.txt');

// write the data to stream with encoding to be UTF8
writerStream.write(data, 'UTF8');

// mark the end of the file
writerStream.end();

// Handle strea events --> finish and error
writerStream.on('finish', function(){
	console.log("write completed");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log("program ended");
