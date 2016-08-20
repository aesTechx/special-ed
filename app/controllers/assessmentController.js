var CarsAssessment = require('../models/assessment.js');
var Student = require('../models/student.js');
Q = require('q');
jwt = require('jwt-simple');
var emptyAssessment = require('../../Assets/carsAssessmentQuestions.js');

var findAssessment = Q.nbind(CarsAssessment.findOne, CarsAssessment);
var createAssessment = Q.nbind(CarsAssessment.create, CarsAssessment);
var findAllAssessments = Q.nbind(CarsAssessment.find, CarsAssessment);
var findAllStudent =Q.nbind(Student.find, Student)

module.exports = {
getNewAssessment: function (req, res, next) {
      res.json(emptyAssessment);
  	}
}