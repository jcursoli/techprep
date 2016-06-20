import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  INITIALIZE_USER,
  SIGNOUT_USER,
  ADD_MESSAGE,
  ADD_FRIEND,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  REMOVE_INVITE
} from './actionTypes';
import * as firebase from '../firebase/firebase';

export function loginUser({ email, password }) {
  return function(dispatch) {
    firebase.signInWithEmailAndPassword(email, password).then(user => {
      dispatch({ type: AUTH_USER });
      dispatch({ type: INITIALIZE_USER, payload: {
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL
      } });
      firebase.initializeState(user);
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
            console.log('user update success', user);
            firebase.initializeState(user);
          }, function(error) {
            console.log('user update failed:', error);
          });
          dispatch({ type: AUTH_USER });
          dispatch({ type: INITIALIZE_USER, payload: {
            email: user.email,
            displayName: user.displayName,
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
    firebase.checkIfUserExists(friend).then(user => {
      if (user.exists()) {
        firebase.addFriendInvite(friend);
        dispatch({ type: ADD_FRIEND });
      } else {
        console.log('User does not exist');
      }
    }).catch(err => {
      console.log('err:', err);
    });
  }
}

export function openDialog(answer){
  return {
    type: OPEN_DIALOG,
    payload: answer
  }
};
export function closeDialog(){
   return {
      type: CLOSE_DIALOG
   }
};
export function acceptFriendRequest(userObj) {
  console.log('inside action creator acceptFriendRequest', userObj);
  return function(dispatch) {
    firebase.acceptFriendRequest(userObj);
    dispatch({ type: REMOVE_INVITE, payload: userObj });
  }
}