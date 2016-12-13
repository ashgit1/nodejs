// __filename global obj : prints the absolute path of this file

console.log(__filename);

// __dirname : represents the name of the directory that the currently executing script resides in
console.log(__dirname);

// The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds.
function printHello(){
	console.log("Hello Ashish!");
}
// now call the above function after 2 seconds
setTimeout(printHello, 2000);

// clearTimeout(t) global function is used to stop a timer that was previously created with setTimeout()
function printByee(){
	console.log("Byee-Byee");
}
// now call the above function after 2 seconds
var t = setTimeout(printByee, 2000);

// now clear the timer
clearTimeout(t);
// Verify the output where you will not find anything printed.

// setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds.
function smile(){
	console.log(":-)");
}
// call the above function after every 2 seconds
setInterval(smile, 2000);

