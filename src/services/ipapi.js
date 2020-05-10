const ipapi = require('ipapi.co');
const getLocation = () => new Promise((resolve, reject) => {
    ipapi.location((data) => {
        resolve(data);
    });
});
const getCity = () => new Promise((resolve, reject) => {
    ipapi.location((data) => {
        resolve(data);
    }, '', '', 'city');
});

module.exports.getLocation = getLocation;
module.exports.getCity = getCity;