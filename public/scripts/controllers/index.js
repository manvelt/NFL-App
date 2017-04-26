'use strict';

angular.module('NFLApp')
.controller('indexCtrl' , function($scope, $location) {
  $scope.login = function(username, password) {
    if($scope.username === "admin" && $scope.password === "1234") {
      parent.location="games.html";
    } else {
      $scope.errorMessage = "Invalid username/password";
    };
  };
});
