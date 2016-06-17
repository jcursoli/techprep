import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  INITIALIZE_USER,
  SIGNOUT_USER
} from './actionTypes';
import * as firebase from '../firebase/firebase';

const ROOT_URL = 'http://localhost:8000';

export function loginUser({ email, password }) {
  return function(dispatch) {
    firebase.signInWithEmailAndPassword(email, password).then(user => {
      console.log('user after login:', user);
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

export function signupUser({ email, password }) {
  return function(dispatch) {
    firebase.createUserWithEmailAndPassword(email, password).then(user => {
      firebase.createUserInDatabase();
      console.log('then inside signup');
      dispatch({ type: AUTH_USER });
      dispatch({ type: INITIALIZE_USER, payload: {
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL
      } });
      browserHistory.push('/welcome');
    }).catch(function(error) {
      console.log('error:', error);
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(authError(errorMessage));
    });
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
