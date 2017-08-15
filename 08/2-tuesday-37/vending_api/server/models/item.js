'use strict';
module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define('item', {
    description: DataTypes.STRING,
    costInCents: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return item;
};