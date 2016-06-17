import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import friends from './friendsReducer';

const rootReducer = combineReducers({
  form,
  auth,
  friends
});

export default rootReducer;