var path = require('path');
var app = require(path.join(__dirname, '..', './server.js'));
var controller = require(path.join(__dirname, '..', './app/controllers/index.js'));
var should = require('chai').should();
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);
var models = require(path.join(__dirname, '..', './app/models'));

describe('centerGetPost()', function () {
	'use strict';
		
	it('post a new center to DB', function(){
	chai.request(app)
		.post('http://127.0.0.1:8000/api/center/addCenter')
		.send({centername:'eshraq',password:'eshraq',username:'eshraq'})
		.end(function(err,res){
			res.should.have.status(201);
			res.should.be.json;
			res.body.should.have.property('SUCCESS');
			res.body.SUCCESS.should.be.a('object');
					// res.body.SUCCESS.should.have.property('username');
					// res.body.SUCCESS.should.have.property('centername');
					// res.body.SUCCESS.should.have.property('password');
					// res.body.SUCCESS.should.have.property('id');
					// res.body.SUCCESS.username.should.equal('eshraq');
					// res.body.SUCCESS.centername.should.equal('eshraq');
			res.body.should.be.a('object');
			done();
				});
		});
		it('request all centers from the DB',function(done){
			chai.request(app)
			.get('http://127.0.0.1:8000/api/centers')
			.end(function(err,res){
				res.should.have.status(200);
				// res.body.should.be.json;
				// res.body.should.be.a('array');
				// res.body[0].should.have.property('id');
				// res.body[0].should.have.property('centername');
				// res.body[0].should.have.property('username');
				// res.body[0].should.have.property('password');
				// res.body[0].centername.should.equal('eshraq');
				// res.body[0].username.should.equal('eshraq');
				done();
			});
			
		});
	});

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

