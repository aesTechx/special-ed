'use strict';
module.exports = function(sequelize, DataTypes){
	var Student = sequelize.define('Student', {
	  	username: DataTypes.STRING,
	  	fullname: DataTypes.STRING,
	  	skillsResult: DataTypes.INTEGER,
	  	password: DataTypes.STRING,
	  	birthDate: DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models){
				Student.belongsTo(models.Center);
				Student.hasMany(models.Record);
				Student.hasMany(models.Teacher);
				Student.hasMany(models.Game);
			}
		}
	});
	return Student;
};