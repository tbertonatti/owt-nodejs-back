const request = require('request');
const KEYID = process.env.OWKEYID;

const performRequest = (endPoint, city, callback) => {
    request({
        url: `https://api.openweathermap.org/data/2.5/${endPoint}?units=metric&appid=${KEYID}&q=${city}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(null, body);
        } else {
            callback(`Failed to fetch ${endPoint} for ${city}`);
        }
    });
};

const getWeather = (city) => new Promise((resolve, reject) => {
    performRequest('weather', city, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    })
})
const getForecast = (city) => new Promise((resolve, reject) => {
    performRequest('forecast', city, (err, data) => {
        if (err) return reject(err)
        resolve(data)
    })
})

module.exports.getWeather = getWeather;
module.exports.getForecast = getForecast;