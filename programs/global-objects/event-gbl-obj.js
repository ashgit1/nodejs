// The process object is a global object and can be accessed from anywhere. 
// The process object is an instance of EventEmitter and emits the following events 
// exit : Emitted when the process is about to exit and some other

process.on('exit', function(code){
	
	// following code will never execute
	setTimeout(function(){
		console.log("This will not run");
	}, 0);

	console.log("about to exit with code: ", code);
});
console.log("Program Ended");

