var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var findOne = require('../database/router.js');

var app = express();
var port = 3002;

app.use(bodyParser());
app.use('/listings/:id', express.static(path.join(__dirname, '../public')));

app.get('/listings/:id/description', cors(), (req, res) => {
  findOne(req.params.id, (data) => {
    var amenities = data.amenities;
    var categories = [];
    var isAllAvailable = [];
    var isLeftAvailable = [];
    var isRightAvailable = [];
    var notAvailable = [];
    var availableCount = 0;
    for (var key in amenities) {
      var sub = [];
      categories.push(key);
      for (var i = 0; i < amenities[key].length; i++) {
        for (var k in amenities[key][i]) {
          if (amenities[key][i][k]) {
            availableCount++;
            sub.push(k);
            if (isLeftAvailable.length < 3) {
              isLeftAvailable.push(k);
            } else if (isRightAvailable.length < 3) {
              isRightAvailable.push(k);
            }
          } else {
            notAvailable.push(k);
          }
        }
      }
      isAllAvailable.push(sub);
    }
    data.amenities = {amenities: amenities, categories: categories, isLeft: isLeftAvailable, isRight: isRightAvailable, isAll: isAllAvailable, count: availableCount, not: notAvailable};
    res.status(200).send(data);
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});