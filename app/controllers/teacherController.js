var db = require('../models');
var jwt = require('jwt-simple');

module.exports = {

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
			category: req.body.category,
			password: req.body.password
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
		var teachername = req.body.username;
	var password = req.body.password;
	db.Center.findOne({ where: {teachername: teachername, password: password }})
	.then(function(user) {
		if(user!== null){
			var token = jwt.encode(user, 'secret');
      res.json({token: token});
		}
  })
  .catch(function(err){
    res.json(err)
  })
  }
}

}