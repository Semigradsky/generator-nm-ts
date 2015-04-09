'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('generator', function () {
	beforeEach(function (cb) {
		var deps = ['../app'];

		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				cb(err);
				return;
			}

			this.generator = helpers.createGenerator('nm-ts:app', deps);
			cb();
		}.bind(this));
	});

	it('generates expected files', function (cb) {
		var expected = [
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'.travis.yml',
			path.join('src', 'index.ts'),
			'dts-bundle.js',
			'LICENSE',
			'package.json',
			'README.md',
			'test.js',
			'tsconfig.json',
			'tslint.json'
		];

		helpers.mockPrompt(this.generator, {
			moduleName: 'test',
			githubUsername: 'test',
			website: 'test.com'
		});

		this.generator.run(function () {
			helpers.assertFile(expected);
			cb();
		});
	});
});
