import {
  INITIALIZE_USER,
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_USER:
      console.log('inside reducer user');
      return { ...state };
    default:
      return state;
  }
}