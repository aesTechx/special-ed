'use strict';
var Q = require('q');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var CenterSchema = new mongoose.Schema({
  centername: {
  	type: String,
  	unique: true,
  	required: true
  },
  username: {
  	type: String,
    unique: true,
  	required: true
  },
  password : {
    type: String,
    required: true
  },
  foundationDate: Date,
  profilePicture: String,
  todos: [String],
  teachers: [{ type: Schema.Types.ObjectId, ref: 'Specialist' }],
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
  pendingSpecialistApplications: [{ type: Schema.Types.ObjectId, ref: 'Specialist' }],
  pendingStudentApplications: [{ type: Schema.Types.ObjectId, ref: 'Student'}],
  rejectedSpecialistApplications: [{ type: Schema.Types.ObjectId, ref: 'Specialist' }],
  rejectedStudentApplications: [{ type: Schema.Types.ObjectId, ref: 'Student'}],
  longitude: {type:Number,default:0},
  latitude: {type:Number,default:0},
  address: String,
  email: String,
  phone: String,
  mobile: String,
  rating: {type:Number,default:0},
  facebook: String
});
var Center = mongoose.model('Center', CenterSchema);


Center.comparePassword = function(candidatePassword, savedPassword, res, cb){
  bcrypt.compare( candidatePassword, savedPassword, function(err, isMatch){
    if(err){
      res.status(500).send('Error');
    } else if(cb){
      cb(isMatch);
    }
  });
};


CenterSchema.pre('save', function (next) {
  var center = this;

  // only hash the password if it has been modified (or is new)
  if (!center.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(center.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      center.password = hash;
      center.salt = salt;
      next();
    });
  });
});


module.exports = Center;