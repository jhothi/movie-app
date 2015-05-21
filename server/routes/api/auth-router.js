var express = require('express');
var router = express.Router();
var passport = require('passport');

router.post('/signup', passport.authenticate('local-signup'), function(req, res) {
    res.send("Signed Up" + req.user);
});

router.post('/login', passport.authenticate('local-login'), function(req,res) {
    res.send("Logged In" + req.user);
    console.log(req.isAuthenticated());
});


module.exports = router;