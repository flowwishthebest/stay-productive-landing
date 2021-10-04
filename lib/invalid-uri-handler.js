'use strict';

const httpStatus = require('./http-status');

module.exports = function handler(req, res) {
	// TODO: send 4xx page
	res.status(httpStatus.NOT_FOUND).send('I do not understand you');
};
