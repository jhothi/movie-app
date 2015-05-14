var omdbApi = require('omdb-client');

module.exports = function(query, callback) {
     getMovieIds(query, function(err,data) {
         return movieSearch(err,data,callback);
     });
}

/**
 * Returns detailed info for each of the given Ids
 * @param err error
 * @param ids an array of movie Ids
 * @param responseCallback
 * @returns {*} responseCallback
 */
var movieSearch = function(err, ids, responseCallback) {
    if(err) {
        return responseCallback(err, null);
    }
    var movieData = [];
    ids.forEach(function (id) {
        omdbApi.get({id: id}, function (err, movieInfo) {
            if(err) {
                return responseCallback(err, null);
            }
            movieData.push(movieInfo);
            if (movieData.length === ids.length) {
                return responseCallback(null, movieData);
            }
        });
    });
}

/**
 * Gets the Ids of of all the items returned from the ombd Api
 * @param query the string to search for
 * @param movieCallback gets the movieData for each id
 */
var getMovieIds = function(query, movieCallback) {
    var imdbIds;
    omdbApi.search(query, function (err, data) {
        if(err) {
            return movieCallback(err, null);
        }
        imdbIds = data.Search.map(function (movie) {
            return movie.imdbID;
        });
        return movieCallback(null,imdbIds);
    });
}