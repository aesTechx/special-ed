var helpers = require('./helpers.js'); // our custom middleware
var studentController = require('../app/controllers/studentController.js');
var gameController = require('../app/controllers/gameController.js');
var recordController = require('../app/controllers/recordController.js');
var specialistController = require('../app/controllers/specialistController.js');
var centerController = require('../app/controllers/centerController.js');

module.exports = function (app, express) {

  //center routes
  app.get('/api/centers', centerController.getAll);
  app.get('/api/center', centerController.getCenter);
  app.get('/api/center/signedin', centerController.checkAuth);
  app.post('/api/centers/signin', centerController.signin);
  app.post('/api/centers/signup', centerController.signup);
  app.post('/api/centers/editProfile', centerController.editCenter);
  app.get('/api/centers/requestPass/:email', centerController.requestNewPass);
  app.get('/api/center/teachers',centerController.getTeachers);
  app.get('/api/center/students',centerController.getStudents)
  
  //specialist routes
  app.get('/api/specialists', specialistController.getAll);
  app.get('/api/specialists/:id', specialistController.getSpecialist);
  app.get('/api/specialist/signedin', specialistController.checkAuth);
  app.post('/api/specialists/signin', specialistController.signin);
  app.post('/api/specialists/signup', specialistController.signup);
  app.put('/api/specialist/:username/edit', specialistController.editSpecialist);
  app.get('/api/specialists/requestPass/:email', specialistController.requestNewPass);
  
  //student routes
  app.get('/api/students/games', studentController.getGames);
  app.get('/api/students/specialists', studentController.getTeachers);
  app.get('/api/students', studentController.getAll);
  app.get('/api/students/:id', studentController.getStudent);
  app.get('/api/student/signedin', studentController.checkAuth);
  app.post('/api/students/signin', studentController.signin);
  app.post('/api/students/signup', studentController.signup);
  app.post('/api/students/editProfile', studentController.editStudent);
  app.get('/api/students/requestPass/:email', studentController.requestNewPass);

  //game routes
  app.get('/api/games', gameController.getAll);
  app.get('/api/game/:game', gameController.getGame);
  app.get('/api/game/:userId', gameController.getGame);
  app.get('/api/game/:userId/:game', gameController.getGame);
  app.post('/api/students/:studentId/games/:game/play/', gameController.playGame);

  //records routes
  app.get('/api/forms', recordController.getAll);
  app.get('/api/form/student', recordController.getRecord);
  app.post('/api/forms/submitForm', recordController.addRecord);

};
