'use strict';
var path = require('path');
var normalizeUrl = require('normalize-url');
var humanizeUrl = require('humanize-url');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
	init: function () {
		var cb = this.async();

		this.prompt([{
			name: 'moduleName',
			message: 'What do you want to name your module?',
			default: this.appname.replace(/\s/g, '-'),
			filter: function (val) {
				return this._.slugify(val);
			}.bind(this)
		}, {
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: function (val) {
				return val.length > 0 ? true : 'You have to provide a username';
			}
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true
		}], function (props) {
			this.moduleName = props.moduleName;
			this.camelModuleName = this._.camelize(props.moduleName);
			this.githubUsername = props.githubUsername;
			this.name = this.user.git.name();
			this.email = this.user.git.email();
			this.website = props.website ?
				normalizeUrl(props.website) :
				('https://github.com/' + this.githubUsername);
			this.humanizedWebsite = humanizeUrl(this.website);

			// needed so npm doesn't try to use it and fail
			this.template('_package.json', 'package.json');
			this.template('dts-bundle.js');
			this.template('editorconfig', '.editorconfig');
			this.template('gitattributes', '.gitattributes');
			this.template('gitignore', '.gitignore');
			this.template('LICENSE');
			this.template('npmignore', '.npmignore');
			this.template('README.md');
			this.template('test.js');
			this.template('travis.yml', '.travis.yml');
			this.template('tsconfig.json');
			this.template('tslint.json');
			this.template(path.join('src', 'index.ts'));

			cb();
		}.bind(this));
	}
});
