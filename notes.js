console.log('Starting notes.js...');

var addNote = (title, body) => {
    console.log('Adding note: ', title, body);
};

module.exports = {
    addNote //addNote: addNote, in ES6 exported obj is same name as variable, we can use just one name
}