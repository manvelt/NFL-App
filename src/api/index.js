'use strict';

var express = require('express');
var User = require('../models/users');
var router = express.Router();

// GET Login Page
router.get('/', function(req, res) {
  // res.json({message: 'Successfully accesing through our API'});
  User.find({}, function(err, users) {
    if(err) {
      return res.status(500).json({message: err.message});
    }
    res.json({users: users});
  });
});

module.exports = router;
