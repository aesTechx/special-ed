var helpers = require('./helpers.js'); // our custom middleware
//console.log(models);
var controllers = require('../app/controllers/index.js');
module.exports = function (app, express) {
/////////////////
<<<<<<< 76ebdbb643a93895dcf2b0af9647ab21d6094292
=======
	//app.post('/api/users/signinUser',controllers.Student.addstudent)
	app.post('/api/forms/submitForm', controllers.Record.addRecord);
>>>>>>> Assessment done
	app.get('/api/centers', controllers.Center.getAllCenter);
	app.get('/api/teachers', controllers.Teacher.getAllTeacher);
	app.get('/api/students', controllers.Student.getAllStudent);
	app.post('/api/center/addCenter', controllers.Center.addCenter);
	app.post('/api/teacher/addTeacher', controllers.Teacher.addTeacher);
	app.post('api/student/addstudent', controllers.Student.addStudent);
	app.get('/api/games', controllers.Game.getAllGame);
///////////
	// app.use(helpers.errorLogger);
	// app.use(helpers.errorHandler);
};
