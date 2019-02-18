const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand : true,
            alias : 'address',
            describe: 'Addres to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

    var encodedAddress = encodeURIComponent(argv.address);
    var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=s3nOL8BDD9r1HKPBRqugSVsZVafH3Pw4&location=${encodedAddress}`;

    axios.get(geocodeUrl)
    .then((response)=>{

        var lat = response.data.results[0].locations[0].latLng.lat;
        var long = response.data.results[0].locations[0].latLng.lng;

        var weatherUrl = `https://api.darksky.net/forecast/78bfa0a8c259175d97fd332671833316/${lat},${long}`;

        return(axios.get(weatherUrl));
    })
    .then((response)=>{
        console.log(JSON.stringify(response.data.currently.temperature));
    })
    .catch((e)=>{
        console.log(e);
    }); 
