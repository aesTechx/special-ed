'use strict';
module.exports = function (sequelize, DataTypes) {
	var Center = sequelize.define('Center', {
		centername: DataTypes.STRING,
		username: DataTypes.STRING,
		password: DataTypes.STRING
	}, {
		classMethods: {
			associate: function(models) {
				Center.hasMany(models.Student);
				Center.hasMany(models.Teacher);
			}
		}
	});
	return Center;
};