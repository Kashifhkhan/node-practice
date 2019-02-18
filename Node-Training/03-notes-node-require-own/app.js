console.log('Starting app');

const fs = require('fs');    //require is available in any of the node file
const os = require('os');
const notes = require('./notes');

// require notes here

var user = os.userInfo();


console.log(notes.add(5,6));

//call method and variable exported in notes file


