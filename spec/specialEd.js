var path = require('path');
var expect = require('chai').expect;

var specialEd = require(path.join(__dirname, '..', './specialEd.js'));

describe('specialEd()', function () {
  'use strict';

  it('exists', function () {
    expect(specialEd).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
