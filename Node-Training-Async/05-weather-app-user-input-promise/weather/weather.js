const request = require('request');

module.exports.getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/78bfa0a8c259175d97fd332671833316/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                actualTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};
