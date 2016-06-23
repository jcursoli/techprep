import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import friends from './friendsReducer';
import user from './userReducer';
import chat from './chatReducer';
import questions from './questionsReducer';
import invites from './inviteReducer';
import { SIGNOUT_USER } from '../actions/actionTypes';
import dialog from './dialogReducer';
import algorithms from './algorithmReducer';
import currentAlgorithm from './currentProblemReducer';
import comments from './commentsReducer';
import votes from './votesReducer'
<<<<<<< 4bdf2b71fcf3f2b3037630404a3de10fb6e86dbc
=======

>>>>>>> [Update] Shows comments again

const appReducer = combineReducers({
  form,
  auth,
  friends,
  user,
  questions,
  chat,
  invites,
  dialog,
  algorithms,
  currentAlgorithm,
  comments,
<<<<<<< 4bdf2b71fcf3f2b3037630404a3de10fb6e86dbc
  votes,
=======
  votes
>>>>>>> [Update] Shows comments again
});

const rootReducer = (state, action) => {
  switch(action.type){
    case SIGNOUT_USER:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
}

export default rootReducer;