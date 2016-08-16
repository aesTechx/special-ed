'use strict';
var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new mongoose.Schema({
  level: Number,
  game: {
    type: String,
    enum: ['DragAndDrop']
  },
  userId: {
    type: Schema.Types.ObjectId, 
    ref: 'User'
  },
  typeOfUser: {
    type: String,
    enum: ['Autistic', 'NotAutistic']
  },
  newtiming: Number,
  besttime: Number,
  oldtime: Number,
  score: Number,
  repetition: Number
});


var Game = mongoose.model('Game' , GameSchema);

module.exports = Game;