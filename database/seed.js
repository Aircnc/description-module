var fakeData = require('../utils/fake_data.js');
var db = require('./index.js');
var {Properties, Reviews, Owners} = require('./models.js');

var results = fakeData(100);
Properties.bulkCreate(results.properties)
  .then(() => { return Reviews.bulkCreate(results.reviews); })
  .then(() => { return Owners.bulkCreate(results.owners); })
  .catch(err => { console.log(err); })
  .then(() => { db.close(); });