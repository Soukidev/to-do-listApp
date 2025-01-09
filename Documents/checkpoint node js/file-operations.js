// file-operations.js
const fs = require('fs');

// Create "welcome.txt" with the text "Hello Node"
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read the content from "welcome.txt" and log it to the console
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);
