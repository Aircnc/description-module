var Sequelize = require('sequelize');

var sequelize = new Sequelize('description', 'root', null, {
  operatorsAliases: false,
  host: 'database', //previously database
  dialect: 'mysql',

  pool: {
  	max: 5,
  	min: 0,
  	idle: 1
  }
});

module.exports = sequelize;