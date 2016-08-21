var sendEmail = require('../../emailComms.js');
var Center = require('../models/center.js');
Q = require('q');
jwt = require('jwt-simple');
var Specialist = require('../models/specialist.js');
var Student = require('../models/student.js');

var updateOneSpecialist = Q.nbind(Specialist.findOneAndUpdate, Specialist);
var findCenter = Q.nbind(Center.findOne, Center);
var createCenter = Q.nbind(Center.create, Center);
var findAllCenters = Q.nbind(Center.find, Center);
var findAllSpecialist = Q.nbind(Specialist.find, Specialist);
var findAllStudent =Q.nbind(Student.find, Student)

module.exports = {
  getAll: function (req, res, next) {
    Center.find({}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(users);
    });
  },
  getCenter: function (req, res, next) {
    var token = req.headers['x-access-token'];
    var center = jwt.decode(token, 'secret');
    Center.findOne({_id: center._id}, function (err, user) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
  },
  getTeachers:function(req,res,next){
    var token = req.headers['x-access-token'];
    user = jwt.decode(token, 'secret');
    findCenter({username:user.username})
    .then(function(user){
      return user.specialists
    })
    .then(function(teachers){
        findAllSpecialist({'_id': { $in: teachers }})
        .then(function(teachers){
          res.json(teachers)
        })
        .fail(function(err){
          res.send(204)
        })
      })
  },
  getStudents:function(req,res,next){
    var token = req.headers['x-access-token'];
    user = jwt.decode(token, 'secret');
    findCenter({username:user.username})
    .then(function(user){
      return user.students
    })
    .then(function(students){
        findAllStudent({'_id': { $in: students }})
        .then(function(students){
          res.json(students)
        })
        .fail(function(err){
          res.send(204)
        })
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
      var center = jwt.decode(token, 'secret');
      findCenter({username: center.username})
      .then(function (user) {
        if (user) {
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
    console.log(req.body)
    var username = req.body.username;
    var password = req.body.password;
    Center.findOne({username: username})
    .exec(function (error, user) {
      if (error) {
        console.log(error);
        res.status(500).send(error);
      } else if (!user) {
        res.status(500).send(new Error('User does not exist'));
      } else {
        //console.log('hi')
        Center.comparePassword(password, user.password, res, function(found) {
          if (!found) {
            res.status(500).send('Wrong Password');
          } else {
            var token = jwt.encode(user, 'secret');
            res.setHeader('x-access-token', token);
            res.json({token: token, userId: user._id});
          }
        });
      }
    });
  },
  signup: function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var centername = req.body.centername;
    var email = req.body.email;
    var profilePicture = req.body.profilePicture;
    var longitude = req.body.longitude;
    var latitude = req.body.latitude;
    var address = req.body.address;
    console.log(longitude);
    Center.findOne({username: username})
      .exec(function(err, user) {
        if (!user) {
          var newCenter = new Center({
            password: password,
            username: username,
            centername: centername,
            email: email,
            profilePicture: profilePicture,
            longitude: longitude,
            latitude: latitude,
            address: address
          });
          newCenter.save(function(err, newCenter) {
            console.log(newCenter)
            var token = jwt.encode(newCenter, 'secret');
            res.setHeader('x-access-token',token);
            res.json({token: token, userId : newCenter._id});
          });
        } else {
          res.redirect('/signup');
        }
      });
  },
  editCenter: function(req, res, next) {
    var token = req.headers['x-access-token'];
    console.log(token)
    var user = jwt.decode(token, 'secret');
    console.log(user);
    Center.findOne({username: user.username}, function(err, center){
      if(err){
        res.status(500).send(err);
      } else if (!center){
        res.status(500).send(new Error ('center does not exist'));
      } else {
        console.log(req.body.foundationDate)
        center.foundationDate=req.body.foundationDate || center.foundationDate;
        center.centername = req.body.fullname || center.centername;
        center.password = req.body.password || center.password
        center.profilePicture = req.body.profilePicture || center.profilePicture;
        center.phone = req.body.phone || center.phone;
        center.mobile = req.body.mobile || center.mobile;
        center.email = req.body.email || center.email;

        center.save(function(err, savedUser){
          console.log(savedUser);
          if(err){
            res.status(500).send(error);
          } else {
            console.log()
            res.status(201).send(JSON.stringify(savedUser));
          }
        });
      }
    })
  },
  requestNewPass: function(req, res) {
    Center.findOne({email: req.params.email}, function (err, user) {
      if (err) {
        res.status(500).send(err);
      } else if (user) {
        var newPass = Math.random().toString(36).slice(-8);
        user.password = newPass;
        user.save(function(err, savedUser) {
          if (err) {
            res.status(500).send(error);
          } else {
            var emailBody = 'Dear ' + user.centername + ';';
            emailBody += '\n\nYour Username is: ' + savedUser.username;
            emailBody += '\nYour New Password is: ' + newPass + '\n\nRegards,\nSpecialEd Team';   

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
    });
  }   
};
