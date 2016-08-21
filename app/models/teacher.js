'use strict';
module.exports = function (sequelize, DataTypes) {
  var Teacher = sequelize.define ('Teacher', {
    username: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    category: DataTypes.STRING,
    emergencyCall: DataTypes.INTEGER,
address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        Teacher.belongsTo (models.Center);
        Teacher.hasMany (models.Student);
      }
    }
  });
  return Teacher;
};