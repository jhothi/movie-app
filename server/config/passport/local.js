var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/Users');

module.exports = function (passport) {
    passport.use('local-signup', new LocalStrategy(
        function (username, password, done) {
        User.findOne({username: username}, function (err, user) {
            if (err) {
                return done(err, false);
            }
            //username already exists
            if (user) {
                return done(null, false)
            }
            else {
                var newUser = new User();
                newUser.username = username;
                newUser.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if (err) {
                        return done(err, false);
                    }
                    else {
                        return done(null, newUser);
                    }
                });
            }
        });
    }));

    passport.use('local-login', new LocalStrategy(
        function(username,password,done) {
            User.findOne({username: username}, function(err, user) {
                if(err) {
                    return done(err, null);
                }
               if(user) {
                   if(user.validPassword(password)) {
                       //valid user
                       return done(null, user);
                   }
                   else {
                       //incorrect password
                       return done(null, false);
                   }
               }
                else {
                   //no user found
                   return done(null, false);
               }
            });

        }
    ))

    passport.serializeUser(function (user, done) {
        return done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}