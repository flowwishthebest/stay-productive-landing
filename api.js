'use strict';

const express = require('express');

const router = express.Router();

router.get('/getting-started', (req, res) => {
	res.send('Hello World!');
});

router.get('/see-you-later', (req, res) => {
	res.send('Good Bye!');
});

router.get('/whats-new', (req, res) => {
	res.send('Whats up!');
});

router.all('*', (req, res) => {
	// TODO: send 4xx page
	res.status(404).send('I do not understand you');
});

router.use((err, req, res) => {
	console.error(err);
	// TODO: send 5xx page
	res.status(500).send('I am sleeping');
});

module.exports = router;
