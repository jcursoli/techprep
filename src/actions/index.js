import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  INITIALIZE_USER,
  SIGNOUT_USER,
  ADD_MESSAGE,
  ADD_FRIEND
} from './actionTypes';
import * as firebase from '../firebase/firebase';

export function loginUser({ email, password }) {
  return function(dispatch) {
    firebase.signInWithEmailAndPassword(email, password).then(user => {
      dispatch({ type: AUTH_USER });
      dispatch({ type: INITIALIZE_USER, payload: {
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL
      } });
      browserHistory.push('/welcome');
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(authError(errorMessage));
    });
  }
};

export function signupUser({ username, email, password }) {
  return function(dispatch) {
    firebase.checkDisplayName(username).then(user => {
      if (!user.exists()) {
        firebase.createUserWithEmailAndPassword(email, password).then(user => {
          firebase.createDisplayName(username);
          firebase.createUserInDatabase(username);
          user.updateProfile({
            displayName: username,
            photoURL: "http://i.imgur.com/DRuG5YH.png"
          }).then(function() {
            console.log('user update success');
          }, function(error) {
            console.log('user update failed:', error);
          });
          dispatch({ type: AUTH_USER });
          dispatch({ type: INITIALIZE_USER, payload: {
            email: user.email,
            displayName: username,
            uid: user.uid,
            photoURL: "http://i.imgur.com/DRuG5YH.png"
          } });
          browserHistory.push('/welcome');
        }).catch(function(error) {
          console.log('error:', error);
          var errorCode = error.code;
          var errorMessage = error.message;
          dispatch(authError(errorMessage));
        });
      } else {
        console.log('username already exists');
      }
    })
  }
}

export function signoutUser() {
  return function(dispatch) {
    firebase.signOutUser().then(function() {
      dispatch({ type: UNAUTH_USER });
      dispatch({ type: SIGNOUT_USER });
    }, function(error) {
      // error
      console.log('Error:', error);
    });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function addMessage(obj) {
  return {
    type: ADD_MESSAGE,
    payload: obj
  };
}

export function addFriend(friend) {
  return function(dispatch) {
    console.log('inside addFriend action creator, friend is:', friend);
    //do firebase check to see if friends uid exists, if it does, then add to that uid's friendsinvites
    firebase.checkIfUserExists(friend).then(user => {
      console.log('user:', user.exists());
      if (user.exists()) {
      //if user exists, add pending invite to their invite list
        console.log('user exists');
        firebase.addFriendInvite(friend);
        dispatch({ type: ADD_FRIEND });
      } else {
      // if user does not exist, relay error message back to client
        console.log('user does not exist');
      }
    }).catch(err => {
      console.log('err:', err);
    });
  }
}