const express = require('express');
const router = express.Router();
const locationController = require('../controllers/location');

router.get('/', async (req, res) => {
    const response = await locationController.getLocation();
    res.status(response.code).send(response);
});

module.exports = router
