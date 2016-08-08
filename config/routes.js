var helpers = require('./helpers.js'); // our custom middleware
var models = require('../app/models/center.js');
//console.log(models);
var controllers = require('../app/controllers/index.js');
//TODO require event handlers (i.e. database controllers, api controllers, etc)
// var app = express();
module.exports = function (app, express) {
/////////////////
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