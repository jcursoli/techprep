import {
  LOAD_COMMENTS
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case LOAD_COMMENTS:
      return _.map(action.payload, (obj) => obj);
    default:
      return state;
  }
}