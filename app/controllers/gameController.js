var sendEmail = require('../emailComms.js');
var Game = require('../models/game.js');
var Student = require('../models/student.js');
Q = require('q');
jwt = require('jwt-simple');

var findGame = Q.nbind(Game.findOne, Game);
var createGame = Q.nbind(Game.create, Game);
var findAllGames = Q.nbind(Game.find, Game);
var findStudent = Q.nbind(Student.findOne, Student);

module.exports = {
  getAll : function (req, res, next){
    Game.find({}, function(err, games) {
      if(err){
        res.status(500).send(err);
      }
        res.json(games)
    })
  },
  getGame : function (req, res, next) {
    Game.findOne({game: req.params.game}, function (err , user) {
      if(err)
        res.status(500).send(err);
      res.json(user);
    })
  },
  getUserGames: function (req, res, next) {
    var userId = req.params.userId.toString();
    findAllGames({userId: req.params.userId})
    .then(function (games) {
      res.json(games);
    })
    res.status(500).send(err);
  },
  getUserGame: function (req, res, next) {
    var userId = req.params.userId.toString();
    findAllGames({userId: userId, game: req.body.game})
    .then(function (games) {
      res.json(games);
    })
    res.status(500).send(err);
  },
  playGame : function(req, res, next) {
  	var studentId = req.params.id.toString();
    var level = req.body.level;
    var game = req.body.game;
    var newtiming = req.body.newtiming;
    var besttime = req.body.besttime;
    var oldtime = req.body.oldtime;
    var score = req.body.score;
    var repetition = req.body.repetition;
    var newGame = new Game({
      level: level,
      game: game,
      besttime: besttime,
      newtiming: newtiming,
      oldtime: oldtime,
      score: score,
      repetition: repetition,
      studentId: studentId
    });
    newGame.save(function(err, newGame) {
      if (err) {
        res.json(err);
      } else {
        findStudent ( { "_id":studentId } )
        .then(function (student) {
          if(!student) {
            next(new Error('student does not exist'));
          } else {
            student.gameRecords.push(newGame._id)
            student.save();
            res.send(200,'done')
          }
        })
        .fail(function (err)) {
          res.json(newGame)
        }
      }
    });
  }
}   

