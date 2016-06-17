import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBBBowxlfghEwetZ6tP6On58nQ30kqHT6M",
  authDomain: "mks38thesis.firebaseapp.com",
  databaseURL: "https://mks38thesis.firebaseio.com",
  storageBucket: "mks38thesis.appspot.com",
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user is:', user);
      console.log('if user');
    } else {
      console.log('if user else');
    }
});

export function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function createUserWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

export function signOutUser() {
  return firebase.auth().signOut();
}