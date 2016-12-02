// Concatenate 2 buffers into single buffer

var buffer1 = new Buffer('Ashishkumar ');
var buffer2 = new Buffer('Gupta');

var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log("buffer3 content: " + buffer3.toString());
