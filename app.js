'use strict';

const express = require('express');

const app = express();

app.get('/getting-started', (req, res) => {
	res.send('Hello World!');
});

app.get('/see-you-later', (req, res) => {
	res.send('Good Bye!');
});

app.get('/whats-new', (req, res) => {
	res.send('Whats up!');
});

app.disable('x-powered-by');
app.disable('etag');

module.exports = app;
