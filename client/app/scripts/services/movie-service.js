'use strict';

/**
 * @ngdoc service
 * @name clientApp.movieService
 * @description
 * # movieService
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('movieService', ['$http',function ($http) {
    this.search = function(q) {
      var config = {
        method: 'GET',
        url: 'api/movie/movie-search',
        params: {query: q}
      }
      return $http(config);
    }
    this.getDetail = function(id) {
      var config = {
        method: 'GET',
        url: 'api/movie/movie-detail/' + id
      }
      return $http(config);
    }
  }]);
