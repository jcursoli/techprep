import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
} from './actionTypes';
import * as firebase from '../firebase/firebase';

const ROOT_URL = 'http://localhost:8000';

export function loginUser({ email, password }) {
  console.log('email:', email, 'password:', password);
  return function(dispatch) {
    firebase.signInWithEmailAndPassword(email, password).then((response) => {
      dispatch({ type: AUTH_USER });
      browserHistory.push('/welcome');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      dispatch(authError(errorMessage));
    });
  }
};

export function signupUser({ email, password }) {
  return function(dispatch) {
    firebase.createUserWithEmailAndPassword(email, password).then(response => {
      console.log('inside auth signup')
      dispatch({ type: AUTH_USER });
      browserHistory.push('/welcome');
    }).catch(function(error) {
      console.log('inside auth signup erro is =>>',error);
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
