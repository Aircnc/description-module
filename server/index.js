var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var port = 3002;

app.use(bodyParser());
app.use(express.static(path.join(__dirname, '../public')));
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});