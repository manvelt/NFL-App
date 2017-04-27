/* This javascript file should only be run when nothing is in the database.
 * Once the user information is in the database, DO NOT include this file
 * in app.js
 */

'use strict';

var User = require('./models/users.js');

var users = [
  {
    username: "admin",
    password: "1234"
  },
  {
    username: "admin2",
    password: "4321"
  }
];

users.forEach(function(user, index) {
  User.find({'username': user.username}, function(err, users) {
    if(!err && !users.length) {
      User.create({username: user.username, password: user.password});
    }
  });
});
