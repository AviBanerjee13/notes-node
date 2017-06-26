const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (ex) {
        return [];
    }

};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

    //Undefined will get returned by default

};

var getAll = () => {
    console.log('Getting all nodes');
};

var getNote = (title) => {
    console.log('Reading: ', title);
};

var removeNote = (title) => {
    console.log('Removing: ', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}