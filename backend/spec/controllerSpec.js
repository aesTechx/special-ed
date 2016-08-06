var path = require('path');
var expect = require('chai').expect;

var index = require(path.join(__dirname, '..', './app/controllers/index.js'));

describe('index()', function () {
	'use strict';
	it('exists', function () {
		expect(index).to.be.a('function');
	});
	it('does something', function () {
		expect(true).to.equal(false);
	});
	it('does something else', function () {
		expect(true).to.equal(false);
	});
	it('post a student to student schema', function() {
		request;
	});
  // Add more assertions here
});

