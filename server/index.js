var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var findOne = require('../database/router.js');

var app = express();
var port = 3002;

app.use(bodyParser());
app.use("/:id/description", express.static(path.join(__dirname, '../public')));

app.get("/:id/description", (req, res) => {
  console.log(req.params);
  findOne(req.params.id, (data) => {
  	res.status(200).send(data);
  })
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});