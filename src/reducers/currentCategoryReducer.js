import {
  CURRENT_CATEGORY
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}