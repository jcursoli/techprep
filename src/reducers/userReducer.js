import {
  INITIALIZE_USER,
  SIGNOUT_USER
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}