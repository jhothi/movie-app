var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/Users');

passport.use('local-signup', new LocalStrategy(function(username,password,done) {
	User.findOne({username: username}, function(err, user) {
		if(err) {
			return done(err, null);
		}
		//username already exists
		if(user) {
			return done(null, null)
		}
		else {
			var newUser = new User();
			newUser.username = username;
			newUser.password = newUser.generateHash(password);
			
			return done(null, user);
		}
	})
}
))