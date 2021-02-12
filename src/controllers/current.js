const weatherapi = require('../services/weatherapi');
const ipapi = require('../services/ipapi');
const rest = require('./../helpers/rest');

module.exports.getCurrent = async (city = "") => {
    let response;
    try {
        if (!city) {
            city = await ipapi.getCity();
        }
        const weather = await weatherapi.getWeather(city);
        response = rest.success(weather);
    } catch (error) {
        response = rest.error(error);
    }
    return response;
};
