const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', argv._[0]);
console.log(process.argv);
console.log(argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
} else if(command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(argv.title);
} else if(command === 'remove'){
    notes.removeNote(argv.title);
} else{
    console.log('Command not recognized');
}
