'use strict';
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var DragAndDropSchema = new mongoose.Schema({
  level: Number,
  userId: {type: Schema.Types.ObjectId, ref: 'User'}
  typeOfUser: {
    type: String,
    enum: ['Autistic', 'NotAutistic']
  },
  newtiming: Number,
  besttime: Number,
  oldtime: Number,
  repetition: Number,
  right: Number
});


var DragAndDrop = mongoose.model('DragAndDrop' , DragAndDropSchema);

module.exports = DragAndDrop;
