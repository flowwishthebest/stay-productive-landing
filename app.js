'use strict';

const express = require('express');

const app = express();

app.use('/', require('./api'));

app.disable('x-powered-by');
app.disable('etag');

module.exports = app;
