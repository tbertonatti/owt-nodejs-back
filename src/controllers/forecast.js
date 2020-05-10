const weatherapi = require('../services/weatherapi');
const ipapi = require('../services/ipapi');
const rest = require('./../helpers/rest');

module.exports.getForecast = async (city = "") => {
    if (!city) {
        city = await ipapi.getCity();
    }
    let response;
    try {
        const forecast = await weatherapi.getForecast(city);
        response = rest.success(forecast);
    } catch (error) {
        response = rest.error(error);
    }
    return response;
};
