var sendEmail = require('../../emailComms.js');
var Specialist = require('../models/specialist.js');
Q = require('q');
jwt = require('jwt-simple');
var Center = require('../models/center.js');

var findOneCenter= Q.nbind(Center.findOne,Center);
var updateOneCenter = Q.nbind(Center.findOneAndUpdate, Center);
var findSpecialist = Q.nbind(Specialist.findOne, Specialist);
var createSpecialist = Q.nbind(Specialist.create, Specialist);
var findAllSpecialists = Q.nbind(Specialist.find, Specialist);

module.exports = {
  getAll : function (req, res, next){
    Specialist.find({}, function(err, users) {
      if(err){
        res.status(500).send(err);
      }
        res.json(users)
    })
  },
  getSpecialist : function (req,res,next) {
    Specialist.findOne({username: req.params.username}, function (err , user) {
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
      var specialist = jwt.decode(token, 'secret');
      findStudent({username: specialist.username})
      .then(function (specialist) {
        if (specialist) {
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
    Specialist.findOne({username: username})
    .exec(function (error, user) {
      if(error){
        console.log(error);
        res.status(500).send(error);
      } else if (!user) {
        res.status(500).send(new Error('User does not exist'));
      } else {
        //console.log('hi')
        Specialist.comparePassword(password,user.password, res, function(found){
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
    var profilePicture = req.body.profilePicture;
    var center = req.body.center;
    findOneCenter({centername:center})
    .then(function(center){
      console.log(center)
    Specialist.findOne({ username: username })
      .exec(function(err, user) {
        if (!user) {
          var newSpecialist = new Specialist({
            password: password,
            username: username,
            fullname: fullname,
            email: email,
            profilePicture: profilePicture,
            centerId: center._id
          });
          newSpecialist.save(function(err, newSpecialist) {
            updateOneCenter({_id: center._id}, { $push: {specialists: newSpecialist._id }})
            .then(function (center) {
              console.log(center)
              var token = jwt.encode(newSpecialist, 'secret');
              res.setHeader('x-access-token',token);
              res.json({ token: token, userId: newSpecialist._id });
            })
          });
        } else {
          res.redirect('/signup');
        }
      });   
    })
  },
  editSpecialist : function(req, res, next){
    Specialist.findOne({username: req.params.usernam}, function(err, user){
      if(err){
        res.status(500).send(err);
      } else if (!user){
        res.status(500).send(new Error ('User does not exist'));
      } else {
        user.fullname = req.body.fullname || user.fullname;
        user.password = req.body.password || user.password;
        user.centerId = req.body.centerId || user.centerId;
        user.skills = req.body.skills || user.skills;
        user.specialty = req.body.specialty || req.body.specialty
        user.centerId = req.body.centerId || req.body.centerId        
        user.profilePicture = req.body.profilePicture || user.profilePicture;
        user.emergencyContact = req.body.emergencyContact || user.emergencyContact;
        user.emergencyNumber = req.body.emergencyNumber || user.emergencyNumber;
        user.todos = req.body.todos || user.todos;
        user.reference = req.body.reference || user.reference;
        user.experience = req.body.experience || user.experience;
        user.certified = req.body.certified || user.certified;
        user.students = req.body.students || user.students;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        user.mobile = req.body.mobile || user.mobile;
        user.rating = req.body.rating || user.rating;

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
    Specialist.findOne({email: req.params.email}, function (err , user) {
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