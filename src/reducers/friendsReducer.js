import {
  INITIALIZE_FRIENDS,
  ADD_FRIEND,
  REMOVE_FRIEND
} from '../actions/actionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_FRIENDS:
      // console.log('inside reducer friends');
      // console.log('action payload in friends reducer:', action.payload);
      return { ...state, ...action.payload};
    case ADD_FRIEND:
      // console.log('add friend');
      return state;
    case REMOVE_FRIEND:
      // console.log('remove friend', action.payload);
      var newState = { ...state };
      // console.log('newstate:', newState);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
}