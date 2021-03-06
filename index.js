var express = require('express');
var request = require('request');
var app = express();

app.use('/lib', express.static(__dirname + '/node_modules'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
  console.log(req.query);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});