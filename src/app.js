'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();

app.use('/', express.static('public'));
app.use(parser.json());

app.listen(3000, function() {
  console.log("The server is running on Port 3000...");
});
