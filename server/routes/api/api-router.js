var express = require('express');
var router = express.Router();
var omdbApi = require('omdb-client');
var movieSearchHelper = require('./movie-search-helper');

/* GET users listing. */
router.get('/movie-detail/:imbdId', function(req, res, next) {
    var imbdId = req.params.imbdId;

    var params = {
        id: imbdId
    }

    omdbApi.get(params, function (err, data) {
        res.send(data);
    });

});

router.get('/movie-search', function(req,res,next) {
    movieSearchHelper(req.query, function(err,data) {
        if(err) {
            return next(err, null);
        }
        res.send(data);
    })
});

module.exports = router;
