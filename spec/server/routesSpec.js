// process.env.NODE_ENV = 'test';
var path = require('path');
var chai = require('chai');
var chaihttp = require('chai-http');
var app = require('../../server');
var should = require('chai').should();
chai.use(chaihttp);

describe('ControllersSpecs', function () {
  describe('studentGetPost()', function () {
    'use strict';
    it('post a new student to DB', function() {
      chai.request(app)
      .post('/api/student/signup')
      .send({username: 'ali', password: 'ali', fullname: 'ali', birthdate: '25/11/2015'})
      .end(function(err, res) {
        res.should.have.status(201);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body.should.have.property('SUCCESS');
        res.body.SUCCESS.should.have.property('id');
        res.body.SUCCESS.should.have.property('username');
        res.body.SUCCESS.should.have.property('fullname');
        res.body.SUCCESS.should.have.property('password');
        res.body.SUCCESS.should.have.property('skillsResult');
        res.body.SUCCESS.should.have.property('birthDate');
        res.body.SUCCESS.should.have.property('centerId');
        res.body.SUCCESS.username.should.equal('ali');
        res.body.SUCCESS.fullname.should.equal('ali');
        res.body.SUCCESS.skillsResult.should.equal('1');
        res.body.SUCCESS.birthDate.should.equal('25/11/2015');
        done();
      });
    });
    it('request all students from the DB', function() {
      chai.request(app)
        .get('http://127.0.0.1:8000/api/students')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('id');
          res.body[0].should.have.property('username');
          res.body[0].should.have.property('fullname');
          res.body[0].should.have.property('password');
          res.body[0].should.have.property('skillsResult');
          res.body[0].should.have.property('birthDate');
          res.body[0].should.have.property('centerId');
          done();
        });
    });
  });
  describe('centerGetPost()', function () {
    'use strict';
    it('post a new center to DB', function() {
      chai.request(app)
      .post('http://127.0.0.1:8000/api/centers/signup')
      .send({centername: 'eshraq', password: 'eshraq', username: 'eshraq'})
      .end(function(err, res) {
        res.should.be.json;
        res.body.should.have.property('SUCCESS');
        res.body.should.be.a('object');
        done();
      });
    });
    it('request all students from the DB', function() {
      chai.request(app)
        .get('http://127.0.0.1:8000/api/centers')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('id');
          res.body[0].should.have.property('username');
          res.body[0].should.have.property('centername');
          done();
        });
    });
  });
  describe('specialistGetPost()', function () {
    'use strict';
    it('post a new specialist to DB', function() {
      chai.request(app)
        .post('http://127.0.0.1:8000/api/specialist/signup')
        .send({username: 'teacher', password: 'teacher', fullname: 'teacher'})
        .end(function(err, res) {
          res.should.have.status(201);
          res.body.should.have.property('SUCCESS');
          res.should.be.json;
          res.body.should.be.a('array');
          res.body.SUCCESS.should.have.property('username');
          res.body.SUCCESS.should.have.property('fullname');
          res.body.SUCCESS.should.have.property('password');
          res.body.SUCCESS.should.have.property('specialty');
          res.body.SUCCESS.should.have.property('centerId');
          res.body.SUCCESS.username.should.equal('teacher');
          res.body.SUCCESS.fullname.should.equal('teacher');
          res.body.SUCCESS.password.should.equal('teacher');
          done();
        });
    });
    it('request all specialists from the DB', function() {
      chai.request(app)
        .get('http://127.0.0.1:8000/api/specialists')
        .end(function(err, res) {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('id');
          res.body[0].should.have.property('username');
          res.body[0].should.have.property('fullname');
          res.body[0].should.have.property('specialty');
          res.body[0].should.have.property('centerId');
          done();
        });
    });
  });  
});
