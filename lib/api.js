'use strict';

const isValid = require('./is-valid');
const cpr = require('./copyright');
const title = require('./title');

module.exports = function buildApi(router) {
	router.get('/getting-started', (req, res, next) => {
		const ctx = {
			message: 'Thank you for installing `Stay productive` chrome extension.',
			title: title(),
			copyright: cpr(),
		};

		res.render('hi', ctx, (err, html) => {
			if (err) {
				return next(err);
			}
			res.send(html);
		});
	});

	router.get('/see-you-later', (req, res, next) => {
		res.render('bye', {
			message: 'We will miss you. Come back sooner.',
			title: title(),
			copyright: cpr(),
		}, (err, html) => {
			if (err) {
				return next(err);
			}
			res.send(html);
		});
	});

	router.get('/whats-new', (req, res) => {
		const from = req.query.from;
		const to = req.query.to;

		if (isValid(from) && isValid(to)) {
			res.status(200).send(`Whats new from ${from} to ${to}`);
		}
		else {
			// TODO: If format isnt matching - change below
			res.status(200).send("Render whats-new general page");
		}
	});

	router.get('*', (req, res, next) => {
		const ctx = {
			title: title(),
			copyright: cpr(),
		};

		res.render('404', ctx, (err, html) => {
			if (err) {
				return next(err);
			}
			res.send(html);
		});
	});

	return router;
};
