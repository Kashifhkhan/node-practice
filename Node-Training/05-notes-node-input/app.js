console.log('Starting app');

//require yargs here
const yargs = require('yargs')

const notes = require('./notes.js');

var argv = yargs.argv;
var command = process.argv[2]; // or argv._[0]
console.log(`Command: ${command}`);
// console.log('Process', process.argv);
console.log('Yargs', argv);

//if(command === 'add') {
  //  notes.addNote(argv.title, argv.body);
    //try node app.js add --title=secret --body="This is my secret"
//}

// make three more commands - list, read, remove

