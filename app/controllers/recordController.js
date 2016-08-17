var sendEmail = require('../../emailComms.js');
var Record = require('../models/record.js');
var Student = require('../models/student.js');
Q = require('q');
jwt = require('jwt-simple');

var findRecord = Q.nbind(Record.findOne, Record);
var createRecord = Q.nbind(Record.create, Record);
var findAllRecords = Q.nbind(Record.find, Record);
var findStudent = Q.nbind(Student.findOne, Student);

module.exports = {
  getAll : function (req, res, next){

    Record.find({}, function(err, users) {
      if(err){
        res.status(500).send(err);
      }
        res.json(users)
    })
  },
  getRecord : function (req,res,next) {
    var token = req.headers['x-access-token'];
    var user = jwt.decode(token, 'secret');
    Record.find({studentId: user._id}, function (err , records) {
      if(err)
        res.status(500).send(err);
      res.json(records);
    })
  },
  addRecord : function(req, res, next) {
  	var token = req.headers['x-access-token'];
    var user = jwt.decode(token, 'secret');
    console.log(req.body)
    //"Social": 0, "Preservation": 0, "SensoryDisturbance": 0, "CommunicationandDevelopment": 0, "AttentionandSafety": 0
    var studentId=user._id;
    var social = req.body.Social;
    var preservation = req.body.Preservation;
    var sensoryDisturbance = req.body.SensoryDisturbance;
    var communicationAndDevelopment = req.body.CommunicationandDevelopment;
    var attentionAndSafety = req.body.AttentionandSafety;
    //var centerId = req.body.centerId;
    console.log(attentionAndSafety)
    var newRecord = new Record({
      social: social,
      preservation: preservation,
      communicationAndDevelopment: communicationAndDevelopment,
      sensoryDisturbance: sensoryDisturbance,
      attentionAndSafety: attentionAndSafety,
      studentId: studentId
    });
    newRecord.save(function(err, newRecord) {
      if (err) {
        res.json(err);
      } else {
        findStudent ( { "_id":studentId } )
        .then(function (student) {
          if(!student) {
            next(new Error('student does not exist'));
          } else {
            student.records.push(newRecord._id)
            student.save();
            res.send(200,'done')
          }
        })
        .fail(function (err) {
          res.json(newRecord)
        })
      }
    });
  }
}   

