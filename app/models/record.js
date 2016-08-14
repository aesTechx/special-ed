'use strict';
module.exports = function(sequelize, DataTypes) {
	var Record = sequelize.define('Record', {
		SOCIAL:  DataTypes.INTEGER,
		PERSEVERATION:  DataTypes.INTEGER,
		SOMATOSENSORY_DISTURBANCE:  DataTypes.INTEGER,
		COMMUNICATION_AND_DEVELOPMENT:  DataTypes.INTEGER,
		ATTENTION_AND_SAFETY:  DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				Record.belongsTo(models.Student);
			}
		}
	});
	return Record;
};