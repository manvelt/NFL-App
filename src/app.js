'use strict';

var express = require('express');
var parser = require('body-parser');
// var router = require("./api");
var app = express();

// Read requirments on seed.js file
// require('./seed');


app.use('/', express.static('public'));
app.use(parser.json());
// app.use('/api', router);

app.listen(3000, function() {
  console.log("The server is running on Port 3000...");
});
