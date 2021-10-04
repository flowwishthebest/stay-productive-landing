'use strict';

const express = require('express');
const config = require('../config');
const build = require('./api');
const errorFilter = require('./error-filter');
const invalidUriHandler = require('./invalid-uri-handler');

const app = express();

app.use('/', build(express.Router()));
app.all('*', invalidUriHandler);

app.use(errorFilter);

app.set('views', config.viewsDir);
app.set('view engine', 'pug');

app.disable('x-powered-by');
app.disable('etag');

module.exports = app;
