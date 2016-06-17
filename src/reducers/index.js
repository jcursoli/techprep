import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import friends from './friendsReducer';
import user from './userReducer';
import chat from './chatReducer';

const rootReducer = combineReducers({
  form,
  auth,
  friends,
  user
});

export default rootReducer;