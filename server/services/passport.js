const passport = require('passport');
// const User = require('../models/user');
const config = require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  // Verify this email and password, then call done with email if correct
  // Otherwise, call done with false
  console.log('inside localLogin');
  console.log('email:', email, 'password', password);
  // User.findOne({ email: email }, function(err, user) {
  //   if(err) { console.log('inside if err'); return done(err); }
  //   if(!user) { console.log('no user found'); return done(null, false); }

  //   // Compare passwords: is password equal to user.password?
  //   console.log('about to compare passwords');
  //   user.comparePassword(password, function(err, isMatch) {
  //     if(err) { console.log('if err inside compare password'); return done(err); }
  //     if(!isMatch) { console.log('password not match'); return done(null, false); }
      
  //     return done(null, user);
  //   });
  // });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If so, call done with that user
  // Otherwise, call done without a user object
  // User.findById(payload.sub, function(err, user) {
  //   if(err) { return done(err, false); }

  //   if(user) {
  //     done(null, user);
  //   } else {
  //     done(null, false);
  //   }
  // });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);