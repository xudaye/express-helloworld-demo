var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.listen(3000, function () {
  console.log('Server listening at http://localhost:3000');
});