var express = require('express');
var router = express.Router();
var omdbApi = require('omdb-client');

var params = {
    title: 'Terminator',
    year: 2012
}


/* GET home page. */
router.get('/', function (req, res, next) {
    omdbApi.get(params, function (err, data) {
        res.send(data);
    });
});


module.exports = router;
