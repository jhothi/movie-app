'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDetailCtrl
 * @description
 * # MovieDetailCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDetailCtrl', function ($scope, $routeParams, $http) {
    var id = $routeParams.id;


    //TODO move to service
    $http.get('/api/movie-detail/' + id).success(function(data) {
      $scope.movie = data;
    });

  });
