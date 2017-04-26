'use strict';

var mongoose = require('mongoose');

// user.username
// user.password

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

var model = mongoose.model('Login', userSchema);

module.exports = model;
