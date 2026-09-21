// Import built-in modules
const os = require("os");
const path = require("path");
const fs = require("fs");

// OS module
console.log("Operating System Information:");
console.log("Platform:", os.platform());
console.log("Computer Name:", os.hostname());
console.log("Total Memory:", os.totalmem());


// Path module
var filePath = path.join("documents", "student.txt");

console.log("\nPath Information:");
console.log("File Path:", filePath);


// File System module
fs.writeFileSync("sample.txt", "Hello from Node.js!");

console.log("\nFile Information:");
console.log("File created successfully.");

var data = fs.readFileSync("sample.txt", "utf8");

console.log("File Content:", data);