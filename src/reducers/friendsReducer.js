import {
  INITIALIZE_FRIENDS,
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_FRIENDS:
      console.log('inside reducer friends');
      return { ...state };
    default:
      return state;
  }
}