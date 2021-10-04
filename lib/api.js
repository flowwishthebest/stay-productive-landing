'use strict';

module.exports = function buildApi(router) {
	router.get('/getting-started', (req, res, next) => {
		const ctx = {
			message: 'Thank you for installing `Stay productive` chrome extension.',
			title: 'Stay productive | Welcome!',
			copyright: new Date().getFullYear(),
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
			title: 'Stay productive | Bye bye!',
			copyright: new Date().getFullYear(),
		}, (err, html) => {
			if (err) {
				return next(err);
			}
			res.send(html);
		});
	});

	router.get('/whats-new/:from/:to', (req, res) => {
		//Function to check if string is numeric (should cover undefined, "", " ", null, true, false cases)
		const isNumeric = (input) => {
			return (input - 0) == input && ('' + input).trim().length > 0;
		}

		//Function to check if given query param is valid (both parts are numeric strings and number after decimal point is single digit numeric string)
		const isValid = (string) => {
			const fp = string.split('.')[0];
			const sp = string.split('.')[1];

			if (isNumeric(fp) && isNumeric(sp) && sp.length === 1)
				return true;
			return false;
		}

		//Access query params
		const from = req.params.from;
		const to = req.params.to;

		if (isValid(from) && isValid(to)) {
			res.status(200).send(`Whats new from ${from} to ${to}`);
		}
		else {
			// TODO: If format isnt matching - change below
			res.status(400).send("Format didn't match");
		}

	});

	router.all('*', (req, res) => {
		// TODO: send 4xx page
		res.status(404).send('I do not understand you');
	});

	return router;
};
