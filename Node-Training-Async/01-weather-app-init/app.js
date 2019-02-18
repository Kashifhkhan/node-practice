const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=s3nOL8BDD9r1HKPBRqugSVsZVafH3Pw4&location=1301%20lombard%20street%20philadelphia',
    json: true //that data coming back will be json data
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
    console.log(`Address: ${body.results[0].locations[0].street}` );
    console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Lng: ${body.results[0].locations[0].latLng.lng}`);

});