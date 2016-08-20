'use strict';
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CarsAssessmentSchema = new mongoose.Schema({
	Name: String,
	Questions: {},
	studentId: { 
  		type: Schema.Types.ObjectId,
  		ref: 'Student'
  	}
});


var CarsAssessment = mongoose.model('CarsAssessment' , CarsAssessmentSchema);

module.exports = CarsAssessment;
