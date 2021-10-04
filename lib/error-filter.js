'use strict';

const httpStatus = require('./http-status');
const cpr = require("./copyright");
const title = require("./title");

// eslint-disable-next-line no-unused-vars
module.exports = function filter(err, req, res, next) {
	console.error(err);

	const ctx = {
		title: title(),
		copyright: cpr(),
	};

	// TODO: check instanceof not message
	if (err.message === httpStatus.NOT_FOUND.toString()) {
		return res
			.status(httpStatus.NOT_FOUND)
			.render('404', ctx, (err, html) => {
				if (err) {
					return next(err);
				}
				res.send(html);
			});
	}

	res.status(httpStatus.INTERNAL_SERVER_ERROR)
		.render('500', ctx, (err, html) => {
			if (err) {
				return console.error(err);
			}
			res.send(html);
		});
}
