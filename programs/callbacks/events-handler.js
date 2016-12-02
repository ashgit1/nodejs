// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create a event handler for connection event as follows
var connectHandler = function connected(){
	console.log('connection successful');

	// Fire the data_received event
	eventEmitter.emit('data_received');
}

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with anonymous function
eventEmitter.on('data_received', function(){
	console.log('data received successfully');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log('Program ended');