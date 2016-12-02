// Buffer Slice
var buffer1 = new Buffer('Ashishkumar Gupta');

//slicing a buffer
var buffer2 = buffer1.slice(0, 11);
console.log("buffer2 content: " + buffer2.toString());

// Length of buffer
console.log("buffer2 length : " + buffer2.length);
