var Sequelize = require('sequelize');

var sequelize = new Sequelize('description', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

module.exports = sequelize;