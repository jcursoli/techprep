import {
  CURRENT_ALGORITHM
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case CURRENT_ALGORITHM:
      return action.payload;
    default:
      return state;
  }
}