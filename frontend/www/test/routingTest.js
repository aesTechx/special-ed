var chai = require('chai');
var assert = chai.assert;



'use strict';

describe('State', function () {
  var $state;
  beforeEach(module('starter'));

  beforeEach(inject(function ($injector) {
    $state = $injector.get('$state');
  }));

  it('Should have /index state and  template', function () {
    expect($state.states['/index']).to.be.defined;
    expect($state.states['/index'].templateUrl).to.equal('templates/form1.html');
  });

  
});

