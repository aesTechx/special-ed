'use strict';
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecordSchema = new mongoose.Schema({
  social: Number,
  preservation: Number,
  sensoryDisturbance: Number,
  communicationAndDevelopment: Number,
  attentionAndSafety: Number,
  studentId: {
 	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Student'
  }
});


var Record = mongoose.model('Record' , RecordSchema);

module.exports = Record;
