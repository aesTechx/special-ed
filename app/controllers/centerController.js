var sendEmail = require('../../emailComms.js');
var Center = require('../models/center.js');
Q = require('q');
jwt = require('jwt-simple');

var findCenter = Q.nbind(Center.findOne, Center);
var createCenter = Q.nbind(Center.create, Center);
var findAllCenters = Q.nbind(Center.find, Center);

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
    Center.findOne({username: req.params.username}, function (err, user) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(user);
    });
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
    Center.findOne({username: req.params.username}, function(err, user) {
      if (err) {
        res.status(500).send(err);
      } else if (!user) {
        res.status(500).send(new Error ('User does not exist'));
      } else {

        user.centername = req.body.centername || user.centername;
        user.password = req.body.password || user.password;
        user.foundationDate = req.body.foundationDate || user.foundationDate;
        user.skillsResult = req.body.skillsResult || user.skillsResult;
        user.profilePicture = req.body.profilePicture || user.profilePicture;
        user.todos = req.body.todos || user.todos;
        user.saveApplication = req.body.saveApplication || user.saveApplication;
        user.teachers = req.body.teachers || user.teachers;
        user.students = req.body.students || user.students;
        user.games = req.body.games || user.games;
        user.longitude = req.body.longitude || user.longitude;
        user.latitude = req.body.latitude || user.latitude;
        user.address = req.body.address || user.address;
        user.email = req.body.email || user.email;
        user.phone = req.body.phone || user.phone;
        user.mobile = req.body.mobile || user.mobile;
        user.rating = req.body.rating || user.rating;
        user.facebook = req.body.facebook || user.facebook;

        user.save(function(err, savedUser) {
          if (err) {
            res.status(500).send(error);
          } else {
            res.status(201).send(JSON.stringify(savedUser));
          }
        });
      }
    });
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
