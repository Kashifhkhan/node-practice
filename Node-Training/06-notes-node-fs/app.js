console.log('Starting app');

const fs = require('fs');    

const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2]; // or argv._[0]
console.log(`Command: ${command}`);
console.log('Process', process.argv);
console.log('Yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note added');
        console.log('---');
        console.log(`Title:  ${note.title}`);
        console.log(`Body:  ${note.body}`);
    } else {
        console.log('Note title taken');
    }
    //try node app.js add --title=secret --body="This is my secret"
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note)=>{
        console.log(note);
    });
    // try node app.js list
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log(note);
    }else {
        console.log('note not found');
    }
    //try node app.js read --title secret
} else if(command === 'remove') {
    //try node app.js remove --title secret
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note was removed' : 'note not found';
    console.log(message);
} else {
    console.log('Command not recognized');
}


