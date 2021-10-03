'use strict';

const app = require('./app');
const config = require('./config');

async function main() {
	const server = app.listen(config.port, () => {
		const addr = server.address();
		console.log(`App listening at ${addr.port}`);
	});
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
