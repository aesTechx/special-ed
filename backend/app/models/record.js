'use strict';
module.exports = function(sequelize, DataTypes) {
	var Record = sequelize.define('Record', {
		communicationSkills: DataTypes.INTEGER,
		speechSkills: DataTypes.INTEGER,
		usingBodyMovement: DataTypes.INTEGER,
		usingTools: DataTypes.INTEGER,
		fitWithOthers: DataTypes.INTEGER,
		visual: DataTypes.INTEGER,
		audio: DataTypes.INTEGER,
		fearNervous: DataTypes.INTEGER,
		verbalCommunication: DataTypes.INTEGER,
		nonVerbalCommunication: DataTypes.INTEGER,
		activityLevel: DataTypes.INTEGER,
		cognitive: DataTypes.INTEGER,
		smellTest: DataTypes.INTEGER,
		emotional: DataTypes.INTEGER,
		skillsResult: DataTypes.INTEGER
	}, {
		classMethods: {
			associate: function(models) {
				Record.belongsTo(models.Student);
			}
		}
	});
	return Record;
};