const weatherapi = require('../services/weatherapi');
const ipapi = require('../services/ipapi');
const rest = require('./../helpers/rest');

module.exports.getForecast = async (city = "") => {
    let response;
    try {
        if (!city) {
            city = await ipapi.getCity();
        }
        const forecast = await weatherapi.getForecast(city);
        response = rest.success(forecast);
    } catch (error) {
        response = rest.error(error);
    }
    return response;
};
