'use strict';
module.exports = function(sequelize, DataTypes) {
	var Game = sequelize.define('Game', {
		newtiming: DataTypes.INTEGER,
		besttime: DataTypes.INTEGER,
		oldtime: DataTypes.INTEGER,
		repetition: DataTypes.INTEGER,
		right: DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				 Game.hasMany(models.Student);
			}
		}
	});
	return Game;
};