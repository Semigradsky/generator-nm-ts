'use strict';

var assert = require('assert');
var <%= camelModuleName %> = require('./');

it('should ', function () {
	assert.strictEqual(<%= camelModuleName %>('input'), '!input!');
});
