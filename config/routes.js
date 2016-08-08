var helpers = require('./helpers.js'); // our custom middleware
var controllers = require('../app/controllers');

module.exports = function (app, express) {
/////////////////
	//app.post('/api/users/signinUser',controllers.Student.addstudent)
	app.post('/api/forms/submitForm', controllers.Record.addRecord);
	app.get('/api/centers', controllers.Center.getAllCenter);
	app.get('/api/teachers', controllers.Teacher.getAllTeacher);
	app.get('/api/students', controllers.Student.getAllStudent);
	app.post('/api/center/addCenter', controllers.Center.addCenter);
	app.post('/api/teacher/addTeacher', controllers.Teacher.addTeacher);
	app.post('api/student/addstudent', controllers.Student.addStudent);
	app.get('/api/games', controllers.Game.getAllGame);
};
