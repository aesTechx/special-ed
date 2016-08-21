'use strict';
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarsAssessmentSchema = new mongoose.Schema({
	name: String,
	questions: {},
	studentId: String
});


var CarsAssessment = mongoose.model('CarsAssessment' , CarsAssessmentSchema);

module.exports = CarsAssessment;
