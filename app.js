const express = require('express');
const indexRouter = require('./src/routes/index');
const app = express();
app.use('/v1', indexRouter);

module.exports = app;