console.log('Starting app');

const fs = require('fs');    //require is available in any of the node file
const os = require('os');

var user = os.userInfo();

/*
	print Hello 'your name'
*/

console.log('Hello '+ user.username);
console.log(`Hello ${user.username}`);


fs.appendFileSync('greeting.txt', user.username);

//we can use ES6 feature of template string as well.