const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const argv = yargs.argv;
    
   geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if(errorMessage) {
            console.log(errorMessage);
        } else {
            console.log(JSON.stringify(results, undefined, 2));
        }
    });
    
