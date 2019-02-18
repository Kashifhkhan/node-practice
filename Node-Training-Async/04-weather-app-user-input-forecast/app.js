const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.argv;

    
geocode.geocodeAddress(argv.address, (errorMessage, results) => {

	//write callback function here with a call to weather module
	
});
  
