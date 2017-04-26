'use strict';

var express = require('express');
var User = require('../models/users');
var router = express.Router();

// // GET Login Page
// router.get('/' function(req, res) {
//   console.log("Using express to access login page");
// });

// POST method to Login
router.post('/login', function(req, res) {
  console.log(req.body);
});
