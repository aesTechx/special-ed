var helpers = require('./helpers.js'); // our custom middleware
<<<<<<< dd38860fa6dff41b77d2fb32afa75f2b76c5b0a6
var controllers = require('../app/controllers');
//TODO require event handlers (i.e. database controllers, api controllers, etc)
=======
var models=require('../app/models/center.js');
//console.log(models);
var controllers = require('../app/controllers/index.js');
>>>>>>> testing controllers

module.exports = function (app, express) {
/////////////////
<<<<<<< 76ebdbb643a93895dcf2b0af9647ab21d6094292
=======
	//app.post('/api/users/signinUser',controllers.Student.addstudent)
	app.post('/api/forms/submitForm', controllers.Record.addRecord);
>>>>>>> Assessment done
	app.get('/api/centers', controllers.Center.getAllCenter);
	app.get('/api/teachers',controllers.Teacher.getAllTeacher);
	app.get('/api/students',controllers.Student.getAllStudent);
	app.post('/api/center/addCenter',controllers.Center.addCenter);
	app.post('/api/teacher/addTeacher',controllers.Teacher.addTeacher);
	app.post('api/student/addstudent',controllers.Student.addStudent);
	app.get('/api/games',controllers.Game.getAllGame)
	// app.use(helpers.errorLogger);
	// app.use(helpers.errorHandler);
};
