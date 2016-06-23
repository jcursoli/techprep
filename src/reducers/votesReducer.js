import {
  UPDATE_VOTES
} from '../actions/actionTypes';

export default function(state = {}, action) {
  // console.log('this is the in the votes reducer');
  switch(action.type){
    case UPDATE_VOTES:
      // console.log('action.payload in votesReducer', action.payload)
      return {...state, ...action.payload};
    default:
      return state;
  }
}