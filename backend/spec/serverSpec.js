'use strict';
var path = require('path');
var expect = require('chai').expect;

var server = require(path.join(__dirname, '..', './server.js'));

describe('server()', function () {
	it('exists', function () {
		expect(server).to.be.a('function');
	});
	it('does something', function () {
		expect(true).to.equal(false);
	});
	it('does something else', function () {
		expect(true).to.equal(false);
	});
});

