const express = require('express');
const router = express.Router();
const forecastController = require('../controllers/forecast');

router.get('/:city?', async (req, res) => {
    const response = await forecastController.getForecast(req.params.city);
    res.status(response.code).send(response);
});

module.exports = router
