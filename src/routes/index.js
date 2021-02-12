const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../../swagger.json');
router.use('/current', require('./current'))
router.use('/location', require('./location'))
router.use('/forecast', require('./forecast'))
router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router
