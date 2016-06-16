const firebase = require('firebase');
const path = require('path');

firebase.initializeApp({
  serviceAccount: path.resolve(__dirname + "/../MKS38Thesis-19c0644b4789.json"),
  databaseURL: "https://mks38thesis.firebaseio.com"
});

const db = firebase.database();
const ref = firebase.database().ref();
exports.setFirebase = function(req, res, next) {
  ref.set({
      test: {what: 'ok'},
      whatisthis: 1
  });
};