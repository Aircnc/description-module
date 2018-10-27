var Sequelize = require('sequelize');
var sequelize = require('./index.js');

var Properties = sequelize.define('properties', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: Sequelize.STRING,
  description: Sequelize.JSON,
  amenities: Sequelize.JSON,
  amenities: Sequelize.JSON,
  location: Sequelize.JSON,
  reviewIds: Sequelize.JSON,
  owner: Sequelize.STRING
}, {timestamps: false});

var Owners = sequelize.define('owners', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: Sequelize.STRING,
  superStatus: Sequelize.BOOLEAN,
  avatar: Sequelize.STRING,
  contact: Sequelize.JSON
}, {timestamps: false});

var Reviews = sequelize.define('reviews', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  created: Sequelize.STRING,
  ratings: Sequelize.JSON,
  property: Sequelize.STRING
}, {timestamps: false});

Properties.sync();
Owners.sync();
Reviews.sync();

module.exports.Properties = Properties;
module.exports.Owners = Owners;
module.exports.Reviews = Reviews;
