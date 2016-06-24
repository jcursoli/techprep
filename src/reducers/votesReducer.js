import {
  UPDATE_VOTES
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case UPDATE_VOTES:
      return {...state, ...action.payload};
    default:
      return state;
  }
}