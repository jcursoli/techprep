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

export function createUserInDatabase() {
  var user = firebase.auth().currentUser;
  console.log('user:', user);
  var userRef = firebase.database().ref('users/' + user.uid);
  userRef.set({
    email: user.email,
    friends: [],
    profileURL: 'http://i.imgur.com/DRuG5YH.png',
    messages: [],
    answered: []
  });
}