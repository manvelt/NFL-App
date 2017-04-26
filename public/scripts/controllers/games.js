'use strict';

angular.module('NFLApp')
.controller('gamesCtrl', function($scope, $http) {
  $http.get('mock/games.json').then(function(response) {
    $scope.games = response.data;
  });

  $scope.divisions = [
    {division: "AFC East"},
    {division: "AFC West"},
    {division: "NFC East"},
    {division: "NFC West"}
  ];

  $scope.teams = [
    {team: "Buffalo Bills"},
    {team: "Baltimore Ravens"},
    {team: "Carolina Panthers"},
    {team: "Denver Broncos"},
    {team: "Cincinnati Bengals"},
    {team: "New York Jets"},
    {team: "New England Patriots"},
    {team: "Arizona Cardinals"},
    {team: "Miami Dolphins"},
    {team: "Seattle Seahawks"},
    {team: "Pittsburgh Steelers"},
    {team: "Washington Redskins"},
    {team: "Cleveland Browns"},
    {team: "Philadelphia Eagles"},
    {team: "Minnesota Vikings"},
    {team: "Tennessee Titans"},
    {team: "Green Bay Packers"},
    {team: "Jacksonville Jaguars"},
    {team: "Chicago Bears"},
    {team: "Houston Texans"},
    {team: "Detroit Lions"},
    {team: "Indianapolis Colts"},
    {team: "San Diego Chargers"},
    {team: "Kansas City Chiefs"},
    {team: "Oakland Raiders"},
    {team: "New Orlean Saints"},
    {team: "New York Giants"},
    {team: "Dallas Cowboys"},
    {team: "Tampa Bay Buccaneers"},
    {team: "Atlanta Falcons"},
    {team: "Los Angeles Rams"},
    {team: "San Francisco 49ers"}
  ];

  $scope.started = false;
  $scope.showWinner = function(index) {
    $scope.started = true;
    console.log("Index of " + index);
    console.log($scope.started);
  };
});
