'use strict';
module.exports = function(sequelize, DataTypes) {
	var Record = sequelize.define('Record', {
		social:  DataTypes.INTEGER,
		preservation:  DataTypes.INTEGER,
		sensoryDisturbance:  DataTypes.INTEGER,
		communicationAndDevelopment:  DataTypes.INTEGER,
		attentionAndSafety:  DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				Record.belongsTo(models.Student);
			}
		}
	});
	return Record;
};