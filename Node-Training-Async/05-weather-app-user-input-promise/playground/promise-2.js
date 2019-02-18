const request = require('request');

var geocodeAddress = (address) => {
    return new Promise(function(resolve, reject) {
        var encodedAddress = encodeURIComponent(address);

        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=s3nOL8BDD9r1HKPBRqugSVsZVafH3Pw4&location=${encodedAddress}`,
            json: true //that data coming back will be json data
        }, (error, response, body) => {
            if(error) {
                reject('unable to connect to servers');
            } else if(body.status === 'zero_results') {
                reject('unable to find that address');
            } else {
                resolve( {
                    address: body.results[0].locations[0].street,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            }
    
        });
    });
};

geocodeAddress('40 Fulton').then((location)=>{
    console.log(JSON.stringify(location, undefined, 2));
},(errorMessage)=>{
    console.log(errorMessage);
});