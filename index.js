'use strict';

const app = require('./app');
const config = require('./config');

async function main() {
	app.listen(config.port, () => {
		console.log(`App listening at ${config.port}`);
	});
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
