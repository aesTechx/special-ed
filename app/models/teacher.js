'use strict';
module.exports = function(sequelize, DataTypes) {
	var Teacher = sequelize.define('Teacher', {
		teachername: DataTypes.STRING,
		fullname: DataTypes.STRING,
		category: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Teacher.belongsTo(models.Center);
				Teacher.belongsToMany(models.Student,{through:"StudentTeacher"});
			}
		}
	});
	return Teacher;
};