'use strict';

module.exports = function handler(req, res) {
	// TODO: send 4xx page
	res.status(404).send('I do not understand you');
};
