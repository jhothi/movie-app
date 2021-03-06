'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SearchCtrl', function ($scope, $location, movieService) {
    var query = $location.search().q;
    movieService.search(query).then(function(result) {
      $scope.movies = result.data;
    });
    $scope.goToDetail = function(movie) {
      $location.path('/movie-detail/' + movie.imdbID).search({});
    }

  });
