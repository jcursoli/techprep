import {
  LOAD_QUESTIONS
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case LOAD_QUESTIONS:
      return [ ...action.payload ];
    default:
      return state;
  }
}