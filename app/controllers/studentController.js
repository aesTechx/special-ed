var sendEmail = require('../../emailComms.js');
var Student = require('../models/student.js');
Q = require('q');
jwt = require('jwt-simple');

var findStudent = Q.nbind(Student.findOne, Student);
var createStudent = Q.nbind(Student.create, Student);
var findAllStudents = Q.nbind(Student.find, Student);

module.exports = {
  getAll : function (req, res, next){
    Student.find({}, function(err, users) {
      if(err){
        res.status(500).send(err);
      }
      res.json(users)
    })
  },
  getStudent : function (req,res,next) {
    Student.findOne({username: req.params.username}, function (err , user) {
      if(err)
        res.status(500).send(err);
      res.json(user);
    })
  },
  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      var student = jwt.decode(token, 'secret');
      findStudent({username: student.username})
      .then(function (center) {
        if (center) {
          res.send(200);
        } else {
          res.send(401);
        }
      })
      .fail(function (error) {
        next(error);
      });
    }
  },
  signin: function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    Student.findOne({username: username})
    .exec(function (error, user) {
      if(error){
        console.log(error);
        res.status(500).send(error);
      } else if (!user) {
        res.status(500).send(new Error('User does not exist'));
      } else {
        //console.log('hi')
        Student.comparePassword(password,user.password, res, function(found){
          if(!found){
            res.status(500).send('Wrong Password');
          } else {
            var token = jwt.encode(user, 'secret');
            res.setHeader('x-access-token',token);
            res.json({token: token, userId : user._id});
          }
        });
      }
    });
  },
  signup : function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var fullname = req.body.fullname;
    var email = req.body.email;
    var birthdate = req.body.birthdate;
    var profilePicture = req.body.profilePicture;
    var centerId = req.body.centerId;

    Student.findOne({ username: username })
      .exec(function(err, user) {
        if (!user) {
          var newStudent = new Student({
            password: password,
            username: username,
            fullname: fullname,
            birthdate: birthdate,
            email: email,
            profilePicture: profilePicture,
            centerId: centerId
          });
          newStudent.save(function(err, newStudent) {
            res.send(200,'done')
          });
        } else {
          res.redirect('/signup');
        }
      });
  },
  editStudent : function(req, res, next){
    Student.findOne({username: req.params.username}, function(err, user){
      if(err){
        res.status(500).send(err);
      } else if (!user){
        res.status(500).send(new Error ('User does not exist'));
      } else {

        user.fullname = req.body.fullname || user.fullname;
        user.password = req.body.password || user.password
        user.birthdate = req.body.birthdate || user.birthdate;
        user.centerId = req.body.centerId || user.centerId;
        user.skillsResult = req.body.skillsResult || user.skillsResult;
        user.profilePicture = req.body.profilePicture || user.profilePicture;
        user.emergencyContact = req.body.emergencyContact || user.emergencyContact;
        user.emergencyNumber = req.body.emergencyNumber || user.emergencyNumber;
        user.todos = req.body.todos || user.todos;
        user.saveApplication = req.body.saveApplication || user.saveApplication;
        user.teachers = req.body.teachers || user.teachers;
        user.games = req.body.games || user.games;

        user.save(function(err, savedUser){
          if(err){
            res.status(500).send(error);
          } else {
            res.status(201).send(JSON.stringify(savedUser));
          }
        });
      }
    })
  },
  requestNewPass : function(req,res){
    Student.findOne({email: req.params.email}, function (err , user) {
      if(err) {
        res.status(500).send(err);
      } else if(user) {
        var newPass = Math.random().toString(36).slice(-8);
        user.password = newPass;
        user.save(function(err, savedUser){
          if(err){
            res.status(500).send(error);
          } else {
            var emailBody = 'Dear ' + user.fullname + ';';
              emailBody += '\n\nYour Username is: ' +savedUser.username;
              emailBody += '\nYour New Password is: '+ newPass + '\n\nRegards,\nSpecialEd Team';   

            // email params
            var mailOptions = {
              to: req.params.email,
              subject: 'New Password',
              text: emailBody
            };
            sendEmail(mailOptions);
            res.status(201).send('Password Sent By Email');
          }
        });
      } else {
        res.status(500).send('No matching email found');
      }
    })
  }   
}