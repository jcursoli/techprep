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
  REMOVE_FRIEND,
  OPEN_DIALOG,
  CLOSE_DIALOG,
  REMOVE_INVITE,
  IGNORE_INVITE,
  CURRENT_ALGORITHM,
  CURRENT_CATEGORY,
  REMOVE_ERROR,
  UPDATE_VOTES,
  ANSWER_SUBMIT,
  ADD_STUDY_QUESTION,
  ALGORITHM_VOTE,
  RESPONSE_INITIALIZE,
  INITIALIZE_STUDY_QUESTIONS,
  ALGORITHM_COMMENT
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
      console.log('errorCode:', errorCode);
      console.log('errorMessage:', errorMessage);
      dispatch(authError(errorCode));
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
            photoURL: "https://i.imgur.com/DRuG5YH.png"
          }).then(function() {
            console.log('user update success', user);
            firebase.initializeState(user);
          }, function(error) {
            console.log('user update failed:', error);
          });
          dispatch({ type: AUTH_USER });
          dispatch({ type: INITIALIZE_USER, payload: {
            email: user.email,
            displayName: username,
            uid: user.uid,
            photoURL: "https://i.imgur.com/DRuG5YH.png"
          } });
          browserHistory.push('/welcome');
        }).catch(function(error) {
          console.log('error:', error);
          var errorCode = error.code;
          var errorMessage = error.message;
          dispatch(authError(errorCode));
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
  console.log('inside authError:', error);
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function addMessage(obj) {
  return function(dispatch) {
    console.log('addmessage action creator, obj:', obj);
    firebase.addMessage(obj);
    dispatch({ type: ADD_MESSAGE, payload: obj });
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
export function clickedAlgorithm(algorithm, index){
  return {
    type: CURRENT_ALGORITHM,
    payload: {
      algorithm,
      index
    }
  }
}

export function updateAlgorithmAnswers(answer, index, displayName) {
  return function(dispatch) {
    //firebase call to update answers at correct index
    firebase.updateAlgorithmAnswers(answer, index);
    //dispatch to add answer to current answers on state
    dispatch({type: ANSWER_SUBMIT, payload: {
      displayName,
      index,
      answer
    }});
  }
}

export function acceptFriendRequest(userObj) {
  return function(dispatch) {
    firebase.acceptFriendRequest(userObj);
    dispatch({ type: REMOVE_INVITE, payload: userObj });
  }
}

export function ignoreFriendInvite(userObj) {
  return function(dispatch) {
    console.log('inside ignoreFriendInvite dispatch before firebase call');
    firebase.ignoreFriendInvite(userObj);
    dispatch({ type: REMOVE_INVITE, payload: userObj });
  }
}

export function removeFriend(displayName) {
  return function(dispatch) {
    console.log('inside removeFriend action creator');
    firebase.removeFriend(displayName);
    dispatch({ type: REMOVE_FRIEND, payload: displayName });
  }
}

export function removeErrorMessage() {
  return function(dispatch) {
    dispatch({ type: REMOVE_ERROR });
  }
}

export function addVotes(commentIndex, questionIndex, next, upOrDown) {
  var payload = {
    commentIndex,
    questionIndex,
    next,
    upOrDown
  }
  return function(dispatch) {
    firebase.addVotesToDatabase(commentIndex, questionIndex, next, upOrDown);
    dispatch({ type: UPDATE_VOTES, payload })
  }
}

export function removeVotes(commentIndex, questionIndex, next, upOrDown) {
  var payload = {
    commentIndex,
    questionIndex,
    next,
    upOrDown
  }
  return function(dispatch) {
    firebase.removeVotesFromDatabase(commentIndex, questionIndex, next, upOrDown);
    dispatch({ type: UPDATE_VOTES, payload })
  }
}
export function userAlgorithmVote(index,vote){
  var payload = {}
 return function(dispatch){
    firebase.userAlgorithmVote(index,vote);
    dispatch({type:ALGORITHM_VOTE,payload});
  };
}export function userAlgorithmComment(index,comment){
  var payload = {}
 return function(dispatch){
    firebase.userAlgorithmComment(index,comment);
    dispatch({type:ALGORITHM_COMMENT,payload});
  };
}

export function currentCategory(category) {
  return {
    type: CURRENT_CATEGORY,
    payload: category
  }
}

export function addComment(currentUser, commentsList, commentID, commentBody) {
  var payload = {
    currentUser,
    commentsList,
    commentID,
    commentBody
  }
  return function(dispatch) {
    firebase.addCommentToDatabase(currentUser, commentsList, commentID, commentBody);
    dispatch({ type: UPDATE_VOTES, payload})

  }
}

export function addQuestionToStudyList(currentUser, questionID) {

  var payload = {
    currentUser,
    questionID
  }

  return function(dispatch) {
    firebase.addQuestionToStudyList(currentUser, questionID);
    dispatch({ type: ADD_STUDY_QUESTION, payload })
  }

}

export function removeQuestionFromStudyList(currentUser, questionID) {
  var payload = {
    currentUser,
    questionID
  }

  return function(dispatch) {
    firebase.removeQuestionFromStudyList(currentUser, questionID);
    dispatch({ type: ADD_STUDY_QUESTION, payload})
  }
}