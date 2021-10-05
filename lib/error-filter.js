'use strict';

const httpStatus = require('./http-status');
const { NotFoundError } = require('./not-found-error');
const cpr = require('./copyright');
const title = require('./title');

// eslint-disable-next-line no-unused-vars
module.exports = function filter(caughtError, req, res, next) {
	console.error(caughtError);

	const ctx = {
		title: title(),
		copyright: cpr(),
	};

	let status = httpStatus.INTERNAL_SERVER_ERROR;
	let template = '500';

	// TODO: check instanceof not message
	if (caughtError instanceof NotFoundError) {
		status = caughtError.status;
		template = '404';
	}

	res.status(status).render(template, ctx, (err, html) => {
		if (err) {
			console.error(err);
			return res.send('Something went wrong');
		}
		res.send(html);
	});
}
