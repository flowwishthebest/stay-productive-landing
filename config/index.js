'use strict';

const path = require('path');

module.exports = {
	port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3080,
	viewsDir: path.join(process.cwd(), 'assets', 'templates'),
};
