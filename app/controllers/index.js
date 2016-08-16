var db = require('../models');
var jwt = require('jwt-simple');

module.exports = {
  Center: {
    getAllCenters: function (req, res) {
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
        var token = jwt.encode(center, 'secret');
        res.json({token: token});
      });
    },
    signinCenter: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      db.Center.findOne({ where: { username: username}})
      .then(function(user) {
        if (user !== null) {
          var token = jwt.encode(user, 'secret');
          res.json({ token: token });
        }
      });
    }
  },
  Student: {
    getAllStudent: function (req, res) {
      db.Student.findAll()
      .then(function(students) {
        res.json(students);
      });
    },
    addStudent: function (req, res) {
      db.Student.create ({
        username: req.body.username,
        fullname: req.body.fullname,
        skillsResult: req.body.skillsResult,
        birthdate: req.body.birthdate,
        password: req.body.password
      })
      .then(function(student) {
        var token = jwt.encode(student, 'secret');
        res.json({token: token});
      });
    },
    signinStudent: function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      db.Center.findOne({ where: {username: username, password: password}})
			.then( function (user) {
        if (user !== null) {
          var token = jwt.encode(user, 'secret');
          res.json({token: token});
        }
      });
    }
  },
	Teacher: {
		getCurrentTeacher:function(req,res){
			var token = req.headers['x-access-token'];
			user = jwt.decode(token, 'secret');
			// console.log(user);
			db.Teacher.findOne({where:{username:user.username}})
			.then(function(teacher){
				console.log(teacher.dataValues);
				res.json(teacher.dataValues);
			});
		},
		getAllTeacher: function(req, res) {
			db.Teacher.findAll()
			.then(function(teachers) {
				res.json(teachers);
			});
		},
		addTeacher: function(req, res) {
			console.log(req.body)
			db.Teacher.create({
				fullname: req.body.fullname,
				username: req.body.teachername,
				password: req.body.password,
				category: req.body.category,
				emergencyCall: req.body.emergencyCall,
				address: req.body.address

			})
			.then(function(teacher) {
				var token = jwt.encode(teacher, 'secret');
        		res.json({token: token});
			})
			.catch(function(error){
				console.log(error);
			})
		},
	  	signinTeacher:function(req, res) {
	  		var username = req.body.username;
	    	var password = req.body.password;
	    	console.log(username)
	    	db.Teacher.findOne({ where: {username: username}})
	    	.then(function(user) {
	    		console.log('user', user)
	    		if(user !== null) {
	    			var token = jwt.encode(user, 'secret');
	    			console.log('token', token)
	          		res.json({token: token});
	    		}
	      	})
	      	.catch(function(err){
	        	console.log(err)
	        	res.json(err)
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