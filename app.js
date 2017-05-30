console.log('Starting app.js ...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(`Hello ${user.username}!`);

//fs.appendFile('greetings.txt','Hello World!');