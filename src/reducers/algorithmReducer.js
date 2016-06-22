import {
  INITIALIZE_ALGORITHMS,
} from '../actions/actionTypes';

export default function(state = [], action) {
  switch(action.type){
    case INITIALIZE_ALGORITHMS:
      console.log('initializing algorithms', action.payload);
      return [ ...action.payload ];
    default:
      return state;
  }
}