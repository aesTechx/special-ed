var Sequelize = require('sequelize');
var path = require ('path');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = new Sequelize('learning', 'root', '');

if (config.use_env_variable) {
	var sequalize = new Sequalize(process.env[config.use_env_variable])
} else {
	var sequalize = new Sequelize(config.database, config.username, config.password, config)
}

var Center = db.define('Center', {
  centername: Sequelize.STRING,
  username: Sequelize.STRING,
  password:Sequelize.STRING
});

var Student = db.define('Student',{
	username:Sequelize.STRING,
	fullname:Sequelize.STRING,
	skillsResult: Sequelize.INTEGER,
	password: Sequelize.STRING,
	birthDate:Sequelize.INTEGER///DATA DATATYPE
});

var Teacher = db.define('Teacher',{
	username:Sequelize.STRING,
	fullname:Sequelize.STRING,
	password: Sequelize.STRING,
	category:Sequelize.STRING
});

var Record = db.define('Record',{
	communicationSkills:Sequelize.INTEGER,
	speechSkills:Sequelize.INTEGER,
	usingBodyMovement:Sequelize.INTEGER,
	usingTools:Sequelize.INTEGER,
	fitWithOthers:Sequelize.INTEGER,
	visual:Sequelize.INTEGER,
	audio:Sequelize.INTEGER,
	fearNervous:Sequelize.INTEGER,
	verbalCommunication:Sequelize.INTEGER,
	nonVerbalCommunication:Sequelize.INTEGER,
	activityLevel:Sequelize.INTEGER,
	cognitive:Sequelize.INTEGER,
	smellTest:Sequelize.INTEGER,
	emotional:Sequelize.INTEGER,
	skillsResult:Sequelize.INTEGER
});

var Game = db.define('Game',{
	newtiming:Sequelize.INTEGER,
	besttime:Sequelize.INTEGER,
	oldtime:Sequelize.INTEGER,
	repetition:Sequelize.INTEGER,
	right:Sequelize.INTEGER
});

Student.belongsTo(Center);
Center.hasMany(Student);

Teacher.belongsTo(Center);
Center.hasMany(Teacher);

Record.belongsTo(Student);
Student.hasMany(Record);

Student.hasMany(Teacher);
Teacher.hasMany(Student);

Student.hasMany(Game);
Game.hasMany(Student);

Student.sync();
Teacher.sync();
Center.sync();
Record.sync();
Game.sync();

exports.Student = Student;
exports.Teacher = Teacher;
exports.Center = Center;
exports.Game = Game;
exports.Record = Record;