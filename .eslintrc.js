module.exports = {
	"env": {
			"commonjs": true,
			"es2021": true,
			"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
			"ecmaVersion": 12
	},
	"ignorePatterns": ["node_modules/**/*"],
	"rules": {
		"indent": [2, 2],
	}
};
