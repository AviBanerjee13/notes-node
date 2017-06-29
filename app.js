const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs
    .command('add','add new note',{
        title:{
            describe: 'title of the note',
            demand: true,
            alias: 't'
         },
        body:{ 
            describe:'body of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('remove','removes a note',{
        title:{
            describe: 'removes the note with this title',
            demand: true,
            alias: 't'
        }
    })
    .command('list', 'lists all the notes')
    .command('read', 'reads a note',{
        title: {
            describe: 'reads a note with this title',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
;

var command = argv._[0];

if(command === 'add'){
   var note = notes.addNote(argv.title, argv.body);
   if(_.isUndefined(note)){
       console.log(`Note with Title: ${argv.title} & Body: ${argv.body} was not added`);
   } else {
        console.log('Congratulations! Note was added successfully.');
   }

} else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Showing ${allNotes.length} Note(s)`);
    allNotes.forEach(
        (note) => {
            notes.logNote(note);
        }
    );
} else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log('Note found!');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }
} else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
} else{
    console.log('Command not recognized');
}
