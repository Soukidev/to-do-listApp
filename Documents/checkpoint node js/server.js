const http = require('http');
require('dotenv').config();
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

console.log(`Email: ${emailUser}, Password: ${emailPass}`);


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello Node!!!!</h1>\n');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
