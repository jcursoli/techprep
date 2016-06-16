const jwt = require('jwt-simple');
// const User = require('../models/user');
const config = require('../config');
const firebaseFile = require('../firebase/firebase');
const firebase = require('firebase');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had email and password auth'd
  // We just need to give them a token
  console.log('req', req);
  console.log('req.user', req.user);
  res.send({ token: tokenForUser(req.user) });
}

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password || !username) {
    return res.status(422).send({ error: 'You must provide username, email, and password' });
  }
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Email:', email);

  var token = firebase.auth().createCustomToken('uuu');
  console.log('token:', token);
  // firebase.auth().verifyIdToken(token).then(function(decodedToken) {
  //    console.log('then:',decodedToken);
  // }, function(error){
  //      console.log('error:',error);
  // });
  // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  //   // Handle Errors here.
  //   console.log('inside firebase auth catch');
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });
  // See if a user with the given email exists
  // User.findOne({ email: email }, function(err, existingUser) {
  //   if(err) { return next(err); }

  //   // If a user with email exists, return an error
  //   if(existingUser) {
  //     return res.status(422).send({ error: 'Email is in use'});
  //   }
  //   // If a user with email does not exist, create and save user record
  //   const user = new User({
  //     email: email,
  //     password: password
  //   });

  //   user.save(function(err) {
  //     if(err) { return next(err); }
  //   });
  //   // Respond to request indicating the user was created
  //   res.json({ token: tokenForUser(user) });
  // });
};