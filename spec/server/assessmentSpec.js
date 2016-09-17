process.env.NODE_ENV = 'test';
var request = require('supertest');
var express = require('express');
var path = require('path');
var chai = require('chai');
var expect = chai.expect;
// var chaihttp = require('chai-http');
var app = require(path.join(__dirname, '..', '..', './server.js'));
var mongoose = require('mongoose');
var should = require('chai').should();
// chai.use(chaihttp);
describe('Assessment Controller', function () {

	// beforeEach(function (done) {
	// 	mongoose.connection.db.dropDatabase(done);
	// });
	it('should get assessment questions', function(done) {
		request(app)
			.get('/api/assessments/cars/new')
			.expect(200)
			.expect(function (res) {
				expect(res.body.length).to.equal(76);
				expect(res.body[0].value).to.equal(null);
				expect(res.body[35].category).to.equal('Sensory Disturbance');
				expect(res.body[10].questionNum).to.equal(11)
			})
			.end(done);
	});
	it('should save assessment questions', function(done) {
		request(app)
			.post('/api/assessments/cars/save')
			.send({'name': 'ali', 'question': '[]', 'studentId': '000'})
			.expect(201)
			.expect(function(res) {
				console.log(res)
			})
			.end(done)
	})
})

// process.env.NODE_ENV = 'test';
// process.env.NODE_ENV = 'test';
// var expect = require ('chai').expect;
// var path = require('path')
// var app = require(path.join(__dirname,'../../' ,'./server.js'));
// var chai = require('chai')
//       ,chaiHttp = require('chai-http');
// chai.use(chaiHttp);

// describe('Assessment database', function (done) {
// 	'use strict';
// 	it('should get assessment questions', function(done) {
// 		chai.request(app)
// 		.get('/api/assessments/cars/new')
// 		.end(function(err, res) {
// 			console.log(res)
// 			expect(res.status).to.be.equal(200);
// 			// res.status.should.have.status(200);
//    //        	res.should.be.json;
// 			// res.body.length.should.be(76);
// 			// res.body[0].value.should.equal(null);
// 			// res.body[10].questionNum.should.equal(11);
// 			// res.body[35].category.should.equal('Sensory Disturbance');
// 			done();
// 		})
// 	})
	// it('should save assessment questions', function() {
	// 	chai.request(app)
	// 		.post('http://127.0.0.1:8000/api/assessments/cars/save')
	// 		.send({'name': 'ali', 'question': '[]', 'studentId': '000'})
	// 		.end(function(err, res) {
	// 			console.log(res, 'xxxxxxxxxx')
	// 			res.status.should.have.status(200);
	// 	})
	// })
// })
