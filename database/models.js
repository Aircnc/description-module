var Sequelize = require('sequelize');
var sequelize = require('./index.js');

var Properties = sequelize.define('properties', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: Sequelize.STRING,
  description: Sequelize.JSON,
  amenities: Sequelize.JSON,
  location: Sequelize.JSON,
  ownersId: Sequelize.INTEGER,
  reviewIds: Sequelize.JSON
}, {timestamps: false});

var Owners = sequelize.define('owners', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  superStatus: Sequelize.BOOLEAN,
  avatar: Sequelize.STRING,
  contact: Sequelize.JSON
}, {timestamps: false});

var Reviews = sequelize.define('reviews', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  created: Sequelize.STRING,
  ratings: Sequelize.JSON
}, {timestamps: false});

Properties.hasMany(Reviews, { foreignKey: {name: 'propertyId'} });
Reviews.belongsTo(Properties);

Properties.hasOne(Owners);
Owners.belongsTo(Properties);

Properties.sync();
Owners.sync();
Reviews.sync();

module.exports.Properties = Properties;
module.exports.Owners = Owners;
module.exports.Reviews = Reviews;

// ,
//   property: Sequelize.STRING
// ,
//   owner: Sequelize.STRING
