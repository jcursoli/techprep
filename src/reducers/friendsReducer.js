import {
  INITIALIZE_FRIENDS,
  ADD_FRIEND
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_FRIENDS:
      console.log('inside reducer friends');
      console.log('action payload in friends reducer:', action.payload);
      return { ...state, ...action.payload};
    case ADD_FRIEND:
    console.log('add friend');
      return state;
    default:
      return state;
  }
}