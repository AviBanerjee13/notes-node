const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2];
// console.log('Command: ', argv._[0]);
// console.log(process.argv);
// console.log(argv);

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(_.isUndefined(note)){
        console.log(`Note with Title: ${argv.title} & Body: ${argv.body} was not added`);
   } else {
        console.log('Congratulations! Note was added successfully.');
   }

} else if(command === 'list'){
    notes.getAll();
} else if(command === 'read'){
    notes.getNote(argv.title);
} else if(command === 'remove'){
    var note = notes.removeNote(argv.title);
    if(_.isUndefined(note)){
        console.log(`Note could be removed. Please verify the Title`);
   } else {
        console.log('Congratulations! Note was successfully removed.');
   }
} else{
    console.log('Command not recognized');
}
