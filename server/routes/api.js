var express = require('express');
var router = express.Router();
var omdbApi = require('omdb-client');

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

module.exports = router;
