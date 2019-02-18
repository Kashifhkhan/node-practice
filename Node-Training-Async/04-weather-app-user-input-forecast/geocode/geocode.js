const request = require('request');

module.exports.geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=s3nOL8BDD9r1HKPBRqugSVsZVafH3Pw4&location=${encodedAddress}`,
        json: true //that data coming back will be json data
    }, (error, response, body) => {
        if(error) {
            callback('unable to connect to servers');
        } else if(body.status === 'zero_results') {
            callback('unable to find that address');
        } else {
            callback(undefined, {
                address: body.results[0].locations[0].street,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }

    });
};