var db = require('./index.js');
var {Properties, Reviews, Owners} = require('./models.js');

var findOne = (id, callback) => {
  // Properties.findById(id).then((err, property) => {
  // 	if (err) {
  // 	  callback(err);
  // 	} else {
  // 	  //callback(property);
  // 	}
  // });
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