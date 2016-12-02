// Multiple handlers for a particular event
var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener # 1
var listener1 = function listener1(){
	console.log('listener1 executed');
}

// listener # 2
var listener2 = function listener2(){
	console.log('listener2 executed');
}

// Bind the connection event with listener1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with listener2 funstion
eventEmitter.on('connection', listener2);

// Count the # of listeners for connection event
var countListeners = require('events').EventEmitter.
           			 listenerCount(eventEmitter, 'connection');
console.log(countListeners + " Listener(s) listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will not listen now to connection event');

// Fire the connection event
eventEmitter.emit('connection');

// Again count the # of listeners for connection event
countListeners = require('events').EventEmitter.
				 listenerCount(eventEmitter, 'connection');
console.log(countListeners + " Listener(s) listening to connection event");				 

console.log('Program Ended');


