import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import friends from './friendsReducer';
import user from './userReducer';
import chat from './chatReducer';
import questions from './questionsReducer';
import dialog from './dialogReducer';

const rootReducer = combineReducers({
  form,
  auth,
  friends,
  user,
  questions,
  dialog
});

export default rootReducer;