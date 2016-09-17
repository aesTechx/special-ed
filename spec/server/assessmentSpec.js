process.env.NODE_ENV = 'test';
var request = require('supertest');
var express = require('express');
var path = require('path');
var chai = require('chai');
var expect = chai.expect;
var app = require(path.join(__dirname, '..', '..', './server.js'));
var mongoose = require('mongoose');
var should = require('chai').should();

describe('Assessment Controller', function () {
  it('should get assessment questions', function(done) {
    request(app)
    .get('/api/assessments/cars/new')
    .expect(200)
    .expect(function (res) {
      expect(res.body.length).to.equal(76);
      expect(res.body[0].value).to.equal(null);
      expect(res.body[35].category).to.equal('Sensory Disturbance');
      expect(res.body[10].questionNum).to.equal(11);
    })
    .end(done);
  });
  it('should save assessment questions', function(done) {
    request(app)
    .post('/api/assessments/cars/save')
    .send({'name': 'ali', 'question': '[]', 'studentId': '000'})
    .expect(201)
    .expect(function(res) {
      console.log(res);
    })
    .end(done);
  });
});