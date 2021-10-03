'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use('/', require('./api'));

app.set('views', path.join(process.cwd(), 'assets', 'templates'));
app.set('view engine', 'pug');

app.disable('x-powered-by');
app.disable('etag');

module.exports = app;
