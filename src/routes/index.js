const express = require('express')
const router = express.Router()

router.use('/current', require('./current'))
router.use('/location', require('./location'))
router.use('/forecast', require('./forecast'))

module.exports = router
