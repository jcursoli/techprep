import {
  INITIALIZE_CHAT,
} from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type){
    case INITIALIZE_CHAT:
      console.log('inside reducer chat');
      return { ...state };
    default:
      return state;
  }
}