'use strict';

module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true,
		'mocha': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'ignorePatterns': ['node_modules/**/*'],
	'rules': {
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
	}
};
