const ipapi = require('../services/ipapi');
const rest = require('./../helpers/rest');

module.exports.getLocation = async () => {
    const location = await ipapi.getLocation();
    return rest.success(location);
};
