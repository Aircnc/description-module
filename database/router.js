var db = require('./index.js');
var {Properties, Reviews, Owners} = require('./models.js');

var findOne = (id, callback) => {
  Properties.findByPk(id, {
  	include: [{
  	  model: Reviews
  	},
  	{
  	  model: Owners
  	}]
  }).then(properties => {
  	callback(properties);
  })
}

module.exports = findOne;