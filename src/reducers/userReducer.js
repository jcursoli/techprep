import {
  INITIALIZE_USER,
  SIGNOUT_USER
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_USER:
      return { ...state, ...action.payload };
    case SIGNOUT_USER:
      const newState = {
        email: null,
        uid: null,
        photoURL: null
      };
      return newState;
    default:
      return state;
  }
}