var {Properties, Reviews, Owners} = require('./models.js');

var findOne = (id, callback) => {
  Properties.findById(id).then(property => {
  	callback(property);
  })
}

module.exports = findOne;