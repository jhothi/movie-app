'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDetailCtrl
 * @description
 * # MovieDetailCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieDetailCtrl', function ($scope, $routeParams, movieService) {
    var id = $routeParams.id;


    movieService.getDetail(id).then(function (movieData) {
      $scope.movie = movieData.data;
    });

  });
