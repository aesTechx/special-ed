var db = require('../models');
<<<<<<< 2bea16ce30bb2406a7626eb204c85f736a33f875
=======


>>>>>>> Server to serve client
module.exports = {
  _getAll: function(field){
    db[field].findAll()
      .then(function(results){
      return results;
    })
  },
	Center: {
		getAllCenter: function (req, res) {
			db.Center.findAll()
			.then(function(centers) {
				res.json(centers);
			});
		},
		addCenter: function (req, res) {
		// findOrCreate returns multiple resutls in an array
		// use spread to assign the array to function arguments
			db.Center.create({
				centername: req.body.centername,
				username: req.body.fullname,
				password: req.body.password
			})
			.then(function(message) {
				res.sendStatus(201);
			});
		}
	},
	Student: {
		getAllStudent: function(req, res) {
			db.Student.findAll()
			.then(function(students) {
				res.json(students);
			});
		},
		addStudent: function(req, res) {
			db.Student.create({
				username: req.body.username,
				fullname: req.body.fullname,
				skillsResult: req.body.skillsResult,
				birthDate: req.body.birthDate
			})
			.then(function() {
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
				fullname: req.body.fullname,
				category: req.body.category
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
};