var path = require('path');
var app = require(path.join(__dirname, '..', './server.js'));
var controller = require(path.join(__dirname,'..','./app/controllers/index.js'));
var should = require('chai').should();
var chai = require('chai');
var chaihttp=require('chai-http');
chai.use(chaihttp);
var models = require(path.join(__dirname, '..', './app/models'));

	describe('centerGetPost()', function () {
		'use strict';
		
		it('post a new center to DB',function(){
		 chai.request(app)
				.post('http://127.0.0.1:8000/api/center/addCenter')
				.send({centername:'eshraq',password:'eshraq',username:'eshraq'})
				.end(function(err,res){
					res.should.have.status(201);
					res.should.be.json;
					res.body.should.have.property('SUCCESS');
					res.body.SUCCESS.should.be.a('object');
					res.body.SUCCESS.should.have.property('username');
					res.body.SUCCESS.should.have.property('centername');
					res.body.SUCCESS.should.have.property('password');
					res.body.SUCCESS.should.have.property('id');
					res.body.SUCCESS.username.should.equal('eshraq');
					res.body.SUCCESS.centername.should.equal('eshraq');
					res.body.should.be.a('object');
					done();
				});
		});
		it('request all centers from the DB',function(done){
			chai.request(app)
			.get('http://127.0.0.1:8000/api/centers')
			.end(function(err,res){
				res.should.have.status(200);
				res.body.should.be.json;
				res.body.should.be.a('array');
				res.body[0].should.have.property('id');
				res.body[0].should.have.property('centername');
				res.body[0].should.have.property('username');
				res.body[0].should.have.property('password');
				res.body[0].centername.should.equal('eshraq');
				res.body[0].username.should.equal('eshraq');
				done();
			});
			
		});
	});

	describe('studentGetPost()', function () {
		'use strict';
		it('post a new student to DB',function(){
			chai.request(app)
			.post('http://127.0.0.1:8000/api/student/addstudent')
			.send({username:'ali',password:'ali',fullname:'ali',skillsResult:1,birthDate:25/11/2015})
			.end(function(err,res){
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
				res.body.SUCCESS.skillsResult.should.equal(1);
				res.body.SUCCESS.birthDate.should.equal(25/11/2015);
				done();
			});
		});
		it('request all students from the DB',function(){
			chai.request(app)
			.get('http://127.0.0.1:8000/api/students')
			.end(function(err,res){
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
	describe('teacherGetPost()', function () {
		'use strict';
	it('post a new teacher to DB',function(){
		chai.request(app)
			.post('http://127.0.0.1:8000/api/teacher/addTeacher')
			.send({username:'teacher',password:'teacher',fullname:'teacher',category:'speech'})
			.end(function(err,res){
				res.should.have.status(201);
				res.body.should.have.property('SUCCESS');
				res.should.be.json;
				res.body.should.be.a('array');
				res.body.SUCCESS.should.have.property('id');
				res.body.SUCCESS.should.have.property('username');
				res.body.SUCCESS.should.have.property('fullname');
				res.body.SUCCESS.should.have.property('password');
				res.body.SUCCESS.should.have.property('category');
				res.body.SUCCESS.should.have.property('centerId');
				res.body.SUCCESS.username.should.equal('teacher');
				res.body.SUCCESS.fullname.should.equal('teacher');
				res.body.SUCCESS.password.should.equal('teacher');
				res.body.SUCCESS.category.should.equal('speech');
				done();
			});
	});
	it('request all teachers from the DB',function(){
		chai.request(app)
			.get('http://127.0.0.1:8000/api/teachers')
			.end(function(err,res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				res.body[0].should.have.property('id');
				res.body[0].should.have.property('username');
				res.body[0].should.have.property('fullname');
				res.body[0].should.have.property('category');
				res.body[0].should.have.property('centerId');
				done();
			});
	});
	});
	describe('teacherGetPost()', function () {
		'use strict';
		it('request all games from the DB',function(){
		chai.request(app)
			.get('http://127.0.0.1:8000/api/games')
			.end(function(err,res){
				res.should.have.status(200);
				res.should.be.json;
				res.body.should.be.a('array');
				done();
			});
		});
	});