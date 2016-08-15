'use strict';
module.exports = function(sequelize, DataTypes) {
	var Student = sequelize.define('Student', {
		username: DataTypes.STRING ,
		fullname: DataTypes.STRING,
		skillsResult: DataTypes.INTEGER,
		password: DataTypes.STRING,
		birthdate: DataTypes.DATEONLY,
		centerId: DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				Student.belongsTo(models.Center);
				Student.hasMany(models.Record);
				Student.belongsToMany(models.Teacher,{through:"StudentTeacher"});
				Student.belongsToMany(models.Game,{through:"GameStudent"});
			}
		}
	});
	return Student;
};