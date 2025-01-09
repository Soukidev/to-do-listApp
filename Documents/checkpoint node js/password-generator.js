// password-generator.js
const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 12,
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true
});

console.log(password);
