// Reading from a Stream
var fs = require("fs");
var data = '';

// create a readable stream
var readerStream = fs.createReadStream('input.txt');

// set the encoding to be utf8
readerStream.setEncoding('UTF8');

//Handle stream events --> data, end and error
readerStream.on('data', function(chunk){
	data+=chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});

readerStream.on('finish', function(){
	console.log('Data flushed to underlying system')
});

readerStream.emit('finish');

console.log("Program Ended");
