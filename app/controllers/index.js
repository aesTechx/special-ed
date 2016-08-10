var db = require('../models');
var jwt = require('jwt-simple');
module.exports = {
	Center: {
		getAllCenter: function (req, res) {
			db.Center.findAll()
			.then(function(centers) {
				res.status(200);
				res.send(centers);
			});
		},
		addCenter: function (req, res) {
			// findOrCreate returns multiple resutls in an array
			// use spread to assign the array to function arguments
			db.Center.create({
					centername: req.body.centername,
					username: req.body.username,
					password: req.body.password
				}).then(function(center) {
					var token = jwt.encode(center, 'secret');
					res.json({token: token});
		  		});
		},
		signinCenter:function(req,res){
			var username=req.body.username;
			var password=req.body.password;
			db.Center.findOne({ where: {username: username,password:password}})
			.then(function(user) {
				if(user!==null){
					var token = jwt.encode(user, 'secret');
			    		res.json({token: token});
				}
			})
		}
	},
	Student:{
		getAllStudent:function(req,res){
			db.Student.findAll()
			.then(function(students) {
			  res.json(students);
			});
		},
		addStudent:function(req,res){
			db.Student.create({
				username: req.body.username,
				fullname: req.body.fullname,
				skillsResult: req.body.skillsResult,
				birthdate: req.body.birthdate
			})
			.then(function(student){
				var token = jwt.encode(student, 'secret');
				res.json({token: token});
			});
		},
		signinStudent:function(req,res){
			var username=req.body.username;
			var password=req.body.password;
			db.Center.findOne({ where: {username: username,password:password}})
			.then(function(user) {
				if(user!==null){
					var token = jwt.encode(user, 'secret');
					res.json({token: token});
				}
			})
		}
	},
	Teacher: {
		getAllTeacher: function(req, res) {
			db.Teacher.findAll()
			.then(function(teachers) {
				res.json(teachers);
			});
		},
		addTeacher: function(req, res) {
			db.Teacher.create({
				teachername: req.body.teachername,
				fullname: req.body.fullname,
				password: req.body.password,
				category: req.body.category
			})
			.then(function(teacher) {
				var token = jwt.encode(teacher, 'secret');
        		res.json({token: token});
				// res.sendStatus(201);
			})
			.catch(function(error){
				console.log(error);
			})
		},
	  	signinTeacher:function(req,res){
	  		var username=req.body.username;
		    	var password=req.body.password;
		    	db.Center.findOne({ where: {username: username,password:password}})
		    	.then(function(user) {
		    		if(user!==null){
		    			var token = jwt.encode(user, 'secret');
	                		res.json({token: token});
		    		}
			})
	  	}
	},
	Game: {
		getAllGame: function(req, res) {
			db.Game.findAll()
			.then(function(games) {
				res.json(games);
			});
		},
		addGame: function(req, res) {
		}
	},
	Record: {
		getAllRecords: function(req, res) {
			db.Record.findAll()
			.then(function(records) {
				res.json(records);
			});
		},
		

		addRecord: function(req, res) {
			console.log(req.body.SOCIAL)
			db.Record.create({
				SOCIAL: req.body.SOCIAL,
				PERSEVERATION: req.body.PERSEVERATION,
				SOMATOSENSORY_DISTURBANCE: req.body.SOMATOSENSORY_DISTURBANCE,
				COMMUNICATION_AND_DEVELOPMENT: req.body.COMMUNICATION_AND_DEVELOPMENT,
				ATTENTION_AND_SAFETY: req.body.ATTENTION_AND_SAFETY
			})
			.then(function(record) {
				res.json(record);
			});
		}
	}
}
