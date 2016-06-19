import {
  INITIALIZE_FRIENDS,
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_FRIENDS:
      console.log('inside reducer friends');
      console.log('action payload in friends reducer:', action.payload);
      return { ...state, ...action.payload};
    default:
      return state;
  }
}