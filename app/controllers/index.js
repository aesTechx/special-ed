var db = require('../models');
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
					username: req.body.fullname,
					password: req.body.password
				}).then(function(center) {
					res.sendStatus(201);
	      		});
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
	  			birthDate: req.body.birthDate
	  		})
	  		.then(function(){
	  			res.sendStatus(201);
	  		});
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
				username: req.body.username,
				fullname: req.body.fullname,=
				category: req.body.category,
				password: req.body.password
			})
			.then(function() {
				res.sendStatus(201);
			});
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
	}
}