const express = require('express');
const router = express.Router();
const currentController = require('../controllers/current');

router.get('/:city?', async (req, res) => {
    const response = await currentController.getCurrent(req.params.city);
    res.status(response.code).send(response);
});

module.exports = router
