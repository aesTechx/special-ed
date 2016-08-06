'use strict';
module.exports = function(sequelize, DataTypes) {
	var Teacher = sequelize.define('Teacher', {
		username: DataTypes.STRING,
		fullname: DataTypes.STRING,
		skillsResult: DataTypes.INTEGER,
		password: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Teacher.belongsTo(models.Center);
				Teacher.hasMany(models.Student);
			}
		}
	});
	return Teacher;
};