var Q = require('q');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

var StudentSchema = new mongoose.Schema({
  username: {
  	type: String,
    unique: true,
  	required: true
  },
  centerId: { 
  	type: mongoose.Schema.Types.ObjectId,
  	ref: 'Center',
  },
  password : {
    type: String,
    required: true
  },
  fullname: String,
  birthdate: Date,
  skillsResult: [Number],
  profilePicture: String,
  emergencyContact: String,
  emergencyNumber: String,
  saveApplication: { type : Array , "default" : [] },
  todos: { type : Array , "default" : [] },
  teachers: [{ type: Schema.Types.ObjectId, ref: 'Specialist' }],
  games: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
  status: {
    type: String,
    enum: ['Active', 'Pending', 'Rejected']
  }
});
var Student = mongoose.model('Student', StudentSchema);


Student.comparePassword = function(candidatePassword, savedPassword, res, cb){
  bcrypt.compare( candidatePassword, savedPassword, function(err, isMatch){
    if(err){
      res.status(500).send('Error');
    } else if(cb){
      cb(isMatch);
    }
  });
};


StudentSchema.pre('save', function (next) {
  var student = this;

  // only hash the password if it has been modified (or is new)
  if (!student.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(student.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      student.password = hash;
      student.salt = salt;
      next();
    });
  });
});


module.exports = Student;