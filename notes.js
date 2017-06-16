var addNote = (title, body) => {
    console.log('Adding note: ', title, body);
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