// Node.js os module provides a few basic os related utility functions 

var os = require("os");

// Endianness
console.log("Endianness: " + os.endianness());

// OS type
console.log("os type: " + os.type());

// OS platform
console.log("paltform: " + os.platform());

// Total system memory
console.log("total memory: " + os.totalmem() + " bytes.");

// Total free memory
console.log("free memory: " + os.freemem() + " bytes.");

console.log("Progam Ended");
